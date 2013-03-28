---
layout: doc
title: JOSM Plugins
permalink: /en/beginner/josm-plugins/
lang: en
category: beginner
---

JOSM Plugins and Preferences
============================

As you become more advanced in your editing techniques, you may start
wondering how you can find additional JOSM features to improve your
mapping skills. JOSM allows you to install numerous plugins, which are
extra tools that allow you to complete specific tasks in the software.
You have already installed several plugins if you have been following
these tutorials. In the preceding chapter, you installed a plugin that
allows you to use the SDS (Separate Data Store). Prior to that, you
installed a plugin to use Walking Papers. There are many different
plugins available in JOSM and we will cover some of the most useful ones
in this chapter.

![plug]({{site.baseurl}}/images/plugins_html_m76fc73bd_en.png)

Any time you want to install a new plugin, go to Edit --\> Preferences
and click on the “Plugins” tab. If you don’t see a list of available
plugins, click “Download List.” You can install any plugin by checking
the box next to it and clicking OK down at the bottom. When you install
a new plugin, you will need to restart JOSM. By now you must be tired of
restarting JOSM every time you change the settings. Luckily, our first
plugin is made to restart JOSM for you!

Recommended Plug-ins:

- [Restart]({{site.baseurl}}/en/beginner/josm-plugins/#restart) (inserts ´restart´ button)
- [Mirrored Download]({{site.baseurl}}/en/beginner/josm-plugins/#mirrored-download) (allows you to download more OSM data)]
- [Direct Upload]({{site.baseurl}}/en/beginner/josm-plugins/#direct-upload) (allow you to upload GPS tracks)]
- [Editgpx]({{site.baseurl}}/en/beginner/josm-plugins/#edit-gpx) (allows you to edit GPX files)]
- [Print]({{site.baseurl}}/en/beginner/josm-plugins/#print)

We also recommend downloading these plug-ins, which are covered in other
chapters:

- Walking Papers
- Buildings\_tool
- Utilsplugin2

Restart
-------

![restart]({{site.baseurl}}/images/plugins_html_57cb1b84_en.png)

__Restart__ does just what it says. It adds an item in
the File menu that tells JOSM to restart. This can save you time when
you are changing settings and need to restart the software often. But
guess what! The plugin won’t be activated until you restart, so first
you will need to restart JOSM manually. Once you have done this, you
will see the new item on the File menu.

![]({{site.baseurl}}/images/plugins_html_m6d2d20a9_en.png)

Try clicking “Restart JOSM” and watch the software reload on its own.

Mirrored Download
-----------------

![]({{site.baseurl}}/images/plugins_html_m2c477766_en.png)

__Mirrored Download__ will make downloading OSM
data for editing faster. Instead of getting the data from the central
OSM server, it allows us to get it from a “mirror,” which is an exact
replica of the data but in a location that is faster to access it.

Once the plugin is installed (and you have restarted JOSM), you will see
another new entry on the File Menu, “Download from OSM mirror...”

![]({{site.baseurl}}/images/plugins_html_1f3d8d84_en.png)

Downloading data is exactly the same process you learned before, but it
can be much faster!

Direct Upload
-------------

![]({{site.baseurl}}/images/plugins_html_m37f530e4_en.png)

__DirectUpload__ uploads GPX tracks directly to OSM
through JOSM (more information is available in the **Appendix**). Once
the plug-in is installed (and you have restarted JOSM), you will see
anew “Upload traces” item under the “Tools” Menu.

![]({{site.baseurl}}/images/plugins_html_m53ca88fd_en.png)

When you click on the “Upload Traces” button this window will pop up:

![]({{site.baseurl}}/images/plugins_html_2e01a9a7_en.png)

Put keywords (seperated by commas without spaces) that relate to your
GPS trace in the \<\<Tags (comma delimited)\>\> box. For example,
\<\<Country,region,city,neighborhood,road name\>\>. Next, provide a
description of your tags. A drop-down list will allow you to reuse
former tags and descriptions. Lastly, choose what type of visibility you
would like your track to have. There are four levels from private to
identifiable (all explained below in the [Appendix]{{site.baseurl}}/learnosm/en/).

Click on Upload Trace. If you are not connected to your OSM account, you
will have to do it now.

Once successfully uploaded, the Text area will display an "OK" status
and the “Upload Trace” button will not be clickable. More information
about this plug-in and GPS uploads is available in the [Appendix]({{site.baseurl}}/learnosm/en/).

edit gpx
--------

![]({{site.baseurl}}/images/plugins_html_m1d1170b2_en.png)

**EditGpx** allows you to prepare recorded GPX tracks
before uploading them to OSM. Often tracks have parts that you would
like to remove. Therefore, this plug-in delete points of tracks in a
speedy manner and creates anonymity for timestamps of a track.

Once the plug-in is installed (and you have restarted JOSM), you will
see this new tool ![]({{site.baseurl}}/images/plugins_html_42e55708_en.png) in the tool bar on
the left.

1. Open a GPX file in JOSM![]({{site.baseurl}}/images/plugins_html_3fabdc1a_en.png)

2. Press the new button ![]({{site.baseurl}}/images/plugins_html_42e55708_en.png) in the left
menu bar and the GPX data will be imported to a new EditGpx layer. Every
node of the track will be highlighted in yellow.![]({{site.baseurl}}/images/plugins_html_m3f86e83d_en.png)

3. Now mark the points (by clicking) or areas (by drawing a rectangle on
their extent) that you would like to delete. The yellow highlighting
should disappear.![]({{site.baseurl}}/images/plugins_html_m7e01ae1f_en.png)

4. Right click on the layer name and choose \<\<Convert to GPX layer\>\> in
the \<\<Context\>\> menu.

5. Now you can save the normal GPX layer as a file or upload the data to
OSM (eg by using the
plugin [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)).

Print
-----

![]({{site.baseurl}}/images/plugins_html_m66e7a0a9_en.png)

If you want a quick an easy way to print a map while you are editing in
JOSM, install the __print plugin__. Although you won’t be able to
do anything stylistic with your printout, this is a good way for a quick
and easy print. Once the plugin is installed, a new item will be
available on the File menu called “Print...”

![]({{site.baseurl}}/images/plugins_html_mbd3c18f_en.png)

Clicking this will open the Print Dialog, which looks like this:

![]({{site.baseurl}}/images/plugins_html_49f16afc_en.png)

Here you can change your printer settings. If you don’t see anything on
the page, check the box next to “Map Preview” on the right. Zoom in or
out on the map by changing the number in the “Scale” box. Increase the
resolution by changing the number next to “ppi”. When you have finished
editing the settings, click “Print.”

Summary
-------

These are some useful plugins that are available for JOSM. Feel free to
continue exploring the many other plugins. As you have already seen, the
Preferences menu has a short description of each plugin, and you can
open a web page with more information by clicking on the “More info...”
link next to each.

![]({{site.baseurl}}/images/plugins_html_17ea8a4b_en.png)

Good luck!

Appendix
--------

DirectUpload Details
--------------------

![]({{site.baseurl}}/images/plugins_html_m7e14a056_en.png)

Adding your GPS tracks and waypoints to the OSM Server is useful for
many reasons.
__(If you do not want your GPX points to be seen by anyone else you do not have to read this section.  You can simply display your GPX files from JOSM, and therefore store them locally)._
First of all, GPS tracks are the most useful way of collecting and
georeferencing objects in OSM.
(See[](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Chapter](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[6.5:](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Aerial](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Imagery](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Considerations](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit))
GPS units have greater accuracy than satellite imagery and therefore are
a useful tool for checking how offset imagery may be. Using many GPS
tracks (the greater the number of tracks the greater the ability to
determine geolocation accuracy) allows you to determine if background
imagery may be misaligned.

Uploading tracks to the server permits greater sharing of information.
It allows people who do not have access to the field, simply because
they do not live in that area or they do not have access to a GPS
devices, to help with digitizing. There are two ways to upload your
traces: 1) JOSM Plugin or 2) on the main OSM website.

> Note: GPS waypoints cannot be uploaded to the OSM database directly.
> However, they can be converted to tracks and then be uploaded temporarily,
> for example, so they can be displayed as background objects in Potlatch.

After you have opened your GPX file in JOSM and clicked Go to
\<\<Tools\>\> and click \<\<Upload traces\>\>. Describe the GPX file,
write some tags, and visibility. For visibility, you can choose whether
private, trackable, public or identifable.

1.  **Identifiable**: Your trace will be shown publicly in Your
    GPS**traces and in the public GPS traces list. Other users can
    download the raw trace and connect it with your username. Timestamps
    of the tracks points will also be available through the public GPS
    API.

2.  **Public**: Your trace will be shown publicly in Your GPS**traces
    and in the public GPS traces list. Other users are still able to
    download the raw trace from the public trace list and any timestamps
    contained within. However, data shown in the API does not reference
    your trace page, nor are the timestamps available, though the points
    are chronically ordered.

1.  **Trackable**: The trace will **not** show up in any public
    listings, but the trackpoints will still be available through the
    public GPS API **with timestamps**. Other users will be able
    to download the trackpoints but these will not be associated with
    you.

2.  **Private**: The trace will **not** show up in any public
    listings. Trackpoints will be available in timeline order through
    the public GPS API **without timestamps**.

![]({{site.baseurl}}/images/plugins_html_2009cd0_en.png)

Uploading GPS Traces Online
---------------------------

1. Go
to [http://www.openstreetmap.org/](http://www.openstreetmap.org/) and log in.

2. Select \<\<GPS Traces\>\> found on the left banner.![]({{site.baseurl}}/images/plugins_html_32e7d3be_en.png)

3. Select
[upload a trace](http://www.openstreetmap.org/trace/create).
Here, you can also  **See just your traces** to review previous GPS tracks.  

4. Find your file in \<\<Choose File\>\>. Label it in the Description
box, give it some Tags, and chose what type of Visibility it will have.
If you have many .gpx files you can compress them into a zip archive and
upload it. It will be treated as one large gpx file and only one entry
on the trace list will be created. ![]({{site.baseurl}}/images/plugins_html_m63dc490_en.png)

5. Click *Upload*.

  The file will be uploaded to the OSM server, where it will join the
queue of files waiting to be inserted into the database.
