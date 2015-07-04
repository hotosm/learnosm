---
layout: doc
title: Upoznavanje sa JOSM
permalink: "/hr/josm/start-josm/"
lang: hr
category: josm
published: true
---

Naučite se radu u JOSM-u
========================

U ovom poglavlju ćemo naučiti korak po korak kako preuzeti i instalirati
JOSM, Java OpenStreetMap editor. Promijeniti ćemo neke postavke
u programu i učiniti ga lakšim za korištenje. Zatim ćemo otvoriti kartu za primjer te
naučiti neke osnovne operacije programa. Sjetite se da smo vas u uvodnom poglavlju
tražili da nacrtate kartu vlastitog grada ili mjesta? Ovo poglavlje ćemo završiti
ponovo kreirajući tu kartu, ovaj put digitalno. Nakon ovoga ćete dobro razumjeti
kako crtati karte u JOSM-u.

Preuzimanje JOSM softvera
-------------------------

- Ako imate primjerak JOSM-a na CD-u ili USB sticku, možete preskočiti na sljedeći dio, instaliranje JOSM-a.
- Ako nemate JOSM ili ako želite najnoviju verziju, pokrenite svoj web preglednik (Firefox, Chrome, Opera ili Internet Explorer).
- Na vrhu prozora u prostor za upisivanje web lokacija upišite sljedeće:  [josm.openstreetmap.de](http://josm.openstreetmap.de)
- JOSM stranice također možete naći i ako na webu potražite pojam "JOSM".
- Web stranica bi trebala izgledati slično ovome:

  ![JOSM website][]

- Ako koristite Windows OS, odaberite “Windows JOSM
  Installer” da preuzmete JOSM.

  ![Windows installer][]

- Ako koristite drugi operativni sustav, kliknite na link za njega. Preuzimanje bi trebalo započeti. U ovom poglavlju ćemo pretpostaviti da koristite Windows OS, ali upute su slične i za druge operativne sustave.

Instaliranje JOSM-a
-------------------

>  Možda ćete imati problema instalirati JOSM ako Java već nije
>  instalirana na vašem računalu. Ako imate problema u ovom dijelu, 
>  pokušajte preuzeti i instalirati Javu. Možete je preuzeti ovdje:
>  [http://www.java.com/en/download/](http://www.java.com/en/download/)

- Nađite preuzetu JOSM datoteku na računalu. Dva puta kliknite na datoteku da započnete instalaciju.
- Kliknite ‘OK’, ‘Next’, ‘I Agree’, i ‘Install’. Kada je instalacija
  gotova, kliknite 'Finish' kako biste pokrenuli JOSM prvi put.
  Kasnije, kada želite pokrenuti JOSM, kliknite na Start Menu u donjem 
  lijevom djelu ekrana i odaberite program JOSM.
- Možda ćete vidjeti prozor koji će tražiti da postavite noviju verziju softvera.
  No vi već imate najnoviju verziju. Kliknite tipku “Cancel.”
  Ako ne želite ponovo vidjeti ovu poruku, označite kućicu na dnu prije nego kliknete "Cancel".
- Kad se JOSM pokrene, izgledati će slično ovome:

  ![JOSM splash page][]

JOSM Postavke
-------------

Postoje mnoge postavke koje možete podesiti u JOSM-u.
Jedna od postavki koju možda želite postaviti je jezik.
JOSM je preveden na brojne jezike, a vama možda bolje odgovara neki
drugi.

- Kako biste otvorili prozor s postavkama kliknite Edit -\> Preferences.

  ![Preferences window][]

- Na lijevoj strani, kliknite ikonu koja izgleda kao kantica s bojom i kist.
- Na vrhu prozora, kliknite karticu na naziva “Look and Feel”.
- Odaberite svoj jezik u padajućem izborniku pokraj riječi
  “Language”.
  
  ![Look and feel][]

- Kliknite OK.
- Morate ponovo pokrenuti JOSM kako biste spremili postavke. Kliknite “File” u
  gornjem lijevom kutu, i zatim “Exit” na dnu menija.
- Ponovo pokrenite JOSM odabravši Windows Start Meni u donjem
  lijevom kutu. Pronađite JOSM i kliknite na njega da ga pokrenete.

Naučite osnove crtanja u JOSM-u
-------------------------------

- Otvorimo primjer OSM datoteke koju ćemo koristiti da naučimo
  osnovne načine crtanja karata JOSM softverom. Uočite da se ne radi o pravoj karti 
  koja prikazuje stvarno mjesto, pa je stoga nećemo pohraniti u OpenStreetMap
- Ovdje preuzmite datoteku: [sample.osm](/files/sample.osm)
- Sada otvorimo primjer karte u JOSM-u. Kliknite na tipku 
  “Open” u gornjem lijevom kutu.

  ![Open file][]

- Pronađite datoteku **sample.osm**. Vjerojatno se nalazi u vašoj mapi Downloads, 
  osim ako ste ga preuzeli negdje drugdje. Kliknite na datoteku pa zatim “Open”.
- Trebali biste vidjeti kartu za primjer koja izgleda ovako:

  ![Sample file][]

### Osnovne funkcije

- Za pomicanje karte gore, dolje, lijevo i desno držite desnu tipku miša i mičite ga.
- Postoji nekoliko načina za približiti ili udaljiti kartu. Ako imate miša,
  možete koristiti kotačić za uvećavanje i umanjivanje. Ako koristite prijenosno računalo i nemate miša
  kartu možete uvećati ili umanjiti koristeći mjerilo karte u gornjem lijevom kutu prozora s kartom.
  Pomičite pokazivač mjerila lijevo ili desno držeći pritisnu lijevu tipku miša pomičući ju lijevo, desno.

  ![Scale bar][]

- Pogledajte primjer karte. Uočite nekoliko različitih objekata na njoj.
  Imamo rijeku, šumu, neke zgrade, nekoliko prometnica
  i nekoliko trgovina. Da odaberete objekt, kliknite na njega lijevom tipkom miša.

### Točke, Linije i oblici

- Kako odabirete razne objekte na našoj karti za testiranje, primijetite da ona ima 
  razne tipove objekata. Postoje točke, linije i oblici.
- Točke predstavljaju pojedinačnu lokaciju, predstavljenu simbolima. Na karti imamo dvije točke,
  trgovina cipelama i supermarket. Trgovinu cipelama predstavlja simbol cipele, a supermarket predstavljaju
  kolica za kupovinu.
- Postoji nekoliko linija na karti, koje predstavljaju ceste. 
  Ako pažljivo pogledate, vidjeti ćete da linije sadrže točke.  
  Ove točke nemaju simbola ili drugih pridruženih informacija, već samo definiraju položaj linija.
- Konačno, postoje brojni oblici na karti koji predstavljaju razna mjesta, 
  šumu, rijeku, park i zgrade. Oblici predstavljaju površine kao polja ili zgrade.
  Oblik je poput linije, jedina razlika je da završava u početnoj točci.

> Lako je razmišljati o karti koja sadrži tri osnovna tipa objekata
> točke, linije i oblici. OpenStreetMap koristi posebnu terminologiju
> koju ćete usvojiti kako napredujete. U OSM-u točke se zovu
> **nodes**, linije se zovu **ways**. Oblik se zove **closed way**
> jer se jednostavno radi o liniji koja završava u svome početku.

- Možda ste primijetili da kada odaberete objekt, pojavi se popis 
  desno od karte u prozoru naslova "Properties". Elemente liste nazivamo
  tagovi. Tagovi predstavljaju informacije koje se vežu uz točku, liniju ili oblik
  i koje objašnjavaju o čemu se radi. Više o tagovima ćemo naučiti u kasnijim poglavljima.
  Za sada sve što trebate znati je da ove informacije pomažu da znamo je li naš objekt šuma, rijeka
  građevina ili nešto drugo. 
- Razmislite kako ručno nacrtati kartu i kako i tamo koristite 
  točke, linije i oblike. Koja druga mjesta je najbolje predstaviti s ova tri oblika? 

### Izmjene na objektima

- Odaberite šumu na lijevoj strani karte. Kliknite na 
  liniju koja označava šumu a NE jednu od točaka na liniji. Sad 
  držite lijevu tipku miša stisnutom i mičite miš. Trebali biste 
  ovime moći pomaknuti šumu na drugu lokaciju.
- Kliknite na jednu od točaka na liniji koja označava šumu. Držite stisnutu lijevu tipku
  i mičite miša. Sada mičete točku. Ovako možete promijeniti oblik objekta 
  ili pomaknuti pojedine njegove točke.

### Crtanje

- Na lijevoj strani JOSM prozora nalazi se kolumna tipki. Mnoge tipke 
  otvaraju prozore na desnoj strani programa koji daju više informacija
  o karti. Najvažnije tipke su na samom vrhu kolumne. Ove tipke definiraju
  što možete raditi s mišem. 
- Najviše ćemo se služiti gornjim tipkama. Njih ćemo koristiti za odabir objekata
  i crtanje novih. 
- Do sada ste koristili Select (Odaberi) alat koji izgleda ovako:

  ![Select tool][]

- Prije crtanja, provjerite da nemate ništa odabrano. Kliknite na crni prostor na karti, 
  tamo gdje je prazno, kako biste bili sigurni da ništa nije ostalo odabrano.
- Kliknite na drugu tipku, alat za crtanje (Draw tool).

  ![Draw tool][]

- Nađite prazno područje na karti i duplo kliknite. Ovo će stvoriti jednu točku.
- Ako želite nacrtati liniju, kliknite mišem jednom. Pomaknite miša i kliknite ponovo.
  Nastavite dok ne završite željenu liniju. Za završiti liniju, duplo kliknite.
- Oblike crtate isto kako i linije, jedino oblik završavate da duplo kliknete na početnu
  točku linije.

### Dodajte unaprijed definirana objašnjenja

- Sada znamo kako crtati točke, linije i oblike, ali još nismo definirali
  što oni predstavljaju. Želimo moći definirati da su naše točke trgovine, škole ili nešto
  drugo, te jesu li naši oblici polja, građevine ili nešto treće. 
- Kliknite na alat za odabir u kolumni tipki na lijevoj strani.

  ![Select tool][]

- Odaberite jedan od objekata koji ste nacrtali alatom za crtanje. Iz izbornika s vrha ekrana 
  odaberite “Presets”. Mičite miša kroz podizbornike dok ne nađete tip lokacije koju želite definirati.
- Kada kliknete na tip objekta, pojaviti će se formular koji će tražiti dodatne informacije.
  Ne trebate popuniti sva polja, ali možda ćete htjeti popuniti neka važna, kao ime objekta.
- Kada ste završili unos podataka, odaberite “Apply
  Preset”. Ako je sve drugo dobro, vaša točka, linija ili oblik će promijeniti boju
  ili pokazati simbol. To se događa zato što ste definirali o kakvom objektu se radi.

Nacrtajte vlastitu kartu
------------------------

- Sada nacrtajmo kartu kako bismo izvježbali tehnike koje ste naučili.
  Bilo bi dobro da nacrtate kartu koju ste prije nacrtali ručno.
- Pomaknite područje za kartu dalje od našeg primjera. Držite desnu tipku miša 
  i mičite miša dok ne dođete do praznog prostora na kojemu ne smetano možete crtati. 
- Koristite alat za crtanje (Draw), za crtanje točaka, linija i oblika. 
  Opišite o kojim se objektima radi koristeći se menijem unaprijed definiranih definicija
  (Presets menu)
- Kad ste završili, imate vlastitu kartu, sličnu karti sample.osm koju smo koristili kao primjer.

Zaključak
---------

Odlično! Ako je sve dobro prošlo, naučili ste kako postaviti JOSM 
na vašem računalu, kao i osnovne alate za crtanje karata. U sljedeća dva poglavlja
naučiti ćete dvije metode za stvaranje karte vašeg mjesta, korištenjem GPS uređaja
i korištenjem Field Papers-a. Nakon toga ćemo se vratiti u JOSM, iskoristiti prikupljene podatke
te dodati sakupljene informacije u OpenStreetMap.


[JOSM website]: /images/en/beginner/03_start-josm/en_beg_03_start-josm_image00_josm-website.png
[Windows installer]: /images/en/beginner/03_start-josm/en_beg_03_start-josm_image01_windows-installer.png
[JOSM splash page]: /images/en/beginner/03_start-josm/en_beg_03_start-josm_image02_josm-splash-page.png
[Preferences window]: /images/en/beginner/03_start-josm/en_beg_03_start-josm_image03_preferences-window.png
[Look and feel]: /images/en/beginner/03_start-josm/en_beg_03_start-josm_image04_look-and-feel.png
[Open file]: /images/en/beginner/03_start-josm/en_beg_03_start-josm_image05_open-file.png
[Sample file]: /images/en/beginner/03_start-josm/en_beg_03_start-josm_image06_sample-file.png
[Scale bar]: /images/en/beginner/03_start-josm/en_beg_03_start-josm_image07_scale-bar.png
[Select tool]: /images/en/beginner/03_start-josm/en_beg_03_start-josm_image08_select-tool.png
[Draw tool]: /images/en/beginner/03_start-josm/en_beg_03_start-josm_image09_draw-tool.png
