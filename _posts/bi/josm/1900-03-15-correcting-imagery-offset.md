---
layout: doc
title: Pergeseran Citra Satelit 
permalink: /bi/josm/correcting-imagery-offset/
lang: bi
category: josm
---

Pergeseran Citra Satelit
========================
Penyedia citra satelit tidak dapat memeriksa akurasi dari setiap foto, 
sehingga koordinat dapat bergeser dari posisi yang sebenarnya. Hal ini berlaku
terutama pada daerah perbukitan atau pegunungan, dimana ini
akan sulit untuk diregangkan menjadi gambar datar di permukaan Bumi dengan
banyak kontur. Ketika Anda memasukkan citra satelit di JOSM, ini biasanya 
dapat mencapai sepuluh meter atau lebih dari posisi sebenarnya. Ini yang
dinamakan **pergeseran citra satelit**.

Perhatikan pada gambar berikut bahwa dua foto udara yang terpisah telah
digeoreferensi dan digabungkan bersama. Karena georeferensi tidak sempurna
prosesnya, gambar tidak bertampalan dengan sempurna satu sama lain. Oleh
karena itu salah satu atau keduanya harus akurat.

![misaligned images][]

Kita telah mempelajari mengenai dua cara utama dalam pembuatan peta - pertama 
yaitu memanfaatkan citra udara untuk mengidentifikasi objek-objek pada permukaan,
dan kedua adalah menggunakan GPS untuk merekam trek dan waypoint kemudian menambahkan
mereka ke OpenStreetMap. Keuntungan melalui citra yaitu lebih jelas. Hal ini memungkinkan
Anda, pembuat peta, melihat keseluruhan gambar, untuk mengamati berbagai detail dari
gambar, mendapatkan pengetahuan mengenai daerah tersebut, dan dengan mudah 
menggambar jalan, bangunan, dan daerah. Salah satu keuntungan dari GPS adalah 
tidak mengalami pergeseran seperti citra satelit. Sebuah GPS akan selalu memberikan 
posisi lintang dan bujur yang tepat. Salah satu kerugiannya adalah sinyal satelit 
tersebut dapat diganggu oleh bangunan tinggi dan pegunungan, tetapi dalam kasus ini
sangatlah mudah untuk mengetahui kesalahan. Tampilkan trek GPS pada gambar citra 
satelit ini dan bandingkan dengan citra Bing dibawahnya:

![aerial vs gps][]

Dengan begitu kita akan tahu bahwa trek GPS akurat dan citra satelit dibawahnya 
mengalami pergeseran.

Sekarang kita pasti akan bertanya, “jika citra satelit mengalami pergeseran, 
bagaimana kita dapat menggunakan dan membuat peta yang akurat?”

Memperbaiki Pergeseran Citra Satelit
-------------------------------------
Jawaban untuk pertanyaan sebelumnya adalah kita dapat menggeser citra satelit agar sesuai 
dengan posisi yang kita ketahui adalah posisi yang tepat, seperti trek GPS. Hal ini sangat
mudah untuk memperbaiki pergeseran citra satelit di JOSM.

Salah satu referensi terbaik untuk mengatur citra satelit adalah menggunakan trek GPS yang 
mengikuti jalan. Semakin banyak trek GPS yang Anda miliki, semakin akurat Anda untuk memperbaiki
pergeseran citra satelit. Saat ini pengguna OpenStreetMap seringkali mengupload trek GPS
mereka kedalam database OSM, kita dapat mengunduhnya dan menggunakannya untuk memperbaiki 
posisi citra satelit kita.

*	Klik pada tombol download.

![josm download button][]

*	Centang kotak di samping tulisan "Raw GPS Data" di bagian atas jendela Download.
	Pilih area Anda dan klik "Download".
	
![raw gps data][]

*	Ini akan mendownload layer tambahan pada JOSM yang berisi trek GPS. Tergantung
	pada berapa banyak trek yang telah diupload oleh pengguna OSM, Anda mungkin
	melihat beberapa trek (atau bahkan tidak ada trek sama sekali):

![osm gps tracks few][]

*	Atau, Anda mungkin melihat banyak trek:

![osm gps tracks many][]

*	Untuk mengatur layer citra satelit, klik pada tombol “Adjust imagery offset” 
	di bagian atas JOSM.

![adjust imagery offset button][]

*	Abaikan kotak yang muncul, gunakan mouse Anda untuk menggeser citra satelit
	sehingga posisi sejajar dengan trek GPS. Trek GPS seharusnya terposisikan
	sama dengan jalan pada citra satelit sedekat mungkin. Anda akan melihat angka
	pergeseran akan berubah di dalam kotak tersebut.
	
![adjust imagery offset][]

*	Jika Anda suka, Anda dapat menyimpan pengaturan pergeseran dengan memasukkan 
	nama penanda dan klik OK. Kemudian Anda dapat secara otomatis mengaplikasikan
	pengaturan yang sama dengan menuju Imagery ‣ Imagery offset dan klik pada 
	penanda yang Anda simpan.
*	Jika Anda tidak ingin menyimpan pergeseran, klik OK tanpa memasukkan nama penanda.

Bagaimana jika tidak ada trek GPS di OpenStreetMap, dan Anda tidak mempunyai GPS? 
Tanpa trek GPS, akan sulit sekali mengatur citra. Jika itu merupakan area yang 
relatif kosong (tidak banyak yang dipetakan), Anda mungkin bisa memetakan terlebih
dahulu dan memperbaiki belakangan. Akan lebih baik untuk memetakan sebuah area dengan
pergeseran 20 atau 30 meter daripada tidak memetakan sama sekali.

Jika Anda dapat mengidentifikasi garis lintang dan bujur pada sebuah objek di atas
permukaan tanah, Anda dapat memastikan citra satelit ditempatkan pada posisi yang benar
dengan mengikuti langkah-langkah berikut ini:

*	Pertama, identifikasi posisi objek yang Anda ketahui pada citra satelit.
*	Klik pada garis lintang dan bujur pada tombol pojok kiri bawah JOSM.

![josm lat lon][]

*	Akan muncul dalog, masukan lintang dan bujur tempat yang Anda tahu, dan masukkan
	angka perbesaran, sekitar lima atau sepuluh.

![josm lat lon dialogue][]

*	Ini akan memperbesar dan menuju pusat peta sesuai dengan lintang dan bujur yang 
	Anda masukkan. Sekarag Anda dapat memindahkan citra satelit seperti yang Anda 
	lakukan sebelumnya sehingga fitur yang Anda ketahui terpusat diposisi yang tepat.

Jika, pada salah satu kasus, area yang sudah dipetakan secara ekstensif, kemudian
pembuat peta telah menggambarkan objek pada lokasi mereka yang benar. Pada kasus ini,
Anda dapat mengatur citra satelit sesuai dengan peta OSM, tetapi ingatlah! Pengguna OSM 
lain mungkin tidak menyadari pergeseran citra satelit dan mereka mungkin telah membuat
kesalahan ketika mereka memetakannya

Database Pergeseran Citra Satelit
---------------------------------
Sekarang Anda mengetahui bagaimana cara untuk melihat dan memperbaiki citra satelit,
tetapi disini ada sedikit masalah dengan pendekatan yang telah kita tahu sampai saat ini. 
Jika setiap pengguna OSM mengatur citra satelit berbeda, setiap orang akan memetakan dengan 
latar belakang yang berbeda.

Bayangkan jika Anda memetakan kota kecil dan Anda menyadari bahwa terjadi pergeseran 
satelit 15 meter ke Utara. Anda tentunya akan memperbaiki dan memetakan kota tersebut 
dengan akurat. Tetapi ketika seseorang ingin memetakan sesuatu dan mereka mendownload
data OSM dan memunculkan citra satelit Bing, dan mereka tidak mengetahui pergeseran citra 
satelit yang Anda ketahui! Mereka akan mengira bahwa terjadi hal yang aneh dan semua objek
bergeser 15 meter ke utara dan akhirnya mereka akan memulai memindahkan kembali, dimana 
yang hal demikian itu adalah salah! Ini akan merusak semua data yang ada.

Untuk masalah ini, sangat penting agar semua pengguna sadar akan pergeseran citra satelit 
dan selalu mengecek terkait hal itu sebelum memetakan area. Untuk membantu mengatasi masalah
ini, beberapa orang telah membuat plugin yang membantu pengguna untuk menyimpan informasi 
pergeseran satelit di database dan menyimpannya dengan yang lain. Mari lihat bagaimana kerjanya: 

*	Buka menu Preferences di JOSM, dan klik pada tab Plugin.

![josm plugins tab][]

*	Cari plugin bernama “imagery_offset_db” dan centang kotak disamping plugin tersebut.

![imagery_offset_db plugin][]

*	Klik OK.  Anda harus merestart JOSM agar bisa menggunakan plugin ini.

Sama seperti Anda menyimpan bookmark pergeseran citra satelit ini, plugin ini
mengizinkan Anda untuk menyimpan pergeseran citra satelit di database pusat, dan
untuk nilai mengakses pergeseran citra satelit yang dibuat pengguna lain. Jadi, 
jika terdapat pengguna yang membuat pergeseran citra satelit di suatu area, 
pengguna lain juga dapat menggunakan pergeseran tersebut.

Ketika Anda menggunakan citra satelit, Anda HARUS SELALU mengecek pergeseran yang ada,
dan ketika anda sudah membuat nilai pergeseran citra satelit, Anda HARUS SELALU 
menyimpannya di database ini. 

Memasukkan Nilai Pergeseran Citra Satelit dari Database
-------------------------------------------------------
*	Ketika Anda memasukkan layer citra satelit, plugin baru akan memberi tahu Anda 
	bahwa Anda harus mengecek database untuk melihat pergeseran citra satelit yang ada.
	Anda akan melihat ikon dengan tanda seru merah pada bagian atas JOSM seperti ini:

![offset exclamation][]

*	Klik pada tombol tersebut dan plugin akan berkomunikasi dengan database untuk melihat 
	apakah ada yang menyimpan nilai pergeseran citra satelit pada area tersebut.
*	Disini kita sudah mendownload data OSM dan trek GPS di Kuta, Bali, Indonesia. 
	Pada kasus ini kita menemukan salah satu nilai pergeseran citra satelit. Klik pada
	nilai tersebut untuk memakainya.

![offset kuta bali][]

*	Ini akan membuat citra bergeser. Akan tetapi, ketika kita menambahkan nilai pergeseran
	dari pengguna lain, kita harus mengecek melalui trek GPS.

![compare gps][]

*	Kita bisa melihat bahwa citra satelit masih belum bergeser dengan benar. Kita tidak
	menginginkan untuk menggunakan data ini, sehingga kita harus menandai sebagai salah 
	di database. Klik tombol "Offset" sekali lagi (sekarang tidak ada tanda seru di tombolnya)

![offsets button][]

*	Kali ini ketika muncul jendela dialog, klik kanan dan klik “Deprecate Offset”

![deprecate offset][]

*	Klik “Yes” untuk konfirmasi.
*	Anda akan membutuhkan alasan untuk menandakan bahwa nilai pergeseran ini sudah tidak bisa digunakan lagi.

![deprecate reason][]

Menambahkan Data Pergeseran Citra Satelit ke Database
-----------------------------------------------------
Sekarang Anda sudah memberi tanda data pergeseran citra satelit pengguna lain 
sebagai "data yang lama", kita harus menambahkan data offset ke dalam database.

*	Klik pada tombol “Adjust imagery offset”.

![adjust imagery offset button][]

*	Atur citra satelit agar sesuai dengan trek GPS. Klik OK di kotak.
*	Pergi ke Citra Satelit ‣ Menyimpan Pergeseran Citra Satelit...

![store imagery offset][]

*	Beri deskripsi dari data pergeseran citra satelit yang akan Anda masukkan.

![offset description][]

*	Klik OK. Data pergeseran citra satelit Anda akan tersimpan di database.
*	Sekarang hilangkan layer GPS dan lihat data OSM yang posisinya menjadi tepat dengan citra satelit.

![correctly placed][]

Tidak! Seseorang telah memetakan area ini dengan data yang salah. Ini akan membutuhkan waktu untuk memperbaikinya.

Situs Database Pergeseran Citra Satelit
----------------------------------------
Terakhir, untuk informasi di database pergeseran satelit, Anda bisa pergi ke situs[http://offsets.textual.ru/](http://offsets.textual.ru/). 
Ini akan menunjukkan daftar pergeseran satelit yang telah diunduh oleh pengguna dan juga tampilan yang bagus yang 
menunjukkan dimana pergeseran satelit ada, seperti yang Anda lihat disini:

![offset website][]

Satu hal yang perlu diingat adalah jarak pergeseran satelit tidak sama dengan daerah lain! Hal ini terutama di daerah 
yang memiliki banyak gunung dan bukit. Jadi, jika citra satelit bergeser berbeda di area yang lain, Anda harus menggesernya kembali.

>	Satu hal yang perlu diingat adalah jarak pergeseran satelit tidak sama dengan daerah lain!
>	Hal ini terutama di daerah yang memiliki banyak gunung dan bukit.
>	Jadi, jika citra satelit bergeser berbeda di area yang lain, Anda harus menggesernya kembali.

Ringkasan
----------
Apabila Anda baru memulai OpenStreetMap, Anda tidak perlu khawatir mengenai pergeseran citra satelit ini.
Tetapi jika Anda melihat editan pembuat peta yang lain yang tampak sejajar dengan citra satelit, Anda
harus selalu mempertimbangkan bahwa mungkin terdapat pergeseran sebelum Anda memulai melakukan perubahan
pada objek mereka. Dan jika Anda belum siap untuk berurusan dengan pergeseran citra satelit lagi, ingat
bahwa lebih baik memetakan pergeseran area 20 atau 30 meter dibandingkan tidak memetakan sama sekali.
Apabila mungkin terjadi, ingat bahwa pergeseran citra satelit mungkin terjadi, dan gunakan langkah-langkah
pada bab ini untuk memperbaikinya.



[misaligned images]: /images/en/editing/correcting-imagery-offset/misaligned-images.png
[aerial vs gps]: /images/en/editing/correcting-imagery-offset/aerial-vs-gps.png
[josm download button]: /images/en/editing/correcting-imagery-offset/josm-download-button.png
[raw gps data]: /images/en/editing/correcting-imagery-offset/raw-gps-data.png
[osm gps tracks few]: /images/en/editing/correcting-imagery-offset/osm-gps-tracks-few.jpg
[osm gps tracks many]: /images/en/editing/correcting-imagery-offset/osm-gps-tracks-many.jpg
[adjust imagery offset button]: /images/en/editing/correcting-imagery-offset/adjust-imagery-offset-button.png
[adjust imagery offset]: /images/en/editing/correcting-imagery-offset/adjust-imagery-offset.png
[josm lat lon]: /images/en/editing/correcting-imagery-offset/josm-lat-lon.png
[josm lat lon dialogue]: /images/en/editing/correcting-imagery-offset/josm-lat-lon-dialogue.png
[josm plugins tab]: /images/en/editing/correcting-imagery-offset/josm-plugins-tab.png
[imagery_offset_db plugin]: /images/en/editing/correcting-imagery-offset/imagery-offset-db-plugin.png
[offset exclamation]: /images/en/editing/correcting-imagery-offset/offset-exclamation.png
[offset kuta bali]: /images/en/editing/correcting-imagery-offset/offset-kuta-bali.png
[compare gps]: /images/en/editing/correcting-imagery-offset/offset-compare-gps.png
[offsets button]: /images/en/editing/correcting-imagery-offset/offsets-button.png
[deprecate offset]: /images/en/editing/correcting-imagery-offset/deprecate-offset.png
[deprecate reason]: /images/en/editing/correcting-imagery-offset/deprecate-reason.png
[store imagery offset]: /images/en/editing/correcting-imagery-offset/store-imagery-offset.png
[offset description]: /images/en/editing/correcting-imagery-offset/offset-description.png
[correctly placed]: /images/en/editing/correcting-imagery-offset/correctly-placed.png
[offset website]: /images/en/editing/correcting-imagery-offset/offset-website.png










