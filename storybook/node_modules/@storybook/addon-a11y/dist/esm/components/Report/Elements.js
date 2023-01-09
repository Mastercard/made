import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.regexp.exec.js";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from 'react';
import { styled } from '@storybook/theming';
import { Rules } from './Rules';
import HighlightToggle from './HighlightToggle';
var Item = styled.li({
  fontWeight: 600
});
var ItemTitle = styled.span(function (_ref) {
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
var HighlightToggleElement = styled.span({
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
  return /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(ItemTitle, null, element.target[0], /*#__PURE__*/React.createElement(HighlightToggleElement, null, /*#__PURE__*/React.createElement(HighlightToggle, {
    toggleId: highlightToggleId,
    elementsToHighlight: [element]
  }))), /*#__PURE__*/React.createElement(Rules, {
    rules: rules
  }));
};

export var Elements = function Elements(_ref3) {
  var elements = _ref3.elements,
      type = _ref3.type;
  return /*#__PURE__*/React.createElement("ol", null, elements.map(function (element, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement(Element, {
        element: element,
        key: index,
        type: type
      })
    );
  }));
};