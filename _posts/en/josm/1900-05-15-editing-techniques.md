---
layout: doc
title: Editing Techniques
permalink: /en/josm/josm-editing-techniques/
lang: en
category: josm
---

Editing Techniques: Common Mistakes
====================================

There are a number of common mistakes that mappers make when they start
using OpenStreetMap. In this chapter we'll identify a few of the most
frequent errors and offer some tips for mapping better.

Connecting Objects
-------------------

### Some Objects Should Not Connect
When you are creating polygons and lines that are not supposed to be
connected, make sure that they are not merged together by sharing a
node.  For example, highway nodes should not be snapped to buildings,
because no one likes a road that leads directly into a wall!  If you
want to disconnect two or more objects that share the same node, select
the node and go to *Tools->UnGlue Ways* or press \<\<G\>\>.

![Road and building nodes are connected - NO][]

![Roads Building nodes are disconnected - YES][]

### But, Some Objects Should Connect!
Roads that intersect should always share a node. If they do not share a common node,
then the computer has no way of knowing that the roads actually connect
to each other.

![Intersecting roads should share nodes][]

The only time that you would NOT have intersecting roads share a node is
if one of the roads goes over the other road, and they do not, in fact, connect.

Overlapping Objects
--------------------
A common error is to have overlapping polygons when the objects they
represent do not overlap in real life.  A building cannot overlap
another building.  This mistake is commonly made with buildings and
landuse polygons.  For example, a polygon drawn to represent a park
outside a building should not overlap with the building.  Instead it
should be drawn next to the building.

![Correcting building overlaps][]

There are some exceptions to this rule, such as schools.  Within a
school yard you might identify individual buildings using polygons, yet
you also might want to create a polygon around the entire school yard.
In this case it is fine for the polygons to overlap, but the rule to
follow here is to make sure that the buildings are completely inside the
landuse polygon.

![Correcting building landuse][]

Summary
--------
We all make mistakes, but the more you map the less you will make less mistakes!
Just remember that even if you upload data that contains mistakes, you can always
fix your mistakes and upload the changes again.  This is
what is great about OSM: you can always make it better!


[Road and building nodes are connected - NO]: /images/en/editing/josm-editing-techniques/road-building-no.png
[Roads Building nodes are disconnected - YES]: /images/en/editing/josm-editing-techniques/road-building-yes.png
[Intersecting roads should share nodes]: /images/en/editing/josm-editing-techniques/road-connecting-nodes.png
[Correcting building overlaps]: /images/en/editing/josm-editing-techniques/building-overlap.png
[Correcting building landuse]: /images/en/editing/josm-editing-techniques/building-landuse.png
