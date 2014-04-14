---
layout: doc
title: Penjaminan Kualitas
permalink: /bi/coordination/quality-assurance/
lang: bi
category: coordination
---

# Penjaminan Kualitas

## Pengantar

Berkontribusi di OpenStreetMap merupakan hal yang mudah untuk dipelajari,
namun sulit untuk dikuasai. Setiap orang melakukan kesalahan, tetapi 
sebuah sistem bekerja karena ketika seseorang melakukan suatu "kesalahan",
selalu ada pembuat peta lain yang siap membantu dan memperbaiki kesalahan.
Seiring Anda melakukan pemetaan secara terus menerus, ini hal tersebut akan
menjadi lebih mudah, dan Anda akan mengerti cara yang "tepat" untuk melakukan
pemetaan. Bab ini ditujukan untuk membantu Anda memberikan kontribusi yang 
lebih baik. Kita akan memulai dari mendiskusikan berbagai macam teknik mengedit
di JOSM yang akan membuat Anda bekerja lebih baik, dan mengerti kesalahan umum 
yang sering dibuat pada awal pemetaan. Kita akan mendiskusikan alat validasi 
JOSM dimana merupakan cara otomatis untuk mengecek kesalahan pada data OpenStreetMap.
Terakhir, kita akan membahas Tasking Manager HOT, merupakan sebuah tool dimana
pembuat peta dapat menggunakan untuk mengurutkan sebuah area di dalam grid,
dan bekerja bersama-sama untuk memetakan sebuah area dengan cara yang 
terorganisir.

Menggambar peta Anda dengan tepat pertama kali akan menghemat banyak waktu
nantinya!

![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image10.png)

*Peringatan ini menyatakan bahwa terdapat data yang mencurigakan dalam
editan Anda dan Anda harus meninjau kesalahan tertentu, peringatan dan 
kemungkinan salah entri. Jendela ini adalah metode OSM yang membuat kualitas
data menjadi lebih baik dan menyingkirkan objek yang tidak diberi tag, overlap,
dan tidak lenkap.*

## Tool Validasi

JOSM hadir dengan alat yang berfungsi untuk menganalisis secara otomatis kesalahan
yang ada. Hal ini sangat membantu untuk menemukan kesalahan yang tidak terlihat
oleh Anda. Ketika Anda menjalankan alat validasi ini, alat ini akan menghasilkan
2 jenis masalah:

*	**Kesalahan (Error)**: Kesalahan jenis ini merupakan kesalahan yang penting
	untuk diperbaiki dan oleh karena itu Anda seharusnya tidak mengabaikan. Salah 
	satu contoh dari error ini adalah objek yang terduplikasi atau garis dan poligon
	yang saling bertumpang tindih.
*	**Peringatan (Warning)**: kesalahan jenis ini merupakan kesalahan yang penting
	untuk diperbaiki namun pada beberapa kasus hal tersebut bisa ditoleransi.

 
Satu hal yang perlu diperhatikan jika Anda mendownload area yang besar dan menjalankan
alat validasi, Anda mungkin akan mendapatkan daftar kesalahan dan peringatan yang sangat
panjang. Hal ini dikarenakan alat validasi ini bekerja pada seluruh peta, tidak hanya 
perubahan yang telah anda buat. Sehingga Anda mungkin akan melihat kesalahan yang dibuat
oleh orang lain dan Anda bisa memperbaikinya atau menghiraukannya. Akan tetapi alat 
validasi memberikan Anda kesempatan untuk melihat kesalahan satu persatu.

Mari kita lihat bagaimana cara menggunakan alat validasi:

1.	Pada JOSM, download satu daerah pada peta.
2.	Jika Anda tidak melihat jendela “Validation Results” pada penel bagian kanan, klik 
	pada tanda centang warna biru di bagian kiri untuk memunculkannya.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image15.png)

3.	Pastikan bahwa tidak ada bagian pada peta yang dipilih. Jika Anda menjalankan 
	alat validasi dengan sesuatu yang dipilih, hal tersebut hanya akan memvalidasi 
	daerah yang Anda pilih, dan tidak seluruh peta.
4.	Arahkan mouse Anda pada jendela validasi dan klik “Validation.”

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image16.png)

5.	Peta tersebut akan berubah dan segala macam peringatan akan terlihat berwarna 
	kuning dan untuk kesalahan berwarna merah. Pada jendela “Validation Results” Anda
	akan melihat daftar peringatan dan kesalahan, jika ada.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image12.png)

6.	Kesalahan harus seluruhnya diperbaiki. Anda dapat memperbesar di daerah
	yang terdapat kesalahan dengan cara klik kanan pada kesalahn pada jendela
	tersebut dan kemudian pilihlah “Zoom to Problem”. Setelah itu Anda bisa 
	memperbaiki kesalahan tersebut secara manual.
7.	Beberapa kesalahan dapat diperbaiki secara otomatis, seperti kesalahan “Duplicated nodes”.
	Anda dapat melihat pada folder untuk beberapa tipe error dan memilih tombol “Fix” 
	pada jendela tersebut. Beberapa error membutuhkan untuk diperiksa secara manual.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image07.png)

8.	Biasanya terdapat lebih banyak Peringatan daripada Kesalahan. Dengan memberikan 
	peringatan, JOSM memberitahukan Anda bahwa hal tersebut kemungkinan kesalahan, 
	tapi tidak selalu. Sehingga Anda akan menggunakan keputusan anda untuk melihat 
	apakah hal tersebut merupakan kesalahan atau bukan.
9.	Jika Anda memilih salah satu peringatan dari daftar dan memutuskan bahwa hal tersebut
	bukanlah masalah, klik “Ignore” dan peringatan tersebut akan di hapus dari daftar.
10.	Anda dapat menjalankan ulang alat validasi sewaktu-waktu dengan mengklik “Validation”


### Peringatan Umum

*	**Jalan yang tidak tertutup**– Merupakan garis yang tidak membentuk sebuah poligon.
	Contoh umumnya adalah gedung dimana titik pertama tidak bertemu dengan titik akhir

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image04.png)

	Untuk menyelesaikan masalah ini, pilih kedua titik dan pilih "Tools" -\> “Merge Node” 
	untuk menyambung kedua titik tersebut.

*	**Bangunan yang bertampalan** (Overlapping Buildings) – merupakan gedung yang saling 
	bertumpang tindih satu sama lain.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image17.png)

	Untuk menyelesaikan masalah ini, gerakkan titik dari salah satu gedung ke arah luar 
	dari gedung lain.

*	**Node atau jalan yang belum memiliki tag** - Jika seseorang menggambar titik atau
	garis tetapi lupa untuk memberikan beberapa tag, kemudian titik atau garis yang 
	digambar menjadi tidak berguna, karena itu tidak memiliki arti. 

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image05.png)
	
	Untuk menyelesaikan ini, pilih objek yang tidak mempunyai tag dan masukkan presets
	yang sesuai, atau hapus itu jika merupakan kesalahan.

*	**Titik garis akhir berdekatan dengan garis lain** – Jika sebuah garis terletak 
	sangat dekat dengan garis lain namun tidak terhubung, akan menimbulkan peringatan. 
	Hal ini bisa saja tidak penting akan tetapi membantu untuk mencari percabangan
	jalan yang seharusnya tersambung tetapi pada kenyataannya tidak.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image01.png)

*	**Garis yang saling berpotongan** – Merupakan peringatan yang muncul akibat jalur
	berpotongan. Sebuah garis yang berpotongan dengan garis lain tanpa tersambung dapat
	memunculkan peringatan. Hal ini juga bisa saja tidak menjadi masalah, karena jalur
	yang berpotongan bisa saja disengaja, seperti pada kasus jembatan, atau jalan dan 
	sungai yang berpotongan dengan poligon landuse. Hal ini terkadang membantu, u
	ntuk menemukan kesalahan.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image14.png)

OpenStreetMap bergantung pada orang yang memperbaiki dan mengedit kesalahan. Editing
dan validasi data penting untuk meningkatkan peta. Jika anda tidak mendapatkan cukup
waktu untuk survei ke lapangan dengan GPS atau mendigitasi citra, validasi objek dan
atribut data merupakan cara terbaik untuk berkontribusi.

## Tasking Manager

Terkadang penjaminan kualitas lebih berbicara mengenai mengupload dengan baik, 
dan data bersih. Salah satu tantangannya adalah mengkoordinasikan field dan/atau
pekerja bekerja jarak jauh untuk memetakan sebuah area secara bersama-sama.
Dalam hal kualitas data dan dalam hal kelengkapan. Untuk membantu mengatasi
hal ini, HOT telah mengembangkan Tasking Tool OpenStreetMap membuatnya lebih
mudah bagi administrator untuk mendefinisikan area pemetaan yang diinginkan
dan mendelegasikan pekerja. Ide dibalik tool ini adalah jika terdapat area,
kita sebut saja kota, yang ingin kita petakan, dan kita memiliki beberapa
orang untuk memetakan pada permukaan, dan beberapa orang memetakan dengan
jarak jauh menggunakan citra satelit, tool ini akan memungkinkan kita
membuat sebuah grid dari keseluruhan area. Kolaborator dapat memilih blok 
dalam grid yang mereka petakan, dan ketika mereka telah menyelesaikannya,
mereka dapat menandai area tersebut dengan lengkap. Dengan cara ini sebuah
tim terdiri dari banyak orang dapat berkoordinasi memetakan seluruh grid.

Untuk melihat bagaimana tasking manager bekerja, marilah kita lihat lebih dekat

1.	Buka lah browser internet Anda dan buka situs [tasks.hotosm.org](http://tasks.hotosm.org).
	Anda akan melihat sebuah halaman seperti ini: 

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image02.png)

2.	Klik “Log in using your OpenStreetMap account \>\>”
3.	Disini Anda menyetujui untuk mengizinkan aplikasi ini mengakses akun OpenStreetMap.
	Klik “Save Changes.”

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image08.png)

4.	Sekarang Anda akan melihat sebuah daftar berisi proyek-proyek yang sedang ada saat ini.
	Pada daftar tersebut berisi proyek-proyek dari negara-negara berbeda dimana mereka
	melakukan koordinasi untuk melakukan pemetaan.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image11.png)

5.	Klik pada salah satu proyek untuk melihat informasi lebih lanjut mengenai ini.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image06.png)

6.	Halaman ini menunjukkan semua hal yang Anda perlu ketahui mengenai proyek tersebut.
	Pada sebelah sisi kiri halaman adalah sebuah deskripsi dari proyek pemetaan tersebut
	dan bagaimana mengaturnya. Anda dapat klik pada tab-tab yang ada untuk melihat 
	informasi tebih lanjut. Pada sisi kanan terdapat sebuah grid yang menunjukkan 
	area yang sedang dipetakan. Kotak grid yang berwarna merah telah selesai dipetakan,
	kotak berwarna hijau telah selesai dipetakan dan telah dilakukan pengecekan oleh
	orang lain dan divalidasi datanya, kotak dengan pinggiran berwarna kuning berarti 
	sedang ada orang lain yang mengerjakan peta pada area tersebut, sedangkan kotak
	kosong lainnya belum ada atau belum selesai dipetakan. Anda dapat klik pada tab 
	“Workflow”, disitu Anda akan mendapat informasi atau instruksi  mengenai bagaimana 
	Anda dapat membantu melakukan pemetaan pada area tersebut. Dengan melakukan klik pada
	“Task,” Anda dapat mengambil sebuah kotak grid untuk Anda kerjakan. 

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image13.png)

7.	Disini Anda dapat melihat sebuah kotak yang Anda inginkan untuk dipetakan. Anda dapat
	membuka area tersebut secara otomatis untuk diedit menggunakan JOSM, Potlatch 2,
	atau membuat Walking Paper. 
	
8.	Jika Anda berencana untuk mengedit menggunakan JOSM, Anda perlu mengaktifkan 
	sebuah plugin pada JOSM sehingga nantinya Anda dapat langsung membuka area 
	dari Tasking Manager ke JOSM. Untuk melakukan ini, buka lah JOSM dan buka 
	menu Preferences. Klik pada tab “Remote Settings” dan ceklis pada kotak di
	samping “Enable remote control.” Restart JOSM.  

     ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image09.png)

9.	Kembali ke Tasking Manager dan pilih JOSM. Jika Anda telah membuka JOSM dan 
	Anda telah mengaktifkan remote control dengan benar, area pada grid yang
	Anda ingin edit akan muncul dengan otomatis pada JOSM. 
	
10.	Sekarang Anda dapat mengedit area tersebut menggunakan instruksi yang tersedia
	pada informasi proyek. Ketika Anda selesai melakukan editing dan menguploadnya, 
	Anda dapat kembali ke tasking manager dan menambahkan komentar mengenai perubahan
	yang Anda buat. Klik “Mark task as done” agar pembuat peta lainnya tahu bahwa Anda
	telah menyelesaikan kotak grid tersebut. Jika Anda tidak dapat menyelesaikan kotak
	tersebut, klik “Unlock it” sehingga kotak tersebut dapat dikerjakan oleh pembuat 
	peta lainnya. 

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image00.png)

11.	Jika Anda bertanya-tanya apa yang terjadi bila Anda telah menyelesaikan suatu 
	area, grid tersebut akan berubah menjadi warna merah yang menandakan area 
	pada grid tersebut telah selesai dipetakan. Orang lain akan meninjau ulang
	hasil pekerjaan Anda dan memastikan hasilnya baik dan sesuai harapan, apabila
	sesuai, grid tersebut akan berubah menjadi warna hijau, artinya telah benar-benar
	selesai! 

## Ringkasan

Pada bab ini kita telah membahas beberapa cara meningkatkan kontribusi kita di
OpenStreetMap. Kita telah membahas beberapa masalah umum pembuat peta ketika
mengedit dengan JOSM, dan bagaimana menghindari kesalahan tersebut. Kita telah
melihat pada tool validasi JOSM, membantu menjaga OpenStreetMap terbebas dari
kesalahan, dan membantu kita menjaga data tetap bersih dan baik. Terakhir, kita
melihat pada tool Tasking Manager HOT, yang merupakan cara terbaik untuk pembuat
peta seluruh dunia untuk mengkoordinasikan pada sebuah proyek.
