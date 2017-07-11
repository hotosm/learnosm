---
layout: doc
title: JOSM Gebäude Werkzeuge & Utilsplugin2 Plugins
permalink: /de/josm/josm-more-plugins/
lang: de
category: josm
---

JOSM Gebäude Werkzeuge & Utilsplugin2 Plugins
============

> Diese Anleitung kann heruntergeladen werden als [josm-more-plugins_en.odt](/files/josm-more-plugins_en.odt) oder [josm-more-plugins_en.pdf](/files/josm-more-plugins_en.pdf)  
> Reviewed 2016-09-12  

Die **buildings_tools** und *utilsplugin2* Plugins ergänzen JOSM um großartige Funktionen. In diesem Abschnitt schauen wir und die angebotenen Funktionen näher an.  

Das Gebäude Werkzeug Plugin
--------------------------

Falls man das Plugin noch nicht installiert hat, kann man es installieren nach folgender Anleitung in  [JOSM Plugins](/en/josm/josm-plugins).  

![Buildings tools plugin][]

Das Gebäude Werkzeug Plugin ist für die Digitalisierung von Gebäuden sehr nützlich. Es erlaubt einem eine Seite eines Gebäudes nach zu zeichnen und damit den Umriss zu erfassen. Wenn man mehrere Gebäude digitalisiert spart einem das Plugin Klicks und damit Zeit ein.  

Sobald das Plugin installiert ist, sieht man einen neuen Button auf der linken Seite von JOSM, der wie folgt aussieht: ![Buildings tools button][]{: height="29px"}

Man startet JOSM und lädt ein Gebiet herunter, in dem man Gebäude zeichnen möchte.  

* Man wählt das Gebäude Werkzeug und klickt doppelt, um eine Line auf der Karte zu zeichnen.  

![Draw edge][]

* Dann bewegt man die Maus und klickt nochmals, um ein Rechteck zu zeichnen.  

![Extend building][]

* Dies erzeugt nicht nur ein Rechteck mit nur 3 Klicks, sonder ergänzt den Umriss automatisch mit dem **building=yes** Tag.  

### Komplexe Gebäude

Man kann auch komplizierte Gebäude erstellen, indem man zuerst mehrere überlappende Gebäude zeichnet und diese dann zusammenfügt.  

* Man zeichnet zwei überlappende Gebäude, so dass diese einen L Umriss formen.  
* Man selektiert beide Gebäude (man drückt SHIFT um mehrere Gebäude zu selektieren).  
* Man geht zu Werkzeuge->Überlappende Flächen verbinden oder drückt SHIFT+J auf der Tastatur.  

![Merge buildings][]

### Einstellungen bearbeiten

Man kann des Weiteren die Standardeinstellungen des Plugin ändern.  

* Man geht zu Daten->Gebäudegröße setzen. ![Set buildings size][]{: height="39px"}  

* Falls man viele Gebäude ähnlicher Größe erstellt, kann man spezifische Höhen- und Breitenmaße  des Gebäudes angeben, wie z.B. 6 x 10 Meter (die Einheit ist in Meter).  

![Set buildings size dialog][]

* Indem man die Maße angibt, braucht man nur zwei Klicks, um ein präzise ausgemessenes Gebäude zu erstellen.  

Zuletzt kann man auf den Erweitert Button klicken, falls man zusätzliche Tags automatisch einem jeden Gebäude hinzufügen möchte. Falls zum Beispiel jedes Gebäude das man zeichnet in der gleichen Straße ist, kann man ein Tag hinzufügen, dass die Straße automatisch angibt.  

![Buildings advanced][]


Utilsplugin2
-------------

Wenn nicht bereits passiert, installiert man das Plugin entsprechend der folgenden Anleitung in  [JOSM Plugins](/de/josm/josm-plugins).  

![Utilsplugin2 plugin][]

Nachdem man das Plugin installiert und JOSM neu gestartet hat, besitzt man oben im Fenster ein neues Menü  namens "Weitere Werkzeuge".  

![More tools menu][]

Man erstellt einen neuen Layer und experimentiert mit einigen der neuen Werkzeuge. Wir beschreiben hier einige der nützlichsten neuen Werkzeuge:  

1. **Nodes bei Überschneidungen hinzufügen:** Dieses Werkzeug ist sehr nützlich, um fehlende Nodes bei Überschneidungen von Wegen hinzuzufügen. Es ist guter Stil, dass Straßen an Überschneidungen einen gemeinsamen Node haben.  

    ![Nodes interesection][]

2. **Kopiere Tags aus vorheriger Selektion:** Diese Funktion erleichtert das Kopieren von Tags. Wenn man mehrere Objekte mit den gleichen Tags erstellen möchte, zeichnet man zuerst ein Objekt und fügt die Tags hinzu. Man klickt auf ein anderes Objekt und drückt Shift+R, um die Tags vom vorher selektierten Objekt zu kopieren. Dies funktioniert für alle Objekte mit Tags. Klickt man auf ein Objekt ohne Tags und möchte Tags auf ein weiteres Objekt ohne Tags kopieren, werden selbstverständlich keine Tags kopiert.  

    ![Copy tags][]

3. **Eine Quellen Tag hinzufügen:** Dieses Werkzeug vereinfacht es eine Quellenangabe als Tag hinzuzufügen. Es merkt sich die zuletzt verwendete Quelle und fügt es zu neuen Objekten hinzu. man kann Quellen mit nur einem Klick angeben.  

4. **Geometrie ersetzen:** Dieses Werkzeug ist ideal, wenn man ein schlecht gezeichnetes Objekt neu einzeichnen, aber die Historie, Attribut und ID des Objekts behalten möchte. Falls man ein kompliziert und im schlechten Stil gezeichnetes Gebäude findet, kann man anstatt jeden Node zu ändern, das Objekt neu einzeichnen, beide Objekte selektieren und "Geometrie ersetzen" wählen, um alle Informationen zu übernehmen.  

    ![Replace geometry][]


### Mehr Auswahl Werkzeuge

**Utilspluging2** bietet weitere Werkzeuge im "Auswahl" Menü. Man kann damit experimentieren.  

![Selection menu][]

Einer unserer liebsten Auswahl Werkzeuge ist **Nodes deselektieren:** Dieses Werkzeug deselektiert alle Nodes. Das kann nützlich sein, wenn mann mit der Maus ein Rechteck aufzieht, um viele Objekte zu markieren, aber die Nodes nicht selektiert haben möchte unter all den Linien und Umrisse.  

![Unselect nodes][]

Viel Glück!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png

