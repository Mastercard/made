import * as React from 'react';
import { Result } from 'axe-core';
import { RuleType } from './A11YPanel';
interface TabsProps {
    tabs: {
        label: JSX.Element;
        panel: JSX.Element;
        items: Result[];
        type: RuleType;
    }[];
}
export declare const Tabs: React.FC<TabsProps>;
export {};
