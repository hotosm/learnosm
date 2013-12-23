---
layout: doc
title: Systèmes de référence et formats des fichiers OSM
permalink: /fr/advanced/projections-and-files-format/
lang: fr
category: advanced
otherguides: "Les autres niveaux"
---

Systèmes de référence spatiale et formats des fichiers de données OSM
=======================================================================

Introduction
------------

Lorsque l’on travaille avec OpenstreetMap et, en général, pour tous les
domaines d’activités qui relèvent de la géographie, de la géomatique et
des SIG (Systèmes d’Information Géographique), il est bon de connaître
les systèmes de référence spatiale, les projections et les différents
formats de fichiers qui s’y rapportent.

Dans ce chapitre, nous allons voir les systèmes de projection qui sont
utilisés par OSM, et notamment la projection dite « Pseudo-Mercator »
(également appelée « Web Mercator » ou simplement « Mercator » ; code
EPSG:3857) ; elle très largement utilisée pour le rendu des cartes sur
internet. Ensuite seront abordés les différents types de fichiers de
données OpenStreetMap, puis les fichiers SIG qui en sont dérivés, ainsi
que d’autres formats. Enfin, seront présentés les principaux services de
téléchargement de donnée OSM permettant de récupérer les types de
fichiers présentés juste avant.

![image](/images/fr/0400-12-24-projections-and-files-format/image08.png)

Source : [www.map\_box.com](http://www.map_box.com)

1. Projections et systèmes de coordonnées
-----------------------------------------

Ce système utilise les nombres pour identifier ou positionner un objet
dans l’espace. L’exemple le plus simple est le système de coordonnées
cartésiennes, qui est étudié dans les cours de géométrie au niveau
secondaire.

Dans ce système, nous avons l’axe des abscisses qui est X, et celui des
ordonnées qui est Y. Et les points sont réprésentés sur le graphe grâce
à ces deux axes.

![image](/images/fr/0400-12-24-projections-and-files-format/image12.png)

Source : 345Kai at the English language Wikipedia

Les géographes aussi utilisent les systèmes de coordonnées pour
identifier les localités, et ce système utilise aussi des coordonnées X
et Y. Les points du globe sont souvent référencés par la longitude
(Est-Ouest) et par la latitude (Nord-Sud). Pour les récépteurs GPS, le
standard le plus courant pour déterminer le système de coordonnées et
l’origine d’un point est le WGS84.

OpenStreetMap est basé sur des mesures GPS et est donc capable de
détecter et de lire le système WGS84.

Les unités de mesure en degrés ne sont pas appropriées pour mesurer les
surfaces, les formes, les distances et/ou les directions. Par exemple,
un degré de latitude couvre une distance supérieure à l’Equateur qu’à la
latitude 10 degrés Nord. Plus l’on se déplace vers le Nord, plus grande
est la distance représentée par un degré de latitude.

C’est pourquoi un système de coordonnées projetées est utilisé en
général. Ce système permet donc d’effectuer des analyses sur les
distances ou les angles et d’obtenir des mesures précises.

Systèmes de coordonnées Systèmes de coordonnées projetées

![image](/images/fr/0400-12-24-projections-and-files-format/image11.png)

Coordonnées géodésiques Mercator Sphérique/Google Mercator

latitudes/longitudes Ce système de coordonnées projetées est

WGS84/EPSG:4326 mesuré en mètres. Cette projection est utile pour

Ces unités sont utilisées par les GPS. les données vectorielles et les
tuiles raster ainsi

Système de référence géodésique WGS84 que les services WMS et TMS

Localise la position sur la terre par la

latitude et la longitude.

### A. Qu’est-ce qu’un système de coordonnées projetées?

Ces systèmes traitent les longitudes et les latitudes comme des
coordonnées planes. Autrement dit, un système de coordonnées projetées
convertit nos latitudes et longitudes en mesures métriques, ce qui nous
permet de mesurer les distances réelles et de rendre des images de
cartes qui seront le moins déformées dans le monde entier. En effet,
toute projection induit forcément des déformations. Imaginez que la
Terre soit une orange dont vous enlevez la peau qui représente sa
surface. D’expérience, vous savez que la peau d’une orange ne peut
s’étaler à plat.

Il existe plusieurs types de projections selon les différentes parties
du monde qui mettent l’accent sur telle ou telle région de la planète.
Certaines projections sont mieux adaptées à la représentation d’une
région entière, alors que d’autres sont beaucoup plus convenables pour
ce qui est des calculs de distance ou d’angle.

Il y a différents types de projections qui mettent l'accent sur
différents aspects du monde. Certaines projections sont mieux adaptées à
une petite zone, la décrivant plus précisément, tandis que d’autres
respectent mieux les distances. Certaines projections conservent les
directions, tandis que d’autres conservent mieux la forme. La distorsion
ou la représentation déformée de la terre, est toujours un problème. En
raison de préoccupations dues à la distorsion, des projections
particulières, telles que la Projection de Lambert et la Projection
Transverse Universelle de Mercator (dite UTM pour Universal Transverse
Mercator en anglais), sont utilisées pour les petites zones locales,
tandis que d’autres projections, comme Mercator, sont mieux adaptées à
des projections mondiales, tout en minimisant la distorsion.

![image](/images/fr/0400-12-24-projections-and-files-format/image09.png)

La distorsion, ou un manque de proportionnalité, est plus forte aux
pôles dans la projection Transverse de Mercator.

OpenStreetMap est une carte du monde, ce qui justifie l’utilisation de
la projection sphérique de Mercator pour le rendu cartographique.
Cependant, cette projection n’est pas sans limites quant à la
représentation fidèle du monde.

Comme les distances varient beaucoup de l’équateur aux pôles, la carte
paraît beaucoup plus déformée dans les régions qui sont loin de
l’équateur. Par conséquent, les régions situées aux pôles nord et sud
subissent de très fortes déformations.

### B. La projection sphérique de Mercator

Cette projection est un système de coordonnées projetées utilisée par de
nombreux fournisseurs de données libres, comme OpenStreetMap, et des
services Web, tels que Google Maps ou Microsoft Virtual Earth.

Cette projection peut aussi être appelé « Google Mercator » en raison de
sa première utilisation dans Google. Elle est plafonnée à la latitude
85° nord et sud de sorte que, quand le monde entier est affiché, il est
montré dans un carré. Cette projection de Mercator est généralement
utile uniquement pour les cartes visuelles.

Note : la règle de classification des tuiles d’OSM diffère de celle des
TMS (serveur de tuiles - “TileMapService”) car OSM place son origine 0,0
à partir du coin supérieur gauche de la grille.

La projection de Mercator est également connue pour ses méridiens et ses
parallèles qui se coupent à angle droit. Son échelle est vraie à
l’équateur et a deux parallèles de référence équidistants de l’équateur.
Dans cette projection sphérique, la Terre est considérée comme une
sphère et non pas comme une ellipse. Cette légère modification de
projection de l’ellipse à la sphère affecte les calculs effectués sur
une surface plane, il est donc nécessaire que toutes les couches soient
dans la même projection Mercator sphérique.

Heureusement, les serveurs de carte internet (WMS pour Web Map Service
en anglais) et de nombreux autres services API (Application Programming
Interfaces en anglais, soit Interfaces de Programmation d’Applications)
commerciaux existants utilisent cela par défaut.

### C. La norme EPSG

On peut se référer aux projections à travers les codes « EPSG », qui
sont des identificateurs de SIG nommés et gérés par l’European Petroleum
Survey Group. La projection Sphérique de Mercator est identifiée comme
EPSG: 3857 ou le plus souvent EPSG: 900913. Ce dernier code est son
ancien identifiant, un code non-officiel encore couramment utilisé. Ces
coordonnées sont en mètres et exprimées par x / y.

L’autre code EPSG commun est EPSG:4326, qui utilise le WGS84 comme
système de coordonnées. Chaque fois que vous voyez la chaîne « EPSG:
4326 », vous pouvez supposer qu’il décrit des coordonnées (latitude /
longitude).

### D. La cohérence des projections

L’usage de différents fichiers de formes (shapefiles en anglais) et
formats de fichiers peut prêter à confusion. Il est donc impératif
qu’ils soient dans le même système de référence spatiale. Et si ce n’est
pas le cas, votre carte sera incorrecte ainsi que les résultats de
toutes vos analyses spatiales.

Les données issues de OpenStreetMap peuvent être reprojetées, ou
converties dans n’importe quelle systèmes de projection et vice versa.
Vous pouvez utiliser QGIS pour reprojeter ou changer le système de
coordonnées de fichiers de données géographiques. Les détails de cette
opération se trouvent dans le manuel d’utilisateur de QGIS.

([http://www.qgis.org/en/docs/user\_manual/working\_with\_projections/working\_with\_projections.html](http://www.qgis.org/en/docs/user_manual/working_with_projections/working_with_projections.html)).

Actuellement, il n’y a pas d’ensemble standard de niveaux de zoom. Parce
qu’il n’y a aucun jeu de zoom standard, le langage de programmation ne
peut pas générer le rendu cartographique des projections de plusieurs
tuiles (projection croisée).

Pour plus d’informations sur les formats de projection, vous pouvez
visiter le site : www.spatialreference.org.

2. Données OpenStreetMap et types de fichier
--------------------------------------------

### A. Types de fichiers au format OpenStreetMap

Ici, nous allons voir tous les types de formats de fichiers possibles
que vous pouvez rencontrer en découvrant OpenStreetMap.

Les fichiers OSM (.osm) sont au format XML et sont utilisés dans JOSM
pour leur facilité de stockage et de conversion. Chaque fois que vous
enregistrez les modifications dans JOSM, vous les enregistrez au format
.osm. Ce type de fichier ne s’utilise pas uniquement dans JOSM, mais
peut requérir des extensions pour être lu dans des logiciels de SIG
comme QGIS, dans lequel il vous faudra installer au préalable un greffon
OSM.

#### Planet OSM

[http://planet.openstreetmap.org/](http://planet.openstreetmap.org/)

Ce fichier est une copie régulièrement mise à jour de la base de données
complète d’OpenStreetMap. Elle fait plus de 30 Go.

#### OSM source file (.pbf or .osm.pbf)

Ce fichier binaire est une version compressée du fichier .osm. Il est
similaire à la version zippée du fichier .osm (osm.bz2). Par contre, il
n’est pas reconnu par tous les logiciels de SIG. Dans JOSM, il est
nécessaire d’installer un greffon appelé pbf.

#### OSM XML (.bz2 ou .osm)

Ces formats de fichiers XML sont les plus utilisés par la communauté
OpenStreetMap. Ils peuvent être lus dans JOSM et/ou converti dans un
autre format par QGIS.

#### Fichiers des modifications OSM ou “diff” (.osc ou .osc.gz)

Ce sont des fichiers différentiels qui ont un format similaire au format
standard XML, mais qui ont une certaine valeur ajoutée. Ils sont
compressés en gzip (.osc.gz). Ils sont très utiles pour mettre à jour
une base de données PostGIS sans avoir à télécharger l’ensemble des
données OSM. Ils comportent aussi toute l’historique des modifications
sur les données.

![image](/images/fr/0400-12-24-projections-and-files-format/image15.png)

Ce fichier XML peut aussi être utilisé par d’autres applications de
rendu comme Osmarender ou Kosmos.

### B. Types de fichiers SIG issus de données OpenStreetMap

#### Fichiers ESRI Shapefile (.zip, or .shp, .shx, .dbf, .prj, and .index)

Ce type de fichier compressé est nommé “shapefile” (fichier de forme) et
porte l’extension .shp. C’est un standard dans le monde des SIG en
raison de sa flexibilité dans le stockage de l’information et aussi du
fait qu’il est lu par la plupart des logiciels SIG. On peut y retrouver
plusieurs couches de données vectorielles et les attributs décrivant les
données de chacune des couches.

Les shapefiles ou fichiers de forme sont constitués en général de trois
ou cinq types de fichiers.

-   shp (obligatoire) stocke les points géographiques, les ligne ou les
    polygones, en un mot la géométrie de l’entité.
-   shx (obligatoire), un index de position de la géométrie de l’entité,
    sous forme d’index de forme.
-   dbf (obligatoire), un format d’attributs issu de dBase III, soit un
    tableau qui comprend tous les attributs des objets géographiques.
-   prj (recommandé), un fichier texte qui contient des informations sur
    le système de projection.
-   index (recommandé), un fichier d’index qui est utile pour accélérer
    Mapnik.

### 

#### Fichiers SQL PostGIS (.sql)

Utilisez PGAdmin III
([http://www.pgadmin.org/download/](http://www.pgadmin.org/download/))
qui permet de lire, éditer et organiser les fichiers.

Ces fichiers SQL contiennent des instructions qui permettent de créer et
modifier la base de donnée PostgreSQL. Ils servent également à
sauvegarder les différentes tables d’une base de données. Ces fichiers
spécifient le contenu de la table et ses exigences spatiales. Ils
identifient les colonnes, et la liste de toutes les valeurs pour une
colonne. PostGIS est un outil de stockage / d’analyse puissant et est
idéal pour l’exécution de requêtes sur des volumes de données
importants.

![image](/images/fr/0400-12-24-projections-and-files-format/image02.png)

Remarque : les deux outils (PostGIS et les bases de données SQLite)
contiennent une ou plusieurs tables. QGIS et TileMill ont besoin de
savoir de quelle table ils peuvent tirer les valeurs. Il est donc
nécessaire de préciser les tables particulières ou les sous-requêtes.
Heureusement, l’ajout de tables entières est aussi simple que d’entrer
le nom de la table et vous êtes capable d’éditer des sous-ensembles
particuliers et faire des ajustements temporaires à ces tables.

#### Fichiers SQLite

Visualiseur SQLite :
[http://sqlitebrowser.sourceforge.net/](http://sqlitebrowser.sourceforge.net/)

![image](/images/fr/0400-12-24-projections-and-files-format/image03.png)

Ces fichiers texte compacts sont utilisés dans la base de données
relationnelle SQLite. Les fichiers comprennent des données OSM dans une
table compacte qui le rend efficace pour des capacités de stockage (bien
meilleures que les fichiers de formes). SQLite diffère de PostgreSQL
dans son architecture personnelle simple, ce qui le rend plus utile pour
une base hébergée dans un ordinateur personnel ou des activités
autonomes. PostgreSQL supporte une architecture client-serveur, qui est
mieux adaptée pour les données complexes et plus sophistiqués.

Spatialite est l’extension spatiale de SQLite.

#### Fichiers Spatialite (.sqlite)

![image](/images/fr/0400-12-24-projections-and-files-format/image05.png)

Ce fichier est utilisé dans Spatialite, l’extension spatiale de la base
de données SQLite ; Spatialite est à SQLite ce que PostGIS est à
PostgreSQL. Comme SQLite, cette base de données est une bonne
alternative si vous voulez quelque chose de plus léger que PostGIS. Il
permet la reprojection et des fonctionnalités géographiques plus grandes
que SQLite. QGIS et TileMill peuvent lire et stocker des fichiers
Spatialite. Spatialite contient une application de visualisation qui
vous permet de visualiser la couche préalable.

### C. Autres types de fichiers

#### Cartes images (.png, .jpg, .svg, .pdf)

![image](/images/fr/0400-12-24-projections-and-files-format/image13.png)

Le site OpenstreetMap.org permet d’exporter la carte sous un format
image de façon très simple. Zoomez d’abord de façon à sélectionner la
zone à exporter. Ensuite, en bas à droite, cliquez sur le bouton
Partager. Le panneau de droite va vous permettre de choisir le format du
fichier image et la taille de la carte. Pour conserver les coordonnées
de la zone exportée, copiez simplement l’url. Celui-ci contient les
latitude, longitude et niveau de zoom.

Les images au format png et jpeg sont des bitmaps (raster), tandis que
les images au format svg et pdf sont vectorielles (à moins qu’il
n’existe une image intégrée dans le svg ou le pdf). L’option échelle
vous permet de produire une carte plus ou moins grande. Si vous
inscrivez un nombre trop petit, ce nombre sera automatiquement modifié
pour indiquer la valeur la plus petite possible. Plus ce nombre est
grand, plus l’image affichée sera petite.

Vous pouvez changer la taille de l’échelle et de pixel des images de
cartes sur le site
[www.openstreetmap.org](http://www.openstreetmap.org).

La taille en pixels est calculée en fonction de la taille de la zone
sélectionnée, ainsi que de l’échelle qui a été choisie. Cette taille va
changer lorsque vous ajustez l’échelle.

Exemple :

Échelle 1:10000 La taille de l’image sera de 2320 x 1430 pixels

Échelle 1:50000 La taille de l’image sera de 464 x 286 pixels

#### Limites de polygones (.poly)

Les polygones (d’emprise) pays d’Osmosis sont utiles pour extraire les
données géographiques d’un pays.

Elles peuvent être utilisées dans les outils Osmosis pour procéder à
l’extraction de polygones (d’emprise) pays spécifiques en provenance de
données OSM au format XML.

#### Cartes OSM pour récepteurs GPS Garmin (.zip ou .img)

Les cartes sont adaptées au format GPS Garmin et peuvent être chargées
très facilement.

Vous pouvez charger les images sur votre Microchip GPS ou utiliser un
client, comme GPS Babel ou Garmin Basecamp, pour transférer les cartes
OSM à votre GPS. Ces images peuvent être visualisées sur votre
ordinateur et sont le plus utile pour les unités GPS qui permettent
d’afficher les cartes complémentaires.

![image](/images/fr/0400-12-24-projections-and-files-format/image04.png)![image](/images/fr/0400-12-24-projections-and-files-format/image16.png)

Les fichiers avec l'extension .Zip ou extension .img sont utiles pour
mettre sur les appareils GPS.

Le service HOT Export (voir plus bas dans ce chapitre) produit les
cartes au format GPS Garmin. La page
wiki[](http://wiki.openstreetmap.org/wiki/OSM_Map_On_Garmin/Download)[http://wiki.openstreetmap.org/wiki/OSM\_Map\_On\_Garmin/Download](http://wiki.openstreetmap.org/wiki/OSM_Map_On_Garmin/Download)
décrit les autres services de téléchargement existants.

#### Fichiers GPX (. zip ou. .gpx)

Ces fichiers XML permettent la sauvegarde et le transfert des données
GPS vers des applications diverses et des sites web. L’inverse est
également possible.

![image](/images/fr/0400-12-24-projections-and-files-format/image07.png)

#### Fichiers Navit (.zip or .bin)

Liés spécifiquement aux logiciels de navigation Navit, ils utilisent des
données routières et des POI.

#### Fichiers TOM TOM (.zip ou .ov2)

Ces fichiers de POI sont utilisés dans les navigateurs TomTom.

#### Fichiers Adobe Illustrator (.zip ou .ai )

Idéal pour représenter des dessins vectoriels sur une seule page. Cela
permet d’afficher des cartes statiques, les retravailler avec de
puissants outils de dessin vectoriel et les imprimer.

#### Format HTML exportable (.html)

Cliquez sur le bouton HTML et copiez les instructions html à ajouter
dans votre page web. Cela vous permet de créer une carte glissante de la
zone de votre choix. La carte conserve automatiquement sa mise à jour.
Pourvu que vous ne modifiez pas l’attribut src de l'élément iframe, vous
pouvez modifier le code HTML pour personnaliser votre site Web.

3. Services de téléchargement de données OSM
--------------------------------------------

### A. Exports OpenstreetMap

![image](/images/fr/0400-12-24-projections-and-files-format/image00.png)

Exporter les données à patir de Openstreetmap.org est plus facile qu’il
ne semble de prime abord. Cliquez sur Exporter dans la partie supérieure
de la page, vous verrez ensuite dans le panneau de gauche les
coordonnées par défaut de la carte. Vous pouvez modifier ces paramètres
en déplaçant la vue de la carte, en tapant des coordonnées différentes
et/ou en cliquant “Sélectionner manuellement une zone différente”. Cette
option vous permet de créer un rectangle sur la zone que vous souhaitez
récupérer. Cliquer sur “Exporter” pour télécharger le fichier OSM de la
zone.

Pour enregistrer l’emplacement de la zone que vous exportez, copier
simplement l’url de la page. Celui-ci contient les latitude, longitude
et zoom de la zone.

### 

### B. HOT Export

Le site HOT Export permet d’exporter des données OSM pour une zone
définie. En 2013, les zones disponibles pour le téléchargement sont
l’Afrique, les Caraïbes, l’Asie Centrale et du Sud-Est. Voici une
capture d’écran montrant les formats de données disponibles sur le site,
qui sont particulièrement nombreux.

![image](/images/fr/0400-12-24-projections-and-files-format/image14.png)

En ce qui concerne les shapefiles, l’outil HOT Export exporte les
données OSM dans quatre shapefiles distincts, pour les points, les
lignes, les polygones, et les routes. Il est parfois nécessaire d’avoir
ces fichiers reliés entre eux dans un fichier zip avant qu’ils puissent
être ajoutés à certains programmes, comme TileMill. La plupart des bases
de données, comme QGIS, exigent seulement le fichier .shp à condition
que les autres fichiers soient dans le même dossier.

![image](/images/fr/0400-12-24-projections-and-files-format/image01.png)

La liste des attributs récupérés est définie dans chaque tâche en
utilisant un modèle d’attributs (preset) JOSM dont les clés vont filtrer
les attributs.

#### Job log file (file txt)

![image](/images/fr/0400-12-24-projections-and-files-format/image06.png)

Exemple de fichier texte detaillant le travail que vous avez lancé.

### C. Site de téléchargements de Geofabrik

[http://download.geofabrik.de/](http://download.geofabrik.de/)

Les polygones (d’emprise) pays d’Osmosis sont ceux utilisés par
[Geofabrik](http://download.geofabrik.de/) dans son service de
téléchargement de données.

Geofabrik fournit des extractions régulièrement mises à jour de
continents, pays et villes pré-paramétrées. On y retrouve des fichiers
aux formats OSM (.osm, .bz2 ou .pbf) ou au format shp. Les attributs
sont ceux du modèle d’attributs standard de JOSM.

### D. Extractions de Metro

[http://metro.teczno.com/](http://metro.teczno.com/)

Ce service propose des extractions des principales villes du monde et de
leurs environs. Il fournit la donnée OSM aux formats suivants : .osm,
.bz2, .pbf and .zip containing shapefiles.

### E. Autres sources

[http://wiki.openstreetmap.org/wiki/Download](http://wiki.openstreetmap.org/wiki/Download)

Des sources supplémentaires sont listées dans le wiki OpenStreetMap.

Résumé
------

Ce chapitre vise à informer sur les systèmes de référence spatiale, les
formats de fichiers pouvant contenir des données OSM et les services
permettant de les télécharger. Il explique les projections, le système
de coordonnées WGS84 et le système Mercator sphérique qu’utilise
OpenStreetMap. Il présente les différents formats de fichiers et types
que vous pouvez rencontrer avec OSM, y compris les fichiers binaires
OSM, les fichiers de formes (shapefile), PostGIS, SQLite, etc. Il existe
un certain nombre de moyens pour analyser, partager et imprimer des
données OSM.

* * * * *

Annexe
------

### PostGIS File Formatting

CREATE TABLE geometries (name varchar, geom geometry);

INSERT INTO geometries VALUES

('Point', 'POINT(0 0)'),

('Linestring', 'LINESTRING(0 0, 1 1, 2 1, 2 2)'),

('Polygon', 'POLYGON((0 0, 1 0, 1 1, 0 1, 0 0))'),

('PolygonWithHole', 'POLYGON((0 0, 10 0, 10 10, 0 10, 0 0),(1 1, 1 2, 2
2, 2 1, 1 1))'),

('Collection', 'GEOMETRYCOLLECTION(POINT(2 0),POLYGON((0 0, 1 0, 1 1, 0
1, 0 0)))');

SELECT Populate\_Geometry\_Columns();

SELECT name, ST\_AsText(geom) FROM geometries;

The OSM data is divided into planet\_osm\_point, planet\_osm\_line, or
planet\_osm\_polygon sections:

Database Format:

DROP TABLE "public"."planet\_osm\_point" CASCADE;

DELETE FROM geometry\_columns WHERE f\_table\_name =
'planet\_osm\_point' AND f\_table\_schema = 'public';

BEGIN;

CREATE TABLE "public"."planet\_osm\_point" ( OGC\_FID SERIAL, CONSTRAINT
"planet\_osm\_point\_pk" PRIMARY KEY

(OGC\_FID) );

SELECT
AddGeometryColumn('public','planet\_osm\_point','wkb\_geometry',3857,'POINT',2);

CREATE INDEX "planet\_osm\_point\_geom\_idx" ON
"public"."planet\_osm\_point" USING GIST ("wkb\_geometry");

ALTER TABLE "public"."planet\_osm\_point" ADD COLUMN "osm\_id" INTEGER;

ALTER TABLE "public"."planet\_osm\_point" ADD COLUMN "z\_order" INTEGER;

ALTER TABLE "public"."planet\_osm\_point" ADD COLUMN "way\_area" FLOAT8;

ALTER TABLE "public"."planet\_osm\_point" ADD COLUMN "man\_made"
VARCHAR;

Point Value:

INSERT INTO "public"."planet\_osm\_point" ("wkb\_geometry" , "osm\_id",
"z\_order", "way\_area", "natural", "name") VALUES

('0101000020110F0000C8813362B71D6841D6CFADA3716A17C1', 226284484, 0, 0,
'cape', 'Tandjung Malatajur');

Line Value:

INSERT INTO "public"."planet\_osm\_line" ("wkb\_geometry" , "osm\_id",
"z\_order", "way\_area", "oneway", "ref", "highway",

"surface") VALUES

('0102000020110F0000040000005E6E7856A95E68419119C50A0FC519C1E3AD9227AA5E6841E944AC7B4AC519C1F06C6FC

BAA5E684188E54F5370C519C1362CA7BBAC5E684180F2B63DA8C519C1', 169491519,
6, 0, 'yes', 'Jalan Kyai Haji Mansyur',

'secondary\_link', 'asphalt');

Polygon Value:

INSERT INTO "public"."planet\_osm\_polygon" ("wkb\_geometry" ,
"osm\_id", "z\_order", "way\_area", "amenity", "building") VALUES

('0106000020110F0000010000000103000000010000000A000000E947B2B13C5E6841D0B6E44847DA19C1C3554DC73B5E684

1FDE7A79E52DA19C1E254D26C3B5E684112BD350866DA19C1EC6B375E3B5E6841D7C37C7970DA19C1DB75EAB63B5E68

41AC8BD56F8DDA19C17494B5AC3C5E68417A27911599DA19C1F3197AAC3D5E68411E49C6888FDA19C1384C50073E5E68

41AA7E6D9272DA19C1DE2C9C943D5E6841F3A0AF4E52DA19C1E947B2B13C5E6841D0B6E44847DA19C1',
169511568, 0,315.916202817112, 'public\_building', 'yes');


