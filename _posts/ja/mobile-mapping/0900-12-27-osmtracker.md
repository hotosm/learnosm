---
layout: doc
title: OSMTracker
permalink: /ja/mobile-mapping/osmtracker/
lang: ja
category: mobile-mapping
---

OSMTracker
==============

This file is now out of date - a newer version is available within the English section, which may be accessed from the list at the top of this page. If you are willing to translate the newer version, please contact the LearnOSM team from one of the links on this site, Thank you.

このセクションでは、データ収集の際に利用可能で、GPS機器の代わりに使うことができるAndroidアプリケーションについて学習します。まずはOSMTrackerを紹介します。このアプリケーションは、移動した軌跡やウェイポイントの記録、ジオタグ情報の付与やビデオの撮影などが可能です。記録した軌跡はGPX形式のファイルとしてエクスポートすることができますので、JOSMでの編集の際に利用したり、OpenStreetMapへアップロードすることも可能です。


OSMTrackerのインストール
-------------------------

OSMTrackerをインストールする場合、Google Playstoreを表示させ、検索ボックスに "OSMTracker" と入力してください。以下がOSMTrackerのロゴです。

![OSMTracker Logo][]

インストールをクリックします。

OSMTrackerの設定
---------------------------------

インストールが完了したら、次はOSMTrackerの設定変更を行います。

OSMTrackerを開き、画面右上に表示されている **Setting** を開きます。

![OSMTracker configuration][]

設定項目から **GPS Logging Interval** を選択します。この項目では、アプリケーションが軌跡を記録する際の頻度を設定することができます。デフォルトの設定は0秒となっており、OSMTrackerは位置の記録を毎秒行うことを意味しています。この設定そのままでは、電池を早く消耗してしまいます。例えば2秒に1回の記録などのように、設定値を変更します。


![Settings page][]

**Background Map** 項目を選択します。 **background map**に一覧が表示されますので、OpenStreetMapの画像を背景図として表示したい場合、その項目を選んでください。

You can also set up map type with **Map Tile Provider**. Choose one of
the three map provider, for example **Cyclemap**.

他の地図スタイルを表示させたい場合は、**Map Tile Provider**から設定を変更可能です。3つの項目の中から、好みに近いスタイルを選択してください。例えば、 **Cyclemap**などがあります。


OSMTrackerの利用
-------------------------

これで、OSMTrackerを利用する準備が整いました。記録を開始する際には、端末のGPS機能が有効になっていることを確認し、メインページの上部に表示されているプラスアイコン (+) を選択します。

記録が開始されると、ページが自動的に **Track Logger** に切り替わります。端末のGPS機能が有効になっていない場合、OSMTrackerは機能を有効にするかどうか訪ねてきます。トップページには、現在取得している位置の精度と、衛星からの信号をどの程度強く端末が受信しているかが表示されます。ひとつ気をつけて欲しいのは、端末が現在地を十分に補正できていない場合、Track Loggerの機能はほとんどが無効化されることです。現在地の取得精度が不十分の場合は、トップページにその旨が表示されます。位置の精度が10mを超える場合、軌跡の取得を行うにはもう少し待ったほうがよいでしょうし、もし行ったとしても、あまりよい結果は記録されません。その状態で記録される軌跡は、実際に移動を行った場所とはかけ離れた位置が記録されます。

![Track Logger page][]

ウェイポイントの記録は、**Tracker Logger**ページに表示されているアイコンをクリックするだけです。例えばレストランを記録したい場合、まず**Amenity**アイコンを選択し、それから**Restaurant**を選択します。しかしOSMTrackerでは、レストランの名称やオーナー、住所など、追加の情報を記録することができません。そうした追加情報を記録する場合は、**Track Logger**ページに表示されている**Text note**を選択して入力する必要があります。

記録した軌跡の結果を保存する場合、トップページに表示されているフロッピーディスクのアイコンを選択してください。選択すると、OSMTrackerのメインページにある **Tracklist** に結果が表示されるようになります。記録した軌跡は以下の手順を行うことで、OSM地図を背景として確認表示させることが可能です。

-   対象の軌跡を選択
-   **Track Details**の右上に表示されている ![Tracklist][] アイコンを選択
-   Display trackを選択

![Displaying tracks][]

軌跡の表示画面にはいくつかのシンボルが表示されます。青いラインはあなたが移動した軌跡の線を示し、黄色い星のシンボルはなにかしらのウェイポイントの位置、黄色い人型のシンボルはあなたの軌跡の終点を示します。

![Track map display][]

**Track Detail**ページでは、軌跡の名称や解説文を変更したり、タグの追加作業やGPXへのエクスポート、ファイルの公開状態 (非公開、公開、追跡可能、識別可能) の変更を行うことができmす。軌跡のログをGPX形式に変換し、JOSMで開くためには、Track Detailページに表示されているこのアイコン ![Convert to GPX][] を選択し、形式の変換を行う必要があります。この作業を行うことで、OSMTrackerは軌跡のログをGPX形式に変換し、端末の内部ストレージに保存します(フォルダ名やパスは設定によって変動)。 **Track Detail**ページでは、以下の作業を行うことで軌跡のファイルをOpenStreetMapにアップロードすることが可能です。


-   **Track Detail** ページに表示されている **OpenStreetMap upload**を選択します。
-   OpenStreetMapへのアップロードページが表示されます。このページでは、OpenStreetMapへのアップロードを行う前にアップロード時のファイル名、解説文、タグ、ファイルの公開設定を行うことが可能です。
-   Save and Uploadを選択します。
-   ブラウザが起動し、OpenStreetMap.orgのサイトへのログイン画面が表示されます。ユーザ名とパスワードを入力してください。
-   OSMTrackerがあなたのアカウントにアクセスし、データのアップロード作業を要求している旨が、OpenStreetMapのサイトに表示されます。 "upload GPS Trace"をチェックし、Save Changesをクリックしてください。

![OSM authorization of OSmTracker][]

-   これで、OpenStreetMapへのGPXファイルアップロードが完了です。アップロードした後は、OpenStreetMap.orgのサイトの GPS Tracesのタブを表示することで、ファイルを確認することができます。

これで、OSMTrackerの使い方の解説は終わりです。Happy Mapping!!

[OSMTracker Logo]: /images/mobile-mapping/osmtracker_image00_en.png
[OSMTracker configuration]: /images/mobile-mapping/osmtracker_image01_en.png
[Settings page]: /images/mobile-mapping/osmtracker_image02_en.png
[Track Logger page]: /images/mobile-mapping/osmtracker_image03_en.png
[Tracklist]: /images/mobile-mapping/osmtracker_image04_en.png
[Displaying tracks]: /images/mobile-mapping/osmtracker_image05_en.png
[Track map display]: /images/mobile-mapping/osmtracker_image06_en.png
[Convert to GPX]: /images/mobile-mapping/osmtracker_image07_en.png
[OSM authorization of OSmTracker]: /images/mobile-mapping/osmtracker_image08_en.png
