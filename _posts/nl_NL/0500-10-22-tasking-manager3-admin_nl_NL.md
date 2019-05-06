---
layout: doc
title: Tasking Manager 3 Projecten maken
permalink: /nl_NL/coordination/tasking-manager3-project-admin/
lang: nl_NL
category: coordination
---

# OSM Tasking Manager Projecten maken en beheren

> Deze handleiding kan gedownload worden als een zelfstandige module: [tasking-manager3-admin_nl_NL.odt](/files/tasking-manager3-admin_nl_NL.odt) or [tasking-manager3-admin_nl_NL.pdf](/files/tasking-manager3-admin_nl_NL.pdf) 

**Deze handleiding beschrijft de huidige versie van de Tasking Manager. Als de gebruikersinterface van de versie die u gebruikt er anders uitziet dan die welke hier wordt beschreven dan zou u [de handleiding voor de vorige versie](/nl_NL/coordination/tasking-manager-project-admin) moeten consulteren**

Index
-------------
-  [inloggen](/nl_NL/coordination/tasking-manager3-project-admin/#logging-in-&amp;amp;-access-levels)  
-  [Een nieuw project maken - definiëren van het betrokken gebied](/nl_NL/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)  
-  [Taken maken - het gebied onderverdelen](/nl_NL/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)
-  [Het project maken - specificeren wat uw gebruikers moeten weten](/nl_NL/coordination/tasking-manager3-project-admin/#create-the-project)
    -  [Omschrijving - het eerste dat gebruikers leren over uw project](/nl_NL/coordination/tasking-manager3-project-admin/#description)
    -  [Instructies - wat de gebrukkers zouden moeten doen](/nl_NL/coordination/tasking-manager3-project-admin/#instructions)
    -  [Metadata - waar het project bij hoort](/nl_NL/coordination/tasking-manager3-project-admin/#metadata)
    -  [Gebieden met prioriteit - waar gebruikers zouden moeten beginnen met in kaart brengen](/nl_NL/coordination/tasking-manager3-project-admin/#priority-areas)
    -  [Afbeeldingen - de basis voor het in kaart brengen](/nl_NL/coordination/tasking-manager3-project-admin/#imagery)
    -  [Rechten - wie mag in kaart brengen en valideren](/nl_NL/coordination/tasking-manager3-project-admin/#permissions)
    -  [Nuttige hints - hoe zou u al deze velden in moeten vullen](/nl_NL/coordination/tasking-manager3-project-admin/#instruction-notes)
    -  [Publiceren - niet vergeten, anders komt het nooit af](/nl_NL/coordination/tasking-manager3-project-admin/#proofread-and-publish)

De OpenStreetMap Tasking Manager is essentieel voor het uitvoeren van een mapathon, het activeren van HOT, of het maken van taken voor het in kaart brengen voor leerling-mappers. De Tasking Manager verdeelt het werk in beheersbare geografische stukken, die conflicten bij bewerken verminderen, speciaal bij een groot aantal mappers. De Tasking Manager helpt ook bij de nauwkeurigheid voor het in kaart brengen en de kwaliteit van de gegevens door een consistente set instructies te verschaffen voor uw mappers (bijv. 'breng alle wegen en gebouwen in kaart'). In het kort: de Tasking Manager beheert hoe u de werkstroom indeelt en verdeelt voor open activiteiten voor het in kaart brengen. Deze module beschrijft het basisbeheer voor de OSM Tasking Manager voor succesvolle gebeurtenissen voor het in kaart brengen. 

 Deze handleiding is specifiek geschreven voor die personen die instructies behoeven voor het beheren van de OSM Tasking Manager, inclusief het maken en aanpassen van projecten voor het in kaart brengen van open gebeurtenissen, d.i. 'mapathons'. Deze handleiding is van toepassing voor alle instanties van de OSM Tasking Manager versie 3, inclusief de HOT Tasking Manager <http://tasks.hotosm.org/> en de TeachOSM Tasking Manager <http://tasks.teachosm.org/>.

Naar de HOT of OSM Tasking Manager wordt regelmatig verwezen als naar **TM3,** als een afkorting voor Tasking Manager, versie 3.

## Inloggen & toegangsniveaus

Het eerst wat u moet begrijpen is het toegangsniveau. Alle toegang tot TM3 wordt geautoriseerd door middel van de website van [OpenStreetMap](https://www.openstreetmap.org). U heeft een account voor OpenStreetMap (OSM) nodig om toegang te kunnen krijgen tot TM3. Bezoek, als u dat account eenmaal heeft, [de Tasking Manager] (http://tasks.hotosm.org) en klik op **Login to OpenStreetMap**, wat u terug zal brengen naar de pagina van OSM waar u de Tasking Manager kunt autoriseren voor beperkte toegang tot uw account van OSM. 

### Toegangsniveaus binnen de OSM Tasking Manager

De OSM Tasking Manager heeft drie niveaus voor toegang van gebruikers:
-  **User** - Het meest basale niveau. De gebruiker kan inloggen in TM3 en de functionaliteit ervan gebruiken om een project voor het in kaart brengen te zoeken en te selecteren en daarin te werken. Dit gebruiksniveau wordt volledig beschreven in [de handleiding OSM Tasking Manager binnen LearnOSM](/nl_NL/coordination/tasking-manager-3/). Onthoud dat sommige projecten, zoals die in de status concept (d.i. nog niet gepubliceerd) niet zichtbaar zijn voor gebruikers.  
-  **Project Manager** - Projectbeheerders hebben toegang om projecten binnen TM3 aan te maken en bij te werken.  
-  **Administrator** - Beheerders hebben toegang die hen in staat stelt gebruikersniveaus van gebruikers binnen TM3 te beheren.

U heeft het toegangsniveau Project Manager nodig om nieuwe projecten binnen TM3 aan te maken.

## Een nieuw project aanmaken binnen TM3 

![TM New][]

Klik op uw gebruikersnaam in de rechter bovenhoek, dan **Create a New Project.** U kunt dan kiezen om het door u gewenste gebied (AoI) tekenen op een kaart of om een bepaald gebied (Area of Interest = AoI) te importeren vanuit een GeoJSON-bestand;  

> Importeren van een bestand met een gedefinieerd heeft altijd de voorkeur boven het met de hand tekenen van een project in Tasking Manager. Programma's als JOSM, QGIS, etc kunnen worden gebruikt om bestanden te maken voor het importeren in de Tasking Manager. De voorgestelde werkstroom is om een .osm-bestand te maken van het AoI met behulp van JOSM en dan http://geojson.io/ gebruiken om een GeoJSON te genereren.

### Tekenen van een gebied voor het in kaart brengen

1. Klik op de knop ‘Draw’ in de rechter bovenhoek.
2. Houd, om een polygoon te tekenen die het gebied (AoI)  weergeeft in het kaartvenster, de rechter muisknop ingedrukt om de kaart te verplaatsen zonder te klikken, wat een knoop zou toevoegen.  De polygoon zou net aan het in kaart te brengen gebied moeten omvatten. Dit bespaart tijd bij het voltooien van tegels die niet van belang zijn (d.i. oceaan, bos)  
3. Klik op uw beginpunt om de polygoon te voltooien  
4. Na het voltooien van de polygoon kunt u de knopen verplaatsen of nieuwe toevoegen om het gebied precies zo te krijgen als u dat wilt.

of

### Uploaden van een GeoJSON- of KML-bestand van het in kaart te brengen gebied  

1. Klik op de knop ‘Import’,  
2. Blader naar uw bestand in het venster File Upload,  
3. Klik op de bestandsnaam om het bestand te accentueren en klik dan op ‘Open’.  
4. Geïmporteerde gebieden kunnen niet worden bewerkt.


## Taak maken

Een gebied (AoI) voor een project is de grote alles bevattende gebied om in kaart te brengen. Dat gebied wordt dan opgedeeld in kleinere gebieden, Taken genaamd. 

Het in kaart te brengen gebied, gedefinieerd door het geüploade bestand of met de hand getekend, zal in het kaartvenster verschijnen en u zult worden gevraagd hoe het in kaart te brengen gebied moet worden opgedeeld in individuele taken. Er zijn twee opties:  

1. Square Grid - De Tasking Manager zal het gehele projectgebied uniform opdelen in exacte vierkanten van dezelfde grootte voor de taken. Dit is over het algemeen een goed idee voor algemene projecten voor het in kaart brengen door grote groepen mensen.
2. Arbitrary Geometries - Indien u een bestand uploadde om uw gebied te definiëren, zou dat bestand ook de vormen kunnen bevatten voor de individuele taken. Er moet een speciale behoefte zijn bij het in kaart brengen om aangepaste vormen voor taken te maken. Een import van een wegenproject zou aangepaste vormen voor taken nodig kunnen hebben of de uitvoer van een verkleiningsproces voor het in kaart te brengen gebied bijvoorbeeld.

### Het raster met vierkanten gebruiken voor taken in vierkanten

Selecteer, om uniforme vierkante tegels te maken, de optie Square Grid en klik op Next.  

![TM Tile Sizes][]

Het in kaart te brengen gebied wordt automatisch opgedeeld in rastercellen en elke cel vormt een taak. Bepaal de optimale grootte van de tegels met behulp van de knoppen "Larger" en "Smaller" om de grootte van de vierkanten voor de Taken aan te passen. Als zodanig zal een kleinere tegelgrootte resulteren in meer taken. De optimale tegelgrootte zal daarom afhangen van zowel de grootte van het gebied (kleinere tegels maken voor een groter project) en het aantal objecten dat waarschijnlijk in kaart gebracht dient te worden binnen elke tegel. In het algemeen gesproken zou, als de grootte van het in kaart te brengen gebied en/of het vermoedelijke aantal in kaart te brengen objecten groter wordt, de gekozen tegelgrootte voor het project kleiner moeten worden. 

Onthoud dat **er meerdere kaartlagen beschikbaar zijn om de grootte van de vierkanten van de taken te bepalen**. De knop in de rechter benedenhoek van de kaart zal u een lijst met opties voor de laag verschaffen. Kiezen van een van de afbeeldingslagen is waarschijnlijk de beste optie omdat die u de feitelijke afbeeldingen laat zien die in kaart gebracht dienen te worden.

Indien u aangepaste afbeeldingen hebt voor het project, kunt u die ook laden met behulp van de knop in de rechter bovenhoek van de kaart en een URL voor een TMS of WMS invoeren.

U kunt ook verscheidene verschillende grootten van taken maken door gebruik te maken van de gereedschappen "Split". Vierkanten van taken kunnen meerdere keren worden gesplitst. Opnieuw, gebruiken van een afbeeldingslaag zullen u helpen te bepalen waar taken dienen te worden gesplitst. De knop "Reset" zal al uw gesplitste taken herstellen. De optie Split (Polygon) zal u een polygoon laten tekenen over een gebied om kleinere taken te maken en de Split (Point) zal u op individuele taken laten klikken om te splitsen. De knop Reset zal al uw aangepaste splitsingen herstellen.

> In het algemeen zult u kleinere tegels voor dichte gebieden met gebouwen willen hebben. Het doel zou moeten zijn om taken voor het project te maken die kunnen worden voltooid in 10-15 minuten.

***Overwegingen bij het bepalen van tegelgrootten***

-  Een nieuwe mapper bij een mapathon zal een gebied in kaart brengen met, ruwweg, een kwart van de snelheid van een ervaren mapper (velen beginnen langzamer, maar worden al gauw sneller). 
-  Een nieuwe mapper vindt het net zo moeilijk om objecten in de satellietafbeeldingen te zoeken als om ze feitelijk in kaart te brengen. Ronde hutten zoeken die zijn verbonden met natuurlijke materialen in een gebied met rond struikgewas is een steile leercurve voor een 'nieuwe'.
-  Een nieuwe mapper vindt het ook moeilijk om veel objecten te traceren, zoals gebouwen.
-  Later in het proces heeft u de mogelijkheid voor een mapper om een vierkant te 'splitsen' - splitsen van een vierkant in kwarten helpt om voor nieuwe mappers een grootte van een vierkant te krijgen dat zij kunnen verwerken.  
-  Het meest waarschijnlijke deel van een vierkant waar problemen voor kunnen komen is aan de randen en hoeken. Daarom betekenen kleinere vierkanten meer hoeken en randen en zullen resulteren in dupliceren van het in kaart gebrachte als ook dat objecten worden gemist. Er is een nadeel bij het kleiner maken van een vierkant, wat het voor de nieuwe mapper eenvoudiger maakt maar meer fouten kan opleveren omdat er meer hoeken en randen zijn.
-  Een vierkant kan worden opgedeeld, maar er is geen optie om vierkanten samen te voegen om ze opnieuw groter te maken. Wees dus voorzichtig bij het splitsen
-  **Conclusie** Probeer zelf een gebied van het project in kaart te brengen om te zien hoe eenvoudig het is en welke moeilijkheden u tegenkomt. Dit zou u moeten helpen om de optimale tegelgrootte te bepalen. Sta splitsen toe, maar niet oneindig - sommige nieuwe mappers splitsen vierkanten continu, zodat zij zo klein worden dat het uiterst moeilijk wordt om ze in kaart te brengen.  

Klik op “Next” na het voltooien van de grootten voor de taken.

### Willekeurige geometrieën

Indien u een bestand uploadde om uw project voor het in kaart brengen te definiëren is het mogelijk dat het ook informatie bevat over de exacte vormen die u in de individuele taken van uw project wilt hebben.  Als het gebied (AoI) bestaat uit één polygoon, zal het project slechts één taak hebben. Dit is over het algemeen niet nodig en zou alleen in speciale gevallen nodig zijn.

Willekeurige geometrieën kunnen niet worden gesplitst.

### Projectgebied verkleinen

Na het bepalen van de grootte van taken heeft u de optie om uw AoI te "Trim"(men). U kunt ofwel de AoI verkleinen tot de exacte vorm van de polygoon die u had getekend of geïmporteerd (aanbevolen) of u u kunt verkleinen tot het dichtstbijzijnde vierkant dat uw AoI bevat.

Klik op “Next” na het verkleinen van de AoI.

## Het project maken

Geef het project een titel (kan bewerkt worden in het volgende scherm) en klik op "Create"

Dit maakt het project in de Tasking Manager en opent een scherm waar u de beschrijving, instructies en andere informatie over het project kunt opgeven. Onthoud dat dit niet moet worden onderschat. Een groot gedeelte van de mappers (in veel gevallen de meerderheid) zal geen eerdere ervaring hebben met OpenStreetMap en/of HOT en zal dus niet bekend zijn met richtlijnen voor taggen. Het is heel belangrijk dat de doelen van het project helder zijn en dat alle waarmee de mappers rekening zouden moeten houden daar worden uitgelegd. Het is vaak an te raden om één project toe te wijzen aan één klasse objecten die in kaart moeten worden gebracht. Indien u een basiskaart nodig heeft voor een gebied, is het beter die op te delen in verscheidene projecten, een voor de wegen, een voor de gebouwen etc. Dan kunnen beginners zich focussen op een kleine klasse van objecten terwijl zij leren die juist in kaart te brengen. Anders zou u kunnen eindigen met heel veel tegels die een beetje van alles bevatten maar waar niets echt voltooid is.

Als het project eenmaal is gemaakt zult u alle geassocieerde instellingen ervan moeten bewerken:

- Description - Gebruikt voor weergave in lijsten en voor motiverende informatie voor mappers
- Instructions - Gedetailleerde instructies over wat en hoe de benodigde objecten/entiteiten/mogelijkheden in kaart moet worden gebracht
- Metadata - Aanvullende informatie die wordt gebruikt voor het categoriseren van het project. Vaak gebruikt bij het filteren van de volledige lijst met projecten.
- Imagery - Plaats om URL voor een TMS op te geven en de vereiste Licentie.
- Priority Areas - Stelt u in staat delen van het project te specificeren die als eerste in kaart zouden moeten worden  gebracht.
- Permissions - Stelt u in staat rechten voor toegang tot het project te verlenen voor het in kaart brengen en het valideren.
- Settings - Einddatum van het project en voorkeuzen voor JOSM.
- Actions - berichten verzenden aan deelnemers, het gehele project valideren of ongeldig verklaren met één klik.

### Beschrijving

![TM Description][]

Dit scherm stelt u in staat de prioriteit voor het project in te stellen, de status als Draft, Published, of Archived, een korte beschrijving die wordt gebruikt in lijsten van het project en de lange beschrijving die beschikbaar is als een mapper eenmaal het project heeft geselecteerd.

Zowel de korte als de lange beschrijving zouden informatie moeten verschaffen over waarom het project bestaat, wie de gegevens zullen gaan gebruiken en de verwachte impact die het in kaart brengen zal hebben. Deze velden ondersteunen opmaak in Markdown en mogen afbeeldingen en video's bevatten.

### Instructies

![TM Instructions][]

**Entities to Map** - Een lijst met objecten waarvan u wilt dat mappers die in kaart brengen. In het algemeen geldt: hoe minderobjecten, hoe groter de kans dat zij waarschijnlijk worden voltooid.

> Projecten die vragen om heel veel entiteiten in kaart te brengen zijn moeilijk voor mappers en moeilijk om te valideren. Zij hebben veel meer tijd nodig om een goede bruikbare gegevensset te maken. Grootten voor taken zijn ook moeilijk efficiënt te maken voor verschillende typen van in kaart brengen, bijv, gebouwen hebben kleine vierkanten voor taken nodig, wegen en waterwegen hebben grote vierkanten voor taken nodig. Maken van meerdere projecten voor hetzelfde gebied om gebouwen en lineaire objecten in kaart te brengen is dan het beste.

**Changeset Comment** - Dit is de standaard opmerking voor de wijzigingenset dat toegevoegd zal worden aan elke upload van gegevens naar OSM. Het bevat gewoonlijk iets dat de Tasking Manager identificeert waar het project zich bevindt en de objecten die in kaart werden gebracht. Het wordt vaak gebruikt voor "hash tags" om de organisatie die het in kaart brengen verzoekt en/of uitvoert te helpen identificeren. Het mag ook het uitgevoerde in kaart brengen beschrijven, bijv., "Mapping buildings."

> Gebruikers zouden moeten worden geïnstrueerd om een opmerking met betekenis in te vullen over wat zij in kaart hebben gebracht, maar hen helpen met goede standaard opmerkingen is altijd een goed idee.

**Detailed Instructions** - Dit is waar het grootste gedeelte van uw gedetailleerde instructies zal worden geplaatst en waarvan we verwachten dat elke mapper en validator ze zorgvuldig zullen lezen en opvolgen.

bekijk onderstaande notities met betrekking tot het maken van goede instructies.

**Per Task Instructions** - Deze zullen worden weergegeven wanneer een mapper een taak selecteert en heeft ook een speciale mogelijkheid die het mogelijk maakt Taak-specifieke URL's aan te maken, gebaseerd op de typische "slippy map" X, Y, Z- coördinaten.

### Metadata

![TM Metadata][]

> Al deze velden zouden moeten worden ingevuld en zullen verplicht worden in toekomstige versies van TM3.

**Mapper Level** - Dit is een indicatie van de moeilijkheidsgraad van het in kaart te brengen project. Er zijn 3 opties Beginner, Intermediate en Advanced. Deze instelling is een indicatie voor de mapper over welk ervaringsniveau zij zouden moeten hebben om met succes in kaart te kunnen brengen in het project. Het kan worden gebruikt bij het filteren van de lijst met projecten en het aanbevolen niveau kan worden vereist in het scherm Permissions.

**Type of Mapping** - gebruikt bij het filteren van de lijst met de projecten en helpt mappers bij het zoeken naar projecten die zij in kaart zouden willen brengen.

**Organization **- geeft u de mogelijkheid te specificeren welke organisatie het in kaart gebrachte zal gaan gebruiken. Wordt gebruikt bij het filteren van projecten.

**Campaign **- Dit stelt u in staat het project te groeperen met andere projecten die deel uitmaken van een grotere inspanning voor het in kaart brengen. Wordt gebruikt bij het filteren van de lijst met projecten.

### Gebieden met prioriteit

![TM Priority Area][]

gebruik de verschafte gereedschappen om gebieden te tekenen die als eerste in kaart gebracht zouden moeten worden. U mag meerdere gebieden met prioriteit in een project hebben. U kunt ook op elk moment de prioriteit van een gebied wijzigen.

> Gedurende het in kaart brengen van rampen, vroeg in de gebeurtenis, met een groot AoI voor het project en het gebruiken van gebieden met prioriteit om het in kaart brengen te focussen als nog steeds nieuwe informatie binnenkomt is een goede werkwijze.

### Afbeeldingen

URL Field - Een veld waarin een URL voor een TMS moet worden ingevoerd die automatisch zal worden doorgegeven aan de bewerker voor OSM die de mapper of validator gebruikt. Volg het voorbeeld, het is bijzonder belangrijk dat hij correct is opgemaakt om in alle bewerkers te kunnen werken.

License - Optioneel, als er een specifieke licentie is vereist die de mapper moet accepteren voor het gebruiken van de afbeeldingen, kunt u die hier selecteren. Indien u een licentie nodig hebt die niet beschikbaar is, kunt u contact opnemen met een beheerder van de installatie van de Tasking Manager en die vragen om hem toe te voegen.

### Rechten

![TM Permissions][]

Mapper Level - Stelt u in staat te eisen dat een mapper voldoet aan het juiste niveau om in het project in kaart te kunnen brengen (scherm Metadata hierboven). Niveaus voor mapper kunnen handmatig worden ingesteld, maar worden automatisch toegepast, gebaseerd op het totale aantal wijzigingensets.

Require Validator Role - Dit stelt u in staat te eisen dat mensen die willen valideren zijn geëvalueerd om gekwalificeerde validators te zijn. Het is een proces van Peer review om te bepalen of iemand validator kan zijn, Projectbeheerders en bestaande validators kunnen elke gebruiker markeren als een gekwalificeerde validator.

Private Project - Dit beperkt de toegang tot het project tot een lijst met gebruikers. Gebruikers moeten tenminste éénmaal zijn ingelogd in de Tasking Manager vóórdat zij aan een project kunnen worden toegevoegd.

### Instellingen

Default Locale - Maakt het instellen mogelijk van een standaard taal voor de instructies voor een project.

### Acties

![TM Actions][]

Message All Contributors - verzendt een bericht van Tasking Manager aan iedereen die een taak als voltooid heeft gemarkeerd of als geldig. Het kan worden gebruikt om deelnemers te bedanken en/of ze te leiden naar andere projecten in een portfolio/campagne. Het zou ook kunnen worden gebruikt vóór het gebruiken van één van de twee opties Validate/Invalidate all Tasks, hieronder beschreven.

Validate all Tasks - Dit zal alle taken markeren naar de gevalideerde status "Groen", met uitzondering van taken die zijn gemarkeerd als "Bad Imagery"

Invalidate all Tasks - Dit zal alle taken markeren naar niet gevalideerd, status "Rood", met uitzondering van taken die zijn gemarkeerd als "Bad Imagery"

Delete Project - Dit zal het project permanent verwijderen uit de Tasking Manager.

Clone Project - Dit zal een kopie van het project maken met uitzondering van het gebied (AoI) wat u opnieuw dient te importeren of opnieuw moet tekenen.

### Notities voor iInstructies

Gebruik gewone taal omdat uw doelgroep niet hoeft te bestaan uit mensen voor wie Engels de eigen taal is.

1. De titel van het project zou al moeten onthullen welke entiteiten in kaart gebracht zouden moeten worden. Kies voor een titel als
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. De meest belangrijke boodschappen zouden eerst moeten verschijnen op de tab Instructions om er zeker van te zijn dat ze zijn gelezen. Dit zou dus ook een eventueel te gebruiken speciale afbeelding in plaats van Bing moeten zijn. De eerste zinnen zouden kunnen vermelden dat het niet verplicht is elk afzonderlijk huis in kaart te brengen als het project over wegen en woongebieden gaat, bijvoorbeeld. Of dat het verplicht is elk huis in kaart te brengen als het project betrekking heeft op schattingen over bevolkingsdichtheid. Dit zijn berichten die ook zouden moeten verschijnen op de tab Description.
3. Andere punten ter verduidelijking: Als het project geschikt is voor mappers met slechts een bepaald niveau van ervaring. Bijvoorbeeld: het project gebruikt geïmporteerde bestanden of bestaande gegevens zouden moeten worden uitgelijnd aan GPS-sporen of een andere afbeelding (cf. het eerder gedeelte). Omschrijf het zo dat nieuwe mappers zich welkom zullen voelen bij te dragen aan andere projecten maar zullen begrijpen dat in dit geval geavanceerde technieken vereist zijn.
4. Er zijn richtlijnen die algemene fouten behandelen die we zien bij het valideren van het in kaart gebrachte. Eén voorbeeld is Blake Girardot's compilatie over [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Gebruik de link in de instructies en leg uit dat het volgen van die richtlijnen is vereist.
5. De uiteindelijke bron voor taggen is de [wiki van OpenStreetMap](http://wiki.openstreetmap.org/wiki/Map_Features). Voor veel aan HOT gerelateerde taken is de pagina op [taggen van highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) de juiste specificatie en ten zeerste aanbevolen om te lezen voor elke mapper. Als uw project moet voldoen aan andere standaarden voor taggen, schrijf dan een soortgelijke pagina in de wiki en link daarnaar in uw instructies.


### Overwegingen met betrekking tot afbeeldingen

In de meeste gevallen gebruiken we de "standaard" Bing-afbeeldingen. Maar er zijn situaties waar u een alternatieve bron zou willen kiezen:

1. Bing verschaft geen bedekking in hoge resolutie voor uw gebied om in kaart te brengen (AOI).
2. Bing heeft behoorlijk veel bedekking door wolken in dit gebied.
3. Als u nieuwere afbeeldingen nodig heeft voor evaluatie na een ramp.

Als Bing niet adequaat genoeg blijkt dan is Mapbox de volgende keuze. U zou alleen naar andere bronnen moeten kijken als deze twee niet aan uw eisen voldoen.

In dergelijke gevallen is het niet voldoende om een bron met vergelijkbare licentie te kiezen en die beschikbaar te maken via een service van WMS of TMS. Uw AoI is waarschijnlijk al gedeeltelijk in kaart gebracht met behulp van afbeeldingen van Bing of Mapbox en er zou een opvallende verschuiving kunnen optreden tussen afbeeldingen. U dient zeer goed te kijken naar verscheidene locaties in uw in kaart te brengen gebied (AoI=area of interest) en de verschuiving te bepalen tussen uw afbeelding een eerder in kaart gebrachte gegevens. Als de bestaande gegevens van OSM zijn verschoven ten opzichte van uw afbeelding maar passen binnen de afbeelding van Bing dan nemen we in het algemeen aan dat Bing de "gouden standaard" is, tenzij we GPS-sporen hebben die aantonen dat deze aanname verkeerd is.

Als er een constante verschuiving is tussen uw afbeelding en Bing over het in kaart te brengen gebied dan zou dit kunnen worden gecorrigeerd op de server zodat afbeeldingen die vanuit verscheidene bronnen in de bewerker worden geladen overeenkomen. Als dit niet mogelijk is, als de verschuiving varieert met het in kaart te brengen gebied of als bestaande gegevens zijn uitgelijnd op verscheidene bronnen, dan is het tijd voor plan B:

Het belangrijkste punt is dat u een strategie moet ontwikkelen voor hoe u met deze problemen omgaat en gedetailleerde instructies aan mappers en validators verschaft. We raden ten sterkste aan om een dergelijk project te declareren als: "for experienced mappers only" en uit te leggen dat ervaring in dit geval niet betekent dat men al meer dan 200+ gebouwen in kaart heeft gebracht, maar dat men ook al ervaring heeft met problemen met uitlijning en verschillende bronnen van afbeeldingen.

Een mogelijke strategie zou deze stappen kunnen omvatten:

1. Vermeld duidelijk welke afbeelding geacht wordt de verwijzing te zijn waaraan al het andere zou moeten worden uitgelijnd. Laten we er in dit geval van uitgaan dat die verwijzing Bing is.
2. Zorg er voor dat alle reeds bestaande objecten die ook zichtbaar zijn op Bing zijn uitgelijnd op de afbeelding van Bing, d.i. lijn ze, indien nodig, opnieuw uit.
3. Lijn de alternatieve afbeelding uit op bestaande objecten (en dus op Bing) met behulp van de functie voor verschuiven van de afbeelding in de bewerker.
4. Voeg nieuwe objecten toe uit de nu correct uitgelijnde alternatieve afbeelding.

Het is belangrijk dat stap 3 wordt herhaald voor elke taak van het project en de individuele vierkanten voor de taken zouden niet te groot moeten zijn, omdat verschuiving van afbeeldingen aanzienlijk kan variëren in een AoI, in het bijzonder als het gebied niet vlak is. Zelfs onderbrekingen in afbeeldingen kunnen voorkomen binnen een project - kijk er naar en adviseer de deelnemers met betrekking tot dat probleem.

Hier staan enkele stukjes informatie die u zou kunnen opnemen in de instructies voor het project:

- [algemene richtlijnen voor verscheidene bewerkers](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [een geanimeerde GIF over het uitlijnen van afbeeldingen in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [het hoofdstuk JOSM uitlijnen van afbeeldingen in learnOSM](http://learnosm.org/nl_NL/josm/correcting-imagery-offset)


### Proeflezen en publiceren
Lees de verschillende tabs nog eens door om er voor te zorgen dat de bewoordingen en opmaak juist zijn, en de instructies helder. Indien u wijzigingen of verfijningen wilt aanbrengen aan uw project, klik op de link ‘Edit’ in de rechter bovenhoek van de pagina. 
Klik, als het project gereed is om in kaart te laten brengen, op de link ‘Publish’. Als het project eenmaal is gepubliceerd, is het beschikbaar om in kaart te brengen voor iedereen met een account voor OSM, tenzij een groep gebruikers werd gespecificeerd op de tab ‘Allowed Users’, in welk geval alleen de toegestane gebruikers er aan zouden kunnen werken.  Indien nodig kan het project nog steeds worden bewerkt nadat het is gepubliceerd, door te klikken op de link ‘Edit’.

[TM Tile Sizes]: /images/coordination/tm3_tile_sizes.png
[TM New]: /images/coordination/tm3_create_new.png
[TM Description]: /images/coordination/tm3_description.png
[TM Instructions]: /images/coordination/tm3_instructions.png
[TM Metadata]: /images/coordination/tm3_metadata.png
[TM Priority Area]: /images/coordination/tm3_priority_area.png
[TM Permissions]: /images/coordination/tm3_permissions.png
[TM Actions]: /images/coordination/tm3_actions.png