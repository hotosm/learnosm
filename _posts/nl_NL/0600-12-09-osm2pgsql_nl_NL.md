---
layout: doc
title: osm2pgsql
permalink: /nl_NL/osm-data/osm2pgsql/
lang: nl_NL
category: osm-data
---

osm2pgsql
==========


In het vorige hoofdstuk hebben we gezien hoe Postgresql met PostGIS in Windows in te stellen en hoe een database in te stellen en die te laden met gegevens uit een shapefile. U zou, om de gegevens van OpenStreetMap in een database te krijgen, de gegevens op moeten halen in de indeling shapefile en de shapefile-lader moeten gebruiken, maar dit zou misschien niet alle gegevens ophalen die u wilt. In dit hoofdstuk zullen we leren hoe **osm2pgsql** te gebruiken, een programma voor de opdrachtregel voor het laden van ruwe gegevens van OSM in een database van PostGIS.  

We zullen door de stappen gaan die nodig zijn om osm2pgsql op Windows in te stellen, hoewel de stappen ruwweg hetzelfde zijn op een ander besturingssysteem, er van uitgaande dat u uw database9s) voor PostGIS correct hebt ingesteld.  

osm2pgsql ophalen
-------------

Navigeer, om de versie voor Windows van osm2pgsql te downloaden, in uw webbrowser naar <https://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Download het bestand genaamd **osm2pgsql.zip**  
- Pak het bestand uit op uw systeem. U zou de uitgepakte map moeten verplaatsen naar een locatie waarvandaan u het later niet meer behoeft te verplaatsen, omdat we de locatie ervan moeten toevoegen aan het systeempad.  

![unzip it][]

- In de map osm2pgsql die u heeft uitgepakt staat een bestand genaamd osm2pgsql.exe. Dit is een programma dat we zullen uitvoeren om de gegevens te importeren, maar om Windows dat te laten vinden, moeten we de locatie ervan toevoegen aan het systeempad. Klik op het menu Start en type “omgevingsvariabelen.”  

![system path][]

- U zou een optie moeten zien die is genaamd “De omgevingsvariabelen van het systeem bewerken.” Klik daar op.  

![edit variables][]

- Klik op de knop “**Omgevingsvariabelen**”  

![env variables][]

- Zoek onderin de variabele genaamd “**Path**” en klik op “**Bewerken...**”  

![find path][]

- U dient aan de variabele Path de map toe te voegen waar osm2pgsql.exe is geplaatst.  

![edit path][]

- Voeg een puntkomma toe aan het einde van eerdere map en typ dan het volledige pad van de map in voor osm2pgsql.exe. Als u bijvoorbeeld de map **osm2pgsql** direct in de map **C:\\**  plaatst zou het pad zijn:  
	
**C:\osm2pgsql\Win32**  

- Klik diverse malen op OK om de nieuwe instellingen op te slaan.  
- **osm2pgsql** zou nu moeten functioneren. Laten we dat eens controleren.  
- Open de opdrachtprompt voor Windows. U kunt dat doen door te klikken op het menu Start en in te typen "**cmd**". De toepassing Opdrachtprompt zal tevoorschijn komen en u kunt op Enter drukken of er op klikken.  

![cmd][]

- Typ in het zwarte scherm dat naar voren komt :  

**osm2pgsql**

- Als alles correct werkt zou u een bericht zoals dit moeten zien:  

![osm2pgsql test][]

- Als u geen bericht ziet zoals dit en het zegt dat het de toepassing **osm2pgsql** niet kan vinden, dan zou het kunnen zijn dat de variabele Path niet juist is ingevuld.  

Ruwe gegevens van OSM ophalen
---------------------
Vóór we **osm2pgsql** kunnen uitvoeren hebben we enige ruwe gegevens van OSM nodig om in een database te importeren. Als u nog geen **.osm**-bestand heeft dat u kunt gebruiken, probeer dan een bestand te downloaden van <https://mapzen.com/data/metro-extracts/>. Deze site host veel extracten uit OSM voor verschillende steden. Zoek een stad om te importeren en download het PBF-bestand daarvoor. PBF-bestanden zijn gecomprimeerde versies van de normale **.osm**-bestanden. U kunt elk van de services voor extracten gebruiken die zijn vermeld in het hoofdstuk over [Gegevens van OSM ophalen](/nl_NL/osm-data/getting-data), als u de ruwe gegevens voor een ander gebied zou willen hebben.  

Het Style-bestand ophalen
------------------
**osm2pgsql** vereist het gebruik van een aangepast stijlbestand om te definiëren welke tags moeten worden opgenomen in de database bij het importeren in de database. U kunt het standaard stijlbestand [hier](/files/default.style) downloaden.  

De gegevens importeren
-------------------
Open PgAdmin III en maak een nieuwe database genaamd **osm**, net zoals u deed in het vorige hoofdstuk. We zullen, om de gegevens te importeren, het programma **osm2pgsql** uitvoeren via de opdrachtregel. 

- Klik op het menu Start en typ "cmd" en Enter om de Opdrachtprompt te openen.  

![command prompt][]

Hier zullen we de toepassing **osm2pgsql** uitvoeren met verscheidene opties. We dienen het tenminste te voorzien van:  

- de locatie van het gegevensbestand van OSM  
- De naam van de database en de gebruikersnaam van de database  
- Het stijlbestand dat de tags van OSM definieert die zullen worden geïmporteerd in de database  

We hebben ons bestand van OSM geplaatst in de map **C:\\** om dit eenvoudiger te maken.  

- Typ de volgende opdracht, vervang de locatie van het bestand van OSM en het stijlbestand door dat van uw eigen bestanden.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Druk op Enter. Als alles goed gaat zou het proces moeten worden uitgevoerd. Het zou enkele minuten kunnen duren voordat alle gegevens in de database zijn geladen.  

![osm2pgsql output][]

- Als uw ruwe bestand van OSM erg groot is, zou u misschien extra geheugen toe moeten wijzen aan het importproces van osm2pgsql. Voeg, om dit te doen, het volgende toe aan de opdracht:  

      --cache 600

Testen
-----------

We kunnen testen of de import met succes is voltooid en de gegevens in onze database bekijken met behulp van QGIS.  

- Open QGIS en klik op de knop "PostGIS-laag toevoegen". ![qgis add postgis button][]{: height="24px"}

- Onder “Verbindingen” bovenin, klik op “**Nieuw**.”  
- Geef de nieuwe verbinding een naam. Typ bij database **osm** (de naam van uw database).  
- Voer de gebruikersnaam postgres en uw wachtwoord hieronder in.  

![connection settings][]

- Klik op **OK** om de instellingen voor de verbinding op te slaan. Klik dan op “Verbinden” om te verbinden met uw server van PostgreSQL.  
- Klik vervolgens op "public" om alle lagen (tabellen) in uw database te zien. Merk op dat osm2pgsql een afzonderlijke tabel maakt voor verschillende typen objecten - punten, lijnen en polygonen. Het maakt ook een tabel roads, die alleen belangrijke wegen bevat.  

![postgis layers][]

- Selecteer één of meer lagen en klik op "Toevoegen." Kies, indien daarnaar gevraagd, WGS84 als het CRS.  
- Als alles goed is gegaan zult u de door u geselecteerde lagen in QGIS zien weergegeven.  

![osm in qgis][]

> Als u kijkt naar de attributentabellen van de lagen, zult u de attributen zien die zijn verbonden met tags van OSM. De specifieke tags die worden geïmporteerd zijn gedefinieerd gedurende het proces van importeren van **osm2pgsql**. Om specifieke tags, die niet standaard zijn opgenomen, toe te voegen, kunt u het *style*-bestand bewerken waarnaar osm2pgsql verwijst om het gegevensschema te definiëren.  


Samenvatting
-------

Wanneer u gegevens van OpenStreetMap wilt importeren in uw eigen database, is **osm2pgsql** een fantastisch gereedschap. Het kan bijzonder nuttig zijn wanneer u de meest up-to-date gegevens van OSM wilt hebben en de attributen wilt aanpassen die u wilt, of bij het werken aan meer complexe projecten.  

Een ander gereedschap voor importeren dat recent is ontwikkeld, is genaamd [imposm](http://imposm.org/), en biedt enkele verbeteringen op het gebied van snelheid en andere boven osm2pgsql, hoewel het op het moment van schrijven andere sleutelfuncties ontbeert, die werden beloofd in imposm versie 3.  

Voor meer informatie over osm2pgsql, bekijk de wiki van OSM - <https://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
