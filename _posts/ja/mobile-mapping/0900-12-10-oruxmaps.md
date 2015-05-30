---
layout: doc
title: OruxMaps
permalink: /ja/mobile-mapping/oruxmaps/
lang: ja
category: mobile-mapping
---


OruxMaps
===============

この章では、OruxMapsの設定方法、ウェイポイントの作成方法、軌跡ログの表示方法、軌跡ログのエクスポート方法について解説します。

OruxMapsのインストール
------------------

Google Play Storeから、 **OruxMaps**を検索してインストールを行います。検索後の一覧の上位に表示されるはずです。

![Search OruxMaps in Play Store][]

**Install**をクリックすると、アプリケーションに必要な権限が表示されますので、許可してください。

![Install OruxMaps][]

おめでとうござます！ 無事、OruxMapsが端末にインストールされました！

OruxMapsの使い方
--------------------

アプリケーションを最初に起動すると、以下のようなウィンドウが表示されます: 

![Running OruxMaps for the first time][]

OruxMapsでは、オンラインマップとオフラインマップを選択することができます。お勧めはオフラインマップで、こちらはインターネット接続が無い環境でも利用することが可能です。OruxMapsをオフラインで利用するには、2つの方法があります。もしオフラインマップを持っている場合、こちらに追加することも可能です！ 表示されるボタンが多いため、最初はかなり混乱すると思いますが、心配しないでください。これから、それぞれのボタンの解説を行います。

![Interface overview][]

Source: [OruxMaps 英語版マニュアル](http://www.google.com/url?q=http%3A%2F%2Fwww.oruxmaps.com%2Foruxmapsmanual_en.pdf&sa=D&sntz=1&usg=AFQjCNFY7Tk-Gzz9NFKy9WOsnfnn8x3Kwg)

背景図となる地図は **Maps \> Switch Maps** から変更することができます。オプション画面を表示した後、 **Online Map** と **Offline Maps** を選択することが可能です。OruxMapsでは、オンラインマップとしていろいろな地図を表示することが可能ですが、端末の通信プランによっては通信量がかかることを忘れないでください。オフライン用の地図データを格納する場所は **Setting \> Maps** から変更することができます。デフォルトでは、端末の内部ストレージの **OruxMaps/Mapfiles** フォルダに格納することができます。

![Offline maps storage settings][]
 
移動軌跡の取得
-------------------

移動の軌跡を取得する前に、軌跡や毛色の設定を見返してみましょう。まずは **Auto GPX Creation** です。この項目をチェックしておくと、軌跡を取得した直後 (Stop Tracking機能を使った後) に .gpxファイルが自動的に作成されます。そのため、軌跡を記録した直後に **OruxMaps/Tracklogs** を表示しても、
エクスポートする必要なく、軌跡ログを確認することができます。2つめの設定は **Ask Track Name**です。この機能は軌跡の記録を行う際に記録するファイル名を指定することができるため、記録したそれぞれのログファイルごとの内容がわかりやすくなります。


ふたつめの項目は **Ask Track Name** です。この機能は、軌跡の取得を開始する際に、軌跡に対して特定の名前を設定しておくことが可能になります。


![Tracklog settings][]

軌跡の取得を開始する際に、端末のGPS機能が有効化されているかどうかを確認してください。 **Start GPS** や
**Start Rec** などOruxMapsの機能は、GPS機能が無効化されていると利用することができません。端末のGPS機能を有効化するには、端末の **Location Setting** から行うことができます。端末のLocation Settingを有効化した後に **Start GPS** (1) 機能を利用すると、現在の位置を知ることができます。また、 **Start Rec.** 機能は、現在の位置の特定が完了した後に利用可能になります。


![Start track recording][]

軌跡の記録を終了するには、画面右側の同じボタン(2)をもう一度押してください。記録が完了すると、OruxMapは軌跡のログを自動的に端末の内部データベースに保存します。保存された軌跡にアクセスするには、トップページの **Routes** パネルを開き、 **Manage** を選択してください。記録されている軌跡はすべてこの場所に表示されていますので、表示したい軌跡ログを押し、 **Load the Track** (1)を選択してください。Auto GPX creation機能を無効化している場合、軌跡ログのファイル形式変換 (GPX、KML、KMZ) はこのページから行うことができます。軌跡ログを選択して **Export as** を選んでください。

![Managing tracklogs][]

OpenStreetMapのアカウントがある場合、記録した軌跡を OruxMapsから直接アップロードすることが可能です。アップロードを行う前に、 *Setting \> Integration \>
OpenStreetMap** を開き、ユーザ名とパスワードを入力する必要があります。ユーザ名とパスワードの入力後、軌跡/経路管理画面の **Upload to (3)** から軌跡ログのアップロードが可能になります。

選択を行うと、いくつかのポップアップが表示されますので、 **OpenStreetMaps** (1)を選択し、 **Tracklog type** (2)の選択、 **Description** (3) と **Tag** (4) の追加を行ってください。項目の入力が完了したら、 **Upload GPX** (5) を押してください。通知のポップアップが表示されますので、 **OK** (6)を押すと、あなたの軌跡をOpenStreetMapウェブサイト上で直接閲覧することが可能になります。

![Uploading tracks to OpenStreetMap][]

​ウェイポイントの追加
---------------------

![Creating a waypoint][]

ウェイポイントの追加を行う際は、ページの上部に表示されている **Waypoint** シンボル(1)を表示させ、 **Create** (2)を選択してください。ウェイポイント作成ページが表示されますので、ウェイポイントに名前をつけてください。この際、ウェイポイントについての解説を追加することもできますし、Coodinatesチェックリストをチェックしておくと、ウェイポイントの緯度経度情報が自動的に付与されるようになります。

![Waypoint creation settings][]

記録したウェイポイントを表示するには、 **Waypoint \> Manage** を選択してください。この画面から、ウェイポイントの情報変更や、削除、エクスポートを行うことができます。ウェイポイントを **地図** で確認するには、ウェイポイントを選択し、show in map (1)を選びます。ウェイポイントのエクスポートを行う際は、 **Export** (2)を選択してください。エクスポートしたウェイポイントデータは、デフォルトでは端末の内部ストレージ (初期設定値は **oruxmaps/geocaches**) に保存されます。

![Managing save waypoints][]

まとめ
-----------

おつかれさまでした！ これで、OruxMapsを現地調査の際に利用する手順は完了です。最初は戸惑うかもしれませんが、アプリケーションに慣れてくれば大丈夫です。


[Search OruxMaps in Play Store]: /images/mobile-mapping/oruxmaps_image00.png
[Install OruxMaps]: /images/mobile-mapping/oruxmaps_image03.png
[Running OruxMaps for the first time]: /images/mobile-mapping/oruxmaps_image01.png
[Interface overview]: /images/mobile-mapping/oruxmaps_image09.png
[Offline maps storage settings]: /images/mobile-mapping/oruxmaps_image06.png
[Tracklog settings]: /images/mobile-mapping/oruxmaps_image11.png
[Start track recording]: /images/mobile-mapping/oruxmaps_image02.png
[Managing tracklogs]: /images/mobile-mapping/oruxmaps_image10.png
[Uploading tracks to OpenStreetMap]: /images/mobile-mapping/oruxmaps_image05.png
[Creating a waypoint]: /images/mobile-mapping/oruxmaps_image07.png
[Waypoint creation settings]: /images/mobile-mapping/oruxmaps_image08.png
[Managing save waypoints]: /images/mobile-mapping/oruxmaps_image04.png
