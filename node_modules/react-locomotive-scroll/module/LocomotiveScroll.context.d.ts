import { LocomotiveScrollOptions, Scroll } from 'locomotive-scroll';
import { DependencyList, MutableRefObject } from 'react';
export interface LocomotiveScrollContextValue {
    scroll: Scroll | null;
    isReady: boolean;
}
export declare const LocomotiveScrollContext: import("react").Context<LocomotiveScrollContextValue>;
export interface LocomotiveScrollProviderProps {
    options: LocomotiveScrollOptions;
    containerRef: MutableRefObject<HTMLDivElement | null>;
    watch: DependencyList | undefined;
    onUpdate?: (scroll: Scroll) => void;
    location?: string;
    onLocationChange?: (scroll: Scroll) => void;
}
export declare function LocomotiveScrollProvider({ children, options, containerRef, watch, onUpdate, location, onLocationChange, }: WithChildren<LocomotiveScrollProviderProps>): JSX.Element;
export declare namespace LocomotiveScrollProvider {
    var displayName: string;
}
