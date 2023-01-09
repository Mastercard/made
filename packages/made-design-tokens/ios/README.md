# Usage

Use Made. Design Tokens for color, spacing and font dimensions. Made. Design tokens supports Android and iOS Native Platforms in “Partnerbank” theme of Mobile UI library. 

Android design tokens are available in XML file formats, Android 8 digit hex values, DPs for  dimensions and font dimensions. 

IOS design tokens are available in an asset catalog as a colorset and Swift Formats. Once installed the color set will appear in the Color pop-up menu under Named Colors on your Xcode Storyboard. Colors and font-sizes are also defined in code (Swift).

## Installation

### Requirements

- [x] Xcode 11.3
- [x] Swift 5.
- [x] iOS 11 or higher.
- [x] CocoaPods (https://cocoapods.org/).

### Install CocoaPods:

``` sudo gem install cocoapods```

Navigate to your iOS project directory and run:

``` pod init```

A Podfile will be created at the root of your project directory.

Add the following to your Podfile under use_frameworks!:

```pod 'MadeDesignTokens'```

Run:

```pod install```

A workspace for you project will be created (ending in .xcworkspace)

Open this workspace file in xcode. Use this workspace for future builds.

After opening the workspace go to YourProject -> YourProjectTarget -> Build Settings -> Header Search Paths, and remove everything but $(inherited) non-recursive.

## Token Manager

```swift
import UIKit
import MadeDesignTokens

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        let tokenManager = MadeTokenManager(.partnerbank)
        
        let spacing = tokenManager.spacing.x1
        print(spacing)
        
        let font = tokenManager.font.bold.withSize(tokenManager.fontSize.body)
        print(font)
        
        self.view.backgroundColor = tokenManager.color.error
    }
}
```

