<script setup lang="ts">
import { inject, computed } from "vue";

const table = inject<any>("pmgTable");
const props = defineProps<{
  selectionKey?: string;
  disabled?: boolean;
}>();

const isSelected = computed(() => {
  return (
    !!props.selectionKey &&
    table?.internalSelected?.value?.includes(props.selectionKey)
  );
});

const rowClasses = computed(() => [
  "border-b border-pmg-100 last:border-b-0 transition-all duration-200",
  "bg-white",
  table?.hover?.value && !props.disabled
    ? "hover:bg-pmg-50 hover:shadow-sm"
    : "",
  props.disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : "",
  isSelected.value
    ? "bg-pmg-100 border-pmg-300 shadow-sm ring-1 ring-pmg-200"
    : "",
  table?.selectable?.value && !props.disabled ? "cursor-pointer" : "",
]);

function onClick() {
  if (props.disabled) return;
  if (
    table?.selectable?.value &&
    table?.clickToSelect?.value &&
    props.selectionKey
  ) {
    table.toggleRowSelectionByKey?.(props.selectionKey, props.disabled);
  }
}
</script>

<template>
  <tr :class="rowClasses" @click="onClick">
    <slot />
  </tr>
</template>
