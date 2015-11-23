---
layout: doc
title: Gegevens uit het veld bewerken
permalink: /nl/josm/editing-with-josm/
lang: nl
category: josm
---

Gegevens uit het veld bewerken
==================

> Deze handleiding kan worden gedownload als [josm_editing-with-josm_nl.odt](/files/josm_editing-with-josm_nl.odt) of [josm_editing-with-josm_nl.pdf](/files/josm_editing-with-josm_nl.pdf)  
> Bijgewerkt op 13-07-2015  

We hebben nu alle bouwblokken voor het maken van kaarten met OpenStreetMap behandeld.
In het gedeelte [Mapping with a Smartphone, GPS or Paper](/nl/mobile-mapping/) kunt u zien hoe u mobiele gereedschappen gebruikt om een gebied te verkennen en vast te leggen.  

In dit hoofdstuk keren we nog een keer terug naar JOSM en kijken we naar een aantal nieuwe
concepten die we tot op heden nog niet behandeld hebben.

Lagen in JOSM
-----------
Als u alles gevolgd heeft zou het u opgevallen kunnen zijn dat we allerlei soorten
verschillende dingen kunnen toevoegen in JOSM. We kunnen gegevens van OSM downloaden, satellietafbeeldingen van Bing toevoegen,
load GPS-sporen en punten laden, en Veldbeschrijvingen toevoegen - welke alle wordne weergegeven
in het kaartvenster van JOSM.

Het zal u misschien zijn opgevallen dat, elke keer als u iets nieuws toevoegt aan JOSM, een aanvullend
item wordt toegevoegd aan het Lagenpaneel aan de rechterzijde van JOSM. Afhankelijk van wat u heeft
geopend, zou uw Lagenpaneel er ongeveer zo uit kunnen zien:

![Layers panel][]

Elk item in deze lijst vertegenwoordigt een verschillende bron van gegevens die
u heeft geopend in uw kaartvenster. In dit voorbeeld is “Data Layer
1” de gegevens van OpenStreetMap die we bewerken. "Field Papers” is
de laag die werd gemaakt toen we onze Veldformulieren toevoegden aan JOSM.

Indien u satellietafbeeldingen van Bing toevoegt, zal een nieuwe laag, genaamd "Bing Sat", in het Lagenpaneel verschijnen. 

Het concept van lagen is soms moeilijk te begrijpen. Een goede manier om het te visualiseren is dat elke
laag is als een semi-doorzichtig stuk papier, en zijn zijn allemaal bovenop elkaar
gestapeld. Elk stuk papier bevat een bepaald type informatie, en zijn kunnen opnieuw worden geschikt
op elke manier die u wilt.

Lage die als verwijzingen worden gebruikt, zoals satellietafbeeldingen, GPS-sporen en Veldformulieren
worden vaak "basislagen" genoemd. De laag met gegevens van OSM is de laag waar u in feite mee werkt.

-   Klik, om een laag te verplaatsen, er op in het Lagenpaneel en klik op de pijl naar boven
    of naar beneden om hem te verplaatsen.

![Layers up down][]

-  Selecteer, om een laag te verbergen, die met uw muis en
    klik op de knop Weergeven/Verbergen:

![Layers show hide][]

-  U zou moeten zien dat de door u geselecteerde laag verdwijnt van de kaart
    venster. Klik opnieuw op Weergeven/Verbergen en het zal weer verschijnen.
-  U kunt een laag verwijderen door die te selecteren en de knop Delete
    te gebruiken:

![Layers delete][]

- Tenslotte is het belangrijk te weten dat u alleen de laag kunt bewerken die
    als *actief* wordt beschouwd door JOSM. Als u niet in staat bent de kaart te bewerken in
    uw kaartvenster, is dat waarschijnlijk omdat u niet de juiste
    laag als actief hebt ingesteld. De meeste lagen, zoals GPS-punten, Veld
    formulieren en satellietafbeeldingen, kunnen niet worden bewerkt. De enige lagen die
    die kunnen worden bewerkt zijn gegevens van OpenStreetMap, die gewoonlijk is genaamd
    “Gegevenslaag 1”.
-  Selecteer, om een laag actief te maken, die in het Lagenpaneel en klik op
    de knop Activeren:

![Layers activate][]


GPS-gegevens en Veldformulieren gebruiken
-------------------------------
In de hoofdstukken [Mapping with a Smartphone, GPS or Paper](/nl/mobile-mapping/) zagen we hoe gegevens te verzamelen met een GPS
en Veldformulieren, en hoe die in JOSM te laden als een laag.

Als u eenmaal veldonderzoek hebt gedaan metéén van deze gereedschappen, dient u nog steeds
digitaal de informatie toe te voegen aan OpenStreetMap.

U doet dit met hetzelfde proces als dat wat u eerder leerde - **downloaden,
bewerken, opslaan**. Het verschil is dat in plaats van alleen satelliet
afbeeldingen te gebruiken als een basislaag, kunt u ook uw GPS-gegevens, Veldformulieren,
notities, of een combinatie daarvan gebruiken.

-   Bijvoorbeeld: laten we er van uitgaan dat u uw GPS-punten als een achtergrond
    laag in JOSM, u heeft een punt op uw GPS opgeslagen onder de naam 030, en
    u schreef in uw notitieboekje dat 030 een school is. Voor het toevoegen van dit punt
    in OpenStreetMap, selecteert u het gereedschap Tekenen, en
    dubbelklik op punt 030 in uw kaartvenster. Dit zal
    een punt maken. Ga dan naar het menu Voorkeuzen en zoek naar de voorkeuze voor
    school. Voer de naam van de school in en klik op “Voorkeuze toepassen”. Doe
    hetzelfde om lijnen en vormen toe te voegen.

![GPS in JOSM][]

Tags
----
Wanneer u een punt, lijn, of vorm tekent, heeft het een locatie, maar geen
informatie over wat het is. Met andere woorden, we weten **waar* het
is, maar niet **wat** het is. Hiervoor gebruikten we items
uit het menu Voorkeuzen om te definiëren **wat** het is. De manier
waarop OpenStreetMap weet **wat** een object is is door **tags** te gebruiken.

Een tag is als een label dat u op iets kunt plakken. Bijvoorbeeld, als
als we een vierkant tekenen, is het slechts een vierkant. Maar dan voegen we attributen toe
die beschrijven wat het is: dit vierkant is een gebouw; de naam van
het gebouw is “Menara Thamrin”; het gebouw is 16 lagen hoog.

U kunt net zoveel tags aan een object toevoegen als u wilt. Tags worden opgeslagen als
paren van tekst, genaamd **sleutels** en de **waarden**. In
OpenStreetMap zouden de hierboven geschreven tags zouden in feite zijn:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Wanneer u een object in JOSM selecteert, kunt u alle tags die er aan zijn
verbonden in het paneel Eigenschappen aan de rechterzijde.

![Properties panel][]

###Tags bewerken
U kunt tags toevoegen, bewerken of verwijderen vanuit het paneel Eigenschappen. De tags zijn echter
traditioneel in het Engels en kunnen soms verwarrend zijn, dus is
het vaak eenvoudiger om het menu Voorkeuzen te gebruiken. Wanneer u tags toevoegt of wijzigt, worden de attributen
van het object gewijzigd.

-   Selecteer eerst een object om de tags ervan te bewerken.
-   Bewerk dan de tags op één van de twee manieren: (1) Gebruik het menu Voorkeuzen,
    of (2) bewerk de tags direct in het venster Eigenschappen aan de rechterzijde. 

###Veel voorkomende fout: Taggen van knopen wanneer u lijnen of polygonen wilt taggen
Wanneer u de attributen van een punt bewerkt, zult u eerst
het punt selecteren en dan tags toevoegen, ofwel via het menu Voorkeuzen of direct
in het paneel Eigenschappen. Een veel voorkomende fout gebeurt vaak bij het toevoegen van attributen aan een
lijn of een vorm. Bij het selecteren van het object, is het belangrijk dat u
de lijn selecteert, en NIET de punten die de lijn vormen.

Dit komt regelmatig voor omdat bewerkers het gereedschap selectie in JOSM gebruiken om een
vak rondom een object te tekenen, wat er voor zorgt dat alles, zowel de lijn **en** de knopen
worden geselecteerd, en wanneer u tags toevoegt worden zij ook toegepast op de
knopen. Zorg er voor **alleen** lijnen te selecteren wanneer u daaraan tags
 wilt toevoegen.

![Nodes mistake][]

OSM-bestanden opslaan
----------------
Wanneer u in JOSM bewerkt, is het altijd een goed idee om te downloaden, te bewerken, en
wijzigingen te uploaden in een redelijk korte periode. U wilt niet de ene dag
gegevens downloaden, en dan een paar dagen wachten om uw bewerkingen te uploaden. Wat als
iemand anders hetzelfde gebied bewerkt gedurende die tijd? Dat zal fouten en conflicten veroorzaken.

Wees niet bang om uw bewerkingen regelmatig te uploaden. Dat zorgt er voor dat uw wijzigingen zullen
worden opgeslagen in de database en u zult uw harde werk niet verliezen.

Als u werkt in één enkel gebied, is het een goed idee om de kaartgegevens te downloaden
elke keer als u wilt bewerken, voor het geval een andere gebruiker wijzigingen heeft gemaakt.

Hoewel u altijd zou moeten proberen gegevens van OSM te downloaden als u klaar bent om te gaan bewerken,
en uw wijzigingen regelmatig zou moeten uploaden, zouden er gevallen kunnen zijn waarin u
de gegevens van OSM wilt opslaan op uw computer. Bijvoorbeeld als uw verbinding
met het internet wordt onderbroken,dan wilt u gegevens downloaden, ze opslaan, bewerken, en dan uw
wijzigingen later uploaden.

-  Zorg er voor, om een OSM-bestand op te slaan, dat het de actieve laag is in
    het Lagenpaneel. Klik op “Bestand” in het bovenste menu, en klik op “Opslaan”.
    Kies een locatie voor het bestand en geef het een naam. U kunt ook opslaan
    door op deze knop te klikken:

![JOSM save button][]

-  U kunt nu JOSM sluiten en uw gegevens zullen zijn opgeslagen. Wanneer u
    het bestand opnieuw wilt openen, open eenvoudigweg JOSM, ga naar het menu “Bestand”, en
    klik op “Openen...”

Samenvatting
-------
In dit hoofdstuk hebben we meer in detail gekeken naar de interface van JOSM interface en geleerd
over lagen en tags. U zou nu een goede basis moeten hebben om dingen in kaart te brengen en hoe
OpenStreetMap te bewerken.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png