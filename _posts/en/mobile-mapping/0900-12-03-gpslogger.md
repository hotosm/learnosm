---
layout: doc
title: GPSLogger for Android
permalink: /en/mobile-mapping/gpslogger/
lang: en
category: mobile-mapping
---

GPSLogger for Android
=====================

> This guide may be downloaded as [gpslogger_en.odt](/files/gpslogger_en.odt) or [gpslogger_en.pdf](/files/gpslogger_en.pdf)  
> Reviewed 2015-12-06  

![GPSLogger][]

A simple, light-weight, and minimalistic app for recording GPS traces on the Android platform. The easy-to-use interface with the sole purpose of GPS logging and staying quite makes for a very battery-efficient application that can save gps tracks in GPX, KML, NEMA or text file formats. Log files can automatically be uploaded to OpenStreetMap, an OpenGTS server, DropBox, FTP server, HTTP server or sent to an email address.

<https://play.google.com/store/apps/details?id=com.mendhak.gpslogger&hl=en>

GPSLogger for Android is an app that is free to use, and an actively maintained open source project. Donations are welcomed to further enhance the app. If you wish to get involved (e.g. providing translations in another language, bug reporting, or submitting feature requests), visit the [repository](https://github.com/mendhak/gpslogger).

>OpenGTS refers to the [Open GPS Tracking System](http://opengts.sourceforge.net/) project 


Features
--------------------------
* Specify logging based on time or distance intervals 
* Specific battery saving configurations
* GPS accuracy filter to not log unreliable points
* Select wifi, Cellphone tower and/or GPS satellites as location information source 
* Log to GPX, KML, CSV, TXT or NMEA files with ZIP support
* Imperial or metric display units
* Auto start on boot
* Can run in background
* Works well with other GPS applications running
* Automatic sending to email/FTP/DropBox/Google Docs/OpenStreetMap/OpenGTS at user defined intervals
* Easy to preconfigure text configuration files for distribution to many users



User Interface
--------------------------

![Canvass1][]

The **Menu** button provides more options for configuring the app.

The **Views drop-down** lets you to choose how information is display on the screen.

The **Help** button provides additional information about how to use the app.

The **Annotate** button lets you to add a description to a point.

**Log one point** button lets you manually log a waypoint.

**Upload** lets you choose from a variety of options for uploading your log file. This includes an option to auto send to any of the following: OpenStreetMap, Google Drive, DropBox, an FTP server, an OpenGTS server or send the log to an email address.

The **Share** button lets you choose one or more log files you can share with other people via Bluetooth, or SMS. Depending on what apps are installed on your device, you may have different options available for you.


![Canvass2][]

The **Start Logging** button is in blue. When you press this button to start recording, it turns to  a green button.

The **Coordinates** displays the last recorded GPS point, and is refreshed when a new coordinates become available.

The **Satellites** icon will show you how many satellites you are fixed on.

The **Elevation** shows elevation data.

The **Duration** displays the total time elapsed since pressing the start button.

The **Distance** will display the total distance recorded.

The **File Types** indicate what type of logs are being generated while the **File Path** tells you where the location of the file in your device or memory card.

The **Status** indicator will display in green when it is recording, while a spinner is displayed when the device is trying to get a fix.

The **Accuracy** will display the accuracy of the recorded data, which varies between receivers, the position or number of available satellites, weather condition, or the obstructions of the horizon.

The **Bearing** tells you the direction you are moving.

The **Speed** will give you approximate information of how fast you are going.

**Points logged** will display the total number of poins recorded from the time the start button was pressed.


Menus
--------------------------

![Menus][]

The **General options** is where to find settings for *Start on bootup*, *unit of measurement* (Metric or Imperial), *debug file* and *version information*.

![Menus1][]


The **Logging details** is where to find settings  *File formats* (multiple formats simultaneously supported), *folder* path to store logs, rules on *new file creation* and *custom file name*.

![Menus2][]

![Menus3][]


Under **Performance** is where the settings for *location providers*, *timings*, *filters* and *listeners* are found. The location provider option lets you set the sources for the location data: **GPS** - navigation satellites; **Network** - cellular tower; **Passive** - lets GPSLogger "borrow" the location coordinates that another app has requested, to save battery by not making the request itself.

![Menus4][]

![Menus5][]

**Auto send, email and upload**  is where the settings for various upload options such as OpenStreetMap, Google Drive, FTP, Dropbox are found.

![Menus6][]

Uploading GPS traces is another way of contributing data to the OpenStreetMap project. A trace is a record of your location at various time or distance intervals, and recorded as geographic coordinates (longitude, latitude, altitude). They can be used as a background layer when editing maps, and is useful for adding features to the map, similar to aerial imagery.

####OpenStreetMap options

![osm0][]

**Allow auto sending** settings determines whether log files are uploaded automatically.

**Authorize this app** is for granting the app permission to upload GPS traces to OSM, using your OSM account.

The **Visibility**, **Description**, **Tags** options are disabled until you authorize the app to upload GPS traces. These settings are used for the GPS traces that will be uploaded to the OpenStreetMap database.

When you click the *Authorize this app*, you will be directed to your Internet browser and to the OpenStreetMap website. If you are not logged in, you will be asked for your credentials.

![osm2][]

After logging in, you see a page like below, for verifying the app request, and the specific permission to *upload GPS traces*. Click on *Save changes* button to authorize the app.

![osm3][]

Back to the GPSLogger app, the screen will be slightly different screen, with additional options available.

![osm1][]

Clicking on the **Clear authorization** option will remove the permission to upload GPS traces to the OSM server.

There are several *visibility* options for GPS traces. *Private* traces are shared as anonymous, with unordered points. *Public* traces are shown in the trace listing, and as anonymous, unordered points. *Trackable* traces are shared as anonymous, with timestamps for ordered points. *Identifiable* traces are shown in the trace list, and can be associated with your username, with timestamps for ordered points.

It is recommended that you set the visibility of the GPS traces you upload to *identifiable*. The data and metadata makes it more useful for other mappers. If you have concerns about privacy and personal security, choose a more appropriate settings, or don't upload the traces at all.

A text *description* help others understand how a trace is recorded. A trace recorded on foot will not be similar to a trace recorded by a drone.

A *tag* is short keyword that can be used to associate a trace with projects, places, or events.


Data Collection
---------------

Automated collection and uploading of gps tracks
-------------------------------------------------

Once properly configured, the application can run in the background and automatically record tracks and upload them once a day to any of its configured services. This would allow for the automated collection of tracks of daily driving to help build a collection of road and travel time data for later mapping or analysis. Once configured the person who has the phone or other android device should notice a little impact on battery usage and not have to do anything manually. Some experimentation will be needed to find the right balance of battery usage and clarity of the GPS tracks.

An example config to automatically collect and upload to OpenStreetMap daily you would need to adjust these settings:

* General Options
  * **Start on bootup** - On
* Logging Details
  * **Log to GPX** - On
  * **New file creation** - Once a day
* Performance
  * **Time before logging** - 5
  * **Keep GPS on between fixes** - On (Turing this off can cause "jumps" in the GPS tracks while the device requires the GPS satellites each time.)
  * **Don't log if I'm not moving** - On
* Auto send, email and upload
  * **Allow auto sending** - On
  * **How often** - For once a day enter 1440 minutes. This setting can be a little tricky if you do not have access to data or wifi when it executes. It should start counting from when you either boot the device or hit the "Start logging" button, so if you start it in the morning, it will upload the same time the next morning for example.
  * **OpenStreetMap** - Allow auto sending on and any other settings you want to configure, pay close attention to the visibility setting if you have privacy concerns about the GPS tracks.

​Manually Recording Traces
---------------------

To start collecting logs (in Simple view), simply click on the blue button. A spinner will appear near the upper right corner of the screen to indicate the attempt to get a fix on satellites. A green circle will show in the upper right hand area to indicate logging is on going.

To stop recording data any time, just press the green *Stop Logging* button.

#### Annotate
To add a note or description to a log, click on the *Annotate* (Pencil) icon. This option will let you a leave text to describe or take note of details that are associated with the current point.

##### Calling annotation from the Notification Bar
It's also possible to directly call the *Annotate* button from Android's Notification bar. Select the app from the Notification List and click on the *Annotate* button.

![annotate0][]

This will display an input dialog box where you can enter the text details of the note.

![annotate1][]

#### Log intervals
Log intervals are determined by time or distance under the **Performance** menu. 

#####By time
**Time before logging** is set to 60 seconds by default. You can change this to five or ten seconds, when you are walking instead of riding in a vehicle. When you are in a car, you can set this to 1 second to generate very accurate logs.

#####By distance
The **Distance filter** is set by default to zero. You can set this to something else, if you want to record the coordinates for every X number of units from the last point recorded.


​Uploading traces
------------------
####to OpenStreetMap
Press the *Upload* button and select the *OpenStreetMap* option. A dialog window will appear where files are available for selection. Choose any you want to upload and hit the *Ok* button.

![upload0][]

####to other options
There are other upload options you can explore, but are outside the scope of this guide. Refer to the GPSLogger for Android Project website for details.


​Sharing traces 
---------------
You may also share the recorded traces, or your current location with other people. Sharing options may vary from one device to another, or the apps installed on a device. Below is an example of how the sharing option screen may look:

![share0][]


Exporting traces to an OpenStreetMap editor
--------------------------------------------

When you are done recording traces, the tracks may be imported to JOSM (or another OpenStreetMap editor, like iD).

Connect your Android device to a computer (also possible using a data cable, Bluetooth, or an Internet connection) and copy the GPX tracks and (and perhaps, multimedia files) you’ve captured.  In your device storage, look for the GPX tracks under the folder /Android/data/com.mendhak.gpslogger/files

Using the GPX tracks with the JOSM and iD editors are easy as dragging the files and dropping them into the application (or the browser tab, for iD). 

For additional details for  iD users, see the section [Configuring the Background Layer](http://learnosm.org/en/editing/id-editor/#configuring-the-background-layer).

If the JOSM editor is used, you can find instructions on how to use the GPX track, along with the multimedia files in JOSM see the section [Open in JOSM](http://learnosm.org/en/beginner/using-gps/#open-in-josm).

For other OpenStreetMap editors, please refer to your software’s documentation.


Display Options
-----------------
The application can be displayed 3 different ways, whichever you find most appropriate for your use:

####Simple View

![view0][]

####Detailed View

![view1][]

####Big View

![view2][]


Summary
-------
Excellent! You've been introduced to a light-weight, battery-efficient app you can keep in your Android device to record tracks, which you can upload to OSM, or use with your favorite OpenStreetMap editor.

GPSLogger for Android is another tool for collecting field data without a dedicated GPS receiver. Casual field data collection is possible without an active Internet connection.

Take some time to practice and familiarize yourself with the app before working with live data.

This section introduced the concept of using GPSLogger for Android for collecting GPS traces, uploading traces to OpenStreetMap, and transferring these logs to a PC.


Official GPSLogger for Android Documentation
--------------------------------------------

The project maintains an [FAQ](http://code.mendhak.com/gpslogger/#faq) for commonly asked questions.


[GPSLogger]: /images/mobile-mapping/gpslogger_000.en.png
[Canvass1]: /images/mobile-mapping/gpslogger_001.en.png
[Canvass2]: /images/mobile-mapping/gpslogger_002.en.png
[Menus]: /images/mobile-mapping/gpslogger_003.en.png
[Menus1]: /images/mobile-mapping/gpslogger_003a.en.png
[Menus2]: /images/mobile-mapping/gpslogger_003b.en.png
[Menus3]: /images/mobile-mapping/gpslogger_003c.en.png
[Menus4]: /images/mobile-mapping/gpslogger_003d.en.png
[Menus5]: /images/mobile-mapping/gpslogger_003e.en.png
[Menus6]: /images/mobile-mapping/gpslogger_003f.en.png
[osm0]: /images/mobile-mapping/gpslogger_004.en.png
[osm1]: /images/mobile-mapping/gpslogger_004a.en.png
[osm2]: /images/mobile-mapping/gpslogger_004b.en.png
[osm3]: /images/mobile-mapping/gpslogger_004c.en.png
[upload0]: /images/mobile-mapping/gpslogger_005.en.png
[share0]: /images/mobile-mapping/gpslogger_006.en.png
[view0]: /images/mobile-mapping/gpslogger_007.en.png
[view1]: /images/mobile-mapping/gpslogger_007a.en.png
[view2]: /images/mobile-mapping/gpslogger_007b.en.png
[annotate0]: /images/mobile-mapping/gpslogger_008.en.png
[annotate1]: /images/mobile-mapping/gpslogger_008a.en.png
