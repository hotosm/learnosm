===============================
Editing OpenStreetMap with JOSM
===============================

Introduction
------------

In Chapter 3 you installed JOSM and began drawing your first points, lines, and
shapes. You added presets to these objects in order to attach information about
them. By the end, you were able to draw your own map in JOSM.

Drawing maps in Chapter 3 was an exercise to learn JOSM and learn how to draw
places on the map. But our maps were not accurate, because we hadn't yet
included location. In the past two chapters we've examined two tools, GPS and
Walking Papers, which allow us to collect actual locations of places. These
locations are represented by coordinates.

Drawing a real map, that is, a map where all the points, lines, and shapes are
in their proper location, is no different than drawing the maps we drew in
chapter 3. But now, we will use our GPS points and tracks, and our Walking
Papers, to draw similar maps at their correct locations on the planet.

In this chapter we will learn how to edit the map on OpenStreetMap and add our
improvements. We'll learn the basic cycle of mapping on OSM:

#. **download** the current map data from OSM
#. **edit** it using GPS, Walking Papers, and notes as a guide
#. **save** changes to OpenStreetMap

By the end of this chapter, we will be able to see our additions on the OSM
map.

Prepare JOSM
------------

* To start JOSM, click on the Start Menu in the lower left corner of your
  computer, and find the program JOSM.
* Now load your gpx file and you Walking Paper. You don't need to open both,
  but you can if you want. Refer to the previous two chapters if you don't
  remember how to open these in JOSM.

  .. figure:: ../_static/josm_prepare.png
     :align: center
     :width: 500px

Download OSM Data
-----------------

* Remember the cycle of editing OpenStreetMap described in the introduction of
  this chapter? **Download, edit, save.** Before we can edit the map, we must
  download the existing OSM data in our area. 
* When you open your gpx track or Walking Paper, the map window will show what
  you have opened, and will automatically move to the correct coordinates.
  After you open your files, look in the bottom left corner of JOSM. You can
  see the latitude and longitude (coordinates) of your mouse cursor.

  .. figure:: ../_static/josm_lat_lon.png
     :align: center

* Because our map window is already showing the area that we want to edit, it
  is easy to download the OpenStreetMap data for this area. Click on "File" in
  the top left corner of JOSM and click "Download from OSM". This will open up
  the download window. You can access this window more simply by clicking on
  the download button, shown here:

  .. figure:: ../_static/josm_icon_download.png
     :align: center

* When the download window opens, you should see a map with a pink box drawn on
  it. If you don't see the map, click on the tab marked "Slippy map".

  .. figure:: ../_static/josm_slippy_map.png
     :align: center
     :width: 500px

* The pink box represents the area of the map that we would like to download
  for editing. Unless you have moved the map window since you opened your GPS
  file or Walking Papers, the box should be drawn around the correct area.
  However if you would like to download a larger area, you can draw a new box.
  To draw a new box, click on the map, hold your left mouse button down, and
  drag your mouse to create a box. Release the mouse button to finish drawing
  the box.
* When you are satisfied with the size and location of the box, click
  "Download" at the bottom of the window. JOSM will get the data for this area
  from OpenStreetMap and open it in your map window for editing.

Edit
----

* The next step is to edit the map and add new items. This is not always easy
  at first, but with practice you will get better and better.
* If you want to move a point, line, or shape, use the **select tool.** Click
  on an object and drag it where it should be. This can be used to correct the
  location of items that have been put in the wrong place.

  .. figure:: ../_static/josm_tool_select.png
     :align: center

* Use the **draw tool** to draw new points, lines, and shapes. Describe these
  objects by selecting from the Presets menu, as you did in Chapter 3.
* Remember that your GPS points and your Walking Papers don't automatically go
* into OpenStreetMap. You need to add them to the OSM map digitally, using the
  draw tool. But your points, tracks, and Walking Papers can be seen in the
  background as a guide.
* Let's assume that you saved a waypoint on your GPS named 030, and you wrote
  in your notebook that 030 is a school. To add this point into OpenStreetMap,
  you should select the draw tool, and double-click on top of point 030 in your
  map window. This will create a point. Then go to the Presets menu, and find
  the preset for school. Enter the name of the school and click "Apply Preset".
  Do the same to add lines and shapes.

  .. figure:: ../_static/josm_gps_trace.png
     :align: center
     :width: 350px

Upload Changes
--------------

* After you have made a couple of changes to improve the map, let's save those
  changes to OpenStreetMap. To save the changes, we need to be connected to the
  internet, because we are in fact uploading the changes to OpenStreetMap.
* Click "File" on the top menu, and then click "Upload Data". This will open up
  the upload window. You can access this window more simply by clicking on the
  upload button, shown here:

  .. figure:: ../_static/josm_icon_upload.png
     :align: center

* The window that appears shows a list of the objects that you are adding and
  the objects you are modifying or deleting. In the box at the bottom you are
  asked to provide a comment about the changes that you are making. Type in
  here a description of your edits.

  .. figure:: ../_static/josm_upload_comments.png
     :align: center
     :width: 500px

* Click "Upload Changes".
* If this is your first time saving changes to OpenStreetMap, you will be asked
  for the username and password that you created in Chapter 2. Enter them in
  the window that appears. If you check the box in this window, your username
  and password will be saved and you won't need to enter them again in the
  future. Click "Authenticate".

  .. figure:: ../_static/josm_authentication.png
     :align: center

* You will need to wait a few seconds for your changes to be uploaded, and then
  you are done! You have made your first edits to OpenStreetMap. You may
  continue editing to add all your points if you wish. Always be sure to upload
  your changes before you close JOSM.

See Your Changes on the Map
---------------------------

* Open your internet browser and go to `openstreetmap.org <http://www.openstreetmap.org/>`_.
* Move the map to the area that you edited.
* You should see your changes now appearing on the map! If you don't, try
  pressing CTRL+R to refresh the web page. Sometimes the map doesn't update
  properly and needs to be reloaded.
* What if you don't see your changes? Don't worry – it may take a few minutes
  for the changes to be shown on the map. Also, check your additions in JOSM to
  make sure that you added them correctly. A good general rule is, if your
  point has an icon in JOSM, then it should be seen on the main map at the
  OpenStreetMap website.

Summary
-------

Now that you've seen how to add to OpenStreetMap, what's next? Remember that
OSM maps get better and better over time. Every time you make improvements to
the map, those changes remain and the data gets better and better. And just as
you can improve other people's work, so they can improve your work too.

In the next chapter, we will go over some more advanced JOSM techniques. We'll
learn how to draw better shapes, how to use different tools, and what all the
buttons and windows are surround the map!
