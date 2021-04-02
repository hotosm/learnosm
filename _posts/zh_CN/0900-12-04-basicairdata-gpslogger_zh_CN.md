---
layout: doc
title: BasicAirData GPS Logger
permalink: /zh_CN/mobile-mapping/basicairdata-gpslogger/
lang: zh_CN
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

> 已审核 2020-05-05

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger是一款简单的应用，可以记录你的位置和路径。它是一款基础的轻量级GPS追踪器，注重准确性，注重省电。如果你在设置中启用EGM96自动高度修正，这款应用在确定你的高度方面非常准确。你可以记录你的所有行程，直接从应用程序内的轨迹列表中用你喜欢的外部查看器（必须安装）查看，并以KML、GPX和TXT格式以多种方式分享。

该应用程序适用于Android设备，免费且开源。

该应用程序可以从 [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger)下载。<br>
作为替代方案，APK可以直接在GPSLogger的 [GitHub仓库](https://github.com/BasicAirData/GPSLogger/tree/master/apk)下载。

特点
--------

![BasicAirData-GPSLogger-000][]

* 记录轨迹 - 该应用程序没有内置地图
* 现代化的UI，低能耗的深色主题和标签式界面。
* 在前台和后台记录（在Android 6+以上的版本，请关闭此应用程序所有的电池监测和优化）
* 记录时也可创建标记
* GPS信息的可视化
* 手动高度修正（增加整体偏移量）
* 基于NGA EGM96地球大地水准面模型的自动高度修正（必须在设置中启用）。
* 实时轨迹统计
* 应用程序内轨迹列表展示已录制的轨迹。
* 使用任何已安装的KML/GPX查看器，直接从轨迹列表中查看您的轨迹
* 在你的设备的/GPSLogger文件夹中以KML、GPX和TXT格式导出轨迹
* 通过电子邮件、Dropbox、Google Drive、FTP等方式共享KML、GPX和TXT格式的轨迹
* 使用公制、英制或航海单位。

基础用法
-----------

![BasicAirData-GPSLogger-001][]

如果手机上的GPS定位没有激活，请激活它。然后到一个空旷的地方，启动GPS Logger。

1. 等到应用程序找到修复点。如果有的话，__GPS FIX__选项栏将开始显示修复点的坐标。此时（在可能的情况下），你应该至少再等一分钟，然后再进行下一个阶段，以便让信号稳定下来。
2. 点击底部面板的__Trackpoints__按钮，开始记录轨迹点。该按钮将变成红色。你可以在任何时候通过点击该按钮打开或关闭记录过程。该按钮显示记录的轨迹点数量。
您可以进入__TRACK__标签栏，实时查看你的行程统计。
3. 当你的行程结束后，双击位于右上角附近的小__V勾__来最终确定（结束）活动轨迹。
4. 进入__TRACKLIST__标签栏，在那里你会找到你刚刚录制的轨迹。点击该轨迹。将会出现一个菜单。你可以选择以多种方式共享该轨迹，使用已安装的外部查看器查看，将其导出到智能手机的/GPSLogger文件夹中，或者从轨迹列表中删除。导出时使用的格式可在设置界面进行配置。

在OpenStreetMap编辑器中导入GPX轨迹
--------------------------------------------

当你收集完实地数据后，你可以将GPX轨迹导入JOSM、iD或其他OpenStreetMap编辑器中使用。
你可以使用这2个简单的步骤：

1. 以下列方式之一将GPX轨迹保存在你的个人电脑上：
* 在GPS Logger的轨迹列表中，点击所需的轨迹，然后点击__导出__；GPX文件将被创建并保存在你的Android设备的/GPSLogger文件夹中（确保在设置界面上启用GPX格式）。然后使用USB数据线将手机与电脑连接，并使用文件管理器在电脑上移动（或复制）GPX轨迹。
* 作为替代，你可以使用__分享__功能将文件发送到电脑上（你可以通过电子邮件、FTP或使用许多云服务来实现）。如何分享取决于你的Android设备上安装的第三方应用程序。
2. 将GPX轨迹导入到你的OpenStreetMap编辑器中：在JOSM和iD编辑器中使用GPX轨迹很简单，只需将文件拖拽到应用程序中（或iD的浏览器标签）。

官方文档
----------------------

- 有关此应用程序的详细信息，请阅读 [这篇文章](http://www.basicairdata.eu/projects/android/android-gps-logger/)。<br>
- 你可以[在这里](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) 找到入门指南和应用程序设置概述<br>
- 使用或配置GPS Logger时出现问题？阅读 [常见问题](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) 页面！

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg