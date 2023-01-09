import React from 'react';
import { styled } from '@storybook/theming';
import { useA11yContext } from '../A11yContext';
var CheckBoxStates;

(function (CheckBoxStates) {
  CheckBoxStates[CheckBoxStates["CHECKED"] = 0] = "CHECKED";
  CheckBoxStates[CheckBoxStates["UNCHECKED"] = 1] = "UNCHECKED";
  CheckBoxStates[CheckBoxStates["INDETERMINATE"] = 2] = "INDETERMINATE";
})(CheckBoxStates || (CheckBoxStates = {}));

const Checkbox = styled.input(({
  disabled
}) => ({
  cursor: disabled ? 'not-allowed' : 'pointer'
}));

function areAllRequiredElementsHighlighted(elementsToHighlight, highlighted) {
  const highlightedCount = elementsToHighlight.filter(item => highlighted.includes(item.target[0])).length; // eslint-disable-next-line no-nested-ternary

  return highlightedCount === 0 ? CheckBoxStates.UNCHECKED : highlightedCount === elementsToHighlight.length ? CheckBoxStates.CHECKED : CheckBoxStates.INDETERMINATE;
}

const HighlightToggle = ({
  toggleId,
  elementsToHighlight = []
}) => {
  const {
    toggleHighlight,
    highlighted
  } = useA11yContext();
  const checkBoxRef = React.useRef(null);
  const [checkBoxState, setChecked] = React.useState(areAllRequiredElementsHighlighted(elementsToHighlight, highlighted));
  React.useEffect(() => {
    const newState = areAllRequiredElementsHighlighted(elementsToHighlight, highlighted);

    if (checkBoxRef.current) {
      checkBoxRef.current.indeterminate = newState === CheckBoxStates.INDETERMINATE;
    }

    setChecked(newState);
  }, [elementsToHighlight, highlighted]);
  const handleToggle = React.useCallback(() => {
    toggleHighlight(elementsToHighlight.map(e => e.target[0]), checkBoxState !== CheckBoxStates.CHECKED);
  }, [elementsToHighlight, checkBoxState, toggleHighlight]);
  return /*#__PURE__*/React.createElement(Checkbox, {
    ref: checkBoxRef,
    id: toggleId,
    type: "checkbox",
    "aria-label": "Highlight result",
    disabled: !elementsToHighlight.length,
    onChange: handleToggle,
    checked: checkBoxState === CheckBoxStates.CHECKED
  });
};

export default HighlightToggle;