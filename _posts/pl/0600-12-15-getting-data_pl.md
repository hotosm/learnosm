---
layout: doc
title: Pozyskiwanie danych OSM
permalink: /pl/osm-data/getting-data/
lang: pl
category: osm-data
---

Pozyskiwanie danych OSM
=================  

> Przejrzano 2016-04-05

Kiedy potrzebujesz najnowszych danych OpenStreetMap, najłatwiejszym sposobem jest pobranie wyciągu ze strony internetowej. Są różne usługi internetowe, które dostarczają wyciąg danych dla wybranego obszaru.  

Pobieranie wyciągu danych
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) jest firmą wyspecjalizowaną w pracy z OpenStreetMap. Na swojej [stronie pobierania](http://download.geofabrik.de) dostarczają różne darmowe wyciągi w plikach shape i surowym formacie OSM. Przewagą danych pobranych z GeoFabrik jest to, że są rzetelne i codziennie uaktualniane, a poza tym jest to łatwe. Minusem jest to, że dane są wyciągane według kraju, a nie wszystkie państwa są dostępne.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) dostarcza pliki shape i surowe dane OSM dla różnych miast na świecie, wyciągane co tydzień. Jest to przydatne, gdy szukasz wyciągów danych dla pojedynczego miasta.

>Pamiętaj, że obiekty w OpenStreetMap mają nieograniczoną liczbę "dowolnych" tagów,
>a pliki shape mają właściwości przechowywane w ograniczonej liczbie kolumn. Oznacza to,
>że kiedy dane OSM są konwertowane do plików shape, tylko niektóre tagi będą
>zawarte w tabeli pliku shape. Wymienione niżej strony internetowe dostarczają pliki shape
>z domyślnym zestawem popularnych tagów, więc gdy będziesz potrzebował wyciągnąć konkretne tagi,
>będziesz musiał użyć jednego z bardziej wyspecjalizowanych serwisów opisanych dalej
>lub nauczyć się, jak eksportować dane samemu.

Dostosowane wyciągi
-------------------

### Eksporty HOT  

[Humanitarian OpenStreetMap Team](http://hotosm.org) stworzył usługę, która pozwala użytkownikowi wybrać obszar, z którego chce wyciąg, a także może użyć [szablonów JOSM](/pl/josm/josm-presets/)
do wybrania dostosowanych tagów, które mają być zawarte w tym wyciągu. Usługa jest dostępna dla wszystkich krajów, w których działa HOT, pod adresem [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike  

Możesz wybrać swój własny obszar z dowolnej części świata korzystając z [http://extract.bbbike.org/](http://extract.bbbike.org/). Minusem jest to, że nie możesz wybrać dostosowanych tagów, a ilość danych, które możesz pobrać jest ograniczona.  

### Overpass

Overpass, to API (ang. Application Programming Interface) do wyciągania danych z kopii tylko do odczytu głównej bazy danych OpenStreetMap, które może dostarczyć prawie dowolną ilość danych. Używając języka zapytań możesz dostosować, jaki zestaw danych chcesz uzyskać. Możesz zarówno używać API bezpośrednio, generując żądania http-request lub przez interfejs overpass turbo.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) jest interaktywnym generatorem zapytań, w którym najpierw musisz przybliżyć mapę do odpowiedniego obszaru. Wpisz swoje zapytanie w polu po lewej stronie i wywołaj jakąś akcję klikając przyciski na górze strony. Jeżeli nie znasz języka zapytań, to pomoże Ci na początku kreator. Wiki OSM zawiera [pełny opis](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) składni języka zapytań, jak również [zbiór przykładów](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

Na mapie podświetlą się wszystkie dane wybrane przez Twoje zapytanie, które możesz później zmienić. Naciśnij "Uruchom", aby odświeżyć wyniki. Kiedy już będziesz zadowolony z tego, co zobaczysz, "Eksport" zaoferuje Ci wiele opcji do wyboru, a wśród nich surowe dane OSM. Jeżeli ilość danych jest ograniczona, możesz uzyskać do nich bezpośredni dostęp przy przełączaniu się pomiędzy widokiem mapy i widokiem danych przyciskami w prawym górnym rogu. Opcja eksportu *Kwerenda -> kompaktowe OverpassQL* wygeneruje link do użycia w Overpass API.

![overpass turbo][]

Jeżeli chcesz skonstruować wymyślne zapytanie do pobrania zestawu danych z dużego obszaru, to lepiej najpierw przetestować i dopracować to zapytanie w Overpass Turbo na małym terenie. Następnie możesz oddalić widok do całego potrzebnego regionu i użyć wynikowego url zapytania bezpośrednio w API. Następna część wyjaśnia, jak możesz to zrobić.

#### API Overpass

[API Overpass](http://wiki.openstreetmap.org/wiki/Overpass_API) jest dedykowaną usługą zoptymalizowaną do odczytywania, ale nie zapisywania danych OpenStreetMap. W związku z tą optymalizacją działa bardzo szybko w porównaniu do api głównej bazy danych i właściwie nie ma limitu przesyłanych danych. Kilka instancji tej usługi jest dostępnych w sieci, a jedna z nich, użyta w tym przykładzie podaje trochę informacji na [swojej stronie głównej](http://overpass-api.de/).

Jeżeli masz działające zapytanie-URL do wysłania żądania http-request do API Overpass, to narzędzie takie, jak [wget](https://www.gnu.org/software/wget/) - dostępne dla różnych systemów operacyjnych, zobacz [tutaj](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - pozwoli Ci pobrać surowe dane OSM bezpośrednio z serwera i zapisać je lokalnie. Poniższy kod jest skryptem powłoki bash, popularnej w systemach uniksowych, który pobiera wszystkie dane w określonych granicach:

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
>Co się tutaj dzieje (dla tych ciekawskich, którzy nie chcą czytać całej dokumentacji języka)?  
>node(...) wybiera wszystkie węzły w określonych granicach;  
>< podąża w górę, np. wybiera wszystkie linie zawierające dane węzły i wszystkie relacje zawierające te węzły i linie;  
>rel(br) wybiera wszystkie relacje nadrzędne pobranych do tej pory relacji (inaczej wyższe relacje nie zostałyby pobrane)
>



Podsumowanie
-------  

Serwisy wymienione w tym rozdziale to wszystko, co przeciętny użytkownik potrzebuje do pozyskania danych OSM, z którymi chce pracować w oprogramowaniu GIS. Jednak możesz poznać bardziej zaawansowane metody pracy z danymi samemu. Pozostałe rozdziały w tej sekcji są bardziej techniczne, ale pokazują więcej zaawansowanych sposobów na dostęp do danych OSM i ich przetwarzanie.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png