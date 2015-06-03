---
layout: doc
title: Converting to Shapefile
permalink: /ja/osm-data/converting-to-shapefile/
lang: ja
category: osm-data
---

Converting to Shapefile
=======================



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

