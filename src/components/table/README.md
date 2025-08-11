# PMGTable Component

A comprehensive, responsive table component for Vue 3 applications with advanced features like sorting, selection, sticky columns, and custom cell rendering.

## Features

- ✅ **Responsive Design**: Automatically adapts to different screen sizes
- ✅ **Row Selection**: Single or multiple row selection with checkboxes
- ✅ **Sorting**: Column-based sorting with visual indicators
- ✅ **Sticky Columns**: Pin first and/or last columns during horizontal scroll
- ✅ **Sticky Header**: Keep header visible during vertical scroll
- ✅ **Custom Cell Rendering**: Use slots for custom content in cells
- ✅ **Loading States**: Built-in loading and empty state handling
- ✅ **Flexible Styling**: Multiple size variants and styling options
- ✅ **TypeScript Support**: Full type safety with TypeScript

## Basic Usage

```vue
<template>
  <PMGTable
    :columns="columns"
    :data="data"
    :selectable="true"
    :sortable="true"
  />
</template>

<script setup lang="ts">
import { PMGTable } from "pmg-library";
import type { TableColumn, TableRow } from "pmg-library";

const columns: TableColumn[] = [
  { key: "id", label: "ID", sortable: true, width: "80px", type: "number" },
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email", sortable: true },
  { key: "status", label: "Status", align: "center" },
];

const data: TableRow[] = [
  {
    id: 1,
    _selectionKey: "user-1", // Optional: custom selection key
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  // ... more data
];
</script>
```

## Props

### Core Props

| Prop      | Type            | Default  | Description                 |
| --------- | --------------- | -------- | --------------------------- |
| `columns` | `TableColumn[]` | Required | Array of column definitions |
| `data`    | `TableRow[]`    | `[]`     | Array of data rows          |

### Selection Props

| Prop         | Type       | Default | Description                  |
| ------------ | ---------- | ------- | ---------------------------- |
| `selected`   | `string[]` | `[]`    | Array of selected row keys   |
| `selectable` | `boolean`  | `false` | Enable row selection         |
| `multiple`   | `boolean`  | `false` | Allow multiple row selection |

### Sorting Props

| Prop            | Type              | Default | Description                 |
| --------------- | ----------------- | ------- | --------------------------- |
| `sortable`      | `boolean`         | `false` | Enable global sorting       |
| `sortKey`       | `string`          | `""`    | Currently sorted column key |
| `sortDirection` | `"asc" \| "desc"` | `"asc"` | Sort direction              |

### Sticky Props

| Prop                | Type      | Default | Description                               |
| ------------------- | --------- | ------- | ----------------------------------------- |
| `stickyFirstColumn` | `boolean` | `false` | Pin first column during horizontal scroll |
| `stickyLastColumn`  | `boolean` | `false` | Pin last column during horizontal scroll  |
| `stickyHeader`      | `boolean` | `false` | Pin header during vertical scroll         |

### Layout Props

| Prop           | Type                   | Default               | Description                           |
| -------------- | ---------------------- | --------------------- | ------------------------------------- |
| `size`         | `"sm" \| "md" \| "lg"` | `"md"`                | Table size variant                    |
| `striped`      | `boolean`              | `false`               | Alternate row background colors       |
| `bordered`     | `boolean`              | `false`               | Add borders around table              |
| `hover`        | `boolean`              | `true`                | Highlight rows on hover               |
| `responsive`   | `boolean`              | `true`                | Enable horizontal scrolling           |
| `loading`      | `boolean`              | `false`               | Show loading state                    |
| `maxHeight`    | `string`               | `""`                  | Maximum height for vertical scrolling |
| `emptyMessage` | `string`               | `"No data available"` | Message when no data                  |

## Events

| Event                  | Payload                                      | Description                       |
| ---------------------- | -------------------------------------------- | --------------------------------- |
| `bl-sort`              | `string[]`                                   | Emitted when sorting changes      |
| `bl-row-select`        | `string[]`                                   | Emitted when selection changes    |
| `sort`                 | `(column: string, direction: SortDirection)` | Emitted on column sort            |
| `rowClick`             | `(row: TableRow, index: number)`             | Emitted on row click              |
| `update:selected`      | `string[]`                                   | v-model update for selection      |
| `update:sortKey`       | `string`                                     | v-model update for sort key       |
| `update:sortDirection` | `SortDirection`                              | v-model update for sort direction |

## Column Definition

```typescript
interface TableColumn {
  key: string; // Data property key
  label: string; // Column header text
  sortable?: boolean; // Enable sorting for this column
  width?: string; // Fixed column width (e.g., "120px")
  minWidth?: string; // Minimum column width
  align?: "left" | "center" | "right"; // Text alignment
  type?: "text" | "number" | "date" | "boolean" | "custom"; // Data type
  sticky?: boolean; // Make column sticky (future enhancement)
  disabled?: boolean; // Disable interactions (future enhancement)
}
```

## Custom Cell Rendering

Use named slots to customize cell content:

```vue
<template>
  <PMGTable :columns="columns" :data="data">
    <!-- Custom status cell -->
    <template #cell-status="{ value, row, index, column }">
      <span
        :class="[
          'px-2 py-1 rounded-full text-xs font-medium',
          value === 'Active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800',
        ]"
      >
        {{ value }}
      </span>
    </template>

    <!-- Custom actions cell -->
    <template #cell-actions="{ row }">
      <div class="flex space-x-2">
        <button
          @click="editUser(row)"
          class="text-blue-600 hover:text-blue-800"
        >
          Edit
        </button>
        <button
          @click="deleteUser(row)"
          class="text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
    </template>
  </PMGTable>
</template>
```

## Advanced Example

```vue
<template>
  <PMGTable
    v-model:selected="selectedRows"
    v-model:sort-key="currentSortKey"
    v-model:sort-direction="currentSortDirection"
    :columns="columns"
    :data="employees"
    :selectable="true"
    :multiple="true"
    :sortable="true"
    :sticky-first-column="true"
    :sticky-header="true"
    :max-height="'500px'"
    striped
    bordered
    @bl-row-select="onRowSelect"
    @sort="onSort"
  >
    <template #cell-avatar="{ value }">
      <img :src="value" class="w-8 h-8 rounded-full" />
    </template>

    <template #cell-salary="{ value }">
      <span class="font-mono">{{ formatCurrency(value) }}</span>
    </template>
  </PMGTable>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PMGTable } from "pmg-library";

const selectedRows = ref<string[]>([]);
const currentSortKey = ref("name");
const currentSortDirection = ref<"asc" | "desc">("asc");

const onRowSelect = (keys: string[]) => {
  console.log("Selected employees:", keys);
};

const onSort = (key: string, direction: "asc" | "desc") => {
  console.log(`Sorting by ${key} in ${direction} order`);
  // Implement your sorting logic here
};
</script>
```

## CSS Custom Properties

The table component supports CSS custom properties for fine-tuning column widths:

```css
.my-table {
  --bl-table-header-cell-width: 200px;
  --bl-table-header-cell-min-width: 100px;
}
```

## Accessibility

- Full keyboard navigation support
- Proper ARIA labels and roles
- Screen reader friendly
- Focus management for selection and sorting
