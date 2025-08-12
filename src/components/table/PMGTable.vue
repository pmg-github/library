<script setup lang="ts">
import { computed, useSlots, ref, watch, provide } from "vue";

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  minWidth?: string;
  align?: "left" | "center" | "right";
  type?: "text" | "number" | "date" | "boolean" | "custom";
  selectionKey?: string;
  sticky?: boolean;
  disabled?: boolean;
}

export interface TableRow {
  [key: string]: any;
  _selectionKey?: string;
  _disabled?: boolean;
}

export type SortDirection = "asc" | "desc";

const props = defineProps({
  columns: {
    type: Array as () => TableColumn[],
    default: () => [],
  },
  data: {
    type: Array as () => TableRow[],
    default: () => [],
  },
  // Selection props
  selected: {
    type: Array as () => string[],
    default: () => [],
  },
  selectable: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  // Sorting props
  sortable: {
    type: Boolean,
    default: false,
  },
  sortKey: {
    type: String,
    default: "",
  },
  sortDirection: {
    type: String as () => SortDirection,
    default: "asc",
  },
  // Sticky props
  stickyFirstColumn: {
    type: Boolean,
    default: false,
  },
  stickyLastColumn: {
    type: Boolean,
    default: false,
  },
  stickyHeader: {
    type: Boolean,
    default: false,
  },
  // Layout props
  loading: {
    type: Boolean,
    default: false,
  },
  striped: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  hover: {
    type: Boolean,
    default: true,
  },
  // Control whether clicking a row toggles selection
  clickToSelect: {
    type: Boolean,
    default: false,
  },
  responsive: {
    type: Boolean,
    default: true,
  },
  emptyMessage: {
    type: String,
    default: "No data available",
  },
  maxHeight: {
    type: String,
    default: "",
  },
});

const emit = defineEmits<{
  "pmg-sort": [sortKeys: string[]];
  "pmg-row-select": [selectedKeys: string[]];
  sort: [column: string, direction: SortDirection];
  rowClick: [row: TableRow, index: number];
  "update:selected": [selectedKeys: string[]];
  "update:sortKey": [key: string];
  "update:sortDirection": [direction: SortDirection];
}>();

const slots = useSlots();

// Internal state for selection management
const internalSelected = ref<string[]>([...props.selected]);
const internalSortKey = ref(props.sortKey);
const internalSortDirection = ref<SortDirection>(props.sortDirection);

// Watch for external changes
watch(
  () => props.selected,
  (newSelected) => {
    internalSelected.value = [...newSelected];
  }
);

watch(
  () => props.sortKey,
  (newSortKey) => {
    internalSortKey.value = newSortKey;
  }
);

watch(
  () => props.sortDirection,
  (newDirection) => {
    internalSortDirection.value = newDirection;
  }
);

const tableClasses = computed(() => [
  "w-full border-collapse text-sm",
  props.bordered ? " overflow-hidden shadow" : "border-b border-pmg-200",
]);

const containerClasses = computed(() => [
  props.responsive ? "overflow-x-auto" : "",
  props.maxHeight ? "overflow-y-auto" : "",
  "relative",
  props.bordered ? " border border-pmg-200 bg-white shadow" : "",
]);

const headerClasses = computed(() => [
  "bg-pmg-50 border-b border-pmg-200",
  props.stickyHeader ? "sticky top-0 z-10 shadow-sm" : "",
]);

// Standard padding for all cells
const cellPadding = "px-6 py-4";

// Selection methods
const getRowSelectionKey = (row: TableRow, index: number): string => {
  return row._selectionKey || row.id?.toString() || index.toString();
};

const isRowSelected = (row: TableRow, index: number): boolean => {
  const key = getRowSelectionKey(row, index);
  return internalSelected.value.includes(key);
};

const toggleRowSelection = (row: TableRow, index: number) => {
  if (!props.selectable || row._disabled) return;

  const key = getRowSelectionKey(row, index);
  const isSelected = internalSelected.value.includes(key);

  if (props.multiple) {
    if (isSelected) {
      internalSelected.value = internalSelected.value.filter((k) => k !== key);
    } else {
      internalSelected.value = [...internalSelected.value, key];
    }
  } else {
    internalSelected.value = isSelected ? [] : [key];
  }

  emit("update:selected", internalSelected.value);
  emit("pmg-row-select", internalSelected.value);
};

const selectAllRows = () => {
  if (!props.selectable || !props.multiple) return;

  const allKeys = props.data
    .filter((row) => !row._disabled)
    .map((row, index) => getRowSelectionKey(row, index));
  const allSelected = allKeys.every((key) =>
    internalSelected.value.includes(key)
  );

  if (allSelected) {
    internalSelected.value = [];
  } else {
    internalSelected.value = allKeys;
  }

  emit("update:selected", internalSelected.value);
  emit("pmg-row-select", internalSelected.value);
};

// Selection helpers for header checkbox in manual mode
const areAllRowsSelected = computed(() => {
  const allKeys = props.data
    .filter((row) => !row._disabled)
    .map((row, index) => getRowSelectionKey(row, index));
  return (
    allKeys.length > 0 &&
    allKeys.every((key) => internalSelected.value.includes(key))
  );
});

const areSomeRowsSelected = computed(() => {
  const someSelected = props.data
    .filter((row) => !row._disabled)
    .map((row, index) => getRowSelectionKey(row, index))
    .some((key) => internalSelected.value.includes(key));
  return someSelected && !areAllRowsSelected.value;
});

// Sorting methods
const handleSort = (column: TableColumn) => {
  if (!column.sortable && !props.sortable) return;

  const newDirection: SortDirection =
    internalSortKey.value === column.key &&
    internalSortDirection.value === "asc"
      ? "desc"
      : "asc";

  internalSortKey.value = column.key;
  internalSortDirection.value = newDirection;

  emit("update:sortKey", column.key);
  emit("update:sortDirection", newDirection);
  emit("sort", column.key, newDirection);
  emit("pmg-sort", [column.key]);
};

const getSortIcon = (column: TableColumn) => {
  if (!column.sortable && !props.sortable) return null;
  if (internalSortKey.value !== column.key) return "unsorted";
  return internalSortDirection.value === "asc" ? "asc" : "desc";
};

// Manual-mode helpers
const setSortByKey = (key?: string) => {
  if (!props.sortable || !key) return;
  const newDirection: SortDirection =
    internalSortKey.value === key && internalSortDirection.value === "asc"
      ? "desc"
      : "asc";
  internalSortKey.value = key;
  internalSortDirection.value = newDirection;
  emit("update:sortKey", key);
  emit("update:sortDirection", newDirection);
  emit("sort", key, newDirection);
  emit("pmg-sort", [key]);
};

const toggleRowSelectionByKey = (key?: string, disabled?: boolean) => {
  if (!props.selectable || !key || disabled) return;
  const isSelected = internalSelected.value.includes(key);
  if (props.multiple) {
    internalSelected.value = isSelected
      ? internalSelected.value.filter((k) => k !== key)
      : [...internalSelected.value, key];
  } else {
    internalSelected.value = isSelected ? [] : [key];
  }
  emit("update:selected", internalSelected.value);
  emit("pmg-row-select", internalSelected.value);
};

const getColumnClasses = (column: TableColumn, index: number) => {
  const classes = [
    cellPadding,
    "font-semibold text-pmg-800 border-r border-pmg-200 last:border-r-0 bg-pmg-50",
    getColumnAlignment(column.align),
    column.sortable || props.sortable
      ? "cursor-pointer hover:bg-pmg-100 select-none transition-all duration-200 hover:shadow-sm"
      : "",
  ];

  // Add sticky classes
  if (props.stickyFirstColumn && index === 0) {
    classes.push("sticky left-0 z-20 bg-pmg-50 shadow-lg");
  }
  if (props.stickyLastColumn && index === props.columns.length - 1) {
    classes.push("sticky right-0 z-20 bg-pmg-50 shadow-lg");
  }

  return classes;
};

const getCellClasses = (
  column: TableColumn,
  index: number,
  _row: TableRow,
  rowIndex: number
) => {
  const classes = [
    cellPadding,
    "border-r border-pmg-200 last:border-r-0 text-pmg-700",
    getColumnAlignment(column.align),
  ];

  // Add sticky classes
  if (props.stickyFirstColumn && index === 0) {
    classes.push("sticky left-0 z-10 shadow-lg");
    // Keep sticky cell background in sync with row state
    if (isRowSelected(_row, rowIndex)) {
      classes.push("bg-pmg-100");
    } else if (props.striped && rowIndex % 2 === 1) {
      classes.push("bg-pmg-25");
    } else {
      classes.push("bg-white");
    }
  }
  if (props.stickyLastColumn && index === props.columns.length - 1) {
    classes.push("sticky right-0 z-10 shadow-lg");
    // Keep sticky cell background in sync with row state
    if (isRowSelected(_row, rowIndex)) {
      classes.push("bg-pmg-100");
    } else if (props.striped && rowIndex % 2 === 1) {
      classes.push("bg-pmg-25");
    } else {
      classes.push("bg-white");
    }
  }

  if (column.disabled) {
    classes.push("opacity-50 cursor-not-allowed");
  }

  return classes;
};

const formatCellValue = (value: any, type: string = "text") => {
  if (value == null) return "";

  switch (type) {
    case "date":
      return new Date(value).toLocaleDateString();
    case "boolean":
      return value ? "Yes" : "No";
    case "number":
      return typeof value === "number" ? value.toLocaleString() : value;
    default:
      return value;
  }
};

const getColumnAlignment = (align: string = "left") => {
  switch (align) {
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    default:
      return "text-left";
  }
};

// Provide context for manual subcomponents
provide("pmgTable", {
  internalSelected,
  internalSortKey,
  internalSortDirection,
  selectable: computed(() => props.selectable),
  multiple: computed(() => props.multiple),
  sortable: computed(() => props.sortable),
  striped: computed(() => props.striped),
  hover: computed(() => props.hover),
  clickToSelect: computed(() => props.clickToSelect),
  stickyFirstColumn: computed(() => props.stickyFirstColumn),
  stickyLastColumn: computed(() => props.stickyLastColumn),
  areAllRowsSelected,
  areSomeRowsSelected,
  selectAllRows,
  toggleRowSelectionByKey,
  setSortByKey,
});
</script>

<template>
  <div :class="containerClasses" :style="{ maxHeight }">
    <table :class="tableClasses">
      <template v-if="slots.default">
        <slot />
      </template>
      <!-- Header -->
      <thead v-else :class="headerClasses">
        <tr>
          <!-- Selection header -->
          <th
            v-if="selectable"
            :class="[
              cellPadding,
              'font-semibold text-pmg-800 border-r border-pmg-200 w-12 bg-pmg-50',
              stickyFirstColumn ? 'sticky left-0 z-20 bg-pmg-50 shadow-lg' : '',
            ]"
          >
            <template v-if="multiple">
              <input
                type="checkbox"
                :checked="areAllRowsSelected"
                :indeterminate="areSomeRowsSelected"
                @change="selectAllRows"
                class="size-4 text-pmg-600 bg-white border-2 border-pmg-300 focus:ring-pmg-500 focus:ring-2 transition-all duration-200 hover:border-pmg-400"
              />
            </template>
          </th>

          <th
            v-for="(column, index) in columns"
            :key="column.key"
            :class="getColumnClasses(column, selectable ? index + 1 : index)"
            :style="{
              width: column.width,
              minWidth: column.minWidth,
              '--pmg-table-header-cell-width': column.width,
              '--pmg-table-header-cell-min-width': column.minWidth,
            }"
            @click="handleSort(column)"
          >
            <div class="flex items-center justify-between">
              <span class="font-medium">{{ column.label }}</span>
              <span
                v-if="column.sortable || sortable"
                class="ml-3 flex-shrink-0 transition-colors duration-200"
                :class="{ 'text-pmg-600': internalSortKey === column.key }"
              >
                <!-- Unsorted (both arrows) -->
                <svg
                  v-if="getSortIcon(column) === 'unsorted'"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="text-pmg-400"
                >
                  <path d="M8 1l3 3H9v4H7V4H5l3-3zM8 15l-3-3h2V8h2v4h2l-3 3z" />
                </svg>

                <!-- Sort Ascending -->
                <svg
                  v-else-if="getSortIcon(column) === 'asc'"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="text-pmg-600"
                >
                  <path d="M8 1l3 3H9v8H7V4H5l3-3z" />
                </svg>

                <!-- Sort Descending -->
                <svg
                  v-else-if="getSortIcon(column) === 'desc'"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="text-pmg-600"
                >
                  <path d="M8 15l-3-3h2V4h2v8h2l-3 3z" />
                </svg>
              </span>
            </div>
          </th>
        </tr>
      </thead>

      <!-- Body -->
      <tbody v-if="!slots.default">
        <!-- Loading State -->
        <tr v-if="loading">
          <td
            :colspan="columns.length + (selectable ? 1 : 0)"
            :class="[cellPadding, 'text-center text-pmg-500']"
          >
            <div class="flex items-center justify-center space-x-4 py-16">
              <svg
                class="animate-spin h-6 w-6 text-pmg-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span class="text-base font-medium text-pmg-700"
                >Loading data...</span
              >
            </div>
          </td>
        </tr>

        <!-- Empty State -->
        <tr v-else-if="data.length === 0">
          <td
            :colspan="columns.length + (selectable ? 1 : 0)"
            :class="[cellPadding, 'text-center text-pmg-500']"
          >
            <div class="py-16">
              <svg
                class="mx-auto h-16 w-16 text-pmg-300 mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4m-4 0H9m11 0a2 2 0 01-2 2m-4 0H9m0 0H7m2 0v4m6-4v4m2-4v4"
                />
              </svg>
              <slot name="empty">
                <h3 class="text-lg font-semibold text-pmg-800 mb-2 text-center">
                  No data available
                </h3>
                <p class="text-base text-pmg-500 text-center">
                  {{ emptyMessage }}
                </p>
              </slot>
            </div>
          </td>
        </tr>

        <!-- Data Rows -->
        <tr
          v-else
          v-for="(row, rowIndex) in data"
          :key="getRowSelectionKey(row, rowIndex)"
          :class="[
            'border-b border-pmg-100 last:border-b-0 transition-all duration-200',
            striped && rowIndex % 2 === 1 ? 'bg-pmg-25' : 'bg-white',
            hover && !row._disabled
              ? 'hover:bg-pmg-50 hover:shadow-sm transition-all duration-200'
              : '',
            // no row click-to-select when selectable; keep cursor default
            isRowSelected(row, rowIndex)
              ? 'bg-pmg-100 border-pmg-300 shadow-sm ring-1 ring-pmg-200'
              : '',
            row._disabled ? 'opacity-60 cursor-not-allowed bg-slate-50' : '',
          ]"
          @click="!row._disabled ? emit('rowClick', row, rowIndex) : undefined"
        >
          <!-- Selection cell -->
          <td
            v-if="selectable"
            :class="
              getCellClasses(
                { key: '_selection', label: '', align: 'center' },
                0,
                row,
                rowIndex
              )
            "
          >
            <input
              type="checkbox"
              :checked="isRowSelected(row, rowIndex)"
              :disabled="row._disabled"
              @click.stop
              @change="toggleRowSelection(row, rowIndex)"
              class="size-4 text-pmg-600 bg-white border-2 border-pmg-300 focus:ring-pmg-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:border-pmg-400"
            />
          </td>

          <td
            v-for="(column, colIndex) in columns"
            :key="column.key"
            :class="
              getCellClasses(
                column,
                selectable ? colIndex + 1 : colIndex,
                row,
                rowIndex
              )
            "
          >
            <!-- Custom Cell Slot -->
            <slot
              v-if="slots[`cell-${column.key}`]"
              :name="`cell-${column.key}`"
              :value="row[column.key]"
              :row="row"
              :index="rowIndex"
              :column="column"
            />

            <!-- Default Cell Content -->
            <span v-else class="font-medium">
              {{ formatCellValue(row[column.key], column.type) }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
