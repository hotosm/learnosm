---
layout: doc
title: Using Geofabrik and HOT Export
permalink: en/osm-data/geofabrik-and-hot-export/
lang: en
category: osm-data
---

Using Geofabrik and HOT Export
================

> This guide may be downloaded as [Geofabrik_and_HOT_Export_en.odt](/files/Geofabrik_and_HOT_Export_en.odt) or [Geofabrik_and_HOT_Export_en.pdf](/files/Geofabrik_and_HOT_Export_en.pdf)  
> Reviewed 2016-09-05  

After learning how to add and edit data in OpenStreetMap (OSM), now maybe you would like to obtain the data as a backup or to process it using Geographic Information System software that is Open Source, such as Quantum GIS ([www.qgis.org](http://www.google.com/url?q=http%3A%2F%2Fwww.qgis.org%2F&sa=D&sntz=1&usg=AFQjCNFCIP2pVPi5ohw-5H7tJ4CzApRQlg)).  

Getting OSM Data on Geofabrik Website
-------------------------------------

The OSM data can be obtained easily by downloading it from [http://download.geofabrik.de/openstreetmap/](http://www.google.com/url?q=http%3A%2F%2Fdownload.geofabrik.de%2Fopenstreetmap%2F&sa=D&sntz=1&usg=AFQjCNGtPxBJsD_G-JOi6U5hWJSqey8KCw)

![download-geofabrik][]

The data is divided into several regions. Indonesia can be found as part of Asia by clicking on the Asia sub-region on the blue table, and then the page will appear like this.  

![geofabrik-asia][]

After appearing at the top of the page, see how the sub-region divides into countries of Asia. To get the data, you need to click the Indonesian state on the blue table, and it will appear like this.  

![geofabrik-indonesia][]

Then if you want to obtain the Indonesian data in shapefile (.shp) format, you click on the indonesia-latest.shp.zip link, and the file will be downloaded. There are several formats that can be downloaded. One popular format is shapefile (shp) with points, polyline, and polygon layer.  

You can check the last time data was updated. Please note, the server usually updates the data once every 24 hours, so if you just upload data to OSM, the data does not appear automatically when you download it, but you have to wait for the latest updates from the server.  

Getting OSM Data on HOT-Export Website
--------------------------------------

If you just want to download a very specific area with a particular attribute, you can use the Hot-Exports data download service. Open <http://export.hotosm.org/> which will appear like this:  

![hot-export][]

To obtain the data from this website you must have an account. To create one click **Create Account** in the bottom left corner, then enter your email, password, and confirmation password, followed by **Create Account**.  You will then see a message similar to “A message with a confirmation link has been sent to your email address. Please open the link to activate your account.” indicating that your account has been successfully created and you have your activation email.  

![hot-export-account][]

After that log in using your account that you have created.  

![hot-export-login][]

Once you have successfully logged in, to obtain the data you want click **New Job**, then fill in your name and the job description. You can select an area using the map, then click save.  

![new-export-job][]

If you wish ou can select a Preset File, a translation file, or ignore both options.  

![job-configuration][]

The server will process your request, with the time depending on the area you choose and the server capacity. You can choose the file format you want to download such as ESRI Shapefile. All download requests that you create will appear on the job, so if any time you want to download the same area, you can search for the same job and download it again without having to click on New Job.  

![job-created][]

[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export]: /images/osm-data/hot-export.png
[hot-export-account]: /images/osm-data/hot-export-account.png
[hot-export-login]: /images/osm-data/hot-export-login.png
[new-export-job]: /images/osm-data/new-export-job.png
[job-configuration]: /images/osm-data/job-configuration.png
[job-created]: /images/osm-data/job-created.png

