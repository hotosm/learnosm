---
layout: doc
title: 円形の建物を描くには - iDエディタ
permalink: /ja/hot-tips/tracing-round-buildings/
lang: ja
category: hot-tips
---

円形の建物を描くには - iDエディタ
============

> Updated 2019-06-24

- TOC
{:toc}

基礎
----------

![Round Buildings][]


注意するポイント;  

- Place your points where the walls will reach the ground - 3 points is the minimum. Double click on the last point to finish tracing an area. Use the tool to make it round - shortcut **o** in English.  
- タグを付けるのを忘れずに！  
- サイズの問題 - *人口推定作業は、対象のエリア内に占める建物のエリアの割合で計算します*。  
- 詳細な情報を確認するため、適切に表示を拡大しましょう - 多くの場合、20メートルあるいはそれ以下の縮尺が適切です。  
- **建物を探す** - 適切に拡大を行った状態で、50メートルから80メートルほど、建物を探してみましょう。建物によって発生する影と、真っ直ぐな線がポイントです（円形の建物は探すのに苦労します！）。  
- 建物や道路、河川、**landuse=residential**の境界線など、地物はオーバーラップしないように描きましょう。  
- もし間違ってしまった場合、**やり直し/Undo** ボタン ![back arrow]{: height="26px"} をクリックすると、最後に行った変更が取り消されます。  
- 私達の目的は、地図を改善することです。もし以前に編集を行ったマッパーが、おかしな形や明らかに間違った建物の描き方をしてしまっていることを見つけた場合、その形状を修正し、その人に優しい言葉でメッセージを送ってみましょう。  

Building - converting square to round
-------------------------------------

![Square to round][]  

If a building has been traced as rectangular, but you can see it should be round it is easy to convert to a round building;

- move each of the corners so they are now on the perimeter of the round building,
- right click and use the circularise tool, or shortcut **o** - may be a different character in other languages.  

建物の見分け方
---------------

円形の建物は、周辺状況が複雑な地域でしばしば存在し、密集していることもあれば孤立して存在していることもあります。一見するだけでは、それが大きな岩なのか、茂みなのか、あるいは建物なのか、確証を持つことが困難です。ただし建物の近くには通常、かなり見分けづらいとはいえ、そこに入るために人や車が通る道路や小道が存在します。周辺が草地である場合、歩くために足で踏みしめられた跡が残ることでしょう。地域によっては、建物は乾燥した場所にだけ建てられたりすることがありますし、河川や湖の近くに建てられた建物の場合、ボートや舟でのみ出入りしていることもあります。大抵の場合、集落から2−3km以内にはなんらかの水源が存在しますが、多くの場合、水源を見つけるよりもなんらかの植物の植生があるかどうかで判別を行うほうがよいでしょう。  

多くの地域では、新しく村落を構成する場合、以前から存在する村落からそこまで離れていない場所に新しい村落を築き、古いものはそのまま朽ちるまで - あるいは火災等で焼け落ちるまで放置される、ということが行われます。衛星写真に映る影を参照すると、それが建物かどうかの判別を行うことができます。もし単に円形の建物の跡が地面に残っている場合、影は発生しえません。**もし迷った場合は、建物として描くようにします**。  

![bush-and-round-building][]  
この画像にはどちらも、木の茂みと円形の建物が映っています。映し出されている影に注目することで、どちらが茂みでどちらが建物か、判別することができます。気温が高い地域では、樹木や茂みの近くに建物を建てることで日陰や遮蔽を得ることがあります。こうした状況に関するより詳しい解説については、そうした地域の建物の写真をもとに解説を加えた[日記エントリ](https://www.openstreetmap.org/user/IvanGayton/diary/38612)が参考になります。ぜひ日記の内容に目を通してみてください。円形の建物は、その他の地域の建物とは建材や工法が若干異なっており、屋根の形も独特です。多くのプロジェクトでは、その地域で衛星写真から判別できる内容についての解説が行われています。  

最善を尽くしましょう - 熟練したマッパーでもたまに間違うことがありますが、マッピングを行う際には、そこに表示されているものをなるべく正確に描くようにしましょう。 **もし迷うような場合、建物を描いてしまってください。**  

建物のタグ付け
-------------

今回のような作業の場合、私達はそこに訪れたこともなければ、詳しく状況を見知ったこともない場所を描きます。そのため、最も安全かつお勧めのタグは **building**=**yes** です。建物のオブジェクトにこのタグがついているかどうかは、iDの画面左側のタグ情報ペインの一番下、**すべてのタグ**をクリックすると確認できます。

参考情報  
---------

[Ivan Gayton's diary entry for Hadjer Lamis, Chad - comments from others indicate the description fits other parts of the world as well](https://www.openstreetmap.org/user/IvanGayton/diary/38612)

[![building-video]{: height="150px"}](https://www.youtube.com/watch?v=VPJz-AucqF4&index=7&list=PLb9506_-6FMHZ3nwn9heri3xjQKrSq1hN "Humanitarian OpenStreetMap Team Tutorial Videos - Adding a Building to OpenStreetMap")  


[keymon]:/images/hot-tips/keymon.png
[Round Buildings]: /images/hot-tips/round_building.gif "Demonstration of mapping a round building"
[Square to round]: /images/hot-tips/square-round-building.gif "Demonstrating changing a square to round building"  
[bush-and-round-building]: /images/hot-tips/bush-and-round-building.png "Round building next to a bush"
[back arrow]: /images/beginner/back-arrow.png "Undo"
[building-video]: /images/hot-tips/building-video.png "Humanitarian OpenStreetMap Team Tutorial Videos - Adding a Building to OpenStreetMap"