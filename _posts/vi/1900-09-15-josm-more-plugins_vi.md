---
layout: doc
title: Công cụ vẽ tòa nhà và công cụ Utilsplugin2 của JOSM
permalink: /vi/josm/josm-more-plugins/
lang: vi
category: josm
---

Công cụ vẽ tòa nhà và công cụ Utilsplugin2 của JOSM
============


Công cụ vẽ tòa nhà (**buildings_tools**) và công cụ **utilsplugin2** là sự bổ sung rất lớn cho các chức năng vào JOSM. Trong phần này, chúng ta sẽ xem xét sâu hơn các tính năng của các công cụ.  

Công cụ vẽ tòa nhà - Buildings Tools
--------------------------

Nếu bạn chưa cài đặt, hãy cài đặt plugin này theo các hướng dẫn trong phần [cài đặt công cụ mở rộng cho JOSM](/vi/josm/josm-plugins).  

![Buildings tools plugin][]

Công cụ vẽ tòa nhà (buildings_tools) rất hữu ích cho số hóa tòa nhà. Nó cho phép bạn vẽ theo một bên của một tòa nhà hình chữ nhật, và dễ dàng mở rộng hình dạng. Nếu bạn đang số hóa nhiều tòa nhà, plugin này sẽ giúp bạn tiết kiệm được số nhấp chuột và do đó tiết kiệm thời gian.  

Khi plugin đã được cài đặt, bạn sẽ thấy một nút mới ở bên trái của JOSM, trông như thế này: ![Buildings tools button][]{: height="29px"}

Bắt đầu JOSM và tải về một khu vực mà bạn muốn vẽ các tòa nhà.  

### Rectangular Buildings

* Chọn công cụ vẽ tòa nhà và nhấp hai lần để vẽ một đường trên bản đồ.  

![Draw edge][]

* Sau đó mở rộng con chuột và nhấn một lần nữa để vẽ một hình chữ nhật.  

![Extend building][]

* Điều này sẽ không chỉ tạo ra một hình chữ nhật với chỉ ba lần nhấp chuột, nó cũng sẽ tự động đặt thẻ **building=yes** cho hình vừa vé.  

### Circular Buildings

* In "More tools"->"Draw building modes" select "Set building shape to circle" or use the shortcut ALT+Z (when switchitng back to drawing rectangular buildings use ALT+R). Then draw the diameter of the building.

![Round building][]

### Các tòa nhà phức tạp

Bạn cũng có thể tạo các tòa nhà phức tạp hơn bằng cách vẽ một số tòa nhà chồng lên nhau và sau đó hợp nhất chúng lại với nhau.  

* Vẽ hai tòa nhà chồng lên nhau thành hình chữ L.  
* Chọn cả hai tòa nhà (giữ SHIFT để chọn nhiều hơn một đối tượng).  
* Vào Tools-> Join overlapping Areas hoặc nhấn SHIFT + J trên bàn phím của bạn.  

![Merge buildings][]

### Hiệu chỉnh các cài đặt

Hơn nữa, bạn có thể thay đổi cài đặt mặc định của plugin.  

* Go to "More tools"->"Draw buildings modes"->Set buildings size.

* Nếu bạn đang tạo nhiều tòa nhà có kích thước tương tự, bạn có thể đặt kích thước chiều rộng và chiều cao cụ thể của tòa nhà, chẳng hạn như 6 x 10 mét (đơn vị tính bằng mét).  

![Set buildings size dialog][]

* Bằng cách thiết lập các kích thước bạn sẽ chỉ cần hai lần nhấp chuột để tạo ra các tòa nhà có kích thước chính xác.  

Cuối cùng, bạn có thể nhấp vào nút Nâng cao nếu bạn muốn thêm các thẻ bổ sung sẽ tự động được áp dụng cho mọi tòa nhà. Ví dụ: nếu mọi tòa nhà bạn vẽ trên cùng một đường phố, bạn có thể thêm thẻ xác định đường phố sẽ được áp dụng tự động.  

![Buildings advanced][]


Công cụ Utilsplugin2
-------------

* Nếu bạn chưa cài đặt, hãy cài đặt plugin này theo các hướng dẫn trong phần [cài đặt công cụ mở rộng cho JOSM](/vi/josm/josm-plugins).  

![Utilsplugin2 plugin][]

Sau khi bạn đã cài đặt plugin và khởi động lại JOSM, bạn sẽ có một trình đơn mới ở trên cùng có tên "More Tools".  

![More tools menu][]

Tạo một lớp mới và thử nghiệm với một số công cụ mới. Ở đây chúng tôi mô tả một số công cụ mới hữu ích nhất:  

1. **Add Nodes at Intersections:**  Tạo nút mới tại giao điểm: Công cụ này rất hữu ích cho việc thêm các nút bị thiếu trong giao lộ theo những cách đã chọn. Thực tế là các con đường luôn có các nút chung nơi chúng giao nhau.  

    ![Nodes interesection][]

2. **Paste Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

3. **Add Source Tag:** Thêm thẻ nguồn: Công cụ này đơn giản hoá việc thêm một thẻ nguồn. Nó ghi nhớ nguồn đã được chỉ định cuối cùng và thêm nó như là thẻ nguồn nhớ đến các đối tượng của bạn. Bạn có thể chèn mã nguồn chỉ với một cú nhấp chuột.  

4. **Replace Geometry:** Thay thể hình: Công cụ này là tuyệt vời nếu bạn muốn vẽ lại một đối tượng vẽ với nhiều lỗi, nhưng muốn giữ lại lịch sử, thuộc tính và số ID của đối tượng đó. Ví dụ, nếu bạn gặp một tòa nhà phức tạp và được vẽ theo một cách nghèo nàn, sau đó thay vì thay đổi từng nút một cách vất vả, bạn có thể vẽ lại đối tượng, chọn các đối tượng cũ và mới, và chọn "Thay thế Geometry" để chuyển tất cả thông tin trên.  

    ![Replace geometry][]


### Các công cụ chọn đối tượng khác

**Utilsplugin2** cũng cung cấp nhiều công cụ hơn trong menu "Selection". Hãy thử thử nghiệm với chúng  

![Selection menu][]

Một trong những công cụ thường dùng là **Unselect Nodes/ Bỏ chọn nút:** Công cụ này sẽ bỏ chọn tất cả các nút. Điều này có thể hữu ích nếu bạn vẽ một hộp để chọn nhiều đối tượng, nhưng bạn không muốn chọn các nút chứa trong tất cả các dòng và hình.  

![Unselect nodes][]

Chúc may mắn!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png
[Round building]: /images/josm/buildings_tools-round.png

