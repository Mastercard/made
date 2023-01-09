"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useA11yContext = exports.A11yContextProvider = exports.A11yContext = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var React = _interopRequireWildcard(require("react"));

var _theming = require("@storybook/theming");

var _api = require("@storybook/api");

var _coreEvents = require("@storybook/core-events");

var _constants = require("../constants");

var _excluded = ["active"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorsByType = [(0, _theming.convert)(_theming.themes.light).color.negative, // VIOLATION,
(0, _theming.convert)(_theming.themes.light).color.positive, // PASS,
(0, _theming.convert)(_theming.themes.light).color.warning // INCOMPLETION,
];
var A11yContext = /*#__PURE__*/React.createContext({
  results: {
    passes: [],
    incomplete: [],
    violations: []
  },
  setResults: function setResults() {},
  highlighted: [],
  toggleHighlight: function toggleHighlight() {},
  clearHighlights: function clearHighlights() {},
  tab: 0,
  setTab: function setTab() {}
});
exports.A11yContext = A11yContext;
var defaultResult = {
  passes: [],
  incomplete: [],
  violations: []
};

var A11yContextProvider = function A11yContextProvider(_ref) {
  var _useChannel;

  var active = _ref.active,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useAddonState = (0, _api.useAddonState)(_constants.ADDON_ID, defaultResult),
      _useAddonState2 = _slicedToArray(_useAddonState, 2),
      results = _useAddonState2[0],
      setResults = _useAddonState2[1];

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      tab = _React$useState2[0],
      setTab = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      highlighted = _React$useState4[0],
      setHighlighted = _React$useState4[1];

  var _useStorybookState = (0, _api.useStorybookState)(),
      storyId = _useStorybookState.storyId;

  var handleToggleHighlight = React.useCallback(function (target, highlight) {
    setHighlighted(function (prevHighlighted) {
      return highlight ? [].concat(_toConsumableArray(prevHighlighted), _toConsumableArray(target)) : prevHighlighted.filter(function (t) {
        return !target.includes(t);
      });
    });
  }, []);

  var handleRun = function handleRun(renderedStoryId) {
    emit(_constants.EVENTS.REQUEST, renderedStoryId);
  };

  var handleClearHighlights = React.useCallback(function () {
    return setHighlighted([]);
  }, []);
  var handleSetTab = React.useCallback(function (index) {
    handleClearHighlights();
    setTab(index);
  }, []);
  var handleReset = React.useCallback(function () {
    setTab(0);
    setResults(defaultResult); // Highlights is cleared by a11yHighlights.ts
  }, []);
  var emit = (0, _api.useChannel)((_useChannel = {}, _defineProperty(_useChannel, _coreEvents.STORY_RENDERED, handleRun), _defineProperty(_useChannel, _coreEvents.STORY_CHANGED, handleReset), _useChannel));
  React.useEffect(function () {
    emit(_constants.EVENTS.HIGHLIGHT, {
      elements: highlighted,
      color: colorsByType[tab]
    });
  }, [highlighted, tab]);
  React.useEffect(function () {
    if (active) {
      handleRun(storyId);
    } else {
      handleClearHighlights();
    }
  }, [active, handleClearHighlights, emit, storyId]);
  if (!active) return null;
  return /*#__PURE__*/React.createElement(A11yContext.Provider, _extends({
    value: {
      results: results,
      setResults: setResults,
      highlighted: highlighted,
      toggleHighlight: handleToggleHighlight,
      clearHighlights: handleClearHighlights,
      tab: tab,
      setTab: handleSetTab
    }
  }, props));
};

exports.A11yContextProvider = A11yContextProvider;

var useA11yContext = function useA11yContext() {
  return React.useContext(A11yContext);
};

exports.useA11yContext = useA11yContext;