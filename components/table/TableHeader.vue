<template>
  <thead :class="headerClass">
    <tr>
      <TableHeaderCell v-if="table?.selectable" class="w-16">
        <TableHeaderSelect />
      </TableHeaderCell>
      <slot />
    </tr>
  </thead>
</template>

<script setup lang="ts">
import { useAttrs, computed, inject } from "vue";
import TableHeaderCell from "./TableHeaderCell.vue";
import TableHeaderSelect from "./TableHeaderSelect.vue";

const table = inject<any>("pmgTable", null);

const attrs = useAttrs();

const headerClass = computed(() => {
  // If the parent passed any `class`, prefer that; otherwise use the default bg
  const base = [
    "border-b border-pmg-100",
    (attrs as Record<string, any>).class
      ? (attrs as Record<string, any>).class
      : "bg-gray-50",
  ];
  if (table && table.sticky) base.push("sticky w-full top-0 z-[2] shadow-sm");
  return base;
});
</script>

<style scoped lang="postcss"></style>
