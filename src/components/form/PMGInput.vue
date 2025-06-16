<script setup lang="ts">
import { useField } from "vee-validate";
import { computed, ref, useAttrs } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    type: [String, Number],
    required: false,
  },
  type: {
    type: String,
    default: "text",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
});

const attrs = useAttrs();
const hasRequiredAttr = computed(() => "required" in attrs);
const inputRef = ref<HTMLInputElement | null>(null);

const { value, handleBlur, meta, errorMessage } = useField(
  props.name,
  undefined,
  {
    syncVModel: true,
    validateOnValueUpdate: false,
  }
);
</script>

<template>
  <div class="relative">
    <input
      ref="inputRef"
      @blur="handleBlur($event, true)"
      v-model="value"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder || ' '"
      class="peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all placeholder-shown:border focus:border-2 focus:outline-0"
      :class="
        meta.valid === false && meta.touched
          ? '!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent'
          : '!placeholder-shown:border-gray-500 border-gray-500 border-t-transparent text-gray-500 placeholder-shown:border-t-gray-500 focus:border-gray-500 focus:border-t-transparent '
      "
      v-bind="attrs"
    />

    <label
      v-if="label"
      class="before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight"
      :class="
        meta.valid === false && meta.touched
          ? 'text-red-500 before:border-red-500 after:border-red-500  peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500'
          : 'text-gray-500 before:border-gray-500 after:border-gray-500  peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:!border-gray-500 peer-focus:after:border-t-2 peer-focus:after:!border-gray-500'
      "
    >
      {{ label }}
      <span v-if="hasRequiredAttr"> &#8201;*</span>
    </label>

    <p v-if="errorMessage" class="mt-1 text-xs text-red-500">
      {{ errorMessage }}
    </p>
  </div>
</template>
