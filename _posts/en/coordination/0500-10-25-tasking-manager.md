---
layout: doc
title: Tasking Manager
permalink: /en/coordination/tasking-manager/
lang: en
category: coordination
---

#Tasking Manager

> This guide may be downloaded as [tasking-manager_en.odt](/files/tasking-manager_en.odt) or [tasking-manager_en.pdf](/files/tasking-manager_en.pdf)  
> Reviewed 2015-08-26  

Section Index
-------------
-  [Overview of how HOT uses the Tasking Manager](/en/coordination/tasking-manager/#overview-of-the-process)  
-  [Languages, Options, help links, and other links. Your user page - list of projects you have assisted in, and messages](/en/coordination/tasking-manager/#options-amp-links)  
-  [Logging in](/en/coordination/tasking-manager/#getting-started-with-the-tasking-manager)  
-  [Finding a project](/en/coordination/tasking-manager/#locating-a-project)  
-  [Description, Map grid, Instructions, Contributing, Activity, Statistics for a project](/en/coordination/tasking-manager/#description)  
-  [Selecting a square to map, timer, releasing](/en/coordination/tasking-manager/#selecting-a-square-to-map)  
-  [JOSM, iD, Potlatch 2, Field Papers, Walking Papers](/en/coordination/tasking-manager/#editing-choices)  
-  [Splitting a square](/en/coordination/tasking-manager/#splitting-a-square)  
-  [Releasing your square before it is complete](/en/coordination/tasking-manager/#unlocking-a-square-before-it-is-complete)  
-  [Marking your square as complete](/en/coordination/tasking-manager/#finishing-a-square)  
-  [Sending messages](/en/coordination/tasking-manager/#sending-a-message-from-the-comment-box)  
-  [identifying your square in an email or other message](/en/coordination/tasking-manager/#referring-to-a-particular-square-when-sending-an-email)  
-  [Live Help - IRC, Internet Relay Chat](/en/coordination/tasking-manager/#getting-live-help)  
-  [Hints and Tips](/en/coordination/tasking-manager/#editing-hints-and-tips)


The HOT Tasking Manager, <http://tasks.hotosm.org/>, is an intuitive tool that mappers can use to sort an area into a grid, and work together to map an area in an organized way. This allows mappers throughout the world to assist in mapping a defined region with a minimum risk of overlapping work areas, and also allows people both on the ground and working remotely (also sometimes referred to as "armchair mappers") to collaborate effectively, rapidly, and avoid accidental rework being required due to conflicts.


## Overview of the process

1. An administrator selects an area requiring updating in OpenStreetMap. The administrator ensures there is suitable satellite imagery available for remote mappers to trace, and creates a project covering the area. The level of detail required and the urgency are specified within the project together with any other information the remote mapper will require. When satisfied, the administrator publishes the project within the Tasking Manager, although they may also make changes later if required.

2. A remote mapper selects a task square, completes the mapping, and marks the square as complete.

3. A second remote mapper checks that the square is completed to a satisfactory level and marks the square as 'validated'

4. Progress of the mapping of the project can be monitored from within the "stats" tab of the project, and the project can be downgraded or archived as required by an administrator.


## Options & links

-  The Task Manager initially displays in English - to change to another language click on **English** in the red header banner.

-  For information about the Tasking Manager, HOT sponsors, partners & help click on **About** at the top of the page.

-  Once you have logged in, you may click on your username at the top. Here you can:  

- Access a list of projects for which you have completed squares,
- Go to your **Messages** screen within the Tasking Manager (this is not the same as the OpenStreetMap messaging system)
- Logout
- See a list of all users who have contributed completed squares within the Tasking Manager. You may access links to see more information about the user you select, such as which tasks they have completed squares for and their OSM edit history.

![Tasking Manager Username_list][]

## Getting started with the Tasking Manager

You may view projects as a visitor, but to actively participate you must be logged into the Tasking Manager - use your OpenStreetMap account username & password. Open your Internet browser and go to <http://tasks.hotosm.org>. You will see a page like this:

![Tasking Manager Login][]

-   Click “login to OpenStreetMap”
-   You are agreeing to allow this application some access to your OpenStreetMap account.  Click “Save Changes.”

![Authorizing access to OSM account by the Tasking Manager][]


## Locating a project

The current list of projects may be sorted according to:

- High priority
- Creation date, or
- Last update

You can further refine your list by clicking in the **Your Projects** box, to see just the projects in which you have participated, whether you have completed a square or not. Validators will also find projects they have contributed validated squares in, by using this checkbox. You may use a free text search to locate projects that contain particular text strings, such as **Ebola** (search is not case sensitive).  

Projects are frequently referred to by their Project number, e.g., [**#711 - Ebola Outbreak, Kayes, Mali - Pre-emptive building mapping**](http://tasks.hotosm.org/project/711), and in this instance you could search on #711 to find this project.


-   Click on a blue project title to see more information about that project.

![Job description][]

## Description

Everything you need to know about the project is here! On the left is a description of the mapping project and what is required. On the right side is a grid showing the area to be mapped;  

- Mauve line normally visible in the perimeter squares of a project indicates the border of the project. This border normally follows the available imagery, so may appear an unusual shape. Although mapping may be completed outside this border, it is not a requirement and will not be considered by validators.  
- Pink areas of the map indicate higher priority areas,  
- Yellow grid squares have been completed,  
- A yellow border indicates the square is being worked on now,  
- Green squares have been completed and “validated”, and  
- The remaining squares still need to be completed, or have previously been invalidated (invalidated squares are a darker colour).  

### Instructions tab
This shows what is required in the mapping task. Tasks range in difficulty, suitable for beginners, intermediate and advanced mappers - and the instructions will explain this. 

Make sure you read and understand this section. There are many styles of mapping project, for many different purposes. Some common project activities include:

- Road networks: Used by people on the ground to load data into hand held navigation tools, and to work out how to access remote areas
- Mapping villages: Often used to identify places where people live and may be impacted
- Mapping buildings: Used for damage assessments or contact tracing with diseases. Also used for population estimates.
- Mapping rivers, walls and other features

Not all areas of the world are similar to your own, so specific tagging advice may be provided. For example, Africa's road network is very different to typical American or European highway systems.

There will be a section indicating the **Changeset comment** you should make sure appears in your editing programme when uploading/saving your changes, together with the **source** information you may (depending on your editing software) need to copy & paste to the source field on making changes.

Sometimes, task specific imagery may be available - you may need to agree to a license in order to access it.
Instructions usually will indicate the easiest way to load this into editors such as JOSM.

When checking a square marked as complete, validators will expect that the requirements from the instructions tab have all been completed. You may find completing an entire tile is quite difficult - guidance below is available around unlocking tiles; as well as providing useful feedback for the next mapper.

### Activity tab  
This shows activity that has taken place within the task in chronological order.  

### Stats tab  
This contains a graph of progress & other information. 

The Stats tab also contains a list of mappers who have completed at least one square within the project - to see which squares they have completed, you can *hover your mouse cursor* over a username, and the squares they have completed will become the only ones visible (**use this to locate the squares you have previously completed**).

Once you have located the square by hovering your mouse over the user name, you may click on the square to see the comments that have been left by mappers and validators for the square, which is a useful way of obtaining feedback from validators.  

### Contribute tab  
Click when you are ready to start mapping. You may choose your square to work on by selecting it from the map, or by clicking on the "Take a Task at random" option. 

![Picking a task][]

## Selecting a square to map  
![Assigned task square][]  
Having selected your square you will be able to see if there is any history for this square, such as a mapper starting to map, but realizing they do not have time to complete the square.  

If you accidentally select a square, you can release it again by clicking on the blue close control - **x** - shown in the screenshot above.

Clicking on the **Start Mapping** button locks the square so that no other mapper can select it until it is released again, and starts a 2 hour (120 minute) countdown timer, at the end of which time the square is automatically released. 
It is good practice to check on your countdown timer on a regular basis - it is easy to become engrossed in your mapping and not realise your square has been released, and has now been selected by another mapper who has started mapping it too. This can lead to conflicts and problems.


### Editing choices

Different options for editing are presented to you as soon as you lock a square.

![Editing options][]  

#### Edit with JOSM  
- Start JOSM before using this link and it will automatically load the existing OSM data into JOSM.  
>  1. 'Enable remote control' needs to be ticked - found under **Edit / Preferences / Remote Control**
  2. If you have previously installed the plug-in 'continuosDownload' it is best to disable it (untick 'Download OSM Data continuously' under the **File** menu in JOSM. 
  3. If JOSM does not load the imagary automatically as well, it can normally be found under the **Imagery** menu. [More info on imagery here ](/en/josm/more-about-josm/#add-imagery)

#### iD editor  
- Select this to automatically start a new tab or window of your web browser, with existing OSM data loaded. The Internet Explorer web browser does not currently support iD and it will load Potlatch 2 instead. Your original tab or window with the Task Manager will still be present.  

#### Potlatch 2  
- Editor will load in a new window or tab.  
- Potlatch will not automatically display the task bounding box, but you can do so by following this procedure:
  1. In the Tasking Manager, select a square and click Start Mapping to lock it
  2. In the Tasking Manager, select Edit with JOSM (if a window appears saying "JOSM remote control did not respond..." just click OK).
  3. Below the Edit with JOSM button, text will say "Tip: Download the following .gpx file...". Download the .gpx file, and note where it is saved.
  4. In the Tasking Manager, change from Edit with JOSM to Edit with Potlatch 2. Potlatch should open in a new tab.
  5. In Potlatch, select Background, then Vector File...
  6. In the Load Vector File window, at the bottom next to File, click Open, and navigate to the .gpx file you just downloaded
  7. In the Load Vector File window, make sure the box is checked in the Show column for the .gpx file, then close the window
  8. Potlatch should now display the boundary as a square (probably cyan). Note that Potlatch will still load data outside the boundary.

#### Walking Papers / Field Papers
- For use only when you are involved in a project where a local mapper has carried out a ground survey and marked a printed map with information such as road names. This map can be rescanned & used as a background image for a remote or local mapper to read the information & update the OpenStreeetMap data.  

### Splitting a square  
Having selected your square and inspected it with the imagery in place, you may realise that there is far too much detail required for mapping. An example of this may be tracing buildings in dense urban areas, or locating small villages in large areas.

As guidance, where it isn't possible for one person to complete within the 2 hour time limit you can often split the task into 4 smaller areas.

*Use with caution* - if/when squares are split too small it is difficult to judge what type of highway is involved, and to identify other features.

Be aware that other useful comments about the work previously completed will no longer be available.

### Unlocking a square before it is complete
If you start working on a square, but cannot complete it for some reason, it is best practice to leave a comment against the square.

Simply detail what remains and choose **unlock**. Make sure your comments are relevant and aimed to help out the next mapper.

For example:

    Almost complete, small village top left 
    in the square to be traced though

### Finishing a square
It is very difficult to be completely certain that you have completed a square - however it is acceptable to mark the square as complete if you are fairly sure - the contents will be checked by another mapper when validating, and any small additions can be made then. 

For the process to work most effectively, mappers need to mark squares as complete rather than leaving them for several other 'not sure' mappers to spend time also checking them. 

When you have finished editing and think that the square is complete, save any remaining edits with your editing programme, then return to the Tasking Manager.

Add comments to the box detailing what you achieved and more importantly, what you are not certain of. For example; "Complete as far as I can see, but there is cloud covering the top right corner of the square & I cannot see to trace this area".

Click on the "Mark Task as Done" button, and your work is ready for review.

### Sending a message from the comment box
When leaving a comment against a square, you can have the comment sent as a message to a named mapper.

Much like Twitter, simply use an @ followed by the username. This will send a message to the user containing the comments from this box, plus a link to the square that the comments box relates to. 

For example:

    @Tallguy nice work tracing the building  
    details here. You missed a small group  
    of houses on the upper left of the tile,  
    I added a few in, but some still remain.

This is particularly useful when validating or adding on another's previous work - you can provide feedback, thanks or more.

You may wish to provide a link to a site which may help the mapper, such as <http://learnosm.org/en/coordination/remote-tracing/#buildings-walls-compounds-barriers>

Be aware that many people from around the world will be participating, so prefer simple, clear language. If you come across comments in other languages, tools such as google translate are reasonable effective.



### Referring to a particular square when sending an email  
If you need to send a message, such as an email or an IRC message, and you are querying something concerning a particular square within a project (perhaps you need help identifying something from the satellite imagery):  

1. Click on the square concerned  
2. Click on the address bar in your web browser, which should show something similar to 'http://tasks.hotosm.org/project/713#task/259'  
3. Highlight with the mouse all of the text in the address bar, or use the shortcut keys **Ctrl+A** to select all the text, then use shortcut keys **Ctrl+C** to copy the text  
4. In your email, IRC message, or other message,  
either, mouse right click & paste,  
or shortcut keys **Ctrl+V**, to paste the link into the message. 

### Getting live help 
![IRC_help][] 

From the tasking manager;  
1. Click on **OSM HOT IRC Channel #hot**  
2. Enter a username (your OSM username?), or use the preset characters  
3. At the bottom of the dropdown list select **hot**  

![IRC using][]  

- To the right of the screen is a list of users that are online now.  
- Type your message in the box at the bottom left of the screen (this is sometimes temporarily obscured by other text, but this will disappear as you select the box.  
- To direct a message to a particular individual, include their username from the list on the right within your message. Type, then use the return key to submit your comment. The system is 'live' so wait for an answer - your username will often be used in the reply to show you the comment is directed to you. You will normally receive a reply within a few seconds, so please wait.  
- An alternative simple system can be found at [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Further info on using IRC with OpenStreetMap may be found at [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Alternatively use an IRC client of your choice (Server=irc.oftc.net, and channel=#hot)  


### Editing hints and tips
By now you have a good understanding of what the Tasking Manager is, and some of the various functions it supports. Unlike normal editing, this tool is often used for time critical projects with many participants - this may be a little bit different to what you are used to. 

Some general advice to heed when working in this tool:

 * Avoid mapping far outside of your square - other mappers may be working in that area, resulting in duplicated efforts. It's OK to map objects such as buildings overlapping a boundary, but avoid going much further - upload immediatly after mapping something at the border.
 * Extend roads, streams, or other features slightly over the boundaries - this lets the next mapper pick up where you left off, but upload as soon as you finish editing it.
 * If you are in doubt about what a particular feature is, use the comment section to ask questions or check the wiki.
 * If you make a serious mistake - for example, deleting a major feature or relation - use IRC or the comment box to ask other mappers to help in reverting this for you. Try to include the changeset, or a description of what happened. Being a collaborative task, many other mappers are here to help - it's important to remember everyone makes mistakes sometimes.
 * Don't hesitate to ask for feedback - mappers validating your work can be terse or to the point, but if they know it's OK to engage in a dialog with you, the outcome is often a lot better for all involved. It can be difficult to communicate in another language, and it's easy to appear abrupt when you have to translate as well as pass a message in a language you are not fluent in.
 * You must not validate your own work - a second pair of eyes will always lead to better quality mapping.
 * Don't worry if other mappers are terse when validating your work - like you, they just want to ensure all of the data is mapped accurately. Feedback is invariably about the remaining work, not criticism of your efforts to date.

[Tasking Manager Login]: /images/coordination/tasking_manager_image01.png
[Tasking Manager Username_list]: /images/coordination/tasking_manager_image02.png
[Authorizing access to OSM account by the Tasking Manager]: /images/coordination/tasking_manager_image03.png
[Job description]: /images/coordination/tasking_manager_image04.png
[Picking a task]: /images/coordination/tasking_manager_image05.png
[Assigned task square]: /images/coordination/tasking_manager_image06.png
[Editing options]: /images/coordination/tasking_manager_image07.png
[IRC_help]: /images/coordination/tasking_manager_image08.png
[IRC using]: /images/coordination/tasking_manager_image09.png
[Tasking Manager About]: /images/coordination/tasking_manager_image011.png
[Tasking Manager Languages]: /images/coordination/tasking_manager_image012.png
