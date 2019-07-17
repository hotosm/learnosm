---
layout: doc
title: Edytor iD
permalink: /pl/beginner/id-editor/
lang: pl
category: beginner
---

Edytor iD
=============


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
    Zapisz zmiany, *klawisz skrótu* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Panel mapy:** Ten panel pokazuje różne funkcje konfiguracji:  
    Przybliż, *klawisz skrótu* **+** ![image9][]{: height="24px"}  
    Oddal, *klawisz skrótu* **-** ![image10][]{: height="24px"}  
    Wyświetl aktualne położenie ![image11][]{: height="24px"}  
    Ustawienia tła, *klawisz skrótu* **b** ![image12][]{: height="24px"}  
    Dane mapy, *klawisz skrótu* **f** ![Map Data][]{: height="24px"}  
    Problemy, *klawisz skrótu* **i** ![Issues][]{: height="24px"}  
    Pomoc, *klawisz skrótu* **h** ![image13][]{: height="24px"}  
4. **Panel informacji:** Ten panel pokazuje różne informacje takie, jak pasek skali oraz nazwy użytkowników, którzy edytowali dany obszar.  

## Konfigurowanie warstwy podkładu

Kliknij przycisk **Ustawienia tła** lub użyj *klawisza skrótu* **b**.![image14][]{: height="24px"}  
![image15][]  
Możesz **zmienić warstwę tła** zależnie od żądanego dostawcy kafelków (w Polsce domyślnie jest to Ortofotomapa z Geoportalu).  

Możesz dodać swoje własne kafelki mapy klikając na  **Własne**. Na przykład, jeśli chcesz **dodać Field Paper** [^fieldpaper], kliknij **Własne**, następnie kliknij na ikonce lupy (szukaj), aby otworzyć następujące okno:-  
![image17][]   
i wprowadź swój **URL z FieldPaper**, który będzie wyglądał mniej więcej tak: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Aby **wyświetlić ślady GPS z Twojego komputera** (format GPX), przeciągnij plik GPX do edytora iD.  
Aby włączyć **ślady GPS OpenStreetMap** zaznacz pole. Na poniższym obrazku, publiczne ślady GPS są pokazane w różnych kolorach, wskazując na kierunek podróży.  
![osm gps traces][]  
Aby zmienić **wygląd podkładu** kliknij **Opcje wyświetlania**.  
![DisplayOptions][]  
Jeżeli występuje [przesunięcie podkładu](/pl/josm/aerial-imagery), możesz **skorygować przesunięcie podkładu** klikając na **Dopasuj przesunięcie warstwy tła**.  
![image18][]  

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
- Jeżeli popełnisz błąd taki, jak np. zła lokalizacja, to możesz przesunąć Twój punkt do nowej lokalizacji poprzez przytrzymanie lewego przycisku myszy na nim i przeciąganie go. Lub, jeśli chcesz usunąć Twój punkt, kliknij go lewym przyciskiem myszy, aktywuj menu kontekstowe prawym przyciskiem myszy i kliknij przycisk wyglądający, jak kosz na śmieci. ![PointToolDelete][]{: height="24px"}  
"Punkt" utworzony w edytorze iD jest aktualnie samodzielnym "węzłem" z zestawem "tagów".  

### Rysowanie linii  

Aby dodać nową linię, kliknij na przycisku **Linia**. ![image4][]{: height="24px"}  

- Twój kursor zmieni się na znak plusa (+). Znajdź drogę, która nie została jeszcze narysowana na mapie i ją odwzoruj. Kliknij raz w punkcie, gdzie zaczyna się segment drogi, przesuń mysz i kliknij, aby dodać kolejny punkt. Kliknij dwukrotnie, aby zakończyć proces rysowania. Zwróć uwagę na panel po lewej stronie.  
![image24][]  
- Tak samo, jak dla punktu, wybierz odpowiednie tagi dla swojej linii.  
- Możesz przesuwać punkty linii poprzez kliknięcie ich lewym przyciskiem myszy i przeciąganie.  
- Kiedy klikniesz lewym przyciskiem myszy na pojedynczym punkcie (węźle) linii, a następnie klikniesz prawym przyciskiem myszy lub naciśniesz spację, aby aktywować menu kontekstowe, to zobaczysz takie narzędzia:  
  - Kontynuuj linię od tego punktu ![PointToolContinue][]{: height="24px"}  
  - Rozłącz linie w tym punkcie ![PointToolDisconnect][]{: height="24px"}  
  - Podziel linię na dwie w tym punkcie. ![PointToolSplit][]{: height="24px"}  
  - Usuń punkt z linii. ![PointToolDelete][]{: height="24px"}  
- Kiedy klikniesz lewym przyciskiem myszy na linii (ale nie na punkcie), to zobaczysz takie narzędzia:  
  -   Utwórz okrąg z linii (aktywne tylko, jeżeli linia jest zamknięta) ![LineToolCircularize][]{: height="24px"}  
  -   Odłącz linię od innych obiektów ![LineToolDisconnect][]{: height="24px"}  
  -   Przesuń linię ![LineToolMove][]{: height="24px"}  
  -   Wyrównaj wszystkie narożniki do kątów prostych ![LineToolSquare][]{: height="24px"}  
  -   Odbij linię względem krótszej osi ![LineToolReflectShort][]{: height="24px"}  
  -   Odbij linię względem dłuższej osi ![LineToolReflectLong][]{: height="24px"}  
  -   Odwróć kierunek (dobre dla rzek i ulic jednokierunkowych) ![LineToolReverse][]{: height="24px"}  
  -   Obróć linię względem jej środka ![LineToolRotate][]{: height="24px"}  
  -   Wyprostuj linię ![LineToolStraighten][]{: height="24px"}  
  -   Usuń linię. ![LineToolDelete][]{: height="24px"}  

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

## Problemy

Kiedy tylko edytujesz coś, to edytor rozpoczyna sprawdzanie tego. Jeżeli stwierdzi, że to, co zrobiłeś może powodować problemy, to powiadomi Cię w panelu problemów. Kiedy na ikonce problemów pojawia się kropka w kolorze żółtym (ostrzeżenia) lub czerwonym (błędy) powinieneś otworzyć tą zakładkę i zobaczyć, o co chodzi. Ta informacja jest też widoczna w zakładce obiektu po lewej stronie jeżeli jest on zaznaczony. Zostaniesz również powiadomiony, że są nierozwiązane problemy podczas wysyłania danych. 

![Issue][] ![Error][]

Dolna część panelu problemów pokazuje dostępne reguły i pozwala wyłączać poszczególne z nich, jednakże nie jest to zalecane.

Zapisywanie zmian
--------------------

Kiedy (i jeżeli) chcesz zapisać swoje zmiany do OpenStreetMap, kliknij przycisk **Zapisz**. Panel po lewej stronie pokaże formularz wysyłania.  
![image36][]  

- Wprowadź komentarz opisujący Twoje zmiany i kliknij **Prześlij**.  

> Jeżeli edytujesz ten sam obiekt (punkt, linię lub obszar) w tym samym czasie, co ktoś inny, zobaczysz ostrzeżenie, że Twoje zmiany nie mogą być przesłane dopóki nie rozwiążesz **konfliktów** - wybierz, czyją edycję zaakceptować i prześlij zmiany. *Rozwiązywanie konfliktów często pociąga za sobą akceptowanie zmian innych osób, co oznacza, że prawdopodobnie będziesz chciał wrócić do spornego obiektu i edytować go ponownie(**tym razem zapisz zmiany od razu po edycji, aby uniknąć ponownego konfliktu!**).*

Dodatkowe informacje i niestandardowe tagi
---------------------------------------

Kiedy edytujesz obiekt, u dołu panelu właściwości zobaczysz menu "Dodaj pole". Klikając na nich możesz dodawać dodatkowe informacje (warstwa, wysokość, wikipedia, itd.).  

![AdditionalTags][]

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
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png