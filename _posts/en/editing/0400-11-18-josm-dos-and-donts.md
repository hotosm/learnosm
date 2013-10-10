---
layout: doc
title: JOSM Do's & Don'ts
permalink: /en/editing/josm-dos-and-donts/
lang: en
category: editing
---

Editing Techniques: The Dos and Do Nots
========================================

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


