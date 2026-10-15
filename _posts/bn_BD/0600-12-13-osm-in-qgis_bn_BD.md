---
layout: doc
title: Using OSM Data in QGIS
permalink: /bn_BD/osm-data/osm-in-qgis/
lang: bn_BD
category: osm-data
---

Using OSM Data in QGIS
=================


QGIS (formerly Quantum GIS) is a full-featured, open-source, cross-platform Geographic Information System. With QGIS you can access up-to-date OSM data whenever you want, select the tags you want to include, and easily export it into an easy-to-use SQLite database or Shapefile.  

In this chapter we'll walk through the steps necessary to do this. We assume that you've already downloaded and installed QGIS 3.x. If you haven't already done this, you can download it from <http://www.qgis.org/en/site/forusers/download.html>.  

We will use a plugin, QuickOSM, to import data from the OpenStreetMap database. To install this plugin open the Manage Plugins dialogue from the Plugins menu. Search for QuickOSM and install it. This will add an entry to the Vector menu  

Obtaining Data from the Database
-----------------------------

The first thing we will do is get some up-to-date OSM data. We can do this in numerous ways. The QuickOSM plugin allows us to extract large amounts of data as it uses the Overpass api and not the main OSM database server.

- Open QGIS and go to Vector -> QuickOSM -> QuickOSM...  

![quickosm][]

- You can choose from several options here  - if your window already displays the extent you want, switch the combobox which by default shows "In" to "Canvas extent". If you have a layer loaded in QGIS with the correct extent, choose "Layer extent" and select the layer you want to use. Using the default "In" requires that a relation or polygon exists with this name. Otherwise choose "Around" and a node with this name suffices. You can select a perimeter (default 1000m) around this node where data will be loaded from the database.

- Click on "Run Query".  
- You will be notified when the download is complete. The data are stored in three temporary layers, one for nodes, ways and polygons respectively.

![quickosm loaded][]


Importing extracts
-----------------------------

There are several options how to obtain ready-made extracts of an area. <https://wiki.openstreetmap.org/wiki/Planet.osm#Country_and_area_extracts> contains a list of several websites. Just pick a **.osm** or **.pbf** file and download it. 

You can either use QuickOSM to import it clicking on 'OSM File' in the left bar. Once you used QuickOSM OSM files should have been made known to QGIS and you can use the regular vector layer import:

- Go to Layer -> Add Layer -> Add Vector Layer...  
- In the source field, select your file and click "Add".  
- You can select one or more type layers from that file.  

![import osm][]  

- After clicking "OK" you can close the dialogue and your QGIS window shows the new layers.  
  

![import osm loaded][]  


Exporting data
--------------

To export a layer activate its context menu and select Export -> Save Features as...
You can select from a wide range of formats including Shapefile, GeoJSON, PostgreSQL dump, SQLite. The other options on the dialogue vary depending on the format you selected.

![export][]  

You can choose to re-import the exported layer by checking the box at the bottom (activated by default).

Working with the Data
--------------------

We cannot give you even a rough overview over what you can do with QGIS and there are many excellent tutorials and books which will guide you step-by-step towards mastering the software. But as OSM data imported by one of the methods described above have their tags encoded in a special way here is an example how to deal with them (for the curious, the example is pitcairn-islands-latest from Geofabrik's download page for Australia and Oceania). You can inspect the data of a vector layer using 'Open Attribute table' from the context menu of a layer, in this case the multipolygon layer.

![attribute table][]

We can see that all the key-value-pairs for the tags of the various objects are organized in a specially formatted text string in the field 'other_tags'. This kind of storage is called "hstore" in a PostgreSQL database and is the standard for OSM data.

In this example polygons are mostly islands, forest and buildings. Initially they are rendered in the same way which means that islands cover everything else. Let us render them differently in order to get a feeling how to identify different objects. Discard the attribute table.  From the context menu of the multipolygon layer select Properties and on that form move to the Symbology tab. 

![symbology][]

First change the type of the symbol from "Single symbol" to "Rule based" using the combobox at the top of the form. 

![symbology rule based][]

The current rendering appears as a rule with no filters. We can modify this rule by clicking on the icon marked with a purple square in the image above.

![symbology edit rule][]

We'd like to treat buildings differently. Treat differently means that rules need to be specified according to layer properties. QGIS' expression evaluation cannot directly deal with hstore strings. But a utility comes to our rescue and the filter expression shown in the image `hstore_to_map(other_tags)['building'] is not NULL` converts the 'other_tags' string into a key-value-map where we pick the value for the key 'building'. The condition reads that we look for objects whose building key is not empty. We can define a colour and fill style for the buildings. Click 'OK' when you are finished with your rule design. Now you can add further rules by clicking on the 'plus' icon at the bottom of the symbology tab. We add similar rules for woods and grassland. At the end our symbology tab will look like this:

![symbology polygon rules][]

As an added bonus we can get a quick feature count for the rules. Press the rightmost icon in the row at the bottom (the sum symbol) and the 'count' column will be populated telling us that we have 150 buildings on this layer.

You can add labels in a similar fashion how we dealt with symbols. 'Labels' is another tab on the properties of a layer, right below Symbology. In most cases you want to print the given name of a feature. You enter an expression similar to the ones used for symbology in the field for a filter and as value you would use `hstore_to_map(other_tags)['name']`. 

![labels][]

Assigning such labels to the multipolygon and the point layers you will end up with something like this:

![done][]


Summary
-------

This process makes it easy to get up-to-date OSM data and pull it into QGIS. Once you have layers like this in QGIS, it is possible to save them as shapefiles, execute filters and queries, and so forth. For more detail on these functions see the Help menu in QGIS.  


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