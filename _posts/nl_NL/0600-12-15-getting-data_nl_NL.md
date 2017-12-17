---
layout: doc
title: Gegevens van OSM ophalen
permalink: /nl_NL/osm-data/getting-data/
lang: nl_NL
category: osm-data
---

Gegevens van OSM ophalen
=================  

> Deze handleiding kan gedownload worden als [Getting_OSM_Data_nl_NL.odt](/files/Getting_OSM_Data_nl_NL.odt) of [Getting_OSM_Data_nl_NL.pdf](/files/Getting_OSM_Data_nl_NL.pdf)  
> Bijgewerkt op 05-04-2016

Wanneer u de meest recente gegevens van OSM wilt ophalen, is de eenvoudigste manier om een extract van een website te downloaden. Er zijn verscheidene webservices die gegevensextracten voor een gebied van uw keuze verschaffen.  

Gegevensextracten downloaden
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) is een bedrijf dat is gespecialiseerd in het werken met OpenStreetMap. Zij verschaffen een variëteit aan gratis extracten in shapefile- en ruwe OSM-indeling op hun [download website](http://download.geofabrik.de). Het voordeel van het downloaden van gegevens van GeoFabrik is dat zij elke dag worden bijgewerkt, en het is eenvoudig en betrouwbaar. Een nadeel is dat de gegevens per land geëxtraheerd zijn en niet alle landen zijn beschikbaar.  

### Metro Extracts

[Een andere website onderhouden door Mapzen](https://mapzen.com/data/metro-extracts/) verschaft shapefiles en ruwe OSM-indeling voor steden van over de gehele wereld, wekelijks geëxtraheerd. Dit is nuttig als u zoekt naar een gegevensextract voor één enkele stad.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) biedt iets soortgelijks als Metro Extracts maar voor een andere selectie steden. De gegevens worden ook wekelijks bijgewerkt.

>Onthoud dat objecten in OpenStreetMap een onbeperkt aantal "vrije" tags hebben,
>maar shapefiles hebben attributen die zijn opgeslagen in een begrensd aantal kolommen. Dit betekent
>dat wanneer gegevens van OSM worden geconverteerd naar shapefiles, zullen alleen de gespecificeerde tags worden
>opgenomen in de tabel van het shapefile. De hierboven vermelde websites verschaffen shapefiles
>met een standaard set van algemene tags, maar als u specifieke tags wilt extraheren
>dient u een van de meer gespecialiseerde services in het volgende gedeelte te gebruiken
>of te leren hoe  u de gegevens zelf exporteert.

Aangepaste extracten
-------------------

### HOT Export Tool  

Het [Humanitarian OpenStreetMap Team](https://www.hotosm.org) heeft een online service gemaakt die het gebruikers mogelijk maakt aangepaste extracten uit OSM te maken, overal ter wereld, door een gebied, kaartobjecten en bestandsindelingen  te selecteren. De service is beschikbaar op [export.hotosm.org](https://export.hotosm.org/en/v3). Binnen minuten worden bijgewerkte gegevens van OpenStreetMap (OSM) geëxporteerd, gefilterd en geconverteerd. Gebieden (AOI) kunnen worden geselecteerd door middel van zoeken, coördinaten van begrenzingsvakken, het tekenen van een vak, vrij tekenen, met behulp van de weergave of het importeren van een GeoJSON-bestand. Huidige bestandsindelingen bevatten Shapefile (.shp), GeoPackage (.gpkg), Garmin (.img), Google Earth (.kml), OSM (.pbf), MAPS.ME (.mwm), OsmAnd (.obf) en MBTiles (.mbtiles). Kaartobjecten en specifieke tags kunnen ofwel worden geselecteerd in de boom met tags of door enige code voor YAML te configureren. Bekijk, om meer te weten te komen, het gedeelte ‘[Learn](https://export.hotosm.org/en/v3/learn)’ op export.hotosm.org.

![hot-export-tool][]

### BBBike  

U kunt uw eigen gebied uit de gehele wereld selecteren selecteren met behulp van de service op [http://extract.bbbike.org/](http://extract.bbbike.org/). Nadelen zijn dat u geen aangepaste tags kunt selecteren en dat de hoeveelheid gegevens die u kunt downloaden begrensd is.  

### Overpass

Overpass is een API (Application Programming Interface) voor het uitnemen van gegevens uit een alleen-lezen kopie uit de hoofddatabase van OpenStreetMap die een bijna ongelimiteerde hoeveelheid gegevens kan leveren. Met behulp van een querytaal kunt u de subset van gegevens die u wilt verkrijgen aanpassen. U kunt ofwel de API direct gebruiken door een http-request te genereren of via de interface voor de overpass turbo.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) is een interactieve querygenerator waar u eerst zou moeten zoomen naar de van toepassing zijnde regio op de kaart. Voer uw query in in het veld links op de pagina en activeer acties met behulp van de knoppen bovenin de interface. Als de querytaal nieuw voor u is zou het gebruiken van de wizard ul op weg moeten helpen. De wiki van OSM bevat een [volledige beschrijving](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) van de syntaxis van de querytaal als ook een [collectie voorbeelden](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

De kaart zal alle gegevens accentueren die door uw query zijn geselecteerd en die u dan kunt aanpassen. Druk op "Run" om de weergave van de resultaten te vernieuwen. Als u tevreden bent met wat u ziet, dan biedt "Export" een aantal keuzes, waaronder ruwe gegevens van OSM. Als de hoeveelheid gegevens begrensd is kunt u ze zowel direct benaderen door te schakelen tussen de kaartweergave en de gegevensweergave met behulp van de knopen uiterst rechts bovenin. De optie voor exporteren *Query -> compact OverpassQL* genereert een hyperlink om te worden gebruikt voor de Overpass API.

![overpass turbo][]

Als u een uitgebreide query wilt samenstellen om een subset van gegevens uit een groot gebied te verkrijgen dan is het een goed idee om deze query in Overpass Turbo op een klein gebied te testen en te verbeteren. U dan uitzoomen naar uw volledige gebied dat u wilt verkrijgen en de resulterende URL voor de query direct gebruiken voor de API. Het volgende gedeelte legt uit hoe u dit kunt doen.

#### Overpass API

[Overpass API](http://wiki.openstreetmap.org/wiki/Overpass_API) is een toegewezen service die is geoptimaliseerd voor het bevragen van, maar niet het schrijven van, gegevens van OpenStreetMap. Vanwege deze optimalisatie werkt het zeer snel, vergeleken met de API voor de hoofddatabase en heeft virtueel geen begrenzing op de hoeveelheid getransfereerde gegevens. Verscheidene instanties van deze service zijn op het net beschikbaar, die welke in het volgende voorbeeld wordt gebruikt verschaft ook enige informatie op [zijn thuispagina](http://overpass-api.de/)

Als u een werkende URL voor de query hebt voor het indienen van een http-request bij de Overpass API dan is een programma zoals [wget](https://www.gnu.org/software/wget/) - beschikbaar voor verschillende besturingssystemen, zie [hier](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - wat u in staat stelt de ruwe gegevens van OSM direct vanaf de server te downloaden en lokaal op te slaan. Het volgende snippet is een script voor de bash shell die gewoonlijk op systemen van Unix aanwezig is, dat alle gegevens binnen een gespecificeerd begrenzingsvak verkrijgt:

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
>Wat gebeurt hier (voor de nieuwsgierigen die niet de volledige documentatie van de querytaal willen lezen)?  
>node(...) selecteert alle knopen binnen een begrenzingsvak;  
>< herhaalt zich volledig, d.i. selecteert alle wegen die deze knopen bevatten en alle relaties die deze knopen en wegen bevatten;  
>rel(br) selecteert alle ouder-relaties van de tot dusverre verkregen relaties (anders zouden master-relaties niet worden verkregen)
>



Overzicht
-------  

De in dit hoofdstuk vermelde services zijn alles wat de gemiddelde gebruiker nodig heeft om de gegevens van OSM te verkrijgen die hij wil en om er mee te  kunnen werken in software voor GIS. U wilt echter misschien meer leren over meer krachtige manieren om zelf met de gegevens te werken. De resterende hoofdstukken in dit gedeelte zijn nogal technisch, maar laten meer geavanceerde methoden zien voor het manipuleren en toegang krijgen tot gegevens van OSM.  


[hot-export-tool]: /images/osm-data/hot-export-tool.png
[overpass turbo]: /images/osm-data/overpass_turbo.png