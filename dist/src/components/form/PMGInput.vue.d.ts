declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
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
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
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
}>> & Readonly<{}>, {
    disabled: boolean;
    type: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
