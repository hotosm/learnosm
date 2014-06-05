---
layout: doc
title: OSMTracker
permalink: /en/mobile-mapping/osmtracker/
lang: en
category: mobile-mapping
---

OSMTracker
==============

In this session we will learn one of android application that can be
used as a data collection application and as an alternative if we don’t
have a GPS. We will  be using OSMTracker. This application allow us to
record our track, record waypoint, geotagging and video capture. We can
also export our track log in GPX file so we can open it in JOSM or
upload to OpenStreetMap.

Install OSMTracker
-------------------------

To install OSMTracker, go to Google Playstore and type “OSMTracker” in 
the search column. Choose OSMTracker’s icon with logo like this:

![OSMTracker Logo][]

Click install.

OSMTracker Configuration
---------------------------------

After you success install the software, the next step is we need to
configure OSMTracker.

Open OSMTracker and choose **Setting** menu located in upper right.

![OSMTracker configuration][]

Go to **GPS Logging Interval** section in setting. This setting will
inform you how often the application to record your track. The
default setting is 0 second, which is mean that OSMTracker will
record your track every second. It will drain your battery quickly.
Change the interval depend what you need. For example every 2
seconds.

![Settings page][]

Go to **Background Map** setting. Check list in **background map** setting
if you want to show your map with OpenStreetMap background.

You can also set up map type with **Map Tile Provider**. Choose one of
the three map provider, for example **Cyclemap**.

Using OSMTRacker
-------------------------

Now OSMTracker is ready to use. To get started, activate GPS feature in
your device and in main page, choose plus icon (+) on the top of the
application to start tracking.

You will directed to **Track Logger** page. If you haven’t activate GPS
feature in your device, OSMTracker will tell you to activate the
feature. In the top page, you can see how much the accuracy you gain and
how much the strength of the gps signal from your phone. One thing to
remember, you cannot access all the features in Track Logger if your
phone not get your position. You can recognize it if you haven’t see any
accuracy in top page. If your accuracy still more than 10m, i suggest
you not to start tracking. If you do that, your result will be very bad.
Your position can miss very far away from actual position.

![Track Logger page][]

For plotting waypoint, you can directly choose the object icons in **Track
Logger** page. For example, you want to map a restaurant, so you can
choose **Amenity** icon and then choose **Restaurant**. But, in OSMTracker you
cannot give additional information like the restaurant name, the owner,
the address, etc. To give additional information, you must choose **Text
note** icon in **Track Logger** page.

If you want to save your tracking result, you can go to Diskette icon in
the top page. After that, you can see the track result in **Tracklist** in
Main Page of OSMTracker. You can see the track result in map with OSM
background with this step:

-   Choose your track.
-   Choose icon ![Tracklist][] in upper right of **Track Details**
    page.
-   Choose Display track.

![Displaying tracks][]

You will be directed to the track display map. In this page you can
see various symbol. The blue line is your tracking line, the yellow star
symbol is the waypoints and the yellow people symbol is the end of your
tracking.

![Track map display][]

In **Track Detail** page you can also change the name of your tracklog, give
description of your track, add tag, export your track into GPX, and also
change the type of your file (whether is Private, Public, Trackable or
Identifiable). If you want to convert your track log into GPX to open in
JOSM, you need to convert through this icon ![Convert to GPX][] in
Track Detail page. OSMTracker will convert your track into GPX format
and save it in internal storage of your phone (with assumption you
didn’t change the folder name and the path in application setting). In
this **Track Detail** you can also upload your Track log in OpenStreetMap
with this step:

-   Choose **OpenStreetMap upload** in **Track Detail** page.
-   You will directed to OpenStreetMap upload page, in this page you can
    change the name, description, tag and the type of your file before
    it uploaded to OpenStreetMap
-   Choose Save and Upload
-   You will directed to your browser to OpenStreetMap.org site to do
    some login for your OpenStreetMap account. Fill the user name and
    password.
-   OpenStreetMap will tell you that OSMTracker application is request
    access to your account to upload the data. Check the  “upload GPS
    Traces” and  click Save Changes.

![OSM authorization of OSmTracker][]

-   After that OSMTracker will upload your GPX file into OpenStreetMap
    site. You can see your GPX Track in OpenStreetMap.org site and go to
    GPS Traces’s tab.

Now you learned how to use OSMTracker. Happy
mapping!!

[OSMTracker Logo]: /images/en/mobile-mapping/osmtracker/osmtracker_image00_en.png
[OSMTracker configuration]: /images/en/mobile-mapping/osmtracker/osmtracker_image01_en.png
[Settings page]: /images/en/mobile-mapping/osmtracker/osmtracker_image02_en.png
[Track Logger page]: /images/en/mobile-mapping/osmtracker/osmtracker_image03_en.png
[Tracklist]: /images/en/mobile-mapping/osmtracker/osmtracker_image04_en.png
[Displaying tracks]: /images/en/mobile-mapping/osmtracker/osmtracker_image05_en.png
[Track map display]: /images/en/mobile-mapping/osmtracker/osmtracker_image06_en.png
[Convert to GPX]: /images/en/mobile-mapping/osmtracker/osmtracker_image07_en.png
[OSM authorization of OSmTracker]: /images/en/mobile-mapping/osmtracker/osmtracker_image08_en.png
