# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 2.1.1 

### Features

* New Tokens for global disabled colours
* New Tokens for interactive states hover and selected
* New Tokens for action colours
* New Tokens for brand secondary colours
* New Tokens for global colours
* New Tokens for Opacity 15 and 25 values
* New tokens - font family heading and eyebrow
* New tokens - font weight
* New token for made-letter-spacing-eyebrow
* New tokens for Line height single, default, heading
* New border radius tokens 
* Token values are not cascaded in json format.
* Deprecated tokens are flagged and are now in dedicated depreacted file. If you need to continue using these tokens you will need to import seperately. 
* Themeable tokens are flagged and are now in dedicated tokens file.

### Fixes

* Global feedback colour changed name from color-brand- to color-feedback-
* Form token made-forms-color-border-default value change from gray 03.5 to gray 05
* Fallback fonts added to Font family token values
* made-color-feedback-error value changed to #EE0000
* made-color-feedback-success value changed to #038A00


### Tokens to be deprecated

 * Review Storybook documentation under Colors -> Deprecated tokens. 
 Contact Made. Team is using any of these tokens and we can review timelines for removing deprecated tokens.


## v1.2.2-beta

### Features


New Tokens for opacity
New token for made-color-background-gray-lightest. Used on Breadcrumb and Pill components.
New token for made-color-text-helper.
Deprecating: made-forms-color-text-placeholder: replace with the made-color-text-default-on-light token
Deprecating: made-forms-color-text-hint: replace with the made-color-text-helper token

## 1.2.1-beta

### Features

* New Tokens for time
* New tokens-variables.css file with css variables that inherit global tokens
* New token for Primary Text Color
* New token for Narrow Body Font
* New tokens values for made-font-size-07 and above, new tokens added for 18px and 32px. 

### Fixes

* Display 02 is now using Mark Font Light value
* H5 and H6 is now using Mark Font Medium value
* Size tokens now use rems
* Form placeholder color is now gray 4

## 1.1.1-beta

### Features

* Support for B2B Theme Web Design Tokens (NPM Module in Artifactory in CSS, CSS preprocessor and JSON formats).

## 1.0.1

### Features

* Examples Project for iOS and Android.


## 1.0.0

### Features

* Support for Android Color, Typography and Spacing Design Tokens (AAR file in Artifactory that you can use as a dependency for an Android app module).

* Support for iOS Color, Typography and Spacing Design Tokens (available in an asset catalog as a colorset and Swift Formats).
