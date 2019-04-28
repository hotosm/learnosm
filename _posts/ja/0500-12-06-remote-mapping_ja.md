---
layout: doc
title: HOTリモートマッピング  
permalink: /ja/coordination/HOT-Remote-Response-Guide/ 
lang: ja
category: coordination
---

# HOTリモートレスポンスガイド   

![HotGuideLogo](/images/hot-logo.png)  

> このガイドは次の形式でダウンロードできます。[remote-mapping_ja.odt](/files/remote-mapping_ja.odt) および [remote-mapping_ja.pdf](/files/remote-mapping_ja.pdf)  
> Reviewed 2019-04-17  

OpenStreetMap人道支援チーム (HOT, Humanitarian OpenStreetMap Team) は全世界のコミュニティであり、オープンソースとオープンデータの共有によって人道支援活動と経済発展という目的を達成しようと活動しています。  

### リモートレスポンスの基本 

![MissingMapsProcess](http://hot.openstreetmap.org/sites/default/files/styles/large/public/process.png?itok=jlAYWov0)  

HOTによる災害対応活動は主にリモートから行われます。災害発生後、HOTメンバーは既存の入手可能なデータや、利用可能な衛星画像を探します。関係各所のパートナーに対してODbLと互換のある衛星画像が得られるかコンタクトをとります。衛星写真の入手後、オンラインでのコミュニティが結成され、衛星画像をトレースしてデジタル化し、地図を作成する活動にとりかかります（通常、トレースの目的は、道路や建物、通行不可の道路や洪水の浸水域など、人道支援に有用な地物の抽出です）。この際、現地で対応を行っている組織に対しても、現地のニーズがどのようなものか、コンタクトが試みられます。  

発生した災害や危機の規模を勘案した後、HOTは必要なリソースを召集し、さらに新しいリソースが利用可能となった際や対応方針が変更された際に即座に対応できるよう、メンバーやチームを編成します。HOTはOSMコミュニティとの関係を深め、そしてTasking Managerなどのツールを使って災害対応活動を主導してくれる各地の参加者を募っています。例えば、アイボリーコーストやセネガル、フィリピン、コンゴ民主共和国などへのリモート活動がこれまでに行われています。  

[シリアでの活動の例](http://hot.openstreetmap.org/updates/2013-01-28_syria_activation)  

### HOT Tasking Manager 

[HOT Tasking Manager](http://tasks.hotosm.org/)は特定地域のマッピング活動を小さなタスクに分割し、素早いマッピングを可能にするためのオープンソース・ツールです。どの区域を優先してマッピングするべきかを可視化し、マッピングが完了した区域に対して確認作業が必要であることを示します。Tasking Managerでは、[Activations](http://wiki.openstreetmap.org/wiki/HOT_activation)単位でのマッピングタスクが登録され、長期的には[人道支援プロジェクト](http://hot.openstreetmap.org/projects)の対応に紐付いています。  

HOT Tasking Managerを使うにはOpenStreetMap (OSM) アカウントのユーザ名とパスワードを使ったログインが必要です。より詳しい情報は[Tasking Manager Tutorial](http://learnosm.org/ja/coordination/tasking-manager/)の章を参照ください。  

![HOTTaskingManager](http://hot.openstreetmap.org/sites/default/files/styles/large/public/task_manager_v2_screenshot_CAR_example.png?itok=Q35ytxKl)  

### 地図編集ツール 

[iD](http://learnosm.org/en/beginner/id-editor/) - [Mapbox](www.mapbox.com)社が作成したブラウザベースのエディタで、非常に使いやすいインターフェースを有しています。一般的に、最初に利用するツールとしては最適だ、と言われています。[iDエディタ実践チュートリアル](http://ideditor.com/)を通して、具体的な使い方を学ぶことも可能です。  

![iDeditor](https://blog.openstreetmap.org/wp-content/uploads/2013/08/id-editor-sotm-us-2013-venue-screenshot.png)  


[JOSM](https://josm.openstreetmap.de/) - Javaで作られたアプリケーションで、"ジョーズム/Jaws-um"と読みます。JOSMを使うためにはアプリケーションのダウンロードが必要で、使い方の習得にはそれなりに長い時間がかかります。ただ、セットアップや習得の難易度に見合うだけの、超高速な編集が可能になるツールでもあります。このエディタを使うにはマウスの利用が推奨されます。  

![JOSM](http://njgeo.org/wp-content/uploads/2010/07/josm_osm_editor.png)  

### アドバイス

> "実践を積むには、自分がよく知っているエリアでいくつか編集をしてみることをお勧めします。例えば、近所の建物をいくつか描き足してみたり"  
> "タスクにはいくつか、難易度のものもあります。もしできなさそうなタスクを選んでしまったら、遠慮なくキャンセルして他のタスクを選んでみるとよいでしょう" -Peter (@meetar)  
> "タスクは完全に終わらせなくてもかまいません。自分が作業したぶんだけ、作業結果をアップロードしてタスクをアンロックし、他の人が続きを作業できるようにしましょう" -Peter (@meetar)  
> "入隊試験にどの程度のクオリティの作業が必要なのか気になる場合、すでに編集が行われたことを示す"緑色"のタスクをチェックしてみましょう。壊れないから大丈夫、"作業をレビュー"のボタンを押すだけなら、あなたの作業はなにも影響を及ぼしません。ボタンを押すと、編集作業を行うときのようにタスクがロックされます。いつもどおりエディタでデータを読み込んで、内容の確認が終わったらタスクをアンロックしてください。" -Peter (@meetar)  
> "衛星写真からの判別が難しい場合は確かにあるのですが、だからといって完璧なラインや形状にこだわりすぎないでください。作業結果は他の誰かにレビューされ、そこで適切な修正が行われたり、時と共に品質が向上していったりします。ただし、あなたが作成したデータは、現地で緊急事態に対処している、あるいは現地で苦しんでいる人たちが暗闇の中で、そして危険に直面しながら利用するものだということを肝に銘じてください。西アフリカにおいて、地図に描かれた一本の線は、一条の希望が繋がれることを意味します。ガザ地域では、マッピングされるべき多くの建物は、そのほとんどがすでに破壊されてしまいました。しかし私達は復旧の過程を事実として記録します。位置が正確であることは良いことです、ただし重要な点は他にもあるのです。" -Peter (@meetar)  
 
# その他のリソース 

このガイドの内容は、これまでに作成されたチュートリアルやHOTガイドの内容を抜粋し、まとめ直したものです。以下のリンクにはより多くの情報が紹介されています。  

### チュートリアル

[LearnOSM リモートマッピングガイド](http://learnosm.org/ja/coordination/remote/) - 最も網羅的な内容を持つガイドのひとつ  

[MapGiveの Learn To Map チュートリアル](http://mapgive.state.gov/learn-to-map/) - 動画チュートリアルになっており、一時停止することで作業を行いながら実際に手を動かしてみることができます  

[HotQuickStartGuide](https://gist.github.com/meetar/b9929dfec129d1d7f5f2) - 経験豊富なHOTリモートレスポンスボランティア、Peter Richardson (@meetar)さんの手による解説  

### HOTについて 

[HOT Wikiページ](http://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team) - 具体的なHOTの活動内容や最新のニュースが掲載されています  

[HotCapacities](http://hot.openstreetmap.org/about/hot_capacities) - ウェブページよりも詳細な内容でHOTの活動が開設されています  