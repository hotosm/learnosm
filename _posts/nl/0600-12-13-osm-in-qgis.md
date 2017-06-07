---
layout: doc
title: Gegevens van OSM gebruiken in QGIS
permalink: /nl/osm-data/osm-in-qgis/
lang: nl
category: osm-data
---

Gegevens van OSM gebruiken in QGIS
=================

> Deze handleiding kan gedownload worden als [Using_OSM_data_in_QGIS_nl.odt](/files/Using_OSM_data_in_QGIS_nl.odt) of [Using_OSM_data_in_QGIS_nl.pdf](/files/Using_OSM_data_in_QGIS_nl.pdf)  
> Bijgewerkt op 19-07-2015

QGIS (eerder Quantum GIS) is een open-source, platformonafhankelijk Geografisch Informatie Systeem met vele mogelijkheden. Met QGIS kunt u toegang verkrijgen tot up-to-date gegevens van OSM wanneer u maar wilt, de tags selecteren die u wilt opnemen, en ze eenvoudig exporteren naar een gemakkelijk te gebruiken database voor SQLite of shapefile.

In dit hoofdstuk zullen we door de stappen gaan om dit te doen. We gaan er van uit dat u QGIS 2.x al heeft gedownload en geïnstalleerd. Als u dat nog niet gedaan heeft, kunt u het downloaden vanaf <http://www.qgis.org/en/site/forusers/download.html>.

We zullen eerst de meest recente gegevens van OSM in de ruwe indeling **.osm** ophalen om onze aangepaste, up-to-date lagen van OSM in QGIS te laden. Dan zullen we deze gegevens converteren naar een database van SQLite, wat een lichtgewicht databasesysteem is dat in één bestand is opgeslagen op uw systeem. Tenslotte zullen we een laag maken (of meerdere lagen) die alleen de typen objecten en tags bevatten waar we toegang toe willen hebben. Deze lagen kunnen in QGIS worden gebruikt zoals ze zijn of worden opgeslagen in een andere indeling, zoals een shapefile.

Toegang tot gegevens van OpenStreetMap
---------------------------

Het eerste dat we zullen doen is enkele up-to-date gegevens van OSM ophalen. We kunnen dat op verscheidene manieren doen.
Natuurlijk is het ophalen van gegevens van de server van OSM, zoals we doen in de bewerker JOSM, beperkt, zodat we niet
een enorme hoeveelheid ruwe gegevens in één keer op kunnen halen - er zijn echter manieren om grotere gegevenssets op te halen, zoals
beschreven in de eerdere hoofdstukken over [Getting OSM Data](/nl/osm-data/getting-data) en [Using Geofabrik and HOT Export](/nl/osm-data/geofabrik-and-hot-export).

Voor deze handleiding zullen we de ingebouwde functie voor downloaden in in QGIS gebruiken.

-    Open QGIS en ga naar Vector -> OpenStreetMap -> Gegevens downloaden...
-    U kunt hier uit verschillende opties kiezen - als uw venster al het bereik weergeeft
	dat u wilt, selecteer dan het vak naast "Van kaartvenster." Als u een laag heeft geladen in QGIS met het correcte
	bereik, kies dan "Van laag" en selecteer de laag die u wilt gebruiken. Hier kiezen wij voor "Handmatig"
	en voeren breedte- en lengtegraden in die een **begrenzingsvak** vormen rondom het gebied dat we
	willen ophalen. U kunt de breedte- en lengtegraden invoeren die voor u van belang zijn, maar onthoud
	dat het gebied niet te groot mag zijn, of u zult niet in staat zijn alle gegevens te downloaden.

![bounding box][]

-    Selecteer een naam en locatie voor het uitvoerbestand, gebruik de bestandsextensie **.osm**, en klik op OK.
-    U krijgt een bericht als het downloaden voltooid  is. Klik op "Close" om het dialoogvenster Downloaden te
	verlaten.

![download complete][]

-    De gegevens van OSM zullen nu worden opgeslagen op de locatie die u heeft gespecificeerd.

>    Deze methode voor toegang tot gegevens van OSM is hetzelfde als wanneer u het downloadde in JOSM of vanaf
>    [openstreetmap.org](http://www.openstreetmap.org). Voor grotere uitsneden die up-to-date zijn,
>    kunt u proberen te downloaden vanaf [HOT export site](http://export.hotosm.org) of
>    [bbbike.org](http://extract.bbbike.org/). Onthoud dat wanneer u een gecomprimeerd bestand van OSM download,
>    u het eerst moet uitpakken naar de indeling **.osm** voor de volgende stappen.

Gegevens in SQLite importeren
---------------------------

Vervolgens moeten we ons ruwe **.osm**-bestand importeren in een databasebestand van SQLite.

-    Ga naar Vector -> OpenStreetMap -> Topologie uit XML importeren...
-    Selecteer, in het eerste veld, uw **.osm**-bestand.
-    U kunt de naam van het uitvoer databasebestand wijzigen als u dat wilt.
-    Houd het vak naast "Maak connectie..." geselecteerd

![import dialog][]

-    Klik op OK.
-    Klik op "Close", indien voltooid. 

Lagen maken
--------------

Tenslotte zullen we lagen definiëren die kunnen worden gebruikt in QGIS, aangepast naar onze wensen.

-    Ga naar Vector -> OpenStreetMap -> Topologie naar SpatiaLite exporteren...
-    Selecteer, in het eerste veld, de database die u in de eerdere stap heeft gemaakt.

![input db file][]

-    Selecteer, onder "Export-type," het type object waarvoor u de laag wilt maken. Hier
	zullen we een laag met polygonen maken.

![export type][]

-    Pas de naam van de laag aan als u dat wilt.

Onder "Geëxporteerde tags" is waar de magie wordt uitgevoerd. Hier kunnen we selecteren welke tags zullen worden
opgenomen in onze uitvoerlaag. Dit geeft ons flexibiliteit over exact welke gegevens we willen
benaderen.

-    Klik op "Vanuit DB laden" om een lijst te zien van alle beschikbare tags in de database. Vergroot het venster door aan de hoek te slepen als dat helpt. U ziet
	alle in deze gegevens opgenomen tags, en ook het aantal objecten dat elke tag heeft.
-    Selecteer de vakken naast de tags die u wilt opnemen. Hier zullen we een paar mogelijkheden selecteren
	die nuttig zijn voor polygonen die gebouwen weergeven.

![export full][]

-    Wanneer u klaar bent, klik op OK.
-    Sluit het vak. Uw laag zou automatisch moeten worden toegevoegd.

![cairo polygons][]

-    Klik met rechts op de laag en klik op "Open attributentabel."

![open attribute table][]

-    U kunt hier zien dat we alleen een attributentabel hebben die de attributen bevat die we hebben geselecteerd.

![attribute table][]

Onthoud dat we niet een laag hebben gemaakt met **alleen** gebouwen. In plaats daarvan hebben we een laag gemaakt
die alle polygonen uit onze originele gegevens bevat, maar alleen de tags bevatten die we
hebben geselecteerd. Filteren van deze laag om alleen de gebouwen te laten zien, zou ons een query doen laten uitvoeren
die alleen de polygonen filtert waar building=yes.

Samenvatting
-------

Dit proces maakt het eenvoudig om up-to-date gegevens van OSM te verkrijgen en die in QGIS te zetten. Als u eenmaal
lagen zoals deze in QGIS heeft, is het mogelijk om ze als shapefiles op te slaan, filters en query's uit te voeren,
enzovoort. Voor meer details over deze functies, bekijk het menu Help in QGIS.


[bounding box]: /images/osm-data/bounding_box.png
[download complete]: /images/osm-data/download_complete.png
[import dialog]: /images/osm-data/import_dialog.png
[input db file]: /images/osm-data/input_db_file.png
[export type]: /images/osm-data/export_type.png
[export full]: /images/osm-data/export_full.png
[cairo polygons]: /images/osm-data/cairo_polygons.png
[open attribute table]: /images/osm-data/open_attribute_table.png
[attribute table]: /images/osm-data/attribute_table.png
