

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
