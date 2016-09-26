---
layout: doc
title: JOSM Relaties
permalink: /nl/josm/josm-relations/
lang: nl
category: josm
---

Relaties
==========

> Deze handleiding kan gedownload worden als [josm_relations_nl.odt](/files/josm_relations_nl.odt) of [josm_relations_nl.pdf](/files/josm_relations_nl.pdf)  
> Bijgewerkt 20-09-2015  

In de [Handleiding voor beginners](/nl/beginner) legden we uit dat er drie typen objecten zijn die in OpenStreetMap kunnen worden getekend - punten (knopen), lijnen (wegen), en polygonen (gesloten wegen). Lijnen bevatten ontelbare punten en de lijn zelf draagt de attributen die definiëren wat het weergeeft. Polygonen zijn hetzelfde als lijnen, met uitzondering van het feit dat de lijn moet eindigen waar hij begint om een vorm te kunnen vormen.  

In feite hebben we tegen u gelogen, omdat er nog een type object in OpenStreetMap bestaat, genaamd relaties. Op dezelfde manier waarop een lijn bestaat uit andere
punten, bevat een relatie een groep andere objecten, wat punten, lijnen, of polygonen mogen zijn. Als u uw vaardigheden voor het bewerken wilt uitbreiden, dan is het belangrijk te begrijpen en te weten hoe relaties op de juiste manier moeten worden bewerkt.  

Veronderstel bijvoorbeeld dat u een gebouw in kaart wilt brengen dat binnentuinen in het midden heeft.  U zou een polygoon langs de omtrek van het gebouw moeten tekenen, en u zou andere polygonen rondom de binnentuinen willen hebben om aan te geven dat zij geen dele uitmaken van het gebouw. Dit is een voorbeeld van een relatie. De relatie zou verscheidene polygonen bevatten - en de attributen van het gebouw zouden aan de relatie zijn toegevoegd, niet de polygonen.  

![An example of a multipolygon][]

Relaties worden gebruikt om alles weer te geven dat vereist wordt om een verzameling van objecten te definiëren. Andere voorbeelden zijn busroutes (een verzameling lijnen), lange en complexe objecten (rivieren of wegen), of meerdere polygonen die allemaal deel uitmaken van één locatie (zoals de gebouwen van een universiteit).  

Er zijn voornamelijk vier typen relaties die u in OSM zult tegenkomen: Multipolygonen, Routes, Boundaries, en Restrictions (zoals, Niet linksaf slaan). In dit gedeelte zullen we Multipolygonen en Routes behandelen.  

Relaties voor multipolygonen maken 
-------------------------------

Laten we eens kijken hoe we een relatie voor een multipolygoon maken, zoals die welke hierboven wordt weergegeven.  

- Eerst, teken uw vormen. In dit geval zullen we drie polygonen tekenen, een buitenste rechthoek, en twee kleinere rechthoeken.

![Multipolygon ways][]

- Selecteer alle polygonen. Onthoud dat u meerdere objecten kunt selecteren door SHIFT ingedrukt te houden en op elke te klikken.  
- Ga naar *Voorkeuzen->Bouwwerken->Bouwwerken->Gebouw*.  

![Building preset][]

- Klik op "Nieuwe relatie."  

![New relation][]

- U zou nu het venster relaties moeten zien. Dit is een klein beetje complex omdat u nu tags gaat toevoegen aan een verzameling wegen.  

![Building relation][]

- Zie dat aan de bovenzijde van het paneel de tags voor de relatie staan. Deze tags werken op dezelfde manier als waarop tags altijd werken.  
- Aan de onderzijde staat een lijst met de leden van de relatie. Deze relatie heeft drie leden - dat zijn de drie wegen die deel uitmaken van onze relatie.  
- We dienen ene aantal dingen te doen om het definiëren van onze multipolygoon te voltooien. Onthoud dat, omdat we de voorkeuze gebouw hebben gebruikt, we al één tag voor ons hebben gedefinieerd, *building=yes*. We dienen nog één tag toe te voegen die het **type** van de relatie definieert. We moeten een tag toevoegen die aangeeft *type=multipolygon*.  
- Klik in het vak voor de tag en voeg deze tag toe.  

![Type multipolygon][]

- Vervolgens dienen we te definiëren wat **rollen** wordt genoemd. Elk lid van een relatie heeft een rol, die aangeeft wat het doel van dat lid is. In dit geval moet de rol van de buitenste polygoon worden gedefinieerd als **outer** en de rol van de twee binnenste polygonen moet worden gedefinieerd als **inner**. Dit zijn de rollen die beschikbaar zijn voor leden van een multipolygoon.  
- Selecteer, in het onderste gedeelte van het linker paneel, elk lid in de lijst. U zult zien dat het lid dat wordt geselecteerd zal worden geaccentueerd in het kaartvenster. Voer **outer** en **inner** in voor de juiste polygonen.  

![Outer or inner role][]

- Klik op OK en uw relatie voor de multipolygoon is voltooid!  

![New multipolygon][]

Wanneer u op deze manier een multipolygoon maakt, zal die op de kaart als volgt worden gerenderd:  

![Multipolygon in Mapnik][]

Multipolygonen kunnen worden gebruikt voor elk complex object dat inner en outer polygonen vereist, zoals een gebouw of een rivier met stukken land erin. Gedetailleerde informatie over multipolygonen is te vinden op de [wiki van OSM](http://wiki.openstreetmap.org/wiki/Relation:multipolygon).  

Relaties voor routes 
----------------

Relaties zijn ook erg nuttig voor het weergeven van lange routes. Een bus- of fietsroute bijvoorbeeld volgt verscheidene wegsegmenten. We kunnen, om een dergelijke route te definiëren, een relatie maken die alle wegsegmenten bevat die deel uitmaken van de route. Aanvullende objecten, zoals bushaltes kunnen ook lid zijn van een routerelatie.  

![Route relation][]

Laten we eens kijken hoe we een relatie voor een busroute maken in JOSM:  

- Selecteer eerst alle wegen waar de route overheen voert. U moet misschien enkele straten splitsen in afzonderlijke segmenten als slechts een gedeelte ervan tot de relatie behoort. U kunt dit doen met behulp van het gereedschap "Weg splitseb".  
- Wanneer alle segmenten zijn geselecteerd, ga naar *Voorkeuzen->Vervoer->Openbaar vervoer->Route openbaar vervoer (Bus)*.  

![Public transport preset][]

- Selecteer "bus", naast het type Route.   
- Klik op "Nieuwe relatie." U zult het venster Relatie tevoorschijn zien komen, net zoals wanneer u een multipolygoon maakt.  

![Bus route relation][]

- Merk op dat er al tags zijn die de relatie definiëren als een route. In plaats van *type=multipolygon*, hebben we *type=route*. We hebben ook een tag die het definieert als een busroute, tegengesteld aan elk ander type route.  
- U zou nu kunnen denken, wat zou de **rol** van de leden zijn? Wel, in het geval van een route, hoeven we de rol van de leden niet te definiëren. Door de rol blanco te laten weet de software dat zij simpelweg deel uitmaken van de route. We zouden ook de rol van elk segment kunnen definiëren als **route**, maar dat is niet noodzakelijk.  
- Klik op OK en uw routerelatie is voltooid!  

> Als u een lijst van alle relaties op de kaart wilt, kunt u het paneel relaties openen door te klikken op de knop ervan aan de linkerkant: ![relation panel button][]{: height="30px"}. Dat zal een paneel openen waar u nieuwe relaties kunt selecteren, bewerken en maken.  

Samenvatting
-------

Relaties kunnen moeilijk te begrijpen zijn en hoeven niet vaak gebruikt te worden, maar het is noodzakelijk om er vanaf te weten. Eens in de zoveel tijd zult u zich realiseren dat u een relatie nodig heeft om iets juist in kaart te brengen, en kunt u deze kennis gebruiken, en meer informatie vinden op de wiki van OSM, om u te helpen relaties juist in kaart te brengen.


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building preset]: /images/josm/building-preset.png
[New relation]: /images/josm/new-relation.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Type multipolygon]: /images/josm/type-multipolygon.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png
