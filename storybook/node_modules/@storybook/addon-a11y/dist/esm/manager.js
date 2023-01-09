import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID, PARAM_KEY } from './constants';
import { VisionSimulator } from './components/VisionSimulator';
import { A11YPanel } from './components/A11YPanel';
import { A11yContextProvider } from './components/A11yContext';
addons.register(ADDON_ID, function (api) {
  addons.add(PANEL_ID, {
    title: '',
    type: types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === 'story';
    },
    render: function render() {
      return /*#__PURE__*/React.createElement(VisionSimulator, null);
    }
  });
  addons.add(PANEL_ID, {
    title: function title() {
      var _addonState$violation, _addonState$incomplet;

      var addonState = api === null || api === void 0 ? void 0 : api.getAddonState(ADDON_ID);
      var violationsNb = (addonState === null || addonState === void 0 ? void 0 : (_addonState$violation = addonState.violations) === null || _addonState$violation === void 0 ? void 0 : _addonState$violation.length) || 0;
      var incompleteNb = (addonState === null || addonState === void 0 ? void 0 : (_addonState$incomplet = addonState.incomplete) === null || _addonState$incomplet === void 0 ? void 0 : _addonState$incomplet.length) || 0;
      var totalNb = violationsNb + incompleteNb;
      return totalNb !== 0 ? "Accessibility (".concat(totalNb, ")") : 'Accessibility';
    },
    type: types.PANEL,
    render: function render(_ref2) {
      var _ref2$active = _ref2.active,
          active = _ref2$active === void 0 ? true : _ref2$active,
          key = _ref2.key;
      return /*#__PURE__*/React.createElement(A11yContextProvider, {
        key: key,
        active: active
      }, /*#__PURE__*/React.createElement(A11YPanel, null));
    },
    paramKey: PARAM_KEY
  });
});