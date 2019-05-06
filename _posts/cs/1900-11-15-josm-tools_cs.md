---
layout: doc
title: Editační nástroje v JOSM
permalink: /cs/josm/josm-tools/
lang: cs
category: josm
---

Editační nástroje v JOSM
==================

> Zkontrolováno 9.6.2017  

- Obsah
{:toc}

V kapitole [Začínáme s JOSM](/cs/josm/start-josm/) jsme si ukázali základy kreslení v JOSM, ale existuje mnoho nástrojů a technik, které jsme si nepředstavili.

V této kapitole probereme některé z nich a v následujících kapitolách půjdeme více do hloubky k pokročilejším nástrojům.

Stáhněte si ukázkový soubor
-------------------

- Nechte se vést a procvičte si nástroje v JOSM, stáhněte si ukázkový soubor [tools_menu_sample.osm](/files/tools_menu_sample.osm). Spusťte JOSM a načtěte si ho. Měli byste vidět tyto tvary:

![tools_menu_sample.osm][]

Nástroje na kreslení
-------------

Když kliknete na "Tools" v hlavním menu JOSM, uvidíte několik funkcí, které vám mohou pomoci při kreslení čar, tvarů a při editaci objektů na mapě.

JOSM má i jiné nástroje, které ulehčí kreslení čar a tvarů. Jsou v nabídce "Tools".

![Tools menu][]

Abyste je mohli použít, musíte nejdříve vybrat bod, čáru, nebo tvar v mapě. Ukázkový soubor obsahuje různé elementy, které jsou pojmenovány podle různých nástrojů v menu.

### Srovnání bodů do kruhu  

- Zkuste si vybrat jeden z elementů. Poté přejděte do menu Tools a klikněte na funkci, která má stejný název jako element. Například vyberte špatně nakreslený kruh.

![Align nodes in circle][]

- Z menu "Tools" vyberte "Align Nodes in Circle". Nepovedený kruh se krásně zakulatí.

Vyzkoušejte všechny nástroje. Popis některých nástrojů je uveden níže.

### Split Way (Rozdělení cesty)  

Tento nástroj vám umožní rozdělit čáru na dvě části. Hodí se to v případě, že jim chcete přiřadit rozdílné atributy, jako třeba u mostu. Funkci použijete tak, že vyberete bod uprostřed čáry, kterou chcete rozdělit, poté vyberte funkci Split Way z nabídky nástrojů Tools a vaše čára by se měla rozdělit.


### Combine Way (Spojení cest)

Je to opak funkce Split Way. Ke spojení dvou čar do jedné, musí mít společný jeden bod. Před použitím této funkce vyberte dvě čáry ke sloučení. Výběr více objektů provedete podržením klávesy SHIFT a kliknutím na každý z nich. Jakmile máte vybrané obě čáry, klikněte na Combine Way v menu Tools.

![Combine way][]


### Reverse and Combine (Obrátit a spojit)  

Když spojujete silnice s odlišným směrem jízdy, nejspíš obdržíte toto varování:

![Reverse and combine][]

Pokud jsou silnice propojené a mají stejný směr jízdy, pak vyberte "Reverse and Combine."


### Reverse Way (Obrátit směr jízdy)

Tímto změníte směr jízdy u silnice. Všechny línie v OSM mají určený směr, což je v JOSM vyobrazeno pomocí šipek na línii. Na směru většinou nezáleží, pokud zrovna nejde o jednosměrku nebo řeku, která plyne daným směrem. V těchto případech je potřeba změnit směr na správný.

![Way direction][]

### Simplify Way (Zjednodušit cestu)

Pokud se vaše cesta skládá z příliš mnoha bodů a chtěli byste ji zjednodušit, tak tento nástroj jich několik odebere.

![Simplify way][]


### Create a Circle (Vytvořit kruh)

Tento nástroj využijete při tvorbě perfektního kruhu. Nakreslete čáru, která representuje průměr kruhu a  poté aplikujte tento nástroj.

![Create circle][]


### Align Nodes in Line (Zarovnat body do přímky)

Tato funkce zarovná řadu bodů do přímky. U dlouhých čar je nejlepší vybrat jen části, které chcete narovnat. Buďte opatrní, neboť může dojít k malému posunu linky.

![Align nodes in line][]

### Orthogonalize Shape (Pravoúhlý tvar)

Tato funkce je užitečná u pravidelných tvarů, jakými jsou třeba budovy (**Pokročilejší nástroje probereme v [JOSM building tools](/cs/josm/josm-more-plugins/)**). Zakreslené oblasti dodá tato funkce pravoúhlý tvar.

![Orthagonalize][]


### Unglue way (Odpojení cesty)

K rozdělení spojených bodů využijte tento nástroj. Hodí se v případě, když dva objekty sdílí jeden bod a neměli by. Například běžnou chybou je společný bod u cesty a rohu budovy. Cesty běžně nevedou do budov, takže je to chyba a objekty byste měli v daném bodě oddělit.

![Unglue way][]

*Čára a bod ve skutečnosti nevypadají oddělené, dokud s nimi nepohnete.*

Klávesové zkratky
------------------

Jakmile budete mít za sebou mnoho editací, uvědomíte si, že ztrácíte mnoho času klikáním na nabídky a podnabídky. Pro urychlení práce má JOSM téměř na všechno klávesové zkratky.

Tím chci říct, že místo klikání na objekty a pak opakování zdlouhavého procesu v menu, můžete vybrat objekt a zmáčknout klávesu na klávesnici.

Všechny zmíněné nástroje, mají klávesové zkratky, které jsou vypsány v menu u každého nástroje hned vpravo vedle názvu. Například "O" je
zkratka k zarovnání bodů do kruhu. "L" je zase srovná do přímky. Chvíli to trvá než si zkratky zapamatujete, ale zjistíte, že ušetří
spoustu času.

Tady je seznam dalších zkratek (**tučně**), které se často používají.

1. Aktivace Select Tool (Výběr) -  **S**
2. Aktivace Draw Tool (Kreslení) -  **A**
3.  Aktivace Zoom Tool (Přiblížení/Oddálení) - **Z**
4.  Smazání vybraného objektu - **Delete**
5.  Zoom In (Přiblížení) - **+**
6.  Zoom Out (Oddálení) - **-**


Scale and Rotate (Změna velikosti a Rotace)
----------------

Častý dotaz je na rotaci přímky nebo tvaru až po jejich nakreslení.

Vyberte objekt k rotaci. Podržte **SHIFT+CTRL** na klávesnici. Klikněte a podržte tlačítko myši a otočte objektem.

![Rotate demo][]

Velikost objektu  (zmenšení či zvětšení) změníte podobným způsobem, jen podržíte ALT+CTRL.

Tyto informace najdete také informačním pásku ve spodní části okna JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png