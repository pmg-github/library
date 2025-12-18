<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

const props = defineProps({
  rootSelector: { type: String, default: "" },
  rootMargin: { type: String, default: "0px" },
  threshold: { type: [Number, Array], default: 0.1 },
  disabled: { type: Boolean, default: false },
  visible: { type: Boolean, default: false },
});

const emit = defineEmits<{
  (e: "in-view"): void;
}>();

const sentinel = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

function getScrollParent(el: Element | null): Element | null {
  let parent = el?.parentElement || null;
  while (parent && parent !== document.documentElement) {
    const style = getComputedStyle(parent);
    const overflow = `${style.overflow}${style.overflowY}${style.overflowX}`;
    if (/auto|scroll/.test(overflow)) return parent;
    parent = parent.parentElement;
  }
  return null;
}

function createObserver() {
  if (observer) observer.disconnect();
  if (props.disabled) return;
  if (
    typeof window === "undefined" ||
    typeof IntersectionObserver === "undefined"
  )
    return;

  let root: Element | null = null;
  if (props.rootSelector) {
    try {
      root = document.querySelector(props.rootSelector) as Element | null;
    } catch (e) {
      root = null;
    }
  }

  // If no explicit root, try to find nearest scrollable ancestor once sentinel is available
  if (!root && sentinel.value) root = getScrollParent(sentinel.value) || null;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          emit("in-view");
        }
      }
    },
    {
      root: root || null,
      rootMargin: props.rootMargin,
      threshold: props.threshold as any,
    }
  );

  if (sentinel.value) observer.observe(sentinel.value);
}

onMounted(() => createObserver());
onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});

watch(
  () => props.disabled,
  (v) => {
    if (v) {
      if (observer) observer.disconnect();
    } else {
      createObserver();
    }
  }
);
</script>

<template>
  <div>
    <div
      ref="sentinel"
      :class="[
        'pmg-table-infinite-sentinel',
        { 'pmg-table-infinite-visible': props.visible },
      ]"
      aria-hidden="true"
    >
      <template v-if="props.visible">
        <div class="pmg-table-skeleton mt-3 px-2">
          <div class="animate-pulse space-y-2">
            <div class="h-6 bg-pmg-50/50 rounded"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.pmg-table-infinite-sentinel {
  height: 1px;
  width: 100%;
}
</style>
