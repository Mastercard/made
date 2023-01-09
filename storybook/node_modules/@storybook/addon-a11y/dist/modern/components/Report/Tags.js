import React from 'react';
import { styled } from '@storybook/theming';
const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '12px 0'
});
const Item = styled.div(({
  theme
}) => ({
  margin: '0 6px',
  padding: 5,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: theme.appBorderRadius
}));
export const Tags = ({
  tags
}) => {
  return /*#__PURE__*/React.createElement(Wrapper, null, tags.map(tag => /*#__PURE__*/React.createElement(Item, {
    key: tag
  }, tag)));
};