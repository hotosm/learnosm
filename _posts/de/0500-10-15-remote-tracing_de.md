---
layout: doc
title: Straßen, Gebäude, Wasser und Bodenutzung einzeichnen 
permalink: /de/coordination/remote-tracing/
lang: de
category: coordination
---

Straßen, Gebäude, Wasser und Bodenutzung einzeichnen
===========================================

Überprüft 2016-02-08  

Diese Anleitung baut auf der [Anleitung über Fernkartographie und Mapathons](/de/coordination/remote/) auf, die Sie durcharbeiten sollten, wenn Sie keine Erfahrung mit der Arbeit für HOT haben.  


Inhaltsverzeichnis
=====

[Straßen einschließlich Pfade und Fahrwege](/de/coordination/remote-tracing/#roads)  
[Das Straßennetz](/de/coordination/remote-tracing/#the-highway-network)  
[Grenzen von Siedlungsgebieten](/de/coordination/remote-tracing/#residential-boundaries)  
[Gebäude, Mauern, Zäune und Begrenzungen](/de/coordination/remote-tracing/#buildings-walls-compounds-barriers)  


## Straßen

Alle Arten von Wegen, Autobahnen ebenso wie Pfade, werden in OpenStreetMap als 'highway' bezeichnet. Es ist wichtig, Wege richtig in die Datenbank einzutragen, da sie an vielen Stellen eine Rolle spielen:  

- Navigationssoftware, z.B. auf Garmin-Geräten oder Smartphone-Apps wie Osmand, kann eine Route über große Entfernungen berechnen wenn die entsprechenden Informationen vorhanden sind. Diese Software bezieht die aktuelle Position aus dem GPS-Sensor des Geräts. Deshalb dürfen Wege nicht mehr als etwa 15 Meter von ihrer wahren Position abweichen, oder die Routenberechnung wird nicht funktionieren!  
- Die Berechnung einer Route für einen großen LKW eines Hilfstransports wird erleichtert, wenn es Unterschiede zwischen Pfaden und Hauptstraßen gibt.  
- Es macht auch einen Unterschied, ob die Straße asphaltiert oder eine Schlammpiste ist.
- Um Ausbreitungsvorhersagen für Seuchen zu bekommen, hilft die Beschreibung eines Opfers "in der Nähe der Kreuzung" nur dann, wenn die Kreuzung auch auf der Karte zu sehen ist

### <a name="highways-howto"></a> Straßen und Wege - Richtig erfassen

![iD 3][]

1. Wenn Sie Straßen erfassen, zoomen Sie bitte weit hinein. Fangen Sie am besten mit einem Maßstab von 20 Metern an und übertragen Sie die Straße so, dass sie sich weitgehend mit der Vorlage auf dem Satellitenbild deckt. In dem Bildschirmfoto oben sehen Sie, dass ich die Straße, die aus einem benachbarten Bereich hereinragte, nach unten durch die Bäume bis zu einem Gebäude gezeichnet habe, an dem sie scheinbar aufhört. Wenn Bäume dicht an einer Straße stehen und die Fotovorlage senkrecht aufgenommen wurde, sieht es so aus, als ob die Straße unter den Bäumen schmaler wäre. Das ist aber nur ein Abschattungseffekt, die Straße hat überall die gleiche Breite.  
2. Ich habe noch einen anderen Abschnitt der Straße eingetragen und dabei darauf geachtet, dass er an beiden Enden eine Verbindung hat - iD zeigt das mit einem etwas größeren und dunkleren Punkt an der Verbindung an. Es ist wichtig, dass Straßen verbunden sind damit Navigationssoftware eine Route berechnen kann.  
3. Die Straße wird mit dem Attribut 'higway=residential' versehen. Außerdem habe ich noch 'surface=unpaved' angefügt.  
4. Eine nähere Beschreibung der Straßenklassifikation in Afrika finden Sie in englischer Sprache auf der Wiki-Seite [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa).  

> Wenn Sie Straßen bearbeiten, die in Kacheln führen, die von jemand anderem bearbeitet werden, kann es schnell zu Konflikten kommen, so dass Sie Ihre Arbeit nicht mehr speichern können. Es ist deshalb ratsam, Ihre bisherigen Änderungen zu speichern, bevor Sie die Straße bearbeiten. Speichern Sie auch oft während dieser Bearbeitung, etwa nach jeweils 6 hinzugefügten Punkten.


### Das Straßennetz

![JOSM 4][]

Dieses Bildschirmfoto zeigt JOSM mit dem HOT-OSM-Validierungsstil [JOSM styles](https://josm.openstreetmap.de/wiki/Styles). Obwohl dieser Stil speziell dafür gedacht ist, Validierer bei ihrer Arbeit zu unterstützen, bietet er auch wertvolle Hinweise bei der Kartierung. So deuten z.B. rote Markierungen auf fehlerhafte Einträge hin.  

1. Dieser Abschnitt des Weges ist rot gefärbt weil das Attribut falsch geschrieben wurde (mit einem Großbuchstaben). Richtig wäre 'highway=unclassified' was dann hellbraun dargestellt würde.  
2. Dieser Abschnitt gehört zum Straßennetz der Stadt im Südwesten des Ausschnitts. Dieses Netz ist mit den Straßen im Rest Afrikas verbunden.  
3. Diese Straßenabschnitte sind isoliert. Sie sind nicht mit einer Stadt oder anderen Straßen verbunden. So sind sie nicht hilfreich und erfordern nähere Untersuchungen, ob man sie mit dem restlichen Straßennetz verbinden kann oder sie vielleicht besser löscht.  


**Weg oder Fluß?**

![iD 5][]

Es gibt keine Stile, die einem in iD helfen könnten aber in diesem Bildschirmfoto können Sie Vegetation und nackten Boden erkennen. Der Boden sieht schlammig aus, vielleicht ist es auch trockengefallener Sumpf. Die punktierten schwarzen und weißen Linien sind Pfade in iD und ich habe einen markiert und dann gelöscht um den Untergrund zu zeigen.  

1. highway=path oder Wasserlauf. Vielleicht ist beides richtig! Wege aller Art folgen häufig einem Flußtal und oft folgen sie auch dem Verlauf eines Trockentals, das nur gelegentlich Wasser führt. Hier sieht es nach einer machmal überfluteten Ebene aus, die zum Zeitpunkt des Satellitenbilds trocken war und als Pfad verwendet wurde. Am besten trägt man das so ein:  
highway=path  
seasonal=yes  
surface=unpaved  
2. Bei diesem Pfad ist es klar, dass er durch die Büsche und Bäume verläuft auch wenn man den genauen Verlauf nicht erkennen kann. Es ist aber klar, dass es den Weg gibt, er ist nur durch die Bäume verdeckt. Ich habe hier die klar erkennbaren Abschnitte mit einer geraden Linie durch die Bäume verbunden. Seien Sie mit Ihrer Kreativität bitte zurückhaltend auch wenn es hier klar ist, dass der Pfad durch die Büsche verlaufen muss und wahrscheinlich mehr oder weniger der geraden Linie folgen wird. Dies ist schon ein extremes Beispiel - normalerweise wird man so Abschnitte von Wegen überbrücken, die nur wenige Meter lang sind und vielleicht von ein oder zwei Bäumen verdeckt werden.  
3. Hier habe ich den Pfad gelöscht damit ich den Untergrund klar erkennen kann. Mit der Funktion "Änderung rückgängig machen' in iD kann man ihn schnell wiederherstellen.  

***


## Siedlungsbereiche

Es gibt viele Gründe, Siedlungsgebiete in OpenStreetMap einzutragen.  

+ Die einfachste Anwendung ist die Visualisierung von Siedlungen in der höheren Zoomstufen auf [OpenStreetMap.org](http://www.openstreetmap.org) wo sie hellgrau in der Standardkarte dargestellt werden.  
+ Wenn keine Zeit bleibt, Siedlungen im Detail zu erfassen, werden Sie häufig in den Anweisungen eines Projekts im Tasking Manager etwas in der Art lesen:  

>    Map essential infrastructures such as schools, place of worship and markets.  
>    Trace outbound of settlements and cemeteries.  
>    We will trace roads later in an other Task.  Zusammengefaßt also etwa: Tragen sie nur wichtige Teile der Infrastruktur wie Schulen, religiöse Stätten und Märkte im Detail ein, erfassen Sie nur die bebauten Zonen und Friedhöfe; Straßen werden in einem folgenden Projekt eingetragen.   
+ landuse=residential kann auch für statistische Auswertung verwendet werden; dazu müssen die Siedlungsgebiete aber genau eingezeichnet sein  

* Wenn Sie eine Ahnung haben, wie viele Menschen normalerweise in einer Unterkunft leben und  
 wie viele Unterkünfte normalerweise in einem bestimmten Gebiet vorkommen, dann  
 können Sie aus der Fläche eines 'landuse=residential'  
 eine grobe Abschätzung der Bevölkerungszahl dieses Gebiets gewinnen.  
 Damit bekommt man eine realistische Größenordnung, wieviele Helfer und Hilfsgüter vor Ort benötigt werden.
* Ortsnamen und Grenzen werden oft aus anderen Quellen importiert. Die genaue Lage ist aber nicht immer bekannt. Sobald sie ein Siedlungsgebiet erfasst haben, kann derjenige der den Import durchführt erkennen, wo der Ortsname eingetragen werden soll.


### <a name="residential-howto"></a> Siedlungsgebiete - Richtig eintragen


** In einer idealen Welt **  

*Schritt 1* - Es wurde beschlossen, ein Gebiet zu erfassen und jemand zeichnet einer sehr grobe Begrenzung eines Siedlungsgebiets ein.  
*Schritt 2* - Eine Projekt wird für den Tasking Manager erstellt und erlaubt es, die Begrenzung zu verfeinern, etwa näher an den Gebäuden zu führen.  

![JOSM residential][]

![iD residential][]
 
Die Bildschirmfotos von iD & JOSM zeigen richtig eingetragene Siedlungsgebiete.  

1. Die Linie muss geschlossen sein, d.h. Start- und Endpunkt müssen identisch sein  
2. Die Begrenzung eines Siedlungsgebiets sollte nicht mit Wegen, Wasserläufen, Gebäuden oder irgendwelchen anderen Einträgen verbunden sein. Sie darf mit diesen keine Punkte gemein haben, aber sie darf andere Wege schneiden.  
3. Die Begrenzung sollte nahe an den Gebäuden oder Freiflächen entlang gezeichnet werden, die sie umschließt.  


In den folgenden Bildschirmfotos enthält meine Kachel einen Teil einer solchen Begrenzung. Derjenige, der die Kachel östlich von meiner bearbeitet hat, hat die Begrenzung in seinem Bereich richtig eingezeichnet und sie mir 'übergeben', indem er sie etwas in meine Kachel hineinragen ließ.  


![JOSM residential 1][]

Ich füge weitere Punkte zu dieser Begrenzung dazu. Innerhalb meiner Kachel umschließt sie dann alle Gebäude, unten werde ich sie wieder etwas in die Nachbarkachel hineinzeichnen, so dass derjenige, der jene Kachel bearbeitet, die Begrenzung ergänzen kann.  

Das ist nicht einfach - Sie sehen nur einen kleinen Ausschnitt einer ganzen Stadt und obwohl Sie sich große Mühe mit der Begrenzung von 'landuse=residential' geben, wird ein Validierer wahrscheinlich noch ein paar Korrekturen anbringen, weil er den Überblick über mehrere fertiggestellte Kacheln hat.  

> Das Arbeiten mit derartigen Begrenzungen führt schnell zu Konflikten, weil sie häufig auch in benachbarte Kacheln hineinragen, die vielleicht gerade bearbeitet werden. Laden Sie am besten alle Änderungen hoch, bevor Sie mit der Begrenzung anfangen und wiederholen Sie das öfter, vielleicht nach jeweils 6 hinzugefügten Punkten.

***


## Gebäude und Mauern  

Gebäude werden in der Datenbank aus verschiedenen Gründen benötigt:  

* Die Dichte von Gebäuden in einem Gebiet bietet einen Anhaltspunkt für die Bevölkerungszahl.  
* DIe Größe, Form und Lage eines Gebäudes kann es als potientielles Evakuierungs- oder Behandlungszentrum identifizieren.  
* Die Größe, Form und Lage eines Gebäudes kann einen Anhaltspunkt für seine Bedeutung liefern (Brunnen, Gesundheitszentrum, Schule,...)  
* Wenn man das Ausmaß der Schäden an einem Gebäude bestimmen kann, lassen sich daraus Informationen über mögliche Verunglückte und die benötigten Hilfsmaßnahmen gewinnen  


### <a name="buildings-howto"></a> Gebäude - Richtig eintragen

Die überwiegende Mehrzahl der Gebäude, die für HOT-Projekte benötigt werden, sind entweder rechteckig oder rund. Wenn eine Gebäude anders aussieht, ist das Gebäude wahrscheinlich durch einen Schatten, eine Reflexion, Vegetation etc. teilweise verdeckt.  

Es gibt Projekte, in denen nur die Siedlungsgebiete von Interesse sind.  Manchmal steht dann in den Anweisungen, dass Gebäude als Punkte eingetragen werden können. Das kommt aber selten vor.  


#### building=yes

Wenn die Projektanweisungen nicht etwas anderes verlangen, sollten Gebäude mit dem Attribut **building=yes** versehen werden.  

* Satellitenbilder sind oft schon etwas älter. Ein Gebäude, das ohne Dach zu sehen ist, ist möglicherweise bereits fertiggestellt und bewohnt. Es kann auch sein, dass ein derartiges Gebäude mehrere Stockwerke besitzt, wobei nur die unteren bewohnt sind und das oberste Stockwerk derzeit kein Dach hat.  

> **Gebäude mit iD eintragen** - wenn Sie die Form des Gebäudes als Fläche eintragen müssen Sie daran denken, das Attribut der Fläche auf 'building=yes' zu ändern. Standardmäßig ist hier nur 'area=yes' eingestellt. Wenn Sie ein Gebäude mit rechtwinkligen Seiten eintragen, nehmen Sie sich bitte die Zeit, die Linien hinterher in die passende Form zu bringen (markieren Sie es und drücken Sie die Taste 'q')  

* Mit JOSM geht das Zeichnen von Gebäuden viel schneller - [hier wird die entsprechende Erweiterung für JOSM erklärt](/de/josm/josm-more-plugins/#das-gebäude-werkzeug-plugin)  

![Buildings iD][]

Dieses Bildschirmfoto zeigt einen Ausschnitt aus einer zu bearbeitenden Kachel. Beachten Sie den Maßstab von 15 Metern am unteren Rand - soweit sollten Sie etwa hineinzoomen um Gebäude einzutragen. Versuchen Sie, das Gebäude dort zu platzieren, wo es am Boden steht:  

1. **Runde Gebäude** Sie sind meistens recht niedrig und werfen kaum einen Schatten. Wenn man dazwischen stünde, würden sie wie Kuppeln aussehen. Ich habe bisher nur eines von ihnen eingetragen mit dem Attribut **building=yes**. Um die übrigen runden Gebäude schnell in JOSM oder iD einzutragen würde ich dieses eine markieren, *Strg+C* drücken, meine Maus zum Zentrum eines anderen runden Gebäudes verschieben und dort *Strg+V* drücken. Wenn ich alle runden Gebäude mit der gleichen Größe erfasst habe, würde ich ein solches Gebäudes an die Stelle eines runden Gebäudes in einer anderen Größe hinzufügen. In JOSM kann ich mit *Alt+Strg* die Größe mit der Maus anpassen, das Gebäude wieder kopieren und an den Positionen aller Gebäude dieser Größe einfügen.  
2. **Rechteckige Gebäude**. Diese Gebäude werfen einen deutlichen Schatten. Der Schatten kann uns helfen, die Form des Gebäudes zu bestimmen, wenn es teilweise von etwas Anderem verdeckt wird. Sie werden feststellen, dass viele Gebäude gar nicht so leicht zu erfassen sind weil sie vielleicht eine Terasse haben oder L-förmig sind - bemühen Sie sich bitte, die Form genau zu erfassen da das eine Identifizierung vor Ort erleichtert.  
3. **Mauern, Hecken und anderen Begrenzungen** Ich habe mir das Satellitenbild genau angesehen, hinein- und herausgezoomt so dass ich mir über die Form des Objekts im klaren bin (sein Schatten hilft dabei). Ich glaube, dass es eine Mauer ist und habe das Attribut **barrier=wall** angebracht. Sonst kommen auch 'barrier=fence' oder 'barrier=hedge' in Frage.  
4. Ich habe die Mauer an einer Ecke mit dem Gebäude verbunden.  


### Satellitenbilder mir verzerrten Gebäudeumrissen


![Buildings_2][]

1. Die oberen Satellitenbilder zeigen ein Gebäude aber der Satellit stand nicht im Zenit weswegen das Gebäude verzerrt dargestellt ist und man auch eine Seitenwand sieht. Wegen des Betrachtungswinkels ist das Dach scheinbar nicht rechtwinklig. Die Sonne steht praktisch direkt über dem Gebäude und der Schatten auf den die eingezeichneten Pfeile hindeuten bestätigt, dass es sich um ein rechtwinkliges Gebäude handelt.  

2. Um das Gebäude zu erfassen zeichnen Sie ein Rechteck vom linken Rand des Schattens (Pfeile zu Punkt 2) bis dorthin, wo sie vermuten, dass das Gebäude endet (Punkt 3).  


***


Diese Anleitung ist noch nicht vollständig - in der Zwischenzeit können SIe unter den unten aufgeführten Links noch weitere nützliche Hinweise finden.


# Vertiefende Literatur (meist auf Englisch)

-  [Hinweise zur Kartierung in Westafrika von Benutzer Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
-  [OSM-Wiki-Artikel über Validierung](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
-  [Highway Tag Africa - die definitive Quelle zur Klassifizierung von Straßen und Wegen in Afrika](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
-  [Eine kurze Anleitung auf Französisch zur Fernerfassung](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)

[iD 3]: /images/coordination/iD_3.png
[JOSM 4]: /images/coordination/JOSM_4.png
[iD 5]: /images/coordination/iD_5.png
[iD residential]: /images/coordination/iD_residential.png
[JOSM residential]: /images/coordination/JOSM_residential.png
[JOSM residential 1]: /images/coordination/JOSM_residential_1.png
[Buildings iD]: /images/coordination/Buildings_iD.png
[Buildings_2]: /images/coordination/Buildings_2.png