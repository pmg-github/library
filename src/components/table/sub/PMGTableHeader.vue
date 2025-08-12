<script setup lang="ts">
import { inject, computed } from "vue";

const table = inject<any>("pmgTable");
const props = defineProps<{ sticky?: boolean }>();

const headerClasses = computed(() => [
  "bg-pmg-50 border-b border-pmg-200",
  props.sticky ?? table?.stickyHeader?.value
    ? "sticky top-0 z-10 shadow-sm"
    : "",
]);
</script>

<template>
  <thead :class="headerClasses">
    <slot />
  </thead>
</template>
