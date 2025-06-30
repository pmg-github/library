// src/nuxt.ts
import { defineNuxtModule, addComponent } from "@nuxt/kit";
var nuxt_default = defineNuxtModule({
  meta: {
    name: "pmg-library",
    configKey: "pmgLibrary",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  defaults: {
    prefix: ""
  },
  setup(_options) {
    addComponent({
      name: "PMGButton",
      export: "PMGButton",
      filePath: "pmg-library"
    });
    addComponent({
      name: "PMGInput",
      export: "PMGInput",
      filePath: "pmg-library"
    });
  }
});
export {
  nuxt_default as default
};
