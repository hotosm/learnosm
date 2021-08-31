---
layout: doc
title: Manipulating Data with Osmosis
permalink: /en/osm-data/osmosis/
lang: en
category: osm-data
---

Manipulating Data with Osmosis
===============================


**Osmosis** is a powerful command-line tool for manipulating and processing raw **.osm** data. It is often used for processing large data files, for splitting OSM files into smaller pieces, and for applying a changeset to update an existing file.  

There are a great many functions available with Osmosis, and you can read about each in detail on the [Wiki](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.41). However many of the functions are quite complex and difficult to understand, particularly if you are just getting started with command-line programs and OpenStreetMap. This chapter will serve to introduce Osmosis, install it on Windows, and get started with a basic Osmosis command.  

Install Osmosis
----------------

Like osm2pgsql in the previous chapter, we will need to download and set up **osmosis** so that we can run it from the command line. The process for this will be very similar to osm2pgsql.  

You will also need some raw OSM data to work with. If you want to follow the examples in this chapter, download our sample file [here](/files/sample_osmosis.osm.pbf). You may also use a raw data file of your choosing.  

Follow these steps to download and prepare Osmosis:  

- First, download Osmosis [here](https://github.com/openstreetmap/osmosis/releases/latest).  
- Unzip the folder and place it somewhere on your system where it will not be moved. We will need to add its location to the system path so that it can be run from the command line.  

![unzip it][]

- Click on the Start Menu and type “system path.”  

![system path][]

- You should see an option named “Edit the system environment variables.”  Click on it.  

![edit variables][]

- Click on the button named “Environment Variables.”  

![env variables][]

- At the bottom find the variable named “Path” and click “Edit...”  

![find path][]

- You must add the directory where osmosis.bat is located to the Path variable.  

![edit path][]

- Add a semicolon to the end of the previous directory and then type in the full directory path of osmosis.  For example, if you put the **osmosis-latest** folder 	directly in the **C:\\** directory the path would be:  
	
      C:\osmosis-latest\bin

- Click OK several times to save the new settings.  
- **osmosis** should be functioning now. Let's check it.  
- Open the Windows Command Prompt. You can do this by clicking on the Start Menu and typing "**cmd**". The Command Prompt application will come up and you can press Enter or click on it.  

![cmd][]

- In the black command window that opens, type:  

      osmosis

- If everything is working right, you should get a message like this:  

![osmosis test][]

- If you don't see output like this, and it says that it cannot find the application **osmosis**, then you may have entered the Path variable incorrectly.  

Filtering Data
---------------

Osmosis should be working correctly from the command line now. In order to work run operations on our data file, we need to change the working directory to the place that we've put the **sample_osmosis.osm.pbf** file. To make things simple, we have placed this file in the **C:\ directory**.  

- To change the working directory in the command prompt to the C:\ directory, type the following command and press Enter:  

      cd C:\
    
- The prompt should change, indicating that you are now in the C:\ directory.  

![cd command][]

Now let's learn our first Osmosis command. We will run a command that filters all of the schools from our large file.  

In order to do this, we need to tell Osmosis a few things. We need to specify:  

- an input file (sample_osmosis.osm.pbf)  
- some rules which define what we want to filter  
- an output file (we will output an uncompressed .osm file so we can open it in JOSM)  

The command we will run is:  

      osmosis --rbf sample_osmosis.osm.pbf --nkv keyValueList="amenity.school" --wx schools.osm

Try running this command in the command prompt. When it finishes, you should see a new file in your directory, called **schools.osm**. If we open the new file in JOSM, we can see that only the schools have been filtered out from the sample file.  

![schools osm][]

Let's take a look at the command we ran piece by piece to understand how it all works. First, we call the name of the program.

      osmosis

Next, we supply the input file. Remember that this file is a compressed format.  **--rbf** is actually shorthand for **--read-pbf-fast**. Osmosis understands that the file we supply after this flag is the file we want to read from.  

      --rbf sample_osmosis.osm.pbf

The next bit of our command says *--nkv keyValueList="amenity.school"*. You might guess that this indicates that osmosis should filter out everything with the tag **amenity=school**. **--nkv** is shorthand for **--node-key-value**. This command indicates that Osmosis should filter out only nodes with the keys and values supplied in the following list. Additionaly key.value sets can be added by placing commas in between them.  

      --nkv keyValueList="amenity.school"

Lastly, we supply the name and format of the output file. We use the flag **-wx**, which is shorthand for **--write-xml**. Note that we could also use **--wb**, which is the counterpart to **--rbf**, if we wanted to output the data again in PBF format.  

      --wx schools.osm

Moving Forward
---------------

The number of processing tasks that can be done with Osmosis is enormous, and to learn more it is best to refer to the [Osmosis Detailed Usage](http://wiki.openstreetmap.org/wiki/Osmosis/Detailed_Usage_0.43) page on the Wiki.  

One useful task is being able to divide a big raw OSM file into separate parts, either by supplying rectangles or by creating bounding polygon files. You can get a basic grounding in this process at the [Osmosis Examples page](http://wiki.openstreetmap.org/wiki/Osmosis/Examples).  

[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osmosis test]: /images/osm-data/osmosis-test.png
[cd command]: /images/osm-data/cd-command.png
[schools osm]: /images/osm-data/schools-osm.png



