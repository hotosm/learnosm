---
layout: doc
title: JOSM编辑工具
permalink: /zh_CN/josm/josm-tools/
lang: zh_CN
category: josm
---

JOSM 编辑工具
==================

> 已审核 2017-06-09  

- TOC
{:toc}

在 [JOSM入门指南](/zh_CN/josm/start-josm/) 中，涵盖了在JOSM中绘图的基础知识，但还有很多工具和技术没有演示。

在这里，我们将看到在JOSM中绘制地图特征的一些基本工具和技术，在接下来的章节中，我们将更深入地研究高级绘图工具。

获取示例文件
-------------------

- 如果你想跟着练习使用JOSM工具，请下载 [tools_menu_sample.osm](/files/tools_menu_sample.osm)。启动JOSM并打开该文件。它看起来应该是这样的：

![tools_menu_sample.osm][]

绘图工具
-------------

如果你点击JOSM顶部的“工具”菜单，你会发现有许多功能可以帮助你绘制线条和形状，以及编辑地图上的对象。

JOSM有一些额外的工具，使其更容易绘制线条和形状。这些工具可以在JOSM顶部的“工具”菜单中找到。

![Tools menu][]

为了应用该菜单中的功能，您必须首先在地图窗口中选择一个点、线或形状。示例文件包含各种元素，这些元素上标有菜单上不同工具的名称。

### 将节点排列成圆  

- 尝试选择文件中的一个元素。然后进入“工具”菜单，点击你所选择的特征旁边标识的功能。例如，点击画得不好的圆来选择它。

![Align nodes in circle][]

- 接下来，进入 工具 -> 将节点排列成圆。画不好的圆会变得更圆。

使用这个示例文件对每个工具进行实验。下面提供一些工具的说明。

### 切割路径  

这允许你将一条线分成两条独立的线。如果你想为道路的不同部分（如桥梁）添加不同的属性，这很有用。要使用此功能，请在你要切割的线条中间选择一个点，从工具菜单中选择切割路径，你的线条就会被切割成两条。


### 合并路径

这与切割路径的做法正好相反。要将两条线组合成一条线，它们必须共用一个点。要使用此功能，请选择你要合并的两条线。你可以按住键盘上的 SHIFT 键并点击每条线，选择多个对象。当你选择了两条线后，从工具菜单中选择组合方式。

![Combine way][]


### 反转与合并  

如果你把不同方向的道路结合起来，你可能会收到这个警告：

![Reverse and combine][]

如果道路相连，且方向一致，则选择"继续反转"。


### 反转路径

这将改变线条的方向。OSM中所有的线都有一个方向，在JOSM中通过线上的箭头来显示。方向通常并不重要，除非是单向的道路和河流，它们的流向是一定的。在这些情况下，你可能需要反转，使其走向正确的方向。

![Way direction][]

### 简化路径

如果你的线有太多的点，而你又想让它更简单一些，这将从一条线上删除一些点。

![Simplify way][]


### 创建圆形

使用这个工具，可以创建一个更完美的圆。画一条代表你的圆的直径的线，然后应用这个工具。

![Create circle][]


### 排列节点为直线

这个功能将把一系列的点对齐成一条直线。对于长线，最好选择直线的部分进行直线化。要小心，因为这样做确实会使直线有一些移动的趋势。

![Align nodes in line][]

### 正交化形状

这个功能对于绘制建筑物等规则形状非常有用（**但也请参考 [OSM建筑物工具](/zh_CN/josm/josm-more-plugins/)**）。 绘制完一个区域后，这个功能会将其重塑为直角。

![Orthagonalize][]


### 拆开路径

这个工具允许你分离连接的节点。当两个对象共享一个节点时，它是非常有用的，因为它们不应该共享一个节点。例如，一个常见的错误是道路与建筑物的角落共享一个节点。当然，道路通常不会碰到建筑物，所以这是一个错误，你可以将对象从彼此之间解开。

![Unglue way][]

*在移动它们之前，线条和节点实际上不会分开。*

键盘快捷键
------------------

一旦你开始大量编辑，你就会意识到你会浪费很多时间去点击菜单和子菜单。为了克服这个问题，JOSM几乎为所有的东西提供了键盘快捷键。

这意味着，你可以简单地选择对象，然后按键盘上的一个键，而不是点击一个对象，然后经历一个冗长的菜单过程。

上一节提到的所有工具都有快捷键，这些快捷键列在每个工具名称右边的工具菜单上。例如，"O"是
将节点对齐成圆形的快捷键。"L"是将节点排成直线的快捷键。学习快捷键可能需要一些时间，但你会发现，它可以省去
长期来说有很多时间。

其它一些重要的快捷键（已加粗）

1.  激活选择工具 - **S**
2.  激活绘图工具 - **A**
3.  激活放大缩小工具 - **Z**
4.  删除已选择的对象 - **Delete**
5. 放大 - **+**
6.  缩小 - **-**


缩放和旋转
----------------

一个常见的问题是，线条或形状画好后如何旋转。

要旋转一个对象，首先选择它。按住键盘上的**SHIFT+CTRL**，点击并拖动鼠标进行旋转。

![Rotate demo][]

要缩放对象（使其变大或变小），请按照相同的过程，但按住的是ALT+CTRL。

在JOSM底部的信息栏中显示这些指示：

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png