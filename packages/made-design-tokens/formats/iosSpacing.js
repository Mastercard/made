/* replace partnerbank with theme name below */

module.exports = function ({ dictionary }) {
  return (
    `
  import Foundation
    
  struct ${this.className}Spacing: MadeSpacing {\n` +
    dictionary.allProperties
      .map((token) => {
        const name = `${token.path[1]
          .replace(/-/g, "")
          .split("")
          .reverse()
          .join("")}`;
        return ` 
        var ${name}: CGFloat = ${token.value}`;
      })
      .join(`\n`) +
    `\n}`
  );
};
