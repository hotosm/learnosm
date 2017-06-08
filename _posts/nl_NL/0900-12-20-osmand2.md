---
layout: doc
title: OsmAnd 2.0+
permalink: /nl/mobile-mapping/osmand2/
lang: nl
category: mobile-mapping
---

OsmAnd 2.x
==========

> Deze handleiding kan gedownload worden als [osmand2_nl.odt](/files/osmand2_nl.odt) of [osmand2_nl.pdf](/files/osmand2_nl.pdf)  
> Bijgewerkt op 08-08-2016  

OsmAnd (OSM Automated Navigation Directions) is een open source-toepassing voor het bekijken van kaarten, bewerken, opnemen van sporen en toeren en gebruikt de database van OpenStreetMap (OSM) voor zowel online als offline gebruik. Het bevat ook mogelijkheid voor routeren en navigatie, met visuele en stemgids, dat is ook online en offline beschikbaar. OsmAnd stelt gebruikers in staat direct aan OpenStreetMap bij te dragen door problemen te rapporteren, GPX-sporen te uploaden, en toevoegen (of bewerken) van POI's.  

<a href="https://play.google.com/store/apps/details?id=net.osmand">
  <img alt="OsmAnd for Android"
       src="//lh5.ggpht.com/-hvpyv4R8VQ8-N6ym0FuVFkfW3ZwU6UmhPn-IfxTn2p97bjLt3aDEH53rzPM6XKEszM=w45-rw" />
</a>

De versie voor iOS is beschikbaar vanaf iTunes.  

<a href="https://itunes.apple.com/app/id934850257">
  <img alt="OsmAnd Maps op iTunes"
       src="http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.png" />
</a>

>Sommige mogelijkheden van OsmAnd's Android platform zouden nog niet beschikbaar kunnen zijn in de uitgave voor iOS. Bekijk het ontwikkelaars' [blog site](http://osmand.net/blog) voor details.  

In aanvulling op de bovenstaande bronnen, is een door de gemeenschap onderhouden versie beschikbaar vanaf [F-Droid](https://f-droid.org/app/net.osmand.plus), of via derde-partij softwarebronnen zoals [Amazon](http://www.amazon.com/OsmAnd-Maps-Navigation/dp/B00D0SA8I8).  

Beginnen
---------------

OsmAnd laat u live, online kaarten gebruiken, als ook offline databases van OpenStreetMap die geen internetverbinding vereisen. De laatste gaat er van uit dat de benodigde stappen om de offline database te downlaoden en op te slaan op uw apparaat zijn voltooid.  

De offline mogelijkheid voor OsmAnd is één van zijn sterke kanten. Daarom is één van de eerste taken die een nieuwe gebruiker zou willen is om de database(s) te downloaden. En, indien u geïnteresseerd bent in stem-assisterende navigatie, dient ook ook de bestanden voor de stemmen te downloaden.  

+ Druk op het pictogram **Opties** en selecteer en selecteer **Kaartbeheer**. Bekijk de kaartelementen van de *Gebruikersinterface*  in het volgende gedeelte als verwijzing. Als u de gratis versie van de Google Play Store gebruikt, kan op dit moment een dialoogvenster verschijnen. Als dat zo is, selecteer dan eenvoudigweg "Ok". De door de gemeenschap onderhouden versie van F-Droid zal dit dialoogvenster niet hebben.  

Hier beheert u alle online rasterbestanden, offline vectordatabases, en stembestanden die de app OsmAnd gebruikt.  

+ De tab *Alle downloads* zal alle gegevensbestanden weergeven die beschikbaar zijn van de server van OsmAnd.  
+ De tab *local* zal kaarten, stemmen en audio/video-opnamen op uw apparaat weergeven.  
+ De tab *Updates* zal lokale bestanden weergeven die zijn verouderd en dienen te worden bijgewerkt vanaf de server van OsmAnd.  

![Download][]  

Selecteer de tab *Alle downloads* en typ een naam of geografische regio van uw interesse in om een database van een geografische regio te downloaden.   

![Download db][]  

Druk, na het selecteren van de bestanden, op de knop Downloaden van de knop Opties. Afhankelijk van uw internetverbinding of het aantal geselecteerde bestanden, kan dit enige minuten duren. Wanneer u de bestanden hebt gedownload, bent u gereed om de modus offline van OsmAnd te gebruiken.  

> Een van de unieke mogelijkheden van de door de gemeenschap onderhouden versie van F-Droid is de onbeperkte frequentie van downloads die u vanuit de app zelf mag doen. De gratis te gebruiken versie van de Play store is beperkt tot slechts tien downloads. Een workaround voor deze beperking is om de database te downloaden vanaf [http://download.osmand.net/rawindexes/](http://download.osmand.net/rawindexes/) naar uw PC, en die dan handmatig over te brengen naar uw apparaat.  

De vooraf gemaakte databases die zojuist werden gedownload worden ook wel "Vector Maps" genoemd, en worden opgeslagen in de indeling .obf. Zij zijn compact, en stellen offline-gebruikers in staat op groot detail in te zoomen.  



Gebruikersinterface
--------------------------

![Canvass Elements][]  

De recente update van OsmAnd voor Android naar versie 2.x (en OsmAnd DVR op iOS naar 3.x) verbetert de interface met de stijl Material Design, en bevat nu een Dashboard met verschillende kaarten, een meer gebruikersvriendelijker lay-out, en vereenvoudigd bewerken voor OpenStreetMap Points-of-Interests (POI) en Opmerkingen.  

Het kaartvenster zal straten, wegen, landgebruik, POI's, waterwegen en vele andere geografische gegevens weergeven.  

In aanvulling daarop, interacties met de knoppen van de interface:  

De knop **Configureer scherm** selecteert het te gebruiken profiel. U kunt kiezen uit: Kaart bladeren, Auto, Fiets, voetganger om te bepalen hoeveel of hoe weinig details worden weergegeven in het kaartvenster. Het geeft ook weer 
hoe POI's, labels, GPX-track, OSM Notes & Favorites worden weergegeven of gerenderd in het kaartvenster.  
- De **Oriëntatie** wijzigt de oriëntatie van de kaart in het kaartvenster, en zal een andere pictogram van ene kompas weergeven, afhankelijk van de methode voor de oriëntatie van het kaartvenster.  

In het paneel aan de rechter onderkant van het kaartvenster vindt u **GPS Informatie**, wat het aantal satellieten weergeeft waarmee uw apparaat is verbonden, en het aantal zichtbare satellieten op de horizon. **Track Recording** is zichtbaar als de plug-in *Track Recording* is ingeschakeld. hetzelfde geldt voor de **Ruler Tool**, als de plug-in  *Distance Calculator & Planning Tool* is ingeschakeld. Aanvullende knoppenpanelen kunnen wel of niet zichtbaar zijn, afhankelijk van het feit of zij zijn ingesteld om weer te worden gegeven of dat bepaalde plug-ins al dan niet zijn ingeschakeld.  

Wanneer de GPS of netwerkpositie is ingeschakeld in uw apparaat geeft een  **Positie-indicator** (uw coördinaten ergens binnen de blauwe cirkel) geschatte locatie op de kaart weer. Drukken op de knop **Waar ben ikI** centreert de kaart op de huidige of de laatst bekende GPS-locatie. De omtrek van dit pictogram is blauw als positionele informatie beschikbaar is, en grijs als de positie nog niet bekend is.  

**Dashboard** geeft verschillende informatiekaarten, opties voor *Zoeken*, *Geschiedenis*, *My Tracks* en *Plug-ins* weer.    

**Schaal en zoomen** geeft het zoomniveau aan waar het kaartvenster momenteel in staat. De eenheden voor weergave kunnen worden ingesteld op Metrisch of Engels (in feet of yards), onder *Instellingen\>Algemene instellingen\>Maateenheid.*  

De knop **Navigatie** opent een dialoogvenster foor het genereren van navigatieroutes Naar en Van die toepasselijk zijn voor de modus van transport die u selecteert (bijv. auto, fiets of voetganger)  

De **Zoomknoppen** stellen u in staat op het kaartvenster in of uit te zoomen. Dubbeltikken op een gebied waarin u bent geïnteresseerd zal dat punt in het midden van het kaartvenster plaatsen, en ingezoomd om meer details weer te geven.  

Als u drukt op de knop **Waar ben ikI** wordt de kaart gecentreerd op de laatst bekende GPS-locatie.  

> Als uw scherm er enigszins anders uitziet, moet u misschien enkele plug-ins downloaden of inschakelen.  


Navigatie
--------------------------

Sleep met een vinger over het scherm om naar andere gebieden of een andere richting op de kaart te verplaatsen. Lang drukken op het scherm zal een pop-up weergeven die de markering van de plaats van het gespecificeerde punt weergeeft.  

![Long Press Pop-up][]  

Druk op deze pop-up om een **Contextmenu**  voor het gespecificeerde punt weer te geven.  

![Long Press Menu][]  


#### Contextmenu

Het Contextmenu geeft aanvullende opties weer, gerelateerd aan de seelectie van het gespecificeerde punt.  

+ **Naar, Van, GPX waypoint toevoegen** zijn opties die zijn gerelateerd aan het navigeren over routes.  
+ **Nabij hier zoeken** is bedoeld als gelokaliseerd zoeken, beperkt tot beschikbare POI's in de geïnstalleerde database.  

Als de plug-in *Audio/Video opmerkingen* is ingeschakeld, worden ook aanvullende opties voor vastleggen van multimedia weergegeven: **Audio-opmerking opnemen, Video-opmerking opnemen**, en **Foto maken**.  

Selecteer **POI maken** om een nieuwe POI direct aan OpenStreetMap toe te voegen met behulp van de gespecificeerde coördinaten. Gebruik **OSM Note openen** voor notities zoals rapporteren van problemen, of om opmerkingen voor andere mappers die in hetzelfde gebied werken achter te laten.  

De optie **POI maken** is alleen beschikbaar als de plug-in *OSM bewerken* is ingeschakeld. Stel deze optie in onder *Instellingen\>Plug-ins*.  


OpenStreetMap bewerken
--------------------------------

### Instellen
OsmAnd moet zijn geconfigureerd met uw inloggegevens voor OpenStreetMap om de mogelijkheid voor het toevoegen en bewerken van gegevens OpenStreetMap mogelijk te maken. Druk op de knop **Opties** en scroll naar de kaart *Plug-ins* en in het gedeelte *OSM bewerken* druk op de indicatie *meer acties* voor aanvullende opties.  

![osm plugin][]  

U moet een gebruikersnaam voor OpenStreetMap en wachtwoord gereed hebben om uw inloggegevens voor OSM bewerken in te stellen.  

![osm creds][]  


### POI's toevoegen

Methode 1: Specificeer een locatie door lang te drukken op de gewenste locatie in het kaartvenster en klik dan op het pop-upvak om het **Contextmenu** weer te geven.  

Methode 2: Gebruik van GPS afgeleide coördinaten door te drukken op de knop **Waar ben ik** en druk dan op **Opties** en selecteer **Locatie gebruiken**. Selecteer nu **POI maken** uit het **Contextmenu** om een nieuw object toe te voegen, samen met de tags. Voeg de informatie in het veld van de POI in: naam, type object, en een opmerking bij het indienen wat het object uitlegt dat u toevoegt.  

![poi basic][]  

In de modus Geavanceerd kunnen meer tags worden toegevoegd.  

![poi advanced][]  

Indien gereed, selecteer **Opslaan**.  


### POI's bewerken  

#### POI's weergeven of tonen  

Zorg er voor, om POI's te kunnen bewerken, dat het weergeven ervan is ingeschakeld door te drukken op de knop **Kaartconfiguratie** en de knop POI in te schakelen en een categorie te kiezen waarin u geïnteresseerd bent.  

![poi show][]

![poi show eats][]

Weergeven van *een* categorie uit de opties POI, druk op *Zoeken* en selecteer dan de knop *meer acties*, selecteer *Aangepast filter*. Selecteer het vak naast *Alles selecteren* en druk op de knop *Filter* in de rechter bovenhoek van het scherm. Op dit punt, en net voordat u op de knop *Filter* drukt, kunt u de categorieën van POI's aanpassen die u wilt weergeven in het kaartvenster.  

In het volgende scherm kan dit aangepaste filter worden opgeslagen voor gebruik in de toekomst door te drukken op het pictogram Ster. Hier wordt het weergegeven als het wordt opgeslagen als "Alles".  

![poi custom][]  

Geeft het aangepaste filter "Alles" weer in de selectielijst bij het filteren van POI's.  

![poi custom2][]


#### Bewerken

Nu de POI's in het kaartvenster worden weergegeven als oranje stippen, zal een lange druk op een oranje stip van een POI de naam van het object weergeven. Druk op de pop-up om het **Contextmenu** weer te geven. Twee aanvullende opties zijn beschikbaar:  

- **POI aanpassen** voor bewerken, en  
- **POI verwijderen**.  

er zal ene venster verschijnen waarin u de velden van de POI kunt bijwerken, indien nodig. Het is een goede gewoonte om een opmerking of commentaar bij het indienen toe te voegen bij het aanpassen van POI's. De bewerker voor POI's is hetzelfde scherm als dat voor het toevoegen van POI's.  

![poi edit1][]  


U bent beperkt tot het bewerken van POI's of puntobjecten. Polygonen en gebieden zullen als dezelfde oranje stippen renderen, maar zullen alleen de naam van het object op het scherm laten flitsen, maar niet het **Contextmenu** naar voren brengen.  


### Opmerkingen en commentaren toevoegen, problemen rapporteren, problemen sluiten  

Een andere manier om bij te dragen aan OpenStreeMap is door Opmerkingen achter te laten, als algemene terugkoppeling, of problemen te rapporteren die te gebruiken zijn door andere actieve mappers in het gebied. Druk, om de Opmerkingen weer te geven in het kaartvenster, op **Kaartconfiguratie** en zorg er voor dat **OSM Opmerkingen** zijn ingeschakeld. U dient ook online te zijn via een WiFi-verbinding of een mobiel abonnement.  

### Opmerkingen toevoegen en problemen rapporteren  

Activeer, om een Opmerking toe te voegen of een probleem te rapporteren, **Locatie gebruiken** uit het menu of selecteer handmatig een locatie in het kaartvenster (Bekijk POI's toevoegen in het vorige gedeelte.)  

![note][]  

Wanneer een locatie is ingesteld of gespecificeerd, selecteer **Open OSM note** uit het menu en een nieuw modaal venster zal op uw scherm verschijnen. Voer de details van de opmerking of het rapport van het probleem in. Als dit de eerste keer is dat u de plug-in gebruikt, dient u uw inloggegevens voor OpenStreetMap gereed te houden. U kunt ook anonieme commentaren achterlaten door niet in te loggen met uw inloggegevens.  

![note2][]  

Afhankelijk van de instellingen van het apparaat en de Internetverbinding, zouden bewerkingen en opmerkingen direct kunnen worden verstuurd naar de server van OpenStreetMap, of lokaal worden opgeslagen op het apparaat totdat een internetverbinding beschikbaar is. Bekijk het volgende gedeelte *Online en offline bewerken* voor meer details.  

Problemen worden als stippen in verschillende kleuren gerenderd in het kaartvenster:  

- geel (lokaal, of nog steeds op het apparaat),  
- rood (open opmerking/probleem gerapporteerd naar de server) of  
- groen (opgeloste/gesloten opmerking op de server).  

![note1][]  

Configuratie 
--------------------------------  

### Online en offline bewerken  

Als u een open abonnement hebt, zou u de instelling *Offline bewerken* uitgeschakeld/niet geselecteerd kunnen houden onder de *Instellingen plug-in OSM bewerken*. Dit zal uw bijwerkingen en bijdragen naar OpenStreetMap versturen, kort nadat u ze heeft opgeslagen. In het geval dat er geen internetverbinding beschikbaar is worden de gegevens tijdelijk opgeslagen op het apparaat, en geüpload kort nadat de internetverbinding is hersteld.  

Als u van plan bent om bewust om te gaan met uw mobiel gegevensgebruik, schakel dan *Offline bewerken* in en verstuur uw bewerkingen en opmerkingen handmatig wanneer u andere middelen heeft om met het internet te verbinden. Wijzigingen die u offline maakt zullen op uw apparaat blijven totdat u verbinding maakt met het internet.  

U kunt de gegevens op uw apparaat beheren onder **Opties \> Plug-inskaart \> OSM bewerken \> Instellingen** en de optie **Lokaal opgeslagen OSM POI's/Bugs** selecteren. De in dit scherm vermelde gegevens zijn met kleuren gecodeerd. Groen is voor nieuwe of aangepaste POI's, en rood is voor POI's die u voor verwijderen hebt gemarkeerd.  

![locally saved bugs][]  

Vanaf hier kunt u er voor kiezen om de gegevens te uploaden naar OSM of ze te exporteren naar uw PC.  


​GPX-sporen verzamelen
---------------------

Verifieer, vóór het verzamelen van GPX-sporen, of **Trip opnemen** is ingeschakeld onder **Opties \> Plug-ins**. Als de plug-in niet is vermeld, druk dan op *Alles weergeven* en zoek de betreffende plug-in op in de lijst.  

![Enable Trip recording][]  

Schakel de optie **Audio/video-opmerkingen** in onder **Opties \> Plug-ins** om handig audio- of video-opmerkingen vast te leggen vanuit het hoofdscherm. Als u vaak foto's neemt, in plaats van video- of audio-opmerkingen, wijzig dan de standaard actie voor de widget Audio/Video. Ga naar **Opties \> Plug-ins \> Audio/video \> Instellingen \> Standaard actie widget** en stel **Een foto nemen** in als de standaard actie.  

![Right panel gpx photo][]  

Foto's, video- of audio-opmerkingen verzamelen.
-------------------------------------------

Vastleggen van een foto (of video- of audio-opmerking) van een bepaald object, druk en houd boven een locatie op de kaart, en druk dan op het pop-up dialoogvenster dat opkomt en selecteer een actie: neem een audio-opmerking op, neem een video-opmerking op, neem een foto, of selecteer andere toepasselijke opties uit het contextmenu.  

![Taking audio, photo or notes][]  

​GPX-sporen weergeven 
--------------------------------------------

Druk op de knop **Kaartconfiguratie** en schakel de optie **GPX-spoor...** in om de GPX-sporen weer te geven. Dit zal een lijst met opties weergeven inclusief het huidige spoor dat u nu opneemt, of andere GPX-sporen die u eerder hebt opgenomen of opgeslagen in de map OsmAnd op uw apparaat.  

Weergeven van GPX-sporen in het kaartvenster is nuttig voor het bijhouden van uw voortgang als u in het veld bent, en om te controleren of u iets gemist heeft tijdens uw trip.  

![Display GPS tracks][]  

Hieronder staat een voorbeeld van hoe sporen en waypoints er uitzien op een kaart. Het spoor wordt weergegeven als lijn in cyaan, en de waypoints zijn witte sterren in een rode stip.  

![Show GPS tracks and waypoints][]  

GPX-sporen exporteren naar de bewerker van OpenStreetMap
--------------------------------------------

Wanneer u gereed bent met het verzamelen van de gegevens in het veld, kunt u de GPX-sporen importeren om te gebruiken in JOSM, iD of een andere een andere bewerker voor OpenStreetMap.  

Verbind uw apparaat met Android aan een computer (met behulp van een gegevenskabel, Bluetooth, of een internetverbinding) en kopieer de GPX-sporen en (en misschien multimediabestanden) die u heeft vastgelegd. Zoek, in de opslag van uw apparaat, naar de GPX-sporen in de map /osmand/tracks, en de multimediabestanden in /osmand/avnotes.  

Gebruiken van de GPX-sporen met de bewerkers JOSM en iD is zo eenvoudig als het slepen van de bestanden en ze laten vallen in de toepassing (of de browsertab, voor iD).  

- Meer informatie over  iD in [Configureren van de achtergrondlaag](/nl/beginner/id-editor/#configuring-the-background-layer).  
- Meer informatie over JOSM op [Openen in JOSM](/nl/mobile-mapping/using-gps/#open-in-josm)  
- Bekijk voor andere bewerkers van OpenStreetMap de documentatie van uw software.  


OsmAnd gebruiken met FieldPapers en JOSM
--------------------------------------

[FieldPapers](http://fieldpapers.org) is een van de favoriete, "lage-tech" gereedschappen, gebruikt door veel mappers. [Hier staat het LearnOSM trainingsmateriaal voor FieldPapers](/nl/mobile-mapping/field-papers/).  

> Het volgende protocol werd ontwikkeld gedurende een activiteit voor het in kaart brengen in het veld in Bangladesh. Bekijk de originele post [hier](https://wiki.openstreetmap.org/wiki/Field_Papers#How_to_use_with_OsmAnd).  

* Exporteer Field Papers zoals gewoonlijk naar PDF, en download het shapefile naar uw PC  
* Zorg er voor dat de plug-in OpenData is geïnstalleerd in JOSM, en open dan het shapefile dat u zojuist hebt gedownload.  
* Gebruik regels om de rasternummers in elke cel te schrijven  
* Exporteer als GPX  
* Upload naar het apparaat in de map  */osmand/tracks*.  
* In OsmAnd, zorg er voor dat **GPX-sporen..** is ingeschakeld en selecteer het GPX-spoor dat u zojuist maakte en druk op *OK*. Bekijk het eerdere gedeelte van deze handleiding *GPX-sporen weergeven*  

Het GPX-spoor is nu zichtbaar in het kaartvenster van OsmAnd.  


Samenvatting
-------------------

Excellent! U kunt nu gebruik maken van een smartphone voor het verzamelen van gegevens in het veld die u kunt toevoegen aan de database van OpenStreetMap, als een alternatief voor de daarvoor bestemde GPS-ontvangers. De brede beschikbaarheid van smartphones met GPS- (en/of GLONASS-)chips openen nieuwe mogelijkheden voor het verzamelen en bijwerken van gegevens voor OpenStreetMap door gelegenheidsmappers.  

Neem wat tijd om te oefenen en uzelf bekend te laten worden met de app, vóórdat u met echte gegevens gaat werken.  

Dit gedeelte behandelt het concept van het gebruiken van OsmAnd voor het verzamelen van GPX-sporen, aanpassen of verwijderen van POI's, inclusief het toevoegen van, commentaar of sluiten van Opmerkingen/problemen, en het verplaatsen van deze logs naar een PC.  

Officiële documentatie voor OsmAnd 
-------------------

Aadnvullende materialen zijn beschikbaar in het gedeelte [help](http://osmand.net/help/) van de website van OsmAnd.  

Details over de gebruikte legenda in de standaard kaartstijl, staat in hun [Extended Online Knowledge Base](http://osmand.net/help/Map-Legend_default.html).  

[Canvass Elements]: /images/mobile-mapping/osmand2_000.png
[Long Press Pop-up]: /images/mobile-mapping/osmand2_001a.png
[Long Press Menu]: /images/mobile-mapping/osmand2_001b.png
[Download]: /images/mobile-mapping/osmand2_002a.png
[Download db]: /images/mobile-mapping/osmand2_002b.png
[osm plugin]: /images/mobile-mapping/osmand2_003.png
[osm creds]: /images/mobile-mapping/osmand2_003b.png
[poi basic]: /images/mobile-mapping/osmand2_004a.png
[poi advanced]: /images/mobile-mapping/osmand2_004b.png
[poi show]: /images/mobile-mapping/osmand2_005a.png
[poi show eats]: /images/mobile-mapping/osmand2_005b.png
[poi custom]: /images/mobile-mapping/osmand2_005c.png
[poi custom2]: /images/mobile-mapping/osmand2_005d.png
[poi edit1]: /images/mobile-mapping/osmand2_006a.png
[note]: /images/mobile-mapping/osmand2_007a.png
[note0]: /images/mobile-mapping/osmand2_007b.png
[note1]: /images/mobile-mapping/osmand2_008b.png
[note2]: /images/mobile-mapping/osmand2_007c.png
[locally saved bugs]: /images/mobile-mapping/osmand2_008a.png
[Enable Trip Recording]: /images/mobile-mapping/osmand2_009a.png
[Right panel gpx photo]: /images/mobile-mapping/osmand2_009b.png
[Taking audio, photo or notes]: /images/mobile-mapping/osmand2_009c.png
[Display GPS tracks]: /images/mobile-mapping/osmand2_009d.png
[Show GPS tracks and waypoints]: /images/mobile-mapping/osmand2_010a.png