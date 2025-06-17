<script setup lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "PMGButton",
});
defineProps({
  disabled: { type: Boolean, default: false },
  size: {
    type: String as () => "sm" | "md" | "lg",
    default: "md",
  },
  theme: {
    type: String as () =>
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger"
      | "default",
    default: "default",
  },
});
defineEmits(["click"]);
</script>
<template>
  <button
    :disabled="disabled"
    :class="[
      'px-4 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      size === 'sm'
        ? 'text-sm'
        : size === 'md'
        ? 'text-base'
        : size === 'lg'
        ? 'text-lg'
        : '',
      theme === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-600' : '',
      theme === 'secondary' ? 'bg-gray-500 text-white hover:bg-gray-600' : '',
      theme === 'success' ? 'bg-green-500 text-white hover:bg-green-600' : '',
      theme === 'warning' ? 'bg-yellow-500 text-white hover:bg-yellow-600' : '',
      theme === 'danger' ? 'bg-red-500 text-white hover:bg-red-600' : '',
      theme === 'default' ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
