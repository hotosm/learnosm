---
layout: doc
title: Erstellung eigener Vorlagen
permalink: /de/josm/creating-presets/
lang: de
category: josm
---

Erstellung eigener Vorlagen
===========================


Im [vorhergehenden Kapitel](/de/editing/josm-presets) haben wir gelernt, wie wir zusätzliche Vorlagen
in das JOSM-Menü aufnehmen können. Jetzt werden wir uns damit beschäftigen, wie wir eigene 
Vorlagendateien erstellen können.

VORSICHT! Das ist ein Thema für Fortgeschrittene... wir haben Sie gewarnt!

Einführung in XML
-----------------
Um eine Vorlagendatei zu erstellen, müssen wir erst einmal das Dateiformat XML verstehen. Wenn Sie das schon
kennen, dürfen Sie diesen Abschnitt überspringen.

XML bedeutet “Extensible Mark-up Language”, also etwa "erweiterbare Auszeichnungssprache" und ist ähnlich zu HTML.  
Der wesentliche Unterschied ist, dass XML dazu entwickelt wurde, Daten zu speichern und nicht, sie anzuzeigen.  
Viele Anwendungen im Internet, auch OpenStreetMap, benutzen XML zum Datentransfer. XML besteht aus Elementen und
jedes Element kann Unterelemente enthalten.  

Nehmen wir einmal an, wir wollen eine XML-Datei für eine Speisekarte
erstellen. Wir brauchen ein Wurzelelement, dass alle Angaben über die Speisekarte enthält. Dieses Element klammert
den restlichen Text:

	<menu>
      ... was auch immer auf unserer Speisekarte steht ...
	</menu>

Jede Information muss in einem Element stehen und jedes Element kann weitere Elemente enthalten.

  	<menu>
	  <item name=“Hamburger”>
		<cost>400</cost>
		<description>köstliche Rinderbulette</description>
	  </item>
	  <item name=“Nasi Goreng”>
		<cost>200</cost>
		<description>Indonesischer gebratener Reis</description>
	  </item>
  	</menu>

In unserem Beispiel haben wir zwei &lt;item&gt;-Elemente in unser &lt;menu&gt;-Element eingefügt, um zwei
verschiedene Einträge in der Speisekarte zu beschreiben. In jedem &lt;item&gt; befinden sich zwei weitere 
Elemente, &lt;cost&gt; und &lt;description&gt;.  Wir haben name=”Hamburger” innerhalb des öffnenden 
&lt;item&gt;-Tags aufgeführt. Das wird ein Attribut genannt und fügt Informationen einem Element hinzu.


### XML Terminologie
-	**Wurzelelement:** das äußerste Element eines XML-Dokuments, das den Inhalt beschreibt
-	**Element:** ein XML-Objekt, das von Tags eingerahmt wird, wie z.B. &lt;item&gt; ... Daten ... &lt;/item&gt;
-	**Tag:** etwas in spitzen Klammern, wie z.B. &lt;item&gt;.  &lt;item&gt; ist der
	Beginn-Auszeichner eines Elements, und &lt;/item&gt; ist der End-Auszeichner. Verwechseln Sie das
	nicht mit OSM-Tags, die eine andere Bedeutung haben.
-	**Attribut:** Eine Information innerhalb eines Tags, etwa name=“Hamburger”

Der Vorteil in der Verwendung von XML zur Speicherung und Übermittlung von Daten liegt darin, dass dieses Format
einfach automatisiert gelesen werden kann.


JOSM-Vorlagendateien
--------------------
Jetzt laden wir eine Beispielvorlage in JOSM und sehen uns an, wie das funktioniert.

-	Laden Sie [sample_presets.xml](/files/sample_presets.xml) herunter.
-	Installieren Sie die Datei in JOSM so wie es im [vorhergehenden Kapitel](/de/editing/josm-presets) beschrieben wurde.
-	Erzeugen sie eine neue Ebene und ein neues Objekt.
-	Wählen Sie den neuen Eintrag "Sample Building" aus dem Vorlagenmenü aus.

![sample building menu][]

Sie sehen, dass das Formular, das eingeblendet wird, drei Felder besitzt, jedes für eine andere Art von Eingabe. 
Das erste Feld, *Name of Building*, akzeptiert einen Freitext als Eingabe. Das zweite, *Building Use*, hat ein Aufklappmenü.
Das letzte Feld kann angekreuzt werden, es gibt also nur zwei Werte, an und aus.

![sample presets form][]

Jetzt sehen wir uns die XML-Datei, die dieses Formular definiert, näher an.

-	Öffnen Sie die XML-Datei auf Ihrem Rechner mit einem Texteditor. Unter Windows können Sie dazu Notepad verwenden. Wenn Sie einen einfacher zu benutzenden Editor suchen, können Sie beispielsweise das kostenlose Programm  Notepad++ herunterladen.
-	Die Datei **sample_presets.xml** sieht so aus:

![sample presets file][]

Für's erste ignorieren wir die ersten sechs Zeilen sowie die letzte und konzentrieren uns auf alles zwischen den
&lt;item&gt;-Tags.

Das ist die erste Zeile:

	<item name="Sample Building" type="node,closedway">

Es handelt sich um den Beginn-Tag eines Eintrags, der zum Vorlagenmenü hinzugefügt wird. Er hat zwei Attribute, *name* und *type*. Der *name* legt fest, wie der Eintrag später im Vorlagenmenü zu sehen sein wird. Der *type* schränkt die Vorlage auf bestimmte Typen von Objekten ein. In unserem Fall kann die Vorlage nur auf Punkte und geschlossene Linienzüge angewendet werden. Der Versuch, die Vorlage auf eine einzelne Linie anzuwenden, schlägt fehl.

Die nächste Zeile sieht so aus:

	<label text="Building Form" />

Wenn Sie die Vorlage im Menü auswählen und damit das Formular öffnen, sehen Sie ganz oben den Text "Building Form". Das ist der Text aus dieser Zeile. Sie definiert ein &lt;label&gt;-Element, das lediglich Text im Formular darstellt. Der Text selbst wird durch das Attribut *text="some text"* festgelegt.

Einige Zeilen später steht das:

	<key key="building" value="yes" />

Das ist eine der Eigenschaften, die wir dem ausgewählten Objekt zuweisen werden. Durch das Element &lt;key&gt; wird sichergestellt, dass die angegebene OSM-Eigenschaft automatisch zugewiesen wird, wenn die Vorlage ausgewählt wird. Unser Objekt erhält die Eigenschaft *building=yes*.

Die nächste Zeile sieht etwas anders aus:

	<text key="name" text="Name of Building" default=""
		delete_if_empty="true" />

Das &lt;text&gt;-Element erzeugt ein leeres Feld. Wenn das Formular in JOSM erzeugt wird, kann der Benutzer das Feld ausfüllen. Da das Attribute *delete_if_empty="true"* vorhanden ist, wird keine OSM-Eigenschaft zugewiesen, wenn der Benutzer das Feld leer gelassen hat.

Das Aufklappmenü des Formulars wird mit dieser Zeile erzeugt:

	<combo key="building:use" text="Building Use"
		values="residential, commercial, industrial"
		display_values="Residential, Commercial,
		Industrial"/>

Genau wie beim &lt;text&gt;-Element bestimmt das Attribut *key* des &lt;combo&gt;-Elements die OSM-Eigenschaft. Der Wert wird aus einer Liste möglicher Werte ausgewählt, diese sind im Attribut *values* hinterlegt. Das Attribut *display_values* erlaubt Ihnen, andere Einträge für das Aufklappmenü festzulegen, die vielleicht einfacher zu verstehen sind als die Namen von OSM-Eigenschaften.

Schauen wir uns noch die Zeile für das Markierungsfeld an:

	<check key="building:vacant" text="Is the building
		vacant?" default="off" delete_if_empty="true" />

Wir brauchen hier das &lt;check&gt;-Element. Das Attribut *default="off"* legt den Normalzustand fest, nicht angekreuzt. Die anderen Attribute kennen Sie schon.

Eine eigene Vorlagendatei
-------------------------

Am besten fangen Sie mit einer existierenden Vorlagendatei an und ändern sie nach Ihren Wünschen ab. Sie können dafür gerne unsere Beispieldatei verwenden und mit ihr experimentieren. Denken Sie nur daran, dass Sie nach jeder abgespeicherten Änderung JOSM neu starten müssen, damit die Änderungen wirksam werden.

Bevor Sie beginnen, Ihre eigenen Vorlagen zu entwerfen, sollten Sie genau darüber nachdenken, welche OSM-Eigenschaften Sie zuweisen möchten. Hier etwas neues zu erfinden, ist ein Kapitel für sich. Verwenden Sie wenn immer möglich solche Eigenschaften, die bereits benutzt werden. Die häufigsten finden Sie unter [Map Features im OSM Wiki](http://wiki.openstreetmap.org/wiki/DE:Map_Features) sowie in [dieser Liste im OSM Wiki](http://wiki.openstreetmap.org/wiki/DE:Howto_Map_A).

Die Beispieldatei enthält die meisten Elemente, die in einer Vorlagendatei für JOSM vorkommen - es gibt nicht viele Elemente für ein Formular. Wenn Sie ein umfangreicheres Beispiel für Ihre Versuche brauchen, laden Sie sich die Datei [dhaka_presets.xml](/files/dhaka_presets.xml) herunter.

Eine ausführliche Beschreibung aller Elemente finden Sie [in der JOSM-Dokumentation](http://josm.openstreetmap.de/wiki/TaggingPresets). Die deutsche Version jener Anleitung ist noch unvollständig.

Viel Erfolg!


[sample building menu]: /images/en/editing/creating-custom-presets/sample-building-menu.png
[sample presets form]: /images/en/editing/creating-custom-presets/sample-presets-form.png
[sample presets file]: /images/en/editing/creating-custom-presets/sample-presets-file.png
