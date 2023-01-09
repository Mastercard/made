# Installation

## Android

Made design tokens are stored in an AAR file in Artifactory that you can use as a dependency for an Android app module.

Add the following to build.gradle (Module) in the Gradle Scripts:

```compile 'com.mastercard.made.design_tokens:partnerbank:1.0.0'```

Replace 1.0.0 with the latest made.design_tokens build version.

Sync the Gradle Scripts, and perform a Gradle build. Made Design Tokens is now ready for use in your project.

Partnerbank design tokens are added as product flavor in the build.gradle file.