---
layout: doc
title: Vẽ các loại đường, tòa nhà, vùng nước và các hình thức sử dụng đất 
permalink: /vi/coordination/remote-tracing/
lang: vi
category: coordination
---

Vẽ các loại đường, tòa nhà, vùng nước và các hình thức sử dụng đất
===========================================

> Reviewed 2016-02-08  

Tiếp theo từ phần [Remote, Armchair & Mapathon của phần LearnOSM](/vi/coordination/remote/), bạn sẽ cần nếu bạn không có kinh nghiệm lập bản đồ cho HOT.  


Chỉ Mục
=====

[Đường và đường cao tốc, bao gồm cả đường và Tuyến Đường](/vi/coordination/remote-tracing/#roads)  
[Hệ thống cao tốc](/vi/coordination/remote-tracing/#the-highway-network)  
[Khu dân cư, Ranh giới, sử dụng đất](/vi/coordination/remote-tracing/#residential-boundaries)  
[Tòa nhà, tường, hàng rào, các hợp chất và rào cản](/vi/coordination/remote-tracing/#buildings-walls-compounds-barriers)  


## Đường

Bất kỳ loại đường nào từ đường cao tốc đến đường ray và đường dẫn đều được gắn nhãn 'highway' trong OpenStreetMap. Điều quan trọng là các đường cao tốc được thêm chính xác vào cơ sở dữ liệu (OpenStreetMap data) vì chúng được sử dụng theo nhiều cách:  

-  Phần mềm điều hướng như thiết bị và ứng dụng Garmin. trên điện thoại thông minh như Osmand có thể cung cấp thông tin định tuyến trên khoảng cách lớn nếu thông tin chính xác được tải vào chúng. Vì những thiết bị này dựa vào các thiết bị GPS nằm trong thiết bị để định vị vị trí liên quan đến tấm cơ sở được nạp vào chúng, điều quan trọng là các đường cao tốc thực sự nằm trong khoảng 15 mét ở đúng nơi, hoặc chúng sẽ không hoạt động!  
-  Lập kế hoạch cho một xe tải cứu hộ lớn dễ dàng hơn nhiều nếu bạn có thể phân biệt giữa con đường và con đường thân với tất cả các giai đoạn ở giữa.  
-  Biết được bề mặt đường là đường nhựa hay bùn mềm sẽ tạo sự khác biệt cho việc lập kế hoạch tuyến đường của bạn.
-  Khi cố gắng phác hoạ sự lây lan của bệnh, mô tả của một nạn nhân về "gần ngã tư" là đáng kể nếu bạn có thể nhìn thấy đường ngang trên bản đồ.

### Đường cao tốc - Cách vẽ đường

![iD 3][]

1.  Khi theo dõi các tuyến đường cao tốc, hãy đảm bảo bạn đã phóng to đủ. Hướng dẫn bắt đầu thiết lập thang đo khoảng 20 mét và theo dõi tuyến đường cao tốc để dấu vết của bạn có đủ điểm để giữ nó ở hoặc gần đường bạn có thể nhìn thấy trong hình ảnh vệ tinh của bạn. Trong ảnh chụp màn hình ở trên, bạn có thể thấy tôi đã theo dõi con đường đã được chuyển qua cho tôi, xuống, xuyên qua các cây cối, và đến một toà nhà khác nơi nó dường như dừng lại. Trường hợp cây gần đường và hình ảnh thu được bằng máy ảnh trên không, có vẻ như con đường thu hẹp khi đi qua các cây - tuy nhiên, đó chỉ là ảnh hưởng của cây che khuất tầm nhìn và đường có cùng độ rộng trong suốt.  
2.  Tôi cũng đã theo dõi một đoạn đường khác, đảm bảo rằng nó được kết nối ở mỗi đầu - iD cho thấy điều này với một điểm nhỏ hơn và màu đậm hơn ở đường giao nhau. Điều quan trọng là các con đường tham gia và 'chia sẻ một nút chung' để phần mềm định tuyến sẽ cung cấp hướng dẫn chính xác.  
3.  Con đường được gắn là 'highway = residential', và tôi cũng đã thêm 'surface = un-paved'.  
4.  Để có mô tả đầy đủ về việc gắn thẻ trong phạm vi châu Phi, hãy tham khảo trang Wikipedia  [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa).  

> Có nguy cơ cao bị xung đột ngăn cản bạn lưu công việc của bạn khi làm việc trên các đường cao tốc kéo dài vào các ô vuông khác, nơi người lập bản đồ khác cũng sẽ chỉnh sửa nó. Bạn nên lưu tất cả thay đổi của mình trước khi chỉnh sửa tuyến đường cao tốc và sau đó lưu thay đổi của mình thường xuyên, chẳng hạn như sau khi thêm 6 nút.


### Mạng lưới đường cao tốc

![JOSM 4][]

Ảnh chụp màn hình này hiển thị JOSM với phong cách HOT-OSM-Validate sử dụng các [JOSM styles](https://josm.openstreetmap.de/wiki/Styles). Mặc dù được thiết kế để hỗ trợ các trình xác thực, nó có thể rất hữu ích khi thực hiện lập bản đồ ban đầu. Bất cứ thứ gì có màu đỏ có một số vấn đề - màu sắc còn lại được giải thích trong khóa trong ảnh chụp màn hình này.  

1.  Phần đường cao tốc này có màu đỏ bởi vì thẻ đã nhập không chính xác và đã sử dụng một chữ cái hoa. Thẻ phải là highway = không được phân loại, có thể dẫn đến màu nâu nhạt trong ảnh chụp màn hìnhP  
2.  Đây là một phần của mạng lưới đường cao tốc cho thị trấn tới phía Tây Nam. Mạng này kết nối với mạng lưới đường cao tốc còn lại của Châu Phi.  
3.  Những đoạn đường cao tốc này "bị cô lập". Chúng không kết nối với thị trấn hoặc đến một xa lộ khác theo bất kỳ cách nào. Ở định dạng hiện tại chúng không hữu ích lắm và sẽ cần điều tra thêm để xác định liệu chúng có thể được kết nối với phần còn lại của mạng lưới hay không,cần phải xem xét có nên xóa chúng không.  


**Đường đi hoặc sông ngòi?**

![iD 5][]

Không có chế độ xem theo phong cách có sẵn để hỗ trợ sử dụng iD, nhưng trong ảnh chụp màn hình này, bạn có thể thấy một khu vực có thảm thực vật và mặt đất. Đất có vẻ là phù sa hoặc thậm chí là một vùng đầm lầy mà không có nước. Các đường màu đen và trắng rải rác biểu thị các đường dẫn trong iD & tôi đã tạm thời đánh dấu & sau đó xóa một trong số chúng để hiển thị địa hình.  

1. highway = path hoặc lòng sông ngòi. Có lẽ cả hai! Đường cao tốc với tất cả các kích cỡ thường chạy dọc heo một thung lũng sông và trong nhiều trường hợp chúng có thể chạy theo một dòng sông hoặc suối theo mùa. Trong trường hợp này, đây dường như là một vùng đồng bằng ngập lụt nhưng hình ảnh vệ tinh được chụp vào mùa khô và được sử dụng như một con đường. Điều này sẽ được gắn thẻ tốt nhất là:  
highway=path  
seasonal=yes  
surface=unpaved  
2. Đường đi có thể được nhìn thấy rõ ràng hướng tới và đi vào dải cây cối và cây bụi rậm, nhưng không thể nhìn thấy đường đi chính xác của nó qua cây. Trong những trường hợp này, bạn có thể chắc chắn rằng có sự xuất hiện của con đường, đường ray hoặc đường cao tốc, chỉ là nó bị che khuất từ tầm nhìn của bạn qua thảm thực vật. Tôi đã lập bản đồ này bằng cách tiếp tục con đường mà tôi đã theo dấu nơi nó có thể được nhìn thấy rõ ràng trên mặt đất như một đường thẳng qua cây để tiếp tục nhìn thấy rõ ràng ở phía bên kia. Hãy sử dụng điều này một cách cẩn thận, nhưng trong trường hợp này rõ ràng đường đi hiện tại có thể sẽ rất gần với đường mà tôi đã vẽ. Đây là một cách sử dụng nghiêm ngặt hơn -  nó thường để ước tính đó đường vẽ của đường cao tốc cho chỉ một vài mét nơi tầm nhìn của bạn của nó bị che khuất bởi một hoặc hai cây.  
3. Khi xóa đường vẽ, tôi có thể nhìn thấy mặt đất rõ ràng, tôi có thể dễ dàng thay thế nó bằng cách sử dụng tính năng 'undo' của iD.  

***


## Ranh giới khu dân cư

Ranh giới khu dân cư được sử dụng cho nhiều mục đích trong OpenStreetMap.  

+  Việc sử dụng đơn giản nhất là để có thể phóng to để quan sát các khu vực dân cư [OpenStreetMap.org](http://www.openstreetmap.org), khu vực có màu xám nhạt trong chế độ xem chuẩn.  
+  Trường hợp không có thời gian để lập bản đồ chi tiết ngay từ đầu, dự án trong Trình quản lý Tác vụ sẽ thường đòi hỏi một điều tương tự như sau:  

>    Thiết lập các cơ sở hạ tầng thiết yếu như trường học, nơi phục vụ nhu cầu tín ngưỡng và chợ.  
>    Vẽ các đường bao quanh khu định cư và nghĩa trang.  
>    Chúng ta sẽ vẽ các đường đi sau các nhiệm vụ khác.   
+  landuse=residential cũng có thể được sử dụng cho các mục đích thống kê, và lập bản đồ chính xác và trở nên quan trọng cho sau này  

*  Nếu bạn có thể thêm thông tin về việc có bao nhiêu cư dân trong mỗi ngôi nhà và  
 có bao nhiêu ngôi nhà được xây dựng trong khu nhất định,  
 sau đó bạn có thể vẽ đường bao khu vực này bởi landuse=residential boundary,  
 bạn có thể thiết lập một khu dân cư gần đúng cho khu vực.  
 Từ đó việc uớc tính số lượng nhân viên cứu trợ và số lượng thuốc men bây giờ trở nên thực tế hơn.
*  Đặt tên và ranh giới thường được nhập từ các nguồn khác, nhưng vị trí không phải lúc nào cũng chính xác. Một khi bạn đã có một ranh giới khu dân cư, người nhập dữ liệu có thể nhìn thấy nơi mà tên địa điểm nên được đặt.


### landuse=residential - làm thế nào để lập bản đồ


** Trong điều kiện lý tưởng **  

*Giai đoạn 1* - Một quyết định được đưa ra để lập bản đồ một khu vực, và người lập bản đồ nhanh chóng sơ bộ đưa ra ranh giới khu dân cư landuse=residential boundary xung quanh một khu vực,  
*Giai đoạn 2* - Dự án Quản lý Tác vụ được tạo ra và mỗi người lập bản đồ cá nhân tinh chỉnh ranh giới để gần các tòa nhà …  

![JOSM residential][]

![iD residential][]
 
Màn hình iD & JOSM ở trên chỉ ra chính xác ranh giới khu dân cư landuse=residential được thiết lập.  

1.  Ranh giới khu dân cư cần phải là đường kín, điểm bắt đầu và kết thúc phải trùng nhau.  
2.  Các đoạn và các nút của đường bao không nên trùng với đường bộ, đường thuỷ, toà nhà hoặc các đối tượng khác. *Ví dụ* Đường bao này không trùng các nút với các đối tượng khác nhưng có thể chạy xuyên qua nhau.  
3.  Ranh giới nên gần với tòa nhà và bất kỳ khu vườn hoặc sân nào tạo thành một phần của nhóm.  


Trong ảnh chụp màn hình dưới đây, ô vuông có chứa một phần của ranh giới khu dân cư landuse=residential. Người đã hoàn thành ô vuông bên phải của tôi đã tiếp tục trường thông tin landuse=residential qua ô vuông của họ và sau đó đã 'chuyển giao' nó cho tôi một cách chính xác bằng cách đặt ranh giới ngay trong ô vuông của tôi để tôi xác định chính xác vị trí của nó trong ô vuông của mình.  


![JOSM residential 1][]

Tôi sẽ thêm các nút mở rộng vào ranh giới, mở rộng nó theo chiều ngang trên hình vuông của tôi để nó đi xung quanh các tòa nhà, và ở phía dưới tôi sẽ tiếp tục ranh giới như một đường thẳng ngay bên trong hình vuông dưới đây của tôi để người lựa chọn các ô vuông dưới của tôi sẽ có thể mở rộng nó xung quanh bất kỳ tòa nhà nào họ có.  

Đây là một hoạt động khó khăn - bạn chỉ có thể nhìn thấy một phần nhỏ của toàn bộ thị trấn / thành phố / làng mạc và mặc dù bạn sẽ làm tốt nhất để tạo các ranh giới khu dân cưlanduse=residential boundary, nhưng bạn cũng rất có thể là một người kiểm chứng tổng quan về một vài ô vuông khác được thiết lập bởi các cá nhân khác.  

> Có nguy cơ cao bị xung đột khi làm việc trên một mảnh đất sử dụng đất = ranh giới khu dân cư landuse=residential khi nó mở rộng ra các ô vuông khác, nơi người lập bản đồ khác cũng sẽ chỉnh sửa nó. Bạn nên lưu tất cả thay đổi của mình trước khi chỉnh sửa ranh giới, và sau đó lưu thay đổi của bạn thường xuyên, chẳng hạn như lưu sau khi thêm 6 nút.

***


## Tường bao các toà nhà  

Các toà nhà được đưa vào bản đồ vì một số mục đích;  

*  Mật độ các tòa nhà trong một khu vực là chỉ số để ước tính về số người ở đó.  
*  Kích thước, hình dáng và vị trí của một tòa nhà có thể giúp xác định nó như một địa điểm sơ tán hoặc cơ sở điều trị.  
*  Kích thước, hình dạng và vị trí tương đối của các tòa nhà có thể được sử dụng để xác định các vị trí cụ thể như giếng, trạm cấp cứu, trường học,...  
*  Có khả năng ước tính mức độ thiệt hại của tòa nhà, có thể được sử dụng để ước tính số thương vong tiềm năng và mức độ hỗ trợ có thể được yêu cầu - hiện nay (tháng 1 năm 2015) đang được thảo luận để sử dụng trong tương lai.  


### Toà nhà - Làm thế nào để thiết lập

Phần lớn các toà nhà có yêu cầu lập bản đồ bởi HOT đều dựa trên các hình chữ nhật có góc vuông hoặc tròn. Nếu tòa nhà có vẻ là hỗn hợp của hai tòa nhà, có vẻ như bạn đang nhìn vào một tòa nhà có vạch kẻ bị che khuất bởi bóng tối, sự phản chiếu, lá hoặc tương tự.  

Đối với một số nhiệm vụ chỉ cần phác thảo một khu vực, nhiệm vụ có thể chỉ định rằng các tòa nhà có thể được ánh xạ như các nút, nhưng những tình huống này hiện nay rất hiếm.  


#### building=yes

Trừ khi các hướng dẫn của dự án chỉ định khác, các tòa nhà nên được gắn thẻ **building=yes**  

*  Thông thường có thể có sự chậm trễ thời gian giữa hình ảnh vệ tinh được thực hiện và lập bản đồ được thực hiện. Có khả năng tòa nhà mà bạn đang tìm kiếm dường như không có mái nhà, hiện đã được hoàn thành và bây giờ đang ở. Cũng có thể bạn đang nhìn vào một tòa nhà với nhiều tầng, những tầng dưới cùng đang được ở, và tầng trên cùng không có mái nhà hiện không được sống.  

> **Thiết lập các toà nhà sử dụng iD** - khi bạn đang sử dụng công cụ khu vực trong iD để tạo ra hình dạng cơ bản, bạn phải nhớ để sau đó thay đổi thẻ để building= yes. Cài đặt mặc định sẽ chỉ gắn nhãn hình dạng là area = yes. Nếu bạn đang truy tìm là một tòa nhà có góc vuông, vui lòng dành thời gian để định vị mục truy tìm của bạn (đánh dấu và lối tắt 's').  

*  JOSM có thể nhanh chóng thiết lập các toà nhà - [Công cụ JOSM building được giải thích tại đây](/vi/josm/more-tools/#the-buildings-tools-plugin)  

![Buildings iD][]

Màn hình chỉ ra một phần ô vuông đang được chỉnh sửa. Lưu ý chiều cao tới mặt đất là 15 mét - về con số bạn nên điều chỉnh khi chỉnh sửa các tính năng. Khi thiết lập, bạn nhắm tới tòa nhà nơi nó đáp ứng mặt đất:  

1.  **Toà nhà bo tròn.** Trong một số trường hợp các toà nhà có thể thấp và bóng của nó khó có thể nhìn thấy. Nếu bạn đứng giữa chúng, chúng sẽ xuất hiện giống như mái vòm. Tôi đã vẽ và chỉ gắn một thẻ là **building=yes**. Để nhanh chóng thêm các toà nhà còn lại trong JOSM hoặc ID, tôi lựa chọn cái này (đánh dấu), trên bàn phím nhấn *Ctrl+c*, và di chuyển con trỏ tới trung tâm của toà nhà khác có cùng kích thước, nhấn phím *Ctrl+v*. Khi tất cả các tòa nhà bo tròn có kích thước này đã được thêm vào vùng làm việc của tôi, tôi dán một tòa nhà trên một tòa nhà có kích thước khác nhau, JOSM - sử dụng *Alt + Ctrl* và chuột để định lại kích thước đúng kích cỡ, sao chép nó và sau đó dán lên tất cả các tòa nhà tròn có cùng kích thước.  
2.  **Toà nhà hình chữ nhật.** Những tòa nhà đặc biệt này đang tạo ra một bóng dâm đáng chú ý. Bóng dâm có thể giúp xác định hình dạng của tòa nhà bị che khuất bởi đối tượng khác. Bạn sẽ thấy rằng nhiều tòa nhà không đơn giản như vậy, và có mặt hoặc dạng chữ 'L' - bạn phải theo dõi hình dạng thực tế của tòa nhà vì điều này sẽ giúp xác định nó khớp với tên và dữ liệu khác đang được thêm vào trong quá trình khảo sát mặt đất.  
3.  **Tường bao của một tổ hợp toà nhà.** Sau khi kiểm tra hình ảnh, phóng to và thu nhỏ cho đến khi tôi hài lòng rằng từ hình dạng của đối tượng (sử dụng bóng của nó để xác định), tôi tin rằng đây là một bức tường, và tôi đã gắn thẻ nó **barrier=wall**. Có thể thay thế bằng barrier=fence and barrier=hedge.  
4.  Tôi đã thêm trường barrier=wall vào trường building=yes tại góc toà nhà.  


### Hình ảnh vệ tinh bóp méo hình dạng tòa nhà.


![Buildings_2][]

1.  Hình ảnh vệ tinh ở trên là của tòa nhà, nhưng vệ tinh không phải là trực tiếp trên cao, do đó tòa nhà có vẻ bị méo và một bức tường cuối có thể nhìn thấy được trong hình ảnh. Do góc này, mái mái không có hình chữ nhật. Mặt trời là thực tế trực tiếp trên tòa nhà, để bóng của tòa nhà được chỉ ra bởi các mũi tên từ hình 1 xác nhận rằng tòa nhà là hình chữ nhật.  

2.  Để lập bản đồ tòa nhà này, tạo một hình chữ nhật kéo dài từ các mũi tên của điểm 2, đến nơi mà bạn ước tính kết thúc tòa nhà, được chỉ ra bởi điểm 3 trong hình này.  


***


Để biết thêm thông tin - xem các đường dẫn về các hướng dẫn bên dưới.


# Đọc thêm

-  [West African HOT Mapping Tips by user Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
-  [OSM wiki entry concerning validating](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
-  [Highway Tag Africa - the preferred reference for highway tagging in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
-  [Short Tutorial in French for remote mapping](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)

[iD 3]: /images/coordination/iD_3.png
[JOSM 4]: /images/coordination/JOSM_4.png
[iD 5]: /images/coordination/iD_5.png
[iD residential]: /images/coordination/iD_residential.png
[JOSM residential]: /images/coordination/JOSM_residential.png
[JOSM residential 1]: /images/coordination/JOSM_residential_1.png
[Buildings iD]: /images/coordination/Buildings_iD.png
[Buildings_2]: /images/coordination/Buildings_2.png