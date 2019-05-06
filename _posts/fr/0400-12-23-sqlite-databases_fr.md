---
layout: doc
title: Bases de Données SQLite
permalink: /fr/advanced/sqlite-databases/
lang: fr
category: advanced
otherguides: "Les autres niveaux"
---

Bases de Données SQLite
==========================

Introduction
------------

SQLite est un moteur de base de données simple qui offre les mêmes
fonctionnalités de base de données que PostgreSQL sans avoir besoin
d’installer ce logiciel complexe et l'installation d'un serveur de base
de données. Facile d’usage, SQLite est bien adapté pour les petits
projets et les projets personnels. Dans ce chapitre, nous allons jeter
un bref coup d'œil sur SQLite, comment nous pouvons l'utiliser dans
QGIS, et comment il peut être utilisé comme source de données dans
TileMill.

1. Qu'est-ce que SQLite ? Qu'est ce que SpatiaLite ?
----------------------------------------------------

SQLite est un système de gestion de base de données relationnelle, comme
PostgreSQL dont il diffère par la regroupement en un seul fichier de
toutes les tables stockées dans la base de données. Ces bases de données
sont donc facilement portables d'un ordinateur à un autre. La base de
données se comporte presque exactement de la même manière qu’une base de
données MySQL ou PostgreSQL ; le langage de requête - SQL - restant,
bien sûr, le même.

SpatiaLite est l’extension spatiale de SQLite à laquelle elle ajoute
donc des fonctionnalités géographiques de pointe imitant en cela PostGIS
et PostgreSQL.

Nous n'aurons pas besoin de faire appel aux fonctionnalités ajoutées de
SpatiaLite dans ce chapitre. Nous nous contenterons des fonctionnalités
géographiques de base de SQLite pour accéder à des données OSM stockées
dans ce type de base de données avec des outils comme QGIS et TileMill.

2. Obtenir un fichier SQLite / Base de données
----------------------------------------------

-   Téléchargeons une base de données SQLite contenant des données OSM
    sur le site
    [hot-export.geofabrik.de](http://hot-export.geofabrik.de)
-   Choisissez un projet (“Job”) où vous pourrez télécharger un exemple
    de base de données SQLite. Dans cet exemple, nous allons travailler
    avec un export de données centré sur Jakarta -
    [http://export.hotosm.org/fr/jobs/1376](http://export.hotosm.org/fr/jobs/1376).
-   Regardons la liste des fichiers disponibles en téléchargement sur le
    serveur d'exports HOT :

![image](/images/fr/0400-12-23-sqlite-databases/image10.png)

-   Cliquez sur le lien "SQLite file" pour commencer le téléchargement
    de notre fichier de base de données SQLite, nommé extract.sqlite. Ce
    faisant, vous remarquerez à quel point il est pratique d'avoir notre
    base de données stockée dans un seul fichier.
-   Cet extrait de SQLite est d'environ 40 Mo, donc si vous avez une
    connexion lente, vous voudrez peut-être obtenir une base de données
    plus petites à partir d’une tâche dont l’extension spatiale est plus
    réduide.

3. SQLite dans QGIS
-------------------

Ouvrons maintenant notre base de données SQLite dans QGIS.

-   Pour ajouter la base de données Spatialite dans QGIS, cliquez sur le
    bouton ci-dessous :

![image](/images/fr/0400-12-23-sqlite-databases/image08.png)

-   La commande "Add SpatiaLite Layer" permet à QGIS d’ouvrir les deux
    types de base de données : SpatiaLite et SQLite.

-   Cliquez sur "Nouveau" et accédez à votre fichier extract.sqlite

![image](/images/fr/0400-12-23-sqlite-databases/image03.png)

-   Ensuite, cliquez sur "Connect".

-   A l’image d’une base PostGIS (voir le chapitre qui y est consacré),
    votre base de données est composée de quatre tables : 1. points, 2.
    lignes, 3. polygones, et 4. une table de ligne supplémentaire
    uniquement pour les routes.

![image](/images/fr/0400-12-23-sqlite-databases/image09.png)

-   Vous pouvez sélectionner une table (ou plusieurs tables) et cliquez
    sur "Ajouter" pour les ajouter en tant que couches dans QGIS ou vous
    pouvez sélectionner une table et cliquer sur "Créer la requête" pour
    interroger un type spécifique de données de la table.
-   Sélectionnez la table de planet\_osm\_polygon et cliquez sur "Créer
    la requête" pour ouvrir le générateur de requêtes.
-   Sélectionnez building sous le panneau champs, puis cliquez sur
    "Tous" dans les valeurs.

![image](/images/fr/0400-12-23-sqlite-databases/image01.png)

-   Cela affichera la liste de toutes les valeurs possibles de la
    colonne building de la table de planet\_osm\_polygon. Ces valeurs
    correspondent à building =\* dans OpenStreetMap.
-   Nous voulons sélectionner tous les polygones où building = yes. Pour
    cela, double-cliquez d’abord sur building pour l'ajouter à la
    requête, puis cliquez sur le bouton "=" et enfin, double-cliquez
    “yes” dans la liste des Valeurs. La syntaxe SQL de votre requête
    devrait ressembler à ceci :

![image](/images/fr/0400-12-23-sqlite-databases/image07.png)

-   Cliquez sur «OK», puis cliquez sur "Ajouter" pour ajouter une couche
    à votre projet QGIS, montrant tous les bâtiments à Jakarta, ou
    ailleurs si vous utilisez une base de données différente.

![image](/images/fr/0400-12-23-sqlite-databases/image00.png)

4. SQLite dans TileMill
-----------------------

Nous allons maintenant utiliser de la donnée OSM dans une base SQLite
avec l’application de cartographie TileMill (voir le chapitre consacré à
TileMill).

-   Ouvrez TileMill et créez un nouveau projet ou utilisez un projet
    existant.

![image](/images/fr/0400-12-23-sqlite-databases/image06.png)

-   Allez sur le bouton Calques et cliquez sur "Ajouter une couche".

![image](/images/fr/0400-12-23-sqlite-databases/image05.png)

-   Cliquez sur le bouton de SQLite en haut de la fenêtre. Entrez
    building pour ID. Dans la liste déroulante à côté de "Datasource",
    localisez votre fichier de base de données SQLite.
-   Nous allons ajouter une requête pour renvoyer uniquement les
    polygones portant l’attribut building = yes. Nous ne couvrirons pas
    les détails de la syntaxe SQL, mais simplement copier et coller le
    texte suivant dans la section "Table or Sub-Query" (tableau ou
    sous-requête).

(SELECT OGC\_FID, GEOMETRY, building AS type

FROM planet\_osm\_polygon

WHERE building = 'yes'

ORDER BY way\_area DESC

) AS data

-   Le SRS devrait être 900913 pour les fichiers SQLite à partir du
    serveur d'exportation HOT. Il correspond à une projection Mercator
    adaptée aux rendus web de cartes couvrant le monde entier.
-   La fenêtre devrait ressembler à ceci :

![image](/images/fr/0400-12-23-sqlite-databases/image11.png)

-   Cliquez sur “Save & Style”.
-   Dans l’onglet Calques, zoomez sur la couche des bâtiments.
-   Dans l’onglet Calques, cliquez sur la loupe située à côté de la
    couche “buildings”. Ceci devrait zoomer la carte sur la couche et
    vous montrer les bâtiments, représentés selon un style fourni par
    TileMill.

![image](/images/fr/0400-12-23-sqlite-databases/image04.png)

Résumé
------

Ce chapitre présente les bases de données SQLite, disponibles en
téléchargement via le service HOT Export, faciles d’usage, compactes et
aisément portables d’une machine à l’autre, elles offrent une solution
simple et efficace pour l’accès aux données OSM à travers des
applications de SIG et de cartographie comme QGIS et TileMill.

* * * * *

Annexe
------

Le plus grand défi pour l’utilisation de SQLite est d'apprendre le
rudiments de syntaxe de requêtes SQL pour interroger la base de données.
Voici quelques outils qui vous aideront à commencer :

### Guide de requêtes SQL simples

Ce guide couvre les requêtes SQL simples que vous devez connaître pour
utiliser TileMill. Elles ressemblent à des requêtes de PostGIS ;
cependant, SQLite nécessite l’utilisation des champs "OGC\_FID,
GEOMETRY" dans TileMill.
[http://designtopx.files.wordpress.com/2009/11/sqlcheatcheet.pdf](http://designtopx.files.wordpress.com/2009/11/sqlcheatcheet.pdf)

### SQLite Browser / Navigateur SQLite

[http://sourceforge.net/projects/sqlitebrowser/](http://sourceforge.net/projects/sqlitebrowser/)

Cette application vous permet d'ouvrir un fichier de base de données
sqlite, de parcourir la structure de la table, et d'effectuer des
modifications. C'est un moyen gratuit et facile pour regarder une
structure de base de données.

### Modèle de projet TileMill utilisant SQLite

[https://github.com/hotosm/tilemill-projects-windows](https://github.com/hotosm/tilemill-projects-windows)

Ce dépôt sur GitHub contient des Projets HOT pour TileMill sur Windows.
Vous pouvez copier et ajouter le répertoire OSM-sqlite à vos projets de
TileMill. Ce projet TileMill a quelques styles de base ainsi que de
nombreuses couches déjà ajoutées avec des requêtes SQL fonctionnelles
sur la base de données. Il suffit de remplacer le fichier extract.sqlite
avec votre propre fichier, et vous serez opérationnel avec SQLite sur
TileMill.


