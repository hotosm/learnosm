---
layout: doc
title: OSMデータの取得
permalink: /ja/osm-data/getting-data/
lang: ja
category: osm-data
---

OSMデータの取得
=================
最新のOpenStreetMapデータを入手するには、データの配布を行っているウェブサイトを利用してダウンロードを行うのが簡単です。様々なサイトで配布されているデータを比較して、あなたが必要とする地域だけを切り出したデータをダウンロードしてください。

抽出データのダウンロード
--------------------------
### GeoFabrik
[GeoFabrik](http://geofabrik.de) はOpenStreetMapを専門とする企業です。彼らは[ダウンロードウェブサイト](http://download.geofabrik.de)から、無償でshapefile形式や生のOSMフォーマットのデータ配布を行っています。GeoFabrikからのダウンロードは、日次でデータが更新されること、そして、なによりダウンロードが簡単で信頼性が高い、という点で大きな利点があります。逆に、抽出が国ごとであり、すべての国が対象になっていない、ということが、欠点といえば欠点といえます。

### Metro Extracts
[Michal Migurksiさん作のサイト](http://metro.teczno.com/)では、世界各地の都市のshapefileが配布されています。特定の都市のデータだけが必要な場合は、このデータが有用でしょう。ただし、このサイトは不定期更新なのが欠点といえます。

>	Remember that features in OpenStreetMap have an unlimited number of "free" tags,
>	but shapefiles have attributes stored in a limited number of columns. This means
>	that when OSM data is converted into shapefiles, only the specified tags will be
>	included in the shapefile table. The websites listed above provide shapefiles
>	with a default set of common tags, but if you want to extract specific tags
>	you will need to use one of the more specialized services in the next section
>	or learn how to export the data yourself.

カスタマイズ可能なデータ抽出
-------------------
### HOT Exports
[OpenStreetMap人道支援チーム (HOT)](http://hotosm.org)は、ユーザごとに対象地域の変更が可能なデータ抽出サイトと、抽出時に含める指定タグを選択した[JOSMプリセット](/en/editing/josm-presets)を提供しています。[export.hotosm.org](http://export.hotosm.org)は、HOTが活動しているすべての地域で利用可能です。

![hot exports][]

### BBBike
[BBBike.org](http://extract.bbbike.org/)でも、世界各地のデータを抽出することが可能です。抽出時のタグを指定できるのが、このサイトの強みです。唯一の欠点は、抽出対象となるタグが必ず決まっている、ということでしょうか。

まとめ
-------
この章で紹介したサービスは、一般的なOSMユーザがGISソフトウェアなどで作業する際に必要となる項目が揃っています。しかし、より詳細なデータを使いこなしたいという要望もあるかもしれません。これからの章ではかなり技術的な内容を含みますが、OSMデータへ本格的にアクセスして使い倒すために必要となるより詳しい方法について紹介したいと思います。

[hot exports]: /images/jp/osm-data/getting-data/hot-exports.png
