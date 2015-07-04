---
layout: doc
title: Editieren mit JOSM
permalink: /de/josm/editing-with-josm/
lang: de
category: josm
---

Editieren mit JOSM
=================

In [Kapitel 3]({{site.baseurl}}/en/josm/start-josm/) hast du JOSM installiert und deine ersten Punkte, Linien und Grundrisse gezeichnet. Du hast Vorlagen für diese Objekte hinzugefügt um sie mit weiteren Informationen zu ergänzen. Am Ende konntest du in JOSM deine eigene Karte zeichnen.

Das Kartenzeichnen in Kapitel 3 war eine Übung, um JOSM kennenzulernen und herauszufinden wie man Orte auf der Karte erstellt. Aber unsere Karten waren nicht präzise, denn wir haben keine ortsbezogenen Informationen hinzugefügt. Die vorherigen zwei Kapitel haben sich mit GPS und Walking Papers beschäftigt, zwei Möglichkeiten um die tatsächliche Lage von Orten zu bestimmen (GPS bestimmt die Position mit einer Abweichung von bis zu 10m, ist also nicht komplett genau, vor allem wenn du nur einen Wegpunkt erfasst). Diese Positionsangaben werden durch Koordinaten dargestellt.

Eine „echte“ Karte zu zeichnen, also eine Karte auf der sämtliche Punkte, Linien und Grundrisse an ihrem rechtmäßigen Platz liegen, funktioniert genauso wie in Kapitel 3 beschrieben. Aber diesmal werden wir unsere GPS-Koordinaten und Spuren und unsere Walking Paper verwenden um ähnliche Karten an ihren richtigen Positionen zu zeichnen.

In diesem Kapitel werden wir lernen wie man die OpenStreetMap Karte bearbeiten kann und unsere Verbesserungen hinzufügen kann. Wir lernen den grundsätzlichen Ablauf des Kartierens bei OSM.

<!-- This text is hidden - 
**Lade** die aktuellen Kartendaten von OSM **herunter**

  - [Überblick über JOSM]({{site.baseurl}}/de/josm/editing-with-josm/#a-tour-of-josm)
  - [OSM Daten herunterladen]({{site.baseurl}}/de/josm/editing-with-josm/#download-osm-data)
  - [JOSM Ebenen]({{site.baseurl}}/de/josm/editing-with-josm/#josm-layers)

**Editiere** sie mit Hilfe von GPS, Walking Papers und Notizen

  - [Editieren]({{site.baseurl}}/de/josm/editing-with-josm/#edit)
  - [Tags]({{site.baseurl}}/de/josm/editing-with-josm/#tags)

**Speichere** deine Änderungen bei OSM

  - [Änderungen hochladen]({{site.baseurl}}/de/josm/editing-with-josm/#upload-changes)
  - [Guck dir deine Änderungen auf der Karte an]({{site.baseurl}}/de/josm/editing-with-josm/#see-your-changes-on-the-map)
  - [OSM Daten speichern]({{site.baseurl}}/de/josm/editing-with-josm/#saving-osm-files)

Am Ende dieses Kapitels werden wir unsere Ergänzungen auf der OSM Karte sehen können.

Ein Überblick über JOSM
--------------

- Um zunächst einmal JOSM zu starten, öffne das Start-Menü in der unteren linken Ecke des Bildschirms und finde das Programm JOSM
- Als nächstes lädst du deine gpx-Datei und dein Walking Paper in JOSM. Du brauchst nicht beide gleichzeitig zu öffnen, kannst du aber, wenn du möchtest. Wenn du nicht mehr weisst wie man Dateien in JOSM öffnet, guck in den vorherigen Kaptieln nach.
- Ein kurzer Überblick über die Funktionen von JOSM: Es gibt viele verschiedene Features in JOSM. Mit dem Hauptfenster bist du schon vertraut - es ist die Kartenansicht und der Ort an dem die meiste Arbeit stattfindet.
- And er rechten Seite der Kartenansicht befindt sich eine Reihe von Menüs welche alle für unterschiedliche Dinge verantwortlich sind. Normalerweise werden nach einer JOSM Installation standardmäßig einige Menüs angezeigt, unter anderem Ebenen, Eigenschaften und Auswahl. Wenn du einen Punkt, eine Linie oder einen Grundriss auswählst, wird dieses in dem Auswahlmenü angezeigt. Zugehörige Informationen über das Objekt sind in dem Eigenschaftenmenü zu sehen und der Benutzername des Authors des jeweiligen Objekts findet sich im Autor-Menü.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_46acf705_en.png)

- Auf der linken Seite von JOSM befinden sich mehrere Werkzeugleisten, welche aus vielen Buttons bestehen. Über dieser Leiste sind verschiedene Buttons, welche die Funktionsweise des Mauszeigers verändern. Du kennst bereits die ersten beiden, das Auswahl- und das Zeichenwerkzeug. Die anderen Werkzeuge helfen beim Vergrößern der Karte, ein Objekt zu löschen, eine Form zu zeichnen oder eine Linie zu erstellen, weche parallel zu einer anderen Linie liegt.
- Unterhalb dieser Werzeuge sind noch weitere Buttons. Diese bestimmen, was du auf der rechten Seite von JOSM siehst. Mit Hilfe dieser Buttons kannst du die Menüs auf der rechten Seite - Eigenschaften, Auswahl, Autor - öffnen und schliessen.

OSM-daten herunterladen
-----------------

- Erinnerst du dich an den Kreislauf des Editierens von OSM-Daten am Anfang dieses Kapitels? **Herunterladen**, **Editieren**, **Speichern**. Bevor wir die Karte editieren können müssen wir die existierenden OSM-Daten in unseren Bereich herunterladen.
- Wenn du deine gpx-Datei oder Walking Paper öffnest, wird die Kartenansicht anzeigen was du geladen hast und direkt zu den richtigen Koordinaten springen. Nachdem du die Dateien geöffnet hast, schaue in die untere linke Ecke von JOSM. Dort stehen der Längen- und Breitengrad (Koordinaten) des Mauszeigers.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m58e5f3e7_en.png)

- Da unsere Kartenansicht bereits den Bereich zeigt, den wir editieren wollen, ist es sehr einfach die OpenStreetMap-Daten für diesen Bereich herunterzuladen. Klicke auf „Datei“ in der oberen rechten Ecke von JOSM und dann auf „Von OSM herunterladen“. Dadurch öffnet sich das Download-Fenster. Dieses Fenster lässt sich auch noch einfacher öffnen, in dem du auf den „Herunterladen“-Button klickst, wie hier auf diesem Screenshot:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m6f2281c2_en.png)

- Wenn sich das Download-Fenster öffnet solltest du eine Karte mit einem pinken Rahmen darauf sehen. Wenn du keine Karte siehst, klicke auf den Reiter „Slippy Map“.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m1318e890_en.png)

- Der pinke Rahmen zeigt den Bereich der Karte an, welchen wir zum editieren herunterladen möchten. Solange du den Rahmen nicht bewegt hast seitdem du die gpx-datei oder das Walking Ppaer geladen hast, sollte der Rahmen um den richtigen Bereich angezeigt werden. Möchtest du allerdings einen größeren Bereich herunterladen, kannst du auch einen neuen Rahmen zeichen. Das geht, in dem du auf die Karte klickst, die Maustaste festhälst und die Maus ziehst um einen neuen Rahmen zu erstellen. Lasse die Maustaste wieder los um den Rahmen fertigzustellen.
- Wenn du mit der Größe und Position des Rahmens zufrieden bist, klicke auf „Herunterladen“ am unteren Rand des Fensters. JOSM wird die Daten für diesen Bereich von OSM herunterladen und in der Kartenansicht für dich zum Editieren öffnen.
end of hidden text-->

JOSM Ebenen
-----------

- Öffne deine GPS-Datei und laden die Kartendaten von OpenStreetMap herunter, falls du es noch nicht getan hast. Es fällt auf, dass ein neues Objekt in das Ebenenmenü auf der rechten Seite von JOSM hinzugefügt wird, sobald du eine Datei öffnest, ein Walking Paper hinzufügst, oder Kartendaten von OSM herunterlädst. Dein Ebenenmenü könnte in etwa so aussehen:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2b7c3b_en.png)

- Jedes Objekt in dieser Liste stellt eine andere Datenquelle dar, die du in der Kartenansicht geöffnet hast. In dem obrigen Beispiel sind „Data Layer 2“ die Daten von OpenStreetMap, welche wir editieren wollen. „Markers“ sind die Wegpunkte von unserem GPS-Gerät und „30 Juni 201-gpx“ ist die GPS-Spur aus dem Gerät. Als letzte Ebene wurde „Walking Papers“ erstellt als ein Walking Paper zu JOSM hinzugefügt wurde. Du kannst auch die Ebene mit Satellitendaten von Bing hinzufügen, indem du auf „Imagery“ in dem oberen Menü von JOSM klickst und dann auf „Bing Sat“.
- Um eine dieser Ebenen zu verstecken, wähle sie mit der Maus aus und klicke dann auf den Zeigen/Verstecken-Button, der so aussieht:![]({{site.baseurl}}/images/EditingWithJOSM_html_5c2e696f_en.png)
- Nun sollte die Ebene, welche du ausgewählt hast in der Kartenansicht verschwinden. Klicke erneut auf Zeigen/Verstecken und die Ebene erschient wieder.
- Du kannst eine Ebene wieder entfernen in dem du sie auswählst und auf den „Löschen“-Button klickst:![]({{site.baseurl}}/images/EditingWithJOSM_html_m172543d8_en.png)
- Zuletzt ist es wichtig zu wissen, dass du nur eine Ebene bearbeiten kannst, die von JOSM als *aktiv* erkannt wird. Wenn du die Ebene in der Kartenansicht nicht bearbeiten kannst liegt es wahrscheinlich daran, dass du die falsche Ebene auf *aktiv* gsetzt hast. Die meisten Ebenen, wie zum Beispiel GPS Wegpunkte, Walking Papers oder Satellitenaufnahmen können nicht bearbeitet werden.
- Die einzigen Ebenen, welche bearbeitet werden können, sind Daten von OpenStreetMap, die normalerweise mit „Data Layer 1“ bezeichnet werden.
- Um eine Ebene *aktiv* zu setzen, wähle sie in dem Ebenenmenü aus und klicke auf den „Aktivieren“-Button:![]({{site.baseurl}}/images/EditingWithJOSM_html_de83a77_en.png)

Editieren
----
- Der nächste Schritt besteht im Editieren der Karte und Hinzufügen neuer Objekte. Das ist am Anfang nicht gan einfach, aber mit der Zeit und mit Übung wirst du darin besser und besser werden.
- Wenn du einen Punkt, eine Linie oder einen Grundriss bewegen möchtest, benutze das **Auswahlwerkzeug**. Klicke auf ein Objekt und ziehe es dorthin wo es sein sollte. Dies kann verwendet werden um die Position von Objekten zu korrigieren, welche an die falsche Stelle gesetzt wurden.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m2eb4096c_en.png)

- Benutze das **Zeichnen-Werkzeug** um neue Punkte, Linien und Grundrisse zu zeichnen. Beschreibe diese Objekte in dem du aus dem Vorlagenmenü auswählst, so wie in [Kapitel 3]({{site.baseurl}}/en/josm/start-josm/). 
- Denk daran, dass deine GPS-Wegpunkte und deine Walking Papers nicht automatisch zu OpenStreetMap gelangen. Du musst sie *digital* zur OSM Karte hinzufügen in dem du das Zeichnen-Werkzeug benutzt. Aber deine Punkte, Spuren und Walking Papers sind im Hintergrund als eine Art Schablone sichtbar.
- Nehmen wir an, dass du einen Wegpunkt mit dem Namen 030 auf deinem GPS-Gerät hast und in deinem Notizbuch aufgeschrieben hast, dass 030 eine Schule ist. Um diesen Punkt zu OpenStreetMap hinzuzufügen, wähle das Zeichnen-Werkzeug aus und mache einen Doppelklick auf den Punkt 030 in der Kartenansicht. Damit erstellst du einen Punkt. Dann wählst du im Vorlagenmenü die Vorlage für „Schule“ aus. Gib den Namen der Schule ein und klicke auf „Vorlage anwenden“. Wiederhole diesen Vorgang um Linien und Grundrisse hinzuzufügen.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_1cb5aeb4_en.png)

Attribute
----

- Wenn du einen Punkt zeichnest, oder eine Linie oder Grundriss, so ist lediglich bekannt **wo** sich das Objekt befindet, jedoch nicht **was** es ist. Bislang haben wir Objekte aus dem Vorlagenmenü verwendet um zu definieren **was** das Objekt ist. OpenSTreetMap verwendet **Attribute** um zu definieren **was** ein Objekt ist.
- Ein Attribut ist wie ein Beschriftungsschild die du irgendwo anbringen kannst. Zum Beispiel, wenn du ein Quadrat zeichnest ist es nur ein Quadrat. Aber wenn du mehrere Attribute hinzufügst entsteht folgender Eintrag: Dieses Quadrat ist ein Gebäude, der Name dieses Gebäudes ist „Menara Thamrin“ und das Gebaüde hat 16 Stockwerke.
- Du kannst soviele Attribute wie du möchtest zu einem Objekt hinzufügen. tags werden als Textpaare gespeichert, genannt **Schlüssel** und **Werte**. In OpenStreetMap würden die Attribute aus dem vorherigen Beispiel so aussehen:  `building = yes, name = Menara Thamrin, building:levels = 16`
- Wenn du ein Objekt in JOSM auswählst, kannst du alle Attribute die zu diesem Objekt gehören in dem Eigenschaftsmenü auf der rechten Seite sehen.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m945ccee_en.png)

### Attribute editieren

- Du kannst in diesem Menü Attribute hinzufügen, editieren und löschen. Die Attribute sind traditionellerweise auf Englisch, deswegen ist es oftmals besser das Vorlagenmenü zu verwenden. Wenn du ein Attribut hinzufügst oder veränderst, zum Beispiel *primary highway* austauschst mit *footpath*, wird sich die Anzeige entsprechend des Attributs verändern.
- Um ein bestehendes Objekt zu editieren:
- Wähle es aus.
- Dann kannst du die Attribute auf zwei Wege verändern: (1) Du kannst das Vorlagenmenü benutzen um eine Eingabemaske zu öffnen und die Informationen zu bearbeiten, oder (2) du kannst die Attribute direkt im Eigenschaftenmenü auf der rechten Seite bearbeiten.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_94da59a_en.png)

### Häufiger Fehler: Attribute von Punkten bearbeiten anstatt von Linien oder Grundrissen

- Wenn du Attribute zu einem Punkt hinzufügst, wählst du den Punkt aus und fügst dann die Attribute hinzu (oder benutzst das Vorlagenmenü). Wenn du Attribute zu einer Linie oder einem Grundriss hinzufügen möchtest, musst du darauf achten, die Linie auszuwählen nicht einen der Punkte, welche die Linie beschrieben.
- Ein häufiger Fehler ist, das JOSM Auswahlwerkzeug zu verwenden um einen Rahmen um ein Objekt zu ziehen. Dadurch werden allerdings alles ausgewählt, die Linie **und** die Punkte und die Attribute werden auch zu den Punkten hinzugefügt. Stelle sicher, dass du **nur** Linien auswählst, wenn du Attribute zu ihnen hinzufügen möchtest.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_2746cce8_en.png)

- Weitere Informationen über Attribute und Vorlagen finden sich im *Fortgeschrittene* Kapitel 4: XML und JOSM Vorlagen.

Änderungen hochladen
--------------

- Nachdem du einige Änderungen gemacht hast, um die Karte zu verbessern, lass uns nun diese Änderungen bei OpenStreetMap speichern. Um die Änderungen speichern können müssen wir mit dem Internet verbunden sein, da wir die Änderungen zu OpenStreetMap hochladen.
- Klicke auf „Datei“ im oberen Menü und dann auf „Daten hochladen“, dadurch öffnet sich das Upload-Fenster. Dieses Fenster lässt sich auch durch einen Klick auf den Upload-Button öffnen, so wie in diesem Screenshot:

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_2e194887_en.png)

- Das nun erscheinende Fenster zeigt eine Liste der Objekte, die du hinzufügst, modifizierst oder löschst. In dem unteren Textfeld kannst du einen Kommentar über deine Änderungen verfassen.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_67f320b3_en.png)

- Klicke auf „Änderungen hochladen“
- Wenn du zum ersten Mal Änderungen bei OpenStreetmap speicherst, wirst du nach dem Benutzernamen und Kennwort gefragt, welche du in Kapitel angegeben hast.
- Gib sie in dem Fenster ein, welches erscheint. Wenn du den Haken in dem Kästchen setzt, werden Benutzername und Kennwort gespeichert, sodass du sie in Zukunft nicht mehr eingeben musst. Klcike auf „Authentifizieren“.

    ![]({{site.baseurl}}/images/EditingWithJOSM_html_m5f20c80_en.png)

- Nun musst du ein paar Sekunden warten währrend deine Änderungen hochgeladen werden und dann bist du fertig! Du hast deine ersten Änderungen bei OpenStreetMap gemacht. Du kannst weiter editieren und alle deine Punkte hinzufügen wenn du möchtest. Stelle nur sicher, dass du immer deine Änderungen hochlädst, bevor du OSM schliesst.

Beobachte deine Änderungen auf der Karte
---------------------------

- Öffne deinen Internetbrowser und gehe zu [http://openstreetmap.org/](http://openstreetmap.org/)
- Bewege die Karte zu dem Bereich den du editiert hast.
- Du solltest deine Änderungen nun auf der Karte sehen! Falls nicht, versuche CTRL+R zu drücken um die Webseite neu zu laden. Manchmal aktualisiert sich die Karte nicht richtig und muss neu geladen werden.
- Was ist, wenn du deine Änderungen nicht siehst? Keine Sorge - es kann einige Minuten dauern, bis die Änderungen auf der Karte angezeigt werden. Außerdem kannst du noch mal in JOSM nachprüfen, dass du deine Änderungen richtig hinzugefügt hast. Eine gute Daumenregel ist: Wenn dein Punkt ein Icon in JOSM hat, dann sollte es auf der Karte auf der OpenStreetMap Webseite zu sehen sein.

OSM-Dateien speichern
----------------

- Manchmal, nachdem du OSM-Daten heruntergeladen hast, kann es sein, dass du die Daten speichern möchtest. So kannst du offline daran arbeiten und später hochladen, wenn du wieder über eine Internetverbindung verfügst.
- Um eine OSM-Datei zu speichern, stelle sicher, dass sie als aktive Ebene im Ebenenmenü ausgewählt ist. Klicke auf „Datei“ im oberen Menü und dann auf „Speichern“. Wähle einen Ort zum speichern und gib der Datei einen Namen. Du kannst auch speichern, indem du auf diesen Button drückst: ![]({{site.baseurl}}/images/EditingWithJOSM_html_m3d7a0a33_en.png)
- Nun kannst du JOSM schliessen und deine Daten werden gespeichert. Wenn du die Datei wieder öffnen möchtest, starte einfach JOSM, wähle „Datei“ und dann „Öffnen“.

Zusammenfassung
-------

Nun, da du gelernt hast, wie man Objekte zu OpenStreetMap hinzufügt, was kannst du als nächstes tun? Denk daran, dass OSM mit der Zeit immer besser wird. Jedes mal, wenn du die Karte etwas verbesserst, werden auch die Daten besser und besser. Und so wie du die Arbeit anderer Benutzer verbessern kannst, so können auch andere Benutzer deine Arbeit verbessern.

