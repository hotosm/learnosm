---
layout: doc
title: JOSM 편집 도구
permalink: /ko/josm/josm-tools/
lang: ko
category: josm
---

JOSM 편집 도구
==================

> 2017-06-09에 검토됨  

- TOC
{:toc}

[JOSM 입문하기 가이드](/ko/josm/start-josm/)에서는 JOSM으로 개체를 그리는 방법을 배울 수 있었지만, 더 많은 도구와 스킬은 다루지 않았었습니다.

여기서는 JOSM으로 지도 지물을 그리는 데 사용하는 기본적인 도구와 스킬을 배우고, 다음 장에서는 더 복잡하고 심도 있는 기법을 다뤄 보겠습니다.

샘플 파일 가져오기
-------------------

- JOSM 도구 사용법을 익히기 위해, [tools_menu_sample.osm](/files/tools_menu_sample.osm) 파일을 다운로드하겠습니다. JOSM을 켜고 다운로드한 파일을 여세요.

![tools_menu_sample.osm][]

그리기 도구
-------------

JOSM 상단의 "도구" 메뉴를 클릭하면 선과 도형을 그리거나 개체를 편집하는 다양한 도구를 볼 수 있습니다.

JOSM에는 선과 도형을 쉽게 그리게 해 주는 도구들이 있습니다. 해당 도구들은 JOSM 상단의 "도구" 메뉴에서 찾을 수 있습니다.

![Tools menu][]

도구 메뉴의 기능을 사용하려면 먼저 지도 창에서 점이나 선, 도형을 클릭해야 합니다. 샘플 파일에는 많은 도구를 사용해 보기 위해 다양한 요소가 들어 있습니다.

### 점을 원 모양으로 정렬  

- 파일에 들어 있는 요소 중 찌그러진 원을 선택하세요.

![Align nodes in circle][]

- 그러고 나서 도구 메뉴로 들어가 '점을 원 모양으로 정렬'을 클릭하세요. 찌그러진 원이 깔끔한 원이 됩니다.

샘플 파일에 다양한 도구를 적용해 보세요. 다른 도구의 사용법은 아래에 나와 있습니다.

### 선 분할  

'선 분할' 기능을 이용하면 하나의 선을 두 개로 분할할 수 있습니다. 선 분할 기능은 도로의 일부 구간(교량 구간 등)에 다른 속성을 붙일 때 유용합니다. 선 분할 기능을 사용하려면 선 위의 점을 선택한 뒤, 도구 메뉴로 들어가 '선 분할'을 클릭하면 선택한 점을 기준으로 선이 두 개로 분할됩니다.


### 선 결합

선 결합 기능은 선 분할의 반대로, 동일한 점을 공유하는 두 개의 선을 하나로 합치는 기능입니다. 선 결합 기능을 사용하려면 결합하고자 하는 선 두 개를 선택합니다. 여러 개체를 선택하려면 시프트 키를 누르면서 선택하고자 하는 개체를 하나씩 클릭하면 됩니다. 결합하고자 하는 선을 모두 선택했으면 도구 메뉴의 '선 결합'을 클릭하세요.

![Combine way][]


### 선의 방향을 뒤집은 후 결합하기  

만약 결합하고자 하는 선의 방향이 서로 다르다면, 다음과 같은 경고가 뜹니다.

![Reverse and combine][]

두 선의 방향을 통일해서라도 결합하고 싶다면, "뒤집고 결합"을 선택하세요.


### 선 방향 뒤집기

선의 방향을 바꾸고 싶다면 '선 방향 뒤집기' 기능을 사용하세요. 오픈스트리트맵의 모든 선에는 방향이라는 개념이 있습니다. JOSM에서는 이 방향을 화살표로 나타내 줍니다. 선의 방향은 일반적으로 중요하지 않지만, 일방통행로나 강과 같이 방향이 중요한 개체는 예외입니다. 일방통행로나 강과 같은 선을 다룰 때는 선의 방향을 바로잡기 위해 방향을 뒤집어야 할 때가 있습니다.

![Way direction][]

### 선 간소화

만약 선에 너무 많은 점이 포함되어 있어서 불필요한 점을 빼고 싶다면, '선 간소화' 기능을 사용하면 됩니다.

![Simplify way][]


### 원 그리기

'원 그리기' 도구를 이용하면 보다 완벽한 원을 그릴 수 있습니다. 원의 지름이 될 선을 선택한 후, 도구 메뉴에서 '원 그리기'를 선택하세요.

![Create circle][]


### 점을 직선으로 정렬

'점을 직선으로 정렬' 기능을 활용하면 점들을 일직선으로 나열할 수 있습니다. 특히 길이가 긴 선에 유용합니다. 이 기능을 사용하면 선이 다소 평행 이동하는 경향이 있다는 점에 유의하세요.

![Align nodes in line][]

### 형태를 직각화

'형태를 직각화' 기능은 건물과 같은 네모난 개체에 유용합니다(**처음부터 직사각형으로 건물을 그려 주는 [JOSM 건물 도구](/ko/josm/josm-more-plugins/)도 참고하세요**). 이 기능을 사용하면 선택한 개체의 모서리를 모두 직각이나 평각으로 만들어 줍니다.

![Orthagonalize][]


### 선 떼어내기

'선 떼어내기' 도구를 이용하면 실수로 붙어 버린 두 개체를 떨어뜨리는 데 유용합니다. 지도를 그리다 실수로 도로를 건물에 붙여 버리면 이 도구를 사용해 문제를 해결할 수 있습니다.

![Unglue way][]

*떼어낸 선과 점은 물리적으로 움직이기 전까지는 분리된 것처럼 보이지 않습니다.*

키보드 단축키
------------------

지금까지 배운 방법으로는 지도를 편집하기 번거롭다는 것을 눈치채셨을 것입니다. 이를 해결하기 위해 JOSM에는 단축키가 있습니다.

이제 일일이 마우스로 도구 메뉴로 들어갈 필요 없이, 키보드 입력만으로 도구를 편하게 이용할 수 있습니다.

위에서 언급한 도구들은 모두 단축키가 있습니다. 단축키는 도구 메뉴를 클릭했을 때 각 항목의 오른쪽에 나와 있습니다. 예를 들어, 'O' 키는
점을 원 모양으로 정렬하는 단축키입니다. 'L'은 점을 일직선으로 정렬하는 단축키입니다. 단축키를 외우는 데는 시간이 걸리지만, 외우기만 한다면
훨씬 시간을 아낄 수 있을 것입니다.

중요한 단축키(**굵은 글자**)들은 아래와 같습니다.

1.  선택 도구 활성화 - **S**
2.  그리기 도구 활성화 - **A**
3.  확대/축소 도구 활성화 - **Z**
4.  선택한 개체 지우기 - **Delete**
5.  확대 - **+**
6.  축소 - **-**


크기 조절 및 회전
----------------

이제 이미 그린 선이나 도형을 회전하는 방법을 알아봅시다.

개체를 회전하려면, 먼저 개체를 선택하고, **Shift+Ctrl**을 누른 채로 마우스를 움직이세요.

![Rotate demo][]

개체의 크기를 조절하려면 **Shift+Ctrl** 대신 **Alt+Ctrl**을 누르면 됩니다.

해당 방법은 JOSM 하단 바에도 나와 있습니다.

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