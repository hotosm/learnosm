---
layout: doc
title: Ảnh hàng không
permalink: /vi/josm/aerial-imagery/
lang: vi
category: josm
---

Ảnh hàng không
================

> Cập nhật: 2017-11-8  

Vẽ theo hình ảnh là một cách dễ dàng và mạnh mẽ để đóng góp cho OSM. Sử dụng hình ảnh để vẽ các điểm, đường và hình dạng trên mặt đất được gọi là **digitizing/ số hóa bản đồ**. Nó thường có thể được tách ra từ hành động thu thập dữ liệu thuộc tính trên mặt đất, thường được gọi là **ground-truthing/ thu thập dữ liệu mặt đất**. Số hóa ảnh hàng không có thể tạo ra nội dung xương sống của bản đồ OSM, mà làm cho việc thu thập dữ liệu mặt đất dễ dàng hơn cho mọi người tại hiện trường. Trong chương này chúng ta sẽ học thêm một chút về cách hoạt động của hình ảnh hàng không.  

GIỚI THIỆU VỀ HÌNH ẢNH
-------------

Ảnh hàng không là thuật ngữ chúng tôi sử dụng để mô tả ảnh chụp từ bầu trời. Chúng có thể được lấy từ máy bay, máy bay trực thăng, máy bay trực thăng, hoặc diều và bóng bay, nhưng nguồn thông tin phổ biến nhất đến từ vệ tinh quay quanh Trái Đất.  

Trong chương [Thiết bị GPS](/i/mobile-mapping/using-gps) we learned about the dozens of satellites orbiting Earth which allow our GPS receivers to identify our latitude and longitude. In addition to these GPS satellites, there are also satellites which take photos of the earth. These photos are then manipulated so that they can be used in GIS (mapping) software. Bing Aerial Imagery is made up of satellite photos.  

Độ phân giải
----------

Tất cả các bức ảnh kỹ thuật số được tạo thành từ các điểm ảnh. Nếu bạn phóng to rất gần bức ảnh, bạn sẽ nhận thấy hình ảnh bắt đầu mờ, và cuối cùng bạn sẽ thấy một hình ảnh được tạo thành từ hàng ngàn ô vuông nhỏ có màu khác nhau. Điều này đúng cho dù bức ảnh được chụp bằng máy ảnh cầm tay, điện thoại di động hoặc vệ tinh quay quanh Trái Đất.  

![Image resolution][]

Độ phân giải đề cập đến số pixel theo chiều rộng và số lượng pixel theo chiều cao mà một hình ảnh có. Nhiều điểm ảnh có nghĩa là độ phân giải cao hơn, có nghĩa là bạn có thể xem chi tiết hơn trong bức ảnh. Độ phân giải trong máy ảnh cầm tay thường được đo bằng megapixel. Máy ảnh của bạn có thể ghi lại nhiều megapixel, độ phân giải của ảnh càng cao.  

Ảnh hàng không cũng như vậy, ngoại trừ việc chúng ta thường nói về độ phân giải khác nhau. Đo lường rất quan trọng với ảnh chụp từ trên không - do đó một pixel đại diện cho một khoảng cách nhất định trên mặt đất. Chúng tôi thường mô tả hình ảnh dưới dạng hình ảnh có độ phân giải 2 mét, nghĩa là một pixel tương đương với hai mét trên mặt đất. Hình ảnh có độ phân giải 1 mét sẽ có độ phân giải cao hơn và độ phân giải 50cm sẽ cao hơn nữa. Đây thường là phạm vi hình ảnh được cung cấp bởi Bing, mặc dù nó khác nhau giữa các địa điểm, và ở nhiều nơi nó là lớn hơn hai mét, khi đó sẽ khó khăn để xác định các đối tượng trong hình ảnh.  

![Comparison of low and high resolution imagery][]

Độ phân giải của hình ảnh trên máy bay càng cao, thì càng dễ sử dụng trong việc tạo bản đồ.  

Georeferencing/ Tham chiếu địa lý
---------------

Mỗi pixel của một bức ảnh chụp trên không có kích thước, và mỗi điểm ảnh cũng có một vị trí. Như chúng tôi đã đề cập ở trên, điều này là do các bức ảnh hàng không đã được tham chiếu địa lý.  

Giống như một điểm GPS có vĩ độ và kinh độ, thì các điểm ảnh trong một ảnh hàng không cũng vậy. Tuy nhiên, cũng giống như độ phân giải kém có thể gây ra những thách thức đối với việc lập bản đồ, các hình ảnh có thể được tham chiếu không tốt về mặt địa lý.  

Hãy suy nghĩ một chút về cách hoạt động của công cụ định vị địa lý và tại sao lại khó thực hiện. Khi một người nào đó tham chiếu địa lý cho một hình ảnh, họ đầu tiên xác định một số ít các điểm ảnh trong hình ảnh được biết vị trí. Nếu chúng ta có một bức ảnh vuông, chúng ta có thể xác định tọa độ của cả bốn góc, và như vậy toàn bộ hình ảnh có thể được đặt chính xác.  

Tất cả điều này có vẻ khá đơn giản, nhưng hãy xem xét điều này: Trái đất tròn; ống kính máy ảnh tròn; nhưng các bức ảnh phẳng và 2 chiều. Điều này có nghĩa là khi một hình ảnh phẳng đang được ánh xạ lên Trái đất tròn, sẽ luôn có một số hình ảnh và sự méo mó. Hãy tưởng tượng cố gắng làm phẳng một vỏ cam. Nó sẽ không kết thúc bằng chữ nhật. Do vấn đề này, tất cả các điểm ảnh trong một hình ảnh trên không thể được đặt hoàn hảo.  

May mắn thay, một số người thực sự thông minh đã đưa ra các thuật toán thông minh để giải quyết vấn đề này, và vì vậy hình ảnh mà bạn nhìn thấy trên Bing gần như chính xác. Ở hầu hết các nơi, rất khó nhận thấy sai số - và điều đó chắc chắn là tốt cho việc tạo bản đồ. Các khu vực phổ biến nhất mà hình ảnh được đặt không chính xác nằm ở các vùng đồi núi. Trong chương [Hiệu chỉnh căn chỉnh hình ảnh](/vi/josm/correcting-imagery-offset) chúng tôi sẽ xem cách khắc phục vấn đề này.  

[Image resolution]: /images/josm/orange-resolution.png
[Comparison of low and high resolution imagery]: /images/josm/low-res-high-res.png