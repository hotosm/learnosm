---
layout: doc
title: Weitere Werkzeuge
permalink: /de/josm/more-tools/
lang: de
category: josm
---

Weitere Werkzeuge
=================


Die Erweiterungen **buildings_tools** und **utilsplugin2** stellen wichtige Zusatzfunktionen 
für JOSM zur Verfügung. In diesem Abschnitt werfen wir einen genaueren Blick darauf.

Buildings Tools
---------------

-   Sofern noch nicht geschehen installieren Sie diese Erweiterung nach der Anleitung 
    in [JOSM Erweiterungen](/de/josm/josm-plugins).

![Buildings tools plugin][]

Die Erweiterung "Buildings Tools" hilft Ihnen beim Abzeichnen von Gebäuden.
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
    Längeneinheit ist Meter).

![Set buildings size dialog][]

-   Danach erstellen Sie Gebäude in der richtigen Größe mit nur zwei Klicks.

Durch einen Klick auf "Erweitert" können Sie zusätzliche Attribute angeben,
die automatisch an jedes Gebäude angefügt werden. Z.B. können Sie,
wenn alle Ihre Gebäude an der gleichen Straße liegen, ein Attribut dazufügen,
das die Zuordnung zu dieser Straße festlegt.

![Buildings advanced][]


Utilsplugin2
-------------

-   Sofern noch nicht geschehen installieren Sie diese Erweiterung nach der Anleitung
    in [JOSM Erweiterungen](/de/josm/josm-plugins).

![Utilsplugin2 plugin][]

Nach der Installation der Erweiterung und einem Neustart von JOSM sehen Sie ein
neues Menü "Werkzeuge 2".

![More tools menu][]

Erstellen Sie eine neue Ebene und probieren Sie einige der neuen Werkzeuge aus.
Wir geben Ihnen noch eine Beschreibung der nützlichsten Werkzeuge:

1.  **Punkt an den Schnittpunkten einfügen:**  Damit fügen Sie die fehlenden Punkte überall dort ein,
    wo sich die ausgewählten Linien schneiden. Sich schneidende Straßen sollten immer gemeinsame
    Punkte haben.

    ![Nodes interesection][]

2.  **Merkmale von vorheriger Auswahl kopieren:**  Das erleichtert Ihnen das Kopieren von
    Attributen.  Wenn Sie viele Objekte mit den gleichen Attributen erstellen,
    zeichnen Sie zuerst die Objekte.  Dann fügen Sie die Attribute an ein Objekt an.  Klicken Sie
    auf ein anderes Objekt und drücken Sie Umschalt + R um die Attribute von dem vorher 
    ausgewählten Objekt zu kopieren.  So verfahren Sie für alle Objekte, denen Sie die Attribute
    zuweisen wollen.  Denken Sie daran, dass die Atribute vom vorher ausgewählten Objekt
    kopiert werden.  Wenn Sie also zuerst ein Objekt ohne Attribute anklicken
    und danach ein anderes Objekt ohne Attribute, dann können Sie auch keine Attribute kopieren.

    ![Copy tags][]

3.  **Merkmal 'source' einfügen:** Das macht es Ihnen leichter, das Attribut zur verwendeten Quelle anzufügen.  Die
    Erweiterung merkt sich das zuletzt verwendete 'source'-Attribut und fügt es an alle erzeugten
    Objekte an. Sie können auch mit einem Doppelklick auf ein Objekt dessen 'source'-Attribut speichern.
    Damit können Sie dieses Attribut mit nur einem Klick einfügen.  

4.  **Geometrie ersetzen:** Ein wertvolles Werkzeug um ein schlecht gezeichnetes Objekt neu zu zeichnen,
    dabei aber die Historie, Attribute und ID des Objekts zu behalten. Nehmen wir einmal an, Sie sehen
    ein verschachteltes Gebäude, das schlampig gezeichnet wurde. Statt mühsam jeden Punkt einzeln zu verändern
    zeichnen Sie das Objekt neu, wählen das alte und das neue Objekt aus und verwenden den Menüeintrag
    ¨Geometrie ersetzen¨ um alle Informationen an das neue Objekt zu übertragen.

    ![Replace geometry][]


### Weitere Auswahlmöglichkeiten

**Utilsplugin2** bietet auch noch mehr Möglichkeiten im  "Auswahl"-Menü.


![Selection menu][]

Einer unserer Favoriten dabei ist  **Punkte abwählen:** Dieses Werkzeug entfernt alle Punkte
aus der aktuellen Auswahl. Wenn Sie durch Aufziehen eines Rechtecks viele Objekte ausgewählte haben, aber nur die Objekte selbst (Linien und Formen) benötigen und nicht deren einzelne Punkte, dann ist das genau das, was Sie suchen.

![Unselect nodes][]

Viel Erfolg!


[Buildings tools plugin]: /images/de/editing/josm-more-tools/buildings_tools-plugin.png
[Buildings tools button]: /images/en/editing/josm-more-tools/buildings_tools-button.png
[Draw edge]: /images/en/editing/josm-more-tools/draw-edge.png
[Extend building]: /images/en/editing/josm-more-tools/extend-building.png
[Merge buildings]: /images/en/editing/josm-more-tools/merge-buildings.png
[Set buildings size]: /images/de/editing/josm-more-tools/set-buildings-size.png
[Set buildings size dialog]: /images/de/editing/josm-more-tools/set-buildings-size-dialog.png
[Buildings advanced]: /images/de/editing/josm-more-tools/buildings-advanced.png
[Utilsplugin2 plugin]: /images/de/editing/josm-more-tools/utilsplugin2-plugin.png
[More tools menu]: /images/de/editing/josm-more-tools/more-tools-menu.png
[Nodes interesection]: /images/en/editing/josm-more-tools/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/de/editing/josm-more-tools/utilsplugin2-copy-tags.png
[Replace geometry]: /images/de/editing/josm-more-tools/utilsplugin2-replace-geometry.png
[Selection menu]: /images/de/editing/josm-more-tools/selection-menu.png
[Unselect nodes]: /images/en/editing/josm-more-tools/utilsplugin2-unselect-nodes.png


