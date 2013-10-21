---
layout: doc
title: WMS Service Configuration
permalink: /en/map-design/wms/
lang: en
category: map-design
---

<!--
this chapter is a draft because it's not a priority and quite complex
-->

WMS Service Configuration
=============================

In this chapter, we will learn how to set up a WMS (Web Map Service)
that will allow us to easily transmit map images over the internet.
Before we dive in, we must first look at the difference between map
images and the map data that we have been working with so often. Quite
simply, we need to make clear the difference between raster images and
vector data.

So far we have been working with vector data. Vector data is just a
fancy way of describing all the points and lines and shapes that are
contained in an .osm file, a shapefile, or a database. These files
contain raw data on our computers’ hard drives, and when we want to see
what the data looks like, we rely on a program like QGIS or JOSM to read
all the data and draw it for us. Vector format allows us to perform
complex analysis on the data. It permits us to tell QGIS to draw
certain objects in certain ways, and edit pieces of information we want
to change. This is the way we want to be able to access, update, and
use our data, but it isn't very efficient if we want to communicate the
information to someone else.

When we want to communicate the information, we will usually create some
type of raster image. A raster image is just like a photograph. It may
contain a lot of meaning, but it is impossible for us to analyze it or
edit the different pieces. When you look at the map on
[openstreetmap.org](http://www.openstreetmap.org/), you are looking at a
bunch of raster images. These images are must smaller in size than the
data that they are made from, and they are made to look nice. This
makes it easy to view the map, but there is no way to access the
underlying data through these images.

In this chapter we will learn about WMS, which uses HTTP protocol, the
same system used for web pages, to transmit map images over the
internet. The images themselves are created by a server that reads GIS
vector data, which can be in a database, shapefiles, or other geodata
formats. WMS servers are great for transmitting map raster images over
the internet. These shared map tiles can be used as raster (image)
layers in QGIS, ArcGIS, and JOSM.

![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image19.png)

In this chapter we will learn how to install and set up MapServer
([http://www.mapserver.org/](http://www.mapserver.org/)), an open-source
platform for publishing maps, and using it as our own WMS server.

We will build on the previous tutorial in which we created a PostGIS
database and loaded it with OpenStreetMap data. In the appendix of this
chapter, we will also go through the steps necessary to set up MapServer
with OpenStreetMap data on Ubuntu.

This chapter goes through:

1. Installing MapServer Software
2. Create the Mapfile
3. Change the Mapfile
4. Testing WMS
5. Add WMS Layer in QGIS
6. Add WMS Layer in JOSM

Install MapServer Software
--------------------------------------------

1. It is easy to install MapServer and the Apache webserver on Windows
   using the MS4W installer. You can download the installer at
   [http://www.maptools.org/ms4w/](http://www.maptools.org/ms4w/).
   Click on the Downloads tab and get the ms4w_3.0.x.zip file.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image20.png)

2. Unzip the archive and copy the ms4w folder into your root drive
   (most likely `C:\`)
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image05.png)

3. Open the folder and double-click on apache-install. If you have run
   this installation before, you may need to run apache-uninstall first.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image16.png)

4. Open your web browser and go to `<http://localhost>`. You should see
   a page like this:
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image13.png)

5. Next go [http:/localhost/cgi-bin/mapserv.exe](http:/localhost/cgi-bin/mapserv.exe). 
   Here you should see:
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image00.png)

6. If you see these pages correctly all is well! The Apache webserver
   is running and MapServer works correctly.

In case you are wondering, this <http://localhost> means that you want
your web browser to access the web server running locally. In other
words, it is requesting a web page from Apache, the web server that you
just installed on your machine.

Create the Mapfile
--------------------------

The way that MapServer serves image files is by using a Mapfile, which
describes many things about your map, including the data you want to
display, the styles you want to use, and projection and extent
information. Writing a Mapfile can be a little complicated, but luckily
there is a QGIS plugin that can automatically create a Mapfile for us.

1. Open QGIS and go to Plugins -> Fetch Python Plugins.

2. Find the MapServer Export plugin and install it, if it is not
   already installed.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image10.png)

3. Now load the PostGIS layers that you created in the first chapter,
   by going to “Add PostGIS Layer.”
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image14.png)

4. Before we create our Mapfile we need to do one small thing. The
   plugin doesn't work with some of the newer QGIS features, so we need
   to change the symbology of each of our layers to the “Old
   Symbology.” Right-click on each layers and go to “Properties.”
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image01.png)

5. On the “Style” tab click “Old Symbology” in the upper right corner.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image21.png)

6. Answer “Yes” and click OK.

7. Repeat this for each layer.

8. Now we are ready to open the plugin. Go to Plugins -> MapServer 
   Export... -> MapServer Export. It may also be under Web ->
   MapServer Export or by clicking on the button show here:
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image08.png)

9. This plugin will create a Mapfile for us automatically, but first we
   need to fill in a few options. Give the file a name and location,
   such as C:\test.map. Set the Image type to png and the width and
   height to 700. Lastly, set the MapServer URL to
   http://localhost/cgi-bin/mapserv.exe. 
   When you are finished click OK.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image15.png)

10. You may be asked to save your project. Do so now.

11. Now open your web browser and go to:

    http://localhost/cgi-bin/mapserv.exe?MAP=C:\test.map&LAYERS=ALL&MODE=MAP

12. If your Mapfile is located elsewhere change the bold part to the
    location of the file. You will see the following error:
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image24.png)

    > You may also get an error such as “loadStyle(): General error
    > message. Invalid WIDTH...” In this case you may need to change the
    > width line in the mapfile from 0.91 to 1 or greater.

    The problem is that our Mapfile made a few assumptions, namely that
    we would have a couple of files prepared with symbols and fonts.
    Let’s remove this from our Mapfile manually so that we can see
    everything working.

13. Find the Mapfile on your computer and open it with Notepad.

14. Comment out the lines beginning “FONTSET” and “SYMBOLSET” by
    inserting a # symbol in front of them.
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image11.png)

15. Scroll to the bottom of the file and comment out the line beginning
    with “SYMBOL,” because this will cause an error to occur.
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image06.png)

16. Save the file and then reload the page in your browser. MapServer
    should now be correctly rendering and serving your map.

![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image03.png)

Change the Mapfile
--------------------------

It is possible to make many adjustments to the style of your map by
adjusting the Mapfile. The easiest way to change the thickness and
color of lines might be to change them in QGIS and then recreate the
Mapfile, but it’s also easy to make adjustments to the file directly.

If you open your Mapfile in Notepad, notice that there is a lot of
information at the top. Some of it you may recognize, but most of it
you probably will not. You will recognize the line that reads “SIZE 700
700” because you told the QGIS plugin to make the image 700 by 700
pixels.

We won’t discuss the Mapfile in depth here, but if you scroll to the
bottom of the file you'll see four sections that being with the word
“LAYER” and finished with “END.” Each of these sections describes
everything that MapServer needs to know about one of the layers that
make up our map. The roads layer looks something like this:

    LAYER
     NAME 'planet_osm_roads'
     TYPE LINE
     DUMP true
     TEMPLATE fooOnlyForWMSGetFeatureInfo
    EXTENT 34.121031 31.071647 35.214117 31.691029
      CONNECTIONTYPE postgis
      CONNECTION "dbname='osmgis' user='postgres' password='postgres' sslmode=disable"
      DATA 'way FROM "planet_osm_roads" USING UNIQUE osm_id USING srid=4326'
      METADATA
        'ows_title' 'planet_osm_roads'
      END
      STATUS OFF
      TRANSPARENCY 100
      PROJECTION
      'proj=longlat'
      'datum=WGS84'
      'no_defs'
      END
      CLASS
         NAME 'planet_osm_roads'
         STYLE
           WIDTH 0.91
           COLOR 36 21 207
         END
      END
    END
   

One thing you may note here is the end block that begins with “STYLE.”
Here you can change the thickness of the lines in this layer, and the
color of the lines. Note that the three numbers next to color represent
the red, green, and blue values of the color. Each number can go up to
255. For example, 0 0 255 would be completely blue, whereas 255 0 255
would be purple, because it would be an even mix of red and blue.

Also, you may notice that our points layer is not being displayed as we
intended - because we removed the symbols in our Mapfile. In order to
have our points layer display icons, we need to define the image files
that we want to use. To do this, we create a block in our Mapfile,
above the LAYER sections. The block will look something like this:

    SYMBOL
      NAME "circle"
      TYPE PIXMAP
      IMAGE "circle.png"
    END

![circle.png]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image23.png)

This defines an icon with the name “circle” and connects it with the
image circle.png. This assumes that we have an icon with this name in
the same directory. Then we can use this definition in our points layer
and the points will be rendered with the icon. We uncomment the
“SYMBOL” line and then reload the browser.

    CLASS
       NAME 'planet_osm_point'
       STYLE
         SYMBOL "circle"
         SIZE 7.0
         OUTLINECOLOR 0 0 0
         COLOR 187 154 69
       END
    END

![map rendered with icon for points]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image17.png)


There is a lot that you can do with MapServer styles. For more
information visit.

Testing WMS
--------------------------

Your WMS server should be already be configured, so let’s try it out.
As we've already seen, WMS works over the HTTP protocol, so we can
visit a link in our web browser to test the capabilities of our server.

1. Open your web browser and visit:
   [http://localhost/cgi-bin/mapserv.exe?map=C:\\test.map&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities](http://localhost/cgi-bin/mapserv.exe?map=C:/test.map&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities)

   This should cause a file to download. It may be named mapserv.exe,
   but it is in fact an XML text file that explains the capabilities of
   your server. 

2. Open it with Notepad and you will see some of the
   information associated with your server and Mapfile. Search the
   file for the word “error.” Hopefully, there are none!

Add WMS Layer in QGIS
--------------------------

1. You can add a WMS layer in QGIS with the “Add WMS Layer” button.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image04.png)

2. To add your WMS server, click “New.”

3. Provide a name for your server and for the URL enter:
   [http://localhost/cgi-bin/mapserv.exe?map=C:/test.map](http://localhost/cgi-bin/mapserv.exe?map=C:/test.map)
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image18.png)

4. Click OK.

5. Now click “Connect” to see the layers that are available. These are
   the four layers that were defined in the Mapfile.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image22.png)

You can add any of these layers as a raster layer in QGIS. Remember
that these WMS layers are images, and not vector data, so you won’t
be editing anything, but it’s a great way to provide reference
images.

Add WMS Layer in JOSM
--------------------------

We can also easily add our WMS maps as layers in JOSM.

1. Open JOSM and go to the Preferences Menu.

2. Click on the tab that says “WMS TMS.”
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image12.png)

3. At the bottom, click on the + button.

4. Under “Service URL” enter
   [http://localhost/cgi-bin/mapserv.exe?map=C:/test.map](http://localhost/cgi-bin/mapserv.exe?map=C:/test.map)
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image09.png)

5. Click “Get Layers.” You will see a list of the four layers on your
   WMS server.

6. Select one and click OK and OK again.

7. After you have downloaded some data from OSM, you will be able to
   load your WMS layers. Go to the “Imagery Menu” and find your new
   layer, which is called “Unnamed Imagery Layer” (unless you changed
   it).
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch5_image07.png)

8. Click on your new layer to add it as a background layer.

Summary
-------------------

WMS is a commonly used protocol for delivering a map image across the
internet. With WMS a user makes a request for a map image with certain
parameters, such as the width and height, and the mapserver delivers the
image.

In this chapter we learned how to set up MapServer and configure it as a
WMS server, using the data that we imported into PostGIS to create map
images. You can get more information on the WMS architecture at
[http://docs.geoserver.org/latest/en/user/services/wms/reference.html](http://docs.geoserver.org/latest/en/user/services/wms/reference.html).

In the next chapters we will look at other ways of styling and
transmitting maps across the internet. If you’re interested in
instructions for setting up MapServer on Ubuntu Linux, see the Appendix
at the end of this chapter.

Appendix - Installing MapServer on Ubuntu Linux
----------------------------------------------------

In this appendix we will go through the installation steps for setting
up MapServer on Ubuntu Linux. These steps follow the Appendix in
chapter one, and we assume that you have already installed PostGIS and
imported OpenStreetMap data using osm2pgsql.

**Install MapServer and Apache**

To install MapServer on Ubuntu 11.04 (Natty Narwhal), run these
commands:

    sudo apt-get -y install apache2
    sudo apt-get -y install python-software-properties
    sudo add-apt-repository ppa:ubuntugis/ubuntugis-unstable
    sudo apt-get update
    sudo apt-get -y install cgi-mapserver mapserver-bin

To install MapServer on Ubuntu >= 11.10:

    sudo apt-get -y install apache2
    sudo apt-get -y install cgi-mapserver mapserver-bin

If you visit
[http://localhost/cgi-bin/mapserv](http://localhost/cgi-bin/mapserv), it
should say “No query information to decode. QUERY\_STRING is set, but
empty.” Note that if you are accessing it from another computer (if you
are setting up on a remote server), replace localhost with the server’s
IP address.

**Create a Mapfile**

The installation of MapServer is complete, so now all we need is a
Mapfile that will contain the proper information for our layers. Since
we are configuring MapServer on an Ubuntu server, we can’t use QGIS here
to create the Mapfile for us like we did in Windows. We won’t discuss
the intricacies of the Mapfile here, but below is a Mapfile that will
work with the setup we have created thus far. Note that we've only
included information for one layer, but you can easily add the
additional layers using the same format.

/var/www/test.map

    MAP
      NAME "My-Test-Map"
      # Map image size
      SIZE 700 700
      UNITS meters
   
      EXTENT 3756680.934870 3642952.056250 3899342.315130 3723789.193750
      PROJECTION
        'proj=longlat'
        'datum=WGS84'
        'no_defs'
      END
      
      # Background color for the map canvas -- change as desired
      IMAGECOLOR 255 255 255
      IMAGEQUALITY 95
      IMAGETYPE png
    
      OUTPUTFORMAT
        NAME png
        DRIVER 'GD/PNG'
        MIMETYPE 'image/png'
        IMAGEMODE RGBA
        EXTENSION 'png'
      END
    
      WEB
        IMAGEPATH '/tmp/'
        IMAGEURL '/tmp/'
      
        # WMS server settings
        METADATA
          'ows_title'           'My-Test-Map'
          'ows_onlineresource'  'http://198.61.205.151/cgi-bin/mapserv?MAP=/var/www/test.map'
          'ows_srs'             'EPSG:4326'
        END
    
        TEMPLATE 'fooOnlyForWMSGetFeatureInfo'
      END
    
      LAYER
        NAME 'planet_osm_line'
        TYPE LINE
        DUMP true
        TEMPLATE fooOnlyForWMSGetFeatureInfo
        UNITS METERS
        EXTENT 3756680.934870 3642952.056250 3899342.315130 3723789.193750
        CONNECTIONTYPE postgis
        CONNECTION "dbname='osm' user='postgres' sslmode=disable"
        DATA 'way FROM "planet_osm_line" USING UNIQUE osm_id USING srid=900913'
        METADATA
          'ows_title' 'planet_osm_line'
        END
        STATUS OFF
        TRANSPARENCY 100
        PROJECTION
          'proj=longlat'
          'datum=WGS84'
          'no_defs'
        END
        CLASS
          NAME 'planet_osm_line'
          STYLE
            WIDTH 0.91
            COLOR 46 195 130
          END
        END
      END
    END
    

Note that you may need to change the “EXTENT” lines depending on the
location of your data. These extents are provided in meters, because
our data is in mercator projection.

You will now be able to access your WMS in QGIS and JOSM. See parts 6
and 7 of this chapter for more information. Your WMS address will be:

http://<YOUR_SERVER_IP>/cgi-bin/mapserv?MAP=/var/www/test.map

<!--
[[a]](#cmnt_ref1)MrPatrickOswald:

just a simple question... why using mapserver and not geoserver? or at
least mention that there is also geoserver and the desicion why you
choose mapserver

[[b]](#cmnt_ref2)MrPatrickOswald:

as a real use example maybe better or additionally use a orbview image
(or we use bappeda -aquired GeoEye-Data) that than can be used in JOSM
(not via the import image plugin but via the WMS-layer functiuonality..)
I had the experience that the import image plugin is sluggish and slow
and its much better to use a wms to use your own georeferenced imagery
in JOSM . I still prefer the Geoserve sicne its easier to configure for
this purpose (background imagery for JOSM).
--> 
