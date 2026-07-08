import { Node } from '@tiptap/core';
export interface GalleryImage {
    id: number;
    url: string;
    altText?: string;
    caption?: string;
    copyRight?: string;
}
export interface GalleryOptions {
    HTMLAttributes: Record<string, any>;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        gallery: {
            /**
             * Insert a gallery
             */
            setGallery: (images: GalleryImage[]) => ReturnType;
            /**
             * Update gallery images
             */
            updateGallery: (images: GalleryImage[]) => ReturnType;
        };
    }
}
export declare const Gallery: Node<GalleryOptions, any>;
export default Gallery;
