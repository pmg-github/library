declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        sentinel: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
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
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
