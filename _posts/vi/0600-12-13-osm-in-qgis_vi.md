---
layout: doc
title: Sử dụng dữ liệu OSM trong QGIS
permalink: /vi/osm-data/osm-in-qgis/
lang: vi
category: osm-data
---

Sử dụng dữ liệu OSM trong QGIS
=================

> Cập nhật: 2017-10-31

QGIS (trước đây là Quantum GIS) là một hệ thống thông tin địa lý đa chức năng, mã nguồn mở, đa nền tảng. Với QGIS bạn có thể truy cập dữ liệu OSM cập nhật bất cứ khi nào bạn muốn, chọn các thẻ bạn muốn đưa vào, và dễ dàng xuất nó vào một cơ sở dữ liệu SQLite dễ sử dụng hoặc Shapefile.  

Trong chương này chúng ta sẽ đi qua các bước cần thiết để thực hiện việc này. Chúng tôi giả định rằng bạn đã tải xuống và cài đặt QGIS 2.x. Nếu bạn chưa làm điều này, bạn có thể tải xuống từ <http://www.qgis.org/en/site/forusers/download.html>.  

Để có được lớp OSM cập nhật, được cập nhật vào QGIS, trước tiên chúng ta sẽ có được dữ liệu OSM gần đây nhất ở định dạng .osm gốc. Sau đó, chúng ta sẽ chuyển dữ liệu này sang cơ sở dữ liệu SQLite, là một hệ thống cơ sở dữ liệu nhẹ được lưu trữ trong một tệp trên hệ thống của bạn. Cuối cùng, chúng tôi sẽ tạo một lớp (hoặc nhiều lớp) chỉ bao gồm các loại đối tượng địa lý và các thẻ mà chúng ta muốn truy cập. Các lớp này có thể được sử dụng trong QGIS  hoặc lưu ở định dạng khác, chẳng hạn như một shapefile.  

TRUY CẬP DỮ LIỆU OPENSTREETMAP
---------------------------

Điều đầu tiên chúng tôi làm là thu thập một số dữ liệu OSM cập nhật. Chúng ta có thể làm được điều này bằng nhiều cách. Tất nhiên, yêu cầu dữ liệu từ máy chủ OSM, như chúng tôi làm trong trình soạn thảo JOSM, có giới hạn để chúng tôi không thể kéo ra một số lượng lớn dữ liệu thô cùng một lúc -
tuy nhiên, có nhiều cách để truy cập các bộ dữ liệu lớn hơn, như được mô tả trong các chương trước về [Lấy dữ liệu OSM](/vi/osm-data/getting-data) và [Sử dụng Geofabrik và HOT Export](/vi/osm-data/geofabrik-and-hot-export).  

Đối với hướng dẫn này, chúng tôi sẽ sử dụng chức năng tải về tích hợp sẵn trong QGIS.  

- Mở QGIS và vào Vector -> OpenStreetMap -> Download Data...  
- Bạn có thể chọn từ một số tùy chọn ở đây - nếu cửa sổ của bạn đã hiển thị mức độ bạn muốn, đánh dấu hộp bên cạnh "From canvas map." Nếu bạn có một lớp được nạp trong QGIS với đúng mức độ, hãy chọn "From layer" và chọn lớp bạn muốn sử dụng. Ở đây chúng ta sẽ chọn "Manual" và nhập các vĩ độ và vĩ độ tạo thành một hộp bao quanh khu vực chúng ta muốn truy cập. Bạn có thể điền vào các lats và lons mà bạn quan tâm, nhưng hãy nhớ rằng khu vực không được quá lớn, hoặc bạn sẽ không thể tải về tất cả các dữ liệu.  

![Chọn vùng][]

- Chọn tên và vị trí cho tệp xuất, sử dụng phần mở rộng tệp **.osm** và nhấp vào OK.  
- Bạn sẽ được thông báo khi quá trình tải xuống hoàn tất. Nhấp vào "Đóng" để thoát hộp thoại tải xuống.  

![Hoàn thành tải xuống][]

- Dữ liệu OSM bây giờ sẽ được lưu ở vị trí bạn chỉ định.  

> Phương pháp truy cập dữ liệu OSM này giống như khi bạn tải nó xuống trong JOSM hoặc trên trang web [openstreetmap.org](http://www.openstreetmap.org). Đối với các trích xuất lớn hơn và cập nhật, bạn có thể thử tải xuống từ [Trang web HOT export](http://export.hotosm.org) hoặc [bbbike.org](http://extract.bbbike.org/). Hãy nhớ rằng nếu bạn tải xuống dữ liệu OSM nén, trước tiên bạn cần giải nén nó vào định dạng **.osm** cho các bước tiếp theo.  


NHẬP DỮ LIỆU VÀO SQLITE
---------------------------

Tiếp theo chúng ta sẽ cần phải nhập tệp tin **.osm** gốc của chúng tôi vào một tệp SQLite Database.  

- Chuyển tới Vector -> OpenStreetMap -> Import Topology from XML...  
- Trong trường đầu tiên, chọn tệp tin **.osm** của bạn.  
- Bạn có thể thay đổi tên của tệp cơ sở dữ liệu đầu ra nếu bạn muốn.  
- Chọn hộp "Create Connection..."  

![Hộp hội thoại nhập][]  

- Nhấp OK.  
- Sau khi hoàn tất, nhấp "Close."  


TẠO LỚP
--------------

Cuối cùng, chúng ta sẽ xác định các lớp có thể được sử dụng trong QGIS, tùy chỉnh theo nhu cầu của chúng ta.  

- Chuyển đến Vector -> OpenStreetMap -> Export Topology to SpatiaLite...  
- Trong trường đầu tiên, chọn cơ sở dữ liệu bạn đã tạo ở bước trước.  

![Nhập tên file db][]  

- Trong "Export type", chọn loại đối tượng bạn muốn tạo một lớp cho. Ở đây chúng ta sẽ tạo ra một lớp đa giác.  

![Loại đối tượng được trích xuất][]  

Chỉnh sửa tên lớp nếu bạn muốn.  

Trong thẻ "Exported tags" là các lựa chọn khác cho việc trích xuất dữ liệu. Ở đây chúng ta có thể chọn những thẻ thông tin sẽ được bao gồm trong lớp được xuất ra. Điều này cho phép chúng ta linh hoạt hơn chính xác những dữ liệu nào chúng ta muốn truy cập.  

- Nhấp vào "Load from DB" để xem danh sách tất cả các thẻ sẵn có trong cơ sở dữ liệu. Mở rộng kích thước cửa sổ bằng cách kéo góc nếu điều đó giúp. Bạn có thể xem tất cả các thẻ chứa trong dữ liệu này, cũng như số lượng đối tượng mang mỗi thẻ.  
- Chọn các hộp bên cạnh các thẻ mà bạn muốn đưa vào. Ở đây chúng tôi sẽ chọn một vài tính năng sẽ hữu ích cho đa giác đại diện cho các tòa nhà.  

![Xuất dữ liệu][]  

Khi bạn hoàn tất, nhấp vào OK. Đóng hộp. Lớp của bạn nên được tự động thêm.  

![Lớp cairo polygons][]  

Nhấp chuột phải vào lớp và nhấp vào "Open Attribute Table".  

![Mở bảng thuộc tính/ attribute table][]  

Bạn có thể thấy ở đây rằng chúng ta có một bảng chỉ bao gồm các thuộc tính mà chúng ta đã chọn.  

![Bảng thuộc tính/ attribute table][]  

Lưu ý rằng chúng tôi đã không tạo ra một lớp **chỉ có** các tòa nhà. Thay vào đó, chúng tôi đã tạo một lớp bao gồm tất cả các đa giác từ dữ liệu ban đầu của chúng tôi, nhưng chỉ bao gồm các thẻ mà chúng tôi đã chọn. Để lọc lớp này chỉ hiển thị các toà nhà, chúng ta cần phải thực hiện truy vấn chỉ lọc đa giác có thẻ building=yes.


TÓM LƯỢC
-------

Quá trình này giúp bạn dễ dàng cập nhật dữ liệu OSM và kéo nó vào QGIS. Một khi bạn đã có các lớp như thế này trong QGIS, bạn có thể lưu chúng như shapefiles, thực hiện các bộ lọc và các truy vấn, vân vân. Để biết thêm chi tiết về các chức năng này, hãy xem trình đơn Trợ giúp trong QGIS.  


[Chọn vùng]: /images/osm-data/bounding_box.png
[Hoàn thành tải xuống]: /images/osm-data/download_complete.png
[Hộp hội thoại nhập]: /images/osm-data/import_dialog.png
[Nhập tên file db]: /images/osm-data/input_db_file.png
[Loại đối tượng được trích xuất]: /images/osm-data/export_type.png
[Xuất dữ liệu]: /images/osm-data/export_full.png
[Lớp cairo polygons]: /images/osm-data/cairo_polygons.png
[Mở bảng thuộc tính/ attribute table]: /images/osm-data/open_attribute_table.png
[Bảng thuộc tính/ attribute table]: /images/osm-data/attribute_table.png
