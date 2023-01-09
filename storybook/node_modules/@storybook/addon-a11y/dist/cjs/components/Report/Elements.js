"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.regexp.exec.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Elements = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.map.js");

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

var _Rules = require("./Rules");

var _HighlightToggle = _interopRequireDefault(require("./HighlightToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Item = _theming.styled.li({
  fontWeight: 600
});

var ItemTitle = _theming.styled.span(function (_ref) {
  var theme = _ref.theme;
  return {
    borderBottom: "1px solid ".concat(theme.appBorderColor),
    width: '100%',
    display: 'flex',
    paddingBottom: 6,
    marginBottom: 6,
    justifyContent: 'space-between'
  };
});

var HighlightToggleElement = _theming.styled.span({
  fontWeight: 'normal',
  alignSelf: 'center',
  paddingRight: 15,
  input: {
    margin: 0,
    display: 'block'
  }
});

var Element = function Element(_ref2) {
  var element = _ref2.element,
      type = _ref2.type;
  var any = element.any,
      all = element.all,
      none = element.none;
  var rules = [].concat(_toConsumableArray(any), _toConsumableArray(all), _toConsumableArray(none));
  var highlightToggleId = "".concat(type, "-").concat(element.target[0]);
  return /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(ItemTitle, null, element.target[0], /*#__PURE__*/_react.default.createElement(HighlightToggleElement, null, /*#__PURE__*/_react.default.createElement(_HighlightToggle.default, {
    toggleId: highlightToggleId,
    elementsToHighlight: [element]
  }))), /*#__PURE__*/_react.default.createElement(_Rules.Rules, {
    rules: rules
  }));
};

var Elements = function Elements(_ref3) {
  var elements = _ref3.elements,
      type = _ref3.type;
  return /*#__PURE__*/_react.default.createElement("ol", null, elements.map(function (element, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react.default.createElement(Element, {
        element: element,
        key: index,
        type: type
      })
    );
  }));
};

exports.Elements = Elements;