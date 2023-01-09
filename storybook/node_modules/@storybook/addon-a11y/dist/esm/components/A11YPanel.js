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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useCallback, useMemo, useState } from 'react';
import { styled } from '@storybook/theming';
import { ActionBar, Icons, ScrollArea } from '@storybook/components';
import { useChannel, useParameter, useStorybookState } from '@storybook/api';
import { Report } from './Report';
import { Tabs } from './Tabs';
import { useA11yContext } from './A11yContext';
import { EVENTS } from '../constants';
export var RuleType;

(function (RuleType) {
  RuleType[RuleType["VIOLATION"] = 0] = "VIOLATION";
  RuleType[RuleType["PASS"] = 1] = "PASS";
  RuleType[RuleType["INCOMPLETION"] = 2] = "INCOMPLETION";
})(RuleType || (RuleType = {}));

var Icon = styled(Icons)({
  height: 12,
  width: 12,
  marginRight: 4
});
var RotatingIcon = styled(Icon)(function (_ref) {
  var theme = _ref.theme;
  return {
    animation: "".concat(theme.animation.rotate360, " 1s linear infinite;")
  };
});
var Passes = styled.span(function (_ref2) {
  var theme = _ref2.theme;
  return {
    color: theme.color.positive
  };
});
var Violations = styled.span(function (_ref3) {
  var theme = _ref3.theme;
  return {
    color: theme.color.negative
  };
});
var Incomplete = styled.span(function (_ref4) {
  var theme = _ref4.theme;
  return {
    color: theme.color.warning
  };
});
var Centered = styled.span({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
});
export var A11YPanel = function A11YPanel() {
  var _useChannel;

  var _useParameter = useParameter('a11y', {
    manual: false
  }),
      manual = _useParameter.manual;

  var _useState = useState(manual ? 'manual' : 'initial'),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _React$useState = React.useState(undefined),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      error = _React$useState2[0],
      setError = _React$useState2[1];

  var _useA11yContext = useA11yContext(),
      setResults = _useA11yContext.setResults,
      results = _useA11yContext.results;

  var _useStorybookState = useStorybookState(),
      storyId = _useStorybookState.storyId;

  React.useEffect(function () {
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

  var handleRun = useCallback(function () {
    setStatus('running');
  }, []);
  var handleError = useCallback(function (err) {
    setStatus('error');
    setError(err);
  }, []);
  var emit = useChannel((_useChannel = {}, _defineProperty(_useChannel, EVENTS.RUNNING, handleRun), _defineProperty(_useChannel, EVENTS.RESULT, handleResult), _defineProperty(_useChannel, EVENTS.ERROR, handleError), _useChannel));
  var handleManual = useCallback(function () {
    setStatus('running');
    emit(EVENTS.MANUAL, storyId);
  }, [storyId]);
  var manualActionItems = useMemo(function () {
    return [{
      title: 'Run test',
      onClick: handleManual
    }];
  }, [handleManual]);
  var readyActionItems = useMemo(function () {
    return [{
      title: status === 'ready' ? 'Rerun tests' : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
        inline: true,
        icon: "check"
      }), " Tests completed"),
      onClick: handleManual
    }];
  }, [status, handleManual]);
  var tabs = useMemo(function () {
    var passes = results.passes,
        incomplete = results.incomplete,
        violations = results.violations;
    return [{
      label: /*#__PURE__*/React.createElement(Violations, null, violations.length, " Violations"),
      panel: /*#__PURE__*/React.createElement(Report, {
        items: violations,
        type: RuleType.VIOLATION,
        empty: "No accessibility violations found."
      }),
      items: violations,
      type: RuleType.VIOLATION
    }, {
      label: /*#__PURE__*/React.createElement(Passes, null, passes.length, " Passes"),
      panel: /*#__PURE__*/React.createElement(Report, {
        items: passes,
        type: RuleType.PASS,
        empty: "No accessibility checks passed."
      }),
      items: passes,
      type: RuleType.PASS
    }, {
      label: /*#__PURE__*/React.createElement(Incomplete, null, incomplete.length, " Incomplete"),
      panel: /*#__PURE__*/React.createElement(Report, {
        items: incomplete,
        type: RuleType.INCOMPLETION,
        empty: "No accessibility checks incomplete."
      }),
      items: incomplete,
      type: RuleType.INCOMPLETION
    }];
  }, [results]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, status === 'initial' && /*#__PURE__*/React.createElement(Centered, null, "Initializing..."), status === 'manual' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Centered, null, "Manually run the accessibility scan."), /*#__PURE__*/React.createElement(ActionBar, {
    key: "actionbar",
    actionItems: manualActionItems
  })), status === 'running' && /*#__PURE__*/React.createElement(Centered, null, /*#__PURE__*/React.createElement(RotatingIcon, {
    inline: true,
    icon: "sync"
  }), " Please wait while the accessibility scan is running ..."), (status === 'ready' || status === 'ran') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScrollArea, {
    vertical: true,
    horizontal: true
  }, /*#__PURE__*/React.createElement(Tabs, {
    key: "tabs",
    tabs: tabs
  })), /*#__PURE__*/React.createElement(ActionBar, {
    key: "actionbar",
    actionItems: readyActionItems
  })), status === 'error' && /*#__PURE__*/React.createElement(Centered, null, "The accessibility scan encountered an error.", /*#__PURE__*/React.createElement("br", null), typeof error === 'string' ? error : JSON.stringify(error)));
};