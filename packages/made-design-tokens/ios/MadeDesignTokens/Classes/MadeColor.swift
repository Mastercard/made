
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


  
            public var accent_01: UIColor {
              return UIColor(named: buildColorName("accent_01"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var accent_02: UIColor {
              return UIColor(named: buildColorName("accent_02"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var background: UIColor {
              return UIColor(named: buildColorName("background"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var decorative_01: UIColor {
              return UIColor(named: buildColorName("decorative_01"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var decorative_02: UIColor {
              return UIColor(named: buildColorName("decorative_02"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var disabled: UIColor {
              return UIColor(named: buildColorName("disabled"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var error: UIColor {
              return UIColor(named: buildColorName("error"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var on_background: UIColor {
              return UIColor(named: buildColorName("on_background"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var on_error: UIColor {
              return UIColor(named: buildColorName("on_error"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var on_primary: UIColor {
              return UIColor(named: buildColorName("on_primary"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var on_secondary: UIColor {
              return UIColor(named: buildColorName("on_secondary"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var on_surface: UIColor {
              return UIColor(named: buildColorName("on_surface"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var primary_light: UIColor {
              return UIColor(named: buildColorName("primary_light"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var primary: UIColor {
              return UIColor(named: buildColorName("primary"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var secondary: UIColor {
              return UIColor(named: buildColorName("secondary"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var secondary_light: UIColor {
              return UIColor(named: buildColorName("secondary_light"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var shadow: UIColor {
              return UIColor(named: buildColorName("shadow"), in: storage.bundle, compatibleWith: nil)!
            }
  
            public var surface: UIColor {
              return UIColor(named: buildColorName("surface"), in: storage.bundle, compatibleWith: nil)!
            }
}