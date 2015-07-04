---
layout: doc
title: Tips Editing
permalink: /bi/josm/josm-editing-techniques/
lang: bi
category: josm
---

Tips Editing: Kesalahan Umum
====================================
Ada beberapa kesalahan umum pembuat peta ketika mereka memulai menggunakan
OpenStreetMap. Pada bab ini kita akan mengidentifikasi beberapa kesalahan
yang sering dilakukan dan menawarkan beberapa tips untuk memetakan lebih baik.

Objek yang Saling Terhubung
----------------------------

### Beberapa Objek Sebaiknya Tidak Terhubung
Ketika Anda membuat poligon dan garis yang tidak seharusnya terhubung, pastikan
bahwa mereka tidak terhubung oleh satu titik. Contohnya, titik jalan raya 
sebaiknya tidak menempel ke bangunan, karena tidak ada jalan yang langsung
menempel ke dinding! Jika Anda ingin memutuskan hubungan dua atau lebih objek
yang menempel di titik yang sama, pilih titik dan pergilah ke *Tools->UnGlue Ways*
atau tekan \<\<G\>\>.

![road building no][]
![road building yes][]

### Tetapi, Beberapa Objek Harus Terhubung
Jalan yang bersinggungan seharusnya selalu terhubung pada titik. Jika mereka 
tidak terhubung pada satu titik, maka komputer tidak mengetahui bahwa jalan
tersebut sebenarnya saling terhubung satu sama lain.

![road connecting nodes][]

Pada saat itu Anda tidak memiliki jalan yang saling berpotongan pada satu titik
adalah jika salah satu jalan berjalan di atas jalan lain, dan mereka tidak 
melakukannya, faktanya, terhubung.

Objek yang Saling Overlap
-------------------------
Salah satu kesalahan umum adalah poligon saling overlap ketika objek yang
digambarkan sebenarnya tidak saling overlap. Sebuah bangunan tidak bisa 
overlap dengan bangunan yang lain. Sebagai contoh, poligon yang dibangun
untuk menggambarkan taman diluar bangunan sebaiknya tidak saling overlap
dengan bangunannya. Seharusnya digambar di sebelah bangunannya. 

![building overlap][]

Ada beberapa pengecualian pada aturan ini, seperti sekolah. Di dalam 
halaman sekolah mungkin Anda ingin mengidentifikasi bangunan menggunakan
poligon, tapi mungkin Anda juga ingin membuat sebuah poligon yang meliputi 
seluruh halaman sekolah. Dalam kasus seperti ini, poligon diperbolehkan untuk
saling overlap, tetapi aturannya adalah pastikan bahwa bangunan-bangunan 
secara menyeluruh berada dalam poligon penggunaan lahan. 

![building landuse][]

Ringkasan
---------
Kita semua membuat kesalahan, tetapi semakin sering Anda memetakan semakin 
sedikit Anda melakukan kesalahan! Ingatlah bahwa jika Anda mengupload data yang 
berisi kesalahan, Anda dapat memperbaiki kesalahan Anda dan mengupload perubahan
kembali. Inilah hebatnya OSM: Anda dapat membuatnya selalu lebih baik!


[road building no]: /images/en/editing/josm-editing-techniques/road-building-no.png
[road building yes]: /images/en/editing/josm-editing-techniques/road-building-yes.png
[road connecting nodes]: /images/en/editing/josm-editing-techniques/road-connecting-nodes.png
[building overlap]: /images/en/editing/josm-editing-techniques/building-overlap.png
[building landuse]: /images/en/editing/josm-editing-techniques/building-landuse.png
