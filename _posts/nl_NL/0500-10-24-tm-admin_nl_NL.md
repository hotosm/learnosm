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
-  [Inloggen en toegang](/nl_NL/coordination/tm-admin/#login-and-access)
-  [Rechten](/nl_NL/coordination/tm-admin/#permissions)
-  [Een project maken](/nl_NL/coordination/tm-admin/#create-a-project)
    -  [Gebied voor in kaart brengen definiëren](/nl_NL/coordination/tm-admin/#define-mapping-area)
    -  [Taken definiëren](/nl_NL/coordination/tm-admin/#define-tasks)
    -  [Geavanceerd: Taken definiëren met geïmporteerde gegevens](/nl_NL/coordination/tm-admin/#advanced:-define-tasks-with-imported-data)
    -  [Projectgebied verkleinen](/nl_NL/coordination/tm-admin/#project-area-trim)
    -  [Het project een naam geven](/nl_NL/coordination/tm-admin/#name-the-project)
-  [Een project bewerken](/nl_NL/coordination/tm-admin/#edit-a-project)
    -  [Omschrijving - het eerste dat gebruikers leren over uw project](/nl_NL/coordination/tm-admin/#description)
    -  [Instructies - wat de gebruikers zouden moeten doen](/nl_NL/coordination/tm-admin/#instructions)
    -  [Metadata - waar het project bij hoort](/nl_NL/coordination/tm-admin/#metadata)
    -  [Gebieden met prioriteit - waar gebruikers zouden moeten beginnen met in kaart brengen](/nl_NL/coordination/tm-admin/#priority-areas)
    -  [Afbeeldingen - de basis voor het in kaart brengen](/nl_NL/coordination/tm-admin/#imagery)
    -  [Rechten - wie mag in kaart brengen en valideren](/nl_NL/coordination/tm-admin/#permissions)
    -  [Instellingen](/nl_NL/coordination/tm-admin/#settings)
    -  [Acties](/nl_NL/coordination/tm-admin/#actions)
    -  [Aangepaste bewerker](/nl_NL/coordination/tm-admin/#custom-editor)
    -  [Opslaan en testen](/nl_NL/coordination/tm-admin/#save-and-test)
    -  [Publiceren](/nl_NL/coordination/tm-admin/#publish)
-  [Project beheren](/nl_NL/coordination/tm-admin/#project-management) 
    -  [Reageer](/nl_NL/coordination/tm-admin/#be-responsive)
    -  [Reeksen in projecten](/nl_NL/coordination/tm-admin/#sequencing-projects)
    -  [Levenscyclus van een project](/nl_NL/coordination/tm-admin/#project-lifecycle)
-  [Aanvullende informatie](/nl_NL/coordination/tm-admin/#additional-information)
    -  [Overwegingen met betrekking tot afbeeldingen](/nl_NL/coordination/tm-admin/#considerations-concerning-imagery)

De Tasking Manager is het essentiële programma om het in kaart brengen in OpenStreetMap te coördineren. Het ondersteunt initiatieven voor humanitair in kaart brengen, mapathons uitvoeren of het maken van taken om in kaart te brengen voor studenten. De toepassing deelt een gebied op in beheersbare geografische stukken, die snel en met meerdere mensen in kaart kunnen worden gebracht. Deze benadering maakt het verdelen van taken aan veel individuele mappers mogelijk, waardoor mogelijke conflicten bij bewerken worden verkleind. 

De software stimuleert nauwkeurige en kwaliteitsgegevens voor in kaart brengen door een consistente set instructies te verschaffen aan uw mappers (bijv. 'breng alle wegen en gebouwen in kaart'). In het kort is de Tasking Manager hoe u de werkstroom voor open activiteiten voor in kaart brengen instelt en beheert. 

Deze handleiding beschrijft het basisbeheer van de Tasking Manager. Het behandelt instructies om projecten voor in kaart brengen te maken en aan te passen en het afhandelen van rechten voor in kaart brengen en nakijken van gecrowd-sourcede gegevens.

## Inloggen en toegang

Voor het inloggen in de Tasking Manager is een account voor OpenStreetMap (OSM) nodig. U kunt de [HOT Tasking Manager](https://tasks.hotosm.org) bezoeken, of enige andere gemeenschapsinstantie van uw voorkeur. Klik daar op `Sign up` en het brengt u naar de [website van OpenStreetMap](https://www.openstreetmap.org) om uw account te maken. Of klik op `Log in` als u al een account hebt, en in de pop-up kunt u de Tasking Manager beperkte toegang verlenen tot uw account van OSM.

## Rechten

Het meest basale niveau voor een gebruiker is **mapper**. Mappers kunnen inloggen in de Tasking Manager om een project te zoeken en te selecteren om aan te werken. Alle functionaliteiten voor de mapper worden beschreven in de [LearnOSM Handleiding in kaart brengen met Tasking Manager](/nl_NL/coordination/tm-user/). Onthoud dat sommige projecten, zoals die in de status concept (d.i. nog niet gepubliceerd) niet zichtbaar zijn voor gewone gebruikers.

Alle speciale rechten worden afgehandeld door *organisaties* en *teams*. Een **organisatie** is de hoofdparaplu, en onder elke organisatie kunnen projecten voor in kaart breneg  en teams worden gemaakt. Een organisatie zou een gebruiker van gegevens kunnen vertegenwoordigen, zoals een humanitaire organisatie, of een gemeenschap van OpenStreetMap. Neem contact op met de technische beheerders van de instantie van de Tasking Manager als u uw organisatie wilt instellen op de Tasking Manager. Bekijk [HOT Tasking Manager Organizations](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations) voor een lijst van organisaties die aanwezig zijn in de Tasking Manager van HOT. Als uw gemeenschap of organisatie daar niet is vermeld en uw zou projecten willen maken op HOT's Tasking Manager, vul dan [dit formulier](https://bit.ly/HOTTasking) in om uw interesse te laten blijken. 

Elke organisatie heeft één of meer **managers** (beheerders). Zij hebben de rechten om geassocieerde projecten te maken en aan te passen. Alle opties voor beheer zijn toegankelijk via het gedeelte `Beheren` in de hoofdnavigatie.

Beheerders van een organisatie kunnen **teams** maken. Teams zijn groepen van OpenStreetMap gebruikers en zij kunnen voor iedereen zichtbaar zijn of privaat. Zij kunnen ook één of meer teambeheerders hebben. Teams kunnen zo worden ingesteld dat gebruikers zichzelf kunnen toevoegen of 'alleen op invitatie', wat betekent dat de beheerders van het team in kennis worden gesteld over verzoeken om te worden toegevoegd en daarover moeten beslissen.

Voor elk project kunnen beheerders specifieke teams aanwijzen om toegang te verlenen tot of te beperken voor in kaart brengen, te definiëren wie de gegevens mag valideren, of wie anders in staat is de metadata voor het project te bewerken.

## Een project maken

Klik op `Beheren` in de navigatie aan de bovenzijde. Op de eerste regel ziet u een ruimte voor 'Projecten'. Klik, daarnaast, op de knop `Toevoegen` om er een te maken.

![TM Add Project][]

U kunt, om het gebied van interesse (gebied voor in kaart brengen) van uw project voor in kaart brengen te definiëren, kiezen tussen ofwel:

* Optie 1: `Teken` het gebied van interesse handmatig
* Optie 2: `Bestand uploaden` om het gebied van interesse te importeren als een bestand van GeoJSON, KML of gezipt shapefile

![TM New][]

### Het in kaart te brengen gebied definiëren

* Optie 1: `Teken` het gebied van interesse handmatig

1. U kunt naar andere lagen voor de achtergrond schakelen met de knoppen aan de bovenzijde. 
1. Klik op de knop `Tekenen` aan de linkerkant.
2. Houd, om een polygoon te tekenen die het gebied om in kaart te brengen weergeeft in het kaartvenster, de rechtermuisknop ingedrukt om de kaart te verplaatsen zonder te klikken, wat een knoop zal toevoegen.  De polygoon zou net aan het in kaart te brengen gebied moeten omvatten. Dit bespaart tijd bij het voltooien van tegels die niet van belang zijn (d.i. oceaan, bos)
3. Klik op uw beginpunt om de polygoon te voltooien. <!--Na het voltooien van een polygoon kunt u de knopen verplaatsen of nieuwe toevoegen om het gebied precies zo te krijgen als u dat wilt.-->

<br>

* Optie 2: `Bestand uploaden` om het gebied van interesse te importeren als een bestand van GeoJSON, KML of gezipt shapefile

1. Klik, in de eerste stap van het maken van een project, op `Bestand uploaden`.
2. Blader naar uw bestand in het venster Bestand uploaden.
3. Klik op de bestandsnaam om het bestand te accentueren en klik dan op ‘Openen’.
4. Geïmporteerde gebieden voor in kaart brengen kunnen niet worden aangepast in Tasking Manager.

U zou een bestand kunnen uploaden dat de taken (kleine vierkanten voor in kaart brengen) al vooraf gedefinieerd heeft. Vind meer informatie hierover in het gedeelte [Taken definiëren met geïmporteerde gegevens](/nl_NL/coordination/tm-admin/#advanced:-define-tasks-with-imported-data) hieronder.

> Opmerking: De Tasking Manager heeft beperkingen! De maximale technische limiet voor een project is 5.000 km2, maar, om te zorgen dat uw project niet te lang duurt om te voltooien, probeer het onder de 1.000 km2 te houden. Als u een gebied in kaart wil brengen dat groter is dan dit, dan zult u meerdere projecten moeten maken. U zult de grootte van het project kunnen zien in de linkerbenedenhoek van de voorbeeldkaart. 

### Taken definiëren

Nadat het gehele gebied voor in kaart brengen is gedefinieerd, zal het worden opgedeeld in kleinere gebieden, genaamd *Taken*. U moet de grootte van de taken in uw project zorgvuldig overwegen. Goed ontworpen projecten hebben een toepasselijke grootte voor taken, wat het mogelijk maakt ze zo efficiënt mogelijk te voltooien. 

![TM Tile Sizes][]

Het gebied van het project wordt automatisch gesplitst in rastercellen en elke cel wordt een taak. Gebruik de knoppen `Groter` en `Kleiner` om de gehele grootte van de vierkanten voor de taken aan te passen. De standaard grootte voor taken is waarschijnlijk veel te groot. Als u de grootte van de taak wijzigt, let dan op de grootte van de taak, vermeld links naast 'De grootte van elke taak is bij benadering … km2'.

Neem uw tijd en stel uw grootte van de taken heel zorgvuldig in! Probeer en richt er op om de grootte van uw talen te reduceren tot waar u denkt dat een mapper met vertrouwen **15 minuten nodig heeft om te voltooien**. De optimale grootte van taken is geheel afhankelijk van de/het object(en) die u door mappers wilt laten identificeren en de dichtheid van die objecten. Bijvoorbeeld een project voor het in kaart brengen van wegen in een afgelegen gebied zou veel grotere taken hebben dan een project dat het digitaliseren van gebouwen in een dichtbevolkte nederzetting behelst.

> Zoom in en activeer de afbeeldingen van Bing om een goede grootte voor de taak te bepalen. U kunt schakelen tussen verschillende lagen voor de achtergrondkaart met de knoppen boven op de kaart.

Nadat u de gehele grootte voor de taken hebt aangepast, kunt u selectief bepaalde taken splitsen in vier kleinere met de knop `Klikken om te splitsen`. Of u kunt een `Gebied tekenen om te splitsen`, en het zal u een polygoon laten tekenen over een gebied waarin alle taken worden gesplitst. Deze functies zijn in het bijzonder nuttig als de dichtheid van het object dat u in kaart wilt brengen varieert in uw gebied van het project. Bijvoorbeeld: er zou een dicht bebouwd kustgebied kunnen zijn dat kleinere taken nodig heeft en een inlands afgelegen  gebied dat veel grotere taken nodig heeft. De knop `Herstellen` zal al uw aangepaste splitsingen verwijderen.

Overwegingen bij het bepalen van tegelgrootten
-  Taken kunnen worden gesplitst, maar er is geen optie om ze opnieuw samen te voegen als een project eenmaal is gemaakt.
-  Als een project eenmaal is gemaakt, is het splitsen van taken bijzonder tijdrovend en moet met één taak per keer worden uitgevoerd.
-  Aan de rand en hoeken van taken is er een groter potentieel voor conflicten tussen naburige mappers. Kleinere taken betekenen meer randen en hoeken. Er is een nadeel in de grootte voor taken om het voor mappers gemakkelijker te maken, maar niet om conflicten te produceren bij het in kaart brengen tussen hen.
-  Kleine taken zijn gemakkelijker in kaart te brengen, maar meer taken betekent dat door mappers meer tijd moet worden gespendeerd aan het bijwerken van de status van elke taak, en projecten met taken die te klein zijn kunnen daardoor inefficiënt zijn.
-  Beginnende mappers hebben ruwweg vier keer zoveel tijd nodig als ervaren mappers.
-  Beginnende mappers moeten een oog ontwikkelen voor satellietbeelden. Herkennen van de juiste objecten zou moeilijk kunnen zijn.

Als u tevreden bent met de grootte van uw taak, klik dan op `Volgende`.

### Geavanceerd: Taken definiëren met geïmporteerde gegevens

Als u een bestand upload om uw projectgebied te definiëren, zou dat bestand ook de vromen voor de individuele taken mogen bevatten. Bijvoorbeeld: een voltooid project van MapSwipe dat focust op bevolkte gebieden of een complex raster dat u vooraf hebt gemaakt in QGIS. Als dat het geval is, zorg er dan voor dat 'Stel taken in met geüploade polygonen' is ingeschakeld. Dit zal direct doorgaan naar de fase van een naam geven bij het maken van het project. 

![TM New Polys][]

### Projectgebied verkleinen

![TM Trim][]

Na het bepalen van de grootte voor de taken heeft u de optie om de taken te verkleinen tot het bereik van uw gebied om in kaart te brengen. U zou dit bijna zeker willen doen. Klik op `Verkleinen` om alle vierkanten voor taken te verwijderen die uw gebied om in kaart te brengen niet overlappen.

![TM Trim coarse][]

Als u schakelt met 'Taken verkleinen om het exacte projectgebied voor in kaart brengen te definiëren.' voordat u op `Verkleinen` klikt zullen de gedeelten van taken aan de rand van uw gebied scherp worden verkleind ten opzichte van uw projectgebied.

![TM Trim fine][]

Scherp verkleinen zou kunnen resulteren in enkele extreem kleine taken. Deze kleine taken kunnen mappers in verwarring brengen. door `Negeren` te selecteren als u het bericht 'Er zijn … taken kleiner dan 2.000m2. Wilt u ze negeren?' ziet.

> Onthoud het aantal taken dat uw project heeft (kijk in de linkerbenednehoek van uw kaart). De maximale technische limiet voor het aantal taken in één project van Tasking Manager is 5.000. Echter, om er voor te zorgen dat uw project niet teveel tijd kost om te voltooien, probeer het onder de 1.000 taken te houden - als u een groter gebied in kaart wilt brengen, probeer het dan op te splitsen in kleienre projecten. 

Klik op `Volgende`.

### Het project een naam geven

De naam van een project is één van zijn meest belangrijke aspecten als het aankomt op het worden ontdekt door het bredere publiek. Probeer om de naam van het land waarin het project is gelegen op te nemen (bijv. South Sudan), de reden voor het in kaart brengen (bijv. COVID Vaccination) en ook de meer specifieke locatie, misschien de naam van het district of de nederzetting (bijv. Yambio County). Een volledige naam voor een project zou bijvoorbeeld kunnen zijn: _South Sudan, COVID Vaccination, Yambio County_. 

Zorg er voor dat uw organisatie is geselecteerd in het veld 'Organisatie'. 

> Overtuig u ervan, voor het voltooien van dit stadium, dat u tevreden bent met het projectgebied en het totale aantal taken, deze elementen kunnen later niet meer worden aangepast. 

Klik op `Maken`. Uw project zal worden gemaakt, maar zal niet onmiddellijk worden gepubliceerd - u zult eerst worden omgeleid naar het menu Bewerken van het project. 

## Een project bewerken

U zult nu het menu 'Bewerken' van uw project zien. U moet, voordat het project kan worden opgeslagen, zorgvuldig door het menu 'Bewerken' gaan om het maken te voltooien. Hier is een snel overzicht van de submenu's die u zult zien aan de linkerkant:

- Omschrijving - Stel de status, prioriteit en tekst voor de beschrijving, geassocieerd met uw project, in.
- Instructies - Gedetailleerde instructies over wat en hoe de benodigde objecten/entiteiten/mogelijkheden in kaart moet worden gebracht en het project moet worden benaderd.
- Metadata - Definieer de objecten die in kaart moeten worden gebracht. Bevat ook informatie die wordt gebruikt voor het categoriseren van projecten, gebruikt bij het filteren van projecten.
- Prioriteitsgebieden - Stelt u in staat delen in het projectgebied te specificeren die als eerste in kaart zouden moeten worden  gebracht.
- Afbeeldingen - Kies de afbeeldingen die standaard zullen worden geladen als vrijwilligers uw project in kaart brengen. 
- Rechten - Stelt u in staat rechten, voor toegang tot het project voor het in kaart brengen en het valideren, te beperken.
- Instellingen - Schakel alternatieve bewerkers, zoals RapiD, in/uit.
- Acties - Krachtige bulkacties die u op uw project kunt uitvoeren, zoals klonen of verwijderen.
- Aangepaste bewerker - Voeg een aangepaste bewerker toe met een URL

> Zorgvuldig invullen van deze informatie is een essentieel deel van een succesvol project voor in kaart brengen. Het is in het bijzonde rbelangrijk dat de omschrijving van het project en instructies helder worden gecommuniceerd zodat de mappers zich bewust zijn van de belangrijkheid van de kwaliteit van de gegevens en beste methoden. Onthoud dat deelnemers geen eerdere ervaring zouden kunnen hebben met OpenStreetMap en waarschijnlijk niet bekend zijn met de richtlijnen voor taggen.

### Omschrijving

![TM Description][]

#### Status

Eerste is de projectstatus. Deze kan worden ingesteld op **Concept**, **Gepubliceerd**, of **Gearchiveerd**.

- **Concept** - Uw project zal beginnen in de modus Concept. In deze modus zal het niet te zien zijn en het zal voor het publiek niet mogelijk zijn om er aan deel te nemen. Dit is perfect terwijl u nog steeds uw project aan het instellen bent en het te testen vóór het uitgeven. 
- **Gepubliceerd** - Als u de instelling van uw project hebt voltooid, het hebt getest en tevreden bent om het publiek te vermelden en te openen voor in kaart brengen/valideren.
- **Gearchiveerd** - Alle projecten zouden gearchiveerd moeten eindigen. Gearchiveerde projecten zijn publiek, maar vergrendeld voor bijdragen. U zou moeten overwegen uw project te archiveren als:
  - Het voor 100% in kaart is gebracht en gevalideer
  - De instructies of afbeeldingen substantieel verouderd zijn
  - Het project langer dan een jaar geleden werd gemaakt
  - De kaartgegevens niet langer nodig zijn voor humanitaire doelen in het projectgebied

#### Prioriteit

Volgende is de prioriteit van het project. Dit bepaalt hoe dicht bij de voorkant van de Tasking Manager het project te zien zal zien op de pagina Projecten verkennen. Dit kan worden ingesteld op **Urgent**, **Hoog**, **Medium** of **Laag**.

- **Urgent** - Stel deze status alleen in als het project **een antwoord is op een ramp en de gegevens onmiddellijk nodig zijn**. Heel weinig projecten hebben dit niveau van prioriteit. 
- **Hoog** - Voor projecten die niet noodzakelijkerwijze een antwoord zijn op een ramp, maar de gegevens zijn nodig in een **kort tijdsbestek**. 
- **Medium** - Als de gegevens nodig zijn, maar niet in een bijzonder kort tijdsbestek.
- **Laag** - Als u uw project wilt publiceren, maar het niet prominent aanwezig wilt laten zijn. U zou misschien de voorkeur hebben om uw project te delen met specifieke groepen die de URL van het project gebruiken.

#### Korte beschrijving

Voeg tenminste twee regels toe die in het kort uw project beschrijven. Dit is belangrijk omdat vrijwilligers dit zullen lezen om te beslissen of zij willen bijdragen. Probeer helder uit te leggen **waarom** de gegevens worden verzameld en **hoe de kaart zal worden gebruikt**. 

> Deze velden ondersteunen **Markdown** en mogen afbeeldingen bevatten (slepen en neerzetten) en video's (voeg een URL voor YouTube toe voor automatisch inbedden).

#### 'Lange' beschrijving

U kunt hier meer in detail op uw project ingaan. Geef meer informatie over waarom het project bestaat, wie de gegevens zal gebruiken en de verwachte impact die het in kaart brengen zal hebben. Als het project samenwerking of partners bevat, zou u daar hier over kunnen uitweiden. 

> Voor elk van deze velden kunt u er voor kiezen aanvullende vertalingen toe te voegen. Als een een vertaling zou willen toevoegen, klik op de twee-letterige landcode en voer de vertaalde tekst in. Voor gebruikers die de Tasking Manager hebben ingesteld voor die taal zal het automatisch het project weergeven in die taal. Standaard is het veld in de Engelse taal, dit kan wordne gewijzigd in het submenu 'Instellingen' van uw project.

#### Vervaldatum

Als u een datum hebt waarop uw wilt dat het project volledig in kaart is gebracht en gevalideerd, kunt u dat hier toevoegen. Dit is optioneel en als de datum eenmaal is verstreken verandert er niets aan het project en vrijwilligers kunnen later doorgaan met bijdragen. Deelnemers zullen de vervaldatum zien weergegeven naast het project. 

### Instructies

![TM Instructions][]

#### Opmerking wijzigingenset

Hier kunt u aanvullend tags voor volgen toevoegen, die automatisch zullen worden gevuld elke keer als iemand zijn werk voor het in kaart brengen opslaat in uw project. Als u bijvoorbeeld zou willen starten met het volgen van alle bijdragen in alle projecten van uw organisatie, zou u er een algemene tag aan toe kunnen voegen, bijv. #MSF of #cartONG. Probeer **deze tags kort te houden** en voeg er niet te veel aan toe, overdadig gevulde opmerkingen voor wijzigingensets zijn moeilijk te interpreteren en er zou ruimte voor mappers over moeten blijven om beschrijvende opmerkingen voor de wijzigingenset over moeten blijven. 

> Onthoud dat een unieke tag voor het volgen van het project al aanwezig zal zijn, bijv. #hotosm-project-11188 - **laat deze zoals die is**, het is heel belangrijk voor het volgen van de voortgang van het project. Het getal aan het einde van uw tag is de unieke ID van uw project.

#### Gedetailleerde instructies

Voeg beschrijvende instructies toe voor mappers en validatoren om te volgen bij het werken aan uw project. Uw project zal publiek zijn, daarom **schrijf instructies voor onervaren gebruikers** zonder lokale of contextuele kennis. Gebruik heldere taal om het publiek dat u wilt bereiken niet allemaal  autochtone Nederlanders zijn.

1. Schrijf de meest belangrijke informatie aan de bovenzijde om er voor te zorgen dat het opvalt. Zit zou een beschrijving kunnen bevatten van de afbeeldingen en een waarschuwing voor een verschuiving van de afbeeldingen met richtlijnen. Of het zou mappers kunnen instrueren om paden en sporen in een project voor het in kaart brengen van hoofdwegen te negeren en focussen op meer prominente hoofdwegen.
2. Voegcontext-/locatiespecifieke instructies toe. Deze variëren significant, maar zullen helpen dat mappers satellietafbeeldingen interpreteren. Bijv. 'Verwacht veel cirkelvormige bruine rieten hutten te zien in dit project voor Zuid Soedan' of 'Nederzettingen in Guatemala zijn vaak dicht bebouwd, zoom extreem ver in bij het in kaart brengen van elk gebouw om er zeker van te zijn dat zij niet met elkaar verbonden zijn of overlappen'. Sleep en zet schermafdrukken van luchtfoto's neer in de instructies om dat gedeelte te verbeteren.
3. Voeg zeker een gedetailleerde beschrijving in voor **hoe elk object in kaart te brengen** waarvan u wilt dat ze in kaart worden gebracht. Kijk naar bestaande (maar recente) projecten in de Tasking Manager om te zien of u wat bestaande tekst voor instructies kunt lenen (weet wel dat sommige projecten geen goede instructies hebben!).
4. De uiteindelijke bron voor taggen is de [wiki van OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features). Voor veel aan HOT gerelateerde projecten is de pagina op [taggen van highways in Africa](https://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) de juiste specificatie en zou het waarde kunnen zijn om te worden gelinkt naar de instructies voor uw project. Als uw project moet voldoen aan andere standaarden voor taggen, schrijf dan een soortgelijke pagina in de wiki en link daarnaar in uw instructies.
5. Andere punten ter verduidelijking: Als het project geschikt is voor mappers met slechts een bepaald niveau van ervaring. Bijvoorbeeld: het project gebruikt geïmporteerde bestanden of bestaande gegevens zouden moeten worden uitgelijnd aan GPS-sporen of een andere afbeelding. Omschrijf het zo dat nieuwe mappers zich welkom zullen voelen bij te dragen aan andere projecten, maar zullen begrijpen dat in dit geval geavanceerde technieken vereist zijn.
6. Er zijn richtlijnen die algemene fouten behandelen die we zien bij het valideren van het in kaart gebrachte. Eén voorbeeld is Blake Girardot's compilatie over [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Gebruik de link in de instructies en leg uit dat het volgen van die richtlijnen is vereist.

#### Instructies per taak 

Dit is optioneel, maar het is mogelijk een kort snipper van aanvullende instructies toe te voegen dat mappers zullen zien bij het werken aan een taak. Dit is te zien aan de rechterkant van de weergave van de bewerker van Tasking Manager boven het gedeelte 'Status taak'. Dit is altijd te zien tijdens het in kaart brengen, als er dus iets **bijzonder belangrijk** is dat u aan uw **mappers kenbaar wil maken**, zou u dat hier kunnen toevoegen. 

### Metadata

![TM Metadata][]

#### Niveau mapper

Dit wijzigt het niveau voor de moeilijkheid dat wordt **weergegeven** voor uw project. Overweeg dit heel zorgvuldig, complexe projecten die onjuist zijn ingesteld op de moeilijkheid Beginner **kunnen resulteren in significante problemen met de kwaliteit van de gegevens**. 

> Onthoud dat dit niet wijzigt wie er **feitelijk kan bijdragen** aan uw project, deze beperkingen zijn geïmplementeerd onder het submenu Rechten.

De meeste projecten zijn ingesteld op ofwel moeilijkheid  **Beginner** of **Gemiddeld**, een handjevol projecten zijn ingesteld op Gevorderd. 

- **Beginner** - Overweeg of uw project gemakkelijk in kaart is te brengen en:
  - U vraagt deelnemers om slechts één object in kaart te brengen, in het bijzonder **alleen gebouwen**
  - De dichtheid van de objecten is laag, d.i. in een **afgelegen** gebied
  - Er is een **lage kwantiteit** van bestaande gegevens voor OSM in uw projectgebied
  - Er zijn geen problemen met het uitlijnen van afbeeldingen
- **Gemiddeld** - Als uw project niet zo gemakkelijk in kaart is te brengen, zou dit moeten overwogen als:
  - U deelnemers vraag meer dan één object in kaart te brengen, bijv. gebouwen **en** wegen
  - Er een medium/hoge dichtheid is voor deze objecten in uw projectgebied, d.i. **stedelijke** gebieden
  - Er zijn **substantieel** bestaande gegevens voor OSM in uw projectgebied
  - Er zouden **problemen met uitlijnen van afbeeldingen** kunnen zijn of u vraagt deelnemers om meer dan één bron voor afbeeldingen te gebruiken
- **Gevorderd** - Als het project extreem moeilijk in kaart te brengen is, overweeg dit als: 
  - Er is een zeer hoge dichtheid voor deze objecten in uw projectgebied, d.i. **centrale stedelijke** gebieden
  - Er zijn **heel veel** bestaande gegevens voor OSM in uw projectgebied
  - Er zijn **complexe problemen met het uitlijnen van afbeeldingen**

#### Typen voor in kaart brengen

Schakel deze in/uit, afhankelijk van de objecten die u in kaart wilt laten brengen in uw project. Over het algemeen **des te minder, des te beter**, omdat projecten die zich er op richten teveel objecten in kaart te brengen vaak moeite hebben om voldoende voortgang te maken. 

> Projecten die vragen om heel veel objecten in kaart te brengen zijn moeilijk voor mappers en moeilijk om te valideren. Zij hebben veel meer tijd nodig om een goede bruikbare gegevensset te maken. Grootten voor taken zijn ook moeilijk efficiënt te maken voor verschillende typen van in kaart brengen, bijv, gebouwen hebben kleine vierkanten voor taken nodig, wegen en waterwegen hebben grote vierkanten voor taken nodig. Maken van meerdere projecten voor hetzelfde gebied om gebouwen en wegen/waterwegen afzonderlijk in kaart te brengen is dan het beste.

#### Voorkeuren bewerker iD

Als u kiest om één of meer items uit de keuzelijst te kiezen dan zullen mappers die iD gebruiken alleen in staat zijn om deze objecten toe te wijzen aan de objecten die zij in kaart brengen. Dit is aanbevolen voor beginners, **project met Alleen gebouwen**. Het zal betekenen dat deelnemers niet in staat zullen zijn andere objecten te taggen, zelfs niet als zij het proberen. Vermijd het gebruiken van voorkeuren voor meer complexe projecten, omdat het al snel een last wordt. Een project voor het mappen van wegen zou, bijvoorbeeld, dozijnen aan voorkeuzen moeten hebben toegevoegd, om te zorgen dat alle type wegen in kaart zouden kunnen worden gebracht. 

#### Organisatie

De naam van uw organisatie zou hier al moeten staan, kies hem anders in het keuzemenu.

#### Campagne

Als u verscheidene projecten hebt gemaakt die met elkaar geassocieerd zijn, kunt u er voor kiezen om ze toe te wijzen aan een campagne. Gebruikers kunnen projecten filteren op de naam van de campagne op de pagina Projecten verkennen. Als u project bijvoorbeeld is geassocieerd met het elimineren van malaria, zou ze willen plaatsen onder de campagne 'Malaria Elimination'. Vul [dit formulier](https://forms.gle/qafvkp4iAxnY6rjE6) in om aanvullende namen voor campagnes te laten maken.

#### Categorieën

Selecteer hier de thema's die aan uw project zijn gerelateerd. Deelnemers kunnen hun interesses in deze categorieën specificeren op hun pagina Instellingen.

#### OSMCha filter ID

[OSMCha](https://osmcha.org/) is een krachtig programma voor het beoordelen van de kwaliteit van gegevens dat u nuttig zou kunnen vinden voor het monitoren van bijdragen aan uw project. Het standaard filter begrenst uitvoer tot het begrenzingsvak van het project en tot bijdragen die niet ouder zijn dan de datum van maken van het project en met de naam van het project in de opmerking voor de wijzigingenset. Als u denkt dat iets anders een betere benadering zou zijn om de wijzigingensets van uw project te analyseren, geef dan hier een URL voor OSMCha of een OSMCha filter-ID op. Het filter van OSMCha is beschikbaar aan het einde van de overzichtspagina van uw project. 

### Gebieden met prioriteit

![TM Priority Area][]

Gebruik de gereedschappen hier om gebieden te tekenen die als eerste in kaart zouden moeten worden gebracht. U mag meerdere gebieden met prioriteit voor een project hebben. U kunt ook op elk moment de gebieden met prioriteit wijzigen. Het gebied met prioriteit zal worden geaccentueerd voor vrijwilligers om te prioriteren en als zij 'Taak in kaart brengen' kiezen zal het willekeurig eerst een taak kiezen uit het gebied met prioriteit. 

> Gedurende het in kaart brengen van rampen, vroeg in de gebeurtenis, met een groot gebied om in kaart te brengen voor het project en het gebruiken van gebieden met prioriteit, om te focussen als nog steeds nieuwe informatie binnenkomt, is vaak een goede werkwijze.

### Afbeeldingen

Kies uit het keuzemenu de bron voor de lucht-/satellietfoto's die u automatisch wilt laden voor uw project. Als de afbeelding niet zijn vermeld in het keuzemenu kunt u kiezen voor 'Aangepast' en dan een URL voor een TMS invoeren. 

> Onthoud dat de Tasking Manager **geen aangepaste afbeeldingen kan hosten**, het dient extern te worden gehost en dan gelinkt met een URL voor TMS. Als u geen bezwaar hebt tegen het feit dat uw afbeeldingen openbaar zijn om te gebruiken, overweeg dan om [OpenAerialMap](https://openaerialmap.org/) om uw afbeeldingen te hosten.

Licentie - Optioneel, als er een specifieke licentie is vereist die de mappers moet accepteren voor het gebruiken van de afbeeldingen, kunt u die hier selecteren. Voor afbeeldingen van Maxar is dit bijvoorbeeld 'DigitalGlobe Satellite EULA'.  Indien u een licentie nodig hebt die niet beschikbaar is, kunt u contact opnemen met een beheerder van de installatie van de Tasking Manager en die vragen om hem toe te voegen.

### Rechten

In het menu 'Metadata' zouden we het niveau voor de moeilijkheid kunnen wijzigen dat wordt **weergegeven** voor een project. In het menu 'Rechten' kunnen we wijzigen wie in feite **toegang** heeft tot een project. Het is belangrijk om de verschillende gebruikersniveaus te kennen:

- **Beginnende** gebruiker - Elke gebruiker die net zijn account heeft gemaakt of  **minder dan 250 wijzigingensets** (opgeslagen werk) heeft gemaakt
- **Gemiddelde** gebruiker - Elke gebruiker die tussen de **250 en 500 wijzigingensets** heeft gemaakt
- **Gevorderde** gebruiker - Elke gebruiker die meer dan **500 wijzigingensets** heeft gemaakt

> net als eerder, overweeg de rechten heel zorgvuldig, complexe projecten die niet toepasselijk alle gebruikers toestaan deel te nemen kan resulteren in **significante problemen met de kwaliteit van de gegevens**. 

![TM Permissions][]

#### Rechten voor in kaart brengen

Hier kunt u kiezen wie uw project **in kaart kan brengen**:

- Als uw project gemakkelijk is om aan deel te nemen en u beschouwt het als een project voor beginners, wilt u dit instellen op **'Elke gebruiker'**.
- Als uw project meer complex is en meer ervaring vereist, beperk dan het in kaart brengen tot **'Alleen gebruikers met niveau Gemiddeld of Gevorderd'**. 
- Als u nog selectiever wilt zijn, dan zou u kunnen eisen dat een mapper lid is van een **team**. Team moeten dan hieronder gedefinieerd worden.

#### Rechten voor validatie

Hier kunt u kiezen wie uw project mag **valideren**. Validatie is waar meer ervaren mappers de bijdragen die binnen uw project zijn gemaakt controleren, daarom zou dit moeten zijn beperkt tot 'Alleen gebruikers met niveau Gemiddeld of Gevorderd' **als minimum**. **Idealiter** zou u validatie nog verder beperken tot **'Alleen teamleden'**, maar als u dat doet moet u onthouden om **die teams hieronder te definiëren**. 

#### Teams

Gebruik de filters om te zoeken naar teams en ze toe te voegen. U kunt uw eigen team(s) toevoegen, maar het staat u vrij om ook andere teams toe te voegen. Als u eenmaal ene team hebt toegevoegd, zorg er voor dat er een rol geselecteerd is (Mapper, Validator, Projectbeheerder). 

Rechten voor teams zullen niet werken tenzij u de rechten voor valideren en in kaart brengen hebt beperkt tot 'Alleen teamleden'. Als u rechten verleend aan een Projectbeheerder van een team, dan zal dit zijn teamleden in staat stellen het project te bewerken.

> In HOT's Tasking Manager, het staat u vrij om twee van de grotere teams voor validatie toe te voegen, namelijk 'HOT Global Validators' en HOT's 'Validator Trainees'. Onthoud dat, hoewel dit deze temaleden **het recht** geeft om uw project te valideren, dit **niet noodzakelijkerwijze betekent** dat zij uw project **zullen valideren**.  

#### Privacy

Schakelen om een project 'Privé' te maken zal het project verbergen voor alle gebruikers, behalve voor hen die deel uitmaken van de hierboven gedefinieerde teams. 

### Instellingen

![TM Settings][]

#### Standaard taal

Wijzigen hiervan zal de standaard taal voor de titel, beschrijving en instructies voor uw project wijzigen.

#### Bewerkers voor in kaart brengen/valideren

Dit beperkt de beschikbare bewerkers tot die welke zijn geselecteerd. U zou verschillende sets voor in kaart brengen en valideren kunnen specificeren. Onthoud dat het mogelijk is hier de door AI geassisteerde bewerker RapiD hier in te schakelen. 

#### Willekeurig selecteren van taken forceren

Indien ingeschakeld kunnen deelnemers geen specifieke taken selecteren voor het in kaart brengen.

### Acties

Hier kunt u krachtige bulkacties uitvoeren op uw project. **Wees voorzichtig** met veel van deze opties, **zij kunnen niet worden teruggedraaid**. 

![TM Actions][]

#### Bericht aan alle deelnemers

Verzendt een bericht van Tasking Manager aan iedereen die een taak als voltooid heeft gemarkeerd of als geldig. Het kan worden gebruikt om deelnemers te bedanken en/of ze te leiden naar andere projecten in een campagne. Het zou ook kunnen worden gebruikt vóór het gebruiken van één van de twee opties Validate/Invalidate all Tasks, hieronder beschreven.

#### In kaart brengen, validatie en ongeldig verklaren

Dit zal de status van alle taken instellen op ofwel in kaart gebracht, gevalideerd of ongeldig verklaard. Behandel dit met zorg, want u kunt het niet ongedaan maken.

#### Taken herstellen

Dit zal alle taken herstellen naar hun ongerepte status, maar eerdere acties kunnen nog steeds worden bekeken in de geschiedenis van de taak. Behandel dit met zorg, want u kunt het niet ongedaan maken.

#### Eigendom project overdragen

U kunt een andere beheerder specificeren in uw organisatie die zal worden vermeld als de maker van het project. Zoek op hun gebruikersnaam van OSM. 

#### Project klonen

Deze nuttige optie zal een duplicaat maken van het project, de gehele **identieke setup** behouden, behalve het projectgebied, raster met taken en gebieden met prioriteit die u opnieuw moet importeren of tekenen. Deze optie zal **u veel tijd besparen** als u een serie soortgelijke projecten maakt die een groot gebied bedekken. 

#### Project verwijderen

Dit zal het project **permanent verwijderen** uit de Tasking Manager. Behandel dit met zorg, want u kunt het niet ongedaan maken. Het is niet langer mogelijk een project te verwijderen zodra er een bijdrage in is gemaakt.

### Aangepaste bewerker

Als u naar een bewerker zou willen linken die nog niet is vermeld in het menu 'Instellingen', kan hier een URL naar die bewerker worden toegevoegd. 

### Opslaan en testen

Als u eenmaal tevreden bent met de aanmaak van uw project, druk dan op `Opslaan`. Bekijk uw project door `Toegang tot project` en `Projectpagina` te selecteren. **Controleer uw project zorgvuldig**, zorg er voor dat de instructies helder zijn en de bewoording en opmaak juist zijn. 

**Probeer een taak in kaart te brengen**, is de afbeelding correct geladen? Zijn de instructies helder genoeg? Als u wijzigingen moet maken of uw project wilt verfijnen, klik op de knop `Bewerken` op de projectpagina. 

### Publiceren

Na het controleren en testen van uw project, als u er tevreden mee bent en klaar om het in kaart brengen te beginnen, klik op de knop `Bewerken` op de projectpage en wijzig vanuit het menu 'Beschrijving' de status naar ‘Gepubliceerd’. Als het project eenmaal is gepubliceerd kan het bredere publiek uw project zien en er aan deelnemen. 

> Onthoud dat u op elk moment naar het menu 'Bewerken' van uw project kunt geen en de instellingen veranderen, zelfs als er in kaart wordt gebracht.

## Projectbeheer

Gefeliciteerd! U hebt een project gemaakt, nu moet u er voor zorgen dat het effectief beheerd wordt. 

### Wees bereikbaar

Als de maker van het project bent u **verantwoordelijk** voor **het beantwoorden van vragen** die worden gesteld in het gedeelten **Vragen en opmerkingen** van uw projectpagina. Dit gedeelte zal vaak nuttige richtlijnen of tips bevatten van de bredere gemeenschap, neem dat serieus, antwoord en maak, waar nodig, bewerkingen aan uw projecten. 

> Klik op uw gebruikersnaam van OSM in Tasking Manager en kies `Instellingen` om notificaties in te schakelen als er nieuwe post in het gedeelte Vragen en opmerkingen komt. Schakel notificaties in voor 'Vragen en opmerkingen'.

Op de projectpagina zal uw gebruikersnaam worden vermeld naast 'gemaakt door …'. Dit betekent dat u ook directe berichten van OSM zou kunnen ontvangen, zorg er voor ze te lezen en te beantwoorden. 

> Als u wordt overweldigd door de vragen onthoud dan dat u er minder zult ontvangen als u deze richtlijn volgt: _Het eerste dat u kan doen om de mappers, en validators, te ondersteunen is door goed ontworpen projecten te hebben met gemakkelijk te begrijpen, maar duidelijke, instructies en beschrijvingen._

### Reeksen van projecten

Als u ene aantal projecten hebt gemaakt in een reeks **publiceer ze niet allemaal in één keer**. U bent niet de enige die projecten maakt, een redelijk aantal projecten (een of twee) hebben op het toepasselijk niveau is prima. Publiceren van een half dozijn in één keer zal de Tasking Manager overbevolken. Houd de rest in concept of op een lagere prioriteit, terwijl er aan een of twee projecten wordt gewerkt. Het zou u kunnen opvallen dat deelnemers snel hun enthousiasme verliezen als zij heel veel soortgelijk projecten in één keer zien die weinig voortgang boeken.

### Levenscyclus project

Houd overzicht over de voortgang van het in kaart brengen en het valideren van uw projecten. Onthoud dat **alle projecten moeten gearchiveerd moeten eindigen**. U zult dat handmatig moeten doen, dus verlies niet het zicht op de voortgang, prioriteit of relevantie van uw projecten. Als u overgaat naar een andere organisatie zorg er dan voor dat uw lopende projecten worden **overgedragen** aan uw vervanging. 

## Aanvullende informatie

### Overwegingen met betrekking tot afbeeldingen

Controleer, voordat u uw project maakt, de afbeeldingen voor verscheidene verschillende locaties in uw projectgebied voor een beoordeling van de afbeeldingen. In de meeste gevallen zouden afbeeldingen van Maxar of Bing aan uw behoeften kunnen voldoen. Er zijn echter situaties waar u een alternatieve bron zou willen kiezen. U zou de volgende overwegingen moeten maken bij het kiezen van uw afbeeldingen: 

1. Als zorgvuldig, gedetailleerd in kaart brengen nodig is, kies dan de afbeelding die het helderst is, met de hoogste resolutie.
2. Als uw prioriteit is om de meest up-to-date afbeeldingen te hebben, klik dan tussen de standaard bronnen voor afbeeldingen om te zoeken naar de meest recente afbeeldingen. Zoek naar indicaties voor ontwikkeling, zoals nieuwe gebouwen of vrijgemaakt land om een idee te krijgen over de meest up-to-date afbeeldingen. Recent heeft Maxar de meest up-to-date, maar dit varieert per locatie. 
3. Controleer op bedekking door wolken, hoewel een bepaalde bron voor afbeeldingen aan uw behoeften zou kunnen voldoen, als het erg bewolkt of wazig is, zullen uw mappers moeite hebben om het in kaart te brengen.
4. Controleer op uitlijning, als her genoeg bestaande gegevens van OSM zijn die uitlijnen op één set satellietafbeeldingen, dan is het logisch te kiezen voor dezelfde afbeeldingen. Als er problemen zijn met de uitlijning, zorg er dan voor heldere instructies te schrijven die in detail beschrijven hoe u verwacht dat deelnemers problemen met verschuiven/uitlijnen afhandelen. 

> Het is vaak heel moeilijk om een exacte datum van vastleggen van afbeeldingen te krijgen van de providers van de satellietbeelden. De belangrijkste bronnen zijn 'mozaiëken' waar een reeks afbeeldingen (vaak met verschillende datums van vastleggen) aan elkaar gestikt zijn. Soms gaat dit stikken door tot op het niveau van de individuele pixel. Bij het afwezig zijn van informatie, is het vergelijken van afbeeldingen vaak d ebeste keuze voor het vinden van de meest recente afbeeldingen. 

#### Uitlijnen van afbeeldingen

Uw projectgebied zou al gedeeltelijk in kaart kunnen zijn gebracht met oudere afbeeldingen en er zou een duidelijke verschuiving kunnen zijn tussen de oudere in kaart gebrachte objecten en de nieuwere beschikbare afbeeldingen. Inspecteer verschillende locaties in uw gebied voor in kaart brengen om dit te bepalen. Als er een probleem met de uitlijning is, zorg er dan voor gedetailleerde instructies op te nemen die voor mappers de beste benadering geven voor het verwerken. Projecten met problemen met uitlijnen van afbeeldingen worden het beste beperkt tot de meer ervaren mappers. 

Er is geen standaard set instructies als het aankomt op problemen met het uitlijnen van afbeeldingen. Het hangt erg af van de context. Soms worden mappers geïnstrueerd om uit te lijnen op GPS-sporen, soms wordt ze verteld om uit te lijnen op lineair in kaart gebracht objecten, zoals wegen en waterwegen. Hier is een voorbeeld van een benadering: 

1. Vermeld duidelijk welke afbeelding geacht wordt de verwijzing te zijn waaraan al het andere zou moeten worden uitgelijnd. Laten we er in dit geval van uitgaan dat die verwijzing Maxar is.
2. Zorg er voor dat alle reeds bestaande objecten die ook zichtbaar zijn op Maxar zijn uitgelijnd op de afbeelding van Maxar, d.i. lijn ze, indien nodig, opnieuw uit.
3. Voeg nieuwe objecten toe uit de nu correct uitgelijnde afbeelding van Maxar.

Vaak worden mappers geïnstrueerd te zoeken naar _de minste inspanning_ als het aankomt op problemen met het uitlijnen van afbeeldingen. Wat betekent dat deelnemers wordt verteld hun benadering te variëren, afhankelijk van de situatie in hun individuele taak: 

- Als er voldoende bestaand in kaart gebracht is in een taak die consistent foutief is uitgelijnd,  zou het de minste inspanning vereisen om de verschuiving van de afbeelding te wijzigen zodat die past in het bestaande in kaart gebrachte en dan het kleine aantal resterende objecten in de taak in kaart te brengen. 
- Als er minder bestaand in kaart gebracht is, of objecten zijn inconsistent verkeerd uitgelijnd (d.i. de mate van verkeerd uitlijnen varieert in de ruimte) dan zou het makkelijker zijn de positie van de in kaart gebrachte objecten te wijzigen zodat ze uitlijnen met de afbeelding en dan de resterende objecten in de taak in kaart te brengen.

Als uw project problemen heeft met uitlijnen, zorg er dan voor dat vierkanten voor de taken niet te groot zijn, omdat verschuiving van afbeeldingen aanzienlijk kan variëren in een gebied om in kaart te brengen, in het bijzonder als het gebied niet vlak is. Zelfs onderbrekingen in afbeeldingen kunnen voorkomen binnen een project - kijk er naar en adviseer de deelnemers met betrekking tot dat probleem.

> Hoewel individuele mappers handmatig de verschuiving van de afbeelding kunnen wijzigen tijdens het in kaart brengen, is het voor niet mogelijk, als maker van het project, om de verschuiving van de afbeelding te wijzigen op het niveau van het project. Als u echter uw eigen luchtfoto's ergens anders host, kunt u de verschuiving bij de bron wijzigen. Onthoud echter dat uitlijning behoorlijk kan variëren in de ruimte, en eenvoudigweg wijzigen van de algehele verschuiving lost niet altijd alle problemen met de uitlijning op. 

Bekijk ook eens deze aanvullende bronnen over het uitlijnen van afbeeldingen:

- [General guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [Geanimeerde gif over uitlijnen van afbeeldingen in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [Hoofdstuk van JOSM uitlijnen van afbeeldingen in learnOSM](https://learnosm.org/nl_NL/josm/correcting-imagery-offset)


[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM New Polys]: /images/coordination/tm4_create_new_polys.png
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
