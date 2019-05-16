---
layout: doc
title: Trình quản lý tác vụ phiên bản 3
permalink: /vi/coordination/tasking-manager3/
lang: vi
category: coordination
---

# Trình quản lý tác vụ 3


**Hướng dẫn này mô tả phiên bản hiện tại của Trình quản lý tác vụ. Nếu giao diện người dùng của phiên bản bạn sử dụng trông khác với trình mô tả ở đây thì bạn nên tham khảo [hướng dẫn sử dụng cho phiên bản trước đó](/vi/coordination/tasking-manager)**

Mục lục
-------------
-  [Hướng dẫn nhanh](/vi/coordination/tasking-manager3/#quick-start-guide)  
-  [Quy trình lập bản đồ](/vi/coordination/tasking-manager3/#mapping-process)  
    -  [Đăng nhập](/vi/coordination/tasking-manager3/#tasking-manager-login)  
    -  [Tuỳ chọn - Cài đặt ngôn ngữ và hồ sơ người dùng](/vi/coordination/tasking-manager3/#options-amp-links)  
    -  [Tìm dự án -  dựa trên danh sách và sử dụng chế độ xem bản đồ, tìm kiếm và lọc](/vi/coordination/tasking-manager3/#finding-a-project---tasking-manager-contribute-screen)  
    -  [Lập bản đồ một khu vực- chọn, làm việc và mở khóa một khu vực](/vi/coordination/tasking-manager3/#mapping-via-the-tasking-manager) 
-  [Trợ giúp - trưc tuyến và liên hệ với quản trị dự án](/vi/coordination/tasking-manager3/#getting-help)  
-  [Gợi ý và lời khuyên](/vi/coordination/tasking-manager3/#editing-hints-and-tips)
-  [Xác nhận](/vi/coordination/tasking-manager3/#validation)

[Trình quản lý tác vụ HOT OSM](http://tasks.hotosm.org) là một công cụ phối nhiều người lập bản đồ một khu vực địa lý cụ thể trong Open-StreetMap

OpenStreetMap là bản đồ hợp tác,có sự đóng góp của cộng đồng và miễn phí trên toàn thế giới. Bất cứ ai cũng có thể đóng góp cho OpenStreetMap để lập bản đồ bất kỳ khu vực nào của thế giới mà họ quan tâm. Tasking Manager chỉ là một cách để điều phối nhiều nhóm người đóng góp cho OpenStreetMap nhưng phần lớn đóng góp cho OpenStreetMap được thực hiện bởi những người không sử dụng Tasking Manager.

Tasking Manager là một công cụ hoàn toàn riêng biệt từ dự án OpenStreetMap chính. Khi bạn đang đóng góp cho OpenStreetMap bằng Trình quản lý tác vụ, bạn thực sự đang sử dụng nhiều công cụ phần mềm:

* OpenStreetMap - Cơ sở dữ liệu thông tin địa lý
* Trình quản lý tác vụ - Giúp điều phối một số lượng lớn người chỉnh sửa dữ liệu OpenStreetMap trong cùng một khu vực
* Một trình soạn thảo OpenStreetMap  - Một chương trình phần mềm có thể đọc và ghi dữ liệu vào cơ sở dữ liệu Open-StreetMap

![TM overview][]

Vai trò của Trình quản lý tác vụ là đưa ra một khu vực địa lý cụ thể được chia thành các khu vực nhỏ, nhanh chóng để lập bản đồ gọi là "Nhiệm vụ" và cung cấp một cách để "thanh toán" hoặc "khóa" một trong những khu vực nhỏ trong khi bạn lập bản đồ khu vực đó bằng cách sử dụng một của trình soạn thảo OpenStreetMap tiêu chuẩn. Bằng cách "kiểm tra" hoặc "khóa" một trong những khu vực nhỏ này, giúp bạn đảm bảo rằng không ai khác sẽ lập bản đồ trong cùng khu vực đó trong khi bạn đang làm việc trên đó. Điều này giúp ngăn ngừa "lập bản đồ gấp đôi" hoặc các lỗi khác khi hai người đang làm việc trên chính xác cùng một khu vực trong OpenStreetMap.

Một khi bạn đã lập bản đồ vùng nhỏ đó, bạn ghi lại trong Trình quản lý tác vụ rằng bạn đã hoàn thành lập bản đồ cho khu vực nhỏ và hy vọng bạn chọn một "Nhiệm vụ" khác để lập bản đồ.


## Hướng dẫn nhanh

1. Tạo tài khoản và đăng nhập vào http://openstreetmap.org/  
  ![TM Quick Start 1][]
2. Truy cập [http://tasks.hotosm.org/](http://tasks.hotosm.org/) và nút đăng nhập ở góc bên trên bên phải  
  ![TM Quick Start 2][]
3. Nhấp vào "Contribute" và tìm một dự án để làm việc  
  ![TM Quick Start 3][]
4. Đọc hướng dẫn cho dự án  
  ![TM Quick Start 4][]
5. Nhấp vào tab "Map"  
  ![TM Quick Start 5][]
6. Tìm một nhiệm vụ "Ready" để làm việc, nhấp chuột vào nó và chọn "Start Mapping"  
  ![TM Quick Start 6][]
7. Bạn sẽ được chuyển sang một trình soạn thảo OpenStreetMap, bản đồ tất cả các tính năng được yêu cầu trong hướng dẫn.  
  ![TM Quick Start 7][]
8. Khi hoàn thành lập bản đồ, chuyển trở lại Tasking Manager và nhấp vào "Mark as Completed Mapped" nếu bạn đã lập bản đồ hoàn thành nhiệm vụ, hoặc "Stop Map-ping" nếu bạn chỉ cần ngừng lập bản đồ vì một lý do nào đó.  
  ![TM Quick Start 8][]


## Quy trình lập bản đồ 

1. Một mapper từ xa tạo một tài khoản trong OpenStreetMap và đăng nhập vào Trình quản lý tác vụ.
2. Người lập bản đồ tìm một dự án để làm việc, thường dựa trên trình độ ưu tiên và trình độ do quản lý dự án Quản lý Tác vụ ấn định. 
3. Người lập bản đồ từ xa chọn một ô vuông nhiệm vụ, hoàn thành việc lập bản đồ, và đánh dấu công việc là hoàn tất
4. Người lập bản đồ từ xa thứ hai kiểm tra rằng nhiệm vụ được hoàn thành đến mức thỏa đáng và đánh dấu nhiệm vụ là 'đã được xác nhận'
5. Tiến trình lập bản đồ của dự án có thể được theo dõi từ bên trong tab "thống kê" của dự án, và dự án có thể được hạ cấp hoặc lưu trữ theo yêu cầu của quản trị viên.

### Đăng nhập vào Tasking Manager

Tasking Manager là một công cụ riêng biệt mà tọa độ ánh xạ trong OpenStreetMap. Tuy nhiên, nó sử dụng hệ thống đăng nhập OpenStreetMap. Điều này có nghĩa là bạn không cần phải tạo một tài khoản người dùng riêng để sử dụng Trình quản lý Tác vụ, nhưng bạn cần phải tạo một tài khoản OpenStreetMap và đăng nhập OpenStreetMap trước khi bạn có thể sử dụng Trình Quản lý tác vụ để lập bản đồ.

Khi bạn lần đầu tiên ghé thăm Tasking Manager, bạn sẽ thấy một nút "Đăng nhập" ở góc trên bên phải của màn hình.

![TM login 1][]

Nhấp vào nút đó sẽ đưa bạn đến trang web OpenStreetMap. Ở đó bạn sẽ phải đăng nhập và cấp Quản lý tác vụ truy cập vào các tùy chọn OpenStreetMap của bạn. Tạo một tài khoản trên trang web OpenStreetMap nếu bạn chưa có.

![TM login 2][]

![TM login 3][]

Một khi bạn đăng nhập vào OpenStreetMap, bạn sẽ được trả lại Trình quản lý tác vụ, nhấp vào Contribute hoặc Bắt đầu sẽ đưa bạn đến một danh sách các dự án bạn có thể đóng góp.

### Tùy chọn & liên kết

Trình quản lý tác vụ ban đầu hiển thị bằng tiếng Anh - để thay đổi sang ngôn ngữ khác, nhấp vào tiếng Anh ở phía trên bên phải của cửa sổ.

Khi bạn đã đăng nhập, bạn có thể nhấp vào tên người dùng của bạn ở trên cùng. Tại đây bạn có thể:

- Xem tiểu sử Trình quản lý tác vụ của bạn, nơi bạn có thể:
    - Cập nhật địa chỉ email và các phương tiện truyền thông xã hội
    - Xem cấp độ kinh nghiệm của người lập trình
    - Xem danh sách và bản đồ các dự án mà bạn đã đóng góp
- Chuyển đến màn hình **Tin nhắn** của bạn trong Trình quản lý tác vụ(không giống với hệ thống nhắn tin OpenStreetMap)
- Đăng xuất

### Tìm một dự án - Màn hình đóng góp của Trình quản lý tác vụ

Nhấp vào liên kết "Đóng góp" trong thanh trình đơn chính sẽ đưa bạn đến danh sách chính các dự án trong Trình quản lý tác vụ.

![TM contribute][]

Màn hình Đóng góp của Trình quản lý tác vụ được chia thành ba phần chính:

- Các tùy chọn Tìm kiếm và Lọc ở bên trái
- Danh sách dự án
- Chế độ xem bản đồ của Danh sách dự án

#### Các tùy chọn Tìm kiếm và Lọc

Theo mặc định tất cả các dự án có sẵn để lập bản đồ được hiển thị. Bạn có thể sử dụng phần Bộ lọc Tìm kiếm Nâng cao của màn hình để thu hẹp thêm các dự án mà bạn muốn làm việc.

- Số dự án - Nếu bạn biết số dự án bạn muốn làm việc, bạn có thể nhập nó vào đây và được đưa trực tiếp đến dự án đó.
- Tổ chức - Điều này cho phép bạn chỉ hiển thị các dự án đã được yêu cầu bởi các tổ chức cá nhân.
- Khó khăn trong lập bản đồ - Một số dự án khó vẽ hơn bản đồ khác. Tùy chọn này cho phép bạn tìm các dự án phù hợp nhất với trình độ kinh nghiệm của bạn. Bạn được khuyến khích làm việc trên các dự án phù hợp nhất với cấp độ kinh nghiệm của bạn, đặc biệt nếu bạn là người lập bản đồ giàu kinh nghiệm hơn.
- Loại Bản đồ - Điều này cho phép bạn tìm các dự án bao gồm một loại tính năng nhất định để lập bản đồ. Nhiều dự án chỉ tập trung vào một loại bản đồ, nhưng các dự án có thể bao gồm nhiều loại tính năng để lập bản đồ.
- Tìm kiếm toàn bộ văn bản - Điều này cho phép bạn tìm kiếm các dự án có thể chứa một từ hoặc cụm từ nhất định trong mô tả dự án.
- Các thẻ Chiến dịch- Campaign Tags - Các dự án có thể có các thẻ khác cho thấy một dự án chiến dịch bản đồ lớn hơn là một phần của, bạn có thể tìm các dự án bằng các thẻ đó bằng cách nhập chúng vào trường này.

#### Chế độ xem Bản đồ
Nhấp vào tab "Chế độ xem Bản đồ" sẽ hiển thị số dự án trong khu vực. Nhấp đúp hoặc phóng to sẽ hiển thị từng dự án. Sau khi phóng to, các điểm trên bản đồ được mã màu, màu đỏ là khẩn cấp, màu vàng là ưu tiên cao hoặc trung bình và màu xám được ưu tiên thấp. Nhấp vào bất kỳ điểm nào trên bản đồ sẽ hiển thị thông tin về dự án đó. Nhấp vào tên dự án sẽ đưa bạn đến dự án đó.

![TM project map][]

### Lập bản đồ thông qua Trình quản lý tác vụ

Một khi bạn đã xác định được một Dự án để làm việc, nhấp vào Tiêu đề Dự án sẽ đưa bạn đến mục nhập chi tiết cho Dự án đó. Chế độ xem chi tiết này bao gồm:

- Mô tả tầm quan trọng của dự án và cách dữ liệu sẽ được sử dụng
- Hướng dẫn chi tiết để biết loại bản đồ
- Các màn hình lựa chọn để xác thực bản đồ
- Bản đồ chi tiết của từng khu vực lập bản đồ cá nhân, với thông tin về tình trạng của họ.
- Thẻ câu hỏi và thảo luận cho các câu hỏi hoặc nhận xét về dự án

![TM project description][]



#### Trang dự án

Tất cả mọi thứ bạn cần biết về dự án là ở đây! Ở phía trên là mô tả đầy đủ về dự án lập bản đồ và thông tin về dự án.  

Bên dưới mô tả màn hình được chia thành phần trái và phải. Phần bên trái là bảng điều khiển được tab có các tab "Hướng dẫn", "Bản đồ", "Xác nhận" và "Câu hỏi và Bình luận". Bên phải là bản đồ của dự án và các nhiệm vụ riêng biệt để lập bản đồ.

- Các ô nhiệm vụ không màu nghĩa là sẵn sàng và có sẵn để lập bản đồ
- Các khu vực màu hồng của bản đồ cho thấy các khu vực ưu tiên cao hơn
- Các ô vuông vàng nghĩa là đã trải qua quá trình hoàn thành bản đồ đầu tiên và đã sẵn sàng để xác nhận
- Một đường viền màu vàng cho biết ô nhiệm vụ bạn đang lựa chọn
- Các ô màu xanh là những ô đang có thành viên khác làm việc trên đó 
- Các ô màu xanh lá là các ô đã được lập bản đồ lần hai và đã được xác thực
- Các ô màu xám đậm là các ô bị khoá bởi người lập bản đồ và đánh dấu là không có hình ảnh được chấp nhận để lập bản đồ 
- Đường màu xanh nước biển thường nhìn thấy quanh một dự án chỉ ra đường ranh giới của dự án. Đường ranh giới này thường đi theo hình ảnh có sẵn, ranh giới hành chính, v.v ... có thể xuất hiện dưới dạng hình dạng khác thường. Mặc dù bản đồ có thể được hoàn thành bên ngoài biên giới này, nhưng nó không phải là yêu cầu và sẽ không được các nhà xác thực xem xét.  


#### Thẻ hướng dẫn
Thẻ này cho thấy những gì được yêu cầu trong nhiệm vụ lập bản đồ. Các dự án có nhiều khó khăn, phù hợp với người mới bắt đầu, người lập bản đồ trung gian và nâng cao - và các hướng dẫn sẽ giải thích điều này. Đảm bảo bạn đã đọc và hiểu phần này. Có rất nhiều kiểu dự án lập bản đồ, cho nhiều mục đích khác nhau. Một số hoạt động dự án phổ biến bao gồm:  

- Mạng lưới đường bộ: Được sử dụng bởi những người trên mặt đất để tải dữ liệu vào các công cụ điều hướng cầm tay, và để tìm ra cách tiếp cận các vùng sâu  
- Lập bản đồ làng: Thường được sử dụng để xác định những nơi mà người dân sinh sống và có thể bị ảnh hưởng  
- Lập bản đồ các tòa nhà: Sử dụng để đánh giá thiệt hại hoặc theo dõi dịch bệnh. Cũng được sử dụng cho ước tính dân số.  
- Lập bản đồ sông, tường và các đối tượng khác  

Không phải tất cả các khu vực trên thế giới cũng tương tự như của riêng bạn, vì vậy có thể cung cấp lời khuyên gắn thẻ cụ thể. Chẳng hạn, mạng lưới đường bộ của Châu Phi rất khác với các hệ thống đường cao tốc điển hình của Mỹ và châu Âu.  

Sẽ có một phần chỉ ra **Nhận xét Changeset** bạn nên chắc chắn xuất hiện trong chương trình chỉnh sửa của bạn khi tải lên / lưu các thay đổi cùng với thông tin **nguồn** mà bạn có thể (tùy thuộc vào phần mềm biên tập) cần phải sao chép và dán vào trường mã nguồn khi thực hiện thay đổi.  

Đôi khi, hình ảnh cụ thể có thể có sẵn - bạn có thể phải đồng ý với giấy phép để truy cập nó. Các hướng dẫn thường chỉ ra cách dễ dàng nhất để tải nó vào các biên tập viên như JOSM hay iD.  

Khi kiểm tra một tác vụ được đánh dấu là hoàn thành, người xác nhận sẽ mong đợi rằng các yêu cầu từ tab hướng dẫn đều đã được hoàn tất. Bạn có thể hoàn thành toàn bộ nhiệm vụ là khá khó khăn - hướng dẫn dưới đây có sẵn xung quanh việc mở khóa nhiệm vụ; cũng như cung cấp phản hồi hữu ích cho người lập bản đồ kế tiếp.  

#### Nút Hoạt động và Thống kê  

Tab này chứa số liệu thống kê về dự án. Nó được chia thành hai phần, một danh sách chi tiết của hoạt động (trước đây là tab riêng của mình trong Tasking Manager 2.0) và phần tóm tắt

Tóm tắt chứa danh sách những người lập bản đồ đã hoàn thành ít nhất một tác vụ trong dự án.  

Một bản ghi của tất cả các nhận xét còn lại trên các tác vụ cá nhân là ở dưới cùng của trang. Đây là những ý kiến còn lại về các tác vụ và không nên nhầm lẫn với thẻ "Câu hỏi và Bình luận" là các câu hỏi chung và nhận xét về dự án tổng thể.

Bạn có thể trả lại trang đóng góp dự án chính bằng cách nhấp vào tên dự án trên trang Hoạt động và thống kê.

#### Tab Bản đồ  

Nhấp vào khi bạn đã sẵn sàng để bắt đầu lập bản đồ. Bạn có thể chọn một tác vụ cá nhân để làm việc bằng cách chọn nó từ bản đồ, hoặc bằng cách nhấp vào tùy chọn "Take a Task ngẫu nhiên". Chỉ có các tác vụ không màu có thể được chọn trong tab này hoặc bạn sẽ nhận được một thông báo nói rằng nhiệm vụ không thể được ánh xạ. Nếu bạn dự định kiểm tra tính hợp lệ, đảm bảo bạn chọn tab "Validate".

![TM map tab][]

#### Chọn một ô nhiệm vụ để lập bản đồ  

Sau khi chọn nhiệm vụ của mình, bạn sẽ có thể xem liệu có lịch sử nào cho tác vụ này, chẳng hạn như một người lập bản đồ bắt đầu bản đồ, nhưng nhận ra rằng họ không có thời gian để hoàn thành nhiệm vụ  

Nhấp vào nút **Bắt đầu Bản đồ** khóa tác vụ để không người lập bản đồ khác có thể chọn nó cho đến khi nó được phát hành lại, và bắt đầu một bộ đếm ngược giờ 2 giờ (120 phút), khi kết thúc thời gian tác vụ được tự động phát hành. Bạn nên kiểm tra đồng hồ đếm ngược hàng ngày một cách thường xuyên - bạn rất dễ bị cuốn hút bản đồ và không nhận ra rằng nhiệm vụ của bạn đã được phát hành và bây giờ đã được lựa chọn bởi một người lập bản đồ khác đã bắt đầu lập bản đồ. Điều này có thể dẫn đến xung đột và vấn đề.  


#### Các tuỳ chọn chỉnh sửa

Các tùy chọn chỉnh sửa khác nhau được trình bày cho bạn ngay khi bạn khóa một ô nhiệm vụ.

##### Soạn thảo với JOSM  

Bắt đầu JOSM trước khi sử dụng liên kết này và nó sẽ tự động nạp dữ liệu OSM hiện có vào JOSM.  

>  1. 'Bật điều khiển từ xa' cần được đánh dấu - được tìm thấy trong  **Chỉnh sửa / Tuỳ chọn / Điều khiển từ xa**
>  2. Nếu bạn đã cài đặt plug-in 'continuosDownload' thì nên tắt nó đi (untick 'Tải về OSM Data liên tục' trong menu  **File** trong JOSM).  
>  3. 3.	Nếu JOSM cũng không tải hình ảnh một cách tự động, nó thường có thể được tìm thấy trong trình đơn **Hình ảnh**. [Để biết thêm thông tin về Hình ảnh truy cập tại đây](/vi/josm/more-about-josm/#add-imagery)  
  

##### Trình soạn thảo iD  

Chọn tùy chọn này để tự động bắt đầu tab hoặc cửa sổ mới của trình duyệt web của bạn, với dữ liệu OSM hiện có được tải. Trình duyệt web Internet Explorer hiện không hỗ trợ iD và nó sẽ nạp Potlatch 2 thay thế. Tab hoặc cửa sổ ban đầu của bạn với Trình quản lý Tác vụ vẫn sẽ có mặt.  


##### Potlatch 2  

Trình soạn thảo sẽ tải trong một cửa sổ hoặc tab mới. Potlatch sẽ không tự động hiển thị hộp giới hạn nhiệm vụ, nhưng bạn có thể làm như vậy bằng cách làm theo thủ tục này:  

1. Trong Trình quản lý tác vụ, chọn một ô nhiệm vụ và nhấp vào Bắt đầu Bản đồ để khóa nó  
2. Trong rình quản lý tác vụ, chọn Chỉnh sửa với JOSM (nếu một cửa sổ xuất hiện với nội dung "JOSM điều khiển từ xa đã không trả lời ..." chỉ cần nhấp vào OK).  
3. Dưới nút Chỉnh sửa với JOSM, văn bản sẽ nói "Mẹo: Tải xuống tệp .gpx.". Tải xuống tệp .gpx và lưu ý nơi lưu nó  
4. Trong rình quản lý tác vụ, thay đổi từ Chỉnh sửa với JOSM để Chỉnh sửa với Potlatch 2. Potlatch sẽ mở trong một tab mới.  
5. Trong Potlatch, chọn Background, sau đó Vector File...  
6. Trong cửa sổ Load Vector File, ở cuối trang File, kích Open, và điều hướng tới tệp .gpx mà bạn vừa tải về  
7. Trong cửa sổ Load Vector File, đảm bảo hộp kiểm được đánh dấu trong cột Show cho tệp .gpx, sau đó đóng cửa sổ  
8. Potlatch bây giờ sẽ hiển thị ranh giới như một hình vuông (có thể là màu lục lam). Lưu ý rằng Potlatch sẽ vẫn tải dữ liệu ngoài ranh giới  
  

##### Bản đồ thực địa  

Chỉ sử dụng khi bạn tham gia vào một dự án mà một người lập bản đồ địa phương đã tiến hành điều tra mặt đất và đánh dấu một bản đồ in với các thông tin như tên đường. Bản đồ này có thể được quét lại và sử dụng làm hình nền cho một người lập bản đồ từ xa hoặc địa phương để đọc thông tin và cập nhật phần Dữ liệu [Phần bản đồ thực địa trong LearnOSM](/vi/mobile-mapping/field-papers/).  


#### Chia ô vuông nhiệm vụ

Sau khi chọn nhiệm vụ của bạn và kiểm tra nó bằng hình ảnh tại chỗ, bạn có thể nhận ra rằng có quá nhiều chi tiết cần thiết cho lập bản đồ. Một ví dụ về điều này có thể là theo dõi các tòa nhà ở các khu đô thị dày đặc, hoặc tìm các ngôi làng nhỏ ở các khu vực rộng lớn. Hướng dẫn, nếu một người không thể hoàn thành trong vòng 2 giờ giới hạn, bạn có thể chia công việc thành 4 khu vực nhỏ hơn. *Sử dụng thận trọng* - nếu/ khi các ô nhiệm vụ được phân chia quá nhỏ thì rất khó để xác định loại đường cao tốc nào có liên quan và để xác định các tính năng khác.  

> Hãy lưu ý rằng những nhận xét hữu ích khác về tác phẩm đã hoàn thành trước đây sẽ không còn nữa.


#### Mở khoá ô nhiệm vụ

![TM unlock][]

##### Mở khóa một ô nhiệm vụ trước khi nó hoàn thành

Nếu bạn bắt đầu làm việc với một tác vụ, nhưng không thể hoàn thành nó vì một số lý do nào đó, cách tốt nhất là để lại nhận xét về công việc. Chỉ cần chi tiết những gì còn lại và chọn **Stop Mapping**. Đảm bảo nhận xét của bạn có liên quan và nhằm giúp đỡ người lập bản đồ kế tiếp.  

Ví dụ:  

    Bản đồ đã được hoàn thành gần hết, ngôi làng nhỏ phía trên bên trái 
    còn thiều và cần thêm thông tin
  

##### Mở khóa ô tác vụ được hoàn thành

Rất khó để hoàn toàn chắc chắn rằng bạn đã hoàn thành một nhiệm vụ - tuy nhiên bạn có thể chấp nhận đánh dấu công việc là hoàn tất nếu bạn khá chắc chắn - nội dung sẽ được kiểm tra bởi một mapper khác khi xác nhận và bất kỳ bổ sung nhỏ nào cũng có thể được thực hiện sau đó .  

Để quá trình làm việc hiệu quả nhất, người lập bản đồ cần đánh dấu các nhiệm vụ là "Lập bản đồ" chứ không để lại cho những người lập bản đồ "không chắc chắn" khác để dành thời gian cũng kiểm tra chúng.  

Khi bạn hoàn tất chỉnh sửa và nghĩ rằng công việc đã hoàn tất, hãy lưu bất kỳ chỉnh sửa còn lại nào bằng chương trình chỉnh sửa của bạn, sau đó quay lại Trình quản lý tác vụ.  

+ Thêm nhận xét vào ô chi tiết những gì bạn đạt được và quan trọng hơn, những gì bạn không chắc chắn. Ví dụ; "Hoàn thành như tôi có thể nhìn thấy, nhưng có đám mây bao gồm góc trên bên phải của nhiệm vụ & tôi không thể nhìn thấy để theo dõi khu vực này".  
+ Nhấp vào nút "Đánh dấu là đã lập bản đồ", và công việc của bạn đã sẵn sàng để xem lại.  

##### Đánh dấu ô có chứa hình ảnh có chất lượng kém

Bạn đôi khi sẽ chọn phải một ô nhiệm vụ không thể được lập bản đồ bởi vì hình ảnh có độ phân giải thấp hoặc có che phủ mây. Chỉ cần đóng ô nhiệm vụ đó trong trình chỉnh sửa của bạn và sử dụng nút "Đánh dấu là Hình ảnh Không hợp lệ" để ghi lại rằng ô nhiệm vụ này không thể được lập bản đồ do hình ảnh kém.


#### Gửi tin nhắn từ hộp nhận xét

Khi để lại nhận xét đối với một tác vụ, bạn có thể nhận nhận xét được gửi dưới dạng thông báo tới một người lập bản đồ được đặt tên. Giống như Twitter, chỉ cần sử dụng một @ theo sau bởi tên người dùng. Thao tác này sẽ gửi một thông báo cho người dùng có chứa các nhận xét từ hộp này, cộng với một liên kết đến nhiệm vụ mà hộp chú thích liên quan.  

Ví dụ:  

    @HOTMppr nice work tracing the building  
    details here. You missed a small group  
    of houses on the upper left of the task square,  
    I added a few in, but some still remain.  

Điều này đặc biệt hữu ích khi xác nhận hoặc bổ sung vào tác phẩm trước của người khác - bạn có thể cung cấp phản hồi, cảm ơn hoặc nhiều hơn.  

+ Bạn có thể muốn cung cấp liên kết đến một trang web có thể giúp người lập bản đồ, chẳng hạn như <http://learnosm.org/vi/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ •	Lưu ý rằng nhiều người từ khắp nơi trên thế giới sẽ tham gia, do đó, thích ngôn ngữ đơn giản, rõ ràng. Nếu bạn gặp các nhận xét bằng các ngôn ngữ khác, các công cụ như Google Translate có hiệu quả hợp lý.


#### Đề cập đến một ô nhiệm vụ cụ thể khi gửi một email  

Nếu bạn cần gửi một tin nhắn, chẳng hạn như email hoặc tin nhắn của IRC, và bạn đang truy vấn một cái gì đó liên quan đến một tác vụ cụ thể trong một dự án (có lẽ bạn cần giúp đỡ xác định cái gì đó từ hình ảnh vệ tinh):  

1. Nhấp vào hình vuông nhiệm vụ có liên quanClick on the task square concerned  
2. Nhấp vào thanh địa chỉ trong trình duyệt web của bạn, trong đó sẽ hiển thị một cái gì đó tương tự như 'http://tasks.hotosm.org/project/713?task=259'  
3. Copy this link into the message. 


## Trợ giúp 

### Live text based help

Từ trang Learn của Trình quản lý tác vụ:  
1. Nhấp vào **OSM HOT IRC Channel #hot**  
2. Nhập tên người dùng (tên người dùng OSM của bạn?), Hoặc sử dụng các ký tự cài sẵn  
3. Ở cuối danh sách thả xuống, chọn **hot**  

- Ở bên phải màn hình là danh sách người dùng đang trực tuyến.  
- Nhập tin nhắn của bạn vào hộp ở dưới cùng bên trái của màn hình (đôi khi điều này bị tạm thời bị che khuất bởi văn bản khác, nhưng điều này sẽ biến mất khi bạn chọn hộp.  
- Để chỉ dẫn một thông điệp cho một cá nhân cụ thể, hãy bao gồm tên người dùng của họ từ danh sách bên phải trong tin nhắn của bạn. Nhập, sau đó sử dụng phím trả lại để gửi nhận xét của bạn. Hệ thống này 'sống' vì vậy chờ đợi câu trả lời - tên người dùng của bạn sẽ thường được sử dụng trong thư trả lời để cho bạn nhận xét về bạn. Thông thường bạn sẽ nhận được thư trả lời trong vòng vài giây, vì vậy hãy chờ.  
- Một hệ thống đơn giản khác có thể được tìm thấy tại[kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Thông tin thêm về việc sử dụng IRC với OpenStreetMap có thể được tìm thấy tại [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Ngoài ra sử dụng một khách hàng IRC của sự lựa chọn của bạn (Server=irc.oftc.net, and channel=#hot)  

### Để lại câu hỏi của dự án / nhận xét / liên hệ với người tạo dự án

Bằng cách sử dụng tab "Nhận xét" cho dự án, bạn có thể xem câu hỏi và bình luận của người dùng khác và để lại một của riêng bạn. Bạn cũng có thể nhấp vào liên kết "Liên hệ Quản lý Dự án" và sẽ tự động đưa ra nhận xét / câu hỏi cho người tạo dự án 

Tất cả nhận xét đều công khai và không phải là thời gian thực, trò chuyện trực tuyến, sử dụng tuỳ chọn IRC ở trên để trao đổi trực tuyến trong thơi gian thực.

![TM comments][]


## Các gợi ý và mẹo chỉnh sửa  

Bây giờ bạn đã hiểu rõ Trình quản lý tác vụ là gì, và một số chức năng khác mà nó hỗ trợ. Không giống như chỉnh sửa thông thường, công cụ này thường được sử dụng cho các dự án quan trọng thời gian với nhiều người tham gia - điều này có thể khác một chút so với những gì bạn đã quen.  

Một số lời khuyên chung để lưu ý khi làm việc trong công cụ này:  

* Tránh lập bản đồ ở bên ngoài hình vuông làm việc của bạn - những người lập bản đồ khác có thể đang làm việc trong khu vực đó, dẫn đến trùng lặp. Bạn có thể vẽ bản đồ các đối tượng như các tòa nhà chồng lên nhau một ranh giới, nhưng tránh phải đi xa hơn nữa - tải lên ngay lập tức sau khi vẽ bản đồ ở đường biên.  
* Mở rộng các tuyến đường, suối hoặc các đối tượng khác một chút qua các ranh giới - điều này cho phép người lập bản đồ kế tiếp tiếp tục ở nơi bạn dừng lại nhưng tải lên ngay khi bạn hoàn tất chỉnh sửa.  
* Nếu bạn nghi ngờ về tính năng cụ thể, hãy sử dụng phần bình luận để đặt câu hỏi hoặc kiểm tra wiki.  
* Nếu bạn mắc phải một sai lầm nghiêm trọng - ví dụ như xóa một tính năng hoặc quan hệ chính - sử dụng IRC hoặc hộp nhận xét để yêu cầu những người lập bản đồ khác giúp bạn hoàn nguyên điều này. Cố gắng để bao gồm các changeset, hoặc mô tả về những gì đã xảy ra. Là một nhiệm vụ cộng tác, nhiều người lập bản đồ khác đang ở đây để giúp đỡ - điều quan trọng là nhớ mọi người đôi khi mắc phải lỗi.  
* Đừng ngần ngại yêu cầu phản hồi - những người lập bản đồ xác nhận công việc của bạn có thể ngắn gọn hoặc đúng điểm, nhưng nếu họ biết rằng bạn có thể giao tiếp với bạn, thì kết quả thường tốt hơn cho tất cả những người tham gia. Có thể khó giao tiếp bằng ngôn ngữ khác và bạn có thể dễ dàng xuất hiện đột ngột khi bạn phải dịch cũng như truyền thông điệp bằng một ngôn ngữ mà bạn không thông thạo.  
* Bạn không được chứng thực công việc của mình - đôi mắt thứ hai sẽ luôn dẫn đến việc lập bản đồ chất lượng tốt hơn.  
* Đừng lo lắng nếu người lập bản đồ khác ngắn gọn khi xác nhận tác phẩm của bạn - như bạn, họ chỉ muốn đảm bảo rằng tất cả dữ liệu được lập bản đồ một cách chính xác. Phản hồi luôn luôn là về công việc còn lại, chứ không phải sự chỉ trích về những nỗ lực của bạn cho đến thời điểm này.  


## Xác nhận

Xác nhận là quá trình của một người lập bản đồ thứ hai xem xét lập bản đồ của người lập bản đồ ban đầu của một tác vụ dự án. Nó được thiết kế để đảm bảo dữ liệu đầy đủ, chất lượng và cung cấp cảm ơn, phản hồi và khuyến khích người lập bản đồ.

### Bắt đầu

Xác nhận bắt đầu giống như cách lập bản đồ, một tình nguyện viên tìm thấy một dự án họ muốn làm việc, đọc tab hướng dẫn để chắc chắn họ hiểu những gì được yêu cầu và nó được dự kiến sẽ được ánh xạ ra sao, thay vì chọn bản đồ tab cho dự án, họ chọn tab "Xác nhận".

![TM select for validation][]

Trình xác nhận có thể chọn một tác vụ bằng cách nhấp vào một hình vuông nhiệm vụ riêng lẻ, nhấp vào "Chọn một Nhiệm vụ ngẫu nhiên", chọn bởi người dùng hoặc vẽ một đa giác để chọn nhiều nhiệm vụ được kết nối.

Không giống như người lập bản đồ, người xác nhận có thể chọn nhiều tác vụ để thực hiện xác nhận trên một quy mô lớn hơn chỉ một nhiệm vụ.

### Chọn nhiều nhiệm vụ để xác nhận

Tình năng mới trong phiên bản mới nhất của Trình quản lý tác vụ là khả năng chọn nhiều nhiệm vụ để xác nhận, theo khu vực hoặc do người dùng.

Tùy thuộc vào trình soạn thảo bạn đang sử dụng, tính năng này sẽ hoạt động khác

Trong JOSM, một lớp dữ liệu OSM thứ hai sẽ được tạo ra có tiêu đề "Nhiệm vụ Ranh giới - Không Chỉnh sửa hoặc Tải lên" và nó sẽ bị vô hiệu hóa tải lên trong các phiên bản gần đây của JOSM. JOSM **sẽ không tải xuống dữ liệu OSM** vì nó có thể là một lượng dữ liệu rất lớn. Thay vào đó, trình xác nhận sẽ phải sử dụng các ranh giới nhiệm vụ làm hướng dẫn và tải dữ liệu vào lớp chỉnh sửa đang hoạt động theo cách thủ công.

#### Lựa chọn bằng cách vẽ một đa gia polygon

Tùy chọn này cho phép một người có thẩm quyền vẽ một hình vuông xung quanh một nhóm các nhiệm vụ và kiểm tra tất cả cùng một lúc

Một khi trong trình soạn thảo của sự lựa chọn của họ, **trình xác nhận sẽ phải tự tải xuống dữ liệu OSM** cho các khu vực tác vụ được chọn. Điều này là để ngăn chặn tải xuống tất cả các dữ liệu OSM giữa các Nhiệm vụ đã Chọn.


#### Chọn theo người dùng

Một danh sách những người lập bản đồ đã đánh dấu một nhiệm vụ đã làm được trình bày. Di chuột qua bất kỳ ai trong danh sách sẽ làm nổi bật các tác vụ mà họ đã đánh dấu là đã hoàn thành. Danh sách cũng cung cấp ba thông tin quan trọng về người lập bản đồ, mức độ kinh nghiệm của họ, số ngày kể từ khi họ bắt đầu lập bản đồ bằng cách sử dụng Quản lý tác vụ và số ngày kể từ lần cuối họ nhận được phản hồi thông qua xác nhận. Điều này cho phép trình xác minh nhắm mục tiêu cụ thể các người lập bản đồ mới, người lập bản đồ hoặc người lập bản đồ có kinh nghiệm, những người không có phản hồi trong một khoảng thời gian dài.

Nhấp vào nút "Bắt đầu Xác nhận" sẽ khóa tất cả các tác vụ được hoàn thành bởi người lập bản đồ đó và cho phép trình xác minh mở chúng trong trình soạn thảo lựa chọn của họ.

![TM multi selection][]

Một khi trong trình soạn thảo của sự lựa chọn của họ **trình xác nhận sẽ phải tự tải xuống dữ liệu OSM** cho các khu vực tác vụ được chọn. Điều này là để ngăn chặn tải xuống tất cả các dữ liệu OSM giữa các tác vụ đã chọn.

### Hoàn tất xác nhận

Sau khi trình xác nhận đã hoàn tất quá trình xác nhận cho một nhiệm vụ hoặc nhiều tác vụ, họ nên trở lại Tasking Manager và chọn một trong ba lựa chọn phản ánh việc lập bản đồ nhiệm vụ:

- Dừng Xác Nhận - Nếu bạn không thể hoàn tất quá trình xác nhận nhưng phải dừng xác nhận
- Đánh dấu (tất cả) là hợp lệ - Nếu bản đồ hoàn chỉnh và chính xác
- Đánh dấu (tất cả) là Không hợp lệ - Nếu bản đồ không hoàn chỉnh hoặc không chính xác.

Đối với hai lựa chọn cuối cùng, người kiểm duyệt có thể và nên để lại lời bình luận thân thiện và khích lệ được gửi đến (những) người lập bản đồ liên quan và cảm ơn những đóng góp và phản hồi của họ về lập bản đồ của họ. Hãy cân nhắc trước khi đánh dấu một tác vụ là không hợp lệ. Nếu chỉ một vài bit là thiếu thêm chúng cho mình, giải thích những gì đã mất trong bình luận của bạn, nhưng vẫn đánh dấu công việc là hợp lệ. Người lập bản đồ mới sẽ xem xét nhiệm vụ đã hoàn thành của họ được đánh dấu là không hợp lệ như một nhận xét khá khắc nghiệt.




[TM overview]: /images/coordination/tasking_manager_overview.png
[TM Quick Start 1]: /images/coordination/tasking_manager_qs1.png
[TM Quick Start 2]: /images/coordination/tasking_manager_qs2.png
[TM Quick Start 3]: /images/coordination/tasking_manager_qs3.png
[TM Quick Start 4]: /images/coordination/tasking_manager_qs4.png
[TM Quick Start 5]: /images/coordination/tasking_manager_qs5.png
[TM Quick Start 6]: /images/coordination/tasking_manager_qs6.png
[TM Quick Start 7]: /images/coordination/tasking_manager_qs7.png
[TM Quick Start 8]: /images/coordination/tasking_manager_qs8.png
[TM login 1]: /images/coordination/tasking_manager_login1.png
[TM login 2]: /images/coordination/tasking_manager_login2.png
[TM login 3]: /images/coordination/tasking_manager_login3.png
[TM contribute]: /images/coordination/tasking_manager_contribute.png
[TM map tab]: /images/coordination/tasking_manager_map_tab.png
[TM unlock]: /images/coordination/tasking_manager_unlock_task.png
[TM project map]: /images/coordination/tasking_manager_project_map.png
[TM project description]: /images/coordination/tasking_manager_project_description.png
[TM comments]: /images/coordination/tasking_manager_comments.png
[TM task selection]: /images/coordination/tasking_manager_task_selection.png
[TM select for validation]: /images/coordination/tasking_manager_validation_selection.png
[TM multi selection]: /images/coordination/tasking_manager_multi_selection.png
