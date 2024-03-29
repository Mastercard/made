const StyleDictionary = require("style-dictionary");
const fs = require("fs-extra");

const webPath = `figma/dist/`;

// before this runs we should clean the directories we are generating files in
// to make sure they are ✨clean✨
//fs.removeSync(webPath);

const styleDictionary = StyleDictionary.extend({
  // custom actions
  action: {
    generateColorsets: require("./actions/ios/colorsets"),
    copyFonts: require("./actions/ios/copyFonts"),
  },
  // custom transforms
  transform: {
    colorRGB: require("./transforms/colorRGB"),
    colorWeb: require("./transforms/colorWeb"),
    pxToDp: require("./transforms/pxToDp"),
    pxToSp: require("./transforms/pxToSp"),
    pxToRem: require("./transforms/pxToRem"),
    removePx: require("./transforms/removePx"),
  },
  // custom formats
  format: {
    androidDimens: require("./formats/androidDimens"),
    androidFontDimens: require("./formats/androidFontDimens"),
    icons: require("./formats/icons"),
    iosColor: require("./formats/iosColor"),
    iosFont: require("./formats/iosFont"),
    iosFontSize: require("./formats/iosFontSize"),
    iosDimens: require("./formats/iosDimens"),
    iosSpacing: require("./formats/iosSpacing"),
    iosStorage: require("./formats/iosStorage"),
    iosTokenType: require("./formats/iosTokenType"),
    iosTokenManager: require("./formats/iosTokenManager"),
    storybook: require("./formats/storybook"),
    styleguide: require("./formats/styleguide"),
    themeable: require("./formats/theme"),
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

/* Building Partner Bank Src */
styleDictionary
.extend({
  source: [`src-figma/themes/partnerbank/**/*.json`],
  platforms: {
    css: {
      buildPath: `${webPath}/partnerbank/`,
      transforms: [`attribute/cti`, `colorWeb`, `name/cti/kebab`, `pxToRem`],
      prefix: "made",
      files: [
        {
          destination: `tokens.css`,
          format: `css/variables`,
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
      buildPath: `${webPath}/partnerbank/`,
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
      buildPath: `${webPath}/partnerbank/`,
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
    json: {
      buildPath: `${webPath}/partnerbank/`,
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
  },
})
.buildAllPlatforms();