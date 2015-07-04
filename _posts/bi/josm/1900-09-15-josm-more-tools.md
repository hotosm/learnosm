---
layout: doc
title: Tool JOSM Lainnya
permalink: /bi/josm/more-tools/
lang: bi
category: josm
---

Tool Lainnya
============
Plugin **buildings_tools** dan **utilsplugin2** menambah besar tambahan fungsionalitas
ke dalam JOSM. Pada sesi ini kita akan melihat lebih dekat pada fungsi yang
mereka sediakan.

Plugin Building Tools
---------------------
*	Jika Anda belum menginstal, berikut instruksi menginstal plugin ini di 
	[JOSM Plugins](/bi/josm/josm-plugins).

![buildings_tools plugin][]

Plugin Building Tools sangat membantu untuk digitalisasi bangunan. Ini memungkinkan Anda 
untuk mendijitasi satu sisi bangunan persegi, dan dengan mudah memperpanjang bentuk.
Jika Anda mendijitasi banyak bangunan, plugin ini akan menghemat klik, dan menghemat
waktu Anda. 

Setelah plugin terinstal Anda akan melihat tombol baru di bagian sisi kiri JOSM, yang
terlihat seperti ini:

![buildings_tools button][]

*	Mulai JOSM dan membuat layer kosong baru.
*	Pilih building tool dan klik ganda untuk menggambar sebuah garis pada peta.

![Draw edge][]

*	Kemudian geser mouse dan klik kembali untuk menggambar sebuah persegi.

![Extend building][]

*	Ini tidak hanya membuat sebuah persegi panjang hanya tiga kali mengklik, 
	tetapi ini juga akan secara otomatis menerapkan tag building=yes  ke poligon.


### Bangunan Kompleks
Anda juga dapat membuat bangunan yang lebih rumit dengan terlebih dahulu menggambar 
beberapa bangunan overlap dan kemudian menggabungkan mereka bersama-sama. 

*	Menggambar dua bangunan yang overlap, sehingga mereka berbentuk L.
*	Pilih kedua bangunan (tahan SHIFT untuk memilih lebih dari satu objek).
*	Pergilah ke Tools->Join overlapping Areas atau tekan SHIFT+J pada keyboard Anda.

![Merge buildings][]

### Edit Pengaturan 
Selanjutnya, Anda dapat mengubah pengaturan standar dari plugin.

*	Pergilah ke Data->Set buildings size.

![Set buildings size][]

*	Jika Anda membuat banyak bangunan dengan ukuran yang sama, Anda dapat mengatur
	lebar dan tinggi dimensi dari bangunan, seperti 6 x 10 meter (unit dalam meter).

![Set buildings size dialog][]

*	Dengan mengatur dimensi bangunan Anda hanya perlu mengklik ganda untuk membuat 
	bangunan yang sudah diatur dimensinya.

Terakhir, Anda dapat mengklik pada tombol Advanced jika Anda ingin menambahkan
tambahan tag yang otomatis akan diterapkan disetiap bangunan. Sebagai contoh, 
jika semua bangunan yang Anda gambar pada jalan yang sama, Anda dapat menambahkan 
sebuah tag yang mengidentifikasi jalan yang akan secara otomatis diterapkan.

![Buildings advanced][]


Utilsplugin2
-------------
*	Jika Anda belum menginstal, berikut instruksi cara menginstal plugin ini di 
	[JOSM Plugins](/bi/josm/josm-plugins).

![utilsplugin2 plugin][]

Setelah Anda menginstal plugin ini dan restart JOSM, Anda akan memiliki menu baru
di bagian atas bernama "More Tools."

![more tools menu][]

Buat layer baru dan bereksperimen dengan beberapa tool baru. Disini kita akan menjelaskan
beberapa tools baru yang sangat berguna: 

1.  **Add Nodes at Intersections:**  Tool ini sangat berguna untuk menambahkan titik yang
	hilang di persimpangan garis yang terpilih. Ini baik untuk dipraktekkan bahwa jalan 
	seharusnya selalu memiliki titik dimana mereka berpotongan.

    ![nodes interesection][]

2.  **Copy Tags from Previous Selection:**  Fungsi ini untuk mengcopy tag dengan
	mudah. Jika Anda ingin membuat banyak objek dengan tag yang sama, pertama menggambar
	objek. Kemudian tambahkan tag ke satu objek. Klik pada objek yang lain dan tekan
	Shift + R untuk mengcopy tag dari objek yang terpilih sebelumnya. Anda dapat 
	melakukan ini untuk semua objek yang ingin Anda beri tag. Ingatlah bahwa tag
	akan dicopy dari objek yang terpilih sebelumnya, jika Anda mengklik pada objek
	yang belum diberi tag dan kemudian objek yang belum diberi tag yang lain, Anda
	tidak akan dapat mengcopy setiap tag.

    ![copy tags][]

3.  **Add Source Tag:** Tool ini untuk menyederhanakan dalam menambahkan sumber tag.
	Ini mengingat bahwa sumber yang ditentukan terakhir dan menambahkannya sebagai
	tag sumber ke objek Anda. Anda dapat memasukkan sumber dengan hanya mengklik satu kali.
	
4.  **Replace Geometry:** Tool ini sangat baik jika Anda ingin menggambar kembali
	objek yang berbentuk kurang bagus, tetapi riwayat, atribut dan ID jumlah objek
	tersebut tetap tidak ingin diubah. Contohnya, jika Anda menemukan sebuah bangunan
	yang rumit dan digambar dengan cara yang tidak sesuai, maka untuk mengubah setiap 
	titiknya, Anda dapat menggambar objeknya kembali, memilih objek lama dan baru,
	dan memilih ¨Replace Geometry¨ untuk mentransfer semua informasi di atas.

    ![replace geometry][]


### Tool Selection Lebih Lanjut
Utilsplugin2 juga menyediakan lebih banyak tool pada menu "Selection".
cobalah bereksperimen dengan tool tersebut. 

![selection menu][]

Salah satu tool selection yang sering kita gunakan adalah **Unselect Nodes:** Tool ini 
membatalkan pilihan semua titik. Ini dapat berguna jika Anda menggambar kotak untuk 
memilih banyak objek, tetapi Anda tidak ingin memilih titik yang berisi semua garis dan
poligon.

![unselect nodes][]

Good luck!


[buildings_tools plugin]: /images/en/editing/josm-more-tools/buildings_tools-plugin.png
[buildings_tools button]: /images/en/editing/josm-more-tools/buildings_tools-button.png
[Draw edge]: /images/en/editing/josm-more-tools/draw-edge.png
[Extend building]: /images/en/editing/josm-more-tools/extend-building.png
[Merge buildings]: /images/en/editing/josm-more-tools/merge-buildings.png
[Set buildings size]: /images/en/editing/josm-more-tools/set-buildings-size.png
[Set buildings size dialog]: /images/en/editing/josm-more-tools/set-buildings-size-dialog.png
[Buildings advanced]: /images/en/editing/josm-more-tools/buildings-advanced.png
[utilsplugin2 plugin]: /images/en/editing/josm-more-tools/utilsplugin2-plugin.png
[more tools menu]: /images/en/editing/josm-more-tools/more-tools-menu.png
[nodes interesection]: /images/en/editing/josm-more-tools/utilsplugin2-nodes-intersection.png
[copy tags]: /images/en/editing/josm-more-tools/utilsplugin2-copy-tags.png
[replace geometry]: /images/en/editing/josm-more-tools/utilsplugin2-replace-geometry.png
[selection menu]: /images/en/editing/josm-more-tools/selection-menu.png
[unselect nodes]: /images/en/editing/josm-more-tools/utilsplugin2-unselect-nodes.png


