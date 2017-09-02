---
layout: doc
title: JOSM Konflikt Behebung
permalink: /de/josm/josm-conflict-resolution/
lang: de
category: josm
---

JOSM Konflikt Behebung
====================

> Diese Anleitungen kann heruntergeladen werden als [josm-conflict-resolution_en.odt](/files/josm-conflict-resolution_en.odt) oder [josm-conflict-resolution_en.pdf](/files/josm-conflict-resolution_en.pdf)  
> Gereviewt am 2016-09-27  

Wenn man mit JOSM arbeitet bekommt man manchmal, wenn man seine Änderungen hochlädt, eine Nachricht über Konflikte.  
![conflict detected][]  
Folgendes ist passiert, man hat einen Node A zusammen mit anderen Daten heruntergeladen. Während man editiert, hat jemand anderes ebenfalls Node A heruntergeladen, geändert und auf OpenStreetMap gespeichert. Wenn man nun seine Version von Node A hochlädt, ist diese anders, als die gespeicherte in OSM. JOSM weis nun nicht, welche Version von Node A gespeichert werden soll.  

Konflikte
----------

Manchmal kann JOSM Konflikte selbst lösen und zeigt eine Nachricht ähnlich der folgenden an:  
![resolved automatically][]  
Das bedeutet, dass JOSM automatisch entschieden hat Teile des lokalen Datensatzes nicht zum Hauptserver hochzuladen, da diese bereits durch einen anderen Benutzer gelöscht wurden. Bei manchen Konflikten gibt es keine einfachen Entscheidungen für JOSM und dem Benutzer wird die Entscheidung überlassen, was zu tun ist. Das bedeutet man muss den Konflikt selbst lösen.  

Das zeigt, dass man all seine Konflikte im Layer 1 selbst anschauen muss, in der ""Dialog Liste** Box:  
![warning unresolved][]  

Dieses Fenster zeigt eine Warnung an, dass man wahrscheinlich einen Konflikt mit seinen Änderungen auslöst. Wenn man auf dem Server gegenprüft, kann man das Bearbeitungsproblem lösen, das ansonsten auftritt:  
![check on server][]  

Diese Warnung bedeutet, dass JOSM eine Node nicht löschen konnte, da sie immer noch durch einen Weg verwendet wird. Um hier Abhilfe zu schaffen, muss man zurück in JOSM gehen und den Konflikt beheben, bevor man die Daten hochlädt:  
![still in use][]  

Konflikt Behebung
--------------------

der Prozess zur Behebung eines Konfliktes in JOSM ist relativ einfach, auch wenn es im Ersten Moment verwirrend erscheint. Allgemein bietet JOSM für jeden Konflikt zwei Auswahlmöglichkeiten an - die eigenen Version eines Objekts oder die auf dem Server. Man entscheidet sich, ob die eigene Version oder die neue Version auf dem Server behalten werden soll.  
Man denkt ""natürlich ist meine Version besser! und liegt vielleicht richtig. Aber man bedenke das Beispiel vom Beginn dieses Kapitels. Vielleicht hat ein anderer Mapper viele Informationen zu einem Node in unserem Datensatz hinzugefügt während wir editiert haben. Wenn man seine Version gegen der anderen vorzieht, verliert man all die wertvollen Informationen die hinzugefügt wurden. Man sollte also in Betracht ziehen die andere Version zu behalten oder mit der eigenen zu verschmelzen.  
Falls man ein Konfliktfenster bekommt sollte man den Button "Nur Synchronisieren ..." wählen. Man muss dies gegebenenfalls für mehr als ein Objekt machen, aber man sollte immer einen Konflikt nach dem anderen lösen.  
![synchronize node][]  
Klickt man diesen Button, erscheint ein Popup Fenster, das den Konflikt genauer beschreibt. Die Fehlermeldung mag kompliziert erscheinen, ist aber meist einfach. Man erkennt die Art des Konflikts durch das rote Quadratsymbol im oberen Tab. Der Konflikt im nachfolgenden Beispiel bezieht sich auf die Eigenschaften, wie den Standort und die Existenz des Objektes. Deshalb sind Koordinaten und Löschstatus aufgeführt.  

**Konfliktarten:**

- **Eigenschaften:** Objekt wurde verschoben (Koordinaten) oder gelöscht  
- **Tags:**  Tags passen nicht  
- **Nodes:**  Zwei Wege haben eine unterschiedliche Anzahl an Nodes  
- **Mitglieder:** Eine Relation hat eine unterschiedliche Anzahl an Mitgliedern  
![properties with conflicts][]  

Konflikte erscheinen nur bei zwei unterschiedlichen Bearbeitungen zur gleichen Zeit. Falls drei oder mehr Konflikte auftreten, erscheint eine Kette von Konfliktmeldungen. Man wählt oder vereint immer nur zwei Konflikte zur gleichen Zeit. Man wählt seine Version, die andere oder zeitweise die Vereinigung beider.  

Im nachfolgenden Beispiel hat man nicht die Möglichkeit zum Vereinen. Man klickt auf die erste Spalte oder Meine Version, wenn man meint, dass seine Bearbeitungen korrekt sind. Man klickt auf Andere Version, wenn man meint, dass diese Bearbeitungen besser sind.  
![conflicts resolved][]  

Sobald man die nach eigener Meinung bessere Version ausgewählt hat, klickt man "Lösung anwenden". Weitere Fenster erscheinen und man kommt seinem Ziel seine Bearbeitungen hochzuladen näher. Nach weiteren Änderungen klickt man 'Hochladen'. Ein Fenster erscheint:  
![command stack][]  

Im Fenstermenü hat man einen Dialog mit gelisteten Konflikten. Die Anzahl der ungelösten Konflikte wird im Kopf angezeigt. Man kann einen Konflikt durch anklicken auswählen oder lösen. Das ist nützlich, wenn man mit mehreren Konflikten umgehen muss.  
![one unresolved][]  
Man kann seine Änderungen nicht hochladen solange Konflikte in der Liste angezeigt werden.  

Wege Konflikte zu vermeiden
------------------------

### Regelmäßig hochladen

Um das Risiko und die Anzahl von Konflikten zu verkleinern, ist es wichtig regelmäßig seine Bearbeitungen hochzuladen. Konflikte treten häufiger auf bei denen, die ein Gebiet bearbeiten, auf dem lokalen Server speichern und mit dem Hochladen eine Weile warten. Man sollte am Besten ein Gebiet an dem man arbeitet herunterladen, es bearbeiten und direkt wieder hochladen. Je mehr Zeit zwischen Herunterladen und Hochladen der Änderungen vergeht, umso wahrscheinlicher ist es, dass jemand anders etwas in der Zwischenzeit bearbeitet hat. Wenn man an einem Mapathon teilnimmt und Kartenelemente wie eine Straße bearbeitet, die auch von anderen bearbeitet werden kann, sollte man regelmäßig hochladen, vielleicht so nach 6 Änderungen!  

### Änderungen im heruntergeladenen Gebiet

Bearbeitungen in dem Gebiet, das man heruntergeladen hat verringern Konfliktrisiken. Man sollte nicht außerhalb des Gebiets, das man heruntergeladen hat bearbeiten. Man sieht in JOSM leicht, welche Gebiete außerhalb des heruntergeladenen Gebiets sind, da der Hintergrund aus diagonalen Linien besteht, anstatt aus durchgehendem Schwarz.  

![edit outside area][]  

Zusammenfassung
--------
Wenn man mit JOSM arbeitet, kann man in Konflikte laufen. Konflikte passieren, wenn ein Objekt durch ein oder mehrere Personen zur gleichen Zeit bearbeitet wird. Indem man versteht, was ein Konflikt ist und wie man damit umgeht stellt man sicher, dass die bestmöglichsten Änderungen in OpenStreetMap gespeichert werden.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
# # Anhang. Mehr spezifische Konflikte

### Tag Konflikte

Falls die Tags einer Version eines Objekts sich unterscheiden von
einer anderen Version, zeigt der Konfliktdialog ein ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png) in
dem Tags Tab. Man klick auf den Tab, um einen Dialog anzuzeigen, zum Lösen des Tag
Konflikts.

Es werden drei Tabellen angezeigt in diesem Dialog, von links nach rechts:

1. Meine Version: zeigt die Tags der ersten beteiligten Objektversion
    in diesem Konflikt. Das sind in der Regel die Tags der Objektversion
    im lokalen Datensatz.
2. Vereinigte Version: zeigt die vereinigten Tags. Diese Tabelle ist anfangs
    leer. Je mehr Tag Konflikte man löst, umso mehr Tagwerte werden
    in der Tabelle angezeigt.
3. Andere Version: zeigt die Tags der zweiten Objektversion
    die an diesem Konflikt beteiligt ist. Das sind in der Regel die Tags der
    auf dem Server gespeicherten Objektversion.

Im folgenden Beispiel haben beide Versionen ein Tag "name". Die Werte in den
beiden Objektversionen sind unterschiedlich, deshalb zeigt JOSM
die Zeile mit rotem Hintergrund. Der Wert der ersten Version ist
"Secondary School", die andere Version hat den Wert "Elementary
School". Man muss nun entscheiden welchen der Werte man behalten möchte
und welchen man verwerfen möchte.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Man klickt auf den Wert, den man behalten möchte, im Beispiel auf den
linken Wert. Wenn man entweder auf den Wert doppelt klickt oder auf
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), entscheidet man sich den Wert zu behalten und zuverwerfen
den andern Wert. Die Tabelle in der Mitte zeigt nun den zu behaltenen Wert
und die Hintergrundfarbe wird grün.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

Falls der Button Lösung anwenden aktiviert ist, kann man seine Entscheidung umsetzen.
Die ausgewählten Werte werden angewandt und der Dialog geschlossen.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Unterschiede in den Nodelisten von 2 Versionen eines Weges

Sieht man das Symbol ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png) im Tab Nodes dann 
muss man Unterschiede lösen in den Listen der
[Nodes](http://josm.openstreetmap.de/wiki/Help/Concepts/Object) von zwei
[Wegen](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). Dort
gibt es drei Spalte in der entsprechenden Leiste (siehe Bildschirmfoto unten):

1. die linke Tabelle zeigt die Nodeliste der lokalen
    Objektversion
2. die rechte Tabelle zeigt die Nodeliste des Servers
    Objektversion
3. die mittlere Tabelle zeigt die Nodeliste des vereinigten Weges.

Am Anfang ist die mittlere Tabelle leer. Man entscheidet nun welche Nodes
des lokalen Datensatzes (die linke Tabelle) man behalten möchte und welche des
Server Datensatzes (der rechten Tabelle).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### Das Standard Vorgehen

Das Standard Vorgehen, um Konflikte zu lösen in der Nodeliste zweier
[Objekt
Versionen](http://josm.openstreetmap.de/wiki/Help/Concepts/Object) besteht
aus drei Schritten:

1. Man nimmt Nodes von jeder Objektversion und sortiert die gesammelten Node
    Liste falls notwendig
2. Fixiere die gesammelte, vereinte Nodeliste durch klicken auf den Button
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). Wenn man die vereinigte Nodeliste fixiert, 
    sagt man JOSM, dass alle Konflikte in der Nodeliste gelöst sind.
3. Lösung anwenden

### Einfaches Vorgehen: Behalte die Nodeliste der lokalen Objektversion

Das folgende Beispiel zeigt das Vorgehen, wenn man sich dazu entschließt alle Nodes in der gleichen Reihenfolge der lokalen Objektversion zu behalten.

-  Als erstes, alle Elemente in der linken Tabelle selektieren (durch Verwendung der Maus oder durch 
    drücken von Strg-A in der Tabelle) (siehe nächstes Bildschirmfoto):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

- Dann klickt man 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    um die ausgewählten Nodes in die mittlere Tabelle mit den vereinigten Nodes zu kopieren:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

- Letztendlich klickt man
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    um die vereinigte Nodeliste zu fixieren:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    Das Symbol im Nodes Tab hat sich geändert zu 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    und man kann die Entscheidungen zum Vereinigen anwenden.

### Unterstützung beim Vergleich von Nodelisten

Es kann schwierig sein die Unterschiede in den Nodelisten von zwei Objektversionen zu finden, besonders bei Wegen mit vielen Nodes.

Der Konfliktdialog unterstützt einen beim Finden der Unterschiede. Es kann die beiden angezeigten Nodelisten vergleichen ("meine" Nodeliste, die vereinigte Nodeliste und die "andere" Nodeliste) und es kann die Unterschiede zwischen ihnen mit unterschiedlichen Hintergrundfarben anzeigen.

Im folgenden Kombinationsfeld kann man auswählen, welches Paar Nodelisten man vergleichen möchte:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1. Meine mit der Anderen: Vergleicht die linke Tabelle mit der rechten Tabelle
    im Konfliktdialog
2. Meine mit der Vereinigten: Vergleicht die linke Tabelle mit der mittleren Tabelle im
    Konfliktdialog
3. Die Andere mit der Vereinigten: Vergleicht die mittlere Tabelle mit der rechten Tabelle
    im Konfliktdialog

Abhängig von der Position eines Nodes in der Liste werden unterschiedliche Hintergrund
Farben verwendet:

1. Die Node ist nur in dieser Liste vorhanden. Sie ist nicht in der anderen Liste vorhanden:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2. Die Node ist in beiden Listen vorhanden, aber an unterschiedlichen Positionen:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3. Ein weißer Hintergrund bedeutet, dass eine Node in beiden Listen vorhanden ist, an der selben
    Position.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png