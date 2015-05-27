---
layout: doc
title: JOSM Erweiterungen
permalink: /de/beginner/josm-plugins/
lang: de
category: beginner
---

JOSM Erweiterungen und Einstellungen
============================

Mit zunehmender Editiererfahrung fragst du dich vielleicht: "Wo kann ich
bloß weitere JOSM Funktionen finden, um meine Editiererfahrungen zu bereichern?"
JOSM bietet dir hierfür die Möglichkeit unzählige Erweiterungen zu installieren.
Bei Erweiterungen handelt es sich um zusätliche Software, die spezielle Aufgaben übernehmen.
Wenn du bis hierhin den Anleitungen gefolgt bist, hast du schon mehrere Erweiterungen installiert.
Im vorigen Kapitel hast du eine Erweiterung installiert, welche
es dir ermöglicht SDS (getrennte Datenspeicher) zu nutzen. Davor hast du eine 
Erweiterung zur Nutzung von Walking Papers installiert. Für JOSM sind viele unterschiedliche
Erweiterungen verfügbar und wir werden einige sinnvolle Erweiterungen in diesem Kapitel
beschreiben.

![plug]({{site.baseurl}}/images/plugins_html_m76fc73bd_en.png)

Immer wenn du eine neue Erweiterung installieren möchtest, klicke auf Bearbeiten --\> Einstellungen
und öffne den Reiter "Erweiterungen (Plugins)". Falls keine Liste mit verfügbaren 
Erweiterungen erscheint, klicke auf "Liste herunterladen". Jede Erweiterung lässt sich 
installieren, indem man die gewünschte/n Erweiterung/en auswählt und unten auf OK klickst.
Nach der Installation einer neuen Erweiterung muss JOSM jedes Mal neugestartet werden. JOSM
jedes Mal neuzustarten ist natürlich nervig. Glücklicherweise führt die erste Erweiterung
dazu das JOSM sich automatisch neustartet.

Empfohlene Erweiterung:

- [Restart]({{site.baseurl}}/de/beginner/josm-plugins/#restart) (fügt JOSM neustarten in das Datei-Menü ein)
- [Mirrored Download]({{site.baseurl}}/de/beginner/josm-plugins/#mirrored-download) (erlaubt das Herunterladen zusätzlicher OSM Daten)]
- [Direct Upload]({{site.baseurl}}/de/beginner/josm-plugins/#direct-upload) (erlaubt das Hochladen von eigenen GPS Daten)]
- [Editgpx]({{site.baseurl}}/de/beginner/josm-plugins/#edit-gpx) (erlaubt das Editieren von GPX Dateien)]
- [Print]({{site.baseurl}}/de/beginner/josm-plugins/#print) (ergänzt JOSM um eine Kartendruckfunktion)

Weiterhin empfehlen wir das Herunterladen folgender Erweiterungen, die in anderen Kapiteln
behandelt werden:

- Walking Papers
- Buildings\_tool
- Utilsplugin2

Restart
-------

![restart]({{site.baseurl}}/images/plugins_html_57cb1b84_en.png)

__Restart__ / Neustart hält dass, was es verspricht und erweitert das
Dateimenü um die Option JOSM neuzustarten. Dies ist eine große 
Zeitersparnis, wenn du häufig die Einstellungen veränderst. Allerdings
ist diese Erweiterung nicht aktiv bis du das erste Mal einen Neustart durchführst.
Nachdem du dies getan hast, taucht die Neustartoption im Dateimenü auf.

![]({{site.baseurl}}/images/plugins_html_m6d2d20a9_en.png)

Probier das doch einfach mal aus und beobachte, wie sich JOSM von alleine
neustartet.

Mirrored Download
-----------------

![]({{site.baseurl}}/images/plugins_html_m2c477766_en.png)

__Mirrored Download__ beschleunigt das Herunterladen - zum Editieren - von OSM-Daten.
Anstatt alle Daten vom zentralen OSM Server herunterzuladen, ermöglicht diese Erweiterung, das
Herunterladen von einem "Spiegel". Bei einem "Spiegel" handelt es sich um eine exakte Kopie der
Daten an einem besser und schneller erreichbaren Ort.

Ist diese Erweiterung erst einmal installiert und JOSM neugestartet, siehst du einen
neuen Eintrag "Vom OSM-Spiegel herunterladen..." im Dateimenü.

![]({{site.baseurl}}/images/plugins_html_1f3d8d84_en.png)

Das Herunterladen von Daten funktioniert nach dem gleichen Prinzip wie zuvor, aber 
um einiges schneller!

Direct Upload
-------------

![]({{site.baseurl}}/images/plugins_html_m37f530e4_en.png)

__DirectUpload__ lädt GPX-Spuren direkt auf OSM hoch (weitere Informationen sind im **Anhang** verfügbar).
Ist diese Erweiterung erst einmal installiert und JOSM neugestartet, siehst du einen
neuen Eintrag "GPS-Spuren hochladen" im Werkzeugmenü.

![]({{site.baseurl}}/images/plugins_html_m53ca88fd_en.png)

Klickst du auf "GPS-Spuren hochladen" erscheint das folgende Fenster:

![]({{site.baseurl}}/images/plugins_html_2e01a9a7_en.png)

Füge Stichwörter (durch Komma getrennt und ohne Leerzeichen), die deine GPS-Spuren beschreiben,
in das Feld \<\<Merkmale (mit Kommas getrennt)\>\> ein. Gib als nächstes eine Beschreibung deiner
Merkmale ein. Eine Auswahlliste ermöglicht es dir nun, früher genutzte Merkmale wieder zu verwenden.
Wähle nun im letzten Schritt, die Sichtbarkeit deiner GPS-Spuren aus. Insgesamt gibt es 4 verschiedene
Stufen von Privat bis Identifizierbar (eine Erläuterung der verschiedenen Stufen findest du im **Anhang**).

Klicke nun auf "GPS-Spur hochladen". Falls du noch nicht mit deinem OSM Benutzerkonto angemeldet bist,
musst du dies nun nachholen.

Sobald deine GPS-Spur erfolgreich hochgeladen wurde, bekommst du ein "OK" als Rückmeldung und der
"GPS-Spur hochladen" Knopf wird inaktiv. Weiterführende Informationen über diese Erweiterung und 
das Hochladen von GPS Daten sind im **Anhang** verfügbar. 

edit gpx
--------

![]({{site.baseurl}}/images/plugins_html_m1d1170b2_en.png)

**EditGpx** ermöglicht dir das Aufbereiten von GPX-Spuren, bevor du sie bei OSM hochlädst.
GPX-Spuren enthalten oftmals Abschnitte die du entfernen möchtest, dazu kannst du diese
Erweiterung benutzen. Sie entfernt Wegpunkte aus deiner GPX-Spur auf einem schnellen Wege und
erstellt anonyme Zeitstempel für deine GPX-Spur.

Ist diese Erweiterung erst einmal installiert und JOSM neugestartet, siehst du dieses neue Werkzeug
![]({{site.baseurl}}/images/plugins_html_42e55708_en.png) links in der Werkzeugleiste.

1. Öffne eine GPX Datei in JOSM({{site.baseurl}}/images/plugins_html_3fabdc1a_en.png)

2. Klicke den neuen Menüknopf ![]({{site.baseurl}}/images/plugins_html_42e55708_en.png) in der linken
Werkzeugleiste und die GPX Daten werden in einem neuen EditGpx Ebene importiert. Jeder Knoten der 
GPX-Spur wird in Gelb hervorgehoben.![]({{site.baseurl}}/images/plugins_html_m3f86e83d_en.png)

3. Zum Löschen markiere nun die Wegpunkte, indem du auf Sie klickst.
Weiterhin kannst du auch Bereiche auswählen, indem du ein Rechteck
um den Bereich erstellst. In diesem Fall werden alle Wegpunkte in dem Bereich
gelöscht. Die gelbe Hervorhebung sollte verschwinden![]({{site.baseurl}}/images/plugins_html_m7e01ae1f_en.png)

4. Rechtsklick auf den Ebenenname und wähle \<\<Kovertiere zu GPX Ebene\>\> im Kontextmenü.

5. Jetzt kannst du die GPX Ebene als Datei speichern oder die Daten bei OSM hochladen.
(zum Beispiel indem du die Erweiterung [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins) benutzt)

Print
-----

![]({{site.baseurl}}/images/plugins_html_m66e7a0a9_en.png)

Um einfach und schnell eine Karte während dem Editieren in JOSM auszudrucken,
installiere dir die __print Erweiterung__. Obwohl es dir nicht ermöglicht 
stilistische Änderungen an deinem Ausdruck vorzunehmen, kannst du so auf einfachem Wege
eine Karte drucken. Ist diese Erweiterung erst einmal installiert und JOSM neugestartet, siehst du einen
neuen Eintrag "Drucken..." im Dateimenü.

![]({{site.baseurl}}/images/plugins_html_mbd3c18f_en.png)

Klickst du auf den "Drucken..." Knopf im Dateimenü, siehst du diesen Druckdialog:

![]({{site.baseurl}}/images/plugins_html_49f16afc_en.png)

In dem Dialog kannst du deine Druckereinstellungen ändern. Falls keine Karte
sichtbar ist, setze einen Haken vor "Kartenvorschau" im Menü auf der rechten Seite.
Zum Verkleinern oder Vergrößern des Kartenausschnitts ändere die Zahl im Maßstabsfeld.
Die Auflösung der Karte kannst du durch verändern der Zahl im Auflösungsfeld erhöhen oder
verringern. Wenn du alle Einstellungen vorgenommen hast, klicke auf "Drucken".

Zusammenfassung
-------

Hierbei handelt es sich um einige nützliche Erweiterung für JOSM. Natürlich 
gibt es noch viele weitere Erweiterungen zu entdecken. Wie du vielleicht bemerkt hast,
zeigt dir das Eintellungsmenü zu jeder Erweiterung eine kurze Beschreibung an. Für
weitere Erläuterungen über eine Erweiterung klicke auf "Mehr Info...".

![]({{site.baseurl}}/images/plugins_html_17ea8a4b_en.png)

Viel Erfolg!

Anhang
--------

DirectUpload Details
--------------------

![]({{site.baseurl}}/images/plugins_html_m7e14a056_en.png)

Das Hinzufügen von GPS-Spuren und Wegpunkte zu OSM ist aus vielen Gründen 
sinnvoll.
__(Falls du deine GPX Punkte anonym halten willst brauchst die folgende Sektion überspringen. Du kannst deine GPX Dateien einfach in JOSM betrachten und lokal speichern)._
GPS-Spuren sind der nützlichste Weg um georeferenzierte Objekte für OSM zu sammeln.
(See[](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Chapter](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[6.5:](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Aerial](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Imagery](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit)[Considerations](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit))

Mithilfe von GPS Geräten gesammelte Daten haben eine höhere Genauigkeit als
Satellitenbilder und sind daher hervorragend geeignet die Ungenauigkeit von
Luftbildern zu kontrollieren. Die Benutzung von vielen GPS-Spuren 
(je größer die Anzahl an GPS-Spuren, desto besser die Genauigkeit der Daten) ermöglicht
es dir herauszufinden, inwieweit die Hintergrundbilder verschoben sind.

Das Hochladen von GPS-Spuren auf die Server ermöglicht das Teilen von
Informationen. 
Es gibt zwei Arten eigene GPS-Spuren hochzuladen: 1) JOSM Erweiterung
2) Nutzerberfläche der OSM Internetseite

> Notiz: GPS Wegpunkte können nicht direkt in die OSM Datenbank geladen werden.
> Du kannst sie zu GPS-Spuren konvertieren und dann zum Beispiel temporär hochladen
> so dass sie als Hintergrundobjekte in Potlatch angezeigt werden können.

Nachdem du deine GPX Datei in JOSM geöffnet und auf Gehe zu \<\<Werkzeug\>\>
geklickt hast, klicke auf \<\<GPS-Spuren hochladen\>\>. Beschreibe die GPX Datei,
gebe ein paar Merkmale und die Sichtbarkeit an. Als Sichtbarkeit kannst du zwischen
Privat, Öffentlich, Auffindbar oder Identifizierbar wählen.

1.  **Identifizierbar**: Deine GPS-Spur ist öffentlich einsehbar, unter "Deine GPS-Spuren".
	Andere Nutzer können deine GPS-Spuren herunterladen und sie mit dir in Verbindung bringen.
	Zeitstempel deiner GPS-Spuren werden ebenfalls öffentlich verfügbar gemacht und sind über
	die öffentliche GPS API abrufbar.

2.  **Öffentlich**: Deine GPS-Spur ist öffentlich einsehbar unter "Deine GPS-Spuren" und
	werden in der öffentlichen GPS-Spuren Liste aufgezählt. Andere Nutzer sind in der Lage
	die rohe GPS-Spur mit den beinhaltenden Zeitstempeln aus der Liste herunterzuladen.
	Über die API sind die Daten nicht zu dir verfolgbar. Obwohl die Daten chronologisch
	geordnet sind, sind die Zeitstempel nicht sichtbar.

3.  **Auffindbar**: Die GPS-Spur taucht in **keiner** öffentlichen
	Liste auf, aber die Wegpunkte sind mit Zeitstempeln trotzdem über die öffentliche
	GPS API auffindbar. Andere Nutzer haben die Möglichkeit die Wegpunkte herunterzuladen,
	können aber nicht mit dir in Verbindung gebracht werden.

4.  **Privat**: Deine GPS-Spur taucht in **keiner** öffentlichen Liste auf. Wegpunkte
	sind über die öffentliche GPS API **ohne Zeitstempel** in chronologischer Reihenfolge
	abrufbar.

![]({{site.baseurl}}/images/plugins_html_2009cd0_en.png)

Hochladen von GPS-Spuren über die OSM Internetseite
---------------------------

1. Gehe auf [http://www.openstreetmap.org/](http://www.openstreetmap.org/) und melde dich an.

2. Wähle \<\<GPS-Spuren\>\> auf dem linken Banner aus.![]({{site.baseurl}}/images/plugins_html_32e7d3be_en.png)

3. Wähle [GPS-Spur hochladen](http://www.openstreetmap.org/trace/create). Hier kannst du
deine eigenen GPS-Spuren einsehen.

4. Finde deine Datei über \<\<Datei auswählen\>\>. Beschreibe die GPX Datei,
gebe ein paar Merkmale und die Sichtbarkeit an. Als Sichtbarkeit kannst du zwischen
Privat, Öffentlich, Auffindbar oder Identifizierbar wählen. Falls du mehrere .gpx Dateien hast,
komprimiere diese zu einem zip Archiv und lade dieses hoch. Das Archiv wird als eine
große gpx Datei behandelt und nur eine GPS-Spur wird erzeugt.![]({{site.baseurl}}/images/plugins_html_m63dc490_en.png)

5. Klicke auf *Datei hochladen*.


  Die Datei wird auf die OSM Server hochgeladen, wo sie darauf wartet in die 
  Datenbank eingepflegt zu werden.
