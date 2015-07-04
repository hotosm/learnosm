---
layout: doc
title: Conflict Resolution
permalink: /en/josm/conflict-resolution/
lang: en
category: josm
---

Conflict Resolution
====================

Sometimes you are working in JOSM and when you upload all of your beautiful edits
you get a nasty message complaining about a conflict.

![conflict detected][]

What happened is that you downloaded a bunch of data, which included a point which we will call Node A.  Then while you were editing, somebody else also downloaded Node A, changed it, and saved the changes back on OpenStreetMap.  Now when you try to upload your version of Node A, it is different from the one saved on OSM.  Therefore JOSM doesn’t know which version of Node A should be saved.

Conflicts
----------

Sometimes, JOSM is able to figure out what to do with conflicts on its own, and it will give you a message like this:

![resolved automatically][]

This means that JOSM has automatically decided that items in your local dataset will not be uploaded to main server because they have already been deleted by another user.  

In some conflicts, however, there is no easy action for JOSM to take and so it leaves the decision up to the user to determine what the best course of action is.  This means it is up to you to resolve the conflicts.

-   This tells you to look at all of your conflicts in Layer 1 in the **Dialog List** box:

![warning unresolved][]

-   This window provides you with a warning as to whether you are likely to experience a conflict with your edits.  If you check on the server you will be able to fix the editing issues that would arise:

![check on server][]

-   This warning tells you that JOSM failed to delete a node due to it still being referenced in a way.  In order to remedy this, the user has to go back into JOSM and resolve the conflict before uploading the data:

![still in use][]

Conflict Resolution
--------------------

The process of resolving a conflict is quite simple, although it can appear confusing at first in JOSM.  Basically, for every conflict JOSM will present you with two choices - your version of an object and the one that is on the server.  You need to choose whether to keep your version, or whether the new version on the server should remain.

You might think, “of course my version is going to be better!”  And maybe you’re right.  But think back to our example at the start of this chapter.  Perhaps while you were busy editing, another mapper added a lot of information to one of the nodes in your data set.  If you choose your version over their version, you will lose all of that valuable information that they added.  Hence you should consider keeping their version, or merging it with your own.

-   When you get a conflict window pop-up, it is best to choose the button “Synchronize ... only.”  You may need to do this for more than one object, but it is best to resolve conflicts one at a time.

![synchronize node][]

Once you click this button, you will get a pop-up window that details your conflict.  The error message may look complicated, but it is rather simple.  You will know what type of conflict you have by the red square symbol in the top tab.  The conflict in this example refers to the properties, such as the location and existence of the object.  This is why the coordinates and deleted state are listed.

**Types of Conflict:**

-   **Properties:**  Object has been moved (coordinates) or deleted
-   **Tags:**  Tags do not match
-   **Nodes:**  There is a differences in the list of nodes in two ways  
-   **Members:**  There is a difference in the list of members in a relation

![properties with conflicts][]

Conflicts only appear with two different edits at a time.  If there are three or more conflicts, then a chain of conflicts will pop-up.  Therefore you have to choose or merge with only two conflicts at a time.  You can choose your version, the other version or, at times, merge the two.  

-   In this example you do not have the option of merging.    Click on the first column, or My version if you believe that your edits are correct.  Click on Their version if you think that the other edits are better.  

![conflicts resolved][]

-   Once you have selected which version you think is best, then click “Apply Resolution.”  A few more windows will pop up and you will be on your way toward being able to upload your edits.  
-   Do some more editing.  Then click ‘Upload’.  You will get a pop-up that says:

![command stack][]

-   On your Windows menu you have a Conflict List Dialog .  This window displays a list of conflicts.  The total number of unresolved conflicts is shown in the header. You can select or resolve a conflict by clicking on it.  This is useful when you have many conflicts to deal with.

![one unresolved][]

-   You cannot upload your changes until this list is empty.

Ways to Avoid Conflicts
------------------------
### Upload Frequently
To minimize the chance and number of conflicts it is important to upload your edits regularly.  Conflicts appear more frequently for those who tend to save the area they are working on in their local server and wait a while to upload it.  It is best to download the area you are working on, edit it and then immediately upload it.  The longer the time between downloading data and uploading changes to that data, the more likely it is that someone has edited something in the meantime.

### Edit in the Area You Download
Editing in the specific area you have downloaded minimizes conflict risk.  Make sure you do not edit outside of the area that you have downloaded.  You can easily see which areas outside your download area in JOSM, because the background is made up of diagonal lines instead of being solid black.

![edit outside area][]

Summary
--------
When you edit in JOSM, you run the risk of running into conflicts.  Conflicts occur when an object has been edited by two people at a similar time.  By understanding what a conflict is and how to deal with it, you will be able to ensure that the best possible edits are saved to OpenStreetMap.


[conflict detected]: /images/en/editing/conflict-resolution/conflict-detected.png
[resolved automatically]: /images/en/editing/conflict-resolution/resolved-automatically.png
[warning unresolved]: /images/en/editing/conflict-resolution/warning-unresolved.png
[check on server]: /images/en/editing/conflict-resolution/check-on-server.png
[still in use]: /images/en/editing/conflict-resolution/still-in-use.png
[synchronize node]: /images/en/editing/conflict-resolution/synchronize-node.png
[properties with conflicts]: /images/en/editing/conflict-resolution/properties-with-conflicts.png
[conflicts resolved]: /images/en/editing/conflict-resolution/conflicts-resolved.png
[synchronize node]: /images/en/editing/conflict-resolution/synchronize-node.png
[command stack]: /images/en/editing/conflict-resolution/command-stack.png
[one unresolved]: /images/en/editing/conflict-resolution/one-unresolved.png
[edit outside area]: /images/en/editing/conflict-resolution/edit-outside-area.png


<!-- More stuff, could go into an additional chapter -
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

-->
