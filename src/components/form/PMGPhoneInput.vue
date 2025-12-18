<script setup lang="ts">
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "reka-ui";
import { useField } from "vee-validate";
import { ref, computed, watch, useAttrs, getCurrentInstance } from "vue";

// removed unused defineModel()

// Phone number formats for various countries
const countries = [
  {
    code: "BE",
    country: "België",
    format: "0999 99 99 99",
    maxLength: 10,
    regex: /^\d{10}$/,
    prefix: "+32",
  },
  {
    code: "NL",
    country: "Nederland",
    format: "999 999 9999",
    maxLength: 10,
    regex: /^\d{10}$/,
    prefix: "+31",
  },
  {
    code: "FR",
    country: "Frankrijk",
    format: "99 99 99 99 99",
    maxLength: 10,
    regex: /^\d{10}$/,
    prefix: "+33",
  },
  {
    code: "DE",
    country: "Duitsland",
    format: "999 99999999",
    maxLength: 11,
    regex: /^\d{11}$/,
    prefix: "+49",
  },
  {
    code: "LU",
    country: "Luxemburg",
    format: "999 999 999",
    maxLength: 9,
    regex: /^\d{9}$/,
    prefix: "+352",
  },
  {
    code: "GB",
    country: "Verenigd Koninkrijk",
    format: "99999 999999",
    maxLength: 11,
    regex: /^\d{11}$/,
    prefix: "+44",
  },
  {
    code: "CH",
    country: "Zwitserland",
    format: "99 999 99 99",
    maxLength: 10,
    regex: /^\d{10}$/,
    prefix: "+41",
  },
  {
    code: "ES",
    country: "Spanje",
    format: "999 99 99 99",
    maxLength: 9,
    regex: /^\d{9}$/,
    prefix: "+34",
  },
];

// Props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "Telefoonnummer",
  },
});

// Using vee-validate's useField
const { value, errorMessage, handleBlur, meta } = useField(
  props.name,
  undefined,
  {
    syncVModel: true,
    validateOnValueUpdate: false,
  }
);

// Selected country
const selectedCountry = ref(countries[0]);
const attrs = useAttrs();
const hasRequiredAttr = computed(() => "required" in attrs);

// Store the raw phone number without formatting
const rawPhoneNumber = ref("");

// Computed property for input max length based on country
const inputMaxLength = computed(() => {
  // Add 1 for the leading 0 that might be displayed
  return selectedCountry.value.maxLength + 1;
});

// Emit the update event
const emit = defineEmits(["update:modelValue"]);

// Process the phone number and update all related values
function updatePhoneNumber(inputValue: string) {
  // Store the raw value without formatting
  const stripped = inputValue
    .replace(/[^0-9]/gi, "")
    .slice(0, selectedCountry.value.maxLength);
  const cleaned = stripped.startsWith("0") ? stripped.slice(1) : stripped;

  rawPhoneNumber.value = cleaned.slice(0, selectedCountry.value.maxLength);

  // Update the vee-validate value
  value.value = exportPhone.value;

  // Emit the full phone number with country prefix
  emit("update:modelValue", exportPhone.value);
}

// Display formatted value in the input
const formattedPhone = computed({
  get() {
    // Just show the raw number with leading 0 if needed
    return rawPhoneNumber.value
      ? rawPhoneNumber.value.startsWith("0")
        ? rawPhoneNumber.value
        : `0${rawPhoneNumber.value}`
      : "";
  },
  set(newValue: string) {
    updatePhoneNumber(newValue);
  },
});

// Computed property for exporting the phone number with country prefix
const exportPhone = computed(() => {
  if (!rawPhoneNumber.value) return "";
  return `${selectedCountry.value.prefix}${rawPhoneNumber.value}`;
});

// Reference to the input element
const inputRef = ref<HTMLInputElement | null>(null);

// Optional Nuxt Icon support
const instance = getCurrentInstance();
const IconComponent = computed<any | null>(() => {
  return (instance?.appContext?.components as any)?.Icon ?? null;
});

// Watch for changes in the vee-validate value and sync with rawPhoneNumber
// watch(
//   value,
//   (newValue) => {
//     if (typeof newValue === "string" && newValue !== rawPhoneNumber.value) {
//       rawPhoneNumber.value = newValue
//         .replace(/[^0-9]/gi, "")
//         .slice(0, selectedCountry.value.maxLength);
//     }
//   },
//   { immediate: true },
// );

watch(
  () => value.value,
  (newVal) => {
    if (!newVal || typeof newVal !== "string") return;
    const matched = countries.find((c) => newVal.startsWith(c.prefix));
    if (matched) {
      selectedCountry.value = matched;
    }
    // strip prefix van geselecteerde land, valt terug op alleen cijfers
    const prefix = selectedCountry.value.prefix;
    rawPhoneNumber.value = newVal.startsWith(prefix)
      ? newVal.slice(prefix.length).replace(/\D/g, "")
      : newVal.replace(/\D/g, "");
    // sync vee-validate
    value.value = exportPhone.value;
  },
  { immediate: true }
);

// Watch for country changes
watch(
  () => selectedCountry.value,
  () => {
    // When country changes, ensure value doesn't exceed max length
    if (rawPhoneNumber.value.length > selectedCountry.value.maxLength) {
      rawPhoneNumber.value = rawPhoneNumber.value.slice(
        0,
        selectedCountry.value.maxLength
      );
      value.value = rawPhoneNumber.value;
    }

    // Reformat the phone number with the new country format and emit update
    emit("update:modelValue", exportPhone.value);
  }
);
</script>

<template>
  <div class="relative">
    <div class="flex items-center">
      <!-- Country Selector -->
      <DropdownMenuRoot>
        <DropdownMenuTrigger as-child>
          <button
            type="button"
            class="flex h-10 w-28 items-center gap-1 rounded-l-md border border-r-0 px-4 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none"
            :class="
              meta.valid === false && meta.touched
                ? 'border-red-500 text-red-500'
                : 'border-gray-700 text-gray-900'
            "
          >
            <img
              class="h-5"
              :src="`https://flagsapi.com/${selectedCountry.code}/flat/64.png`"
              :alt="selectedCountry.code"
              loading="lazy"
            />
            {{ selectedCountry.prefix }}
            <component
              v-if="IconComponent"
              :is="IconComponent"
              name="mdi:chevron-down"
              class="h-5 w-5 text-current"
            />
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              class="h-5 w-5 text-current"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          side="bottom"
          class="z-10 mt-1 h-56 w-64 overflow-auto rounded border border-gray-300 bg-white shadow-lg outline-none"
        >
          <div class="divide-y divide-gray-300">
            <DropdownMenuItem
              v-for="country in countries"
              :key="country.code"
              class="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 outline-none data-[highlighted]:bg-gray-100"
              @select="selectedCountry = country"
            >
              <img
                class="h-5"
                :src="`https://flagsapi.com/${country.code}/flat/64.png`"
                :alt="country.country"
                loading="lazy"
              />
              <span>{{ country.country }} ({{ country.prefix }})</span>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenuRoot>

      <!-- Phone Number Input -->
      <div class="relative flex-1">
        <input
          type="tel"
          @blur="handleBlur($event, true)"
          v-model="formattedPhone"
          ref="inputRef"
          :maxlength="inputMaxLength"
          class="peer h-10 w-full rounded-r-md border bg-transparent px-3 py-2.5 font-sans text-sm font-normal transition-all placeholder-shown:border focus:border-2 focus:outline-0"
          :class="
            meta.valid === false && meta.touched
              ? '!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent'
              : '!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent '
          "
          placeholder=" "
        />
        <label
          v-if="label"
          class="before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight"
          :class="
            meta.valid === false && meta.touched
              ? 'text-red-500 before:border-red-500 after:border-red-500  peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500'
              : 'text-gray-700 before:border-gray-700 after:border-gray-700  peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700'
          "
        >
          {{ label }}
          <span v-if="hasRequiredAttr"> &#8201;*</span>
        </label>
      </div>
    </div>

    <!-- Error Message -->
    <div
      v-if="meta.touched && errorMessage"
      class="mb-2 mt-1 text-xs text-red-600"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>
