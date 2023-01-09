const fs = require("fs-extra");

module.exports = {
  do: function (dictionary, config) {
    console.log("Copying assets directory");
    fs.copySync("assets/fonts", "ios/MadeDesignTokens/" + "Fonts");
  },
  undo: function (dictionary, config) {
    console.log("Cleaning assets directory");
    fs.removeSync("ios/MadeDesignTokens/" + "Fonts");
  },
};
