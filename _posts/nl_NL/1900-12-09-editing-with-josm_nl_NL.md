---
layout: doc
title: Gegevens uit het veld bewerken
permalink: /nl_NL/josm/editing-with-josm/
lang: nl_NL
category: josm
---

Gegevens uit het veld bewerken
==================


We hebben nu alle bouwblokken voor het in kaart brengen met OpenStreetMap behandeld. In het gedeelte [In kaart brengen met een smartphone, GPS of op papier](/nl_NL/mobile-mapping/) kunt u zien hoe u mobiele gereedschappen gebruikt om een gebied te verkennen en vast te leggen.

In dit hoofdstuk keren we nog een keer terug naar JOSM en kijken we naar een aantal nieuwe concepten die we tot dusverre nog niet hebben behandeld.

Lagen in JOSM
-----------
Als u het tot nu toe heeft gevolgd, is het u opgevallen dat we allerlei soorten verschillende dingen in JOSM kunnen toevoegen. We kunnen gegevens van OSM downloaden, satellietafbeeldingen van Bing toevoegen, GPS-sporen en punten laden en Field Papers toevoegen - wat allemaal zal worden weergegeven in het kaartvenster van JOSM.

Het zal u ook zijn opgevallen dat, elke keer als u iets nieuws toevoegt aan JOSM, een aanvullend item wordt toegevoegd aan het paneel Lagen aan de rechterkant van JOSM. Afhankelijk van wat u hebt geopend zou uw paneel Lagen er ongeveer als volgt uit kunnen zien:

![Layers panel][]

Elk item in deze lijst vertegenwoordigt een andere bron van gegevens die u hebt geopend in uw kaartvenster. In dit voorbeeld is “Data Layer 1” de gegevens van OpenStreetMap die we bewerken. "Field Papers” is de laag die we hebben gemaakt toen we ons Field Paper hebben toegevoegd aan JOSM.

Indien u satellietafbeeldingen van Bing toevoegt, zal een nieuwe laag, genaamd "Bing Sat", in het Lagenpaneel verschijnen.

Het idee van lagen is soms moeilijk te begrijpen. Een goede manier om dat voor te stellen is dat elke laag is als een semi-transparant stuk papier, en dat zij allemaal op elkaar zijn gelegd. Elk stuk papier heeft een bepaald type informatie op zich staan, en zij kunnen op elke manier die u wilt worden geschikt.

Lagen die als verwijzingen worden gebruikt, zoals satellietafbeeldingen, GPS-sporen en Field Papers worden vaak "basislagen" genoemd. De laag met gegevens van OSM is de laag waar u in feite mee werkt.

-   Klik, om een laag te verplaatsen, er op in het paneel Lagen en klik op de pijl naar boven of naar beneden om hem te verplaatsen.

![Layers up down][]

-  Selecteer, om een laag te verbergen, die met uw muis en klik op de knop Weergeven/Verbergen:

![Layers show hide][]

-  U zou moeten zien dat de door u geselecteerde laag verdwijnt uit het kaartvenster. Klik opnieuw op Weergeven/Verbergen en het zal weer verschijnen.
-  U kunt een laag verwijderen door die te selecteren en de knop Verwijderen te gebruiken.

![Layers delete][]

-   Als laatste is het belangrijk te weten dat u alleen de laag kunt bewerken die door JOSM als *actief* wordt beschouwd. Als u de kaart niet in uw kaartvenster kunt bewerken, is dat zeer waarschijnlijk omdat u niet de juiste laag als actief hebt ingesteld. De meeste lagen, zoals GPS-punten, Field Papers en satellietafbeeldingen, kunnen niet worden bewerkt. De enige lagen die kunnen worden bewerkt zijn gegevens van OpenStreetMap, die gewoonlijk zijn genaamd “Gegevenslaag 1”.
-  Selecteer, om een laag actief te maken, die in het paneel Lagen en klik op de knop Activeren:

![Layers activate][]


GPS-gegevens en Veldformulieren gebruiken
-------------------------------
In de hoofdstukken [In kaart brengen met een smartphone, GPS of op papier](/nl_NL/mobile-mapping/) zagen we hoe gegevens te verzamelen met een GPS en Field Papers en hoe die als een laag te laden in JOSM.

Als u eenmaal veldonderzoek hebt gedaan met één van deze gereedschappen, dient u nog steeds de informatie digitaal in OpenStreetMap toe te voegen.

U doet dit met hetzelfde proces dat u eerder hebt geleerd - **downloaden, bewerken, opslaan**. Het verschil is dat, in plaats van alleen satellietafbeeldingen als een basislaag te gebruiken, u ook uw GPS-gegevens, Field Papers, notities, of een combinatie daarvan kunt gebruiken.

-   Laten we er, bijvoorbeeld, eens van uitgaan dat u uw GPS-punten als een achtergrondlaag hebt geladen in JOSM, u een punt op uw GPS hebt met de naam 030, en dat u in uw notitieboek noteerde dat 030 een school is. U zult, om dit punt aan OpenStreetMap toe te voegen, het gereedschap Tekenen selecteren, en dubbelklikken bovenop het punt 030 in uw kaartvenster. Dat zal een punt maken. Ga dan naar het menu Voorkeuzen en zoek naar de voorkeuze voor school. Voer de naam van de school in en klik op “Voorkeuze toepassen”. Doe hetzelfde om lijnen en vormen toe te voegen.

![GPS in JOSM][]

Tags
----
Wanneer u een punt, lijn of vorm tekent, heeft het een locatie, maar geen informatie over wat het is. Met andere woorden: we weten **waar** het is, maar niet **wat** het is. Tot nu toe hebben we items uit het menu Voorkeuzen gebruikt om te definiëren **wat** het is. De manier waarop OpenStreetMap weet **wat** een object is, is door **tags** te gebruiken.

Een tag is als een label dat u aan iets kunt hangen. Als we bijvoorbeeld een vierkant tekenen, is het slechts een vierkant. Maar dan voegen we attributen toe die beschrijven wat het is: di vierkant is een gebouw; de naam van het is “Menara Thamrin”; het gebouw is 16 verdiepingen hoog.

U kunt aan een object net zoveel tags toevoegen als u wilt. Tags worden opgeslagen als paren van tekst, genaamd **sleutels** en de **waarden**. In OpenStreetMap zouden de hierboven bedoelde tags in feite worden geschreven als:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Wanneer u een object in JOSM selecteert, kunt u alle tags, die er aan zijn verbonden, zien in het paneel Eigenschappen aan de rechterzijde. 

![Properties panel][]

### Tags bewerken

U kunt tags uit het paneel Eigenschappen toevoegen, bewerken en verwijderen. Echter, de tags zijn traditioneel vermeld in het Engels en kunnen soms tot verwarring leiden, het is dus vaak gemakkelijker om het menu Voorkeuzen te gebruiken. Wanneer u tags toevoegt of wijzigt, worden de attributen van het object gewijzigd.

-   Selecteer eerst een object om de tags ervan te bewerken.
- Bewerk dan de tags op één van de twee manieren: (1) Gebruik het menu Voorkeuzen, of (2) bewerk de tags direct in het paneel Eigenschappen aan de rechterzijde. 

### Veel voorkomende fout: Taggen van knopen wanneer u lijnen of polygonen wilt taggen

Wanneer u de attributen van een punt bewerkt, zult u eerst het punt selecteren en dan de tags toevoegen, ofwel via het menu Voorkeuzen of direct in het paneel Eigenschappen. Een veel voorkomende fout wordt gemaakt bij het toevoegen van attributen aan een lijn of een vorm. Wanneer u het object selecteert, is het belangrijk dat u
de lijn selecteert, en NIET de punten die de lijn vormen.

Dit komt regelmatig voor, omdat bewerkers in JOSM het gereedschap Selectie gebruiken om een vierkant te trekken rondom een object. Dat zorgt er voor dat alles, zowel de lijn **als ook** de knopen, wordt geselecteerd, en wanneer u tags toevoegt worden zij ook op de knopen toegepast. Zorg er dus voor **alleen** lijnen te selecteren wanneer u daar tags aan wilt toevoegen.

![Nodes mistake][]

OSM-bestanden opslaan
----------------
Wanneer u bewerkt in JOSM, is het altijd een goed idee om in een redelijk korte periode te downloaden, te bewerken en wijzigingen te uploaden. U wilt niet uw gegevens op ene dag downloaden, en dan een paar dagen wachten om uw bewerkingen te uploaden. Wat als iemand anders hetzelfde gebied in die tijd bewerkt? Dat zal leiden tot fouten en conflicten.

Wees niet bang om uw bewerkingen regelmatig te uploaden. Dat zorgt er voor dat uw wijzigingen zullen worden opgeslagen in de database en u zult uw harde werken niet verliezen.

Als u werkt in één enkel gebied, is het een goed idee om de kaartgegevens, elke keer als u wilt bewerken, te downloaden. Voor het geval een andere gebruiker wijzigingen heeft gemaakt. 

Hoewel u altijd zou moeten proberen om gegevens van OSM te downloaden als u van plan bent om te gaan bewerken, en uw wijzigingen regelmatig te uploaden, kunnen er gevallen zijn waarin u de gegevens van OSM op uw computer wilt opslaan. Bijvoorbeeld als u een haperende verbinding met het internet hebt, zou u gegevens willen downloaden, die opslaan, bewerken, en dan later uw wijzigingen weer willen uploaden.

-   Zorg er voor, om een bestand van OSM op te slaan, dat het de actieve laag is in het paneel Lagen. Klik op “Bestand” in het hoofdmenu en klik op “Opslaan”. Kies een locatie voor het bestand en geef het een naam. U kunt het ook opslaan door op deze knop te drukken:

![JOSM save button][]

-  U kunt nu JOSM sluiten en uw gegevens zullen zijn opgeslagen. Wanneer u het bestand opnieuw wilt openen, open dan eenvoudigweg JOSM, ga naar het menu “Bestand”, en klik op “Openen...”

Samenvatting
-------
In dit hoofdstuk hebben we meer in detail gekeken naar de interface van JOSM en iets geleerd over lagen en tags. U zou nu voldoende basis moeten hebben voor het in kaart brengen en bewerken OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png