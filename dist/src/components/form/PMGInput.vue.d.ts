declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: import('vue').PropType<string | number>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: import('vue').PropType<string | number>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {
    disabled: boolean;
    type: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
