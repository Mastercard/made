function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.string.includes.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.regexp.exec.js";
import React from 'react';
import { styled } from '@storybook/theming';
import { useA11yContext } from '../A11yContext';
var CheckBoxStates;

(function (CheckBoxStates) {
  CheckBoxStates[CheckBoxStates["CHECKED"] = 0] = "CHECKED";
  CheckBoxStates[CheckBoxStates["UNCHECKED"] = 1] = "UNCHECKED";
  CheckBoxStates[CheckBoxStates["INDETERMINATE"] = 2] = "INDETERMINATE";
})(CheckBoxStates || (CheckBoxStates = {}));

var Checkbox = styled.input(function (_ref) {
  var disabled = _ref.disabled;
  return {
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
});

function areAllRequiredElementsHighlighted(elementsToHighlight, highlighted) {
  var highlightedCount = elementsToHighlight.filter(function (item) {
    return highlighted.includes(item.target[0]);
  }).length; // eslint-disable-next-line no-nested-ternary

  return highlightedCount === 0 ? CheckBoxStates.UNCHECKED : highlightedCount === elementsToHighlight.length ? CheckBoxStates.CHECKED : CheckBoxStates.INDETERMINATE;
}

var HighlightToggle = function HighlightToggle(_ref2) {
  var toggleId = _ref2.toggleId,
      _ref2$elementsToHighl = _ref2.elementsToHighlight,
      elementsToHighlight = _ref2$elementsToHighl === void 0 ? [] : _ref2$elementsToHighl;

  var _useA11yContext = useA11yContext(),
      toggleHighlight = _useA11yContext.toggleHighlight,
      highlighted = _useA11yContext.highlighted;

  var checkBoxRef = React.useRef(null);

  var _React$useState = React.useState(areAllRequiredElementsHighlighted(elementsToHighlight, highlighted)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checkBoxState = _React$useState2[0],
      setChecked = _React$useState2[1];

  React.useEffect(function () {
    var newState = areAllRequiredElementsHighlighted(elementsToHighlight, highlighted);

    if (checkBoxRef.current) {
      checkBoxRef.current.indeterminate = newState === CheckBoxStates.INDETERMINATE;
    }

    setChecked(newState);
  }, [elementsToHighlight, highlighted]);
  var handleToggle = React.useCallback(function () {
    toggleHighlight(elementsToHighlight.map(function (e) {
      return e.target[0];
    }), checkBoxState !== CheckBoxStates.CHECKED);
  }, [elementsToHighlight, checkBoxState, toggleHighlight]);
  return /*#__PURE__*/React.createElement(Checkbox, {
    ref: checkBoxRef,
    id: toggleId,
    type: "checkbox",
    "aria-label": "Highlight result",
    disabled: !elementsToHighlight.length,
    onChange: handleToggle,
    checked: checkBoxState === CheckBoxStates.CHECKED
  });
};

export default HighlightToggle;