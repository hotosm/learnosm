---
layout: doc
title: Data OSM di QGIS
permalink: /bi/osm-data/osm-in-qgis/
lang: bi
category: osm-data
---

Data OSM di QGIS
================
Dengan peluncuran QGIS pada tahun 2013, ini menjadi mudah untuk memuat dan bekerja
dengan Data OpenStreetMap. Hal ini dimaksudkan bahwa Anda sekarang dapat mengakses data 
OSM terbaru kapan pun yang Anda inginkan, pilih tag yang Anda ingin masukkan, dan 
mengeksportnya dengan mudah ke dalam database SQLite atau Shapefile agar lebih mudah
digunakan.

Pada bab ini kita akan melalui langkah-langkah yang diperlukan untuk melakukan ini. 
Kita asumsikan bahwa Anda sudah mendownload dan menginstal QGIS 2.x. Jika Anda belum
menginstalnya, Anda dapat mendownloadnya [disini]http://www.qgis.org/en/site/forusers/download.html).

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
[bab sebelumnya](/en/osm-data/getting-data).

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

Importing Data into SQLite
---------------------------
Next we will need to import our raw **.osm** file into a SQLite Database.

-	Go to Vector -> OpenStreetMap -> Import topology from XML

![import from xml][]

-	In the first field, select your **.osm** file.
-	You can change the name of the output database file if you like.
-	Keep the box checked next to "Create Connection..."

![import dialog][]

-	Click OK.
-	When it is finished, click "Close."

Create Layers
--------------
Lastly, we will define layers that can be used in QGIS, customized according to our needs.

-	Go to Vector -> OpenStreetMap -> Export topology to Spatialite

![export topo][]

-	In the first field, select the database you created in the previous step.

![input db file][]

-	Under "Export type," select the type of features you want to create a layer for. Here
	we will create a layer using polygons.

![export type][]

-	Edit the layer name if you like.

Under "Exported tags" is where the magic happens. Here we can select which tags will be
included in our output layer. This gives us flexibility over exactly which data we want to
access.

-	Click "Load from DB" to see a list of all the available tags in the database. You can see
	all the tags contained in this data, and also the number of features that have each tag.
-	Check the boxes next to the tags that you want to include. Here we will select a few features
	that will be useful for building polygons.

![export full][]

-	When you are finished, click OK.
-	Close the box. Your layer should be automatically added.

![cairo polygons][]

-	Right-click on the layer and click "Open Attribute Table."

![open attribute table][]

-	You can see here that we have a table which includes only the attributes we selected.

![attribute table][]

Note that we have not created a layer of **only** buildings. Instead, we have created a layer
that includes all of the polygons from our original data, but only includes the tags which we
selected. In order to filter this layer to show only buildings, we would need to execute a query
next which filters only polygons where building=yes.

Summary
-------
This process makes it easy to get up-to-date OSM data and pull it into your GIS. Once you have
layers like this in QGIS, it is possible to save them as shapefiles, execute filters and queries,
and so forth.


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