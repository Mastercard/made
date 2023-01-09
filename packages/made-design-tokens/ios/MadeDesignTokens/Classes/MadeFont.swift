
      import Foundation
      import UIKit
      
      public protocol MadeFont {
          var bold: UIFont { get }
          var heavy: UIFont { get }
          var light: UIFont { get }
          var medium: UIFont { get }
          var regular: UIFont { get }
          var regular_nrw: UIFont { get }
          var medium_nrw: UIFont { get }
          
          init(storage: MadeStorage)
      }
      
      struct MadeDefaultFont: MadeFont {
          let initialSize: CGFloat = 14
          private (set) var storage : MadeStorage
          
          init(storage: MadeStorage) {
              self.storage = storage
              registerFonts()
          }
          
          func registerFonts() {
              // Register all fonts found in the bundle with extension
              let fonts = storage.bundle.urls(forResourcesWithExtension: "ttf", subdirectory: nil)
              fonts?.forEach({ url in
                  CTFontManagerRegisterFontsForURL(url as CFURL, .process, nil)
              })
          }
          
          func unwrapFont(_ font: UIFont?) -> UIFont {
              guard let _font = font else {
                  return UIFont(name: "TimesNewRomanPSMT", size: 20)!
              }
              return _font
          }
          
          var bold: UIFont {
              let name = "MarkOffcForMC-Bold"
              return unwrapFont(UIFont(name: name, size: initialSize))
          }
          
          var heavy: UIFont {
              let name = "MarkOffcForMC-Heavy"
              return unwrapFont(UIFont(name: name, size: initialSize))
          }
          
          var light: UIFont {
              let name = "MarkOffcForMC-Light"
              return unwrapFont(UIFont(name: name, size: initialSize))
          }
          
          var medium: UIFont {
              let name = "MarkOffcForMC-Medium"
              return unwrapFont(UIFont(name: name, size: initialSize))
          }
          
          var regular: UIFont {
              let name = "MarkOffcForMC"
              return unwrapFont(UIFont(name: name, size: initialSize))
          }
      
          var regular_nrw: UIFont {
              let name = "MarkForMCNrw"
              return unwrapFont(UIFont(name: name, size: initialSize))
          }
          
          var medium_nrw: UIFont {
              let name = "MarkForMCNrw-Medium"
              return unwrapFont(UIFont(name: name, size: initialSize))
          }
      }