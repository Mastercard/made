"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PARAM_KEY = exports.PANEL_ID = exports.HIGHLIGHT_STYLE_ID = exports.EVENTS = exports.ADDON_ID = void 0;
var ADDON_ID = 'storybook/a11y';
exports.ADDON_ID = ADDON_ID;
var PANEL_ID = "".concat(ADDON_ID, "/panel");
exports.PANEL_ID = PANEL_ID;
var PARAM_KEY = "a11y";
exports.PARAM_KEY = PARAM_KEY;
var HIGHLIGHT_STYLE_ID = 'a11yHighlight';
exports.HIGHLIGHT_STYLE_ID = HIGHLIGHT_STYLE_ID;
var RESULT = "".concat(ADDON_ID, "/result");
var REQUEST = "".concat(ADDON_ID, "/request");
var RUNNING = "".concat(ADDON_ID, "/running");
var ERROR = "".concat(ADDON_ID, "/error");
var MANUAL = "".concat(ADDON_ID, "/manual");
var HIGHLIGHT = "".concat(ADDON_ID, "/highlight");
var EVENTS = {
  RESULT: RESULT,
  REQUEST: REQUEST,
  RUNNING: RUNNING,
  ERROR: ERROR,
  MANUAL: MANUAL,
  HIGHLIGHT: HIGHLIGHT
};
exports.EVENTS = EVENTS;