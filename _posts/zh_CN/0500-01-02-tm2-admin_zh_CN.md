---
layout: doc
title: Tasking Manager 2 新建项目
permalink: /zh_CN/coordination/tasking-manager-project-admin/
lang: zh_CN
category: coordination
navigation: skip
---

**如果您使用的版本的用户界面与此处描述的用户界面不同，那么您应该查阅 [版本概述](/zh_CN/coordination/tm-disambiguation)**

# OSM Tasking Manager 2 项目管理

OpenStreetMap Tasking Manager 2对于执行地图马拉松、管理HOT动员或为新手测绘人员创建Tasking Manager至关重要。Tasking Manager将工作划分为可管理的地理区块，从而减少了编辑冲突，尤其是对于大量不同地区的测绘人员而言。Tasking Manager 还通过为测绘人员提供一套一致的指令（例如 '绘制所有道路和建筑物'），从而帮助测绘准确性和数据质量。简而言之，Tasking Manager是您设置和指导开放式绘图活动的工作流程的方式。本模块介绍了OSM  Tasking Manager的基本管理，以便成功开展测绘活动。 

 本指南专为需要 OSM Tasking Manager 的管理说明的人编写，包括为开放测绘事件（即 “地图马松”）创建和修改测绘项目的人员。本指南适用于 OSM Tasking Manager的所有实例，包括 HOT Tasking Manager <http://tasks.hotosm.org/> 和 TeachoSM Tasking Manager<http://tasks.teachosm.org/>。OSM Tasking Manager的其他实例的列表可以在 [OpenStreetMap wiki] 找到 (http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager#Operational_installations_of_the_Tasking_Manager)

HOT 或 OSM Tasking Manager通常被称为 **TM2，** 作为Tasking Manager版本2的缩写。 

## 登录和访问级别
首先要了解的是访问级别。对 TM2 的所有访问权限均通过 <https://www.openstreetmap.org> 进行授权。要访问 TM2，你需要一个 OpenStreetMap (OSM) 帐户。拥有此帐户后，请访问 <http://tasks.hotosm.org/>，然后单击 **登录到 OpenStreetMap**，这将引导您返回到 OSM 页面，您可以在该页面授权Tasking Manager对您的 OSM 帐户进行有限访问。 

### OSM Tasking Manager 2中的访问级别
OSM Tasking Manager 2 有三个用户访问级别：
-  **用户** - 最基本的级别。用户可以登录TM2并使用其功能查找和选择测绘项目并进行处理。这种使用级别在 [LearnOSM 中的OSM Tasking Manager指南](/zh_CN/coordination/tasking-manager/)中详细描述。请注意，某些项目，例如处于草稿（即未发布）状态的项目对用户不可见。  
-  **项目经理** - 项目经理有权在TM2中创建和更新项目。  
-  **管理员** - 管理员拥有允许他们管理TM2中用户的访问级别的访问权限。
您需要项目经理访问级别才能使用 TM2 创建新项目。

## 在 TM2 中启动一个新项目 

![TM New][]

单击右上角的用户名，然后单击 **创建新项目。** 然后，您可以选择在地图上绘制感兴趣区域，或从文件导入边界框；  

![TM Draw or Import][]

> 导入具有定义区域的文件始终比手绘Tasking Manager项目更可取。JOSM、QGIS 等工具可用于创建要导入到Tasking Manager的文件。

#### 画一个感兴趣的区域进行测绘

![TM Draw][]

1.点击右上角的 “绘制” 按钮。
2.要绘制表示地图框中感兴趣多边形区域，请按住鼠标右键以移动地图而不单击，这将添加一个节点。多边形应严格限制在感兴趣的区域。这可以节省完成不感兴趣瓦片（例如海洋、森林）的时间  
3.点击你的起点以完成多边形  

或者

#### 上传要测绘的感兴趣区域的 GeoJSON 或 KML 文件  

1.点击 “导入” 按钮，  
2.在 “文件上传” 窗口中浏览至您的文件，  
3.单击文件名以高亮显示该文件，然后单击 “打开”。  


### 任务方形

文件上传或手绘定义的感兴趣区域将显示在地图框中，然后将要求您选择如何将感兴趣区域划分为单个任务。有两种选择：  

1.方形网格-Tasking Manager将在完全相同大小的任务方块中统一划分整个项目区域。对于一般群体绘图项目来说，这通常是一个非常好的主意。
2.任意几何-如果您上传了文件来定义项目区域，则该文件还可以包含单个任务的形状。在测绘中必须特别需要创建自定义任务形状。例如，导入道路项目可能需要自定义任务形状。

### 使用方形网格作为任务方块
要创建统一的方形瓦片，请选择方形网格选项，然后单击下一步。  
感兴趣区域会自动拆分为网格单元格，每个单元格都成为一项任务。项目面积越大，由此产生的方块就越大。根据五个相对瓦片大小选项确定最佳瓦片大小。因此，较小的瓦片大小将导致更多任务，如屏幕截图所示。因此，最佳瓦片大小将取决于区域的大小（为大型项目创建更小的瓦片）和可能需要在每个瓦片中测绘的要素数量。一般来说，随着感兴趣区域的大小和/或可能的要素数量的增加，为项目选择的瓦片大小应该减小。 

![TM Tile Sizes][]{: width="1500"}

***决定瓦片大小之前的注意事项***

-地图马拉松(mapathon)的新手测绘人员将以大约相当于经验丰富测绘人员的四分之一的速度绘制区域（许多地方的开始速度要慢得多，但很快就会变得更快）。 
-一个新手测绘人员发现在卫星影像中搜索要素与实际绘制它们一样困难。在圆形灌木区域寻找天然材料茅草的圆形小屋对于 “新比” 来说是一条陡峭的学习曲线。
-新的测绘人员还发现很难追踪诸如建筑物等许多要素。
-在此过程的后期，您有机会让测绘人员 “拆分” 一个方形-将方形拆分为几个可以帮助新的测绘人员获得他们能够应对的方形面积。  
-方形中最有可能出现问题的部分是边缘和角落。因此，较小的方格意味着越多的角和边缘，并将导致测绘的重复以及遗漏对象。权衡你制作方形的大小程度，这可能会使新手测绘人员工作变得更容易，并且由于边角和边缘更多，错误也会增加。
-一个方形可能会被拆分，但之后没有选项可以将方形连接在一起以使它们再次变大。所以拆分时要小心
-  ** 结论** 尝试自己绘制项目的某个区域，看看它有多容易以及将面临什么困难。这应该有助于你决定最佳的方形尺寸。允许拆分，但不是无限大 - 一些新手测绘人员会持续分割方格，直到它们太小以至于变得非常难以进行测绘。  

### 任意几何形状
如果您上传了文件来定义项目区域，则该文件还可能包含有关您希望项目各个任务的确切形状的信息。如果 AOI 由一个多边形组成，则该项目将只有一个任务。一般是为特定场景而通常不需要这样做。

### 关于影像的注意事项

在大多数情况下，我们使用 “标准” Bing图像。但是有些情况下你可能想要选择替代来源：

1.Bing不为您感兴趣的区域 (AOI) 提供高分辨率覆盖。
2.Bing在这个地区有相当大的云覆盖面。
3.灾后评估需要更新的图像。

如果Bing证明不够用，那么 Mapbox 是下一个选择。只有当这两个来源都不符合您的要求时，您才应该寻找其他来源。

在这种情况下，仅仅选择一个与许可证兼容的来源并通过WMS或TMS服务提供是不够的。你的AOI可能已经用Bing或Mapbox的图像进行了部分测绘，图像之间可能存在明显的偏移。你必须仔细观察你的AOI的各个位置，并确定你的图像和以前绘制的数据之间的偏移。如果现有的OSM数据与你的影像有偏移，但与Bing的影像相吻合，那么我们通常认为Bing是 "黄金标准"，除非我们有GPS轨迹证明这个假设是错误的。

如果你的图像和Bing在整个AOI之间有一个恒定的偏移，那么这可能会在服务器上得到纠正，从而使编辑器中加载的各种来源的图像相匹配。如果偏移量在整个AOI上有所不同，或者现有的数据与各种来源的数据是一致的，那么是时候实施B计划了。

重要的一点是，您必须制定一个如何应对这些问题的策略，并为测绘人员和审核者提供详细的指导。我们强烈建议你宣布这样的项目"只适合有经验的绘图者"，并解释说，在这种情况下，经验并不是已经绘制了200多栋建筑，而是已经处理了对齐问题和不同的影像来源。

一个可能的策略可以包括以下步骤：

1. 明确说明哪种影像被认为是参照物，其他任何东西都应该与之保持一致。在这种情况下，让我们假设参照物是Bing。
2. 确保所有在Bing上能看到的现有特征与Bing影像保持一致，即必要时重新调整。
3. 使用编辑器的影像偏移功能，将替代影像与现有特征(从而与Bing)对齐。
4. 从正确对齐的替代影像中添加新的特征。

重要的是，项目的每项任务都要重复步骤3，而且单个任务方块不应过大，因为影像偏移在整个AOI中可能会有很大的不同，特别是在地形不平坦的情况下。甚至影像不连续的情况也可能在整个项目中出现 - 注意这些情况，并将这种问题告知贡献者。

这里有一些建议，你可以在项目说明中加入：

- [编辑人员的一般准则](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [关于iD中影像对齐的gif动画](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [learnOSM中的josm影像调整章节](http://learnosm.org/zh_CN/josm/correcting-imagery-offset)

## 创建项目 & 添加说明
选择瓦片尺寸后，点击“创建项目”。 

![TM Create Project][]

这样就在Tasking Manager中建立了项目，并打开一个屏幕，在这个屏幕上可以提供项目的描述、说明和其他信息。请记住，这一点一定不能低估。相当一部分绘图者（在许多情况下是大多数）之前没有使用OpenStreetMap和/或HOT的经验，因此不熟悉标记指南。因此，明确项目的目标，并在此列出所有测绘人员应考虑的资源是非常重要的。通常建议将一个项目限制在一类要绘制的对象上。如果你需要一个区域的底图，最好把它分成几个项目，一个项目用于道路，一个项目用于建筑物等。现在，初学者可以专注于一小类对象，同时学习如何正确地绘制它们。否则，你可能最终会得到很多瓦片，这些瓦片包含了所有的东西，但没有真正完整的东西。

由于你的目标受众可能不是以英语为母语的人，因此请使用简单的语言。

1. 项目的标题应该已经揭示了应该绘制哪些实体。最好采用如下标题 
*#1396 - Missing Maps: 尼日利亚尼日尔州(北部)(项目1：道路和居民区)*
2. 最重要的信息应首先出现在说明标签栏上，以确保它们被阅读。这包括使用任何特殊的影像，而不是Bing。第一句话可以提到，例如，如果项目是关于道路和住宅区，则不需要绘制每一栋房子的地图。或者，如果项目要用于人口密度估计，则需要绘制每一栋房子的地图。这些信息也应该出现在描述标签栏上。
3. 其他需要说明的问题。如果该项目只适合有一定经验的测绘人员。例如，该项目使用导入数据或现有数据应为GPS轨迹或其他一些影像（参见上一节）重新调整。措辞要让新的测绘人员感到被邀请为其他项目作出贡献，但要明白在这种情况下需要高级技术。
4. 有一些准则涵盖了我们在验证时看到的常见错误。一个例子是Blake Girardot关于 [西非制图](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips)的汇编。在说明中使用该链接，并解释说明需要遵守这些准则。
5. 标记标签方面的权威资源是 [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features)。对于许多与HOT相关的任务， [标记非洲公路的标签](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)的网页是合适的专业资料，强烈建议每个测绘人员阅读。如果你的项目必须遵守不同的标记标签标准，那么就在wiki中写一个类似的页面，并在你的说明中链接它。

<!--Hidden Text - Google discussion group on TM - https://groups.google.com/a/hotosm.org/forum/?utm_medium=email&utm_source=footer#!msg/tm-project-managers/5OVNGMBsQv0/01Wxw95cBwAJ 

关于TM开发和代码更新的Youtube视频 = https://www.youtube.com/watch?v=hFFlrm9wKcA
来自Pete Masters的电子邮件
嗨，Polyglot，为了以防万一，当Pierre Giraud访问伦敦时，我们与他合作，对任务管理器做了一个技术介绍。如果你有兴趣的话，就在这里：https://www.youtube.com/watch?v=hFFlrm9wKcA

干杯，

Pete


在创建任务之前
此任务是否应该是缺失的地图任务？ 
Will the project have a direct field mapping component?
Is the project disaster related? 
If yes it should be a HOT project not Missing Maps. Contact the activation lead.
Is the project backed by one of the existing Missing Maps members?
Is the imagery high quality without clouds?
If no contact ARC to see if they can help get new imagery from US Department of State
Task Creation Process
To create a new project, you must be logged into the Tasking Manager - use your OpenStreetMap account username & password. Note that you must have certain permissions assigned to your OpenStreetMap account in order to create a new project in the Tasking Manager.  Open your Internet browser and go to tasks.hotosm.org. You will see a page like this:


Once you are logged in, click on your username in the upper right hand corner.
In the drop down menu, click “Create a New Project”.

There are two options for creating a project: 
Draw an area of interest to be mapped
Upload a GeoJSON or KML file of the area of interest to be mapped

Option 1 - Draw
Click the ‘Draw’ button
Draw a polygon representing the area of interest in the map frame (right click; keep the right click pressed to move the map without adding a node)
Note: the polygon should tightly fit the area of interest. This saves time for completing tiles that are not of interest (i.e. ocean, forest)

Double click to complete the polygon

Option 2 - Import GeoJSON or KML
Click the ‘Import’ button

Browse to your file in the File Upload window
Click the file name to highlight the file and then click ‘Open’.

The area of interest defined in the GeoJSON or KML file will appear in the map frame, and you will then be asked to choose how the area of interest is split into individual tasks.  There are two options:
Square Grid - AOI is automatically split into grid cells and each cell becomes a task.
Arbitrary Geometries - Each individual polygon in the AOI represents an individual task.  If the AOI consists of one polygon, the project will have just one task.
Note: this guide only covers the square grid option.

Select the Square Grid option and click next.
Determine the optimal tile size based on the five Tile Size options. Important: the size of tiles is relative, i.e. the same size level will be bigger on a large project than on a small one (“S” or “M” tiles are thus not always of the same size). Note that each polygon will become a single task.  As such, a smaller tile size will result in more tasks as shown in the screenshots below.  The optimal tile size will therefore depend both on the size of the area (create smaller tiles for a large project) and the number of features that will likely need to be mapped within each tile.  Generally speaking, as the size of the area of interest and/or the number of likely features increases, the tile size chosen for the project should decrease. The ideal size of a square is roughly 45 min - 1 hour of work. At larger mapathons or in denser cities smaller tasks (~20 min) are better.



After choosing a tile size, click “Create Project”.  This establishes the project in the task manager and opens a screen where you can provide the descriptions, instructions and other information about the project if needed.  
On the ‘Description’ tab:
set the Priority appropriately
name the project using the “Name of the Project” text box
If the task is specifically for the Missing Maps effort, use the following naming convention:  Missing Maps: <Location/Project Name>
provide a description in the ‘Description’ box.  Note: formatting in the Description box is based on ‘Markdown’.  Tips for using ‘Markdown’ can be found by clicking the ‘Markdown’ link below the Description box. Note: it is necessary to add a blank line between paragraphs to separate them.
If you are creating a task specifically for the Missing Maps project, include the following language as part of the description: ‘The Missing Maps project aims to map the most vulnerable places in the world (affected by humanitarian crises: disease epidemics, conflict, natural disasters, poverty, environmental crises). Building on HOT's disaster preparedness projects, the Missing Maps tasks facilitate pre-emptive mapping of priority countries to better facilitate disaster response, medical activities and resource allocation when crises occur.’



On the ‘Instructions’ tab:
list the features that need to be mapped in the “Entities to Map” box, e.g. buildings and primary roads.
in the ‘Changeset Comment’ box, enter the changeset comment that mappers should use when uploading the data they have mapped.  The comments should indicate various things about the project.  E.g., the comment ‘Bukama, #DRC #hotosm-project-1145 #MissingMaps #Bing’ indicates the location of the task, the project number, that the project is specifically for Missing Maps, and that Bing imagery is being used for the task.  Changeset comments will obviously vary by project, but should generally be used as a quick indicator/description of the project.
enter detailed instructions that the mappers need to follow in the “Detailed Instructions” box.  At a minimum, detailed instructions must indicate what features to map, how to tag the features, and the imagery source to be used in this project.  Other details should be included as appropriate.  Note: formatting in the Description box is based on ‘Markdown’.  Tips for using ‘Markdown’ can be found by clicking the ‘Markdown’ link below the “Detailed Instructions” box.
Add to the detailed instructions if there is any cloud coverage that might hamper the mapping of tiles. Request mappers to mention cloud coverage in the comment field, and mark the task as done.
If appropriate, enter additional information specific to tasks in the “Per Task Instructions (Optional)” box.  This will be used if anything needs specific needs to be done for individual tasks within the project.  


On both ‘Description’ and ‘Instructions’ tabs, you can translate the content by clicking on the language icon above the text boxes (en, fr, etc.). If no text is entered for language, the default language (English) will appear instead. You’ll notice that the different text boxes don’t switch languages at once when you select it on one, you’ll need to select the language you want to edit on each box individually.

The ‘Area’ tab is not yet functional.

The ‘Imagery’ tab can be used if an imagery source other than the standard OSM imagery sources in OSM needs to be used.  There are also various licensing options via the Required License dropdown if a special license is required for the alternate imagery source.

The “Priority Areas” tab is used to define priority areas for the task if necessary.  This is done by manually drawing the priority areas in the map frame.  Once saved these areas will be shown  as high priority on the map on the main project page.  Tools are also available on the ‘Priority Areas’ tab to edit or delete an existing high priority area.

If necessary, access to the new project can be limited to a certain group of users via the “Allowed Users” tab.  In order to limit access, first click in the check box next to “Private”.  Then enter the username of a user that should have access in the “Allowed Users” text entry box and click the “Add User” button.  Repeat for additional users that need access.  Note: In order for the user's name to be available to add to the Allowed Users - they first must visit the URL for your instance of OSMTM and Authorize access to their OpenStreetMap account. After they've done this, their username should be available for the administrator to add. 

The “Misc” tab provides options to add a due date and a JOSM preset.  The due date can be entered in the “Project due date” box and represents the date after which the project will automatically be archived.  Users can also load a JOSM preset XML file to assist with tagging if appropriate.  

After entering the description, instructions, and any necessary information on the other tabs, click on “Save the Modifications”, which will take you back to the main project page.  

Out of date wiki entry - for update when this guide complete  http://wiki.openstreetmap.org/wiki/Tasking_manager_admin
- end of hidden text-->
  
### 校对和发布
Proofread the various tabs to ensure wording and formatting are correct, and instructions are clear. If you need to make changes or refinements to your project, click the ‘Edit’ link in the upper right hand corner of the page. 

![TM Edit Project][]

If the project is ready for mapping, click the ‘Publish’ link. Once the project is published, it is available for mapping to anyone with an OSM account, unless a group of users was specified in the ‘Allowed Users’ tab, in which case only the allowed users would be able to work on it.  If necessary, edits can still be made to the project after publication by clicking on the ‘Edit’ link.

[TM Tile Sizes]: /images/coordination/TM_tile_sizes.png
[TM New]: /images/coordination/TM_create_new.png
[TM Draw or Import]: /images/coordination/TM_draw_or_import.png
[TM Draw]: /images/coordination/TM_draw.png
[TM Create Project]: /images/coordination/TM_create_project.png
[TM Edit Project]: /images/coordination/TM_edit_link.png