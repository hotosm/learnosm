---
layout: doc
title: OSM-Daten in QGIS nutzen
permalink: /de/osm-data/osm-in-qgis/
lang: de
category: osm-data
---

OSM-Daten in QGIS nutzen
=================

> Diese Anleitung kann als [Using_OSM_data_in_QGIS_de.odt](/files/Using_OSM_data_in_QGIS_de.odt) oder als [Using_OSM_data_in_QGIS_de.pdf](/files/Using_OSM_data_in_QGIS_de.pdf) heruntergeladen werden  
> Zuletzt geprüft 2015-07-09

QGIS (früher als Quantum GIS bekannt) ist ein voll ausgestattetes plattformunabhängiges quelloffenes geographisches Informationssystem. Mit QGIS können Sie jederzeit auf aktuelle OSM-Daten zugreifen, die Attribute auswählen, die Sie miteinbeziehen wollen, und leicht als leicht zu benutzendes Shapefile oder SQLite-Datenbank exportieren.

Dieses Kapitel behandelt alles, was dafür nötig ist. Wir gehen davon aus, dass Sie QGIS 2.x schon heruntergeladen und installiert haben. Wenn Sie das noch nicht haben, können Sie das auf <http://qgis.org/de/site/forusers/download.html> tun.

Um Ihre benutzerdefinierten aktuellen OSM-Layer in QGIS zu laden, werden wir uns zunächst die aktuellsten OSM-Daten im **.osm** Rohformat holen. Dann werden wir diese Daten in eine SQLite-Datenbank umwandeln, was ein leichtgewichtiges Datenbanksystem ist, das in einer Datei auf Ihrem System abgespeichert wird. Zuletzt werden wir einen (oder mehrere) Layer erstellen, die lediglich die Attribute enthalten, auf die wir zugreifen wollen. Diese Layer können in QGIS genutzt werden oder in ein anderes Format umgewandelt werden, wie z. B. ein Shapefile.

Auf OpenStreetMap-Daten zugreifen
---------------------------

Als erstes werden wir einige aktuelle OSM-Daten holen. Dafür gibt es mehrere Möglichkeiten.
Natürlich ist das Abfragen der Daten durch den OSM-Server, so wie wir das im JOSM-Editor tun, beschränkt, sodass wir nicht
eine sehr große Anzahl von Rohdaten auf einmal bekommen - jedoch gibt es mehrere Möglichkeiten, auf größere Datenmengen zuzugreifen, wie
in früheren Kapiteln wie [Getting OSM Data](/en/osm-data/getting-data) oder [Using Geofabrik and HOT Export](/en/osm-data/geofabrik-and-hot-export) beschrieben.

Für diese Anleitung nutzen wir die in QGIS integrierte Download-Funktion.

-      Öffnen Sie QGIS und navigieren Sie zu Vektor -> OpenStreetMap -> OpenStreetMap -> Daten herunterladen...
-      Sie können hier mehrere Optionen auswählen - wenn Ihr Fenster schon die Ausmaße anzeigt,
	die Sie haben wollen, klicken Sie auf "Ausmaße der Kartenanzeige". Wenn Sie einen Layer in QGIS geladen haben, der die richtigen Ausmaße hat,
	wählen Sie "des Layers" aus und selektieren Sie den Layer, den Sie benutzen wollen. Hier benutzen wir "Manuell"
	und geben die Breiten- und Längengrade ein, die eine **Zeichen-Box** um den Bereich bilden, auf den wir
	zugreifen wollen. Sie können die Längen- und Breitengrade eingeben, die Sie interessieren, aber bedenken Sie,
	dass der Bereich nicht zu groß sein darf, da Sie ansonsten nicht alle Daten herunterladen können.

![bounding box][]

-      Wählen Sie einen Namen und einen Speicherort für die Dateiausgabe mit **.osm** als Dateiendung und klicken Sie auf OK.
-      Sie werden benachrichtigt, wenn das Herunterladen abgeschlossen ist. Klicken Sie auf "Schließen", um den Download-Dialog
	abzuschließen.

![download complete][]

-      Die OSM-Daten befinden sich nun am gewählten Speicherort.

>   Diese Methode, um auf OSM-Daten zuzugreifen ist die gleiche wie in JOSM oder auf
>   [openstreetmap.org](http://www.openstreetmap.org). Größere aktuelle Daten wollen Sie vielleicht von [HOT export site](http://export.hotosm.org) oder
>   [bbbike.org](http://extract.bbbike.org/) herunterladen. Bedenken Sie beim Download einer extrahierten OSM-Datei,
>   dass Sie diese für die weiteren Schritte zunächst als **.osm**-Datei extrahieren müssen.

Import von Daten nach SQLite
---------------------------

Als nächstes müssen wir unsere rohen **.osm**-Dateien in eine SQLite-Datenbank importieren.

-      Navigieren Sie zu Vektor -> OpenStreetMap -> Topologie aus XML importieren...
-      Wählen Sie im ersten Feld Ihre **.osm**-Datei aus.
-      Sie können den Namen der Ausgabe-Datenbank ändern, wenn Sie möchten.
-      Lassen Sie den Haken bei "(Spatialite)-Verbindung nach Import erzeugen"

![import dialog][]

-      Klicken Sie auf OK.
-      Nach dem Abschluss klicken Sie auf "Schließen".

Erstellen von Layern
--------------

Zuletzt werden wir Layer für QGIS definieren, die unseren Wünschen entsprechen.

-      Navigieren Sie zu Vektor -> OpenStreetMap -> Topologie nach SpatiaLite importieren...
-      Wählen Sie im ersten Feld die eben erstellte Datenbank aus.

![input db file][]

-      Wählen Sie bei "Exporttyp" die Attribute aus, für die Sie einen Layer erstellen wollen. In diesem Beispiel
	werden wir einen Polygon-Layer erstellen.

![export type][]

-      Bearbeiten Sie den Layernamen, wenn Sie möchten.

Bei "Exportierte Tags" passiert die Magie. Hier können wir auswählen, welche Attribute
unser Ausgabelayer beinhalten wird. Dies ermöglicht uns, genau auf die Daten zuzugreifen, die wir
haben wollen.

-      Klicken Sie auf "Aus Datenbank laden", um alle verfügbaren Attribute der Datenbank zu sehen. Vergrößern Sie die Fenstergröße, indem Sie die Ecke ziehen, wenn das hilft. Sie können
	sowohl alle Attribute dieser Daten als auch deren Anzahl  sehen.
-      Überprüfen Sie die Boxen neben den Attributen, die Sie aufnehmen wollen. Dort werden wir einige Attribute auswählen,
	die nützlich für die Repräsentation von Gebäudepolygonen sind.

![export full][]

-      Wenn Sie fertig sind, klicken Sie auf OK.
-      Schließen Sie die Box. Ihr Layer sollte nun automatisch hinzugefügt werden.

![cairo polygons][]

-      Rechtsklicken Sie auf den Layer und klicken Sie auf "Attributtabelle öffnen".

![open attribute table][]

-      Sie sehen eine Tabelle mit den lediglich vorher ausgewählten Attributen.

![attribute table][]

Beachten Sie, dass wir nicht einen Layer **nur** aus Gebäuden erstellt haben. Anstelle dessen haben wir einen Layer erstellt,
der alle Polygone der Originaldaten enthält, aber nur die Tags hat, die wir 
ausgewählt haben. Um den Layer nur Gebäude anzeigen zu lassen, müssen wir eine Abfrage ausführen,
bei der nur Polygone mit building=yes angezeigt werden.

Zusammenfassung
-------

Dieser Prozess vereinfacht es, aktuelle OSM-Daten in QGIS zu laden. Sobald Sie
Layer wie diese in QGIS haben, ist es möglich, sie als Shapefiles abzuspeichern, Abfragen und Filterungen durchzuführen,
und so weiter. Für weitere Details zu diesen Funktionen benutzen Sie das Hilfe-Menü in QGIS.


[bounding box]: /images/osm-data/bounding_box.de.png
[download complete]: /images/osm-data/download_complete.de.png
[import dialog]: /images/osm-data/import_dialog.de.png
[input db file]: /images/osm-data/input_db_file.de.png
[export type]: /images/osm-data/export_type.de.png
[export full]: /images/osm-data/export_full.de.png
[cairo polygons]: /images/osm-data/cairo_polygons.de.png
[open attribute table]: /images/osm-data/open_attribute_table.de.png
[attribute table]: /images/osm-data/attribute_table.de.png
