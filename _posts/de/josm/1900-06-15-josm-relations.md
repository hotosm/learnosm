---
layout: doc
title: Relationen in JOSM
permalink: /de/josm/josm-relations/
lang: de
category: josm
---

Relationen
==========


Im [Leitfaden für Anfänger](de/beginner) haben wir Ihnen erläutert, dass OpenStreetMap drei Arten von Objekten kennt: Punkte (Knoten), Linien (und Linienzüge) und Polygone (geschlossene Linienzüge). Linien können viele Punkte enthalten und die ihr zugewiesenen Eigenschaften beschreiben, wofür die Linie steht. Polygone sind Linienzüge, bei denen die letzte Linie dort endet, wo die erste beginnt.

Genau genommen stimmt das nicht ganz, denn es gibt noch einen Objekttyp in OpenStreetMap, die Relation. Genauso wie
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

-   Zeichnen Sie zuerst die Linienzüge. Wir brauchen drei Polygone, ein äußeres Rechteck und zwei kleinere
    Rechtecke.

    ![Multipolygon ways][]

-   Selektieren Sie alle Polygone. Dazu halten Sie beim Anklicken der Objekte die Umschalttaste gedrückt.
-   Wählen Sie aus dem Menü *Vorlagen->Zivilisationsbauten->Zivilisationsbauten->Gebäude*.

    ![Building preset][]

-   Klicken Sie auf "Neue Relation."

    ![New relation][]

-   Sie sollten jetzt das Relationsfenster sehen. Das ist ein bisschen unübersichtlich weil Sie ja
    Eigenschaften an eine ganze Gruppe von Linienzügen zuweisen müssen.

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

So wird eine Relation für eine Buslinie in JOSM angelegt:

-   Selektieren Sie zuerst alle Linien, entlang derer die Route verläuft. Sie müssen dazu vielleicht
    einige Straßen in getrennte Segmente aufteilen, wenn nur ein Teil der Straße zur Buslinie gehört. 
    Verwenden Sie dazu das Werkzeug "Linie aufspalten".
-   Wenn Sie alle Segmente selektiert haben, wählen Sie in der Menüleiste *Vorlagen->Transport->öffentlicher Verkehr->
    öffentliche Verkehrsroute*.

    ![Public transport preset][]

-   Wählen Sie als Routentyp "Bus" aus.
-   Klicken Sie auf "Neue Relation". Es erscheint wieder das Relationsfenster, genau wie bei der
    Erstellung eines Multipolygons.

    ![Bus route relation][]

-   Einige Eigenschaftern sind schon vordefiniert, um die Relation als Route auszuweisen. Statt
    *type=multipolygon* haben wir *type=route*. Es gibt auch eine Eigenschaft, die die Route
    als Buslinie kennzeichnet im Gegensatz zu anderen Arten von Routen.
-   Jetzt fragen Sie sich vielleicht, welche **Rolle** soll ich den Mitgliedern zuweisen? Nun, für die Straßensegmente
    einer Route müssen wir keine Rollen der Mitglieder vergeben. Wir lassen das Feld leer und die Software 
    behandelt sie einfach als Teil der Route.
-   Klicken Sie auf OK und Ihre Routenrelation ist fertig!

>   Wenn Sie eine Aufstellung aller Relationen auf der Karte sehen möchten, öffnen Sie das Relationenfenster
>   indem Sie in der linken Leiste auf dieses Symbol klicken:
>   ![relation panel button][]
>   Dort können Sie Relationen bearbeiten und neue Relationen anlegen.

Zusammenfassung
----------------

Relationen sind nicht ganz einfach zu überblicken und man wird sie nicht oft brauchen.
Es ist aber wichtig, sich mit ihnen vertraut zu machen. Von Zeit zu Zeit werden Sie feststellen, dass Sie
eine Relation brauchen, um ein Objekt korrekt in der Datenbank abzubilden. Dann brauchen Sie das gerade
erworbene Wissen und die weiteren Informationen, die Sie im OSM Wiki finden.



[Multipolygon ways]: /images/en/editing/josm-relations/multipolygon-ways.png
[Building preset]: /images/editing/josm-relations_building-preset.de.png
[New relation]: /images/editing/josm-relations_new-relation.de.png
[Building relation]: /images/editing/josm-relations_building-relation.de.png
[Type multipolygon]: /images/editing/josm-relations_type-multipolygon.de.png
[Outer or inner role]: /images/editing/josm-relations_outer-inner.de.png
[New multipolygon]: /images/en/editing/josm-relations/new-multipolygon.png
[Multipolygon in mapnik]: /images/en/editing/josm-relations/multipolygon-mapnik.png
[An example of a multipolygon]: /images/en/editing/josm-relations/multipolygon-demo.png
[Route relation]: /images/en/editing/josm-relations/route-relation.png
[Public transport preset]: /images/editing/josm-relations_public-transport-preset.de.png
[Bus route relation]: /images/editing/josm-relations_bus-route-relation.de.png
[relation panel button]: /images/en/editing/josm-relations/relation-panel-button.png

