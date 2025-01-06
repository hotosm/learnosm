---
layout: doc
title: Creation of OSM Notes
permalink: /en/beginner/notes/
lang: cs
category: beginner
---

Vytvoření OSM Poznámek
=====================

Jednou z hlavních komponent OpenStreetMap jsou poznámky, které jsou nedílnou součástí projektu od roku 2013. V této sekci se dozvíte, co jsou poznámky, jejich stavy, jak vytvářet poznámky, které se promítnou do změn na mapě, komunikaci, která vzniká z poznámek, proces vytváření poznámek z různých aplikací a na závěr trochu historie této funkcionality.

Prosím, vezměte na vědomí, že se v tomto dokumentu budeme zabývat pouze vytvářením poznámek. Pro vyřešení poznámky můžete navštívit sekci vyřešení poznámky. Kromě toho jsme na konci tohoto článku zahrnuli slovník zkratek a termínů.


# K čemu slouží poznámky?

Účelem poznámek je jak (a) popsat chybu nebo nesrovnalost mezi mapou OSM a realitou, tak (b) poskytnout uživatelům mapy mechanismus zpětné vazby. Výše uvedené umožňuje udržovat OSM aktuální. To se hodně používá při terénní práci (tj. když jste na ulici nebo v parku), kde můžeme identifikovat tři typy nesrovnalostí nebo prvků, které se liší od mapy následujícím způsobem:
 
* Prvky, které nejsou na mapě, ale ve skutečnosti existují.
* Prvky, které jsou nesprávně mapovány, buď svými vlastnostmi nebo místem, například obchod se zvířaty je nyní supermarket.
* Prvky, které prostě již neexistují.

Systém poznámek interně poskytuje komunikační mechanismus mezi uživatelem, který podává zprávu, a mapovací osobou, která provádí změnu. To umožňuje prostor, kde lze položit otázky týkající se identifikované nesrovnalosti, na tyto otázky lze poskytnout odpovědi a lze provést přesnější úpravu mapy.

Zaznamenali jsme, že poznámky vyvolávají značný zájem u uživatelů, kteří preferují přispívat do projektu jiným způsobem než mapováním. To nám umožnilo rozšířit komunitu mapovačů, kde se někteří specializují na hlášení určitých prvků prostřednictvím poznámek při procházení.


## Atributy poznámek

Poznámky jsou definovány následujícími vlastnostmi:

* Text: popisuje identifikovanou nekonzistenci, která může být několik řádků dlouhá.
* Místo: je definováno zeměpisnou délkou a šířkou, které lze určit pomocí GPS (GNSS) nebo přesunutím špendlíku 📌 na mapě.
* Uživatelské jméno (volitelné): poznámka bude vytvořena anonymně, pokud uživatel není registrován v OSM.
* Číslo nebo identifikátor: identifikuje poznámku ze všech poznámek.
* Datum: označuje, kdy byla vytvořena.

Kromě toho může poznámka obsahovat další komentáře. To znamená, že vždy bude existovat počáteční komentář při vytváření poznámky. Následně se všechny další komentáře budou týkat komunikace mezi uživateli a mapovacími nástroji. Je třeba upřesnit, že pouze registrovaní uživatelé mohou přidávat komentáře. Je také důležité poznamenat, že komentář nelze upravit poté, co byl publikován. Jedinou akcí, kterou lze provést, je požádat DWG, aby ji skryl, pokud komentář porušuje zásady zpracování dat OSM. Například, pokud poznámka obsahuje osobní údaje.


# Stavy a akce

Poznámky mají tři stavy:

* Otevřená.
* Uzavřená.
* Skrytá - Tento typ se vztahuje na poznámky, které DWG skryl, protože jsou v rozporu se zásadami pro manipulaci s OSM daty.

Existuje několik akcí na poznámkách:

* Vytvořit poznámku (Otevřít): Odpovídá počátečnímu procesu vytváření.
* Vyřešit poznámku (Otevřeno -> Zavřeno): Jedná se o řešení poznámek pouze registrovaným uživatelem, ke kterému lze připojit komentář.
* Poznámka k komentáři (Otevřeno -> Otevřeno): Když registrovaný uživatel přidá text do poznámky.
Například když uživatel požádá o podrobnější informace o prostředí nebo když uživatel, který jej vytvořil, chce lépe popsat úvodní poznámku.
* Znovuotevření poznámky (Zavřeno -> Otevřeno): Pokud uživatel nesouhlasí s řešením poznámky a rozhodne se ji znovu aktivovat.

![States for a note][]


# Úvahy o tvorbě dobrých poznámek

Připomeňme, že poznámky popisují chybu nebo nesoulad mezi mapou (OSM) a skutečností. Poznámky se typicky vytvářejí na místě; například když jde člověk, má zařízení s mapou OpenStreetMap a vidí, že se tam něco liší od skutečnosti.

Klíčem k vytvoření dobrých poznámek je co nejlépe popsat nesrovnalost v mapě a pamatovat na to, že osoba, která ji bude řešit, nemusí danou oblast znát nebo ji nenavštívila. Poskytněte proto osobě, která bude poznámku číst a snažit se ji vyřešit, co nejlepší kontext. Například je dobré používat světové strany (sever, jih, východ, západ) a vyhnout se údajům jako vpravo, vpředu apod. protože osoba, která bude poznámku řešit, nemá při tvorbě poznámky referenční bod, kde se nacházíte.

Pokud jste zaregistrováni v OpenStreetMap a vytváříte poznámky se svým uživatelem, budete o všech změnách v poznámce informováni e-mailem. To vám umožní sledovat průběh řešení poznámky a být schopni odpovídat na případné dotazy. Některé aplikace umožňují nahrát fotografie spojené s poznámkami a graficky tak popsat kontext. Pokud používáte aplikaci s touto funkcí, využijte ji. Doporučujeme vždy uvést, kam kamera míří (na severovýchod, na zem apod.). Pokud máte pochybnosti, můžete použít aplikaci kompasu v mobilním telefonu; s její pomocí mapovač pochopí orientaci vaší fotografie pro řešení poznámky.

Víme, že právě začínáte číst tuto příručku a objevovat svět OSM. Až budete v této četbě dále, naučíte se podrobně mapovat určitý prvek nebo funkci. To vám pomůže lépe popsat objekt prostřednictvím poznámky, abyste zmapovali více vlastností.

## Jazyk

Jazyk, který ovládáte nejlépe, je nejvhodnějším jazykem pro psaní poznámek. Nezapomeňte, že osoba řešící poznámku, pokud vašemu textu nerozumí, může použít online překladač (například deepl.com nebo pons.com), protože většina řešení poznámek probíhá z počítače. Můžete ji také napsat v jazyce země, ve které se nacházíte, nebo případně v angličtině, ale nejlepší je použít jazyk, ve kterém se cítíte dobře a ve kterém se můžete lépe vyjádřit.

## Přesnost umístění

Umístění poznámky musí co nejpřesněji odpovídat místu chyby nebo nesrovnalosti na mapě. Poznámka může vnést chybu do mapy místo toho, aby něco opravila, když je poznámka umístěna několik metrů od požadovaného místa. Je nutné chvíli počkat, než zařízení identifikuje svou polohu, nebo můžete ručně přesunout špendlík nad prvek mapy, který chcete upravit.

Mějte na paměti, že osoba, která bude vzkaz řešit, nemusí být s danou oblastí obeznámena. Pokud vás tedy systém GPS (GNSS) neurčil správně a uvede, že se nacházíte na chodníku před domem, bude úprava na mapě na druhé straně ulice, což bude nesprávné.

## Hashtagy

Někdy se jedná o aktivity, při kterých mnoho lidí vytváří poznámky za stejným účelem (například mapathon pro přidání podrobností o okolí). Pro identifikaci doporučujeme použít jeden nebo více hashtagů, které danou aktivitu popisují. Díky tomu budete moci vyhledávat poznámky spojené s hashtagem a snadněji je zpracovávat.


# Špatné poznámky

Nezapomeňte, že poznámky nesmí obsahovat osobní informace, názory, osobní údaje ani reklamu. Neslouží ani k pokládání otázek. Jak již bylo zmíněno, mapovatelé, kteří poznámky zpracovávají, nemusí znát terén, takže nebudou moci odpovědět na vaše otázky. Opak je však pravdou. Protože jste na místě, můžete identifikovat chyby nebo nesrovnalosti v mapě a nahlásit je jako poznámku.

## Mechanické poznámky

Jedná se o ty, které jsou vytvořeny hromadně z počítače, kde jsou identifikovány prvky mapy určené k opravě. Tento postup komunita nedoporučuje, protože je důležité rozlišovat mezi důkazy pozorovanými přímo v terénu a nesrovnalostmi zjištěnými pouze dálkově. Například když používáte editor, jako je iD nebo JOSM, a rozhodnete se identifikovat špatně zakreslené budovy vytvořením poznámky ke každé budově. Pro tento konkrétní účel jsou k dispozici nástroje, které mají lepší správu území s prevencí konfliktů v úpravách. S těmito nástroji se seznámíte později v této příručce. Některé z nich jsou Tasking Manager, MapRoulette a DAMN Project, které používají formáty jako GeoJSON pro hromadné načítání různých bodů na mapě. 


# Upozornění

Když vytvoříte poznámku popisující nesrovnalost na mapě, bude tento text spojený s místem odeslán do databáze OSM. Poté si mapovatel OSM přečte vaši poznámku, aby ji vyřešil, a pokud má o tomto popisu pochybnosti, může přidat komentář, kde se vás může zeptat na další podrobnosti. Pokud jste poznámku vytvořili s uživatelem OpenStreetMap, obdržíte e-mail s dotazy mappera. Všechny vámi přidané komentáře budou oznámeny všem mapovatelům, kteří poznámku dříve komentovali. Takto spolu začnou komunikovat lidé zapojení do poznámky. 

![Notification by email][]


# Tvorba poznámek

Funkce pro vytváření, komentování a uzavírání poznámek jsou součástí různých aplikací. Zde si ukážeme, jak můžete vytvářet poznámky v některých aplikacích, které považujeme pro tuto činnost za nejvhodnější. Mnohé ze zde představených aplikací mají v této příručce (LearnOSM) podrobné části, ale tato část představuje přehled funkcí souvisejících s poznámkami v těchto aplikacích.

## StreetComplete

Když uvidíte něco, co si zaslouží vytvořit poznámku, můžete podržet prst na mapě a zobrazí se plovoucí nabídka. V ní vyberete možnost vytvoření poznámky a můžete popsat danou nesrovnalost. K dispozici je také možnost připojit fotografii pro lepší kontext. Zajistěte, aby aplikace nahrála data do OpenStreetMap a zveřejnila vaši poznámku.

![Creating a note in StreetComplete][]


## Every-Door

Na vodorovné liště v dolní části aplikace je několik režimů úprav. Vyberte poslední z nich, který je určen pro poznámky. V pravém dolním rohu se aktivuje modré kruhové tlačítko pro přidávání poznámek. Po umístění špendlíku můžete napsat text poznámky. Nezapomeňte změny nahrát, aby byla poznámka zaregistrována v OpenStreetMap.

![Creating a note in Every-door][]


## OnOSM

Tato webová stránka umožňuje přidat podrobnosti o provozovnách vytvořením poznámky. Má mechanismus, který si vyžádá potřebné informace a vyplní šablonu. Na závěr zveřejní údaje v OSM prostřednictvím poznámky.

Poznámky vytvořené na této stránce jsou vždy anonymní, protože není nutné používat pověření OSM. V důsledku toho neobdržíte e-mail, když mapovač zpracuje vaši poznámku, takže musíte neustále navštěvovat stránku poznámky, abyste zkontrolovali její stav.

![Creating a note in OnOSM.org][]


## OsmAnd

Vyberte prvek na mapě (např. budovu, silnici) a v možnosti "Akce" vyberte možnost "Otevřít poznámku" v OSM. V textu popište nesoulad a nakonec klikněte na "Nahrát".

![Creating a note in OSMAND][]


## Úvodní stránka OSM.org

Na domovské stránce OpenStreetMap.org přibližte zájmovou oblast a poté se aktivuje ikona pro přidání poznámky. Nezapomeňte, že pokud tento postup provedete bez přihlášení, vytvoříte anonymní poznámku a nebudete dostávat oznámení o jejím vyřešení. Zobrazí se textové pole, kde můžete zadat pokyny, a po kliknutí na tlačítko "Add note" (Přidat poznámku) se ocitnete uvnitř OSM.

![Creating a note in osm.org][]


# Historie

Nyní, když znáte základy poznámek, pojďme tuto část zakončit trochou historie. Předtím, než v rámci databáze OpenStreetMap existovaly poznámky jako takové, nabízel tuto funkci paralelní projekt. Projekt se jmenoval OpenStreetBugs a poskytoval základní nástroje pro uživatele, kteří mohli dokumentovat nesrovnalosti v mapě pomocí textu a souřadnic. Funkce byla vynikající pro hlášení nesrovnalostí, proto bylo rozhodnuto integrovat ji do OpenStreetMap a umožnit k ní přístup prostřednictvím rozhraní API. Je třeba poznamenat, že když bylo definováno a implementováno rozhraní API 0.6, tato verze neobsahovala funkčnost pro poznámky.

Poznámky byly skutečně zařazeny do pozdějšího dodatku k této verzi.
V roce 2013 byla služba poznámek nabízena jako součást rozhraní API.
Do roku 2014 byla všechna hlášení OpenStreetBugs převedena do databáze OSM.
V roce 2017 byl na celém světě vytvořen již 1 milion bankovek.


[States for a note]: /images/beginner/note-states.png
[Notification by email]: /images/beginner/email-messages.png
[Creating a note in StreetComplete]: /images/beginner/streetcomplete.gif
[Creating a note in Every-door]: /images/beginner/every-door.gif
[Creating a note in OnOSM.org]: /images/beginner/onosm.gif
[Creating a note in OSMAND]: /images/beginner/osmand.gif
[Creating a note in osm.org]: /images/beginner/website.gif
