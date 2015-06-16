---
layout: doc
title: Erste Schritte beim Editieren
permalink: /de/josm/start-josm/
lang: de
category: josm
---

Erste Schritte beim Editieren mit JOSM
======================================

In diesem Kapitel werden wir Schritt für Schritt lernen, wie man JOSM, 
den Java OpenStreetmap Editor, herunterlädt und installiert. Damit die 
Benutzung einfacher wird, werden wir ein paar Enstellungen verändern. 
Anschließend werden wir eine Beispielkarte öffnen, und einige der 
grundlegenden Arbeitsschritte der Software lernen. Erinnerst du dich 
an das erste Kapitel, in dem du eine Karte deines Wohnortes zeichnen 
solltest? Wir werden dieses Kapitel abschließen indem wir die Karte 
noch einmal zeichnen, dieses Mal allerdings digital. Hiernach solltest 
du ein gutes Verständnis davon haben, wie man in JOSM Karten erstellt.

JOSM Herunterladen
------------------

- Wenn du bereits eine Version von JOSM auf CD oder einem USB-Stick 
  hast, kannst du direkt zu Schritt 2, "JOSM Installieren" springen.
- Wenn du JOSM noch nicht hast, oder die aktuellste Version haben 
  möchtest, öffne deinen Browser - dies könnte Firefox, Chrome, Opera 
  oder Internet Explorer sein.
- Gebe am oberen Rand des Fensters in der Adresszeile folgenden Link 
  ein und drücke Enter: [josm.openstreetmap.de](http://josm.openstreetmap.de)
- Du kannst die Seite auch finden, indem du einfach nach "JOSM" suchst.
- Die Webseite sollte dann in etwa so aussehen:

  ![JOSM website][]

- Falls du Windows auf deinem Computer installiert hast, klicke auf 
  "Windows Installer", um JOSM herunterzuladen. 

  ![Windows installer][]

Wenn du ein anderes 
  Betriebssystem benutzt, klicke auf den entsprechenden Link für dein 
  System. Die Datei sollte dann automatisch heruntergeladen werden. In 
  diesem Kapitel werden wir davon ausgehen, dass du Windows benutzt, 
  aber die Vorgehensweise ist für andere Betriebssysteme ähnlich.

JOSM Installieren
-----------------

- Es kann sein, dass du bei der Installation von JOSM Probleme hast, 
  falls Java noch nicht auf deinem Computer installiert ist. Sollte das 
  der Fall sein, versuche Java herunterzuladen und zu installieren:
  [http://www.java.com/de/download/](http://www.java.com/de/download/)
- Suche die JOSM-Installationsdatei und doppelklicke sie, um die 
  Installation zu starten.
- Klicke "OK", "Weiter", "Annehmen", "Weiter" und "Installieren". Wenn 
  die Installation abgeschlossen ist, klicke "Weiter" und "Fertig 
  stellen", um JOSM das erste Mal zu starten. Wenn du später JOSM 
  starten willst, klicke auf das Startmenu in der unteren linken 
  Ecke deines Desktops, und anschließend auf das Programm JOSM.
- Möglicherweise siehst du ein Fenster, welches fragt, ob du JOSM 
  aktualisieren willst. Da die Software neu ist, ist dieses nicht 
  notwendig. Klicke daher auf 'Aktualisierung überspringen'. Falls du 
  diese Nachricht nicht mehr sehen willst, aktiviere das Auswahlfeld 
  im unteren Teil des Fensters.
- Wenn JOSM gestartet ist, wird es in etwa so aussehen:

  ![JOSM splash page][]

JOSM Einstellungen ändern
-------------------------

Bevor wir Anfangen, JOSM zu benutzen, ist es sinnvoll ein paar 
Einstellungen zu ändern, damit es einfacher zu benutzen wird. Klicke 
dafür im oberen Menu auf "Bearbeiten" und anschließend auf "Einstellungen".

  ![Preferences window][]

### Bing Sat hinzufügen

- Wir möchten die Möglichkeit haben, Satellitenbilder zu nutzen, um 
  unsere Karten zu erstellen. Auf der linken Seite des 
  Einstellungen-Fensters sind verschiedene Symbole für diverse 
  Einstellungen. Klicke nun auf das Symbol, welches mit "WMS TMS" 
  beschriftet ist. Möglicherweise musst du auf den Pfeil nach unten 
  klicken, um das Symbol zu finden:
  
  ![WMS_TMS][]
  
  ![josm down][]

- Klicke nun auf on "Bing Sat". Dann klicke auf "Aktivieren".

  ![JOSM_TMS][]

- Nun sollte "Bing Sat" in der Liste unter der Aktivieren-Schaltfläche 
  erschienen sein.

### Vorlagen hinzufügen

- Solltest du eine Datei haben welche zum Vorlagen-Menu hinzugefügt 
  werden soll, kannst du diese nun hinzufügen. Eine solche Datei könnte 
  zum Beispiel buildings.xml heißen.
- Solltest du das Einstellungen-Fenster nicht mehr geöffnet haben, 
  klicke erneut auf "Bearbeiten" und anschließend auf "Einstellungen" 
  um das Fenster erneut zu öffnen.
- Klicke nun auf der linken Seite auf das Symbol, welches wie ein Raster 
  aussieht:

  ![josm grid][]

- Klicke in der oberen Leiste nun auf den Reiter "Objektvorlagen".
- Klicke die "+" Schaltfläche oben rechts.
- Klicke nun auf das Ordnersymbol rechts neben dem zweiten Eingabefeld. 
  Navigiere zur Vorlagendatei, welche du hinzufügen willst, zum 
  Beispiel buildings.xml.
- Klicke OK.

### Field Papers Erweiterung hinzufügen

- Später werden wir in dieser Anleitung etwas über das Field Papers 
  Werkzeug erfahren, welches uns erlaubt, einen Kartenausschnitt 
  auszudrucken, darauf zu zeichnen und Notizen zu machen und es 
  anschließend in JOSM als Hintergrund zu laden. Dann können wir unsere 
  Zeichnungen und Notizen in OpenStreetMap hinzufügen. Nun werden wir 
  zunächst die Field Papers Erweiterung zu JOSM hinzufügen.
- Solltest du das Einstellungen-Fenster nicht mehr geöffnet haben, 
  klicke erneut auf "Bearbeiten" und anschließend auf "Einstellungen" 
  um das Fenster erneut zu öffnen.
- Klicke nun auf der linken Seite auf das Symbol, welches wie ein 
  Stecker aussieht:

![josm plug][]

- Klicke nun auf die Schaltfläche "Liste herunterladen". Nun wird eine 
  Liste mit optionalen Erweiterungen aus dem Internet geladen, welche 
  nach kurzer Zeit erscheint.
- Gebe nun in der Suchleiste im oberen Teil des Fensters "field" ein. 
  Daraufhin werden nur noch die Elemente der Liste angezeigt, welche 
  das Wort "field" im Titel haben.
- Klicke nun in das Auswahlkästchen neben der fieldgpapers-Erweiterung 
  und klicke OK im unteren Teil des Fensters.
- Die Erweiterung wird nun heruntergeladen und installiert. Klicke 
  nicht auf "Abbrechen".

### Sprache einstellen

- JOSM wurde bereits in eine Vielzahl von Sprachen übersetzt. Wenn JOSM
  schon in deine Sprache übersetzt wurde, kannst du diese in den 
  Einstellungen aktivieren.
- Öffne das Einstellungen-Fenster über Bearbeiten -\> Einstellungen,
  wenn du es noch nicht geöffnet hast.
- Klicke auf der linken Seite auf das oberste Symbol, es sieht aus wie
  ein Pinsel mit einem Topf Farbe.
- Klicke jetzt im rechten Teil des Fensters auf den Reiter "Verhalten
  und Aussehen".
- Wähle deine Sprache im Auswahlfeld neben dem Wort "Sprache".
- Klicke OK.
  
  ![prefer speech][]

- Du musst den JOSM Editor neu starten, damit diese Einstellung 
  gespeichert wird. Klicke dazu auf das Menü "Datei" in der linken 
  oberen Ecke, dann wähle "Beenden" am unteren Ende des Menüs.
- Starte den JOSM Editor erneut indem du das Windows Start Menü in 
  der linken unteren Ecke des Bildschirm öffnest. Gib "JOSM" in die 
  Suche ein oder wähle es über "Alle Programme" aus.

Einführung in das Zeichnen mit JOSM
-----------------------------------

- In einem ersten Schritt werden wir eine OSM Beispielkarte laden, mit 
  der wir die Grundlagen des Zeichnens in JOSM üben. Diese karte dient
  lediglich Übungszwecken und zeigt keinen echten Ort, wir werden die 
  Änderungen nicht bei OpenStreetMap speichern.
- Wenn dir dein Lehrer die Dateien bereits gegeben hat, dann solltest
  du die Datei sample.osm bereits haben.
- Wenn du die sample.osm Datei noch nicht auf deinem Computer hast 
  kannst du sie hier herunterladen: [sample.osm](/files/sample.osm).
- Klicke mit der rechten Maustaste auf die Datei namens "sample.osm"
  und klicke auf "Link speichern unter...". Wähle einen Ordner auf 
  deinem Computer aus, wo die Datei gespeichert werden soll.
- Öffne die Datei jetzt in JOSM. Öffne JOSM, klicke dann auf die 
  "Öffnen" Schaltfläche links oben. Die Schaltfläche sieht so aus:

![josm-blue-folder][]

- Suche die Datei sample.osm, klicke sie mit der linken Maustaste an
  und dann klicke auf die Schaltfläche "Öffnen".
- Du solltest jetzt die Beispielkarte sehen, die wie folgt aussieht:

  ![Sample file][]

### Grundlegende Steuerung

- Um die Karte nach links und rechts, oben und unten zu bewegen, drücke
  die rechte Maustaste und halte sie gedrückt, während du die Maus
  bewegst.
- Es gib mehrere Wege, die Karte zu vergrößeren und zu verkleinern.
  Wenn du eine Maus mit Scrollrad hast, dann kannst du dieses drehen, 
  um die Karte zu vergrößern und zu verkleinern. Wenn du einen Laptop
  benutzt kannst du stattdessen die Zoomleiste in der oberen linken 
  Ecke des Fensters benutzen. Klicke auf den Schieber und halte deine
  Maustaste gedrückt und bewege deine Maus nach links oder rechts.
  Die Zoomleiste sieht folgendermaßen aus:

  ![Scale bar][]

- Sieh dir die Beispielkarte an, es gibt dort verschiedene Objekte. Es
  gibt einen Fluss, einen Wald, einige Gebäude, einige Straßen sowie
  ein paar Geschäfte. Um ein Objekt auszuwählen, klickst du es mit 
  deiner linken Maustaste an.

### Punkte, Linien und Grundrisse

- Sobald du die Objekte auf der Karte anklickst wirst du merken, dass 
  es dort verschiedene Arten von Objekten gibt: Punkte, Linien und 
  Grundrisse.

  ![Line point area][]

- Punkte sind ein eizelner Ort dargestellt mit einem Symbol. Auf der 
  Beispielkarte gibt es zwei Punkte, ein Modegeschäft und einen Markt.
  Das Modegeschäft hat ein Tshirt, der Markt einen Einkaufwagen als 
  Symbol.
- Die Linien auf der Karte stellen Straßen dar. Wenn du genau hinsiehst
  merkst du, dass diese Linien aus Punkten bestehen. Diese Punkte haben
  keine Symbole oder andere Information gespeichert, aber sie helfen
  dir festzulegen, wie die Linie verläuft und wo sie platziert ist.
- Schließlich gibt es noch Grundrisse auf der Karte, sie stellen
  verschiedene Orte dar - einen Wald, einen Fluss sowie Gebäude. Ein
  Grundriss repräsentiert grundsätzlich ein Gebiet, wie ein Feld oder
  ein Gebäude. Ein Grundriss gleicht einer Linie, nur mit dem 
  Unterschied, dass die Linie an dem selben Punkt aufhört, wo sie 
  beginnt.
- Sobald du ein Objekt angeklickt hast erscheint auf der rechten Seite
  des Fensters eine Liste mit Eigenschaften (Englisch: tags). Diese 
  Eigenschaften sind an Punkte, Linien und Grundrisse gebunden und 
  beschreiben sie. Wir werden später, in Kapitel 7, mehr über diese
  Eigenschaften erfahren. Im Moment reicht es, dass du weißt, dass 
  diese Eigenschaften die Punkte auf der Beispielkarte nach Wald,
  Fluss und Gebäude kategorisieren.

  ![josm tags][]

- Stelle dir vor du zeichnest eine Karte von Hand, wie würdest du 
  Punkte, Linien und Grundrisse darstellen? Welche anderen Orte
  kann man gut mit Punkten darstellen? Linien? Grundrisse?

### Objekte verändern

- Markiere den Wald auf der linken Seite der Karte, indem du seinen
  Rand anklickst. Klicke nicht auf die Punkte am Rand, sondern auf eine
  der Linien, die die Punkte am Rand verbinden. Halte jetzt deine linke
  Maustaste gedrückt und bewege deine Maus. Du kannst jetzt den Wald
  auf der Karte verschieben.
- Klicke jetzt auf einen der Punkte auf dem Rand des Waldes. Halte 
  deine linke Maustaste gedrück und bewege deine Maus. Du kannst jetzt
  den Punkt auf der Karte verschieben und somit die Form des Waldes
  verändern.

### Zeichnen

- Auf der linken Seite des JOSM Fensters befindet sich eine Spalte mit
  Schaltflächen. Mit den mittleren Knöpfen kannst du Einstellen, 
  welche Informationen auf der rechten Seite des JOSM Fensters angezeigt
  werden. Uns interessieren aber erstmal nur die obersten Schaltflächen,
  mit denen du einstellen kannst was passiert, wenn du auf die Karte
  klickst.
- Die obersten vier Schaltflächen in dieser Spalte sind die wichtigsten.
  Damit stellst du ein was passiert, wenn du auf die Karte klickst:

  1.  Objekt Auswählen
  2.  Objekt Zeichnen
  3.  Karte vergrößern
  4.  Objekt Löschen

- Bisher hast du nur das Auswählen-Werkzeug benutzt, welches wie
  folgt aussieht:

  ![Select tool][]

- Bevor du mit dem Zeichnen anfängst stelle sicher, dass kein Objekt
  auf der Karte markiert ist. Klicke dazu einfach auf die schwarze
  Fläche auf der Karte, dort befindet sich nichts.
- Klicke auf die zweite Schaltfläche, mit der du das 
  Zeichnen-Werkzeug aktivierst:

  ![Draw tool][]

- Navigiere zu einer leeren Stelle auf der Karte und klicke doppelt
  mit deiner Maus. Damit erstellst du einen einzelnen Punkt.
- Eine Linie zeichnest du, indem du ein mal mit deiner Maus klickst,
  deine Maus bewegst und erneut klickst. Wiederhole dies so lange, bis
  die Linie fertig ist, dann klicke doppelt.
- Um einen Grundriss zu zeichnen verfährst du genau wie eben bei der 
  Linie, aber klickst zum Schluss wieder auf den Punkt, wo du deine
  Linie angefangen hast.

### Vorlagen hinzufügen

- Jetzt weißt du, wie man Punkte, Linien und Grundrisse zeichnet, aber
  wir haben noch nicht festgelegt, was sie darstellen. Wir möchten
  unsere Punkte zu Geschäften und Schulen, unsere Grundrisse zu Feldern,
  Gebäuden und anderen Objekten in der echten Welt machen.
- Aktiviere das Auswählen-Werkzeug in der Spalte auf der linken Seite.

  ![Select tool][]

- Wähle ein Objekt aus, das du soeben mit dem Zeichnen-Werkzeug 
  erstellt hast. Klicke im Menü oben im Programm auf "Vorlagen",
  navigiere durch die Einträge in diesem Menü um festzulegen,
  was dieses Objekt sein soll, z.B. Geschäfte -\> Lebensmittel -\> 
  Supermarkt.
- Sobald du eine Vorlage gewählt hast öffnet sich ein Fenster, wo du
  nach weiteren Informationen wie dem Namen des Objektes gefragt wirst.
  Du musst nicht jedes Feld ausfüllen.
- Wenn du fertig bist klicke auf "Vorlage anwenden". Wenn du alles 
  richtig gemach hast erscheint hat jetzt dein Punkt, deine Linie 
  oder dein Grundriss ein anderes Symbol oder eine andere Farbe. 

Zeichne deine eigene Karte
--------------------------

- Zeichne jetzt eine eigene Karte, um die Techniken, die du hier gelernt
  hast, weiter zu üben. Du kannst beispielsweise die Karte erneut
  zeichnen, die du in Kapitel 1 gezeichnet hast.
- Bewege dich auf der Beispielkarte, indem du die rechte Maustaste
  gedrückt hälst und die Maus bewegst. Navigiere an einen leeren Ort, 
  wo es noch keine Objekte gibt und du viel Platz hast zum Zeichnen.
- Verwende das Zeichnen-Werkzeug, um Punkte, Linien und Grundrisse
  zu zeichnen. Verwende Vorlagen, um festzulegen, was deine Objekte
  repräsentieren.
- Wenn du fertig bist hast du deine selbst erstellte Karte, ähnlich 
  der Beispielkarte, die wir in der Datei sample.osm vorgefunden haben.

Zusammenfassung
---------------

Hervorragend! Wenn alles gut gegangen ist hast du jetzt gelernt, wie 
du den JOSM Editor auf deinem Computer installierst, und, wie du die 
Werkzeuge benutzt um Karten zu zeichnen. Später wirst du noch den Umgang 
mit GPS-Geräten und "Field papers" lernen, 
was dir helfen wird, deinen Wohnort zu kartieren. Dann benutzen wir
die gesammelten Informationen, um Objekte auf OpenStreetMap einzutragen.


[JOSM website]: /images/josm/josm-website.png
[Windows installer]: /images/josm/windows-installer.png
[JOSM splash page]: /images/josm/josm-splash-page.de.png
[Preferences window]: /images/josm/josm_preferences.de.png
[josm down]: /images/josm/josm_down.png
[WMS_TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM_TMS]: /images/josm/josm_imagery.png
[josm grid]: /images/josm/josm_grid.png
[josm plug]: /images/josm/josm-plug-icon.png
[prefer speech]: /images/josm/start_josm_image01_de.png
[josm-blue-folder]: /images/josm/josm-blue-folder.png
[Sample file]: /images/josm/josm_sample-file.de.png
[Scale bar]: /images/josm/josm_scale-bar.png
[Line point area]: /images/josm/start_josm_image15.de.png
[josm tags]: /images/josm/josm_tags.de.png
[Select tool]: /images/josm/josm_select-tool.png
[Draw tool]: /images/josm/josm_draw-tool.png

