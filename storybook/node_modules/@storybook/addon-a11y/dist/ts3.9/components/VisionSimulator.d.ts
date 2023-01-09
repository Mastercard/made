import { ReactNode } from 'react';
interface Option {
    name: string;
    percentage?: number;
}
export declare const baseList: Option[];
export interface Link {
    id: string;
    title: ReactNode;
    right?: ReactNode;
    active: boolean;
    onClick: () => void;
}
export declare const VisionSimulator: () => JSX.Element;
export {};
