# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.2.0

#### Features 🚀

- New styles for selected state on data table
- New offset grid column classes
- New styles for aria disabled attribute
- New utility classes for accessibility
- New utility classes for controlling the display of elements
- New utility classes for applying flexbox behaviors to elements
- New utility classes for controlling the opacity of elements
- New utility classes for common text styling to control styles, alignment, whitespace and wrapping
- New utility classes for controlling the vertical alignment of an inline or table-cell box
- New trigger element added for tooltip
- New selected colours for checked items in multi select

#### Fixes  🎨🐛

- Progress Stepper: Current step now themeable
- File Upload: Text no longer overflows on small screen and spacing increased between file name and link
- Text Input: Form label on success state now uses success colour instead of default colour
- Text Input: Line-height removed from validation label on error state
- Typography: Margin-bottom of paragraph changed from 20px to 16px
- Action Bar: Padding-left removed from first item
- Checkbox: Replaced check mark SVG icons with CSS now used to create them and enable theming
- Breadcrumb: Replaced arrow SVG icons with CSS now used to create them and enable theming
- Date Picker: Replaced arrow SVG icons with CSS now used to create them and enable theming
- Branding: Dark background class added

## 1.1.0 

### Features 🚀
- Action bar
- Branding
- Date Picker
- General Close Button
- Overflow Menu (Multi-line with Icons)
- Password Strength Indicator
- Select (Multiple Select)

### Fixes 🎨🐛
- Checkbox: removed margin-bottom from checkbox
- Pagination: focus state on buttons reduced

## 1.0.0 (2022-02-03)

### Features 🚀
- Footer
- Carousel
- Scrollbar
- Breadcrumb
- Pagination
- Tour
- Progress Indicator (Steps Horizontal)
- Card (Generic)
- Pill
- Overflow Menu (Multi-line)
- Select (Searchable)
- Compiled CSS including CSS custom properties (made-css-variables.css/made-css-variables.min.css/)
- New made-u-body--small class and made-u-helper-text for styling body text

### Fixes 🎨🐛
- Tooltip: Removed line-height from tooltip to support multiple lines and Max-width added.
- Spacing: All responsive classes (md, lg) renamed to e.g. made-u-margin-top--md-13-x to add consistency - across library. .made-u-margin-top-9-x--md naming convention deprecated.
- Width: All responsive classes (md, lg) renamed to e.g. made-u-width--md-13-x to add consistency across library. .made-u-width-9-x--md naming convention deprecated.
- File Upload: Finder is now opened on click of the entire drop zone
- Ghost Button: removed padding left and right from ghost button

## v1.1.1-beta

### Features

- New sort icon added for table header cells
- New margin reset class
- New width utility classes
- Tabs: new responsive styling

### Fixes (Visual)

- Accordion: adjust line-height of header, removed padding from top of content
- Button: New class for button with icon that adjusts the padding on this button type
- Checkbox: label is now vertically aligned, height is now 16px by 16px
- Form: label and validation message line-height is now set to 1
- Modal: Add border radius of 4px to modal container, added style for close button on hover
- Notifcation: change in font type and size in message
- Overflow menu: line-height is set to 1 on links
- Radio Button: label is now vertically aligned
- Range slider: remove browser styling from number input
- Select: add placeholder style and adjust padding on icon
- Table: adjust padding and line-height on table cells so that they are vertically aligned
- Toogle switch - adjust color of slider
- Tooltip: line-height is now set to 1, text is now using Mark Font Narrow value

## v1.0.1-beta

- fix: Add fallback font for custom fonts
