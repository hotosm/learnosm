---
layout: doc
title: タグの付与 - iDエディタ
permalink: /ja/hot-tips/tagging/
lang: ja
category: hot-tips
---

タグの付与 - iDエディタ
============

> Updated 2019-06-28

- TOC
{:toc}

![tagging][]


タグの付与が必要な理由
-------------------

地図に描かれたアイテムに対してタグがなかったとすると、そのアイテムがどのような物体を意味しているかの情報が無いため、地図に表示することができなくなります。タグの情報を使うことで、コンピュータはその地物が実際には何を表しているかを理解します。もし地物へのタグの '付与し忘れ' を見つけた場合、その地物に対して適切なタグを付与するようにしてください。アイテムに対してタグが付与されると、そのアイテムに色がついて表示されます。例えば図のように、建物のタグが付与されたポリゴンは赤く表示されます。**もし白いままのアイテムを見つけて、タグの付与が忘れられているようであれば、適切なタグを付与してください。**  

![tagged-building][]  

Tasking Managerのプロジェクト作成者は、それぞれのマッパーがどのエディタを利用するかわかりません。そのため、インストラクションは多くの場合、以下のような内容になります。  

-  *建物は円形のヒュッテであることが多く、iDでは **建物 / 建物全般**、また、JOSMでは **building=yes** としてタグが表現されます。*  

アイテムに付与されているタグを直接確認したい場合は、アイテムをクリックし、タグ表示ペインの下部に表示されている**すべてのタグ**を展開してください。

### タグ - 概説 ###

アイテムを選択した後、**すべてのタグ**を展開すると、以下のような情報が表示されます。  

**building    yes**  

これは最も基本的な建物用のタグであり、Tasking Managerのタスクを経由して建物をトレースする際に推奨されるタグ付けです。  

もし対象の建物のことをよく知っているようであれば、以下のようにより詳しいタグ情報を入力することができます;  
  **building   house**  
  **building   school**  
他にもタグは数多く存在しています。建物のタグに関する詳細は <https://wiki.openstreetmap.org/wiki/Buildings> を参照してください。  

道路に関するタグの情報は [HOT tipsセクション内、道路セクション](/ja/hot-tips/highways/) を参照してください。  

### リレーション - 中庭のある建物、中洲のある河川など ###

地物のなかには、**リレーション**としてタグ情報をもち、地物それ自体にはタグを持っていないものがあります。リレーションについて表記のある地物が画面に表示された場合、全くの初心者向けのもっとも有益なアドバイスは 'そのままにしておいてください' です。  

リレーションに関するより詳しい情報は以下を参照ください (**初心者向けではありません**) ;  

[LearnOSM - JOSM - リレーション](/ja/josm/josm-relations/) では、OSMエディタは異なるものの、リレーションについての解説を行っています。あるいは以下のページを参照ください。  
<https://wiki.openstreetmap.org/wiki/Relation>

参考情報  
---------

より網羅的なタグの一覧については <https://wiki.openstreetmap.org/wiki/Map_Features> を参照ください。  

[![one-mnute-tutorial-videos]{: height="150px"}](https://www.youtube.com/playlist?list=PLb9506_-6FMHZ3nwn9heri3xjQKrSq1hN "Humanitarian OpenStreetMap Team - One minute Tutorial Videos")  
*言語によっては字幕あり*  





[tagging]:/images/hot-tips/tagging.gif
[keymon]:/images/hot-tips/keymon.png
[tagged-building]:/images/hot-tips/tagged-building.png
[one-mnute-tutorial-videos]: /images/hot-tips/one-mnute-tutorial-videos.png "Humanitarian OpenStreetMap Team One-Minute Tutorial Videos"