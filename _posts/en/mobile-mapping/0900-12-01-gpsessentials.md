---
layout: doc
title: GPS Essentials
permalink: /en/mobile-mapping/gpsessentials/
lang: en
category: mobile-mapping
--- 



GPS Essentials
===================

Installation of GPS Essentials
-------------

1. Tap the “Google Play Store” app icon on your Android device’s home screen to open the Android Market.
2. Tap the “Search” icon in the upper right corner.
3. Use the search bar at the top to search for “GPS Essentials”.
4. Tap the GPS Essentials icon and select "Install". The icon looks like this:

   ![GPS Essentials logo][]

If you don't have access to Google Play or if you want to download versions other than the stable release
such as older versions or the latest beta, you can download GPS Essentials from http://www.images.com.

Configure GPS Essentials to Work Offline
-------------

1. Open GPS Essentials. Go to Settings and select Map Cache. Move the cache limit to maximum.

   ![Map Cache][]

2. Find a strong network connection. From main screen, select 'Portable Maps'. Every map you view in portable
map mode automatically saves to the Android's memory. Save maps you will need offline in as much detail as
possible, and slowly zoom in on each waypoint.

3. Disconnect from the network and view maps in portable map mode. If some maps lack detail, re-connect to a
network and slowly zoom in on the map location you need.

GPS feature on Android phone
-------------

Before using the GPS Essentials Application, make sure the GPS in your Android phone is enabled.

![Enable GPS in Android][]

Acquiring Satellites
-------------

Before a GPS receiver emits a location (also called a GPS fix), it must receive signals from at least four satellites.
The lower the satellite is above the horizon, the longer its signals travel through the atmosphere so satellites
high above the horizon usually have better signals. 

To check the satellites in your area:

1. From the main menu, select Satellites.

   ![Satellites page][]

2. If there are at least four satellites used in the fix, then you may start using the GPS Essentials features.

Creating Tracks
-------------

1. From the main menu, select Tracks.

2. Tap on Start from the toolbar. It will create a new track and start recording. Wait some seconds until GPS fix is
available.

   ![New Track][]

3. Select Pause button to pause recording. If you want to continue recording, press it again.

Creating Waypoints
-------------

### Using Portable Maps

1. From the main menu, select Portable Maps.

2. Tap and hold on the map to create a new cursor.

   ![Waypoints1][]

3. Drag the cursor onto the location where you want the new waypoint.

4. Tap on Actions to show the actions pane. The Actions icon looks like this:
	
   ![Actions][]
	
5. Select the Add Tool to create the waypoint.
	
   ![Waypoints2][]
	
### Using Google Maps

1. From the main menu, select Google Maps.

2. Go to the location where you want to add your waypoint.

3. Select the Add Tool to create the waypoint. Tap on the location on the map to create a 
   Waypoint there. If you want to create a waypoint at your current location, tap the Add
   Waypoint button again.

   ![GoogleMaps][]

4. Repeat steps b and c until you are finished recording your desired waypoints.

### Using Waypoints page

1. From the main menu, select Waypoints.

2. Select the Add tool to create the waypoint.

   ![Waypointspage1][]

3. It will start recording your 1st waypoint. You may change the attributes of the waypoint
   and then press Back to get back to the list.
	
   ![Waypointspage2][]

4. When you select the Map pane, you will see where your waypoint is located on the map.
	
   ![Waypointspage3][]

5. Select Close icon to save your waypoint. The Close icon looks like this:
	
   ![Close][]


	
Geotagging Photos
-------------

1. From the main menu, select Camera.

2. Take a picture of your desired area for geotagging.

3. The photo you took will serve as a waypoint and automatically be saved on the Portable Maps
and Google Maps page.

4. The data (picture location and the photo file name) will also be logged on the Waypoints page.
You may also choose which icon to be used for a particular image. The icon will be shown on the
Portable Maps and Google Maps page as well.

Saved Photos
-------------

All your pictures are in the folder com.mictale.images on your SD card. You can
delete pictures from this folder and you can even add new ones. GPS Essentials scans this folder
regularly to see what’s new.

Exporting/Saving Waypoints
-------------

1. From the main menu, select Waypoints. It will show you the list of waypoints you recorded.

2. To export all the waypoints, select Export from the Options button. If you want to export
a single waypoint, select the desired waypoint, click the Options button and select Export.

3. The dropdown box will let you select what type of file you want your data to be exported.
For now, click KML (Google Earth).

   ![Export file format][]

4. Select the SD card icon to manually select your desired location of the file.

   ![Export to SD card][]

5. Click this icon to Save.

   ![Arrow][]

Exporting/Saving Tracks
-------------

1. From the main menu, select Tracks. It shows the data from the current track you recorded.

2. Select Export from the Options button to write the contents of the current track to a file.

3. If you want to export the previous track you recorded, select Tracks icon and choose the desired track.
   Click the Options button and select Export. The Tracks icon looks like this:

   ![Footprints][]


4. The dropdown box will let you select what type of file you want your data to be exported.
   For now, click KML (Google Earth).

   ![Export1][]

5. Select the SD card icon to manually select your desired location of the file.

   ![Export3][]

6. Click this icon to Save.

   ![Arrow][]

[GPS Essentials logo]:  /images/mobile-mapping/gpsessentials-Logo.png
[Map Cache]:  /images/mobile-mapping/gpsessentials-mapcache.png
[Enable GPS in Android]:  /images/mobile-mapping/gpsessentials-GPSenable.png
[Satellites page]:  /images/mobile-mapping/gpsessentials-satellites.png
[New Track]:  /images/mobile-mapping/gpsessentials-newtrackstart.png
[Waypoints1]:  /images/mobile-mapping/gpsessentials-cursor.png
[Actions]:  /images/mobile-mapping/gpsessentials-actionsbutton.png
[Waypoints2]:  /images/mobile-mapping/gpsessentials-addwaypoint.png
[GoogleMaps]:  /images/mobile-mapping/gpsessentials-addwaypointgooglemaps.png
[Waypointspage1]:  /images/mobile-mapping/gpsessentials-add.png
[Waypointspage2]:  /images/mobile-mapping/gpsessentials-wp.png
[Waypointspage3]:  /images/mobile-mapping/gpsessentials-map.png
[Close]:  /images/mobile-mapping/gpsessentials-save.png
[Export file format]:  /images/mobile-mapping/gpsessentials-export.png
[Export to SD card]:  /images/mobile-mapping/gpsessentials-exportwaypoints.png
[Arrow]:  /images/mobile-mapping/gpsessentials-savebutton.png
[Footprints]:  /images/mobile-mapping/gpsessentials-tracksicon.png
[Export3]:  /images/mobile-mapping/gpsessentials-sdcardsave.png
