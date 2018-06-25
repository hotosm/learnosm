---
layout: doc
title: JOSM Bearbeitung Werkzeuge
permalink: /de/josm/josm-tools/
lang: de
category: josm
---

Werkzeuge zum Editieren in JOSM
==================

> Diese Anleitung kann als  [josm_josm-tools_de.odt](/files/josm_josm-tools_de.odt) oder [josm_josm-tools_de.pdf](/files/josm_josm-tools_de.pdf) heruntergeladen werden  
> Gereviewed 2017-06-09  

- TOC
{:toc}

Im  [Leitfaden für JOSM](/en/josm/start-josm/)  decken wir die Grundlagen der Arbeit mit JOSM ab, es gibt aber viele Werkzeuge und Techniken welche wir nicht demonstrieren.

Wir werden uns einige Standardwerkzeuge und Techniken zum Arbeiten mit JOSM anschauen. In den folgenden Kapiteln werden wir fortgeschrittene Werkzeuge tiefer beleuchten.

Besorgen Sie sich die Beispieldaten
-------------------

- Zur Mitverfolgung und zum Üben, kann man [tools_menu_sample.osm](/files/tools_menu_sample.osm) herunterladen. JOSM starten und Datei öffnen. Es sollte wie folgt aussehen:

![tools_menu_sample.osm][]

Zeichenwerkzeuge
-------------

Wenn Sie auf das "Werkzeug" Menu oben in JOSM klicken, sehen Sie zahlreiche Funktionen welche beim bearbeiten von Linien, Formen und Objekten auf der Karte helfen.

JOSM besitzt einige zusätzliche Werkzeuge zum einfachen bearbeiten von Linien und Formen. Diese Werkzeuge findet man im "Werkzeug" Menu oben in JOSM.

![Tools menu][]

Um diese Funktionen anzuwenden, muss man erst einen Punkt, eine Linie oder Form auf der Karte auswählen. Die Beispieldatei enthält einige Elemente mit Namen der unterschiedlichen Werkzeuge im Menu.

### Nodes in einem Kreis anordnen  

- Versuchen Sie ein Element in der Datei zu selektieren. Gehen Sie zum Werkzeug Menu und klicken Sie auf die Funktion ähnlich dem Element das sie selektiert haben. Klicken Sie zum Beispiel auf den schlecht gezeichneten Kreis, um ihn auszuwählen.

![Align nodes in circle][]

- Gehen Sie nun zu Werkzeug - Nodes in kreis anordnen. Der schlecht gezeichnete Kreis wird zu einem richtigen Kreis.

Experimentieren Sie mit den Werkzeugen und den Elementen in der Beispieldatei. Eine Beschreibung für einige Werkzeuge folgt.

### Weg auftrennen  

Dies ermöglicht eine Linie in zwei Linien zu trennen. Man braucht es, wenn man unterschiedliche Attribute an unterschiedliche Teile einer Straße setzen möchte, wie z.B. bei einer Brücke. Um die Funktion zu verwenden, selektieren Sie einen Punkt in der Mitte der Line welche Sie teilen möchten. Wählen Sie Trenne Weg vom Werkzeug Menu und Ihre Linie ist geteilt.


### Wege zusammenführen

Das ist das Gegenteil von Wege teilen. Um zwei Wege zusammenzuführen müssen diese einen Punkt teilen. Selektieren Sie beide Linien indem Sie die SHIFT Taste halten und die Linien mit der Maus anklicken. Wenn beide selektiert sind, wählen Sie Wege zusammenführen aus dem Werkzeug Menu.

![Combine way][]


### Umdrehen und zusammenführen  

Falls Sie Straße mit unterschiedlicher Richtung zusammenführen, bekommen Sie folgende Warnung:

![Reverse and combine][]

Falls die Straßen verbunden sind und in die gleiche Richtung gehen, wählen Sie "Umdrehen und weiter".


### Weg drehen

Dies ändert die Richtung der Linie. Alle Linien in OSM haben Richtungen, JOSM zeigt dies durch einen Pfeil auf der Linie an. Die Richtung spielt normalerweise keine Rolle, außer wenn Straßen und Flüsse in eine bestimmte Richtung fließen. In diesem Fall müssen Sie gegebenenfalls die Richtung ändern, damit Sie wieder stimmt.

![Way direction][]

### Weg vereinfachen

Falls eine Linie zu viele Punkte besitzt und Sie sie vereinfachen wollen, enternt dies einige Punkte von der Linie.

![Simplify way][]


### Kreis erstellen

Verwenden Sie dieses Werkzeug um einen perfekten Kreis zu erstellen. Zeichnen Sie eine Linie, welche den Durchmesser Ihres Kreises darstellt und verwenden Sie anschließend dieses Werkzeug.

![Create circle][]


### Nodes in Linie anordnen

Diese Funktion ordnet eine Serie von Punkten in einer Geraden. Bei langen Linien wählt man am Besten einen bereich der Linie aus. Bitte Vorsicht, dies verschiebt die Linie etwas in der Regel.

![Align nodes in line][]

### Form orthogonal anordnen

Diese Funktion ist sehr hilfreich um reguläre Formen wie Gebäude zu zeichnen (** Siehe  [JOSM Gebäude Werkzeuge](/en/josm/josm-more-plugins/)**). Nachdem Sie eine Fläche gezeichnet haben, macht diese Funktion die Ecken rechtwinklig.

![Orthagonalize][]


### Wege trennen

Dieses Werkzeug trennt Nodes welche verbunden sind. Es ist nützlich, wenn zwei Objekte einen Node teilen aber nicht sollen. Ein allgemeiner Fehler ist z.B. wenn eine Straße einen Node mit einer Ecke eines Gebäudes teilt. Straßen laufen nicht durch Gebäude normalerweise, so dass man dies voneinander trennen kann.

![Unglue way][]

*Die Linie und der Node erscheinen nicht separat, solange sie nicht bewegt werden.*

Tastaturkürzel
------------------

Wenn sie mit dem Editieren anfangen, werden Sie feststellen, dass die viel zeit mit klicken in Menus und Untermenus verschwenden. Um hier abzuhelfen, bietet JOSM Tastaturkürzel für jede Gelegenheit.

Anstatt ein Objekt auszuwählen und dann sich durch Menus zu klicken, kann man einfach das Objekt auswählen und eine Taste auf der Tastatur drücken.

Alle zuvor erwähnten Werkzeuge haben Tastaturkürzel, welche im Werkzeug Menu auf der rechten Seite gelistet werden. Zum Beispiel "O" ist das
Tastaturkürzel um Nodes im Kreis anzuordnen. "L" ist das Kürzel um alle in einer Linie anzuordnen. es dauert etwas die Tastaturkürzel zu lernen, aber Sie werden herausfinden dass es spart
Sicht zahlt sich das sicher aus.

Hier stehen (**fettgedruckt**) noch einige der wichtigsten anderen Tastaturkürzel.

1. Auswahl-Werkzeug aktivieren - **S**
2. Zeichenwerkzeug aktivieren - **A**
3. Zoom-Werkzeug aktivieren - **Z**
4. Ausgewählte(s) Objekt(e) löschen - **Entf**
5. Hineinzoomen - **+**
6. Herauszoomen - **-**


Skalieren und Drehen
----------------

Eine häufige Frage ist, wie man eine Linie oder Form rotiert, nachdem man es gezeichnet hat.

Zum rotieren erst das Objekt auswählen. **SHIFT+STRG** auf der Tastatur drücken. Klicken und halten und Maus bewegen zum Rotieren.

![Rotate demo][]

Ein Objekt zu skalieren (größer oder kleiner machen) geht genauso, aber stattdessen ALT+CTRL drücken.

Diese Anleitung sehen Sie auch in der Informationsleiste unten in JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.de.png
[Tools menu]: /images/josm/tools-menu.de.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.de.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.de.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.de.png
[Create circle]: /images/josm/create-circle.de.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.de.png
[Rotate instructions]: /images/josm/rotate-instructions.de.png