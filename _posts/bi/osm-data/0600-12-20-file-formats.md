---
layout: doc
title: Format File
permalink: /bi/osm-data/file-formats/
lang: bi
category: osm-data
---

Format File
============
Seperti beberapa jenis data, ada berbagai macam cara menyimpan data geografis
di dalam sebuah komputer. Hal ini dapat disimpan di dalam database, yang merupakan
sistem khusus untuk menyimpan dan mengambil data, dan faktanya terdapat sistem
database khusus didesain untuk menyimpan data geografis. Ini dapat disimpan di 
file komputer, meskipun ada banyak perbedaan format file untuk data geografis.

Pada sesi ini kita akan melihat melalui beberapa cara untuk menyimpan data 
geografis, menjelaskan bagaimana mereka bekerja dan bagaimana mereka biasanya
digunakan.

.OSM Files
-----------
Format file **.osm** adalah format khusus untuk OpenStreetMap. Anda tidak akan
menemukan tempat lain. Jika Anda pernah mendownload data menggunakan JOSM dan 
disimpan sebagai file, Anda mungkin memperhatikan bahwa file yang disimpan dengan
ekstensi **.osm**. Jika Anda adalah pengguna SIG, Anda mungkin juga memperhatikan
bahwa hal ini tidak mudah untuk membuka file ini menggunakan perangkat lunak 
seperti QGIS.

Jadi mengapa data OSM disimpan dalam format file yang tidak ada orang lain menggunakannya?
Jawabannya adalah banyak format geografis mendahului era internet modern, dan 
dirancang untuk akses cepat dan query seperti seseorang yang ingin meng-query database.
Data OSM, di sisi lain dirancang dengan lebih mudah untuk dikirim dan diterima melalui
internet dalam format standar. Oleh karena itu, file **.osm** dikode dalam XML, dan 
berisi data geografis terstruktur. File **.osm** yang sederhana akan terliha seperti ini
jika dilihat di editor teks:

![example osm][]

Untuk mendapatkan data dengan format **.osm** sangatlah mudah - faktanya Anda melakukannya
setiap waktu ketika Anda mendownload data di JOSM, tetapi menggunakan file ini untuk 
analisis dan mendesain peta tidaklah mudah. Namun, Anda lebih baik mengkonversi data tersebut
ke format lain, atau mendapatkannya dari layanan yang mengkonversi data Anda. 

>	Data mentah OSM disimpan di dalam file **.osm**, tetapi mungkin Anda melihat juga file
>	berakhiran **.bz2** dan **.pbf**. Ini adalah file dasar **.osm** yang telah dikompres
>	untuk menghemat ruang, yang dapat sangat membantu ketika bekerja dengan file data yang besar

Shapefile
---------
**Shapefile** adalah format yang banyak digunakan untuk menyimpan data geografis vektor. Ini
dikembangkan oleh ESRI, perusahaan yang membuat ArcGIS, seperangkat aplikasi SIG.

Shapefile sebenarnya kumpulan beberapa file yang berbeda. Contohnya, shapefile yang berisi
data bangunan mungkin memiliki file dengan ekstensi berikut ini:

*	buildings.**shp**
*	buildings.**shx**
*	buildings.**dbf**

Shapefile sering memiliki file-file tambahan yang berisi informasi lainnya.

Shapefile harus ditunjukan untuk mengadakan satu jenis fitur (titik, garis, atau poligon), dan 
setiap fitur memiliki atribut di dalam tabel. Tidak seperti sistem OpenStreetMap yang setiap objeknya
dapat memiliki jumlah tag yang tidak terbatas, atribut fitur pada sebuah shapefile harus sesuai
dengan shapefile yang didefinisikan melalui struktur tabel, yang mungkin terlihat seperti ini:

![shapefile attributes][]

Data OpenStreetMap dapat dikonversi ke dalam shapefile. Berbagai macam situs menyediakan shapefile
yang dikonversi daari data OSM. Hal ini akan dibahas di [bab selanjutnya](/bi/osm-data/getting-data).

Database
---------
Banyak jenis informasi yang disimpan dalam sistem database, yang menyediakan cara logis
dalam mengatur dan mengakses data. Data geografis tidak berbeda, walaupun database dirancang 
untuk geodata khusus dalam menangani fungsi tertentu yang mng-query kebutuhan data geografis.

Data OpenStreetMap sering disimpan dalam database PostgreSQL dengan ekstensi PostGIS. Tipe 
database ini menyediakan akses cepat ke daata dan dapat digunakan dengan mudah menggunakan
Mapnik, sebuah perangkat lunak yang membuat tiles peta yang digunakan dalam situs peta slippy.
Ada beberapa tool yang tersedia untuk mengimport data menatah OSM ke dalam database PostgreSQL.

Tipe database yang lain dikenal sebagai SQLite, yang menyediakan fungsi yang sama seperti
database PostgreSQL, tetapi ini semua disimpan dalam file tunggal dan tidak membutuhkan
perangkat lunak database untuk menjalankannya. Hal ini adalah sedikit lebih sulit untuk
membuatnya, tetapi dapat dengan mudah bekerja dengan perangkat kecil data. 

Ringkasan
----------
Pada bab berikut kita akan melihat bagaimana Anda dapat mendownload data dalam berbagai
format dari internet, dan bagaimana Anda dapat menggunakan berbagai macam tool untuk
memanipulasi data mentah yang Anda miliki.

[example osm]: /images/en/osm-data/file-formats/example_osm.png
[shapefile attributes]: /images/en/osm-data/file-formats/shapefile_attributes.png
