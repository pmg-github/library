<script setup lang="ts">
import { ref, computed, provide, PropType, useSlots } from "vue";
import PMGTableInfinite from "./PMGTableInfinite.vue";
import PMGTableHeader from "./PMGTableHeader.vue";
import PMGTableHeaderCell from "./PMGTableHeaderCell.vue";
import PMGTableHeaderSelect from "./PMGTableHeaderSelect.vue";

const props = defineProps({
  striped: { type: Boolean, default: false },
  sticky: { type: Boolean, default: false },
  wrapperClass: { type: String, default: "" },
  tableClass: { type: String, default: "" },
  selectable: { type: Boolean, default: false },
  autoSelectColumn: { type: Boolean, default: true },
  rowKey: { type: String, default: "id" },
  infinite: {
    type: [Function, Object] as PropType<
      (() => any) | { handler: () => any; loading?: boolean }
    >,
    default: undefined,
  },
  loading: { type: Boolean, default: false },
});

const slots = useSlots();

const hasHeaderSlot = computed(() => {
  const vnodes = slots.default ? slots.default() : [];
  return vnodes.some((v) => {
    if (!v) return false;
    const t = (v as any).type;
    if (typeof t === "string") return t === "thead";
    if (t && (t.name === "PMGTableHeader" || t.__name === "PMGTableHeader"))
      return true;
    return false;
  });
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
  autoSelectColumn: props.autoSelectColumn,
  sticky: props.sticky,
  registerRow,
  unregisterRow,
  toggleRowSelection,
  isRowSelected,
  selectAll,
  allSelected,
});
const internalInfiniteLoading = ref(false);

async function handleInView() {
  try {
    if (!props.infinite) return;

    let handler: (() => any) | undefined;
    if (typeof props.infinite === "function")
      handler = props.infinite as () => any;
    else if (
      typeof props.infinite === "object" &&
      typeof (props.infinite as any).handler === "function"
    )
      handler = (props.infinite as any).handler;

    if (!handler) return;

    const res = handler();
    if (res && typeof (res as any).then === "function") {
      internalInfiniteLoading.value = true;
      try {
        await res;
      } catch (e) {
        // swallow user errors
      } finally {
        internalInfiniteLoading.value = false;
      }
    }
  } catch (e) {
    // swallow errors from user-provided callback
  }
}

const effectiveLoading = computed(() => {
  if (props.loading) return true;
  if (internalInfiniteLoading.value) return true;
  if (props.infinite && typeof props.infinite === "object")
    return !!(props.infinite as any).loading;
  return false;
});
</script>

<template>
  <div :class="['w-full', wrapperClass, { 'overflow-auto': !props.sticky }]">
    <table
      class="min-w-full border-collapse bg-white"
      :class="[tableClass, { striped: striped }]"
    >
      <slot />
    </table>

    <div v-if="effectiveLoading" class="pmg-table-skeleton mt-3 px-2">
      <div class="animate-pulse space-y-2">
        <div class="h-6 bg-pmg-50/50 rounded"></div>
      </div>
    </div>

    <div v-if="isEmpty" class="pmg-table-empty p-4 text-center text-gray-500">
      <slot name="empty">No items</slot>
    </div>
    <PMGTableInfinite @in-view="handleInView" />
  </div>
</template>

<style scoped lang="postcss">
/* Striped rows (use deep selector so it reaches into child components) */
.striped ::v-deep tbody tr:nth-child(odd) {
  @apply bg-pmg-200;
}
</style>
