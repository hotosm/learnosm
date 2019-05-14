---
layout: doc
title: Gereedschappen om mee te bewerken in JOSM
permalink: /nl_NL/josm/josm-tools/
lang: nl_NL
category: josm
---

Gereedschappen om mee te bewerken in JOSM
==================

> Bijgewerkt op 09-06-2017  

- TOC
{:toc}

In de [gids Starten met JOSM](/nl_NL/josm/start-josm/) behandelden we de basisprincipes voor het tekenen in JOSM, maar er zijn vele gereedschappen en technieken die niet worden gedemonstreerd.

Hier zullen we kijken naar enkele basisgereedschappen en beschikbare technieken voor het tekenen van kaartobjecten  in JOSM, en in de volgende hoofdstukken zullen we meer in de diepte kijken naar geavanceerde gereedschappen om te tekenen.

Het voorbeeldbestand ophalen
-------------------

- Indien u de handleiding wilt volgen en oefenen met de gereedschappen van JOSM, download dan [tools_menu_sample.osm](/files/tools_menu_sample.osm). Start JOSM en open het bestand. Het zou er ongeveer zo uit moeten zien:

![tools_menu_sample.osm][]

Gereedschappen voor tekenen
-------------

Als u klikt op het menu "Gereedschappen" boven in JOSM, zult u zien dat er heel veel functies zijn die u kunnen helpen bij het tekenen van lijnen en vormen, en het bewerken van de objecten op de kaart.

JOSM heeft enkele aanvullende gereedschappen om het gemakkelijker te maken lijnen en vormen te tekenen. Deze gereedschappen zijn te vinden in het menu “Gereedschappen” boven in JOSM.

![Tools menu][]

U moet eerst, om de functies in dat menu te kunnen toepassen, een punt of vorm selecteren in het kaartvenster. Het voorbeeldbestand bevat verscheidene elementen die zijn gelabeld met de namen van verschillende gereedschappen in het menu.

### Knopen uitlijnen in een cirkel  

- Probeer één van de elementen in het bestand te selecteren. Ga dan naar het menu Gereedschappen en klik op de functie die wordt geïdentificeerd naast het object dat u heeft geselecteerd. Klik bijvoorbeeld op de slecht getekende cirkel om die te selecteren.

![Align nodes in circle][]

-   Ga vervolgens naar Gereedschappen-> Knopen uitlijnen in een cirkel. De slecht getekende cirkel zal meer rond worden.

Experimenteer met elk van de gereedschappen met behulp van dit voorbeeldbestand. Een beschrijving van enkele van de gereedschappen volgt hieronder.

### Weg splitsen  

Dit stelt u in staat een lijn op te delen in twee afzonderlijke lijnen. Dit is handig indien u verschillende attributen wilt toevoegen aan verschillende delen van een weg, zoals een brug. Selecteer, om deze functie te kunnen gebruiken, een punt in het midden van de lijn die u wilt splitsen, selecteer Weg splitsen uit het menu Gereedschappen, en uw lijn zou in tweeën moeten zijn gesplitst.


### Wegen combineren 

Dit doet het tegenovergestelde van Weg splitsen. Combineren van twee lijnen naar één lijn vereist dat zij één enkel punt delen. Selecteer, om deze functie te kunnen gebruiken, beide lijnen die u wilt combineren. U kunt meer dan één object selecteren door de toets SHIFT op uw toetsenbord ingedrukt te houden en op elke lijn te klikken. Wanneer u beide lijnen hebt geselecteerd, selecteer dan Weg combineren uit het menu Gereedschappen.

![Combine way][]


### Omkeren en combineren  

Indien u wegen combineert die verschillende richtingen hebben, zou u deze waarschuwing kunnen krijgen:

![Reverse and combine][]

Als de wegen zijn verbonden en in dezelfde richting lopen, kies dan "Omkeren en combineren."


### Weg omkeren

Dit zal de richting van de lijn wijzigen. Alle lijnen in OSM hebben een richting die in JOSM wordt weergegeven door de pijlen op de lijn. De richting doet er over het algemeen niet toe, behalve in de gevallen van éénrichtingswegen en rivieren die in een bepaalde richting stromen. In die gevallen zou u de weg moeten omkeren zodat die in de juiste richting loopt.

![Way direction][]

### Weg vereenvoudigen

Als uw lijn teveel punten heeft en u zou hem eenvoudiger willen maken, zal dit enkele punten uit een lijn verwijderen.

![Simplify way][]


### Cirkel aanmaken

Gebruiken van dit gereedschap zal een meer perfecte cirkel maken. Teken een lijn die de diameter van uw cirkel weergeeft en pas dan dit gereedschap toe.

![Create circle][]


### Knopen uitlijnen

Deze functie zal een reeks punten uitlijnen naar een rechte lijn.  Met lange lijnen is het het beste om gedeelten van de uit te lijnen lijn te selecteren. Wees voorzichtig omdat dit de neiging heeft om de lijn enigszins te verschuiven.

![Align nodes in line][]

### Vorm loodrecht maken

Deze functie is bijzonder handig voor het tekenen van regelmatige vormen, zoals gebouwen (**Maar zie ook [JOSM building tools](/nl_NL/josm/josm-more-plugins/)**). Nadat u een gebied hebt getekend zal deze functie het opnieuw vorm geven met rechte hoeken.

![Orthagonalize][]


### Weg losmaken

Dit gereedschap stelt u in staat knopen los te maken die zijn verbonden. Dat is handig indien twee objecten een knoop delen die zij niet zouden moeten delen. Een veel voorkomende fout is bijvoorbeeld een weg die een knoop deelt met de hoek van een gebouw. Natuurlijk lopen wegen gewoonlijk niet door gebouwen, dus is dit een fout en kunt u de objecten van elkaar losmaken.

![Unglue way][]

*De lijn en knoop zullen in feite niet afzonderlijk te zien zijn, totdat u ze verplaatst.*

Sneltoetsen voor toetsenbord
------------------

Wanneer u veel zult gaan bewerken zult u zich realiseren dat u veel tijd kwijt bent met het klikken op menu's en submenu's. JOSM heeft, om dit te vermijden, sneltoetsen voor het toetsenbord voor bijna alles.

Dat betekent dat u in plaats van te klikken op een object en dan door een lang menuproces te gaan, u eenvoudigweg een object kunt selecteren en op een toets op uw toetsenbord kunt drukken.

Alle in het eerdere gedeelte genoemde gereedschappen hebben sneltoetsen, die zijn vermeld aan de rechterzijde van de naam van elk gereedschap in het menu Gereedschappen. Bijvoorbeeld: "O" is de 
sneltoets voor het uitlijnen van knopen in een cirkel. "L" is de sneltoets voor het uitlijnen in een lijn. Het kan soms even duren om de sneltoetsen te leren, maar u zult merken dat het
uiteindelijk een heleboel tijd bespaart.

Hier zijn andere sneltoetsen (in **vet**) wat enkele van de meest belangrijke zijn.

1.  Het gereedschap Selectie activeren - **S**
2.  Het gereedschap Tekenen activeren - **A**
3.  Het gereedschap Zoomen activeren - **Z**
4.  De geselecteerde objecten verwijderen - **Delete**
5.  Inzoomen - **+**
6.  Uitzoomen - **-**


Op schaal brengen en roteren
----------------

Een veel gestelde vraag is hoe een lijn of vorm te draaien nadat die is getekend.

Selecteer het object eerst om het te draaien. Houd **SHIFT+CTRL** ingedrukt op uw toetsenbord. Klik en sleep met de muis om te draaien.

![Rotate demo][]

Volg, om een object op schaal te brengen (het groter of kleiner te maken), hetzelfde proces maar houdt dan in plaats daarvan ALT + CTRL ingedrukt.

Deze instructies worden weergegeven op de informatiebalk aan de onderzijde van JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png