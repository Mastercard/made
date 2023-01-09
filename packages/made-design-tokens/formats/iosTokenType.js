module.exports = function ({ dictionary }) {
  return (
    `
    import Foundation
    
    public enum MadeTokenType {` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `theme`)
      .map((token) => {
        return ` 
          case ${token.value}
      `;
      })
      .join(`\n`) +
    `}
    
    extension MadeTokenType : RawRepresentable {
        public typealias RawValue = String
        
        public init?(rawValue: RawValue) {
            switch rawValue {` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `theme`)
      .map((token) => {
        return ` 
              case "${token.value}": self = .${token.value} 
              default: self = .${token.value}
            `;
            })
            .join(`\n`) +
          `}
        }

        public var rawValue: RawValue {
            switch self {` +
          dictionary.allProperties
            .filter((token) => token.attributes.category === `theme`)
            .map((token) => {
              return ` 
              case .${token.value}: return "${token.value}"
            `;
              })
              .join(`\n`) +
          `}
        }
    }`
  );
};