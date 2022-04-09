---
layout: doc
title: 현지에서 얻은 정보 편집하기
permalink: /ko/josm/editing-with-josm/
lang: ko
category: josm
---

현지에서 얻은 정보 편집하기
==================


지금까지 오픈스트리트맵에서 객체를 그리는 방법과 객체에 의미를 부여하는 방법을 알아보았습니다. 이 장을 읽기 전에 [스마트폰 또는 GPS, 종이를 활용해 지도 그리기](/ko/mobile-mapping/)를 먼저 보는 것이 좋습니다.

이 장에서는 다시 JOSM으로 돌아가 지금까지 다루지 않았던 기능들을 소개하겠습니다.

JOSM 레이어
-----------
지금까지의 설명을 잘 따라오셨다면 아마 JOSM에 다양한 정보를 올려놓을 수 있다는 것을 눈치채셨을 수도 있습니다. 오픈스트리트맵 데이터를 다운로드하고, 빙 위성 사진을 추가하고, GPS 궤적과 현장 지도를 올려 놓고... 이 모든 작업을 JOSM 한 곳에서 진행했습니다.

혹시 이렇게 새로운 것들을 JOSM에 추가할 때마다 화면 오른쪽의 레이어 패널에 레이어가 추가되는 모습까지 눈치채셨나요? 바로 아래와 같이 말이죠.

![Layers panel][]

레이어 패널에 뜨는 각 항목들은 지금까지 지도 창에 연 데이터를 나타냅니다. 위 이미지에서 "Data Layer 1"은 편집 중인 오픈스트리트맵 데이터를 나타내고, "Field Papers"는 JOSM에 불러온 현장 조사 종이를 나타냅니다.

여기서 만약 빙 위성 사진을 추가하면 "Bing 위성 사진"이라는 이름으로 새 레이어가 추가될 것입니다.

레이어라는 개념은 쉽게 이해하기 어렵습니다. 각 레이어가 반투명 종이라고 상상해 봅시다. 각 종이에는 서로 다른 정보가 담겨 있고, 우리는 이 종이의 배열 순서를 원하는 대로 바꿀 수 있습니다.

위성 사진, GPS, Field Paper와 같이 지도를 그리기 위해 배경으로 사용되는 레이어를 '배경 레이어'라고 합니다. 오픈스트리트맵 데이터 레이어는 실제로 작업이 이루어지는 레이어입니다.

-   레이어를 움직이려면 레이어 패널에서 움직이고자 하는 레아이를 클릭하고 위쪽 또는 아래쪽 화살표를 클릭하면 됩니다.

![Layers up down][]

-   레이어를 숨기려면 숨기고자 하는 레이어를 선택한 후 보이기/숨기기 버튼을 클릭하세요.

![Layers show hide][]

-   그러면 선택한 레이어가 지도 창에서 사라집니다. 보이기/숨기기 버튼을 한 번 더 클릭하면 선택한 레이어가 다시 나타납니다.
-   지우고자 하는 레이어를 선택하고 삭제 버튼을 클릭하면 레이어가 지워집니다.

![Layers delete][]

-   마지막으로 알아 둬야 할 것이 있습니다. 바로 JOSM에서 *활성화된* 레이어만 편집할 수 있다는 사실입니다. 만약 지도 창에 뜨는 지도를 수정할 수 없다면, 아마 해당 레이어를 활성화하지 않아서 그럴 가능성이 높습니디. GPS 궤적, Field Paper, 위성 사진과 같은 대부분의 레이어는 수정이 불가능합니다. 위에서 "Data Layer 1"로 표시된 오픈스트리트맵 데이터 레이어만 수정이 가능합니다.
-   레이어를 활성화하려면 원하는 레이어를 선택하고, 활성화 버튼을 클릭하세요.

![Layers activate][]


GPS 데이터와 현장 지도(Field Paper) 사용하기
-------------------------------
[스마트폰 또는 GPS, 종이로 지도 그리기](/ko/mobile-mapping/) 단락을 보면 GPS와 Field Paper로 현지 정보를 수집하고, 이를 JOSM에 레이어로 불러오는 방법을 알 수 있습니다.

이제 이렇게 얻은 정보를 디지털화해서 오픈스트리트맵에 집어넣도록 합시다.

현장 정보를 오픈스트리트맵에 집어넣는 방법도 지금까지 배운 절차, **다운로드, 편집, 저장**과 같습니다. 차이점이라면 지금까지는 위성 사진만 배경에 갖다 놓았다면 이제부터는 GPS 데이터, Field Paper, 참고들도 배경에 놓을 것이라는 사실뿐입니다.

-   예를 들어 GPS 궤적을 JOSM 배경 레이어에 놓았다고 가정해 봅시다. 궤적에 있는 점들 중 하나에 030이라는 이름을 붙이고, 공책에 030은 학교의 위치를 나타낸다고 적었다고 칩시다. 이 점을 오픈스트리트맵에 추가하려면 그리기 도구를 선택하고, 지도 창에 뜨는 030 점 위치에서 마우스 왼쪽 버튼을 더블 클릭한 후, 사전 설정 메뉴에서 학교를 선택해 '사전 설정 적용'을 클릭해야 합니다. 선과 도형을 추가하는 방법도 이와 같습니다.

![GPS in JOSM][]

태그
----
점, 선, 도형을 단순히 그리기만 하면, 개체의 위치는 알 수 있어도 개체가 무엇을 의미하는지는 알 수 없습니다. 즉 개체가 **어디에** 있는지는 알 수 있지만, 개체가 **무엇을 의미**하는지는 알 수 없습니다. 오픈스트리트맵에서 개체의 **의미**를 알려주는 것은 바로 **태그**입니다.

태그는 마치 라벨과 같습니다. 예를 들어 정사각형을 그렸을 때, 여러분이 그린 정사각형은 정사각형이라는 것 그 이상의 의미는 없습니다. 하지만 태그를 통해 정사각형에 추가적인 의미(건물, 이름은 "Menara Thamrin", 16층)를 부여할 수 있습니다.

한 개체에 원하는 만큼 많은 태그를 붙일 수 있습니다. 태그는 **키**와 **값**의 쌍으로 오픈스트리트맵에 저장됩니다. 마치 다음과 같이 말이죠.

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

JOSM에서 개체를 선택하면, 해당 개체에 붙어 있는 모든 태그를 화면 오른쪽의 속성 패널에서 볼 수 있습니다.

![Properties panel][]

### 태그 편집하기

속성 패널을 이용하면 태그를 추가하거나, 수정하거나, 삭제할 수 있습니다. 그러나 전통적으로 모든 태그는 영어이기 때문에, 혼란을 피하기 위해 사전 설정 메뉴를 이용하는 것이 보다 쉽습니다. 태그를 추가하거나 변경하면, 개체의 속성이 바뀝니다.

-   개체의 태그를 변경하려면, 먼저 바꾸려는 태그를 선택하세요.
-   그런 다음 (1) 사전 설정 메뉴를 이용하거나, (2) 속성 창에서 직접 태그를 수정하면 됩니다.

### 자주 하는 실수: 선이나 다각형을 이루는 점에까지 태그를 붙이기

점의 속성을 편집하려면 먼저 점을 선택하고, 사전 설정 메뉴나 속성 패널을 활용해 점에 태그를 추가합니다. 자주 하는 실수는 선이나 도형에 속성을 부여할 때 발생합니다.
선이나 도형에 태그를 붙일 때는 반드시 선에 속한 점은 선택하면 안 됩니다.

이러한 실수는 의외로 자주 일어나는데, JOSM의 선택 도구를 이용해 상자를 그리면 상자 내부의 모든 개체(선과 선에 속한 **점까지**)가 선택되기 때문입니다. 반드시 선에 속한 점이 아닌 **선 그 자체**만 선택해야 합니다.

![Nodes mistake][]

오픈스트리트맵 파일 저장하기
----------------
JOSM에서 지도를 편집할 때, 항상 다운로드, 편집, 업로드 사이클을 빠른 시간 안에 끝내는 것이 좋습니다. 데이터를 미리 다운로드해 놓고, 며칠 뒤에 편집 후 업로드하고 싶을 수도 있겠지만, 그러다가 그 사이에 다른 사람이 그 자리를 편집하면 어떻게 될까요? 오류와 충돌이 발생하게 됩니다.

편집 내역을 즉각 업로드하는 것을 두려워하지 마세요. 오히려 고생해서 작업한 결과물을 데이터베이스 서버에 바로 저장하는 것이 좋습니다.

넓은 지역을 편집하지 않을 거라면, 편집할 때마다 지도 데이터를 다운로드하는 것이 좋습니다. 그 사이에 다른 사람이 끼어들지 않게요.

그러나 때로는 오픈스트리트맵 데이터를 컴퓨터에 저장해야 할 때도 있습니다. 인터넷 연결이 원활하지 않거나, 데이터를 나중에 업로드해야 하는 상황이 있을 수 있으니까요.

-   오픈스트리트맵 파일을 저장하려면, 먼저 저장하고자 하는 레이어가 활성화되었는지 확인합니다. 그러고 나서 "파일" 메뉴로 들어간 뒤, "저장"을 클릭합니다(아래와 같이 생긴 버튼을 클릭해도 됩니다). 저장 위치를 선택하고 파일 이름을 입력합니다.

![JOSM save button][]

-   이제 JOSM을 닫아도 됩니다. 저장한 파일을 열고 싶다면, "파일" 메뉴로 들어가서 "열기..." 버튼을 클릭합니다.

마치며
-------
이번 장에서는 JOSM 인터페이스를 조금 더 들여다 보고, 레이어와 태그가 무엇인지를 알아보았습니다. 지금까지 따라온 여러분들은 지도를 만드는 방법, 오픈스트리트맵을 편집하는 방법을 탄탄하게 배웠습니다. 축하드립니다!


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png