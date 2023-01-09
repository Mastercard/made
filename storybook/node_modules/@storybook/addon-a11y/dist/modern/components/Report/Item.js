import React, { Fragment, useState } from 'react';
import { styled } from '@storybook/theming';
import { Icons } from '@storybook/components';
import { Info } from './Info';
import { Elements } from './Elements';
import { Tags } from './Tags';
import HighlightToggle from './HighlightToggle';
const Wrapper = styled.div(({
  theme
}) => ({
  display: 'flex',
  width: '100%',
  borderBottom: `1px solid ${theme.appBorderColor}`,
  '&:hover': {
    background: theme.background.hoverable
  }
}));
const Icon = styled(Icons)(({
  theme
}) => ({
  height: 10,
  width: 10,
  minWidth: 10,
  color: theme.color.mediumdark,
  marginRight: 10,
  transition: 'transform 0.1s ease-in-out',
  alignSelf: 'center',
  display: 'inline-flex'
}));
const HeaderBar = styled.div(({
  theme
}) => ({
  padding: theme.layoutMargin,
  paddingLeft: theme.layoutMargin - 3,
  lineHeight: '20px',
  background: 'none',
  color: 'inherit',
  textAlign: 'left',
  cursor: 'pointer',
  borderLeft: '3px solid transparent',
  width: '100%',
  '&:focus': {
    outline: '0 none',
    borderLeft: `3px solid ${theme.color.secondary}`
  }
}));
const HighlightToggleElement = styled.span({
  fontWeight: 'normal',
  float: 'right',
  marginRight: 15,
  alignSelf: 'center',
  input: {
    margin: 0,
    display: 'block'
  }
});
// export class Item extends Component<ItemProps, ItemState> {
export const Item = props => {
  const [open, onToggle] = useState(false);
  const {
    item,
    type
  } = props;
  const highlightToggleId = `${type}-${item.id}`;
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(HeaderBar, {
    onClick: () => onToggle(!open),
    role: "button"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "chevrondown",
    size: 10,
    color: "#9DA5AB",
    style: {
      transform: `rotate(${open ? 0 : -90}deg)`
    }
  }), item.help), /*#__PURE__*/React.createElement(HighlightToggleElement, null, /*#__PURE__*/React.createElement(HighlightToggle, {
    toggleId: highlightToggleId,
    elementsToHighlight: item.nodes
  }))), open ? /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Info, {
    item: item,
    key: "info"
  }), /*#__PURE__*/React.createElement(Elements, {
    elements: item.nodes,
    type: type,
    key: "elements"
  }), /*#__PURE__*/React.createElement(Tags, {
    tags: item.tags,
    key: "tags"
  })) : null);
};