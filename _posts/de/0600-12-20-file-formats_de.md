---
layout: doc
title: Dateiformate
permalink: /de/osm-data/file-formats/
lang: de
category: osm-data
---

Dateiformate
=============

> Diese Anleitung kann heruntergeladen werden als [File_Formats_en.odt](/files/File_Formats_en.odt) or [File_Formats_en.pdf](/files/File_Formats_en.pdf)  
> Reviewed 2016-09-05

Wie bei anderen Daten auch, gibt es mehrere Arten wie man geografische Daten auf einem Computer speichern kann. Man kann sie in Datenbanken, spezialisierten System zum Speichern und Abrufen von Daten, speichern und natürlich gibt es Datenbanken speziell designt zum Speichern von geografischen Daten. Sie können auch in herkömmlichen Computerdateien gespeichert werden, wobei es viele unterschiedliche Dateiformate für geografische Daten gibt.  

In diesem Kapitel werden wir uns einige Wege zum Speichern von geografischen Daten anschauen, erklären wie sie arbeiten und wie sie typischerweise verwendet werden.  

.OSM Files
-----------

Das **.osm** Dateiformat ist von OpenStreetMap. Man findet es sonst nirgends. Wenn man jemals Daten herunter geladen und mit JOSM in einer Datei gespeichert hat, hat man vielleicht bemerkt, dass die Datei mit der Erweiterung **.osm** gespeichert wurde. Falls man GIS Anwender ist, hat man vielleicht bemerkt, dass diese Dateien nicht einfach mit Software wie QGIS geöffnet werden können.  

Warum also speichert man OSM Daten in einem Dateiformat, das niemand anderes verwendet? Die Antwort ist, dass viele geografische Dateiformate noch vor dem Internet entstanden sind und für schnellen Zugriff und Abfragen, wie Datenbankabfragen, entwickelt wurden. OSM Daten wurden dagegen für den leichten Austausch über das Internet in einer standardisierten Form entwickelt. Daher sind **.osm** Dateien in XML geschrieben und enthalten geografische Daten in einem strukturierten,  geordneten Format. Eine einfaches **.osm** Datei sieht im Texteditor wie folgt aus:  

![Sample OSM XML file][]

Daten im **.osm** Format zu bekommen ist leicht - man macht es jedes Mal, wenn man Daten in JOSM herunterlädt, aber diese Dateien zur Analyse oder Kartenerstellung zu verwenden ist nicht einfach. Man konvertiert die Daten daher besser in ein anderes Format, oder lässt die Daten von einem Dienst  konvertieren.  

> Rohe OSM Daten sind normalerweise in **.osm** Dateien gespeichert, man sieht aber auch Dateien mit **.bz2** und **.pbf** Endungen. Das sind im wesentlichen komprimierte **.osm** Dateien um Platz zu sparen, was sehr nützlich ist, wenn man mit großen Dateien arbeitet.  

Shapefiles
----------

Das **Shapefile** ist ein  vielfach eingesetztes Format zum Speichern von geografischen Vektor Daten. Es wurde durch ESRI entwickelt, eine Firma die ArcGIS entwickelt, eine bekannte Sammlung von GIS Anwendungen.  

Shapefiles sind tatsächlich eine Sammlung unterschiedlicher Dateien. Ein Shapefile mit Gebäude Dateien könnte z.B. Dateien mit folgenden Endungen haben:  

-	buildings.**shp**
-	buildings.**shx**
-	buildings.**dbf**

Shapefiles haben oft auch zusätzliche Dateien, welche andere Informationen beinhalten.  

Ein Shapefile kann nur einen Featuretyp (Punkte, Linien oder Polygone) beinhalten und jedes Feature hat seine Attribute in einer Tabelle beinhaltet. Anders als bei OpenStreetMap, wo jedes Objekt eine unbegrenzte Anzahl von Tags haben kann, müssen Featureattribute in einem Shapefile der im Shapefile definierte Tabellenstruktur entsprechen, welche wie folgt aussehen kann:  

![Shapefile attributes][]

OpenStreetmap Daten können in Shapefiles konvertiert werden. Zahlreiche Webseiten bieten konvertierte OSM Daten als Shapefiles an. Diese werden im [nächsten Kapitel](/de/osm-data/getting-data) diskutiert.  

Databases
---------

Viele Arten von Informationen sind in Datenbanksystemen gespeichert, welche einen logische Weg zur Organisaton und zum Zugriff auf Daten anbieten. Geografische Daten sind nicht anders, obwohl spezielle Geodaten Datenbanken zum Umgang mit komplexen Funktionen zur Abfrage geografischer Daten notwendig sind.  

OpenStreetMap Daten werden oft in PostgreSQl datenbanken mit PostGIS Erweiterung gespeichert. Diese Art von Datenbank bietet schnellen Datenzugriff und kann leicht zusammen mit Mapnik verwendet werden, eine Software, die die Map Tiles in Web Slippy Maps erstellt. Es gibt zahlreiche Werkzeuge für den Import von rohen OSM Daten in eine PostgreSQL Datenbank.  

Eine andere Datenbank ist SQLite, welche ähnliche Funktionen wie eine PostgreSQL Datenbank anbietet, es wird aber alles in einer einzigen Datei gespeichert und benötigt keine laufende Datenbanksoftware. Sie sind etwas schwerer selbst zu erstellen, aber man kann damit leichter arbeiten wenn man nur wenige Daten hat.  

Zusammenfassung
-------

In den folgenden Kapiteln werden wir sehen, wie man Daten in unterschiedlichen Formaten aus dem Internet herunterlädt und wie man zahlreiche Werkzeuge anwendet, um rohe OSM Daten selbst zu verändern.  


[Sample OSM XML file]: /images/osm-data/example_osm.png
[Shapefile attributes]: /images/osm-data/shapefile_attributes.png