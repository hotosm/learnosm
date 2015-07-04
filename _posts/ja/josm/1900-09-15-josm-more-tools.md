---
layout: doc
title: その他のツール
permalink: /ja/josm/more-tools/
lang: ja
category: josm
---

その他のツール
============
JOSMでよく利用されるツールとして、 **building tools** と **utilplugin2** という2つのプラグインがあります。このセクションでは、この2つのプラグインの機能を詳しく見てみましょう。

Building Toolsプラグイン
--------------------------
-   もしプラグインのインストールがまだの場合、[JOSMプラグイン](/ja/josm/josm-plugins)の記述を参考にして、プラグインのインストールを行ってください。

![buildings_tools plugin][]

Building Toolsプラグインは、建物のデジタライズを行う際に非常に有効です。この機能を使うと、建物のどこかの辺をトレースした後、簡単にその形状を作成することが可能になります。複数の建物をトレースする場合、このプラグインを使うことでクリックの回数を減らして時間を節約し、さらに、綺麗なポリゴンを描くことができるようになります。

プラグインをインストールすると、JOSMの左側に以下のような新しいボタンが追加されます:

![buildings_tools button][]

-   JOSMを起動し、空のレイヤーをひとつ作成してください。
-   building toolを選択し、地図上でクリックを2回行ってラインを描いてください。

![Draw edge][]

-   マウスを動かして範囲を拡張します。もう一度クリックすると、四角形が形成されます。

![Extend building][]

-   これは四角形を3回のクリックで作る、というだけのプラグインではなく、さらにそのシェイプに対して building=yes のタグを付与してくれます。

### 複雑な形の建物を描く
複雑な形状の建物を作成する場合、いくつかの四角形を重ねて描いた後、それら重複する建物をひとつにマージするという方法があります。

-   2つの建物シェイプを重ねあわせて描き、Lの形を作ってください。
-   両方の建物シェイプを選択します。 (2つ以上のオブジェクトを選択するには、Shiftキーを押しながらクリックしてください)
-   ツール -> 重複するエリアを結合 を選択するか、キーボードの Shift + Jキーを押してください。

![Merge buildings][]

### 編集設定
プラグインの設定をデフォルトから変更するには以下のようにしてください。

-   データ -> 建物のサイズを設定、を選択します。

![Set buildings size][]

-   同じような大きさの建物を複数描く場合、例えば 6 x 10メートルなどの形式で、建物の縦横幅を指定することが可能です。(単位はメートルです)

![Set buildings size dialog][]

-   縦横幅を予め設定しておくことで、単にクリックするだけで特定の大きさの建物を作成することができるようになります。

最後に、"高度な設定"ボタンをクリックすることで、建物オブジェクトを描いた際の追加のタグ情報を設定することが可能です。例えば、描く対象の建物がすべて同じストリートに所属している場合、そのストリートを自動的に識別するタグを追加することができます。(訳注: 海外では住所がストリート単位のため、住所をあらわす addr:streetタグを入れます。sourceタグを追加する、などの使い方も一般的でしょう)

![Buildings advanced][]

Utilsplugin2
-------------
-   もしプラグインのインストールがまだの場合、[JOSMプラグイン](/ja/josm/josm-plugins)の記述を参考にして、プラグインのインストールを行ってください。

![utilsplugin2 plugin][]

プラグインのインストールとJOSMの再起動が完了すると、JOSM上部のメニューに "その他のツール" という項目が表示されるようになります。

![more tools menu][]

新しい空のレイヤを作成して、新しい機能を試してみましょう。ここでは、追加された機能のなかでも特に有用な機能を紹介します:

1.  **Add Nodes at Intersections/交差点にノードを追加:**  この機能を使うことで、選択したウェイ同士が交差する位置に、簡単に交点ノードを追加することができます。道路をあらわすウェイは、交点ノードで交差しているべきでしょう。

    ![nodes interesection][]

2.  **Copy Tags from Previous Selection/前回の選択からタグをコピー:**  この機能を使うことで、タグのコピーを簡単に行うことができます。同じタグをもつオブジェクトを複数作成する場合、そのうちのひとつのオブジェクトにタグを付与します。その後、他のオブジェクトを選択して Shift + Rキーを押すことで、一つ前に選択したオブジェクトからタグ情報をコピーすることができます。こうして、複数のオブジェクトに対して同じタグをコピーすることが可能です。この際、コピーされるタグは一つ前に選択されたオブジェクトから引き継がれることに気をつけてください。もし、タグがついていないオブジェクトや、別のオブジェクトを選択してしまった場合、誤ったタグ情報がコピーされてしまう可能性があります。

    ![copy tags][]

3.  **Add Source Tag/ソースタグを追加:** 単純に、sourceタグを追加するプラグインです。最後に付与したsourceタグの情報を記録して、選択したオブジェクトに対してそのsourceタグを追加してくれます。ワンクリックでsourceタグの追加が完了するプラグインです。

4.  **Replace Geometry/位置を置き換え:** 位置の精度が悪いオブジェクトを書き換えたいけれども、その編集履歴やタグ情報、オブジェクトIDを引き継ぎたいという場合に便利なプラグインです。例えば、複雑な形の建物を描き直す場合、新旧両方のオブジェクトを選択して、"位置を置き換え"を起動することで、すべての情報を引き継がせることが可能です。

    ![replace geometry][]


### その他の選択ツール
Utilsplugin2をインストールすることで、"選択"メニューにも多くの項目が追加されます。
是非試してみてください。

![selection menu][]

追加選択ツールでよく使われる機能は **ノードの選択を解除** です。これはその名のとおり、選択したオブジェクトからすべてのノードの選択を解除します。範囲選択を行って、多くのオブジェクトをいっぺんに選択する場合に、この機能を使うことで、ラインやシェイプを構成するノードを選択から除外することができます。

![unselect nodes][]

がんばって！



[buildings_tools plugin]: /images/jp/editing/josm-more-tools/buildings_tools-plugin.png
[buildings_tools button]: /images/jp/editing/josm-more-tools/buildings_tools-button.png
[Draw edge]: /images/jp/editing/josm-more-tools/draw-edge.png
[Extend building]: /images/jp/editing/josm-more-tools/extend-building.png
[Merge buildings]: /images/jp/editing/josm-more-tools/merge-buildings.png
[Set buildings size]: /images/jp/editing/josm-more-tools/set-buildings-size.png
[Set buildings size dialog]: /images/jp/editing/josm-more-tools/set-buildings-size-dialog.png
[Buildings advanced]: /images/jp/editing/josm-more-tools/buildings-advanced.png
[utilsplugin2 plugin]: /images/jp/editing/josm-more-tools/utilsplugin2-plugin.png
[more tools menu]: /images/jp/editing/josm-more-tools/more-tools-menu.png
[nodes interesection]: /images/jp/editing/josm-more-tools/utilsplugin2-nodes-intersection.png
[copy tags]: /images/jp/editing/josm-more-tools/utilsplugin2-copy-tags.png
[replace geometry]: /images/jp/editing/josm-more-tools/utilsplugin2-replace-geometry.png
[selection menu]: /images/jp/editing/josm-more-tools/selection-menu.png
[unselect nodes]: /images/jp/editing/josm-more-tools/utilsplugin2-unselect-nodes.png


