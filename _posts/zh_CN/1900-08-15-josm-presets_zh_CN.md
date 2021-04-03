---
layout: doc
title: JOSM预设组合
permalink: /zh_CNjosm/josm-presets/
lang: zh_CN
category: josm
---

JOSM预设组合
============

> 已审核 2016-09-17  

如果你已经使用JOSM很长时间了，你现在应该对标签和预设组合有一定的了解。每一个对象都是由两样东西定义的--首先是它的几何（无论是点、线、还是形状及其位置），其次是它的属性，这些属性以标签的形式出现。  

当你绘制对象并从预设组合菜单中选择时，正确的标签会自动应用到对象上。  

如果你喜欢使用预设组合，那么当你想添加菜单中不包含的标签，或者你想自定义自己的标签时，该怎么办？  

在这种情况下，您可以将自定义菜单项添加到预设组合中。在本节中，我们将看到如何做到这一点。在 [下一章](/zh_CN/josm/creating-presets)中，我们将介绍如何创建自己的自定义预设组合文件。  


添加预设组合
-----------

组成预设组合菜单的菜单和子菜单存储在文件中，这些文件描述了如何创建点击预设组合时出现的菜单和窗口，以及如何根据填写窗口的方式定义哪些标签添加到对象中。  

预设组合文件可以从在线存档中添加，也可以保存在电脑上从本地添加到JOSM中。  

* 要在预设组合菜单中添加新条目，打开JOSM并进入 编辑 -> 偏好设置。  
* 点击第三个选项栏，它看起来像一个覆盖地球的网格。  

![tagging presets tab][]

* 点击顶部的"标记预设组合"。  

![tagging presets menu][]

* 从互联网上添加预设组合文件，方法是在	左边的列表中选择一个，然后点击蓝色箭头。在本例中，我们将添加名为 "新标签 "的预设组合。  

![example presets][]

* 你会看到右边的列表中出现一个新项目。  
* 点击确定。  
* 你需要重新启动JOSM。  
* 创建一个新图层并添加一个点或面。  
* 进入"预设组合"菜单。你将在底部看到一个额外的条目，它扩展到标准JOSM安装所未包括的几个选项。  

![additional tags preset][]

* 大多数预设组合涵盖了相当具体的使用案例，因此，如果你要找到符合你兴趣的预设，请浏览列表。  

* 如果你获得了一个自定义预设组合文件，你可以用类似的方式将其添加到菜单中。只需返回"首选项"菜单，然后点击右上角的(+)按钮，而不是从列表中选择。  

![plus button][]

* 找到你的文件，如果你愿意，可以给它起个名字。  
* 点击确定。  


[tagging presets tab]: /images/josm/tagging-presets-tab.png
[tagging presets menu]: /images/josm/tagging-presets-menu.png
[example presets]: /images/josm/example-presets2.png
[additional tags preset]: /images/josm/new-tags-preset.png
[plus button]: /images/josm/plus-button.png

