---
layout: doc
title: OSMTracker
permalink: /id/mobile-mapping/osmtracker/
lang: id
category: mobile-mapping
---

OSMTracker
==============

> Direview 2016-02-08
  
**Artikel ini berhubungan dengan OSMTracker untuk Android - ada aplikasi yang serupa untuk windows mobile.**  
OSMTracker memungkinkan Anda merekam trek gpx perjalanan Anda, dengan kumpulan 'waypoints' yang dapat ditambahkan ketika merekam perjalanan. Perekaman suara, pengambilan foto atau catatan dapat juga ditambahkan ketika merekam perjalanan dan semua akan tergeolokasi.

Mulai Cepat
-----------

![OSMTracker_1][]  

1.  Klik pada tanda tambah untuk membuat trek baru.  
2.  Layar akan berubah menjadi tombol-tombol - tunggu sampai warnanya tidak lagi abu-abu, yang mengindikasikan bahwa sinyal GPS sudah ditangkap oleh perangkat.  
3.  Mulai lakukan perjalanan, ketika menemui objek yang akan dipetakan, tandai dengan menekan tombol yang sesuai. Anda juga dapat membuat rekaman suara, mengambil foto dan mengambil catatan menggunakan tombol yang tersedia.  
4.  Setelah selesai melakukan perekaman perjalanan Anda, simpan trek dan waypoint Anda dengan menekan ikon disket.  
5.  Untuk mengkonversi trek menjadi format file gpx, tekan dan tahan pada trek tersebut di daftar trek, lalu pilih opsi Export to GPX.  
6.  Salin trek, gambar dan rekaman ke komputer Anda dan gunakan file tersebut sebagai acuan untuk memperbarui data OSM.  


Instal OSMTracker
-------------------------

Instal OSMTracker dari [Google play Store](https://play.google.com/store/apps/details?id=me.guillaumin.android.osmtracker).  
![OSMTracker Logo][]  
Package [aplikasi terbaru](https://drive.google.com/folderview?id=0BxxhTXmYjyeSSjg1MFhJWnJLams#list) dapat diunduh dari sumber lain selain Google play Store jika diperlukan.  


Konfigurasi OSMTracker
------------------------

Buka OSMTracker dan tekan ikon menu pada perangkat Android Anda lalu pilih **Settings**.  

-  **Voice record duration** - tergantung pilihan Anda, tapi 30 detik adalah waktu yang digunakan oleh penulis.  
-  **Enable sound** - direkomendasikan untuk mencentang kotak ini - memunculkan notifikasi suara untuk menandakan ketika memulai dan mengakhiri perekaman suara.  
-  **Reset  authentication**. Tombol ini akan berwarna abu-abu sampai Anda mengunggah .gpx file dan mengizinkan OSMTracker untuk mengunggah trek ke akun OpenStreetMap Anda.  
-  **GPS settings** Metode mana yang perangkat Android Anda gunakan untuk menentukan lokasi. Direkomendasikan untuk memilih **High accuracy** dan perangkat Anda akan menggunakan GPS, Wi-Fi dan jaringan seluler untuk mengestimasi lokasi.  
-  **Check GPS at startup** Ketika Anda membuka OSMTracker, jika GPS dalam keadaan nonaktif, aplikasi ini akan meminta Anda untuk mengaktifkannya.
-  **Ignore GPS clock** Jika kotak ini dicentang, waktu yang digunakan adalah waktu dari jam internal perangkat daripada waktu yang disediakan oleh sinyal GPS.  
-  **GPS logging interval** Pilih periode perekaman posisi - untuk akurasi terbaik pilih 0 atau 1, aplikasi akan merekam trek tiap detik periode perekaman yang dipilih.  

> Frekuensi ini berdampak pada penggunaan baterai, namun ketika menggunakan aplikasi ini, layar Anda biasanya akan selalu menyala, GPS selalu bekerja dan Anda juga mungkin mengambil beberapa foto dan rekaman - semua ini akan menguras daya smartphone Anda sehingga baterai cepat habis dan direkomendasikan untuk menggunakan alat tambahan untuk mengisi daya (power bank) saat merekam perjalanan Anda.  

-  **External storage (SD) directory** Direktori bawaan adalah /osmtracker  

> Perangkat Android terbaru tidak memperbolehkan Anda untuk menyimpan data di eksternal microSD atau SD card. Meskipun diatur ke 'external storage' trek dan lainnya akan disimpan di **/storage/emulated/0/osmtracker.**  

-  **One directory per track** Direkomendasikan karena semua rekaman suara, foto, catatan dan trek gpx disimpan di folder yang sama, dengan nama waktu dan tanggal saat trek diambil.  
-  **Filename for named tracks** Pilihan untuk Anda mengatur nama file sesuai preferensi Anda.  
-  **Accuracy in GPX file** Direkomendasikan - nama waypoint akan terdapat angka perkiraan error yang mungkin terjadi dalam satuan meter. Misalnya *Footpath (4.0m)*. Informasi ini akan sangat berguna ketika digunakan untuk memperbarui data OSM dan ketika memutuskan apakah sebuah objek harus disesuaikan dengan waypoints atau tidak.  
-  **Use HDOP approximation** Berhubungan dengan perhitungan tambahan untuk meningkatkan akurasi posisi (Horizontal Dilution of Precision).  
-  **Export Compass Heading** Mendefinisikan jika dan bagaimana data kompas harus diekspor ke file GPX.  
-  **Default photo source** Pada umumnya Anda akan mengambil foto menggunakan kamera melalui aplikasi ini, tapi Anda dapat menggunakan foto yang sudah ada di handphone Anda.  
-  **Screen always on** Pilih opsi ini jika Anda seringkali menekan tombol, mengambil foto atau merekam suara - jika tidak, biarkan kotak tidak dicentang sehingga Anda dapat menyala-matikan layar ketika Anda membutuhkan, yang akan menghemat baterai.  
-  **Main screen graphic theme** Pilihan untuk mengubah kontras dan kecerahan layar jika Anda kesulitan melihat tombol saat merekam trek perjalanan.  
-  **Button Presets** Anda dapat mendesain dan menginstal set tombol sendiri dan memilihnya sebagai tampilan pada aplikasi dengan memilih opsi ini. Untuk deskripsi lengkap dari fungsi ini, [lihat di bawah](/id/mobile-mapping/osmtracker/#button-presets).   
-  **Background map** Dengan menekan dan menahan pada trek yang sudah direkam, jika fitur ini dipilih, Anda dapat menampilkan trek dan aplikasi akan mengunduh data OpenStreetMap sebagai peta latar belakang.  

> Untuk mengunduh data peta dibutuhkan koneksi internet. Anda tidak wajib untuk menggunakan fitur ini kecuali jika Anda memang ingin menggunakannya.  

-  **Map Tile Provider** Jika Anda memilih untuk mengunduh data peta sebagai latar belakang ketika menampilkan petanya, Anda dapat memilih versi peta mana untuk digunakan sebagai latar belakang.  
-  **Orientation**  Apakah Anda ingin layar dapat berotasi secara otomatis, atau ingin layar landscape atau portrait?  

Daftar Trek
--------------

![OSMTracker_2][]  
Setelah menyelesaikan survey, menandai objek, membuat rekaman suara dan mengambil foto, klik pada icon disket untuk menyudahi perekaman trek. Lalu tekan dan tahan nama trek tersebut pada daftar trek dan pilihan-pilihan berikut akan muncul:  

-  **Resume Tracking** berguna ketika Anda menyadari perekaman trek belum selesai dan ingin Anda lanjutkan  
-  **Display** akan memunculkan trek, kemungkinan dengan peta latar belakang tergantung dengan koneksi internet Anda dan pilihan yang Anda pilih pada **Background Map**.  
-  **Export as GPX** - penting untuk mengubah trek dan waypoints menjadi format gpx untuk digunakan pada editor.  
-  **Upload to OpenStreetMap** Gunakan pilihan ini untuk mengunggah trek Anda ke OpenStreetMap - Anda membutuhkan akun OpenStreetMap untuk melakukannya ([Bagaimana cara membuat akun OSM](/id/beginner/start-osm/)), dan Anda butuh memberikan otorisasi aplikasi ini untuk mengunggah trek ke akun Anda. Lihat [Trek GPS - file gpx di bawah](/id/mobile-mapping/osmtracker/#gps-traces--gpx-files) untuk melihat informasi lebih lanjut mengapa trek ini penting untuk OpenStreetMap.  

> **Perhatian, jangan hapus trek dulu.** Anda baru mengunggah trek dasar dan bukan waypoints, foto dan sebagainya. You have only uploaded the basic trace and not the waypoints, photographs etc. Pindahkan semua ke dalam untuk selanjutnya digunakan untuk mengedit.  

-  **Delete**. Untuk menghapus trek.  


Tombol Presets
--------------

Jika Anda akan melaukan survey untuk alasan tertentu dan ternyata label waypoint yang Anda butuhkan tidak tersedia, Anda dapat membuat sebuah set tombol preset sendiri sebelum melakukan survey, menyalinnya ke dalam smartphone Anda dan menggunakannya ketika survey - beberapa set dapat dibuka di smartphone Anda dan Anda dapat menggunakannya secara bergantian tanpa harus menghentikan perekaman trek Anda. Karena label yang digunakan dibuat dalam bentuk formulir catatan personal dan tidak akan diunggah ke OpenStreetMap, label tersebut tidak perlu mengikuti tag yang digunakan pada OpenStreetMap. Misalnya, Anda menggunakan tombol label seperti ini;  

- 1 family,  
- 2 families,  
- 3 families,  
- 4 families,  
- chiefs house,  
- 20% damaged,  
- 40% damaged,  
- 60% damaged,  
- 80% damaged,  
- destroyed,  
- unsuitable for lorry,  
- 4wd needed,  
- etc..  

Untuk deskripsi lengkap mengenai pembuatan tombol preset, lihat [halaman wiki OSMTracker](https://github.com/nguillaumin/osmtracker-android/wiki/Custom-buttons-layouts). Berikut ini adalah sebuah [file sampel.](/files/R_of_Way.xml)  

![OSMTracker button presets][]  


Ukuran rekaman suara, foto & teks foto  
-----------------------------------------------  

![OSMTracker recorded file sizes][]  

Jika transfer file menjadi sebuah masalah pada tahap berikutnya, perhatikan ukuran filenya - screenshot menampilkan bahwa file foto akan lebih besar ukuran filenya daripada file gpx atau sebuah file rekaman suara 10 detik.  


GPS Traces - gpx files
----------------------  

![OSMTracker JOSM][]  

Trek GPS yang berupa file gpx terdiri dari sejumlah element, yaitu sebuah 'trek' dan 'waypoints'. Screenshot di atas menunjukkan sebuah folder yang berisi file hasil survey menggunakan OSMTracker yang sudah dibuka di JOSM siap digunakan untuk mengedit data OSM, dengan citra satelit sebagai latar belakang. Ikon persegi di tengah-tengah trek mengindikasikan ada foto yang diambil di lokasi tersebut - klik ikon persegi tersebut untuk menampilkan foto.  

Jika Anda melakukan navigasi menggunakan GPS untuk mendapatkan arahan, Anda akan menyadari bahwa GPS melakukan 'rekalkulasi'. Hal ini normal terjadi karena lokasi dari internal GPS tidak sesuai dengan dimana lokasi jalan berada - ada margin of error, namun akan sangat mudah untuk jalan diletakkan sedikit bergeser atau untuk jalan digeser setelah data peta dibuat.  
Relawan yang memperbarui data OpenStreetMap dapat mengunduh semua trek GPS yang sudah diunggah pada suatu area dan menggunakannya untuk:  

1. Trek jalan dapat melalui area yang tidak terlihat pada citra satelit karena tertutup awan, pohon, bayangan, bangunan dll.  
2. Menyesuaikan citra satelit sehingga citra satelitnya sejajar dengan trek GPS - terdapat variasi pada beberapa citra.  

Meskipun sebuah trek gpx sangat berguna, bisa saja trek gpx tidak akurat dan bisa saja bergeser sejauh 30 meter. Ketika ada beberapa trek, rute dari jalan yang benar akan mudah dilihat - lihat contoh screenshot di bawah ini menampilkan hasil unduhan trek gpx dari sebuah kota, dimana jalan utamanya dapat dilihat dari volume treknya.  

![OSMTracker_gpx][] 




[OSMTracker Logo]: /images/mobile-mapping/osmtracker_logo.png
[OSMTracker_1]: /images/mobile-mapping/OSMTracker_1.png
[OSMTracker_2]: /images/mobile-mapping/OSMTracker_2.png
[OSMTracker button presets]: /images/mobile-mapping/OSMTracker_presets.png
[OSMTracker recorded file sizes]: /images/mobile-mapping/OSMTracker_files.png
[OSMTracker_gpx]: /images/mobile-mapping/OSMTracker_gpx.png
[OSMTracker JOSM]: /images/mobile-mapping/OSMTracker_JOSM.png