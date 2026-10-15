---
layout: doc
title: Začínáme s JOSM
permalink: /cs/josm/start-josm/
lang: cs
category: josm
published: true
---

Začínáme s JOSM
=============================


Jak stáhnout a nainstalovat JOSM, editor Java OpenStreetMap, změnit některá nastavení, otevřít ukázkovou mapu a naučit se některé základní operace s tímto softwarem. Pamatujete si, jak jsme vás v úvodní kapitole požádali, abyste nakreslili mapu svého města nebo vesnice? Tuto kapitolu zakončíme tím, že si mapu nakreslíte znovu, tentokrát digitálně. Poté byste již měli dobře rozumět tomu, jak se mapy v JOSM kreslí.

Stáhněte si JOSM
-------------

- Pokud ještě nemáte JOSM nebo chcete nejnovější verzi, otevřete webový prohlížeč.
- Do adresního řádku v horní části okna zadejte následující text a stiskněte klávesu Enter: [josm.openstreetmap.de](http://josm.openstreetmap.de).
- Webové stránky JOSM najdete také po zadání hesla "JOSM" na internetu.
- Webové stránky by měly vypadat přibližně takto:

    ![JOSM website][]

- Pokud máte v počítači nainstalovaný systém Windows, klikněte na "Instalační program Windows" a stáhněte si JOSM.

    ![Windows installer][]

- Pokud máte jiný operační systém, klikněte na odkaz pro svůj systém. Stahování by mělo začít. V této kapitole budeme předpokládat, že používáte systém Windows, ale pokyny jsou podobné i pro jiné operační systémy.

Instalujeme JOSM
------------

> Pokud v počítači ještě není nainstalována Java, mohou nastat problémy s instalací JOSM. Pokud máte v této části problémy, zkuste si stáhnout a nainstalovat Javu. Můžete si ji stáhnout zde: <http://www.java.com/en/download/>
>
> Uživatelé počítačů Mac mohou mít staré verze Javy. Možnosti pro OSX 10.6 a 10.7.3+ najdete na <http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation>.

- Najděte v počítači instalační soubor JOSM. Poklepáním na něj zahájíte instalaci.
- Klikněte na tlačítka ’OK’, ’Další’, ’Souhlasím’ a ’Instalovat’. Po dokončení instalace klikněte na tlačítko ’Dokončit’ a poprvé spusťte JOSM. Později, až budete chtít program JOSM spustit, můžete tak učinit kliknutím na nabídku Start v levém dolním rohu počítače a kliknutím na program JOSM.
- Může se zobrazit okno s dotazem, zda chcete aktualizovat software. Vzhledem k tomu, že je nový, nemusíte jej aktualizovat. Stiskněte tlačítko s nápisem "Zrušit". Pokud už nechcete tuto zprávu nikdy vidět, zaškrtněte políčko v dolní části před stisknutím tlačítka "Zrušit".
- Po spuštění systému JOSM bude vypadat přibližně takto:

    ![JOSM splash page][]

Předvolby JOSM
----------------

V JOSM lze upravit mnoho různých nastavení. Jedním z nastavení, které můžete chtít upravit, je jazyk. JOSM byl přeložen do mnoha jazyků a vy možná budete raději pracovat v jiném jazyce.

- Chcete-li otevřít okno Předvolby, klikněte na tlačítko Upravit -> Předvolby.

    ![Preferences window][]

- Na levé straně klikněte na kartu Jazyk.
- V rozevíracím poli vedle slova " Jazyk " vyberte svůj jazyk.

    ![language][]

- Klikněte na OK.
- Pro uložení nastavení je třeba restartovat JOSM. V okně se zprávou vyberte příslušnou možnost.

Naučte se základy mapování s JOSM
-----------------------------

- Nyní si otevřeme ukázkový soubor OSM, který použijeme k seznámení se základními způsoby kreslení map pomocí JOSM. Všimněte si, že tato mapa není skutečná v tom smyslu, že se nejedná o skutečnou mapu skutečného místa, takže ji nebudeme ukládat na OpenStreetMap.
- Soubor si stáhněte zde: [sample.osm](/files/sample.osm)
- Nyní otevřeme ukázkový soubor mapy v JOSM. Klikněte na tlačítko "Otevřít" v levém horním rohu.

    ![Open file][]

- Najděte soubor **sample.osm**. Pravděpodobně se nachází ve složce Stažené soubory, pokud jste jej neuložili jinam. Klikněte na něj a potom klikněte na tlačítko "Otevřít".
- Nyní byste měli vidět ukázkovou mapu, která vypadá takto:

    ![Sample file][]

- Na základě těchto dat si vyzkoušíte různé techniky úprav. _Tato fiktivní data však nikdy nesmíte nahrát do databáze._

### Základní operace

- Chcete-li posunout mapu doleva nebo doprava, nahoru nebo dolů, podržte pravé tlačítko myši stisknuté a pohybujte myší.
- Mapu lze zvětšovat a zmenšovat několika způsoby. Pokud máte myš, můžete k přiblížení a oddálení použít kolečko. Pokud používáte notebook a nemáte myš, můžete mapu přibližovat a oddalovat pomocí měřítka v levém horním rohu okna mapy. Přetáhněte lištu doleva a doprava tak, že podržíte levou myší a posunete lištu doleva nebo doprava pomocí myši.

    ![Scale bar][]

- Podívejte se na ukázkovou mapu. Je zde několik různých typů objektů. Je zde řeka, les, několik budov, několik silnic a několik obchodů. Chcete-li vybrat objekt, klikněte na něj levým tlačítkem myši.

### Body, přímky a tvary

- Při klikání na různé objekty na ukázkové mapě si všimněte, že na mapě jsou tři různé typy objektů. Jsou to body, čáry a tvary.
- Body jsou jednotlivá místa reprezentovaná symboly. Na této ukázkové mapě jsou dva body, obchod s obuví a supermarket. Obchod s obuví je reprezentován symbolem boty a market je reprezentován nákupním vozíkem.
- Na mapě je také několik čar, které představují silnice. Pokud se podíváte pozorně, uvidíte, že v rámci těchto čar jsou také body. Tyto body nemají přiřazeny žádné symboly ani jiné informace, ale pomáhají určit, kde se linie nachází.
- Na ukázkové mapě je také mnoho tvarů, které představují různá místa - les, řeku, park a budovy. Tvar se používá k znázornění oblasti, například pole nebo budovy. Tvar je úplně stejný jako čára - jediný rozdíl je v tom, že čára začíná ve stejném bodě, kde končí.

> Je snadné přemýšlet o mapě, která obsahuje tyto tři základní typy objektů -
> body, přímky a tvary. V OpenStreetMap existuje speciální terminologie
> díky které se dozvíte, jak postupujete. V OSM jsou body vlastně nazývány jako
> **uzly** a přímky se nazývají **cesty**. Tvar je nazýván **uzavřenou cestou**
> protože je to jen přímka, která končí ve stejném místě, odkud začíná.

- Můžete si všimnout, že když vyberete objekt, vpravo od mapy se zobrazí seznam v okně nazvaném "Vlastnosti". Jedná se o tzv. značky. Tagy jsou informace, které jsou vázány na bod, čáru nebo tvar a které popisují, o co se jedná. Více se o značkách dozvíme v některé z dalších kapitol. Prozatím stačí vědět, že tyto informace pomáhají popsat, zda je náš objekt les, řeka, budova nebo něco jiného.
- Zamyslete se nad tím, jak kreslíte mapu rukou a jak zároveň kreslíte body, čáry a tvary. Jaká další místa se nejlépe znázorňují pomocí bodů? Čarami? Tvary?

### Změna objektů

- Vyberte les na levé straně mapy. Klikněte na čáru kolem lesa, nikoli na jeden z bodů na čáře. Nyní podržte stisknuté levé tlačítko myši a táhněte myší. Měli byste být schopni přesunout les na nové místo na mapě.
- Klikněte na jeden z bodů na čáře kolem lesa. Podržte stisknuté levé tlačítko myši a táhněte myší. Měli byste být schopni bod přesunout. Takto můžete změnit tvar objektu nebo přesunout bod.

### Kreslení

- Na levé straně systému JOSM je sloupec tlačítek. Mnohá z těchto tlačítek otevírají nová okna na pravé straně, která poskytují další informace o mapě. Nejdůležitější tlačítka se však nacházejí v horní části tohoto sloupce. Tato tlačítka mění to, co můžete dělat pomocí myši.
- Nejčastěji budete používat horní tlačítka v tomto sloupci. Slouží k výběru objektů a ke kreslení nových objektů.
- Doposud jste používali nástroj Výběr, který vypadá takto:

    ![Select tool][]

- Před kreslením se musíte ujistit, že není nic vybráno. Klikněte do černého pole na mapě, kde je prázdné místo, a ujistěte se, že není nic vybráno.
- Klikněte na druhé tlačítko, nástroj Kreslení.

    ![Draw tool][]

- Najděte na mapě prázdnou oblast a dvakrát klikněte myší. Tím se nakreslí jeden bod.
- Chcete-li nakreslit čáru, klikněte myší na jedno tlačítko. Pohybujte myší a znovu klikněte. Pokračujte, dokud nebudete s čárou spokojeni. Chcete-li čáru ukončit, dvakrát klikněte myší.
- Tvar nakreslíte stejným způsobem jako čáru, ale dokončíte jej dvojitým kliknutím na bod, kde jste čáru začali kreslit.

### Přidat nastavení

- Nyní víme, jak kreslit body, čáry a tvary, ale stále jsme nedefinovali, co představují. Chceme být schopni říci, že naše body jsou obchody, školy nebo něco jiného, a zda naše tvary jsou pole, budovy nebo něco jiného.
- Klikněte na nástroj Výběr ve sloupci tlačítek vlevo.

    ![Select tool][]

- Vyberte jeden z objektů, které jste nakreslili nástrojem Kreslení. V horní nabídce klikněte na položku "Předvolby". Přesuňte se myší v podnabídce na typ umístění, které chcete definovat.
- Po kliknutí na předvolbu se zobrazí formulář s žádostí o další informace. Nemusíte vyplňovat všechna pole, ale můžete si přát doplnit některá důležitá pole, například název objektu.
- Po dokončení zadávání informací klikněte na tlačítko "Použít předvolbu". Pokud vše proběhlo v pořádku, váš bod, čára nebo tvar by měl změnit barvu nebo zobrazit symbol. To proto, že jste definovali, co to je.

Nakreslete vlastní mapu
-----------------

- Nyní si nakreslíme mapu, abychom si procvičili naučené techniky. Možná budete chtít překreslit mapu, kterou jste předtím nakreslili na papír.
- Přetáhněte mapu ze vzorové mapy. Podržte pravé tlačítko myši a táhněte myší, dokud nezískáte pěknou prázdnou plochu, na kterou můžete kreslit.
- Pomocí nástroje Kreslení můžete vytvářet body, čáry a tvary. Výběrem z nabídky Předvolby popište, co jsou vaše objekty zač.
- Po dokončení byste měli mít vlastní mapu podobnou vzorové mapě, kterou jsme otevřeli v souboru sample.osm.

Odstranění vzorové vrstvy
-----------------------

Jakmile se budete cítit pohodlně s těmito základními technikami úprav, budete chtít
zaměřit svou pozornost na mapování skutečných funkcí.

_Je velmi důležité, abyste nejprve odstranili vrstvu se vzorovými daty.
Tato data jsou fiktivní a nesmí být nahrána do OpenStreetMap 
databáze (novější verze JOSM tomu automaticky zabraňují)._

V okně Vrstvy v pravé horní části obrazovky vyberte vrstvu sample.osm.
Potom klikněte na ikonu koše v pravém dolním rohu okna.
Alternativně můžete vybrat smazání z kontextové nabídky vrstvy.
Chcete-li pokračovat v úpravách, musíte nejprve stáhnout skutečná data.
To bude vysvětleno v následující kapitole.

Shrnutí
-------

Vynikající! Pokud jste všechno udělali dobře, tak jste se naučili, jak nastavit JOSM na svém
počítači a základní nástroje pro kreslení map. V další kapitole se 
blížeji podíváme na proces úpravy mapy OSM s JOSM.

[josm website]: /images/josm/josm-website.png

[windows installer]: /images/josm/windows-installer.png

[josm splash page]: /images/josm/josm-splash-page.png

[preferences window]: /images/josm/josm_preferences.png

[language]: /images/josm/josm_language.png

[open file]: /images/josm/josm_open-file.png

[sample file]: /images/josm/josm_sample-file.png

[scale bar]: /images/josm/josm_scale-bar.png

[select tool]: /images/josm/josm_select-tool.png

[draw tool]: /images/josm/josm_draw-tool.png
