---
layout: doc
title: Membuat Kustom Presets
permalink: /bi/josm/creating-presets/
lang: bi
category: josm
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

*	Carilah file XML pada komputer Anda dan bukalah dengan text editor. Jika Anda menggunakan Windows Anda dapat menggunakan program Notepad. Jika Anda ingin lebih mudah dalam
	penggunaan editor, Anda mungkin mendownload aplikasi Notepad++ gratis.
*	File **sample_presets.xml**  terlihat seperti ini:

![sample presets file][]

Untuk saat ini, mari kita abaikan garis enam pertaman dan garis terakhir, fokus pada segala sesuatu diantara tag &lt;item&gt;.

Garis pertama terlihat seperti ini: 

	<item name="Sample Building" type="node,closedway">

Ini adalah tag pembukaan dari sebuah item yang ditambahkan ke menu. Ini memiliki dua atribut, nama dan tipe. Nama mendefinisikan bagaimana ini akan muncul pada menu Preset. Tipe yang
membatasi preset ini untuk tipe objek tertentu. Dalam kasus ini, preset hanya dapat diterapkan untuk titik-titik dan poligon - dengan kata lain, node dan poligon. Jika Anda mencoba
mengaplikasikan preset ini untuk sebuah garis, ini tidak akan bekerja.

Mari kita lihat pada garis selanjutnya:

	<label text="Building Form" />

Ketika Anda mengklik pada menu dan membuka form contoh, pada bagian atas Anda melihat teks "Building Form." Ini adalah teks yang didefinisikan dalam garis ini. Ini mendefinisikan
sebuah elemen &lt;label&gt;, yang hanya menampilkan teks dalam form. Teks didefinisikan oleh atribut *text="some text"*.

Turun beberapa garis dan temukan ini:

	<key key="building" value="yes" />

Ini adalah salah satu tag yang akan diterapkan pada objek yang kita telah pilih. Karena ini menggunakan elemen &lt;key&gt;, tag OSM diberikan disini akan secara otomatis diterapkan
ketika preset telah dipilih. Oleh karena itu objek ini secara otomatis akan mendapatkan tag *building=yes*.

Garis selanjutnya sedikit berbeda, menggunakan elemen &lt;text&gt;.

	<text key="name" text="Name of Building" default=""
		delete_if_empty="true" />

Elemen &lt;teks&gt; membuat sebuah field kosong. Ketika form dibuat dalam JOSM, pengguna akan dapat mengisi pada field kosong tersebut. Karena atribut *delete_if_empty="true"* diatur, tidak ada tag yang akan ditambahkan jika pengguna meninggalkan field kosong ini.

Kotak daftar pilihan pada form yang didefinisikan dalam garis berikut:

	<combo key="building:use" text="Building Use"
		values="residential, commercial, industrial"
		display_values="Residential, Commercial,
		Industrial"/>

Kotak daftar pilihan didefinisikan oleh elemen &lt;combo&gt;. Seperti pada elemen &lt;text&gt;, atribut *key* mendefinisikan tag key. Value tersebut kemudian dipilih dari daftar *values* yang mungkin. Atribut *display_values* mengizinkan Anda memilih nama yang berbeda untuk ditampilkan dalam kotak daftar pilihan, yang mungkin lebih mudah untuk memahami
dari value tag OSM.

Terakhir, mari kita lihat pada garis yang mendefinisikan kotak centang.

	<check key="building:vacant" text="Is the building
		vacant?" default="off" delete_if_empty="true" />

Elemen &lt;check&gt; mendefinisikan - Anda dapat menebaknya! - kotak centang. Atribut *default="off"* menyatakan bahwa kotak akan dihilangkan centangnya secara standar. Atribut yang
tersisa dapat Anda lihat.

Membuat File Preset Anda Sendiri
---------------------------------
Cara yang terbaik untuk membuat file preset Anda sendiri adalah mengambil salah satu yang sudah ada, dan memanipulasinya memenuhi tujuan Anda. Jangan ragu untuk mengedit file contoh ini dan bereksperimenlah untuk mempelajari tahapan dasarnya. Ingatlah bahwa setiap saat Anda menyimpannya, Anda perlu merestart JOSM untuk memuat perubahan.

Sebelum Anda memulai membuat preset Anda sendiri, Anda perlu berpikir baik-baik mengenai tag yang Anda akan gunakan. Menemukan tag baru adalah topik yang lain sama sekali. Secara
umum, Anda harus menggunakan tag OSM yang sudah ada. Tag-tag yang sudah ada terdaftar di [halaman Map Features pada Wiki OSM](http://wiki.openstreetmap.org/wiki/Map_Features).

File contoh ini berisi elemen-elemen yang Anda akan temukan di file preset JOSM - tidak ada banyak form elemen. Jika Anda senang bereksperimen dengan file preset yang lebih kompleks,
download file [dhaka_presets.xml](/files/dhaka_presets.xml) disini.

Tambahan, penjelasan rinci dari semua elemen-elemen dapat ditemukan [disini](http://josm.openstreetmap.de/wiki/TaggingPresets).

Good luck!


[sample building menu]: /images/en/editing/creating-custom-presets/sample-building-menu.png
[sample presets form]: /images/en/editing/creating-custom-presets/sample-presets-form.png
[sample presets file]: /images/en/editing/creating-custom-presets/sample-presets-file.png
