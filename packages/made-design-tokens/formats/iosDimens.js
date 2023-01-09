/**
 * This custom format creates an extension of the SwiftUI Color
 * class and adds all the color tokens as static variables so that
 * you can reference a color token like: `Color.backgroundPrimary`.
 *
 * @example
 * ```swift
 * Text("Hello, World!")
 *   .backgroundColor(Color.backgroundPrimary)
 *   .foregroundColor(Color.fontPrimary)
 * ```
 */
module.exports = function ({ dictionary }) {
  return (
    `
    import Foundation

    public protocol MadeFontSize {\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `font` &&
          token.attributes.item === `size`
      )
      .map((token) => {
        const name = `${token.path[1].replace(/-/g, "_")}`;
        return ` 
        var ${name}: CGFloat { get }`;
      })
      .join(`\n`) +
    `\n}

    public protocol MadeSpacing {\n` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `space`)
      .map((token) => {
        const name = `${token.path[1].replace(/-/g, "").split("").reverse().join("")}`;
        return ` 
        var ${name}: CGFloat { get }`;
      })
      .join(`\n`) +
    `\n}`
  );
};
