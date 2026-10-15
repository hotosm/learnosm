---
layout: doc
title: osm2pgsql
permalink: /zh_TW/osm-data/osm2pgsql/
lang: zh_TW
category: osm-data
---

osm2pgsql
==========


In the previous chapter we saw how to set up Postgresql with PostGIS in Windows and how to set up a database and load it with shapefile data. In order to get OpenStreetMap data into a database, you could get the data in shapefile format and use the shapefile loader, but this may leave you without all the data that you want. In this chapter we will learn how to use **osm2pgsql**, a command-line program for loading raw OSM data into a PostGIS database.  

We will go through the steps to set up osm2pgsql on Windows, though the steps should be roughly the same on another operating system, assuming you have set up your PostGIS database(s) correctly.  

取得 osm2pgsql
-------------

要下載適用於 Windows 系統的 osm2pgsql，請打開瀏覽器並移至 <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>。  

![windows binary][]

- 下載名為 **osm2pgsql.zip** 的壓縮檔  
- 在系統解壓縮下載的檔案。我們需要將解壓縮後的資料夾路徑加入之系統路徑，因此你應該將移動至一個你往後不會再作移動的路徑。  

![unzip it][]

- In the osm2pgsql directory that you unzipped is a file called osm2pgsql.exe.  This is a program that we will run to import the data, but in order for Windows to find it, we need to add its location to the system path.  Click on the Start Menu and type “system path.”  

![system path][]

- 你應該可以看見一個名為 “編輯系統環境變數” (Edit the system environment variables)  的選項。點擊該選項。  

![edit variables][]

- 點擊 “**環境變數**” 按鈕 (Environment Variables)  

![env variables][]

- 在最底處找到名為 “**路徑**” 的變數然後點擊 “**編輯...**”  

![find path][]

- 你必須將 osm2pgsql.exe 所在目錄添加至環境變數路徑。  

![edit path][]

- Add a semicolon to the end of the previous directory and then type in the full directory path of osm2pgsql.exe.  For example, if you put the **osm2pgsql** folder directly in the **C:\\** directory the path would be:  
	
**C:\osm2pgsql\Win32**  

- 點撃 OK 數次以儲存新的設定。  
- **osm2pgsql** 現應正常運作。讓我們來檢査一下。  
- Open the Windows Command Prompt. You can do this by clicking on the Start Menu and typing "**cmd**". The Command Prompt application will come up and you can press Enter or click on it.  

![cmd][]

- 在命令提示視窗輸入：  

**osm2pgsql**

- If everything is working right, you should get a message like this:  

![osm2pgsql test][]

- If you don't see an error message like this, and it says that it cannot find the application **osm2pgsql**, then you may have entered the Path variable incorrectly.  

取得原始 OSM 資料
---------------------
Before we can run **osm2pgsql** we need to have some raw OSM data to import into a database. If you don't already have a **.osm** file that you can use, try downloading a file from <https://download.bbbike.org/osm/bbbike/>. This site hosts many OSM extracts for different cities.  Find a city to import and download the PBF file for it. PBF files are compressed versions of the normal **.osm** files. You can use any of the extract services listed in the chapter on [getting data](/en/osm-data/getting-data), if you'd like the raw data for another area.  

Get the Style File
------------------
**osm2pgsql** requires the use of a custom style file to define which tags are included in the database during import. You can download the default style file [here](/files/default.style).  

匯入資料
-------------------
Open PgAdmin III and create a new database named **osm**, just as you did in the previous chapter. To import the data, we will run the **osm2pgsql** program via the command line. 

- 點擊開始選單輸入 "cmd" 並按 Enter 開啓命令提示視窗。  

![command prompt][]

Here we will run the application **osm2pgsql** with several options. We need at least to supply it with:  

- The location of the OSM Data File  
- The name of the database, and the database username  
- The style file which defines which OSM tags will be imported to the database  

We have placed our OSM file into the **C:\\** directory to make this easier.  

- Type the following command, replacing the location of the OSM file and style file with your own.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Press Enter. If all goes well, the process should begin running. It may take a few minutes for all of the data to load into the database.  

![osm2pgsql output][]

- 若你的原始 OSM 檔案過大，你可能要為 osm2pgsql 匯入程序提供額外的記憶體空間。為此，加入以下指令：  

      --cache 600

Testing It
-----------

We can test that the import was successful and view the data in our database using QGIS.  

- Open QGIS and click on the "Add PostGIS Layers" button. ![qgis add postgis button][]{: height="24px"}

- Under “Connections” at the top, click “**New**.”  
- 為新建立的連線命名。在資料庫類型 **osm** (你資料庫的名稱) 之下  
- 在下方輸入你的 postgres 使用者名稱及密碼。  

![connection settings][]

- 點撃 OK 以儲存連線設定。然後點撃 “連線” 以連線之你的 PostgreSQL 伺服器。  
- Click next to "public" to see all of the layers (tables) in your database. Notice that osm2pgsql creates a separate table for different object types - points, lines, and polygons. It also creates a roads table, which contains only major roads.  

![postgis layers][]

- Select one or more of the layers and click "Add." If asked, choose WGS84 as the CRS.  
- If everything is successful, you will see the layers you selected displayed in QGIS.  

![osm in qgis][]



總結
-------

When you want to import OpenStreetMap data into your own database, **osm2pgsql** is a great tool. It can be extremely useful when you need to be able to get the most up-to-date OSM data and customize the attributes you want, or when working on more complex projects.  

Another import tool has been developed recently, called [imposm](http://imposm.org/), and offers some speed and other improvements over osm2pgsql, although as of this writing it lacks other key functions which are promised in imposom version 3.  

請到 OSM Wiki - <http://wiki.openstreetmap.org/wiki/Osm2pgsql> 閱讀更多有關 osm2pgsql 的資訊。  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
