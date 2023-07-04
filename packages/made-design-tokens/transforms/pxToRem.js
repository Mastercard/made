/* 

This file is used to transform web spacing tokens to rems. 
Required as this project uses different naming conventions to Style Dictionary.
See https://amzn.github.io/style-dictionary/#/transforms?id=defining-custom-transforms for more info.

*/
module.exports = {
  type: `value`,
  matcher: (token) =>
  token.attributes.category === `size` ||
   token.attributes.category === `space` ||
    (token.attributes.category === `font` && token.attributes.type === `size` || token.attributes.item === `size`),
  transformer: function (token) {
    const value = token.value;
    return `${value.slice(0, -2)/16}rem`;
  },
};
