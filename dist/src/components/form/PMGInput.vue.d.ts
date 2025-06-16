declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: (StringConstructor | NumberConstructor)[];
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
    errorMessage: {
        type: StringConstructor;
        required: false;
    };
    meta: {
        type: ObjectConstructor;
        required: false;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: (StringConstructor | NumberConstructor)[];
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
    errorMessage: {
        type: StringConstructor;
        required: false;
    };
    meta: {
        type: ObjectConstructor;
        required: false;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    type: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
