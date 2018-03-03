---
layout: doc
title: Lấy dữ liệu OSM
permalink: /vi/osm-data/getting-data/
lang: vi
category: osm-data
---

Lấy dữ liệu OSM
=================  

> Hướng dẫn này có thể được tải xuống tại đây: [Getting_OSM_Data_vi.odt](/files/Getting_OSM_Data_vi.odt) hoặc [Getting_OSM_Data_vi.pdf](/files/Getting_OSM_Data_vi.pdf)  
> Cập nhật: 2017-10-31

Khi bạn muốn có được dữ liệu OpenStreetMap gần đây nhất, cách đơn giản nhất là sử dụng một công cụ web để trích xuất dữ liệu. Có nhiều dịch vụ web hỗ trợ chiết xuất dữ liệu cho một khu vực bạn chọn.  

TẢI XUỐNG DỮ LIỆU ĐƯỢC TRÍCH XUẤT
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) là một công ty chuyên làm việc với OpenStreetMap. Họ cung cấp một loạt các chiết xuất miễn phí theo định dạng shapefile và định dạng OSM thô trên [trang web của họ](http://download.geofabrik.de). Ưu điểm của việc tải xuống dữ liệu GeoFabrik là nó được cập nhật hàng ngày, và nó dễ dàng và đáng tin cậy. Một bất lợi là dữ liệu được trích xuất theo quốc gia, và không phải tất cả các nước đều có sẵn.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) cung cấp shapefiles và định dạng OSM gốc cho các thành phố trên thế giới, trích xuất hàng tuần. Điều này hữu ích nếu bạn đang tìm kiếm dữ liệu chiết xuất cho một thành phố.

>Hãy nhớ rằng các đối tượng trong OpenStreetMap có một số lượng không hạn chế các thẻ "tự do",
>nhưng các tập tin định dạng có các thuộc tính được lưu trong một số cột nhất định.
>Điều này có nghĩa là khi dữ liệu OSM được chuyển thành shapefiles,
>chỉ có các thẻ được chỉ định sẽ được bao gồm trong bảng thuộc tính của shapefile.
>Các trang web được liệt kê ở trên cung cấp shapefiles với một tập hợp các thẻ phổ biến mặc định
>nhưng nếu bạn muốn trích xuất các thẻ cụ thể,
>bạn sẽ cần phải sử dụng một trong những dịch vụ chuyên biệt hơn trong phần tiếp theo hoặc tự học cách tự xuất dữ liệu.

CHIẾT XUẤT DỮ LIỆU THEO YÊU CẦU
-------------------

### Trích xuất dữ liệu bằng công cụ HOT Exports  

[Nhóm nhân đạo OSM](http://hotosm.org) đã tạo ra một dịch vụ giúp người dùng lựa chọn khu vực mà họ muốn trích xuất dữ liệu, đồng thời sử dụng các [Cài đặt sẵn của JOSM](/vi/josm/josm-presets/)
đẻ chọn các thẻ tùy chọn được sử dụng trong quá trình trích xuất dữ liệu. Công cụ này có thể được sử dụng tại tất cả các quốc gia mà HOT hoạt động, tại đường dẫn [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike  

Bạn có thể chọn khu vực của riêng mình từ bất kỳ nơi nào trên thế giới bằng cách sử dụng dịch vụ tại [http://extract.bbbike.org/](http://extract.bbbike.org/). Nhược điểm là bạn không thể chọn các thẻ có thể tùy chỉnh và số lượng dữ liệu mà bạn có thể tải xuống bị hạn chế.  

### Overpass

Overpass là một API (Giao diện lập trình ứng dụng) để trích xuất dữ liệu từ một bản sao chỉ đọc của cơ sở dữ liệu OpenStreetMap chính, có thể cung cấp số lượng dữ liệu gần như tùy ý. Sử dụng ngôn ngữ truy vấn bạn có thể tùy chỉnh tập hợp con nào của dữ liệu bạn nhận được. Bạn có thể sử dụng API trực tiếp bằng cách tạo ra một yêu cầu http hoặc thông qua giao diện của Overpass turbo.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) là công cụ tương tác để tạo lập các truy vấn, trước tiên bạn phải phóng to đến khu vực thích hợp trên bản đồ. Nhập truy vấn của bạn vào trường bên trái của trang và kích hoạt bất kỳ hành động nào bằng cách sử dụng các nút ở phía trên của giao diện. Nếu bạn chưa quen với ngôn ngữ truy vấn thì bạn có thể sử dụng trình trợ giúp để bắt đầu. Wiki OSM chứa một [mô tả đầy đủ](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) về cú pháp của ngôn ngữ truy vấn cũng như một [tập hợp các ví dụ](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

Bản đồ sẽ làm nổi bật tất cả dữ liệu được lựa chọn bởi truy vấn của bạn, sau đó bạn có thể sửa đổi. Nhấn "Run" để làm mới màn hình kết quả. Một khi bạn đã hài lòng với những gì bạn thấy, "Export" cung cấp một số sự lựa chọn, trong số đó là dữ liệu OSM thô. Nếu lượng dữ liệu bị giới hạn bạn cũng có thể truy cập chúng trực tiếp sau khi chuyển đổi giữa chế độ xem bản đồ và chế độ xem dữ liệu bằng cách sử dụng các nút ở bìa phải phía trên. Tùy chọn trích xuất *Query -> compact OverpassQL* tạo ra một siêu liên kết được sử dụng cho Overpass API.

![overpass turbo][]

Nếu bạn muốn thiết kế một truy vấn riêng để có được một tập con của dữ liệu từ một khu vực rộng lớn thì bạn nên kiểm tra và cải tiến truy vấn này trong Overpass Turbo trên một diện tích nhỏ. Sau đó, bạn có thể thu nhỏ bản đồ để hiển thị toàn bộ khu vực quan tâm của mình và sử dụng url truy vấn trực tiếp cho API. Phần tiếp theo giải thích làm thế nào bạn có thể làm điều này.

#### Overpass API

[Overpass API](http://wiki.openstreetmap.org/wiki/Overpass_API) là một dịch vụ chuyên dụng được tối ưu hóa để truy vấn nhưng không ghi dữ liệu lên OpenStreetMap. Do được tối ưu hóa, nó hoạt động rất nhanh so với các API cơ sở dữ liệu chính và hầu như không có giới hạn về số lượng dữ liệu chuyển giao. Một số trường hợp của dịch vụ này có sẵn trên mạng, ví dụ sử dụng trong ví dụ sau cũng cung cấp một số thông tin trên [Trang chủ](http://overpass-api.de/)

Nếu bạn có URL truy vấn để gửi yêu cầu http đến Overpass API thì một công cụ như [wget](https://www.gnu.org/software/wget/) - khả dụng cho các hệ điều hành khác, xem [ở đây](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - cho phép bạn tải xuống dữ liệu OSM gốc trực tiếp từ máy chủ và lưu trữ chúng trên máy tính của bạn. Đoạn mã sau đây là mã lệnh của trình bash phổ biến trên các hệ thống Unix để lấy tất cả dữ liệu trong một vùng hạn xác định:

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
>Điều gì xảy ra ở đây (dành cho những người tò mò không muốn đọc hết tài liệu về ngôn ngữ truy vấn)?  
>node(...) chọn tất cả các node trong một vùng xác định;  
>< recurses up fully, i.e. tức là chọn tất cả các đường chứa các nút này và tất cả các mối quan hệ có chứa các nút và đường này;  
>rel(br) lựa chọn tất cả các quan hệ cha mẹ của các mối quan hệ có thể thu được (nếu không mối quan hệ tổng thể sẽ không có được)
>



TÓM LƯỢC
-------  

Các dịch vụ được đề cập trong chương này là tất cả những gì mà người dùng trung bình cần để có được dữ liệu OSM họ muốn và có thể làm việc với nó trong phần mềm GIS. Tuy nhiên, bạn có thể muốn học cách hiệu quả hơn làm việc với các dữ liệu. Các chương còn lại trong phần này khá kỹ thuật, nhưng giới thiệu các phương pháp tiên tiến hơn về thao tác và truy cập dữ liệu OSM.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png