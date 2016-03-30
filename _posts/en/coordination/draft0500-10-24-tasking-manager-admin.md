---
layout: doc
title: OSM Tasking Manager Project Admin
permalink: /en/coordination/tasking-manager-project-admin/
lang: en
category: coordination
---

# OSM Tasking Manager Project Admin

> This guide may be downloaded as [tasking-manager-admin_en.odt](/files/tasking-manager-admin_en.odt) or [tasking-manager-admin_en.pdf](/files/tasking-manager-admin_en.pdf)  
> Reviewed 2015-11-23  

**This Chapter follows on from [The OSM Tasking Manager guide within LearnOSM](/en/coordination/tasking-manager/) and is designed to help those who need to update project instructions or create projects within The HOT Tasking Manager.**  
If you are new to mapping with HOT, this guide will probably be more technical than you require. This guide is specifically written for those persons who need a greater level of access to The HOT Tasking Manager, <http://tasks.hotosm.org/>, but it will also assist anyone who needs to update any other instance of the OSM Tasking Manager - a list of the instances can be found at <http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager#Operational_installations_of_the_Tasking_Manager>

> There is also a development version of the Tasking Manager, & it may be possible for you to practice creating projects there, but be aware that this version is frequently wiped as it is used for testing. It can be found at <http://tasks.dev.hotosm.org/> & to obtain project manager access, send an email to tm-project-managers AT hotosm DOT org.

The HOT or OSM Tasking Manager is frequently referred to as **TM2.**

## Logging in & Access Levels
All access to TM2 is authorised through <https://www.openstreetmap.org>. You will need an OpenStreetMap (OSM) account. Once you have this account visit <http://tasks.hotosm.org/> and click **Login to OpenStreetMap**, which will refer you to the OSM page where you can authorise The Tasking Manager to have limited access to your OSM account.

### Access Levels within the OSM Tasking Manager
-  **User** - Able to login to TM2 and use its functionality to locate an area requiring mapping - fully described in [The OSM Tasking Manager guide within LearnOSM](/en/coordination/tasking-manager/). Some projects, such as those in the draft of archived state are not visible to users.  
-  **Project Manager** - Create & Update Projects within TM2.  
-  **Administrator** - Change access levels of users within TM2.

## Creating a new Project within TM2 

![TM New][]

Click your username in the upper right corner, then **Create a New Project** & choose between;  

- [Draw an area of interest to be mapped](/en/coordination/tasking-manager-admin/#draw-an-area-of-interest-to-be-mapped) or  
- [Upload a GeoJSON or KML file of the area of interest to be mapped](/en/coordination/tasking-manager-admin/#upload-a-geojson-or-kml-file-of-the-area-of-interest-to-be-mapped)  

![TM Draw or Import][]

### Draw an area of interest to be mapped

![TM Draw][]

1. Click the ‘Draw’ button,
2. Draw a polygon representing the area of interest in the map frame (hold the right mouse button down to move the map without adding a node)
>The polygon should tightly fit the area of interest. This saves time for completing tiles that are not of interest (i.e. ocean, forest)  
3. Click on your starting point to complete the polygon  

or

### Upload a GeoJSON or KML file of the area of interest to be mapped  

1. Click the ‘Import’ button,  
2. Browse to your file in the File Upload window,  
3. Click the file name to highlight the file and then click ‘Open’.  

The area of interest defined in the GeoJSON or KML file will appear in the map frame, and you will then be asked to choose how the area of interest is split into individual tasks.  There are two options:  

### Task Squares

Select the Square Grid option and click next.  
The area of interest is automatically split into grid cells and each cell becomes a task. The larger the project area, the larger the resulting squares will be. Determine the optimal tile size based on the five Tile Size options. As such, a smaller tile size will result in more tasks as shown in the screenshots.  The optimal tile size will therefore depend both on the size of the area (create smaller tiles for a large project) and the number of features that will likely need to be mapped within each tile.  Generally speaking, as the size of the area of interest and/or the number of likely features increases, the tile size chosen for the project should decrease. 

![TM Tile Sizes][]

**Considerations before deciding on tile sizes**;  

-  A brand new mapper at a mapathon will map an area at roughly a quarter of the speed of an experienced mapper (many start off far slower, but soon get faster),  
-  A new mapper finds it as hard to search for features in the satellite imagery as they do to actually map them. Finding round huts thatched with natural materials in an area of round bushes is a steep learning curve for a 'newbie',  
-  A new mapper also finds it difficult to trace lots of features such as buildings,  
-  Later in the process you have the opportunity for a mapper to 'split' a square - splitting a square into quarters helps new mappers get a square size they can cope with.  
-  The most likely part of a square for problems to occur is at the edges & corners. Smaller squares means more corners and edges, and will result in duplication of mapping as well as objects being missed.  
-  A square may be split, but there is no option to join squares together to make them bigger again.  
-  **Conclusion** Try mapping an area of the project yourself to see how easy it is and what difficulties will be faced. This should help you to decide on an optimum square size. Allow splitting, but not to infinity - some new mappers continually split squares until they are so small that it becomes extremely difficult to map.  

### Arbitrary Geometries
Each individual polygon in the (AOI) area of interest represents an individual task.  If the AOI consists of one polygon, the project will have just one task.


### Create the project & add Description
After choosing a tile size, click “Create Project”.  This establishes the project in the task manager and opens a screen where you can provide the descriptions, instructions and other information about the project.  

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
  
Proofread the various tabs to ensure wording and formatting are correct.
If further editing is needed, click the ‘Edit’ link in the upper right hand corner of the page.  If the project is ready for mapping, click the ‘Publish’ link.
Once the project is published, it is available for mapping to anyone with an OSM account, unless a group of users was specified in the ‘Allowed Users’ tab, in which case only the allowed users would be able to work on it.  If necessary, edits can still be made to the project after publication by clicking on the ‘Edit’ link.

Out of date wiki entry - for update when this guide complete  http://wiki.openstreetmap.org/wiki/Tasking_manager_admin
- end of hidden text-->


[TM Tile Sizes]: /images/coordination/TM_tile_sizes.png
[TM New]: /images/coordination/TM_create_new.png
[TM Draw or Import]: /images/coordination/TM_draw_or_import.png
[TM Draw]: /images/coordination/TM_draw.png
