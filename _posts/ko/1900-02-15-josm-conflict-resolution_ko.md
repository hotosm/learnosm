---
layout: doc
title: JOSM 충돌 해결하기
permalink: /ko/josm/josm-conflict-resolution/
lang: ko
category: josm
---

JOSM 충돌 해결하기
====================

> 2016-09-27에 검토됨  

가끔씩 JOSM으로 작업 후 데이터를 업로드할 때 충돌이 발생했다는 경고를 받을 때가 있습니다.  
![conflict detected][]  
점 A라고 부르는 지점이 포함된 수많은 데이터를 다운받고 편집하는 동안 다른 사용자가 점 A를 다운로드하여 변경한 후 변경 내역을 오픈스트리트맵에 다시 저장했습니다. 이제 점 A 버전을 업로드하려고 할 때 컴퓨터에 저장된 점 A의 버전과 서버에 저장된 버전이 다르기 때문에, JOSM은 어떤 버전의 점 A를 저장해야 하는지 모릅니다.  

충돌
----------

때때로 JOSM에서 알아서 충돌을 해결할 수 있는 경우도 있습니다. 그럴 때는 다음과 같은 메시지가 표시됩니다.  
![resolved automatically][]  
즉, 다른 사용자가 이미 개체를 삭제했기 때문에 JOSM이 로컬 데이터 집합의 개체를 오픈스트리트맵 서버로 업로드하지 않기로 결정했다는 의미입니다. 그러나 JOSM이 알아서 조치를 취할 수 없는 충돌도 있고, 이럴 때 최선의 행동 방침이 무엇인지 결정하는 것은 사용자의 몫입니다. 즉 충돌을 해결하는 것이 여러분에게 달렸다는 것을 의미합니다.  

아래 메시지는 레이어 1에서 생긴 모든 충돌을 **충돌 패널**에서 보아야 한다는 것을 의미합니다.  
![warning unresolved][]  

아래 메시지는 편집 시 충돌이 발생할 수도 있다는 경고입니다. 오픈스트리트맵 서버를 확인하면 혹여나 발생할 수 있는 편집 문제를 해결할 수 있습니다.  
![check on server][]  

아래 경고는 삭제하려는 점이 어떤 선에 여전히 속해 있기 때문에 점을 삭제하지 못했음을 나타냅니다. 이 문제를 해결하려면 사용자가 데이터를 업로드하기 전에 JOSM으로 돌아가서 충돌을 해결해야 합니다.  
![still in use][]  

충돌 해결하기
--------------------

충돌을 해결하는 과정은 사실 꽤 간단하지만, 처음에는 혼란스러울 수 있습니다. 기본적으로 모든 충돌에 대해 JOSM은 사용자 컴퓨터의 개체과 서버에 있는 개체, 둘 중 하나를 선택할 수 있는 권한을 제공합니다. 사용자 컴퓨터의 버전을 유지할지, 아니면 서버의 버전을 유지할지를 선택하는 것은 사용자의 몫입니다.  
아마 여러분은 "물론 제 버전이 더 나을 거예요!"라고 생각할 수도 있습니다. 여러분 말이 맞을 수도 있어요. 하지만 이 장의 시작 부분에서 언급한 예시를 다시 한번 생각해보세요. 편집하는 동안 다른 기여자가 데이터 집합의 점 중 하나에 많은 정보를 추가했을 수 있습니다. 해당 버전 대신 여러분의 버전을 선택하면 다른 기여자가 추가한 중요한 정보를 모두 잃게 됩니다. 따라서 서버의 버전을 그대로 유지하거나, 혹은 서버의 버전을 사용자 버전과 병합하는 것 또한 고려해야 합니다.  
충돌 창이 나타나면 "...만 동기화" 버튼을 클릭하는 것이 가장 좋습니다. 버튼을 여러 번 클릭해야 할 수도 있지만 한 번에 하나씩 충돌을 해결하는 것이 가장 좋습니다.  
![synchronize node][]  
해당 버튼을 클릭하면 충돌을 자세히 설명하는 팝업 창이 나타납니다. 오류 메시지는 복잡해 보일 수 있지만, 실은 굉장히 간단합니다. 상단의 빨간색 사각형 기호를 통해 충돌의 유형을 알 수 있습니다. 하단에는 개체의 위치(좌표) 및 존재 유무(삭제 여부)와 같은 속성이 표시됩니다.  

**충돌 유형:**

- **속성:**  개체가 움직였거나 삭제됨  
- **태그:**  태그가 일치하지 않음  
- **점:**  선에 속하는 점들이 서로 다름  
- **구성원:**  관계의 구성원이 서로 다름  
![properties with conflicts][]  

충돌은 두 편집이 동시에 이루어졌을 때만 나타납니다. 충돌이 3개 이상일 경우 연쇄적인 충돌이 나타납니다. 따라서 한 번에 두 개의 충돌만 선택하거나 병합해야 합니다. 원하는 버전을 선택하거나 두 버전을 병합할 수 있습니다.  

아래 예시에서는 병합 옵션이 없습니다. 여러분의 편집이 올바르면 첫 번째 열이나 '내 버전'을 클릭합니다. 서버에 저장된 편집이 더 낫다고 생각되면 'OSM 서버의 버전'을 누르십시오.  
![conflicts resolved][]  

가장 적합한 버전을 선택한 후 "충돌 해결 적용"을 누르십시오. 몇 개의 창이 더 나타나고, 그러고 나면 편집한 내용을 업로드할 수 있습니다. 편집을 좀 더 해 보세요. 그런 다음 '업로드'를 클릭합니다. 다음과 같은 팝업이 나타납니다.  
![command stack][]  

창 메뉴에서 충돌 항목을 선택하면 충돌 목록이 표시됩니다. 해결되지 않은 충돌의 개수가 헤더에 표시됩니다. 충돌을 해결하려면 충돌을 선택하고 해결 버튼을 클릭하세요. 충돌 패널은 처리해야 할 충돌이 많을 때 유용합니다.  
![one unresolved][]  
충돌 패널에 뜨는 모든 충돌을 해결하기 전까지는 편집 내역을 업로드할 수 없습니다.  

충돌을 피하는 방법
------------------------

### 재깍재깍 업로드하기

충돌의 가능성 및 횟수를 최소화하려면 편집한 내용을 주기적으로 업로드하는 것이 중요합니다. 작업 중인 영역을 컴퓨터에 저장하고 나중에 업로드하면  충돌이 더 자주 나타납니다. 작업 중인 영역을 다운로드하여 편집한 후 즉시 업로드하는 것이 가장 좋습니다. 데이터를 다운로드하고 해당 데이터에 대한 변경 내용을 업로드하기까지의 시간이 길어질수록 그 동안 다른 기여자가 동일한 지물을 편집했을 가능성이 높아집니다. 만약 매파톤에 참여 중이고 다른 사람이 작업할 수 있는 도로와 같은 지물을 편집하고 있다면, 그냥 6번 편집할 때마다 업로드하세요!  

### 다운로드한 영역만 편집하기

다운로드한 영역 안에서 편집하면 충돌 위험을 최소화할 수 있습니다. 다운로드한 영역 바깥을 편집하지 마세요. 다운로드한 영역의 외부는 검은색 배경에 노란색 대각선으로 이루어져 있습니다.  

![edit outside area][]  

마치며
--------
JOSM에서 편집하는 경우 충돌이 발생할 위험이 있습니다. 두 사람이 동시에 하나의 개체를 편집할 때 충돌이 발생합니다. 충돌이 무엇이고 어떻게 처리해야 하는지 이해하면 가능한 최상의 기여분을 오픈스트리트맵에 저장할 수 있습니다.  


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