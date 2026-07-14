import type { StorybookConfig } from "@storybook/vue3-vite";
import { mergeConfig } from "vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "@tailwindcss/postcss";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      css: {
        postcss: {
          plugins: [tailwindcss(), autoprefixer()],
        },
      },
    });
  },
};
export default config;
