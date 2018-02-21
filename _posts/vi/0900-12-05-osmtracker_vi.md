---
layout: doc
title: OSMTracker
permalink: /vi/mobile-mapping/osmtracker/
lang: vi
category: mobile-mapping
---

OSMTracker
==============

> Hướng dẫn này có thể được tải xuống dưới dạng [OSMTracker_vi.odt](/files/OSMTracker_vi.odt) or [OSMTracker_vi.pdf](/files/OSMTracker_vi.pdf)  
> Reviewed 2016-02-08
  
**Bài viết này liên quan đến OSMTracker cho Android - có một sản phẩm tương tự có sẵn cho Windows Mobile. **  
OSMTracker cho phép tạo ra một dấu vết gpx của một hành trình, với bộ sưu tập của 'waypoints' dọc theo tuyến đường. Ghi âm giọng nói, hình ảnh và các ghi chú khác cũng có thể được ghi lại, và tất cả sẽ được định vị địa lý.

Quick Start
-----------

![OSMTracker_1][]  

1.  Nhấp vào dấu cộng để tạo track mới.  
2.  Màn hình sẽ thay đổi để hiển thị các nút - chờ cho đến khi chúng không còn màu xám, điều này cho biết GPS đã khắc phục.  
3.  Di chuyển tuyến đường của bạn, nhấn các nút thích hợp khi bạn là chính xác tại tính năng được lập bản đồ. Bạn cũng có thể tạo bản ghi âm, chụp ảnh và ghi chú bằng các nút.  
4.  Khi bạn hoàn tất, hãy nhấn vào biểu tượng đĩa mềm để lưu dấu vết và điểm đường của bạn.  
5.  Để chuyển track thành tập tin gpx, bấm và giữ nó trong danh sách, sau đó chọn tùy chọn thích hợp  
6.  Chuyển các track, hình ảnh và ghi vào máy tính của bạn và đọc từ chúng để cập nhật OSM.  


Cài đặt OSMTracker
-------------------------

Cài đặt OSMTracker từ [Cửa hàng Google Play] (https://play.google.com/store/apps/details?id=me.guillaumin.android.osmtracker).  
![OSMTracker Logo][]  
Bạn có thể tải xuống [gói ứng dụng gần đây nhất](https://drive.google.com/folderview?id=0BxxhTXmYjyeSSjg1MFhJWnJLams#list) bên ngoài Cửa hàng Google Play nếu cần.  


Cấu hình OSMTracker
------------------------

Bắt đầu OSMTracker và nhấn vào biểu tượng trình đơn trên thiết bị Android của bạn, sau đó chọn ** Cài đặt **.  

-  ** Thời lượng ghi âm ** - lựa chọn của bạn, nhưng 30 giây được sử dụng bởi tác giả.  
-  ** Bật âm thanh ** - đánh dấu vào ô này - phát ra tiếng bíp để cảnh báo bạn khi ghi âm bắt đầu và kết thúc.  
-  ** Xác thực lại **. Nút này sẽ được 'greyed out' cho đến khi bạn tải lên một tệp tin .gpx và OSMTracker được ủy quyền để tải track lên tài khoản OpenStreetMap của bạn.  
-  ** Cài đặt GPS ** Các phương pháp mà thiết bị Android của bạn sẽ sử dụng để xác định vị trí. Khuyến nghị cài đặt này là ** Độ chính xác cao ** và sau đó thiết bị sẽ sử dụng GPS, Wi-Fi và mạng di động để ước tính vị trí.  
-  ** Kiểm tra GPS khi khởi động ** Khi bạn khởi động OSMTracker, nếu GPS đã được tắt, chương trình sẽ nhắc bạn bật lại.
-  ** Bỏ qua đồng hồ GPS ** Nếu đánh dấu sẽ sử dụng đồng hồ bên trong thiết bị thay vì thời gian được cung cấp trong tín hiệu GPS.  
-  ** Khoảng thời gian đăng nhập GPS ** Chọn khoảng thời gian giữa ghi âm vị trí - để có độ chính xác tốt nhất, hãy chọn 0 hoặc 1, mỗi kết quả ghi lại mỗi giây.  

> Tần suất ảnh hưởng đến việc sử dụng pin, tuy nhiên khi sử dụng ứng dụng này. màn hình của bạn có thể là hầu hết thời gian, gps hoạt động, và bạn cũng có thể chụp ảnh và ghi âm - tất cả những điều này sẽ dẫn đến rò rỉ pin lớn và khuyên sử dụng mở rộng để sử dụng thiết bị với tăng sức mạnh.  

-  ** Thư mục lưu trữ ngoài (SD) ** Mặc định là / osmtracker  

> Hầu hết các thiết bị Android gần đây sẽ không cho phép lưu dữ liệu trong thẻ nhớ ngoài microSD hoặc thẻ SD. Mặc dù được gọi là 'lưu trữ ngoài' các track sẽ thực sự được ghi lại trong ** / lưu trữ / mô phỏng / 0 / osmtracker. **  

-   Một thư mục cho mỗi bài hát ** Được khuyến nghị vì điều này sẽ dẫn đến tất cả các bản ghi âm giọng nói, ảnh, ghi chú văn bản và dấu vết gpx đều được lưu trong cùng một thư mục, được đặt tên theo ngày tháng và thời gian tạo tập tin gpx.  
-  ** Tên tệp cho bài hát được đặt tên ** Các tùy chọn để bạn chọn nếu bạn có một sở thích để đặt tên cho tệp.  
-  ** Độ chính xác trong tệp GPX ** Được khuyến nghị - sẽ dẫn đến tên đường bao gồm một con số gần đúng phạm vi lỗi có thể xảy ra bằng mét. Ví dụ: * Đường nhỏ (4,0m) *. Thông tin này có thể rất hữu ích sau này khi cập nhật OSM và quyết định có nên di chuyển một tính năng hiện tại để phù hợp với dấu vết và điểm mới.  
-  ** Sử dụng xấp xỉ HDOP ** Liên quan đến các tính toán bổ sung để cải thiện độ chính xác vị trí (Horizontal Dilution of Precision).  
-  ** Xuất khẩu Compass Heading ** Xác định nếu và làm thế nào dữ liệu la bàn nên được xuất khẩu vào tập tin GPX.  
-  ** Nguồn ảnh mặc định ** Thông thường, bạn sẽ chụp ảnh bằng máy ảnh qua ứng dụng này, nhưng bạn có thể chọn sử dụng ảnh đã có trên điện thoại.  
-  ** Màn hình luôn luôn trên ** Chọn mục này nếu bạn liên tục nhấp vào nút, chụp ảnh hoặc ghi âm - nếu bạn không, hãy bỏ trống nó nên bạn phải chuyển màn hình mỗi lần, sử dụng ít hơn ắc quy.  
-  ** Chủ đề màn hình chính ** Tùy chọn để thay đổi độ tương phản và độ sáng màn hình nếu bạn gặp sự cố khi xem các nút.  
-  ** Nút Presets ** Bạn có thể thiết kế và cài đặt riêng của bạn của các nút và chọn để chúng hiển thị bằng cách sử dụng tùy chọn này. Để có một mô tả đầy đủ về chức năng này,[xem thêm](/vu/mobile-mapping/osmtracker/#button-presets).   
-  ** Bản đồ nền * Bằng cách nhấn và giữ một bản ghi đã được ghi lại, nếu tính năng này được chọn, bạn có thể hiển thị bản nhạc và ứng dụng sẽ tải xuống dữ liệu OpenStreetMap làm nền.  

> Điều này đòi hỏi một kết nối dữ liệu để tải xuống bản đồ. Bạn không cần phải sử dụng chức năng này trừ khi bạn muốn.  

-  ** Map Tile Provider ** Nếu bạn đã chọn tải dữ liệu bản đồ dưới dạng nền khi bạn hiển thị bản đồ, bạn có thể chọn bản đồ để sử dụng làm nền.  
-  ** Định hướng ** Bạn có muốn màn hình xoay, hoặc sử dụng nó trong phong cảnh hoặc chân dung?  

Danh sách Track
--------------

![OSMTracker_2][]  
Sau khi thực hiện cuộc khảo sát ban đầu của bạn, nhấp vào các nút, tạo ghi âm và chụp ảnh, khi bạn hoàn tất, hãy nhấp vào biểu tượng đĩa mềm để kết thúc tuyến đường của bạn. Bây giờ bấm và giữ theo dõi trong danh sách & các tùy chọn có sẵn:  

-  ** Theo dõi Theo dõi ** hữu ích khi bạn nhận ra bạn đã bỏ lỡ một chút!  
-  ** Hiển thị ** sẽ hiển thị các track, có thể với một bản đồ nền phụ thuộc vào kết nối dữ liệu của bạn và các tùy chọn bạn đã chọn trong ** Bản đồ nền **.  
-  ** Xuất theo GPX ** - cần thiết cho đường đua và điểm tham chiếu được sử dụng trong một chương trình chỉnh sửa.  
-  ** Tải lên OpenStreetMap ** Sử dụng tùy chọn này để tải lên dấu vết của bạn để OpenStreetMap - bạn sẽ cần phải có một tài khoản OpenStreetMap([How to obtain explained here](/vi/beginner/start-osm/)), và sẽ cần để ủy quyền cho ứng dụng này tải lên dấu vết vào tài khoản của bạn. Xem [Các tệp GPS theo dõi - gpx bên dưới](/vi/mobile-mapping/osmtracker/#gps-traces--gpx-files) để biết thêm thông tin về lý do tại sao những dấu vết này quan trọng đối với OpenStreetMap.  

> ** Chú ý, đừng xóa track của bạn ** Bạn chỉ tải lên các dấu vết cơ bản, chứ không phải là đường dẫn, hình ảnh, vv Giữ tất cả mọi thứ cho đến khi nó được chuyển đến máy tính để chỉnh sửa mục đích.  

- ** Xóa bỏ**. Tự giải thích.  


Button Presets
--------------

If you will be surveying for a particular reason, and the waypoint label you require is not available, you can create your own set of button presets prior to your surveying trip, load them into the phone and select them whilst surveying as & when you need them - several can be loaded in the phone & you may switch between them without stopping your recording. As the label you create is in the form of a personal note, it does not need to conform to the tags used within OpenStreetMap, and will not be uploaded to it. For instance, you may choose to have buttons labelled;  

- 1 family,  
- 2 families,  
- 3 families,  
- 4 families,  
- chiefs house,  
- 20% damaged,  
- 40% damaged,  
- 60% damaged,  
- 80% damaged,  
- destroyed,  
- unsuitable for lorry,  
- 4wd needed,  
- etc..  

For a full description on creating a button preset, see the [OSMTracker wiki section](https://github.com/nguillaumin/osmtracker-android/wiki/Custom-buttons-layouts). This is a [sample download file.](/files/R_of_Way.xml)  

![OSMTracker button presets][]  


Voice recordings, photograph & text image sizes  
-----------------------------------------------  

![OSMTracker recorded file sizes][]  

If file transfer at a later stage is an issue, be aware of the file sizes involved - as the screenshot shows photographs are very memory intensive compared to the gpx file or a 10 second voice recording.  


GPS Traces - gpx files
----------------------  

![OSMTracker JOSM][]  

GPS traces in the form of gpx files are made up of a number of elements, principally a 'trace' and 'waypoints'. The screenshot above shows a folder contents created in OSMTracker which has been loaded into JOSM ready for editing, with satellite imagery loaded to assist. The square icon in the centre of the trace indicates there is a photograph, taken at this location, available - simply click on the square icon to display the photograph.  

If you are navigating and using a GPS to give you directions, you will notice at some point that it will 'recalculate'. This is normally because its internal GPS location does not correspond to where it expects the road or path to be - there is a margin of error, but it is easy for roads and paths to be created in slightly the wrong place, or for the road to be moved after the map data has been created.  
Volunteers updating OpenStreetMap can download all of the traces that have been uploaded in an area, and use them to:  

1. Trace roads & paths through areas that could not be seen with satellite imagery because of clouds, trees, shadows, buildings etc..  
2. Adjust the satellite imagery so that it aligns correctly - there can be a surprising variation with some imagery.  

Although a single gpx trace is very useful, it may not be particularly accurate and can be as much as 30 metres out of place. When there are several traces, the correct route of the path or road is now easy to see - for example see the screenshot below showing a download of gpx traces in a town, in which the main roads can be seen by the volume of traces.  

![OSMTracker_gpx][] 




[OSMTracker Logo]: /images/mobile-mapping/osmtracker_logo.png
[OSMTracker_1]: /images/mobile-mapping/OSMTracker_1.png
[OSMTracker_2]: /images/mobile-mapping/OSMTracker_2.png
[OSMTracker button presets]: /images/mobile-mapping/OSMTracker_presets.png
[OSMTracker recorded file sizes]: /images/mobile-mapping/OSMTracker_files.png
[OSMTracker_gpx]: /images/mobile-mapping/OSMTracker_gpx.png
[OSMTracker JOSM]: /images/mobile-mapping/OSMTracker_JOSM.png