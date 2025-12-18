<script setup lang="ts">
import { ref, computed, provide, PropType } from "vue";
import PMGTableInfinite from "./PMGTableInfinite.vue";

const props = defineProps({
  striped: { type: Boolean, default: false },
  sticky: { type: Boolean, default: false },
  wrapperClass: { type: String, default: "" },
  tableClass: { type: String, default: "" },
  selectable: { type: Boolean, default: false },
  // keep props minimal
  rowKey: { type: String, default: "id" },
  infinite: { type: Function as PropType<() => void>, default: undefined },
  loading: { type: Boolean, default: false },
});

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

// Improved: isEmpty checks for presence of data rows in the default slot
import { useSlots } from "vue";
const slots = useSlots();
const isEmpty = computed(() => {
  // If there are no registered row keys, and no default slot content, consider empty
  if (registeredRowKeys.value.size > 0) return false;
  // If slot is provided, check if it renders any content
  const slotContent = slots.default ? slots.default() : [];
  // Filter out empty text nodes and comments
  return (
    slotContent.filter(
      (vnode) =>
        vnode.type !== Comment &&
        !(typeof vnode.children === "string" && vnode.children.trim() === "")
    ).length === 0
  );
});

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
  sticky: props.sticky,
  registerRow,
  unregisterRow,
  toggleRowSelection,
  isRowSelected,
  selectAll,
  allSelected,
});
function handleInView() {
  try {
    if (!props.infinite) return;
    // call the provided handler; consumers manage loading if needed
    (props.infinite as any)();
  } catch (e) {
    // swallow user callback errors
  }
}
</script>

<template>
  <div :class="['w-full', wrapperClass, { 'overflow-auto': !props.sticky }]">
    <table
      class="min-w-full border-collapse bg-white"
      :class="[tableClass, { striped: striped }]"
    >
      <slot />
    </table>

    <PMGTableInfinite
      :disabled="props.loading"
      :visible="props.loading"
      @in-view="handleInView"
    />
    <div v-if="isEmpty" class="pmg-table-empty p-4 text-center text-gray-500">
      <slot name="empty">No items</slot>
    </div>
  </div>
</template>

<style scoped lang="postcss">
/* Striped rows (use deep selector so it reaches into child components) */
.striped ::v-deep tbody tr:nth-child(odd) {
  @apply bg-pmg-200;
}
</style>
