# PMGTable

Lightweight, tailwind-styled table components.

Usage (automatic rendering):

```vue
<script setup>
import PMGTable from "./PMGTable.vue";
const columns = [
  { key: "id", label: "ID", sortable: true },
  { key: "name", label: "Name" },
];
const items = [{ id: 1, name: "Alice" }];
</script>

<PMGTable :columns="columns" :items="items" selectable />
```

You can also compose the table manually using the subcomponents `PMGTableHeader`, `PMGTableBody`, `PMGTableRow`, and `PMGTableCell`.

Slots:

- Per-column named slots: `cell-{key}` — receives `{ item, column, index }`.

Example customizing the `name` column:

```vue
<PMGTable :columns="columns" :items="items">
  <template #cell-name="{ item }">
    <a :href="`/user/${item.id}`" class="text-blue-600">{{ item.name }}</a>
  </template>
</PMGTable>
```

Emits & events:

- `row-click` (item) — emitted by `PMGTableRow` when clicked or activated via keyboard.
- Selection is available via the provided context for manual composition; when using `selectable` the header checkbox toggles all visible rows.

Notes:

- `PMGTable` supports both automatic rendering (pass `columns` + `items`) and manual composition via slots.
- Styling is Tailwind-based; override classes via `wrapperClass` and `tableClass` props on `PMGTable`.
