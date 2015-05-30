---
layout: doc
title: Manipulating Data with Osmosis
permalink: /ja/osm-data/osmosis/
lang: ja
category: osm-data
---

Osmosisを使ったデータ操作
===============================
**Osmosis** は強力なコマンドラインツールであり、OSMのデータを **.osm** 形式のまま処理することが可能です。このツールは大きなデータファイルを処理するときによく使われ、OSMファイルを小さく分割したり、既存のファイルへ変更セットを適用して更新したり、といった処理で利用されます。

Osmosisは非常に多機能で、[Wiki](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41)にその機能詳細が記載されています。ただし、コマンドラインやOpenStreetMapに不慣れな利用者が扱うには、その機能のほとんどは非常に複雑、かつ難解です。この章ではOsmosisの概要、Windowsへのインストール方法、基本的なコマンドラインの使い方を解説します。

Omsosisのインストール
----------------
前の章で紹介した osm2pgsql と同様、コマンドラインで利用するためには **osmosis** をダウンロードしてセットアップする必要があります。この際に必要な作業は、osm2pgsqlとたいへんよく似ています。

また、作業対象となるOSMの生ファイルも必要です。この章で挙げる例を実行するために[サンプル](/files/sample_osmosis.osm.pbf)を用意しましたので、ダウンロードしておきましょう。もちろん、あなたが使いたいファイルがもしあれば、それを使ってもかまいません。

以下の手順に従って、Osmosisのダウンロードと準備を行ってください: 

-   Osmosisを [こちら](http://bretth.dev.openstreetmap.org/osmosis-build/osmosis-latest.zip) からダウンロードします。
-   ダウンロードしたファイルを解凍し、コンピュータのなかでどこかあまりファイルを動かさないディレクトリに配置してください。コマンドラインで動作をさせるため、ファイルの場所をシステムパスを追加する必要があります。


![unzip it][]

-   スタートメニューをクリックし、 "system path"と入力します。

![system path][]

-   "システム環境変数を変更"の項目があるので、クリックします。

![edit variables][]

-   "環境変数"のボタンをクリックします。

![env variables][]

-   "パス"という変数が一番下にありますので、"編集..."をクリックします。

![find path][]

-   osmosis.exe が配置されているディレクトリを、パス変数に追加する必要があります。

![edit path][]

-	既に入力されている文字列の最後にセミコロン ; を追加し、その後ろに、osmosisを配置してあるパスを入力します。例えば **C:\\** ディレクトリ配下の **osmosis-latest** フォルダに格納している場合、入力すべきパスは以下のようになります: 

		C:\osmosis-latest\bin

-   何度かOKを押して、新しい設定を保存してください。
-   **osmosis** が動作するようになりました。確認をしてみましょう。
-   Windowsのコマンドプロンプトを起動させましょう。スタートメニューで "cmd" と入力すると、アプリケーションが表示されますので、Enterキーを押すか、アイコンをクリックしてください。

![cmd][]

-   黒いコマンドウィンドウが開きますので、以下の文字列を記入します: 

		osmosis

-   ここまでの設定が正しく行われていれば、以下の文字列が表示されます: 

![osmosis test][]

-   上記のような出力が表示されず、 **osmosis** が見当たらないというメッセージが出てきた場合は、環境変数のパスで入力した文字列が間違えている可能性が高いです。

データのフィルタリング
---------------
これで、コマンドプロンプトからOsmosisを操作することができるようになりました。次に、OSMデータファイルを操作するため、 **sample_osmosis.osm.pbf** ファイルを格納した作業ディレクトリを作成し、そこへ移動する必要があります。動作を単純化するため、ファイルは C:\ のディレクトリに配置します。

-   コマンドプロンプトで以下のコマンドを入力すると、 C:\ へ作業ディレクトリが移動します: 

		cd C:\

-   プロンプト表示が切り替わることで、 C:\ ディレクトリに移動したことが確認できます。

![cd command][]

それでは、Osmosisコマンドを試してみましょう。まずは、サンプルの大きなファイルからすべての学校 (school) だけを抽出するフィルタを実行します。

これを実行するには、Osmosisへいくつかの指示を与える必要があります。指定すべき項目は: 

-   入力ファイル (sample_osmosis.osm.pbf)
-   フィルタに必要ないくつかのルール定義
-   出力ファイル (今回は結果をJOSMで開きたいので、非圧縮の .osm 形式とします)

実行するコマンドは以下となります: 

	osmosis --rbf sample_osmosis.osm.pbf
		--nkv keyValueList="amenity.school"
		--wx schools.osm

このコマンドをプロンプトに入力して実行してみましょう。処理が完了すると、同じディレクトリ内に **school.osm** というファイルが生成されます。そのファイルをJOSMで開くと、サンプルのファイルから学校のデータだけが抜き出された結果だけが表示されます。

![schools osm][]

今回実行したコマンドをひとつひとつ分解して、どのような指定で動作しているか、確認してみましょう。

最初に、プログラムの名称を呼び出しています。

	osmosis

次に、入力ファイルを指定しています。このファイルは圧縮された形式であることに注意してください。 **--rbf** という記述は、より読みやすい記述方法で書くと **--read-pbf-fast** となります。Osmosisはこの指定に続く文字列が、読み込み対象のファイルであることを認識します。

	--rbf sample_osmosis.osm.pbf

コマンドの次の部分は、 *--nkv keyValueList="amenity.school"* となっています。 **amenity=school** というタグを付与されているオブジェクトをすべて抽出するよう、osmosisに指定が行われていることがわかるかとおもいます。 **--nkv** は **--node-key-value** を短縮した書き方です。このコマンド指定により、Osmosisはそれに続くタグを持ったノードだけを抽出する処理を行います。カンマを加える事で、複数の key.value を追加指定することが可能です。

	--nkv keyValueList="amenity.school"

最後の部分では、出力するファイルの名前とファイル形式が指定されています。使われているフラグは **--wx** で、 **--write-xml** の省略形です。出力ファイルをもう一度PBF形式で行う場合には、入力時に使用した **--rbf** と対応する指定である **--wbf** という記述を行うことも可能です。

	--wx schools.osm

今後の学習方法
---------------
Osmosisで実現可能な処理は非常に多岐にわたります。具体的にどのようなことができるかは、OSM wikiにある[Osmosisの詳細な使い方](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43)を参照するのが最善です。

その中でも、大きなOSM生ファイルを小さなファイルに分割する作業はとても有益です。分割は特定のポリゴン形状でも、範囲矩形でも指定が可能です。この処理の基本的な指定方法は[Osmosisコマンドサンプルページ](http://wiki.openstreetmap.org/wiki/Osmosis/Examples)を参照してください。


[unzip it]: /images/jp/osm-data/osmosis/unzip-it.png
[system path]: /images/jp/osm-data/osmosis/system-path.png
[edit variables]: /images/jp/osm-data/osmosis/edit-environment-variables.png
[env variables]: /images/jp/osm-data/osmosis/environment-variables.png
[find path]: /images/jp/osm-data/osmosis/find-path.png
[edit path]: /images/jp/osm-data/osmosis/edit-path-variable.png
[cmd]: /images/jp/osm-data/osmosis/cmd.png
[osmosis test]: /images/jp/osm-data/osmosis/osmosis-test.png
[cd command]: /images/jp/osm-data/osmosis/cd-command.png
[schools osm]: /images/jp/osm-data/osmosis/schools-osm.png
