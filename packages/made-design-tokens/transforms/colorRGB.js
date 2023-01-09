const Color = require('tinycolor2');

module.exports = {
  type: `value`,
  matcher: (token) => token.attributes.category === `color`,
  transformer: (token) => {
    return Color(token.value).toRgb();
  }
}