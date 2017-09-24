---
layout: doc
title: iD 編輯器
permalink: /zh_TW/beginner/id-editor/
lang: zh_TW
category: beginner
---

iD 編輯器
=============

> 此一指南可供下載： [beginner_id-editor_zh_TW.odt](/files/beginner_id-editor_zh_TW.odt) 或 [beginner_id-editor_zh_TW.pdf](/files/beginner_id-editor_zh_TW.pdf)
> Reviewed 2016-03-30

- TOC
{:toc}

iD 編輯器是預設的，瀏覽器上的開放街圖編輯器。iD 速度快而且簡單易用，而且允許依據不同的資料來源，像是衛星或是空照影像，GPS 軌跡，Field Papers 或是 Mapillary。

使用 iD 編輯器編輯一些小的或簡單的變動，用不到像是 JOSM (更進階的繪圖編輯器)的進階功能，是相當實用的方式。這一章會示範用 iD 做基本的編輯。

啟動 iD 編輯器
----------------------

-	iD 編輯器需要時常連接至網際網路。
-⇥開放網頁瀏覽器，然後連到開放街圖網站  [https://www.openstreetmap.org](https://www.openstreetmap.org) 。
- 使用你的開放街圖帳號**登入**
- 移動和縮放到地圖上你想編輯的地方。你可以按住滑鼠左鍵移動，拖拉到你想去的地方。
- 點選**編輯**旁邊的小箭頭，接著點**以 iD (瀏覽器內編輯) 編輯**。

![image1][]


iD 編輯器使用者界面
-------------------------
![image2][]

1. **編輯圖徵面板：**這個面板會顯示地圖上被選擇物件的標籤。
	您可以透過此界面新増或修改標籤。
2. **工具：**這個面板顯示基本的編輯工具：
    繪製點 (節點)，*快速鍵* **1** ![image3][]{: height="24px"}
    繪製線 (路徑)，*快速鍵* **2** ![image4][]{: height="24px"}
    繪製形狀 (多邊形)，*快速鍵* **3** ![image5][]{: height="24px"}
    復原，*快速鍵* **Ctrl+z** ![image6][]{: height="24px"}
    取消復原，*快速鍵* **Ctrl+y** ![image7][]{: height="24px"}
    儲存變動，*快速鍵* **Ctrl+s** ![image8][]{: height="24px"}
3. **地圖面板：**這個面板顯示多個設定選項：
    放大，*快速鍵* **+** ![image9][]{: height="24px"}
    縮小，*快速鍵* **-** ![image10][]{: height="24px"}
    顯示你的位置 ![image11][]{: height="24px"}
    背景圖像設定，*快速鍵* **b** ![image12][]{: height="24px"}
    地圖圖資，*快速鍵* **f** ![Map Data][]{: height="24px"}
    開啟說明文件，*快速鍵* **h** ![image13][]{: height="24px"}
4. **資訊面板：** 這個面板顯示多項資訊，像是比例尺和那些使用者在這一帶貢獻。

設定背景圖層
--------------------------------

點選**背景圖像設定**按鈕，或是使用*快速鍵* **b** ![image14][]{: height="24px"}
![image15][]
要調速**亮度**，請點選其中一個方框，總共有 100%、75%、50% 和 25% ![image16][]{: height="24px"}
你可以依據你想加的圖磚提供者 (預設是 Bing 空照圖)，來**改變背景圖層**。

你可以按**客製化**新增你自己的地圖圖磚。舉例來說，如果你想要**新增 Field Paper** [^fieldpaper]，點選**客製化**，接著按放大鏡 (搜尋) 圖示開啟視窗 :-
![image17][]
然後輸入你的 **FieldPaper snapshot URL**，就像這樣子：<http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>
要**顯示你電腦中的 GPS 軌跡** (GPX 格式)，拖拉你的 GPS 檔案到 iD 編輯器裡。
要啟用 **開放街圖 GPS 軌跡**，請點選方框。下面的圖片中，公共的 GPS 軌跡用不同顏色顯示，表示旅行的方向。
![osm gps traces][]
如果有[圖片偏移](/en/josm/aerial-imagery)狀態，你可以按**調整影像偏移**來**修正圖片偏移**。![image18][]

- 按位移按鈕移動影像。按重設鍵回到原先的位置。![image20][]

以 iD 作基本編輯
----------------------

### 新增節點

要新增新的點，請按**點**按鈕。![image3][]{: height="24px"}

- 你的滑鼠指標會變成加號 (+)。現在點你想標注的位置，例如，如果你知道這一區的醫院在那裡，點選醫院建築的位置。
![image21][]
- 注意你加了新點了。同時在左邊面板會變成能夠填寫物件詳細資訊的表格型式。點**醫院用地**能夠將節點標示為醫院。
![image22][]
- 你可以用表格來填寫你的節點詳細資訊。你可以填寫醫院名稱、地址、和/或其他附加資訊。注意每一個圖徵會有不同選項，端示選了圖徵面板中那個標籤。
- 如果你出錯的話，像是標錯地點，你可以按住滑鼠左鍵，將節點拖拉到新的位置。或者你想刪除點，對著點按住左鍵，然後按像是垃圾筒的按鈕。![image23][]{: height="24px"}
iD 編輯器的「點」其他是上面有特定「標籤』的獨立「節點」。

### 繪製線條

要新增線段，點**線**按鈕。![image4][]{: height="24px"}

- 你的滑鼠指標會變成加號 (+)。找一個還未被畫上去的道路並描繪，點道路線段開始的地方然後開始描，接著按其他點延伸。按兩下結速繪製流程，注意左邊的資訊面板。
![image24][]
- 就像是加點，選擇對線段最適合的標籤。
- 你可以藉由用左鍵按線段的點，來拖拉線段的點。
- 你也可以選擇整個線段來移動整個線段，選擇**移動工具**，接著拖拉整個線段到新的位置。![image30][]{: height="24px"}
- 當你對著線段上單獨的節點按滑鼠左鍵，你會看到這些工具：
- 刪除線段上的點。![image23][]{: height="24px"}
- 從線段分離節點。![image26][]{: height="24px"}
- 從選取的點切割線段，變成兩個線段。![image27][]{: height="24px"}
- 當你對著線段按滑鼠左鍵(但不是在點上)，你會看到這些工具：
- 刪除線段。![image23][]{: height="24px"}
- 從線段新增圓圈 (只有在線段封閉時才有作用) ![image29][]{: height="24px"}
- 移動線段 ![image30][]{: height="24px"}
- 從線段變成圓圈 (只有在線段封閉時才有作用) ![image31][]{: height="24px"}
反轉線段方向 (通常用在河流和單行道) ![image32][]{: height="24px"}

iD 編輯器的「線」通常是上面有標籤的「線段」。

>關於**刪除**的特別記錄。一般來說你如果你能改進，應該避免刪除別人畫的部分。你可以刪除你自己造成的錯誤，但如果可以改進，你應該試著*調整*別人畫的物件。這樣一來能夠在OSM資料庫保存物件的歷史，尊重其他的圖客。如果你真的覺得應該刪除，請先詢問原先的繪製者，或是在OSM的郵件論壇先詢問。

### 繪製形狀 (多邊形)

要增加新的多重多邊形，請點選**區域**按鈕。![image34][]{: height="24px"}

- 你滑鼠指標會變成加號(+)。試著用影像當參考描繪建築。
你會注意到形狀的顏色會隨著添加的屬性而會變。
![image35][]
- 選擇形狀能夠使用的工具類似點選線的情形。

*多邊形*在 iD 編輯器裡實際上是有標籤的「封閉線段」。

儲存您的編輯
--------------------

當 (如果) 你想要儲存你的編輯到開放街圖，請點選**儲存**按鈕。左邊資訊面版會顯示上傳面版。
![image36][]

-輸入有關你編輯的註解，接著點**儲存**。

> 如果你編輯的圖徵 (點、線或面) 同時間別人也有編輯的話，會出現無法上傳的警告訊息，需要解決**衝突**－選擇保留那位的編輯&上傳你的變動。*解決衝突常包括接受別人的編輯，通常你會希望回復問題物件，之後再編輯 (**下次編輯後趕快儲存，嘗試避免再次衝突！**)*

額外資訊及自定義標籤
---------------------------------------

當你編輯物件時，你會在屬性面版看到好幾個圖示。你可以按這些圖示增加額外的資訊：

- 增加海拔高度 ![image37][]{: height="24px"}
- 增加註記 ![image38][]{: height="24px"}
增加聯絡 / 電話號碼 ![image39][]{: height="24px"}
- 增加資料來源標籤 ![image40][]{: height="24px"}
增加網站 ![image41][]{: height="24px"}
- 增加無障礙設施資訊 ![image42][]{: height="24px"}
增加維基百科連結 ![image43][]{: height="24px"}

或者你可以點選**所有標籤**加客製的標籤 ![image44][]{: height="24px"}

- 這樣會顯示所有跟圖徵相關的標籤。
![image45][]
- 點選加號 (+) 增加鍵和值，或是點垃圾筒圖示刪除標籤。

iD vs JOSM
---------------

**iD 適合...**

- 當你在操作簡單的編輯
- 當你的網路速度夠快，能夠載入背景影像和儲存編輯
- 當你想要遵循一致和簡單的標籤規則
- 當你使用的電腦被限制無法安裝應用程式

**JOSM是更好的選擇...**

- 當你在增加許多棟建築 (請參考建築工具外掛)
- 當你編輯多個已存在的多邊形或線段。
- 當你的網路連線不穩或是處於離線狀態
- 當你使用特定的標籤規則 (或是客製化的預設組合)

[^fieldpaper]：關於 Field Papers，手冊中有 [section of LearnOSM](/en/mobile-mapping/field-papers/) 的章節。




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
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png
