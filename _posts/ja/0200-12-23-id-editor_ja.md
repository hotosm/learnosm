---
layout: doc
title: iDエディタ
permalink: /ja/beginner/id-editor/
lang: ja
category: beginner
---

iD エディタ
=============

> 2018/12/05 レビュー  

HOTやMissingMapsなどでTasking Managerを利用する際には、[HOT TIPSセクション](/ja/hot-tips/)も参照してください。  

- TOC
{:toc}

iDエディタはブラウザベースのOpenStreetMapデファクトエディタです。iDは高速で動作し、利用も簡便で、衛星画像や航空写真、GPSデータやフィールドペーパー、Mapillaryといった様々なデータを活用してマッピングを行うことができます。  

iDエディタは小規模でそれほど込み入っていない編集を行なうことに適しており、JOSMのように複雑な操作を覚える必要がありません。この章では、iDを使った基本的な編集操作について解説を行います。  

iDエディタの起動
----------------------

- iDを使うには、インターネットへの接続が必要です  
- ブラウザを起動し、OpenStreetMapのウェブサイト [http://www.openstreetmap.org](http://www.openstreetmap.org) を表示してください。  
- OpenStreetMapアカウントを使って **ログイン** を行います  
- 編集の対象となる場所まで表示を移動させ、ズームします。表示位置を移動させるには、左クリックを押しながら地図をドラッグしてください。  
- **編集** ボタンの右側にある小さな三角形をクリックし、そこから **iD (ブラウザ内エディタ) で編集** を選択します  

![image1][]


iDエディタのユーザインターフェース
-------------------------
![image2][]

1. **地物パネル:** 地図上で選択したオブジェクトに付与されているタグが表示されます。  
	このパネルから、タグの追加や編集が可能です。  
2. **ツール:** 基本的な編集ツールが表示されるパネル:  
    ポイント (ノード) を描く *ショートカットキー* **1** ![image3][]{: height="24px"}  
    ライン（ウェイ）を描く *ショートカットキー* **2** ![image4][]{: height="24px"}  
    シェイプ（ポリゴン/面）を描く *ショートカットキー* **3** ![image5][]{: height="24px"}  
    やり直し *ショートカットキー* **Ctrl+z** ![image6][]{: height="24px"}  
    やり直しの取り消し *ショートカットキー* **Ctrl+y** ![image7][]{: height="24px"}  
    変更の保存 *ショートカットキー* **Ctrl+s** ![image8][]{: height="24px"}  
3. **マップパネル:** 各種設定を行なうためのパネル:  
    ズームイン *ショートカットキー* **+** ![image9][]{: height="24px"}  
    ズームアウト *ショートカットキー* **-** ![image10][]{: height="24px"}  
    現在地を表示 ![image11][]{: height="24px"}  
    背景画像レイヤを変更 *ショートカットキー* **b** ![image12][]{: height="24px"}  
    地図データ *ショートカットキー* **f** ![Map Data][]{: height="24px"}  
    ヘルプメニューを表示 *ショートカットキー* **h** ![image13][]{: height="24px"}  
4. **情報パネル:** このパネルには多くの情報が表示されます。例えば、表示中の地域を過去に編集したユーザの一覧などです。  

背景画像レイヤの変更
--------------------------------

Click the **背景設定**ボタンをクリックするか、*ショートカットキー* **b**を使います .![image14][]{: height="24px"}  
![image15][]  
以下のボタンをクリックすると **背景画質の調整**を行うことができます。調節な可能なレベルは 100%, 75% そして25%です ![image16][]{: height="24px"}  
また  **背景図レイヤを切り替える** ことも可能です。これにより、任意のタイル画像を背景図として利用することが可能です(デフォルトはBing衛星写真)。  

**カスタム** の項目から自身の地図タイルを追加することができます。例えば**Field Paperを追加する** [^fieldpaper] 場合、**カスタム**をクリックした後、虫眼鏡のボタン (検索) アイコンをクリックして、以下のウィンドウを開きます:-  
![image17][]   
次に **FieldPaperのスナップショットURL**を入力します。URLは例えば <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715> のような文字列です。   
**コンピュータに保存されているGPSトラックを表示させる** ことも可能です。(GPXフォーマット) この操作はとても簡単で、単にGPXファイルをiDエディタにドラッグするだけです。  
**OpenStreetMap上のGPSにトラック** を有効化する場合、以下のボタンをクリックしてください。画面下側のように、公開状態のGPSトレースが様々な色で表示されます。  
![osm gps traces][]  
もし[画像オフセット](/ja/josm/aerial-imagery)がある場合、**位置を調整**をクリックすることで **画像のオフセットを修正** することが可能です。![image18][]  

- ナビゲーションボタンをクリックすると、背景画像が移動します。リセットボタンを押すと、表示位置がデフォルトに戻ります。 ![image20][]  

iDエディタ編集の基礎  
----------------------  

### ポイントの描き方  

あたらしくポイント情報を追加するには、 **ポイント** ボタンをクリックします。 ![image3][]{: height="24px"}  

- マウスのカーソルが、プラス(+)の形に変わります。その状態で地図をクリックすると、その場所にポイントデータが作成されます。例えばあなたが病院がある位置を知っている場合、その病院の建物の位置をクリックしてください。  
![image21][]  
- 新しくポイントが作成されたことがわかるでしょうか。作成と同時に画面左側へパネルが表示され、そのオブジェクトがどのような属性を持っているかを選択することが可能になります。 **病院** をクリックして、そのポイント情報を病院としてタグ付けしましょう。  
![image22][]  
- 作成したポイントに対し、フォームから詳細な情報を追加することもできます。例えば病院の名称や住所、あるいはもし知っていれば、その他の情報を追加することもできます。入力フォームの表示は、その地物に付与されているタグ種類によって異なります。  
- ポイントを置く場所を間違えてしまった場合は、そのポイントの上でマウスを左クリックし、そのまま正しい位置までポイントをドラッグして移動させてください。また、ポイントを削除する場合、ポイントの上で左クリックして対象を選択した状態で右クリックを行ってください。その後、右クリック後に円型のメニューから、ゴミ箱の形をしたアイコンを選んでください。 ![image23][]{: height="24px"}  
iDで作成された "ポイント" は、OSMデータ上では、なにかしらの "タグ" が付与されたスタンドアローンの "ノード" 情報として扱われます。  

### ラインの描き方  

ラインを新しく描くには、 **ライン** ボタンをクリックします。 ![image4][]{: height="24px"}  

- マウスのカーソルが、プラス (+) の形に変わります。まだ描かれていない道路の位置にカーソルを合わせ、道路をトレース (なぞり書き) してみてください。道路の一方の端でいちどクリックし、マウスを移動させてポイントを追加してゆきます。描き終える場合は、その位置でダブルクリックしてください。左側のパネルに注目してみましょう。  
![image24][]  
- ポイントのときと同じように、ラインを表現するために適切とおもわれるタグを選択します。  
- ラインに含まれるポイントデータは、そのポイントの場所で左クリックしてドラッグすることで移動させることができます。  
- ライン全体を移動させることも可能です。 **移動ツール** を選択すると、ラインを新しい位置へ移動させることができます。 ![image30][]{: height="24px"}  
- ラインに所属しているそれぞれのポイント (ノード) の上で左クリックし、続いて右クリックすることで、以下のようなコンテキストメニューを起動することができます:  
- ラインから対象のポイントを削除 ![image23][]{: height="24px"}  
- ラインから対象のポイントを分離 ![image26][]{: height="24px"}  
- 選択したポイントを起点として、1本のラインを2本に分割 ![image27][]{: height="24px"}  
- ライン（上のポイントではない部分）をクリックすることで、以下のツールを利用することができます:  
-   ラインの削除 ![image23][]{: height="24px"}  
-  対象のラインで円形を作成 (ラインが閉じている場合にのみ有効) ![image29][]{: height="24px"}  
-  ラインを移動 ![image30][]{: height="24px"}  
-  対象のラインの角を四角形にする (ラインが閉じている場合にのみ有効) ![image31][]{: height="24px"}  
-  ラインの向きを逆転 (河川や水路、一方通行の道路に便利) ![image32][]{: height="24px"}  

iDで作成された "ライン" は、OSMデータ上では、なにかしらの "タグ" が付与された "ウェイ" 情報として扱われます。

> **削除**に関する特記: 多くの場合、よほどその状況が明確ではない限り、他の人がマッピングした内容を削除することは避けたほうが無難です。自分が行ってしまった間違いを直すことは問題ありませんが、他の人がマッピングした内容は *調整* することをまず試してみてください。これにより、OSMデータベース上に存在する対象の履歴を保全し、以降に編集を行うマッパーが参照することができるようになります。もし対象の何かを削除する必要がある場合は、その編集を行ったマッパーやOSMのメーリングリストで声掛けを行うことも検討してみてください。

### シェイプ (ポリゴン) の描き方

シェイプを新しく描く場合、 **エリア** ボタンをクリックします。 ![image34][]{: height="24px"}  

- マウスのカーソルが、プラス (+) の形に変わります。衛星写真の画像を手がかりに、建物の形をトレースしてみましょう。  
- 対象に付与したタグ情報の種類によって、シェイプの色は変わります。  
![image35][]  
- シェイプを選択したり、コンテキストメニューを起動したりする際のツールは、ラインの上で右クリックした際に表示されるツールと同じです。  

iDで作成された "ポリゴン" は、OSMデータ上では、なにかしらの "タグ" が付与された "閉じたウェイ" 情報として扱われます。

### マルチポリゴンの描き方

ポリゴンを描く際に、そのポリゴンが外周だけではなく、1つ以上の内周を持っている場合があります。例えば中庭がある建物や、中洲のある湖がそれにあたります。*これらのウェイは、外側と内側をつなげた一筆書きのウェイで描かないでください。*この場合、外周と内周の線は別々に描き、外周のポリゴンにのみタグを付与した状態で、外周と内周の両方のポリゴンを選択し、**c**キーを押してください。こうすることで、それらのポリゴンをマルチポリゴンとしてまとめ上げることができます。

![create multipolygon][]

新しくマルチポリゴンを作成し、対象を選択すると、そのマルチポリゴンに所属しているポリゴンが左メニューに表示されます。

![part of multipolygon][]

編集結果の保存
--------------------

OpenStreetMapデータの編集が終わり、内容を保存する場合は、 **保存** ボタンをクリックしてください。画面左側のパネルが、データのアップロード表示に切り替わります。  
![image36][]  

- 変更した内容を簡単にコメントして、 **保存** を押してください。  

> もしあなたが編集した地物 (ポイント、ウェイあるいはエリア) を他の人が同時に編集していた場合は、エラーが表示され、**競合**を解決するまで作業内容がアップロードできない状態になります。**競合**を解決するには、どの編集内容をアップロードし、どの内容を破棄するか、選択する必要があります。*多くの場合、他の人が実施した編集内容をアップロードし、自身の編集を破棄した上でアップロードし、対象の地物をもう一度編集しなおすことになります (**この場合、再度競合が発生しないよう、編集後にすぐ保存してください！**)。 *

追加情報、リストにないタグの追加など
---------------------------------------

オブジェクトの編集を行う際、属性入力パネルの下の方にいくつかのアイコンが並んで表示されています。これらのアイコンをクリックすることで、そのオブジェクトに細かい情報を追加することが可能です:

- 標高を追加 ![image37][]{: height="24px"}  
- ノートを追加 ![image38][]{: height="24px"}  
- 連絡先/電話番号を追加 ![image39][]{: height="24px"}  
- 情報源 (sourceタグ) を追加 ![image40][]{: height="24px"}  
- ウェブサイトを追加 ![image41][]{: height="24px"}  
- アクセシビリティ情報を追加 ![image42][]{: height="24px"}  
- Wikipediaリンクを追加 ![image43][]{: height="24px"}  

**すべてのタグ** をクリックすることで、選択肢にないタグを付与することも可能です。 ![image44][]{: height="24px"}  

- その地物に付与されているすべてのタグが表示されます。  
![image45][]  
- プラスボタン (+) をクリックすることでキーと値のセットを追加することができます。ゴミ箱のアイコンをクリックすると、そのタグ情報が削除されます。

追加チュートリアル
------------------

[外部リソースのページ](/ja/resources/#iD) では、様々なかたが作成したビデオチュートリアルを紹介しています。

iDとJOSMの違い
---------------  

**iDのよいところ**

- 単純な編集を行う場合  
- インターネットの回線が安定しており、背景画像の読み込みやデータの保存が行える場合  
- 一般的によく使われるシンプルなタグ定義に沿った入力を行いたい場合  
- 利用しているコンピュータにプログラムをインストールすることに制限がある場合

**JOSMのよいところ**

- 建物情報を多数入力する場合 (building toolプラグイン参照)
- すでに入力されているポリゴンやラインの数が多く、それらを編集したい場合
- インターネットの回線が不安定、あるいはオフラインの場合
- 特殊なタグ定義 (あるいは独自のタグプリセット) を利用したい場合

[^fieldpaper]: Field Paperについては、本ガイドの [専用セクション](/en/mobile-mapping/field-papers/) も参照ください。

このガイドの内容は[プレゼンテーション]](/files/iD-editor-training.pptx)としても利用できます。



[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png