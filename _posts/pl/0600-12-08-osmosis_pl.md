---
layout: doc
title: Przetwarzanie danych w Osmosis
permalink: /pl/osm-data/osmosis/
lang: pl
category: osm-data
---

Przetwarzanie danych w Osmosis
===============================


**Osmosis** jest potężnym narzędziem wiersza polecenia do przetwarzania surowych danych **.osm**. Jest ono często używane do przetwarzania wielkich plików z danymi, do dzielenia plików OSM na mniejsze kawałki i do stosowania zestawów zmian do aktualizacji istniejących plików.  

W Osmosis jest dostępnych wiele wspaniałych funkcji, o których możesz przeczytać szczegółowo na [Wiki](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41). Wiele funkcji jest dość skomplikowanych i trudnych do zrozumienia, zwłaszcza jeśli dopiero zaczynasz z programami konsolowymi i OpenStreetMap. Ten rozdział służy wprowadzeniu do Osmosis, instalowaniu go w Windowsie i rozpoczynaniu pracy z jego podstawowymi komendami.  

Instalowanie Osmosis
----------------

Tak, jak z osm2pgsql w poprzednim rozdziale, musimy pobrać i zainstalować **osmosis**, aby móc go uruchamiać z wiersza polecenia. Postępowanie będzie bardzo podobne do tego z osm2pgsql.  

Będziesz potrzebował również trochę surowych danych OSM do pracy. Jeżeli chcesz powtórzyć przykład z tego rozdziału, pobierz nasz przykładowy plik [tutaj](/files/sample_osmosis.osm.pbf). Możesz również wybrać surowe dane według własnego uznania.  

Wykonaj następujące kroki, aby pobrać i przygotować Osmosis:  

- Najpierw pobierz Osmosis [tutaj](http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.zip).  
- Wypakuj folder i umieść go w takim miejscu na dysku, z którego go nie będziesz przenosić. Musisz dodać jego lokalizację do ścieżki systemowej, aby móc go uruchamiać z wiersza polecenia.  

![unzip it][]

- Kliknij menu Start i wpisz “zmienne środowiskowe”.  

![system path][]

- Zobaczysz opcję nazwaną “Edytuj zmienne środowiskowe systemu”. Kliknij ją.  

![edit variables][]

- Kliknij przycisk nazwany “Zmienne środowiskowe”.  

![env variables][]

- U dołu znajdź zmienną nazwaną “Path” i kliknij “Edytuj...”  

![find path][]

- Musisz dodać katalog, w którym jest osmosis.bat do zmiennej Path.  

![edit path][]

- Dodaj średnik na końcu poprzedniego katalogu i wpisz pełną ścieżkę do folderu osmosis.  Na przykład, jeśli folder **osmosis-latest** znajduje się 	bezpośrednio w katalogu **C:\\**, ścieżka będzie wyglądała następująco:  
	
      C:\osmosis-latest\bin

- Kliknij OK kilka razy, aby zapisać nowe ustawienia.  
- **osmosis** powinno teraz działać. Sprawdźmy to.  
- Otwórz Wiersz polecenia. Możesz to zrobić klikając menu Start i wpisując "**cmd**". Pojawi się Wiersz polecenia i możesz nacisnąć Enter lub kliknąć na nim, aby go uruchomić.  

![cmd][]

- W czarnym oknie poleceń, które się pojawi, wpisz:  

      osmosis

- Jeżeli wszystko działa prawidłowo, powinieneś otrzymać wiadomość podobną do tej:  

![osmosis test][]

- Jeżeli nie widzisz takiego wyniku, a pojawia się komunikat, że nie można znaleźć aplikacji **osmosis**, to mogłeś źle uzupełnić zmienną Path.  

Filtrowanie danych
---------------

Osmosis powinien teraz działać prawidłowo z wiersza polecenia. Aby móc pracować na naszym pliku z danymi, musimy zmienić katalog roboczy na miejsce, gdzie umieściliśmy plik **sample_osmosis.osm.pbf**. Dla ułatwienia, umieściliśmy ten plik w **katalogu C:\**.  

- Aby zmienić folder roboczy na katalog C:\, w wierszu polecenia wpisz następującą komendę i naciśnij Enter:  

      cd C:\
    
- Znak zachęty powinien się zmienić, wskazując, że jesteś teraz w katalogu C:\.  

![cd command][]

Nauczmy się teraz pierwszej komendy Osmosis. Uruchomimy polecenie, które odfiltruje wszystkie szkoły z naszego wielkiego pliku.  

Aby to zrobić, musimy powiedzieć Osmosis kilka rzeczy. Musimy określić:  

- plik wejściowy (sample_osmosis.osm.pbf)  
- reguły, które określą, co chcemy filtrować  
- plik wyjściowy (utworzymy nieskompresowany plik .osm, więc będziemy mogli otworzyć go w JOSM)  

Polecenie, które uruchomimy, to:  

      osmosis --rbf sample_osmosis.osm.pbf --nkv keyValueList="amenity.school" --wx szkoly.osm

Spróbuj uruchomić tą komendę w wierszu polecenia. Kiedy zostanie ukończona, powinieneś zobaczyć nowy plik w swoim folderze, nazwany **szkoly.osm**. Jeżeli otworzymy ten nowy plik w JOSM, zobaczymy, że tylko szkoły zostały odfiltrowane z przykładowego pliku.  

![schools osm][]

Spójrzmy na wykonane polecenie kawałek po kawałku, żeby zrozumieć, jak to wszystko działa. Najpierw wywołujemy nazwę programu.

      osmosis

Następnie podajemy plik wejściowy. Zapamiętaj, że ten plik jest w skompresowanym formacie. **--rbf** jest skrótem od **--read-pbf-fast**. Osmosis, że plik, który wskazujemy po tym argumencie, jest plikiem, z którego chcemy czytać dane.  

      --rbf sample_osmosis.osm.pbf

Następny fragment naszego polecenia, to *--nkv keyValueList="amenity.school"*. Możesz domyślić się, że wskazuje to osmosis, że powinien odfiltrować wszystko z tagiem **amenity=school**. **--nkv** to skrót od **--node-key-value**. To polecenie mówi, że Osmosis, powinien odfiltrować tylko węzły z kluczami i wartościami podanymi w dołączonej liście. Dodatkowe zestawy klucz.wartość mogą być dodane przez stawianie przecinków między nimi.  

      --nkv keyValueList="amenity.school"

Na końcu podajemy nazwę i format pliku wyjściowego. Używamy argumentu **-wx**, który jest skrótem od **--write-xml**. Zauważ, że jeśli chcemy, aby dane były ponownie w formacie PBF, możemy użyć **--wb**, który jest odpowiednikiem **--rbf**.  

      --wx schools.osm

Dalsze działania
---------------

Liczba zadań, jakie można wykonać z Osmosis jest olbrzymia, więc, aby dowiedzieć się więcej najlepiej przejść do strony [Szczegółowe wykorzystanie Osmosis](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43) na Wiki.  

Jednym z przydatnych zadań jest zdolność do dzielenia dużych plików z surowymi danymi OSM file na oddzielne części, zarówno przez podawanie prostokątów, jak i przez tworzenie plików z wielokątami ograniczającymi. Możesz poznać podstawy tego procesu na [stronie z przykładami Osmosis](http://wiki.openstreetmap.org/wiki/Osmosis/Examples).  

[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osmosis test]: /images/osm-data/osmosis-test.png
[cd command]: /images/osm-data/cd-command.png
[schools osm]: /images/osm-data/schools-osm.png


