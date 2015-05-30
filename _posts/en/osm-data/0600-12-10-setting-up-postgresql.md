---
layout: doc
title: Setting up PostgreSQL
permalink: /en/osm-data/setting-up-postgresql/
lang: en
category: osm-data
---

PostgreSQL & PostGIS
====================


In this chapter we will see how to set up PostgreSQL on Windows and how to
create a database in which you can store geographic data. We'll be using the
open source GIS software QGIS in this chapter, so it will be helpful if
you are already familiar with it.

In the following chapter, we will see how to import OpenStreetMap data into
a PostgreSQL database.

Installing PostgreSQL and PostGIS
----------------------------------

In this section we will install PostgreSQL and then add the PostGIS spatial
extensions.  This is fairly easy to setup using the One-Click Installer.

-	Navigate your web browser to the PostgreSQL website and find the download page here:
	[http://www.postgresql.org/download/](http://www.postgresql.org/download/)

![postgresql website][]

-	From here you can find installation instructions for different operating systems.  Click
	on the “Windows” link.
-	This page explains what the One-Click Installer will do.  It will install three different components:
	-	PostgreSQL server:  The database software, the core component
	-	pgAdmin III: The graphical interface for managing your databases
	-	StackBuilder: A tool for adding additional applications; we will use this for adding the PostGIS extensions
-	Click on Download.

![postgresql download][]

-	You will see several different Installer options for different versions of the PostgreSQL software.
	Download the most recent version. As of this writing it is version 9.3.1. Click on the button that
	says Win x86-32.  This is the installer for the 32-bit version of Windows.

![postgresql version][]

-	When it has finished downloading, run the One-Click Installer.

![install 1][]

-	Click “Next” to navigate through the installation wizard.  The default options should be fine.
	You will need to provide a password for the first database user (the user is postgres).  This
	user has superuser privileges, meaning that they can do whatever they want, so don’t forget
	the password that you use!

>	You can create as many databases as you want using Postgresql.  You might want a database for
>	your geographic data, and separate databases for other projects that you are working on.  And
>	you may want different people to have different types of access to these databases.  For this
>	purpose, every database that you create uses the concept of **users** and **roles**.  A database must
>	always be owned by a user, and usually that user will need a password in order to make changes
>	to the database.  Additional users can be given permission to access a database, and they can
>	be given certain roles.  For example, you may want a database user that can only read information
>	from the database, but cannot change it.  Or you may want a user that can add data, but does not
>	have permission to delete it.  With users and roles, this is possible.  For now we won’t worry too
>	much about this, just remember that your database is owned by a **user**, and to access the database
>	you will need the user’s name and password.  The first user we create (named postgres) is a **superuser**,
>	meaning they have permission to do everything with the databases.

-	After you have clicked through the wizard and accepted the default configuration options, the
	wizard will install everything for you.  It may take a few minutes.
-	When the installation is complete, the wizard will ask you if you want to launch StackBuilder,
	which is the utility that will allow us to install PostGIS.  Make sure the box is checked
	before you click “Finish.”

![install 2][]

-	Now we’ve successfully installed PostgreSQL and we need to add the PostGIS extensions.  When
	the StackBuilder wizard opens, select your PostgresSQL installation from the dropdown menu
	and click Next.  It will look something like this:

![install 3][]

-	Open the “Spatial Extensions” tab and check the box next to PostGIS. As of this writing the most
	recent version of PostGIS is 2.1.

![install 4][]

-	Click Next to download the extensions and install.  When prompted, click “I Agree” to accept
	the terms and conditions.
-	The PostGIS installer will ask more questions, but generally the default options are fine. 
	You can tell it to create the first database automatically, but we will learn how to do that
	ourselves next.
-	To begin the PostGIS installation you will need to supply the postgres password that you
	created when you installed PostgreSQL.

![install 5][]

-	If you are asked to register the GDAL_DATA environment variable, click "Yes."

![install 6][]

-	When the installation is completed, click “Close” and then “Finish.”

Creating a Database
--------------------

Now that we have installed all of the necessary software, we will create a database. We will
use pgAdmin III, which is a graphical database client that is useful for querying and modifying
databases.

![pgadmin3][]

-	PgAdmin III is the official client for PostgreSQL and lets you use the SQL language to manipulate
	your data tables.  It is also possible to create and manipulate databases from the command-line,
	but for now, pgAdmin III is an easy way to get started.
-	Open pgAdmin III.  It should be in the Start Menu under All Programs -> PostgreSQL 9.3 > pgAdmin III.

![pgadmin3 start][]

-	In the panel on the left under Servers, right-click where it says PostgreSQL and click “Connect.”

![postgresql connect][]

-	Enter the postgres user password that you created when you installed the software. Remember that
	the username and password are required so that you can create and access a database.

![enter password][]

-	Right-click on Databases and select New Database...

![new database][]

-	You need to enter a few pieces of information to create the new database: name and owner.  In the
	Properties tab, give the new database a name.  In this example, we name our database gisdb.  We
	should also give our database an owner.  Since we only have one user right now, let’s give our
	database the owner postgres.  (Note: for security reasons it is usually a good idea to create users
	without superuser permission, but for now we won’t worry about this.)

![new database form][]

<!--
-	Under the Definition tab, keep the defaults, but next to Template select template_postgis.  This
	will create our database with the proper spatial columns.
-->

-	Click OK to create the database.  You will now see your database listed under “Databases.”
-	We need to run a command now to enable the database with PostGIS extensions. Click on the SQL
	button at the top of PgAdmin III.

![sql button][]

-	In the query window, type:

	CREATE EXTENSION postgis;

-	Then click the "Execute query" button.

![postgis command][]

Load Sample Data (optional)
---------------------------

If you are comfortable so far and are familiar with QGIS, follow along as we load some
data into our new database. To do this, we will use a utility that converts shapefiles
and loads them into the database.

-	Make sure that your new database is selected in the panel on the left and go to **Plugins
	-> PostGIS Shapefile and DBF loader 2.1**.

![shapefile loader][]

-	Click “Add File” and find a shapefile on your filesystem.
-	If you don't have any shapefiles, you can download a sample [here](/files/buildings_sample.zip).
-	Once you have selected a file, click “Import.”  If everything goes smoothly, the output will
	read “Shapefile import completed.”

![add shapefile][]

-	Now let's load the data from our database into the QGIS application. If you don't have QGIS
	you can download it on the [QGIS website](http://www.qgis.org/en/site/forusers/download.html).
-	Open QGIS and click on the “Add PostGIS Layers” button.

![qgis add postgis button][]

-	Under “Connections” at the top, click “New.”
-	Give the new connection a name.  Under database type **gisdb** (or whatever you named your database).
	Enter the username postgres and your password below.

![connection settings][]

-	Click OK to save the connection settings.  Then click “Connect” to connect to your PostgreSQL
	server.  You may need to enter your username and password again.
-	If everything is successful, you will see the shapefile layer  (or multiple layers with different
	features types) that you loaded into the database
	available here.  Select a layer and click “Add” to add it to your map.

![your data layer][]

-	When you add the layer you will need to select a coordinate system to display the data in.  You
	will most likely want to select WGS 84, which is the coordinate system OpenStreetMap uses.
-	Note that the layer behaves the same as if you had loaded a shapefile directly into QGIS.  The
	only difference is that if you edit the layer, the changes will be saved in your database.

Summary
-------


Now that you have seen how to set up PostgreSQL and PostGIS, as well as how to create a new
database, you're ready to try the utilities which allow us to import raw OSM data into a
database. We'll take a look at this in the [next chapter](/en/osm-data/osm2pgsql).



[postgresql website]: /images/en/osm-data/setting-up-postgresql/postgresql-website.png
[postgresql download]: /images/en/osm-data/setting-up-postgresql/postgresql-download.png
[postgresql version]: /images/en/osm-data/setting-up-postgresql/postgresql-version.png
[install 1]: /images/en/osm-data/setting-up-postgresql/postgresql-install-1.png
[install 2]: /images/en/osm-data/setting-up-postgresql/postgresql-install-2.png
[install 3]: /images/en/osm-data/setting-up-postgresql/postgresql-install-3.png
[install 4]: /images/en/osm-data/setting-up-postgresql/postgresql-install-4.png
[install 5]: /images/en/osm-data/setting-up-postgresql/postgresql-install-5.png
[install 6]: /images/en/osm-data/setting-up-postgresql/postgresql-install-6.png
[pgadmin3]: /images/en/osm-data/setting-up-postgresql/pgadmin3.png
[pgadmin3 start]: /images/en/osm-data/setting-up-postgresql/pgadmin3-start.png
[postgresql connect]: /images/en/osm-data/setting-up-postgresql/postgresql-connect.png
[enter password]: /images/en/osm-data/setting-up-postgresql/enter-password.png
[new database]: /images/en/osm-data/setting-up-postgresql/new-database.png
[new database form]: /images/en/osm-data/setting-up-postgresql/new-database-form.png
[sql button]: /images/en/osm-data/setting-up-postgresql/sql-button.png
[postgis command]: /images/en/osm-data/setting-up-postgresql/postgis-command.png
[shapefile loader]: /images/en/osm-data/setting-up-postgresql/shapefile-loader.png
[add shapefile]: /images/en/osm-data/setting-up-postgresql/add-shapefile.png
[qgis add postgis button]: /images/en/osm-data/setting-up-postgresql/add-postgis-button.png
[connection settings]: /images/en/osm-data/setting-up-postgresql/connection-settings.png
[your data layer]: /images/en/osm-data/setting-up-postgresql/your-data-layer.png








