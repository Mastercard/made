import React, { useCallback, useMemo, useState } from 'react';
import { styled } from '@storybook/theming';
import { ActionBar, Icons, ScrollArea } from '@storybook/components';
import { useChannel, useParameter, useStorybookState } from '@storybook/api';
import { Report } from './Report';
import { Tabs } from './Tabs';
import { useA11yContext } from './A11yContext';
import { EVENTS } from '../constants';
export let RuleType;

(function (RuleType) {
  RuleType[RuleType["VIOLATION"] = 0] = "VIOLATION";
  RuleType[RuleType["PASS"] = 1] = "PASS";
  RuleType[RuleType["INCOMPLETION"] = 2] = "INCOMPLETION";
})(RuleType || (RuleType = {}));

const Icon = styled(Icons)({
  height: 12,
  width: 12,
  marginRight: 4
});
const RotatingIcon = styled(Icon)(({
  theme
}) => ({
  animation: `${theme.animation.rotate360} 1s linear infinite;`
}));
const Passes = styled.span(({
  theme
}) => ({
  color: theme.color.positive
}));
const Violations = styled.span(({
  theme
}) => ({
  color: theme.color.negative
}));
const Incomplete = styled.span(({
  theme
}) => ({
  color: theme.color.warning
}));
const Centered = styled.span({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
});
export const A11YPanel = () => {
  const {
    manual
  } = useParameter('a11y', {
    manual: false
  });
  const [status, setStatus] = useState(manual ? 'manual' : 'initial');
  const [error, setError] = React.useState(undefined);
  const {
    setResults,
    results
  } = useA11yContext();
  const {
    storyId
  } = useStorybookState();
  React.useEffect(() => {
    setStatus(manual ? 'manual' : 'initial');
  }, [manual]);

  const handleResult = axeResults => {
    setStatus('ran');
    setResults(axeResults);
    setTimeout(() => {
      if (status === 'ran') {
        setStatus('ready');
      }
    }, 900);
  };

  const handleRun = useCallback(() => {
    setStatus('running');
  }, []);
  const handleError = useCallback(err => {
    setStatus('error');
    setError(err);
  }, []);
  const emit = useChannel({
    [EVENTS.RUNNING]: handleRun,
    [EVENTS.RESULT]: handleResult,
    [EVENTS.ERROR]: handleError
  });
  const handleManual = useCallback(() => {
    setStatus('running');
    emit(EVENTS.MANUAL, storyId);
  }, [storyId]);
  const manualActionItems = useMemo(() => [{
    title: 'Run test',
    onClick: handleManual
  }], [handleManual]);
  const readyActionItems = useMemo(() => [{
    title: status === 'ready' ? 'Rerun tests' : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
      inline: true,
      icon: "check"
    }), " Tests completed"),
    onClick: handleManual
  }], [status, handleManual]);
  const tabs = useMemo(() => {
    const {
      passes,
      incomplete,
      violations
    } = results;
    return [{
      label: /*#__PURE__*/React.createElement(Violations, null, violations.length, " Violations"),
      panel: /*#__PURE__*/React.createElement(Report, {
        items: violations,
        type: RuleType.VIOLATION,
        empty: "No accessibility violations found."
      }),
      items: violations,
      type: RuleType.VIOLATION
    }, {
      label: /*#__PURE__*/React.createElement(Passes, null, passes.length, " Passes"),
      panel: /*#__PURE__*/React.createElement(Report, {
        items: passes,
        type: RuleType.PASS,
        empty: "No accessibility checks passed."
      }),
      items: passes,
      type: RuleType.PASS
    }, {
      label: /*#__PURE__*/React.createElement(Incomplete, null, incomplete.length, " Incomplete"),
      panel: /*#__PURE__*/React.createElement(Report, {
        items: incomplete,
        type: RuleType.INCOMPLETION,
        empty: "No accessibility checks incomplete."
      }),
      items: incomplete,
      type: RuleType.INCOMPLETION
    }];
  }, [results]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, status === 'initial' && /*#__PURE__*/React.createElement(Centered, null, "Initializing..."), status === 'manual' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Centered, null, "Manually run the accessibility scan."), /*#__PURE__*/React.createElement(ActionBar, {
    key: "actionbar",
    actionItems: manualActionItems
  })), status === 'running' && /*#__PURE__*/React.createElement(Centered, null, /*#__PURE__*/React.createElement(RotatingIcon, {
    inline: true,
    icon: "sync"
  }), " Please wait while the accessibility scan is running ..."), (status === 'ready' || status === 'ran') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScrollArea, {
    vertical: true,
    horizontal: true
  }, /*#__PURE__*/React.createElement(Tabs, {
    key: "tabs",
    tabs: tabs
  })), /*#__PURE__*/React.createElement(ActionBar, {
    key: "actionbar",
    actionItems: readyActionItems
  })), status === 'error' && /*#__PURE__*/React.createElement(Centered, null, "The accessibility scan encountered an error.", /*#__PURE__*/React.createElement("br", null), typeof error === 'string' ? error : JSON.stringify(error)));
};