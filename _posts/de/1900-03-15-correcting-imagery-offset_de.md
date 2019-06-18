---
layout: doc
title: Bilder Offset korrigieren
permalink: /de/josm/correcting-imagery-offset/
lang: de
category: josm
---

Bilder Offset
===============

> Gereviewt am 2015-09-21  

Bilder Anbieter machen meistens einen gute Job bei der Georeferenzierung ihrer Bilder, aber gelegentlich können die Bilder von der Position abweichen. Dies geschieht meistens in hügelreichen oder bergigen Regionen, wo es schwer ist, flache Bilder über über eine konturenreiche Region der Erde zu legen. Lädt man Bilder in JOSM, können diese zehn Meter oder mehr von ihrer eigentlichen Position abweichen. Das nennt man **Bilder Offset**.  

Man beachte im folgenden Bild, dass zweit separate Luftbilder georeferenziert und vereint wurden. Da Georeferenzierung kein perfekter Prozess ist, liegen die Bilder nicht perfekt übereinander. Eines oder beide müssen also ungenau sein.  

![Misaligned imagery][]

Wir haben zwei Hauptwege zur Kartenerstellung kennengelernt - einer ist die Verwendung von Luftbildern um Dinge vor Ort zu identifizieren und ein anderer ist die Verwendung von GPS zum Aufzeichnen von Spuren und Wegpunkten und dem Hinzufügen dieser zu OpenStreetMap. Der Vorteil von Luftbildern ist offensichtlich. Es ermöglicht es dem Mapper das große Ganze zu sehen, zahlreiche Details auf dem Bild zu erkennen wo man sich auskennt, und Straßen, Gebäude und Gebiete einfach ab zu zeichnen . Ein wichtiger Vorteil von GPS ist jedoch, dass es nicht durch Offset beeinträchtigt ist. Ein GPS wird immer eine korrekte Länge und Breite bieten. Die einzige Ausnahme ist, wenn das Satellitensignal durch große Gebäude oder Berge gestört wird, aber der Fehler ist in diesem Fall einfach zu erkennen. Man beobachte die GPS Spur in diesem Bild im Vergleich mit dem Bing Luftbild daneben:  

![Aerial vs GPS][]

Aufgrund dessen was wir nun wissen ist es klar, dass die GPS Spur genau sein sollte und die Grafik daneben verschoben ist. Man fragt sich, "Wenn die Grafik verschoben ist, wie können wir sie trotzdem verwenden und genaue Karten erstellen?"  

Bilder Offset Korrektur
-------------------------

Die Antwort auf die vorherige Frage ist, dass man Bilder verschieben kann, damit sie mit Dingen deren korrekte Position wir kennen übereinstimmen, wie z.B. GPS Spuren. Es ist einfach in JOSM Bilder Offset zu korrigieren.  

Die beste Referenz zur Ausrichtung von Bildern sind GPS Spuren die Straßen folgen. Je mehr GPS Spuren man zum Referenzieren hat, umso genauer kann man die Bilder ausrichten. Da OpenStreetMap Benutzer oftmals ihre GPS Spuren zur OSM Datenbank hochladen, können wir diese herunterladen und zur Ausrichtung unserer Bilder verwenden.  

- Man klickt den Download Button.  ![JOSM download button][]{: height="24px"}  

- Man wählt die Box neben "Raw GPS Date" ![Download raw GPS data][]{: height="24px"} oben im Download Fenster. Man wählt seinen Bereich und klickt "Download".  

- Das lädt einen zusätzlichen Layer in JOSM der GPS Spuren beinhaltet. Abhängig davon, wie viele Spuren von OSM Benutzern hochgeladen wurden, sieht man weniger Tracks (oder keine Tracks):  

![Few GPS tracks from OSM][]

- Oder man sieht viele Tracks:  

![Many GPS tracks from OSM][]

- Zur Anpassung eines Bild Layers, klickt man auf den "Adjust imagery offset" Button ![Adjust imagery offset button][]{: height="24px"} oben in JOSM.  

- Man ignoriert das erscheinende Popup und verschiebt den Bilder Layer mit der Maus bis er korrekt anliegt mit den GPS Spuren. Die GPS Spuren sollten zu den Straßen auf den Bildern so gut wie möglich passen. Man sieht die Offset Zahlen in der Box sich ändern.  

![Adjust imagery offset][]

- Man kann diese Offset Einstellungen speichern, indem man einen Lesezeichen Namen angibt und OK klickt. Man kann so später die gleichen Einstellungen anwenden, indem man zu Imagery ‣ Imagery offset geht und das Lesezeichen anklickt.  
- Möchte man das Offset nicht speichern, klickt man einfach OK ohne Angabe eines Lesezeichen Namens.  

Was wenn keine GPS Tracks auf OpenStreetMap vorhanden sind und man kein GPS hat? Ohne GPS Tracks ist es schwer Luftbilder zu positionieren. Falls es ein relativ leeres Gebiet ist (noch nicht viel erfasst), kann man einfach das Bild verwenden und die Daten später korrigieren. Es ist besser eine Karte mit 20 order 30 Meter Offset zu haben, als gar keine Karte zu haben.  

Kann man die Höhe und Breite eines Objekts vor Ort bestimmen, kann man sicherstellen, dass das Bild korrekt platziert ist durch folgende Schritte:  

1. Man sucht das Objekt dessen Position man kennt auf dem Bild.  
2. Man klickt auf die Länge und Breite in der unteren linke Ecke von JOSM. ![JOSM lat lon][]{: height="24px"}  
3. Im sich öffnenden Dialog gibt man die Länge und Breite des bekannten Ortes an und eine kleine Zoomstufe zwischen fünf oder zehn.  
![JOSM lat lon dialogue][]
4. Das zentriert und zommt auf die angegebene Länge und Breite. Man kann nun das Bild wie zuvor verschieben bis das Bild mit dem bekannten Objekt in der korrekten Position zentriert ist.  

Falls andererseits das Gebiet bereits ausgiebig erfasst wurde, haben vorherige Mapper hoffentlich die Objekte am richtigen Ort platziert. In diesem Fall kann man die Bilder an der OSM Karte ausrichten. Aber Achtung! Andere Mapper sind sich dem Bilder Offset vielleicht nicht bewusst und haben Fehler erzeugt während der Erfassung.  


Die Imagery Offset Datenbank
---------------------------

Man erkennt nun Bilder Offset und kann es korrigieren, aber es gibt ein Hauptproblem mit diesem Ansatz, den wir bisher übersehen haben. Wenn jeder OpenStreetMap Benutzer die Bilder geringfügig anders verschiebt, mappt jeder mit einem leicht anderen Hintergrund.  

Man stelle sich vor, man mappt eine kleine Stadt und bemerkt, dass die Bing Bilder einen Versatz von 15 Metern in Richtung Norden haben. Man passt die Bilder an und verwendet sie um die ganze Stadt genau zu mappen. Aber dann möchte jemand anderes etwas zur Karte beitragen, lädt die Daten herunter und nimmt Bing als Hintergrund, weiß aber nichts über den Bilder Offset den man entdeckt hat! Derjenige denkt, dass etwas falsch läuft und die ganze Stadt um 15 Meter falsch eingezeichnet wurde und fängt an alles zu verschieben, was falsch ist! Das kann fatal für die Stadt Kartendaten sein.  

Aus diesem Grund ist es wichtig, dass sich Benutzer dem Bilder Offset bewusst sind und stets dies prüfen, bevor man mit dem mappen eines Gebietes beginnt. Um dies zu unterstützen haben einige schlaue Leute ein Plugin erstellt, dass es Benutzern erlaubt Offset Informationen in einer Datenbank zu speichern und mit anderen zu teilen. Schauen wir uns das an:  

-  man öffnet das Einstellungen Menü in JOSM und klickt auf das Plugin Tab. ![JOSM plugins tab][]{: height="24px"}  

- man sucht das Plugin "imagery_offset_db" und markiert die Auswahlbox daneben.  

![Imagery_offset_db plugin][]

- man klickt OK. Man muss JOSM neu starten um die Plugin Installation zu vervollständigen.  

Genauso wie man Offsets als Lesezeichen speichern kann, erlaubt dieses Plugin Offsets in einer zentralen Datenbank zu speichern und auf Offsets welche andere Benutzer erstellt haben zuzugreifen. Somit können andere Benutzer mit demselben Offset arbeiten, wenn ein Mapper bereits ein Bilder Offset für ein Gebiet erstellt hat.  

Wenn man mit Luftbilder Layern arbeitet, sollte man IMMER auf existierende Offsets prüfen und wenn man eigene Offset erstellt, sollte man diese IMMER in diese Datenbank speichern.  


Bilder Offset aus der Datenbank hinzufügen
------------------------------------

Falls man ein Bilder Layer hinzufügt, wird man durch das Plugin daran erinnert, dass man die Bilder Datenbank auf ein existierendes Offset prüfen sollte. Man sieht ein Icon mit einem roten Ausrufezeichen oben in JOSM, wie das hier:  

![Imagery offset notification][]

- Man klickt auf den Button und das Plugin wird mit der Datenbank Verbindung aufnehmen um zu sehen, ob Offsets für dieses Gebiet existieren.  
- Hier haben wir OSM Daten und GPS Spuren von Kuta, Bali, Indonesien heruntergeladen. In diesem Fall haben wir einen existierenden Offset gefunden. Man klickt darauf um es für die Karte anzuwenden.  

![Offset in Kuta bali][]

- Der Bilder Layer bewegt sich darauf hin. Man sollte auf jeden Fall wenn man ein Offset wie dieses hinzufügt prüfen, dass es korrekt ist, indem man mit GPS Spuren vergleicht.  

![Comparing imagery offset from GPS tracks][]

Man sieht, dass der Bilder Layer tatsächlich falsch ausgerichtet ist. man möchte nicht, dass andere Benutzer dieses Offset verwenden, deshalb sollten wir es als nicht korrekt in der Datenbank markieren. Man klickt nochmals auf den "Offsets" Button (das rote Ausrufezeichen verschwindet).  

![Offsets button][]

- Dieses mal macht man einen Rechtsklick auf das Offset und klickt "Deprecate Offset", sobald sich der Dialog öffnet.  

![Deprecate offset][]

- Man klickt "Ja" um es zu bestätigen.  
- Man muss einen Grund angeben, warum man das Offset missbilligt.  

![Deprecate reason][]


Ein Bilder Offset zur Datenbank hinzufügen
------------------------------------

Man hat nun dieses Benutzer Offset auf "deprecated" gesetzt, man sollte nun ein verbessertes Offset zur Datenbank hinzufügen.  

1. Man klickt auf de "Adjust imagery offset" Button. ![Adjust imagery offset button][]{: height="24px"}  
2. Man verschiebt das Bild bis es zu den GPS Spuren passt. Man klickt OK in der Box.  
3. Man geht zu Offset ‣ Store Imagery Offset...  
![Store imagery offset][]
4. Man gibt eine Beschreibung des Offset in der sich öffnenden Box an.  
![Offset description][]
5. Man klickt OK. Das Offset wird in der Datenbank gespeichert.  
6. Man versteckt den GPS Layer und prüft die OSM Daten gegen die nun korrekt platzierten Bilder.  

![Corrected imagery][]

Oh nein! Jemand hat dieses Gebiet mit den schlecht positionierten Bildern gemappt, so dass die Gegend falsch erfasst wurde. Das zu lösen wird einige Zeit in Anspruch nehmen.


Bilder Offset Datenbank Webseite
--------------------------------

Zuletzt kann man für weitere Informationen zur Offset Datenbank die Webseite besuchen unter [http://offsets.textual.ru/](http://offsets.textual.ru/). Es zeigt alle Offsets welche in die Datenbank hochgeladen wurden und hat eine nette Kartenfunktion, welche anzeigt, wo die Offsets bestehen, wie man hier sieht:  

![http://offsets.textual.ru/][]

> Man sollte wissen, dass die Bilder nicht überall dieselbe Offset Distanz haben! Dies gilt besonders in Regionen mit vielen Hügeln und Bergen. Falls in unterschiedlichen Gebieten unterschiedliche Offsets bestehen, muss man es erneut verschieben.  

Zusammenfassung
--------

Falls man gerade mit OpenStreetMap beginnt, muss man sich nicht zu viele Gedanken über Bilder Offset machen. Sieht man aber verschobene Änderungen von anderen Mappern, sollte man in betracht ziehen, dass ein Offset vorliegt, bevor man deren Objekte ändert. Und wenn man sich noch nicht Sicher im Umgang mit Offsets fühlt, sollte man bedenken, dass es besser ist ein Gebiet mit einem 20 oder 30 Meter Offset zu mappen, als überhaupt nichts zu mappen. Aber man erinnert sich wenn immer möglich daran, dass Bilder Offset vorkommen können und verwendet die in diesem Kapitel beschriebenen Schritte, um dies wenn notwendig zu korrigieren.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










