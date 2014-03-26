---
layout: doc
title: Membuat Kustom Presets
permalink: /bi/editing/creating-presets/
lang: bi
category: editing
---

Membuat Kustom Presets
=======================
Pada [bab sebelumnya](/bi/editing/josm-presets) kita telah melihat bagaimana mengkostumisasi menu preset 
yang dapat ditambahkan ke dalam JOSM. Pada bab ini kita akan membahas bagaimana membuat file preset kustom 
Anda sendiri.

PERINGATAN ! Ini adalah topik tingkat lanjut... pertimbangkanlah !

Pengenalan XML
---------------
Untuk membuat menu Presets sendiri, pertama kita perlu memahami sebuah bahasa yang bernama XML. Jika Anda sudah mengenal dengan XML silakan melanjutkan ke sesi berikutnya. 

XML, singkatan dari “Extensible Mark-up Language”, adalah bahasa komputer hampir sama dengan HTML. Perbedaan utama adalah bahwa XML yang didesain untuk membawa data, tidak menampilkannya. Banyak aplikasi di internet menggunakan XML untuk mengirimkan data, termasuk OpenStreetMap. XML menggunakan elemen, dan setiap elemen dapat berisi elemen anak di dalamnya. Contohnya, mari bayangkan kita ingin membuat sebuah file XML yang berisi data mengenai menu restoran. Kita harus membuat elemen root untuk mengisi semua data mengenai menu kita. Elemen root kita akan memiliki tag pembukaan dan penutupan, seperti ini:

	<menu>
      ... data apa pun yang ingin kita masukan ke dalam menu kita ...
	</menu>

Informasi yang berisi di dalam sebuah elemen, dan dalam setiap elemen dapat lebih banyak elemen.

  	<menu>
	  <item name=“Hamburger”>
		<cost>400</cost>
		<description>Delicious beef patty</description>
	  </item>
	  <item name=“Nasi Goreng”>
		<cost>200</cost>
		<description>Indonesian Fried Rice</description>
	  </item>
  	</menu>

Pada contoh ini kita telah menempatkan dua &lt;item&gt; elemen di dalam elemen &lt;menu&gt; kita untuk mendeskripsikan dua item yang berbeda yang terkandung dalam menu. Setiap item
berisi dua elemen lebih di dalamnya, &lt;cost&gt; dan &lt;description&gt;. Perhatikan juga bagaimana kita menulis name=”Hamburger” di dalam pembukaan &lt;item&gt; tag. Ini bernama sebuah atribut, dan menambahkan informasi mengenai elemen.

### Istilah XML
*	**elemen root:** elemen terluar dari sebuah dokumen XML, yang menjelaskan apa yang terkandung di dalamnya
*	**elemen:** objek XML, yang diisi dengan tag pembukaan dan penutupan, seperti &lt;item&gt; ... data ... &lt;/item&gt;
*	**tag:** sesuatu yang berisi di dalam tanda kurung, seperti &lt;item&gt;.  &lt;item&gt; adalah tag pembukaan
	dari elemen, dan &lt;/item&gt; adalah tag penutup. Jangan mempermasalahkan ini dengan tag OSM, yang memiliki
	perbedaan arti.
*	**atribut:** sepotong informasi yang terkandung di dalamnya sebuah tag, seperti name=“Hamburger”

Penggunaan XML untuk menahan dan mengirim data yang besar karena ini mudah untuk dipahami oleh komputer.

File Preset JOSM
-----------------
Mari menambahkan contoh file preset ke dalam JOSM dan menganalis cara kerjanya.

*	Download file [sample_presets.xml](/files/sample_presets.xml).
*	Kemudian memuatnya ke dalam JOSM seperti yang dijelaskan pada [bab sebelumnya](/bi/editing/josm-presets).
*	Membuat sebuah layer baru dan objek baru.
*	Pergilah ke menu Presets. Akan ada item baru yang bernama "Sample Building". Klik di atasnya.

![sample building menu][]

Perhatikan bahwa form yang muncul memiliki tiga field di dalamnya, dan masing-masing menerima jenis input yang berbeda. Fiels pertama, nama bangunan, menerima sebuah string teks sebagai input. Kedua, penggunaan bangunan, memiliki kotak daftar pilihan. Field terakhir adalah kotak centang, berarti ini hanya dapat memiliki satu dari dua value, on atau off.


![sample presets form][]

Sekarang mari lihat di file XML yang mendefinisikan form Preset ini. 

*	Carilah file XML pada komputer Anda dan bukelah dengan text editor. Jika Anda menggunakan Windows Anda dapat menggunakan program Notepad. Jika Anda ingin lebih mudah dalam
	penggunaan editor, Anda mungkin mendownload aplikasi Notepad++ gratis.
*	File **sample_presets.xml**  terlihat seperti ini:

![sample presets file][]

Untuk saat ini, mari kita abaikan garis enam pertaman dan garis terakhir, fokus pada segala sesuatu diantara tag &lt;item&gt;.

Garis pertama terlihat seperti ini: 

	<item name="Sample Building" type="node,closedway">

Ini adalah tag pembukaan dari sebuah item yang ditambahkan ke menu. Ini memiliki dua atribut, nama dan tipe. Nama mendefinisikan bagaimana ini akan muncul pada menu Preset. Tipe 

This is the opening tag of an item which is added to the menu. It has two attributes, name and type. The name defines how this will appear on the Presets menu. The type limits this preset to specific types of objects. In this case, the preset can only be applied to points and shapes - in other words, nodes and closed ways. If you try to apply this preset to a line, it won't work.

Let's look at the next line:

	<label text="Building Form" />

When you click on the menu and open the sample form, at the top you see the text "Building Form." This is the text defined in this line. This defines a &lt;label&gt; element, which simply displays text in the form. The text is defined by the attribute *text="some text"*.

Go down a few lines and find this:

	<key key="building" value="yes" />

This is one of the tags that will be applied to the object we have selected. Because it uses the element &lt;key&gt;, the OSM tag given here will be automatically applied when the preset is chosen. Hence this object will automatically obtain the tag *building=yes*.

The next line is a bit different, using the &lt;text&gt; element.

	<text key="name" text="Name of Building" default=""
		delete_if_empty="true" />

The &lt;text&gt; element creates a blank field. When the form is created in JOSM, the user will be able to fill in the empty field. Because the attribute *delete_if_empty="true"* is set, no tag will be added if the user leaves this field empty.

The dropdown box on the form is defined in the following line:

	<combo key="building:use" text="Building Use"
		values="residential, commercial, industrial"
		display_values="Residential, Commercial,
		Industrial"/>

A dropdown box is defined by the &lt;combo&gt; element. As with the &lt;text&gt; element, the attribute *key* defines the tag key. The value is then chosen from a list of possible *values*. The *display_values* attribute allows you to choose different names to be displayed in the dropdown box, which may be easier to understand than the OSM tag values.

Lastly, let's look at the line which defines the checkbox.

	<check key="building:vacant" text="Is the building
		vacant?" default="off" delete_if_empty="true" />

The &lt;check&gt; element defines - you guessed it! - the checkbox. The attribute *default="off"* states that the box will be unchecked by default. The remaining attributes you have already seen.

Creating Your Own Presets File
------------------------------
The best way to create your own presets file is to take one that already exists, and manipulate it fulfill your objectives.  Feel free to edit this sample file and experiment with it to learn the basics. Just remember that each time you save it, you will need to restart JOSM to load the changes.

Before you start creating your own presets, you need to think carefully about the tags that you will use. Inventing new tags is another topic altogether. Generally, you should utilize existing OSM tags when they exist. Most existing tags are listed on the [Map Features page on the OSM Wiki](http://wiki.openstreetmap.org/wiki/Map_Features).

This sample file contains most of the elements that you will find in a JOSM presets file - there aren't very many form elements. If you'd like to experiment with a more complex presets file, download the [dhaka_presets.xml](/files/dhaka_presets.xml) file here.

Additionally, a detailed explanation of all possible elements can be found [here](http://josm.openstreetmap.de/wiki/TaggingPresets).

Good luck!


[sample building menu]: /images/en/editing/creating-custom-presets/sample-building-menu.png
[sample presets form]: /images/en/editing/creating-custom-presets/sample-presets-form.png
[sample presets file]: /images/en/editing/creating-custom-presets/sample-presets-file.png
