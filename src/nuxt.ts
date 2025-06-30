import { createResolver, defineNuxtModule, addComponent } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

interface ModuleOptions {
  prefix?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "pmg-library",
    configKey: "pmgLibrary",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  defaults: {
    prefix: "",
  },
  setup(_options: ModuleOptions, nuxt: any) {
    // Auto-import components
    addComponent({
      name: "PMGButton",
      filePath: resolve("./components/button/PMGButton.vue"),
    });

    addComponent({
      name: "PMGInput",
      filePath: resolve("./components/form/PMGInput.vue"),
    });

    // Add CSS
    nuxt.options.css.push(resolve("./index.css"));
  },
});
