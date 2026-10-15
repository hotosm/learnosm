---
layout: doc
title: osm2pgsql
permalink: /vi/osm-data/osm2pgsql/
lang: vi
category: osm-data
---

osm2pgsql
==========


Trong chương trước, chúng ta đã thấy cách thiết lập Postgresql với PostGIS trong Win-dows và cách thiết lập một cơ sở dữ liệu và nạp nó với dữ liệu shapefile. Để có được dữ liệu OpenStreetMap vào cơ sở dữ liệu, bạn có thể lấy dữ liệu ở định dạng shapefile và sử dụng bộ nạp shapefile, nhưng điều này có thể để lại cho bạn mà không có tất cả dữ liệu mà bạn muốn. Trong chương này chúng ta sẽ học cách sử dụng **osm2pgsql**, một chương trình dòng lệnh để nạp dữ liệu OSM thô vào cơ sở dữ liệu PostGIS.  

Chúng tôi sẽ thực hiện các bước để thiết lập osm2pgsql trên Windows, mặc dù các bước này phải giống hệt nhau trên hệ điều hành khác, giả sử bạn đã thiết lập đúng cơ sở dữ liệu PostGIS của mình  

Nhận osm2pgsql
-------------

Để tải phiên bản cửa sổ của osm2pgsql, điều hướng trình duyệt web của bạn tới <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Tải xuống tệp **osm2pgsql.zip**  
- Giải nén tập tin trên hệ thống của bạn. Bạn nên di chuyển thư mục đã giải nén đến một vị trí mà bạn sẽ không di chuyển nó sau này, bởi vì chúng ta cần thêm vị trí của nó vào đường dẫn hệ thống.  

![unzip it][]

- Trong thư mục osm2pgsql mà bạn đã giải nén là một tệp có tên osm2pgsql.exe. Đây là một chương trình mà chúng ta sẽ chạy để nhập dữ liệu, nhưng để Windows tìm thấy nó, chúng ta cần thêm vị trí của nó vào đường dẫn hệ thống. Nhấp vào Start Menu và gõ "đường dẫn hệ thống".  

![system path][]

- Bạn sẽ thấy một tùy chọn có tên "Chỉnh sửa các biến môi trường hệ thống." Nhấp vào nó.  

![edit variables][]

- Nhấp vào nút có tên “**Biến môi trường**”  

![env variables][]

- Ở phía dưới tìm biến có tên “**Path**” và nhấp vào “**Chỉnh sửa...**”  

![find path][]

- Bạn phải thêm thư mục nơi osm2pgsql.exe nằm trong biến Đường dẫn.  

![edit path][]

- Thêm dấu chấm phẩy vào cuối thư mục trước đó và nhập vào đường dẫn thư mục đầy đủ của osm2pgsql.exe. Ví dụ, nếu bạn đặt thư mục **osm2pgsql** trực tiếp vào thư mục **C:\\** đường dẫn sẽ là:  
	
**C:\osm2pgsql\Win32**  

- Nhấp OK vài lần để lưu các cài đặt mới.  
- **osm2pgsql** nên được hoạt động ngay bây giờ. Hãy kiểm tra nó.  
- Mở Windows Command Prompt. Bạn có thể làm điều này bằng cách nhấp vào Start Menu và gõ  "**cmd**". Ứng dụng Command Prompt sẽ xuất hiện và bạn có thể nhấn Enter hoặc nhấp vào nó.  

![cmd][]

- Trong cửa sổ lệnh màu đen mở ra, hãy nhập:  

**osm2pgsql**

- Nếu mọi thứ hoạt động đúng, bạn sẽ nhận được thông báo như sau:  

![osm2pgsql test][]

- Nếu bạn không nhìn thấy thông báo lỗi như thế này, và nó nói rằng nó không thể tìm thấy ứng dụng  **osm2pgsql**, thì bạn có thể đã nhập biến Đường dẫn không chính xác.  

Lấy dữ liệu OSM thô
---------------------
Before we can run **osm2pgsql** we need to have some raw OSM data to import into a database. If you don't already have a **.osm** file that you can use, try downloading a file from <https://download.bbbike.org/osm/bbbike/>. This site hosts many OSM extracts for different cities.  Find a city to import and download the PBF file for it. PBF files are compressed versions of the normal **.osm** files. You can use any of the extract services listed in the chapter on [getting data](/en/osm-data/getting-data), if you'd like the raw data for another area.  

Nhận tệp kiểu
------------------
**osm2pgsql** yêu cầu sử dụng một tệp phong cách tùy chỉnh để xác định thẻ nào được bao gồm trong cơ sở dữ liệu trong quá trình nhập. Bạn có thể tải xuống tệp kiểu mặc định  [tại đây](/files/default.style).  

Nhập dữ liệu
-------------------
Mở PgAdmin III và tạo một cơ sở dữ liệu mới có tên **osm**, giống như bạn đã làm trong chương trước. Để nhập dữ liệu, chúng tôi sẽ chạy chương trình **osm2pgsql** thông qua dòng lệnh. 

- Nhấp vào Start Menu và gõ "cmd" và Enter để mở Command Prompt.  

![command prompt][]

Ở đây chúng ta sẽ chạy các  **osm2pgsql** ứng dụng với một số tùy chọn. Chúng ta cần ít nhất để cung cấp nó với:  

- Vị trí của tệp dữ liệu OSM  
- Tên của cơ sở dữ liệu và tên người dùng cơ sở dữ liệu  
- Tệp phong cách xác định thẻ OSM nào sẽ được nhập vào cơ sở dữ liệu  

Chúng tôi đã đặt tập tin OSM của chúng tôi vào thư mục **C:\\** để làm cho dễ dàng hơn.  

- Gõ lệnh sau đây, thay thế vị trí của tệp OSM và tệp phong cách của riêng bạn.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Bấm phím Enter. Nếu mọi việc suôn sẻ, quá trình sẽ bắt đầu chạy. Có thể mất vài phút để tất cả dữ liệu tải vào cơ sở dữ liệu.  

![osm2pgsql output][]

- Nếu tệp OSM thô của bạn lớn, bạn có thể cần thêm bộ nhớ bổ sung cho quá trình nhập osm2pgsql. Để thực hiện việc này, thêm lệnh sau vào lệnh:  

      --cache 600

Thử nghiệm
-----------

Chúng tôi có thể kiểm tra rằng nhập khẩu đã thành công và xem dữ liệu trong cơ sở dữ liệu của chúng tôi bằng cách sử dụng QGIS.  

- Mở QGIS và nhấp vào nút  "Thêm PostGIS Layers". ![qgis add postgis button][]{: height="24px"}

- Trong phần "Kết nối" ở trên cùng, nhấp vào “**Mới**.”  
- Đặt tên kết nối mới. Trong kiểu cơ sở dữ liệu **osm** (tên cơ sở dữ liệu của bạn).  
- Nhập tên đăng nhập và mật khẩu của bạn bên dưới.  

![connection settings][]

- Nhấp OK để lưu cài đặt kết nối. Sau đó nhấp vào "Kết nối" để kết nối với máy chủ PostgreSQL của bạn.  
- Nhấp vào bên cạnh "công khai" để xem tất cả các lớp (bảng) trong cơ sở dữ liệu của bạn. Lưu ý rằng osm2pgsql tạo ra một bảng riêng biệt cho các loại đối tượng khác nhau - điểm, đường kẻ và đa giác. Nó cũng tạo ra một bảng đường, trong đó chỉ có những con đường lớn.  

![postgis layers][]

- Chọn một hoặc nhiều lớp và nhấp vào "Thêm". Nếu được hỏi, chọn WGS84 làm CRS.  
- Nếu mọi thứ đã thành công, bạn sẽ thấy các lớp bạn đã chọn hiển thị trong QGIS.  

![osm in qgis][]



Tóm lược
-------

Khi bạn muốn nhập dữ liệu OpenStreetMap vào cơ sở dữ liệu của riêng bạn, **osm2pgsql** ilà một công cụ tuyệt vời. Nó có thể rất hữu ích khi bạn cần để có được dữ liệu OSM cập nhật nhất và tùy chỉnh các thuộc tính bạn muốn hoặc khi làm việc với các dự án phức tạp hơn.  

Một công cụ nhập khác đã được phát triển gần đây, được gọi là [imposm](http://imposm.org/), và cung cấp một số tốc độ và cải tiến khác trên osm2pgsql, mặc dù trong bài viết này nó thiếu các chức năng quan trọng khác được hứa hẹn trong phiên bản imposom 3.  

Để biết thêm thông tin về osm2pgsql, hãy tham khảo Wiki OSM - <http://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
