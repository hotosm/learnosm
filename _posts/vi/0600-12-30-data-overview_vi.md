---
layout: doc
title: Tổng quan về dữ liệu OpenStreetMap
permalink: /vi/osm-data/data-overview/
lang: vi
category: osm-data
---

Tổng quan về dữ liệu OpenStreetMap
==================


> Hướng dẫn này có thể được tải xuống tại đây: [OSM_Data_Overview_vi.odt](/files/OSM_Data_Overview_vi.odt) hoặc [OSM_Data_Overview_vi.pdf](/files/OSM_Data_Overview_vi.pdf)  
> Cập nhật: 2017-10-31

<!--Trong phần này, chúng ta sẽ tìm hiểu cách thức vận hành của OpenStreetMap, điều sẽ giúp chúng ta hiểu rõ hơn cách thức tổ chức dữ liệu và làm thế nào để sử dụng dữ liệu đó tốt nhất.-->

CÁCH HOẠT ĐỘNG CỦA OSM
--------------
Hãy xem xét cách OpenStreetMap hoạt động. Hàng ngàn người dùng trên khắp thế giới liên tục bổ sung và chỉnh sửa bản đồ, nhưng những gì diễn ra đằng sau hậu trường?  

Khi bạn hoặc bất kỳ người dùng nào khác thực hiện thay đổi bằng cách sử dụng phần mềm chỉnh sửa như JOSM hoặc iD, phần mềm này sẽ liên lạc với một máy chủ Open-StreetMap trung tâm và thông báo cho bạn những thay đổi của bạn. Trên máy chủ đó là một cơ sở dữ liệu khổng lồ chứa đựng tất cả thông tin vị trí và các thuộc tính về mọi tính năng địa lý trong tất cả OpenStreetMap.  

Bởi vì OSM là miễn phí và mở, có thể cho bất cứ ai để tải về tất cả các dữ liệu trong cơ sở dữ liệu này. Tuy nhiên, vì nó quá lớn ( dữ liệu lớn hơn 30 GB ngay cả khi nén ), gần như không thể làm việc với tất cả các dữ liệu cùng một lúc.  

Do hạn chế này, có nhiều phương pháp xuất và trích xuất dữ liệu được đề cập trong phần này. Xuất khẩu có nghĩa là chuyển đổi dữ liệu OpenStreetMap từ định dạng gốc sang một định dạng phù hợp với bạn. Điều này hơi khác với việc trích xuất dữ liệu, nghĩa là cắt dữ liệu từ khu vực bạn chọn. Nó có thể cũng có nghĩa là để kéo ra các tính năng cụ thể mà bạn muốn từ một khu vực. Các thuật ngữ này thường được sử dụng thay thế cho nhau. Chúng ta sẽ tìm hiểu thêm về điều này trong phần Dữ liệu OSM.  

SỬ DỤNG GEODATA
--------------
Nếu bạn không phải là người dùng GIS có kinh nghiệm, điều quan trọng là phải hiểu được sự khác biệt giữa phần mềm chỉnh sửa OSM như JOSM và phần mềm GIS như Quantum GIS và ArcGIS.  

Các trình biên tập như iD hay JOSM có một chức năng cốt lõi mà chúng được thiết kế rất tốt - làm cho người dùng dễ dàng chỉnh sửa OpenStreetMap. Nhưng chúng không phải là phần mềm có nghĩa là để phân tích hoặc truy vấn dữ liệu - chức năng này tốt nhất dành cho các ứng dụng khác.
Phần mềm GIS, chẳng hạn như Quantum GIS (QGIS) miễn phí và mã nguồn mở , cho phép người dùng thiết kế bản đồ đẹp, truy vấn và phân tích dữ liệu và nhiều hơn nữa. Phần mềm GIS cũng có thể được sử dụng để chỉnh sửa geodata, nhưng nó là dễ dàng hơn để chỉnh sửa OpenStreetMap với các trình soạn thảo chuyên dụng OSM.  

Trong chương tiếp theo chúng ta sẽ xem xét kỹ hơn các định dạng tệp được liên kết với OpenStreetMap và dữ liệu địa lý nói chung. Sau đó, chúng ta sẽ xem xét các cách khác nhau để truy cập và thao tác dữ liệu OSM và chuyển đổi nó giữa các loại tệp khác nhau.  


LẤY DỮ LIỆU
-----------------

Đó là tuyệt vời, nhưng làm thế nào để bạn có được ra dữ liệu mà bạn muốn?  

Trong chương này chúng ta sẽ đi qua nhiều cách khác nhau để xuất dữ liệu OSM. Chúng tôi sẽ gắn bó với những điều cơ bản, nhưng hãy nhớ rằng để sử dụng dữ liệu có hiệu quả, có lẽ bạn cần phần mềm GIS,
chẳng hạn như ứng dụng Quantum GIS miễn phí.  

Trước khi chúng ta bắt đầu, hãy đi qua một số thuật ngữ. Đầu tiên, **xuất dữ liệu** có nghĩa là để chuyển đổi dữ liệu OpenStreetMap từ định dạng XML nguyên bản sang một định dạng phù hợp với bạn. Điều này hơi khác với việc trích xuất dữ liệu, nghĩa là cắt dữ liệu từ khu vực bạn chọn. Nó có thể cũng có nghĩa là để kéo ra các tính năng cụ thể mà bạn muốn từ một khu vực. Chúng tôi sẽ sử dụng các thuật ngữ này thường xuyên trong chương này, vì vậy điều quan trọng là phải hiểu được sự khác biệt.  

API OSM (Giao diện hàm lập trình của OpenStreetMap)
------------
Chỉnh sửa bản đồ OSM sẽ sử dụng các hàm được gọi là các API, cho phép phần mềm chỉnh sửa để giao tiếp với máy chủ trung tâm. Ví dụ: khi bạn đang sử dụng JOSM và chọn khu vực bạn muốn lập bản đồ, một API yêu cầu sẽ được gửi đến máy chủ, yêu cầu tất cả dữ liệu tồn tại trong khu vực mà bạn đã chọn.  

Trên thực tế, khi bạn tải xuống dữ liệu trong JOSM, bạn đang trích xuất dữ liệu từ một khu vực cụ thể của thế giới. Sau đó dữ liệu sẽ được gửi tới bạn theo định dạng .osm , sau đó bạn có thể chỉnh sửa trong JOSM. Nếu bạn tải xuống dữ liệu trong JOSM và sau đó lưu nó, bạn sẽ thấy rằng loại tệp là .osm . Chúng ta sẽ nói về điều này trong chương tiếp theo.  
