---
layout: doc
title: Tasking Manager Administrator Guide
permalink: /en/coordination/tm-admin/
lang: en
category: coordination
---

# Tasking Manager Administrator Guide


**If the user interface of the version you use looks different from the one described here then you should consult [our version overview](/en/coordination/tm-disambiguation)**

Section Index
-------------
-  [Login and access](/en/coordination/tm-admin/#login-and-access)
-  [Permissions](/en/coordination/tm-admin/#permissions)
-  [Create a mapping project](/en/coordination/tm-admin/#create-a-mapping-project)
    -  [Define mapping area](/en/coordination/tm-admin/#define-mapping-area)
    -  [Define tasks](/en/coordination/tm-admin/#define-tasks)
    -  [Advanced: Define tasks with imported data](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-geodata)
    -  [Project area trim](/en/coordination/tm-admin/#project-area-trim)
    -  [Name the project](/en/coordination/tm-admin/#name-the-project)
-  [Edit a mapping project](/en/coordination/tm-admin/#edit-a-mapping-project)
    -  [Description - the first thing users learn about your project](/en/coordination/tm-admin/#description)
    -  [Instructions - what the users should do](/en/coordination/tm-admin/#instructions)
    -  [Metadata - where the project belongs to](/en/coordination/tm-admin/#metadata)
    -  [Priority Areas - where users should start mapping](/en/coordination/tm-admin/#priority-areas)
    -  [Imagery - the basis for mapping](/en/coordination/tm-admin/#imagery)
    -  [Permissions - who is allowed to map and validate](/en/coordination/tm-admin/#permissions)
    -  [Settings](/en/coordination/tm-admin/#settings)
    -  [Actions](/en/coordination/tm-admin/#actions)
    -  [Instruction Notes](/en/coordination/tm-admin/#instruction-notes)
    -  [Considerations concerning Imagery](/en/coordination/tm-admin/#considerations-concerning-imagery)
    -  [Proofread and Publish](/en/coordination/tm-admin/#proofread-and-publish)

The Tasking Manager is the essential tool to coordinate mapping on OpenStreetMap. It supports humanitarian mapping initiatives, conducting mapathons or creating mapping tasks for students. The application divides an area of interest into manageable geographic chunks that can be completed rapidly and collaboratively. This approach allows the distribution of tasks to many individual mappers, while reducing possible editing conflicts. 

The software encourages accurate and quality mapping data by providing a consistent set of instructions for your mappers (e.g. 'map all roads and buildings'). In short, the Tasking Manager is how you set up and direct the workflow for open mapping activities. 

This guide describes the basic administration of the Tasking Manager. It covers instructions to create and modify mapping projects and handling permissions for mapping and review of crowd-sourced data.

## Login and access

In order to login to the Tasking Manager an OpenStreetMap (OSM) account is needed. You can visit the [HOT Tasking Manager](http://tasks.hotosm.org), or any other community instance of your preference. There click `Sign up` and it redirects you to the [OpenStreetMap website](https://www.openstreetmap.org) to create your account. Or click `Log in` if you have already one, and in the pop-up you can give the Tasking Manager limited access to your OSM account.

## Permissions

The most basic user level is **mapper**. Mappers are able to login to the Tasking Manager to find and select a mapping project to work on. All mapper functionality is described in the [LearnOSM Tasking Manager Mapper Guide](/en/coordination/tm-user/). Note that some projects, such as those in draft state (i.e. unpublished), or restricted to certain teams, are not visible to regular mappers. 

All special permissions are handled by *organizations* and *teams*. An **organization** is the main umbrella, and under each organization mapping projects and teams can be created. An organization could represent a data user such as a humanitarian organization, or any OpenStreetMap community. If you need to set up your organization on the Tasking Manager, contact the technical maintainers of the Tasking Manager instance. See [HOT Tasking Manager Organizations](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations) for a list of organizations which are present on HOT's Tasking Manager. If your community or organization is not listed there and you'd like to create projects on HOT's Tasking Manager, please complete [this form](http://bit.ly/HOTTasking) to register your interest. 

Every organization has one or more **managers**. They have the permission to create and modify associated projects. All manager options can be accessed through the `Manage` section in the main navigation.

Managers of an organization can create **teams**. Teams are groups of OpenStreetMap users and they can be publicly visible or private. They also have one or more team managers. Teams can be set up so that users can join a team on their own or 'invite only', which means that the team managers are notified about requests to join and must decide upon them.

For each project, administrators can assign specific teams to grant or restrict access to either mapping, define who can validate the data, or who else is able to edit the project's metadata.


## Create a mapping project

Click on `Manage` in the navigation on the top, In the first row you see a space for 'Projects'. Next to it, click on the `Add` button to create one.

![TM Add Project][]

You may choose between defining the area of interest (mapping area) of your mapping project by either:

* Option 1: `Draw` the area of interest manually
* Option 2: `Upload file` to import the area of interest as a geojson, KML or zipped shapefile

![TM New][]

### Define mapping area

* Option 1: `Draw` the area of interest manually

1. You may switch to other background layers using the buttons on the top. 
1. Click the `Draw` button on the left.
2. To draw a polygon representing the mapping area in the map frame hold the right mouse button down to move the map without clicking, which will add a node. The polygon should tightly frame the area of interest. This saves time for completing tiles that are not of interest (i.e. ocean, forest).
3. Click on your starting point to complete the polygon.
4. Continue adding nodes with a single mouse click. A double mouse click will finish the polygon. <!--After completing a polygon you can move the nodes or add new ones to get the area just as you want it.-->

<br>

* Option 2: `Upload file` to import the area of interest as a geojson, KML or zipped shapefile

1. In the first step of creating a project click on option 2, the ‘Upload file’ button.
2. Browse to your file in the File Upload window.
3. Click the file name to highlight the file and then click ‘Open’.
4. Imported areas of interest cannot be adjusted in Tasking Manager.

You might be uploading a file that already has the tasks (small mapping squares) pre-defined. Find more information about this in the [Define tasks with imported data](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-geodata) section below.

> NOTE: The Tasking Manager has limits! The maximum technical limit for a project is 5,000 km², although to ensure your project doesn't take too long to complete try and keep it under 1,000 km². If you need to map an area larger than this then you will need to create several projects. You'll be able to see the project size in the bottom left hand corner of the preview map. 

### Define tasks

After the overall mapping area has been defined, it is going be divided into smaller areas called *Tasks*. You must consider your project's task sizes very carefully. Well designed projects have appropriate task sizes, allowing them to be completed as efficiently as possible. 

![TM Tile Sizes][]

The project area is automatically split into grid cells and each cell becomes a task. Use the `Larger` and `Smaller` buttons to adjust the overall size of the task squares. The default task size is likely to be much too large, as you change the task size note the task size listed on the left next to 'The size of each task is approximately ... km²'.

**Task sizes**: Please take your time and set your task sizes very carefully! Try and aim to reduce your task size down to where you think it would take a confident mapper 15 minutes to complete. The optimal task size therefore entirely depends on the feature(s) you are asking mappers to identify and the density of those features. For example, a road mapping project in a rural area would have much larger tasks than a project that involves digitizing buildings in a dense settlement.

> Zoom in and activate the Bing imagery to determine a good task size. You can switch between several background map layers with the buttons on the top of the map.

After you've adjusted the overall grid task size, you can selectively split certain tasks into four smaller ones with the `Click to split` button. Or you can `Draw area to split`, and it will let you draw a polygon over an area to split all tasks within. These functions are particularly useful if the density of the feature that you want to map varies across your project area. For example there might be a densely built coastal area which need small tasks and an inland rural area that needs much larger tasks. The Reset button will remove all of your custom splitting.

> Considerations for deciding on task sizes:
> -  Tasks can be split, but there is no option to re-merge them once a project is created
> -  Once a project is created, splitting tasks is very time consuming and has to be done one task at a time
> -  On the edge and corners of tasks, there is always the potential to get in conflict with a neighbouring mapper. Smaller tasks means more corners and edges. There is a trade-off in the size to make it easy for mappers, but to not produce mapping conflicts between them.
> -  Small tasks are easier to map, but more tasks means more time needs to be spent by mappers updating the status of each, and projects with tasks that are too small can therefore be inefficient.
> -  Beginner mappers roughly need four times as long as experienced mappers.
> -  Beginner mappers need to develop an eye for satellite imagery. Spotting the right features might be difficult.

Once you are happy with your task sizes, click `Next`.

### Advanced: Define tasks with imported data

If you uploaded a file to define your project area, that file may also contain the shapes for the individual tasks. For example, a completed project from MapSwipe which focuses on populated areas or a complex grid you have pre-created in QGIS. If that is the case, make sure to enable the 'Set tasks using uploaded polygons' toggle. This will skip straight to the naming stage of project creation. 

![TM New Polys][]

### Project Area Trim

![TM Trim][]

After determining the task sizes you will have the option to trim the tasks to the extent of your mapping area. You will almost certainly want to do this. Click on `Trim` to remove all task squares which do not overlap your project area. 

![TM Trim coarse][]

If you toggle on 'Trim the tasks to define the exact Area of Interest for mapping.' before clicking on `Trim` the overlapping task portions at the edge of your area of interest will be trimmed sharply against your area of interest.

![TM Trim fine][]

Trimming sharply may result in some extremely small tasks. These tiny tasks can confuse mappers. You can choose to remove them by selecting `Discard` when you see the message 'There are ... tasks smaller than 2,000m². Would you like to discard them?'

> Take note of the number of tasks that your project has (look in the bottom left hand corner of your map). The maximum technical limit for the number of tasks in one Tasking Manager project is 5,000. However, to ensure your project doesn't take too long to complete, try and keep it under 1,000 tasks - if you need to map a larger area try splitting it into smaller projects. 

Click `Next`.

### Name the project

A project's name is one of its most important aspects when it comes to being discovered by the wider public. Try and include the name of the country the project is located (e.g. South Sudan), the reason for mapping (e.g. COVID Vaccination) and also the more specific location, maybe the district or settlement name (e.g. Yambio County). For example a full project name might be: _South Sudan, COVID Vaccination, Yambio County_. 

Ensure your organization is selected under the 'Organization' field. 

> Before completing this stage make sure you are happy with the project's area of interest and the overall number of tasks, these elements cannot be adjusted later on. 

Click `Create`. Your project will be created but it will not publish immediately - you'll be directed to the Edit menu of the project first. 

## Edit a mapping project

You'll now see the 'Edit' menu of your project. Before the project can be saved, you'll need to go through the 'Edit' menu carefully to complete setup. Here is a quick summary of the sub-menus you will see on the left hand side:

- Description - Set the status, priority and text description associated with your project.
- Instructions - Detailed instructions for how to map the needed features and approach the project.
- Metadata - Define the features that need to be mapped. Also includes information used for categorizing projects, used in filtering projects.
- Priority Areas - Allows you to specify parts within the project area that should be mapped first.
- Imagery - Choose the imagery that will load by default when volunteers map your project. 
- Permissions - Allows you restrict access to the project for mapping and validation.
- Settings - Toggle alternative editors such as RapiD on/off.
- Actions - Powerful bulk actions you can perform on your project, such as cloning or deleting.

> Filling in this information carefully is an essential part of a successful mapping project. It is particularly important that the project description and instructions are clearly communicated so mappers are aware of the importance of data quality and best practice. Keep in mind, contributors may not have previous experience with OpenStreetMap and are unlikely to be familiar with tagging guidelines.
 
### Description

![TM Description][]

#### Status

First is the project status. This can be set to either Draft, Published, or Archived.

- Draft - Your project will start in draft mode. In this mode it will not be discoverable and it will not be possible for the public to contribute towards it. This is perfect while you are still setting your project up and testing it before release. 
- Published - When you have completed your project setup, tested it and are happy for it to be publicly listed and open for mapping/validation.
- Archived - All projects should end up archived. Archived projects are public but locked for contributions. You should consider archiving your project either if:
  - It is 100% mapped and validated
  - The instructions or imagery are substantially outdated
  - The project was created more than a year ago
  - Map data is no longer needed for humanitarian purposes in the project area

#### Priority

Next is the project priority. This dictates how close to the front of the Tasking Manager the project will be seen in the Explore Projects page. This can be set to either Urgent, High, Medium or Low.

- Urgent - Only set this status if the project is in response to a disaster and the data needs are immediate. Very few projects have this priority level. 
- High - For projects that are not necessarily in response to a disaster but the data is needed in a short time-frame. 
- Medium - If the data is needed but not in a particularly short time-frame.
- Low - If you want to publish your project but not make it particularly public and want to share your project to specific groups using the project URL.

#### Short description

Add at least two sentences that briefly describe your project. This is important because volunteers will read this to decide on whether to contribute. Try and clearly explain why the data is being collected and how the map data will be used. 

> These fields support Markdown text and can include images (drag and drop) and videos (add a YouTube URL for automatic embedding).

#### 'Long' Description

You can go into more detail about your project here. Provide more information about why the project exists, who will use the data and the expected the impact the mapping will have. If the project involves any collaborations or partners you could expand on that here. 

> For any of these text fields you can choose to add additional translations. The default field is in English, if you'd like to add a translation click on the two letter language code and enter the translated text. For users that have set the Tasking Manager to that language it will automatically display the project in that language. 

#### Due date

If you have a date by which you wish your project to be completely mapped and validated you could add that here. This is optional and once the date is exceeded it does not change anything for the project and volunteers can continue contributing afterwards. Contributors will see the due date listed next to the project. 

### Instructions

![TM Instructions][]

#### Changeset comment

Here you can add additional tracking tags which will automatically populate each time someone saves their work while mapping your project. For example, if you want to start tracking all contributions across all your organization's projects you might want to add a common tracking tag to them, e.g. #MSF or #cartONG. Please try to keep these tags short and do not add too many of them, cluttered changeset comments are confusing to interpret and space should be left for mappers to leave descriptive changeset comments. 

> Please note that a unique project tracking tag will already be present, e.g. #hotosm-project-11188 - please leave this untouched, it is very important for tracking the progress of the project. The number at the end of the tag is your project's unique ID.

**Entities to Map** - A list of the features you want users to map. Generally the fewer features the better as they are more likely to get completed.

> Projects that ask for lots of entities to be mapped are difficult for mappers and difficult to get validated. They take much longer to get a good usable dataset. Task sizes are also difficult to make efficient for different types of mapping, e.g., buildings need small task squares, roads and waterways need larger task squares. Making multiple projects over the same area to get buildings and linear features mapped is a best practice.

**Changeset Comment** - This is the default changeset comment that will be attached to every data upload to OSM. It usually includes something that identifies the Tasking Manager the project resides on and the features that were mapped. It is often used for "hash tags" to help identify the organization requesting and/or doing the mapping. It can also describe the mapping being done, e.g., "Mapping buildings."

> Users should be instructed to fill in meaningful comments about what they mapped, but helping them out with good default comments is always a good idea.

**Detailed Instructions** - This is where the majority of your detailed instructions will be placed and what we expect every mapper and validator to read carefully and follow.

See the below notes on creating good instructions.

**Per Task Instructions** - These will be displayed when a mapper selects a task and also has a special feature that allows Task specific URLs to be crafted based on the typical "slippy map" x, y, z coordinates.

### Metadata

![TM Metadata][]

> All of these fields should be filled in and will become non-optional in future versions of the Tasking Manager.

>  It is advisable to confine one project to one class of objects to be mapped. If you need a basemap of an area better split it in several projects, one for the roads, one for the buildings etc. Now beginners can focus on a small class of objects while learning how to map them correctly.

**Mapper Level** - This is an indication of the difficulty of the mapping project. There are 3 options Beginner, Intermediate and Advanced. This setting is an indication to the mapper what experience level they should have to be most successful in mapping the project. It can be used in project list filtering and the suggested level can be required in the Permissions screen.

**Type of Mapping** - Used in project list filtering and helps mappers find projects they like to map.

**iD Editor Presets** - If you choose one or more items from the drop-down list then mappers using iD will only be able to assign these features to the objects they mapped. This is recommended for beginner projects which are typically buildings-only and reduces the risk of erroneous tag assignments. If you use this feature then it is a good idea to let mappers know in the instructions that they cannot map anything else.

**Organization** - The organization whose project managers should have administrative permissions for this project. The organization must have been previously registered with the Tasking Manager.

**Interests** - Used to suggest projects to mappers. Mappers specify their interests in their profile.

**OSMCha filter ID** - OSMCha is offered as a link from the contributions overview. The standard filter confines output to the bounding box of the project and to contributions not older than the project creation date and with the name of the project in the changeset comment. If you think something different would be a better approach  to analyze the changesets of your project then either provide an OSMCha URL or an OSMCha filter id here.

### Priority Areas

![TM Priority Area][]

Use the provided tools to draw areas that should be mapped first. You can have multiple priority areas for a Project. You can also change priority areas at any time.

> During disaster mapping, early in the event, having a large project mapping area and using priority areas to focus mapping as new information comes in is a best practice.

### Imagery

URL Field - A field that takes a TMS URL that will passed automatically to the OSM Editor the mapper or validator uses. Please follow the example, it is very important it is formatted correctly to work in all editors.

License - Optionally, if there is a specific license required for the mapper to accept in using the imagery, you can select it here. If you need a license that is not available, you can contact an administrator for the Tasking Manager installation and ask them to add it.

### Permissions

![TM Permissions][]

**Mapping permissions** - Allows you to require that a mapper is at the proper level to map on the project (Metadata screen above). Mapper levels can be set manually, but are automatically applied based on total changesets. You may also require a mapper to be part of a team. Teams can be selected below

**Validation permissions** - Allows you to require that a mapper is at the proper level to validate on the project (Metadata screen above). Mapper levels can be set manually, but are automatically applied based on total changesets. You may also require a validator to be part of a team. Teams can be selected below

**Teams** - Select teams for mapping and validation. If you do so then you can restrict mapping and/or validation to team members using the controls above. You may select several teams for each role. Select a team, select a role and press 'Add'. Once you add a team you may edit its role or delete the assignment.

**Privacy** - This restricts access to the project to those users who are part of the team to which the project belongs.

### Settings

![TM Settings][]

**Default Language** - Sets the default instructions language for a project.

**Editors** - Restricts the available editors to those checked. You may specify different sets for mapping and for validation.

**Enforce random selection** - If checked then users cannot select a specific task for mapping.

### Actions

![TM Actions][]

**Message all contributors** - Sends a Tasking Manager message to everyone who has marked a task complete or valid. It can be used to thank contributors and/or guide them to other projects in a portfolio/campaign. It should also be used before using either of the two Validate/Invalidate all Tasks options described below.

**Mapping, validation and invalidation** - This will set the status of all tasks to either mapped, validated or invalidated. Handle with care as there is no undo.

**Reset tasks** - This will reset all tasks to their pristine state but previous actions will still available in the task history. Handle with care as there is no undo.

**Transfer project ownership** - Lets you specify another user who will become the owner of this project. Handle with care as there is no undo.

**Clone Project** - This will create a duplicate of the project except for the mapping area, task grid and priority areas which you will need to re-import or re-draw.

**Delete Project** - This will permanently delete the project from the Tasking Manager. Handle with care as there is no undo. This action is no longer available as soon as any contributions have been made to the project.

### Instruction Notes

Please use plain language as your target audience may not consist of native English speakers.

1. The title of the project should already reveal what entities should be mapped. Prefer a title such as
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. The most important messages should appear on the instruction tab first to ensure they are read. This would include any special imagery to use instead of Bing. The first sentences could mention that it is not required to map every single house if the project is about roads and residential areas, for example. Or that it is required to map every house if the project is to be used for population density estimates. These are the messages that should also appear on the description tab.
3. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery (cf. the previous section). Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
4. There are guidelines that cover common errors we see while validating. One example is Blake Girardot's compilation on [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Use the link in the instructions and explain that adhering to these guidelines is required.
5. The definitive resource on tagging is the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). For many HOT-related tasks the page on [tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) is the proper specialization and highly recommended reading for every mapper. If your project must adhere to different tagging standards then write a similar page in the wiki and link it in your instructions.


### Considerations concerning Imagery

In most cases we use the "standard" Bing imagery. But there are situations where you might want to choose an alternative source:

1. Bing does not provide high-resolution coverage for your mapping area.
2. Bing has considerable cloud cover in this area.
3. You need newer imagery for post-disaster evaluation.

If Bing does not prove adequate then Mapbox is the next choice. You should only look for other sources if neither of these two meet your requirements.

In such cases it is not sufficient to choose a license-compatible source and make it available through a WMS or TMS service. Your mapping area has probably already been partially mapped using Bing or Mapbox imagery and there might be a noticeable offset between images. You must have a close look at various locations of your mapping area and determine the offset between your imagery and previously mapped data. If the existing OSM data are offset with respect to your imagery but fit Bing imagery then we usually assume that Bing is the "gold standard" unless we have GPS traces which prove that this assumption is wrong.

If there is a constant offset between your imagery and Bing across the mapping area then this might be corrected on the server so that images from various sources loaded in the editor match. If this is not possible, if the offset varies across the mapping area or if existing data are aligned with various sources then it is time for plan B:

The important point is that you must develop a strategy for how to cope with these issues and provide detailed instructions to mappers and validators. We strongly suggest that you declare such a project "for experienced mappers only" and explain that experience in this case does not mean having mapped 200+ buildings but having already dealt with alignment issues and different imagery sources.

One possible strategy could include these steps:

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Bing.
2. Make sure that all existing features which are also visible on Bing are aligned with Bing imagery, i.e. realign if necessary.
3. Align the alternative imagery to existing features (and thus to Bing) using the imagery offset function of the editor.
4. Add new features from the now correctly aligned alternative imagery.

It is important that step 3 is repeated for every task of the project and the individual task squares should not be too large because imagery offsets can vary considerably across an mapping area, particularly if the terrain is not flat. Even imagery discontinuities may occur across a project - look out for them and advise the contributors of such a problem.

Here are some suggested bits of information which you might include in the project instructions:

- [general guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [an animated gif on imagery alignment in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [the josm imagery alignment chapter in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Proofread and Publish

Proofread the various tabs to ensure wording and formatting are correct, and instructions are clear. If you need to make changes or refinements to your project, click the ‘Edit’ link in the upper right hand corner of the page. 
If the project is ready for mapping, click the ‘Publish’ link. Once the project is published, it is available for mapping to anyone with an OSM account, unless a group of users was specified in the ‘Allowed Users’ tab, in which case only the allowed users would be able to work on it.  If necessary, edits can still be made to the project after publication by clicking on the ‘Edit’ link.

[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM New Polys]: /images/coordination/tm4_create_new_polys.png
[TM Trim]: /images/coordination/tm4_trim1.png
[TM Trim coarse]: /images/coordination/tm4_trim2.png
[TM Trim fine]: /images/coordination/tm4_trim3.png
[TM Description]: /images/coordination/tm4_description.png
[TM Instructions]: /images/coordination/tm4_instructions.png
[TM Metadata]: /images/coordination/tm4_metadata.png
[TM Priority Area]: /images/coordination/tm4_priority_area.png
[TM Permissions]: /images/coordination/tm4_permissions.png
[TM Settings]: /images/coordination/tm4_settings.png
[TM Actions]: /images/coordination/tm4_actions.png
