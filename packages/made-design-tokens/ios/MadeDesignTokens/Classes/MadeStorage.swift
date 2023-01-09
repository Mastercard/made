
  import Foundation

    public class MadeStorage {
          
        var bundle: Bundle = Bundle.main
          
          public init(bundleName: String) {
              let podBundle = Bundle(for: type(of: self))
              guard let bundleURL = podBundle.url(forResource: bundleName, withExtension: "bundle") else {
                  return
              }
              guard let bundle = Bundle(url: bundleURL) else {
                  return
              }
              self.bundle = bundle
          }
      }