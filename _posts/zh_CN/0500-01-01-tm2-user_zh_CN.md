---
layout: doc
title: Tasking Manager 2
permalink: /zh_CN/coordination/tasking-manager/
lang: zh_CN
category: coordination
navigation: skip
---

# Tasking Manager 2

> 已审核 2015-08-26  

** 如果您使用的版本的用户界面与此处描述的用户界面不同，那么您应该查阅 [版本概述](/zh_CN/coordination/tm-disambiguation)**

章节索引
-------------
-[如何在HOT(Humanitarian OpenStreetMap Team)中使用Tasking Manager的概述](/zh_CN/coordination/tasking-manager/#overview-of-the-process)  
-[语言、选项、帮助链接和其他链接。您的用户页面 - 您协助的项目列表和消息](/zh_CN/coordination/tasking-manager/#options-amp-links)  
-  [用户登录](/zh_CN/coordination/tasking-manager/#getting-started-with-the-tasking-manager)  
-  [查找项目](/zh_CN/coordination/tasking-manager/#locating-a-project)  
-[描述、地图网格、说明、贡献、活动、项目的统计数据](/zh_CN/coordination/tasking-manager/#description)  
-[在地图中选择一个方形、设置计时器、释放](/zh_CN/coordination/tasking-manager/#selecting-a-square-to-map)  
-  [JOSM, iD, Potlatch 2, Field Papers, Walking Papers](/zh_CN/coordination/tasking-manager/#editing-choices)  
-  [分裂一个方形](/zh_CN/coordination/tasking-manager/#splitting-a-square)  
-  [在完成全部绘制前解锁方形](/zh_CN/coordination/tasking-manager/#unlocking-a-square-before-it-is-complete)  
-  [标记你的方形为完成状态](/zh_CN/coordination/tasking-manager/#finishing-a-square)  
-  [发送信息](/zh_CN/coordination/tasking-manager/#sending-a-message-from-the-comment-box)  
-  [在邮件或者消息中鉴别方形](/zh_CN/coordination/tasking-manager/#referring-to-a-particular-square-when-sending-an-email)  
-  [在线帮助 - IRC, Internet Relay Chat](/zh_CN/coordination/tasking-manager/#getting-live-help)  
-  [常见问题提示](/zh_CN/coordination/tasking-manager/#editing-hints-and-tips)


The HOT Tasking Manager, <http://tasks.hotosm.org/> 是一个直观的工具，测绘人员可以使用它将区域分类为网格，并协同工作以有组织的路径绘制地图。这使得世界各地的绘图者能够协助绘制工作区域重叠风险最小的已定义区域的绘图，还允许在地面和远程工作的人员（有时也称为 “armchair mappers”）有效、快速地协作，避免意外返工由于冲突而需要。  


## 流程概述

1.管理员在OpenStreetMap中选择需要更新的区域。管理员确保有合适的卫星影像可供测绘人员追踪，并创建覆盖该区域的项目。项目中指定了所需的详细程度和紧急程度，以及测绘人员需要的任何其他信息。如果满意，管理员会在任务管理器中发布项目，但如果需要，他们也可以稍后进行更改。  
2.远程测绘人员选择任务方形，完成测绘，然后将正方形标记为完成。  
3.第二个远程测绘人员是否已完成到令人满意的水平，并将该方块标记为 “已验证”  
4.可以从项目的 “统计” 选项栏中监控测绘的进度，并且可以根据管理员的要求降级或归档项目。  


## 选项和链接

The Task Manager最初以英语显示-要更改为另一种语言，请单击红色标题横幅中的 ** 英语 **。  

有关 Tasking Manager、HOT 赞助商、合作伙伴和帮助的信息，请单击页面顶部的 ** 关于 **。

登录后，您可以点击顶部的用户名。在这里你可以：  

-访问已完成方形的项目列表，  
-转到Tasking Manager中的 ** 消息 ** 屏幕（这与 OpenStreetMap 消息系统不同）  
-注销  
-查看在Tasking Manager中贡献完成方块的所有用户的列表。您可以访问链接以查看有关所选用户的更多信息，例如他们完成了哪些任务以及 OSM 编辑历史记录。  

![Tasking Manager Username_list][]  


## Tasking Manager入门

您可以作为访客查看项目，但要积极参与，您必须登录Tasking Manager-使用您的 OpenStreetMap 帐户用户名和密码。打开互联网浏览器并转到 <http://tasks.hotosm.org>。你会看到这样的页面：  

![Tasking Manager Login][]

-点击 “登录 OpenStreetMap”  
-您同意允许此应用程序访问您的 OpenStreetMap 帐户。点击 “保存更改”。  

![Authorizing access to OSM account by the Tasking Manager][]


## 定位一个项目

当前的项目列表可能会根据以下内容进行排序：  

-高度优先  
-创建日期，或  
-上次更新  

您可以通过单击 ** 您的项目 ** 框进一步细化列表，以仅查看您参与的项目，无论您是否已完成方形。审核人们还可以通过使用此复选框找到他们在其中贡献了经过验证的方块的项目。您可以使用自由文本搜索来查找包含特定文本字符串的项目，例如 **Ebola**（搜索不区分大小写）。  

项目经常被项目编号引用，例如 [**#711 - Ebola Outbreak, Kayes, Mali - Pre-emptive building mapping**](http://tasks.hotosm.org/project/711)，在这种情况下，您可以在 #711 上搜索找到此项目。  

点击蓝色项目标题可查看有关该项目的更多信息。  

![Job description][]


## 描述

你需要了解的关于该项目的一切都在这里！左侧是测绘项目的描述以及所需内容。右侧是一个显示要绘制的区域的网格;  

-通常在项目周边方块中可见的 Mauve 线表示项目的边界。此边框通常遵循可用影像，因此可能会出现不寻常的形状。尽管测绘可能在此边界以外完成，但这不是必需的，也不会被审阅人员考虑。  
-地图上的粉红色区域表示优先级较高的区域，  
-黄色网格方形已经完成，  
-黄色边框表示目前正在进行绘制方形工作，  
-绿色方块已经完成并被 “审核”，以及  
-剩下的方形仍然需要完成，或者之前已经失效（无效的方形是较暗的颜色）。  


### 使用说明栏
这显示了测绘任务中所需的内容。Tasks难度范围很广，适合初学者、中级和高级测绘人员-这些说明将解释这一点。确保你阅读并理解本节。测绘项目有许多风格，用于许多不同的目的。一些常见的项目活动包括：  

-道路网络：由地面人员用来将数据加载到手持导航工具中，并确定如何访问偏远地区  
-测绘村庄：通常用于确定人们居住和可能受到影响的地方  
-建筑物测绘：用于损害评估或追踪疾病的接触者。也用于人口估计。  
-绘制河流、墙壁和其他特征  

并非世界上所有地区都与您自己的地区相似，因此可能会提供具体的标记建议。例如，非洲的道路网络与典型的美国或欧洲公路系统截然不同。  

在上传/保存更改时，你应确保在编辑程序中显示 ** Changeset 注释 **，以及在进行更改时可能需要复制和粘贴到源字段的 ** 来源 ** 信息（取决于你的编辑软件）。  

有时，可能会提供特定于任务的图像-您可能需要同意授权协议才能访问它。说明通常会指示最简单的路径来将其加载到编辑器（如 JOSM 或 ID）。  

检查标记为完成的方形时，审核人员会期望instructions选项栏中的要求都已完成。您可能会发现完成整个tile相当困难-下面提供了有关解tiles的指导；以及为下一个测绘人员提供有用的反馈。  


### “活动” 选项栏  

这将按时间顺序显示任务内发生的活动。  


### “统计” 选项栏  

这包含进度图表和其他信息。  

“统计” 选项栏还包含在项目中至少完成一个方形的测绘人员列表-要查看他们已经完成了哪些方格，你可以 * 将鼠标光标 * 悬停在用户名上，他们完成的方格将成为唯一可见的方格（** 使用它来定位你拥有的方块之前已完成 **)。  

通过将鼠标悬停在用户名上方来定位方形后，您可以点击方块以查看测绘人员和审核人员为方形留下的评论，这是获取审核人员反馈的有用方法。  


### 贡献栏  

开始点击当你已准备好测绘。您可以通过从地图中选择方形后点击 “随机执行任务” 选项来选择要处理的方形。  

![Picking a task][]  


## 选择要测绘的方形  

![Assigned task square][]  

选择正方形后，您将能够看到这个方形是否有任何历史记录，例如测绘人员开始绘制，但意识到他们没有时间完成方形。  

如果你不小心选择了一个正方形，你可以通过点击上面屏幕截图所示的蓝色关闭控件-**x** 来释放它。  

点击 ** 开始测绘 ** 按钮会锁定方形，这样其他映射器在再次释放之前不能选择它，并启动 2 小时（120 分钟）倒计时器，在此时间结束时方形将自动释放。定期检查倒计时器是很好的做法-很容易被投入到你的地图中，而不是意识到你的方形已经被释放，现在已经被另一个测绘人员开始测绘了。这可能导致冲突和问题。  


### 编辑选择

锁定方形后，会立即向您显示不同的编辑选项。

![Editing options][]  


#### 使用 JOSM 编辑  

在使用此链接之前启动 JOSM，它会自动将现有的 OSM 数据加载到 JOSM 中。  

> 1.需要勾选 “开启远程控制”-在 ** 编辑/偏好设置/远程控制 ** 下
> 2.如果您之前安装过插件 “ContinosDownload”，最好将其禁用（在 JOSM 中的 ** 文件 ** 菜单下取消选中 “持续下载 OSM 数据”）。  
> 3。如果 JOSM 也没有自动加载图像，通常可以在 ** Imagery** 菜单下找到图像。[关于图像的更多信息在这里](/zh_CN/josm/more-about-josm/#add-imagery)  


#### iD编辑器  

选择此选项可自动启动 Web 浏览器的新选项栏或窗口，并加载现有 OSM 数据。Internet Explorer Web 浏览器目前不支持 iD而作为替代它将加载 Potlatch 2。带有任务管理器的原始选项卡或窗口仍然存在。  


#### Potlatch 2  

编辑器将在新窗口或标签栏中加载。Potlatch 不会自动显示任务边界框，但是您可以按照以下步骤进行操作：  

1.在Tasking Manager中，选择一个方形，然后点击“开始测绘”将其锁定  
2.在 “Tasking Manager” 中，选择 “使用 JOSM 编辑”（如果窗口显示 “JOSM 远程控制没有响应...”，只需单击 “OK”）。  
3.在使用 JOSM 编辑按钮下方，文本会显示 “提示：下载以下 .gpx 文件...”。下载 .gpx 文件，然后记下它的保存位置。  
4.在Tasking Manager中，从使用 JOSM 编辑更改为使用 Potlatch 2 编辑。Potlatch 应该在新标签页中打开。  
5.在 Potlatch 中，选择背景，然后选择矢量文件...  
6.在加载矢量文件窗口中，在文件旁边的底部，单击打开，然后导航到刚下载的 .gpx 文件  
7.在加载矢量文件窗口中，确保 .gpx 文件的 “显示” 列中选中该选框，然后关闭窗口  
8.Potlatch 现在应该将边界显示为方形（可能是青色）。请注意，Potlatch 仍会在边界之外加载数据。  


#### Walking Papers / Field Papers  

在你参与的项目由当地当绘图员已经进行了地面勘测并使用道路名称等信息标记了打印的地图后，你才能使用。该地图可以被重新扫描并用作背景图像，供远程或本地测绘人员阅读信息并更新 OpenStreeetMap数据[LearnOSM的Field papers部分](/zh_CN/mobile-mapping/field-papers/)。  


### 拆分一个方形  

选择方形并在图像就位的情况下对其进行了检查后，您可能会意识到测绘所需的细节太多。这方面的一个例子可能是追踪密集的城市地区的建筑物，或者在大面积地区找到小村庄。如指引所说，如果一个人无法在 2 小时内完成，您通常可以将任务分成 4 个较小的区域。* 使用时请注意 *-如果方形分割的太小，会很难判断所涉及的公路类型以及识别其它的特征。  

> 请注意，关于先前已完成工作的其它有用评论将不再可用。


### 解锁未完成的方形

如果你开始在一个方形上工作，但由于某种原因无法完成它，最佳做法是对方形发表评论。只需详细说明剩下的内容，然后选择 ** 解锁 **。确保你的评论是相关的，旨在帮助下一个测绘人员。  

例如：  

    几乎完成，左上方的小村庄 
    在方块上有迹可循


### 完成一个方形

很难完全确定你已经完成了一个方形-但是如果你相当确定的话，可以将方形标记为完成-内容将由另一个测绘人员进行审核，同时也可以补充细节。  

为使工作流程最有效，测绘人员需要将方形标记为完成，而不是将它们留给其他几个 “不确定” 的测绘人员来花时间同时检查它们。  

当你完成编辑并认为方形已完成后，使用编辑程序保存所有剩余的编辑内容，然后返回Tasking Manager。  

+ 在框中添加评论并详细说明您所取得的成就，更重要的是，同时也记录下您不确定的是什么。例如：“根据我所见，已完成，但广场右上角有云，我看不到这个区域路径”。  
+ 点击 “将任务标记为完成” 按钮后，您的工作就已准备好被审核了。  


### 从评论框中发送消息

对方形发表评论时，您可以将评论作为消息发送给指定的测绘人员。就像 Twitter 一样，只需使用 @ 后跟用户名即可。这将向用户发送一条消息，其中包含此框中的评论，以及指向评论框所涉方形的链接。  

例如：  

    @Tallguy 追踪建筑物的出色工作  
    详细信息在这里。你遗漏了一个小组  
    切片左上角的房子，  
    我添加了一些，但仍然存在。  

这在验证或添加他人之前的工作时特别有用-您可以提供反馈，谢谢或更多。  

+ 你可能希望提供一个可能对测绘人员有帮助的网站的链接，例如 <http://learnosm.org/zh_CN/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ 请注意，来自世界各地的许多人都会参加，所以更喜欢简单、清晰的语言。如果您遇到其他语言的评论，可以用谷歌翻译等有效的工具。


### 当发送电子邮件时指的是特定的方形  

如果你需要发送消息，例如电子邮件或IRC消息，并且你正在查询与项目中特定任务有关的内容（也许你需要帮助从卫星影像中识别某些内容）：  

1.点击相关的方形  
2.点击 Web 浏览器中的地址栏，该地址栏应显示类似于 'http://tasks.hotosm.org/project/713#task/259'  
3.用鼠标高亮选中地址栏中的所有文本，或使用快捷键 **Ctrl+A** 选择所有文本，然后使用快捷键 **Ctrl+C** 复制文本  
4.在您的电子邮件、IRC 消息或其他消息中，  
    -或者，鼠标右键单击并粘贴，  
    -或快捷键 **Ctrl+V**，将链接粘贴到消息中。 


### 获得实时帮助 

![IRC_help][] 

来自Tasking Manager；  
点击**OSM HOT IRC Channel #hot**  
2.输入用户名（你的 OSM 用户名？），或者使用预设字符  
3.在下拉列表的底部选择 ** Hot**  

![IRC using][]  

-屏幕右侧是现在在线的用户列表。  
-在屏幕左下角的框中键入您的消息（这有时会暂时被其他文本遮盖，但是当您选择该框时，这将消失。  
-要将消息发送给特定个人，请在邮件右侧列表中包含他们的用户名。键入评论内容然后使用返回键提交评论。系统是 “实时”当所以等待答案-您的用户名通常会在回复中使用，以向您显示评论是针对您的。您通常会在几秒钟内收到回复，所以请稍候。  
-另一个简单的替代系统可以在 [kiwiirc.com](https://kiwiirc.com/client/irc.oftc.net/hot) 找到   
-关于将 IRC 与 OpenStreetMap 结合使用的更多信息可以在 [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc) 找到  
-或者使用您选择的 IRC 客户端 (Server=irc.oftc.net, and channel=#hot)  


### 编辑提示  

到目前为止，您已经很好地了解Tasking Manager是什么，以及它支持的一些各种功能。与普通编辑不同，此工具通常用于有许多参与者的时间紧迫的项目-这可能与您习惯有些不同。  

** 使用此工具时需要注意的一些建议：**  

* 避免在方形以外的地方进行测绘-其他测绘人员可能正在该区域工作，从而导致重复工作。可以测绘诸如重叠边界的建筑物之类的对象，但是避免进一步-在边界测绘某些东西后立即上传。  
* 将道路、溪流或其他特征稍微延伸到边界上-这样，下一个测绘人员就可以在您离开的位置选择，但在完成编辑后立即上传。  
* 如果您对特定功能是什么有疑问，请使用评论部分提出问题或查看 wiki。  
* 如果您犯了严重错误（例如，删除主要特征或关系），请使用 IRC 或评论框要求其他测绘人员帮助您恢复此错误。尝试包含变更集或对发生情况的描述。作为一项协作任务，许多其他测绘人员都在这里提供帮助-重要的是要记住每个人有时会犯错误。  
* 不要犹豫地询问反馈-验证你的工作的测绘人员可能很仅简短留言，但是如果他们知道与你可以进行对话，那么对所有参与者来说会好得多。用另一种语言进行交流可能很困难，当你必须翻译以及用不流利的语言传递信息时，很容易表达方式毕竟突兀。  
* 你不能审核自己的工作-他人审核总是会保证更好的测绘质量。  
* 在其他测绘人员审核您的工作时，不要担心他们留言语气和风格，像您一样，他们只想确保所有数据都能准确。他们的反馈是关于剩余工作而不是对你迄今所做努力的批评。  


[Tasking Manager Login]: /images/coordination/tasking_manager_image01.png
[Tasking Manager Username_list]: /images/coordination/tasking_manager_image02.png
[Authorizing access to OSM account by the Tasking Manager]: /images/coordination/tasking_manager_image03.png
[Job description]: /images/coordination/tasking_manager_image04.png
[Picking a task]: /images/coordination/tasking_manager_image05.png
[Assigned task square]: /images/coordination/tasking_manager_image06.png
[Editing options]: /images/coordination/tasking_manager_image07.png
[IRC_help]: /images/coordination/tasking_manager_image08.png
[IRC using]: /images/coordination/tasking_manager_image09.png
[Tasking Manager About]: /images/coordination/tasking_manager_image011.png
[Tasking Manager Languages]: /images/coordination/tasking_manager_image012.png
