---
layout: doc
title: Trình chỉnh sửa bản đồ iD Editor
permalink: /vi/beginner/id-editor/
lang: vi
category: beginner
---

Trình chỉnh sửa bản đồ iD Editor
=============

> Hướng dẫn này có thể được tải xuống tại đây: [beginner_id-editor_vi.odt](/files/beginner_id-editor_vi.odt) or [beginner_id-editor_vi.pdf](/files/beginner_id-editor_vi.pdf)  
> Cập nhật: 2017-10-31  

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
    Lưu các thay đổi, *phím tắt* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Map panel:** (Khung bản đồ) Khung này hiển thị các chức năng cấu hình khác nhau:  
    Phóng to, *phím tắt* **+** ![image9][]{: height="24px"}  
    Thu nhỏ, *phím tắt* **-** ![image10][]{: height="24px"}  
    Đi đến vị trí của bạn/ Go to your location ![image11][]{: height="24px"}  
    Tùy chỉnh cấu hình bản đồ nền, *phím tắt* **b** ![image12][]{: height="24px"}  
    Dữ liệu bản đồ, *phím tắt* **f** ![Map Data][]{: height="24px"}  
    Mở mục hướng dẫn/ Help Menu, *phím tắt* **h** ![image13][]{: height="24px"}  
4. **Information panel:**/ Bảng thông tin: Bảng này hiển thị các thông tin khác nhau như thước tỷ lệ và những người dùng đã đóng góp chỉnh sửa trong khu vực hiển thị.  

Cấu hình lớp bản đồ nền
--------------------------------

Nhấp chuột vào nút **Background settings** hoặc sử dụng *phím tắt* **b**.![image14][]{: height="24px"}  
![image15][]  
Để thay đổi độ sáng, nhấp chuột vào ô **brightness level** để chọn độ sáng 100%, 75%, 50%, hay 25% ![image16][]{: height="24px"}  
Bạn cũng có thể **thay đổi lớp nền** bằng các loại ảnh nền khác nhau (mặc định là Bing Aerial Imagery).  

Bạn cũng có thể đặt ảnh nền của mình bằng cách nhấp chuột vào nút **Custom**. Ví dụ, nếu bạn muốn đưa một ảnh **bản đồ thực địa/ Field Paper** [^fieldpaper], nhấp chuột vào nút **Custom** ”, sau đó nhấp chuột vào biểu tượng tìm kiếm (hình kính lúp) để mở khung sau:-  
![image17][]   
và sau đó thêm **đường dẫn của bản đồ thực địa/ FieldPaper snapshot URL**, có thể giống như thế này: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Để hiển thị *đường đi được ghi lại bởi thiết bị GPS/ GPS Track** lưu trong máy tính dưới định dạng GPX, kéo và thả file GPX vào trang web iD editor.  
Để bật **OpenStreetMap GPS traces** nhấp chuột vào hộp như ảnh dưới. Trong ảnh dưới đây, đường đi được ghi lại bởi thiết bị GPS do người dùng tải lên được hiển thị bằng các màu khác nhau thể hiện các hướng di chuyển khác nhau.  
![osm gps traces][]  
Nếu [ảnh bị lệch/ imagery offset](/vi/josm/aerial-imagery), bạn có thể **hiệu chỉnh ảnh lệch** bằng cách nhấp chuột vào **Fix Alignment**. ![image18][]  

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
- Nếu bạn thực hiện không đúng, như chọn sai vị trí, bạn có thể di chuyển điểm đó tới vị trí mới bằng cách giữ chuột trái ở điểm bạn tạo ra và kéo nó. Hoặc nếu bạn muốn xóa điểm, nhấp chuột vào điểm đó và chọn nút có biểu tượng thùng rác. ![image23][]{: height="24px"}  
Một **điểm** được tạo ra trong iD editor thường là các **điểm/ nút độc lập** với các **thẻ thuộc tính**.  

### Vẽ các đoạn  

Để thêm đoạn, nhấp chuột vào nút **Line**. ![image4][]{: height="24px"}  

- Con trỏ chuột sẽ chuyển thành dạng dấu cộng (+). Xác định một đoạn đường chưa được đưa vào bản đồ để theo dấu đoạn đường đó. Nhấp chuột một lần vào điểm mà đoạn đường bắt đầu, di chuyển chuột và nhấp chuột vào điểm tiếp theo của đoạn đường để thêm điểm. Nhấp đúp chuột để kết thúc quá trình vẽ. Hãy chú ý Khung thông tin bên trái bản đồ.  
![image24][]  
- Cũng giống như đối với điểm, chọn thẻ thông tin phù hợp với đoạn mà bạn vừa vẽ.  
- Bạn có thể di chuyển từng điểm của đoạn bằng cách nhấp giữ chuột trái và kéo thả đến vị trí mới.  
- Bạn cũng có thể di chuyển cả đoạn bằng cách chọn nó và nhấp chuột vào công cụ di chuyển **Move tool**. Sau đó di chuyển cả đoạn đến vị trí mới. ![image30][]{: height="24px"}  
- Khi bạn nhấp chuột vào một điểm riêng lẻ của đoạn, bạn sẽ nhìn thấy các công cụ sau::  
-   Xóa điểm thuộc đoạn. ![image23][]{: height="24px"}  
-   Tách điểm khỏi đoạn. ![image26][]{: height="24px"}  
-   Tách đoạn thành hai đoạn tại điểm bạn chọn. ![image27][]{: height="24px"}  
- Khi bạn nhấp chuột vào đoạn nhưng không phải tại các điểm nút, bạn sẽ thấy các công cụ sau:  
-   Xóa đoạn. ![image23][]{: height="24px"}  
-   Tạo hình tròn từ đoạn (Chỉ có hiệu lực khi đoạn bạn chọn là đoạn khép kín) ![image29][]{: height="24px"}  
-   Di chuyển cả đoạn ![image30][]{: height="24px"}  
-   Tạo hình vuông từ đoạn (Chỉ có hiệu lực khi đoạn bạn chọn là đoạn khép kín) ![image31][]{: height="24px"}  
-   Đảo chiều đoạn (Sử dụng đối với các đoạn sông hoặc đường một chiều) ![image32][]{: height="24px"}  

Một đoạn được tạo ra trong iD editor thực ra là một đường với các thẻ thông tin.

>Một lưu ý quan trọng khi **thực hiện xóa đối tượng**: Nói chung, bạn nên tránh việc xóa đối tượng bản đồ do người khác tạo khi cần chỉnh sửa. Bạn có thể xóa những đối tượng lỗi do mình tạo ra, nhưng bạn chỉ nên **hiệu chỉnh** đối tượng do người khác tạo. Điều này sẽ giúp lưu giữ lịch sử của đối tượng trong CSDL của OSM và là sự tôn trong đối với những người lập bản đồ khác. Nếu bạn thực sự cảm thấy cần xóa thứ gì đó, hãy cân nhắc việc hỏi lại người đã tạo đối tượng thông qua danh sách email của OSM về điều đó.

### Vẽ vùng (Polygons)

Để thêm hình đa giác, nhấp vào nút **Area**. ![image34][]{: height="24px"}  

- Con trỏ chuột của bạn sẽ thay đổi thành dấu cộng (+). Hãy thử vẽ theo viền một tòa nhà sử dụng hình ảnh nền.  
- Bạn sẽ nhận thấy rằng màu sắc của hình dạng của bạn sẽ thay đổi tùy thuộc vào thuộc tính mà bạn gán cho nó.  
![image35][]  
- Các công cụ có sẵn khi bạn chọn một hình tương tự như khi bạn nhấp vào một đường.  

Một "đa giá/ polygon" trong iD editor thực ra là một "đường khép kín/ closed way" với các thẻ thông tin phù hợp.

Lưu các thay đổi của bạn
--------------------

Khi và nếu như bạn muốn lưu các thay đổi của mình vào OpenStreetMap, nhấp chuột vào nút **Save**. Bảng điều khiển ở bên trái sẽ hiển thị bảng điều khiển tải lên.  
![image36][]  

- Nhập các ghi chú về các chỉnh sửa của bạn và nhấp vào **Save**.  

> Nếu bạn đã chỉnh sửa cùng một đối tượng (điểm, đường hoặc vùng) cùng một lúc với người khác đang chỉnh sửa, bạn sẽ nhận được cảnh báo rằng các chỉnh sửa của bạn không thể được tải lên cho đến khi bạn giải quyết được **xung đột/ conflicts** - chọn những người có thay đổi để chấp nhận và tải lên các thay đổi của bạn. *Giải quyết xung đột thường liên quan đến việc chấp nhận các chỉnh sửa của người khác, trong trường hợp này bạn có thể muốn quay lại đối tượng địa lý được đề cập và chỉnh sửa lại (**Lần này, hãy lưu ngay sau khi chỉnh sửa để cố gắng tránh xung đột một lần nữa!**).*

Thông tin Bổ sung và Thẻ Tuỳ chỉnh
---------------------------------------

Khi bạn đang chỉnh sửa một đối tượng, bạn sẽ thấy một dải biểu tượng ở cuối bảng thuộc tính. Bạn có thể thêm thông tin bổ sung bằng cách nhấp vào các biểu tượng sau:

- Thêm cao độ ![image37][]{: height="24px"}  
- Thêm ghi chú ![image38][]{: height="24px"}  
- Thêm thông tin liên lạc, số điện thoại ![image39][]{: height="24px"}  
- Thêm thẻ nguồn gốc ![image40][]{: height="24px"}  
- Thêm địa chỉ web ![image41][]{: height="24px"}  
- Thêm các thông tin hỗ trợ ![image42][]{: height="24px"}  
- Thêm đường dẫn Wikipedia ![image43][]{: height="24px"}  

Hoặc bạn có thể tùy biến bằng cách nhấp chuột vào **All tags**. ![image44][]{: height="24px"}  

- Việc này sẽ hiển thị tất cả các thẻ đính kèm vào đối tượng địa lý.  
![image45][]  
- Nhấp vào dấu cộng (+) để thêm khóa và giá trị hoặc nhấp vào biểu tượng thùng rác để xóa các thẻ.

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