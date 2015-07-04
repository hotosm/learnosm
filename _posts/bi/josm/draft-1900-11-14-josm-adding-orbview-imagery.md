---
layout: doc
title: Menambahkan Citra Satelit ke JOSM
permalink: /bi/josm/adding-orbview-imagery-in-josm/
lang: bi
category: josm
---

# ORBVIEW 3: Menambahkan Citra Satelit ke JOSM

## Pengantar

Terkadang hal ini sulit untuk mendigitasi atau menggambar bangunan dan
jalan di JOSM karena citra BING tidak jelas-- baik dari resolusi rendah
atau tertutup awan. Masalah ini dapat diatasi dengan menggunakan citra
Public Domain. Agar pengguna Windows dapat mengimport citra di JOSM kita 
perlu menambahkan memori yang lebih besar. Dalam bab ini, kita akan 
belajar bagaimana mendownload citra Orbview gratis dan menggunakannya di 
JOSM:

I. Menambah Memori JOSM 

​II. Download Citra ORBVIEW 

​III. Menambah Citra melalui Plugin ¨ImportImage¨

## Menambah Memori JOSM

Sebelum menggunakan Citra Orbview di JOSM, maka perlu menambahkan memori.
Jika hal ini tidak dilakukan, kemudian Anda mungkin berakhir dengan
pesan kesalahan seperti ini:

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image13.png)

Tampilan layar yang muncul karena memori tidak cukup di JOSM

Hal ini terjadi karena memori yang dialokasikan untuk JOSM terbatas 
hanya 494 MB. Untuk menambahkan citra Anda perlu lebih banyak memori
dari jumlah memori sebelumnya. Ini cukup sulit, namun kita akan menambah
memori di JOSM:

1.	Carilah file bernama "josm-tested.jar" di program file \> JOSM\>
	"josm-tested.jar" atau "josm-latest.jar" (Pada beberapa komputer mungkin
	bernama "josm-latest.jar" karena Anda telah menginstal edisi terbaru JOSM).

	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image18.png)

	Carilah Executable Jar File bernama Josm-tested.jar atau Josm-latest.jar
	
2.	Membuat shortcut untuk file "josm-tested.jar" dengan klik kanan kemudian
	pilih ¨create shortcut¨. Geser shortcut ke desktop.
	
3.	Selanjutnya, cari lokasi "java.exe" dengan mengetik "Java" di Menu Start,
	klik kanan \> Open File Location

	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image12.png)

	Jika Anda tidak dapat menemukannya menggunakan metode di atas, kemudian 
	Anda dapat pergi ke **C: \\ Windows \\ System32**  untuk menemukan file 
	java.exe:

	![]({{site.baseurl}}/images/en/en_int_ch3_image21.png)

4.	Klik kanan pada shortcut "josm-tested" di desktop Anda \> klik
	Properties.

5.	Pada pilihan "target" ketik **C: \\ WINDOWS \\ system32 \\ java.exe
	[spasi]-jar [spasi]-Xmx1g [spasi]"C: \\ Program Files \\ JOSM \\
	josm-tested.jar"** (Catatan: [spasi] dimaksudkan spasi. Selain itu,
	Anda perlu mengetikan "josm-latest.jar" bukan "josm-tested.jar".)

	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image16.png)

6.	Jika Anda berhasil, aplikasiJOSM akan muncul pada layar Anda dengan
	Command line di latar belakang: 
	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image23.png)
	
	Ini adalah tampilan yang Anda harus dapatkan untuk mengindikasikan
	bahwa Anda telah berhasil menambahkan lebih banyak memori ke JOSM.
	
Anda telah berhasil menambahkan lebih banyak memori ke JOSM.
	
## Download Citra OrbView-3 

OrbView 3, diluncurkan pada tahun 2003 oleh ORIMAGE, diperoleh hingga
210,000 km2 citra per hari sampai April 23, 2007. Saat ini, database
citra yang ditemukan di situs USGS earth explorer. Gambar pankromatik
(hitam dan putih) memiliki resolusi spasial 1 meter, sedangkan gambar 
multi-spektral memiliki resolusi 4 meter (sebagian besar waktu ini 
tidak ditawarkan). Gambar-gambar yang diambil pada ketinggian 470 km.
Meskipun citra Orbview 3 sudah lama (2003 -2007), gambar tersebut memiliki
resolusi yang baik, oleh karena itu masih bermanfaat untuk melacak jalan dan
mendapatkan ide dasar dari infrastruktur di suatu area.

### A. Pengaturan Akun

Kunjungi [http://earthexplorer.usgs.gov/](http://earthexplorer.usgs.gov/) dan 
membuat akun. Klik tombol ¨Register¨ di bagian atas kanan.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image19.png)

Anda akan diminta untuk mengisi informasi mengenai akun pengguna Anda. 
Isi informasi yang diperlukan: **User Affiliation, Address, and Confirmation**.
Pada jendela login pertama, Anda harus memasukkan nama pengguna dan
kata sandi yang akan digunakan untuk login ketika menggunakan USGS:

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image08.png)

Isi informasi, seperti tujuan menggunakan citra dari USGS. USGS tertarik
mendapatkan informasi mengenai jenis pengguna yang menggunakan citra
mereka dan tujuannya untuk apa. Anda dapat mengisi jawaban seperti
di bawah jika Anda bingung:

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image00.png)

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image04.png)

Selanjutnya, isi data pribadi Anda seperti nama, alamat, email dan nomor 
telepon. Setelah Anda menglengkapi langkah ini Anda akan berhasil
terdaftar!

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image14.png)

### B.	Download Citra

1.	Setelah Anda log in menggunakan akun Anda, Anda boleh memulai proses
	mendownload citra di wilayah yang Anda inginkan. Anda dapat mencari
	lokasi melalui **Search box** di bagian kiri atau dengan mouse Anda
	di dalam peta. Jika terjadi suatu kesalahan, klik ¨clear criteria¨
	di panel kanan. Clear criteria akan menghapus area yang Anda pilih
	sehingga Anda dapat memilih kembali area yang diinginkan.

	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image17.png)

2.	Setelah Anda menemukan area yang Anda inginkan dan telah diperbesar,
	Anda dapat memilih area untuk mengeksport dengan empat atau lebih klik
	mouse. Anda dapat menghapus titik yang terpilih dengan mengklik pada ¨X¨
	berwarna merah oleh titik pada kolom bagian kiri. Ketika area terpilih,
	klik pada ¨Data Sets¨ yang terletak di kotak kiri bawah.

	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image02.png)

 	> Database ini mengeksport tile citra dan semua tile yang termasuk dalam
	pilihan Anda akan didownload. Setiap tile sekitar 10 - 11 MB. Pastikan 
	bahwa Anda ringkas dengan pilihan Anda karena ini memerlukan beberapa
	saat untuk mendownload.

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image06.png)

 	> Daftar beberapa penyedia gambar akan muncul. Kita akan memilih citra
	pada Public Domain, ini merupakan lisensi yang sesuai dengan OpenStreetMap.
	Pilih OrbView 3 dan klik Results.
	

3. 	Hasilnya, beberapa citra OrbView 3 akan muncul di kolom sebelah kiri. 
	Pilih citra yang paling sesuai dengan area yang akan Anda edit.

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image09.png)

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image22.png)

 	Di kolom kiri terdapat beberapa menu untuk melihat citra OrbView 3, yaitu:

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image15.png)

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image11.png)

4.	Ketika Anda telah memilih satu atau lebih citra untuk didownload, Anda 
	harus memilih format download. **GIS Ready Bundle** adalah paling bermanfaat
	untuk tujuan kita. (Yang lain terlalu besar atau belum digeoreferensi).
	Klik ¨Select Download Option¨.
 
 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image05.png)

5.	Setelah citra didownload, ekstrak file-file ke folder. Anda akan
	mendapatkan tiga file seperti ini:

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image07.png)
	
	Anda telah berhasil mendownload citra dan sekarang kita akan menambahkan
	citra ke JOSM.S

## Menggunakan plug-in "Import Image" di JOSM

### A.  Download Plug-in.

Untuk membuka citra di JOSM Anda perlu mendownload plugin "Import Image". Buka
JOSM, klik Edit → Preferences  → Plugin → ImportImagePlugin. Kemudian klik OK
dan restart JOSM.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image03.png)

### B. Mengubah pengaturan. Setelah JOSM di-restart Anda perlu mengatur 
koordinat dalam UTM untuk mencocokan citra yang didownload. Kembali ke
Menu Preferences dan pilih kotak Presets (di bawah gambar globe) →  Map
projection → OK. Anda tidak perlu merestart JOSM.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image20.png)

> Jika Anda tidak yakin pada sistem koordinat, Anda dapat menentukan koordinat
citra yang Anda download di QGIS. Di QGIS, klik kanan pada layer untuk 
mendapatkan menu Properties. Setelah di menu Properties Anda seharusnya 
dapat menentukan sistem koordinat.

Setelah citra diproyeksi dengan benar, Anda sekarang dapat membuka citra
di JOSM. Klik File → Import Image dan buka file yang didownload. Anda 
seharusnya menemukan tiga file dalam folder yang diekstrak (.rar). Anda
ingin memilih .jpg.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image07.png)

Tunggu hingga citra terbuka di JOSM. Citra OrbView adalah pankromatik, 
sehingga berwana hitam dan putih. Jalan, sungai, vegetasi dan bangunan
tetap dapat terlihat.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image01.png)

Setelah citra mucul, kemudian klik "Download From OSM" dan Anda dapat 
memulai untuk mengedit datanya. Diharapkan, dengan citra baru Anda 
dapat mendijitasi wilayah yang belum dipetakan atau memperbaiki data
yang ada.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image10.png)

Kapan saja Anda dapat mengedit di JOSM, setelah Anda mengedit, upload
perubahan Anda dengan mengklik File → Upload Data.

## Ringkasan

Selamat! Anda sekarang seharusnya dapat menambahka citra satelit menggunakan
plugin ¨ImportImage¨. Pada panduan ini kita menggunakan citra gratis dari
OrbView 3, tetapi plugin dapat mengizinkan kita menggunakan citra public
domain yang lain.

Pengingat Terakhir:

1.	Anda tidak dapat mengimport citra satelit komersial, seperti citra Google
Earth, ke OpenStreetMap. Jika Anda bekerja dengan citra satelit silahkan 
membaca syarat dan ketentuan terlebih dulu. Hal ini tidak legal untuk mengcopy
peta komersial atau lainnya ke dalam OpenStreetMap.

2.	Citra satelit harus memiliki file koordinat atau informasi koordinat. 
Pastikan untuk mengetahui koordinat citra satelit (proyeksi peta) yang Anda 
gunakan dan sesuaikan dengan pengaturan Anda di JOSM.

3.	Jika Anda ingin kembali menggunakan Citra Bing, pastika pengaturan proyeksi
peta dikembalikan ke **Mercator WGS 84**.
