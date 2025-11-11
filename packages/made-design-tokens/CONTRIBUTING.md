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

### Documentation
Please review [Project Structure](./PROJECT-STRUCTURE.md) and [Design Tokens](./DESIGN-TOKENS-101.md) documentation to learn more about the project.

### Naming Conventions

Made Design Tokens follow best practice as outlined by Nathan Curtis in [Naming Tokens in Design Systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)

More info on Made. Design Tokens [Naming Conventions](./NAMING-CONVENTIONS.md).

### Branching 

We use Git Flow to create branches. Read more about Git Flow here below:

* [Gitflow Workflow](https://confluence.mastercard.int/display/MAPI/Gitflow+Workflow). 
* [Git Flow Cheat Sheet](https://danielkummer.github.io/git-flow-cheatsheet/)

### Commit Rules 
We follow [conventional commits'](https://www.conventionalcommits.org/en/v1.0.0/) specification.

Please follow the spec to have a successful commit.

## Start contributing

###  - Setting up your environment -

#### 1. Fork the repo:

Go to [Made's repository on GitHub](https://github.com/Mastercard/)
and click the `Fork` button in the top-right corner. This will create a copy
repo of Made associated with your account.

### 2. Clone your fork:

1.  Go to your [GitHub Repositories](https://github.com/settings/repositories).
2.  Click on `[your_github_username]/made`.
3.  Click on the `Code` button and copy the URL from the `Clone with HTTPS` option.

For more information see [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and [Forking a repo] https://help.github.com/articles/fork-a-repo/) for more details.

Great job on getting to this point! Now it's time to code :computer:

## - Setting up your code -

### 1. Find or create an issue

Before you start coding, if you have an issue in mind that you'd like to tackle,
please first [search](https://github.com/Mastercard/made/issues) the
issues to see if a similar issue you'd like to work on has already been
submitted. If a similar issue has been submitted, assign yourself or ask to be
assigned to the issue by posting a comment.

If the issue does not exist, please make a new issue. Issues give us context
about what you are contributing and expedite the process to getting your
contributions merged into Made. It's a win for everybody :tada:


### 2. Work in a feature branch
When contributing to Made., your work should always be done in a branch off of your repo, this is also how you will submit your pull request when your work is done. To create a new branch, ensure you are in your forked branch in your terminal and run:

```
git checkout -b feature/your-branch-name
```

Review [Design Tokens 101](./DESIGN-TOKENS-101.md) for a how to guide on creating new tokens, themes formats and to Design Tokens Checklist before submitting your PR.

### 3. Install dependencies

From the root directory of your fork, run:

`npm install`


### Commit  Changes 
When the changes are done, add all changes

`git add .`

Commit the changes using conventional commits convention. 

```git commit -m "refactor - Issue 30: Update surface styles to use latest b2b styles"```

Push the changes to Gitlabs

```git push```

### Open a new Merge Request 

When the branch has been pushed. Create a merge request for another developer to review your code. 

See documentation on [Gitlhub docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for more information.
