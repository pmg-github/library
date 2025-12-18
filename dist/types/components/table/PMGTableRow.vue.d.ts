declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLTableRowElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    className: {
        type: StringConstructor;
        default: string;
    };
    item: {
        type: () => any;
        default: null;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "row-click": (item: any) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    className: {
        type: StringConstructor;
        default: string;
    };
    item: {
        type: () => any;
        default: null;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onRow-click"?: ((item: any) => any) | undefined;
}>, {
    className: string;
    item: any;
    rowKey: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLTableRowElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
