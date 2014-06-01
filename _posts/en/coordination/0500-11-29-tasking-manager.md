---
layout: doc
title: Tasking Manager
permalink: /en/coordination/tasking-manager/
lang: en
category: coordination
---

Tasking Manager
===============

In the previous chapter, we looked at various ways to ensure quality
when contributing to OpenStreetMap.  In this section, we will take a
look at the HOT Tasking Manager, a tool that mappers can use to sort an
area into a grid, and work together to map an area in an organized way.

One consistent challenge is coordinating field and/or remote workers to
map an area together.  To help address this, HOT has developed an
OpenStreetMap Tasking Tool to make it easier for administrators to
define the areas of mapping interest and to delegate workers.  The idea
behind this tool is that if there is an area, let’s say a city, that we
want to map, and we have some people mapping on the ground, and some
people mapping remotely using satellite imagery, this tool will allow us
to create a grid of the entire area.  Collaborators can select blocks in
the grid that they plan to map, and when they finish, they can mark that
area as complete.  In this way a team of many people can coordinate to
map the entire grid

To see how the tasking manager works, let’s take a closer look.

-   Open your Internet browser and go to
    [tasks.hotosm.org](http://tasks.hotosm.org). You will see a page
    like this:

![Tasking Manager Login][]

-   Click “Log in using your OpenStreetMap account \>\>”
-   Here you are agreeing to allow this application some access to your
    OpenStreetMap account.  Click “Save Changes.”

![Authorizing access to OSM account by the Tasking Manager][]

-   Now you will see the current list of projects.  These are different
    places that people are coordinating to map.  There are three job
    categorized that you can access:

 1. All jobs: showing all jobs that available in OSM Tasking Manager.
 2. Featured jobs: showing only featured jobs that available in OSM Tasking Manager.
 3. My jobs: showing only your jobs that you have created (if you are an
    admin).

![List of jobs][]

-   Click on one of the projects title to see more information about it.

![Job description][]

-   This page shows you everything you need to know about the project.
     On the left side of the page is a description of the mapping
    project and how it is being organized.  You can click on the
    different tabs to get more information.  On the right side is a grid
    showing the area to be mapped.  Red grid squares have been
    completed, green squares have been completed and “validated” by
    another person, and the remaining squares still need to be mapped or
    are being worked on.  By clicking on the “Workflow” tab, you can get
    information about how collaborators are meant to help map. Clicking
    on the “Users” tab will shows OSM user that working on the task, and
    clicking “Stats” tab will show statistic of the task.
-   To pick a task, you can click a square on the map. Or you can click
    “Task” tab and pick a task randomly.

![Picking a task][]

![Assigned task square][]

-   After you pick a square, here you see a view of the square that you
    are assigned to map. Click “Yes, I want to work on this task” to
    lock the square. You can automatically open the area for editing
    with JOSM, iD Editor, Potlatch 2, create a Walking Papers, or
    download the .osm / .gpx file.
-   If you plan to edit with JOSM, you need to open JOSM first with
    remote control setting enabled before you will be able to launch the
    application from the Tasking Manager.  To do this, open JOSM and go
    the Preferences menu.  Click on the “Remote Settings” tab and check
    the box next to “Enable remote control.”  Restart JOSM.

![Enabling JOSM Remote Control][]

-   Go back to the Tasking Manager and choose JOSM.  If you have JOSM
    open and you correctly enabled the remote control, the grid area of
    the map you selected will automatically be loaded into JOSM.

![Current data from the asigned task loaded JOSM][]

-   You may now edit the area using the instructions provided in the
    project information.  When you are finished, you can return to the
    tasking manager website and add comments about your changes.  Click
    “Mark task as done” to let other collaborators know that you have
    finished this grid square.  If you were unable to complete the task,
    click “Unlock it” to make it available again for other mappers.

![Marking task as done][]

![Adding comment to a completed task][]

-   If you are wondering what happens when you finish an area, the grid
    square will turn red on the map to indicate that is done.  Someone
    else will then look at your work to make sure it is good, and if
    they agree that you’ve completed the square well, the grid square
    will turn green, meaning it is complete!

Summary
------------------

The Tasking Manager can be quite useful for mapping an area rapidly and
ensuring completeness and data quality.  It can be quite helpful in
managing many various mappers both in one location and around the world.

[Tasking Manager Login]: /images/en/coordination/tasking_manager/tasking_manager_image01.png
[Authorizing access to OSM account by the Tasking Manager]: /images/en/coordination/tasking_manager/tasking_manager_image03.png
[List of jobs]: /images/en/coordination/tasking_manager/tasking_manager_image04.png
[Job description]: /images/en/coordination/tasking_manager/tasking_manager_image05.png
[Picking a task]: /images/en/coordination/tasking_manager/tasking_manager_image06.png
[Assigned task square]: /images/en/coordination/tasking_manager/tasking_manager_image07.png
[Enabling JOSM Remote Control]: /images/en/coordination/tasking_manager/tasking_manager_image08.png
[Current data from the asigned task loaded JOSM]: /images/en/coordination/tasking_manager/tasking_manager_image09.png
[Marking task as done]: /images/en/coordination/tasking_manager/tasking_manager_image10.png
[Adding comment to a completed task]: /images/en/coordination/tasking_manager/tasking_manager_image03.png
