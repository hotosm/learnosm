---
layout: doc
title: Configuration du Stockage de Données Séparé
permalink: /fr/advanced/private-data-storage/
lang: fr
category: advanced
otherguides: "Les autres niveaux"
---

Configuration du Stockage de Données Séparé (Private Data Store)
=================================================================


Introduction
------------

Dans un chapitre précédent, nous avons appris à utiliser le Stockage de
Données Séparé (SDS) de HOT, une base de données qui permet de stocker à
part certaines données et de les combiner avec la donnée OpenStreetMap.

![image](/images/fr/0400-12-25-private-data-storage-config/image00.png)

Dans ce chapitre, nous allons apprendre à configurer une instance du
Stockage de Données Séparé (SDS) sur un serveur. C’est un sujet de
niveau avancé, destiné en priorité à ceux qui possèdent une expérience
en création et hébergement de sites web. Ces instructions sont écrites
pour une utilisation avec le système d'exploitation Ubuntu Linux
(version \>= 11.10). Si vous ne parvenez pas à utiliser Ubuntu, vous
pouvez essayer de mettre en place une machine virtuelle. Nous avons
fourni des instructions pour la configuration de la machine virtuelle en
complément de ce guide.

1. L’application SDS
--------------------

Le Stockage de Données Séparé (SDS) permet aux utilisateurs de combiner
les données OpenStreetMap publiques avec des données personnelles d'une
manière qui permet à toutes les étapes : le montage, la numérisation,
l'édition, se s’insérer dans une action d'édition normale
d’OpenStreetMap. Pour l'utilisateur, les données privées et publiques se
ressemblent toutes et sont traitées de la même façon, mais l'information
privée contient un préfixe configurable spécial. Par exemple, dans le
stockage de données HOT, toutes les balises préfixées avec hot sont
automatiquement enregistrées dans un espace de stockage personnel et
gardées séparées du serveur OSM public.

Après le chargement de la donnée publique à partir du serveur OSM, le
greffon SDS de JOSM interroge le serveur où est hébergé le SDS pour
vérifier s’il y a des données privées correspondant aux objets extraits
du serveur OSM. Ce SDS peut être l’instance maintenue par HOT. Cette
requête envoie les identifiants OSM de tous les objets chargés sur le
SDS qui répond alors en renvoyant toutes les informations privées
associées à ces objets. Lorsque l’utilisateur envoie des données, le
greffon SDS sépare les données entre flux publics et privés. Les données
publiques (correspondant aux balises non préfixées avec hot) sont
envoyées vers le serveur OSM, tandis que les données privées sont elles
envoyées vers l’instance SDS de HOT. Actuellement, le SDS s'appuie sur
l'infrastructure de HOT (serveur, administration, etc), mais dans ce
chapitre, nous allons voir comment installer son propre SDS.

![image](/images/fr/0400-12-25-private-data-storage-config/image01.png)

Les données à caractère privées sont téléchargées et envoyées de façon
séparée des données OSM

Le SDS est une application Ruby on Rails avec des données stockée dans
une base de données PostgreSQL. Une colonne de base de données conserve
l'ID de l'OSM de l'objet. C'est ainsi que le SDS sait à quel objet OSM
chaque entrée de la base du SDS doit être connectée.

Le serveur web
[http://](http://datastore.hotosm.org)[datastore.hotosm.org](http://datastore.hotosm.org)
utilise Phusion Passenger comme un serveur d’application pour Ruby
(Rack) et Apache en tant que serveur web. Cependant, ces applications
peuvent être modifiées en fonction de la compétence et les besoins de
votre organisation.

2. Guide de configuration
-------------------------

Il est important d’avoir un compte pour faire quelque chose avec
l’application. Les créateurs du greffon ont décidé qu'il était
préférable de stocker le mot de passe admin sous forme de texte brut et
permettre à l'administrateur de définir et de lire les mots de passe des
utilisateurs (authentification stockée dans un cookie de session).

Une fois reconnu comme un utilisateur, vous pouvez vous connecter et
accéder à l'interface web du SDS. D'abord, vous êtes redirigé vers la
page de destination, ce qui vous permet d'utiliser deux différents
paramètres de recherche : la recherche par carte et l'étiquette
recherche. Les utilisateurs avec des privilèges d'administrateur peuvent
accéder à la page de gestion des utilisateurs et de créer ou bloquer des
comptes utilisateurs.

### A. Installations

Le logiciel SDS est open-source et dans le reste de ce chapitre, nous
allons apprendre à le configurer sur un serveur Ubuntu. Les instructions
seront similaires pour d'autres versions de Linux. Elles concernent la
mise en place d'un serveur web et la gestion d'une application Ruby on
Rails. Attention, quelques étapes de cette configuration peuvent être
source de confusion si vous n'avez jamais préalablement travaillé en
ligne de commande.

Ce tutoriel est bâti sur les présupposés suivants :

-   Votre machine est équipée avec Ubuntu (version 11.0 ou plus récente)
    ; dans le cas contraire, consulter le chapitre dédié à la
    configuration d’une machine virtuelle.
-   Vous travaillez en ligne de commande
-   Si d'autres applications Web fonctionnent sur votre machine, vous
    devrez peut-être ajuster les instructions. Dans le cas d’une
    nouvelle installation, cela devrait fonctionner sans souci.

Dans cette section , nous allons:

1.  Installer les dépendences logicielles \*
2.  Installer PostgreSQL \*
3.  Installer RVM, Ruby on Rails (pour exécuter l'application)
4.  Installer passagers et Apache (serveur web)
5.  Télécharger et configurer le SDS
6.  Configurer l’application sur Apache
7.  Lancer l’application

\* nécessaire pour ceux qui ne l’avaient pas installé avant

#### Installer les dépendances

Suivre les procédures d’installation suivantes :

**sudo apt-get update**

**sudo apt-get -y install curl git-core**

**sudo apt-get -y install build-essential bison openssl libreadline6
libreadline6-dev zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-0
libsqlite3-dev sqlite3 libxml2-dev libxslt-dev autoconf libc6-dev nodejs
libcurl4-openssl-dev libpq-dev**

#### Installer PostgreSQL

Nous allons utiliser PostgreSQL comme base de données pour notre
application.

Reportez vous au chapitre 1 de l'annexe du chapitre dédidé à PostGIS.

Exécutez:

**sudo apt-get -y install postgresql-9.1 postgresql-9.1-postgis
postgresql-contrib-9.1 libpq-dev**

Nous avons besoin de modifier les paramètres de PostgreSQL. Ouvrez le
fichier de configuration avec nano en exécutant:

**sudo nano /etc/postgresql/9.1/main/pg\_hba.conf**

Aller à la fin du fichier et aux quatre lignes (ci-dessous). Nous avons
besoin de modifier les autorisations d'accès local afin de pouvoir
accéder à la base de données à partir de la même machine sans mot de
passe.

Aperçu de votre configuration (ci-dessous) :

local all postgres trust

\# TYPE DATABASE USER CIDR-ADDRESS METHOD

\# "local" is for Unix domain socket connections only

local all all trust

\# IPv4 local connections:

host all all 127.0.0.1/32 trust

\# IPv6 local connections:

host all all ::1/128 trust

Enregistrez les modifications avec Ctrl-O et Entrée, et quitter alors
nano avec Ctrl-X.

Maintenant, nous devons redémarrer PostgreSQL afin que les nouvelles
modifications prennent effet.

**sudo /etc/init.d/postgresql restart**

#### Installer RVM, Ruby, Ruby on Rails

L'application SDS fonctionne sur Ruby on Rails que nous allons installer
et qui requiert l’installation préalable de RVM, un gestionnaire de
versions de Ruby.

**sudo su** (pour s’assurer que vous êtes l’utilisateur root)

**curl -L get.rvm.io | bash -s stable**

Au terme de l’installation, les instructions sur la façon d'activer RVM
devraient vous être communiqués par le message suivant :

Installation de RVM dans / usr / local / RVM / est presque complète:

\* D'abord, vous devez ajouter tous les utilisateurs qui utiliseront RVM
au groupe 'de RVM »,

et déconnexion - vous reconnecter, toute personne utilisant RVM sera
opérationnel avec \`umask u = rwx, g = rwx, o = rx\`.

\* Pour commencer à utiliser RVM vous devez exécuter \`source / etc /
profile.d / rvm.sh\`

dans toutes vos fenêtres ouvertes de la coquille, dans de rares cas,
vous devez rouvrir toutes les fenêtres de shell.

\# Merci d'utiliser RVM!

\# J'espère sincèrement que RVM contribue à rendre votre vie plus facile
et plus agréable!

\# \~ Wayne

Aajoutez un utilisateur à RVM.

En tant qu'utilisateur root, exécutez les commandes suivantes.
Attention, si vous utilisez un autre utilisateur, remplacez "root" avec
votre nom d'utilisateur.

**adduser root rvm**

**source /etc/profile.d/rvm.sh**

Installez (en tant qu’utilisateur root) Ruby et Rails. Attention,
chacune de ces commandes va prendre quelques minutes.

**rvm install 1.8.7** (appuyez Q s’il vous le demande)

**gem install rdoc-data**

**rdoc-data --install**

**gem install rails**

#### Installer Passenger et le serveur Apache

Passenger, vous permet d'exécuter facilement des applications Ruby on
Rails sur votre serveur Web. Nous allons installer le Passenger Gem (les
Gem sont des outil d'empaquetage et d'installation pour les extensions
Ruby), puis nous allons installer un module Apache qui permet à
Passenger de fonctionner avec votre serveur web. Cette opération suppose
que vous avez déjà installé Apache (sujet couvert dans l'annexe du
chapitre 2).

**gem install passenger**

**sudo apt-get -y install apache2-prefork-dev libapr1-dev libaprutil1-dev**

**passenger-install-apache2-module**

Suivez les instructions fournies par le programme d'installation. Vous
devrez ajouter les lignes suivantes à la fin de votre fichier
/etc/apache2/apache2.conf. Ces chemins peuvent être différents en
fonction de votre installation, afin de copier les lignes prévues par le
programme d'installation du module, plutôt que les lignes fournies ici
dans le cadre du tutoriel:

LoadModule passenger\_module
/usr/local/rvm/gems/ruby-1.8.7-p371/gems/passenger-3.0.18/ext/apache2/mod\_passenger.so

PassengerRoot /usr/local/rvm/gems/ruby-1.8.7-p371/gems/passenger-3.0.18

PassengerRuby /usr/local/rvm/wrappers/ruby-1.8.7-p371/ruby

Redémarrez Apache en exécutant:

**/etc/init.d/apache2 restart**

Maintenant que l’installation du serveur est complétée, nous pouvons
installer notre application.

### B. Télécharger et configurer le SDS

Tout en fonctionnant en tant que root, nous allons télécharger et
configurer le SDS.

réons d'abord un utilisateur de base de données pour cela:

sudo su postgres -c "createuser hot\_josm" (answer ‘y’)

Créons maintenant le répertoire www de notre application web et
téléchargeons le logiciel à cet endroit:

**cd /var/www**

**wget https://github.com/hotosm/sds-server/tarball/master**

**tar -zxvf master**

Déplacez vous vers le nouveau répertoire. Pour ce faire, vérifiez la
liste des dossiers dans votre répertoire www afin de déterminer le nom
exact de votre numéro hotosm-sds-serveur.

**ls**

![image](/images/fr/0400-12-25-private-data-storage-config/image02.png)(Résultat potentiel)

Déplacez vous vers le répertoire. Répondre 'n' si vous êtes invité sur
le fichier rvmrc..

**cd hotosm-sds-server-142a7d0** (répondre ‘n’)

Astuce : Lorsque vous modifiez les répertoires de la ligne de commande,
vous pouvez commencer à taper le nom du répertoire, puis appuyez sur TAB
de votre clavier, et le reste du nom du répertoire sera rempli
automatiquement.

La commande sed ci-dessous va modifier l'un des paramètres dont nous
avons besoin pour changer:

**sed -i s/"config.assets.compile = false"/"config.assets.compile = true"/
config/environments/production.rb**

Exécutez la commande bundler pour faire en sorte que toutes les Gem
nécessaires soient installés:

**bundle install**

Maintenant, nous sommes prêts à créer notre base de données et mis en
place. Si vous n'êtes pas familier avec Rails, il suffit de savoir qu'il
a des commandes spéciales qui peuvent le faire pour nous:

**bundle exec rake db:create RAILS\_ENV=production**

**bundle exec rake db:migrate RAILS\_ENV=production**

Enfin, nous voulons insérer un utilisateur initial dans la base de
données de sorte que lorsque nous ouvrons le SDS dans notre navigateur,
nous sommes en mesure de vous identifier. Exécutez la commande suivante,
mais remplacer les quatre valeurs avec votre nom, adresse e-mail et mot
de passe.

**sudo su postgres -c "psql hot\_josm\_production -c \\"insert into users
(firstname,lastname,email,password,active,admin) values
('FIRST\_NAME','LAST\_NAME','EMAIL','PASSWORD',true,true);\\""**

Vous pouvez voir si tout est correctement configuré en exécutant:

**rails server -e production**

Si tout se passe bien, vous devriez voir quelque chose comme ceci:

![image](/images/fr/0400-12-25-private-data-storage-config/image03.png)

Le SDS devrait maintenant fonctionner. Si vous utilisez Ubuntu Desktop
ouvrir votre navigateur Web et allez à
[http://localhost:3000](http://localhost:3000). Sinon, vous serez en
mesure d'accéder au serveur à partir d'un autre ordinateur à
[http://SERVER\_IP\_ADDRESS:3000](http://server_ip_address:3000).

![image](/images/fr/0400-12-25-private-data-storage-config/image04.png)

Vous êtes en mesure d'exécuter la base de données SDS à partir de votre
propre ordinateur. Toutefois, l'exécution du serveur de cette façon est
un peu lent et encombrant. Nous aurons besoin d'utiliser un autre
serveur Web pour le rendre plus rapide.

### C. Configurer l'application sur Apache

Pour la pratique, nous avons lancé le serveur web avec Rails pour voir
si l’application fonctionne sur notre serveur local. Malheureusement, ce
serveur web, WEBrick, est encombrant et pas adapt\\é en production.
Heureusement, nous avons installé Apache, un puissant serveur web. Il
nous reste à procéder à quelques configurations mineures pour que notre
nouvelle application tourne sur Apache.

Retournez à votre terminal, ou ligne de commande. Appuyez sur CTRL-C
pour quitter WEBrick. Ensuite, créez un nouveau fichier de configuration
d'Apache avec nano

**sudo nano /etc/apache2/sites-available/sds**

Copiez le texte suivant dans le fichier. Vous devrez remplacer
SERVER\_IP\_ADDRESS avec l'adresse ip de votre serveur, et vous devrez
peut-être changer le répertoire dans lequel est souligné si votre
version de SDS est différent.

<VirtualHost \*:80\>

ServerName SERVER\_IP\_ADDRESS

\# !!! Be sure to point DocumentRoot to 'public'!

DocumentRoot /var/www/hotosm-sds-server-142a7d0/public

<Directory /var/www/hotosm-sds-server-142a7d0/public\>

\# This relaxes Apache security settings.

AllowOverride all

\# MultiViews must be turned off.

Options -MultiViews

</Directory\>

</VirtualHost\>

Sauvegardez nano en faisant Ctrl-O, Enter, et Ctrl-X.

Note: Si vous ne connaissez pas votre adresse IP localhost, ouvrez une
nouvelle fenétre du terminal et tapez

**ifconfig**

![image](/images/fr/0400-12-25-private-data-storage-config/image05.png)

Créez ensuite un raccourci de votre site sds pour que vous puissiez
accéder facilement à la SDS: [http://localhost](http://localhost).

**cd /etc/apache2/sites-enabled/**

**ln -s /etc/apache2/sites-available/sds sds**

**ls**

Vous devriez avoir les 2 fichiers comme ceci :

000-default sds

Eliminez 000 par défaut :

rm 000-default

Redémarrez Apache :

**/etc/init.d/apache2 restart**

Vous pouvez accéder asisément au SDS à
[http://localhost](http://localhost). Si vous avez installé le SDS sur
un serveur distant, remplacez localhost par l'adresse IP.

### D. Lancer l'application

A partir de maintenant, pour lancer le SDS de votre organisation ou
votre instance propre, vous aurez simplement besoin de donner aux gens
l'adresse du serveur pour que le serveur fonctionne.

Résumé
------

Ce chapitre a couvert la façon dont vous pouvez configurer votre propre
base de données privée (SDS). Il est essentiel de comprendre comment
configurer votre propre SDS pour que votre organisation peut commencer à
stocker des informations privées sans l'administration de HOT. Cette
base de données permettra à votre organisation d'ajouter, modifier et
administrer les utilisateurs avec accès au SDS.


