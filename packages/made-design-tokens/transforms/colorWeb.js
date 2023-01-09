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
