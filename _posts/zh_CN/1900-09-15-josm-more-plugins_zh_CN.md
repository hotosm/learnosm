---
layout: doc
title: JOSM建筑物工具和Utilsplugin2插件
permalink: /zh_CNjosm/josm-more-plugins/
lang: zh_CN
category: josm
---

JOSM建筑物工具和Utilsplugin2插件
============

> 已审核 2016-09-12  

**buildings_tools**和**utilsplugin2**插件为JOSM添加了大量的附加功能。在这一节中，我们将进一步了解它们提供的功能。   

建筑物工具插件
--------------------------

如果您还没有安装，请按照 [JOSM插件](/zh_CN/josm/josm-plugins)中的说明安装此插件。   

![Buildings tools plugin][]

建筑物工具插件对建筑物的数字化非常有帮助。它允许你跟踪一个矩形建筑的一个侧面，并轻松地扩展形状。如果你正在数字化许多建筑物, 这个插件将节省你的点击, 从而节省你的时间。  

一旦安装了这个插件，你会在JOSM的左侧看到一个新的按钮，它看起来像这样： ![Buildings tools button][]{: height="29px"}

启动JOSM并下载一个你想追踪建筑物的区域。  

* 选择建筑物工具，点击两次，在地图上画一条线。  

![Draw edge][]

* 然后移动鼠标并再次点击绘制一个矩形。  

![Extend building][]

* 这不仅只需点击三次就能创建一个矩形，而且还会自动将**building=yes**标签应用到形状中。  

### 复杂建筑物

你也可以通过先画几个重叠的建筑，然后将它们合并在一起，来创建更复杂的建筑。   

* 绘制两座重叠的建筑物，使它们形成L形。  
* 选择两栋建筑（按住SHIFT键可以选择多个对象）。   
* 转到 工具->合并重叠区域 或按键盘上的SHIFT+J。  

![Merge buildings][]

### 编辑设置

此外，你还可以改变插件的默认设置。  

* 进入 Data->Set buildings size。 ![Set buildings size][]{: height="39px"}  

* 如果您正在创建许多类似大小的建筑物，您可以设置建筑物的特定宽度和高度尺寸，如6×10米（单位是米）。  

![Set buildings size dialog][]

* 通过设置尺寸，您只需要点击两次就可以创建精确大小的建筑物。  

最后，如果您想添加额外的标签，可以点击“高级(Advanced)”按钮，这些标签将自动应用到每座建筑物上。例如，如果您绘制的每一栋建筑都在同一条街道上，您可以添加一个标识街道的标签，该标签将被自动应用。  

![Buildings advanced][]


Utilsplugin2
-------------

* 如果您还没有安装，请按照 [JOSM插件](/zh_CN/josm/josm-plugins)中的说明安装此插件。  

![Utilsplugin2 plugin][]

当你安装好插件并重启JOSM后，你会在顶部有一个名为“更多工具 ”的新菜单。   

![More tools menu][]

创建一个新的图层，并用一些新的工具进行实验。这里我们介绍一些最有用的新工具：  

1. **在交叉口添加节点：**这个工具对于在选定道路的交叉口添加缺失的节点非常有用。 正确的做法是，道路相交的地方总是应该有公共节点。  

    ![Nodes interesection][]

2. **从上一个选区复制标签：**这个功能使复制标签变得更容易。如果你想创建许多具有相同标签的对象，首先绘制对象。然后将标签添加到一个对象上。点击另一个对象，按Shift + R键，复制之前所选对象的标签。您可以对所有要标记的对象进行此操作。记得，标签会从先前选择的物件复制，所以如果你点击一个未标签的对象，然后再点击另一个未标签的对象，你将无法复制任何标签。  

    ![Copy tags][]

3. **添加源标签：**这个工具简化了来源标签的添加。它能记住上次指定的来源标签，并将其作为记住的来源标签添加到你的对象中。 您只需点击一下就可以插入来源标签。  

4. **替换几何形状：**如果你想重新绘制一个形状不佳的对象，但又想保留该对象的历史、属性和ID号，那么这个工具就非常好用。 例如，如果你遇到一栋建筑很复杂，而且画得很差，那么你就不用痛苦地改变每一个节点，而是可以重新绘制对象，选择新旧对象，然后选择¨Replace Geometry¨将所有信息转移过来。  

    ![Replace geometry][]


### 更多选择工具

**Utilsplugin2**还在“选择”菜单上提供了更多的工具。请尝试使用它们。  

![Selection menu][]

我们最喜欢的选择工具之一是**取消选择节点(Unselect Nodes)：**这个工具可以取消选择所有节点。如果你画一个框框来选择许多对象，但你不想选择所有线条和形状中包含的节点，这可能是有用的。   

![Unselect nodes][]

祝你好运！  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png

