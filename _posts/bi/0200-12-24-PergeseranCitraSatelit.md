---
layout: doc
title: Pergeseran Citra Satelit
permalink: /bi/beginner/aerial-imagery
lang: bi
category: beginner
---

Pergeseran Citra Satelit (Imagery Offset)
=========================================

Menggambar di atas citra adalah suatu hal yang mudah dan berguna sebagai
salah satu cara untuk berkontribusi dalam OSM. Terutama ketika citra
tersebut memiliki resolusi tinggi dan langit yang cerah, mendigitasi
melalui citra satelit dapat membantu menyediakan kerangka utama untuk
peta OSM. Hal ini berguna karena membuat tinjauan lapang, atau mengambil
data atribut di lapangan, menjadi lebih mudah untuk orang yang turun ke
lapang.

Meskipun demikian, menggambar melalui citra satelit membutuhkan beberapa
tindakan pencegahan sehingga objek tidak ditempatkan di tempat yang
salah. Terdapat dua aspek penting yang harus dipertimbangkan ketika
menggambar melalui citra satelit:

Resolusi: Resolusi mengacu kepada seberapa detail gambar atau berapa
jumlah pixel dari gambar tersebut. Pixel merupakan unit terkecil dari
sebuah gambar. Semakin kecil area dari pixel tersebut, semakin bagus
resolusinya. Dengan pixel yang kecil anda dapat membedakan antar objek
yang berada diatas permukaan bumi dengan lebih baik, seperti yang
dijelaskan pada gambar dibawah ini. Pada bagian kiri dari gambar
merupakan gambar dengan resolusi rendah dan jumlah pixel yang sedikit
dari setiap gambarnya. Hal ini sulit untuk membedakan bagian dari
teka-teki yang ada karena sebagian besar dari gambar dianggap masuk
sebagai bagian dari potongan teka-teki. Pada sisi lain, gambar pada
bagian kanan merupakan gambar dengan resolusi tinggi dan ukuran pixel
unit yang lebih kecil dan oleh karena itu menyebabkan potongan teka-teki
lebih mudah dibedakan.

![]({{site.baseurl}}/images/bi_beg_ch6.1_image03.png)

Pada OSM, anda seringkali dapat menggunakan citra satelit dengan
resolusi yang tinggi. Citra satelit sipil memberikan resolusi dibawah 1
meter, yang berarti setiap pixel dari citra satelit tersebut
merepresentasikan satu meter persegi.

Georefrensi: Georefrensi merupakan syarat untuk bagaimana citra tersebut
dapat diatur, atau seberapa dekat pixel citra satelit mewakili posisi
aktual di tanah. Hal ini merupakan proses yang relatif kompleks dan
semakin besar variasi medan dan struktur permukaan bumi, semakin susah
proses georefrensinya. Satelit berjarak ratusan kilometer dari permukaan
bumi dan ketika mereka mengambil gambar datar untuk merepresentasikan
bentuk bumi, terdapat distorsi dan offset. Keberadaan offset ini sedikit
terlihat ketika anda bergerak diantara dua citra satelit meliputi area
yang sama. Misalnya ketika anda memperbesar gambar, layer tampilan akan
saling mengganti dengan resolusi yang lebih tinggi. Dapatkah anda
melihat pergeseran objek yang terlihat pada citra satelit?

Untuk mendapatkan ide bagaimana offset muncul, ambilah gambar dari
sebuah patung dan cetaklah. Sekarang cobalah untuk merubah dan
meregangkan sehingga meniru bentuk patung. Hal inilah yang muncul ketika
georefrensi citra.

Untungnya, satelit saat ini semakin dibangun dengan gambar yang lebih
presisi dan dengan keakuratan resolusi yang semakin ekstrim (satuan
unitnya terkadang dalam entimeter). Pada sisi lain, satelit yang telah
digeorefrensi terkadang masih mengalami pergeseran lebih kurang lebih
satu meter. Sebuah pergeseran georefrensi 5-10 meter masih dianggap
baik.

Ketika anda mencoba untuk memetakan secara akurat berdasarkan citra
satelit, selalu pikirkan bahwa citra dengan resolusi yang tinggi bukan
satu-satunya aspek yang menentukan lokasi yang presisi. Hampir semua
objek dalam gambar mengalami pergeseran dari lokasi di permukaan.

Terdapat cara untuk anda agar dapat meminimalisir ketidakpresisian dari
offset citra satelit. Anda akan dihadapkan dengan dua skenario dan cara
untuk mengatasi offset pada citra satelit:

1. Anda ingin menggambar diatas citra satelit disebuah area yang telah
dipetakan di OSM

2. Anda ingin menggambar diatas citra satelit di sebuah area yang belum
terdapat data di OSM

1. Menggunakan citra satelit dan menghadapi area yang offset dimana
area tersebut sudah mempunyai data pada OSM

Seringkali setelah mengunduh data OSM dan kemudian menambahkan citra
satelit dan memperbesar ke dalam resolusi yang tinggi, anda menyadari
bahwa data OSM yang ada, terutama jaringan jalan tidak secara tepat
bertampalan (overlay) dengan objek yang terdapat pada citra satelit.

![]({{site.baseurl}}/images/bi_beg_ch6.1_image00.png)

Banyak pengguna awal OSM percaya bahwa jaringan jalan yang ada tidak
tergambarkan dengan tepat dan kemudian memindahkan jalan ke tempat yang
terlihat lebih tepat. Kegiatan ini sama sekali salah! Hal ini
dikarenakan terdapat potensi bahwa citra satelit yang ada terposisikan
sangat buruk dibandingkan dengan keadaan sebenarnya di lapangan.

Cara untuk mengetahui dan membuktikan bahwa citra satelit yang ada
mengalami offset adalah menggunakan trek dari GPS. Untuk melakukannya,
tambahkan data GPS yang ada (yang telah dibuat oleh orang lain atau
anda) pada daerah yang ingin anda gambarkan. Klik pada
![]({{site.baseurl}}/images/bi_beg_ch6.1_image04.png) kemudian centang “Raw GPS data” pada jendela
“Download”. Setelah mengunduh data, tambahan layer “Download GPX data”
akan muncul.

![]({{site.baseurl}}/images/bi_beg_ch6.1_image02.png)

Pada contoh diatas, dari trek GPS (garis berwarna merah) yang anda
tambahkan, dapat terlihat data yang ada (dalam kasus ini jaringan jalan)
telah terposisikan secara tepat. Kesalahan terjadi pada citra satelit
yang tidak tergeorefrensi dan terjadi pergseran jika dibandingkan dengan
keadaan sebenarnya. Hal ini harus diperbaiki.

Catatan: Anda tidak perlu bingung dengan tampilan trek yang muncul
seperti beberapa garis yang tidak teratur dan tidak terlihat seperti
sebuah garis yang solid. Sebagian besar perangkat GPS mempunyai
keakuratan sebesar 2-5 m dimana berarti anda tidak perlu menggunakan
perangkat GPS dan berkendara di tengah jalan.

Untuk mengatur offset dari citra satelit, klik kanan pada citra satelit
atau pilih dari menu “Imagery”, buka “New offset”, atau gunakan tombol
pengaturan citra satelit ![]({{site.baseurl}}/images/bi_beg_ch6.1_image05.png) pada toolbar sebelah
kiri. Kemudian geser citra satelit tersebut agar posisinya tepat
bertampalan dengan trek. Klik kembali pada tombol pengaturan satelit
ketika sudah selesai. Perhatikan bahwa beberapa orang akan menyimpan
informasi offset pada wiki atau beberapa sumber lain sehingga orang lain
yang bekerja sama pada area yang sama akan berbagi nilai-nilai tersebut.
Anda juga dapat memberikan offset tersebut “Bookmark name” jika anda
membutuhkannya dan menggunakan lagi di lain waktu. Offset ini nantinya
tersimpan dalam menu “Imagery offset” baru yang terdapat pada pilihan
citra.

![]({{site.baseurl}}/images/bi_beg_ch6.1_image07.png)

![]({{site.baseurl}}/images/bi_beg_ch6.1_image02.png)

Sekarang anda dapat melihat bahwa citra satelit tersebut sudah tepat dan
anda dapat menggambar di atas nya. Ketika memetakan, anda dapat menutup
layer “Downloaded GPX data” jika hal tersebut mengganggu kerja anda.

![]({{site.baseurl}}/images/bi_beg_ch6.1_image08.png)

Satu hal yang perlu diingat: citra satelit yang mengalami offset tidak
mungkin diperbaiki dan disimpan kembali ke dalam server. Sehingga ketika
citra satelit kita tampakan kembali, citra satelit tersebut harus di
atur kembali, sehingga kita harus mengulangi proses secara keseluruhan.

​2. Menghadapi offset pada area dimana area tersebut belum terdapat data
di OSM.

Hal ini mungkin terjadi ketika anda adalah orang yang pertama
menggunakan OSM untuk memetakan area tersebut, contohnya area pedalaman
atau pada negara berkembang. Sehingga, tidak ada data OSM ataupun trek
GPS yang dapat di unduh.

![]({{site.baseurl}}/images/bi_beg_ch6.1_image01.png)

Bagaimana anda dapat mengatasi hal tersebut sementara anda tidak
mempunyai refrensi untuk mengontrol offset dari citra satelit? Terdapat
dua cara untuk mengatasinya:

1.  Pergilah ke lapangan: Jika anda memungkinkan menggunakan GPS pada
    area tersebut, ambil waypoint pada infrastruktur yang berbeda atau
    objek yang mungkin terlihat pada citra satelit dan buatlah trek pada
    jalan yang ada dan kemudian masukkan data tersebut pada JOSM.
2.  Carilah data ODbl (Open Database License. ODbl tak lain adalah data
    yang berhubungan dengan OSM misalnya Shapefile dan raw GPS data)
    lain yang sudah ada: jika anda dapat memiliki data ini, anda akan
    mendapatkan beberapa data ODbl yang kompatibel untuk area tersebut.
    Perhatikan masalah resolusinya: biasanya garis batas administrasi
    mempunyai resolusi yang rendah, jauh lebih dari 10 meter, yang
    mungkin lebih buruk dari citra satelit yang ada. Lakukan pengecekan
    berganda pada citra satelit yang mengalami offset dengan citra
    satelit yang lain.

Kesimpulan
----------

Menggambar diatas citra satelit merupakan teknik yang menjadikan
kegiatan pemetaan di OSM menjadi lebih cepat dan efisien. Akan tetapi,
hal ini harus diimbangi dengan presisi dan perawatan. Terdapat waktu
ketika anda mendigitasi daerah dan citra satelit itu sendiri mungkin
tidak aktif. Baik dikarenakan faktor resolusi yang buruk ataupun citra
satelit yang tergeorefrensi dengan buruk, terdapat cara anda dapat
menghadapi ketidakakuratan citra satelit. Mereka mungkin melibatkan
refrensi citra satelit dengan trek dan waypoint GPS.
