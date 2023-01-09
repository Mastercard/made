"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuleType = exports.A11YPanel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _theming = require("@storybook/theming");

var _components = require("@storybook/components");

var _api = require("@storybook/api");

var _Report = require("./Report");

var _Tabs = require("./Tabs");

var _A11yContext = require("./A11yContext");

var _constants = require("../constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RuleType;
exports.RuleType = RuleType;

(function (RuleType) {
  RuleType[RuleType["VIOLATION"] = 0] = "VIOLATION";
  RuleType[RuleType["PASS"] = 1] = "PASS";
  RuleType[RuleType["INCOMPLETION"] = 2] = "INCOMPLETION";
})(RuleType || (exports.RuleType = RuleType = {}));

var Icon = (0, _theming.styled)(_components.Icons)({
  height: 12,
  width: 12,
  marginRight: 4
});
var RotatingIcon = (0, _theming.styled)(Icon)(function (_ref) {
  var theme = _ref.theme;
  return {
    animation: "".concat(theme.animation.rotate360, " 1s linear infinite;")
  };
});

var Passes = _theming.styled.span(function (_ref2) {
  var theme = _ref2.theme;
  return {
    color: theme.color.positive
  };
});

var Violations = _theming.styled.span(function (_ref3) {
  var theme = _ref3.theme;
  return {
    color: theme.color.negative
  };
});

var Incomplete = _theming.styled.span(function (_ref4) {
  var theme = _ref4.theme;
  return {
    color: theme.color.warning
  };
});

var Centered = _theming.styled.span({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
});

var A11YPanel = function A11YPanel() {
  var _useChannel;

  var _useParameter = (0, _api.useParameter)('a11y', {
    manual: false
  }),
      manual = _useParameter.manual;

  var _useState = (0, _react.useState)(manual ? 'manual' : 'initial'),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _React$useState = _react.default.useState(undefined),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      error = _React$useState2[0],
      setError = _React$useState2[1];

  var _useA11yContext = (0, _A11yContext.useA11yContext)(),
      setResults = _useA11yContext.setResults,
      results = _useA11yContext.results;

  var _useStorybookState = (0, _api.useStorybookState)(),
      storyId = _useStorybookState.storyId;

  _react.default.useEffect(function () {
    setStatus(manual ? 'manual' : 'initial');
  }, [manual]);

  var handleResult = function handleResult(axeResults) {
    setStatus('ran');
    setResults(axeResults);
    setTimeout(function () {
      if (status === 'ran') {
        setStatus('ready');
      }
    }, 900);
  };

  var handleRun = (0, _react.useCallback)(function () {
    setStatus('running');
  }, []);
  var handleError = (0, _react.useCallback)(function (err) {
    setStatus('error');
    setError(err);
  }, []);
  var emit = (0, _api.useChannel)((_useChannel = {}, _defineProperty(_useChannel, _constants.EVENTS.RUNNING, handleRun), _defineProperty(_useChannel, _constants.EVENTS.RESULT, handleResult), _defineProperty(_useChannel, _constants.EVENTS.ERROR, handleError), _useChannel));
  var handleManual = (0, _react.useCallback)(function () {
    setStatus('running');
    emit(_constants.EVENTS.MANUAL, storyId);
  }, [storyId]);
  var manualActionItems = (0, _react.useMemo)(function () {
    return [{
      title: 'Run test',
      onClick: handleManual
    }];
  }, [handleManual]);
  var readyActionItems = (0, _react.useMemo)(function () {
    return [{
      title: status === 'ready' ? 'Rerun tests' : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Icon, {
        inline: true,
        icon: "check"
      }), " Tests completed"),
      onClick: handleManual
    }];
  }, [status, handleManual]);
  var tabs = (0, _react.useMemo)(function () {
    var passes = results.passes,
        incomplete = results.incomplete,
        violations = results.violations;
    return [{
      label: /*#__PURE__*/_react.default.createElement(Violations, null, violations.length, " Violations"),
      panel: /*#__PURE__*/_react.default.createElement(_Report.Report, {
        items: violations,
        type: RuleType.VIOLATION,
        empty: "No accessibility violations found."
      }),
      items: violations,
      type: RuleType.VIOLATION
    }, {
      label: /*#__PURE__*/_react.default.createElement(Passes, null, passes.length, " Passes"),
      panel: /*#__PURE__*/_react.default.createElement(_Report.Report, {
        items: passes,
        type: RuleType.PASS,
        empty: "No accessibility checks passed."
      }),
      items: passes,
      type: RuleType.PASS
    }, {
      label: /*#__PURE__*/_react.default.createElement(Incomplete, null, incomplete.length, " Incomplete"),
      panel: /*#__PURE__*/_react.default.createElement(_Report.Report, {
        items: incomplete,
        type: RuleType.INCOMPLETION,
        empty: "No accessibility checks incomplete."
      }),
      items: incomplete,
      type: RuleType.INCOMPLETION
    }];
  }, [results]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, status === 'initial' && /*#__PURE__*/_react.default.createElement(Centered, null, "Initializing..."), status === 'manual' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Centered, null, "Manually run the accessibility scan."), /*#__PURE__*/_react.default.createElement(_components.ActionBar, {
    key: "actionbar",
    actionItems: manualActionItems
  })), status === 'running' && /*#__PURE__*/_react.default.createElement(Centered, null, /*#__PURE__*/_react.default.createElement(RotatingIcon, {
    inline: true,
    icon: "sync"
  }), " Please wait while the accessibility scan is running ..."), (status === 'ready' || status === 'ran') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.ScrollArea, {
    vertical: true,
    horizontal: true
  }, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    key: "tabs",
    tabs: tabs
  })), /*#__PURE__*/_react.default.createElement(_components.ActionBar, {
    key: "actionbar",
    actionItems: readyActionItems
  })), status === 'error' && /*#__PURE__*/_react.default.createElement(Centered, null, "The accessibility scan encountered an error.", /*#__PURE__*/_react.default.createElement("br", null), typeof error === 'string' ? error : JSON.stringify(error)));
};

exports.A11YPanel = A11YPanel;