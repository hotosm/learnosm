---
layout: doc
title: JOSM tms, wms or wmts Bilder hinzufügen
permalink: /de/josm/josm-adding-imagery/
lang: de
category: josm
---

JOSM - Luftbilder hinzufügen
================

> Diese Anleitung kann heruntergeladen werden als [josm_adding_imagery_en.odt](/files/josm_adding_imagery_en.odt) or [josm_adding_imagery_en.pdf](/files/josm_adding_imagery_en.pdf)  
> Reviewed 2016-09-09  

Nicht alle Luftbilder sind im JOSM Bilder Menü, aber man kann welche leicht hinzufügen, falls man die Link Informationen hat.  

In diesem Beispiel arbeiten wir vom [HOT Tasking Manager](http://tasks.hotosm.org/) aus und die Bilder, um eines unserer Projekt zu vervollständigen, müssen manuell zu JOSM hinzugefügt werden. Die Art und Weise einen Bilder Lin hinzu zu fügen ist immer dieselbe, egal an was man arbeitet, so lange man den Link hat. Es gibt auch Fälle, in denen der Link nicht wie erwartet arbeitet, dann müssen die Bilder manuell hinzugefügt werden, wenn man an die Link Informationen bekommen kann.  

Vom Tasking Manager Informations Tab, oder einer anderen Informationsquelle, kopiert man den Bilderabschnitt.  

![TM Imagery][]

Man geht zum Einstellungen Menü von JOSM (**Edit / Preferences**, orde auf Apple Rechnern **JOSM / Preferences**)  

![Preferences WMS TMS 1][]

Man klickt auf das ![WMS_TMS_button][]{: height="24px"} Icon und in diesem Fall auf das ![+TMS_button][]{: height="24px"} Icon.  

> TMS URLs beinhalten normalerweise {x}{y} und {z}, WMS URLs sind typischerweise lang und haben {width} und {height}, WMTS URLs beinhalten normalerweise WMTSCapabiilities.xml. Wenn man nicht sicher ist, welche Art von Bilder man hat, kann man sie als unterschiedliche Typen hinzufügen und sehen welche funktionieren.  

![Preferences WMS TMS 3][]

**Box 1.** Man fügt die Informationen die man aus dem Tasking Manager Information Tab kopiert hat in die erste Box im Fenster. JOSM wird es überprüfen und wenn es korrekt ist, wird der Verifizierungsprozess die Information in Box 3 erneut darstellen (siehe unten).  Falls es nicht innerhalb weniger Sekunden in Box 3 erscheint, sollte man prüfen, ob man aus Versehen Buchstaben vergessen hat, Leerzeichen hinzugefügt hat am Anfang oder Ende - es muss nur der aktuelle Link kopiert und eingefügt werden.  
**Box 2.** Diese wird normalerweise leer gelassen, außer man hat andere Anweisungen bekommen.  
**Box 3.** enthält nun die Kopie von Box 1, erzeugt durch den Verifizierungsprozess von JOSM.  
**Box 4.** Man gibt einen Namen für den Layer an - da die Bilder im Tasking Manager als "Satellite imagery for this projekt is kindly provided by Digital Globe through their +Vivid service." benannt waren, habe ich meinen Layer "Digital Globe + Vivid" genannt.  

![Preferences WMS TMS 4][]

Man klickt auf den ![OK_button][]{: height="24px"} Button und die hinzugefügten Bilder erscheinen unten in der Liste - eventuell muss man herunterscrollen um sie zu sehen.  

![Preferences WMS TMS 5][]

Man klickt den ![OK_button][]{: height="24px"} Button, um das Einstellungen Fenster zu schließen und gelangt zurück zu JOSM. Falls man die Bilder braucht, clickt man auf das Wort **Imagery** im Menü oben im Fenster und wählt es aus der alphabetischen Liste aus. Alternativ zeigt **Alt + I** das Bilder Menü (Diese Tastaturkürzel können abweichen je nach Spracheinstellung).  

![Preferences WMS TMS 6][]

**Tipp** Falls die Bilder nicht laden, prüft man wie die Bilder in der Liste erscheinen. Im Beispiel erscheint **tms** doppelt. Man kann den Link bearbeiten, so dass es nur einmal erscheint, was wahrscheinlich das Problem behebt.

![TMS TMS][]

Einen WMS Server hinzufügen
===========

Einen WMS Server hinzuzufügen ist ähnlich wie beim TSM Server mit einem wichtigen Unterschied. WMS Server bieten typischerweise mehr als einen Bilder Layer zur Auswahl an und man muss entweder einen Layer beim Hinzufügen des WMS Servers in den Einstellungen auswählen oder angeben, dass man einen Layer auswählen wird, jedes mal wenn man den Server im Bilder Menü in der JOSM Oberfläche auswählt.

Um einen WMS server hinzuzufügen öffnet man den JOSM Bilder Einstellungen Dialog wie oben gezeigt, klickt aber dieses Mal auf den "Add WMS" button ![wms_add_button][] Button

Die erscheinende Dialogbox sieht wie folgt aus:
![wms_entry_dialog_numbered][]

**Box 1.** Man gibt die URL des WMS Servers in dieses Feld ein. Dies sollte eine typische URL sein, welche mit http oder https gebinnt  
**Button 2."" Nachdem man die URL eingegeben hat klickt man den "Get Layers" Button. JOSM kontaktiert den WMS Server und bekommt eine Liste von verfügbaren Layer des Servers  
**Box 3.** Hier wird die Liste der verfügbaren Layers angezeigt. Es können Ordner vorhanden sein, die aufgeklappt werden müssen um die verfügbaren Layer zu sehen  
**Auswahlmenü 4.** Bildformat - dies wir normalerweise automatisch ausgewählt nachdem man auf einen laer in **Box 3** geklickt hat. Es kann mehr als ein Bildformat anbieten, aber meistens ist jpeg oder png das Format.  
**Box 5.** Dies ist automatisch erzeugt, nachdem man einen Layer in **Box 3** ausgewählt hat. Es wird lange und kompliziert sein, normalerweise aber in Ordnung und mehr zur Information und sollte typischerweise nicht bearbeitet werden.  
**Box 6.** man gibt einen namen für den Server oder Layer an. Ein Standardname wird vorgegeben basierend auf der URL, aber man kann einen sprechenderen Namen eingeben. Dieser Name wird im JOSM Bilder Menü angezeigt, wenn man den Layer zu seiner Layerleiste in der JOSM Oberfläche hinzufügen möchte.  

> Beispiel WMS Server mit vielen interessanten Layern: http://sedac.ciesin.columbia.edu/geoserver/wms  

![wms_select_layer_highlighted][]  
Man muss auf einen Layer klicken, wenn man möchte, dass der Bildermenü Eintrag immer den selben Layer lädt. Im obrigen Beispiel wird, wenn man den Layer auswählt im Bildermenü, immer der  "World Database of Protected Areas" Layer geladen.

Möchte man wählen, welcher Layer jedes Mal geladen werden soll, wenn man den Server im Bildermenü auswählt und mehrere Layer des gespeicherten Servers laden können möchte, hakt man das Auswahlkästchen "Store WMS endpoint only" an.  Das deaktiviert die Layerauswahl und das URL Verifizierungsfeld.

![wms_end_point_only_highlighted][]  

Man klickt auf den ![OK_button][]{: height="24px"} Button und die hinzugefügten Bilder erscheinen unten in der Liste - eventuell muss man herunterscrollen um sie zu sehen.  

![Preferences WMS TMS 5][]

Man klickt den ![OK_button][]{: height="24px"} Button, um das Einstellungen Fenster zu schließen und gelangt zurück zu JOSM. Falls man die Bilder braucht, clickt man auf das Wort **Imagery** im Menü oben im Fenster und wählt es aus der alphabetischen Liste aus. Alternativ zeigt **Alt + I** das Bilder Menü (Diese Tastaturkürzel können abweichen je nach Spracheinstellung).  

![Preferences WMS TMS 6][]

[Preferences WMS TMS 1]: /images/josm/JOSM_TMS_1.png
[TM Imagery]: /images/josm/JOSM_TMS_2.png
[WMS_TMS_button]: /images/josm/josm_preferences-wms-tms.png
[+TMS_button]: /images/josm/+TMS.png
[OK_button]: /images/josm/josm_OK_button.png
[Preferences WMS TMS 3]: /images/josm/JOSM_TMS_3.png
[Preferences WMS TMS 4]: /images/josm/JOSM_TMS_4.png
[Preferences WMS TMS 5]: /images/josm/JOSM_TMS_5.png
[Preferences WMS TMS 6]: /images/josm/JOSM_TMS_6.png
[TMS TMS]: /images/josm/JOSM_TMS_TMS.png
[wms_add_button]: /images/josm/wms_add_button.jpg
[wms_select_layer_highlight]: /images/josm/wms_select_layer_highlight.jpg
[wms_entry_dialog_numbered]: /images/josm/wms_entry_dialog_numbered.jpg
[wms_end_point_only_highlighted]: /images/josm/wms_end_point_only_highlighted.jpg
[wms_select_layer_highlighted]: /images/josm/wms_select_layer_highlighted.jpg