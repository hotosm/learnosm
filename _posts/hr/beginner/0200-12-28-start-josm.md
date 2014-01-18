---
layout: doc
title: Getting Started with JOSM
permalink: "/hr/beginner/start-josm/"
lang: hr
category: beginner
published: true
---

Naučite se radu u JOSM-u
=============================

U ovom poglavlju ćemo naučiti korak po korak kako preuzeti i instalirati
JOSM, Java OpenStreetMap editor. Promijeniti ćemo neke postavke
u programu i učiniti ga lakšim za korištenje. Zatim ćemo otvoriti kartu za primjer
naučiti neke osnovne operacije programa. Sjetite se da smo vas u uvodnom poglavlju
tražili da nacrtate kartu vlastitog grada ili mjesta? Ovo poglavlje ćemo završiti
ponovo kreirajući tu kartu, ovaj puta digitalno. Nakon ovoga ćete dobro razumjeti
kako crtati karte u JOSM-u
In this chapter we will learn step by step how to download and install
JOSM, the Java OpenStreetMap editor. We will change some of the settings
in JOSM to make it easier to use. Then we will open a sample map and
learn some of the basic operations of the software. Remember in the
introduction chapter when we asked you to draw a map of your town or
village? We will conclude this chapter by drawing your map again, this
time digitally. After this you should have a good understanding of how
to draw maps in JOSM.

Preuzimanje JOSM softvera
-------------

- Ako imate primjrak JOSM-a na CD-u ili USB sticku, možete preskočiti na sljedeći dio, instaliranje JOSM-a.
- Ako nemate JOSM ili ako želite najnoviju verziju, pokrenite svoj web preglednik (Firefox, Chrome, Opera ili Internet Explorer).
- Na vrhu prozora u prostor za upisivanje web lokacija upišite sljedeće:  [josm.openstreetmap.de](http://josm.openstreetmap.de)
- JOSM stranice također možete naći i ako na webu potražite pojam "JOSM".
- Web stranica bi trebala izgledati slično ovome:

  ![JOSM website][]

- Ako radite u Windows OS-u, odaberite “Windows JOSM
  Installer” da preuzmete JOSM.

  ![Windows installer][]

- Ako koristite drug operativni sustav, kliknite na link za njega. Preuzimanje bi trebalo započeti. U ovom poglavlju ćemo pretpostaviti da koristite Windows OS, ali upute su slične i za druge operativne sustave.

Instaliranje JOSM-a
------------

>  Možda ćete imati problema instalirati JOSM ako Java već nije
>  instalirana na vašem računalu. Ako imate problema u ovom dijelu, 
>  pokušajte preuzeti i instalirati Javu. Možete je preuzeti ovdje:
>  [http://www.java.com/en/download/](http://www.java.com/en/download/)

- Nađte preuzetu JOSM datoteku na računalu. Dva puta kliknice na datoteku da započnete instalaciju.
- Kliknite ‘OK’, ‘Next’, ‘I Agree’, i ‘Install’. Kada je instalacija
  gotova, kliknite 'Finish' kako biste pokrenuli JOSM prvi put.
  Kasnije, kada želite pokrenuti JOSM, kliknite na Start Menu u donjem 
  lijevom djelu ekrana i odaberite program JOSM.
- Možda ćete vidjeti prozor koji će tražiti da postavite noviju verziju softvera.
  Ne vi već imate najnoviju verziju. Kliknite tipku “Cancel.”
  Ako ne želite ponovo vidjeti ovu poruku, označite kućicu na dnu prije nego kliknete "Cancel".
- Kad se JOSM pokrene, izgledati će slično ovome:

  ![JOSM splash page][]

JOSM Postavke
--------------------

Postoje mnoge postavke koje možete podesiti u JOSM-u.
Jenda od postavki koju možda želite postaviti je jezik.
JOSM je preveden u brojne jezike, a vama možda bolje odgovara neki
drugi.

- Kako biste otvorili prozor s postavkama kliknite Edit -\> Preferences.

  ![Preferences window][]

- Na lijevoj strani, kliknite ikonu koja izgleda kao kantica s bojom i kist.
- Na vrhu prozora, kliknite karticu na naziva “Look and Feel”.
- Odaberite svoj jezik u padajućem meniju pokraj riječi
  “Language”.
  
  ![Look and feel][]

- Kliknite OK.
- Morate ponovo pokrenuti JOSM kako biste spremili postavke. Kliknite “File” u
  gornjem lijevom kutu, i kliknite “Exit” na dnu menija.
- Ponovo pokrenite JOSM odabravši Windows Start Meni u donjem
  lijevom kutu. Pronađite JOSM i kliknite na njega da ga pokrenete.

Naučite osnove crtanja u JOSM-u
-----------------------------

- Otvorimo primjer OSM datoteke koji ćemo koristiti na da naučimo
  osnovne načine crtanja karata JOSM softverom. Uočite da se ne radi o pravoj karti 
  koja prikazuje stvarno mjesto, pa je stoga nećemo pohraniti u OpenStreetMap
- Ovdje preuzmite datoteku: [sample.osm](/files/sample.osm)
- Sada otvorimo primjer karte u JOSM-u. Kliknite na tipku 
  “Open” u gornjem lijevom kutu.

  ![Open file][]

- Pronašite datoteku **sample.osm**. Vjerojatnio se nalazi u vašoj mapi Downloads, 
  osim ako ste ga preuzeli negdje drugdje. Kliknite na datoteku pa zatim “Open”.
- Trebali biste vidjeti kartu za primjer koja izgleda kao:

  ![Sample file][]

### Osnovne funkcije

- Za pomicanje karte gore, dolje, lijevo i desno držite desnu tipku miša i pomičite ga.
- Postoji nekoliko načina za približiti ili udaljiti kartu. Ako imate miša,
  možete koristiti kotačić za uvećavanje i umanjivanje. Ako koristite laptop i nemate miša
  možete kartu uvećati ili umanjiti koristeći mjerilo karte u gornjem lijevom kutu prozora s kartom.
  Pomičite pokazivač mjerila lijevo ili desno držeći pritisnutim lijevu tipku miša i pomicanjem lijevo, desno.

  ![Scale bar][]

- Pogledajte primjer karte. Uočite nekoliko različitih objekata na njoj.
  Imamo rijeku, šumum neke zgrade, nekoliko prometnica
  i nekoliko trgovina. Da odaberete objekt, kliknite na njega lijevom tipkom miša.

### Točke, Linije i oblici

- Kako odabirete razne objekte na našoj karti za testiranje, primjetite da ona ima 
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

> It's easy to think of a map as containing these three basic types of objects - 
> points, lines, and shapes. In OpenStreetMap there is special terminology
> which you will come to learn as you progress. In OSM, points are actually called
> **nodes**, and lines are called **ways**. A shape is called a **closed way**
> because it is just a line that ends at the same point where it begins.

- You may notice that when you select an object, a list appears to the
  right of the map in a window called “Properties”. These are known as
  tags. Tags are information that is tied to a point, line or shape
  that describes what it is. We’ll learn more about tags in a later
  chapter. For now all you need to know is that this
  information helps describe whether our object is a forest, a river,
  a building, or something else.
- Think about drawing a map by hand, and how you are also drawing
  points, lines, and shapes. What other places are best represented by
  points? Lines? Shapes?

### Changing Objects

- Select the forest on the left side of the map. Be sure to click on
  the line around the forest, not one of the points on the line. Now
  hold your left mouse button down and drag your mouse. You should be
  able to move the forest to a new location on the map.
- Click on one of the points on the line around the forest. Hold your
  left mouse button down and drag your mouse. You should be able to
  move the point. This is how you can change the shape of an object,
  or move a point.

### Drawing

- On the left side of JOSM is a column of buttons. Many of these
  buttons open new windows on the right side that provide more
  information about the map. The most important buttons, however, are
  at the top of these column. These buttons change what you can do
  with your mouse.
- The top buttons in this column are the ones you will use the most.
  They are used for selecting objects and for drawing new ones.
- Until now, you have been using the Select tool, which looks like
  this:

  ![Select tool][]

- Before you draw, you need to make sure that nothing is selected.
  Click in the black space on the map, where it is empty, to make sure
  nothing is selected.
- Click on the second button, the Draw tool.

  ![Draw tool][]

- Find an empty area on the map, and double-click with your mouse.
  This will draw a single point.
- To draw a line, single-click with your mouse. Move your mouse and
  click again. Continue until you are happy with your line. To end the
  line, double-click your mouse.
- Draw a shape the same way that you draw a line, but finish the shape
  by double-clicking on the point where you started the line.

### Add Presets

- Now we know how to draw points, lines and shapes, but we still
  haven’t defined what they represent. We want to be able to say that
  our points are shops, schools, or something else, and whether our
  shapes are fields, buildings, or something else.
- Click on the Select tool, in the column of buttons on the left.

  ![Select tool][]

- Select one of the objects that you drew with the Draw tool. On the
  top menu, click “Presets”. Move your mouse through the sub-menu to
  the type of location you would like to define.
- When you click on a preset, a form will pop up asking you for more
  information. You do not have to fill in every field, but you may
  wish to add some of the important fields, such as the name of the
  object.
- When you are finished entering the information, click “Apply
  Preset”. If everything went well, your point, line, or shape should
  change colors or show a symbol. This is because you have defined
  what it is.

Draw Your Own Map
-----------------

- Now let’s draw a map in order to practice the techniques you have
  learned. You may wish to redraw the map that you drew on paper previously.
- Drag the map away from the sample map. Hold the right mouse button
  and drag your mouse, until you have a nice empty area to draw on.
- Use the Draw tool to create points, lines, and shapes. Describe what
  your objects are by selecting from the Presets menu.
- When you are finished, you should have your own map, similar to the
  sample map that we opened in sample.osm.

Zaključak
-------

Odlično! Ako je sve dobro prošlo, naučili ste kako postaviti JOSM 
na vašem računalu, kao i osnovne alate za crtanje karata. U sljedeća dva poglavlja
naučiti ćete dvije metode za stvaranje karte vašeg mjesta, korištenjem GPS uređaja
i korištenjem Feld Papers-a. Nakon toga ćemo se vratiti u JOSM i iskoristiti prikupljene podatke
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
