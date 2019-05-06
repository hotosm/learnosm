---
layout: doc
title: JOSM - Aangepaste voorkeuzen maken
permalink: /nl_NL/josm/creating-presets/
lang: nl_NL
category: josm
---

JOSM - Aangepaste voorkeuzen maken
=======================

> Bijgewerkt 20-09-2015  

In het [vorige hoofdstuk](/nl_NL/josm/josm-presets) hebben we gekeken hoe menu's voor aangepaste voorkeuzen kunnen worden toegevoegd aan JOSM. In dit hoofdstuk zullen we behandelen hoe u uw eigen bestanden voor aangepaste voorkeuzen maakt.  

WAARSCHUWING! Dit is een onderwerp voor gevorderden... u bent gewaarschuwd!  

Introductie voor XML
-------------------

We dienen eerst een taal, genaamd XML, te begrijpen om ons eigen menu Voorkeuzen te kunnen maken. Als u al bekend bent met XML kunt u gerust doorgaan naar het volgende gedeelte.  

XML, dat staat voor “Extensible Mark-up Language”, is een computertaal die soortgelijk is aan HTML. Het kenmerkende verschil is dat XML is ontworpen om gegevens te bevatten, niet om ze weer te geven. Veel toepassingen op het internet gebruiken XML om gegevens te verzenden, inclusief OpenStreetMap. XML gebruikt elementen, en elk element kan in zichzelf kind-elementen bevatten. Laten we bijvoorbeeld eens veronderstellen dat we een XML-bestand willen maken dat gegevens bevat over het menu van een restaurant.  We moeten een bronelement maken om alle gegevens over ons menu te kunnen bevatten. Ons bronelement zal een openings- en sluitingstag hebben, zoals dit:

      <menu>
      ... de gegevens die we in ons menu willen opnemen ...
      </menu>

Informatie wordt opgenomen binnen een element, en in elk element kunnen zich meerdere elementen bevinden.  

      <menu>
        <item naam=“Hamburger”>
          <kosten>400</kosten>
          <beschrijving>Heerlijke schijf vlees</beschrijving>
        </item>
          <item naam=“Nasi Goreng”>
          <kosten>200</kosten>
          <beschrijving>Indonesische gebakken rijst</beschrijving>
        </item>
      </menu>

In dit voorbeeld hebben we twee elementen &lt;item&gt; in ons element &lt;menu&gt; geplaatst om twee verschillende items te beschrijven die zijn opgenomen in het menu. Elk item bevat in zich nog twee elementen, &lt;kosten&gt; en &lt;beschrijving&gt;. Bekijk ook hoe we hebben vermeld naam=”Hamburger” binnen de openingstag &lt;item&gt;. Dit wordt een attribuut genoemd, en voegt informatie toe over het element.


### XML terminologie

- **bronelement:** het meest hoog gelegen element van een XML-document, dat beschrijft wat er is opgenomen  
- **element:** een XML-object, geplaatst binnen een openings- en sluitingstag, zoals &lt;item&gt; ... gegevens ... &lt;/item&gt;  
- **tag:** iets dat is opgenomen tussen haakjes, zoals &lt;item&gt;. &lt;item&gt; is de openingstag van een element, en &lt;/item&gt; is de sluitingstag. Verwar dit niet met tags voor OSM tags, die een andere betekenis hebben.  
- **attribuut:** een stukje informatie dat is opgenomen binnen een tag, zoals naam=“Hamburger”  

XML gebruiken om gegevens te bevatten en te verzenden is fantastisch, omdat het eenvoudig is te begrijpen door computers.  


JOSM bestanden voor voorkeuzen
-------------------

Laten we een voorbeeldbestand voor voorkeuzen aan JOSM toevoegen en analyseren hoe het werkt.  

- Download het bestand [sample_presets.xml](/files/sample_presets.xml).  
- Laad het dan in JOSM zoals beschreven in het [vorige hoofdstuk](/nl_NL/josm/josm-presets).  
- Maak een nieuwe laag en een nieuw object.  
- Ga naar het menu Voorkeuzen. Daar zal een nieuw item staan, genaamd "Sample Building." Klik er op.  

![sample building menu][]

Merk op dat het formulier dat verschijnt drie velden heeft, en elk daarvan een andere type invoer accepteert. Het eerste veld, building name, accepteert een teksttekenreeks als invoer. Het tweede, building use, heeft een vak met een keuzemenu. Het laatste veld is een keuzevak, wat betekent dat het slechts één van twee waarden kan bevatten, aan of uit.

![sample presets form][]

Laten we nu eens kijken naar het XML-bestand dat dit formulier voor Voorkeuzen definieert.

- Zoek het XML-bestand op op uw computer en open het met een tekstbewerker. Als u Windows gebruikt kunt u het programma Notepad gebruiken. Als u een meer gemakkelijker te gebruiken bewerker wilt, zou u misschien de gratis toepassing Notepad++ willen downloaden.  
- Het bestand **sample_presets.xml** ziet er zo uit:  

![sample presets file][]

Laten we voor nu de eerste zes regels en de laatste even negeren en focussen op alles tussen de tags &lt;item&gt;.

De eerste regels ziet er zo uit:

      <item name="Sample Building" type="node,closedway">

Dit is de openingstag van een item dat is toegevoegd aan het menu. Het heeft twee attributen, name en type. De name definieert hoe dit zal verschijnen in het menu Voorkeuzen. Het type beperkt deze voorkeuze tot specifieke typen objecten. In dit geval kan de voorkeuze alleen worden toegepast op punten en vormen - met andere woorden knopen en gesloten wegen. Als u dit op een lijn probeert toe te passen zal het niet werken.  

Laten we naar de volgende regel kijken:  

      <label text="Building Form" />

Wanneer u op het menu klikt en het voorbeeldformulier opent, ziet u aan de bovenzijde de tekst "Building Form." Dat is de tekst die is gedefinieerd op deze regel. Dit definieert een element &lt;label&gt;, wat eenvoudigweg tekst weergeeft in het formulier. De tekst wordt gedefinieerd door het attribuut *text="some text"*.  

Ga enkele regels naar beneden en zoek dit:  

      <key key="building" value="yes" />

Dit is één van de tags die zullen worden toegepast op het object dat we hebben geselecteerd. Omdat het het element &lt;key&gt; gebruikt, zal de hier opgegeven tag voor OSM automatisch worden toegepast als deze voorkeuze wordt gekozen. Daarom zal dit object automatisch de tag *building=yes* krijgen.  

De volgende regel is enigszins afwijkend en gebruikt het element &lt;text&gt;.  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

Het element &lt;text&gt; maakt een blanco veld. Wanneer het formulier in JOSM wordt gemaakt, zal de gebruiker in staat zijn het lege veld in te vullen. Omdat het attribuut *delete_if_empty="true"* is ingesteld, zal geen tag worden toegevoegd als de gebruiker dit veld leeg laat.  

Het vak voor het keuzemenu op het formulier wordt gedefinieerd op de volgende regel:  

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" display_values="Residential, Commercial, Industrial"/>

Een vak voor een keuzemenu wordt gedefinieerd door het element &lt;combo&gt;. Net als met het element &lt;text&gt;, definieert het attribuut *key* de sleutel voor de tag. De waarde wordt dan gekozen uit een lijst met mogelijke *values*. Het attribuut *display_values* stelt u in staat om te kiezen om verschillende namen weer te laten geven in het vak van het keuzemenu, wat gemakkelijker zou kunnen worden begrepen dan de waarden van de tags voor OSM.  

Laten we tenslotte nog eens kijken naar de regel die het keuzevak definieert.  

      <check key="building:vacant" text="Is the building vacant?" default="off" delete_if_empty="true" />

Het element &lt;check&gt; definieert - u raadde het al! - het keuzevak. Het attribuut *default="off"* geeft aan dat het keuzevak standaard niet geselecteerd is. De resterende attributen heeft u al eerder gezien.  

Uw eigen bestand voor voorkeuzen maken
------------------------------

De beste manier om uw eigen bestand voor voorkeuzen te maken is door er een te nemen dat al bestaat, en bewerk dat zodat het voldoet aan uw doel. U mag dit voorbeeldbestand vrijelijk bewerken en er mee experimenteren om de basisbeginselen te leren. Onthoud echter dat, elke keer als u het hebt opgeslagen, u JOSM opnieuw zult moeten starten om de wijzigingen te laden.  

Vóórdta u begint met het maken van uw eigen voorkeuzen, dient u zorgvuldig na te denken over de tags die u gaat gebruiken. Nieuwe tags uitvinden is een onderwerp op zich. In het algemeen dient u zoveel mogelijk bestaande tags van OSM te gebruiken, als zij bestaan. De meeste bestaande tags zijn vermeld op de [pagina Map Features op de wiki van OSM Wiki](http://wiki.openstreetmap.org/wiki/Map_Features).  

Dit voorbeeldbestand bevat de meeste elementen die u zult vinden in een bestand voor voorkeuzen voor JOSM - er zijn niet erg veel elementen voor formulieren. Als u zou willen experimenteren met een meer complex bestand voor voorkeuzen, download dan hier het bestand [dhaka_presets.xml](/files/dhaka_presets.xml).  

Aanvullend is een gedetailleerde uitleg van alle mogelijke elementen [hier](http://josm.openstreetmap.de/wiki/TaggingPresets) te vinden.  

Veel succes!  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png