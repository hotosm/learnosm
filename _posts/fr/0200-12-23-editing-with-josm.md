---
layout: doc
title: Editing with JOSM
permalink: /fr/beginner/editing-with-josm/
lang: fr
category: beginner
---

Editing with JOSM
=================

In [Chapter 3]({{site.baseurl}}/en/beginner/start-josm/) you installed JOSM and began drawing your first points,
lines, and shapes. You added presets to these objects in order to attach
information about them. By the end, you were able to draw your own map
in JOSM.

Drawing maps in Chapter 3 was an exercise to learn JOSM and learn how to
draw places on the map. But our maps were not accurate, because we had
not yet included location. In the past two chapters we have examined two
tools, GPS and Walking Papers, which allow us to collect actual
locations of places (Generally, GPS receivers determine your location
within +/- 10 meters, so they may not be completely accurate, especially
if you only take one waypoint). These locations are represented by
coordinates.

Drawing a *real* map, that is, a map where all the points, lines, and
shapes are in their proper location, is no different than drawing the
maps we drew in chapter - But now, we will use our GPS points and
tracks, and our Walking Papers, to draw similar maps at their correct
locations on the planet.

In this chapter we will learn how to edit the map on OpenStreetMap and
add our improvements. We’ll learn the basic cycle of mapping on OSM:

**Download** the current map data from OSM

  - [Tour of JOSM]({{site.baseurl}}/en/beginner/editing-with-josm/#a-tour-of-josm)
  - [Download OSM Data]({{site.baseurl}}/en/beginner/editing-with-josm/#download-osm-data)
  - [JOSM Layers]({{site.baseurl}}/en/beginner/editing-with-josm/#josm-layers)

**Edit** it using GPS, Walking Papers, and notes as a guide

  - [Edit]({{site.baseurl}}/en/beginner/editing-with-josm/#edit)
  - [Tags]({{site.baseurl}}/en/beginner/editing-with-josm/#tags)

**Save** changes to OpenStreetMap

  - [Upload Changes]({{site.baseurl}}/en/beginner/editing-with-josm/#upload-changes)
  - [See Your Changes on the Map]({{site.baseurl}}/en/beginner/editing-with-josm/#see-your-changes-on-the-map)
  - [Saving OSM files]({{site.baseurl}}/en/beginner/editing-with-josm/#saving-osm-files)

By the end of this chapter, we will be able to see our additions on the
OSM map.

A Tour of JOSM
--------------

-  First, to start JOSM click on the Start Menu in the lower left
    corner of your computer, and find the program JOSM.

-  Then, load your gpx file and your Walking Paper in JOSM. You don’t
    need to open both, but you can if you want. Refer to the previous
    two chapters if you don’t remember how to open these in JOSM.

-  A quick tour of JOSM’s features: JOSM has many different features.
    The main window in JOSM you are already familiar with- this is the
    map window, and it is where most of the action takes place. Here you
    view, edit, and add to the OpenStreetMap data.

-  To the right of the map window are a series of panels, which each do
    something different. Typically when you first install JOSM several
    panels are shown by default, such as Layers, Properties, and
    Selection. When you select a point, line, or shape in the map
    window, it will be shown in the Selection panel. Information about
    the object will be shown in the Properties panel, and the username
    of the author of that object will be shown in the Authors panel.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_46acf705_en.png)

-  On the left side of JOSM, there are several toolbars, which consist
    of many buttons. At the top of this bar are different buttons which
    change what you can do with your mouse. You are already familiar
    with the first two, the Select tool and the Draw tool. The other
    tools make it easier to zoom in, delete an object, draw a shape, or
    create a line that is parallel to another line.

-  Below these tools are many more buttons. These buttons control what
    you see on the right side of JOSM. Using these buttons you can open
    and close the boxes on the right, such as properties, selection, and
    author.

Download OSM Data
-----------------

-  Remember the cycle of editing OpenStreetMap described in the
    introduction of this chapter?
    **Download**,**edit**,**save**.Before we can edit the
    map, we must download the existing OSM data in our area.

-  When you open your gpx track or Walking Paper, the map window will
    show what you have opened, and will automatically move to the
    correct coordinates. After you open your files, look in the bottom
    left corner of JOSM. You can see the latitude and longitude
    (coordinates) of your mouse cursor.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m58e5f3e7_en.png)

-  Because our map window is already showing the area that we want to
    edit, it is easy to download the OpenStreetMap data for this area.
    Click on “File” in the top left corner of JOSM and click “Download
    from OSM”. This will open up the download window. You can access
    this window more simply by clicking on the download button, shown
    here:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m6f2281c2_en.png)

-  When the download window opens, you should see a map with a pink box
    drawn on it. If you don’t see the map, click on the tab marked
    “Slippy map”.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m1318e890_en.png)

-  The pink box represents the area of the map that we would like to
    download for editing. Unless you have moved the map window since you
    opened your GPS file or Walking Papers, the box should be drawn
    around the correct area. However if you would like to download a
    larger area, you can draw a new box. To draw a new box, click on the
    map, hold your left mouse button down, and drag your mouse to create
    a box. Release the mouse button to finish drawing the box.

-  When you are satisfied with the size and location of the box, click
    “Download” at the bottom of the window. JOSM will get the data for
    this area from OpenStreetMap and open it in your map window for
    editing.

JOSM Layers
-----------

-  Open your GPS file and downloaded data from OpenStreetMap, if you
    haven’t already. You may notice that when you open a file, or add
    Walking Papers, or download from OpenStreetMap, another item is
    added to the Layers panel on the right side of JOSM. Your Layers
    panel may look something like this:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2b7c3b_en.png)

-  Each item in this list represents a different source of data that
    you have open in your map window. In the example above, “Data Layer
    2” is the OpenStreetMap data that we want to edit. “Markers” are the
    waypoints from the GPS, and “30 Juni 201-gpx” is the track from the
    GPS. Finally, “Walking Papers” is the layer created when I added my
    Walking Paper into JOSM. You can add the Bing imagery layer, which
    shows satellite imagery, by clicking “Imagery” on the top menu of
    JOSM and selecting “Bing Sat.”

-  To hide one of these layers, select one of them with your mouse and
    click the Show/Hide button that looks like
    this:![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2e696f_en.png)
    
-  You should see the layer that you selected disappear in the map
    window. Click Show/Hide again, and it will reappear.

-  You can close a layer by selecting it and using the delete
    button:![]({{site.baseurl}}/images/EditingWithJOSM_html_m172543d8_en.png)

-  Lastly, it’s important to know that you can only edit the layer that
    is considered *active* by JOSM. If you are unable to edit the map in
    your map window, it’s probably because you don’t have the correct
    layer set as active. Most layers, such as GPS points, Walking
    Papers, and satellite imagery, can’t be edited. The only layers that
    can be edited are data from OpenStreetMap, which are usually called
    “Data Layer 1”.

-  To make a layer active, select it in the Layers panel, and click on
    the Activate button:![]({{site.baseurl}}/images/EditingWithJOSM_html_de83a77_en.png)

Edit
----

-  The next step is to edit the map and add new items. This is not
    always easy at first, but with practice you will get better and
    better.

-  If you want to move a point, line, or shape, use the
    **select tool**. Click on an object and drag it where it
    should be. This can be used to correct the location of items that
    have been put in the wrong place.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m2eb4096c_en.png)

-  Use the **draw tool** to draw new points, lines, and shapes.
    Describe these objects by selecting from the Presets menu, as you
    did in [Chapter 3]({{site.baseurl}}/en/beginner/start-josm/). 

-  Remember that your GPS points and your Walking Papers don’t
    automatically go into OpenStreetMap. You need to add them to the OSM
    map *digitally*, using the draw tool. But your points, tracks, and
    Walking Papers can be seen in the background as a guide.

-  Let’s assume that you saved a waypoint on your GPS named 030, and
    you wrote in your notebook that 030 is a school. To add this point
    into OpenStreetMap, you should select the draw tool, and
    double-click on top of point 030 in your map window. This will
    create a point. Then go to the Presets menu, and find the preset for
    school. Enter the name of the school and click “Apply Preset”. Do
    the same to add lines and shapes.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_1cb5aeb4_en.png)

Tags
----

-  When you draw a point, line, or shape, it has a location, but no
    information about what it is. In other words, we know **where** it
    is, but not **what** it is. Before now, we have been using items
    from the Presets menu to define **what** it is. The way
    OpenStreetMap knows **what** an object is is by using **tags**.

-  A tag is like a label that you can put on something. For example, if
    I draw a square, it’s only a square. But then I add multiple tags to
    it that describe what it is: this square is a building, the name of
    the building is “Menara Thamrin”, the building is 16 levels high

-  You can add as many tags as you want to an object. Tags are saved as
    pairs of text, called the **keys** and the **values**. In
    OpenStreetMap, the tags written above would in fact be:
    `building = yes, name = Menara Thamrin, building:levels = 16`

-  If you select an object in JOSM, you can see all the tags that are
    attached to it in the Properties panel on the right.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m945ccee_en.png)

### Editing Tags

-  You can add, edit, and delete these tags from this panel. The tags
    are traditionally in English however, so it is often better to use
    the Presets menu. When you add or change tags, such as primary
    highway versus footpath, the style will change according to the tag.

-  To edit an existing object:

-  Select it.

-  Then you can edit the tags in one of two ways: (1) You can use the
Presets menu to open up a form and edit the information, or (2) you can
edit the tags directly in the Properties window on the right. 

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_94da59a_en.png)

### Common Mistake: Tagging nodes when you want to tag lines or polygons

-  When you are adding tags to a node, you select the node and then add
    your tags (or use the presets menu). When you want to add tags to a
    line or polygon, it is important that you select the line, and NOT
    the nodes that make up the line.

-  A common mistake is to use the JOSM select tool to draw a box around
    an object, which causes everything, both the line **and** the nodes
    to be selected, and when you add tags they are applied to the nodes
    as well. Be sure to **only** select lines when you want to add tags
    to them.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_2746cce8_en.png)

-  More information about tags and presets can be found in Intermediate
    Guide Chapter 4: XML and JOSM Presets.

Upload Changes
--------------

-  After you have made a couple of changes to improve the map, let’s
    save those changes to OpenStreetMap. To save the changes, we need to
    be connected to the internet, because we are in fact uploading the
    changes to OpenStreetMap.

-  Click “File” on the top menu, and then click “Upload Data”. This
    will open up the upload window. You can access this window more
    simply by clicking on the upload button, shown here:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_2e194887_en.png)

-  The window that appears shows a list of the objects that you are
    adding and the objects you are modifying or deleting. In the box at
    the bottom you are asked to provide a comment about the changes that
    you are making. Type in here a description of your edits.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_67f320b3_en.png)

-  Click “Upload Changes”.

-  If this is your first time saving changes to OpenStreetMap, you will
    be asked for the username and password that you created in Chapter
    - Enter them in the window that appears. If you check the box in
    this window, your username and password will be saved and you won’t
    need to enter them again in the future. Click “Authenticate”.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m5f20c80_en.png)

-  You will need to wait a few seconds for your changes to be uploaded,
    and then you are done! You have made your first edits to
    OpenStreetMap. You may continue editing to add all your points if
    you wish. Always be sure to upload your changes before you close
    JOSM.

See your changes on the map
---------------------------

-  Open your internet browser and go to [http://openstreetmap.org/](http://openstreetmap.org/)

-  Move the map to the area that you edited.

-  You should see your changes now appearing on the map! If you don’t,
    try pressing CTRL+R to refresh the web page. Sometimes the map
    doesn’t update properly and needs to be reloaded.

-  What if you don’t see your changes? Don’t worry - it may take a few
    minutes for the changes to be shown on the map. Also, check your
    additions in JOSM to make sure that you added them correctly. A good
    general rule is, if your point has an icon in JOSM, then it should
    be seen on the main map at the OpenStreetMap website.

Saving OSM files
----------------

-  Sometimes after you download some OSM data, you may wish to save it
    so that you can edit it offline, and then upload it later when you
    have internet access again.

-  To save an OSM file, make sure that it is the active layer in the
    the Layers panel. Click “File” on the top menu, and click “Save”.
    Choose a location for the file and give it a name. You can also save
    by clicking this button:![]({{site.baseurl}}/images/EditingWithJOSM_html_m3d7a0a33_en.png)

-  You can now close JOSM and your data will be saved. When you want to
    open the file again, simply open JOSM, go to the “File” menu, and
    click “Open...”

Summary
-------

Now that you’ve seen how to add to OpenStreetMap, what’s next? Remember
that OSM maps get better and better over time. Every time you make
improvements to the map, those changes remain and the data gets better
and better. And just as you can improve other people’s work, so they can
improve your work too.

In the final chapter we will step away from JOSM, and look at some
interesting projects that use OpenStreetMap data, and learn how you can
continue learning about OSM.