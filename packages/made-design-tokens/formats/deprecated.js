module.exports = function (dictionary, options) {
  return dictionary.allProperties
    .filter((token) => token.deprecated === true)
    .map((token) => {
      const original = `${token.original.value
        .replace(/\./g, "-")
        .replace(/\{/g, "")
        .replace(/\}/g, "")
        .replace(/\-}/g, " ")
        .replace(/value/g, "")}`;
        console.log(original)
      return `${original}`;
    });
};
