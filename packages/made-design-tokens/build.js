/* This file adds configuration to design tokens, 
defining the transformation and formatting of the tokens and assets for each output platform. */

const StyleDictionary = require("style-dictionary");
const fs = require("fs-extra");

/* paths in which design tokens are built to be packaged and used by consuming teams */
const iosPath = `ios/MadeDesignTokens/`;
const androidPath = `android/library/src/partnerbank/`;
const webPath = `dist/2.2.0/web/themes`;

// before this runs we should clean the directories we are generating files in
// to make sure they are ✨clean✨
fs.removeSync(iosPath);
fs.removeSync(androidPath);
//fs.removeSync(webPath);

const styleDictionary = StyleDictionary.extend({
  // custom actions that generate colorsets for iOS and copy fonts to iOS folder
  action: {
    generateColorsets: require("./actions/ios/colorsets"),
    copyFonts: require("./actions/ios/copyFonts"),
  },
  // custom transforms included in build, transforms modify a token to a specific platform.
  transform: {
    colorRGB: require("./transforms/colorRGB"),
    colorWeb: require("./transforms/colorWeb"),
    pxToDp: require("./transforms/pxToDp"),
    pxToSp: require("./transforms/pxToSp"),
    pxToRem: require("./transforms/pxToRem"),
    removePx: require("./transforms/removePx"),
  },
  // custom formats included in build, formats define the output of a file (blueprint/template).
  format: {
    androidDimens: require("./formats/androidDimens"),
    androidFontDimens: require("./formats/androidFontDimens"),
    iosColor: require("./formats/iosColor"),
    iosFont: require("./formats/iosFont"),
    iosFontSize: require("./formats/iosFontSize"),
    iosDimens: require("./formats/iosDimens"),
    iosSpacing: require("./formats/iosSpacing"),
    iosStorage: require("./formats/iosStorage"),
    iosTokenType: require("./formats/iosTokenType"),
    iosTokenManager: require("./formats/iosTokenManager"),
    storybook: require("./formats/storybook"),
    themeable: require("./formats/theme"),
    /* cascades global tokens to role based and component specific tokens in JSON (same as outputReferences for CSS) */
    customFormat: function ({ dictionary, options }) {
      return (
        `{ \n` +
        dictionary.allProperties
          .map((token) => {
            let value = JSON.stringify(token.value);
            if (options.outputReferences) {
              if (dictionary.usesReference(token.original.value)) {
                const refs = dictionary.getReferences(token.original.value);
                refs.forEach((ref) => {
                  value = value.replace(ref.value, function () {
                    return `${ref.name}`;
                  });
                });
              }
            }

            return `"${token.name}": ${value}`;
          })
          .join(`,\n`) +
        `}`
      );
    },
  },
});

/* filter to add themeable tokens to another file */
styleDictionary.registerFilter({
  name: "themeableTokens",
  matcher: function (token) {
    return token.themeable === "Yes" && token.figmaOnly !== true;
  },
});

/* filter to add deprecated tokens to another file */
styleDictionary.registerFilter({
  name: "deprecatedTokens",
  matcher: function (token) {
    return token.deprecated === true && token.figmaOnly !== true;
  },
});

/* filter to add deprecated tokens to another file */
styleDictionary.registerFilter({
  name: "removeDeprecatedTokens",
  matcher: function (token) {
    return token.deprecated !== true && token.figmaOnly !== true;
  },
});

/* Building Android and iOS Tokens */
styleDictionary
  .extend({
    /* style dictionary grabs tokens from this folder to modify */
    source: [
      `src/mobileUI/platform/native/themes/partnerbank/colors.json`,
      `src/mobileUI/global/**/*.json`,
    ],
    /* configure what platforms you want token to transform to */
    platforms: {
      iosColors: {
        buildPath: iosPath,
        /* default style dictionary transforms and custom transform `colorRGB`*/
        transforms: [`attribute/cti`, `colorRGB`, `name/ti/camel`],
        actions: [`generateColorsets`],
      },
      iOS: {
        buildPath: iosPath,
        transforms: ["attribute/cti", "name/cti/snake", "removePx"],
        actions: [`copyFonts`],
        files: [
          {
            /* output folder for iOS Color tokens */
            destination: `Classes/MadeColor.swift`,
            /* references custom format */
            format: `iosColor`,
            /* filter color tokens only. See Naming on Style Dictionary for token architecture  */
            filter: (token) => token.attributes.category === `color`,
            /* cascade values referenced in token to output files.  */
            options: {
              outputReferences: true,
            },
          },
          {
            className: `Partnerbank`,
            destination: `Classes/Partnerbank/PartnerbankFontSize.swift`,
            format: `iosFontSize`,
            filter: (token) =>
              token.attributes.category === `font` &&
              token.attributes.item === `size`,
          },
          {
            className: `Partnerbank`,
            destination: `Classes/Partnerbank/PartnerbankSpacing.swift`,
            format: `iosSpacing`,
            filter: (token) => token.attributes.category === `space`,
          },
          {
            destination: "Classes/MadeTokenType.swift",
            format: "iosTokenType",
          },
          {
            destination: "Classes/MadeDimension.swift",
            format: "iosDimens",
          },
          {
            destination: "Classes/MadeTokenManager.swift",
            format: "iosTokenManager",
          },
          {
            destination: "Classes/MadeStorage.swift",
            format: "iosStorage",
          },
          {
            destination: "Classes/MadeFont.swift",
            format: "iosFont",
          },
      ],
    },
      android: {
        transforms: [
          "attribute/cti",
          "name/cti/snake",
          "color/hex8android",
          "pxToDp",
          "pxToSp",
        ],
        buildPath: androidPath,
        /* prefix token names in output files with made e.g. made-color-.. */
        prefix: `made`,
        files: [
          {
            destination: `res/values/tokens_colors.xml`,
            format: `android/resources`,
            filter: (token) => token.attributes.category === `color`,
            options: {
              outputReferences: true,
            },
          },
          {
            destination: `res/values/tokens_font_size.xml`,
            format: `androidFontDimens`,
          },
        {
          destination: `res/values/tokens_dimens.xml`,
          filter: (token) => token.attributes.category === `space`,
          format: `androidDimens`,
        },
      ],
    },
  },
})
.buildAllPlatforms();

/* Building B2B Default Theme: Each Theme should have this code block */
styleDictionary
.extend({
  source: [`src-figma/2.2.0/**/*.json`],
  platforms: {
    css: {
      buildPath: `${webPath}/b2b/`,
      transforms: [`attribute/cti`, `colorWeb`, `name/cti/kebab`, `pxToRem`],
      prefix: "made",
      files: [
        {
          destination: `tokens.css`,
          format: `css/variables`,
          /* custom filter to remove deprecated tokens created above */
          filter: `removeDeprecatedTokens`,
        },
        {
          destination: `theme.css`,
          format: `css/variables`,
          filter: `themeableTokens`,
        },
        {
          destination: `deprecated.css`,
          format: `css/variables`,
          filter: `deprecatedTokens`,
        },
        {
          destination: `tokens-variables.css`,
          format: `css/variables`,
          filter: `removeDeprecatedTokens`,
          options: {
            outputReferences: true,
          },
        },
        {
          destination: `theme-variables.css`,
          format: `css/variables`,
          filter: `themeableTokens`,
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    scss: {
      buildPath: `${webPath}/b2b/`,
      transforms: [`attribute/cti`, `color/hex`, `name/cti/kebab`, `pxToRem`],
      prefix: "made",
      files: [
        {
          destination: `tokens.scss`,
          format: `scss/variables`,
          filter: `removeDeprecatedTokens`,
          options: {
            outputReferences: true,
          },
        },
        {
          destination: `deprecated.scss`,
          format: `scss/variables`,
          filter: `deprecatedTokens`,
        },
        {
          destination: `theme.scss`,
          format: `scss/variables`,
          filter: `themeableTokens`,
        },
      ],
    },
    less: {
      buildPath: `${webPath}/b2b/`,
      transforms: [`attribute/cti`, `color/hex`, `name/cti/kebab`, `pxToRem`],
      prefix: "made",
      files: [
        {
          destination: `tokens.less`,
          format: `less/variables`,
          filter: `removeDeprecatedTokens`,
          options: {
            outputReferences: true,
          },
        },
        {
          destination: `deprecated.less`,
          format: `less/variables`,
          filter: `deprecatedTokens`,
        },
        {
          destination: `theme.less`,
          format: `less/variables`,
          filter: `themeableTokens`,
        },
      ],
    },
    js: {
      /* this platform generates JSON files we use in Storybook to display token documentation */
      buildPath: `./storybook/`,
      transforms: [`attribute/cti`, `color/hex`, `name/cti/kebab`, `pxToRem`],
      prefix: "made",
      files: [
        {
          destination: `storybook.json`,
          format: `storybook`,
        }
      ],
    },
    /* this platform generates JSON files we use in Storybook to display token docs but no pxToRem
    for spacing, grid examples */
    theme: {
      buildPath: `./storybook/`,
      transforms: [`attribute/cti`, `color/hex`, `name/cti/kebab`],
      prefix: "made",
      files: [
        {
          destination: `themeable.json`,
          format: `themeable`,
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    json: {
      buildPath: `${webPath}/b2b/`,
      transforms: [
        `attribute/cti`,
        `color/hex`,
        `name/cti/pascal`,
        `pxToRem`,
      ],
      prefix: "made",
      files: [
        {
          destination: `tokens-nested.json`,
          format: `json/nested`,
          filter: `removeDeprecatedTokens`,
        },
        {
          destination: `tokens-vscode.js`,
          format: `javascript/module`,
          filter: `removeDeprecatedTokens`,
        },
        {
          destination: `deprecated-nested.json`,
          format: `json/nested`,
          filter: `deprecatedTokens`,
        },
        {
          destination: `theme-nested.json`,
          format: `json/nested`,
          filter: `themeableTokens`,
        },
        {
          destination: `tokens.json`,
          format: `customFormat`,
          filter: `removeDeprecatedTokens`,
          options: {
            outputReferences: true,
          },
        },
        {
          destination: `deprecated.json`,
          format: `customFormat`,
          filter: `deprecatedTokens`,
        },
        {
          destination: `theme.json`,
          format: `customFormat`,
          filter: `themeableTokens`,
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: `${webPath}/b2b/`,
      files: [
        {
          destination: "tokens-vscode.d.ts",
          format: "typescript/module-declarations",
          filter: `removeDeprecatedTokens`,
        }
      ]
    },
  },
})
.buildAllPlatforms();
