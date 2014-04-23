---
layout: doc
title: Gambaran Umum Data OSM
permalink: /bi/osm-data/data-overview/
lang: bi
category: osm-data
---

Gambaran Umum Data OSM
=======================
<!--Pada sesi ini kita akan mempertimbangkan bagaimana fungsi OpenStreetMap, dimana
akan membantu kita untuk memahami bagaimana data tersebut dikelol, dan bagaimana 
kita dapat memanfaatkannya lebih baik.-->

Bagaimana OSM Bekerja
---------------------
Mari kita mempertimbangkan bagaimana OpenStreetMap bekerja. Ribuan pengguna di seluruh
dunia terus bertambah dan mengedit peta, tetapi apa yang terjadi dibalik layar?

Ketika Anda atau pengguna lain membuat perubahan menggunakan perangkat lunak untuk 
mengedit seperti JOSM atau iD, perangkat lunak berkomunikasi dengan server pusat
OpenStreetMap dan memberitahu perubahan Anda. Pada server yang merupakan database
besar, yang berisi semua informasi lokasi dan atribut mengenai setiap fitur geografis
di semua OpenStreetMap.

Karena OSM adalah gratis dan terbuka, memungkinkan untuk siapa pun mendownload 
semua data di dalam database ini. Namun, karena datanya terlalu besar (*datanya lebih 
dari 30 GB bahkan ketika data tersebut dikompres*), ini hampir tidak mungkin untuk
bekerja dengan semua data sekaligus.

Karena keterbatasan ini, ada berbagai macam metode untuk **mengeksport** dan **mengekstrak**
data yang dibahas pada sesi ini. Mengeksport maksudnya mengkonversi data OpenStreetMap dari
format aslinya ke dalam format yang Anda inginkan. Hal ini sedikit berbeda dari **mengekstrak**
data, yang dimaksud adalah memotong data dari daerah yang Anda inginkan. Istilah ini sering
digunakan secara bergantian. Kita akan mempelajari lebih lanjut mengenai hal ini di sesi
Data OSM.

Menggunakan Geodata
-------------------
Jika Anda tidak berpengalaman sebagai pengguna SIG, hal ini penting untuk dipahami mengenai 
perbedaan antara perangkat lunak mengedit OSM seperti JOSM dan perangkat lunak SIG seperti
QGIS dan ArcGIS. 

Editor seperti iD atau JOSM memiliki satu fungsi utama bahwa mereka sangat baik dalam - 
membuat pengguna lebih mudah dalam mengedit OpenStreetMap. Tetapi mereka bukan perangkat 
lunak yang dimaksud untuk menganalisis atau meng-query data - fungsi ini sebaiknya 
diserahkan ke aplikasi lain. Perangkat lunak SIG yang gratis dan open source [QGIS](http://www.qgis.org),
memungkinkan pengguna untuk mendesain peta yang indah, meng-query dan menganalisis data, dan banyak 
lagi. Perangkat lunak SIG juga dapat digunakan untuk mengedit geodata, tetapi hal ini 
lebih mudah untuk mengedit OpenStreet dengan menggunakan editor OSM.

Pada bab selanjutnya kita akan melihat lebih dekat mengenai format file yang dihubungkan 
dengan OpenStreetMap dan data geografis secara umum. Kemudian kita akan melihat berbagi macam
cara untuk mengakses dan memanipulasi data OSM dan mengkonversinya antar tipe file yang berbeda.

Mendapatkan Data
-----------------

Itu luar biasa, tetapi bagaimana Anda mendapatkan data yang Anda inginkan?

Pada bab ini kita akan mambahas berbagai macam cara mengeksport data OSM. Kita akan tetap 
berpegang pada dasar-dasar, tetapi perlu diingat bahwa utnuk menggunakan data secara efektif,
Anda mungkin membutuhkan perangkat lunak SIG, seperti aplikasi gratis yaitu QGIS.

Sebelum kita mulai, mari membahas beberapa istilah. Pertama, **mengeksport** adalah mengkonversi
data OpenStreetMap dari format XML aslinya ke data yang Anda inginkan. Ini sedikit berbeda dengan 
**mengekstrak** data, yaitu memotong data dari daerah yang Anda pilih. Ini juga berarti mengeluarkan
fitur-fitur tertentu yang Anda inginkan dari sebuah daerah. Kita akan serng menggunakan 
istilah-istilah ini pada bab ini, sehingga hal tersebut penting untuk dipahami perbedaannya. 

OSM API
--------
Fungsi proses mengedit OSM yang dikenal sebagai API, yang memungkinkan perangkat lunak untuk 
mengedit berkomunikasi dengan server pusat. Sebagai contoh, ketika Anda menggunakan JOSM dan Anda
memilih daerah yang ingin Anda petakan, maka panggilan API dikirim ke server, meminta semua data 
yang ada di dalam daerah yang Anda pilih.

Faktanya, ketika Anda mendownload data di JOSM, Anda **mengekstrak** data dari daerah tertentu di dunia.
Data kemudian dikirim ke Anda dalam format **.osm**, yang Anda dapat edit di JOSM. Jika Anda mendownload
data di JOSM dan kemudian menyimpannya, Anda akan melihat file dengan jenis **.osm**. Kita akan
membahas ini lebih lanjut pada bab selanjutnya.
