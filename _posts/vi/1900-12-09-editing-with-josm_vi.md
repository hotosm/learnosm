---
layout: doc
title: Làm việc với dữ liệu hiện trường
permalink: /vi/josm/editing-with-josm/
lang: vi
category: josm
---

Làm việc với dữ liệu hiện trường
==================

> Hướng dẫn này có thể được tải xuống tại đây: [josm_editing-with-josm_vi.odt](/files/josm_editing-with-josm_vi.odt) or [josm_editing-with-josm_vi.pdf](/files/josm_editing-with-josm_vi.pdf)  
> Cập nhật: 2017-11-06  

Chúng ta đã có được bản đồ của tất cả các khối nhà trong OpenStreetMap.
Trong phần Lập bản đồ với Smartphone, GPS và Bản đồ giấy(/vi/mobile-mapping/), bạn sẽ thấy làm cách nào để sử dụng các công cụ hiện trường để khảo sát một khu vực.  

Trong chương này, chúng ta sẽ quay lại với JOSM
và xem xét một số nội dung chuyên sâu hơn.

Các lớp trong JOSM
-----------
Nếu bạn đã theo dõi đầy đủ các nội dung từ đầu,
bạn sẽ thấy rằng chúng ta có thể đưa tất cả những lớp thông tin khác nhau vào JOSM.
Chúng ta có thể tải xuống dữ liệu OSM, thêm ảnh vệ tinh Bing, hiển thị các điểm và tuyến GPS,
và thêm các bản đồ hiện trường – tất cả sẽ được hiển thị trong khung bản đồ của JOSM.

Bạn có thể thấy mỗi lần bạn thêm dữ liệu nào đó vào JOSM,
một mục sẽ được thêm vào bảng danh sách các lớp phía bên phải của JOSM. Tùy thuộc vào bạn đang mở những gì,
bảng danh sách các lớp của bạn có thể trông như sau:

![Layers panel][]

Mỗi mục trong danh sách này thể hiện một nguồn dữ liệu mà bạn đang mở trong khung bản đồ.
Ví dụ: “Data Layer 1” là dữ liệu OSM mà chúng ta đang chỉnh sửa.
“Field Papers” là lớp được tạo ra
khi bạn thêm bản đồ hiện trường của mình vào JOSM.

Nếu bạn thêm ảnh vệ tinh Bing, một lớp mới sẽ được hiển thị trong danh sách với tên “Bing Sat”.

Ý nghĩa của các lớp thường khó để hiểu rõ.
Một cách mô tả trực quan thì có thể coi mỗi lớp là một mảnh giấy bóng mờ và chúng được xếp lớp lên nhau.
Mỗi mảnh giấy bóng mờ chứa đựng những thông tin nhất định trên đó,
và chúng có thể được sắp xếp theo cách mà bạn muốn.

Những lớp được sử dụng để tham khảo trong quá trình vẽ bản đồ như ảnh vệ tinh, tuyến GPS và bản đồ hiện trường thường được gọi là các lớp cơ sở.
Lớp dữ liệu OSM mới chính là lớp mà bạn thực sự làm việc.

-   Để sắp xếp lại thứ tự hiển thị lớp, chọn lớp đó trong danh mục các lớp
    và nhấp chuột vào nút lên hoặc xuống để thay đổi thứ tự.

![Layers up down][]

-  Để ẩn một lớp, chọn lớp đó bằng chuột
    và nhấp vào nút Show/Hide:

![Layers show hide][]

-  Bạn sẽ thấy lớp mình chọn sẽ ẩn đi trên bản đồ,
    nhấp chuột lần nữa vào nút Show/Hide để mở lại.
-  Bạn có thể loại bỏ một lớp bằng cách chọn lớp đó
    và sử dụng nút xóa:

![Layers delete][]

-  Điều cuối cùng, bạn cần phải biết rằng bạn chỉ có thể chỉnh sửa trên lớp đang được kích hoạt trong JOSM.
    Nếu bạn không thể chỉnh sửa bản đồ trong cửa sổ bản đồ,
    có thể là bạn đã không kích hoạt đúng lớp cần thiết.
    Hầu hết các lớp, như các điểm GPS, bản đồ hiện trường,
    và ảnh vệ tinh không thể chỉnh sửa được.
    Lớp duy nhất bạn có thể chỉnh sửa là dữ liệu của OpenStreetMap
    mà chúng ta thường thấy có tên là “Data Layer 1”.
-  Để kích hoạt một lớp, chọn lớp đó trong bảng danh mục lớp
    và nhấp chuột vào nút Activate:

![Layers activate][]


Sử dụng dữ liệu GPS và bản đồ hiện trường
-------------------------------
Trong [Chương chỉnh sửa bản đồ bằng Điện thoại thông minh, GPS hoặc bản đồ hiện trường](/vi/mobile-mapping/) , chúng ta đã biết được cách thu thập thông tin bằng thiết bị GPS và bản đồ hiện trường
và làm cách nào để đưa chúng vào JOSM như là một lớp thông tin.

Một khi bạn đã có những dữ liệu khảo sát bằng một trong những công cụ trên,
bạn sẽ cần phải thêm các thông tin này vào OpenStreetMap dưới dạng số hóa.

Bạn sẽ thực hiện việc này tương tự như bạn đã làm trước đây – tải xuống, chỉnh sửa, lưu lại.
Sự khác biệt ở đây là thay vì chỉ sử dụng ảnh vệ tinh là lớp nền,
bạn có thể sử dụng dữ liệu GPS, bản đồ hiện trường,
các ghi chú hoặc kết hợp tất cả những thứ trên.

-   Ví dụ, giả thiết rằng bạn có các điểm GPS trong lớp nền JOSM,
    bạn đã lưu điểm này trong GPS với tên 030 và bạn ghi trong ghi ghép của mình điểm 030 là trường học.
    Để thêm điểm này trong OpenStreetMap,
    bạn chọn công cụ vẽ và nhấp đúp chuột vào điểm 030 trên bản đồ.
    Việc này sẽ tạo một điểm mới và bạn đi đến menu Presets,
    chọn mục cài đặt sẵn cho Trường học,
    nhập tên trường và nhấp chuột vào nút “Apply Preset”.
    Bạn có thể làm tương tự với đường và vùng.

![GPS in JOSM][]

Các thẻ thông tin
----
Khi bạn vẽ một điểm, đường hoặc vùng,
nó sẽ có vị trí nhưng chưa có các thông tin đi kèm.
Nói cách khác, chúng ta biết nó **ở đâu** nhưng không biết nó là **cái gì**.
Trước đó, chúng ta đã dùng các mục trong menu Presets để định danh nó **là gì**.
Cách để OpenStreetMap biết một đối tượng **là gì** đó là sử dụng các **thẻ thông tin**.

Thẻ giống như một cái nhãn để bạn ghi chú lên đó.
Ví dụ, khi bạn vẽ một hình vuông, nó đơn thuần là một hình vuông.
Nhưng khi ta thêm thuộc tính để thể hiện hình vuông đó là một tòa nhà,
tên của tòa nhà là “Merana Thamrin”; tòa nhà cao 16 tầng.

Bạn có thể thêm bao nhiêu thẻ tùy tích cho đối tượng.
Thẻ được lưu dưới dạng cặp văn bản gọi là **khóa** và **giá trị**.
Trong OpenStreetMap, các thẻ lưu những thông tin ở trên có thể là:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Nếu bạn chọn một đối tượng trong JOSM, bạn có thể chọn tất cả các thẻ thông tin
đi kèm với đối tượng trong Bảng thuộc tính (Properties panel) bên tay phải.

![Properties panel][]

### Chỉnh sửa các thẻ thông tin
Bạn có thể thêm, chỉnh sửa hoặc xóa bớt các thẻ thông tin từ Bảng thuộc tính (Properties panel).
Tuy nhiên, các thẻ thường dùng tiếng Anh nên đôi khi có thể bị nhầm lẫn, cách tốt nhất là sử dụng meu Presets.
Khi bạn thêm hoặc thay đổi các thẻ thông tin,
các thuộc tính của đối tượng sẽ được thay đổi.

-   Để chỉnh sửa các thẻ thông tin của một đối tượng, đầu tiên hãy chọn đối tượng đó.
-   Sau đó, chỉnh sửa thẻ thông tin bằng một trong hai cách sau: (1) Sử dụng menu Presets,
    hoặc (2) chỉnh sửa trực tiếp các thẻ thông tin trong ô Properties nằm bên tay phải. 

### Lỗi thường gặp: Nhập thông tin của điểm khi bạn chỉnh sửa thẻ thông tin của các đường hoặc vùng
Khi bạn đang chỉnh sửa thuộc tính của một điểm,
đầu tiên bạn cần phải chọn điểm đó và sau đó thêm các thẻ thông tin bằng cách sử dụng menu Presets hoặc chỉnh sửa trực tiếp trong ô Properties.
Một lỗi thường gặp khi thêm thuộc tính cho điểm hoặc đường.
Khi bạn chọn đối tượng, bạn hãy chắc chắn rằng mình đã chọn đường
chứ không phải là các điểm tạo nên đường đó.

Điều này thường xảy ra khi người chỉnh sửa sử dụng công cụ chọn (select tool) của JOSM
để vẽ một hình chữ nhật quanh một đối tượng,
việc này sẽ khiến tất cả mọi thứ, gồm cả đường **và** các điểm tạo nên đường đó được chọn.
Khi bạn thêm các thẻ thông tin, các thẻ này sẽ được gán cho cả các điểm nữa.
Hãy chắc chắn rằng **chỉ** chọn các đường khi bạn thêm thẻ thông tin cho chúng.

![Nodes mistake][]

Lưu file OSM
----------------
Khi bạn chỉnh sửa bản đồ trong JOSM, cách thức tốt nhất bạn nên làm là tải xuống, chỉnh sửa và tải lên các thay đổi trong những khoảng thời gian phù hợp.
Bạn sẽ không hề muốn tải xuống dữ liệu một ngày nào đó rồi tải lên các chỉnh sửa của bạn vài ngày sau đó.
Nếu có người nào đó chỉnh sửa tại khu vực mà bạn cũng đang chỉnh sửa trong thời gian đó?
Điều này sẽ dẫn đến các lỗi và xung đột.

Đừng ngại tải lên các chỉnh sửa của bạn thường xuyên.
Điều này sẽ đảm bảo các chỉnh sửa của bạn sẽ được lưu trên CSDL và bạn sẽ không đánh mất kết quả công việc của mình.

Nếu bạn đang chỉnh sửa chỉ ở một khu vực cụ thể, cách tốt nhất là bạn tải xuống dữ liệu trước mỗi lần bạn làm việc,
đề phòng trường hợp có ai đó đã có những thay đổi tại khu vực này.

Mặc dù bạn nên luôn tải xuống dữ liệu OSM mỗi khi bạn chỉnh sửa và tải lên các chỉnh sửa của mình thường xuyên,
đôi khi bạn muốn lưu các dữ liệu OSM trên máy tính của mình.
Ví dụ, nếu bạn có kết nối internet gián đoạn,
bạn sẽ cần phải tải xuống dữ liệu, lưu lại, chỉnh sửa
và sau đó tải lên vào một lúc nào đó.

-  Để lưu một file OSM, hãy chắc chắn đó là lớp đang được kích hoạt trong khung Layers.
    Nhấp chuột vào menu “File”, chọn “Save”.
    Chọn vị trí bạn muốn lưu file và đặt tên file.
    Bạn cũng có thể lưu bằng nhấp chuột vào nút:

![JOSM save button][]

-  Như vậy, bạn có thể đóng JOSM và các dữ liệu của bạn sẽ được lưu.
    Khi bạn muốn mở lại file đó, đơn giản là mở JOSM,
    nhấp vào menu “File”, chọn “Open…”

Tóm lược
-------
Trong chương này, chúng ta đã xem xét sâu hơn vào gia diện của JOSM và học cách thêm lớp và thẻ thông tin.
Bây giờ bạn đã có một nền tảng vững chắc
trong cách lập bản đồ và cách chỉnh sửa OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png