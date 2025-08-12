<script setup lang="ts">
import { inject, computed } from "vue";

const table = inject<any>("pmgTable");
const props = defineProps<{
  sortKey?: string;
  width?: string;
  minWidth?: string;
  align?: "left" | "center" | "right";
  sticky?: boolean | "left" | "right";
}>();

const base =
  "px-6 py-4 font-semibold text-pmg-800 border-r border-pmg-200 last:border-r-0 bg-pmg-50";

const alignClass = computed(() => {
  switch (props.align) {
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    default:
      return "text-left";
  }
});

const clickable = computed(() => !!(props.sortKey && table?.sortable?.value));

const thClasses = computed(() => [
  base,
  alignClass.value,
  clickable.value
    ? "cursor-pointer hover:bg-pmg-100 select-none transition-all duration-200 hover:shadow-sm"
    : "",
  props.sticky === "right"
    ? "sticky right-0 z-20 bg-pmg-50 shadow-lg"
    : props.sticky || table?.stickyFirstColumn?.value
    ? "sticky left-0 z-20 bg-pmg-50 shadow-lg"
    : "",
]);

function onClick() {
  if (!clickable.value) return;
  table?.setSortByKey?.(props.sortKey);
}
</script>

<template>
  <th
    :class="thClasses"
    :style="{
      width: props.width,
      minWidth: props.minWidth,
      '--pmg-table-header-cell-width': props.width,
      '--pmg-table-header-cell-min-width': props.minWidth,
    }"
    @click="onClick"
  >
    <div class="flex items-center justify-between">
      <span class="font-medium"><slot /></span>
      <span
        v-if="clickable"
        class="ml-3 flex-shrink-0 transition-colors duration-200"
        :class="{
          'text-pmg-600': table?.internalSortKey?.value === props.sortKey,
        }"
      >
        <svg
          v-if="table?.internalSortKey?.value !== props.sortKey"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="text-pmg-400"
        >
          <path d="M8 1l3 3H9v4H7V4H5l3-3zM8 15l-3-3h2V8h2v4h2l-3 3z" />
        </svg>
        <svg
          v-else-if="table?.internalSortDirection?.value === 'asc'"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="text-pmg-600"
        >
          <path d="M8 1l3 3H9v8H7V4H5l3-3z" />
        </svg>
        <svg
          v-else
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
</template>
