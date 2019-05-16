---
layout: doc
title: JOSM Plugins
permalink: /vi/josm/josm-plugins/
lang: vi
category: josm
---

JOSM Plugins
============

> Cập nhật: 2017-11-06  

Khi bạn trở nên thành thạo hơn trong kỹ thuật chỉnh sửa bản đồ, bạn có thể muốn sử dụng các tính năng bổ sung của JOSM để cải thiện kỹ năng lập bản đồ của mình. JOSM cho phép bạn cài đặt nhiều Công cụ bổ sung (Plugin) để thêm nhiều chức năng cho phần mềm.  

Trong phần này, chúng tôi sẽ giới thiệu cách cài đặt plugin và một số plugin hữu ích nhất có sẵn.

Cài đặt các Plugin
-------------------
Bất cứ lúc nào bạn muốn cài đặt thêm plugin mới, vào menu **Edit \> Preferences** và chọn thẻ **Plugins**.  

![Plugins][]

* Nếu bạn không nhìn thấy một danh sách các plugin có sẵn, nhấp **Download List**.  
* Để cài đặt một plugin, bạn chỉ cần đánh dấu hộp bên cạnh nó và nhấn OK ở dưới cùng.  
* Cuối cùng, với một số phiên bản của JOSM, bạn có thể phải khởi động lại JOSM khi cài đặt các plugin mới.

Một số plugin thường dùng của chúng ta là:

1. **[buildings_tools](/en/josm/josm-more-plugins/#the-buildings-tools-plugin):** Nếu bạn vẽ rất nhiều tòa nhà, công cụ này sẽ rất hữu ích cho bạn, khiến công việc trở nên nhanh và dễ dàng hơn  

2. **DirectUpload:** Nếu bạn thu thập rất nhiều tuyến GPS và muốn lưu chúng trên cơ sở dữ liệu OSM, plugin này sẽ giúp bạn dễ dàng thực hiện.  

3. **editgpx:** Nếu bạn muốn tải tuyến GPS từ thiết bị Garmin, bạn có thể cần plugin này. OSM sẽ không chấp nhận các tuyến GPS được lưu trên thẻ nhớ ngoài trong Garmin, nhưng plugin này có thể sửa các tệp để chúng có thể được tải lên.  

4. **fieldpapers:** Plugin này cho phép bạn nạp các bản đồ hiện trường (Field Papers) được quét vào JOSM.  

5. **imagery_offset_db:** Plugin này cho phép bạn kết hợp với những người lập bản đồ khác khi hình ảnh vệ tinh Bing hơi lệch một chút. Vấn đề này được đề cập chi tiết hơn trong phần sau.  

6. **print:** Thêm chức năng in bản đồ, trong trường hợp bạn muốn in bản đồ của một khu vực mà không cần thiết bản in ra phải thật đẹp.  

7. **[utilsplugin2](/en/josm/josm-more-plugins/#more-selection-tools):** Bổ sung nhiều công cụ hữu ích và menu trong JOSM dành cho người dùng nâng cao. Nội dung này sẽ được giới thiệu chi tiết hơn trong [chương sau](/en/josm/josm-more-plugins)  



<!-- The remainder of this section needs to be edited, and/or moved to other sections,
    Tạm thời đặt trong ghi chú


- [Mirrored Download]({{site.baseurl}}/en/beginner/josm-plugins/#mirrored-download) (allows you to download more OSM data)
- [Direct Upload]({{site.baseurl}}/en/beginner/josm-plugins/#direct-upload) (allow you to upload GPS tracks)
- [Editgpx]({{site.baseurl}}/en/beginner/josm-plugins/#edit-gpx) (allows you to edit GPX files)
- [Print]({{site.baseurl}}/en/beginner/josm-plugins/#print)

Chúng tôi cũng khuyến cáo nên tải các plugin sau đây,
những công cụ được sử dụng trong các chương tiếp theo

- FieldPapers
- Buildings\_tool
- Utilsplugin2

![Restart JOSM][]

Nhấp chuột vào “Restart JOSM” và xem JOSM khởi động lại và tải các công cụ.

Mirrored Download/ Tải dữ liệu từ các máy chủ khác
-----------------

![Mirrored Download][]

__Mirrored Download__sẽ làm cho việc tải xuống dữ liệu OSM để chỉnh sửa nhanh hơn.
Thay vì lấy dữ liệu từ Máy chủ trung tâm của OSM, nó cho phép chúng ta lấy nó từ một "bản sao",
đó là một chính xác bản sao của dữ liệu
nhưng ở một vị trí có thể truy cập nhanh hơn.

Khi công cụ này được cài đặt (và bạn đã khởi động lại JOSM),
bạn sẽ thấy một mục mới trong menu File là “Download from OSM mirror...”

![Download from OSM Mirror][]

Tải xuống dữ liệu sẽ hoàn toàn giống như bạn làm trước đây,
nhưng nó sẽ nhanh hơn rất nhiều

Direct Upload/ Tải lên trực tiếp
-------------

![Direct Upload][]

__DirectUpload__ Tải lên trực tiếp vào OSM các tuyến GPX
thông qua JOSM (các thông tin bổ sung có trong phần **Appendix/ Phụ lục**).
Khi các plugin được cài đặt (và bạn đã khởi động lại JOSM),
Bạn sẽ thấy một mục mới là “Upload traces” dưới menu "Tools”.

![Upload Traces Item][]

Khi bạn nhấp chuột vào nút “Upload Traces”, cửa sổ sau sẽ được mở:

![Upload Traces Window][]

Đặt từ khoá (tách nhau bằng dấu phẩy, không có dấu cách) có liên quan đến tuyến GPS của bạn
trong hộp "Tags (comma delimited)/ Thẻ (phân cách bằng dấu phẩy)".
Ví dụ: "Quốc gia, vùng, thành phố, khu phố, tên đường".
Tiếp theo, cung cấp mô tả về các thẻ của bạn.
Một danh sách thả xuống sẽ cho phép bạn sử dụng lại các thẻ cũ và mô tả.
Cuối cùng, chọn kiểu hiển thị bạn muốn cho các tuyến của mình.
Có bốn cấp độ từ cá nhân đến nhận dạng (tất cả được giải thích dưới đây trong [Phụ lục]{{site.baseurl}}/learnosm/vi/).

Nhấp vào Tải lên Theo dõi. Nếu bạn không kết nối với tài khoản OSM của mình,
bạn sẽ phải thực hiện ngay bây giờ.

Sau khi tải lên thành công, vùng văn bản sẽ hiển thị trạng thái "OK"
và nút "Tải lên tuyến" sẽ không thể nhấp được.
Thông tin thêm về plugin này và tải lên GPS có trong [Phụ lục]({{site.baseurl}}/learnosm/vi/).

Edit gpx/ Chỉnh sửa file gpx
--------

![Edit Gpx][]

**EditGpx** cho phép bạn chuẩn bị các tuyến GPX đã lưu trước khi tải chúng lên OSM.
Thông thường các tuyến có phần mà bạn muốn xóa.
Do đó, công cụ này sẽ xóa các điểm này đã nhanh chóng và
ẩn các thông tin về thời gian của tuyến.

Khi plugin đã được cài đặt (và bạn đã khởi động lại JOSM),
bạn sẽ thấy công cụ mới này trong thanh công cụ ở bên trái.

![Edit Gpx Tool Icon][]

1. Mở file GPX trong JOSM!

![Open GPX File][]

2. Nhấp vào nút tạo mới ở menu phía trái 

![Edit Gpx Tool Icon][]

và dữ liệu GPX sẽ được nhập vào lớp mới là EditGpx.
Tất cả các nút của tuyến sẽ được làm nổi bằng màu vàng.

![GPX Nodes All][]

3. Bây giờ đánh dấu các điểm (bằng cách nhấp chuột)
hoặc chọn cả vùng (bằng cách vẽ một hình chữ nhật) bao ngoài các điểm mà bạn muốn xóa.
Điểm nổi bật màu vàng sẽ biến mất.

![GPX Nodes Selected][]

4. Phải chuột vào tên của lớp và chọn \<\<Convert to GPX layer\>\>
trong menu cảm ngữ cảnh.

5. Bây giờ, bạn có thể lưu lớp GPX vào file
hoặc tải dữ liệu lên OSM,
ví dụ như sử dụng plugin [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)).

In ấn
-----

![Print Plugin][]

Nếu bạn muốn nhanh chóng và dễ dàng để in bản đồ trong khi đang chỉnh sửa trong JOSM,
hãy cài đặt plugin __print__.
Mặc dù bạn sẽ không thể làm bất cứ điều gì phong cách với bản in của bạn,
đây là một cách tốt để in nhanh chóng và dễ dàng.
Khi plugin đã được cài đặt, một mục mới sẽ có trên menu File với tên "Print ..."

![Print Menu Item][]

Nhấp chuột vào mục này, hộp hội thoại in sẽ hiện ra giống như sau:

![Print Dialog][]

Ở đây bạn có thể thay đổi cài đặt máy in. Nếu bạn không nhìn thấy bất kỳ nội dung nào trên trang,
hãy chọn hộp bên cạnh "Xem trước bản đồ" ở bên phải.
Phóng to hoặc thu nhỏ trên bản đồ bằng cách thay đổi số trong hộp "Thu phóng".
Tăng độ phân giải bằng cách thay đổi số bên cạnh "ppi".
Khi bạn đã hoàn tất chỉnh sửa cài đặt, hãy nhấp vào "In."

Tóm lược
-------

Đây là một số plugin bổ sung có sẵn cho JOSM.
Vui lòng tiếp tục khám phá nhiều plugin khác.
Như bạn đã thấy, trình đơn Tùy chọn có một mô tả ngắn về mỗi plugin
và bạn có thể mở trang web với nhiều thông tin hơn
bằng cách nhấp vào liên kết "More info/ Thông tin thêm ..." bên cạnh.

![More Info Link][]

Chúc may mắn!

Appendix/ Phụ lục
--------

Chi tiết về DirectUpload
--------------------

![Direct Upload Plugin][]

Thêm các tuyến và điểm GPS của bạn vào máy chủ OSM rất hữu ích
vì nhiều lý do.
__(Nếu bạn không muốn các điểm GPX của mình được người khác nhìn thấy, bạn không cần phải đọc phần này. Bạn có thể đơn giản là sử dụng các file GPX của mình trong JOSM và lưu nó trên máy của mình).
Trước hết, tuyến GPS là cách hữu ích nhất để thu thập và
hiệu chỉnh địa lý các đối tượng trong OSM.
Xem chương [Ảnh hàng không](/vi/josm/aerial-imagery/) các thiết bị GPS có độ chính xác
cao hơn hình ảnh vệ tinh và
do đó là một công cụ hữu ích để kiểm tra xem hình ảnh có thể hiệu chỉnh như thế nào.
Sử dụng nhiều bản ghi GPS (số lượng tuyến càng lớn,
khả năng xác định vị trí địa lý càng lớn) cho phép bạn xác định hình nền có thể bị sai lệch hay không.

Việc tải lên các bài hát lên máy chủ cho phép chia sẻ thông tin nhiều hơn.
Nó cho phép những người không có quyền truy cập vào lĩnh vực,
chỉ đơn giản bởi vì họ không sống trong khu vực đó hoặc
họ không có quyền truy cập vào một thiết bị GPS, để giúp đỡ trong việc số hóa.
Có hai cách để tải lên các dấu vết của bạn: 1) JOSM Plugin hoặc 2) trên trang web chính của OSM.

> Lưu ý: Các điểm tham chiếu GPS không thể được tải lên trực tiếp vào cơ sở dữ liệu OSM.
> Tuy nhiên, chúng có thể được chuyển thành các bài hát và sau đó được tải lên tạm thời,
> ví dụ, vì vậy chúng có thể được hiển thị dưới dạng các đối tượng nền trong Potlatch.

Sau khi bạn mở tệp GPX của mình trong JOSM và đi tới "Tools/ Công cụ" và
nhấp vào "Upload traces/ Tải lên tuyến".
Mô tả tệp GPX, viết một số thẻ và khả năng hiển thị.
Đối với khả năng hiển thị, bạn có thể chọn cá nhân, có thể theo dấu, công khai hoặc có thể nhận dạng được.

1.  **Identifiable/ Có thể nhận dạng**: Tuyến GPS của bạn sẽ được hiển thị công khai
    trong Danh mục tuyến GPS công cộng.
    Những người dùng khác có thể tải xuống các dữ liệu tuyến thô
    kết nối với tên người dùng của bạn.
    Thẻ thời gian của các điểm trên tuyến cũng có thể truy cập bởi các API GPS công cộng.

2.  **Public/ Công khai**: Tuyến GPS của bạn sẽ được hiển thị công khai
    trong Danh mục tuyến GPS công cộng.
    Những người dùng khác có thể tải xuống các dữ liệu tuyến thô
    từ danh mục tuyến công khai cùng với các thẻ thời gian được lưu trữ trong đó
    Tuy nhiên, dữ liệu truy cập bởi các API sẽ không tham chiếu đến tên đăng nhập của bạn hoặc thẻ thời gian
    mặc dù các điểm được sắp xếp theo trình tự thời gian.

1.  **Trackable/ Có thể theo dấu**: Các tuyến sẽ **không** được công khai trong bất kỳ danh mục công khai nào,
    nhưng các điểm trên tuyến vẫn được truy cập
    bởi các API GPS công cộng **với thẻ thời gian**.
    Những người khác có thể tải xuống tuyến
    nhưng nó sẽ không được tham chiếu đến tên đăng nhập của bạn.

2.  **Private/ Cá nhân**: Các tuyến sẽ **không** được công khai trong bất kỳ danh mục công khai nào,
    Các điểm trên tuyến sẽ được truy cập bởi các API GPS công cộng theo đúng trình tự thời gian
    nhưng **không có thẻ thời gian**.

![DirectUpload Traces Options][]

Tải lên các tuyến GPS Traces
---------------------------

1. Đi đến
[http://www.openstreetmap.org/](http://www.openstreetmap.org/) và đăng nhập.

2. Chọn "GPS Traces" ở phía tay trái của banner trên đầu trang.

![Left Banner][]

3. Chọn
[upload a trace/ Tải lên một tuyến](http://www.openstreetmap.org/trace/create).
Tại đây, bạn cũng có thể **See just your traces/ chỉ quan sát các tuyến của bạn** để xem xét các tuyến GPS đã tải lên trước đây.  

4. Tìm tệp của bạn trong "Choose File/ Chọn tệp".
Gắn nhãn nó trong hộp Description box/ Mô tả, nhập một số thẻ thông tin , và chọn hình thức trình chiếu.
Nếu bạn có nhiều tệp tin .gpx, bạn có thể nén chúng vào file zip và tải nó lên.
Nó sẽ được coi là một tệp gpx lớn và
chỉ có một mục nhập trong danh sách tuyến sẽ được tạo. 

![Online Upload Traces Options][]

5. Nhấp chuột vào *Upload*.

  File dữ liệu sẽ được tải lên OSM server,
và ở trong hàng đợi để chờ được đưa vào CSDL.

[Plug Icon]: /images/josm/josm-plugins_image00_plug-icon.png
[Restart JOSM]: /images/josm/josm-plugins_image01_restart-josm.png
[Mirrored Download]: /images/josm/josm-plugins_image02_mirrored_download.png
[Download from OSM Mirror]: /images/josm/josm-plugins_image03_download-from-osm-mirror.png
[Direct Upload]: /images/josm/josm-plugins_image04_direct-upload.png
[Upload Traces Item]: /images/josm/josm-plugins_image05_upload-traces-item.png
[Upload Traces Window]: /images/josm/josm-plugins_image06_upload-traces-window.png
[Edit Gpx]: /images/josm/josm-plugins_image07_edit-gpx.png
[Edit Gpx Tool Icon]: /images/josm/josm-plugins_image08_edit-gpx-tool-icon.png 
[Open GPX File]: /images/josm/josm-plugins_image09_open-gpx-file.png
[GPX Nodes All]: /images/josm/josm-plugins_image10_gpx-nodes-all.png
[GPX Nodes Selected]: /images/josm/josm-plugins_image11_gpx-nodes-selected.png
[Print Plugin]: /images/josm/josm-plugins_image12_print-plugin.png
[Print Menu Item]: /images/josm/josm-plugins_image13_print-menu.png
[Print Dialog]: /images/josm/josm-plugins_image14_print-dialog.png
[More Info Link]: /images/josm/josm-plugins_image15_more-info-link.png
[Direct Upload Plugin]: /images/josm/josm-plugins_image16_direct-upload-plugin.png
[DirectUpload Traces Options]: /images/josm/josm-plugins_image17_directupload-traces.png
[Left Banner]: /images/josm/josm-plugins_image18_left-banner.png
[Online Upload Traces Options]: /images/josm/josm-plugins_image19_online-upload-traces.png

-->


[Plugins]: /images/josm/josm-plugins_image00_plug-icon.png
