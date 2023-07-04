/* 

This file is used to transform iOS Colours to RGB format
See https://amzn.github.io/style-dictionary/#/transforms?id=defining-custom-transforms for more info.

*/

const Color = require('tinycolor2');

module.exports = {
  type: `value`,
  matcher: (token) => token.attributes.category === `color`,
  transformer: (token) => {
    return Color(token.value).toRgb();
  }
}