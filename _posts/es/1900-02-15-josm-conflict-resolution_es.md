---
layout: doc
title: Resolución de conflictos en JOSM
permalink: /es/josm/josm-conflict-resolution/
lang: es
category: josm
---

Resolución de conflictos en JOSM
====================

> Revisado 2016-09-27  

A veces, mientras trabajas en JOSM y cuando subes todas tus maravillosas ediciones, recibes un desagradable mensaje quejándose de algún conflicto.  
![conflict detected][]  
Lo que ocurrió es que descargaste un montón de datos, que incluían un punto que llamaremos Nodo A. Luego, mientras editabas, otra persona también descargó el Nodo A, lo cambió y guardó los cambios de nuevo en OpenStreetMap. Ahora, cuando intentas subir tu versión del Nodo A, es diferente de la que se guardó en OSM. Por lo tanto, JOSM no sabe qué versión del Nodo A debe ser guardada.  

Conflictos
----------

A veces, JOSM es capaz de solucionar los conflictos por sí solo y te dará un mensaje como este:  
![resolved automatically][]  
Esto significa que JOSM ha decidido automáticamente que los elementos de tu conjunto de datos local no se subirán al servidor principal porque ya han sido borrados por otro usuario. Sin embargo, en algunos conflictos, no hay una acción fácil que JOSM pueda tomar y deja la decisión en manos del usuario para determinar cuál es el mejor curso de acción. Esto significa que tú eres quien debe resolver los conflictos.  

Este mensaje te indica que revises todos tus conflictos en la Capa 1 en el cuadro **Lista de diálogo**:  
![warning unresolved][]  

Esta ventana te avisa de si es probable que se produzca un conflicto con tus ediciones. Si verificas en el servidor, podrás solucionar los problemas de edición que pudieran surgir:  
![check on server][]  

Esta advertencia te indica que JOSM no ha podido eliminar un nodo porque todavía está referenciado de alguna manera. Para remediarlo, tienes que volver a entrar en JOSM y resolver el conflicto antes de cargar los datos:  
![still in use][]  

Resolución de conflictos
--------------------

El proceso de resolver un conflicto es bastante simple, aunque puede parecer confuso al principio en JOSM. Básicamente, para cada conflicto JOSM te presentará dos opciones: tu versión de un objeto y la que está en el servidor. Tienes que elegir si quieres mantener tu versión o si la nueva versión en el servidor debe permanecer.  
Puede que pienses: "¡Por supuesto que mi versión va a ser mejor!". Y puede que tengas razón. Pero piensa en nuestro ejemplo del principio de este capítulo. Tal vez mientras estabas ocupado editando, otro mapeador añadió mucha información a uno de los nodos de tu conjunto de datos. Si eliges tu versión en lugar de la suya, perderás toda esa valiosa información que ellos añadieron. Por lo tanto, deberías considerar mantener su versión o fusionarla con la tuya.  
Cuando aparezca una ventana de conflicto, lo mejor es elegir el botón "Sincronizar... solo". Es posible que tengas que hacer esto para más de un objeto, pero es mejor resolver los conflictos uno por uno.  
![synchronize node][]  
Una vez que hagas clic en este botón, obtendrás una ventana emergente que detalla tu conflicto. El mensaje de error puede parecer complicado, pero es bastante sencillo. Sabrás qué tipo de conflicto tienes por el símbolo del cuadrado rojo en la pestaña superior. El conflicto en el siguiente ejemplo se refiere a las propiedades, como la ubicación y la existencia del objeto. Por eso aparecen las coordenadas y el estado de borrado.  

**Tipos de conflicto:**

- **Propiedades:**  El objeto ha sido movido (coordenadas) o eliminado.  
- **Etiquetas:**  Las etiquetas no coinciden.  
- **Nodos:**  Hay una diferencia en la lista de nodos de dos maneras.  
- **Miembros:**  Hay una diferencia en la lista de miembros en una relación.  
![properties with conflicts][]  

Los conflictos solo aparecen con dos ediciones diferentes a la vez. Si hay tres o más conflictos, entonces aparecerá una cadena de conflictos. Por lo tanto, tienes que elegir o fusionar solo dos conflictos a la vez. Puedes elegir tu versión, la otra versión o, a veces, fusionar las dos.  

En el siguiente ejemplo no tienes la opción de fusionar. Haz clic en la primera columna, o en Mi versión si crees que tus ediciones son correctas. Haz clic en Su versión si crees que las otras ediciones son mejores.  
![conflicts resolved][]  

Una vez que hayas seleccionado la versión que consideres mejor, haz clic en "Aplicar resolución". Aparecerán algunas ventanas más y estarás en camino de poder subir tus ediciones. Realiza algunas ediciones más. A continuación, haz clic en "Subir". Aparecerá una ventana emergente que dice  
![command stack][]  

En el menú de Windows tienes una ventana de diálogo de la lista de conflictos. Esta ventana muestra una lista de conflictos. El número total de conflictos no resueltos se muestra en el encabezado. Puedes seleccionar o resolver un conflicto haciendo clic sobre él. Esto es útil cuando tienes muchos conflictos que resolver.  
![one unresolved][]  
No puedes subir tus cambios hasta que la lista esté vacía.  

Maneras de evitar conflictos
------------------------

### Subir con frecuencia

Para minimizar la posibilidad y el número de conflictos, es importante subir tus ediciones con regularidad. Los conflictos aparecen con más frecuencia para aquellos que tienden a guardar el área en la que están trabajando en su servidor local y esperar un tiempo para subirla. Lo mejor es descargar el área en la que estás trabajando, editarla y subirla inmediatamente. Cuanto más tiempo pase entre la descarga de datos y la subida de los mismos, más probable es que alguien haya editado algo mientras tanto. Si estás en un Mapathon y editando un elemento como una carretera en la que pueden trabajar otros, sube los datos con mucha frecuencia, quizás cada 6 ediciones.  

### Modificar en el área que descargaste

Editar en el área específica que has descargado minimiza el riesgo de conflicto. Asegúrate de no editar fuera del área que has descargado. Puedes ver fácilmente qué áreas están fuera de tu área de descarga en JOSM, porque el fondo está formado por líneas diagonales en lugar de ser negro sólido.  

![edit outside area][]  

Resumen
--------
Cuando editas en JOSM, corres el riesgo de encontrarte con conflictos. Los conflictos se producen cuando un objeto ha sido editado por dos personas en un momento similar. Si entiendes lo que es un conflicto y cómo solucionarlo, podrás asegurarte de que se guardan las mejores ediciones posibles en OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
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

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png