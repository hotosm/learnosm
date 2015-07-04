---
layout: doc
title: Uređivanje sa JOSM
permalink: /hr/josm/editing-with-josm/
lang: hr
category: josm
---

Uređivanje sa JOSM
=================
Sad smo obradili osnove OpenStreetMap mapiranja. 
Naučili smo kako koristiti GPS i Field Papers za terensku izmjeru, i kako koristiti JOSM za uređivanje točaka, linija i oblika koji čine našu kartu.

U ovom poglavlju vratiti ćemo se JOSM-u i pogledati nekoliko novih koncepata koje do sad nismo obradili. 

JOSM Slojevi
------------
Ako si pratio do sad, primijetio si da možemo dodavati različite stvari u JOSM.
Možemo preuzeti OSM podatke, dodati Bing satelitske snimke, učitati GPX tragove 
i točke, te dodavati Field Papers - što je sve prikazano u glavnom JOSM prozoru.

Možda si također primijetio da svaki put kad dodaš nešto novo u JOSM, pojavi se dodatna 
kategorija u prozoru sa slojevima s desne strane. Ovisno o tome što si otvorio, 
tvoj prozor sa slojevima može izgledati ovako:

![Layers panel][]

Svaki element na ovoj listi predstavlja drugi izvor podataka koji si
otvorio u glavnom prozoru. U ovom primjeru, “Data Layer 1” su OpenStreetMap
podatci koje uređuješ. "Field Papers” je sloj kojim smo dodali svoju
Field Paper kartu JOSM.

Ako dodaš Bing satelitske podloge, pojavit će se novi sloj naziva "Bing Sat."

Ideju o slojevima ponekad nije jednostavno za shvatiti. Dobar način je da zamisliš
svaki sloj kao proziran papir, i svi su postavljeni jedan iznad drugog. Svaki papir
sadrži određeni tip informacije, te svi mogu biti složeni a način kako želiš.

Slojevi koji se koriste kao reference, naprimjer, satelitske podloge, GPS tragovi, Field Papers
karte i slični se inače zovu "base layers" ili osnovni slojevi. OSM data sloj je onaj na
kojem zapravo radiš. 

-   Za pomaknuti sloj, klikni na njega u Layers prozoru te klikni na strelice
    gore ili dolje da bi ga pomaknuo

![Layers up down][]

-   Da bi sakrio sloj, odaberi ga uz pomoć miša i klikni na Show/Hide gumb:

![Layers show hide][]

-   Izabrani sloj se više nebi trebao vidjeti u glavnom prozoru. Ponovno klikni
    Show/Hide i on će se pojaviti nazad.
-   Možeš ukloniti sloj odabirući ga i koristeći gumb za brisanje:

![Layers delete][]

-   Na kraju važno je znati da možeš uređivati samo sloj koji je označen kao
    *aktivan* u JOSM-u. Ako ne možeš uređivati kartu u glavnom prozoru, vjerojatno
    nemaš pravi sloj označen kao aktivan. Većinu slojeva kao GPS točke, Field
    Papers, satelitske podloge i slične ne možeš uređivati. Jedini slojevi koje
    možeš uređivati su OpenStreetMap podatci, koji obično imaju naziv “Data Layer 1”.
-   Da bi sloj postao aktivan, odaberi sloj u Layers prozoru, te klikni
    na Activate gumb:

![Layers activate][]

Korištenje GPS podataka i Field Papers karti
--------------------------------------------

U prethodnim poglavljima vidjeli smo kako skupiti podatke sa
GPS uređajima i Field Papers kartama, te kako ih učitati u JOSM.

Jednom kad si odradio terenski dio posla, trebaš sve te informacije
unijeti u OpenStreetMap.

To radiš na isti način kao što si do sad naučio, - **preuzmi, uredi, spremi**.
Razlika je što sad osim korištenja satelitskih podloga možeš koristiti GPS tragove,
Field Papers karte, bilješke, ili kombinaciju svih.

-   Na primjer, recimo da imaš svoje GPS točke kao pozadinski sloj u JOSM-u,
    na GPS uređaju si snimio točku pod nazivom 030, a u bilješkama si zapisao
    da je 030 škola. Da bi dodao tu točku u OpenStreetMap, odaberi alat za
    crtanje, te dvaput klikni na točku 030 u glavnom prozoru. To će kreirati točku.
    Idi na Presets izbornik, i nađi oznaku za školu. Unesi naziv škole i klikni
    “Apply Preset”. Isto učini za sve ostale točke, linije i oblike.

![GPS in JOSM][]

Oznake
------

Kada crtaš točku, liniju ili oblik, oni imaju svoj položaj, ali nemaju
informacije o tome što su. Drugim riječima, znamo **gdje** su, ali
ne znamo **što** su. Do sad smo koristili Presets izbornik za određivanje
**što** su. Način na koji OpenStreetMap zna **što** je pojedini objekt
je korištenjem **oznaka**.

Oznake su kao naljepnice koje možeš staviti na nešto. Na primjer, ako
nacrtaš pravokutnik, to je samo pravokutnik. Zatim na njega dodamo oznake
koje opisuju što je: ovaj pravokutnik je građevina; naziv građevine je
“Cibona”; građevina ima 16 razina (katova).

Možeš dodati koliko god želiš oznaka na objekt. Oznake se spremaju
kao tekstualni par, **ključ** i **vrijednost**. U OpenStreetMap-u
maloprije navedene oznake bi u stvari izgledale ovako:

-   building = yes
-   name = Cibona
-   building:levels = 16

Ako odabereš objekt u JOSM-u, možeš vidjeti njegove oznake u Properties
prozoru s desne strane. 

![Properties panel][]

### Uređivanje oznaka
Možeš dodavati, uređivati i brisati oznake u Properties prozoru. Međutim oznake
su tradicionalno na engleskom jeziku te ponekad mogu biti zbunjujuće, pa ih je često
jednostavnije koristiti iz Presets izbornika. Kad dodaješ ili mijenjaš oznake,
svojstva objekta se mijenjaju.

-   Za uređivanje oznake objekta, prvo ju odaberi
-   Zatim uredi oznaku na jedan od dva načina: (1) Koristeći Presets izbornik,
    ili (2) uredi oznake direktno u Properties prozoru s desne strane.

###Česta greška: Označavanje točaka kad želiš označiti linije i poligone
Kad uređuješ svojstva točke, prvo odabereš točku i onda joj dodaš oznake
putem Presets izbornika ili direktno u Properties prozoru. Česta greška
je kod određivanja svojstva linije i oblika. Kod odabira objekta važno
je odabrati SAMO liniju, a NE i točke koje čine tu liniju.

Ovo se često događa kad se koristi JOSM alat za odabir (select tool) za
odabir područja oko objekta, koji odabire sve što se nalazi unutar njega,
i linije i točke, te će oznake biti primijenjene na sve uključujući točke.
Budi siguran da si odabrao **samo** linije kad ih želiš označiti.

![Nodes mistake][]

Spremanje OSM datoteke
----------------------

Kad uređuješ s JOSM, uvijek je dobra ideja preuzeti, urediti i poslati promjene
u razumno kratkom vremenskom roku. Ne želiš preuzeti podatke jedan dan, te čekati
nekoliko dana da pošalješ svoje promjene. Što ako netko drugi uređuje to područje
u tom periodu. To će uzrokovati greške i konflikte.

Nemoj se bojati često slati svoje promjene. To osigurava da će tvoje promjene
biti spremljene te nećeš izgubiti svoj trud.

Ako radiš na jednom području, dobra je ideja preuzeti podatke svaki put kad želiš
uređivati jer možda još netko uređuje u tom području.

Iako bi svaki put trebao pokušati preuzeti OSM podatke kad želiš uređivati,
te redovito slati promjene, postoje trenutci kad ćeš htjeti snimiti OSM podatke
na računalo. Na primjer, ako imaš problematičnu veze na internet, htjet ćeš
preuzeti podatke, spremiti ih, urediti, te kasnije poslati promjene.

-   Za snimiti OSM datoteku, provjeri je li to aktivni sloj u Layers
    prozoru. Klikni "File" na gornjem izborniku, te klikni "Save".
    Odaberi lokaciju gdje želiš snimiti dokument i daj mu ime. Također možeš
    snimiti klikom na ovaj gumb:

![JOSM save button][]

-   Sad možeš zatvoriti JOSM i tvoji podatci će biti spremljeni. Kad ponovno
    želiš otvoriti datoteku jednostavno otvori JOSM, idi na “File” izbornik,
    te klikni “Open...”

Sažetak
-------
U ovom poglavlju detaljnije smo obradili JOSM i naučili o slojevima i oznakama.
Sad bi trebao imati solidnu osnovu kako kartirati i kako uređivati OpenStreetMap.

U završnom poglavlju ovog vodiča pogledati ćemo ostale izvore iz kojih možeš 
učiti i napredovati. Kako uvježbavaš što si naučio ovdje i istražuješ dalje,
bit ćeš sve bolji u kreiranju karata sa OSM-om.


[Layers panel]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image00_layers-panel.png
[Layers up down]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image01_layers-panel-up-down.png
[Layers show hide]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image02_layers-panel-show-hide.png
[Layers delete]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image03_layers-panel-delete.png
[Layers activate]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image04_layers-panel-activate.png
[GPS in JOSM]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image05_gps-layer.png
[Properties panel]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image06_properties-panel.png
[Nodes mistake]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image07_nodes-selected-mistake.png
[JOSM save button]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image08_save-button.png
