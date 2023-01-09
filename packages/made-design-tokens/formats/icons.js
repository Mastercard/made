module.exports = function (dictionary, options) {
  return (
    `{ "icon" : {
          "business": [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `asset` &&
          token.attributes.type === `icon` &&
          token.attributes.item === `mastercard` &&
          token.attributes.subitem === `business-tech-transactions`
      )
      .map((token) => {
        return ` 
     {
        "name": "${token.attributes.state}",
        "value": "${token.original.value}"
      }`;
      })
      .join(`,`) +
    `],
  "people" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `asset` &&
          token.attributes.type === `icon` &&
          token.attributes.item === `mastercard` &&
          token.attributes.subitem === `people-places`
      )
      .map((token) => {
        return ` 
     {
        "name": "${token.attributes.state}",
        "value": "${token.original.value}"
      }`;
      })
      .join(`,`) +
    `],
    "things" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `asset` &&
          token.attributes.type === `icon` &&
          token.attributes.item === `mastercard` &&
          token.attributes.subitem === `things`
      )
      .map((token) => {
        return ` 
     {
        "name": "${token.attributes.state}",
        "value": "${token.original.value}"
      }`;
      })
      .join(`,`) +
    `],
    "ui" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `asset` &&
          token.attributes.type === `icon` &&
          token.attributes.item === `mastercard` &&
          token.attributes.subitem === `ui`
      )
      .map((token) => {
        return ` 
     {
        "name": "${token.attributes.state}",
        "value": "${token.original.value}"
      }`;
      })
      .join(`,`) +
    `],
    "custom" : [\n` +
    dictionary.allProperties
      .filter(
        (token) =>
          token.attributes.category === `asset` &&
          token.attributes.type === `icon` &&
          token.attributes.item === `custom` 
      )
      .map((token) => {
        return ` 
     {
        "name": "${token.attributes.subitem}",
        "value": "${token.original.value}"
      }`;
      })
      .join(`,`) +
    `]
  }
}`
  );
};
