---
layout: doc
title: Correcting Imagery Offset
permalink: /en/josm/correcting-imagery-offset/
lang: en
category: josm
---

Imagery Offset
===============

Imagery providers usually do a pretty good job of georeferencing their imagery,
but occasionally the images can be out of position.  This is particularly true
in hilly or mountainous areas, where it can be difficult to stretch a flat image
over an area of the Earth with many contours.  When you load imagery in JOSM,
it can sometimes be ten meters or more from its true position.  This is called
**imagery offset**.

Notice in the following image that two separate aerial photographs have been
georeferenced and merged together.  Because georeferencing is not a perfect
process, the images do not line up perfectly with each other.  Hence one, or
both, must be inaccurate.

![Misaligned imagery][]

We’ve learned about two major ways of making maps - one is by utilizing aerial
imagery to identify features on the ground, and another is by using GPS to record
tracks and waypoints and then add them to OpenStreetMap.  The advantage of aerial
imagery is obvious.  It enables you, the mapper, to see the whole picture, to
observe various details from the image, consider your knowledge of the area, and
easily trace roads, buildings, and areas.  One key advantage of GPS however, is
that it doesn't suffer from offset like imagery.  A GPS will always provide you
with a correct latitude and longitude.  The only exception is when the satellite
signals are interrupted by tall buildings or mountains, but in this case it is
easy to recognize the error.  Observe the GPS trace in this image, compared with
the Bing aerial imagery layer beneath it:

![Aerial vs GPS][]

Because of what we now know, it is clear that the GPS trace is likely to be accurate,
and the image beneath it is out of place.

So now we must ask, “if the imagery may be out of place, how can we still use it and
make accurate maps?”

Correcting Imagery Offset
-------------------------

The answer to the preceding question is that we can move the imagery so that it aligns
with things that we know are in the correct location, such as GPS tracks.  It is easy
to correct imagery offset in JOSM.

The best references for adjusting imagery are GPS tracks that follow roads.  And the
more GPS tracks that you have to reference, the more accurate you will be able to align
your imagery.  Since OpenStreetMap users often upload their GPS tracks to the OSM database,
we can download them and use them to align our imagery.

-	Click on the download button.

![JOSM download button][]

-	Check the box next to “Raw GPS Data” near the top of the Download window.
	Select your area and click “Download.”

![Download raw GPS data][]

-	This will download an additional layer to JOSM containing GPS tracks.
	Depending on how many tracks have been uploaded by OSM users, you may
	see few tracks (or even no tracks):

![Few GPS tracks from OSM][]

-	Or, you may see many tracks:

![Many GPS tracks from OSM][]

-	To adjust an imagery layer, click on the “Adjust imagery offset” button at
	the top of JOSM.

![Adjust imagery offset button][]

-	Ignoring the box that pops up, use your mouse to drag the imagery layer so
	that it aligns correctly with the GPS tracks.  The GPS tracks should line
	up with the roads on the imagery as closely as possible.  You will see the
	offset numbers in the box change.

![Adjust imagery offset][]

-	If you like, you can save these offset settings by entering a bookmark name
	and then clicking OK.  You can then automatically apply the same settings
	later by going to Imagery ‣ Imagery offset and clicking on your bookmark.
-	If you do not want to save the offset, simply click OK without entering a bookmark name.

What if there are no GPS tracks on OpenStreetMap, and you don’t have a GPS?
Without GPS tracks, it is difficult to align imagery.  If it is a relatively
empty area (not much mapping done), you might choose to simply use the imagery
as it is and correct the data later.  It’s better to have map an area 20 or
30 meters offset than to not map at all.

If you can positively identify the latitude and longitude of one object on the
ground, you can ensure the imagery is correctly placed by following these steps:

-	First, identify the object whose position you know on the imagery.
-	Click on the latitude and longitude in the bottom left corner of JOSM.

![JOSM lat lon][]

-	In the dialog that opens, enter the latitude and longitude of the place
	that you know, and enter a small number for Zoom, about five or ten.

![JOSM lat lon dialogue][]

-	This will zoom and center the map to your longitude and latitude.  Now you
	can move the imagery as you did previously so that the feature you know is
	centered at the correct position.

If, on the other hand, the area has already been extensively mapped, then hopefully
the previous mappers have drawn objects in their correct locations.  In this case,
you can align the imagery to the OSM map, but beware!  Other mappers may not be aware
of imagery offset, and they may have made mistakes when they mapped.


The Imagery Offset Database
---------------------------

Now you know how to watch out for and correct imagery offset, but there is one major
problem with this approach that we have overlooked thus far.  If every OpenStreetMap
user adjusts the imagery differently, everybody will be mapping with slightly different 
backgrounds.

Imagine that you are mapping a small town, and you realize that Bing imagery is
offset by 15 meters to the north. So you adjust the imagery and then use it to map
the whole town accurately. But then somebody else wants to add something to the map,
so they download the data and load Bing imagery, but they don’t know about the imagery
offset you discovered!  They will think that something is wrong and all of the objects
in town are misplaced by 15 meters, and they will start to move them, which is not
correct!  This can be disastrous for the town’s map data.

For this reason it is important that all users are aware of imagery offset, and should
always check for it before mapping an area.  To help with this problem, some smart
people created a plugin that allows users to save offset information in a database
and share it with others.  Let’s see how this works:

-	Open the Preferences menu in JOSM, and click on the Plugins tab.

![JOSM plugins tab][]

-	Find the plugin named “imagery_offset_db” and check the box next to it.

![Imagery_offset_db plugin][]

-	Click OK.  You will need to restart JOSM to finish the plugin installation.

In the same way that you are able to save offsets as bookmarks, this plugin allows
you to save offsets to a central database, and to access the offsets that other
users have created.  Hence, if one mapper creates an imagery offset in an area,
other users can use the exact same offset to map with.

When using aerial imagery layers, you should ALWAYS check for existing offsets,
and when you create your own offset, you should ALWAYS save it to this database.


Add Imagery Offset from the Database
------------------------------------

-	When you add an imagery layer, the new plugin will alert you that you should
	check the imagery database for an existing offset.  You will see an icon with
	a red exclamation point on it at the top of JOSM, like this:

![Imagery offset notification][]

-	Click on the button and the plugin will communicate with the database to see
	if there are existing offsets in this area.
-	Here we have downloaded OSM data and GPS tracks in Kuta, Bali, Indonesia.
	In this case, we have found one existing offset. Click on it to apply to the map.

![Offset in Kuta bali][]

-	This causes the imagery layer to shift.  However, when we add someone else’s
	offset like this, we should check that it is valid by comparing to GPS tracks.

![Comparing imagery offset from GPS tracks][]

-	We can see that the imagery layer is in fact misaligned.  We don’t want other
	users to use this offset, so we should mark it as incorrect in the database.
	Click on the “Offsets” button again (it won’t have a red exclamation mark anymore).

![Offsets button][]

-	This time when the dialog opens, right-click on the offset and click “Deprecate Offset.”

![Deprecate offset][]

-	Click “Yes” to confirm.
-	You will need to enter a reason for deprecating this offset.

![Deprecate reason][]


Add Imagery Offset to the Database
------------------------------------

Now that we have marked this user’s offset as “deprecated,” we should add an improved offset
to the database.

-	Click on the “Adjust imagery offset” button.

![Adjust imagery offset button][]

-	Adjust the imagery to match the GPS tracks.  Click OK in the box.
-	Now go to Offset ‣ Store Imagery Offset...

![Store imagery offset][]

-	Enter a description of the offset in the box that opens.

![Offset description][]

-	Click OK.  Your offset will be saved to the database.
-	Now let’s hide the GPS layer and look at the OSM data against the correctly placed imagery.

![Corrected imagery][]

Oh No!  Somebody mapped this area with misaligned imagery, so the area is not
correctly mapped.  This will take some time to fix.


Imagery Offset Database Website
--------------------------------

Lastly, for more information on the offset database, you can visit the website
at [http://offsets.textual.ru/](http://offsets.textual.ru/).  This lists all the
offsets that have been uploaded to the database, and it also has a cool map feature
that visualizes where the offsets are located, as you can see here:

![http://offsets.textual.ru/][]

>	One last thing to remember is that the imagery may not be offset the same
>	distance everywhere!  This is especially true in regions where there are
>	lots of hills and mountains.  So if the imagery seems to be offset differently
>	in different areas, you’ll need to move it again.

Summary
--------

When you are just beginning OpenStreetMap, you don’t need to worry too much about imagery offset.  But if you see another mapper’s edits that seem misaligned from the imagery, you should always consider that there may be an offset before you start changing their objects.  And if you aren't quite ready to deal with offsets yet, just remember that it’s better to map an area 20 or 30 meters offset than to not map it at all.  But when possible, do remember that imagery offset may occur, and use the steps in this chapter to correct it when needed.


[Misaligned imagery]: /images/en/editing/correcting-imagery-offset/misaligned-images.png
[Aerial vs GPS]: /images/en/editing/correcting-imagery-offset/aerial-vs-gps.png
[JOSM download button]: /images/en/editing/correcting-imagery-offset/josm-download-button.png
[Download raw GPS data]: /images/en/editing/correcting-imagery-offset/raw-gps-data.png
[Few GPS tracks from OSM]: /images/en/editing/correcting-imagery-offset/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/en/editing/correcting-imagery-offset/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/en/editing/correcting-imagery-offset/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/en/editing/correcting-imagery-offset/adjust-imagery-offset.png
[JOSM lat lon]: /images/en/editing/correcting-imagery-offset/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/en/editing/correcting-imagery-offset/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/en/editing/correcting-imagery-offset/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/en/editing/correcting-imagery-offset/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/en/editing/correcting-imagery-offset/offset-exclamation.png
[Offset in Kuta bali]: /images/en/editing/correcting-imagery-offset/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/en/editing/correcting-imagery-offset/offset-compare-gps.png
[Offsets button]: /images/en/editing/correcting-imagery-offset/offsets-button.png
[Deprecate offset]: /images/en/editing/correcting-imagery-offset/deprecate-offset.png
[Deprecate reason]: /images/en/editing/correcting-imagery-offset/deprecate-reason.png
[Store imagery offset]: /images/en/editing/correcting-imagery-offset/store-imagery-offset.png
[Offset description]: /images/en/editing/correcting-imagery-offset/offset-description.png
[Corrected imagery]: /images/en/editing/correcting-imagery-offset/correctly-placed.png
[http://offsets.textual.ru/]: /images/en/editing/correcting-imagery-offset/offset-website.png











