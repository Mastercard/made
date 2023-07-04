const fs = require("fs");

let tokensObj = {};
let figmaTokens;

//read json object from file. this is the json file from the figma plugin
fs.readFile(
  "figma/figma-tokens/figma-plugin-tokens-v2.2.0.json",
  "utf-8",
  (err, data) => {
    if (err) {
      throw err;
    }

    //append .value to any alias tokens to make compatible with style dictionary
    //replace 'description' with 'comment' to make compatible with style dictionary
    //remove --StyleDictionary-- from fonts description, this is in the description for figma plugin users so they know to ignore these font styles
    //replace letter-spacing with letter.spacing, figma plugin doesn't like period character in key names so need to insert it for the style dictionary build
    figmaTokens = data
      .replace(/"value":"{(.*)}"/g, '"value":"{$1.value}"')
      .replace(/"value": "{(.*)}"/g, '"value":"{$1.value}"')
      .replace(/"original":"{(.*)}"/g, '"original":"{$1.value}"')
      .replace(/"description"/g, '"comment"')
      .replace(/--StyleDictionary-- /g, "")
      .replace(/"letter-spacing"/g, '"letter.spacing"');

    tokensObj = JSON.parse(figmaTokens.toString());

    Object.entries(tokensObj).forEach(([setName, setValues]) => {
      //loop over top level json keys
      if (setName !== "$metadata" && setName !== "$themes") {
        //skip the $metadata and $themes keys that are needed only for the figma plugin
        const path = `src-figma/2.2.0/${setName}`;
        if (path.split("/").length > 2) {
          //if path of files to be created is not the current directory of script, make the directory path, if doesn't already exist
          path
            .split("/")
            .slice(0)
            .reduce(
              //split the path up into an array, each directory name is an array element
              (directories, directory) => {
                //next loop over each element in the array and create a directory using name of last element
                directories += `${directory}/`;

                if (!fs.existsSync(directories)) {
                  //if directory path doesn't already exist then create it, if already exists then skip ahead and make the json files under the directory
                  fs.mkdirSync(directories);
                }

                return directories;
              },
              ""
            );
        }

        for (let key in setValues) {
          //loop over second level keys
          let tokenJson = { [key]: setValues[key] }; //create an object containing json of each second level key

          if ([key] == 'line') { //if line height key then need to convert value from percent to decimal, as percent only used in figma tokens
            for (let multiplier in setValues[key]['height']) {
              setValues[key]['height'][ multiplier]['value'] = `${""+ parseFloat(setValues[key]['height'][ multiplier]['value']) / 100 + ""}`;
            }
          }

          if ([key] == 'letter') { //if line height key then need to convert value from percent to decimal, as percent only used in figma tokens
            setValues[key]['spacing']['default']['value'] = 'normal';
            setValues[key]['spacing']['eyebrow']['value'] = `${""+ setValues[key]['spacing']['eyebrow']['value'] + "px"}`;
          }

          fs.writeFile(
            `${path}/${key}.json`, //use the current second level key as the name of the json file
            JSON.stringify(tokenJson, null, 2),
            (err) => {
              if (err) {
                throw err;
              }
            }
          );
        }
      }
    });
  }
);
