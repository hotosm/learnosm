---
layout: doc
title: JOSMツール
permalink: /ja/josm/josm-tools/
lang: ja
category: josm
---

JOSM編集ツール
==================
[ビギナーズガイド](/ja/beginner)では、JOSMでオブジェクトを描画する際の基礎について解説しました。しかし、そこでは紹介しきれなかったツールが数多く存在します。

ここでは、JOSMを使って地物を描く際に利用可能なツールやテクニックを紹介します。また、さらに別の章で、より高度な編集ツールについても紹介します。

サンプルファイルの入手
-------------------
-   JOSMツールの練習用にサンプルファイルが必要な場合、以下からダウンロードしてください。 [tools_menu_sample.osm](/files/tools_menu_sample.osm)
-   JOSMを起動し、ファイルを読み込んでください。以下のようなオブジェクトが表示されます:

![tools_menu_sample.osm][]

描画ツール
-------------
JOSMの上部メニューにある "ツール" をクリックすると、地図上のオブジェクトを編集したり、ラインやシェイプを新しく描く際に便利なツールが大量に表示されます。

![Tools menu][]

メニューに表示されている機能を利用するには、まず先に、地図ウィンドウに表示されているポイントやライン、シェイプを選択する必要があります。サンプルファイルに含まれている様々な種類のオブジェクトには、対応するそれぞれのツールの名前がつけられています。

-   ファイル内の要素をひとつ選択してから、ツールメニューを開き、選択した地物のとなりに表示されている項目と同じツールを選んでみましょう。
-   例えばこの機能を使うために、雑に描かれた円形のオブジェクトをクリックします。

![Align nodes in circle][]

-   次に、 ツール -> 円形を作成 を選択します。
-   雑に描かれた円の形が、より円形らしく並び替えられます。

サンプルファイルのオブジェクトを使って、それぞれのツールを試してみてください。ツールについての解説を、いくつか列挙します。

1.  **Split Way/ウェイを分割:** 1本のラインを、2本のラインに分割します。これにより、例えば橋部分など、道路の一部にだけ異なるタグ属性を追加することができるようになります。この機能を使うには、分割対象となるラインと、分割点となるポイントを両方選択し、ツールメニューから "ウェイの分割" を選んでください。

2.  **Combine Way/ウェイの結合:** "ウェイの分割"と逆の機能です。2本以上のラインを選択し、1本のラインとして結合します。キーボードの Shift キーを押しながら選択することで、複数のラインを同時に選択することが可能です。対象となるラインを選択したら、ツールメニューから "ウェイの結合" を選択してください。

    ![Combine way][]

    方向が異なるウェイを結合しようとすると、以下の警告が表示されます:

    ![Reverse and combine][]

    もし本当に道路の向きが同じ方向で結合している場合 (一方通行の場合などが該当) は、 "reverse and Continue" を選びます。

3.  **Reverse Way/ウェイ方向転換:** ラインの向いている方向を逆転させます。OSMに存在しているウェイにはそれぞれウェイの方向が指定されており、JOSMではその向きが矢印の形で表示されています。ウェイの方向は多くの場合あまり意味をもちませんが、一方通行の道路や、下流に向かって流れる河川など、例外的に特定の方向が重要になることがあります。そうした場合、ウェイの方向を正しく設定するために、そのウェイの方向転換を行っておく必要があります。

    ![Way direction][]

4.  **Simplify Way/ウェイの単純化:** ラインが非常に多くのポイントから形成されている場合に、それらのポイントの数を間引くことで数を少なくしたい場合に使います。ラインから、いくつかのポイントデータが削除されます。

    ![Simplify way][]

5.  **Align Nodes in Circle/ノードを円形に配列:** 丸い円を描く場合に、まずは自分でできるだけ円形に近い形のオブジェクトを描き、そのオブジェクトを選択します。この機能は、それらのポイント情報をなるべく円形になるように配置します。

6.  **Create Circle/円形を作成:** もうひとつの方法として、この機能を使うと完全な円形を作成することが可能です。円の直径となるラインを描き、そのラインを選択した状態でこの機能を使用してください。

    ![Create circle][]

7.  **Align Nodes in Line/ノードを一直線に配列:** この機能は、複数のポイントデータを一直線に並び替えます。大きなラインを直線化する場合は、そのラインを構成するポイントをいくつか選択してからこの機能を使うのがよいでしょう。この機能を使うことで、ラインの位置が少し移動することがありますので、注意してください。

    ![Align nodes in line][]

8.  Orthogonalize Shape/図形の直交化: この機能は、建物など、直線と直角で構成されたシェイプを描く際に有用です。この機能を使うことで、対象のオブジェクトの角を直角にすることが可能です。

    ![Orthagonalize][]

9.  Unglue way/ウェイを引き離す: このツールでは、接続されているノードの接合を解除することが可能です。本来接合されるべきではない種類のオブジェクトがノードを共有してしまっている場合に便利です。例えばよくある間違いとして、道路を構成するノードが建物の角のノードと接合してしまっている場合には、このツールを使ってそれぞれのノードの接合を解除し、別のノードとして表現することが必要です。

    ![Unglue way][]

    > ラインとノードは、実際にそのオブジェクトを動かしてみるまでは完全に重なった状態で表示されます。

キーボードショートカット
------------------
編集に慣れ、ツールの挙動がわかってくると、機能を使うためにいちいちメニューから項目を選択するのが時間の無駄になってきます。そのため、JOSMではすべての機能にキーボードショートカットが割り当てられています。

オブジェクトをクリックしてそこからメニューを呼び出して、という長い手順を行うのではなく、対象となるオブジェクトを選択した後、キーボードの特定のキーを押すだけで、それぞれの機能が適用されます。

先ほどのセクションで紹介したツールには、それぞれ以下のショートカットが割り振られています。割り振られているキーは、メニューから対象の項目を表示させた時に、その項目の右側にも表示されます。例えば "O" には、ノードを円形に配置する機能が割り当てられています。 "L" はノードを一直線に並べるショートカットです。ショートカットキーに慣れるには時間がかかりますが、長い目で見れば、ショートカットに慣れておいたほうが多くの時間を節約することが可能です。

他にもよく使われる機能のショートカットを紹介しておきます。


1.  選択ツールを有効化 ("S"elect)
![Keyboard S][]
2.  描画ツールを有効化 ("A"dd)
![Keyboard A][]
3.  ズームツールを有効化 ("Z"oom)
![Keyboard Z][]
4.  選択したオブジェクトを削除 ("Del"ete)
![Keyboard Del][]
5.  ズームイン
![Keyboard plus][]
6.  ズームアウト
![Keyboard minus][]


オブジェクトの拡大縮小、回転
----------------
すでに描かれてるラインやシェイプを回転させるには、以下の操作を行います。

-   回転させる対象のオブジェクトを選択します。
-   キーボードの Shift + Ctrlキーを押します。
-   マウスをクリックして動かすことで、そのオブジェクトを回転させることができます。

![Rotate demo][]

オブジェクトの拡大縮小を行う(縮尺を変える)には、同じような操作を、こちらは Alt + Ctrlキーで行います。

こうしたインストラクションは、JOSM下部のインフォメーションバーに表示されます:

![Rotate instructions][]

[tools_menu_sample.osm]: /images/jp/editing/josm-tools/tools-menu-sample-file.png
[Tools menu]: /images/jp/editing/josm-tools/tools-menu.png
[Align nodes in circle]: /images/jp/editing/josm-tools/align-nodes-in-circle.png
[Combine way]: /images/jp/editing/josm-tools/combine-way.png
[Reverse and combine]: /images/jp/editing/josm-tools/reverse-and-combine.png
[Way direction]: /images/jp/editing/josm-tools/way-direction.png
[Simplify way]: /images/jp/editing/josm-tools/simplify-way.png
[Create circle]: /images/jp/editing/josm-tools/create-circle.png
[Align nodes in line]: /images/jp/editing/josm-tools/align-nodes-in-line.png
[Orthagonalize]: /images/jp/editing/josm-tools/orthagonalize.png
[Unglue way]: /images/jp/editing/josm-tools/unglue-way.png
[Keyboard S]: /images/jp/editing/josm-tools/keyboard-s.png
[Keyboard A]: /images/jp/editing/josm-tools/keyboard-a.png
[Keyboard Z]: /images/jp/editing/josm-tools/keyboard-z.png
[Keyboard Del]: /images/jp/editing/josm-tools/keyboard-del.png
[Keyboard plus]: /images/jp/editing/josm-tools/keyboard-plus.png
[Keyboard minus]: /images/jp/editing/josm-tools/keyboard-minus.png
[Rotate demo]: /images/jp/editing/josm-tools/rotate-demo.png
[Rotate instructions]: /images/jp/editing/josm-tools/rotate-instructions.png
