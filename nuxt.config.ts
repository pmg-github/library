import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: "src",
  css: ["./src/index.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  build: {
    transpile: ["vee-validate", "@tiptap/vue-3"],
  },
  compatibilityDate: "2026-07-08",
});
