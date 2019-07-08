---
layout: doc
title: JOSM - Tạo các Cài sẵn Tùy chỉnh
permalink: /vi/josm/creating-presets/
lang: vi
category: josm
---

JOSM - Tạo các Cài sẵn Tùy chỉnh
=======================


Trong [Chương trước](/vi/josm/josm-presets) chúng ta đã xem xét cách thêm các trình đơn cài sẵn tùy chỉnh vào JOSM. Trong chương này, chúng tôi sẽ giới thiệu cách tạo các tập tin cài sẵn tùy chỉnh của riêng bạn  

CẢNH BÁO! Đây là một chủ đề nâng cao ... hãy thận trọng!  

Giới thiệu về XML
-------------------

Để tạo trình đơn Presets của chúng ta, trước tiên chúng ta cần phải hiểu một ngôn ngữ được gọi là XML. Nếu bạn đã quen thuộc với XML, hãy nhảy tới phần tiếp theo.  

XML, viết tắt của "Extensible Mark-up Language", là một ngôn ngữ máy tính tương tự như HTML. Sự khác biệt chính là XML được thiết kế để mang dữ liệu, không hiển thị nó. Nhiều ứng dụng trên Internet sử dụng XML để truyền dữ liệu, bao gồm cả OpenStreetMap. XML sử dụng các phần tử, và mỗi phần tử có thể chứa các phần tử con bên trong nó. Ví dụ: chúng ta hãy tưởng tượng rằng chúng ta muốn tạo một tệp tin XML có chứa dữ liệu về một thực đơn nhà hàng. Chúng ta phải tạo một phần tử gốc để chứa tất cả dữ liệu về trình đơn của chúng ta. Phần tử gốc của chúng ta sẽ có một thẻ mở và một thẻ đóng, như sau:

      <menu>
      ... whatever data we want to include in our menu ...
      </menu>

Thông tin được chứa bên trong một phần tử, và trong mỗi phần tử có thể có nhiều phần tử hơn.  

      <menu>
        <item name=“Hamburger”>
          <cost>400</cost>
          <description>Delicious beef patty</description>
        </item>
          <item name=“Nasi Goreng”>
          <cost>200</cost>
          <description>Indonesian Fried Rice</description>
        </item>
      </menu>

Trong ví dụ này chúng ta đã đặt hai phần tử &lt;item&gt; bên trong phần tử &lt;menu&gt; của chúng ta để mô tả hai mục khác nhau được chứa trong menu. Mỗi mục chứa thêm hai phần tử, &lt;cost&gt; và &lt;description&gt;. Cũng lưu ý rằng chúng ta đã viết tên = "Hamburger" bên trong thẻ mở &lt;item&gt;. Đây được gọi là thuộc tính và thêm thông tin về phần tử.


### Các thuật ngữ XML

- **root element:** phần tử gốc: phần tử ngoài cùng của một tài liệu XML, mô tả những gì được chứa  
- **element:** phần tử: bất kỳ đối tượng XML, được chứa bởi các thẻ mở và đóng, chẳng hạn như  &lt;item&gt; ... data ... &lt;/item&gt;  
- **tag:**thẻ: cái gì đó có trong dấu ngoặc, chẳng hạn như &lt;item&gt;.  &lt;item&gt; là thẻ mở của một phần tử, và &lt;/item&gt; là thẻ đóng. Đừng nhầm lẫn này với thẻ OSM, có ý nghĩa khác.  
- **attribute:** một mẩu thông tin chứa bên trong một thẻ, chẳng hạn như name=“Hamburger”  

Sử dụng XML để lưu trữ và truyền dữ liệu là rất tốt vì nó dễ hiểu cho máy tính.  


File cài đặt trước của JOSM
-------------------

Chúng ta hãy thêm một tập tin đặt sẵn mẫu vào JOSM và phân tích nó hoạt động như thế nào.  

- Tải xuống file [sample_presets.xml](/files/sample_presets.xml).  
- Sau đó thêm vào JOSM như cách đã mô tả trong [chương trước](/vi/josm/josm-presets).  
- Tạo một lớp mới và một đối tượng mới.  
- Đi tới menu Presets. Sẽ có một mục mới có tên là "Sample Building/ Ví dụ Tòa nhà". Nhấp chuột vào đó.  

![sample building menu][]

Lưu ý rằng biểu mẫu xuất hiện có ba trường trong đó, và mỗi trường chấp nhận một kiểu nhập liệu khác nhau. Trường đầu tiên, tên tòa nhà, chấp nhận một chuỗi văn bản làm đầu vào. Thứ hai, mục đich sử dụng của toàn nhà, có một hộp thả xuống. Trường cuối cùng là một hộp kiểm tra, có nghĩa là nó chỉ có thể có một trong hai giá trị, bật hoặc tắt

![sample presets form][]

Bây giờ chúng ta hãy nhìn vào tệp tin XML xác định mẫu Preset này.

- Tìm tệp tin XML trên máy tính của bạn và mở nó bằng một trình soạn thảo văn bản. Nếu bạn đang sử dụng Windows, bạn có thể sử dụng chương trình Notepad. Nếu bạn muốn có một trình chỉnh sửa dễ sử dụng hơn, bạn có thể tải xuống ứng dụng Notepad ++ miễn phí.  
- Tệp **sample_presets.xml** sẽ trông như sau:  

![sample presets file][]

Bây giờ, chúng ta hãy bỏ qua sáu dòng đầu tiên và dòng cuối cùng, và tập trung vào mọi thứ giữa các thẻ &lt;item&gt;.

Dòng đầu tiên trông như thế này:

      <item name="Sample Building" type="node,closedway">

Đây là thẻ mở đầu của một mục được thêm vào trình đơn. Nó có hai thuộc tính, tên và kiểu. Tên định nghĩa cách thức này sẽ xuất hiện trên menu Presets. Kiểu này giới hạn cài đặt trước cho các loại đối tượng cụ thể. Trong trường hợp này, giá trị đặt sẵn chỉ có thể được áp dụng cho các điểm và hình - nói cách khác, các nút và các đường đóng. Nếu bạn cố gắng áp dụng cài đặt trước này vào một đường thẳng, nó sẽ không hoạt động.  

Hãy nhìn vào dòng kế tiếp:  

      <label text="Building Form" />

Khi bạn nhấp vào trình đơn và mở mẫu mẫu, ở trên cùng bạn thấy văn bản "Building Form". Đây là văn bản được xác định trong dòng này. Điều này định nghĩa một phần tử &lt;label&gt; đơn giản chỉ hiển thị văn bản trong biểu mẫu. Văn bản được xác định bởi cặp giá trị *text="some text"*.  

Đi xuống một vài dòng và tìm thấy điều này:  

      <key key="building" value="yes" />

Đây là một trong những thẻ sẽ được áp dụng cho đối tượng chúng tôi đã chọn. Bởi vì nó sử dụng phần tử &lt;key&gt;, thẻ OSM được đưa ra ở đây sẽ được tự động áp dụng. Do đó đối tượng này sẽ tự động nhận được thẻ thông tin *building=yes*.  

Dòng tiếp theo là một chút khác biệt, sử dụng phần tử &lt;text&gt;.  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

Phần tử &lt;text&gt; tạo một trường trống. Khi form được tạo ra trong JOSM, người dùng sẽ có thể điền vào trường trống. Bởi vì thuộc tính *delete_if_empty="true"* được đặt, nếu không có dữ liệu được nhập vào, thẻ này sẽ không được tạo.  

Hộp thả xuống trên biểu mẫu được định nghĩa trong dòng sau:  

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" />
      <display_values="Residential, Commercial, Industrial"/>

Hộp thả xuống được xác định bởi phần tử &lt;combo&gt;. Giống như phần tử &lt;text&gt;, thuộc tính *key* xác định khóa của thẻ. Giá trị sau đó được chọn từ danh sách các *values*. Thuộc tính *display_values* cho phép bạn chọn tên khác nhau được hiển thị trong hộp thả xuống, có thể dễ dàng hơn so với hiểu giá trị trng thẻ OSM.  

Cuối cùng, chúng ta hãy nhìn vào dòng xác định hộp kiểm  

      <check key="building:vacant" text="Is the building vacant?" default="off" /> 
      <delete_if_empty="true" />

Phần tử &lt;check&gt; - bạn có thể đoán được! - một hộp kiểm. Thuộc tính mặc định *default="off"* chỉ ra hộp kiểm mặc định không được chọn. Các thuộc tính còn lại bạn đã biết.  

TẠO TẬP TIN PRESETS RIÊNG CỦA BẠN
------------------------------

Cách tốt nhất để tạo tập tin cài đặt trước của riêng bạn là lấy một tệp đã có sẵn và thao tác để hoàn thành mục tiêu của bạn. Bạn có thể chỉnh sửa tệp mẫu này và thử nghiệm nó để tìm hiểu những điều cơ bản. Chỉ cần nhớ rằng mỗi khi bạn lưu nó, bạn sẽ cần phải khởi động lại JOSM để tải các thay đổi.  

Trước khi bạn bắt đầu tạo các cài đặt trước của riêng bạn, bạn cần phải suy nghĩ cẩn thận về các thẻ mà bạn sẽ sử dụng. Tạo ra thẻ mới là một chủ đề khác. Nói chung, bạn nên sử dụng thẻ OSM hiện có khi chúng tồn tại. Hầu hết các thẻ hiện có được liệt kê trên [mục Map Features trong OSM Wiki](http://wiki.openstreetmap.org/wiki/Map_Features).  

Tập tin mẫu này chứa hầu hết các phần tử mà bạn sẽ tìm thấy trong tập tin cài đặt sẵn JOSM - không có nhiều thành phần biểu mẫu. Nếu bạn muốn thử nghiệm với tệp tin cài sẵn phức tạp hơn, hãy tải xuống tệp [dhaka_presets.xml](/files/dhaka_presets.xml) tại đây.  

Ngoài ra, bạn có thể tìm thấy giải thích chi tiết về tất cả các yếu tố có thể có [tại đây](http://josm.openstreetmap.de/wiki/TaggingPresets).  

Chúc may mắn!  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png