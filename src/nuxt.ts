import { defineNuxtModule, addComponent } from "@nuxt/kit";

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
  setup(_options: ModuleOptions) {
    addComponent({
      name: "PMGButton",
      export: "PMGButton",
      filePath: "pmg-library",
    });

    addComponent({
      name: "PMGInput",
      export: "PMGInput",
      filePath: "pmg-library",
    });

    // Add CSS from the library
  },
});
