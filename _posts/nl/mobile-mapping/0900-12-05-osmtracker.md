---
layout: doc
title: OSMTracker
permalink: /nl/mobile-mapping/osmtracker/
lang: nl
category: mobile-mapping
---

OSMTracker
==============

> Deze handleiding kan worden gedownload als [OSMTracker_nl.odt](/files/OSMTracker_nl.odt) of [OSMTracker_nl.pdf](/files/OSMTracker_nl.pdf)  
> Bijgewerkt op 17-07-2015
  
**Dit artikel beschrijft OSMTracker voor Android - er is een soortgelijk product beschikbaar voor Windows mobile.**  
OSMTracker maakt het maken van een GPX-spoor voor een reis mogelijk, met het verzamelen van 'waypoints' langs de route. Geluid, foto's en andere notities kunnen ook worden opgenomen, en zullen allemaal worden voorzien van geoverwijzingen.

Snel starten
-----------
![OSMTracker_1][]

1.  Klik op het kruis om een nieuw spoor te maken.  
2.  Het scherm zal wijzigen om de knoppen weer te geven - wacht totdat zij niet langer zijn uitgegrijsd, wat aangeeft dat de GPS een fix heeft.  
3.  Reis uw route, druk op de van toepassing zijnde knop als u exact bij het object bent dat in kaart moet worden gebracht. U kunt ook geluid opnemen, foto's maken en notities vastleggen met behulp van de knoppen.  
4.  Druk, wanneer u gereed bent, op het pictogram van de floppy disk om uw spoor & waypoints op te slaan.
5. Druk & houd het in de lijst, en selecteer de toepasselijke optie om het spoor naar een GPX-bestand te converteren.
6.  Verplaats het spoor, afbeeldingen en opnamen naar uw computer & lees ze daar vandaan om OSM bij te werken.


OSMTracker installeren
-------------------------

Installeer OSMTracker vanaf de [Google play Store](https://play.google.com/store/apps/details?id=me.guillaumin.android.osmtracker).  
![OSMTracker Logo][]  
Het [meest recente pakket van de toepassing](https://drive.google.com/folderview?id=0BxxhTXmYjyeSSjg1MFhJWnJLams#list) kan, indien nodig, worden gedownload van buiten de Google play Store.  


OSMTracker configuratie
------------------------

Start OSMTracker en druk dan op het pictogram in het menu van uw Android-apparaat en selecteer **Settings**.  

-  **Voice record duration** - uw keuze, maar 30 seconden wordt door de auteur gebruikt.  
-  **Enable sound** - aanbevolen om dit van te selecteren - geeft een biep om u te waarschuwen wanneer opnemen van geluid begint en eindigt.  
-  **Reset  authentication**. Deze knop zal zijn 'uitgegrijsd' totdat u een GPX-bestand heeft geüpload, en OSMTracker heeft geautoriseerd om sporen te uploaden naar uw account van OpenStreetMap.  
-  **GPS settings** Welke methoden uw Android-apparaat zal gebruiken om de locatie te bepalen. Aanbevolen om dit in te stellen op **High accuracy** en het apparaat zal dan GPS gebruiken, Wi-Fi en mobiele netwerken om de locatie te bepalen.  
-  **Check GPS at startup** Wanneer u OSMTracker start, als de GPS is uitgeschakeld, zal het programma u vragen om het opnieuw aan te zetten.
-  **Ignore GPS clock** Indien geselecteerd zal het apparaat de interne klok van het apparaat gebruiken in plaats van de tijd die wordt verschaft door het GPS-signaal.  
-  **GPS logging interval** Kies de periode tussen het opnemen van de positie -  selecteer 0 of 1, voor de beste nauwkeurigheid, die elk resulteren in een opname per seconde.  
  >De frequentie heeft invloed op het gebruik van de batterij, echter bij het gebruiken van deze app, is het waarschijnlijk dat uw scherm meestentijds aan staat, de GPS werkt, en u zou ook foto;'s en geluidsopnamen kunnen maken - dit alles zal resulteren in een zwaar gebruik van de batterij en het wordt voor uitgebreid gebruik aanbevolen om het apparaat te gebruiken met externe stroomtoevoer.  
-  **External storage (SD) directory** Standaard is /osmtracker  
  >De meest recente Android-apparaten zullen niet toestaan dat gegevens worden opgeslagen op een externe microSD- of SDkaart. Hoewel er naar wordt verwezen als 'external storage' zullen de sporen etc in feite worden opgeslagen in **/storage/emulated/0/osmtracker.**  
-  **One directory per track** Aanbevolen omdat dit er voor zal zorgen dat alle gerelateerde geluidsopnamen, foto's, tekstnotities en het GPX-spoor allemaal zullen worden opgeslagen in dezelfde map, benoemd met de datum en tijd van het maken van het GPX-bestand.  
-  **Filename for named tracks** Opties waar u uit kunt kiezen indien u een voorkeur heeft voor het benoemen van de bestanden.  
-  **Accuracy in GPX file** Aanbevolen- zal resulteren in het feit dat de naam van het waypoint een getal bevat dat het geschatte foutbereik in meters aangeeft. Bijvoorbeeld *Wandelpad (4.0m)*. Deze informatie zou later bijzonder nuttig kunnen zijn bij het bijwerken van OSM, en beslissen om een bestaand object al dan niet te verplaatsen en uit te lijnen met het nieuwe spoor & waypoints.  
-  **Use HDOP approximation** Heeft betrekking op aanvullende berekeningen om de nauwkeurigheid van de positie te berekenen (Horizontal Dilution of Precision).  
-  **Export Compass Heading** Definieert of en hoe de gegeven sovor het kompas zouden moeten worden geëxporteerd naar het GPX-bestand.  

-  **Default photo source** Over het algemeen zult u foto's maken met de camera via deze app., maar u kunt er voor kiezen om foto's te gebruiken die al op de telefoon staan.  
-  **Screen always on** Selecteer dit indien u constant klikt on knoppen, foto's neemt, of geluidsopnamen maakt - als u dat niet doet, laat het dan blanco zodat u het scherm elke keer aan moet zetten, wat minder van de batterij vergt.  
-  **Main screen graphic theme** Opties om het contrast & helderheid van het scherm te wijzigen als u problemen heeft met het zien van de knoppen.  
-  **Button Presets** U kunt uw eigen verzameling knoppen ontwerpen & installeren & er voor kiezen om die weer te geven met behulp van deze optie. Voor een volledige beschrijving van deze functie, [zie hieronder](/en/mobile-mapping/osmtracker/#button-presets).   
-  **Background map** Door in te drukken en op een opgenomen spoor te houden zou, als deze mogelijkheid is geselecteerd, het spoor weer kunnen geven en de app zal gegevens van OpenStreetMap downloaden als een achtergrond.  
  > Dit vereist een gegevensverbinding om de kaart te kunnen downloaden. U hoeft deze mogelijkheid niet te gebruiken, tenzij u dat zelf wilt.
-  **Map Tile Provider** Als u ervoor heeft gekozen om kaartgegevens als achtergrond te downloaden wanneer u de kaart weergeeft, kunt u kiezen welke versie van de kaart als achtergrond moet wordne gebruikt.  
-  **Orientation**  Wilt u het scherm draaien of het in landschap of portret gebruiken?

De lijst met sporen
--------------

![OSMTracker_2][]  
Nadat u uw initiële veldonderzoek heeft uitgevoerd, op knoppen heeft geklikt, geluidsopnamen en foto's heeft gemaakt, klik, wanneer u gereed bent, op het pictogram van de floppy disk om uw spoor te beëindigen. Druk nu en plaats op het spoor in de lijst & opties komen beschikbaar:  

-  **Resume Tracking** nuttig wanneer u er achter komt dat u een stukje heeft gemist!  
-  **Display** zal het spoor weergeven, mogelijk met een kaart op de achtergrond, afhankelijk van uw gegevensverbinding en de door u geselecteerde optie in **Background Map**.  
-  **Export as GPX** - nodig om het spoor en de waypoints te kunnen gebruiken in een bewerkingsprogramma.  
-  **Upload to OpenStreetMap** Gebruik deze optie om uw spoor te uploaden naar OpenStreetMap - u dient een account voor OpenStreetMap te hebben ([Hoe die te verkrijgen wordt hier uitgelegd](/en/beginner/start-osm/)), en u dient deze app te autoriseren om  sporen naar uw account te uploaden. Zie [GPS/sporen - GPX-bestanden hieronder](/en/mobile-mapping/osmtracker/#gps-traces--gpx-files) voor meer informatie over waarom deze sporen zo belangrijk zijn voor OpenStreetMap.  
>**Caution, do not delete your track yet.** U heeft alleen het basisspoor geüpload en nog niet de waypoints, foto's etc. Behoud alles totdat het is overgebracht naar een computer om verder te bewerken.  

-  **Delete**. Is wat het is.  


Voorkeursknoppen
--------------
Indien u om een speciale reden veldonderzoek doet, en het label voor het waypoint dat u nodig heeft is niet beschikbaar, kunt u uw eigen verzameling voorkeursknoppen instellen, voorafgaand aan uw trip, ze in de telefoon laden en ze selecteren als u uw onderzoek doet, als & wanneer u ze nodig heeft - verscheidene kunnen inde telefoon worden geladen & u kunt er tussen schakelen zonder dat u uw opnamen stopt. Als het label dat u maakt in de vorm van een persoonlijke notitie is, hoeft het zich niet te conformeren aan de tags die worden gebruikt binnen OpenStreetMap, en zullen daar niet naar worden geüpload. U zou er bijvoorbeeld voor kunnen kiezen de knoppen te hebben gelabeld als;  
1 familie,  
2 families,  
3 families,  
4 families,  
huis van de chef  
20% beschadigd,  
40% beschadigd,  
60% beschadigd,  
80% beschadigd,  
verwoest,  
ongeschikt voor voertuigen,  
4wielaandrijving nodig,  
etc..  

Voor een volledige beschrijving voor het maken van voorkeursknoppen, bekijk het [OSMTracker gedeelte op de wiki](https://github.com/nguillaumin/osmtracker-android/wiki/Custom-buttons-layouts). Dit is een [voorbeeld downloadbestand.](/files/R_of_Way.xml)

![OSMTracker button presets][]


Geluidsopnamen, foto- & tekstafbeeldingen grootten  
-----------------------------------------------  

![OSMTracker recorded file sizes][]

Als het overdragen van het bestand op een later tijdstip een probleem is, let dan op de betrokken bestandsgrootten - zoals de schermafdruk laat zien nemen foto's behoorlijk veel geheugen in vergelijking met het GPX-bestand of een geluidsopname van 10 seconden.


GPS-sporen - GPX-bestanden
----------------------  

![OSMTracker JOSM][]  
GPS-sporen in de vorm van GPX-bestanden zijn opgemaakt uit een aantal elementen, in principe een 'spoor' en 'waypoints'. De schermafdruk hierboven geeft een mapinhoud weer die is gemaakt met OSMTracker en die in JOSM is geladen, klaar om te wordne bewerkt, met een geladen satellietafbeelding om te helpen. Het vierkante pictogram in het midden van het spoor geeft aan dat er een foto, genomen op die locatie, beschikbaar is - klik eenvoudigweg op het vierkante pictogram om de foto weer te geven. 

Indien u navigeert en een GPS gebruikt om u aanwijzingen te geven, zult u merken dat die op sommige punten zal gaan 'herberekenen'. Dat is normaal omdat de interne GPS-locatie niet overeenkomt met waar het verwacht dat de weg of het pad is - er is een foutmarge, maar het is voor wegen en paden gemakkelijk om enigszins op de verkeerde plaats te worden gemaakt, of de weg te verplaatsen nadat de gegevens voor de kaart zijn gemaakt.  
Vrijwilligers die OpenStreetMap bijwerken kunnen alle sporen voor een gebied die zijn geüpload weer downloaden, en ze gebruiken om:  

  1.  Wegen & paden op te sporen in gebieden die niet kunnen worden bekeken met satellietafbeeldingen vanwege wolken, bomen, schaduwen, gebouwen etc..  
  2.  Satellietafbeeldingen aanpassen zodat die juist wordt uitgelijnd - er kan met enkele afbeeldingen een verrassende variatie zijn.

Hoewel een enkel GPX-spoor zeer nuttig is, zou het niet bijzonder nauwkeurig hoeven zijn en zou het wel 30 meters van zijn plek kunnen liggen. Wanneer er meerdere sporen zijn, zal de juiste route van het pad of weg dan gemakkelijk te zien zijn - bekijk bijvoorbeeld de schermafdruk hieronder dat een download van GPX-sporen in een stad weergeeft, waarin de hoofdwegen zijn te onderscheiden door de dikte van de sporen.  

![OSMTracker_gpx][] 




[OSMTracker Logo]: /images/mobile-mapping/osmtracker_logo.png
[OSMTracker_1]: /images/mobile-mapping/OSMTracker_1.png
[OSMTracker_2]: /images/mobile-mapping/OSMTracker_2.png
[OSMTracker button presets]: /images/mobile-mapping/OSMTracker_presets.png
[OSMTracker recorded file sizes]: /images/mobile-mapping/OSMTracker_files.png
[OSMTracker_gpx]: /images/mobile-mapping/OSMTracker_gpx.png
[OSMTracker JOSM]: /images/mobile-mapping/OSMTracker_JOSM.png