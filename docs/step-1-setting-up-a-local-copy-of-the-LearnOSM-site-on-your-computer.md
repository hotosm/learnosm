## Step 1: Setting up a local copy of the LearnOSM site on your computer
  - To set up a local copy of the [LearnOSM](learnosm.org) site on your computer so you can preview the changes you have made, you must create a copy (or fork) of the site through your GitHub account and then add it to your computer using Git on the command line.

*Note: You only need to complete these steps once*

### Create a copy (fork) of the site through your GitHub account
1. Navigate to the LearnOSM site repository at [`https://github.com/hotosm/learnosm`](https://github.com/hotosm/learnosm) on GitHub.

2. To create a copy of the site repository click the fork button in the right hand corner.
![fork-example](http://www.developer.com/imagesvr_ce/6467/GitHub-Pull-image001.gif)

3. Next you should see GitHub making a copy of the main LearnOSM site repository owned by hotsom.
![fork-copy-in-action](https://help.github.com/assets/images/site/fork-a-repo.gif)

Now, you should see your own copy or fork of the LearnOSM site repository on GitHub.

Check out GitHub's guide on [forking](https://help.github.com/articles/fork-a-repo/) if you need more help.

### Download your forked copy of the site to your computer
You can download your copy of the site to your computer using the command line or GitHub Desktop. Either way to preview a local copy of your site you must use the command line but cloning your site with GitHub Desktop is easier.

#### Clone your site on the command line

1. Find the HTTPS URL and copy it to your clipboard.
https://guides.github.com/activities/forking/

1. Open up your command line.

2. Navigate to the place on your computer where you want to store your local copy of the learnosm site. In this example we will save it in a folder or directory called opensource.
  - 2.1 Create a directory called "opensource" or whatever you prefer.
  ```
  $ mkdir opensource
  ```

  - 2.2 Navigate into your new directory
  ```
  $ cd opensource
  opensource$
  ```

3. Download your forked copy of the site to your computer by running this command `git clone https://github.com/hotosm/learnosm.git` You should see the site download.

If you run into any problems check out GitHub's [Cloning a repository](https://help.github.com/articles/cloning-a-repository/) guide.

#### Clone your site sing GitHub Desktop

1. Install GitHub Desktop and authenticate to GitHub using the "[Setting up GitHub Desktop](https://help.github.com/desktop/guides/getting-started/setting-up-github-desktop/)" guide.

2. Save a copy of your learnosm fork by using the "[Cloning a repository from GitHub Desktop]( https://help.github.com/desktop/guides/contributing/cloning-a-repository-from-github-desktop/)" guide.

To open your local copy of the site in the command line, right click on the learnosm repository clone in the left corner and select "open in the terminal" or "open in the command prompt." You can also open your local copy of the site in a text editor such as Atom from right clicking on your repository in GitHub Desktop.

### Sync your local copy of the site respository with the original one at hotosm/learnosm
1. On GitHub Navigate to the original [hotosm/learnosm]() repository

2. Copy the HTTPS URL at the top of the repository. You will use this as the upstream repository URL later on.
- For an example see step 2 of this [Sync a fork](https://help.github.com/articles/fork-a-repo/#step-3-configure-git-to-sync-your-fork-with-the-original-spoon-knife-repository) guide.

3. If you haven not already, navigate to the place that you cloned your learnosm site on the command line.

4. To sync your local copy with hotosm/learnosm follow these steps for [Configuring a remote for a fork]() starting with step 2 and using `https://github.com/hotosm/learnosm.git` as your upstream repository URL.

### **Next Steps:** Continue to [Step 3: Preparing to submit changes ](/docs/step-3-setting-up-a-local-copy-of-the-LearnOSM-site-on-your-computer)
