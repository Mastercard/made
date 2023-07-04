/* 

This file is used to transform iOS font size to DP.
See https://amzn.github.io/style-dictionary/#/transforms?id=defining-custom-transforms for more info.

*/

module.exports = {
  type: `value`,
  matcher: (token) => token.attributes.category === `font` && token.attributes.item === `size`,
  transformer: function (token) {
    const value = token.value;
    return `${value.slice(0, -2)}sp`;
  },
};
