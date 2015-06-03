---
layout: doc
title: Pengaturan PostgreSQL
permalink: /bi/osm-data/setting-up-postgresql/
lang: bi
category: osm-data
---

PostgreSQL & PostGIS
====================
Pada bab ini kita akan melihat bagaimana melakukan pengaturan PostgreSQL pada Windows
dan bagaimana membuat sebuah database dimana Anda dapat menyimpan data geografis.
Kita akan menggunakan perangkat lunak open source SIG yaitu QGIS dalam bab ini, sehingga
ini akan sangat membantu jika Anda sudah mengetahui perangkat lunak tersebut. 

Pada bab berikut ini, kita akan melihat bagaimana cara mengimport data OpenStreetMap 
ke dalam database PostgreSQL.

Menginstal PostgreSQL dan PostGIS
---------------------------------
Pada bab ini kita akan menginstal PostgreSQL dan kemudian menambahka ekstensi spasial
PostGIS. Hal ini cukup mudah dilakukan pengaturan menggunakan One-Click Installer.

*	Arahkan browser web Anda ke situs PostgreSQL dan temukan halaman download disini:

	[http://www.postgresql.org/download/](http://www.postgresql.org/download/)

![postgresql website][]

*	Dari sini Anda dapat menemukan instruksi instalasi untuk sistem operasi yang berbeda. 
	Klik pada tautan "Windows".
*	Halaman ini menjelaskan apa yang dilakukan One-Click Installer. Ini akan menginstal 
	tiga komponen yang berbeda:
	-	Server PostgreSQL: perangkat lunak database, komponen utama
	-	pgAdmin III: Antarmuka grafis untuk mengelola database Anda
	-	StackBuilder: Sebuah tool untuk menambahkan penambahan aplikasi; kita akan menggunakan
		ini untuk menambahkan ekstensi PostGIS
*	Klik pada Download.

![postgresql download][]

*	Anda akan melihat beberapa pilihan Installer yang berbeda untuk versi perangkat lunak PostgreSQL
	yang berbeda. Download versi terbaru. Pada tulisan ini menggunakan versi 9.3.1. Klik pada tombol
	Win x86-32. Ini adalah installer untuk versi 32-bit pada Windows.

![postgresql version][]

*	Setelah selesai mendownload, jalankan One-Click Installer.

![install 1][]

*	Klik "Next" untuk menavigasi melalui wizard instalasi. Pilihan standar harus cukup baik. Anda
	perlu menyediakan kata sandi untuk pengguna database pertama (pengguna adalah postgres). Pengguna
	ini memiliki hak superuser, yang berarti bahwa mereka dapat melakukan apapun sesuai dengan keinginan
	mereka, jadi jangan lupa dengan kata sandi yang Anda gunakan!

>	Anda dapat membuat banyak database sesuai dengan keinginan Anda menggunakan Postgresql. Anda 
>	mungkin ingin membuat database untuk data geografis Anda, dan memisahkan database untuk proyek
>	lain yang sedang Anda kerjakan. Dan Anda ingin orang yang berbeda memiliki jenis akses ke database
>	ini. Untuk tujuan ini, setiap database yang Anda buat menggunakan konsep **pengguna** dan **peran**.
>	Database harus selalu dimiliki oleh pengguna, dan biasanya pengguna perlu kata sandi untuk membuat
>	perubahan ke database. Pengguna tambahan dapat diberikan izin untuk mengakses database, dan 
>	mereka dapat memberikan peran tertentu. Misalnya, Anda mungkin ingin pengguna database hanya dapat 
>	membaca informasi dari database, tetapi tidak dapat mengubahnya. Atau Anda ingin pengguna dapat 
>	menambahkan data, tetapi tidak diberikan izin untuk menghapusnya. Dengan pengguna dan peran, ini
>	mungkin terjadi. Untuk sekarang kita tidak perlu khawatir terlalu banyak tentang ini, ingat bahwa
>	database Anda dimiliki oleh **pengguna**, dan untuk mengakses database Anda perlu nama pengguna dan
>	kata sandi. Pengguna pertama yang kita buat (bernama postgres) adalah **superuser**, berarti mereka
>	memiliki izin untuk melakukan segalanya dengan database tersebut.


*	Setelah Anda mengklik melalui wizard dan menerima pilihan konfigurasi standar, wizard akan menginstal
	semuanya untuk Anda. Ini mungkin membutuhkan waktu beberapa menit.
*	Ketika instalasi lengkap, wizard akan menanyakan kepada Anda jika Anda ingin menjalankan StackBuilder,
	dimana utilitas yang akan memungkinkan kita untuk menginstal PostGIS. Pastikan kotak tercentang
	sebelum Anda mengklik "Finish".

![install 2][]

*	Sekarang kita telah sukses menginstal PostgreSQL dan kita perlu menambahkan ekstensi PostGIS. 
	Ketika wizard StackBuilder terbuka, pilih instalasi PostgreSQL Anda dari menu daftar pilihan dan 
	klik Next. Ini akan terlihat seperti ini: 
	
![install 3][]

*	Buka tab "Spatial Extensions" dan centang kotak di sebelah PostGIS. Versi saat ini merupakan versi 
	terbaru PostGIS yaitu 2.1.

![install 4][]

*	Klik Next untuk mendownload ekstensi dan menginstalnya. Apabila diminta, klik "I Agree" untuk
	menerima syarat dan ketentuan.
*	Installer PostGIS akan menanyakan beberapa pertanyaan, tetapi umumnya pilihan standar cukup baik.
	Anda dapat memberitahunya untuk membuat database pertama secara otomatis, namun selanjutnya kita akan 
	mempelajari bagaimana melakukan itu sendiri.
*	Untuk memulai instalasi PostGIS Anda perlu menyediakan kata sandi postgres yang Anda buat ketika
	menginstal PostgreSQL.

![install 5][]

*	Jika Anda ditanya untuk mendaftar variabel lingkungan GDAL_DATA, klik "Yes".

![install 6][]

*	Setelah instalasi selesai, klik "Close" dan kemudian "Finish".

Membuat Database
-----------------
Sekarang kita sudah menginstal semua perangkat lunak yang dibutuhkan, ketika kita akan membuat sebuah 
database. Kita akan menggunakan pgAdmin III, yang merupakan klien database grafis berguna untuk
mengquery dan memodifikasi database.

![pgadmin3][]

*	PgAdmin III adalah klien resmi untuk PostgreSQL dan Anda menggunakan bahasa SQL untuk memanipulasi
	data tabel Anda. Ini juga memungkinkan untuk membuat dan memanipulasi database dari command-line,
	tetapi untuk saat ini, pgAdmin III merupakan cara yang mudah untuk memulainya.
*	Buka pgAdmin III. Ini seharusnya terdapat di Menu Start dibawah All Programs -> PostgreSQL 9.3 > pgAdmin III.

![pgadmin3 start][]

*	Pada panel di kiri bawah Servers, klik kanan pada tulisan PostgreSQL dan klik "Connect".

![postgresql connect][]

*	Masukan kata sandi pengguna postgres yang dibuat ketika Anda menginstal perangkat lunak. Perhatikan
	bahwa nama pengguna dan kata sandi yang diperlukan sehingga Anda dapat membuat dan mengakses databse. 
	
![enter password][]

*	Klik kanan pada Databases dan pilih New Database...

![new database][]

*	Anda harus memasukkan beberapa informasi untuk membuat database baru: nama dan pemilik. Pada tab
	Properties, berikan nama untuk database baru. Seperti contoh ini, kita memberikan nama databasenya
	adalah gisdb. Kita juga harus memberi database kita seorang pemilik. Setelah kita hanya memiliki
	satu pengguna saat ini, mari beri database postgres kita  seorang pemilik. (Catatan: Untuk alasan 
	keamanan biasanya ini adalah ide yang baik untuk membuat pengguna tanpa meminta izin ke superuser, 
	tetapi untuk saat ini tidak perlu khawatir mengenai hal ini.)

![new database form][]

<!--
-	Under the Definition tab, keep the defaults, but next to Template select template_postgis.  This
	will create our database with the proper spatial columns.
-->

*	Klik OK untuk membuat database. Anda saat ini akan melihat database Anda terdaftar di bawah 
	"Databases".
*	Kita perlu menjalankan perintah sekarang untuk mengaktifkan database dengan ekstensi PostGIS. 
	Klik pada tombol SQL di atas PgAdmin III.

![sql button][]

*	Pada jendela query, ketikan:

	CREATE EXTENSION postgis;

*	Kemudian klik tombol "Execute query".

![postgis command][]

Memuat Data Contoh (pilihan)
----------------------------
Jika sejauh ini Anda sudah merasa nyaman dan akrab dengan QGIS, ikuti bersama sesi ini 
mengenai bagaimana kita memuat sebuah data ke dalam database baru kita. Untuk melakukan
ini, kita akan menggunakan sebuah utilitas yang mengkonversi shapefile dan memuat mereka
ke dalam database.

*	Pastikan bahwa database baru Anda terpilih pada panel di sebelah kiri dan pergilah ke
	**Plugins -> PostGIS Shapefile and DBF loader 2.1**.

![shapefile loader][]

*	Klik "Add File" dan cari sebuah shapefile di dalam sistem file Anda.
*	Jika Anda tidak memiliki shapefile, Anda dapat mendownload contohnya [disini](/files/buildings_sample.zip).
*	Setelah Anda memiliki file tersebut, klik "Import". Jika semuanya berjalan lancar, output 
	akan membaca “Shapefile import completed.”

![add shapefile][]

*	Sekarang mari kita masukkan data dari database kita ke dalam aplikasi QGIS. Jika Anda tidak
	memiliki QGIS Anda dapat mendownloadnya di [situs QGIS](http://www.qgis.org/en/site/forusers/download.html).
*	Buka QGIS dan klik pada tombol “Add PostGIS Layers”.

![qgis add postgis button][]

*	Di bawah "Connections di bagian atas, klik "New".
*	Berikan koneksi baru sebuah nama. Di bawah database ketikan **gisdb** (atau nama apa pun untuk 
	database Anda). Masukkan nama pengguna postgres dan kata sandi Anda di bawah.
	
![connection settings][]

*	Klik OK untuk menyimpan pengaturan koneksi. Kemudian klik "Connect" untuk menghubungkan ke 
	server PostgreSQL Anda. Anda mungkin harus memasukkan nama pengguna Anda dan kata sandi lagi.
*	Jika semuanya sukses, Anda akan melihat layer shapefile (atau beberapa layer dengan jenis
	fitur yang berbeda) yang Anda masukkan di dalam database yang ada disini. Pilih layer dan klik
	"Add" untuk menambahkannya ke peta Anda. 

![your data layer][]

*	Ketika Anda akan menambahkan layer, Anda perlu memilih sistem koordinat untuk menampilkan data
	tersebut. Anda kemungkinan besar akan memilih WGS 84, yang merupakan sistem koordinat yang 
	digunakan OpenStreetMap.
*	Catatan bahwa layer memiliki kesamaan jika Anda memuat shapefile secara langsung ke dalam
	QGIS. Perbedaannya hanya jika Anda mengedit layer, perubahan akan disimpan di database Anda.
	
Ringkasan
---------
Sekarang Anda teah melihat bagaimana melakukan pengaturan PostgreSQL dan PostGIS, serta bagaimana
membuat database baru, Anda siap untuk mencoba utilitas yang memungkinkan kita mengimport data
OSM ke dalam database. Kita akan melihat ini pada [bab selanjutnya](/bi/osm-data/osm2pgsql).


[postgresql website]: /images/en/osm-data/setting-up-postgresql/postgresql-website.png
[postgresql download]: /images/en/osm-data/setting-up-postgresql/postgresql-download.png
[postgresql version]: /images/en/osm-data/setting-up-postgresql/postgresql-version.png
[install 1]: /images/en/osm-data/setting-up-postgresql/postgresql-install-1.png
[install 2]: /images/en/osm-data/setting-up-postgresql/postgresql-install-2.png
[install 3]: /images/en/osm-data/setting-up-postgresql/postgresql-install-3.png
[install 4]: /images/en/osm-data/setting-up-postgresql/postgresql-install-4.png
[install 5]: /images/en/osm-data/setting-up-postgresql/postgresql-install-5.png
[install 6]: /images/en/osm-data/setting-up-postgresql/postgresql-install-6.png
[pgadmin3]: /images/en/osm-data/setting-up-postgresql/pgadmin3.png
[pgadmin3 start]: /images/en/osm-data/setting-up-postgresql/pgadmin3-start.png
[postgresql connect]: /images/en/osm-data/setting-up-postgresql/postgresql-connect.png
[enter password]: /images/en/osm-data/setting-up-postgresql/enter-password.png
[new database]: /images/en/osm-data/setting-up-postgresql/new-database.png
[new database form]: /images/en/osm-data/setting-up-postgresql/new-database-form.png
[sql button]: /images/en/osm-data/setting-up-postgresql/sql-button.png
[postgis command]: /images/en/osm-data/setting-up-postgresql/postgis-command.png
[shapefile loader]: /images/en/osm-data/setting-up-postgresql/shapefile-loader.png
[add shapefile]: /images/en/osm-data/setting-up-postgresql/add-shapefile.png
[qgis add postgis button]: /images/en/osm-data/setting-up-postgresql/add-postgis-button.png
[connection settings]: /images/en/osm-data/setting-up-postgresql/connection-settings.png
[your data layer]: /images/en/osm-data/setting-up-postgresql/your-data-layer.png








