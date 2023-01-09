module.exports = function ({ dictionary }) {
  return (
    `
    <resources>` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `font` &&
          token.attributes.item === `size`
      )
      .map((token) => {
        return `  
        <dimen name="${token.name}">${token.value}</dimen>`;
      })
      .join(`\n`) +`
    </resources>`
  );
};
