---
layout: doc
title: Využití OSM dat v QGIS
permalink: /cs/osm-data/osm-in-qgis/
lang: cs
category: osm-data
---

Využití OSM dat v QGIS
=================


QGIS (dříve Quantum GIS) je plnohodnotný, open-source, geografický informační systém, který funguje napříč platformami. S QGIS můžete přistupovat k aktuálním datům OSM kdykoliv chcete, vyberte značky, které chcete zahrnout a jednoduše je exportujte do snadno použitelné SQLite databáze nebo Shapefile.  

V této kapitole se seznámíme s kroky, které jsou k tomu potřeba. Předpokládáme, že jste si již stáhli a nainstalovali QGIS 3.x. Pokud jste tak ještě neučinili, můžete si jej stáhnout z adresy <http://www.qgis.org/en/site/forusers/download.html>.  

K importu dat z databáze OpenStreetMap použijeme zásuvný modul QuickOSM. Chcete-li tento zásuvný modul nainstalovat, otevřete dialog Spravovat zásuvné moduly z nabídky Zásuvné moduly. Vyhledejte QuickOSM a nainstalujte jej. Tím se do nabídky Vektor přidá položka  

Získávání dat z databáze
---------------------------

Nejdříve získáme aktuální data OSM. To můžeme provést mnoha způsoby. Zásuvný modul QuickOSM nám umožňuje získat velké množství dat, protože využívá rozhraní Overpass api, a nikoli hlavní databázový server OSM.

- Otevřete QGIS a přejděte na Vektor -> QuickOSM -> QuickOSM...  

![quickosm][]

- Zde si můžete vybrat z několika možností - pokud se ve vašem okně již zobrazuje požadovaný rozsah, přepněte kombinované pole, které ve výchozím nastavení zobrazuje "V", na "Rozsah plátna". Pokud máte v QGIS načtenou vrstvu se správným rozsahem, zvolte "Rozsah vrstvy" a vyberte vrstvu, kterou chcete použít. Použití výchozího "In" vyžaduje, aby existoval vztah nebo polygon s tímto názvem. V opačném případě zvolte "Kolem" a uzel s tímto názvem postačí. Kolem tohoto uzlu můžete zvolit obvod (výchozí 1000 m), do kterého se budou načítat data z databáze.

- Klikněte na "Spustit dotaz".  
- Po dokončení stahování budete informováni. Data jsou uložena ve třech dočasných vrstvách, po jedné pro uzly, cesty a polygony.

![quickosm loaded][]


Importování extrahovaných dat
---------------------------

Existuje několik možností, jak získat hotové výpisy z oblasti. <https://wiki.openstreetmap.org/wiki/Planet.osm#Country_and_area_extracts> obsahuje seznam několika webových stránek. Stačí si vybrat soubor **.osm** nebo **.pbf** a stáhnout jej. 

K importu můžete použít QuickOSM kliknutím na "OSM File" v levém panelu. Jakmile použijete QuickOSM, soubory OSM by se měly dostat do QGIS a vy můžete použít běžný import vektorových vrstev:

- Přejděte na Vrstva -> Přidat vrstvu -> Přidat vektorovou vrstvu...  
- V poli zdroj vyberte svůj soubor a klikněte na tlačítko "Přidat".  
- Z tohoto souboru můžete vybrat jeden nebo více typů vrstev.  

![import osm][]  

- Po kliknutí na tlačítko "OK" můžete dialog zavřít a v okně QGIS se zobrazí nové vrstvy.  
  

![import osm loaded][]  


Exportování dat
--------------

Chcete-li vrstvu exportovat, aktivujte její kontextové menu a vyberte Export -> Uložit funkce jako...
Můžete si vybrat ze široké škály formátů včetně Shapefile, GeoJSON, PostgreSQL dump, SQLite. Další možnosti v dialogu se liší v závislosti na zvoleném formátu.

![export][]  

Exportovanou vrstvu můžete znovu importovat zaškrtnutím políčka v dolní části (ve výchozím nastavení je aktivováno).

Práce s daty
--------------------

Nemůžeme vám poskytnout ani hrubý přehled o tom, co všechno můžete s QGIS dělat, a existuje mnoho vynikajících výukových programů a knih, které vás krok za krokem provedou zvládnutím tohoto softwaru. Protože však data OSM importovaná některou z výše popsaných metod mají své značky zakódované zvláštním způsobem, uvádíme příklad, jak s nimi pracovat (pro zvídavé: příkladem je pitcairn-islands-latest ze stránky Geofabrik ke stažení pro Austrálii a Oceánii). Data vektorové vrstvy můžete zkontrolovat pomocí příkazu "Otevřít atributovou tabulku" z kontextového menu vrstvy, v tomto případě vrstvy multipolygonů.

![attribute table][]

Vidíme, že všechny dvojice klíč-hodnota pro značky různých objektů jsou uspořádány ve speciálně formátovaném textovém řetězci v poli "other_tags". Tento způsob ukládání se v databázi PostgreSQL nazývá "hstore" a je standardem pro data OSM.

V tomto příkladu jsou polygony většinou ostrovy, lesy a budovy. Zpočátku jsou vykresleny stejným způsobem, což znamená, že ostrovy zakrývají vše ostatní. Vykreslíme je jinak, abychom získali představu, jak jednotlivé objekty identifikovat. Zbavte se atributové tabulky. Z kontextového menu vrstvy multipolygonů vyberte Vlastnosti a na tomto formuláři se přesuňte na kartu Symbologie. 

![symbology][]

Nejprve změňte typ symbolu z " Jednoduchý symbol" na "Na základě pravidla" pomocí comboboxu v horní části formuláře. 

![symbology rule based][]

Aktuální vykreslení se zobrazí jako pravidlo bez filtrů. Toto pravidlo můžeme upravit kliknutím na ikonu označenou na obrázku výše fialovým čtverečkem.

![symbology edit rule][]

Rádi bychom se k budovám chovali jinak. Zacházet různě znamená, že je třeba specifikovat pravidla podle vlastností vrstev. Vyhodnocení výrazů v QGIS neumí přímo pracovat s řetězci hstore. Na pomoc nám však přichází utilita a výraz filtru uvedený na obrázku `hstore_to_map(other_tags)['building'] is not NULL` převede řetězec 'other_tags' na mapu klíč-hodnota, kde vybereme hodnotu pro klíč 'building'. Podmínka zní, že hledáme objekty, jejichž klíč building není prázdný. Pro budovy můžeme definovat barvu a styl výplně. Po dokončení návrhu pravidla klikněte na tlačítko 'OK'. Nyní můžete přidávat další pravidla kliknutím na ikonu 'plus' ve spodní části karty Symbologie. Přidáme podobná pravidla pro lesy a travnaté plochy. Nakonec bude naše karta Symbologie vypadat takto:

![symbology polygon rules][]

Jako bonus můžeme získat rychlý počet objektů ke změření. Stiskněte nejpravější ikonu v řádku dole (symbol součtu) a vyplní se sloupec "počet", který nám řekne, že v této vrstvě máme 150 budov.

Popisky můžete přidávat podobným způsobem, jako jsme to dělali se symboly. Další záložka "Štítky" se nachází ve vlastnostech vrstvy, hned pod záložkou Symboly. Ve většině případů chcete vytisknout daný název objektu. Do pole pro filtr zadáte výraz podobný těm, které se používají pro symboliku, a jako hodnotu použijete `hstore_to_map(other_tags)['name']`. 

![labels][]

Přiřazením těchto štítků vrstvám multipolygonu a bodů získáte následující obrázek:

![done][]


Shrnutí
-------

Tento proces usnadňuje získání aktuálních OSM dat a jejich stažení do QGIS. Jakmile máte takové vrstvy v QGIS, je možné je uložit jako shapefiles, spouštět filtry, dotazy atd. Podrobnější informace o těchto funkcích naleznete v nabídce Nápovědy v QGIS.  


[quickosm]: /images/osm-data/qgis-quickosm.png
[quickosm loaded]: /images/osm-data/qgis-quickosm-loaded.png
[import osm]: /images/osm-data/qgis-import-osm.png
[import osm loaded]: /images/osm-data/qgis-import-osm-loaded.png
[export]: /images/osm-data/qgis-export.png
[attribute table]: /images/osm-data/qgis-layer-attributes.png
[symbology]: /images/osm-data/qgis-layer-symbology.png
[symbology rule based]: /images/osm-data/qgis-layer-symbology-rule.png
[symbology edit rule]: /images/osm-data/qgis-layer-symbology-edit-rule.png
[symbology polygon rules]: /images/osm-data/qgis-layer-symbology-poly-rules.png
[labels]: /images/osm-data/qgis-layer-labels.png
[done]: /images/osm-data/qgis-complete.png