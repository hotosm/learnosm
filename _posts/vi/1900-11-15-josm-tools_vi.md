---
layout: doc
title: Các công cụ chỉnh sửa bản đồ của JOSM
permalink: /vi/josm/josm-tools/
lang: vi
category: josm
---

Các công cụ chỉnh sửa bản đồ của JOSM
==================

> Hướng dẫn này có thể được tải xuống tại đây: [josm_josm-tools_vi.odt](/files/josm_josm-tools_vi.odt) or [josm_josm-tools_vi.pdf](/files/josm_josm-tools_vi.pdf)  
> Cập nhật: 2017-11-06  

- TOC
{:toc}

Trong [Phần đầu của hướng dẫn sử dụng JOSM](/vi/josm/start-josm/) nội dung hướng dẫn đã bao gồm các hướng dẫn vẽ cơ bản trong JOSM nhưng có rất nhiều công cụ và kỹ thuật chưa được giới thiệu.

Trong phần này, chúng ta sẽ xem xét một vài công cụ cơ bản và các kỹ thuật để vẽ các đối tượng bản đồ trong JOSM, và trong phần tiếp theo, chúng ta sẽ đi sâu vào các công cụ vẽ nâng cao.

Tải xuống file ví dụ
-------------------

- Nếu bạn muốn thực hiện các thao tác và sử dụng các công cụ JOSM như trong hướng dẫn, hãy download file [tools_menu_sample.osm](/files/tools_menu_sample.osm). Khởi động JOSM và mở file vừa tải suống, nó sẽ trông như thế này:

![tools_menu_sample.osm][]

Các công cụ vẽ
-------------

Nếu bạn nhấp chuột vào menu “Tools” phía trên của JOSM, bạn sẽ thấy một số công cụ/ chức năng có thể hỗ trợ bạn trong việc vẽ các đường và hình, và chỉnh sửa đối tượng bản đồ.

JOSM có một số công cụ/ chức năng làm cho việc vẽ đường và hình trở nên dễ dàng. Những công cụ/ chức năng này được tìm thấy trong menu “Tools” phía trên của JOSM.

![Tools menu][]

Để sử dụng những chức năng trong menu này, bạn cần phải chọn trước một điểm, đường hoặc vùng trong khung bản đồ. File ví dụ chứa các đối tượng đã được gắn nhãn trung với tên của các chức năng trong menu.

### Căn chỉnh các điểm vào đường tròn  

- Thử chọn một đối tượng, sau đó đi đến menu Tools và chọn chức năng đã được chỉ ra bên cạnh đối tượng mà bạn đã chọn. Ví dụ, chọn một hình tròn được vẽ chưa tốt.

![Align nodes in circle][]

- Sau đó, đi đến menu Tools, chọn Align Nodes in Circle. Hình tròn được vẽ chưa tốt đó sẽ trở nên tròn hơn

Thử nghiệm với các chức năng sử dụng trong file ví dụ này. Chi tiết về một số công cụ như sau.

### Split Way/ Cắt đường  

Chức năng này cho phép bạn chia một đường thành hai đường riêng biệt. Điều này rất hữu ích nếu bạn muốn thêm các thuộc tính khác nhau vào các phần khác nhau của đường, chẳng hạn như một cây cầu. Để sử dụng chức năng này, chọn một điểm ở giữa dòng bạn muốn chia, chọn Split Way từ menu Tools, và đường của bạn muốn chia sẽ thành hai đường.


### Combine Way/ Nối đường

Chức năng này ngược với Split Way. Để kết hợp hai đường thành một đường, chúng phải có một điểm chung duy nhất. Để sử dụng chức năng này, chọn cả hai đường bạn muốn kết hợp. Bạn có thể chọn nhiều đối tượng bằng cách giữ phím SHIFT trên bàn phím và nhấp vào từng đường. Khi bạn đã chọn cả hai đường, hãy chọn Combine Way từ trình đơn Tools.

![Combine way][]


### Reverse and Combine/ Đảo chiều và Nối đường  

Nếu bạn đang kết hợp các tuyến đường có các hướng khác nhau, bạn có thể nhận được cảnh báo này:

![Reverse and combine][]

Nếu các con đường được nối và đi theo cùng một hướng, chọn “Đảo chiều và Tiếp tục”/ “Reverse and Continue.”


### Reverse Way/ Đảo chiều

Chức năng này sẽ thay đổi hướng của đường. Tất cả các đường trong OSM có một hướng, được hiển thị trong JOSM bởi các mũi tên trên đường dây. Hướng thường không quan trọng, ngoại trừ trường hợp đường một chiều và sông chảy theo một hướng nào đó. Trong những trường hợp này bạn có thể cần phải đảo ngược đường đi để nó đi đúng hướng.

![Way direction][]

### Simplify Way/ Đơn giản hóa đường

Nếu đường của bạn có quá nhiều điểm và bạn muốn làm cho nó đơn giản hơn, chức năng này sẽ loại bỏ một số điểm khỏi đường.

![Simplify way][]


### Create a Circle/ Tạo đường tròn

Ngoài ra, bạn có thể sử dụng chức năng này để tạo ra một vòng tròn hoàn hảo hơn. Vẽ đường biểu thị đường kính vòng tròn của bạn, sau đó áp dụng công cụ này.

![Create circle][]


### Align Nodes in Line/ Căn thẳng các điểm

Chức năng này sẽ sắp xếp một loạt các điểm thành một đường thẳng. Với đường dài, tốt nhất là chọn các đoạn của đường. Hãy cẩn thận vì điều này có xu hướng thay đổi vị trí đường một chút.

![Align nodes in line][]

### Orthogonalize Shape/ Trực giao hóa hình

Chức năng này rất hữu ích cho việc vẽ các hình dạng thường xuyên như các tòa nhà. Sau khi bạn vẽ một vùng, chức năng này sẽ định hình lại nó để có góc vuông.

![Orthagonalize][]


### Unglue way/ Tách khỏi đường

Công cụ này cho phép bạn tách các nút được kết nối. Nó hữu ích khi hai đối tượng chia sẻ một nút nhưng không nên. Ví dụ, một sai lầm phổ biến là cho một con đường chung một nút với góc của một tòa nhà. Tất nhiên những con đường thường không chạy vào các tòa nhà, do vậy đây là một sai lầm, và bạn có thể tách các đối tượng khỏi nhau.

![Unglue way][]

*Đường và nút sẽ không xuất hiện riêng biệt cho đến khi bạn di chuyển chúng.*

Các phím tắt
------------------

Khi bạn đã chỉnh sửa bản đồ nhiều, bạn sẽ nhận ra là bạn đã tốn khá nhiều thời gian để nhấp chuột qua các menu và menu con. Để loại bỏ nó, JOSM có nhiều phím tắt để thực hiện tất cả các công việc.

Điều này có nghĩa là thay vì nhấp vào một đối tượng và sau đó thực hiện quá trình duyệt qua các menu kéo dài, bạn chỉ cần chọn đối tượng và nhấn một phím trên bàn phím.

Tất cả các công cụ được đề cập trong phần trước có phím tắt, được liệt kê trong menu Công cụ ở bên phải mỗi tên công cụ.
Ví dụ: "O" là phím tắt để căn giữa các nút trong một vòng tròn. "L" là phím tắt để sắp xếp chúng theo một đường thẳng.
Có thể mất một thời gian để tìm hiểu các phím tắt, nhưng bạn sẽ thấy rằng bạn sẽ tiết kiệm rất nhiều thời gian về lâu dài

Đây là một số phím tắt (in **đậm**) quan trọng nhất.

1.  Kích hoạt công cụ chọn/ Select Tool - **S**
2.  Kích hoạt công cụ vẽ/ Draw Tool - **A**
3.  Kích hoạt công cụ Thu phóng bản đồ/ Zoom Tool - **Z**
4.  Xóa/ Delete đối tượng đang được chọn - **Delete**
5.  Phóng to/ Zoom In - **+**
6.  Thu nhỏ/ Zoom Out - **-**


Thu phóng và xoay đối tượng
----------------

Một câu hỏi thường gặp là làm sao để quay một đường hoặc một hình sau khi đã vẽ.

Để xoay một đối tượng, đầu tiên hãy chọn đối tượng đó. Giữ phím **SHIFT+CTRL**. Nhấp và kéo chuột để quay đối tượng.

![Rotate demo][]

Để thu phóng đối tượng (làm cho nó nhỏ hơn hoặc lớn hơn), bạn cũng thực hiện như trên nhưng sử dụng tổ hợp phím **ALT+CTRL**.

Những hướng dẫn này được hiển thị trên thanh trạng thái ở phía dưới cùng của JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png