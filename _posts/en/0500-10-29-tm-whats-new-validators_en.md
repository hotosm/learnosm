---
layout: doc
permalink: /en/coordination/tm-whats-new-for-validators/
lang: en
title: What is new for Validators in the Tasking Manager 3
category: coordination
date: 0500-10-21 12:00:00
---

# What is new for Validators in the Tasking Manager 3


## Your User Profile

The Tasking Manager 3 has a number of new features directed toward folks doing validation. Please make your **first activity in the new Tasking Manager visiting your User Profile**, which can be selected from the popdown menu under your OpenStreetMap (OSM) user name in the upper right corner.

![profile][]

1. **Email Address** - The Tasking Manager can now send an email whenever a user receives a message in the Tasking Manager. This is very important to people doing validation. Comments left when validating mapping are now much more likely to be seen by the person whose work you are validating. Please be sure to **add your email address** to your profile as well.

2. **Validator Role** - Projects can optionally require experienced validators to validate project mapping. While "Mapper Experience Level" is automatically set based on OSM changesets, the validator role is currently only set by project managers manually. The initial list of folks with the validator role is incomplete, please contact a project manager to have your name added to the list of those with the validator role if you are an experienced validator who does not have the validator role in the Tasking Manager. **Please note**: The validator role is Tasking Manager wide and therefore we ask project managers to only assign this role to validators whose validation work they know directly, and have first hand knowledge the validator is qualified to validate any project in the Tasking Manager.


## Validation Process

### Step 1 - Task Selection

Validating can only be done by clicking the "Validation" tab on a Project page. Once you have selected the "Validation" tab you have three main options for how to select tasks to validate.

![selection][]

1. **Select an individual task** to validate - This is exactly the same process that exists in the current Tasking Manager, you click on a task or use the "Validate a Random Task" button and then click "Start Validating" and launch your editor.

2. **Select by area** - This allows you to draw one polygon on the task map and it will select all of the tasks that are available for validation. You can then click "Start Validating" and it will lock them all for validation.

3. **Select by user** - A list of all the users who have contributed to the project is on the left side of the page along with some information about them. You can sort by any of column headings:

- Level - Based on the number of OSM changesets
- Registered - How long they have been using the Tasking Manager.
- Last Validation - The last time they had a task validated

Using your mouse to hover over the "Start" link will highlight the tasks that user has completed. Clicking on the "Start" link will lock them all for validation.

### Step 2 - Validating Multiple Tasks

Selecting one single task and launching your editor of choice will behave the same as in the previous version of the Tasking Manager, the real difference will be when you select multiple tasks and launch your editor.

There is less of a change in the iD editor, the big difference being that instead of seeing just one task outline, you will see multiple task outlines. Because iD only downloads data for areas you zoom in close for and accepts GPX outlines there is not much difference in your workflow, just more areas locked in the Tasking Manager and more area to review mapping in. 

Using JOSM however is now slightly different. When launching JOSM two OSM data layers will be created, one will be non-uploadable and it will have the outlines of the tasks that need validation and one will be a blank, editable OSM data layer. **No data will be downloaded from OSM**.

![multiple][]

You will use the with the task outlines as a guide for downloading OSM data to the editable layer and proceed to validate as you normally would.

When you are done validating, you have the three standard options, Mark all Valid, Mark all Invalid, or Stop Validating. When multiple tasks are checked out for validation, the same option must be chosen for all the tasks checked out. You can not, in the same workflow, mark some as valid and mark others as invalid.

If you need to mark tasks with different statuses after reviewing them, please check them out individually to mark them accordingly.


## Other Validation related Items

1. **Questions and Comments tab** - This is now a tab for project level questions and comments. Validators should review the the comments in that tab and answer questions as needed. Validators can also use that tab and the "Contact the Project Manager" link to direct questions or comments to the creator of the project.

2. **Task level comments feed** - The Activity and Stats button in the upper right hand corner of the tasks map now has a feed of all the comments left on the individual tasks. Validators should review that list of comments to help identify issues and answer questions.

[profile]:   /images/coordination/tm3_wnv_profile.png
[selection]: /images/coordination/tm3_wnv_selection.png
[multiple]:  /images/coordination/tm3_wnv_multiple.png
