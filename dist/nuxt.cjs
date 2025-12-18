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
var import_kit = require("@nuxt/kit");
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
    nuxt.options.build = nuxt.options.build || {};
    nuxt.options.build.transpile = nuxt.options.build.transpile || [];
    if (!nuxt.options.build.transpile.includes("vee-validate")) {
      nuxt.options.build.transpile.push("vee-validate");
    }
    (0, import_kit.addComponent)({
      name: "PMGButton",
      export: "PMGButton",
      filePath: "pmg-library"
    });
    (0, import_kit.addComponent)({
      name: "PMGInput",
      export: "PMGInput",
      filePath: "pmg-library"
    });
    (0, import_kit.addComponent)({
      name: "PMGPhoneInput",
      export: "PMGPhoneInput",
      filePath: "pmg-library"
    });
    (0, import_kit.addComponent)({
      name: "PMGTableHeader",
      export: "PMGTableHeader",
      filePath: "pmg-library"
    });
    (0, import_kit.addComponent)({
      name: "PMGTableHeaderCell",
      export: "PMGTableHeaderCell",
      filePath: "pmg-library"
    });
    (0, import_kit.addComponent)({
      name: "PMGTableRow",
      export: "PMGTableRow",
      filePath: "pmg-library"
    });
    (0, import_kit.addComponent)({
      name: "PMGTableCell",
      export: "PMGTableCell",
      filePath: "pmg-library"
    });
  }
});
