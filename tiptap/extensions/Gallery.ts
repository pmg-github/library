import { Node } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-3";
import GalleryComponent from "../components/tiptap/Gallery.vue";

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

export const Gallery = Node.create<GalleryOptions>({
  name: "gallery",
  group: "block",
  atom: true,
  selectable: true,
  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      images: {
        default: [],
        parseHTML: (element) => {
          const dataImages = element.getAttribute("data-images");
          if (!dataImages) return [];
          try {
            const images = JSON.parse(dataImages);
            return Array.isArray(images) ? images : [];
          } catch (e) {
            return [];
          }
        },
        renderHTML: (attributes) => {
          if (!attributes.images) return {};
          return {
            "data-images": JSON.stringify(attributes.images),
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-gallery]",
      },
      {
        tag: "div",
        priority: 100,
        getAttrs: (node) => {
          if (typeof node === "string") return false;
          const element = node as HTMLElement;
          const text = element.textContent?.trim() || "";

          const match = text.match(/^##gallery:\s*(\[.*\])$/s);
          if (!match) {
            return false;
          }

          try {
            const data = JSON.parse(match[1]);
            if (!Array.isArray(data)) {
              return false;
            }

            const images: GalleryImage[] = data.map((item: any) => {
              const rawUrl =
                item.image || item.src || item.fileUrl || item.url || "";
              const id = parseInt(
                rawUrl.match(/\/(\d+)\.[^/]+$/)?.[1] || "0",
                10,
              );
              return {
                id: id,
                url: rawUrl,
                altText: item.alt || "",
                caption: item.caption || "",
                copyRight: item.copyRight || "",
              } as GalleryImage;
            });

            return { images };
          } catch (e) {
            return false;
          }
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      {
        "data-gallery": "true",
        ...this.options.HTMLAttributes,
        ...HTMLAttributes,
      },
    ];
  },

  addCommands() {
    return {
      setGallery:
        (images: GalleryImage[]) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { images },
          });
        },
      updateGallery:
        (images: GalleryImage[]) =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, { images });
        },
    };
  },

  addNodeView() {
    return VueNodeViewRenderer(GalleryComponent as any);
  },
});

export default Gallery;
