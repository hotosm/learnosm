---
layout: doc
title: Handleiding Beheerder Tasking Manager
permalink: /nl_NL/coordination/tm-admin/
lang: nl_NL
category: coordination
---

# Handleiding Beheerder Tasking Manager


**Als de gebruikersinterface van de versie die u gebruikt er anders uitziet dan die welke hier wordt beschreven dan zou u [ons overzicht van de versies](/nl_NL/coordination/tm-disambiguation) moeten raadplegen**

Index gedeelte
-------------
-  [Inloggen en toegang](/en/coordination/tm-admin/#login-and-access)
-  [Rechten](/en/coordination/tm-admin/#permissions)
-  [Een project maken](/en/coordination/tm-admin/#create-a-mapping-project)
    -  [Het in kaart te brengen gebied definiëren](/en/coordination/tm-admin/#define-mapping-area)
    -  [Taken definiëren](/en/coordination/tm-admin/#define-tasks)
    -  [Projectgebied verkleinen](/en/coordination/tm-admin/#project-area-trim)
    -  [Gevorderd: Gebieden voor projecten voor in kaart brengen en taken met geïmporteerde geogegevens definiëren](/en/coordination/tm-admin/#advanced-define-mapping-project-areas-and-tasks-with-imported-geodata)
-  [Een project voor in kaart brengen bewerken](/en/coordination/tm-admin/#edit-a-mapping-project)
    -  [Omschrijving - het eerste dat gebruikers leren over uw project](/en/coordination/tm-admin/#description)
    -  [Instructies - wat de gebruikers zouden moeten doen](/en/coordination/tm-admin/#instructions)
    -  [Metadata - waartoe het project behoort](/en/coordination/tm-admin/#metadata)
    -  [Prioriteitsgebieden - waar gebruikers zouden moeten beginnen met in kaart brengen](/en/coordination/tm-admin/#priority-areas)
    -  [Afbeeldingen - de basis voor in kaart brengen](/en/coordination/tm-admin/#imagery)
    -  [Rechten - wie mogen in kaart brengen en wie valideren](/en/coordination/tm-admin/#permissions)
    -  [Nuttige hints - hoe u al deze velden in zou moeten vullen](/en/coordination/tm-admin/#helpful-hints)
    -  [Publiceren - vergeet dit niet of u krijgt het werk nooit af](/en/coordination/tm-admin/#publish)

De Tasking Manager is het essentiële programma om het in kaart brengen in OpenStreetMap te coördineren. Het ondersteunt initiatieven voor humanitair in kaart brengen, mapathons uitvoeren of het maken van taken om in kaart te brengen voor studenten. De toepassing deelt een gebied op in beheersbare geografische stukken, die snel en met meerdere mensen in kaart kunnen worden gebracht. Deze benadering maakt het verdelen van taken aan veel individuele mappers mogelijk, waardoor mogelijke conflicten bij bewerken worden verkleind. 

De software stimuleert nauwkeurige en kwaliteitsgegevens voor in kaart brengen door een consistente set instructies te verschaffen aan uw mappers (bijv. 'breng alle wegen en gebouwen in kaart'). In het kort is de Tasking Manager hoe u de werkstroom voor open activiteiten voor in kaart brengen instelt en beheert. 

Deze handleiding beschrijft het basisbeheer van de Tasking Manager. Het behandelt instructies om projecten voor in kaart brengen te maken en aan te passen en het afhandelen van rechten voor in kaart brengen en nakijken van gecrowd-sourcede gegevens.

## Inloggen en toegang

Voor het inloggen in de Tasking Manager is een account voor OpenStreetMap (OSM) nodig. U kunt de [HOT Tasking Manager](http://tasks.hotosm.org) bezoeken, of enige andere gemeenschapsinstantie van uw voorkeur. Klik daar op `Sign up` en het brengt u naar de [website van OpenStreetMap](https://www.openstreetmap.org) om uw account te maken. Of klik op `Log in` als u al een account hebt, en in de pop-up kunt u de Tasking Manager beperkte toegang verlenen tot uw account van OSM.

## Rechten

Het meest basale niveau voor een gebruiker is **mapper**. Mappers kunnen inloggen in de Tasking Manager om een project te zoeken en te selecteren om aan te werken. Alle functionaliteiten voor de mapper worden beschreven in de [LearnOSM Handleiding in kaart brengen met Tasking Manager](/nl_NL/coordination/tm-user/). Onthoud dat sommige projecten, zoals die in de status concept (d.i. nog niet gepubliceerd) niet zichtbaar zijn voor gewone gebruikers

Alle speciale rechten worden afgehandeld door *organisaties* en *teams*. Een **organisatie** is de belangrijkste paraplu, en onder elke organisatie kunnen projecten voor in kaart brengen en teams worden gemaakt. Een organisatie zou bijvoorbeeld een gegevensgebruiker kunnen weergeven, zoals een humanitaire organisatie, of een gemeenschap van OpenStreetMap. Als u uw organisatie moet instellen in de Tasking Manager, neem dan contact op met degenen die de instantie van de Tasking Manager technisch onderhouden.

Elke organisatie heeft één of meer **administrators** (beheerders). Zij hebben de rechten om geassocieerde projecten te maken en aan te passen. Alle opties voor beheer zijn toegankelijk via het gedeelte `Beheren` in de hoofdnavigatie.

Beheerders van een organisatie kunnen **teams** maken. Teams zijn groepen van gebruikers en zij kunnen voor iedereen zichtbaar zijn of privaat. Zij kunnen ook één of meer beheerders hebben. Teams kunnen zo worden ingesteld dat gebruikers zichzelf kunnen toevoegen of 'alleen op invitatie', wat betekent dat de beheerders van het team in kennis worden gesteld over verzoeken om te worden toegevoegd en daarover moeten beslissen.

Voor elk project kunnen beheerders specifieke teams aanwijzen om toegang te verlenen tot of te beperken voor in kaart brengen, te definiëren wie de gegevens mag valideren, of wie anders in staat is de metadata voor het project te bewerken.


## Een project voor in kaart brengen maken

Klik, om toegang te verkrijgen tot het gedeelte voor beheer, op `Beheren` in de navigatie aan de bovenzijde. Op de eerste regel ziet u een ruimte voor 'Projecten'. Klik, daarnaast, op de knop `Toevoegen` om er een te maken.

![TM Add Project][]

U kunt, om het gebied van interesse (gebied voor in kaart brengen) van uw project voor in kaart brengen te definiëren, kiezen tussen ofwel:

* Optie 1: `Tekenen` van het gebied van interesse op een webkaart (voorkeursmethode)
* Optie 2: `Bestand uploaden` om het gebied van interesse te importeren vanuit een geoJSON, KML of Shapefile. Dit zou ook specifieke taken kunnen bevatten (meer informatie is te vinden in het gedeelte "Gevorderd maken van project" hieronder)

![TM New][]

### Het in kaart te brengen gebied definiëren

![TM Draw AoI][]

1. U kunt naar andere lagen voor de achtergrond schakelen met de knoppen aan de bovenzijde. 
1. Klik op de knop `Tekenen` aan de linkerkant,
2. Houd, om een polygoon te tekenen die het gebied om in kaart te brengen weergeeft in het kaartvenster, de rechtermuisknop ingedrukt om de kaart te verplaatsen zonder te klikken, wat een knoop zal toevoegen.  De polygoon zou net aan het in kaart te brengen gebied moeten omvatten. Dit bespaart tijd bij het voltooien van tegels die niet van belang zijn (d.i. oceaan, bos)
3. Klik op uw beginpunt om de polygoon te voltooien.
4. Ga door met het toevoegen van knopen met één enkele muisklik. Een dubbele muisklik zal de polygoon voltooien. <!--Na het voltooien van een polygoon kunt u de knopen verplaatsen of nieuwe toevoegen om het gebied precies zo te krijgen als u dat wilt.-->

### Taken definiëren

Nadat het overall gebied om in kaart te brengen is gedefinieerd, zal het worden opgedeeld in kleinere gebieden, genaamd *Taken*. Deze taken moet een goede grootte hebben, zodat zij snel en door meerdere mensen kunnen worden voltooid, waarbij veel mensen bijdragen aan een collectief doel voor het project.

![TM Tile Sizes][]

Het in kaart te brengen gebied wordt automatisch gesplitst in rastercellen en elke cel wordt een taak. Gebruik de knoppen `Groter` en `Kleiner` om de overall grootte van de vierkanten voor de taken aan te passen.

> Gebruiken van een satellietafbeelding, om een goede grootte voor de taak te bepalen, is bijzonder nuttig. U kunt tussne verschillende kaartlagen voor de achtergrond schakelen met de knoppen aan de bovenzijde van de kaart. <!-- Indien u aangepaste afbeeldingen hebt voor het project, kunt u die ook laden met behulp van de knop in de rechter bovenhoek van de kaart en een URL voor een TMS of WMS invoeren. -->

Nadat u de grootte van het basisraster van de taken hebt aangepast, kunt u bepaalde taken selectief opdelen in vier kleinere met de knop `Klikken om te splitsen`. Of u kunt `Gebied tekenen om te splitsen`, en het zal u een polygoon over een gebied laten tekenen en alle taken daarin zullen elk worden gesplitst in vier nieuwe. De knop Herstellen zal uw aangepaste splitsing verwijderen.

**Grootte taken**:  Neem hier de tijd voor en definieer heel zorgvuldig geschikte grootte voor taken! De optimale grootte voor de taak is enorm afhankelijk van de hoeveelheid objecten die in elke taak in kaart moeten worden gebracht. Grootten van taken in landelijke gebieden zijn gewoonlijk groter dan voor projecten voor in kaart brengen, die gaan over het digitaliseren van gebouwen in steden of dichtbevolkte gebieden. Ideaal gezien, probeer zelf een gebied van het project om de uitdagingen te zien en de inspanning die het vergt om het in kaart te brengen. Dat zou u kunnen helpen bij het bepalen van een optimale grootte voor het vierkant.

Aanbevolen wordt om grootten voor taken te kiezen waarvoor u er vertrouwen in hebt dat mappers ze kunnen voltooien in 15-20 minuten.

> Overwegingen voor het bepalen van grootten van taken:
> -  Beginnende mappers hebben ruwweg vier keer zoveel tijd nodig als ervaren mappers.
> -  Beginnende mappers moeten oog ontwikkelen voor satellietbeelden. Opmerken van de juiste objecten kan moeilijk zijn.
> -  Beginnende mappers worden voor uitdagingen geplaatst bij het traceren van veel dezelfde objecten, zoals gebouwen.
> -  Een vierkant kan later wel wordne gesplitst, maar er is geen manier om vierkanten later samen te voegen.
> -  Aan de rande en hoeken van taken bestaat altijd het risico om in conflict te komen met een collega-mapper naast u. Kleinere taken beteken meer hoeken en randen. De uitdaging is om het qua grootte zo gemakkelijk mogelijk voor de mappers te maken, maar zonder daarbij conflicten tussen hen te produceren.

Klik op `Volgende` na het voltooien van de grootten voor de taken.

### Projectgebied verkleinen

![TM Trim][]

Na het bepalen van de grootte voor de taken heeft u de optie om de taken te verkleinen tot het bereik van uw gebied om in kaart te brengen. Als u eenvoudigweg klikt op `Verkleinen` dan slaat u alle vierkanten voor taken over die geen gedeelte van het gebied om in kaart te brengen bevatten

![TM Trim coarse][]

Als u het vak selecteert voor het verkleinen tot het exacte gebied voordat u op `Verkleinen` klikt, dan krijgt u willekeurige vormen voor taken aan de randen

![TM Trim fine][]

Klik op `Volgende` na het voltooien van het gebied om in kaart te brengen.


### Het project opslaan

Geef het project een titel (kan bewerkt worden in het volgende scherm) en klik op `Maken`. De eerste stap is voltooid.

Leer meer over hoe beschrijvingen en instructies toe te voegen aan het project en hoe het te publiceren voor de mappers in ons hoofdstuk "Een project voor in kaart brengen bewerken" hieronder.

### Gevorderd: Gebieden voor projecten voor in kaart brengen en taken met geïmporteerde geogegevens definiëren

Desktoptoepassingen voor georuimtelijke gegevens zoals JOSM of QGIS stellen mappers in staat om nauwkeuriger de gebieden van interesse te tekenen, vergeleken met de slippy webkaart in de Tasking Manager. U kunt ook vooraf speciale vormen en grootten voor taken bepalen.

> De Tasking Manager is een webtoepassing. Zorg er voor dat het bestand dat u uploadt van een beperkte grootte is. U zou eerst de geometrieën moeten vereenvoudigen en de getallen van de coördinaten moeten verkleinen.

**Uploaden van een GeoJSON- of KML-bestand van het in kaart te brengen gebied**

1. Klik, in de eerste stap van het maken van een project, op optie 2, de knop ‘Bestand uploaden’.
2. Blader naar uw bestand in het venster Bestand uploaden
3. Klik op de bestandsnaam om het bestand te accentueren en klik dan op ‘Openen’.
4. Geïmporteerde gebieden voor in kaart brengen kunnen niet worden bewerkt.

Na het uploaden van een bestand naar de Tasking Manager kunt u selecteren of u de taken wilt definiëren als 

1. `Raster met vierkanten`, met de functionaliteiten die boven zijn beschreven voor het definiëren van de taken.
2. `Willekeurige geometrieën`, komende uit het bestand dat u zojuist hebt geüpload.

**Willekeurige geometrieën definiëren**

Indien u een bestand uploadde om uw gebied te definiëren, zou dat bestand ook de vormen kunnen bevatten voor de individuele taken. Als bijvoorbeeld het gebied om in kaart te brengen bestaat uit één polygoon, zal het project slechts één taak hebben. Dit zou alleen in speciale gevallen en om specifieke redenen moeten worden gebruikt. Een import van een wegenproject zou bijvoorbeeld aangepaste vormen voor taken nodig kunnen hebben of de uitvoer van een verkleiningsproces voor het in kaart te brengen gebied.

Onthoud dat willekeurige geometrieën niet kunnen worden gesplitst.  Zij zouden alleen in speciale gevallen moeten worden gebruikt, omdat zij invloed hebben op de uitvoering van het programma.

## Een project voor in kaart brengen bewerken

Nadat een project initieel is ingesteld en gemaakt, moet u de informatie en instellingen ervan bewerken:

- Omschrijving - Gebruikt voor het weergeven in lijsten en motiverende informatie voor mappers
- Instructies - Gedetailleerde instructies over wat en hoe de benodigde objecten/entiteiten/mogelijkheden in kaart moet worden gebracht
- Metadata - Aanvullende informatie die wordt gebruikt voor het categoriseren van het project. Vaak gebruikt bij het filteren van de volledige lijst met projecten.
- Afbeeldingen - Plaats om URL voor een TMS op te geven en de vereiste licentie.
- Prioriteitsgebieden - Stelt u in staat delen van het project te specificeren die als eerste in kaart zouden moeten worden  gebracht.
- Rechten - Stelt u in staat rechten voor toegang tot het project te verlenen voor het in kaart brengen en het valideren.
- Instellingen - Einddatum van het project en voorkeuzen voor JOSM.
- Acties - Berichten verzenden aan deelnemers, het gehele project valideren of ongeldig verklaren met één klik.

> Zorgvuldig invullen van deze informatie is een essentieel deel van een succesvol project voor in kaart brengen.Het is heel belangrijk dat de doelen van het project helder worden gecommuniceerd, zodat mappers kennis hebben van specifieke en belangrijke informatie. Onthoud dat mappers misschien geen eerdere ervaring hebben met OpenStreetMap, en niet bekend zijn met de richtlijnen voor taggen.
>  Aangeraden wordt om een project toe te wijzen aan één klasse objecten om in kaart te brengen. Indien u een basiskaart nodig heeft voor een gebied, is het beter dat op te delen in verscheidene projecten, één voor de wegen, één voor de gebouwen etc. Dan kunnen beginners zich focussen op een kleine klasse van objecten terwijl zij leren die juist in kaart te brengen.

### Omschrijving

![TM Description][]

Dit scherm stelt u in staat de status voor het project in te stellen als Draft, Published, of Archived, prioriteit, een korte omschrijving die wordt gebruikt in lijsten van het project en de lange omschrijving die beschikbaar is als een mapper eenmaal het project heeft geselecteerd.

Zowel de korte als de lange omschrijving zouden informatie moeten verschaffen over waarom het project bestaat, wie de gegevens zullen gaan gebruiken en de verwachte impact die het in kaart brengen zal hebben. Deze velden ondersteunen opmaak van tekst in Markdown en mogen afbeeldingen en video's bevatten.

### Instructies

![TM Instructions][]

**Typen in kaart brengen** - Een lijst met objecten waarvan u wilt dat mappers die in kaart brengen. In het algemeen geldt: hoe minder objecten, hoe groter de kans dat zij waarschijnlijk worden voltooid.

> Projecten die vragen om heel veel entiteiten in kaart te brengen zijn moeilijk voor mappers en moeilijk om te valideren. Zij hebben veel meer tijd nodig om een goede bruikbare gegevensset te maken. Grootten voor taken zijn ook moeilijk efficiënt te maken voor verschillende typen van in kaart brengen, bijv, gebouwen hebben kleine vierkanten voor taken nodig, wegen en waterwegen hebben grote vierkanten voor taken nodig. Maken van meerdere projecten voor hetzelfde gebied om gebouwen en lineaire objecten in kaart te brengen is dan het beste.

**Opmerking wijzigingenset** - Dit is de standaard opmerking voor de wijzigingenset dat toegevoegd zal worden aan elke upload van gegevens naar OSM. Het bevat gewoonlijk iets dat de Tasking Manager identificeert waar het project zich bevindt en de objecten die in kaart werden gebracht. Het wordt vaak gebruikt voor "hashtags" om de organisatie die het in kaart brengen verzoekt en/of uitvoert te helpen identificeren. Het mag ook het uitgevoerde in kaart brengen beschrijven, bijv., "Mapping buildings."

> Gebruikers zouden moeten worden geïnstrueerd om een opmerking met betekenis in te vullen over wat zij in kaart hebben gebracht, maar hen helpen met goede standaard opmerkingen is altijd een goed idee.

**Gedetailleerde instructies** - Dit is waar het grootste gedeelte van uw gedetailleerde instructies zal worden geplaatst, en waarvan we verwachten dat elke mapper en validator ze zorgvuldig zullen lezen en opvolgen.

Bekijk onderstaande notities voor het maken van goede instructies.

**Instructies per taak** - Deze zullen worden weergegeven wanneer een mapper een taak selecteert en heeft ook een speciale mogelijkheid die het mogelijk maakt Taak-specifieke URL's aan te maken, gebaseerd op de typische "slippy map" X, Y, Z- coördinaten.

### Metadata

![TM Metadata][]

> Al deze velden zouden moeten worden ingevuld en zullen verplicht worden in toekomstige versies van de Tasking Manager.

**Niveau mapper** - Dit is een indicatie van de moeilijkheidsgraad van het in kaart te brengen project. Er zijn 3 opties Beginner, Gemiddeld en Gevorderd. Deze instelling is een indicatie voor de mapper over welk ervaringsniveau zij zouden moeten hebben om met succes in kaart te kunnen brengen in het project. Het kan worden gebruikt bij het filteren van de lijst met projecten en het aanbevolen niveau kan worden vereist in het scherm Rechten.

**Type van in kaart brengen** - Gebruikt bij het filteren van de lijst met de projecten en helpt mappers bij het zoeken naar projecten die zij in kaart zouden willen brengen.

**Organisatie** - De organisatie wwaarvan projectbeheerders administratieve rechten voor dit project zouden moeten hebben. De organisatie moet eerder zijn geregistreerd in de Tasking Manager.

**Interesses** - Gebruikt om projecten voor te stellen aan mappers. Mappers specificeren hun interesses in hun profiel.

**OSMCha filter ID** - OSMCha wordt aangeboden als een link in het overzicht van de bijdragen. Het standaard filter begrenst uitvoer tot het begrenzingsvak van het project en tot bijdragen die niet ouder zijn dan de datum van maken van het project en met de naam van het project in de opmerking voor de wijzigingenset. Als u denkt dat iets anders een betere benadering zou zijn om de wijzigingensets van uw project te analyseren, geef dan hier een URL voor OSMCha of een OSMCha filter-ID op.

### Gebieden met prioriteit

![TM Priority Area][]

Gebruik de verschafte gereedschappen om gebieden te tekenen die als eerste in kaart gebracht zouden moeten worden. U mag meerdere gebieden met prioriteit in een project hebben. U kunt ook op elk moment de prioriteit van een gebied wijzigen.

> Gedurende het in kaart brengen van rampen, vroeg in de gebeurtenis, met een groot gebied om in kaart te brengen voor het project en het gebruiken van gebieden met prioriteit, om te focussen als nog steeds nieuwe informatie binnenkomt, is een goede werkwijze.

### Afbeeldingen

veld URL - Een veld waarin een URL voor een TMS moet worden ingevoerd die automatisch zal worden doorgegeven aan de bewerker voor OSM die de mapper of validator gebruikt. Volg het voorbeeld, het is bijzonder belangrijk dat hij correct is opgemaakt om in alle bewerkers te kunnen werken.

Licentie - Optioneel, als er een specifieke licentie is vereist die de mapper moet accepteren voor het gebruiken van de afbeeldingen, kunt u die hier selecteren. Indien u een licentie nodig hebt die niet beschikbaar is, kunt u contact opnemen met een beheerder van de installatie van de Tasking Manager en die vragen om hem toe te voegen.

### Rechten

![TM Permissions][]

**Rechten voor in kaart brengen** - Stelt u in staat te eisen dat een mapper voldoet aan het juiste niveau om in het project in kaart te kunnen brengen (scherm Metadata hierboven). Niveaus voor mapper kunnen handmatig worden ingesteld, maar worden automatisch toegepast, gebaseerd op het totale aantal wijzigingensets. U kunt ook vereisen dat een mapper deel uitmaakt van een team. Teams kunnen hieronder worden geselecteerd

**Rechten voor valideren** - Stelt u in staat te eisen dat een mapper voldoet aan het juiste niveau om in het project te kunnen valideren (scherm Metadata hierboven). Niveaus voor mapper kunnen handmatig worden ingesteld, maar worden automatisch toegepast, gebaseerd op het totale aantal wijzigingensets. U kunt ook vereisen dat een validator deel uitmaakt van een team. Teams kunnen hieronder worden geselecteerd

**Teams** - Teams voor in kaart brengen en valideren selecteren. Als u dat doet, kunt u het in kaart brengen en/of valideren beperken tot teamleden met de besturingselementen bovenaan. U mag voor elke rol meerdere teams selecteren. Selecteer een team, selecteer een rol en druk op 'Toevoegen'. Als u eenmaal een team hebt geselecteerd, kunt u zijn rol bewerken of de toewijzing verwijderen.

**Privacy** - Dit beperkt de toegang tot het project tot die gebruikers die deel uitmaken van het team waar het project toe behoort.

### Instellingen

![TM Settings][]

**Standaard taal** - Stelt de standaard taal voor de instructies voor een project in.

**Bewerkers** - Beperkt de beschikbare bewerkers tot die welke zijn geselecteerd. U mag verschillende instellingen specificeren voor in kaart brengen en voor valideren.

**Willekeurig selecteren forceren** - Indien geselecteerd kunnen gebruikers geen specifieke taak selecteren om in kaart te brengen.

### Acties

![TM Actions][]

**Bericht aan alle deelnemers** - verstuurt een bericht van Tasking Manager aan iedereen die een taak als voltooid heeft gemarkeerd of als geldig. Het kan worden gebruikt om deelnemers te bedanken en/of ze te leiden naar andere projecten in een portfolio/campagne. Het zou ook kunnen worden gebruikt voor het gebruiken van één van de twee opties Alle taken valideren/ongeldig verklaren, hieronder beschreven.

**In kaart brengen, valideren en ongeldig verklaren** - Dit zal de status van alle taken instellen op ofwel in kaart gebracht, gevalideerd of ongeldig verklaard. Behandel dit met zorg, want u kunt het niet ongedaan maken.

**Taken herstellen** - Dit zal alle taken herstellen naar hun ongerepte status, maar eerder acties zullen nog steeds beschikbaar zijn in de geschiedenis van de taak. Behandel dit met zorg, want u kunt het niet ongedaan maken.

**Eigendom project overdragen** - Laat u een andere gebruiker specificeren die de eigenaar van dit project zal worden. Behandel dit met zorg, want u kunt het niet ongedaan maken.

**Project klonen** - Dit zal een kopie van het project maken met uitzondering van het in kaart te brengen gebied, raster voor de taken en de gebieden voor prioriteit, die u opnieuw dient te importeren of opnieuw moet tekenen.

**Project verwijderen** - Dit zal het project permanent verwijderen uit de Tasking Manager. Behandel dit met zorg, want u kunt het niet ongedaan maken. Deze actie is niet langer beschikbaar zodra er een bijdrage aan het project is gemaakt.

### Notities voor instructies

Gebruik gewone taal omdat uw doelgroep niet hoeft te bestaan uit mensen voor wie Engels de eigen taal is.

1. De titel van het project zou al moeten onthullen welke entiteiten in kaart gebracht zouden moeten worden. Kies voor een titel als
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. De meest belangrijke boodschappen zouden eerst moeten verschijnen op de tab Instructies om er zeker van te zijn dat ze zijn gelezen. Dit zou dus ook een eventueel te gebruiken speciale afbeelding, in plaats van Bing, moeten zijn. De eerste zinnen zouden kunnen vermelden dat het niet verplicht is elk afzonderlijk huis in kaart te brengen als het project over wegen en woongebieden gaat, bijvoorbeeld. Of dat het verplicht is elk huis in kaart te brengen als het project betrekking heeft op schattingen over bevolkingsdichtheid. Dit zijn berichten die ook zouden moeten verschijnen op de tab Omschrijving.
3. Andere punten ter verduidelijking: Als het project geschikt is voor mappers met slechts een bepaald niveau van ervaring. Bijvoorbeeld: het project gebruikt geïmporteerde bestanden of bestaande gegevens zouden moeten worden uitgelijnd aan GPS-sporen of een andere afbeelding (cf. het eerder gedeelte). Omschrijf het zo dat nieuwe mappers zich welkom zullen voelen bij te dragen aan andere projecten, maar zullen begrijpen dat in dit geval geavanceerde technieken vereist zijn.
4. Er zijn richtlijnen die algemene fouten behandelen die we zien bij het valideren van het in kaart gebrachte. Eén voorbeeld is Blake Girardot's compilatie over [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Gebruik de link in de instructies en leg uit dat het volgen van die richtlijnen is vereist.
5. De uiteindelijke bron voor taggen is de [wiki van OpenStreetMap](http://wiki.openstreetmap.org/wiki/Map_Features). Voor veel aan HOT gerelateerde taken is de pagina op [taggen van highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) de juiste specificatie en ten zeerste aanbevolen om te lezen voor elke mapper. Als uw project moet voldoen aan andere standaarden voor taggen, schrijf dan een soortgelijke pagina in de wiki en link daarnaar in uw instructies.


### Overwegingen met betrekking tot afbeeldingen

In de meeste gevallen gebruiken we de "standaard" afbeeldingen van Bing. Maar er zijn situaties waar u een alternatieve bron zou willen kiezen:

1. Bing verschaft geen bedekking in hoge resolutie voor uw gebied om in kaart te brengen.
2. Bing heeft behoorlijk veel bedekking door wolken in dit gebied.
3. Als u nieuwere afbeeldingen nodig heeft voor evaluatie na een ramp.

Als Bing niet goed genoeg blijkt, dan is Mapbox de volgende keuze. U zou alleen naar andere bronnen moeten kijken als deze twee niet aan uw eisen voldoen.

In dergelijke gevallen is het niet voldoende om een bron met vergelijkbare licentie te kiezen en die beschikbaar te maken via een service van WMS of TMS. Uw gebied om in kaart te brengen is waarschijnlijk al gedeeltelijk in kaart gebracht met behulp van afbeeldingen van Bing of Mapbox en er zou een opvallende verschuiving kunnen optreden tussen afbeeldingen. U dient zeer goed te kijken naar verscheidene locaties in uw in kaart te brengen gebied (AoI=area of interest) en de verschuiving te bepalen tussen uw afbeelding een eerder in kaart gebrachte gegevens. Als de bestaande gegevens van OSM zijn verschoven ten opzichte van uw afbeelding maar passen binnen de afbeelding van Bing dan nemen we in het algemeen aan dat Bing de "gouden standaard" is, tenzij we GPS-sporen hebben die aantonen dat deze aanname verkeerd is.

Als er een constante verschuiving is tussen uw afbeelding en Bing over het in kaart te brengen gebied dan zou dit kunnen worden gecorrigeerd op de server zodat afbeeldingen die vanuit verscheidene bronnen in de bewerker worden geladen overeenkomen. Als dit niet mogelijk is, als de verschuiving varieert met het in kaart te brengen gebied of als bestaande gegevens zijn uitgelijnd op verscheidene bronnen, dan is het tijd voor plan B:

Het belangrijkste punt is dat u een strategie moet ontwikkelen voor hoe u met deze problemen omgaat en gedetailleerde instructies aan mappers en validators verschaft. We raden ten sterkste aan om een dergelijk project te declareren als: "alleen voor gevorderde mappers" en uit te leggen dat ervaring in dit geval niet betekent dat men al meer dan 200+ gebouwen in kaart heeft gebracht, maar dat men ook al ervaring heeft met problemen met uitlijning en verschillende bronnen van afbeeldingen.

Een mogelijke strategie zou deze stappen kunnen omvatten:

1. Vermeld duidelijk welke afbeelding geacht wordt de verwijzing te zijn waaraan al het andere zou moeten worden uitgelijnd. Laten we er in dit geval van uitgaan dat die verwijzing Bing is.
2. Zorg er voor dat alle reeds bestaande objecten die ook zichtbaar zijn op Bing zijn uitgelijnd op de afbeelding van Bing, d.i. lijn ze, indien nodig, opnieuw uit.
3. Lijn de alternatieve afbeelding uit op bestaande objecten (en dus op Bing) met behulp van de functie voor verschuiven van de afbeelding in de bewerker.
4. Voeg nieuwe objecten toe uit de nu correct uitgelijnde alternatieve afbeelding.

Het is belangrijk dat stap 3 wordt herhaald voor elke taak van het project en de individuele vierkanten voor de taken zouden niet te groot moeten zijn, omdat verschuiving van afbeeldingen aanzienlijk kan variëren in een gebied om in kaart te brengen, in het bijzonder als het gebied niet vlak is. Zelfs onderbrekingen in afbeeldingen kunnen voorkomen binnen een project - kijk er naar en adviseer de deelnemers met betrekking tot dat probleem.

Hier staan enkele stukjes informatie die u zou kunnen opnemen in de instructies voor het project:

- [algemene richtlijnen voor verschillende bewerkers](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [een geanimeerde gif over uitlijnen van afbeeldingen in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [het hoofdstuk JOSM uitlijnen van afbeeldingen in LearnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Proeflezen en publiceren

Lees de verschillende tabs nog eens door om er voor te zorgen dat bewoordingen en opmaak correct zijn, en instructies helder zijn. Als u wijzigingen of verfijningen aan uw project moet maken, klik dan op de link ‘Bewerken’ aan de rechterbovenkant van de pagina.
Klik, als het project gereed is om in kaart te laten brengen, op de link ‘Publiceren’. Als het project eenmaal is gepubliceerd, is het beschikbaar om in kaart te brengen voor iedereen met een account voor OSM, tenzij een groep gebruikers werd gespecificeerd op de tab ‘Toegestane gebruikers’, in welk geval alleen de toegestane gebruikers er aan zouden kunnen werken. Indien nodig kan het project nog steeds worden bewerkt nadat het is gepubliceerd, door te klikken op de link ‘Bewerken’.

[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM Draw AoI]: /images/coordination/tm4_draw_aoi.png
[TM Trim]: /images/coordination/tm4_trim1.png
[TM Trim coarse]: /images/coordination/tm4_trim2.png
[TM Trim fine]: /images/coordination/tm4_trim3.png
[TM Description]: /images/coordination/tm4_description.png
[TM Instructions]: /images/coordination/tm4_instructions.png
[TM Metadata]: /images/coordination/tm4_metadata.png
[TM Priority Area]: /images/coordination/tm4_priority_area.png
[TM Permissions]: /images/coordination/tm4_permissions.png
[TM Settings]: /images/coordination/tm4_settings.png
[TM Actions]: /images/coordination/tm4_actions.png
