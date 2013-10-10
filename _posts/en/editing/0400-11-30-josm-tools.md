---
layout: doc
title: JOSM Tools
permalink: /en/editing/josm-tools/
lang: en
category: editing
---

JOSM Editing Tools
==================

There are a few ways you can access more editing tools in JOSM. We will
look more at the default tools, some plugins and then keyboard editing
shortcuts.

### Drawing tools

JOSM has some additional tools to make it easier to
draw lines and shapes. These tools are found in the “Tools” menu at the
top of JOSM.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image12.png)

In order to apply the functions in this menu, you must first select a
point, line or shape in the map window. Some of the most useful
functions are described here:

1.  Split Way: This allows you to divide a line into two separate lines.
    This is useful if you want to add different attributes to different
    parts of a road, such as a bridge. To use this function, select a
    point in the middle of the line that you want to split, Select Split
    Way from the Tools menu, and your line should be split in two.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image38.png)

2.  Combine Way: This does the opposite of Split Way. To combine two
    lines into a single line, they must share a single point. To use
    this function, select both lines that you want to combine. You can
    select more than one object by holding the SHIFT key on your
    keyboard and clicking on each line. When you have selected both
    lines, select Combine Way from the Tools menu.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image28.png)

    > If you are combining roads that have different directions, you
    > might get this warning:

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image15.png)

    If the roads are connected and go in the same direction, then choose
    \<\<Reverse and Continue\>\>.

3.  Reverse Way: This will change the direction of the line. If the line
    incorrectly represents a river or a road that is one way, you may want
    to change its direction.  Unless someone has intentionally created a
    way to be one way you do not usually have to worry about altering
    the direction because ways in OSM default to both ways.
     ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image26.png)

4.  Simplify Way: If your line has too many points in it and you’d like
    to make it simpler, this will remove some of the points from a line.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image41.png)

5.  Create Circle OR Align Nodes in Circle: If you are trying to make a
    circular shape, draw the circle as best you can and then select
    three nodes and the function. It will help arrange your points in a
    circle.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image04.png)

6.  Align Nodes in Line: This function will align a series of points
    into a straight line.  With long lines it is best to select sections
    of the line to straighten.  Be careful as this does have the
    tendency to shift the line a little. ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image17.png)

7.  Orthogonalize Shape: This function is very useful for drawing
    regular shapes such as buildings. After you draw an area, this
    function will reshape it to have square corners. This feature is
    most useful for other regularly shaped features, such as tennis
    courts, or landuse areas. (Using the Building Plugin, which will be
    explained below, might be easier).

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image45.png)

8.  Unglue way: This tool allows you to detach nodes that are
    connected.  

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image59.png)

    > The line and node will not actually appear separate as the last
    > screen shot implies.





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
