/* 

This file is used to transform web spacing tokens to rems. 
Required as this project uses different naming conventions to Style Dictionary.
See https://amzn.github.io/style-dictionary/#/transforms?id=defining-custom-transforms for more info.

*/
module.exports = {
  type: `value`,
  matcher: (token) =>
    token.attributes.category === `line` && token.attributes.type === `height` && (!token.attributes.item.startsWith("rem")),
  transformer: function (token) {
    const value = token.value;
    return `${value.slice(0, -1)/100}`;
  },
};
