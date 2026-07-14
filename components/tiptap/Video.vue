<script setup lang="ts">
import { computed, ref } from "vue";
import { NodeViewWrapper } from "@tiptap/vue-3";
import Modal from "../layout/Modal.vue";

interface VideoAttrs {
  libraryId?: string;
  videoId?: string;
  autoplay?: boolean;
  muted?: boolean;
  src?: string;
}

const props = defineProps<{
  node: { attrs: VideoAttrs };
  editor: { isEditable?: boolean };
  updateAttributes?: (attrs: Partial<VideoAttrs>) => void;
  deleteNode?: () => void;
}>();

const isEditable = computed(() => props.editor?.isEditable ?? false);
const isModalOpen = ref(false);

const libraryId = computed(() => String(props.node.attrs.libraryId || ""));
const videoId = computed(() => String(props.node.attrs.videoId || ""));
const autoplay = computed(() => Boolean(props.node.attrs.autoplay));
const muted = computed(() => Boolean(props.node.attrs.muted));
const sourceUrl = computed(() => String(props.node.attrs.src || ""));

const draftVideoId = ref("");
const draftLibraryId = ref("");
const draftSourceUrl = ref("");
const draftAutoplay = ref(false);
const draftMuted = ref(false);

const hasVideo = computed(
  () => !!videoId.value.trim() || !!sourceUrl.value.trim(),
);

const embedUrl = computed(() => {
  if (sourceUrl.value.trim()) {
    return sourceUrl.value.trim();
  }
  const id = videoId.value.trim();
  const lib = libraryId.value.trim();
  if (!id || !lib) return "";

  const params = new URLSearchParams();
  if (autoplay.value) params.set("autoplay", "true");
  if (muted.value) params.set("muted", "true");

  const qs = params.toString();
  return `https://player.mediadelivery.net/embed/${lib}/${id}${qs ? `?${qs}` : ""}`;
});

function openModal() {
  if (!isEditable.value) return;
  draftVideoId.value = videoId.value;
  draftLibraryId.value = libraryId.value;
  draftSourceUrl.value = sourceUrl.value;
  draftAutoplay.value = autoplay.value;
  draftMuted.value = muted.value;
  isModalOpen.value = true;
}

function applyVideo() {
  if (!props.updateAttributes) return;
  props.updateAttributes({
    videoId: draftVideoId.value.trim(),
    libraryId: draftLibraryId.value.trim(),
    src: draftSourceUrl.value.trim(),
    autoplay: draftAutoplay.value,
    muted: draftMuted.value,
  });
  isModalOpen.value = false;
}

function clearVideo() {
  if (props.deleteNode) {
    props.deleteNode();
    isModalOpen.value = false;
    return;
  }
  if (props.updateAttributes) {
    props.updateAttributes({
      videoId: "",
      libraryId: "",
      src: "",
      autoplay: false,
      muted: false,
    });
  }
  isModalOpen.value = false;
}
</script>

<template>
  <NodeViewWrapper class="video-node my-4">
    <div
      v-if="!hasVideo"
      class="relative flex aspect-video flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition-all"
      :class="{
        'cursor-pointer hover:border-blue-400 hover:bg-blue-50': isEditable,
      }"
      @click="openModal"
    >
      <div class="absolute left-3 top-3">
        <span
          class="inline-block rounded-full bg-gray-800 px-2 py-1 text-xs font-semibold text-white"
        >
          Video
        </span>
      </div>

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
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-6 4h4a2 2 0 002-2V8a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      <h3 class="mb-2 text-lg font-medium text-gray-700">Nog geen video</h3>
      <p class="mb-4 text-center text-xs text-gray-400">
        Voeg een video toe met Bunny IDs of een directe embed URL.
      </p>

      <button
        v-if="isEditable"
        type="button"
        class="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        @click.stop="openModal"
      >
        Video instellen
      </button>
    </div>

    <div
      v-else
      class="video-player relative aspect-video w-full overflow-hidden rounded-lg bg-black"
    >
      <iframe
        :src="embedUrl"
        class="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        allow="
          accelerometer;
          gyroscope;
          autoplay;
          encrypted-media;
          picture-in-picture;
        "
        allowfullscreen
      />

      <div v-if="isEditable" class="absolute right-2 top-2 z-[1] flex gap-2">
        <button
          type="button"
          class="flex items-center justify-center rounded-full bg-gray-800/70 p-2 text-white transition-all hover:bg-gray-800/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          title="Video bewerken"
          @click.stop="openModal"
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

    <Modal
      v-if="isEditable"
      v-model:open="isModalOpen"
      title="Video instellen"
      size="lg"
    >
      <div class="space-y-4">
        <div>
          <label class="mb-1 block text-sm text-gray-600"
            >Bunny Library ID</label
          >
          <input
            v-model="draftLibraryId"
            type="text"
            placeholder="Bijv. 698074"
            class="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="mb-1 block text-sm text-gray-600">Bunny Video ID</label>
          <input
            v-model="draftVideoId"
            type="text"
            placeholder="Bijv. 123456"
            class="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="mb-1 block text-sm text-gray-600"
            >Of directe embed URL</label
          >
          <input
            v-model="draftSourceUrl"
            type="url"
            placeholder="https://..."
            class="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div class="flex items-center gap-6">
          <label class="inline-flex items-center gap-2 text-sm text-gray-700">
            <input v-model="draftAutoplay" type="checkbox" />
            Autoplay
          </label>
          <label class="inline-flex items-center gap-2 text-sm text-gray-700">
            <input v-model="draftMuted" type="checkbox" />
            Muted
          </label>
        </div>

        <div class="flex items-center justify-between pt-2">
          <button
            type="button"
            class="rounded px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
            @click="clearVideo"
          >
            Verwijderen
          </button>

          <div class="flex items-center gap-2">
            <button
              type="button"
              class="rounded px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-100"
              @click="isModalOpen = false"
            >
              Annuleren
            </button>
            <button
              type="button"
              class="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              :disabled="!draftSourceUrl.trim() && !draftVideoId.trim()"
              @click="applyVideo"
            >
              Toepassen
            </button>
          </div>
        </div>
      </div>
    </Modal>
  </NodeViewWrapper>
</template>

<style scoped>
.video-node {
  margin: 1rem 0;
}
</style>
