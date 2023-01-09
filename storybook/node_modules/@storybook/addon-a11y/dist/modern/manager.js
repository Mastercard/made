import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID, PARAM_KEY } from './constants';
import { VisionSimulator } from './components/VisionSimulator';
import { A11YPanel } from './components/A11YPanel';
import { A11yContextProvider } from './components/A11yContext';
addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    title: '',
    type: types.TOOL,
    match: ({
      viewMode
    }) => viewMode === 'story',
    render: () => /*#__PURE__*/React.createElement(VisionSimulator, null)
  });
  addons.add(PANEL_ID, {
    title() {
      var _addonState$violation, _addonState$incomplet;

      const addonState = api === null || api === void 0 ? void 0 : api.getAddonState(ADDON_ID);
      const violationsNb = (addonState === null || addonState === void 0 ? void 0 : (_addonState$violation = addonState.violations) === null || _addonState$violation === void 0 ? void 0 : _addonState$violation.length) || 0;
      const incompleteNb = (addonState === null || addonState === void 0 ? void 0 : (_addonState$incomplet = addonState.incomplete) === null || _addonState$incomplet === void 0 ? void 0 : _addonState$incomplet.length) || 0;
      const totalNb = violationsNb + incompleteNb;
      return totalNb !== 0 ? `Accessibility (${totalNb})` : 'Accessibility';
    },

    type: types.PANEL,
    render: ({
      active = true,
      key
    }) => /*#__PURE__*/React.createElement(A11yContextProvider, {
      key: key,
      active: active
    }, /*#__PURE__*/React.createElement(A11YPanel, null)),
    paramKey: PARAM_KEY
  });
});