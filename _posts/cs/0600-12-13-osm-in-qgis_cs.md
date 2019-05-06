---
layout: doc
title: Využití OSM dat v QGIS
permalink: /cs/osm-data/osm-in-qgis/
lang: cs
category: osm-data
---

Využití OSM dat v QGIS
=================

> Tento návod můžete stáhnout jako [Using_OSM_data_in_QGIS_en.odt](/files/Using_OSM_data_in_QGIS_en.odt) nebo [Using_OSM_data_in_QGIS_en.pdf](/files/Using_OSM_data_in_QGIS_en.pdf)  
> Zkontrolováno 19.7.2015

QGIS (dříve Quantum GIS) je plnohodnotný, open-source, geografický informační systém, který funguje napříč platformami. S QGIS můžete přistupovat k aktuálním datům OSM kdykoliv chcete, vyberte značky, které chcete zahrnout a jednoduše je exportujte do snadno použitelné SQLite databáze nebo Shapefile.  

V této kapitole projdeme k tomu potřebnými kroky. Předpokládáme, že jste již stáhli a nainstalovali QGIS 2.x. Pokud jste to ještě neučinili, můžete si jej stáhnout z <http://www.qgis.org/en/site/forusers/download.html>.  

Než bude možné nahrát naši upravenou aktuální OSM vrstvu do QGIS, musíme si nejdříve stáhnout OSM data v neupraveném **.osm** formátu. Poté data převedeme do SQLite databáze, což je nenáročný databázový systém uložený v jednom souboru ve vašem systému. Nakonec vytvoříme vrstvu (nebo více vrstev), která bude obsahovat pouze typy objektů a značek, ke kterým chceme přistupovat. Tyto vrstvy můžeme v QGIS využít ve stávajícím formátu nebo je uložit do jiného, např. shapefile.  

Přístup k datům OpenStreetMap
---------------------------

První si nachystáme nějaké aktuální OSM data. Jde to několika způsoby. Ziskat data z OSM serveru stejným způsobem, jako jsme to udělali v JOSM editoru nelze, protože množství zdrojových dat ke stažení je omezeno - avšak způsob, jak stáhnout velké množství dat existuje, jak
jsme si řekli v předchozích kapitolách [Získání dat OSM](/cs/osm-data/getting-data) a [Použití programu Geofabrik a HOT Export](/cs/osm-data/geofabrik-and-hot-export).  

V tomto tutoriálu využijeme vestavěnou funkci QGIS určenou ke stahování.  

- Spusťte QGIS a jděte do *Vector -> OpenStreetMap -> Download Data...*  
- Zde si můžete vybrat z několika možností - pokud okno již zobrazuje požadovaný rozsah, zaškrtněte políčko vedle možnosti **From map canvas**. Pokud máte v QGIS vloženou vrstvu se správným rozsahem, zvolte **From layer** a vyberte vrstvu, kterou chcete použít. V našem případě vybereme možnost **Manual** (ručně) a vyplníme zeměpisné šířky a délky, které vytvoří **ohraničující rámeček** kolem oblasti, do které chceme přistupovat. Můžete vyplnit šířky a délky, které vás zajímají, ale nezapomeňte, že oblast nemůže být příliš velká neboť nebudete moci stáhnout všechna data.  

![bounding box][]

- Zvolte si název a umístění výsledného souboru s příponou **.osm** a potvrďte OK.  
- Dostanete oznámení, až se stahování dokončí. Dialog zavřete tlačítkem **Close.**  

![download complete][]

- OSM data jsou teď uložena v místě, které jste si vybrali.  

> Tato metoda přístupu k OSM datům je stejná, jako při jejich stahování do JOSM nebo v [openstreetmap.org](http://www.openstreetmap.org). Pro získání většího objemu dat můžete zkusti použít [HOT export site](http://export.hotosm.org) nebo [bbbike.org](http://extract.bbbike.org/). Pamatujte si, že stahujete komprimovaný OSM soubor, nejprve ho bude potřeba rozbalit do formátu **.osm**, než přejdeme na další krok.  


Import dat do SQLite
---------------------------

Teď je na řadě import zdrojového **.osm** souboru do souboru SQLite databáze.  

- Jděte do *Vector -> OpenStreetMap -> Import Topology from XML...*  
- Přes první políčko vyberte váš **.osm** soubor.  
- Název výstupního databázového souboru si můžete změnit.  
- Políčko u **Create Connection...** nechte zaškrtnuté.  

![import dialog][]  

Potvrďte OK.  
- Až proces skončí, zavřete okno pomocí **Close**.  


Vytváření vrstev
--------------

Nakonec si definujeme vrstvy, které budeme v QGIS využívat, upravené přesně podle našich potřeb.  

- Jděte do *Vector -> OpenStreetMap -> Export Topology to SpatiaLite...*  
- Do prvního políčka načtěte databázi, kterou jste vytvořili v předcházejícím kroku.  

![input db file][]  

- V **Export type** vyberte typ objektů, pro které vrstvu vytváříte. V našem příkladu vytváříme vrstvu s polygony.  

![export type][]  

Jestli chcete, změňte si název vrstvy.  

V poli **Exported tags** se děje to nejdůležitější. Tady si vybereme značky, které chceme zahrnout do naší vrstvy. To nám dává flexibilitu v tom, která data chceme zpřístupnit.  

- Kliknutím na "Load from DB" zobrazíte seznam všech dostupných tagů v databázi. Okno si můžete zvětšit tažením za pravý dolní roh, pokud to pomůže. Můžete vidět všechny značky obsažené v těchto datech a také počet objektů u jednotlivých značek.  
- Zaškrtněte políčko u značek, které chcete zahrnout. V našem případě vybere ty, které budou užitečné pro polygony reprezentující budovy.  

![export full][]  

Až budete hotovy, klikněte na OK. Zavřete okno. Vaše vrstva se automaticky přidá.  

![cairo polygons][]  

Klikněte pravým tlačítkem na vrstvu a vyberte **Open Attribute Table**.  

![open attribute table][]  

Zde vidíte, že máme tabulku, která obsahuje pouze atributy, které jsme vybrali.  

![attribute table][]  

Všimněte si, že jsme nevytvořili **pouze** vrstvu budov. Místo toho jsme vytvořili vrstvu, která obsahuje všechny polygony z našich původních dat, ale zahrnuje pouze námi vybrané značky. Aby bylo možné filtrovat tuto vrstvu tak, aby zobrazovala pouze budovy, museli bychom provést dotaz, který filtruje pouze polygony s atributem **building = yes**.


Shrnutí
-------

Tento proces usnadňuje získání aktuálních OSM dat a jejich stažení do QGIS. Jakmile máte takové vrstvy v QGIS, je možné je uložit jako shapefiles, spouštět filtry, dotazy atd. Podrobnější informace o těchto funkcích naleznete v nabídce Nápovědy v QGIS.  


[bounding box]: /images/osm-data/bounding_box.png
[download complete]: /images/osm-data/download_complete.png
[import dialog]: /images/osm-data/import_dialog.png
[input db file]: /images/osm-data/input_db_file.png
[export type]: /images/osm-data/export_type.png
[export full]: /images/osm-data/export_full.png
[cairo polygons]: /images/osm-data/cairo_polygons.png
[open attribute table]: /images/osm-data/open_attribute_table.png
[attribute table]: /images/osm-data/attribute_table.png
