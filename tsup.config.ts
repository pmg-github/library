import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/nuxt.ts"],
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",
  external: ["@nuxt/kit", "@nuxt/schema", "vue"],
  clean: false, // Don't clean since vite build runs first
  shims: true, // Add Node.js shims for CJS
  cjsInterop: true,
});
