---
layout: doc
title: OSMデータの概要
permalink: /ja/osm-data/data-overview/
lang: ja
category: osm-data
---

OSMデータの概要
===================
<!--In this section we'll consider how OpenStreetMap functions, which
will help us to understand better how the data is structured, and how
we can best utilize it.-->

OSMの動作原理
--------------
OpenStreetMapがどのようにして動いているか、考えてみましょう。世界中に散らばる数千のマッパーたちが、常に地図のどこかを編集し、データを追加しています。しかし、その舞台裏はどうなっているのでしょうか。

誰かがJOSMやiDなどの編集ツールを使ってデータの変更を行うとき、ツールはOpenStreetMapの中央サーバと通信し、データに変更があることを伝えます。中央サーバは巨大なデータベースであり、OpenStreetMapに登録されているあらゆる地理データの位置情報、そしてそこに付与された属性が格納されています。

OSMは自由でオープンです。そのため、このデータベースに格納されているデータはだれでもすべてダウンロードすることが可能です。ただし、データのサイズはあまりに大きいです(*圧縮状態ですら30GB以上あります*)。そのため、データをすべていっぺんに扱うことはほぼ不可能となっています。

この制限を克服するため、OSMではさまざまな **エクスポート** や **データ抽出** の仕組みがあります。エクスポートとは、OpenStreetMap本来のデータ形式から、あなたが扱いやすい形式に変換することを指します。 **データ抽出** はその工程とは異なり、あなたが対象とする地域のデータだけを切り出す作業のことを指します。こちらの工程は、対象の地域内にある特定の情報を持ったデータだけを抜き出すことも意味します。2つの用語はしばしば交互に使われます。OSMデータの各項目で、それぞれの作業についてより詳しい内容が紹介がされています。

地理データの使い方
--------------
GISの経験があれば別ですが、そうでない場合、まずJOSMなどのOSM編集ソフトと、QGISやArcGISといったGISソフトの違いを認識することがとても大切です。

iDやJOSMといった編集ソフトの最も中心となる部分は、OpenStreetMapのデータ編集を簡単に行えるようにする、という機能です。しかし逆に、これらのソフトはデータの分析や検索のためのものではなく、それらの機能は別のアプリケーションの領域となります。GISソフトウェアは見やすい地図を作るためのデザインや、データの分析と検索など、多くの機能を有しています。自由なオープンソースソフトウェアである[QGIS](http://www.qgis.org)もそのひとつです。GISソフトウェアでも地理データの編集は可能です。しかし、OpenStreetMapの編集についていえば、専用のOSMエディタを使ったほうが簡単に作業を行えます。

次の章では、OpenStreetMapやその他一般的な地理データのファイル形式について詳しく紹介します。その後で、OSMデータの取り扱い方や、いろいろなファイル形式への変換方法についても目を向けることにします。


<!--

Getting the Data
-----------------



That's
great, but how do you get out the data that you want?

In this chapter we'll go over the various ways of exporting OSM data. We'll stick to the basics,
but keep in mind that in order to use the data effectively, you'll probably need GIS software,
such as the free Quantum GIS application.

Before we begin, let's go over some terminology. First, **exporting** means to convert OpenStreetMap data from its native XML format into a format that is convenient for you. This is slightly different from **extracting** data, which means to cut the data from the area of your choosing.  It may also mean to pull out the specific features that you want from an area. We'll use these terms frequently in this chapter, so it's important to understand the difference.




The OSM API
------------
The OSM editing process functions because of what is known as an API, which allows
editing software to communicate with the central server. For example, when you are
using JOSM and you select the area you want to map, an API call is sent to 
the server, requesting all of the data that exists within the area that you 
have selected.

In fact, when you download data in JOSM, you are **extracting** the data from a specific
area of the world. The data is then sent to you in **.osm** format, which you can then
edit in JOSM. If you download data in JOSM and then save it, you will see that the file
type is **.osm**. We'll talk more about this in the next chapter.
