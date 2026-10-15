---
layout: doc
title: JOSMでの競合解決
permalink: /ja/josm/conflict-resolution/
lang: ja
category: josm
---

JOSMでの競合解決
====================

> Reviewed 2022-07-01  

JOSMで作業を行い、きれいに編集した内容をアップロードする際に、データの競合を訴える嫌なメッセージが表示されることがあります。  
![conflict detected][]  
この原因は、あなたが編集をしている間に、他の誰かがここで言うノードAをダウンロードし、変更を加えて、その変更をOpenStreetMapへ先に保存してしまったことにあります。 そこで、あなたが編集したノードAのバージョンをアップロードしようとした場合、そのデータのバージョンはかつてOSMに保存されていたものとは異なっています。 そのためJOSMは、ノードAのどのバージョンがOSMに保存されるべきかを、判断する事ができません。  

競合
----------

JOSMがひとりでに編集競合の対処法を考えて、こうしたメッセージを出してくれることもあります。  
![resolved automatically][]  
これが意味しているのは、あなたが編集したデータセットに含まれるオブジェクトが、他のユーザーによって既に削除されているため、メインサーバーにアップロードしないことをJOSMが自動的に決定している、ということです。しかし、競合の内容によっては、JOSMが簡単に対処できる選択肢が存在しないため、何が最適なアクションであるかはユーザーの判断に委ねられることになります。 つまり、編集競合を解決するのはあなた次第なのです。  

これは、レイヤー1にあるすべての競合を**ダイアログリスト**ボックスで確認してほしい旨が指示されています。  
![warning unresolved][]  

このウィンドウでは、あなたが編集した内容で編集競合が発生する可能性があるかどうかについて、警告を表示しています。編集上の問題が発生している場合、サーバー上で確認することで、修正を行うことができます。  
![check on server][]  

この警告は、ノードがまだ何らかの状態で他のオブジェクトから参照されていることが原因で、JOSMがノードの削除に失敗したことを伝えています。 この状態を解決するためには、ユーザはデータをアップロードする前にJOSMを再度操作し、競合を解決する必要があります。  
![still in use][]  

競合の解決
--------------------

競合を解決する方法は非常に簡単です。ただ、JOSMで最初に目にする際には混乱してしまうかもしれません。 基本的にJOSMは、発生しているすべての競合箇所に対し、2つの選択肢を提示します - あなたがアップロードしたオブジェクトバージョンと、サーバー上に存在するバージョンです。自分のバージョンを残すか、サーバー上に存在する新しいバージョンを残すか、どちらかを選択する必要があります。  
あなたはもちろん、"私のバージョンの方がいいに決まっている！"と思われるかもしれません。 そして、その通りかもしれません。しかし、本章の冒頭で述べた例を思い出してみてください。 あなたが編集作業をしている間に、データセット内のあるノードに対し、他のマッパーがより多くの情報を追加していたかもしれません。もし、その人のバージョンではなく自分のバージョンを選んだら、その人が追加した貴重な情報をすべて失うことになります。したがって、その人のバージョンを維持するか、自分のバージョンとマージすることを検討すべきです。  
競合解決ウィンドウのポップアップが表示されたら、"... のみを同期する"のボタンを選択するのが最善です。複数のオブジェクトに対してこの操作を行う必要があるかもしれませんが、競合は一度に1つずつ解決するのがお勧めです。  
![synchronize node][]  
このボタンをクリックするとポップアップウィンドウが表示され、競合の詳細が表示されます。複雑なエラーメッセージに見えるかもしれませんが、むしろ内容はシンプルです。一番上のタブにある赤い四角いマークで、どのような編集競合が発生しているかが分かります。下の競合の例では、オブジェクトの位置や、削除されたかどうかなどのプロパティが参照されています。そのため、座標や削除された状態などが表示されています。  

**競合の種類**

- **プロパティ:**  オブジェクトの位置（座標）が変更された、あるいは削除された  
- **タグ:**  タグに不整合がある  
- **ノード:**  2つのウェイの間で、所属しているノードに差異がある  
- **メンバー:**  リレーションに所属しているメンバーに差異がある  
![properties with conflicts][]  

Conflicts only appear with two different edits at a time.  If there are three or more conflicts, then a chain of conflicts will pop-up.  Therefore you have to choose or merge with only two conflicts at a time.  You can choose your version, the other version or, at times, merge the two.  

In the below example you do not have the option of merging. Click on the first column, or My version if you believe that your edits are correct. Click on Their version if you think that the other edits are better.  
![conflicts resolved][]  

Once you have selected which version you think is best, then click “Apply Resolution.”  A few more windows will pop up and you will be on your way toward being able to upload your edits. Do some more editing.  Then click ‘Upload’.  You will get a pop-up that says:  
![command stack][]  

On your Windows menu you have a Conflict List Dialog . This window displays a list of conflicts. The total number of unresolved conflicts is shown in the header. You can select or resolve a conflict by clicking on it. This is useful when you have many conflicts to deal with.  
![one unresolved][]  
You cannot upload your changes until this list is empty.  

Ways to Avoid Conflicts
------------------------

### Upload Frequently

To minimize the chance and number of conflicts it is important to upload your edits regularly.  Conflicts appear more frequently for those who tend to save the area they are working on in their local server and wait a while to upload it.  It is best to download the area you are working on, edit it and then immediately upload it.  The longer the time between downloading data and uploading changes to that data, the more likely it is that someone has edited something in the meantime. If you are at a Mapathon & editing a feature such as a highway which may be worked on by others as well, upload very frequently, perhaps every 6 edits!  

### Edit in the Area You Download

Editing in the specific area you have downloaded minimizes conflict risk.  Make sure you do not edit outside of the area that you have downloaded.  You can easily see which areas outside your download area in JOSM, because the background is made up of diagonal lines instead of being solid black.  

![edit outside area][]  

Summary
--------
When you edit in JOSM, you run the risk of running into conflicts.  Conflicts occur when an object has been edited by two people at a similar time.  By understanding what a conflict is and how to deal with it, you will be able to ensure that the best possible edits are saved to OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
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

### 標準のワークフロー

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

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png