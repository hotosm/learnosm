---
layout: doc
title: Menggunakan GitHub
permalink: /bi/map-design/github/
lang: bu
category: map-design
---

<!--
this chapter is a draft because it's not a priority
-->

Menggunakan Github
==================

GitHub adalah sebuah situs untuk menyimpan dan berkolaborasi dalam proyek,
berdasarkan pada suatu program yang bernama Git. Sederhananya, itu adalah
tempat dimana Anda dapat mendapatkan file proyek yang orang lain telah
buat, dan tempat dimana Anda dapat mengupload proyek dari Anda sendiri
bagi orang lain untuk digunakan. Anda juga dapat kembali ke versi proyek
sebelumnya serta membukanya bagi pengguna lain untuk berkolaborasi. 
Ada banyak yang dapat dilakukan dengan GitHub, tetapi hanya mengetahui
dasar-dasar yang akan membawa kita lebih jauh.

GitHub dan Repositori
----------------------

1.	Navigasikan browser web Anda untuk [http://www.github.com](http://www.github.com)
	dan Anda akan melihat halaman depan GitHub, repositori online utama
	untuk menyimpan proyek git. Perhatikan perbedaan antara github dan git.
	Git adalah sistem kontrol yang dapat membuat beberapa folder pada
	repositori komputer Anda, dan hal ini dapat melacak setiap perubahan
	yang Anda buat dari waktu ke waktu ke repositori. GitHub adalah layanan
	online yang memungkinkan pengguna untuk berbagi repositori git dan
	berkolaborasi dengan yang lain secara mudah. Jika ini tidak masuk akal
	sekarang, jangan khawatir. Hal utama yang harus diingat bahwa GitHub 
	memungkinkan penguna untuk menyimpan repositori, dimana dapat berisi
	banyak file dan folder di dalamnya.
	

2.	Kunjungi [https://github.com/hotosm](https://github.com/hotosm) untuk
	melihat semua repositori dari Humanitarian OpenStreetMap Team. Anda
	akan melihat pada bagian kiri jumlah total repositori (18 dari tulisan ini)
	dan jumlah anggota yang berpartisipasi dalam kelompok tersebut. Pada
	bagian utama halaman adalah daftar dari repositori dan deskripsi. Anda
	dapat mengklik salah satu dari mereka untuk melihat file yang mereka
	isi.

Repositori adalah setara dengan folder proyek. Ketika Anda melihat 
repositori di dalam github, Anda melihat halaman yang paling baru
dari file di proyek itu.

Repositori dapat berupa publik atau pribadi. Hanya pengguna dengan 
akun berbayar yang diizinkan membuat repositori pribadi. Kita hanya
akan mengakses repo publik saja - semua dalam semangat open-source!

Ketika repositori publik, Anda dapat mendownload file dengan mudah 
dan menggunakannya sendiri. Jika Anda memiliki izin, Anda juga dapat
mengedit fie dan menyimpan perubahan kembali di GitHub.

![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image06.png)

Mendapatkan Repositori GitHub
-----------------------------

HOT menyimpan banyak file proyek di GitHub, sehingga akan berguna
bagi Anda memahami bagaimana Anda dapat mengakses file-file ini
untuk penggunaan personal Anda.

1.	Carilah repositori bernama tilemill-projects-windows. Repositori
	ini menyimpan beberapa proyek TileMill yang sebelumnya telah di
	desain untuk bekerja di Windows. Salah satu proyek menggunakan
	database PostGIS sebagai sumber data, dan proyek lain menggunakan
	SQLite. Jika Anda tidak dapat menemukan proyek, Anda dapat
	menemukannya di
   [https://github.com/hotosm/tilemill-projects-windows](https://github.com/hotosm/tilemill-projects-windows).
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image08.png)

2.	Perhatikan bahwa Anda dapat memeriksa folder dan file tersebut
	di dalam repositori ini dengan mengkliknya. Hal ini dapat memberikan
	Anda ide dari isi proyek tersebut. Sebagian besar proyek juga akan
	memiliki sebuah file bernama README.md. Ini adalah file teks berisi
	informai mengenai repositori, dan petunjuk setup. File ini akan
	dimunculkan dibawah file pada GitHub, sehingga Anda dapat membacanya
	dengan mudah. Masukkan direktori osm-sqlite dan arahkan ke bawah
	untuk melihat file README, yang berisi petunjuk bagaimana menggunakan
	repo ini.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image11.png)

3.	Untuk mendownload semua file proyek cukuplah mudah! Dengan mengklik
	pada tombol "ZIP" di bagian atas halaman repositori, dan semua 
	file proyek akan didownload ke komputer Anda sebagai file zip.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image13.png)
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image02.png)

Jika Anda hanya ingin mengakses file proyek melalui GitHub, ini semua
yang perlu Anda ketahui! Namun, jika Anda menyukai belajar lebih lanjut
mengenai Git dan GitHub, termasuk bagaimana membuat akun Anda sendiri
dan repositori, membaca untuk informasi lebih lanjut.

Apa itu git?
-------------

Git dan GitHub bukan hal yang sama. GitHub sekarang kita lihat dalam
tindakan. Ini adalah sebuah situs yang menjadi host repositori dan 
membuat mudah orang-orang dalam berbagi file proyek. Hal ini didasarkan
pada Git, yang merupakan program komputer kecil yang mengizinkan pengguna
menyimpan versi teks yang berbeda atau kode sepanjang proyek.

Mari kita luangkan waktu untuk memahami bagaimana git bekerja, karena
ini awalnya menjadi konsep yang berbeda untuk dipahami. Seperti yang
telah disebutkan, git mengingat riwayat revisi file. Tetapi bukannya
menyimpan sebuah file setiap kali berubah, git menyimpan file, dan
kemudian setiap waktu Anda menyimpan versi baru, ini menyimpan semua 
perubahan ke file tersebut. Hal ini membuat penyimpanan jauh lebih
efisien, dan Anda dapat dengan mudah menyimpan seluruh riwayat 
kelompok dari file tanpa menggunakan banyak ruang disk.

Git juga sangat bermanfaat karena Anda dapat menjaga file Anda dengan
aman yang disimpan dalam GitHub, namun bekerja pada salinan file-file
secara offline pada komputer Anda. Kemudian, ketika Anda ingin melakukan
perubahan Anda, Anda dapat melakukannya juga dan mensinkronkan perubahan
dengan github. Juga ketika Anda menyimpan proyek Anda pada github, beberapa
orang dapat mengcopy dan mengedit file dalam waktu sama, dan karena proyek
dihost secara online, sulit untuk menurunkan atau sengaja menghapus semua
file Anda.

Alur kerja untuk mengedit repositori git adalah sebagai berikut:

1.	Clone repositori dari GitHub ke dalam komputer Anda
2.	Modifikasi file di direktori lokal
3.	Tahapan file, menunjukkan file-file yang perubahan yang ingin
	Anda simpan
4.	Melakukan perubahan ke repositori lokal Anda, secara efektif
	menyimpan semua perubahan Anda
5.	Sinkronisasi repositori dengan proyek utama di github

Ini adalah proses dasar untuk bekerja dengan proyek git. Git jauh lebih
kompleks, mengizinkan pengguna untuk melakukan apa saja dalam hal penggabungan
dan membandingkan editan, dan membuat cabang repositori. Kita tidak akan
membuang terlalu banyak konsep baru pada Anda sekaligus, jadi selanjutnya,
mari lihat bagaimana kita dapat mengclone repositori yang ada ke mesin
lokal Anda.

Instalasi GitHub (git)
-----------------------

1.	Anda dapat dengan mudah menginstal versi GUI dari git dengan pergi
	ke alamat ini dan mendownload installer. Terdapat installer untuk
	berbagai macam sistem operasi.
   [https://help.github.com/articles/set-up-git#platform-windows](https://help.github.com/articles/set-up-git#platform-windows)
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image00.png)

2.	Klik “Download GitHub for Windows” untuk mendownload installer.

3.	Ikuti petunjuk untuk menginstal.

Mendaftar GitHub
------------------

1.	Untuk mendaftar akaun GitHub pergilah ke [https://github.com/plans](https://github.com/plans).
	Untuk membuat repositori Anda sendiri Anda perlu sebuah akun. Jika
	Anda hanya berencana membuat repositori publik, Anda dapat memiliki
	akun gratis.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image05.png)

2.	Klik “Create a free account” dan ikuti petunjuk membuat akun Anda.

Membuat Repositori Baru
------------------------

1.	Sekarang mari membuat repositori yang kita dapat berbagi dengan yang
	lain. Sign in ke GitHub dan klik “Create a New Repo” di pojok kanan
	atas.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image07.png)

2.	Berikan proyek baru sebuah nama dan deskripsi. Secara standar, proyek 
	akan dipublikasi. Proyek akan kosong setelah dibuat, namun kita dapat
	menginisialisasi dengan file README dengan memeriksa kotak.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image12.png)

3.	Sekarang repositori telah dibuat, Anda dapat mengclone ke komputer 
	Anda. Buka aplikasi GitHub. Anda perlu menambah informasi login Anda
	ke aplikasi sehingga repositori dapat diakses oleh akun Anda secara
	online. Anda dapat mengubah informasi ini dengan pergi ke menu
	Preferences.

4.	Carilah repositori GitHub Anda dengan mengklik pada nama pengguna Anda.
	Setelah Anda menemukan proyek baru, klik “Clone to Computer.”
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image04.png)

5.	Ini akan membuka sebuah dialog dimana Anda dapat memilih lokasi yang
	ingin Anda clone di repositori Anda.
	
	Setelah repositori diclone, Anda dapat memperlakukan folder baru 
	di komputer Anda seperti yang lain. Faktanya ini adalah tidak berbeda,
	kecuali hal tersebut memiliki beberapa file khusus di dalamnya yang
	melacak perubahan yang Anda buat dari waktu ke waktu.
	
	Pada contoh ini kita telah mengcopy direktori geography-class bahwa kita
	mengedit di TileMill pada bab sebelumnya. Direktori ini harus dilokasikan
	di My Documents -> MapBox -> project.
	
6.	Pergilah kembali ke program GitHub dan klik tanda panah di sebelah kanan
	nama proyek Anda.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image03.png)

7.	Disini Anda akan melihat daftar semua file yang telah ditambahkan atau
	diubah di repositori. Dalam kasus ini kita menambahkan semua file dalam
	folder geography-class. Untuk menyimpan perubahan kita, kita harus 
	mengetikkan dalam ringkasan perubahan dan kemudian commit mereka.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image09.png)

8.	Klik “Commit” untuk meng-commit perubahan secara lokal.

9.	Terakhir, kita perlu mensingkronisasi perubahan kita dengan GitHub.
	Untuk melakukan ini, klik “Sync.”=
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image10.png)

10.	Pergilah kembali ke browser situs Anda dan melihat kembali pada
	repositori Anda di github. Anda akan melihat bahwa semua file 
	telah disimpan dengan sukses ke repositori secara online.
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image01.png)

Ringkasan
----------

Dalam bab ini kita telah menawarkan pengenalan singkat untuk Git dan GitHub,
sehingga Anda dapat memulai mempertahankan proyek Anda secara online dan
mengakses proyek yang lain. Untuk informasi lebih lanjut kami sarankan 
memeriksa halaman bantuan GitHub di 

[https://help.github.com/](https://help.github.com/).

<!--
^[[c]](#cmnt3)^

[[a]](#cmnt_ref1)MrPatrickOswald:

tergantung pada GUI yang Anda gunakan, jendela mungkin terlihat sedikit
berbeda dari screen shot di bawah. Namun fungsionalitas harus sama.

[[b]](#cmnt_ref2)MrPatrickOswald:

Ini akan menyenangkan untuk memiliki sedikit penjelasan apa yang terjadi
jika beberapa orang mengedit repositori pada waktu yang sama dan secara
individu commit perubahan mereka... bagaimana github memperlakukan 
konflik-konflik yang memiliki 2 versi yang berbeda kemudian... atau 
apa yang harus dipertimbangkan ketika bekerja sama pada salah satu proyek
menggunakan github...

[[c]](#cmnt_ref3)Katrina Engelsted:
Sumber: http://nathanj.github.com/gitguide/tour.html
--> 