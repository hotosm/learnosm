---
layout: doc
title: JOSM Building Tools & Utilsplugin2 플러그인
permalink: /ko/josm/josm-more-plugins/
lang: ko
category: josm
---

JOSM Building Tools & Utilsplugin2 플러그인
============

> 2016-09-12에 검토됨  

**buildings_tools**와 **utilsplugin2** 플러그인은 훌륭한 부가 기능을 JOSM에 추가해 주는 플러그인입니다. 이 장에서는 두 플러그인이 제공하는 부가 기능을 자세히 알아보겠습니다.  

Buildings Tools 플러그인
--------------------------

아직 플러그인을 설치하지 않았다면, [JOSM 플러그인](/ko/josm/josm-plugins) 문서를 보면서 플러그인을 설치하세요.  

![Buildings tools plugin][]

Buildings Tools 플러그인은 건물을 디지털화하는 데 매우 큰 도움을 줍니다. Buildings Tools 플러그인을 이용하면 마우스 클릭 세 번만으로 직사각형 건물을 그릴 수 있어 시간을 절약할 수 있습니다.  

플러그인을 설치하면 JOSM 화면의 왼쪽에 다음과 같이 새로운 버튼이 생깁니다. ![Buildings tools button][]{: height="29px"}

JOSM을 켜고 건물을 그릴 영역을 다운로드하세요.  

* 건물 도구를 선택하고 마우스 클릭 두 번으로 선을 그리세요.  

![Draw edge][]

* 그러고 나서 마우스를 움직여 직사각형을 만드세요. 원하는 모양이 되면 마우스를 클릭하세요.  

![Extend building][]

* 마우스 버튼 클릭 세 번만으로 직사각형뿐만 아니라 **building=yes** 태그까지 추가되었습니다.  

### 복잡한 모양의 건물

직사각형 몇 개를 겹치게 그리고 합침으로써 복잡한 모양의 건물도 그릴 수 있습니다.  

* 건물 두 개를 ㄴ자 모양으로 겹치게 그리세요.  
* 두 건물을 선택하세요(하나를 선택한 뒤 SHIFT 키를 누르면서 나머지 하나를 선택하면 됩니다).  
* 도구->겹치는 영역 연결을 선택하거나 SHIFT+J를 누르세요.  

![Merge buildings][]

### 설정 바꾸기

플러그인의 기본 설정을 바꿀 수도 있습니다.  

* 데이터->건물 크기 설정으로 들어갑니다. ![Set buildings size][]{: height="39px"}  

* 비슷한 크기의 건물을 여러 개 만들고 싶으시다면, 건물의 가로 세로 값(예를 들어, 6 x 10 미터)을 설정하면 됩니다(단위는 미터입니다).  

![Set buildings size dialog][]

* 이제 마우스 클릭 두 번만으로 정확히 똑같은 크기의 건물을 그릴 수 있습니다.  

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

