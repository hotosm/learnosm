---
layout: doc
title: Getting OSM Data
permalink: /en/osm-data/getting-data/
lang: en
category: osm-data
---

Getting OSM Data
=================  

> This guide may be downloaded as [Getting_OSM_Data_en.odt](/files/Getting_OSM_Data_en.odt) or [Getting_OSM_Data_en.pdf](/files/Getting_OSM_Data_en.pdf)  
> Reviewed 2016-04-05

When you want to get the most recent OpenStreetMap data, the easiest way is to download an extract from a website. There are various web services that provide data extracts for an area of your choosing.  

Downloading Data Extracts
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) is a company which specializes in working with OpenStreetMap. They provide a variety of free extracts in shapefile and raw OSM format on their [download website](http://download.geofabrik.de). The advantage of downloading GeoFabrik data is that it is updated every day, and it's easy and reliable. One disadvantage is that the data is extracted by country, and not all countries are available.  

### Metro Extracts

[Another website maintained by Mapzen](https://mapzen.com/data/metro-extracts/) provides shapefiles and raw OSM format for cities around the world, extracted weekly. This is useful if you are looking for data extracts for a single city.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) offers something similar as Metro Extracts but for a different selection of cities. The data is updated weekly as well.

>Remember that features in OpenStreetMap have an unlimited number of "free" tags,
>but shapefiles have attributes stored in a limited number of columns. This means
>that when OSM data is converted into shapefiles, only the specified tags will be
>included in the shapefile table. The websites listed above provide shapefiles
>with a default set of common tags, but if you want to extract specific tags
>you will need to use one of the more specialized services in the next section
>or learn how to export the data yourself.

Customized Extracts
-------------------

### HOT Exports  

The [Humanitarian OpenStreetMap Team](http://hotosm.org) has created a service that allows users to select the area that they want to extract, and also use [JOSM Presets](/en/josm/josm-presets/)
to select custom tags to be included in the extract. The service is available to all countries where HOT works, at [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike  

You can select your own area from any part of the world using the service at [http://extract.bbbike.org/](http://extract.bbbike.org/). Disadvantages are that you aren't able to select customizable tags and that the amount of data which you can download is limited.  

### Overpass

Overpass is an API (Application Programming Interface) for extracting data from a read-only copy of the main OpenStreetMap database which can deliver an almost arbitrary amount of data. Using a query language you can customize which subset of the data you obtain. You can either use the API directly by generating a http-request or through the overpass turbo interface.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) is an interactive query generator where you should first zoom to the appropriate region on the map. Enter your query in the left field of the page and trigger any actions using the buttons at the top of the interface. If you are new to the query language then using the wizard should get you started. The OSM wiki contains a [full description](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) of the syntax of the query language as well as a [collection of examples](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

The map will highlight all data selected by your query which you can then modify. Press "Run" to refresh the result display. Once you are satisfied with what you see then "Export" offers a number of choices, among them raw OSM data. If the amount of data is limited you may as well access them directly after switching between map view and data view using the rightmost buttons at the top. The export option *Query -> compact OverpassQL* generates a hyperlink to be used for the Overpass API.

![overpass turbo][]

If you want to engineer a fancy query in order to obtain a subset of the data from a large area then it is a good idea to test and improve this query in Overpass Turbo on a small area. You can then zoom out to your complete region of interest and use the resulting query url directly for the API. The next section explains how you can do this.

#### Overpass API

[Overpass API](http://wiki.openstreetmap.org/wiki/Overpass_API) is a dedicated service optimized for querying but not writing OpenStreetMap data. Due to this optimization it operates very fast compared to the main database api and has virtually no limits on the amount of data transferred. Several instances of this service are available on the net, the one used in the following example also provides some information on [its homepage](http://overpass-api.de/)

If you have a working query-URL for submitting an http-request to the Overpass API then a tool such as [wget](https://www.gnu.org/software/wget/) - available for different operating systems, see [here](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - allows you to download the raw OSM data directly from the server and store them locally. The following snippet is a script for the bash shell common on Unix systems which obtains all data within a specified bounding box:

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
>What happens here (for the curious who do not want to read the full query language documentation)?  
>node(...) selects all nodes within a bounding box;  
>< recurses up fully, i.e. selects all ways containing these nodes and all relations containing these nodes and ways;  
>rel(br) selects all parent relations of relations obtained so far (otherwise master relations would not be obtained)
>



Summary
-------  

The services mentioned in this chapter are all that the average user needs to get the OSM data they want and be able to work with it in GIS software. However, you may want to learn more powerful ways of working with the data yourself. The remaining chapters in this section are quite technical, but show more advanced methods of manipulating and accessing OSM data.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png
