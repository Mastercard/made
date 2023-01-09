import "core-js/modules/es.array.from.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.set.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.join.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.concat.js";
import global from 'global';
import { addons } from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';
import { EVENTS, HIGHLIGHT_STYLE_ID } from './constants';
import { highlightStyle } from './highlight';
var document = global.document;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

var channel = addons.getChannel();

var highlight = function highlight(infos) {
  var id = HIGHLIGHT_STYLE_ID;
  resetHighlight(); // Make sure there are no duplicated selectors

  var elements = Array.from(new Set(infos.elements));
  var sheet = document.createElement('style');
  sheet.setAttribute('id', id);
  sheet.innerHTML = elements.map(function (target) {
    return "".concat(target, "{\n          ").concat(highlightStyle(infos.color), "\n         }");
  }).join(' ');
  document.head.appendChild(sheet);
};

var resetHighlight = function resetHighlight() {
  var id = HIGHLIGHT_STYLE_ID;
  var sheetToBeRemoved = document.getElementById(id);

  if (sheetToBeRemoved) {
    sheetToBeRemoved.parentNode.removeChild(sheetToBeRemoved);
  }
};

channel.on(STORY_CHANGED, resetHighlight);
channel.on(EVENTS.HIGHLIGHT, highlight);