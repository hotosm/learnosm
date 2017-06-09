---
layout: doc
title: JOSM 修改流程
permalink: /zh_TW/josm/more-about-josm/
lang: zh_TW
category: josm
---

JOSM 修改流程
========================

> 這份指南可以到 [josm_more-about-josm_zh_TW.odt](/files/josm_more-about-josm_zh_TW.odt) 或是 [josm_more-about-josm_zh_TW.pdf](/files/josm_more-about-josm_zh_TW.pdf) 下載  
> Reviewed 2015-07-12  

在前面的章節，
你安裝了 JOSM 並開始繪製你的第一個點、線與面。
在這些物件上，你加入了一些邊框以加入更多有關物件的資訊。
在最後，你可以開始用 JOSM 繪製你自己的地圖。

這些都是好的練習，而現在，我們準備要編輯開放街圖了。

在這個章節，我們會更仔細地了解 JOSM 的介面，
了解我們能怎麼使用這些介面來編輯開放街圖的地圖。

修改的循環
---------------------
用 JOSM 編輯 OpenStreetMap 和我們之前看過的 iD 編輯器非常類似。
不過， JOSM 是個桌面應用程式，
所以運作起來有些不一樣。
用 JOSM 新增、編輯 OpenStreetMap 的流程一直像下面這樣：

1. 從 OSM **下載**當前的地圖資料
2. 使用衛星影像、GPS、Field Papers **編輯** 它，並且標註資訊作為指引
3. 把你的修改 **儲存** 到開放街圖

下載 OSM 地圖資料
--------------------
第一個編輯的步驟是下載你想要改進區域的地圖資料。
請記得，每次你想要修改地圖的時候你都必須做一次，
因為地圖常常會被其他使用這更新。

- 點擊左上方的「File」並點選「Download from OSM」。
    這會打開一個下載對話窗，
    點選下載按鈕可以簡單的操作這個對話窗，
    顯示在這裡：

![JOSM Download Button][]

- 當下載視窗打開的時候，你應該看到一個地圖，並且有粉紅色的框覆蓋在上面。
    如果你看不到地圖，點選標示為
    「Slippy map」的分頁。

![JOSM Download Dialog][]

- 粉紅色的框呈現我們即將下載來編輯的地圖區域。
    使用你的滑鼠上下移動並縮放到你非常熟悉的區域，
    例如你的家鄉或鄰近區域。
    這個控制方式就跟 JOSM 的地圖視窗一樣。
    滑鼠右鍵可以拖拉地圖，
    滾輪可以讓你縮放地圖大小。

> 如果你在筆記型電腦上，操作縮放有時候會十分困難。
>⇥t如果你有滑鼠，在 JOSM 上的操作會簡單一些；
>⇥不過現在的筆記型電腦一般都允許你使用觸控版操作滾輪。

-⇥拉出一個方框以框住你想要下載的區域。要拉一個方框，點擊地圖，
    按住你的滑鼠左鍵，並移動你的滑鼠以建立一個方框。
    當你拉好以後，放開滑鼠左鍵。
- 當你對方框的位置與地點滿意後，點選視窗底部的「Download」。
    JOSM 會從 OpenStreetMap 下載這個區域的資料，
    並且把這個地圖呈現在地圖視窗
    供你編輯。

### 加入圖層
如果你曾跟隨我們的腳步，使用 iD 編輯器加入第一個點，
你應該記得地圖下方有個衛星圖資，
可以幫助我們辨識地面上的物件。微軟的 Bing 慷慨地提供這個圖資，
方便開放街圖使用者在繪製地圖資訊的時候
參考。

-⇥要在 JOSM 裡加入 Bing 的衛星圖資，點選 JOSM 上方選單的「Imagery」，
    並選擇「“Bing Sat」。

> 如果你沒有在「Imagery」選單中看到「Bing Sat」，
> 你可能需要在 JOSM 的設定裡面開啟。前往 Edit 選單中的 Preferences ，
> 並且點選寫著「WMS TMS」的圖示。你可能需要往下拉才能找到。
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
> 點擊「Bing Sat」，然後點「Activate」。


### JOSM 之旅
現在，我們已經下載了 OpenStreetMap 圖資，並且加入了 Bing 的衛星圖資，
接著讓我們看看 JOSM 的另一個介面。

![JOSM layout][]

主視窗你應該已經很熟悉了，這是地圖視窗， 
也是大部分的操作所在的地方。這裡你可以看、編輯，
並新增 OpenStreetMap 圖資。

地圖視窗的右方有一系列面板，
每個都有自己的功能。一般來說，當你第一次安裝 JOSM 後，
有幾個面板就愈社會顯示，例如 Layers、Properties 與 Selection。
當你點選了地圖視窗的點、線、面，
它就會顯示在 Selection 面板；
這個物件的資訊會顯示在 Properties 面板，
物件作者的匿稱會顯示在 Authors 面板。

點選 JOSM 左下角的數個按鈕，可以打開或關閉這些面板。
在這些按鈕上面，在右上方，是可以改變滑鼠行為的工具。
你已經熟悉其中的一些，
比如選擇（Select）工具與繪製（Draw）工具。
在他們下面，是一些工具讓你更容易縮放、刪除物件、繪製一個面、
或建立一段平行於另一條線的線。


編輯
----
所以我們已經完成了編輯的第一個步驟－下載。
我們已經準備了 JOSM，並有衛星圖資作為參考。
下一步，就是編輯地圖，並新增物件。

根據你下載的地圖資料，上面可能已經有非常多，
或只有一些已經存在的地圖資料。不過注意，
這些資料跟我們之前看過的點、線、面是同一類資料，這些資料呈現了這個區域在真實世界的面貌。

- 使用你學過的這些技巧，去新增一些你認識的地點到地圖上。
	如果你看到錯誤，可以嘗試修正它們。
- 當你還在學習的時候，不用過於積極去編輯地圖。
	如果你不確定你編輯的物件，最好的方法是保持原狀。
- 如果你想要移動一個點、線或面，
    使用 **選擇工具（select tool）** 。
    點擊並拖拉物件到它應該在的位置。
    這可以用來修正一些被放到錯誤位置的物件。

![JOSM select tool][]

- 使用 **繪製工具** 畫新的點、線和區塊。
    從 Presets 選單選擇這些物件以描述它，
    跟你在之前的章節做過的一樣。 

> 絕對不要編輯那些你並未下載的區域。  
你可以看到，你下載過的矩形區域擁有固定的背景，  
而那些你沒有下載的區域會有斜的細線在上面。  

![JOSM area downloaded][]

存檔
--------------
第三個，也是最後一個完成編輯的步驟，
是把這些我們做的修改上傳到 OpenStreetMap 資料庫。
為了存檔，我們必須連線到網路。

- 點選上方選單的「File」按鈕，然後點選「Upload Data」。
    這將會開啟一個上傳視窗。
    你可以點選上傳按鈕，簡單的存取到這個視窗，如下：

![JOSM Upload Dialog][]

- 視窗上會出現你新增、變動，
    或是刪除的物件清單。
    下面的方框則詢問你關於你做什麼變動。
    請寫下你繪製編輯的描述。

![JOSM Upload Dialog][]

- 點選「Upload Changes」。

- 如果這是你第一次存檔到 OpenStreetMap ，
    你將需要輸入你的 OpenStreetMap 帳戶與密碼。
- 在顯示的視窗裡輸入帳號密碼。
    如果你勾選視窗裡面的單選框，你的帳戶與密碼將會被記憶起來，
    未來就不用重複輸入。點選「Authenticate」，以進行帳戶的驗證。

![JOSM Authenticate][]

- 你將會需要稍等數秒以上傳你的修改，
    接著就完成了！你已經修改了 OpenStreetMap 的地圖。

> 每次你編輯的時候，請確保在關閉 JOSM 之前上傳你的修改，  
> 就算你還有很多修改沒有做也是一樣。  
> 上傳你的修改，然後下次有時間修改的時候，再重新進行一次流程（下載圖資 → 修改 → 上傳）。  
> 你應該不會希望辛苦工作的成果消失不見吧！

在地圖上看看你的修改
---------------------------
- 打開你的瀏覽器，並前往 [http://openstreetmap.org/](http://openstreetmap.org/) 。
- 把地圖移動到你編輯過的區域
- 你應該會到你的修改出現在地圖上了！
    如果沒有，嘗試按下 CTRL+R 以重新載入網頁。
    有時候，地圖並沒有完整更新，需要重新整理。
- 如果你沒有看到自己的修正，該怎麼辦？
    別擔心－修正出現在地圖上可能需要幾分鐘的時間。
    你也可以確認 JOSM 中你新增的部份，以確保你正確的加入他們。
    一個好的通則是，如果你的點在 JOSM 上有個圖標，
    這個點應該會出現在 OpenStreetMap 網站的主要地圖。

總結
-------
現在你已經了解如何修改 OpenStreetMap，接下來呢？
嗯，修改很棒，但這不是製作地圖的唯一方法。
你也需要學習如何走到戶外，
並收集地上有關的地點訊息。


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png