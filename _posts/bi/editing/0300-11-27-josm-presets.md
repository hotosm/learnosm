---
layout: doc
title: Preset JOSM 
permalink: /bi/editing/josm-presets/
lang: bi
category: editing
---

Preset JOSM 
============
Jika Anda telah menggunakan JOSM dalam waktu yang lama, sekarang Anda mengerti
sedikit mengenai tag dan preset. Setiap ojek didefinisikan dengan dua hal -
pertama, geometri (apakah itu titik, garis, atau poligon dan lokasi), dan
kedua, atribut yang ada dalam bentuk tag.

Ketika Anda menggambar sebuah objek dan memilih dari menu Presets, tag yang
benar secara otomatis diterapkan ke objek.

Jika Anda ingin menggunakan preset, apa yang terjadi ketika Anda ingin menambahkan 
tag yang tidak ada di dalam menu, atau ketika Anda ingin mengkostumisasi tag Anda sendiri?

Pada kasus ini, Anda dapat menambahkan kustom item menu ke Preset. Pada sesi ini kita 
akan melihat bagaimana melakukan ini. Pada [bab berikut](/bi/editing/creating-custom-presets),
kita akan membahas bagaimana membuat file preset yang dikustom Anda sendiri.


Add Presets
-----------
The menus and submenus that make up the Presets menu are stored in files
which describe how to create the menus and forms that come up when you
click on a preset, and how to define what tags are added to an object
based on how the form is filled out.

Presets files can either be added from an online archive, or saved on your
computer locally and added into JOSM.

-	To add a new entry to the Presets menu, open JOSM and go to Edit->Preferences.
-	Click on the third tab down, which looks like a grid covering the planet.

![tagging presets tab][]

-	At the top, click on "Tagging Presets."

![tagging presets menu][]

-	Add a presets file from the internet by selecting one in the list on
	the left, and clicking on the blue arrow. In this example, we will
	add the presets named "Buildings Indonesia by Kate Chapman."

![example presets][]

-	You will see a new item appear in the list on the right.
-	Click OK.
-	You will need to restart JOSM.
-	Create a new layer and add a point or shape.
-	Go to the Presets menu. Click on the item named "Building," which
	has now been added at the bottom of the menu.

![indonesia building form][]

-	If you don't speak Indonesian, this might be hard to read, but
	nonetheless you have been successful and added a custom preset menu.

-	If you have been given a custom presets file, you can add it to the menu
	in a similar way. Simply return to the Preferences menu, and instead
	of selecting from the list, click on the (+) button in the upper right.

![plus button][]

-	Locate your file and give it a name if you like.
-	Click OK.


[tagging presets tab]: /images/en/editing/josm-presets/tagging-presets-tab.png
[tagging presets menu]: /images/en/editing/josm-presets/tagging-presets-menu.png
[example presets]: /images/en/editing/josm-presets/example-presets.png
[indonesia building form]: /images/en/editing/josm-presets/indonesia-building-form.png
[plus button]: /images/en/editing/josm-presets/plus-button.png


