---
layout: doc
title: Erste Schritte beim Editieren mit JOSM
permalink: /de/josm/start-josm/
lang: de
category: josm
published: true
---

Erste Schritte beim Editieren mit JOSM
=============================  

> Geprüft 2015-07-12  

In diesem Kapitel werden wir Schritt für Schritt lernen, wie man JOSM, den Java OpenStreetmap Editor, herunterlädt und installiert. Damit die Benutzung einfacher wird, werden wir ein paar Enstellungen verändern. Anschließend werden wir eine Beispielkarte öffnen, und einige der grundlegenden Arbeitsschritte der Software lernen.
Erinnern Sie sich an das erste Kapitel, 
in dem Sie eine Karte Ihres Wohnortes zeichnen sollten?
Wir werden dieses Kapitel abschließen indem wir die Karte noch einmal zeichnen, 
dieses Mal allerdings digital. Danach sollten Sie ein gutes Verständnis davon haben, 
wie man in JOSM Karten erstellt.

JOSM herunterladen
-------------

- Wenn Sie bereits eine Version von JOSM auf CD oder einem USB-Stick haben,
  können Sie direkt zu Schritt 2, “JOSM Installieren” springen.
- Wenn Sie JOSM noch nicht haben oder die aktuellste Version haben möchten, 
  öffnen Sie Ihren Browser.
   
- Geben SIe in der Adresszeile folgenden Link ein
  [josm.openstreetmap.de](http://josm.openstreetmap.de)
- Sie können die Seite auch finden, indem Sie einfach nach “JOSM” suchen.
Die Webseite sollte dann in etwa so aussehen:

  ![JOSM website][]

- Falls Sie Windows auf Ihrem Computer installiert haben, klicken Sie auf “Windows Installer” um JOSM herunterzuladen.

  ![Windows installer][]

- Wenn Sie ein anderes Betriebssystem benutzen,
  klicken Sie auf den entsprechenden Link für Ihr System.
  Die Datei sollte dann automatisch heruntergeladen werden. In diesem Kapitel werden wir davon ausgehen, dass Sie Windows benutzen, 
  aber die Vorgehensweise ist für andere Betriebssysteme ähnlich.

JOSM installieren
------------

> Es kann sein, dass Sie bei der Installation von JOSM Probleme haben, falls Java noch nicht auf Ihrem Computer installiert ist. 
> Sollte das der Fall sein, 
> versuchen Sie Java herunterzuladen und zu installieren: 
>  [http://www.java.com/de/download/](http://www.java.com/de/download/)

>  Mac-Anwender haben evtl. alte Java-Versionen installiert. Nähere Hinweise finden Sie unter [http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation](http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation) in englischer Sprache zu OSX 10.6 und 10.7.3+

- Doppelklicken Sie auf die JOSM-Installationsdatei 
  um die Installation zu starten.
- Klicken Sie auf “OK”, “Weiter”, “Annehmen”, “Weiter” und “Installieren”. 
  Wenn die Installation abgeschlossen ist, klicken Sie auf “Weiter” und “Fertig stellen”, um JOSM das erste Mal zu starten. 
  Wenn Sie später JOSM starten wollen, klicken Sie auf das 
  Startmenü in der unteren linken Ecke Ihres Desktops
  und dort auf JOSM.
- Möglicherweise werden Sie gefragt, ob Sie JOSM aktualisieren wollen.
  Das ist nicht notwendig, Sie haben das Programm ja gerade erst heruntergeladen.
  Drücken Sie also auf "Cancel".
  Falls Sie diese Nachricht nicht mehr sehen wollen, aktivieren Sie das Auswahlfeld im unteren Teil des Fensters.
- 

  ![JOSM splash page][]

JOSM-Einstellungen ändern
--------------------

JOSM bietet viele Möglichkeiten zur Konfiguration 
Sie werden wahrscheinlich die Sprache der Benutzerführung ändern wollen.
JOSM wurde in viele Sprachen übersetzt, Sie können also
in einer Ihnen vertrauten arbeiten.

- Um das Fenster mit den Einstellungen zu öffnen, klicken Sie auf Bearbeiten -\> Einstellungen

  ![Preferences window][]

- Klicken Sie auf der linken Seite auf das Symbol, das wie Farbeimer und 
  -bürste aussieht.
- Klicken Sie oben auf den Reiter "Verhalten und Aussehen"
- Wählen Sie Ihre Sprache im Klappmenü neben dem Begriff
  "Sprache".
  
  ![Look and feel][]

- Klicken Sie auf OK.
- Sie müssen JOSM neu starten um Ihre Einstellungen abzuspeichern. Bestätigen Sie den folgenden Dialog mit
  "Neustart".

Einführung in das Zeichnen mit JOSM
-----------------------------

- 
  mit der wir die Grundlagen des Zeichnens in JOSM üben. 
  wir werden die Änderungen nicht bei 
  OpenStreetMap speichern.
- Laden Sie sich die Datei hier herunter: [sample.osm](/files/sample.osm)
- Öffnen Sie die Datei jetzt in JOSM.
  Klicken Sie auf "Öffnen" oben links im Menü.

  ![Open file][]

- Suchen Sie die Datei **sample.osm**. 
  Klicken Sie auf die Datei und dann auf "Öffnen".
- Sie sollten jetzt die Beispielkarte sehen, die wie folgt aussieht:

  ![Sample file][]

- Sie werden mit diesen Daten verschiedene Techniken zur Bearbeitung ausprobieren.
  *Sie dürfen aber diese fiktiven Daten niemals in die Datenbank hochladen.*

### Grundlegende Steuerung

- Um die Karte nach links und rechts, oben und unten zu bewegen, drücken Sie die rechte Maustaste 
  und halten sie gedrückt, während Sie die Maus bewegen.
- Es gibt mehrere Möglichkeiten, in der Karte zu zoomen.
  Wenn Sie eine Maus mit Scrollrad haben dann können Sie dieses drehen, 
  Wenn Sie einen Laptop benutzen können Sie stattdessen die Zoomleiste in der oberen linken Ecke des Fensters benutzen. 
  Klicken Sie auf den Schieber,
  halten Sie Ihre Maustaste gedrückt und bewegen Sie Ihre Maus nach 
  links oder rechts. Die Zoomleiste sieht folgendermaßen aus:

  ![Scale bar][]

- Auf der Beispielkarte sehen Sie verschiedene Arten von Objekten:
  Es gibt einen Fluss, einen Wald, einige Gebäude, einige Straßen sowie 
  ein paar Geschäfte. 
  klicken Sie es mit der linken Maustaste an.

### Punkte, Linien und Formen

- Sobald Sie die Objekte auf der Karte anklicken, werden Sie merken, dass es dort 
  drei verschiedene Arten von Objekten gibt: Punkte, 
  Linien und Formen.
- Punkte sind ein einzelner Ort dargestellt mit einem Symbol. Auf der Beispielkarte 
  gibt es zwei Punkte, ein Schuhgeschäft und einen Supermarkt. 
  Das Schuhgeschäft hat einen Schuh, der Supermarkt einen 
  Einkaufswagen als Symbol.
- Die Linien auf der Karte stellen Straßen dar. 
  Wenn Sie genau hinsehen, merken Sie, dass diese Linien 
  aus Punkten bestehen. Diese Punkte haben keine Symbole oder andere 
  Information gespeichert, aber sie helfen Ihnen festzulegen, 
  wie die Linie verläuft und wo sie platziert ist.
- Schließlich gibt es noch Formen auf der Karte, sie stellen 
  verschiedene Orte dar - einen Wald, einen Fluss, einen Park sowie Gebäude. Eine Form 
  beschreibt eine Fläche, etwa ein Feld oder ein Gebäude. Eine Form 
  gleicht einer Linie, nur mit dem Unterschied, dass die Linie an dem selben Punkt aufhört, 
  wo sie beginnt.

> Am einfachsten stellt man sich die Karte so vor, als ob Sie aus drei Grundbausteinen besteht - 
> Punkten, Linien und Formen. Sie sollten sich auch mit den englischen Begriffen für diese Objekte vertraut machen, da diese Ihnen früher oder später begegnen werden.
> Punkte werden
> **nodes** genannt, Linien sind **ways**. Eine Form ist ein **closed way**, also eine geschlossene Linie,
> da sie genau an dem Punkt aufhört, wo sie begonnen hat.

- Sobald Sie ein Objekt angeklickt haben, erscheint auf der rechten Seite des Fensters 
  eine Liste mit Eigenschaften (Englisch: tags)
  Diese Eigenschaften sind an Punkte, Linien und Grundrisse gebunden 
  und beschreiben sie. Wir werden später, mehr über diese Eigenschaften erfahren. 
  Im Moment reicht es, dass Sie wissen, 
  dass diese Eigenschaften die Punkte auf der Beispielkarte nach Wald, Fluss 
  und Gebäude usw. kategorisieren.
- Stellen Sie sich vor, Sie zeichnen eine Karte von Hand.
  Wie würden Sie Punkte, Linien und Grundrisse darstellen? Welche anderen Orte kann man gut mit 
  Punkten darstellen? Welche mit Linien oder Formen?

### Objekte verändern

- Markieren Sie den Wald auf der linken Seite der Karte, indem Sie seinen Rand anklicken. 
  Klicken Sie nicht auf die Punkte am Rand, sondern auf eine der Linien, die die Punkte am Rand verbinden. 
  Halten Sie jetzt Ihre linke Maustaste gedrückt und bewegen Sie Ihre Maus. 
  Sie sollten so den Wald auf der Karte verschieben können.
- Klicken Sie jetzt auf einen der Punkte auf dem Rand des Waldes. 
  Halten Sie Ihre linke Maustaste gedrückt und bewegen Sie Ihre Maus. 
  Sie können so den Punkt auf der Karte verschieben und somit die Form des Waldes verändern
  oder einzelne Punkte bewegen.

### Zeichnen

- Auf der linken Seite des JOSM Fensters befindet sich eine Spalte mit Schaltflächen. Viele dieser
  Knöpfe öffnen neue Fenster im rechten Bereich und liefern zusätzliche
  Informationen zur Karte. Die wichtigsten Knöpfe befinden sich
  oben in der Spalte. Damit steuern Sie, was Sie mit Ihrer 
  Maus beeinflussen.
- Die obersten Knöpfe dienen zum
  Auswählen und Zeichnen von Objekten.
- Bisher haben Sie nur das Auswählen-Werkzeug benutzt, welches 
  so aussieht:

  ![Select tool][]

- Bevor Sie anfangen zu Zeichnen, stellen Sie sicher, dass kein Objekt auf der Karte markiert ist. 
  Klicken Sie dazu einfach auf die schwarze Fläche auf der Karte, .
  dort befindet sich nichts
- Klicken Sie auf die zweite Schaltfläche, das Zeichnen-Werkzeug:

  ![Draw tool][]

- Doppelklicken Sie mit der Maus auf eine leere Stelle auf der Karte. 
  Damit erstellen Sie einen einzelnen Punkt.
Eine Linie zeichnen Sie, indem Sie einmal mit der Maus klicken, die Maus bewegen
   und erneut klicken. Wiederholen Sie dies solange, bis die Linie fertig ist, 
  dann klicken Sie doppelt.
- Um eine Form zu zeichnen verfahren Sie genau wie eben bei der Linie, aber klicken zum Schluss
   wieder auf den Punkt an dem die Linie anfängt.

### Vorlagen anwenden

- Jetzt wissen wir wie man Punkte, Linien und Formen zeichnet, aber 
  wir haben noch nicht festgelegt, was sie darstellen. Wir möchten unsere Punkte 
  zu Geschäften und Schulen, unsere 
  Formen zu Feldern, Gebäuden und anderen Objekten in der echten Welt machen.
- Aktivieren Sie das Auswählen-Werkzeug in der Spalte auf der linken Seite.

  ![Select tool][]

- Wählen Sie ein Objekt aus, das Sie soeben mit dem Zeichnen-Werkzeug erstellt haben. 
  Klicken Sie im Menü oben im Programm auf “Vorlagen”, navigieren Sie durch die Einträge in diesem Menü 
  um festzulegen, was dieses Objekt sein soll, z.B. Geschäfte -> Lebensmittel -> Supermarkt.
- Sobald Sie eine Vorlage gewählt haben öffnet sich ein Fenster, wo 
  Sie nach weiteren Informationen wie dem Namen des Objektes gefragt werden. Sie müssen nicht jedes Feld ausfüllen.
  aber einige wesentliche Daten wie der Name des Objekts sollten
  normalerweise angegeben werden.
- Wenn Sie fertig sind klicken 
  Sie auf “Vorlage anwenden”. Wenn Sie alles richtig gemacht haben, hat jetzt der Punkt, die Linie oder die Form ein anderes Symbol oder eine andere Farbe.
  Wir haben festgelegt, was das Objekt in der
  Wirklichkeit darstellt.

Zeichnen Sie Ihre eigene Karte
-----------------

- Zeichnen Sie jetzt eine eigene Karte, um die Techniken, die Sie hier 
  gelernt haben, weiter zu üben. Sie können beispielsweise die Karte erneut zeichnen, die Sie früher auf Papier gezeichnet haben.
- Ziehen Sie den Kartenausschnitt weg von den Beispielen. Halten Sie dazu die rechte Maustaste 
  gedrückt und ziehen Sie mit der Maus, bis Sie genug Platz zum Zeichnen haben.
- Verwenden Sie das Zeichnen-Werkzeug, um Punkte, Linien und Grundrisse zu zeichnen. Verwenden Sie 
  Vorlagen, um festzulegen, was die Objekte repräsentieren.
Wenn Sie fertig sind haben Sie Ihre erste selbst erstellte Karte, ähnlich der 
  Beispielkarte, die wir in der Datei sample.osm vorgefunden haben.

## Entfernen der Beispielebene

Sobald Sie mit diesen grundlegenden Techniken etwas vertraut sind, werden
Sie Ihre Kenntnisse zum Eintragen von realen Objekten anwenden wollen. 

*Es ist sehr wichtig, vorher zuerst die Ebene mit den Beispieldaten zu löschen. 
Diese Daten sind fiktiv und dürfen keinesfalls in die OpenStreetMap-Datenbank hochgeladen werden 
 (neuere JOSM-Versionen verhindern das automatisch).*

Selektieren Sie die sample.osm-Ebene im Ebenenfenster in der oberen rechten Ecke Ihres Bildschirms. 
Dann klicken Sie auf das Papierkorb-.Symbol in der unteren rechten Ecke dieses Fensters. 
Sie können auch Löschen aus dem Kontextmenü der Ebene verwenden. 
Um mit der Kartierung fortzufahren müssen Sie zuerst Daten herunterladen. 
Wie das geht erfahren Sie im nächsten Kapitel.

Zusammenfassung
-------

Hervorragend! Wenn alles gut gegangen ist haben Sie jetzt gelernt, den JOSM Editor auf einem Computer zu installieren, 
und wie man die Werkzeuge benutzt, um Karten zu zeichnen. Später werden wir
 noch einen eingehenderen Blick auf die Abläufe beimn Editieren von OpenStreetMap mit JOSM werfen.

[JOSM website]: /images/josm/josm-website.png
[Windows installer]: /images/josm/windows-installer.png
[JOSM splash page]: /images/josm/josm-splash-page.de.png
[Preferences window]: /images/josm/josm_preferences.de.png
[Look and feel]: /images/josm/josm_look-and-feel.png
[Open file]: /images/josm/josm_open-file.png
[Sample file]: /images/josm/josm_sample-file.de.png
[Scale bar]: /images/josm/josm_scale-bar.png
[Select tool]: /images/josm/josm_select-tool.png
[Draw tool]: /images/josm/josm_draw-tool.png