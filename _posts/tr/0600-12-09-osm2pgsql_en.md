---
layout: doc
title: osm2pgsql
permalink: /en/osm-data/osm2pgsql/
lang: en
category: osm-data
---

osm2pgsql
==========


In the previous chapter we saw how to set up Postgresql with PostGIS in Windows and how to set up a database and load it with shapefile data. In order to get OpenStreetMap data into a database, you could get the data in shapefile format and use the shapefile loader, but this may leave you without all the data that you want. In this chapter we will learn how to use **osm2pgsql**, a command-line program for loading raw OSM data into a PostGIS database.  

We will go through the steps to set up osm2pgsql on Windows, though the steps should be roughly the same on another operating system, assuming you have set up your PostGIS database(s) correctly.  

Get osm2pgsql
-------------

To download the windows version of osm2pgsql, navigate your web browser to <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Download the file named **osm2pgsql.zip**  
- Unzip the file on your system. You should move the unzipped folder to a location where you will not move it later, because we need to add its location to the system path.  

![unzip it][]

- In the osm2pgsql directory that you unzipped is a file called osm2pgsql.exe.  This is a program that we will run to import the data, but in order for Windows to find it, we need to add its location to the system path.  Click on the Start Menu and type “system path.”  

![system path][]

- You should see an option named “Edit the system environment variables.”  Click on it.  

![edit variables][]

- Click on the button named “**Environment Variables**”  

![env variables][]

- At the bottom find the variable named “**Path**” and click “**Edit...**”  

![find path][]

- You must add the directory where osm2pgsql.exe is located to the Path variable.  

![edit path][]

- Add a semicolon to the end of the previous directory and then type in the full directory path of osm2pgsql.exe.  For example, if you put the **osm2pgsql** folder directly in the **C:\\** directory the path would be:  
	
**C:\osm2pgsql\Win32**  

- Click OK several times to save the new settings.  
- **osm2pgsql** should be functioning now. Let's check it.  
- Open the Windows Command Prompt. You can do this by clicking on the Start Menu and typing "**cmd**". The Command Prompt application will come up and you can press Enter or click on it.  

![cmd][]

- In the black command window that opens, type:  

**osm2pgsql**

- If everything is working right, you should get a message like this:  

![osm2pgsql test][]

- If you don't see an error message like this, and it says that it cannot find the application **osm2pgsql**, then you may have entered the Path variable incorrectly.  

Getting Raw OSM Data
---------------------
Before we can run **osm2pgsql** we need to have some raw OSM data to import into a database. If you don't already have a **.osm** file that you can use, try downloading a file from <https://mapzen.com/data/metro-extracts/>. This site hosts many OSM extracts for different cities.  Find a city to import and download the PBF file for it. PBF files are compressed versions of the normal **.osm** files. You can use any of the extract services listed in the chapter on [getting data](/en/osm-data/getting-data), if you'd like the raw data for another area.  

Get the Style File
------------------
**osm2pgsql** requires the use of a custom style file to define which tags are included in the database during import. You can download the default style file [here](/files/default.style).  

Importing the Data
-------------------
Open PgAdmin III and create a new database named **osm**, just as you did in the previous chapter. To import the data, we will run the **osm2pgsql** program via the command line. 

- Click on the Start Menu and type "cmd" and Enter to open the Command Prompt.  

![command prompt][]

Here we will run the application **osm2pgsql** with several options. We need at least to supply it with:  

- The location of the OSM Data File  
- The name of the database, and the database username  
- The style file which defines which OSM tags will be imported to the database  

We have placed our OSM file into the **C:\\** directory to make this easier.  

- Type the following command, replacing the location of the OSM file and style file with your own.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Press Enter. If all goes well, the process should begin running. It may take a few minutes for all of the data to load into the database.  

![osm2pgsql output][]

- If your raw OSM file is large, you may need to add additional memory to the osm2pgsql import process. To do this, add the following to the command:  

      --cache 600

Testing It
-----------

We can test that the import was successful and view the data in our database using QGIS.  

- Open QGIS and click on the "Add PostGIS Layers" button. ![qgis add postgis button][]{: height="24px"}

- Under “Connections” at the top, click “**New**.”  
- Give the new connection a name.  Under database type **osm** (the name of your database).  
- Enter the username postgres and your password below.  

![connection settings][]

- Click OK to save the connection settings.  Then click “Connect” to connect to your PostgreSQL server.  
- Click next to "public" to see all of the layers (tables) in your database. Notice that osm2pgsql creates a separate table for different object types - points, lines, and polygons. It also creates a roads table, which contains only major roads.  

![postgis layers][]

- Select one or more of the layers and click "Add." If asked, choose WGS84 as the CRS.  
- If everything is successful, you will see the layers you selected displayed in QGIS.  

![osm in qgis][]

> If you look at the attribute tables of the layers, you will see that the attributes are mapped to OSM tags. The specific tags that are imported are defined during the **osm2pgsql** import process. In order to add specific tags that are not included by default, you can edit the *style* file that osm2pgsql references to define the data schema.  


Summary
-------

When you want to import OpenStreetMap data into your own database, **osm2pgsql** is a great tool. It can be extremely useful when you need to be able to get the most up-to-date OSM data and customize the attributes you want, or when working on more complex projects.  

Another import tool has been developed recently, called [imposm](http://imposm.org/), and offers some speed and other improvements over osm2pgsql, although as of this writing it lacks other key functions which are promised in imposom version 3.  

For more information on osm2pgsql, refer to the OSM Wiki - <http://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png

