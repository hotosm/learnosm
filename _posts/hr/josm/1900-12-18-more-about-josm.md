---
layout: doc
title: Više o JOSM
permalink: /hr/josm/more-about-josm/
lang: hr
category: josm
---

Više o JOSM
===========

U prošloj lekciji ste instalirali JOSM i počeli crtati vaše prve točke, linije i oblike. Dodali ste atribute (presets) tim objektima kako biste ih opisali. Pred kraj ste naučili kako nacrtati vlastitu kartu u JOSM aplikaciji. 

To je bilo odlično za vježbu, a sada smo spremni raditi izmjene u OSM sustavu. 

U ovoj lekciji ćemo pobliže pogledati korisničko sučelje JOSM-a i naučiti kako ga iskoristiti za uređivanje OSM karata.

Ciklus uređivanja
-----------------
Uređivanje OpenStreetMap-a JOSM aplikacijom je sličan uređivanju iD editorom koje smo vidjeli ranije. No zbog toga što je JOSM desktop aplikacija, radi malo drugačije. Proces uređivanja i dodavanja podataka u OSM sustav pomoću JOSM aplikacije će uvijek biti sljedeći:

1. **Preuzmite** trenutačne podatke o karti iz OSM-a
2. **Uredite** preuzete podatke koristeći satelitske slike, GPS, Field Papire i bilješke
3. **Snimite** izmjene natrag u OpenStreetMap

Preuzimanje OSM podataka
------------------------
Prvi korak uređivanja je preuzimanje podataka za područje u svijetu koje želite poboljšati. Zapamtite da to morate učiniti svaki put kada radite izmjene na karti, jer kartu često mijenjaju i drugi korisnici.

-	Kliknite na “File” u gornjem lijevom kutu JOSM-a i odaberite “Download
    from OSM”. Ovo će otvoriti prozor za preuzimanje podataka. Ovaj prozor još lakše možete otvoriti ako kliknete tipku za preuzimanje (download) kao na ilustraciji:

![JOSM Download Button][]

-   Kada se otvori prozor za preuzimanje, ugledati ćete kartu s rozim pravokutnikom. Ako ne 
    vidite kartu, kliknite karticu “Slippy map”.

![JOSM Download Dialog][]

-   Rozi pravokutnik pokazuje područje karte koje želite preuzeti za uređivanje.
    Koristite miša kako biste se pomakli i približili si područje koje dobro poznajete
    kao vaš rodni grad ili susjedstvo. Kartom upravljate kao i glavnom kartom u 
    JOSM-u. Desnom tipkom miša pomičete kartu, a kotačićem kartu približavate i udaljavate. 

>	Ponekad, ako radite na prijenosnom računalu, može biti teško
>	manipulirati s kartom. Rad u JOSM-u je puno lakši ako imate miša,
>	ali većina modernih prijenosnika vam omogućava pomicane karte pomoću touchpada

-	Nacrtajte pravokutnk oko područja koje želite preuzeti. Da nacrtate novi pravokutnik
    kliknite na kartu, držite lijevu tipku miša stisnutu i pomaknite miša da stvorite
    pravokutnik. Da završite crtanje, otpustite tipku.
-   Kada ste zadovoljni s veličinom i položajem pravokutnika, kliknite “Download” na dnu
    prozora. JOSM će preuzeti podatke za ovo područje iz OpenStreetMap baze podataka i otvoriti je u prozoru za prikaz karte, kako biste mogli raditi izmjene.

### Dodajte pozadinske snimke
Ako ste pratili kada smo dodavali prve točke iD editorom, sjećate se da je ispod podataka o karti bila prikazana satelitska snimka koja nam je pomogla da identificiramo objekte na tlu. Satelitske snimke su bile u vlasništvu Microsoft Bing-a, koji su velikodušno dali svoje satelitske snimke OpenStreetMap korisnicima kao referentni izvor podataka dok rade izmjene na karti. 

-	Kako biste dodali Bing satelitske snimke u JOSM, kliknite na "Imagery" u glavnom izborniku
    JOSM-a i odaberite “Bing Sat.”

>   Ako ne vidite Bing Sat u izborniku Imagery, možda ga morate aktivirati
>   u postavkama JOSM-a. Idite na Edit -> Preferences i kliknite ikonu
>   “WMS TMS”. Možda ćete morati kliknuti na strelicu dolje da nađete ovu opciju.
>
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
>
>   Kliknite “Bing Sat”. Zatim kliknite “Activate”.


### Pregled JOSM-a
Sad kada smo preuzeli OSM podatke i dodali Bing satelitske snimke, pogledamo još jednom korisničko sučelje JOSM-a.

![JOSM layout][]

Već ste upoznati s glavnim prozorom - radi se o prostoru za prikaz karte i tu se događa najviše toga. Ovdje ćete pregledavati, mijenjati i dodavati OpenStreetMap podatke. 

S desne strane prozora s kartom se nalazi niz prozorčića koji imaju svoje funkcije. Obično kada instalirate JOSM, nekoliko prozorčića se automatski pojavi, kao Layers (Slojevi), Properties (Svojstva) i Selection (Odabrano). Kada odaberete točku, liniju ili oblik u prozoru s kartom, objekt će biti prikazan u Selection prozorčiću. Informacije o objektu će biti prikazane u Properties prozorčiću, a korisničko ime autora objekta će biti prikazano u Authors (Autor) prozorčiću. 

Ove prozorčiće možete otvoriti ili zatvoriti ako kliknete na razne tipke s donje lijeve strane JOSM-a. Iznad ovih tipki, gore desno se nalaze alati kojima određujete što radite s mišem. Neke od njih već znate, alat za odabir objekata i alat za crtanje. Ispod njih se nalaze alati pomoću kojih je lakše povećati (približiti) kartu, brisati objekte, crtati oblike ili stvoriti liniju koja je paralelna s drugom linijom.

Uređivanje (izmjena podataka)
-----------------------------
Završili smo prvi korak uređivanja, preuzimanje podataka. Pripremili smo JOSM tako da vidimo satelitske snimke kao referentnu podlogu. Sljedeći korak je da uredimo kartu i dodamo nove stvari. 

Ovisno o području koje ste preuzeli, možda ćete imati kako puno ili vrlo malo postojećih podataka. No uočite da se radi o istoj vrsti podataka kakvu smo vidjeli ranije, točke, linije i oblici koji predstavljaju prave lokacije. 

-	Pomoću tehnika koje ste do sada usvojili, dodajte par vama poznatih točaka u kartu.
    Ako uočite greške, pokušajte ih ispraviti. 
-	Ne trebate krenuti previše napadno dok učite. Ako niste sigurni u nešto, 
    bolje to ostavite kako je bilo. 
-	Ako želite pomaknuti točku, liniju ili oblik, koristite alat **select tool**. Kliknite
    na objekt i odvucite ga tamo gdje bi trebao biti. Ovako možete ispraviti lokaciju objekata koji su ucrtani na krivom mjestu.

![JOSM select tool][]

-   Koristite alat za crtanje **draw tool** da nacrtate nove točke, linije i oblike.
    Opišite te objekte odabirom iz izbornika Presets (unaprijed definirani tipovi), kao
    što ste to radili u prošloj lekciji.

>	Nikad ne editirajte kartu izvan područja koje ste preuzeli
>	Možete vidjeti pravokutnik koji označava područje za koje ste preuzeli podatke jer
>	jer mu pozadina nije šrafirana dijagonalnim linijama
>
>	![JOSM area downloaded][]

Snimite izmjene
---------------
Treći i konačni korak da dovršimo naše izmjene je pohranjivanje izmjena koje smo napravili u OpenStreetMap bazu podataka. Za snimanje promjena, moramo biti spojeni na internet.

-   Kliknite “File” padajući meni, i odaberite “Upload Data”. Ovo će
    otvoriti prozor za pohranu podataka. Do ovog prozora možete i jednostavnije pritiskom
    na tipku za spremanje izmjena prikazanu ovdje:

![JOSM Upload Button][]

-   Prozor koji se pojavljuje prikazuje popis objekata koje dodajete i objekata
    koje mijenjate ili brišete. U polju na dnu prozora vas se traži da unesete
    komentare o izmjenama koje radite. Ovdje opišite prirodu vaših izmjena.

![JOSM Upload Dialog][]

-   Kliknite “Upload Changes”.
-	Ako je ovo prvi put da snimate promjene u OpenStreetMap, morati ćete unijeti 
    vaše OSM korisničko ime i zaporku. 
-	Unesite ih u prozor koji se pojavio. Ako označite odgovarajuće polje u ovom prozoru,
    JOSM će zapamtiti vaše podatke i nećete ih trebati ponovo unijeti. 
    Kliknite “Authenticate”.

![JOSM Authenticate][]

-	Prijenos podataka na OSM poslužitelje će trajati neko vrijeme i onda ste završili proces.
    Izmjenili ste OpenStreetMap kartu.

>	Kada radite na karti, uvijek snimite izmjene prije nego što
>	zatvorite JOSM. Čak i ako imate još izmjena, spremite promjene,
>	i onda prođite kroz proces ponovo kada imate vremena dovršiti posao.
>	Ne želite izgubiti uloženi rad!

Provjeriti izmjene na karti
---------------------------
-   Otvorite web preglednik i posjetite stranicu: [http://openstreetmap.org/](http://openstreetmap.org/)
-   Postavite kartu da pokazuje područje na kojem ste radili.
-   Trebali biste vidjeti promjene na karti. Ako ne vidite, pritisnite CTRL+R da 
    osvježite web stranicu. Nekad se karta ne osvježi ispravno i treba je ponovo otvoriti.
-   Što ako ne vidite svoje izmjene? Ne brinite, nekad je potrebno nekoliko minuta da bi se 
    promjene na karti prikazale. Također možete provjeriti vaše izmjene karte u JOSM-u, da vidite jeste ih ispravno dodali. Dobro opće pravilo je da ako vaša točka ima ikonu u JOSM-u, 
    tada biste je trebali vidjeti i na OpenStreetMap web stranici.

Sažetak
-------
Sad kada ste vidjeli kako dodati sadržaj u OpenStreetMap, što je sljedeće? Mijenjati kartu je odlično, ali to nije jedini aspekt izrade karata. Trebati ćete naučiti kako izaći na teren i skupiti informacije o konkretnim područjima.

U sljedećim lekcijama ćete naučiti dvije metode, GPS i Field Papers, koje koristimo za prikupljanje geografskih podataka. Informacije skupljene s obje ove metode možete uvesti u JOSM i koristiti ih za uređivanje karte.

[JOSM Download Button]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image00_download-button.png
[JOSM Download Dialog]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image01_download-dialog.png
[JOSM Preferences up down]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image02_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image03_preferences-wms-tms.png
[JOSM layout]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image04_layout.png
[JOSM select tool]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image05_select-tool.png
[JOSM area downloaded]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image06_area-downloaded.png
[JOSM Upload Button]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image07_upload-button.png
[JOSM Upload Dialog]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image08_upload-dialog.png
[JOSM Authenticate]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image09_authenticate.png
