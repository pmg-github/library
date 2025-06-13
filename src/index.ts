import { App } from "vue";
import PMGButton from "./components/button/PMGButton.vue";

export default {
  install: (app: App<Element>) => {
    app.component("PMGButton", PMGButton);
  },
};
