"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _constants = require("./constants");

var _VisionSimulator = require("./components/VisionSimulator");

var _A11YPanel = require("./components/A11YPanel");

var _A11yContext = require("./components/A11yContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_addons.addons.register(_constants.ADDON_ID, function (api) {
  _addons.addons.add(_constants.PANEL_ID, {
    title: '',
    type: _addons.types.TOOL,
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === 'story';
    },
    render: function render() {
      return /*#__PURE__*/_react.default.createElement(_VisionSimulator.VisionSimulator, null);
    }
  });

  _addons.addons.add(_constants.PANEL_ID, {
    title: function title() {
      var _addonState$violation, _addonState$incomplet;

      var addonState = api === null || api === void 0 ? void 0 : api.getAddonState(_constants.ADDON_ID);
      var violationsNb = (addonState === null || addonState === void 0 ? void 0 : (_addonState$violation = addonState.violations) === null || _addonState$violation === void 0 ? void 0 : _addonState$violation.length) || 0;
      var incompleteNb = (addonState === null || addonState === void 0 ? void 0 : (_addonState$incomplet = addonState.incomplete) === null || _addonState$incomplet === void 0 ? void 0 : _addonState$incomplet.length) || 0;
      var totalNb = violationsNb + incompleteNb;
      return totalNb !== 0 ? "Accessibility (".concat(totalNb, ")") : 'Accessibility';
    },
    type: _addons.types.PANEL,
    render: function render(_ref2) {
      var _ref2$active = _ref2.active,
          active = _ref2$active === void 0 ? true : _ref2$active,
          key = _ref2.key;
      return /*#__PURE__*/_react.default.createElement(_A11yContext.A11yContextProvider, {
        key: key,
        active: active
      }, /*#__PURE__*/_react.default.createElement(_A11YPanel.A11YPanel, null));
    },
    paramKey: _constants.PARAM_KEY
  });
});