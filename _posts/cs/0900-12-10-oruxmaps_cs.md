---
layout: doc
title: OruxMaps
permalink: /cs/mobile-mapping/oruxmaps/
lang: cs
category: mobile-mapping
---

OruxMaps
===============

> Zkontrolováno 2016-08-04 a ikdyž je software mírně zastaralý, tak stále funguje a v článku najdete odkaz na originální manuál k softwaru. 

V této sekci se naučíme nastavit OruxMaps, vytvoříme si výchozí body, podíváme se na záznam trasy a exportujeme ho pro použití v JOSM.  

​Instalace OruxMaps
------------------

Nainstalujte si aplikaci z Google Play Store vyhledáním **OruxMaps**, měla by se zobrazit mezi prvními v seznamu.  

![Search OruxMaps in Play Store][]

Klikněte na **Instalovat** a přijměte podmínky používání.  

![Install OruxMaps][]

Gratulujeme! Nyní  máte nainstalováno OruxMaps na svém zařízení!  

Používání OruxMaps
--------------------

Po prvním spuštění aplikace se vám zobrazí podobná notifikace:  

![Running OruxMaps for the first time][]

V OruxMaps si můžete vybrat, jestli chcete používat online nebo offline mapy. Lepší jsou offline mapy, protože nejste závislý na internetovém připojení. OruxMaps vám nabídnou dva zdroje pro stažení offline map. Pokud je již máte, můžete je sem také vložit! Zpočátku může být to množství tlačítek trochu matoucí. Ale není čeho se bát, níže se se s každým z nich seznámíte:  

![Interface overview][]

Zdroj: [OruxMaps manuál anglická verze](http://www.google.com/url?q=http%3A%2F%2Fwww.oruxmaps.com%2Foruxmapsmanual_en.pdf&sa=D&sntz=1&usg=AFQjCNFY7Tk-Gzz9NFKy9WOsnfnn8x3Kwg)  
Tento manuál je nejspíš aktuálnější než tento průvodce a možná je dostupný i v jiných jazycích.  

Mapový podklad si můžete změnit v nabídce **Maps \> Switch Maps**. Poté si vyberte ze dvou možností - chcete-li použít **Online Mapy** nebo radši
**Offline Mapy**. OruxMaps poskytuje spoustu zdrojů Online Map, ze kterých si můžete vybrat, ale to vás můžete stát peníze v závislosti na ceně vašich dat.  Pokud chcete vědět, kam můžete uložit vaše offline mapy, jděte do **Setting \>Maps**. U položky **Maps directory** je uvedena cesta, kam OruxMaps ukládá vaše
offline mapy. Přednastavený je adresář **OruxMaps/Mapfiles** ve vaší vnitřní paměti.   

![Offline maps storage settings][]

Spouštíme záznam trasy
--------------

Předtím než začneme zaznamenávat trasu, nahlédněme do nastavení track/routes (trasy/cesty). První nastavení je **Auto GPX Creation**. Pokud toto nastavení zaškrtnete, OruxMap vám pomůže s vytvořením .gpx souboru ihned po ukončení záznamu trasy (pomocí funkce Stop Tracking). Takže jakmile dokončíte trasu, přejděte do **OruxMaps/Tracklogs** ve své interní paměti, kde najdete své .gpx soubory aniž byste museli exportovat váš track log přes track/routes nastavení. Druhým nastavením je **Ask Track Name**. Vyplatí se pojmenovat si trasu před jejím záznamem, později ji rychleji najdete.  

![Tracklog settings][]

Před spuštěním záznamu si ověřte zda máte zapnutou GPS v zařízení. Žádná funkce v OruxMaps, jako např. **Start GPS** a **Start Rec**, nebude fungovat dokud neaktivujete GPS. OruxMaps vám zobrazí notifikaci, pokud máte zakázanou GPS a přesune vás rovnou do nastavení GPS. Jakmile zapnete GPS, můžete si zjistit svoji pozici pomocí funkce **Start GPS** (1)  v pravém panelu. Jakmile je vaše pozici zaměřena, můžete spustit záznam pomocí  **Start Rec.** (2) v pravém panelu.  

![Start track recording][]

K zastavení záznamu stačí znovu zmáčknout stejné tlačítko (2) v pravém panelu. Jakmile záznam zastavíte, OruxMap uloží záznam trasy do interní databáze. Zároveň k němu máte přístup skrz **Routes** v horní části stránky a poté volba **Manage**. Na tomto místě najdete všechny vaše zaznamenané trasy a konkrétní trasu si zobrazíte zmáčknutím a volbou **Load the Track** (1). Pokud nepoužíváte funkci "Auto GPX creation", můžete vaše záznamy exportovat do různých formátů (GPX, KML, KMZ) výběrem daného záznamu a volbou **Export as** (2).  

![Managing tracklogs][]

Pokud již máte uživatel. účet u OpenStreetMap, můžete své trasy nahrávat přímo z OruxMaps. Předtím než budete moci uploadovat trasy, musíte zadat své uživ. jméno a heslo v nastavení **Setting \> Integration \> OpenStreetMap**. Potom zadejte své uživ. jméno a heslo. Pak už jen stačí použít funkci **Upload to (3)** v manažeru vašich tras.  

Objeví se okýnko, ve kterém zvolíte **OpenStreetMaps** (1), poté si zvolíte **Tracklog typ** (2), přidáte **Popis** (3) a taktéž můžete přidat **Tag** (4). Jakmile jsou všechny informace přidány, zmáčkněte **Upload GPX** (5). Vyskočí oznámení a můžete se na svoji trasu podívat přímo na OpenStreetMap kliknutím na **OK** (6).  

![Uploading tracks to OpenStreetMap][]

Přidáváme výchozí bod
---------------------

![Creating a waypoint][]

Pokud chcete přidat waypoint (výchozí bod), najděte symbol **Waypoint** (1) v horní části obrazovky a klikněte na **Create** (2). Objeví se stránka pro založení waypointu s vyplněným názvem waypointu. Můžete přidat další informace, např. popis a souřadnice zaškrtnutím políčka u slova **Coordinates**. Zmáčkněte **Accept** a waypoint je vytvořen.  

![Waypoint creation settings][]

Pokud se chcete podívat na vaše waypointy, jděte do **Waypoint \>Manage**. Na této stránce můžete měnit jejich vlastnosti, mazat je a exportovat. K zobrazení všech waypointů na **mapě**, vyberte požadované waypointy a klikněte na ikonu "oka" (1), pokud je chcete exportovat, tak zmáčkněte **Export**(2). Všechny exportované waypointy naleznete v interní paměti (v základním nastavení je cesta **oruxmaps/geocaches**).  

![Managing save waypoints][]

Shrnutí
-----------

Gratulujeme! Už víte, jak používat OruxMaps pro průzkum terénu. Napoprvé to bude možná obtížné, ale pokud to překonáte, tak se s touto aplikací určite sžijete.  

[Search OruxMaps in Play Store]: /images/mobile-mapping/oruxmaps_image00.png
[Install OruxMaps]: /images/mobile-mapping/oruxmaps_image03.png
[Running OruxMaps for the first time]: /images/mobile-mapping/oruxmaps_image01.png
[Interface overview]: /images/mobile-mapping/oruxmaps_image09.png
[Offline maps storage settings]: /images/mobile-mapping/oruxmaps_image06.png
[Tracklog settings]: /images/mobile-mapping/oruxmaps_image11.png
[Start track recording]: /images/mobile-mapping/oruxmaps_image02.png
[Managing tracklogs]: /images/mobile-mapping/oruxmaps_image10.png
[Uploading tracks to OpenStreetMap]: /images/mobile-mapping/oruxmaps_image05.png
[Creating a waypoint]: /images/mobile-mapping/oruxmaps_image07.png
[Waypoint creation settings]: /images/mobile-mapping/oruxmaps_image08.png
[Managing save waypoints]: /images/mobile-mapping/oruxmaps_image04.png