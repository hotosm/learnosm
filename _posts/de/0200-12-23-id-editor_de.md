---
layout: doc
title: iD Editor
permalink: /de/beginner/id-editor/
lang: de
category: beginner
---

Der iD Editor
=============

Stand 2019-06-10

Wollen Sie gerade mit dem Tasking Manager ein Projekt für HOT oder MissingMaps bearbeiten? Schauen Sie doch einmal in unsere [HOT-tips](/de/hot-tips/).  

- TOC
{:toc}

Der iD-Editor ist der de-facto browserbasierte OpenStreetMap-Editor. iD ist schnell und einfach zu nutzen, und erlaubt das kartieren von mehreren Datenquellen wie Satelliten- und Luftbildern, GPS, Feldpapieren oder Mapillary.  

Der iD-Editor stellt eine gute Möglichkeit zum Bearbeiten dar, wenn Sie kleine und schnelle Änerungen vornehmen möchten und nicht die ganze Komplexität von JOSM benötigen. Dieses Kapitel zeigt die Grundlagen der Bearbeitung mit iD.   

Den iD Editor starten
----------------------

- Der iD-Editor benötigt eine aktive Verbindung zum Internet.  
- Öffnen Sie Ihren Webbrowser und navigieren Sie zu der OpenStreetMap-Website auf [http://www.openstreetmap.org](http://www.openstreetmap.org).  
- **Melden Sie sich an** mit Ihrem OpenStreetMap-Benutzerkonto  
- Verschieben und vergrößern Sie die Karte zu dem Bereich, den Sie bearbeiten wollen. Sie können verschieben, indem Sie die linke Maustaste gedrückt halten und die Karte zum gewünschten Bereich ziehen.  
- Klicken Sie auf den kleinen Pfeil neben **Bearbeiten**. Dann klicken Sie auf **Bearbeiten mit iD (im Browser eingebetteter Editor)**.  

![image1][]


Die Benutzeroberfläche des iD-Editors
-------------------------
![image2][]

1. **Objekt bearbeiten:** Dieses Bedienungsfeld zeigt Tags des ausgewählten Objekts.  
	Sie können von diesem Bedienungsfeld aus Tags hinzufügen oder bearbeiten.  
2. **Werkzeuge:** Diese Bedienoberfläche zeigt die grundlegenden Bearbeitungswerkzeuge:  
    Punkt (node) zeichnen, *Tastenkürzel* **1** ![image3][]{: height="24px"}  
    Linie (Weg) zeichnen, *Tastenkürzel* **2** ![image4][]{: height="24px"}  
    Fläche (Polygon) zeichnen, *Tastenkürzel* **3** ![image5][]{: height="24px"}  
    Rückgängig machen, *Tastenkürzel* **Strg+z** ![image6][]{: height="24px"}  
    Wiederherstellen, *Tastenkürzel* **Umschalt+Strg+y** ![image7][]{: height="24px"}  
    Speichern, *Tastenkürzel* **Strg+s** ![image8][]{: height="32px"}  
3. **Kartenbedienfeld:** Dieses Bedienfeld zeigt mehrere Konfigurationsmöglichkeiten:  
    Hineinzoomen, *Tastenkürzel* **+**  ![image9][]{: height="24px"}  
    Herauszoomen, *Tastenkürzel* **-** ![image10][]{: height="24px"}  
    Meinen Standort anzeigen ![image11][]{: height="24px"}  
    Hintergrundeinstellungen, *Tastenkürzel* **b** ![image12][]{: height="24px"}  
    Kartendaten, *Tastenkürzel* **k** ![Map Data][]{: height="24px"}  
    Probleme, *shortcut key* **p** ![Issues][]{: height="24px"}  
    Hilfe, *Tastenkürzel* **h** ![image13][]{: height="24px"}  
4. **Informationsbedienfeld:** Dieses Bedienfeld zeigt mehrere Informationen, wie Maßstab, oder welche Nutzer zu diesem Bereich beigetragen haben.  

## Hintergrundanzeige einstellen

Klicken Sie auf **Hintergrundeinstellungen** oder benutzen Sie das *Tastenkürzel* **b**. ![image14][]{: height="24px"}  
![image15][]  
Sie können auch, je nachdem, welche Satelliten-/Luftbilder Sie benutzen möchten (standardmäßig sind Bing-Luftbilder eingestellt), den **Hintergrund ändern**.  

Sie können Ihre eigenen Kartenkacheln verwenden, indem Sie auf **Benutzerdefiniert** klicken. Wenn Sie beispielsweise **ein Field Paper** [^fieldpaper] einbetten möchten, klicken Sie auf **Benutzerdefiniert** klicken Sie auf das Vergrößerungsglas (Suche) um dieses Fenster zu öffnen:-  
![image17][]   
und geben Sie Ihre **Field-Paper-Snapshot-URL** ein, die ungefähr so aussehen müsste: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Um **GPS-Tracks von Ihrem Rechner anzuzeigen** (GPX-Format), ziehen Sie die GPX-Datei in den iD-Editor.  
Um **OpenStreetMap GPS-Tracks** einzuschalten klicken Sie auf das Kästchen. Im Bild unten werden GPS-Tracks in verschiedenen Farben angezeigt, die die Richtung der Reise anzeigen.  
![osm gps traces][]  
Um das **Aussehen des Hintergrunds** zu ändern klicken Sie auf **Hintergrundeinstellungen**  
![DisplayOptions][]  
Falls ein [Luftbildversatz](/de/josm/aerial-imagery) existiert, können Sie **den Luftbildversatz korrigieren**, indem Sie auf **Hintergrund-Versatz anpassen** klicken.  
![image18][]  

- Klicken Sie auf die Navigationsschaltflächen, um das Luftbild zu verschieben. Klicken Sie auf den Zurücksetzen-Knopf, um die ursprüngliche Ausrichtung wiederherzustellen. ![image20][]  

Grundlagen der Bearbeitung mit iD  
----------------------  

### Punkte hinzufügen  

Um einen neuen Punkt hinzuzufügen, klicken Sie auf die Schaltfläche **Punkt**. ![image3][]{: height="24px"}  

- Der Mauszeiger erscheint nun als Pluszeichen (+). Klicken Sie jetzt an einer Stelle, die Sie kennen, um einen Punkt hinzuzufügen. Wenn Sie zum Beispiel wissen, dass es ein Krankenhaus in Ihrer Nähe gibt, klicken Sie auf das Krankenhausgebäude.   
![image21][]  
- Beachten Sie, dass ein Punkt hinzugefügt wird. Gleichzeitig öffnet sich links ein Bedienungsfeld, bei dem Sie Attribute für das Objekt auswählen können. Klicken Sie auf **Krankenhausgelände**, um den Punkt als Krankenhaus zu kennzeichnen.  
![image22][]  
- Sie können das Formular benutzen, um Detailinformationen über den Punkt einzugeben. Sie können den Namen des Krankenhauses, die Adresse und weitere zusätzliche Informationen eingeben. Beachten Sie, dass es bei jedem Objekttyp ein jeweils anderes Eingabeformular gibt, je nach dem, welches Attribut Sie im Eigenschafteneditor auswählen.  
- Wenn Sie einen Fehler machen, etwa den Punkt falsch platzieren, können Sie den Punkt verschieben in dem Sie die linke Maustaste über dem Punkt gedrückt halten während Sie die Maus bewegen. Wenn Sie den Punkt löschen möchten klicken Sie mit der linken Maustaste auf den Punkt, aktivieren dann mit der rechten Maustaste das Kontextmenü und klicken schließlich auf das Icon, das wie ein Mülleimer aussieht. ![PointToolDelete][]{: height="24px"}  
Ein "Punkt", der mit dem iD-Editor erstellt wurde, ist eigentlich ein alleinstehender "Knoten" mit einer Reihe von "tags" auf ihm.  

### Zeichnen von Linien  

Um eine neue Linie hinzuzufügen, klicken Sie auf die Schaltfläche Linie. ![image4][]{: height="24px"}  

- Ihr Mauszeiger wird sich in ein Pluszeichen (+) verwandeln. Finden Sie eine Straße, die noch nicht auf der Karte eingezeichnet wurde und zeichnen Sie sie ein. Klicken Sie einmal auf den Punkt, bei dem der Straßenabschnitt beginnt, bewegen Sie Ihre Maus, und klicken Sie erneut, um weitere Punkte hinzuzufügen. Doppelklicken Sie, um den Zeichenprozess zu beenden. Beachten Sie die Bedienoberfläche links.  
![image24][]  
- Genau wie bei Punkten wählen Sie die entsprechenden Attribute für Ihre Linie aus.  
- Sie können Punkte der Linie bewegen, indem Sie Ihre linke Maustaste drücken und den Punkt verschieben.  
- Wenn Sie mit der linken Maustaste auf einen einzelnen Punkt (Knoten) der Linie klicken und dann mit einem rechten Mausklick oder mit der Leertaste das Kontextmenü aktivieren, sehen Sie diese Werkzeuge:  
  - Die Linie an diesem Punkt fortsetzen ![PointToolContinue][]{: height="24px"}  
  - Linien an diesem Punkt auftrennen ![PointToolDisconnect][]{: height="24px"}  
  - Die Linie am ausgewählten Punkt in zwei Teile teilen. ![PointToolSplit][]{: height="24px"}  
  - Punkt von Linie entfernen ![PointToolDelete][]{: height="24px"}  
- Wenn Sie mit der linken Maustaste auf eine Linie klicken (und nicht auf einen Punkt), dann sehen Sie folgende Werkzeuge:  
  - Kreis aus einer Linie erstellen (nur auswählbar, wenn die Linie geschlossen ist) ![LineToolCircularize][]{: height="24px"}  
  -   Die Linie von anderen Objekten trennen ![LineToolDisconnect][]{: height="24px"}  
  - Linie bewegen ![LineToolMove][]{: height="24px"}  
  -   Kanten rechtwinklig ausrichten ![LineToolSquare][]{: height="24px"}  
  -   Die Linie an der kurzen Achse spiegeln ![LineToolReflectShort][]{: height="24px"}  
  -   Die Linie an der langen Achse spiegeln ![LineToolReflectLong][]{: height="24px"}  
  - Linienrichtung umdrehen (nützlich für Flüsse und Einbahnstraßen) ![LineToolReverse][]{: height="24px"}  
  -   Die Linie um ihren Mittelpunkt drehen ![LineToolRotate][]{: height="24px"}  
  -   Die Linie geradeziehen ![LineToolStraighten][]{: height="24px"}  
  -   Die Linie löschen. ![LineToolDelete][]{: height="24px"}  

Eine "Linie" im iD-Editor ist eigentlich ein "Weg" mit "tags", also Attributen.

> Ein Extrahinweis zum **Löschen**: Normalerweise sollten Sie das Löschen der Kartenbeiträge anderer vermeiden, wenn sie lediglich verbessert werden müssen. Sie können Ihre eigenen Fehler löschen, aber Sie sollten versuchen, die kartierten Objekte anderer *anzupassen*, wenn das nötig ist. Dies sichert die Geschichte von Gegenständen in der OSM-Datenbank und respektiert andere Kartierer. Wenn Sie wirklich der Auffassung sind, dass etwas gelöscht werden sollte, erwägen Sie, zuerst die Person zu kontaktieren oder auf einer der OSM Mailinglisten nachzufragen.

### Zeichnen von Flächen (Polygonen)

Um eine Fläche zu zeichnen, klicken Sie auf **Fläche**. ![image34][]{: height="24px"}  

- Ihr Mauszeiger wird sich in ein Plus (+) verwandeln. Versuchen Sie zunächst, mithilfe der Bilder ein Gebäude einzuzeichnen.  
- Sie werden feststellen, dass sich die Farbe der Fläche in Abhängigkeit der von Ihnen gewählten Attribute verändern wird.   
![image35][]  
- Die Werkzeuge, die Ihnen nach dem Auswählen des Polygons und Aktivieren des Kontextmenüs mit der rechten Maustaste zur Verfügung stehen, sind ähnlich zu denen im Kontextmenü einer Linie.  

Ein "Polygon" im iD-Editor ist eigentlich ein "geschlossener Weg" mit Attributen.

### Zeichnen von Multipolygonen

Manchmal müssen Sie ein Polygon zeichnen, das nicht nur eine äußere Kontur sondern auch eine oder mehrere innere Konturen besitzt. Denken Sie nur an Gebäude mit Innenhöfen oder Seen mit Inseln. *Zeichnen Sie nicht alle diese Konturen in einem Linienzug* so dass die inneren Konturen wie mit einem Faden an der äußeren Kontur aufgehängt sind. Zeichnen Sie alle Konturen bitte einzeln, weisen Attribute nur der äußeren Kontur zu, wählen alle Konturen aus und drücken **c** um sie zu einem sogenannten Multipolygon  zusammenzufassen.

![create multipolygon][]

Wenn Sie eine der Konturen des neu erzeugten Multipolygons auswählen, sehen Sie links, zu welchem Multipolygon sie gehört.

![part of multipolygon][]

## Probleme

Der Editor führt eine Reihe von Prüfungen aus sobald sie etwas bearbeiten. Wenn die Prüfungen ergeben, dass es zu Problemen kommen kann, werden sie auf dem entsprechenden Fenster benachrichtigt. Sobald das Icon auf der rechten Seite einen gelben (Warnungen) oder roten (Fehler) Punkt aufweist, sollten Sie das Fenster öffnen und nachsehen worin das Problem besteht. Diese Information findet sich auch im Bearbeitungsfeld für Objekte auf der linken Seite wenn das entsprechende Objekt ausgewählt ist. Sie werden auch auf unerledigte Probleme hingewiesen sobald Sie Ihre Daten hochladen. 

![Issue][] ![Error][]

Im unteren Teil des Problemfensters sehen Sie die verfügbaren Prüfungen und können Sie einzeln abwählen. Davon raten wir aber ab.

Änderungen Speichern
--------------------

Wenn Sie Ihre Bearbeitungen in OpenStreetMap speichern wollen, klicken Sie auf **Speichern**. Die linke Bedienoberfläche zeigt den Änderungsdialog an.   
![image36][]  

- Verfassen Sie einen Kommentar über Ihre Änderungen und klicken Sie auf **Speichern**.  

> Wenn Sie zur selben Zeit wie jemand Anderes das gleiche Objekt (Punkt, Weg oder Fläche) bearbeitet haben, erscheint eine Warnung, dass Ihre Bearbeitungen erst hochgeladen werden können, wenn Sie die **Konflikte** gelöst haben - Sie müssen sich entscheiden, wessen Bearbeitungen Sie beibehalten möchten und können dann erneut hochladen. Konfliktlösung beinhaltet oft, dass man die Bearbeitungen des Kollegen übernimmt. In diesem Fall möchten Sie vermutlich gleich danach das Objekt erneut bearbeiten (**dabei sollten Sie aber gleich danach hochladen um nicht wieder einen Konflikt zu riskieren!**).

Zusätzliche Informationen und benutzerdefinierte Tags
---------------------------------------

Wenn Sie ein Objekt bearbeiten, werden Sie ein Menü sehen, wenn Sie neben “Feld hinzufügen” klicken. Sie können zusätzliche Informationen hinzufügen, indem Sie einen der Einträge (Ebene, Höhe, Wikipedia, ...) auswählen.  

![AdditionalTags][]

Oder fügen Sie benutzerdefinierte Attribute hinzu, indem Sie auf **Alle Eigenschaften** klicken. ![image44][]{: height="24px"}  

- Dies wird alle Attribute, die dem Objekt zugeordnet sind, anzeigen.  
![image45][]  
- Klicken Sie auf Plus (+), um Attribute und Werte hinzuzufügen oder zu entfernen.

Weitere Anleitungen
------------------

Auf unserer [Übersicht über externe Ressourcen](/de/resources/#iD) finden Sie eine Reihe von Video-Tutorials aus verschiedenen Quellen, allerdings meist auf Englisch.

iD versus JOSM
---------------  

**iD ist geeignet, ...**

- wenn Sie einfache Bearbeitungen vornehmen  
- wenn schnelles Internet zur Verfügung steht, um Bilder zu laden und Bearbeitungen zu speichern  
- wenn Sie sicherstellen wollen, dass Sie einem einheitlichen und einfachen Tagging-Schema folgen  
- wenn Sie kein Programm auf dem Rechner installieren können/dürfen

**JOSM ist besser geeignet, ...**

- wenn Sie viele Gebäude hinzufügen (das Gebäude-Tool in JOSM ist dafür am besten)
- wenn Sie viele bereits existierende Polygone und Linien bearbeiten
- wenn die Internetverbindung instabil ist oder Sie offline sind
- wenn Sie ein spezielles Tagging-Schema (oder benutzerdefinierte Festeinstellungen) verwenden

[^fieldpaper]: Es gibt ein [Dokument in LearnOSM](/de/mobile-mapping/field-papers/) mit näheren Informationen über Field Paper.



[image1]: /images/beginner/id-editor_image1.de.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.de.png
[image4]: /images/beginner/id-editor_image4.de.png
[image5]: /images/beginner/id-editor_image5.de.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.de.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.de.png
[DisplayOptions]: /images/beginner/id-editor_display-options.de.png
[image17]: /images/beginner/id-editor_image17.de.png
[image18]: /images/beginner/id-editor_image18.de.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.de.png
[image22]: /images/beginner/id-editor_image22.de.png
[image24]: /images/beginner/id-editor_image24.de.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.de.png
[Issue]: /images/beginner/id-editor_issue.de.png
[Error]: /images/beginner/id-editor_error.de.png
[image36]: /images/beginner/id-editor_image36.de.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.de.png
[image44]: /images/beginner/id-editor_image44.de.png
[image45]: /images/beginner/id-editor_image45.de.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png
