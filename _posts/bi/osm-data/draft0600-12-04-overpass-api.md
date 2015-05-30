---
layout: doc
title: OverPass API
permalink: /bi/osm-data/overpass-api/
lang: bi
category: osm-data
---

OverPass API
==============
Overpass API adalah read-only API yang menyediakan pilihan khusus dari data OpenStreetMap.
Dengan kata lain, hal ini adalah layanan yang mengizinkan pengguna untuk mengirimkan sebuah
query melalui internet, dan kembali menerima data tertentu yang mereka minta.

Siapa saja yang menggunakan salah satu editor OpenStreetMap menggunakan API di belakang layar -
namun ini dirancang untuk mengedit dan tidak menyediakan kekuatan OverPass. Dalam bab ini kita
akan memeriksa beberapa fungsi dasar dari OverPass API, dan melihat bagaimana ini dapat digunakan
untuk mengakses data pada query tertentu.

Catatan bahwa fungsi ini adalah hal yang dapat dicapai dengan mengquery database lokal,
atau bahkan dengan menyaring data OSM menta dengan Osmosis. Tetapi dengan menyediakan 
API berbasis internet, OverPass API tersedia untuk digunakan sebagai database cadangan untuk
layanan yang berbeda.

Query Sederhana
----------------

