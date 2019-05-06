---
layout: doc
title: Přehled dat OSM
permalink: /cs/osm-data/data-overview/
lang: cs
category: osm-data
---

Přehled dat OSM
==================


> Tento návod může být ke stažení jako [OSM_Data_Overview_en.odt](/files/OSM_Data_Overview_en.odt) nebo [OSM_Data_Overview_en.pdf](/files/OSM_Data_Overview_en.pdf)  
> Zkontrolováno 2016-09-05

<!--In this section we'll consider how OpenStreetMap functions, which will help us to understand better how the data is structured, and how we can best utilize it.-->

Jak OSM funguje
--------------
Zvažme, jak funguje OpenStreetMap. Tisíce uživatelů po celém světě nepřetržitě přidávají a upravují mapu, ale co se děje v zákulisí?  

Když vy nebo kterýkoli jiný uživatel provedete změny pomocí softwaru pro úpravy, jako je JOSM nebo iD editor, software komunikuje s centrálním serverem OpenStreetMap a upozorní je na vaše změny. Na tomto serveru je masivní databáze, která obsahuje všechny informace o poloze a atributy o všech geografických prvcích v rámci celé OpenStreetMap.  

Vzhledem k tomu, že OSM je volná a otevřená, je možné, aby si kdokoliv mohl stáhnout všechny údaje z této databáze. Nicméně, protože je tak masivní (*dat je více než 30 GB, i když jsou komprimovaná*), je téměř nemožné pracovat se všemi daty najednou.  

Kvůli tomuto omezení existují různé metody **exportu** a **extrahování** údajů, které jsou zahrnuty v této části. Export znamená konverzi dat OpenStreetMap z jejich původního formátu do formátu, který je pro vás vhodný. To se mírně liší od **extrahování dat**, což znamená vyjmout data z oblasti, kterou si zvolíte. To může také znamenat vytažení specifických funkcí, které chcete z oblasti. Tyto pojmy jsou často používány zaměnitelně. O tomto se dozvíme více v sekci Údaje OSM.  

Použití Geodat
--------------
Pokud nejste zkušený uživatel GIS, je důležité pochopit rozdíl mezi softwarem pro editaci OSM, jako je software JOSM a GIS, jako je například Quantum GIS a ArcGIS.  

Editory, jako je iD editor nebo JOSM, mají jednu základní funkci, na které jsou velmi dobré - usnadňují uživatelům úpravy OpenStreetMap. Nejsou to však softwary určené k analýze nebo databázovému dotazování dat -
tato funkce je nejlépe ponechána na jiné aplikace. GIS software, jako je bezplatný a otevřený zdroj [Quantum GIS (QGIS)](http://www.qgis.org), umožňuje uživatelům vytvářet hezké mapy, dotazovat databázi a analyzovat data a mnoho dalšího. GIS software lze také použít pro editaci geodat, ale mnohem jednodušší je editovat OpenStreetMap s vyhrazenými editory OSM.  

V další kapitole se blížeji podíváme na formáty souborů, které jsou obecně spojeny s OpenStreetMap a geografickými daty. Pak se podíváme na různé způsoby přístupu a manipulace s daty OSM a převedení mezi různými typy souborů.  


Získání dat
-----------------

To je skvělé, ale jak se dostáváte na data, která chcete?  

V této kapitole přecházíme na různé způsoby exportu dat OSM. Budeme se držet základů, ale mějte na paměti, že pro efektivní využití dat budete pravděpodobně potřebovat GIS software,
jako je bezplatná aplikace Quantum GIS.  

Než začneme, pojďme pojmenovat nějakou terminologii. Za prvé, **export** znamená převést data OpenStreetMap z jeho nativního formátu XML do formátu, který je pro vás výhodný. To se mírně liší od **extrahování dat**, což znamená vyjmout data z oblasti, kterou si zvolíte. To může také znamenat vytažení specifických funkcí, které chcete z oblasti. V této kapitole budeme tyto termíny používat často, takže je důležité pochopit rozdíl.  

OSM API
------------
Proces editace OSM funguje díky tomu, co je známé jako rozhraní API, což umožňuje editačnímu softwaru komunikovat s centrálním serverem. Pokud například používáte JOSM a vybíráte oblast, kterou chcete mapovat, je na server odesláno volání API a vyžádá si veškerá data, která existují v oblasti, kterou jste vybrali.  

Ve skutečnosti, když stahujete data v JOSM, **vyjímáte** data z konkrétní oblasti světa. Údaje se pak vám zasílají ve formátu **.osm**, který můžete následně upravit v JOSM. Pokud stáhnete data v JOSM a pak je uložíte, zjistíte, že typ souboru je **.osm**. V další kapitole budeme o tom hovořit více.  
