/* 

This file is used to transform Android spacing to DP.
See https://amzn.github.io/style-dictionary/#/transforms?id=defining-custom-transforms for more info.

*/

module.exports = {
  type: `value`,
  matcher: (token) => token.attributes.category === `space`,
  transformer: function (token) {
    const value = token.value;
    return `${value.slice(0, -2)}dp`;
  },
};
