---
layout: doc
title: The JOSM Editing Process
permalink: /vi/josm/more-about-josm/
lang: vi
category: josm
---

The JOSM Editing Process
========================

> Cập nhật: 2017-11-06  

Trong chương trước,
bạn đã biết cách cài đặt JOSM và bắt đầu vẽ các điểm, đường và vùng của mình trên bản đồ.
Bạn đã thêm các cài đặt có sẵn cho các đối tượng này để bổ sung thông tin về gối tượng.
Cuối cùng, bạn đã có thể vẽ bản đồ của riêng bạn bằng JOSM.

Đây là một thí dụ tốt về cách thức chỉnh sửa bản đồ OpenStreetMap.

Trong chương này, chúng ta sẽ xem xét kỹ hơn giao diện của JOSM,
và xem xét cách sử dụng chúng để chỉnh sửa bản đổ OpenStreetMap.

Các hoạt động chỉnh sửa bản đồ
---------------------
Chỉnh sửa bản đồ OpenStreetMap bằng JOSM cũng giống như là chỉnh sửa bản đồ trên iD editor mà chúng ta đã biết.
Nhưng vì JOSM là ứng dụng cho máy để bàn
nên sẽ cách thức làm việc sẽ hơi khác một chút.
Trình tự chỉnh sửa và bổ sung bản đồ OpenStreetMap bằng JOSM luôn theo các bước sau:

1. **Tải xuống** dữ liệu bản đồ hiện tại từ OSM
2. **Chỉnh sửa** dữ liệu bản đồ dựa trên ảnh vệ tinh, thiết bị GPS, Bản đồ hiện trường và các ghi chép khác
3. **Lưu lại** các thay đổi vào trong OpenStreetMap

Tải xuống dữ liệu OSM
--------------------
Bước đầu tiên của quá trình chỉnh sửa bản đồ là tải xuống dữ liệu của khu vực mà bạn muốn bổ sung dữ liệu bản đồ.
Xin nhớ rằng chúng ta sẽ tải xuống bản đỗ mỗi khi chúng ta muốn chỉnh sửa
vì bản đồ luôn được cập nhật bởi những người dùng khác nhau.

-   Nhấp chuột vào “File” ở góc trên bên trái của JOSM và chọn “Download from OSM”.
    Điều này sẽ mở ra cửa sổ tải xuống.
    Bạn có thể mở cửa sổ này đơn giản bằng cách nhấp chuột vào nút Download,
    như hình dưới:

![JOSM Download Button][]

- Khi cửa sổ tải xuống được mở ra, bạn sẽ nhìn thấy một bản đồ.
    Nếu bạn không nhìn thấy bản đồ, nhấp chuột vào trang “Slippy map”.

![JOSM Download Dialog][]

- Sử dụng chuột để di chuyển và phóng to bản đồ
    đến khu vực mà bạn biết rõ như khu phố của bạn.
    Cách thức di chuyển bản đồ cũng giống như di chuyển bản đồ
    trong giao diện bản đồ của JOSM.
    Nút phải chuột để kéo bản đồ, nút cuộn để phóng to và thu nhỏ.

> Đôi khi, sẽ khó khăn khi bạn làm việc trên một máy tính xách tay
> để cuộn lên và xuống. Làm việc với JOSM dễ dàng hơn nhiều khi có chuột,
> nhưng hầu hết các máy tính xách tay loại mới đều cho phép bạn cuộn bằng bàn cảm ứng.

-   Vẽ một ô chữ nhật quanh khu vực mà bạn muốn tải dữ liệu xuống.
    Để vẽ ô chữ nhật mới, nhấp giữ trái chuột lên bản đồ và kéo con trỏ để tạo ô chữ nhật mới.
    Nhả nút chuột sau khi vẽ xong.
-   Khi bạn thấy ô chữ nhật vừa vẽ phù hợp với yêu cầu của mình,
    nhấp chuột vào nút “Download” ở góc dưới của cửa sổ.
    JOSM sẽ tải xuống dữ liệu cho khu vực này từ OpenStreetMap
    và đưa lên khung bản đồ để sẵn sàng chỉnh sửa.

### Thêm ảnh nền
Nếu bạn đã theo dõi quá trình thêm điểm đầu tiên lên bản đồ bằng iD editor,
bạn nhớ rằng bên dưới dữ liệu bản đồ là một ảnh vệ tinh
để giúp chúng ta xác định đối tượng trên mặt đất.
Ảnh này là ảnh Microsoft Bing cung cấp
cho người dùng OpenStreetMap tham khảo trong khi chỉnh sửa bản đồ.

-	Để thêm ảnh vệ tinh Bing vào JOSM,
    nhấp chuột vào menu “Imagery” của JOSM và chọn “Bing Sat.”

> Nếu bạn không thấy Bing Sat trong menu Imagery, bạn sẽ phải kích hoạt
> mục này trong phần Tùy chỉnh JOSM. Đi đến Edit -> Preferences và nhấp vào biểu tượng
có chữ "WMS TMS". Bạn có thể phải nhấp vào mũi tên chỉ xuống để tìm biểu tượng này.
<br>
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
<br>
> Nhấp vào "Bing Sat". Sau đó nhấn "Active"


### Tổng quan về JOSM
Hiện tại, sau khi tải xuống dữ liệu OpenStreetMap và thêm ảnh vệ tinh Bing,
chúng ta sẽ xem xét thêm các thành phần khác trong giao diện của JOSM.

![JOSM layout][]

Phần khung bản đồ bạn đã được làm quen – 
đây là khung bản đồ mà hầu hết các hoạt động của chúng ta diễn ra ở đây.
Bạn sẽ hiển thị, chỉnh sửa, bổ sung dữ liệu OpenStreetMap.

Ở phía bên phải của bản đồ là các khung thông tin đặc trưng.
Thông thường, khi bạn cài đặt JOSM lần đầu tiên,
một số khung thông tin được mặc định như Lớp/ Layers, Thuộc tính/ Properties và Chọn/ Selection.
Khi bạn chọn một điểm, đường hoặc hình trong khung bản đồ,
đối tượng này sẽ hiển thị trong khung Chọn.
Thông tin về đối tượng được hiển thị trong khung Thuộc tính
và tên người dùng đã tạo ra đối tượng đó sẽ được hiển thị trong khung Tác giả/ Authors.

Các khung thông tin này có thể được mở hoặc đóng bằng cách nhấp vào các nút ở góc dưới bên trái của JOSM.
Phía trên của những nút này ở phía bên góc trái là các công cụ cho phép các chức năng
mà bạn có thể thực hiện bằng con chuột của mình.
Bạn có thể đã làm quen với chúng, công cụ Chọn và công cụ Vẽ.
Bên dưới chúng là các công cụ trợ giúp bạn dễ dàng hơn để phóng to, thu nhỏ bản đồ,
xóa một đối tượng, vẽ một hình hay tạo đường song song với một đường khác.


Chỉnh sửa bản đồ
----
Như vậy, chúng ta đã hoàn tất công đoạn đầu tiên của quá trình chỉnh sửa bản đồ, đó là tải xuống dữ liệu.
Chúng ta đã mở JOSM với ảnh vệ tinh làm nền.
Bước tiếp theo sẽ là chỉnh sửa bản đồ và thêm các đối tượng mới.

Tùy thuộc vào khu vực mà bạn đã chọn tải xuống dữ liệu, có thể có nhiều hoặc rất ít dữ liệu có sẵn.
Nhưng bạn có thể thấy dữ liệu đó cũng cùng một dạng với dữ liệu mà chúng ta mở trước đây –
đó là các điểm, đường và vùng nhằm thể hiện các đối tượng trên thực tế.

-   Sử dụng các kỹ thuật mà bạn đã học được để thêm một vài điểm vào những vị trí mà bạn đã biết.
	Nếu có sai sót gì, hãy cố gắng sửa nó.
-   Bạn không cần thiết phải làm tất cả trong quá trình học này.
	Nếu bạn không chắc chắn về bất kỳ thứ gì, bạn có thể bỏ lại.
-   Nếu bạn muốn di chuyển một điểm, đường hay hình, sử dụng **công cụ Chọn**.
    Nhấp chuột vào một đối tượng và kéo chúng đến vị trí đúng.
    Việc này sẽ chỉnh sửa vị trí của đối tượng
    nếu đối tượng đó bị đặt sai vị trí.

![JOSM select tool][]

-  Sử dụng công cụ Vẽ để vẽ những điểm, đường và hình mới.
    Mô tả đặc tính đối tượng bằng cách chọn từ menu Presets,
    như bạn đã làm trước đây. 

> Không bao giờ chỉnh sửa bản đồ ngoài phần bạn đã tải xuống.  
> Bạn có thể thấy vùng chữ nhật mà bạn đã tải xuống dữ liệu có nền đen,  
trong khi phần chưa tải xuống dữ liệu có nền gạch chéo. 
<br>  
> ![JOSM area downloaded][]

Lưu các thay đổi
--------------
Bước thứ  3 và cũng là cuối cùng của việc chỉnh sửa bản đồ là
tải các chỉnh sửa bản đồ của bạn lên CSDL của OSM.
Để thực hiện tải lên, chúng ra cần kết nối internet.

-  Nhấp chuột vào menu “File”, chọn “Upload Data”.
    Cửa sổ tải lên sẽ được mở ra
    hoặc bạn có thể mở đơn giản hơn bằng cách nhấp vào nút tải lên như ở dưới:

![JOSM Upload Button][]

-  Cửa sổ vừa mở hiển thị danh sách các đối tượng mà bạn bổ sung, chỉnh sửa hoặc xóa.
    Ô phía dưới yêu cầu bạn bổ sung thông tin
    về những thay đổi mà bạn đã thực hiện.
    Nhập vào đây các mô tả về việc chỉnh sửa của bạn.

![JOSM Upload Dialog][]

-   Nhấp chuột vào “Upload Changes”.

-   Nếu đây là lần đầu tiên bạn lưu các thay đổi lên OpenStreetMap,
    bạn sẽ được yêu cầu nhập tên đăng nhập và mật khẩu đăng nhập vào OpenStreetMap.
-   Nhập chúng vào cửa sổ mới hiện ra.
    Nếu bạn chọn đánh dấu vào ô lưu mật khẩu, bạn sẽ không phải nhập lại chúng một lần nữa sau này.
    Nhấp chuột vào “Authenticate”.

![JOSM Authenticate][]

-   Bạn sẽ phải chờ vài giây để các thay đổi của mình được tải lên,
    và như vậy bạn đã thực hiện việc chỉnh sửa bản đồ trong OpenStreetMap.

> Khi bạn thực hiện chỉnh sửa bản đồ, hãy luôn chắc chắn là bạn tải lên các thay đổi trước khi bạn đóng JOSM.  
> Ngay cả khi bạn thấy còn phải chỉnh sửa thêm, bạn cũng nên tải lên các thay đổi của mình và  
> tiếp tục quay lại chỉnh sửa khi bạn có thời gian.  
> Bạn sẽ không muốn mất toàn bộ công sức chỉnh sửa của mình!

Xem các thay đổi của bạn trên bản đồ
---------------------------
-  Mở trình duyệt của bạn và đến trang  [http://openstreetmap.org/](http://openstreetmap.org/)
- Di chuyển bản đồ đến khu vực mà bạn đã chỉnh sửa.
- Bạn sẽ thấy các chỉnh sửa của mình trên bản đồ!
    Nếu không, hãy bấm phím CTRL+R để tải lại trang web.
    Đôi khi, bản đồ không thực sự được cập nhật đúng và cần phải được tải lại.
- Điều gì xảy ra nếu bạn không nhìn thấy những thay đổi của mình?
    Đừng lo – có thể cần đến vài phút để các thay đổi này được hiển thị trên bản đồ.
    Mặc dù vậy, hãy kiểm tra các bổ sung của mình trong JOSM để đảm bảo bạn đã thêm chúng một cách đúng đắn.
    Một quy tắc luôn đúng là nếu điểm của bạn là một biểu tượng trên JOSM
    thì nó sẽ được nhìn thấy trên bản đồ của trang web OpenStreetMap.

Tóm lược
-------
Như vậy, bạn đã được thấy làm thế nào để thêm vào bản đồ OpenStreetMap,
tiếp theo sẽ như thế nào?
Thực tế là chỉnh sửa bản đồ thì rất tốt nhưng đó không phải là yếu tố duy nhất khi làm bản đồ.
Dĩ nhiên, bạn cần phải biết cách ra ngoài thực địa để thu thập các thông tin về các địa điểm ngoài hiện trường.


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