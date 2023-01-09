const fs = require("fs-extra");
const { contents, idiom } = require("./consts");

/**
 * This action will iterate over all the colors in the Style Dictionary
 * and for each one write a colorset.
 */
module.exports = {
  do: (dictionary, platform) => {
    dictionary.allProperties
      .filter((theme) => theme.attributes.category === `theme`)
      .map((theme) => {
        const assetPath = `${platform.buildPath}/Assets/MadeAssets.xcassets/${theme.path[1]}`;

        fs.ensureDirSync(assetPath);
        fs.writeFileSync(
          `${assetPath}/Contents.json`,
          JSON.stringify(contents, null, 2)
        );

        dictionary.allProperties
          .filter((token) => token.attributes.category === `color`)
          .forEach((token) => {
            const name = `${token.path[1].replace(/-/g, "_")}`;
            const colorsetPath = `${assetPath}/${theme.value}_${name}.colorset`;
            fs.ensureDirSync(colorsetPath);

            const colorset = {
              colors: [
                {
                  idiom,
                  color: {
                    "color-space": `srgb`,
                    components: {
                      alpha: `${token.value.a.toFixed(2)}`,
                      red: `${token.value.r}`,
                      green: `${token.value.g}`,
                      blue: `${token.value.b}`,
                    },
                  },
                },
              ],
              ...contents,
            };

            fs.writeFileSync(
              `${colorsetPath}/Contents.json`,
              JSON.stringify(colorset, null, 2)
            );
          });
      });
  },
  undo: function (dictionary, platform) {
    // no undo
  },
};
