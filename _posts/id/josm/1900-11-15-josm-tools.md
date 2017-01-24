---
layout: doc
title: JOSM Tools
permalink: /id/josm/josm-tools/
redirect_from:
  - /bi/josm/josm-tools
  - /bi/josm/josm-tools/
lang: id
category: josm
---

Tool Mengedit di JOSM
======================
Pada [panduan tingkat dasar](/id/josm/start-josm/) kita membahas dasar-dasar 
menggambar di dalam JOSM, tetapi terdapat banyak tool dan teknik yang
belum ditunjukkan.

Disini kita akan melihat beberapa tool dasar dan teknik yang ada untuk
menggambar fitur peta di JOSM, dan pada bab berikut kita akan melihat 
lebih dalam untuk tool menggambar lanjutan.

Mendapatkan File Contoh
-----------------------
*	Jika Anda suka untuk mengikuti dan mempraktikan penggunaan tool JOSM,
	silakan Anda downloads [tools_menu_sample.osm](/files/tools_menu_sample.osm).
*	Buka JOSM dan file yang telah didownload. Ini akan terlihat seperti ini:

![tools_menu_sample.osm][]

Tool Menggambar
---------------
Jika Anda mengklik pada menu "Tools" di bagian atas JOSM, Anda akan melihat 
bahwa terdapat banyak fungsi yang dapat membantu Anda dalam menggambar garis
dan poligon, dan mengedit objek pada peta.

JOSM memiliki beberapa tool tambahan untuk membuatnya lebih dalam menggambar
garis dan poligon. Tool ini dapat ditemukan di menu "Tools" di bagian atas
JOSM.

![Tools menu][]

Dalam mengaplikasikan fungsi dalam menu ini, Anda terlebih dahulu harus memilih 
sebuah titik, garis atau poligon pada jendela peta. File contoh yang berisi
berbagai macam elemen yang berlabelkan nama tool yang berbeda-beda di dalam
menu.

*	Cobalah memilih salah satu elemen di file tersebut. Kemudian pergilah
	ke menu Tools dan klik pada fungsi yang diidentifikasi di sebelah fitur
	Anda telah pilih.
*	Sebagai contoh, klik pada lingkaran yang tidak beraturan untuk memilihnya.

![Align nodes in circle][]

*	Selanjutnya, pergilah ke Tools->Align Nodes in Circle.
*	Lingkaran yang tidak beraturan akan menjadi lebih simetris.

Percobaan dengan masing-masing tool menggunakan file contoh ini. Penjelasan
mengenai beberapa tool lainnya disediakan di bawah ini.

1.	**Split Way:** Hal ini memungkinkan Anda untuk membagi sebuah garis menjadi
	dua garis terpisah. Ini berguna jika Anda ingin menambahkan atribut ke bagian
	jalan yang berbeda, seperti jembatan. Untuk menggunakan fungsi ini, pilih
	sebuah titik di tengah garis yang Anda ingin potong, kemudian pilih Split
	Way dari menu Tools, dan garis Anda seharusnya akan terpotong menjadi dua.

2.	**Combine Way:** Ini merupakan kebalikan dari Split Way. Untuk menggabungkan
	dua garis menjadi satu garis, mereka harus berbagi satu titik. Untuk menggunakan
	fungsi ini, pilih kedua garis yang ingin Anda gabungkan. Anda dapat memilih
	lebih dari satu objek dengan menahan tombol SHIFT pada keyboard Anda dan
	mengklik di setiap garisnya. Ketika Anda telah memilih kedua garis tersebut,
	pilih Combine Way dari menu Tools.
	
    ![Combine way][]

    Jika Anda menggabungkan jalan yang memiliki arah yang berbeda, Anda akan mendapatkan
	peringatan ini: 

    ![Reverse and combine][]

    Jika jalan yang terhubung dan pergilah ke arah yang sama, kemudian pilih "Reverse and Continue."

3.  **Reverse Way:** Hal ini akan mengubah arah pada garis. Semua garis di dalam OSM
	memiliki sebuah arah, yang ditunjukkan di dalam JOSM dengan panah pada garis.
	Arah biasanya bukan masalah,kecuali pada kasus dimana jalan satu arah dan
	sungai yang mengalir dalam arah tertentu. Pada kasus ini Anda mungkin perlu
	membalikkan jalan sehingga garis tersebut dalam arah yang benar. 
	
    ![Way direction][]

4.	**Simplify Way:** Jika garis Anda memiliki terlalu banyak titik di dalamnya dan
	Anda ingin membuatnya lebih sederhana, ini akan menghapus beberapa titik dari
	sebuah garis. 

    ![Simplify way][]

5.  **Align Nodes in Circle:** Jika Anda mencoba membuat sebuah bentuk lingkaran, 
	gambarlah lingkaran semampu ANda dan kemudian pilih objeknya. Fungsi ini akan
	membantu mengatur titik-titik Anda di dalam lingkaran tersebut. 

6.  **Create Circle:** Sebagai alternatif, dapat menggunakan tool ini, tool ini akan
	membuat lingkaran yang sempurna. Menggambar sebuah garis yang mewakili diameter
	dari lingkaran Anda, dan kemudian aplikasikan tool ini. 

    ![Create circle][]

7.  **Align Nodes in Line:** Fungsi ini akan menyelaraskan rangkaian titik menjadi garis
	lurus. Sebaiknya dengan garis yang panjang untuk memilih bagian dari garis yang akan
	diluruskan. Hati-hati karena hal ini memiliki kecenderungan untuk pergeseran garis 
	walaupun sedikit. 

    ![Align nodes in line][]

8.  **Orthogonalize Shape:** Fungsi ini sangat berguna untuk menggambar bentuk teratur 
	seperti bangunan. Setelah Anda menggambar sebuah area, fungsi ini akan membentuk 
	kembali menjadi sudut-sudut persegi. 

    ![Orthagonalize][]

9.  **Unglue way:** Tool ini memungkinkan Anda untuk melepaskan titik-titik yang 
	terhubung. Ini berguna ketika dua objek berbagi titik padahal seharusnya 
	mereka tidak menempel. Sebagai contoh, kesalahan umum adalah untuk sebuah jalan
	berbagi titik dengan sudut bangunan. Tentu saja jalan tidak bergabung dengan
	bangunan, sehingga ini adalah kesalahan, dan Anda dapat melepaskan objek satu dengan
	yang lain. 

    ![Unglue way][]

    > Garis dan titik biasanya tidak akan muncul terpisah hingga Anda memisahkan mereka. 

Keyboard Shortcuts
------------------
Setelah Anda mengedit banyak, Anda akan menyadari bahwa Anda telah membuang waktu untuk
mengklik pada menu dan submenu. Untuk mengatasi hal ini, JOSM memiliki shortcut keyboard
untuk segala hal.

Hal ini dimaksudkan daripada mengklik sebuah objek dan kemudian akan melalui proses 
meu yang panjang, Anda dapat memilih objek langsung dan menekan sebuah tombol pada 
keyboard Anda.

Semua tool yang disebutkan dalam sesi sebelumnya memiliki tombol shortcut, yang
terdaftar pada menu Tools di sebelah kanan setiap nama tool. Sebagai contoh, "O" adalah
tombol shortcut untuk menyelaraskan titik-titik pada sebuah lingkaran. "L" adalah 
shortcut untuk menyelaraskan titik-titik pada sebuah garis. Ini membutuhkan beberapa
waktu untuk mempelajari tombol shortcut, tetapi Anda akan menemukan bahwa ini akan
menghemat banyak waktu dalam jangka panjang.

Disini ada beberapa tombol shortcut lain yang paling penting.

1.  Aktifkan Select Tool
![Keyboard S][]
2.  Aktifkan Draw Tool
![Keyboard A][]
3.  Aktifkan Zoom Tool
![Keyboard Z][]
4.  Hapus objek yang terpilih 
![Keyboard Del][]
5.  Zoom In
![Keyboard plus][]
6.  Zoom Out
![Keyboard minus][]

Skala dan Rotasi
----------------
Sebuah pertanyaan umum adalah bagaimana memutar sebuah garis atau poligon
setelah objek tersebut tergambar.

*	Untuk memutar sebuah objek, pertama pilih objeknya.
*	Tahan SHIFT+CTRL pada keyboard Anda.
*	Klik dan geser mouse untuk memutar.

![Rotate demo][]

Untuk skala sebuah objek (membuatnya lebih besar atau lebih kecil), ikuti 
proses yang sama, dengan menahan ALT+CTRL.

Instruksi ini akan ditampilkan pada bar informasi di bagian bawah JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png
