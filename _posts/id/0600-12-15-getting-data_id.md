---
layout: doc
title: Mendapatkan Data OSM
permalink: /id/osm-data/getting-data/
lang: id
category: osm-data
---

Mendapatkan Data OSM
=================  

> Diperiksa 2016-04-05

Ketika Anda ingin mendapatkan data OpenStreetMap yang paling terbaru, cara paling mudah untuk mendownloadnya adalah dengan mengekspor dari sebuah situs. Ada beberapa jenis situs layanan yang menyediakan ekspor data untuk area yang Anda tentukan.   

Men-download Data OSM
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) adalah perusahaan spesifik yang bekerja dengan menggunakan OpenStreetMap. Mereka menyediakan jenis data spasial dalam bentuk shapefile dan raw data OSM dalam situs [download website](http://download.geofabrik.de). Keunggulan men-download data dari GeoFabrik adalah data diperbaharui setiap hari, mudah dan dapat dipercaya. Salah satu kelemahannya adalah data yang disediakan berdasarkan batas negara, dan tidak semua negara tersedia datanya.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) menyediakan shapefile dan format data OSM untuk kota-kota di dunia, data diperbaharui perminggu. Situs ini dapat digunakan jika Anda ingin melihat data berdasarkan batas kota/kabupaten.

>Hal yang harus diingat yaitu beberapa fitur di dalam OpenStreetMap memiliki "free" tags dengan jumlah huruf yang tidak terbatas,
>tetapi shapefiles memiliki penyimpanan atribut dengan jumlah huruf yang terbatas pada atribut kolom. Ini berarti
>ketika data OSM akan diubah ke dalam shapefile, hanya tag spesifik yang akan 
>termasuk ke dalam tabel atribut shapefile. Pada situs ini hanya menyediakan shapefile
>dengan tags default yang pada umumnya digunakan, tetapi jika Anda ingin mendapatkan shapefile dengan tag spesifik
>Anda dapat menggunakan situs layanan yang lebih spesifik yang dapat memilih tag tertentu pada sub bab berikutnya
>atau Anda dapat mempelajari bagaimana cara mengekspor data.

Kustomisasi Data
-------------------

### HOT Exports  

The [Humanitarian OpenStreetMap Team](http://hotosm.org) telah membuat sebuah layanan yang memungkinkan pengguna untuk memilih sebuah wilayah yang ingin diambil datanya dengan menggunakan [JOSM Presets](/en/josm/josm-presets/)
untuk memilih tags yang diinginkan yang akan tersaring di dalam proses ekspor. Layanan ini tersedia untuk semua negara dimana HOT bekerja, situs tersebut yaitu [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike  

Anda dapat memilih wilayah yang spesifik yang Anda inginkan dengan menggunakan [http://extract.bbbike.org/](http://extract.bbbike.org/). Kelemahan dari layanan ini yaitu Anda tidak dapat memilih tag yang di kustomisasi dan jumlah data yang Anda download akan terbatas.  

### Overpass

Overpass API (Application Programming Interface) adalah untuk mengekstrak data dari server OpenStreetMap yang akan sesuai dengan jumlah data yang dihasilkan. Dengan menggunakan kueri Anda dapat mengkustomisasi bagian data yang Anda peroleh. Anda dapat juga menggunakan API secara langsung dengan menghasilkan sebuah http-request atau melalui tampilan overpass turbo. 

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) adalah sebuah kueri generator yang interaktif dimana Anda harus memperbesar peta dan memilih wilayah yang Anda inginkan. Masukkan kueri Anda di kotak sebelah kiri dari halaman dan gunakan beberapa menu yang terdapat di bagian atas halaman. Jika Anda baru menggunakan bahasa kueri, klik pada bagian wizard untuk memulai. OSM wiki berisi konten [deskripsi lebih lanjut](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) dari sintaksis bahasa kueri yang sama dengan [contoh](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

Peta akan menampilkan semua data yang diseleksi dengan kueri yang nantinya bisa Anda modifikasi. Tekan "Run" untuk memperbaharui tampilan. Jika Anda telah selesai klik "Export" akan menampilkan jumlah data, diantara raw data OSM. Jika jumlah data terbatas, Anda dapat mengaksesnya dengan memindahkan diantara tampilan peta dan tampilan data degan menggunakan tombol di sisi bagian atas. Pilihan eskpor *Query -> compact OverpassQL* akan memproses hyperlink yang digunakan untuk Overpass API. 

![overpass turbo][]

Jika Anda ingin menjalankan sebuah query yang rumit untuk memperoleh data dari area yang besar, ada baiknya jika Anda mencoba query tersebut di Overpass Turbo pada area yang lebih kecil. Anda kemudian dapat memperkecil untuk melengkapi area Anda dan gunakan url query tersebut langsung ke API. Bab berikutnya akan menjelaskan bagaimana Anda dapat melakukannya.

#### API Overpass

[Overpass API](http://wiki.openstreetmap.org/wiki/Overpass_API) adalah sebuah layanan yang didedikasikan untuk melakukan query namun tidak untuk menulis data OpenStreetMap. Karena optimisasi ini, Overpass beroperasi sangat cepat dibandingkan dengan api database utama dan memiliki jumlah tak terbatas untuk transfer data. Beberapa contoh layanan ini tersedia di internet, yang digunakan pada contoh di bawah ini juga menyediakan informasi pada [halaman depannya](http://overpass-api.de/)

Jika Anda memiliki sebuah query-URL yang berfungsi dengan baik untuk mengirimkan sebuah http-request ke Overpass API maka sebuah alat seperti [wget](https://www.gnu.org/software/wget/) - tersedia untuk beberapa sistem operasi, lihat [di sini](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - memungkinkan Anda untuk mengunduh data mentah OSM langsung dari server dan menyimpannya secara lokal. Potongan script di bawah ini adalah sebuah script untuk melakukan bash shell pada sistem Unix yang berisi semua data pada kotak tertentu:

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
>Apa yang terjadi di sini (untuk yang ingin tahu namun tidak membaca keseluruhan dokumentasi bahasa query)?  
>node(...) selects all nodes within a bounding box;  
>< recurses up fully, i.e. selects all ways containing these nodes and all relations containing these nodes and ways;  
>rel(br) selects all parent relations of relations obtained so far (otherwise master relations would not be obtained)
>



Ringkasan
-------  

Layanan yang disebutkan pada bab ini adalah pengguna biasa membutuhkan data OSM yang mereka butuhkan dan dapat mengolahnya di software GIS. Namun, Anda mungkin berminat untuk mempelajari cara yang lebih efektif dalam mengolah data. Bab yang tersisa akan sangat teknis, namun akan menunjukkan metode memanipulasi dan mengakses data OSM.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png