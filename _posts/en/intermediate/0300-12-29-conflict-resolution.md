---
layout: doc
title: Conflict resolution
permalink: /en/intermediate/conflict-resolution/
lang: en
category: intermediate
---

# Dealing with Conflicts

## Introduction

Sometimes you are working in JOSM and when you upload all of
your beautiful edits you get an *evil* message like this:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image05.png)

*This message is telling you that uploading did not work because another
user has uploaded their edits already. It is telling you that you
downloaded the area before someone else because you have version 1 and
the server has the more recent version. More specifically, the node
with ID:1,921,173,620 is the problem child. This is the object that has
been edited by someone else.*

This pop-up is a **conflict**, which is essentially a confusion by JOSM as
to determine which edits to use. Basically, the OSM server has received
edits that altered the same or similar objects and JOSM does does not
know which one to use.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image22.png)

## Conflicts

When you edit in JOSM you are editing a copy, or clone, of the main map.
JOSM loads OSM objects from the main server and keeps them in memory on
your computer.  You encounter **conflicts** when you upload altered, added
or deleted components from your map to the main server that someone else
has also edited. Since you are working on a local copy of OSM on your
computer other users can still retrieve, edit and upload the same OSM
objects. You don’t own the objects that you are currently working on;
you share them. Therefore, when objects that have both been edited are
uploaded at similar times, the OSM server gets confused. It does not
know which upload to be saved and used.  

However, JOSM is able to deduce some conflicts and sometimes you
will encounter an error, such as this one:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image23.png)

*This window reveals that JOSM deleted some of your objects that were
previously deleted.*

This means that JOSM has automatically decided that items in your local
dataset will not be uploaded to main server because they have already
been deleted by another user. 

In some conflicts, however, there is no easy action for JOSM to take and
so it leaves the decision up to the user to determine what the best
course of action is. Therefore, the conflict needs to be resolved:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image25.png)

*This tells you to look at all of your conflicts in Layer 1 in the **Dialog
List** box.*

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image18.png)

*This window provides you with a warning as to whether you are likely to
experience a conflict with your edits. If you check on the server you
will be able to fix the editing issues that would arise.*

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image27.png)

*This warning tells you that JOSM failed to delete a node due to it still
being referenced in a way. In order to remedy this, the user has to go
back into JOSM and resolve the conflict before uploading the data.*

## Conflict Resolution

Resolving Conflicts are important because none of the edits will save if
you do not select one version or merge the edits.  Toresolve a
conflict you must choose the best option for each specific edit.  When
you are given this Conflict Detected pop-up it is always best to choose
«Synchronize ---- only». This option saves you time and headache
because it only looks at the conflict at hand. If you chose to
«Synchronize entire dataset», then your server must talk with the
main server about all of the edits and objects. This option is only
really necessary if you have a mess of conflicts and edits. It is quite
cumbersome and at times confusing. 

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image11.png)

Next, you will get a pop-up that details your conflict. The error
message that appears looks complicated, but it is rather simple. You
will know what type of conflict you have by the symbol
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in the top tab. This one refers to the
properties, such as the location and existence of the object, of the
object. This is why the coordinates and deleted state are listed. 

Properties: Moved (coordinates) or deleted

Tags: tags do not match

Nodes: there is a differences in the list of nodes in two ways 

Members: there is a difference in the list of members in a relation

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image09.png)

Conflicts only appear with two different edits at a time. If there are
three or more conflicts, then a chain of conflicts will pop-up.
Therefore you have to choose or merge with only two conflicts at a
time. You can choose your version, the other version or, at times,
merge the two. In this example you do not have the option of merging. 
Click on the first column, or «My version» if you believe that
your edits are correct. Click on « Their version» if you think
that the other edits are better. 

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image06.png)

Once you have selected which version you think is best, then click
«Apply Resolution». A few more windows will pop up and you will
be on your way toward being able to upload your edits. 

Do some more editing. Then click ‘Upload’. You will get a pop-up that
says:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image28.png)

On your Windows menu you have a Conflict List
Dialog![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image26.png). This window displays a list of
conflicts. The total number of unresolved conflicts is shown in the
header. You can select or resolve a conflict by clicking on it. This is
useful when you have many conflicts to deal with.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image14.png)

You cannot upload your changes until this is empty. 

\* SHIFT+ALT+A turns the right Window display on or off during of the
Authors Dialog

\* SHIFT+ALT+C turns the right Window display on or off during of the
Conflict Dialog

## Ways to Avoid Conflicts

To minimize the chance and number of conflicts it is useful to upload
regularly. Conflicts appear more frequently for those who tend to save
the area they are working on in their local server and wait a while to
upload it. It is best to download the area you are working on, edit it
and then immediately upload it. 

Editing in the specific area you have downloaded minimizes conflict
risk. Make sure you do not edit outside of the area that you have
downloaded and dividing up the work using the Task Manager. Both of
these actions avoid multiple users editing in the same area. 

Lastly, because conflict pop-up are so cumbersome, and at times
annoying, it helps to check if any changes have been made in the area
you were editing before you upload (via osm.org). 

## Summary

When you edit in JOSM, which downloads copies of the OSM map,
you run the risk of running into conflicts. Conflicts occur when an
object has been edited by two people at a similar time. 

## Appendix. More Specific Conflicts

### Tag Conflicts

If the tags of one version of an objects are different from the tags of
another version, the Conflict dialog shows a ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in
the tab Tags. Click on the tab to display a dialog for resolving tag
conflicts.

There are three tables displayed in this dialog, from left to right:

1.  My version: shows the tags of the first object version participating
    in this conflict. These are usually the tags of the object version
    in your local data set.
2.  Merged version: shows the merged tags. This table is initially
    empty. The more tag conflicts you resolve, the more tag values will
    we be displayed in this table.
3.  Their version: shows the tags of the second object version
    participating in this conflict. These are usually the tags of the
    object version currently stored on the server.

In the example below both versions have a tag "name". The values in the
two object versions are different, though, and JOSM therefore displays
the row with a red background. The value of the first version is
"Secondary School", the opposite version has a value "Elementary
School". You now have to decide which of these values you want to keep
and which you want to discard.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Click on the value you want to keep, in the example for instance on the
value on the left. If you either double-click on the value or click on
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), you decide to keep the value and to discard the
opposite value. The table in the middle now displays the value to keep
and the background color turns to green.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

When the button Apply Resolutionis enabled you can apply your decision.
The values you've chosen will be applied and the dialog will be closed.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Resolving differences in the node list of two versions of a way

If you see the symbol ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in the tab Nodesthen you
have to resolve differences in the list of
[nodes](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)of two
[ways](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). There
are three columns in the respective panel (see screen shot below):

1.  the leftmost table displays the list of nodes of the the local
    object version
2.  the rightmost table displays the list of nodes of the the server
    object version
3.  the table in the middle shows the list of nodes of the merged ways

Initially, the middle table is empty. You should now decide which nodes
to keep from the local dataset (the leftmost table) and which from the
server dataset (the rightmost table).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### The standard workflow

The standard workflow to resolve conflicts in the node lists of two
[object
versions](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)consists
of three steps:

1.  Pick nodes from either object version and reorder the resulting node
    list if necessary
2.  Freezethe resulting merged node list by clicking on the button
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). When you freeze the merged node list you
    tell JOSM that all conflicts in the node list are resolved.
3.  Apply the resolution

### A simple workflow: Keep the node list from your local object version

The following example shows the workflow when you decide to keep all nodes in the same order from your local object version.

-   First, select all elements in the leftmost table (either using the mouse or by 
    pressing Ctrl-A in the table) (see next screen shot):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

-   Then, click 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    to copy the selected nodes to the middle table with the merged nodes:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

-   Finally, click
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    to freeze the resulting merged node list:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    The symbol in the nodes tab now switched to 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    and you can apply the merge decisions.

### Support for comparing node lists

It can be difficult to find the differences between the node list of of two object versions, in particular for ways with many nodes.

The Conflict Dialog supports you in finding the differences. It can compare two of the node lists displayed ("my" node list, the merged node list, and "their" node list) and it can render the differences between them with specific background colors.

From the following combo box you can select which pair of node lists to compare:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.  My with Their: compares the leftmost table with the rightmost table
    in the Conflict Dialog
2.  My with Merged: compares the leftmost table with the middle table in
    the Conflict Dialog
3.  Their with Merge: compares the middle table with the rightmost table
    in the Conflict Dialog

Depending on the position of a node in the list different background
colors are used:

1.  The node is in this list only. It isn't present in the opposite list:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.  The node is in both lists, but it is on different positions:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.  White background means that a node is in both lists at the same
    position.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)


