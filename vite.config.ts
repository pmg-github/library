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
      external: ["vue", "vee-validate"],
      output: {
        globals: {
          vue: "Vue",
          "vee-validate": "VeeValidate",
        },
        exports: "named",
      },
    },
  },
});
