import React from 'react';
import { NodeResult } from 'axe-core';
interface ToggleProps {
    elementsToHighlight: NodeResult[];
    toggleId?: string;
}
declare const HighlightToggle: React.FC<ToggleProps>;
export default HighlightToggle;
