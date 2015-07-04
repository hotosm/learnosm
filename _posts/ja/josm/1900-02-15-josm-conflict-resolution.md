---
layout: doc
title: 競合の解決
permalink: /ja/josm/conflict-resolution/
lang: ja
category: josm
---

競合の解決
====================
JOSMを使ってステキなデータを作成し、データをアップロードするときに、以下のようなメッセージが表示されることがあります。

![conflict detected][]

あなたが編集を行う場合に、その地域のデータをダウンロードし、その中に例えば、ノードAというポイントデータがあったとします。あなたが編集作業を行っている間に、誰かが同様にノードAをダウンロードし、変更を加え、なおかつその内容をOpenStreetMapへ保存しました。その状態で、あなたもノードAを変更してアップロードしようとすると、OSM上にあるデータは2つの変更者によって異なる内容が編集されたことになります。そのため、JOSMはノードAについてどちらの情報が正しく保存されるべきか、判断がつかなくなります。


競合とは
----------
状況によっては、JOSMは競合を内部で自動的に判定して処理し、以下のようなメッセージを表示させます:

![resolved automatically][]

このメッセージは競合が発生した際にJOSMが自動的に処理を行った際に表示され、既に他のユーザによって対象のオブジェクトが削除されたために、あなたのローカルPC上に存在したデータがメインサーバへアップロードされなかった、ということを意味します。

ただしそうした自動的な処理が行えないようなデータの競合が発生した場合は、JOSM上で少々複雑な処理を行い、どちらの編集がよりよく現状をあらわしているか、ユーザが判断を行う必要があります。これはつまり、その競合についてどのように処理を行うかを、あなたが決める必要がある、ということを意味しています。

-   競合が発生した場合、以下のような **ダイアログリスト** が表示されます:
![warning unresolved][]

-   このウィンドウは、あなたの行った編集になんらかの競合が含まれることを示唆しています。サーバ側の情報とあなたの編集内容を比較することで、そこで示唆されている編集の内容を修正することが可能となります:

![check on server][]

-   このメッセージでは、あなたが削除したノードがまだ他のウェイによって使用されている(参照されている)ため、ほんとうに削除してしまってよいノードなのか、という確認を表示させています。この状況を解決するには、JOSMの操作をもう一度行うことで、データをアップロードする前に競合を解決させる必要があります:

![still in use][]

競合の解決
--------------------
競合を解決する方法は非常に簡単ですが、その表示をJOSMではじめて見る場合、とても理解しづらい内容であることは事実です。ただし、基本的にJOSMで表示されるひとつひとつの競合は、あなたの編集内容と、サーバ上の編集内容のどちらを2つの選択肢のどちらかを編集結果として残すかを選ぶことで解決することができます。

"僕の編集の方がよいに決まってる！"と意見ももっともですし、たぶん実際にそうかもしれないのですが、そのときはこの章の最初で説明した内容をもう一度思い出してみてください。あなたが多くの編集を行っている間、そこに含まれるデータの一部を、別のマッパーが詳細に編集している、ということもありえます。あなたの編集を彼らの編集よりも優先させる、ということは、彼らが追加したさまざまな情報を廃棄する、という意味でもあります。そのため、いったん彼らの編集を優先させる、あるいはあなたの編集内容と彼らの編集内容をマージさせる、ということはとても意味のあることです。

-   競合ウィンドウが表示された場合、“ ... のみを同期” を選択するのが最善です。競合の解決を複数のオブジェクトに対して行わなくてはいけない場合があるかもしれませんが、その場合もひとつずつ行ってゆくほうがよいです。

![synchronize node][]

このボタンをクリックすると、競合に関する詳しい情報がポップアップ表示されます。エラーメッセージはパッと見た限りではとても難解に見えますが、実際の内容はたいへんシンプルです。実際にデータの競合が発生している部分は、赤い四角形のシンボルが上部のタブに表示されます。以下にあげている競合の例では、データが持っているプロパティについて、オブジェクトの位置情報や削除状態についてが競合しています。それぞれの競合状態が発生する理由は以下のとおりです。

**競合の種類:**

-   **プロパティ:**  オブジェクトの緯度経度が変更された、あるいは削除された
-   **タグ:**  付与されているタグに整合性がない
-   **ノード:**  お互いのウェイで、含まれるノードが異なっている
-   **メンバー:**  お互いのリレーションで、含まれるメンバーが異なっている

![properties with conflicts][]

競合が検知されるのは、内容が異なる2つの編集が検知された時だけです。3つ以上の競合が同時に検知された場合は、1つの競合を解決してアップロードしようとするその都度、競合の通知が行われます。そのため、競合の解決を1回行う毎に解決できるのは、3つ以上のオブジェクトの間で競合があった場合にも、そのうちの2つの間だけです。解決の際には、あなたの編集を適用してもかまいませんし、他のマッパーが編集した内容を適用したり、その2つをマージしてもかまいません。

-   以下の例では、データのマージという選択肢はありません。あなたの行った編集のほうが正しいと思う場合はあなたのバージョン、あるいは最初のカラムをクリックします。別のマッパーが編集した内容のほうがより正しいと思う場合は、別マッパーのバージョンをクリックしてください。

![conflicts resolved][]

-   より正しいと思われるデータを選択し終わったら、 "競合の解決"をクリックします。いくつかのポップアップメッセージが表示され、あなたの編集全体をアップロードすることが可能な状態になります。
-   さらにいくつかの編集を行ったら、 'アップロード' をクリックしてください。以下のポップアップが表示されます:

![command stack][]

-   競合リストダイアログがウィンドウに表示されます。ウィンドウに表示されているのが、現在の競合の一覧です。まだ未解決状態の競合が、ウィンドウのヘッダ部分に表示されます。クリックを行うことで、それら競合を選択肢たり、解決したりすることができます。いちどに複数の競合が発生している場合に便利です。

![one unresolved][]

-   すべての競合を解決するまで、アップロードを行うことはできません。

競合を回避するための方法
------------------------
### こまめなアップロード
競合の発生数や頻度を抑えるには、編集した内容をこまめにアップロードすることが大切です。競合は、ローカルサーバでなんらかの作業が行われ、その内容をアップロードしている最中にそのエリアを誰かが編集するときに発生しがちです。あなたが編集する地域をまずダウンロードし、編集を行い、すぐにアップロードするのが最善の方法です。ダウンロードしてからアップロードするまでに長い時間がかかってしまうと、その間にその地域を他のマッパーが編集してしまう可能性が高くなります。

### データをダウンロードした地域だけを編集する
データの編集を、ダウンロードした地域だけを対象に行うことで競合のリスクを抑えることが可能です。なるべく、ダウンロードした領域から外にあるデータを編集しないようにしてください。JOSMを使っている場合、ダウンロードしていない領域は背景画像が暗い色の射線で色分けされるので、とても簡単に見分けることが可能です。

![edit outside area][]

まとめ
--------
JOSMで編集を行う場合、競合が発生する可能性は常にあります。競合が発生するのは、1つのオブジェクトを同時に2人以上のマッパーが編集した場合です。競合が発生する理由を理解することにより、発生した事象をどのように扱ったらよいかがわかるようになり、OpenStreetMapに対してよりよい編集内容を、きちんと理解しながら保存することができるようになります。

[conflict detected]: /images/jp/editing/conflict-resolution/conflict-detected.png
[resolved automatically]: /images/jp/editing/conflict-resolution/resolved-automatically.png
[warning unresolved]: /images/jp/editing/conflict-resolution/warning-unresolved.png
[check on server]: /images/jp/editing/conflict-resolution/check-on-server.png
[still in use]: /images/jp/editing/conflict-resolution/still-in-use.png
[synchronize node]: /images/jp/editing/conflict-resolution/synchronize-node.png
[properties with conflicts]: /images/jp/editing/conflict-resolution/properties-with-conflicts.png
[conflicts resolved]: /images/jp/editing/conflict-resolution/conflicts-resolved.png
[synchronize node]: /images/jp/editing/conflict-resolution/synchronize-node.png
[command stack]: /images/jp/editing/conflict-resolution/command-stack.png
[one unresolved]: /images/jp/editing/conflict-resolution/one-unresolved.png
[edit outside area]: /images/jp/editing/conflict-resolution/edit-outside-area.png


<!-- More stuff, could go into an additional chapter -
## Appendix. More Specific Conflicts

### Tag Conflicts

If the tags of one version of an objects are different from the tags of
another version, the Conflict dialog shows a ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in
the tab Tags. Click on the tab to display a dialog for resolving tag
conflicts.

There are three tables displayed in this dialog, from left to right:

1.  My version: shows the tags of the first object version participating
    in this conflict. These are usually the tags of the object version
    in your local data set.
2.  Merged version: shows the merged tags. This table is initially
    empty. The more tag conflicts you resolve, the more tag values will
    we be displayed in this table.
3.  Their version: shows the tags of the second object version
    participating in this conflict. These are usually the tags of the
    object version currently stored on the server.

In the example below both versions have a tag "name". The values in the
two object versions are different, though, and JOSM therefore displays
the row with a red background. The value of the first version is
"Secondary School", the opposite version has a value "Elementary
School". You now have to decide which of these values you want to keep
and which you want to discard.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Click on the value you want to keep, in the example for instance on the
value on the left. If you either double-click on the value or click on
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), you decide to keep the value and to discard the
opposite value. The table in the middle now displays the value to keep
and the background color turns to green.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

When the button Apply Resolutionis enabled you can apply your decision.
The values you've chosen will be applied and the dialog will be closed.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Resolving differences in the node list of two versions of a way

If you see the symbol ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in the tab Nodesthen you
have to resolve differences in the list of
[nodes](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)of two
[ways](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). There
are three columns in the respective panel (see screen shot below):

1.  the leftmost table displays the list of nodes of the the local
    object version
2.  the rightmost table displays the list of nodes of the the server
    object version
3.  the table in the middle shows the list of nodes of the merged ways

Initially, the middle table is empty. You should now decide which nodes
to keep from the local dataset (the leftmost table) and which from the
server dataset (the rightmost table).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### The standard workflow

The standard workflow to resolve conflicts in the node lists of two
[object
versions](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)consists
of three steps:

1.  Pick nodes from either object version and reorder the resulting node
    list if necessary
2.  Freezethe resulting merged node list by clicking on the button
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). When you freeze the merged node list you
    tell JOSM that all conflicts in the node list are resolved.
3.  Apply the resolution

### A simple workflow: Keep the node list from your local object version

The following example shows the workflow when you decide to keep all nodes in the same order from your local object version.

-   First, select all elements in the leftmost table (either using the mouse or by 
    pressing Ctrl-A in the table) (see next screen shot):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

-   Then, click 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    to copy the selected nodes to the middle table with the merged nodes:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

-   Finally, click
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    to freeze the resulting merged node list:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    The symbol in the nodes tab now switched to 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    and you can apply the merge decisions.

### Support for comparing node lists

It can be difficult to find the differences between the node list of of two object versions, in particular for ways with many nodes.

The Conflict Dialog supports you in finding the differences. It can compare two of the node lists displayed ("my" node list, the merged node list, and "their" node list) and it can render the differences between them with specific background colors.

From the following combo box you can select which pair of node lists to compare:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.  My with Their: compares the leftmost table with the rightmost table
    in the Conflict Dialog
2.  My with Merged: compares the leftmost table with the middle table in
    the Conflict Dialog
3.  Their with Merge: compares the middle table with the rightmost table
    in the Conflict Dialog

Depending on the position of a node in the list different background
colors are used:

1.  The node is in this list only. It isn't present in the opposite list:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.  The node is in both lists, but it is on different positions:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.  White background means that a node is in both lists at the same
    position.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->
