---
layout: doc
title: Plug-in Opendata - gegevens uit een werkblad
permalink: /nl_NL/josm/opendata-plugin/
lang: nl_NL
category: josm
---

Plug-in Opendata - gegevens gebruiken  uit een werkblad


- Inhoud
{:toc}

Deze gids beschrijft hoe gegevens toe te voegen aan OpenStreetMap die in de vorm kunnen zijn van een werkblad, vermoedelijk verkregen door een veldonderzoek met een gereedschap zoals ODK collect of Kobo collect.  

**Let op - als de gegevens, waarvan u het plan hebt om ze toe te voegen aan OpenStreetMap, een 'import' genoemd zouden kunnen worden dan zou u de [pagina Import Guidelines van de OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Import/Guidelines) moeten bekijken. Als u twijfelt is het beter om hem eerst te bekijken!**


De plug-in Opendata installeren 
--------------------------

Als u dat nog niet gedaan heeft, installeer dan deze plug-in volgens de instructies in [JOSM Plugins](/nl_NL/josm/josm-plugins).

![Opendata][]

Eenmaal geïnstalleerd, klik dan op ![Opendata preferences][]   
om toegang te krijgen tot een van de meer specifieke modules.  

![Opendata modules][]

Deze gids gebruikt de basisfuncties en er zijn geen modules geladen.   

Het werkblad voorbereiden  
-------------------------

De wikipagina op <https://wiki.openstreetmap.org/wiki/JOSM/Plugins/OpenData> verschaft meer gedetailleerde informatie over indelingen die kunnen worden gebruikt. Voor onze doeleinden gaan we er van uit dat het werkblad is gedownload en aan ons is doorgegeven in de gesloten indeling **.xlsx** die niet zal laden in de plug-in Opendata.  

- Open het werkblad in een open bron programma, zoals LibreOffice, dat beschikbaar is voor de meeste besturingssystemen <http://www.libreoffice.org/>,
- en sla het dan op in een indeling voor open bronnen. Ons werkblad, dat was **shops.xlsx** wordt **shops.ods**.

Hoewel het mogelijk is het werkblad nu in JOSM te laden, is het beter om enkele aanpassingen te doen om dat proces wat gemakkelijker te maken.

### Latitude & longitude

De plug-in Opendata is zeer goed in het uitnemen van de latitude en longitude uit werkbladen, maar als u twijfelt is het beter om de kolomkoppen te wijzigen naar een eenvoudiger indeling;  

![latitude longitude][]

wordt;  

![latitude longitude corrected][]

### Sleutel en waarde

#### De tag name  

Ons doel is nu om het werkblad aan te passen zodat de informatie in de indeling staat die wordt verwacht door OpenStreetMap. De kolomkoppen zullen de waarden zijn voor **Sleutel**, en de gegevens in het werkblad worden de elementen **Waarde**. Pas, voor ons eenvoudige werkblad, de kop van de eerste kolom aan van **Name_of_the_shop** naar **name**. Door het gebruiken van de indeling sleutel=waarde, wordt onze eerste regel nu;  
**name=Tony's Supermarket**

Als uw werkblad meer dan één name heeft, zoals een **local name** of **official name**, raadpleeg dan de wikipagina op <https://wiki.openstreetmap.org/wiki/Names> die veel mogelijke alternatieven vermeldt, zodat uw bijwerkingen voor OpenStreetMap alle namen kan bevatten die mogelijk worden gebruikt of waarnaar wordt gezocht.  

#### Kolommen zonder een kop

Wanneer u de kop voor een kolom verwijdert, maar de gegevens eronder behoudt, dan worden de gegevens effectief verborgen voor JOSM.  

![opendata 1][]

#### Kolommen met gegevens uit verschillende sleutels 

![opendata mixed][]

De persoon die het veldonderzoek ontwerpt en de persoon die het veldonderzoek uitvoert zullen zich vaak niet bewust zijn van de tags en de waarden die zich ontwikkelen in OpenStreetMap. De kolom **shop** in mijn werkblad bevat feitelijk gegevens van twee verschillende tags, en het werkblad dient aangepast te worden. De kolomkop **Type of shop** kan worden gewijzigd naar **shop**, voor de volgende gegevens;  
  shop=supermarket  
  shop=convenience  
  shop=hairdresser  

maar **restaurant** en **fast_food** komen uit de sleutel **amenity**.

Een nieuwe kolom kan worden ingevoegd met de kop **amenity**, en de gegevens worden verplaatst, zodat ons werkblad er nu zo uitziet;  

![opendata shop amenity][]

#### Subtags

De kolomkop **Does_the_shop_have_toilet_faci** is afgekort voor het proces van het veldonderzoek, en was origineel **Does the shop have toilet facilities?**.  

Hoewel er een afzonderlijke tag is voor toiletten, die gewoonloijk wordt toegevoegd aan een knoop in het gebouw, verwijst dit feitelijk naar toiletten die voor het publiek toegankelijk zijn. Als we ons eigen veldonderzoek zouden hebben gedaan, zouden we exact weten wat er bedoeld werd met vraag en antwoord, maar als dit informatie is die aan ons werd doorgegeven, zal het waarschijnlijk nodig zijn om te vragen wat bedoeld wordt. Het is ook extreem nuttig om de vragen voor het veldonderzoek in een telefoon te laden en een 'namaak' veldonderzoek te doen zodat de opmaak van de vragen kan worden bekeken. Lees zorgvuldig de wikipagina op <https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets>, en bekijk of het originele veldonderzoek nodig is vóórdat het werkblad wordt aangepast.Het item op de wiki bevat, in het bijzonder, de informatie - 

- *Gebruik niet toilet=yes (enkelvoud). Breng in het algemeen geen toiletten in kaart die niet voor het publiek toegankelijk zijn. Veel gebouwen hebben toiletten die bestemd zijn voor werknemers of eigenaren, maar het in kaart brengen hiervan zou onnodige conflicten of niet realistische verwachtingen kunnen veroorzaken. Gebruik toilets=no voor plaatsen waarvan u zou verwachten een bruikbaar toilet te kunnen vinden (bijv. een treinstation of beginpunt van een wandeling) waar geen publieke toiletten beschikbaar zijn gemaakt.*  

Door, voorzover mogelijk, het advies op de wiki te volgen, ziet mijn aangepaste werkblad voor de informatie over de toiletten er nu als volgt uit;  

![opendata toilets][]


Ik heb de kop van een aantal kolommen leeg gemaakt, zodat de gegevens niet zichtbaar zijn als ik mijn bewerkingen uitvoer in JOSM.  

Het werkblad laden in JOSM
-------------------------

Klik op ![josm open][], navigeer naar waar uw werkblad is opgeslagen en open het binnen JOSM.  

![opendata pop up][]  

Een pop-up zal mogelijk verschijnen die u vraagt de bij het verzamelen van de gegevens gebruikte 'projection method' te bevestigen. De plug-in Opendata zal proberen  de gebruikte 'projection method' te berekenen en zal dat als de meest waarschijnlijke optie presenteren. Accepteer de voorgestelde projectie, tenzij dit door de veldonderzoeker is gewijzigd in de instellingen,  maar controleer dan bij het bewerken of de gemaakte punten verschijnen op verwachte locaties en dat het een logische keuze is.  

![opendata spreadsheet loaded][]

Gefeliciteerd! U hebt al het benodigde werk uitgevoerd en u bent bijna klaar om OpenStreetMap bij te werken met uw nieuwe onderzoeksgegevens. 

De plug-in ToDo gebruiken 
--------------------------

Selecteer binnen JOSM alle items die zijn toegevoegd door uw werkblad, ofwel door;  

- uit te zoomen totdat ze allemaal zichtbaar zijn, en sleep met uw muis van linksboven naar rechtsonder, ondertussen de linker muisknop ingedrukt houdend, of  
- gebruik **Ctrl+f** om een zoekactie uit te voeren - Ik heb gezocht op **name** omdat dat in al mijn 5 veldonderzoeken voorkomt.  

zorg er voor dat al uw veldonderzoeken zijn geselecteerd - er staan vijf veldonderzoeken in mijn werkblad en ik moet dus 5 objecten hebben geselecteerd.  

![5 selected][]

Klik, in het paneel van de plug-in ToDo, op **Add**.

![opendata todo add][]

en de lijst met toe te voegen items zou in het paneel moeten verschijnen.

![opendata todo loaded][]

Gegevens van OpenStreetMap laden als een afzonderlijke laag
-------------------------------------------

Dubbelklik op het bovenste item in uw lijst Nog te doen, dat zich zal centreren in uw paneel voor bewerken, en klik op het pictogram Downloaden ![download][].

Als het dialoogvenster voor Downloaden verschijnt, zorg er dan voor dat u een vinkje plaatst in ![download new layer][] (linksonder in de volgende schermafdruk) zodat uw gegevens voor OSM niet downloaden in uw gegevens van het werkblad.

![download dialog][]


Gegevens tussen de lagen vergelijken
------------------------------------

Zorg er voor dat u de gegevens die in uw werkblad staan zorgvuldig vergelijkt met de bestaande gegevens die al in OpenStreetMap staan. Er zijn manieren om tags, of delen van tags, tussen de lagen te kopiëren (Bekijk de menu's **Gereedschappen** en **Meer gereedschappen** in JOSM, of lees de eerdere hoofdstukken in LearnOSM). In veel gevallen zult u nieuwe gegevens samenvoegen met bestaande gegevens. Controleer die gegevens zorgvuldig, controleer, indien nodig, de geschiedenis en bron voor de verschillende objecten - het is altijd mogelijk dat de gegevens in OpenStreetMap meer recent of nauwkeuriger zijn dan de gegevens in uw werkblad.  

Wanneer u de informatie van één regel van het werkblad hebt bijgewerkt, gebruik dan de knop **Markeren** van de plug-in ToDo om naar het volgende item te verplaatsen - u  moet misschien meer gegevens van OSM downloaden als het volgende item buiten het gebied ligt dat al is gedownload.  


[Opendata]: /images/josm/opendata-plugin.png
[Opendata preferences]: /images/josm/opendata-preferences.png
[Opendata modules]: /images/josm/opendata-modules.png
[latitude longitude]: /images/josm/opendata-latitude-longitude.png
[latitude longitude corrected]: /images/josm/opendata-latitude-longitude-corrected.png
[opendata 1]: /images/josm/opendata-1.png
[opendata mixed]: /images/josm/opendata-mixed.png
[opendata shop amenity]: /images/josm/opendata-shop-amenity.png
[opendata toilets]: /images/josm/opendata-toilets.png
[josm open]: /images/josm/josm_open-file.png
[opendata pop up]: /images/josm/opendata-wgs84-popup.png
[opendata spreadsheet loaded]: /images/josm/opendata-spreadsheet-loaded.png
[5 selected]: /images/josm/opendata-5-selected.png
[opendata todo add]: /images/josm/opendata-todo-add.png
[opendata todo loaded]: /images/josm/opendata-todo-loaded.png
[download]: /images/josm/josm-download-button.png
[download dialog]: /images/josm/josm_download-dialog.png
[download new layer]: /images/josm/download-as-new-layer.png

