"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/nuxt.ts
var nuxt_exports = {};
__export(nuxt_exports, {
  default: () => nuxt_default
});
module.exports = __toCommonJS(nuxt_exports);

// node_modules/tsup/assets/cjs_shims.js
var getImportMetaUrl = () => typeof document === "undefined" ? new URL(`file:${__filename}`).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
var importMetaUrl = /* @__PURE__ */ getImportMetaUrl();

// src/nuxt.ts
var import_kit = require("@nuxt/kit");
var { resolve } = (0, import_kit.createResolver)(importMetaUrl);
var nuxt_default = (0, import_kit.defineNuxtModule)({
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
    (0, import_kit.addComponent)({
      name: "PMGButton",
      filePath: resolve("./components/button/PMGButton.vue")
    });
    (0, import_kit.addComponent)({
      name: "PMGInput",
      filePath: resolve("./components/form/PMGInput.vue")
    });
    nuxt.options.css.push(resolve("./index.css"));
  }
});
