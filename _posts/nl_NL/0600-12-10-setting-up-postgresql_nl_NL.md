---
layout: doc
title: PostgreSQL instellen
permalink: /nl_NL/osm-data/postgresql/
lang: nl_NL
category: osm-data
---

PostgreSQL & PostGIS
====================

> Deze handleiding kan worden gedownload als [PostgreSQL_nl_NL.odt](/files/PostgreSQL_nl_NL.odt) of [PostgreSQL_nl_NL.pdf](/files/PostgreSQL_nl_NL.pdf)  
> Bijgewerkt 10-09-2016

In dit hoofdstuk zullen we laten zien hoe PostgreSQL in te stellen op Windows en hoe een database te maken waarin u geografische gegevens kunt opslaan. We zullen in dit hoofdstuk de open source GIS software QGIS gebruiken, dus het zou nuttig zijn als u daar al bekend mee bent. In het volgende hoofdstuk zullen we zien hoe gegevens van OpenStreetMap in een database van PostgreSQL te importeren.  

PostgreSQL en PostGIS installeren
----------------------------------

In dit gedeelte zullen we PostgreSQL installeren en de ruimtelijke extensie PostGIS toevoegen. Dit is redelijk eenvoudig in te stellen met behulp van de One-Click Installer. Navigeer in uw webbrowser naar de website van PostgreSQL en de downloadpagina <http://www.postgresql.org/download/>  

![postgresql website][]

Hier vindt u de instructies voor installeren voor de verschillende besturingssystemen. Klik op de koppeling “**Windows**”.  
Deze pagina legt uit wat de One-Click Installer zal doen.  Het zal drie verschillende componenten installeren:  

* **PostgreSQL server**:  De software voor de database, de broncomponent  
* **pgAdmin III**: De grafische interface voor het beheren van uw databases  
* **StackBuilder**: Een gereedschap voor het toevoegen van aanvullende toepassingen; we zullen die gebruiken voor het toevoegen van de extensie PostGIS  

Klik op **Download**.  

![postgresql download][]

U zult verscheidene opties voor installeren voor de verschillende versies van de software van PostgreSQL zien. Download de meest recente versie. Bij het schrijven van dit was dat versie 9.3.1. Klik op de knop **Win x86-32**. Dat is het installatieprogramma voor de 32-bit versie voor Windows.  

![postgresql version][]

Voer de One-Click Installer uit als die gereed is met downloaden.  

![install 1][]

Klik op “**Next**” om door de Wizard voor installeren te navigeren. De standaard opties zouden moeten voldoen. U zult een wachtwoord moeten opgeven voor de eerste gebruiker van de database (de gebruiker is postgres). Deze gebruiker heeft rechten als superuser, wat betekent dat zij kunnen doen wat zij willen, dus vergeet het wachtwoord dat u opgeeft niet!  

> U kunt net zoveel databases maken als u wilt met behulp van Postgresql. U wilt misschien een database voor uw geografische gegevens en afzonderlijke databases voor andere projecten waar u aan werkt. En u wilt misschien dat andere mensen andere toegangsrechten hebben tot deze databases. Voor dat doel gebruikt elke database die u maakt het concept van **users** en **roles**. Een database moet altijd eigendom zijn van een gebruiker en normaal gesproken zal die gebruiker een wachtwoord nodig hebben om wijzigingen in de database te maken.  Aanvullende gebruikers kunnen rechten worden gegeven om toegang te krijgen tot een database, en zij kunnen bepaalde rollen krijgen toegewezen. Bijvoorbeeld: u zou misschien een gebruiker willen die alleen informatie uit de database kan lezen, maar die niet kan wijzigen. Of u wilt misschien ene gebruiker die gegevens kan toevoegen, maar geen rechten heeft om ze te verwijderen. Met gebruikers en rollen is dat mogelijk. Maak u voor dit moment niet teveel zorgen hierover, maar onthoud dat uw database eigendom is van een **user**, en om toegang tot de database te krijgen heeft u de naam van die gebruiker en zijn wachtwoord nodig. De eerste gebruiker die we maken (named postgres) is een **superuser**, wat betekent dat zij de rechten hebben om alles te doen met de databases.  

Nadat u zich door de wizard hebt geklikt en de standaard opties voor de configuratie hebt geaccepteerd, zal de wizard alles voor u installeren. Dat kan enkele minuten duren.  

Als het installeren voltooid is, zal de wizard u vragen of u StackBuilder wilt starten, wat het gereedschap is dat ons in staat zal stellen om PostGIS te installeren. Zorg er voor dat het vak is geselecteerd vóórdat u op “**Finish**” klikt.  

![install 2][]

Nu hebben we met succes PostgreSQL geïnstalleerd en moeten we de extensie PostGIS toevoegen. Selecteer, als de wizard van StackBuilder opent, uw installatie van PostgresSQL uit de keuzelijst en klik op **Next**. Het zal er ongeveer zo uitzien:  

![install 3][]

Open de tab “Spatial Extensions” en selecteer het vak naast PostGIS. Bij het schrijven hiervan was 2.1 de meest recente versie van PostGIS.  

![install 4][]

Klik op **Next** om de extension te downloaden en te installeren. Klik, als daarnaar gevraagd wordt, op “**I Agree**” om de termen en voorwaarden te accepteren.  

Het installatieprogramma voor PostGIS zal meer vragen stellen, maar over het algemeen zijn de standaard opties voldoende. U kunt het zeggen de eerste database automatisch te maken, maar we zullen nu leren hoe we dat zelf kunnen doen. U dient het wachtwoord voor postgres op te geven dat u heeft gemaakt toen u PostgreSQL installeerde om het installeren van PostGIS te starten.  

![install 5][]

Als u wordt gevraagd om de omgevingsvariabele voor **GDAL_DATA** te registreren, klik dan op "**Yes**."  

![install 6][]

Klik op “**Close**” en dan op “**Finish**” als het installeren is voltooid.  

Een database maken
--------------------

Nu we alle benodigde software hebben geïnstalleerd, zullen we een database gaan maken. We zullen pgAdmin III gebruiken, wat een grafische databasecliënt is die nuttig is voor het bevragen en aanpassen
van databases.  

![pgadmin3][]

PgAdmin III is de officiële cliënt voor PostgreSQL en laat u de taal SQL gebruiken om uw gegevenstabellen te bewerken. Het is ook mogelijk om databases te maken en te bewerken vanaf de opdrachtregel, maar voor nu is pgAdmin III een gemakkelijke manier om te beginnen.  

Open pgAdmin III. Het zou moeten staan in het menu Start onder Alle programma's -> PostgreSQL 9.3 > pgAdmin III.  

![pgadmin3 start][]

Klik met rechts, in het paneel links onder Servers, waar PostgreSQL staat en klik op “**Connect**.”  

![postgresql connect][]

Voer het wachtwoord in voor de gebruiker postgres dat u heeft gemaakt toen u de software installeerde. Onthoud dat de gebruikersnaam en het wachtwoord zijn vereist zodat u een database kunt maken en er toegang toe kunt verkrijgen.  

![enter password][]

Klik met rechts op **Databases** en selecteer **New Database**...  

![new database][]

U dient een enige informatie op te geven om de nieuwe database te kunnen maken: naam en eigenaar.  Geef, op de tab Properties, de nieuwe database een naam. In dit voorbeeld noemen we onze database gisdb. We zouden onze database ook een eigenaar moeten geven. Omdat we nu slechts één gebruiker hebben, geven we postgres als owner voor de database. (Opmerking: om redenen van veiligheid is het gewoonlijk een goed idee om gebruikers te maken zonder echten als superuser, maar voor nu zullen we hier niet bij stilstaan.)  

![new database form][]

<!-- Op de tab Definition, behoud de standaarden, maar selecteer naast Template template_postgis. Dat zal uw database maken met de juiste ruimtelijke kolommen. -->

Klik op **OK** om de database te maken. U zult nu zien dat uw database wordt vermeld onder “**Databases**.” We dienen nu een opdracht uit te voeren om de database in te schakelen met de extensie PostGIS. Klik op ![sql button][]{: height="24px"} bovenin PgAdmin III.  



Typ in het venster voor de query:  

**CREATE EXTENSION postgis;**  

Klik dan op de knop "**Execute query**."  

![postgis command][]

Voorbeeldgegevens laden (optioneel)
---------------------------

Als tot dusverre alles goed gaat en u bent bekend met QGIS, laten we dan doorgaan en enige gegevens in onze nieuwe database laden. We zullen, om dat te doen, een gereedschap gebruiken dat shapefiles converteert en die in de database laadt.  

Zorg er voor dat uw nieuwe database is geselecteerd in het paneel links en ga naar **Plugins -> PostGIS Shapefile and DBF loader 2.1**.

![shapefile loader][]

- Klik op “**Add File**” en zoek een shapefile op uw bestandssysteem.
- Als u geen shapefiles heeft, kunt u [hier](/files/buildings_sample.zip) een voorbeeld downloaden.
- Als u eenmaal een bestand hebt geselecteerd, klik op “**Import**.” Als alles goed gaat zal de uitvoer lezen als “**Shapefile import completed**.”

![add shapefile][]

Laten we nu de gegevens uit onze database laden in de toepassing QGIS. Als u nog geen QGIS heeft kunt u dat downloaden op de [website van QGIS](http://www.qgis.org/site/forusers/download.html).  

- Open QGIS en klik op de knop ![qgis add postgis button][]{: height="24px"}.  
- Onder “Verbindingen” bovenin, klik op “**Nieuw**.”  
- Geef de nieuwe verbinding een naam. Typ bij database **gisdb** (of welke naam u dan ook aan uw database hebt gegeven). Voer de gebruikersnaam postgres in en uw wachtwoord daaronder.  

![connection settings][]

- Klik op **OK** om de instellingen voor de verbinding op te slaan. Klik dan op “Verbinden” om te verbinden met uw server van PostgreSQL. U moet misschien opnieuw uw gebruikersnaam en wachtwoord opgeven.  
- Als alles goed is gegaan zult u de laag van de shapefile zien (of meerdere lagen met verschillende typen objecten) die u in de hier beschikbare database hebt geladen. Selecteer een laag en klik op “**Toevoegen**” om het aan uw kaart toe te voegen.  

![your data layer][]

Wanneer u de laag toevoegt dient u een coördinatensysteem te selecteren om uw gegevens in weer te geven. Meest waarschijnlijk zult u WGS 84 willen selecteren, wat het coördinatensysteem is dat OpenStreetMap gebruikt.  

> De laag gedraagt hetzelfde als wanneer u een shapefile direct in QGIS had geladen. Het enige verschil is dat wanneer u de laag bewerkt, de wijzigingen zullen worden opgeslagen in uw database.  

Samenvatting
-------

Nu u heeft gezien hoe PostgreSQL en PostGIS in te stellen, als ook hoe een nieuwe database te maken, bent u er klaar voor om de gereedschappen te proberen die ons in staat stellen ruwe gegevens van OSM in een database te laden. We zullen daar eens naar kijken in het [volgende hoofdstuk](/nl/osm-data/osm2pgsql).  



[postgresql website]: /images/osm-data/postgresql-website.png
[postgresql download]: /images/osm-data/postgresql-download.png
[postgresql version]: /images/osm-data/postgresql-version.png
[install 1]: /images/osm-data/postgresql-install-1.png
[install 2]: /images/osm-data/postgresql-install-2.png
[install 3]: /images/osm-data/postgresql-install-3.png
[install 4]: /images/osm-data/postgresql-install-4.png
[install 5]: /images/osm-data/postgresql-install-5.png
[install 6]: /images/osm-data/postgresql-install-6.png
[pgadmin3]: /images/osm-data/pgadmin3.png
[pgadmin3 start]: /images/osm-data/pgadmin3-start.png
[postgresql connect]: /images/osm-data/postgresql-connect.png
[enter password]: /images/osm-data/enter-password.png
[new database]: /images/osm-data/new-database.png
[new database form]: /images/osm-data/new-database-form.png
[sql button]: /images/osm-data/sql-button.png
[postgis command]: /images/osm-data/postgis-command.png
[shapefile loader]: /images/osm-data/shapefile-loader.png
[add shapefile]: /images/osm-data/add-shapefile.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[your data layer]: /images/osm-data/your-data-layer.png







