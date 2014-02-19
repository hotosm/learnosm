---
layout: doc
title: Proses Mengedit dengan JOSM
permalink: /en/beginner/more-about-josm/
lang: en
category: beginner
---

Proses Mengedit dengan JOSM
===========================
Pada sesi sebelumnya Anda telah menginstal JOSM dan memulai menggambar 
titik, garis, dan poligon pertama Anda. Anda telah menambahkan preset ke 
objek tersebut, ini untuk melampirkan informasi mengenai objek tersebut. 
Pada akhirnya, Anda dapat menggambar peta Anda sendiri di JOSM.

Ini merupakan praktek yang baik, dan sekarang kita siap untuk mengedit
OpenStreetMap.

Pada sesi ini kita akan melihat lebih dekat pada antarmuka JOSM, dan lihat
bagaimana kita dapat menggunakannya untuk mengedit peta di dalam OpenStreetMap.

Tahapan Mengedit
----------------

Mengedit OpenStreetMap dengan JOSM mirip dengan mengedit dengan iD editor kita
lihat sebelumnya. Namun karena JOSM adalah aplikasi desktop, pekerjaan ini
sedikit berbeda. Proses mengedit dan menambahkan ke OpenStreetMap dengan JOSM
yang tahapannya sebagai berikut:

1. **Download** data peta yang langsung dari OSM
2. **Edit** ini menggunakan citra satelit, GPS, Field Papers, dan panduan
3. **Save** perubahan ke OpenStreetMap

Mendownload Data OSM
--------------------

Langkap pertama mengedit adalah mendownload data untuk area yang akan kita 
tambahkan. Perhatikan bahwa Anda perlu melakukan ini setiap waktu sesuai
dengan keinginan Anda untuk melakukan perubahan pada peta, karena peta ini
sering kali diperbarui oleh pengguna lain.

*	Klik pada "File" di pojok kanan atas JOSM dan klik "Download from OSM".
	Ini akan membuka jendela download. Anda dapat mengakses jendela ini lebih 
	mudah dengan mengklik pada tombol download, seperti ini:
	
	![JOSM Download Button][]

*	Ketika jendela download terbuka, Anda akan melihat peta dengan kotak berwarna
	merah muda yang tergambar di dalamnya. Jika Anda tidak melihat peta, klik pada 
	tab "Slippy map".
	
	![JOSM Download Dialog][]
	
*	Kotak berwarna merah muda merupakan area peta yang akan kita download 
	untuk mengedit. Gunakanlah mouse Anda untuk menggeser dan menggeser dan
	memperbesar ke area yang Anda ketahui dengan baik, seperti tempat tinggal
	Anda atau lingkungan sekitarnya. Kontrol sama dengan jendela peta JOSM.
	Tombol kanan mouse berguna untuk menggeser peta, dan roda gulir Anda
	berguna untuk memperbesar dan memperkecil peta.

>	Biasanya jika Anda bekerja menggunakan komputer notebook akan lebih sulit
>	untuk menggulir peta. Bekerja di JOSM lebih mudah apabila Anda menggunakan mouse,
> 	tetapi sekarang notebook lebih modern memungkinkan Anda untuk menggulir peta
>	menggunakan touchpad.

*	Gambarlah kotak disekitar area yang Anda ingin download. Untuk menggambar kotak 
	baru, klik pada peta, tahan tombol kiri mouse ke bawah, dan geser mouse Anda
	untuk membuat sebuah kotak. Lepaskan tombol mouse untuk mengakhiri menggambar
	kotak.
*	Apabila kotak yang Anda buat sudah benar dengan ukuran dan lokasi kotak, klik
	"Download" di bagian bawah jendela. JOSM akan mendapatkan data untuk area ini
	dari OpenStreetMap dan membukanya di jendela peta Anda untuk mengedit.

### Menambahkan Citra Satelit
Jika Anda telah ikuti bersama ketika kita telah menambahkan titik pertama kita dengan 
iD editor, Anda ingat bahwa di bawah data peta terdapat citra satelit yang dapat
membantu kita untuk mengidentifikasi objek di permukaan. Citra satelit ini berasal 
dari Microsoft Bing, yang dengan murah hati menyediakan citra satelit ini untuk para 
pengguna OpenStreetMap sebagai referensi sementara dalam berkontribusi untuk pemetaan.

*	Untuk menambahkan citra satelit Bing di JOSM, klik "Imagery" di bagianmenu atas JOSM
	dan pilihlah "Bing Sat".

>	Jika pada menu Imagery Anda tidak muncul Bing Sat, Anda perlu mengaktivasinya
>	di dalam pengaturan JOSM. Pergilah ke Edit -> Preferences dan klik pada ikon "WMS TMS".
>	Anda perlu mengklik pada panah bawah untuk menemukannya.
>
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
>
>	Klik pada "Bing Sat". Kemudian klik "Activate".

### Mengenal JOSM lebih jauh
Kita telah mendownload data OpenStreetMap dan menambahkan citra satelit Bing, 
mari kita lihat antarmuka JOSM.

![JOSM layout][]

Jendela utama Anda sudah akrab dengan - jendela peta ini, dan dimana sebagian besar 
aksi berlangsung. Disini Anda akan melihat, mengedit, dan menambahkan ke data 
OpenStreetMap.

Pada bagian kanan pada jendela peta 

### Tour of JOSM
Now that we've downloaded OpenStreetMap data and added the Bing satellite imagery,
let's take another look at the interface of JOSM.

![JOSM layout][]

The main window you are already familiar with - this is the map window, and 
it is where most of the action takes place. Here you will view, edit, and
add to the OpenStreetMap data.

To the right of the map window are a series of panels, each of which has
its own function. Typically when you first install JOSM several
panels are shown by default, such as Layers, Properties, and
Selection. When you select a point, line, or shape in the map
window, it will be shown in the Selection panel. Information about
the object will be shown in the Properties panel, and the username
of the author of that object will be shown in the Authors panel.

These panels can be opened or closed by clicking on the various buttons on
lower left side of JOSM. Above these buttons in the upper right are tools which
change what you can do with your mouse. You are already familiar with some of them,
the Select tool and the Draw tool. Below them are tools which make it easier to
zoom in, delete an object, draw a shape, or create a line that is parallel
to another line.


Edit
----
So we have completed step one of the editing process - Downloading. We have
prepared JOSM with satellite imagery as a reference. The next step is to edit
the map and add new items.

Depending on the area that you chose to download, there may be a lot or very
little existing map data. But notice that it is the same sort of data that we
have seen previously - points, lines, and shapes that represent real-life locations.

-	Use the techniques you have already learned to add a couple points to the map
	of places that you know. If you see any mistakes, try to fix them.
-	You don't need to be too aggressive while you are learning. If you are unsure
	about something it's better to leave it as it is.
-	If you want to move a point, line, or shape, use the
    **select tool**. Click on an object and drag it where it
    should be. This can be used to correct the location of items that
    have been put in the wrong place.

![JOSM select tool][]

-  Use the **draw tool** to draw new points, lines, and shapes.
    Describe these objects by selecting from the Presets menu, as you
    did in the previous section. 

>	Never edit the map outside of the area you have downloaded. You
>	can see the rectangular area you have downloaded has a solid background,
>	while the area you have not downloaded has diagonal pinstriped lines.
>
>	![JOSM area downloaded][]

Save Changes
--------------
The third and final step to complete our edits is to upload the changes we have
made to the OpenStreetMap database. To save the changes, we must
be connected to the internet.

-  Click “File” on the top menu, and then click “Upload Data”. This
    will open up the upload window. You can access this window more
    simply by clicking on the upload button, shown here:

![JOSM Upload Button][]

-  The window that appears shows a list of the objects that you are
    adding and the objects you are modifying or deleting. In the box at
    the bottom you are asked to provide a comment about the changes that
    you are making. Type in here a description of your edits.

![JOSM Upload Dialog][]

-  Click “Upload Changes”.

-	If this is your first time saving changes to OpenStreetMap, you will
    be asked for your OpenStreetMap username and password.
-	Enter them in the window that appears. If you check the box in
    this window, your username and password will be saved and you won’t
    need to enter them again in the future. Click “Authenticate”.

![JOSM Authenticate][]

-	You will need to wait a few seconds for your changes to be uploaded,
    and then you are done! You have edited the map on OpenStreetMap.

>	When you are editing, always be sure to upload your changes before you
>	close JOSM. Even if you still have more editing to do, upload your changes,
>	and then go through the process again later when you have time to edit. You
>	don't want to lose your work!

See your changes on the map
---------------------------
-  Open your internet browser and go to [http://openstreetmap.org/](http://openstreetmap.org/)
-  Move the map to the area that you edited.
-  You should see your changes now appearing on the map! If you don’t,
    try pressing CTRL+R to refresh the web page. Sometimes the map
    doesn’t update properly and needs to be reloaded.
-  What if you don’t see your changes? Don’t worry - it may take a few
    minutes for the changes to be shown on the map. Also, check your
    additions in JOSM to make sure that you added them correctly. A good
    general rule is, if your point has an icon in JOSM, then it should
    be seen on the main map at the OpenStreetMap website.

Summary
-------
Now that you’ve seen how to add to OpenStreetMap, what’s next? Well, editing
is great, but it's not the only aspect of making maps. Of course you also
need to learn how to go outside and collect information about places on the
ground.

In the next sections we will learn about two methods - GPS and Field Papers,
which are used to collect geographic data. The information from both of these
can then be imported into JOSM, and used to edit the map.

[JOSM Download Button]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image00_download-button.png
[JOSM Download Dialog]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image01_download-dialog.png
[JOSM Preferences up down]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image02_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image03_preferences-wms-tms.png
[JOSM layout]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image04_layout.png
[JOSM select tool]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image05_select-tool.png
[JOSM area downloaded]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image06_area-downloaded.png
[JOSM Upload Button]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image07_upload-button.png
[JOSM Upload Dialog]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image08_upload-dialog.png
[JOSM Authenticate]: /images/en/beginner/04_more-about-josm/eng_beg_04_more-about-josm_image09_authenticate.png
