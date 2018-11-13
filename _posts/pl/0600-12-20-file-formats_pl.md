---
layout: doc
title: Formaty plików
permalink: /pl/osm-data/file-formats/
lang: pl
category: osm-data
---

Formaty plików
=============

> Ten przewodnik może zostać pobrany jako [File_Formats_pl.odt](/files/File_Formats_pl.odt) lub [File_Formats_pl.pdf](/files/File_Formats_pl.pdf)  
> Przejrzano 05.09.2016

Jak dla każdego innego typu danych, tak i dla danych geograficznych są różne sposoby na przechowywanie ich na komputerze. Mogą być zapisane w bazie danych, która jest specjalnym systemem przechowywania i przetwarzania danych i w rzeczywistości jest specjalnie zaprojektowany system bazodanowy do przechowywania danych geograficznych. Mogą być również przechowywane w tradycyjnych plikach komputerowych, które oferują wiele różnych formatów dla danych geograficznych.  

W tym rozdziale przyjrzymy się kilku sposobom przechowywania danych geograficznych wyjaśniając, jak one działają i jakie jest ich typowe użycie.  

Pliki .OSM
-----------

Format plików **.osm** jest specyficzny dla OpenStreetMap. Nie wykorzystasz go nigdzie indziej. Jeżeli kiedykolwiek pobierałeś dane używając JOSM i zapisałeś je jako plik, to być może zauważyłeś, że plik został zapisany z rozszerzeniem **.osm**. Jeżeli jesteś użytkownikiem GIS, to mogłeś też zauważyć, że nie jest łatwo otworzyć te pliki używając oprogramowania takiego, jak QGIS.  

Więc dlaczego OSM przechowuje dane w formacie, którego nikt inny nie może użyć? Odpowiedzią jest fakt, że wiele formatów danych geograficznych powstało przed erą internetu i są zaprojektowane do szybkiego dostępu i odpytywania tak, jak baza danych. Z kolei dane OSM są zaprojektowane do łatwego przesyłania przez internet w standardowym formacie. Dlatego pliki **.osm** są kodowane w XML i zawierają dane geograficzne w usystematyzowanym i uporządkowanym formacie. Prosty plik **.osm**, otwarty w edytorze tekstu, może wyglądać tak, jak ten:  

![Sample OSM XML file][]

Pozyskiwanie danych w formacie **.osm** jest proste - w rzeczywistości robisz to za każdym razem, kiedy pobierasz dane w JOSM, ale używanie tych danych do analizowania i projektowania mapy nie jest łatwe. Dlatego lepiej przekonwertować dane do innego formatu lub pobrać z usługi, która skonwertuje je dla Ciebie.  

> Raw OSM data is stored in **.osm** files usually, but you may also see files ending in **.bz2** and **.pbf**. These are essentially **.osm** files that have been compressed to save space, which can be extremely helpful when working with large data files.  

Shapefiles
----------

The **shapefile** is a widely used format for storing vector geographic data. It was developed by ESRI, the company that makes ArcGIS, a popular suite of GIS applications.  

Shapefiles are actually a collection of several different files. For example, a shapefile that contains building data might have files with the following extensions:  

-	buildings.**shp**
-	buildings.**shx**
-	buildings.**dbf**

Shapefiles will often have additional files too which contain other information.  

A shapefile must be designated to hold only one type of feature (points, lines, or polygons), and each feature has it's attributes contained in a table. Unlike the OpenStreetMap system in which every object can have an unlimited number of tags, the attributes of features in a shapefile must fit into the shapefile's defined table structure, which might look something like this:  

![Shapefile attributes][]

OpenStreetMap data can be converted into shapefiles. Various websites provide shapefiles converted from OSM data. These are discussed in the [next chapter](/en/osm-data/getting-data).  

Databases
---------

Many types of information are stored in database systems, which provide a logical way of organizing and accessing data. Geographic data is no different, although databases designed for geodata are specialized to handle the complex functions that querying geographic data requires.  

OpenStreetMap data is often stored in a PostgreSQL database with PostGIS extensions. This type of database provides fast access to the data and can be used easily with Mapnik, a piece of software that creates the map tiles used in web slippy maps. There are several tools available for importing raw OSM data into a PostgreSQL database.  

Another type of database is known as SQLite, which provides similar functionality as a PostgreSQL database, but is all stored in a single file and doesn't require database software to be running. These are a little more difficult to create yourself, but can be easier to work with for small sets of data.  

Podsumowanie
-------

In the following chapters we will see how you can download data in various formats from the internet, and how you can use various tools to manipulate the raw data on your own.  


[Sample OSM XML file]: /images/osm-data/example_osm.png
[Shapefile attributes]: /images/osm-data/shapefile_attributes.png