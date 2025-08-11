import type { App } from "vue";
import PMGButton from "./components/button/PMGButton.vue";
import PMGInput from "./components/form/PMGInput.vue";
import PMGTable from "./components/table/PMGTable.vue";

// Export for individual imports
export { PMGButton, PMGInput, PMGTable };

// Export for plugin installation
export default {
  install(app: App) {
    app.component("PMGButton", PMGButton);
    app.component("PMGInput", PMGInput);
    app.component("PMGTable", PMGTable);
  },
};
