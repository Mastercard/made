"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rules = exports.ImpactValue = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.array.map.js");

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

var _components = require("@storybook/components");

var _reactSizeme = require("react-sizeme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = _theming.styled.div({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 4,
  paddingRight: 4,
  paddingTop: 4,
  fontWeight: 400
});

var Item = _theming.styled.div(function (_ref) {
  var elementWidth = _ref.elementWidth;
  var maxWidthBeforeBreak = 407;
  return {
    flexDirection: elementWidth > maxWidthBeforeBreak ? 'row' : 'inherit',
    marginBottom: elementWidth > maxWidthBeforeBreak ? 6 : 12,
    display: elementWidth > maxWidthBeforeBreak ? 'flex' : 'block'
  };
});

var StyledBadge = (0, _theming.styled)(_components.Badge)({
  padding: '2px 8px',
  marginBottom: 3,
  minWidth: 65,
  maxWidth: 'fit-content',
  width: '100%',
  textAlign: 'center'
});

var Message = _theming.styled.div({
  paddingLeft: 6,
  paddingRight: 23
});

var ImpactValue;
exports.ImpactValue = ImpactValue;

(function (ImpactValue) {
  ImpactValue["MINOR"] = "minor";
  ImpactValue["MODERATE"] = "moderate";
  ImpactValue["SERIOUS"] = "serious";
  ImpactValue["CRITICAL"] = "critical";
})(ImpactValue || (exports.ImpactValue = ImpactValue = {}));

var formatSeverityText = function formatSeverityText(severity) {
  return severity.charAt(0).toUpperCase().concat(severity.slice(1));
};

var Rule = function Rule(_ref2) {
  var rule = _ref2.rule;
  var badgeType = null;

  switch (rule.impact) {
    case ImpactValue.CRITICAL:
      badgeType = 'critical';
      break;

    case ImpactValue.SERIOUS:
      badgeType = 'negative';
      break;

    case ImpactValue.MODERATE:
      badgeType = 'warning';
      break;

    case ImpactValue.MINOR:
      badgeType = 'neutral';
      break;

    default:
      break;
  }

  return /*#__PURE__*/_react.default.createElement(_reactSizeme.SizeMe, {
    refreshMode: "debounce"
  }, function (_ref3) {
    var size = _ref3.size;
    return /*#__PURE__*/_react.default.createElement(Item, {
      elementWidth: size.width || 0
    }, /*#__PURE__*/_react.default.createElement(StyledBadge, {
      status: badgeType
    }, formatSeverityText(rule.impact)), /*#__PURE__*/_react.default.createElement(Message, null, rule.message));
  });
};

var Rules = function Rules(_ref4) {
  var rules = _ref4.rules;
  return /*#__PURE__*/_react.default.createElement(List, null, rules.map(function (rule, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      _react.default.createElement(Rule, {
        rule: rule,
        key: index
      })
    );
  }));
};

exports.Rules = Rules;