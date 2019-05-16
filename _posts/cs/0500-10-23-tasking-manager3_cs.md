---
layout: doc
title: Tasking Manager 3
permalink: /cs/coordination/tasking-manager3/
lang: cs
category: coordination
---

# Tasking Manager 3


**Tento návod popisuje aktuální verzi Tasking Manageru. Pokud uživatelské rozhraní, které používáte, vypadá jinak než zde popsané, měli byste si prohlédnout [příručku pro předchozí verzi](/cs/coordination/tasking-manager)**

Sekce Index
-------------
- [Rychlý návod](/cs/coordination/tasking-manager3/#quick-start-guide)  
- [Proces mapování](/cs/coordination/tasking-manager3/#mapping-process)  
    - [Přihlašování](/cs/coordination/tasking-manager3/#tasking-manager-login)  
    - [Možnosti - nastavení jazyka a uživatelský profil](/cs/coordination/tasking-manager3/#options-amp-links)  
    - [Vyhledání projektu založeného na seznamu a používání zobrazení mapy, vyhledávání a filtrování](/cs/coordination/tasking-manager3/#finding-a-project---tasking-manager-contribute-screen)  
    - [Mapování úlohy - vyberte, pracujte a odemkněte úkol](/cs/coordination/tasking-manager3/#mapping-via-the-tasking-manager) 
- [Získání nápovědy - naživo a kontaktování správce projektu](/cs/coordination/tasking-manager3/#getting-help)  
- [Tipy a triky](/cs/coordination/tasking-manager3/#editing-hints-and-tips)
- [Ověřování](/cs/coordination/tasking-manager3/#validation)

[HOT OSM Tasking Manager](http://tasks.hotosm.org) je nástroj, který koordinuje mnoho lidí mapujících určitou geografickou oblast v OpenStreetMap.

OpenStreetMap je svobodná, bezplatná mapa světa založená na spolupráci. Každý, kdo může přispívat na OpenStreetMap, mapuje libovolnou část světa, která ho zajímá. Tasking Manager je jen způsob, jak koordinovat velké skupiny lidí, kteří přispívají k OpenStreetMap, ale většinu příspěvků k OpenStreetMap dělají lidé, kteří nepoužívají Tasking Manager.

Tasking Manager je zcela samostatný nástroj oddělený od hlavního projektu OpenStreetMap. Když přispíváte k OpenStreetMap pomocí Tasking Manageru, ve skutečnosti používáte několik softwarových nástrojů:

* OpenStreetMap - databáze geografických informací
* Tasking Manager - pomáhá koordinovat velké množství lidí, kteří upravují data OpenStreetMap ve stejné oblasti
* OpenStreetMap Editor - program, který dokáže číst a zapisovat data do databáze OpenStreetMap

![TM overview][]

Úkolem Tasking Manageru je představit určitou geografickou oblast rozdělenou do malých, rychle mapovatelných oblastí nazvaných "Úkoly" a poskytnout způsob, jak "zabrat" nebo "uzamknout" jednu z těchto malých oblastí, zatímco mapujete tuto oblast pomocí jednoho standardních editorů OpenStreetMap. Tím, že "zaberete" nebo "uzamknete" jednu z těchto malých oblastí, pomůžete zajistit, že nikdo jiný nebude mapovat v téže oblasti, zatímco mapujete. To pomáhá zabránit "dvojitému mapování" nebo jiným chybám, když dva lidé pracují na stejné oblasti v OpenStreetMap.

Po dokončení mapování této malé oblasti zaznamenáváte do Tasking Manageru, že jste dokončili mapování této malé oblasti a doufejme, že si vyberete další "úlohu" na mapování.


## Rychlý návod

1. Vytvořte účet a přihlaste se na http://openstreetmap.org/  
  ![TM Quick Start 1][]
2. Navštivte [http://tasks.hotosm.org/](http://tasks.hotosm.org/) a přihlaste se přes pravý horní roh  
  ![TM Quick Start 2][]
3. Klikněte na "Zapojit se" a najděte mapovací projekt, na který budete pracovat  
  ![TM Quick Start 3][]
4. Přečtěte si pokyny k projektu  
  ![TM Quick Start 4][]
5. Klikněte na kartu "Mapa"  
  ![TM Quick Start 5][]
6. Najděte úkol "Ready", který chcete pracovat, klikněte na něj a vyberte "Start Mapping"  
  ![TM Quick Start 6][]
7. Budete přepojeni na editor OpenStreetMap a můžete mapovat všechny úkoly požadované v instrukcích.  
  ![TM Quick Start 7][]
8. Po dokončení mapování přepněte zpět do Správce úloh a klepnutím na tlačítko "Označit jako úplně zmapováno", pokud jste plně zmapovali úkol nebo "Zastavit mapování", pokud potřebujete z nějakého důvodu zastavit mapování.  
  ![TM Quick Start 8][]


## Proces mapování 

1. Vzdálený mapař vytvoří účet v aplikaci OpenStreetMap a přihlásí se do Tasking Manageru.
1. Mapař najde projekt, na kterém pracuje, obvykle založený na prioritě a úrovni dovedností nastavené správcem projektu v Tasking Manageru. 
2. Vzdálený mapař vybere čtverec úlohy, dokončí mapování a označí úlohu za dokončenou.
3. Druhý vzdálený mapař zkontroluje, zda je úkol dokončen na uspokojivou úroveň a označuje úkol jako "ověřený"
4. Vývoj mapování lze sledovat z tabulky "statistiky" projektu a může být snížena jeho naléhavost nebo být archivován podle požadavků administrátora.

### Přihlášení do Tasking Manageru

Tasking Manager je samostatný nástroj, který koordinuje mapování v OpenStreetMap. Používá však přihlašovací systém OpenStreetMap. To znamená, že k použití Tasking Manageru nemusíte vytvářet samostatný uživatelský účet, musíte však vytvořit účet v OpenStreetMap a přihlásit se do OpenStreetMap před tím, než můžete použít Tasking Manager pro mapování.

Když poprvé navštívíte Tasking Manager, zobrazí se v pravém horním rohu obrazovky tlačítko "Login".

![TM login 1][]

Kliknutím na toto tlačítko se dostanete na webovou stránku OpenStreetMap. Zde budete muset přihlásit a povolit správci Tasking Manager přístup k vašim preferencím OpenStreetMap. Pokud ještě nemáte, vytvořte si účet na webové stránce OpenStreetMap.

![TM login 2][]

![TM login 3][]

Jakmile jste přihlášeni do OpenStreetMap, vrátíte se do Tasking Manageru, kliknutím na Zapojit se, se dostanete k seznamu projektů, do kterých můžete přispět.

### Nastavení a odkazy

Tasking Manager se zpočátku zobrazí v angličtině - pro změnu na jiný jazyk klikněte na **English** v pravé horní části okna.

Jakmile se přihlásíte, můžete kliknout na své uživatelské jméno v horní části stránky. Zde můžete:

- Zobrazte profil Tasking Manager, kde můžete:
    - Aktualizovat svou e-mailovou adresu a odkazy na sociální média
    - Zobrazit svou úroveň zkušenosti s mapováním
    - Vidět seznam a mapu projektů, ke kterým jste přispěli
- Jít na stránku **Zprávy** v nástroji Tasking Manager (to není totéž jako systém zasílání zpráv OpenStreetMap)
- Odhlásit se

### Hledání projektu - Obrazovka Tasking Manageru k zapojení se

Kliknutím na odkaz "Zapojit se" v hlavním menu se dostanete k hlavnímu seznamu projektů v Tasking Manageru.

![TM contribute][]

Strana Tasking Manager Zapojit se je rozdělena do tří hlavních částí:

- možnosti vyhledávání a filtrování vlevo
- Seznam projektů
- Mapové zobrazení seznamu projektů

#### Možnosti hledání a filtrování

Ve výchozím nastavení jsou zobrazeny všechny projekty, které jsou k dispozici pro mapování. Pomocí části Filtry pokročilého vyhledávání na obrazovce můžete dále zúžit projekty, na kterých byste chtěli pracovat.

- Číslo projektu - Pokud znáte číslo projektu, na kterém chcete pracovat, můžete jej zadat a přejít přímo na něj.
- Organizace - umožňuje zobrazit pouze projekty, které byly požadovány jednotlivými organizacemi.
- Obtížnost mapování - Některé projekty je obtížnější mapovat než jiné. Tato možnost vám umožňuje najít projekty, které jsou nejvhodnější pro vaši úroveň zkušeností. Doporučujeme pracovat na projektech, které nejlépe odpovídají vašim zkušenostem, obzvláště pokud jste zkušený mapovač.
- Typ mapování - Umožňuje najít projekty, které obsahují určitý typ objektu, který chcete mapovat. Mnoho projektů je zaměřeno pouze na jeden typ mapování, ale projekty mohou obsahovat více typů úloh, které je třeba mapovat.
- Fulltextové vyhledávání - umožňuje vyhledávat projekty, které mohou obsahovat určité slovo nebo frázi v popisu projektu.
- Značky kampaně - Projekty mohou obsahovat jiné značky, které označují, že větší projekty mapování kampaní jsou součástí projektu, tyto projekty můžete najít zadáním do tohoto pole.

#### Zobrazení mapy
Kliknutím na kartu Zobrazení mapy se zobrazí počet projektů v regionu. Dvojitým kliknutím nebo přiblížením se zobrazí jednotlivé projekty. Jakmile je zvětšeno, body na mapě jsou barevně označeny, červená je naléhavá, žlutá je vysoká nebo střední priorita a šedá je nízká priorita. Kliknutím na některý z bodů na mapě se zobrazí informace o daném projektu. Kliknutím na název projektu se dostanete k tomuto projektu.

![TM project map][]

### Mapování přes Tasking Manager

Jakmile najdete projekt, na kterém chcete pracovat, kliknutím na název projektu se dostanete k podrobnému záznamu pro daný projekt. Tento podrobný náhled obsahuje:

- popis důležitosti projektu a způsob využití dat
- Podrobné pokyny pro to, co mapovat
- výběrové obrazovky pro validaci mapování
- Podrobná mapa oblastí jednotlivých mapovacích úloh s informacemi o jejich stavu.
- Karta Otázky a poznámky k otázkám nebo připomínkám k projektu

![TM project description][]



#### Záložka Instrukce

Vše, co potřebujete vědět o projektu, je tady! V horní části je úplný popis mapového projektu a informace o projektu.  

Pod popisem je obrazovka rozdělena do levé a pravé části. V levé části je panel se záložkami s kartami pro "Pokyny", "Mapa", "Ověřit" a "Otázky a poznámky". Vpravo je mapa projektu a jednotlivé úkoly pro mapování.

- Neobarvené úkoly jsou připravené a dostupné pro mapování
- Růžové oblasti mapy označují oblasti s vyšší prioritou
- čtverce žluté / zlaté mřížky mají dokončen první průchod mapování a jsou připraveny k ověření (validaci)
- Žlutý rámeček označuje vámi vybraný úkol
- Modré úkoly v současné době mapuje jiný mapovač 
- Zelená úloha byla dokončena 2. průchodem mapování a mapování bylo "ověřeno" (validováno)
- Tmavě šedé úlohy byly mapovány a označeny že nemají přijatelné snímky pro mapování 
- Modrá čára, která je běžně viditelná v obvodových čtvercích projektu, označuje okraj projektu. Tato hranice běžně sleduje dostupné snímky, správní hranici atd., Takže se může zobrazit jako neobvyklý tvar. Přestože mapování může být dokončeno mimo tento okraj, není to požadavek a nebude to považováno od validátorů za nutné.  


#### Karta Pokyny
To ukazuje, co je zapotřebí v mapovací úloze. Projekty se nacházejí v obtížnosti, vhodné pro začátečníky, pokročilé a pokročilé mapovače - a pokyny to vysvětlí. Ujistěte se, že této části po přečtení rozumíte. Existuje mnoho stylů mapového projektu pro mnoho různých účelů. Některé běžné aktivity projektu zahrnují:  

- silniční sítě: používají lidé k nahrání dat do ručních navigačních přístrojů aby s nimi hledali přístup k odlehlým oblastem  
- Mapování vesnic: Často se používá k identifikaci míst, kde lidé žijí a kde mohou být postiženi  
- Mapování budov: Používá se pro posouzení poškození nebo sledování zasažení nemocemi. Používá se také pro odhady počtu obyvatel.  
- Mapování řek, zdí a dalších prvků  

Ne všechny oblasti světa jsou podobné vašim vlastním, takže mohou být poskytnuty konkrétní rady pro značkování. Například africká silniční síť se velmi liší od typických amerických nebo evropských dálnic.  

Zobrazí se oddíl s označením **Změna sady komentářů** Měli byste se ujistit, že se v editačním programu objeví při nahrávání nebo ukládání změn spolu s informacemi **source**, které můžete (v závislosti na vašem editačním softwaru) potřebovat zkopírovat & vložit do zdrojového pole při provádění změn.  

Někdy mohou být k dispozici snímky specifické pro danou úlohu - možná budete muset souhlasit s licencí, abyste získali přístup. Pokyny obvykle označují nejjednodušší způsob, jak je načíst do editorů, jako je JOSM nebo iD.  

Při kontrole úlohy označené jako úplná, ověřovatelé očekávají, že všechny požadavky na kartě s pokyny byly dokončeny. Možná, že dokončení celého úkolu je poměrně obtížné - pokyny uvedené níže jsou k dispozici kolem úloh, které jste odemkli; stejně jako poskytování užitečné zpětné vazby pro další mapovače.  

#### Tlačítko Aktivita a statistiky  

Tato záložka obsahuje statistiky o projektu. Je rozdělena na dvě části, podrobný seznam aktivit (dříve na vlastní záložce u Tasking Manager 2.0) a souhrnný oddíl.

Souhrn obsahuje seznam maperů, kteří dokončili alespoň jeden úkol z projektu.  

Záznam všech komentářů k jednotlivým úkolům je ve spodní části stránky. Jsou to komentáře k úkolům a neměli byste si je splést se záložkou **Questions and Comments**, která obsahuje běžné dotazy a komentáře k celému projektu.

Na hlavní stránku projektu se vrátíte kliknutím na tlačítko **Return to project**.

#### Záložka Mapovat  

Klikněte na ni, pokud chcete začít mapovat. Můžete si z mapy vybrat některý z úkolů, nebo klikněte na tlačítko **Vybrat náhodný úkol**. Zvolit si můžete jen z neobarvených úkolů, jinak dostanete zprávu, že na tomto úkolu nelze pracovat. Pokud jste chtěli ověřovat, tak přejděte na záložku **Ověřit**.

![TM map tab][]

#### Výběr úkolu k mapování  

Když si vyberete úkol, můžete si prohlédnout jeho historii, třeba že na něm někdo začal dělat, ale nezbyl mu čas na jeho dokončení.  

Klikněte na tlačítko **Začít mapovat**, tím se úloha uzamkne a nikdo jiný si ji nemůže vybrat, dokud nebude znovu uvolněna a zároveň se spustí odpočet 2 hodin (120 minut), po jehož vypršení se úloha automaticky uvolní. Je dobrým zvykem si pravidelně kontrolovat časovač - můžete se lehce zabrat do mapování, ani se nenadáte, vaše úloha je automaticky uvolněna a už na ní pracuje někdo jiný. Pak může dojít ke konfliktu a problémům.  


#### Možnosti editace

Různé možnosti editace se vám zobrazí hned poté, co uzamknete úkol.

##### Editace s JOSM  

JOSM spusťte dřív než kliknete na tento odkaz a tím se automaticky stáhnou aktuální OSM data do JOSM .  

>  1. Políčko **Zapnout vzdálené ovládání** musí být zaškrtnuté - najdete ho v *Upravit ‣ Nastavení ‣ záložka Vzdálené ovládání*
> 2. Pokud jste předtím nainstalovali doplněk **continuosDownload** je lepší ho vypnout (zrušit zaškrtnutí u **Stahovat OSM data kontinuálně** v nabídce **Soubor** v JOSM).  
> 3. Pokud JOSM nezobrazí podkladové snímky automaticky, najdete je v nabídce **Mapové podklady**. [Více informací o snímcích](cs/josm/more-about-josm/#přidat-snímky)   
  

##### iD editor  

Zvolte tuto možnost a iD editor se automaticky spustí v  nové záložce nebo okně prohlížeče s aktuálními daty z OSM. Internet Explorer momentálně nepodporuje iD a místo něj načte Potlatch 2. Původní záložka nebo okno Task Managera se nezavře.  


##### Potlatch 2  

Editor se načte do nového okna nebo záložky. Potlatch automaticky nezobrazí hranice úkolu, ale můžete je zapnout manuálně pomocí těchto kroků:  

1. V Tasking Manageru si vyberte úkol a uzamkněte si ho kliknutím na **Začít Mapovat**.  
2. Jako editor si zvolte **JOSM** (když se objeví hláška *Dálkové ovládání JOSM nereaguje...* tak klikněte na **Stop using JOSM**).  
3. Pod políčkem výběru editoru je text *Tip: Download the following .gpx file...*. Stáhněte si tedy .gpx soubor a poznamenejte si jeho umístění.  
4. V Tasking Manageru změňte editor na Potlatch 2. Ten se spustí v nové záložce (může vyžadovat instalaci Adobe Flash Playeru, pokud ho již nemáte nainstalovaný).  
5. V Potlatch vyberte *Podklad ‣ Vector file...*  
6. Ve spodní části okna **Load Vector File** vedle popisku **File** klikněte na **Open** a najděte .gpx soubor, který jste stáhli.  
7. Zkontrolujte, že je zaškrtnuto políčko ve sloupci **Show** v řádku s vaším .gpx souborem.  
8. Potlach by měl zobrazovat hranice ve tvaru čtverce (nejspíš tyrkysovou barvou). Berte na vědomí, že Potlach i tak stáhne data za hranicí úkolu.  
  

##### Field Papers  

Používá se pouze, když jste zapojeni v projektu, ve kterém místní mapeři provádí terénní výzkum a značí si do vytištěné mapy informace, např. názvy ulic. Tato mapa se pak naskenuje a použije jako mapa podkladu pro vzdálené nebo místí mapery, kteří si informace přečtou a zaznamenají do OpenStreetMap. [Field papers sekce v LearnOSM](/cs/mobile-mapping/field-papers/)  


#### Rozdělení čtverce úkolu

Po výběru úkolu a prohlédnutí podkladových map si můžete uvědomit, že obsahuje spoustu detailů, které zvyšují náročnost mapování. Příkladem může být značení budov v hustě obydlených městech, nebo zakreslování malých vesnic v rozlehlých oblastech. Pokud není v silách jedné osoby dokončit úlohu v 2 hodinovém časovém limitu, můžete úkol rozdělit na 4 menší oblasti. *Používat s obezřetnosti* - když jsou čtverce úkolů rozděleny na příliš malé čtverečky, je třeba obtížné rozhodnout o jaký typ cesty se jedná atd.  

> Uvědomte si, že užitečné komentáře dříve zmíněné u daného úkolu již nebudou dostupné.


#### Odemčení úkolu

![TM unlock][]

##### Odemčení úkolu, který není dokončen

Když začnete pracovat na úkolu, ale nestihnete ho z nějakého důvodu dokončit, je dobré u něj zanechat komentář. Popište, co jste nestihli a klikněte na **Ukončit mapování**. Komentář by měl být relevantní a nápomocný dalšímu maperovi.  

Například:  

    Skoro hotovo, malá vesnice v levém horním rohu 
    zůstala nezmapována.
  

##### Odemčení úkolu, který je zcela zmapován

Je velmi obtížné, být si naprosto jistý, že je úkol kompletně hotový - je však přijatelné označit úkol za úplný, pokud jste si aspoň trochu jistí - obsah bude ještě zkontrolován jiným maperem při ověřování a všechny drobnosti mohou být dokončeny.  

Pro efektivitu procesu je lepší úkol označit jako **Zmapovaný**, než ho nechat několika dalším *nesebejistým* maperům, kteří by ztráceli čas jeho kontrolou.  

Pokud máte úpravy dokončeny a myslíte si, že je úkol hotový, uložte si všechny úpravy v editačním programu a vraťte se do Tasking Managera.  

+ Do pole pro komentáře popište své úpravy a co je důležitější, zapište i to s čím si nejste jistí. Například: *Co je zřetelné, to je zmapováno, ale pravý horní roh je zakrytý mrakem, tak tam nejde rozpoznat trasa*.  
+ Klikněte na **Označit jako kompletně zmapované** a vaše práce je připravena ke kontrole.  

##### Označení úlohy se špatnou fotomapou

Semtam si vyberete úkol, který nejde zmapovat, protože snímky mají nízké rozlišení, nebo jsou zakryté mraky. Zavřete úkol ve svém editoru a použijte tlačítko **Označit jako "špatné fotomapy"**, aby se vědělo, že se tento úkol nedá splnit.


#### Posílání zprávy přes komentáře

Při zanechávání zprávy k úkolu, ji můžete adresovat konkretnímu maperovi. Podobně jako na Twitteru, jednoduše použitím @ následovaného uživatelským jménem. Tím se zašle zpráva uživateli s obsahem vašeho komentáře a odkaz na úkol, ke kterému komentář patří.  

Například:  

    @HOTMppr krásná detailní práce  
    na budovách. Jen jste zapoměl na malou skupinu  
    domů v levém horním rohu vašeho čtverce,  
    pár domů jsem přidal, ale i tak jich pár zbylo.  

Je to zejména užitečné, když ověřujete, nebo doděláváte práci někoho jiného - můžete poskytnout zpětnou vazbu, poděkovat nebo něco jiného.  

+ Možná byste chtěli poskytnout odkaz na stránku, která může maperovi pomoci, jako třeba <http://learnosm.org/en/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ Je potřeba si uvědomit, že se do úprav zapojují lidé z celého světa, tak je lepší se vyjadřovat jednoduše a přesně. Pokud budete procházet komentáře v jiných jazycích, nástroje jako Google Translate (Překladač) jsou celkem užitečné.


#### Odkaz na konkrétní úkol při komunikaci emailem  

Když potřebujete poslat zprávu emailem nebo přes IRC a dotazujete se na něco, co se týče určitého úkolu v rámci projektu (třeba potřebujete pomoct s identifikací nějakého objektu na satelitním snímku):  

1. Klikněte na příslušný čtverec úkolu  
2. Označte celou adresu v adresním řádku prohlížeče, která bude vypadat nějak takto: *http://tasks.hotosm.org/project/713?task=259*  
3. Zkopírujte adresu do zprávy. 


## Získání nápovědy 

### Ptejte se naživo

Na stránce **Naučit se** v Tasking Manageru:  
1. Klikněte na **OSM HOT IRC Channel #hot**  
2. Vložte uživatelské jméno (vaše uživ. jméno v OSM?), nebo ponechte výchozí znaky  
3. Na konci rozbalovacího seznamu vyberte **hot**.  

- Napravo je seznam uživatelů, kteří jsou online.  
- Do okýnka vlevo dole vepište zprávu (semtam je zakryté jiným textem, ale objeví se kliknutím do okýnka).  
- Pokud chcete zprávu někomu přímo adresovat, přidejte do zprávy jeho uživatelské jméno ze seznamu napravo. Napište zprávu a použijte tlačítko návratu k odeslání komentáře. Systém je "živý", takže počkejte na odpověď - vaše uživatelské jméno je většinou součástí odpovědi, aby vás upozornila, že je pro vás. Odpověď obdržíte většinou do pár vteřin, tak si prosím vydržte.  
- Alternativní jednoduchý systém najdete na adrese [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Další informace o používání IRC s OpenStreetMap můžete nalézt na [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Taktéž můžete využít vlastního IRC klienta (Server=irc.oftc.net, a channel=#hot)  

### Zanechání otázky k projektu / komentáře / kontaktování tvůrce projektu

Když se podíváte do záložky **Komentáře** u projektu, uvidíte dotazy a komentáře od ostatních uživatelů a můžete zde zanechat vlastní. Také můžete kliknout na odkaz **Contact Project Manager** a tím svůj komentář/dotaz nasměřujete přímo tvůrci projektu. 

Všechny komentáře jsou veřejné a nejsou živé, pro tuto možnost využijte IRC zmíněné výše.

![TM comments][]


## Tipy a triky pro editaci  

Teď už máte nějaké povědomí o Tasking Manageru a jaké různé funkce podporuje. Na rozdíl od normálních úprav je tento nástroj často používán pro projekty v kritické časové tísni a s mnoha účastníky - může se to trochu lišit od toho, na co jste zvyklí.  

Některé obecné rady při práci s tímto nástrojem:  

* Vyhněte se mapování daleko za hranicí vašeho úkolu - v této oblasti mohou pracovat i jiní mapeři, což vede k duplicitní snaze. Nebude vadit, když zmapujete budovy, které leží na hranici, ale dál už nezacházejte - po zmapování něčeho na hranici, nahrejte změnu ihned.  
* Protáhněte silnice, toky nebo podobné objekty lehce přes hranice - to umožní dalšímu maperovi pokračovat tam, kde jste skončili, ale nahrajte úpravy hned, jakmile je dokončíte.  
* Pokud máte pochybnosti u nějakého objektu, použijte sekci komentářů a zeptejte se na názor ostatních nebo se podívejte do wiki.  
* Pokud uděláte vážnou chybu - například odstranění hlavního objektu nebo relace - použijte IRC nebo pole s komentáři a požádejte ostatní mapovače, aby vám pomohli změnu vrátit zpět. Pokuste se zahrnout sadu změn nebo popis toho, co se stalo. Jelikož jde o společný úkol, je zde mnoho dalších maperů, kteří rádi pomohou - je důležité si pamatovat, že každý jednou může udělat chybu.  
* Neváhejte a požádejte o zpětnou vazbu - mapeři, kteří ověřují vaši práci, mohou být upřímní nebo puntičkáři, ale pokud vědí, že není problém s vámi vézt dialog, výsledek je většinou mnohem lepší pro všechny zúčastněné. Může být obtížné komunikovat v cizým jazyce a lehce se stane, že budete muset překládat i samotnou zprávu do jazyka, kterým plynule nemluvíte.  
* Nemusíte ověřovat vlastní práci - druhý pár očí vždy zajistí lepší kvalitu mapování.  
* Nedělejte si starosti, když ostatní mapovači budou při ověřování vaší práce striktní - stejně jako vy, chtějí pouze zajistit, aby byla všechna data přesně zmapována. Zpětná vazba je vždy o zbývající práci, ne kritikou vašeho úsilí.  


## Ověřování

Ověřování je proces, ve kterém jiný mapovač zkontroluje mapování původního mapovače projektového úkolu. Je navržena tak, aby zajistil kompletnost, kvalitní data a poskytl mapovačům poděkování, zpětnou vazbu a povzbuzení.

### Začínáme

Ověřování začíná podobně jako mapování, dobrovolníci si najdou projekt, na kterém chtějí pracovat, přečtou si instrukce, aby věděli, na co se mají zaměřit a co se má zmapovat, ale místo zvolení záložky pro mapování, přejdou na záložku **Ověřit**. 

![TM select for validation][]

Ověřovatel si vybere úkol kliknutí na čtverec, náhodně pomocí **Vybrat náhodný úkol**, podle uživatelského jména, nebo nakreslí polygon pro výběr více úkolů dohromady.  

Na rozdíl od mapovačů mohou ověřovatelé vybrat více úloh zároveň a ověřovat ve větším měřítku než jen jednu úlohu.

### Výběr více úkolů k ověřování

Novinkou v poslední verzi Tasking Managera je možnost výběru více úkolů k ověřování, buď výběrem oblasti nebo podle uživatele.

Tato funkce se bude v každém editoru chovat trochu jinak.

V JOSM se vytvoří druhá vrstva OSM dat s názvem *Task Boundaries - Do Not Edit or Upload* a bude mít zakázané nahrávaní. JOSM **nebude stahovat OSM data**, protože mohou mít velkou velikost. Místo toho bude muset ověřovatel sledovat hranice úkolu a podle toho ručně stahovat aktivní vrstvu pro úpravy.

#### Výběr pomocí nakraslení polygonu.

Tato funkce umožňuje ověřovatelům nakreslit čtverec okolo skupiny úkolů a tím je označit všechny najednou.

Do editoru podle vlastního výběru, **si ověřovatel musí manuálně stáhnout OSM data** k úkolu ve vybrané oblasti. Tím se zabrání stahování všech dat OSM mezi vybranými úlohami.


#### Výběr pomocí uživatele

Seznam maperů, kteří dokončili úkol je volně dostupný. Přejetím kurzoru přes jméno se zobrazí úkoly, které označil za dokončené. Taky se můžete o maperovi dozvědět tři zajimavé informace - úroveň zkušností, jak dlouho už mapuje pomocí Tasking Managera a kdy naposled získal zpětnou vazbu při ověřování. Tak se může ověřovatel zaměřit na mepera začínajícího, zkušeného, nebo mapera, který nedostal delší dobu neobdržel žádnou zpětnou vazbu.

Klikněte na **Začít validovat**, tím uzamknete všechny úkoly, které maper dokončil a otevřou se ve zvoleném editoru.

![TM multi selection][]

Ve vybraném editoru **musí ověřovatel ručně stáhnout OSM data** pro danou oblast. Tím zabraní stahování všech OSM dat mezi jednotlivými vrstvami.

### Ukončení ověřování

Jakmile jsou všechna data ověřena u jednoho nebo všech úkolů, měl by se ověřovatel vrátit do Tasking Managera a měl by vybrat jednu ze tří možností, které vyjadřují stav ověřování u úkolu:

- Ukončit ověřování - Pokud jste nedokončili ověřování, ale musíte skončit.
- Označit (vše) jako ověřené - Pokud je vše zmapované a přesné.
- Označit (vše) jako neplatné - Když mapování není dokončeno nebo nepřesné.

Pokud jde o posledních dvě možnosti, tak by měl ověřovatel zanechat zapojeným maperům přátelský a povzbudivý komentář, poděkovat za jejich zapojení a zpětnou vazbu k jejich mapování. Prosím zvažte každé označení úkolu za neplatný. Pokud zbývá jen pár drobností, tak je dokončete, do komentáře zapište, co chybělo a úkol označte za dokončený. Pro začínající mapery může být odmítnutí dokončeného úkolu odrazující.




[TM overview]: /images/coordination/tasking_manager_overview.png
[TM Quick Start 1]: /images/coordination/tasking_manager_qs1.png
[TM Quick Start 2]: /images/coordination/tasking_manager_qs2.png
[TM Quick Start 3]: /images/coordination/tasking_manager_qs3.png
[TM Quick Start 4]: /images/coordination/tasking_manager_qs4.png
[TM Quick Start 5]: /images/coordination/tasking_manager_qs5.png
[TM Quick Start 6]: /images/coordination/tasking_manager_qs6.png
[TM Quick Start 7]: /images/coordination/tasking_manager_qs7.png
[TM Quick Start 8]: /images/coordination/tasking_manager_qs8.png
[TM login 1]: /images/coordination/tasking_manager_login1.png
[TM login 2]: /images/coordination/tasking_manager_login2.png
[TM login 3]: /images/coordination/tasking_manager_login3.png
[TM contribute]: /images/coordination/tasking_manager_contribute.png
[TM map tab]: /images/coordination/tasking_manager_map_tab.png
[TM unlock]: /images/coordination/tasking_manager_unlock_task.png
[TM project map]: /images/coordination/tasking_manager_project_map.png
[TM project description]: /images/coordination/tasking_manager_project_description.png
[TM comments]: /images/coordination/tasking_manager_comments.png
[TM task selection]: /images/coordination/tasking_manager_task_selection.png
[TM select for validation]: /images/coordination/tasking_manager_validation_selection.png
[TM multi selection]: /images/coordination/tasking_manager_multi_selection.png
