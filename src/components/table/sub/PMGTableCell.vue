<script setup lang="ts">
import { inject, computed } from "vue";

const table = inject<any>("pmgTable");
const props = defineProps<{
  align?: "left" | "center" | "right";
  sticky?: "left" | "right" | boolean;
}>();

const base = "px-6 py-4 border-r border-pmg-200 last:border-r-0 text-pmg-700";

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

const stickyClass = computed(() => {
  if (
    props.sticky === "left" ||
    (props.sticky === true && table?.stickyFirstColumn?.value)
  ) {
    return "sticky left-0 z-10 shadow-lg bg-white";
  }
  if (
    props.sticky === "right" ||
    (props.sticky === true && table?.stickyLastColumn?.value)
  ) {
    return "sticky right-0 z-10 shadow-lg bg-white";
  }
  return "";
});
</script>

<template>
  <td :class="[base, alignClass, stickyClass]">
    <slot />
  </td>
</template>
