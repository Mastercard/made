# Design Tokens Project Structure

## Actions

Actions provide a way to run custom build code. For more info see
[Style Dictionary Actions](https://amzn.github.io/style-dictionary/#/actions)

Custom actions scripts are in this folder. They are used in build.js to generate colorsets (iOS/MadeDesignTokens/Assets/Made.acassets/) for iOS and to copy fonts to iOS Folder. 

See [Dark Mode with Style Dictionary](https://dbanks.design/blog/dark-mode-with-style-dictionary/) and [Apple docs](https://developer.apple.com/library/archive/documentation/Xcode/Reference/xcode_ref-Asset_Catalog_Format/Named_Color.html)for more info on Colorsets.

## Android

This is a standard Android project structure. Design tokens are stored in `Android/src/partnerbank/res/values` folder.
See [Android README.md](./android/README.md) on more information on how to build.

This folder can be run in Android Studio.

## Assets

Fonts are stored here to and copied into iOS and Android folders.

## Dist

The build.js file outputs configured design tokens for web here and this folder is deployed as an NPM package/Forge. Each folder follows a [semantic versioning](https://semver.org/) package no `version/web/theme`/[theme-name]`

## Environment

This folder is used to set environment configs for Forge deployments.

## Formats

Formats define the output of your created files. For example, to use your styles in CSS you use the css/variables format. More info on [Style Dictionary Formats](https://amzn.github.io/style-dictionary/#/formats). This folder contains custom formats to output files required for iOS and to generate documentation and theming files for Storybook. 

## iOS

This is a standard iOS project structure. Design tokens are stored in `iOS/MadeDesignTokens` folder.
See [iOS README.md](./iOS/README.md) on more information on how to build.

This folder can be run in xCode.

## src

Design tokens output files are generated from the tokens defined in the JSON files in the `src` folder in this project. Each folder works for specific platforms and themes.

* B2B: B2B theme specific Web tokens
* Global: global tokens that could be used across any theme
* mobileUI: tokens specific to mobile platforms (based off Material theming)

## Storybook

This folder contains scripts generated from `formats/storybook.json` that is used in [Storybook to display token documentation](https://made.mastercard.com/storybook-css/?path=/docs/design-tokens-color--global). `Themeable.json` is used for documentation for [theming tokens](https://made.mastercard.com/storybook-css/?path=/docs/design-tokens-theming--color) and theme generator.

## Transforms

Transforms are functions that modify a token so that it can be understood by a specific platform. More information on
[Style Dictionary Transforms](https://amzn.github.io/style-dictionary/#/transforms).

This folder contains custom formats as some of the pre-defined transforms don't work as we have modified the naming conventions, we also have the color formats for iOS which is not available in Style Dictionary.

## build

This file is a legacy file that was used to get tokens from DSM and run build in this project. 
Kept as reference incase DSM is cool again!

## build.js

This file adds configuration to design tokens, 
defining the transformation and formatting of the tokens and assets for each output platform.


## Jenkins

Jenkins file have automated scripts that deploy projects to Forge pipelines.

