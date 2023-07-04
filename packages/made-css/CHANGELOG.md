# Changelog

## v2.0.0

### Features 🚀

- New Toast component added
- New Search Input component added
- New design for Notification components and also added 'light' variations
- New design for Pill component
- Width: added responsive percentage width classes
- Grid class `.made-l-grid` added `margin-left: auto` and `margin-right: auto` to centre align the grid by default
- Color property of class `.made-u-link--on-dark` changed from token `--made-color-text-default-on-dark` to new token `--made-link-color-on-dark`
- Outline colour for focused links on a dark background `.made-u-link--on-dark` changed token from `--made-color-action-border-focus` to `--made-color-action-border-focus-on-dark`
- Text color for a Disabled Primary Button on Dark Background changed token from `--made-color-action-text-on-disabled` to token `--made-color-action-text-on-dark`
- Color of text for Branding on Dark Background changed from token `--made-color-text-default-on-dark` to token `--made-header-color-text`
- Outline colour for Primary Button on Dark Background changed from token `--made-color-action-border-focus` to token `--made-color-action-border-focus-on-dark`
- Added new focus outline colour for Primary Button on Dark Background `.made-c-button--primary-on-dark:focus`
- Background colour for Disabled Button Primary on Dark Background token changed from `--made-color-action-background-disabled` to token `--made-color-action-disabled-button`
- Border colour and text colour of the Disabled Button Secondary changed to token `--made-color-action-disabled-button`
- Text colour of the Disabled Ghost button changed token from `--made-color-action-text-disabled` to `--made-color-action-disabled-button`
- Text colour of class `.made-c-footer`, `.made-c-footer__link`, `.made-c-footer__link--navigation`, `.made-c-footer__title` changed token from `--made-color-text-default-on-dark` to `--made-footer-color-text`
- Text colour of `.made-c-form__label--error`. `.made-c-form__label--success`, `.made-c-form__label--error` changed to token `--made-color-text-default-on-light`
- Removed button `.made-c-modal__close` and replaced it with a reusable close button `.made-c-button-close`. Removed deprecated margin classes on the buttons in the modal and replaced with new margin classes
- Refactored the HTML and CSS for the Multi Select component
- Text input disabled state removed opacity property, and background colour and border tokens changed to `--made-color-action-disabled-text-input` and colour property added with a value of `--made-color-action-disabled`
- Tour component close button class changed to resuable close button `.made-c-button-close`, close icon class changed to `.made-c-button-close__icon` and width classes in HTML refactored to remove deprecated width classes and applied the new width classes
- Font weight for the `strong` tag changed from `--made-font-body-weight-bold` to `--made-font-body-weight-default`

### Fixes 🐛

- Spacing: Removed deprecated space classes eg. `.made-u-margin-top-0-x--md`, `.made-u-margin-top-0-x--lg` etc.
- Width: removed deprecated width classes
- Typography: Removed the color property from the `p` tag, now inherits from `body`
- Removed chaining from `a.made-u-link--disabled` class changed to `.made-u-link--disabled`
- Removed the classes `.made-c-overflow-menu__link-title` and `.made-c-overflow-menu__link--multiline` as not being used by any components
- Grid offset classes that use percentage widths are now rounded up to 4 numbers after the decimal point
- Removed chaining from `th.made-c-table__header--sortable` class changed to `.made-c-table__header--sortable`
- Toggle component class `.made-c-toggle__slider` background colour token changed to `--made-color-action-background-off` for default state and disabled state changed to `--made-color-action-background-on`
- Tooltip changed -webkit-transform to transform and removed browser prefixes
- Tooltip added `width: max-content;` to the class `.made-c-tooltip` so when a large amount of text is in the tooltip the width of it is not too narrow
- Removed class `.made-c-tour__link` from the Tour component
- Pagination removed the deprecated margin class on the component and changed to new margin class `.made-u-margin-left--md-2-x`
- Carousel component removed deprecated margin class from the HTML of the component and replaced it with the current margin class `.made-u-width--md-50` on `.made-c-carousel__img`, `.made-c-carousel__content`. And on `.made-c-carousel__actions` updated it to `.made-u-margin-top--md-8-x`
- Carousel component replaced the `.made-c-modal__icon` with reusable `.made-c-button-close__icon`
- Added `tabindex="0"` to Action Bar, Breadcrumb, Footer, Overflow Menu, Overflow Menu, Tabs, components to fix focus outline not appearing in Safari
- Overflow Menu with Icons component long text string now no longer overflows the menu
- Responsive Button can now use an icon in it
- Action Bar with Overflow Menu the first dropdown menu now aligns to the left
- Tabs component on hover font weight does not change to bold

## v1.2.1

### Fixes 🐛

Set aria-disabled to true
Add styles for tour to override tooltip styles

## 1.2.0

### Features 🚀

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

### Fixes  🎨🐛

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