import React from 'react';
import { styled } from '@storybook/theming';
const Wrapper = styled.div({
  padding: 12,
  marginBottom: 10
});
const Description = styled.p({
  margin: '0 0 12px'
});
const Link = styled.a({
  marginTop: 12,
  textDecoration: 'underline',
  color: 'inherit',
  display: 'block'
});
export const Info = ({
  item
}) => {
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Description, null, item.description), /*#__PURE__*/React.createElement(Link, {
    href: item.helpUrl,
    target: "_blank"
  }, "More info..."));
};