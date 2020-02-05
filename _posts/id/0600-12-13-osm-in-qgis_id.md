---
layout: doc
title: Menggunakan Data OSM di QGIS
permalink: /id/osm-data/osm-in-qgis/
lang: id
category: osm-data
---

Menggunakan Data OSM di QGIS
=================

> Direview 2015-07-19

QGIS (sebelumnya Quantum GIS) adalah sebuah platform SIG yang bersifat open-source. Dengan QGIS Anda dapat mengakses data OSM terbaru kapanpun, memilih tag yang Anda perlukan dan dengan mudah mengekspornya ke dalam database SQLite atau Shapefile.  

Pada bagian ini kami akan memandu langkah-langkah yang diperlukan untuk melakukannya. Kami asumsikan Anda sudah mengunduh dan menginstal QGIS 2.x. Jika Anda belum menginstalnya, Anda dapat mengunduhnya di <http://www.qgis.org/en/site/forusers/download.html>.  

Untuk membuka data OSM di QGIS, kita harus mendapatkan data OSM mentahnya di dalam format **.osm**. Lalu, kita dapat mengubah data ini menjadi database SQLite, yang merupakan sistem database ringan yang disimpan pada satu file. Terakhir, kita akan membuat sebuah layer (atau lebih dari satu layer) yang terdiri dari tipe fitur dan tag yang akan kita akses. Layer ini dapat digunakan di QGIS sebagai database SQLite atau disimpan sebagai format lain, seperti shapefile.  

Mengakses Data OpenStreetMap
---------------------------

Hal pertama yang harus dilakukan adalah mendapatkan data OSM terbaru. Banyak cara untuk mendapatkan data OSM terbaru. Tentu, mengambil data dari OSM server, seperti yang kita lakukan di JOSM Editor, sangat terbatas karena kita tidak dapat mengambil data besar sekaligus - namun, ada beberapa cara untu mengakses data besar,
seperti yang dijelaskan pada bagian sebelumnya di [Mendapatkan Data OSM](/id/osm-data/getting-data) dan [Menggunakan Geofabrik dan HOT Export](/id/osm-data/geofabrik-and-hot-export).  

Untuk tutorial ini kita akan menggunakan fitur download yang sudah ada pada QGIS.  

- Buka QGIS dan klik Vector -> OpenStreetMap -> Download Data...  
- Anda dapat memilih dari beberapa pilihan di sini - jika kanvas peta Anda sudah menampilkan luasan wilayah yang ingin Anda unduh, centang kotak "From map canvas." Jika Anda memiliki sebuah layer yang dibuka di QGIS dengan cakupan wilayah yang sudah sesuai dengan kebutuhan Anda, pilih "From layer" lalu pilih layer yang ingin Anda gunakan. Di sini kita akan memilih "Manual" dan masukkan latitude dan longitude yang akan membentuk sebuah **bounding box** di sekitar area yang	Anda ingin akses. Anda dapat mengisi latitude dan longitude untuk area yang ingin Anda unduh, tapi ingat area tersebut tidak dapat terlalu besar atau Anda tidak akan berhasil mengunduh data OSM nya.  

![bounding box][]

- Tulis nama dan lokasi untuk file output, gunakan format file **.osm** dan klik OK.  
- Akan muncul pemberitahuan ketika proses unduhan telah selesai. Klik "Close" untuk menutup jendela Download.  

![download complete][]

- Data OSM akan disimpan di direktori yang sudah Anda tentukan.  

> Metode mengakses data OSM ini sama seperti jika Anda mengunduhnya di JOSM atau pada [openstreetmap.org](http://www.openstreetmap.org). Untuk mengekstrak data yang lebih besar yang terbaru, Anda mungkin dapat mencobanya di [HOT export site](http://export.hotosm.org) atau [bbbike.org](http://extract.bbbike.org/). Ingat bahwa jika Anda mengunduh file OSM yang dikompres, Anda harus dekompres file tersebut ke dalam format file **.osm** untuk langkah berikutnya.  


Mengimpor Data ke SQLite
---------------------------

Berikutnya kita akan mengimpor data mentah **.osm** ke dalam file database SQLite.  

- Klik menu Vector -> OpenStreetMap -> Import Topology from XML...  
- Pada kolom pertama, pilih file **.osm** Anda.  
- Anda dapat mengubah nama dari file output database jika perlu.  
- Biarkan kotak "Create Connection..." tetap tercentang.  

![import dialog][]  

- Klik OK.  
- Setelah selesai, klik "Close."  


Membuat Layer
--------------

Terakhir, kita akan membuat layer sesuai kebutuhan kita yang dapat dibuka di QGIS.  

- Klik menu Vector -> OpenStreetMap -> Export Topology to SpatiaLite...  
- Pada kolom pertama, pilih database yang Anda buat pada langkah sebelumnya.  

![input db file][]  

- Di bawah "Export type," pilih tipe fitur yang ingin Anda buat layer nya. Di sini kita akan membuat layer menggunakan poligon.  

![export type][]  

Ubah nama layer jika Anda mau.  

Di bawah "Exported tags" adalah dimana semuanya diatur. Di sini kita dapat memilih tag mana yang akan dimasukkan ke dalam layer output nya. Hal ini memberikan kita keleluasaan untuk memilih data mana yang mau kita akses.  

- Klik "Load from DB" untuk melihat daftar tag yang tersedia pada database. Perbesar ukuran kotak dialog dengan menggeser sudutnya. Anda dapat melihat semua tag yang terdapat di data ini dan jumah fitur yang memiliki tag-tag tersebut.  
- Beri centang pada kotak di sebelah tag yang mau Anda masukkan. Di sini kita akan memilih beberapa fitur yang berupa poligon dan menggambarkan bangunan.  

![export full][]  

Jika sudah selesai, klik OK.  Tutup kotak dialog. Layer Anda akan otomatis terbuka.  

![cairo polygons][]  

Klik kanan pada layer dan klik "Open Attribute Table."  

![open attribute table][]  

Anda dapat melihat tabel ini hanya memiliki atribut dari tag yang dipilih dari tag sebelumnya.  

![attribute table][]  

Perhatikan bahwa kita tidak membuat layer yang berisi **hanya** bangunan. Kita membuat sebuah layer yang berisi semua poligon dari data awal, namun hanya mencakup semua tag yang kita pilih saja. Untuk memfilter layer ini agar menampilkan bangunan saja, kita harus memfilter menggunakan query yang memfilter poligon bertag building=yes.


Rangkuman
-------

Proses ini memudahkan kita untuk mendapatkan data OSM terbaru dan membukanya di QGIS. Ketika Anda sudah memiliki layer seperti ini di QGIS, banyak yang dapat dilakukan terhadap layer tersebut seperti menyimpannya ke dalam format shapefile, menjalankan filter dan query dan sebagainya. Untuk informasi lebih lengkap mengenai fungsi-fungsi tersebut silakan lihat menu Bantuan/Help pada QGIS.  


[bounding box]: /images/osm-data/bounding_box.png
[download complete]: /images/osm-data/download_complete.png
[import dialog]: /images/osm-data/import_dialog.png
[input db file]: /images/osm-data/input_db_file.png
[export type]: /images/osm-data/export_type.png
[export full]: /images/osm-data/export_full.png
[cairo polygons]: /images/osm-data/cairo_polygons.png
[open attribute table]: /images/osm-data/open_attribute_table.png
[attribute table]: /images/osm-data/attribute_table.png
