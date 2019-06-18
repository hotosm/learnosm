---
layout: doc
title: GPSLogger for Android
permalink: /vi/mobile-mapping/gpslogger/
lang: vi
category: mobile-mapping
---

GPSLogger từ Android
=====================

> Reviewed 2015-12-06  

![GPSLogger][]

Một ứng dụng đơn giản, nhẹ và nhỏ gọn để ghi lại dấu vết GPS trên nền tảng Android. Giao diện dễ sử dụng với mục đích duy nhất của việc ghi lại GPS và ở lại làm cho một ứng dụng rất pin hiệu quả có thể lưu các tracks gps trong GPX, KML, NEMA hoặc định dạng tập tin văn bản. Các tệp nhật ký có thể tự động được tải lên OpenStreetMap, một máy chủ OpenGTS, DropBox, máy chủ FTP, máy chủ HTTP hoặc được gửi đến một địa chỉ email.  

<https://play.google.com/store/apps/details?id=com.mendhak.gpslogger&hl=en>  

GPSLogger dành cho Android là một ứng dụng miễn phí để sử dụng và một dự án nguồn mở được duy trì tích cực. Các khoản đóng góp được hoan nghênh để nâng cao hơn nữa ứng dụng. Nếu bạn muốn tham gia (ví dụ như cung cấp bản dịch bằng ngôn ngữ khác, báo cáo lỗi hoặc gửi yêu cầu tính năng), hãy truy cập [repository](https://github.com/mendhak/gpslogger).  

> OpenGTS đề cập đến dự án[Open GPS Tracking System](http://opengts.sourceforge.net/)  


Tính năng, đặc điểm
--------  

* Chỉ định đăng nhập cự thể dựa trên thời gian và khoảng cách  
* Các cấu hình tiết kiệm pin  
* Lọc GPS chính xác để không truy cập đến các điểm không đáng tin cậy  
* Chọn wifi, Tháp điện thoại di động và / hoặc vệ tinh GPS làm nguồn thông tin vị trí  
* Đăng nhập vào các tệp GPX, KML, CSV, TXT hoặc NMEA với hỗ trợ ZIP  
* Các đơn vị hiển thị đơn vị hoặc đo lường  
* Tự động khởi động  
* Có thể chạy dưới nền tảng ẩn  
* Hoạt động tốt với các ứng dụng GPS đang chạy  
* Tự động gửi tới email / FTP / DropBox / Google Docs / OpenStreetMap / OpenGTS theo khoảng thời gian xác định của người dùng  
* Dễ dàng định dạng cấu hình các tập tin cấu hình văn bản để phân phối cho nhiều người dùng  


Giao diện người dùng
--------------------------

![Canvass1][]

Nút ** Menu ** cung cấp nhiều tùy chọn hơn cho việc định cấu hình ứng dụng.  
Bộ thả xuống ** Chế độ xem ** cho phép bạn chọn cách thông tin hiển thị trên màn hình.  
Nút ** Trợ giúp ** cung cấp thông tin bổ sung về cách sử dụng ứng dụng.  
Nút Chú thích ** ** cho phép bạn thêm mô tả vào một điểm.  
** Ghi một điểm ** nút cho phép bạn tự đăng nhập một điểm tham chiếu.  
** Tải lên ** cho phép bạn chọn từ nhiều tùy chọn để tải lên tệp nhật ký của bạn. Điều này bao gồm tùy chọn tự động gửi đến bất kỳ nội dung nào sau đây:  

- OpenStreetMap,  
- Google Drive,  
- DropBox,  
- FTP server,  
- OpenGTS server hoặc  
- gửi nhật ký đến một địa chỉ email.  

Nút ** Share ** cho phép bạn chọn một hoặc nhiều tệp nhật ký bạn có thể chia sẻ với người khác thông qua Bluetooth hoặc SMS. Tùy thuộc vào ứng dụng nào được cài đặt trên thiết bị của bạn, bạn có thể có các tùy chọn khác nhau có sẵn cho mình.  


![Canvass2][]

Nút ** Bắt đầu Đăng nhập ** màu xanh lam. Khi bạn nhấn nút này để bắt đầu ghi âm, nó sẽ chuyển sang một nút màu xanh lục.  
** Tọa độ ** hiển thị điểm GPS cuối cùng được ghi lại và được làm mới khi một tọa độ mới trở nên khả dụng.  
Biểu tượng ** Vệ tinh ** sẽ hiển thị cho bạn số lượng vệ tinh bạn đang cố định.  
** Độ cao ** cho thấy dữ liệu độ cao.  
** Thời lượng ** hiển thị tổng thời gian trôi qua kể từ khi nhấn nút bắt đầu.  
Khoảng cách ** ** sẽ hiển thị tổng số khoảng cách được ghi lại.  
** Loại tệp ** chỉ ra loại bản ghi đang được tạo ra trong khi ** Tập tin Đường dẫn ** cho bạn biết vị trí của tập tin trong điện thoại hoặc thẻ nhớ của bạn.  
Chỉ báo ** Trạng thái ** sẽ hiển thị màu xanh lục khi ghi âm, trong khi máy quay hiển thị khi thiết bị cố gắng sửa lỗi.  
Độ chính xác ** sẽ hiển thị độ chính xác của dữ liệu được ghi lại, thay đổi giữa các máy thu, vị trí hoặc số lượng vệ tinh có sẵn, điều kiện thời tiết hoặc các chướng ngại vật của đường chân trời.  
** Bearing ** cho bạn biết hướng bạn đang di chuyển.  
Tốc độ ** sẽ cung cấp cho bạn thông tin gần đúng về tốc độ bạn đang đi.  
** Điểm ghi ** sẽ hiển thị tổng số poins ghi từ thời điểm bắt đầu nút đã được nhấn.  


Menus
--------------------------

![Menus][]

The **General options** is where to find settings for *Start on bootup*, *unit of measurement* (Metric or Imperial), *debug file* and *version information*.  

![Menus1][]

The **Logging details** is where to find settings  *File formats* (multiple formats simultaneously supported), *folder* path to store logs, rules on *new file creation* and *custom file name*.  

![Menus2][]

![Menus3][]

Under **Performance** is where the settings for *location providers*, *timings*, *filters* and *listeners* are found. The location provider option lets you set the sources for the location data: **GPS** - navigation satellites; **Network** - cellular tower; **Passive** - lets GPSLogger "borrow" the location coordinates that another app has requested, to save battery by not making the request itself.  

![Menus4][]

![Menus5][]

**Auto send, email and upload**  is where the settings for various upload options such as OpenStreetMap, Google Drive, FTP, Dropbox are found.  

![Menus6][]

Uploading GPS traces is another way of contributing data to the OpenStreetMap project. A trace is a record of your location at various time or distance intervals, and recorded as geographic coordinates (longitude, latitude, altitude). They can be used as a background layer when editing maps, and is useful for adding features to the map, similar to aerial imagery.  

#### OpenStreetMap options

![osm0][]

**Allow auto sending** settings determines whether log files are uploaded automatically.  
**Authorize this app** is for granting the app permission to upload GPS traces to OSM, using your OSM account.  
The **Visibility**, **Description**, **Tags** options are disabled until you authorize the app to upload GPS traces. These settings are used for the GPS traces that will be uploaded to the OpenStreetMap database.  
When you click the *Authorize this app*, you will be directed to your Internet browser and to the OpenStreetMap website. If you are not logged in, you will be asked for your credentials.  

![osm2][]

After logging in, you see a page like below, for verifying the app request, and the specific permission to *upload GPS traces*. Click on *Save changes* button to authorize the app.  

![osm3][]

Back to the GPSLogger app, the screen will be slightly different screen, with additional options available.

![osm1][]

Clicking on the **Clear authorization** option will remove the permission to upload GPS traces to the OSM server.  

There are several *visibility* options for GPS traces. *Private* traces are shared as anonymous, with unordered points. *Public* traces are shown in the trace listing, and as anonymous, unordered points. *Trackable* traces are shared as anonymous, with timestamps for ordered points. *Identifiable* traces are shown in the trace list, and can be associated with your username, with timestamps for ordered points.  

It is recommended that you set the visibility of the GPS traces you upload to *identifiable*. The data and metadata makes it more useful for other mappers. If you have concerns about privacy and personal security, choose a more appropriate settings, or don't upload the traces at all.  

A text *description* help others understand how a trace is recorded. A trace recorded on foot will not be similar to a trace recorded by a drone.  

A *tag* is short keyword that can be used to associate a trace with projects, places, or events.  


Data Collection
---------------

### Automated collection and uploading of gps tracks

Once properly configured, the application can run in the background and automatically record tracks and upload them once a day to any of its configured services. This would allow for the automated collection of tracks of daily driving to help build a collection of road and travel time data for later mapping or analysis. Once configured the person who has the phone or other android device should notice a little impact on battery usage and not have to do anything manually. Some experimentation will be needed to find the right balance of battery usage and clarity of the GPS tracks.  

An example config to automatically collect and upload to OpenStreetMap daily you would need to adjust these settings:  

#### General Options  

* **Start on bootup** - On  

#### Logging Details  

* **Log to GPX** - On  
* **New file creation** - Once a day  

#### Performance  

* **Time before logging** - 5  
* **Keep GPS on between fixes** - On (Turing this off can cause "jumps" in the GPS tracks while the device requires the GPS satellites each time.)  
* **Don't log if I'm not moving** - On  

#### Auto send, email and upload  

* **Allow auto sending** - On  
* **How often** - For once a day enter 1440 minutes. This setting can be a little tricky if you do not have access to data or wifi when it executes. It should start counting from when you either boot the device or hit the "Start logging" button, so if you start it in the morning, it will upload the same time the next morning for example.  
* **OpenStreetMap** - Allow auto sending on and any other settings you want to configure, pay close attention to the visibility setting if you have privacy concerns about the GPS tracks.  


### Manually Recording Traces

To start collecting logs (in Simple view), simply click on the blue button. A spinner will appear near the upper right corner of the screen to indicate the attempt to get a fix on satellites. A green circle will show in the upper right hand area to indicate logging is on going.  

To stop recording data any time, just press the green *Stop Logging* button.  

#### Annotate  

To add a note or description to a log, click on the *Annotate* (Pencil) icon. This option will let you a leave text to describe or take note of details that are associated with the current point.  

##### Calling annotation from the Notification Bar  

It's also possible to directly call the *Annotate* button from Android's Notification bar. Select the app from the Notification List and click on the *Annotate* button.  

![annotate0][]

This will display an input dialog box where you can enter the text details of the note.

![annotate1][]

#### Log intervals

Log intervals are determined by time or distance under the **Performance** menu.  

##### By time

**Time before logging** is set to 60 seconds by default. You can change this to five or ten seconds, when you are walking instead of riding in a vehicle. When you are in a car, you can set this to 1 second to generate very accurate logs.  

##### By distance

The **Distance filter** is set by default to zero. You can set this to something else, if you want to record the coordinates for every X number of units from the last point recorded.  


​Uploading traces
------------------

#### to OpenStreetMap

Press the *Upload* button and select the *OpenStreetMap* option. A dialog window will appear where files are available for selection. Choose any you want to upload and hit the *Ok* button.  

![upload0][]

#### to other options

There are other upload options you can explore, but are outside the scope of this guide. Refer to the GPSLogger for Android Project website for details.  


​Sharing traces 
---------------

You may also share the recorded traces, or your current location with other people. Sharing options may vary from one device to another, or the apps installed on a device. Below is an example of how the sharing option screen may look:  

![share0][]


Exporting traces to an OpenStreetMap editor
--------------------------------------------

When you are done recording traces, the tracks may be imported to JOSM (or another OpenStreetMap editor, like iD).  

Connect your Android device to a computer (also possible using a data cable, Bluetooth, or an Internet connection) and copy the GPX tracks and (and perhaps, multimedia files) you’ve captured.  In your device storage, look for the GPX tracks under the folder /Android/data/com.mendhak.gpslogger/files  

Using the GPX tracks with the JOSM and iD editors are easy as dragging the files and dropping them into the application (or the browser tab, for iD).  

For additional details for  iD users, see the section [Configuring the Background Layer](http://learnosm.org/en/beginner/id-editor/#configuring-the-background-layer).  

If the JOSM editor is used, you can find instructions on how to use the GPX track, along with the multimedia files in JOSM see the section [Open in JOSM](http://learnosm.org/en/mobile-mapping/using-gps/#open-in-josm).  

For other OpenStreetMap editors, please refer to your software’s documentation.  


Display Options
-----------------

The application can be displayed 3 different ways, whichever you find most appropriate for your use:

#### Simple View

![view0][]

#### Detailed View

![view1][]

#### Big View

![view2][]


Summary
-------

Excellent! You've been introduced to a light-weight, battery-efficient app you can keep in your Android device to record tracks, which you can upload to OSM, or use with your favorite OpenStreetMap editor.  

GPSLogger for Android is another tool for collecting field data without a dedicated GPS receiver. Casual field data collection is possible without an active Internet connection.  

Take some time to practice and familiarize yourself with the app before working with live data.  

This section introduced the concept of using GPSLogger for Android for collecting GPS traces, uploading traces to OpenStreetMap, and transferring these logs to a PC.  


Official GPSLogger for Android Documentation
--------------------------------------------

The project maintains an [FAQ](http://code.mendhak.com/gpslogger/#faq) for commonly asked questions.

[GPSLogger]: /images/mobile-mapping/gpslogger_000.en.png
[Canvass1]: /images/mobile-mapping/gpslogger_001.en.png
[Canvass2]: /images/mobile-mapping/gpslogger_002.en.png
[Menus]: /images/mobile-mapping/gpslogger_003.en.png
[Menus1]: /images/mobile-mapping/gpslogger_003a.en.png
[Menus2]: /images/mobile-mapping/gpslogger_003b.en.png
[Menus3]: /images/mobile-mapping/gpslogger_003c.en.png
[Menus4]: /images/mobile-mapping/gpslogger_003d.en.png
[Menus5]: /images/mobile-mapping/gpslogger_003e.en.png
[Menus6]: /images/mobile-mapping/gpslogger_003f.en.png
[osm0]: /images/mobile-mapping/gpslogger_004.en.png
[osm1]: /images/mobile-mapping/gpslogger_004a.en.png
[osm2]: /images/mobile-mapping/gpslogger_004b.en.png
[osm3]: /images/mobile-mapping/gpslogger_004c.en.png
[upload0]: /images/mobile-mapping/gpslogger_005.en.png
[share0]: /images/mobile-mapping/gpslogger_006.en.png
[view0]: /images/mobile-mapping/gpslogger_007.en.png
[view1]: /images/mobile-mapping/gpslogger_007a.en.png
[view2]: /images/mobile-mapping/gpslogger_007b.en.png
[annotate0]: /images/mobile-mapping/gpslogger_008.en.png
[annotate1]: /images/mobile-mapping/gpslogger_008a.en.png