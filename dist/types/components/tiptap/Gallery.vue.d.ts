export interface GalleryImage {
    id: number;
    url: string;
    altText?: string;
    caption?: string;
    copyRight?: string;
}
type __VLS_Props = {
    node: {
        attrs: {
            images: GalleryImage[];
        };
    };
    editor: any;
    updateAttributes?: (attrs: {
        images: GalleryImage[];
    }) => void;
    selected?: boolean;
    decorations?: any;
    extension?: any;
    getPos?: () => number;
    deleteNode?: () => void;
    view?: any;
    innerDecorations?: any;
    HTMLAttributes?: Record<string, any>;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'empty-state'?(_: {
            onSelect: () => void;
        }): any;
        'modal-content'?(_: {
            images: GalleryImage[];
            updateImage: (index: number, field: keyof GalleryImage, value: string) => void;
            removeImage: (index: number) => void;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    openManageModal: (images: GalleryImage[]) => any;
    imagesChanged: (images: GalleryImage[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOpenManageModal?: ((images: GalleryImage[]) => any) | undefined;
    onImagesChanged?: ((images: GalleryImage[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
