---
layout: doc
title: Menyelesaikan Konflik
permalink: /bi/josm/conflict-resolution/
lang: bi
category: josm
---

Pengantar 
==========
Terkadang ketika Anda sedang bekerja di JOSM dan ketika Anda mengupload peta yang telah diedit, Anda mendapatkan pesan seperti ini:

![conflict detected][]

Apa yang terjadi apabila Anda mendownload sekumpulan data, berisi sebuah titik yang kita sebut Node A. Kemudian selama Anda mengedit, orang lain juga mendownload Node A, mengubahnya,
dan menyimpan perubahannya kembali di OpeStreetMap. Sekarang Anda mencoba untuk mengupload versi Node A Anda, ini berbeda dengan yang disimpan pada OSM. Oleh karena itu JOSM
tidak tahu versi mana Node A yang harus disimpan.

Konflik
--------
Meskipun begitu, JOSM dapat mendeteksi beberapa konflik yang terjadi, dan Anda akan menemukan pesan seperti ini:

![resolved automatically][]

Ini berarti JOSM secara otomatis memutuskan bahwa objek-objek pada set data lokal Anda tidak akan diupload ke server utama karena mereka telah dihapus terlebih dahulu oleh pengguna yang lain.

Dalam beberapa konflik, tidak ada cara yang mudah untuk JOSM mengatasinya dan keputusan sesuai dengan pengguna untuk menentukan kebutuhan yang terbaik. 

*	Ini menunjukkan Anda harus melihat semua konflik Anda pada Layer 1 di kotak **Dialog List**:
![warning unresolved][]

*	Jendela ini menyediakan sebuah peringatan yang kemungkinan akan Anda hadapi ketika konflik editing terjadi. Jika Anda memeriksa pada server Anda mampu untuk memperbaiki masalah 
	editing yang akan muncul:
![check on server][]

*	Peringatan ini menunjukan bahwa JOSM gagal untuk menghapus sebuah node karena node tersebut masih terhubung dengan sebuah garis. Untuk mengatasi hal ini, pengguna harus kembali ke
	JOSM dan menyelesaikan konflik sebelum melakukan upload data.
![still in use][]

Menyelesaikan Konflik
----------------------

Proses menyelesaikan sebuah konflik sangat sederhana, walaupun hal ini awalnya membingungkan dalam JOSM. Dasarnya, untuk setiap konflik JOSM akan muncul dalam dua pilihan - versi  Anda dan versi server. Anda harus memilih apakah tetap menggunakan versi Anda, atau apakah menggunakan versi baru pada server.

Anda mungkin berpikir, "Tentu saja versi saya yang lebih baik!" dan mungkin Anda benar. Tetapi pikirkan kembali untuk contoh kita pada awal bab ini. Mungkin saat Anda sibuk mengedit, pembuat peta lain telah menambahkan banyak informasi pada salah satu node dalam set data Anda. Jika Anda memilih versi Anda di atas versi mereka, Anda akan kehilangan semua informasi
yang berharga yang telah mereka tambahkan. Oleh karena itu Anda harus mempertimbangkan menjaga versi mereka, atau menggabungkannya dengan versi Anda. 

*	Kemudian akan muncul jendela konflik, yang terbaik adalah memilih tombol “Synchronize ... only.” Anda mungkin perlu melakukan ini untuk lebih dari satu objek, tetapi yang terbaik 
	adalah menyelesaikan konflik satu per satu. 
	
![synchronize node][]

Setelah Anda mengklik tombol ini, Anda akan mendapatkan sebuah jendela yang menrinci konflik Anda. Pesan kesalahan meungkin terlihat rumit, tetapi ini terlihat sederhana. Anda 
akan mengetahui jenis konflik apa yang Anda miliki dengan simbol kotak berwarna merah pada tab bagian atas. Konflik pada contoh ini mengacu pada properti, seperti lokasi dan objek 
yang ada. Inilah sebabnya kenapa koordinat dan status keberadaan dihapus.

**Jenis Konflik:**

*	**Properties:** Objek yang telah dipindahkan (koordinat) atau dihapus
*	**Tags:** Tags tidak sesuai
*	**Nodes:** Terdapat perbedaan pada daftar nodes dalam dua garis
*	**Members:** Terdapat perbedaan pada daftar anggota dalam sebuah relasi

![properties with conflicts][]

Konflik hanya muncul dengan dua editan yang berbeda pada saat bersamaan. Jika terdapat tiga atau lebih konflik, kemudian rantai konflik akan muncul. Oleh karena itu Anda harus memilih atau menggabungkan dengan hanya dua konflik pada saat bersamaan. Anda dapat memilih versi Anda, atau versi lain, pada saat bersamaan, menggabungkan keduanya.

*	Pada contoh ini Anda tidak memiliki pilihan menggabungkan. Klik pada kolom pertama, atau versi Anda jika Anda percaya bahwa perubahan Anda adalah benar. Klik pada version mereka 
	jika Anda berpikir bahwa perubahan lain adalah lebih baik. 

![conflicts resolved][]

*	Setelah Anda memilih versi mana yang Anda anggap lebih baik, kemudian klik "Apply Resolution". Beberapa jendela lebih akan muncul dan Anda dapat mengupload editan Anda.
*	Lakukan editing lebih lanjut. Kemudian klik 'Upload'. Anda akan melihat jendela yang mengatakan:

![command stack][]

*	Pada menu Windows Anda memiliki sebuah Dialog Daftar zkonflik. Jendela ini menampilkan sebuah daftar konflik. Jumlah konflik yang belum terselesaikan secara keseluruhan yang 
	ditampilkan pada header. Anda dapat memilih atau menyelesaikan sebuah konflik dengan mengklik pada konflik tersebut. Ini bermanfaat ketika Anda memiliki banyak konflik.
	
![one unresolved][]

*	Anda tidak dapat mengupload perubahan Anda hingga daftar ini kosong.

Cara Menghindari Konflik
-------------------------
### Upload Secara Rutin
Untuk meminimalkan kesempatan dan jumlah konflik adalah sangat penting untuk menguload editan Anda secara rutin. Konflik muncul lebih sering untuk mereka yang mengedit seluruh wilayahnya terlebih dahulu dan menunda untuk menguploadnya. Hal yang terbaik adalah, download wilayah yang anda kerjakan, edit, kemudian upload secepatnya secara berkala.
Semakin lama Anda mendownload data dan mengupload perubahan untuk data itu, semakin besar kemungkinan seseorang telah mengedit sesuatu untuk sementara itu.

### Edit pada Area yang Anda Download
Mengedit pada area tertentu yang telah Anda download meminimalkan resiko konflik. Pastikan Anda tidak mengedit diluar area yang Anda telah download. Anda dapat dengan mudah 
melihat area diluar area yang Anda download pada JOSM, kerena latar belakang terdiri dari garis diagonal bukan hitam solid.

![edit outside area][]

Ringkasan
---------
Ketika Anda mengedit pada JOSM, Anda memiliki resiko berhadapan dengan konflik. Konflik terjadi apabila sebuah objek yang telah diedit oleh dua orang pada saat yang bersamaan 
Ketika anda mengedit di JOSM, dimana anda mendownload salinan dari peta OSM, anda memiliki resiko berhadapan dengan konflik. Konflik terjadi apabila sebuah obyek atau lebih diedit oleh dua orang atau lebih pada saat yang sama. Dengan memahami apa itu konflik dan bagaimana menghadapinya, Anda dapat memastikan bahwa kemungkinan editan terbaik disimpan ke OpenStreetMp.


[conflict detected]: /images/en/editing/conflict-resolution/conflict-detected.png
[resolved automatically]: /images/en/editing/conflict-resolution/resolved-automatically.png
[warning unresolved]: /images/en/editing/conflict-resolution/warning-unresolved.png
[check on server]: /images/en/editing/conflict-resolution/check-on-server.png
[still in use]: /images/en/editing/conflict-resolution/still-in-use.png
[synchronize node]: /images/en/editing/conflict-resolution/synchronize-node.png
[properties with conflicts]: /images/en/editing/conflict-resolution/properties-with-conflicts.png
[conflicts resolved]: /images/en/editing/conflict-resolution/conflicts-resolved.png
[synchronize node]: /images/en/editing/conflict-resolution/synchronize-node.png
[command stack]: /images/en/editing/conflict-resolution/command-stack.png
[one unresolved]: /images/en/editing/conflict-resolution/one-unresolved.png
[edit outside area]: /images/en/editing/conflict-resolution/edit-outside-area.png


<!-- More stuff, could go into an additional chapter -
## Lampiran. Konflik Lebih Spesifik

### Tag Konflik

Jika tag dari satu versi sebuah objek yang berbeda dari tag versi lain, dialog
Konflik menampilkan ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)
pada tab Tags. Klil pada tab untuk menampilkan dialog dalam menyelesaikan tag konflik.

Terdapat tiga tabel yang ditampilkan pada dialog ini, dari kiri ke kanan:

1.	My version: menunjukkan tag-tag dari versi objek pertama yang berpartisipasi
	dalam konflik ini. Ini biasanya tag dari versi objek dalam set data lokal Anda.
2.	Merged version: menunjukkan tag-tag yang bergabung. Tabel ini awalnya kosong.
	Semakin banyak konflik tag yang diselesaikan, semakin banyak value tag yang
	akan ditampilkan dalam tabel ini.
3.	Their version: menunjukkan tag-tag versi objek kedua yang berpartisipasi 
	dalam konflik ini. Ini biasanya tag-tag dari versi objek saat ini yang
	disimpan dalam server.
	
Pada contoh dibawah kedua versi memiliki sebuah tag "name". Value dalam 
versi objek kedua berbeda, meskipun, JOSM menunjukkan baris dengan latar
belakang merah. Value versi pertama adalah "Secondary School", versi 
yang berlawanan memiliki value "Elementary School". Anda saat ini harus
memutuskan value ini yang ingin Anda simpan dan yang ingin Anda buang.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Klik pada value yang Anda ingin simpan, misalnya untuk value di sebelah 
kiri. Jika Anda mengklik dua kali pada value atau klik pada ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png)
, Anda memutuskan untuk menyimpan value tersebut dan membuang value yang 
berlawanan. Tabel di tengah saat ini menampilkan value yang disimpan dan
warna latar belakang berubah menjadi hijau.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

Ketika tombol Apply Resolution diaktifkan Anda dapat menerapkan pilihan Anda.
Value yang Anda pilih akan diterapkan dan dialog akan ditutup.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Menyelesaikan perbedaan dalam daftar node dengan dua versi cara

Jika Anda melihat simbol ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)
pada tab Nodes kemudian Anda harus menyelesaikan perbedaan dalam daftar 
[nodes](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)dari dua
[ways](http://josm.openstreetmap.de/wiki/Help/Concepts/Object).
Terdapat tiga kolom dalam panel masing-masing (lihat gambar di bawah):

1.	Tabel paling kiri menampilkan daftar node dari versi objek lokal
2.	Tabel paling kanan menampilkan daftar node dari versi objek server
3.	Tabel di tengah menunjukkan daftar node dari gabungan cara

Awalnya, tabel tengah adalah kosong. Anda seharusnya memutuskan node yang
disimpan dari dataset lokal (tabel paling kiri) dan dari dataset server 
(tabel paling kanan).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### Alur kerja standar

Alur kerja standar untuk menyelesaikan konflik-konflik dalam daftar node dari
dua [versi objek](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)
terdiri dari tiga langkah:

1.	Pilih node dari versi objek dan menyusun ulang node yang dihasilkan daftar
	jika perlu
2.	Freeze daftar node gabungan yang dihasilkan dengan mengklik pada tombol
	![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png).
	Ketika Anda freeze daftar node gabungan Anda memberitahu JOSM bahwa semua
	konflik pada daftar node sudah diselesaikan.
3.	Aplikasikan resolusi

### Alur kerja sederhana: Simpan daftar node dari versi objek lokal Anda

Contoh berikut menunjukkan alur kerja ketika Anda memutuskan menyimpan semua
node dalam urutan yang sama dari versi objek lokal Anda.

*	Pertama, pilih semua elemen dalam tabel paling kiri (baik menggunakan mouse atau
	dengan menekan Ctrl-A dalam tabel) (lihat gambar selanjutnya):
	
	![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)
	
*	Kemudian, klik
	![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
	untuk meng-copy node yang dipilih ke tabel tengah dengan node gabungan:
	
	![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)
	
*	Terakhir, klik
	![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
	untuk mem-freeze daftar node gabungan yang dihasilkan:
	 
	![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)
	
	Simbol pada tab node sekarang diganti ke 
	![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
	dan Anda dapat menerapkan keputusan gabungan.

### Dukungan untuk membandingkan daftar node

Ini akan sulit untuk menemukan perbedaan antara daftar node dari dua versi objek, khususnya
untuk cara dengan  banyak node.

Dialog Konflik mendukung Anda dalam menemukan perbedaan. Ini dapat membandingkan dua daftar
node yang ditampilkan ("my" daftar node, daftar node gabungan, dan "their" daftar node) dan
ini dapat me-render perbedaan antara mereka dengan warna latar belakang tertentu.

Dari combo box berikut Anda dapat memilih sepasang daftar node untuk membandingkan:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.	My dengan Their: membandingkan tabel paling kiri dengan tabel paling kanan
	pada Dialog Konflik
2.	My dengan Merged: membandingkan tabel paling kiri dengan tabel tengah pada 
	Dialog Konflik
3.	Their dengan Merge: membandingkan tabel tengah dengan tabel paling kanan
	pada Dialog Konflik
	
Tergantung pada posisi sebuah node dalam daftar latar belakang yang berbeda warna
yang digunakan:

1.	Node hanya dalam daftar ini. Hal ini tidak ada dalam daftar yang berlawanan:
	![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.	Node di kedua daftar, tetapi pada posisi yang berbeda:
	![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.	Latar belakang putih artinya sebuah node dalam kedua daftar pada posisi yang
	sama.
	

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->
