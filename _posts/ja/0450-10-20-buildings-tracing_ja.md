---
layout: doc
title: 四角形の建物を描くには - iDエディタ
permalink: /ja/hot-tips/tracing-rectangular-buildings/
lang: ja
category: hot-tips
---

四角形の建物を描くには - iDエディタ
============

> Updated 2019-06-23

- TOC
{:toc}

基礎
----------

![Rectangular building][]  

> この画像 ![keymon]{: height="24px"} は、マウスのボタンやホイール、あるいはキーボードのどのキーを使えばよいかを表しています。  

注意するポイント;  

- To finish tracing an area, double click on the last point,  
- If the building should have square corners, make sure you trace it with square corners, or use the tool to square the corners (in English, shortcut **q**).  
- タグを付けるのを忘れずに！  
- サイズの問題 - *人口推定作業は、対象のエリア内に占める建物のエリアの割合で計算します*。  
- 正しいサイズで正しい位置に描かれた建物は、集落の位置を特定するのに役立ちます。  
- 詳細な情報を確認するため、適切に表示を拡大しましょう - 多くの場合、20メートルあるいはそれ以下の縮尺が適切です。  
- **建物を探す** - 適切に拡大を行った状態で、50メートルから80メートルほど、建物を探してみましょう。建物によって発生する影と、真っ直ぐな線がポイントです（円形の建物は探すのに苦労します！）。  
- 建物や道路、河川、**landuse=residential**の境界線など、地物はオーバーラップしないように描きましょう。  
- もし間違ってしまった場合、**やり直し/Undo** ボタン ![back arrow]{: height="26px"} をクリックすると、最後に行った変更が取り消されます。  
- 私達の目的は、地図を改善することです。もし以前に編集を行ったマッパーが、おかしな形や明らかに間違った建物の描き方をしてしまっていることを見つけた場合、その形状を修正し、その人に優しい言葉でメッセージを送ってみましょう。  

形状が不明瞭、あるいはアングルがついている場合  
--------------------------------------

![building-obscured][]  

衛星写真の撮影が斜め方向から行われた場合など、建物の形状がひずんでしまうことはよくあります。上記の画像では、右側の画像が、建物の形状を正しく描いた状態です。このような建物を描く際に利用されるテクニックとしては、まず建物の屋根の形状をトレースし、その後、建物と地面が接している部分までオブジェクトをドラッグして移動する方法が、一番簡単です。また、建物の一部が樹木で隠されてしまっている場合は、正しく四角形の形状で建物を描くようにしてください。 

屋根に傾斜のある建物
----------------------------
 
円形の建物も稀にありますが、ほとんどの建物は、四角形の角が90度で形成されています。  

![building-ridge][]  
この建物は角が90度で形成されていますが、屋根に傾斜があるようです。そのため、カメラの画角の影響で、形が奇妙に歪んでしまっています。  

![building-tree-ridge][]  
この建物は、一部が樹木で隠されてしまっています。形状は四角形のようです。  

世界の一部では、屋根にトタンを使うことはしばしば行われていますが、トタンが日光を反射することによって、衛星写真に **非常に明るい、フレア効果** が映ることがあります。また、屋根にはベランダがある場合や、 **形状がL字状**である場合もあります。トレースした建物の形について、気を配るようにしましょう。  
建物の形状をトレースする場合、建物の大きさはできるだけ正確に、そして建物の壁が地面と接している部分をトレースするようにしましょう。がんばりどころです！ 世界の多くの場所では、建物は建てられている途中であったり、売り先や用途が見つかるまで屋根がつけられなかったりすることがあります。屋根のない建物も、普通の建物と同じように描くようにしてください。そうした建物は屋根がつけられるまでそれほど長い期間かかりませんし、衛星写真の撮影期間によっては、既に現在、屋根がつけられている可能性も十分にあります。  

最善を尽くしましょう - 熟練したマッパーでもたまに間違うことがありますが、マッピングを行う際には、そこに表示されているものをなるべく正確に描くようにしましょう。 **もし迷うような場合、建物を描いてしまってください。**  

建物のタグ付け
-------------

今回のような作業の場合、私達はそこに訪れたこともなければ、詳しく状況を見知ったこともない場所を描きます。そのため、最も安全かつお勧めのタグは **building**=**yes** です。建物のオブジェクトにこのタグがついているかどうかは、iDの画面左側のタグ情報ペインの一番下、**すべてのタグ**をクリックすると確認できます。  

参考情報  
---------

- [![building-video]{: height="150px"}](https://www.youtube.com/watch?v=VPJz-AucqF4&index=7&list=PLb9506_-6FMHZ3nwn9heri3xjQKrSq1hN "Humanitarian OpenStreetMap Team Tutorial Videos - Adding a Building to OpenStreetMap")  
*言語によっては字幕あり*  

- [Ivan Gayton's diary entry for Hadjer Lamis, Chad - comments from others indicate the description fits other parts of the world as well](https://www.openstreetmap.org/user/IvanGayton/diary/38612)



[Rectangular building]: /images/hot-tips/rectangular_building.gif "Tracing a rectangular building, squaring the corners, and adding tags."
[keymon]:/images/hot-tips/keymon.png
[building-ridge]: /images/hot-tips/building-ridge.png
[back arrow]: /images/beginner/back-arrow.png
[building-tree-ridge]: /images/hot-tips/building-tree-ridge.png
[building-obscured]: /images/hot-tips/buildings-obscured-traced-1.png "Before & after - tracing a building seen at an angle"
[building-video]: /images/hot-tips/building-video.png "Humanitarian OpenStreetMap Team Tutorial Videos - Adding a Building to OpenStreetMap"