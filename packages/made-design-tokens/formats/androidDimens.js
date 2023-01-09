module.exports = function ({ dictionary }) {
  return (
    `
    <resources>` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `space`)
      .map((token) => {
        return `  
        <dimen name="${token.name}">${token.value}</dimen>`;
      })
      .join(`\n`) +`
    </resources>`
  );
};
