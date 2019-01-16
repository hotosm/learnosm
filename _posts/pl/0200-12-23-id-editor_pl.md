---
layout: doc
title: Edytor iD
permalink: /pl/beginner/id-editor/
lang: pl
category: beginner
---

Edytor iD
=============

> Ten przewodnik może zostać pobrany jako [beginner_id-editor_pl.odt](/files/beginner_id-editor_pl.odt) lub [beginner_id-editor_pl.pdf](/files/beginner_id-editor_pl.pdf)  
> Przejrzano 2016-03-30  

Zaczynasz mapować z Tasking Managerem dla HOT lub MissingMaps? Zobacz naszą [sekcję ze wskazówkami dla HOT](/pl/hot-tips/).  

- TOC
{:toc}

Edytor iD jest de facto edytorem OpenStreetMap opartym na przeglądarce. iD jest szybki i łatwy w użyciu oraz pozwala na mapowanie z różnych źródeł danych takich, jak zdjęcia satelitarne i lotnicze, GPS, Field Papers lub Mapillary.  

Edytor iD jest świetnym wyborem do edycji małych i łatwych zmian, które nie wymagają zaawansowanych funkcji JOSM (bardziej zaawansowany edytor map). Ten rozdział demonstruje podstawy edytowania w iD.  

Uruchamianie edytora iD
----------------------

-	Edytor iD wymaga aktywnego połączenia z internetem.  
-	Otwórz swoją przeglądarkę internetową i przejdź do strony OpenStreetMap pod adresem [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Zaloguj się** używając swojego konta OpenStreetMap.  
-	Przesuń i przybliż mapę do obszaru, który chcesz edytować. Możesz przesuwać trzymając lewy przycisk myszy i przeciągając mapę do pożądanego obszaru.  
-	Kliknij na małej strzałce za napisem **Edycja**. Następnie kliknij **Edytuj w iD (w tej przeglądarce)**.  

![image1][]


Interfejs użytkownika edytora iD
-------------------------
![image2][]

1. **Panel edycji obiektu:** Ten panel pokazuje tagi obiektu zaznaczonego na mapie.  
	W tym panelu możesz dodawać lub edytować tagi.  
2. **Narzędzia:** Ten panel pokazuje podstawowe narzędzia do edycji:  
    Rysuj punkt (węzeł), *klawisz skrótu* **1** ![image3][]{: height="24px"}  
    Rysuj linię (drogę), *klawisz skrótu* **2** ![image4][]{: height="24px"}  
    Rysuj obszar (wielokąt), *klawisz skrótu* **3** ![image5][]{: height="24px"}  
    Cofnij, *klawisz skrótu* **Ctrl+z** ![image6][]{: height="24px"}  
    Ponów, *klawisz skrótu* **Ctrl+y** ![image7][]{: height="24px"}  
    Zapisz zmiany, *klawisz skrótu* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Panel mapy:** Ten panel pokazuje różne funkcje konfiguracji:  
    Przybliż, *klawisz skrótu* **+** ![image9][]{: height="24px"}  
    Oddal, *klawisz skrótu* **-** ![image10][]{: height="24px"}  
    Wyświetl aktualne położenie ![image11][]{: height="24px"}  
    Ustawienia tła, *klawisz skrótu* **b** ![image12][]{: height="24px"}  
    Dane mapy, *klawisz skrótu* **f** ![Map Data][]{: height="24px"}  
    Pomoc, *klawisz skrótu* **h** ![image13][]{: height="24px"}  
4. **Panel informacji:** Ten panel pokazuje różne informacje takie, jak pasek skali oraz nazwy użytkowników, którzy edytowali dany obszar.  

Konfigurowanie warstwy podkładu
--------------------------------

Kliknij przycisk **Ustawienia tła** lub użyj *klawisza skrótu* **b**.![image14][]{: height="24px"}  
![image15][]  
Aby zmienić **poziom jasności** kliknij jeden z tych kwadratów, które oznaczają 100%, 75%, 50% i 25% ![image16][]{: height="24px"}  
Możesz też **zmienić warstwę tła** zależnie od żądanego dostawcy kafelków (w Polsce domyślnie jest to Ortofotomapa z Geoportalu).  

Możesz dodać swoje własne kafelki mapy klikając na  **Własne**. Na przykład, jeśli chcesz **dodać Field Paper** [^fieldpaper], kliknij **Własne**, następnie kliknij na ikonce lupy (szukaj), aby otworzyć następujące okno:-  
![image17][]   
i wprowadź swój **URL z FieldPaper**, który będzie wyglądał mniej więcej tak: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Aby **wyświetlić ślady GPS z Twojego komputera** (format GPX), przeciągnij plik GPX do edytora iD.  
Aby włączyć **ślady GPS OpenStreetMap** zaznacz pole. Na poniższym obrazku, publiczne ślady GPS są pokazane w różnych kolorach, wskazując na kierunek podróży.  
![osm gps traces][]  
Jeżeli występuje [przesunięcie podkładu](/pl/josm/aerial-imagery), możesz **skorygować przesunięcie podkładu** klikając na **Dopasuj przesunięcie warstwy tła**. ![image18][]  

- Klikaj strzałki, aby przesuwać podkład. Kliknij przycisk resetowania, aby przywrócić jego domyślną pozycję. ![image20][]  

Podstawowa edycja w iD  
----------------------  

### Dodawanie punktów  

Aby dodać nowy punkt, kliknij na przycisku **Punkt**. ![image3][]{: height="24px"}  

- Twój kursor zmieni się na znak plusa (+). Teraz kliknij w miejscu, które znasz, aby zaznaczyć jego lokalizację. Na przykład, jeżeli wiesz, że w Twojej okolicy jest szpital, kliknij w miejscu, gdzie znajduje się budynek szpitala.  
![image21][]  
- Zauważ, że został dodany nowy punkt. W tym samym czasie lewy panel zmienił się, aby pokazać formularz, w którym możesz wybrać właściwości obiektu. Kliknij **Teren szpitala**, aby oznaczyć punkt jako szpital.  
![image22][]  
- Możesz używać formularzy, aby uzupełnić szczegółowe informacje o swoim punkcie. Możesz wypełnić nazwę szpitala, adres i/lub inne dodatkowe informacje. Zauważ, że każdy obiekt ma różne opcje, w zależności od tego, jaki tag wybierzesz w panelu edycji obiektu.  
- Jeżeli popełnisz błąd taki, jak np. zła lokalizacja, to możesz przesunąć Twój punkt do nowej lokalizacji poprzez przytrzymanie lewego przycisku myszy na nim i przeciąganie go. Lub, jeśli chcesz usunąć Twój punkt, kliknij go lewym przyciskiem myszy, aktywuj menu kontekstowe prawym przyciskiem myszy i kliknij przycisk wyglądający, jak kosz na śmieci. ![image23][]{: height="24px"}  
"Punkt" utworzony w edytorze iD jest aktualnie samodzielnym "węzłem" z zestawem "tagów".  

### Rysowanie linii  

Aby dodać nową linię, kliknij na przycisku **Linia**. ![image4][]{: height="24px"}  

- Twój kursor zmieni się na znak plusa (+). Znajdź drogę, która nie została jeszcze narysowana na mapie i ją odwzoruj. Kliknij raz w punkcie, gdzie zaczyna się segment drogi, przesuń mysz i kliknij, aby dodać kolejny punkt. Kliknij dwukrotnie, aby zakończyć proces rysowania. Zwróć uwagę na panel po lewej stronie.  
![image24][]  
- Tak samo, jak dla punktu, wybierz odpowiednie tagi dla swojej linii.  
- Możesz przesuwać punkty linii poprzez kliknięcie ich lewym przyciskiem myszy i przeciąganie.  
- Możesz też przesunąć całą linię przez zaznaczenie jej i wybranie **narzędzia Przesuń**. Następnie przeciągnij linię do nowej pozycji. ![image30][]{: height="24px"}  
- Kiedy klikniesz lewym przyciskiem myszy na pojedynczym punkcie (węźle) linii, a następnie klikniesz prawym przyciskiem myszy, aby aktywować menu kontekstowe, to zobaczysz takie narzędzia:  
- Usuń punkt z linii. ![image23][]{: height="24px"}  
- Odłącz punkt od linii. ![image26][]{: height="24px"}  
- Podziel linię na dwie od wybranego punktu. ![image27][]{: height="24px"}  
- Kiedy klikniesz lewym przyciskiem myszy na linii (ale nie na punkcie), to zobaczysz takie narzędzia:  
-   Usuń linię. ![image23][]{: height="24px"}  
-   Utwórz okrąg z linii (aktywne tylko, jeżeli linia jest zamknięta) ![image29][]{: height="24px"}  
-   Przesuń linię ![image30][]{: height="24px"}  
-   Utwórz prostokąt z linii (aktywne tylko, jeżeli linia jest zamknięta) ![image31][]{: height="24px"}  
-   Odwróć kierunek (dobre dla rzek i ulic jednokierunkowych) ![image32][]{: height="24px"}  

"Linia" utworzona w edytorze iD jest aktualnie "linią" z zestawem "tagów".

>Specjalna uwaga dotycząca **Usuwania**: W ogólności powinieneś unikać usuwania czyjejś pracy, jeżeli wymaga tylko poprawek. Możesz usuwać swoje własne pomyłki, ale powinieneś próbować *poprawić* obiekty zmapowane przez innych, które wymagają korekty. Pozwala to zachować historię obiektów w bazie danych OSM i oznacza szacunek dla innych maperów. Jeżeli naprawdę uważasz, że coś powinno być usunięte, rozważ najpierw zapytanie autora tego obiektu lub dyskusję na forum OSM.

### Rysowanie kształtów (wielokątów)

Aby dodać nowy wielokąt, kliknij na przycisku **Obszar**. ![image34][]{: height="24px"}  

- Twój kursor zmieni się na znak plusa (+). Spróbuj odrysować budynek używając podkładu jako pomocy.  
- Zauważ, że kolor Twojego kształtu zmieni się zależnie od właściwości, które mu przypiszesz.  
![image35][]  
- Narzędzia, które są dostępne po wybraniu kształtu i aktywowaniu menu kontekstowego prawym przyciskiem myszy są podobne do tych, które pojawiły się dla linii.  

"Wielokąt" w edytorze iD jest aktualnie "zamkniętą linią" z zestawem tagów.

### Rysowanie wielokątów złożonych

Czasami możesz chcieć narysować wielokąt, który ma nie tylko zewnętrzny kontur, ale również jeden lub więcej konturów wewnętrznych. Pomyśl na przykład o budynkach z wewnętrznymi dziedzińcami lub jeziorach z wyspami. *Nie rysuj wszystkich tych krawędzi jedną linią*, tak żeby wewnętrzny kontur był podłączony do zewnętrznego. Zamiast tego narysuj te kontury osobno, dołącz tagi tylko do zewnętrznego konturu, wybierz ponownie wszystkie i naciśnij **c**, aby połączyć je w coś, co jest nazywane wielokątem złożonym.

![create multipolygon][]

Kiedy wybierzesz którykolwiek z konturów nowo utworzonego wielokąta złożonego, zobaczysz po lewej stronie, do jakich wielokątów złożonych on należy.

![part of multipolygon][]

Zapisywanie zmian
--------------------

Kiedy (i jeżeli) chcesz zapisać swoje zmiany do OpenStreetMap, kliknij przycisk **Zapisz**. Panel po lewej stronie pokaże formularz wysyłania.  
![image36][]  

- Wprowadź komentarz opisujący Twoje zmiany i kliknij **Prześlij**.  

> Jeżeli edytujesz ten sam obiekt (punkt, linię lub obszar) w tym samym czasie, co ktoś inny, zobaczysz ostrzeżenie, że Twoje zmiany nie mogą być przesłane dopóki nie rozwiążesz **konfliktów** - wybierz, czyją edycję zaakceptować i prześlij zmiany. *Rozwiązywanie konfliktów często pociąga za sobą akceptowanie zmian innych osób, co oznacza, że prawdopodobnie będziesz chciał wrócić do spornego obiektu i edytować go ponownie(**tym razem zapisz zmiany od razu po edycji, aby uniknąć ponownego konfliktu!**).*

Dodatkowe informacje i niestandardowe tagi
---------------------------------------

Kiedy edytujesz obiekt, u dołu panelu właściwości możesz zobaczyć pasek ikon. Klikając na nich możesz dodawać dodatkowe informacje:

- Dodaj wysokość n.p.m. ![image37][]{: height="24px"}  
- Dodaj notatki ![image38][]{: height="24px"}  
- Dodaj kontakt / numer telefonu ![image39][]{: height="24px"}  
- Dodaj tag źródła ![image40][]{: height="24px"}  
- Dodaj stronę internetową ![image41][]{: height="24px"}  
- Dodaj informacje o dostępności ![image42][]{: height="24px"}  
- Dodaj link do Wikipedii ![image43][]{: height="24px"}  

Lub możesz dodać niestandardowe tagi klikając **Wszystkie znaczniki**. ![image44][]{: height="24px"}  

- Pokaże to wszystkie tagi przypisane do obiektu.  
![image45][]  
- Kliknij na znaku plusa (+), aby dodać klucze i wartości lub kliknij na ikonie kosza, aby usunąć tagi.

Kolejne samouczki
------------------

[Nasza strona z zewnętrznymi źródłami](/pl/resources/#iD) zawiera linki do wielu samouczków wideo z różnych źródeł.

iD versus JOSM
---------------  

**iD jest dobry...**

- Kiedy robisz proste zmiany  
- Kiedy masz szybki internet, aby pobrać podkład i zapisać zmiany  
- Kiedy chcesz być pewnym, że stosujesz logiczny i prosty schemat tagowania  
- Kiedy jesteś ograniczony w kwestii instalacji programów na komputerze, którego używasz

**JOSM jest lepszy...**

- Kiedy dodajesz wiele budynków (zobacz wtyczkę buildings_tool)
- Kiedy edytujesz wiele już istniejących wielokątów lub linii
- Kiedy nie masz pewnego połączenia z internetem lub jesteś offline
- Kiedy używasz specjalnego schematu tagowania (lub niestandardowych szablonów)

[^fieldpaper]: Jest to [rozdział LearnOSM](/pl/mobile-mapping/field-papers/) z większą ilością informacji o Field Papers.

Zawartość tego przewodnika jest dostępna jako [prezentacja](/files/iD-editor-training.pptx)



[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png