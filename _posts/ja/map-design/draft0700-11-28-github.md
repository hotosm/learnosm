---
layout: doc
title: Using GitHub
permalink: /ja/map-design/github/
lang: ja
category: map-design
---

<!--
this chapter is a draft because it's not a priority
-->

Using Github
================

GitHub is a website for storing and collaborating on projects, based on
a program called Git. At it’s simplest, it is a place where you can get
project files that someone else has created, and a place where you can
upload projects of your own for others to use. You can also return to
previous version of projects as well as open them up for other users to
collaborate. There is much more that can be done with GitHub, but just
knowing the basics will take us a long way.

GitHub and Repositories
----------------------------

1. Navigate your web browser to
   [http://www.github.com](http://www.github.com) and you will see the
   home page of GitHub, the main online repository for storing
   git projects. Note the difference between github and git. Git is a
   control system that can make any folder on your computer a
   repository, and it can track any changes that you make over time to
   that repository. GitHub is an online service that allows users to
   share their git repositories and easily collaborate with others. If
   this doesn't make sense right now, don’t worry. The main thing to
   remember is that GitHub allows users to save repositories, which can
   contain many files and folders within.

2. Visit [https://github.com/hotosm](https://github.com/hotosm) to see
   all the repositories of the Humanitarian OpenStreetMap Team. You'll
   notice on the left side the number of total repositories (18 as of
   this writing) and the number of members participating in the group.
   On the main part of the page is a list of the repositories and a
   description. You can click on any of them to see the files they
   contain.

A repository is the equivalent of a project folder. When you view
a repository on github, you are viewing the most recent state of the
files in that project.

Repositories can be either public or private. Only users with paid
account are allowed to create private repositories. We'll only be
accessing public repos anyway - all in the spirit of open-source!

When a repository is public, you can easily download the files and
use them yourself. If you have permission, you may also edit the
files and save changes back on GitHub.

![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image06.png)

Getting a GitHub Repository
--------------------------------

HOT stores many of its project files on GitHub, and so it will be useful
for you to understand how you can access these files for your personal
use.

1. Find the repository named tilemill-projects-windows. This
   repository holds several TileMill projects that have been
   predesigned to work on Windows. One project uses a PostGIS database
   as the datasource, and another project uses SQLite. If you can’t
   find the project, you can find it at
   [https://github.com/hotosm/tilemill-projects-windows](https://github.com/hotosm/tilemill-projects-windows).
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image08.png)

2. Notice that you can inspect the folders and files that are in this
   repository by clicking on them. This can give you an idea of what
   the project contains. Most projects will also have a file named
   README.md. This is a text file that contains information about the
   repository, and usually setup instructions. This file will be shown
   below the files in GitHub, so that you can read it easily. Enter
   the osm-sqlite directory and scroll down to see the README file,
   which contains instructions on how to use this repo.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image11.png)

3. To download all of the project files it’s easy! Simply click on the
   the “ZIP” button at the top of the repository page, and all the
   project files will be downloaded to your computer as a zip file.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image13.png)
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image02.png)

If you only want to access project files via GitHub, this is all you
need to know! However, if you’d like to learn more about Git and
GitHub, including how to create your own account and repositories, read
on for more information.

What is git?
-------------------

Git and GitHub are not the same thing. GitHub we’ve now seen in action.
It’s a website that hosts repositories and makes it easy for people to
share project files. It is based on Git, which is a small computer
program that allows users to save different versions of texts or code
throughout a project’s lifetime.

Let’s take a moment to understand how git works, because it can
initially be a difficult concept to understand. As already mentioned,
git remembers the revision history of files. But rather than saving a
file every time it changes, git saves a file once, and then each time
you save a new version, it saves all of the changes to that file. This
makes storage far more efficient, and you can easily keep the entire
history of a group of files without using a lot of disk space.

Git is also very helpful because you can keep your files safely stored
on GitHub, but work on copies of the files offline on your computer.
Then, when you want to commit your changes, you can do so and
synchronize the changes with github. Also, when you store your projects
on github, multiple people can copy and edit the files at the same time,
and because the project is hosted online, it is difficult to lose or
accidentally erase any of your files.

The workflow for editing a git repository is as follows:

1. clone the repository from GitHub onto your computer
2. modify the files in the local directory
3. stage the files, indicating which files have changes you
want to save
4. commit the changes to your local repository, effectively
saving all your changes
5. sync the repository with the main project on github

This is the basic process for working with a git project. Git is far
more complex, allowing users to do just about anything in terms of
merging and comparing edits, and branching repositories. We won’t throw
too many new concepts at you at once, so next, let’s see how we can
clone an existing repository to our local machines.

Install GitHub (git)
--------------------------

1. You can easily install a GUI version of git by going to this address
   and downloading the installer. There are installers for various
   operating systems. 
   [https://help.github.com/articles/set-up-git#platform-windows](https://help.github.com/articles/set-up-git#platform-windows)
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image00.png)

2. Click “Download GitHub for Windows” to download the installer.

3. Follow the instructions to install.

Sign Up for GitHub
-----------------------

1. To sign up for a GitHub account go to
   [https://github.com/plans](https://github.com/plans). To create
   your own repositories you will need an account. If you are only
   planning to make public repositories, you can have a free account.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image05.png)

2. Click “Create a free account” and follow the instructions to create
   your account.

Creating a New Repository
----------------------------

1. Now let’s create a repository that we can share with others. Sign
   in to GitHub and click “Create a New Repo” in the upper right corner.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image07.png)

2. Give the new project a name and a description. By default the
   project will be made public. The project will be empty once
   created, but we can initialize it with a README file by checking the
   box.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image12.png)

3. Now that the repository has been created, you can clone it to your
   computer. Open the GitHub application. You will
   need to add your login information to the application so that it can
   access your account online. You can change this information by
   going to the Preferences menu.

4. Find your GitHub repositories by clicking on your username. Once
   you’ve found the new project click “Clone to Computer.”
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image04.png)

5. This will open a dialog where you can choose the location you want
   this repository to be cloned.

   Once the repository has been cloned, you can treat the new folder on
   your computer like any other. In fact it is no different, except
   that it has some special files in it that keep track of the changes
   that you make over time.

   In this example we have copied the geography-class directory that we
   were editing in TileMill in the previous chapter. This directory
   should be located in My Documents -> MapBox -> project.

6. Go back to the GitHub program and click the arrow to the right of 
   your project name.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image03.png)

7. Here you will see a list of all the files that have been added or
   changed in the repository. In our case we are adding all of the
   files in the geography-class folder. In order to save our changes,
   we must type in a summary of the changes and then commit them.
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image09.png)

8. Click “Commit” to commit the changes locally.

9. Lastly, we need to synchronize our changes with GitHub. To do this,
   click “Sync.”
   ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image10.png)

10. Go back to your web browser and look again at your repository on
    github. You will see that all the files have been saved
    successfully to the repository online.
    ![]({{site.baseurl}}/images/en/advanced/en_adv_ch4_image01.png)

Summary
-------------

In this chapter we’ve offered a brief introduction to Git and GitHub, so
that you can get started maintaining your projects online and accessing
the projects of others. For more information we recommend checking out
the GitHub help pages at
[https://help.github.com/](https://help.github.com/).

<!--
^[[c]](#cmnt3)^

[[a]](#cmnt_ref1)MrPatrickOswald:

depending on the GUI you are using, the windows might look a bit
different from the screen shots below. nevertheless the fucnctionallity
should be the same.

[[b]](#cmnt_ref2)MrPatrickOswald:

it would be nice to have a little explanation what happens if some
people edit a repository at the same time and individually commit their
changes... how does github treats the conflicts of having 2 different
versions than... or what to consider when  working together on one
project using github..

[[c]](#cmnt_ref3)Katrina Engelsted:
Good source: http://nathanj.github.com/gitguide/tour.html
--> 
