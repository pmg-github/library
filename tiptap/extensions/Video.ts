import { Node } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-3";
import VideoComponent from "../../components/tiptap/Video.vue";

export interface VideoAttrs {
  libraryId?: string;
  videoId?: string;
  autoplay?: boolean;
  muted?: boolean;
  src?: string;
}

export interface VideoOptions {
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    video: {
      setVideo: (attrs: VideoAttrs) => ReturnType;
      updateVideo: (attrs: Partial<VideoAttrs>) => ReturnType;
    };
  }
}

export const Video = Node.create<VideoOptions>({
  name: "video",
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
      libraryId: {
        default: "",
      },
      videoId: {
        default: "",
      },
      autoplay: {
        default: false,
      },
      muted: {
        default: false,
      },
      src: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-video]",
        getAttrs: (node) => {
          if (typeof node === "string") return false;
          const element = node as HTMLElement;
          return {
            libraryId: element.getAttribute("data-library-id") || "",
            videoId: element.getAttribute("data-video-id") || "",
            autoplay: element.getAttribute("data-autoplay") === "true",
            muted: element.getAttribute("data-muted") === "true",
            src: element.getAttribute("data-src") || "",
          };
        },
      },
      {
        tag: "div",
        priority: 100,
        getAttrs: (node) => {
          if (typeof node === "string") return false;
          const element = node as HTMLElement;
          const text = element.textContent?.trim() || "";
          const match = text.match(/^##video:\s*(\{.*\})$/s);
          if (!match) return false;

          try {
            const data = JSON.parse(match[1]);
            return {
              libraryId: String(data.libraryId || ""),
              videoId: String(data.videoId || ""),
              autoplay: Boolean(data.autoplay),
              muted: Boolean(data.muted),
              src: String(data.src || ""),
            };
          } catch {
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
        "data-video": "true",
        "data-library-id": HTMLAttributes.libraryId || "",
        "data-video-id": HTMLAttributes.videoId || "",
        "data-autoplay": String(Boolean(HTMLAttributes.autoplay)),
        "data-muted": String(Boolean(HTMLAttributes.muted)),
        "data-src": HTMLAttributes.src || "",
        ...this.options.HTMLAttributes,
      },
    ];
  },

  addCommands() {
    return {
      setVideo:
        (attrs: VideoAttrs) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs,
          });
        },
      updateVideo:
        (attrs: Partial<VideoAttrs>) =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, attrs);
        },
    };
  },

  addNodeView() {
    return VueNodeViewRenderer(VideoComponent as any);
  },
});

export default Video;
