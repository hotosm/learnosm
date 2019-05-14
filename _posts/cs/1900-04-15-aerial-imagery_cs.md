---
layout: doc
title: Letecké snímky
permalink: /cs/josm/aerial-imagery/
lang: cs
category: josm
---

Letecké snímky
================

> Zkontrolováno 2015-09-21  

Trasování snímků je snadný a výkonný způsob, jak přispívat k OSM. Použití snímků pro kreslení bodů, linií a tvarů na zemi se nazývá **digitalizace**. To může být často odděleno od aktu shromažďování dat atributů na zemi, což se často nazývá **pozemní ověřování**. Digitalizace snímků může poskytnout kostru map OSM, což usnadňuje lidem v terénu ověření dat. V této kapitole se dozvíme trochu víc o tom, jak fungují letecké snímky.  

O snímkování
-------------

Letecké snímky jsou termínem, který používáme k popisu fotografií, které jsou pořízeny z oblohy. Ty mohou být převzaty z letadel, dronů, vrtulníků nebo dokonce draků a balónů, ale nejčastější zdroj snímků pochází ze satelitů obíhajících kolem Země.  

[V kapitole o GPS](/cs/mobil-mapping/using-gps) jsme se dozvěděli o desítkách satelitů obíhajících kolem Země, které umožňují našim GPS přijímačům identifikovat naši zeměpisnou šířku a délku. Kromě těchto družic GPS jsou také satelity, které fotografují zemi. Tyto fotografie jsou pak manipulovány tak, aby mohly být použity v GIS (mapovacím) softwaru. Bing letecké snímkování se skládá ze satelitních snímků.  

Rozlišení
----------

Všechny digitální fotografie jsou tvořeny pixely. Pokud se přiblížíte velmi blízko na fotografii, zjistíte, že se obraz začne rozmazávat a nakonec uvidíte, že obraz je tvořen tisíci malými čtverci, které mají odlišnou barvu. Je lhostejno zda je fotografie pořízena ruční kamerou, mobilním telefonem nebo družicí, která obíhá kolem Země.  

![Image resolution][]

Rozlišení se vztahuje na počet pixelů na šířku a počtu pixelů na výšku celého obrazu. Více pixelů znamená vyšší rozlišení, což znamená, že na fotografii můžete vidět větší detaily. Rozlišení v ručních kamerách je často měřeno v megapixelech. Čím více megapixelů je schopen váš fotoaparát zaznamenat, tím vyšší je rozlišení vašich fotografií.  

Letecké snímky jsou stejné, s tím rozdílem, že obvykle hovoříme o rozlišení jinak. Měření je důležité s leteckými fotografiemi - proto pixel představuje určitou vzdálenost na zemi. Obvykle popisujeme snímky jako něco jako "dva metry rozlišení obrazu", což znamená, že jeden pixel odpovídá dvěma metrům na zemi. Jeden metr rozlišení bude mít vyšší rozlišení než toto a rozlišení 50 cm by bylo ještě vyšší. To je obecně rozsah snímků, které poskytuje Bing, ačkoli se liší mezi místy a na mnoha místech je horší než dva metry, a v tomto okamžiku je obtížné identifikovat objekty v obraze.  

![Comparison of low and high resolution imagery][]

Čím vyšší je rozlišení leteckého snímku, tím je snazší použít jej při vytváření map.  

Georeferencování
---------------

Každý pixel letecké fotografie má velikost a každý pixel má také umístění. Jak jsme uvedli výše, je to proto, že letecké fotografie jsou georeferencované.  

Stejně jako bod GPS má zeměpisné šířky a délky, stejně tak budou obrazové body v leteckém snímku. Nicméně, stejně jako špatné rozlišení může být komplikací v mapování, tak je mohou přinést i špatně georeferencované snímky.  

Pojďme na okamžik přemýšlet o tom, jak funguje georeferencování a proč je to náročné. Když někdo georeferencuje fotografii, nejprve identifikuje několik pixelů v obrazu, u kterých je známé umístění. Pokud máme čtvercovou fotografii, můžeme identifikovat souřadnice všech čtyř rohů, a tak může být celý obrázek správně umístěn.  

To vše se zdá být poměrně jednoduché, ale zvažte tohle: Země je kulatá; objektivy fotoaparátu jsou kulaté; fotografie jsou ploché a dvourozměrné. To znamená, že když je plochý obraz mapován na kulatou Zemi, vždy dojde k nějakému protahování obrazu a zkreslení. Představte si, že se snažíte vyrovnat pomerančovou kůru. Nebude nikdy pravoúhlá. Kvůli tomuto problému nemusí být všechny pixely v leteckém snímku dokonale umístěny.  

Naštěstí někteří skutečně chytří lidé vymysleli chytré algoritmy pro řešení tohoto problému a tak obrazy, které vidíte na Bingu, jsou docela přesné. Na většině míst nebude vůbec zjevně chyba - a to je určitě v pořádku pro vytváření map. Nejčastěji se nacházejí oblasti, ve kterých jsou snímky špatně umístěny, v kopcovitých horských oblastech. V kapitole [Korekce odsazení obrazu](/cs/josm/correction-imagery-offset) uvidíme, jak tento problém napravit.  

[Image resolution]: /images/josm/orange-resolution.png
[Comparison of low and high resolution imagery]: /images/josm/low-res-high-res.png