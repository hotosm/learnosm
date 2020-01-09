---
layout: doc
title: Manipulace s daty pomocí Osmosis
permalink: /cs/osm-data/osmosis/
lang: cs
category: osm-data
---

Manipulace s daty pomocí Osmosis
===============================


**Osmosis** je výkonný nástroj, ovládaný pomocí příkazové řádky, k manipulaci a zpracování surových **.osm** dat. Často se používá ke zpracování velkých datových souborů, pro rozdělování OSM souborů na menší části a pro aplikování sad změn na existující soubor.  

Osmosis obsahuje spoustu skvělých funkcí a jejich detailní popis naleznete na [Wiki](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41). Většinou se jedná o funkce poměrně komplexní a těžce pochopitelné, obzvláště pro začátečníky pracující s programy v příkazové řádce a OpenStreetMap. Tato kapitola vás seznámí s Osmosis, pomůže s intalací ve Windows a představí základní příkazy v Osmosis.  

Instalace Osmosis
----------------

Stejně jako u osm2pgsql v předchozí kapitole, je potřeba stáhnout a nastavit **osmosis** tak, abychom jej mohli spustit pomocí příkazového řádku. Nastavení je podebné jako u osm2pgsql.  

Budete taktéž potřebovat nějaká zdrojová data OSM, se kterými budete pracovat. Pokud chcete postuvat podle příkladu v této kapitole, stáhněte si náš ukázkový soubor [zde](/files/sample_osmosis.osm.pbf). Ale můžete si zvolit soubor dat dle vlastního výběru.  

Pomocí následujících kroků si stáhněte a připravte Osmosis:  

- Nejprve si [odsud](http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.zip) stáhněte Osmosis.  
- Rozbalte adresář někam na disk, odkud už se nebude přesouvat. Je potřeba přidat umístění tohoto adresáře do systémové cesty, tak abychom jej mohli spustit z příkazové řádky.  

![unzip it][]

- Klikněte na Start Menu a napište "proměnné prostředí."  

![system path][]

- Měla by se vám zobrazit nastavení pojmenované "Upravit proměnné prostředí systému". Klikněte na něj.  

![edit variables][]

- Klikněte na tlačítko "Proměnné prostředí".  

![env variables][]

- Najděte proměnnou "Path" a klikněte na "Upravit..."  

![find path][]

- Je potřeba přidat adresář, ve kterém je umístěný osmosis.bat.  

![edit path][]

- /Windows 10/: Klikněte na tlačítko **Nový** a vložte celou cestu k adresáři Osmosis. (/Windows 7 a starší/: Přidejte středník na konec původního textu a pak vepište celou adresářovou cestu k osmosis.) Například, pokud jste uložili adresář **osmosis-latest** přímo na **C:\\**, potom cesta bude:  
	
      C:\osmosis-latest\bin

- Klikněte na OK pro uložení nastavení.  
- **osmosis** by mělo fungovat. Pojďme to zkontrolovat.  
- Otevřeme si Příkazovou řádku ve Windows. Klikněte na vyhledávací tlačítko u nabídky Start a napište "**cmd**". Objeví se aplikace Příkazová řádka, tak na ni klikněte, nebo zmáčkněte Enter.  

![cmd][]

- Jakmile se zobrazí černé okno, napište příkaz:  

      osmosis

- Pokud vše správně funguje, měla by se vám zobrazit podobá zpráva:  

![osmosis test][]

- Pokud tomu tak není a oznamuje vám to, že nemůže najít aplikaci **osmosis**, pak jste možná špatně zadali cestu k adresáři v proměnných prostředí.  

Filtrování dat
---------------

Osmosis už by vám mělo běžet v příkazové řádce bez chyby. Abychom mohli provádět operace nad našimi daty, je potřeba změnit umístění pracovního adresáře na místo, kam jsme umístili soubor **sample_osmosis.osm.pbf**. Abychom to zjednodušili, umístili jsme soubor do **C:\ directory**.  

- V příkazové řádce toto nastavení provedete pomocí následujícího příkazu. Napište ho a zmáčkněte Enter:  

      cd C:\
    
- Text v řádku by se měl změnit, indikuje nyní, že jste v adresáři C:\. (Pokud se tak nestalo, zkuste příkazový řádek spustit jako správce).  

![cd command][]

Teď se naučíme náš první příkaz v Osmosis. Ten nám vyfiltruje všechny školy z našeho velkého souboru.  

Aby se tak stalo, musíme Osmosis sdělit několik věcí. Je potřeba specifikovat:  

- zdrojový soubor (sample_osmosis.osm.pbf)  
- několik pravidel, podle kterých se bude filtrovat  
- výstupní soubor (vytvoří se nekomprimovaný .osm soubor, který lze otevřít v JOSM)  

Příkaz ke spuštění zní:  

      osmosis --rbf sample_osmosis.osm.pbf --nkv keyValueList="amenity.school" --wx schools.osm

Zkuste jej spustit v příkazové řádce. Jakmile se proces dokončí, měli bychom mít ve výstupním adresáři nový soubor **schools.osm**. Když jej otevřeme pomocí JOSM, z původní mapy se nám zobrazí pouze školy.  

![schools osm][]

Popišme si příkaz krok po kroku, abychom pochopili, jak funguje. Na prvním místě je název programu.

      osmosis

Následuje zdrojový soubor. Pamatujete si, že tento soubor je komprimovaný formát. **--rbg** je zkratka pro **--read-pbf-fast**. Osmosis tomu rozumí tak, že soubor následující za tímto příkazem je ten, ze kterého chceme načíst data.  

      --rbf sample_osmosis.osm.pbf

Další kousek našeho příkazu říká *--nkv keyValueList="amenity.school"*. Nejspíš jste uhodli, že osmosis má vyfiltrovat všechno s tagem (zančkou) **amenity=school**. **--nkv** je zkratka pro **--node-key-value**. Což znamená, že by Osmosis mělo vybrat pouze body s kombinaci klíčů a hodnot uvedených v následujícím seznamu. Další kombinace key.value oddělte čarkami.  

      --nkv keyValueList="amenity.school"

Nakonec zadáme jméno a formát výstupního souboru. Použijeme zkratku **--wx**, která znamená **--write-xml**. Jde použít i **--wb**, což je protějšek pro **--rbf**, pokud chcete výstupní data opět ve formátu PBF.  

      --wx schools.osm

Pokračujeme dál
---------------

Množství úkolů, které můžeme provádět pomocí Osmosis je obrovské a pokud je chcete více prozkoumat mrkněte na stránku [Osmosis Detailed Usage](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43)(anglicky) na Wiki.  

Jeden příkaz může rozdělit velký zdrojový OSM soubor na menší části, ať už podle definovaných čtverců nebo ohraničujících polygonů. Základní informace se o tomto tématu můžete dozvědět na [stránce s přiklady v Osmosis](http://wiki.openstreetmap.org/wiki/Osmosis/Examples)(anglicky).  

[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path_cs.png
[edit variables]: /images/osm-data/edit-environment-variables_cs.png
[env variables]: /images/osm-data/environment-variables_cs.png
[find path]: /images/osm-data/find-path_cs.png
[edit path]: /images/osm-data/edit-path-variable_cs.png
[cmd]: /images/osm-data/cmd.png
[osmosis test]: /images/osm-data/osmosis-test.png
[cd command]: /images/osm-data/cd-command.png
[schools osm]: /images/osm-data/schools-osm.png


