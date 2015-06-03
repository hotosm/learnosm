---
layout: doc
title: Tasking Manager
permalink: /bi/coordination/tasking-manager/
lang: bi
category: coordination
---

Tasking Manager
===============

Pada bab sebelumnya, kita melihat berbagai cara untuk memastikan kualitas
apabila berkontribusi pada OpenStreetMap. Pada sesi ini, kita akan melihat
pada Tasking Manager HOT, sebuah tool yang pembuat peta dapat menggunakan
untuk mengurutkan area ke dalam grid, dan bekerja sama memetakan sebuah 
area dengan cara yang terorganisir.

Salah satu tantangan yang konsisten adalah koordinasi lapangan dan/atau 
pekerja jarak jauh memetakan area bersama-sama. Untuk membantu mengatasi
hal ini, HOT telah membangun sebuah OpenStreetMap Tasking Tool membuatnya
lebih mudah bagi administrator dalam menentukan area yang akan dipetakan 
dan mendelegasikan pekerja. Ide di belakang tool ini adalah jika terdapat
sebuah area, kita sebut kota, yang ingin kita petakan, dan kita memiliki
beberapa orang memetakan di permukaan, dan beberapa orang memetakan secara
jarak jauh menggunakan citra satelit, tool ini akan mengizinkan kita
membuat grid dari seluruh area. Kolaborator dapat memilih blok di grid yang 
mereka rencanakan untuk dipetakan, dan apabila mereka selesai, mereka 
dapat menandai bahwa area telah dilengkapi. Dengan cara ini sebuah tim
dari banyak orang dapat terkoordinasi memetakan grid secara keseluruhan.

Untuk melihat bagaimana tasking manager bekerja, mari kita lihat lebih dekat.

*	Buka browser Internet Anda dan pergilah ke [tasks.hotosm.org](http://tasks.hotosm.org).
	Anda akan melihat sebuah halaman seperti ini:
	
![]({{site.baseurl}}/images/en/intermediate/en_int_ch5_image01.png)

*	Klik “Log in using your OpenStreetMap account \>\>”
*	Disini Anda setuju untuk memungkinkan aplikasi ini beberapa akses
	pada akun OpenStreetMap Anda. Klik “Save Changes.”

![]({{site.baseurl}}/images/en/intermediate/en_int_ch5_image04.png)

*	Saat ini Anda akan melihat daftar proyek. Ini adalah tempat yang
	berbeda bahwa orang berkoordinasi memetakan.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch5_image06.png)

*	Klik pada salah satu proyek untuk melihat informasi lebih lanjut 
	mengenai proyek tersebut.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch5_image03.png)

*	Halaman ini menunjukkan semua kebutuhan Anda untuk mengetahui 
	mengenai proyek. Di sisi kiri halaman adalah deskripsi memetakan
	proyek dan bagaimana hal itu diatur. Anda dapat mengklik pada tab
	yang berbeda untuk mendapatkan informasi yang lebih lanjut. Di
	sisi kanan adalah sebuah grid menunjukkan area yang telah dipetakan.
	Kotak grid merah telah dilengkapi, kotak hijau telah dilengkapi dan
	diperiksa oleh orang lain, dan kotak yang tersisa tetap perlu dipetakan
	atau sedang dikerjakan. Dengan mengklik pada tab “Workflow”, Anda
	mendapatkan informasi mengenai bagaimana kolaborator dimaksudkan
	membantu memetakan. Dengan mengklik pada “Task,” Anda dapat mengambil
	kotak grid untuk bekerja pada diri sendiri.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch5_image07.png)

*	Disini Anda melihat tampilan kotak yang menawarkan untuk dipetakan.
	Anda dapat secara otomatis membuka area yang muncul untuk mengedit 
	dengan JOSM, Potlatch 2, atau membuat Walking Paper.
*	Jika Anda merencanakan untuk mengedit dengan JOSM, Anda perlu mengaktifkan
	plugin JOSM sebelum Anda akan dapat meluncurkan aplikasi dari Tasking
	Manager. Untuk melakukan ini, buka JOSM dan pergilah ke menu Preferences.
	Klik pada tab “Remote Settings” dan centang kotak di samping “Enable
    remote control.”  Restart JOSM.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch5_image05.png)

*	Pergi kembali ke Tasking Manager dan pilih JOSM. Jika JOSM Anda terbuka
	dan Anda telah mengaktifkan remote control, area grid peta yang telah
	Anda pilih akan secara otomatis dimuat ke dalam JOSM.
*	Anda sekarang mengedit area tersebut menggunakan instruksi yang disediakan
	pada informasi proyek. Ketika Anda telah selesai, Anda dapat kembali ke
	situs tasking manager dan menambahkan komentar mengenai perubahan Anda.
	Klik “Mark task as done” untuk membiarkan kolaborator yang lain mengetahui
	bahwa Anda telah menyelesaikan kotak grid ini. Jika Anda tidak dapat
	melengkapi task tersebut, klik “Unlock it” untuk membuatnya tersedia
	kembali untuk pembuat peta lain.

![]({{site.baseurl}}/images/en/intermediate/en_int_ch5_image00.png)

*	Jika Anda bertanya-tanya apa yang terjadi ketika Anda menyelesaikan 
	sebuah area, kotak grid akan berwarna merah pada peta untuk menunjukkan
	bahwa area tersebut sudah dipetakan. Orang lain akan melihat pekerjaan
	Anda untuk memastikan bahwa pemetaan sudah baik dilakukan, dan jika
	mereka setuju bahwa Anda telah melengkapi kotak grid dengan baik, 
	kotak grid akan berwarna hijau, jika area dalam kotak grid telah dilengkapi!
	
Ringkasan
---------
Tasking Manager dapat sangat bermanfaat untuk memetakan area dengan cepat 
dan memastikan kelengkapan dan kualitas data. Ini dapat sangat bermanfaat
dalam mengelola banyak pembuat peta baik dalam satu lokasi maupun seluruh dunia.

