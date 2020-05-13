---
layout: doc
title: BasicAirData GPS Logger
permalink: /cs/mobile-mapping/basicairdata-gpslogger/
lang: cs
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

> Zkontrolováno 2020-05-05

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger je jednoduchá aplikace pro záznam vaší pozice a vaší cesty. Jedná se o základní a nenáročný GPS tracker zaměřený na přesnost, s důrazem na úsporu energie. Tato aplikace je velmi přesná při určování výšky, pokud v nastavení povolíte automatickou korekci nadmořské výšky EGM96. Můžete zaznamenávat všechny své cesty, prohlížet si je v preferovaném externím prohlížeči (musí být nainstalován) přímo ze seznamu stop v aplikaci a sdílet je několika způsoby ve formátu KML, GPX a TXT.

Aplikace je dostupná zdarma pro zařízení Android a jako open source.

Aplikaci lze zdarma stáhnout z [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).<br>
Alternativně můžete stáhnout APK přímo z [GitHub repository](https://github.com/BasicAirData/GPSLogger/tree/master/apk) GPSLogger.

Funkce
--------

![BasicAirData-GPSLogger-000][]

* Záznam stopy - aplikace nemá integrované mapy
* Moderní UI v tmavých barvách s nízkou spotřebou a tabulkovým rozhraním
* Nahrávání v popředí i na pozadí (V systému Android 6+ vypněte všechna monitorování a optimalizace baterie pro tuto aplikaci)
* Vytváření POI během záznamu trasy
* Vizualizace GPS informací
* Ruční korekce nadmořské výšky (přidání celkového posunu)
* Automatická korekce nadmořské výšky založená na modelu NGA EGM96 Earth Geoid (musí být zapnuta v nastavení)
* Statistiky stopy v reálném čase
* Zobrazení seznamu zaznamenaných stop přímo v aplikaci
* Zobrazení vašich stop pomocí jakéhokoliv KML/GPX prohlížeče, přímo z jejich seznamu
* Export stop ve formátu KML, GPX, a TXT do adresáře /GPSLogger ve vašem zařízení
* Sdílení stop ve formátu KML, GPX, a TXT přes E-mail, Dropbox, Google Drive, FTP, ...
* Používá jednotky metrické, britské, nebo námořní

Základy používání
-----------

![BasicAirData-GPSLogger-001][]

Nemáte-li zapnutou GPS v mobilu, zapněte ji. Pak jděte na prostranství a zapněte GPS Logger.

1. Počkejte, až aplikace získá vaši pozici. Jakmile je k dispozici, v záložce **GPS FIX** se začnou zobrazovat souřadnice. V tomto okamžiku (pokud je to možné) vyčkejte alespoň další minutu, než budete pokračovat další fází, aby se signál stabilizoval
2. Klikněte na tlačítko **Trackpoints** na dolním panelu a začněte zaznamenávat body stopy. Tlačítko zčervená. Proces nahrávání můžete kdykoli zapnout a vypnout kliknutím na toto tlačítko. Na tlačítku se zobrazuje počet zaznamenaných bodů stop.
Můžete přejít na záložku **TRACK** a zobrazit v reálném čase statistiky vaší trasy.
3. Po dokončení cesty klepněte na malou fajfku **V** v pravém horním rohu a dokončete (ukončete) aktivní stopu.
4. Přejděte na záložku **TRACKLIST**, kde najdete právě zaznamenanou stopu. Vyberte ji. Zobrazí se nabídka. Můžete ji sdílet mnoha způsoby, zobrazit ji pomocí nainstalovaného externího prohlížeče, exportovat ji do složky /GPSLogger ve smartphonu nebo ji odstranit ze seznamu stop. Formáty použité pro export lze konfigurovat v nastavení

Import GPX stop do editoru OpenStreetMap
--------------------------------------------

Po dokončení sběru dat v terénu můžete importovat GPX stopy pro použití v JOSM, iD nebo jiném editoru OpenStreetMap.
Tento jednoduchý postup se skládá ze 2 kroků:

1. Uložte GPX stopu do svého osobního počítače jedním z následujících způsobů:
* Otevřete si seznam GPS stop, klepněte na požadovanou stopu a poté na **Export**; soubor GPX bude vytvořen a uložen ve složce / GPSLogger ve vašem zařízení Android (ujistěte se, že je v nastavení aktivován formát GPX). Poté připojte telefon k počítači pomocí kabelu USB a přesuňte (nebo zkopírujte) GPX stopu do počítače pomocí Správce souborů;
* Jako alternativu můžete použít funkci **Share** k odeslání souboru do počítače (můžete to provést prostřednictvím e-mailu, FTP nebo pomocí mnoha Cloudových služeb). Možnosti sdílení závisí na aplikacích třetích stran nainstalovaných ve vašem zařízení s Androidem;
2. Vložte GPX stopu do editoru OpenStreetMap: import GPX stop do editoru JOSM a iD je snadný, stačí přetáhnout soubory do aplikace (nebo do záložky prohlížeče u iD editoru).

Oficiální dokumentace
----------------------

- Více informací k této aplikaci si můžete přečíst v [tomto článku](http://www.basicairdata.eu/projects/android/android-gps-logger/) (anglicky).<br>
- [Tady](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) naleznete průvodce pro začátečníky a přehled nastavení v aplikaci (anglicky).<br>
- Máte problém s používáním nebo nastavením GPS Loggeru? Přečtěte si stránku [Často kladené otázky](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) (anglicky)!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.cs.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg