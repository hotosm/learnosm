---
layout: doc
title: Bewerken van gegevens met Osmosis
permalink: /nl_NL/osm-data/osmosis/
lang: nl_NL
category: osm-data
---

Bewerken van gegevens met Osmosis
===============================

> Deze handleiding kan gedownload worden als [osmosis_nl_NL.odt](/files/osmosis_nl_NL.odt) of [osmosis_nl_NL.pdf](/files/osmosis_nl_NL.pdf)  

**Osmosis** is een krachtig gereedschap voor de opdrachtregel voor het bewerken en verwerken van ruwe gegevens voor **.osm**. Het wordt vaak gebruikt voor het verwerken van grote gegevensbestanden, voor het splitsen van bestanden van OSM in kleinere stukken, en voor het toepassen van een wijzigingenset om een bestaand bestand bij te werken.  

Er zijn veel fantastische functies beschikbaar met Osmosis, en u kunt over elk daarvan in detail lezen op de [Wiki](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41). Echter, veel van de functies zijn nogal complex en moeilijk te begrijpen, in het bijzonder als u net begint met programma's voor de opdrachtregel en OpenStreetMap. Dit hoofdstuk dient als introductie voor Osmosis, het installeren op Windows, en beginnen met een basisopdracht voor Osmosis.  

Osmosis installeren
----------------

Net zoals met osm2pgsql in het vorige hoofdstuk, dienen we **osmosis** te downloaden en in te stellen zodat we het vanaf de opdrachtregel kunnen uitvoeren. Het proces hiervoor is zeer soortgelijk aan dat van osm2pgsql.  

U zult ook enige ruwe gegevens van OSM nodig hebben om mee te werken. Als u de voorbeelden in dit hoofdstuk wilt volgen, download ons voorbeeldbestand dan [hier](/files/sample_osmosis.osm.pbf). U kunt ook een bestand met ruwe gegeven van uw keuze gebruiken.  

Volg deze stappen voor het downloaden en voorbereiden van Osmosis:  

- Download als eerste Osmosis [hier](http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.zip).  
- Pak de map uit en plaats die ergens op uw systeem waar hij niet meer verplaatst behoeft te worden. We zullen de locatie ervan dienen toe te voegen aan het systeempad zodat het kan worden uitgevoerd vanaf de opdrachtregel.  

![unzip it][]

- Klik op het menu Start en typ “omgevingsvariabele.”  

![system path][]

- U zou een optie moeten zien die is genaamd “De omgevingsvariabelen van het systeem bewerken.” Klik daar op.  

![edit variables][]

- Klik op de knop “Omgevingsvariabelen.”  

![env variables][]

- Zoek onderin de variabele genaamd “Path” en klik op “Bewerken...”  

![find path][]

- U dient aan de variabele Path de map toe te voegen waar osmosis.bat is geplaatst.  

![edit path][]

- Voeg een puntkomma toe aan het einde van eerdere map en typ dan het volledige pad van de map in voor osmosis. Als u bijvoorbeeld de map **osmosis-latest** direct in de map **C:\\**  plaatst zou het pad zijn:  
	
      C:\osmosis-latest\bin

- Klik diverse malen op OK om de nieuwe instellingen op te slaan.  
- **osmosis** zou nu moeten functioneren. Laten we dat eens controleren.  
- Open de opdrachtprompt voor Windows. U kunt dat doen door te klikken op het menu Start en in te typen "**cmd**". De toepassing Opdrachtprompt zal tevoorschijn komen en u kunt op Enter drukken of er op klikken.  

![cmd][]

- Typ in het zwarte scherm dat naar voren komt :  

      osmosis

- Als alles correct werkt zou u een bericht zoals dit moeten zien:  

![osmosis test][]

- Als u geen bericht ziet zoals dit en het zegt dat het de toepassing **osmosisl** niet kan vinden, dan zou het kunnen zijn dat de variabele Path niet juist is ingevuld.  

Gegevens filteren
---------------

Osmosis zou nu correct vanaf de opdrachtregel moeten werken. We dienen de werkmap te wijzigen naar de plaats waar we het bestand **sample_osmosis.osm.pbf** hebben geplaatst om bewerkingen te kunnen laten uitvoeren op ons bestand met gegevens.  We hebben, om dingen eenvoudig te houden, dit bestand geplaatst in de **map C:\**.  

- Typ de volgende opdracht en druk op Enter om de werkmap op de opdrachtregel te wijzigen naar de map C:\ :  

      cd C:\
    
- De prompt zou moeten wijzigen en aan moeten geven dat u nu in map C:\ bent.  

![cd command][]

Laten we nu onze eerste opdracht voor Osmosis leren. We zullen een opdracht uitvoeren die alle scholen uit ons grote bestand filtert.  

We dienen, om dit te kunnen doen, Osmosis een aantal dingen te vertellen. We moeten specificeren:  

- een invoerbestand (sample_osmosis.osm.pbf)  
- enkele regels die definiëren wat we willen filteren  
- een uitvoerbestand (we zullen en niet gecomprimeerd .osm-bestand uitvoeren zodat we dat kunnen openen in JOSM)  

De opdracht die we uit zullen voeren is:  

      osmosis --rbf sample_osmosis.osm.pbf --nkv keyValueList="amenity.school" --wx schools.osm

Probeer deze opdracht uit te voeren op de opdrachtregel. Als het voltooid is zou u een nieuw bestand in uw map moeten zien, genaamd **schools.osm**. Als we het nieuwe bestand openen in JOSM, kunnen we zien dat alleen de scholen uit het voorbeeldbestand zijn gefilterd.  

![schools osm][]

Laten we eens stukje voor stukje kijken naar de opdracht die we uitvoerden om te begrijpen hoe het allemaal werkt. Als eerste roepen we de naam van het programma aan.

      osmosis

Vervolgens geven we het invoerbestand op. Onthoud dat dit bestand in een gecomprimeerde indeling is.  **--rbf** is in feite een afkorting voor **--read-pbf-fast**. Osmosis begrijpt dat het bestand dat we na deze vlag toevoegen het bestand is waaruit we willen lezen.  

      --rbf sample_osmosis.osm.pbf

het volgende gedeelte van onze opdracht zegt *--nkv keyValueList="amenity.school"*. U zou kunnen raden dat dit aangeeft dat osmosis alles uit zou moeten filteren dat de tag **amenity=school** heeft. **--nkv** is een afkorting voor **--node-key-value**. Deze opdracht geeft aan dat Osmosis alleen knopen met sleutels en waarden zou moeten uitfilteren die worden opgegeven in de volgende lijst. Aanvullende sets voor sleutels-waarden kunnen worden toegevoegd door er komma's tussen te zetten.  

      --nkv keyValueList="amenity.school"

tenslotte geven we de naam en indeling van het uitvoerbestand op. We gebruiken de vlag **-wx**, wat een afkorting is voor **--write-xml**. Onthoud dat we ook **--wbf** zouden kunnen gebruiken, wat het tegenovergestelde is van **--rbf**, als we de uitgevoerde gegevens ook in de indeling PBF zouden willen hebben.  

      --wx schools.osm

Voorwaarts gaan
---------------

Het aantal verwerkingstaken die met Osmosis kunnen worden uitgevoerd is enorm, en om meer te leren is het het beste om te kijken naar de pagina [Osmosis Detailed Usage](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43) op de wiki.  

Eén nuttige taak is in staat te zijn een groot ruw bestand van OSM op te delen in afzonderlijke delen, ofwel door rechthoeken op te geven of door bestanden met grenspolygonen te maken. U kunt een basis voor dit proces vinden op de [pagina Osmosis Examples](http://wiki.openstreetmap.org/wiki/Osmosis/Examples).  

[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osmosis test]: /images/osm-data/osmosis-test.png
[cd command]: /images/osm-data/cd-command.png
[schools osm]: /images/osm-data/schools-osm.png


