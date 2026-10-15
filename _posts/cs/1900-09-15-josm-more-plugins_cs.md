---
layout: doc
title: JOSM doplňky Building Tools & Utilsplugin2
permalink: /cs/josm/josm-more-plugins/
lang: cs
category: josm
---

JOSM doplňky Building Tools & Utilsplugin2
============


Doplňky **buildings_tools** a **utilsplugin2** přidávají skvělé funkce do JOSM. V této kapitole si je probereme.  

Doplněk Buildings Tools
--------------------------

Pokud ho nemáte nainstalovaný, následujte instrukce v [JOSM Doplňky](/cs/josm/josm-plugins).  

![Buildings tools plugin][]

Tento doplněk je velmi nápomocný při digitalizaci budov. Umožňuje vyznačit polovinu pravoúhlé budovy a zbytek tvaru se dopočítá. Pokud digitalizujete mnoho budov, tak vám ušetří spoustu klikání a tím i čas.  

Jakmile je doplněk nainstalovaný, objeví se v levé části okna JOSM nové tlačítko, které vypadá takhle: ![Buildings tools button][]{: height="29px"}

Spusťte JOSM a stáhněte si oblast, ve které chcete vytvářet budovy.  

### Obdélníkové budovy

* Vyberte building tool a nakreslete na mapu přímku dvěma kliknutími.  

![Draw edge][]

Třetím kliknutím vyberte třetí roh budovy a zbytek se dokreslí automaticky.  

![Extend building][]

* Tímto způsobem nejenže nakreslíte budovu na tři kliknutí, ale také jí rovnou nastavíte tag **building=yes**.  

### Kruhové budovy

* Ve "Více nástrojů" -> "Režimy kreslení budov" vyberte "Nastavit tvar budovy na kruh" nebo použijte klávesovou zkratku ALT+Z (při přepínání zpět na kreslení obdélníkových budov použijte ALT+R). Poté nakreslete průměr budovy.

![Round building][]

### Komplikované budovy

Komplikované budovy můžete vytvářet nakreslením několika překrývajících se budov a pak je sloučit do jedné.  

* Nakreslete dvě překrývající se budovy ve tvaru písmene L.  
* Vyberte obě budovy (podržte SHIFT pro výběr více objektů).  
* Otevřete si nabídku *Nástroje ‣ Spojit překrývající se plochy* nebo zmáčkněte SHIFT+J na klávesnici.  

![Merge buildings][]

### Úprava nastavení

Dále si můžete upravit nastavení doplňku podle sebe.  

* Přejděte na "Další nástroje"->"Režimy kreslení budov"->Nastavení velikosti budov.

* Pokud vytváříte několik stejně velkých budov, můžete si nastavit konkrétní rozměry budovy, jako např. 6 x 10 metrů (jednotkou jsou metry).  

![Set buildings size dialog][]

* Tímto nastavením budete vytvářet budovy na dvě kliknutí a to s přesnými rozměry.  

Navíc si můžete pomocí tlačítka **Advanced...** přidat další tagy, které se automaticky přiřadí budově. Například se jedná o budovy ve stejné ulici, tak si přidáte tag s názvem ulice, který se pak bude vkládat automaticky.  

![Buildings advanced][]


Utilsplugin2
-------------

Pokud ho nemáte nainstalovaný, následujte instrukce v [JOSM Doplňky](/cs/josm/josm-plugins).  

![Utilsplugin2 plugin][]

Po instalaci dopllňku a restartu JOSM se objeví nová nabídka v hlavním menu s názvem **Další nátroje**.  

![More tools menu][]

Vytvořte si novou vrstvu a vyzkoušejte si některé nové nástroje. Představíme vám ty nejužitečnější nástroje:  

1. **Přidat uzly na průsečíky:**  Tento nástroj přidá chybějící body v křižovatkách vybraných cest. Cesty by vždy měly mít společný bod v místech, kde se protínají.  

    ![Nodes interesection][]

2. **Vložit značky z předchozího výběru:** Tato funkce usnadňuje kopírování značek. Pokud chcete vytvořit mnoho objektů se stejnými tagy, nejprve objekty nakreslete. Poté přidejte značky k jednomu objektu. Klikněte na jiný objekt a stisknutím klávesové zkratky Shift + R zkopírujte značky z dříve vybraného objektu. Takto můžete postupovat u všech objektů, které chcete označit. Nezapomeňte, že tagy budou zkopírovány z dříve vybraného objektu, takže pokud kliknete na neoznačený objekt a poté na jiný neoznačený objekt, nebudete moci zkopírovat žádné tagy.  

    ![Copy tags][]

3. **Přidat značku zdroje (source):** Slouží ke zjednodušení přidávání tagu source (zdroj). Pamatuje si zdroj, který byl specifikován jako poslední a přidá ho jako zapamatovaný source tag k vašim objektům. Nyní můžete přidávat zdroj na jedno kliknutí.  

4. **Nahradit geometrii:** Skvělý nástroj, když chcete překreslit špatně tvarovaný objekt, ale zároveň chcete zachovat historii, atributy a ID číslo objektu. Například narazíte na budovu, která je složitá a špatně zakreslená, tak místo bolestivého opravování každého bodu, nakreslete budovu znovu, vyberte oba objekty a klikněte na "Replace Geometry", čímž přenesete všechny informace na nový objekt.  

    ![Replace geometry][]


### Více nástrojů pro výběr

**Utilsplugin2** přidá více nástrojů i do menu **Výběr**. Zkuste si je projít.  

![Selection menu][]

Mezi naše oblíbené patří **Zrušit výběr uzlů:** Tento nástroj zruší výběr označených bodů. Je užitečný ve chvíli, kdy obkreslíte oblast s objekty, čímž je vyberete, ale nechcete mít ve výběru zahrnuté i body, které jsou uvnitř všech čar a tvarů.  

![Unselect nodes][]

Hodně štěstí!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png
[Round building]: /images/josm/buildings_tools-round.png

