---
layout: doc
title: Format File
permalink: /id/osm-data/file-formats/
lang: id
category: osm-data
---

Format File
=============

> Direview 2016-09-05

Seperti tipe data pada umumnya, banyak cara untuk menyimpan data spasial pada komputer. Data spasial dapat disimpan di dalam sebuah database, yang mana adalah sebuah sistem khusus untuk menyimpan data dan terdapat sistem database yang didesain khusus untuk menyimpan data spasial. Data spasial juga dapat disimpan sebagai sebuah file biasa, namun banyak jenis format file berbeda untuk data spasial.  

Pada bagian ini kita akan mengulas beberapa cara untuk menyimpan data spasial, bagaimana cara kerjanya dan bagaimana biasanya file tersebut digunakan.  

File-file .OSM
-----------

Format file **.osm** adalah format spesifik untuk data OpenStreetMap. Anda tidak akan menemukannya untuk data lain. Jika Anda pernah mengunduh data menggunakan JOSM dan menyimpannya sebagai sebuah file, mungkin Anda perhatikan bahwa file tersebut akan tersimpan dengan format file **.osm**. Jika Anda seorang pengguna SIG, Anda mungkin juga menyadari bahwa tidak mudah untuk membuka file ini menggunakan software SIG misalnya QGIS.  

Jadi mengapa data OSM disimpan dalam sebuah format yang orang lain tidak menggunakannya? Jawabannya adalah banyak format file data spasial sudah ada sebelum era internet modern dan didesain untuk akses cepat dan diquery seperti melakukan query pada sebuah database. Di sisi lain, data OSM didesain agar mudah untuk dikirim dan diterima melalui internet dalam sebuah format standar. Oleh karena itu, file **.osm** ditulis dalam XML dan berisi data geografi dalam format yang terstruktur dan rapi. Sebuah file **.osm** akan terlihat seperti ini jika dibuka di sebuah text editor:  

![Sample OSM XML file][]

Mendapatkan data dalam format **.osm** sangat mudah - bahkan sebenarnya Anda melakukannya setiap kali Anda mengunduh data di JOSM, namun menggunakan file ini untuk analisis dan mendesain peta tidak mudah. Oleh karena itu, Anda sebaiknya mengkonversi data tersebut ke format data lain atau mengambilnya dari platform yang mengkonversikannya untuk Anda.  

> Data OSM mentah biasanya disimpan sebagai file **.osm**, namun Anda mungkin juga menemukan file dengan format **.bz2** dan **.pbf**. File ini sebenarnya adalah file **.osm** yang sudah dikompres untuk menghemat ruang penyimpanan yang sangat berguna ketika bekerja dengan data berukuran besar.  

Shapefiles
----------

**Shapefile** adalah format yang banyak digunakan untuk menyimpan data spasial vektor. File ini dikembangkan oleh ESRI, perusahaan yang membuat ArcGIS, sebuah aplikasi GIS yang populer.  

Shapefiles sebenarnya adalah kumpulan dari beberapa file berbeda. Misalnya, sebuah shapefile yang berisi data bangunan akan memiliki file dengan ekstensi seperti di bawah ini:  

-	buildings.**shp**
-	buildings.**shx**
-	buildings.**dbf**

Shapefiles biasanya memiliki file tambahan yang berisi informasi lain.  

Sebuah shapefile harus ditujukan untuk satu jenis fitur saja (points, lines atau polygons) dan tiap fitur memiliki atribut yang tersimpan di tabel atribut. Tidak seperti sistem OpenStreetMap dimana setiap objek dapat memiliki tag tak terbatas, atribut dari fitur-fitur di sebuah shapefile harus sesuai dengan struktur tabel shapefile nya, yang tampilannya seperti ini:  

![Shapefile attributes][]

Data OpenStreetMap dapat dikonversi ke dalam shapefile. Banyak situs web yang menyediakan fitur konversi dari data OSM ke dalam format shapefile. Hal ini dibahas pada [bab selanjutnya](/id/osm-data/getting-data).  

Database-database
---------

Banyak jenis informasi yang disimpan di suatu sistem database, yang menyediakan suatu cara yang logis untuk mengorganisir dan mengakses data. Data spasial tidak jauh berbeda, walaupun database untuk data spasial didesain khusus untuk menangani fungsi kompleks yang dibutuhkan dalam melakukan query data spasial.  

Data OpenStreetMap biasanya disimpan dalam database PostgreSQL dengan ekstensi PostGIS. Tipe database ini menyediakan akses cepat ke data dan dapat digunakan dengan mudah dengan Mapnik, sebuah software untuk membuat map tiles yang digunakan pada slippy map web. Terdapat beberapa alat yang tersedia untuk mengimpor daata mentah OSM ke dalam sebuah database PostgreSQL.  

Jenis database lainnya yang sering ditemui adalah SQLite, yang menyediakan fungsi serupa dengan database PostgreSQL, namun semua ini disimpan dalam sebuah file dan tidak membutuhkan software database untuk menjalankannya. Database ini sedikit lebih sulit untuk Anda buat sendiri, namun database ini akan lebih mudah digunakan untuk dataset yang kecil.  

Rangkuman
-------

Pada bab di bawah kita akan mempelajari bagaimana Anda dapat mengunduh data dalam berbagai macam format dari internet dan bagaimana Anda daoat menggunakan bebagai macam alat untuk memanipulasi data mentah sendiri.  


[Sample OSM XML file]: /images/osm-data/example_osm.png
[Shapefile attributes]: /images/osm-data/shapefile_attributes.png