# Design Tokens 101

This project is based on [Style Dictionary](https://amzn.github.io/style-dictionary/), an open source tool that generates design tokens into a way for any platform or language to consume.

## Basics of this project

1. Design Tokens (contained in the src folder organised into JSON files)
2. Configuration, defining the transformation and formatting of the tokens and assets for each output platform. (Android, iOS and Web)

## What this project does:

- Transforms design tokens and assets into platform specific deliverables
- Creates human readable documentation for storybook and intergration with other software and tools such as Figma and custom theme generator.

## Design Tokens

Design tokens output files are generated from the tokens defined in the JSON files in the `src` folder in this project. See [Design Token Attributes](https://amzn.github.io/style-dictionary/#/tokens?id=design-token-attributes) for more information on the code below.

```
"color": {
    "brand": {
      "primary": {
        "comment": "The primary color of your brand",
        "value": "{color.orange.04.value}",
        "themeable": "Yes",
        "type": "color"
      },
    }
}
```

You can reference (alias) existing values by using the dot-notation object path (the fully articulated design token name) in curly brackets. Note that this only applies to values; referencing a non-value design token will cause unexpected results in your output. `{color.orange.04.value}` references color orange 04 in the color base file (add the text in "" before the :)

Type is used in define token types for Invision.

```
"disabled": {
    "on-light": {
        "comment": "Text color for secondary button disabled state",
        "deprecated": true,
        "deprecated_comment": "made-color-action-text-disabled",
        "value": "{color.accent.01.light.value}",
        "themeable": "No",
        "type": "color"
    },
}
```

You could add a deprecated flag like in the example above. This flags that the token is deprecated and outputs this token to a separate deprecated file in the dist folder.

The `themeable` property means that this token is themeable and will be added to the theme files in the package. A token is themeable when the design token value is not cascaded down by another token or is hard coded and it is recommended that this can be themed when creating a new variation.

This is how [Style Dictionary naming](https://amzn.github.io/style-dictionary/#/tokens?id=design-token-structure) works but we have adapted Made. Tokens to follow [Naming Tokens in Design Systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676) as a guideline for naming conventions. Due to this there are custom formats we have built to transform tokens, see below.

## Configuration

Style dictionaries are configuration driven. See [Style Dictionary Architecture](https://amzn.github.io/style-dictionary/#/architecture?id=_4-iterate-over-the-platforms) documentation for a deeper understanding on how configuration works under the hood.

Your configuration lets Style Dictionary know:

**1. Where to find your design tokens**

Design tokens output files are generated from the tokens defined in the JSON files in the `src` folder in this project. Each folder works for specific platforms and themes.

- B2B: B2B theme specific Web tokens

- mobileUI: tokens specific to mobile platforms (based off Material theming)
  - global: global tokens that could be used across any theme
  - platform/native/themes: colors specific to a theme
- webUI: tokens specific to web formats
  - deprecated: tokens that are no longer in use
  - global: global tokens that could be used across any theme
  - themes: tokens specific to a theme

**2. How to transform and format them to generate output files**

See Style Dictionary documentation on [basics of configuration](https://amzn.github.io/style-dictionary/#/config?id=configuration) and [attributes](https://amzn.github.io/style-dictionary/#/config?id=attributes)

This project has a `build.js` which configures tokens through [actions](https://amzn.github.io/style-dictionary/#/actions), [transforms](https://amzn.github.io/style-dictionary/#/transforms) which output the token to a specific format e.g. rems for web and [formats](https://amzn.github.io/style-dictionary/#/formats) which output tokens to a specific file format e.g. css, scss, xml. [Filters](https://amzn.github.io/style-dictionary/#/formats?id=filtering-tokens) are also used to filter specific tokens e.g. color or to output specific tokens to a file.

Currently we are using the following pre-defined formats:

- [CSS variables](https://amzn.github.io/style-dictionary/#/formats?id=cssvariables)
- [SCSS variables](https://amzn.github.io/style-dictionary/#/formats?id=scssvariables)
- [LESS variables](https://amzn.github.io/style-dictionary/#/formats?id=lessvariables)
- [Android resources](https://amzn.github.io/style-dictionary/#/formats?id=androidresources)
- [JSON nested](https://amzn.github.io/style-dictionary/#/formats?id=jsonnested)

We have used [pre-defined transforms](https://amzn.github.io/style-dictionary/#/transforms?id=pre-defined-transforms) , [formats](https://amzn.github.io/style-dictionary/#/formats?id=pre-defined-formats) and [actions](https://amzn.github.io/style-dictionary/#/actions?id=pre-defined-actions) from Style dictionary where possible but we have also extended these to build custom configs to meet teams' requirements.

Custom transforms code in the transforms folder, custom actions code in the actions folder and custom formats are in the formats folder.

Custom formats are mostly to output custom files required for iOS, Android and to generate documentation and theming files for Storybook. There is also a custom format for JSON (line 50) in build.js to cascade global tokens to role based and component specific tokens in JSON (same as outputReferences for CSS, added custom format as this functionality doesnn't work for JSON)

Custom transforms are used as some of the pre-defined transforms don't work as we have modified the naming conventions, we also have the color formats for iOS which is not available in Style Dictionary.

## How to modify a token

In the `src/webUI/themes/[theme]/..` folder choose the design token you wish to modify, change the design token value (`{color.gold.04.value}` in this instance)

```
 "warning": {
        "comment": "Color for warning state",
        "value": "{color.gold.04.value}",
        "themeable": "Yes",
        "type": "color"
      }
```

Run `npm run build`. This will update the values in the `dist` and `storybook` folders.

## How to add a token

In the `src/webUI/themes/[theme]/..` folder choose the file where you want to add in the new design token, copy the structure of an existing token as above, changing values as needed. Make sure JSON syntax is correct and run `npm run build`. This will update the values in the `dist` and `storybook` folders.

## How to update token documentation in Storybook

To update [Storybook documentation](https://made.mastercard.com/storybook-css/?path=/docs/design-tokens-color--global) copy the contents of `storybook/storybook.json` to Storybook file `storybook/stories/assets/data/ tokens.json`.

To update [Storybook theming documentation](https://made.mastercard.com/storybook-css/?path=/docs/design-tokens-theming--color) copy the contents of `storybook/themeable.json` to Storybook file `storybook/stories/assets/data/tokens.json`.

## How to update tokens in CSS

Copy the latest contents of `tokens-variables.css`to `the made-css/src/01-settings/tokens.css`.

## How to add a new platform/transform/format/action

If a team needs a new platform added review style dictionary documentation for [pre-defined transforms](https://amzn.github.io/style-dictionary/#/transforms?id=pre-defined-transforms) , [formats](https://amzn.github.io/style-dictionary/#/formats?id=pre-defined-formats) and [actions](https://amzn.github.io/style-dictionary/#/actions?id=pre-defined-actions).

If custom configs are required review [issues](https://github.com/amzn/style-dictionary/issues) and [examples](https://github.com/amzn/style-dictionary/tree/main/examples) on Style Dictionary Github.

## How to add a new dark theme for a brand

**Web**

See `feature/create-new-theme` for an example of how this is done.

1. In `src/webUI/themes/[theme]/` folder create a new folder called `dark`. Copy token files that will be updated e.g. color folder.
2. Change the values of design tokens in those files
3. Add another `buildPlatform` script (lines 204 to 381) in `build.js`
4. Update source path to new theme folder
5. Update token file name e.g. `dark-theme.css`

## How to add a new theme for a brand

See `feature/create-new-theme` for an example of how this is done.

1. In `src/webUI/themes/` folder create a new folder called `[brandName]`. Copy existing token files from another brand
2. Change the values of design tokens in those files
3. Add another `buildPlatform` script (lines 204 to 381) in `build.js`
4. Update source path to new theme folder 
5. Update build path e.g. `${webPath}/[brandName]/`

## Deprecating Tokens

Remember to communicate to teams if there are breaking changes e.g. DAS, MCC. A breaking change will be changing the name of the token for example. Add [documentation](https://made.mastercard.com/storybook-css/?path=/docs/design-tokens-color--deprecated-tokens) to Storybook on the deprecated token and what the tokens teams should replace the deprecated tokens with. To do this `deprecated ` and `deprecated_comment` properties to design token.

```
"disabled": {
  "on-light": {
    "comment": "Text color for secondary button disabled state",
    "deprecated": true,
    "deprecated_comment": "made-color-action-text-disabled",
    "value": "{color.accent.01.light.value}",
     "themeable": "No",
     "type": "color"
  },
}
```

## Design Tokens Checklist

* Follow naming conventions as outlined [here](./NAMING-CONVENTIONS.md) 
* Design token is used in several components or layouts
* Is the token themeable e.g. will the token cascade to other tokens e.g. `made-color-feedback-error` cascades to `background` and `border` properties.
* Only add a new token if there is no existing design token that meets your requirements.
* Ensure that it clear where this is to be used based on its name e.g do you need to specify `background`, `border`, `text`
* Ensure that design token sits in correct category e.g. action tokens go in color-action.json
* Cascade design token values where possible e.g. Use `{color.brand.primary.value}` not `#CF4500`
* Design Tokens should be used in multiple elements and NOT specific to one element. We try to limit the about of one-off component-specific tokens
* Add correct properties to design tokens e.g. themeable, type or deprecated.
* For consuming teams creating design tokens - will other teams use this design token or is it a domain specific component e.g. should this token live in core style dictionary or is it specific to the team's use cases and requirements. 


## Resources

- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Style Dictionary Github](https://github.com/amzn/style-dictionary)
- [Cross-Platform Styles with Style Dictionary](https://dbanksdesign.github.io/style-dictionary-presentation/#/)
- [Dark Mode with Style Dictionary](https://dbanks.design/blog/dark-mode-with-style-dictionary/)
- [Issue raised re: colorsets](https://github.com/amzn/style-dictionary/issues/490)
- [DTCG Glossary](https://www.designtokens.org/glossary/)

```

```
