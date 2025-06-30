// src/nuxt.ts
import { createResolver, defineNuxtModule, addComponent } from "@nuxt/kit";
var { resolve } = createResolver(import.meta.url);
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
  setup(_options, nuxt) {
    addComponent({
      name: "PMGButton",
      filePath: resolve("./components/button/PMGButton.vue")
    });
    addComponent({
      name: "PMGInput",
      filePath: resolve("./components/form/PMGInput.vue")
    });
    nuxt.options.css.push(resolve("./index.css"));
  }
});
export {
  nuxt_default as default
};
