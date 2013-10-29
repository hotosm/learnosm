---
layout: doc
title: Getting Satellite Images into JOSM
permalink: /en/editing/adding-orbview-imagery-in-josm/
lang: en
category: editing
---

# ORBVIEW 3: Getting Satellite Images to JOSM

## Introduction

        Sometimes it can be difficult to digitize or trace buildings and
roads in JOSM because the BING imagery is unclear-- either from poor
resolution or cloud coverage.  This problem can be overcome by using
Public Domain imagery.   In order for Windows users to import imagery
into JOSM we need to add more memory. In this chapter, we will be learn
how to download free Orbview imagery and use it in JOSM:

I. Add JOSM Memory

​II. Download ORBVIEW Imagery

​III. Add Imagery via ¨ImportImage¨ Plugin

## Adding JOSM Memory

        Before using Orbview Imagery in JOSM, it is necessary to add
memory.  If this is not done, then you might end up with an error
message like this:

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image13.png)

The display screen that arises from insufficient memory in JOSM

This occurs because the memory allocated for JOSM is limited to 494 MB.
 In order to add satellite imagery you will need more than this amount
of memory.  It is a bit complicated, but we will expand JOSM´s memory:

1. Look for a file named "josm-tested.jar" in program files\> JOSM\>
	"josm-tested.jar"OR "josm-latest.jar"(On some computers it may be named
	"josm-latest.jar" because you installed a more recent edition of JOSM).

	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image18.png)

	Look for the Executable Jar File called Josm-tested.jar or
	Josm-latest.jar

2. Create a shortcut to the "josm-tested.jar" file by right clicking
	and then selecting ¨create shortcut¨. Drag the shortcut to the desktop.

3. Next, look for the location of the "java.exe" by typing "Java" in
	the Start Menu, right click\> Open File Location

	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image12.png)

	If you cannot find it using the methods above, then you can go to **C: \\
	Windows \\ System32** to find the java.exe file:

	![]({{site.baseurl}}/images/en/en_int_ch3_image21.png)

4. Right click on the shortcut "josm-tested" on your desktop\> click
	Properties.

5. In the option "target" type **C: \\ WINDOWS \\ system32 \\ java.exe
	[space]-jar [space]-Xmx1g [space]"C: \\ Program Files \\ JOSM \\
	josm-tested.jar"** (Note: The [space] is intended spacebars.  Also, you
	may need to type "josm-latest.jar" instead of "josm-tested.jar".)

	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image16.png)

6. If you succeed, the JOSM application will appear on your screen with the
	Command line in the background: ![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image23.png)

	This is the display that you should get to indicate that you have
	successfully added more memory to JOSM.

You have successfully added more memory to JOSM.

## Downloading OrbView-3 Imagery

OrbView 3, which was launched in 2003 by ORIMAGE, acquired up to
210,000 km2 of imagery per day until April 23, 2007.  Currently, a
database of its imagery is found on the USGS earth explorer site.  The
panchromatic (black and white) images have a spatial resolution of 1
meter, while the multi-spectral images have a four meter resolution
(most of the time this is not offered).   The images were taken at an
altitude of 470 km.  Though Orbview 3 imagery is outdated (2003 to
2007),  its images are of good resolution and therefore are still useful
for tracing roads and gaining a basic idea of the infrastructure in an
area.

### A. Set up an account

​Visit [http://earthexplorer.usgs.gov/](http://earthexplorer.usgs.gov/) and
create an account.  Click the ¨Register¨ button on the top right.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image19.png)

​You will be prompted to fill in information regarding your User
account.  Fill in the required information: **User Affiliation,
Address, and Confirmation**. In the first login window, you must enter a
username and password that will be used to log in when using the USGS:

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image08.png)

​Fill out information, such as the purpose that you are using images
from the USGS.  The USGS is mainly interested getting information on
what type of users are using their imagery and for what purposes.  You
can fill out the answers like below if you get confused:

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image00.png)

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image04.png)

​Next, fill out your personal details.  Name, address, e-mail and
telephone number are all required. After you complete this step you will
be successfully registered!

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image14.png)

### B.  Downloading the Imagery 

1. Once you have logged into your account you
	may begin the process of downloading imagery in your desired region.
	You can search for the location via the **Search box** on the left or with
	your mouse on the map.  If an error occurs, simply click ¨clear
	criteria¨ on the right panel.  Clear criteria will remove the area that
	you have chosen so that you can reselect the desired area.

	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image17.png)

2. Once you have found the desired area and have zoomed in, you can select
	the area to export with four or more mouse clicks.   You can delete a
	selected point by clicking on the red ¨X¨ by the point on the left
	column.  When the area is selected, click on ¨Data Sets¨ located on the
	bottom left box.

	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image02.png)

 	> This database exports imagery tiles and so all of the tiles that
 	are included in your selection will be downloaded.  Each tile is about
 	10 to 11 MB.  Make sure that you are concise with your selection because
 	it may take awhile to download.

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image06.png)

 	> A list of several image providers will pop up.  We will chose
 	imagery in the Public Domain, which is a license that corresponds with
 	OpenstreetMap.  Select OrbView 3 and click Results

3. As a result, a few OrbView 3 images will appear in the left column.
 	Choose the image that best fits the area you are editing.

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image09.png)

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image22.png)

 	In the left column there are several menus to view OrbView 3 images,
 	namely:

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image15.png)

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image11.png)

4. When you have selected one or more images to download, you must
 	choose a download format.  The **GIS Ready Bundle** is the most useful for
 	our purpose.   (The others are too large or are not georeferenced).
	Click ¨Select Download Option¨.

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image05.png)

5. Once the image(s) have downloaded, extract the files to a folder.
 	You should get three files like this:

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image07.png)

 	You have successfully downloaded the imagery and now we will go through
 	adding that imagery to JOSM.

## Using the "Import Image" plug-in in JOSM

### A.  Download the Plug-in.

To open the imagery in JOSM you need to download the plugin
"ImportImagePlugin". Open JOSM, click Edit → Preferences  → Plugin →
ImportImagePlugin.  Then click OK and restart JOSM.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image03.png)

### B. Change the settings. Once JOSM restarts you will need to set the
coordinates in UTM to match the downloaded image.  Go back into the
Preferences Menu and Select the Presets box (below image globe) →  Map
projection → OK.  You do not need to restart JOSM.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image20.png)

> If you are unsure of the coordinate system, you can determine the
coordinates of the image you downloaded in QGIS.  In QGIS, right click
on the layer to get to the Properties menu.  Once in the Property menu
you should be able to decipher the coordinate system.

 Once the image is properly projected, you can now open the image in
JOSM.  Click File → Import Image and open the file you recently
downloaded.  You should find three files in the extracted folder (.rar).
 You want to chose the .jpg.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image07.png)

Wait until the image opens in JOSM. OrbView imagery is panchromatic, so
it is black and white.  Roads, rivers, vegetation and buildings can
still be seen.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image01.png)

Once the imagery is up, then you simply click "Download From OSM" and
you can begin editing the data.  Hopefully, with the new imagery you
will be able to digitize uncharted territory or improve existing data.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image10.png)

Like anytime you edit in JOSM, after you have edited, upload your
changes by clicking File → Upload Data.

## Summary

Congratulations! You should now be able to add satellite imagery using
the ¨ImportImage¨ plugin.  In this guide we used free images from
Orbview 3, but  the plugin can allow any other  public domain imagery.

Final Reminders:

​1. You cannot import commercial satellite imagery, such as Google Earth
Imagery, to OpenstreetMap.  If you work with satellite imagery please
read the terms and conditions beforehand. It is not legal to copy
commercial or other maps onto OpenstreetMap.

​2. Satellite images must have coordinate files or coordinate
information. Be sure to know the coordinates of the satellite imagery
(map projection) you are using and adjust your settings in JOSM.

​3. If you wish to return to using Bing Imagery, make sure the map
projection settings are returned to **Mercator WGS 84**.
