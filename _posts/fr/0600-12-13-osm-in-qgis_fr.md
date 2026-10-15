---
layout: doc
title: Utilisation des données OSM dans QGIS
permalink: /fr/osm-data/osm-in-qgis/
lang: fr
category: osm-data
---

Utilisation des données OSM dans QGIS
=================


QGIS (anciennement Quantum GIS) est un système d'information géographique complet, open-source et multiplateforme. Avec QGIS, vous pouvez accéder à tout moment à des données OSM actualisées, sélectionner les balises que vous souhaitez inclure et les exporter facilement dans une base de données SQLite ou un fichier Shapefile.  

Dans ce chapitre, nous allons parcourir les étapes nécessaires pour y parvenir. Nous supposons que vous avez déjà téléchargé et installé QGIS 3.x. Si vous ne l'avez pas encore fait, vous pouvez le télécharger à partir de <http://www.qgis.org/en/site/forusers/download.html>.  

Nous utiliserons un plugin, QuickOSM, pour importer des données de la base OpenStreetMap. Pour installer ce plugin, ouvrez la boîte de dialogue Manage Plugins dans le menu Plugins. Recherchez QuickOSM et installez-le. Cela ajoutera une entrée au menu Vecteur  

Acquisition de données à partir de la base de données
---------------------------

La première chose que nous allons faire est d'obtenir des données OSM à jour. Nous pouvons le faire de plusieurs façons. Le plugin QuickOSM nous permet d'extraire de grandes quantités de données car il utilise l'api Overpass et non le serveur principal de la base de données OSM.

- Ouvrez QGIS et allez dans Vecteur -> QuickOSM -> QuickOSM...  

![quickosm][]

- Vous pouvez choisir parmi plusieurs options ici - si votre fenêtre affiche déjà l'étendue que vous voulez, passez la combobox qui affiche par défaut " Dans " à " Étendue du canevas ". Si vous avez une couche chargée dans QGIS avec l'étendue correcte, choisissez " Étendue de la couche " et sélectionnez la couche que vous voulez utiliser. L'utilisation de " Dans " par défaut nécessite qu'une relation ou un polygone existe avec ce nom. Sinon, choisissez "Autour" et un nœud portant ce nom suffit. Vous pouvez sélectionner un périmètre (par défaut 1000m) autour de ce nœud où les données seront chargées depuis la base de données.

- Cliquez sur "Exécuter une requête".  
- Vous serez averti lorsque le téléchargement sera terminé. Les données sont stockées dans trois couches temporaires, une pour les nœuds, les voies et les polygones respectivement.

![quickosm loaded][]


Importation des extraits
---------------------------

Il existe plusieurs possibilités pour obtenir des extraits prêts à l'emploi d'une zone. <https://wiki.openstreetmap.org/wiki/Planet.osm#Country_and_area_extracts> contient une liste de plusieurs sites web. Il suffit de choisir un fichier **.osm** ou **.pbf** et de le télécharger. 

Vous pouvez utiliser QuickOSM pour l'importer en cliquant sur 'Fichier OSM' dans la barre de gauche. Une fois que vous avez utilisé QuickOSM, les fichiers OSM devraient être connus de QGIS et vous pouvez utiliser l'importation normale de couches vectorielles :

- Allez dans Couche -> Ajouter une couche -> Ajouter une couche vectorielle...  
- Dans le champ source, sélectionnez votre fichier et cliquez sur "Ajouter".  
- Vous pouvez sélectionner une ou plusieurs couches de type dans ce fichier.  

![import osm][]  

- Après avoir cliqué sur "OK", vous pouvez fermer le dialogue et votre fenêtre QGIS affiche les nouvelles couches.  
  

![import osm loaded][]  


Exportation des données
--------------

Pour exporter une couche, activez son menu contextuel et sélectionnez Exporter -> Enregistrer les caractéristiques sous...
Vous pouvez choisir parmi un large éventail de formats, notamment Shapefile, GeoJSON, dump PostgreSQL, SQLite. Les autres options de la boîte de dialogue varient en fonction du format que vous avez sélectionné.

![export][]  

Vous pouvez choisir de réimporter la couche exportée en cochant la case en bas (activée par défaut).

Travailler avec les données
--------------------

Nous ne pouvons pas vous donner un aperçu même approximatif de ce que vous pouvez faire avec QGIS et il existe de nombreux excellents tutoriels et livres qui vous guideront pas à pas vers la maîtrise du logiciel. Mais comme les données OSM importées par l'une des méthodes décrites ci-dessus ont leurs balises codées d'une manière spéciale, voici un exemple de la façon de les traiter (pour les curieux, l'exemple est pitcairn-islands-latest de la page de téléchargement de Geofabrik pour l'Australie et l'Océanie). Vous pouvez inspecter les données d'une couche vectorielle en utilisant 'Ouvrir la table des attributs' dans le menu contextuel d'une couche, dans ce cas la couche multipolygon.

![attribute table][]

Nous pouvons voir que toutes les paires clé-valeur pour les balises des différents objets sont organisées dans une chaîne de texte spécialement formatée dans le champ 'other_tags'. Ce type de stockage est appelé "hstore" dans une base de données PostgreSQL et constitue le standard pour les données OSM.

Dans cet exemple, les polygones sont principalement des îles, des forêts et des bâtiments. Initialement, ils sont rendus de la même manière, ce qui signifie que les îles couvrent tout le reste. Rendons-les différemment afin d'avoir une idée de la façon d'identifier les différents objets. Jetez la table d'attributs. Dans le menu contextuel de la couche multipolygone, sélectionnez Propriétés et dans ce formulaire, passez à l'onglet Symbologie. 

![symbology][]

Tout d'abord, changez le type de symbole de "symbole unique" à "basé sur des règles" en utilisant la liste déroulante en haut du formulaire. 

![symbology rule based][]

Le rendu actuel apparaît comme une règle sans filtre. Nous pouvons modifier cette règle en cliquant sur l'icône marquée d'un carré violet dans l'image ci-dessus.

![symbology edit rule][]

Nous aimerions traiter les bâtiments différemment. Traiter différemment signifie que les règles doivent être spécifiées en fonction des propriétés des couches. L'évaluation des expressions de QGIS ne peut pas traiter directement les chaînes hstore. Mais un utilitaire vient à notre secours et l'expression de filtre montrée dans l'image `hstore_to_map(other_tags)['building'] is not NULL` convertit la chaîne 'other_tags' en une carte clé-valeur où nous choisissons la valeur de la clé 'building'. La condition stipule que nous recherchons les objets dont la clé "building" n'est pas vide. Nous pouvons définir une couleur et un style de remplissage pour les bâtiments. Cliquez sur "OK" lorsque vous avez terminé la conception de votre règle. Vous pouvez maintenant ajouter d'autres règles en cliquant sur l'icône "plus" en bas de l'onglet "symbologie". Nous ajoutons des règles similaires pour les bois et les prairies. A la fin, notre onglet symbologie ressemblera à ceci :

![symbology polygon rules][]

En prime, nous pouvons obtenir un comptage rapide des éléments pour les règles. Appuyez sur l'icône la plus à droite dans la rangée du bas (le symbole de la somme) et la colonne "nombre" sera remplie pour nous indiquer que nous avons 150 bâtiments sur cette couche.

Vous pouvez ajouter des étiquettes de la même manière que nous avons traité les symboles. L'onglet "Étiquettes" est un autre onglet des propriétés d'une couche, juste en dessous de "Symbologie". Dans la plupart des cas, vous souhaitez imprimer le nom d'une caractéristique. Vous entrez une expression similaire à celles utilisées pour la symbologie dans le champ pour un filtre et comme valeur vous utiliserez `hstore_to_map(other_tags)['name']`. 

![labels][]

En attribuant de telles étiquettes aux couches de multipolygones et de points, vous obtiendrez quelque chose comme ceci :

![done][]


Résumé
-------

Ce processus permet d'obtenir facilement des données OSM à jour et de les transférer dans QGIS. Une fois que vous disposez de telles couches dans QGIS, il est possible de les enregistrer sous forme de fichiers de forme, d'exécuter des filtres et des requêtes, et ainsi de suite. Pour plus de détails sur ces fonctions, consultez le menu Aide de QGIS.  


[quickosm]: /images/osm-data/qgis-quickosm.png
[quickosm loaded]: /images/osm-data/qgis-quickosm-loaded.png
[import osm]: /images/osm-data/qgis-import-osm.png
[import osm loaded]: /images/osm-data/qgis-import-osm-loaded.png
[export]: /images/osm-data/qgis-export.png
[attribute table]: /images/osm-data/qgis-layer-attributes.png
[symbology]: /images/osm-data/qgis-layer-symbology.png
[symbology rule based]: /images/osm-data/qgis-layer-symbology-rule.png
[symbology edit rule]: /images/osm-data/qgis-layer-symbology-edit-rule.png
[symbology polygon rules]: /images/osm-data/qgis-layer-symbology-poly-rules.png
[labels]: /images/osm-data/qgis-layer-labels.png
[done]: /images/osm-data/qgis-complete.png