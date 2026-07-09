import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  css: [fileURLToPath(new URL("./assets/index.css", import.meta.url))],

  components: [
    {
      path: "./components",
      prefix: "PMG",
      ignore: ["**/tiptap/**"],
    },
    {
      path: "./components/tiptap",
      prefix: "PMGTiptap",
    },
  ],

  imports: {
    dirs: ["./composables"],
  },

  build: {
    transpile: ["vee-validate", "@tiptap/vue-3", "@headlessui/vue"],
  },

  compatibilityDate: "2026-07-08",
});
