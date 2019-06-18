---
layout: doc
title: BasicAirData GPS Logger
permalink: /en/mobile-mapping/basicairdata-gpslogger/
lang: en
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger is a simple app to record your position and your path. It is a basic and lightweight GPS tracker focused on accuracy, with an eye to power saving. This app is very accurate in determining your altitude if you enable EGM96 automatic altitude correction on settings. You can record all your trips, view them in your preferred external viewer (it must be installed) directly from the in-app tracklist, and share them in KML, GPX, and TXT format in many ways.

The app is available for Android devices, free and open source.

The application is freely downloadable from [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).<br>
As alternative, the APK is directly downloadable in GPSLogger's [GitHub repository](https://github.com/BasicAirData/GPSLogger/tree/master/apk).

Features
--------

![BasicAirData-GPSLogger-000][]

* Track recording - the app has no integrated maps
* A modern UI with a low consumption dark theme and a tabbed interface
* Foreground & background recording (On Android 6+ please turn off all battery monitoring and optimizations for this app)
* Placemark creation also while recording
* Visualization of GPS information
* Manual altitude correction (adding an overall offset)
* Automatic altitude correction based on NGA EGM96 Earth Geoid Model (must be enabled in the settings)
* Real time track statistics
* In-app tracklist showing the list of recorded tracks
* Visualization of your tracks using any installed KML/GPX viewer, directly from the tracklist
* Track export in the /GPSLogger folder of your device, in KML, GPX, and TXT
* Track sharing, in KML, GPX, and TXT format, via E-mail, Dropbox, Google Drive, FTP, ...
* Uses metric, imperial, or nautical units

Basic Usage
-----------

![BasicAirData-GPSLogger-001][]

If the GPS location is not active on your phone, activate it. Then go in an open area and start GPS Logger.

1. Wait until the app finds the fix. When available, the __GPS FIX__ tab will start to show the coordinates of the Fix. At this point (when possible) you should wait at least another minute before proceeding with the next phase in order to allow the signal to stabilize
2. Click on the __Trackpoints__ button of the bottom panel to start recording track points. The button will become red. You can switch recording process on and off at any time by clicking on that button. The button shows the number of the trackpoints recorded.
You can go to the __TRACK__ tab to view in real time the statistics of your trip.
3. When your trip is finished, double-tap on the little __V tick__ located near the upper right corner to finalize (finish) the active track.
4. Go to the __TRACKLIST__ tab, where you will find the track you have just recorded. Tap on the track. A menu will appear. You can choose to share the track in many ways, view it using an installed external viewer, export it into /GPSLogger folder of your smartphone, or delete it from the tracklist. The formats used for export can be configured on the settings screen

Import of GPX tracks in OpenStreetMap Editor
--------------------------------------------

When you are done collecting field data, you may import the GPX tracks for use in JOSM, iD or another OpenStreetMap Editor.
You can use this simple 2-step procedure:

1. Save the GPX track on your Personal Computer in one of the following ways:
* Go on the GPS Logger tracklist, tap on the desired track and then click on __Export__; the GPX file will be created and saved on the /GPSLogger folder of your Android device (make sure that GPX format is enabled on the settings screen). Then connect the phone with your PC using a USB cable and move (or copy) your GPX tracks on your PC using the File Manager;
* As alternative, you can use the __Share__ feature to send the file to the PC (you can do it via e-mail, FTP, or using many Cloud Services). The sharing possibilities depend on the third-party apps installed on your Android Device;
2. Import the GPX track into your OpenStreetMap Editor: using the GPX tracks with the JOSM and iD editors is easy by dragging the files and dropping them into the application (or the browser tab, for iD).

Official Documentation
----------------------

- For further information about this app you can read [this article](http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
- [Here](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) you can find a Getting Started Guide and an Overview of the App Settings.<br>
- Problems during use or configuration of GPS Logger? Read the [Frequently Asked Questions](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) page!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg
