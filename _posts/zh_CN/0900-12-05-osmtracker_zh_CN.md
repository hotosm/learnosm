---
layout: doc
title: OSMTracker
permalink: /zh_CN/mobile-mapping/osmtracker/
lang: zh_CN
category: mobile-mapping
---

OSMTracker
==============

  
**本文涉及在Android中使用 OSMTracker - 这和在windows移动版中使用类似.**  
OSMTracker允许创建一条带有一组轨迹点的gpx轨迹。同时带有地理位置的音频，图片和笔记也会被记录下。

快速入门
-----------

![OSMTracker_1][]  

1. 点击十字图标创建一条新轨迹。  
2. 屏幕将改为显示按钮 - 等到它们不再变灰，这表示 GPS 已修复。  
3. 开始你的路线，当你走到需要被记录的地方时按下相应音频，照片或记录的按钮记录相应信息。  
4. 当你走完录下后，按下软盘图标来保存轨迹和轨迹点信息。  
5. 要将航迹转换成一个gpx文件，点击并按住列表中的轨迹，然后选择相应的选项。  
6. 保存轨迹、图片和记录到你的电脑中然后上传到OSM。  


安装OSMTracker
-------------------------

从 [F-Droid](https://f-droid.org/en/packages/net.osmtracker/)安装OSMTracker。  
![OSMTracker Logo][]  


OSMTracker配置
------------------------

启动OSMTracker，然后按住你Android设备上的菜单按钮，选择 **设置**  

-  **录音周期** - 选择录音周期，通常用户选择30秒.  
-  **打开声音** - 推荐打开这个选项 - 当你开始和结束录音时，会有一声“哔”的提示。  
-  **重置身份验证**. 该按钮会一直变灰直到你上传一个gpx文件和授权OSMTracker上传轨迹到你的OpenStreetMap账户中.  
- **GPS 设置**  用于Android设备选择哪种方式来获得当前地址。推荐设置成 **高精度** 模式，设备将使用 GPS、Wi-Fi和移动网络来确定地址。  
 **启动时检测GPS** 当你启动OSMTracker时，如果GPS没有开启，程序会提示你开启。
-  **忽略GPS时钟** 如果选中，程序会使用设备提供时间来而不是GPS信号提供的时间。  
-  **GPS记录间隔** 选择记录路径的时间间隔 - 推荐设置为0或1，这样会每秒记录一次位置。  

> 频率会影响电池的使用量，然而在使用这个应用时，你的屏幕很可能大部分时间都是开着的，gps也在工作，你可能也在拍照和录音，这些都会导致电池的大量消耗，建议在长时间使用的情况下，使用增强电源的设备。   

-  **外部存储(SD)目录** 默认是 /osmtracker  

> 大多数最新的Android设备将不允许在外部microSD或SD卡中保存数据。虽然被称为"外部存储"，但实际上轨道等将被记录在**/storage/emulated/0/osmtracker.**   

-  **每个轨迹一个目录** 推荐这样做是因为所有音频、图片、文字记录和gpx轨迹将一日期和时间命名被保存在同样的文件夹中。  
-  **Filename for named tracks** 选项- 你可以选择你偏爱的文命名。  
-  **GPX 文件精确度** 推荐勾选- 将返回一个包含误差范围数字的路径点结果。例如*Footpath (4.0m)*。当你上传数据到OSM时这个数据将帮助OSM来修正路线。  
-  **使用HDOP近似值** 通过额外计算来提供位置精确度 (水平精度稀释 - Horizontal Dilution of Precision).  
-  **导出Compass Heading** 勾选则compass数据将被导出到GPX文件.  
-  **默认图片源** 通过你通过新拍图片到app中，但你也可以选择相机中已存在的图片。  
-  **屏幕一直开启** 如果你经常需要上传图片或记录音频时请开启，这也会比较费电 - 如果关闭则你每次操作时需要开启屏幕。  
-  **屏幕显示风格** 当你看操作按钮困难时，通过这个选项来改变对比度和屏幕亮度来提高可视度。  
-  **预设组合按钮** 你可以设计和添加和选择你自己的按钮是否显示。参考 [以下文章](/zh_CN/mobile-mapping/osmtracker/#预设组合按钮) 来获得详细设置。   
-  **背景地图** 点击和按住一条轨迹后，你可以看见轨迹信息，app也将从OpenStreetMap下载相应背景地图。  

> 需要互联网才能下载地图。除非您愿意，否则不需要使用此功能。  

-  **瓦片地图提供商** 如果你选择下载地图数据作为显示地图时的背景，你可以选择使用哪个版本的地图作为背景。  
-  **方向**  设置允许屏幕旋转、水平或者垂直  

轨迹列表
--------------

![OSMTracker_2][]  
完成初步调查、点击按钮、创建录音和拍照后，完成后，点击软盘图标以结束您的轨迹。现在按住列表中的轨迹，可用选项如下：  

-  **恢复轨迹记录** 当你发现错误了一些轨迹记录需要重新记录时!  
-  **显示** 显示轨迹，同时可能显示背景图如果您有互联网并且你已选择了**背景地图**.  
-  **作为GPX文件导出** - 在编辑工具中编辑轨迹和轨迹点时需要用到。  
-  **上传到OpenStreetMap** 上传轨迹到OpenStreetMap - 你需要有一个OpenStreetMap账户 ([这里解释如何获得](/zh_CN/beginner/start-osm/)), 并且需要将你账户的权限授于本app。查看 [GPS Traces - gpx files below](/zh_CN/mobile-mapping/osmtracker/#gps-traces--gpx-files) 来了解为何上传轨迹对于OpenStreetMap非常重要.  

> **注意，先不要删除你的轨迹。** 你只上传了基本轨迹，没有上传航点、照片等。请保留所有内容，直到将其转移到电脑上进行编辑  

- **删除**   


预设组合按钮
--------------

如果您出于特定原因进行勘测，并且您需要的路径点标签不可用，你可以在测量旅行之前创建自己的标签按钮预设集并将它们加载到手机中，然后在需要时进行测量时进行选择相应标签 - 您可以在记录路径时随时切换他们。由于你创建的标签被记录在个人日志中，所以不需要遵守OpenStreetMap标签规则，同样也不会被上传到OSM中。例如你可以选择以下一些标签按钮：  

- 1个家庭，  
- 2个家庭，  
- 3个家庭，  
- 4个家庭，  
- 首领之家，  
- 20%的损伤，  
- 40%的损伤，  
- 60%的损伤，  
- 80%的损伤，  
- 被摧毁，  
- 不适合货车行驶，  
- 需要四驱车，  
- 等等..  

点击这里 [OSMTracker wiki章节](https://github.com/nguillaumin/osmtracker-android/wiki/Custom-buttons-layouts) 查看如何创建预设组合按钮，这是示例文件：[下载示例文件。](/files/R_of_Way.xml)  

![OSMTracker button presets][]  


音频记录、照片和文本图片大小  
-----------------------------------------------  

![OSMTracker recorded file sizes][]  

如果稍后阶段的文件传输是一个问题，请注意所涉及的文件大小 - 因为截图显示，与 gpx 文件或 10 秒录音相比，照片内存消耗大。  


GPS 路径 - gpx 文件
----------------------  

![OSMTracker JOSM][]  

在gpx文件中，GPS轨迹由许多元素如‘轨迹’和‘轨迹点’组成。上图截屏中显示一个由OSMTrack工具创建并已被上传到JOSM中配以卫星影像显示等待编辑的轨迹。轨迹正中的方形图标显示有一张照片 - 点击方形图标显示图片  

如果你正在导航并使用 GPS 给你提供路线，你会在某个时候注意到它将 “重新计算”。这通常是因为其内部 GPS 位置与其预期道路或路径的位置不对应  - 存在误差，道路和路径很容易被创建在稍微错误的位置，之后在创建地图数据后也很容易修正道路。  
志愿者们更新OpenStreetMap地图可以下载一个地区所有已经存在的路径并用它们：  

1. 绘制由于云层、树木、阴影、建筑物等原因无法通过卫星影像看到的地区的道路和路径。  
2. 调整卫星影像，使其正确对齐 - 有些图像可能会有惊人的变化。  

尽管单个 gpx 路径非常有用，但它可能不是特别精确有时候可能达 30 米误差。当有几条路径时，则正确路线很容易被选出 - 例如，请参阅下面的屏幕截图，其中显示了城镇中 一些gpx 路径，其中主要道路可以通过路径的数量看到。  

![OSMTracker_gpx][] 




[OSMTracker Logo]: /images/mobile-mapping/osmtracker_logo.png
[OSMTracker_1]: /images/mobile-mapping/OSMTracker_1.png
[OSMTracker_2]: /images/mobile-mapping/OSMTracker_2.png
[OSMTracker button presets]: /images/mobile-mapping/OSMTracker_presets.png
[OSMTracker recorded file sizes]: /images/mobile-mapping/OSMTracker_files.png
[OSMTracker_gpx]: /images/mobile-mapping/OSMTracker_gpx.png
[OSMTracker JOSM]: /images/mobile-mapping/OSMTracker_JOSM.png