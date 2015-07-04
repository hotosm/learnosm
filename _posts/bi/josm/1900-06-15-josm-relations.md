---
layout: doc
title: Relasi JOSM
permalink: /bi/josm/josm-relations/
lang: bi
category: josm
---

Relasi
==========
Dalam [Panduan Tingkat Dasar](/bi/beginner) kita telah menjelaskan bahwa terdapat tiga jenis
objek yang dapat digambar di OpenStreetMap - titik (node), garis (way), dan poligon 
(closed way). Garis berisi banyak titik, dan garis itu sendiri membawa atribut yang 
mendefinisikan apa yang diwakilinya. Poligon adalah sama seperti garis, kecuali garis
yang harus menyelesaikan dimana ini dimulai untuk membentuk poligon.

Pada faktanya, kita berbohong pada Anda, karena terdapat satu jenis objek lain di
OpenStreetMap, bernama relasi. Dengan cara yang sama bahwa garis terdiri dari 
titik lainnya, relasi berisi kelompok objek lainnya, seperti titik, garis, atau
poligon. Jika Anda mencari untuk meningkatkan keterampilan mengedit Anda, kemudian
memahami dan mengetahui bagaimana mengedit relasi yang penting.

Contohnya, bayangkan bahwa Anda ingin memetakan sebuah bangunan yang memiliki 
halaman di tengahnya. Anda perlu untuk menggambar sebuah poligon disekitar 
luar bangunan, dan Anda ingin poligon lain di sekitar halaman untuk mengindikasi
mereka bukan bagian dari bangunan. Ini adalah sebuah contoh relasi. Relasi
berisi beberapa poligon - dan atribut bangunan yang akan dilampirkan ke relasi, 
bukan poligon.

![multipolygon demo][]

Relasi digunakan untuk mewakili apapun yang memerlukan kumpulan objek untuk
didefinisikan. Contoh lain adalah rute bus (kumpulan garis), objek panjang
dan kompleks (sungai atau jalan), atau beberapa poligon yang semuanya bagian
dari satu lokasi (seperti bangunan di dalam universitas).

Terdapat empat jenis relasi utama Anda akan hadapi di OSM:
Multipoligon, Rute (Routes), Batas (Boundaries), dan Larangan (seperti tidak boleh 
berbelok ke kiri). Pada sesi ini kita akan membahas Multipoligon dan Rute.

Membuat Relasi Multipoligon
------------------------------
Mari kita lihat bagaimana membuat relasi multipoligon seperti yang ditunjukkan di atas.

*	Pertama, menggambar poligon Anda. Dalam kasus ini kta akan menggambar tiga poligon, 
	sebuah persegi panjang terluar, dan dua persegi panjang terkecil.

![multipolygon ways][]

*	Pilih semua poligon. Ingatlah Anda dapat memilih beberapa objek dengan menahan 
	SHIFT dan mengklik pada masing-masing objek.
*	Pergilah ke *Presets->Man Made->Man Made->Building*.

![building preset][]

*	Klik pada "New Relation".

![new relation][]

*	Anda seharusnya saat ini melihat jendela relasi. Ini sedikit kompleks
	karena saat ini Anda menambahkan tag ke kumpulan garis.

![building relation][]

*	Perhatikan bahwa pada bagian atas panel adalah tag untuk relasi. Tag ini bekerja
	dengan cara yang sama seperti tag selalu bekerja.
*	Di bagian bawah adalah daftar anggota relasi. Relasi ini memiliki tiga anggota -
	yaitu tiga cara yang merupakan bagian dari relasi kita.
*	Kita perlu melakukan beberapa hal untuk menyelesaikan penjelasan multipoligon kita. 
	Pertama, perhatikan bahwa karena kita meggunakan preset bangunan maka kita sudah
	memiliki satu tag yang terdefinisi, *building=yes*. Kita perlu menambahkan lebih dari
	satu tag yang mendefinisikan **jenis** relasi. Kita harus menambahkan tag yang
	bernama *type=multipolygon*. 
*	Klik pada kotak tag dan menambahkan tag ini.

![type multipolygon][]

*	Selanjutnya kita perlu mendefinisikan apa yang disebut dengan **peran**. Setiap anggota 
	relasi memiliki peran, yang menunjukan tujuan dari anggotanya. Dalam kasus ini, peran
	poligon luar harus didefinisikan sebagai **outer** dan peran dua poligon terdalam harus
	didefinisikan sebagai **inner**. Ini adalah peran yang ada untuk anggota multipoligon.
*	Pada panel kiri bawah pilih masing-masing anggota di daftar. Anda dapat melihat anggota
	yang terpilih akan disorot pada jendela peta. Masukkan **outer** dan **inner** untuk poligon
	yang benar.

![outer inner][]

*	Klik OK dan relasi multipoligon Anda telah selesai!

![new multipolygon][]

Ketika Anda membuat sebuah multipoligon seperti ini akan dirender pada peta seperti:

![multipolygon mapnik][]

Multipoligon dapat digunakan untuk objek yang kompleks yang membutuhkan poligon inner dan outer,
seperti bangunan atau sungai dengan tambalan tanah di dalamnya. Informasi mengenai multipoligon
lebih detai dapat ditemukan di [OSM Wiki](http://wiki.openstreetmap.org/wiki/Re:multipolygon).

Relasi Rute
---------------
Relasi juga sangat berguna untuk mewakili rute panjang. Contohnya, rute bus atau sepeda mengikuti 
berbagai segmen jalan. Untuk menentukan rute seperti itu, kita dapat membuat relasi yang berisi
semua segmen jalan yang merupakan bagian dari rute. Fitur tambahan, seperti pemberhentian bus 
juga dapat menjadi anggota relasi rute.

![route relation][]

Mari kita lihat bagaimana membuat relasi untuk rute bus di JOSM:

*	Pertama, pilih semua jalan yang membentang di sepanjang rute. Anda perlu memotong beberapa
	jalan menjadi segmen terpisah jika hanya sebagian dari mereka memiliki relasi. Anda dapat
	melakukan ini menggunakan tool "Split Way".
*	Kemudian semua segmen terpilih, pergilah ke *Presets->Transport->Public Transport->
    Public transport route*.

![public transport preset][]

*	Selanjutnya untuk jenis Rute, pilih "bus".
*	Klik "New Relation." Anda akan melihat jendela relasi muncul, hanya seperti ketika Anda
	membuat multipoligon.

![bus route relation][]

*	Perhatikan bahwa terdapat tag yang mendefinisikan relasi sebagai rute. Bahkan dari 
	*type=multipolygon*, kita memiliki *type=route*. Kita juga memiliki sebuah tag yang
	mendefinisikan sebagai rute bus, sebagai lawan jenis rute lain.
*	Anda saat ini berpikir, apa **peran** dari anggota? Dalam kasus ini, rute kita tidak 
	perlu mendefinisikan peran anggota. Dengan meninggalkan peran kosong perangkat lunak
	mengetahui bahwa mereka hanyalah bagian dari rute. Kita juga dapat mendefinisikan peran
	setiap segmen sebagai **rute**, tetapi itu tidak perlu.
*	Klik OK dan relasi rute Anda akan selesai!

>	Jika Anda ingin daftar semua relasi di dalam peta, Anda dapat membuka panel relasi
>	dengan mengklik pada tombol ini di bagian kiri:
>   ![relation panel button][]
>   Ini akan membuka sebuah panel dimana Anda dapat memilih, mengedit, dan membuat relasi baru.

Ringkasan
---------
Relasi dapat sulit dipahami dan tidak perlu digunakan terlalu sering, tetapi mereka perlu
tahu tentang ini. Begitu sering Anda gunakan mungkin menyadari bahwa Anda perlu sebuah 
relasi untuk memetakan sesuatu dengan benar, dan Anda dapat menggunakan pengetahuan ini, dan
menemukan informasi lebih lanjut pada Wiki OSM, untuk membantu Anda memetakan relasi dengan tepat.



[multipolygon ways]: /images/en/editing/josm-relations/multipolygon-ways.png
[building preset]: /images/en/editing/josm-relations/building-preset.png
[new relation]: /images/en/editing/josm-relations/new-relation.png
[building relation]: /images/en/editing/josm-relations/building-relation.png
[new relation]: /images/en/editing/josm-relations/new-relation.png
[type multipolygon]: /images/en/editing/josm-relations/type-multipolygon.png
[outer inner]: /images/en/editing/josm-relations/outer-inner.png
[new multipolygon]: /images/en/editing/josm-relations/new-multipolygon.png
[multipolygon mapnik]: /images/en/editing/josm-relations/multipolygon-mapnik.png
[multipolygon demo]: /images/en/editing/josm-relations/multipolygon-demo.png
[route relation]: /images/en/editing/josm-relations/route-relation.png
[public transport preset]: /images/en/editing/josm-relations/public-transport-preset.png
[bus route relation]: /images/en/editing/josm-relations/bus-route-relation.png
[relation panel button]: /images/en/editing/josm-relations/relation-panel-button.png







