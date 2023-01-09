import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import React from 'react';
import { styled } from '@storybook/theming';
var Wrapper = styled.div({
  padding: 12,
  marginBottom: 10
});
var Description = styled.p({
  margin: '0 0 12px'
});
var Link = styled.a({
  marginTop: 12,
  textDecoration: 'underline',
  color: 'inherit',
  display: 'block'
});
export var Info = function Info(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Description, null, item.description), /*#__PURE__*/React.createElement(Link, {
    href: item.helpUrl,
    target: "_blank"
  }, "More info..."));
};