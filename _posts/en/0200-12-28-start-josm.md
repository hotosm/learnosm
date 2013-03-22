---
layout: doc
title: Getting Started Editing
permalink: /en/beginner/start-josm/
lang: en
category: beginner
---

Getting Started Editing: JOSM
=============================

In this chapter we will learn step by step how to download and install
JOSM, the Java OpenStreetMap editor. We will change some of the settings
in JOSM to make it easier to use. Then we will open a sample map and
learn some of the basic operations of the software. Remember in chapter
1 when we asked you to draw a map of your town or village? We will
conclude this chapter by drawing your map again, this time digitally.
After this you should have a good understanding of how to draw maps in
JOSM.

Download JOSM
-------------

- If you have a copy of JOSM on a CD or usb flash drive, you can skip
to section 2, Install JOSM.
- If you don’t have JOSM already, or want the newest version, open
your web browser - this may be Firefox, Chrome, Opera, or Internet
Explorer.
- In the address bar at the top of the window, enter the following
text and press Enter:[josm.openstreetmap.de](http://josm.openstreetmap.de)
- You can also find this website by searching for “JOSM”
- The website should look something like this:

  ![]({{site.baseurl}}/images/start_josm_image05_en.png)

- If you have Windows installed on your computer, click “Windows JOSM
  Installer” to download JOSM. If you have a different operating
  system, click on the link for your system. Your download should
  begin. In this chapter we will assume that you are using Windows,
  but the instructions are similar for other operating systems.

Install JOSM
------------

- You may have problems installing JOSM if Java is not already
  installed on your computer. If you have problems in this section,
  try downloading and installing Java. You can download it here:
  [http://www.java.com/en/download/](http://www.java.com/en/download/)
- Find the JOSM install file on your computer. Double-click it to
  begin setup.
- Click ‘OK’, ‘Next’, ‘I Agree’, and ‘Install’. When the installation
  is complete, click ‘Finish’ to launch JOSM for the first time.
  Later, when you want to start JOSM, you can do so by clicking on the
  Start Menu in the lower left corner of your computer, and clicking
  the program JOSM.
- You may see a window pop up that asks if you want to update the
  software.  You don’t need to update it since it is new.  Press the
  button that says “Cancel.”  If you don’t ever want to see this
  message again, check the box at the bottom before pressing “Cancel.”
- When JOSM starts, it will look something like this:

  ![]({{site.baseurl}}/images/start_josm_image08_en.png)

Change JOSM Settings
--------------------

Before we begin using JOSM, it’s a good idea to change some of the
settings so that is will be easier to use. To change the settings,
click “Edit” on the top menu, and then click “Preferences.”

![]({{site.baseurl}}/images/start_josm_image13_en.png)

### Add Bing Imagery

- We want to be able to use satellite imagery when we are making our
  maps, so let’s add that from the Preferences window. On the left
  side of the Preferences window there are different icons for
  different settings. Click on the icon that says “WMS TMS”. You may
  need to click on the down arrow to find it:
  
  ![]({{site.baseurl}}/images/start_josm_image07_en.png)
  
  ![]({{site.baseurl}}/images/start_josm_image02_en.png)

- Click on “Bing Sat”. Then Click “Activate”.

  ![]({{site.baseurl}}/images/start_josm_image11_en.png)

- You should now see “Bing Sat” in the list below the Activate button.

### Add Presets

- If you have been given a file that should be added to the presets
    menu, you can add it now. For example, a presets file might be named
    something like buildings.xml.
- You should still have the Preferences window open. If you don’t,
    click Edit -\> Preferences to open the window.
- On the left side, click the icon that looks like a grid.

  ![]({{site.baseurl}}/images/start_josm_image09_en.png)

- Click the tab at the top that reads “Tagging Presets”.
- In the upper right, press the + button.
- Next to the second box on the right, click the button that looks
    like a folder. Navigate to the presets file you want to add, for
    example, buildings.xml.
- Click OK

### Add Walking Papers Plugin

- Later in this guide we will learn about a tool called Walking
  Papers, which will allow us to print out a map of an area, draw on
  it and take notes, and then load it into JOSM in the background.
  Then we can add our drawings and our notes into OpenStreetMap. Now
  we will add the Walking Papers plugin to JOSM.
- You should still have the Preferences window open. If you don’t,
   click Edit -\> Preferences to open the window.
- On the left side, click the icon that looks like a plug.

  ![]({{site.baseurl}}/images/start_josm_image04_en.png)

- Click the button that says “Download list”. The list will download
   from the internet, and when it is finished you will see a list of
   optional plugins appear in the window.
- In the search box at the top, type “walking”. This will show only
   items in the list that have “walking” in the title.
- Click the checkbox next to the walkingpapers plugin, and press OK at
   the bottom of the window.
- Walking Papers will now be downloaded and installed. Do not click
    “Cancel”.

### Change Language

- JOSM has been translated into many languages. If it has been
  translated into your language, you can change it in the Preferences.
- If you don’t have the Preferences window open, click Edit -\>
  Preferences.
- On the left side, click the icon that looks like a paint can and
  paint brush.
- At the top of the window, click the tab that says “Look and Feel”.
- Choose your language in the dropdown box next to the word
  “Language”.
- Click OK.
  
  ![]({{site.baseurl}}/images/start_josm_image01_en.png)
  
- You need to restart JOSM to save your settings. Click “File” in the
  upper left corner, and Click “Exit” at the bottom of the menu.
- Start JOSM again by going to the Windows Start Menu in the bottom
  left corner. Find JOSM and click on it to start.

Learn Basic Drawing with JOSM
-----------------------------

- Now let’s open up a sample OSM file which we will use to learn the
  basic ways to draw maps with JOSM. Note that this map is not real,
  in that it is not a real map of a real place, so we will not save it
  on OpenStreetMap.
- If you were given a set of files by your instructor, you should
  already have the file we will open, named sample.osm.
- If you don’t have the file sample.osm on your computer, you can
  download it from the internet. Open your internet browser. In the
  address bar at the top of the window, enter the following text:
  [http://www.learnosm.org/files/](http://www.learnosm.org/files/)
- With your mouse, right click on the file called sample.osm, and click
“Save Link As...” Choose a location on your computer to save the file.
- Now let’s open the sample map file in JOSM. Open JOSM. Click the
  “Open” button in the upper left.

  ![]({{site.baseurl}}/images/start_josm_image12_en.png)

- Find the file sample.osm. Click on it, and then click “Open”.
- You should now see a sample map, similar to this:

  ![]({{site.baseurl}}/images/start_josm_image03_en.png)

### Basic Operations

- To move the map left or right, up or down, hold your right mouse
  button down, and move your mouse.
- There are several ways to zoom in and out of the map. If you have a
  mouse, you can use your scroll wheel to zoom in and out. If you are
  using a laptop and don’t have a mouse, you can zoom in and out using
  the scale bar in the upper left of the map window. Drag the bar left
  and right by holding your left mouse down and moving the bar left or
  right with your mouse.

  ![]({{site.baseurl}}/images/start_josm_image14_en.png)

-  Look at the sample map. There a few different types of objects here.
   There is a river, a forest, some buildings, several roads, and a
   couple of shops. To select an object, click on it with your left
   mouse button.

### Points, Lines, and Shapes

- As you click different objects on the sample map, notice that there
  are three different types of objects on the map. There are points,
  lines, and shapes.
- Points are a single location, represented by symbols. On this sample
  map, there are two points, a clothing shop and a market. The
  clothing shop is represented by a shirt symbol, and the market is
  represented by a shopping cart.
- There are several lines on the map as well, which represent roads.
  If you look closely you will see that within the lines, there are
  points as well. These points don’t have any symbols or other
  information associated with them, but they help to define where the
  line is located.
- Lastly, there are numerous shapes on the sample map, representing
  different places - a forest, a river, and buildings. A shape
  generally represents an area, like a field or a building. A shape is
  exactly like a line - the only difference is that the line begins at
  the same point where it ends.
- You may notice that when you select an object, a list appears to the
  right of the map in a window called “Properties”. These are known as
  tags. Tags are information that is tied to a point, line or shape
  that describes what it is. We’ll learn more about tags in Chapter 7,
  Advanced Editing. For now all you need to know is that this
  information helps describe whether our object is a forest, a river,
  a building, or something else.
- Think about drawing a map by hand, and how you are also drawing
  points, lines, and shapes. What other places are best represented by
  points? Lines? Shapes?

### Changing Objects

- Select the forest on the left side of the map. Be sure to click on
  the line around the forest, not one of the points on the line. Now
  hold your left mouse button down and drag your mouse. You should be
  able to move the forest to a new location on the map.
- Click on one of the points on the line around the forest. Hold your
  left mouse button down and drag your mouse. You should be able to
  move the point. This is how you can change the shape of an object,
  or move a point.

### Drawing

- On the left side of a JOSM is a column of buttons. Many of these
  buttons open new windows on the right side that provide more
  information about the map. The most important buttons, however, are
  at the top of these column. These buttons change what you can do
  with your mouse.
- The top four buttons in this column are the most important. They
  allow you to:

  1.  Select
  2.  Draw
  3.  Zoom in
  4.  Delete

- Until now, you have been using the Select tool, which looks like
  this:

  ![]({{site.baseurl}}/images/start_josm_image00_en.png)

- Before you draw, you need to make sure that nothing is selected.
  Click in the black space on the map, where it is empty, to make sure
  nothing is selected.
- Click on the second button, the Draw tool.

  ![]({{site.baseurl}}/images/start_josm_image10_en.png)

- Find an empty area on the map, and double-click with your mouse.
  This will draw a single point.
- To draw a line, single-click with your mouse. Move your mouse and
  click again. Continue until you are happy with your line. To end the
  line, double-click your mouse.
- Draw a shape the same way that you draw a line, but finish the shape
  by double-clicking on the point where you started the line.

### Add Presets

- Now we know how to draw points, lines and shapes, but we still
  haven’t defined what they represent. We want to be able to say that
  our points are shops, schools, or something else, and whether our
  shapes are fields, buildings, or something else.
- Click on the Select tool, in the column of buttons on the left.

  ![]({{site.baseurl}}/images/start_josm_image00_en.png)

- Select one of the objects that you drew with the Draw tool. On the
  top menu, click “Presets”. Move your mouse through the sub-menu to
  the type of location you would like to define.
- When you click on a preset, a form will pop up asking you for more
  information. You do not have to fill in every field, but you may
  wish to add some of the important fields, such as the name of the
  object.
- When you are finished entering the information, click “Apply
  Preset”. If everything went well, your point, line, or shape should
  change colors or show a symbol. This is because you have defined
  what it is.

Draw Your Own Map
-----------------

- Now let’s draw a map in order to practice the techniques you have
  learned. You may wish to redraw the map that you drew on paper in
  Chapter 1.
- Drag the map away from the sample map. Hold the right mouse button
  and drag your mouse, until you have a nice empty area to draw on.
- Use the Draw tool to create points, lines, and shapes. Describe what
  your objects are by selecting from the Presets menu.
- When you are finished, you should have your own map, similar to the
  sample map that we opened in sample.osm.

Summary
-------

Excellent! If all went well you have learned how to setup JOSM on your
computer, and the basic tools for drawing maps. In the next two
chapters, you will learn how to use GPS and Walking Papers to map your
town or village. In Chapter 6, we will return to JOSM and using the
information we collected, we will add objects to OpenStreetMap.
