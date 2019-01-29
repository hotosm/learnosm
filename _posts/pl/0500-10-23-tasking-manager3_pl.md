---
layout: doc
title: Tasking Manager 3
permalink: /pl/coordination/tasking-manager3/
lang: pl
category: coordination
---

# Tasking Manager 3

> Ten przewodnik może zostać pobrany jako [tasking-manager3_pl.odt](/files/tasking-manager3_pl.odt) lub [tasking-manager3_pl.pdf](/files/tasking-manager3_pl.pdf)  

**Ten przewodnik opisuje aktualną wersję Tasking Managera. Jeżeli interfejs użytkownika wersji, którą używasz jest inny od opisanego tutaj, powinieneś spojrzeć na [podręcznik do poprzedniej wersji](/pl/coordination/tasking-manager)**

Spis treści działu
-------------
-  [Przewodnik szybkiego startu](/pl/coordination/tasking-manager3/#quick-start-guide)  
-  [Proces mapowania](/pl/coordination/tasking-manager3/#mapping-process)  
    -  [Logowanie się](/pl/coordination/tasking-manager3/#tasking-manager-login)  
    -  [Opcje - ustawienia języka i profil użytkownika](/pl/coordination/tasking-manager3/#options-amp-links)  
    -  [Znajdowanie projektu - z listy i używając widoku mapy, szukanie i filtrowanie](/pl/coordination/tasking-manager3/#finding-a-project---tasking-manager-contribute-screen)  
    -  [Mapowanie zadania - wybieranie, praca nad i odblokowanie zadania](/pl/coordination/tasking-manager3/#mapping-via-the-tasking-manager) 
-  [Uzyskiwanie pomocy - na żywo i kontaktując się z administratorem projektu](/pl/coordination/tasking-manager3/#getting-help)  
-  [Podpowiedzi i wskazówki](/pl/coordination/tasking-manager3/#editing-hints-and-tips)
-  [Weryfikacja](/pl/coordination/tasking-manager3/#validation)

[HOT OSM Tasking Manager](http://tasks.hotosm.org) jest narzędziem, które koordynuje wielu ludzi mapujących określone obszary geograficzne w OpenStreetMap.

OpenStreetMap jest współtworzoną przez ludzi, wolną mapą świata. Każdy może wesprzeć OpenStreetMap przez mapowanie dowolnej części świata, która go interesuje. Tasking Manager jest tylko pomocą w koordynowaniu dużych grup ludzi tworzących OpenStreetMap, ale i tak większość wkładu do OpenStreetMap jest zrobiona przez ludzi nieużywających Tasking Managera.

Tasking Manager jest narzędziem całkowicie odrębnym od głównego projektu OpenStreetMap. Kiedy wspierasz OpenStreetMap używając Tasking Managera, tak na prawdę używasz wielu rozwiązań:

* OpenStreetMap - Baza danych informacji geograficznych
* Tasking Manager - Pomaga koordynować dużą liczbę ludzi edytujących dane OpenStreetMap w tym samym obszarze
* Edytor OpenStreetMap - Program, który potrafi czytać i zapisywać dane w bazie danych OpenStreetMap

![TM overview][]

Zadaniem Tasking Managera jest prezentować konkretne regiony geograficzne podzielone na małe, szybkie do zmapowania kawałki zwane "Zadaniami" i dostarczyć sposób na "sprawdzenie" lub "zablokowanie" jednego z tych małych obszarów, kiedy go mapujesz używając jednego ze standardowych edytorów OpenStreetMap. Poprzez "sprawdzanie" lub "blokowanie" jednego z tych małych obszarów, zapewniasz sobie, że nikt inny nie będzie mapował w tym samym czasie tego obszaru. Pomaga to zapobiegać "podwójnemu mapowaniu" lub innym błędom, kiedy dwie osoby pracują nad dokładnie tym samym obszarem w OpenStreetMap.

Kiedy skończysz mapowanie tego małego obszaru, zapisujesz w Tasking Managerze, że ukończyłeś mapowanie i możesz wybrać kolejne "Zadanie" z mapy.


## Przewodnik szybkiego startu

1. Utwórz konto i zaloguj się na http://openstreetmap.org/  
  ![TM Quick Start 1][]
2. Odwiedź stronę [http://tasks.hotosm.org/](http://tasks.hotosm.org/) i zaloguj się poprzez górny prawy narożnik  
  ![TM Quick Start 2][]
3. Kliknij "Wesprzyj" i znajdź projekt mapowania do pracy  
  ![TM Quick Start 3][]
4. Przeczytaj instrukcje dla projektu  
  ![TM Quick Start 4][]
5. Kliknij kartę "Mapa"  
  ![TM Quick Start 5][]
6. Znajdź "Gotowe" zadanie do pracy, kliknij na nim i wybierz "Rozpocznij mapowanie"  
  ![TM Quick Start 6][]
7. Zostaniesz przeniesiony do edytora OpenStreetMap, zmapuj wszystkie obiekty wskazane w instrukcjach.  
  ![TM Quick Start 7][]
8. Kiedy skończysz mapowanie, przełącz się z powrotem do Tasking Managera i kliknij "Oznacz jako całkowicie zmapowane" jeżeli wykonałeś w pełni zadanie lub "Koniec mapowania" jeżeli potrzebujesz przerwać mapowanie z jakiegoś powodu.  
  ![TM Quick Start 8][]


## Proces mapowania 

1. Zdalny maper tworzy konto na OpenStreetMap i loguje się do Tasking Managera.
1. Maper znajduje projekt do pracy, zazwyczaj opierając się na priorytecie i poziomie umiejętności ustawionym przez menadżera projektu Tasking Managera. 
2. Zdalny maper wybiera kwadrat zadania, mapuje go i oznacza zadanie jako wykonane.
3. Inny zdalny maper sprawdza, czy zadanie jest wykonane na zadowalającym poziomie i oznacza zadanie jako 'zatwierdzone'
4. Proces mapowania projektu można obserwować w zakładce "statystyki", a projekt może być zdegradowany lub zarchiwizowany według uznania administratora.

### Logowanie do Menedżera zadań

Tasking Manager jest osobny narzędziem, które koordynuje mapowanie w OpenStreetMap. Pomimo tego używa systemu logowania OpenStreetMap. To oznacza, że nie potrzebujesz tworzyć osobnego konta do używania Tasking Managera, ale musisz utworzyć konto OpenStreetMap zanim będziesz mógł wykorzystać go do mapowania.

Podczas pierwszej wizyty w Tasking Managerze zobaczysz przycisk "Zaloguj" w prawym górnym rogu ekranu.

![TM login 1][]

Kliknięcie w ten przycisk przeniesie Cię do strony OpenStreetMap. Następnie powinieneś zalogować się i pozwolić Tasking Managerowi na dostęp do Twoich ustawień OpenStreetMap. Utwórz konto na stronie OpenStreetMap, jeżeli jeszcze go nie masz.

![TM login 2][]

![TM login 3][]

Kiedy zalogujesz się do OpenStreetMap zostaniesz przekierowany z powrotem do Tasking Managera, a kliknięcie na Wesprzyj lub Rozpocznij przeniesie Cię do listy projektów, które możesz wesprzeć.

### Opcje i odnośniki

Początkowo Tasking Manager wyświetla się po angielsku - aby zmienić język kliknij na **English** w prawym górnym rogu okna.

Po zalogowaniu możesz kliknąć na swojej nazwie użytkownika na górze. Stąd możesz:

- Zobaczyć swój profil w Tasking Managerze, gdzie możesz:
    - Zaktualizować swój adres email i linki do mediów społecznościowych
    - Zobaczyć swój poziom doświadczenia mapera
    - Zobaczyć listę i mapę projektów, które współtworzyłeś
- Przejść do ekranu swoich **Wiadomości** w Tasking Managerze (jest to system inny niż na OpenStreetMap)
- Wylogować się

### Znajdowanie projektu - Ekran wspierania Tasking Managera

Kliknięcie w link "Wesprzyj" w pasku głównego menu przeniesie Cię do głównej listy projektów w Tasking Managerze.

![TM contribute][]

Ekran Wesprzyj Tasking Managera jest podzielony na trzy główne obszary:

- Opcje Szukaj i Filtruj po lewej stronie
- Lista projektów
- Mapa z projektami z listy

#### Opcje Szukaj i Filtruj

Domyślnie wyświetlane są wszystkie projekty dostępne do mapowania. Możesz użyć Zaawansowanego Szukania w części ekranu służącej do filtrowania, aby zawęzić listę do projektów nad którymi chcesz pracować.

- Numer projektu - Jeżeli znasz numer projektu, nad którym chcesz pracować, to możesz go tutaj podać, a zostaniesz przeniesiony bezpośrednio do niego.
- Organizacja - To pozwala Ci wyświetlić projekty zgłoszone przez konkretne organizacje.
- Trudność mapowania - Niektóre projekty są trudniejsze do mapowania niż inne. Ta opcja pozwala Ci znaleźć projekty, które są najbardziej odpowiednie do Twojego poziomu doświadczenia. Zachęcamy, abyś pracował nad projektami, które najbardziej odpowiadają Twojemu poziomowi doświadczenia, zwłaszcza jeśli jesteś bardziej doświadczonym maperem.
- Rodzaj mapowania - To pozwala Ci znaleźć projekty, które zawierają konkretne rodzaje obiektów do zmapowania. Wiele projektów skupia się na mapowaniu tylko jednego rodzaju obiektów, ale równie dobrze mogą zawierać kilka typów.
- Szukanie w całym tekście - To pozwala Ci wyszukać projekty, które zawierają konkretne słowa lub frazy w swoim opisie.
- Tagi kampanii - Projekty mogą zawierać inne tagi, które wskazują, że są częścią większej kampanii mapowania, możesz znaleźć projekty po tych tagach wpisując je do tego pola.

#### Widok mapy
Kliknięcie na karcie "Widok mapy" pokaże Ci liczbę projektów w danym regionie. Podwójne kliknięcie lub przybliżenie wyświetli pojedyncze projekty. Po przybliżeniu punkty na mapie mają różne kolory, gdzie czerwony oznacza pilny projekt, żółty, to wysoki lub średni priorytet, a szary niski priorytet. Kliknięcie na dowolnym punkcie na mapie spowoduje pokazanie informacji o projekcie. Kliknięcie na tytule projektu przeniesie Cię do niego.

![TM project map][]

### Mapowanie przez Tasking Managera

Kiedy odnajdziesz projekt, nad którym chcesz pracować, kliknięcie na jego tytuł przeniesie Cię do szczegółowego wpisu o nim. Widok szczegółów zawiera:

- Opis ważności projektu i informacje, jak będą używane dane
- Szczegółowe instrukcje, co mapować
- Ekrany wyboru do weryfikowania mapowania
- Szczegółową mapę poszczególnych obszarów mapowanych zadań z informacjami o ich statusie.
- Kartę Pytania i komentarze dla pytań i komentarzy dotyczących projektu

![TM project description][]



#### Strona projektu

Wszystko, co musisz wiedzieć o projekcie znajduje się tutaj! Na górze jest pełen opis projektu mapowania i informacje o nim.  

Poniżej opisu ekran podzielony jest na dwie części. Lewa sekcja, to panel zakładek z kartami dla "Wskazówek", "Mapy", i "Pytań i komentarzy". Po prawej stronie jest mapa projektu i indywidualnych zadań do mapowania.

- Zadania bez koloru są gotowe i dostępne do mapowania
- Różowe obszary mapy wskazują tereny o wysokim priorytecie
- Żółte/Złote kwadraty są po pierwszym etapie mapowania i czekają na weryfikację
- Żółta ramka oznacza zadanie wybrane przez Ciebie
- Niebieskie zadania są aktualnie wykonywane przez innych maperów 
- Zielone zadania są po 2. etapie mapowania i mają oznaczenie "zweryfikowane"
- Ciemnoszare zadania, to miejsca sprawdzone i oznaczone przez innych maperów, jako obszary, które nie mają odpowiedniego podkładu 
- Niebieska linia, zwykle widoczna w zewnętrznych kwadratach projektu pokazuje jego granice. Ta granica zwykle pokrywa się z dostępnym podkładem, granicą administracyjną, itp., więc może mieć dziwny kształt. Jakkolwiek możesz mapować poza tą granicą, to nie jest to wymagane i nie będzie brane pod uwagę przez weryfikatorów.  


#### Karta instrukcji
Tutaj zobaczysz, co jest wymagane w zadaniu mapowania. Projekty różnią się między sobą stopniem trudności, odpowiednio dla początkujących, średniozaawansowanych i doświadczonych maperów - co wyjaśnia instrukcja. Upewnij się, że przeczytałeś i zrozumiałeś tą część. Jest wiele rodzajów projektów mapowania, dla wielu różnych celów. Niektóre typowe polecenia, to:  

- Sieć drogowa: Używana przez ludzi w terenie do wczytania danych do przenośnych urządzeń nawigacyjnych i znalezienia drogi do oddalonych terenów  
- Mapowanie wiosek: Często używane do rozpoznawania miejsc, gdzie żyją ludzie, którzy mogą być w zagrożeniu  
- Mapowanie budynków: Używane do oceny szkód lub śledzenia kontaktu z chorobami. Używane również do szacowania populacji.  
- Mapowanie rzek, murów i innych obiektów  

Nie wszystkie obszary na świecie są podobne do Twojej okolicy, więc mogą być dostarczone specjalne wskazówki dotyczące tagowania. Na przykład afrykańska sieć dróg jest bardzo różna od typowego amerykańskiego, czy europejskiego systemu drogowego.  

Pojawi się tutaj też sekcja wskazująca, w jaki sposób powinieneś uzupełnić pole **Opis zmian** przy wysyłaniu/zapisywaniu zmian w swoim programie do edycji, jak również informacja o **źródle**, którą (zależnie od programu) możesz skopiować i wkleić do odpowiedniego pola dla opisu zestawu zmian.  

Czasami może być dostępny dla danego zadania specyficzny podkład - musisz zatwierdzić licencję, aby uzyskać dostęp do niego. Instrukcje zazwyczaj wskazują najłatwiejszą drogę załadowania go edytorów takich, jak JOSM lub iD.  

Podczas sprawdzania zadania oznaczonego, jako kompletne, weryfikatorzy będą spodziewali się, że wszystkie wymagania z karty instrukcji są wypełnione. Może się zdarzyć, że ukończenie całego zadania będzie dość trudne - poniższe wskazówki są dotyczą odblokowywania zadań, jak również mówią o dostarczaniu użytecznych informacji kolejnym maperom.  

#### Przycisk Aktywność i statystyki  

Ta karta zawiera statystyki dotyczące projektu. Jest ona podzielona na dwie sekcje: szczegółową listę działań (dawniej jako osobna karta w Tasking Managerze 2.0) oraz sekcję podsumowującą.

Podsumowanie zawiera listę maperów, którzy ukończyli przynajmniej jedno zadanie w ramach projektu.  

Lista wszystkich komentarzy pozostawionych przy pojedynczych zadaniach znajduje się na dole strony. To są komentarze pozostawione do zadań i nie powinny być mylone z kartą "Pytania i komentarze", która zawiera ogólne pytania i komentarze dotyczące całego projektu.

Możesz powrócić do głównej strony wspierania projektu klikając na tytule projektu na stronie Aktywność i statystyki

#### Karta mapy  

Kliknij, kiedy będziesz gotowy do rozpoczęcia mapowania. Możesz wybrać pojedyncze zadanie do pracy zaznaczając je na mapie lub kliknąć na przycisku "Wybierz losowe zadanie". Tylko zadania bez koloru mogą być wybrane na tej karcie, inaczej pojawi się komunikat mówiący, że zadanie nie może być mapowane. Jeśli zamierzasz weryfikować, upewnij się, że wybrałeś kartę "Weryfikuj".

![TM map tab][]

#### Wybieranie zadania do mapowania  

Po wybraniu zadania będziesz mógł zobaczyć, czy istnieje już dla niego jakaś historia, jak na przykład to, że ktoś inny zaczął mapować, ale nie miał wystarczająco czasu, aby je dokończyć.  

Kliknięcie na przycisku **Rozpocznij mapowanie** zablokuje zadanie, więc żaden inny maper nie będzie mógł go wybrać, dopóki nie zostanie zwolniona blokada, a jednocześnie rozpocznie odliczanie 2 godzinny (120 minut) licznik, po upływie którego zadanie zostanie automatycznie odblokowane. Dobrym nawykiem jest regularne sprawdzanie pozostałego czasu - bardzo łatwo mapowanie może Cię pochłonąć i przegapisz odblokowanie zadania, więc będzie mogło ono być wybrane przez innego mapera, który rozpocznie nad nim pracę. Prowadzi to później do konfliktów i problemów.  


#### Opcje edycji

Różne opcje edytowania są prezentowane, gdy tylko zablokujesz zadanie.

##### Edytuj w JOSM  

Uruchom JOSM przez użyciem tego linku, a istniejące dane OSM zostaną automatycznie wczytane do JOSM.  

>  1. 'Włącz zdalne sterowania' musi być zaznaczone - szukaj w **Edycja / Ustawienia / Zdalne sterowanie**
>  2. Jeżeli zainstalowałeś wcześniej wtyczkę 'continuosDownload', to najlepiej ją wyłącz (odznacz 'Pobieraj dane OSM w trybie ciągłym' w menu **Plik** w JOSM).  
>  3. Jeżeli JOSM nie załaduje automatycznie podkładu, to równie dobrze można go normalnie znaleźć w menu **Podkłady**. [Więcej informacji o podkładach tutaj](/pl/josm/more-about-josm/#add-imagery)  
  

##### Edytor iD  

Wybierz to, aby automatycznie uruchomić nową kartę lub okno Twojej przeglądarki z załadowanymi istniejącymi danymi OSM. Przeglądarka Internet Explorer nie obsługuje aktualnie iD, więc zamiast tego zostanie załadowany Potlatch 2. Oryginalna karta lub okno z Task Managerem będzie wciąż dostępna.  


##### Potlatch 2  

Edytor załaduje się w nowym oknie lub karcie. Potlatch nie wyświetla automatycznie ramki ograniczającej zadania, ale możesz ją dodać postępując według następującej procedury:  

1. W Tasking Managerze wybierz zadanie i kliknij Rozpocznij mapowanie, aby je zablokować.  
2. W Tasking Managerze, wybierz Edytuj w JOSM (jeśli pojawi się okno z tekstem "Zdalne sterowanie JOSM nie odpowiada..." kliknij OK).  
3. Poniżej przycisku Edytuj w JOSM znajduje się tekst "Wskazówka: Pobierz następujący plik .gpx ...". Pobierz plik .gpx i zapamiętaj, gdzie go zapisałeś.  
4. W Tasking Managerze, zmień z Edytuj w JOSM na Edytuj w Potlatch 2. Potlatch powinien się otworzyć w nowej karcie.  
5. W Potlatchu wybierz Podkład, a następnie Plik wektorowy...  
6. W oknie Wczytaj plik wektorowy, na dole obok Plik, kliknij Otwórz i przejdź do pobranego pliku .gpx.  
7. W oknie Wczytaj plik wektorowy upewnij się, że zaznaczone jest pole przy Pokaż kolumnę dla pliku .gpx, a następnie zamknij okno.  
8. Potlatch powinien teraz wyświetlić granicę jako kwadrat (prawdopodobnie niebieski). Zauważ, że Potlatch będzie nadal wczytywał dane spoza obszaru zadania.  
  

##### Field Papers  

Do użytku tylko wtedy, gdy jesteś zaangażowany w projekt, w którym lokalny maper przeprowadził inspekcję w terenie i oznaczył na drukowanej mapie dane takie, jak np. nazwy ulic. Taka mapa może być zeskanowana i użyta jako podkład dla zdalnego lub lokalnego mapera, aby odczytać informacje i zaktualizować dane OpenStreetMap. [Sekcja LearnOSM o Field Papers] (/pl/mobile-mapping/field-papers/).  


#### Dzielenie kwadratu zadania

Po wybraniu zadania i sprawdzeniu jego podkładu, możesz stwierdzić, że jest w nim zbyt dużo wymaganych do zmapowania szczegółów. Na przykład może to być rysowanie budynków w mocno zurbanizowanych obszarach lub umieszczanie małych wiosek na dużym obszarze. Jako wsparcie, kiedy jest niemożliwe ukończenie przez jedną osobę zadania w 2 godziny, możesz zazwyczaj je podzielić na 4 mniejsze obszary. *Używaj ostrożnie* - jeżeli kwadraty zadań są zbyt małe, trudno jest rozsądzić, jaki jest typ drogi i zidentyfikować inne obiekty.  

> Miej świadomość, że inne użyteczne komentarze o wcześniej wykonanej pracy nie będą dłużej dostępne.


#### Odblokowywanie zadania

![TM unlock][]

##### Odblokowywanie zadania przed ukończeniem

Jeżeli zaczniesz pracę nad zadaniem, ale nie możesz z różnych względów go ukończyć, to dobrym zwyczajem jest pozostawić komentarz o tym w zadaniu. Po prostu napisz, co pozostało jeszcze do zrobienia i wybierz **Zakończ mapowanie**. Upewnij się, że Twój komentarz jest odpowiedni i pomoże następnemu maperowi.  

Na przykład:  

    Prawie ukończone, pozostała mała wioska 
    w lewym górnym rogu kwadratu zadania
  

##### Odblokowywanie całkowicie zmapowanego zadania

Bardzo trudno jest stwierdzić z całą pewnością, że całkowicie ukończyło się zadanie - jednakże jest akceptowalne oznaczyć zadanie jako kompletne, jeżeli jesteś dość pewnym - zawartość zostanie sprawdzona przez innego mapera przy weryfikacji, a wtedy mogą być wykonane małe uzupełnienia.  

Dla pełnej efektywności procesu, maperzy muszą oznaczyć zadania jako "Zmapowane" zamiast po prostu zostawiać je dla innych 'niepewnych' maperów, którzy zmarnują czas na ich sprawdzanie.  

Kiedy skończysz edytowanie i myślisz, że zadanie jest wykonane, zapisz wszystko w swoim programie do edycji i powróć do Tasking Managera.  

+ Dodaj komentarz w odpowiednim polu opisując, co zrobiłeś, a przede wszystkim, czego nie jesteś pewien. Na przykład; "Ukończone na tyle, na ile widzę, ale w prawym górnym rogu są chmury i nie mogę narysować tego obszaru".  
+ Kliknij przycisk "Oznacz jako zmapowane" i Twoja praca jest gotowa do przejrzenia.  

##### Oznaczanie zadania jako zły podkład

Czasami wybierzesz zadanie, którego nie da się zmapować, ponieważ podkład ma zbyt małą rozdzielczość lub pojawiają się chmury. Po prostu zamknij zadanie i edytorze i użyj przycisku "Oznacz jako zły podkład", aby zapisać, że nie można zmapować zadania z powodu słabego podkładu.


#### Wysyłanie wiadomości z pola komentarzy

Kiedy zostawiasz komentarz do zadania, możesz wysłać go jako wiadomość do nazwanego mapera. Tak jak na Twitterze, po prostu użyj @ przed nazwą użytkownika. To spowoduje wysłanie do użytkownika wiadomości zawierającej komentarz z tego pola oraz link do zadania, do którego odnosi się ten wpis.  

Na przykład:  

    @HOTMppr niezła robota z odwzorowaniem  
    szczegółów budynku. Pominąłeś małą grupę  
    domów w lewym górnym rogu kwadratu zadania,  
    dodałem kilka, ale wciąż niektórych brakuje.  

Jest to przydatne zwłaszcza przy weryfikowaniu lub dodawaniu czegoś do pracy innego mapera - możesz przekazać opinię, podziękowania lub inną wiadomość.  

+ Możesz chcieć przekazać link do strony, która pomoże maperowi, takiej jak <http://learnosm.org/pl/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ Miej na uwadze, że ludzie z całego świata biorą udział, więc używaj prostego, jasnego języka. Jeżeli trafisz na komentarze w innych językach, narzędzia takie, jak Google Translate powinny być wystarczająco pomocne.


#### Powoływanie się na konkretne zadanie przy wysyłaniu emaila  

Jeżeli potrzebujesz wysłać wiadomość, np. email lub wiadomość na IRC i wspominasz coś dotyczącego konkretnego zadania w projekcie (załóżmy, że potrzebujesz pomocy w zidentyfikowaniu czegoś na podkładzie):  

1. Kliknij na interesującym cię kwadracie zadania  
2. Kliknij w pasku adresu Twojej przeglądarki, który powinien pokazywać coś podobnego do 'http://tasks.hotosm.org/project/713?task=259'  
3. Zaznacz myszą cały tekst w pasku adresu lub użyj klawiszy skrótu **Ctrl+A**, aby zaznaczyć cały tekst, a następnie użyj klawiszy **Ctrl+C**, aby go skopiować  
4. W swoim emailu, wiadomości IRC lub innej wiadomości  
    - kliknij prawym przyciskiem myszy i wklej,  
    - lub używj klawiszy skrótu **Ctrl+V**, aby wkleić link do wiadomości. 


## Uzyskiwanie pomocy 

### Pomoc tekstowa na żywo

Ze strony pomocy Tasking Managera:  
1. Kliknij na **Kanał OSM HOT IRC #hot**  
2. Wprowadź nazwę użytkownika (Twoją nazwę użytkownika OSM?) lub użyj wstępnie ustawionej  
3. U dołu rozwijanej listy wybierz **hot**  

- Po prawej stronie ekranu jest lista użytkowników, którzy są aktualnie online.  
- Wpisz swoją wiadomość w polu w lewej dolnej części ekranu (czasami pole jest zasłonięte innym tekstem, ale zniknie on, gdy klikniesz w tym polu).  
- Aby skierować wiadomość do konkretnej osoby, zawrzyj jej nazwę użytkownika widoczną na liście w treści wiadomości. Wpisz, a następnie naciśnij enter, aby wysłać wiadomość. System działa 'na bieżąco', więc poczekaj na odpowiedź - Twoja nazwa użytkownika zazwyczaj pojawia się w odpowiedzi po to, żebyś widział, że to wiadomość do Ciebie. Normalnie powinieneś otrzymać odpowiedź w ciągu kilku sekund, więc poczekaj.  
- Inny równie prosty system możesz znaleźć na [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Więcej informacji o używaniu IRC z OpenStreetMap można znaleźć na [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Równie dobrze możesz użyć wybranego klienta IRC (Server=irc.oftc.net, and channel=#hot)  

### Dodawanie do projektu  pytań / komentarzy / kontakt z twórcą projektu

Używając karty projektu "Komentarze" możesz zobaczyć pytania i komentarze innych użytkowników oraz zostawić swoje. Możesz również kliknąć link "Skontaktuj się z menadżerem projektu", a zostaniesz automatycznie przekierowany do komentarzy/pytań do twórcy projektu. 

Wszystkie komentarze są publiczne, ale nie funkcjonują w czasie rzeczywistym, więc użyj opcji IRC dla rozmowy na żywo.

![TM comments][]


## Wskazówki i porady do edytowania  

Teraz już masz podstawową wiedzę o tym, czym jest Tasking Manager i jakie funkcje obsługuje. Inaczej niż normalne edytowanie, to narzędzie jest często używane w krytycznych projektach z udziałem wielu ludzi - może to być coś trochę innego niż Twój sposób użycia.  

Kilka ogólnych rad, których należy przestrzegać w pracy z tym narzędziem:  

* Unikaj mapowania daleko poza kwadratem zadania - inni maperzy mogą pracować w tym obszarze, co spowoduje podwojenie pracy. Jest wskazanym, aby mapować budynki przecięte granicą, ale unikaj wychodzenia dalej - przesyłaj zmiany natychmiast po zmapowaniu czegoś na granicy.  
* Przedłużaj drogi, strumienie lub inne obiekty nieco poza granice - pozwoli to następnemu maperowi kontynuować pracę od miejsca, w którym skończyłeś, ale przesyłaj zmiany od razu po zakończeniu edycji.  
* Jeżeli masz wątpliwości, czym jest dany obiekt, użyj sekcji komentarzy, aby zadać pytanie lub sprawdź w wiki.  
* Jeżeli popełnisz poważny błąd - na przykład usunięcie ważengo obiektu lub relacji - użyj IRC lub pola komentarzy, aby poprosić innych maperów o pomoc w cofnięciu zmian. Spróbuj podać zestaw zmian lub opis tego, co zrobiłeś. Jak to we wspólnych zadaniach, wielu innych maperów jest tutaj, aby Ci pomóc - ważne jest by pamiętać, że każdy robi czasem błędy.  
* Nie wahaj się zapytać o opinię - maperzy weryfikujący Twoją pracę mogą być lakoniczni i krótcy, ale jeżeli uznają, że warto porozmawiać z Tobą, będzie to z pożytkiem dla wszystkich. Może być trudno komunikować się w innym języku, ale łatwo możesz przerwać kiedy musisz coś przetłumaczyć, jak również przekazać wiadomość w języku, którego nie znasz zbyt dobrze.  
* Nie musisz weryfikować swojej własnej pracy - druga para oczu zawsze prowadzi do lepszej jakości mapowania.  
* Nie martw się, jeżeli inny maperzy są oschli przy weryfikacji Twojej pracy - tak, jak Ty oni chcą tylko upewnić się, że wszystkie dane są dokładnie zmapowane. Opinia zależy od pozostałej pracy, a nie jest krytyką dotychczasowych wysiłków.  


## Weryfikacja

Weryfikacja jest procesem, w którym drugi maper przegląda mapowanie pierwszego użytkownika w zadaniu projektu. Jest to zaplanowane po to, żeby zapewnić kompletne jakościowe dane i dostarczyć podziękowania, opinie i poparcie maperom.

### Rozpoczęcie pracy

Weryfikacja zaczyna się tak samo, jak mapowanie, wolontariusz znajduje projekt, nad którym chce pracować, czyta kartę ze wskazówkami, aby być pewnym, że rozumie czego się oczekuje i jak powinno to być zmapowane, ale zamiast wybierać kartę mapowania projektu wybiera kartę "Weryfikuj".

![TM select for validation][]

Weryfikator może wybrać zadanie przez kliknięcie na pojedynczym kwadracie zadania, kliknięcie "Wybierz losowe zadanie", wybranie użytkownika lub narysowanie wielokąta, aby wybrać wiele połączonych zadań.

W przeciwieństwie do maperów, weryfikator może wybrać kilka zadań do przeprowadzenia weryfikacji na większą skalę niż tylko jedno zadanie.

### Wybieranie wielu zadań do weryfikacji

Nowością w ostatniej wersji Tasking Managera jest możliwość wyboru wielu zadań do weryfikacji, zarówno poprzez obszar, jak i użytkownika.

Zależnie od edytora, którego używasz, ta funkcja będzie działać inaczej.

W JOSM zostanie utworzona druga warstwa danych OSM zatytułowana "Granice zadań - nie edytuj, ani nie przesyłaj", a w najnowszych wersjach JOSM funkcja przesyłania zostanie wyłączona. JOSM **nie pobierze danych OSM**, ponieważ może to być ich bardzo dużo. Zamiast tego weryfikator będzie musiał użyć granic zadań jako wskazówek i ręcznie pobierać dane do aktywnej warstwy edycji.

#### Wybieranie przez rysowanie wielokąta

Ta opcja pozwala weryfikatorowi narysować kwadrat dookoła grupy zadań i sprawdzić je za jednym zamachem.

W edytorze **weryfikator musi ręcznie pobierać dane OSM** dla wybranych obszarów zadań. Zapobiega to pobieraniu wszystkich danych OSM pomiędzy wybranymi zadaniami.


#### Wybieranie przez użytkownika

Lista maperów, którzy oznaczyli zadania jako wykonane jest pokazana. Najechanie myszą na kogoś z listy podświetli zadania oznaczone przez niego jako kompletne. Lista pokazuje także trzy ważne informacje o maperze, jego poziom doświadczenia, liczbę dni od pierwszego mapowania przy użyciu Tasking Managera i liczbę dni od ostatniej opinii w weryfikacji. To pozwala weryfikatorowi skupić się na nowych maperach, doświadczonych maperach lub takich, którzy nie mieli opinii od dłuższego czasu.

Kliknięcie na przycisku "Rozpocznij weryfikowanie" zablokuje wszystkie ukończone przez mapera zadania i pozwoli weryfikatorowi na otwarcie ich w wybranym edytorze.

![TM multi selection][]

W edytorze **weryfikator musi ręcznie pobierać dane OSM** dla wybranych obszarów zadań. Zapobiega to pobieraniu wszystkich danych OSM pomiędzy wybranymi zadaniami.

### Kończenie weryfikacji

Kiedy weryfikator skończy proces weryfikacji jednego lub wielu zadań, powinien wrócić do Tasking Managera i wybrać jedną z trzech opcji, która odpowiada zmapowaniu zadania:

- Przerwij weryfikację - Kiedy nie możesz dokończyć procesu weryfikacji, ale musisz już skończyć.
- Oznacz (wszystkie) jako zweryfikowane - Jeżeli mapowanie jest skończone i dokładne
- Oznacz (wszystkie) jako odrzucone - Jeżeli mapowanie nie jest skończone lub dokładne.

Przy dwóch ostatnich opcjach weryfikator może i powinien zostawić przyjazny, zachęcający komentarz kierowany do zaangażowanego mapera(ów) i przekazać podziękowania za wkład oraz opinię o mapowaniu. Bądź uważny przy oznaczaniu zadania jako odrzuconego. Jeżeli brakuje tylko kilka szczegółów dodaj je samemu, wyjaśnij w komentarzu czego brakowało, ale jednak oznacz zadanie jako zweryfikowane. Nowi maperzy odbiorą odrzucenie ich ukończonych zadań jako dość przykry komentarz.




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
