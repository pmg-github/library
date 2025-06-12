import type { StoryObj } from "@storybook/vue3";
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            text: {
                type: StringConstructor;
                required: false;
            };
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
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
        }, import("vue").PublicProps, {
            disabled: boolean;
            size: "sm" | "md" | "lg";
            theme: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            text: {
                type: StringConstructor;
                required: false;
            };
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
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: "sm" | "md" | "lg";
            theme: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        text: {
            type: StringConstructor;
            required: false;
        };
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
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
    }, string, {
        disabled: boolean;
        size: "sm" | "md" | "lg";
        theme: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?: (props: {}) => any;
        };
    });
    tags: string[];
    argTypes: {
        size: {
            control: "select";
            options: string[];
        };
        theme: {
            control: "select";
            options: string[];
        };
    };
    args: {
        size: "md";
        theme: "primary";
        text: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Success: Story;
export declare const Warning: Story;
export declare const Danger: Story;
export declare const Default: Story;
export declare const Small: Story;
export declare const Large: Story;
