
module.exports = function ({ dictionary }) {
  return (
    `
    import Foundation
  
    struct ${this.className}FontSize: MadeFontSize {\n` +
    dictionary.allProperties
      .map((token) => {
        const name = `${token.path[1].replace(/-/g, "_")}`;
        return ` 
        var ${name}: CGFloat = ${token.value}`;
      })
      .join(`\n`) +
    `\n}`
  );
};
