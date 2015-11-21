---
layout: doc
title: herramientas de JOSM
permalink: /es/josm/josm-tools/
lang: es
category: josm
---

Herramientas de Edición en JOSM
==================

> Esta guía puede ser descargada como [josm_josm-tools_es.odt](/files/josm_josm-tools_es.odt) o [josm_josm-tools_es.pdf](/files/josm_josm-tools_es.pdf)  
> Revisado 2015-07-14  

En la [Guía para comenzar a usar JOSM] hemos cubierto los conceptos básicos para dibujar en
JOSM, pero hay varias herramientas y técnicas que no han sido demostradas.

Aquí presentaremos algunas herramientas y técnicas básicas disponibles en JOSM
para dibujar las características del mapa, y en los capítulos siguientes veremos
en más detalle las heramientas avanzadas.

Obtener archivo de muestra
-------------------

 - Si quisieras seguir las instrucciones mientras practicas en JOSM, descarga
    [tools_menu_sample.osm](/files/tools_menu_sample.osm).
 - Abre JOSM y el archivo también. Debes ver algo similar a esto:

![tools_menu_sample.osm][]

Herramientas de dibujo
-------------

Si hace clic en el menú "Herramientas" en la ventana principal, verá que hay
muchas funciones que pueden ayudarte a dibujar líneas y formas, y 
a editar objetos en el mapa.

JOSM tiene algunas herramientas adicionales para facilitar
el dibujo de líneas y formas. Estas herramientas se encuentran en el menú "Herramientas"
en la ventana principal de JOSM.

![Tools menu][]

Para utilizar las funciones del menú, tiene que primero seleccionar
un punto, una línea o una forma en el mapa. El archivo de muestra contiene varios
elementos que están etiquetados con los nombres de las diferentes herramientas en el menú.

 - Seleccione uno de los elementos en el archivo. Después elija el menú de Herramientas
    y haga clic en la función que ha identificado al lado del objeto
    que seleccionaste.
 - Por ejemplo, haga clic en el círculo mal dibujado para seleccionarlo.

![Align nodes in circle][]

 - Luego, ve a Herramientas -> Alinear Nodos en Círculo.
 - El círculo mal dibujado tendrá una forma más circular.

Experimenta con cada una de las herramientas usando el archivo de muestra. Una descripción de 
ciertas herramientas se encuentra a continuación.

1. **Dividir Vía:** Esto te permite dividir una línea en dos líneas separadas.
    Esto es útil siquieres añadir diferentes atributos a varias
    partes de una ruta, como un puente. Para usar esta función, seleccione un
    punto en medio de la línea que quieres dividir, selecciona Dividir
    Vía en el menú de Herramientas, y su línea debería dividirse en dos.

2. **Combinar Vías:** Esto hace lo contrario de Dividir Vía. Para combinar dos 
    líneas en una única línea, tienen que compartir un único punto en común. Para usar
    esta función, seleccione las dos líneas que desea combinar. Puede
    seleccionar más de un objeto al mantener presionado SHIFT en su 
    teclado mientras hace clic en cada línea. Cuando haya seleccionado ambas 
    líneas, seleccione Combinar Vías en el menú de Herramientas.

    ![Combine way][]

    Si estás combinando caminos que tienen diferentes direcciones, es 
    posible que leas esta advertencia:

    ![Reverse and combine][]

    Si las carreteras están conectadas y van en la misma dirección, entonces seleccione
    "Inviertir y continuar".

3. **Invertir vía:** Esto va a cambiar la dirección de la línea. Todas las líneas en
    OSM tiene una dirección, que se muestra en JOSM por las flechas en la línea.
    Dirección no suele importar, excepto en el caso de vías mano única y
    ríos que fluyen en una dirección determinada. En estos casos puede ser necesario
    invertir la vía para que vaya en la dirección correcta.

    ![Way direction][]

4. **Simplificar vía:** Si su línea tiene demasiados puntos y le gustaría
    que sea más simple, esto eliminará algunos de los puntos de la línea.

    ![Simplify way][]

5. **Alinear nodos en círculo:** Si está tratando de hacer una
    forma circular, dibuje el círculo lo mejor que pueda y luego seleccionelo.
    Esta función le ayudará a organizar sus puntos en un círculo.

6. **Crear círculo:** Como alternativa, puede utilizar esta herramienta, que
    creará un círculo más perfecto. Dibuje una línea que represente el
    diámetro de su círculo, y luego aplique esta herramienta.

    ![Create circle][]

7. **Alinear nodos en línea:** Esta función alineará una serie de puntos
    en una línea recta. Con largas líneas lo mejor es seleccionar secciones
    de la línea a enderezar. Tenga cuidado, ya que tiene la
    tendencia a desplazar la línea un poco.

    ![Align nodes in line][]

8. Ortogonalizar Forma: Esta función es muy útil para dibujar
    formas regulares tales como edificios. Después de dibujar un área, esta
    función la remodelará para que tenga esquinas cuadradas.

    ![Orthagonalize][]

9. Despegar vía: Esta herramienta le permite separar los nodos que estan
    conectados. Es útil cuando dos objetos comparten un nodo y no deberían.
    Por ejemplo, un error común es que una calle comparta un nodo
    con la esquina de un edificio. Por supuesto las calles no se chocan con los edificios
    en general, por lo que esto es un error, y se puede despegar los objetos uno
    de otro.

    ![Unglue way][]

    > La línea y el nodo no aparecerán en realidad separados hasta que los mueva.

Atajos de teclado
------------------

Una vez que empiece a editar mucho se dará cuenta que pierde mucho tiempo
al hacer clic en los menús y submenús. Para superar esto, JOSM tiene atajos de teclado
para casi todo.

Esto significa que en lugar de hacer clic en un objeto y luego pasar por un largo
menú, puede simplemente seleccionar el objeto y pulsar una tecla del teclado.

Todas las herramientas mencionadas en el apartado anterior tienen teclas de acceso directo, que
aparece en el menú Herramientas a la derecha de cada nombre de la herramienta. Por ejemplo, "O" es el
acceso directo para alinear los nodos en un círculo. "L" es el atajo para alinearlos en una línea.
Puede tomar algún tiempo aprender las teclas de acceso directo, pero encontrará que ahorra
mucho tiempo a la larga.

Aquí hay otras teclas de acceso directo (en **negrita**), que son algunas de los más importantes.

1. Active la herramienta de selección - **S**
2. Active la herramienta de dibujo- **D**
3. Active la herramienta de zoom - **Z**
4. Elimine el objeto seleccionado(s) - **Supr**
5. Acercar - **+**
6. Alejar - **-**


Escala y Rotación
----------------

Una pregunta común es cómo girar una línea o forma después de haberla
dibujado.

- Para girar un objeto, primero seleccionelo.
- Mantenta presionado **SHIFT+CTRL** en su teclado.
- Haga clic y arrastre el ratón para rotar.

![Rotate demo][]

Para escalar un objeto (para hacerlo más grande o pequeño), siga el mismo
proceso, pero en cambio mantenga ALT+CTRL.

Estas instrucciones se muestran en la barra de información en la parte inferior de JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png
