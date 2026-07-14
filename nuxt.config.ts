import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  components: [
    {
      path: fileURLToPath(new URL("./components", import.meta.url)),
      prefix: "PMG",
      ignore: ["**/tiptap/**"],
    },
    {
      path: fileURLToPath(new URL("./components/tiptap", import.meta.url)),
      prefix: "Tiptap",
    },
  ],

  imports: {
    dirs: [fileURLToPath(new URL("./composables", import.meta.url))],
  },

  build: {
    transpile: ["vee-validate", "@tiptap/vue-3", "@headlessui/vue"],
  },

  compatibilityDate: "2026-07-08",
});
