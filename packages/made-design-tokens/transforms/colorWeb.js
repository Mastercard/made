/* 

This file is used to transform web colours to a HEX value but 
if the token values has an alpha value it will remain the same e.g. drop shadows.
See https://amzn.github.io/style-dictionary/#/transforms?id=defining-custom-transforms for more info.

*/

const Color = require("tinycolor2");

module.exports = {
  type: `value`,
  matcher: (token) => token.attributes.category === `color`,
  transformer: (token) => {
    var color = Color(token.value);
    if (color.getAlpha() === 1) {
      return color.toHexString();
    } else {
      return color.toRgbString();
    }
  },
};
