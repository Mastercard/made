
    import Foundation

    public protocol MadeFontSize {
 
        var body: CGFloat { get }
 
        var button: CGFloat { get }
 
        var callout: CGFloat { get }
 
        var caption_medium: CGFloat { get }
 
        var caption_default: CGFloat { get }
 
        var caption_small: CGFloat { get }
 
        var headline: CGFloat { get }
 
        var small: CGFloat { get }
 
        var title_1: CGFloat { get }
 
        var title_2: CGFloat { get }
 
        var title_3: CGFloat { get }
 
        var title_4: CGFloat { get }
 
        var title_5: CGFloat { get }
 
        var title_large: CGFloat { get }
}

    public protocol MadeSpacing {
 
        var x1: CGFloat { get }
 
        var x2: CGFloat { get }
 
        var x3: CGFloat { get }
 
        var x4: CGFloat { get }
 
        var x5: CGFloat { get }
 
        var x6: CGFloat { get }
 
        var x7: CGFloat { get }
 
        var x8: CGFloat { get }
 
        var x9: CGFloat { get }
}