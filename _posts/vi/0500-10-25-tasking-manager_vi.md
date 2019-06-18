---
layout: doc
title: Trình quản lý tác vụ phiên bản 2
permalink: /vi/coordination/tasking-manager/
lang: vi
category: coordination
---

# Trình quản lý tác vụ

> Reviewed 2017-12-19  

**Hướng dẫn này mô tả một phiên bản kế thừa của Tasking Manager. Nếu giao diện người dùng của phiên bản bạn sử dụng trông khác với trình mô tả ở đây thì bạn nên tham khảo [sổ tay cho phiên bản 3](/vi/coordination/tasking-manager3)**

Mục lục
-------------
-  [Tổng quan về cách sử dụng Trình quản lý tác vụ HOT](/vi/coordination/tasking-manager/#overview-of-the-process)  
-  [Ngôn ngữ, Tùy chọn, liên kết trợ giúp, và các liên kết khác. Trang người dùng của bạn - danh sách các dự án mà bạn đã hỗ trợ và tin nhắn](/vi/coordination/tasking-manager/#options-amp-links)  
-  [Đăng nhập](/vi/coordination/tasking-manager/#getting-started-with-the-tasking-manager)  
-  [Tìm kiếm dự án](/vi/coordination/tasking-manager/#locating-a-project)  
-  [Mô tả, Lưới bản đồ, Hướng dẫn, Đóng góp, Hoạt động, Thống kê cho dự án](/vi/coordination/tasking-manager/#description)  
-  [Chọn một ô vuông làm việc để lập bản đồ, hẹn giờ, phát hành](/vi/coordination/tasking-manager/#selecting-a-square-to-map)  
-  [JOSM, iD, Potlatch 2, Các tài liệu hiện trường, Các tài liệu đi kèm](/vi/coordination/tasking-manager/#editing-choices)  
-  [Chia các ô vuông làm việc](/vi/coordination/tasking-manager/#splitting-a-square)  
-  [Công bố các ô vuông làm việc khi bạn hoàn thành ](/vi/coordination/tasking-manager/#unlocking-a-square-before-it-is-complete)  
-  [Đánh dấu vuông của bạn là hoàn tất](/vi/coordination/tasking-manager/#finishing-a-square)  
-  [Gửi tin nhắn](/vi/coordination/tasking-manager/#sending-a-message-from-the-comment-box)  
-  [Xác định hình vuông của bạn trong email hoặc tin nhắn khác](/vi/coordination/tasking-manager/#referring-to-a-particular-square-when-sending-an-email)  
-  [Trợ giúp trực tuyến - IRC, phản hồi qua internet](/vi/coordination/tasking-manager/#getting-live-help)  
-  [Gợi ý và lời khuyên](/vi/coordination/tasking-manager/#editing-hints-and-tips)


Trình quản lý tác vụ HOT, <http://tasks.hotosm.org/>, là một công cụ trực quan mà người lập bản đồ có thể sử dụng để sắp xếp một khu vực thành một mạng lưới và làm việc cùng nhau để lập bản đồ một khu vực theo một cách có tổ chức. Điều này cho phép những người lập bản đồ trên khắp thế giới hỗ trợ lập bản đồ một khu vực xác định với nguy cơ chồng chéo thấp nhất là các khu vực làm việc và cũng cho phép người dân ở cả hai mặt đất và làm việc từ xa (đôi khi còn được gọi là "người lập bản đồ ghế bành") để cộng tác nhanh chóng, và tránh phải làm lại công việc do sự xung đột.  


## Tổng quan về quy trình

1. Một quản trị viên chọn một khu vực cần cập nhật trong OpenStreetMap. Quản trị viên đảm bảo có hình ảnh vệ tinh thích hợp sẵn có cho người lập bản đồ từ xa để theo dõi và tạo dự án bao gồm khu vực. Mức độ chi tiết cần thiết và sự khẩn cấp được xác định trong dự án cùng với bất kỳ thông tin nào khác mà người lập bản đồ từ xa sẽ yêu cầu. Khi hài lòng, quản trị viên xuất bản dự án trong Tasking Manager, mặc dù họ cũng có thể thay đổi sau nếu cần.  
2. Người lập bản đồ từ xa chọn một hình vuông nhiệm vụ, hoàn tất việc lập bản đồ và đánh dấu hình vuông là hoàn tất  
3. Người lập bản đồ từ xa thứ hai kiểm tra rằng hình vuông được hoàn thành đến mức thỏa đáng và đánh dấu hình vuông là 'được xác nhận'  
4. Tiến trình lập bản đồ của dự án có thể được theo dõi từ bên trong tab "thống kê" của dự án, và dự án có thể được hạ cấp hoặc lưu trữ theo yêu cầu của quản trị viên.  


## Tuỳ chọn & liên kết

Trình quản lý tác vụ ban đầu hiển thị bằng tiếng Anh - để thay đổi sang ngôn ngữ khác, nhấp vào  **English** trong biểu ngữ tiêu đề màu đỏ.  

Để biết thông tin về Trình quản lý tác vụ, các nhà tài trợ HOT, đối tác và giúp đỡ bấm vào **About** ở phía trên cùng của trang.

Khi bạn đã đăng nhập, bạn có thể nhấp vào tên người dùng của bạn ở trên cùng. Tại đây bạn có thể:  

- Truy cập một danh sách các dự án mà bạn đã hoàn thành ô vuông,  
- Chuyển đến màn hình **Messages** của bạn trong Trình quản lý tác vụ (không giống với hệ thống nhắn tin OpenStreetMap)  
- Đăng xuất  
- Xem danh sách tất cả người dùng đã đóng góp các ô vuông hoàn chỉnh trong Task-ing Manager. Bạn có thể truy cập liên kết để xem thêm thông tin về người sử dụng mà bạn chọn, chẳng hạn như những nhiệm vụ họ đã hoàn thành ô vuông và lịch sử sửa đổi OSM của họ.  

![Tasking Manager Username_list][]  


## Bắt đầu với Trình quản lý tác vụ

Bạn có thể xem các dự án với tư cách khách truy cập nhưng để tham gia tích cực, bạn phải đăng nhập vào Tasking Manager - sử dụng tên người dùng và mật khẩu tài khoản OpenStreetMap của bạn. Mở trình duyệt Internet của bạn và truy cập <http://tasks.hotosm.org>. Bạn sẽ thấy một trang như sau:  

![Tasking Manager Login][]

- Nhấn vào “login to OpenStreetMap”  
- Bạn đồng ý cho phép ứng dụng này truy cập vào tài khoản OpenStreetMap của bạn. Nhấp vào “Save Changes.”  

![Authorizing access to OSM account by the Tasking Manager][]


## Định vị dự án

Danh sách các dự án hiện tại có thể được sắp xếp theo:  

- Ưu tiên cao  
- Ngày tạo, hoặc  
- Cập nhật cuối cùng  

Bạn có thể tinh chỉnh danh sách của mình bằng cách nhấp vào hộp  **Your Projects** , chỉ để xem các dự án mà bạn đã tham gia, cho dù bạn đã hoàn thành một hình vuông hay không. Người xác nhận cũng sẽ tìm thấy các dự án mà họ đã đóng góp vào các ô được kiểm chứng, bằng cách sử dụng hộp kiểm này. Bạn có thể sử dụng tìm kiếm văn bản miễn phí để định vị các dự án có chứa chuỗi văn bản cụ thể, chẳng hạn như  **Ebola** (tìm kiếm không phân biệt chữ hoa chữ thường).  

Các dự án thường được đề cập đến bởi số Dự án của họ, ví dụ như [**#711 - Ebola Outbreak, Kayes, Mali - Lập bản đồ xây dựng dự phòng**](http://tasks.hotosm.org/project/711), , và trong trường hợp này bạn có thể tìm kiếm trên # 711 để tìm dự án này.  

Nhấp vào tiêu đề dự án xanh để xem thêm thông tin về dự án đó.  

![Job description][]


## Mô tả

Tất cả mọi thứ bạn cần biết về dự án là ở đây! Ở bên trái là mô tả của dự án lập bản đồ và những gì được yêu cầu. Phía bên phải là một lưới hiển thị khu vực được lập bản đồ;  

- Đường mía đường thường thấy được trong các ô vuông chu vi của một dự án chỉ ra biên giới của dự án. Biên giới này thường đi theo hình ảnh có sẵn, vì vậy có thể xuất hiện một hình dạng khác thường. Mặc dù bản đồ có thể được hoàn thành bên ngoài biên giới này, nhưng nó không phải là yêu cầu và sẽ không được các nhà xác thực xem xét.  
- Các khu vực hồng của bản đồ cho thấy các khu vực ưu tiên cao hơn,  
- Các ô vuông màu vàng đã được hoàn thành,  
- Một đường viền màu vàng cho thấy hiện tại ô vuông đang được làm việc,  
- Các ô màu xanh lá cây đã được hoàn thành và "xác nhận", và  
- Các ô còn lại vẫn cần phải được hoàn thành, hoặc đã bị mất hiệu lực trước đó (các ô vuông hiệu dụng là màu sẫm hơn).  


### Thẻ hướng dẫn
Thẻ này cho thấy những gì được yêu cầu trong nhiệm vụ lập bản đồ. Nhiệm vụ gặp khó khăn, phù hợp với người mới bắt đầu, người lập bản đồ trung cấp và cao cấp - và các hướng dẫn sẽ giải thích điều này. Đảm bảo bạn đã đọc và hiểu phần này. Có rất nhiều kiểu dự án lập bản đồ, cho nhiều mục đích khác nhau. Một số hoạt động dự án phổ biến bao gồm:  

- Mạng lưới đường bộ: Được sử dụng bởi những người trên mặt đất để tải dữ liệu vào các công cụ điều hướng cầm tay, và để tìm ra cách tiếp cận các vùng sâu  
- Bản đồ làng: Thường được sử dụng để xác định những nơi mà người dân sinh sống và có thể bị ảnh hưởng  
- Lập bản đồ các tòa nhà: Sử dụng để đánh giá thiệt hại hoặc theo dõi dấu vết của dịch bệnh. Cũng được sử dụng cho ước tính dân số.  
- Lập bản đồ sông, tường bao và các đối tượng khác  

Không phải tất cả các khu vực trên thế giới đều giống khu vực của bạn, vì vậy có thể cung cấp lời khuyên gắn thẻ cụ thể. Chẳng hạn, mạng lưới đường bộ của Châu Phi rất khác với các hệ thống đường cao tốc điển hình của Mỹ và châu Âu.  

Sẽ có một phần chỉ ra  **Thay đổi nhận xét** bạn nên chắc chắn xuất hiện trong chương trình chỉnh sửa của bạn khi tải lên / lưu các thay đổi cùng với thông tin **nguồn** mà bạn có thể (tùy thuộc vào phần mềm biên tập) cần phải sao chép và dán vào trường mã nguồn khi thực hiện thay đổi.  

Đôi khi, hình ảnh cụ thể có thể có sẵn - bạn có thể phải đồng ý với giấy phép để truy cập nó. Các hướng dẫn thường chỉ ra cách dễ dàng nhất để tải nó vào các biên tập viên như JOSM hay iD.  

Khi kiểm tra một ô vuông được đánh dấu là hoàn chỉnh, người xác nhận sẽ mong đợi rằng các yêu cầu từ tab hướng dẫn đều đã được hoàn tất. Bạn có thể thấy việc hoàn thành toàn bộ một viên gạch khá khó khăn - hướng dẫn dưới đây có sẵn quanh việc mở gạch; cũng như cung cấp phản hồi hữu ích cho người lập bản đồ kế tiếp.  


### Thẻ hoạt động  

Thẻ này cho thấy hoạt động đã diễn ra trong nhiệm vụ theo thứ tự thời gian.  


### Thẻ thống kê  

Thẻ này có chứa một biểu đồ tiến bộ và các thông tin khác  

Thẻ thông kê cũng chứa một danh sách những người lập bản đồ đã hoàn thành ít nhất một hình vuông trong dự án - để xem những ô vuông nào họ đã hoàn thành, bạn có thể di chuột qua tên người dùng, và các ô vuông mà họ đã hoàn thành sẽ trở thành những cái duy nhất có thể nhìn thấy được  (**sử dụng điều này để xác định vị trí các hình vuông mà bạn đã hoàn thành trước đó**).  

Khi bạn đã đặt quảng trường bằng cách di chuột qua tên người dùng, bạn có thể nhấp vào hình vuông để xem nhận xét do người lập bản đồ và người xác nhận cho hình vuông để lại, đây là cách hữu ích để thu thập phản hồi từ người kiểm chứng.  


### Thẻ đóng góp  

Nhấp vào khi bạn đã sẵn sàng để bắt đầu lập bản đồ. Bạn có thể chọn hình vuông của bạn để làm việc bằng cách chọn nó từ bản đồ, hoặc bằng cách nhấp vào tùy chọn "Đi một Tác vụ ngẫu nhiên".  

![Picking a task][]  


## Lựa chọn một ô vuông làm việc  

![Assigned task square][]  

Sau khi chọn ô vuông làm việc, bạn sẽ có thể xem lịch sử nào cho ô vuông này, chẳng hạn như một người lập bản đồ đã bắt đầu bản đồ, nhưng nhận ra rằng họ không có thời gian để hoàn thành ô vuông.  

Nếu bạn vô tình chọn một hình vuông, bạn có thể thả nó lại bằng cách nhấp vào nút kiểm soát đóng màu xanh - **x** - thể hiện trong ảnh chụp màn hình ở trên.  

Nhấp vào nút **Start Mapping** khóa vị trí để không người lập bản đồ khác có thể chọn nó cho đến khi nó được phát hành lại, và bắt đầu bộ đếm thời gian đếm ngược 2 giờ (120 phút), vào cuối thời gian đó hình vuông được tự động phát hành. Thực tiễn kiểm tra đồng hồ đếm ngược thường là kiểm tra đồng hồ đếm ngược của bạn - bạn rất dễ bị cuốn hút vào việc lập bản đồ và không nhận ra rằng hình vuông của bạn đã được phát hành và bây giờ đã được lựa chọn bởi một người lập bản đồ khác cũng đã bắt đầu lập bản đồ. Điều này có thể dẫn đến xung đột và vấn đề.  


### Các lựa chọn chỉnh sửa

Các tùy chọn chỉnh sửa khác nhau được trình bày cho bạn ngay khi bạn lựa chọn một ô vuông làm việc

![Editing options][]  


#### Chỉnh sửa với JOSM  

Bắt đầu JOSM trước khi sử dụng liên kết này và nó sẽ tự động nạp dữ liệu OSM hiện có vào JOSM.  

>  1. Bật điều khiển từ xa' cần được đánh dấu - được tìm thấy trong  **Chỉnh sửa / Tuỳ chọn / Điều khiển từ xa**
>  2. Nếu bạn đã cài đặt plug-in 'continuosDownload' thì nên tắt nó đi (bỏ đánh dấu trong ô 'Tải về OSM Data liên tục' trong danhh sách **File** in JOSM).  
>  3. Nếu JOSM cũng không tự động nạp hình ảnh, nó thường có thể được tìm thấy trong menu Hình ảnh **Imagery** menu. [Thông tin thêm về hình ảnh ở đây ](/vi/josm/more-about-josm/#add-imagery)  


#### Trình soạn thảo  iD  

Chọn tùy chọn này để tự động bắt đầu tab hoặc cửa sổ mới của trình duyệt web của bạn, với dữ liệu OSM hiện có được tải. Trình duyệt web Internet Explorer hiện không hỗ trợ iD và nó sẽ nạp Potlatch 2 thay thế. Tab hoặc cửa sổ ban đầu của bạn với Trình quản lý Tác vụ vẫn sẽ có mặt.  


#### Potlatch 2  

Trình soạn thảo sẽ tải trong một cửa sổ hoặc tab mới. Potlatch sẽ không tự động hiển thị hộp giới hạn nhiệm vụ, nhưng bạn có thể làm như vậy bằng cách làm theo thủ tục này:  

1. Trong Trình quản lý tác vụ, chọn một hình vuông và nhấp vào Bắt đầu Bản đồ để khóa nó  
2. Trong Trình quản lý tác vụ, chọn Edit with JOSM (nếu một cửa sổ xuất hiện với nội dung "JOSM điều khiển từ xa đã không trả lời ..." chỉ cần nhấp vào OK).  
3. Dưới nút Chỉnh sửa với JOSM, văn bản sẽ nói "Mẹo: Tải xuống tệp .gpx.". Tải xuống tệp .gpx và lưu ý nơi lưu nó.  
4. Trong Trình quản lý tác vụ, thay đổi từ Edit với JOSM để Edit với Potlatch 2. Potlatch sẽ mở trong một tab mới.  
5. Trong Potlatch, chọn Background, sau đó Vector File...  
6. Trong cửa sổ Load Vector File, ở cuối trang File, kích Open, và điều hướng tới tệp .gpx mà bạn vừa tải về  
7. Trong cửa sổ Load Vector File, đảm bảo hộp kiểm được đánh dấu trong cột Show cho tệp .gpx, sau đó đóng cửa  
8. Potlatch bây giờ sẽ hiển thị ranh giới như một hình vuông (có thể là màu lục lam). Lưu ý rằng Potlatch sẽ vẫn tải dữ liệu ngoài ranh giới.  


#### Bản đồ in cho hực địa  

Chỉ sử dụng khi bạn tham gia vào một dự án mà một người lập bản đồ địa phương đã tiến hành điều tra mặt đất và đánh dấu trên bản đồ in với các thông tin như tên đường. Bản đồ này có thể được quét lại và sử dụng làm bản đồ nền cho một công cụ lập bản đồ từ xa hoặc địa phương để đọc thông tin và cập nhật phần Dữ liệu OpenStreetMap [Phần bản đồ in thực địa trong LearnOSM](/en/mobile-mapping/field-papers/).  


### Chia ô vuông làm việc  

Lựa chọn ô vuông làm việc và kiểm tra nó bằng hình ảnh tại chỗ, bạn có thể nhận ra rằng có quá nhiều chi tiết cần thiết cho lập bản đồ. Một ví dụ về điều này có thể là theo dõi các tòa nhà ở các khu đô thị dày đặc, hoặc tìm các ngôi làng nhỏ ở các khu vực rộng lớn. Hướng dẫn, nếu một người không thể hoàn thành trong giới hạn 2 giờ, bạn có thể chia ô công việc thành 4 khu vực nhỏ hơn.*Sử dụng thận trọng * - nếu / khi  các ô vuông nhỏ quá nhỏ thì rất khó để đánh giá loại đường cao tốc nào, và để xác định các đối tượng khác.  

> Hãy lưu ý rằng những nhận xét hữu ích khác về tác phẩm đã hoàn thành trước đây sẽ không còn nữa


### Unlocking a square before it is complete

Nếu bạn bắt đầu làm việc trên một hình vuông, nhưng không thể hoàn thành vì lý do nào đó, cách tốt nhất là để lại nhận xét về hình vuông. Đơn giản chỉ cần chi tiết những gì còn lại và chọn  **mở khoá**. Đảm bảo nhận xét của bạn có liên quan và nhằm giúp đỡ người lập bản đồ kế tiếp.  

Ví dụ:  

    Gần hoàn thành, ngôi làng nhỏ ở phía trên bên trái 
    của ô làm việc cần được hoàn thiện


### Hoàn thành ô vuông làm việc

Rất khó để hoàn toàn chắc chắn rằng bạn đã hoàn thành một hình vuông - tuy nhiên nó là chấp nhận được để đánh dấu hình vuông là hoàn chỉnh nếu bạn khá chắc chắn - nội dung sẽ được kiểm tra bởi một mapper khác khi xác nhận, và bất kỳ bổ sung nhỏ có thể được thực hiện sau đó.  

Để quá trình làm việc hiệu quả nhất, người lập bản đồ cần phải đánh dấu các ô vuông là hoàn chỉnh chứ không để lại cho những người lập bản đồ "không chắc chắn" khác để dành thời gian cũng kiểm tra chúng.  

Khi bạn hoàn tất việc chỉnh sửa và nghĩ rằng hình vuông đã hoàn tất, hãy lưu bất kỳ chỉnh sửa còn lại nào bằng chương trình chỉnh sửa của bạn, sau đó quay lại Trình quản lý tác vụ.  

+ Thêm nhận xét vào ô chi tiết những gì bạn đạt được và quan trọng hơn, những gì bạn không chắc chắn. Ví dụ; "Hoàn thành như tôi có thể nhìn thấy, nhưng có đám mây bao gồm góc trên bên phải của quảng trường & tôi không thể nhìn thấy để theo dõi khu vực này".  
+ Nhấp vào nút "Đánh dấu tác vụ làm xong" và công việc của bạn đã sẵn sàng để xem lại.  


### Gửi tin nhắn từ hộp nhận xét

Khi để lại nhận xét cho ô vuông làm việc, bạn có thể chuyển nhận xét dưới dạng thông báo tới một người lập bản đồ có tên. Giống như Twitter, chỉ cần sử dụng một ký hiệu @ phía trước tên người dùng. Thao tác này sẽ gửi một thông báo cho người dùng có chứa các nhận xét từ hộp này, cộng với một liên kết tới ô vuông làm việc mà hộp ý kiến liên quan đến.  

Ví dụ:  

    @Tallguy bạn đã hoàn thành các toà nhà một cách chi tiết.  
    Nhưng bạn vẫn đang thiếu một số ngôi nhà  
    ở phía trên bên trái,  
    Tôi đã bổ sung một số thông tin nhưng chúng vẫn chưa đầy đủ.  

Điều này đặc biệt hữu ích khi xác nhận hoặc bổ sung vào tác phẩm trước của người khác - bạn có thể cung cấp phản hồi, cảm ơn hoặc nhiều hơn.  

+ Bạn có thể muốn cung cấp liên kết đến một trang web có thể giúp người lập bản đồ, chẳng hạn như  <http://learnosm.org/vi/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ Lưu ý rằng nhiều người từ khắp nơi trên thế giới sẽ tham gia, do đó, thích ngôn ngữ đơn giản, rõ ràng. Nếu bạn gặp các nhận xét bằng các ngôn ngữ khác, các công cụ như google translate rất có hiệu quả.


### Tham chiếu đến một ô vuông làm việc cụ thể khi gửi một email  

Nếu bạn cần gửi một tin nhắn, chẳng hạn như một email hoặc một tin nhắn của IRC, và bạn đang truy vấn một cái gì đó liên quan đến một hình vuông cụ thể trong một dự án (có lẽ bạn cần giúp đỡ xác định cái gì đó từ hình ảnh vệ tinh):  

1. Nhấp vào hình vuông liên quan  
2. Nhấp vào thanh địa chỉ trong trình duyệt web của bạn, trong đó sẽ hiển thị một cái gì đó tương tự như  'http://tasks.hotosm.org/project/713#task/259'  
3. Đánh dấu bằng chuột tất cả các văn bản trong thanh địa chỉ, hoặc sử dụng các phím tắt **Ctrl+A** để chọn tất cả các văn bản, sau đó sử dụng phím tắt **Ctrl+C** để sao chép văn bản  
4. Trong email, tin nhắn của IRC, hoặc tin nhắn khác,  
    - một trong hai, click chuột phải và dán,  
    - hoặc phím tắt  **Ctrl+V**, để dán liên kết vào tin nhắn. 


### Nhận trợ giúp trực tuyến 

![IRC_help][] 

Từ người quản lý tác vụ;  
1. Nhấp vào **OSM HOT IRC Channel #hot**  
2. Nhập tên người dùng (tên người dùng OSM của bạn?), Hoặc sử dụng các ký tự cài sẵn  
3. Ở cuối danh sách kéo xuống chọn **hot**  

![IRC using][]  

- Ở bên phải màn hình là danh sách người dùng đang trực tuyến.  
- Nhập tin nhắn của bạn vào hộp ở dưới cùng bên trái của màn hình (đôi khi điều này bị tạm thời bị che khuất bởi văn bản khác, nhưng điều này sẽ biến mất khi bạn chọn hộp.  
- Để chỉ dẫn một thông điệp cho một cá nhân cụ thể, hãy bao gồm tên người dùng của họ từ danh sách bên phải trong tin nhắn của bạn. Nhập, sau đó sử dụng phím trả lại để gửi nhận xét của bạn. Hệ thống này 'sống' vì vậy chờ đợi câu trả lời - tên người dùng của bạn sẽ thường được sử dụng trong thư trả lời để cho bạn nhận xét về bạn. Thông thường bạn sẽ nhận được thư trả lời trong vòng vài giây, vì vậy hãy chờ.  
- Một hệ thống đơn giản khác có thể được tìm thấy tại [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Thông tin thêm về cách sử dụng IRC với OpenStreetMap có thể được tìm thấy tại [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Sử dung một IRC khác, bạn có thể chọn (Server=irc.oftc.net, and channel=#hot)  


### Gợi ý và mẹo chỉnh sửa  

Bây giờ bạn đã hiểu rõ Task Manager là gì, và một số chức năng khác mà nó hỗ trợ. Không giống như chỉnh sửa thông thường, công cụ này thường được sử dụng cho các dự án quan trọng thời gian với nhiều người tham gia - điều này có thể khác một chút so với những gì bạn đã quen  

**Một số lời khuyên chung để lưu ý khi làm việc trong công cụ này:**  

* Tránh lập bản đồ ở bên ngoài hình vuông của bạn - những người lập bản đồ khác có thể đang làm việc trong khu vực đó, dẫn đến nỗ lực trùng lặp. Bạn có thể vẽ bản đồ các đối tượng như các tòa nhà chồng lên nhau một ranh giới, nhưng tránh đi xa hơn - tải lên ngay sau khi vẽ bản đồ ở đường biên.  
* Mở rộng các tuyến đường, suối hoặc các tính năng khác một chút qua các ranh giới - điều này cho phép người lập bản đồ kế tiếp tiếp tục ở nơi bạn dừng lại nhưng tải lên ngay khi bạn hoàn tất chỉnh sửa.  
* Nếu bạn nghi ngờ về tính năng cụ thể, hãy sử dụng phần bình luận để đặt câu hỏi hoặc kiểm tra wiki.  
* Nếu bạn mắc phải một sai lầm nghiêm trọng - ví dụ như xóa một tính năng hoặc quan hệ chính - sử dụng IRC hoặc hộp nhận xét để yêu cầu những người lập bản đồ khác giúp bạn hoàn nguyên điều này. Cố gắng để bao gồm các changeset, hoặc mô tả về những gì đã xảy ra. Là một nhiệm vụ cộng tác, nhiều người lập bản đồ khác đang ở đây để giúp đỡ - điều quan trọng là nhớ mọi người đôi khi mắc phải lỗi.  
* Đừng ngần ngại yêu cầu phản hồi - những người lập bản đồ xác nhận công việc của bạn có thể ngắn gọn hoặc đúng điểm, nhưng nếu họ biết rằng bạn có thể giao tiếp với bạn, thì kết quả thường tốt hơn cho tất cả những người tham gia. Có thể khó giao tiếp bằng ngôn ngữ khác và bạn có thể dễ dàng xuất hiện đột ngột khi bạn phải dịch cũng như truyền thông điệp bằng một ngôn ngữ mà bạn không thông thạo.  
* Bạn không được chứng thực công việc của mình - đôi mắt thứ hai sẽ luôn dẫn đến việc lập bản đồ chất lượng tốt hơn.  
* Đừng lo lắng nếu người lập bản đồ khác ngắn gọn khi xác nhận tác phẩm của bạn - như bạn, họ chỉ muốn đảm bảo rằng tất cả dữ liệu được lập bản đồ một cách chính xác. Phản hồi luôn luôn là về công việc còn lại, chứ không phải sự chỉ trích về những nỗ lực của bạn cho đến thời điểm này.  


[Tasking Manager Login]: /images/coordination/tasking_manager_image01.png
[Tasking Manager Username_list]: /images/coordination/tasking_manager_image02.png
[Authorizing access to OSM account by the Tasking Manager]: /images/coordination/tasking_manager_image03.png
[Job description]: /images/coordination/tasking_manager_image04.png
[Picking a task]: /images/coordination/tasking_manager_image05.png
[Assigned task square]: /images/coordination/tasking_manager_image06.png
[Editing options]: /images/coordination/tasking_manager_image07.png
[IRC_help]: /images/coordination/tasking_manager_image08.png
[IRC using]: /images/coordination/tasking_manager_image09.png
[Tasking Manager About]: /images/coordination/tasking_manager_image011.png
[Tasking Manager Languages]: /images/coordination/tasking_manager_image012.png