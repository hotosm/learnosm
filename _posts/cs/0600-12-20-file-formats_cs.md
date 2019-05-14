---
layout: doc
title: Souborové formáty
permalink: /cs/osm-data/file-formats/
lang: cs
category: osm-data
---

Souborové formáty
=============


Stejně jako jakýkoli typ dat existují různé způsoby ukládání geografických dat do počítače. Může být uložen v databázi, která je specializovaným systémem pro ukládání a načítání dat, a ve skutečnosti existují databázové systémy speciálně určené pro ukládání geografických dat. Může být také uložen v tradičních počítačových souborech, i když existuje mnoho různých formátů souborů pro geografické údaje.  

V této části projdeme několik způsobů ukládání geografických údajů, vysvětlení, jak fungují a jak jsou obvykle používány.  

.OSM soubory
-----------

Formát souboru **.osm** je specifický pro OpenStreetMap. Nenarazíte na něj nikde jinde. Pokud jste někdy stáhli data pomocí JOSM a uložili je jako soubor, možná jste si všimli, že soubor je uložen s příponou **.osm**. Pokud jste uživatel GIS, můžete si také všimnout, že není snadné tyto soubory otevřít pomocí softwaru, jako je QGIS.  

Proč jsou tedy data OSM uložena ve formátu souboru, který nikdo jiný nepoužívá? Odpověď zní, že mnoho geografických formátů dat předchází moderní éře internetu a je určeno pro rychlý databázový přístup a dotazování, jako by se dotazovalo na databázi. Údaje OSM jsou na druhou stranu navrženy tak, aby byly snadno odesílány a přijímány přes internet v standardním formátu. Proto jsou soubory **.osm** kódovány ve formátu XML a obsahují geografické údaje ve strukturovaném uspořádaném formátu. Jednoduchý **.osm** soubor bude vypadat takto, pokud se zobrazí v textovém editoru:  

![Sample OSM XML file][]

Získání dat ve formátu **.osm** je snadné - ve skutečnosti to děláte pokaždé, když stahujete data v JOSM, ale použití těchto souborů pro analýzu a návrh map není snadné. Proto je lepší převést data do jiného formátu nebo získat je ze služby, která pro vás převádí data.  

> Původní OSM data jsou obvykle uloženy v **.osm**, ale mohou se také zobrazit v souborech končící na **.bz2** a **.pbf**. Jedná se v podstatě o **.osm** soubory, které byly komprimovány, aby se ušetřilo místo, což může být mimořádně užitečné při práci s velkými datovými soubory.  

Shapefiles
----------

Formát **shapefile** je široce používaný formát pro ukládání vektorových geografických dat. Byl vyvinut společností ESRI, která dělá software ArcGIS, populární sadu aplikací GIS.  

Shapefiles jsou vlastně sbírka několika různých souborů. Například shapefile, který obsahuje data budovy, může mít soubory s následujícími příponami:  

-	budovy.**shp**
-	budovy.**shx**
-	budovy.**dbf**

Shapefiles budou mít často i další soubory, které obsahují další informace.  

Soubor shapefile musí být navržen k tomu, aby obsahoval pouze jeden typ prvku (body, čáry nebo mnohoúhelníky) a každá funkce má atributy obsažené v tabulce. Na rozdíl od systému OpenStreetMap, v němž každý objekt může mít neomezený počet značek, atributy funkcí v shapefile musí odpovídat definované tabulkové struktuře shapefile, která může vypadat takto:  

![Shapefile attributes][]

Data OpenStreetMap lze převést na shapefile. Různé webové stránky poskytují shapefile soubory převedené z dat OSM. Ty jsou popsány v [další kapitole](/cs/osm-data/getting-data).  

Databáze
---------

Mnoho typů informací je uloženo v databázových systémech, které poskytují logický způsob uspořádání a přístupu k datům. Geografické údaje se neliší, ačkoli jsou databáze určené pro geodata specializovány na zvládnutí komplexních funkcí, které geografické údaje vyžadují.  

Data OpenStreetMap jsou často uložena v databázi PostgreSQL s doplňky PostGIS. Tento typ databáze poskytuje rychlý přístup k datům a lze je snadno použít s Mapnikem, softwarem, který vytváří dlaždice mapy používané ve webových mapách. Existuje několik nástrojů pro import surových dat OSM do databáze PostgreSQL.  

Jiný typ databáze je známý jako SQLite, který poskytuje podobnou funkcionalitu jako databáze PostgreSQL, ale je uložen v jediném souboru a nevyžaduje spuštění databázového softwaru. To je trochu obtížnější vytvořit si sám, ale může být snadnější pracovat s malými sadami dat.  

Shrnutí
-------

V následujících kapitolách uvidíme, jak lze stahovat data z různých formátů z internetu a jak můžete sami manipulovat s vlastními daty pomocí různých nástrojů.  


[Sample OSM XML file]: /images/osm-data/example_osm.png
[Shapefile attributes]: /images/osm-data/shapefile_attributes.png