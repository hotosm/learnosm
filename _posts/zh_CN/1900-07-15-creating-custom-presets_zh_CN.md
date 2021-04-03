---
layout: doc
title: JOSM - 创建自定义预设组合
permalink: /zh_CNjosm/creating-presets/
lang: zh_CN
category: josm
---

JOSM - 创建自定义预设组合
=======================


在 [上一章](/zh_CN/josm/josm-presets)中，我们研究了如何将自定义预设组合菜单添加到JOSM中。在本章中，我们将介绍如何创建自己的自定义预设组合文件。  

警告！这是个高级话题…慎重起见!   

XML简介
-------------------

为了创建我们自己的预置组合菜单，我们首先需要了解一种叫做XML的语言。如果你已经熟悉了XML，请跳到下一节。  

XML是"可扩展标记语言"的缩写，是一种与HTML类似的计算机语言。关键的区别在于，XML的设计是为了携带数据，而不是显示数据。互联网上的许多应用程序使用XML来传输数据，包括OpenStreetMap。XML使用元素，每个元素内部可以包含子元素。例如，让我们想象一下，我们要创建一个XML文件，其中包含一个餐厅菜单的数据。我们必须创建一个根元素来包含所有关于菜单的数据。我们的根元素将有一个开头和一个结尾标签，像这样：

      <menu>
      ... 无论我们想在菜单中包含什么数据 ...
      </menu>

信息包含在一个元素里面，每个元素里面可以有更多的元素。  

      <menu>
        <item name=“Hamburger”>
          <cost>400</cost>
          <description>美味的牛肉饼</description>
        </item>
          <item name=“Nasi Goreng”>
          <cost>200</cost>
          <description>印尼炒饭</description>
        </item>
      </menu>

在这个例子中，我们在我们的 &lt;item&gt; 元素中放置了两个 &lt;menu&gt; 元素来描述菜单中包含的两个不同的项目。每个项目中又包含两个元素， &lt;cost&gt; 和 &lt;description&gt;。还请注意我们如何在开头的 &lt;item&gt; 标签内写上name="汉堡"。这叫做属性，增加了元素的信息。


### XML术语

- **根元素(root element)：**一个XML文档的最外层元素，它描述了文档的内容  
- **元素(element)：**任何XML对象，被开头和结尾标签包含，如 &lt;item&gt; ... 数据 ... &lt;/item&gt;  
- **标签(tag)：**包含在括号中的东西，如 &lt;item&gt;.  &lt;item&gt; 是元素的开头标签， &lt;/item&gt; 是结束标签。不要将其与OSM标签混淆，后者有不同的含义。  
- **属性(attribute)：**标签中包含的一条信息，如name=“汉堡”  

使用XML来保存和传输数据是非常好的，因为它对计算机来说很容易理解。  


JOSM预设组合文件
-------------------

让我们在JOSM中添加一个样本预置组合文件，分析一下它的工作原理。  

- 下载文件 [sample_presets.xml](/files/sample_presets.xml)。  
- 然后按照 [上一章](/zh_CN/josm/josm-presets)中的描述将其加载到JOSM中。  
- 创建一个新图层和一个新对象。  
- 进入预设组合菜单。会有一个新的项目叫"Sample Building"，点击它。  

![sample building menu][]

请注意，出现的表格中有三个字段，每个字段接受不同类型的输入。第一个字段，建筑名称，接受一个文本字符串作为输入。第二个字段，建筑物用途，有一个下拉框。最后一个字段是一个复选框，意味着它只能有两个值中的一个，即开启或关闭。

![sample presets form][]

现在让我们看看定义这个预设组合形式的XML文件。

- 在电脑上找到XML文件，用文本编辑器打开它。如果你使用的是Windows，你可以使用记事本程序。如果你想要一个更容易使用的编辑器，你可以下载免费的Notepad++应用程序。  
- **sample_presets.xml**文件是这样的：  

![sample presets file][]

现在，让我们忽略前六行和最后一行，关注 &lt;item&gt; 标签之间的一切。

第一行是这样的：

      <item name="Sample Building" type="node,closedway">

这是一个项目的开头标签，它被添加到菜单中。它有两个属性，名称和类型。名称定义了预设组合菜单上的显示方式。类型将此预设组合限制为特定类型的对象。在这种情况下，预设组合只能应用于点和形状 - 换句话说，节点和封闭的路径。如果你尝试将此预设组合应用于线条，它将无法实现。  

我们来看下一行：  

      <label text="Building Form" />

当你点击菜单并打开示例表单时，在顶部你会看到"建筑物表单"的文字，这就是这一行定义的文字。这定义了一个 &lt;label&gt; 元素，它只是在表单中显示文本。文本是由属性*text="某些文本"*定义的。  

往下走几行就能找到这个：  

      <key key="building" value="yes" />

这是将应用于我们所选对象的标签之一。因为它使用了元素 &lt;key&gt;，所以当选择这个预设组合时，这里给出的OSM标签将被自动应用。因此这个对象将自动获得*building=yes*这个标签。  

下一行有点不同，使用了&lt;text&gt;元素。  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

＆lt;text&gt;元素创建了一个空白字段。在 JOSM 中创建表单时，用户将能够填写空字段。因为设置了属性 *delete_if_empty="true"*，所以如果用户将此字段留空，则不会添加任何标签。   

表单上的下拉框定义在下面一行：  

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" />
      <display_values="Residential, Commercial, Industrial"/>

下拉框由&lt;combo&gt; 元素定义。与 &lt;text&gt; 元素一样，属性 *key* 定义了标记键。然后从可能的*values*列表中选择值。*display_values*属性允许你选择要在下拉框中显示的不同名称，这可能比OSM标签值更容易理解。  

最后，我们来看一下定义复选框的那一行。  

      <check key="building:vacant" text="Is the building vacant?" default="off" /> 
      <delete_if_empty="true" />

&lt;check&gt; 元素定义了 - 你猜对了！ - 复选框。属性*default="off"*表示该复选框默认为不选中。其余的属性你已经见过了。  

创建你自己的预设组合文件
------------------------------

创建你自己的预设组合文件的最好方法是采用一个已经存在的文件，并对其进行操作，以实现你的目标。请随意编辑这个样本文件，并通过实验来学习基础知识。只需记住，每次保存它时，你都需要重新启动JOSM来加载更改的内容。   

在你开始创建自己的预设组合之前，你需要仔细考虑你将使用的标签。发明新的标签是另一个话题。一般来说，你应该利用现有的OSM标签。大多数现有的标签都列在 [OSM Wiki上的地图特征页面](http://wiki.openstreetmap.org/wiki/Map_Features).  

这个示例文件包含了JOSM预设组合文件中的大部分元素 - 没有太多的表单元素。如果你想尝试更复杂的预设组合文件，请在这里下载[dhaka_presets.xml](/files/dhaka_presets.xml)文件。  

此外，所有可能的要素的详细解释可以在 [这里](http://josm.openstreetmap.de/wiki/TaggingPresets)找到。  

祝你好运！  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png