---
layout: doc
title: Luft- und Satellitenbilder nutzen
permalink: /de/josm/aerial-imagery/
lang: de
category: josm
---

Luft- und Satellitenbilder nutzen
=================================


Das Nachzeichnen von Luft- und Satellitenbildern ist eine einfache und
leistungsfähige Art und Weise zu OpenStreetMap beizutragen. Besonders
wenn eine hohe Auflösung und eine klarer Himmel bei der Aufnahme vorliegen,
kann das Abdigitalisieren von Luft- und Satellitenbildern das Grundgerüst 
für OSM-Karten liefern. Das ist sehr nützlich, da es das Überprüfen oder
Erfassen von Attributdaten für Leute im Feld einfacher macht. 

Nichtsdestotrotz muss man einige Dinge beim Nachzeichen von Luft- und 
Satellitenbildern beachten, damit Objekte nicht an der falschen Stelle
platziert werden. Es gibt zwei wichtige Aspekte, die beachtet werden 
müssen.:

1.  Auflösung: Die Auflösung bezieht sich auf den Detailgrad der Bild-
	aufnahmen bzw. auf die Anzahl von Pixeln, aus denen das Bild besteht.
	Ein Pixel ist die kleinste Einheit eines Bildes. Je kleiner die Fläche
	ist, die von einem Pixel dargestellt wird, desto besser ist die Auf-
	lösung. Mit kleineren Pixeln kann man die Objeke auf der Erde besser 
	unterscheiden, wie man in der Abbildung weiter unten sehen kann. Auf 
	der linken Seite ist ein Bild mit niedrigerer Auflösung und weniger
	Pixeln auf dem Bild. Es ist schwierig das Puzzlestück zu erkennen,
	weil der Großteil des Bildes als Teil des Puzzlestückes dargestellt 
	ist. Das Bild auf der rechten Seite hat eine hohe Auflösung und viel 
	kleinere Pixel und ermöglicht es das Puzzlestück viel besser zu erkennen. 
	In OSM möchtest Du am liebsten Bilder mit hoher Auflösung nutzen können.
	Zivile Luft- und Satellitenbilder bieten eine Auflösung von unter einem 
	Meter, was bedeutet, dass jedes Pixel einer Fläche von einem Quadratmeter
	darstellen. Das ist schon sehr gut!

    ![puzzle][]

2.  Georeferenz: Die Georefernz (oder Raumbezug) ist der Begriff für das
	Verorten der Pixel, oder einfacher, wie genau die Pixel die Positionen
	der Objekte auf der Erdoberfläche darstellen. Das ganze ist ein relativ
	komplexer Prozess und je größer die Höhenunterschiede auf der Oberfläche
	sind, desto schwieriger ist das georeferenzieren. Satelliten sind 
	hunderte Kilometer von der Erdoberfläche entfernt und wenn sie "flache"
	Bilder schießen, die eine "gewölbte" Erdoberfläche darstellen, ist es
	klar, dass Verzerrungen und Versätze enstehen. Einen Bildversatz erkennt man, 
	wenn man zwei Bilder von der gleichen Region vergleicht, z.B. beim Zoomen, 
	wobei ein vorher gezeigtes Bild durch ein neues mit einer besseren 
	Auflösung ersetzt wird. Kannst du Sprünge/Verschiebungen von Objekten
	in den Bilder erkennen?


Um zu verstehen wie ein Bildversatz entsteht, stell dir vor, du machst ein Foto
von einer Statue und druckst es aus. Jetzt versuche es zu verformen und 
verziehen, damit es die dreidimensionale Form der Statue bekommt. Das gleiche
passiert beim Georeferenzieren von Luft- und Satellitenbildern.

Zum Glück sind die Kameras in Satelliten und Flugzeugen fortschrittlich mit
hoher Bildgenauigkeit und damit hoher Auflösung ausgestattet (meistens im 
Zentimeterbereich). Auf der anderen Seite funktioniert die Georeferenzierung 
bei Satellitenbildern nicht so gut, für die die Einheit im Meterbereich liegt.
Eine Georeferenz von 5-10 Metern wird als gut betrachtet.

Wenn du versuchst ein Gebiet mit Hilfe von Satellitenbildern genau zu 
kartieren, denk dran, dass hochauflösende Bilder nicht das einzige Mittel
zu einer hohen Lagegenauigkeit der Objekte führen. Beinahe alle Objekte im
Bild haben einen Versatz von ihrer tatsächlichen Lage am Boden. 

Es gibt aber Wege, mit denen man die Ungenauigkeit des Versatzes minimieren 
kann. Wir zeigen dir die beiden wichtigsten Szenarios und Methoden, um den
Versatz in Luft- und Satellitenbildern zu minimieren:

1. Du möchtest Luft- und Satellitenbilder eines Gebietes nachzeichnen, das 
bereits in OSM kartiert wurde.

2. Du möchtest Luft- und Satellitenbilder eines Gebietes nachzeichnen, von 
dem es noch keine Daten in OSM gibt. 


Versätze mit existierenden Daten in OSM
---------------------------------------

Nach dem Download von OSM-Daten und dem Hinzufügen von Luft- oder Satelliten-
bildern erkennst du manchmal nach dem Zoomen in die höchste Auflösung, dass 
die OSM-Daten, insbesondere Straßen, nicht genau über den Bilddaten liegen. 

![existing data][]

Viele OSM-Anfänger glauben, dass die Straßen falsch nachgezeichnet wurden und
verschieben die Straßen zu der vermeintlich besseren Position. Das Verschieben
der Straßen kann völlig __FALSCH__ sein! Es gibt die Möglichkeit, dass die 
Bilder schlecht verortet sind, im Vergleich zu der Realität im Feld. 

Eine Möglichkeit zu überprüfen, ob die Bilder einen Versatz haben ist durch
die Nutzung GPS-Tracks möglich. Um das zu tun, füge __existierende GPS-Tracks__
(deine oder von anderen Leuten -- mehr Informationen, wie das geht gibt es hier:
[Adding](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[GPS](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[Data](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[to](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[OSM](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit)[server](https://docs.google.com/a/engelsted.co/document/d/1jjlthSuc9yltWxQDKxeQD4OO9LvH_DaGwEsdlxSE6l8/edit))
zum Gebiet, das Du nachzeichnest hinzu. Klicke auf 
![download][] und dann auf «GPS-Rohdaten» oben im «Daten Herunterladen» Fenster. 
Nach dem Download wird eine zusätzliche Ebene «Downloaded GPX data» angezeigt.

![downloaded GPX][]

In diesem Beispiel mit GPS tracks (in Rot) siehst Du, dass die existierenden 
Daten (hier: Straßen) korrekt positioniert sind. Die Bilder sind somit nicht 
korrekt georeferenziert und haben einen Versatz im Vergleich zur Wirklichkeit.
Sie müssten angepasst werden.

> Lass dich nicht dadurch verwirren, dass die Tracks wie eine Abfolge von Linien
> aussehen und nicht eine durchgängige Linie. Die meisten GPS-Empfänger haben
> eine Genauigkeit von 2-5m, was nicht ausreichend ist, um Straßen exakt zu
> kartieren, weil man meistens nicht in der Mitte der Straße fahren oder laufen
> kann. Stell dir einen "durchschnittlichen" GPS-Track irgendwo in der Mitte
> der existierenden Linien vor. 

Um die Bilddaten zu versetzen, rechtsklicke auf die Bildebene im Ebenenmenü 
oder klicke auf "Neuer Versatz" im Hintergrund-Menü oder nutze den Versatz-Button
in der linken toolbar. 
![adjust button][]. 

Dann verschiebe das Bild so, dass es korrekt mit den Tracks übereinstimmt. Klicke
auf ein anderes Werkzeug, sobald du fertig bist. Für manche Projekte speichern
Leute die Versatzinformation im Wiki oder anderen Ressourcen, sodass Leute, die
an einer Region zusammenarbeiten die gleichen Werte nutzen können.  Du kannst 
dem Versatz auch einen "Lesezeichen-Namen" vergeben, der dann im Hintergrund-
Menü gespeichert wird. 

![adjust window][]

![downloaded GPX][]

Jetzt sind die Bilder angepasst und du kannst sie weiter nachzeichnen. Während
des Kartierens kannst Du die Ebene "GPS-Rohdaten" verstecken, wenn es dich bei
der Arbeit stört.

![adding to existing data][]

Eine letzte Sache noch: der Versatz muss nicht überall im Bild der gleiche sein!
Das gilt insbesondere für Regionen mit einem abwechslungsreichen Relief. Wenn
wieder ein Versatz vorliegt, wiederhole den gesamten Prozess einfach. 

Versätze ohne existierende OSM-Daten
------------------------------------

Es kann passieren, dass du der erste bist, der ein Gebiet in OSM kartierst, 
z.B. in ländlichen Regionen oder in Entwicklungsländern. Dann sind meistens
keine OSM-Daten und GPS-Tracks zum Download verfügbar. 

![no data][]

Wie geht man damit um, wenn due keine Referenz hast, um den Versatz der Bilder
zu kontrollieren? Es gibt zwei Wege dies zu umgehen: 

1.  Geh ins Feld: Wenn du die Möglichkeit hast ein GPS-Geräte in dem Gebiet
	zu nutzen, nehme Wegpunkt an signifikanten Objekten auf, die auf den Bildern
	zu sehen sind, und nehme Tracks von den Straßen auf. Füge diese dann 
	zu JOSM hinzu.
	
2.  Nutze existierende Daten: Wenn du nicht ins Feld gehen kannst, dann ist eine
	weitere Option sich andere als __Open Database License data (ODbl)__ 
	lizensierte Daten zu besorgen. Wenn du das kannst, ist der beste Weg zu 
	prüfen, ob dein Bild einen Versatz hat, es mit einem korrekt georeferenzierten
	Bild zu vergleichen. Wenn du ein Bild, basierend auf einem anderen Bild, 
	verschieben möchtest, ist der beste Weg die Transparenz des Bildes zu 
	verändern. Um das zu tun klicke auf den Deckkraft-Regler (im Ebenen-Menü) und
	verändere die Transparenz des Bildes. 

    ![change opacity][]

Meistens haben öffentliche Bildquellen eine schlechte Auflösung von über 10 Meter
und wird evtl. schlechter sein, als anders verfügbare Bilder. 

Wenn du Zugriff auf Vektordaten hast, sind Straßen, Seen, Flüsse oder Gebäude die 
besten Optionen, um den Versatz von Bildern zu bestimmen. Versuche Grenzlinien zu 
vermeiden, weil diese meist nicht verlässlich sind, um den Versatz herauszufinden. 


Zusammenfassung
---------------

Bilder nachzuzeichnen ist eine Technik, die das Kartieren in OSM schneller
und effizienter macht. Allerdings muss sie mit Präzision und Vorsicht 
angewendet werden. Es kann passieren, dass du ein Gebiet digiatlisierst 
und die Luft- oder Satellitenbilder haben einen Versatz. Sei es durch
niedrige Auflösung oder schlecht georeferenzierte Bilder, es gibt Wege 
mit diesen Ungenauigkeiten umzugehen. Diese beziehen sich meist auf das
nachreferenzieren mit Hilfe von GPS-Rohdaten oder -Tracks. 

<!-- From here onwards is the contents of another version of aerial imagery, which was waiting translation, but was in the editing section.  It will require language skills to do it, but it may be good to review both & then keep the best bits - in German please.

Aerial Imagery
================


This section of LearnOSM is in the process of being translated. If you would like to assist with translating this site, please see [CONTRIBUTING.md](https://github.com/hotosm/learnosm/blob/gh-pages/CONTRIBUTING.md).

---

Tracing imagery is an easy and powerful way to contribute to
OSM. Using imagery to draw points, lines and shapes on the ground is called
**digitizing**. It can often be separated from the act of collecting attribute
data on the ground, which is often called **ground-truthing**.

Digtizing imagery can provide the skeleton of OSM maps, which
makes ground-truthing easier for people in the field.

In this chapter we'll learn a little bit more about how aerial imagery works.

About Imagery
-------------

Aerial imagery is the term that we use to describe photographs that are taken from the sky.
These can be taken from airplanes, helicopters, or even kites and balloons, but the most
common source of imagery comes from satellites orbiting the Earth.

[In the chapter on GPS](/en/beginner/using-gps) we learned about the dozens of satellites
orbiting Earth which allow our GPS receivers to identify our latitude and longitude. In
addition to these GPS satellites, there are also satellites which take photos of the earth.
These photos are then manipulated so that they can be used in GIS (mapping) software. 
Bing Aerial Imagery is made up of satellite photos.

Resolution
----------

All digital photographs are made up of pixels.  If you zoom in very close on a photograph, you will notice the the image starts to get blurry, and eventually you’ll see that an image is made up of thousands of little squares that are each a different color.  This is true whether the photograph is taken with a handheld camera, a mobile phone, or a satellite orbiting Earth.

![Image resolution][]

Resolution refers to the number of pixels wide by the number of pixels high that an image is.  More pixels means higher resolution, which means that you are able to see greater detail in the photograph.  Resolution in handheld cameras is often measured in megapixels.  The more megapixels your camera is able to record, the higher the resolution of your photos.

Aerial imagery is the same, except that we usually talk about resolution differently.  Measurement is important with aerial photographs - hence, a pixel represents a certain distance on the ground.  We usually describe imagery as something like “two meter resolution imagery,” which means that one pixel is equivalent to two meters on the ground.  One meter resolution imagery would have a higher resolution than this, and 50cm resolution would be higher still.  This is generally the range of imagery that is provided by Bing, though it varies between locations, and in many places it is worse than two meters, at which point it becomes difficult to identify objects in the image.

![Comparison of low and high resolution imagery][]

The higher the resolution of an aerial image, the easier it is to use in making maps.

Georeferencing
---------------

Each pixel of an aerial photograph has a size, and each pixel also has a
location. As we mentioned above, this is because aerial photographs are georeferenced.

Just like a GPS point has a latitude and longitude, so will the pixels in an aerial image.
However, just as poor resolution can bring challenges to mapping, so can poorly
georeferenced images.

Let's think for a moment about how georeferencing works, and why it is challenging 
to do. When somebody georeferences an image, they first identify a handful of pixels
in the image that are known locations. If we have a square photograph, we might identify
the coordinates of all four corners, and that way the whole image can be correctly placed.

This all seems quite simple, but consider this: Earth is round; camera lenses are round;
yet photographs are flat and 2-dimensional. This means that when a flat image is
being mapped onto the round Earth, there is always going to be some stretching of the image
and distortion. Imagine trying to flatten an orange-peel. It won't end up rectangular.

Because of this problem, all of the pixels in an aerial image might not be perfectly
placed.

Luckily, some really smart people have devised clever algorithms for solving
this problem, and so the imagery that you see on Bing is pretty close to being accurate.
In most places it won't be noticeably wrong at all - and it's certainly fine for making
maps. The most common areas for imagery to be inaccurately located are in hilly,
mountainous areas. In the [next chapter](/en/editing/correcting-imagery-offset) we will see how
to correct for this problem.

[Image resolution]: /images/en/editing/aerial-imagery/orange-resolution.png
[Comparison of low and high resolution imagery]: /images/en/editing/aerial-imagery/low-res-high-res.png

-->


[puzzle]: {{site.baseurl}}/images/offset_puzzle_en.png
[existing data]: {{site.baseurl}}/images/offset_existing_data_en.png
[download]: {{site.baseurl}}/images/offset_tool_download_en.png
[downloaded GPX]: {{site.baseurl}}/images/offset_downloaded_gpx_en.png
[adjust button]: {{site.baseurl}}/images/offset_tool_adjust_en.png
[adjust window]: {{site.baseurl}}/images/offset_adjust_window_en.png
[adding to existing data]: {{site.baseurl}}/images/offset_add_to_data_en.png
[no data]: {{site.baseurl}}/images/offset_no_data_en.png
[change opacity]: {{site.baseurl}}/images/offset_change_opacity_en.png
