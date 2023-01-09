"use strict";

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.set.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.array.concat.js");

var _global = _interopRequireDefault(require("global"));

var _addons = require("@storybook/addons");

var _coreEvents = require("@storybook/core-events");

var _constants = require("./constants");

var _highlight = require("./highlight");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var document = _global.default.document;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

var channel = _addons.addons.getChannel();

var highlight = function highlight(infos) {
  var id = _constants.HIGHLIGHT_STYLE_ID;
  resetHighlight(); // Make sure there are no duplicated selectors

  var elements = Array.from(new Set(infos.elements));
  var sheet = document.createElement('style');
  sheet.setAttribute('id', id);
  sheet.innerHTML = elements.map(function (target) {
    return "".concat(target, "{\n          ").concat((0, _highlight.highlightStyle)(infos.color), "\n         }");
  }).join(' ');
  document.head.appendChild(sheet);
};

var resetHighlight = function resetHighlight() {
  var id = _constants.HIGHLIGHT_STYLE_ID;
  var sheetToBeRemoved = document.getElementById(id);

  if (sheetToBeRemoved) {
    sheetToBeRemoved.parentNode.removeChild(sheetToBeRemoved);
  }
};

channel.on(_coreEvents.STORY_CHANGED, resetHighlight);
channel.on(_constants.EVENTS.HIGHLIGHT, highlight);