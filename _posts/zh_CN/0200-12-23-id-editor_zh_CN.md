---
layout: doc
title: iD编辑器
permalink: /zh_CN/beginner/id-editor/
lang: zh_CN
category: beginner
---

iD编辑器
=============

> Reviewed 2019-06-10

准备开始用Tasking Manager为HOT和MissingMaps准备地图任务？查看 [HOT-tips section](/en/hot-tips/) 获得帮助  

- TOC
{:toc}

iD编辑器是基于浏览器的事实标准OpenStreetMap编辑器。iD编辑器快速、易用，可以借助来自诸如卫星或航空影像、GPS、Field Papers或Mapillary等多种数据源的数据绘图。  

在一些不需要JOSM(一个更进阶的地图编辑器)的高级功能的微小改动中，使用ID编辑器是个更好的方法。本章阐述使用iD编辑器编辑的一些基础知识。  

启动iD编辑器
----------------------

-  iD编辑器需要持续有效的互联网连接。  
-  打开浏览器，前往OpenStreetMap网站 [http://www.openstreetmap.org](http://www.openstreetmap.org)。  
-  用你的OpenStreetMap账户**登录**  
-  将地图平移并缩放到想要编辑的区域。平移的方法是按住鼠标左键，拖动到想要的区域。  
-  点击**编辑**旁边的小箭头，然后点击 **使用iD (浏览器内编辑器) 编辑**。  

![image1][]


iD编辑器用户界面
-------------------------
![image2][]

1. **编辑要素面板:** 该面板显示图中所选对象的标签。  
	你可以在该面板上添加或编辑标签。  
2. **工具:** 该面板显示基本的编辑工具：  
    **工具:** 该面板显示基本的编辑工具：- 画点(节点, node)，*快捷键* **1** ![image3][]{: height="24px"}  
    画线(路径,way)， *快捷键* **2** ![image4][]{: height="24px"}  
    画面(多边形polygon)， *快捷键* **3** ![image5][]{: height="24px"}  
    撤销， *快捷键* **Ctrl+Z** ![image6][]{: height="24px"}  
    重做，*快捷键* **Ctrl+Y** ![image7][]{: height="24px"}  
    保存更改，*shortcut keys* **Ctrl+s** ![image8][]{: height="32px"}  
3. **地图面板:** 该面板显示各配置功能：  
    放大， *快捷键* **+** ![image9][]{: height="24px"}  
    缩小， *快捷键* **-** ![image10][]{: height="24px"}  
    显示我的位置 ![image11][]{: height="24px"}  
    配置底图图层， *快捷键* **B** ![image12][]{: height="24px"}  
    地图数据， *快捷键* **F** ![Map Data][]{: height="24px"}  
    反馈问题，*shortcut key* **i** ![Issues][]{: height="24px"}  
    帮助， *快捷键* **H** ![image13][]{: height="24px"}  
4. **信息面板:** 该面板显示一些信息，例如比例尺、向此地图贡献过的用户。  

## 配置背景层

点击**背景设置**按钮或按下*快捷键* **B**.![image14][]{: height="24px"}  
![image15][]  
你可以通过 **改变背景层** 来选择相应的地图提供商（默认是Bing地图）  

你可以通过点击**自定义**来添加你自己的地图瓦片。例如，如果你想**添加一张Field Paper** [^fieldpaper]，点击**自定义**，然后点击放大镜（搜索）图标来打开窗口:-  
![image17][]   
然后输入你的**FieldPaper快照网址**，形式大致如下： <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
你可以**显示本地计算机的GPS轨迹**(GPX格式)。也可以将GPX文件拖曳并放入iD编辑器。  
你可以打开**OpenStreetMap GPS轨迹**图层，这样可以显示此地区的公共GPS轨迹。在下面的图片中，公共GPS轨迹用不同颜色表示，颜色代表着运行的方向。  
![osm gps traces][]  
点击 **显示选项** 来改变 **图像外观**  
![DisplayOptions][]  
如果有[imagery offset](/en/josm/aerial-imagery)选项，你可以点击 **天正图像偏移**来校正图片位置  
![image18][]  

点击方向按钮可以移动影像，点击重置按钮可以恢复到默认位置。 ![image20][]  

iD基本编辑操作  
----------------------  

### 添加点  

要添加一个新点，点击**点**按钮。 ![image3][]{: height="24px"}  

- 你的鼠标指针将变成一个加(+)号。现在，点击一个你知道的地点标出其位置。例如，你知道你附近有个医院，那就在医院大楼的位置点击鼠标。  
![image21][]  
- 注意一个的点元素被添加后，同时在左边信息框会显示这个元素的属性表单，在表单中点击”Hosptial Grounds“标记该元素为医院。  
![image22][]  
- 你可以在表单中填写所画地点的详细信息，例如医院名称、地址和其他附加信息。注意每类要素都有不同的选项，这取决于你从要素面板给地物选择的标签。  
如果你设置错误例如标错地址，你可以通过按住鼠标左键来移动你的元素到新的地点，或者，你也可以点击鼠标左键选中元素后点击鼠标右键激活元素控制菜单，然后通过点击删除[PointToolDelete][]{: height="24px"}来删除掉该元素  
在iD编辑器中创建的“点”实际上是一个有一系列“标签”的独立“节点(node)”。  

### 画线  

要添加新的线，点击**线**按钮。 ![image4][]{: height="24px"}  

- 你的鼠标指针将变成加(+)号。在地图上找一条还没被画过的道路描绘出来。在路段开始的地方点击鼠标画一个点，移动鼠标并通过点击添加其他关键点，通过双击结束画线。注意左侧的面板。  
![image24][]  
- 和画点时一样，画完线后也要给线选择合适的标签。  
- 你可以通过在已有点上点击鼠标左键来选中并拖动它。  
- 当你点击鼠标左键选中一条线上的一个结点元素，然后点击鼠标右键或者按空格键，就可以激活结点操作菜单，你会看见：  
  - 从这个点继续画线 ![PointToolContinue][]{: height="24px"}  
  - 将线从这个点中断 ![PointToolDisconnect][]{: height="24px"}  
  - 用点将一条线分为两条线 ![PointToolSplit][]{: height="24px"}  
  - 从线上删除点 ![PointToolDelete][]{: height="24px"}  
- 当你在线上(注意不是在某个点上)点击鼠标左键时，会有如下工具：  
  - 根据线的轨迹来创建一个圆圈（仅在线是封闭式有效）![LineToolCircularize][]{: height="24px"}  
  - 从其它对象上断开线条 ![LineToolDisconnect][]{: height="24px"}  
  移动线条 ![LineToolMove][]{: height="24px"}  
  将边方形化 ![LineToolSquare][]{: height="24px"}  
  -   在短轴上画当前线条的反射线条 ![LineToolReflectShort][]{: height="24px"}  
  -   在长轴上画当前线条的反射线条 ![LineToolReflectLong][]{: height="24px"}  
  -   倒转线条方向 (对画河流和单行道时有帮助) ![LineToolReverse][]{: height="24px"}  
  -   将线条绕其中心旋转 ![LineToolRotate][]{: height="24px"}  
  -   将线变直 ![LineToolStraighten][]{: height="24px"}  
  -   删除线条 ![LineToolDelete][]{: height="24px"}  

在iD编辑器中创建的“线”实际上是一个有一系列“标签”的“路径(way)”。

> 关于**删除**的特别说明：一般情况下你不应该删除别人的线，如果你只是要改进这条线的话。你可以删除自己画错的内容，但是对于已由别人绘制但需要改动的对象，你应该尽量*调整*。这样做可以在OSM数据库中保留对象的历史记录，体现出对绘图伙伴的尊重。如果你确实认为该删，可以考虑先征求原作者意见，或者在OSM邮件列表中询问大家。

### 画面(多边形)

要添加新的多边形，点击**面**按钮。 ![image34][]{: height="24px"}  

- 你的鼠标指针会变成一个加(+)号。试着以影像为参照勾绘一栋建筑。  
- 你会发现你的面的颜色将随你给它指定的属性而变化。  
![image35][]  
- 工具在你选择一个形状后用鼠标右键激活其控制菜单后可以使用，使用方法与你编辑线条方法类似。  

在iD编辑器中创建的“多边形”实际上是一个有标签的“封闭路径(closed way)”。

### 画多边形

当你需要创建包含内边框的多边形例如包含内院的建筑物或者内湖的岛时，记得不要试图用一条线画所有形状，而是单独画这些轮廓但仅在外轮廓添加相应标签，之后选择所有轮廓后，点击 **c**来将这些合并成一个多边形。

![create multipolygon][]

在点击新创建的多边形轮廓后，你可以在坐标查看到多边形属于谁的信息

![part of multipolygon][]

## 问题

编辑器在你编辑后会执行进行检查。它会在问题标签栏中通知你如果它认为你的修改有问题。所以当问题标签栏右边出来黄色（表示警告）或者红色（表示错误）图标时你应该点击查看原因。点击后显示会在左边有问题的对象属性栏中显示。当你上传数据时，相应信息也会被显示出来如果你还没有修正。 

![Issue][] ![Error][]

在“问题”标签底部显示可用的规则和允许你个人设置关闭这些规则，通常不推荐你这么做。

保存你的更改
--------------------

当你想把你的编辑保存到OpenStreetMap时，请点击 **保存**	按钮。左侧的面板会显示上传面板。  
![image36][]  

- 输入对你编辑的注释并点击**保存**。  

> 如果你编辑的同时，别人编辑了同样的信息（点，路径或区域），你会收到一个“你的编辑不能被上传直到你解决了**冲突** 的警告，你可以选择接受别人的编辑后再上传你的编辑内容。 

附加信息与自定义标签
---------------------------------------

当编辑对象时，在属性面板底部你可以看见“Add Field”菜单。你可以通过选择额外信息如层（layer），高度（elevation），维基百科（wikipedia）等来添加额外信息。  

![AdditionalTags][]

或者你可以通过点击“所有标签”来添加自定义标签 ![image44][]{: height="24px"}  

- 这里会显示所有添加到要素的标签。  
![image45][]  
- 点击加号(+)添加键值对，点击垃圾桶图标删除标签。

更多教程
------------------

[Our external resources page](/en/resources/#iD) 有许多视频教程资源。

iD vs. JOSM 对比
---------------  

**iD适用于……**

- 简单编辑  
- 网速快时加载影像和保存编辑  
- 想要遵从简单一致的标签模式  
- 正在使用的计算机安装程序受限

**JOSM更适于……**

- 添加大量建筑物(参见buildings_tool插件)
- 编辑大量已经存在的线或面
- 网络连接不稳定或无网络时
- 使用特定标签模式或自定义预设组合

[^fieldpaper]:在[section of LearnOSM](/en/mobile-mapping/field-papers/) 有更多关于Field Papers的信息。



[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png