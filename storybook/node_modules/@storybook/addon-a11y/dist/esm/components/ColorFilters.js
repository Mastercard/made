import * as React from 'react';
export var Filters = function Filters(props) {
  return /*#__PURE__*/React.createElement("svg", props, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "protanopia"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "protanomaly"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "deuteranopia"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "deuteranomaly"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "tritanopia"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "tritanomaly"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "achromatopsia"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "achromatomaly"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "SourceGraphic",
    type: "matrix",
    values: "0.618, 0.320, 0.062, 0, 0 0.163, 0.775, 0.062, 0, 0 0.163, 0.320, 0.516, 0, 0 0, 0, 0, 1, 0"
  }))));
};