import { FunctionComponent } from 'react';
import { CheckResult } from 'axe-core';
export declare enum ImpactValue {
    MINOR = "minor",
    MODERATE = "moderate",
    SERIOUS = "serious",
    CRITICAL = "critical"
}
interface RulesProps {
    rules: CheckResult[];
}
export declare const Rules: FunctionComponent<RulesProps>;
export {};
