#
# Be sure to run `pod lib lint MadeDesignTokens.podspec' to ensure this is a
# valid spec before submitting.
#
# Any lines starting with a # are optional, but their use is encouraged
# To learn more about a Podspec see https://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = 'MadeDesignTokens'
  s.version          = '1.0.2'
  s.summary          = 'Made Framework iOS Design Tokens'
  s.description      = 'Design tokens are a set of foundational rules for design values like colours or spacing. They help designers and developers manage the complexity of modern design systems.'
  s.homepage         = 'https://fusion.mastercard.int/stash/scm/made/design-tokens'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'MADE.' => 'Emma.Kellett@mastercard.com' }
  s.source           = { :git => 'https://fusion.mastercard.int/stash/scm/made/design-tokens.git', :tag => s.version.to_s }
  s.ios.deployment_target = '11.0'
  s.swift_version = '5.0'
  s.source_files = 'ios/MadeDesignTokens/Classes/**/*.{swift,h,m}'
  s.resource_bundles = {
      'MadeDesignTokensBundle' => ['ios/MadeDesignTokens/Assets/**/*.{xib,xcassets,imageset,png,jpg,jpeg,storyboard,json}', 'ios/MadeDesignTokens/Fonts/**/*.{ttf}']
  }
end
