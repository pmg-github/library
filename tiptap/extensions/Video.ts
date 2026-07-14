import { Node } from "@tiptap/core";
import { VueNodeViewRenderer } from "@tiptap/vue-3";
import VideoComponent from "../../components/tiptap/Video.vue";

export interface VideoAttrs {
  videoId?: string;
  autoplay?: boolean;
  muted?: boolean;
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
      videoId: {
        default: "",
      },
      autoplay: {
        default: false,
      },
      muted: {
        default: false,
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
            videoId: element.getAttribute("data-video-id") || "",
            autoplay: element.getAttribute("data-autoplay") === "true",
            muted: element.getAttribute("data-muted") === "true",
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
              videoId: String(data.videoId || ""),
              autoplay: Boolean(data.autoplay),
              muted: Boolean(data.muted),
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
        "data-video-id": HTMLAttributes.videoId || "",
        "data-autoplay": String(Boolean(HTMLAttributes.autoplay)),
        "data-muted": String(Boolean(HTMLAttributes.muted)),
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
