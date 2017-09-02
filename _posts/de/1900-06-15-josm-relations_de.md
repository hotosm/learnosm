---
layout: doc
title: JOSM Relationen
permalink: /de/josm/josm-relations/
lang: de
category: josm
---

Relationen
==========

> Diese Anleitung kann heruntergeladen werden als [josm_relations_en.odt](/files/josm_relations_en.odt) oder [josm_relations_en.pdf](/files/josm_relations_en.pdf)  
> Gereviewt am 2017-06-06  

Im [Beginner’s Guide](/en/beginner) haben wir erklärt, dass es drei Arten von erzeugbaren Objekten in OpenStreetMap gibt - Punkte (Nodes), Linien (Wege) und Polygone (geschlossene Wege). Linien beinhalten ein Anzahl von Punkten und die Linie selbst trägt die Attribute, die definieren was sie repräsentiert. Polygone sind ähnlich wie Linien, mit der Ausnahme, dass sie dort enden müssen wo sie beginnen, um einen Umriss zu bilden.  

Tatsächlich waren wir nicht ganz ehrlich, da es einen weitere Objekttyp in OpenStreetMap gibt, Relationen genannt. genauso wie Linien bestehen können aus anderen
Punkten, besteht eine Relation aus einer Gruppe anderer Objekte, egal ob es Punkte, Linien oder Polygone sind. Falls man seine Bearbeitungsfähigkeiten erweitern möchte, sollte man verstehen und wissen wie man Relationen zuverlässig bearbeitet.  

Man stelle sich z.B. vor ein Gebäude erfassen zu wollen, das einen Innenhof in der Mitte hat. Man zeichnet ein Polygon um den Umriss des Gebäudes und ein weiteres Polygon um den Innenhof, um zu zeigen, dass diese nicht Teil des Gebäudes sind. Das ist ein Beispiel für eine Relation. Diese Relation beinhaltet mehrere Polygone -  und die Attribute werden an der Relation erfasst, nicht an den Polygonen.  

![An example of a multipolygon][]

Relationen präsentieren Dinge, welche aus einer Sammlung von Objekten bestehen, Andere Beispiele sind Busrouten (eine Sammlung von Linien), lange und komplexe Objekte (Flüsse oder Straßen) oder Multipolygone als Teile einer Örtlichkeit (wie Gebäude einer Universität).  

Es gibt hauptsächlich vier Arten von Relationen in OSM: Multipolygone, Routen, Grenzen und Restriktionen (solche wie, kein Linksabbiegen). In diesem Abschnitt werden wir Multipolygone und Routen behandeln.  

Multipolygon Relationen erstellen
-------------------------------

Schauen wir uns an, wie man eine Multipolygon Relation wie die obere erstellt.  

Als erstes zeichnet man die Umrisse. In diesem Fall zeichnen wir drei Polygone, ein äußeres Rechteck und zwei kleinere Rechtecke.

![Multipolygon ways][]

- Man selektiert alle Polygone. Man erinnert sich, dass man mehrere Objekte durch halten der Shift Taste und anklicken markieren kann.  
- man wählt *Werkzeuge->Multipolygon erstellen* aus dem Menü.  
- Das Tags Fenster enthält nun das neue Multipolygon.

![New mp object][]

Man klickt den Bearbeiten Button.  

- Man sieht nun das Relationseditorfenster. Das ist etwas komplexer da man nun Tags zu einer Sammlung von Wegen hinzufügt.  

![Building relation][]

- Im oberen Teil der Leiste sind die Tags der Relation sichtbar. Diese Tags funktionieren auf dieselbe Weise wie sie immer funktionieren.  
- Unten ist eine Liste der Mitglieder der Relation. Diese Relation hat drei Mitglieder - das sind die drei Wege, welche Teil der Relation sind.  
- Man beachte, dass bereits ein Tag für uns definiert wurde, *type=multipolygon*. Man muss noch ein weiteres Tag hinzufügen, welches den Typ des Objektes angibt, dass die Relation repräsentiert. Man muss folgendes Tag hinzufügen *building=yes*.  
- Man klickt auf die Tag Box und fügt es hinzu.  

![Building yes][]

- Die **Rollen** wurden den Wegen bereits korrekt zugewiesen. Jedes Mitglied einer Relation hat eine Rolle, die den Zweck des Mitglieds angibt. In diesem Fall muss man die Rolle des äußeren Polygons als **outer** definieren und die rolle der beiden inneren Polygone als **inner**. Diese Rollen sind verfügbar für Mitglieder eines Multipolygons.  

- Man klickt OK und die Multipolygon Relation ist fertig!  

![New multipolygon][]

Wenn man ein solches Multipolygon erstellt, sieht es auf der Karte wie folgt aus:  

![Multipolygon in Mapnik][]

Multipolygone können für komplexe Objekte verwendet werden, welche innere und äußere Polygone voraussetzen, wie z.B. ein Gebäude oder ein Fluß mit kleineren inneren Landstellen. Weitere Details über Multipolygone kann gefunden werden im [OSM Wiki](http://wiki.openstreetmap.org/wiki/Relation:multipolygon).  

Routen Relationen
----------------

Relationen sind auch sehr nützlich um lange Routen darzustellen. Eine Busroute oder Fahrradstrecke folgt etlichen Straßensegmenten zum Beispiel. Um eine solche Route zu definieren kann man eine Relation erstellen, welche alle Straßensegmente die Reil der Route sind enthält. Weitere Kartenelemente können auch Teil der Routenrelation sein, z.B. Bushaltestellen.  

![Route relation][]

Schauen wir uns an, wie man eine Relation für eine Busroute in JOSM erstellt:  

- Als erstes markiert man alle Wege, die auf der Route liegen. Manchmal muss man einige Straßen in separate Segmente aufteilen, wenn nur ein Teil davon zur Relation gehört. Man kann dies mit dem "Weg teilen" Werkzeug machen.  
- Wenn alle Segmente selektiert sind, geht man zu *Vorlagen->Transport->Öffentliche Verkehrsmittel->Öffentliche Verkehrsrouten (Bus)*.  

![Public transport preset][]

- Ein neues Fenster erscheint, wo man Informationen eingeben kann, die für die ganze Route gelten.

![New route relation][]

Es ist wichtig, den spezifische Routentyp im Auswahlmenü oben auszuwählen. Für Busrouten sind zwei Optionen verfügbar, Bus und Oberleitungsbus. Typischerweise gibt man auch Name, Referenznummer, Von und Zu an.

- Man klickt "Neue Relation". Ein Relationsfenster öffnet sich, genauso als wenn man ein Multipolygon erstellt.  

![Bus route relation][]

- Man beachte, dass bereits Tags vorhanden sind, welche die Relation als Route definieren. Anstatt *type=multipolygon* haben wir *type=route*. Man hat auch ein Tag das es als Busroute definiert, zur Abgrenzung von anderen Routentypen.  
- Man fragt sich vielleicht, was die **Rolle** eines Mitglieds ist? Im Fall einer Route muss man keine Rollen definieren. Dadurch dass die Rolle leer gelassen wird, weis die Software, dass es einfach Teile der Route sind. Man könnte auch für jedes Segment die Rolle **route** definieren, aber das ist nicht notwendig.  
- Man klickt OK und die Routenrelation ist vollständig!  

> Wenn man eine Liste aller Relationen auf der Karte sehen möchte, kann man die Relationsleiste durch einen Klick auf diesen Button auf der linken Seite öffnen: ![relation panel button][]{: height="30px"}. Dies öffnet eine Seitenleiste wo man Relationen auswählen, bearbeiten und erstellen kann.  

Zusammenfassung
-------

Relationen können schwer verständlich sein und müssen nicht oft verwendet werden, aber man sollte darüber Bescheid wissen. Immer öfters stellt man fest, dass man eine Relation benötigt um etwas korrekt erfassen zu können. Das gerade gesammelte Wissen kann man nutzen, neben weiteren Informationen im OSM Wiki, um Relationen korrekt zu mappen.


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png