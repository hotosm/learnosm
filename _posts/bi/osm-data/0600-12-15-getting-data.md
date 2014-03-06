---
layout: doc
title: Mendapatkan Data OSM
permalink: /bi/osm-data/getting-data/
lang: bi
category: osm-data
---

Mendapatkan Data OSM
====================
Apabila Anda ingin mendapatkan data terbaru OpenStreetMap, cara yang paling mudah
adalah mendownload ekstrak data dari situs. Terdapat berbagai macam layanan situs 
yang menyediakan data ekstrak untuk sebuah daerah pilihan Anda. 

Mendownload Data Ekstrak
------------------------
### Geofabrik
[GeoFabrik](http://geofabrik.de) adalah perusahaan yang mengkhususkan diri bekerja
dengan OpenStreetMap. Mereka menyediakan berbagai ekstrak gratis pada shapefile dan 
format mentah OSM di dalam [situs download](http://download.geofabrik.de) mereka. 
Keuntungan mendownload data Geofabrik adalah datanya diperbarui setiap hari, dan 
sangat mudah serta dapat diandalkan. Salah satu kelemahannya adalah data tersebut
diambil per negara, dan tidak semua negara tersedia.

### Metro Ekstrak
[Situs lain yang dibuat oleh Michal Migurksi](http://metro.teczno.com/) menyediakan
shapefile untuk kota diseluruh dunia. Hal ini berguna jika Anda mencari untuk data
ekstrak suatu kota. Kelemahan situs ini adalah tidak diperbarui secara teratur.

>	Ingatlah bahwa fitur dalam OpenStreetMap memiliki jumlah tag "gratis" yang 
>	tidak terbatas, namun shapefile memiliki atribut yang disimpan dalam jumlah 
>	kolom yang terbatas. Hal ini dimaksudkan bahwa ketika data OSM dikonversi
>	ke dalam shapefile, hanya tag tertentu yang akan dimasukkan ke tabel shapefile.
>	Situs-situs yang tercantum di atas menyediakan shapefile dengan pengaturan
>	standar tag umum, tetapi jika Anda ingin mengekstrak tag tertentu Anda perlu
>	menggunakan salah satu layanan tertentu pada sesi selanjutnya atau mempelajari
>	bagaimana mengeksport data Anda sendiri.

Ekstrak yang Disesuaikan
-------------------------
### HOT Export
[Humanitarian OpenStreetMap Team](http://hotosm.org) telah membuat layanan yang 
memungkinakan pengguna memilih daerah yang mereka ingin ekstrak, dan juga menggunakan
[JOSM Presets](/en/editing/josm-presets) untuk memilih tag yang sudah disesuaikan untuk
dimasukkan dalam ekstrak. Layanan yan tersedia untuk semua negara dimana HOT bekerja, di
[export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike
Anda dapat memilih daerah Anda sendiri dari setiap bagian negara menggunakan layanan ini di
[http://extract.bbbike.org/](http://extract.bbbike.org/). Kelemahannya adalah Anda tidak
dapat memilih tag yang sudah disesuaikan.

Ringkasan
----------
Layanan yang disebutkan dalam bab ini adalah semua kebutuhan pengguna untuk mendapatkan data 
OSM yang mereka inginkan dan dapat bekerja dengan datanya di perangkat lunak SIG. Namun, Anda
mungkin ingin mempelajari cara yang lebih canggih ketika bekerja dengan data Anda sendiri. 
Bab-bab yang tersisa pada sesi ini sangatlah teknis, tetapi menunjukkan metode yang lebih 
canggih dalam memanipulasi dan mengakses data OSM.


[hot exports]: /images/en/osm-data/getting-data/hot-exports.png
