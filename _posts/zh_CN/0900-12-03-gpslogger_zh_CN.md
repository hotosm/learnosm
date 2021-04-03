---
layout: doc
title: 适用于安卓的 GPSLogger
permalink: /zh_CN/mobile-mapping/gpslogger/
lang: zh_CN
category: mobile-mapping
---

适用于安卓的 GPSLogger
=====================


![GPSLogger][]

一款简单、轻便、简约的应用程序，用于在 Android 平台上记录GPS轨迹。它的界面简单易用、带有GPS日志功能和低电量静音模式，这是一款能够将GPS轨迹保存为 GPX、KML、NEMA 或文本文件格式的电池节能应用程序。日志文件可以自动上传到OpenStreetMap、OpenGTS 服务器、DropBox、FTP 服务器、HTTP 服务器或发送到电子邮件地址。  

<https://f-droid.org/en/packages/com.mendhak.gpslogger/>  

适用于 Android 的 GpsLogger 是一款免费使用的应用程序，也是一个积极维护的开源项目。欢迎捐款以进一步增强应用程序。如果您希望参与（例如提供其他语言的翻译、错误报告或提交功能请求），请访问 [repository](https://github.com/mendhak/gpslogger)。  

> OpenGTS是指 [Open GPS Tracking System](http://opengts.sourceforge.net/)项目  


功能
--------  

* 根据时间或距离间隔指定日志记录  
* 指定省电配置  
* GPS 精度过滤器不记录不可靠的点  
* 选择 wifi，移动基站和/或 GPS 卫星作为位置信息来源  
* 记录支持zip压缩格式的GPX、KML、CSV、TXT 或 NMEA 文件  
* 英制或公制显示单位  
* 启动时自动启动  
* 可以在后台运行  
* 适用于其他GPS 应用程序  
* 按用户定义的间隔自动发送到电子邮件/FTP/Dropbox/Google Docs/OpenTtreetMap/OpenGTS  
* 易于预配置文本配置文件以分发给许多用户  


用户界面
--------------------------

![Canvass1][]

** 菜单 ** 按钮提供了更多配置应用程序的选项。  
**视图下拉菜单** 允许您选择信息在屏幕上的显示方式。  
**Help** 按钮提供了有关如何使用该应用程序的其他信息。  
使用 **Annottate** 按钮可以向点添加描述。  
** 记录一点 ** 按钮可以让你手动记录航点。  
**上传**让您从各种选项中选择上传您的日志文件。这包括一个自动发送至以下任何一个选项：  

- OpenStreetMap，  
- Google Drive,  
- DropBox，  
- FTP服务器，  
- OpenGTS服务器或者  
- 将日志发送到一个电子邮件地址。  

通过 ** 共享 ** 按钮，您可以选择一个或多个日志文件，通过蓝牙或短信与其他人共享。根据设备上安装的应用程序，您可能有不同的选项供您使用。  


![Canvass2][]

** 开始登录 ** 按钮为蓝色。当你按下此按钮开始录制时，它会变成绿色按钮。  
** 坐标 ** 显示上次记录的 GPS 点，并在新坐标可用时刷新。  
**卫星** 图标将显示你连接了多少个卫星。  
** 升降 ** 显示高程数据。  
** 持续时间 ** 显示自按下开始按钮以来经过的总时间。  
** 距离 ** 将显示记录的总距离。  
** 文件类型 ** 表示生成的日志类型，而 ** 文件路径 ** 告诉您文件在设备或存储卡中的位置。  
**状态** 指示器在录制时将显示为绿色，而设备试图定位时会显示微调器。  
**Accuracy** 将显示记录数据的准确性，这些准确性因接收器、可用卫星的位置或数量、天气状况或地平线障碍物而异。  
**仪表** 告诉你移动的方向。  
**速度** 将为你提供行驶速度的大致信息。。  
**已记录的点** 将显示从按下开始按钮起记录的点总数。  


菜单
--------------------------

![Menus][]

**常规选项** 用于查找 *启动时开始*、*度量单位*（公制或英制）、*调试文件* 和 *版本信息*的设置。  

![Menus1][]

在**日志记录详细信息** 可以找到设置 *文件格式*（同时支持多种格式）、*文件夹* 日志保存路径，*创建新文件* 和 *自定义文件名* 的规则。  

![Menus2][]

![Menus3][]

在 **性能** 下，可以找到 *位置提供商*、*计时*、*过滤器* 和 *监听* 的设置。位置提供商选项允许您设置位置数据的来源：**GPS** -导航卫星；**网络** - 蜂窝塔；**被动式** - 让 GPSLogge“借用”另一个应用请求请求的位置坐标，以通过不提出请求本身来节省电池。  

![Menus4][]

![Menus5][]

**自动发送、电子邮件和上传** 设置各种上传选项的设置，例如 OpenStreetMap、Google 云端硬盘、FTP、Dropbox的位置。  

![Menus6][]

上传GPS轨迹是向OpenStreetMap项目贡献数据的另一种方式。轨迹是以不同时间或距离间隔记录的位置记录，并记录为地理坐标（经度、纬度、海拔）。它们可以在编辑地图时用作背景图层，对于向地图添加内容时非常有用，类似于航空影像。  

#### OpenStreetMap选项

![osm0][]

**允许自动发送** 设置决定是否自动上传日志文件。  
**授权此应用程序** 用于授予应用程序使用 OSM 帐户将 GPS轨迹上传到 OSM 的权限。  
在你授权应用程序上传 GPS轨迹之前，**可见性**、**描述**、**标签** 选项将被禁用。这些设置用于GPS轨迹，并将上传到OpenStreetMap数据库。  
当您点击 *授权此应用程序* 时，您将被定向到互联网浏览器和 OpenStreetMap 网站。如果您未登录，系统将要求您先登录。  

![osm2][]

登录后，你将看到如下所示的页面，用于验证应用请求以及*上传GPS轨迹的特定权限*。点击*保存更改*按钮以授权应用程序。  

![osm3][]

返回 GpsLogger 应用程序，屏幕将略有不同有更多选项可用。

![osm1][]

单击**清除授权**选项将删除上传GPS轨迹到OSM服务器的权限。  

GPS轨迹有几个*可见性*选项。*Private*轨迹以匿名形式共享包含未排序的点。*公共*轨迹显示在轨迹列表中，以匿名、未排序的点形式显示。*可追踪*轨迹以匿名形式共享，并附有已排序点的时间戳。*可识别*轨迹显示在轨迹列表中，和你的用户名关联，并附上已排序点的时间戳。  

建议你将上传的GPS轨迹的可见性设置为*可识别*。数据和元数据使其对其他用户更有用。如果你对隐私和个人安全有疑虑，请选择更合适的设置，或者根本不上传轨迹。  

文本 *描述* 可帮助其他人了解一个轨迹如何被记录。徒步记录轨迹的方式和无人机记录的方式不一样。  

*tag* 是短关键字，可用于将轨迹与项目、地点或事件关联起来。  


数据收集
---------------

### 自动收集和上传GPS轨迹

一旦正确配置，应用程序就可以在后台运行，自动录制轨迹并更具配置服务每天将它们上传。这将允许自动收集每日驾驶轨迹，帮助建立道路和行驶时间数据，供以后进行绘图或分析。配置完成后，拥有手机或其他 Android 设备的用户应该注意到该功能只对电池使用有些影响，而不必手动执行任何操作。需要进行一些测试后你会在电池使用和 GPS 轨迹的清晰度之间找到适当的平衡点。  

每天自动收集并上传到 OpenStreetMap 的示例配置，您需要调整以下设置：  

#### 常规选项  

* **从启动时开始** - 开启  

#### 记录详情  

* **登录GPX** - 开启  
* **创建新文件** - 每天一次  

#### 性能  

* **记录之前时间** - 5  
* **定位期间保持GPS开启** - 打开（每当设备需要GPS卫星时，关闭此项可能会导致GPS轨迹“跳跃”。）  
* **进移动时记录日志** - 开启  

#### 自动发送、电子邮件和上传  

* **允许自动发送** - 开启  
* **多久** - 每天输入 1440 分钟。如果您在执行时无法访问数据或 wifi，此设置可能会有问题。它应该从你启动设备或点击 “开始日志记录” 按钮开始计数，因此，如果你在早上启动它，它将在第二天早上同一时间上传。  
* **OpenStreetmap**-允许自动发送以及您想要配置的任何其他设置，如果您对 GPS 轨迹有隐私问题，请进入可见性设置进行设置。  


### 手动记录轨迹

要开始收集日志（在简单视图中），只需点击蓝色按钮即可。屏幕右上角附近将出现一个旋转图标表示试图定位卫星。右上角区域将显示一个绿色圆圈，表示记录日志。  

要随时停止记录数据，只需按绿色的 *停止登录* 按钮即可。  

#### 注释  

要向日志添加注释或说明，请单击 *Annotate* (Pencil) 图标。此选项将允许您留下文本来描述或记下与当前点相关的详细信息。  

##### 从通知栏调用注释  

也可以直接从 Android 的通知栏中调用 *Annottate* 。从通知列表中选择应用程序，然后点击 *Annottate* 按钮。  

![annotate0][]

这将显示一个输入对话框，您可以在其中输入备注的文本详细信息。

![annotate1][]

#### 日志间隔

日志间隔由 **性能** 菜单下的时间或距离设置决定。  

##### 按时间

**登录前的时间** 默认情况下设置为 60 秒。当你走路而不是乘坐车辆时，你可以将其更改为 5 或 10 秒。当你在车里时，你可以将其设置为 1 秒以生成非常准确的日志。  

##### 按距离

默认情况下，**距离过滤器** 设置为零。如果要记录从最后一个点开始的每 X 个单位的坐标，则可以将其设置为其他内容。  


上传路径
------------------

#### t到OpenStreetMap

按 *上传* 按钮，然后选择 *OpenStreetmap* 选项。将出现一个对话窗口，从可供选择的文件中选择要上传的任何内容，然后点击 *确定* 按钮。  

![upload0][]

#### 到其他选项

您可以探索其他上传选项，但不在本指南的范围之内。有关详细信息，请参阅适用于 Android 项目的 GPSLogger 网站。  


分享轨迹 
---------------

你也可以与其他人共享记录轨迹，或者你当前的位置。共享选项可能因设备或者安装在设备上的应用程序不同而不同。以下是共享选项屏幕可能的外观示例：  

![share0][]


将轨迹导出到 OpenStreetMap 编辑器
--------------------------------------------

当你完成轨迹记录后，可以将轨迹导入 JOSM（或另一个 OpenStreetMap 编辑器，如 ID）。  

将 Android 设备连接到计算机（可以使用数据线、蓝牙或互联网连接），然后复制您捕获的 GPX 轨迹（可能还有多媒体文件）。在您的设备存储中，查找文件夹 /Android/Data/com.mendhak.gpsLogger/文件下的 GPX 轨迹  

将 GPX 轨迹与 JOSM 和 ID 编辑器一起使用非常简单，就像将文件拖放到应用程序中（或者浏览器中的 ID地图编辑器）一样。  

关于iD用户的更多细节，请参见 [配置背景图层](http://learnosm.org/zh_CN/beginner/id-editor/#configuring-the-background-layer)。  

如果使用JOSM编辑器，你可以找到如何使用GPX轨迹的说明，以及JOSM中的多媒体文件，参考这部分 [Open in JOSM](http://learnosm.org/zh_CN/mobile-mapping/using-gps/#open-in-josm).  

对于其他 OpenStreetMap 编辑器，请参阅软件的文档。  


显示选项
-----------------

该应用程序可以显示 3 种不同的方式，选择最适合您的：

#### 简单视图

![view0][]

#### 详细视图

![view1][]

#### 大视图

![view2][]


小结
-------

很棒！你已经被介绍了一款轻量级、节能电池的应用程序，你可以保留在 Android 设备中来录制轨迹，然后上传到 OSM，或者在你最喜欢的 OpenStreetMap 编辑器中使用。  

Android 版 GPSLogger 是另一种在没有专用 GPS 接收器的情况下收集现场数据的工具。并且在没有活动的互联网连接的情况下收集数据。  

开始采集真实数据之前，请花一些时间练习并熟悉应用程序。  

本节介绍了使用适用于 Android 的 GpsLogger 来收集 GPS 轨迹、将轨迹上传到 OpenStreetMap 以及将这些日志传输到 PC 的概念。  


适用于安卓的 GPSLogger的官方文档
--------------------------------------------

项目常见问题列表 [FAQ] (http://code.mendhak.com/gpslogger/#faq)。

[GPSLogger]: /images/mobile-mapping/gpslogger_000.en.png
[Canvass1]: /images/mobile-mapping/gpslogger_001.en.png
[Canvass2]: /images/mobile-mapping/gpslogger_002.en.png
[Menus]: /images/mobile-mapping/gpslogger_003.en.png
[Menus1]: /images/mobile-mapping/gpslogger_003a.en.png
[Menus2]: /images/mobile-mapping/gpslogger_003b.en.png
[Menus3]: /images/mobile-mapping/gpslogger_003c.en.png
[Menus4]: /images/mobile-mapping/gpslogger_003d.en.png
[Menus5]: /images/mobile-mapping/gpslogger_003e.en.png
[Menus6]: /images/mobile-mapping/gpslogger_003f.en.png
[osm0]: /images/mobile-mapping/gpslogger_004.en.png
[osm1]: /images/mobile-mapping/gpslogger_004a.en.png
[osm2]: /images/mobile-mapping/gpslogger_004b.en.png
[osm3]: /images/mobile-mapping/gpslogger_004c.en.png
[upload0]: /images/mobile-mapping/gpslogger_005.en.png
[share0]: /images/mobile-mapping/gpslogger_006.en.png
[view0]: /images/mobile-mapping/gpslogger_007.en.png
[view1]: /images/mobile-mapping/gpslogger_007a.en.png
[view2]: /images/mobile-mapping/gpslogger_007b.en.png
[annotate0]: /images/mobile-mapping/gpslogger_008.en.png
[annotate1]: /images/mobile-mapping/gpslogger_008a.en.png