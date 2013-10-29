---
layout: doc
title: OverPass API
permalink: /en/osm-data/overpass-api/
lang: en
category: osm-data
---

OverPass API
==============
OpenStreetMap is a massive database of geographic data, and it's all open and free. That's
great, but how do you get out the data that you want?

In this chapter we'll go over the various ways of exporting OSM data. We'll stick to the basics,
but keep in mind that in order to use the data effectively, you'll probably need GIS software,
such as the free Quantum GIS application.

Before we begin, let's go over some terminology. First, **exporting** means to convert OpenStreetMap data from its native XML format into a format that is convenient for you. This is slightly different from **extracting** data, which means to cut the data from the area of your choosing.  It may also mean to pull out the specific features that you want from an area. We'll use these terms frequently in this chapter, so it's important to understand the difference.

Data Types
-----------
There are various ways in which geographic data can be stored. We usually think about OSM
data being stored in one of three formats:

-	**.osm** – This is the standard form of OpenStreetMap data, which is an XML format.  It is very useful for transmitting over the internet and processing on the web, but is not traditionally used in GIS applications. Getting data
in *.osm* format is easy, but to use in a GIS you likely will need to convert it to another format.

-	**shapefiles (.shp)** – The Shapefile is a format that was created by ESRI, the company that makes ArcGIS, a popular suite of GIS applications. Shapefiles are actually a collection of several different files that store a specific type of geographic data. A shapefile must be designated to hold only one type of data (points, lines, or polygons), and each feature (object) has it's attributes contained in a table. Shapefiles are widely used in GIS applications. OSM files can be converted into Shapefiles.

-	**database** – Also commonly used in GIS applications are various types of geodatabase. There are different types of databases with slightly different ways of storing data. One database commonly used with OSM data is a PostGIS database, which requires database software to run on a computer. A second, simpler option are SQLite databases, which are contained all within one file, but behave the same as other database systems. OSM data can be converted into SQLite files, and it can be imported into an existing PostGIS database.


Downloading Data Extracts
--------------------------
Most consumers of OSM data simply want to download the data they want in a format
compatible with their GIS software. In this case, there are several websites which
make it easy to access OpenStreetMap data.

### GeoFabrik
[GeoFabrik](http://geofabrik.de) is a company which specializes in working
with OpenStreetMap. They provide a variety of free extracts in shapefile and raw OSM format
on their [download website](http://download.geofabrik.de). The advantage of downloading
GeoFabrik data is that it is updated every day, and it's easy and reliable. One disadvantage
is that you cannot add specific tags to be extracted to your shapefile, so if you are using
any custom tags they will not be exported. Another disadvantage is that the data is extracted
by country, and not all countries are available.

### Metro Extracts
[Another website created by Michal Migurksi](http://metro.teczno.com/) provides shapefiles for
cities around the world. This is useful if you are looking for data extracts for a single city.
The disadvantage to this site is that it is not updated regularly.

### HOT Exports
The [Humanitarian OpenStreetMap Team](http://hotosm.org) has created a service that allows users
to select the area that they want to extract, and also use [JOSM Presets](/en/editing/josm-presets)
to select custom tags to be included in the extract. The service is available to all countries where
HOT works. [export.hotosm.org](http://export.hotosm.org)

Extract
Import
Manipulate

Importing Data
---------------
All of the extract sites mentioned above also allow you to download raw OSM data, because the
services themselves begin with OSM files and run specific applications to convert them into
Shapefiles and other formats. You will find OSM data for download in several formats. The basic
file type is *.osm*, but these files can be very large, so usually they are compressed into either
*.osm.bz2* or *.osm.pbf* format. The advantage of raw OSM data is that it is complete, and you
know that all attributes are contained in the data. Learning how to work with OSM files, however,
can take some time.

If you are comfortable with geographic database systems, you can import raw OSM data into a
local geodatabase. This is most commonly done when you want to render your own web maps, or host
a database service for another reason. There are several tools for importing OSM data into Postgresql/PostGIS:

### osm2pgsql
Useful for loading OSM data into a PostGIS database, particularly for rendering with the map renderer Mapnik.  No need for configuration, and its available for Windows, although the Windows version often contains bugs.  osm2pgsql can easily keep your database up-to-date with the most recent data.
http://wiki.openstreetmap.org/wiki/Osm2pgsql

### imposm
Another importer for PostGIS, imposm is newer, faster, and smaller.  The drawbacks are that you can’t keep your database up-to-date without reloading the entire dataset, which can take some time.  imposm requires more configuration than osm2pgsql, which is helpful once you know exactly what you’re doing, but can take longer to get started.
http://imposm.org

Manipulating Data
-----------------

4)  Osmosis
Not exactly an export tool, osmosis is a very powerful command-line tool for processing raw OpenStreetMap data.  You can extract data you want, merge data together, and many other tasks.  Osmosis can be used to import data into a database much like osm2pgsql and imposm, but it is included separately because it provides many other functions.

Advantages:  Incredibly powerful tool for manipulating OSM XML data.  Can be used to process and select data that you are interested.

Disadvantages:  Doesn’t export to other formats.  Mainly useful for programmers who want to get deep into OSM.

5)  Converting to Shapefile
There are various tools that convert OSM data into shapefiles, each with its own pros and cons.  They all work via the command-line, so are best suited for those with a technical background.  Some of the tools are:
osm2shp
C++ application for converting OSM to shapefile.
http://trac.openstreetmap.org/browser/applications/utils/export/osm2shp
osmlib
Ruby library for converting to OSM.  Hasn’t been maintained in a long time but still is functional.  Not good with very large datasets.  Easy to configure.
http://wiki.openstreetmap.org/wiki/OSMLib
ogr2ogr
This library has recently added support for OSM, and can convert to all common geographic data formats.
http://www.gdal.org/ogr/drv_osm.html

