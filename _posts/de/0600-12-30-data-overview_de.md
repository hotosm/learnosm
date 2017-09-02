---
layout: doc
title: OSM Datenübersicht
permalink: /de/osm-data/data-overview/
lang: de
category: osm-data
---

OSM Datenübersicht
==================


> Diese Anleitung kann heruntergeladen werden als [OSM_Data_Overview_en.odt](/files/OSM_Data_Overview_en.odt) oder [OSM_Data_Overview_en.pdf](/files/OSM_Data_Overview_en.pdf)  
> Gereviewt am 2016-09-05

<!-- In diesem Abschnitt werden wir betrachten wie OpenStreetMap arbeitet, was und dabei hilft zu verstehen wie die Daten aufgebaut sind und wie wir es am besten nutzen.-->

Wie OSM arbeitet
--------------
Wir betrachten wie OpenStreetMap arbeitet. Tausende von Benutzer auf der ganzen Erde bearbeiten ständig die Karten und Fügen Dinge hinzu, aber was tut sich im Hintergrund?  

Wenn man selbst oder ein anderer Benutzer Änderungen macht mittels JOSM oder iD, kommuniziert die Software mit einem zentralen OpenStreetMap Server und benachrichtigt über Änderungen. Auf diesem Server ist eine gewaltige Datenbank, welche die Standordinformationen und Attribute für jedes geografische Objekt in OpenStreetMap beinhaltet.  

Da OSM frei und offen ist, kann jeder die Daten in dieser Datenbank herunterladen. Da es so riesig ist (*es sind selbst komprimiert über 30 GB*), ist es fast unmöglich mit allen Daten gleichzeitig zu arbeiten.  

Durch diese Begrenzung gibt es zahlreiche Methoden, die wir in diesem Abschnitt erklären, wie man Daten **exportieren** und **extrahieren** kann. Exportieren bedeutet OpenStreetMap Daten aus dem ursprünglichen Format in ein für sich passendes Format zu konvertieren. **Extrahieren** bedeutet, Daten aus einem gewählten Bereich auszuschneiden. Es kann auch bedeuten nur bestimmte Daten aus einem Gebiet herauszuziehen. Diese Begriffe werden oft austauschbar verwendet. Wir werden mehr darüber erfahren im OSM Daten Abschnitt.  

Geodaten verwenden
--------------
Falls man kein erfahrener GIS Benutzer ist, ist es wichtig den Unterschied zwischen OSM Bearbeitungssoftware wie JOSM und GIS Software wie Quantum GIS und ArcGIS zu verstehen.  

Editoren wie iD oder JOSM haben eine Kernfunktion, welche Sie gut können - es Benutzern zu erleichtern OpenStreetMap zu bearbeiten. Aber sie sind nicht dafür da Daten abzufragen oder zu analysieren - 
diese Funktion überlasst man besser anderen Anwendungen. GIS Software wie das freie und Open Source [Quantum GIS (QGIS)](http://www.qgis.org) erlaub es Benutzern gut aussehende Karten zu erstellen, Daten abzufragen und zu analysieren und vieles mehr. GIS Software kann auch dazu verwendet werden Geodaten zu bearbeiten, aber es ist viel einfacher OpenStreetMap mit den dazu gedachten OSM Editoren zu bearbeiten.  

Im nächsten Kapitel schauen wir uns Dateiformate von OpenStreetMap und geografische Daten im speziellen genauer an. Danach schauen wir uns Wege für den Zugriff und die Bearbeitung von OSM Daten an und wie man zwischen unterschiedlichen Dateitypen konvertiert.  


Daten beziehen
-----------------

Das ist großartig, aber wie kommt man an die gewünschten Daten?  

In diesem Kapitel werden wir zeigen, wie man OSM Daten exportieren kann. Wir bleiben bei den Grundlagen, aber behalten im Hinterkopf, dass man zum effektiven Arbeiten mit den Daten vielleicht GIS Software benötigt,
wie die freie Quantum GIS Software.  

Bevor wir beginnen, brauchen wir einige Begriffe. Als erstes, **Exportieren** bedeutet Daten aus dem ursprünglichen XML Format in ein für sich passenderes Format zu konvertieren. Im unterschied bedeutet **Extrahieren** Daten aus einem ausgewählten Bereich auszuschneiden. Es kann auch bedeuten nur bestimmte Kartenelemente aus einem Gebiet herauszuziehen. Wir verwenden diese Begriffe öfters in diesem Kapitel, daher ist es wichtig den Unterschied zu verstehen.  

Die OSM API
------------
Der OSM Bearbeitungsprozess funktioniert aufgrund dessen was man API nennt, es erlaubt Bearbeitungssoftware mit dem zentralen Server zu kommunizieren. Verwendet man z.B. JOSM um ein Gebiet zum Mappen auszuwählen, wird ein API Call zum Server gesendet, in dem alle existierenden Daten in dem ausgewählten Gebiet angefragt werden.  

Wenn man Daten in JOSM herunterlädt, **extrahiert ** man also Daten aus einem bestimmten Gebiet von der Erde. Die Daten werden im **.osm** Format gesendet, was anschließend von JOSM bearbeitet werden kann. Wenn man Daten in JOSM herunterlädt und speichert, sieht man, dass der Dateityp **.osm** ist.  Wir werden im nächsten Kapitel mehr darüber sprechen.  
