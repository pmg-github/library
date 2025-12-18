<template>
  <td :class="['p-4 text-sm text-gray-700', className]" :colspan="colspan">
    <div :class="['flex items-center', justifyClass]">
      <slot />
    </div>
  </td>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  align: {
    type: String as () => "left" | "center" | "right",
    default: "left",
  },
  colspan: { type: [Number, String], default: 1 },
  className: { type: String, default: "" },
});

const justifyClass = computed(() => {
  if (props.align === "center") return "justify-center";
  if (props.align === "right") return "justify-end";
  return "justify-start";
});
</script>
