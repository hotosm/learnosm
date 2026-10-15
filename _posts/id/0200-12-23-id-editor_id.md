---
layout: doc
title: iD Editor
permalink: /id/beginner/id-editor/
lang: id
category: beginner
---

iD Editor
=============

> 2019-06-10

Ingin mulai memetakan menggunakan Tasking Manager untuk HOT atau MissingMaps? Lihat [HOT-tips section](/id/hot-tips/).  

- TOC
{:toc}

Pada dasarnya, iD editor adalah sebuah editor OpenStreetMap yang dapat dijalankan pada browser (browser-based). iD editor sangat mudah digunakan dan memungkinkan pengguna untuk dapat memetakan berdasarkan berbagai sumber data seperti satelit dan foto udara, GPS, Field Papers, atau Mapillary.   

iD editor cocok digunakan jika Anda ingin melakukan editing kecil yang tidak membutuhkan fitur-fitur pada JOSM (perangkat editing tingkat lanjut). Bab ini akan menunjukkan pada Anda dasar-dasar editing dengan menggunakan iD editor.   

Memulai iD Editor
----------------------

-	iD editor membutuhkan koneksi internet  
-	Buka browser internet Anda, kemudian buka website OpenStreetMap pada halaman [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Login** menggunakan akun OpenStreetMap Anda  
-	Arahkan dan perbesar tampilan peta Anda pada area yang ingin Anda petakan. Anda dapat menggeser peta dengan menekan dan menahan tombol klik kiri pada mouse dan geser tampilan peta pada area yang Anda inginkan.   
-	Klik pada tanda panah kecil di sebelah tombol **Edit**. Kemudian klik **Edit with iD (in-browser editor)**.  

![image1][]


Tampilan Antar Muka iD Editor 
-------------------------
![image2][]

1. **Edit Feature Panel:** Bagian ini menunjukkan informasi tag dari objek terpilih pada peta.   
	Anda dapat menambahkan atau mengubah tag pada bagian ini.   
2. **Tools:** Bagian ini menunjukkan alat-alat editing dasar:  
    Gambar titik (node), *tombol pintas* **1** ![image3][]{: height="24px"}  
    Gambar garis (way), *tombol pintas* **2** ![image4][]{: height="24px"}  
    Gambar area (polygon), *tombol pintas* **3** ![image5][]{: height="24px"}  
    Undo, *tombol pintas* **Ctrl+z** ![image6][]{: height="24px"}  
    Redo, *tombol pintas* **Ctrl+y** ![image7][]{: height="24px"}  
    Simpan perubahan, *tombol pintas* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Panel Peta;** Panel ini memperlihatkan berbagai fungsi konfigurasi:  
    Perbesar tampilan, *shortcut key* **+** ![image9][]{: height="24px"}  
    Memperkecil tampilan, *shortcut key* **-** ![image10][]{: height="24px"}  
    Pergi ke lokasi Anda ![image11][]{: height="24px"}  
    Konfigurasikan latar belakang , *shortcut key* **b** ![image12][]{: height="24px"}  
    Data Peta, *shortcut key* **f** ![Data Peta ][]{: height="24px"}  
    Isu, *shortcut key* **i** ![Isu][]{: height="24px"}  
    Buka Menu Bantuan, *shortcut key* **h** ![image13][]{: height="24px"}  
4. **Information panel:** Panel ini menunjukkan berbagai macam informasi, seperti skala dan kontributor yang sudah memetakan area tersebut.  

## Mengatur Background Layer atau Lapisan Latar Belakang

Klik tombol **Background settings** atau gunakan *shortcut key* **b**.![image14][]{: height="24px"}  
![image15][]  
Anda dapat **mengubah latar belakang** berdasarkan tampilan citra satelit yang tersedia (tampilan awal adalah Citra Satelit Bing).   

Anda dapat menambahkan map tiles Anda sendiri dengan mengklik **Custom**. Misalnya, Jka Anda ingin **menambahkan Field Paper** [^fieldpaper], klik **Custom** lalu klik ikon kaca pembesar (search) untuk membuka jendela berikut:-  
![image17][]   
dan masukkan **URL snapshot FieldPaper** Anda, yang tampak seperti ini: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Untuk  **menampilkan trek GPS dari komputer Anda** (format GPX), tarik dan jatuhkan (drag and drop) file GPX ke dalam iD editor.  
Untuk mengaktifkan **jejak GPS di OpenStreetMap** klik pada kotak. Pada gambar di bawah, data GPS akan ditampilkan dalam berbagai warna, menunjukkan arah trek yang tersedia.   
![osm gps traces][]  
Untuk mengubah **tampilan citra satelit** klik **Display Options**.  
![DisplayOptions][]  
Jika terdapat [citra yang offset](/id/josm/aerial-imagery), Anda dapat **memperbaiki offset citra** dengan mengklik **Adjust imagery offset**.  
![image18][]  

- Klik tombol navigasi untuk memindahkan citra satelit. Klik tombol reset untuk mengembalikannya ke posisi semula. ![image20][]  

Editing Dasar dengan iD Editor  
----------------------  

### Menambahkan Titik  

Untuk menambahkan titik baru, klik pada tombol **Titik**. ![image3][]{: height="24px"}  

- Kursor mouse Anda akan berubah menjadi tanda plus (+). Sekarang, klik pada posisi dimana Anda menandai sebuah lokasi. Sebagai contoh, jika Anda mengetahui lokasi Rumah Sakit di area anda, klik pada posisi bangunan rumah sakit tersebut.   
![image21][]  
- Perhatikan bahwa sebuah titik baru telah ditambahkan. Di saat yang bersamaan, panel di sebelah kiri Anda akan menampilkan formulir dimana Anda dapat memilih atribut objek. Klik **Hospital Grounds** untuk menandai titik tersebut sebagai rumah sakit.   
![image22][]  
- Anda dapat menggunakan formulir ini untuk mengisi informasi detail tentang titik Anda. Anda dapat mengisi nama rumah sakit, alamat, dan/atau informasi tambahan lainnya. Perhatikan bahwa setiap fitur akan memiliki pilihan yang berbeda, tergantung pada tag apa yang Anda pilih dari panel fitur.   
- Jika Anda membuat kesalahan, seperti kesalahan lokasi, Anda dapat memindahkan titik Anda ke lokasi yang benar dengan cara menekan dan menahan tombol klik kiri mouse pada titik yang ingin Anda pindahkan kemudian geser titik tersebut. Atau, jika Anda ingin menghapus titik, kllik kiri mouse Anda pada titik yang diinginkan, kemudian aktifkan menu tambahan dengan menekan tombol klik kanan dan pilih tombol dengan gambar tempat sampah. ![PointToolDelete][]{: height="24px"}  
Sebuah "titik" yang dibuat di iD editor biasanya adalah sebuah "node" yang berdiri sendiri dengan serangkaian "tags" di dalamnya.  

### Menggambar Garis  

Untuk menambahkan garis, klik pada tombol **Garis**. ![image4][]{: height="24px"}  

-  Kursor mouse Anda akan berubah menjadi tanda plus (+). Cari objek jalan yang belum digambarkan di peta lalu gambarkan objek jalan tersebut. Klik satu kali pada titik dimana segmen jalan tersebut dimulai, gerakan mouse Anda, dan klik lagi untuk menambahkan titik berikutnya Klik dua kali untuk mengakhiri proses menggambar. Perhatikan panel yang ada di sebelah kiri.  
![image24][]  
- Sama seperti objek titik, pilih tag yang sesuai untuk objek garis Anda.   
- Anda dapat menggeser titik yang ada pada objek garis dengan meng-klik kiri mouse Anda pada titik yang dituju lalu geser titik tersebut.  
- Ketika Anda klik kiri mouse pada titik di objek garis, klik kanan pada mouse atau tekan tombol spasi untuk mengaktifkan menu tambahan, seperti berikut:  
  - Melanjutkan garis dari titik ini ![PointToolContinue][]{: height="24px"}  
  - Putuskan garis pada titik ini ![PointToolDisconnect][]{: height="24px"}  
  - Membagi garis menjadi dua pada titik ini. ![PointToolSplit][]{: height="24px"}  
  - Menghapus titik dari garis. ![PointToolDelete][]{: height="24px"}  
- Ketika Anda klik kiri mouse pada sebuah garis (bukan pada titik dari garis), Anda akan melihat beberapa alat seperti berikut:  
  -   Membuat lingkaran dari garis (hanya aktif jika garis tertutup) ![LineToolCircularize][]{: height="24px"}  
  -   Memutuskan garis dari objek lain ![LineToolDisconnect][]{: height="24px"}  
  -   Memindahkan garis ![LineToolMove][]{: height="24px"}  
  -   Kotakan suluruh sudut ![LineToolSquare][]{: height="24px"}  
  -   Reflect the line across its short axis ![LineToolReflectShort][]{: height="24px"}  
  -   Reflect the line across its long axis ![LineToolReflectLong][]{: height="24px"}  
  -   Memutarbalikan arah garis (good for rivers & one-way streets) ![LineToolReverse][]{: height="24px"}  
  -   Memutar garis pada pusatnya ![LineToolRotate][]{: height="24px"}  
  -   Meluruskan garis ![LineToolStraighten][]{: height="24px"}  
  -   Menghapus garis. ![LineToolDelete][]{: height="24px"}  

A "line" created in the iD editor is actually a "way" with "tags" on it.

>Catatan khusus tentang **Menghapus**: Umumnya Anda harus menghindari untuk menghapus hasil pemetaan orang lain jika objek tersebut hanya butuh sedikit perbaikan. Anda dapat menghapus hasil kesalahan Anda sendiri, tapi sebaiknya Anda harus *memperbaiki* objek hasil pemetaan orang lain jika dibutuhkan. Hal ini menjaga rekam jejak dari objek yang ada di database OSM dan juga untuk menghargai sesama pemeta. Jika Anda merasa bahwa sebuah objek benar-benar harus dihapus, harap pertimbangkan untuk menanyakannya dulu kepada si pembuat atau salah satu daftar email OSM yang tersedia. 

### Menggambar Area (Poligon)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Kursor mouse Anda akan berubah menjadi tanda plus (+). Cobalah untuk menggambar bangunan menggunakan citra satelit sebagai panduan Anda.   
- Anda akan melihat bahwa perubahan warna dari bentuk yang Anda gambar akan bergantung pada atribut yang Anda berikan.   
![image35][]  
- Alat-alat yang digunakan adalah akan tersedia jika Anda memilih sebuah poligon dan mengaktifkan menu tambahan dengan mengklik tombol klik kanan pada mouse.   

Sebuah "poligon" dalam iD editor adalah sebuah "garis yang tertutup" dengan tag di dalamnya.

### Menggambar Multipoligon

Sometimes you have to draw a polygon which does not only have an outer contour but also one or more inner contours. Just think of buildings with inner courtyards or lakes with islands. *Do not draw all these ways in one line* so that the inner contours suspend from the outer contour. Rather draw these contours separate, attach tags to the outer contour only, select all contours and hit **c** in order to combine them into what is called a multipolygon.

![create multipolygon][]

When you select any of the contours of the newly created multipolygon you can see on the left to which multipolygons it belongs

![part of multipolygon][]

## Issues

Editor akan melakukan pengecekan ketika Anda melakukan suatu perubahan. Jika editor menganggap bahwa terjadi masalah pada data Anda, editor akan memberitahukan hal tersebut di tab isu. Kapanpun ikon isu pada sebelah kanan memunculkan warna titik kuning (untuk warning) atau titik merah (untuk eror) Anda sebaiknya membuka tab isu dan lihat laporan apa yang tersedia. Informasi ini juga akan muncul pada tab fitur objek di sebelah kiri jika sebuah objek sedang terpilih. Anda juga akan diberi peringatan apabila terdapat masalah yang belum diselesaikan saat Anda ingin mengunggah data. 

![Issue][] ![Error][]

Bagian bawah dari tab isu menunjukkan beberapa aturan yang tersedia dan memungkinkan Anda untuk menon-aktifkan nya jika Anda rasa hal tersebut tidak sesuai. 

Menyimpan Perubahan
--------------------

Jika Anda ingin menyimpan hasil perubahan Anda ke dalam OpenStreetMap, klik tombol **Save**. Panel di sebelah kiri akan menampilkan panel unggah (upload).  
![image36][]  

- Tulis komentar Anda mengenai hasil edit Anda dan klik **Simpan**.  

> Jika anda melakukan perubahan terhadap objek yang sama (titik, garis atau area) dengan orang lain, Anda akan menerima pemberitahuan bahwa hasil perubahan Anda tidak dapat diunggah sampai Anda dapat menyelesaikan **konflik** - pilih hasil perubahan siapa yang ingin diterapkan & unggah perubahan Anda. *Menyelesaikan konflik seringkali melibatkan orang lain untuk menerima hasil perubahan orang lain, dimana Anda mungkin berharap hal ini tidak terjadi sehingga anda bisa memetakan objek lain (**kali ini simpan segera hasil perubahan Anda dan cobalah untuk menghindari konflik dengan data milik orang lain!**).*

Informasi Tambahan dan Penyesuaian Tag
---------------------------------------

Ketika Anda memetakan sebuah objek, Anda akan melihat menu "Add Field" di bagian bawah dari panel atribut. Anda dapat menambahkan berbagai macam informasi tambahan dengan memilih salah satu isian (layer, ketinggian, wikipedia etc.).  

![AdditionalTags][]

Atau Anda dapat menambahkan tag tertentu dengan cara meng-kllik tombol **All tags**. ![image44][]{: height="24px"}  

- Ini akan menampilkan seluruh tag terkait fitur tersebut.  
![image45][]  
- Klik tanda plus (+) untuk menambahkan key dan value atau klik tombol tempat sampah untuk menghapus tag. 

Tutorial lebih lanjut
------------------

[Halaman luar kami](/id/resources/#iD) menyediakan tautan ke video tutorial dari berbagai macam sumber.

iD versus JOSM
---------------  

**iD baik digunakan untuk...**

- Ketika Anda melakukan edit sederhana  
- Ketika Anda memiliki internet yang cepat untuk memuat citra satelit dan menyimpan hasil perubahan  
- Ketika Anda ingin mengikuti skema tagging yang simpel dan konsisten  
- Ketika Anda memiliki keterbatasan untuk melakukan instalasi program pada komputer yang Anda gunakan

**JOSM lebih baik...**

- Ketika Anda menambahkan banyak bangunan (Lihat buildings_tool plugin)
- Ketika Anda mengedit banyak poligon atau garis yang sudah ada
- Ketika Anda berada pada koneksi internet yang buruk atau bahkan offline
- Ketika Anda menggunakan skema tagging yang spesifik (atau bahkan preset buatan sendiri)

[^fieldpaper]: There is a [section of LearnOSM](/en/mobile-mapping/field-papers/) giving more information about Field Papers.



[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png