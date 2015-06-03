---
layout: doc
title: Konversi ke Shapefile
permalink: /en/osm-data/converting-to-shapefile/
lang: en
category: osm-data
---

Konversi ke Shapefile
=======================



5)  Konversi ke Shapefile
Ada berbagai macam tool yang mengkonversi data OSM ke dalam shapefile, masing-masing dengan pro dan kontra sendiri. 
Mereka semua bekerja melalui command-line, jadi yang paling cocok untuk orang-orang dengan latar belakang 
teknis. Beberapa tool antara lain:

osm2shp
aplikasi C++ untuk mengkonversi OSM ke shapefile.
http://trac.openstreetmap.org/browser/applications/utils/export/osm2shp
osmlib
Ruby library untuk mengkonversi ke OSM. Tidak dipertahankan dalam waktu yang lama tetapi masih fungsional.
Tidak baik dengan dataset yang sangat besar. Mudah untuk dikonfigurasi. 
http://wiki.openstreetmap.org/wiki/OSMLib
ogr2ogr
Library baru-baru ini menambahkan dukungan untuk OSM, dan dapat mengkonversi untuk semua format data geografis
secara umum.
http://www.gdal.org/ogr/drv_osm.html

