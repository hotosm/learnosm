---
layout: doc
title: Plugin JOSM dan Preference
permalink: /bi/beginner/josm-plugins/
lang: bi
category: beginner
---

Plugin JOSM dan Preference
==========================

Seiring Anda telah semakin mahir dalam melakukan berbagai teknik
editing, Anda tentu ingin tahu bagaimana Anda bisa mendapatkan
 fitur-fitur tambahan JOSM untuk meningkatkan kemampuan pemetaan Anda.
 JOSM memungkinkan Anda untuk menginstal begitu banyak plugin, yang mana
merupakan tool/alat tambahan yang memungkinkan Anda untuk menyelesaikan
tugas-tugas spesifik dalam  software tersebut. Jika Anda mengikuti
tutorial ini, sebenarnya Anda telah menginstal beberapa plugin.  Pada
chapter sebelumnya, Anda menginstal sebuah  plugin yang memungkinkan
bagi Anda untuk menggunakan SDS (Separate Data Store).  Sebelumnya ,
Anda juga menginstal sebuah plugin yang memungkinakn Anda untuk
menggunakan Walking Papers.  Ada banyak plugin yang bisa Anda peroleh
pada JOSM dan pada chapter ini kita akan mempelajari beberapa plugin
yang sangat berguna dan sering digunakan.

![plugin][]

Kapanpun Anda ingin menginstal sebuah plugin baru, klik menu “Edit”
 “Preferences” dan klik pada tab “Plugins”.  Begitu Anda mengklik tab
“Plugin”, Anda seharusnya melihat daftar plugin JOSM. Jika Anda tidak
melihat daftar plugin tersebut, klik tombol “Download List.”  Anda dapat
menginstal plugin cukup dengan member tanda check (centang) pada kotak
di dekat nama plugin, kemudian   klik “OK” pada bagian bawah.  Ketika
Anda menginstal sebuah plugin baru, Anda harus me-restart JOSM.
 Sekarang juga Anda harus me-restart JOSM setiap kali Anda melakukan
perubahan pada setting-an JOSM. Untungnya, plugin yang pertama kita
aktifkan ini dibuat untuk me-restart JOSM, yaitu plugin “restart” !

Restart
-------

![restart][]

Plugin “Restart” berguna untuk me-restart JOSM.  Dengan mengaktifkan
plugin ini, sebuah submenu akan tertambahkan dibawah menu “File” yang
menginstruksikan pada JOSM untuk melakukan restart.  Hal ini dapat
menghemat waktu Anda saat Anda melakukan perubahan setting-an pada JOSM
dan mengharuskan Anda untuk sering  melakukan restart JOSM. Namun harap
diperhatikan ! Plugin ini tidak akan aktif hingga Anda me-restart JOSM.
Jadi, saat pertama kali Anda mengaktifkan plugin ini (plugin “Restart”)
Anda harus melakukan restart JOSM secara manual. Setelah melakukan
restart JOSM, selanjutnya Anda akan melihat submenu baru (yaitu submenu
“Restart JOSM”) dibawah menu “File”. Anda cukup melakukan hal ini
(me-restart JOSM secara manual untuk mengaktifkan plugin “restart”) satu
kali saja.

![restart2][]

Cobalah klik submenu “Restart JOSM” dan lihat apa yang dilakukannya,
yaitu JOSM akan tertutup dan kemudian terbuka kembali secara otomatis.

Mirrored Download
-----------------

![mirrored][]

Plugin “mirrored download” berguna untuk mempercepat proses download
data  OSM.  Sebagai ganti mendapatkan data dari server OSM, plugin ini
memungkinkan Anda untuk mendapatkan data OSM dari sebuah “mirror,” yang
mana merupakan replica/tiruan yang sama persis dari data OSM namun pada
lokasi yang lebih cepat diakses.

Sekali plugin ini diinstal (dan Anda telah me-restart JOSM), Anda akan
melihat submenu tambahan dibawah menu “File”, yaitu submenu “Download
from OSM mirror...”

![download mirror][]

Proses download data sama persis dengan proses download data yang telah
Anda pelajari sebelumnya, tapi kini proses download nya lebih cepat!

DirectUpload
------------

Menambahkan track GPS dan waypoint ke server OSM Server sangatberguna
untuk banyak alasan/tujuan.  (Jika Anda tidak ingin data GPX Anda
 terlihat oleh orang lain, Anda tidak perlu membaca bagian ini.  Anda
cukup menampilkan data GPX  Anda pada JOSM secara lokal pada komputer
Anda).   Pertama-tama, perlu dipahami bahwa track GPS merupakan cara
yang paling bermanfaat untuk pengumpulan dan georeference (memberikan
referensi geografis/spasial) objek pada OSM. (Lihat Chapter 6.5: Aerial
Imagery Considerations)  GPS memiliki akurasi yang lebih tinggi
dibandingkan citra satelit dan karenanya pula GPS merupakan alat yang
sangat berguna untuk  melakukan koreksi geometris citra.  

Meng-upload track GPX ke server memungkinkan Anda  untuk  lebih banyak
berbagi informasi. Orang lain yang tidak memiliki akses, tidak dapat
menjangkau lokasi, ataupun karena keterbatasan GPS; tetap data
memperoleh informasi tanpa perlu tinggal/menetap pada lokasi tersebut,
serta tidak perlu menyewa “GPS“.

Ada dua cara untuk mengupload DATA GPX yaitu:  1) Dengan menggunkan
Plugin JOSM atau 2) melalui situs utama website OSM.

Perhatian: Waypoints GPS tidak dapat terupload secara langusng- otomatis
pada database OSM.  Namun   data GPX tersebut dapat dikonversi menjadi
tracks dan kemudian di-upload secara berkala, sehigga peta GPS tersebut
dapat berfungsi menjadi latar belakang pada Potlatch.

1. Cara termudah untuk melakukan hal ini adalah dengan men-download
plugin “DirectUpload”

![directupload][]

2. Restart JOSM.

3.Buka file GPX Anda pada JOSM.

4. Klik menu “Tools” kemudian klik submenu “Upload traces”

    ![uploadtraces][]

5. Deskripsikan file GPX Anda, tulis beberapa tag, dan visibility.
Visibility dapat Anda isi dengan “private”, “trackable”, “public”, atau
“identifiable”.  

1.  Identifiable:   trace Anda akan terlihat untuk publik (umum) pada
    trace  GPS Anda dan pada daftar trace GPS publik.  Pengguna lain
    dapat men-download trace Anda dan menghubungkannya dengan  username
    Anda.  Waktu pengambilan titik-titik pada track juga dapat diakses
    melalui public GPS API.  
2.  Public:    trace Anda akan terlihat untuk publik (umum) pada trace
    GPS Anda dan pada daftar trace GPS publik.  Pengguna lain masih
    dapat men-download trace Anda dari daftar trace publik beserta waktu
    pengambilan titik yang termuat di dalamnya.  Namun, data yang tampil
    pada API tidak mereferensikan pada halaman trace Anda.
3.  Trackable:  trace tidak akan terlihat pada daftar trace publik,
    namun trackpoints akan tetap dapat diakses melalui public GPS
    API beserta waktu pengambilan titiknya. Pengguna yang lain tetap
    dapat men-download trackpoints tapi tidak akan
    direferensi/dikaitkankan dengan Anda.  
4.  Private: trace tidak akan terlihat pada daftar trace publik.
    Trackpoints dapat diakses pada timeline order through the public GPS
    API without timestamps.

![private trace][]

6. Klik \<\<Upload Trace\>\>.

7. Lihat lebih jauh pada bab III.  Upload.

Tambahan.  Jika “DirectUpload” tidak berhasil, Anda dapat meng-upload
track Anda secara online

Anda juga dapat menambahkan file GPX Anda secara online. Berikut
langkah-langkahnya :

1. Buka alamat situs
berikut[ ](http://www.openstreetmap.org/)[http://www.openstreetmap.org/](http://www.openstreetmap.org/) dan
log in.  

2. Pilih  menu \<\<GPS Traces\>\> yang ada di deretan menu sebelah
kiri, bagian bawah. 
    ![osm site][]
3. Pilih "upload a trace".  Di sini, Anda juga dapat memilih "See just
your traces" untuk melihat track GPS sebelumnya.
    ![upload a trace][]
4. Cari file Anda, dengan mengklik \<\<Choose File\>\>.  Berilah
keterangan pada kotak deskripsi, berkan beberapa tag, dan pilih tipe
“Visibility” nya.  Jika Anda mempunyai banyak file .gpx Anda dapat
meng-compress file-file tersebut menjadi sebuah file zip dan meng-upload
nya.  File tersebut akan diperlakukan sebagai satu file GPX berukuran
besar dan hanya akan terbentuk satu daftar pada daftar trace GPX
    ![upload a trace2][]
5. Klik Upload.

File Anda akan diupload ke server OSM, dimana file tersebut akan
bergabung dengan antrian file-file lain yang menunggu untuk dimasukkan
ke dalam database.

Print
-----

![print plugin][]

Jika Anda ingin mencetak peta secara cepat selama Anda melakukan editing
di JOSM,  install plugin “Print”.  Walaupun Anda tidak akan dapat
melakukan pengaturan-pengaturan untuk mempercantik printout Anda,
penggunaan plugin “Print” ini merupakan cara yang cepat dan mudah untuk
mencetak peta Anda.  Sekali plugin ini Anda instal, sebuah submenu baru
akan tertambahkan dibawah submenu “File”, yaitu submenu “Print...”

![menu print][]

Dengan meng-klik submenu tersebut, akan terbuka kotak dialog “Print the
Map”, seperti berikut:

![print dialog][]

Di sini, Anda juga dapat mengganti setting printer Anda. Jika ANda tidak
melihat apapun pada halaman yang ada, berilah tanda centang pada
box/kotak di dekat “Map Preview” di sebelah kanan.  Perbesar (Zoom in)
atau perkecil (Zoom out) peta dengan mengubah angka pada kotak “Scale”
box.  Anda juga dapat mngubah resolusi gambar/output yang akan
dihasilkan dengan mengubah angka di dekat “ppi”.  Begitu Anda selesai
mengubah setting nya, klik “Print.”

Ringkasan

Kita telah mempelajari beberapa plugin yang sangat berguna pada JOSM.
 Silakan mencoba berbagai plugin yang lain.  Sebagaimana telah Anda
lihat, menu “Preferences” mempunyai deskripsi singkat untuk setiap
plugin, dan Anda dapat membuka sebuah halaman situs dengan informasi
yang lebih banyak dengan cara meng-klik pada link “More info...” pada
setiap plugin.

Selamat mencoba!

[plugin]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image13.png
[restart]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image12.png
[restart2]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image04.png
[mirrored]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image06.png
[download mirror]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image14.png
[directupload]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image03.png
[uploadtraces]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image00.png
[private trace]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image11.png
[osm site]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image05.png
[upload a trace]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image09.png
[upload a trace2]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image10.png
[print plugin]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image07.png
[menu print]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image08.png
[print dialog]: /images/bi/beginner/03.5_josm-plugins/bi_beg_ch3.1_image02.png


