module.exports = {
  type: `value`,
  matcher: (token) => token.attributes.category === `font` && token.attributes.item === `size`,
  transformer: function (token) {
    const value = token.value;
    return `${value.slice(0, -2)}sp`;
  },
};
