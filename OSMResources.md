Useful OSM Links
================

![screenshot] (https://raw.github.com/MappingKat/hot-indo/master/jakarta.png)

INDEX
------
Introduction and Basics  
Data Collection	
Quality Assurance
Presets and Tagging Conventions
Tasking Manager
Downloading/Extracting Data
Data Servers: PostGIS and Mapnik Configuration	
Printing and Displaying OSM Maps
QGIS
Community Support and Resources	
Other Useful Web-Based Tools





Introduction and Basics  
-----------------------

###*The OSM homepage... ###
You can [sign up], log-in and edit with Potlatch at the [OSM Homepage].	
[sign up]:https://www.openstreetmap.org/user/new
[OSM Homepage]:http://www.openstreetmap.org/ 

###*Learn OSM###
A [great site] devoted to tutorials on OSM and QGIS.  Stay tuned for updates.
[great site]: http://www.learnosm.org

###*OSM Wikis###
The [homepage] to OSM’s wiki pages. From here, you can find other wiki sites devoted to specific aspects of OSM and mapping.  	
[homepage]: http://wiki.openstreetmap.org/wiki/Main_Page

###*JOSM###
All information regarding [JOSM] that you will need.  It includes updates, plug-ins, tutorials and video manuals.	
[JOSM]: http://josm.openstreetmap.de/

###*More tools###
A few more [links] with other useful [OSM tools]. 	
[links]: http://osmtools.de/osmlinks/
[OSM tools]: http://www.osm-tools.org/

Data Collection	
----------------
###*Walking Papers###
The [website] for printing, scanning and uploading field data onto the OSM database. If there are problems with this website, use field papers.  	
[website]: http://walking-papers.org/ 

###*Field Papers###
Another [version] for printing, scanning and uploading maps. Better for mapping parties and printing atlases.  	
[version]:http://fieldpapers.org

###*GPS Basics###
A [site] devoted to understanding GPS devices. 	
[site]: http://www.gps-basics.com/

###*REI GPS How To###
An [article] that reviews the basics of a GPS and how to use it.  	
[article]: http://www.rei.com/expertadvice/articles/gps+receiver+howto.html 

###*Garmin GPS manual
These links([Garmin Support]&[Pinns]) also include directions on how to download OSM maps onto your GPS. 	
[Garmin Support]: http://support.garmin.com/ 
[Pinns]: http://pinns.co.uk/osm/

###*GPS Babel###
The [homepage] for the free software, GPS Babel, which converts GPS data into mapping programs.  	
[homepage]:http://www.gpsbabel.org/ 

###*Mapping Balloons###
If you do not have access to satellite imagery or the imagery is poor (due to pixelation or cloud coverage), gathering data from balloons may be an option for you. Visit the [public laboratory] and/or [grassroots mapping].  	
[public laboratory]: http://publiclaboratory.org/tool/balloon-mapping
[grassroots mapping]: http://grassrootsmapping.org/about/

Quality Assurance	
-----------------
###*OSM Keep Right###
A site devoted to highlighting errors in OSM data, such as replicated objects or mismanaged tags.	
http://bit.ly/osmkeepright 

###*Quality Assurance Wiki###
A [wiki page] detailing websites and tools for making OSM error free.   
[wiki page]: http://wiki.openstreetmap.org/wiki/Quality_Assurance

###*OSM Bugs###
A simple interface for non-mappers to [report bugs].  Mappers and programmers can fix these errors.   There is also an OpenStreetBugs-Plugin in JOSM to report [bugs]. 	
[report bugs]: http://openstreetbugs.schokokeks.org/
[bugs]: http://wiki.openstreetmap.org/wiki/OpenStreetBugs



Presets and Tagging Conventions	
-------------------------------
###*Map Features wiki###
A comprehensive [page of common international tags] for infrastructure in OSM.	
[page of common international tags]: http://wiki.openstreetmap.org/wiki/Map_Features

###*Tag Info###
A [website] for statistics regarding how often certain words are used for tags. 	
[website]: http://taginfo.openstreetmap.org/

###*Tag Watch###
[General descriptions and statistics] about tag usage.  It contains other useful links for OpenStreetMap.  There is also a great list on sites devoted to different aspects of OSM. 	
[General descriptions and statistics]: http://tagwatch.stoecker.eu/

###*Indonesia Tags###
A specific [version of tags] that have been brainstormed for Indonesia.	
[version of tags]: http://wiki.openstreetmap.org/wiki/Indonesia#Tagging_convention



Tasking Manager	
---------------
###*Task Manager###
A mapping tool for delegating collaborative mapping.  	
[mapping tool]: http://tasks.hotosm.org/

###*Task Manager Wiki###
A [wiki guide] to the Tasking Manager.	
[wiki guide]: http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager



Downloading/Extracting Data
---------------------------
###*Geofabrik Downloads###	
The recommended [source for downloading OSM data].  These maps are updated quite regularly. 
[source for downloading OSM data]: http://download.geofabrik.de/osm/

###*Metro Teczno###
A [site] for specific cities.  Updated regularly. 
[site]: http://metro.teczno.com/

###*Hot Export###
A [tool that enables more specific downloading]-- rather than just the country-wide options commonly found in geofabrik.  Though it is only available for Haiti and Indonesia currently, it enables users to chose certain areas and certain tags to download.  	
[tool that enables more specific downloading]: http://hot-export.geofabrik.de/

###*Planent OSM###
The [OSM data portal].	
[OSM data portal]: http://planet.openstreetmap.org/ 

###*CloudMade Downloads
Not necessarily updated regularly, but another [source] for OSM data. 	
[source]: http://downloads.cloudmade.com/

###*Wiki: Downloading
Wiki pages that describe the [downloading process] and [list other sites] to download data and maps. 	
[list other sites]: http://wiki.openstreetmap.org/wiki/Planet.osm
[downloading process]: http://wiki.openstreetmap.org/wiki/Downloading_data



Data Servers: PostGIS and Mapnik Configuration	
----------------------------------------------
###*Post GIS###
PostGIS provides a way of storing large volumes of data for a GeoServer.  Read more about it through [blogs], tutorials and websites. 
[blogs]: http://blog.geoserver.org/2009/01/30/geoserver-and-openstreetmap/

###*PostGres###
[Postgres] is Object Relational Database Management System(ORDBMS), essentially a bridge between objects & relational databases.  This [database management system] stores relational data and uses a client/server model. In other words, it can manage backend mapping data.	
[database management system]]: http://manikandanmv.wordpress.com/2011/02/10/postgresql-basics/
[Postgres]: www.postgresql.org/
http://www.postgresql.org/docs/8.2/static/index.html

###*QGIS,Postgis,TileMill and Windows guide###
An excellent introductory [guide] for Windows users for using PostGis.
[guide]:https://github.com/springmeyer/win-osm-workshop/blob/master/Tutorial.md

###*OSM2pgsql###
A converter that allows you to load the OpenStreetMap data into PostGIS.  Osm2pgsql moves OSM planet.osm data into a PostgreSQL database so that it can be rendered into map tiles by Mapnik. Read about it on the [wiki]. 	
[wiki]: http://wiki.openstreetmap.org/wiki/Osm2pgsql

###*Switch2OSM###
A [guide] for creating your [own OSM tile server].  It includes the installation of PostGIS, postgres, and osm2pgsql (for Macs and Ubuntu).  	
[guide]: http://switch2osm.org/the-basics/
[own OSM tile server]: http://switch2osm.org/serving-tiles/manually-building-a-tile-server-12-04/


Printing and Displaying OSM Maps
--------------------------------	
###*MapOSMatic###
A great [site] for selecting and printing maps.  You can insert a road table of contents, as well as use different styles.  Takes about 15 to 20 minutes to render. 	
[site]: http://maposmatic.org/new/

###*Safety Maps###
A [website] that allows users to print out pocket sized maps.  They are intended for emergency uses.  	
[website]: http://www.safety-maps.org/

###*Mapbox and TileMill###
Hosted by [Mapbox], the [TileMill] program is useful for displaying maps on websites.  Though you may need to pay for hosting maps that receive a lot of traffic, there are free options. [OSM Bright (Mac/Ubuntu)] is a great start to making a solid map. 	
[Mapbox]: http://mapbox.com/
[TileMill]: http://mapbox.com/tilemill/
[OSM Bright (Mac/Ubuntu)]: http://mapbox.com/tilemill/docs/guides/osm-bright-ubuntu-quickstart/

###*[Maki] Icons###
Places to get [icons] for map making.  	
[icons]: http://www.sjjb.co.uk/mapicons/contactsheet
[Maki]: http://mapbox.com/maki/


QGIS
----	
###*Beginner QGIS Manual###
[“Introduction to QGIS” manual] from the makers of LearnOSM. So far, written in English and Indonesian. 
[“Introduction to QGIS” manual]: http://www.learnosm.org/qgis-tutorial/

###*QGIS Community###
[Community support] and user manuals from the creators of QGIS. 	
[Community support]: http://www.qgis.org/en/community.html

###*Inasafe###
Information regarding the QGIS plug-in, [“Inasafe”], which can be used for modeling disasters.  This tool is dependent on good data collection from OSM (or other sources) and hazard data (which is normally conducted by scientists or historic events).	
["Inasafe"]: http://www.inasafe.org/

Github and OSM
--------------
###*Cheat Sheets###
A [cheat-cheat] for Github code. 
[cheat-cheat]:http://cheat.errtheblog.com/s/git

###*Github Support ###
Check out the documentation at [http://help.github.com/pages] or contact support@github.com.


Community Support and Resources	
-------------------------------
###*OSM Facebook###
A [facebook group] devoted to Indonesian support.


###*Twitter### 
OSM Twitter Handle [@OSMblogs],[@OpenStreetMap], etc.
[@OSMblogs]:https://twitter.com/osmblogs
[@OpenStreetMap]: https://twitter.com/openstreetmap

###*Indonesian Facebook and Twitter###
Indonesian [Facebook] and Twitter support (Emir style)	@OSM_ID
[Facebook]: http://www.facebook.com/groups/osm.id/

###*Mailing Lists###
A collection of mailing lists regarding openstreetmap.  Ranging from specific tools to OSM in certain countries, these mailing lists require subscriptions for editing tips, bugs and community support. 	
http://lists.openstreetmap.org/listinfo; 
http://lists.openstreetmap.org/listinfo/talk-id 

Other Useful Web-Based Tools
----------------------------	
###*Geotribu###
This [site] takes you to Imagimap Baselayers v2, which is a great tools for comparing the coverage and data of OpenStreetMap, Google Maps, Bing Maps, and NAVTEQ (Yahoo! Maps).  It takes a while to load. 	
[site]: http://geotribu.net/applications/baselayers/index.php

###*ITO World###
[ITO World Ltd] provides two useful tools (you need to subscribe):
1. OSM Mapper: A program that allows you to monitor edits and changes across certain geographical areas. Providing global coverage, OSM Mapper reveals mapping contributions in local areas and is updated daily from the OpenStreetMap feed.
2. OSM Analysis: This program compares OpenStreetMap data to the Ordinance Survey's OS Locator data. Basically, it calculates the percentage of missing roads, which is then used as a metric to gauge the completeness of roads mapped in each local authority. Since OSM goes into greater detail, such as footpaths, cycle lanes and green spaces (which other maps usually do not include), a high score here does not mean that OSM is complete in that area. Although, low and high scores do tend to correlate to how complete OSM is in that region.	
[ITO World Ltd]: http://www.itoworld.com/static/openstreetmap_tools.html 

###*OSMstats###
A [site] to gather and view statistical information on OpenStreetMap.	
[site]: http://osmstats.altogetherlost.com/index.php 

###*Best of OSM###
A look at some of the [best examples] of OSM.	
[best examples]: www.bestofOSM.org

###*Live OSM###
If you want to see who is mapping in your area, or anywhere in the world, right now you can view them at this [link]. (You have to save your edits to get on the site).
[link]: http://live.openstreetmap.fr




