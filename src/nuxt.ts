import { defineNuxtModule, addComponent } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "pmg-library",
    configKey: "pmgLibrary",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  setup(_options, nuxt: any) {
    nuxt.options.build.transpile ??= [];
    if (!nuxt.options.build.transpile.includes("vee-validate")) {
      nuxt.options.build.transpile.push("vee-validate");
    }

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

    addComponent({
      name: "PMGPhoneInput",
      export: "PMGPhoneInput",
      filePath: "pmg-library",
    });

    addComponent({
      name: "PMGTableHeader",
      export: "PMGTableHeader",
      filePath: "pmg-library",
    });

    addComponent({
      name: "PMGTableHeaderCell",
      export: "PMGTableHeaderCell",
      filePath: "pmg-library",
    });

    addComponent({
      name: "PMGTableRow",
      export: "PMGTableRow",
      filePath: "pmg-library",
    });

    addComponent({
      name: "PMGTableCell",
      export: "PMGTableCell",
      filePath: "pmg-library",
    });

    addComponent({
      name: "PMGTable",
      export: "PMGTable",
      filePath: "pmg-library",
    });

    addComponent({
      name: "PMGTableBody",
      export: "PMGTableBody",
      filePath: "pmg-library",
    });
  },
});
