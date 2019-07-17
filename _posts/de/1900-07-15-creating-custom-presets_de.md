---
layout: doc
title: JOSM - Maßgeschneiderte Vorlagen erstellen
permalink: /de/josm/creating-presets/
lang: de
category: josm
---

JOSM - Maßgeschneiderte Vorlagen erstellen
=======================


Im [vorherigen Kapitel](/de/josm/josm-presets) haben wir uns angeschaut, wie angepasste Vorlagenmenüs in JOSM hinzugefügt werden können. In diesem Kapitel werden wir behandeln, wie man eigene maßgeschneiderte Vorlagendateien erstellt.  

WARNUNG! Das ist ein fortgeschrittenes Thema ... man sei gewarnt!  

Einführung in XML
-------------------

Um unser eigenes Vorlagenmenü zu erstellen müssen wir erst eine Sprache namens XML verstehen. Falls man bereits XML kennt, kann man zum nächsten Kapitel springen.  

XML steht für "Extensible Mark-up Language" und ist eine Computersprache ähnlich HTML. Der wichtigste Unterschied ist, dass XML dazu designt wurde Daten zu übertragen und nicht sie darzustellen. Viele Anwendungen im Internet verwenden XML zur Datenübertragung, einschließlich OpenStreetMap. XML verwendet Elemente und jedes Element kann Kindelemente enthalten. Man stellt sich vor, man wolle eine XML Datei erstellen, die ein Menü eines Restaurants beinhaltet. Man muss ein Wurzel-Element (root) erstellen, das alle Daten unseres Menüs beinhaltet. Unser Wurzelelement wird ein öffnendes und ein schließendes Tag haben, wie folgt:

      <menu>
      ... Daten welche man im Menü haben möchte ...
      </menu>

Informationen sind in in einem Element beinhaltet und in jedem Element können weitere Elemente beinhaltet sein.  

      <menu>
        <item name=“Hamburger”>
          <cost>400</cost>
          <description>Delicious beef patty</description>
        </item>
          <item name=“Nasi Goreng”>
          <cost>200</cost>
          <description>Indonesian Fried Rice</description>
        </item>
      </menu>

In diesem Beispiel haben wir zwei &lt;item&gt; Elemente in unser &lt;menu&gt; Element eingebaut um zwei unterschiedliche Items, welche im Menü enthalten sind, zu beschreiben. Jedes Item beinhaltet zwei weitere Elemente, &lt;cost&gt; und &lt;description&gt;. Man sieht, dass wir name="Hamburger" in unseren öffnenden &lt;item&gt; Tag geschrieben haben. Das nennt man Attribut und fügt Informationen über das Element hinzu.


### XML Terminologie

- **Wurzelelement:** das äußerste Element eines XML Dokumentes, es beschreibt was beinhaltet ist  
- **Element:** ein beliebiges XML Objekt innerhalb eines öffnenden und schließenden Tags, wie &lt;item&gt; ... data ... &lt;/item&gt;  
- **Tag:** Etwas in Klammern, wobei &lt;item&gt;. &lt;item&gt; ein öffnendes Tag eines Elements ist und &lt;/item&gt; ein schließendes Tag. Bitte nicht mit OSM Tags verwechseln, welche eine andere Bedeutung haben.  
- **Attribute:** Eine Information innerhalb eines Tag, wie z.B. name="Hamburger"  

XML zu verwenden um Daten zu halten und zu übermitteln funktioniert wunderbar, da es für Computer und Menschen leicht verständlich ist.  


JOSM Vorlagendateien
-------------------

Fügen wir eine Beispielvorlage in JOSM ein und analysieren wir, wie es funktioniert.  

- Man lädt folgende Datei herunter [sample_presets.xml](/files/sample_presets.xml).  
- Dann lädt man sie in JOSM wie beschrieben im [vorherigen Kapitel](/de/josm/josm-presets).  
- Man erstellt ein neues Layer und ein neues Objekt.  
- Man öffnet das Vorlagenmenü. Dort existiert ein neuer Eintrag "Sample Building". Man klickt es an.  

![sample building menu][]

Das erscheinende Formular hat drei Felder und jedes akzeptiert unterschiedliche Eingaben. Das erste Feld, building name (Gebäudename), akzeptiert Text als Eingabe. Das zweite, building use (Gebäudenutzung), hat ein Auswahlmenü. Das letzte ist ein Auswahlkästchen, was bedeutet, dass es nur eines der beiden Werte An oder Aus haben kann.

![sample presets form][]

Nun schauen wir uns die XML Datei an, die das Vorlageformular definiert.

- Man sucht die XML Datei auf dem Computer und öffnet es mit einem Texteditor. Verwendet man Windows kann man Notepad verwenden. Möchte man einen benutzerfreundlichen Editor verwenden, kann man den freien Notepad++ herunterladen.  
- Die **sample_presets.xml** Datei sieht wie folgt aus:  

![sample presets file][]

Wir ignorieren die ersten sechs und die letze Linie vorerst und konzentrieren uns auf alles zwischen den &lt;item&gt; Tags.

Die erste Zeile sieht so aus:

      <item name="Sample Building" type="node,closedway">

Dies ist der öffnende Tag eines Eintrags, der zum Menü hinzugefügt wird. Es hat zwei Attribute, name und type. Der Name definiert, wie es im Vorlagenmenü erscheinen wird. Der Typ beschränkt die Vorlage auf spezifische Objekttypen. In diesem Fall kann die Vorlage nur auf Punkte und Umrisse angewandt werden - in anderen Werten auf Nodes und geschlossene Wege. Versucht man diese Vorlage auf eine Linie anzuwenden, funktioniert es nicht.  

Schauen wir auf die nächste Zeile:  

      <label text="Building Form" />

Klickt man auf das Menü und öffnet das Beispielformular, sieht man oben den Text "Building Form". Das ist der in diese Zeile definierte Text. Dies definiert ein &lt;label&gt; Element,  welches einfach Text im Formular anzeigt. Der Text ist durch das Attribut *text="some text"* definiert.  

Ein paar Zeilen weiter unten findet man:  

      <key key="building" value="yes" />

Das ist einer der Rags, der dem selektierten Objekt zugeordnet wird. Weil es das Element &lt;key&gt; verwendet, wir der hier verwendete OSM Tag automatisch zugeordnet, wenn die Vorlage ausgewählt wird. Das Objekt wird automatisch den Tag *building=yes* bekommen.  

Die nächste Zeile verwendet das &lt;text&gt; Element auf eine andere Art.  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

Das &lt;text&gt; Element erstellt ein leeres Feld. Wenn das Formular in JOSM aufgerufen wird, kann der Benutzer das leere Feld befüllen. Da das Attribut *delete_if_empty="true"* gesetzt ist, wird kein Tag gesetzt, falls der Benutzer das Feld leer lässt.  

Das Auswahlfeld im Formular ist durch die folgende Zeile definiert:  

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" />
      <display_values="Residential, Commercial, Industrial"/>

Ein Auswahlfeld wird durch das &lt;combo&gt; Element definiert. Wie beim &lt;text&gt; Element definiert das Attribut *key* den Tag Schlüssel. Der Wert wird aus einer Liste möglicher *Werte* ausgewählt. Das *display_values* Attribut erlaubt für die Anzeige im Auswahlfeld unterschiedliche Namen zu wählen, was die Auswahl einfacher macht, als wenn OSM Tag Werte verwendet würden.  

Zuletzt schauen wir uns die Zeile an, die die Auswahlbox definiert.  

      <check key="building:vacant" text="Is the building vacant?" default="off" /> 
      <delete_if_empty="true" />

Das &lt;check&gt; Element definiert - man errät es -  die Auswahlbox. Das Attribut *default="off"* gibt an, dass die Box standardmäßig nicht markiert ist. Die weitere Attribute kennt man bereits.  

Eigene Vorlagendateien erstellen
------------------------------

Man erstellt am Besten eigene Vorlagendateien, indem man bereits ein vorhandenes nimmt und für eigene Zwecke anpasst. Gerne kann man die Beispieldatei bearbeiten und damit experimentieren, um die Grundlagen zu erlernen. Man muss nur darauf achten, JOSM neu zu starten, damit die Änderungen geladen werden.  

Bevor man eigene Vorlagen erstellt, sollte man sorgfältig über die Tags nachdenken, die man verwenden wird. Neue Tags zu erfinden ist ein ganze neues Thema. Allgemein sollte man vorhandene OSM Tags verwenden. Viele verwendete Tags sind gelistet auf der [Map Features Seite im OSM Wiki](http://wiki.openstreetmap.org/wiki/Map_Features).  

Die Beispieldatei beinhaltet die gängigsten Elemente, die man in einer JOSM Vorlagendatei finden wird - es gibt nicht so viele Formularelemente. Wenn man mit einer komplexeren Vorlagendatei experimentieren möchte, kann man die [dhaka_presets.xml](/files/dhaka_presets.xml) Datei herunterladen.  

Zusätzlich können detaillierte Erläuterungen aller möglichen Elemente [hier](http://josm.openstreetmap.de/wiki/TaggingPresets) gefunden werden.  

Viel Glück!  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png