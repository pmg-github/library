<script setup lang="ts">
import { inject } from "vue";

const table = inject<any>("pmgTable", null);

function onChange(e: Event) {
  const checked = (e.target as HTMLInputElement).checked;
  table?.selectAll && table.selectAll(checked);
}
</script>
<template>
  <div>
    <input
      type="checkbox"
      :checked="table?.allSelected"
      @change="onChange"
      aria-label="Select all rows"
    />
  </div>
</template>

<style scoped></style>
