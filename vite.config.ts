import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import typescript2 from "rollup-plugin-typescript2";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      formats: ["es", "umd"],
      name: "pmg-library",
      fileName: "pmg-library",
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/main.ts"),
      },
      external: ["vue"],
      output: {
        exports: "named",

        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
