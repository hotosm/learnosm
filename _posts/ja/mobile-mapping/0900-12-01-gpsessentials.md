---
layout: doc
title: GPS Essentials
permalink: /ja/mobile-mapping/gpsessentials/
lang: ja
category: mobile-mapping
--- 



GPS Essentials
===================

GPS Essentialsのインストール
-------------

1. Androidデバイスのホームスクリーンに表示されている“Google Playストア”のアプリケーションアイコンをタップし、Android Marketを開きます。
2. 画面右上に表示されている"検索"アイコンをタップします。
3. 画面上部の検索バーに “GPS Essentials”と入力し、検索します。
4. GPS Essentialsのアイコンをタップし、"インストール"を選択します。アプリケーションのアイコンは以下のとおりです: 

   ![GPS Essentials logo][]

Google Playに接続できなかったり、例えば過去バージョンや最新開発版など、安定版以外のバージョンをダウンロードしたい場合には、http://www.images.comから直接 GPS Essentialsを入手することができます。

オフラインでGPS Essentialsを使えるように設定
-------------

1. GPS Essentialsを開きます。Settingを表示させ、Map Cacheを選択します。キャッシュの最大容量を maximum(無制限)に変更します。

   ![Map Cache][]

2. 回線が太く、安定したネットワーク回線を確保してください。メインスクリーンから、'Portable Maps'を選択します。ポータブルマップから表示させた地図画像が、自動的にAndroidのメモリに保存されます。オフラインで利用したい範囲のマップをできる限り表示させ、それぞれのウェイポイントの近辺に対してゆっくりとズームさせてください。

3. ネットワーク回線から切断し、ポータブルマップモードで表示させます。もし地図の詳細が表示されない場合、もう一度ネットワーク回線に接続し、その場所の近くでズームさせる作業を行ってください。

AndroidフォンのGPS機能
-------------

GPS Essentialsアプリケーションを使う前に、AndroidのGPS機能が有効化されていることを確認してください。

![Enable GPS in Android][]

衛星からの信号の確保
-------------

GPS受信機が位置を特定(別称: GPS位置補正/GPS fix)する場合、最低でも4つ以上の衛星からの信号を受信する必要があります。
衛星が水平線上に近ければ近いほど、衛星からの信号は受信機までに長い距離を伝送されます。そのため、衛星が天頂に近ければ近いほど、その衛星の精度は高くなるということできます。


現在地の衛星の状態をチェック:

1. メインメニューから Satellitesを選択します。
   ![Satellites page][]

2. 位置の補正として最低限4つ以上の衛星を補足することができると、GPS Essentialsの各種機能を利用できるようになります。

軌跡の作成
-------------

1. メインメニューから、Tracksを選択します。

2. ツールバーから Startを選択します。新しい軌跡のエントリが作成され、位置情報の記録が開始されます。GPS位置補正が有効化するまで、数秒待ってください。

   ![New Track][]

3. 記録を一時停止する場合は、Pauseボタンを選択してください。記録を再開する場合、ボタンをもう一度押すと再開されます。

ウェイポイントの作成
-------------

### ポータブルマップの利用

1. メインメニューから、Portable Mapsを選択します。

2. 地図をタップして長押しし、新しいカーソルを作成します。

   ![Waypoints1][]

3. カーソルをドラッグし、新しくウェイポイントを作成したい場所に移動させます。

4. Actionsボタンをタップすると、そこから行うことができる操作の一覧が表示されます。以下のアイコンがActionsアイコンです。
	
   ![Actions][]
	
5. Add Toolを選択すると、ウェイポイントが作成されます。
	
   ![Waypoints2][]
	
### Google Mapsの利用

1. メインメニューから、Google Mapsを選択します。

2. ウェイポイントを追加したい場所に移動します。

3. Add Toolを選択し、ウェイポイントを作成します。ウェイポイントを作成する場所をタップしてください。ウェイポイントを現在地の緯度経度で作成したい場合、Add Waypointのボタンをもう一度タップします。

   ![GoogleMaps][]

4. bとcのステップを繰り返すことで、複数のウェイポイントを記録することができます。

### ウェイポイントページの利用

1. メインメニューから、Waypointsを選択します。

2. Add Toolを選択して、ウェイポイントを作成します。

   ![Waypointspage1][]

3. 1つめのウェイポイントが記録されます。この画面から、ウェイポイントの属性値の変更を行うことが可能です。もう一度リストに戻る場合は、Backボタンを押してください。
	
   ![Waypointspage2][]

4. Mapペインを選択すると、ウェイポイントが記録されている位置を地図上に表示することができます。
	
   ![Waypointspage3][]

5. Select Close icon to save your waypoint. The Close icon looks like this:
5. Closeアイコンを選択することで、ウェイポイントの保存が可能です。以下がCloseアイコンです。

   ![Close][]
	
位置情報付きの写真
-------------

1. メインメニューから、Cameraを選択します。

2. 写真を撮影すると、その写真に位置情報が付与されます。

3. 写真の撮影を行った位置は自動的にウェイポイントとして記録され、ポータブルマップとGoogle Mapsページに保存されます。

4. データ (写真の位置情報とファイル名) は、Waypointsページにも保存されます。
撮影した画像をどのようなアイコンで表示させるかを選択することも可能です。アイコンを変更した場合、ポータブルマップとGoogle Mapsのページにも変更が反映されます。

写真の保存
-------------

撮影された写真はすべて、SDカードの com.mictale.images フォルダに保存されます。このフォルダにある写真は、削除や追加を行ってもかまいません。GPS Essentialsは、写真の追加や削除があるかどうかを定期的にスキャンします。

ウェイポイントのエクスポート/保存
-------------

1. メインメニューから、Waypointsを選択します。記録されているウェイポイントの一覧が表示されます。

2. すべてのウェイポイントをエクスポートする場合は、OptionsボタンからExportを選択します。単一のウェイポイントをエクスポートする場合は、対象のウェイポイントを選択した状態で、OptionsボタンからExportを選択してください。

3. エクスポートする際のファイル形式を、ドロップダウンボックスで選択します。今回は、KML (Google Earth)をクリックします。

   ![Export file format][]

4. SDカードのアイコンを選択すると、ファイルの保存先を変更することが可能です。


   ![Export to SD card][]

5. このアイコンを選択すると、保存が行われます。

   ![Arrow][]

軌跡のエクスポート/保存
-------------

1. メインメニューから、Tracksを選択します。現在記録されている軌跡の一覧が表示されます。

2. OptionsボタンからExportを選択すると、現在の軌跡の内容がファイルに書き込まれます。

3. 過去に記録した軌跡をエクスポートする場合は、Tracksアイコンを選択し、対象の軌跡を選んでください。Optionsボタンをクリックし、Exportを選択してください。Tracksアイコンは以下のアイコンです。

   ![Footprints][]

4. エクスポートする際のファイル形式を、ドロップダウンボックスで選択します。今回は、KML (Google Earth)をクリックします。

   ![Export1][]

5. SDカードのアイコンを選択すると、ファイルの保存先を変更することが可能です。


   ![Export3][]

6. このアイコンを選択すると、保存が行われます。

   ![Arrow][]

[GPS Essentials logo]:  /images/mobile-mapping/gpsessentials-Logo.png
[Map Cache]:  /images/mobile-mapping/gpsessentials-mapcache.png
[Enable GPS in Android]:  /images/mobile-mapping/gpsessentials-GPSenable.png
[Satellites page]:  /images/mobile-mapping/gpsessentials-satellites.png
[New Track]:  /images/mobile-mapping/gpsessentials-newtrackstart.png
[Waypoints1]:  /images/mobile-mapping/gpsessentials-cursor.png
[Actions]:  /images/mobile-mapping/gpsessentials-actionsbutton.png
[Waypoints2]:  /images/mobile-mapping/gpsessentials-addwaypoint.png
[GoogleMaps]:  /images/mobile-mapping/gpsessentials-addwaypointgooglemaps.png
[Waypointspage1]:  /images/mobile-mapping/gpsessentials-add.png
[Waypointspage2]:  /images/mobile-mapping/gpsessentials-wp.png
[Waypointspage3]:  /images/mobile-mapping/gpsessentials-map.png
[Close]:  /images/mobile-mapping/gpsessentials-save.png
[Export file format]:  /images/mobile-mapping/gpsessentials-export.png
[Export to SD card]:  /images/mobile-mapping/gpsessentials-exportwaypoints.png
[Arrow]:  /images/mobile-mapping/gpsessentials-savebutton.png
[Footprints]:  /images/mobile-mapping/gpsessentials-tracksicon.png
[Export3]:  /images/mobile-mapping/gpsessentials-sdcardsave.png
