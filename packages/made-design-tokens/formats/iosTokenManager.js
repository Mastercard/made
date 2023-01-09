/* replace partnerbank with theme name below */

module.exports = function (dictionary) {
  return (
    `
    import Foundation

    public protocol MadeToken {
        var color: MadeColor { get }
        var font: MadeFont { get }
        var fontSize: MadeFontSize { get }
        var spacing: MadeSpacing { get }
    }
    
    public class MadeTokenManager: MadeToken {
    
        var tokenType: MadeTokenType
        var storage: MadeStorage
        
        public var color: MadeColor
        public var font: MadeFont
        public var fontSize: MadeFontSize
        public var spacing: MadeSpacing` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `theme`)
      .map((token) => {
        return `
        public init(_ theme: MadeTokenType = .${token.value}){
            self.tokenType = theme
            self.storage = MadeStorage(bundleName: "MadeDesignTokensBundle")
            self.font = MadeDefaultFont(storage: storage)
            self.color = MadeColor(theme: theme, storage: storage)

            switch tokenType {\n
            case .${token.value}:
                self.fontSize = ${token.path[1]}FontSize()
                self.spacing = ${token.path[1]}Spacing()
            }
        }`;
      })
      .join(`\n`) +
    `\n}`
  );
};
