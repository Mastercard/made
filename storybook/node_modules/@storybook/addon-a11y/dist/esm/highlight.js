export var highlightStyle = function highlightStyle(color) {
  return "\n  outline: 2px dashed ".concat(color, ";\n  outline-offset: 2px;\n  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);\n");
};
export var highlightObject = function highlightObject(color) {
  return {
    outline: "2px dashed ".concat(color),
    outlineOffset: 2,
    boxShadow: '0 0 0 6px rgba(255,255,255,0.6),'
  };
};