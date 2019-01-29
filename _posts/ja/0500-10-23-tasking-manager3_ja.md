---
layout: doc
title: Tasking Manager 3
permalink: /ja/coordination/tasking-manager3/
lang: ja
category: coordination
---

# Tasking Manager 3

> このガイドは次の形式でダウンロードできます。 [tasking-manager3_ja.odt](/files/tasking-manager3_ja.odt) および [tasking-manager3_ja.pdf](/files/tasking-manager3_ja.pdf)  

**このガイドは現行バージョンのTasking Managerについて解説を行っています。もしあなたが利用している画面がこのガイドと異なっている場合は、[以前のバージョンのマニュアル](/ja/coordination/tasking-manager)を参照するようにしてください。**

この章の内容
-------------
-  [クイックスタートガイド](/ja/coordination/tasking-manager3/#quick-start-guide)  
-  [マッピング手順](/ja/coordination/tasking-manager3/#mapping-process)  
    -  [ログイン](/ja/coordination/tasking-manager3/#tasking-manager-login)  
    -  [オプション - 言語設定とユーザプロフィール](/en/coordination/tasking-manager3/#options-amp-links)  
    -  [プロジェクト検索 - 一覧表示および地図表示、検索とフィルタリング](/ja/coordination/tasking-manager3/#finding-a-project---tasking-manager-contribute-screen)  
    -  [タスクのマッピング - タスクの選択、作業、アンロック](/ja/coordination/tasking-manager3/#mapping-via-the-tasking-manager) 
-  [他の人への相談 - プロジェクト管理者への連絡](/ja/coordination/tasking-manager3/#getting-help)  
-  [ヒントとTIPS](/ja/coordination/tasking-manager3/#editing-hints-and-tips)
-  [データの妥当性検証](/ja/coordination/tasking-manager3/#validation)

[HOT OSM Tasking Manager](http://tasks.hotosm.org) は、OpenStreetMapの特定のエリア内における複数の人々の同時編集をコーディネートするためのツールです。

OpenStreetMapとは、多くの人々の共同作業によって成り立つ、クラウドソースの自由な世界地図です。OpenStreetMapへの参加は、興味さえあれば世界中どこから、誰でも可能です。Tasking ManagerはOpenStreetMapを一度に多数の人々が共同編集する際に利用するツールのひとつですが、OpenStreetMapに参加するほとんどのひとは、このツールを使わず、単独で作業を行っています。

Tasking ManagerはOpenStreetMapのメインプロジェクトとは全く関連性のないツールです。Tasking Managerを使ってOpenStreetMapの編集を行う場合、実際には以下のような複数のツールを同時に利用しています:

* OpenStreetMap - 地理空間情報データベース
* The Tasking Manager - 多数の人々が同時に、特定の地域のOpenStreetMapデータを編集することを容易にするツール
* OpenStreetMapエディタ - OpenStreetMapのデータを読み書きするためのソフトウェアプログラム

![TM overview][]

Tasking Managerの役割は、特定の地域を"タスク"と呼ばれる小さな区域に分割し、素早くマッピングを可能にすること、そしてOpenStreetMapで通常利用されるエディタを使ってそれらの小さな区域をマッピングしている間、"チェックアウト"や"ロック"といった機能を提供することです。"チェックアウト"や"ロック"をこうした小さな区域に行うことで、その地域を特定のひとだけがマッピングしているという状態を作り出すことができます。これにより、"重複マッピング"や、OpenStreetMapで全く同一のエリアを複数人が同時編集してしまったときに発生するエラーの発生を予防することができます。

対象の小さな区域をマッピングし終わったら、Tasking Managerにその地域のマッピングが終わったことを登録します。もし望む場合は続いて他の"タスク"を選択することが可能です。


## クイックスタートガイド

1. http://openstreetmap.org/ にログインして、アカウントを作成  
  ![TM Quick Start 1][]
2. [http://tasks.hotosm.org/](http://tasks.hotosm.org/) を表示し、画面右上に表示されているログインボタンからログイン  
  ![TM Quick Start 2][]
3. "協力/Contribute"をクリックし、作業対象のマッピングプロジェクトを探す  
  ![TM Quick Start 3][]
4. プロジェクトのインストラクションをよく読む  
  ![TM Quick Start 4][]
5. "マップ"タブをクリック  
  ![TM Quick Start 5][]
6. 一覧に表示されているタスクのいづれかを選択し、"マッピング開始"を選択します。  
  ![TM Quick Start 6][]
7. OpenStreetMapエディタに画面を切り替えます。インストラクションのなかで指定されている地物をすべて描きましょう。  
  ![TM Quick Start 7][]
8. マッピングが完了したらTasking Managerの画面に戻り、もし作業が完了していれば "マッピング完了としてマーク"、あるいは何らかの理由で作業が途中の場合は "マッピングを中断"をクリックします。  
  ![TM Quick Start 8][]


## マッピング手順 

1. 遠隔から作業を行うマッパーは、まずOpenStreetMapのアカウントを作成し、Tasking Managerにログインします。
1. 作業対象のプロジェクトを選択します。通常はタスクの優先度や、Tasking Managerプロジェクト管理者が定めたスキルレベルに沿って選択を行います。 
2. 小さな四角形として表示される作業対象のタスクを選択し、作業が完了したらそのタスクを完了としてマークします。
3. 次に、完了しているとマークされたタスクを別のマッパーがチェックし、作業基準に達しているかを確認した後、 '検証済み' としてマークします。
4. プロジェクトのマッピング進捗状況はプロジェクトの "活動統計" タブから確認することができ、管理者の要望に応じて優先度が下げられたり、アーカイブされたりします。

### Tasking Managerへのログイン

Tasking ManagerはOpenStreetMapとは別に開発された、多人数でのマッピングをコーディネートするためのツールです。しかしTasking ManagerではOpenStreetMapのログインシステムを利用しています。これはつまり、この2つのシステムを使うにあたって別々のアカウントを取得する必要がないことを意味していますが、そのかわり、Tasking Managerでマッピングする際にはOpenStreetMapのアカウント作成とログインが必須ということでもあります。

Tasking Managerをはじめて表示させた場合、画面右上に"ログイン"ボタンが表示されます。

![TM login 1][]

ログインボタンをクリックすると、OpenStreetMapウェブサイトに転送が行われます。OpenStreetMapウェブサイトにログインし、設定からTasking Managerへのアクセスを許可してください。OpenStreetMapウェブサイトのアカウントを持っていない場合は、作成を行ってください。

![TM login 2][]

![TM login 3][]

OpenStreetMapにログインが完了すると、Tasking Managerの画面に戻ります。画面上部の協力、あるいはマッピング開始、のボタンをクリックすると現在活動が可能なプロジェクトの一覧が表示されます。

### オプションとリンク

Tasking Managerの初期表示言語は英語になっています。画面右上に表示されている **English** をクリックすると、別の言語への切り替えが可能です。

ログインした後は、画面の右上にあなたのログイン名が表示されます。ここからは以下の操作が可能です:

- Tasking Managerのプロフィールの確認: 
    - メールアドレスの更新、ソーシャルメディアとの連携
    - マッパーの経験レベル表示
    - これまで参加したプロジェクトの一覧と地図
- Tasking Manager内の **メッセージ** 画面を表示 (OpenStreetMapのメッセージとは異なるシステムです)
- ログアウト

### プロジェクトへの参加 - Tasking Manager参加画面

メインメニューに表示されている "協力" をクリックすると、現在Tasking Managerに登録されているプロジェクトが一覧で表示されます。

![TM contribute][]

Tasking Manager参加画面は3つの大きなエリアで構成されています:

- 左側に表示される、検索とフィルタリングオプション
- プロジェクト一覧
- プロジェクト一覧の地図表示

### 検索とフィルタリングオプション

デフォルトでは、表示されているプロジェクトはすべてマッピング可能な状態となっています。また、拡張検索フィルタを使うことで、作業対象のプロジェクトを細かく指定することが可能です。

- プロジェクト番号 - 探しているプロジェクトの番号が判明している場合、その番号をもとに検索が可能です。
- 組織 - プロジェクトに関与している組織の名前をもとに検索を行うことができます。
- マッピング難易度 - プロジェクトの中には、通常よりもマッピングの難易度が高いものが存在します。このオプションを使うことで、参加者の経験レベルに応じた適切なプロジェクトを検索することができます。経験豊富なマッパーにお薦めの機能です。
- マッピングタイプ - マッピング対象となっている地物によるフィルタリングを行います。ほとんどのプロジェクトはマッピング対象の地物が1種類ですが、状況によっては複数の地物をマッピングするものもあります。
- 全文検索 - プロジェクトの説明に、特定の文言やフレーズが使われているかどうかをもとに検索を行います。
- キャンペーンタグ - それぞれのプロジェクトは、より大きなマッピングキャンペーンの一部として行われることがあります。このフィールドにキャンペーンの名前を入力して、そのキャンペーン単位での検索が可能です。

### 地図表示
"地図表示"タブをクリックすることで、世界のどこでどのようなプロジェクトが行われているか、表示させることができます。個々のプロジェクトを表示させるには、地図をダブルクリック、あるいは拡大してください。拡大してゆくと優先度ごとに、緊急は赤色、高・中は黄色、低は緑色でポイントが表示されます。地図上のポイントをクリックすると、そのプロジェクトの概要が表示されます。プロジェクトのタイトルをクリックすることで、該当のプロジェクトページを表示させることができます。

![TM project map][]

### Tasking Managerを使ったマッピング

作業を行う対象のプロジェクトを決めたら、プロジェクトのタイトルをクリックし、詳細を確認してください。詳細表示には以下の内容が含まれています:

- プロジェクトの重要性と、そのデータの利活用方法
- 何をどのようにマッピングすべきか、の詳細
- マッピング内容検証の選択画面
- 個々のマッピングタスクエリア表示と、その状況
- プロジェクトについての質問やコメント

![TM project description][]



### プロジェクトページ

プロジェクトに関するすべての情報はここに集約されています！ 最上部はマッピングプロジェクトについての解説と、関連情報が表示されます。  

その下は、大きく左右に分割されています。左側には"マッピング方法解説"、"マッピング"、"検証"、そして"質問とコメント"のタブが表示されます。右側はプロジェクトに関する地図表示と、タスクそれぞれのマッピング状況が示されます。

- 色のついていないタスクは、誰もマッピングしておらず、作業が可能です
- ピンクで囲まれた区画は、優先度の高いエリアです
- 黄色/金色の縁取りがされた区画はマッピング完了の報告があるエリアで、検証作業待ちの状態です
- 黄色の縁取りは、あなたが選択しているタスクです
- 青色のタスクは現在他のマッパーが作業を行っています 
- 緑色のタスクは2段階目のマッピングプロセスが終わり、"検証済み" になっている状態です
- 濃い灰色のタスクは他のマッパーによってロックされており、航空写真の品質が悪いためにマッピングができないことを意味しています 
- プロジェクトの対象範囲は青い色の線で表示されます。この青い線は、航空写真が提供された範囲や行政区画などをもとに定義されており、あまり一般的ではない形状になっている場合もあります。対象範囲外をマッピングしても構いませんが、その作業は必須事項ではなく、作業検証者による検証対象にはなりません。  


### マッピング方法解説タブ
ここには、対象のマッピングタスクで何が求められているかが記載されます。プロジェクトの難易度、例えば初心者歓迎なのか、中級者以上推奨なのか、熟練マッパー限定なのか、や、その説明などがそれにあたります。作業を始める際にはこの部分をよく読み、理解するようにしてください。マッピングプロジェクトには様々なスタイルがあり、目的は多種多様に渡ります。多くのプロジェクト活動が含む内容は以下のとおりです:  

- 道路ネットワーク: 現地で活動する人たちが手持ちのデバイスに読み込んだり、遠方から目的地までどのように到達すればよいか検討したりするために使います  
- 集落マッピング: どこに人々が住んでいるかの特定や、被害の影響推定にしばしば使われます  
- 建物マッピング: 災害の被災状況の把握やアセスメントに使われます。また、人口推定作業にも利用されます  
- 河川、壁などその他の地物のマッピング  

世界中全ての地域が同じようにマッピングされているというわけではなく、その地域や状況に応じた特殊なタグ付けについての情報提供が行われています。例えばアフリカの道路ネットワークは、アメリカやヨーロッパの道路システムとは全く異なったタグ付けが行われます。  

OpenStreetMapの編集を行い、変更をアップロードする際に、エディタによっては **変更セットコメント** や、あなたが参照した **情報源 (source)** を、適切なフィールドにコピー＆ペーストで入力するよう求められることがあります。  

また、タスクによっては特別に提供された航空写真が利用可能であることがあり、その場合、写真にアクセスするためにライセンスを承諾する必要がある場合があります。マッピング方法解説の箇所に適切な記載が行われていることで、それらのデータをJOSMやiDに読みこませることができます。  

タスクのマッピングに完了マークを付けると、次に検証作業者は、マッピング方法解説で示されている要求事項を満たしたマッピングが行われているかどうかのチェック作業に移ります。また、タスクによっては一度にマッピングを完了させることは難しいかもしれません。その場合、タスクをアンロックすることが可能で、今後作業を行うマッパーに対して有益なメッセージを残すこともできます。  

### アクティビティと活動統計ボタン  

このタブにはプロジェクトの活動統計が表示されます。ページは、アクティビティの一覧（Tasking Manager 2.0の際には独自でタブあり）とサマリーの2つのセクションに分けられています。

このサマリには、プロジェクトに参加し、最低1つ以上のタスクを完了しているマッパーの一覧が表示されます。  

ページの下部には、それぞれのタスクにつけられたコメントの一覧がログとして表示されます。なおこのログはタスクに対するコメントであり、"Questions and Comments"のタブで表示されるプロジェクト全般に関わる質問事項とは異なることに注意してください。

プロジェクトのメインページに戻るには、活動統計ページに表示されているプロジェクトのタイトルをクリックしてください。

### マッピングタブ  

マッピングの準備が整ったらこちらをクリックしてください。地図上の四角形をクリックしてタスクを選択するか、あるいは "タスクをランダム選択" オプションをクリックしてください。選択できるのは色のついていないタスクだけで、もし色のついたタスクを選択した場合エラーメッセージが表示され、マッピングができないことが表示されます。もし検証作業を行う場合は、"検証"タブを選択してください。

![TM map tab][]

#### 地図上でのタスク選択  

タスクの選択を行うとその履歴、例えばマッピングを開始したけれども完了させることができなかったマッパーなどが表示されます。  

**マッピング開始**ボタンをクリックするとタスクがロックされ、自発的にアンロックするか、あるいは2時間 (120分) のカウントダウンタイマーが経過して自動的にアンロックされるまで、他のマッパーがそのタスクを選択できなくなります。作業を行う際には、自分で2時間のタイマーを管理しておくとよいでしょう。作業に没頭してしまうとロック状態を開放するのを忘れてしまい、他のマッパーがその地域をマッピングすることを防いでしまうことがあります。これは時折、データの競合や問題に発展することがあります。  


#### 編集方法の選択

タスクをロックすると、編集で利用する際のオプションが表示されます。

##### JOSMで編集  

このリンクを使う前にJOSMを起動しておき、そのJOSMにOSMデータを自動的に読み込みます。  

> 1. JOSMで 'リモート操作を有効' 機能が有効化されている必要があります - 設定は **編集 / 設定 / リモート制御** にあります。
> 2. 'continuousDownload' プラグインをインストールしている場合、プラグインを無効化したほうがよいでしょう (JOSMメニューの **ファイル** から 'Download OSM Data continuously' を無効化)  
> 3. それでもJOSMが背景画像を自動的に読み込まない場合、**画像**メニューから画像を読み込んでください。 [背景画像に関するより詳しい情報はこちら](/ja/josm/more-about-josm/#add-imagery)  
  

##### iDエディタ  

これを選択すると、自動的にもうひとつブラウザ、あるいはタブが起動し、対象地域のOSMデータが読み込まれます。Internet Explorerは現在のiDエディタではサポートしていないため、Potlatch 2が代わりに起動します。もともとTasking Managerを表示していたタブやウィンドウはそのまま残ります。  


##### Potlatch 2  

このエディタは自動的に別のウィンドウやタブが起動します。Potlatchでは自動的に対象地域の表示が行われませんが、以下の手順を行うことでその動作を補完できます。  

1. Tasking Managerでタスクを選択し、マッピング開始、を選択してロックする  
2. Tasking Managerで、JOSMで編集、を選択します。("JOSMのリモート制御が応答しません"というウィンドウが表示されますが、無視してOKを押してください)  
3. JOSMで編集、のボタンを押した後、"Tip: Download the following .gpx file..."というテキストが表示されます。.gpxファイルをダウンロードし、ファイルとして保存してください。  
4. Tasking Managerで、JOSMで編集、からPotlatch 2で編集、に切り替えてください。Potlatchが別タブで自動的に起動します。  
5. Potlatchで、背景画像、ベクトルファイル、を選択します  
6. ファイル、の隣りにあるベクトルファイルの読み込みウィンドウで、Openをクリックし、先程保存した.gpxファイルを選びます  
7. ベクトルファイルの読み込み画面で.gpxファイルの表示にチェックが入っていることを確認し、ウィンドウを閉じてください  
8. Potlatchで対象の区域の境界線を表示することができます（薄い灰色であることが多いです）。また、範囲外のOSMデータを読み込むことも可能です。  
  

##### Field Papers  

For use only when you are involved in a project where a local mapper has carried out a ground survey and marked a printed map with information such as road names. This map can be rescanned and used as a background image for a remote or local mapper to read the information and update the OpenStreeetMap data [Field papers section of LearnOSM](/en/mobile-mapping/field-papers/).  


#### タスクの分割

タスクを選択して衛星写真をチェックした際に、対象地域で必要な作業が非常に多く、手に余ることがわかる場合があります。例えば都会の密集地域の建物を描く場合や、非常に広い領域から小さな集落を探す場合などです。指針としては、1人の人間が2時間マッピングしても要求事項を描ききれない場合は、タスクを分割し、4つの小さなエリアに分けるようにしてください。 *注意事項* - もしタスクをあまりにも小さく分割してしまうと、その領域に存在する道路の種別が判別しづらくなってしまったり、その他の地物が認識しづらくなってしまうことがあります。  

> タスクを分割する前に投稿されていたコメントは、分割後、表示できなくなります。


#### タスクのアンロック

![TM unlock][]

##### 作業完了せずにタスクをアンロック

もしタスクの作業を開始した後、何らかの理由によって作業を完了できなかった場合は、タスクに対してなにかしらのコメントを残しておくことをお勧めします。何を書き残しているのかを簡潔に記述して **マッピングを中断** してください。コメントの内容は、次のマッパーにとって価値があり、マッピングの役に立つものを書くようにしましょう。  

例:  

    おおむね完了、左上に小さな村落が点在 
    タスクの四角形のなかにまだトレースすべきものがある
  

##### 作業が完了した後にタスクをアンロック

なにをもって完全にタスクを完了とするかは、非常に難しい問題です。ただ、自分が概ね完了した、と感じたら、その時点で完了のマークをつけるのは問題ありません。作業内容は検証作業として他のマッパーによってチェックされ、ごく小さな内容がそこで追加されるはずです。  

作業プロセスを効率よく実施するためにも、完了したと感じた場合は "作業完了" のマークをつけておき、状況をよく把握できていない他のマッパーが確認のために無駄な時間を費やさないようにしましょう。  

作業が完了したと感じた場合、その時点でエディタ内で保存していない作業内容をアップロードし、Tasking Managerに戻ります。  

+ コメントとして実施した作業内容を記載し、さらにより重要なこととして、もし判断しかねた点があればそれを書いておくようにします。例えば "見た限りすべて追加完了しました。ただし、タスクの右上の角に雲がかかっていてその地域はマップできていません" などです。  
+ "作業感呂としてマーク" ボタンをクリックし、レビューを待ちます。  

##### 低品質の航空写真としてマーク

衛星写真の品質が非常に荒い、あるいは雲で覆われているなどの理由で、選択したタスクをマッピングできない場合があります。その場合、エディタの編集画面を閉じて、タスクを "低品質の航空写真" としてマークし、マッピングができないことを記録してください。


#### Sending a message from the comment box

When leaving a comment against a task, you can have the comment sent as a message to a named mapper. Much like Twitter, simply use an @ followed by the username. This will send a message to the user containing the comments from this box, plus a link to the task that the comments box relates to.  

例:  

    @HOTMppr nice work tracing the building  
    details here. You missed a small group  
    of houses on the upper left of the task square,  
    I added a few in, but some still remain.  

This is particularly useful when validating or adding on another's previous work - you can provide feedback, thanks or more.  

+ You may wish to provide a link to a site which may help the mapper, such as <http://learnosm.org/en/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ Be aware that many people from around the world will be participating, so prefer simple, clear language. If you come across comments in other languages, tools such as Google Translate are reasonably effective.


#### Referring to a particular task when sending an email  

If you need to send a message, such as an email or an IRC message, and you are querying something concerning a particular task within a project (perhaps you need help identifying something from the satellite imagery):  

1. Click on the task square concerned  
2. Click on the address bar in your web browser, which should show something similar to 'http://tasks.hotosm.org/project/713?task=259'  
3. Highlight with the mouse all of the text in the address bar, or use the shortcut keys **Ctrl+A** to select all the text, then use shortcut keys **Ctrl+C** to copy the text  
4. In your email, IRC message, or other message,  
    - either, mouse right click & paste,  
    - or shortcut keys **Ctrl+V**, to paste the link into the message. 


## Getting help 

### Live text based help

From the Learn page of the Tasking Manager:  
1. Click on **OSM HOT IRC Channel #hot**  
2. Enter a username (your OSM username?), or use the preset characters  
3. At the bottom of the dropdown list select **hot**  

- To the right of the screen is a list of users that are online now.  
- Type your message in the box at the bottom left of the screen (this is sometimes temporarily obscured by other text, but this will disappear as you select the box.  
- To direct a message to a particular individual, include their username from the list on the right within your message. Type, then use the return key to submit your comment. The system is 'live' so wait for an answer - your username will often be used in the reply to show you the comment is directed to you. You will normally receive a reply within a few seconds, so please wait.  
- An alternative simple system can be found at [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Further info on using IRC with OpenStreetMap may be found at [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Alternatively use an IRC client of your choice (Server=irc.oftc.net, and channel=#hot)  

### Leaving a Project question / comment / contacting the Project creator

Using the "Comments" tab for the project you can see other users' questions and comments and leave one of your own. You can also click the "Contact Project Manager" link and that will automatically direct your comment/question to the project creator. 

All comments are public and it is not real time, live chat, use the IRC option above for realtime chat.

![TM comments][]


## Editing hints and tips  

By now you have a good understanding of what the Tasking Manager is, and some of the various functions it supports. Unlike normal editing, this tool is often used for time critical projects with many participants - this may be a little bit different to what you are used to.  

Some general advice to heed when working in this tool:  

* Avoid mapping far outside of your task square - other mappers may be working in that area, resulting in duplicated efforts. It's OK to map objects such as buildings overlapping a boundary, but avoid going much further - upload immediately after mapping something at the border.  
* Extend roads, streams, or other features slightly over the boundaries - this lets the next mapper pick up where you left off, but upload as soon as you finish editing it.  
* If you are in doubt about what a particular feature is, use the comment section to ask questions or check the wiki.  
* If you make a serious mistake - for example, deleting a major feature or relation - use IRC or the comment box to ask other mappers to help in reverting this for you. Try to include the changeset, or a description of what happened. Being a collaborative task, many other mappers are here to help - it's important to remember everyone makes mistakes sometimes.  
* Don't hesitate to ask for feedback - mappers validating your work can be terse or to the point, but if they know it's OK to engage in a dialog with you, the outcome is often a lot better for all involved. It can be difficult to communicate in another language, and it's easy to appear abrupt when you have to translate as well as pass a message in a language you are not fluent in.  
* You must not validate your own work - a second pair of eyes will always lead to better quality mapping.  
* Don't worry if other mappers are terse when validating your work - like you, they just want to ensure all of the data is mapped accurately. Feedback is invariably about the remaining work, not criticism of your efforts to date.  


## Validation

Validation is the process of a second mapper reviewing the mapping of the initial mapper of a project task. It is designed to ensure complete, quality data and provide thanks, feedback and encouragment to mappers.

### Getting Started

Validation starts much the same way as mapping does, a volunteer finds a project they would like to work on, reads the instructions tab to be sure they understand what is called for and how it is expected to be mapped, but instead of selecting the mapping tab for the project, they select the "Validate" tab.

![TM select for validation][]

The validator can select a task by clicking on an individual task square, clicking "Select a random Task", select by user or draw a polygon to select multiple, connected tasks.

Unlike mappers, validators can select multiple tasks to perform validation on a larger scale than just one task.

### Selecting Multiple Tasks for Validation

New in the latest version of the Tasking Manager is the ability to select multiple tasks for validation, either by area or by user.

Depending on which editor you are using, this feature will behave differently.

In JOSM, a second OSM data layer will be created titled "Task Boundaries - Do Not Edit or Upload" and it will have uploading disabled in recent versions of JOSM. JOSM **will not download the OSM data** because it could be a very large amount of data. Instead the validator will have to use the task boundaries as a guide and download the data to the active editing layer manually.

#### Select by drawing a polygon

This option allows a validtor to draw a square around a group of tasks and check them all out at once.

Once in the editor of their choice, **the validator will have to manually download the OSM data** for task areas selected. This is to prevent downloading all of the OSM data between the selected Tasks.


#### Select By User

A list of mappers who have marked a task as done is presented. Hovering over anyone in the list will highlight the tasks they have marked as completed. The list also prensents three important pices of information about the mapper, their experience level, the number of days since they first started mapping using the Tasking Manager and the number of days since they last received feedback via validation. This allows the validator to specifically target new mappers, experienced mappers or mappers who have not had any feedback for an extended period of time.

Clicking on the "Start Validating" button will lock all the tasks completed by that mapper and allow the validator to open them in their editor of choice.

![TM multi selection][]

Once in the editor of their choice, **the validator will have to manually download the OSM data** for task areas selected. This is to prevent downloading all of the OSM data between the selected tasks.

### Finalizing Validation

Once the validator has finished the validation process either for one task or multiple tasks, they should return to the Tasking Manager and select one of the three choices that reflect the mapping of the task:

- Stop Validating - If you could not complete the validation process but must stop validating.
- Mark (all) as Valid - If the mapping is complete and accurate
- Mark (all) as Invalid - If the mapping is not complete or inaccurate.

For the last two choices the validator can and should leave a friendly, encouraging comment addressed to the mapper(s) involved and provide thanks for their contributions and feedback on their mapping. Please be considerate before marking a task as invalid. If just a few bits are missing add them yourself, explain what was missing in your comment but nevertheless mark the task as valid. New mappers will consider their completed task marked as invalid as a fairly harsh comment.




[TM overview]: /images/coordination/tasking_manager_overview.png
[TM Quick Start 1]: /images/coordination/tasking_manager_qs1.png
[TM Quick Start 2]: /images/coordination/tasking_manager_qs2.png
[TM Quick Start 3]: /images/coordination/tasking_manager_qs3.png
[TM Quick Start 4]: /images/coordination/tasking_manager_qs4.png
[TM Quick Start 5]: /images/coordination/tasking_manager_qs5.png
[TM Quick Start 6]: /images/coordination/tasking_manager_qs6.png
[TM Quick Start 7]: /images/coordination/tasking_manager_qs7.png
[TM Quick Start 8]: /images/coordination/tasking_manager_qs8.png
[TM login 1]: /images/coordination/tasking_manager_login1.png
[TM login 2]: /images/coordination/tasking_manager_login2.png
[TM login 3]: /images/coordination/tasking_manager_login3.png
[TM contribute]: /images/coordination/tasking_manager_contribute.png
[TM map tab]: /images/coordination/tasking_manager_map_tab.png
[TM unlock]: /images/coordination/tasking_manager_unlock_task.png
[TM project map]: /images/coordination/tasking_manager_project_map.png
[TM project description]: /images/coordination/tasking_manager_project_description.png
[TM comments]: /images/coordination/tasking_manager_comments.png
[TM task selection]: /images/coordination/tasking_manager_task_selection.png
[TM select for validation]: /images/coordination/tasking_manager_validation_selection.png
[TM multi selection]: /images/coordination/tasking_manager_multi_selection.png
