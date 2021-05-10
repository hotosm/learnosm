---
layout: doc
title: JOSM添加tms、wms或wmts图像
permalink: /zh_CNjosm/josm-adding-imagery/
lang: zh_CN
category: josm
---

JOSM - 添加航空影像
================

> 已审核 2016-09-09  

并非所有的航空影像都在JOSM图像菜单中，但如果你得到了链接信息，这将很容易添加。  

在这个例子中，我们是在 [HOT Tasking Manager](http://tasks.hotosm.org/)中工作，完成其中一个项目所需的影像需要手动添加到JOSM中。无论你在进行什么编辑工作，只要提供了影像链接，添加的原理都是一样的。在某些情况下，预期的链接可能无法正常工作，如果您可以获得链接信息，则可能必须手动添加影像。  

从Tasking Manager信息选项栏，或您的其他信息来源，复制所有的图像部分。  

![TM Imagery][]

进入JOSM的首选项菜单（**编辑 / 首选项**，或在苹果电脑上的**JOSM / 首选项**）  

![Preferences WMS TMS 1][]

Click on the ![WMS_TMS_button][]{: height="24px"} icon, and in this case the ![+TMS_button][]{: height="24px"} icon.  

> TMS URL中通常有{x}{y}和{z}，WMS URL通常很长，有{width}和{height}，WMTS URL中通常有WMTSCapabilities.xml。如果你不确定你的图像URL是什么类型，你可以尝试将它们添加为不同的类型，看看哪种类型有效。  

![Preferences WMS TMS 3][]

**方框1.**将您从Tasking Manager信息选项栏中复制的信息粘贴到窗口的第一个方框中。JOSM将对其进行验证，如果正确，验证过程将重复方框3中的信息（见下文）。如果在几秒钟内没有出现在方框3中，请检查您是否不小心漏掉了字母，或者不小心在开头或结尾处添加了"空白" - 必须复制并粘贴实际的链接。  
**方框2.**通常留空，除非您收到任何其他说明。  
**方框3.**现在载有方框1的复制件，由JOSM内的核查程序产生。  
**方框4.**为图层输入一个名称 - 因为我的影像在Tasking Manager中被确定为"此项目的卫星影像由Digital Globe通过其+Vivid服务友好地提供。"我将我的图层命名为"Digital Globe + Vivid"。  

![Preferences WMS TMS 4][]

点击 ![OK_button][]{: height="24px"} 按钮，您添加的影像将出现在列表的底部 - 您可能需要向下滚动才能找到它。  

![Preferences WMS TMS 5][]

点击 ![OK_button][]{: height="24px"} 按钮，关闭首选项窗口，返回JOSM。当你需要使用图像时，点击屏幕顶部菜单中的**影像**一词，并从字母列表中选择它。或者**Alt + I**应显示图像菜单（这些快捷键可能根据语言设置而有所不同）。  

![Preferences WMS TMS 6][]

**提示**如果影像无法加载，请检查影像在列表中的显示方式。在这个例子中，**tms**出现了两次。您可以在josm中编辑链接，使其只出现一次，可能会修复这个问题。

![TMS TMS][]

添加WMS服务器
===========

添加WMS服务器与添加TMS服务器非常相似，但有一个重要区别。WMS服务器通常提供一个以上的影像图层供您选择，您必须在首选项中添加WMS服务器时选择一个影像图层，或者指定您每次从JOSM主界面的图像菜单中选择服务器时都要选择一个影像图层。

要添加一个WMS服务器，打开JOSM影像偏好对话框，如上图所示，但这次点击"添加WMS"按钮 ![wms_add_button][]

由此产生的对话框看起来像下面的对话框。
![wms_entry_dialog_numbered][]

**方框1.**在此栏输入WMS服务器的URL。这应该是一个典型的以http或https开头的URL  
**按钮2.**输入URL后，点击"获取图层"按钮。JOSM将与WMS服务器联系，并从该服务器上获取可用的图层列表； **按钮2.**输入URL后，点击"获取图层"按钮。  
**方框3.** 这里将显示可用图层的列表。可能有一些文件夹需要展开才能看到可用的图层。  
**下拉菜单4.**图像格式 - 通常会在你点击**方框3**中的一个图层后自动选择，它可能会提供多种类型的图像格式，但一般是jpeg或png格式。  
**方框5.**这个是在**方框3**中选择一个图层后自动生成的。会很长很复杂，通常情况下默认就好了，信息量比较大，一般不要编辑。  
**方框6.**输入服务器或层的名称。默认名称将根据URL填写，但你可以输入一个更有意义的名称。当您想在常规JOSM界面中将图层添加到您的图层面板时，这个名称将出现在JOSM影像菜单中。  

> 具有很多有趣层次的WMS服务器实例： http://sedac.ciesin.columbia.edu/geoserver/wms  

![wms_select_layer_highlighted][]  
如果想让"影像"菜单项总是加载同一个图层，请确保你确实点击了一个图层。在上面的例子中，当从"影像"菜单中选择图层时，它将始终加载"世界保护区数据库"图层。

如果你想在每次从影像菜单中选择服务器时选择加载哪个图层，并且能够轻松地从保存服务器中加载多个图层，只需勾选"仅存储WMS端点"的框。这也将禁用选择图层和验证URL字段。

![wms_end_point_only_highlighted][]  

点击 ![OK_button][]{: height="24px"} 按钮，您添加的影像将出现在列表的底部 - 您可能需要向下滚动才能找到它。  

![Preferences WMS TMS 5][]

点击 ![OK_button][]{: height="24px"} 按钮，关闭首选项窗口，返回JOSM。当你需要使用图像时，点击屏幕顶部菜单中的**影像**一词，并从字母列表中选择它。或者**Alt + I**应显示图像菜单（这些快捷键可能根据语言设置而有所不同）。  

![Preferences WMS TMS 6][]

[Preferences WMS TMS 1]: /images/josm/JOSM_TMS_1.png
[TM Imagery]: /images/josm/JOSM_TMS_2.png
[WMS_TMS_button]: /images/josm/josm_preferences-wms-tms.png
[+TMS_button]: /images/josm/+TMS.png
[OK_button]: /images/josm/josm_OK_button.png
[Preferences WMS TMS 3]: /images/josm/JOSM_TMS_3.png
[Preferences WMS TMS 4]: /images/josm/JOSM_TMS_4.png
[Preferences WMS TMS 5]: /images/josm/JOSM_TMS_5.png
[Preferences WMS TMS 6]: /images/josm/JOSM_TMS_6.png
[TMS TMS]: /images/josm/JOSM_TMS_TMS.png
[wms_add_button]: /images/josm/wms_add_button.jpg
[wms_select_layer_highlight]: /images/josm/wms_select_layer_highlight.jpg
[wms_entry_dialog_numbered]: /images/josm/wms_entry_dialog_numbered.jpg
[wms_end_point_only_highlighted]: /images/josm/wms_end_point_only_highlighted.jpg
[wms_select_layer_highlighted]: /images/josm/wms_select_layer_highlighted.jpg