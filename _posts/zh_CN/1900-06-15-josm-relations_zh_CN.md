---
layout: doc
title: JOSM关系
permalink: /zh_CNjosm/josm-relations/
lang: zh_CN
category: josm
---

关系
==========

> 已审核 2017-06-06  

在[新手指南](/zh_CN/beginner)中，我们解释了在OpenStreetMap中可以绘制三种类型的对象 - 点（节点）、线（路径）和多边形（封闭路径）。线条包含了许多点，线条本身带有定义它所代表的属性。多边形和线一样，只是线首尾相接，才能形成一个形状。  

事实上，我们骗了你，因为在OpenStreetMap中还有一种对象类型，叫做关系。就像一条线由其他
点组成，一个关系包含一组对象，它们可以是点、线或多边形。如果你想提高你的编辑技能，那么理解和懂得如何正确地编辑关系是很重要的。  

例如，想象一下，您想绘制一栋中心有庭院的建筑。您需要在建筑物的外部绘制一个多边形，并希望在庭院周围绘制其他多边形来表示它们不是建筑物的一部分。这是一个关系的例子。该关系将包含多个多边形--建筑物的属性将被附加到该关系上，而不是多边形。  

![An example of a multipolygon][]

关系用来表示任何需要对象集合来定义的东西。其他的例子有公共汽车线路（线路的集合），长而复杂的对象（河流或道路），或多个多边形，它们都是一个位置的一部分（如大学的建筑物）。  

在OSM中主要会遇到四种类型的关系：复合多边形、线路、边界和限制（比如，禁止左转）。在本节中，我们将介绍复合多边形和路线。  

创建复合多边形关系
-------------------------------

让我们来看看如何创建一个像上图所示的复合多边形关系。  

- 首先，绘制形状。在这种情况下，我们将绘制三个多边形，一个外部矩形和两个较小的矩形。

![Multipolygon ways][]

- 选择所有的多边形。请记住，你可以通过按住SHIFT并点击每个对象来选择多个对象。  
- 从菜单中选择*Tools->Create multipolygon*。  
标签窗口现在包含新的复合多边形。

![New mp object][]

- 点击编辑按钮。  

- 你现在应该看到关系编辑器窗口。这有点复杂，因为现在你要向一个路径的集合添加标签。  

![Building relation][]

- 请注意，在面板的顶部是关系的标签。这些标签的工作方式与其他标签的工作方式相同。  
- 底部是关系的成员列表。这个关系有三个成员 - 也就是属于我们关系的三种路径。  
- 注意，我们已经定义了一个标签，*type=multipolygon*。我们需要再添加一个标签，定义关系所代表的对象的种类。我们必须添加一个标签，*building=yes*。  
- 在标签框中点击并添加此标签。  

![Building yes][]

- **角色(roles)**已经被适当地分配给路径。关系的每个成员都有一个角色，该角色指示该成员的目的是什么。在这种情况下，外部多边形的角色必须定义为**outer**，两个内部多边形的角色必须定义为**inner**。这些是复合多边形成员可用的角色。  

- 点击"确定"，你的复合多边形关系就完成了！  

![New multipolygon][]

当你创建一个这样的复合多边形时，它将在地图上呈现这样的效果：  

![Multipolygon in Mapnik][]

复合多边形可以用于任何需要内多边形和外多边形的复杂对象，比如一栋建筑或一条河流，里面有成片的土地。详细的复合多边形信息可以在[OSM Wiki](http://wiki.openstreetmap.org/wiki/Relation:multipolygon)上找到。  

线路关系
----------------

关系对于表示长线路也非常有用。例如，一条公共汽车或自行车线路遵循不同的路段。为了定义这样的路线，我们可以创建一个关系，它包含了所有作为线路一部分的路段。附加的特征，例如公交车站，也可以是线路关系的成员。  

![Route relation][]

让我们来看看如何在JOSM中为一条公交线路创建关系。  

- 首先，选择线路沿途的所有道路。如果道路只有部分属于关系，您可能需要将一些道路分割成单独的部分。您可以使用“分割路径”工具来完成这项工作。  
- 当所有的区段都选定后，进入*预设组合->交通->公共交通->公共交通路线（巴士）*。  

![Public transport preset][]

- 一个新的窗口会弹出，您可以输入适用于整个线路的信息。

![New route relation][]

请从顶部的下拉菜单中选择具体的路线类型。公共汽车路线有两个选项：公共汽车和无轨电车。一般来说，您还需要输入名称、编号、起止点。

- 点击"新建关系"，你会看到关系窗口弹出，就像你创建一个复合多边形一样。  

![Bus route relation][]

- 请注意，已经有一些标签将关系定义为线路。我们有*type=route*，而不是*type=multipolygon*。我们也有一个标签将其定义为公共汽车路线，而不是其他类型的路线。  
- 你现在可能会想，成员的**角色(role)**应该是什么？好吧，在线路的情况下，我们不需要定义成员的角色。通过将角色留空，软件知道它们只是线路的一部分。我们也可以将每个路段的角色定义为**线路**，但没有必要。  
- 点击“确定”，您的线路关系就完成了！  

> 如果你想看到地图上所有关系的列表，你可以通过点击左边的这个按钮来打开关系面板： ![relation panel button][]{: height="30px"}。这将打开一个面板，在这里你可以选择、编辑和创建新的关系。  

小结
-------

关系可能是难以理解的，也不需要经常使用，但它们是必须要知道的。每隔一段时间，你可能会意识到你需要一个关系来正确地绘制一些东西，你可以使用这些知识，并在OSM Wiki上找到更多的信息，来帮助你正确地绘制关系。


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png