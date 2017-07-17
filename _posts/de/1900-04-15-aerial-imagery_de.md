---
layout: doc
title: Luftbilder
permalink: /de/josm/aerial-imagery/
lang: de
category: josm
---

Luftbilder
================

> Diese Anleitung kann heruntergeladen werden als  [aerial-imagery_en.odt](/files/aerial-imagery_en.odt) or [aerial-imagery_en.pdf](/files/aerial-imagery_en.pdf)  
> Reviewed 2015-09-21  

Bilder abzuzeichnen ist ein einfacher und mächtiger Weg zu OSM beizutragen. Bilder zu verwenden, um Punkte, Linien und Formen am Boden zu zeichnen nennt man **Sesselmappen**. Es kann oft getrennt werden vom Attribute Sammeln vor Ort, was man **Vor-Ort-Erhebung** nennt. Luftbilder abmalen bietet ein Gerüst für OSM Karten, was die Vort-Ort-Erhebung für Menschen im Feld erleichtert. In diesem Kapitel lernen wie ein bisschen mehr darüber, wie Luftbilder arbeiten.  

Über Luftbilder
-------------

Luftbilder ist der begriff den wir verwenden um Fotos vom Himmel aus zu beschreiben. Diese können von Flugzeugen, Drohnen, Helikoptern oder Drachen und Ballonen aus gemacht werden, aber die meisten Bilderquellen kommen von Satelliten im Erdorbit.  

[Im kapitel über GPS](/de/mobile-mapping/using-gps) haben wir die dutzende Satelliten im Erdorbit kennen gelernt, die es unseren GPS Empfänger erlauben unsere Länge und Breite zu bestimmen. Zusätzliche zu diesen GPS Satelliten gibt es auch Satelliten die Fotos von der Erde machen. Die Fotos werden anschließend bearbeitet, damit sie in GIS Software verwendet werden können. Bing Luftbilder sind aus Satellitenfotos gemacht.  

Auflösung
----------

Alle Digitalfotos bestehen aus Pixeln. Wenn man in ein Foto sehr nahe hinein zommt, wird man bemerken, dass das Bild unscharf wird und man sieht vielleicht, dass ein Bild aus tausenden kleiner Quadrate mit unterschiedlichen Farben besteht. Das gilt für von Handkameras gemachte Fotos, Smartphone oder auch eben Satellitenfotos aus dem Erdorbit.  

![Image resolution][]

Die Auflösung bezieht sich auf die Anzahl von Pixel der Breite und Höhe eines Bildes. Mehr Pixel bedeuten einer höhere Auflösung, was bedeutet, dass man mehr Details im Foto sehen kann. Die Auflösung in Kameras für die Hand wird in Megapixel gemessen. Je mehr Megapixel aufgezeichnet werden können, desto höher die Auflösung der Fotos.  

Bei Luftbildern ist es dasselbe, außer dass man über die Auflösung anders spricht. Abmessungen sind bei Luftbildern wichtig - ein Pixel repräsentiert eine gewisse Distanz am Boden. Man beschreibt ein Bild als "Zwei Meter Auflösung Bild", was bedeutet, dass ein Pixel zwei Meter am Boden entspricht. Ein ein Meter Auflösung Bild hätte eine höhere Auflösung und eine 50cm Auflösung wäre noch höher. Das ist allgemein die Bildbreite, welche Bing anbietet, auch wenn sie je nach Ort abweicht und vieler Orts schlechter als 2 Meter ist, wobei es dann schwer wird Objekte im Bild zu identifizieren.  

![Comparison of low and high resolution imagery][]

Je höher die Auflösung eines Luftbildes, umso einfacher ist die Erstellung von Karten.  

Georeferenzierung
---------------

Jedes Pixel einen Luftbildes hat eine Größe und jedes Pixel einen Standort. Das ist, wie wir bereits oben erwähnt haben, da Luftbilder georeferenziert sind.  

Wie GPS Punkte Länge und breite haben, haben Pixel Länge und breite in einem Luftbild. So wie schlechte Auflösungen eine Herausforderung fürs Mappen sind, so sind es schlecht georeferenzierte Bilder ebenfalls.  

Denken wir darüber nach wie Georeferenzierung funktioniert und warum es eine Herausforderung ist. Wenn jemand ein Bild georeferenziert, identifiziert er eine handvoll Pixel als bekannte Standorte. Hat man ein quadratisches Foto, könnte man die Koordinaten für jede Ecke bestimmen und so das ganze Bild korrekt platzieren.  

Das klingt einfach aber man beachte: Die Erde ist rund; Kameralinsen sind rund; Aber Fotos sind flach und 2-dimensional. Das bedeutet, wenn ein flaches Bild auf die runde Erde übertragen wird, muss es immer etwas gezogen und verzerrt werden. Man stellt sich vor man möchte Orangenschalen flach auslegen. Es wird niemals rechteckig. Deswegen werden alle Pixel in einem Luftbild niemals perfekt platziert sein.  

Glücklicherweise haben intelligente menschen kluge Algorithmen entwickelt um dieses Problem zu lösen, so dass das Bild von Bing ziemlich nahe daran ist sehr genau zu sein. An vielen Orten wird es nicht merklich falsch sein - und zum Erstellen von karten ausreichen. Die meisten Gebiete mit ungenauen Bildern sind hügelreiche, bergige Gebiete. Im [Luftbild Offset Anpassen Kapitel](/de/josm/correcting-imagery-offset) werden wir sehen, wie man dieses Problem korrigieren kann.  

[Image resolution]: /images/josm/orange-resolution.png
[Comparison of low and high resolution imagery]: /images/josm/low-res-high-res.png