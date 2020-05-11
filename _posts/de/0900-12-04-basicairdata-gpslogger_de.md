---
layout: doc
title: BasicAirData GPS Logger
permalink: /de/mobile-mapping/basicairdata-gpslogger/
lang: de
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

> Geprüft 2020-05-05

![BasicAirData-GPSLogger-002][]

Der BasicAirData GPS Logger ist eine einfache Applikation um Ihre Position und Ihre Bewegungen aufzuzeichnen. Es handelt sich um einen GPS-Tracker mit Basisfunktionen der auf Genauigkeit und sparsamen Akkuverbrauch ausgelegt ist. Die Anwendung liefert einen sehr genauen Höhenwert wenn Sie die automatische Höhenkorrektur nach EGM96 in den Einstellungen aktiviert haben. Sie können Ihre Bewegungen aufzeichnen. sie in einem (separat zu installierenden)  Betrachter ansehen und sie in den Formaten KML, GPX und TXT weiterleiten.

Die Anwendung ist für Android-Geräte verfügbar, kostenlos und Open Source.

Die Anwendung kann vom [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger) heruntergeladen werden.<br>
Alternativ steht sie als APK-Datei im [GitHub repository](https://github.com/BasicAirData/GPSLogger/tree/master/apk) des GPSLogger zur Verfügung.

Eigenschaften
--------

![BasicAirData-GPSLogger-000][]

* Spuraufzeichnung - die Anwendung verfügt nicht über eigene Karten
* Eine moderne Benutzeroberfläche mit einer batteriesparenden dunklen Variante und verschiedenen Registerkarten
* Aufzeichnung im Vorder- oder Hintergrund (Unter Android 6 oder neuer schalten Sie bitte alle Optimierungen zum Batterieverbrauch für diese Anwendung aus)
* Anlegen von Wegpunkten während der Aufzeichnung
* Visualisierung der GPS-Information
* Manuelle Höhenkorrektur (Addieren eines globalen Offset)
* Automatische Höhenkorrektur auf der Grundlage des EGM96-Geoidmodells der NGA (muss in den Einstellungen aktiviert werden)
* Statistik über die aufgezeichnete Spur in Echtzeit
* Verzeichnis aller Aufzeichnungen
* Visualisierung der Aufzeichnungen mit jedem installierten KML- oder GPX-Betrachter aus der Liste
* Export der Aufzeichnungen in das /GPSLogger-Verzeichnis Ihres Geräts als KML, GPX oder TXT
* Teilen der Aufzeichnungen in den Formaten KML, GPX und TXT über E-Mail, Dropbox, Google-Drive, FTP, ...
* Maßeinheiten metrisch, Zoll, Seemeilen

Grundlegende Bedienung
-----------

![BasicAirData-GPSLogger-001][]

Falls erforderlich aktivieren Sie den GPS-Modus auf Ihrem Gerät. Gehen Sie in das Freie und starten Sie den GPS-Logger.

1. Warten Sie bis eine Standortbestimmung durchgeführt wurde. Sobald das der Fall ist, erscheinen die ermittelten Koordinaten unter der Registerkarte ___GPS FIX___. Warten Sie möglichst noch mindestens eine Minute bevor Sie fortfahren um ein stabiles Signal zu erhalten.
2. Klicken Sie auf den Knopf ___Wegpunkte___ unten in der Anzeige um die Aufzeichnung zu starten. Der Knopf wird rot. Sie können durch mehrfaches Klicken dieses Knopfs die Aufzeichnung ein- und ausschalten. Der Knopf zeigt die Anzahl der aufgezeichneten Punkte an.
Unter der Registerkarte ___TRACK___ sehen sie in Echtzeit statistische Angaben zu Ihrer Aufzeichnung.
3. Wenn Sie die Aufzeichnung beenden möchten, doppelklicken Sie auf den kleinen ___Haken___ in der oberen rechten Ecke um die aktive Aufzeichnung abzuschließen.
4. Unter der Registerkarte ___TRACKLIST___ sehen Sie die gerade beendete Aufzeichnung. Ein Klick auf den Eintrag öffnet ein Menü. Sie können die Aufzeichnung auf verschiedene Arten mit anderen teilen, sie in einem externen Betrachter ansehen, sie in das /GPSLogger-Verzeichnis auf Ihrem Smartphone exportieren oder aus der Liste löschen. Die verfügbaren Export-Formate können unter den Einstellungen festgelegt werden.

Import von GPX-Aufzeichnungen in einen OpenStreetMap-Editor
--------------------------------------------

Wenn Sie Aufzeichnungen gesammelt haben, können Sie die GPX-Spuren in JOSM, iD oder einen anderen OpenStreetMap-Editor importieren.
Am einfachsten geht es mit diesen 2 Schritten:

1. Speichern Sie die GPX-Datei auf Ihrem Computer 
* indem Sie im GPSLogger in die Trackliste gehen, auf die gewünschte Aufzeichnung klicken und dann ___Export___ auswählen. Es wird eine GPX-Datei erzeugt und im /GPSLogger-Verzeichnis Ihres Android-Geräts abgelegt (Sie müssen vorher das GPX-Format unter den Einstellungen aktiviert haben). Verbinden Sie Ihr Gerät mit dem Computer und kopieren Sie die GPX-Datei mit einem Dateimanager.
* alternativ können Sie die mit einem Computer ___teilen___ (über E-Mail, FTP oder einen Cloud-Dienst). Die zur Verfügung stehenden Wege hängen davon ab, welche Anwendungen von Drittanbietern auf Ihrem Android-Gerät installiert sind;
2. Importieren Sie die GPX-Datei in einen OpenStreetMap-Editor: mit JOSM oder iD können Sie die Datei einfach in die Anwendung hineinziehen (bei iD in das Browserfenster).

Offizielle Dokumentation (auf Englisch)
----------------------

- Nähere Informationen über die Anwendung finden Sie in [diesem Artikel](http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
- [Unter](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) finden Sie eine Kurzanleitung sowie einen Überblick über die Anwendungseinstellungen.<br>
- Haben Sie Fragen zu Benutzung oder Konfiguration? Schauen SIe in den [Frequently Asked Questions](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) nach

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg