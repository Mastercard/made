# CSS Architecture

A solid architecture can help us control our specificity, enforce naming conventions, manage our source order, create a sane development environment, and generally make managing our CSS projects a lot more consistent and comfortable.

At a very high-level, architecture should help

* provide a consistent environment;
* accommodate change with fewer styling collisions;
* grow and scale your codebase;
* promote reuse and efficiency;
* increase productivity.

Typically, this will mean a class-based and componentised architecture, split up into manageable modules, probably using a preprocessor.

## Made CSS Architecture
Made follow ITCSS as a guide modifying the structure to meet our project requirements, as this is a scalable and maintainable CSS Architecture that works well with design system and design token requirements. 

### What is ITCSS?
ITCSS stands for Inverted Triangle CSS and it helps you to organize your project CSS files in such a way that you can better deal with (not always easy-to-deal with) CSS specifics like global namespace, cascade and selectors specificity.

One of the key principles of ITCSS is that it separates your CSS codebase into several sections (called layers), which take the form of the inverted triangle:

**ITCSS Layers**  

1. Settings: Variables and other settings (Made. Design Tokens)
2. Generic: box-sizing, html/body, etc. 
3. Elements: Bare element defaults like headings and links (h1, a)
4. Components: Individual components
5. Utilities and other rules meant to be a final trump over everything else

**How does it work?** 

* No IDs use classes instead.
* IDs are specificity heavyweights, and their use will override styles that use classes.
* Component UI Pattern.
* You no longer build pages but rather widgets/modules/components that are self-contained, reusable components.
* Class-based architecture
* Styles are defined using classes rather than bare HTML elements which provides a more robust and scalable architecture. Works well with BEM.


The concept is very simple.

* Order your settings and rules starting with those with the broadest reach and lowest specificity (design tokens) and end with those that have the most narrow reach and highest specificity (utility classes).
* This means our CSS is easier to scale and write as we're writing it in an order that only ever adds to what was written previously so we are not writing css to undo previous css. 
* Global and far-reaching styles are shared more effectively and efficiently.
* CSS becomes more extensible and redundant styles are avoided leading to lesser file sizes, and latency.
*  We spend very little time undoing things because our cascade and specificity are all pointing in the same direction 
