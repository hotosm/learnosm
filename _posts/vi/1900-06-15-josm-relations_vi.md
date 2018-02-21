---
layout: doc
title: JOSM - Quan hệ giữa các đối tượng bản đồ
permalink: /vi/josm/josm-relations/
lang: vi
category: josm
---

Quan hệ giữa các đối tượng bản đồ
==========

> Hướng dẫn này có thể được tải xuống tại đây: [josm_relations_vi.odt](/files/josm_relations_vi.odt) or [josm_relations_vi.pdf](/files/josm_relations_vi.pdf)  
> Cập nhật: 2017-11-06  

Trong [Hướng dẫn cho Người mới bắt đầu](/vi/beginner) chúng tôi đã giải thích rằng có ba loại đối tượng có thể được vẽ trong OpenStreetMap - các điểm (nút), các đường và đa giác (các đường đóng). Các đường chứa nhiều điểm, và đường chính nó mang các thuộc tính xác định nó đại diện. Đa giác giống như đường kẻ, ngoại trừ đường kẻ phải hoàn thành nơi nó bắt đầu để hình thành một hình.  

Trong thực tế, chúng tôi đã nói dối bạn, bởi vì có một loại khác của đối tượng trong OpenStreetMap, được gọi là quan hệ. Trong cùng một cách mà một dòng bao gồm các điểm khác, một mối quan hệ chứa một nhóm các đối tượng khác, có thể là các điểm, đường hoặc đa giác.
Nếu bạn đang tìm kiếm để nâng cao kỹ năng chỉnh sửa của bạn, sau đó hiểu biết và biết làm thế nào để chỉnh sửa đúng quan hệ là quan trọng.  

Ví dụ: hãy tưởng tượng rằng bạn muốn lập bản đồ tòa nhà có sân trong trung tâm. Bạn cần vẽ một đa giác quanh bên ngoài tòa nhà, và bạn sẽ muốn các đa giác khác xung quanh sân để cho biết rằng chúng không phải là một phần của tòa nhà. Đây là một ví dụ về mối quan hệ. Mối quan hệ sẽ chứa một số đa giác - và các thuộc tính của tòa nhà sẽ được gắn liền với quan hệ chứ không phải đa giác.  

![An example of a multipolygon][]

Quan hệ được sử dụng để đại diện cho bất cứ điều gì mà đòi hỏi xác định trong nhóm các đối tượng. Các ví dụ khác là các tuyến xe buýt (một nhóm các đường nét), các đối tượng dài và phức tạp (sông hoặc con đường), hoặc nhiều đa giác đều là một phần của một địa điểm (như các tòa nhà trong một trường đại học).  

Có bốn kiểu quan hệ bạn sẽ gặp phải trong OSM: Nhiều đa giác, Các tuyến, Ranh giới và Hạn chế (chẳng hạn như không có bước sang trái). Trong phần này, chúng ta sẽ đề cập đến Đa giác và Đường.  

TẠO QUAN HỆ NHIỀU ĐA GIÁC
-------------------------------

Hãy xem làm thế nào để tạo ra một mối quan hệ nhiều đa giác như thể hiện ở trên..  

- Trước tiên, vẽ hình của bạn. Trong trường hợp này, chúng tôi sẽ vẽ ba đa giác, một hình chữ nhật bên ngoài và hai hình chữ nhật nhỏ hơn.

![Multipolygon ways][]

- Chọn tất cả các đa giác. Hãy nhớ rằng bạn có thể chọn nhiều đối tượng bằng cách giữ SHIFT và nhấp vào từng đối tượng.  
- Chọn *Tools->Create multipolygon* từ trình đơn.  
- Cửa sổ thẻ giờ đây chứa đa giác mới.

![New mp object][]

- Nhấp vào nút chỉnh sửa.  

- Bây giờ bạn sẽ thấy cửa sổ trình biên tập quan hệ. Đây là một chút phức tạp vì bây giờ bạn đang thêm các thẻ vào một nhóm các đường.  

![Building relation][]

- Lưu ý rằng ở đầu bảng điều khiển là các thẻ cho mối quan hệ. Các thẻ này hoạt động giống như thẻ thông tin hoạt động.  
- Ở phía dưới là một danh sách các thành viên của mối quan hệ. Mối quan hệ này có ba thành viên - đó là, ba cách là một phần trong mối quan hệ của chúng ta.  
- Lưu ý rằng chúng ta đã có một thẻ được định nghĩa cho chúng ta, *type=multipolygon*. Chúng ta cần phải thêm một thẻ nữa để xác định loại đối tượng mà mối quan hệ đại diện. Chúng ta phải thêm một thẻ là *building=yes*.  
- Nhấp vào hộp thẻ và thêm thẻ này.  

![Building yes][]

- Các **roles/ vai trò** đã được gán đúng cách cho các đường. Mỗi thành viên của một mối quan hệ có một vai trò, cho biết mục đích của thành viên là gì. Trong trường hợp này, vai trò của đa giác bên ngoài phải được định nghĩa là **outer** và vai trò của hai đa giác bên trong phải được định nghĩa là **inner**. Đây là những vai trò có sẵn cho các thành viên của một multipolygon.  

- Nhấp OK và quan hệ nhân đa thức của bạn đã hoàn tất!  

![New multipolygon][]

Khi bạn tạo một multipolygon như thế này nó sẽ được hiển thị trên bản đồ như sau:  

![Multipolygon in Mapnik][]

Nhiều đa giác có thể được sử dụng cho bất kỳ đối tượng phức tạp nào yêu cầu đa giác bên trong và bên ngoài, như tòa nhà hoặc một con sông với các vùng đất bên trong nó. Bạn có thể tìm thấy thông tin chi tiết về đa vùng (nhiều đa giác) trên [OSM Wiki](http://wiki.openstreetmap.org/wiki/Relation:multipolygon).  

MỐI QUAN HỆ ĐƯỜNG
----------------

Quan hệ cũng rất hữu ích để đại diện cho các tuyến đường dài. Ví dụ: tuyến xe buýt hoặc xe đạp theo các đoạn đường khác nhau. Để xác định tuyến đường như vậy, chúng tôi có thể tạo ra một mối quan hệ chứa tất cả các đoạn đường nằm trong tuyến đường. Các tính năng bổ sung, chẳng hạn như điểm dừng xe buýt cũng có thể là thành viên của mối quan hệ tuyến đường.  

![Route relation][]

Hãy xem cách tạo mối quan hệ cho một tuyến xe buýt trong JOSM:  

- Đầu tiên, chọn tất cả các cách mà tuyến đường chạy dọc theo. Bạn có thể cần phải tách một số đường phố thành các đoạn riêng biệt nếu chỉ một phần của chúng thuộc về mối quan hệ. Bạn có thể làm điều này bằng cách sử dụng công cụ "Split Way".  
- Khi tất cả các phân đoạn được chọn, hãy đi tới *Presets->Transport->Public Transport->Public Transport Route (Bus)*.  

![Public transport preset][]

- Một cửa sổ mới xuất hiện nơi bạn có thể nhập thông tin áp dụng cho tuyến đường như một toàn thể.

![New route relation][]

Điều quan trọng là chọn loại tuyến đường cụ thể từ trình đơn thả xuống ở trên cùng. Đối với tuyến xe buýt có sẵn hai tuyến xe buýt và xe điện. Thông thường bạn cũng sẽ nhập tên, số tham chiếu, từ và đến.

- Nhấp chuột vào "New Relation." Bạn sẽ thấy cửa sổ mối quan hệ bật lên, giống như khi bạn tạo một multipolygon.  

![Bus route relation][]

- Lưu ý rằng đã có các thẻ xác định mối quan hệ như một tuyến đường. Thay vì *type=multipolygon*, chúng ta có *type=route*. Chúng tôi cũng có một thẻ xác định nó như một tuyến xe buýt, khác với một loại tuyến đường khác.  
- Bây giờ bạn có thể nghĩ, vai trò **role** của các thành viên là gì? Vâng, trong trường hợp của một tuyến đường, chúng tôi không cần phải xác định vai trò của các thành viên. Bằng cách để trống vai trò, phần mềm biết rằng chúng chỉ đơn giản là một phần của tuyến đường. Chúng ta cũng có thể xác định vai trò của mỗi đoạn như **route**/ tuyến đường, nhưng nó không cần thiết.  
- Nhấp OK và mối quan hệ tuyến đường của bạn sẽ hoàn tất!  

> Nếu bạn muốn có một danh sách tất cả các mối quan hệ trên bản đồ, bạn có thể mở bảng điều khiển mối quan hệ bằng cách nhấp vào nút này bên trái: ![relation panel button][]{: height="30px"}. Thao tác này sẽ mở một bảng điều khiển nơi bạn có thể chọn, chỉnh sửa và tạo ra mối quan hệ mới.  

TÓM LƯỢC
-------

Quan hệ có thể khó hiểu và không cần phải được sử dụng thường xuyên, nhưng cần phải biết. Mỗi lần bạn nhận ra rằng bạn cần một mối liên hệ để lập bản đồ một cách chính xác, và bạn có thể sử dụng kiến ​​thức này và tìm thêm thông tin về OSM Wiki để giúp bạn lập bản đồ một cách chính xác.


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png