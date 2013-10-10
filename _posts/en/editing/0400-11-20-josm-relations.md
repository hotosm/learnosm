---
layout: doc
title: JOSM Relations
permalink: /en/editing/josm-relations/
lang: en
category: editing
---

Relations
=========

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
