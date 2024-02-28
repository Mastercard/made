/* 

This file is used to output JSON file for Storybook documentation for theming.
https://made.mastercard.com/storybook-css/?path=/docs/design-tokens-theming--color


See https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item 
for more information on how to target a token.

If you add a new token category add to the template below.

*/

module.exports = function (dictionary, options) {
  return (
    `
    { "tokens" : {
      "color" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.themeable === `Yes` && 
          token.attributes.category === `color` ||
          token.attributes.category === `scrollbar` ||
          token.attributes.category === `header` ||
          token.attributes.category === `footer` ||
          token.attributes.category === `pill` ||
          token.attributes.category === `search` &&
          token.deprecated !== true
      )
      .map((token) => {
        const original = function () {
          return `${token.original.value
            .replace(/\./g, "-")
            .replace(/\{/g, "")
            .replace(/\}/g, "")
            .replace(/\-}/g, "")
            .replace(/.value/g, "")}`;
        };
        return ` 
     {
      "name": "${token.name}",
      "value": "${token.value}",
      "comment": "${token.comment}",
      "themeable": "${token.themeable}",
      "type": "${token.type}",
      "original": "${original()}"
      }`;
      })
      .join(`,`) +
    `],
    "typography" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.themeable === `Yes` &&
          token.attributes.category === `font` &&
          token.deprecated !== true
      )
      .map((token) => {
        const original = function () {
          return `${token.original.value
            .replace(/\./g, "-")
            .replace(/\{/g, "")
            .replace(/\}/g, "")
            .replace(/\-}/g, "")
            .replace(/.value/g, "")}`;
        };
        return ` 
     {
      "name": "${token.name}",
      "value": "${token.value}",
      "comment": "${token.comment}",
      "themeable": "${token.themeable}",
      "type": "${token.type}",
      "original": "${original()}"
      }`;
      })
      .join(`,`) +
    `],
    "space" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.themeable === `Yes` &&
          token.attributes.category === `grid` &&
          token.deprecated !== true
      )
      .map((token) => {
        const original = function () {
          return `${token.original.value
            .replace(/\./g, "-")
            .replace(/\{/g, "")
            .replace(/\}/g, "")
            .replace(/\-}/g, "")
            .replace(/.value/g, "")}`;
        };
        return ` 
     {
      "name": "${token.name}",
      "value": "${token.value}",
      "comment": "${token.comment}",
      "themeable": "${token.themeable}",
      "type": "${token.type}",
      "original": "${original()}"
      }`;
      })
      .join(`,`) +
    `],
    "borderRadius" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.themeable === `Yes` &&
            token.attributes.category === `border` &&
            token.attributes.type === `radius`) ||
          (token.attributes.category === `button` &&
            token.attributes.type === `border-radius`) ||
          (token.attributes.category === `pill` &&
            token.attributes.type === `border-radius` &&
            token.deprecated !== true)
      )
      .map((token) => {
        const original = function () {
          return `${token.original.value
            .replace(/\./g, "-")
            .replace(/\{/g, "")
            .replace(/\}/g, "")
            .replace(/\-}/g, "")
            .replace(/.value/g, "")}`;
        };
        return ` 
     {
      "name": "${token.name}",
      "value": "${token.value}",
      "comment": "${token.comment}",
      "themeable": "${token.themeable}",
      "type": "${token.type}",
      "original": "${original()}"
      }`;
      })
      .join(`,`) +
    `],
    "shadow" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.themeable === `Yes` &&
          token.attributes.category === `shadow` &&
          token.deprecated !== true
      )
      .map((token) => {
        const original = function () {
          return `${token.original.value
            .replace(/\./g, "-")
            .replace(/\{/g, "")
            .replace(/\}/g, "")
            .replace(/\-}/g, "")
            .replace(/.value/g, "")}`;
        };
        return ` 
     {
      "name": "${token.name}",
      "value": "${token.value}",
      "comment": "${token.comment}",
      "themeable": "${token.themeable}",
      "type": "${token.type}",
      "original": "${original()}"
      }`;
      })
      .join(`,`) +
    `],
    "forms" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.themeable === `Yes` &&
          token.attributes.category === `forms` &&
          token.deprecated !== true
      )
      .map((token) => {
        const original = function () {
          return `${token.original.value
            .replace(/\./g, "-")
            .replace(/\{/g, "")
            .replace(/\}/g, "")
            .replace(/\-}/g, "")
            .replace(/.value/g, "")}`;
        };
        return ` 
     {
      "name": "${token.name}",
      "value": "${token.value}",
      "comment": "${token.comment}",
      "themeable": "${token.themeable}",
      "type": "${token.type}",
      "original": "${original()}"
      }`;
      })
      .join(`,`) +
    `],
    "checkbox" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `checkbox` &&
          token.deprecated !== true
      )
      .map((token) => {
        const original = `${token.original.value
          .replace(/\./g, " ")
          .replace(/\{/g, "")
          .replace(/\}/g, "")
          .replace(/\-}/g, " ")
          .replace(/value/g, "")
          .toUpperCase()}`;
        return ` 
         {
            "name": "${token.name}",
            "value": "${token.value}",
            "comment": "${token.comment}",
                "themeable": "${token.themeable}",
            "original": "${original}"
          }`;
      })
      .join(`,`) +
    `],
    "table" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `table` &&
          token.deprecated !== true
      )
      .map((token) => {
        const original = `${token.original.value
          .replace(/\./g, " ")
          .replace(/\{/g, "")
          .replace(/\}/g, "")
          .replace(/\-}/g, " ")
          .replace(/value/g, "")
          .toUpperCase()}`;
        return ` 
         {
            "name": "${token.name}",
            "value": "${token.value}",
            "comment": "${token.comment}",
                "themeable": "${token.themeable}",
            "original": "${original}"
          }`;
      })
      .join(`,`) +
    `],
    }
}`
  );
};