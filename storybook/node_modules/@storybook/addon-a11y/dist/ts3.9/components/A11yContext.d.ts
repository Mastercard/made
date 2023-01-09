import * as React from 'react';
import { Result } from 'axe-core';
export interface Results {
    passes: Result[];
    violations: Result[];
    incomplete: Result[];
}
interface A11yContextStore {
    results: Results;
    setResults: (results: Results) => void;
    highlighted: string[];
    toggleHighlight: (target: string[], highlight: boolean) => void;
    clearHighlights: () => void;
    tab: number;
    setTab: (index: number) => void;
}
export declare const A11yContext: React.Context<A11yContextStore>;
interface A11yContextProviderProps {
    active: boolean;
}
export declare const A11yContextProvider: React.FC<A11yContextProviderProps>;
export declare const useA11yContext: () => A11yContextStore;
export {};
