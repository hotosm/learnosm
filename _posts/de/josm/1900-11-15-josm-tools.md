---
layout: doc
title: Werkzeuge zum Editieren in JOSM
permalink: /de/josm/josm-tools/
lang: de
category: josm
---

Werkzeuge zum Editieren in JOSM
===============================


Im [Leitfaden für Anfänger](/de/josm/start-josm/) haben wir die Grundlagen des Zeichnens in 
JOSM behandelt, aber es gibt noch viele Werkzeuge und Techniken, die wir noch nicht gezeigt haben.

Wir werfen jetzt einen Blick auf die grundlegenden Werkzeuge und Techniken, die zum Zeichnen von Objekten in JOSM zur Verfügung stehen und später werden wir vertieft auf weiterführende Zeichenwerkzeuge eingehen.

Besorgen Sie sich die Beispieldaten
-------------------

-   Wenn Sie die JOSM-Werkzeuge Schritt für Schritt ausprobieren möchten, dann laden Sie bitte
    [de_tools_menu_sample.osm](/files/de_tools_menu_sample.osm) herunter.
-   Starten Sie JOSM und öffnen Sie die Daten. Das sollte etwa so aussehen:

![tools_menu_sample.osm][]

Zeichenwerkzeuge
-------------

Wenn Sie das Menü "Werkzeuge" oben in JOSM anwählen, sehen Sie, dass es zahlreiche Funktionen gibt, die Ihnen dabei helfen, Linien und Formen zu zeichnen und die Objekte in der Karte zu bearbeiten.

![Tools menu][]

Um die Funktionen aus diesem Menü anzuwenden, müssen Sie zuerst einen Punkt, eine Linie oder eine Form im Kartenfenster markieren. Die Beispieldatei enthält verschiedene Objekte, die mit den Namen der verschiedenen Werkzeuge im Menü bezeichnet sind.

-   Versuchen Sie bitte, eines der Elemente in der Datei zu markieren. Dann wählen sie aus dem Werkzeug-Menü die Funktion, die bei dem von Ihnen markierten Element steht.
-   Klicken Sie z.B. auf den schlecht gezeichneten Kreis, um ihn zu markieren.

![Align nodes in circle][]

-   Dann wählen Sie den Menüpunkt "Werkzeuge->Punkte im Kreis anordnen" aus.
-   Der schlecht gezeichnete Kreis wird runder.

Probieren Sie bitte jedes der Werkzeuge mit Hilfe der Beispieldatei aus. Im Folgenden finden Sie eine Beschreibung einiger Werkzeuge.

1.  **Linie aufspalten:** Damit können Sie eine Linie in zwei getrennte Linien aufspalten.
    Das benötigen Sie, wenn Sie verschiedenen Teilen einer Straße verschiedene Attribute zuweisen wollen, etwa einer 
    Brücke. Um diese Funktion zu benutzen, markieren Sie einen Punkt mitten in der Linie, an dem Sie teilen möchten, 
    wählen "Linie aufspalten" aus dem Werkzeuge-Menü und Ihre Linie sollte jetzt aus zwei Teilen bestehen.

2.  **Linien verbinden:** Diese Funktion macht das Gegenteil. Um zwei Linien zu einer zu verbinden müssen sie einen 
    gemeinsamen Punkt haben. Markieren Sie die beiden zu verbindenden Linien. Dazu halten Sie die Umschalttaste auf 
    Ihrer Tastatur gedrückt und klicken auf die Linien. Wenn Sie beide Linien markiert haben, wählen Sie "Linien 
    verbinden" aus dem Werkzeuge-Menü.

    ![Combine way][]

    Wenn Sie Wege mit unterschiedlichen Richtungen verbinden, erhalten Sie diese Warnung:

    ![Reverse and combine][]

    Wenn die Wege verbunden sind und in dieselbe Richtung verlaufen sollen, wählen Sie
    "Drehen und Verbinden."

3.  **Linienrichtung umkehren:** Damit ändern Sie die Orientierung einer Linie. Alle Linien in
    OSM haben eine Richtung, die in JOSM durch Pfeile auf der Linie dargestellt wird.
    Normalerweise spielt die Richtung keine Rolle, außer bei Einbahnstraßen und
    Flüssen, die in eine bestimmte Richtung verlaufen. In diesen Fällen müssen Sie möglicherweise
    die Richtung umdrehen, damit der Weg in die richtige Richtung verläuft.

    ![Way direction][]

4.  **Linie vereinfachen:** Wenn Ihre Linie aus zu vielen Punkten besteht und Sie sie gerne
    vereinfachen möchten, entfernt dieses Werkzeug einige Punkte aus der Linie.

    ![Simplify way][]

5.  **Punkte im Kreis anordnen:** Wenn Sie eine runde Form zeichnen möchten,
    zeichnen Sie einen Kreis so gut Sie es können und markieren ihn.
    Diese Funktion ordnet die gezeichneten Punkte auf einem Kreis an.

6.  **Kreis erstellen:** Alternativ dazu können Sie dieses Werkzeug verwenden, das
    einen genaueren Kreis erzeugt. Zeichnen Sie eine Linie, die dem Durchmesser
    Ihres Kreises entspricht und wenden Sie dann das Werkzeug an.

    ![Create circle][]

7.  **Punkte in einer Gerade anordnen:** Diese Funktion richtet eine Reihe von Punkten
    in einer geraden Linie aus.  Bei langen Linien richten Sie am besten einzelne Abschnitte
    der Linie aus.  Achten Sie darauf, dass das gerne die Linie ein bisschen verschiebt.

    ![Align nodes in line][]

8.  **Form rechtwinklig machen:** Diese Funktion ist sehr nützlich um regelmäßige Formen wie etwa
    Gebäude zu zeichnen. Wenn Sie die Fläche gezeichnet haben,
    richtet diese Funktion sie so aus, dass alle Ecken rechtwinklig sind.

    ![Orthagonalize][]

9.  **Linien trennen:** Mit diesem Werkzeug trennen Sie verbundene Punkte.
    Das ist dann nützlich, wenn zwei Objekte, die nicht verbunden sein sollten, einen Punkt
    gemeinsam haben. Beispielsweise sieht man öfter, dass eine Straße mit einem 
    Gebäude einen Punkt gemeinsam hat. Üblicherweise verlaufen Straßen nicht durch Gebäude und sie
    können mit dieser Funktion die beiden Objekte voneinander trennen.

    ![Unglue way][]

    > Die Linie und der Punkt sind erst dann getrennt zu sehen, wenn Sie sie bewegen.

Tastaturkürzel
--------------

Wenn Sie öfter mit JOSM arbeiten, werden Sie schnell das Gefühl haben, beim Klicken durch Menüs und
Untermenüs eine Menge Zeit zu verlieren. Als Abhilfe verfügt JOSM über Tastaturkürzel für nahezu jede
Funktion.

Statt ein Objekt anzuklicken und sich danach durch die Menüs durchzuhangeln, klicken Sie einfach auf
das Objekt und drücken dann die entsprechende Taste.

Alle Werkzeuge, die wir bisher besprochen haben, besitzen Tastaturkürzel, die Sie im Menü rechts neben
dem entsprechenden Eintrag sehen. Z.B. ist "O" das Kürzel, um Punkte auf einem Kreis anzuordnen. 
Mit "L" ordnen Sie sie entlang einer Linie an.
Sie brauchen vielleicht etwas Zeit, bis Sie die Kürzel kennen, aber auf längere Sicht zahlt sich das 
sicher aus.

Hier stehen (**fettgedruckt**) noch einige der wichtigsten anderen Tastaturkürzel.

1.  Auswahl-Werkzeug aktivieren - **S**
2.  Zeichenwerkzeug aktivieren - **A**
3.  Zoom-Werkzeug aktivieren - **Z**
4.  Ausgewählte(s) Objekt(e) löschen - **Entf**
5.  Hineinzoomen - **+**
6.  Herauszoomen - **-**


Skalieren und Drehen
--------------------

Eine häufige Frage ist, wie man eine Linie oder Form drehen kann, nachdem sie gezeichnet wurde.

-   Um ein Objekt zu drehen, markieren Sie es zuerst.
-   Halten Sie **Umschalt+Strg** auf Ihrer Tastatur gedrückt.
-   Klicken und ziehen Sie mit der Maus, um das Objekt zu drehen.

![Rotate demo][]

Um ein Objekt zu skalieren (es also größer oder kleiner zu machen), verwenden Sie die gleiche Prozedur, 
halten aber stattdessen **Alt+Strg** gedrückt.

Diese Anleitung sehen Sie auch in der Informationsleiste unten in JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/de/editing/josm-tools/tools-menu-sample-file.png
[Tools menu]: /images/de/editing/josm-tools/tools-menu.png
[Align nodes in circle]: /images/de/editing/josm-tools/align-nodes-in-circle.png
[Combine way]: /images/en/editing/josm-tools/combine-way.png
[Reverse and combine]: /images/de/editing/josm-tools/reverse-and-combine.png
[Way direction]: /images/en/editing/josm-tools/way-direction.png
[Simplify way]: /images/de/editing/josm-tools/simplify-way.png
[Create circle]: /images/de/editing/josm-tools/create-circle.png
[Align nodes in line]: /images/en/editing/josm-tools/align-nodes-in-line.png
[Orthagonalize]: /images/en/editing/josm-tools/orthagonalize.png
[Unglue way]: /images/en/editing/josm-tools/unglue-way.png
[Keyboard S]: /images/en/editing/josm-tools/keyboard-s.png
[Keyboard A]: /images/en/editing/josm-tools/keyboard-a.png
[Keyboard Z]: /images/en/editing/josm-tools/keyboard-z.png
[Keyboard Del]: /images/en/editing/josm-tools/keyboard-del.png
[Keyboard plus]: /images/en/editing/josm-tools/keyboard-plus.png
[Keyboard minus]: /images/en/editing/josm-tools/keyboard-minus.png
[Rotate demo]: /images/de/editing/josm-tools/rotate-demo.png
[Rotate instructions]: /images/de/editing/josm-tools/rotate-instructions.png
