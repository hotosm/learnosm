---
layout: doc
title: JOSM Vorlagen
permalink: /de/josm/josm-presets/
lang: de
category: josm
---

JOSM Vorlagen
============

> Gereviewt am 2016-09-17  

Wenn man JOSM schon etwas länger verwendet, versteht man etwas von Tags und Vorlagen. Jedes Objekt wird durch zwei Dinge definiert - als erstes durch seine Geometrie (ob es ein Punkt, eine Linie oder ein Umriss ist und sein Standort) und zweitens durch seine Attribute in Form von Tags.  

Wenn man ein Objekt mittels Vorlagenmenü zeichnet, werden die korrekten Tags automatisch dem Objekt zugeordnet.  

Was passiert, wenn man Tags trotz der Verwendung von Vorlagen hinzufügen möchte, die nicht im Menü enthalten sind oder man eigene Tags anpassen möchte?  

Hier kann man eigene Menüeinträge zu den Vorlagen hinzufügen. Wir zeigen Ihnen in diesem Abschnitt wie das geht. Das [nächste Kapitel](/de/josm/creating-presets) befasst sich mit der Erstellung eigener Vorlagendateien.  


Vorlagen hinzufügen
-----------

Die Menüs und Untermenüs des Vorlagenmenüs sind in Dateien gespeichert, die beschreiben, wie Menüs und Formulare erstellt werden, wenn man auf eine Vorlage klickt und welche Tags einem Objekt hinzugefügt werden, je nachdem wie das Formular ausgefüllt wird.  

Vorlagen können entweder von einer Onlinebibliothek aus oder lokal gespeichert und hinzugefügt werden in JOSM.  

* Um einen neuen Eintrag dem Vorlagenmenu hinzuzufügen, öffnet man JOSM und geht zu Bearbeiten->Einstellungen.  
* Man klickt auf das dritte Tab, das wie ein Gitter über einem Planeten aussieht.  

![tagging presets tab][]

* Oben klickt man auf "Tagging Vorlagen".  

![tagging presets menu][]

* Man fügt eine Vorlage aus dem Internet hinzu durch Auswahl in der Liste 	zur Linken und durch klicken auf den blauen Pfeil. In diesem Beispiel 	fügen wir die Vorlage "New Tags" hinzu.  

![example presets][]

* Man sieht einen neuen Eintrag erscheinen in der Liste auf der rechten Seite.  
* Man klickt OK.  
* Man startet JOSM neu.  
* Man erstellt einen neuen Layer und fügt einen Punkt oder Umriss hinzu.  
* Im Vorlagen-Menü gibt es jetzt einen neuen Eintrag am Ende, der verschiedene Möglichkeiten bietet, die in der Standardinstallation nicht enthalten sind.  

![additional tags preset][]

* Die meisten Vorlagen sind für recht spezielle Anwendungsfälle aber vielleicht findet sich in der Liste ja etwas passendes.  

* Falls man eine angepasste Vorlagendatei bekommen hat, kann man es auf ähnlichem Weg dem Menü hinzufügen. Man kehrt zurück zum Einstellungen Menü und anstatt dass man etwas in der Liste auswählt, klickt man auf den (+) Button oben rechts.  

![plus button][]

* Man sucht die Datei und gibt ihr gegebenenfalls einen Namen.  
* Man klickt OK.  


[tagging presets tab]: /images/josm/tagging-presets-tab.png
[tagging presets menu]: /images/josm/tagging-presets-menu.png
[example presets]: /images/josm/example-presets2.png
[additional tags preset]: /images/josm/new-tags-preset.png
[plus button]: /images/josm/plus-button.png

