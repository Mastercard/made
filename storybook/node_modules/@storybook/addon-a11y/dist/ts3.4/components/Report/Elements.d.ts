import { FunctionComponent } from 'react';
import { NodeResult } from 'axe-core';
import { RuleType } from '../A11YPanel';
interface ElementsProps {
    elements: NodeResult[];
    type: RuleType;
}
export declare const Elements: FunctionComponent<ElementsProps>;
export {};
