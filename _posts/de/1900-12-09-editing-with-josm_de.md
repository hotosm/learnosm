---
layout: doc
title: Erfassen realer Objekte in JOSM
permalink: /de/josm/editing-with-josm/
lang: de
category: josm
---

Erfassen realer Objekte in JOSM
==================

> Diese Anleitung kann unter [josm_editing-with-josm_de.odt](/files/josm_editing-with-josm_de.odt) oder [josm_editing-with-josm_de.pdf](/files/josm_editing-with-josm_de.pdf) heruntergeladen werden  
> Geprüft 2015-07-13  

Wir kennen jetzt die grundlegenden Techniken im Umgang mit OpenStreetMap.
Wir werden später mehr darüber erfahren, wie man mit mobilen Geräten ein Gebiet erfassen kann.  

In diesem Kapitel vertiefen wir zunächst unsere Kenntnisse 
über JOSM.

Ebenen in JOSM
-----------
Sie wissen schon, dass wir die unterschiedlichsten Datenquellen
in JOSM benutzen können. Wir können Daten herunterladen, Bing-Satellitenbilder dazufügen,
GPS-Spuren und Field Papers benutzen - alle diese Datenquellen werden 
im Kartenfenster von JOSM angezeigt.

Ihnen ist vielleicht aufgefallen, dass jedesmal, wenn wir eine neue Quelle zu JOSM hinzufügen, ein zusätzlicher Eintrag
im Ebenen-Fenster auf der rechten Seite von JOSM erscheint. Je nachdem,
was Sie schon eingestellt haben, wird es etwa so aussehen:

![Layers panel][]

Jedes Objekt in dieser Liste stellt eine andere Datenquelle dar, die 
Sie in der Kartenansicht geöffnet haben. In dem obrigen Beispiel sind „Data Layer 1“ 
die Daten von OpenStreetMap, welche wir editieren wollen. „Field Papers “ 
ist die Ebene, die wir angelegt haben, als wir unser Field Paper zu JOSM hinzugefügt haben.

Wenn wir Bing-Satellitenbilder hinzufügen, erscheint eine neue Ebene im Ebenen-Fenster unter dem Namen "Bing Sat".

Der Begriff 'Ebenen' ist vielleicht nicht selbsterklärend. Vielleicht hilft die Vorstellung, dass es
sich um Folien handelt, die alle übereinandergelegt werden.
Auf jeder Folie finden sich verschiedene Informationen und die Folien
können nach Ihren Vorstellungen angeordnet werden.

Ebenen die als Vorlagen dienen, wie etwa Satellitenbilder, GPS-Spuren und Field Papers
werden oft als Basisebenen bezeichnet. Die OSM-Daten-Ebene ist die Ebene, auf der wir arbeiten.

- Um eine Ebene zu verschieben, klicken Sie auf sie im Ebenen-Fenster und klicken dann auf
    die Pfeile, um sie über oder unter den benachbarten Ebenen anzuzeigen.

![Layers up down][]

- Um eine Ebene zu verstecken, wählen Sie sie mit der Maus aus und 
    klicken dann auf den Zeigen/Verstecken-Button:

![Layers show hide][]

- Nun sollte die Ebene, welche Sie ausgewählt haben in der Kartenansicht verschwinden. 
    Klicken SIe erneut auf Zeigen/Verstecken und die Ebene erscheint wieder.
- Sie können eine Ebene entfernen indem Sie sie auswählen und auf den
    Knopf zum Entfernen drücken:

![Layers delete][]

- Zuletzt ist es wichtig zu wissen, dass Sie nur eine Ebene bearbeiten können, 
    die von JOSM als aktiv erkannt wird. Wenn Sie die Ebene in der Kartenansicht nicht bearbeiten können,
     liegt es wahrscheinlich daran, dass Sie die falsche Ebene 
    auf aktiv gsetzt haben. Die meisten Ebenen, wie zum Beispiel GPS Wegpunkte, Field 
    Papers oder Satellitenaufnahmen können nicht bearbeitet werden. Die einzigen Ebenen, 
    welche bearbeitet werden können, sind Daten von OpenStreetMap, die normalerweise mit 
    „Data Layer 1“ bezeichnet werden.
- Um eine Ebene aktiv zu setzen, wählen Sie sie in dem Ebenenmenü aus und klicken Sie auf den 
    den Knopf zum Aktivieren:

![Layers activate][]


Daten aus GPS und Field Papers
-------------------------------
Im Abschnitt [Kartierung mit Smartphone, GPS oder Field Paper](/de/mobile-mapping/) haben wir gelernt, wie man mit GPS
und Field Paper Daten sammeln und als Ebene in JOSM laden kann.

Wenn Sie die Realität mit diesen Hilfmitteln erfasst haben, müssen Sie immer noch
die Informationen zu OpenStreetMap hinzufügen.

Wir verwenden wieder den gleichen Prozess - **Herunterladen,
Editieren, Speichern**. Der Unterschied besteht darin, dass wir nicht nur Satellitenbilder
sondern auch GPS-Daten, Field Papers
und Notizen verwenden.

- Nehmen wir einmal an, Sie haben GPS-Wegpunkte als Hintergrundebene
    in JOSM. Ein Wegpunkt habe die Nummer 030 und
    Sie haben sich notiert, dass dort eine Schule ist. Um diesen Punkt
    in OpenStreetMap einzutragen, verwenden wir das Zeichenwerkzeug und 
    doppelklicken auf den Punkt 030 im Kartenfenster. Dadurch wird
    ein Punkt in der Bearbeitungsebene erzeugt. Dann suchen wir im Vorlagen-Menü die Vorlage für
    eine Schule. Wir tragen den Namen der Schule ein und klicken auf "Vorlage anwenden".  Genauso
    verfahren wir mit Linien und Formen.

![GPS in JOSM][]

Attribute (Tags)
----
Sobald wir einen Punkt, eine Linie oder eine Form eingezeichnet haben, ist ein Ort zugeordnet aber keine Information über das Objekt selbst.
Mit anderen Worten, wir wissen **wo** sich das Objekt befindet
aber nicht, **was** es darstellt. Bisher haben wir Vorlagen verwendet,
um das **Was** festzulegen. OpenStreetMap
bezieht diese Informationen aus **Atttributen (Tags)**.

Ein Attribut ist wie ein Etikett, das man an etwas anhängen kann. Wenn wir z.B.
ein Rechteck zeichnen, ist es zunächst nur ein Rechteck. Aber sobald wir Attribute dazufügen,
beschreiben wir, was das Rechteck bedeuten soll: es ist ein Gebäude; es heißt
"Menara Thamrin" und hat 16 Stockwerke.

Sie können soviele Attribute an ein Objekt anhängen wie Sie wollen. Die Atttribute werden
ls Paare von Texten gespeichert, die **Schlüssel** und **Wert** genannt werden.
In OpenStreetMap würden die oben genannten Attribute so aussehen:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Wenn Sie ein Objekt in JOSM öffnen, sehen Sie alle seine Attribute
im Merkmale-Fenster auf der rechten Seite.

![Properties panel][]

### Attribute bearbeiten
Sie können im Merkmale-Fenster Attribute hinzufügen, bearbeiten und löschen. Da die Attribute aber
alle englische Namen tragen und nicht immer selbsterklärend sind, ist
es oft einfacher, das Vorlagen-Menü zu benutzen. Wenn Sie Attribute hinzufügen oder verändern, ändern Sie direkt
die Eigenschaften des betreffenden Objekts.

- Um die Attribute eines Objekts zu bearbeiten, wählen Sie es zuerst aus.
- Dann stehen Ihnen zwei Möglichkeiten zur Verfügung: (!) Verwenden Sie das Vorlagen-Menü
    oder (2) bearbeiten Sie die Attribute direkt im Merkmale-Fenster auf der rechten Seite. 

### Ein verbreiteter Fehler: Attribute zu Punkten hinzufügen, während Sie Linien oder Formen bearbeiten
Um die Attribute eines Punkts zu bearbeiten wählen Sie zuerst
den Punkt aus und wählen Sie dann einen Eintrag aus dem Vorlagen-Menü oder setzen Sie das Attribut
direkt im Merkmale-Fenster. Ein Fehler wird gerne bei der Bearbeitung von 
Linien oder Formen gemacht. Wenn Sie das Objekt auswählen, ist es wichtig, dass Si
die Linie auswählen und NICHT einen der Punkte, aus denen die Linie besteht.

Das passiert deshalb öfter, weil man gerne das Auswahlwerkzeug benutzt um einen Rahmen
um das Objekt aufzuziehen. Das führt dazu, dass sowohl die Linie **als auch** deren Punkte selektiert werden. Wenn Sie jetzt Attribute hinzufügen, werden diese auch auf die Punkte
angewendet. Passen Sie auf, dass Sie **nur** Linien auswählen, wenn Sie
ihnen Attribute zuweisen
wollen.

![Nodes mistake][]

OSM-Daten sichern
----------------
Wenn Sie mit JOSM arbeiten ist es eine gute Idee, Änderungen 
in überschaubaren Zeiträumen zu sichern. Es empfiehlt sich nicht, Daten
an einem Tag herunterzuladen und Änderungen daran erst Tage später wieder hochzuladen. Jemand
anderes könnte in der Zwischenzeit Änderungen in der gleichen Gegend eingetragen haben. Das führt zu Fehlern und Konflikten.

Sie machen nichts falsch wenn Sie oft sichern. Dadurch stellen Sie sicher,
dass Ihre Änderungen in der Datenbank gespeichert werden und Sie verlieren nicht Ihre mühevolle Arbeit.

Wenn Sie an einem bestimmten Gebiet arbeiten, sollten Sie die Kartendaten
jedesmal neu herunterladen, wenn Sie mit der Arbeit beginnen. Dann stehen Ihnen auch die Änderungen anderer Bearbeiter zur Verfügung.

Obwohl Sie immer OSM-Daten vor der Bearbeitung herunterladen und nach der Bearbeitung wieder hochladen sollten,
gibt es Fälle, in denen Sie OSM-Daten
auf Ihrem Rechner speichern wollen. Vielleicht haben Sie gerade keine zuverlässige
Verbindung zum Internet und können die Daten erst zu einem späteren Zeitpunkt
wieder hochladen.

- Um eine OSM-Datei lokal zu speichern, stellen Sie sicher, dass es sich um die aktive Ebene im 
    Ebenen-Fenster handelt. Klicken Sie auf "Datei" im Hauptmenü, dann auf "Speichern".
    Wählen Sie einen Ordner aus und vergeben Sie einen Namen. Sie können auch 
    einfach diesen Knopf drücken:

![JOSM save button][]

- Sie können jetzt JOSM schliessen und Ihre Daten sind gesichert. Wenn Sie wieder
    mit den Daten arbeiten wollen, öffnen Sie einfach JOSM, gehen zum "Datei"-Menü und
    klicken auf "Öffnen..."

Zusammenfassung
-------
In diesem Kapitel haben wir uns ein wenig näher mit der Benutzeroberfläche von JOSM befaßt und einiges 
über Ebenen und Attribute gelernt. Sie haben jetzt eine solide Grundlage um Karten in
OpenStreetMap zu bearbeiten.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png