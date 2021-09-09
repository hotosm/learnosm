---
layout: doc
title: Gegevens van OSM gebruiken in QGIS
permalink: /nl_NL/osm-data/osm-in-qgis/
lang: nl_NL
category: osm-data
---

Gegevens van OSM gebruiken in QGIS
=================


QGIS (eerder Quantum GIS) is een open-source, platformonafhankelijk Geografisch Informatie Systeem met vele mogelijkheden. Met QGIS kunt u toegang verkrijgen tot up-to-date gegevens van OSM wanneer u maar wilt, de tags selecteren die u wilt opnemen, en ze eenvoudig exporteren naar een gemakkelijk te gebruiken database voor SQLite of shapefile.  

In dit hoofdstuk zullen we door de stappen gaan om dit te doen. We gaan er van uit dat u QGIS 3.x al heeft gedownload en geïnstalleerd. Als u dat nog niet gedaan heeft, kunt u het downloaden vanaf <https://www.qgis.org/en/site/forusers/download.html>.  

We zullen een plug-in, QuickOSM, gebruiken om gegevens uit de database van OpenStreetMap te importeren. Open, om deze plug-in te installeren, het dialoogvenster Plug-ins beheren en installeren in het menu Plug-ins. Zoek naar QuickOSM en installeer dat. Dit zal een item toevoegen aan het menu Vector  

Gegevens ophalen uit de database
---------------------------

Het eerste wat we zullen doen is het ophalen van enkele bijgewerkte gegeven van OSM. We kunnen dat op meerdere manieren doen. De plug-in QuickOSM stelt ons in staat grote hoeveelheden gegevens uit te nemen omdat het de API van Overpass gebruikt en niet de hoofdserver van de database van OSM.

- Open QGIS en ga naar Vector -> QuickOSM -> QuickOSM…  

![quickosm][]

- U kunt hier uit verschillende opties kiezen - als uw venster  het bereik al weergeeft dat u wilt, schakel dan het combinatievak, dat standaard "In" weergeeft, naar "Kaartbereik". Als u een laag hebt geladen in QGIS met het juiste bereik, kies dan "Laagbereik" en selecteer de laag die u wilt downloaden. Gebruiken van de standaard "In" vereist dat een relatie of polygoon bestaat met deze naam. Kies anders "Rondom" en dan volstaat een knoop met die naam. U kunt een perimeter selecteren (standaard 1000 m) rondom deze knoop, waarvan de gegevens zullen worden geladen vanuit de database.

- Klik op "Query uitvoeren".  
- U zult een bericht krijgen als het downloaden voltooid is. De gegevens worden opgeslagen in drie tijdelijke lagen, respectievelijk een voor knopen, wegen en polygonen.

![quickosm loaded][]


De gegevens importeren
---------------------------

Er zijn verscheidene opties om reeds gemaakte extracten van een gebied te verkrijgen. <https://wiki.openstreetmap.org/wiki/Planet.osm#Country_and_area_extracts> bevat een lijst met verschillende websites. Selecteer eenvoudigweg een bestand **.osm** of **.pbf** en download het. 

U kunt ofwel QuickOSM gebruiken om het te importeren door te klikken op 'OSM bestand' in de linkerbalk. Als u eenmaal QuickOSM hebt gebruikt voor OSM-bestanden zou dat bekend moeten zijn bij QGIS en kunt u de normale import voor vectorlagen gebruiken:

- Ga naar Kaartlagen -> Laag toevoegen -> Vectorlaag toevoegen…  
- Selecteer, in het veld Type bron, uw bestand en klik op Toevoegen.  
- U kunt een of meer type lagen uit dat bestand selecteren.  

![import osm][]  

- Na klikken op "OK" kunt u het dialoogvenster sluiten en uw venster van QGIS geeft de nieuwe lagen weer.  
  

![import osm loaded][]  


Gegevens exporteren
--------------

Activeer, om een laag te exporteren, het contextmenu ervan en selecteer Exporteren -> Objecten opslaan als…
U kunt selecteren uit een breed scala van indelingen, inclusief Shapefile, GeoJSON, PostgreSQL dump, SQLite. De andere opties in het dialoogvenster variëren, afhankelijk van de door u geselecteerde indeling.

![export][]  

U kunt er voor kiezen de geëxporteerde laag opnieuw te importeren door het vak te selecteren aan de onderzijde (standaard geactiveerd).

Met de gegevens werken
--------------------

We kunnen u zelfs geen ruw overzicht geven over wat u kunt doen met QGIS en er zijn veel excellente handleidingen en boeken die u stap-voor stap door het beheersen van de software leiden. Maar omdat gegevens van OSM, die zijn geïmporteerd met een van de hierboven beschreven methoden, hun tags hebben gecodeerd op een speciale manier is hier een voorbeeld hoe ze te behandelen (voor de nieuwsgierigen, het voorbeeld is pitcairn-islands-latest van Geofabrik's downloadpagina voor Australië en Oceanië). U kunt de gegevens van een vectorlaag inspecteren met 'Attributentabel openen' uit het contextmenu van een laag, in dit geval de laag met multipolygonen.

![attribute table][]

We zien dat alle paren sleutel-waarde voor de tags van de verschillende objecten zijn georganiseerd in een speciaal opgemaakte tekst-tekenreeks in het veld 'other_tags'. Deze soort opslag wordt "hstore" genoemd in een database van PostgreSQL en is de standaard voor gegevens van OSM.

In dit voorbeeld zijn polygonen meestal eilanden, bos en gebouwen. Initieel worden zij op dezelfde manier gerenderd, wat betekent dat eilanden al het andere bedekken. Laten we ze anders renderen om te kunnen begrijpen hoe de verschillende objecten te kunnen identificeren. Sluit de attributentabel.  Selecteer, vanuit het contextmenu van de laag met multipolygonen, Laageigenschappen en schakel in dat formulier naar de tab Symbologie. 

![symbology][]

Wijzig eerst het type symbool van "Enkel symbool" naar "Regelgebaseerd" met het combinatievak aan de bovenzijde van het formulier. 

![symbology rule based][]

De huidige rendering verschijnt als een regel zonder filters. We kunnen deze regel aanpassen door te klikken op het pictogram dat is gemarkeerd met een paars vierkant in de afbeelding hierboven.

![symbology edit rule][]

We zouden gebouwen anders willen behandelen. Anders behandelen betekent dat regels moeten worden gespecificeerd, overeenkomstig de laageigenschappen. Evaluatie van expressies van QGIS kan niet direct tekenreeksen van hstore afhandelen. Maar een hulpprogramma komt ons te hulp en de filterexpressie, die wordt weergegeven in de afbeelding, `hstore_to_map(other_tags)['building'] is not NULL` converteert de tekenreeks van 'other_tags' naar een kaart met sleutel-waarde, waar we de waarde voor de sleutel 'building' kunnen selecteren. De voorwaarde leest zodanig dat we zoeken naar objecten waarvan de sleutel building niet leeg is. We kunnen een kleur en vulstijl voor de gebouwen definiëren. Klik op 'OK' als u klaar bent met het ontwerpen van uw regel. Nu kunt u meer regels toevoegen door te klikken op het pictogram 'plus' aan de onderzijde van de tab Symbologie. We voegen soortgelijke regels toe voor bossen en grasland. Aan het einde zal onze tab Symbologie er zo uitzien:

![symbology polygon rules][]

Als toegevoegde bonus kunnen we een snelle telling van objecten voor de regels verkrijgen. Druk op het meest rechts gelegen pictogram op de regel aan de onderzijde (het symbool som) en de kolom 'count' zal worden gevuld en ons vertellen dat we 150 gebouwen op deze laag hebben.

U kunt nu labels toevoegen op een soortgelijke manier als hoe we symbolen hebben afgehandeld. 'Labels' is een andere tab in de eigenschappen van een laag, precies onder de tab Symbologie. In de meeste gevallen wilt u de opgegeven naam voor een object afdrukken. U voert een soortgelijke expressie in als voor die welke zijn gebruikt voor de symbologie in het veld voor een filter en als waarde zou u `hstore_to_map(other_tags)['name']` moeten gebruiken. 

![labels][]

Met het toewijzen van dergelijke labels aan de lagen met multipolygonen en punten, zult u uiteindelijk iets als dit krijgen:

![done][]


Samenvatting
-------

Dit proces maakt het eenvoudiger om up-to-date gegevens van OSM te verkrijgen en die in QGIS te trekken. Als u eenmaal lagen zoals deze in QGIS heeft, is het mogelijk om ze op te slaan als shapefiles, filters  en query's uit te voeren, enzovoort. Voor meer details over deze functies, bekijk het menu Help in QGIS.  


[quickosm]: /images/osm-data/qgis-quickosm.png
[quickosm loaded]: /images/osm-data/qgis-quickosm-loaded.png
[import osm]: /images/osm-data/qgis-import-osm.png
[import osm loaded]: /images/osm-data/qgis-import-osm-loaded.png
[export]: /images/osm-data/qgis-export.png
[attribute table]: /images/osm-data/qgis-layer-attributes.png
[symbology]: /images/osm-data/qgis-layer-symbology.png
[symbology rule based]: /images/osm-data/qgis-layer-symbology-rule.png
[symbology edit rule]: /images/osm-data/qgis-layer-symbology-edit-rule.png
[symbology polygon rules]: /images/osm-data/qgis-layer-symbology-poly-rules.png
[labels]: /images/osm-data/qgis-layer-labels.png
[done]: /images/osm-data/qgis-complete.png