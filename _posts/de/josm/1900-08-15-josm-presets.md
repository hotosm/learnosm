---
layout: doc
title: JOSM Vorlagen
permalink: /de/josm/josm-presets/
lang: de
category: josm
---

JOSM Vorlagen
=============


Wenn Sie schon länger mit JOSM arbeiten, kennen Sie sich sicher schon etwas mit Eigenschaften und Vorlagen aus. 
Jedes Objekt wird durch zwei Dinge beschrieben: einmal durch seine Geometrie (handelt es sich um einen Punkt,
eine Linie, einen geschlossenen Linienzug sowie seine Position), zum anderen durch seine Eigenschaften (englisch: tags).

Wenn Sie ein Objekt zeichnen und eine Vorlage aus dem Menü auswählen, werden die passenden Eigenschaften automatisch
an das Objekt angefügt.

Was aber, wenn Sie gerne mit Vorlagen arbeiten und Eigenschaften hinzufügen möchten, die im Menü nicht vorhanden sind
oder wenn Sie die vorhandenen Eigenschaften nach Ihren Wünschen verändern möchten?

Für diesen Fall können Sie eigene Menüeinträge zu den Vorlagen hinzufügen. In diesem Kapitel zeigen wir Ihnen, 
wie das geht. Im [nächsten Kapitel](/de/editing/creating-presets), behandeln wir die Erstellung eigener
Vorlagendateien.


Vorlagen hinzufügen
-------------------

Die Menüstruktur für die Vorlagen ist in Dateien abgespeichert, die die Anweisungen enthalten, um die Menüs
und Formulare darzustellen, die Sie sehen, wenn Sie die entsprechende Vorlage auf ein Objekt anwenden. In den
Dateien ist auch festgelegt, welche Eigenschaften zu dem Objekt hinzugefügt werden, je nachdem, wie das Formular
ausgefüllt wurde.

Sie können Vorlagendateien entweder aus einem Internet-Archiv hinzufügen oder zunächst auf Ihrem Rechner
abspeichern und dann zu JOSM hinzufügen.

-	Um einen neuen Eintrag zum Vorlagenmenü hinzuzufügen wählen Sie in der JOSM-Menüzeile 
	Bearbeiten->Einstellungen aus.
-	Klicken Sie auf das dritte Icon von oben, das wie ein Gitternetz über der Weltkugel aussieht.

	![tagging presets tab][]

-	Wählen Sie dann den Reiter "Objektvorlagen".

	![tagging presets menu][]

-	Aus der linken Liste können Sie Vorlagen aus dem Internet auswählen. Klicken Sie dann auf den blauen Pfeil. 
	Für dieses Beispiel nehmen wir die Vorlage "Towers von Jens Windbladh".

	![example presets][]

-	Die Vorlage erscheint in der rechten Liste.
-	Klicken Sie auf OK.
-	Jetzt werden Sie gefragt, ob JOSM neu gestartet werden soll. Das ist bei einer Änderung der Menüstruktur
	erforderlich, bestätigen Sie also die Frage.
-	Legen Sie eine neue Ebene an und zeichnen Sie einen Punkt.
-	Wählen Sie im Vorlagen-Menü aus dem Untermenü "Turm" eine der möglichen Varianten.

	![tower preset][]

-	Es erscheint das entsprechende Formular, in dem Sie weitere Eigenschaften des Turms, etwa den Namen,
	festlegen können.

-	Wenn Sie eine Vorlagendatei erhalten haben, können Sie sie so zum Menü hinzufügen:
	Unter den Einstellungen zu den Objektvorlagen wählen Sie in diesem Fall nichts aus der Liste, 
	sondern klicken auf (+) oben rechts.

	![plus button][]

-	Mit dem Knopf rechts der zweiten Zeile navigieren Sie zu Ihrer Datei, in der ersten Zeile können Sie noch
	einen Namen für die Vorlage vergeben.
-	Klicken Sie auf OK.


[tagging presets tab]: /images/en/editing/josm-presets/tagging-presets-tab.png
[tagging presets menu]: /images/editing/josm-presets_tagging-presets-menu.de.png
[example presets]: /images/editing/josm-presets_example-presets.de.png
[tower preset]: /images/editing/josm-presets_tower-preset.de.png
[plus button]: /images/en/editing/josm-presets/plus-button.png


