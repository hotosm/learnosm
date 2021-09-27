---
layout: doc
title: iD 편집기
permalink: /ko/beginner/id-editor/
lang: ko
category: beginner
---

iD 편집기
=============

> 2019-06-10에 검토됨

HOT나 MissingMaps의 과업 관리자 같은 도구로 지도 작업을 시작하고 싶으신가요? [HOT 팁 문서](/ko/hot-tips/)를 참고하세요.  

- TOC
{:toc}

iD 편집기는 브라우저 기반 오픈스트리트맵 편집기로, 편집기 중에서는 사실상 표준입니다. iD는 빠르고 사용하기 쉬우며, 위성·항공 사진이나 GPS, Field Papers, Mapillary 같은 다양한 데이터를 이용해서 지도 작업을 할 수 있는 도구입니다.  

iD 편집기는 JOSM(고급 지도 작업 도구)의 복잡한 기능이 필요하지 않은 소규모·저난도 편집에 적합합니다. 이 단락은 iD를 이용한 편집의 기초를 설명합니다.  

iD 편집기 시작하기
----------------------

-	iD 편집기에는 인터넷 연결이 필요합니다.  
-	인터넷 브라우저를 열고 오픈스트리트맵 웹 사이트 [http://www.openstreetmap.org](http://www.openstreetmap.org) 로 이동하세요.  
-	오픈스트리트맵 계정으로 **로그인하세요**  
-	편집하고 싶은 위치를 지도에서 맞추고 확대하세요. 마우스 왼쪽 버튼을 누르고 지도를 원하는 방향으로 드래그하면 됩니다.  
-	**편집** 옆에 있는 작은 화살표를 누르세요. 그런 다음 **iD (브라우저 내 편집기)(으)로 편집**을 누르세요.  

![image1][]


iD 편집기 사용자 인터페이스
-------------------------
![image2][]

1. **지물 편집 창:** 이 창에서 지도에서 선택한 개체의 태그를 볼 수 있습니다.  
	이 창에서 태그를 추가하거나 편집할 수 있습니다.  
2. **도구:** 이 창에서 기본적인 편집 도구를 사용할 수 있습니다.  
    점(노드) 그리기, 단축키 **1** ![image3][]{: height="24px"}  
    선(웨이) 그리기, 단축키 **2** ![image4][]{: height="24px"}  
    공간(다각형) 그리기, 단축키 **3** ![image5][]{: height="24px"}  
    실행 취소, 단축키 **Ctrl+z** ![image6][]{: height="24px"}  
    다시 실행, 단축키 **Ctrl+y** ![image7][]{: height="24px"}  
    변경 내역 저장, 단축키 **Ctrl+s** ![image8][]{: height="32px"}  
3. **지도 창:** 이 창에서 다양한 설정을 조절할 수 있습니다.  
    확대, 단축키 **+** ![image9][]{: height="24px"}  
    축소, 단축키 **-** ![image10][]{: height="24px"}  
    내 위치 보기 ![image11][]{: height="24px"}  
    배경 설정, 단축키 **b** ![image12][]{: height="24px"}  
    지도 자료, 단축키 **f** ![Map Data][]{: height="24px"}  
    문제 확인, 단축키 **i** ![Issues][]{: height="24px"}  
    도움말, 단축키 **h** ![image13][]{: height="24px"}  
4. **정보 창:** 이 창에서 축척과 이 지역 내에 기여한 사람들 같은 다양한 정보를 볼 수 있습니다.  

## 배경 레이어 설정하기

**배경 설정** 버튼을 누르거나 단축키 **b**![image14][]{: height="24px"}를 사용하세요.  
![image15][]  
원하는 이미지 제공자에 따라 **배경 레이어를 변경**할 수도 있습니다(기본값은 Bing 항공 이미지).  

**사용자 지정**을 눌러서 직접 지도 타일을 추가할 수도 있습니다. 예를 들어, **Field Paper를 추가**[^fieldpaper]하고 싶다면, **사용자 지정**을 누르고 돋보기(검색) 아이콘을 눌러서 다음과 같이 창을 여세요.  
![image17][]   
그리고 다음 URL처럼 생긴 **FieldPaper 스냅샷 URL**을 입력하세요. <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
**컴퓨터에 있는 GPS 궤적(GPX 포맷)을 띄우려면** GPX 파일을 iD 편집기에 드래그해서 놓으세요.  
**오픈스트리트맵 GPS 궤적**을 활성화하려면 상자를 누르세요. 아래의 이미지에서, 공개 GPS 궤적이 다양한 색상으로, 진행 방향과 같이 나타납니다.  
![osm gps traces][]  
**이미지를 변경**하려면 **디스플레이 옵션**을 클릭하세요.  
![DisplayOptions][]  
만약 [이미지 오프셋](/en/josm/aerial-imagery)이 있다면, **사진 오프셋 조절**을 눌러서 **이미지 오프셋**을 고칠 수 있습니다.  
![image18][]  

- 네 방향 화살표를 눌러서 이미지를 움직이세요. 기본 위치로 되돌리려면 재설정 버튼을 누르세요. ![image20][]  

iD 편집의 기초  
----------------------  

### 점 추가하기  

새로운 점을 추가하려면 **점** 버튼을 누르세요. ![image3][]{: height="24px"}  

- 마우스 커서가 더하기(+) 모양으로 변할 것입니다. 이제 표시하고 싶은 장소의 위치를 클릭하세요. 예를 들어, 근처에 있는 병원의 위치를 알고 있다면 병원 건물의 위치를 클릭하세요.  
![image21][]  
- 새로운 점이 추가된 것을 주목하세요. 개체의 속성을 선택할 수 있도록 동시에 왼쪽 창이 바뀝니다. 점을 병원으로 지정하려면 **병원 부지**를 누르세요.  
![image22][]  
- 양식을 사용해서 병원 이름, 주소 같은 점의 세부 정보를 채울 수 있습니다. 지물 창에서 선택한 태그에 따라 각 지물은 서로 다른 양식을 따른다는 점을 명심하세요.  
- 만약 점을 잘못된 위치에 놓았다는지 하는 실수를 했다면, 왼쪽 마우스 버튼으로 점을 잡고 드래그해서 점을 새로운 위치로 옮길 수 있습니다. 점을 삭제하고 싶다면, 왼쪽 마우스 버튼으로 점을 클릭해서, 마우스 우클릭으로 메뉴를 열어 휴지통처럼 생긴 아이콘을 눌러 삭제하면 됩니다. ![PointToolDelete][]{: height="24px"}  
사실 iD 편집기에서 만든 "점"은 "태그"로 이루어진 집합을 달고 있는 독립된 "노드"입니다.  

### 선 긋기  

새로운 선을 추가하려면 **선** 버튼을 누르세요. ![image4][]{: height="24px"}  

- 마우스 커서가 더하기(+) 모양으로 변할 것입니다. 지도에 그려지지 않은 도로를 찾고 쭉 따라가세요. 도로가 시작하는 곳에서 한 번 클릭해 점을 만들고, 마우스를 움직여서 추가로 점을 찍으세요. 선을 그만 만들려면 두 번 클릭하세요. 왼쪽 창에 주목하세요.  
![image24][]  
- 점을 찍었을 때처럼 선에 걸맞는 적절한 태그를 선택하세요.  
- 왼쪽 마우스 버튼으로 점을 잡고 드래그해서 선에 속한 점을 드래그할 수 있습니다.  
- 왼쪽 마우스 버튼으로 선에 속하는 개별 점(노드)를 잡고 마우스 우클릭으로 메뉴를 열면, 다음 도구들을 사용할 수 있습니다.  
  선택한 점부터 이어서 선 그리기 ![PointToolContinue][]{: height="24px"}  
  선택한 점에 연결된 선 분리하기 ![PointToolDisconnect][]{: height="24px"}  
  선택한 점을 기준으로 선을 두 개로 분할하기 ![PointToolSplit][]{: height="24px"}  
  선에서 점 삭제하기 ![PointToolDelete][]{: height="24px"}  
- 선에 대고(점에서는 해당하지 않음) 마우스 좌클릭을 하면, 다음 도구들을 사용할 수 있습니다.  
  -   선택한 선을 지름으로 하는 원 만들기(닫힌 선이어야 함) ![image29][]{: height="24px"}  
  -   선을 다른 객체로부터 분리하기 ![LineToolDisconnect][]{: height="24px"}  
  -   선 움직이기 ![LineToolMove][]{: height="24px"}  
  -   모든 모서리를 직각으로 만들기 ![LineToolSquare][]{: height="24px"}  
  -   짧은 축을 기준으로 선 돌리기 ![LineToolReflectShort][]{: height="24px"}  
  -   긴 축을 기준으로 선 돌리기 ![LineToolReflectLong][]{: height="24px"}  
  -   선의 방향 뒤집기(강이나 일방통행로에 주로 사용) ![LineToolReverse][]{: height="24px"}  
  -   선의 중심을 기준으로 선 돌리기 ![LineToolRotate][]{: height="24px"}  
  -   선을 곧게 펴기 ![LineToolStraighten][]{: height="24px"}  
  -   선 지우기 ![LineToolDelete][]{: height="24px"}  

사실 iD 편집기에서 만든 "선"은 "태그"로 이루어진 집합을 달고 있는 독립된 "웨이"입니다.

>**삭제**할 때 주의할 점: 일반적으로 지도 개선만 하려고 할 때 다른 사람이 만든 것을 삭제하는 것은 피해야 합니다. 당신이 한 실수는 삭제할 수 있지만, 다른 사람이 기여한 것을 고쳐야 할 때는 개체를 '조정'해야 합니다. 이는 오픈스트리트맵 데이터베이스에 있는 항목의 역사를 보존하는 데 중요하며, 동료 기여자들을 존중하는 방법입니다. 만약 정말로 삭제해야 된다고 생각한다면, 우선 이전 기여자나 오픈스트리트맵 메일링 리스트의 회원들에게 물어보세요.

### 도형(다각형) 그리기

새로운 다각형을 추가하려면 **공간** 버튼을 누르세요. ![image34][]{: height="24px"}  

- 마우스 커서가 더하기(+) 모양으로 변할 것입니다. 배경 이미지를 토대로 건물 테두리를 따라 그리세요.  
- 당신이 부여한 속성에 따라 당신이 그린 다각형의 색이 바뀐다는 것을 알아차리게 될 것입니다.  
![image35][]  
- 다각형을 선택했을 때와 마우스 우클릭 버튼으로 창을 띄웠을 때 사용할 수 있는 도구들은 선을 선택했을 때와 비슷합니다.  

사실 iD 편집기에서 만든 "다각형"은 태그가 붙어 있는 "닫힌 웨이"입니다.

### 다중 다각형 그리기

때때로 외부 테두리 하나로는 부족하고, 내부 테두리가 필요한 다각형을 그려야 할 때가 있습니다. 건물을 안마당이라고, 호수를 섬이라고 생각하세요. 이러한 다각형을 외부 테두리에서 내부 테두리로 이어지도록 선 하나만으로 표현하지 마세요. 각각 테두리를 분리해서 그린 다음에, 태그를 외부 테두리에만 붙이고, 모든 테두리를 선택해서 **c**를 눌러 테두리를 결합하세요. 이것이 바로 다중 다각형입니다.

![create multipolygon][]

새롭게 만든 다중 다각형의 테두리 중 하나를 선택하면 왼쪽에서 다중 다각형 전체의 속성을 볼 수 있습니다.

![part of multipolygon][]

## 문제

iD 편집기는 편집 중에 사용자가 오픈스트리트맵을 잘못 편집했는지 확인하고, 만약 그렇다면 사용자에게 문제를 보고합니다. 화면 오른쪽의 문제 아이콘을 클릭하면 노란색(경고)과 빨간색(오류) 점을 볼 수 있습니다. 문제가 발생한 지물을 선택하면 화면 왼쪽의 지물 탭에서도 경고와 오류를 볼 수 있습니다. 만약 이러한 문제를 수정하지 않고 데이터를 업로드하면 경고 알림을 받습니다. 

![Issue][] ![Error][]

문제 탭의 아래쪽 부분에는 적용 가능한 유효성 검사 규칙이 표시되고, 원한다면 규칙 적용을 일일이 끌 수도 있습니다.

변경 내역 저장하기
--------------------

오픈스트리트맵에 당신이 편집한 것들을 저장하고 싶다면, **저장** 버튼을 누르세요. 왼쪽에 업로드 창이 뜰 것입니다.  
![image36][]  

- 자신이 무엇을 편집했는지 써 주고 **저장** 버튼을 누르세요.  

> 만약 동시에 여러 사람이 같은 지물(점, 선, 영역)을 편집했을 때에는, **충돌**을 해결하기 전까지는 편집 내역을 업로드할 수 없다는 경고를 받습니다. 여러 사람의 편집 내역 중 업로드할 것을 고르세요. 충돌을 해결할 때는 보통 다른 사람의 편집 내역을 포함하게 되어 있습니다. 이 경우 충돌이 발생한 지물로 되돌아가 다시 편집하길 원할 것입니다(**다시 충돌이 생기는 것을 방지하기 위해 편집하고 나서 바로 저장하세요!**).

추가 정보와 추가하고 싶은 태그
---------------------------------------

개체를 편집할 때, 속성 창 아래쪽에 있는 "필드 추가" 메뉴를 클릭하면 지물의 계층, 고도, 위키피디아 정보와 같은 추가 정보를 지물에 넣을 수 있습니다.  

![AdditionalTags][]

아니면 **모든 태그**를 클릭해서 추가하고 싶은 태그를 추가할 수도 있습니다. ![image44][]{: height="24px"}  

- 클릭하면 지물에 붙어 있는 모든 태그를 볼 수 있습니다.  
![image45][]  
- 키와 값을 추가하려면 더하기(+) 버튼을, 태그를 삭제하려면 휴지통 아이콘을 누르세요.

추가 튜토리얼
------------------

[우리의 외부 자료 페이지](/en/resources/#iD)에서 다양한 곳에서 나온 수많은 영상 튜토리얼 링크를 볼 수 있습니다.

iD VS JOSM
---------------  

**iD는 이럴 때 좋습니다...**

- 단순한 편집을 하려 할 때  
- 이미지를 불러오고 편집을 저장할 수 있을 정도로 빠른 인터넷을 갖추고 있을 때  
- 일관성 있고 단순한 태그 체계를 따르고 싶을 때  
- 당신이 사용하고 있는 컴퓨터에 프로그램을 설치하는 것을 제한받을 때

**JOSM은 이럴 때 좋습니다...**

- 많은 건물을 추가할 때(buildings_tool 플러그인 참조)
- 기존의 다각형이나 선을 대량으로 수정할 때
- 인터넷 연결에 의존할 수 없거나 오프라인 상태일 때
- 당신이 특정 태그 체계(혹은 이용자들이 만든 사전 집합)를 사용하고 있을 때

[^fieldpaper]: Field Paper에 관한 더 많은 정보는 [다른 LearnOSM 문서](/en/mobile-mapping/field-papers/)에서 볼 수 있습니다.



[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png