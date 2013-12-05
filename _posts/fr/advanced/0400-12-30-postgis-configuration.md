---
layout: doc
title: Configuration de PostGIS
permalink: /fr/advandced/post-gis-config/
lang: fr
category: advandced
---



# Configuration de PostGIS
===========================

##Introduction

A présent, vous devriez avoir acquis une certaine expérience avec
OpenStreetMap et avec QGIS. Vous avez appris différentes manières de
stocker des données géographiques. Les fichiers qui sont ouverts et
enregistrés dans JOSM ont comme extension .osm et conservent les données
géographiques au format XML qui est un format idéal pour transmettre des
informations via internet. Dans QGIS, nous enregistrons souvent des
données géographiques au format de fichiers shapefile, dont l’extension
est .shp. Ces types de fichiers fournissent un accès très rapide aux
données et sont couramment utilisés pour l’analyse spatiale.

Nous n’avons cependant pas encore abordé les bases de données qui sont
aussi un moyen efficace et utile pour le stockage de données
géographiques. La mise en place d’une base de données n’est pas
nécessaire si vous ne souhaitez que contribuer à OpenStreetMap ou
exécuter des tâches simples avec QGIS. Mais pour ceux d’entre vous qui
veulent aller plus loin, une base de données permettra un accès beaucoup
plus performant à un jeu de données. Par exemple, le serveur
OpenStreetMap utilise une base de données pour stocker les données
cartographiques, notamment pour recevoir les modifications des
contributeurs, répondre aux requêtes des utilisateurs (dont l’envoi de
portions de la carte au format XML), et d’avoir un rendu de la carte
sous forme de mosaïques d’images sur le site principal
[openstreetmap.org](http://www.openstreetmap.org).

![](/images/fr/0400-12-26-wms-service-configuration/image29.png)

Avec PostGIS, notre base de données fonctionne spatialement

Nous allons présenter la base de données PostgreSQL, qui est très
largement utilisée dans le domaine. Il s’agit d’une base de données
relationnelle très puissante pour le stockage et l’interrogation de
données, mais qui ne peut pas effectuer des opérations complexes sur les
données spatiales. Il convient pour cela d’utiliser PostGIS, l’extension
spatiale de PostgreSQL.

La combinaison PostgreSQL-PostGIS permet l’indexation spatiale des
données, qui est essentielle pour que la base de données puisse exécuter
des requêtes/opérations sur les données géographiques, et par exemple
répondre à des questions comme “Est-ce qu’une droite coupe un polygone
?”ou “Est-ce qu’un point se trouve à l’intersection de deux lignes ?”.

Dans ce chapitre, nous allons apprendre à installer PostgreSQL sur
Windows, à créer une base de données, et à importer des données
OpenStreetMap et des données shapefile dans notre base de données.

​1. Installation de PostgreSQL et PostGIS (sous Windows)

​2. Création et utilisation de base de donnée avec QGIS

​3. Importation de données OSM dans une base de données

​1. Installation de PostgreSQL et PostGIS

Dans cette section, nous allons installer PostgreSQL, puis ajouter
l’extension spatiale PostGIS, qui est assez facile à installer.

-   Rendez-vous sur la page de téléchargement de l’application à cette
    adresse :

[http://www.postgresql.org/download/](http://www.postgresql.org/download/)

![](/images/fr/0400-12-26-wms-service-configuration/image09.png)

-   Différents liens de téléchargements pour divers systèmes
    d’exploitations vous sont proposés. Cliquez sur « Windows »
-   Cette page donne les instructions sur la distribution du logiciel.
    Il s’agit de trois composants :
-   PostgreSQL server : le logiciel de base de donnée (SGBD), soit le
    composant principal
-   pgAdmin III : l’interface graphique d’administration des bases de
    données
-   StackBuilder : un utilitaire pour l’ajout de greffons. Nous
    l’utiliserons pour installer le greffon PostGIS

-   Cliquez sur “Download”.
-   Vous aurez plusieurs options de l’installateur concernant les
    différentes versions du logiciel PostgreSQL.
-   A la fin du téléchargement, cliquez sur l’exécutable pour lancer
    l’installation.        

![](/images/fr/0400-12-26-wms-service-configuration/image26.jpg)

-   Cliquez sur “Suivant” pour passer à l’étape suivante (conserver les
    options par défaut). Vous aurez besoin de fournir un mot de passe
    pour le premier utilisateur de la base de donnée (utilisateur
    postgres). Cet utilisateur a les privilèges de superuser, ce qui
    veut dire qu’il peut faire ce qu’il veut, d’où le fait qu’il ne faut
    pas oublier le mot de passe !

![](/images/fr/0400-12-26-wms-service-configuration/image06.png)

###NOTE : 
Vous pouvez créer autant de bases de données que vous le
souhaitez en utilisant PostgreSQL. Vous pouvez avoir une base de données
pour vos données géographiques, et séparer les bases de données d’autres
projets sur lesquels vous travaillez. Vous pouvez permettre à
différentes personnes d’avoir des accès différents à ces bases de
données. A cet effet, chaque base de données que vous créez utilise le
concept des utilisateurs et des rôles. Une base de donnée doit toujours
être associée à un utilisateur propriétaire, et généralement
l’utilisateur a besoin d’un mot de passe pour apporter des modifications
à la base de données. Le premier utilisateur que nous avons créé (nommé
postgres) est un superutilisateur, c’est-à-dire qu’il a tous les droits
sur toutes les bases de données.

-   Après avoir cliqué sur l’assistant d’installation et accepté les
    options de configuration par défaut, l’installation de PostgreSQL
    démarre et peut prendre quelques minutes.
-   Lorsqu’elle se termine, l’assistant demande à lancer StackBuilder,
    l’utilitaire qui va nous permettre d’installer PostGIS. Assurez-vous
    que la case est cochée avant de cliquer sur "Terminer".

![](/images/fr/0400-12-26-wms-service-configuration/image00.png)

-   Nous avons installé avec succès PostgreSQL et nous devons ajouter
    l’extension PostGIS. Lorsque l’assistant StackBuilder s’ouvre,
    sélectionnez votre installation de PostgreSQL dans le menu déroulant
    puis cliquez sur Suivant.

![](/images/fr/0400-12-26-wms-service-configuration/image23.png)

-   Ouvrez l’onglet “ Extensions spatiales” et sélectionner la version
    de PostGis adaptée à votre ordinateur (32 ou 64 bits)

![](/images/fr/0400-12-26-wms-service-configuration/image01.png)

-   Cliquez sur “Suivant” pour télécharger et installer les extensions.
    Cliquez sur “I Agree” à l’invite pour accepter les conditions.
-   Le programme d’installation de PostGIS propose différentes
    configurations, mais celles par défaut peuvent être maintenues. Vous
    pouvez lui demander de créer automatiquement la première base de
    données, mais de toute façon la création de base de donnés est un
    point que nous aborderons plus tard dans ce chapitre.

![](/images/fr/0400-12-26-wms-service-configuration/image21.png)

-   Pour commencer l’installation de PostGIS, vous devez renseignez le
    mot de passe postgres que vous avez créé à l’installation de
    PostgreSQL.

![](/images/fr/0400-12-26-wms-service-configuration/image25.png)

-   Si vous êtes invité à installer le chargeur graphique de shp2pgsql,
    cliquez sur “Oui”.
-   PostGIS sera installé. A la fin, cliquez sur “Fermer” et ensuite sur
    “Terminer”.

​2. Création et utilisation de base de données avec QGIS

Maintenant que nous avons installé tous les logiciels nécessaires, nous
allons créer une base de données, puis l’utiliser comme source de
données dans QGIS. Nous allons utiliser pgAdmin III, qui est un client
de base de données graphique, simple et utile pour l’interrogation et la
modification des bases de données.

![](/images/fr/0400-12-26-wms-service-configuration/image15.png)

pgAdmin III est le client officiel pour PostgreSQL et vous permet
d’utiliser le langage SQL pour manipuler vos tables. Il est également
possible de créer et de manipuler des bases de données depuis la ligne
de commande, mais pgAdmin III est un moyen facile pour commencer.

-   Ouvrez pgAdmin III. Vous pouvez le retrouver en cliquant sur le
    bouton Démarrer -\> Tous les Programmes -\> PostgreSQL -\> pgAdmin
    III.

-   Dans le panneau de gauche sous “Groupes de serveurs”, faites un clic
    droit sur PostgreSQL et cliquez sur "Connecter".

![](/images/fr/0400-12-26-wms-service-configuration/image13.png)

-   Entrez le mot de passe de l’utilisateur postgres que vous avez créé
    lors de l’installation de l’application. Souvenez-vous que le nom
    d’utilisateur et le mot de passe sont requis pour la création et
    l’accès à une base de données.

![](/images/fr/0400-12-26-wms-service-configuration/image31.png)

-   Faites un clic droit sur ​​Bases de données et sélectionnez “Ajouter
    une base de données”

![](/images/fr/0400-12-26-wms-service-configuration/image08.png)

-   Vous devez saisir quelques informations pour créer la nouvelle base
    de données : le nom et le propriétaire. Dans l’onglet Propriétés,
    donner à la nouvelle base de données un nom. Dans cet exemple, nous
    nommons notre base de données gisdb. Nous devons aussi associer à
    notre base de données un propriétaire comme expliqué plus haut.
    Puisque nous avons un seul utilisateur en ce moment qui est
    postgres, nommons le propriétaire. (Note : pour des raisons de
    sécurité, il est généralement déconseillé de créer des utilisateurs
    sans autorisation de superutilisateur).

![](/images/fr/0400-12-26-wms-service-configuration/image05.png)

-   Sous l’onglet Définition, garder les valeurs par défaut. Si vous
    utilisez la version 9.1 de PostgreSQL, dans la liste template
    sélectionner template\_postgis. Cela va créer la base de données
    avec les colonnes spatiales appropriées. Pour la version 9.3,
    template\_postgis n’apparaissant pas, nous allons l’installer d’une
    autre façon.

![](/images/fr/0400-12-26-wms-service-configuration/image30.png)

Cliquez sur OK pour créer la base de données. Vous verrez maintenant
votre base de données figurant sous la rubrique «Bases de données».

Pour lui rajouter les attributs spatiaux, sélectionnez-la et allez à
Plugins -\> PSQL Console. Dans la console, vous exécuter la commande “
CREATE EXTENSION postgis ;” .

![](/images/fr/0400-12-26-wms-service-configuration/image33.png)

Maintenant, que l’extension PostGIS est installée, chargeons quelques
exemples de données dans la base afin de pouvoir y accéder à partir de
QGIS. Pour ce faire, nous allons utiliser un utilitaire qui convertit
les fichiers shapefile et les charge dans la base de données.

-   Assurez-vous que la nouvelle base de données est bien séléctionnée
    et allez à Plugins -\> DBF loader 1.5

![](/images/fr/0400-12-26-wms-service-configuration/image35.png)

-   Cliquez sur “Add File” et trouvez un shapefile sur votre système de
    fichiers. N’hésitez pas à utiliser les échantillons de données
    fournies dans le manuel de QGIS
    [http://download.osgeo.org/qgis/data/](http://download.osgeo.org/qgis/data/).
-   Une fois que vous avez séléctionné un fichier, cliquez sur “Import”.
    Si tout se passe bien, vous remarquerez tout à en bas de la fenêtre
    un message qui annonce à la fin “Shapefile import completed.”

![](/images/fr/0400-12-26-wms-service-configuration/image18.png)

Nous avons créé une base de données et nous avons importé un fichier
shapefile comme échantillon. Maintenant, nous allons ouvrir QGIS et voir
comment nous pouvons accéder à notre base de données PostGIS.

-   Ouvrir l’application QGIS et cliquez sur le bouton "Ajouter une
    couche PostGIS".

![](/images/fr/0400-12-26-wms-service-configuration/image27.png)

-   En-dessous de “Connections”, cliquez sur “Nouveau.”

-   Donnez un nom pour identifier cette connexion à votre base de
    données dans QGIS. Inscrivez  gisdb (ou ce que vous avez donné comme
    nom à votre base de données) dans la zone “Base de données”, puis
    entrez l’identifiant postgres et votre mot de passe.

![](/images/fr/0400-12-26-wms-service-configuration/image32.png)

-   Cliquez sur OK pour enregistrer les paramètres de connexion. Puis
    cliquez sur "Connexion" pour vous connecter à votre serveur
    PostgreSQL. Vous devrez peut-être saisir votre nom d’utilisateur et
    votre mot de passe.
-   Si tout se passe bien, vous verrez la couche shapefile (ou plusieurs
    couches de différents types) que vous avez chargée dans votre base
    de données. Sélectionnez-la et cliquez sur "Ajouter" pour l’ajouter
    à votre carte.

![](/images/fr/0400-12-26-wms-service-configuration/image20.png)

-   Lorsque vous ajoutez la couche, vous aurez besoin de sélectionner un
    système de coordonnées pour afficher les données spatiales. Vous
    souhaiterez probablement sélectionner WGS 84, qui est le système de
    coordonnées que OpenStreetMap utilise.^[[a]](#cmnt1)^        
-   Notez que la couche se comporte comme si vous aviez chargé un
    fichier directement dans QGIS. La seule différence est que si vous
    modifiez la couche, les modifications seront enregistrées sur votre
    base de données.

## 3. Importation de données OSM dans une base de données

Maintenant que vous avez créé et accédé à une base de données depuis
QGIS, nous allons voir comment charger les données OpenStreetMap dans
cette base de données. Le chargement des données OSM dans une base de
données est beaucoup plus efficace dans QGIS que de travailler avec des
fichiers XML ou des fichiers shapefile. Il est également utile de garder
nos données OSM dans la base de données pour les chapitres suivants de
LearnOSM.

Pour importer des données OpenStreetMap dans notre base de données, nous
allons installer quelques outils. L’outil principal est appelé
osm2pgsql, qui est un utilitaire qui charge les données XML
d’OpenStreetMap en un format que nous pouvons stocker dans la base de
données. L’utilitaire est facile à installer. Il suffit de le
télécharger et d’ajouter son emplacement à notre variable
d’environnement.

-   Pour télécharger la version Windows de osm2pgsql, allez sur :
            [http://wiki.openstreetmap.org/wiki/Osm2pgsql\#Windows](http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows) (anglais)
-   Télécharger le fichier osm2pgsql.zip
-   Décompressez le fichier. Assurez-vous de créer un dossier permanent,
    parce que nous allons ajouter cet emplacement aux variables
    d’environnement.
-   Dans le dossier de osm2pgsql que vous avez décompressé se trouve le
    fichier osm2pgsql.exe. C’est un programme que nous allons exécuter
    pour importer les données. Mais pour que le système Windows puisse
    le trouver, nous devons ajouter son emplacement aux variables
    d’environnement. Cliquez sur le menu Démarrer de Windows et tapez
    "chemin d’accès système". Vous devriez voir une option "Modifier les
    variables d’environnement du système." Cliquez sur l’image.
-   Cliquez sur le bouton nommé "Variables d’environnement".

![](/images/fr/0400-12-26-wms-service-configuration/image17.png)

-   Trouvez la variable nommée "Path" et cliquez sur "Modifier..."

![](/images/fr/0400-12-26-wms-service-configuration/image22.png)

-   Maintenant, vous devez ajouter le répertoire où se trouve
    osm2pgsql.exe à la variable Path.

![](/images/fr/0400-12-26-wms-service-configuration/image03.png)

-   Assurez-vous de conserver intacte la liste actuelle. Ajoutez-y à la
    fin, d’abord un point-virgule, suivi du chemin complet du répertoire
    de osm2pgsql.exe. Par exemple, si vous avez créé le dossier
    C:\\osm2pgsql, vous ajouterez ; C:\\osm2pgsql
-   Cliquez sur OK.

C’etait la partie la plus difficile. Maintenant, il nous faut installer
un greffon sur QGIS, et nous pourrons importer des données OSM dans
notre base de données.

-   Ouvrez QGIS et allez sur Extension -\> Installateur d’extension
    Python…

![](/images/fr/0400-12-26-wms-service-configuration/image10.png)

-   Dans le champ Filtre, indiquez osm tools. Cliquez sur l’onglet
    “Dépôts”.

![](/images/fr/0400-12-26-wms-service-configuration/image36.png)

-   Cliquez sur “Ajouter/Mettre à jour l’extension”
-   Une fois l’installation terminée, fermez les boîtes de dialogue.
-   Vous pouvez maintenant remarquer un nouvel onglet nommé “OSM tools”

![](/images/fr/0400-12-26-wms-service-configuration/image34.png)

-   Maintenant nous pouvons utiliser le greffon “OSM tools” pour
    importer facilement des données dans notre base de données. Le
    greffon OSM Tools va utiliser osm2pgsql en arrière-plan.
-   Utilisons le greffon pour importer des données OpenStreetMap dans
    notre base de données. Si vous n’avez pas encore de fichier .osm sur
    votre ordinateur, allez simplement à la page
    [www.openstreetmap.org](http://www.openstreetmap.org), et cliquez
    sur le bouton export pour y télécharger les données OSM d’une zone
    géographique.

![](/images/fr/0400-12-26-wms-service-configuration/image28.png)

-   Vous pouvez essayez d’en télécharger à l’adresse
    [http://metro.teczno.com/](http://metro.teczno.com/). Ce site
    héberge plusieurs extraits OSM de différentes villes dans le monde.
    Sélectionner une ville à importer et télécharger le fichier
    compressé en BZ2. Les fichiers BZ2 sont des compressions des
    fichiers. Les fichiers pbf sont moins lourds, mais la version
    Windows de osm2pgsql ne fonctionne pas pour ce format de fichier. Si
    la ville que vous désirez extraire n’est pas disponible sur le site,
    vous pouvez télécharger une zone plus large sur
    [http://download.geofabrik.de/osm/](http://download.geofabrik.de/osm/.) ou
    encore télécharger un fichier spécifique à
    [http://export.hotosm.org/](http://export.hotosm.org/).

![](/images/fr/0400-12-26-wms-service-configuration/image16.png)

-   Pour télécharger votre fichier OSM, rendez-vous sur menu OSM Tools
    dans QGIS et sélectionnez “Import into PostGIS (osm2pgsql).”
-   Un nouveau panneau s’ouvre sur ​​le côté droit de QGIS.
-   Tout ce qu’il nous reste à faire maintenant est de spécifier le
    fichier d’entrée (le fichier OSM) et la base de données où il sera
    chargé.
-   Cliquez sur le bouton “Input” et localisez le fichier OSM que vous
    souhaitez charger. Souvenez-vous que le fichier doit avoir une
    extension .osm or.osm.bz2.

![](/images/fr/0400-12-26-wms-service-configuration/image11.png)

-   Ne tenez pas compte de la zone “Style”.
-   Sélectionner “My First Database” sous “Database.”

![](/images/fr/0400-12-26-wms-service-configuration/image12.png)

-   Notez que cette liste ne montre que les bases de données que vous
    avez enregistré sur QGIS, comme nous l’avons fait à la fin de la
    section 2.
-   Cliquez sur “Run”.
-   Vous pouvez être invité à saisir votre mot de passe pour la base de
    données et appuyez sur la touche Entrée si le message suivant
    s’affiche en bas de l’écran :

![](/images/fr/0400-12-26-wms-service-configuration/image24.png)

-   L’importation peut prendre quelques minutes ; cela dépend de la
    taille du fichier. Il se peut aussi que vous rencontriez un
    dépassement de la capacité de la mémoire en exécutant osm2pgsql pour
    importer le fichier OSM. Si vous avez un message d’erreur comme
    “Error allocating nodes,” cochez la case “Slim on memory (slower)”
    et réessayez.
-   Vous serez notifié de la fin de l’importation.

![](/images/fr/0400-12-26-wms-service-configuration/image07.png)

-   Cliquez maintenant sur le bouton ”Ajoutez une couche PostGIS”.

![](/images/fr/0400-12-26-wms-service-configuration/image14.png)

-   Quand vous vous reconnectez à votre base de données, vous verrez les
    nouvelles tables ajoutées à votre base de données.

![](/images/fr/0400-12-26-wms-service-configuration/image02.png)

-   Il y a une couche pour chaque type de donnée : lignes, points, et
    polygones, et une couche supplémentaire qui contient les routes
    principales. Sélectionnez-les et vous verrez ces couches s’afficher
    dans QGIS.

![](/images/fr/0400-12-26-wms-service-configuration/image19.png)

## Résumé

Nous avons appris à installer PostgreSQL sur Windows et à lui ajouter
l’extension PostGIS. Nous avons ensuite créé une base de données
géographique et y avons chargé des données shapefile. Nous avons appris
également à accéder à notre base de données depuis QGIS. Enfin, nous
avons installé osm2pgsql et le greffon OSM Tools afin de pouvoir charger
les données OpenStreetMap directement dans la base de données.

