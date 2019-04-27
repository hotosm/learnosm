---
layout: doc
permalink: /cs/coordination/tm-whats-new-for-validators/
lang: cs
title: Co je nového pro validátory v Tasking Manageru 3
category: coordination
date: 0500-10-21 12:00:00
---

# Co je nového pro validátory v Tasking Manageru 3

> Tento návod může být stažen jako [tm3-news-for-validators_en.odt](/files/tm3-news-for-validators_en.odt) nebo [tm3-news-for-validators_en.pdf](/files/tm3-news-for-validators_en.pdf)  

## Váš uživatelský profil

Tasking Manager 3 má řadu nových funkcí zaměřených na lidi kteří validují. Proveďte svou **první aktivitu v novém Tasking Manageru, návštěvou uživatelského profilu**, na který můžete vstoupit z pop-up menu pod uživatelským jménem OpenStreetMap (OSM) v pravém horním rohu.

![profile][]

1. **E-mailová adresa** - Tasking Manager nyní může poslat e-mail vždy, když uživatel obdrží zprávu v Tasking Manageru. To je velmi důležité pro lidi, kteří provádějí validaci. Komentář, který jste zanechali při validaci mapování, je mnohem pravděpodobnější, že bude vidět osoba, jejíž práci potvrzujete. Ujistěte se, že **přidáte svou e-mailovou adresu** také do svého profilu.

2. **Role Validátora** - Projekty mohou volitelně vyžadovat zkušené validátory k ověření mapování projektu. Zatímco "úroveň zkušeností Mapper" je automaticky nastavena na základě sady změn OSM, role validátora je v současné době nastavována ručně pouze projektovými manažery. Počáteční seznam uživatelů s úlohou ověřovacího modulu je neúplný, obraťte se na správce projektu, aby bylo vaše jméno přidáno do seznamu osob, které mají role validátora, pokud jste zkušený validátor, který ještě nemá v nástroji Tasking Manager roli ověřování. **Upozorňujeme**: Role validátora je v Tasking Manageru významná, a proto žádáme projektové manažery, aby tuto roli přiřadili validátorům, jejichž validační práci přímo znají a mají znalosti z první ruky, že validátor je kvalifikován pro validaci jakéhokoli projektu v Tasking Manageru.


## Proces validace

### Krok 1 - Výběr úloh

Ověření lze provést pouze kliknutím na kartu "Validace" na stránce Projekt. Jakmile vyberete kartu Validace, máte k dispozici tři hlavní možnosti výběru úkolů k ověření.

![selection][]

1. **Vybrat individuální úlohu** pro ověření - Je to přesně stejný proces, který existuje v aktuálním Tasking Manageru, kliknete na úkol nebo použijete tlačítko "Ověřit náhodnou úlohu" a poté kliknete na "Start Validating" a spusťte editor.

2. **Výběr podle oblasti** - Umožňuje kreslit jeden polygon na mapě úkolů a vybere všechny úkoly, které jsou k dispozici pro validaci. Poté můžete klepnout na tlačítko "Start Validating" (Začátek ověřování) a všechny je uzamknete pro ověření.

3. **Výběr podle uživatele** - Seznam všech uživatelů, kteří přispěli k projektu, je na levé straně stránky spolu s informacemi o nich. Můžete třídit podle libovolných záhlaví sloupců:

- Úroveň - Na základě počtu sady změn OSM
- Registrovaní - Jak dlouho používají Tasking Manager.
- Poslední validace - Poslední ověření úkolu

Pomocí myši umísťujete kurzor myši nad odkaz "Start" zvýrazníte úkoly, které uživatel dokončil. Klepnutím na odkaz "Start" je všechny zamknete pro ověření.

### Krok 2 - Validace více úkolů

Výběr jednoho úkolu a spuštění vašeho editoru se bude chovat stejným způsobem jako v předchozí verzi Tasking Manageru, skutečný rozdíl bude při výběru více úloh a spuštění editoru.

Změn iD editoru je málo, velký rozdíl spočívá v tom, že namísto toho, abyste viděli pouze jeden obrys úkolu, uvidíte více obrysů úloh. Vzhledem k tomu, že aplikace iD editor pouze stahuje data pro oblasti, pro které se blížíte přiblížení a akceptuje obrysy GPX, není ve vašem pracovním postupu příliš velký rozdíl, pouze více oblastí je uzamčeno v nástroji Správce úloh a více oblastí, kde je možné prohlížet mapování. 

Použití JOSM se však nyní trochu liší. Při spuštění JOSM budou vytvořeny dvě vrstvy dat OSM, jedna bude nedostupná a bude mít obrysy úkolů, které potřebují ověření a jedna bude prázdná, upravitelná datová vrstva OSM. **Z OSM nebudou stažena žádná data**.

![multiple][]

Použijete obrysy úloh jako pomůcku pro stahování dat OSM do upravitelné vrstvy a pokračujte v ověřování tak, jak jste běžně zvyklí.

Po dokončení validace máte tři standardní možnosti: Označit všechny platné, Označit všechny neplatné nebo Zastavit ověření. Při kontrole validace více úkolů je třeba zvolit stejnou volbu pro všechny kontrolované úkoly. Ve stejném pracovním postupu nemůžete označit některé jako platné a označit ostatní jako neplatné.

Pokud potřebujete označit úkoly s různými stavy po jejich kontrole, zkontrolujte je, zda je chcete označit.


## Další položky související s validací

1. Záložka **Otázky a komentáře** - Toto je nyní záložka pro otázky a komentáře na úrovni projektu. Validátoři by měli zkontrolovat komentáře na této kartě a podle potřeby odpovědět na otázky. Validátoři mohou také použít tuto kartu a odkaz "Kontaktujte projektového manažera", aby nasměrovali otázky nebo připomínky tvůrci projektu.

2. **Úkoly na úrovni úloh** - Tlačítko Aktivita a statistiky v pravém horním rohu mapy úloh má nyní zdroj všech připomínek, které zůstaly v jednotlivých úlohách. Validátoři by měli přezkoumat tento seznam poznámek, aby pomohli identifikovat problémy a odpovídat na otázky.

[profile]:   /images/coordination/tm3_wnv_profile.png
[selection]: /images/coordination/tm3_wnv_selection.png
[multiple]:  /images/coordination/tm3_wnv_multiple.png