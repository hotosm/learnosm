---
layout: doc
title: Trình chỉnh sửa bản đồ iD Editor
permalink: /vi/beginner/id-editor/
lang: vi
category: beginner
---

Trình chỉnh sửa bản đồ iD Editor
=============

> Reviewed 2019-06-10

Starting to map with a Tasking Manager for HOT or MissingMaps etc? See our [HOT-tips section](/en/hot-tips/).  

- TOC
{:toc}

Trình chỉnh sửa bản đồ iD Editor là trình chỉnh sửa OpenStreetMap trực quan trên nền web. iD nhanh và dễ sử dụng, cho phép chỉnh sửa bản đồ theo các nguồn thông tin khác nhau như ảnh vệ tinh, ảnh hàng không, thiết bị GPS, bản đồ in hiện trường hoặc các thư viện bản đồ.  

Trình chỉnh sửa bản đồ iD là cách tốt nhất để thực hiện các chỉnh sửa nhỏ và đơn giản khi không cần đến các tính năng nâng cao của JOSM (một công cụ chỉnh sửa bản đồ cao cấp). Chương này sẽ trình bày các thao tác chỉnh sửa bản đồ cơ bản với iD.  

Mở iD Editor
----------------------

-	Trình chỉnh sửa bản đồ iD editor đòi hỏi kết nối Internet.  
-	Mở trình duyệt của bạn và đến trang web OpenStreetMap tại địa chỉ [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Đăng nhập** sử dụng tài khoản người dùng OpenStreetMap của bạn.  
-	Kéo và phóng to bản đồ khu vực mà bạn muốn chỉnh sửa.Kéo bản đồ bằng nút trái chuột đến khu vực bạn cần.  
-	Nhấp chuột vào tam giác nhỏ cạnh nút **Edit**. Sau đó, chọn **Edit with iD (in-browser editor)**.  

![image1][]


Giao diện của iD Editor
-------------------------
![image2][]

1. **Edit Feature Panel:** (Khung soạn thảo) Khung này chứa đựng các thẻ của đối tượng đang được chọn trên bản đồ.  
	Bạn có thể thêm hoặc chỉnh sửa các thẻ từ khung này.  
2. **Tools:** (Công cụ) Nhóm các công cụ chỉnh sửa bản đồ cơ bản:  
    Vẽ điểm nút (node), *phím tắt* **1** ![image3][]{: height="24px"}  
    Vẽ đoạn/ đường (way), *phím tắt* **2** ![image4][]{: height="24px"}  
    Vẽ vùng (polygon), *phím tắt* **3** ![image5][]{: height="24px"}  
    Hoàn tác, *phím tắt* **Ctrl+z** ![image6][]{: height="24px"}  
    Làm lại, *phím tắt* **Ctrl+y** ![image7][]{: height="24px"}  
    Save changes, *shortcut keys* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Map panel:** (Khung bản đồ) Khung này hiển thị các chức năng cấu hình khác nhau:  
    Phóng to, *phím tắt* **+** ![image9][]{: height="24px"}  
    Thu nhỏ, *phím tắt* **-** ![image10][]{: height="24px"}  
    Đi đến vị trí của bạn/ Go to your location ![image11][]{: height="24px"}  
    Tùy chỉnh cấu hình bản đồ nền, *phím tắt* **b** ![image12][]{: height="24px"}  
    Dữ liệu bản đồ, *phím tắt* **f** ![Map Data][]{: height="24px"}  
    Issues, *shortcut key* **i** ![Issues][]{: height="24px"}  
    Mở mục hướng dẫn/ Help Menu, *phím tắt* **h** ![image13][]{: height="24px"}  
4. **Information panel:**/ Bảng thông tin: Bảng này hiển thị các thông tin khác nhau như thước tỷ lệ và những người dùng đã đóng góp chỉnh sửa trong khu vực hiển thị.  

## Configuring the Background Layer

Nhấp chuột vào nút **Background settings** hoặc sử dụng *phím tắt* **b**.![image14][]{: height="24px"}  
![image15][]  
You can **change the background layer** based on your desired tile provider (the default is Bing Aerial Imagery).  

Bạn cũng có thể đặt ảnh nền của mình bằng cách nhấp chuột vào nút **Custom**. Ví dụ, nếu bạn muốn đưa một ảnh **bản đồ thực địa/ Field Paper** [^fieldpaper], nhấp chuột vào nút **Custom** ”, sau đó nhấp chuột vào biểu tượng tìm kiếm (hình kính lúp) để mở khung sau:-  
![image17][]   
và sau đó thêm **đường dẫn của bản đồ thực địa/ FieldPaper snapshot URL**, có thể giống như thế này: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Để hiển thị *đường đi được ghi lại bởi thiết bị GPS/ GPS Track** lưu trong máy tính dưới định dạng GPX, kéo và thả file GPX vào trang web iD editor.  
Để bật **OpenStreetMap GPS traces** nhấp chuột vào hộp như ảnh dưới. Trong ảnh dưới đây, đường đi được ghi lại bởi thiết bị GPS do người dùng tải lên được hiển thị bằng các màu khác nhau thể hiện các hướng di chuyển khác nhau.  
![osm gps traces][]  
To change the **appearance of the imagery** click **Display Options**.  
![DisplayOptions][]  
If there is [imagery offset](/en/josm/aerial-imagery), you can **correct the imagery offset** by clicking **Adjust imagery offset**.  
![image18][]  

- •	Sử dụng các nút điều hướng để di chuyển ảnh. Nhấp vào nút quay lại để đưa ảnh trở lại vị trí cũ. ![image20][]  

Các thao tác chỉnh sửa bản đồ cơ bản với iD  
----------------------  

### Thêm điểm  

Để thêm điểm mới, nhấp chuột vào nút **Point**. ![image3][]{: height="24px"}  

- Con trỏ chuột sẽ chuyển thành dạng dấu cộng (+). Bây giờ, nhấp chuột vào vị trí mà bạn biết để đánh dấu vị trí. Ví dụ, nếu bạn biết vị trí đó là một bệnh viện, hãy nhấp chuột vào vị trí tòa nhà của bệnh viện.  
![image21][]  
- Bạn dễ dàng nhận thấy một điểm mới được thêm. Lúc này, khung bên trái bản đồ hiển thị một biểu mẫu để bạn có thể chọn các thuộc tính cho đối tượng vừa tạo. Nhấp chuột vào nút **Hospital Grounds** để gắn thẻ bệnh viện cho điểm đó.  
![image22][]  
- Bạn cũng có thể sử dụng biểu mẫu này để thêm các thông tin chi tiết về điểm bạn vừa thêm vào như tên bệnh viện, địa chỉ và các thông tin khác. Lưu ý rằng mỗi đối tượng sẽ có các lựa chọn khác nhau phụ thuộc vào thẻ mà bạn chọn tại bảng thuộc tính.  
- If you make a mistake, such as a wrong location, you can move your point to a new location by holding the left mouse button on your point and dragging it. Or, if you want to delete your point, click the left mouse button on the point, activate the context menu by clicking with the right mouse button and then click the button which looks like a trashcan. ![PointToolDelete][]{: height="24px"}  
Một **điểm** được tạo ra trong iD editor thường là các **điểm/ nút độc lập** với các **thẻ thuộc tính**.  

### Vẽ các đoạn  

Để thêm đoạn, nhấp chuột vào nút **Line**. ![image4][]{: height="24px"}  

- Con trỏ chuột sẽ chuyển thành dạng dấu cộng (+). Xác định một đoạn đường chưa được đưa vào bản đồ để theo dấu đoạn đường đó. Nhấp chuột một lần vào điểm mà đoạn đường bắt đầu, di chuyển chuột và nhấp chuột vào điểm tiếp theo của đoạn đường để thêm điểm. Nhấp đúp chuột để kết thúc quá trình vẽ. Hãy chú ý Khung thông tin bên trái bản đồ.  
![image24][]  
- Cũng giống như đối với điểm, chọn thẻ thông tin phù hợp với đoạn mà bạn vừa vẽ.  
- Bạn có thể di chuyển từng điểm của đoạn bằng cách nhấp giữ chuột trái và kéo thả đến vị trí mới.  
- When you click your left mouse button on an individual point (node) on the line and either click on the right mouse button or hit the space bar to activate the context menu, you will see these tools:  
  - Continue line from this point ![PointToolContinue][]{: height="24px"}  
  - Disconnect lines at this point ![PointToolDisconnect][]{: height="24px"}  
  - Split a line into two lines at this point. ![PointToolSplit][]{: height="24px"}  
  - Delete point from line. ![PointToolDelete][]{: height="24px"}  
- Khi bạn nhấp chuột vào đoạn nhưng không phải tại các điểm nút, bạn sẽ thấy các công cụ sau:  
  -   Create a circle from a line (only active if the line is closed) ![LineToolCircularize][]{: height="24px"}  
  -   Disconnect line from other objects ![LineToolDisconnect][]{: height="24px"}  
  -   Move line ![LineToolMove][]{: height="24px"}  
  -   Square all corners ![LineToolSquare][]{: height="24px"}  
  -   Reflect the line across its short axis ![LineToolReflectShort][]{: height="24px"}  
  -   Reflect the line across its long axis ![LineToolReflectLong][]{: height="24px"}  
  -   Reverse line direction (good for rivers & one-way streets) ![LineToolReverse][]{: height="24px"}  
  -   Rotate the line around its centre ![LineToolRotate][]{: height="24px"}  
  -   Straighten the line ![LineToolStraighten][]{: height="24px"}  
  -   Delete line. ![LineToolDelete][]{: height="24px"}  

Một đoạn được tạo ra trong iD editor thực ra là một đường với các thẻ thông tin.

>Một lưu ý quan trọng khi **thực hiện xóa đối tượng**: Nói chung, bạn nên tránh việc xóa đối tượng bản đồ do người khác tạo khi cần chỉnh sửa. Bạn có thể xóa những đối tượng lỗi do mình tạo ra, nhưng bạn chỉ nên **hiệu chỉnh** đối tượng do người khác tạo. Điều này sẽ giúp lưu giữ lịch sử của đối tượng trong CSDL của OSM và là sự tôn trong đối với những người lập bản đồ khác. Nếu bạn thực sự cảm thấy cần xóa thứ gì đó, hãy cân nhắc việc hỏi lại người đã tạo đối tượng thông qua danh sách email của OSM về điều đó.

### Vẽ vùng (Polygons)

Để thêm hình đa giác, nhấp vào nút **Area**. ![image34][]{: height="24px"}  

- Con trỏ chuột của bạn sẽ thay đổi thành dấu cộng (+). Hãy thử vẽ theo viền một tòa nhà sử dụng hình ảnh nền.  
- Bạn sẽ nhận thấy rằng màu sắc của hình dạng của bạn sẽ thay đổi tùy thuộc vào thuộc tính mà bạn gán cho nó.  
![image35][]  
- The tools that are available when you select a shape and activate the context menu with the right mouse button are similar to those when you click on a line.  

Một "đa giá/ polygon" trong iD editor thực ra là một "đường khép kín/ closed way" với các thẻ thông tin phù hợp.

### Drawing Multipolygons

Sometimes you have to draw a polygon which does not only have an outer contour but also one or more inner contours. Just think of buildings with inner courtyards or lakes with islands. *Do not draw all these ways in one line* so that the inner contours suspend from the outer contour. Rather draw these contours separate, attach tags to the outer contour only, select all contours and hit **c** in order to combine them into what is called a multipolygon.

![create multipolygon][]

When you select any of the contours of the newly created multipolygon you can see on the left to which multipolygons it belongs

![part of multipolygon][]

## Issues

The editor performs a number of checks as soon as you edit something. If it thinks that what you did might cause problems it notifies you in the issues tab. Whenever the issues icon on the right carries either a yellow (for warnings) or red (for errors) dot you should open the tab and see what it reports. This information is also displayed in the object feature tab on the left if the relevant object is selected. You are also warned that there are unresolved issues when you upload your data. 

![Issue][] ![Error][]

The lower part of the issues tab show the available rules and allows you to disable them individually though this is not recommended.

Lưu các thay đổi của bạn
--------------------

Khi và nếu như bạn muốn lưu các thay đổi của mình vào OpenStreetMap, nhấp chuột vào nút **Save**. Bảng điều khiển ở bên trái sẽ hiển thị bảng điều khiển tải lên.  
![image36][]  

- Nhập các ghi chú về các chỉnh sửa của bạn và nhấp vào **Save**.  

> Nếu bạn đã chỉnh sửa cùng một đối tượng (điểm, đường hoặc vùng) cùng một lúc với người khác đang chỉnh sửa, bạn sẽ nhận được cảnh báo rằng các chỉnh sửa của bạn không thể được tải lên cho đến khi bạn giải quyết được **xung đột/ conflicts** - chọn những người có thay đổi để chấp nhận và tải lên các thay đổi của bạn. *Giải quyết xung đột thường liên quan đến việc chấp nhận các chỉnh sửa của người khác, trong trường hợp này bạn có thể muốn quay lại đối tượng địa lý được đề cập và chỉnh sửa lại (**Lần này, hãy lưu ngay sau khi chỉnh sửa để cố gắng tránh xung đột một lần nữa!**).*

Thông tin Bổ sung và Thẻ Tuỳ chỉnh
---------------------------------------

When you are editing an object, you will see an "Add field" menu at the bottom of the attribute panel. You can add various additional information by selecting one of the entries (layer, elevation, wikipedia etc.).  

![AdditionalTags][]

Or you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- Việc này sẽ hiển thị tất cả các thẻ đính kèm vào đối tượng địa lý.  
![image45][]  
- Nhấp vào dấu cộng (+) để thêm khóa và giá trị hoặc nhấp vào biểu tượng thùng rác để xóa các thẻ.

Further tutorials
------------------

[Our external resources page](/en/resources/#iD) provides links to a number of video tutorials from various sources.

iD so với JOSM
---------------  

**iD tốt khi...**

- Khi bạn đang thực hiện các chỉnh sửa đơn giản  
- Khi bạn có Internet nhanh để tải hình ảnh và lưu các chỉnh sửa  
- Khi bạn muốn chắc chắn tuân theo một kế hoạch gắn thẻ thống nhất và đơn giản  
- Khi bạn bị hạn chế khi cài đặt một chương trình trên máy tính mà bạn đang sử dụng

**JOSM tốt hơn khi...**

- Khi bạn thêm nhiều tòa nhà (Xem plugin buildings_tool)
- Khi bạn đang hiệu chỉnh nhiều đa giác hoặc đường đã tồn tại
- Khi bạn kết nối Internet không đáng tin cậy hoặc offline
- Khi bạn đang sử dụng một mô hình gắn thẻ cụ thể (hoặc các cài đặt trước tùy chỉnh)

[^fieldpaper]: [Một chương của LearnOSM](/vi/mobile-mapping/field-papers/) cung cấp thông tin cụ thể hơn về Field Papers/ Bản đồ hiện trường.



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