---
layout: doc
title: Editing in detail
permalink: /en/intermediate/editing-in-detail/
lang: en
category: intermediate
---

# Editing in Detail

## Introduction

In this chapter, we will describe relations, JOSM editing tools, and editing
techniques in greater detail.  

> While this chapter is not extremely advanced, it is more difficult
> than the previous chapters. If you don’t feel like you fully understand
> the lessons leading up to this, you may wish to practice a little bit
> more before continuing.

Topics covered in this chapter:

-  Editing Tools:  Tools, The Building Plugin, & shortcuts

-  Relations: Description & how to edit and tag them

-  Editing Techniques:  The Dos and Do Nots

## JOSM Editing Tools

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

### Plugins

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image25.png)

A.  Building Plug-in:  This plug-in is by far one of the most useful
tools for editing (digitizing).  This tool allows you to create shapes
with 90 degree corners with just three clicks.  First, you trace the
edge of your building and then you drag out the line to make it a
polygon.  

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

## Relations

In the Beginner’s Guide we learned that there are three types of objects
that can be drawn in OpenStreetMap - points (nodes), lines (ways), and
polygons.  Lines contain numerous points, and the line itself carries
the attributes that define what it represents.  Polygons are the same as
lines, except that the the line must finish where it begins in order to
form a shape.

In fact, there is one other type of object in OpenStreetMap, and these
are called relations.  In the same way that a line consists of other
points, a relation contains a group of other objects, be they points,
lines, or polygons.  If you are looking to obtain advanced editing
skills, then understanding and knowing how to properly edit relations is
important.

For example, imagine that you want to map a building that has courtyards
in the center.  You would need to draw a polygon around the outside of
the building, and you would want other polygons around the courtyards
to indicate that they are not part of the building.  This is an example
of a relation.  The relation would contain several polygons - and the
attributes of the building would be attached to the relation, not the
polygons.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image42.png)

Relations are used to represent anything that requires a collection of
objects to define.  Other examples are bus routes (a collections of
lines), long and complex objects (rivers or roads), or multiple polygons
that are all part of one location (like buildings in a university).

There are mainly four types of relations you will encounter in OSM:
Multipolygons, Routes, Boundaries, and Restrictions (such as, no left
turns).  In this section we will go over Multipolygons and Routes.

A. Editing Relations: The multipolygon above contains a polygon for the
outer limits of the building and two more to mark the inner courtyards.
To create a relation from these three polygons you need to:

1. Select all of the polygons.

2.  Go to ¨Tools¨ and near the bottom ¨Multi-polygon¨

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image49.png)

3. The polygons should automatically be created as a multi-polygon.  

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image14.png)

You will then see your building as a a solid shape with the inner
polygons represented with gaps. The data behind the relation in this
example is visible on OpenStreetMap:
[http://www.openstreetmap.org/browse/relation/2435797](http://www.openstreetmap.org/browse/relation/2435797).
 The building is rendered by Mapnik as in this image:

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image00.png)

[OSM Wiki: Relation:
MultiPolygon](http://wiki.openstreetmap.org/wiki/Relation:multipolygon#One_outer_and_one_inner_ring)

B.  Another MultiPolygon

This river is another example of a multiploygon. Effectively it is the
same as the building example, but with a greater number of members and
covering a much larger area. It can be viewed on the OpenStreetMap site
here:
[http://www.openstreetmap.org/browse/relation/1046961](http://www.openstreetmap.org/browse/relation/1046961.).

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image61.png)![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image23.png)

This river contains ten ways that are connected like a long polygon.  

C.  Linestring Relations

Relations are also very useful for creating, labeling and editing large
linestrings; for example, bus routes, hiking trails, bicycle paths, etc.
 These differ from multipolygons because they are relations with
members, as supposed to complex areas.  A linestring could simply be one
line with multiple members, these can be tagged as such. Additional
features, such as bus stops represented by separate nodes can also be
tagged as relation members.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image27.png)![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image37.png)

1.  Make sure that all of the ways in which the route runs along are
    appropriately tagged.  For example, highway= footway.

2.  Select all of the highways or ways that the bus takes.    If you
    would only like to select certain parts of the way, then, sadly, you
    must divide the way into the section you would like to select.  This
    creates more work, but you can easily do it with the  ¨Split Way¨
    tool.  Once some or all of the ways are selected, click Edit in the
    relation panel.  The relation editing dialog will pop up.  

3.  Go to the Presets Menu and down at the bottom click ¨Public
    Transport¨ and then ¨Route¨ or ¨Route Master¨.   Route master is the
    main route that a bus takes, while route is a variant path of the
    bus.  

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image54.png)

4.  Fill in the corresponding information about the bus route.  

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image60.png)

Relations are difficult to understand and do not have to be used often,
but they are necessary to know about.  As you get more developed with
your OSM skills and want to create more complex building, river and
routes, relations will be useful.

## Editing Techniques: The Dos and Do Nots

In this section we will go over some common mistakes in JOSM and provide
some editing tips to make your work more efficient  in JOSM ! 

A. Some Objects Should Not Connect

When you are creating polygons and lines that are not supposed to be
connected, make sure that they are not merged together by sharing a
node.  For example, highway nodes should not be snapped to buildings,
because no one likes a road that leads directly into a wall!  If you
want to disentangle two or more objects that share the same node, select
the node and press \<\<G\>\>.  

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image32.png)  ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image62.png)

But, Some Objects Should Connect

However, some objects SHOULD connect!  Road intersections should
always be snapped together.  If two roads do not share a common node,
then the computer has no way of knowing that the roads actually connect
to each other.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image20.png)

B. Overlapping Objects

A common error is to have overlapping polygons when the objects they
represent do not overlap in real life.  A building cannot overlap
another building.  This mistake is commonly made with buildings and
landuse polygons.  For example, a polygon drawn to represent a park
outside a building should not overlap with the building.  Instead it
should be drawn next to the building.

There are some exceptions to this rule, such as schools.  Within a
school yard you might identify individual buildings using polygons, yet
you also might want to create a polygon around the entire school yard.
 In this case it is fine for the polygons to overlap, but the rule to
follow here is to make sure that the buildings are completely inside the
landuse polygon.

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image46.png)  ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image18.png)

We all make mistakes, and as you map more you will make less mistakes!
 Just remember that even if you upload data that contains mistakes, it
is simple to fix your mistakes and upload the change again.  This is
what is great about OSM: you can always make it better!

C.  Tracing Correctly

OSM can do amazing things with identifying where objects end and
what labels these objects should have; however, it needs your help in
doing so.  For example, if you create a road that turns into another
road without a distinct node, then JOSM will continue labeling the road
as the previous one.  Therefore, it is necessary that you make all of
your roads and objects as clearly and rigid as possible.  

^[[a]](#cmnt1)^

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image57.png)

We will end this chapter with this gift:

-  ROTATE OBJECT: If you hold the SHIFT + CTRL and drag your mouse
    click, you can rotate the selected objects.  

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image31.png)


## Summary

As you can see there are many additional features that make JOSM a
powerful tool for making maps. Remember that the more you practice with
these tools, the better you will become at adding information to
OpenStreetMap.

## Appendix

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

### Relation Details

Every object within a relation is tagged as having a role and these
roles define what each object does within a relation.  So in this
example, the polygon around the outside of the building would be given
the role outer to indicate that is on the outside, and the interior
polygon(s) are given the role inner to indicate that they are holes
inside the polygon.

A. A more Complex way of Multi-Polygon Relations: The multipolygon above
contains a polygon for the outer limits of the building and two more to
mark the inner courtyards. To create a relation from these three
polygons you need to:

1. Use the select tool to drag a box around all three polygons to
    select them all at once.

2.  Click \<\<Presets\>\> \<\<Relations\>\> \<\<Multipolygon\>\>.

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image56.png)

3.  Click “New relation”

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image35.png)

4.  You will then be presented with the relation properties window:

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image02.png)

    There is a large amount of data presented here, but most of it can be
    ignored for now. The important aspects in this window are the tag lines
    on top.  

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image22.png)

5.  In these tag lines on top, in the Key/Value table, add the tags for
    the relation. The actual ways do not need to be tagged unless there is
    something unique about them, such as different data sources.

6.  Next, you need to define the roles within your relation; for a
    multipolygon you need to define the outer and the inner ways.
    Essentially, JOSM needs to know which polygons are the outer layer and
    which ones are the inner layers so that it can determine which area is
    the multipolygon.  Select the ways that are the courtyards and mark them
    as the two inners and the building line with the outer role:

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image44.png)

7.  Click “OK” and the box will close. You will then see your building
    as a a solid shape with the inner polygons represented with gaps. The
    data behind the relation in this example is visible on OpenStreetMap:
    [http://www.openstreetmap.org/browse/relation/2435797](http://www.openstreetmap.org/browse/relation/2435797).
    The building is rendered by Mapnik as in this image:

    ![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image00.png)

[OSM Wiki: Relation:
MultiPolygon](http://wiki.openstreetmap.org/wiki/Relation:multipolygon#One_outer_and_one_inner_ring)

B. River Relation:  This example of a river requires you to create the outer
and inner banks, as well as the area covering inside.  The inner and
outer banks were drawn and then connected and labeled as a relation.  As
you can see below there is only one way that is an OUTER member because
it is the only outer polygon drawn.  All other polygons represent inner
members-- either branches of the river or holes in the polygon.

Bus Station Relation: Unlike inner and outer, the roles that these
members play in a relation will be forward, backward or stop.  Stop
corresponds to where there is a bus stop and forward/backward correspond
to the direction the bus goes along the road.  

![]({{site.baseurl}}/images/intermediate/en_edit_in_detail_image48.png)

1.  Make sure that all of the ways in which the route runs along are
    appropriately tagged.  For example, highway=footway.

2.  Open the relation panel (Alt + R) and select New in the relation
    panel to create a new relation.  

3.  Enter in the proper tags in the new dialog box.  For this bus route,
    it is type=route and name=Route 5.

4.  Click OK.

5.  Select all of the highways or ways that the bus takes.    If you
    would only like to select certain parts of the way, then, sadly, you
    must divide the way into the section you would like to select.  This
    creates more work, but you can easily do it with the  \<\<Split Way\>\>
    tool.  Once some or all of the ways are selected, click \<\<Edit\>\> in
    the relation panel.  The relation editing dialog will pop up.  

6. Click Add selection in that dialog box to add those selected ways.  
