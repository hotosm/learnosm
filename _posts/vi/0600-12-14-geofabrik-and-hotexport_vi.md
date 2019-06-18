---
layout: doc
title: Sử dụng Geofabrik và HOT Export
permalink: /vi/osm-data/geofabrik-and-hot-export/
lang: vi
category: osm-data
---

Sử dụng Geofabrik và HOT Export
================

> Cập nhật: 2017-12-24  

Sau khi học cách thêm và chỉnh sửa dữ liệu trong OpenStreetMap (OSM), bây giờ có thể bạn muốn lấy dữ liệu làm bản sao lưu hoặc xử lý nó bằng phần mềm Hệ thống Thông tin Địa lý mã nguồn mở, chẳng hạn như Quantum GIS ([www.qgis.org](http://www.qgis.org)).  

TẢI DỮ LIỆU OSM TỪ TRANG WEB GEOFABRIK
-------------------------------------

Các dữ liệu OSM có thể dễ dàng thu được bằng cách tải nó từ [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

[Tải dữ liệu từ geofabrik][]

Dữ liệu được chia thành nhiều vùng. Indonesia có thể được tìm thấy như là một phần của châu Á bằng cách nhấp vào Tiểu khu vực châu Á trên bảng màu xanh và sau đó trang sẽ xuất hiện như thế này.  

![Dữ liệu trên geofabrik của châu Á][]

Sau khi xuất hiện ở đầu trang, xem tiểu vùng chia thành các quốc gia Châu Á như thế nào. Để có được dữ liệu, bạn cần phải nhấp vào nhà nước Indonesia trên bảng màu xanh, và nó sẽ xuất hiện như thế này.  

![Dữ liệu trên geofabrik của Indonesia][]

Sau đó, nếu bạn muốn lấy dữ liệu của Indonesia ở định dạng shapefile (.shp), bạn nhấp vào liên kết indonesia-latest.shp.zip và tệp sẽ được tải xuống. Có một số định dạng có thể được tải xuống. Một định dạng phổ biến là shapefile (shp) với các điểm, polyline, và lớp đa giác.  

Bạn có thể kiểm tra dữ liệu thời gian qua đã được cập nhật. Xin lưu ý, máy chủ thường cập nhật dữ liệu 24 giờ một lần, vì vậy nếu bạn chỉ cần tải dữ liệu lên OSM thì dữ liệu sẽ không xuất hiện tự động khi bạn tải xuống, nhưng bạn phải đợi các cập nhật mới nhất từ máy chủ.  

Tải dữ liệu OSM từ công cụ trích xuất dữ liệu HOT
--------------------------------------

Nhóm [Humanitarian OpenStreetMap Team] (https://www.hotosm.org) đã tạo ra một dịch vụ trực tuyến cho phép người dùng tạo ra các trích xuất dữ liệu OSM tuỳ chỉnh bất cứ nơi nào trên thế giới, bằng cách chọn một khu vực quan tâm, các loại đối tượng bản đồ và định dạng tệp tin. Dịch vụ có tại [export.hotosm.org] (https://export.hotosm.org/en/v3). Trong vòng vài phút, dữ liệu OpenStreetMap cập nhật (OSM) được xuất, lọc và chuyển đổi.  Phần tiếp theo sẽ hướng dẫn bạn cách thức sử dụng công cụ trích xuất dữ liệu. Các thông tin này cũng có thể tìm thấy trong mục '[Tìm hiểu] (https://export.hotosm.org/en/v3/learn)' tại export.hotosm.org.

![hot-export-tool][]

## Bắt đầu

Bất cứ ai cũng có thể tạo một tùy chỉnh xuất dữ liệu OpenStreetMap với Export Tool - chỉ cần đăng ký một tài khoản. Bạn có thể đăng ký với một tài khoản OpenStreetMap từ openstreetmap.org, và một địa chỉ email hợp lệ, sẽ được sử dụng để gửi một liên kết đến phiên trích xuất dữ liệu của bạn sau khi hoàn tất.

## Lựa chọn vùng xuất dữ liệu - Area of Interest

Có nhiều cách để lựa chọn vùng xuất dữ liệu (AOI) thông qua Công cụ Trích xuất. Điều này bao gồm khả năng nhập và tìm kiếm, xác định các tọa độ của một hộp bao quanh, vẽ một hộp bao quanh, vẽ một đa giác, dùng khung nhìn hiện tại hoặc tải tệp tin địa lý geojson lên.

![export-tool-create][]

Khi bạn đã 'Đăng nhập' vào Công cụ xuất dữ liệu HOT, tab 'Tạo' sẽ được kích hoạt. Tab 'Tạo' là nơi bạn sẽ thiết lập các tùy chọn cho việc xuất dữ liệu, bằng cách mô tả nó ở phía bên tay trái và chọn vùng xuất dữ liệu với bản đồ ở phía bên tay phải. 

![export-tool-describe][]

### Thanh công cụ tìm kiếm
Có 6 cách để xác định cùng xuất dữ liệu của bạn. Cách thứ nhất và thứ hai là sử dụng thanh tìm kiếm, nơi có thể tìm địa điểm bằng cách nhập tên và chọn nó từ các tùy chọn bên dưới hoặc bằng cách xác định tọa độ của vùng bao. Bạn có thể tìm thấy tọa độ X cực đại, X cực tiểu, Y cực đại và Y cực tiểu (Tây, Nam, Đông, Bắc) của một quốc gia [trong một danh sách CSV do Cơ quan trao đổi dữ liệu nhân đạo (Humanitarian Data Exchange - HDX) cung cấp (https://data.humdata.org/dataset/bounding-boxes-for-countries).

![export-tool-search][]
![export-tool-coordinates][]


### Số hóa 
Cách thứ ba và thứ tư để chọn vùng xuất dữ liệu trong Export Tool là bằng cách vẽ một hộp bao quanh bằng tùy chọn 'Box' từ cột công cụ ở bên phải của màn hình. Hoặc bạn có thể tự do vẽ đa giác trực tiếp trên bản đồ bằng cách chọn công cụ 'Vẽ'.

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Tải lên vùng xuất dữ liệu
Hai cách cuối cùng để chọn vùng xuất dữ liệu là thông qua chọn 'Vùng hiển thị' ở phía bên tay phải của bản đồ, để sử dụng phạm vi của chế độ xem hiện tại của bản đồ hoặc bằng công cụ 'Nhập' cho phép bạn tải lên một đa giác của vùng lựa chọn.  

![export-tool-area-view][]
![export-tool-area-import1][]


Đa giác được nhập vào phải dưới định dạng GeoJSON hệ tọa độ WGS84. Một trong những cách để tạo file GeoJSON là sử dụng trang web geojson.io. Sau khi chúng ta chọn vùng trong trang web [geojson.io](http://geojson.io/), sao chép phần chữ trong ô bên phải và dán vào một trình soạn thảo mà bạn sử dụng, như là [Atom](https://atom.io/) và lưu dưới dạng .geojson.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


Tệp GeoJSON cần được chỉnh sửa một chút để Công cụ trích xuất dữ liệu chấp nhận. Xin lưu ý rằng tệp không được bao gồm nhiều đa giác. Với hình thức đơn giản nhất, tệp chỉ cần cho biết rằng đó là "loại: đa giác" và liệt kê tọa độ của các điểm / nút xác định khu vực. Tệp GeoJSON sau đó sẽ được công cụ phân tích cú pháp và được sử dụng để chỉ định tệp tin AOI.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Lựa chọn định dạng dữ liệu

Công cụ này cho phép trích xuất dữ liệu OSM thông qua Overpass API theo dạng thức gốc Protocol Buffer Binary (PBF), trước khi lọc dữ liệu cho các đối tượng bản đồ và các thẻ thông tin đi kèm do người dùng chỉ định. Khi dữ liệu đã được lọc, chúng hoàn toàn có thể chuyển đổi sang các định dạng mà người sử dụng lựa chọn.  

Hiện tại công cụ có thể chuyển đổi dữ liệu OSM thành Shapefile .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf và MBTiles .mbtiles. Ít nhất một trong các định dạng tệp phải được chọn cho việc trích xuất dữ liệu, nhưng không hạn chế chọn bao nhiêu, có thể thực hiện bằng cách đánh dấu nhiều ô.

![export-tool-file-formats][]


### Định dạng Shapefile .shp
Shapesfiles là một định dạng dạng bảng được phát triển bởi Esri. Đây là định dạng tệp phổ biến nhất cho dữ liệu GIS. Một shapefile thực sự là 3-4 tập tin riêng lẻ, thường đi kèm với nhau như một kho lưu trữ ZIP. Shapefiles có những hạn chế nhất định, chẳng hạn như kích thước tệp, giới hạn ở 2 gigabyte (GB) và giới hạn độ dài tên cột là 10 ký tự. Đọc thêm về [Shapefiles .shp] [Shapefiles .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) trong phần "Học".

![export-tool-shapefile][]


### Định dạng Geopackage .gpkg
OGC Geopackages lưu trữ dữ liệu địa lý dưới định dạng CSDL SQLite đơn. Geopackages rất giống với định dạng CSDL Spatialite-enabled SQLite. Chúng có thể sử dụng được với hầu hết các ứng dụng GIS. Geopackages hỗ trợ không hạn chế dung lượng file và số lượng cột trong bảng, hỗ trợ Unicode. Chúng cũng phù hợp nếu bạn cần phải chạy các câu lệnh truy vấn dữ liệu. Đọc thêm về [Geopackages.gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) trong phần "Học".

![export-tool-sql][]


### Định dạng Garmin .img
Một file .IMG chứa đựng tất cả các thông tin cần thiết để vẽ lại bản đồ trong một thiết bị GPS di động Garmin.  Lưu ý rằng các lựa chọn kiểu dáng và tính năng của bản đồ không phụ thuộc vào lựa chọn tính năng được gửi tới Công cụ Xuất - thay vào đó, một kiểu mặc định dựa trên tất cả các dữ liệu OSM được sử dụng. Đọc thêm về [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) trong phần Học.

![export-tool-garmin][]


### Định dạng Google Earth .kml
Ngôn ngữ đánh dấu khóa (Keyhole Markup Language - KML) là một định dạng dựa trên XML để mô hình hóa điểm, đường, đa giác và thuộc tính liên quan theo địa lý. Google Earth là nền tảng trình duyệt xem trái đất nổi tiếng nhất sử dụng KML, cũng là lý do khiến nó được phát triển. Đọc thêm về [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) trong phần Học.

![export-tool-google-earth][]


### Định dạng OpenStreetMap .pbf
Các định dạng dữ liệu truyền thống của OSM là một tài liệu XML của các nút, đường và quan hệ. Định dạng nhị phân của Bộ đệm giao thức (Buffer Binary Format - PBF) là một hình thức được tối ưu hóa của OSM XML, kích thước lưu trữ nhỏ hơn và đọc nhanh hơn. Định dạng này chỉ tương thích với các công cụ cụ thể của OSM, chẳng hạn như phần mềm chỉnh sửa OSM. Mỗi .PBF được cung cấp bởi công cụ xuất khẩu phải được tham chiếu hoàn thiện - nghĩa là bất kỳ nút, đường hoặc mối quan hệ nào được tham chiếu bởi một đường hay mối quan hệ đều phải xuất hiện trong PBF. Đọc thêm về [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) trong phần Học.

![export-tool-xml-code][]


### Định dạng MAPS.ME .mwm
Maps.me là một ứng dụng Điều hướng GPS và Bản đồ dành cho điện thoại thông minh và máy tính bảng Android, đặc biệt là hỗ trợ lập bản đồ và điều hướng ngoại tuyến (không sử dụng kết nối internet). Đọc thêm về [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) trong phần Học. Để sử dụng các tùy biến trích xuất dữ liệu với Maps,me trong Android, hãy làm theo các bước sau:
Mở Maps.me và điều hướng đến khu vực bạn quan tâm
Chấp nhận lời nhắc của Maps.me và tải xuống khu vực được đưa ra
Tắt hoàn toàn Maps.me
Tạo một phiên trích xuất dữ liệu dạng MWM
Tải xuống dữ liệu được trích xuất, giải nén và sao chép file .mwm vào thiết bị của bạn
Sử dụng trình quản lý file trong Android, mở thư mục chứa file .mwm vừa sao chép
Chạm và giữ để sao chép hoặc di chuyển file này
Mở thư mục "MapsWithMe" và mở thư mục có số thứ tự lớn nhất (ví dụ: 170917)
Sao chép hoặc di chuyển file .mwm của bạn vào thư mục này bằng cách chọn nút "Paste"
Xóa file .mwm đã có cho khu vực bạn quan tâm ở trước đó nhưng ghi nhớ tên file đó
Đổi tên file .mwm của bạn trùng với tên file bạn vừa xóa bằng cách chọn file (chạm và giữ) và nhấp vào nút 'More" (3 gạch)
Mở Maps.me

![export-tool-mapsme][]


### Định dạng OsmAnd .odf
OsmAnd cũng là ứng dụng Điều hướng GPS và bản đồ cho điện thoại thông minh Android và iOS cũng như máy tính bảng, đặc biệt là hỗ trợ hiển thị, định tuyến và tìm kiếm ngoại tuyến. Đọc thêm về ứng dụng và nhiều tính năng của nó tại trang chủ [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf). 

![export-tool-osmand][]


### Định dạng MBTiles .mbtitles
MBTiles là một định dạng tập tin để lưu trữ các bản đồ dạng mảnh ghép trong một tập tin duy nhất. Công cụ Export Tool cho phép người dùng tạo các MBTile chứa các mảnh ghép từ OSM, có thể được sử dụng làm nguồn dữ liệu trong hoàn cảnh ngoại tuyến trong các ứng dụng hỗ trợ chúng. Xin lưu ý rằng MBTiles sẽ trích xuất tất cả các đối tượng bản đồ OSM trong vùng được lựa chọn thông qua Công cụ Xuất, với tab '3 Dữ liệu' tự động chuyển sang tùy chọn thả xuống để chọn nguồn và phạm vi phóng, thay cho thẻ cây tiêu chuẩn và tính năng Tùy chọn YAML. Đọc thêm về [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) trong phần Học.

![export-tool-mbtiles][]


Định dạng tệp khác liên tục được đề xuất và thêm vào Công cụ Xuất. Nếu có định dạng tệp mà bạn muốn thấy được thêm vào trong tương lai, vui lòng đưa ra nhận xét về Kho lưu trữ  [GitHub](https://github.com/hotosm/osm-export-tool/issues). Để biết thêm thông tin chi tiết về từng loại định dạng tệp, vui lòng truy cập trang Định dạng tệp trong mục ‘[Học](https://export.hotosm.org/en/v3/learn)’ của trang web công cụ.



## Tùy biến các đối tượng bản đồ

Công cụ này cho phép người dùng tuỳ chỉnh dữ liệu được lựa chọn trong khu vực được xác định. Dữ liệu OSM được xác định bằng cách sử dụng các bộ lọc thẻ và khóa, với Cây thẻ thông tin hoặc Mẫu YAML. Cây thẻ thông tin dành cho các trường hợp sử dụng phổ biến, đưa ra một bộ các bộ lọc và các lựa chọn, trong đó cấu hình YAML cung cấp sự kiểm soát hoàn toàn đối với các bộ lọc và các lựa chọn, sử dụng định nghĩa bộ lọc kiểu câu lệnh truy vấn có cấu trúc.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM là một cơ sở dữ liệu mở toàn cầu về các đối tượng địa lý được gắn thẻ, với ba loại yếu tố:
Điểm, đặc trưng cho một điểm trên bề mặt trái đất
Đường, là một tập hợp các điểm tạo thành các đoạn hoặc vùng
Quan hệ, là một tập hợp các điểm, đường và các quan hệ khác

Mỗi yếu tố này có thể có số lượng bất kỳ thẻ thông tin dạng khóa=giá trị. Ví dụ: bưu điện có thể được đại diện bằng một đường khép kín với các thẻ building=yes và amenity=post_office. Hãy xem các thẻ này có thể được định nghĩa trong Công cụ Xuất bằng cách sử dụng Cây thẻ thông tin và Biểu mẫu YAML để lọc dữ liệu OSM.

### Cây thẻ thông tin
Cây thẻ thông tin là cách đơn giản nhất để bắt đầu lựa chọn các đối tượng bản đồ, chỉ đơn giản bằng cách đánh dấu hộp kiểm cha mẹ hoặc con. Xin lưu ý rằng việc chọn hộp kiểm cha mẹ sẽ thêm các thẻ khóa=giá trị liên quan đến chủ đề, cũng như các hộp kiểm con bên dưới nó. Mỗi hộp kiểm cha mẹ có một truy vấn khác để lọc dữ liệu, vì vậy bạn nên lướt qua mỗi hộp kiểm để hiển thị cú pháp cho mỗi chủ đề, mà cú pháp đó sẽ phải cung cấp trong hộp thông tin ở bên phải. 

![export-tool-treetag-sql][]


Ví dụ như chọn hộp kiểm cha 'Emergency', sẽ tự động chọn hộp kiểm con 'Police Station', 'Ambulance Station' và 'Fire Station' ở dưới nó, tuy nhiên ngoài ra nó cũng sẽ chọn tất cả các thẻ có  emergency=yes, amenity=police và amenity=fire_station trong truy vấn SQL sau đây:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

Các hộp kiểm cha mẹ không phải lúc nào cũng thể hiện những gì có trong các hộp kiểm con phía dưới, để thử và tính tất cả các thẻ có thể có liên quan đến một chủ đề. Các thẻ OSM liên tục phát triển và chúng tôi muốn đảm bảo rằng công cụ này có thể thích ứng với những thay đổi này. Chỉ các cặp khóa=giá trị phổ biến nhất được sử dụng trong cách hộp kiểm con, và hộp kiểm cha mẹ được sử dụng để thử và bao gồm thẻ thông tin không được sử dụng như thường xuyên, nhưng cùng nằm trong một chủ đề. Nếu bạn có đề xuất sửa đổi các chủ đề và thẻ này, hãy bình luận tại [spreadsheet](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) để phổ biến Cây thẻ thông tin, và chúng tôi sẽ cố gắng tích hợp nó nếu phù hợp.

![export-tool-treetag-spreadsheet][]


### Biểu mẫu YAML
Sử dụng cấu hình YAML cho khả năng kiểm soát hoàn toàn việc áp dụng bộ lọc cho dữ liệu OSM, bằng cách sử dụng định nghĩa bộ lọc giống ngôn ngữ truy vấn có cấu trúc (SQL) để áp dụng các thẻ khóa=giá trị. Xin lưu ý rằng Cây thẻ thông tin cũng tạo cú pháp trên mẫu YAML, vì vậy bất kỳ hộp kiểm cha mẹ và con nào được chọn sẽ tự động được áp dụng trong hộp YAML. Hoạt động này như một điểm khởi đầu cho truy vấn có thể được chỉnh sửa thêm. 

![export-tool-treetag-yaml][]


Việc sử dụng YAML đã được chọn do sự đơn giản và tính tương thích với SQL. Cách thức chọn đối tượng bản đồ thông qua công cụ YAML tương tự như các hình thức trích xuất file được sử dụng bởi các chương trình như osm2pgsql và imposm. Cú pháp tuân thủ khoảng trống chặt chẽ, với mỗi phần tử con được thụt vào bên dưới phần tử mẹ của nó, và phía trước có một dấu gạch ngang. Dấu gạch ngang này phải có một khoảng trắng sau đó. Dưới đây là một ví dụ cơ bản về lựa chọn đối tượng bản đồ với 3 chủ đề, tòa nhà, đường thuỷ và bệnh viện:

![export-tool-yaml-code1][]


YAML có chủ đề cùng với hai cấu trúc dữ liệu là Kiểu vẽ và Danh sách
Chủ đề của ví dụ bên trên là: buildings
Các kiểu vẽ trong ví dụ bên trên là: types và select 
Danh sách trong ví dụ bên trên là: các phần tử con của select và types

YAML: Chủ đề
Chủ đề là chìa khóa mức trên cùng của tài liệu YAML; các ký tự hợp lệ là con chữ, con số, và dấu gạch chân. 

YAML: Kiểu Dạng hình
Các giá trị danh sách dưới các kiểu vẽ có thể là ít nhất một trong: “- points”, “- lines”, “- polygons”. Nếu không có chìa khóa types, tất cả ba kiểu dạng hình được bao gồm trong chủ đề.

YAML: Lựa chọn Cột
Các mục dnah sách dưới chìa khóa select định rõ các cột của mỗi chủ đề. Ví dụ sau sẽ điền các cột “name” và “amenity” với các giá trị trong OSM:

![export-tool-yaml-code2][]


YAML: Bộ lọc
Bộ lọc nằm dưới chìa khóa where: trong mỗi chủ đề. Chúng định rõ tập hợp con của dữ liệu OSM được bao gồm trong chủ đề. Ví dụ sau sẽ lọc chủ đề để chỉ có các đối tượng mà chìa khóa natural có giá trị waterway:

![export-tool-yaml-code3][]


Xin lưu ý rằng gần như lúc nào sẽ cần bộ lọc nào đó; nếu không thì chủ đề sẽ bao gồm tất cả các dữ liệu OSM ứng với một kiểu dạng hình cụ để. Một bộ lọc được định rõ theo cú pháp giống SQL; các từ khóa hợp lệ là IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


Các cài đặt trước của JOSM
Các phiên bản cũ hơn của Công cụ Xuất đã sử dụng các tệp .XML JOSM định sẵn để xác định lựa chọn đối tượng bản đồ. Phiên bản mới sử dụng YAML vì nó linh hoạt hơn trong cách chuyển dữ liệu OSM. Tuy nhiên, Công cụ Xuất khẩu mới này có thể giúp chuyển đổi các cài đặt sẵn JOSM thành cấu hình YAML, bằng cách chọn nút 'Nạp từ JOSM Preset .XML'. Xin lưu ý Nếu cài đặt sẵn phức tạp hơn, có thể cần phải được viết như một cấu hình YAML mới dựa trên các phần tử 'item' chứa trong XML.

![export-tool-load-preset][]



### Cấu hình

Các cấu hình YAML có thể được định nghĩa và lưu lại để sử dụng trong tương lai thông qua trang 'Configs'. Thật hữu ích khi tạo một cấu hình cho một dự án, sau đó có thể sử dụng cho tất cả các hình thức trích xuất dữ liệu liên quan đến dự án đó. Cung cấp cho cấu hình 'tên' và 'mô tả' sẽ làm giúp những người khác dễ dàng tìm thấy. Bỏ chọn hộp kiểm 'Công khai' sẽ làm cho cấu hình chỉ hiển thị đối với tác giả. 

![export-tool-configuration-saved][]


Xin lưu ý rằng cấu hình có thể được chỉnh sửa, rất hữu ích cho việc phát triển lựa chọn tính năng trong quá trình thực hiện dự án. Các cấu hình YAML đã lưu có thể được lựa chọn thông qua tùy chọn 'Stored Configuration' trên tab '3 Data' khi tạo một phiên xuất dữ liệu. Sử dụng thanh Tìm kiếm để tìm các cấu hình liên quan đến dự án của bạn.

![export-tool-configuration-stored][]


Để biết thêm chi tiết về lựa chọn đối tượng và YAML, xin hãy đọc 'Chọn Đối tượng' và 'Tiêu chuẩn YAML' trong phần '[Tìm hiểu](https://export.hotosm.org/vi/v3/learn)' của trang chủ công cụ. 




[Tải dữ liệu từ geofabrik]: /images/osm-data/download-geofabrik.png
[Dữ liệu trên geofabrik của châu Á]: /images/osm-data/geofabrik-asia.png
[Dữ liệu trên geofabrik của Indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export-tool]: /images/osm-data/hot-export-tool.png
[export-tool-create]: /images/osm-data/export-tool-create.png
[export-tool-describe]: /images/osm-data/export-tool-describe.png
[export-tool-search]: /images/osm-data/export-tool-search.png
[export-tool-coordinates]: /images/osm-data/export-tool-coordinates.png
[export-tool-area-bbox]: /images/osm-data/export-tool-area-bbox.png
[export-tool-area-draw]: /images/osm-data/export-tool-area-draw.png
[export-tool-area-view]: /images/osm-data/export-tool-area-view.png
[export-tool-area-import1]: /images/osm-data/export-tool-area-import1.png
[export-tool-geojson-io]: /images/osm-data/export-tool-geojson-io.png
[export-tool-geojson-edit1]: /images/osm-data/export-tool-geojson-edit1.png
[export-tool-geojson-edit2]: /images/osm-data/export-tool-geojson-edit2.png
[export-tool-area-import2]: /images/osm-data/export-tool-area-import2.png
[export-tool-file-formats]: /images/osm-data/export-tool-file-formats.png
[export-tool-shapefile]: /images/osm-data/export-tool-shapefile.png
[export-tool-sql]: /images/osm-data/export-tool-sql.png
[export-tool-garmin]: /images/osm-data/export-tool-garmin.jpg
[export-tool-google-earth]: /images/osm-data/export-tool-google-earth.jpg
[export-tool-xml-code]: /images/osm-data/export-tool-xml-code.png
[export-tool-mapsme]: /images/osm-data/export-tool-mapsme.png
[export-tool-osmand]: /images/osm-data/export-tool-osmand.png
[export-tool-mbtiles]: /images/osm-data/export-tool-mbtiles.jpg
[export-tool-treetag-tab]: /images/osm-data/export-tool-treetag-tab.png
[export-tool-yaml-tab]: /images/osm-data/export-tool-yaml-tab.png
[export-tool-treetag-sql]: /images/osm-data/export-tool-treetag-sql.png
[export-tool-treetag-spreadsheet]: /images/osm-data/export-tool-treetag-spreadsheet.png
[export-tool-treetag-yaml]: /images/osm-data/export-tool-treetag-yaml.png
[export-tool-yaml-code1]: /images/osm-data/export-tool-yaml-code1.png
[export-tool-yaml-code2]: /images/osm-data/export-tool-yaml-code2.png
[export-tool-yaml-code3]: /images/osm-data/export-tool-yaml-code3.png
[export-tool-yaml-code4]: /images/osm-data/export-tool-yaml-code4.png
[export-tool-load-preset]: /images/osm-data/export-tool-load-preset.png
[export-tool-configuration-saved]: /images/osm-data/export-tool-configuration-saved.png
[export-tool-configuration-stored]: /images/osm-data/export-tool-configuration-stored.png




