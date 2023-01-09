"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.highlightStyle = exports.highlightObject = void 0;

var highlightStyle = function highlightStyle(color) {
  return "\n  outline: 2px dashed ".concat(color, ";\n  outline-offset: 2px;\n  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);\n");
};

exports.highlightStyle = highlightStyle;

var highlightObject = function highlightObject(color) {
  return {
    outline: "2px dashed ".concat(color),
    outlineOffset: 2,
    boxShadow: '0 0 0 6px rgba(255,255,255,0.6),'
  };
};

exports.highlightObject = highlightObject;