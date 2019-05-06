---
layout: doc
title: PostgreSQLのセットアップ
permalink: /ja/osm-data/setting-up-postgresql/
lang: ja
category: osm-data
---

PostgreSQLとPostGIS
====================
この章では、WondowsでのPostgreSQLセットアップ方法、およびデータベースを作成し、そこへ地理データを格納する方法を紹介します。このガイドでは、オープンソースのGISソフトウェアであるQGISの操作方法についても取り扱います。すでに操作に親しんでいれば、たいへん役に立つことでしょう。

それでは、PostgreSQLデータベースへOpenStreetMapデータをインポートする方法を見てみましょう。

PostgreSQLとPostGISのインストール
----------------------------------
この項目では、PostgreSQLをインストールし、そこへPostGIS地理空間拡張を追加します。ワンクリックインストーラがありますので、セットアップ自体はとても簡単です。

-   PostgreSQLウェブサイトから、ダウンロードページを表示します: [http://www.postgresql.org/download/](http://www.postgresql.org/download/)

![postgresql website][]

-   利用しているOSごとに異なるインストール方法が表示されます。"Windows"のリンクをクリックしてください。
-   このページでは、ワンクリックインストーラが実行する動作が説明されています。この作業により、3つのコンポーネントがインストールされます: 
    -   PostgreSQLサーバ: データベースソフトウェア、中心となるコンポーネント
    -   pgAdmin III: データベース操作を行うためのグラフィカルインターフェース
    -   StackBuilder: 追加アプリケーションを取り扱うためのツール; PostGIS拡張を追加するために利用します
-   ダウンロードをクリックしてください。

![postgresql download][]

-   PostgreSQLのどのバージョンをインストールするか、オプションがいくつか表示されます。
    最新のバージョンをダウンロードしてください。この記事を執筆している段階では、9.3.1が最新です。Win x86-32の項目をクリックします。これは、Windows 32ビット版で利用可能なインストーラとなります。

![postgresql version][]

-   ダウンロードが完了したら、ワンクリックインストーラを起動します。

![install 1][]

-   インストールウィザードが表示されますので、"Next"を押してください。オプションはすべてデフォルトでかまいません。
    最初のデータベースユーザ(postgresユーザ)に対して、パスワードを設定してください。このユーザはスーパーユーザ、つまりどんな操作でも実行可能な権限を持っています。設定したパスワードを忘れないようにしてください！

>   PostgreSQLでは、いくつでもデータベースを作成することができます。あるデータベースを地理情報用にして、別のデータベースを通常のデータベースの用途で使用することもできます。
>   また、複数の人間に対して、それぞれ異なるタイプのアクセス権限を付与する必要があるかもしれません。そのためには、それぞれのデータベースに対して **ユーザ** と **ロール** を設定しなくてはいけません。データベースは特定のユーザによって所有される必要があり、通常、データベースに対して変更を行うためにはパスワードが要求されます。
>   データベースに対するアクセス権限をもったユーザを追加することもでき、その場合はそのユーザに対して特定のロールが割り当てられます。例えば、データベースの読み取りだけが可能で、データの変更が許可されていないユーザを設定したいとします。ユーザとロールを使うことで、この設定が可能となります。
>   今回は、権限設定について細かく考えなくても大丈夫です。ただ、データベースが **ユーザ** によって所有され、データベースにアクセスするにはユーザの名称とパスワードが必要であることは忘れないでください。最初に作成したユーザ(postgres)は **スーパーユーザ** であり、データベースに対してすべての操作が可能なユーザです。

-   ウィザード上でクリックを行い、デフォルトの設定オプションを許可するとインストール作業が開始されます。作業は数分で終わります。
-   インストールが完了すると、StackBuilderを起動するかどうかのウィザードが表示されます。PostGISのインストールはStackBuilderを使って行います。ボックスへ忘れずにチェックを入れて、"Finish"をクリックしてください。

![install 2][]

-   PostgreSQLのインストールが成功したら、次はPostGIS拡張を追加する必要があります。StackBuilderウィザードが開いている場合、ドロップダウンメニューからインストールしたPotgreSQLを選び、Nextを押します。以下の画面を参考にしてください: 

![install 3][]

-   "Spatial Extensions"タブを開き、PostGISの隣のボックスにチェックを入れます。現時点で最新のPostGISはバージョン 2.1です。

![install 4][]

-   Nextを押すと、拡張ファイルのダウンロードとインストールがはじまります。利用条項の確認が表示されますので、一読の上 "I Agree"を押してください。
-   PostGISインストーラはいくつかの確認項目を表示させます。ほとんどの場合、デフォルトの内容で問題ありません。最初のデータベースを自動で作成するかどうか、という質問が表示されますが、次の手順ではデータベースを自作する方法を紹介します。
-   PostGISのインストールを行うにあたって、PostgreSQLのインストールを行った際に設定したpostgresユーザのパスワードを入力する必要があります。

![install 5][]

-   GDAL_DATA環境変数を登録するか、という質問には "Yes"を選択します。

![install 6][]

-   インストールが完了したら、"Close"と"Finish"をクリックしてください。

データベースの作成
--------------------
作業に必要なソフトウェアのインストールがすべて完了したので、ここからは実際にデータベースを作ってみましょう。データベースの操作やクエリの発行に便利なデータベースクライアント、pgAdmin IIIを使います。

![pgadmin3][]

-   pgAdmin IIIはPostgreSQLの公式クライアントで、SQL言語を使ってデータベースのテーブル操作を行うことが可能です。データベースの作成や操作はコマンドラインから行うこともできますが、今回は簡単さを重視し、pgAdmin IIIを使います。
-   pgAdmin IIIを起動します。スタートメニューから "全てのプログラム" -> "PostgreSQL 9.3" -> pgAdmin IIIを選択してください。

![pgadmin3 start][]

-   画面左側のサーバ一覧部分で右クリックし、PostgreSQLの場所を入力して"Connect"を選択します。

![postgresql connect][]

-   インストール時に設定した postgres ユーザのパスワードを入力してください。データベースを作成したりアクセスしたりするにはユーザ名とパスワードが必要となります。

![enter password][]

-   データベースを右クリックし、New Database、を選択します。

![new database][]

-   データベースを作成するために、データベースの名前と所有者など、いくつかの情報を決める必要があります。プロパティタブから新しいデータベースに名前をつけてください。この例では、データベースに gisdb という名前をつけています。また、データベースには所有者を指定する必要があります。現在作成済みのユーザは postgres ユーザだけなので、このユーザをデータベースの所有者として設定します。(注: セキュリティの観点から、本来はスーパーユーザ以外にユーザを作成するのがお勧めです。今回はあまり気にしなくてかまいません)

![new database form][]

<!--
-	Under the Definition tab, keep the defaults, but next to Template select template_postgis.  This
	will create our database with the proper spatial columns.
-->

-   OKをクリックするとデータベースが作成されます。作成したデータベースは、"データベース"の下に表示されます。
-   データベースに対して、PostGIS拡張を適用するコマンドを実行しましょう。pgAdmin IIIの上部から、SQLボタンをクリックしてください。

![sql button][]

-	クエリウィンドウに以下を入力します:

	CREATE EXTENSION postgis;

-   "Execute query"ボタンをクリックします。

![postgis command][]

サンプルデータの読み込み (オプション)
---------------------------
ここまでの作業に問題がなく、さらにQGISを操作したことがある場合は、以下の手順を実行し、新しいデータベースへデータを読み込ませてみましょう。具体的には、Shapefileを変換してデータベースへ読み込むユーティリティを利用します。

-   左側のパネルで新しいデータベースが選択されていることを確認し、 **Plugins -> PostGIS Shapefile and DBF loader 2.1** へ進みます。

![shapefile loader][]

-   "Add File"を選択し、ファイルシステムからshapefileを選んでください。
-   手持ちのshapefileが無い場合、[こちら](/files/buildings_sample.zip) からサンプルがダウンロードできます。
-   ファイルをクリックしたら、"Import"をクリックします。処理に問題がなければ、"Shapefile import completed"と表示されます。

![add shapefile][]

-   データをインポートしたデータベースからQGISへデータを読み込ませてみましょう。QGISをインストールしていない場合、[QGISウェブサイト](http://www.qgis.org/en/site/forusers/download.html)からソフトウェアをダウンロードしてください。
-   QGISを起動し、"Add PostGIS Layer" ボタンをクリックします。

![qgis add postgis button][]

-   上部に表示されている "Connections"から、 "New"をクリックします。
-   この接続に対して名前をつけてください。データベースの下には **gisdb** (あるいはその他、データベースに付与した名前)を入力します。
    ユーザ名には postgres と入力し、パスワードを入力します。

![connection settings][]

-   OKをクリックすると、接続設定が保存されます。 "Connect"をクリックして、PostgreSQLサーバへ接続してみましょう。データベースのユーザ名とパスワードをもう一度入力する必要があるかもしれません。
-   接続に成功すると、データベースに読み込ませたデータが読み込まれ、shapefileレイヤ (あるいは地物タイプごとに分割された複数のレイヤ) が表示されます。レイヤを選択し、"Add"を選択すると、そのデータを地図表示画面へ追加することができます。

![your data layer][]

-   レイヤを追加する際には、表示するデータの座標系を選択する必要があります。ほとんどの場合、OpenStreetMapが使用している座標系である WGS 84 を選択すれば問題ありません。
-   こうして読み込んだレイヤは、shapefileを直接QGISで読み込んだ時とほとんど同じ動作となります。唯一違う点は、データに対して何か変更を行った場合、その変更がデータベースに対して保存される、ということです。

まとめ
-------
以上で、PostgreSQLとPostGISのセットアップ方法、そしてデータベースの新規作成方法は終わりです。これで、OSMの生データをデータベースに格納するユーテリティを使う準備が整いました。[次の章](/en/osm-data/osm2pgsql)では、その具体的な方法について説明します。

[postgresql website]: /images/jp/osm-data/setting-up-postgresql/postgresql-website.png
[postgresql download]: /images/jp/osm-data/setting-up-postgresql/postgresql-download.png
[postgresql version]: /images/jp/osm-data/setting-up-postgresql/postgresql-version.png
[install 1]: /images/jp/osm-data/setting-up-postgresql/postgresql-install-1.png
[install 2]: /images/jp/osm-data/setting-up-postgresql/postgresql-install-2.png
[install 3]: /images/jp/osm-data/setting-up-postgresql/postgresql-install-3.png
[install 4]: /images/jp/osm-data/setting-up-postgresql/postgresql-install-4.png
[install 5]: /images/jp/osm-data/setting-up-postgresql/postgresql-install-5.png
[install 6]: /images/jp/osm-data/setting-up-postgresql/postgresql-install-6.png
[pgadmin3]: /images/jp/osm-data/setting-up-postgresql/pgadmin3.png
[pgadmin3 start]: /images/jp/osm-data/setting-up-postgresql/pgadmin3-start.png
[postgresql connect]: /images/jp/osm-data/setting-up-postgresql/postgresql-connect.png
[enter password]: /images/jp/osm-data/setting-up-postgresql/enter-password.png
[new database]: /images/jp/osm-data/setting-up-postgresql/new-database.png
[new database form]: /images/jp/osm-data/setting-up-postgresql/new-database-form.png
[sql button]: /images/jp/osm-data/setting-up-postgresql/sql-button.png
[postgis command]: /images/jp/osm-data/setting-up-postgresql/postgis-command.png
[shapefile loader]: /images/jp/osm-data/setting-up-postgresql/shapefile-loader.png
[add shapefile]: /images/jp/osm-data/setting-up-postgresql/add-shapefile.png
[qgis add postgis button]: /images/jp/osm-data/setting-up-postgresql/add-postgis-button.png
[connection settings]: /images/jp/osm-data/setting-up-postgresql/connection-settings.png
[your data layer]: /images/jp/osm-data/setting-up-postgresql/your-data-layer.png
