---
layout: doc
title: Cài đặt PostgreSQL
permalink: /vi/osm-data/postgresql/
lang: vi
category: osm-data
---

Cài đặt PostgreSQL & PostGIS
====================


Trong chương này chúng ta sẽ thấy làm thế nào để thiết lập PostgreSQL trên Windows và làm thế nào để tạo ra một cơ sở dữ liệu trong đó bạn có thể lưu trữ dữ liệu địa lý. Chúng tôi sẽ sử dụng phần mềm mã nguồn mở GIS QGIS trong chương này, vì vậy sẽ hữu ích nếu bạn đã quen với nó. Trong chương tiếp theo, chúng ta sẽ thấy làm thế nào để nhập dữ liệu OpenStreetMap vào một cơ sở dữ liệu PostgreSQL.  

Cài đặt PostgreSQL và PostGIS
----------------------------------

Trong phần này, chúng tôi sẽ cài đặt PostgreSQL và sau đó thêm các phần mở rộng không gian PostGIS. Đây là khá dễ dàng để thiết lập bằng cách sử dụng One-Click In-staller. Điều hướng trình duyệt web của bạn tới trang web PostgreSQL và trang tải xuống <http://www.postgresql.org/download/>  

![Trang web PostgreSQL][]

Từ đây bạn có thể tìm hướng dẫn cài đặt cho các hệ điều hành khác nhau. Nhấp vào liên kết “**Windows**”.  
Trang này giải thích điều mà One-Click Installer sẽ làm. Nó sẽ cài đặt ba thành phần khác nhau:  

* **PostgreSQL server**:  Phần mềm cơ sở dữ liệu, thành phần cốt lõi  
* **pgAdmin 4**: The graphical interface for managing your databases  
* **StackBuilder**: Một công cụ để thêm các ứng dụng bổ sung; chúng ta sẽ sử dụng nó để thêm các phần mở rộng PostGIS  

Nhấp chuột vào **Download**.  

![Tải xuống PostgreSQL][]

You will see several different Installer options for different versions of the PostgreSQL software. Download the most recent version for your Windows version.

![Phiên bản của PostgreSQL][]

Khi nó đã hoàn tất tải về, hãy chạy Trình cài đặt.  

![install 1][]

Nhấp vào “**Next**” để điều hướng qua trình hướng dẫn cài đặt. Các tùy chọn mặc định nên được sử dụng tốt. Bạn sẽ cần phải cung cấp mật khẩu cho người dùng cơ sở dữ liệu đầu tiên (người sử dụng là postgres). Người dùng này có các đặc quyền superuser, có nghĩa là họ có thể làm bất cứ điều gì họ muốn, do đó đừng quên mật khẩu mà bạn sử dụng!  

> Bạn có thể tạo ra nhiều cơ sở dữ liệu như bạn muốn sử dụng Postgresql. Bạn có thể muốn có một cơ sở dữ liệu cho dữ liệu địa lý của bạn, và cơ sở dữ liệu riêng biệt cho các dự án khác mà bạn đang làm việc trên. Và bạn có thể muốn những người khác nhau có các loại truy cập khác nhau vào các cơ sở dữ liệu này. Với mục đích này, mỗi cơ sở dữ liệu bạn tạo sử dụng khái niệm về **người dùng** và **vai trò**. Một cơ sở dữ liệu phải luôn luôn được sở hữu bởi một người sử dụng, và thường là người dùng sẽ cần một mật khẩu để thay đổi cơ sở dữ liệu. Người dùng bổ sung có thể được phép truy cập vào một cơ sở dữ liệu và họ có thể có những vai trò nhất định. Ví dụ, bạn có thể muốn người dùng cơ sở dữ liệu chỉ có thể đọc thông tin từ cơ sở dữ liệu, nhưng không thể thay đổi nó. Hoặc bạn có thể muốn người dùng có thể thêm dữ liệu, nhưng không được phép xóa nó. Với người dùng và vai trò, điều này là có thể. Bây giờ chúng ta sẽ không phải lo lắng nhiều về điều này, chỉ cần nhớ rằng cơ sở dữ liệu của bạn thuộc sở hữu của một **người dùng**, và để truy cập cơ sở dữ liệu, bạn sẽ cần tên và mật khẩu của người dùng. Người dùng đầu tiên chúng ta tạo ra (tên là postgres) là một **superuser**, nghĩa là họ có quyền làm tất cả mọi thứ với cơ sở dữ liệu.  

Sau khi bạn đã nhấp qua trình hướng dẫn và chấp nhận các tùy chọn cấu hình mặc định, trình hướng dẫn sẽ cài đặt mọi thứ cho bạn. Có thể mất vài phút.  

Khi quá trình cài đặt hoàn tất, wizard sẽ hỏi bạn có muốn khởi chạy StackBuilder hay không, đây là tiện ích cho phép chúng tôi cài đặt PostGIS. Đảm bảo hộp đã được kiểm tra trước khi bạn nhấp vào “**Finish**.”  

![install 2][]

Bây giờ chúng tôi đã cài đặt thành công PostgreSQL và chúng tôi cần thêm các phần mở rộng PostGIS. Khi trình thủ thuật StackBuilder mở ra, chọn cài đặt PostgresSQL từ trình đơn thả xuống và nhấp vào **Next**.  Nó sẽ giống như thế này:  

![install 3][]

Mở tab “Spatial Extensions” và chọn hộp kiểm bên cạnh PostGIS. Trong bài viết này, phiên bản mới nhất của PostGIS là 2.4.1.  

![install 4][]

Nhấp vào **Next** để tải các phần mở rộng và cài đặt. Khi được nhắc, hãy nhấp vào “**I Agree**” để chấp nhận các điều khoản và điều kiện.  

Trình cài đặt PostGIS sẽ hỏi thêm nhiều câu hỏi, nhưng thông thường tùy chọn mặc định là tốt. Bạn có thể cho biết nó tạo cơ sở dữ liệu đầu tiên tự động, nhưng chúng ta sẽ học làm thế nào để tự làm điều đó tiếp theo. Để bắt đầu cài đặt PostGIS, bạn cần cung cấp mật khẩu postgres mà bạn đã tạo ra khi cài đặt PostgreSQL.  

![install 5][]

Nếu bạn được yêu cầu đăng ký biến môi trường **GDAL_DATA**, hãy nhấp vào "**Yes**."  

![install 6][]

Khi quá trình cài đặt hoàn tất, hãy nhấp vào “**Close**” và sau đó “**Finish**.”  

TẠO CƠ SỞ DỮ LIỆU
--------------------

Now that we have installed all of the necessary software, we will create a database. We will use pgAdmin 4, which is a graphical database client that is useful for querying and modifying
Chúng tôi sẽ sử dụng pgAdmin III, một máy khách cơ sở dữ liệu đồ họa có ích để truy vấn và sửa đổi cơ sở dữ liệu.  

![pgadmin3][]

PgAdmin 4 is the official client for PostgreSQL and lets you use the SQL language to manipulate your data tables.  It is also possible to create and manipulate databases from the command-line, but for now, pgAdmin 4 is an easy way to get started.  

Open pgAdmin 4.  It should be in the Start Menu under All Programs -> PostgreSQL 9.3 > pgAdmin 4.  

![pgadmin3 start][]

Trong bảng điều khiển bên trái dưới Máy chủ, nhấp chuột phải vào nơi mà nó nói Post-greSQL và nhấp vào “**Connect**.”  

![postgresql connect][]

Nhập mật khẩu người dùng postgres mà bạn đã tạo khi cài đặt phần mềm. Hãy nhớ rằng tên người dùng và mật khẩu được yêu cầu để bạn có thể tạo và truy cập cơ sở dữ liệu.  

![enter password][]

Nhấp chuột phải vào **Databases** và chọn **New Database**...  

![new database][]

Bạn cần nhập một vài thông tin để tạo ra cơ sở dữ liệu mới: tên và chủ sở hữu. Trong tab Properties, cung cấp cho cơ sở dữ liệu một tên mới. Trong ví dụ này, chúng tôi đặt tên cơ sở dữ liệu gisdb. Chúng ta cũng nên cung cấp cho cơ sở dữ liệu của chúng tôi một chủ sở hữu. Vì chúng ta chỉ có một người dùng ngay bây giờ, hãy cho cơ sở dữ liệu của chúng tôi các chủ sở hữu postgres. (Lưu ý: vì lý do bảo mật, nên tạo người dùng không có sự cho phép của người dùng cấp cao, nhưng bây giờ chúng tôi sẽ không phải lo lắng về điều này.)  

![new database form][]

<!-- Under the Definition tab, keep the defaults, but next to Template select template_postgis.  This will create our database with the proper spatial columns. -->

Click **OK** to create the database.  You will now see your database listed under “**Databases**.” We need to run a command now to enable the database with PostGIS extensions. Click on ![sql button][]{: height="24px"} at the top of PgAdmin 4.  



Trong cửa sổ truy vấn, nhập:  

**TẠO PHẦN MỞ RỘNG postgis**  

Sau đó nhấp vào nút "**Execute query**".  

![postgis command][]

TẢI DỮ LIỆU MẪU (TÙY CHỌN)
---------------------------

Nếu bạn cảm thấy thoải mái cho đến nay và đã quen thuộc với QGIS, hãy làm theo khi chúng tôi tải một số dữ liệu vào cơ sở dữ liệu mới của chúng tôi. Để làm điều này, chúng ta sẽ sử dụng một tiện ích chuyển đổi shapefiles và nạp chúng vào cơ sở dữ liệu.  

Make sure that your new database is selected in the panel on the left and go to **Plugins -> PostGIS Shapefile and DBF loader 2.x**.

![shapefile loader][]

-	Nhấp vào “**Add File**” và tìm một shapefile trên hệ thống tập tin của bạn.
-	Nếu bạn không có bất kỳ shapefiles, bạn có thể tải về một mẫu [ở đây](/files/buildings_sample.zip).
-	Khi bạn đã chọn một tệp, hãy nhấp vào “**Import**”. Nếu mọi thứ diễn ra suôn sẻ, đầu ra sẽ báo “**Shapefile import completed**.”

![add shapefile][]

Bây giờ chúng ta hãy tải dữ liệu từ cơ sở dữ liệu của chúng tôi vào ứng dụng QGIS. Nếu bạn không có QGIS, bạn có thể tải xuống nó trên [Trang web của QGIS](http://www.qgis.org/site/forusers/download.html).  

-	Mở QGIS và nhấp vào nút ![qgis add postgis button][]{: height="24px"}.  
-	Trong phần “Connections” ở trên cùng, nhấp vào “**New**”.  
-	Đặt tên kết nối mới. Trong loại cơ sở dữ liệu **gisdb** (hoặc bất cứ điều gì bạn đặt tên cơ sở dữ liệu của bạn). Nhập tên đăng nhập và mật khẩu của bạn bên dưới.  

![connection settings][]

-	Nhấp **OK** để lưu cài đặt kết nối. Sau đó nhấp vào "Kết nối" để kết nối với máy chủ PostgreSQL của bạn. Bạn có thể phải nhập lại tên đăng nhập và mật khẩu.  
-	Nếu mọi thứ thành công, bạn sẽ thấy lớp shapefile (hoặc nhiều lớp có các kiểu tính năng khác nhau) mà bạn đã nạp vào cơ sở dữ liệu có sẵn ở đây. Chọn một lớp và nhấp vào “**Add**” để thêm nó vào bản đồ của bạn.  

![your data layer][]

Khi bạn thêm lớp bạn sẽ cần phải chọn một hệ tọa độ để hiển thị dữ liệu. Bạn sẽ rất có thể muốn chọn WGS 84, đó là hệ tọa độ OpenStreetMap sử dụng.  

> Lớp hoạt động giống như nếu bạn đã tải một shapefile trực tiếp vào QGIS. Sự khác biệt duy nhất là nếu bạn chỉnh sửa lớp, những thay đổi sẽ được lưu trong cơ sở dữ liệu của bạn.  

TÓM LƯỢC
-------

Bây giờ bạn đã biết cách thiết lập PostgreSQL và PostGIS, cũng như cách tạo một cơ sở dữ liệu mới, bạn đã sẵn sàng thử các tiện ích cho phép chúng tôi nhập dữ liệu OSM thô vào cơ sở dữ liệu. Chúng ta sẽ xem xét điều này trong  [Chương tiếp theo](/vi/osm-data/osm2pgsql).  



[Trang web PostgreSQL]: /images/osm-data/postgresql-website.png
[Tải xuống PostgreSQL]: /images/osm-data/postgresql-download.png
[Phiên bản của PostgreSQL]: /images/osm-data/postgresql-version.png
[install 1]: /images/osm-data/postgresql-install-1.png
[install 2]: /images/osm-data/postgresql-install-2.png
[install 3]: /images/osm-data/postgresql-install-3.png
[install 4]: /images/osm-data/postgresql-install-4.png
[install 5]: /images/osm-data/postgresql-install-5.png
[install 6]: /images/osm-data/postgresql-install-6.png
[pgadmin3]: /images/osm-data/pgadmin3.png
[pgadmin3 start]: /images/osm-data/pgadmin3-start.png
[postgresql connect]: /images/osm-data/postgresql-connect.png
[enter password]: /images/osm-data/enter-password.png
[new database]: /images/osm-data/new-database.png
[new database form]: /images/osm-data/new-database-form.png
[sql button]: /images/osm-data/sql-button.png
[postgis command]: /images/osm-data/postgis-command.png
[shapefile loader]: /images/osm-data/shapefile-loader.png
[add shapefile]: /images/osm-data/add-shapefile.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[your data layer]: /images/osm-data/your-data-layer.png







