---
layout: doc
title: JOSM Building Tools & Utilsplugin2 플러그인
permalink: /ko/josm/josm-more-plugins/
lang: ko
category: josm
---

JOSM Building Tools & Utilsplugin2 플러그인
============


**buildings_tools**와 **utilsplugin2** 플러그인은 훌륭한 부가 기능을 JOSM에 추가해 주는 플러그인입니다. 이 장에서는 두 플러그인이 제공하는 부가 기능을 자세히 알아보겠습니다.  

Buildings Tools 플러그인
--------------------------

아직 플러그인을 설치하지 않았다면, [JOSM 플러그인](/ko/josm/josm-plugins) 문서를 보면서 플러그인을 설치하세요.  

![Buildings tools plugin][]

Buildings Tools 플러그인은 건물을 디지털화하는 데 매우 큰 도움을 줍니다. Buildings Tools 플러그인을 이용하면 마우스 클릭 세 번만으로 직사각형 건물을 그릴 수 있어 시간을 절약할 수 있습니다.  

플러그인을 설치하면 JOSM 화면의 왼쪽에 다음과 같이 새로운 버튼이 생깁니다. ![Buildings tools button][]{: height="29px"}

JOSM을 켜고 건물을 그릴 영역을 다운로드하세요.  

### Rectangular Buildings

* 건물 도구를 선택하고 마우스 클릭 두 번으로 선을 그리세요.  

![Draw edge][]

* 그러고 나서 마우스를 움직여 직사각형을 만드세요. 원하는 모양이 되면 마우스를 클릭하세요.  

![Extend building][]

* 마우스 버튼 클릭 세 번만으로 직사각형뿐만 아니라 **building=yes** 태그까지 추가되었습니다.  

### Circular Buildings

* In "More tools"->"Draw building modes" select "Set building shape to circle" or use the shortcut ALT+Z (when switchitng back to drawing rectangular buildings use ALT+R). Then draw the diameter of the building.

![Round building][]

### 복잡한 모양의 건물

직사각형 몇 개를 겹치게 그리고 합침으로써 복잡한 모양의 건물도 그릴 수 있습니다.  

* 건물 두 개를 ㄴ자 모양으로 겹치게 그리세요.  
* 두 건물을 선택하세요(하나를 선택한 뒤 SHIFT 키를 누르면서 나머지 하나를 선택하면 됩니다).  
* 도구->겹치는 영역 연결을 선택하거나 SHIFT+J를 누르세요.  

![Merge buildings][]

### 설정 바꾸기

플러그인의 기본 설정을 바꿀 수도 있습니다.  

* Go to "More tools"->"Draw buildings modes"->Set buildings size.

* 비슷한 크기의 건물을 여러 개 만들고 싶으시다면, 건물의 가로 세로 값(예를 들어, 6 x 10 미터)을 설정하면 됩니다(단위는 미터입니다).  

![Set buildings size dialog][]

* 이제 마우스 클릭 두 번만으로 정확히 똑같은 크기의 건물을 그릴 수 있습니다.  

마지막으로, 고급 버튼을 클릭하면 건물을 그릴 때마다 자동으로 추가되는 태그를 수정할 수 있습니다. 예를 들어, 하나의 도로를 따라서 건물을 그릴 경우에는 **addr:street** 태그를 추가할 수 있습니다.  

![Buildings advanced][]


Utilsplugin2
-------------

아직 플러그인을 설치하지 않았다면, [JOSM 플러그인](/ko/josm/josm-plugins) 문서를 보면서 플러그인을 설치하세요.  

![Utilsplugin2 plugin][]

플러그인을 설치하고 JOSM을 재시작하면 화면 상단에 '더 많은 도구'라는 메뉴가 새로 보일 것입니다.  

![More tools menu][]

새로운 레이어를 만들어서 새롭게 추가한 플러그인의 기능을 한번 실험해 보도록 합시다.  

1. **교차 지점에 점 추가:**  선택한 선들이 교차하는 지점에 점이 없을 경우에 유용한 기능입니다. 도로가 교차하는 지점에는 항상 공유하는 점을 붙이는 것이 좋은 습관입니다.  

    ![Nodes interesection][]

2. **Paste Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

3. **출처 태그 추가:** 출처 태그를 손쉽게 붙여주는 도구입니다. 마지막으로 사용한 출처 태그를 기억해 선택한 개체에 클릭 한 번만으로 똑같은 출처 태그를 삽입합니다.  

4. **다각형 바꾸기:** 엉망으로 그려진 개체를 다시 그리면서 역사, 속성, ID를 보존하고 싶을 때 유용합니다. 예를 들어, 엉망으로 그려진 건물을 고치는 것보다 아예 새로 그리는 게 낫겠다 싶으면 먼저 새로운 다각형을 그리고, 이전 개체와 새로운 개체를 선택한 뒤, '다각형 바꾸기'를 클릭하면 이전 개체의 정보가 그대로 복사됩니다.  

    ![Replace geometry][]


### 더 많은 선택 도구

**Utilsplugin2**를 설치하면 '선택' 메뉴에 더 많은 항목이 추가됩니다. 한번 실험해 봅시다.  

![Selection menu][]

자주 쓰는 선택 도구 중 하나는 **점 선택 해제**입니다. 이 도구는 말 그대로 선택되어 있는 점을 모두 선택 해제합니다. 여러 개체를 선택하고 싶어서 마우스 드래그로 상자를 그렸는데, 선이나 다각형에 속한 점은 선택하고 싶지 않을 때 유용합니다.  

![Unselect nodes][]

행운을 빕니다!  


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
[Round building]: /images/josm/buildings_tools-round.png

