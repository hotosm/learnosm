---
layout: doc
title: OruxMaps
permalink: /zh_CNmobile-mapping/oruxmaps/
lang: zh_CN
category: mobile-mapping
---

OruxMaps
===============

> 已审核 2016-08-04 虽然有些过时了，但仍然可以使用，并包含一个链接到网站自己的软件手册。

在本节中，我们将学习如何设置OruxMaps，如何创建航点，如何查看轨迹记录，以及如何导出轨迹记录以用于JOSM。  

安装OruxMaps
------------------

从Google Play Store中搜索**OruxMaps**并安装该应用，OruxMaps应该在搜索结果列表的前列。  

![Search OruxMaps in Play Store][]

点击**安装**按钮，出现App权限后按接受。  

![Install OruxMaps][]

恭喜您！您现在已经在您的设备上安装了OruxMaps！  

使用OruxMaps
--------------------

第一次运行应用程序时，你会看到这样的通知：  

![Running OruxMaps for the first time][]

在OruxMaps中，你可以选择使用在线地图还是离线地图。最好是使用离线地图，因为即使没有网络连接也可以使用它。OruxMaps会推荐两个 下载离线地图的来源。如果你已经有离线地图，你也可以放在这里！一开始可能会有点混乱，因为里面有很多按钮。但是不用担心，你会看到下面每个按钮的解释。  

![Interface overview][]

来源： [OruxMaps手册英文版](http://www.google.com/url?q=http%3A%2F%2Fwww.oruxmaps.com%2Foruxmapsmanual_en.pdf&sa=D&sntz=1&usg=AFQjCNFY7Tk-Gzz9NFKy9WOsnfnn8x3Kwg)  
此手册可能比本指南更新，也可能有其他语言版本。  

你可以在**Maps \> Switch Maps**下更改你的背景地图。之后你会得到一个选项 - 你想使用**在线地图**或者你想使用
**离线地图**。OruxMaps提供了大量的在线地图资源供您选择，但这需要从您设备上的数据计划中付费。 如果你想知道你可以把离线地图放在哪里，你可以去**设置 \>地图**。在地图目录选项中，你可以看到OruxMaps将你的
离线地图放在哪里。默认情况下，它在你的内部存储的**OruxMaps/Mapfiles**文件夹中。  

![Offline maps storage settings][]

开始追踪
--------------

在你开始追踪之前，让我们回顾一下轨迹/路线设置下的一些设置。第一个设置是**自动创建GPX**。如果你勾选了这个设置，OruxMap会在完成一个轨迹后（使用停止跟踪功能）立即帮你创建.gpx文件。因此，在完成一条轨迹后，您可以到内部存储中的**OruxMaps/Tracklogs**获取您的.gpx文件，而不需要先在轨迹/路线管理中导出您的轨迹日志。第二个设置是**询问轨迹名称**。在开始追踪之前定义你的轨迹名称是非常有用的，这样你就可以准确知道你的轨迹的具体名称。  

![Tracklog settings][]

要开始追踪，需要记住的是，我们必须在您的设备中启用GPS功能。除非您激活GPS功能，否则OruxMaps中的任何功能如**启动GPS**和**启动记录**都不会启动。如果您的GPS功能仍然失效，OruxMaps将显示通知，之后您将直接进入设备中的**位置设置**。当您在设备中开启定位功能后，您可以通过右侧面板的**启动GPS**(1)功能了解您的位置。当您的位置已经被获取后，您可以通过右侧面板中的**Start Rec.** (2)功能开始跟踪。  

![Start track recording][]

您只需按右边面板上的同一个按钮(2)就可以停止跟踪。当您停止跟踪后，OruxMap将把您的跟踪记录保存在一个内部数据库中，您可以通过访问首页的**路线**面板，选择**管理**来访问跟踪记录。您可以通过进入首页的**路线**面板，选择**管理**来访问轨迹记录，在这里您会发现您所有的轨迹记录，您可以通过按您想看的轨迹记录并选择**加载轨迹** (1)来查看该路线。如果您不使用自动创建GPX功能，您可以通过选择您的轨迹记录和**导出为** (2)，将您的轨迹记录导出为各种格式（GPX, KML, KMZ）。  

![Managing tracklogs][]

如果你已经有一个OpenStreetMap账户，你可以直接使用OruxMaps上传你的轨迹。在你上传你的轨迹记录之前，你需要在**设置 \> 整合 \> OpenStreetMap**中输入你的用户名和密码。然后输入你的用户名和密码。你可以在轨迹/路线管理中使用**Upload to (3)**上传你的轨迹记录。  

一些窗口会弹出，你需要选择 **OpenStreetMaps** (1)，然后选择你的 **Tracklog type** (2)，填上你的 **Description** (3)和 **Tag** (4)。当所有信息都填好后，按**Upload GPX** (5).通知会弹出，选择**OK** (6)就可以直接在OpenStreetMap网站上看到你的GPS轨迹。  

![Uploading tracks to OpenStreetMap][]

添加航点
---------------------

![Creating a waypoint][]

如果您想添加航点，您需要进入页面顶部的**Waypoint** 符号（1），然后进入**Create** (2)。它将带您进入航点创建页面，并填写您的航点名称。您可以添加额外的信息，例如，您的航点描述和航点的坐标，通过检查坐标检查表。按"接受"保存您的航点。  

![Waypoint creation settings][]

如果你想查看所有的航点，你可以进入**航点 \>管理**。在这个页面，您可以更改属性，删除和导出航点。要想在**地图**中查看所有航点，请选择航点并在地图中显示 (1)，如果您想导出您的航点，请按**导出** (2)。所有导出的航点将被存储在内部存储空间（默认情况下存储在**oruxmaps/geocaches**）。  

![Managing save waypoints][]

小结
-----------

恭喜你！你已经知道如何使用OruxMaps进行实地调查。您已经知道如何使用OruxMaps进行实地调查。第一次使用时可能会很困难，但如果您继续使用，您就会熟悉这个应用程序。   

[Search OruxMaps in Play Store]: /images/mobile-mapping/oruxmaps_image00.png
[Install OruxMaps]: /images/mobile-mapping/oruxmaps_image03.png
[Running OruxMaps for the first time]: /images/mobile-mapping/oruxmaps_image01.png
[Interface overview]: /images/mobile-mapping/oruxmaps_image09.png
[Offline maps storage settings]: /images/mobile-mapping/oruxmaps_image06.png
[Tracklog settings]: /images/mobile-mapping/oruxmaps_image11.png
[Start track recording]: /images/mobile-mapping/oruxmaps_image02.png
[Managing tracklogs]: /images/mobile-mapping/oruxmaps_image10.png
[Uploading tracks to OpenStreetMap]: /images/mobile-mapping/oruxmaps_image05.png
[Creating a waypoint]: /images/mobile-mapping/oruxmaps_image07.png
[Waypoint creation settings]: /images/mobile-mapping/oruxmaps_image08.png
[Managing save waypoints]: /images/mobile-mapping/oruxmaps_image04.png