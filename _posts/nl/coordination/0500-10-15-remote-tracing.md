---
layout: doc
title: Wegen, gebouwen, water en landgebruik traceren 
permalink: /nl/coordination/remote-tracing/
lang: nl
category: coordination
---

Doorgaan vanaf het gedeelte [Remote, Armchair & Mapathon Section of LearnOSM](/nl/coordination/remote/), wat u nodig zult hebben indien u geen ervaring heeft met het in kaart brengen voor HOT. 

Index gedeelte
=====

[Wegen en hoofdwegen, inclusief paden & sporen](/nl/coordination/remote-tracing/#wegen)  
[Het netwerk van wegen](/nl/coordination/remote-tracing/#het-netwerk-van-wegen)  
[Grenzen residentieel landgebruik](/nl/coordination/remote-tracing/#grenzen-residentieel-landgebruik)  
[Gebouwen, muren, hekwerken, nederzettingen en barrières](/nl/coordination/remote-tracing/#gebouwen-muren-nederzettingen-barrieres)  


## Wegen

Elk type weg, van autosnelwegen tot sporen en paden, worden gelabeld als 'highway' in OpenStreetMap.
Het is belangrijk dat wegen juist worden toegevoegd aan de database (gegevens van OpenStreetMap) omdat zo op zo veel verschillende manieren worden gebruikt:  

-  Navigatiesoftware zoals apparaten van Garmin en apps op smartphones, zoals Osmand, kunnen route-informatie verschaffen voor grote afstanden als de juiste informatie er in is geladen. Omdat zij vertrouwen op de GPS in het apparaat om de positie te bepalen ten opzichte van de erin geladen basiskaart, is het belangrijk dat de wegen in feite binnen 15 meter van de juiste plaats af liggen, of zij zullen niet werken!  

-  Plannen van de route voor een grote vrachtwagen met 'hulp' is veel eenvoudiger indien u verschil kunt zien tussen een pad en een verharde weg, met alle soorten daartussen.  

-  Weten of een wegoppervlak asfalt is of zachte modder zal verschil,maken voor het plannen van uw route.

-  Bij het pr0beren in kaart te brengen van de verspreiding van een ziekte, is de beschrijving van een slachtoffer als "nabij de kruising" significant als u de kruising kunt zien op de kaart.

### Wegen - Hoe in kaart te brengen

![iD 3][]

1.  Zorg er voor, bij het traceren van wegen, dat u voldoende bent ingezoomd. Stel, als beginpunt, de schaal in op ongeveer 20 meter, en traceer de weg zodat uw tracering voldoende punten in zich heeft om het te kunnen houden op, of zeer dichtbij, de weg die u kunt zien op uw satellietafbeelding. In de schermafdruk hierboven kunt u zien  dat ik de weg heb getraceerd die aan mij was toegewezen, benden, door de bomen bomen, en onderlangs naar een ander gebouw waar het lijkt te stoppen. Waar de bomen dicht op de weg staan, en de afbeelding is verkregen met een camera vanaf de bovenzijde, lijkt het erop alsof de weg versmalt als hij tussen de bomen door gaat - het is echter slechts het effect van de bomen die het zicht wegnemen, en de weg is overal even breed.  
2.  Ik heb ook een ander gedeelte van de weg getraceerd, er voor zorgend dat het aan beide zijden is verbonden - iD laat dit zien door een enigszins donkerder gekleurde stip op de kruising. Het is belangrijk dat de wegen met elkaar zijn verbonden en 'een gemeenschappelijk knoop delen' zodat software voor routering het juiste verloop zal verschaffen.  
3.  De weg is getagd als 'highway=residential', en ik heb ook 'surface=unpaved' toegevoegd.  
4.  Voor een volledige beschrijving van het taggen binnen Afrika, bekijk de wikipagina [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa).  

> Er bestaat een groot risico op conflicten die u verhinderen uw werk op te slaan bij het werken aan een weg die zich uitstrekt over andere vierkanten waar ook mappers die zullen bewerken. Het wordt geadviseerd om al uw wijzigingen vóór het bewerken van de weg op te slaan, en dan uw wijzigingen met zeer regelmatige intervallen op te slaan, zoals bijvoorbeeld na het toevoegen van 6 knopen.


### Het netwerk van wegen

![JOSM 4][]

Deze schermafdruk laat JOSM zien met de stijl HOT-OSM-Validate in gebruik [JOSM stijlen](https://josm.openstreetmap.de/wiki/Styles). Hoewel die is ontworpen om validators te helpen, kan het zeer nuttig zijn bij het uitvoeren van het initiële in kaart brengen. Alles wat rood gekleurd is heeft een of ander probleem - de resterende kleuren worden verklaard in de sluetel van deze schermafdruk.  

1.  Dit gedeelte van de weg is rood gekleurd omdat de tag onjuist is getypt en een hoofdletter is gebruikt. De tag zou moeteh zijn highway=unclassified, wat zou hebben geresulteerd in een vaalbruine kleur in de schermafdruk.  
2.  Dit maakt deel uit van het wegennetwerk voor de stad in het zuidwesten. Dit netwerk is verbonden met de rest van het wegennetwerk van Afrika.  
3.  Deze gedeelten van de weg zijn 'geïsoleerd'. Zijn zijn niet op enigerlei wijze verbonden met de stad of met andere wegen. In hun huidige opmaak zijn zij niet erg nuttig & en moeten nader worden onderzocht om vast te stellen of zij kunnen worden verbonden met de rest van het netwerk, of dat overwogen zou moeten worden om ze te verwijderen.  



**Weg of stroom?**

![iD 5][]

Er zijn geen stijlweergaven beschikbaar om te helpen bij het gebruiken van iD, maar in deze schermafdruk kunt u een gebied zien met vegetatie en grond. De grond lijkt eruit te zien als slib of misschien zelfs als een moerasgebied zonder aanwezig water. De gestippelde zwarte en witte lijnen geven paden aan in iD & ik heb er tijdelijk één geaccentueerd & daarna verwijderd om het terrein weer te geven.  

1.  highway=path of stroombedding. Waarschijnlijk beide!  Alle soorten wegen volgen regelmatig de loop van een rivier en in veel gevallen zouden zij de loop van een seizoensrivier of -stroom kunnen volgen. In dit geval lijkt het een ondergelopen vlak gebied te zijn dat, op het moment dat de satellietafbeelding werd geproduceerd, droog stond, en als pad werd gebruikt. Dit zou het best kunnen worden getagd als:  
highway=path  
seasonal=yes  
surface=unpaved  
2.  Het pad kan duidelijk worden gevolgd naar en in de rand met bomen en struikgewas, maar door de bomen is de exacte loop ervan niet te zien. In dit soort gevallen kunt u er zeker van zijn dat het pad, spoor of weg aanwezig is, maar dat het aan het zicht wordt onttrokken door de bomen. Ik heb dit in kaart gebracht door het pad dat ik traceerde door te trekken tot waar het duidelijk zichtbaar was op de grond als een rechte streep door de bomen naar de duidelijk zichtbare doorgang aan de andere kant. Gebruik dit met zorg, maar in dit geval is het duidelijk dat het pad aanwezig is en dat de loop ervan waarschijnlijk zeer dicht bij de lijn ligt die ik heb getekend. Dit is meer extreem gebruik - het is meer gewoon om de loop van een weg te schatten voor slechts een paar meter waar uw zicht wordt geblokkeerd door één of twee bomen.  
3.  Door het pad te hebben verwijderd zodat ik de grond duidelijk kon zien, kan ik dat eenvoudig vervangen door de mogelijkheid 'undo' van iD te gebruiken.

***


## Grenzen residentieel landgebruik

Residentiële grenzen wordne voor vele doelen gebruikt in OpenStreetMap.  

+  Het meest eenvoudige gebruik is om in staat te zijn de bewoonbare gebieden te zien in hogere zoomniveau's bij het bekijken van [OpenStreetMap.org](http://www.openstreetmap.org), waar zij vaalgrijs zijn gekleurd in de standaard weergave.  
+  Waar geen tijd is om tot in detail in kaart te brengen vanaf het begin, zal het project binnen de Task Manager regelmatig zoiets als dit vereisen:  

>    Breng essentiële infrastructuren in kaart, zoals scholen, godsdiensthuizen en markten.  
>    Traceer de omtrekken van nederzettingen en begraafplaatsen.  
>    We zullen wegen later traceren in een andere Task.   
+  landuse=residential kan ook worden gebruikt voor statistische doeleinden, en nauwkeurig in kaart brnegen wordt dan belangrijk  

*  Indien u kunt vaststellen hoeveel mensen er normaal gesproken verblijven in elke nederzetting en  
 hoeveel nederzettingen er normaal gesproken worden gebouwd in een bepaald gebied, dan  
 als u eenmaal het gebied heeft berekend dat wordt bedekt door een grens landuse=residential,  
 kunt u een vrij nauwkeurige schatting van de populatie maken voor dat gebied.  
 Bepalen van het aantal hulpverleners & hoeveelheid medicijnen wordt dan meer realistisch.
*  Plaatsnamen & grenzen worden vaak geïmporteerd vanuit andere bronnen, maar de locatie is niet altijd nauwkeurig. Als u eenmaal een residentiële grens heeft, kan de persoon die de import verzorgt zien waar de plaatsnaam waarschijnlijk moet staan.


### landuse=residential - hoe in kaart te brengen


** In een ideale wereld **  

*Stage 1* - Een beslissing wordt genomen om een gebied in kaart te brengen, en een mapper zet heel snel een een zeer ruwe grens landuse=residential rondom een gebied,  
*Stage 2* - Het project in Task Manager wordt gemaakt & de individuele mappers verfijnen de grens zodat die dichter bij gebouwen ligt etc.  

![JOSM residential][]

![iD residential][]
 
De schermafdrukken voor iD & JOSM hierboven geven een correct in kaar gebracht grens landuse=residential weer.  

1.  De grens dient te worden gesloten, zodat het beginpunt van de lijn (weg), samenvalt met het eindpunt.  
2.  De segmenten en knopen van de grens zouden niet moeten zijn samengevoegd met wegen, waterwegen, gebouwen, of enig ander object. *d.i.* het zou gene knopen moeten delen. Maar zij mogen kruisen.  
3.  De grens zou vrij dicht langs de gebouwen & eventuele tuinen of binnenplaatsen die deel uitmaken van de groepering moeten lopen.  


In de schermafdruk hieronder, bevat mijn vierkant een deel van een grens landuse=residential. De persoon die het vierkant aan mijn rechterzijde heeft voltooid heeft een grens landuse=residential doorgetrokken door hun vierkant, en heeft die toen correct 'overhandigd' aan mij door de grens net binnen mijn vierkant te plaatsen, zodat ik vrij nauwkeurig kan vaststellen waar het in mijn vierkant zou moeten zijn.  


![JOSM residential 1][]

Ik zal extra knopen toevoegen aan de grens, het horizontaal uitbreidend over mijn vierkant zodat hij rondom de gebouwen loopt, en onderin zal ik de grens doorzetten als een rechte lijn net binnen het vierkant onder het mijne, zodat de persoon die het vierkant onder het mijne selecteert in staat zal zijn het uit te breiden rondom eventuele gebouwen die hij heeft. 

Dit is een moeilijke bewerking - u kunt slechts ene klein gedeelte zien van de gehele grote stad / stad / dorp en hoewel u uw best zult doen met de grens landuse=residential is het behoorlijk waarschijnlijk dat een validator, die een overzicht heeft van verschillende vierkanten, de grens op zal moeten knappen zo goed als hij kan nadat de individuele vierkanten in kaart zijn gebracht. 

> Er bestaat een groot risico op conflicten bij het werken aan een grens landuse=residential, omdat die zich uitstrekt tot in andere vierkanten waar ook mappers er aan werken. Het wordt geadviseerd om al uw wijzigingen vóór het bewerken van de grens op te slaan, en dan uw wijzigingen met zeer regelmatige intervallen op te slaan, zoals bijvoorbeeld na het toevoegen van 6 knopen.

***

## Gebouwen muren nederzettingen barrières  

gebouwen worden aan de kaartgegevens toegevoegd om een aantal redenen;  

*  De dichtheid van de gebouwen in een gebied geeft een zeer goede indicatie van het anatal mensen dat daar woont.  
*  De grootte, vorm & locatie van een gebouw kan helpen om het te identificeren als een potentiële plaats voor evacuatie of medische behandeling.  
*  De grootte, vorm en relatieve locatie van gebouwen kan worden gebruikt om bepaalde locaties, zoals bronnen, hulpstations scholen, etc. te identificeren.
*  Er bestaat potentieel om in te schatten hoe groot het percentage schade is voor een gebouw, wat kan worden gebruikt om het aantal potentiële gewonden & vereiste mate van ondersteuning die nodig is in te schatten - dit wordt momenteel (januari 2015) nader onderzocht voor gebruik in de toekomst. 

### Gebouwen - Hoe in kaart te brengen

De overgrote meerderheid van gebouwen die voor HOT in kaart moeten worden gebracht zijn ofwel gebaseerd op rechthoekige vormen met vierkante hoeken, of zijn rond. Als een gebouw een mix van die twee lijkt te zijn, is het meer waarschijnlijk dat u kijkt naar een gebouw waarvan de omtrek aan het oog wordt onttrokken door schaduw, reflectie, gebladerte of iets dergelijks.

Voor sommige taken waar alleen een omtrek van en gebied wordt vereist, zou de taak kunnen specificeren dat gebouwen in kaart mogen worden gebracht als knopen, maar die situaties zijn nogal zeldzaam.  

#### building=yes

Tenzij de instructies voor het project anders specificeren dienen gebouwen te worden getagd als **building=yes**  

*  Er kan vaak een tijdsverschil bestaan tussen het tijdstip waarop de satellietafbeelding is genomen en dat waarop het in kaart brengen wordt uitgevoerd. Er bestaat de mogelijkheid dat het gebouw waar u naar kijkt geen dak schijnt te hebben, maar dat het nu is voltooid & wordt bewoond. Het is ook mogelijk dat u kijkt naar een gebouw met verschillende verdiepingen, waarvan de onderste worden bewoond, en de bovenste zonder dak momenteel niet wordt bewoond.

> **Gebouwen in kaart brengen met iD** - wanneer u het gereedschap voor gebieden gebruikt in iD om de basisvorm te maken, moet u onthouden dat u de tag verandert naar building=yes. De standaard instelling zal de vorm gewoonlijk taggen als area=yes. Indien uw getraceerde gebouw vierkante hoeken heeft, neem dan ook even de tijd om uw getraceerde item te voorzien van rechte hoeken (accentueer het en sneltoets 's').  

*  JOSM is veel sneller voor het in kaart brengen van gebouwen - [JOSM building tools wordt hier uitgelegd.](/en/josm/more-tools/#the-buildings-tools-plugin)  

![Buildings iD][]

Deze schermafdruk geeft een deel weer van een vierkant dat wordt bewerkt. Merk de schaal van 15 meter op aan de onderzijde - ongeveer het getal waarop u zich zou moeten richten bij het bewerken van objecten. Bij het traceren dient u zich er op te richten het gebouw te plaatsen waar het de grond raak:  

1.  **Ronde gebouwen.** In dit geval zijn zij redelijk laag qua hoogte en is hun schaduw nauwelijks zichtbaar. Als u er tussen zou staan zouden zij op halve bollen lijken. Ik heb één ervan in kaart gebracht & en tot zover getagd als **building=yes**.  Ik zou, om de resterende ronde gebouwen snel aan JOSM of iD toe te voegen, deze ene selecteren (accentueer het), sneltoets toetsenbord *CTRL+C*, mijn cursor verplaatsen naar het midden van een ander rond gebouw van dezelfde grootte, sneltoets toetsenbord *CTRL+V*. Wanneer al de ronde gebouwen van deze grootte zijn toegevoegd in mijn vierkant, plak ik een gebouw over een rond gebouw met een andere grootte, JOSM - gebruik *ALT+CTRL* & muis om de grootte te wijzigen naar de juiste grootte, kopieer het & en plak het dan over alle ronde gebouwen van dezelfde grootte.  
2.  **Rechthoekige gebouwen.** Deze bijzonder gebouwen geven een op te merken schaduw. De schaduw kan helpen om de vorm van een gebouw te identificeren dat gedeeltelijk aan het oog wordt onttrokken door ene ander object. U zult merken dat veel van deze gebouwen niet zo eenvoudig zijn, en een veranda hebben of een 'L'-vorm hebben - u dient de feitelijke vorm van het gebouw te traceren omdat dat zal helpen bij het identificeren ervan wanneer namen & andere gegevens worden toegevoegd als deel van het proces van veldonderzoek.  
3.  **Barrières - muren (of heggen) van een nederzetting.** Bestuderen van de afbeelding, in- & uitzoomen totdat ik tevreden ben en dat de vorm van het object (gebruik ook de schaduw om het te identificeren), volgens mij een muur is, heb ik die getagd als **barrier=wall**. Alternatieven zijn onder andere barrier=fence en barrier=hedge.  
4.  Ik heb de barrier=wall samengevoegd met building=yes aan de hoek van het gebouw.  


### Satellietafbeeldingen die de vorm van een gebouw vervormen.


![Buildings_2][]

1.  Bovenstaande satellietafbeelding is van een gebouw, maar de satelliet was er niet direct boven, zodat het gebouw vervormd lijkt en een eindmuur in de afbeelding wordt weergegeven. Vanwege deze hoek lijkt het dak van apex niet rechthoekig. De zon staat praktisch direct boven het gebouw, zodat de schaduw van het gebouw, die wordt aangegeven door de pijlen uit afbeelding 1, bevestigt dat het gebouw rechthoekig is.  

2.  Maak een rechthoek die zich uitstrekt van de pijlen van punt 2 tot waar u schat dat het gebouw eindigt, aangegeven door punt 3 in deze afbeelding, om het gebouw in kaart te brengen.


***


Meer volgt - bekijk onderstaande links voor meer hulp.


# Meer informatie

-  [West African HOT Mapping Tips door gebruiker Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
-  [OSM wiki-item met betrekking tot validatie](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
-  [Highway Tag Africa - de geprefereerde manier om  wegen te taggen in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
-  [Korte handleiding in het Frans over  remote mapping](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)

[iD 3]: /images/coordination/iD_3.png
[JOSM 4]: /images/coordination/JOSM_4.png
[iD 5]: /images/coordination/iD_5.png
[iD residential]: /images/coordination/iD_residential.png
[JOSM residential]: /images/coordination/JOSM_residential.png
[JOSM residential 1]: /images/coordination/JOSM_residential_1.png
[Buildings iD]: /images/coordination/Buildings_iD.png
[Buildings_2]: /images/coordination/Buildings_2.png
