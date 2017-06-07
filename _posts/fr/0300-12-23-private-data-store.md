---
layout: doc
title: Utiliser le Stockage de Données Séparé
permalink: /fr/intermediate/private-data-storage/
lang: fr
category: intermediate
otherguides: "Les autres niveaux"
---

Utiliser le Stockage de Données Séparé (Separate Data Store)
============================================================


Introduction
--------------

La donnée OpenStreetMap est ouverte et accessible à tous ceux qui
voudraient y accéder. Cependant, il peut arriver à certains acteurs de
vouloir utiliser OpenStreetMap pour collecter de la donnée tout en
conservant certains attributs dans un espace séparé de stockage de
données. Pour cela, HOT a développé un outil supplémentaire pour JOSM
appelé SDS (Separate Data Store, soit stockage de données séparé).

Le SDS vous permet de créer des cartes et d'ajouter des données dans
JOSM comme il se fait d’habitude ; mais lorsque vous faites remonter
vers le serveur vos modifications, les données publiques seront
enregistrées dans la base de données OpenStreetMap tandis que les
données privées seront enregistrées séparément de la banque de données
HOT.

![image](/images/fr/0300-12-23-private-data-store/image21.png)

Schéma de fonctionnement du greffon SDS dans JOSM

La donnée envoyée dans l’espace de stockage de données séparé (SDS) de
HOT est accessible seulement pour les personnes qui possèdent un compte
sur le site [datastore.hotosm.org](http://datastore.hotosm.org).

Ce chapitre est destiné aux personnes qui possèdent déjà un tel compte
et veulent stocker de l’information géospatiale privée, comme des
revenus fiscaux, des données sur la santé des individus ou l’emplacement
de mines d’or. Si vous ne possédez pas un compte HOT Separate DataStore
ou si vous désirez configurer votre propre serveur de données privées,
vous pouvez en faire la demande à
[accounts@hotosm.org](mailto:accounts@hotosm.org).

1. Installation du greffon SDS
-------------------------------

La version la plus récente de JOSM est nécessaire pour faire fonctionner
le greffon SDS. Si vous ne la possédez pas, téléchargez et installez-la
à partir du site
[http://josm.openstreetmap.de/](http://josm.openstreetmap.de/). Si vous
ne pouvez pas installer la dernière version, rendez-vous à l'annexe pour
savoir comment installer ce greffon depuis la source.

-   Ouvrez le menu des préférences dans JOSM et allez dans l'onglet des
    greffons.

![image](/images/fr/0300-12-23-private-data-store/image10.png)

-   Cliquez sur "Mettre à jour" pour vous assurer que tous les greffons
    disponibles soient listés.
-   Dans la zone "Rechercher :", tapez "sds".

![image](/images/fr/0300-12-23-private-data-store/image00.png)

-   Cochez la case à côté du greffon pour l'activer. Vous devrez
    redémarrer JOSM.

![image](/images/fr/0300-12-23-private-data-store/image18.png)

2. Utilisation du greffon SDS
-------------------------------

L’édition de la carte fonctionne exactement comme avant. La seule
différence réside dans le fait que lors de l’envoi des changements vers
le serveur, quelques attributs (tags) seront automatiquement sauvegardés
sur le Stockage de Données Séparé (SDS), et le reste sera sauvegardé
directement dans la base de données OpenStreetMap.

-   Après l'installation du greffon, la première fois que vous
    téléchargez des données, vous serez invité à fournir votre nom
    d'utilisateur et le mot de passe du Stockage de Données Séparé.

![image](/images/fr/0300-12-23-private-data-store/image16.png)

-   Afin de pouvoir utiliser le greffon, vous devez saisir vos nom
    d’utilisateur et mot de passe. Pour les sauvegarder, cliquez la case
    "Enregistrer le nom d’utilisateur et le mot de passe"
-   L’espace de stockage de données séparé est maintenant en état de
    fonctionner. Lorsque vous envoyez les changements sur le serveur
    OSM, les attributs courants sont sauvegardés dans OSM et les
    attributs privés dans l’espace de stockage de données séparé.

3. Comment cela fonctionne-t-il ?
----------------------------------

Comment le greffon sait-il quelles données vous souhaitez stocker sur
OpenStreetMap et quelles données vous voulez sauvegarder sur l'espace de
stockage séparé ? Il le sait tout simplement à cause des attributs. Les
attributs habituels vont dans OpenStreetMap, comme d’habitude, mais vous
pouvez utiliser de nouveaux attributs avec un préfixe spécial qui seront
envoyés dans l’espace de stockage privé. Par défaut, n’importe quel
attribut avec le préfixe “hot:” se dirigera vers l’espace de stockage
privé. Si vous ouvrez les Préférences, vous verrez en bas un nouvel
onglet avec les options du greffon SDS :

![image](/images/fr/0300-12-23-private-data-store/image22.png)

Dans cette boîte de préférences, le “SDS Server URL” est paramétré par
défaut sur l’espace de stockage privé HOT, et votre nom d’utilisateur et
votre mot de passe peuvent être également sauvegardés ici. La ligne
intitulée “SDS tag prefix” contient le préfixe qui va faire en sorte que
les attributs qui en sont pourvus soient sauvegardés sur l’espace de
stockage privé. Par défaut, ce préfixe est "hot:".

Lorsque vous créez ou modifiez un objet sur ​​la carte, vous pouvez
appliquer des attributs comme ceci:

![image](/images/fr/0300-12-23-private-data-store/image03.png)

Dans cet exemple, les deux premiers attributs seront sauvegardés dans
OSM. Le troisième attribut, parce qu’il possède le préfixe “hot:”, sera
sauvegardé dans l’espace de stockage privé.

Il est probable que vous travailliez avec d’autres personnes lorsque
vous utilisez l’espace de stockage privé, de fait vous aurez une liste
standardisée de attributs pour la donnée spécifique que vous collectez.
Ces attributs peuvent alors être intégrés dans des modèles d'attributs
(presets), ce qui fournira un formulaire facile à utiliser pour ajouter
à la fois la donnée publique et séparée.

4. Accéder à l’espace en ligne de stockage de données séparé
--------------------------------------------------------------

A la manière de openstreetmap.org, vous pouvez accéder à l’espace de
données privé en ligne en vous rendant sur le site de test et en vous
connectant avec votre nom d’utilisateur et votre mot de passe, tous
fournis après la demande à
[accounts@hotosm.org](mailto:accounts@hotosm.org).

![image](/images/fr/0300-12-23-private-data-store/image12.png)

Une fois connecté, vous accédez à la page d’accueil.

![image](/images/fr/0300-12-23-private-data-store/image19.png)

Vous pouvez rechercher des objets par ses attributs ou en les trouvant
sur une carte. Vous pouvez également modifier les données directement
sur le site.

5. Gérer les projets et télécharger les données séparées
---------------------------------------------------------

Cliquez sur le lien "Projects" pour accéder à la liste de tous les
projets de stockage de données séparé auxquels vous avez accès.

![image](/images/fr/0300-12-23-private-data-store/image09.png)

Chaque projet possède un nom et la description des attributs dont la
donnée va être stockée séparément d’OSM. Par exemple, le projet "Rate
it" possède deux tags de cette sorte, décrit par leur type (texte, liste
déroulante, etc.), clé et nom affiché pour l’utilisateur. La syntaxe
utilisée est essentielle pour que les attributs soient reconnus par le
SDS. A ce projet est rattaché le modèle d’attributs (preset) qui est
utilisé pour éditer les données du projet dans JOSM. Ce modèle
d’attributs peut comporter des attributs qui seront stockés soit dans
OSM, soit dans SDS.

Il est possible d’éditer la définition des attributs et changer le
modèle d’attributs en cliquant sur "Edit".

Pour visualiser les données du projet contenues dans le SDS, cliquez sur
le lien "View data table". Les données de l’exemple suivant sont
fictives.

![image](/images/fr/0300-12-23-private-data-store/image13.png)

Il est possible de visualiser chaque objet en cliquant sur
![image](/images/fr/0300-12-23-private-data-store/image17.png).

Le téléchargement de la table est possible, sous deux formats
différents, CSV (avec séparation tabulaire) et XLS (Excel). Une fois
téléchargée, cette donnée peut être jointe à la donnée OSM publique dans
un logiciel SIG (QGIS par exemple) en utilisant le champ OSM\_ID dans
les deux sources de données.

### Créer un nouveau projet

A partir de la page des projets, cliquez sur le lien
![image](/images/fr/0300-12-23-private-data-store/image02.png)en haut.

![image](/images/fr/0300-12-23-private-data-store/image08.png)

A partir de cette page, vous définissez le nom de votre projet, les
attributs qui doivent être enregistrés dans le SDS, décrits par leur
type (texte, liste déroulante, etc.), clé et nom affiché pour
l’utilisateur.

La syntaxe utilisée (JSON) est essentielle pour que les attributs soient
reconnus par le SDS. Regardez plus haut un exemple pour vous aider.

Enfin, vous devez choisir et envoyer le modèle d’attributs (presets)
utilisé dans JOSM pour éditer les objets concernés par ce projet SDS.

6. Recherche sur les données du stockage séparé
------------------------------------------------

### A. Recherche sur les attributs et édition

Cliquez sur le lien "Tag search" pour rechercher un objet spécifique via
ses attributs, au sein des projets auxquels vous avez accès. Saisissez
votre recherche dans la zone "Enter Search String".

![image](/images/fr/0300-12-23-private-data-store/image14.png)

Si votre recherche est fructueuse, les objets concernés seront alors
listés.

![image](/images/fr/0300-12-23-private-data-store/image07.png)

Cliquez sur l’icône ![image](/images/fr/0300-12-23-private-data-store/image17.png) pour accéder aux
propriétés d’un objet, comme dans l’exemple ci-dessous.

![image](/images/fr/0300-12-23-private-data-store/image20.png)

Le tableau sur fond gris montre les tags de l’objet qui sont sauvegardés
dans le SDS, qui est possible de modifier en cliquant sur "Edit". En bas
à droite sont listées les propriétés OSM de l’objet.

### B. Recherche sur une carte et édition

A partir de la page d’accueil, cliquez sur le lien "Map search" pour
rechercher un objet spécifique.

![image](/images/fr/0300-12-23-private-data-store/image11.png)

Cela nécessite que vous sachiez où se trouvent les objets et que vous
vous approchiez jusqu’au niveau de zoom 16 d’OSM.

![image](/images/fr/0300-12-23-private-data-store/image01.png)

En dessous de la carte, vous pouvez alors cliquer sur "Load OSM
Geometries".

![image](/images/fr/0300-12-23-private-data-store/image06.png)

Vous pouvez maintenant cliquer sur un objet sur ​​la carte pour charger
le formulaire contenant l'ensemble de ses données OSM et ses donnés
séparées, que vous pouvez éditer.

Cependant tous les ajouts et modifications majeurs et les suppressions
doivent être faits dans JOSM. L'interface web du site est très limitée
pour édition : les utilisateurs ne peuvent qu’ajouter et modifier les
attributs d'objets déjà existants. Le site permet également aux
utilisateurs de rechercher des données par mot clé et par le domaine
spécifique qu'ils se trouvent. Mais il ne permet pas aux utilisateurs de
modifier, ajouter ou supprimer des objets ou des clés, ainsi que de
supprimer des attributs.

5. Questions fréquentes
-------------------------

**Comment mettez-vous plus d'informations avec des relations complexes
dans le serveur ?**

Nous espérons que le serveur sera bientôt amélioré afin de permettre
d’ajouter de multiples relations. Actuellement, la base de données est
seulement unidimensionnelle (fichier plat).

**Comment puis-je sauvegarder ?**

La procédure de sauvegarde des données dans l’espace de stockage séparé
est le même que l’envoi vers le serveur de vos modifications vers OSM.
N'oubliez pas d'utiliser le bon préfixe (hot: dans notre exemple) pour
les attributs destinés au stockage de données séparé, afin de s'assurer
qu'ils vont bien y être envoyé et non vers la base de données OSM
publique.

**Combien d'utilisateurs peuvent utiliser le même compte? Que faire si je
veux ajouter un utilisateur?**

Il n’y aucune limite aux comptes d'utilisateurs. Actuellement, l’accès
utilisateurs est géré par HOT. Tout nouvel utilisateur doit faire une
demande à [accounts@hotosm.org](mailto:accounts@hotosm.org).

**Combien de données puis-je conserver sur le serveur privé ?**

Beaucoup.

**Quelle ont les manières de rechercher des données séparées spécifiques ?**

Lorsque vous vous connectez à
[datastore.hotosm.org](http://datastore.hotosm.org), vous avez la
possibilité de faire une recherche de attributs spécifiques (voir plus
haut la section concernée). Si vous souhaitez faire des recherches plus
pointues le meilleur choix est d'utiliser QGIS. Ce greffon n'est pas
développé pour des requêtes complexes.

Résumé
-------

Dans ce chapitre, nous avons présenté le processus d'installation du
greffon SDS et comment l'utiliser pour enregistrer des données
spécifiques dans une banque de données privée. Nous avons aussi visité
le site internet du SDS, et vu comment les données séparées y sont
stockées. Le SDS est un excellent outil pour recueillir des informations
confidentielles en lien avec OpenStreetMap. Si vous souhaitez recueillir
des données confidentielles que vous ne pouvez pas stocker dans
OpenStreetMap, contactez
[accounts@hotosm.org](mailto:accounts@hotosm.org). et organisez les
types de données que vous souhaitez enregistrer dans un SDS.

Annexe
-------


### I. Installation du greffon SDS depuis la Source

Si vous ne parvenez pas à trouver le "sds" greffon dans le menu
Préférences, vous devrez l'installer manuellement comme décrit ici:

-   Téléchargez le greffon sds en allant à
    [http://kunden.geofabrik.de/03df698c95134f04949eb67ac7ba2195/](http://kunden.geofabrik.de/03df698c95134f04949eb67ac7ba2195/)et
    en cliquant sur sds.jar

-   Cliquez sur le menu Démarrer et tapez "% APPDATA%" dans la zone de
    saisie de la recherche. Cliquez sur le dossier nommé "Roaming".

![image](/images/fr/0300-12-23-private-data-store/image05.png)

.

-   Dans la fenêtre qui s'ouvre, double-cliquez sur "JOSM" pour ouvrir
    les fichiers de programme de JOSM.
-   Double-cliquez sur le dossier "greffon" pour l'ouvrir.
-   Déplacez le fichier de sds.jar dans ce dossier.

### II. Architecture du SDS

Les données séparées sont stockées dans une base de données PostgreSQL
et sont reliées aux objets OSM par les types d'objet et les ID. Le SDS
copie l’architecture de stockage des données OSM, mais au lieu de
sauvegarder et d’ajouter directement les informations aux tags, comme
OSM le fait, le SDS utilise des bases OSM\_shadows. Les OSM\_shadows
sont liées à des groupes de modifications horodatés. Ces objets "groupe
de modifications" sont liés aux objets "utilisateur". Le serveur SDS
montrera un groupe de modifications, unique sur le serveur principal
OSM, quand il est visible en ligne ou dans JOSM.

![image](/images/fr/0300-12-23-private-data-store/image15.png)

Taken from [github.com/geofabrik](https://github.com/geofabrik)

Comme dans OSM, il existe deux versions de OSM\_Shadows : celle qui
contient la donnée courante et celle qui contient le reste. Cette
manière de stocker les données permet à l’historique des données d’être
enregistré dans d'autres OSM\_shadows, tandis que la version la plus à
jour est enregistrée dans la table OSM\_Shadows courante.

Malheureusement, l'historique complet de chaque modification des données
et de l'utilisateur qui a effectué cette modification est stocké, mais
ne peut pas être récupéré. La raison est qu’actuellement, il n’y a pas
d'API ou d’interface Web pour accéder à cette information.
