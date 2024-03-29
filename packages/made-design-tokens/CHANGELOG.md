# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 2.3.0

### Features 🚀

#### New tokens added:

* `--made-checkbox-color-background-branded-selected`
* `--made-checkbox-color-background-neutral-selected`
* `--made-checkbox-icon-color-neutral-readonly`
* `--made-checkbox-icon-color-neutral-default`
* `--made-checkbox-icon-color-branded-readonly`
* `--made-checkbox-icon-color-branded-default` 
* `--made-table-color-border-resize`
* `--made-color-text-placeholder`


### 2.2.0

### Features 🚀

#### New tokens added:

* `made-color-action-border-focus-on-dark`
* `made-color-action-disabled-button`
* `made-color-action-disabled-text-input`
* `made-color-action-disabled-toggle`
* `made-color-background-01`
* `made-color-background-02`
* `made-color-background-inverse`
* `made-color-feedback-background-error-light`
* `made-color-feedback-background-information-light`
* `made-color-feedback-background-success-light`
* `made-color-feedback-border-error-light`
* `made-color-feedback-border-information-light`
* `made-color-feedback-border-success-light`
* `made-color-feedback-error-light`
* `made-color-feedback-information-light`
* `made-color-feedback-success-light`
* `made-color-feedback-text-on-error-light`
* `made-color-feedback-text-on-information-light`
* `made-color-feedback-text-on-success-light`
* `made-color-gray-02-5`
* `made-color-green-success-01`
* `made-color-green-success-02`
* `made-color-green-success-03`
* `made-color-green-success-04`
* `made-color-green-success-05`
* `made-color-green-success-06`
* `made-color-green-success-07`
* `made-color-red-error-01`
* `made-color-red-error-02`
* `made-color-red-error-03`
* `made-color-red-error-04`
* `made-color-red-error-05`
* `made-color-red-error-06`
* `made-color-red-error-07`
* `made-color-text-inverse`
* `made-footer-color-text`
* `made-header-color-text`
* `made-link-color-on-dark`
* `made-pill-color-background-default`
* `made-pill-color-background-hover`
* `made-search-action-color-background-default`
* `made-search-action-color-background-hover`
* `made-search-color-background`

### Fixes 🐛

#### Changed tokens values:

* `made-color-action-text-on-selected-hover` value changed from `made-color-action-primary-default` to `made-color-text-default-on-light`
* `made-color-action-text-on-selected` value changed from `made-color-action-primary-default` to `made-color-text-default-on-light`
* `made-color-feedback-text-on-information` value changed from `made-color-text-default-on-dark` to `made-color-yellow-07`
* `made-font-family-eyebrow` value changed from `MarkOffcForMC-Bold, MarkOffcForMC, Arial, Helvetica, sans-serif` to `made-font-family-bold`
* `made-font-family-heading` value changed from `MarkOffcForMC-Light, MarkOffcForMC, Arial, Helvetica, sans-serif` to `made-font-family-light`
* `made-font-heading-weight-eyebrow-01` value changed from `made-font-weight-default` to `made-font-weight-bold`
* `made-font-heading-weight-eyebrow-02` value changed from `made-font-weight-defaul`t to `made-font-weight-bold`


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
