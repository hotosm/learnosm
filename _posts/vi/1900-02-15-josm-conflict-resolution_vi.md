---
layout: doc
title: JOSM Conflict Resolution
permalink: /vi/josm/josm-conflict-resolution/
lang: vi
category: josm
---

Giải quyết xung đột JOSM
====================

> Hướng dẫn này có thể được tải tại đây [josm-conflict-resolution_vi.odt](/files/josm-conflict-resolution_vi.odt) or [josm-conflict-resolution_vi.pdf](/files/josm-conflict-resolution_vi.pdf)  
> Reviewed 2016-09-27  

Đôi khi, khi bạn đang làm việc trong JOSM và khi bạn tải lên tất cả các chỉnh sửa đẹp của mình, bạn sẽ nhận được một thông báo khó chịu phàn nàn về vấn đề xung đột.  
![conflict detected][]  
Điều đã xảy ra là bạn đã tải về một nhóm dữ liệu, trong đó có một điểm mà chúng ta sẽ gọi là Node A. Sau đó, trong khi bạn chỉnh sửa, ai đó cũng đã tải Node A, đã thay đổi nó, và lưu các thay đổi lại trên OpenStreetMap. Bây giờ khi bạn cố gắng tải lên phiên bản Node A của bạn, nó khác với phiên bản được lưu trên OSM. Do đó JOSM không biết phiên bản nào của Node A sẽ được lưu.  

Xung đột
----------

Thỉnh thoảng, JOSM có thể tự tìm ra những gì để làm với xung đột riêng của mình, và nó sẽ cho bạn một thông điệp như thế này:  
![resolved automatically][]  
Cửa sổ này có nghĩa là JOSM đã tự động quyết định rằng các mục trong tập dữ liệu địa phương của bạn sẽ không được tải lên máy chủ chính vì chúng đã bị xóa bởi người dùng khác. Tuy nhiên, trong một số xung đột, không có hành động dễ dàng nào để JOSM thực hiện và do đó nó để lại quyết định cho người dùng để xác định hành động tốt nhất là gì. Điều này có nghĩa là bạn quyết định giải quyết xung đột.  

Cửa sổ này cho bạn biết xem tất cả xung đột của bạn trong Lớp 1 trong hộp thoại **Dialog List**:  
![warning unresolved][]  

Cửa sổ này cung cấp cho bạn một cảnh báo về việc bạn có gặp sự xung đột với các chỉnh sửa của bạn hay không. Nếu bạn kiểm tra trên máy chủ, bạn sẽ có thể khắc phục các vấn đề chỉnh sửa có thể nảy sinh:  
![check on server][]  

Cảnh báo này cho bạn biết rằng JOSM không thể xóa một nút vì nó vẫn được tham chiếu theo một cách. Để khắc phục điều này, người dùng phải quay lại JOSM và giải quyết xung đột trước khi tải lên dữ liệu:  
![still in use][]  

Giải quyết xung đột
--------------------

Quá trình giải quyết mâu thuẫn khá đơn giản, mặc dù trước tiên nó có thể gây nhầm lẫn trong JOSM. Về cơ bản, đối với mọi xung đột, JOSM sẽ giới thiệu cho bạn hai lựa chọn - phiên bản của đối tượng và đối tượng trên máy chủ. Bạn cần phải chọn giữ phiên bản của mình, hay liệu phiên bản mới trên máy chủ vẫn còn tồn tại hay không.  
Bạn có thể nghĩ, "tất nhiên phiên bản của tôi sẽ tốt hơn!" Và có lẽ bạn nói đúng. Nhưng hãy suy nghĩ lại ví dụ của chúng ta ở đầu chương này. Có lẽ trong khi bạn đang bận chỉnh sửa, một người lập bản đồ khác đã thêm rất nhiều thông tin vào một trong các nút trong tập dữ liệu của bạn. Nếu bạn chọn phiên bản của mình qua phiên bản của họ, bạn sẽ mất tất cả những thông tin có giá trị mà họ đã thêm vào. Do đó, bạn nên xem xét giữ phiên bản của họ, hoặc hợp nhất nó với của riêng bạn.  
Khi bạn nhận được một cửa sổ xung đột cửa sổ bật lên, tốt nhất là chọn nút "Đồng bộ hóa ... chỉ." Bạn có thể cần phải làm điều này cho nhiều hơn một đối tượng, nhưng tốt nhất để giải quyết xung đột một trong một thời gian.  
![synchronize node][]  
Khi bạn nhấp vào nút này, bạn sẽ nhận được một cửa sổ bật lên mô tả chi tiết cuộc xung đột của bạn. Các thông báo lỗi có thể trông phức tạp, nhưng nó là khá đơn giản. Bạn sẽ biết loại xung đột nào mà bạn có bằng biểu tượng hình vuông màu đỏ trong tab trên cùng. Mâu thuẫn trong ví dụ dưới đây đề cập đến các thuộc tính, chẳng hạn như vị trí và sự tồn tại của đối tượng. Đây là lý do tại sao tọa độ và trạng thái đã xóa được liệt kê.  

**Các loại xung dột:**

- **Thuộc tính:**  Đối tượng đã được di chuyển (tọa độ) hoặc đã xóa  
- **Gắn thẻ:**  Gắn thẻ không đúng  
- **Nút:** Có một sự khác biệt trong danh sách các nút theo hai cách  
- **Thành viên:**  Có một sự khác biệt trong danh sách các thành viên trong một mối quan hệ  
![properties with conflicts][]  

Xung đột chỉ xuất hiện với hai lần chỉnh sửa khác nhau tại một thời điểm. Nếu có ba hoặc nhiều xung đột, thì một chuỗi xung đột sẽ bật lên. Do đó, bạn phải chọn hoặc hợp nhất chỉ với hai xung đột tại một thời điểm. Bạn có thể chọn phiên bản của bạn, phiên bản khác hoặc đôi khi kết hợp cả hai.  

Trong ví dụ dưới đây bạn không có tùy chọn hợp nhất. Nhấp vào cột đầu tiên, hoặc Phiên bản của tôi nếu bạn tin rằng các chỉnh sửa của bạn là chính xác. Nhấp vào Phiên bản của họ nếu bạn nghĩ rằng các chỉnh sửa khác là tốt hơn.  
![conflicts resolved][]  

Một khi bạn đã chọn phiên bản bạn nghĩ là tốt nhất, sau đó nhấp vào "Áp dụng Nghị quyết." Một vài cửa sổ sẽ bật lên và bạn sẽ được trên con đường của bạn để có thể tải lên chỉnh sửa của bạn. Làm thêm một số chỉnh sửa. Sau đó nhấn vào ‘Tải lên’.  Một hộp thoại xuất hiện:  
![command stack][]  

Trên menu Windows của bạn, bạn có một hộp thoại Danh sách Xung đột. Cửa sổ này hiển thị một danh sách các xung đột. Tổng số xung đột chưa được giải quyết được hiển thị trong tiêu đề. Bạn có thể chọn hoặc giải quyết xung đột bằng cách nhấp vào nó. Điều này rất hữu ích khi bạn có nhiều xung đột để giải quyết.  
![one unresolved][]  
Bạn không thể tải lên các thay đổi cho đến khi danh sách này trống.  

Các cách để tránh xung đột
------------------------

### Tải dữ liệu lên thường xuyên

Để giảm thiểu cơ hội và số lượng xung đột, điều quan trọng là phải tải lên các chỉnh sửa của bạn thường xuyên. Xung đột xuất hiện thường xuyên hơn cho những người có xu hướng lưu các khu vực mà họ đang làm việc trên máy chủ của họ địa phương và chờ đợi một thời gian để tải nó lên. Tốt nhất là tải về khu vực bạn đang làm việc, chỉnh sửa nó và sau đó ngay lập tức tải nó lên. Thời gian giữa tải dữ liệu và tải lên các thay đổi đối với dữ liệu càng dài, thì càng có nhiều người đã chỉnh sửa một cái gì đó trong thời gian chờ đợi. Nếu bạn đang ở Mapathon và chỉnh sửa một đối tượng địa lý như đường cao tốc mà người khác cũng có thể tải lên, hãy tải lên rất thường xuyên, có thể 6 lần chỉnh sửa!  

### Chỉnh sửa trên khu vực bạn tải xuống

Chỉnh sửa trong khu vực cụ thể bạn đã tải xuống giảm thiểu nguy cơ xung đột. Đảm bảo bạn không chỉnh sửa bên ngoài khu vực mà bạn đã tải xuống. Bạn có thể dễ dàng xem các khu vực bên ngoài khu vực tải xuống của mình trong JOSM, bởi vì nền được tạo thành bởi đường chéo thay vì màu nền đen.  

![edit outside area][]  

Tóm lược
--------
Khi bạn chỉnh sửa trong JOSM, bạn sẽ gặp nguy cơ gặp rắc rối. Xung đột xảy ra khi một đối tượng đã được chỉnh sửa bởi hai người tại một thời điểm tương tự. Bằng cách hiểu rõ xung đột là gì và làm thế nào để đối phó với nó, bạn sẽ có thể đảm bảo rằng các chỉnh sửa tốt nhất có thể được lưu vào OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
## Appendix. Các xung đột cụ thể

### Xung đột gắn thẻ

Nếu các thẻ của một phiên bản của một đối tượng khác với các thẻ của
một phiên bản khác, hộp thoại Xung đột cho thấy một ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)trong
một thẻ Tag. Nhấp vào tab để hiển thị hộp thoại để giải quyết
xung đột thẻ tag.

Có ba bảng được hiển thị trong hộp thoại này, từ trái sang phải:

1.  Phiên bản của tôi: hiển thị các thẻ của phiên bản đối tượng đầu tiên tham gia
    trong cuộc xung đột này. Đây thường là các thẻ của phiên bản đối tượng
    trong bộ dữ liệu cục bộ của bạn
2.  Phiên hợp nhất: hiển thị các thẻ được hợp nhất. Bảng này ban đầu
    trống. Bạn càng giải quyết nhiều xung đột với thẻ, càng có nhiều giá trị thẻ
    chúng ta sẽ được hiển thị trong bảng này
3.  Phiên bản của chúng: hiển thị các thẻ của phiên bản đối tượng thứ hai
    tham gia vào xung đột này. Đây thường là các thẻ của
    đối tượng hiện đang được lưu trữ trên máy chủ.

Trong ví dụ dưới đây, cả hai phiên bản đều có thẻ "name". Các giá trị trong
hai phiên bản đối tượng khác nhau, tuy nhiên, và JOSM hiển thị
hàng có nền màu đỏ. Giá trị của phiên bản đầu tiên là
"Secondary School", phiên bản đối diện có giá trị "Elementary
School "Bây giờ bạn phải quyết định những giá trị nào bạn muốn giữ lại
và bạn muốn loại bỏ.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Nhấp vào giá trị bạn muốn giữ, trong ví dụ ví dụ trên
giá trị ở bên trái. Nếu bạn nhấp đúp vào giá trị hoặc nhấp vào
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), bạn quyết định giữ giá trị và loại bỏ
giá trị đối diện. Bảng ở giữa hiển thị giá trị để giữ
và màu nền chuyển sang màu xanh lá cây.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

Khi nút Áp dụng nút giải quyết cho phép bạn có thể áp dụng quyết định của mình.
Các giá trị bạn đã chọn sẽ được áp dụng và hộp thoại sẽ được đóng lại.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Giải quyết sự khác biệt trong danh sách nút của hai phiên bản của một cách

Nếu bạn nhìn thấy biểu tượng ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png) trong tab Nodesthen bạn
phải giải quyết các xung đột khác nhau trong danh sách sau:
[nút](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)của hai
[đường](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). Có
ba cột trong bảng tương ứng (xem hình chụp dưới đây):

1.  bảng bên trái hiển thị danh sách các nút của phiên bản
    đối tượng cục bộ
2.  bảng bên phải hiển thị danh sách các nút của phiên bản
    đối tượng cục bộ
3.  bảng ở giữa cho thấy danh sách các nút của các cách hợp nhất

Ban đầu, bảng trung bình trống. Bây giờ bạn nên quyết định nút nào
để giữ lại từ bộ dữ liệu địa phương (bảng bên trái) và từ
số liệu máy chủ (bảng bên phải).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### Quy trình làm việc chuẩn

Quy trình làm việc tiêu chuẩn để giải quyết mâu thuẫn trong danh sách nút của hai
[phiên bản
đối tượng](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)bao gồm
ba bước:

1.  Chọn các nút từ một trong hai phiên bản đối tượng và sắp xếp lại nút kết quả
    liệt kê nếu cần thiết
2.  Ngưng kết quả kết hợp các nút danh sách bằng cách nhấp vào nút
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). Khi bạn đóng băng danh sách nút hợp nhất bạn
    nói với JOSM rằng tất cả xung đột trong danh sách nút được giải quyết.
3.  Áp dụng cách giải quyết

### Một luồng công việc đơn giản: Giữ danh sách nút từ phiên bản đối tượng cục bộ của bạn

Ví dụ sau cho thấy quy trình làm việc khi bạn quyết định giữ tất cả các nút trong cùng một thứ tự từ phiên bản đối tượng địa phương của bạn.

-   Trước tiên, chọn tất cả các phần tử trong bảng bên trái (bằng cách sử dụng chuột hoặc 
    nhấn Ctrl-A trong bảng) (xem ảnh chụp màn hình tiếp theo):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

-   Sau đó, nhấp 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    để sao chép các nút được chọn vào bảng giữa với các nút được hợp nhất:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

-   Cuối cùng, nhấp
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    để đóng băng danh sách các nút kết hợp được kết hợp:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    Biểu tượng trong tab nút hiện chuyển sang 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    và bạn có thể áp dụng các quyết định hợp nhất.

### Hỗ trợ so sánh các danh sách nút

Có thể rất khó để tìm ra sự khác biệt giữa danh sách nút của hai phiên bản đối tượng, đặc biệt đối với các cách với nhiều nút.

Hộp thoại xung đột hỗ trợ bạn trong việc tìm kiếm sự khác biệt. Nó có thể so sánh hai danh sách nút được hiển thị (danh sách nút "của tôi", danh sách nút đã được hợp nhất và danh sách nút "của họ") và nó có thể hiển thị sự khác nhau giữa chúng với các màu nền cụ thể.

Từ hộp kết hợp sau bạn có thể chọn cặp danh sách nút để so sánh:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.  Của tôi và của họ: so sánh bảng bên trái với bảng bên phải nhất
    trong hộp thoại Xung đột
2.  Của tôi và phần hợp nhất: so sánh bảng bên trái với bảng giữa trong
    trong hộp thoại Xung đột
3.  Của họ với phần hợp nhất: so sánh bảng trung bình với bảng bên phải
    trong hộp thoại Xung đột

Tùy thuộc vào vị trí của một nút trong danh sách nền khác
màu sắc được sử dụng:

1.  Nút này chỉ nằm trong danh sách này. Nó không có trong danh sách đối diện:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.  Nút nằm trong cả hai danh sách, nhưng ở các vị trí khác nhau:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.  Nền trắng có nghĩa là một nút nằm trong cả hai danh sách ở cùng
    chức vụ.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png