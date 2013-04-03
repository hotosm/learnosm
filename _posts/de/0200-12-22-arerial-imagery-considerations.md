---
layout: doc
title: Luft- und Satellitenbilder nutzen
permalink: /de/beginner/aerial-imagery/
lang: de
category: beginner
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


[puzzle]: {{site.baseurl}}/images/offset_puzzle_en.png
[existing data]: {{site.baseurl}}/images/offset_existing_data_en.png
[download]: {{site.baseurl}}/images/offset_tool_download_en.png
[downloaded GPX]: {{site.baseurl}}/images/offset_downloaded_gpx_en.png
[adjust button]: {{site.baseurl}}/images/offset_tool_adjust_en.png
[adjust window]: {{site.baseurl}}/images/offset_adjust_window_en.png
[adding to existing data]: {{site.baseurl}}/images/offset_add_to_data_en.png
[no data]: {{site.baseurl}}/images/offset_no_data_en.png
[change opacity]: {{site.baseurl}}/images/offset_change_opacity_en.png
