import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.regexp.exec.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { Fragment, useState } from 'react';
import { styled } from '@storybook/theming';
import { Icons } from '@storybook/components';
import { Info } from './Info';
import { Elements } from './Elements';
import { Tags } from './Tags';
import HighlightToggle from './HighlightToggle';
var Wrapper = styled.div(function (_ref) {
  var theme = _ref.theme;
  return {
    display: 'flex',
    width: '100%',
    borderBottom: "1px solid ".concat(theme.appBorderColor),
    '&:hover': {
      background: theme.background.hoverable
    }
  };
});
var Icon = styled(Icons)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    height: 10,
    width: 10,
    minWidth: 10,
    color: theme.color.mediumdark,
    marginRight: 10,
    transition: 'transform 0.1s ease-in-out',
    alignSelf: 'center',
    display: 'inline-flex'
  };
});
var HeaderBar = styled.div(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.layoutMargin,
    paddingLeft: theme.layoutMargin - 3,
    lineHeight: '20px',
    background: 'none',
    color: 'inherit',
    textAlign: 'left',
    cursor: 'pointer',
    borderLeft: '3px solid transparent',
    width: '100%',
    '&:focus': {
      outline: '0 none',
      borderLeft: "3px solid ".concat(theme.color.secondary)
    }
  };
});
var HighlightToggleElement = styled.span({
  fontWeight: 'normal',
  float: 'right',
  marginRight: 15,
  alignSelf: 'center',
  input: {
    margin: 0,
    display: 'block'
  }
});
// export class Item extends Component<ItemProps, ItemState> {
export var Item = function Item(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      onToggle = _useState2[1];

  var item = props.item,
      type = props.type;
  var highlightToggleId = "".concat(type, "-").concat(item.id);
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(HeaderBar, {
    onClick: function onClick() {
      return onToggle(!open);
    },
    role: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "chevrondown",
    size: 10,
    color: "#9DA5AB",
    style: {
      transform: "rotate(".concat(open ? 0 : -90, "deg)")
    }
  }), item.help), /*#__PURE__*/React.createElement(HighlightToggleElement, null, /*#__PURE__*/React.createElement(HighlightToggle, {
    toggleId: highlightToggleId,
    elementsToHighlight: item.nodes
  }))), open ? /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Info, {
    item: item,
    key: "info"
  }), /*#__PURE__*/React.createElement(Elements, {
    elements: item.nodes,
    type: type,
    key: "elements"
  }), /*#__PURE__*/React.createElement(Tags, {
    tags: item.tags,
    key: "tags"
  })) : null);
};