---
layout: doc
title: Tasking Manager 3
permalink: /de/coordination/tasking-manager3/
lang: de
category: coordination
---

# Tasking Manager 3

> Diese Anleitung kann unter [tasking-manager3_de.odt](/files/tasking-manager3_de.odt) oder [tasking-manager3_de.pdf](/files/tasking-manager3_de.pdf) heruntergeladen werden

**Diese Anleitung beschreibt die aktuelle Version des Tasking Managers. Wenn sich die Benutzeroberfläche der Version, die Sie benutzen, von der hier beschriebenen unterscheidet, lesen Sie bitte [das Handbuch zur vorherigen Version}/de/coordination/tasking-manager)**

Inhaltsverzeichnis
-------------
-  [Quick Start Guide](/en/coordination/tasking-manager3/#quick-start-guide)
-  [The Mapping Process](/en/coordination/tasking-manager3/#mapping-process)
    -  [Logging in](/en/coordination/tasking-manager3/#tasking-manager-login)
    -  [Options - language settings and user profile](/en/coordination/tasking-manager3/#options-amp-links)
    -  [Finding a Project - list based and using a map view, searching and filtering](/en/coordination/tasking-manager3/#finding-a-project---tasking-manager-contribute-screen)
    -  [Mapping a Task - select, work on and unlock a task](/en/coordination/tasking-manager3/#mapping-via-the-tasking-manager)
-  [Getting Help - live and contacting the project administrator](/en/coordination/tasking-manager3/#getting-help)
-  [Hints and Tips](/en/coordination/tasking-manager3/#editing-hints-and-tips)
-  [Validation](/en/coordination/tasking-manager3/#validation)

Der [HOT OSM Tasking Manager](http://tasks.hotosm.org) ist ein Werkzeug das die Kartierung eines bestimmten Gebiets in OpenStreetMap durch viele Leute koordiniert.

OpenStreetMap ist eine gemeinschaftlich von vielen Leuten erstellte freie Weltkarte. Jeder kann bei OpenStreetMap mitmachen um einen Teil der Welt, der ihn interessiert, zu kartographieren. Der Tasking Manager stellt nur eine Möglichkeit dar, wie man die Arbeit einer größeren Zahl von Menschen an OpenStreetMap koordinieren kann. Die meisten Beiträge zu OpenStreetMap stammen von Leuten, die den Tasking Manager nicht benutzen.

Der Tasking Manager ist ein eigenständiges Projekt und unabhängig von OpenStreetMap. Wenn sie mit dem Tasking Manager zu OpenStreetMap beitragen benutzen Sie eigentlich mehrere Softwarewerkzeuge:

* OpenStreetMap - Eine Datenbank mit geographischen Informationen
* Den Tasking Manager - Er hilft dabei, größere Mengen von Leuten die OpenStreetMap-Daten innerhalb des gleichen Gebiets bearbeiten, zu koordinieren
* Einen OpenStreetMap-Editor - Ein Programm, das Daten in die OpenStreetMap-Datenbank schreiben und aus ihr lesen kann.

![TM overview][]

Die Aufgabe des Tasking Managers besteht darin, ein bestimmtes Gebiet in kleine Bereiche aufgeteilt darzustellen. Diese Bereiche werden "Aufgaben" genannt. Der Tasking Manager ermöglicht es, einen dieser kleinen Bereiche für Sie auszuchecken oder zu sperren, während Sie mit einem OpenStreetMap-Editor daran arbeiten. Dadurch wird sichergestellt, dass niemand anderes währenddessen das gleiche Gebiet bearbeitet. Dadurch werden doppelte Erfassung und andere Fehler vermieden.

Wenn Sie mit der Kartierung so eines Bereiches fertig sind, halten Sie das im Tasking Manager fest und suchen sich hoffentlich eine andere Aufgabe zum Bearbeiten.


## Ein schneller Überblick

1. Erstellen Sie ein Benutzerkonto und melden Sie sich damit auf https://www.openstreetmap.org an
  ![TM Quick Start 1][]
2. Melden Sie sich auf [http://tasks.hotosm.org/](http://tasks.hotosm.org/) in der oberen rechten Ecke an.
  ![TM Quick Start 2][]
3. Klicken Sie auf "Beitragen" und suchen Sie sich ein Kartierungsprojekt, an dem Sie arbeiten möchten.
  ![TM Quick Start 3][]
4. Lesen Sie die Anweisungen zu dem Projekt
  ![TM Quick Start 4][]
5. Klicken Sie auf "Kartografieren"
  ![TM Quick Start 5][]
6. Finden Sie eine als "Bereit" gekennzeichnete Aufgabe und klicken Sie auf sie.
  ![TM Quick Start 6][]
7. Sie werden auf einen OpenStreetMap-Editor weitergeleitet und tragen alle Elemente ein, die in den Anweisungen gewünscht werden.
  ![TM Quick Start 7][]
8. Wenn Sie mit der Bearbeitung fertig sind, kehren Sie zum Tasking Manager zurück und klicken entweder auf "Als vollständig kartografiert markieren" wenn das der Fall ist oder auf "Kartografieren beenden" wenn Sie mit der Bearbeitung aus einem anderen Grund aufhören möchten.
  ![TM Quick Start 8][]


## Kartographierung im Detail

1. Ein Bearbeiter erstellt ein Benutzerkonto auf OpenStreetMap und meldet sich am Tasking Manager an.
1. Der Bearbeiter sucht ein Projekt, an dem er arbeiten möchte. Die Auswahl trifft er normalerweise nach der vom Projektmanager vorgegebenen Priorität und den erforderlichen Kenntnissen.
2. Ein Bearbeiter sucht sich eine Aufgabe, vervollständigt die Kartierung und kennzeichnet die Aufgabe als erledigt.
3. Ein zweiter Bearbeiter überprüft, dass die Bearbeitung weitgehend den Anforderungen entspricht und kennzeichnet die Aufgabe als 'überprüft'
4. Unter "Aktivitäten und Statistik" kann man den Bearbeitungsstand beobachten. Ein Administrator kann das Projekt niedriger priorisieren oder archivieren.

### Am Tasking Manager anmelden

Der Tasking Manager ist eine eigenständige Anwendung zur Koordination der Kartographierung in OpenStreetMap. Es greift aber auf die Benutzerverwaltung von OpenStreetMap zurück. Das bedeutet, dass Sie kein eigenes Benutzerkonto für den Tasking Manager anlegen müssen. Sie benötigen aber ein Benutzerkonto bei OpenStreetMap und Sie müssen sich dort anmelden, bevor Sie mit dem Tasking Manager arbeiten können.

Nach dem Start des Tasking Managers sehen Sie ein Knopf zum Anmelden in der oberen rechten Ecke des Bildschirms

![TM login 1][]

Wenn Sie auf diesen Knopf klicken, gelangen Sie auf die Webseite von OpenStreetMap. Dort müssen Sie sich anmelden und dem Tasking Manager Zugriff auf Ihre Einstellungen erlauben. Erstellen Sie dort ein Benutzerkonto, wenn Sie noch keines haben.

![TM login 2][]

![TM login 3][]

Sobald Sie sich bei OpenStreetMap angemeldet haben, werden Sie zum Tasking Manager weitergeleitet und ein Klick auf "Beitragen" oder "Kartografieren beginnen" bringt Sie zu einer Liste der verfügbaren Projekte.

### Einstellungen

Der Tasking Manager startet auf Englisch - um die Sprache zu ändern klicken Sie auf **English** in der oberen rechten Ecke des Bildschirms.

Sobald Sie angemeldet sind, können Sie auf Ihren Benutzernamen in der oberen Leiste klicken. Hier können Sie:

- Ihre Tasking Manager-Profil ansehen und dort:
    - Ihre e-Mail-Adresse und Namen in sozialen Netzwerken aktualisieren
     - Ihre Eingruppierung in eine Benutzergruppe sehen
     - Eine Liste und eine Karte der Projekte sehen, an denen Sie gearbeitet haben
 - Ihre **Nachrichten** im Tasking Manager sehen (dabei handelt es sich um ein anderes System als die Nachrichten bei OpenStreetMap)
 - sich abmelden

### Ein Projekt suchen - Die Ansicht "Beitragen" im Tasking Manager

Wenn Sie auf "Beitragen" im Hauptmenü klicken gelangen Sie zu der Liste der Projekte im Tasking Manager.

![TM contribute][]

Der Bildschirm besteht aus drei Bereichen:

- einer Suchfunktion und Filteroptionen links
- einer Projektliste
- einer Kartenansicht der Projekte

### Suche und Filteroptionen

Standardmäßig werden alle Projekte angezeigt, die zur Bearbeitung freigegeben sind. Sie können die Filteroptionen um diese Anzeige einzuschränken.

- Projektnummer - Wenn Sie die Nummer des Projekts kennen, an dem Sie arbeiten möchten, können Sie sie hier eingeben und Sie gelangen direkt zu dem Projekt.
- Organisation - Damit können Sie alle Projekte anzeigen, die von einer bestimmten Organisation initiiert wurden.
- Kartierungsschwierigkeit - Einige Projekte sind schwieriger zu bearbeiten als andere. Mit dieser Option können Sie die Projekte finden, die zu Ihrer Erfahrung passen. Als Anfänger sollten Sie besser nicht an Projekten arbeiten, die eine gewisse Erfahrung voraussetzen. Genauso fühlen sich erfahrene Benutzer in anspruchsvolleren Projekten wohler.
- Kartografierungstyp - Hier können Sie die Auswahl auf Projekte einschränken, in denen bestimmte Kartenelemente eingetragen werden sollen. Obwohl viele Projekte sich auf einen Typ von Elementen beschränken, gibt es auch Projekte, in denen mehrere Arten von Elementen einzutragen sind.
- Volltextsuche - Hier können Sie nach Projekte suchen, die den Suchtext in der Beschreibung enthalten.
- Kampagne - Projekte können mit Begriffen markiert sein, die auf eine größere Kampagne hinweisen, zu der das Projekt gehört. Die Auswahlbox präsentiert die verfügbaren Begriffe.

#### Kartenansicht
Wenn Sie auf "Kartenansicht" klicken, sehen Sie, wieviele Projekte es in einer Region gibt. Mit einem Doppelklick oder durch Hineinzoomen sehen Sie die einzelnen Projekte. Sobald sie hineingezoomt haben, erscheinen die Punkte auf der Karte farbcodiert. Rot bedeutet dringend, gelb steht für Projekte mittlerer oder hoher Priorität und grau kennzeichnet niedrige Priorität. Ein Klick auf einen der Punkte zeigt Informationen über das Projekt. Mit einem Klick auf den Titel des Projekts gelangen Sie zu dem Projekt.

![TM project map][]

### Kartographie mit dem Tasking Manager

Sobald Sie ein passendes Projekt gefunden haben klicken Sie auf den Projekttitel und Sie sehen den detaillierten Eintrag zu dem Projekt:

- Eine Beschreibung der Bedeutung des Projekts und wofür die Daten gebraucht werden
- Detaillierte Anweisungen was und wie kartiert werden soll
- Auswahlmöglichkeiten zur Kartierung bzw. Validierung
- Eine detaillierte Karte mit den einzelnen Aufgaben und ihrem jeweiligen Status
- Einen Reiter für Fragen und Kommentare zum dem Projekt

![TM project description][]



#### Das Projekt

Hier finden Sie Alles, was Sie über das Projekt wissen müssen! Oben steht eine ausführliche Beschreibung mit Hintergrundinformationen

Darunter ist der Bildschirm in zwei Bereiche aufgeteilt. Links befinden sich Reiter für "Anweisungen", "Kartieren", "Validieren" sowie "Fragen und Kommentare". Rechts sehen Sie eine Karte des Projektgebiets mit den einzelnen Aufgaben zur Bearbeitung.

- Die farblosen Aufgaben sind zum Kartieren verfügbar
- Rosafarbene Gebiete bezeichnen die Bereiche die mit Priorität bearbeitet werden sollten
- Gelbe oder goldfarbene Aufgaben sind in einem ersten Durchgang vollständig bearbeitet worden und bereit zur Validierung
- Ein gelber Rand markiert die Aufgabe, die Sie ausgewählt haben
- Blaue Aufgaben werden gerade von anderen Benutzern bearbeitet
- Grüne Aufgaben wurden in einem zweiten Durchgang als "überprüft" gekennzeichnet
- Dunkelgraue Aufgaben sind von einem Benutzer als ungeeignet gekennzeichnet worden, da die Qualität der Satellitenbilder hier nicht ausreicht
- Die blaue Linie am Rand kennzeichnet die Grenze des zu bearbeitenden Gebiets. Sie orientiert sich meist an verfügbaren Satellitenbildern, einer Verwaltungsgrenze und kann deshalb auch unregelmäßig geformt sein. Obwohl Sie auch Bereiche außerhalb bearbeiten können, ist das nicht erforderlich und wird nicht unbedingt bei der Überprüfung berücksichtigt.


#### Anweisungen
Hier steht, was in diesem Projekt bearbeitet werden soll. Projekte haben unterschiedliche Schwierigkeitsgrade - manche sind für Anfänger geeignet, manche erfordern etwas mehr Erfahrung und einige Projekte sollten nur von Bearbeitern mit umfangreicher Erfahrung angegangen werden. In den Anweisungen finden Sie dazu nähere Erläuterungen. Lesen Sie sich die Anweisungen sorgfältig durch und machen Sie sich klar, dass es viele unterschiedliche Herangehensweisen bei Projekten gibt, je nachdem wofür die Daten zunächst verwendet werden sollen. Häufig sollen diese Objekte eingetragen werden:

- Straßen und Pisten: die Daten werden vor Ort in GPS-Handgeräte übertragen und helfen dabei, abgelegene Gebiete zu erreichen
- Dörfer: dienen dazu, festzustellen, wo Menschen leben und von einer Katastrophe betroffen sein könnten
- Gebäude: dienen zur Schadensabschätzung, für Ausbreitungsvorhersagen von Seuchen und für die Abschätzung der Bevölkerungsdichte.
- Flüsse, Mauern, Zäune und weitere Details

In vielen Gegenden der Erde gelten andere Standards bezüglich Verkehrsnetzen oder Siedlungsstrukturen als bei Ihnen. Achten Sie deshalb besonders auf Hinweise, mit welchen Attributen die Objekte versehen werden sollen. So sehen Straßen in Afrika oft ganz anders aus als in Nordamerika oder Europa.

Sie sehen einen Abschnitt **Changeset Kommentar**. Übernehmen Sie bitte den Text in Ihren Editor, sobald Sie Ihre Änderungen hochladen bzw. speichern. Je nach Editor kann es erforderlich sein, das verwendete Hintergrundbild separat anzugeben.

Manchmal werden für ein Projekt eigene Hintergrundbilder zur Verfügung gestellt - es kann auch vorkommen, dass Sie zunächst den Lizenzbedingungen zustimmen müssen, bevor Sie darauf Zugriff bekommen. Die Anweisungen erläutern meistens auch den einfachsten Weg, diese Bilder in einen Editor wie JOSM oder iD zu laden.

Wenn Sie eine Aufgabe als vollständig bearbeitet markieren, erwarten Prüfer, dass Sie die Anforderungen aus den "Anweisungen" erfüllt haben. Vielleicht finden Sie, dass das ziemlich schwierig ist - weiter unten lernen Sie, wie Sie eine Aufgabe teilweise bearbeitet zurückgeben können und wie Sie dem nächsten Bearbeiter Hinweise geben können.

#### Aktivitäten und Statistik

Hier finden Sie Statistiken zu dem Projekt. Sie sehen sowohl eine detaillierte Liste aller Aktivitäten als auch eine Zusammenfassung

Die Zusammenfassung enthält eine Liste aller Benutzer, die mindestens eine Aufgabe aus dem Projekt als vollständig bearbeitet gekennzeichnet haben.

Unten auf der Seite sehen Sie alle Kommentare, die Benutzer zu den Aufgaben des Projekts gemacht haben. Bitte verwechseln Sie das nicht mit dem Reiter "Fragen und Kommentare", der allgemeine Fragen und Kommentare zu dem gesamten Projekt enthält.

Sie können zur Bearbeitungsseite des Projekts zurückkehren in dem Sie auf den Projekttitel klicken.

#### Kartenreiter

Klicken Sie auf die Karte, wenn Sie mit der Bearbeitung beginnen möchten. Sie können sich eine bestimmte Aufgabe aus der Karte suchen oder auf die Option "Eine zufällige Aufgabe auswählen" klicken. Sie haben hier nur Zugriff auf farblos dargestellte Aufgaben. Wenn Sie das nicht beachten, wird Sie eine Warnmeldung darauf hinweisen. Wenn Sie validieren möchten, wechseln Sie zum entsprechenden Reiter.

![TM map tab][]

#### Eine Aufgabe zur Bearbeitung auswählen

Sobald Sie eine Aufgabe ausgewählt haben, sehen Sie, was für Aktivitäten bisher stattgefunden haben. Beispielsweise hat ein Benutzer mit der Bearbeitung begonnen aber dann festgestellt, dass er nicht genug Zeit hat, um die Aufgabe vollständig zu bearbeiten.

Klicken Sie auf "Kartografieren beginnen" um die Aufgabe zu sperren, damit kein anderer Benutzer daran arbeiten kann. Die Sperre läuft bis zu 120 Minuten und wird dann automatisch aufgehoben. Es empfiehlt sich, regelmäßig nach der verbleibenden Zeit zu sehen - man ist schnell so in die Arbeit vertieft, dass man gar nicht mitbekommt, dass die Aufgabe bereits wieder freigegeben und danach von einem anderen Bearbeiter ausgewählt wurde, der jetzt ebenfalls Objekte einträgt. Das führt leicht zu Konflikten.


#### Womit bearbeiten

Sobald Sie eine Aufgabe für sich reserviert haben, stehen Ihnen verschiedene Möglichkeiten zur Auswahl.

##### Mit JOSM bearbeiten

Wenn Sie JOSM starten, bevor Sie diese Auswahl aktivieren, werden die bereits vorhandenen Daten automatisch in JOSM geladen.

> 1. 'Fernsteuerung aktivieren' muss dazu in JOSM unter **Bearbeiten / Einstellungen / Fernsteuerung** angekreuzt sein
> 2. Wenn Sie früher das “continuousDownload”-Plugin aktiviert haben sollten Sie besser den entsprechenden Menüeintrag im Datei-Menü deaktivieren
> 3. Wenn in JOSM die Hintergrundbilder nicht automatisch geladen werden, müssen Sie das manuell im **Hintergrundbild**-Menü erledigen [nähere Informationen dazu finden Sie hier](/de/josm/more-about-josm/#add-imagery)


##### iD-Editor

Wenn Sie diese Option wählen wird automatisch ein neuer Reiter bzw. ein neues Fenster Ihres Browsers geöffnet und die vorhandenen OSM-Daten geladen. Der Internet Explorer unterstützt derzeit iD nicht und startet stattdessen Potlatch 2. Ihr ursprünglicher Reiter bzw. Fenster mit dem Task Manager bleibt erhalten.


##### Potlatch 2

Der Editor startet in einem neuen Fenster bzw. Reiter. Potlatch zeigt nicht automatisch die Grenze des zu bearbeitenden Bereichs an. Sie können das manuell so nachholen:

1. Wählen Sie die Aufgabe im Tasking Manager aus und klicken Sie auf **Kartografieren beginnen** um sie zu sperren.
2. Wählen Sie "Mit JOSM bearbeiten" im Tasking Manager (sollte eine Mitteilung erscheinen, dass die JOSM-Fernsteuerung nicht antwortet klicken Sie einfach auf OK).
3. Unter dem Knopf zum Editieren mit JOSM gibt es einen Hinweistext, wo Sie die .gpx-Datei mit der Begrenzung der Aufgabe herunterladen können. Speichern Sie diese Datei auf Ihrem Rechner.
4. Im Tasking Manager wechseln Sie nun zu "Mit Potlatch 2 bearbeiten". Jetzt sollte sich Potlatch in einem neuen Fenster öffnen.
5. In Potlatch wählen Sie "Background", dann "Vector File..."
6. In dem entsprechenden Fenster klicken Sie auf "Open" am unteren Rand und laden Sie die vorhin heruntergeladene Datei.
7. Achten Sie darauf, dass im "Load Vector File"-Fenster das Kästchen in der "Show"-Spalte für die .gpx-Datei angeklickt ist und schließen Sie das Fenster.
8. Potlatch sollte jetzt die Begrenzung als Rechteck (wahrscheinlich türkisfarben) anzeigen. Beachten Sie, dass Potlatch trotzdem auch Daten außerhalb dieser Begrenzung lädt.


##### Field Papers

Benutzen Sie diese Option nur, wenn Sie an einem Projekt arbeiten, bei dem vor Ort Daten erfasst und in eine gedruckte Karte eingetragen wurden, z.B. Straßennamen. Diese Karte kann wieder eingescannt und als Hintergrundbild für weitere Bearbeitungen in OpenStreetMap verwendet werden, [siehe unter dem entsprechenden Abschnitt](/de/mobile-mapping/field-papers/).


#### Eine Aufgabe weiter aufteilen

Sie haben Ihre Aufgabe gewählt und einen ersten Blick auf das dahinter liegende Satellitenbild geworfen. Jetzt stellen Sie fest, dass eine große Menge Details eingetragen werden soll, beispielsweise Gebäude in dicht bebauten Gegenden oder kleine Dörfer auf einer großen Fläche. Eine Faustregel ist, dass Sie die Aufgabe in 4 kleinere Bereiche unterteilen sollen, wenn ein Bearbeiter die Aufgabe nicht innerhalb der Begrenzung von 2 Stunden erledigen kann. *Vorsicht* - wenn Aufgaben zu kleine Bereiche darstellen, ist es schwierig, zu beurteilen, in welche Kategorie eine Straße gehört. Auch flächenmäßig größere Objekte machen schnell Probleme.

> Beachten Sie außerdem, dass nützliche Kommentare vorhergehender Bearbeiter dann nicht mehr verfügbar sind.


#### Eine Aufgabe freigeben

![TM unlock][]

##### Eine Aufgabe vor der vollständigen Bearbeitung freigeben

Wenn Sie mit der Arbeit an einer Aufgabe beginnen, sie aber aus welchem Grund auch immer nicht fertigstellen können, sollten Sie einen Kommentar hinterlassen. Beschreiben Sie einfach, was noch zu erledigen ist und klicken Sie auf **Kartografieren beenden**. Ihre Kommentare sollten wertvolle Hinweise für den nächsten Bearbeiter darstellen. Schreiben Sie bitte wenn möglich auf Englisch - die Projekte werden von Leuten aus aller Welt bearbeitet.

Ein Beispiel:

    Almost complete, small village top left
    in the task square to be traced though


##### Eine Aufgabe nach der vollständigen Bearbeitung freigeben

Es ist sehr schwierig, sich wirklich sicher zu sein, dass man eine Aufgabe vollständig bearbeitet hat - es ist aber gute Praxis, sie als erledigt zu markieren, wenn man sich einigermaßen sicher ist - der Inhalt wird von einem anderen Bearbeiter überprüft werden, dabei ist immer noch Gelegenheit, Kleinigkeiten hinzuzufügen.

Um den Ablauf effizient zu gestalten, müssen Bearbeiter Aufgaben als erledigt markieren. Sonst verwenden mehrere andere Bearbeiter jeweils viel Zeit darauf, sie ebenfalls genau anzusehen.

Wenn Sie mit der Bearbeitung fertig und der Meinung sind, es ist alles getan, speichern Sie Ihre Arbeit in Ihrem Editor und kehren Sie zum Tasking Manager zurück.

+ Fügen Sie Kommentare in das vorgesehene Feld ein, was Sie gemacht haben und - wichtiger noch - wobei Sie sich nicht sicher sind. Z.B.: “Complete as far as I can see, but there is cloud covering the top right corner of the square & I cannot see to trace this area”.
+ Klicken Sie auf “Als vollständig kartografiert markieren” und Ihre Arbeit kann überprüft werden.

##### Eine Aufgabe kennzeichnen, dass sie schlechtes Bildmaterial enthält

Manchmal werden Sie eine Aufgabe auswählen, die nicht bearbeitet werden kann, da die Satellitenbilder eine zu geringe Auflösung haben oder alles von Wolken verdeckt ist. Schließen Sie die Aufgabe in Ihrem Editor und klicken Sie auf "Als schlechtes Bildmaterial markieren" im Tasking Manager.


#### Mit dem Kommentar eine Nachricht senden

Wenn Sie einen Kommentar zu einer Aufgabe schreiben, können Sie eine Nachricht an einen Benutzer senden. Schreiben Sie in Ihrem Text einfach ein @ gefolgt vom Benutzernamen, so ähnlich wie in Twitter. Dann wird eine Nachricht an den Benutzer gesendet mit Ihren Kommentaren und einem Link zu der Aufgabe, auf die sich die Kommentare beziehen.

Ein Beispiel:

    @HOTMppr nice work tracing the building
    details here. You missed a small group
    of houses on the upper left of the task square,
    I added a few in, but some still remain.

Das ist vor allem bei der Überprüfung der Arbeit anderer Bearbeiter nützlich - man kann so Anregungen geben oder sich einfach bedanken.

+ Sie können auch einen Link einfügen, um dem Bearbeiter zusätzliche Informationen zur Verfügung zu stellen, etwa <http://learnosm.org/en/coordination/remote-tracing/#buildings-walls-compounds-barriers>
+ Denken Sie daran - viele Leute aus allen Teilen der Welt arbeiten mit. Schreiben Sie also in einfachen klaren Worten. Sollten Sie Kommentare in einer Ihnen unbekannte Sprache lesen, versuchen Sie es mal mit Google Translate.


#### Auf eine bestimmte Aufgabe in einer E-Mail Bezug nehmen

Wenn Sie in einer E-Mail oder bei IRC jemand etwas zu einer bestimmten Aufgabe in einem bestimmten Projekt fragen möchten, z.B. weil Sie Hilfe zur Interpretation von Satellitenbildern benötigen, dann gehen Sie so vor:

1. Klicken Sie auf die betreffende Aufgabe
2. Klicken Sie in die Adressleiste Ihres Internet-Browsers. Dort sollte etwas ähnliches wie ‘http://tasks.hotosm.org/project/3454?task=1573’ stehen
3. Kopieren Sie diesen Text, meistens geht das mit **Ctrl+A** und **Ctrl+C**
4. Fügen Sie den Text in Ihre Nachricht ein,
     - entweder mit Ihrer Maus oder
     - oder mit **Ctrl+V**, und Sie erhalten einen Link.


## Hilfe

### Direkte Online-Hilfe

Im Task Manager:
1. Klicken Sie auf **OSM HOT IRC Channel #hot**
2. Geben Sie einen Benutzernamen ein (Ihren OSM-Benutzernamen?), oder übernehmen Sie die Voreinstellung
3. Als Channel wählen Sie am Ende der ausklappbaren Liste **hot**

- rechts sehen Sie eine Liste der aktuell angemeldeten Benutzer
- In die Zeile am unteren Bildschirmrand können Sie eine Nachricht tippen (manchmal wird sie durch anderen Text vorübergehend verdeckt, aber der verschwindet, wenn Sie die Zeile anklicken). Bitte stellen Sie Ihre Fragen möglichst auf Englisch - es ist nicht sicher, dass unter den anwesenden Benutzern jemand ist, der deutsch spricht.
- Wenn Sie mit einer Nachricht jemand direkt ansprechen möchten, so erwähnen Sie seinen Benutzernamen in der Nachricht. Sobald Sie die Return-Taste drücken, wird Ihre Nachricht abgeschickt. Nachrichten werden ohne Verzögerung weitergeleitet, Sie können also auf eine Antwort warten - oft wird Ihr Benutzername in der Antwort auftauchen, um Ihnen zu signalisieren, dass das eine Antwort auf Ihre Nachricht ist. Typischerweise erhalten Sie innerhalb von Sekunden eine Antwort, also bleiben Sie dran.
- Eine einfach zu bedienende Alternative finden Sie unter [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)
- Weitere Informationen über die Benutzung von IRC im Zusammenhang mit OpenStreetMap finden Sie (nur auf Englisch) unter [OSM Wiki IRC]()
- Sie können auch jedes andere IRC-Programm benutzen (Server=irc.oftc.net, channel=#hot)

### Fragen und Kommentare zum Projekt, den Ersteller des Projekts kontaktieren

Im Reiter "Kommentare" des Projekts sehen Sie die Fragen und Bemerkungen anderer Benutzer. Hier können Sie auch eigene Fragen stellen. Sie können auch auf "den Projektmanager benachrichtigen" klicken und Ihre Frage oder Bemerkung geht direkt an den Ersteller des Projekts.

Alle Kommentare sind öffentlich sichtbar und werden nicht in Echtzeit bearbeitet.

![TM comments][]


## Tipps und Tricks zur Bearbeitung

Soweit haben Sie schon ein gutes Verständnis, worum es sich beim Task Manager handelt. Sie kennen auch bereits einige seiner Funktionen. Im Gegensatz zum normalen Editieren wird dieses Werkzeug häufig für zeitkritische Projekte mit vielen Teilnehmern verwendet - deshalb sind manche Vorgehensweisen etwas anders, als Sie es vielleicht gewohnt sind.

Beachten Sie deshalb bitte diese allgemeinen Hinweise:

* Vermeiden Sie Bearbeitungen außerhalb Ihrer Aufgabe - jemand anders könnte dort gerade editieren, was zu Duplikaten führt. Sie sollten sich um Objekte kümmern, die auf dem Rand liegen (jemand muss es schließlich tun) aber bearbeiten Sie keine Objekte, die vollständig außerhalb Ihrer Aufgabe liegen.
* Wenn Sie Wege, Wasserläufe oder ähnliche Objekte eintragen, zeichnen Sie sie etwas über den Rand der Aufgabe hinaus - dann kann der Bearbeiter der benachbarten Aufgabe “den Faden aufnehmen”.
* Wenn Sie sich über den Charakter eines Objekts nicht im klaren sind, benutzen Sie die Changeset-Kommentare um Fragen zu stellen oder sehen Sie im Wiki nach.
* Wenn Ihnen ein Malheur passiert ist - Sie haben z.B. ein komplexeres Objekt oder eine Relation gelöscht - bitten Sie mit einem Änderungssatz-Kommentar andere Bearbeiter um Hilfe beim Annullieren Ihrer Änderung. Geben Sie die Nummer des Änderungssatzes an und eine Beschreibung, was passiert ist. An HOT-Projekten arbeiten viele Leute mit, darunter sind sicher einige, die Ihnen helfen können - jeder macht schließlich einmal einen Fehler. Schneller geht es vermutlich, wenn Sie sich an die Mailing-Liste zu HOT wenden oder im IRC nachfragen. Sollten Sie in so einem Fall Wert auf deutsch sprechende Ansprechpartner legen, es gibt zu OpenStreetMap allgemein auch eine [deutsche Mailing-Liste] (http://lists.openstreetmap.org/listinfo/talk-de).-
* Zögern Sie nicht, um Rückmeldung durch Überprüfung zu bitten - manche Prüfer mögen ein wenig grob klingen oder Fehler sehr direkt ansprechen. Aber wenn sie merken, dass Sie offen sind für Kommentare, lernen nicht selten beide Seiten dazu.
* Überprüfen Sie niemals Ihre eigene Arbeit - ein zweites Paar Augen findet oft Dinge, die Sie übersehen haben. Dadurch steigt die Qualität unserer Arbeit.
* Haben Sie keine Angst, wenn andere Bearbeiter etwas unfreundlich klingen, wenn sie Ihre Arbeit prüfen - alle wollen genau wie Sie sicherstellen, dass die Realität bestmöglich in den Daten abgebildet wird. Deren Kommentare helfen auch Ihnen bei der zukünftigen Arbeit und sind nicht als Kritik an Ihren bisherigen Beiträgen zu verstehen.


## Validierung

Bei der Validierung geht es darum, dass ein zweiter Bearbeiter einer Aufgabe die Arbeit es ersten überprüft. Damit sollen die Vollständigkeit und Qualität der Daten sichergestellt werden. Außerdem kann man so den Benutzern danken, Ihnen Rückmeldungen geben und sie zum Weitermachen ermuntern.

### Erste Schritte

Beim Validieren beginnt man im Prinzip genauso wie beim Kartieren: ein Benutzer sucht ein Projekt, an dem er arbeiten möchte, liest die Anweisungen, macht sich klar, dass er verstanden hat, worauf es bei der Aufgabe ankommt. Dann geht er aber nicht zum Reiter "Kartografieren" sondern zum Reiter "Validieren".

![TM select for validation][]

Der Prüfer kann eine Aufgabe durch Anklicken auswählen, die Option "Validiere eine beliebige Aufgabe" anklicken oder ein Polygon zeichnen, um mehrere verbundene Aufgaben auszuwählen.

Im Gegensatz zum Kartieren ist das beim Validieren möglich, um Überprüfungen auf einer größeren Skala durchführen zu können.

### Mehrere Aufgaben zur Überprüfung auswählen

Die Möglichkeit, mehrere Aufgaben entweder nach Geometrie oder nach Benutzer auswählen zu können, ist erst in dieser Version des Tasking Managers dazugekommen.

Je nach verwendetem Editor gestaltet sich das weitere Vorgehen unterschiedlich.

In JOSM wird eine zweite Datenebene mit dem Titel "Task Boundaries - Do Not Edit or Upload" erzeugt und in neueren JOSM-Versionen gegen Hochladen gesperrt. JOSM **lädt die OSM-Daten nicht herunter** da es sich dabei um eine sehr große Datenmenge handeln kann. Der Prüfer muss sich an den Begrenzungen der Aufgaben orientieren und selbst die Daten in die aktive Bearbeitungsebene laden.

#### Auswahl über ein Polygon

Mit dieser Option kann der Prüfer eine Begrenzung um mehrere Aufgaben zeichnen und sie alle auf einmal sperren.

Im Editor seiner Wahl **muss der Prüfer die OSM-Daten selbst herunterladen**. Damit wird verhindert, dass auch alle Daten, die in Bereichen zwischen den Aufgaben liegen, heruntergeladen werden.


#### Auswahl nach Benutzer

Sie sehen eine Liste aller Benutzer, die eine Aufgabe als vollständig bearbeitet markiert haben. Wenn Sie die Maus über einen Benutzernamen bewegen, werden die von ihm gekennzeichneten Aufgaben hervorgehoben. Darüberhinaus enthält die Liste noch drei wichtige Informationen über den Benutzer: seine Erfahrung, die Anzahl Tage seit er mit dem Tasking Manager zu Arbeiten begann und die Anzahl Tage seit er das letzte Mal bei einer Validierung eine Rückmeldung bekam. Dadurch kann ein Prüfer gezielt nach neuen Bearbeitern suchen, nach erfahrenen Bearbeitern oder nach denjenigen, die schon länger keine Rückmeldung mehr erhalten haben.

Mit einem Klick auf "Validierung beginnen" werden alle Aufgaben, die ausgewählt wurden, gesperrt. Der Prüfer kann sie jetzt im Editor seiner Wahl öffnen.

![TM multi selection][]

Im Editor seiner Wahl **muss der Prüfer die OSM-Daten selbst herunterladen**. Damit wird verhindert, dass auch alle Daten, die in Bereichen zwischen den Aufgaben liegen, heruntergeladen werden.

### Die Validierung abschließen

Sobald der Prüfer mit der Validierung fertig ist, sollte er im Tasking Manager eine dieser drei Möglichkeiten auswählen:

- Validierung beenden - Wenn Sie vor der vollständigen Prüfung aufhören müssen
- Als gültig kennzeichnen - Wenn die Kartierung vollständig und genau erfolgte
- Als ungültig kennzeichnen - Wenn die Kartierung unvollständig oder ungenau erfolgte

Bei den letzten beiden Möglichkeiten kann und soll der Prüfer einen freundlichen und aufmunternden Kommentar an den betreffenden Benutzer schreiben in dem er ihm für seinen Beitrag dankt und ihn über seine Fehler aufklärt. Bitte denken Sie zweimal nach, bevor Sie eine Aufgabe als ungültig markieren. Wenn nur wenig fehlt dann tragen Sie das bitte selbst ein, erklären das in einem Kommentar aber markieren die Aufgabe als gültig. Neue Benutzer dürften es als Ohrfeige empfinden, wenn eine von ihnen beendete Aufgabe als ungültig markiert wird.




[TM overview]: /images/coordination/tasking_manager_overview.png
[TM Quick Start 1]: /images/coordination/tasking_manager_qs1.png
[TM Quick Start 2]: /images/coordination/tasking_manager_qs2.png
[TM Quick Start 3]: /images/coordination/tasking_manager_qs3.png
[TM Quick Start 4]: /images/coordination/tasking_manager_qs4.png
[TM Quick Start 5]: /images/coordination/tasking_manager_qs5.png
[TM Quick Start 6]: /images/coordination/tasking_manager_qs6.png
[TM Quick Start 7]: /images/coordination/tasking_manager_qs7.png
[TM Quick Start 8]: /images/coordination/tasking_manager_qs8.png
[TM login 1]: /images/coordination/tasking_manager_login1.png
[TM login 2]: /images/coordination/tasking_manager_login2.png
[TM login 3]: /images/coordination/tasking_manager_login3.png
[TM contribute]: /images/coordination/tasking_manager_contribute.png
[TM map tab]: /images/coordination/tasking_manager_map_tab.png
[TM unlock]: /images/coordination/tasking_manager_unlock_task.png
[TM project map]: /images/coordination/tasking_manager_project_map.png
[TM project description]: /images/coordination/tasking_manager_project_description.png
[TM comments]: /images/coordination/tasking_manager_comments.png
[TM task selection]: /images/coordination/tasking_manager_task_selection.png
[TM select for validation]: /images/coordination/tasking_manager_validation_selection.png
[TM multi selection]: /images/coordination/tasking_manager_multi_selection.png
