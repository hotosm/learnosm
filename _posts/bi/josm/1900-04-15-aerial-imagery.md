---
layout: doc
title: Citra Udara
permalink: /bi/josm/aerial-imagery/
lang: bi
category: josm
---

Citra Udara
============
Menelusuri citra adalah cara yang mudah dan canggih untuk berkontribusi
ke OSM. Menggunakan citra untuk menggambar titik, garis dan poligon di permukaan 
bernama **dijitasi**. Ini seringkali dapat dipisahkan dari tindakan mengumpulkan 
atribut data di atas permukaan tanah, ini biasanya disebut **ground-truthing**.

Digitalisasi citra dapat memberikan kerangka peta OSM, ini membuat ground-truthing
lebih mudah untuk orang-orang di lapangan.

Pada bab ini kita akan mempelajari sedikit mengenai bagaimana citra aerial bekerja. 

Tentang Citra
-------------
Citra udara adalah istilah yang kita gunakan untuk mendeskripsikan foto-foto yang 
diambil dari langit. Ini dapat diambil dari pesawat, helikopter, atau bahkan layangan
dan balon, tetapi sumber citra yang paling umum berasal dari satelit yang mengorbit di Bumi.

[Pada bab GPS](/bi/beginner/using-gps) kita telah mempelajari mengenai puluhan satelit 
yang mengorbit di Bumi yang memungkinkan penerima GPS mengidentifikasi lintang dan bujur kita.
Selain ini satelit GPS, terdapat juga satelit yang mengambil foto bumi. Foto ini kemudian
dimanipulasi sehingga mereka dapat digunakan di perangkat lunak SIG (pemetaan). Citra
Bing Aerial terdiri dari foto satelit.

Resolusi
---------
Semua foto digital terdiri dari piksel-piksel. Jika Anda memperbesar sangat dekat pada sebuah foto, Anda akan melihat gambar mulai kabur, dan akhirnya Anda akan melihat bahwa sebuah gambar terdiri dari ribuan kotak kecil yang berbeda-beda warnanya. Ini berlaku apakah foto yang diambil dengan kamera genggam, telepon genggam, atau satelit yang mengobit di Bumi.

![orange resolution][]

Resolusi mengacu pada jumlah lebar piksel dengan jumlah tinggi piksel pada gambar. Lebih banyak piksel berarti lebih tinggi resolusinya, yang berarti bahwa Anda dapat melihat
lebih detail pada foto tersebut. Resolusi dalam kamera genggam sering diukur dalam megapiksel. Kamera megapiksel Anda dapat merekam, semakin tinggi resolusi foto Anda.

Citra udara adalah sama, kecuali bahwa kita biasanya berbicara tentang resolusi yang berbeda. Pengukuran ini penting dengan foto udara - maka, sebuah piksel mewakili jarak tertentu pada
tanah. Kita menjelaskan citra sebagai sesuatu seperti "resolusi citra dua meter", yang berarti bahwa satu piksel setara dengan dua meter di atas tanah. Resolusi citra satu meter memiliki resolusi yang lebih tinggi dari ini, dan 50cm resolusi akan lebih tinggi. Biasanya citra ini disediakan oleh Bing, meskipun bervariasi lokasinya, dan biasanya di banyak tempat terdapat citra yang resolusinya rendah dari dua meter, dimana titik tersebut menjadi sulit untuk mengidentifikasi objek pada gambar.

![low res high res][]

Resolusi citra udara yang lebih tinggi, lebih mudah digunakan dalam pembuatan peta.

Georeferencing
---------------
Setiap piksel pada foto udara memiliki sebuah ukuran,, dan setiap piksel juga memiliki sebuah lokasi.
Seperti yang telah disebutkan di atas, hal ini karena foto udara telah georeferensi.

Hanya seperti titik GPS memiliki lintang dn bujur, begitu juga dengan piksel dalam foto udara.
Namun, resolusi rendah dapat memberi tantangan untuk pemetaan, sehingga foto yang
digeoreferensi kurang bagus. 

Mari kita berpikir sejenak mengenai bagaimana georeferensi bekerja, dan kenapa itu
menantang untuk dilakukan. Ketika seseorang menggeoreferensi sebuah foto, pertama 
mereka mengidentifikasi beberapa piksel pada gambar lokasi ang dikenal. Jika kita memiliki
foto persegi, kita mungkin mengidentifikasi koordinat keempat sudut, dan dengan cara
itu keselurahan foto dapat ditempatkan dengan benar.

Ini semua tampak sangat sederhana, tetapi pertimbangkan ini: Bumi itu bulat; lensa kamera bulat;
foto-foto yang datar dan 2 dimensi. Ini berarti bahwa ketika gambar datar dipetakan ke Bumi
yang bulat, selalu akan menjadi beberapa peregangan gambar dan distorsi. Bayangkanlah
ketika Anda mencoba untuk mendatarkan sebuah kulit jeruk. Ini tidak akan berbentuk persegi
panjang.

Karena masalah ini, semua piksel pada foto udara tidak sempurna ditempatkan.

Untungnya, beberapa orang cerdas telah merancang algoritma untuk memecahkan masalah ini,
sehingga citra yang Anda lihat pada Bing sangat dekat untuk menjadi akurat. Di kebanyakan
tempat itu tidak akan salah sama sekali - dan itu pasti sangat baik untuk dilakukan pemetaan.
Daerah yang paling umum pada citra tidak akurat terletak pada perbukitan, daerah pegunungan.
Pada [bab selanjutnya](/bi/josm/correcting-imagery-offset) kita akan melihat bagaimana
memperbaiki masalah ini.

[orange resolution]: /images/en/editing/aerial-imagery/orange-resolution.png
[low res high res]: /images/en/editing/aerial-imagery/low-res-high-res.png
