---
layout: doc
title: Aperçu des données OSM
permalink: /fr/osm-data/data-overview/
lang: fr
category: osm-data
---

Aperçu des données OSM
==================


> Révisé le 5 septembre 2016

<!--Dans cette section, nous examinerons le fonctionnement d'OpenStreetMap, ce qui nous aidera à mieux comprendre comment les données sont structurées et comment nous pouvons les utiliser au mieux.-->

Comment fonctionne OSM
--------------
Considérons le fonctionnement d'OpenStreetMap. Des milliers d'utilisateurs dans le monde entier ajoutent et modifient continuellement la carte, mais que se passe-t-il en coulisses ?  

Lorsque vous ou tout autre utilisateur apportez des modifications à l'aide d'un logiciel d'édition tel que JOSM ou iD, le logiciel communique avec un serveur central d'OpenStreetMap et le notifie de vos modifications. Sur ce serveur se trouve une énorme base de données, qui contient toutes les informations de localisation et les attributs de chaque élément géographique de l'ensemble d'OpenStreetMap.  

Parce que OSM est libre et ouvert, il est possible pour quiconque de télécharger toutes les données de cette base. Cependant, en raison de l'ampleur de la base de données (*les données représentent plus de 30 Go même après compression*), il est pratiquement impossible de travailler avec toutes les données en même temps.  

En raison de cette limitation, il existe plusieurs méthodes d' **exportation** et d' **extraction** de données qui sont couvertes dans cette section. L'exportation consiste à convertir les données OpenStreetMap de leur format d'origine en un format qui vous convient. C'est légèrement différent de l'extraction de données, qui consiste à découper les données dans la zone de votre choix. Il peut également s'agir d'extraire d'une zone les caractéristiques spécifiques que vous souhaitez. Ces termes sont souvent utilisés de manière interchangeable. Nous en apprendrons davantage à ce sujet dans la section Données OSM.  

Utilisation des géodonnées
--------------
Si vous n'êtes pas un utilisateur expérimenté de SIG, il est important de comprendre la différence entre un logiciel d'édition OSM comme JOSM et un logiciel SIG comme Quantum GIS et ArcGIS.  

Les éditeurs tels que iD ou JOSM ont une fonction principale qu'ils maîtrisent parfaitement : faciliter l'édition d'OpenStreetMap par les utilisateurs. Mais ce ne sont pas des logiciels destinés à l'analyse ou à l'interrogation de données -
il est préférable de laisser cette fonction à d'autres applications. Les logiciels SIG, tels que le logiciel libre et gratuit [Quantum GIS (QGIS)] (http://www.qgis.org), permettent aux utilisateurs de concevoir de belles cartes, d'interroger et d'analyser des données, et bien plus encore. Les logiciels SIG peuvent également être utilisés pour modifier les géodonnées, mais il est beaucoup plus facile de modifier OpenStreetMap avec les éditeurs OSM dédiés.  

Dans le prochain chapitre, nous examinerons de plus près les formats de fichiers associés à OpenStreetMap et aux données géographiques en général. Nous examinerons ensuite les différentes manières d'accéder aux données OSM, de les manipuler et de les convertir entre différents types de fichiers.  


Obtention des données
-----------------

C'est génial, mais comment obtenir les données que vous voulez ?  

Dans ce chapitre, nous allons passer en revue les différentes façons d'exporter des données OSM. Nous nous en tiendrons aux principes de base, mais gardez à l'esprit que pour utiliser efficacement ces données, vous aurez probablement besoin d'un logiciel SIG,
comme l'application gratuite Quantum GIS.  

Avant de commencer, revoyons un peu la terminologie. Tout d'abord, **exporter** signifie convertir les données OpenStreetMap de leur format XML natif en un format qui vous convient. C'est légèrement différent de **extraction** de données, qui signifie couper les données de la zone de votre choix. Il peut également s'agir d'extraire d'une zone les caractéristiques spécifiques que vous souhaitez. Nous utiliserons fréquemment ces termes dans ce chapitre, il est donc important de comprendre la différence.  

L'API OSM
------------
Le processus d'édition OSM fonctionne grâce à ce que l'on appelle une API, qui permet au logiciel d'édition de communiquer avec le serveur central. Par exemple, lorsque vous utilisez JOSM et que vous sélectionnez la zone que vous voulez cartographier, un appel API est envoyé au serveur, demandant toutes les données qui existent dans la zone que vous avez sélectionnée.  

En fait, lorsque vous téléchargez des données dans JOSM, vous **extrayez** les données d'une région spécifique du monde. Les données vous sont alors envoyées au format **.osm**, que vous pouvez ensuite modifier dans JOSM. Si vous téléchargez des données dans JOSM et que vous les enregistrez ensuite, vous verrez que le type de fichier est **.osm**. Nous en parlerons davantage dans le prochain chapitre.  
