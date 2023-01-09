module.exports = function (dictionary, options) {
  return (
    `{ "color" : {
      "global" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `color` &&
            token.attributes.type === `orange`) ||
          token.attributes.type === `gold` ||
          token.attributes.type === `yellow` ||
          token.attributes.type === `green` ||
          token.attributes.type === `red` ||
          token.attributes.type === `teal` ||
          token.attributes.type === `gray` ||
          token.attributes.type === `white` ||
          token.attributes.type === `black`
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
      "brand" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `brand` &&
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
      "border" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `border`
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
      "background" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.deprecated !== true &&
            token.attributes.category === `color` &&
            token.attributes.type === `background`) ||
          (token.attributes.category === `backdrop` &&
            token.attributes.type === `color`) ||
          (token.attributes.category === `header` &&
            token.attributes.type === `color`) ||
          (token.attributes.category === `footer` &&
            token.attributes.type === `color`) ||
          (token.attributes.category === `scrollbar` &&
            token.attributes.type === `color`)
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
      "action" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.deprecated !== true &&
            token.attributes.category === `color` &&
            token.attributes.type === `action`) ||
          (token.attributes.category === `link` && token.deprecated !== true)
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
      "feedback" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `feedback`
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
      "form" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `forms` &&
          token.attributes.type === `color` &&
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
      "visualization" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `visualization`
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
      "button" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `button` &&
          token.attributes.type === `color` &&
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
    "body" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `body` &&
          token.attributes.type === `color`
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
      "connect" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `connect` &&
          token.attributes.type === `color`
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
      "text" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `color` &&
          token.attributes.type === `text`
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
    `]
  },
   "font" : {
    "size" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `font` &&
          token.attributes.type === `size`
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
    "weight" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `font` &&
          token.attributes.type === `weight`
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
      "family" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `font` &&
          token.attributes.type === `family`
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
      "headings" : {
        "one" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `01`)
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
    "two" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `02`)
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
    "three" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `03`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `03`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `03`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `03`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `03`)
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
    "four" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `04`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `04`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `04`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `04`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `04`)
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
    "five" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `05`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `05`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `05`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `05`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `05`)
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
    "six" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `06`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `06`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `06`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `06`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `level` &&
            token.attributes.state === `06`)
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
    `]
      },
      "display" : {
        "one" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `01`)
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
    "two" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `02`)
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
    "three" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `03`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `03`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `03`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `03`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `display` &&
            token.attributes.state === `03`)
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
    `]
      },
      "eyebrow" : {
        "one" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `eyebrow` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `eyebrow` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `eyebrow` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `eyebrow` &&
            token.attributes.state === `01`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `eyebrow` &&
            token.attributes.state === `01`)
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
    "two" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `size` &&
            token.attributes.subitem === `eyebrow` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `family` &&
            token.attributes.subitem === `eyebrow` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `weight` &&
            token.attributes.subitem === `eyebrow` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `line-height` &&
            token.attributes.subitem === `eyebrow` &&
            token.attributes.state === `02`) ||
          (token.attributes.category === `font` &&
            token.attributes.type === `heading` &&
            token.attributes.item === `letter.spacing` &&
            token.attributes.subitem === `eyebrow` &&
            token.attributes.state === `02`)
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
    `]
      },
    "body" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `font` &&
          token.attributes.type === `body` &&
          token.attributes.item != `color`
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
      "lineHeight" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `line` &&
          token.attributes.type === `height`
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
      "letterSpacing" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `letter` &&
          token.attributes.type === `spacing`
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
    `]
    },
    "size" : {
      "space" : [\n` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `space`)
      .map((token) => {
        return ` 
              {
                "name": "${token.name}",
                "value": "${token.value}",
                "comment": "${token.comment}",
                "themeable": "${token.themeable}",
                "original": "${token.original.value}"
              }`;
      })
      .join(`,`) +
    `],
    "grid" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.deprecated !== true && token.attributes.category === `grid`
      )
      .map((token) => {
        return ` 
              {
                "name": "${token.name}",
                "value": "${token.value}",
                "comment": "${token.comment}",
                "themeable": "${token.themeable}",
                "original": "${token.original.value}"
              }`;
      })
      .join(`,`) +
    `],
    "size" : [\n` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `size`)
      .map((token) => {
        return ` 
              {
                "name": "${token.name}",
                "value": "${token.value}",
                "comment": "${token.comment}",
                "themeable": "${token.themeable}",
                "original": "${token.original.value}"
              }`;
      })
      .join(`,`) +
    `],
        "shadow" : [\n` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `shadow`)
      .map((token) => {
        return ` 
              {
                "name": "${token.name}",
                "value": "${token.value}",
                "comment": "${token.comment}",
                "themeable": "${token.themeable}",
                "original": "${token.original.value}"
              }`;
      })
      .join(`,`) +
    `],
      "zindex" : [\n` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `z-index`)
      .map((token) => {
        return ` 
            {
              "name": "${token.name}",
              "value": "${token.value}",
              "comment": "${token.comment}",
                "themeable": "${token.themeable}",
              "original": "${token.original.value}"
            }`;
      })
      .join(`,`) +
    `],
    "opacity" : [\n` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `opacity`)
      .map((token) => {
        return ` 
            {
              "name": "${token.name}",
              "value": "${token.value}",
              "comment": "${token.comment}",
                "themeable": "${token.themeable}",
              "original": "${token.original.value}"
            }`;
      })
      .join(`,`) +
    `],
        "borderRadius" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          (token.attributes.category === `border` &&
            token.attributes.type === `radius`) ||
          (token.attributes.category === `button` &&
            token.attributes.type === `border-radius`) ||
          (token.attributes.category === `pill` &&
            token.attributes.type === `border-radius`)
      )
      .map((token) => {
        return ` 
              {
                "name": "${token.name}",
                "value": "${token.value}",
                "comment": "${token.comment}",
                "themeable": "${token.themeable}",
                "original": "${token.original.value}"
              }`;
      })
      .join(`,`) +
    `],
    "time" : [\n` +
    dictionary.allProperties
      .filter((token) => token.attributes.category === `time`)
      .map((token) => {
        return ` 
          {
            "name": "${token.name}",
            "value": "${token.value}",
            "comment": "${token.comment}",
                "themeable": "${token.themeable}",
            "original": "${token.original.value}"
          }`;
      })
      .join(`,`) +
    `],
    "deprecated" : [\n` +
    dictionary.allProperties
      .filter((token) => token.deprecated === true)
      .map((token) => {
        const newValue = `var(--${token.deprecated_comment})`;
        return ` 
     {
        "old": "${token.name}",
        "oldValue": "${token.value}",
        "new": "${token.deprecated_comment}",
        "newValue": "${newValue}"
      }`;
      })
      .join(`,`) +
    `],
    "themeable" : [\n` +
    dictionary.allProperties
      .filter((token) => token.themeable === `Yes` && token.deprecated !== true)
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
    `]
        }
  }`
  );
};
