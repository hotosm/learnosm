---
layout: doc
title: Tasking Manager 2 Projecten maken
permalink: /nl_NL/coordination/tasking-manager-project-admin/
lang: nl_NL
category: coordination
---

**Deze gids beschrijft een oudere versie van de Tasking Manager. Als de gebruikersinterface van de versie die u gebruikt er anders uitziet dan die welke hier wordt beschreven dan zou u [de handleiding voor versie 3](/nl/coordination/tasking-manager3-project-admin) moeten consulteren**

# OSM Tasking Manager projectbeheer

De OpenStreetMap Tasking Manager is essentieel voor het uitvoeren van een mapathon, het activeren van HOT, of het maken van taken voor het in kaart brengen voor leerling-mappers. De Tasking Manager verdeelt het werk in beheersbare geografische stukken, die conflicten bij bewerken verminderen, speciaal bij een groot aantal mappers. De Tasking Manager helpt ook bij de nauwkeurigheid voor het in kaart brengen en de kwaliteit van de gegevens door een consistente set instructies te verschaffen voor uw mappers (bijv. 'breng alle wegen en gebouwen in kaart'). In het kort: de Tasking Manager beheert hoe u de werkstroom indeelt en verdeelt voor open activiteiten voor het in kaart brengen. Deze module beschrijft het basisbeheer voor de OSM Tasking Manager voor succesvolle gebeurtenissen voor het in kaart brengen. 

 Deze handleiding is specifiek geschreven voor die personen die instructies behoeven voor het beheren van de OSM Tasking Manager, inclusief het maken en aanpassen van projecten voor het in kaart brengen van open gebeurtenissen, d.i. 'mapathons'. Deze handleiding is van toepassing voor alle instanties van de OSM Tasking Manager, inclusief de HOT Tasking Manager <http://tasks.hotosm.org/> en de TeachOSM Tasking Manager <http://tasks.teachosm.org/>. Een lijst van andere instanties van de OSM Tasking Manager is t evinden op [de wiki van OpenStreetMap](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager#Operational_installations_of_the_Tasking_Manager)

Naar de HOT of OSM Tasking Manager wordt regelmatig verwezen als naar **TM2,** als een afkorting voor Tasking Manager, versie 2. 

## Inloggen & toegangsniveaus
Het eerst wat u moet begrijpen is het toegangsniveau. Alle toegang tot TM2 wordt geautoriseerd door middel van <https://www.openstreetmap.org>. U heeft een account voor OpenStreetMap (OSM) nodig om toegang te kunnen krijgen tot TM2. Bezoek, als u dat account eenmaal heeft, <http://tasks.hotosm.org/> en klik op **Login to OpenStreetMap**, wat u terug zal brengen naar de pagina van OSM waar u de Tasking Manager kunt autoriseren voor beperkte toegang tot uw account van OSM. 

### Toegangsniveaus binnen de OSM Tasking Manager
De OSM Tasking Manager heeft drie niveaus voor toegang van gebruikers:
-  **User** - Het meest basale niveau. De gebruiker kan inloggen in TM2 en de functionaliteit ervan gebruiken om een project voor het in kaart brengen te zoeken en te selecteren en daarin te werken. Dit gebruiksniveau wordt volledig beschreven in [de handleiding OSM Tasking Manager binnen LearnOSM](/nl_NL/coordination/tasking-manager/). Onthoud dat sommige projecten, zoals die in de status concept (d.i. nog niet gepubliceerd) niet zichtbaar zijn voor gebruikers.  
-  **Project Manager** - Projectbeheerders hebben toegang om projecten binnen TM2 aan te maken en bij te werken.  
-  **Administrator** - Beheerders hebben toegang die hen in staat stelt gebruikersniveaus van gebruikers binnen TM2 te beheren.
U heeft het toegangsniveau Project Manager nodig om nieuwe projecten binnen TM2 aan te maken.

## Een nieuw project aanmaken binnen TM2 

![TM New][]

Klik op uw gebruikersnaam in de rechter bovenhoek, dan **Create a New Project.** U kunt dan kiezen om het door u gewenste gebied te tekenen op een kaart of om een begrenzingsvak te importeren vanuit een bestand;  

![TM Draw or Import][]


#### Tekenen van een gebied voor het in kaart brengen

![TM Draw][]

1. Klik op de knop ‘Draw’ in de rechter bovenhoek.
2. Houd, om een polygoon te tekenen die het gebied weergeeft in het kaartvenster, de rechter muisknop ingedrukt om de kaart te verplaatsen zonder te klikken, wat een knoop zou toevoegen.  De polygoon zou net aan het in kaart te brengen gebied moeten omvatten. Dit bespaart tijd bij het voltooien van tegels die niet van belang zijn (d.i. oceaan, bos)  
3. Klik op uw beginpunt om de polygoon te voltooien  

of

#### Uploaden van een GeoJSON- of KML-bestand van het in kaart te brengen gebied  

1. Klik op de knop ‘Import’,  
2. Blader naar uw bestand in het venster File Upload,  
3. Klik op de bestandsnaam om het bestand te accentueren en klik dan op ‘Open’.  


### Vierkanten voor taken

Het in kaart brengen gebied, gedefinieerd door het geüploade bestand of met de hand getekend, zal in het kaartvenster verschijnen, en u zult worden gevraagd hoe het in kaart te brengen gebied moet worden opgedeeld in individuele taken.  Er zijn twee opties:  

1. Square Grid - De Tasking Manager zal het gehele projectgebied uniform opdelen in exacte vierkanten van dezelfde grootte voor de taken. Dit is over het algemeen een goed idee voor algemene projecten voor het in kaart brengen door grote groepen mensen.
2. Arbitrary Geometries - Indien u een bestand uploadde om uw gebied te definiëren, zou dat bestand ook de vormen kunnen bevatten voor de individuele taken. Er moet een speciale behoefte zijn bij het in kaart brengen om aangepaste vormen voor taken te maken. Een import van een wegenproject zou bijvoorbeeld aangepaste vormen voor taken nodig kunnen hebben.

### Het raster met vierkanten gebruiken voor taken in vierkanten
Selecteer, om uniforme vierkante tegels te maken, de optie Square Grid en klik op Next.  
Het in kaart te brengen gebied wordt automatisch opgedeeld in rastercellen en elke cel vormt een taak. Hoe groter het gebied van het project, hoe groter de resulterende vierkanten zullen zijn. Bepaal de optimale grootte van de tegels, gebaseerd op de vijf opties voor de relatieve tegelgrootte. Als zodanig zal een kleinere tegelgrootte resulteren in meer taken. zoals weergegeven in de schermafdrukken.  De optimale tegelgrootte zal daarom afhangen van zowel de grootte va het gebied (kleinere tegels maken voor een groter project) en het aantal objecten dat waarschijnlijk in kaart gebracht dient te worden binnen elke tegel. In het algemeen gesproken zou, als de grootte van het in kaart te brengen gebied en/of het vermoedelijke aantal in kaart te brengen objecten groter wordt, de gekozen tegelgrootte voor het project kleiner moeten worden. 

![TM Tile Sizes][]{: width="1500"}

***Overwegingen bij het bepalen van tegelgrootten***

-  Een nieuwe mapper bij een mapathon zal een gebied in kaart brengen met, ruwweg, een kwart van de snelheid van een ervaren mapper (velen beginnen langzamer, maar worden al gauw sneller),. 
-  Een nieuwe mapper vindt het net zo moeilijk om objecten in de satellietafbeeldingen te zoeken als om ze feitelijk in kaart te brengen. Ronde hutten zoeken die zijn verbonden met natuurlijke materialen in een gebied met rond struikgewas is een steile leercurve voor een 'nieuwe'.
-  Een nieuwe mapper vindt het ook moeilijk om veel objecten te traceren, zoals gebouwen.
-  Later in het proces heeft u de mogelijkheid voor een mapper om een vierkant te 'splitsen' - splitsen van een vierkant in kwarten helpt om voor nieuwe mappers een grootte van een vierkant te krijgen dat zij kunnen verwerken.  
-  Het meest waarschijnlijke deel van een vierkant waar problemen voor kunnen komen is aan de randen en hoeken. Daarom betekenen kleinere vierkanten meer hoeken en randen en zullen resulteren in dupliceren van het in kaart gebrachte als ook dat objecten worden gemist. Er is een nadeel bij het kleiner maken van een vierkant, wat het voor de nieuwe mapper eenvoudiger maakt maar meer fouten kan opleveren omdat er meer hoeken en randen zijn.
-  Een vierkant kan worden opgedeeld, maar er is geen optie op vierkanten samen te voegen om ze opnieuw groter te maken. Wees dus voorzichtig bij het splitsen
-  **Conclusie** Probeer zelf een gebied van het project in kaart te brengen om te zien hoe eenvoudig het is en welke moeilijkheden u tegenkomt. Dit zou u moeten helpen om de optimale tegelgrootte te bepalen. Sta splitsen toe, maar niet oneindig - sommige nieuwe mappers splitsen vierkanten continu, zodat zij zo klein worden dat het uitert moeilijk wordt om ze in kaart te brengen.  

### Willekeurige geometriën
Indien u een bestand uploadde om uw project voor het in kaart brengen te definiëren is het mogelijk dat het ook informatie bevat over de exacte vormen die u in de individuele taken van uw project wilt hebben.  Als de AOI bestaat uit één polygoon, zal het project slechts één taak hebben. Dit is over het algemeen niet nodig en zou alleen in speciale gevallen nodig zijn.

### Overwegingen met betrekking tot afbeeldingen

In de meeste gevallen gebruiken we de "standaard" Bing-afbeeldingen. Maar er zijn situaties waar u een alternatieve bron zou willen kiezen:

1. Bing verschaft geen bedekking in hoge resolutie voor uw gebied om in kaart te brengen (AOI).
2. Bing heeft behoorlijk veel bedekking door wolken in dit gebied.
3. Als u nieuwere afbeeldingen nodig heeft voor evaluatie na een ramp.

Als Bing niet adequaat genoeg blijkt dan is Mapbox de volgende keuze. U zou alleen naar andere bronnen moeten kijken als deze twee niet aan uw eisen voldoen.

In dergelijke gevallen is het niet voldoende om een bron met vergelijkbare licentie te kiezen en die beschikbaar te maken via een service van WMS of TMS. Uw AOI is waarschijnlijk al gedeeltelijk in kaart gebracht met behulp van afbeeldingen van Bing of Mapbox en er zou een opvallende verschuiving kunnen optreden tussen afbeeldingen. U dient zeer goed te kijken naar verscheidene locaties in uw in kaart te brengen gebied (AOI=area of interest) en de verschuiving te bepalen tussen uw afbeelding een eerder in kaart gebrachte gegevens. Als de bestaande gegevens van OSM zijn verschoven ten opzichte van uw afbeelding maar passen binnen de afbeelding van Bing dan nemen we in het algemeen aan dat Bing de "gouden standaard" is, tenzij we GPS-sporen hebben die aantonen dat deze aanname verkeerd is.

Als er een constante verschuiving is tussen uw afbeelding en Bing over het in kaart te brengen gebied dan zou dit kunnen worden gecorrigeerd op de server zodat afbeeldingen die vanuit verscheidene bronnen in de bewerker worden geladen overeenkomen. Als dit niet mogelijk is, als de verschuiving varieert in het in kaart te brengen gebied of als bestaande gegevens zijn uitgelijnd op verscheidene bronnen, dan is het tijd voor plan B:

Het belangrijkste punt is dat u een strategie moet ontwikkelen voor hoe u met deze problemen omgaat en gedetailleerde instructies aan mappers en validators verschaft. We raden ten sterkste aan om een dergelijk project te declareren als: "for experienced mappers only" en uit te leggen dat ervaring in dit geval niet betekent dat men al meer dan 200+ gebouwen in kaart heeft gebracht, maar dat men ook al ervaring heeft met problemen met uitlijning en verschillende bronnen van afbeeldingen.

Een mogelijke strategie zou deze stappen kunnen omvatten:

1. Vermeld duidelijk welke afbeelding geacht wordt de verwijzing te zijn waaraan al het andere zou moeten worden uitgelijnd. Laten we er in dit geval van uitgaan dat die verwijzing Bing is.
2. Zorg er voor dat alle reeds bestaande objecten die ook zichtbaar zijn op Bing zijn uitgelijnd op de afbeelding van Bing, d.i. lijn ze, indien nodig, opnieuw uit.
3. Lijn de alternatieve afbeelding uit op bestaande objecten (en dus op Bing) met behulp van de functie voor verschuiven van de afbeelding in de bewerker.
4. Voeg nieuwe objecten toe uit de nu correct uitgelijnde alternatieve afbeelding.

Het is belangrijk dat stap 3 wordt herhaald voor elke taak van het project en de individuele vierkanten voor de taken zouden niet te groot moeten zijn, omdat verschuiving van afbeeldingen aanzienlijk kan variëren in een AOI, in het bijzonder als het gebied niet vlak is. Zelfs onderbrekingen in afbeeldingen kunnen voorkomen binnen een project - kijk er naar en adviseer de deelnemers met betrekking tot dat probleem.

Hier staan enkele stukjes informatie die u zou kunnen opnemen in de instructies voor het project:

- [algemene richtlijnen voor verscheidene bewerkers](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [een geanimeerde gif over het uitlijnen van afbeeldingen in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [het hoofdstuk JOSM uitlijnen van afbeeldingen in learnOSM](http://learnosm.org/nl_NL/josm/correcting-imagery-offset)

## Het project maken & beschrijving toevoegen
Klik op “Create Project” na het kiezen van een tegelgrootte. 

![TM Create Project][]

Dit maakt het project in de Tasking Manager en opent een scherm waar u de beschrijving, instructies en andere informatie over het project kunt opgeven. Onthoud dat dit niet moet worden onderschat. Een groot gedeelte van de mappers (in veel gevallen de meerderheid) zal geen eerdere ervaring hebben met OpenStreetMap en/of HOT en zal dus niet bekend zijn met richtlijnen voor taggen. Het is heel belangrijk dat de doelen van het project helder zijn en dat alle waarmee de mappers rekening zouden moeten houden daar worden uitgelegd. Het is vaak an te raden om één project toe te wijzen aan één klasse objecten die in kaart moeten worden gebracht. Indien u een basiskaart nodig heeft voor een gebied, is het beter die op te delen in verscheidene projecten, een voor de wegen, een voor de gebouwen etc. Dan kunnen beginners zich focussen op een kleine klasse van objecten terwijl zij leren die juist in kaart te brengen. Anders zou u kunnen eindigen met heel veel tegels die een beetje van alles bevatten maar niets echt voltooid.

Gebruik gewone taal omdat uw doelgroep niet hoeft te bestaan uit mensen voor wie Engels de eigen taal is.

1. De titel van het project zou al moeten onthullen welke entiteiten in kaart gebracht zouden moeten worden. Kies voor een titel als 
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. De meest belangrijke boodschappen zouden eerst moeten verschijnen op de tab Instructions om er zeker van te zijn dat ze zijn gelezen. Dit zou dus ook een eventueel te gebruiken speciale afbeelding in plaats van Bing moeten zijn. De eerste zinnen zouden kunnen vermelden dat het niet verplicht is elk afzonderlijk huis in kaart te brengen als het project over wegen en woongebieden gaat, bijvoorbeeld. Of dat het verplicht is elk huis in kaart te brengen als het project betrekking heeft op schattingen over bevolkingsdichtheid. Dit zijn berichten die ook zouden moeten verschijnen op de tab Description.
3. Andere punten ter verduidelijking: Als het project geschikt is voor mappers met slechts een bepaald niveau van ervaring. Bijvoorbeeld: het project gebruikt geïmporteerde bestanden of bestaande gegevens zouden moeten worden uitgelijnd aan GPS-sporen of een andere afbeelding (cf. het eerder gedeelte). Omschrijf het zo dat nieuwe mappers zich welkom zullen voelen bij te dragen aan andere projecten maar zullen begrijpen dat in dit geval geavanceerde technieken vereist zijn.
4. Er zijn richtlijnen die algemene fouten behandelen die we zien bij het valideren van het in kaart gebrachte. Eén voorbeeld is Blake Girardot's compilatie over [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Gebruik de link in de instructies en leg uit dat het volgen van die richtlijnen is vereist.
5. De uiteindelijke bron voor taggen is de [wiki van OpenStreetMap](http://wiki.openstreetmap.org/wiki/Map_Features). Voor veel aan HOT gerelateerde taken is de pagina op [taggen van highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) de juiste specificatie en ten zeerste aanbevolen om te lezen voor elke mapper. Als uw project moet voldoen aan andere standaarden voor taggen, schrijf dan een soortgelijke pagina in de wiki en link daarnaar in uw instructies.

<!--Hidden Text - Google discussion group on TM - https://groups.google.com/a/hotosm.org/forum/?utm_medium=email&utm_source=footer#!msg/tm-project-managers/5OVNGMBsQv0/01Wxw95cBwAJ 

Youtube video met betrekking tot ontwikkeling & bijwerken van de code voor TM = https://www.youtube.com/watch?v=hFFlrm9wKcA
uit e-mail van Pete Masters
Hi Polyglot, just in case it is useful, we worked with Pierre Giraud when he visited London to do a tech introduction to the tasking manager. It's here if you're interested: https://www.youtube.com/watch?v=hFFlrm9wKcA

Cheers,

Pete


Vóór het maken van een taak
Moet deze taak een Missing Maps Task zijn? 
Zal het project een component direct field mapping hebben?
Is het project gerelateerd aan een ramp? 
Indien ja dan zou het een project in HOT moeten zijn en niet Missing Maps. Neem contact op met de leider voor het activeren.
Wordt het project gesteund door een van de bestaande leden van Missing Maps?
Zijn de afbeeldingen van hoge kwaliteit en zonder wolken?
Indien nee, neem dan contact op met ARC om te zien of zij kunnen helpen nieuwe afbeeldingen te krijgen van US Department of State
Proces voor maken van een taak
U dient ingelogd zijn in de Tasking Manager om een nieuw project aan te maken - gebruik uw gebruikersnaam & wachtwoord van uw account voor OpenStreetMap. Onthoud dat u bepaalde rechten moet hebben toegewezen aan uw account voor OpenStreetMap om een nieuw project te kunnen aanmaken in Tasking Manager. Open uw internet browser en ga naar tasks.hotosm.org. U zult een pagina zien zoals deze:


Als u eenmaal bent ingelogd, klik op uw gebruikersnaam in de rechter bovenhoek.
Klik, in het keuzemenu, op “Create a New Project”.

Er zijn twee opties voor het maken van een project: 
Tekenen van een gebied voor het in kaart brengen
Uploaden van een GeoJSON- of KML-bestand van het in kaart te brengen gebied

Optie 1 - Tekenen
Klik op de knop ‘Draw’,
Teken in het kaartvenster een polygoon die het in kaart te brengen gebied weergeeft (klik met rechts; houd de rechter muisknop ingedrukt om de kaart te verplaatsen zonder een knoop toe te voegen)
Opmerking: de polygoon zou net aan het in kaart te brengen gebied moeten omvatten. Dit bespaart tijd bij het voltooien van tegels die niet van belang zijn (d.i. oceaan, bos)

Dubbelklik om de polygoon te voltooien

Optie 2 - GeoJSON of KML importeren
Klik op de knop ‘Import’

Blader naar uw bestand in het venster File Upload
Klik op de bestandsnaam om het bestand te accentueren en klik dan op ‘Open’.

Het in kaart brengen gebied, gedefinieerd in het GeoJSON- of KML-bestand, zal in het kaartvenster verschijnen, en u zult worden gevraagd hoe het in kaart te brengen gebied moet worden opgedeeld in individuele taken.  Er zijn twee opties:
Square Grid - het in kaart te brengen gebied (AOI) wordt automatisch opgedeeld in rastercellen en elke cel wordt een taak.
Arbitrary Geometries - Elke individuele polygoon in het AOI geeft een individuele taak weer.  Als het AOI bestaat uit één polygoon, zal het project slechts één taak hebben.
Opmerking: deze handleiding behandelt alleen de optie voor vierkant raster.

Selecteer de optie Square Grid en klik op Next.
Bepaal de optimale grootte van de tegels, gebaseerd op de vijf opties voor de relatieve tegelgrootte. Belangrijk: de grootte van de tegels is relatief, d.i. hetzelfde niveau grootte zak groter zijn in een groot project dan in een kleiner (tegels “S” of “M” hebben dus niet altijd dezelfde grootte). Onthoud dat elke polygoon één enkele taak zal worden. Als zodanig zal een kleinere tegelgrootte resulteren in meer taken. zoals weergegeven in de schermafdrukken.  De optimale tegelgrootte zal daarom afhangen van zowel de grootte va het gebied (kleinere tegels maken voor een groter project) en het aantal objecten dat waarschijnlijk in kaart gebracht dient te worden binnen elke tegel. In het algemeen gesproken zou, als de grootte van het in kaart te brengen gebied en/of het vermoedelijke aantal in kaart te brengen objecten groter wordt, de gekozen tegelgrootte voor het project kleiner moeten worden. De ideale grootte van een vierkant is ruwweg 45 min - 1 uur werk. Op grotere mapathons of in dichter bebouwde steden zijn kleinere taken (~20 min) beter.



Klik, na het kiezen van een tegelgrootte, op “Create Project”.  Dit maakt het project in de Tasking Manager en opent een scherm waar u, indien nodig, de beschrijvingen, instructies en andere informatie over het project kunt vermelden.  
Op de tab ‘Description’:
stel de van toepassing zijnde Priority in
geef het project een naam met behulp van het tekstvak “Name of the Project”
Als de taak specifiek is voor Missing Maps, gebruik dan de volgende conventie voor het geven van de naam:  Missing Maps: <Locatie/Projectnaam>
vermeld een beschrijving in het vak ‘Description’.  Opmerking: opmaak in het vak Description is gebaseerd op ‘Markdown’.  Tips voor het gebruiken van ‘Markdown’ zijn te vinden door te klikken op de link‘Markdown’ onder het vak Description box. Opmerking: het is noodzakelijk om een blanco regel tussen alinea's te plaatsen om ze te scheiden.
Als u een taak maakt specifiek voor het project Missing Maps, neem dan het volgende op als deel van de beschrijving: ‘The Missing Maps project aims to map the most vulnerable places in the world (affected by humanitarian crises: disease epidemics, conflict, natural disasters, poverty, environmental crises). Building on HOT's disaster preparedness projects, the Missing Maps tasks facilitate pre-emptive mapping of priority countries to better facilitate disaster response, medical activities and resource allocation when crises occur.’



Op de tab ‘Instructions’:
vermeld de objecten die in kaart moeten worden gebracht in het vak “Entities to Map”, bijv. buildings and primary roads.
vermeld, in het vak ‘Changeset Comment’, de opmerking voor de wijzigingenset in die mappers zouden moeten gebruiken bij het uploaden van de gegevens die zij in kaart hebben gebracht.  De opmerkingen zouden verscheidene dingen over het project moeten aangeven.  Bijv. de opmerking ‘Bukama, #DRC #hotosm-project-1145 #MissingMaps #Bing’ geeft de locatie van de taak, het nummer van het project, dat het project specifiek voor Missing Maps is en dat afbeeldingen van Bing worden gebruikt voor de taak.  Opmerkingen voor wijzigingensets zullen uiteraard per project verschillen, maar zouden in het algemeen moeten worden gebruikt als een snelle indicatie/beschrijving van het project.
vermeld gedetailleerde instructies die mappers dienen te volgen in het vak “Detailed Instructions”.  Gedetailleerde instructies moeten, tenminste, aangeven welke objecten in kaart gebracht moeten worden, hoe de objecten te taggen, en de te gebruiken bron van afbeeldingen voor dit project.  Andere details zouden moeten worden opgenomen indien van toepassing.  Opmerking: opmaak in het vak Description is gebaseerd op ‘Markdown’.  Tips voor het gebruiken van ‘Markdown’ zijn te vinden door te klikken op de link ‘Markdown’ onder het vak “Detailed Instructions”.
Voeg aan de gedetailleerde instructies toe of er mogelijk bedekking van wolken is die het in kaart brengen van de tegels hindert. Verzoek mappers om de bedekking door wolken te vermelden in het veld voor opmerkingen en de taak als voltooid te markeren.
Voeg, indien van toepassing, aanvullende informatie toe voor specifieke taken in het vak “Per Task Instructions (Optional)”.  Dit zal worden gebruikt als er iets specifieks dient te worden uitgevoerd voor individuele taken in het project.  


Op zowel de tabs ‘Description’ als ‘Instructions’ kunt u de inhoud vertalen door te kliken op het pictogram voor de taal boven de tekstvakken (en, fr, etc.). Indien er geen tekst is ingevoerd voor die taal zal de standaardtaal (Engels) in plaats daarvan verschijnen. U zult merken dat de verschillende tekstvakken niet direct overschakelen naar de verschillende talen wanneer u er een selecteert, u zult de taal die u wilt bewerken dienen te selecteren in elk vak afzonderlijk.

De tab ‘Area’ functioneert nog niet.

De tab ‘Imagery’ kan worden gebruikt indien er een andere bron voor afbeeldingen dient te worden gebruikt dan de standaard  bronnen voor afbeeldingen voor OSM in OSM.  Er zijn ook verscheidene opties voor de licenties in het keuzemenu Required License als een speciale licentie is vereist voor de alternatieve bron voor de afbeelding.

De tab “Priority Areas” wordt gebruikt om, indien nodig, gebieden met prioriteit te definiëren voor de taak.  Dit wordt gedaan door de gebieden met prioriteit met de hand te tekenen in het kaartvenster.  Eenmaal opgeslagen zullen deze gebieden worden weergegeven met hoge prioriteit op de hoofdpagina van het project.  Op de tab ‘Priority Areas’ zijn ook gereedschappen aanwezig om een bestaand gebied met hoge prioriteit te bewerken of te verwijderen.

Indien nodig kan toegang tot het nieuwe project worden beperkt tot een bepaalde groep gebruikers met behulp van de tab “Allowed Users”.  Klik eerst, om de toegang te beperken, in het keuzevak naast “Private”.  Voer dan, in het tekstvak “Allowed Users”, de gebruikersnaam in van een gebruiker die toegang zou moeten verkrijgen.  Herhaal dat voor de andere gebruikers die toegang moeten krijgen.  Opmerking: Beschikbaar maken van de gebruikersnaam om te kunnen worden toegevoegd aan de Allowed Users - zij dienen eerst de URL voor uw instantie van OSMTM te bezoeken en toegang Authorize voor hun account voor OpenStreetMap. Nadat dit is gedaan zou hun gebruikersnaam voor de beheerder zichtbaar moeten zijn om toe te kunnen voegen. 

De tab “Misc” verschaft opties om een vervaldatum toe te voegen en een voorkeuze voor JOSM.  De vervaldatum kan worden ingevuld in het vak “Project due date” en geeft de datum weer waarna het project automatisch zal worden gearchiveerd.  Gebruikers kunnen ook een voorkeuzen XML-bestand voor JOSM laden om te helpen met, indien van toepassing, het taggen.  

Klik, na het invoeren van de beschrijving,, instructies, en de noodzakelijke informatie op de andere tabs, op “Save the Modifications”, wat u terug zal brengen naar de hoofdpagina van het project.  

Gedateerd item wiki - bijwerken als deze handleiding voltooid is  http://wiki.openstreetmap.org/wiki/Tasking_manager_admin
- end of hidden text-->
  
### Proeflezen en publiceren
Lees de verschillende tabs nog eens door om er voor te zorgen dat de bewoordingen en opmaak juist zijn, en de instructies helder. Indien u wijzigingen of verfijningen wilt aanbrengen aan uw project, klik op de link ‘Edit’ in de rechter bovenhoek van de pagina. 

![TM Edit Project][]

Klik, als het project gereed is om in kaart te laten brengen, op de link ‘Publish’. Als het project eenmaal is gepubliceerd, is het beschikbaar om in kaart te brengen voor iedereen met een account voor OSM, tenzij een groep gebruikers werd gespecificeerd op de tab ‘Allowed Users’, in welk geval alleen de toegestane gebruikers er aan zouden kunnen werken.  Indien nodig kan het project nog steeds worden bewerkt nadat het is gepubliceerd, door te klikken op de link ‘Edit’.

[TM Tile Sizes]: /images/coordination/TM_tile_sizes.png
[TM New]: /images/coordination/TM_create_new.png
[TM Draw or Import]: /images/coordination/TM_draw_or_import.png
[TM Draw]: /images/coordination/TM_draw.png
[TM Create Project]: /images/coordination/TM_create_project.png
[TM Edit Project]: /images/coordination/TM_edit_link.png