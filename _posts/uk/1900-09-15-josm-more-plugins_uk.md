---
layout: doc
title: Втулки Building Tools та Utilsplugin2
permalink: /uk/josm/josm-more-plugins/
lang: uk
category: josm
---

Втулки Building Tools та Utilsplugin2
============

> Редакція 2016-09-12  

Втулки **buildings_tools** та **utilsplugin2** додають чудові інструменти та розширюють можливості JOSM. В цім розділі ми розкажемо про це докладніше.  

Втулок Buildings Tools
--------------------------

Якщо ви ще не зробили цього, встановіть втулок використовуючи рекомендації з розділу про [Втулки JOSM](/uk/josm/josm-plugins).    

![Buildings tools plugin][]

Втулок Buildings Tools дуже корисний для додавання будинків. Він дозволяє накреслити одну сторону прямокутника будинку і одним додатковим рухом створити з лінії прямокутник. Якщо вам треба накреслити багато будинків, цей втулок зекономить вам тисячі кліків, а з ними і час.  

Після встановлення втулка, ліворуч на панелі інструментів, ви побачите кнопку: ![Buildings tools button][]{: height="29px"}

Завантажте в JOSM ділянку на якій ви бажаєте додати будинки.  

* Оберіть інструмент building tool і двома кліками накресліть лінію вздовж стіни будинку.  

![Draw edge][]

* Потім потягніть мишу в бік, щоб перетворити лінію в прямокутник, клацніть третій раз для завершення креслення.  

![Extend building][]

* Це дозволить вам не тільки накреслити прямокутник в три кліки, а також додасть теґ **building=yes** до полігону будівлі.  

### Complex Buildings

You can also create more complicated buildings by first drawing several overlapping buildings and then merging them together.  

* Draw two buildings which over lap, so that they form an L shape.  
* Select both buildings (hold SHIFT to select more than one object).  
* Go to Tools->Join overlapping Areas or press SHIFT+J on your keyboard.  

![Merge buildings][]

### Edit Settings

Furthermore, you can alter the default settings of the plugin.  

* Go to Data->Set buildings size. ![Set buildings size][]{: height="39px"}  

* If you are creating many similarly sized buildings, you can set specific width and height dimensions of the buildings, such as 6 x 10 meters (the unit is in meters).  

![Set buildings size dialog][]

* By setting the dimensions you will only need two clicks to create precisely sized buildings.  

Lastly, you can click on the Advanced button if you would like to add additional tags that will automatically be applied to every building. For example, if every building you draw is on the same street, you might add a tag which identifies the street that will be automatically applied.  

![Buildings advanced][]


Utilsplugin2
-------------

* If you haven't already, install this plugin following the instructions in [JOSM Plugins](/en/josm/josm-plugins).  

![Utilsplugin2 plugin][]

After you have installed the plugin and restarted JOSM, you will have a new menu at the top named "More Tools."  

![More tools menu][]

Create a new layer and experiment with some of the new tools. Here we describe some of the most useful new tools:  

1. **Add Nodes at Intersections:**  This tool is very helpful for adding missing nodes in intersections of selected ways.  It is good practice that roads should always have common nodes where they intersect.  

    ![Nodes interesection][]

2. **Copy Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

3. **Add Source Tag:** This tool simplifies adding a source tag. It remembers the source that was specified last and adds it as remembered source tag to your objects.   You can insert the source with just one click.  

4. **Replace Geometry:** This tool is great if you want to redraw a poorly shaped object, but want to keep the history, attributes and ID number of that object.  For example, if you come across a building that is complicated and drawn in a poor fashion, then instead of painfully changing each node, you can draw the object again, select the old and new objects, and select ¨Replace Geometry¨ to transfer all the information over.  

    ![Replace geometry][]


### More Selection Tools

**Utilsplugin2** also provides more tools on the "Selection" menu. Try experimenting with them.  

![Selection menu][]

One of our favorite selection tools is **Unselect Nodes:** This tool deselects all nodes. This can be useful if you draw a box to select many objects, but you do not want to select the nodes contained within all the lines and shapes.  

![Unselect nodes][]

Good luck!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png

