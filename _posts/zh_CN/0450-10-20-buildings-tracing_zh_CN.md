---
layout: doc
title: 绘制矩形建筑物- iD编辑器
permalink: /zh_CN/hot-tips/tracing-rectangular-buildings/
lang: zh_CN
category: hot-tips
---

绘制矩形建筑物- iD编辑器
============

> 已更新 2019-06-23

- TOC
{:toc}

要点
----------

![Rectangular building][]  

> 这张图片 ![keymon]{: height="24px"} 显示鼠标上的哪些按钮或滚轮已被使用，以及哪些键盘按钮被按下了。  

需要注意的要点；  

-要完成对某个区域的绘图，请双击最后一个点，  
-如果建筑物应该有方形角落，请确保绘图中使用方角，或者使用工具来绘制方形角落（快捷键 **q**）。  
-确保你已添加上标签！  
-大小问题-* 人口估计数基于特定区域的累计建筑面积 *，  
-正确规模的建筑物将帮助人们找到自己的村庄，  
-放大足以查看细节-20 米或更小的缩放比例通常是正确的。  
-** 寻找建筑物 **- 扫描缩放某地在 50 米至 80 米之间。注意阴影和直线（圆形建筑更难找到！）  
-建筑物、道路和河流、** landuse= residential ** 边界或其他要素不应重叠。  
-如果你犯了错误，请使用 ** 撤消 ** 按钮！ ![back arrow]{: height="26px"} 可撤消上次更改  
-我们都在改进地图。如果之前的绘图人员在某种程度上给建筑物留下了有趣的形状或错误，请纠正它并考虑向他们发送礼貌的提醒信息。  

建筑物模糊或只在某个角度能被看见  
--------------------------------------

![building-obscured][]  

卫星图像因拍摄的角度而使使建筑物看起来变形的情况很常见。在上图中，右侧的图片显示了应如何绘制建筑物。绘制屋顶的轮廓通常最简单，然后将其拖动到墙壁与地面相交的位置-这是用来绘制上面建筑物的技术。另请注意，部分被树木遮蔽的建筑物已被正确地绘制为矩形。 

屋顶有凸起的建筑物
----------------------------
 
大多数建筑物要么有 90 度的角落，要么是圆形建筑。  

![building-ridge][]  
这座建筑有 90 度角，但屋顶上有一个山脊。摄像头角度最初使建筑的形状看起来很奇怪。  

![building-tree-ridge][]  
这栋建筑有一棵树部分掩盖了它。这是一座矩形建筑。  

在世界偏远地区，通常使用瓦楞铁片作为屋顶 —— 当它们较新时会反射阳光，从而在卫星图像上产生 ** 非常明亮的耀斑效果 **。建筑物通常有一个阳台或是 **L 形状 **，你应该确保你的绘图符合建筑物的形状。  
在绘制建筑物轮廓时，您必须尝试以合适的尺寸绘制建筑物，并尽最大努力在墙壁与地面相交的地点进行绘制！在世界许多地方，建筑物是部分建造的，然后没有屋顶，直到它们被售出或者想要使用。将没有屋顶的建筑物绘制为普通建筑物，因为添加屋顶不需要很长时间，而且自卫星图像拍摄以来，屋顶可能已经添加了。  

尽最大努力-即使是专家有时也会不同意，有时候你只需要去那里看看到真正的是什么。** 如果有疑问，请将其添加为建筑物。**  

建筑物标签
-------------

由于我们正在标记我们从未访问过且不熟悉的建筑物，最安全和推荐的标记方案是 **building**=**yes**，当你滚动鼠标到标签栏的底部然后点击**所有标签**时，你可以看到已标记正确标签的建筑物。  

另请参阅  
---------

- [![building-video]{: height="150px"}](https://www.youtube.com/watch?v=VPJz-AucqF4&index=7&list=PLb9506_-6FMHZ3nwn9heri3xjQKrSq1hN "Humanitarian OpenStreetMap小组教程视频 - 添加一个新建筑物到OpenStreetMap")  
* 提供某些语言的字幕 *  

- [Ivan Gayton's diary entry for Hadjer Lamis, Chad - 他人的评论显示描述同样适合世界其它地方](https://www.openstreetmap.org/user/IvanGayton/diary/38612)



[Rectangular building]: /images/hot-tips/rectangular_building.gif "绘制一个矩形建筑物，方形角落和添加标签."
[keymon]:/images/hot-tips/keymon.png
[building-ridge]: /images/hot-tips/building-ridge.png
[back arrow]: /images/beginner/back-arrow.png
[building-tree-ridge]: /images/hot-tips/building-tree-ridge.png
[building-obscured]: /images/hot-tips/buildings-obscured-traced-1.png "之前&之后 - 绘制一个以固定角度可见的建筑物"
[building-video]: /images/hot-tips/building-video.png "Humanitarian OpenStreetMap小组教程视频 - 添加一个建筑物到OpenStreetMap"