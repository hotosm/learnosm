---
layout: doc
title: Sửa chữa các hiệu chỉnh ảnh
permalink: /vi/josm/correcting-imagery-offset/
lang: vi
category: josm
---

Hiệu chỉnh ảnh
===============

> Reviewed 2015-09-21  

Các Nhà cung cấp hình ảnh thường làm một công việc khá tốt trong việc mô phỏng hình ảnh của họ, nhưng thỉnh thoảng hình ảnh có thể bị sai vị trí. Điều này đặc biệt đúng ở các vùng đồi núi, nơi rất khó để tạo ra một hình ảnh phẳng trên một diện tích Trái đất với nhiều đường đồng mức. Khi bạn tải hình ảnh trong JOSM cho các khu vực đồi núi, đôi khi nó có thể bị lệch mười mét hoặc hơn từ vị trí thực sự của nó. Đây được gọi là **imagery offset/ dịch chuyển ảnh**  

Lưu ý trong hình sau đây rằng hai bức ảnh chụp từ xa đã được tham chiếu địa lý và hợp nhất lại với nhau. Bởi vì tham chiếu địa lý không phải là một quá trình hoàn hảo, các hình ảnh không xếp hàng hoàn hảo với nhau. Do đó một, hoặc cả hai, không chính xác.  

![Misaligned imagery][]

Chúng ta đã học được về hai cách tạo bản đồ chính - một bằng cách sử dụng ảnh hàng không để xác định các đối tượng trên mặt đất và một bằng cách sử dụng GPS để ghi lại các tuyến và các điểm tham quan và sau đó thêm chúng vào OpenStreetMap. Ưu điểm của ảnh hàng không là hiển nhiên. Nó cho phép bạn, người lập bản đồ, xem toàn bộ bức ảnh, để quan sát các chi tiết khác nhau từ hình ảnh, xem xét kiến ​​thức của bạn về khu vực, và dễ dàng theo dõi các con đường, tòa nhà và các khu vực. Tuy nhiên, một ưu điểm chính của GPS là nó không bị dịch chuyển như hình ảnh. Một GPS sẽ luôn luôn cung cấp cho bạn vĩ độ và kinh độ chính xác. Ngoại lệ duy nhất là khi các tín hiệu vệ tinh bị gián đoạn bởi các toà nhà cao tầng hoặc núi, nhưng trong trường hợp này, nó dễ dàng nhận ra lỗi. Quan sát tuyến GPS trong hình ảnh này, so với lớp ảnh hàng không Bing bên dưới nó:  

![Aerial vs GPS][]

Bởi vì những gì chúng ta biết, rõ ràng rằng các tuyến GPS có thể là chính xác, và hình ảnh bên dưới nó đã bị lệch. Vì vậy, bây giờ chúng ta phải hỏi, "nếu hình ảnh có thể bị lệch, làm thế nào chúng ta vẫn có thể sử dụng nó và làm cho bản đồ chính xác?"  

Hiệu chỉnh độ lệch ảnh
-------------------------

Câu trả lời cho câu hỏi trước đó là chúng tôi có thể di chuyển hình ảnh sao cho phù hợp với những thứ chúng ta biết ở đúng vị trí, chẳng hạn như các tuyến đường GPS. Dễ dàng hiệu chỉnh hình ảnh trong JOSM.  

Tham chiếu tốt nhất để hiệu chỉnh ảnh là các tuyến GPS dọc theo các con đường. Và có càng nhiều tuyến GPS để tham khảo, bạn sẽ hiệu chỉnh ảnh càng chính xác.  Do người dùng OpenStreetMap thường xuyên tải lên các tuyến GPS vào CSDL OSM, chúng ta có thể tải xuống và sử dụng chúng để hiệu chỉnh ảnh.  

- Nhấp vào nút tải xuống. ![JOSM download button][]{: height="24px"}  

- Chọn hộp bên cạnh “Raw GPS Data” ![Download raw GPS data][]{: height="24px"} gần phía trên cùng của cửa sổ tải xuống. Chọn khu vực của bạn và nhấp vào “Download.”  

- Thao tác này sẽ tải xuống một lớp bổ sung cho JOSM chứa các tuyến GPS. Tùy thuộc vào số lượng tuyến đã được tải lên bởi người dùng OSM, bạn có thể thấy vài tuyến (hoặc thậm chí không có tuyến nào cả):  

![Few GPS tracks from OSM][]

- Hoặc, bạn có thể thấy nhiều tuyến GPS:  

![Many GPS tracks from OSM][]

- Để điều chỉnh một lớp hình ảnh, hãy nhấp vào nút “Adjust imagery offset” ![Adjust imagery offset button][]{: height="24px"} phía trên của giao diện JOSM.  

- Bỏ qua hộp bật lên, sử dụng chuột để kéo lớp hình ảnh sao cho phù hợp với các tuyến GPS. Tuyến GPS xếp thẳng hàng với các con đường trên hình ảnh càng sát càng tốt. Bạn sẽ thấy số hiệu chỉnh trong hộp thay đổi.  

![Adjust imagery offset][]

- Nếu muốn, bạn có thể lưu các cài đặt hiệu chỉnh này bằng cách nhập tên bookmark và sau đó nhấp OK. Sau đó, bạn có thể tự động áp dụng các cài đặt tương tự sau bằng cách đi đến Imagery ‣ Imagery offset và nhấp chuột vào bookmark bạn đã tạo.  
- Nếu bạn không muốn lưu bù đắp, chỉ cần nhấp vào OK mà không cần nhập tên bookmark.  

Điều gì sẽ xảy ra nếu không có tuyến GPS trên OpenStreetMap, và bạn không có GPS? Nếu không có bản ghi GPS, rất khó để hiệu chỉnh hình ảnh. Nếu đó là một vùng trống rỗng (không có nhiều bản đồ được thực hiện), bạn có thể chọn chỉ sử dụng hình ảnh và sửa dữ liệu sau đó. Tốt hơn là lập bản đồ cho khu vực đó với 20 hoặc 30 mét sai số vị trí còn hơn là không có bản đồ nào cả.  

Nếu bạn có thể xác định một cách tích cực vĩ ​​độ và kinh độ của một đối tượng trên mặt đất, bạn có thể đảm bảo hình ảnh được đặt chính xác bằng cách làm theo các bước sau:  

1. Xác định đối tượng có vị trí bạn biết trên hình ảnh.  
2. Nhấp vào vĩ độ và kinh độ ở góc dưới cùng bên trái của JOSM.![JOSM lat lon][]{: height="24px"}  
3. Trong hộp thoại mở ra, nhập vĩ độ và kinh độ của địa điểm mà bạn biết, và nhập một số nhỏ cho Zoom, khoảng năm hoặc mười.  
![JOSM lat lon dialogue][]
4. Thao tác này sẽ thu phóng và căn giữa bản đồ đến kinh độ và vĩ độ của bạn. Bây giờ, bạn có thể di chuyển hình ảnh như trước đây để tính năng bạn biết là trung tâm ở đúng vị trí.  

Mặt khác, nếu khu vực đã được lập bản đồ khá chi tiết, hy vọng rằng những người lập bản đồ trước đó đã vẽ các đối tượng ở vị trí chính xác. Trong trường hợp này, bạn có thể căn chỉnh hình ảnh vào bản đồ OSM, nhưng hãy cẩn thận! Những người lập bản đồ khác có thể không nhận thức được sự bù đắp của hình ảnh và họ có thể đã mắc phải sai lầm khi họ vẽ bản đồ.  


CƠ SỞ DỮ LIỆU HIỆU CHỈNH ẢNH
---------------------------

Bây giờ bạn đã biết cách quan sát và chỉnh sửa hiệu chỉnh ảnh, nhưng có một vấn đề lớn với cách tiếp cận này mà chúng ta đã bỏ qua cho đến nay. Nếu mọi người sử dụng OpenStreetMap điều chỉnh hình ảnh một cách khác nhau, mọi người sẽ được lập bản đồ với nền khác nhau một chút.  

Hãy tưởng tượng rằng bạn đang lập bản đồ một thị trấn nhỏ, và bạn nhận ra rằng hình ảnh của Bing được bù đắp bằng cách 15 mét về phía bắc. Vì vậy, bạn điều chỉnh hình ảnh và sau đó sử dụng nó để lập bản đồ toàn bộ thị trấn một cách chính xác. Nhưng sau đó ai đó muốn thêm cái gì đó vào bản đồ, vì vậy họ tải dữ liệu và tải hình ảnh Bing, nhưng họ không biết về hình ảnh bù đắp mà bạn phát hiện ra! Họ sẽ nghĩ rằng có điều gì đó sai trái và tất cả các đồ vật trong thành phố bị sai lệch 15 mét, và họ sẽ bắt đầu di chuyển chúng, điều này không đúng! Điều này có thể là thảm họa đối với dữ liệu bản đồ của thị trấn.  

Vì lý do này, điều quan trọng là tất cả người dùng đều nhận thức được sự bù đắp của hình ảnh và luôn phải kiểm tra nó trước khi lập bản đồ khu vực. Để giúp giải quyết vấn đề này, một số người thông minh tạo ra một plugin cho phép người dùng lưu thông tin bù đắp trong một cơ sở dữ liệu và chia sẻ nó với người khác. Hãy xem cách hoạt động này:  

- Mở menu Preferences trong JOSM, và nhấp chuột vào thẻ Plugins.![JOSM plugins tab][]{: height="24px"}  

- Tìm plugin có tên “imagery_offset_db” và chọn hộp bên cạnh nó.  

![Imagery_offset_db plugin][]

- Nhấp OK.  Bạn sẽ cần phải khởi động lại JOSM để kết thúc cài đặt plugin.  

Tương tự như cách bạn có thể lưu lại các hiệu chỉnh bằng bookmark, plugin này cho phép bạn lưu các điều chỉnh vào một cơ sở dữ liệu trung tâm, và để truy cập vào các điều chỉnh mà người dùng khác đã tạo ra. Do đó, nếu một người lập bản đồ tạo ra một giá trị hiệu chỉnh ảnh trong một khu vực, những người dùng khác có thể sử dụng cùng một sự bù đắp chính xác với bản đồ.  

Khi sử dụng các lớp ảnh hàng không, bạn luôn phải kiểm tra các giá trị hiện có và khi bạn tạo ra sự hiệu chỉnh của riêng mình, bạn luôn luôn lưu nó vào cơ sở dữ liệu này.  


THÊM IMAGERY OFFSET TỪ CƠ SỞ DỮ LIỆU
------------------------------------

Khi bạn thêm một lớp hình ảnh, plugin mới sẽ cảnh báo bạn rằng bạn nên kiểm tra cơ sở dữ liệu hình ảnh cho một bù đắp hiện tại. Bạn sẽ thấy một biểu tượng có dấu chấm than màu đỏ trên đó ở đầu JOSM, như sau:  

![Imagery offset notification][]

- Nhấp chuột vào nút và plugin sẽ liên lạc với cơ sở dữ liệu để xem nếu có các độ lệch hiện tại trong khu vực này.  
- Ở đây, chúng tôi đã tải xuống dữ liệu OSM và tuyến đường GPS ở Kuta, Bali, Indonesia. Trong trường hợp này, chúng tôi đã tìm thấy một hiệu chỉnh hiện tại. Nhấp vào nó để áp dụng cho bản đồ.  

![Offset in Kuta bali][]

- Điều này làm cho vị trí ảnh thay đổi một chút. Tuy nhiên, khi chúng ta thêm hiệu chỉnh của người khác như thế này, chúng ta nên kiểm tra xem nó có hợp lệ hay không bằng cách kiểm tra các tuyến GPS.  

![Comparing imagery offset from GPS tracks][]

- Chúng ta có thể thấy rằng các lớp hình ảnh trên thực tế vẫn bị lệch.  Chúng tôi không muốn người dùng khác sử dụng hiệu chỉnh này, vì vậy chúng ta nên đánh dấu nó là không chính xác trong cơ sở dữ liệu. Nhấp vào nút "Offsets" một lần nữa (nó sẽ không có dấu chấm than đỏ nữa)..  

![Offsets button][]

- Lần này khi hộp thoại mở ra, nhấp chuột phải vào offset và nhấp vào “Deprecate Offset.”  

![Deprecate offset][]

- Nhấp vào “Yes” để xác nhận.  
- Bạn sẽ cần nhập lý do để không sử dụng hiệu chỉnh này.  

![Deprecate reason][]


Thêm Hiệu chỉnh ảnh vào CSDL
------------------------------------

Bây giờ chúng ta đã đánh dấu offset của người dùng là "không dùng nữa", chúng ta nên thêm một sự bù đắp được cải thiện cho cơ sở dữ liệu.  

1.  Nhấp vào nút “Adjust imagery offset”. ![Adjust imagery offset button][]{: height="24px"}  
2.  Điều chỉnh hình ảnh để khớp với các tuyến GPS. Nhấp vào OK trong hộp hội thoại.  
3.  Bây giờ hãy chuyển sang ‣ Store Imagery Offset...  
![Store imagery offset][]
4.  Nhập mô tả của bù đắp trong hộp mở ra.  
![Offset description][]
5.  Nhấp OK. Bù đắp của bạn sẽ được lưu vào cơ sở dữ liệu.  
6.  Bây giờ hãy tắt lớp GPS và xem dữ liệu OSM so với hình ảnh được đặt chính xác.  

![Corrected imagery][]

Ồ không! Ai đó đã lập bản đồ khu vực này với hình ảnh sai lệch, vì vậy khu vực này không được lập bản đồ một cách chính xác. Quá trình này sẽ mất một thời gian.


WEBSITE CƠ SỞ DỮ LIỆU HIỆU CHỈNH HÌNH ẢNH
--------------------------------

Cuối cùng, để biết thêm thông tin về cơ sở dữ liệu bù đắp, bạn có thể truy cập vào trang web tại [http://offsets.textual.ru/](http://offsets.textual.ru/).  Tại đây liệt kê tất cả các hiệu chỉnh đã được tải lên cơ sở dữ liệu, và nó cũng có một bản đồ rất tuyệt thể hiện trực quan các khu vực có các hiệu chỉnh được lưu, như bạn thấy ở đây:  

![http://offsets.textual.ru/][]

> Một điều cuối cùng cần nhớ là hình ảnh có thể không được hiệu chỉnh cùng khoảng cách ở mọi nơi! Điều này đặc biệt đúng ở các khu vực có rất nhiều đồi núi. Vì vậy, nếu hình ảnh có vẻ được hiệu chỉnh ở các khu vực khác nhau, bạn sẽ cần phải di chuyển lại.  

TÓM LƯỢC
--------

Khi bạn mới bắt đầu OpenStreetMap, bạn không cần phải lo lắng quá nhiều về việc hiệu chỉnh hình ảnh. Nhưng nếu bạn thấy một số chỉnh sửa khác của người lập bản đồ dường như không tương xứng với hình ảnh, bạn nên luôn luôn cân nhắc rằng có thể có một sự hiệu chỉnh trước khi bạn bắt đầu thay đổi đối tượng. Và nếu bạn chưa sẵn sàng đối phó với các hiệu chỉnh, hãy nhớ rằng tốt hơn là nên lập bản đồ một khu vực có độ lệch từ 20 đến 30 mét so với không phải là bản đồ. Nhưng khi có thể, nhớ rằng bù đắp hình ảnh có thể xảy ra, và sử dụng các bước trong chương này để sửa nó khi cần thiết.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










