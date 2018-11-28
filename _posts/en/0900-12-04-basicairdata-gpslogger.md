---
layout: doc
title: BasicAirData GPS Logger
permalink: /en/mobile-mapping/basicairdata-gpslogger/
lang: en
category: mobile-mapping
---

BasicAirData GPS Logger
=====================

> This guide may be downloaded as [basicairdata-gpslogger_en.odt](/files/basicairdata-gpslogger_en.odt) or [basicairdata-gpslogger_en.pdf](/files/basicairdata-gpslogger_en.pdf)
> Reviewed 2018-11-28

BasicAirData GPS Logger is a simple App to record your position and your path.<br>
It's a basic and lightweight GPS tracker focused on accuracy, with an eye to power saving.<br>
This app is very accurate in determining your altitude: enable EGM96 automatic altitude correction on settings!<br>
You can record all your trips, view them in your preferred Viewer (it must be installed) directly from the in-app tracklist, and share them in KML, GPX, and TXT format in many ways.

The app is 100% Free and Open Source.

The application is freely downloadable from [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).
As alternative, the official APK is directly downloadable [here](https://github.com/BasicAirData/GPSLogger/releases/latest) in GPSLogger's GitHub repository.<br>
You can install GPS Logger on your smartphone in one step, using the Google Store [QR-Code](https://github.com/BasicAirData/GPSLogger/blob/master/screenshots/qrcode%20-%20Google%20Store.png) or the Latest APK [QR-Code](https://github.com/BasicAirData/GPSLogger/blob/master/screenshots/qrcode.png);

Features
--------  

* 100% offline recording
* A modern UI, with a low consumption dark theme and a tabbed interface
* Foreground & Background Recording (On Android 6+ please turn off all battery monitoring and optimizations for this app!!)
* Placemarks creation also meanwhile recording
* Visualization of GPS information
* Manual Altitude Correction (adding an overall offset)
* Automatic Altitude Correction, based on NGA EGM96 Earth Geoid Model (Enable it on Settings!!!)
* Real time track statistics
* In-app tracklist showing the list of recorded tracks
* Visualization of your tracks using any installed KML/GPX viewer, directly from the Tracklist
* Track exportation, in the /GPSLogger folder of your device, in KML, GPX, and TXT
* Track sharing, in KML, GPX, and TXT format, via E-mail, Dropbox, Google Drive, FTP, ...
* Uses Metric, Imperial, or Nautical units

Basic Usage
-----------

If the GPS location is not active on your phone, activate it. Then go in an open area and start GPS Logger;

1) Wait until the app finds the Fix. When available, the __GPS FIX__ tab will start to show the coordinates of the Fix. At this point (when possible) we suggest to wait at least another minute before proceed with the next phase, in order to allow the full stabilization of the signal; Click on the __Trackpoints__ button of the bottom panel to start recording track points. The button will become red. You can anytime toggle on/off the recording process by clicking on that button. The button shows the amount of the Trackpoints recorded.
3) Go for a ride! Don’t forget your smartphone :P.
You can go to the __TRACK__ tab to view in real time the statistics of your trip;
4) When your trip is finished, double-tap on the little __V tick__ located near the upper right corner to finalize (finish) the active track;
5) Go to the __TRACKLIST__ tab, where you will find the track you have just recorded. Tap on the track. A menu will appear. You can choose to share the track in many ways, view it using an installed external viewer, export it into /GPSLogger folder of your smartphone, or delete it from the tracklist.

Exportation of GPX tracks to OpenStreetMap Editor
-------------------------------------------------

When you are done collecting field data, you may import the GPX tracks for use in JOSM iD or another OpenStreetMap editor.

Connect your Android device to a computer (using a data cable, Bluetooth, or an Internet connection) and copy the exported GPX tracks on your personal computer. In your device storage, look for the GPX track under folder /GPSLogger.

Using the GPX tracks with the JOSM and iD editors are easy as dragging the files and dropping them into the application (or the browser tab, for iD).

Official Documentation
----------------------

- For further information about this app you can read [this article](http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
- [Here](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) you can find a Getting Started Guide.<br>
- Problems during the usage, or the configuration of GPS Logger? Read the [Frequently Asked Questions](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) page!
