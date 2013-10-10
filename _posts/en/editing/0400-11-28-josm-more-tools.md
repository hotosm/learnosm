---
layout: doc
title: More Tools
permalink: /en/editing/more-tools/
lang: en
category: editing
---

More Tools
============
The **buildings_tools** and **utilsplugin2** plugins add great additional
functionality into JOSM. In this section we'll take a closer look
at the functions they provide.

The Buildings Tools Plugin
--------------------------
-   If you haven't already, install this plugin following the instructions
    in [JOSM Plugins](/en/editing/josm-plugins).

![buildings_tools plugin][]

This plug-in is by far one of the most useful
tools for editing (digitizing).  This tool allows you to create shapes
with 90 degree corners with just three clicks.  First, you trace the
edge of your building and then you drag out the line to make it a
polygon.  


![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image25.png)


![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image58.png)![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image19.png)

You can also create more complicated buildings by using the merge
option.  Create your building outline, select all of the polygons (press
SHIFT to highlight them all) and then hit SHIFT + J to merge the
objects.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image03.png)

Furthermore, you can alter the default settings (size and tagging) under
\<\<Edit\>\> and then at the bottom “Set building size”.  

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image07.png)

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image11.png)

If you are dealing with similar sized buildings, you can change the
building to a certain dimension, such as 5 x 6 meters (the unit is
meters).  Even more, if you are mapping similar infrastructure, such as
townhouses in the same area, then you can edit the tags to be all the
same under the \<\<Advanced\>\> tab.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image13.png)![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image64.png)

B. Utilsplugin2 (More Tools):  This add-on has a few features that may
be useful for editing.  

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image47.png)

Once you have restarted JOSM you will get a tab called \<\<More
Tools\>\>:

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image24.png)

These tools have proved to be the most useful:

1.  Add Nodes at Intersections:  This tool is very helpful for adding
    missing nodes in intersections of selected ways.  It is good
    practice that roads and rivers should always have common nodes where
    they intersect.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image43.png)

2.  Copy Tags from Previous Selection:  This function makes copying tags
    easier.  If you want to create many objects with the same tags,
    first draw the objects.  Then add the tags to one object.  Click on
    another object and press Shift + R to copy the tags from the
    previously selected object.  You can do this for all objects that
    you want to tag.  Remember that the tags will be copied from the
    previously selected object, so if you click on an untagged object
    and then another untagged object, you will not be able to copy any
    tags.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image05.png)

3.  Add Source Tag: This tool simplifies adding a source tag.  It
    remembers the source that was specified last and adds it as
    remembered source tag to your objects.   You can insert the source
    with just one click.  

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image63.png)

4.  Replace Geometry: This tool is great if you want to redraw a poorly
    shaped object, but want to keep the history, attributes and ID
    number of that object.  For example, if you come across a building
    that is complicated and drawn in a poor fashion, then instead of
    painfully changing each node, you can (2) just draw the object again
    (3) select the old and new object (4) press ¨Replace Geometry¨ to
    transfer all the information over.

C. Utilsplugin2 (Selection):

And you also have access to more \<\<Selection\>\>
tool:![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image55.png)

These tools have proved to be the most useful:

1.  Unselect Nodes:  This tool lets you deselect nodes, which makes it
    useful for tagging the objects selected.  This tool is necessary if
    you have mapped several polygon objects with similar attributes and
    would like to tag the objects without tagging the nodes.  To do so,
    select all of the objects-- polygons, ways and relations-- unselect
    the nodes and tag appropriately.  ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image50.png)

2.  Select Last Modified Nodes:  This tool permits you to go back to the
    nodes that you most recently changed.  It is like undo: node style.
     

Have fun using them!




### Keyboard Shortcuts

Sometimes it can be annoying to click over and over to select different
options and menus in JOSM. Luckily there are shortcut keys on the
keyboard that allow you to do many common tasks (I highly recommend the
DEL shortcut).  Here is a list of some of the most commonly used
shortcut keys, along with what they do:

        

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image10.png)Chooses the Select tool

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image08.png)Deletes Selected Object

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image30.png)Chooses the Draw Tool

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image36.png)Chooses the Zoom tool

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image21.png)Zoom In

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image09.png)Zoom Out

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image01.png)Split Way

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image34.png)Combine Ways

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image29.png)Align in Circle

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image53.png)Align in line

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image40.png)Orthogonalize (make a shape square)

### More information on the \<\<Selection\>\> Tools.  All of this
information was taken from
[http://wiki.openstreetmap.org/wiki/JOSM/Plugins/utilsplugin2](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/utilsplugin2).
 

A. Select adjacent nodes (E):  Selects neighbours of already selected
nodes. Remembers active ways when used first and fills them before
advancing to other ways.  If some ways are already selected, we only use
them to advance selection.  If only ways are selected, its nodes are
selected instead.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image52.png)

Example of usage: select one node (and possibly its way), press E (3
nodes are selected now), press L to put the node on straight line.

B. Select adjacent ways (Shift-E):  If some ways or nodes are selected,
selects adjacent ways (non-recursively).

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image33.png)

C. Select all connected ways (Crtl-Shift-E): If some ways or nodes are
selected, selects adjacent ways recursively (as a result, all connected
ways are selected).

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image51.png)

D. Select intersecting ways (I): If some ways are selected, adds
intersecting ways to selection. Iseful with function Add nodes at
intersections.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image39.png)

E. Select all intersecting ways (Crtl-Shift-I): If some ways are
selected, selects all adjacent and intersecting ways recursively. Useful
for selecting parts of the building to join.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image16.png)

[buildings_tools plugin]: {{sitebaseurl}}/images/editing/josm-more-tools/buildings_tools-plugin.png


