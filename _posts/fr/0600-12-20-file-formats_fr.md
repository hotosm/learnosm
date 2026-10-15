---
layout: doc
title: Formats de fichiers
permalink: /fr/osm-data/file-formats/
lang: fr
category: osm-data
---

Formats de fichiers
=============

> Révisé le 5 septembre 2016

Comme tout type de données, il existe plusieurs façons de stocker des données géographiques sur un ordinateur. Elles peuvent être sauvegardées dans une base de données, qui est un système spécialisé de stockage et d'extraction de données, et il existe en fait des systèmes de base de données spécifiquement conçus pour stocker des données géographiques. Elles peuvent également être stockées dans des fichiers informatiques traditionnels, bien qu'il existe de nombreux formats de fichiers différents pour les données géographiques.  

Dans cette section, nous allons passer en revue quelques méthodes de stockage des données géographiques, expliquer comment elles fonctionnent et comment elles sont généralement utilisées.  

Fichiers .OSM
-----------

Le format de fichier **.osm** est spécifique à OpenStreetMap. Vous ne le rencontrerez pas ailleurs. Si vous avez déjà téléchargé des données à l'aide de JOSM et les avez enregistrées sous forme de fichier, vous avez peut-être remarqué que le fichier est enregistré avec l'extension **.osm**. Si vous êtes un utilisateur de SIG, vous avez peut-être aussi remarqué qu'il n'est pas facile d'ouvrir ces fichiers à l'aide d'un logiciel tel que QGIS.  

Alors pourquoi les données OSM sont-elles stockées dans un format de fichier que personne d'autre n'utilise ? La réponse est que de nombreux formats de données géographiques sont antérieurs à l'ère moderne de l'Internet et sont conçus pour un accès rapide et une interrogation comme on le ferait pour une base de données. Les données OSM, en revanche, sont conçues pour être facilement envoyées et reçues sur Internet dans un format standard. Les fichiers **.osm** sont donc codés en XML et contiennent des données géographiques dans un format structuré et ordonné. Un simple fichier **.osm** ressemblerait à ceci s'il était visualisé dans un éditeur de texte :  

![Sample OSM XML file][]

Acquérir des données au format **.osm** est facile - en fait, vous le faites chaque fois que vous téléchargez des données dans le JOSM, mais utiliser ces fichiers pour l'analyse et la conception de cartes n'est pas facile. Il est donc préférable de convertir les données dans un autre format, ou de les obtenir auprès d'un service qui les convertit pour vous.  

> Les données brutes OSM sont généralement stockées dans des fichiers **.osm**, mais vous pouvez également voir des fichiers se terminant par **.bz2** et **.pbf**. Il s'agit essentiellement de fichiers **.osm** qui ont été compressés pour gagner de l'espace, ce qui peut être extrêmement utile lorsque vous travaillez avec des fichiers de données volumineux.  

Fichiers Shapefiles
----------

Le **shapefile** est un format largement utilisé pour stocker des données géographiques vectorielles. Il a été développé par ESRI, la société qui produit ArcGIS, une suite populaire d'applications SIG.  

Les fichiers de forme sont en fait une collection de plusieurs fichiers différents. Par exemple, un fichier de forme qui contient des données sur les bâtiments peut contenir des fichiers avec les extensions suivantes :  

-	bâtiments.**shp**
-	bâtiments.**shx**
-	bâtiments.**dbf**

Les fichiers Shapefiles sont souvent accompagnés de fichiers supplémentaires qui contiennent d'autres informations.  

Un fichier de forme doit être désigné pour contenir un seul type de caractéristique (points, lignes ou polygones), et chaque caractéristique a ses attributs contenus dans une table. Contrairement au système OpenStreetMap dans lequel chaque objet peut avoir un nombre illimité d'étiquettes, les attributs des caractéristiques dans un fichier de forme doivent s'adapter à la structure de la table définie du fichier de forme, qui peut ressembler à ceci :  

![Shapefile attributes][]

Les données OpenStreetMap peuvent être converties en fichiers de forme. Plusieurs sites Web fournissent des fichiers de forme convertis à partir de données OSM. Ces questions sont abordées dans le [prochain chapitre](/fr/osm-data/getting-data).  

Bases de données
---------

De nombreux types d'informations sont stockés dans des systèmes de bases de données, qui offrent un moyen logique d'organiser les données et d'y accéder. Les données géographiques ne sont pas différentes, bien que les bases de données conçues pour les géodonnées soient spécialisées pour gérer les fonctions complexes que requiert l'interrogation des données géographiques.  

Les données OpenStreetMap sont souvent stockées dans une base de données PostgreSQL avec des extensions PostGIS. Ce type de base de données permet un accès rapide aux données et peut être utilisé facilement avec Mapnik, un logiciel qui crée les dalles cartographiques utilisées dans les cartes glissantes du Web. Il existe plusieurs outils permettant d'importer des données OSM brutes dans une base de données PostgreSQL.  

Un autre type de base de données est connu sous le nom de SQLite, qui offre des fonctionnalités similaires à celles d'une base de données PostgreSQL, mais tout est stocké dans un seul fichier et ne nécessite pas l'utilisation d'un logiciel de base de données. Ces bases sont un peu plus difficiles à créer soi-même, mais peuvent être plus faciles à utiliser pour de petits ensembles de données.  

Résumé
-------

Dans les chapitres suivants, nous verrons comment vous pouvez télécharger des données dans différents formats sur Internet et comment vous pouvez utiliser différents outils pour manipuler les données brutes par vous-même.  


[Sample OSM XML file]: /images/osm-data/example_osm.png
[Shapefile attributes]: /images/osm-data/shapefile_attributes.png