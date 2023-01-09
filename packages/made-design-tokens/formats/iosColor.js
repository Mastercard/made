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
        import UIKit
        
        public struct MadeColor {
            private (set) var theme : MadeTokenType
            private (set) var storage : MadeStorage
            
            init(theme: MadeTokenType, storage: MadeStorage) {
                self.theme = theme
                self.storage = storage
            }
            
            private func buildColorName(_ name: String) -> String {
                let name = theme.rawValue + "_" + name
                return name
            }

\n` +
    dictionary.allProperties
      .map((token) => {
        const name = `${token.path[1].replace(/-/g, "_")}`;
        return `  
            public var ${name}: UIColor {
              return UIColor(named: buildColorName("${name}"), in: storage.bundle, compatibleWith: nil)!
            }`;
      })
      .join(`\n`) +
    `\n}`
  );
};