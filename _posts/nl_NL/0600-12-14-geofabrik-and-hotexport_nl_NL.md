---
layout: doc
title: Geofabrik en HOT Export gebruiken
permalink: /nl_NL/osm-data/geofabrik-and-hot-export/
lang: nl_NL
category: osm-data
---

Geofabrik en HOT Export gebruiken
================


Nadat u heeft geleerd gegevens toe te voegen en te bewerken in OpenStreetMap (OSM), wilt u nu misschien de gegevens verkrijgen als back-up of om verder te verwerken met behulp van software voor een Geografisch InformatieSysteem dat Open Source is, zoals QGIS ([www.qgis.org](http://www.qgis.org)).  

Gegevens van OSM verkrijgen op de website van Geofabrik
-------------------------------------

De gegevens van OSM kunnen eenvoudig worden verkregen door ze te downloaden van [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

![download-geofabrik][]

De gegevens zijn opgedeeld in verscheidene regio's. Indonesië kan als deel van Azië worden gevonden door te klikken op de sub-regio Azië in de blauwe tabel, en dan zal de pagina verschijnen die er als volgt uitziet.  

![geofabrik-asia][]

Na het verschijnen aan de bovenzijde van de pagina, bekijk hoe de sub-regio zich opdeelt in landen in Azië. U dient op de staat Indonesië te klikken in de blauwe tabel om de gegevens op te halen, en ze zullen als volgt verschijnen.  

![geofabrik-indonesia][]

Als u dan de gegevens voor Indonesië wilt ophalen in de indeling shapefile (.shp), klikt u op de link indonesia-latest.shp.zip, en het bestand zal worden gedownload. Er zijn verscheidene indelingen die gedownload kunnen worden. Een populaire indeling is shapefile (shp) met lagen van punten, polylijnen en polygonen.  

U kunt controleren wanneer de gegevens voor het laatst werden bijgewerkt. Onthoud dat de server gewoonlijk de gegevens eenmaal per 24 uur bijwerkt, dus als u zojuist gegevens naar OSM hebt geüpload, zullen de gegevens niet automatisch verschijnen als u ze downloadt, maar dient u te wachten op de laatste bijwerkingen van de server.  

Gegevens van OSM ophalen via website HOT Export Tool
--------------------------------------

Het [Humanitarian OpenStreetMap Team](https://www.hotosm.org) (HOT) heeft een online service gemaakt die het gebruikers mogelijk maakt aangepaste extracten uit OSM te maken, overal ter wereld, door een gebied, kaartobjecten en bestandsindelingen  te selecteren. Binnen minuten worden bijgewerkte gegevens van OSM geëxporteerd, gefilterd en geconverteerd. Het volgende gedeelte laat u zien hoe u het gereedschap Export Tool gebruikt. Deze informatie is ook te vinden in het gedeelte ‘[Learn](https://export.hotosm.org/en/v3/learn)’ op export.hotosm.org.

![hot-export-tool][]

## Snel starten

Iedereen kan een aangepaste export voor OpenStreetMap maken met het gereedschap Export Tool - registreer eenvoudigweg een account. U kunt zich registreren met een account van OpenStreetMap van openstreetmap.org, en een geldig e-mailadres, wat zal worden gebruikt om een link te sturen naar uw export als die eenmaal is voltooid.

## Gebied identificeren

Er zijn meerdere manieren om een gebied (Area of Interest (AOI)) te selecteren binnen Export Tool. Dit omvat de mogelijkheid om te typen en te zoeken, de coördinaten te specificeren van een begrenzingsvak, een begrenzingsvak te tekenen, vrij een polygoon te tekenen, de huidige weergave te gebruiken of een bestand van GeoJSON te uploaden.

![export-tool-create][]

Wanneer u eenmaal bent ‘Logged In’ in de HOT Export Tool, zal de tab ‘Create’ beschikbaar komen. De tab ‘Create’ is waar u uw export zult instellen, door het aan de linkerkant te beschrijven en uw gebied (AOI) te selecteren met de kaart aan de rechterkant. 

![export-tool-describe][]

### Werkbalk Zoeken
Er zijn 6 manieren om een gebied (AOI) te definiëren voor uw export. De eerste en tweede gebruiken de werkbalk Zoeken, die een plaats ofwel kan zoeken door de naam in te typen en te kiezen uit de opties eronder of door de coördinaten voor het begrenzingsvak te definiëren. De minimum X, minimum Y, maximum X en maximum Y (West, Zuid, Oost, Noord) coördinaten van een land kunnen worden gevonden [in een lijst CSV, die werd verschaft door de Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/bounding-boxes-for-countries).

![export-tool-search][]
![export-tool-coordinates][]


### Digitaliseren 
De derde en vierde manier waarop een AOI kan worden geselecteerd in de Export Tool, is door ofwel een begrenzingsvak te tekenen door de optie ‘Box’ te selecteren uit de kolom met gereedschappen aan de rechterkant van het scherm. Of u kunt direct een polygoon tekenen op de kaart door het gereedschap ‘Draw’ te selecteren.

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Polygoon uploaden 
De laatste twee manieren waarop een AOI kan worden geselecteerd is door middel van het gereedschap ‘This View’ aan de rechterkant van de kaart, wat het huiidge bereik van de kaartweergave vastlegt, of door het gereedschap ‘Import’ wat u in staat stelt een polygoon van het gebied te uploaden.  

![export-tool-area-view][]
![export-tool-area-import1][]


De geïmporteerde polygoon moet een bestand van GeoJSON zijn met geografische coördinaten in WGS84. Eén van de manieren om een bestand van GeoJSON te maken is door de site geojson.io te gebruiken. Als het gebied eenmaal is geselecteerd in [geojson.io](http://geojson.io/), kopieer dan de tekst in het vak aan de rechterkant, plak het in een bewerker naar keuze, zoals [Atom](https://atom.io/) en sla uw bestand voor GeoJSON op.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


Het bestand van GeoJSON moet enigszins bewerkt worden om het te laten accepteren door Export Tool. Onthoud dat het bestand geen multipolygonen mag zijn. In de eenvoudigste vorm hoeft het bestand alleen maar te vermelden dat het een “type: Polygon” is en de coördinaten te vermelden van de punten/knopen die het gebied identificeren. Het bestand van GeoJSON zal dan met succes worden geparset  door het gereedschap en gebruikt worden om het AOI te specificeren.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Bestandsindelingen selecteren

Het gereedschap maakt het mogelijk gegevens van OSM uit te nemen met de Overpass API in zijn eigen bestandsindeling Protocol Buffer Binary (PBF), voor het filteren van de gegevens voor de kaartobjecten en geassocieerde tags, gespecificeerd door de gebruiker. Als de gegevens eenmaal zijn gefilterd worden zij daarna geconverteerd naar de door de gebruiker gekozen bestandsindeling.  

Momenteel kan het gereedschap gegevens van OSM converteren naar Shapefile .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf, en MBTiles .mbtiles. Ten minste één van de bestandsindelingen moet worden geselecteerd om de export te maken, maar er is geen beperking op het te kiezen aantal, wat kan worden gedaan door meerdere vakken aan te kruisen.

![export-tool-file-formats][]


### Shapefile .shp
Shapefiles is een tabulaire indeling die is ontwikkeld door ESRI. Het is de meest populaire bestandsindeling voor gegevens van GIS. Een shapefile bestaat feitelijk uit 3-4 individuele bestanden, gewoonlijk tezamen gebundeld als een ZIP-archief. Shapefiles hebben bepaalde beperkingen, zoals de bestandsgrootte, afgebroken op 2 gigabytes (GB) en een een limiet voor de naam van een kolom tot 10 tekens. Lees meer over [Shapefiles .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) in het gedeelte Learn.

![export-tool-shapefile][]


### Geopackage .gpkg
OGC Geopackages slaat georuimtelijke gegevens op in één enkele database van SQLite. Geopackages lijken heel erg veel op  voor SpatiaLite ingeschakelde databases van SQLite. Zij zouden bruikbaar moeten zijn in de meest belangrijke toepassingen voor GIS. Geopackages ondersteunen praktisch onbeperkte bestandsgrootten en aantallen kolommen in tabellen, en hebben volledige ondersteuning voor Unicode. Zij zijn in het bijzonder ideaal als u query's voor SQL over de gegevens wilt uitvoeren. Les meer over [Geopackages.gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) in het gedeelte Learn.

![export-tool-sql][]


### Garmin .img
Een bestand .IMG bevat alle benodigde informatie die nodig is om een kaart te renderen op mobiele GPS-apparaten van Garmin. Onthoud dat de cartografische stijl .img en keuzes voor de objecten op de kaart niet afhankelijk zijn van de selectie voor objecten die wordt ingediend in Export Tool - in plaats daarvan wordt een  standaard stijl gebruikt, gebaseerd op alle gegevens van OSM. Lees meer over [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) in het gedeelte Learn.

![export-tool-garmin][]


### Google Earth .kml
De Keyhole Markup Language (KML) is een op XML gebaseerde indeling voor het geografisch modelleren van punten, lijnen, polygonen en geassocieerde attributen. Google Earth is het meest wijdverspreid bekende platform voor het bekijken van de aarde met behulp van KML, wat ook de reden was voor de ontwikkeling ervan. Lees meer over [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) in het gedeelte Learn.

![export-tool-google-earth][]


### OSM .pbf
De canonische gegevensindeling van OSM is een XML-document van knopen, wegen en relaties. Het Protocol Buffer Binary Format (PBF) is een geoptimaliseerde representatie van OSM XML, die kleiner is op schijf en sneller te lezen. Deze indeling is alleen compatibel met specifieke gereedschappen voor OSM, zoals een bewerkingssoftware voor OSM. Elke door de Export Tool verschafte .PBF zou referentieel volledig moeten zijn - dat is, elke knoop, weg of relatie waarnaar wordt verwezen door een weg of relatie zal in de PBF verschijnen. Leer meer over [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) in het gedeelte Learn.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me is een GPS Navigatie- en kaarttoepassing voor Android en iOS smartphones en tablets, en ondersteunt offline mappen en navigeren. Lees meer over [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) in het gedeelte Learn. Volg deze stappen om een aangepaste export uit te voeren met Maps.me op Android: 
- Open Maps.me en navigeer naar uw gebied
- Accepteer de prompt van Maps.me en download het aangeboden gebied
- Sluit Maps.me geforceerd af
- Maak een export van MWM
- Download de export, unzip die, en kopieer het bestand .mwm naar uw apparaat
- Navigeer, met behulp van de Android File Manager, naar de locatie die het bestand .mwm bevat
- Druk lang om het te selecteren en druk op de knop "copy" of "cut"
- Navigeer naar "MapsWithMe" en open de hoogst genummerde map (bijv. 170917)
- Kopieer/verplaats uw bestand .mwm naar deze map door te drukken op de knop "paste"
- verwijder het bestaande bestand .mwm voor uw gebied, waarbij u wel de bestandsnaam onthoudt
- Hernoem uw bestand .mwm  zodat die overeenkomt met het gebied dat werd gedownload door Maps.me (die u zojuist hebt verwijderd) door er lang op te drukken (om te selecteren) en te drukken op de knop "more" (3 verticale punten)
- Open Maps.me

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd is ook een GPS Navigatie en kaarttoepassing voor Android en iOS smartphones, en ook voor tablets, ondersteunt offline renderen, routeren, en zoeken. Lees meer over de toepassing en ontelbare mogelijkheden  van [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) op hun hoofdwebsite. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles is een bestandsindeling voor het opslaan van kaarttegels in één enkel bestand. De Export Tool stelt gebruikers in staat MBTiles te maken die tegels bevatten van OSM, die kunnen worden gebruikt als bron of offline context binnen toepassingen die ze ondersteunen. Onthoud dat MBTiles alle objecten van OSM zullen uitnemen uit het geselecteerd gebied door middel van de Export Tool, waarbij de tab ‘3 Data’ automatisch schakelt naar een keuzeoptie en zoombereik, in plaats van de standaard boom voor tags en de YAML-optie voor het selecteren van objecten. Lees meer over [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) in het gedeelte Learn.

![export-tool-mbtiles][]


Aanvullende bestandsindelingen worden doorlopend voorgesteld en toegevoegd aan de Export Tool. Als er een bestandsindeling is die u in de toekomst gaar toegevoegd zou zien, plaats dan een opmerking op de opslagplaats van [GitHub](https://github.com/hotosm/osm-export-tool/issues). Voor meer gedetailleerde informatie met betrekking tot elk type bestandsindeling, bezoek de pagina ‘File Formats’ in het gedeelte ‘[Learn](https://export.hotosm.org/en/v3/learn)’ op de website van het gereedschap.



## Kaartobjecten aanpassen

Het gereedschap stelt de gebruiker in staat de geselecteerde gegevens binnen het gedefinieerde gebied aan te passen. De gegevens van OSM worden gedefinieerd met behulp van tagfilters en selecties van sleutels, met de boom van tags of het formulier van YAML. D boom van tags is voor gevallen van algemeen gebruik, en geeft een gecureerde verzameling filters en selecties weer, waar de configuratie van YAML volledig beheer verschaft over de filters en selecties, met behulp van een op SQL lijkende filterdefinitie.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM is een open globale database van getagde geografische objecten, met drie typen elementen:
knopen, die een punt weergeven op het oppervlak van de aarde
Wegen, die sets van knopen zijn die lijnen of polygonen vormen
Relaties, die sets van knopen, wegen of andere relaties zijn

Elk van deze elementen mag elk aantal tags sleutel=waarde hebben. Bijvoorbeeld: een postkantoor kan worden weergegeven door een weg met de tags building=yes en amenity=post_office. Laten we eens kijken hoe deze tags kunnen worden gedefinieerd in de Export Tool met behulp van de boom van tags en het formulier van YAML om de gegevens van OSM te filteren.

### Boom van tags
De boom van tags is de eenvoudigste manier om te beginnen met het selecteren van objecten, door eenvoudig de gewenste keuzevakken voor de gewenste ouder of kind te selecteren. Onthoud dat het selecteren van een keuzevak voor een ouder de aanvullende tags sleutel=waarde zal toevoegen die zijn geassocieerd aan het thema, als ook de keuzevakken voor de kinderen eronder. Elk keuzevak voor een ouder heeft een verschillende query om gegevens te filteren, het wordt dan ook bijzonder aanbevolen om de syntaxis voor elk thema te verkennen door over het keuzevak te gaan, wat een informatievak aan de rechterkant zal laten zien. 

![export-tool-treetag-sql][]


Door, bijvoorbeeld, het keuzevak voor de ouder ‘Emergency’ te selecteren, zullen automatisch de daaronder gelegen keuzevakken voor kinderen ‘Police Station’, ‘Ambulance Station’ en ‘Fire Station’ worden geselecteerd, daarnaast zullen, in aanvulling daarop, ook alle tags met emergency=yes, amenity=police en amenity=fire_station worden geselecteerd in de volgende query voor SQL:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

De keuzevakken voor ouders geven niet altijd weer wat als kinderen daaronder beschikbaar is, om te proberen alle mogelijke tags die zijn geassocieerd aan een thema in aanmerking te laten komen. Tags voor OSM evolueren doorlopend en we willen dat het gereedschap zich aan die wijzigingen kan aanpassen. Allen de meest voorkomende tags sleutel=waarde worden als keuzevakken voor kinderen weergegeven, en de keuzevakken voor ouders worden gebruikt om de niet zo frequent gebruikte te proberen en op te nemen, maar wel binnen thema vallen. Indien u suggesties hebt voor het aanpassen van deze thema's en tags, plaats dan een opmerking in het [spreadsheet](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) dat wordt gebruikt om de boom van tags te vullen, en we zullen proberen die in te passen waar mogelijk.

![export-tool-treetag-spreadsheet][]


### Formulier van YAML
Het gebruiken van een configuratie van YAML verschaft volledig beheer over het toepassen van filters op de gegevens van OSM, met behulp van een op SQL lijkende filterdefinitie om tags sleutel=waarde toe te passen. Onthoud dat ook de boom voor tags syntaxis genereert voor het formulier van YAML, dus elk geselecteerd keuzevak voor ouder of kind zal automatisch worden toegepast in het vak van YAML. Dit dient als een beginpunt voor de query die dan verder bewerkt kan worden. 

![export-tool-treetag-yaml][]


Gebruiken van YAML werd gekozen vanwege zijn eenvoud en compatibiliteit met SQL. De YAML-indeling voor het selecteren van objecten  is soortgelijk aan de stijlbestanden die worden gebruikt door programma's zoals osm2pgsql en imposm. Het is gevoelig voor witruimte, elk kind-element springt in ten opzichte van zijn ouder-element, en wordt voorafgegaan door een streepje. Achter dit streepje moet een spatie staan. Hier is een basaal voorbeeld van het selecteren van objecten met 3 thema's, buildings, waterways en hospitals:

![export-tool-yaml-code1][]


YAML heeft Thema's, en twee gegevensstructuren, Mapping en Lists
Thema in het hierboven staande voorbeeld is: buildings
Mappings in het bovenstaande voorbeeld zijn: types en select 
Lists in het bovenstaande voorbeeld zijn: kind-elementen van select en types

YAML: Thema's
Thema's zijn het bovenste niveau sleutels in het document van YAML, met geldige tekens, inclusief letters, nummers en underscores. 

YAML: Typen geometrie 
De lijstwaarden onder de types voor mapping mogen één of meer zijn van ‘- points’, ‘- lines’, ‘- polygons’. Als de sleutel types wordt weggelaten zullen alle drie de typen geometrie worden opgenomen in het thema.

YAML: Selecties van kolommen 
Lijstitems onder de sleutel voor selecteren van mapping bepaalt de kolommen voor elk thema. Het volgende voorbeeld zal de kolommen ‘name’ en ‘amenity’ vullen met hun waarden uit OSM:

![export-tool-yaml-code2][]


YAML: Filters
Filters staan onder de sleutel where: in elk thema. Zij definiëren welke subset van objecten van OSM  tot dat thema behoren. Het volgende voorbeeld zal het thema filteren tot alleen de objecten waarvan de sleutel natural de waarde waterway heeft:

![export-tool-yaml-code3][]


Onthoud: Het is bijna altijd nodig om enige soort van filteren te hebben, anders zal het thema eenvoudigweg alle  objecten van OSM bevatten voor de opgegeven typen geometrie. Een filter wordt gespecificeerd met behulp van een SQL lijkende syntaxis, met geldige sleutelwoorden IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


JOSM voorkeuzen
Oudere versies van de Export Tool gebruikten JOSM Preset .XML-bestanden om selecties van objecten te definiëren. De nieuwe versie gebruikt YAML omdat dat meer flexibeler is in hoe het gegevens van OSM transformeert. De nieuwe Export Tool kan echter helpen bij het converteren van voorkeuzen voor JOSM in configuraties van YAML, door de knop ‘Load from JOSM Preset .XML’ te selecteren. Onthoud: Als de voorkeuze wat meer complex is, zou die mogelijk moeten worden geschreven als een nieuwe configuratie voor YAML, gebaseerd op de elementen ‘item’ die zijn opgenomen in de XML.

![export-tool-load-preset][]



### Configuraties

Configuraties voor YAML kunnen wordne gedefinieerd en woorden opgeslagen voor toekomstig gebruik middels de pagina ‘Configs’. Het is nuttig om één configuratie voor een project te maken dat dan kan worden gebruikt voor alle exports die zijn gerelateerd aan dat project. Geef de configuratie een ‘name’ en ‘description’ zodat die herkenbaar is voor andere gebruikers. Niet selecteren van het keuzevak ‘Public’ zal de configuratie alleen zichtbaar maken voor deze gebruiker. 

![export-tool-configuration-saved][]


Onthoud dat configuraties kunnen worden bewerkt, wat nuttig is voor het evolueren van het selecteren van objecten gedurende de loop van een project. Opgeslagen configuraties van YAML kunnen worden geselecteerd via de optie ‘Stored Configuration’ op de tab ‘3 Data’ bij het maken van een export. Gebruik de werkbalk Zoeken om te zoeken naar configuraties die zijn gerelateerd aan uw project.

![export-tool-configuration-stored][]


Voor meer gedetailleerde informatie met betrekking tot het selecteren van objecten en YAML, bezoek dan ‘Selecting Features’ en ‘YAML Specification’ in het gedeelte ‘[Learn](https://export.hotosm.org/en/v3/learn)’ op de website van het gereedschap. 




[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export-tool]: /images/osm-data/hot-export-tool.png
[export-tool-create]: /images/osm-data/export-tool-create.png
[export-tool-describe]: /images/osm-data/export-tool-describe.png
[export-tool-search]: /images/osm-data/export-tool-search.png
[export-tool-coordinates]: /images/osm-data/export-tool-coordinates.png
[export-tool-area-bbox]: /images/osm-data/export-tool-area-bbox.png
[export-tool-area-draw]: /images/osm-data/export-tool-area-draw.png
[export-tool-area-view]: /images/osm-data/export-tool-area-view.png
[export-tool-area-import1]: /images/osm-data/export-tool-area-import1.png
[export-tool-geojson-io]: /images/osm-data/export-tool-geojson-io.png
[export-tool-geojson-edit1]: /images/osm-data/export-tool-geojson-edit1.png
[export-tool-geojson-edit2]: /images/osm-data/export-tool-geojson-edit2.png
[export-tool-area-import2]: /images/osm-data/export-tool-area-import2.png
[export-tool-file-formats]: /images/osm-data/export-tool-file-formats.png
[export-tool-shapefile]: /images/osm-data/export-tool-shapefile.png
[export-tool-sql]: /images/osm-data/export-tool-sql.png
[export-tool-garmin]: /images/osm-data/export-tool-garmin.jpg
[export-tool-google-earth]: /images/osm-data/export-tool-google-earth.jpg
[export-tool-xml-code]: /images/osm-data/export-tool-xml-code.png
[export-tool-mapsme]: /images/osm-data/export-tool-mapsme.png
[export-tool-osmand]: /images/osm-data/export-tool-osmand.png
[export-tool-mbtiles]: /images/osm-data/export-tool-mbtiles.jpg
[export-tool-treetag-tab]: /images/osm-data/export-tool-treetag-tab.png
[export-tool-yaml-tab]: /images/osm-data/export-tool-yaml-tab.png
[export-tool-treetag-sql]: /images/osm-data/export-tool-treetag-sql.png
[export-tool-treetag-spreadsheet]: /images/osm-data/export-tool-treetag-spreadsheet.png
[export-tool-treetag-yaml]: /images/osm-data/export-tool-treetag-yaml.png
[export-tool-yaml-code1]: /images/osm-data/export-tool-yaml-code1.png
[export-tool-yaml-code2]: /images/osm-data/export-tool-yaml-code2.png
[export-tool-yaml-code3]: /images/osm-data/export-tool-yaml-code3.png
[export-tool-yaml-code4]: /images/osm-data/export-tool-yaml-code4.png
[export-tool-load-preset]: /images/osm-data/export-tool-load-preset.png
[export-tool-configuration-saved]: /images/osm-data/export-tool-configuration-saved.png
[export-tool-configuration-stored]: /images/osm-data/export-tool-configuration-stored.png




