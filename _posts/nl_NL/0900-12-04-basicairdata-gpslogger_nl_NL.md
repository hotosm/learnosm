---
layout: doc
title: BasicAirData GPS-logger
permalink: /nl_NL/mobile-mapping/basicairdata-gpslogger/
lang: nl_NL
category: mobile-mapping
---

BasicAirData GPS-logger
=======================

> Bijgewerkt op 12-06-2021

![BasicAirData-GPSLogger-002][]

BasicAirData GPS-logger is een eenvoudige app om uw psoitie en uw route op te nemen. Het is een basis en lichtgewicht GPS-tracker, gefocust op nauwkeurigheid, met een oog voor energiebesparing. Deze app is zeer nauwkeurig voor het bepalen van uw hoogte als u de EGM96 automatische hoogtecorrectie inschakelt nij de instellingen. U kunt al uw trips opnemen, ze bekijken in uw favoriete externe programma (wat moet zijn geïnstalleerd) direct vanuit de sporenlijst in de app, en ze op vele manieren delen in KML-, GPX-, en TXT-indeling.

De app is beschikbaar voor apparaten voor Android, gratis en open bron.

De toepassing is gratis te downloaden vanaf [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).<br>
Als alternatief is de APK direct te downloaden vanaf GPSLogger's [GitHub repository](https://github.com/BasicAirData/GPSLogger/tree/master/apk).

Mogelijkheden
--------

![BasicAirData-GPSLogger-000][]

* Opnemen van sporen - de app heeft geen geïntegreerde kaarten
* Een moderne UI met een laag-verbruik donker thema en een interface met tabs
* Opnemen op voor- en achtergrond (Schakel voor Android 6+ alle monitoring van batterijen en optimalisatie voor deze app uit)
* Maken van bladwijzers, ook tijdens opnemen
* Visualisatie van GPS-informatie
* Handmatige correctie van hoogte (toevoegen van een algemene verschuiving)
* Automatische hoogtecorrectie, gebaseerd op NGA EGM96 Earth Geoid Model (moet in de instellingen zijn ingeschakeld)
* Real time statistieken voor spoor
* Sporenlijst in app die alle opgenomen sporen weergeeft
* Visualisatie van uw sporen met behulp van elke geïnstalleerde KML/GPX -weergave, direct vanuit de sporenlist
* Exporteren van sporen naar de map /GPSLogger op uw apparaat, in KML, GPX en TXT
* Delen van sporen, in de indelingen KML, GPX en TXT, via e-mail, Dropbox, Google Drive, FTP, ...
* Metrische, imperiale, of nautische eenheden gebruiken

Basisgebruik
-----------

![BasicAirData-GPSLogger-001][]

Als de GPS-locatie niet actief is op uw telefoon, activeeer die dan. Ga dan naar een open gebied en start GPS Logger.

1. Wacht totdat de app de fix vindt. Indien beschikbaar zal de tab __GPS FIX__  beginnen met het weergeven van de coördinaten van de fix. Op dat moment (indien mogelijk) zou u nog minstens een minuut moeten wachten voordat u doorgaat met de volgende fase om het signaal in staat te stellen te stabiliseren.
2. Klik op de knop __Record__ in het onderste paneel om het opnemen van punten van het spoor te starten. De knop zal rood worden. U kunt op elk moment het proces van opnemen in- en uitschakelen door op die knop te klikken. Aan de bovenzijde van de knop geeft de app het aantal opgenomen punten van het spoor weer.
U kunt naar de tab __TRACK__ gaan om real time de statistieken van uw trip te bekijken.
3. Klik, als uw trip is voltooid, op de knop __Stop__ om het actieve spoor te beëindigen (voltooien). Een dialoogvenster zal verschijnen, klik op __OK__ om te bevestigen.
4. Ga naar de tab __TRACKLIST__  waar u het spoor zult vinden dat u zojuist hebt opgenomen. Tik op het spoor. Er zal een menu verschijnen. U kunt er voor kiezen het spoor op vele manieren te delen, het te bekijken op een geïnstalleerd extern programma, de details van het spoor bewerken, het exporteren naar de map /GPSLogger van uw smartphone, of het verwijderen uit de sporenlijst. De voor exporteren gebruikte indelingen kunnen worden geconfigureerd in het scherm voor de instellingen.

GPX-sporen importeren in bewerker voor OpenStreetMap
--------------------------------------------

Wanneer u gereed bent met het verzamelen van de gegevens in het veld, kunt u de GPX-sporen importeren om te gebruiken in JOSM, iD of een andere bewerker voor OpenStreetMap.
U kunt deze eenvoudige 2-stappen procedure gebruiken:

1. Sla het GPX-spoor op op uw Personal Computer op één van de volgende manieren:
* Ga naar de sporenlijst van GPS Logger, tik op het gewenste spoor en klik dan op __Export__; het GPX-bestand zal wordne gemaakt en opgeslagen in de map /GPSLogger van uw apparaat voor Android (zorg er voor dat de indeling GPX is ingeschakeld in het scherm voor de instellingen). Verbindt dan de telefoon met uw PC met behulp van een USB-kabel en verplaats (of kopieer) uw GPX=sporen naar uw PC met behulp van de bestandsbeheerder;
* Als alternatief kunt u de mogelijkheid __Share__ gebruiken om het bestand naar de PC te versturen (u kunt dat doen via e-mail, FTP, of met behulp van vele diensten voor de  cloud). De mogelijkheden voor het delen zijn afhankelijk van de app's van derde partijen die zijn geïnstalleerd op uw apparaat voor Android;
2. Importeer het GPX-spoor in uw bewerker voor OpenStreetMap: gebruiken van de GPX-sporen met de bewerkers JOSM en iD is zo eenvoudig als het slepen van de bestanden en ze laten vallen in de toepassing (of de browsertab, voor iD)).

Officiële documentatie
----------------------

- Voor meer informatie over deze app kunt u [dit artikel](http://www.basicairdata.eu/projects/android/android-gps-logger/) lezen.<br>
- [Hier](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) vindt u een Getting Started Guide en een overzicht van de instellingen voor de app.<br>
- Problemen met gebruiken of configureren van GPS Logger? Lees de [Frequently Asked Questions](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) page!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg