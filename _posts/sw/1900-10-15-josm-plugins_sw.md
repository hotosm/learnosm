---
layout: doc
title: JOSM Plugins
permalink: /sw/josm/josm-plugins/
lang: sw
category: josm
---

 Plugins za JOSM
============

Kifungu hiki kya LearnOSM kipo katika mchakato wa kutafsiriwa. Kama ungependa kusaidia katika kutafsiri tovuti hii, 
tafadhali tazama [CONTRIBUTING.md](https://github.com/hotosm/learnosm/blob/gh-pages/CONTRIBUTING.md). 

> Huu muongozo unaweza kupakuliwa kama [josm-plugins_sw.odt](/files/josm-plugins_sw.odt) au [josm-plugins_sw.pdf](/files/josm-plugins_sw.pdf)  
> Reviewed 2015-07-14  

Jinsi ulivyokuwa mtaalamu katika kutumia mbinu mbalimbali kuhariri, unaweza ukataka kutumia vifaa vingine vya JOSM kuongeza ujuzi wako wa kutengeneza ramani. JOSM inakuwezesha kuweka plugins mbalimbali , ambazo zinaonyesha kazi za zaidi kwa software.

Katika hii sehemu tutajifaunza jinsi ya kuweka plugins, na baadhi ya plugins za muhimu zinazopatikana.


Kuweka Plugins
Kuweka Plugins
-------------------
-   Muda wowote unaotaka kuweka plugin mpya , nenda **Edit \> Preferences**
    na bonyeza katika **Plugins** tab.

![Plugins][]

-   Kama hutaona listi ya plugin zilizopo, bonyeza **Download List**.
-   Kuweka plugin kiurahisi unaweza kuangalia kisanduku mbele yake na bonyeza OK chini .
-   Mwisho, baadhi ya matoleo ya JOSM inatakiwa urestart JOSM pale unapoweka plugins mpya.

Baadhi ya plugins zinazotumika:

1.  **buildings_tools:** Kama umechora majengo mengi, hii itafanya kazi iwe rahisi na haraka.

2.  **DirectUpload:** Kama umekusanya GPS tracks nyingi na ungependa kuzihifadhi katika database ya OSM, hii plugin inafanya iwe rahisi.

3.  **editgpx:**
    Kama unataka kuupload GPS tracks kutoka kwenye kifaa cha  Garmin, unahitaji hii plugin. OSM haitakubali GPS tracks amabzo zimehifadhiwa katika kifaa cha nje cha kuhifadhi taarifa cha Garmin, lakini hii plugin inaweza kurekebisha mafaili wa ajili ya kuupload.

4.  **fieldpapers:**
    Hii plugin inakusaidia kuona scanned Field Papers katika JOSM. 

5.  **imagery_offset_db:**
    Hii plugin inakusaidia kushirikiana na watengeneza ramani wengine ambao wamekuta picha ya anga imehama kidogo. Hili swala limeelezewa zaidi katika sura inayofuata.

6.  **mirrored_download:**
    Kwa hii plugin unaweza kupakua eneo kubwa la taarifa katika OSM kwa ajili ya kuhariri.

7.  **print:**
    Weka kifaa cha printi , kama ikitokea unataka kutengeneza eneo kwa haraka, amabalo halihitaji kuonekana zuri sana.

8.  **utilsplugin2:**
    Ongeza vifaa vingine na menus ya JOSM kwa watumiaji wazoefu. Hii itaelezewa kiundani katika [sura inayofuata](/en/josm/more-tools)





<!-- The remainder of this section needs to be edited, and/or moved to other sections,
    commenting it out for now


- [Mirrored Download]({{site.baseurl}}/en/beginner/josm-plugins/#mirrored-download) (allows you to download more OSM data)
- [Direct Upload]({{site.baseurl}}/en/beginner/josm-plugins/#direct-upload) (allow you to upload GPS tracks)
- [Editgpx]({{site.baseurl}}/en/beginner/josm-plugins/#edit-gpx) (allows you to edit GPX files)
- [Print]({{site.baseurl}}/en/beginner/josm-plugins/#print)

We also recommend downloading these plug-ins, which are covered in other
chapters:

- FieldPapers
- Buildings\_tool
- Utilsplugin2

![Restart JOSM][]

Try clicking “Restart JOSM” and watch the software reload on its own.

Mirrored Download
-----------------

![Mirrored Download][]

__Mirrored Download__ will make downloading OSM
data for editing faster. Instead of getting the data from the central
OSM server, it allows us to get it from a “mirror,” which is an exact
replica of the data but in a location that is faster to access it.

Once the plugin is installed (and you have restarted JOSM), you will see
another new entry on the File Menu, “Download from OSM mirror...”

![Download from OSM Mirror][]

Downloading data is exactly the same process you learned before, but it
can be much faster!

Direct Upload
-------------

![Direct Upload][]

__DirectUpload__ uploads GPX tracks directly to OSM
through JOSM (more information is available in the **Appendix**). Once
the plug-in is installed (and you have restarted JOSM), you will see
anew “Upload traces” item under the “Tools” Menu.

![Upload Traces Item][]

When you click on the “Upload Traces” button this window will pop up:

![Upload Traces Window][]

Put keywords (seperated by commas without spaces) that relate to your
GPS trace in the "Tags (comma delimited)" box. For example,
"Country,region,city,neighborhood,road name". Next, provide a
description of your tags. A drop-down list will allow you to reuse
former tags and descriptions. Lastly, choose what type of visibility you
would like your track to have. There are four levels from private to
identifiable (all explained below in the [Appendix]{{site.baseurl}}/learnosm/en/).

Click on Upload Trace. If you are not connected to your OSM account, you
will have to do it now.

Once successfully uploaded, the Text area will display an "OK" status
and the “Upload Trace” button will not be clickable. More information
about this plug-in and GPS uploads is available in the [Appendix]({{site.baseurl}}/learnosm/en/).

Edit gpx
--------

![Edit Gpx][]

**EditGpx** allows you to prepare recorded GPX tracks
before uploading them to OSM. Often tracks have parts that you would
like to remove. Therefore, this plug-in delete points of tracks in a
speedy manner and creates anonymity for timestamps of a track.

Once the plug-in is installed (and you have restarted JOSM), you will
see this new tool in the tool bar on the left.

![Edit Gpx Tool Icon][]

1. Open a GPX file in JOSM!

![Open GPX File][]

2. Press the new button in the left menu bar 

![Edit Gpx Tool Icon][]

and the GPX data will be imported to a new EditGpx layer. Every
node of the track will be highlighted in yellow.

![GPX Nodes All][]

3. Now mark the points (by clicking) or areas (by drawing a rectangle on
their extent) that you would like to delete. The yellow highlighting
should disappear.

![GPX Nodes Selected][]

4. Right click on the layer name and choose \<\<Convert to GPX layer\>\> in
the \<\<Context\>\> menu.

5. Now you can save the normal GPX layer as a file or upload the data to
OSM (eg by using the
plugin [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)).

Print
-----

![Print Plugin][]

If you want a quick an easy way to print a map while you are editing in
JOSM, install the __print plugin__. Although you won’t be able to
do anything stylistic with your printout, this is a good way for a quick
and easy print. Once the plugin is installed, a new item will be
available on the File menu called “Print...”

![Print Menu Item][]

Clicking this will open the Print Dialog, which looks like this:

![Print Dialog][]

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

![More Info Link][]

Good luck!

Appendix
--------

DirectUpload Details
--------------------

![Direct Upload Plugin][]

Adding your GPS tracks and waypoints to the OSM Server is useful for
many reasons.
__(If you do not want your GPX points to be seen by anyone else you do not have to read this section.  You can simply display your GPX files from JOSM, and therefore store them locally).
First of all, GPS tracks are the most useful way of collecting and
georeferencing objects in OSM. See [Aerial Imagery](/en/josm/aerial-imagery/)
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
"Tools" and click "Upload traces". Describe the GPX file,
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

![DirectUpload Traces Options][]

Uploading GPS Traces Online
---------------------------

1. Go
to [http://www.openstreetmap.org/](http://www.openstreetmap.org/) and log in.

2. Select "GPS Traces" found on the left banner.

![Left Banner][]

3. Select
[upload a trace](http://www.openstreetmap.org/trace/create).
Here, you can also  **See just your traces** to review previous GPS tracks.  

4. Find your file in "Choose File". Label it in the Description
box, give it some Tags, and chose what type of Visibility it will have.
If you have many .gpx files you can compress them into a zip archive and
upload it. It will be treated as one large gpx file and only one entry
on the trace list will be created. 

![Online Upload Traces Options][]

5. Click *Upload*.

  The file will be uploaded to the OSM server, where it will join the
queue of files waiting to be inserted into the database.

[Plug Icon]: /images/josm/josm-plugins_image00_plug-icon.png
[Restart JOSM]: /images/josm/josm-plugins_image01_restart-josm.png
[Mirrored Download]: /images/josm/josm-plugins_image02_mirrored_download.png
[Download from OSM Mirror]: /images/josm/josm-plugins_image03_download-from-osm-mirror.png
[Direct Upload]: /images/josm/josm-plugins_image04_direct-upload.png
[Upload Traces Item]: /images/josm/josm-plugins_image05_upload-traces-item.png
[Upload Traces Window]: /images/josm/josm-plugins_image06_upload-traces-window.png
[Edit Gpx]: /images/josm/josm-plugins_image07_edit-gpx.png
[Edit Gpx Tool Icon]: /images/josm/josm-plugins_image08_edit-gpx-tool-icon.png 
[Open GPX File]: /images/josm/josm-plugins_image09_open-gpx-file.png
[GPX Nodes All]: /images/josm/josm-plugins_image10_gpx-nodes-all.png
[GPX Nodes Selected]: /images/josm/josm-plugins_image11_gpx-nodes-selected.png
[Print Plugin]: /images/josm/josm-plugins_image12_print-plugin.png
[Print Menu Item]: /images/josm/josm-plugins_image13_print-menu.png
[Print Dialog]: /images/josm/josm-plugins_image14_print-dialog.png
[More Info Link]: /images/josm/josm-plugins_image15_more-info-link.png
[Direct Upload Plugin]: /images/josm/josm-plugins_image16_direct-upload-plugin.png
[DirectUpload Traces Options]: /images/josm/josm-plugins_image17_directupload-traces.png
[Left Banner]: /images/josm/josm-plugins_image18_left-banner.png
[Online Upload Traces Options]: /images/josm/josm-plugins_image19_online-upload-traces.png

-->


[Plugins]: /images/josm/josm-plugins_image00_plug-icon.png

