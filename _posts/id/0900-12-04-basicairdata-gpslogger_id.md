---
layout: doc
title: BasicAirData GPS Logger
permalink: /id/mobile-mapping/basicairdata-gpslogger/
lang: id
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

> Reviewed 2021-06-12

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger adalah aplikasi sederhana yang dapat digunakan untuk merekam posisi dan jalur Anda. Ini merupakan GPS dasar dan ringan yang berfokus pada akurasi, serta hemat daya. Aplikasi ini sangat akurat dalam menentukan ketinggian jika Anda mengaktifkan EGM96 automatic altitude correction di pengaturan. Anda dapat merekam semua perjalanan, melihatnya dalam viewer eksternal (harus diinstal terlebih dahulu) langsung dari daftar trek di dalam aplikasi, dan membagikannya dalam format KML, GPX, dan TXT melalui berbagai cara. 

Aplikasi ini tersedia di perangkat Android, gratis dan open source atau terbuka.

Aplikasi ini dapat didownload secara gratis dari [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).<br>
Sebagai alternatif, APK aplikasi ini dapat langsung didownload di GPSLogger [GitHub repository](https://github.com/BasicAirData/GPSLogger/tree/master/apk).

Fitur
--------

![BasicAirData-GPSLogger-000][]

* Merekam trek - aplikasi ini tidak memiliki peta yang terintegrasi di dalamnya
* UI yang modern dengan konsumsi daya yang rendah karena menggunakan tema hitam dan interface yang menggunakna tab terpisah
* Merekam di latar depan & latar belakang (Pada Android 6+ silakan matikan seluruh pemantauan dan optimisasi baterai untuk aplikasi ini)
* Pembuatan tanda letak ketika merekam
* Visualisasi informasi GPS
* Koreksi ketinggian manual (menambahkan offset keseluruhan)
* Koreksi ketinggian otomatis berdasarkan NGA EGM96 Earth Geoid Model (harus diaktifkan di pengaturan)
* Statistik trek langsung
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
2. Click the __Record__ button of the bottom panel to start recording track points. The button will become red. switch recording process on and off at any time by clicking on that button. At the top of the button the app shows the number of the trackpoints recorded.
You can go to the __TRACK__ tab to view in real time the statistics of your trip.
3. When your trip is finished, click the __Stop__ button to finalize (finish) the active track. A dialog will appear, click __OK__ to confirm.
4. Go to the __TRACKLIST__ tab, where you will find the track you have just recorded. Tap on the track. A menu will appear. You can choose to share the track in many ways, view it using an installed external viewer, edit the track details, export it into /GPSLogger folder of your smartphone, or delete it from the tracklist. The formats used for export can be configured on the settings screen.

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