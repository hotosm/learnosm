---
layout: doc
title: Die Technik des Editierens
permalink: /de/josm/josm-editing-techniques/
lang: de
category: josm
---

Die Technik des Editierens: Häufige Fehler
==========================================


Es gibt eine Reihe von Fehlern, die Bearbeiter gerne machen, wenn sie neu bei OpenStreetMap sind. Wir werden uns jetzt mit einigen der häufigsten befassen und einige Hinweise geben, wie man es besser machen kann.

Verbinden von Objekten
-------------------

### Bestimmte Objekte dürfen nicht verbunden werden
Wenn Sie Polygone und Linien erzeugen, die nicht verbunden werden sollen, dann dürfen sie keinen Knoten gemeinsam haben.  Beispielsweise sollten Straßen nicht mit Gebäuden verbunden sein, denn niemand fährt gerne auf einer Straße, die direkt in eine Wand hinein führt!  Wenn Sie zwei oder mehrere Objekte trennen wollen, die einen Knoten gemeinsam haben, wählen Sie zuerst den Knoten aus und dann den Menüpunkt *Werkzeuge->Linien trennen* oder drücken Sie \<\<G\>\>.

![Road and building nodes are connected - NO][]

![Roads Building nodes are disconnected - YES][]

### Aber manche Objekte müssen verbunden sein!
Kreuzende Wege müssen immer einen gemeinsamen Knoten haben. Andernfalls kann der Computer (also z.B. ein Routenplaner) nicht wissen, dass die Straßen wirklich miteinander verbunden sind.

![Intersecting roads should share nodes][]

Der einzige Fall, in dem sich kreuzende Straßen keinen gemeinsamen Knoten besitzen, ist der, wenn eine Straße über der anderen verläuft, es also in der Tat keine Verbindung gibt.

Überlappende Objekte
--------------------
Ein häufiger Fehler sind überlappende Polygone, wobei sich die dadurch beschriebenen Objekte in der Wirklichkeit nicht überlappen.  Ein Gebäude kann kein anderes Gebäude überlappen.  Diesen Fehler findet man häufig bei Gebäuden aber auch bei Polygonen, die Landnutzung beschreiben.  Ein Polygon, dass einen Park außerhalb eines Gebäudes beschreibt, sollte beispielsweise nicht mit dem Gebäude überlappen.  Es sollte stattdessen neben das Gebäude gezeichnet werden.

![Correcting building overlaps][]

Es gibt einige Ausnahmen zu dieser Regel, z.B. Schulen.  In einem Schulgelände kann man einzelne Gebäude mit Polygonen beschreiben, aber man kann auch ein Polygon um das gesamte Gelände zeichnen.
In diesem Fall ist es gerechtfertigt, dass die Polygone überlappen, aber man sollte darauf achten, dass die Gebäude vollständig innerhalb des Polygons liegen, dass die Landnutzung bezeichnet.

![Correcting building landuse][]

Zusammenfassung
---------------
Wir alle machen Fehler, aber mit größerer Erfahrung werden Sie weniger Fehler machen!
Denken Sie daran, selbst wenn Sie fehlerhafte Daten hochladen, können Sie immer Ihre Fehler korrigieren und die geänderten Daten erneut hochladen. Das ist einer der Pluspunkte von OSM: Sie können es immer noch besser machen!


[Road and building nodes are connected - NO]: /images/en/editing/josm-editing-techniques/road-building-no.png
[Roads Building nodes are disconnected - YES]: /images/en/editing/josm-editing-techniques/road-building-yes.png
[Intersecting roads should share nodes]: /images/en/editing/josm-editing-techniques/road-connecting-nodes.png
[Correcting building overlaps]: /images/en/editing/josm-editing-techniques/building-overlap.png
[Correcting building landuse]: /images/en/editing/josm-editing-techniques/building-landuse.png
