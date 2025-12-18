import { PropType } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        empty?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClass: {
        type: StringConstructor;
        default: string;
    };
    tableClass: {
        type: StringConstructor;
        default: string;
    };
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSelectColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    infiniteVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    infinite: {
        type: PropType<(() => any) | {
            handler: () => any;
            loading?: boolean;
        }>;
        default: undefined;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClass: {
        type: StringConstructor;
        default: string;
    };
    tableClass: {
        type: StringConstructor;
        default: string;
    };
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSelectColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    infiniteVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
    };
    infinite: {
        type: PropType<(() => any) | {
            handler: () => any;
            loading?: boolean;
        }>;
        default: undefined;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    sticky: boolean;
    loading: boolean;
    rowKey: string;
    striped: boolean;
    wrapperClass: string;
    tableClass: string;
    selectable: boolean;
    autoSelectColumn: boolean;
    infiniteVisible: boolean;
    infinite: (() => any) | {
        handler: () => any;
        loading?: boolean;
    };
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
