---
layout: doc
title: OSM Tasking Manager Project Admin
permalink: /en/coordination/tasking-manager-project-admin/
lang: en
category: coordination
---
> This guide may be downloaded as a stand-alone module: [tasking-manager-admin_en.odt](/files/tasking-manager-admin_en.odt) or [tasking-manager-admin_en.pdf](/files/tasking-manager-admin_en.pdf) 


# OSM Tasking Manager Project Admin

The OpenStreetMap Tasking Manager is essential to conducting a mapathon, managing a HOT activation, or creating mapping tasks for student mappers. The Tasking Manager divides the work into manageable geographic chunks, which reduces editing conflicts, especially with large numbers of distributed mappers. The Tasking Manager also helps mapping accuracy and data quality by providing a consistent set of instructions for your mappers (e.g. 'map all roads and buildings'). In short, the Tasking Manager is how you set up and direct the workflow for open mapping activities. This module describes the basic administration of the OSM Tasking Manager for successful mapping events. 

 This guide is specifically written for those persons who need instructions on administration of the OSM Tasking Manager, including the creation and modification of mapping projects for open mapping events, i.e. 'mapathons'. This guide is applicable to all instances of the OSM Tasking Manager including the HOT Tasking Manager <http://tasks.hotosm.org/> and the TeachOSM Tasking Manager <http://tasks.teachosm.org/>. A list of other instances of the OSM Tasking Manager can be found at [the OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager#Operational_installations_of_the_Tasking_Manager)

The HOT or OSM Tasking Manager is frequently referred to as **TM2,** as a shorthand for Tasking Manager, version 2. 

## Logging in & Access Levels
The first thing to understand is access level. All access to TM2 is authorized through <https://www.openstreetmap.org>. To access TM2 you will need an OpenStreetMap (OSM) account. Once you have this account visit <http://tasks.hotosm.org/> and click **Login to OpenStreetMap**, which will refer you back to the OSM page where you can authorize the Tasking Manager to have limited access to your OSM account. 

### Access Levels within the OSM Tasking Manager
The OSM Tasking Manager has three user access levels:
-  **User** - The most basic level. The user is able to login to TM2 and use its functionality to find and select a mapping project and work on it. This level of usage is fully described in [The OSM Tasking Manager guide within LearnOSM](/en/coordination/tasking-manager/). Note that some projects, such as those in draft (i.e. unpublished) state are not visible to users.  
-  **Project Manager** - Project managers have access to create and update projects within TM2.  
-  **Administrator** - Administrators have access that allows them to manage access levels of users within TM2.
You will need Project Manager Access level to create new projects using TM2.

## Initiate a new Project within TM2 

![TM New][]

Click your username in the upper right corner, then **Create a New Project.** You then may choose between drawing your area of interest on the map, or importing a bounding box from a file;  

![TM Draw or Import][]

> Importing a file with a defined area is always preferable to hand drawing a Tasking Manager project. Tools like JOSM, QGIS, etc can be used to create files for importing into the Tasking Manager.

#### Draw an area of interest to be mapped

![TM Draw][]

1. Click the ‘Draw’ button in the upper right corner.
2. To draw a polygon representing the area of interest in the map frame hold the right mouse button down to move the map without clicking, which will add a node. The polygon should tightly frame the area of interest. This saves time for completing tiles that are not of interest (i.e. ocean, forest)  
3. Click on your starting point to complete the polygon  

or

#### Upload a GeoJSON or KML file of the area of interest to be mapped  

1. Click the ‘Import’ button,  
2. Browse to your file in the File Upload window,  
3. Click the file name to highlight the file and then click ‘Open’.  


### Task Squares

The area of interest defined by the file upload or hand drawn will appear in the map frame, and you will then be asked to choose how the area of interest is split into individual tasks.  There are two options:  

1. Square Grid - The Tasking manager will uniformly divide up the overall project area in exactly the same sized task squares. This is usually a very good idea for general crowdmapping projects.
2. Arbitrary Geometries - If you uploaded a file to define your project area, that file can also contain the shapes for the individual task. There has to be a special need in the mapping to create custom task shapes. An import of roads project might need custom task shapes for example.

### Using the Square Grid for task squares
To create uniform square tiles, select the Square Grid option and click next.  
The area of interest is automatically split into grid cells and each cell becomes a task. The larger the project area, the larger the resulting squares will be. Determine the optimal tile size based on the five relative tile size options. As such, a smaller tile size will result in more tasks as shown in the screenshots.  The optimal tile size will therefore depend both on the size of the area (create smaller tiles for a large project) and the number of features that will likely need to be mapped within each tile. Generally speaking, as the size of the area of interest and/or the number of likely features increases, the tile size chosen for the project should decrease. 

![TM Tile Sizes][]{: width="1500"}

***Considerations before deciding on tile sizes***

-  A brand new mapper at a mapathon will map an area at roughly a quarter of the speed of an experienced mapper (many start off far slower, but soon get faster),. 
-  A new mapper finds it as hard to search for features in the satellite imagery as they do to actually map them. Finding round huts thatched with natural materials in an area of round bushes is a steep learning curve for a 'newbie'.
-  A new mapper also finds it difficult to trace lots of features such as buildings.
-  Later in the process you have the opportunity for a mapper to 'split' a square - splitting a square into quarters helps new mappers get a square size they can cope with.  
-  The most likely part of a square for problems to occur is at the edges and corners. Therefore smaller squares means more corners and edges and will result in duplication of mapping as well as objects being missed. There is a tradeoff in how small you make the square, which may make it easier for the new mapper and an increase in errors because there are more corners and edges.
-  A square may be split, but there is no option to join squares together to make them bigger again. So be careful when splitting
-  **Conclusion** Try mapping an area of the project yourself to see how easy it is and what difficulties will be faced. This should help you to decide on an optimum square size. Allow splitting, but not to infinity - some new mappers continually split squares until they are so small that it becomes extremely difficult to map.  

### Arbitrary Geometries
It is possible if you uploaded a file to define your project area, it could also contain information about the exact shapes you want your project's individual tasks to be.  If the AOI consists of one polygon, the project will have just one task. This is generally not needed and should only be needed for specific needs.

### Considerations concerning Imagery

In most cases we use the "standard" Bing imagery. But there are situations where you might want to choose an alternative source:

1. Bing does not provide high-resolution coverage for your area of interest (AOI).
2. Bing has considerable cloud cover in this area.
3. You need newer imagery for post-disaster evaluation.

If Bing does not prove adequate then Mapbox is the next choice. You should only look for other sources if neither of these two meet your requirements.

In such cases it is not sufficient to choose a license-compatible source and make it available through a WMS or TMS service. Your AOI has probably already been partially mapped using Bing or Mapbox imagery and there might be a noticeable offset between images. You must have a close look at various locations of your AOI and determine the offset between your imagery and previously mapped data. If the existing OSM data are offset with respect to your imagery but fit Bing imagery then we usually assume that Bing is the "gold standard" unless we have GPS traces which prove that this assumption is wrong.

If there is a constant offset between your imagery and Bing across the AOI then this might be corrected on the server so that images from various sources loaded in the editor match. If this is not possible, if the offset varies across the AOI or if existing data are aligned with various sources then it is time for plan B:

The important point is that you must develop a strategy for how to cope with these issues and provide detailed instructions to mappers and validators. We strongly suggest that you declare such a project "for experienced mappers only" and explain that experience in this case does not mean having mapped 200+ buildings but having already dealt with alignment issues and different imagery sources.

One possible strategy could include these steps:

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Bing.
2. Make sure that all existing features which are also visible on Bing are aligned with Bing imagery, i.e. realign if necessary.
3. Align the alternative imagery to existing features (and thus to Bing) using the imagery offset function of the editor.
4. Add new features from the now correctly aligned alternative imagery.

It is important that step 3 is repeated for every task of the project and the individual task squares should not be too large because imagery offsets can vary considerably across an AOI, particularly if the terrain is not flat. Even imagery discontinuities may occur across a project - look out for them and advise the contributors of such a problem.

Here are some suggested bits of information which you might include in the project instructions:

- [general guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [an animated gif on imagery alignment in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [the josm imagery alignment chapter in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)

## Create the project & add description
After choosing a tile size, click “Create Project”. 

![TM Create Project][]

This establishes the project in the task manager and opens a screen where you can provide the descriptions, instructions and other information about the project. Keep in mind that this must not be underestimated. A fair share of mappers (in many cases the majority) will have no previous experience with OpenStreetMap and/or HOT and will thus not be familiar with tagging guidelines. It is very important that the objectives of the project are clear and that all resources which the mappers should take into account are laid out here. It is often advisable to confine one project to one class of objects to be mapped. If you need a basemap of an area better split it in several projects, one for the roads, one for the buildings etc. Now beginners can focus on a small class of objects while learning how to map them correctly. Otherwise you might end up with lots of tiles which contain a bit of everything but nothing really complete.

Please use plain language as your target audience may not consist of native English speakers.

1. The title of the project should already reveal what entities should be mapped. Prefer a title such as 
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. The most important messages should appear on the instruction tab first to ensure they are read. This would include any special imagery to use instead of Bing. The first sentences could mention that it is not required to map every single house if the project is about roads and residential areas, for example. Or that it is required to map every house if the project is to be used for population density estimates. These are the messages that should also appear on the description tab.
3. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery (cf. the previous section). Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
4. There are guidelines that cover common errors we see while validating. One example is Blake Girardot's compilation on [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Use the link in the instructions and explain that adhering to these guidelines is required.
5. The definitive resource on tagging is the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). For many HOT-related tasks the page on [tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) is the proper specialization and highly recommended reading for every mapper. If your project must adhere to different tagging standards then write a similar page in the wiki and link it in your instructions.

<!--Hidden Text - Google discussion group on TM - https://groups.google.com/a/hotosm.org/forum/?utm_medium=email&utm_source=footer#!msg/tm-project-managers/5OVNGMBsQv0/01Wxw95cBwAJ 

Youtube video concerning the development & code updates for TM = https://www.youtube.com/watch?v=hFFlrm9wKcA
from email by Pete Masters
Hi Polyglot, just in case it is useful, we worked with Pierre Giraud when he visited London to do a tech introduction to the tasking manager. It's here if you're interested: https://www.youtube.com/watch?v=hFFlrm9wKcA

Cheers,

Pete


Before Creating a Task
Should this task be a Missing Maps Task? 
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
  
### Proofread and Publish
Proofread the various tabs to ensure wording and formatting are correct, and instructions are clear. If you need to make changes or refinements to your project, click the ‘Edit’ link in the upper right hand corner of the page. 

![TM Edit Project][]

If the project is ready for mapping, click the ‘Publish’ link. Once the project is published, it is available for mapping to anyone with an OSM account, unless a group of users was specified in the ‘Allowed Users’ tab, in which case only the allowed users would be able to work on it.  If necessary, edits can still be made to the project after publication by clicking on the ‘Edit’ link.

[TM Tile Sizes]: /images/coordination/TM_tile_sizes.png
[TM New]: /images/coordination/TM_create_new.png
[TM Draw or Import]: /images/coordination/TM_draw_or_import.png
[TM Draw]: /images/coordination/TM_draw.png
[TM Create Project]: /images/coordination/TM_create_project.png
[TM Edit Project]: /images/coordination/TM_edit_link.png
