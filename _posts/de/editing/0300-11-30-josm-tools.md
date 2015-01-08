---
layout: doc
title: JOSM Tools
permalink: /de/editing/josm-tools/
lang: de
category: editing
---

Werkzeuge zum Editieren in JOSM
===============================


This section of LearnOSM is in the process of being translated. If you would like to assist with translating this site, please see [CONTRIBUTING.md](https://github.com/hotosm/learnosm/blob/gh-pages/CONTRIBUTING.md).

---

Im [Leitfaden für Anfänger](/de/beginner) haben wir die Grundlagen des Zeichnens in 
JOSM behandelt, aber es gibt noch viele Werkzeuge und Techniken, die wir noch nicht gezeigt haben.

Wir werfen jetzt einen Blick auf die grundlegenden Werkzeuge und Techniken, die zum Zeichnen von Objekten in JOSM zur Verfügung stehen und später werden wir vertieft auf weiterführende Zeichenwerkzeuge eingehen.

Besorgen Sie sich die Beispieldaten
-------------------

-   Wenn Sie die JOSM-Werkzeuge Schritt für Schritt ausprobieren möchten, dann laden Sie bitte
    [tools_menu_sample.osm](/files/tools_menu_sample.osm) herunter.
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

8.  Orthogonalize Shape: This function is very useful for drawing
    regular shapes such as buildings. After you draw an area, this
    function will reshape it to have square corners.

    ![Orthagonalize][]

9.  Unglue way: This tool allows you to detach nodes that are
    connected. It is useful when two object share a node when they should
    not. For example, a common mistake is for a road to share a node
    with the corner of a building. Of course roads don't run into buildings
    usually, so this is a mistake, and you can unglue the objects from one
    another.

    ![Unglue way][]

    > The line and node will not actually appear separate until you move them.

Keyboard Shortcuts
------------------

Once you start editing a lot you will realize that you waste a lot of time
clicking on menus and submenus. To overcome this, JOSM has keyboard shortcuts
for just about everything.

This means that instead of clicking an object and then going through a lengthy
menu process, you can simply select the object and press a key on your keyboard.

All of the tools mentioned in the previous section have shortcut keys, which are
listed on the Tools menu to the right of each tool name. For example, "O" is the
shortcut key to align nodes in a circle. "L" is the shortcut to align them in a line.
It can take some time to learn the shortcut keys, but you will find that it saves
a lot of time in the long run.

Here are other shortcut keys (in **bold**) which are some of the most important.

1.  Activate the Select Tool - **S**
2.  Activate the Draw Tool - **A**
3.  Activate the Zoom Tool - **Z**
4.  Delete the selected object(s) - **Delete**
5.  Zoom In - **+**
6.  Zoom Out - **-**


Scale and Rotate
----------------

A common question is how to rotate a line or shape after it has
been drawn.

-   To rotate an object, first select it.
-   Hold **SHIFT+CTRL** on your keyboard.
-   Click and drag the mouse to rotate.

![Rotate demo][]

To scale an object (make it bigger or smaller), follow the same
process, but hold ALT+CTRL instead.

These instructions are displayed on the information bar at the bottom of JOSM:

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
