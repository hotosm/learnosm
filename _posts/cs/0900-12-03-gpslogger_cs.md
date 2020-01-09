---
layout: doc
title: GPSLogger pro Android
permalink: /cs/mobile-mapping/gpslogger/
lang: cs
category: mobile-mapping
---

GPSLogger pro Android
=====================

> Zkontrolováno 2015-12-06  

![GPSLogger][]

Jednoduchá, nenáročná a minimalistická aplikace pro záznam GPS tras pro platformu Android. Jednoduché uživatelské rozhraní, jediným účelem je záznam GPS a spotřebovávat tak co nejméně energie, k tomu možnost ukládat gps trasy do formátu GPX, KML, NEMA nebo textového. Soubory mohou být automaticky nahrány do OpenStreetMap, na OpenGTS server, DropBox, FTP server, HTTP server nebo odeslány na emailovou adresu.  

<https://play.google.com/store/apps/details?id=com.mendhak.gpslogger&hl=en>  

GPSLogger pro Android je zdarma a aktivně vyvíjený open source projekt. Sponzorské dary jsou vítány, podporují další vylepšování aplikace. Pokud se chcete zapojit (např. překladem do jiných jazyků, oznámit chybu, nebo navrhnout vylepšení), přejděte na [repozitář](https://github.com/mendhak/gpslogger).  

> Informace o OpenGTS najdete na stránce [Open GPS Tracking System](http://opengts.sourceforge.net/) project  


Funkce
--------  

* Záznam na základě časového intervalu nebo vzdálenosti  
* Specifické nastavení šetření baterie  
* Filtr přesnosti GPS pro záznam nespolehlivých bodů  
* Volba mezi wifi, vysílačem mobilní sítě a/nebo GPS satelity, jako zdroje informací o umístění.  
* Záznam do GPX, KML, CSV, TXT nebo NMEA souborů s podporou ZIP  
* Britské nebo metrické jednotky zobrazení  
* Automatický start po spuštění systému  
* Může běžet na pozadí  
* Může běžet společně s jinou GPS aplikací  
* Automatické odeslání na email/FTP/DropBox/Google Docs/OpenStreetMap/OpenGTS v intervalech nastavených uživatelem  
* Lze snadno přednastavit textové konfigurační soubory pro distribuci mnoha uživatelům  


Uživatelské rozhraní
--------------------------

![Canvass1][]

Tlačítko **Menu** poskytuje více možností nastavení aplikace.  
**Varianty zobrazení** umožňuje nastavit způsob zobrazení informací na obrazovce.  
Pod tlačítkem **Pomoc** naleznete další informace, jak používat aplikaci. (V nové verzi schováno na konci Menu.)  
Pomocí tlačítka **Anotace** přidáte popis k bodu.  
**Zaznamenat jeden bod** vám umožní ručně přidat waypoint.  
**Odeslání** vám umožňuje vybrat si z různých možností nahrávání logů. Zahrnuje i variantu automatického zasílání na některé z následujících:  

- OpenStreetMap,  
- Google Drive,  
- Google Drive,  
- FTP server,  
- OpenGTS server nebo  
- zaslání logu na emailovou adresu.  

Tlačítkem **Sdílení** můžete nasdílet jeden nebo více záznamů s ostatními lidmi skrze Bluetooth, nebo SMS. Podle toho jaké aplikace máte nainstalované na zařízení, dostanete různou nabídku možností.  


![Canvass2][]

Tlačítko **Spustit zápis** je modré. Když jej zmáčknete, začne nahrávání a změní se na zelené.  
**Souřadnice** zobrazuje poslední zapsaný GPS bod a změní se jakmile jsou k dispozici nové koordináty.  
Ikonka **Satelity** zobrazuje počet připojených satelitů.  
U **Nadmořská výška** se ukazuje nádmořská výška.  
**Doba trvání** je uplynulý čas od zmáčknutí tlačítka start.  
**Vzdálenost** je celková zaznamenaná vzdálenost.  
**Typ souboru** zobrazuje typy logů, které se vytvářejí a **Cesta k souboru** je umístění souboru v zařízení nebo paměťové kartě.  
**Status** indikátor je zelený, když probíhá nahrávání, točí se, když se snaží najít signál.  
**Přesnost** informuje o přesnosti nahrávaných dat, která je ovlivněna přijímačem, polohou, počtem dostupných satelitů, povětrnostními podmínkami nebo překážkami na obzoru.  
**Směr** ukazuje směr pohybu.  
**Rychlost** představuje průměrnou rychlost, kterou se pohybujete.  
**Počet bodů** je počet zaznamenaných bodů od chvíle, kdy jste zmáčkli tlačítko start.  


Menu
--------------------------

![Menus][]

V **Obecné možnosti** najdete nastavení *Spustit při startu*, *jednotky měření* (metrické nebo imperiální), *ladící soubor* a *informace o verzi*.  

![Menus1][]

V **Podrobnosti záznamu** si nastavíte *Souborové formáty* (můžete si vybrat i více formátů), *adresář* cesta k uloženým logům, pravidla pro *nově vytvořené soubory* a *název vlastního souboru*.  

![Menus2][]

![Menus3][]

Pod **Výkon** je schováno nastavení *poskytovatelů lokace*, *načasování*, *filtrů* a *přijímačů*. V nastavení poskytovatelů lokace si můžete vybrat mezi: **GPS** - navigační satelity; **Síť** - přístupové body mobilní síťe; **Pasivní** - GPSLogger si "získává" souřadnice lokace z jiné aplikace a tak šetří baterii.  

![Menus4][]

![Menus5][]

**Automaticky odeslat, email a nahrávání** umožňuje nastavení různých možností nahrávání, jako např. do OpenStreetMap, Google Drive, FTP, Dropbox.  

![Menus6][]

Nahrávání GPS tras je dalším způsobem zapojení do projektu OpenStreetMap. Trasa se skládá ze záznamů vaší lokace v různých časových okamžicích nebo po určité vzdálenosti a to ve formátu zeměpisných souřadnic (délka, šířka, nadmořská výška). Mohou být využity, jako vrstva na pozadí při editaci map a je užitečná pro přidávání prvků do map, podobně jako satelitní snímky.  

#### Nastavení OpenStreetMap

![osm0][]

**Povolit automatické odesílání** povolí automatické odesílání souboru zaznamenané trasy.  
**Autorizovat aplikaci** slouží k udělení práv k nahrávání GPS tras do OSM pomocí vašeho OSM účtu.  
**Viditelnost**, **Popis**, **Štítky** nejsou aktivní, dokud nepovolíte aplikaci nahrávání GPS tras. Tato nastavení se používají pro GPS trasy, které budete nahrávat do OpenStreetMap databáze.  
Když kliknete na *Autorizovat aplikaci*, budete přesměrování do internetového prohlížeče na stránku OpenStreetMap. Pokud nejste přihlášeni, budete k tomu vyzváni.  

![osm2][]

Po přihlášení se vám zobrazí stránka podobná té níže, sloužící k ověření požadavku aplikace a udělení práva k *nahrávání GPS tras*. Klikněte na *Save changes* a tím aplikaci autorizujete.  

![osm3][]

Zpátky do aplikace GPSLogger, obrazovka se mírně změnila, přibylo několik dalších možností.

![osm1][]

Kliknutím na **Zrušit autorizaci** odeberete práva k nahrávání GPS tras na OSM server.  

Položka *viditelnost* obsahuje několik nastavení pro GPS trasy. *Private* trasy jsou sdílené jako anonymní, s neseřazenými body. *Public* trasy se zobrazují v seznamu tras, jako anonymní, neseřazené body. *Trackable* trasy jsou anonymní, s časovými značkami pro seřazené body. *Identifiable* trasy se objeví v seznamu tras a mohou být spojeny s vašim uživatelským jménem a časovou značkou pro seřazené body.  

Doporučené nastavení pro nahrávané GPS trasy je *identifiable*. Data a metadata jsou tak užitečnější pro ostatní mapery. Pokud máte obavy o bezpečnost a osobní údaje, vyberte si vhodnější nastavení, nebo trasy vůbec nenahrávejte.  

Text v *popis* pomáhá ostatním pochopit, jak byla trasa zaznamenána. Trasa zaznamenaná při chůzy bude odlišná od trasy nahrané dronem.  

*Štítek* je krátké slovo, které můžete použít ke spojení trasy s nějakým projektem, místem, nebo událostí.  


Sběr dat
---------------

### Automatizovaný sběr a nahrávání GPS tras

Po správném nastavení může aplikace běžet na pozadí a automaticky zaznamenávat trasy a nahrávat je jednou za den na jakoukoliv z přednastavených služeb. To umožňuje automatický sběr tras z každodenních cest a vytvoření soustavy cest a času cestování pro pozdější mapování nebo analýzu. Toto nastavení způsobí mírné navýšení spotřeby baterie. Je potřeba s tím trochu experimentovat a vybalancovat spotřebu baterie a přesnost GPS tras.  

Příklad nastavení automatického sběru a denní nahrávání na OpenStreetMapy může vypadat následovně:  

#### Obecné možnosti  

* **Spustit při startu** - Zapnuto  

#### Podrobnosti záznamu  

* **Zapisovat do GPX** - Zapnuto  
* **Vytvoření nového souboru** - Jednou za den  

#### Výkon  

* **Interval protokolování** - 5  
* **Ponechat GPS zapnutou mezi odečty polohy** - Zapnuto (Pokud ponecháte vypnuto,  vzniknou "skoky" v GPS trasách, pokaždé když se zařízení snaží získat příjem z GPS satelitů.)  
* **Nezaznamenávat pokud se nehýbu** - Zapnuto  

#### Automaticky odeslat, email a nahrávání  

* **Povolit automatické odesílání** - Zapnuto  
* **Jak často** - Pokud chcete jednou za den, zadejte 1440 minut. Toto nastavení může být mírně problematické, pokud nemáte přístup k datovému připojení nebo wifi, když má proběhnout odeslání. Odpočet začne buď od spustění zařízení nebo od zmáčknutí tlačítka "Spustit záznam", takže pokud ho zapnete ráno, odeslání proběhne ve stejný čas příští ráno.  
* **OpenStreetMap** - Povolte automatické odesílání a dále nastavte, co potřebujete, hlavně se zaměřte na nastavení viditelnosti, pokud máte obavy ohledně ochrany osobních údajů v GPS trasách.  


### Manuální záznam tras

Pro spuštění sběru záznamů (v jednoduchém zobrazení), jednoduše klikněte na modré tlačítko. Rotující kolečko se zobrazí v pravém horním rohu obrazovky, indikující pokus o připojení k satelitům. Zelené kolečko znamená spuštění záznamu.  

Jakmile chcete zastavit záznam dat, klikněte na zelené tlačítko *Ukončit záznam*.  

#### Poznámky  

Poznámku nebo popis k logu přidáte kliknutím na ikonu *Anotace* (Tužka). Tato funkce vám umožní přidat text do popisu nebo poznámky s detaily, které přiřadíte aktuálnímu bodu.  

##### Vyvolání poznámky z notifikačního panelu  

Tlačítko *Anotace* naleznete přímo v Notifikačním panelu Androidu. Vyberte aplikaci ze seznamu notifikací a klikněte na *Anotační* tlačítko.  

![annotate0][]

Poté se zobrazí dialogové okno se vstupním polem, do kterého můžete přidat detailní text k poznámce.

![annotate1][]

#### Intervaly záznamu

Intervaly záznamu jsou odvozeny od času nebo vzdálenosti v menu **Výkon**.  

##### Pomocí času

**Doba před záznamem** je přednastavený na 60 sekund. Můžete to změnit na 5 nebo 10 sekund, pokud zaznamenáváte chůzi místo jízdy ve vozidle. Když jedete autem, můžete nastavit 1 sekundu, aby byl záznam co nejpřesnější.  

##### Pomocí vzdálenosti

**Filtr vzdálenosti** je přednastavený na 0. Můžete nastavit cokoliv jiného, pokud chcete souřadnice zaznamenat po každých X jednotkách od posledního bodu.  


Odesílání tras
------------------

#### do OpenStreetMap

Zmáčkněte tlačítko *Nahrát* a vyberte možnost *OpenStreetMap*. Objeví se dialogové okno, ve kterém si můžete vybrat soubory. Vyberte si kterýkoliv chcete a zmáčkněte *Ok*.  

![upload0][]

#### ostatní možnosti

Prozkoumat můžete i ostatní možnosti, ale na ty se tento průvodce nezaměřuje. Detailnější informace získáte na stránkách projektu GPSLogger for Android.  


Sdílení tras 
---------------

Trasy nebo vaši aktuální pozici můžete sdílet s ostatními lidmi. Možnosti sdílení se mohou v jednotlivých zařízeních nebo aplikacích lišit. Níže je ukázka, jak by mohla obrazovka sdílení vypadat:  

![share0][]


Export tras do editoru OpenStreetMap
--------------------------------------------

Pokud jste ukončili záznam tras, můžete je importovat do JOSM (nebo jiného editoru OpenStreetMap, jako třeba iD).  

Připojte své Android zařízení k počítači (což je možné pomocí datového kabelu, Bluetooth, nebo internetového připojení) a zkopírujte GPX trasy a multimediální soubory, které jste pořídily. V paměti vašem zařízení vyhledejte GPX trasy v adresáři /Android/data/com.mendhak.gpslogger/files  

GPX trasy lze do JOSM nebo iD editoru přidat pouhým přesunutím souborů do okna aplikace (nebo prohlížeče - pro iD).  

Další informace pro uživatele iD, mrkněte do sekce [Nastavení vrstvy pozadí](https://learnosm.org/cs/beginner/id-editor/#nastaven%C3%AD-vrstvy-pozad%C3%AD).  

Pokud používáte editor JOSM, instrukce k využití GPX tras s multimediálními soubory v JOSM mrkněte do sekce [Načtení do JOSM](https://learnosm.org/cs/mobile-mapping/using-gps/#načten%C3%AD-do-josm).  

U ostatních editorů nahlédněte do dokumentace k danému softwaru.  


Nastavení zobrazení
-----------------

Aplikace má tři způsoby zobrazení, ze kterých si můžete vybrat vám vyhovující:

#### Jednoduché zobrazení

![view0][]

#### Detailní zobrazení

![view1][]

#### Velké zobrazení

![view2][]


Shrnutí
-------

Výborně! Právě jste se seznámili s nenáročnou, energeticky úspornou aplikaci do vašeho Android zařízení k záznamu tras, které poté můžete odeslat do OSM, nebo využít ve svém oblíbeném editoru OpenStreetMap.  

GPSLogger pro Android je dalším z nástrojů ke sběru dat v terénu bez specializovaného GPS přijímače. Běžný sběr dat v terénu je možný bez aktivního internetového připojení.  

Nějakou chvíli aplikaci prozkoumávejte a seznamujte se s ní, než začnete pracovat s živými daty.  

Tato sekce představila koncept použití GPSLogger pro Android pro sběr GPS tras, jejich odeslání do OpenStreetMap a přesun do PC.  


Oficiální dokumentace k GPSLogger pro Android
--------------------------------------------

Projekt poskytuje [FAQ](http://code.mendhak.com/gpslogger/#faq) pro nejčastěji kladené otázky.

[GPSLogger]: /images/mobile-mapping/gpslogger_000.en.png
[Canvass1]: /images/mobile-mapping/gpslogger_001.cs.png
[Canvass2]: /images/mobile-mapping/gpslogger_002.cs.png
[Menus]: /images/mobile-mapping/gpslogger_003.cs.png
[Menus1]: /images/mobile-mapping/gpslogger_003a.cs.png
[Menus2]: /images/mobile-mapping/gpslogger_003b.cs.png
[Menus3]: /images/mobile-mapping/gpslogger_003c.cs.png
[Menus4]: /images/mobile-mapping/gpslogger_003d.cs.png
[Menus5]: /images/mobile-mapping/gpslogger_003e.cs.png
[Menus6]: /images/mobile-mapping/gpslogger_003f.cs.png
[osm0]: /images/mobile-mapping/gpslogger_004.cs.png
[osm1]: /images/mobile-mapping/gpslogger_004a.cs.png
[osm2]: /images/mobile-mapping/gpslogger_004b.en.png
[osm3]: /images/mobile-mapping/gpslogger_004c.en.png
[upload0]: /images/mobile-mapping/gpslogger_005.en.png
[share0]: /images/mobile-mapping/gpslogger_006.en.png
[view0]: /images/mobile-mapping/gpslogger_007.en.png
[view1]: /images/mobile-mapping/gpslogger_007a.en.png
[view2]: /images/mobile-mapping/gpslogger_007b.en.png
[annotate0]: /images/mobile-mapping/gpslogger_008.en.png
[annotate1]: /images/mobile-mapping/gpslogger_008a.cs.png