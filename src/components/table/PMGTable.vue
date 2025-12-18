<script setup lang="ts">
import { ref, computed, provide, PropType } from "vue";
import PMGTableInfinite from "./PMGTableInfinite.vue";

const props = defineProps({
  striped: { type: Boolean, default: false },
  sticky: { type: Boolean, default: false },
  wrapperClass: { type: String, default: "" },
  tableClass: { type: String, default: "" },
  selectable: { type: Boolean, default: false },
  rowKey: { type: String, default: "id" },
  infinite: { type: Function as PropType<() => void>, default: undefined },
  loading: { type: Boolean, default: false },
});

// Selection state (used for manual composition mode)
const registeredRowKeys = ref(new Set<string | number>());
const internalSelected = ref(new Set<string | number>());

function registerRow(key: string | number) {
  if (key == null) return;
  registeredRowKeys.value.add(key);
}

function unregisterRow(key: string | number) {
  if (key == null) return;
  registeredRowKeys.value.delete(key);
  internalSelected.value.delete(key);
}

function toggleRowSelection(key: string | number) {
  if (internalSelected.value.has(key)) internalSelected.value.delete(key);
  else internalSelected.value.add(key);
}

function isRowSelected(key: string | number) {
  return internalSelected.value.has(key);
}

const allSelected = computed(() => {
  const keys = Array.from(registeredRowKeys.value);
  return keys.length > 0 && keys.every((k) => internalSelected.value.has(k));
});

const isEmpty = computed(() => registeredRowKeys.value.size === 0);

function selectAll(checked: boolean) {
  if (checked) {
    for (const k of registeredRowKeys.value) internalSelected.value.add(k);
  } else {
    for (const k of Array.from(registeredRowKeys.value))
      internalSelected.value.delete(k);
  }
}

provide("pmgTable", {
  selectable: props.selectable,
  registerRow,
  unregisterRow,
  toggleRowSelection,
  isRowSelected,
  selectAll,
  allSelected,
});

function handleInView() {
  try {
    props.infinite && props.infinite();
  } catch (e) {
    // swallow errors from user-provided callback
    // (parent components can handle their own errors)
  }
}
</script>

<template>
  <div :class="['w-full overflow-auto', wrapperClass]">
    <table
      class="min-w-full border-collapse bg-white"
      :class="[tableClass, { striped: striped, sticky: sticky }]"
    >
      <slot />
    </table>

    <div v-if="props.loading" class="pmg-table-skeleton mt-3 px-2">
      <div class="animate-pulse space-y-2">
        <div class="h-6 bg-pmg-50/50 rounded"></div>
      </div>
    </div>

    <div v-if="isEmpty" class="pmg-table-empty p-4 text-center text-gray-500">
      <slot name="empty">No items</slot>
    </div>
  </div>
  <PMGTableInfinite @in-view="handleInView" />
</template>

<style scoped lang="postcss">
/* Striped rows (use deep selector so it reaches into child components) */
.striped ::v-deep tbody tr:nth-child(odd) {
  @apply bg-pmg-200;
}
</style>
