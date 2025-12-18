declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    rootSelector: {
        type: StringConstructor;
        default: string;
    };
    rootMargin: {
        type: StringConstructor;
        default: string;
    };
    threshold: {
        type: (NumberConstructor | ArrayConstructor)[];
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "in-view": () => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    rootSelector: {
        type: StringConstructor;
        default: string;
    };
    rootMargin: {
        type: StringConstructor;
        default: string;
    };
    threshold: {
        type: (NumberConstructor | ArrayConstructor)[];
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onIn-view"?: (() => any) | undefined;
}>, {
    disabled: boolean;
    rootSelector: string;
    rootMargin: string;
    threshold: number | unknown[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    sentinel: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
