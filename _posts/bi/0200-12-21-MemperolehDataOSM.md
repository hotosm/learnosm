---
layout: doc
title: Memperoleh Data OSM
permalink: /bi/beginner/memperoleh-data-OSM
lang: bi
category: beginner
---
Memperoleh Data OSM
===================

Setelah anda belajar bagaimana menambahkan dan mengedit data pada
OpenStreetMap (OSM), sekarang mungkin anda ingin data tersebut diperoleh
sebagai back-up atau ingin anda olah dalam software-software Sistem
Informasi Geografis salah satunya yang Open Source, QuantumGIS
([www.qgis.org](http://www.qgis.org/))

Memperoleh Data OSM Melalui Website Geofabrik
---------------------------------------------

Data OSM dapat diperoleh dengan mudah yaitu dengan mendownloadnya di
website sebagai berikut:

[http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

[](http://download.geofabrik.de/openstreetmap/)

![]({{site.baseurl}}/images/bi_beg_ch7.1_image00.png)

[](http://download.geofabrik.de/openstreetmap/)

Data dibagi ke dalam beberapa region, untuk Indonesia anda dapat
menemukannya di bagian Asia. Anda dapat memeriksa kapan terakhir kali
data tersebut diperbaharui. Perlu diperhatikan, server biasanya
memperbaharui data setiap 24 jam sekali, jadi jika anda baru saja
mengupload data ke OSM, data tersebut tidak otomatis muncul ketika anda
mendownloadnya tetapi anda harus menunggu update terbaru dari server.

Terdapat beberapa format yang dapat didownload salah satunya format
populer seperti Shapefile (shp) dengan layer points, polyline, dan
polygon.

Memperoleh Data OSM Melalui Hot-Exports
---------------------------------------

Jika anda hanya ingin mendownload spesifik area tertentu dengan atribut
tertentu, anda dapat menggunakan layanan download data Hot-Exports

1.  Buka website hot-export.geofabrik.de maka akan keluar tampilan
    sebagai berikut:

    ![]({{site.baseurl}}/images/bi_beg_ch7.1_image01.png)

2.  Jika anda hanya ingin mendownload data OSM dengan atribut key dan
    value tertentu, anda dapat mengupload presets pada menu
    “Configuration” kemudian klik “New Upload”

    ![]({{site.baseurl}}/images/bi_beg_ch7.1_image02.png)

3.  Untuk memulai mendownload data, klik “New Job”
4.  Pilih Region \> Indonesia. Kemudian berikana nama pekerjaan dan
    deskripsinya. Setelah itu pada peta, anda dapat melakukan perbesaran
    pada spesifik area kemudian menggambar box dengan cara mengklik
    “select smaller area” atau anda dapat menentukan koordinatnya.
    Setelah itu klik “Save”

    ![]({{site.baseurl}}/images/bi_beg_ch7.1_image03.png)

5.  Kemudian anda dapat memilih presets yang tadi anda telah upload
    untuk menentukan atribut apa saja yang ingin anda download. Jika
    anda ingin mendownload data beserta seluruh key dan value yang ada,
    anda dapat langsung memberi tanda centang pada keterangan “Add
    default tags?” kemudian klik “Save”

    ![]({{site.baseurl}}/images/bi_beg_ch7.1_image04.png)

6.  Kemudian, server akan langsung memproses permintaan anda. Proses
    tergantung pada besar area yang anda pilih dan juga kapasistas
    server. Setelah itu anda dapat memilih format file yang ingin anda
    download. Semua permintaan download yang Anda buat akan muncul di
    halaman “Jobs”. Jadi jika anda sewaktu-waktu ingin mendownload area
    yang sama, anda dapat mencari nama pekerjaan yang sebelumnya telah
    anda buat dan mendownloadnya kembali tanpa harus mengklik “New Job”.

    ![]({{site.baseurl}}/images/bi_beg_ch7.1_image05.png)


