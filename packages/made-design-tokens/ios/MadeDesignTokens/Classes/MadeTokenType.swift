
    import Foundation
    
    public enum MadeTokenType { 
          case partnerbank
      }
    
    extension MadeTokenType : RawRepresentable {
        public typealias RawValue = String
        
        public init?(rawValue: RawValue) {
            switch rawValue { 
              case "partnerbank": self = .partnerbank 
              default: self = .partnerbank
            }
        }

        public var rawValue: RawValue {
            switch self { 
              case .partnerbank: return "partnerbank"
            }
        }
    }