declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLTableCellElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    align: {
        type: () => "left" | "center" | "right";
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    columnKey: {
        type: StringConstructor;
        default: string;
    };
    ariaSort: {
        type: () => "none" | "ascending" | "descending";
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    sort: (key?: string | undefined) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    align: {
        type: () => "left" | "center" | "right";
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    columnKey: {
        type: StringConstructor;
        default: string;
    };
    ariaSort: {
        type: () => "none" | "ascending" | "descending";
        default: string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onSort?: ((key?: string | undefined) => any) | undefined;
}>, {
    align: "center" | "right" | "left";
    loading: boolean;
    width: string;
    className: string;
    columnKey: string;
    ariaSort: "none" | "ascending" | "descending";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLTableCellElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
