export default defineNuxtConfig({
  css: ["./assets/index.css"],

  components: [
    {
      path: "./components",
      prefix: "Pmg",
      ignore: ["**/tiptap/**"],
    },
    {
      path: "./components/tiptap",
      prefix: "PmgTiptap",
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
