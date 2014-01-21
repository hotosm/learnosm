---
layout: doc
title: Getting OSM Data
permalink: /hr/osm-data/getting-data/
lang: hr
category: osm-data
---

Getting OSM Data
=================
When you want to get the most recent OpenStreetMap data, the easiest way is
to download an extract from a website. There are various web services
that provide data extracts for an area of your choosing.

Downloading Data Extracts
--------------------------
### GeoFabrik
[GeoFabrik](http://geofabrik.de) is a company which specializes in working
with OpenStreetMap. They provide a variety of free extracts in shapefile and raw OSM format
on their [download website](http://download.geofabrik.de). The advantage of downloading
GeoFabrik data is that it is updated every day, and it's easy and reliable. One disadvantage is
that the data is extracted by country, and not all countries are available.

### Metro Extracts
[Another website created by Michal Migurksi](http://metro.teczno.com/) provides shapefiles for
cities around the world. This is useful if you are looking for data extracts for a single city.
The disadvantage to this site is that it is not updated regularly.

>	Remember that features in OpenStreetMap have an unlimited number of "free" tags,
>	but shapefiles have attributes stored in a limited number of columns. This means
>	that when OSM data is converted into shapefiles, only the specified tags will be
>	included in the shapefile table. The websites listed above provide shapefiles
>	with a default set of common tags, but if you want to extract specific tags
>	you will need to use one of the more specialized services in the next section
>	or learn how to export the data yourself.

Customized Extracts
-------------------
### HOT Exports
The [Humanitarian OpenStreetMap Team](http://hotosm.org) has created a service that allows users
to select the area that they want to extract, and also use [JOSM Presets](/en/editing/josm-presets)
to select custom tags to be included in the extract. The service is available to all countries where
HOT works, at [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike
You can select your own area from any part of the world using the service at [http://extract.bbbike.org/](http://extract.bbbike.org/). The only disadvantage is that you aren't able to select customizable tags.

Summary
-------
The services mentioned in this chapter are all that the average user needs to get the OSM
data they want and be able to work with it in GIS software. However, you may want to learn
more powerful ways of working with the data yourself. The remaining chapters in this section are
quite technical, but show more advanced methods of manipulating and accessing OSM data.


[hot exports]: /images/en/osm-data/getting-data/hot-exports.png
