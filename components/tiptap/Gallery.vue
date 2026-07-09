<script setup lang="ts">
import { ref, computed } from "vue";
import { NodeViewWrapper } from "@tiptap/vue-3";
import PMGModal from "../layout/PMGModal.vue";

export interface GalleryImage {
  id: number;
  url: string;
  altText?: string;
  caption?: string;
  copyRight?: string;
}

const props = defineProps<{
  node: {
    attrs: {
      images: GalleryImage[];
    };
  };
  editor: any;
  updateAttributes?: (attrs: { images: GalleryImage[] }) => void;
  selected?: boolean;
  decorations?: any;
  extension?: any;
  getPos?: () => number;
  deleteNode?: () => void;
  view?: any;
  innerDecorations?: any;
  HTMLAttributes?: Record<string, any>;
}>();

const emit = defineEmits<{
  openManageModal: [images: GalleryImage[]];
  imagesChanged: [images: GalleryImage[]];
}>();

const isDragOver = ref(false);
const isModalOpen = ref(false);

const images = computed<GalleryImage[]>(() => props.node.attrs.images ?? []);
const isEditable = computed(() => props.editor?.isEditable ?? false);

const hasImages = computed(() => images.value.length > 0);
const hasMoreImages = computed(() => images.value.length > 3);
const remainingCount = computed(() => images.value.length - 3);
const gridClass = computed(() => {
  const count = images.value.length;
  if (count === 1) return "grid-cols-1";
  if (count === 2) return "grid-cols-2";
  return "grid grid-cols-[2fr_1fr]";
});

const handleOpenManageModal = () => {
  if (!isEditable.value) return;
  isModalOpen.value = true;
  emit("openManageModal", images.value);
};

const handleSelectImages = () => {
  if (!isEditable.value) return;
  emit("imagesChanged", images.value);
};

const updateImage = (
  index: number,
  field: keyof GalleryImage,
  value: string,
) => {
  if (!props.updateAttributes) return;
  props.updateAttributes({
    images: images.value.map((img, i) =>
      i === index ? { ...img, [field]: value } : img,
    ),
  });
};

const removeImage = (index: number) => {
  if (!props.updateAttributes) return;
  props.updateAttributes({
    images: images.value.filter((_, i) => i !== index),
  });
};

const TILE_IMAGE_DRAG_TYPE = "application/x-tile-image";

const onDragOver = (e: DragEvent) => {
  if (!isEditable.value) return;
  if (!e.dataTransfer?.types.includes(TILE_IMAGE_DRAG_TYPE)) return;
  e.preventDefault();
  e.stopPropagation();
  isDragOver.value = true;
};

const onDragLeave = () => {
  isDragOver.value = false;
};

const onDrop = async (e: DragEvent) => {
  if (!isEditable.value) return;
  isDragOver.value = false;
  const raw = e.dataTransfer?.getData(TILE_IMAGE_DRAG_TYPE);
  if (!raw) return;
  e.preventDefault();
  e.stopPropagation();
  const { id, url } = JSON.parse(raw) as { id: number; url: string };
  const newImage: GalleryImage = {
    id,
    url,
    altText: "",
    caption: "",
    copyRight: "",
  };
  if (props.updateAttributes) {
    props.updateAttributes({
      images: [...images.value, newImage],
    });
    emit("imagesChanged", [...images.value, newImage]);
  }
};
</script>

<template>
  <NodeViewWrapper
    class="mt-4 box-border w-full max-w-full"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
    :class="{
      'rounded-lg ring-2 ring-blue-400 ring-offset-2': isDragOver && isEditable,
    }"
  >
    <!-- Empty state -->
    <div
      v-if="!hasImages"
      class="relative flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition-all"
      :class="{ 'hover:border-blue-400 hover:bg-blue-50': isEditable }"
    >
      <div class="absolute left-3 top-3">
        <span
          class="inline-block rounded-full bg-gray-800 px-2 py-1 text-xs font-semibold text-white"
        >
          Fotogallerij
        </span>
      </div>
      <div
        class="flex flex-col items-center justify-center"
        :class="{ 'cursor-pointer': isEditable }"
      >
        <slot
          v-if="isEditable"
          name="empty-state"
          :on-select="handleSelectImages"
        >
          <svg
            class="mb-4 size-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 class="mb-2 text-lg font-medium text-gray-700">
            Nog geen foto's toegevoegd
          </h3>
          <button
            type="button"
            class="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            @click="handleSelectImages"
          >
            Selecteer foto's
          </button>
        </slot>
        <div v-else>
          <svg
            class="mb-4 size-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 class="mb-2 text-lg font-medium text-gray-700">
            Nog geen foto's toegevoegd
          </h3>
        </div>
      </div>
    </div>

    <!-- Image grid when images exist -->
    <div v-else class="relative aspect-video w-full overflow-hidden rounded-lg">
      <div class="grid h-full w-full gap-1" :class="gridClass">
        <div
          v-if="images.length >= 1"
          class="relative h-full w-full overflow-hidden rounded-lg"
          :class="{ 'cursor-pointer': isEditable }"
        >
          <div class="h-full w-full">
            <img
              :src="images[0]?.url"
              :alt="images[0]?.altText || 'Image 1'"
              class="h-full w-full bg-slate-100 transition-transform duration-300"
              :class="images.length === 1 ? 'object-contain' : 'object-cover'"
            />
          </div>
        </div>

        <div
          v-if="images.length >= 2"
          class="flex h-full min-h-0 w-full flex-col gap-1"
        >
          <div
            v-if="images.length === 2"
            class="relative h-full w-full overflow-hidden rounded-lg"
          >
            <div class="h-full w-full">
              <img
                :src="images[1]?.url"
                :alt="images[1]?.altText || 'Image 2'"
                class="h-full w-full object-cover transition-transform duration-300"
              />
            </div>
          </div>

          <template v-else>
            <div
              class="relative min-h-0 w-full flex-1 overflow-hidden rounded-lg"
            >
              <img
                :src="images[1]?.url"
                :alt="images[1]?.altText || 'Image 2'"
                class="h-full w-full object-cover transition-transform duration-300"
              />
            </div>
            <div
              class="relative min-h-0 w-full flex-1 overflow-hidden rounded-lg"
            >
              <img
                :src="images[2]?.url"
                :alt="images[2]?.altText || 'Image 3'"
                class="h-full w-full object-cover transition-transform duration-300"
              />
              <div
                v-if="hasMoreImages"
                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-2xl font-bold text-white"
                :class="{
                  'cursor-pointer transition-opacity duration-300 hover:bg-opacity-50':
                    isEditable,
                }"
                @click.stop="isEditable && handleOpenManageModal()"
              >
                +{{ remainingCount }}
              </div>
            </div>
          </template>
        </div>

        <div v-if="isEditable" class="absolute right-2 top-2 z-[1] flex gap-2">
          <button
            @click.stop="handleOpenManageModal"
            class="flex items-center justify-center rounded-full bg-gray-800 bg-opacity-70 p-2 text-sm text-white transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            title="Manage images"
          >
            <svg
              class="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <small v-if="images.length === 1">
      {{ images[0]?.caption || "\u00A0" }}
      {{ images[0]?.copyRight ? `© ${images[0].copyRight}` : "" }}
    </small>

    <!-- Modal for managing images (only when editable) -->
    <PMGModal
      v-if="isEditable"
      v-model:open="isModalOpen"
      size="4xl"
      :title="`Fotogallerij (${images.length})`"
    >
      <slot
        name="modal-content"
        :images="images"
        :update-image="updateImage"
        :remove-image="removeImage"
      >
        <div v-if="images.length === 0" class="py-12 text-center text-gray-500">
          Geen foto's toegevoegd
        </div>
        <div
          v-else
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          <div
            v-for="(image, index) in images"
            :key="image.id"
            class="group relative"
          >
            <div
              class="relative aspect-video overflow-hidden rounded-lg bg-gray-100"
            >
              <img
                :src="image.url"
                :alt="image.altText || `Image ${index + 1}`"
                class="h-full w-full object-contain"
              />
              <button
                @click="removeImage(index)"
                class="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white opacity-0 transition-opacity hover:bg-red-700 group-hover:opacity-100"
                title="Remove image"
              >
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-2 space-y-2">
              <input
                :value="image.caption"
                @input="
                  updateImage(
                    index,
                    'caption',
                    ($event.target as HTMLInputElement).value,
                  )
                "
                placeholder="Caption (optioneel)"
                class="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                :value="image.altText"
                @input="
                  updateImage(
                    index,
                    'altText',
                    ($event.target as HTMLInputElement).value,
                  )
                "
                placeholder="Alt text (optioneel)"
                class="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                :value="image.copyRight"
                @input="
                  updateImage(
                    index,
                    'copyRight',
                    ($event.target as HTMLInputElement).value,
                  )
                "
                placeholder="Copyright (optioneel)"
                class="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </slot>
    </PMGModal>
  </NodeViewWrapper>
</template>
