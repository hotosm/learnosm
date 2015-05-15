---
layout: doc
title: Quality Assurance
permalink: /ja/coordination/quality-assurance/
lang: ja
category: coordination
---

# Quality Assurance

## Introduction

Contributing to OpenStreetMap is easy to learn, but difficult to master.
Everybody makes mistakes, but the system works because even when one
person does something the “wrong” way, there are always other mappers
ready to help and fix errors. As you map more and more, it will
continue to get easier, and you will learn the “proper” way to do
things. This chapter is devoted to helping you contribute well. We
will begin by discussing various editing techniques in JOSM that will
make your work better, and common mistakes that beginning mappers make.
We will then discuss the JOSM validator tool, which is an automated way
of checking for errors. Lastly, we will cover the HOT Tasking Manager,
which is a tool that mappers can use to sort an area into a grid, and
work together to map an area in an organized way.

Drawing your maps correctly the first time will save you a lot of time
later on!

![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image10.png)

*This warning claims that there is suspicious data in your edits and that
you should review the specific errors, warnings and possible false
entries. This window is an OSM method of creating better quality data
and getting rid of untagged, overlapping and incomplete objects.*

## The Validation Tool

JOSM comes with a tool that does an automated analysis of possible
mistakes. This is useful for finding errors that you may have
overlooked. When you run the validation tool, it will return two lists
of problems:

-   **Errors** These are important to fix, and therefore usually you
    should not ignore these. Examples of errors include duplicated
    objects or overlapping lines and polygons.
-   **Warnings** These are problems that are important to fix, but in some
    cases, they are tolerable.

One thing to note is that if you download a large area of the map and
run the validation tool, you may get a very long list of errors and
warnings. This is because the validation tool works on the whole map--
not only the changes that you have made. So you may see mistakes that
other mappers have made, and you can fix them, or ignore them. But the
validation tool gives you the opportunity to look at the mistakes one by
one.

Let’s see how to use the validation tool:

1.  In JOSM, download a section of the map.
1.  If you don’t see the “Validation Results” window in the right panel,
    click on the blue checkmark on the left to show it.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image15.png)

1.  Ensure that nothing on the map is selected. If you run the
    validation tool with anything selected, it will only validate what
    you have selected, and not the whole map.
1.  Hover your mouse in the validation window and click “Validation.”

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image16.png)

1.  The map will change and any warnings will be circled in yellow,
    errors in red. In the “Validation Results” window you will see a
    list of warnings and errors, if there are any.


    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image12.png)

1.  Errors should almost always be fixed. You can zoom to an error, by
    right clicking on it in the window and selecting “Zoom to Problem.”
    Then you can fix the mistake manually.
1.  Some errors can be automatically fixed, such as “Duplicated nodes”
    errors. You can click on the folder for these types of errors and
    click the “Fix” button in the window. Many errors, however, need to
    be corrected manually.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image07.png)

1.  Usually there are many more warnings than errors. By giving you a
    warning, JOSM is telling you that it is probably a mistake, but not
    always. So you will need to use your judgement to see if it is an
    error or not.
1.  If you select a warning from the list and decide that it is not a
    problem, click “Ignore” and it will be removed from the list.
1.  You can re-run the validation tool at any time by clicking
    “Validation.”

### Common Warnings

-   **Ways that are not closed** — usually a line that does not form a
    polygon. Common examples are buildings where the first node does
    not meet the last node.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image04.png)

    To fix this, select both nodes and go to Tools -\> Merge Nodes
    to connect them.

-   **Crossing Buildings** (Overlapping Buildings) — buildings that overlap
    each other.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image17.png)

    To fix this, move the nodes of one of the buildings outside of
    the other building.

-   *Untagged Nodes or Ways* — If someone draws a point or a line but
    forgets to give it any tags, then it is useless, because it doesn’t
    mean anything.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image05.png)

    To fix this, apply tags to the object to identify it, or delete
    it if it is a mistake.

-   End node near another way- If a line ends very close to another
    line but does not connect, this raises a warning. Many times this
    warning is not important, but it helps to find road intersections
    that are supposed to connect but do not.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image01.png)

-   Crossing ways- Lines that cross other lines without being connected
    will raise warnings. Many times this is not a problem, because the
    crossing ways are intentional - such as in the case of bridges, or
    streets and rivers that cross landuse polygons. It is sometimes
    helpful, however to find errors.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image14.png)

OpenStreetMap depends on people correcting and editing mistakes.
Editing and validating data is important for improving maps. If you do
not have time to get in the field with a GPS or trace imagery,
validating objects and attribute data is a good way to contribute.

## Tasking Manager

Sometimes quality assurance is about more than uploading good, clean
data. One consistent challenge is coordinating field and/or remote
workers to map an area together. n terms of data quality and in terms
of completeness. To help address this, HOT has developed an
OpenStreetMap Tasking Tool to make it easier for administrators to
define the areas of mapping interest and to delegate workers. The idea
behind this tool is that if there is an area, let’s say a city, that we
want to map, and we have some people mapping on the ground, and some
people mapping remotely using satellite imagery, this tool will allow us
to create a grid of the entire area. Collaborators can select blocks in
the grid that they plan to map, and when they finish, they can mark that
area as complete. In this way a team of many people can coordinate to
map the entire grid

To see how the tasking manager works, let’s take a closer look.

1.  Open your Internet browser and go to
    [tasks.hotosm.org](http://tasks.hotosm.org). You will see a page
    like this:

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image02.png)

1.  Click “Log in using your OpenStreetMap account \>\>”
1.  Here you are agreeing to allow this application some access to your
    OpenStreetMap account. Click “Save Changes.”

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image08.png)

1.  Now you will see the current list of projects. These are different
    places that people are coordinating to map.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image11.png)

1.  Click on one of the projects to see more information about it.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image06.png)

1.  This page shows you everything you need to know about the project.
    On the left side of the page is a description of the mapping
    project and how it is being organized. You can click on the
    different tabs to get more information. On the right side is a grid
    showing the area to be mapped. Red grid squares have been
    completed, green squares have been completed and checked by another
    person, and the remaining squares still need to be mapped or are
    being worked on. By clicking on the “Workflow” tab, you can get
    information about how collaborators are meant to help map. By
    clicking on “Task,” you can take a grid square to work on yourself.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image13.png)

1.  Here you see a view of the square that you have offered to map. You
    can automatically open the area up for editing with JOSM, Potlatch
    2, or create a Walking Paper.

1.  If you plan to edit with JOSM, you need to enable a JOSM plugin
    before you will be able to launch the application from the Tasking
    Manager. To do this, open JOSM and go the Preferences menu. Click
    on the “Remote Settings” tab and check the box next to “Enable
    remote control.” Restart JOSM.

     ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image09.png)

1.  Go back to the Tasking Manager and choose JOSM. If you have JOSM
    open and you correctly enabled the remote control, the grid area of
    the map you selected will automatically be loaded into JOSM.

1.  You may now edit the area using the instructions provided in the
    project information. When you are finished, you can return to the
    tasking manager website and add comments about your changes. Click
    “Mark task as done” to let other collaborators know that you have
    finished this grid square. If you were unable to complete the task,
    click “Unlock it” to make it available again for other mappers.

    ![]({{site.baseurl}}/images/en/intermediate/en_quality_assurance_image00.png)

1.  If you are wondering what happens when you finish an area, the grid
    square will turn red on the map to indicate that is done. Someone
    else will then look at your work to make sure it is good, and if
    they agree that you’ve completed the square well, the grid square
    will turn green, meaning it is complete!

## Summary

In this chapter we have covered several ways of improving our
contributions to OpenStreetMap. We have discussed some common problems
mappers have when editing with JOSM, and how to avoid such mistakes. We
have looked at the JOSM validation tool, which helps keep OpenStreetMap
free from errors, and helps us keep the data clean and good. Finally,
we looked at HOT’s Tasking Manager tool, which is a great way for
mappers around the world to coordinate on a project.
