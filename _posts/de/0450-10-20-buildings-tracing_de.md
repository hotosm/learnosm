---
layout: doc
title: Rechteckige Gebäude zeichnen - iD-Editor
permalink: /de/hot-tips/tracing-rectangular-buildings/
lang: de
category: hot-tips
---

Rechteckige Gebäude zeichnen - iD-Editor
============

> Aktualisiert am 23.06.2019

- TOC
{:toc}

Die Grundlagen
----------

![Rectangular building][]  

> Dieses Bild ![keymon]{: height="24px"} zeigt, welche Maustaste oder welches Mausrad genutzt wurde und welche Taste auf der Tastatur gedrückt wurde  

Folgendermaßen ist vorzugehen:  

- Um das Zeichnen eines Gebiets abzuschließen, doppelklicken Sie auf den letzten Punkt,  
- Wenn das Gebäude rechtwinklige Ecken haben soll, müssen Sie es mit rechtwinkligen Ecken einzeichnen oder das Werkzeug zum Erzeugen rechtwinkliger Ecken (auf Englisch Tastenkürzel „q“) verwenden.  
- Vergessen Sie nicht, Eigenschaften hinzuzufügen!  
- Die Größe ist wichtig - *Die Bevölkerungsschätzung basiert auf der addierten Grundfläche der Gebäude in dem jeweiligen Gebiet*,  
- die richtige Gebäudegröße und das richtig ausgerichtete Einzeichnen erleichtert es Menschen, ihr Dorf zu erkennen.  
- Zoomen Sie weit genug rein, um alle Details zu sehen - ein Zoom Maßstab von 20 Metern oder weniger ist normalerweise gut.  
- **Gebäude finden** - suchen Sie mit einem Maßstab irgendwo zwischen 50 und 80 Metern. Achten Sie besonders auf Schatten und gerade Linie (runde Gebäude sind schwieriger zu finden!)  
- Gebäude sollten sich nicht mit Straßen, Flüssen, **landuse=residential** Grenzen oder anderen Merkmalen überschneiden.  
- Wenn Sie einen Fehler machen, benutzen Sie den **Rückgängig** Button ![back arrow]{: height="26px"}, um deine letzten Änderungen rückgängig zu machen.  
- Wir wollen alle die Karte verbessern. Wenn der vorherige Mapper die Gebäude in einer komischen Form oder sonst falsch eingezeichnet hat, verbessern Sie diese und überlegen Sie sich, ob Sie ihm eine freundliche Nachricht schicken wollen.  

Verdunkelte oder aus einem Winkel zu sehende Gebäude  
--------------------------------------

![building-obscured][]  

Es passiert häufig, dass das Satellitenbild aus einem Winkel aufgenommen wurde, der das Gebäude verformt aussehen lässt. In dem oberen Bild zeigt das Bild auf der rechten Seite, wie das Gebäude eingezeichnet werden sollte. Das einfachste wird es meistens sein, die Außenlinien des Daches zu zeichnen und anschließend die Zeichnung an den Ort zu verschieben, an dem die Grundmauern stehen - Mit dieser Technik wurden das Gebäude im Bild oberhalb eingezeichnet. Beachte auch, dass ein Gebäude, das teilweise von einem Baum verdeckt wird, korrekterweise rechteckig eingezeichnet werden muss. 

Gebäude mit einem gezackten Dach
----------------------------
 
Die meisten Gebäude haben entweder 90 Grad Winkel oder sind runde Gebäude.  

![building-ridge][]  
Die Ecken dieses Gebäudes sind eigentlich im 90 Grad Winkel, Da das Gebäude aber einen Dachfirst hat, führt der Kamerawinkel dazu, dass es aussieht, als sei es merkwürdig geformt.  

![building-tree-ridge][]  
Dieses Gebäude wird teilweise von einem Baum verdeckt. Es ist aber ein rechteckiges Gebäude.  

In abgelegenen Teilen der Welt ist es üblich, Wellblech für das Dach zu benutzen - wenn diese neu sind, erzeugt das reflektierende Sonnenlicht einen **sehr hellen Lichtreflex** auf dem Satellitenbild. Häufig haben Gebäude eine Veranda oder sind **L-förmig**. Versichern Sie sich dann, dass Sie das Gebäude in der richtigen Form einzeichnen.  
Wenn Sie die Außenlinien des Gebäudes zeichnen, müssen Sie versuchen, die Gebäude in der richtigen Größe zu zeichnen und an der Stelle, wo die Wände den Boden berühren. Geben Sie ihr Bestes! In vielen Teilen werden Gebäude angefangen zu bauen und dann ohne Dach zurückgelassen bis sie verkauft sind oder auf andere Weise benutzt werden sollen. Mappen sie auch Gebäude ohne Dach, da es nicht lange dauert, ein Dach hinzuzufügen und dieses vielleicht schon seit der Aufnahme des Satellitenbildes geschehen ist.  

Geben Sie ihr Bestes - selbst die Experten werden sich manchmal nicht einig darüber werden, was auf dem Bild zu sehen ist und manchmal wird es nötig sein, vor Ort zu beurteilen, worum es sich handelt. **Füge im Zweifel ein Gebäude hinzu.**  

 Attribute für Gebäude
-------------

Da wir Gebäude eintragen, die wir noch nie besucht haben und auch sonst nicht kennen, ist der sicherste und beste Weg alle Gebäude mit dem Attribut **building**=**yes** zu versehen, welches Sie bei richtig eingetragenen Gebäuden finden können, indem Sie zum Ende der Eigenschaftsübersicht scrollen und auf **Alle Eigenschaften** klicken.  

Siehe auch  
---------

[![building-video]{: height="150px"}](https://www.youtube.com/watch?v=VPJz-AucqF4&index=7&list=PLb9506_-6FMHZ3nwn9heri3xjQKrSq1hN "Humanitarian OpenStreetMap Team Einführungs Videos - Ein Gebäude zu OpenStreetMap hinzufügen")  
*Untertitel sind in einigen Sprachen verfügbar.*  

- [Ivan Gaytons Tagebucheintrag aus Hadjer Lamis, Tschad - Kommentare von anderen weisen darauf hin, dass die Beschreibungen auch auf andere Regionen der Welt passen.](https://www.openstreetmap.org/user/IvanGayton/diary/38612)



[Rectangular building]: /images/hot-tips/rectangular_building.gif "Rein rechteckiges Gebäude einzeichnen, die Ecken in 90 Grad Winkel bringen, Attribute hinzufügen."
[keymon]:/images/hot-tips/keymon.png
[building-ridge]: /images/hot-tips/building-ridge.png
[back arrow]: /images/beginner/back-arrow.png
[building-tree-ridge]: /images/hot-tips/building-tree-ridge.png
[building-obscured]: /images/hot-tips/buildings-obscured-traced-1.png "Vorher und nachher - ein Gebäude einzeichnen, das aus einem Winkel zu sehen ist"
[building-video]: /images/hot-tips/building-video.png "Humanitarian OpenStreetMap Team Einführungs Videos - Ein Gebäude zu OpenStreetMap hinzufügen"