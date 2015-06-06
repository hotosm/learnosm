---
layout: doc
title: JOSM Relations
permalink: /de/editing/josm-relations/
lang: de
category: editing
---

Relations
==========


This section of LearnOSM is in the process of being translated. If you would like to assist with translating this site, please see [CONTRIBUTING.md](https://github.com/hotosm/learnosm/blob/gh-pages/CONTRIBUTING.md).

---

Im [Leitfaden für Anfänger](de/beginner) haben wir Ihnen erläutert, dass OpenStreetMap drei Arten von Objekten kennt: Punkte (Knoten), Linien (und Linienzüge) und Polygone (geschlossene Linienzüge). Linien können viele Punkte enthalten und die ihr zugewiesenen Eigenschaften beschreiben, wofür die Linie steht. Polygone sind Linienzüge, bei denen die letzte Line dort endet, wo die erste beginnt.

Genau genommen stimmt das nicht ganz denn es gibt noch einen Objekttyp in OpenStreetMap, die Relation. Genauso wie
eine Linie aus Punkten besteht, enthält eine Relation andere Objekte. Das können Punkte, Linien oder Polygone sein.
Wenn Sie tiefer in das Editieren der Daten einsteigen wollen, ist ein genaueres Verständnis der Handhabung von
Relationen unabdingbar.

Stellen Sie sich beispielsweise vor, Sie wollen ein Gebäude mit Innenhöfen zeichnen. Sie müssen ein Polygon entlang
der äußeren Kontur des Gebäudes zeichnen, sowie andere Polygone entlang der Innenhöfe, um sie von dem Gebäude
auszuschließen. Das ist ein Beispiel einer Relation. Eine solche Relation enthält mehrere Polygone und die
Eigenschaften des Gebäudes werden an die Relation angefügt, nicht an die einzelnen Polygone.

![An example of a multipolygon][]

Relationen könne für alles verwendet werden, was durch eine Ansammlung von Objekten dargestellt werden muss.
Weitere Beispiele dafür sind Buslinien (eine Sammlung von Straßen), lange und komplexe Objekte (Flüsse und Straßen)
oder mehrere Polygone, die sachlich und räumlich zusammengehören (die Gebäude auf einem Universitätsgelände).

Sie werden vorwiegend vier Arten von Relationen in OpenStreetMap sehen: Multipolygone, Routen, Grenzen und
Beschränkungen (z. B. Abbiegeverbote). Wir werden uns mit Multipolygonen und Routen näher befassen.

Erzeugen von Multipolygon-Relationen
------------------------------------

Wir wollen eine Relation erzeugen ähnlich wie die, die wir oben gesehen haben.

-   Zeichnen Sie zuerst die Linienzügen. Wir brauchen drei Polygone, ein äußeres Rechteck und zwei kleinere
    Rechtecke.

![Multipolygon ways][]

-   Selektieren Sie alle Polygone. Dazu halten Sie beim Anklicken der Objekte die Umschalttaste gedrückt.
-   Wählen Sie aus dem Menü *Vorlagen->Zivilisationsbauten->Zivilisationsbauten->Gebäude*.

![Building preset][]

-   Klicken Sie auf "Neue Relation."

![New relation][]

-   Sie sollten jetzt das Relationsfenster sehen. Das ist ein bisschen unübersichtlich
    und sie werden jetzt Eigenschaften an eine Gruppe von Linienzügen zuweisen.

![Building relation][]

-   Beachten Sie, dass sich im oberen Teil des Fensters die Eigenschaften für die ganze Relation befinden. 
    Diese Eigenschaften definieren die Relation genauer - ebenso wie die Eigenschaften für Punkte oder Linien.
-   Darunter sehen Sie eine Liste der Mitglieder der Relation. In unserem Fall sind das drei -
    eben die drei Linienzüge, mit denen wir die Relation erstellt haben.
-   Wir müssen jetzt noch ein paar Sachen erledigen, damit unser Multipolygon richtig definiert ist. Da wir
    die Gebäude-Vorlage verwendet haben, ist bereits eine Eigenschaft vorbelegt, 
    *building=yes*. Wir brauchen jetzt noch eine weitere, um den **Typ** der Relation festzulegen.
    Die neue Eigenschaft heißt *type=multipolygon*.
-   Klicken Sie in das Eigenschafts-Feld und fügen Sie sie hinzu.

![Type multipolygon][]

-   Als nächstes müssen wir uns um die sogenannten **Rollen** kümmern. Jedes Mitglied einer Relation
    hat eine Rolle, die angibt, wozu das Mitglied dient. In unserem Fall müssen wir
    die Rolle des äußeren Polygons als **outer** und die Rollen der zwei inneren Polygone als
    **inner** festlegen. Dies sind die einzigen Rollen,
    die für die Mitglieder eines Multipolygons erlaubt sind.
-   Wählen Sie unten links der Reihe nach alle Mitglieder der Liste aus. Das ausgewählte Mitglied
    wird außerdem im Kartenfenster hervorgehoben. Setzen Sie jeweils **outer** und
    **inner** für die entsprechenden Polygone.

![Outer or inner role][]

-   Klicken Sie auf OK und Ihre Multipolygon-Relation ist fertig!

![New multipolygon][]

Auf einer Karte sieht das dann etwa so aus:

![Multipolygon in Mapnik][]

Multipolygone können für jedes komplexe Objekt verwendet werden, das innere und äußere Polygone benötigt, z.B.
ein Gebäude oder ein Fluß mit Inseln in der Mitte. Weitere Informationen zu diesem Thema finden Sie
im [OSM Wiki](http://wiki.openstreetmap.org/wiki/DE:Relation:multipolygon).

Routen-Relationen
-----------------

Relationen sind auch nützlich, um lange Routen darzustellen. Z. B. eine Buslinie oder eine
Fahrradroute, die verschiedenen Straßenabschnitten folgen. Um eine solche Route festzulegen, können wir
eine Relation erzeugen, die alle diese Straßenabschnitte enthält.
Eine Routenrelation kann auch noch mehr enthalten, etwa Bushaltestellen.

![Route relation][]

Let's see how to create a relation for a bus route in JOSM:

-   First, select all of the ways which the route runs along. You may need to
    split some streets into separate segments if only part of them belong to
    the relation. You can do this using the "Split Way" tool.
-   When all the segments are selected, go to *Presets->Transport->Public Transport->
    Public transport route*.

![Public transport preset][]

-   Next to Route type, select "bus."
-   Click "New Relation." You will see the relation window pop up, just as when
    you create a multipolygon.

![Bus route relation][]

-   Notice that there are already tags which define the relation as a route. Instead
    of *type=multipolygon*, we have *type=route*. We also have a tag defining it as
    a bus route, as opposed to another type of route.
-   You may now think, what should the **role** of the members be? Well, in the case
    of a route, we don't need to define the role of the members. By leaving the role blank
    the software knows that they are simply part of the route. We could also define the role
    of each segment as **route**, but it is not necessary.
-   Click OK and your route relation will be complete!

>   If you want a list of all the relations on the map, you can open the relations panel
>   by clicking on this button on the left:
>   ![relation panel button][]
>   This will open a panel where you can select, edit, and create new relations.

Summary
-------

Relations can be difficult to understand and do not need to be used often,
but they are necessary to know about. Every so often you may realize that you
need a relation to map something correctly, and you can use this knowledge, and find
more information on the OSM Wiki, to help you map relations correctly.



[Multipolygon ways]: /images/en/editing/josm-relations/multipolygon-ways.png
[Building preset]: /images/en/editing/josm-relations/building-preset.png
[New relation]: /images/en/editing/josm-relations/new-relation.png
[Building relation]: /images/en/editing/josm-relations/building-relation.png
[New relation]: /images/en/editing/josm-relations/new-relation.png
[Type multipolygon]: /images/en/editing/josm-relations/type-multipolygon.png
[Outer or inner role]: /images/en/editing/josm-relations/outer-inner.png
[New multipolygon]: /images/en/editing/josm-relations/new-multipolygon.png
[Multipolygon in mapnik]: /images/en/editing/josm-relations/multipolygon-mapnik.png
[An example of a multipolygon]: /images/en/editing/josm-relations/multipolygon-demo.png
[Route relation]: /images/en/editing/josm-relations/route-relation.png
[Public transport preset]: /images/en/editing/josm-relations/public-transport-preset.png
[Bus route relation]: /images/en/editing/josm-relations/bus-route-relation.png
[relation panel button]: /images/en/editing/josm-relations/relation-panel-button.png

