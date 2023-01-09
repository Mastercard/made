import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.array.map.js";
import React from 'react';
import { styled } from '@storybook/theming';
import { Badge } from '@storybook/components';
import { SizeMe } from 'react-sizeme';
var List = styled.div({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 4,
  paddingRight: 4,
  paddingTop: 4,
  fontWeight: 400
});
var Item = styled.div(function (_ref) {
  var elementWidth = _ref.elementWidth;
  var maxWidthBeforeBreak = 407;
  return {
    flexDirection: elementWidth > maxWidthBeforeBreak ? 'row' : 'inherit',
    marginBottom: elementWidth > maxWidthBeforeBreak ? 6 : 12,
    display: elementWidth > maxWidthBeforeBreak ? 'flex' : 'block'
  };
});
var StyledBadge = styled(Badge)({
  padding: '2px 8px',
  marginBottom: 3,
  minWidth: 65,
  maxWidth: 'fit-content',
  width: '100%',
  textAlign: 'center'
});
var Message = styled.div({
  paddingLeft: 6,
  paddingRight: 23
});
export var ImpactValue;

(function (ImpactValue) {
  ImpactValue["MINOR"] = "minor";
  ImpactValue["MODERATE"] = "moderate";
  ImpactValue["SERIOUS"] = "serious";
  ImpactValue["CRITICAL"] = "critical";
})(ImpactValue || (ImpactValue = {}));

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

  return /*#__PURE__*/React.createElement(SizeMe, {
    refreshMode: "debounce"
  }, function (_ref3) {
    var size = _ref3.size;
    return /*#__PURE__*/React.createElement(Item, {
      elementWidth: size.width || 0
    }, /*#__PURE__*/React.createElement(StyledBadge, {
      status: badgeType
    }, formatSeverityText(rule.impact)), /*#__PURE__*/React.createElement(Message, null, rule.message));
  });
};

export var Rules = function Rules(_ref4) {
  var rules = _ref4.rules;
  return /*#__PURE__*/React.createElement(List, null, rules.map(function (rule, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement(Rule, {
        rule: rule,
        key: index
      })
    );
  }));
};