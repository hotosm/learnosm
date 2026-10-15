---
layout: doc
title: Penyelesaian Konflik di JOSM
permalink: /id/josm/conflict-resolution/
lang: id
category: josm
---

Penyelesaian Konflik di JOSM
====================

> Reviewed 2016-09-27  

Kadang ketika Anda bekerja di JOSM dan mengupload hasil edit Anda, mungkin Anda akan mendapatkan pesan konflik yang menyebalkan.  
![conflict detected][]  
Yang terjadi adalah Anda mendownload data titik yang akan kita namakan Titik A. Lalu ketika Anda mengedit, orang lain juga mendownload Titik A, mengubahnya, dan menyimpan perubahan tersebut kembali ke OpenStreetMap. Sekarang saat Anda mencoba mengupload Titik A versi Anda, titik tersebut berbeda dari yang telah tersimpan di OSM. Maka dari itu, JOSM tidak tahu versi Titik A mana yang harus disimpan.  

Konflik
----------

Kadang, JOSM dapat mengetahui apa yang harus dilakukan terhadap konflik, dan akan menampilkan pesan seperti ini:  
![resolved automatically][]  
Ini berarti JOSM secara otomatis memilih objek yang ada di dataset lokal supaya tidak dapat diupload ke server karena objek tersebut telah dihapus oleh pengguna lain. Pada beberapa konflik, bagaimanapun, tidak ada langkah mudah bagi JOSM untuk menyelesaikannya sehingga penyelesaian harus dilakukan oleh pengguna untuk menentukan tindakan apa yang terbaik. Ini berarti penyelesaian konflik tergantung dari Anda.  

Ini menyarankan Anda untuk melihat ke semua konflik yang ada di Layer 1 pada kotak **Dialog List**:  
![warning unresolved][]  

Jendela ini membantu Anda memberikan peringatan ketika Anda menemukan konflik. Jika Anda mengecek ke server Anda dapat memperbaiki masalah ini:  
![check on server][]  

Peringatan ini memberitahu Anda bahwa JOSM gagal menghapus titik karena masih terkait dengan sebuah garis. Untuk mengatasi ini, pengguna harus kembali ke JOSM dan menyelesaikan konflik yang terjadi sebelum dapat mengupload data:  
![still in use][]  

Penyelesaian Konflik
--------------------

Proses penyelesaian konflik cukup sederhana, meskipun dapat juga membingungkan jika baru pertama kali mengalaminya di JOSM. Pada dasarnya, setiap konflik di JOSM akan menyediakan dua pilihan - objek versi Anda atau versi yang ada di server. Anda harus memilih apakah ingin menyimpan versi Anda, atau versi yang di server.   
Anda mungkin berpikir, "tentu saja versi saya akan jauh lebih baik!" Dan mungkin juga Anda benar. Tapi pikirkan kembali contoh yang diberikan di awal. Mungkin pada saat Anda sibuk mengedit, pengguna lain juga menambahkan banyak informasi ke salah satu titik di set data Anda. Jika Anda memilih versi Anda dibandinkan versi mereka, Anda akan kehilangan semua informasi yang mereka tambahkan. Oleh karena itu Anda harus mempertimbangkan untuk menyimpan versi mereka, atau menggabungkannya dengan milik Anda.  
Saat jendela pemberitahuan konflik muncul, pilihan terbaik yang bisa Anda pilih adalah menekan tombol "Synchronize ... only." Anda mungkin harus melakukan ini lebih dari satu objek, tapi ini merupakan cara terbaik untuk memperbaiki konflik satu per satu.   
![synchronize node][]  
Ketika Anda mengklik tombol ini, akan muncul jendela yang menjelaskan mengenai konflik Anda. Pesan error nya mungkin terlihat rumit, tapi kali ini cukup sederhana. Anda akan tahu tipe konflik apa yang Anda miliki dari kotak merah yang ada di bagian atas. Konflik di bagian bawah merujuk ke bagian properti, seperti lokasi dan keberadaan objek, Ini alasan kenapa koordinat dan status yang dihapus terdaftar.  

**Tipe Konflik:**

- **Properties:**  Objek telah dipindahkan (koordinat) atau dihapus  
- **Tags:**  Tag tidak cocok  
- **Nodes:**  There is a differences in the list of nodes in two ways  
- **Members:**  Ada perbedaan pada daftar member di relasi  
![properties with conflicts][]  

Konflik hanya muncul pada dua hasil edit yang berbeda. Jika terdapat tiga atau lebih konflik, maka rantai konflik akan muncul. Untuk itu Anda harus memilih atau menggabungkannya dengan dua konflik pada saat bersamaan. Anda dapat memilih versi Anda, versi lain atau, menggabungkan keduanya.   

Pada contoh di bawah Anda tidak memiliki pilihan untuk menggabungkan. Klik kolom pertama, atau My version jika Anda percaya bahwa hasil edit Anda benar. Klik pada Their version jika Anda pikir hasil edit orang lain lebih baik.   
![conflicts resolved][]  

Ketika Anda memilih versi mana yang Anda pikir lebih baik, lalu klik "Apply Resolution." Beberapa jendela akan muncul dan Anda harus mengerjakan beberapa hal sendiri. Perbaiki beberapa editing. Lalu klik 'Upload'. Anda akan mendapatkan pesan muncul yang mengatakan:   
![command stack][]  

Pada menu Windows Anda memiliki Conflict List Dialog . Jendela ini memunculkan daftar konflik yang terjadi. Total jumlah dari konflik yang belum terselesaikan muncul di bagian atas. Anda dapat memilih atau memperbaiki konflik dengan mengklik bagian tersebut. Hal ini berguna ketika Anda memiliki banyak konflik yang harus diselesaikan.   
![one unresolved][]  
Anda tidak dapat mengupload perubahan hingga daftar ini kosong.   

Cara untuk Menghindari Konflik
------------------------

### Upload Berkala

To minimize the chance and number of conflicts it is important to upload your edits regularly.  Conflicts appear more frequently for those who tend to save the area they are working on in their local server and wait a while to upload it.  It is best to download the area you are working on, edit it and then immediately upload it.  The longer the time between downloading data and uploading changes to that data, the more likely it is that someone has edited something in the meantime. If you are at a Mapathon & editing a feature such as a highway which may be worked on by others as well, upload very frequently, perhaps every 6 edits!  

### Edit in the Area You Download

Editing in the specific area you have downloaded minimizes conflict risk.  Make sure you do not edit outside of the area that you have downloaded.  You can easily see which areas outside your download area in JOSM, because the background is made up of diagonal lines instead of being solid black.  

![edit outside area][]  

Summary
--------
When you edit in JOSM, you run the risk of running into conflicts.  Conflicts occur when an object has been edited by two people at a similar time.  By understanding what a conflict is and how to deal with it, you will be able to ensure that the best possible edits are saved to OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
## Appendix. More Specific Conflicts

### Tag Conflicts

If the tags of one version of an objects are different from the tags of
another version, the Conflict dialog shows a ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in
the tab Tags. Click on the tab to display a dialog for resolving tag
conflicts.

There are three tables displayed in this dialog, from left to right:

1.  My version: shows the tags of the first object version participating
    in this conflict. These are usually the tags of the object version
    in your local data set.
2.  Merged version: shows the merged tags. This table is initially
    empty. The more tag conflicts you resolve, the more tag values will
    we be displayed in this table.
3.  Their version: shows the tags of the second object version
    participating in this conflict. These are usually the tags of the
    object version currently stored on the server.

In the example below both versions have a tag "name". The values in the
two object versions are different, though, and JOSM therefore displays
the row with a red background. The value of the first version is
"Secondary School", the opposite version has a value "Elementary
School". You now have to decide which of these values you want to keep
and which you want to discard.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Click on the value you want to keep, in the example for instance on the
value on the left. If you either double-click on the value or click on
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), you decide to keep the value and to discard the
opposite value. The table in the middle now displays the value to keep
and the background color turns to green.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

When the button Apply Resolutionis enabled you can apply your decision.
The values you've chosen will be applied and the dialog will be closed.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Resolving differences in the node list of two versions of a way

If you see the symbol ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in the tab Nodesthen you
have to resolve differences in the list of
[nodes](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)of two
[ways](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). There
are three columns in the respective panel (see screen shot below):

1.  the leftmost table displays the list of nodes of the the local
    object version
2.  the rightmost table displays the list of nodes of the the server
    object version
3.  the table in the middle shows the list of nodes of the merged ways

Initially, the middle table is empty. You should now decide which nodes
to keep from the local dataset (the leftmost table) and which from the
server dataset (the rightmost table).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### The standard workflow

The standard workflow to resolve conflicts in the node lists of two
[object
versions](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)consists
of three steps:

1.  Pick nodes from either object version and reorder the resulting node
    list if necessary
2.  Freezethe resulting merged node list by clicking on the button
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). When you freeze the merged node list you
    tell JOSM that all conflicts in the node list are resolved.
3.  Apply the resolution

### A simple workflow: Keep the node list from your local object version

The following example shows the workflow when you decide to keep all nodes in the same order from your local object version.

-   First, select all elements in the leftmost table (either using the mouse or by 
    pressing Ctrl-A in the table) (see next screen shot):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

-   Then, click 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    to copy the selected nodes to the middle table with the merged nodes:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

-   Finally, click
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    to freeze the resulting merged node list:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    The symbol in the nodes tab now switched to 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    and you can apply the merge decisions.

### Support for comparing node lists

It can be difficult to find the differences between the node list of of two object versions, in particular for ways with many nodes.

The Conflict Dialog supports you in finding the differences. It can compare two of the node lists displayed ("my" node list, the merged node list, and "their" node list) and it can render the differences between them with specific background colors.

From the following combo box you can select which pair of node lists to compare:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.  My with Their: compares the leftmost table with the rightmost table
    in the Conflict Dialog
2.  My with Merged: compares the leftmost table with the middle table in
    the Conflict Dialog
3.  Their with Merge: compares the middle table with the rightmost table
    in the Conflict Dialog

Depending on the position of a node in the list different background
colors are used:

1.  The node is in this list only. It isn't present in the opposite list:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.  The node is in both lists, but it is on different positions:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.  White background means that a node is in both lists at the same
    position.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png