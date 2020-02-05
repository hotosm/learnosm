---
layout: doc
title: Mendijitasi bangunan persegi empat - iD editor
permalink: /id/hot-tips/tracing-rectangular-buildings/
lang: id
category: hot-tips
---

Mendijitasi bangunan persegi empat - iD editor
============

> Diperbarui 2019-06-23

- TOC
{:toc}

Hal-hal Mendasar
----------

![Rectangular building][]  

> Gambar ini ![keymon]{: height="24px"} menunjukkan tombol atau tombol gulir pada mouse yang digunakan dan tombol pada keyboard mana yang ditekan.  

Hal yang perlu diperhatikan;  

- Untuk mengakhiri menggambar sebuah area, klik dua kali pada titik terakhir,  
- Jika bangunan memiliki bentuk kotak, pastikan Anda mendijitasinya dengan bentuk kotak yang memiliki sudut siku, gunakan alat untuk membuat sudutnya siku (tombol pintas **q**).  
- Pastikan Anda menambahkan tag pada objek!  
- Ukuran berpengaruh - *estimasi populasi berdasarkan akumulasi area bangunan pada suatu area*,  
- ukuran serta bentuk yang persis dengan yang tampak pada citra satelit akan membantu dan memudahkan masyarakat mencari lokasi daerahnya,  
- Perbesar hingga cukup besar dan cukup jelas untuk melihat objek secara detail - skala pembesaran 20 meter biasanya sudah cukup jelas untuk melihat detail objek.  
- **Mencari bangunan** - cari dan amati bangunan dengan skala antara 50 meter dan 80 meter. Waspada terhadap bayangan dan garis lurus (bangunan melingkar lebih sulit untuk ditemukan)  
- Bangunan dan jalan, sungai, **landuse=residential** batas administrasi atau objek lainnya tidak boleh bertampalan.  
- Jika Anda membuat kesalahan, gunakan tombol **Undo** ![back arrow]{: height="26px"} untuk mengembalikan perubahan terakhir yang Anda buat  
- Kita semua berniat untuk membuat peta menjadi lebih baik. Jika pemeta sebelumnya memetakan sebuah bangunan secara salah, perbaiki lalu kirimkan sebuah pesan untuk pemeta tersebut yang berisi saran.  

Bangunan terhalang atau terlihat miring  
--------------------------------------

![building-obscured][]  

Sudah menjadi hal yang biasa untuk citra satelit diambil dengan sudut kemiringan tertentu sehingga bangunan terlihat miring dan terdistorsi. Pada gambar di atas, gambar di sebelah kanan menunjukkan bagaimana bangunan seharusnya dipetakan. Cara yang termudah adalah dengan memetakan bangunan dari ujung atapnya lalu tarik garis ke titik di mana temboknya bersentuhan dengan permukaan tanah - teknik ini adalah teknik yang biasa digunakan untuk memetakan bangunan seperti pada gambar di atas. Perhatikan juga bahwa bangunan yang tertutup pohon sebagian tetap digambarkan sebagai persegi empat. 

Bangunan dengan atap yang bergerigi
----------------------------
 
Sebagian besar bangunan memiliki sudut 90 derajat atau jika tidak, mereka adalah bangunan berbentuk lingkaran.  

![building-ridge][]  
Bangunan ini memiliki sudut-sudut 90 derajat, namun memiliki gerigi pada atapnya. Sudut kemiringan kamera ketika mengambil gambar membuat bentuk bangunan terlihat janggal.  

![building-tree-ridge][]  
Bangunan ini tertutup sebagian oleh pohon. Ini adalah bangunan berbentuk persegi empat.  

Pada belahan dunia tertentu, seng lazim digunakan sebagai atap - ketika seng yang digunakan adalah seng baru, cahaya matahari akan dipantulkan yang memberikan **efek silau** pada citra satelit. Bangunan juga lazim memiliki beranda atau memiliki bentuk seperti **huruf L** dan Anda harus pastikan untuk memetakannya sesuai bentuk bangunannya.  
Ketika memetakan bangunan, Anda harus mencoba memetakan bangunan sesuai dengan ukurannya, dan ketika dinding bangunan menyentuh permukaan tanah - lakukan yang terbaik! Di beberapa bagian dunia, bangunan dibangun sebagian dulu tanpa dipasang atap sampai bangunan tersebut laku terjual atau bangunan tersebut ingin segera digunakan. Petakan bangunan tanpa atap tersebut seperti bangunan pada umumnya karena untuk menambahkan atap tidak memakan waktu yang lama dan mungkin saja atapnya sudah ditambahkan setelah citra satelitnya diambil.  

Lakukan yang terbaik - bahkan ahli terkadang tidak setuju, dan kadang Anda hanya perlu melihat lebih teliti objek apa yang berada di situ. **Jika ragu, petakan saja sebagai bangunan.**  

Tag Bangunan
-------------

Ketika menambahkan tag bangunan yang belum pernah kita kunjungi atau bangunan yang belum familiar, paling aman berikan bangunan tersebut tag **building**=**yes** yang Anda dapat lihat bangunan dengan tag yang tepat jika Anda lihat pada bagian bawah panel tag dan klik **All tags**.  

Lihat juga  
---------

- [![building-video]{: height="150px"}](https://www.youtube.com/watch?v=VPJz-AucqF4&index=7&list=PLb9506_-6FMHZ3nwn9heri3xjQKrSq1hN "Humanitarian OpenStreetMap Team Tutorial Videos - Adding a Building to OpenStreetMap")  
*Subtitle tersedia dalam beberapa bahasa*  

- [Catatan Ivan Gayton untuk Hadjer Lamis, Chad - komentar dari orang lain menunjukkan deskripsi juga cocok untuk bagian lain dunia](https://www.openstreetmap.org/user/IvanGayton/diary/38612)



[Rectangular building]: /images/hot-tips/rectangular_building.gif "Tracing a rectangular building, squaring the corners, and adding tags."
[keymon]:/images/hot-tips/keymon.png
[building-ridge]: /images/hot-tips/building-ridge.png
[back arrow]: /images/beginner/back-arrow.png
[building-tree-ridge]: /images/hot-tips/building-tree-ridge.png
[building-obscured]: /images/hot-tips/buildings-obscured-traced-1.png "Before & after - tracing a building seen at an angle"
[building-video]: /images/hot-tips/building-video.png "Humanitarian OpenStreetMap Team Tutorial Videos - Adding a Building to OpenStreetMap"