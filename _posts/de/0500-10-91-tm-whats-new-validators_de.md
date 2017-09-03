---
layout: doc
permalink: /de/coordination/tm-whats-new-for-validators
lang: de
title: Was hat sich beim Validieren im Tasking Manager 3 geändert
category: coordination
date: 0500-10-21 12:00:00
---

# Was hat sich beim Validieren im Tasking Manager 3 geändert

> Diese Anleitung kann unter [tm3-news-for-validators_de.odt](/files/tm3-news-for-validators_de.odt) oder [tm3-news-for-validators_de.pdf](/files/tm3-news-for-validators_de.pdf) heruntergeladen werden  

## Ihr Benutzerprofil

Im Tasking Manager 3 gibt es einige Neuerungen für alle, die validieren möchten. **Als ersten Schritt im neuen Tasking Manager gehen Sie bitte zu Ihrem Benutzerprofil**. Sie finden es im Menü unter Ihrem Benutzernamen in der oberen rechten Ecke.

![profile][]

1. **E-Mail-Adresse** - Der Tasking Manager kann jetzt E-Mails versenden, wenn eine Nachricht für einen Benutzer eingegangen ist. Das ist sehr wichtig wenn man validiert. Es ist jetzt deutlich wahrscheinlicher, dass die Benutzer, deren Arbeit man überprüft, die an sie gerichteten Kommentare auch lesen. **Bitte tragen Sie auch Ihre E-Mail-Adresse in Ihrem Benutzerprofil ein**.

2. **Prüfer** - Projekte können wahlweise erfahrene Prüfer für die Validierung erfordern. Die Erfahrung beim Kartieren wird automatisch nach der Anzahl der Änderungssätze in OSM vergeben. Dagegen wird die Einstufung als "erfahrener Prüfer" derzeit von Projektmanagern vergeben. Wir haben mit einer sicher unvollständigen Liste begonnen. Wenn Sie diese Einstufung noch nicht haben, sich aber dazu berufen fühlen, dann wenden Sie sich bitte an einen Projektmanager, damit er Sie in die Liste aufnimmt. **Wichtig:** Diese Einstufung gilt für den gesamten Tasking Manager. Wir bitten deshalb alle Projektmanager, die Einstufung nur solchen Benutzern zu verleihen, deren Validierung sie selbst gesehen haben. Als Projektmanager sollten Sie davon überzeugt sein, dass der Prüfer jedes Projekt im Tasking Manager validieren kann.


## Die Validierung

### Schritt 1 - Auswahl einer Aufgabe

Validierung ist nur möglich, wenn Sie sich auf dem Reiter "Validierung" der Projektseite befinden. Hier stehen Ihnen drei Möglichkeiten zur Verfügung, wie Sie eine Aufgabe zur Validierung auswählen können.

![selection][]

1. **Wählen Sie eine einzelne Aufgabe** zur Validierung aus - Das funktioniert genau so wie in der vorherigen Version des Tasking Managers. Sie klicken auf eine Aufgabe oder wählen die Option "eine zufällige Aufgabe überprüfen" und klicken danach "Validierung beginnen" und starten Ihren Editor.

2. **Ein Gebiet auswählen** - Damit können Sie ein Polygon auf der Projektkarte zeichnen und damit alle Aufgaben innerhalb des Polygons auswählen, die überprüft werden können. Klicken Sie dann auf "Validierung beginnen" und alle diese Aufgaben werden für die Validierung gesperrt.

3. **Nach Benutzername auswählen** - Im linken Teil der Seite finden Sie eine Liste aller Benutzer, die zu diesem Projekt beigetragen haben sowie einige Informationen über sie. Sie können die Liste nach Spalten sortieren:

 - Stufe - basiert auf der Anzahl der OSM-Änderungssätze
 - Angemeldet - Seit wann arbeitet der Benutzer mit dem Tasking Manager
 - Letzte Validierung - Wann wurde zuletzt eine Aufgabe überprüft, die der Benutzer als vollständig bearbeitet markiert hatte.

Sperren - Wenn Sie die Maus über den "Start"-Link bewegen werden die Aufgaben hervorgehoben, die der Benutzer als vollständig bearbeitet gekennzeichnet hat. Ein Klick auf diesen Link sperrt alle für die Validierung.

### Schritt 2 - Validierung mehrerer Aufgaben

Wenn Sie eine einzelne Aufgabe auswählen und den Editor Ihrer Wahl starten, ändert sich nichts im Vergleich zur früheren Version des Tasking Managers. Unterschiede zeigen sich, wenn Sie mehrere Aufgaben ausgewählt haben und Ihren Editor starten.

Bei der Benutzung von iD ändert sich wenig. Der größte Unterschied liegt darin, dass Sie nicht nur die Begrenzung einer Aufgabe sehen, sondern mehrere Begrenzungen. Da iD nur die Daten der Bereiche herunterlädt, in die Sie hineingezoomt haben und auch mehrere GPX-Begrenzungslinien darstellen kann, ändert sich wenig an der Arbeitsweise. Sie haben nur mehrere Aufgaben im Tasking Manager gesperrt und haben eine größere Menge Daten zu bearbeiten. 

Bei der Benutzung von JOSM gibt es mehr Änderungen. Beim Start von JOSM werden zwei Datenebenen angelegt. Eine ist gegen Hochladen gesperrt und enthält die Begrenzungen der Aufgaben, die sie gesperrt haben. Die anderen ist eine leere editierbare OSM-Daten-Ebene. **Es werden keine Daten von OSM heruntergeladen**.

![multiple][]

Sie orientieren sich an den Begrenzungen der Aufgaben wenn Sie Daten in die editierbare Ebene herunterladen und validieren wie gewohnt.

Wenn Sie mit dem Validieren fertig sind, haben Sie die drei üblichen Möglichkeiten: als gültig markieren, als fehlerhaft markieren, Validieren beenden. Wenn Sie mehrere Aufgaben für die Validierung gesperrt haben, müssen Sie die gleiche Auswahl für alle treffen. Sie können nicht einige der Aufgaben als gültig markieren, andere als fehlerhaft.

Wenn Sie einzelne Aufgaben nach der Überprüfung unterschiedlich kennzeichnen wollen, checken Sie sie bitte einzeln aus um sie entsprechend zu markieren.


## Weitere Details rund um die Validierung

1. **Der Reiter Fragen und Kommentare** - Das ist ein neuer Reiter für Fragen und Anmerkungen zu dem ganzen Projekt. Prüfer sollten sich die Kommentare hier ansehen und falls erforderlich Fragen beantworten. Prüfer können diesen Reiter auch dazu verwenden, mit dem Link "Contact the Project Manager" Fragen oder Anmerkungen direkt an den Ersteller des Projekts zu richten.

2. **Zusammenfassung der aufgabenspezifischen Kommentare** - Wenn Sie auf "Aktivitäten und Statistik" in der oberen rechten Ecke der Projektseite klicken, sehen Sie im unteren Teil der dann erscheinenden Seite alle Kommentare, die Benutzer bei den einzelnen Aufgaben hinterlassen haben. Prüfer sollten auch auf diese Liste einen Blick werfen, um möglichen Problemen nachzugehen oder Fragen zu beantworten.

[profile]:   /images/coordination/tm3_wnv_profile.png
[selection]: /images/coordination/tm3_wnv_selection.png
[multiple]:  /images/coordination/tm3_wnv_multiple.png
