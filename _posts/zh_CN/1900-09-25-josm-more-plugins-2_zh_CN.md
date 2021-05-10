---
layout: doc
title: Opendata插件 - 来自电子表格的数据
permalink: /zh_CN/josm/opendata-plugin/
lang: zh_CN
category: josm
---

Opendata插件 - 来自电子表格的数据
============


- TOC
{:toc}

本指南介绍了如何将数据添加到OpenStreetMap中，这些数据可能是以电子表格的形式，可能是通过使用ODK collect或Kobo collect等工具进行实地调查获得的。 

**请注意 - 添加到OpenStreetMap的数据可能被称为 "导入"，如果你计划这么做，那么你应该查阅 [OpenStreetMap Wiki的导入指南页面](https://wiki.openstreetmap.org/wiki/Import/Guidelines)。如果你有任何疑问，最好先咨询一下！**


安装Opendata插件
--------------------------

如果你还没有安装，请按照 [JOSM插件](/zh_CN/josm/josm-plugins)中的说明安装这个插件。 

![Opendata][]

安装完毕后，你可以点击 ![Opendata preferences][]   
来访问任何模块。 

![Opendata modules][]

本指南使用的是基本功能，没有加载任何模块。   

准备电子表格  
-------------------------

wiki页面 <https://wiki.openstreetmap.org/wiki/JOSM/Plugins/OpenData>提供了更多关于可用格式的详细信息。为了我们的目的，我们假设电子表格已经下载并以**.xlsx**的格式传给我们，它不会加载到opendata插件中。 

- 在一个开源程序中打开电子表格，如LibreOffice，它适用于大多数操作系统 <http://www.libreoffice.org/>。
- 然后将其保存为开源格式。我们的电子表格原来是**shops.xlsx**，现在变成了**shops.ods**。

虽然现在可以将电子表格加载到josm中，但在加载之前，最好先进行进一步的修改，使过程更简单。

### 经纬度

Opendata插件非常擅长从电子表格中提取经纬度，但如果你有任何疑问，最好将列标题改为更简单的格式。 

![latitude longitude][]

成为;  

![latitude longitude corrected][]

### 键和值

#### 名称标签

我们现在的目标是修改电子表格，使信息符合OpenStreetMap所期望的格式。列标题将是**键**值，电子表格中的数据将成为**值**元素。对于我们简单的电子表格，将第一列标题从**Name_of_the_shop**修改为**name**。使用格式key=value，我们的第一行电子表格现在变成了： 
**name=Tony's Supermarket**。

如果您的电子表格有一个以上的名称，如**本地名称**或**官方名称**，请查阅维基页面 <https://wiki.openstreetmap.org/wiki/Names>，其中列出了许多可能的替代名称，以便您对OpenStreetMap的更新能够包含所有可能被使用或搜索的名称。 

#### 没有标题的列

如果您删除了一列的标题，但保留了它下面的数据，那么这些数据就会被JOSM有效地隐藏起来。 

![opendata 1][]

#### 包含来自不同键的数据的列

![opendata mixed][]

设计调查的人和进行调查的人往往不知道OpenStreetMap中的标签和值已经发展了。我的电子表格中的**商店**列实际上包含了两个不同标签的数据，电子表格需要修改。对于以下数据，可以将列标题**Type of shop**改为**shop**；  
  shop=supermarket  
  shop=convenience  
  shop=hairdresser  

但**restaurant**和**fast_food**是来自**amenity**键。

应该插入一个新的列，标题为**amenity**，并移动数据，所以我们的电子表格现在看起来像这样：

![opendata shop amenity][]

#### 子标签

在调查过程中，**Does_the_shop_have_toilet_faci**一栏标题被缩略，原为**Does the shop have toilet facilities?**。 

虽然厕所有一个独立的标签，通常是加在建筑物内的一个节点上，但这其实是指公众可以使用的厕所。如果我们自己进行调查，我们就能清楚地知道问题和答案的意图，但如果这是传递给我们的信息，可能就需要查询其意图。如果能够将调查问题装入手机，进行 "模拟 "调查，这样就可以看到问题的布局，这也是非常有用的。在修改电子表格之前，需要仔细阅读 <https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets>的维基页面，并研究原始调查。特别是，维基条目中包含的信息 - 

- *请不要使用toilet=yes (singular)。一般来说，请不要绘制公众无法进入的厕所。许多建筑内部都有供员工或业主使用的厕所，但标明这些厕所可能会造成不必要的冲突或不切实际的期望。在没有公共厕所的地方（如火车站或小路口），使用厕所=否。*

根据维基上的建议，我尽可能地修改了关于厕所信息的电子表格，现在的内容是：

![opendata toilets][]


我在一些列上的标题是空白的，这样当我在JOSM中进行编辑时，这些数据就不可见了。 

将电子表格加载到JOSM中
---------------------------------

点击 ![josm open][]，找到保存电子表格的地方，在JOSM中打开它。 

![opendata pop up][]  

可能会出现一个弹出窗口，要求你确认收集数据时使用的 "投影方法"，Opendata插件将尝试计算所使用的 "投影方法"，并将其作为最可能的选项。除非测量者在设置中改变了这个选项，否则将接受建议的投影，但在编辑时检查所创建的点是否出现在可能的位置是一个明智的选择。

![opendata spreadsheet loaded][]

恭喜你！你已经完成了所有艰苦的工作，几乎已经准备好用你的新调查数据更新OpenStreetMap了。

使用ToDo插件
----------------------

在JOSM中选择电子表格添加的所有项目，或者通过;

- 向外滚动滚轮，直到所有项目都可见，然后在按住鼠标左键的同时，从左上角向右下角拖动鼠标，或
- 使用**Ctrl+f**进行搜索 - 我搜索的是**name**，因为它出现在我的所有 5 个调查中。

确保你已经选择了你所有的调查 - 在我的电子表格中有5个调查，我需要有5个对象选择。

![5 selected][]

在ToDo插件面板上，点击**添加**。 

![opendata todo add][]

然后面板上显示要添加的项目列表。 

![opendata todo loaded][]

将OpenStreetMap数据作为一个单独的图层加载
-------------------------------------------

双击您的待办事项列表中的顶部项目，将其置于您的编辑面板中的中心位置，然后点击下载 ![download][] 图标。

当出现下载对话框窗口时，请确保在 ![download new layer][] （下一张截图的左下角）中打勾，这样你的OSM数据就不会下载到你的电子表格数据中。

![download dialog][]


比较各图层之间的数据
------------------------------------

确保你仔细检查电子表格中的数据与OpenStreetMap中已有的数据。有一些方法可以在图层之间复制标签或标签的一部分（请查看JOSM的**工具**和**更多工具**菜单，或阅读LearnOSM之前的章节）。在许多情况下，你会将新数据与现有数据合并。仔细检查数据，如果有必要的话，检查不同地物的历史和来源 - OpenStreetMap中的数据总是有可能比你的电子表格数据更近或更准确。 

当你更新了电子表格中的一行信息后，使用ToDo插件的**Mark**按钮进入下一个项目 - 如果下一个项目在已经下载的区域之外，你可能需要下载更多的OSM数据。


[Opendata]: /images/josm/opendata-plugin.png
[Opendata preferences]: /images/josm/opendata-preferences.png
[Opendata modules]: /images/josm/opendata-modules.png
[latitude longitude]: /images/josm/opendata-latitude-longitude.png
[latitude longitude corrected]: /images/josm/opendata-latitude-longitude-corrected.png
[opendata 1]: /images/josm/opendata-1.png
[opendata mixed]: /images/josm/opendata-mixed.png
[opendata shop amenity]: /images/josm/opendata-shop-amenity.png
[opendata toilets]: /images/josm/opendata-toilets.png
[josm open]: /images/josm/josm_open-file.png
[opendata pop up]: /images/josm/opendata-wgs84-popup.png
[opendata spreadsheet loaded]: /images/josm/opendata-spreadsheet-loaded.png
[5 selected]: /images/josm/opendata-5-selected.png
[opendata todo add]: /images/josm/opendata-todo-add.png
[opendata todo loaded]: /images/josm/opendata-todo-loaded.png
[download]: /images/josm/josm-download-button.png
[download dialog]: /images/josm/josm_download-dialog.png
[download new layer]: /images/josm/download-as-new-layer.png

