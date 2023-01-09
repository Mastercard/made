
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
        public var spacing: MadeSpacing
        public init(_ theme: MadeTokenType = .partnerbank){
            self.tokenType = theme
            self.storage = MadeStorage(bundleName: "MadeDesignTokensBundle")
            self.font = MadeDefaultFont(storage: storage)
            self.color = MadeColor(theme: theme, storage: storage)

            switch tokenType {

            case .partnerbank:
                self.fontSize = PartnerbankFontSize()
                self.spacing = PartnerbankSpacing()
            }
        }
}