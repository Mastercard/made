"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.freeze.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.keys.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  withA11y: true,
  PARAM_KEY: true
};
Object.defineProperty(exports, "PARAM_KEY", {
  enumerable: true,
  get: function get() {
    return _constants.PARAM_KEY;
  }
});
exports.withA11y = void 0;

var _utilDeprecate = _interopRequireDefault(require("util-deprecate"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

var _constants = require("./constants");

var _highlight = require("./highlight");

Object.keys(_highlight).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _highlight[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _highlight[key];
    }
  });
});

var _params = require("./params");

Object.keys(_params).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _params[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _params[key];
    }
  });
});

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

var withA11y = (0, _utilDeprecate.default)(function (storyFn, storyContext) {
  return storyFn(storyContext);
}, (0, _tsDedent.default)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    withA11y(options) is deprecated, please configure addon-a11y using the addParameter api:\n\n    addParameters({\n      a11y: options,\n    });\n\n    More at: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#removed-witha11y-decorator\n  "]))));
exports.withA11y = withA11y;