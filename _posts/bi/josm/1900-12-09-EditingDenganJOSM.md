---
layout: doc
title: Editing OpenStreetMap dengan JOSM
permalink: /bi/josm/editing-with-josm/
lang: bi
category: josm
---

Editing OpenStreetMap dengan JOSM
=================================

Sekarang kita telah memetakan blok bangunan dengan OpenStreetMap. Kita telah
mempelajari bagaimana menggunakan GPS dan Field Papers untuk survey suatu 
wilayah, dan bagaimana kita dapat menggunakan JOSM untuk mengedit titik, garis,
dan poligon yang membentuk peta kita.

Pada bab ini kita akan kembali sekali lagi ke JOSM dan melihat beberapa konsep
baru yang belum kita bahas sejauh ini.

Layer JOSM
----------
Jika Anda telah mengikuti sejauh ini, Anda telah memperhatikan bahwa kita dapat 
menambahkan berbagai jenis hal-hal yang berbeda di dalam JOSM. Kita dapat mendownload
data OSM, menambahkan citra satelit Bing, membuka trek dan waypoint GPS, dan menambah
Field Papers - semua yang telah ditampilkan di dalam jendela peta JOSM.

Anda mungkin telah memperhatikan bahwa setiap waktu Anda dapat menambahkan sesuatu yang 
baru ke JOSM, tambahan item telah ditambahkan ke panel Layers pada sisi kanan JOSM.
Tergantung pada apa yang telah Anda buka, panel Layers Anda mungkin terlihat seperti ini:

![Layers panel][]

Setiap item dalam daftar ini merupakan sumber data yang berbeda yang Anda telah buka pada
jendela peta Anda. Pada contoh ini, "Data Layer 1" adalah data OpenStreetMap yang kita
edit. "Field Papers" adalah layer yang telah dibuat ketika kita menambahkan Field Paper
kita ke dalam JOSM.

Jika Anda menambahkan citra satelit Bing, sebuah layer baru akan muncul di panel Layers 
bernama "Bing Sat".

Gagasan layer sering kali sulit dipahami. Cara yang terbaik untuk membayangkan ini adalah
bahwa setiap layer seperti sepotong semi-transparan kertas, dan mereka semua ditumpuk 
di bagian atas satu sama lain. Setiap potongan kertas memiliki jenis tertentu dari informasi
mengenai itu, dan mereka dapat disusun kembali dengan cara apapun yang Anda suka.

Layer-layer yang telah digunakan sebagai referensi, seperti citra satelit, trek GPS, dan
Field Papers sering kali disebut "base layers". Layer data OSM adalah layer yang benar-benar
Anda bekerja dengannya.
	
*	Untuk memindahkan sebuah layer, klik pada layer tersebut di panel Layer dan klik ke arah
	atas atau bawah untuk memindahkannya.
			
	![Layers up down][]
	
*	Untuk menghilangkan sebuah layer, pilih layer dengan mouse Anda dan klik tombol Show/Hide:

	![Layers show hide][]
	
*	Anda seharusnya melihat layer yang Anda telah pilih menghilang pada jendela peta.
	Klik Show/Hide kembali, dan ini akan muncul kembali.
*	Anda dapat menghapus sebuah layer dengan memilihnya dan menggunakan tombol *delete*:

	![Layers delete][]

*	Terakhir, ini penting untuk mengetahui bahwa Anda hanya dapat mengedit layer yang dianggap
	*aktif* oleh JOSM. Jika Anda tidak dapat mengedit peta di dalam jendela peta Anda, ini 
	mungkin karena Anda tidak memiliki layer yang aktif. Kebanyakan layer, seperti titik GPS,
	Field Papers, dan citra satelit, tidak dapat diedit. Satu-satunya layer yang dapat diedit
	adalah data dari OpenStreetMap, yang biasanya bernama "Data Layer 1".
*	Untuk membuat layer aktif, pilihlah pada panel Layer, dan klik pada tombol Activate:

	![Layers activate][]

Menggunakan Data GPS dan Field Papers
-------------------------------------
Pada bab sebelumnya kita melihat bagaimana cara mengumpulkan data dengan sebuah GPS dan Field 
Papers, dan bagaimana membukanya di dalam JOSM sebagai sebuah layer.

Setelah Anda mensurvey dengan salah satu tool ini, Anda tetap perlu menambahkan informasi ke dalam
OpenStreetMap secara digital. 

Anda melakukan ini dengan proses yang sama yang telah Anda pelajari sebelumnya - **download, edit, simpan**.
Perbedaannya adalah alih-alih hanya menggunakan citra satelit sebagai layer dasar, Anda juga dapat
menggunakan data GPS Anda, Field Papers, catatan, atau kombinasi dari mereka semua.
	
*	Sebagai contoh, mari asumsikan Anda memiliki waypoint GPS Anda sebagai layer latar belakang di 
	JOSM, Anda telah menyimpan sebuah waypoint pada GPS Anda dengan nama 030, dan Anda telah menulisnya
	di dalam buku catatan Anda bahwa 030 adalah sebuah sekolah. Untuk menambahkan titik ini ke dalam
	OpenStreetMap, Anda akan memilih alat menggambar, dan klik dua kali di bagian atas titik 030 pada
	jendela peta Anda. Hal ini akan membuat sebuah titik. Kemudian pergi ke menu Preset, dan cari 
	preset untuk sekolah. Masukan nama sekolah dan klik "Apply Preset". Lakukan hal yang sama untuk
	menambahkan garis dan poligon. 

	![GPS in JOSM][]

Tag
---
Ketika Anda menggambar sebuah titik, garis, atau poligon, memiliki lokasi, tetapi tidak ada informasi
tentangnya. Dengan kata lain, kita tahu **dimana** lokasinya, tetapi tidak tahu **apa** informasinya.
Sekarang, kita telah menggunakan item dari menu Preset untuk mendefinisikan **apa** itu. Cara OpenStreetMap
untuk mengetahui objek **apa** dengan menggunakan **tag**.

Sebuah tag adalah seperti sebuah label yang Anda dapat letakkan ke suatu objek. Misalnya, jika kita
menggambar sebuah persegi, ini hanya sebuah persegi. Tetapi ketika kita menambahkan atribut untuk
mendeskripsikannya: persegi ini adalah sebuah bangunan; nama bangunan adalah "Menara Thamrin"; bangunan
16 tingkat.

Anda dapat menambahkan sebanyak tag yang Anda inginkan ke sebuah objek. Tag disimpan sebagai sepasang teks,
bernama **key** dan **values**. Di OpenStreetMap, tag ditulis di atas sesuai faktanya: 

*	building = yes
*	name = Menara Thamrin
*	building:levels = 16

Jika Anda memilih sebuah objek di JOSM, Anda dapat melihat semua teks yang dilampirkan ke objeknya pada 
panel Properties di sebelah kanan. 

![Properties panel][]
	
### Mengedit Tag
Anda dapat menambah, mengedit, dan menghapus tag dari panel Properties. Namun, tag secara manual 
dalam bahasa Inggris dan kadang-kadang dapat membingungkan, sehingga sering lebih mudah menggunakan
menu Preset. Ketika Anda menambah atau mengubah tag, atribut objek berubah.

*	Untuk mengedit tag objek, pertama pilih objeknya.
*	Kemudian edit tag dengan salah satu dari dua cara: (1) Menggunakan menu Preset, atau (2) mengedit 
	tag secara langsung di jendela Properties di sebelah kanan.

### Kesalahan Umum: Men-tag node ketika Anda ingin men-tag garis atau poligon. Ketika Anda mengedit atribut 
pada titik, pertama Anda akan memilih titik dan kemudian menambahkan tag melalui menu Preset atau secara 
langsung di panel Properties. Kesalahan umum adalah ketika menambahkan atribut ke sebuah garis atau poligon.
Ketika memilih objek, hal terpenting adalah Anda memilih garis, dan BUKAN pada titik-titik yang membentuk
garis.

Hal ini sering terjadi karena editor menggunakan tool Select pada JOSM untuk menggambar sebuah persegi sekitar
objek, yang menyebabkan segalanya, baik garis **dan** node terpilih, dan ketika Anda menambah tag mereka 
diterapkan ke node juga. Pastikan Anda **hanya** memilih garis ketika Anda ingin menambah tag ke objek.

![Nodes mistake][]

Menyimpan file OSM
------------------
Ketika Anda mengedit di JOSM, merupakan ide yang bagus untuk mendownload, mengedit, dan mengupload perubahan
dalam waktu yang cukup singkat. Anda tidak ingin mendownload data selama satu hari, dan kemudian menunggu
hingga beberapa hari kemudian untuk mengupload hasil editan Anda. Bagaimana apabila orang lain mengedit 
pada wilayah yang sama dalam waktu yang sama? Ini akan menyebabkan kesalahan dan konflik.

Jangan takut untuk mengupload editan Anda sesering mungkin. Hal ini memastikan bahwa perubahan Anda akan
disimpan ke dalam database dan Anda tidak akan kehilangan hasil kerja keras Anda.

Jika Anda bekerja di wilayah tunggal, itu adalah ide yang bagus untuk mendownload data peta setiap kali 
Anda ingin mengedit, pada kasus lain pengguna telah membuat perubahan pada wilayah tersebut.

Meskipun Anda harus selalu mencoba untuk mendownload data OSM ketika Anda siap untuk mengedit, dan upload
perubahan Anda sesering mungkin, terdapat kasus dimana Anda ingin menyimpan data OSM pada komputer Anda.
Misalnya, jika Anda memiliki konektivitas ke internet, Anda mungkin berharap untuk mendownload data,
menyimpannya, mengedit, dan kemudiam mengupload perubahan Anda nanti.

*	Untuk menyimpan file OSM, pastikan bahwa itu adalah layer aktif di panel Layers. Klik "File" pada menu
	bagian atas, dan klik "Save". Pilih lokasi untuk menyimpan file dan berilah nama. Anda juga dapat
	menyimpan dengan mengklik tombol ini:

![JOSM save button][]

*	Anda sekarang dapat menutup JOSM dan data Anda akan tersimpan. Ketika Anda ingin membuka file itu kembali,
	buka JOSM kembali, kemudian pergilah ke menu "File", dan klik “Open...”

Ringkasan
---------
Pada bab ini kita melihat sedikit lebih dekat dengan antarmuka JOSM dan belajar mengenai layer dan tag. 
Anda sekarang harus memiliki pijakan yang kokoh dalam bagaimana membuat peta dan bagaimana mengedit 
OpenStreetMap.

Pada sesi terakhir panduan ini kita akan melihat sumber informasi lain yang Anda dapat pelajari pada
saat Anda melangkah ke depan. Ketika Anda berlatih apa yang telah Anda pelajari disini dan mengeksplorasi
lebih lanjut, Anda akan mendapatkan lebih baik dalam membuat peta dengan OpenStreetMap.


[Layers panel]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image00_layers-panel.png
[Layers up down]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image01_layers-panel-up-down.png
[Layers show hide]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image02_layers-panel-show-hide.png
[Layers delete]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image03_layers-panel-delete.png
[Layers activate]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image04_layers-panel-activate.png
[GPS in JOSM]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image05_gps-layer.png
[Properties panel]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image06_properties-panel.png
[Nodes mistake]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image07_nodes-selected-mistake.png
[JOSM save button]: /images/en/beginner/07_editing-with-josm/en_beg_07_editing-with-josm_image08_save-button.png

