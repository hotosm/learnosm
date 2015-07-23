---
layout: doc
title: Using OSM Data in QGIS
permalink: /en/osm-data/osm-in-qgis/
lang: en
category: osm-data
---

Using OSM Data in QGIS
=================

> This guide may be downloaded as [Using_OSM_data_in_QGIS_en.odt](/files/Using_OSM_data_in_QGIS_en.odt) or [Using_OSM_data_in_QGIS_en.pdf](/files/Using_OSM_data_in_QGIS_en.pdf)  
> Reviewed 2015-07-19

QGIS (formerly Quantum GIS) is a full-featured, open-source, cross-platform Geographic Information System. With QGIS you can access up-to-date OSM data whenever you want, select the tags you want to include, and easily export it into an easy-to-use SQLite database or Shapefile.

In this chapter we'll walk through the steps necessary to do this. We assume that you've already downloaded and installed QGIS 2.x. If you haven't already done this, you can download it from <http://www.qgis.org/en/site/forusers/download.html>.

To get our customized, up-to-date OSM layers loaded into QGIS, we will first get the most recent OSM data in raw **.osm** format. Then, we will convert this data into a SQLite database, which is a lightweight database system stored in one file on your system. Lastly, we will create a layer (or multiple layers) that includes only the feature types and tags we want to access. These layers can be used in QGIS as they are or saved in another format, such as a shapefile.

Accessing OpenStreetMap Data
---------------------------

The first thing we will do is get some up-to-date OSM data. We can do this in numerous ways.
Of course, requesting data from the OSM server, as we do in the JOSM editor, is limited so that we cannot pull
out a very large amount of raw data at once - however, there are ways to access larger data sets, as
described in the previous chapters on [Getting OSM Data](/en/osm-data/getting-data) and [Using Geofabrik and HOT Export](/en/osm-data/geofabrik-and-hot-export).

For this tutorial we will use the built-in download function in QGIS.

-	Open QGIS and go to Vector -> OpenStreetMap -> Download Data...
-	You can choose from several options here - if your window is already displaying the extent
	you want, check the box next to "From map canvas." If you have a layer loaded in QGIS with the correct
	extent, choose "From layer" and select the layer you want to use. Here we will choose "Manual"
	and enter the latitudes and longitudes which form a **bounding box** around the area we
	want to access. You can fill in the lats and lons that are of interest to you, but remember
	that the area cannot be too large, or you won't be able to download all the data.

![bounding box][]

-	Select a name and location for the output file, using the **.osm** file extension, and click OK.
-	You will be notified when the download is complete. Click "Close" to exit the download
	dialog.

![download complete][]

-	The OSM data will now be saved in the location you specified.

>	This method of accessing OSM data is the same as if you downloaded it in JOSM or on
>	[openstreetmap.org](http://www.openstreetmap.org). For larger extracts that are up-to-date,
>	you may try downloading from the [HOT export site](http://export.hotosm.org) or
>	[bbbike.org](http://extract.bbbike.org/). Remember that if you download a compressed OSM file,
>	you will need to first decompress it into **.osm** format for the next steps.

Importing Data into SQLite
---------------------------

Next we will need to import our raw **.osm** file into a SQLite Database file.

-	Go to Vector -> OpenStreetMap -> Import Topology from XML...
-	In the first field, select your **.osm** file.
-	You can change the name of the output database file if you like.
-	Keep the box checked next to "Create Connection..."

![import dialog][]

-	Click OK.
-	When it is finished, click "Close."

Creating Layers
--------------

Lastly, we will define layers that can be used in QGIS, customized according to our needs.

-	Go to Vector -> OpenStreetMap -> Export Topology to SpatiaLite...
-	In the first field, select the database you created in the previous step.

![input db file][]

-	Under "Export type," select the type of features you want to create a layer for. Here
	we will create a layer using polygons.

![export type][]

-	Edit the layer name if you like.

Under "Exported tags" is where the magic happens. Here we can select which tags will be
included in our output layer. This gives us flexibility over exactly which data we want to
access.

-	Click "Load from DB" to see a list of all the available tags in the database. Expand the window size by dragging the corner if that helps. You can see
	all the tags contained in this data, and also the number of features that have each tag.
-	Check the boxes next to the tags that you want to include. Here we will select a few features
	that will be useful for polygons that represent buildings.

![export full][]

-	When you are finished, click OK.
-	Close the box. Your layer should be automatically added.

![cairo polygons][]

-	Right-click on the layer and click "Open Attribute Table."

![open attribute table][]

-	You can see here that we have a table which includes only the attributes we selected.

![attribute table][]

Note that we have not created a layer of **only** buildings. Instead, we have created a layer
that includes all of the polygons from our original data, but only includes the tags which we
selected. In order to filter this layer to show only buildings, we would need to execute a query
that filters only polygons where building=yes.

Summary
-------

This process makes it easy to get up-to-date OSM data and pull it into QGIS. Once you have
layers like this in QGIS, it is possible to save them as shapefiles, execute filters and queries,
and so forth. For more detail on these functions see the Help menu in QGIS.


[bounding box]: /images/osm-data/bounding_box.png
[download complete]: /images/osm-data/download_complete.png
[import dialog]: /images/osm-data/import_dialog.png
[input db file]: /images/osm-data/input_db_file.png
[export type]: /images/osm-data/export_type.png
[export full]: /images/osm-data/export_full.png
[cairo polygons]: /images/osm-data/cairo_polygons.png
[open attribute table]: /images/osm-data/open_attribute_table.png
[attribute table]: /images/osm-data/attribute_table.png

