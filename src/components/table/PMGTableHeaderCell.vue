<template>
  <th
    :class="[
      'p-4 text-sm font-medium',
      className,
      {
        'text-blue-600': isAscending || isDescending,
        'text-gray-500': !(isAscending || isDescending),
        'opacity-60 pointer-events-none': props.loading,
        'cursor-pointer select-none': sortable,
      },
    ]"
    :style="width ? { width } : undefined"
    @click="onClick"
    @keydown.enter.prevent="onClick"
    role="columnheader"
    :aria-sort="ariaSort || 'none'"
    tabindex="0"
  >
    <div :class="['flex items-center gap-2', justifyClass]">
      <slot />
      <template v-if="sortable || props.loading">
        <span
          v-if="props.loading"
          class="inline-block mr-1 h-3 w-3 border-2 border-t-transparent border-gray-400 rounded-full animate-spin"
          aria-hidden="true"
        ></span>
        <svg v-else class="size-4" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            :class="isAscending ? 'text-blue-600' : 'text-gray-500'"
            d="M7 10l5-5 5 5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            :class="isDescending ? 'text-blue-600' : 'text-gray-500'"
            d="M7 14l5 5 5-5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </div>
  </th>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from "vue";

const props = defineProps({
  align: { type: String as () => "left" | "center" | "right", default: "left" },
  width: { type: String, default: "" },
  className: { type: String, default: "" },
  columnKey: { type: String, default: "" },
  ariaSort: {
    type: String as () => "none" | "ascending" | "descending",
    default: "none",
  },
  loading: { type: Boolean, default: false },
});

const instance = getCurrentInstance();

const emits = defineEmits<{
  (e: "sort", key?: string): void;
}>();

const justifyClass = computed(() => {
  if (props.align === "center") return "justify-center";
  if (props.align === "right") return "justify-end";
  return "justify-start";
});

// Infer sortable: prefer presence of an `@sort` listener, otherwise fall back to prop
const sortable = computed(() => {
  const p = instance?.vnode?.props as Record<string, any> | undefined;
  return Boolean(p && (p.onSort || p["on-sort"]));
});

const isAscending = computed(() => props.ariaSort === "ascending");
const isDescending = computed(() => props.ariaSort === "descending");

function onClick() {
  if (!sortable.value) return;
  emits("sort", props.columnKey || undefined);
}
</script>

<style scoped></style>
