---
layout: doc
title: Validation
permalink: /en/coordination/validation/
lang: en
category: coordination
---

# Validation

Validation is the process of an experienced mapper reviewing the mapping of the initial mapper of a project task. It is designed to confirm that the mapping is complete and the quality of the data is good. It is also there to give encouragement to mappers by thanking them for their time, confirming that their mapping is good or giving instructions on how to improve their mapping.

The most effective practice is to find beginner mappers at the early stages of their mapping, putting their mind at ease and giving them confidence by confirming that they are doing the right thing, or helping them to correct any errors that they may have before they have mapped too many tasks. This reduces the amount of fixing required at a later stage to get their mapping up to standard and gives them the encouragement in knowing that they are supported in what they are doing.


### Your User Profile

The Tasking Manager 4 has a number of changes that affect the data available for doing validation. Please make visiting your user profile your first activity in the new Tasking Manager, by selecting *Settings* from the popdown menu under your OpenStreetMap (OSM) user name in the upper right corner.
* Under *Personal Information* make sure you have filled in your preferred email address.
* Under *Settings* switch on *Expert Mode* and select your default editor and preferred language.
* You can also choose what notifications you wish to receive.

### Getting Started


To get started click on *Explore Projects* on the top bar of the page.
On the Projects page you can click on any of the projects to go to that project or you can use the range of filters for selecting the project or projects you wish to see or select from.

![TM choose project for validation][]

![TM filter project for validation][]

After filtering and/or selecting the project you want to work on, scroll down to the bottom of the next page to *Questions and Comments* to see any messages left by previous mappers/validators regarding the project. Then in the bottom right click on the red button *Contribute* to move to the next page.

This page should open with the project instructions visible (1). If not then select *Instructions*. Read the instructions to understand what imagery is to be used and what the mappers have been asked to do. This will give you an understanding of why the mappers are mapping the way they do.

If the instructions are misleading and the mappers are consistently getting it wrong because of that you can contact the Project Manager to change the instructions to reduce the effects of that happening.

![TM select for validation][]

Check that you have the correct Editor (2)
Select a blue task to validate. You can select multiple tasks at once (3)
Click on the red button *Validate selected task* at the bottom right (4)

A new page will open in the Tasking Manager and the selected task will be loaded into your editor. On this page your task will have a red padlock, other tasks locked will have black padlocks. You are still able to access the *Instructions* on this page. You can see who has mapped or validated this task in the *History* and access their profile and statistics by clicking on their name. When validating multiple tasks click first on the task number before clicking the name.

On the *Resources* tab you can view the changesets of the entire project or the task. When validating multiple tasks you can select the changesets of each individual task by clicking "Select task".
You can also download the AOI or Tasks Grid files.

<!-- ![TM resources tasks validate][] -->

### Selecting Multiple Tasks for Validation

On the Contributions tab, if the mapper has more than one task completed then they will be selected on the map if you press on one of the numbers. You can download all the tasks in one go to validate. They will automatically adjust your JOSM/iD window to accommodate all of them.

![TM select for validation by contributor][]

Depending on which editor you are using, this feature will behave differently.

In JOSM, two OSM data layers will be created titled “Boundary for tasks: &lt;task number listing&gt;  - Do Not Edit or Upload” and “OSM Data”. You can now start validating.

<!--
#### Select by drawing a polygon

This option allows a validtor to draw a square around a group of tasks and check them all out at once.

Once in the editor of their choice, **the validator will have to manually download the OSM data** for task areas selected. This is to prevent downloading all of the OSM data between the selected Tasks.
-->

<!--
#### Select By User

A list of mappers who have marked a task as done is presented. Hovering over anyone in the list will highlight the tasks they have marked as completed. The list also prensents three important pices of information about the mapper, their experience level, the number of days since they first started mapping using the Tasking Manager and the number of days since they last received feedback via validation. This allows the validator to specifically target new mappers, experienced mappers or mappers who have not had any feedback for an extended period of time.

Clicking on the "Start Validating" button will lock all the tasks completed by that mapper and allow the validator to open them in their editor of choice.

![TM multi selection][]

Once in the editor of their choice, **the validator will have to manually download the OSM data** for task areas selected. This is to prevent downloading all of the OSM data between the selected tasks.
-->

### Finalizing Validation


To validate/invalidate a task you need to select Yes/No under *Is this task well mapped*, then enter your comment, then click the red button *Submit task* to save before selecting another task. If you want to leave without changing the status of the task leave a comment then click on *Stop validation*.

![TM finalize validation][]

In case you validated multiple tasks they will be presented in a list. Click Yes or No next to the label "All" to mark them all at once (see arrow in picture). Click the link "Copy comment" to copy a comment in one go to all other tasks (see arrow in picture). Or choose Yes or No for every individual task, including a comment.

![TM finalize multiple validation][]

For those two choices you can and should leave a friendly, encouraging comment addressed to the mapper(s) involved and provide thanks for their contributions and feedback on their mapping. Please be considerate before marking a task as invalid. If just a few bits are missing add them yourself, explain what was missing in your comment but nevertheless mark the task as valid. New mappers will consider their completed task marked as invalid as a fairly harsh comment.

You can access a mapper’s statistics on their profile page at https://tasks.hotosm.org/users/_username_. <!-- If the mapper has been making a consistent mistake you can find the projects that mapper worked on by going to their project page and selecting My Tasks below their name. If you want to see all the tasks mapped by that mapper in a specific project you can search their tasks by project id. -->

### OSMCha

OpenStreetMap Changeset Analyser or OSMCha shows changesets in a very visual way. You easily see what a mapper has added, changed and even deleted. With OSMCha you are able to see things that are hidden or hard to spot compared to using other validation tools.

You start OSMCha through the HOT Tasking Manager’s main project page or through an individual task.

![TM OSMCha_project][]

![TM OSMCha_task][]

An example: mapper A incorrectly deletes buildings, then mapper B adds them again and closes the task. Using only the Tasking Manager you will not see mapper A’s deletions any more. And consequently will not inform them of their actions. The same applies to changed features.

The strength of OSMCha lies in the use of filters. Eg. if you start it via the Tasking Manager's main project page it lists all the changesets in the project. Using the filter “New mapper” narrows the list down to only beginner mappers. That way you can quickly address them, even before the tasks they mapped become available to validators.

If you want to see in wich task the changeset was created you can open the changeset directly in JOSM.

A warning: a changeset could have been changed later on. So never change or correct mappings via OSMCha, always do that via the Tasking Manager.

Links:
* [OSMCha](https://osmcha.org/)
* [OSMCha wiki](https://wiki.openstreetmap.org/wiki/OSMCha)

[TM choose project for validation]: /images/coordination/tm4_validation_select_projects.png
[TM filter project for validation]: /images/coordination/tm4_validation_filter_projects.png
[TM select for validation]: /images/coordination/tm4_validation_selection.png
[TM select for validation by contributor]: /images/coordination/tm4_validation_contributor_selection.png
[TM multi selection]: /images/coordination/tasking_manager_multi_selection.png
[TM finalize validation]: /images/coordination/tm4_validation_finalize.png
[TM finalize multiple validation]: /images/coordination/tm4_validation_finalize_multiple.png
[TM finalize validation multiple tasks]: /images/coordination/tm4_validation_finalize.png
[TM OSMCha_project]: /images/coordination/tm4_validation_osmcha_project.png
[TM OSMCha_task]: /images/coordination/tm4_validation_osmcha_task.png
