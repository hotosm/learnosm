---
layout: doc
title: Gegevens van OSM - Een overzicht
permalink: /nl_NL/osm-data/data-overview/
lang: nl_NL
category: osm-data
---

Gegevens van OSM: Een overzicht
==================



<!--In dit gedeelte zullen we functies van OpenStreetMap bekijken, die ons beter laten begrijpen hoe de gegevens zijn gestructureerd, en hoe we ze het best kunnen gebruiken.-->

Hoe OSM werkt
--------------
Laten we eens bekijken hoe OpenStreetMap werkt. Duizenden gebruikers op de gehele wereld voegen continu gegevens toe aan de kaart en bewerken die, maar wat gebeurt er achter de schermen?  

Wanneer u of andere gebruikers wijzigingen maken met behulp van software voor het bewerken, zoals JOSM of iD, communiceert die software met een centrale server van OpenStreetMap en stelt die in kennis van uw wijzigingen. Op die server staat een enorme database, die alle informatie over de locaties bevat en de attributen van elk geografisch object in de gehele OpenStreetMap.  

Het is, omdat OSM gratis is en open, voor iedereen mogelijk om alle gegevens in deze database te downloaden. Het is echter, omdat hij zo enorm is (*de gegevens omvatten meer dan 30 GB, zelfs als het is gecomprimeerd*), nagenoeg onmogelijk om met alle gegevens in één keer te werken.  

Vanwege deze beperking zijn er verscheidene manieren voor het **exporteren** en **uitnemen** van gegevens die worden behandeld in dit gedeelte. Exporteren betekent dat gegevens van OpenStreetMap vanuit zijn eigen indeling worden geconverteerd naar een indeling die handig is voor u. Dit is iets anders dan het **uitnemen** van gegevens, wat betekent dat de gegevens van het gebied van uw keuze worden uitgeknipt. Het zou ook kunnen betekenen om de specifieke objecten, die u vanuit een gebied wilt, uit te nemen. Deze termen worden vaak over en weer gebruikt. We zullen hier meer over leren door het gedeelte Gegevens van OSM.  

Geogegevens gebruiken
--------------
Als u geen ervaren gebruiker van GIS bent, is het belangrijk om het verschil te kennen tussen software om OSM te bewerken, zoals JOSM en software voor GIS, zoals QGIS en ArcGIS.  

Bewerkers zoals iD of JOSM hebben één bronfunctie waar zij bijzonder goed in zijn - het voor gebruikers gemakkelijk maken om OpenStreetMap te bewerken. Maar het is geen software die bedoeld is voor het analyseren of bevragen van gegevens -
die functie kan het best worden overgelaten aan andere toepassingen. Software voor GIS, zoals de gratis en open source [QGIS (Quantum GIS)](http://www.qgis.org), stelt gebruikers in staat om goed ogende kaarten te maken, gegevens te bevragen en te analyseren, en nog veel meer. Software voor GIS kan ook worden gebruikt voor het bewerken van geogegevens, maar het is veel eenvoudiger OpenStreetMap te bewerken met de daarvoor bestemde bewerkers voor OSM.  

In het volgende hoofdstuk zullen eens nader kijken naar de bestandsindelingen die zijn geassocieerd met OpenStreetMap en geografische gegevens in het algemeen. Daarna zullen we kijken naar verscheidene manieren om toegang te krijgen tot gegevens van OSM en die te bewerken en ze te converteren tussen de verschillende bestandstypen.  


Gegevens van OSM ophalen
-----------------

Dat is mooi, maar hoe haal je de gegevens eruit die je wilt?  

In dit hoofdstuk zullen we de verscheidene manieren laten zien voor het exporteren van gegevens van OSM. We blijven bij de basis, maar onthoud dat u, om de gegevens effectief te kunnen gebruiken, waarschijnlijk software voor GIS nodig heeft,
zoals de gratis toepassing QGIS.  

Laten we, vóór we beginnen, even de terminologie doornemen. ten eerste, **exporteren** betekent het converteren van gegevens van OpenStreetMap vanuit zijn eigen XML-indeling naar een indeling die handig is voor u. Dit is iets anders dan het **uitnemen** van gegevens, wat betekent dat de gegevens van het gebied van uw keuze worden uitgeknipt. Het zou ook kunnen betekenen om de specifieke objecten, die u vanuit een gebied wilt, uit te nemen. We zullen deze termen regelmatig gebruiken in dit hoofdstuk en het is belangrijk het verschil te kennen.  

De API van OSM
------------
Het proces van het bewerken van OSM functioneert door wat bekend staat als een API, wat software voor bewerking in staat stelt te communiceren met de centrale server. Als u bijvoorbeeld JOSM gebruikt en u selecteert het gebied dat u wilt bewerken, wordt een aanroep naar de API verzonden naar de server, die alle gegevens opvraagt die bestaan binnen het gebied dat u heeft geselecteerd.  

In feite, wanneer u gegevens in JOSM downloadt, bent u de gegevens aan het **uitnemen** voor een specifiek gedeelte van de wereld. De gegevens worden dan verzonden in de indeling **.osm**, die u dan kunt bewerken in JOSM. Als u gegevens downloadt in JOSM en die dan opslaat, zult u zien dat het bestandstype **.osm** is. We zullen hier nader over spreken in het volgende hoofdstuk.  
