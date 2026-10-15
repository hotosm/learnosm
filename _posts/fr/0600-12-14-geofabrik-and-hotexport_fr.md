---
layout: doc
title: Utilisation de Geofabrik et de HOT Export
permalink: /fr/osm-data/geofabrik-and-hot-export/
lang: fr
category: osm-data
---

Utilisation de Geofabrik et de HOT Export
================


Après avoir appris comment ajouter et modifier des données dans OpenStreetMap (OSM), Maintenant, vous souhaitez peut-être obtenir les données en tant que sauvegarde ou les traiter à l'aide d'un logiciel de système d'information géographique à code source ouvert, tel que Quantum GIS. ([www.qgis.org](http://www.qgis.org)).  

Obtenir OSM Données sur Geofabrik Website
-------------------------------------

Les données OSM peut être obtenu facilement en le téléchargeant sur [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

![download-geofabrik][]

Les données sont divisées en plusieurs régions. L'Indonésie peut être trouvée comme faisant partie de l'Asie en cliquant sur la sous-région Asie du tableau bleu, et la page apparaîtra alors comme ceci.  

![geofabrik-asia][]

Après être apparu en haut de la page, voyez comment la sous-région se divise en pays d'Asie. Pour obtenir les données, vous devez cliquer sur l'État indonésien dans le tableau bleu, et il apparaîtra comme ceci.  

![geofabrik-indonesia][]

Ensuite, si vous souhaitez obtenir les données indonésiennes au format shapefile (.shp), vous cliquez sur le lien indonesia-latest.shp.zip, et le fichier sera téléchargé. Il existe plusieurs formats qui peuvent être téléchargés. Un format populaire est le shapefile (shp) avec des points, des polylignes et des couches de polygones.  

Vous pouvez vérifier la dernière fois que les données ont été mises à jour. Veuillez noter que le serveur met généralement à jour les données une fois toutes les 24 heures. Par conséquent, si vous ne faites que charger des données sur OSM, celles-ci n'apparaissent pas automatiquement lorsque vous les téléchargez, mais vous devez attendre les dernières mises à jour du serveur.  

Obtenir des données OSM  sur le site de l'outil d'exportation HOT
--------------------------------------

Le [Équipe humanitaire OpenStreetMap](https://www.hotosm.org/) (HOT) a créé un service en ligne qui permet aux utilisateurs de créer des extraits OSM personnalisés partout dans le monde, en sélectionnant une zone d'intérêt, des caractéristiques cartographiques et des formats de fichiers. En quelques minutes, des données OSM actualisées sont exportées, filtrées et converties. La section suivante vous guidera dans l'utilisation de l'outil d'exportation. Ces informations sont également disponibles dans la section « [Apprendre](https://export.hotosm.org/en/v3/learn)" du site export.hotosm.org.

![hot-export-tool][]

## Démarrage rapide

Tout le monde peut créer une exportation OpenStreetMap personnalisée avec l'outil d'exportation - il suffit d'enregistrer un compte. Vous pouvez vous enregistrer avec un compte OpenStreetMap à partir de openstreetmap.org, et une adresse électronique valide, qui sera utilisée pour envoyer un lien vers votre exportation une fois celle-ci terminée.

## Identifier la zone d'intérêt

L'outil d'exportation permet de sélectionner une zone d'intérêt ( AOI) de plusieurs façons. Il est possible de taper et de rechercher, de spécifier les coordonnées d'une boîte de délimitation, de dessiner une boîte de délimitation, de dessiner librement un polygone, d'utiliser la vue actuelle ou de télécharger un fichier geojson.

![export-tool-create][]

Une fois que vous êtes 'connecté' à l'outil d'exportation HOT, l'onglet "Créer" devient disponible. C'est dans l'onglet "Créer" que vous allez configurer votre exportation, en la décrivant sur le côté gauche et en sélectionnant votre zone d'intérêt avec le cartographe sur le côté droit. 

![export-tool-describe][]

### Barre de recherche
Il y a 6 façons de définir un AOI pour votre exportation. La première et la deuxième utilisent la barre de recherche, qui peut soit trouver un lieu en tapant son nom et en le sélectionnant dans les options ci-dessous, soit définir les coordonnées de la zone d'intérêt. Les coordonnées minimales X, minimales Y, maximales X et maximales Y (Ouest, Sud, Est, Nord) d'un pays peuvent être trouvées [dans une liste CSV fournie par le Humanitarian Data Exchange (HDX)] (https://data.humdata.org/dataset/bounding-boxes-for-countries).

![export-tool-search][]
![export-tool-coordinates][]


### Digitaliser 
La troisième et la quatrième façon de sélectionner une zone d'intérêt dans l'outil d'exportation consiste à dessiner une boîte de délimitation en sélectionnant l'option "Boîte" dans la colonne d'outils à droite de l'écran. Vous pouvez également dessiner un polygone directement sur la carte en sélectionnant l'outil "Draw".

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Charger un polygone
Les deux derniers moyens de sélectionner une zone d'intérêt sont l'outil "Cette vue" sur le côté droit de la carte, qui capture l'étendue de la vue actuelle de la carte, ou l'outil "Importer" qui vous permet de charger un polygone de la zone.  

![export-tool-area-view][]
![export-tool-area-import1][]


Le polygone importé doit être un fichier GeoJSON en coordonnées géographiques WGS84. Une des façons de créer un fichier GeoJSON est d'utiliser le site geojson.io. Une fois la zone sélectionnée dans [geojson.io](http://geojson.io/), copiez le texte dans la case de droite, collez-le dans un éditeur de votre choix, tel que [Atom](https://atom.io/) et enregistrez votre fichier GeoJSON.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


Le fichier GeoJSON doit être légèrement modifié afin d'être accepté par l'outil d'exportation. Veuillez noter que le fichier ne peut pas contenir de multipolygones. Dans sa forme la plus simple, le fichier doit seulement indiquer qu'il s'agit d'un "type : Polygone" et énumérer les coordonnées des points/nœuds qui identifient la zone. Le fichier GeoJSON sera alors analysé avec succès par l'outil et utilisé pour spécifier l'AOI.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Sélectionner les formats de fichiers

L'outil permet d'extraire les données OSM via l'API Overpass dans son format de fichier natif PBF (Protocol Buffer Binary), avant de filtrer les données pour les caractéristiques cartographiques et les balises associées spécifiées par l'utilisateur. Une fois les données filtrées, elles sont converties dans les formats de fichiers choisis par l'utilisateur.  

Actuellement, l'outil peut convertir les données OSM en Shapefile .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf et MBTiles .mbtiles. Au moins un des formats de fichier doit être sélectionné pour créer l'exportation, mais il n'y a aucune restriction quant au nombre de formats pouvant être choisis, ce qui peut être fait en cochant plusieurs cases.

![export-tool-file-formats][]


### Shapefile .shp
Les Shapefiles sont un format tabulaire développé par Esri. Ils constituent le format de fichier le plus populaire pour les données SIG. Un shapefile est en fait constitué de 3 ou 4 fichiers individuels, généralement regroupés dans une archive ZIP. Les fichiers Shapefile ont certaines limitations, telles que la taille du fichier, plafonnée à 2 gigaoctets (Go) et une longueur de nom de colonne limitée à 10 caractères. Pour en savoir plus sur les [Shapefiles .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp), consultez la section Apprendre.

![export-tool-shapefile][]


### Geopackage .gpkg
Les géopackages de l'OGC stockent les données géospatiales dans une seule base de données SQLite. Les Geopackages sont très similaires aux bases de données SQLite compatibles avec Spatialite. Ils devraient être utilisables dans la plupart des principales applications SIG. Les Geopackages supportent des tailles de fichiers et des nombres de colonnes pratiquement illimités dans les tables, et supportent totalement l'Unicode. Ils sont particulièrement adaptés si vous avez besoin d'exécuter des requêtes SQL sur les données. Pour en savoir plus sur [Geopackages.gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg), consultez la section Apprendre.

![export-tool-sql][]


### Garmin .img
Un fichier .IMG contient toutes les informations nécessaires pour rendre une cartographie sur un appareil mobile GPS Garmin. Veuillez noter que le style cartographique .img et les choix d'éléments de la carte ne dépendent pas de la sélection d'éléments soumise à l'outil d'exportation. Un style par défaut basé sur toutes les données OSM est utilisé. Pour en savoir plus sur [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img), consultez la section Apprendre.

![export-tool-garmin][]


### Google Earth .kml
Le Keyhole Markup Language (KML) est un format basé sur XML permettant de modéliser géographiquement des points, des lignes, des polygones et des attributs associés. Google Earth est la plateforme de visualisation de la terre la plus connue utilisant KML, ce qui est également la raison pour laquelle il a été développé. Pour en savoir plus sur [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml), consultez la section Apprendre.

![export-tool-google-earth][]


### OSM .pbf
Le format de données canonique d'OSM est un document XML de nœuds, voies et relations. Le format PBF (Protocol Buffer Binary Format) est une représentation optimisée du XML OSM, qui est plus petit sur le disque et plus rapide à lire. Ce format n'est compatible qu'avec des outils spécifiques à OSM, tels que les logiciels d'édition OSM. Chaque .PBF fourni par l'outil d'exportation doit être référentiellement complet, c'est-à-dire que tout nœud, voie ou relation référencé par une voie ou une relation apparaîtra dans le PBF. Pour en savoir plus sur [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf), consultez la section Apprendre.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me est une application de navigation GPS et de cartographie pour les smartphones et tablettes Android et iOS, prenant notamment en charge la cartographie et la navigation hors ligne. Pour en savoir plus sur [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm), consultez la section Apprendre. Pour utiliser une exportation personnalisée avec Maps.me sur Android, veuillez suivre les étapes suivantes :
- Ouvrez Maps.me et naviguez jusqu'à la région qui vous intéresse
- Acceptez l'invitation de Maps.me et téléchargez la région proposée.
- Forcer la fermeture de Maps.me
- Créer une exportation MWM
- Téléchargez l'exportation, décompressez-la et copiez le fichier .mwm sur votre appareil.
- À l'aide du gestionnaire de fichiers Android, accédez à l'emplacement contenant le fichier .mwm
- Appuyez longuement pour le sélectionner et touchez le bouton "copier" ou "couper"
- Naviguez vers "MapsWithMe" et ouvrez le dossier portant le numéro le plus élevé (par exemple, 170917)
- Copiez/déplacez votre fichier .mwm dans ce répertoire en appuyant sur le bouton "coller"
- Supprimez le fichier .mwm existant pour la région qui vous intéresse, en prenant note de son nom de fichier
- Renommez votre fichier .mwm pour qu'il corresponde à la région téléchargée par Maps.me (que vous venez de supprimer) en appuyant longuement (pour sélectionner) et en appuyant sur le bouton "plus" (3 points verticaux)
- Ouvrez Maps.me

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd est également une application de navigation GPS et de cartographie pour les smartphones Android et iOS, ainsi que pour les tablettes, prenant notamment en charge le rendu hors ligne, les itinéraires et la recherche. Pour en savoir plus sur l'application et ses nombreuses fonctionnalités, consultez [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) sur leur site principal. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles est un format de fichier permettant de stocker des tuiles cartographiques dans un seul fichier. L'outil d'exportation permet aux utilisateurs de créer des MBTiles contenant des tuiles OSM, qui peuvent être utilisées comme sources de contexte hors ligne dans les applications qui les prennent en charge. Veuillez noter que MBTiles extraira toutes les caractéristiques OSM dans la zone d'intérêt sélectionnée par le biais de l'outil d'exportation, l'onglet '3 Data' basculant automatiquement vers une option de source déroulante et une plage de zoom, à la place de l'option standard de sélection d'étiquettes d'arbre et de caractéristiques YAML. Pour en savoir plus sur [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles), consultez la section Apprendre.

![export-tool-mbtiles][]


Des formats de fichiers supplémentaires sont continuellement suggérés et ajoutés à l'outil d'exportation. Si vous souhaitez qu'un format de fichier soit ajouté à l'avenir, veuillez faire un commentaire sur le dépôt [GitHub](https://github.com/hotosm/osm-export-tool/issues). Pour obtenir des informations plus détaillées sur chaque type de format de fichier, veuillez consulter la page "Formats de fichier" dans la section « [Apprendre](https://export.hotosm.org/en/v3/learn)" du site Web de l'outil.



## Personnaliser les caractéristiques de la carte

L'outil permet à l'utilisateur de personnaliser les données sélectionnées dans la zone d'intérêt définie. Les données OSM sont définies à l'aide de filtres de balises et de sélections clés, avec l'arbre de balises ou le formulaire YAML. L'arborescence de balises est destinée aux cas d'utilisation courants, présentant un ensemble de filtres et de sélections, tandis que la configuration YAML permet un contrôle complet des filtres et des sélections, à l'aide d'une définition de filtre de type SQL.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM est une base de données mondiale ouverte d'entités géographiques étiquetées, avec trois types d'éléments :
Les nœuds, qui représentent un point sur la surface de la terre
les voies, qui sont des ensembles de nœuds pouvant former des lignes ou des polygones
Les relations, qui sont des ensembles de nœuds, de voies ou d'autres relations

Chacun de ces éléments peut avoir un nombre quelconque de balises clé=valeur. Par exemple, un bureau de poste peut être représenté par une voie avec les balises building=yes et amenity=post_office. Voyons comment ces balises peuvent être définies dans l'outil d'exportation en utilisant l'arbre des balises et le formulaire YAML pour filtrer les données OSM.

### Arbre à étiquettes
L'arborescence des étiquettes est le moyen le plus simple de commencer à sélectionner des fonctionnalités, en cochant simplement les cases parent ou enfant souhaitées. Veuillez noter que la sélection d'une case à cocher parent ajoutera des balises clé=valeur supplémentaires associées au thème, ainsi que les cases à cocher enfant situées en dessous. Chaque case à cocher parent a une requête différente pour filtrer les données, il est donc fortement recommandé d'explorer la syntaxe de chaque thème en passant la souris sur la case à cocher, ce qui fournira une boîte d'information à droite. 

![export-tool-treetag-sql][]


Par exemple, si vous cochez la case parentale "Urgence", vous sélectionnerez automatiquement les cases enfant "Commissariat de police", "Poste d'ambulance" et "Caserne de pompiers" situées en dessous. En outre, vous sélectionnerez également toutes les balises où emergency=yes, amenity=police et amenity=fire_station dans la requête SQL suivante :

emergency IS NOT NULL OR amenity IN ('police', 'fire_station')

Les cases à cocher parentales ne représentent pas toujours ce qui est disponible en tant qu'enfants ci-dessous, afin d'essayer de tenir compte de toutes les balises possibles associées à un thème. Les balises OSM évoluent en permanence et nous voulons nous assurer que l'outil peut s'adapter à ces changements. Seules les balises clé=valeur les plus couramment utilisées sont représentées comme des cases à cocher enfant, et les cases à cocher parent sont utilisées pour essayer d'englober celles qui ne sont pas utilisées aussi fréquemment, mais qui font partie d'un thème. Si vous avez des suggestions de modifications à apporter à ces thèmes et balises, veuillez les commenter sur la [feuille de calcul](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) utilisée pour alimenter l'arbre des balises, et nous essaierons de les intégrer le cas échéant.

![export-tool-treetag-spreadsheet][]


### Formulaire YAML
L'utilisation d'une configuration YAML permet un contrôle complet de l'application de filtres aux données OSM, en utilisant une définition de filtre de type SQL pour appliquer des balises clé=valeur. Veuillez noter que l'arbre à balises génère également une syntaxe sur le formulaire YAML, de sorte que toutes les cases à cocher parent et enfant sélectionnées seront automatiquement appliquées dans la boîte YAML. Il s'agit d'un point de départ pour la requête qui peut être modifiée ultérieurement. 

![export-tool-treetag-yaml][]


L'utilisation de YAML a été choisie en raison de sa simplicité et de sa compatibilité avec SQL. Le format YAML de sélection des caractéristiques est similaire aux fichiers de style utilisés par des programmes tels que osm2pgsql et imposm. Il est sensible aux espaces, chaque élément enfant étant indenté sous son élément parent et précédé d'un tiret. Ce tiret doit être suivi d'un espace. Voici un exemple de base d'une sélection d'éléments avec 3 thèmes, bâtiments, voies navigables et hôpitaux :

![export-tool-yaml-code1][]


YAML comporte des thèmes et deux structures de données, les cartographies et les listes.
Le thème dans l'exemple ci-dessus est : bâtiments
Dans l'exemple ci-dessus, les cartographes sont les suivants : types et sélection 
Les listes dans l'exemple ci-dessus sont : des éléments enfants de sélections et de type

YAML : Thèmes
Les thèmes sont les clés de premier niveau dans le document YAML, avec des caractères valides comprenant des lettres, des chiffres et des caractères de soulignement. 

YAML : Types de géométrie
Les valeurs de la liste sous les types de cartographie peuvent être un ou plusieurs des éléments suivants : "- points", "- lignes", "- polygones". Si la clé des types est omise, les trois types de géométrie seront inclus dans le thème.

YAML : Sélections de colonnes
Les éléments de la liste sous la clé de sélection du cartographe déterminent les colonnes pour chaque thème. L'exemple suivant remplira les colonnes "name" et "amenity" avec leurs valeurs provenant d'OSM :

![export-tool-yaml-code2][]


YAML : Filtres
Les filtres se trouvent sous where: key de chaque thème. Ils définissent quel sous-ensemble d'entités OSM appartient à ce thème. L'exemple suivant filtrera le thème pour ne retenir que les éléments pour lesquels la clé natural a la valeur waterway :

![export-tool-yaml-code3][]


Remarque Il est presque toujours nécessaire d'avoir une sorte de filtrage, sinon le thème inclura simplement toutes les caractéristiques OSM pour les types de géométrie donnés. Un filtre est spécifié à l'aide d'une syntaxe de type SQL, avec les mots-clés valides IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


Préréglages JOSM
Les anciennes versions de l'outil d'exportation utilisaient des fichiers XML de préréglage JOSM pour définir les sélections d'éléments. La nouvelle version utilise YAML, car elle est plus flexible dans sa façon de transformer les données OSM. Le nouvel outil d'exportation peut toutefois aider à convertir les préréglages JOSM en configurations YAML, en sélectionnant le bouton "Load from JOSM Preset .XML". Veuillez noter que si le préréglage est plus complexe, il peut être nécessaire de l'écrire comme une nouvelle configuration YAML basée sur les éléments "item" contenus dans le XML.

![export-tool-load-preset][]



### Configurations

Les configurations YAML peuvent être définies et sauvegardées pour une utilisation ultérieure via la page "Configs". Il est utile de créer une configuration pour un projet, qui peut ensuite être utilisée pour toutes les exportations liées à ce projet. Donnez à la configuration un "nom" et une "description" qui la rendront accessible aux autres utilisateurs. Si vous décochez la case "Public", la configuration ne sera visible que par l'utilisateur. 

![export-tool-configuration-saved][]


Veuillez noter que les configurations peuvent être modifiées, ce qui est utile pour faire évoluer une sélection de fonctionnalités au cours d'un projet. Les configurations YAML sauvegardées peuvent être sélectionnées via l'option "Configuration stockée" dans l'onglet "3 Données" lors de la création d'une exportation. Utilisez la barre de recherche pour trouver des configurations liées à votre projet.

![export-tool-configuration-stored][]


Pour plus d'informations sur la sélection des fonctionnalités et le langage YAML, veuillez consulter les sections "Sélection des fonctionnalités" et "Spécification YAML" dans la section « [Apprendre](https://export.hotosm.org/en/v3/learn)" du site Web de l'outil. 




[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export-tool]: /images/osm-data/hot-export-tool.png
[export-tool-create]: /images/osm-data/export-tool-create.png
[export-tool-describe]: /images/osm-data/export-tool-describe.png
[export-tool-search]: /images/osm-data/export-tool-search.png
[export-tool-coordinates]: /images/osm-data/export-tool-coordinates.png
[export-tool-area-bbox]: /images/osm-data/export-tool-area-bbox.png
[export-tool-area-draw]: /images/osm-data/export-tool-area-draw.png
[export-tool-area-view]: /images/osm-data/export-tool-area-view.png
[export-tool-area-import1]: /images/osm-data/export-tool-area-import1.png
[export-tool-geojson-io]: /images/osm-data/export-tool-geojson-io.png
[export-tool-geojson-edit1]: /images/osm-data/export-tool-geojson-edit1.png
[export-tool-geojson-edit2]: /images/osm-data/export-tool-geojson-edit2.png
[export-tool-area-import2]: /images/osm-data/export-tool-area-import2.png
[export-tool-file-formats]: /images/osm-data/export-tool-file-formats.png
[export-tool-shapefile]: /images/osm-data/export-tool-shapefile.png
[export-tool-sql]: /images/osm-data/export-tool-sql.png
[export-tool-garmin]: /images/osm-data/export-tool-garmin.jpg
[export-tool-google-earth]: /images/osm-data/export-tool-google-earth.jpg
[export-tool-xml-code]: /images/osm-data/export-tool-xml-code.png
[export-tool-mapsme]: /images/osm-data/export-tool-mapsme.png
[export-tool-osmand]: /images/osm-data/export-tool-osmand.png
[export-tool-mbtiles]: /images/osm-data/export-tool-mbtiles.jpg
[export-tool-treetag-tab]: /images/osm-data/export-tool-treetag-tab.png
[export-tool-yaml-tab]: /images/osm-data/export-tool-yaml-tab.png
[export-tool-treetag-sql]: /images/osm-data/export-tool-treetag-sql.png
[export-tool-treetag-spreadsheet]: /images/osm-data/export-tool-treetag-spreadsheet.png
[export-tool-treetag-yaml]: /images/osm-data/export-tool-treetag-yaml.png
[export-tool-yaml-code1]: /images/osm-data/export-tool-yaml-code1.png
[export-tool-yaml-code2]: /images/osm-data/export-tool-yaml-code2.png
[export-tool-yaml-code3]: /images/osm-data/export-tool-yaml-code3.png
[export-tool-yaml-code4]: /images/osm-data/export-tool-yaml-code4.png
[export-tool-load-preset]: /images/osm-data/export-tool-load-preset.png
[export-tool-configuration-saved]: /images/osm-data/export-tool-configuration-saved.png
[export-tool-configuration-stored]: /images/osm-data/export-tool-configuration-stored.png




