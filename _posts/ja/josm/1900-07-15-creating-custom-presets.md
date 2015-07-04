---
layout: doc
title: 独自プリセットの作成
permalink: /ja/josm/creating-presets/
lang: ja
category: josm
---

独自プリセットの作成
=======================
[前回の章](/ja/josm/josm-presets)では、JOSMにカスタムプリセットを追加する方法を紹介しました。この章では、自分自身で独自のプリセットを作成する方法を紹介します。

注意！ これは高度なトピックです。十分に注意してください！

XMLとは
-------------------
プリセットメニューを作成するにあたって、XMLという言語について知っておく必要があります。既にXMLについて十分知っている、という場合は、次のセクションへ進んでください。

XMLとは、“Extensible Mark-up Language/拡張可能なマークアップ言語”の略であり、HTMLに似たコンピュータ言語の一種です。HTMLとXMLの主な違いは、XMLはデータの表示ではなく、保持を目的とした言語である、ということにあります。XMLを使ってデータの転送を行っているアプリケーションはインターネット上に数多く存在し、OpenStreetMapもそのひとつです。XMLは要素 (element) を使用します。それぞれの要素は、そのなかに別の要素を子要素として保持することができます。例えば、レストランのメニューについてのデータを含むXMLファイルを作成することを考えてみてください。その場合、まず最初に、すべてのメニューのデータを含む幹要素 (root element)を作成する必要があります。幹要素はそれ自体が、以下のような開始と終了のタグを保持します:

	<menu>
      ... whatever data we want to include in our menu ...
	</menu>

情報は、要素の中に格納されます。また、それぞれの要素の中には、別の要素を含めることも可能です。

  	<menu>
	  <item name=“Hamburger”>
		<cost>400</cost>
		<description>ビーフパテが美味</description>
	  </item>
	  <item name=“Nasi Goreng”>
		<cost>200</cost>
		<description>インドネシアの米料理</description>
	  </item>
  	</menu>

この例では、2つの &lt;item&gt; 要素が &lt;menu&gt; 要素のなかに格納され、メニューにあるそれぞれの項目についての情報を保持しています。それぞれの item 要素は &lt;cost&gt; と &lt;description&gt; という2つの子要素を格納しています。 &lt;item&gt; 要素を定義するタグのなかに name=”Hamburger” という記載が行われていることに注目してください。これは属性 (attribute) と呼ばれ、その要素に対する追加情報を定義します。

### XML用語について
-	**幹要素/root element:** XMLドキュメントのもっとも外郭を形成する要素。内部に格納するものがなんであるかをあらわす
-	**要素/element:** あらゆるXMLオブジェクト。開始タグと終了タグで囲われる。形式は &lt;item&gt; ... データ ... &lt;/item&gt; のようになる
-	**タグ/tag:** ブラケットで囲われている内容。例えば &lt;item&gt; など。 &lt;item&gt; は要素の開始をあらわし、要素の終了は &lt;/item&gt; であらわされる。OSMのタグとは異なる意味合いを持つので、混同しないこと
-	**属性/attribute:** タグで囲われたそれぞれの情報を示す。例えば name=“Hamburger” など

XML形式を使ってデータの保持と送信を行うことで、コンピュータがその内容を簡単に把握できるようになります。

JOSMプリセットファイル
-------------------
それではサンプルのプリセットファイルをJOSMに読み込み、それがどのように動作するのかをみてみましょう。

-	[sample_presets.xml](/files/sample_presets.xml) をダウンロードしてください
-	[前章](/ja/josm/josm-presets)の内容を参考にして、そのファイルをJOSMに読み込みます
-	新規レイヤを作成し、そこになにかひとつオブジェクトを作成します
-	プリセットメニューを開きます。"Sample Building" という項目ができていますので、それをクリックします。

![sample building menu][]

3つの入力欄が配置されたウィンドウが表示されます。1つめの入力欄 "building name" は、テキスト形式の入力が可能です。2つめ "building use" はドロップダウンメニューになっています。3つめの入力欄はチェックボックスで、オンとオフ、どちらかの値しか入力することができないようになっています。

![sample presets form][]

このプリセットの入力欄を定義しているXMLファイルの内容を見てみましょう。

-	対象のXMLファイルの位置を確認し、テキストエディタで開いてください。Windowsを使っている場合、"メモ帳/notepad"でも開くことができます。もっと使いやすいエディタということであれば、 Notepad++ ソフトウェアをダウンロードしてください。
-	**sample_preset.xml** ファイルの内容は以下のとおりです:

![sample presets file][]

いまのところ、最初の6行と最後の6行は無視して、 &lt;item&gt; タグの内容に注目してみましょう。

最初の行は、このように成っています:

	<item name="Sample Building" type="node,closedway">

これはメニューに追加する item の開始タグとなっています。ここでは、name と type という2つの属性が付与されています。nameは、プリセットのメニュー内で表示する名称を定義しています。typeは、このプリセットで利用するオブジェクトの形式を定義します。今回の場合、プリセットではポイントとシェイプ、つまり、ノードと閉じたウェイの形式のデータに対して適用されます。ラインに対してこのプリセットを適用することはできません。

次の行をみてみましょう:

	<label text="Building Form" />

プリセットメニューでの表示、サンプルの入力欄での表示の際に、"Building Form"という文字列が表示されますが、それはこの行で定義されています。この行では &lt;label&gt; 要素が指定されており、入力欄で表示される内容を表示しています。表示される文字列は *text="some text"* という表記法で定義します。

次の行はこのようになっています:

	<key key="building" value="yes" />

選択したオブジェクトに対して適用されるタグ情報が定義されています。この行では &lt;key&gt; という要素が定義されており、この指定内容はOSMタグとして、選択されたオブジェクトに対して自動的にプリセットとして付与されます。そのため、今回は選択対象となるオブジェクトには *building=yes* というタグが自動的に追加されることとなります。

次の行は少し違っていて、 &lt;text&gt; 要素を利用しています。

	<text key="name" text="Name of Building" default=""
		delete_if_empty="true" />

&lt;text&gt; 要素は、空白の入力欄を作成します。JOSMで入力欄が表示された際に、ユーザはその欄に内容を入力することができます。 *delete_if_empty="true"* が指定されているので、入力欄が空白のままで処理が進んだ場合、タグがなにも追加されません。

ドロップダウンボックスの入力欄で表示される内容は次の行で指定されています:

	<combo key="building:use" text="Building Use"
		values="residential, commercial, industrial"
		display_values="Residential, Commercial,
		Industrial"/>

ドロップダウンボックスで表示される内容は &lt;combo&gt; 要素で定義されています。 &lt;text&gt; 要素と同じように、 *key* 属性ではタグのキーを定義しています。ここで定義されている値は、リストで指定できる *value* の内容を示しています。 *display_values* 属性では、ドロップダウンボックスで対象の value を異なる名称で表示する際に利用します。表示名を変更することで、OSMのタグと値をそのまま表示するよりも理解しやすくすることができます。

最後に、チェックボックス部分を定義している行をみてみましょう。

	<check key="building:vacant" text="Is the building
		vacant?" default="off" delete_if_empty="true" />

&lt;check&gt; という要素が定義されています。これはその名前の通り、チェックボックスを意味しています！ 属性 *default="off"* では、デフォルトでその項目がチェックされていない状態であることを示しています。その他の属性は、すでにこれまで説明したとおりです。

自分独自のプリセットファイル作成
------------------------------
自分自身で独自のプリセットファイルを作成しようとする場合、一番良いのは、これまでに存在しているプリセットファイルを真似して、その一部を改変したり、追加したりすることです。このサンプルファイルを好きなように改変して、基本的な動作を把握してみてください。変更したプリセットを適用するにはJOSMの再起動が必要ですので注意しましょう。

プリセットを最初からつくり上げる場合、そこで利用するタグはよく考慮してください。まったく新しいタグを作る、というのは、それはまた違う作業と工程が必要になります。一般的に、プリセットで利用するタグはすでに定義が確定しているものを選ぶべきです。既に定義済みのタグはほとんどが [OSM Wiki の Map Featuresページ](http://wiki.openstreetmap.org/wiki/Map_Features) に記載されています。

このサンプルファイルではJOSMプリセットファイルでよく利用される要素のほとんどが含まれていますし、実際、利用できる要素はそれほど多くありません。より複雑な定義のプリセットを見てみたい場合、こちらの [dhaka_presets.xml](/files/dhaka_presets.xml) の内容を参考にするのがよいでしょう。

また、プリセットファイルで指定することができる定義は、すべて [こちら](http://josm.openstreetmap.de/wiki/TaggingPresets) に記載がされています。

がんばって！

[sample building menu]: /images/jp/editing/creating-custom-presets/sample-building-menu.png
[sample presets form]: /images/jp/editing/creating-custom-presets/sample-presets-form.png
[sample presets file]: /images/jp/editing/creating-custom-presets/sample-presets-file.png
