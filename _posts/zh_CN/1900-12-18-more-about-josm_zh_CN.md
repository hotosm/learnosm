---
layout: doc
title: JOSM编辑过程
permalink: /zh_CN/josm/more-about-josm/
lang: zh_CN
category: josm
---

JOSM编辑过程
========================

> 本指南有[josm_more-about-josm_zh_CN.odt](/files/josm_more-about-josm_zh_CN.odt) 和[josm_more-about-josm_zh_CN.pdf](/files/josm_more-about-josm_zh_CN.pdf) 两种格式可供下载。
> 2015年7月12日修订

在之前的小节中，
你已经安装了JOSM并且开始绘制你的第一个点、线、面。
你给这些对象添加了预设组合，也就给它们附加了有关的信息。
到上个小节结束，你已经学会了用JOSM绘制自己的地图。

这是一次很好的练习，我们现在已经为编辑OSM做好了准备。

本节我们将深入了解JOSM的界面，
学习我们如何用它编辑OSM地图。

编辑的环节
---------------------
用JOSM编辑OSM与之前学到的用iD编辑器编辑很相似。
但是因为JOSM是一个桌面软件，所以用起来有一点不同。
用JOSM编辑和增补OSM的过程
一般如下：

1. 从OSM**下载**当前的地图数据
2. 参照卫星影像、GPS、Field Paper和地图笔记来**编辑**
3. 将变更**保存**到OpenStreetMap

下载OSM数据
--------------------
编辑的第一步是下载我们想改善区域的数据。
牢记每当你要修改地图时你都要先下载，
因为地图经常被其他用户更新。

-  点击JOSM左上角的“文件”，再点击“从OSM下载”。
    这将打开下载窗口。
    你可以通过直接点击如下图所示位置的下载按钮
    方便地打开下载窗口：

![JOSM Download Button][]

- 下载窗口打开后，有一个粉色方框出现在地图上。
    如果你没看到地图，点击“瓦片地图”
    标签。

![JOSM Download Dialog][]

- 粉色方框代表将要下载编辑的地图区域。
    用鼠标右键平移、滚轮缩放到
    你所熟知的区域，比如你的家乡或者邻里。
    JOSM地图窗口中的操作是一样的。
    鼠标右键拖动地图，滚轮放大和
    缩小。

>  如果偶尔在笔记本电脑上操作，滚动缩放
>  可能有点困难。JOSM中用鼠标操作更方便，
>  但多数较新款的笔记本都可以用触控板实现滚动。

-  在要下载的区域画上方框。新建方框的方法是点击
    地图，按住鼠标左键，拖出
    一个框来，松开鼠标完成绘制。
- 当你选好方框的大小和位置后，点击
    窗口底部的“下载”按钮。JOSM会从OpenStreetMap下载此区域的数据，
    在你的地图窗口中打开数据以供
    编辑。

### 添加影像
如果你学过我们在iD编辑器中添加点的教程，你
应该记得地图数据下面有辅助我们识别地物的卫星影像。
影像来自微软必应，他们
慷慨地把自己的影像提供给OpenStreetMap用户作为
绘图时的参考。

-  要在JOSM里添加必应卫星影像，点击JOSM顶部菜单栏的“影像”，
    然后选择“必应卫星”。

> 如果你的影像菜单里没有必应卫星(Bing Sat)，可能需要从JOSM首选项里激活。
> 做法是进入编辑菜单的首选项对话框，
点击写有“WMS TMS”的图标。有可能列表太长则需要按向下按钮才能找到这个图标。
>  ![JOSM Preferences up down][]
>  ![JOSM Preferences WMS TMS][]
> 点击“Bing Sat(必应卫星)”，然后点“激活”。


### JOSM概览
现在我们已经下载了OSM数据，添加了必应卫星影像作为底图。
下面让我们再来看看JOSM的界面。

![JOSM layout][]

主窗口你已经很熟悉了——这就是地图窗口，
你将在这里进行多数操作，例如查看、编辑、
向OSM添加数据等。

地图窗口右侧是一系列面板，每个面板都有
自己的功能。一般而言你首次打开JOSM时，有几个
面板是默认显示的，例如图层、属性、
选择。当你在地图窗口里选中一个点、一条线或一个面时，
这些对象将在选择面板显示。这些对象的信息
将在属性面板显示，
这些对象的作者的用户名将在作者面板显示。

这些面板可以通过点击JOSM左下方的诸多按钮开启或关闭。
这些按钮的上方，也就是左上角的按钮，是用来
改变鼠标功能的。其中的一些你已经不陌生了，
比如选择工具和绘制工具。除此之外，它们下方还有用于
放大视图、删除对象、绘制图形或绘制平行于
已有线划的画线工具。


编辑
----
目前为止我们已经完成了编辑过程的第一步——下载数据。我们已经
准备了卫星影像作为参照。下一步就是编辑
地图并新增内容了。

视你所选下载区域不同，你可能已经有了或多或少的
既有地图数据了。请注意，这些数据和之前见过的数据是同一种的
——用点线面表示的真实地物。

-  用你学过的技术在图中添加几个
	你熟知地点的数据点。如果你发现既有数据有误，尽量修正它们。
-  你在学习编辑的时候可以不用太激进。如果你不确定
	一些东西的情况，那就先放着别管。
-  如果你想移动点线面对象，请用
    **选择工具**。点击一个对象并将其拖动到
    正确位置。这样的操作可以用来纠正
    被误标地点的位置。

![JOSM select tool][]

- 请用**绘制工具**来绘制新的点线面。
    和前一节一样，请通过选择相应的预设组合菜单来
    描述所绘制的对象。

> 千万不要编辑你已下载区域以外的地图。
> 你可以看见已下载区域有个实线矩形框，
> 而未下载区域则标有平行的斜线。

![JOSM area downloaded][]

保存变更
--------------
完成编辑的第三步也是最后一步，是将已做修改上传到
OpenStreetMap数据库。要保存变更，必须
连接到互联网。

- 点击顶部菜单栏的“文件”按钮，再点“上传数据”。这时
    会打开上传窗口。你也可以直接通过
    点击如图所示的上传按钮打开此窗口：

![JOSM Upload Button][]

- 这时出现的窗口会显示你添加、编辑或删除对象的列表。
    在下边的方框中，
    你要提供关于你所做变更的注解。
    请在该框内描述你所做的编辑。

![JOSM Upload Dialog][]

- 点击“上传修改”。

-  如果这是你首次向OpenStreetMap保存变更，你会
    被要求输入你的OpenStreetMap用户名和密码。
-  请在随后出现的窗口中输入账户密码。如果你勾选了该窗口中的复选框，
    你的用户名和密码将被保存，
    以后就不再需要重复输入了。点击“验证”。

![JOSM Authenticate][]

-  上传所做变更需要等上一会儿，
    之后就上传好了！这样你就编辑了OpenStreetMap上的地图。

> 在你编辑时，始终注意在关闭JOSM前上传修改。
> 尽管你还想再多画些，先上传这些变更。
> 以后再有时间编辑时重复上述过程即可。
> 这样才不会丢失所做的工作！

在地图上查看所做变更
---------------------------
-  打开浏览器，前往[https://www.openstreetmap.org](https://www.openstreetmap.org) 。
- 把地图移动到你编辑过的区域。
- 这时你应该看到你的修改出现在地图上了。如果没有，
    试试按下Ctrl+R组合键刷新网页。有时地图
    无法正确刷新，因此需要重新加载。
- 万一还没看到修改呢？别担心——可能要等上几
    分钟修改才会出现在地图上。此外，检查一下
    你在JOSM里的编辑，确保你都添加对了。
    一般情况下，如果你的点在JOSM里有图标显示，那么它就应该
    能在OpenStreetMap网站的主地图里看到。

小结
-------
现在你已经了解了如何向OpenStreetMap添加信息，接下来要学些什么呢？嗯，编辑
固然很好，但它不是制作地图的唯一方面。当然你还
需要学习如何到外面实地采集地点的
信息。


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png
