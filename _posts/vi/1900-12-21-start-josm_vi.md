---
layout: doc
title: Getting Started with JOSM
permalink: /vi/josm/start-josm/
lang: vi
category: josm
published: true
---

Getting Started with JOSM
=============================  

> Hướng dẫn này có thể được tải xuống tại đây: [josm_start-josm_vi.odt](/files/josm_start-josm_vi.odt) or [josm_start-josm_vi.pdf](/files/josm_start-josm_vi.pdf)  
> Cập nhật: 2017-11-06  

Chương này, chúng ta sẽ biết cách tải xuống và cài đặt JOSM,
viết tắt của Java OpenStreetMap editor, thay đổi một số cài đặt,
mở một bản đồ thí dụ và thực hành một số thao tác cơ bản trong phần mềm này.
Hãy nhớ lại trong chương mở đầu, chúng tôi có yêu cầu bạn vẽ bản đồ của khu phố hoặc thị trấn bạn đang ở.
Với chương này, chúng ta sẽ vẽ lại bản đồ đó của bạn, lần này là bằng kỹ thuật số.
Sau đó, bạn sẽ hiểu rõ hơn cách làm thế nào để vẽ bản đồ trên JOSM.

Tải xuống JOSM
-------------

- Nếu bạn có sẵn bộ cài đặt JOSM trong CD hoặc bút nhớ USB,
  bạn có thể bỏ qua bước này để tiến hành cài đặt JOSM.
- Nếu bạn chưa có bộ cài JOSM hoặc muốn có phiên bản mới nhất,
  hãy mở trình duyệt web của bạn – có thể là Firefox, Chrome,
  Opera hoặc Internet Explorer.
- Gõ địa chỉ sau vào thanh địa chỉ của trình duyệt web:
  josm.openstreetmap.de
- Bạn cũng có thể tìm thấy trang web chứa bộ cài JOSM bằng cách tiến hành tìm kiếm cụm từ “JOSM”.
- Trang web sẽ trông như sau:

  ![JOSM website][]

- Nếu bạn sử dụng hệ điều hành Windows, nhấn chuột vào dòng chữ “Windows Installer” để tải xuống JOSM.

  ![Windows installer][]

- Đối với các hệ điều hành khác, bạn nhấp chuột vào liên kết tương ứng với hệ điều hành mình đang sử dụng.
  Bộ cài đặt JOSM sẽ được tải xuống máy tính của bạn.
  Trong chương này, chúng tôi mặc định bạn sử dụng hệ điều hành Windows
  nhưng cách thức thực hiện với các hệ điều hành khác cũng tương tự như vậy.

Cài đặt JOSM
------------

>  Bạn sẽ không thể cài đặt JOSM nếu máy tính của bạn không có Java.
>  Vì vậy, bạn cần phải tải xuống và
>  cài đặt Java từ địa chỉ:
>  [http://www.java.com/en/download/](http://www.java.com/en/download/)

>  Hệ điều hành Mac có thể phải sử dụng các phiên bản cũ hơn của Java, xin tham khảo tại địa chỉ sau http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation](http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation) với các tùy chọn cho phiên bản OSX 10.6 và 10.7.3+

- Tìm đến bộ cài đặt JOSM trong máy tính của bạn,
  nhấp đúp để bắt đầu quá trình cài đặt.
- Click ‘OK’, ‘Next’, ‘I Agree’, and ‘Install’.
  Khi quá trình cài đặt kết thúc,
  nhấp chuột vào nút ‘Finish’,
  lúc này bạn có thể khởi chạy JOSM lần đầu tiên.
  Ở những lần sau, bạn có thể khởi chạy JOSM qua nút Start.
- Bạn có thể nhận được  thông báo cập nhật phần mềm khi khởi chạy JOSM.
  Bạn sẽ không cần thiết phải cật nhật khi vừa mới cài đặt nên hãy nhấp chuột vào nút “Cancel”.
  Nếu bạn không muốn thấy thông báo này lần nữa,
  bạn có thể nhấp chọn vào ô phía dưới trước khi nhấp chuột vào nút “Cancel.”
- Khi JOSM khởi chạy, giao diện phần mềm sẽ giống như ở dưới:

  ![JOSM splash page][]

Các cài đặt riêng cho JOSM
--------------------

Có rất nhiều cài đặt khác nhau mà bạn có thể tùy biến trong JOSM. 
Một trong những cài đặt đó là thay đổi ngôn ngữ.
JOSM đã được dịch ra nhiều ngôn ngữ khác nhau
và bạn có thể lựa chọn sử dụng.

- Để đi đến cửa sổ cài đặt, nhấp chuột vào menu Edit -\> Preferences.

  ![Preferences window][]

- Ở phía trái của khung tùy chọn,
  nhấp chuột vào biểu tượng
- Nhấp chuột vào thẻ “Look and Feel”.
- Chọn ngôn ngữ bạn muốn sử dụng từ danh sách thả xuống bên cạnh từ
  “Language”.
  
  ![Look and feel][]

- Nhấp chuột vào nút “OK”.
- Bạn sẽ phải khởi động lại JOSM để các thay đổi cài đặt có hiệu lực.
  Nhấp chuột vào menu “File” -> “Restart”.

Các thao tác chỉnh sửa bản đồ cơ bản trong JOSM
-----------------------------

- Bây giờ, chúng ta sẽ mở một file OSM làm ví dụ
  để học các thao tác chỉnh sửa bản đồ cơ bản trong JOSM.
  Xin lưu ý rằng đây không phải là một bản đồ thực tế
  của một khu vực trên thực địa nên chúng ta sẽ không lưu vào OpenStreetMap.
- Tải xuống file: [sample.osm](/files/sample.osm)
- Hãy mở file bản đồ thí dụ này trong JOSM.
  Nhấp chuột vào nút “Open” ở góc trên bên trái.

  ![Open file][]

- Tìm đến file **sample.osm**. File này có thể trong thư mục Downloads của bạn, trừ phi bạn chủ định lưu vào thư mục khác.
  Nhấp chuột vào nút “Open”.
- Bạn sẽ thấy bản đồ thí dụ giống như sau:

  ![Sample file][]

- Bạn sẽ sử dụng các dữ liệu này để thực hành các kỹ thuật chỉnh sửa bản đồ khác nhau.
  *Bạn cũng nên lưu ý là không tải lên bất kỳ dữ liệu You must however never upload these fictitious data to the database.*

### Các thao tác cơ bản

- Để di chuyển bản đồ lên/ xuống hoặc sang trái/ phải,
  nhấn và giữ nút phải chuột.
- Có nhiều cách để phóng to và thu nhỏ bản đồ.
  Nếu sử dụng bản đồ,
  bạn có thể dùng nút cuộn để phóng to/ thu nhỏ.
  Ngoài ra, bạn có thể dùng thanh tỷ lệ
  phía trên bên trái khung bản đồ.
  Kéo thanh tỷ lệ về phía trái hoặc phải.

  ![Scale bar][]

- Nhìn vào bản đồ thí dụ, bạn sẽ thấy một số đối tượng khác nhau
  gồm một con sông, một khu rừng, một số tòa nhà,
  một số con đường và vài cửa hàng.
  Để chọn một đối tượng, nhấp chuột trái vào đối tượng đó.

### Điểm, đường và hình

- Khi bạn chọn các đối tượng khác nhau trên bản đồ thí dụ,
  bạn sẽ thấy có 3 nhóm đối tượng khác nhau trên bản đồ.
  Đó là nhóm các điểm, đường và hình.
- Điểm là một vị trí đơn lẻ và được thể hiện bằng các biểu tượng.
  Trong bản đồ ví dụ này, bạn sẽ thấy 2 điểm, một là cửa hang giày và một là siêu thị.
  Cửa hàng giày được biểu tượng bằng hình chiếc giày
  và siêu thị được biểu tượng bằng xe đẩy hàng.
- Có một số đường kẻ trên bản đồ thể hiện cho đường đi.
  Nếu bạn nhìn gần hơn,
  bạn sẽ thấy đường kẻ này cũng chứa các điểm.
  Các điểm này không chứa thông tin hay biểu tượng
  nhưng nó xác định vị trí đường.
- Cuối cùng, bạn có thể thấy một số hình
  biểu thị các khu vực khác nhau
  như một khu rừng, một con sông, một công viên hay các tòa nhà.
  Một hình vẽ thì giống hệt một đường
  nhưng khác ở chỗ là điểm đầu và điểm cuối là trùng nhau.

> Một cách đơn giản, có thể hiểu bản đồ chứa đựng 3 loại đối tượng cơ bản: điểm, đường và vùng. 
> Trong OpenStreetMap, có một số khái niệm bạn sẽ phải làm quen khi chỉnh sửa bản đồ
> như điểm được gọi là **nút/ nodes**, và đường được gọi là **đoạn/ ways**.
> Một hình được gọi là **đường khép kín** vì
> nó là một đường với điểm đầu và điểm cuối trùng nhau.

- Bạn có thể thấy khi chọn một đối tượng trên bản đồ,
  một danh sách sẽ được đưa ra bên phải của khung bản đồ gọi là Các thuộc tính/ “Properties”.
  Đây là các thẻ thông tin được gắn với một điểm, đường hoặc hình để mô tả đặc điểm của đối tượng.
  Chúng ra sẽ tìm hiểu them về thẻ thong tin ở các chương sau.
  Hiện tại, bạn cũng chỉ cần hiểu rằng
  các thẻ thông tin giúp chúng ta biết được đối tượng trên bản đồ
  là một khu rừng, một con sông, tòa nhà hay là gì khác.
- Về cách thức thành lập bản đồ thủ công,
  bạn làm như thế nào để vẽ điểm, đường và vùng.
  Những khu vực nào được thể hiện tốt nhất bằng các điểm, đường và vùng?

### Thay đổi các đối tượng

- Chọn khu rừng ở bên trái của bản đồ
  bằng cách nhấp chuột vào cạnh của khu rừng chứ không phải điểm nút của các đoạn.
  Bây giờ, hãy nhấn giữ trái chuột vào kéo.
  Bạn sẽ có thể di chuyển khu rừng đến địa điểm mới trên bản đồ.
- Nhấp chuột vào một điểm của một đoạn bất kỳ,
  nhấn giữ trái chuột và kéo.
  Bạn sẽ có thể di chuyển điểm đó.
  Đây là cách để bạn thay đổi hình dạng của đối tượng hoặc di chuyển một điểm.

### Vẽ

- Ở bên trái trong giao diện của JOSM là một cột các nút bấm.
  Nhiều nút trong số đó sẽ mở cửa số mới bên phải
  để cung cấp thêm thông tin của bản đồ.
  Những nút quan trọng nhất được bố trí ở phần trên cảu cột.
  Khi nút này chìm xuống chỉ ra bạn có thể làm gì bằng con trỏ chuột.
- Nút trên cùng của cột này cũng chính là nút các bạn sẽ sử dụng nhiều nhất.
  Đó là nút dùng để chọn một đối tượng và để vẽ một đối tượng mới.
- Cho đến giờ, bạn đã sử dụng công cụ Chọn/ Select tool,
  trông như thế này:

  ![Select tool][]

- Trước khi bạn vẽ thêm đối tượng, bạn cần chắc chắn là ko có đối tượng nào đang được chọn.
  Nhấp chuột vào khu vực trống của bản đồ
  để đảm bảo không có đối tượng nào được chọn.
- Nhấp chuột vào nút tiếp theo, nút Công cụ vẽ/ Draw tool.

  ![Draw tool][]

- Tìm đến một khu vực trống của bản đồ, nhấp đúp chuột.
  Một điểm mới sẽ được vẽ.
- Để vẽ một đoạn, nhấp trái chuột, di chuyển chuột và nhấp chuột lần nữa,
  tiếp diễn đến khi bạn hài lòng với đoạn mình đã vẽ.
  Nhấp đúp chuột để kết thúc quá trình vẽ đường.
- Vẽ hình cũng tương tự như vẽ đoạn/ đường
  nhưng kết thúc bằng cách nhấp đúp vào điểm đầu tiên bạn vẽ.

### Thêm các tùy biến có sẵn/ Presets

- Bây giờ, chúng ta đã biết cách vẽ điểm, đường và hình
  nhưng chúng ta vẫn chưa định nghĩa xem các điểm/ đường/ hình là gì.
  Chúng ta sẽ muốn đưa vào thông tin về mỗi điểm là cửa hàng,
  trường học hay gì khác, và hình vừa vẽ là cánh đồng, toàn nhà.
- Nhấp chuột vào công cụ Chọn/ Select tool trên cột các nút ở phía trái.

  ![Select tool][]

- Chọn một đối tượng mà bạn đã vẽ từ công cụ vẽ.
  Từ menu hệ thống, nhấp chuột vào “Presets”.
  Di chuyển con trỏ theo các menu thứ cấp để chọn được loại địa điểm mà bạn muốn sử dụng.
- Khi bạn chọn một cài đặt có sẵn,
  một biểu nhập thông tin sẽ hiện ra để bạn đưa các thông tin bổ sung.
  Bạn không nhất thiết phải điền tẩt cả các trường thông tin
  nhưng bạn nên điền vào các trường thông tin quan trọng như tên của đối tượng.
- Khi bạn cung cấp đầy đủ thông tin, nhấp chuột vào nút “Apply Preset”.
  Nếu thông tin bạn đưa là phù hợp,
  bạn sẽ thấy điểm, đường hay vùng sẽ thay đổi màu
  và biểu tượng do các thông tin bạn đã đưa vào.

Vẽ bản đồ của chính bạn
-----------------

- Và bây giờ, hãy bắt đầu vẽ một bản đồ bằng các kỹ thuật mà bạn vừa học.
  Bạn có thể sẽ muốn vẽ lại bản đồ mà bạn vẽ trên giấy trước đây.
- Kéo bản đồ ra khỏi khu vực bản đồ thí dụ vừa rồi.
  Nhấn giữ chuột phải và kéo đến khi bạn thấy một khu vực hoàn toàn trống để vẽ.
- Sử dụng công cụ Vẽ để tạo các điểm, đường và vùng.
  Mô tả các đặc điểm của đối tượng bằng cách chọn trong menu Presets.
- Khi bạn vẽ xong, bạn sẽ có bản đồ của riêng mình,
  giống hệt như bản đồ ví dụ mà bạn đã mở trong sample.osm.

## Remove the sample layer

Một khi bạn cảm thấy thoải mái với những kỹ thuật chỉnh sửa cơ bản này,
bạn có thể muốn chuyển sự chú ý của bạn tới việc lập bản đồ thực sự. 

*Điều rất quan trọng là bạn lần đầu tiên gỡ bỏ lớp với dữ liệu mẫu. 
Những dữ liệu này là hư cấu và không được tải lên cơ sở dữ liệu OpenStreetMap 
(phiên bản JOSM mới hơn tự động ngăn chặn điều này).*

Trong cửa sổ Layers ở phía trên bên phải của màn hình, 
chọn lớp sample.osm. Sau đó nhấp vào biểu tượng thùng rác ở góc dưới bên phải của cửa sổ đó. 
Ngoài ra, bạn có thể chọn xóa từ trình đơn ngữ cảnh của lớp. 
Để tiếp tục chỉnh sửa, trước tiên bạn cần tải dữ liệu thực. 
Điều này sẽ được giải thích trong chương tiếp theo.

Tóm lược
-------

Thật tuyệt! Cho đến lúc này, bạn đã học cách cài đặt JOSM vào máy tính của mình,
các công cụ cơ bản để vẽ bản đồ.
Trong chương tiếp theo, bạn sẽ được biết trình tự chỉnh sửa bản đồ OSM trong JOSM.

[JOSM website]: /images/josm/josm-website.png
[Windows installer]: /images/josm/windows-installer.png
[JOSM splash page]: /images/josm/josm-splash-page.png
[Preferences window]: /images/josm/josm_preferences.png
[Look and feel]: /images/josm/josm_look-and-feel.png
[Open file]: /images/josm/josm_open-file.png
[Sample file]: /images/josm/josm_sample-file.png
[Scale bar]: /images/josm/josm_scale-bar.png
[Select tool]: /images/josm/josm_select-tool.png
[Draw tool]: /images/josm/josm_draw-tool.png