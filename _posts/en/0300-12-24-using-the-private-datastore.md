---
layout: doc
title: Using The Private Datastore
permalink: /en/intermediate/using-the-private-datastore/
lang: en
category: intermediate
---

Using the Private Datastore
===========================

Introduction
------------

OpenStreetMap data is open and available to anyone who would like to
access it. However, there may be times when you want to use
OpenStreetMap to collect data, but you would like to keep some
attributes stored in a private database. For this, HOT has developed an
additional tool for JOSM known as the SDS (Separate Data Store).

The SDS allows you to create maps and add data into JOSM the same as
always, but when you upload your edits, public data will be saved to the
OpenStreetMap database, and private data will be saved separately to the
HOT Datastore.

![]({{site.baseurl}}/images/en_int_ch8_image06.png)

How the SDS Plugin works with JOSM
----------------------------------

Data uploaded to the private HOT Datastore is only accessible to people
who have an account at [datastore.hotosm.org](http://datastore.hotosm.org). This chapter is
designed for people who already have an account and desire to store
private geospatial information, such as household income, personal
health care data, or the location of gold mines. If you do not have a
HOT Datastore account or if you want to set up your own private
datastore server please contact Kate Chapman (k8chapman@gmail.com).

**Installing the SDS plugin**

This plug-in allows private data to be streamlined into the private data
store. The newest version of JOSM is required for the SDS plugin to
run. (If you do not have a recent version of JOSM, download and install
it from [http://josm.openstreetmap.de/](http://josm.openstreetmap.de/).
If you cannot install the latest version, go to the Appendix to see how
you can install this plug-in by source). 

- Open the preferences menu in JOSM and go to the plugins tab.

![]({{site.baseurl}}/images/en_int_ch8_image13.png)

- Click “Download List” to ensure that all available plugins are
    listed.
- In the search box, type “sds”.

![]({{site.baseurl}}/images/en_int_ch8_image10.png)

-  Check the box next to the plugin to activate it. You will need to
    restart JOSM.

- If JOSM is open, restart it.

**Using the Plugin**

Editing the map works just the same as before. The only difference is
that when you upload changes, some tags will be automatically saved on
the private datastore, and the rest will be saved directly onto
OpenStreetMap.

- After installing the plugin, the first time you download data you
will be asked for your HOT datastore username and password.

![]({{site.baseurl}}/images/en_int_ch8_image12.png)

- In order to use the plugin, you need to enter your username and
password. To save them, check the box next to “Save user and password.”
- The private datastore is now working. When you upload changes, the
usual tags will be saved to OSM, and special private tags will be
saved to the datastore.

**How It Works**

How does the plugin know which data you want to store on OpenStreetMap
and which data you want to store publicly? Quite simply, it knows
because of the tags. Normal tags go to OpenStreetMap, as always, but
you can use new tags with a special prefix that will be sent to the
private datastore. By default, any tag that begins with the prefix
“hot:” will go to the private datastore. If you open the Preferences
menu you will see a new tab on the bottom for SDS plugin options:

![]({{site.baseurl}}/images/en_int_ch8_image05.png)

There are some basic settings here. By default the server URL is set to
the HOT datastore, and your username and password can be saved here as
well. The line labelled “SDS tag prefix” contains the prefix that will
cause tags to be saved on the private datastore. By default it is
“hot:”

When you create or edit an object on the map, you can apply tags like
this:

![]({{site.baseurl}}/images/en_int_ch8_image07.png)

In this case, the first two tags will be saved on OSM. The third tag,
because it has the prefix hot:will be saved on the private datastore.

You will most likely collaborate with others when using the private
datastore, so you will have a standard list of tags to use for the
specific data your are collecting. These tags can then be made into a
presets menu, which will provide an easy-to-use form for adding both
public and private data.

**Access the Datastore Online**

Just like openstreetmap.org, you can access the online datastore
directly, by visiting [http://training-datastore.hotosm.org/](http://datastore.hotosm.org/) and logging in with your username and password. Try it out by logging in with the test account. Next to email enter
“[training1@test.com](mailto:training1@test.com)” and enter “osm” for
the password.

![]({{site.baseurl}}/images/en_int_ch8_image08.png)

When you have logged in, you can search for objects on the map by tags,
or by finding them on the map. You can edit the data directly through
the website.

Click on “tag search” on the home page to search for a specific object.

![]({{site.baseurl}}/images/en_int_ch8_image03.png)

This will show you information about the object that you searched for:

![]({{site.baseurl}}/images/en_int_ch8_image09.png)

To find an object on the map, click on the Search button in the upper
right corner of the page. Below the map, click “Load OSM Geometries.”

![]({{site.baseurl}}/images/en_int_ch8_image11.png)

You can now click on an object on the map to load the form containing
all of its private data.

![]({{site.baseurl}}/images/en_int_ch8_image00.png)

All major adding, editing and deleting needs to be done in JOSM. The
web interface is very limited in its editing, but it does permit adding
new and editing existing values of objects. The website also allows
users to search for data by keyword and by the specific area that they
are located. It does not allow users to edit, add or delete objects or
keys, as well as delete attributes. On the website, users can only add
and edit attributes to already existing objects. 

**Common Questions**

How do you put more information with complicated relationships into the
server?

Hopefully, In the next few months, this server will be updated to add
multiple relationships (flat database currently). 

How do I save?

Saving the private data is the same as uploading your changes to OSM.
Just remember to use the correct prefix (in our case hot:) with your
private tags, to ensure that they are saved on the private database and
not publicly.

How many users can use the same account? What if I want to add a user?

There is no limit to user accounts. Currently user access is managed by
HOT.

How much data can I keep in the private server?

Plenty.

What is the easiest way to search for specific private data?

When you login to datastore.hotosm.org, you have the option to do a tag
search. This allows you to search for specific tags. If you would like
to do more aggressive searches your best bet is to use QGIS. This
plugin is not developed for rugged queries.

**How do I export data?**

Wait until December when the updated version comes out or your datastore
administrator can set up exports.

Summary
-------

In this chapter we discussed how to install the SDS plugin and how to
use it to save specific data to a private datastore. We have looked at
the private datastore website, and seen how it stores some information
separately. The SDS is a great tool for groups to collect private
information using OpenStreetMap. If you’d like to collect private data,
contact HOT and organize the types of data you’d like to save in a
private datastore.

Appendix
--------

**I. Installing SDS Plugin by Source**

If you are unable to find the “sds” plugin on the Preferences menu, you
may need to install it manually as described here:

- Download the sds plugin by going to [http://kunden.geofabrik.de/03df698c95134f04949eb67ac7ba2195/](http://kunden.geofabrik.de/03df698c95134f04949eb67ac7ba2195/) and clicking on sds.jar
- Click on the Start Menu and type “%APPDATA%” into the search box. Click on the folder named “Roaming.”

![]({{site.baseurl}}/images/en_int_ch8_image04.png)

- In the window that opens, double-click on “JOSM” to open the JOSM program files.
- Double-click on the “plugins” folder to open it.
- Move the sds.jar file into this folder.

**II. Private Data Storage**

The private OSM data is stored in a PostgreSQL database, where it is
linked by OSM object types and IDs. The private data store mimics OSM
data store, but instead of saving and adding information directly to
tags, as OSM does, the SDS works on OSM\_Shadows. OSM\_shadows are
linked to timestamped ¨changeset¨ objects. These “changeset” objects
are linked to “user” objects. The SDS server will show a changeset when
viewed online or in JOSM, which is unique to the OSM main server.

![]({{site.baseurl}}/images/en_int_ch8_image01.png)

Taken from http://github.com/geofabrik

Like in OSM, there are two versions of OSM\_Shadows: current and the
rest. Storing data in this way permits private data history to be saved
under other OSM\_shadows, while the most updated version is saved in the
current OSM\_Shadows table.

Unfortunately, the full history of every edit made and person who made
the edit can only be stored and cannot be retrieved. There is because
there is not an API or web interface to access this information yet.
