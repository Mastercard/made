import { Result } from 'axe-core';
import { RuleType } from '../A11YPanel';
interface ItemProps {
    item: Result;
    type: RuleType;
}
export declare const Item: (props: ItemProps) => JSX.Element;
export {};
