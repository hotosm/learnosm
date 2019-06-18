---
layout: doc
title: Bestandsindelingen
permalink: /nl_NL/osm-data/file-formats/
lang: nl_NL
category: osm-data
---

Bestandsindelingen
=============

> Bijgewerkt 05-09-2016

Net als met elk type gegevens zijn er verschillende manieren om geografische gegevens op een computer op te slaan. Het kan worden opgeslagen in een database, wat een gespecialiseerd systeem is voor het opslaan en ophalen van gegevens, en in feite zijn er databasesystemen die specifiek zijn ontworpen voor het opslaan van geografische gegevens. Het kan ook worden opgeslagen in traditionele computerbestanden, hoewel er veel verschillende bestandsindelingen voor geografische gegevens zijn.  

In dit gedeelte zullen we een aantal manieren verkennen voor het opslaan van geografische gegevens, uitleggen hoe zij werken en hoe zij gewoonlijk worden gebruikt.  

.OSM-bestanden
-----------

De bestandsindeling **.osm** is specifiek voor OpenStreetMap. U zult het nergens anders tegenkomen. Als u ooit gegevens hebt gedownload met behulp van JOSM en het als een bestand hebt opgeslagen, is het u misschien opgevallen dat het bestand is opgeslagen met de extensie **.osm**. Als u een gebruiker van GIS bent, is het u misschien opgevallen dat het niet eenvoudig is deze bestanden te openen met behulp van software zoals QGIS.  

Dus waarom worden gegevens van OSM opgeslagen in een bestandsindeling die niemand anders gebruikt? Het antwoord is dat vele geografische indelingen voor gegevens dateren van vóór het moderne tijdperk van internet, en waren ontworpen voor snelle toegang en snel bevragen zoals men een database zou bevragen. Aan de andere kant zijn gegevens van OSM ontworpen om snel te worden verzonden en ontvangen over het internet in een standaard indeling. Daarom zijn **.osm**-bestanden gecodeerd in XML, en bevatten geografische gegevens in een gestructureerde, geordende indeling. Een eenvoudig **.osm**-bestand zou er ongeveer zo uitzien als het werd bekeken in een tekstbewerker:  

![Sample OSM XML file][]

Gegevens verkrijgen in de indeling **.osm** is eenvoudig - in feite doet u dat elke keer als u gegevens download in JOSM, maar deze bestanden gebruiken voor analyses en het ontwerpen van kaarten is niet eenvoudig. Daarom is het voor u beter de gegevens te converteren naar een andere indeling, of op te halen vanaf een service die de gegevens voor u converteert.  

> Ruwe gegevens voor OSM worden gewoonlijk opgeslagen in **.osm**-bestanden, maar u zou ook bestanden kunnen zien die eindigen op **.bz2** en **.pbf**. Dit zijn in essentie **.osm**-bestanden die zijn gecomprimeerd om ruimte te besparen, wat extreem nuttig kan zijn bij het werken met grote gegevensbestanden.  

Shapefiles
----------

De **shapefile** is een breed gebruikte indeling voor het opslaan van vector geografische gegevens. Het werd ontwikkeld door ESRI, het bedrijf dat ArcGIS maakt, een populair pakket met toepassingen voor GIS.  

Shapefiles zijn in feite een collectie van verscheidene verschillende indelingen. Een shapefile dat bijvoorbeeld gegevens over gebouwen bevat zou bestanden kunnen hebben met de volgende extensies:  

- buildings.**shp**
- buildings.**shx**
- buildings.**dbf**

Shapefiles zullen ook vaak aanvullende bestanden hebben die andere informatie bevatten.  

Een shapefile moet zijn bestemd om slechts één type object te bevatten (punten, lijnen, of polygonen), en elk object heeft zijn attributen opgenomen in een tabel. Anders dan in het systeem van OpenStreetMap waarin elk object een onbeperkt aantal tags kan hebben, moeten de attributen van objecten in een shapefile passen binnen de voor het shapefile gedefinieerde tabelstructuur, die er ongeveer zo uit zou kunnen zien:  

![Shapefile attributes][]

Gegevens van OpenStreetMap kunnen worden geconverteerd naar shapefiles. Verscheidene websites verschaffen shapefiles die zijn geconverteerd vanuit gegevens van OSM. Deze worden besproken in het [volgende hoofdstuk](/nl_NL/osm-data/getting-data).  

Databases
---------

Vele typen informatie worden opgeslagen in databasesystemen, die een logische manier verschaffen voor het beheren en toegankelijk maken van gegevens. Geografische gegevens zijn niet anders, hoewel databases die zijn ontworpen voor geogegevens gespecialiseerd zijn om de complexe functies af te handelen die worden vereist voor het bevragen van geografische gegevens.  

Gegevens van OpenStreetMap worden vaak opgeslagen in een database van PostgreSQL met de extensie PostGIS. Dit type database verschaft snelle toegang tot de gegevens en kan eenvoudig worden gebruikt met Mapnik, een stukje software dat de kaarttegels maakt die worden gebruikt in slippy-kaarten voor het web. Er zijn verscheidene gereedschappen beschikbaar voor het importeren van ruwe gegevens van OSM in een database van PostgreSQL.  

Een ander type database is bekend als SQLite, wat soortgelijke functionaliteit verschaft als een database van PostgreSQL, maar alles wordt opgeslagen in één enkel bestand en vereist geen databasesoftware om te worden uitgevoerd. Deze zijn een beetje moeilijker zelf te maken, maar het kan eenvoudiger zijn om mee te werken voor kleine sets gegevens.  

Samenvatting
-------

In de volgende hoofdstukken zullen we zien hoe u gegevens in verscheidene indelingen kunt downloaden vanaf het internet, en hoe u verscheidene gereedschappen kunt gebruiken om de ruwe gegevens zelf te kunnen bewerken.  


[Sample OSM XML file]: /images/osm-data/example_osm.png
[Shapefile attributes]: /images/osm-data/shapefile_attributes.png