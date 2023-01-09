import React from 'react';
import { styled } from '@storybook/theming';
import { Rules } from './Rules';
import HighlightToggle from './HighlightToggle';
const Item = styled.li({
  fontWeight: 600
});
const ItemTitle = styled.span(({
  theme
}) => ({
  borderBottom: `1px solid ${theme.appBorderColor}`,
  width: '100%',
  display: 'flex',
  paddingBottom: 6,
  marginBottom: 6,
  justifyContent: 'space-between'
}));
const HighlightToggleElement = styled.span({
  fontWeight: 'normal',
  alignSelf: 'center',
  paddingRight: 15,
  input: {
    margin: 0,
    display: 'block'
  }
});

const Element = ({
  element,
  type
}) => {
  const {
    any,
    all,
    none
  } = element;
  const rules = [...any, ...all, ...none];
  const highlightToggleId = `${type}-${element.target[0]}`;
  return /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(ItemTitle, null, element.target[0], /*#__PURE__*/React.createElement(HighlightToggleElement, null, /*#__PURE__*/React.createElement(HighlightToggle, {
    toggleId: highlightToggleId,
    elementsToHighlight: [element]
  }))), /*#__PURE__*/React.createElement(Rules, {
    rules: rules
  }));
};

export const Elements = ({
  elements,
  type
}) => /*#__PURE__*/React.createElement("ol", null, elements.map((element, index) =>
/*#__PURE__*/
// eslint-disable-next-line react/no-array-index-key
React.createElement(Element, {
  element: element,
  key: index,
  type: type
})));