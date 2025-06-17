import type { App } from "vue";
import PMGButton from "./components/button/PMGButton.vue";
import PMGInput from "./components/form/PMGInput.vue";

// Export for individual imports
export { PMGButton, PMGInput };

// Export for plugin installation
export default {
  install(app: App) {
    app.component("PMGButton", PMGButton);
    app.component("PMGInput", PMGInput);
  },
};
