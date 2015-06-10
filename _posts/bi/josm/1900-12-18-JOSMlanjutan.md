---
layout: doc
title: Proses Mengedit dengan JOSM
permalink: /bi/josm/more-about-josm/
lang: bi
category: josm
---

Proses Mengedit dengan JOSM
===========================
Pada sesi sebelumnya Anda telah menginstal JOSM dan memulai menggambar 
titik, garis, dan poligon pertama Anda. Anda telah menambahkan preset ke 
objek tersebut, ini untuk melampirkan informasi mengenai objek tersebut. 
Pada akhirnya, Anda dapat menggambar peta Anda sendiri di JOSM.

Ini merupakan praktek yang baik, dan sekarang kita siap untuk mengedit
OpenStreetMap.

Pada sesi ini kita akan melihat lebih dekat pada antarmuka JOSM, dan lihat
bagaimana kita dapat menggunakannya untuk mengedit peta di dalam OpenStreetMap.

Tahapan Mengedit
----------------

Mengedit OpenStreetMap dengan JOSM mirip dengan mengedit dengan iD editor kita
lihat sebelumnya. Namun karena JOSM adalah aplikasi desktop, pekerjaan ini
sedikit berbeda. Proses mengedit dan menambahkan ke OpenStreetMap dengan JOSM
yang tahapannya sebagai berikut:

1. **Download** data peta yang langsung dari OSM
2. **Edit** ini menggunakan citra satelit, GPS, Field Papers, dan panduan
3. **Save** perubahan ke OpenStreetMap

Mendownload Data OSM
--------------------

Langkap pertama mengedit adalah mendownload data untuk area yang akan kita 
tambahkan. Perhatikan bahwa Anda perlu melakukan ini setiap waktu sesuai
dengan keinginan Anda untuk melakukan perubahan pada peta, karena peta ini
sering kali diperbarui oleh pengguna lain.

*	Klik pada "File" di pojok kanan atas JOSM dan klik "Download from OSM".
	Ini akan membuka jendela download. Anda dapat mengakses jendela ini lebih 
	mudah dengan mengklik pada tombol download, seperti ini:
	
	![JOSM Download Button][]

*	Ketika jendela download terbuka, Anda akan melihat peta dengan kotak berwarna
	merah muda yang tergambar di dalamnya. Jika Anda tidak melihat peta, klik pada 
	tab "Slippy map".
	
	![JOSM Download Dialog][]
	
*	Kotak berwarna merah muda merupakan area peta yang akan kita download 
	untuk mengedit. Gunakanlah mouse Anda untuk menggeser dan menggeser dan
	memperbesar ke area yang Anda ketahui dengan baik, seperti tempat tinggal
	Anda atau lingkungan sekitarnya. Kontrol sama dengan jendela peta JOSM.
	Tombol kanan mouse berguna untuk menggeser peta, dan roda gulir Anda
	berguna untuk memperbesar dan memperkecil peta.

>	Biasanya jika Anda bekerja menggunakan komputer notebook akan lebih sulit
>	untuk menggulir peta. Bekerja di JOSM lebih mudah apabila Anda menggunakan mouse,
> 	tetapi sekarang notebook lebih modern memungkinkan Anda untuk menggulir peta
>	menggunakan touchpad.

*	Gambarlah kotak disekitar area yang Anda ingin download. Untuk menggambar kotak 
	baru, klik pada peta, tahan tombol kiri mouse ke bawah, dan geser mouse Anda
	untuk membuat sebuah kotak. Lepaskan tombol mouse untuk mengakhiri menggambar
	kotak.
*	Apabila kotak yang Anda buat sudah benar dengan ukuran dan lokasi kotak, klik
	"Download" di bagian bawah jendela. JOSM akan mendapatkan data untuk area ini
	dari OpenStreetMap dan membukanya di jendela peta Anda untuk mengedit.

### Menambahkan Citra Satelit
Jika Anda telah ikuti bersama ketika kita telah menambahkan titik pertama kita dengan 
iD editor, Anda ingat bahwa di bawah data peta terdapat citra satelit yang dapat
membantu kita untuk mengidentifikasi objek di permukaan. Citra satelit ini berasal 
dari Microsoft Bing, yang dengan murah hati menyediakan citra satelit ini untuk para 
pengguna OpenStreetMap sebagai referensi sementara dalam berkontribusi untuk pemetaan.

*	Untuk menambahkan citra satelit Bing di JOSM, klik "Imagery" di bagian menu atas JOSM
	dan pilihlah "Bing Sat".

>	Jika pada menu Imagery Anda tidak muncul Bing Sat, Anda perlu mengaktivasinya
>	di dalam pengaturan JOSM. Pergilah ke Edit -> Preferences dan klik pada ikon "WMS TMS".
>	Anda perlu mengklik pada panah bawah untuk menemukannya.
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
>	Klik pada "Bing Sat". Kemudian klik "Activate".

### Mengenal JOSM lebih jauh
Kita telah mendownload data OpenStreetMap dan menambahkan citra satelit Bing, 
mari kita lihat antarmuka JOSM.

![JOSM layout][]

Jendela utama yang sudah Anda kenal - ini adalah jendela peta, dan dimana sebagian besar 
kegiatan berlangsung. Disini Anda akan melihat, mengedit, dan menambahkan ke data 
OpenStreetMap.

Pada bagian kanan pada jendela peta adalah serangkaian panel, masing-masing memiliki 
fungsi tersendiri. Biasanya ketika Anda pertama kali menginstal JOSM beberapa panel
yang akan ditampilkan dengan pengaturan standar, seperti Layers, Properties, dan
Selection. Ketika Anda memilih sebuah titik, garis, atau poligon di dalam jendela peta,
ini akan ditampilkan pada panel Selection. Informasi mengenai objek yang akan ditampilkan
pada panel Properties, dan nama pengguna dari pembuat objek yang akan ditampilkan di
panel Authors.

Panel ini dapat dibuka atau ditutup dengan mengklik berbagai tombol pada sisi kiri bawah
JOSM. Di atas tombol-tombol ini pada kanan atas adalah alat untuk mengubah apa yang Anda
dapat lakukan dengan mouse Anda. Anda sudah akrab dengan beberapa dari mereka, Select
tool dan Draw tool. Di bawah mereka adalah alat-alat yang membuatnya lebih mudah untuk
memperbesar, menghapus sebuah objek, menggambar sebuah poligon, atau membuat sebuah 
garis yang sejajar dengan garis lainnya. 

Edit 
----

Jadi kita telah melengkapi satu langkah proses mengedit - Mendownload. Kita telah 
mempersiapkan JOSM dengan citra satelit sebagai referensinya. Langkah selanjutnya adalah 
mengedit peta dan menambahkan objek baru. 

Tergantung pada area yang Anda pilih untuk mendownload, mungkin terdapat banyak atau sangat
sedikit data peta yang ada. Tetapi perhatikan bahwa itu adalah jenis data yang sama 
yang kita lihat sebelumnya - titik, garis, dan poligon yang mewakili lokasi kehidupan nyata.

*	Menggunakan cara teknis yang Anda telah pelajari untuk menambah titik ke peta 
	wilayah yang Anda ketahui. Jika Anda melihat suatu kesalahan, cobalah untuk
	memperbaikinya.
*	Anda tidak perlu terburu-buru pada saat mempelajarinya. Jika Anda tidak yakin
	mengenai sesuatu yang lebih baik untuk meninggalkannya seperti ini.
*	Jika Anda ingin memindahkan sebuah titik, garis, atau poligon, menggunakan 
	**select tool**. Klik pada sebuah objek dan menggesernya ke tempat yang seharusnya.
	Hal ini dapat digunakan untuk memperbaiki lokasi objek yang telah dimasukkan ke 
	tempat yang salah.

	![JOSM select tool][]
	
*	Gunakan **draw tool** untuk menggambar titik, garis, dan poligon baru.
	Deskripsikan objek tersebut dengan memilihnya dari menu Presets, karena Anda
	telah melakukannya di bab sebelumnya.
	
>	Jangan mengedit peta di luar area yang telah Anda download. Anda dapat 
>	melihat area persegi yang telah Anda download dengan memiliki latar belakang
>	yang gelap, sementara area Anda yang belum terdownload memiliki garis diagonal.
>	![JOSM area downloaded][]

Menyimpan Perubahan
-------------------
Langkah ketiga dan terakhir untuk menyelesaikan hasil editan kita adalah untuk
mengupload perubahan yang telah kita buat di database OpenStreetMap. Untuk menyimpan
perubahan, kita harus terkoneksi dengan internet.

*	Klik "File" di menu atas, dan kemudian klik "Upload Data". Hal ini akan 
	membuka jendela upload. Anda dapat mengakses jendela ini secara lebih sederhana
	dengan mengklik pada tombol upload, seperti di bawah ini:
	
	![JOSM Upload Button][]
	
*	Jendela yang muncul menunjukan daftar objek yang Anda telah tambahkan dan objek 
	yang Anda modifikasi atau menghapusnya. Pada kotak di bagian bawah Anda diminta 
	untuk memberikan komentar mengenai perubahan yang telah Anda buat. Ketik di sini
	mengenai deskripsi hasil editan Anda. 
	
	![JOSM Upload Dialog][]
	
*	Klik "Upload Changes"
*	Jika ini adalah penyimpanan perubahan pertama Anda ke OpenStreetMap, Anda akan
	diminta memasukan nama pengguna dan kata sandi Anda.
*	Masukan nama pengguna dan kata sandi Anda di dalam jendela yang muncul. Jika 
	Anda mencentang kotak di jendela ini, nama pengguna dan kata sandi Anda akan
	disimpan dan Anda tidak perlu untk memasukan mereka lagi nantinya. Klik
	"Authenticate".
	
	![JOSM Authenticate][]
	
*	Anda perlu menunggu beberapa detik untuk menlihat perubahan Anda yang 
	telah diupload, dan selesai! Anda telah mengedit peta di dalam
	OpenStreetMap.
	
>	Ketika Anda mengedit, pastikan untuk mengupload perubahan Anda sebelum Anda
>	menutup JOSM. Bahkan jika Anda telah mengedit lebih banyak, mengupload 
>	perubahan Anda, kemudian ulangi langkah ini apabila Anda memiliki waktu untuk 
>	mengedit. Jika Anda tidak ingin kehilangan pekerjaan Anda!

Melihat Perubahan Anda Di Peta
------------------------------
*	Buka browser internet Anda dan pergilah ke [http://openstreetmap.org/](http://openstreetmap.org/)
*	Pindahkan peta ke area yang Anda telah edit.
*	Anda seharusnya dapat melihat perubahan Anda yang akan muncul di peta! Jika
	tidak, coba menekan CTRL+R untuk merefresh halaman situs. Biasanya peta tidak
	memperbarui dengan sempurna dan perlu dimuat ulang.
*	Bagaimana jika Anda tidak melihat perubahan Anda? Jangan khawatir - mungkin diperlukan
	beberapa menit untuk perubahan yang akan ditampilkan pada peta. Kemudian,
	periksa penambahan Anda di JOSM untuk memastikan bahwa yang Anda tambahkan benar.
	Aturan umum yang baik adalah jika titik Anda memiliki ikon di JOSM, kemudian 
	hal ini seharusnya terlihat di peta utama pada situs OpenStreetMap.
	
Ringkasan
---------
Sekarang Anda telah melihat bagaimana cara menambahkan informasi ke OpenStreetMap.
Mengedit sangat bagus, tetapi hal ini tidak hanya aspek dalam pembuatan peta.
Tentu Anda juga perlu mempelajari bagaimana pergi keluar melakukan survey lapang
dan mengumpulkan informasi mengenai lokasi. 

Pada bab selanjutnya kita akan mempelajari mengenai dua metode - GPS dan Field Papers,
yang akan digunakan untuk mengumpulkan data geografi. Informasi dari keduanya dapat
diimport ke dalam JOSM, dan digunakan untuk mengedit peta. 


[JOSM Download Button]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image00_download-button.png
[JOSM Download Dialog]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image01_download-dialog.png
[JOSM Preferences up down]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image02_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image03_preferences-wms-tms.png
[JOSM layout]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image04_layout.png
[JOSM select tool]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image05_select-tool.png
[JOSM area downloaded]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image06_area-downloaded.png
[JOSM Upload Button]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image07_upload-button.png
[JOSM Upload Dialog]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image08_upload-dialog.png
[JOSM Authenticate]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image09_authenticate.png
