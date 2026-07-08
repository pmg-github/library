import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outDir: "dist/types",
      exclude: ["src/nuxt.ts"],
      beforeWriteFile: (filePath, content) => {
        return {
          filePath: filePath.replace(/\/src\//, "/"),
          content,
        };
      },
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "PMGLibrary",
      fileName: "pmg-library",
    },
    rollupOptions: {
      external: ["vue", "vee-validate", "@tiptap/core", "@tiptap/vue-3", "@headlessui/vue"],
      output: {
        globals: {
          vue: "Vue",
          "vee-validate": "VeeValidate",
          "@tiptap/core": "TiptapCore",
          "@tiptap/vue-3": "TiptapVue3",
          "@headlessui/vue": "HeadlessUI",
        },
        exports: "named",
      },
    },
  },
});
