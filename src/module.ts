import { defineNuxtModule, addComponent } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "pmg-library",
    configKey: "pmgLibrary",
  },
  setup(_options: any) {
    // Register each component individually
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
  },
});
