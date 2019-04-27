---
layout: doc
title: JOSM Relace
permalink: /cs/josm/josm-relations/
lang: cs
category: josm
---

Relace
==========

> Tento návod můžete stáhnout jako [josm_relations_en.odt](/files/josm_relations_en.odt) nebo [josm_relations_en.pdf](/files/josm_relations_en.pdf)  
> Zkontrolováno 6.6.2017  

V kapitole [Příručka pro začátečníky](/cs/beginner) jsme si vysvětlili, že existují tři typy objektů, které můžete zakreslit do OpenStreetMap - body (uzly), přímky (cesty) a polygony (uzavřené cesty). Přímky obsahují několik bodů a atributy, které definují to, co reprezentují. Polygony jsou vpodstatě přímky, jen na rozdíl od nich musí končit tam kde začaly, aby vytvořili nějaký tvar.  

V podstatě jsme vám lhali, protože existuje ještě jeden typ objektu v OpenStreetMap a ten se nazývá relace. Stejně jako přímka obsahuje
body, tak se relace skládá ze skupiny objektů (bodů, přímek či polygonů). Pokud se chcete dostat na vyšší úroveň editačních schopností, tak je důležité pochopit relace a vědět jak je správně upravovat.  

Představte si, že chcete mapovat budovu, která má uprostřed nádvoří. Potřebujete nakreslit polygon kolem vnějších stěn budovy a chtěli byste, aby polygon ohraničující nádvoří nebyl součástí budovy. Toto je příklad relace. Ralace může obsahovat několik polygonů - a atributy budovy by měli být spojené s relací, nikoliv s polygony.  

![An example of a multipolygon][]

Ralace se využívá k reprezentaci všeho, co je potřeba definovat ve skupině objektů. Dalším příkladem jsou trasy autobusů (skupina přímek), dlouhé a komplexní objekty (řeky a silnice), nebo mnohonásobné plygony, které jsou součástí jednoho místa (budovy univerzity).  

Jsou čtyři hlavní typy relací, se kterými se můžete setkat v OSM: multipolygony, cesty, hranice a zákazy ( např. zákaz odbočení doleva). V této kapitole si řekneme o multipolygonech a cestách.  

Vytváření relací v multipolygonech
-------------------------------

Pojďme si ukázat, jak vytvořit relaci v multipolygonu podobném tomu níže.  

- Nakreslete si svůj tvar. V tomto případě máme tři polygony - jeden vnější obdélník a dva malé.

![Multipolygon ways][]

- Označte všechny polygony. Připomenu, že víc objektů se označí přidržením klávesy SHIFT a klikáním na ně.  
- Vyberte z hlavního menu *Nástroje->Vytvořit multipolygon*.  
- Okno s tagy nyní obsahuje nový multipolygon.

![New mp object][]

- Klikněte na tlačítko *Upravit* (Edit).  

- Objeví se okno editoru relací. Je poněkud komplexní, protože přidáváte tagy do skupiny cest.  

![Building relation][]

- Všimněte si, že v horní části okna je panel s tagy pro relace. Tyto tagy fungují stejně jako kterékoliv jiné.  
- Níže je seznam členů (members) relace. Tato relace má tři členy - jsou to ty tři cesty, ze kterých se skládá naše relace.  
- Všimněte si, že jeden tag už máme definovaný: *type=multipolygon*. Potřebujeme přidat ještě jeden, který definuje druh objektu, jenž relace representuje. Musíme přidat tag *building=yes*.  
- Klikněte do boxu s tagy a přidejte ho.  

![Building yes][]

- **Role** těchto cest již byly správně přiřazeny. Každý člen relace má svou roli, která indikuje jeho účel. V tomto případě, role vnějšího polygonu musí být definována jako **outer** (vnější) a role dvou vnitřních je **inner** (vniřní). Toto jsou dostupné role pro členy multipolygonů.  

- Klikněte na OK a vaše relace multipolygonu je kompletní!  

![New multipolygon][]

Když vytvoříte multipolygon podobný tomuto, tak by se měl na mapě zobrazit nějak takto:  

![Multipolygon in Mapnik][]

Multipolygony se používají pro komplexní objekty, které vyžadují vnitřní a vnější polygony, jako třeba budovy nebo řeky s mělčinami uprostřed. Podrobnější informace o multipolygonech naleznete v [OSM Wiki](https://wiki.openstreetmap.org/wiki/Cs:Relation:multipolygon).  

Relace u cest
----------------

Relace jsou taktéž velmi užitečné pro zobrazení dlouhých tras. Například autobusová či cyklistická trasa se skládá z různých segmentů cest. K definice takové trasy můžeme vytvořit relaci, která obsahuje všechny segmenty cest tvoříci trasu. Další vlastnosti, jako třeba autobusové zastávky, mohou být taktéž členem relace trasy.  

![Route relation][]

Pojďme si vytvořit relaci pro autobusovou trasu v JOSM:  

- Nejprve označte všechny cesty, ze kterých se trasa skládá. Možná budete muset rozdělit některé ulice na samostatné segmenty, pokud do relace patří jen její část. To můžete provést pomocí nástroje "Split Way" (Rozdělit cestu).  
- Jakmile máte vybrány všechny segmenty, jděte do *Předvolby->Doprava->Hromadná doprava->Trasa veřejné dopravy (autobusová)*.  

![Public transport preset][]

- Vyskočí okno, do kterého můžete vepsat informace, které se aplikují na celou trasu.

![New route relation][]

Je důležité vybrat specifický typ trasy z rozbalovacího menu. Pro trasu autobusu jsou dostupné dvě varianty - autobus a trolejbus. Můžete také přidat jméno, referenční číslo, odkud a kam jezdí.

- Klikněte na tlačítko *Nová relace* (New ralation). Objeví se relační okno, stejně jako při vytváření multipolygonu.  

![Bus route relation][]

- Všimněte si předvyplněných tagů, které definují relaci jako route (trasu). Místo *type=multipolygon*, je *type=route*. Máme zde také tag definující ji jako autobusovou trasu, narozdíl od jiného druhu trasy.  
- Možná teď přemýšlíte, jaké by měli být **role** členů? V případě trasy není potřeba definovat role členů. Když ponecháte pole rolí prázdné, program prostě ví, že se jedná o část trasy. Můžeme u každého segmentu definovat roli jako **route**, ale není to nutné.  
- Klikněte na OK a vaše relace trasy je kompletní!  

> Pokud chcete seznam všech relací na mapě, můžete si otevřít panel relací kliknutím na toto tlačítko v levé části okna: ![relation panel button][]{: height="30px"}. Otevře se panel, ve kterém si můžete vybrat, upravit nebo vytvořit nové relace.  

Shrnutí
-------

Porozumět relacím může být obtížné a není potřeba je používat často, ale je důležité o nich vědět. Když si uvědomíte, že potřebujete relaci ke korektnímu zmapování nějakého objektu, tak si na ni vzpomenete a informace k jejímu vytvoření najdete v OSM Wiki.


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png