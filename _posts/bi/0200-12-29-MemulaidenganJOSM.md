---
layout: doc
title: Mulai Menggunakan JOSM
permalink: /bi/beginner/start-josm
lang: bi
category: beginner
---

Mulai Menggunakan JOSM
======================

Pada chapter ini kita akan mempelajari langkah-langkah bagaimana caranya
mendownload dan instalasi JOSM, software editor utama dari
OpenStreetMap. Kita akan mengubah beberapa setting atau pengaturan yang
ada pada JOSM agar nantinya lebihmudah untuk digunakan. Kemudian kita
akan membuka sebuah contoh peta dan mempelajari beberapa operasi dasar
dari software ini. Ingat pada chapter 1 ketika kami meminta Anda untuk
menggambar sebuah peta mengenai kota atau desa tempat Anda tinggal?
 Kemudian kita akan mengakhiri chapter ini dengan menggambar ulang peta
Anda, kali ini secara digital. Setelah itu Anda akan memiliki pemahaman
yang baik mengenai bagaimana menggambar peta dengan menggunakan JOSM.

Download JOSM
-------------

1.  Jika Anda memiliki salinan dari JOSM pada sebuah CD atau usb flash
    drive, Anda dapat langsung menuju section 2, Install JOSM.
2.  Jika Anda tidak memiliki JOSM, atau menginginkan untuk mendapatkan
    versi terbarunya, buka web browser – bisa menggunakan Firefox,
    Chrome, Opera, atau Internet Explorer.

1.  Pada kolom alamat (address bar) pada bagian atas jendela browser
    Anda, masukkan alamat berikut:

    [josm.openstreetmap.de](http://josm.openstreetmap.de)

1.  Anda juga dapat menemukan website ini dengan mencari “JOSM” pada
    mesin pencari.
2.  Website akan tampak seperti ini:

![]({{site.baseurl}}/images/bi_beg_ch3_image06.png)

Jika Anda menggunakan komputer dengan OS Windows, klik “Windows JOSM
Installer” untuk mendownload JOSM. Jika Anda memiliki OS atau operating
system lainnya, klik pada link yang sesuai dengan sistem operasi
komputer Anda. Download Anda seharusnya telah dimulai. Pada chapter ini
kami akan mengasumsikan Anda menggunakan Windows, tapi petunjuknya cukup
mirip dengan sistem operasilainnya.

Install JOSM
------------

1.  Anda mungkin memiliki masalah ketika melakukan instalasi JOSM
    apabila Java belum terinstall di komputer Anda. Jika Anda memiliki
    masalah ketika mlakukan instalasi pada bagian ini, cobalah download
    dan lakukan instalasi Java. Anda dapat mendownloadnya disini:
    [http://www.java.com/en/download/](http://www.java.com/en/download/)

1.  Temukan file instalasi JOSM di komputer Anda. Klik dua kali untuk
    memulai pengaturan.
2.  Klik ‘OK’, ‘Next’, ‘I Agree’, dan ‘Install’. Ketika instalasi telah
    selesai, klik ‘Finish’ untuk membuka JOSM untuk pertama kalinya.
    Setelah itu, jika Anda ingin membuka JOSM lagi, Anda dapat klik pada
    Start menu pada pojok kiribawah layar komputer Anda, dan klik pada
    program JOSM.

1.  Anda dapat melihat sebuah jendela muncul dan bertanya apakah Anda
    mau melakukan update atau pembaharuan terhadap software tersebut.
    Jawabannya, Anda tidak perlu melakukan update tersebut karena yang
    baru saja Anda download masih baru. Tekan tombol yang bertuliskan
    “Cancel”. Jika Anda tidak mau melihat pesan ini muncul lagi, berikan
    tanda centang pada kotak kecil yang ada di bagian bawah halaman
    tersebut sebelum menekan “Cancel.”

3.  Ketika JOSM telah terbuka, akan tampak tampilan seperti ini:

![]({{site.baseurl}}/images/bi_beg_ch3_image07.png)

Mengubah Pengaturan pada JOSM
-----------------------------

1.  Sebelum kita memulai menggunakan JOSM, sebaiknya kita mengubah
    beberapa pengaturan terlebih dahulu sehingga akan mudah
    dioperasikan. Untuk mengupah beberapa pengaturan ini, klik “Edit”
    pada menu bagian atas, kemudian klik “Preferences” atau
    “Preferensi”.

![]({{site.baseurl}}/images/bi_beg_ch3_image08.png)

### Menambahkan Citra Satelit Bing

1.  Kita ingin menggunakan gambar citra satelit ketika kita membuat
    peta, jadi mari tambahkan citra ke jendela Preferences. Pada sebelah
    kiri dari jendela Preferences terdapat beberapa ikon yang berbeda
    untuk berbagai pengaturan yang berbeda pula. Klik pada ikon yang
    berwarna hijau dan memiliki tulisan “WMS TMS”. Anda mungkin harus
    klik pada tombol panah ke bawah untuk menemukan ikon tersebut:

 ![]({{site.baseurl}}/images/bi_beg_ch3_image09.png)                     ![]({{site.baseurl}}/images/bi_beg_ch3_image01.png)

2.  Klik pada “Bing Sat”. Kemudian klik “Activate”.

![]({{site.baseurl}}/images/bi_beg_ch3_image00.png)

1.  Setelah itu Anda sudah dapat melihat “Bing Sat” pada daftar yang
    berada di bawah tombol “Activate”.
2.  Jangan tutup jendela Preferences, lanjutkan langkah berikutnya.

### Menambahkan Presets

1.  Jika Anda telah mendapat file yang seharusnya ditambahkan pada menu
    presets, Anda dapat menambahkannya sekarang. Contohnya, sebuah file
    presets bisa jadi memiliki nama sepert  building.xml
2.  Anda seharusnya masih memiliki jendela Preferences yang terbuka.
    Jika tidak, klik Edit -\> Preferences.
3.  Pada sebelah kiri, klik pada ikon yang tampak seperti grid atau
    jaring-jaring.

![]({{site.baseurl}}/images/bi_beg_ch3_image03.png)

1.  Klik pada tab di bagian atas yang bertuliskan “Tagging Presets”.
2.  Pada bagian kanan, tekan tombol +
3.  Di sebelah box kedua di sebelah kanan, klik pada tombol yang tampak
    seperti sebuah folder. Pilih file presets yang ingin Anda tambahkan,
    misalnya, buildings.xml.
4.  Klik OK

### Menambahkan Plugin Walking Papers

1.  Pada panduan ini Anda akan mempelajari mengenai sebuah alat yang
    bernama Walking Papers, yang dapat mencetak peta suatu area,
    menggambar atau menandai di atasnya dan membuat catatan pula,
    kemudian dapat memuatnya di JOSM sebagai latar belakang. Kita dapat
    menambahkan gambar dan catatan kita ke dalam OpenStreetMap. Sekarang
    kita akan menambahkan plugin Walking Papers ke dalam JOSM.
2.  Seharusnya Anda masih memiliki jendela Preferences di layar komputer
    Anda.Jika tidak, klik Edit -\>  Preferences untuk membuka jendela
    tersebut.
3.  Pada sebelah kiri, klik pada ikon yang terlihat seperti stop kontak.

![]({{site.baseurl}}/images/bi_beg_ch3_image02.png)

1.  Klik pada tombol yang bertuliskan “Download List” atau “Download
    Daftar”. Daftar plugin akan terdownload dari internet, dan ketika
    selesai Anda akan melihat banyak daftar plugins yang muncul pada
    jendela.
2.  Pada search box di bagian atas, ketik “walking”. Kemudian akan
    muncul daftar yang berisi kata “walking” di dalamnya.
3.  Ceklis pada kotak kecil yang berada di sebelah plugin bertuliskan
    walkingpapers lalu klik OK pada bagian bawah jendela.
4.  Walking Papers akan terdownload dan diinstall. Jangan klik
    “Cancel”. 

### Memilih Bahasa

1.  JOSM telah banyak diterjemahkan ke dalam berbagai bahasa. Apabila
    JOSM telah diterjemahkan ke dalam bahasa yang Anda gunakan, Anda
    dapat mengubahnya melalui Preferences.
2.  Buka jendela Preferences dengan cara klik Edit -\> Preferences.
3.  Di sebelah kiri, klik pada ikon yang tampak seperti kaleng cat dan
    kuas cat.
4.  Di bagian atas jendela, klik pada tab yang berisi tulisan “Look and
    Feel”.
5.  Pilih bahasa yang Andainginkan pada box yang berada disebelah
    tulisan “Language”.
6.  Klik OK.

![]({{site.baseurl}}/images/bi_beg_ch3_image04.png)

1.  Anda harus restart atau menutup dan membuka kembali JOSM untuk
    menyimpan pengaturan yang telah Anda lakukan. Klik “File” pada ujung
    kiri atas jendela, kemudian klik “Exit” pada bagian bawah menu.
2.  Buka kembali JOSM dengan membuka Start Menu Windows yang berada di
    pojok kiri bawah jendela komputer Anda. Cari JOSM dan klik pada
    logonya untuk memulai.  Atau klik langsung pada ikon JOSM di
    Desktop.

Belajar Teknik Menggambar Dasar Menggunakan JOSM
------------------------------------------------

1.  Sekarang mari kita buka file contoh dari OSM yang akan kita gunakan
    untuk berlatih menggambar peta menggunakan JOSM. Mohon dicatat
     bahwa peta ini tidak nyata, hanya untuk berlatih, jadi peta ini
    tidak akan disimpan ke dalam OpenStreetMap.
2.  Jika Anda telah mendapatkan file dari instruktur Anda, tentunya Anda
    telah mendapatkan file yang akan kita gunakan, namanya sample.osm
3.  Jika Anda tidak memiliki file sample.osm pada komputer Anda, Anda
    dapat mendownload nya dari internet. Buka browser internet Anda.
    Pada kolom alamat website pada bagian atas jendela, masukkan alamat
    berikut:
    [http://www.learnosm.org/files/](http://www.learnosm.org/files/)
1.  Menggunakan mouse Anda, klik kanan pada file bernama sample.osm kemudian
    klik “Save Link As...” Pilih lokasi pada komputer Anda dimana Anda akan
    menyimpan file tersebut.
1.  Sekarang silahkan buka contoh file peta pada JOSM. Buka JOSM. Klik
    pada tombol “Open” yang berada di kiri atas.

![]({{site.baseurl}}/images/bi_beg_ch3_image10.png)

1.  Temukan file sample.osm . Klik pada file tersebut kemudian klik
    “Open” atau “Buka.
2.  Anda akan melihat tampilan peta seperti berikut ini:

![]({{site.baseurl}}/images/bi_beg_ch3_image11.png)

### Operasi Dasar

1.  Untuk memindahkan peta ke kanan atau ke kiri, ke atas atau ke bawah,
    klik kanan dan tahan mouse Anda, kemudian gerakkan mouse Anda sesuai
    posisi yang Anda inginkan.
2.  Terdapat beberapa cara untuk memperbesar dan memperkecil tampilan
    peta tersebut. Jika Anda menggunakan mouse, Anda dapat menggunakan
    scroll wheel atau roda gulir untuk memperbesar dan memperkecil
    tampilan peta. Jika Anda menggunakan laptop dan tidak memiliki
    mouse, Anda dapat memperbesar dan memperkecil peta menggunakan scale
    bar atau garis skala yang berada di sebelah kiri atas jendela yang
    berisi peta. Pindahkan bar yang ada kekanan dan ke kiri dengan cara
    klik kiri dan tahan mouse Anda dan pindahkan bar ke kanan dan ke
    kiri dengan mouse Anda.

![]({{site.baseurl}}/images/bi_beg_ch3_image12.png)

1.  Lihat pada peta contoh. Terdapat beberapa objek berbeda di dalamnya.
    Ada sungai, hutan, beberapa bangunan, beberapa jalan, dan beberapa
    toko. Untuk memilih objek, klik dengan menggunakan tombol kiri pada
    mouse.

### Titik, Garis, dan Bentuk

1.  Jika Anda klik pada objek-objek yang berbeda pada peta contoh, akan
    tampak bahwa terdapat tiga tipe objek yang berbeda pada peta. Yaitu
    points atau titik, lines atau garis, dan shapes atau bentukan.
2.  Points atau titik menunjukkan lokasi tunggal, direpresentasikan
    dengan simbol. Pada contoh peta ini, terdapat dua titik, sebuah toko
    pakaian dan sebuah pasar. Toko pakaian disimbolkan dengan gambar
    baju, dan pasar atau market disimbolkan dengan sebuah kereta belanja
    atau shopping cart.
3.  Terdapat beberapa garis pula pada peta ini yang merepresentasikan
    jalan. Jika Anda lihat dengan lebih seksama pada garis-garis
    tersebut, terdapat titik-titik pula. Titik-titik ini tidak memiliki
    simbol atau informasi lainnya yang berhubungan dengannya, tapi
    titik-titik tersebut menentukan bentuk dan posisi garis tersebut
    berada.
4.  Yang terakhir, terdapat banyak shapes atau bentuk pada peta contoh
    yang merepresentasikan sebuah hutan, sungai, dan bangunan. Sebuah
    shapeatau bentuakan biasanya mewakili sebuah area, seperti sebuah
    lapangan atau sebuah bangunan. Sebuah bentuk persis seperti sebuah
    garis, perbedaannya hanyalah, garis dari sebuah bentuk selalu
    berujung di tempat yang sama dengan posisi titik awal garis tersebut
    dimulai.
5.  Di sebelah kanan halaman terdapat box yang berisi daftar atribut
    objek, box tersebut bernama “Properties”. Jika Anda memilih suatu
    objek, akan muncul atribut objek tersebut pada kolom “Properties”,
    atribut-atribut tersebut dikenal sebagai “tags” atau “label”. Tags
    atau label merupakan informasi yang terikat dengan sebuah titik,
    garis ataupun bentuk yang akan memberi deskripsi mengenai objek
    tersebut. Kita akan mempelajarinya pada Chapter 7, Pengeditan
    Lanjutan. Untuk saat ini Anda cukup memahami bahwa informasi yang
    diwakilkan oleh tag atau label dapat membantu mendeskripsikan apakah
    objek tersebut merupakan hutan, sungai, bangunan, atau hal lainnya.
     
6.  Berpikirlah seolah-olah Anda menggambar sebuah peta menggunakan
    tangan Anda, dan bagaimana Anda juga menggambar titik, garis, dan
    berbagai bentuk. Tempat-tempat seperti apa saja yang dapat
    diwakilkan oleh titik? Garis? Bentuk?

### Mengubah Objek

1.  Pilih objek hutan pada sebelah kiri peta. Pastikan Anda klik pada
    garis yang menandai batas hutan, bukan titik yang berada pada garis.
    Sekarang  tahan tombol sebelah kiri dari mouse Anda kemudian tahan.
    Anda pun dapat memindah-mindahkan objek hutan ke lokasi lain yang
    berada di peta.
2.  Sekarag coba klik pada titik yang berada pada garis yang melingkari
    hutan. Klik dan tahan tombol kiri mouse Anda, maka Anda akan dapat
    memindah-mindahkan titik tersebut. Begitu lah caranya Anda dapat
    mengubah bentuk dari sebuah objek, atau memindahkan sebuah titik.

### Drawing (Menggambar)

1.  Pada sebelah kiri dari jendela JOSM terdapat sebuah kolom berisi
    banyak tombol dengan fungsi-fungsi yang berbeda pula. Beberapa dari
    tombol tersebut akan memunculkan box kecil baru pada sebelah kanan
    halaman bila Anda klik. Tombol-tombol paling penting berada pada
    posisi paling atas pada kolom tersebut.
2.  4 tombol paling atas yang berada pada kolom ini merupakan yang
    paling penting. Tombol-tombol tersebut memungkinkan Anda untuk:

1.  Memilih
2.  Menggambar
3.  Memperbesar
4.  Menghapus

3.  Hingga saat ini, Anda telah menggunakan Select Tool, yng ikonnya
    tampak seperti ini:

![]({{site.baseurl}}/images/bi_beg_ch3_image13.png)

4.  Sebelum Anda menggambar, Anda perlu memastikan bahwa tidak ada objek
    yang aktif. Klik pada halaman berwarna hitam yang kosong (tidak ada
    objek) pada peta, pastikan tidak ada objek yang terpilih atau aktif.
5.  Klik pada tombol kedua, yang disebut Draw Tool.

![]({{site.baseurl}}/images/bi_beg_ch3_image14.png)

1.  Cari area kosong pada peta, dan klik dua kali dengan menggunakan
    mouse Anda. Andaakan lihat telah muncul sebuah titik pada peta.
2.  Untuk menggambar garis, klik satu kali dengan menggunakan mouse
    Anda. Pindahkan mouse dan klik lagi. Lanjutkan pindahkan mouse dan
    klik lagi hingga Anda menggambar garis yang Anda inginkan. Untuk
    mengakhiri garis, klik dua kali menggunakan mouse Anda.
3.  Gambar sebuah bentuk dengan cara yang sama seperti ketika Anda
    membuat garis, tetapi akhiri garis dengan klik dua kali pada titik
    yang sama dimana Anda memulai garis tersebut.

### Menambahkan Presets

1.  Sekarang kita telah mengetahui bagaimana menggambar titik, garis dan
    bentuk, tetapi kita belum memberikan informasi mengenai objek-objek
    tersebut. Kita ingin memberikan label bahwa suatu bangunan merupakan
    sekolah, toko, atau lainnya, dan apakah bentuk yang ada merupakan
    lapangan, atau bangunan, atau hal lainnya.
2.  Klik pada Select Tool, pada kolom yang berisi tombol-tombol di
    sebelah kiri jendela.

![]({{site.baseurl}}/images/bi_beg_ch3_image13.png)

1.  Pilih salah satu objek yang telah Anda gambar menggunakan Draw Tool.
    Pada menu yang berada di atas, klik pada “Presets”. Pindahkan mouse
    Anda ke berbagai sub-menu tergantung tipe lokasi yang ingin Anda
    tambahkan.
2.  Ketika Anda klik pada sebuah preset, sebuah jendela kecil baru akan
    muncul yang berisi berbagai jenis informasi yang dapat diisi. Anda
    tidak diharuskan untuk mengisi seluruh informasi, tapi sebaiknya
    Anda menambahkan informasi-informasi penting seperti nama dari objek
    tersebut.
3.  Jika Anda sudah selesai mengisi informasi, klik “Apply Presets” atau
    “Terapkan Presets”. Jika semua berjalan sebagaimana mestinya, titik,
    garis dan berbagai bentuk yang Andabuat akan berubah warna atau
    memunculkan simbol. Ini karena Anda telah memberikan informasi
    mengenai apa objek tersebut.

### Gambar Peta Anda Sendiri

1.  Sekarang mari gambar sebuah peta untuk berlatih teknik-teknik yang
    telah Anda pelajari. Anda dapat menggambar ulang peta yang telah
    Anda buat ketika berada di awal Chapter 1.
2.  Pindahkan tampilan peta menjauh dari peta contoh pada layar dengan
    menggunakan klik kanan dan tahan pada mouse Anda, gerakkan mouse
    Anda, dan temukan area kosong untuk menggambar peta.
3.  Gunakan Draw Tool untuk menggambar titik, garis dan berbagai bentuk.
    Deskripsikan apa saja objek-objek tersebut dengan memilihnya melalui
    menu Presets.
4.  Ketika selesai, Anda pun telah memiliki petaAnda sendiri, mirip
    dengan contoh peta yang kita buka pada sample.osm

Rangkuman
---------

Excellent! Jika semua berjalan dengan baik, Anda telah mempelajari
bagaiman melakukan setup atau pengaturan pada JOSM pada komputer Anda
dan juga mengenai bagaimana menggunakan tools atau alat dasar dalam
menggambar peta. Pada dua chapter berikutnya, Anda akan mempelajari
bagaimana menggunakan GPS dan Walking Papers untuk memetakan daerah Anda
sendiri. Pada Chapter 6, kitaakan kembali menggunakan JOSM dan
memanfaatkan informasi yang telah kita kumpulkan, kita pun akan
menambahkan berbagai objek pada OpenStreetMap.
