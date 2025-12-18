<template>
  <thead :class="headerClass">
    <tr>
      <slot />
    </tr>
  </thead>
</template>

<script setup lang="ts">
import { useAttrs, computed } from "vue";

const attrs = useAttrs();

const headerClass = computed(() => {
  // If the parent passed any `class`, prefer that; otherwise use the default bg
  return [
    "border-b border-pmg-100",
    (attrs as Record<string, any>).class
      ? (attrs as Record<string, any>).class
      : "bg-pmg-50/50",
  ];
});
</script>

<style scoped lang="postcss">
::deep(table.sticky thead th) {
  position: sticky;
  top: 0;
  z-index: 20;
  background: white;
}
</style>
