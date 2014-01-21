---
layout: doc
title: Editing Tingkat Lanjut
permalink: /bi/beginner/editing-with-josm/
lang: bi
category: beginner
---

Editing Tingkat Lanjut
======================

Pada bagian sebelumnya anda telah mempelajari bagaimana untuk menggambar
titik, garis, dan bentuk dalam JOSM, bagaimana membukan waypoints dan
trek GPS dalam JOSM, dan bagaimana untuk mendownload, mengedit, dan
mengupload perubahan anda ke dalam OpenStreetMap. Pada bagian ini, kami
akan mendeskripsikan lebih dalam fitur-fitur yang terdapat dalam JOSM,
jadi anda dapat lebih maju dari alat editing yang sederhana dan
mempunyai pemahaman lebih baik dari software JOSM. Sebagai catatan bahwa
bagian ini tidak terlalu lanjut secara ekstrim, hanya selangkah lebih
tinggi daripada chapter sebelumnya. Jika anda tidak merasa belum
mengerti secara keseluruhan hal yang telah anda pelajari sebelumnya,
mungkin anda ingin berlatih sedikit terlebih dahulu sebelum melanjutkan.

Sebuah Tur dari JOSM
--------------------

![]({{site.baseurl}}/images/bi_beg_ch7_image03.png)

JOSM mempunyai banyak fitur-fitur yang berbeda. Jendela utama pada JOSM
dimana anda telah memahaminya – ini merupakan jendela peta, dan di
sinilah dimana banyak hal yang dapat dilakukan. Di sini anda dapat
melihat, mengedit, dan menambahkan data pada OpenStreetMap.

Pada bagian kanan jendela merupakan sebuah panel berseri, setiap panel
mempunyai fungsi yang berbeda. Pada umumnya ketika anda melakukan
instalasi JOSM pertama kali beberapa panel telah ditunjukan secara
standar, misalnya Layers, Properties, dan Selection. Ketika anda memilih
sebuah titik, garis, atau bentuk pada jendela peta, hal-hal tersebut
akan ditunjukan pada panel Selection. Informasi mengenai objek akan
ditunjukan pada panel Properties, dan username dari pembuat objek
tersebut akan dimunculkan dalam panel Authors.

Pada sisi kanan JOSM, terdapat beberapa toolbar, dimana terdapat banyak
tombol. Pada bagian atas bar juga terdapat beberapa tombol dimana akan
menggantikan fungsi sesuai dengan apa yang dapat anda lakukan dengan
mouse anda. Anda telah paham dengan dua tombol pertama yaitu, Select
tool dan Draw tool. Tool lainnya membuat peta semakin mudah untuk
diperbesar, menghapus objek, menggambar bentuk, atau membuat sebuah
garis menjadi terhubung secara paralel dengan garis lainnya.

Di bawah ini adalah tools dengan tombol yang lebih banyak. Tombol-tombol
ini mengontrol apa yang anda lihat pada sisi kanan dari JOSM.
Menggunakan tombol-tombol ini anda dapat membuka dan menutup box  yang
terdapat di sebelah kanan, seperti properties, selection, dan author.

Layer JOSM
----------

Bukalah sebuah file GPS dan download data dari OpenStreetMap, jika anda
belum melakukannya. Anda mungkin akan memperhatikan bahwa ketika anda
membuka sebuah file, atau menambahkan Walking Papers, atau mendownload
dari OpenStreetMap, objek lainnya akan ditambahkan pada panel Layers di
sisi kanan JOSM. Panel Layers anda mungkin akan terlihat seperti ini:

![]({{site.baseurl}}/images/bi_beg_ch7_image04.png)

Setiap objek pada daftar ini merepresentasikan sumber data berbeda yang
telah anda buka pada jendela peta. Sebagai contoh di atas, “Data Layer
2”  adalah data OpenStreetMap yang ingin kita edit. “Markers” adalah
waypoints dari GPS, dan  “30 Juni 2011.gpx”  adalah trek dari GPS. Pada
akhirnya, “Walking Papers” merupakan layer yang dibuat ketika saya
menambahkan Walking Papers milik saya dalam JOSM. Anda dapat menambah
layer citra satelit Bing, dimana akan menunjukan gambar citra satelit,
dengan mengklik “Imagery” pada bagian atas menu dari JOSM dan memilih
“Bing Sat”.

Untuk menyembunyikan salah satu layer, pilih salah satu layer dengan
mouse anda dan klik tombol Show/Hide yang terlihat seperti ini:

![]({{site.baseurl}}/images/bi_beg_ch7_image05.png)

Anda seharusnya dapat melihat bahwa layer yang anda pilih menghilang
pada jendela peta. Klik Show/Hidee lagi, dan layer tersebut akan muncul
kembali.

Anda dapat menutup sebuah layer dengan memilihnya dan menggunakan tombol
hapus:

![]({{site.baseurl}}/images/bi_beg_ch7_image06.png)

Terakhir adalah, penting untukk diketahui bahwa anda hanya dapat
melakukan editing dalam JOSM pada layer yang aktif. Jika anda tidak
dapat mengedit peta pada jendela peta anda, kemungkinan dikarenakan anda
tidak mempunyai layer aktif yang tepat. Kebanyakan layer, seperti
titik-titik GPS, Walking Papers, dan citra satelit, tidak dapat diedit.
Hanya layer berisikan data dari OpenStreetMap, dimana biasanya disebut
sebagai “Data Layer 1”.  

Untuk membuat sebuah layer menjadi aktif, pilih layer tersebut dalam
panel layer, dan klik pada tombol aktifasi:

![]({{site.baseurl}}/images/bi_beg_ch7_image07.png)

Menyimpan file OSM
------------------

Terkadang setelah anda mendownload beberapa data OSM, anda mungkin
menginginkan data tersebut disimpan agar anda dapat mengeditnya secara
offline, dan kemudian menguploadnya nanti setelah anda kembali
mendapatkan akses internet.

Untuk menyimpan sebuah file OSM, pastikan bahwa terdapat layer yang
aktif pada panel layer. Klik “File” pada menu bagian atas, dan klik
“Save”. Pilih sebuah lokasi untuk menyimpan file tersebut dan berikan
sebuah nama untuk file tersebut. Anda juga dapat menyimpannya dengan
mengklik tombol seperti ini:

![]({{site.baseurl}}/images/bi_beg_ch7_image01.png)

Sekarang anda dapat menutup JOSM dan data anda akan disimpan Ketika anda
ingin untuk membuka filenya kembali, dengan mudah buka JOSM, kemudiaan
pergi ke menu “File”, dan klik “Open…”

Tools Tambahan untuk Menggambar Peta
------------------------------------

JOSM mempunyai tools tambahan untuk membuatnya semakin mudah menggambar
garis dan bentuk. Tools ini dapat ditemukan pada menu “Tools” di bagian
atas JOSM.

![]({{site.baseurl}}/images/bi_beg_ch7_image00.png)

Untuk mengaplikasikan fungsi pada menu ini, pertama kali anda harus
memilih sebuah titik, garis, atau bentuk pada jendela peta. Beberapa
fungsi yang berguna dideskripsikan sebagai berikut:

Split Way – Ini memungkinkan anda untuk memisahkan sebuah garis menjadi
dua buah garis yang berbeda. Fungsi ini sangat berguna jika anda ingin
menambahkan informasi berbeda pada bagian jalan yang berbeda. Untuk
menggunakan fungsi ini, pilih sebuah titik pada pertengahan garis yang
anda ingin pisahkan, pilih Split Way dari menu Tools, dan seharusnya
garis anda akan terpisah menjadi dua bagian.

Combine Way – Fungsi ini merupakan kebalikan dari Split Way. Untuk
menggabungkan dua garis menjadi satu garis, mereka harus berbagi dengan
satu titik. Untuk menggunakan fungsi ini, pilih kedua garis yang ingin
anda gabungkan. Anda dapat memilih lebih dari satu objek dengan menahan
tombol SHIFT pada keyboardd dan mengklik pada setiap garis yang akan
digabungkan.  Ketika anda telah memilih kedua garis, pilih Combine Way
dari menu Tools.

Reverse Way – Fungsi ini akan merubah arah dari sebuah garis. Jika garis
yang anda buat merepresentasikan sebuah jalan satu jalur, mungkin anda
ingin merubah arahnya. Pada kasus lainnya, biasanya arah tidak terlalu
penting.

Simplify Way – Jika garis anda memiliki terlalu banyak titik dan anda
ingin membuatnya lebih sederhana, fungsi ini akan menghilangkan beberapa
titik dari sebuah garis.

Align Nodes in Circle – Jika anda ingin membuat sebuah bentuk lingkaran,
gambarkan lingkaran semampu anda kemudian pilih fungsi ini. Fungsi ini
akan membantu untuk menyusun titik titik anda ke dalam sebuah lingkaran.

Align Nodes in Line – Fungsi ini akan mengatur suatu seri dari
titik-titik menjadi sebuah garis lurus.

Orthogonalize Shape – Fungsi ini sangat berguna untuk menggambar
bangunan. Setelah anda menggambar sebuah bangunan, fungsi ini akan
membentuk bangunan tersebut sehingga memiliki setiap sudut memiliki
sudut 90 derajat.

Tags
----

Ketika anda menggambar sebuah titik, garis, atau bentuk, objek-objek
tersebut akan dibuat dengan sebuah lokasi, tetapi belum mempunyai
informasi yang menggambarkan apa objek tersebut. Dengan kata lain, kita
tahun dimana objek tersebut, tetapi tidak tahu apa objek tersebut.
Sebelumnya, kita telah menggunakan objek dari menu Presets untuk
mendefinisikan objek apakah itu.

Cara OpeStreetMap mengetahui sebuah objek adalah menggunakan tags.
Sebuah tag seperti sebuah label dimana anda dapat meletakannya pada
sesuatu. Sebagai contoh, jika saya menggambar sebuah persegi, objek itu
hanya persegi. Tetapi kemudian, saya menambahkan beberapa tag pada
persegi tersebut untuk mendeskripsikan persegi tersebut:

Persegi ini adalah bangunan

Nama bangunan ini adalah “Menara Thamrin”

Bangunan ini memiliki ketinggian 16 tingkat

Anda dapat menambahkan tag pada sebuah objek sebanyak yang anda
inginkan. Tags disimpan sebagai teks yang berpasangan, disebut keys dan
values. Pada OpenStreetMap, tag di atas akan tertulis sebagai berikut:

bangunan = ya

nama = Menara Thamrin

bangunan:tingkat = 16

Jika anda memilih sebuah objek dalam JOSM, anda dapat melihat semua tag
yang terlampir pada panel Properties di sebelah kanan.

![]({{site.baseurl}}/images/bi_beg_ch7_image02.png)

Anda dapat menambah, mengedit, dan menghapus tag yang ada dari panel
ini. Tag ini pada umumnya berbahasa Inggris, bagaimanapun terkadang
lebih baik menggunakan menu Presets.

Jalan Pintas pada Keyboard
--------------------------

Terkadang anda bisa menjadi pusing untuk mengklik lagi dan lagi untuk
memilih berbagai pilihan dan menu yang berbeda dalam JOSM. Untungnya
dalam JOSM terdapat jalan pintas (shortcut) pada keyboard yang
memungkinkan anda untuk melakukan hal-hal umum. Di bawah ini adalah
sebuah daftar dari jalan pintas pada keyboard beserta fungsinya yang
pada umumnya digunakan:

s – Memilih Select tool

a - Memilih Draw tool

z – Memilih Zoom tool

+ (plus) - Perbesar

- (minus) - Perkecil

p - Split Way (memisahkan gariss)

c - Combine Way (menggabungkan garis)

o - Align in Circle (mengatur titik-titik berseri menjadi sebuah
lingkaran)

l - Align in line (mengatur suatu seri dari titik-titik menjadi sebuah
garis lurus)

q - Orthogonalize (membuat bentuk menjadi sebuah persegi)

Ringkasan
=========

Sebagaimana yang anda lihat, bahwa terdapat banyak fitur-fitur tambahan
yang membuat JOSM menjadi sebuah alat yang kuat untuk membuat peta.
Ingat, semakin anda berlatih dengan tools ini, anda akan semakin baik
dalam menambahkan informasi ke OpenStreetMap.

Pada chapter terakhir kita tidak akan membahas JOSM, tetapi lebih melhat
pada proyek-proyek menarik yang menggunakan data OpenStreetMap, serta
mempelajari bagaimana anda dapat mempelajari tentang OSM secara terus
menerus.
