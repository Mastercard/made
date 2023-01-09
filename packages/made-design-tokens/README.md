# Made. Design Tokens

Welcome to the source code repository for Made. Design Tokens brought to you by The Made. Framework.

The Mastercard Adaptive Design Ecosystem, affectionately known as Made, is a family of web and mobile design systems. Inside our framework, you’ll find a collection of UI components, design patterns, and guidelines. We help product teams maintain design standards, increase productivity, and bring products to market faster.

## What are Design Tokens?

> Design tokens are named entities for visual atoms of a design system e.g. color, type, spacing, that are stored in a tech agnostic format as a single source of truth to scale across any platform, devices, tech stack.

**Named entities**  
Design tokens are all the values needed to construct and maintain a design system — spacing, color, typography, border-radius, etc. — represented as data. These can represent anything defined by design: a color as a HEX value or spacing or sizing as a number.

They’re used in place of hard-coded values in order to ensure flexibility and unity across all product experiences. By bringing semantic meaning to tokens with roles, designers and developers don't have to second-guess what what colour to apply for a background. They don't have to choose between gray.01 or white. Instead, they'd apply a design decision with an example name of made-color-background-default.

**Tech Agnostic**  
Design tokens are stored in a platform agnostic format like JSON and use design tokens generators like Style Dictionary (Amazon) to transform our design tokens to scale across multiple platforms and languages like CSS or JSON for web, XML for Android, Swift for iOS.    This means we can ensure brand consistency throughout any targeted platform.


**Single Source of Truth**  
Design Tokens are stored in a single source of truth such as Artifactory, so when we make an update to our design tokens, this update will filter down to products change through their build process automatically. This streamlines the redesign process and gets our design changes to products in a matter of minutes!

## Benefits of Design Tokens

**Designing at scale**  
With your design decisions extracted from a specific code base into a tech agnostic format single source of truth, scaling becomes easier.

**Consistent & Maintainable**  
When everyone’s working from a single source of truth, we can collaborate and share knowledge in a quicker, simpler way.
With role-based design tokens in place, designers and developers we can apply consistent design decisions across products.
Everything is maintainable, easy to update and is future proof. If we ever decide to do a refreshed design later or create a new theme,
since the token system is in place we just change the values in the token values.

**Saving time and resources**  
We have streamlined the redesign process, when we update or add a new token this filter downs to product teams automatically through their build process.​
Products teams get design updates without having to make any code changes.
Designers have ownership of managing and maintaining the values in our design system and are no longer dependant on the developer to implement changes, reducing the feedback loop and getting our products to market faster.​

**Collaboration**  
Designers and developers now have a shared language.
Designers reference the design tokens in the design and developers can reference design tokens in their code.
Developers no longer have to reference hard coded values, improving documentation and the design handover process.

**Tech Agnostic**  
We store design tokens in a platform agnostic format and can transform our design tokens to scale across multiple platforms and languages like CSS or JSON for web, XML for Android, Swift for iOS. This means we can ensure brand consistency throughout any targeted platform.

**Powerful theming**  
Since everything is dynamic, using our new design tokens system, teams can theme their application in a matter of minutes. No more slow, manual updates.
See Theming documentation for more information.

## Guidelines

### Getting Started 

See our [Getting started guide](https://made.mastercard.com/storybook-css/?path=/docs/hello-getting-started--page) on how to get up and running with Made. Design Tokens.

### How do I use tokens?

All design decisions can be abstracted into tokens and design tokens come pre-baked into the Made. CSS component source code.
For example, in the Made. button component we have tokens for color, border-radius, size, spacing, font size, font families and  line-height.

<img
  src="https://made.mastercard.com/images/hero-design-tokens@2x.jpg"
  width="700"
  alt=""
/>

For example, here are some of the design tokens for the button component.

```css
/* Key: value in design tokens file */
--made-color-action-background-primary-default: #cf4500;
--made-color-action-border-primary-default: #cf4500;
--made-color-action-text-on-primary: #ffffff;
--made-button-border-radius: 20px;
--made-space-8-x: 32px;
```
- The token name defines the usage or how to apply the value to a specific context, such as `--made-button-border-radius`
- The token stores visual design attributes e.g. #cf4500
- The token replaces hard-coded values in styles file.

```css
.made-c-button--primary {
  background-color: var(--made-color-action-background-primary-default);
  border-color: var(--made-color-action-border-primary-default);
  border-radius: var(--made-button-border-radius);
  color: var(--made-color-action-text-on-primary);
  padding: 0 var(--made-space-8-x);
}
```

If you need to extend a component for example create a delete button you can extend the existing code in a matter of minutes using design tokens.

```css
.made-c-button--delete {
  background-color: var(--made-color-feedback-background-error);
  border-color: var(--made-color-feedback-border-error);
  border-radius: var(--made-button-border-radius);
  color: var(--made-color-feedback-text-on-error);
  padding: 0 var(--made-space-8-x);
}
```

<img
  src="https://made.stage.mastercardlabs.com/images/design-token-tech-agnostic.png"
  width="320"
  class="made-u-right"
  alt=""
/>

Everything is maintainable, easy to update and is future proof. If we ever decide to do a refreshed design later or create a new theme, since the token system is in place we just change the values in the in the token values.

If a project requires you to use a different tech stack from the above, no problem!
We store design tokens in a platform agnostic format(JSON) and use an open source design token generator [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
to transform our design tokens to scale across multiple platforms and languages like CSS or JSON for web, XML for Android, Swift for iOS.   
This means we can ensure brand consistency throughout any targeted platform.

Currently, Made. provides design tokens in the formats below for Web. Tokens can be imported and referenced as shown below:

**CSS (kebab-case)**

```
//import tokens
<link rel="stylesheet" href="[path-to-directory]/tokens.css" />

//reference tokens in your styles
background-color: var(--made-color-brand-primary);
```

**SASS (kebab-case)**

```
//import tokens
@import '[path-to-directory]/tokens.scss';

//reference tokens in your styles
background-color: $made-color-brand-primary;
```

**LESS (kebab-case)**

```
//import tokens
@import '[path-to-directory]/tokens.less';

//reference tokens in your styles
background-color: @made-color-brand-primary;
```

**JSON (PascalCase)**

```
//import tokens
import { DesignTokens } from "[path-to-directory]/tokens.json";

//reference tokens in your styles
backgroundColor: MadeColorBrandPrimary;
```

#### Need another format?

If the format you need is not listed above, <a href="https://teams.microsoft.com/l/chat/0/0?users=emma.kellett@mastercard.com">get in touch with the Made. team</a> and we can review
your project requirements. Documentation for supported [file formats](https://amzn.github.io/style-dictionary/#/formats?id=pre-defined-formats)
and [naming conventions, colour and sizing formats](https://amzn.github.io/style-dictionary/#/transforms) can be found in Style Dictionary documentation.

## 📚 Documentation
See our [documentation site](https://made.mastercard.com/) here for full how-to docs and guidelines.

## 🤝 Contributing
Made is always evolving – thanks to you. Every time you share local patterns, bug fixes, components, or documentation with us, you’re helping us to understand your needs.

If you're interested, definitely check out our Contributing Guide! 👀



## 🧹Changelog
Check out our Changelog for the latest updates and releases.


