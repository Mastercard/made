# Contributing

Made is always evolving – thanks to you. Every time you share local patterns, components, or documentation with us, you’re helping us to understand your needs.

## Prerequisites

Before contributing to Made., you should make sure you have the following tools installed:

- Node.js: follow their installation through a [package manager here](https://nodejs.org/en/download/package-manager/)
- Git
- NPM
- Familiarise yourself with code standards and development workflow within Made.

You'll also need a code editor to make changes. There are many to choose from but some popular options are VSCode, Atom, and Sublime.

### Style Dictionary

This project is built upon an open source design token generator called Style Dictionary. 

We use Style Dictionary to transform our design tokens to scale across multiple platforms and languages like CSS or JSON for web, XML for Android, Swift for iOS.  

This means we can ensure brand consistency throughout any targeted platform. To learn more about Style Dictionary see their [documentation site](https://amzn.github.io/style-dictionary/#/) and [Github examples](https://github.com/amzn/style-dictionary).

### Naming Conventions

Made Design Tokens follow best practice as outlined by Nathan Curtis in [Naming Tokens in Design Systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)

For more information on Made. Design Tokens [Naming Conventions](https://made.mastercard.com/storybook-css/?path=/docs/hello-naming-conventions-design-tokens--page) See our documentation on Storybook.

### Branching 

We use Git Flow to create branches. Read more about Git Flow here below:

* [Gitflow Workflow](https://confluence.mastercard.int/display/MAPI/Gitflow+Workflow). 
* [Git Flow Cheat Sheet](https://danielkummer.github.io/git-flow-cheatsheet/)

### Commit Rules 
We follow [conventional commits'](https://www.conventionalcommits.org/en/v1.0.0/) specification.

Please follow the spec to have a successful commit.

## Contribute

### Propose an update or new feature

Whether you’re proposing an update, a new feature or simply making something better, we welcome contribution. 

Simply open an issue and provide the following information:

- A brief description of the update you want to propose.
- Clarify whether it’s a variation of an existing token, format or a new theme
- Include mockups of any fidelity (optional)
- Include any inspirations from other products (optional)
- Once your request is raised, we’ll review and set up a meeting to discuss the proposal in greater detail.

We’ll cover the following:

- What exactly needs working on 
- How much you’d like to contribute
- Support needed to get the job done
- Suitable timings that work for you
- If your work meets our contribution criteria, your request will be added to our backlog and marked as 'To do'. At this stage, you can either start contribution or leave it for a member of the Made production team to pick up.

### Submit a Pull Request

Good pull requests - patches, improvements, new features - are a fantastic help, before starting please open a new issue as documented above for whatever you are adding. That way, we can also offer suggestions or let you know if there is already an effort in progress.

With that all in place, you're ready to start contributing to Made.!

**Fork this repo**  
Click the Fork button in the top-right corner. This will create a copy repo of Made. Design Tokens to your account. 

**Clone your fork**    
[You can clone a repository by using the command line](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html#clone-a-repository)

```
# Clone your fork of the repo into the current directory
git clone http://labs.mastercard.com/gitlab8/<your-username>/made-design-tokens.git

# Navigate to the newly cloned directory
cd made-design-tokens

# Assign the original repo to a remote called "upstream"
git remote add upstream http://labs.mastercard.com/gitlab8/made-design-tokens.git

# Verify the remote was added
git remote -v
```

**Make sure you have the latest changes**    

```
git checkout master
git pull upstream master
```

**Work on a feature branch**   
When contributing to Made., your work should always be done in a branch off of your repo, this is also how you will submit your pull request when your work is done. To create a new branch, ensure you are in your forked branch in your terminal and run:

```
git checkout -b feature/your-branch-name
```

**Commit  Changes**  
When the changes are done, add all changes

`git add .`

Commit the changes using conventional commits convention. 

```git commit -m "refactor - Issue 30: Update surface styles to use latest b2b styles"```

Push the changes to Gitlabs

```git push```

**Open a new Merge Request**  

When the branch has been pushed. Create a merge request for another developer to review your code. 

See documentation on [Gitlabs create merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html) for more information.

- Click on the Merge Request tab on the left hand side.
- Click the new merge request button
- Choose the branch you pushed and request to merge into master. Click merge branch and continue
- Add title (use conventional commit naming convention) and description of changes made. Assign the MR to a Made. developer for a code review and click Submit.