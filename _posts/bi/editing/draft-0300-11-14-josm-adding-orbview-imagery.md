---
layout: doc
title: Menambahkan Citra Satelit ke JOSM
permalink: /bi/editing/adding-orbview-imagery-in-josm/
lang: bi
category: editing
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

 	> This database exports imagery tiles and so all of the tiles that
 	are included in your selection will be downloaded.  Each tile is about
 	10 to 11 MB.  Make sure that you are concise with your selection because
 	it may take awhile to download.

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image06.png)

 	> A list of several image providers will pop up.  We will chose
 	imagery in the Public Domain, which is a license that corresponds with
 	OpenstreetMap.  Select OrbView 3 and click Results

3. As a result, a few OrbView 3 images will appear in the left column.
 	Choose the image that best fits the area you are editing.

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image09.png)

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image22.png)

 	In the left column there are several menus to view OrbView 3 images,
 	namely:

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image15.png)

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image11.png)

4. When you have selected one or more images to download, you must
 	choose a download format.  The **GIS Ready Bundle** is the most useful for
 	our purpose.   (The others are too large or are not georeferenced).
	Click ¨Select Download Option¨.

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image05.png)

5. Once the image(s) have downloaded, extract the files to a folder.
 	You should get three files like this:

 	![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image07.png)

 	You have successfully downloaded the imagery and now we will go through
 	adding that imagery to JOSM.

## Using the "Import Image" plug-in in JOSM

### A.  Download the Plug-in.

To open the imagery in JOSM you need to download the plugin
"ImportImagePlugin". Open JOSM, click Edit → Preferences  → Plugin →
ImportImagePlugin.  Then click OK and restart JOSM.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image03.png)

### B. Change the settings. Once JOSM restarts you will need to set the
coordinates in UTM to match the downloaded image.  Go back into the
Preferences Menu and Select the Presets box (below image globe) →  Map
projection → OK.  You do not need to restart JOSM.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image20.png)

> If you are unsure of the coordinate system, you can determine the
coordinates of the image you downloaded in QGIS.  In QGIS, right click
on the layer to get to the Properties menu.  Once in the Property menu
you should be able to decipher the coordinate system.

 Once the image is properly projected, you can now open the image in
JOSM.  Click File → Import Image and open the file you recently
downloaded.  You should find three files in the extracted folder (.rar).
 You want to chose the .jpg.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image07.png)

Wait until the image opens in JOSM. OrbView imagery is panchromatic, so
it is black and white.  Roads, rivers, vegetation and buildings can
still be seen.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image01.png)

Once the imagery is up, then you simply click "Download From OSM" and
you can begin editing the data.  Hopefully, with the new imagery you
will be able to digitize uncharted territory or improve existing data.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch3_image10.png)

Like anytime you edit in JOSM, after you have edited, upload your
changes by clicking File → Upload Data.

## Summary

Congratulations! You should now be able to add satellite imagery using
the ¨ImportImage¨ plugin.  In this guide we used free images from
Orbview 3, but  the plugin can allow any other  public domain imagery.

Final Reminders:

​1. You cannot import commercial satellite imagery, such as Google Earth
Imagery, to OpenstreetMap.  If you work with satellite imagery please
read the terms and conditions beforehand. It is not legal to copy
commercial or other maps onto OpenstreetMap.

​2. Satellite images must have coordinate files or coordinate
information. Be sure to know the coordinates of the satellite imagery
(map projection) you are using and adjust your settings in JOSM.

​3. If you wish to return to using Bing Imagery, make sure the map
projection settings are returned to **Mercator WGS 84**.
