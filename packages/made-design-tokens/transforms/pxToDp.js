module.exports = {
  type: `value`,
  matcher: (token) => token.attributes.category === `space`,
  transformer: function (token) {
    const value = token.value;
    return `${value.slice(0, -2)}dp`;
  },
};
