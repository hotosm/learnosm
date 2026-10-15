---
layout: doc
title: Field Papers
permalink: /zh_CN/mobile-mapping/field-papers/
lang: zh_CN
category: mobile-mapping
---

使用Field Papers进行测量
=============================


在本章中，我们将看到如何在没有GPS的情况下记录地方的坐标。我们将使用一个叫做[Field Papers](http://fieldpapers.org/)的工具，它允许你打印一个区域的地图，在上面绘图并添加注记，然后将纸张发送回JOSM，便可以将你的位置添加到OpenStreetMap中。你也可以观看这个8分钟的 [教程Field Papers视频教程](http://www.youtube.com/watch?v=A_HGkBXZ69g&feature=youtu.be)，了解如何创建地图集并上传快照。  

Field Papers概述
--------------------------

在详细介绍Field Papers之前，我们先来看看这个流程的概述。  

1. 在Field Papers网站上找到你要绘制的区域。打印出这个区域的地图。你可以选择在OpenStreetMap上打印该地区的当前地图，如果你所在地区有航空影像的话，也可以选择打印航空影像。  
![FieldPapers homepage][]

2. 使用你打印的地图来勘测该地区。在地图上画出更多的地方，以增加它们。为道路画线，为建筑物画形状，等等。直接在地图上写下每个地点的笔记，或者在地图上写下与笔记本上的数字有关的数字，你可以在笔记本上写下每个物体的更详细的信息。  
![Example fieldpaper print][]

3. 将纸张扫描到电脑中。如果你没有扫描仪，但你的相机能够拍出高质量的照片，你可以给纸张拍照。将图像上传到"Field Papers"中
网站。  

4.在JOSM中，加载Field Papers。使用你画的对象作为参考，将它们以数字方式添加到OpenStreetMap中。  
![Fieldpaper scan as a JOSM background][]

Field Papers如何运作？
-----------------------------

如果你按照上述的Field Papers流程，你将只用纸张收集准确的地方地理坐标。这是怎么做到的？  
![QR code][]

打印Field Paper时，纸张的底部有一个方形条形码。该条形码可以让Field Papers确定你用于勘测的地图的准确位置。之后，当你将该纸发送回JOSM中时，你所绘制的所有对象都将显示在其实际位置上。这就像使用GPS来收集精确的坐标一样，只不过你需要的只是纸而已!  

现在让我们学习如何创建和使用Field Papers。  

创建和打印
----------------

打开你的浏览器。在窗口顶端的地址栏中输入下列内容并按回车：[fieldpapers.org](http://fieldpapers.org)
网站看起来应该是这样的：  

![FieldPapers homepage][]


点击**制作自己的地图集**，选择要打印的区域。  

![Create a new atlas][]

你将被引导到这个页面：  

![Atlas location][]

放大到你想打印在纸上的区域。你可以像在OpenStreetMap网站上移动地图一样移动地图，用鼠标左键拖动地图，用滚轮放大和缩小。左键点击左上角的(+)和(-)按钮也可以放大和缩小地图。  

![Zoom in and out][]

为纸张提供一个名称。如果你愿意，你可以添加文字，这些文字将出现在每张打印的纸张上。  

![Provide a name][]

下一个选项让你选择地图布局。如果你勾选了"打印注解"旁边的方框，你的地图将被打印在上半页，注解显示在下半页。否则，地图将显示在整页上。  

![Layout][]

下一个复选框允许你保持你的地图集的私密性。通过保持你的地图集的私密性，只有在你登录后，或通过最后一步提供给你的链接才能访问它。  

![Private][]	

地图旁边有一些额外的选项。前两个选项可以让你选择打印Field Paper的纸张大小和方向。你可以选择纵向或横向。  

![Choose map orientation][]

下一个选项可以让您选择您要用于Field Paper的数据类型。在这里，您可以选择不同的选项来改变地图的外观。现在，我们将选择	**黑白**。  

![Choose map tile - black & white][]

最后，如果你想的话，可以在每张地图上添加UTM网格覆盖。  

![UTM][]

您要确保窗口中显示的是您要绘制的区域。您可以使用地图窗口中的控件来调整您的Field Paper的页数，或者调整到更多或更少的页数。要确保你的纸张覆盖的区域相当小，否则当你四处走动时，它们就没有什么用处了。如果你第一次犯了错误，不要担心，你可以创建你所需要的任何数量的文件。  
现在就开始打印吧!如果你已经找到了你感兴趣的测绘区域，并选择了让你的纸张看起来不错的选项，你就准备好了。点击标有"制作地图集"的按钮。  

![makeatlas][]

你会看到你的新打印正在处理中。当它完成时，您将在此页面上看到您的 Field Paper。通常只需要几分钟的时间就可以完成打印，这取决于您正在创建多少页。  

![Preparing your atlas][]

当你的打印准备好了，点击"下载地图PDF打印"。Field Paper应该开始下载。  

![Download the pdf][]

下载完成后，打开PDF文件。将你的电脑连接到打印机，然后打印页面。如果一切顺利，你现在应该已经把地图打印在纸上了。   

用Field Papers进行绘图
-----------------------

- 带着你的Field Paper到外面去，用它作为向导，四处走走，找出地图上没有的新地方。  
- 给道路画线，给建筑物画形状等等。直接在地图上写下每个地点的注记，或者在地图上写下与数字有关的数字，然后在笔记本上，你可以写下每个物体更详细的信息。  
- 当你对你在纸质地图上的添加感到满意时，你可以将它们以数字方式添加到OpenStreetMap中。  

扫描并上传
---------------

Field Papers对于仅有纸张的地图绘制非常有用，但它们并不是100%的魔法。我们仍然需要将我们的文件添加到JOSM中，以数字方式添加我们的信息，并将我们的更改保存在OpenStreetMap上。第一步是将您的Field Papers扫描到您的电脑中。你可以将扫描仪连接到你的电脑上，扫描文件，并将其保存为一个图像文件。如果您没有扫描仪，您可以对纸张进行拍照，但您应该注意拍摄一张非常好的照片。确保纸张是平的，并且你的相机正对着它。确保在图像中包含条形码，因为没有条形码，Field Papers将无法使用。以下是扫描/拍照图像的例子：  

![FP screenshot][]

当您扫描并保存在电脑上的Field Paper后，请打开您的浏览器并返回fieldpapers.org，就像之前一样。  
-点击 “上传” 选项卡。  

![Upload][]

单击“选择文件”，然后导航到你所扫描/拍摄的Field Papers文件。  


![uploadfp][]


您的纸张可能需要几分钟的时间才能上传，这取决于您的网络连接速度。当上传完成后，你会看到这样的内容：  

![Upload 2][]

如果你现在不打算在JOSM中使用这些数据，那么最好将这个快照页面收藏起来。  

添加Field Papers插件
---------------------------

在JOSM中打开Field Papers之前，我们需要安装JOSM Field Papers插件。  

> 插件为JOSM增加了额外的功能。Field Papers 插件允许我们加载我们的扫描文件作为背景，就像我们可以看到卫星影像作为背景一样。关于插件的进一步信息可以从 [JOSM网站](https://josm.openstreetmap.de/wiki/Plugins)获得。  

<!-- 这里链接到josm插件章节 -->

- 打开JOSM，进入 编辑- > 首选项。  
- 单击插件选项栏。  
- 找到Field Papers插件，并选中它旁边的方框。点击确定。  

![FieldPapers JOSM plugin][]

- 重启JOSM.

在 JOSM 中打开
------------

现在可以将你的Field Paper加载到JOSM中，并使用它将你收集的信息添加到OpenStreetMap中。除非你仍然打开着带有快照的网页或保存了书签，否则请像之前一样，在浏览器中输入 [fieldpapers.org](http://fieldpapers.org/)，返回Field Papers网站。  
- 点击"观察"标签栏，然后点击"快照"。  
- 从列表中找到你的纸张，然后点击它。你应该看到这样的东西：  

![Scanned paper][]

要将纸张加载到 JOSM 中，我们需要复制您所扫描的Field Papers的快照ID。在浏览器顶部的URL栏中，选择文本并按键盘上的 CTRL+C 进行复制。该文本看起来应该与此相似：  

[http://fieldpapers.org/snapshot.php?id=zqw8m33x#16/14.6582/121.1098](http://fieldpapers.org/snapshot.php?id=zqw8m33x#16/14.6582/121.1098)

![Fieldpaper ID][]

在JOSM的顶部菜单上，点击"Field Papers"。然后点击“扫描地图...”  

![Scanned map][]

按键盘上的CTRL+V粘贴您从Field Papers网站复制的文本。  

![Snapshot][]

Click OK. If all went well, you should see your Field Paper load into JOSM. In order to learn how to add the places that you mapped into OpenStreetMap please refer to [the JOSM editing process](/en/josm/more-about-josm) and [editing field data](/en/josm/editing-with-josm).  

![Fieldpaper scan as a JOSM background][]

您也可以在其他OSM在线编辑器（如iD或Potlatch2）中使用您扫描的 Field Papers，方法是点击扫描的Field Papers页面中的“在 iD 中编辑”或“在Potlatch中编辑”链接。  

![Edit in iD or P2][]

![Snapshot layer in iD][]

重复！
-------

当你把你的修改添加到OSM后，它们将被保存在地图上。然后下次你想改进地图时，你可以打印出一个新的Field Papers，其中包括你所做的修改。随着这个过程的重复，地图会变得越来越好，你的地图就越多！  

小结
-------

恭喜你！在这一章中，你学会了使用Field Papers的过程和它们的工作方式。你学会了如何打印、绘图和扫描Field Paper，以及如何使用它们来改进OpenStreetMap。  


[FieldPapers homepage]: /images/mobile-mapping/field-papers_homepage.png
[Example fieldpaper print]: /images/mobile-mapping/field-papers_fieldp.png
[Fieldpaper scan as a JOSM background]: /images/mobile-mapping/fieldpaperjosm.png
[QR code]: /images/mobile-mapping/field-papers_paper_qrc.png
[Create a new atlas]: /images/mobile-mapping/field-papers_makeatlas.png
[Atlas location]: /images/mobile-mapping/field-papers_makeyourselfanatlas.png
[Zoom in and out]: /images/mobile-mapping/field-papers_zoominout.png
[Choose map orientation]: /images/mobile-mapping/field-papers_choosetile.png
[Choose map tile - black & white]: /images/mobile-mapping/field-papers_blackandwhite.png
[UTM]: /images/mobile-mapping/field-papers_UTM.png
[zoom]: /images/mobile-mapping/field-papers_zoom.png
[makeatlas]: /images/mobile-mapping/field-papers_labelnext.png
[Provide a name]: /images/mobile-mapping/field-papers_name.png
[Layout]: /images/mobile-mapping/field-papers_layout.png
[Private]: /images/mobile-mapping/field-papers_private.png
[Preparing your atlas]: /images/mobile-mapping/field-papers_preparingyouratlas.png
[Download the pdf]: /images/mobile-mapping/field-papers_downloadpdf.png
[FP screenshot]: /images/mobile-mapping/field-papers_scrnsht.png
[Upload]: /images/mobile-mapping/field-papers_upload.png
[uploadfp]: /images/mobile-mapping/field-papers_uploadfp.png
[Upload 2]: /images/mobile-mapping/field-papers_asd.png
[FieldPapers JOSM plugin]: /images/mobile-mapping/field-papers_plugin.png
[Scanned paper]: /images/mobile-mapping/field-papers_watchsnapshot.png
[Fieldpaper ID]: /images/mobile-mapping/field-papers_fieldpaperid.png
[Scanned map]: /images/mobile-mapping/field-papers_scannedmap.png
[Snapshot]: /images/mobile-mapping/field-papers_fsnapshot.png
[Edit in iD or P2]: /images/mobile-mapping/field-papers_editinidorpot.png
[Snapshot layer in iD]: /images/mobile-mapping/field-papers_id.png
