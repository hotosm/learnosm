---
layout: doc
title: Menggunakan Geofabrik dan HOT Export
permalink: /id/osm-data/geofabrik-and-hot-export/
lang: id
category: osm-data
---

Menggunakan Geofabrik dan HOT Export
================


Setelah belajar bagaimana menambahkan dan mengedit data OpenStreetMap (OSM), sekarang mungkin Anda ingin mendapatkan data tersebut sebagai cadangan atau ingin memprosesnya menggunakan software SIG yang open source, seperti QGIS ([www.qgis.org](http://www.qgis.org)).  

Memperoleh Data OSM di Situs Geofabrik
-------------------------------------

Data OSM dapat diperoleh secara mudah dengan mengunduhnya dari [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

![download-geofabrik][]

Data dibagi menjadi beberapa region. Indonesia dapat ditemukan di bagian Asia dengan mengklik di sub-region Asia pada tabel berwarna biru, lalu tampilan halaman akan terlihat seperti ini.  

![geofabrik-asia][]

Setelah muncul di bagian atas halaman, lihatlah bagaimana sub-region tadi membaginya menjadi negara-negara di Asia. Untuk mendapatkan datanya, Anda harus mengklik Indonesia dan tampilannya akan seperti ini.  

![geofabrik-indonesia][]

Jika Anda ingin mendapatkan data Indonesia dengan format shapefile (.shp), Anda dapat mengklik tautan indonesia-latest.shp.zip dan file tersebut akan otomatis terunduh. Ada beberapa format yang dapat diunduh. Yang paling sering diunduh adalah file dengan format shapefile (.shp) dengan layer titik, garis dan poligon.  

Anda dapat mengecek kapan data terakhir diperbarui. Harap diingat, server biasanya memperbarui data setiap 24 jam sekali, jadi jika Anda baru saja mengunggah data OSM, data tersebut tidak serta merta muncul ketika Anda mengunduhnya, namun Anda harus menunggu untuk server memperbarui datanya.  

Memperoleh Data OSM menggunakan Situs HOT Export Tool
--------------------------------------

[Humanitarian OpenStreetMap Team](https://www.hotosm.org/) (HOT) menciptakan sebuah website yang memungkinkan pengguna untuk mengunduh data OSM secara kustom dimanapun, dengan memilih area, fitur peta dan format file. Dalam beberapa menit, data OSM terbaru dapat diekspor, difilter dan dikonversi. Bagian ini akan memandu Anda bagaimana cara menggunakan Export Tool. Informasi ini juga dapat dipelajari di ‘[Learn](https://export.hotosm.org/en/v3/learn)’ pada export.hotosm.org.

![hot-export-tool][]

## Panduan Singkat

Siapapun dapat mengekspor data OpenStreetMap menggunakan Export Tool - cukup dengan mendaftarkan sebuah akun. Anda dapat mendaftar menggunakan akun OpenStreetMap yang dibuat di openstreetmap.org dan sebuah alamat email valid yang akan digunakan untuk mengirimkan tautan ekspor setelah prosesnya selesai.

## Menentukan Area

Ada beberapa cara untuk menentukan area yang akan diunduh menggunakan Export Tool. Cara-cara tersebut adalah mencari area di kotak pencarian, memasukkan koordinat dari sebuah kotak, menggambar kotak secara manual, menggambar poligon bebas, menggunakan cakupan area pada tampilan saat ini serta mengunggah file geojson.

![export-tool-create][]

Setelah berhasil login ke HOT Export Tool, tab 'Create' akan tersedia. Pada tab 'Create' ini Anda akan mengatur ekspor, dengan menggambarkannya pada sisi sebelah kiri dan memilih area yang Anda akan unduh pada sisi sebelah kanan Anda. 

![export-tool-describe][]

### Kotak Pencarian
Ada 6 cara untuk menentukan area yang akan diunduh. Cara pertama dan kedua adalah dengan menggunakan kotak pencarian dengan menuliskan nama tempat atau dengan memasukkan koordinat kotak area. Koordinat minimum X, minimum Y, maksimum X dan maksimum Y (Barat, Selatan, Timur, Utara) dari suatu negara dapat ditemukan di [daftar CSV Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/bounding-boxes-for-countries).

![export-tool-search][]
![export-tool-coordinates][]


### Melakukan Digitasi pada Batas Area 
Cara ketiga dan keempat untuk menentukan area untuk diunduh menggunakan Export Tool adalah dengan cara menggambar sebuah kotak menggunakan tombol 'Box' di sebelah kanan layar Anda atau menggambar poligon bebas langsung di atas peta menggunakan tombol 'Draw'.

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Upload Poligon
Dua cara terakhir untuk menentukan area yang akan diunduh yaitu menggunakan tombol 'This View' di sebelah kanan layar Anda, yang akan mengambil cakupan area yang saat ini ditampilkan oleh peta, atau dengan menggunakan tombol 'Import' yang memungkinkan Anda untuk mengunggah poligon dari area yang akan diunduh.  

![export-tool-area-view][]
![export-tool-area-import1][]


TFile yang dapat diunggah harus dalam format GeoJSON dalam WGS84. Salah satu cara untuk membuat sebuah file GeoJSON adalah dengan menggunakan website geojson.io. Setelah areanya sudah terseleksi di [geojson.io](http://geojson.io/), salin teks pada kotak di samping kanan, paste teks tersebut ke dalam editor pilihan Anda, seperti [Atom](https://atom.io/) dan simpan sebagai file GeoJSON.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


File GeoJSON harus sedikit diedit agar dapat diterima oleh Export Tool. Harap diingat bahwa file tidak dapat berupa multipoligon. File harus memiliki jenis "type:Polygon" dan daftar koordinat dari titik-titik area tersebut. GeoJSON akan berhasil terbaca oleh Export Tool untuk menentukan area ekspor.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Memilih Format File

Alat ini memungkin data OSM diambil melalu Overpass API dalam format file Protocol Buffer Binary (PBF), sebelum memfilter data untuk fitur peta dan tag yang dispesifikasikan oleh pengguna. Setelah data sudah difilter, data akan diubah ke dalam format file yang dipilih pengguna.  

Saat ini, di HOT Export Tool Anda dapat menyimpan data OSM dalam format Shapefile .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf, dan MBTiles .mbtiles. Setidaknya salah satu format file harus dipilih untuk mengekspor data OSM, namun Anda dapat memilih lebih dari satu jenis format file dengan mencentang lebih dari satu jenis format file.

![export-tool-file-formats][]


### Shapefile .shp
Shapefile adalah format tabular yang diciptakan oleh Esri. Format file ini adalah format yang paling sering digunakan untuk data spasial. Sebuah file shapefile sebenarnya terdiri dari 3-4 file individu, yang pada umumnya digabungkan menjadi satu dalam format ZIP. Shapefile memiliki beberapa batasan, seperti ukuran file maksimal 2 gigabytes (GB) dan nama kolom dengan maksimal 10 karakter. Baca lebih lanjut mengenai [Shapefiles .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) pada bagian Learn.

![export-tool-shapefile][]


### Geopackage .gpkg
OGC Geopackages menyimpan data geospasial dalam sebuah database SQLite. Geopackages sangat mirip dengan database Spatialite-enabled SQLite. File tersebut dapat digunakan di hampir semua aplikasi SIG. Geopackages mendukung ukuran file yang tak terbatas dan jumlah kolom pada tabel dan mendukung penuh Unicode. Tipe file ini sangat ideal jika Anda ingin menjalankan query SQL untuk data Anda. Baca lebih lanjut mengenai [Geopackages.gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) pada bagian Learn.

![export-tool-sql][]


### Garmin .img
A .File IMG berisi semua informasi yang diperlukan untuk menerjemahkan peta ke perangkat Garmin GPS. Harap diingat bahwa kartografi dari .img dan pilihan fitur dari peta tidak bergantung pada pemilihan fitur saat menggunakan Export Tool - melainkan menggunakan sebuah gaya kartografi bawaan berdasarkan gaya yang digunakan oleh semua data OSM. Baca lebih lanjut mengenai [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) pada bagian Learn.

![export-tool-garmin][]


### Google Earth .kml
Keyhole Markup Language (KML) adalah format file berbasis XML untuk modeling untuk titik, garis dan poligon dan atribut terkait secara geografis. Google Earth adalah platform terkenal untum menjelajah permukaan Bumi menggunakan KML, yang juga merupakan alasan mengapa format file ini dikembangkan. Baca lebih lanjut mengenai [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) pada bagian Learn.

![export-tool-google-earth][]


### OSM .pbf
Format data OSM pada dasarnya adalah sebuah dokumen XML dari nodes, ways dan relations. Protocol Buffer Binary Format (PBF) adalah representasi dari data OSM XML, yang berukuran lebih kecil dan lebih cepat dibaca. Format ini hanya kompatibel dengan alat OSM spesifik, seperti software editor OSM. Setiap .PBF yang diperoleh dari export tool seharusnya sudah lengkap secara referensi - yaitu, tiap node, way atau relation yang tereferensi dari sebuah way atau relation akan muncul di PBF. Pelajari lebih lanjut mengenai [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) pada bagian Learn.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me adalah sebuah aplikasi peta dan navigasi untuk tablet dan smartphone berbasis Android dan iOS, yang mendukungpeta dan navigasi offline. Baca lebih lanjut [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) pada bagian Learn. Untuk menggunakan data ekspor kustom menggunakan Maps.me pada Android, silakan ikuti langkah-langkah berikut:
- Buka Maps.me dan navigasikan ke wilayah yang Anda inginkan
- Terima permintaan Maps.me dan unduh area tersebut
- Tutup Maps.me
- Buat sebuah ekspor MWM
- Unduh hasil ekspor, unzip dan salin file .mwm ke dalam perangkat Anda
- Gunakan Android File Manager untuk menemukan dimana letak file .mwm
- Tekan agak lama pada file tersebut dan tekan tombol "salin" atau "potong"
- Navigasi ke "MapsWithMe" dan buka folder dengan angka tertinggi (misalnya 170917)
- Salin/Pindahkan file .mwm ke direktori dengan menekan tombol "paste"
- Hapus file .mwm yang ada untuk wilayah Anda, catat nama file tersebut
- Ubah nama file .mwm yang Anda salin dengan nama yang tadi Anda catat (yang file nya baru saja dihapus) dengan menekan agak lama (untuk memilih) dan tekan tombol "more" (3 titik vertikal)
- Buka Maps.me

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd adalah aplikasi peta dan navigasi untuk smartphone dan tablet berbasis Android dan iOS, terutama mendukung render, navigasi dan pencarian offline. Baca lebih lanjut mengenai aplikasi ini dan fitur-fiturnya di [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) dari situs web utama mereka. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles adalah sebuah format file untuk menyimpan map tiles dalam sebuah file. Export Tool memungkinkan pengguna untuk membuat MBTiles berisi tiles dari OSM, yang dapat digunakan sebagai sumber konteks offline di dalam aplikasi. Harap diingat bahwa MBTiles akan mengambil semua fitur OSM pada area yang dipilih di Export Tool, dengan tab ‘3 Data’ yang akan otomatis berubah menjadi pilihan sumber berupa dropdown dan rentang perbesaran, tree tag standar dan pilihan YAML. Baca lebih lanjut mengenai [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) pada bagian Learn.

![export-tool-mbtiles][]


Format file tambahan terus disarankan untuk ditambahkan ke Export Tool. Jika ada format file yang Anda inginkan untuk ditambahkan ke Export Tool, silakan berikan komentar pada repositori [GitHub](https://github.com/hotosm/osm-export-tool/issues). Untuk informasi lebih detail mengenai jenis masing-masing format file, silakan kunjungi halaman ‘File Formats’ pada bagian ‘[Learn](https://export.hotosm.org/en/v3/learn)’ di situs web.



## Customise Map Features

Alat ini memungkinkan pengguna untuk mengkustomisasi data yang dipilih pada area yang telah ditentukan. Data OSM yang didefinisikan menggunakan filter tag dan seleksi key, menggunakan Tag Tree atau YAML. Tag Tree digunakan untuk contoh kasus yang umum, menampilkan sebuah set filter dan seleksi, dimana YAML memungkinkan Anda mengontrol filter dan seleksi, menggunakan filter yang mirip dengan SQL.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM adalah database global terbuka dari fitur geografis, dengan tiga tipe elemen:
Nodes/titik, yang merepresentasikan sebuah titik pada permukaan bumi
Ways/garis, yang merupakan kumpulan dari nodes/titik yang membentuk garis atau poligon (garis tertutup)
Relations/relasi, yang merupakan kumpulan nodes/titik, garis atau relasi lainnya

Setiap tipe data dapat memiliki beberapa tag (key dan value). Sebagai contoh, sebuah kantor pos mungkin termasuk tipe data garis dengan tags building=yes dan amenity=post_office. Perhatikan bagaimana tag tersebut dapat didefiniskan di Export Tool dengan menggunakan Tag Tree dan Form YAML untuk melakukan filter data OSM.

### Tag Tree
Tag Tree adalah cara termudah untuk memilih fitur yang akan diunduh, dengan mencentang jenis objeknya. Perlu diingat bahwa jika memilih satu tema jenis objek maka key=value terkait tema tersebut akan ditambahkan berikut dengan sub-tema dibawahnya. Setiap tema memiliki query berbeda untuk memfilter data, jadi sangat direkomendasikan untuk mengeksplor tiap tema dengan menyorot tema tersebut sehingga muncul kotak informasi di sebelahnya. 

![export-tool-treetag-sql][]


Misalnya, jika memilih tema 'Emergency' akan otomatis memilih sub-tema Police Station’, ‘Ambulance Station’ and ‘Fire Station’ yang berada di bawahnya, tag yang terkait tema ini emergency=yes, amenity=police and amenity=fire_station akan ditambahkan  juga ke dalam query SQL di bawah ini:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

Tema tidak selalu mencerminkan sub-tema yang ada di bawahnya, untuk mencoba dan mencakup semua tag yang berkaitan dengan tema tersebut. Tag OSM selalu berkembang dari waktu ke waktu dan kami ingin memastikan bahwa alat ini dapat beradaptasi terhadap perubahan itu. Hanya tag key=value yang paling sering digunakan yang dijadikan sebagai sub-tema dan tema yang digunakan mencoba untuk mencakup semua yang tidak digunakan begitu sering, namun masih terkait dalam tema tersebut. Jika Anda memiliki saran untuk memodifikasi tema dan tag ini, silakan berikan komentar pada [spreadsheet](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) yang digunakan untuk mengisi Tag Tree dan kami akan mencoba untuk memasukkannya di tema yang sesuai.

![export-tool-treetag-spreadsheet][]


### YAML Form
Menggunakan YAML memungkinkan Anda untuk memegang kendali penuh dalam memfilter data OSM, menggunakan sejenis filter SQL untuk tag key=value. Perlu diingat bahwa Tag Tree juga menghasilkan syntax dalam bentuk YAML, jadi tiap tema dan sub-tema yang terpilih akan otomatis diaplikasikan di kotak YAML. Ini adalah titik awal dari query yang dapat diedit lebih lanjut. 

![export-tool-treetag-yaml][]


Penggunaan YAML dipilih karena sifatnya yang sederhana dan kompatibel dengan SQL. Format pemilihan fitur YAML serupa dengan format yang digunakan banyak program seperti osm2pgsql dan imposm. YAML sensitif dengan spasi, dengan masing-masing elemen di bawah tema utama diindentasi dan diawali dengan tanda strip (-). Tanda strip ini harus diberi spasi setelahnya. Berikut ini adalah sebuah contoh dasar dari pemilihan fitur dengan 3 tema yaitu bangunan (buildings), sungai (waterways) dan rumah sakit (hospitals):

![export-tool-yaml-code1][]


YAML memiliki Themes (tema) dan dua struktur data, Mapping and Lists
Tema (Theme) pada contoh di atas adalah: bangunan (buildings)
Mapping pada contoh di atas adalah: tipe dan pilihan (type and select) 
Lists in the above example are: child elements of select and types

YAML: Tema (Themes)
Tema (Themes) adalah keys level tertinggi pada dokumen YAML, dengan karakter yang valid termasuk huruf, angka dan garis bawah (underscore). 

YAML: Jenis Geometri
The list values under the mapping types can be one or more of ‘- points’, ‘- lines’, ‘- polygons’. If the types key is omitted, all three geometry types will be included in the theme.

YAML: Column Selections
List items under the mapping select key determines the columns for each theme. The following example will populate the ‘name’ and ‘amenity’ columns with their values from OSM:

![export-tool-yaml-code2][]


YAML: Filter
Filter berada di bawah: key pada setiap tema. Mereka mendefinisikan subset dari fitur OSM mana yang termasuk pada tema itu. Contoh di bawah ini akan memfilter tema hanya pada fitur yang memiliki key natural dan memiliki value waterway:

![export-tool-yaml-code3][]


Perlu diingat bahwa penting melakukan filter, jika tidak tema akan memasukkan sema fitur OSM dari tipe geometrinya. Sebuah filter diaplikasikan menggunakan syntax mirip SQL dengan kata kunci valid IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


Preset JOSM
Versi sebelumnya Export Tool menggunakan file .XML Preset JOSM untuk menyeleksi fitur. Versi terbaru menggunakan YAML karena file ini lebih fleksibel dalam mentransformasi data OSM. Export Tool terbaru dapat membantu mengkonversi preset JOSM ke dalam YAML, dengan menekan tombol ‘Load from JOSM Preset .XML’. Perlu diingat jika presets yang dimasukkan cukup kompleks, mungkin akan dikonversikan sebagai sebuah konfigurasi YAML baru berdasarkan elemen ‘item’ pada XML.

![export-tool-load-preset][]



### Configurations

YAML dapat didefinisikan dan disimpan untuk digunakan di waktu yang lain melalui halaman ‘Configs’. Hal ini berguna untuk membuat satu konfigurasi untuk sebuah proyek, yang kemudian dapat digunakan untuk semua ekspor yang berhubungan dengan proyek itu. Berikan konfigurasi YAML tersebut sebuah ‘name’ dan ‘description’ yang akan membuatnya dapat ditemukan oleh pengguna lain. Tidak mencentang ‘Public’ akan membuat konfigurasi YAML terlihat hanya oleh pengguna tersebut. 

![export-tool-configuration-saved][]


Perlu diingat bahwa konfigurasi dapat diubah, yang sangat berguna untuk mengembangkan seleksi fitur selama proyek berlangsung. Konfigurasi YAML yang tersimpan dapat dipilih kembali melalui opsi ‘Stored Configuration’ pada tab ‘3 Data’ ketika membuat sebuah ekspor. Gunakan kotak pencarian untuk mencari konfigurasi yang berhubungan dengan proyek Anda.

![export-tool-configuration-stored][]


Untuk informasi lebih detail mengenai seleksi fitur dan YAML, silakan kunjungi halaman ‘[Learn](https://export.hotosm.org/en/v3/learn)’ pada bagian ‘Selecting Features’ dan ‘YAML Specification’. 




[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export-tool]: /images/osm-data/hot-export-tool.png
[export-tool-create]: /images/osm-data/export-tool-create.png
[export-tool-describe]: /images/osm-data/export-tool-describe.png
[export-tool-search]: /images/osm-data/export-tool-search.png
[export-tool-coordinates]: /images/osm-data/export-tool-coordinates.png
[export-tool-area-bbox]: /images/osm-data/export-tool-area-bbox.png
[export-tool-area-draw]: /images/osm-data/export-tool-area-draw.png
[export-tool-area-view]: /images/osm-data/export-tool-area-view.png
[export-tool-area-import1]: /images/osm-data/export-tool-area-import1.png
[export-tool-geojson-io]: /images/osm-data/export-tool-geojson-io.png
[export-tool-geojson-edit1]: /images/osm-data/export-tool-geojson-edit1.png
[export-tool-geojson-edit2]: /images/osm-data/export-tool-geojson-edit2.png
[export-tool-area-import2]: /images/osm-data/export-tool-area-import2.png
[export-tool-file-formats]: /images/osm-data/export-tool-file-formats.png
[export-tool-shapefile]: /images/osm-data/export-tool-shapefile.png
[export-tool-sql]: /images/osm-data/export-tool-sql.png
[export-tool-garmin]: /images/osm-data/export-tool-garmin.jpg
[export-tool-google-earth]: /images/osm-data/export-tool-google-earth.jpg
[export-tool-xml-code]: /images/osm-data/export-tool-xml-code.png
[export-tool-mapsme]: /images/osm-data/export-tool-mapsme.png
[export-tool-osmand]: /images/osm-data/export-tool-osmand.png
[export-tool-mbtiles]: /images/osm-data/export-tool-mbtiles.jpg
[export-tool-treetag-tab]: /images/osm-data/export-tool-treetag-tab.png
[export-tool-yaml-tab]: /images/osm-data/export-tool-yaml-tab.png
[export-tool-treetag-sql]: /images/osm-data/export-tool-treetag-sql.png
[export-tool-treetag-spreadsheet]: /images/osm-data/export-tool-treetag-spreadsheet.png
[export-tool-treetag-yaml]: /images/osm-data/export-tool-treetag-yaml.png
[export-tool-yaml-code1]: /images/osm-data/export-tool-yaml-code1.png
[export-tool-yaml-code2]: /images/osm-data/export-tool-yaml-code2.png
[export-tool-yaml-code3]: /images/osm-data/export-tool-yaml-code3.png
[export-tool-yaml-code4]: /images/osm-data/export-tool-yaml-code4.png
[export-tool-load-preset]: /images/osm-data/export-tool-load-preset.png
[export-tool-configuration-saved]: /images/osm-data/export-tool-configuration-saved.png
[export-tool-configuration-stored]: /images/osm-data/export-tool-configuration-stored.png




