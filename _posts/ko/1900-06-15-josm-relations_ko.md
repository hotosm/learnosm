---
layout: doc
title: JOSM 관계
permalink: /ko/josm/josm-relations/
lang: ko
category: josm
---

관계
==========

> 2017-06-06에 검토됨  

[초보자 안내서](/ko/beginner)에서는 오픈스트리트맵에서 그릴 수 있는 개체에는 점(노드), 선(웨이), 다각형(닫힌 웨이)의 세 가지 유형이 있다고 설명했습니다. 선에는 수많은 점이 포함되며 선 자체에는 선이 나타내는 특성을 정의하는 속성이 포함됩니다. 다각형은 선이 시작되는 곳과 끝나는 곳이 동일해야 한다는 점을 제외하고는 선과 동일합니다.  

사실 이 말은 거짓말입니다. 오픈스트리트맵에는 관계라는 또 다른 유형의 개체가 있기 때문이죠.
선이 점들로 구성되어 있듯이, 관계에는 점, 선 또는 다각형과 같은 개체가 포함됩니다. 편집 능력을 키우려면 관계를 제대로 편집하는 방법을 이해하고 아는 것이 중요합니다.  

예를 들어, 한가운데에 정원이 있는 건물을 지도에 추가한다고 가정합니다. 먼저 건물 외부에 다각형을 그려야 하며, 정원 주변으로 또 다른 다각형을 그려 정원이 건물의 일부가 아님을 표시해야 합니다. 바로 이것이 관계의 한 예입니다. 관계에는 여러 다각형이 포함되며 건물의 속성은 다각형이 아닌 관계에 부여됩니다.  

![An example of a multipolygon][]

관계는 여러 개체의 모음을 정의해야 할 때 사용됩니다. 또 다른 예로는 버스 노선(선들의 모음), 길고 복잡한 개체(강 또는 도로), 하나의 장소에 존재하는 여러 개의 다각형(대학교의 건물 등)이 있습니다.  

오픈스트리트맵에는 다중 다각형, 노선, 경계, 그리고 제한(좌회전 불가 등), 총 네 가지 유형의 관계가 있습니다. 이 장에서는 다중 다각형과 노선을 다뤄보겠습니다.  

다중 다각형 관계 만들기
-------------------------------

다중 다각형을 어떻게 만드는지 한번 알아봅시다.  

- 먼저 다각형을 그립니다. 여기서는 바깥쪽 직사각형과 작은 직사각형 두 개, 총 세 개의 다각형을 그려야 합니다.

![Multipolygon ways][]

- 그린 다각형을 모두 선택합니다. 여러 개체를 선택하려면 SHIFT 키를 누르면서 선택하면 됩니다.  
-  *도구->다각형 생성*을 클릭합니다.  
- 태그 창에 새로운 다중 다각형이 추가됩니다.

![New mp object][]

- 편집 버튼을 클릭합니다.  

- 관계 편집기 창이 떠야 합니다. 이제 선의 집합에 태그를 추가하는, 다소 복잡한 작업을 해야 합니다.  

![Building relation][]

- 관계 편집기의 상단에 관계에 붙어 있는 태그 목록이 뜹니다. 여기에 뜨는 태그는 일반적으로 생각하는 태그와 정확히 똑같은 의미를 가집니다.  
- 하단에는 관계에 속한 개체의 목록이 뜹니다. 여기서는 총 세 개의 개체가 뜨고, 이는 곧 관계가 세 개의 선으로 이루어져 있다는 의미가 됩니다.  
- 이미 *type=multipolygon* 태그가 있다는 점을 알아채셨나요? 여기에 관계가 건물이라는 것을 밝히기 위해 *building=yes* 태그를 추가로 붙여야 합니다.  
- 태그 상자를 클릭하고 건물 태그를 추가하세요.  

![Building yes][]

- 선의 **역할**은 이미 적절하게 부여되어 있습니다. 관계의 각 구성원은 역할을 가지며, 이 역할은 구성원들의 목적을 나타냅니다. 여기서는 바깥쪽(outer) 다각형에 **outer** 역할이, 안쪽(inner) 다각형에는 **inner** 역할을 부여해야 합니다. **outer**와 **inner**는 다중 다각형 관계에서 사용할 수 있는 역할입니다.  

- 확인을 누르면 다중 다각형이 완성됩니다!  

![New multipolygon][]

이렇게 만든 다중 다각형은 다음과 같이 지도에 표시됩니다.  

![Multipolygon in Mapnik][]

다중 다각형을 이용하면 하중도가 있는 강이나 복잡한 건물도 얼마든지 나타낼 수 있습니다. 더 자세한 설명은 [오픈스트리트맵 위키](http://wiki.openstreetmap.org/wiki/Relation:multipolygon)를 참고하세요.  

노선 관계
----------------

관계는 긴 노선를 나타내는 데에도 매우 유용합니다. 예를 들어, 버스 노선이나 자전거 도로 노선은 수많은 도로 조각으로 이루어져 있습니다. 이러한 노선을 정의하기 위해 노선의 일부인 도로 조각을 모두 포함하는 관계를 작성할 수 있습니다. 버스 정류장과 같은 부가적인 요소도 노선 관계의 구성원이 될 수 있습니다.  

![Route relation][]

JOSM에서 버스 노선을 만드는 방법을 알아봅시다.  

- 먼저 노선이 지나는 모든 선을 선택합니다. 선의 일부만 관계에 집어넣어야 한다면 '선 분할' 도구로 해당 선을 분할해야 합니다.  
- 모든 선을 선택했다면, *사전 설정->교통->대중교통->대중교통 노선(버스)*을 클릭합니다.  

![Public transport preset][]

- 새로운 창이 뜰 것입니다. 여기에서 노선 관련 정보를 입력할 수 있습니다.

![New route relation][]

화면 상단의 메뉴에서 특정 노선 유형을 선택하는 것이 중요합니다. 버스 노선의 경우 버스와 트롤리 버스의 두 가지 옵션을 사용할 수 있습니다. 일반적으로 노선명, 노선 번호, 시점 및 종점을 입력합니다.

- '새 관계'를 클릭합니다. 그러면 다중 다각형 강좌에서 봤었던 관계 편집기 창이 뜹니다.  

![Bus route relation][]

- 관계를 노선으로 정의하는 태그가 이미 붙어 있다는 점을 주목하세요. 이번에는 *type=multipolygon*이 아닌 *type=route*입니다. 또한 관계가 철도 노선, 자전거 노선 등이 아닌 버스 노선이라는 것을 알려주는 태그도 처음부터 포함되어 있습니다.  
- 이제 각 구성원의 *역할**을 어떻게 지정해야 하는지 고민할 수도 있겠습니다. 그러나 노선의 경우에는 구성원의 역할을 지정할 필요가 없습니다. 소프트웨어는 비어 있는 역할 칸을 보고 해당 조각이 노선의 일부라는 것을 알게 됩니다. 각 조각의 역할을 **route**로 정의할 수도 있지만, 꼭 필요한 것은 아닙니다.  
- 확인을 누르면 노선이 완성됩니다!  

> 관계 목록을 지도에서 보고 싶으시다면, 다음과 같은 버튼을 클릭해 관계 패널을 여세요. ![relation panel button][]{: height="30px"}. 관계 패널에서는 관계를 선택 및 편집하거나, 새로운 관계를 만들 수 있습니다.  

마치며
-------

관계는 이해하기 어려울 수 있고 자주 사용할 필요는 없지만, 알아야 할 필요는 있습니다. 매번 올바른 지도를 만들기 위해 관계가 필요하다는 것을 깨닫고, 이 지식을 활용하는 동시에 오픈스트리트맵 위키에서 더 많은 정보를 찾아보아야 관계를 올바르게 매핑할 수 있습니다.


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png