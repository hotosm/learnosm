---
layout: doc
title: osm2pgsql
permalink: /ja/osm-data/osm2pgsql/
lang: ja
category: osm-data
---

osm2pgsql
==========
前章では、WindowsでPostgreSQLとPostGISをセットアップする方法、そしてデータベースの新規作成方法と、そこへshapefileを読み込ませる方法について紹介しました。OpenStreetMapのデータをデータベースへ読み込ませる場合、同じように、OSMのデータをshapefileで入手し、shapefileローダーを使ってそのデータを読み込ませることもできます。ですが、この方法では、あなたが使いたいと思う全てのデータがデータベースに入るわけではありません。この章では、OSM生データをPostGISへ読み込ませるコマンドラインツール **osm2pgsql** の使い方を紹介します。

この解説ではosm2pgsqlをWindowsで構築するステップを紹介しますが、他のOSでもステップはほぼ一緒です。ただしその場合でも、PostGISデータベースのセットアップは正しく行うように気をつけてください。

osm2pgsqlの入手
-------------
-   Windowsバージョンのosm2pgsqlを入手するには、ブラウザで以下のページを開いてください [http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows](http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows)

![windows binary][]

-	osm2pgsql.zipという名称のファイルをダウンロードします
-	ファイルシステム上でファイルを解凍します。解答したフォルダを、あまり普段動かさない位置へ移動させてください。なぜならば、システムパスへそのファイルの位置を登録する必要があるためです。

![unzip it][]

-	osm2pgsqlのディレクトリ内に、osm2pgsql.exeというファイルがあります。このファイルが、データのインポートで使われるファイルとなります。しかし、Windowsからこのファイルを参照させるために、このファイルの場所をシステムパスへ登録する必要があります。スタートメニューを開き、"system path"と入力してください。

![system path][]

-   "システム環境変数を変更"の項目があるので、クリックします。

![edit variables][]

-   "環境変数"のボタンをクリックします。

![env variables][]

-   "パス"という変数が一番下にありますので、"編集..."をクリックします。

![find path][]

-   osm2pgsql.exe が配置されているディレクトリを、パス変数に追加する必要があります。

![edit path][]

-	既に入力されている文字列の最後にセミコロン ; を追加し、その後ろに、osm2pgsqlを配置してあるパスを入力します。例えば **C:\\** ディレクトリ配下の **osm2pgsql** フォルダに格納している場合、入力すべきパスは以下のようになります: 

		C:\osm2pgsql\Win32

-   何度かOKを押して、新しい設定を保存してください。
-   **osm2pgsql** が動作するようになりました。確認をしてみましょう。
-   Windowsのコマンドプロンプトを起動させましょう。スタートメニューで "cmd" と入力すると、アプリケーションが表示されますので、Enterキーを押すか、アイコンをクリックしてください。

![cmd][]

-   黒いコマンドウィンドウが開きますので、以下の文字列を記入します: 

		osm2pgsql

-   ここまでの設定が正しく行われていれば、以下の文字列が表示されます: 

![osm2pgsql test][]

-   上記のような出力が表示されず、 **osm2pgsql** が見当たらないというメッセージが出てきた場合は、環境変数のパスで入力した文字列が間違えている可能性が高いです。

OSM生データの入手
---------------------
**osm2pgsql**を実行する前に、データベースに投入するためのOSM生データを取得する必要があります。**.osm** ファイルが手元にない場合、[http://metro.teczno.com/](http://metro.teczno.com/)からファイルをダウンロードしてみてください。このサイトでは、さまざまな都市のOSM抽出データを配布しています。データベースへのインポート対象となる都市を選択し、PBFファイルをダウンロードしてください。PBFファイルは、通常の **.osm** ファイルを圧縮した形式です。もし他の地域のファイルでosm2pgsqlを試したい場合、[データの入手](/ja/osm-data/getting-data)ページにリストアップされているサイトであればどこでもかまいません。

スタイルファイルの入手
------------------
-   **osm2pgsql**は、データベースへデータをインポートする際にどのタグを対象にするかを指定するため、スタイルファイルが必要となります。デフォルトのスタイルファイルは[こちら](/files/default.style)からダウンロードできます。

データのインポート
-------------------
-   pgAdmin IIIを起動し、前章を参考にして、**osm**という名称のデータベースを新規作成してください。
-   データをインポートするには、**osm2pgsql**をコマンドラインから実行することになります。スタートメニューをくりっｋし、"cmd"と入力してエンターを押すことで、コマンドプロンプトが起動します。

![command prompt][]

いくつかのオプションを付与して **osm2pgsql** を実行してみましょう。最低限必要なオプションは以下のとおりです: 

-   OSMデータファイルの位置
-   データベースの名前と、データベースのユーザ名
-   データベースへどのOSMタグをインポートするかを定義するスタイルファイル

動作を単純化するため、OSMファイルは C:\ のディレクトリに配置します。

-	以下のコマンドを入力します。OSMファイルとスタイルファイルの場所は、自身の環境にあわせてください。

		osm2pgsql -c -d osm -U postgres -H localhost
		-S C:\default.style C:\bangkok.osm.pbf

-	Enterを押します。工程に問題がなければ、処理が開始されます。データベースへデータが読み込まれるには、数分間ほどかかります。

![osm2pgsql output][]

-   もしOSM生ファイルが大きい場合、osm2pgsqlのインポート処理にメモリ割り当てを追加する必要があるかもしれません。割り当てを増やすには、実行するコマンドに以下の文字列を追加してください。
    (訳注: 日本全体などの広範囲を実行する場合、この追加を行っても処理に数時間かかることがあります)
		--cache 600

結果テスト
-----------
インポートが成功したかどうかをテストし、QGISでデータベースの中身を確認してみましょう。

-	QGISを起動させ、"Add PostGIS Layers"ボタンをクリックします。

![qgis add postgis button][]

-   上部に表示されている "Connections"から、 "New"をクリックします。
-   この接続に対して名前をつけてください。データベースの下には **osm** (データベースの名前) を入力します。
    ユーザ名には postgres と入力し、パスワードを入力します。

![connection settings][]

-   OKをクリックすると、接続設定が保存されます。 "Connect"をクリックして、PostgreSQLサーバへ接続してみましょう。データベースのユーザ名とパスワードをもう一度入力する必要があるかもしれません。
-   "public"の隣をクリックすると、データベースに格納されているすべてのレイヤ (テーブル) が表示されます。osm2pgsqlでは、オブジェクトの種別ごと (ポイント、ライン、ポリゴン) に別々のテーブルが作成されることに注意してください。roadsテーブルも作成されてリ、そこには主要な道路だけが格納されています。

![postgis layers][]

-   1つ以上のレイヤーを選択し、"Add"をクリックしてください。もし確認事項が表示されたら、CSRにはWGS84を選択してください。
-   問題がなければ、選択したレイヤがQGISの地図表示画面へ追加されます。

![osm in qgis][]

>   レイヤの属性テーブルを開いてみると、それぞれの属性がOSMのタグと対応していることに気がつくと思います。
>   ここで指定されているタグは **osm2pgsql** でデータをインポートする際に定義したものです。
>   デフォルトでインポート対象にならないタグをインポートするには、osm2pgsqlがデータスキーマを定義する際に参照する *スタイル* ファイルを編集してください。

まとめ
-------
自分でデータベースへOpenStreetMapのデータをインポートするにあたり、 **osm2pgsql** はたいへん強力なツールです。特に、最新のOSMデータが必要とされる場合や、タグ属性をカスタマイズする必要がある時、より複雑なプロジェクトを実行するときにも非常に役に立ちます。

インポートの際によく使われるもうひとつのツールは [imposm](http://imposm.org/) と呼ばれ、比較的最近開発がスタートしました。インポート処理速度の向上をはじめ、osm2pgsql以上の性能を持ちますが、今回必要となる重要な機能が次の imposm バージョン3で実装予定の機能となっています。

osm2pgsqlに関するより詳しい情報は、OSM Wikiを参照してください - [http://wiki.openstreetmap.org/wiki/Osm2pgsql](http://wiki.openstreetmap.org/wiki/Osm2pgsql)

[windows binary]: /images/jp/osm-data/osm2pgsql/windows-binary.png
[unzip it]: /images/jp/osm-data/osm2pgsql/unzip-it.png
[system path]: /images/jp/osm-data/osm2pgsql/system-path.png
[edit variables]: /images/jp/osm-data/osm2pgsql/edit-environment-variables.png
[env variables]: /images/jp/osm-data/osm2pgsql/environment-variables.png
[find path]: /images/jp/osm-data/osm2pgsql/find-path.png
[edit path]: /images/jp/osm-data/osm2pgsql/edit-path-variable.png
[cmd]: /images/jp/osm-data/osm2pgsql/cmd.png
[osm2pgsql test]: /images/jp/osm-data/osm2pgsql/osm2pgsql-test.png
[command prompt]: /images/jp/osm-data/osm2pgsql/command-prompt.png
[osm2pgsql output]: /images/jp/osm-data/osm2pgsql/osm2pgsql-output.png
[qgis add postgis button]: /images/jp/osm-data/osm2pgsql/add-postgis-button.png
[connection settings]: /images/jp/osm-data/osm2pgsql/connection-settings.png
[postgis layers]: /images/jp/osm-data/osm2pgsql/postgis-layers.png
[osm in qgis]: /images/jp/osm-data/osm2pgsql/osm-in-qgis.png
