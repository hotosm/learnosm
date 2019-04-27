---
layout: doc
title: Korekce posunu snímků
permalink: /cs/josm/correcting-imagery-offset/
lang: cs
category: josm
---

Posun snímků
===============

> Tento návod můžete stáhnout jako [correcting-imagery-offset_en.odt](/files/correcting-imagery-offset_en.odt) nebo [correcting-imagery-offset_en.pdf](/files/correcting-imagery-offset_en.pdf)  
> Zkontrolováno 21.9.2015  

Poskytovatelé snímků většinou dělají dobrou práci při georeferencování jejich snímků, ale někdy snímky neodpovídají jejich GPS pozici. Stává se to zejména v kopcovitých či horských oblastech, kde může být obtížné roztáhnout plochý snímek na oblast zemského povrchu s mnoha obrysy. Když stáhnete snímky do JOSM, mohou se nacházet deset i více metrů mimo správnou pozici. Tomu se říká **posun snímků**.  

V následujícím snímku s všimněte dvou různých fotografií oblasti, které byly georeferencovány a spojeny do jedné. Protože proces georeferencování není perfektní, snímky nemusí zapadnout perfektně do sebe.   Proto musí být minimálně jeden nepřesný.  

![Misaligned imagery][]

Řekli jsme si o dvou hlavních způsobech tvorby map - jedním z nich je využití leteckých snímků k identifikaci objektů na zemi a druhým je využití GPS k záznamu tras a waypointů a poté jejich přidání do OpenStreetMap. Výhoda leteckých snímků je zřejmá. Umožňuje vám, maperovi, vidět celou oblast a prohlédnout si různé detaily, zvážit své znalosti dané oblasti a jednoduše zakreslit cesty, budovy a oblasti. Avšak GPS má jednu výhodu, netrpí posunem snímků. GPS vám vždy poskytne správnou zeměpisnou šířku a délku. Jen s jednou vyjímkou, kdy je satelitní signál přerušován vysokými budovami nebo horami, ale chyba je v tomto případě jednoduše identifikovatelná. Prohlédněte si GPS trasu na tomto obrázku, porovnejte ji s vrstvou leteckého snímku Bing pod ní:  

![Aerial vs GPS][]

Potom, co jsme si teď řekli, je jasné, že GPS trasa bude nejspíš přesná a snímek pod ní je mimo pozici. Tak teď přichází otázka: "Jestli je snímek mimo pozici, jak jej nadále můžeme využít ke tvorbě přesných map?"  

Korekce posunu snímků
-------------------------

Odpovědí na předcházející otázku je posun snímků na pozici, ve které odpovídají objektům o kterých víme, že mají správnou lokalizaci, jako např. GPS trasy. V JOSM je jednoduché opravit posun snímků.   

Nejlepší předlohou pro upravení snímků jsou GPS trasy, které představují silnici. A čím více takových tras máte, tím přesněji budete schopni daný snímek zarovnat. Díky tomu, že uživatelé OSM začali nahrávat své GPS trasy do databáze OSM, my si je teď můžeme stáhnout a použít je k zarovnání snímků.  

- Klikněte na tlačítko stáhnout. ![JOSM download button][]{: height="24px"}  

- Zaškrtněte políčko u “GPS trasy” ![Download raw GPS data][]{: height="24px"} ve vrchní části okna. Vyberte oblast a klikněte na “Stáhnout”.  

- Tímto stáhnete do JOSM také vrstvu GPS tras. V závislosti na množství tras, které uživatelé OSM nahráli, můžete vidět několik tras (nebo taky žádnou).   

![Few GPS tracks from OSM][]

- Nebo taky spoustu:  

![Many GPS tracks from OSM][]

- Ke zpřesnění vrstvy leteckých snímků, klikněte na tlačítko “Nastavit posunutí vrstvy mapového podkladu.” ![Adjust imagery offset button][]{: height="24px"}, nacházející se vpravo pod hlavní nabídkou JOSM.  

- Ignorujte vyskakovací okno a pomocí myši uchopte vrstvu snímku a srovnejte ji s GPS trasami. Trasy by měly co nejpřesněji lícovat s cestami na snímku. Číselné informace o posunutí se zobrazí ve vyskakovacím okně.  

![Adjust imagery offset][]

- Pokud jste s posunutí spokojeni, zadejte jméno záložky a klikněte na OK. Později můžete automaticky aplikovat stejné posunutí výběrem *Mapové podklady ‣ Posunutí mapového podkladu* a kliknutím na vaši záložku.  
- Pokud nechcete posunutí uložit, prostě nevkládejte jméno záložky a klikněte na OK.  

Co dělat, když v OpenStreetMap nejsou žádné GPS trasy a vy nemáte GPS? Bez GPS tras je obtížné zarovnat snímky. Pokud jde o relativně prázdnou oblast (není v ní moc zmapovaných objektů), tak byste prostě měli využít snímky tak jak jsou a později upravit data. Je lepší mít mapu oblasti posunutou o 20-30 metrů, než nemít žádnou.   

Pokud jste schopni přesně určit zeměpisnou šířku a délku aspoň jednoho objektu na povrchu, pak můžete zajistit správné umístění snímků tímto způsobem:  

1. Najděte daný objekt na snímku.  
2. Klikněte na zeměpisnou šířku a délku v levém dolním rohu okan JOSM.![JOSM lat lon][]{: height="24px"}  
3. Do dialogového okna zadejte zeměpisnou šířku a délku daného objektu, kterou znáte a přidejte nízké číslo do políčka Zvětšení, třeba 5 nebo 10.   
![JOSM lat lon dialogue][]
4. Tím se mapa přiblíží a vycentruje na vámi zadanou zeměpisnou šířku a délku. Nyní můžete posunout snímek tak, aby vám známý objekt ležel na správné pozici.  

Na druhou stranu, pokud již byla oblast rozsáhle zmapována, pak doufejme, že předchozí mapeři nakreslili objekty ve správných pozicích. V tom případě můžete srovnat snímky s OSM mapou, ale opatrně! Ostatní mapeři nemuseli brát ohled na posunutí snímků a mohli udělat chyby při mapování.  


Databáze posunutí snímků
---------------------------

Nyní víte, jak se postarat o správný posun snímků, ale je tady jeden velký problém, kterému jsme dosud nevěnovali pozornost. Pokud každý uživatel OpenStreetMap posune snímek jiným směrem, tak každý bude mapovat nad trochu jiným pozadím.  

Představte si, že mapujete malé město a uvědomili jste si, že snímek Bingu je posunutý o 15 metrů na sever. Tak si posunete snímek a poté začnete přesně mapovat celé město. Avšak potom chce někdo přidat něco do mapy, tak si stáhne data a nehraje snímky Bingu, ale neví o posunutí snímku, který jste objevili! Budou si myslet, že je něco špatně a všechny objekty ve městě jsou posunuty o 15 metrů a začne je přesouvat, což rozhodně není dobře! To může být pro mapová data města pohromou.  

Z tohoto důvodu je důležité varovat všechny uživatele, že snímky jsou posunuty a měli by si to zkontrolovat před mapováním v oblasti. Aby se vyřešil tento problém, pár chytrých lidí vytvořilo doplňek (plugin), který umožnil uživatelům uložit informace o posunu do databáze a sdílet ho s ostatními. Podívejme se, jak to funguje:  

- Otevřete si Předvolby v JOSM a vyberte záložku Doplňky.![JOSM plugins tab][]{: height="24px"}  

- Najděte doplněk s názvem “imagery_offset_db” a zaškrtněte u něj políčko.  

![Imagery_offset_db plugin][]

- Potvrďte OK. Je potřeba restartovat JOSM k dokončení instalace doplňku.  

Stejně jako si můžete uložit svá posunutí do záložek, tak vám tento doplněk umožní uložit posunutí do centrální databáze a naopak přistupovat k posunutím, které jiní uživatelé vytvořili. Pokud jeden maper vytvoří posunutí snímku v nějaké oblasti, další uživatelé mohou mapovat s přesně stejným posunutím.  

Při používání vrstvy leteckých snímků byste VŽDY měli zkontrolovat, jestli existuje posunutí a když sami nějaké vytvoříte, měli byste ho VŽDY uložit do databáze.  


Stažení posunutí snímků z databáze
------------------------------------

Jakmile přidáte vrstvu leteckých snímků, nový doplněk vás upozorní, že byste si měli zkontrolovat databázi snímků, jestli náhodou neexistuje posunutí. Taktéž uvidíte ikonu s červeným vykřičníkem v horní části okna JOSM, vypadá takhle:  

![Imagery offset notification][]

- Klikněte na tlačítko a doplněk odešle dotaz do databáze, jestli neexistuje posunutí pro vaši oblast.  
- V tomto případě jsme stáhli OSM data a GPS trasy v Kuta, Bali, Indonésie. Mimo to, zde existuje i záznam o posunutí. Klikněte na něj a tím ho aplikujete na mapu.  

![Offset in Kuta bali][]

- Tím se vrstva snímků posune. Ikdyž přidáme něčí posunutí, měli bychom zkontrolovat, zda je správné a sedí na GPS trasy.  

![Comparing imagery offset from GPS tracks][]

- Jde vidět, že vrstva snímků je ve skutečnosti špatně zarovnána. Nechceme, aby ostatní využívali toto posunutí, tak bychom ho měli označit v databázi za nesprávné. Klikněte znovu na tlačítko "Posunutí" (už nebude mít na sobě červený vykřičník).  

![Offsets button][]

- Tentokrát, když se objeví dialogové okno, klikněte pravým tlačítkem na posunutí a vyberte “Prohlásit za zastaralý”.  

![Deprecate offset][]

- Potvrďte kliknutím na "Ano".  
- Je potřeba odůvodnit vaše hlášení k tomuto posunutí.  

![Deprecate reason][]


Přidání posunutí snímků do databáze
------------------------------------

Když jsme označili posunutí tohoto uživatele za "zastaralé", měli bychom přidat lepší posunutí do databáze.  

1. Klikněte na tlačítko "Nastavení posunutí mapového podkladu". ![Adjust imagery offset button][]{: height="24px"}  
2. Zarovnejte snímek s GPS trasami. Klikněte na OK.   
3. Jděte do nabídky *Mapové podklady ‣ Uložit posuv mapového podkladu...*  
![Store imagery offset][]
4. Vložte popis posunutí do dialogového okna.  
![Offset description][]
5. Potvrďte OK. Vaše posunutí bude vloženo do databáze.  
6. Nyní skryjte GPS vrstvu a podívejte se na OSM data nad správně umístěnými snímky.  

![Corrected imagery][]

Ale ne! Někdo zmapoval oblast se špatně posunutými snímky, takže je to všechno špatně zmapováno. Tohle napravit chvíli potrvá.


Webová stránka databáze posuvů
--------------------------------

Více informací o databázi posunutí zjistíte na webu [http://offsets.textual.ru/](http://offsets.textual.ru/). Je tam seznam všech posunů, které byly nahrané do databáze a také se můžete podívat na skvělou mapu, která zobrazuje, kde se posunutí nachází:  

![http://offsets.textual.ru/][]

> Ještě jedna věc, kterou byste si měli zapamatovat. Snímky nemůžou mít všude stejný posun! Toto se týká hlavně kopcovitých a horských regionů. Takže pokud snímky vypadají různě posunuté v různých oblastech, budete je muset znovu posunout.  

Shrnutí
--------

Pokud jste začátečník v OpenStreetMap, nemusíte si s posunutím dělat starosti. Ale pokud uvidíte úpravy jiného mapera, které vypadají nesrovnané se snímky, měli byste zvážit, zda neexistuje posunutí pro danou oblast než začnete přesouvat objekty. Pokud si na to zatím netroufáte, pamatujte si, že vždy je lepší zmapovat oblast s 20-30 metrovým posunem, než ji nezmapovat vůbec. Ale pamatujte si, když narazíte na špatné posunutí, tak v této kapitole najdete postup, jak ho napravit.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










