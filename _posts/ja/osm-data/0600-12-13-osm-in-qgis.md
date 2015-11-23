---
layout: doc
title: QGISでのOSMデータ利用
permalink: /ja/osm-data/osm-in-qgis/
lang: ja
category: osm-data
---

QGISを使ったOSMデータ利用
=================

A slightly more recent version of this guide is available in;  
[English](/en/osm-data/osm-in-qgis/)  
[Español](/es/osm-data/osm-in-qgis/)  
[Netherlands](/nl/osm-data/osm-in-qgis/)  
or [Deutsch](/de/osm-data/osm-in-qgis/) 

To help produce translations for this site, go to <https://www.transifex.com> and search for **HOT-OSM**.  

2013年に新しいバージョンのQGISがリリースされ、OpenStreetMap生データの読み込みや処理がたいへん簡単になりました。すなわち、最新のOSMデータへその場でアクセスし、必要となるタグ情報を選択し、SQLiteやShapefileなどの取り回しやすい形式でエクスポートすることが簡単になったのです。

この章ではその作業のための具体的な方法について、順を追って紹介します。QGIS 2.xは既にダウンロードし、インストール済みであると仮定して進めます。もしまだインストールしていない場合は[こちら](http://www.qgis.org/en/site/forusers/download.html)からダウンロードとインストールを行ってください。

この章では、QGISを使って、最新データからカスタマイズしたOSMレイヤを表示するための方法を紹介します。まずは現在のOSM生データを **.osm** の形式で取得します。次に、取得したデータをSQLiteデータベースへ格納します。SQLiteは継承のデータベースシステムで、ひとつのファイルにデータを格納することができます。最後に、必要となる地物やタグ情報だけが含まれたレイヤを作成し、表示します。こうして作成したレイヤは、shapefileなど、さらに別の形式へ変換することが可能です。

OpenStreetMapデータの取得と表示
---------------------------
まず最初に、最新のOSMデータを取得しましょう。データを取得するにはいくつかの方法があります。もちろんJOSMなどを使ってOSMサーバから直接取得してもかまいませんが、広い範囲の生データをいちどに取得するのはとてもたいへんです。その場合、[前章](/en/osm-data/getting-data)で紹介している別の方法を試してみてください。

また、QGIS本来の機能を使ってダウンロードを行うことができます。この章ではそのままQGISの上で作業を行うことになりますので、この方法を使ってダウンロードを行いましょう。ダウンロード機能を使うのは少し難易度が高いですが、今回の目的を考えると、より扱いやすい形式で処理を行うことができるようになります。

-   QGISを起動し、ベクタ -> OpenStreetMap -> データのダウンロード へ進んでください。

![download data][]

-   いくつかの選択肢が表示されます。もし対象となる地域が既にウィンドウに表示されている場合、"From the Map Canvas"の横にあるボックスにチェックを入れてください。既存で表示しているレイヤのデータ範囲からダウンロードする場合は、"From Layer"にチェックを入れ、対象となるレイヤを選択します。今回は"Manual"を選択し、対象となる範囲を **bounding box** から緯度経度で指定してみましょう。作業対象となる範囲を緯度経度の値で指定してください。この時、対象となる範囲をあまり大きくしすぎないように注意しましょう。範囲が大きすぎた場合、エラーが発生する可能性があります。

![bounding box][]

-   出力するファイルの名称と保存場所を選択し、OKをクリックします。
-   ダウンロードが完了すると通知が表示されます。"Close"をクリックして、ダウンロード表示を閉じてください。

![download complete][]

-   指定した場所にOSMデータが保存されています。

>   この方法は、JOSMや[openstreetmap.org](http://www.openstreetmap.org)を使ってダウンロードを行う方法と同じです。
>   広範囲の最新データをダウンロードする場合、[HOT export site](http://export.hotosm.org)や[bbbike.org](http://extract.bbbike.org/)を使用してください。
>   また、こうしたサイトからデータをダウンロードした場合、QGISで読み込む前にそのデータを解凍しておく必要があります。

SQLiteへのデータインポート
---------------------------
次に、**.osm** 生ファイルをSQLiteデータベースへインポートしましょう。

-	Go to Vector -> OpenStreetMap -> Import topology from XML
-   ベクタ -> OpenStreetMap -> XMLからトポロジをインポート を選択します。

![import from xml][]

-   最初のフィールドで、 **.osm**ファイルを選択します。
-   出力するデータベースファイルの名称は変更することができます。
-   "Create Connection..."の横のボックスにチェックを入れたままにしておいてください。

![import dialog][]

-   OKをクリックします。
-   処理が完了したら、"Close."をクリックします。

レイヤの作成
--------------
最後に、データをQGISで利用するため、レイヤを目的に応じてカスタマイズて、定義を行います。

-   ベクタ -> OpenStreetMap ->Spatioaliteへトポロジをエクスポート を選択します

![export topo][]

-   最初のフィールドに、先ほど作成したデータベースを選択します。

![input db file][]

-   "Export type" の配下から、新しくレイヤとして抽出したい地物のタイプを選択します。今回はポリゴン(エリア)を対象とします。

![export type][]

-   レイヤに名前をつけましょう。

"Export tags" がこの作業の肝となります。ここで選択したタグ情報を含むオブジェクトだけが、出力レイヤに含まれるようになります。これにより、対象とするデータへのアクセスが柔軟に、そして厳密に行えるようになります。

-   "Load from DB"をクリックすると、現在データベースに含まれているタグの一覧が表示されます。このとき同時に、それぞれのタグがデータ内で利用されている量も表示されます。
-   レイヤに含めたいタグの横にあるボックスにチェックを入れてください。ここでは、建物ポリゴンを扱う際に有用なタグをいくつか選択しています。

![export full][]

-   選択が終わったら、OKを押してください。
-   ボックスを閉じます。レイヤは自動的に追加されます。

![cairo polygons][]

-   レイヤを右クリックし、"Open Attribute Table"をクリックします。

![open attribute table][]

-   先ほど選択した属性だけがテーブル内に含まれていることが確認できます。

![attribute table][]

この時、レイヤに含まれる情報が建物 **だけ** ではないことに注意してください。この場合、レイヤには元々のデータベース内のすべてのポリゴンデータがジオメトリ情報として含まれており、ただし、選択したタグ情報だけが抽出されている、という状態になります。この状態から建物データだけを表示させるには別途クエリを発行し、 building=yes を含むポリゴンだけをフィルタする必要があります。

まとめ
-------
上記の処理により、最新のOSMデータの取得と、そのデータのGISでの表示を簡単に行うことができます。いちどQGISでこうしたレイヤを作成することで、そのデータをshapefileとして保存したり、フィルタやクエリを使ってデータを処理することができるようになるでしょう。

[download data]: /images/jp/osm-data/osm-in-qgis/download_data.png
[bounding box]: /images/jp/osm-data/osm-in-qgis/bounding_box.png
[download complete]: /images/jp/osm-data/osm-in-qgis/download_complete.png
[import from xml]: /images/jp/osm-data/osm-in-qgis/import_topo_from_xml.png
[import dialog]: /images/jp/osm-data/osm-in-qgis/import_dialog.png
[export topo]: /images/jp/osm-data/osm-in-qgis/export_topo.png
[input db file]: /images/jp/osm-data/osm-in-qgis/input_db_file.png
[export type]: /images/jp/osm-data/osm-in-qgis/export_type.png
[export full]: /images/jp/osm-data/osm-in-qgis/export_full.png
[cairo polygons]: /images/jp/osm-data/osm-in-qgis/cairo_polygons.png
[open attribute table]: /images/jp/osm-data/osm-in-qgis/open_attribute_table.png
[attribute table]: /images/jp/osm-data/osm-in-qgis/attribute_table.png
