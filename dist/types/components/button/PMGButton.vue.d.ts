declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: () => "sm" | "md" | "lg";
        default: string;
    };
    theme: {
        type: () => "primary" | "secondary" | "success" | "warning" | "danger" | "default";
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: () => "sm" | "md" | "lg";
        default: string;
    };
    theme: {
        type: () => "primary" | "secondary" | "success" | "warning" | "danger" | "default";
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    size: "sm" | "md" | "lg";
    theme: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
