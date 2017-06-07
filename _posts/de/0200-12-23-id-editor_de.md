---
layout: doc
title: iD Editor
permalink: /de/beginner/id-editor/
lang: de
category: beginner
---

Der iD Editor
=============

> Diese Anleitung kann als [beginner_id-editor_de.odt](/files/beginner_id-editor_de.odt) oder als [beginner_id-editor_de.pdf](/files/beginner_id-editor_de.pdf) heruntergeladen werden.  
Überprüft 2016-03-30  

- TOC
{:toc}

Der iD-Editor ist der de-facto browserbasierte OpenStreetMap-Editor. iD ist schnell und einfach zu nutzen, und erlaubt das kartieren von mehreren Datenquellen wie Satelliten- und Luftbildern, GPS, Feldpapieren oder Mapillary.  

Der iD-Editor stellt eine gute Möglichkeit zum Bearbeiten dar, wenn Sie kleine und schnelle Änerungen vornehmen möchten und nicht die ganze Komplexität von JOSM benötigen. Dieses Kapitel zeigt die Grundlagen der Bearbeitung mit iD.   

Den iD Editor starten
----------------------

-⇥ Der iD-Editor benötigt eine aktive Verbindung zum Internet.  
-⇥ Öffnen Sie Ihren Webbrowser und navigieren Sie zu der OpenStreetMap-Website auf   
-⇥**Melden Sie sich an** mit Ihrem OpenStreetMap-Benutzerkonto  
-⇥Verschieben und vergrößern Sie die Karte zu dem Bereich, den Sie bearbeiten wollen. Sie können verschieben, indem Sie die linke Maustaste gedrückt halten und die Karte zum gewünschten Bereich ziehen.  
-⇥ Klicken Sie auf den kleinen Pfeil neben **Bearbeiten**. Dann klicken Sie auf **Bearbeiten mit iD (im Browser eingebetteter Editor)**.  

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
    Wiederherstellen, *Tastenkürzel* **Strg+y** ![image7][]{: height="24px"}  
    Speichern, *Tastenkürzel* **Strg+s** ![image8][]{: height="24px"}  
3. **Kartenbedienfeld:** Dieses Bedienfeld zeigt mehrere Konfigurationsmöglichkeiten:  
    Hineinzoomen, *Tastenkürzel* **+**  ![image9][]{: height="24px"}  
    Herauszoomen, *Tastenkürzel* **-** ![image10][]{: height="24px"}  
    Meinen Standort anzeigen ![image11][]{: height="24px"}  
    Hintergrundeinstellungen, *Tastenkürzel* **b** ![image12][]{: height="24px"}  
    Kartendaten, *Tastenkürzel* **f** ![Map Data][]{: height="24px"}  
    Hilfe, *Tastenkürzel* **h** ![image13][]{: height="24px"}  
4. **Informationsbedienfeld:** Dieses Bedienfeld zeigt mehrere Informationen, wie Maßstab, oder welche Nutzer zu diesem Bereich beigetragen haben.  

Hintergrund einstellen
--------------------------------

Klicken Sie auf **Hintergrundeinstellungen** oder benutzen Sie das *Tastenkürzel* **b**. ![image14][]{: height="24px"}  
![image15][]  
Sie können die **Helligkeit** in Abstufungen von 100%, 75%, 50% und 25% ändern, indem Sie auf eines dieser Kästchen klicken ![image16][]{: height="24px"}  
Sie können auch, je nach dem, welche Satelliten-/Luftbilder Sie benutzen möchten (standardmäßig sind Bing-Luftbilder eingestellt), den **Hintergrund ändern**.  

Sie können Ihre eigenen Kartenkacheln verwenden, indem Sie auf **Benutzerdefiniert** klicken. Wenn Sie beispielsweise **ein Field Paper** [^fieldpaper] einbetten möchten, klicken Sie auf **Benutzerdefiniert** klicken Sie auf das Vergrößerungsglas (Suche) um dieses Fenster zu öffnen:-  
![image17][]   
und geben Sie Ihre **Field-Paper-Snapshot-URL** ein, die ungefähr so aussehen müsste: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Um **GPS-Tracks von Ihrem Rechner anzuzeigen** (GPX-Format), ziehen Sie die GPX-Datei in den iD-Editor.  
Um **OpenStreetMap GPS-Tracks** einzuschalten klicken Sie auf das Kästchen. Im Bild unten werden GPS-Tracks in verschiedenen Farben angezeigt, die die Richtung der Reise anzeigen.  
![osm gps traces][]  
Falls ein [Luftbildversatz](/de/josm/aerial-imagery) existiert, können Sie **den Luftbildversatz korrigieren**, indem Sie auf **Ausrichtung korrigieren** klicken. ![image18][]  

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
- Falls Sie einen Fehler machen, z. B. wenn Sie den Punkt falsch platziert haben, können Sie ihn an eine andere Stelle verschieben, indem Sie die linke Maustaste über dem Punkt gedrückt halten. Wenn Sie den Punkt entfernen möchten, klicken Sie mit der linken Maustaste auf den Punkt und dann auf den Knopf, der wie ein Mülleimer aussieht. ![image23][]{: height="24px"}  
Ein "Punkt", der mit dem iD-Editor erstellt wurde, ist eigentlich ein alleinstehender "Knoten" mit einer Reihe von "tags" auf ihm.  

### Zeichnen von Linien  

Um eine neue Linie hinzuzufügen, klicken Sie auf die Schaltfläche Linie. ![image4][]{: height="24px"}  

- Ihr Mauszeiger wird sich in ein Pluszeichen (+) verwandeln. Finden Sie eine Straße, die noch nicht auf der Karte eingezeichnet wurde und zeichnen Sie sie ein. Klicken Sie einmal auf den Punkt, bei dem der Straßenabschnitt beginnt, bewegen Sie Ihre Maus, und klicken Sie erneut, um weitere Punkte hinzuzufügen. Doppelklicken Sie, um den Zeichenprozess zu beenden. Beachten Sie die Bedienoberfläche links.  
![image24][]  
- Genau wie bei Punkten wählen Sie die entsprechenden Attribute für Ihre Linie aus.  
- Sie können Punkte der Linie bewegen, indem Sie Ihre linke Maustaste drücken und den Punkt verschieben.  
- Sie können auch die ganze Linie bewegen, indem Sie sie auswählen und das **Bewegungswerkzeug** auswählen. Ziehen Sie anschließend die Linie zu einer neuen Position. ![image30][]{: height="24px"}  
- Wenn Sie Ihre linke Maustaste auf einem einzelnen Punkt (node) betätigen, werden Sie diese Werkzeuge sehen:  
- Punkt von Linie entfernen ![image23][]{: height="24px"}  
- Punkt von Linie trennen ![image26][]{: height="24px"}  
- Die Linie am ausgewählten Punkt in zwei Teile teilen. ![image27][]{: height="24px"}  
- Wenn Sie mit der linken Maustaste auf eine Linie klicken (und nicht auf einen Punkt), dann sehen Sie folgende Werkzeuge:  
- Linie entfernen ![image23][]{: height="24px"}  
- Kreis aus einer Linie erstellen (nur auswählbar, wenn die Linie geschlossen ist) ![image29][]{: height="24px"}  
- Linie bewegen ![image30][]{: height="24px"}  
- Ein Rechteck aus einer Linie erstellen (nur auswählbar, wenn die Linie geschlossen ist) ![image31][]{: height="24px"}  
- Linienrichtung umdrehen (nützlich für Flüsse und Einbahnstraßen) ![image32][]{: height="24px"}  

Eine "Linie" im iD-Editor ist eigentlich ein "Weg" mit "tags", also Attributen.

> Ein Extrahinweis zum **Löschen**: Normalerweise sollten Sie das Löschen der Kartenbeiträge anderer vermeiden, wenn sie lediglich verbessert werden müssen. Sie können Ihre eigenen Fehler löschen, aber Sie sollten versuchen, die kartierten Objekte anderer *anzupassen*, wenn das nötig ist. Dies sichert die Geschichte von Gegenständen in der OSM-Datenbank und respektiert andere Kartierer. Wenn Sie wirklich der Auffassung sind, dass etwas gelöscht werden sollte, erwägen Sie, zuerst die Person zu kontaktieren oder auf einer der OSM Mailinglisten nachzufragen.

### Zeichnen von Flächen (Polygonen)

Um eine Fläche zu zeichnen, klicken Sie auf **Fläche**. ![image34][]{: height="24px"}  

- Ihr Mauszeiger wird sich in ein Plus (+) verwandeln. Versuchen Sie zunächst, mithilfe der Bilder ein Gebäude einzuzeichnen.  
- Sie werden feststellen, dass sich die Farbe der Fläche in Abhängigkeit der von Ihnen gewählten Attribute verändern wird.   
![image35][]  
- Die Ihnen zur Verfügung stehenden Werkzeuge gleichen denen einer Linie, wenn Sie darauf klicken.  

Ein "Polygon" im iD-Editor ist eigentlich ein "geschlossener Weg" mit Attributen.

Änderungen Speichern
--------------------

Wenn Sie Ihre Bearbeitungen in OpenStreetMap speichern wollen, klicken Sie auf **Speichern**. Die linke Bedienoberfläche zeigt den Änderungsdialog an.   
![image36][]  

- Verfassen Sie einen Kommentar über Ihre Änderungen und klicken Sie auf **Speichern**.  

> Wenn Sie zur selben Zeit wie jemand Anderes das gleiche Objekt (Punkt, Weg oder Fläche) bearbeitet haben, erscheint eine Warnung, dass Ihre Bearbeitungen erst hochgeladen werden können, wenn Sie die **Konflikte** gelöst haben - Sie müssen sich entscheiden, wessen Bearbeitungen Sie beibehalten möchten und können dann erneut hochladen. Konfliktlösung beinhaltet oft, dass man die Bearbeitungen des Kollegen übernimmt. In diesem Fall möchten Sie vermutlich gleich danach das Objekt erneut bearbeiten (**dabei sollten Sie aber gleich danach hochladen um nicht wieder einen Konflikt zu riskieren!**).

Zusätzliche Informationen und benutzerdefinierte Tags
---------------------------------------

Wenn Sie ein Objekt bearbeiten, werden Sie eine Reihe von Zeichen sehen, wenn Sie neben “Feld hinzufügen” klicken. Sie können zusätzliche Informationen hinzufügen, indem Sie darauf klicken:

- Höhe über dem Meeresspiegel ![image37][]{: height="24px"}  
- Bemerkungen ![image38][]{: height="24px"}  
- Kontaktdaten / Telefonnummer ![image39][]{: height="24px"}  
- Quellenangabe ![image40][]{: height="24px"}  
- Webseite ![image41][]{: height="24px"}  
- Zugang für Gehbehinderte ![image42][]{: height="24px"}  
- Wikipedia link ![image43][]{: height="24px"}  

Oder fügen Sie benutzerdefinierte Attribute hinzu, indem Sie auf **Alle Eigenschaften** klicken. ![image44][]{: height="24px"}  

- Dies wird alle Attribute, die dem Objekt zugeordnet sind, anzeigen.  
![image45][]  
- Klicken Sie auf Plus (+), um Attribute und Werte hinzuzufügen oder zu entfernen.

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
[image2]: /images/beginner/id-editor_image2.de.png
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
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.de.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.de.png
[image18]: /images/beginner/id-editor_image18.de.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.de.png
[image22]: /images/beginner/id-editor_image22.de.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.de.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.de.png
[image36]: /images/beginner/id-editor_image36.de.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.depng
[image45]: /images/beginner/id-editor_image45.de.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png