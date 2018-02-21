---
layout: doc
title: JOSM thêm ảnh định dạng tms, wms or wmts
permalink: /vi/josm/josm-adding-imagery/
lang: vi
category: josm
---

JOSM - Thêm ảnh hàng không
================

> Hướng dẫn này có thể được tải xuống tại đây: [josm_adding_imagery_vi.odt](/files/josm_adding_imagery_vi.odt) or [josm_adding_imagery_vi.pdf](/files/josm_adding_imagery_vi.pdf)  
> Cập nhật: 2017-11-8  

Không phải tất cả hình ảnh trên không đều nằm trong trình đơn hình ảnh của JOSM, nhưng bạn có thể dễ dàng thêm nếu bạn được cung cấp thông tin liên kết  

Trong ví dụ này, chúng tôi đang làm việc từ [HOT Tasking Manager](http://tasks.hotosm.org/) và hình ảnh cần thiết để hoàn thành một trong những dự án cần phải được thêm vào JOSM theo cách thủ công. Nguyên tắc của việc thêm liên kết hình ảnh là giống như bất kỳ chỉnh sửa bạn đang làm việc trên, miễn là bạn được cung cấp với các liên kết. Cũng có những khi liên kết không hoạt động như mong đợi và có thể cần phải thêm hình ảnh bằng tay, nếu bạn có thể có được thông tin liên kết.  

Từ thẻ thông tin Trình quản lý tác vụ/ Tasking Manager, hãy sao chép tất cả phần Hình ảnh.  

![TM Imagery][]

Đi tới trình đơn Preferences của JOSM (**Edit / Preferences**, hoặc trên máy Mac **JOSM / Preferences**)  

![Preferences WMS TMS 1][]

Nhấp chuột vào icom ![WMS_TMS_button][]{: height="24px"}, trong trường hợp này là icon ![+TMS_button][]{: height="24px"} icon.  

> URL của TMS thường có {x}{y} và {z} trong đó, URL WMS thường dài và có {width} và {height}, URL WMTS thường có WMTSCapabilities.xml trong đó. Nếu bạn không chắc chắn loại URL hình ảnh nào bạn có, bạn có thể thử thêm chúng dưới dạng các loại khác nhau để xem loại hình nào hoạt động.  

![Preferences WMS TMS 3][]

**Box 1.**/ Hộp 1: Dán thông tin bạn đã sao chép từ thẻ thông tin Trình quản lý Tác vụ vào hộp đầu tiên trên cửa sổ. JOSM sẽ xác minh nó và nếu đúng là quá trình xác minh sẽ lặp lại thông tin trong hộp 3 (xem bên dưới). Nếu nó không xuất hiện trong hộp 3 trong vòng vài giây, hãy kiểm tra xem bạn đã vô tình bỏ lỡ các chữ cái hoặc vô tình thêm 'khoảng trống' ở đầu hoặc cuối - chỉ cần liên kết thực tế phải được sao chép và dán.  
**Box 2.**/ Hộp 2: Thông thường để trống, trừ khi bạn đã nhận được bất kỳ hướng dẫn khác.  
**Box 3.**/ Hộp 3: bây giờ chứa một bản sao của Hộp 1, tạo ra bởi quá trình xác minh trong JOSM.  
**Box 4.**/ Hộp 4: Nhập tên cho lớp - như hình ảnh của tôi đã được xác định trong Tasking Manager là "Ảnh vệ tinh cho dự án này được cung cấp bởi Digital Globe thông qua dịch vụ Vivid của họ/ Satellite imagery for this project is kindly provided by Digital Globe through their +Vivid service." Tôi đã đặt tên cho lớp của tôi là "Digital Globe + Vivid".  

![Preferences WMS TMS 4][]

Nhấp chuột vào nút ![OK_button][]{: height="24px"}, hình ảnh bạn đã thêm sẽ xuất hiện ở cuối danh sách - bạn có thể phải cuộn xuống để thấy nó.  

![Preferences WMS TMS 5][]

Nhấp chuột vào nút ![OK_button][]{: height="24px"} để đóng cửa sổ tùy chọn và trở lại JOSM. Khi bạn cần sử dụng hình ảnh, hãy nhấp vào menu **Imagery** phía trên và chọn từ danh sách xếp theo chữ cái. Ngoài ra, **Alt + I** sẽ hiển thị trình đơn hình ảnh (Các phím tắt này có thể khác nhau tùy theo cài đặt ngôn ngữ).  

![Preferences WMS TMS 6][]

**Tip** Nếu hình ảnh không tải, hãy kiểm tra cách hình ảnh xuất hiện trong danh sách. Trong ví dụ này, **tms** xuất hiện 2 lần. Bạn có thể chỉnh sửa liên kết trong josm để nó chỉ xuất hiện một lần, có thể sẽ giải quyết được vấn đề.

![TMS TMS][]

Thêm máy chủ WMS
===========

Thêm một máy chủ WMS là rất giống với việc thêm một máy chủ TMS, với một sự khác biệt quan trọng. Máy chủ WMS thường cung cấp nhiều lớp hình ảnh để chọn và bạn phải chọn một lớp khi thêm máy chủ WMS vào tuỳ chọn hoặc chỉ định rằng bạn sẽ chọn một lớp để sử dụng bất cứ khi nào bạn chọn máy chủ từ trình đơn Hình tượng trong phần chính Giao diện JOSM.

Để thêm máy chủ WMS mở hộp thoại "JOSM imagery preferences" như được hiển thị ở trên, nhưng lần này nhấp vào nút "Thêm WMS" ![wms_add_button][]

Hộp thoại xuất hiện sẽ giống như hộp thoại dưới đây:
![wms_entry_dialog_numbered][]

**Box 1.**/ Hộp 1: Nhập URL của máy chủ WMS vào trường này. Đây chỉ là một URL điển hình bắt đầu bằng http hoặc https  
**Button 2.**/ Hộp 2: Sau khi nhập URL, hãy nhấp vào nút "Get Layers". JOSM sẽ liên lạc với máy chủ WMS và nhận được một danh sách các lớp có sẵn từ máy chủ đó.  
**Box 3.**/ Hộp 3: Đây là nơi danh sách các lớp có sẵn sẽ được hiển thị. Có thể có các thư mục cần mở rộng để xem các lớp có sẵn.  
**Pop-down Menu 4.**/ Danh sách thả xuống 4: Image Format/ Định dạng Hình ảnh - thường sẽ được tự động chọn sau khi bạn nhấp vào một trong các lớp ở **Box 3/ Hộp 3** nó có thể cung cấp nhiều loại định dạng hình ảnh , nhưng nói chung jpeg hoặc png là định dạng.  
**Box 5.**/ Hộp 5: Điều này được tạo tự động sau khi bạn chọn một lớp trong **Box 3/ Hộp 3**. Nó sẽ dài và phức tạp, thông thường nó đã đủ tốt và có nhiều thông tin và cũng không cần chỉnh sửa.  
**Box 6.**/ Hộp 6: Nhập tên cho máy chủ hoặc lớp. Tên mặc định sẽ được điền vào dựa trên URL, nhưng bạn có thể nhập một tên có ý nghĩa hơn. Đây là tên sẽ xuất hiện trong trình đơn Hình ảnh JOSM khi bạn muốn thêm lớp vào bảng điều khiển lớp của mình trong giao diện JOSM thông thường.  

> Ví dụ về máy chủ WMS với nhiều lớp thú vị: http://sedac.ciesin.columbia.edu/geoserver/wms  

![wms_select_layer_highlighted][]  
Đảm bảo bạn thực sự nhấp vào một lớp nếu muốn menu Imagery luôn tải cùng một lớp. Trong ví dụ trên, khi lớp được chọn từ menu Imagery, nó sẽ luôn tải lớp "Cơ sở dữ liệu thế giới của Khu vực được bảo vệ/ World Database of Protected Areas".

Nếu bạn muốn chọn lớp để tải mỗi lần bạn chọn máy chủ từ menu Imagery và có thể tải nhiều lớp từ máy chủ lưu trữ một cách dễ dàng, chỉ cần đánh dấu vào hộp chọn "Store WMS endpoint only". Điều đó cũng sẽ vô hiệu hoá trường chọn lớp và xác minh URL.

![wms_end_point_only_highlighted][]  

Nhấp chuột vào nút ![OK_button][]{: height="24px"}, hình ảnh bạn đã thêm sẽ xuất hiện ở cuối danh sách - bạn có thể phải cuộn xuống để thấy nó.  

![Preferences WMS TMS 5][]

Nhấp chuột vào nút ![OK_button][]{: height="24px"} để đóng cửa sổ tùy chọn và trở lại JOSM. Khi bạn cần sử dụng hình ảnh, hãy nhấp vào menu **Imagery** phía trên và chọn từ danh sách xếp theo chữ cái. Ngoài ra, **Alt + I** sẽ hiển thị trình đơn hình ảnh (Các phím tắt này có thể khác nhau tùy theo cài đặt ngôn ngữ).  

![Preferences WMS TMS 6][]

[Preferences WMS TMS 1]: /images/josm/JOSM_TMS_1.png
[TM Imagery]: /images/josm/JOSM_TMS_2.png
[WMS_TMS_button]: /images/josm/josm_preferences-wms-tms.png
[+TMS_button]: /images/josm/+TMS.png
[OK_button]: /images/josm/josm_OK_button.png
[Preferences WMS TMS 3]: /images/josm/JOSM_TMS_3.png
[Preferences WMS TMS 4]: /images/josm/JOSM_TMS_4.png
[Preferences WMS TMS 5]: /images/josm/JOSM_TMS_5.png
[Preferences WMS TMS 6]: /images/josm/JOSM_TMS_6.png
[TMS TMS]: /images/josm/JOSM_TMS_TMS.png
[wms_add_button]: /images/josm/wms_add_button.jpg
[wms_select_layer_highlight]: /images/josm/wms_select_layer_highlight.jpg
[wms_entry_dialog_numbered]: /images/josm/wms_entry_dialog_numbered.jpg
[wms_end_point_only_highlighted]: /images/josm/wms_end_point_only_highlighted.jpg
[wms_select_layer_highlighted]: /images/josm/wms_select_layer_highlighted.jpg