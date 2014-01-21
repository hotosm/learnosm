---
layout: doc
title: Editing OpenStreetMap dengan JOSM
permalink: /bi/beginner/editing-with-josm/
lang: bi
category: beginner
hidden: yes
---

Editing OpenStreetMap dengan JOSM
=================================

Pada bab 3 Anda menginstal JOSM dan mulai menggambar objek point, garis,
dan area/polygon Anda. Anda menambahkan preset pada objek-objek yang
Anda gambara tersebut untuk memberikan informasi tentang objek itu
sendiri. Dan akhirnya, Anda dapat menggambar peta nda pada JOSM.

Menggambar peta pada bab 3 ini merupakan latihan untuk mempelajari JOSM
dan bagaimana menggambarkan suatu objek pada peta. Namun, peta kita
belumlah akurat karena kita tidak memberikan lokasi yang benar. Pada dua
bab sebelumnya, kita telah mempelajari dua tool, yaitu GPS dan  Walking
Papers, yang mana memmungkinkan Anda untuk mengumpulkan data  lokasi
secara aktual dari suatu tempat (Secara umum, GPS mendefinisikan lokasi
Anda dalam rentang +/- 10 meter,  jadi lokasi yang didapat dengan GPS
pun sebenarnya tidak terlalu akurat pula, apalagi jika Anda hanya
mengambil satu waypoint).  Lokasi ini direpresentasikan (diwujudkan)
dalam bentuk koordinat.

Membuat peta sesungguhnya (yaitu peta dimana setiap titik, garis, dan
area/polygon nya berada pada lokasi yang sesungguhnya) tidaklah berbeda
dengan menggambar peta yang kita gambar pada bab 3. Tapi sekarang, kita
akan menggunakan titik-titik dan track GPS serta Walking Papers kita
untuk menggambar peta yang serupa pada lokasi-lokasi mereka yang
sebenarnya di atas bumi ini.

Pada bab ini kta akan mempelajari bagaimana mengedit peta OpenStreetMap
dan menambahkan update, perbaikan, serta koreksi dari kita. Kita akan
mempelajari langkah-langkah dasar pemetaan dalam OSM:

**Download** data peta terkini dari OSM

  Tour JOSM
  Download data peta OSM
  Layer-layer pada JOSM

**Edit** menggunakan GPS, Walking Papers, dan catatan sebagai panduan

  Edit
  Berikan tag

**Simpan** perubahan ke server OpenStreetMap

  Upload perubahan
  Lihat perubahan Anda padapeta OpenStreetMap

**Simpan** file OSM

Di akhir bab ini, kita akan dapat melihat penambahan dan editing yang
kita lakukan pada OSM.

Explore JOSM
------------

1.  Pertama-tama, untuk memulai JOSM klik Start Menu pada pojok kiri
    bawah computer Anda, dan carilah program “JOSM”.
2.  Kemudian, buka file gpx Anda serta Walking Paper Anda pada JOSM.
    Anda tidak harus membuka keduanya (buka salah satu saja tidak
    apa-apa), tapi jika Anda mau, Anda dapat membuka kedua file tersebut
    (GPX dan Walking Paper). Buka kembali 2 bab sebelumnya jika Anda
    lupa bagaimana caranya untuk membuka file tersebut pada JOSM.
3.  JOSM memiliki banyak fitur dan tool yang berbeda-beda. Halaman utama
    JOSM –yang mana Anda telah sangat mengenal halaman ini– adalah
    halaman peta (“map window”), dan pada halaman inilah hampir semua
    pekerjaan dilakukan. Pada halaman ini Anda dapat melihat, mengedit,
    dan menambahkan data peta kita ke OpenStreetMap.

![]({{site.baseurl}}/images/bi_beg_ch6_image13.png)

4.  Pada sisi kanan halaman peta terdapat beberapa panel yang
    masing-masing memiliki tugas dan fungsi yang berbeda-beda. Ketika
    Anda pertama kali menginstal JOSM beberapa panel telah muncul secara
    otomatis, seperti panel “Layers”, “Properties”, dan “Selection”.
    Ketika Anda memilih suatu objek titik, garis, ataupun area/polygon
    pada halaman peta, objek tersebut akan muncul pada panel
    “Selection”, dan informasi-informasi tentang objek tersebut akan
    muncul pada panel “Properties”, dan username pembuat objek tersebut
    akan muncul pada panel “Authors”.
5.  Pada sisi kiri JOSM terdapat beberapa toolbar, yang mana terdiri
    dari banyak tombol/icon. Masing-masing toolbar ini memiliki fungsi
    yang berbeda-beda. Anda telah sangat mengenal dua toolbar pertama,
    yaitu “Select tool” dan “Draw tool”. Tool-tool yang lain berfungsi
    untuk mempermudah zoom in (memperbesar peta), menghapus objek,
    menggambar bentuk-bentuk tertentu, ataupun membuat sebuah garis yang
    sejajar dengan suatu garis.
6.  Di bawah tool-tool ini terdapat banyak tombol, yang mengontrol apa
    yang dapat kita lihat pada sisi kanan halaman JOSM. Dengan
    menggunakan tombol-tombol tersebut, Anda dapat membuka ataupun
    menutup kotak/panel pada sisi kanan JOSM, seperti kota/panel
    “Properties”, “Selection”, dan “Author”.

Download Data OSM
-----------------

1.  Masih ingat dengan tahapan edit data OpenStreetMap yang dijelaskan
    pada awal bab ini? Download, edit, simpan. Sebelum kita mengedit
    peta, kita harus men-download data OSM pada wilayah kerja kita.
    Untuk apa? Untuk mengetahui objek apa saja yang telah tergambar.
    Jika suatu objek telah tergambar, Anda tidak perlu menggambar
    kembali objek tersebut. Sedangkan bagi objek-objek yang belum
    tergambar, Anda dapat menambahkan gambar objek tersebut.
2.  Ketika Anda membuka track GPX atau Walking Paper Anda, halaman peta
    akan menunjukkan apa yang Anda buka, dan secara otomatis akan
    menunjukkan pula nilai koordinat dari wilayah Anda dan setiap Anda
    menggeser kursor, nilai koordinatnya akan berubah. Setelah Anda
    membuka file Anda, lihat pada pojok kiri bawah JOSM. Anda dapat
    melihat koordinat Y (latitude) dan koordinat X (longitude) dari
    kursor Anda.

![]({{site.baseurl}}/images/bi_beg_ch6_image04.png)

3.  Karena halaman peta kita telah menujukkan area yang akan kita edit,
    maka mudah saja bagi kita untuk men-download data OpenStreetMap
     area kerja kita. Klik menu \<\<File\>\> pada pojok kiri atas JOSM,
    kemudian pilih submenu \<\<Download from OSM\>\>, maka akan terbuka
    kotak dialog “Download”. Anda dapat mengakses kotak dialog tersebut
    dengan cara yang lebih cepat dan mudah, yaitu dengan mengklik tombol
    “download”  ![]({{site.baseurl}}/images/bi_beg_ch6_image06.png)
4.  Ketika kotak dialog terbuka, Anda seharusnya melihat sebuah peta
    dengan kotak berwarna merah muda di atas peta tersebut. Kotak
    berwarna merah muda itu menunjukkan lokasi wilayah Anda. Jika Anda
    tidak melihat peta klik tab \<\<Slippy map\>\>.

5.  Kotak berwarna merah muda menujukkan area yang akan didownload data
    (peta) nya untuk selanjutnya Anda edit. Jika Anda tidak menggeser
    peta pada halaman peta ataupun menutup halaman peta dimana Anda
    membuka file GPS atau Walking Paper Anda, kotak merah muda
    seharusnya sudah tergambar di sekitar area yang benar yaitu pada
    wilayah kerja Anda. Namun, jika Anda ingin mendownload data untuk
    wilayah yang lebih luas, Anda dapat menggambar kotak baru. Untuk
    menggambar kotak baru, klik pada peta, klik kiri dan tahan tombol
    kiri mouse, kemudian drag mouse Anda untuk membuat sebuah kotak.
    Lepaskan tombol kiri mouse Anda (yang mana sejak tadi Anda klik dan
    tahan) untuk menyelesaikan penggambaran kotak merah muda.

![]({{site.baseurl}}/images/bi_beg_ch6_image01.png)

6.  Ketika Anda telah merasa pas dengan ukuran dan lokasi/posisi kotak
    merah muda Anda, klik tombol “Download” yang terdapat pada bagian
    bawah kotak dialog. JOSM akan mendapatkan dan mendownload data
    OpenStreetMap untuk area tersebut dan membukanya pada halaman peta
    untuk selanjutnya Anda edit.

Layer JOSM
----------

1.  Buka file GPS Anda dan download data dari OpenStreetMap. Perhatikan
    bahwa ketika Anda membuka sebuah file, atau menambahkan Walking
    Paper, atau men-download dari OpenStreetMap, sebuah item baru
    tertambahkan pada panel “Layer” di sisi kanan JOSM. Panel “Layer”
    Anda seharusnya terlihat seperti berikut:

    ![]({{site.baseurl}}/images/bi_beg_ch6_image05.png)

2.  Setiap item pada daftar tersebut merepresentasikan/menunjukkan  data
    ataupun file apa saja yang telah Anda buka pada JOSM berikut sumber
    data nya. Pada contoh di atas, “Data Layer 2” merupakan layer yang
    isinya berasal dari data OpenStreetMap yang mana akan kita edit.
    “Markers” merupakan layer yang isinya adalah waypoint dari GPS, dan
    “30 Juni 2011.gpx” merupakan layer yang isinya adalah track GPS.
    Terakhir, “Walking Papers” merupakan layer yang terbentuk saat kita
    menambahkan Walking Paper kita pada JOSM. Anda dapat menambahkan
    layer citra satelit “Bing”, dengan meng-klik menu \<\<Imagery\>\>
     kemudian memilih submenu \<\<Bing Sat\>\>
3.  Untuk menyembunyikan salah satu layer,  pilih dengan mouse layer
    yang ingin Anda sembunyikan tersebut dan klik tombol “Show/Hide”
    ![]({{site.baseurl}}/images/bi_beg_ch6_image08.png)
4.  Begitu Anda meng-klik “Show/Hide”, seharusnya layer yang Anda pilih
    tersebut menjadi tidak tampak pada halaman peta. Klik “Show/Hide”
    lagi, maka Anda akan melihat layer Anda muncul kembali.
5.  Anda dapat menutup/menghapus suatu layer dengan memilih layer
    tersebut (sorot nama layer Anda, kemudian klik kiri mouse Anda)
    kemudian klik tombol “Delete” ![]({{site.baseurl}}/images/bi_beg_ch6_image16.png)yang terdapat
    di pojok kanan bawah panel “Layer”
6.  Terakhir, penting untuk dipahami bahwa Anda hanya dapat mengedit
    layer yang berada dalam posisi “Aktif”. Jika Anda tidak dapat
    mengedit peta pada halaman peta Anda, hal ini kemungkinan karena
    layer yang aktif bukanlah layer yang Anda inginkan untuk di-Edit.
    Sebagian besar layer, seperti titik/waypoint GPS, Walking Paper, dan
    citra satelit, tidak bisa diedit. Satu-satunya layer yang bisa
    diedit dalah layer yang berasal dari OpenStreetMap, yang biasanya
    bernama “Data Layer 1”.
7.  Untuk mengaktifkan suatu layer, pilih nama layer Anda pada panel
    “Layer”, kemudian klik tombol “Activate”  ![]({{site.baseurl}}/images/bi_beg_ch6_image00.png)

Edit
----

1.  Langkah selanjutnya adalah mengedit peta dan menambahkan item-item
    ataupun data baru. Sedikit rumit jika Anda baru pertama kali
    melakukan editing pada JOSM, namun dengan praktek dan latihan secara
    rutin Anda akan semakin mahir dan mudah dalam melakukan Editing pada
    JOSM.
2.  Jika Anda ingin menggeser atau memindahkan suatu titik, garis,
    ataupun area/polygon; gunakan tombol “Select tool”
    ![]({{site.baseurl}}/images/bi_beg_ch6_image11.png) . Klik pada objek yang ingin
    digeser/dipindahkan, kemudian drag pada lokasi yang seharusnya. Kita
    dapat menggunakan cara ini untuk memperbaiki lokasi/posisi objek
    kita yang mungkin sebelumnya dalam posisi yang salah ataupun kurang
    tepat.
3.  Gunakan tombol  “draw tool” ![]({{site.baseurl}}/images/bi_beg_ch6_image03.png)  untuk
    menggambar titik, garis, ataupun area/polygon yang baru.
    Deskripsikan dan berikan keterangan-keterangan lain yang menjelaskan
    objek apakah itu. Gunakan menu \<\<Preset\>\> untuk memberikan
    keterangan-keterangan tentang objek, sebagaimana yang telah
    dijelaskan pada bab 3.
4.  Ingat, titik-titik GPS dan Walking Paper Anda tidak otomatis masuk
    (menjadi bagian dari) data OpenStreetMap. Anda harus menambahkan
    titik-titik GPS dan Walking Paper Anda ke data OpenStreetMap secara
    digital, yaitu dengan menggambar titik-titik tersebut menggunakan
    “draw tool” ![]({{site.baseurl}}/images/bi_beg_ch6_image03.png). Jadi, titik-titk GPS, track
    GPS, dan Walking Papers Anda hanya menjadi latar belakang sebagai
    panduan saat kita akan menggambar dan melakukan editing.
5.  Sebagai contoh, misalnya Anda menyimpan satu waypoint pada GPS Anda
    dengan nama titik 030, dan pada buku catatan Anda memberikan
    keterangan bahwa titik 030 adalah sebuah sekolah. Untuk menambahkan
    titik ini ke OpenStreetMap, Anda harus menggambarnya sendiri.
    Caranya, terlebih dahulu klik tombol “draw tool”
     ![]({{site.baseurl}}/images/bi_beg_ch6_image03.png), dan lakukan double-klik (klik 2 kali)
     tepat di atas titik 030 pada halaman peta Anda. Maka akan terbentuk
    sati objek titik. Langkah selanjutnya adalah memberikan keterangan
    bahwa objek tersebut adalah sutau sekolah. Bagaimana caranya?
    Gunakan “Preset”. Klik menu \<\<Presets\>\>, kemudian carilah preset
    untuk sekolah. Tuliskan nama sekolahnya dan klik “Apply Preset”.
    Lakukan cara yang sama untuk menggambarkan objek garis dan
    area/polygon.

    ![]({{site.baseurl}}/images/bi_beg_ch6_image02.png)

Tag
---

1.  Ketika Anda menggambar suatu objek titik, garis, ataupun
    area/polygon, objek tersebut telah memiliki lokasi, namun tidak ada
    informasi tentang objek apakah itu. Dengan kata lain, kita tahu di
    mana objek tersebut, tapi kita tidak tahu apakah itu. Sebelumnya,
    kita menggunakan menu Preset untuk mendefinisikan apakah suatu objek
    itu. Cara OpenStreetMap mengetahui apakah suatu objek itu adalah
    dengan menggunakan tag.
2.  Sebuah tag adalah mirip sebuah label yang mana Anda dapat
    menambahkan keterangan di dalamnya. Sebagai contoh, Saya menggambar
    sebuah area persegi, maka persegi tersebut hanyalah sebuah bentuk
    persegi. Namun kemudian Saya menambahkan banyak tag untuk
    mendskripsikan objek apakah yang Saya gambar tersebut: bahwa persegi
    tersebut adalah sebuah gedung, dengan nama gedung “Menara Thamrin”,
    dan memiliki 16 lantai
3.  Anda dapat menambahkan tag sebanyak apapun pada suatu objek. Tag
    disimpan sebagai sepasang teks, yaitu keys dan values. Pada
    OpenStreetMap, tag yang ditulis di atas tersebut sebenarnya tertulis
    sebagai berikut: building = yes, name = Menara Thamrin,
    building:levels = 16
4.  Jika Anda memilih suatu objek pada JOSM, Anda dapat melihat semua
    tag yang terdefinisi untuk objek yang Anda pilih tersebut. Tag-tag
    dan nilainya tersebut dapat dilihat pada panel “Properties” di sisi
    kanan JOSM.

    ![]({{site.baseurl}}/images/bi_beg_ch6_image07.png)

### Mengedit Tag

1.  Anda dapat menambahkan, mengedit, dan menghapus suatu tag. Akan
    tetapi, tag-tag ini dalam bahasa Inggris, jadi sepertinya akan lebih
    mudah dan lebih disarankan untuk menggunakan menu \<\<Preset\>\>.
     Ketika Anda menambahkan atau mengubah tag, misalnya jalan primer,
    jalan kolektor, dan lain-lain, simbol yang akan muncul pada peta
    akan berubah/berganti sendiri tergantung pada tag yang terdefinisi.
2.  Untuk mengedit tag pada suatu objek yang telah ada tag nya:

1) Pilih objek.  

2) Kemudian Anda dapat mengedit tag dari objek tersebut dengan 2 cara:
(1) Menggunakan menu “Presets” untuk membuka suatu form dan mengedit
informasi pada form tersebut, atau (2) Mengedit tag scara langsung pada
panel “Properties” di sebelah kiri JOSM.  

![]({{site.baseurl}}/images/bi_beg_ch6_image12.png) 

### Kesalahan Umum :  Memberi Tag pada Suatu Node, Padahal Yang
Sebenarnya Anda Inginkan adalah memberi Tag pada Objek Garis ataupun
Area/Polygon Anda

1.  Ketika Anda menambahkan tag pada suatu objek titik, Anda terlebih
    dahulu harus memilih titik Anda kemudian menambahkan tag (atau
    gunakna menu “presets). Namun, penting untuk diperhatikan bahwa jika
    Anda ingin menambakan tag pada suatu  objek garis atau area/polygon,
    Anda harus memilih (meng-klik) pada garis dari objek, dan BUKAN pada
    titik-titik penyusun garis/polygon Anda.  
2.  Kesalahan yang umum terjadi dalam pemberian tag pada JOSM yaitu Anda
    menggunakan tool “Select” untuk menggambar kotak yang
    mengelilingi/mencakup suatu objek. Hal ini mengakibatkan semua
    elemen dari objek tersebut (baik garis maupun titik-titik pada garis
    tersebut) menjadi dalam posisi terpilih, dan ketika Anda memberikan
    tag maka tag tersebut akan berlaku untuk semua elemen yang terpilih
    termasuk, bahkan pada titik-titik (node) nya (padahal seharusnya
    hanya pada garis ataupun area nya saja). Maka, pastikan bahwa Anda
    hanya memilih (meng-klik) garis pada objek (gambar) yang akan Anda
    beri tag/keterangan tersebut.

        ![]({{site.baseurl}}/images/bi_beg_ch6_image10.png)

3.  Untuk informasi lebih lanjut tentang tag dan preset dapat Anda
    temukan pada Panduan Intermediate Chapter 4: XML dan Preset JOSM.

Upload Perubahan
----------------

1.  Setelah Anda melakukan beberapa perubahan, ediing, dan perbaikan
    pada peta, segera simpan perubahan-perubahan tersebut. Untuk
    menyimpan perubahan, kita membutuhkan koneksi internet, karena
    proses penyimpanan ini pada dasarnya adalah dengan meng-upload
    perubahan-perubahan tersebut ke server OpenStreetMap.
2.  Klik menu \<\<File\>\> pada bagian atas halaman JOSM, kemudian klik
    submenu \<\<Upload Data\>\>, maka akan terbuka kotak dialog
    “Upload”. Anda juga dapat mengakses kotak dialog “Upload” ini dengan
    lebih cepat dan mudah, yaitu dengan mengklik  tombol \<\<Upload\>\>
    dengan gambar icon seperti disamping ini ![]({{site.baseurl}}/images/bi_beg_ch6_image14.png).
3.  Pada kotak dialog yang tampil tersebut menampilkan daftar objek yang
    Anda tambahkan, edit,  ataupun Anda hapus. Pada kotak di bagian
    bawah, Anda diminta untuk memberikan deskripsi tentang perubahan apa
    yang Anda buat.

![]({{site.baseurl}}/images/bi_beg_ch6_image09.png)

4.  Klik tombol “Upload Changes” .
5.  Jika ini adalah pertama kali Anda menyimpan perubahan peta Anda pada
    OpenStreetMap, Anda akan ditanya tentang username dan password
    OpenStreetMap Anda, yang telah Anda buat pada bab 2. Masukkan
    username dan password pada kotak yang telah tersedia. Jika Anda
    mencentang checkbook “Save uder and password (unencrypted)” pada
    bagian bawah kotak dialog tersebut, maka username dan password Anda
    akan tersimpan dan Anda tidak perlu mengetikkan username dan
    password Anda pada upload-upload berikutnya. Selanjutnya klik
    “Authenticate”.

![]({{site.baseurl}}/images/bi_beg_ch6_image17.png)

6.  Dibutuhkan beberapa menit hingga perubahan-perubahan Anda
    ter-upload. Tunggu dan lihat hasilnya! Anda baru saja selesai
    melakukan editing pertama Anda pada OpenStreetMap. Anda dapat
    melanjutkan edit untuk menambahkan titik-titik ataupun objek-objek
    yang lainnya. Selalu pastikan bahwa Anda meng-upload
    perubahan-perubahan Anda sebelum Anda menutup JOSM.

Lihat Perubahan Anda Pada peta OpenStreetMap
--------------------------------------------

1.  Buka browser internet Anda, kemudian buka alamat situs berikut
    [www.openstreetmap.org](http://www.openstreetmap.org)
2.  Geser peta OpenStreetMap ke area yang telah Anda edit.
3.  Seharusnya Anda sekarang telah melihat perubahan Anda pada peta
    OpenStreetMap. Jika Anda tidak melihat perubahan peta yang baru saja
     Anda lakukan, Refresh lah halaman browser Anda, dengan meng-klik
    CTRL + R pada keyboard Anda. Jika masih belum tampak perubahan yang
    Anda buat, terkadang browser belum mengupdate peta dengan baik, maka
    reload kembali halaman Anda, dengan membuka halaman browser baru,
     ketik alamat situs
    [www.openstreetmap.org](http://www.openstreetmap.org) dan cari area
    Anda.
4.  Bagaimana jika perubahannya masih belum tampak? Jangan khawatir –
    terkadang memang dibutuhkan waktu yang lebih lama (beberapa menit)
    hingga perubahan Anda muncul pada halaman OpenStreetMap. Cek pula
    penambahan-penambahan yang Anda buat pada JOSM, sekedar untuk
    memastikan bahwa Anda telah membuat nya dengan benar dan telah
    memberukan tag pada objek yang Anda gambar tersebut (jika suatu
    objek tidak diberi tag, maka gambar tersebut tidak akan muncul pada
    situs OpenStreetMap). Ada satu petunjuk sederahana, jika titik-titik
    Anda (ataupun garis dan area) telah tampil dengan suatu simbol/icon
    tertentu pada  JOSM, objek tersebut seharusnya juga muncul pada
    situs OpenStreetMap.

Menyimpan File OSM
------------------

1.  Setelah Anda men-download beberapa data OSM, terkadang Anda mungkin
    ingin menyimpan data tersebut, kemusian Anda ingin meng-edit nya
    secara offline dan meng-upload editan Anda tersebut ketika Anda
    mendapat koneksi internet.
2.  Untuk menyimpan file OSM, pastikan bahwa layer yang aktif adalah
    layer OSM (biasanya bernama “Data Layer 1”). Klik menu \<\<File\>\>
    pada bagian atas halaman JOSM, dan pilih submenu \<\<Save\>\>. Pilih
    pada folder mana Anda akan menyimpan file OSM Anda, dan beri nama
    file Anda tersebut. Anda juga dapat menyimpan file OSM Anda dengan
    mengklik icon berikut ini  ![]({{site.baseurl}}/images/bi_beg_ch6_image15.png)
3.  Sekarang Anda dapat menutup JOSM dan data Anda akan tersimpan.
    Ketika Anda ingin membuka file tersebut di kemudian hari, Anda
    tinggal membuka JOSM, kemudian klik menu \<\<File\>\> dan kemudian
    klik submenu \<\<Open…\>\>

Ringkasan
---------

Sekarang setelah Anda mengetahui dan dapat melakukan editing serta
penambahan data OpenStreetMap, selanjutnya apa? Ingat, peta OSM selalu
semakin baik dari hari ke hari. Setiap saat Anda melakukan perubahan
(editing, perbaikan,  dan penambahan data) pada peta OSM,
perubahan-perubahan tersebut akan tetap dan tersimpan, dan dengan
demikian data OpenStreetMap akan selalu lebih baik dan lebih baik.
Sebagaimana Anda dapat memperbaiki pekerjaan orang lain, orang lain pun
dapat memperbaiki pekerjaan Anda.

Pada bab terakhir, kita akan meninggalkan JOSM dan melihat beberapa
project yang menggunakan data OpenStreetMap, kemudian belajar bagaimana
Anda dapat mempelajari OSM lebih lanjut.


