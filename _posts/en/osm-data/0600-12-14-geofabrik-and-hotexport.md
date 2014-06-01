---
layout: doc
title: Using Geofabrik and HOT Export
permalink: /en/osm-data/geofabrik-and-hot-export
lang: en
category: osm-data
---

Using Geofabrik and HOT Export
================
After learning how to add and edit data in OpenStreetMap (OSM), now
maybe you want the data obtained as a backup or if you want process it
into a Geography Information System software that is Open Source such as
Quantum
GIS ([www.qgis.org](http://www.google.com/url?q=http%3A%2F%2Fwww.qgis.org%2F&sa=D&sntz=1&usg=AFQjCNFCIP2pVPi5ohw-5H7tJ4CzApRQlg)).

Getting OSM Data on Geofabrik Website
-------------------------------------

The OSM data can be obtained easily by downloading it from the
following website:  

[http://download.geofabrik.de/openstreetmap/](http://www.google.com/url?q=http%3A%2F%2Fdownload.geofabrik.de%2Fopenstreetmap%2F&sa=D&sntz=1&usg=AFQjCNGtPxBJsD_G-JOi6U5hWJSqey8KCw)

![download-geofabrik][]

The data is divided into several regions, for Indonesia you can find
at the part of Asia by clicking on the Asia sub region on the blue
table, and then the page will appear like this.

![geofabrik-asia][]

After appearing at the top of the page look like the sub region
divides into countries at Asia, to get the data you need to click
the Indonesian state on the blue table and will appear like this.

![geofabrik-indonesia][]

Then if you want to obtain the Indonesian data with shapefile (.shp)
format, you click on the indonesia-latest.shp.zip link and the file
will be downloaded. There are several formats that can be downloaded
one popular formats such as shapefile (shp) with points, polyline,
and polygon layer.

You can check the last time data is updated. Please note, the server
usually update the data once every 24 hours, so if you just upload data
to OSM, the data does not appear automatically when you download it but
you have to wait for the latest updates from the server.

Getting OSM Data on HOT-Export Website
--------------------------------------

If you just want to download a very specific area with a
particular attribute, you can use the Hot-Exports data download service.

-   Open export.hotosm.org/en so it will appear like this:

![hot-export][]

-   To obtain the data from this website you must have an account first,
    if you don’t have account you must create one. The first step by
    clicking Create Account in the bottom left corner, then fill your
    email, password, and confirmation password, after filling with
    complete click Create Account.  Then you will see a message like
    this “A message with a confirmation link has been sent to your email
    address. Please open the link to activate your account.” indicating
    that your account has been successfully created and you have your
    activation email.

![hot-export-account][]

-   After that log in using your account that you have created. Filled
    in the column email and password then click login.

![hot-export-login][]

-   If you have successfully into the website, to obtain the data you
    want click New Job, then fill in your name and the job description.
    Furthermore, to select the area you are getting, look at the box
    OpenStreetMap maps of the box you can select the area you want to
    get with the highlight area to choose select area with the arrow
    symbol. Then click save.

![new-export-job][]

-   After saved, the next step you fill the column Select Preset File or
    you can ignore with fill No file if the preset file that need not
    exist. Then the file translation filled with No file if the
    translation you need is not there and save it.

![job-configuration][]

-   Then the server will immediately process your request. The process
    depends on the area you choose and the server capacity. After that
    you can select the file format you want to download such as ESRI
    Shapefile. All download requests that you create will appear on the
    Job. So if any time you want to download on the same area, you can
    search the name job for the previous job name that you have created
    and you can download it again without having to click on New Job.

![job-created][]

[download-geofabrik]: /images/en/osm-data/geofabrik-and-hotexport/download-geofabrik.png
[geofabrik-asia]: /images/en/osm-data/geofabrik-and-hotexport/geofabrik-asia.png
[geofabrik-indonesia]: /images/en/osm-data/geofabrik-and-hotexport/geofabrik-indonesia.png
[hot-export]: /images/en/osm-data/geofabrik-and-hotexport/hot-export.png
[hot-export-account]: /images/en/osm-data/geofabrik-and-hotexport/hot-export-account.png
[hot-export-login]: /images/en/osm-data/geofabrik-and-hotexport/hot-export-login.png
[new-export-job]: /images/en/osm-data/geofabrik-and-hotexport/new-export-job.png
[job-configuration]: /images/en/osm-data/geofabrik-and-hotexport/job-configuration.png
[job-created]: /images/en/osm-data/geofabrik-and-hotexport/job-created.png

