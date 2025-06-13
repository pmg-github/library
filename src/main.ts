import type { App } from "vue";
import PMGButton from "./components/button/PMGButton.vue";

export default {
  install: (app: App) => {
    app.component("PMGButton", PMGButton);
  },
};

export { PMGButton };
