import type { App } from "vue";
import PMGButton from "./components/button/PMGButton.vue";
import PMGInput from "./components/form/PMGInput.vue";
import PMGPhoneInput from "./components/form/PMGPhoneInput.vue";
import PMGTableHeader from "./components/table/PMGTableHeader.vue";
import PMGTableHeaderCell from "./components/table/PMGTableHeaderCell.vue";
import PMGTableRow from "./components/table/PMGTableRow.vue";
import PMGTableCell from "./components/table/PMGTableCell.vue";

// Export for individual imports
export {
  PMGButton,
  PMGInput,
  PMGPhoneInput,
  PMGTableHeader,
  PMGTableHeaderCell,
  PMGTableRow,
  PMGTableCell,
};

// Export for plugin installation
export default {
  install(app: App) {
    app.component("PMGButton", PMGButton);
    app.component("PMGInput", PMGInput);
    app.component("PMGPhoneInput", PMGPhoneInput);
    app.component("PMGTableHeader", PMGTableHeader);
    app.component("PMGTableHeaderCell", PMGTableHeaderCell);
    app.component("PMGTableRow", PMGTableRow);
    app.component("PMGTableCell", PMGTableCell);
  },
};
