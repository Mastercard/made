import "core-js/modules/es.array.reduce.js";
import * as React from 'react';
import { styled } from '@storybook/theming';
import { SizeMe } from 'react-sizeme';
import HighlightToggle from './Report/HighlightToggle';
import { useA11yContext } from './A11yContext'; // TODO: reuse the Tabs component from @storybook/theming instead of re-building identical functionality

const Container = styled.div({
  width: '100%',
  position: 'relative',
  minHeight: '100%'
});
const HighlightToggleLabel = styled.label(({
  theme
}) => ({
  cursor: 'pointer',
  userSelect: 'none',
  color: theme.color.dark
}));
const GlobalToggle = styled.div(({
  elementWidth,
  theme
}) => {
  const maxWidthBeforeBreak = 450;
  return {
    cursor: 'pointer',
    fontSize: 13,
    lineHeight: '20px',
    padding: elementWidth > maxWidthBeforeBreak ? '10px 15px 10px 0' : '10px 0px 10px 15px',
    height: '40px',
    border: 'none',
    marginTop: elementWidth > maxWidthBeforeBreak ? -40 : 0,
    float: elementWidth > maxWidthBeforeBreak ? 'right' : 'left',
    display: 'flex',
    alignItems: 'center',
    width: elementWidth > maxWidthBeforeBreak ? 'auto' : '100%',
    borderBottom: elementWidth > maxWidthBeforeBreak ? 'none' : `1px solid ${theme.appBorderColor}`,
    input: {
      marginLeft: 10,
      marginRight: 0,
      marginTop: -1,
      marginBottom: 0
    }
  };
});
const Item = styled.button(({
  theme
}) => ({
  textDecoration: 'none',
  padding: '10px 15px',
  cursor: 'pointer',
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s2 - 1,
  lineHeight: 1,
  height: 40,
  border: 'none',
  borderTop: '3px solid transparent',
  borderBottom: '3px solid transparent',
  background: 'transparent',
  '&:focus': {
    outline: '0 none',
    borderBottom: `3px solid ${theme.color.secondary}`
  }
}), ({
  active,
  theme
}) => active ? {
  opacity: 1,
  borderBottom: `3px solid ${theme.color.secondary}`
} : {});
const TabsWrapper = styled.div({});
const List = styled.div(({
  theme
}) => ({
  boxShadow: `${theme.appBorderColor} 0 -1px 0 0 inset`,
  background: 'rgba(0, 0, 0, .05)',
  display: 'flex',
  justifyContent: 'space-between',
  whiteSpace: 'nowrap'
}));

function retrieveAllNodesFromResults(items) {
  return items.reduce((acc, item) => acc.concat(item.nodes), []);
}

export const Tabs = ({
  tabs
}) => {
  const {
    tab: activeTab,
    setTab
  } = useA11yContext();
  const handleToggle = React.useCallback(event => {
    setTab(parseInt(event.currentTarget.getAttribute('data-index') || '', 10));
  }, [setTab]);
  const highlightToggleId = `${tabs[activeTab].type}-global-checkbox`;
  const highlightLabel = `Highlight results`;
  return /*#__PURE__*/React.createElement(SizeMe, {
    refreshMode: "debounce"
  }, ({
    size
  }) => /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(List, null, /*#__PURE__*/React.createElement(TabsWrapper, null, tabs.map((tab, index) => /*#__PURE__*/React.createElement(Item
  /* eslint-disable-next-line react/no-array-index-key */
  , {
    key: index,
    "data-index": index,
    active: activeTab === index,
    onClick: handleToggle
  }, tab.label)))), tabs[activeTab].items.length > 0 ? /*#__PURE__*/React.createElement(GlobalToggle, {
    elementWidth: size.width || 0
  }, /*#__PURE__*/React.createElement(HighlightToggleLabel, {
    htmlFor: highlightToggleId
  }, highlightLabel), /*#__PURE__*/React.createElement(HighlightToggle, {
    toggleId: highlightToggleId,
    elementsToHighlight: retrieveAllNodesFromResults(tabs[activeTab].items)
  })) : null, tabs[activeTab].panel));
};