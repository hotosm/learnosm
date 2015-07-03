---
layout: doc
title: Plugin JOSM
permalink: /bi/josm/josm-plugins/
lang: bi
category: josm
---

Plugin JOSM 
============

Ketika Anda menjadi lebih handal dalam teknik mengedit Anda, Anda mungkin 
ingin menggunakan fitur JOSM tambahan untuk meningkatkan keterampilan 
pemetaan Anda. JOSM memungkinkan Anda untuk menginstal berbagai plugin, 
kemudian menambahan fungsi ekstra ke perangkat lunak.

Jika Anda bekerja melalui Panduan Tingkat Dasar di learnOSM, Anda telah
menginstal plugin Field Papers.

Pada sesi ini kita akan melihat bagaimana cara menginstal plugin, dan beberapa
plugin yang sangat berguna yang sudah tersedia.


Menginstal Plugin
-------------------
*	Setiap kali Anda ingin menginstal sebuah plugin baru, pergilah ke Edit --\> Preferences
	dan klik pada tab "Plugins".

![Plug][]

*	Jika Anda tidak melihat daftar plugin yang tersedia, klik "Download List".
*	Untuk menginstal sebuah plugin Anda harus mencentang kotak di sebelahnya dan
	klik OK di bagian bawah.
*	Terakhir, Anda harus me-restart JOSM Anda setelah Anda menginstal plugin baru.

Beberapa plugin yang sering kita gunakan adalah:

1.	**buildings_tools:** Jika Anda menggambar banyak bangunan, ini akan membuat proses menggambar
	lebih cepat dan mudah.

2.	**DirectUpload:** Jika Anda mengumpulkan banyak trek GPS dan Anda ingin menyimpannya di 
	database OSM, plugin ini akan mempermudah Anda.
	
3.	**editgpx:**
	Jika Anda ingin mengupload trek GPS dari perangkat Garmin, Anda mungkin perlu menggunakan
	plugin ini. OSM tidak akan menerima trek GPS yang telah disimpan pada kartu memori eksternal 
	di Garmin, tetapi plugin ini dapat memperbaiki file sehingga mereka dapat diupload.
	
4.	**fieldpapers:**
	Plugin ini memuat Field Papers yang telah discan di dalam JOSM.
	
5.	**imagery_offset_db:**
	Plugin ini bekerja sama dengan pembuat peta yang menemukan citra satelit Bing yang tidak
	sejajar. Masalah ini dibahas lenih detail dalam bab selanjutnya.
	
6.	**mirrored_download:**
	Dengan plugin ini Anda dapat mendownload data OSM dengan area yang lebih luas untuk 
	mengedit.

7.	**print:**
	Menambahkan fungsi Print, jika Anda ingin mencetak sebuah area dengan cepat, yang
	tidak perlu terlihat sangat baik.
	
8.	**utilsplugin2:**
	Menambahkan banyak tool tambahan dan menu pada JOSM untuk pengguna tingkat lanjut. Ini
	akan dibahas lebih rinci pada [bab selanjutnya](/bi/editing/josm-more-tools)



<!-- The remainder of this section needs to be edited, and/or moved to other sections,
    commenting it out for now


- [Mirrored Download]({{site.baseurl}}/en/beginner/josm-plugins/#mirrored-download) (allows you to download more OSM data)
- [Direct Upload]({{site.baseurl}}/en/beginner/josm-plugins/#direct-upload) (allow you to upload GPS tracks)
- [Editgpx]({{site.baseurl}}/en/beginner/josm-plugins/#edit-gpx) (allows you to edit GPX files)
- [Print]({{site.baseurl}}/en/beginner/josm-plugins/#print)

Kami juga merekomendasikan kepada Anda untuk mendownload plug-in ini, akan dibahas
dalam bab lainnya:

- FieldPapers
- Buildings\_tool
- Utilsplugin2

![Restart JOSM][]

Coba klik “Restart JOSM” dan melihat perangkat lunak memuat ulang sendiri.

Mirrored Download
-----------------

![Mirrored Download][]

__Mirrored Download__ akan mendownload data OSM untuk menegedit lebih cepat.
Bukannya mendapatkan data dari server OSM pusat, ini memungkinkan kita 
mendapatkannya dari “mirror,” ini merupakan replika yang tepat dari data 
tetapi di lokasi yang lebih cepat untuk mengaksesnya.

Setelah plugin terinstal (dan Anda telah merestart JOSM), Anda akan melihat
entri baru yang lain pada Menu File, “Download from OSM mirror...”

![Download from OSM Mirror][]

Mendownload data adalah proses yang sama seperti dipelajari sebelumnya, 
tetapi ini jauh lebih cepat!

Direct Upload
-------------

![Direct Upload][]

__DirectUpload__ mengupload trek GPX secara langsung ke OSM melalui JOSM
(informasi lebih lanjut tersedia di **Lampiran**). Setelah plug-in terinstal
(dan Anda telah merestart JOSM), Anda akan melihat item baru “Upload traces”
di bawah menu “Tools”.

![Upload Traces Item][]

Ketika Anda klik pada tombol “Upload Traces”, jendela ini akan muncul:

![Upload Traces Window][]

Masukkan kata kunci (terpisah oleh koma tanpa spasi) yang berhubungan
dengan trek GPS di kotak "Tags (dipisahkan koma). Sebagai contoh, 
"Country,region,city,neighborhood,road name". Selanjutnya, memberikan
deskripsi dari tag Anda. Daftar pilihan akan memungkinkan Anda menggunakan
kembali tag awal dan deskripsi. Terakhir, memilih jenis tampilan yang ingin
Anda miliki. Terdapat empat tingkatan dari pribadi untuk diidentifikasi 
(semua dijelakan di bawah pada [Lampiran]{{site.baseurl}}/learnosm/en/).

Klik pada Upload Trace, jika Anda tidak terhubung ke akun OSM Anda, Anda
harus melakukannya sekarang.

Setelah berhasil upload, area teks akan menampilkan status "OK" dan 
tombol “Upload Trace” tidak akan diklik. Informasi lebih lanjut mengenai
plug-in ini dan GPS upload tersedia di [Lampiran]({{site.baseurl}}/learnosm/en/).

Edit gpx
--------

![Edit Gpx][]

**EditGpx** memungkinkan Anda untuk mempersiapkan rekaman trek GPX 
sebelum mengupload mereka ke OSM. Sering kali trek memiliki bagian-bagian
yang Anda ingin hapus. Oleh karena itu, plug-in ini menghapus titik-titik
trek dengan cara cepat dan membuat namanya untuk jejak waktu trek.

Setelah plug-in terinstal (dan Anda telah merestart JOSM), Anda akan
melihat tool baru ini di tool bar pada bagian kiri.


![Edit Gpx Tool Icon][]

1.	Buka file GPX di JOSM!

	![Open GPX File][]

2.	Tekan tombol baru di menu bar sebelah kiri

	![Edit Gpx Tool Icon][]

	dan data GPX akan diimport ke layer baru EditGpx. Setiap node 
	pada trek akan disorot berwarna kuning.

	![GPX Nodes All][]

3.	Sekarang tandai titik (dengan mengklik) atau area (dengan menggambar 
	persegi panjang pada batas mereka) yang ingin Anda hapus. Highlight
	kuning akan hilang.

	![GPX Nodes Selected][]

4.	Klik kanan pada nama layer dan pilih \<\<Convert to GPX layer\>\> pada menu
	\<\<Context\>\> 

5.	Sekarang Anda dapat menyimpan layer GPX normal sebagai file atau
	mengupload data ke OSM (misalnya dengan menggunakan plugin
	[DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)).

Print
-----

![Print Plugin][]

Jika Anda ingin cara mudah dan cepat untuk mencetak peta ketika Anda
mengedit di JOSM, instal __print plugin__. Meskipun Anda tidak dapat
melakukan apapun dengan cetakan Anda, ini adalah cara yang bagus untuk 
mencetak dengan cepat dan mudah. Setelah plugin terinstal, item baru akan
tersedia di menu File bernama “Print...”

![Print Menu Item][]

Mengklik ini akan membuka Print Dialog, yang terlihat seperti ini:

![Print Dialog][]

Disini Anda dapat mengubah pengaturan printer Anda. Jika Anda tidak melihat
apapun di halaman, centang kotak di samping “Map Preview” pada bagian kanan.
Perbesar atau perkecil peta dengan mengubah angka di kotak “Scale”. Meningkatkan
resolusi dengan mengubah angka di samping “ppi”. Ketika Abda telah selesai
mengedit pengaturan, klik “Print.”

Ringkasan
----------

Ini adalah beberapa plugin yang tersedia dan bermanfaat untuk JOSM. Jangan
ragu untuk melanjutkan eksplorasi plugin yang lain. Seperti yang Anda lihat,
menu Preferences memiliki deskripsi singkat dari setiap plugin, dan Anda dapat
membuaka halaman situs dengan informasi yang lebih dengan mengklik pada link
“More info...” 

![More Info Link][]

Good luck!

Lampiran
---------

Rincian DirectUpload
--------------------

![Direct Upload Plugin][]

Menambah trek dan waypoint GPS Anda ke Server OSM berguna untuk banyak
alasan. 
__(Jika Anda tidak ingin titik GPX Anda terlihat oleh siapa pun, Anda tidak
harus membaca sesi ini. Anda dapat menampilkan file GPX Anda dari JOSM, dan 
menyimpan mereka secara lokal)._
Pertama-tama, trek GPS adalah cara yang paling bermanfaat dalam mengumpulkan
dan georeferensi objek di OSM.
(Lihat [Bab 6.5: Pertimbangan Citra Aerial](https://docs.google.com/a/engelsted.co/document/d/1rdwKkNXLnioyogJFxxspDIha0GI97xbOFxDfeL_ZNPs/edit))
unit GPS memiliki akurasi yang lebih besar dari citra satelit dan ini merupakan
tool yang berguna untuk memeriksa citra offset. Menggunakan banyak trek GPS
(semakin besar jumlah trek maka semakin besar kemampuan untuk menentukan 
akurasi geolocation) memungkinkan Anda menentukan apakah latar belakang
citra dapat sejajar.

Mengupload trek ke server memungkinkan berbagi informasi yang lebih besar.
Ini memungkinkan orang-orang yang tidak memiliki akses ke field, hanya
karena mereka tidak tinggal di area itu atau mereka tidak memiliki akses 
ke perangkat GPS, membantu dengan mendijitasi. Ada dua cara mengupload:
1) Plugin JOSM atau 2) situs OSM utama.

> Catatan: Waypoint GPS tidak dapat mengupload ke database OSM secara langsung.
> Bagaimana pun, mereka dapat dikonversi ke trek dan kemudian diupload sementara,
> contohnya, mereka dapat ditampilkan sebagai latar belakang objek di Potlatch.

Setelah Anda membuka file GPX Anda di JOSM dan klik ke "Tools" dan klik "Upload traces".
Jelaskan file GPX, tuliskan beberapa tag, dan visibilitas. Untuk visibilitas, Anda
dapat memilih apakah pribadi, dilacak, publik atau diidentifikasi.

1.  **Diidentifikasi**: Trek Anda akan ditampilkan untuk umum di trek GPS Anda
	dan di daftar trek GPS umum. Pengguna lain dapat mendownload trek mentah
	dan menghubungkannya dengan nama pengguna Anda. Jejak waktu dari titik
	trek juga akan tersedia melalui API GPS umum.

2.  **Publik**: Trek Anda akan ditampilkan ke publik di trek GPS Anda
	dan di daftar trek GPS umum. Pengguna lain tetap dapat mendownload trek mentah
	dari daftar trek umum dan setiap jejak waktu terkandung di dalamnya.
	Namun, data ditampilkan di API tidak bereferensi halaman trek Anda, 
	tidak pula jejak waktu yang tersedia, meskipun titik secara kronis 
	memerintahkan.

3.  **Trackable**: Trek **tidak** akan muncul di setiap daftar umum, tetapi
	titik trek akan tetap tersedia melalui API GPS publik **dengan jejak waktu**.
	Pengguna lain akan dapat mendownload titik trek tetapi ini tidak akan
	dihubungkan dengan Anda.

4.  **Pribadi**: Trek **tidak** akan muncul di setiap daftar umum. Titik trek akan
	tersedia di timeline melalui API GPS publik **tanpa jejak waktu**.
	
	![DirectUpload Traces Options][]

Mengupload Trek GPS Online
---------------------------

1.	Pergilah ke [http://www.openstreetmap.org/](http://www.openstreetmap.org/) dan log in.

2.	Pilih "GPS Traces" ditemukan pada banner sebelah kiri.

	![Left Banner][]

3.	Pilih [upload a trace](http://www.openstreetmap.org/trace/create).
	Disini, Anda juga dapat **melihat trek Anda** untuk meninjau trek GPS sebelumnya.

4.	Carilah file Anda di "Choose File". Label dalam kotak Deskripsi, memberikan
	beberapa Tag, dan pilih jenis Visibilitas yang akan digunakan. Jika Anda
	memiliki banyak file .gpx Anda dapat kompres mereka ke dalam arsip zip dan 
	uploadlah. Ini akan dianggap sebagai satu file gpx besar dan hanya satu
	entri pada daftar trek yang akan dibuat.

	![Online Upload Traces Options][]

5.	Klik *Upload*.

File akan diupload ke server OSM, dimana hal ini akan digabung dengan antrian file-file
yang menunggu untuk dimasukkan ke dalam database.


[Plug Icon]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image00_plug-icon.png
[Restart JOSM]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image01_restart-josm.png
[Mirrored Download]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image02_mirrored_download.png
[Download from OSM Mirror]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image03_download-from-osm-mirror.png
[Direct Upload]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image04_direct-upload.png
[Upload Traces Item]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image05_upload-traces-item.png
[Upload Traces Window]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image06_upload-traces-window.png
[Edit Gpx]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image07_edit-gpx.png
[Edit Gpx Tool Icon]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image08_edit-gpx-tool-icon.png 
[Open GPX File]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image09_open-gpx-file.png
[GPX Nodes All]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image10_gpx-nodes-all.png
[GPX Nodes Selected]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image11_gpx-nodes-selected.png
[Print Plugin]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image12_print-plugin.png
[Print Menu Item]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image13_print-menu.png
[Print Dialog]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image14_print-dialog.png
[More Info Link]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image15_more-info-link.png
[Direct Upload Plugin]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image16_direct-upload-plugin.png
[DirectUpload Traces Options]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image17_directupload-traces.png
[Left Banner]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image18_left-banner.png
[Online Upload Traces Options]: /images/en/editing/josm-plugins/en_beg_04_josm-plugins_image19_online-upload-traces.png

-->


[Plug]: /images/en/editing/josm-plugins/plugins-tab.png

