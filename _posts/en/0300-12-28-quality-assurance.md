---
layout: doc
title: Quality Assurance
permalink: /en/intermediate/quality-assurance/
lang: en
category: intermediate
---

Quality Assurance
=================

Introduction
------------

Contributing to OpenStreetMap is easy to learn, but difficult to master.
Everybody makes mistakes, but the system works because even when one
person does something the “wrong” way, there are always other mappers
ready to help and fix errors. As you map more and more, it will
continue to get easier, and you will learn the “proper” way to do
things. This chapter is devoted to helping you contribute well. We
will begin by discussing various editing techniques in JOSM that will
make your work better, and common mistakes that beginning mappers make.
Lastly, we will then discuss the JOSM validator tool, which is an
automated way of checking for errors.

Drawing your maps correctly the first time will save you a lot of time
later on!

![]({{site.baseurl}}/images/en_int_ch4_image05.png)

*This warning claims that there is suspicious data in your edits and that you should review the specific errors, warnings and possible false entries.  This window is an OSM method of creating better quality data and getting rid of untagged, overlapping and incomplete objects.*

JOSM comes with a tool that does an automated analysis of possible
mistakes. This is useful for finding errors that you may have
overlooked. When you run the validation tool, it will return two lists
of problems:

- Errors: These are important to fix, and therefore usually you
    should not ignore these. Examples of errors include duplicated
    objects or overlapping lines and polygons.
- Warnings: These are problems that are important to fix, but in some
    cases, they are tolerable.

One thing to note is that if you download a large area of the map and
run the validation tool, you may get a very long list of errors and
warnings. This is because the validation tool works on the whole map--
not only the changes that you have made. So you may see mistakes that
other mappers have made, and you can fix them, or ignore them. But the
validation tool gives you the opportunity to look at the mistakes one by
one.

Let’s see how to use the validation tool:

- In JOSM, download a section of the map.
- If you don’t see the “Validation Results” window in the right panel,
    click on the blue checkmark on the left to show it.

![]({{site.baseurl}}/images/en_int_ch4_image08.png)

- Ensure that nothing on the map is selected. If you run the
    validation tool with anything selected, it will only validate what
    you have selected, and not the whole map.
- Hover your mouse in the validation window and click “Validation.”

![]({{site.baseurl}}/images/en_int_ch4_image09.png)

- The map will change and any warnings will be circled in yellow,
    errors in red. In the “Validation Results” window you will see a
    list of warnings and errors, if there are any.

![]({{site.baseurl}}/images/en_int_ch4_image06.png)

- Errors should almost always be fixed. You can zoom to an error, by
    right clicking on it in the window and selecting “Zoom to Problem.”
    Then you can fix the mistake manually.
- Some errors can be automatically fixed, such as “Duplicated nodes”
    errors. You can click on the folder for these types of errors and
    click the “Fix” button in the window. Many errors, however, need to
    be corrected manually.

![]({{site.baseurl}}/images/en_int_ch4_image04.png)

- Usually there are many more warnings than errors. By giving you a
    warning, JOSM is telling you that it is probably a mistake, but not
    always. So you will need to use your judgement to see if it is an
    error or not.
- If you select a warning from the list and decide that it is not a
    problem, click “Ignore” and it will be removed from the list.
- You can re-run the validation tool at any time by clicking
    “Validation.”

Common Warnings
---------------

- Ways that are not closed - usually a line that does not form a polygon. Common examples are buildings where the first node does not meet the last node.

![]({{site.baseurl}}/images/en_int_ch4_image02.png)

To fix this, select both nodes and go to Tools -\> Merge Nodes
to connect them.

- Crossing Buildings (Overlapping Buildings) - buildings that overlap
    each other.

![]({{site.baseurl}}/images/en_int_ch4_image10.png)

To fix this, move the nodes of one of the buildings outside of
the other building.

- Untagged Nodes or Ways - If someone draws a point or a line but
forgets to give it any tags, then it is useless, because it doesn’t
mean anything.

![]({{site.baseurl}}/images/en_int_ch4_image03.png)

To fix this, apply tags to the object to identify it, or delete
it if it is a mistake.

- End node near another way - If a line ends very close to another
line but does not connect, this raises a warning. Many times this
warning is not important, but it helps to find road intersections
that are supposed to connect but do not.

![]({{site.baseurl}}/images/en_int_ch4_image00.png)

- Crossing ways - Lines that cross other lines without being connected will raise warnings. Many times this is not a problem, because the crossing ways are intentional - such as in the case of bridges, or streets and rivers that cross landuse polygons. It is sometimes helpful, however to find errors.

![]({{site.baseurl}}/images/en_int_ch4_image07.png)

OpenStreetMap depends on people correcting and editing mistakes. Editing and validating data is important for improving maps. If you do not have time to get in the field with a GPS or trace imagery, validating objects and attribute data is a good way to contribute.

Summary
-------

In this chapter we have covered several ways of improving our contributions to OpenStreetMap. We have discussed some common problems mappers have when editing with JOSM, and how to avoid such mistakes. We have looked at the JOSM validation tool, which helps keep OpenStreetMap free from errors, and helps us keep the data clean and good. In the next chapter, we will take a look at HOT’s Tasking Manager tool, which is a great way for mappers around the world to coordinate on a project.
