---
layout: doc
title: 校正影像偏移
permalink: /zh_CNjosm/correcting-imagery-offset/
lang: zh_CN
category: josm
---

影像偏移
===============

本指南可以下载为 [correcting-imagery-offset_en.odt](/files/correcting-imagery-offset_en.odt)或 [correcting-imagery-offset_en.odt](/files/correcting-imagery-offset_en.odt)  

影像供应商通常在地理参照影像方面做得很好，但有时图像可能会偏离位置。尤其是在丘陵或山区，因为在这些地区，很难将平坦的图像延伸到一个有许多等高线的地球区域。当您在JOSM中加载影像时，有时可能会与它的真实位置相差十米或更多。这就是所谓的**影像偏移**。  

请注意下图中，两张独立的航空照片已经被地理参考合并在一起。 由于地理参考并不是一个完美的过程，因此图像之间并不完全一致。 因此，其中一张，或两张，一定是不准确的。   

![Misaligned imagery][]

我们已经了解了制作地图的两种主要方式 - 一种是利用航空影像来识别地面上的特征，另一种是利用GPS记录轨迹和航点，然后添加到OpenStreetMap中。 航空影像的优势是显而易见的。 它使你，即测绘人员，能够看到整个画面，从图像中观察各种细节，考虑你对该地区的了解，并轻松地描绘道路、建筑物和区域。 然而，GPS的一个关键优势是，它不像图像那样受到偏移的影响。 GPS将始终为你提供一个正确的经纬度。 唯一的例外是当卫星信号被高大的建筑物或山脉所干扰时，但在这种情况下，很容易识别错误。 观察这张图片中的GPS轨迹，与它下面的Bing航空影像图层进行对比：  

![Aerial vs GPS][]

因为我们现在所知道的，很明显GPS轨迹很可能是准确的， 而它下面的图像是不正确的。所以现在我们必须问："如果影像可能偏移了，我们如何才能使用它，并做出准确的地图？"  

校正影像偏移
-------------------------

前面的问题的答案是，我们可以移动影像，使其与我们知道的正确位置的东西对齐，如GPS轨迹。在JOSM中校正影像偏移很容易。  

调整影像最好的参照物是跟随道路的GPS轨迹。 而参考的GPS轨迹越多，你就越能准确地调整你的影像。 由于OpenStreetMap用户经常将他们的GPS轨迹上传到OSM数据库中，我们可以下载它们，并使用它们来调整我们的影像。  

- 点击下载按钮。 ![JOSM download button][]{: height="24px"}  

- 勾选靠近下载窗口顶部“原始GPS数据”旁边的方框 ![Download raw GPS data][]{: height="24px"}选择你的区域，然后点击“下载”。   

- 这将向JOSM下载一个包含GPS轨迹的附加图层。根据OSM用户上传的轨迹数量，你可能会看到很少的轨迹（甚至没有轨迹）：  

![Few GPS tracks from OSM][]

- 或者，你可能会看到很多轨迹：  

![Many GPS tracks from OSM][]

- 要调整影像图层，点击JOSM顶部的 "调整影像偏移 "按钮 ![Adjust imagery offset button][]{: height="24px"}。  

- 忽略弹出的方框，用鼠标拖动影像图层，使其与GPS轨迹正确对齐。 GPS轨迹应该与图像上的道路尽可能地对齐。 你会看到方框中的偏移数字发生变化。  

![Adjust imagery offset][]

- 如果您愿意，您可以通过输入一个书签名称，然后点击确定来保存这些偏移设置。然后，您可以通过进入影像 ‣ 影像偏移 并单击您的书签，随后自动应用相同的设置。   
- 如果您不想保存偏移，只需单击 确定 而不输入书签名称。   

如果OpenStreetMap上没有GPS轨迹，而你又没有GPS，怎么办？如果没有GPS轨迹，就很难对准图像。 如果它是一个相对空旷的区域（没有做太多的地图），你可能会选择简单地使用图像，并在以后修正数据。 有测绘区域偏移二三十米，总比完全不测绘要好。  

如果你能确定地面上一个物体的经纬度，你就可以通过以下步骤确保影像的正确放置:  

1. 确定你在影像上了解位置的物体。  
2. 点击JOSM左下角的经纬度 。![JOSM lat lon][]{: height="24px"}  
3. 在打开的对话框中，输入您所知道的地点的经纬度，并为Zoom输入一个小数字，大约是5或10。  
![JOSM lat lon dialogue][]
4. 这将把地图放大并居中到你的经纬度。现在你可以像之前一样移动影像，使你所知道的地物在正确的位置居中。  

另一方面，如果该区域已经被广泛绘制，那么希望之前的测绘人员已经在其正确的位置上绘制了对象。 在这种情况下，您可以将图像与OSM地图对齐，但要注意！其他测绘人员可能不知道影像偏移，他们可能在制图时犯了错误。   


影像偏移数据库
---------------------------

现在你知道如何注意和校正影像偏移了，但是这种方法有一个主要的问题是我们至今都忽略了的。 如果每个OpenStreetMap用户都以不同的方式调整图像，那么每个人都将以略微不同的背景进行地图绘制。  

想象一下，你正在绘制一个小镇，你意识到Bing的影像向北偏移了15米。于是你调整了图像，然后用它来准确地绘制整个小镇。但后来有人想在地图上添加一些东西，于是他们下载数据并加载Bing图像，但他们不知道你发现影像偏移的问题！他们会认为这有问题，并认为你的地图有问题。 他们会认为出了问题，城里所有的物体都错位了15米，他们会开始移动它们，这是不正确的! 这对城镇的地图数据来说是灾难性的。   

出于这个原因，所有用户都必须意识到影像偏移的严重性，并且应该在绘制一个区域之前始终检查它。 为了帮助解决这个问题，一些聪明的人创建了一个插件，允许用户将偏移信息保存在数据库中，并与其他人分享。 让我们来看看这是如何工作的。   

- 打开JOSM中的偏好设置菜单，点击 插件 选项栏![JOSM plugins tab][]{: height="24px"}  

- 找到名为"imageery_offset_db"的插件，并选中旁边的方框。  

![Imagery_offset_db plugin][]

- 点击确定。 您需要重新启动JOSM来完成插件的安装。  

就像您可以将偏移量保存为书签一样，这个插件允许您将偏移量保存到中央数据库，并访问其他用户创建的偏移量。 因此，如果一个测绘人员在一个区域内创建了一个影像偏移，其他用户可以使用完全相同的偏移来进行绘图。  

当使用航空影像图层时，您应该始终检查现有的偏移，当您创建自己的偏移时，您应该始终将其保存到该数据库中。  


从数据库中添加影像偏移
------------------------------------

当你添加一个影像图层时，新的插件会提醒你应该检查图像数据库中是否存在偏移。 你会在JOSM的顶部看到一个带有红色感叹号的图标，就像这样：  

![Imagery offset notification][]

- 点击按钮，插件将与数据库进行通信，查看该地区是否有存在的偏移量。   
- 在这里，我们已经下载了OSM数据和印度尼西亚巴厘岛库塔的GPS轨迹。在这种情况下，我们发现了一个现有的偏移量。点击它来应用到地图上。   

![Offset in Kuta bali][]

- 这样就会导致影像图层发生偏移。 但是，当我们添加别人的偏移量时，我们应该通过与GPS轨迹比较来检查它是否有效。   

![Comparing imagery offset from GPS tracks][]

- 我们可以看到，影像图层实际上是错位的。 我们不希望其他用户使用这个偏移量，所以我们应该在数据库中把它标记为不正确。再点击“偏移(Offsets)”按钮（它不会再有红色的感叹号了）。  

![Offsets button][]

- 这个时候打开对话框后，右键点击偏移量，点击 "弃用偏移(Deprecate Offset)"。  

![Deprecate offset][]

- 点击"Yes"来确认。  
- 你需要输入一个废弃这个偏移的原因。  

![Deprecate reason][]


添加影像偏移到数据库
------------------------------------

既然我们已经将这个用户的偏移量标记为“废弃”，那么我们应该向数据库中添加一个改进的偏移量。  

1. 点击 "调整影像偏移 "按钮。 ![Adjust imagery offset button][]{: height="24px"}  
2.  调整影像以匹配GPS轨迹。点击框中的“OK”。  
3.  现在进入 偏移(Offset) ‣ 保存影像偏移...(Store Imagery Offset...)  
![Store imagery offset][]
4.  在打开的框中输入偏移量的说明。  
![Offset description][]
5.  点击OK。您的偏移量将被保存到数据库中。  
6.  现在让我们隐藏GPS层，并对照正确放置的影像查看OSM数据。  

![Corrected imagery][]

哦，不！有人用错位的影像绘制了这一区域，所以该区域没有正确绘制。 这将需要一些时间来修复。


影像偏移数据库网站
--------------------------------

最后，关于偏移数据库的更多信息，你可以访问网站 [http://offsets.textual.ru/](http://offsets.textual.ru/)。 这里列出了所有已经上传到数据库的偏移量，它还有一个很酷的地图功能，可以直观地显示偏移量的位置，你可以在这里看到：  

![http://offsets.textual.ru/][]

> 还有一件事要记住的是，影像的偏移距离可能不尽相同！在有很多山丘和山脉的地区尤其如此。因此，如果影像在不同地区的偏移量不同，你就需要再次移动它。  

小结
--------

当你刚开始使用OpenStreetMap时，你不需要太担心影像的偏移问题。 但是，如果你看到另一个测绘人员的编辑似乎与影像不一致，在你开始改变他们的对象之前，你应该始终考虑到可能存在偏移。 如果你还没有做好处理偏移的准备，请记住，绘制一个偏移20或30米的区域总比完全不绘制要好。 但在可能的情况下，请记住可能会发生影像偏移，并在需要的时候使用本章的步骤来纠正它。


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










