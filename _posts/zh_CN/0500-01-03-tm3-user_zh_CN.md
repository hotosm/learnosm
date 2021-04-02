---
layout: doc
title: Tasking Manager 3
permalink: /zh_CN/coordination/tasking-manager3/
lang: zh_CN
category: coordination
导航：跳过
---

# Tasking Manager 3


**如果您使用的版本的用户界面与此处描述的用户界面不同，那么您应该查阅 [我们的版本概述](/zh_CN/coordination/tm-disambiguation)**

章节索引
-------------
-  [快速入门指南](/zh_CN/coordination/tasking-manager3/#quick-start-guide)  
-  [测绘过程](/zh_CN/coordination/tasking-manager3/#mapping-process)  
    -  [用户登录](/zh_CN/coordination/tasking-manager3/#tasking-manager-login)  
    -  [选项 - 语言设置和用户资料](/zh_CN/coordination/tasking-manager3/#options-amp-links)  
    -  [查找项目 - 基于列表并使用地图视图、搜索和过滤](/zh_CN/coordination/tasking-manager3/#finding-a-project---tasking-manager-contribute-screen)  
    -  [测绘任务 - 选择、处理和解锁任务](/zh_CN/coordination/tasking-manager3/#mapping-via-the-tasking-manager) 
-  [获得帮助 - 实时与项目管理员联系](/zh_CN/coordination/tasking-manager3/#getting-help)  
-  [提示和技巧](/zh_CN/coordination/tasking-manager3/#editing-hints-and-tips)
-  [验证](/zh_CN/coordination/tasking-manager3/#validation)

[HOT OSM Tasking Manager](http://tasks.hotosm.org) 是一个协调多人在OpenStreetMap中测绘特定地理区域的工具。

OpenStreetMap 是一个多人协作的免费世界地图。任何人都可以向 OpenStreetMap 做贡献，以绘制世界上任何感兴趣的地方。 Tasking Manager只是一个向多人同时贡献 OpenStreetMap 地图的工具，同时对 OpenStreetMap 的大多数贡献都是由不使用 Tasking Manager的人完成的。

 Tasking Manager 3 是与 OpenStreetMap 主项目完全独立的工具。当你使用 Tasking Manager 3 向 OpenStreetMap 做贡献时，你实际上正在使用多种软件工具：

* OpenStreetMap - 地理信息数据库
*  Tasking Manager - 帮助协调在同一区域编辑OpenStreetMap数据的人员
* OpenStreetMap编辑器 - 将数据读取和写入OpenStreetMap数据库的软件

![TM overview][]

 Tasking Manager 3 的作用是将一个特定的地理区域分为多个称为 “Tasks” 的小区域，并在使用标准 OpenStreetMap 编辑器绘制时提供一种方法来 “检出（checkout）” 或 “锁定（lock）” 这些小区域之一。通过 “检出（checkout）” 或 “锁定（lock）” 其中一个小区域，你可以帮助确保没有其他人在同一区域进行绘制。当两个人在 OpenStreetMap 中完全相同的区域工作时，这有助于防止 “重复绘制” 或其他错误。

完成对该小区域的绘制后，您可以在Tasking Manager中记录您已完成该小区域的绘制，然后选择另一个 “任务（Task）” 进行绘制。


## 快速入门指南

1.如果您没有 OpenStreetMap 帐户，请转到 https://openstreetmap.org 并创建一个帐户。这将是您用来登录Tasking Manager的登录详细信息。<br/>
  ![TM Quick Start 1][]
2.访问 [http://tasks.hotosm.org/](http://tasks.hotosm.org/) 并通过右上角登录  
  ![TM Quick Start 2][]
  > 在开始绘制之前，您必须在个人资料中提供有效的电子邮件地址（可通过右上角菜单中的第一个条目访问）。
3.点击 “贡献” 并找到要处理的地图项目  
  ![TM Quick Start 3][]
4.阅读该项目的说明  
  ![TM Quick Start 4][]
5.点击 “地图” 选项栏  
  ![TM Quick Start 5][]
6.找到要处理的 “就绪（Ready）” 任务，点击它并选择 “开始测绘（Start Mapping）”  
  ![TM Quick Start 6][]
7.您将切换到 OpenStreetMap 编辑器，测绘说明中要求的所有功能。  
  ![TM Quick Start 7][]
8.完成测绘后，切换回Tasking Manager，然后单击 “标记为完成测绘（Mark as Completely Mapped）”（如果已完成），如果您只是出于某种原因需要停止测绘，则单击 “停止测绘（Stop Mapping）”。  
  ![TM Quick Start 8][]


## 测绘过程 

1.远程测绘人员在 OpenStreetMap 中创建一个帐户并登录Taskiing Manager 3。
1.测绘人员通常根据 Tasking Manager 项目经理设置的优先级和技能级别来查找要处理的项目。 
2.远程测绘人员选择任务方形，完成测绘，然后将任务标记为完成。
3.第二个远程测绘人员检查任务是否已完成到令人满意的水平，并将任务标记为 “已验证（validated）”
4.可以从项目的 “统计” 选项卡中监控项目测绘的进度，并且可以根据管理员的要求降级或归档项目。

### Tasking Manager 3 登录

Tasking Manager是一个单独的工具，用于协调 OpenStreetMap 中的测绘工作。但是，它利用了 OpenStreetMap 登录系统。这意味着您不需要创建单独的用户帐户即可使用任务管理器，但在使用任务管理器进行测绘之前，您确实需要创建 OpenStreetMap 帐户并登录 OpenStreetMap。

当你第一次访问Tasking Manager时，屏幕右上角会看到 “登录（Login）” 按钮。

![TM login 1][]

点击该按钮将带你进入 OpenStreetMap 网站。在那里，你必须登录并授予任务管理器对 OpenStreetMap 首选项的访问权限。如果您还没有帐户，请在 OpenStreetMap 网站上创建帐户。

![TM login 2][]

![TM login 3][]

登录 OpenStreetMap 后，您将返回到任务管理器。现在是将您的电子邮件地址添加到个人资料的时候了。点击右上角的用户名以打开菜单，然后选择第一个条目 “您的个人资料”。您可以使用表格右上角的相应按钮编辑联系人详细信息。Tasking Manager 允许发送消息，因此需要先提供有效的电子邮件地址，然后才能开始测绘。

单击贡献或入门将带您进入可以参与的项目列表。

### 选项和链接

Tasking Manager最初以英语显示-要更改为另一种语言，请单击窗口右上角的 **英语**。

登录后，您可以点击顶部的用户名。在这里你可以：

-查看您的Tasking Manager个人资料，您可以在其中：
    -更新您的电子邮件地址和社交媒体账户
    -查看你的测绘经验级别
    -查看你参与的项目的列表和地图
- 转到Tasking Manager中的 **消息** 屏幕（这与 OpenStreetMap 消息系统不同）
-注销

### 查找项目- Tasking Manager 3 贡献屏幕

单击主菜单栏中的 “贡献” 链接将带您进入Tasking Manager 中的项目主列表。

![TM contribute][]

Tasking Manager 贡献屏幕分为三个主要区域：

-左边的搜索和筛选选项
-项目列表
-项目列表的地图视图

#### 搜索和筛选选项

默认情况下，将显示所有可用于测绘的项目。您可以使用屏幕的 “高级搜索” 筛选器部分进一步缩小要处理的项目范围。

-项目编号-如果你知道要处理的项目编号，你可以在这里输入它并直接进入它。
-组织-这允许您只显示单个组织请求的项目。
-测绘困难度 - 有些项目比其他项目更难绘制。使用此选项，您可以找到最适合您的体验水平的项目。我们鼓励您处理最符合自己体验水平的项目，尤其是如果您是经验丰富的测绘人员。
-测绘类型- 这允许您查找包含要测绘的特定类型功能的项目。许多项目只关注一种类型的测绘，但项目可能包含多种类型的要素进行测绘。
-全文搜索-这允许您搜索项目描述中可能包含某个词或短语的项目。
-大型任务活动标签-项目可以有其他标签，表示较大的测绘活动项目是其中的一部分，您可以通过将这些标签输入到此字段中找到项目。

#### 地图视图
点击 “地图视图” 选项卡将显示一个地区中的项目数量。双击或放大将显示各个项目。放大后，地图上的点将进行颜色编码，红色是紧急的，黄色为高或中优先级，灰色为低优先级。单击地图上的任何点都将显示有关该项目的信息。点击项目标题将带您进入该项目。

![TM project map][]

### 通过Tasking Manager 3进行测绘

找到要处理的项目后，点击项目标题将带您进入该项目的详细条目。此详细视图包含：

-描述项目的重要性以及如何使用数据
-关于测绘工作的详细说明
-用于测绘工作审核的选择屏幕
-各个测绘任务区域的详细地图，以及有关其状态的信息。
-关于项目的问题或评论选项卡

![TM project description][]



#### 项目页

你需要了解的关于该项目的一切都在这里！顶部是测绘项目的完整描述以及有关该项目的信息。  

在描述下方，屏幕分为左侧和右侧部分。左侧部分是一个选项卡式面板，其中包含 “说明”、“地图”、“验证” 和 “问题和评论” 的选项卡。右侧是项目的地图以及要绘制的各项任务。

-未着色的任务已准备就绪并可以进行测绘
-粉红色的网格方块已被验证器宣布审核未通过，再次可用于测绘
-地图上的红色区域表示优先级较高的区域
-黄/金网格方块已完成第一次测绘并准备好进行验证
-蓝色任务目前正在进行
-深蓝色边框表示你选择的任务
- 绿色任务已完成第二次绘制，测绘工作已 “被审核”
-深灰色的任务已被测绘人员查看，标记为没有可接受的测绘影像 


#### 说明选项卡
这显示了测绘任务中所需的内容。项目存在难度范围，适合初学者、中级和高级测绘人员-这些说明将解释这一点。确保你阅读并理解本节。测绘项目有许多风格，用于许多不同的目的。一些常见的项目活动包括：  

- 道路网络：由地面人员用来将数据加载到手持导航工具中，并确定如何访问偏远地区  
- 测绘村庄：通常用于确定人们居住和可能受到影响的地方  
- 建筑物测绘：用于损害评估或追踪疾病的接触者。也用于人口估计。  
- 测绘河流、墙壁和其他特征  

并非世界上所有地区都与您自己的地区相似，因此可能会提供具体的标记建议。例如，非洲的道路网络与典型的美国或欧洲公路系统截然不同。  

在上传/保存更改时，你应确保在编辑程序中显示 **变更集注释**，以及在进行更改时可能需要复制和粘贴到源字段的 **来源** 信息（取决于你的编辑软件）。  

有时，可能会提供特定于任务的图像-你可能需要同意授权协议才能访问它。说明通常会指示最简单的方法来将其加载到编辑器（如 JOSM 或 ID）。  

检查标记为完成的任务时，审核人员会期望说明（instructions）选项栏中的要求都已完成。您可能会发现完成整个任务非常困难 - 下面提供了解锁任务的指导；以及为下一个测绘人员提供有用的反馈。  

#### 活动和统计按钮  

此选项栏包含有关项目的统计信息。它分为两个部分，活动的详细列表（以前在Tasking Manager 2.0中是其自己的选项栏）和概要部分。

概要包含项目中至少完成一项任务的测绘人员的列表。  

在页面的底部有一个关于单个任务的所有评论的日志。这些是对任务的评论，不应与“问题和评论”选项栏混淆，后者是关于整个项目的一般问题和评论。

您可以通过点击活动和统计页面上的项目标题返回项目贡献主页面。

#### 地图栏  

当你准备好开始测绘，请点击。你可以从地图中选择一个单独的任务，或单击 "随机执行任务 "选项来进行工作。在此选项栏中只能选择未着色的任务，否则你将收到一条消息，称该任务不能被测绘。如果你打算进行验证，请确保选择 "验证 "选项卡。

![TM map tab][]

#### 选择要测绘的任务  

选择任务后，您将能够看到这个任务是否有任何历史记录，例如测绘人员开始测绘，但意识到他们没有时间完成任务。  

点击 **开始测绘** 按钮会锁定任务，这样其他测绘人员在任务再次释放之前不能选择它，并启动 2 小时（120 分钟）倒计时器，在倒计时器结束时任务将自动释放。定期检查倒计时器是很好的做法 - 很容易全神贯注与测绘中，而不是意识到你的任务已经被释放，现在已经被另一个测绘人员进行测绘了。这可能导致冲突和问题。  


### 编辑选择

锁定任务后，会立即显示不同的编辑选项。

#### 使用 JOSM 编辑  

在使用此链接之前启动 JOSM，它会自动将现有的 OSM 数据加载到 JOSM 中。  

> 1.需要勾选 “开启远程控制”-在 **编辑/偏好设置/远程控制** 下
> 2.如果您之前安装过插件 “ContinosDownload”，最好将其禁用（在 JOSM 中的 **文件** 菜单下取消选中 “持续下载 OSM 数据”）。  
> 3.如果JOSM没有自动加载图像，通常可以在 **Imagery** 菜单下找到图像。 [关于图像的更多信息在这里](/zh_CN/josm/more-about-josm/#add-imagery)  
  

##### iD编辑器  

选择此选项可自动启动 Web 浏览器的新选项卡或窗口，并加载现有 OSM 数据。Internet Explorer Web 浏览器目前不支持 ID而作为替换它将加载 Potlatch 2。带有任务管理器的原始选项卡或窗口仍然存在。  


##### Potlatch 2  

编辑器将在新窗口或标签栏中加载。Potlatch 不会自动显示任务边界框，但是你可以按照以下步骤进行操作：  

1.在Tasking Manager中，选择一个任务，然后点击“开始测绘”将其锁定  
2.在 “Tasking Manager” 中，选择 “使用 JOSM 编辑”（如果窗口显示 “JOSM 远程控制没有响应...”，只需单击 “OK”）。  
3.在使用 JOSM 编辑按钮下方，文本会显示 “提示：下载以下 .gpx 文件...”。下载 .gpx 文件，然后记下它的保存位置。  
4.在Tasking Manager中，从使用 JOSM 编辑更改为使用 Potlatch 2 编辑。Potlatch 应该在新标签页中打开。  
5.在 Potlatch 中，选择背景，然后选择矢量文件...  
6.在加载矢量文件窗口中，在文件旁边的底部，单击打开，然后导航到刚下载的 .gpx 文件  
7.在加载矢量文件窗口中，确保 .gpx 文件的 “显示” 列中选中该选框，然后关闭窗口  
8.Potlatch 现在应该将边界显示为方形（可能是青色）。请注意，Potlatch 仍会在边界之外加载数据。  
  

##### Field Papers  

在你参与的项目由当地测绘人员进行了地面勘测并使用道路名称等信息标记打印的地图后，你才能使用。该地图可以被重新扫描并用作背景图像，供远程或本地测绘人员阅读信息并更新OpenStreeetMap数据[Field papers section of LearnOSM](/zh_CN/mobile-mapping/field-papers/)。  


#### 拆分任务方块

选择任务并在图像就位的情况下对其进行检查后，你可能会意识到测绘所需的细节太多。这方面的一个例子可能是追踪密集的城市地区的建筑物，或者在大面积地区找到小村庄。如指引所说，如果一个人无法在 2 小时内完成，你通常可以将任务分成 4 个较小的区域。*使用时请注意* - 如果方形分割的太小，会很难判断所涉及的公路类型以及识别其它的特征。  

> 请注意，关于先前已完成工作的其它有用评论将不再可用。


#### 解锁任务

![TM unlock][]

##### 在任务完成之前解锁

如果你开始在一个任务上工作，但由于某种原因无法完成它，最佳做法是对任务发表评论。只需详细说明剩下的内容，然后选择 **停止绘图**。确保你的评论是相关的，旨在帮助下一个测绘人员。  

例如：  

    几乎完成，左上方的小村庄 
    在任务方块上有迹可循
  

##### 解锁完成测绘的任务

很难完全确定你已经完成了一个任务 - 但是如果你相当确定的话，可以将任务标记为完成 - 内容将由另一个测绘人员进行审核，同时也可以补充细节。  

为使工作流程最有效，测绘人员需要将任务标记为“已测绘”，而不是将它们留给其他几个 “不确定” 的测绘人员来花时间同时检查它们。  

当你完成编辑并认为任务已完成后，使用编辑程序保存所有剩余的编辑内容，然后返回Tasking Manager。  

+ 在框中添加评论并详细说明您所取得的成就，更重要的是，同时也记录下您不确定的是什么。例如：“我已经完成了我所看到的，但任务的右上角有云，我看不到这个区域的轨迹”。  
+ 点击 “标记为已完全测绘” 按钮后，你的工作就已准备好被审核了。  

##### 将任务标记为不良影像

你有时会选择一个由于影像分辨率低或有云层覆盖而无法绘制的任务。只需在编辑器中关闭该任务，然后使用 "标记为不良影像 "按钮记录该任务因影像质量差而无法绘制。


#### 从评论框中发送消息

对任务留下评论时，你可以将评论作为消息发送给指定的测绘人员。与Twitter一样，只需使用@后跟用户名。这将向用户发送一条消息，其中包含来自此框的评论，以及指向与该评论相关的任务的链接。  

例如：  

    @HOTMppr 追踪建筑物的出色工作  
    详细信息在这里。你遗漏了一个小组  
    在任务方形左上角的房子，  
    我添加了一些，但仍然存在。  

这在验证或添加他人之前的工作时特别有用-您可以提供反馈，谢谢或更多。  

+ 你可能希望提供一个可能对测绘人员有帮助的网站的链接，例如 <http://learnosm.org/zh_CN/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ 请注意，来自世界各地的许多人都会参加，所以更喜欢简单、清晰的语言。如果您遇到其他语言的评论，可以用谷歌翻译等有效的工具。


#### 发送电子邮件时提及特定的任务  

如果你需要发送消息，例如电子邮件或IRC消息，并且你正在查询与项目中特定任务有关的内容（也许你需要帮助从卫星影像中识别某些内容）：  

1.点击相关的方任务  
2. 点击 Web 浏览器中的地址栏，该地址栏应显示类似于 'http://tasks.hotosm.org/project/713?task=259'  
3. 将此链接复制到消息中。 


## 获得帮助 

### 电子邮件

对于可能需要稍微研究一下才能回答的问题，或者需要更详细解释的问题，通常最好的渠道是发送邮件到mapper-support@hotosm.org

### 实时文本帮助

1. 在slack.hotosm.org注册。这将需要填写一份表格，可能需要一段时间才能被接受。
2. 加入mapper-support频道

### 留下项目问题/评论/联系项目创建者

使用项目的"评论"标签栏，你可以看到其他用户的问题和评论，并留下你自己的问题和评论。你也可以点击"联系项目经理"链接，这将会自动将你的评论/问题引导到项目创建者。 

所有的评论都是公开的，这不是即时聊天。如果你需要立即关注，请使用上面的Slack选项。

![TM comments][]


## 编辑提示和技巧  

到目前为止，您已经很好地了解Tasking Manager是什么，以及它支持的一些各种功能。与普通编辑不同，此工具通常用于有许多参与者的时间紧迫的项目-这可能与您习惯有些不同。  

一些使用此工具时应注意的一般建议：  

* 避免在你的任务方格之外进行测绘 - 其他测绘人员可能正在该区域工作，从而导致重复工作。绘制与边界重叠的建筑物等对象是可以的，但要避免做得更远 - 在绘制边界上的东西后立即上传。  
* 将道路、溪流或其他特征稍微延伸到边界上-这样，下一个测绘人员就可以在您离开的位置选择，但在完成编辑后立即上传。  
* 如果您对特定功能是什么有疑问，请使用评论部分提出问题或查看 wiki。  
* 如果您犯了严重错误（例如，删除主要特征或关系），请使用 IRC 或评论框要求其他测绘人员帮助您恢复此错误。尝试包含变更集或对发生情况的描述。作为一项协作任务，许多其他测绘人员都在这里提供帮助-重要的是要记住每个人有时会犯错误。  
* 不要犹豫地询问反馈-验证你的工作的测绘人员可能很仅简短留言，但是如果他们知道与你可以进行对话，那么对所有参与者来说会好得多。用另一种语言进行交流可能很困难，当你必须翻译以及用不流利的语言传递信息时，很容易表达方式毕竟突兀。  
* 你不能审核自己的工作 - 第二只眼睛总是会保证更好的测绘质量。  
* 在其他测绘人员审核您的工作时，不要担心他们留言语气和风格，像您一样，他们只想确保所有数据都能准确。他们的反馈是关于剩余工作而不是对你迄今所做努力的批评。  


## 审核

审核是指第二位测绘人员审查项目任务初始制图员的制图过程。其目的是确保数据的完整性和质量，并向测绘人员提供感谢、反馈和鼓励。

### 入门

审核的开始方式和测绘的方式很相似，志愿者找到一个他们想做的项目，阅读说明选项栏，以确保他们了解项目的要求和预期的绘制方式，但他们没有选择项目的绘制选项栏，而是选择“审核”选项栏。

![TM select for validation][]

审核者可以通过点击单个任务方格来选择任务，点击“随机选择任务”，按用户选择或绘制多边形来选择多个、连接的任务。

与测绘人员不同，审核者可以选择多个任务来进行更大规模的审核，而不仅仅是一个任务。

### 选择多个任务进行审核

在最新版本的Tasking Manager中，新增了按区域或按用户选择多个任务进行核实的功能。

根据你使用的编辑器不同，这个功能会有不同的表现。

在JOSM中，将创建第二个OSM数据层，标题为 "任务边界--不要编辑或上传"，在JOSM的最新版本中，它将禁用上传。JOSM **不会下载OSM数据**，因为它可能是一个非常大的数据量。相反，审核者将不得不使用任务边界作为指导，并将数据手动下载到活动编辑层。

#### 通过绘制一个多边形来选择

这个选项允许审核者在一组任务周围画一个正方形，并一次性选出所有任务。

一旦进入自己选择的编辑器，**验证者将不得不手动下载所选任务区的OSM数据**。这是为了防止在选定的任务之间下载所有的OSM数据。


#### 按用户选择

显示已将任务标记为已完成的测绘人员的列表。将鼠标悬停在列表中的任何一个人身上，都会突出显示他们已标记为完成的任务。该列表还提供了关于测绘人员的三个重要信息，他们的经验水平，他们第一次使用Tasking Manager开始绘图以来的天数，以及他们最后一次通过审核收到反馈以来的天数。这使得审核者可以专门针对新的测绘人员、有经验的测绘人员或长时间没有任何反馈的测绘人员。

点击“开始验证”按钮，将锁定该测绘人员完成的所有任务，并允许审核者在其选择的编辑器中打开它们。

![TM multi selection][]

一旦进入自己选择的编辑器，**验证者将不得不手动下载所选任务区的OSM数据**。这是为了防止在选定的任务之间下载所有的OSM数据。

### 最终审核

当审核者完成一个任务或多个任务的审核过程后，应返回Tasking Manager，在三个选项中选择一个反映测绘任务的选项：

- 停止审核 - 如果你无法完成审核过程，必须停止审核。
- 标记(全部)为有效 - 如果测绘完整、准确，则标记为有效。
- 标记(全部)为无效 - 如果测绘不完整、准确，则标记为无效。

对于最后两项选择，审核者可以也应该向有关测绘人员留下友好的鼓励性评论，并对他们的贡献和对绘图的反馈表示感谢。在将一个任务标记为无效之前，请考虑清楚。如果只是少了一些，请自己添加，并在评论中解释少了什么，但仍然要将任务标记为有效。新的测绘人员会认为他们完成的任务被标记为无效是一个相当苛刻的评论。




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
