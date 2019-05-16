---
layout: doc
title: OruxMaps
permalink: /vi/mobile-mapping/oruxmaps/
lang: vi
category: mobile-mapping
---

OruxMaps
===============

> Reviewed 2016-08-04 and although slightly out of date is still functional & contains a link to the sites own software manual.

Trong phần này, chúng ta sẽ học làm thế nào để thiết lập OruxMaps, làm thế nào để tạo waypoint, làm thế nào để xem một tracklog, và làm thế nào để export một tracklog để sử dụng trong JOSM.  

​Cài đặt OruxMaps
------------------

Cài đặt ứng dụng từ Cửa hàng Google Play bằng cách tìm kiếm ** OruxMaps **, OruxMaps phải nằm trong số các kết quả tìm kiếm hàng đầu được liệt kê.  

![Search OruxMaps in Play Store][]

Nhấp vào nút ** Cài đặt ** và nhấn Accept sau khi App permissions xuất hiện.  

![Install OruxMaps][]

Xin chúc mừng! Bây giờ bạn đã cài đặt OruxMaps trong điện thoại của mình!  

​Sử dụng OruxMaps
--------------------

Lần đầu tiên bạn chạy ứng dụng, bạn sẽ thấy thông báo như sau:  

![Running OruxMaps for the first time][]

Trong OruxMaps, bạn có thể chọn xem bạn có muốn sử dụng bản đồ trực tuyến hoặc bản đồ ngoại tuyến. Sử dụng bản đồ ngoại tuyến tốt hơn nên bạn có thể sử dụng bản đồ đó ngay cả khi không có kết nối Internet. OruxMaps sẽ gợi ý hai nguồn để tải bản đồ ngoại tuyến. Nếu bạn đã có bản đồ ngoại tuyến, bạn cũng có thể đặt ở đây nữa! Lúc đầu có thể hơi khó hiểu vì có rất nhiều nút ở đó. Nhưng đừng lo lắng, bạn sẽ thấy lời giải thích cho mỗi nút dưới đây:  

![Interface overview][]

Nguồn: [OruxMaps Hướng dẫn sử dụng Phiên bản Tiếng Anh] (http://www.google.com/url?q=http%3A%2F%2Fwww.oruxmaps.com%2Foruxmapsmanual_en.pdf&sa=D&sntz=1&usg=AFQjCNFY7Tk-Gzz9NFKy9WOsnfnn8x3Kwg)  
Hướng dẫn này có thể được cập nhật hơn hướng dẫn này và có thể có sẵn bằng các ngôn ngữ khác.  

Bạn có thể thay đổi bản đồ nền của mình dưới ** Maps \> Chuyển Maps **. Sau đó bạn có thể lựa chọn - bạn muốn sử dụng ** Bản đồ trực tuyến ** hoặc bạn muốn sử dụng
** Bản đồ Ngoại tuyến **. OruxMaps cung cấp rất nhiều nguồn Bản đồ trực tuyến mà bạn có thể chọn nhưng tất nhiên nó sẽ tốn tiền từ kế hoạch dữ liệu trên thiết bị của bạn. Nếu bạn muốn biết nơi bạn có thể đặt bản đồ ngoại tuyến, bạn có thể vào ** Setting \> Maps **. Trong tùy chọn thư mục bản đồ, bạn có thể thấy nơi OruxMaps đặt
bản đồ ngoại tuyến. Theo mặc định, nó nằm trong thư mục ** OruxMaps / Mapfiles ** trong bộ nhớ trong của bạn.  

![Offline maps storage settings][]

Bắt đầu theo dõi
--------------

Trước khi bắt đầu theo dõi, hãy xem lại một số cài đặt trong cài đặt theo dõi / tuyến đường. Cài đặt đầu tiên là ** Tạo GPX tự động **. Nếu bạn kiểm tra cài đặt này, OruxMap sẽ giúp bạn tạo tệp .gpx ngay sau khi hoàn thành một theo dõi (sử dụng tính năng Theo Dõi). Vì vậy, sau khi hoàn thành một theo dõi, bạn có thể vào ** OruxMaps / Tracklogs ** trong bộ nhớ trong của bạn để có được các tệp .gpx mà không cần xuất bản ghi theo dõi lần đầu tiên trong quản lý tuyến đường/ tuyến đường. Cài đặt thứ hai là ** Hỏi tên theo dõi **. Rất hữu ích để xác định tên theo dõi của bạn trước khi bắt đầu theo dõi để bạn biết chính xác tên của theo dõi.  

![Tracklog settings][]

Để bắt đầu theo dõi, một điều cần nhớ là phải thiết lập tính năng GPS trong điện thoại của bạn. Bất kỳ tính năng nào trong OruxMaps như ** Bắt đầu GPS ** và ** Bắt đầu Ghi ** sẽ không bắt đầu trừ khi bạn kích hoạt Tính năng GPS. OruxMaps sẽ hiển thị thông báo nếu GPS của bạn vẫn bị vô hiệu, và sau đó bạn sẽ trực tiếp đi đến ** Cài đặt Vị trí ** trong điện thoại của bạn. Sau khi bật tính năng Vị trí trong điện thoại, bạn có thể biết vị trí của mình bằng cách sử dụng tính năng ** Bắt đầu GPS ** (1) ở bảng điều khiển bên phải. Sau khi vị trí của bạn đã được tải, bạn có thể bắt đầu Theo dõi bằng cách sử dụng ** Bắt đầu Ghi ** (2) trong bảng bên phải.  

![Start track recording][]

Để ngừng theo dõi bạn chỉ cần bấm vào cùng một nút (2) trong bảng bên phải. Sau khi bạn ngừng theo dõi OruxMap sẽ lưu trữ tracklog của bạn trong một cơ sở dữ liệu nội bộ. Bạn có thể truy cập vào tracklog bằng cách truy cập bảng điều khiển ** Routes ** trong trang đầu, chọn ** Quản lý ** Bạn sẽ tìm thấy tất cả các tracklog của bạn ở đây và bạn có thể thấy tuyến đường bằng cách bấm tracklog mà bạn muốn xem và chọn * * Tải theo dõi ** (1). Nếu bạn không sử dụng tính năng Tự động tạo GPX, bạn có thể xuất tracklog theo định dạng khác nhau (GPX, KML, KMZ) bằng cách chọn tracklog và ** Xuất dưới dạng ** (2).  

![Managing tracklogs][]

Nếu bạn đã có tài khoản OpenStreetMap, bạn có thể tải lên tuyến đường của bạn trực tiếp bằng cách sử dụng OruxMaps. Trước khi bạn tải lên tracklog bạn cần đặt tên người dùng và mật khẩu của bạn bằng cách vào ** Setting \> Integration \> OpenStreetMap **. Sau đó nhập tên người dùng và mật khẩu của bạn. Bạn có thể tải lên bản ghi của mình bằng cách sử dụng ** Tải lên đến (3) ** trong quản lý tuyến đường / tuyến đường.  

Một số cửa sổ sẽ bật lên và bạn cần phải chọn ** OpenStreetMaps ** (1) và sau đó bạn chọn ** Tracklog type ** (2), đặt ** Mô tả ** (3) và ** Tag ** (4). Sau khi tất cả các thông tin đã được điền vào báo chí ** Tải lên GPX ** (5). Thông báo sẽ bật lên và bạn có thể trực tiếp nhìn thấy dấu vết GPS của bạn trên trang web OpenStreetMap bằng cách chọn ** OK ** (6).  

![Uploading tracks to OpenStreetMap][]

​Adding Waypoint
---------------------

![Creating a waypoint][]

Nếu bạn muốn thêm điểm tham quan, bạn cần phải đi đến ** Waypoint ** biểu tượng (1) ở đầu trang và đi đến ** Tạo ** (2). Nó sẽ đưa bạn đến trang tạo đường dẫn và điền tên đường dẫn của bạn. Bạn có thể thêm thông tin bổ sung, ví dụ như mô tả điểm tham chiếu và tọa độ điểm đường của bạn bằng cách kiểm tra danh sách kiểm tra Tọa độ. Nhấn Chấp nhận để lưu điểm tham chiếu của bạn.  

![Waypoint creation settings][]

Nếu bạn muốn xem tất cả các điểm tham chiếu của mình, bạn có thể vào ** Waypoint \> Manage **. Từ trang này bạn có thể thay đổi thuộc tính, xóa và xuất điểm tham chiếu. Để xem tất cả các điểm tham chiếu của bạn trong ** bản đồ **, hãy chọn các điểm tham chiếu và đi đến hiển thị trên bản đồ (1) và nếu bạn muốn xuất các điểm tham chiếu của mình bấm ** Xuất ** (2). Tất cả các điểm xuất khẩu của bạn sẽ được lưu trữ trong bộ nhớ trong (theo mặc định nó được lưu trữ trong ** oruxmaps / geocaches **).  

![Managing save waypoints][]

Tóm tắt
-----------

Xin chúc mừng! Bạn đã biết cách sử dụng OruxMaps cho khảo sát hiện trường. Có thể là lần đầu tiên của bạn khó khăn nhưng nếu bạn tiếp tục sử dụng này bạn sẽ làm quen với ứng dụng này.  

[Search OruxMaps in Play Store]: /images/mobile-mapping/oruxmaps_image00.png
[Install OruxMaps]: /images/mobile-mapping/oruxmaps_image03.png
[Running OruxMaps for the first time]: /images/mobile-mapping/oruxmaps_image01.png
[Interface overview]: /images/mobile-mapping/oruxmaps_image09.png
[Offline maps storage settings]: /images/mobile-mapping/oruxmaps_image06.png
[Tracklog settings]: /images/mobile-mapping/oruxmaps_image11.png
[Start track recording]: /images/mobile-mapping/oruxmaps_image02.png
[Managing tracklogs]: /images/mobile-mapping/oruxmaps_image10.png
[Uploading tracks to OpenStreetMap]: /images/mobile-mapping/oruxmaps_image05.png
[Creating a waypoint]: /images/mobile-mapping/oruxmaps_image07.png
[Waypoint creation settings]: /images/mobile-mapping/oruxmaps_image08.png
[Managing save waypoints]: /images/mobile-mapping/oruxmaps_image04.png