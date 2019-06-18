---
layout: doc
title: Định dạng tệp tin
permalink: /vi/osm-data/file-formats/
lang: vi
category: osm-data
---

Định dạng tệp tin
=============

> Cập nhật: 2017-10-31

Giống như bất kỳ loại dữ liệu nào, có nhiều cách khác nhau để lưu trữ dữ liệu địa lý trên máy tính. Nó có thể được lưu trong cơ sở dữ liệu, là một hệ thống chuyên biệt để lưu trữ và truy xuất dữ liệu, và trên thực tế có các hệ thống cơ sở dữ liệu được thiết kế đặc biệt để lưu trữ dữ liệu địa lý. Nó cũng có thể được lưu trữ trong các tệp máy tính truyền thống, mặc dù có nhiều định dạng tệp tin khác nhau cho dữ liệu địa lý.  

Trong phần này chúng ta sẽ đi qua một vài cách lưu trữ dữ liệu địa lý, giải thích cách chúng hoạt động và chúng được sử dụng như thế nào.  

File .OSM
-----------

Các file **.osm** định dạng tập tin là cụ thể cho OpenStreetMap. Bạn sẽ thấy chúng ở nơi khác. Nếu bạn đã từng tải dữ liệu bằng JOSM và lưu nó dưới dạng tệp, bạn có thể đã nhận thấy rằng tệp được lưu với đuôi **.osm***. Nếu bạn là người dùng GIS, bạn cũng có thể nhận thấy rằng không dễ dàng để mở các tệp này bằng phần mềm như QGIS.  

Vậy tại sao dữ liệu OSM được lưu trữ ở định dạng tệp mà không ai khác sử dụng? Câu trả lời là nhiều định dạng dữ liệu địa lý trước thời đại Internet hiện đại, và được thiết kế để truy cập nhanh và truy vấn giống như một truy vấn cơ sở dữ liệu. Mặt khác, dữ liệu OSM được thiết kế để dễ dàng gửi và nhận qua Internet theo định dạng tiêu chuẩn. Do đó, tệp **.osm** được mã hoá bằng XML và chứa dữ liệu địa lý theo định dạng có cấu trúc và được sắp xếp. Một tệp **.osm** đơn giản sẽ trông như thế này nếu được xem trong một trình soạn thảo văn bản:  

![Ví dụ về file OSM XML][]

Việc lấy dữ liệu ở định dạng **.osm** rất đơn giản - bạn thực hiện mỗi khi bạn download dữ liệu trong JOSM, nhưng sử dụng các tệp này để phân tích và thiết kế bản đồ không dễ. Do đó bạn nên chuyển đổi dữ liệu sang định dạng khác hoặc sử dụng các công cụ vụ chuyển đổi dữ liệu cho bạn.  

> Dữ liệu OSM thô được lưu trữ trong tệp **.osm** thường, nhưng bạn cũng có thể thấy các tệp kết thúc bằng **.bz2** và **.pbf**. Đây là những tệp tin **.osm** chủ yếu được nén để tiết kiệm không gian, có thể cực kỳ hữu ích khi làm việc với các tệp dữ liệu lớn.  

Các Shapefiles
----------

Các **shapefile** là một định dạng được sử dụng rộng rãi để lưu trữ dữ liệu địa lý vector. Nó được phát triển bởi ESRI, công ty sản xuất ArcGIS, một bộ ứng dụng GIS phổ biến.  

Shapefiles thực sự là một tập hợp của một số tập tin khác nhau. Ví dụ: một tệp hình dạng có chứa dữ liệu xây dựng có thể có các tệp với các phần mở rộng sau:  

-	buildings.**shp**
-	buildings.**shx**
-	buildings.**dbf**

Shapefiles thường có các tệp bổ sung chứa các thông tin khác.  

Một shapefile phải được chỉ định để giữ một loại đối tượng (điểm, đường kẻ hoặc đa giác), và mỗi đối tượng đều có thuộc tính của nó trong một bảng. Không giống như hệ thống OpenStreetMap, trong đó mỗi đối tượng có thể có một số lượng không giới hạn, các thuộc tính của các đối tượng trong một shapefile phải khớp với cấu trúc bảng được định nghĩa của shapefile, có thể giống như sau:  

![Các thuộc tính trong Shapefile][]

Dữ liệu OpenStreetMap có thể được chuyển thành shapefiles. Các trang web khác nhau cung cấp công cụ chuyển đổi sang shapefiles từ dữ liệu OSM. Những điều này được thảo luận trong [chương tiếp theo](/vi/osm-data/getting-data).  

CƠ SỞ DỮ LIỆU
---------

Nhiều loại thông tin được lưu trữ trong các hệ thống cơ sở dữ liệu, cung cấp một cách hợp lý để tổ chức và truy cập dữ liệu. Dữ liệu địa lý không khác nhau, mặc dù các cơ sở dữ liệu được thiết kế cho geodata được chuyên biệt để xử lý các chức năng phức tạp mà truy vấn dữ liệu địa lý đòi hỏi.  

Dữ liệu OpenStreetMap thường được lưu trữ trong cơ sở dữ liệu PostgreSQL với các phần mở rộng PostGIS. Loại cơ sở dữ liệu này cung cấp khả năng truy cập nhanh vào dữ liệu và có thể được sử dụng dễ dàng với Mapnik, một phần mềm tạo ra các bản đồ được sử dụng trong các bản đồ trật tự web. Có một số công cụ có sẵn để nhập dữ liệu OSM thô vào cơ sở dữ liệu PostgreSQL.  

Một loại cơ sở dữ liệu được gọi là SQLite, cung cấp các chức năng tương tự như một cơ sở dữ liệu PostgreSQL, nhưng tất cả được lưu trữ trong một tệp duy nhất và không yêu cầu phải chạy phần mềm cơ sở dữ liệu. Đây là một chút khó khăn hơn để bạn tự tạo, nhưng có thể được dễ dàng hơn để làm việc với cho các bộ dữ liệu nhỏ.  

Tổng kết
-------

Trong các chương sau, chúng ta sẽ thấy cách bạn có thể tải dữ liệu ở các định dạng khác nhau từ Internet và cách bạn có thể sử dụng các công cụ khác nhau để thao tác dữ liệu thô một mình.  


[Ví dụ về file OSM XML]: /images/osm-data/example_osm.png
[Các thuộc tính trong Shapefile]: /images/osm-data/shapefile_attributes.png