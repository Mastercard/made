# Code Style

CSS guidelines/style guide ensures Made. can keep code as scalable, collaborative, maintainable and as flexible as possible.

* Follow Made. CSS naming conventions
* Use shorthand where possible. Using shorthand properties is useful for code efficiency and understandability.
* Avoid IDs in CSS - IDs are specificity heavyweights, and their use will throw our specificity completely out of joint.
* Avoid browser-specific hacks
* Avoid using !important to override styles
* Avoid using several attribute selectors (e.g., [class^="..."]) on commonly occurring components. Browser performance is known to be impacted by these.
* Don't target type selectors/tags e.g component, component ul li. Type selectors impact performance. Using selectors inhibits portability and reusability. 
* Indentation one tab (4 spaces)
* Don't use negative margins.
* Keep specificity as low as possible so other styles are not overridden.
* Ideally, 80-characters wide lines;
* Keep classes as simple as possible so we can extend on them if needed. 

**Rulesets**  
Example CSS ruleset

```css
[selector] {
  [property]: [value];
  [<--declaration--->]
}
```

* a space before our opening brace ({);
* properties and values on the same line;
* a space after our property–value delimiting colon (:);
* each declaration on its own new line;
* the opening brace ({) on the same line as our last selector;
* our first declaration on a new line after our opening brace ({);
* our closing brace (}) on its own new line;
* each declaration indented by 2 spaces;
* a trailing semi-colon (;) on our last declaration.
* Put a blank line after ruleset

**Stylelint**  

We use [Stylelint](https://stylelint.io/) to govern the styles above. See .stylelintrc.json.

To test your code against stylelint script run:

```
npm run stylelint:test
```
To fix any errors run:

```
npm run stylelint:fix
```