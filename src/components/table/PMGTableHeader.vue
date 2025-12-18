<template>
  <thead :class="headerClass">
    <tr>
      <PMGTableHeaderCell v-if="table?.selectable" class="w-16">
        <PMGTableHeaderSelect />
      </PMGTableHeaderCell>
      <slot />
    </tr>
  </thead>
</template>

<script setup lang="ts">
import { useAttrs, computed, inject } from "vue";
import PMGTableHeaderCell from "./PMGTableHeaderCell.vue";
import PMGTableHeaderSelect from "./PMGTableHeaderSelect.vue";
defineOptions({ name: "PMGTableHeader" });

const table = inject<any>("pmgTable", null);

const attrs = useAttrs();

const headerClass = computed(() => {
  // If the parent passed any `class`, prefer that; otherwise use the default bg
  const base = [
    "border-b border-pmg-100",
    (attrs as Record<string, any>).class
      ? (attrs as Record<string, any>).class
      : "bg-pmg-50",
  ];
  if (table && table.sticky) base.push("sticky w-full top-0 z-[2]");
  return base;
});
</script>

<style scoped lang="postcss"></style>
