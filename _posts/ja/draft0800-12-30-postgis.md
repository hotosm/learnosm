---
layout: doc
title: PostGIS Configuration
permalink: /ja/advanced/postgis-cofiguration/
lang: ja
category: sys-admin
---


PostGIS Configuration
========================

By now you should have gained some experience working with OpenStreetMap
and with Quantum GIS. You have learned about some of the different ways
of storing map data. Files that are opened and saved in JOSM have an
.osm extension. These files store map data as XML, which is a great
format for transmitting information across the internet. In QGIS, we
often save map data as Shapefiles, with an .shp extension. These types
of files provide faster access, and are commonly used for analysis. 

What we have not covered yet are databases, which are a very fast and
useful way to store map data. Setting up a database is not something
that you will need to do if you just plan on editing OpenStreetMap or on
doing simple tasks with QGIS. But for those of you who want to go a
step further, a database will allow much higher-performance access to a
data set. For example, the OpenStreetMap server uses a database to
store its map data. It uses the database to receive edits from mappers,
to send small pieces of the map as XML to users, and to render the map
as image tiles on the main website -
[openstreetmap.org](http://www.openstreetmap.org).

![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image02.png)

PostGIS makes our database work spatially

The database we will be using is PostgreSQL, a commonly used relational
database. PostgreSQL is great at storing and querying data; however, it
cannot perform complex spatial tasks. In order to hold geographic data
and to process it, we must add PostGIS extensions. The combination of
PostgreSQL and PostGIS permits spatial indexing of data, which
essentially enables the database to compute geodata queries, such as
whether a line intersects a polygon or what point lies at the
intersection of two lines.  In this chapter we will learn how to setup
PostgreSQL on Windows, how to create a database, and how to import
shapefiles and OpenStreetMap data into our database:

1. Installing PostgreSQL and PostGIS
2. Creating and Using a Database with QGIS
3. Importing OSM Data into Your Database

Installing PostgreSQL and PostGIS
----------------------------------------

In this section we will install PostgreSQL and then add the PostGIS
spatial extensions. This is fairly easy to setup using the One-Click
Installer.

1. Navigate your web browser to the postgresql website and find the
   download page here: 
   [http://www.postgresql.org/download/](http://www.postgresql.org/download/)
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image29.png)

2. From here you can find installation instructions for different
   operating systems. Click on the “Windows” link.

3. This page explains what the One-Click Installer will do. It will
   install three different components:

   - PostgreSQL server: The database software, the core component
   - pgAdmin III: The graphical interface for managing your databases
   - StackBuilder: A tool for adding additional applications; we will use
     this for adding the PostGIS extensions

4. Click on Download. ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image39.png)

5. You will have several different Installer options for different
   versions of the PostgreSQL software. The Version 9.2.1 installer
   does not allow you to add PostGIS through the StackBuilder utility,
   so we recommend that you download the Version 9.1.6 installer.
   Click on the button that says Win x86-32. This is the installer
   for the 32-bit version of 
   Windows. ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image24.png)

6. When it has finished downloading, run the One-Click Installer.
![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image00.png)

7. Click “Next” to navigate through the installation wizard. The
   default options should be fine. You will need to provide a password
   for the first database user (the user is postgres). This user has
   superuser privileges, meaning that they can do whatever they want,
   so don’t forget the password that you use!
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image11.png)

   > You can create as many databases as you want using Postgresql.
   > You might want a database for your geographic data, and separate
   > databases for other projects that you are working on. And you may want
   > different people to have different types of access to these databases.
   > For this purpose, every database that you create uses the concept of
   > users and roles. A database must always be owned by a user, and usually
   > that user will need a password in order to make changes to the database.
   > Additional users can be given permission to access a database, and they
   > can be given certain roles. For example, you may want a database user
   > that can only read information from the database, but cannot change it.
   > Or you may want a user that can add data, but does not have permission
   > to delete it. With users and roles, this is possible. For now we won’t
   > worry too much about this, just remember that your database is owned by
   > a user, and to access the database you will need the user’s name and
   > password. The first user we create (named postgres) is a superuser,
   > meaning they have permission to do everything with the databases.

8. After you have clicked through the wizard and accepted the default
   configuration options, the wizard will install everything for you.
   It may take a few minutes.

9. When the installation is complete, the wizard will ask you if you
   want to launch StackBuilder, which is the utility that will allow us
   to install PostGIS. Make sure the box is checked before you click
   “Finish.” ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image26.png)

10. Now we’ve successfully installed PostgreSQL and we need to add the
    PostGIS extensions. When the StackBuilder wizard opens, select your
    PostgresSQL installation from the dropdown menu and click Next. It
    will be something like PostgreSQL 9.1 on port 5432. 
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image01.png)

11. Open the “Spatial Extensions” tab and check the box next to PostGIS
    1.5 for PostgreSQL 9.1... Again, we are using PostGIS 1.5 because
    the utility we will use to import OSM data does not always work
    perfectly with version 2.0. ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image13.png)

12. Click Next to download the extensions and install. When prompted,
    click “I Agree” to accept the terms and conditions.

13. The PostGIS installer will ask more questions, but generally the
    default options are fine. You can tell it to create the first
    database automatically, but we will learn how to do that ourselves
    in the next section. ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image21.png)

14. To begin the PostGIS installation you will need to supply the
    postgres password that you created when you installed 
    PostgreSQL.  ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image06.png)

15. If you are asked to install the shp2pgsql graphical loader plugin,
    click “Yes.” ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image33.png)

16. PostGIS will be installed. When it’s completed, click “Close” and
    then “Finish.”

Creating and Using a Database with QGIS
--------------------------------------------

Now that we have installed all of the necessary software, we will create
a database, and then use it as a datasource in QGIS. We will use
pgAdmin III, which is a graphical database client that is useful for
querying and modifying databases.. 

![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image07.png)

PgAdmin III is the official client for PostgreSQL and lets you use the
SQL language to manipulate your data tables. It is also possible to
create and manipulate databases from the command-line, but for now,
pgAdmin III is an easy way to get started.

1. Open pgAdmin III. It should be in the Start Menu under All Programs
   -> PostgreSQL 9.1 -> pgAdmin III. 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image16.png)

2. In the panel on the left under Servers, right-click where it says
   PostgreSQL and click “Connect.” 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image08.png)

3. Enter the postgres user password that you created when you installed
   the software. Remember that the username and password are required so that 
   you can create and access a database. 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image37.png)

4. Right-click on Databases and select New Database... 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image23.png)

5. You need to enter a few pieces of information to create the new
   database: name and owner. In the Properties tab, give the new
   database a name. In this example, we name our database gisdb. We
   should also give our database an owner. Since we only have one user
   right now, let’s give our database the owner postgres. (Note: for
   security reasons it is usually a good idea to create users without
   superuser permission, but for now we won’t worry about this.)
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image20.png)

6. Under the Definition tab, keep the defaults, but next to Template
   select template_postgis. This will create our database with the
   proper spatial columns.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image32.png)

   Click OK to create the database. You will now see your database listed
   under “Databases.” Let’s load some sample data into the database so
   that we can learn how to access it from QGIS. To do this, we will use a
   utility that converts shapefiles and loads them into the database.

7. Make sure that your new database is selected and go to Plugins -\>
   PostGIS Shapefile and DBF loader 1.5 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image10.png)

8. Click “Add File” and find a shapefile on your filesystem. Feel free
   to use the sample data provided in the QGIS manual
   ([beginning-qgis-samples.zip](http://www.learnosm.org/files/beginning-qgis-samples.zip)).

9. Once you have selected a file, click “Import.” If everything goes
   smoothly, the output will read “Shapefile import completed.” 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image17.png)

   Great, so we’ve created a database and we’ve imported a shapefile as a
   sample. Now let’s open QGIS and see how we can access our database.

10. Open QGIS and click on the “Add PostGIS Layers” button. 
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image12.png)

11. Under “Connections” at the top, click “New.”

12. Give the new connection a name. Under database type gisdb (or
    whatever you named your database). Enter the username postgres and
    your password below. ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image18.png)

13. Click OK to save the connection settings. Then click “Connect” to
    connect to your PostgreSQL server. You may need to enter your
    username and password again.

14. If everything is successful, you will see the shapefile layer that
    you loaded into the database available here. Select it and click
   “Add” to add it to your map. ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image04.png)

15. When you add the layer you will need to select a coordinate system
    to display the data in. You will most likely want to select WGS 84,
    which is the coordinate system OpenStreetMap uses.

16. Note that the layer behaves the same as if you had loaded a file
    directly into QGIS. The only difference is that if you edit the
    layer, the changes will be saved on your database.

Importing OSM Data into Your Database
-------------------------------------------

Now that you understand how to create and access a database from QGIS,
let’s see how we can load OpenStreetMap data into our database. Loading
OSM data is very useful because it is so complex and there is so much
data to process that a database is far more efficient than working with
XML files or shapefiles. It is also useful to keep our OSM data in a
database for the following chapters in this guide.

To import OpenStreetMap data into our database, we will install a couple
of tools. The main tool is called osm2pgsql, which is a utility that
loads the OpenStreetMap XML data into the a format we can store in the
database. The utility is easy to set-up, we simply need to download the
program, and then we need to add its location to our system path.

1. To download the windows version of osm2pgsql, navigate your web
   browser to: [http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows](http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows) 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image28.png)

2. Download the file named osm2pgsql.zip

3. Unzip the file on your system. If you want, move the folder
   somewhere that will remain unchanged, because we need to add its
   location to the system path.

4. In the osm2pgsql directory that you unzipped is a file called
   osm2pgsql.exe. This is a program that we will run to import the
   data, but in order for the system to find it, we need to add its
   location to the system path. Click on the Start Menu and type
   “system path.” You should see an option named “Edit the system
   environment variables.” Click on it.

5. Click on the button named “Environment Variables.” 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image34.png)

6. At the bottom find the variable named “Path” and click “Edit...” 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image38.png)

7. Now you must add the directory where osm2pgsql.exe is located to the
   Path variable. 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image22.png)

8. Add a semicolon to the end of the previous directory and then type
   in the full directory path of osm2pgsql.exe. For example, if you
   left it in the Downloads directory it may be something like
   `C:\Users\Administrator\Downloads\osm2pgsql\osm2pgsql`

9. Click OK.

   Phew! That was the hard part. Now we just need to install a plugin in
   QGIS, and we can easily import OSM data into our database.

10. Open QGIS and go to Plugins -> Fetch Python Plugins... 
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image14.png)

11. We need to add a new plugin repository. Click the “Repositories” tab.

12. Click Add...

13. Next to Name: type “dbsgeo.com”

14. Next to plugins URL: type
   “[http://qgis.dbsgeo.com](http://qgis.dbsgeo.com)” 
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image03.png)

15. Click OK.

16. Click back to the “Plugins” tab and find the plugin named “OSM
    Tools.”  You can type it in the search box to find easily.

17. Select the plugin and click “Install Plugin.”

18. The plugin will install and should give you a message that the
   “Plugin installed successfully.”

19. Close the menus. You should see a new menu on your top menu bar
    named “OSM Tools.” 
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image40.png)

    Great! Now we can use the OSM Tools plugin to easily import data into
    our database. In case you are wondering about osm2pgsql, as long as we
    use the plugin we won’t ever need to deal with it directly. The OSM
    Tools plugin uses osm2pgsql behind the scenes.

    Let’s use the plugin to import OpenStreetMap data into our database. If
    you don’t already have a .osm file that you can use, try downloading a
    file from [http://metro.teczno.com/](http://metro.teczno.com/). This
    site hosts many OSM extracts for different cities. Find a city to
    import and download the BZ2 file for it. BZ2 files are compressed
    versions of the normal .osm files. PBF files are even smaller, but our
    Windows version of osm2pgsql won’t work with this type of file. If this
    website doesn’t have a city you are interested in, you can get larger
    country-wide extracts from
    [http://download.geofabrik.de/osm/](http://download.geofabrik.de/osm/.),
    or download a specific area from
    [http://hot-export.geofabrik.de](http://hot-export.geofabrik.de).

    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image09.png)

20. When you have an OSM file that you can use, go to the OSM Tools Menu
    in QGIS and select “Import into PostGIS (osm2pgsql).”

21. This will open a new tab on the right side of QGIS.

22. All we must do now is specify the input file (the OSM file) and the
    database that we want to load it into.

23. Click on the “Input” button and locate the OSM file that you want to
    load. Remember that this file must end in .osm or .osm.bz2.
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image05.png)

24. Don’t worry about the “Style.”

25. Select “My First Database” under “Database.”
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image35.png)

26. Note that this list will only show the databases that you have saved
    in QGIS, as we did at the end of Section 2.

27. Click “Run.”

28. You may need to type in your database password and press enter, if
    you see something like this at the bottom of the panel:
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image19.png)

29. The import may take some time, depending on how large the import
    file is. It also may happen that osm2pgsql will run out of memory
    while it is trying to import the OSM file. If you get an error
    message such as “Error allocating nodes,” check the box labelled
    “Slim on memory (slower)” and try running again.

30. The output should tell you that the import is finished.
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image15.png)

31. Now go back to “Add PostGIS Layer.”
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image12.png)

32. When you connect to your database again, you will see four new
    tables.
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image25.png)

33. These are the tables that osm2pgsql created in your database. There
    is one layer for each different type of data - lines, points, and
    polygons, and an additional layer that contains main roads. Try
    adding them to see your data displayed in QGIS!
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image31.png)

Frequently Asked Questions
--------------------------------

So far we have seen how to install the software to get our database up
and running, how to import shapefiles into a database, and how to import
OpenStreetMap data. We have also learned how we can connect to our
database from QGIS using our name and password, and work with the data
directly. Now let’s go through some common questions about geospatial
databases.

*Can I have more than one database on my computer?*

Yes, you can have as many databases as you want. You probably don’t
want to keep data from completely different projects all in the same
database, simply for organizational reasons. But it makes sense to
store data for one project in a single database.

*Why do I need users? Should it not be enough just to have different
database names?*

If you are just maintaining databases for personal use, you probably
don’t need to worry about different users and roles. But if you are an
advanced user and you want to let people access your databases remotely,
you will probably want to set up users with limited permissions.

*What is a database table?*

In the database we created, each of the “layers” is stored in a table.
A table is a part of a database that stores a certain kind of
information, and a database can have many different tables. When we
imported the OSM data the program created four tables - the first table
stores polygon data, the second point data, and so on. Because these
types of information are have intrinsically different types of data,
they are stored in separate tables.

*How do I update my database when the OSM data has changed?*

There are somewhat complex ways to do this automatically, but the
easiest way is simple to delete the tables that osm2pgsql created,
download an up-to-date extract file, and import it into your database.

Summary
--------------

We’ve done a lot in this chapter, so you should feel proud. We learned
how to install PostgreSQL and add PostGIS extensions on Windows. We
then saw how to create a geospatial database and load shapefiles into
it. We learned how to access our database from within QGIS. Finally,
we installed osm2pgsql and the OSM Tools plugin so that we can load
OpenStreetMap data directly into our database. Well done!

Appendix A - Installing PostgreSQL on Ubuntu
-------------------------------------------------

For those of you who are interested, we have provided an appendix which
goes through the steps of setting up PostgreSQL on Ubuntu Linux. We
will not be going step by step through the details of the operating
system, but if you already have experience with Linux you should be able
to follow along.

**Install PostgreSQL and PostGIS**

To install PostgreSQL and PostGIS on Ubuntu 11.04 (Natty Narwhal), run
this command:

    sudo apt-get -y install postgresql postgresql-8.4-postgis

If you are installing on Ubuntu version 11.10 or above, run:

    sudo apt-get -y install postgresql-9.1 postgresql-9.1-postgis
postgresql-contrib-9.1 libpq-dev

Note the version of Postgresql that you installed here. (8.4 or 9.1)

**Create a Database**

Before setting up a database we need to edit the PostgreSQL settings.
Open the configuration file with nano by running:

    sudo nano /etc/postgresql/8.4/main/pg_hba.conf

If your version of Postgresql is 9.1 this file will be in
/etc/postgresql/9.1/main/pg_hba.conf.

Go to the bottom of the file. There are four lines here and we need to
change the local access permissions for them to “trust”. This will
allow us to access the database from the same machine without a
password. The configuration will look something like this:

    local   all         postgres                          trust
    
    # TYPE  DATABASE    USER        CIDR-ADDRESS          METHOD
    
    # "local" is for Unix domain socket connections only
    local   all         all                               trust
    # IPv4 local connections:
    host    all         all         127.0.0.1/32          trust
    # IPv6 local connections:
    host    all         all         ::1/128               trust

Save the changes with Ctrl-O and Enter, end then exit nano with Ctrl-X.

Now we need to restart PostgreSQL so that the new changes take effect.

    sudo /etc/init.d/postgresql restart

Now we can create our database with the following commands:

Ubuntu 11.04

    psql -U postgres -c "create database osm;"
    psql -U postgres -d osm -c "create language plpgsql;"
    psql -U postgres -d osm -f /usr/share/postgresql/8.4/contrib/postgis-1.5/postgis.sql
    psql -U postgres -d osm -f /usr/share/postgresql/8.4/contrib/postgis-1.5/spatial_ref_sys.sql

Ubuntu >= 11.10

    psql -U postgres -c "create database osm;"
    psql -U postgres -d osm -f /usr/share/postgresql/9.1/contrib/postgis-1.5/postgis.sql
    psql -U postgres -d osm -f /usr/share/postgresql/9.1/contrib/postgis-1.5/spatial_ref_sys.sql

psql is a utility for interacting with PostgreSQL.  We are running it
here to create a database named osm using the user postgres. We did the
same thing in the chapter for creating a database on Windows, but here
we do it using the command-line.

**Install Osm2pgsql**

Now we will use the osm2pgsql utility to import OpenStreetMap data into
our database. First let’s install it.

In case you do not have add-apt-repository installed, add it with:

    sudo apt-get -y install python-software-properties

Add the repository containing the packages:

    sudo add-apt-repository ppa:kakrueger/openstreetmap

Update the local package list to pick up the new repository:

    sudo apt-get update

Install the package osm2pgsql

    sudo apt-get install osm2pgsql

If you are asked to create a database, answer “No.” It will ask you
about the database name anyway because of an error in the install
program, so just press enter to accept the defaults.

![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image30.png)

**Import Data**

We can now import OpenStreetMap data into our database. You will need a
data file, which you can easily download from the GeoFabrik website. To
download an OSM extract, find the link to the file and use wget to
download the file on your Ubuntu system. For example:

    wget http://download.geofabrik.de/openstreetmap/asia/indonesia.osm.pbf

Depending on the size of the extract it may take some minutes to
download.

Load data into the database by running:

    osm2pgsql -c -G -U postgres -d <database_name> <your_data_file>

You may need to provide certain flags for osm2pgsql if your system is
low on memory. If you get an error such as “Out of memory for dense
node cache, reduce --cache size” try running with these options:

    osm2pgsql -s -U postgres --cache-strategy sparse -C 10 -d \
    <database_name> <your_data_file>

Following this example, the command would be:

    osm2pgsql -s -U postgres --cache-strategy sparse -C 10 -d osm \
    indonesia.osm.pbf

This command will take some time to execute, depending on the size of
the import. You will see some output that looks like this:

![]({{site.baseurl}}/images/en/advanced/en_adv_ch1_image36.png)

You may need to adjust -C 16000 to match your RAM if you have less than
16 GB of RAM. The fastest results are obtained when using a .pbf file.

If you have any questions or troubleshooting issues, check out
[https://github.com/nvkelso/geo-how-to/wiki/PostGIS](https://github.com/nvkelso/geo-how-to/wiki/PostGIS) for
further information.

<!--

^[[c]](#cmnt3)^

^[[d]](#cmnt4)^

[[a]](#cmnt_ref1)MrPatrickOswald:

would be good to give a little explanation what problems occure using v
2.0..

actually in the current installer there is not option to choose a 1.x
version anymore...  so either install manually or live with the problems
of the version 2.x ...

[[b]](#cmnt_ref2)Jeff Haack:

just a note to myself: this is great:

https://github.com/springmeyer/win-osm-workshop/blob/master/Tutorial.md

* * * * *

Jeff Haack:

also this for OSM bright and imposm:
http://mapbox.com/tilemill/docs/guides/osm-bright-ubuntu-quickstart/\#step\_1\_set\_up\_a\_database\_for\_your\_osm\_data

[[c]](#cmnt_ref3)Paul Norman:

This will install the version of osm2pgsql from the ubuntu repo which is
horribly out of date. The PPA listed on switch2osm.org should be used

[[d]](#cmnt_ref4)Paul Norman:

The Windows version is from 2010, does not support PDF and uses 32-bit
node IDs which are estimated to break in early 2013.
--> 
