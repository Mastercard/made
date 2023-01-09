import { FunctionComponent } from 'react';
import { Result } from 'axe-core';
import { RuleType } from '../A11YPanel';
export interface ReportProps {
    items: Result[];
    empty: string;
    type: RuleType;
}
export declare const Report: FunctionComponent<ReportProps>;
