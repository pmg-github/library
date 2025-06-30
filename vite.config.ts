import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ["./components"], // Auto-import components from this directory
    }),
    dts({
      insertTypesEntry: true,
      outDir: "dist/types",
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
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    },
  },
});
