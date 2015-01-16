---
layout: doc
title: Weitere Werkzeuge
permalink: /de/editing/more-tools/
lang: de
category: editing
---

Weitere Werkzeuge
=================


This section of LearnOSM is in the process of being translated. If you would like to assist with translating this site, please see [CONTRIBUTING.md](https://github.com/hotosm/learnosm/blob/gh-pages/CONTRIBUTING.md).

---

Die Erweiterungen **buildings_tools** und **utilsplugin2** stellen wichtige Zusatzfunktionen 
für JOSM zur Verfügung. In diesem Abschnitt werfen wir einen genaueren Blick darauf.

Die Erweiterung *Buildings Tools*
---------------------------------

-   Sofern noch nicht geschehen installieren Sie diese Erweiterung nach der Anleitung 
    in [JOSM Erweiterungen](/de/editing/josm-plugins).

![Buildings tools plugin][]

Die Erweiterung "Buildings Tools" hilft Ihnen beim abzeichnen von Gebäuden.
Sie zeichnen nur eine Kante eines rechtwinkligen Gebäudes und erweitern sie einfach zur Fläche.
Wenn Sie viele Gebäude abzeichnen wollen sparen Sie mit dieser Erweiterung viele Klicks und dadurch Zeit.

Sobald Sie die Erweiterung installiert haben, sehen Sie in der linken Seitenleiste von JOSM ein neues Symbol:

![Buildings tools button][]

-   Starten Sie JOSM und erstellen Sie eine neue leere Ebene.
-   Wählen Sie die Erweiterung aus und klicken Sie zweimal um eine Linie auf der Karte zu zeichnen.

![Draw edge][]

-   Dann erweitern Sie die Linie mit der Maus und klicken noch einmal um ein Rechteck zu zeichnen.

![Extend building][]

-   So haben Sie nicht nur mit drei Klicks ein Rechteck gezeichnet, sondern der Form auch noch automatisch das Attribut building=yes angefügt.

### Komplexe Gebäudeformen

Sie können auch kompliziertere Gebäudeformen erzeugen, indem Sie erst mehrere einzelne überlappende
Gebäude zeichnen und sie danach vereinigen.

-   Zeichnen Sie zwei überlappende Gebäude, so dass sich ein L ergibt.
-   Wählen Sie beide Gebäude aus (halten Sie die Umschalttaste gedrückt, um mehr als ein Objekt auszuwählen).
-   Gehen Sie zum Menüpunkt Werkzeuge->Überlappende Flächen verbinden oder drücken Sie Umschalt+J auf Ihrer Tastatur.

![Merge buildings][]

### Einstellungen

Sie können die Standardeinstellungen der Erweiterung ändern.

-   Gehen Sie zum Menüpunkt Daten->Größe des Gebäudes festlegen.

![Set buildings size][]

-   Wenn Sie viele Gebäude von ähnlicher Größe erzeugen, können Sie die genaue
    Breite und Höhe der Gebäude festlegen, beispielsweise 6 x 10 Meter (die 
    Längeneinheit sind Meter).

![Set buildings size dialog][]

-   Danach erstellen Sie Gebäude in der richtigen Größe mit nur zwei Klicks.

Durch einen Klick auf "Erweitert" können Sie zusätzliche Attribute angeben,
die automatisch an jedes Gebäude angefügt werden. Z.B. können Sie,
wenn alle Ihre Gebäude an der gleichen Straße liegen, ein Attribut dazufügen,
das die Zuordnung zu dieser Straße festlegt.

![Buildings advanced][]


Utilsplugin2
-------------

-   If you haven't already, install this plugin following the instructions
    in [JOSM Plugins](/en/editing/josm-plugins).

![Utilsplugin2 plugin][]

After you have installed the plugin and restarted JOSM, you will have
a new menu at the top named "More Tools."

![More tools menu][]

Create a new layer and experiment with some of the new tools. Here we
describe some of the most useful new tools:

1.  **Add Nodes at Intersections:**  This tool is very helpful for adding
    missing nodes in intersections of selected ways.  It is good
    practice that roads should always have common nodes where
    they intersect.

    ![Nodes interesection][]

2.  **Copy Tags from Previous Selection:**  This function makes copying tags
    easier.  If you want to create many objects with the same tags,
    first draw the objects.  Then add the tags to one object.  Click on
    another object and press Shift + R to copy the tags from the
    previously selected object.  You can do this for all objects that
    you want to tag.  Remember that the tags will be copied from the
    previously selected object, so if you click on an untagged object
    and then another untagged object, you will not be able to copy any
    tags.

    ![Copy tags][]

3.  **Add Source Tag:** This tool simplifies adding a source tag.  It
    remembers the source that was specified last and adds it as
    remembered source tag to your objects.   You can insert the source
    with just one click.  

4.  **Replace Geometry:** This tool is great if you want to redraw a poorly
    shaped object, but want to keep the history, attributes and ID
    number of that object.  For example, if you come across a building
    that is complicated and drawn in a poor fashion, then instead of
    painfully changing each node, you can draw the object again,
    select the old and new objects, and select ¨Replace Geometry¨ to
    transfer all the information over.

    ![Replace geometry][]


### More Selection Tools

**Utilsplugin2** also provides more tools on the "Selection" menu.
Try experimenting with them.

![Selection menu][]

One of our favorite selection tools is **Unselect Nodes:** This tool deselects
all nodes. This can be useful if you draw a box to select many objects, but you do not
want to select the nodes contained within all the lines and shapes.

![Unselect nodes][]

Good luck!


[Buildings tools plugin]: /images/en/editing/josm-more-tools/buildings_tools-plugin.png
[Buildings tools button]: /images/en/editing/josm-more-tools/buildings_tools-button.png
[Draw edge]: /images/en/editing/josm-more-tools/draw-edge.png
[Extend building]: /images/en/editing/josm-more-tools/extend-building.png
[Merge buildings]: /images/en/editing/josm-more-tools/merge-buildings.png
[Set buildings size]: /images/en/editing/josm-more-tools/set-buildings-size.png
[Set buildings size dialog]: /images/en/editing/josm-more-tools/set-buildings-size-dialog.png
[Buildings advanced]: /images/en/editing/josm-more-tools/buildings-advanced.png
[Utilsplugin2 plugin]: /images/en/editing/josm-more-tools/utilsplugin2-plugin.png
[More tools menu]: /images/en/editing/josm-more-tools/more-tools-menu.png
[Nodes interesection]: /images/en/editing/josm-more-tools/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/en/editing/josm-more-tools/utilsplugin2-copy-tags.png
[Replace geometry]: /images/en/editing/josm-more-tools/utilsplugin2-replace-geometry.png
[Selection menu]: /images/en/editing/josm-more-tools/selection-menu.png
[Unselect nodes]: /images/en/editing/josm-more-tools/utilsplugin2-unselect-nodes.png


