<template>
  <tr
    :class="['border-b border-pmg-100', className]"
    @click="onClick"
    role="row"
    tabindex="0"
    @keydown.enter.prevent="onClick"
  >
    <td v-if="table?.selectable" class="px-4 py-2">
      <input
        type="checkbox"
        :checked="isChecked"
        @change.stop.prevent="toggleSelection"
        :aria-label="`Select row ${keyToUse}`"
      />
    </td>
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { inject, computed, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  className: { type: String, default: "" },
  item: { type: Object as () => any, default: null },
  rowKey: { type: String, default: "id" },
});

const emits = defineEmits<{
  (e: "row-click", item: any): void;
}>();

const table = inject<any>("pmgTable", null);

const keyToUse = computed(() =>
  props.item ? props.item[props.rowKey as string] : undefined
);

onMounted(() => {
  if (table && table.registerRow && keyToUse.value != null)
    table.registerRow(keyToUse.value);
});

onBeforeUnmount(() => {
  if (table && table.unregisterRow && keyToUse.value != null)
    table.unregisterRow(keyToUse.value);
});

const isChecked = computed(() => {
  if (!table) return false;
  return table.isRowSelected ? table.isRowSelected(keyToUse.value) : false;
});

function toggleSelection() {
  if (!table || !keyToUse.value) return;
  table.toggleRowSelection && table.toggleRowSelection(keyToUse.value);
}

function onClick() {
  emits("row-click", props.item);
}
</script>

<style scoped></style>
