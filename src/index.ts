import type { App } from "vue";
import PMGButton from "./components/button/PMGButton.vue";
import PMGInput from "./components/form/PMGInput.vue";
import PMGTable from "./components/table/PMGTable.vue";
import PMGTableHeader from "./components/table/sub/PMGTableHeader.vue";
import PMGTableBody from "./components/table/sub/PMGTableBody.vue";
import PMGTableRow from "./components/table/sub/PMGTableRow.vue";
import PMGTableHeaderCell from "./components/table/sub/PMGTableHeaderCell.vue";
import PMGTableCell from "./components/table/sub/PMGTableCell.vue";

// Export for individual imports
export {
  PMGButton,
  PMGInput,
  PMGTable,
  PMGTableHeader,
  PMGTableBody,
  PMGTableRow,
  PMGTableHeaderCell,
  PMGTableCell,
};

// Export for plugin installation
export default {
  install(app: App) {
    app.component("PMGButton", PMGButton);
    app.component("PMGInput", PMGInput);
    app.component("PMGTable", PMGTable);
    app.component("PMGTableHeader", PMGTableHeader);
    app.component("PMGTableBody", PMGTableBody);
    app.component("PMGTableRow", PMGTableRow);
    app.component("PMGTableHeaderCell", PMGTableHeaderCell);
    app.component("PMGTableCell", PMGTableCell);
  },
};
