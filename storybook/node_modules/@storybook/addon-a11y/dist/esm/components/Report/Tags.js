import "core-js/modules/es.array.map.js";
import React from 'react';
import { styled } from '@storybook/theming';
var Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '12px 0'
});
var Item = styled.div(function (_ref) {
  var theme = _ref.theme;
  return {
    margin: '0 6px',
    padding: 5,
    border: "1px solid ".concat(theme.appBorderColor),
    borderRadius: theme.appBorderRadius
  };
});
export var Tags = function Tags(_ref2) {
  var tags = _ref2.tags;
  return /*#__PURE__*/React.createElement(Wrapper, null, tags.map(function (tag) {
    return /*#__PURE__*/React.createElement(Item, {
      key: tag
    }, tag);
  }));
};