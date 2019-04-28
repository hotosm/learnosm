---
layout: doc
permalink: /vi/coordination/tm-whats-new-for-validators/
lang: vi
title: Tính năng mới dành cho Người kiểm duyệt trong Trình quản lý tác vụ phiên bản 3
category: coordination
date: 0500-10-21 12:00:00
---

# Tính năng mới dành cho Người kiểm duyệt trong Trình quản lý tác vụ phiên bản 3

> Hướng dẫn này có thể được tải tại đây [tm3-news-for-validators_vi.odt](/files/tm3-news-for-validators_vi.odt) or [tm3-news-for-validators_vi.pdf](/files/tm3-news-for-validators_vi.pdf)  

## Hồ sơ người dùng của bạn

Tasking Manager 3 có một số tính năng mới hướng đến cộng đồng để xác nhận. Vui lòng thực hiện **hoạt động đầu tiên trong Tasking Manager mới, hãy truy cập Hồ sơ người dùng của bạn**, có thể được chọn từ trình đơn thả xuống popdown dưới tên người dùng OpenStreetMap (OSM) của bạn ở góc trên bên phải.

![profile][]

1. **Địa chỉ Email ** - TNgười quản lý Tác vụ bây giờ có thể gửi email bất cứ khi nào người dùng nhận được một tin nhắn trong Tasking Manager. Điều này rất quan trọng đối với những người thực hiện xác nhận. Các nhận xét còn lại khi xác minh lập bản đồ hiện có nhiều khả năng được nhìn thấy bởi người mà công việc bạn đang xác nhận. Hãy chắc chắn **thêm địa chỉ email** của bạn vào hồ sơ của bạn.

2. **Vai trò xác thực** - - Các dự án có thể tùy ý yêu cầu các trình xác nhận có kinh nghiệm để xác nhận bản đồ dự án. Mặc dù "Mức độ trải nghiệm Mapper" được đặt tự động dựa trên các thay đổi của OSM, nhưng vai trò trình xác nhận hiện chỉ được quản lý bởi các quản lý dự án theo cách thủ công. Danh sách ban đầu của folks có vai trò xác thực là không đầy đủ, vui lòng liên hệ với người quản lý dự án để có tên của bạn được thêm vào danh sách những người có vai trò kiểm chứng nếu bạn là một người kiểm chứng có kinh nghiệm và không có vai trò xác nhận trong Tasking Manage. **Lưu ý**: Vai trò của người xác thực là Quản lý tác vụ rộng và do đó chúng tôi yêu cầu các nhà quản lý dự án chỉ chỉ định vai trò này cho người xác nhận có xác nhận hợp lệ mà họ biết trực tiếp và có kiến thức về người xác nhận là đủ điều kiện để xác nhận bất kỳ dự án nào trong Tasking Manager.


## Quá trình xác thực

### Bước 1 - Lựa chọn nhiệm vụ

Xác nhận chỉ có thể được thực hiện bằng cách nhấp vào tab "Xác nhận" trên trang Dự án. Khi bạn đã chọn tab "Xác thực", bạn có ba tuỳ chọn chính để chọn các tác vụ để xác nhận hợp lệ.

![selection][]

1. **Lựa chọn nhiệm vụ cá nhân** để xác thực - Đây chính là cùng một quá trình tồn tại trong Tasking Manager hiện tại, bạn nhấn vào một nhiệm vụ hoặc sử dụng nút "Xác nhận một nhiệm vụ ngẫu nhiên" và sau đó nhấp vào "Bắt đầu Xác nhận" và khởi chạy trình soạn thảo của bạn.

2. **Chọn theo khu vực ** - Điều này cho phép bạn vẽ một đa giác trên bản đồ nhiệm vụ và nó sẽ chọn tất cả các tác vụ có sẵn để xác nhận. Sau đó bạn có thể nhấp vào "Bắt đầu Xác nhận" và nó sẽ khóa tất cả để xác nhận.

3. **Chọn theo người dùng ** -Một danh sách tất cả người dùng đã đóng góp cho dự án ở bên trái của trang cùng với một số thông tin về họ. Bạn có thể sắp xếp theo bất kỳ

- Mức độ - dựa trên số lượng các thay đổi OSM
- Đã đăng ký - Bao lâu họ đã sử dụng Quản lý Tác vụ.
- Xác nhận cuối cùng - Lần cuối cùng họ đã có một nhiệm vụ xác nhận

Sử dụng chuột để di chuột qua liên kết "Bắt đầu" sẽ làm nổi bật các tác vụ mà người dùng đã hoàn thành. Nhấp vào liên kết "Bắt đầu" sẽ khóa tất cả để xác nhận.

### Bước 2 - Xác nhận nhiều tác vụ

Chọn một tác vụ và chạy trình soạn thảo lựa chọn sẽ hoạt động giống như trong phiên bản trước của Tasking Manager, sự khác biệt thực sự là khi bạn chọn nhiều tác vụ và khởi chạy trình soạn thảo của bạn.

Có ít thay đổi trong trình soạn thảo iD, sự khác biệt lớn là thay vì chỉ nhìn thấy một phác thảo công việc, bạn sẽ thấy nhiều phác thảo công việc. Bởi vì iD chỉ tải dữ liệu cho các khu vực mà bạn phóng to và chấp nhận các phác thảo GPX, không có nhiều sự khác biệt trong quy trình công việc của bạn, chỉ cần thêm nhiều khu vực bị khóa trong Tasking Manager và nhiều khu vực hơn để xem xét bản đồ. 

Tuy nhiên, việc sử dụng JOSM giờ hơi khác. Khi phát hành JOSM, hai lớp dữ liệu OSM sẽ được tạo, một sẽ không thể tải lên và nó sẽ có đường viền của các tác vụ cần xác nhận và một sẽ là một lớp dữ liệu OSM trống, có thể chỉnh sửa. **Không có dữ liệu nào được tải xuống từ OSM**.

![multiple][]

Bạn sẽ sử dụng với các phác thảo nhiệm vụ làm hướng dẫn để tải dữ liệu OSM về lớp có thể chỉnh sửa và tiếp tục xác nhận tính hợp lệ như bình thường.

Khi bạn đã xác nhận hợp lệ, bạn có ba tùy chọn tiêu chuẩn, Đánh dấu tất cả hợp lệ, Đánh dấu tất cả không hợp lệ, hoặc Dừng xác nhận. Khi nhiều nhiệm vụ được kiểm tra ra để xác nhận, tùy chọn tương tự phải được chọn cho tất cả các nhiệm vụ kiểm tra ra. Bạn không thể, trong cùng một quy trình làm việc, đánh dấu một số là hợp lệ và đánh dấu những người khác là không hợp lệ..

Nếu bạn cần đánh dấu các nhiệm vụ có các trạng thái khác nhau sau khi xem lại, vui lòng kiểm tra chúng một cách riêng lẻ để đánh dấu chúng cho phù hợp.


## Các xác thực khác liên quan đến các công cụ

1. **Tab Câu hỏi và Bình luận ** - Đây là tab cho các câu hỏi và ý kiến cấp dự án. Người xác nhận nên xem xét các nhận xét trong tab đó và trả lời các câu hỏi nếu cần. Người xác nhận cũng có thể sử dụng tab đó và liên kết "Liên hệ Quản lý Dự án" để đưa ra các câu hỏi hoặc nhận xét cho người tạo ra dự án.

2. **Nhận xét cấp công việc** - Nút Hoạt động và thống kê ở góc trên bên phải của bản đồ các công việc bây giờ có một nguồn cấp dữ liệu về tất cả nhận xét về các tác vụ riêng lẻ. Người xác nhận nên xem lại danh sách nhận xét để giúp xác định các vấn đề và trả lời các câu hỏi.

[profile]:   /images/coordination/tm3_wnv_profile.png
[selection]: /images/coordination/tm3_wnv_selection.png
[multiple]:  /images/coordination/tm3_wnv_multiple.png