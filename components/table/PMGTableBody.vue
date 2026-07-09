<template>
  <tbody>
    <slot />
  </tbody>
</template>

<script setup lang="ts">
// Body is intentionally minimal; rows are rendered by consumers when using
// manual composition. Automatic rendering is handled by `PMGTable`.
</script>

<style scoped></style>
