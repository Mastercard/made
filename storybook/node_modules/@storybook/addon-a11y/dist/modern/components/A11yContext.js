const _excluded = ["active"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { themes, convert } from '@storybook/theming';
import { useChannel, useStorybookState, useAddonState } from '@storybook/api';
import { STORY_CHANGED, STORY_RENDERED } from '@storybook/core-events';
import { ADDON_ID, EVENTS } from '../constants';
const colorsByType = [convert(themes.light).color.negative, // VIOLATION,
convert(themes.light).color.positive, // PASS,
convert(themes.light).color.warning // INCOMPLETION,
];
export const A11yContext = /*#__PURE__*/React.createContext({
  results: {
    passes: [],
    incomplete: [],
    violations: []
  },
  setResults: () => {},
  highlighted: [],
  toggleHighlight: () => {},
  clearHighlights: () => {},
  tab: 0,
  setTab: () => {}
});
const defaultResult = {
  passes: [],
  incomplete: [],
  violations: []
};
export const A11yContextProvider = _ref => {
  let {
    active
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [results, setResults] = useAddonState(ADDON_ID, defaultResult);
  const [tab, setTab] = React.useState(0);
  const [highlighted, setHighlighted] = React.useState([]);
  const {
    storyId
  } = useStorybookState();
  const handleToggleHighlight = React.useCallback((target, highlight) => {
    setHighlighted(prevHighlighted => highlight ? [...prevHighlighted, ...target] : prevHighlighted.filter(t => !target.includes(t)));
  }, []);

  const handleRun = renderedStoryId => {
    emit(EVENTS.REQUEST, renderedStoryId);
  };

  const handleClearHighlights = React.useCallback(() => setHighlighted([]), []);
  const handleSetTab = React.useCallback(index => {
    handleClearHighlights();
    setTab(index);
  }, []);
  const handleReset = React.useCallback(() => {
    setTab(0);
    setResults(defaultResult); // Highlights is cleared by a11yHighlights.ts
  }, []);
  const emit = useChannel({
    [STORY_RENDERED]: handleRun,
    [STORY_CHANGED]: handleReset
  });
  React.useEffect(() => {
    emit(EVENTS.HIGHLIGHT, {
      elements: highlighted,
      color: colorsByType[tab]
    });
  }, [highlighted, tab]);
  React.useEffect(() => {
    if (active) {
      handleRun(storyId);
    } else {
      handleClearHighlights();
    }
  }, [active, handleClearHighlights, emit, storyId]);
  if (!active) return null;
  return /*#__PURE__*/React.createElement(A11yContext.Provider, _extends({
    value: {
      results,
      setResults,
      highlighted,
      toggleHighlight: handleToggleHighlight,
      clearHighlights: handleClearHighlights,
      tab,
      setTab: handleSetTab
    }
  }, props));
};
export const useA11yContext = () => React.useContext(A11yContext);