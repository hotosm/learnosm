---
layout: doc
permalink: /vi/mobile-mapping/
lang: vi
title: Lập bản đồ với điện thoại thông minh, GPS và bản đồ hiện trường
category: mobile-mapping
cover: yes
nosearch: true
---

Lập bản đồ với điện thoại thông minh, GPS và bản đồ hiện trường
=============================

> Hướng dẫn này có thể tại tại đây [mobile-mapping_vi.odt](/files/mobile-mapping_vi.odt) or [mobile-mapping_vi.pdf](/files/mobile-mapping_vi.pdf)  
> Reviewed 2015-07-14  

Để thực sự tạo một bản đồ chi tiết và chính xác, bạn cần phải thực hiện một cuộc khảo sát trong khu vực bạn đang cập nhật. Các hướng dẫn trong phần này đề cập đến việc thực hiện một cuộc khảo sát bằng cách sử dụng một;  

- GPS có lẽ sẽ chính xác hơn điện thoại di động của bạn,  
- Field Papers, một phương pháp lấy một bản đồ in mà bạn có thể viết trên, sau đó tải lên và theo dõi từ, hoặc  
- Điện thoại di động của bạn. Có nhiều ứng dụng có sẵn để điều hướng bằng cách sử dụng dữ liệu OSM và nhiều ứng dụng để giúp bạn thực hiện cuộc khảo sát của mình. Chỉ một số ít được liệt kê ở đây nhưng danh sách này đang phát triển hàng ngày, và một số Tổ chức viện trợ đang thiết kế ứng dụng riêng của họ để thu thập dữ liệu cụ thể.  

Ngày càng có nhiều điện thoại thông minh bao gồm một chip radio cho phép họ nhận được tín hiệu từ các hệ thống định vị vệ tinh và xác định vị trí của họ. Các chip phổ biến nhất nhận được tín hiệu từ tần số GPS ở Hoa Kỳ, trong khi các mô hình kết thúc cao hơn có thể bao gồm các chip có thể đọc được tần số từ vệ tinh GLONASS của Nga cùng một lúc.  

Chất lượng của các chip được sử dụng trong điện thoại thông minh có thể khác nhau, và tính chính xác của dữ liệu và hiệu suất cũng có thể khác nhau.  

Các thiết bị có chip GPS có thể hoạt động tự động, ngoài mạng lưới, và không có kết nối Internet, trong khi các thiết bị được đánh dấu bằng "Chỉ GPS A-GPS" (Assisted GPS) yêu cầu kết nối dữ liệu mạng (và một tín hiệu di động từ một công ty viễn thông) . Dữ liệu A-GPS có thể giúp các chip GPS tự động hoạt động tốt hơn bằng cách lưu trữ trước dữ liệu để có hiệu suất tốt hơn.  

Đối với hầu hết các ứng dụng bản đồ để làm việc như mong đợi, người dùng được giả định có một điện thoại thông minh với một chip GPS tự trị. Kiểm tra thông số kỹ thuật của điện thoại để xác nhận xem thiết bị của bạn có sử dụng một chip tự trị hay là thiết bị chỉ có A-GPS.  

Có rất nhiều ứng dụng bản đồ có sẵn (miễn phí hoặc trả phí) cho hầu hết các điện thoại thông minh trên thị trường. Mỗi ứng dụng có những lợi thế và bất lợi riêng.  

Trong việc chọn một ứng dụng lập bản đồ để lập bản đồ trong OpenStreetMap, bạn cần phải xem xét các tính năng sau.  

- Dễ học; ngay lập tức sử dụng được  
- Với sự hỗ trợ của GPX (tạo các điểm tham chiếu, các khoảng đăng nhập tùy chỉnh)  
- Cho phép đóng góp của OSM (thêm, chỉnh sửa, tải lên dữ liệu)  
- Có thể tải dữ liệu OSM ngoại tuyến  
- Có thể gắn thẻ địa lý các tệp đa phương tiện (ghi chú, ảnh, video)  
- Trong phát triển tích cực  

Hãy thử nhiều ứng dụng tương thích với điện thoại của bạn để làm quen với giao diện và chọn ứng dụng tốt nhất dựa trên phương pháp cá nhân và cách tiếp cận lập bản đồ của bạn.

<!-- Commenting for now since tables doesn't look very nice!

Recommended Applications for Smartphones / PDAs
-----------------------------------------------------

| Application      | Usage  | Android  | Blackberry | iOS     | Windows |
| ---------------- | :----: | :------: | :--------: | :-----: | :-----: |
| Geopaparazzi     | m      | O        |            |         |         |
| GPS Essentials   | m      | O        |            |         |         |
| MapZen           | m:p    | O        |            | O       |         |
| Open GPS Tracker | m      | O        |            |         |         |
| OruxMaps         | m      | O        |            |         |         |
| OSMAnd           | m:n:p  | O        | O          | D       |         |
| OSMTracker       | m      | O        |            |         | O       |
| Vespucci         | m:f    | O        |            |         |         |

O - supported, D - under development, m - mapping, n - navigation, p - POI editor, f - full editor

 -->

Các phần tiếp theo sẽ hướng dẫn bạn cách cài đặt và sử dụng các ứng dụng cụ thể để bạn đóng góp cho OpenStreetMap bằng điện thoại thông minh của bạn.

> **Chú ý:** Trước khi tiếp tục tiến hành, hãy xác minh rằng GPS có sẵn và đang hoạt động cho thiết bị. Trong Android, hãy chuyển đến **Settings \> Location** and enable it.  
> Hãy nhớ rằng, GPS không hoạt động bên trong tòa nhà!
