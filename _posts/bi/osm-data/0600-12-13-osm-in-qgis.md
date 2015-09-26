---
layout: doc
title: Data OSM di QGIS
permalink: /bi/osm-data/osm-in-qgis/
lang: bi
category: osm-data
---

Data OSM di QGIS
================

A slightly more recent version of this guide is available in [English](/en/osm-data/osm-in-qgis/) or [Deutsch](/de/osm-data/osm-in-qgis/). To help produce translations for this site, go to <https://www.transifex.com> and search for **HOT-OSM**.  

Dengan peluncuran QGIS pada tahun 2013, ini menjadi mudah untuk memuat dan bekerja
dengan Data OpenStreetMap. Hal ini dimaksudkan bahwa Anda sekarang dapat mengakses data 
OSM terbaru kapan pun yang Anda inginkan, pilih tag yang Anda ingin masukkan, dan 
mengeksportnya dengan mudah ke dalam database SQLite atau Shapefile agar lebih mudah
digunakan.

Pada bab ini kita akan melalui langkah-langkah yang diperlukan untuk melakukan ini. 
Kita asumsikan bahwa Anda sudah mendownload dan menginstal QGIS 2.x. Jika Anda belum
menginstalnya, Anda dapat mendownloadnya [disini](http://www.qgis.org/en/site/forusers/download.html).

Pada bab ini kita akan melakukan beberapa langkah untuk mendapatkan penyesuaian kita,
perbaruan layer OSMdimuat di dalam QGIS. Pertama, kita akan mendapatkan data OSM terbaru
dalam format **.osm**. Kemudian, kita akan mengkonversi data ini ke dalam database SQLite, 
yang merupakan sistem database yang tersimpan dalam satu file di sistem Anda. Terakhir,
kita akan membuat sebuah layer (atau beberapa layer) yang mencakup hanya jenis fitur 
dan tag yang ingin kita akses. Layer-layer ini dapat digunakan atau disimpan dalam 
format lain, seperti shapefile.

Memuat Data OpenStreetMap
-------------------------
Hal pertama yang kita akan lakukan adalah mendapatkan beberapa data OSM terbaru. Kita dapat
melakukan ini dengan berbagai cara. Tentu saja, meminta data dari server OSM, seperti 
yang kita lakukan di JOSM, dimaksudkan bahwa kita tidak dapat menarik data dengan jumlah
besar - namun, terdapat cara lain untuk mengakses data, seperti yang dideskripsikan pada
[bab sebelumnya](/bi/osm-data/getting-data).

Mari kita mendownload fungsi yang dibangun di QGIS, karena kita akan bekerja dengan QGIS 
di sisa bab ini. Fungsi download tidak terlalu nyaman untuk menulis ini, tetapi tujuan
kita lebih baik. 

*	Buka QGIS dan pergilah ke Vector -> OpenStreetMap -> Download data.

![download data][]

*	Anda dapat memilih dari beberapa pilihan disini - jika jendela Anda sudah menampilkan
	sesuai dengan keinginan Anda, centang kotak di sebelah "From Map Canvas". Jika Anda
	memiliki sebuah layer yang sesuai, pilih "From Layer" dan pilih layer yang Anda ingin
	gunakan. Disini kita akan memilih "Manual" dan masukan titik koordinat yang membentuk 
	**kotak pembatas** di sekitar daerah yang ingin kita akses. Anda dapat mengisi titik
	koordinat yang menarik, tetapi ingatlah bahwa daerah tidak terlalu besar, atau Anda
	tidak dapat mendownload semua data.

![bounding box][]

*	Pilih nama dan lokasi untuk file output dan klik OK.
*	Anda akan diberi informasi ketika download sudah lengkap. Klik "Close" untuk keluar dari
	kotak dialog download.

![download complete][]

*	Data OSM akan disimpan di lokasi Anda.

>	Metode mengakses data OSM ini adalah sama seperti jika Anda mendownload data di JOSM atau
>	di [openstreetmap.org](http://www.openstreetmap.org). Untuk ekstrak lebih besar yang
>	terbaru, Anda mungkin mencoba mendownload dari [HOT export site](http://export.hotosm.org)
>	atau [bbbike.org](http://extract.bbbike.org/). Ingatlah bahwa jika Anda mendownload file
>	OSM yang dikompres, Anda terlebih dahulu dekompres ke dalam format **.osm** untuk langkah selanjutnya.

Mengimport Data ke SQLite
---------------------------
Selanjutnya kita perlu mengmport file **.osm** kita ke dalam database SQLite.

*	Pergilah ke Vector -> OpenStreetMap -> Import topology from XML

![import from xml][]

*	Di dalam field pertama, pilih file **.osm** Anda.
*	Anda dapat mengubah nama file database output jika Anda suka.
*	Biarkan kotak tercentang di sebelah "Create Connection..."

![import dialog][]

*	Klik OK.
*	Ketika sudah selesai, klik "Close".

Membuat Layer
---------------
Terakhir, kita akan mendefinisikan layer yang dapat digunakan di QGIS, dikostumisasi sesuai dengan
kebutuhan kita.

*	Pergilah ke Vector -> OpenStreetMap -> Export topology to Spatialite

![export topo][]

*	Pada field pertama, pilih database yang Anda sudah buat pada tahap sebelumnya.

![input db file][]

*	Di bawah "Export type", pilih jenis fitur yang ingin Anda buat layernya. Disini kita
	akan membuat sebuah layer menggunakan poligon.

![export type][]	

*	Edit nama layer jika Anda mau.

Di bawah "Exported tags" dimana keajaiban akan terjadi. Disini kita dapat memilih tag yang akan
dimasukkan di dalam layer output kita. Ini memberikan kita kemudahan untuk data yang kita ingin
akses.

*	Klik "Load from DB" untuk melihat daftar semua tag yang ada di dalam database. Anda dapat
	melihat semua tag yang terkandung dalam data ini, dan juga sejumlah fitur yang masing-masing
	memiliki tag. 
*	Centang kotak di sebelah tag yang Anda ingin masukkan. Disini kita akan memilih sedikit fitur
	yang berguna untuk membuat poligon.

![export full][]

*	Ketika Anda sudah meyelesaikannya, klik OK.
*	 Tutup kotak. Layer Anda seharusnya akan ditambahkan secara otomatis.

![cairo polygons][]

*	Klik kanan pada layer dan klik "Open Attribute Table."

![open attribute table][]

*	Anda dapat melihatnya disini bahwa kita memiliki sebuah tabel yang mencakup atribut yang kita
	pilih.

![attribute table][]

Perhatikan bahwa kita belum membuat layer bangunan saja. Namun, kita akan membuat layer yang mencakup 
semua poligon dari data asli kita, tetapi hanya mencakup tag yang kita pilih. Untuk menyaring 
layer ini agar yang terlihat hanya bangunannya saja, kita perlu mengeksekusi sebuah query selanjutnya
yang disaring hanya poligon building=yes.

Ringkasan
---------
Proses ini memudahkan kita mendapatkan data OSM yang terbaru dan menariknya ke dalam SIG Anda. Setelah
Anda memiliki layer seperti ini di QGIS, ini mungkin untuk menyimpan mereka sebagai shapefile,
mengseksekusi filter dan query, dan sebagainya. 


[download data]: /images/en/osm-data/osm-in-qgis/download_data.png
[bounding box]: /images/en/osm-data/osm-in-qgis/bounding_box.png
[download complete]: /images/en/osm-data/osm-in-qgis/download_complete.png
[import from xml]: /images/en/osm-data/osm-in-qgis/import_topo_from_xml.png
[import dialog]: /images/en/osm-data/osm-in-qgis/import_dialog.png
[export topo]: /images/en/osm-data/osm-in-qgis/export_topo.png
[input db file]: /images/en/osm-data/osm-in-qgis/input_db_file.png
[export type]: /images/en/osm-data/osm-in-qgis/export_type.png
[export full]: /images/en/osm-data/osm-in-qgis/export_full.png
[cairo polygons]: /images/en/osm-data/osm-in-qgis/cairo_polygons.png
[open attribute table]: /images/en/osm-data/osm-in-qgis/open_attribute_table.png
[attribute table]: /images/en/osm-data/osm-in-qgis/attribute_table.png
