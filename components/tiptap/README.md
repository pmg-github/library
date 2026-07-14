# TipTap Gallery Component

A unified TipTap Gallery extension that automatically adapts to the editor's `editable` state with an integrated modal for managing images.

## Usage

```ts
import { Editor } from "@tiptap/core";
import { Gallery } from "pmg-library";

// For editor/backoffice (editable)
const editor = new Editor({
  extensions: [Gallery],
  editable: true,
});

// For frontend (read-only)
const viewer = new Editor({
  extensions: [Gallery],
  editable: false,
});
```

## Features

### When Editable (`editor.isEditable = true`)

- Drag and drop support
- Edit button opens integrated modal for image management
- Modal allows editing captions, alt text, and copyright for each image
- Remove images via modal
- Emits events: `openManageModal`, `imagesChanged`
- Slots for customization (`empty-state`, `modal-content`)
- Hover effects on images

### When Read-Only (`editor.isEditable = false`)

- Display-only, no editing capabilities
- No edit buttons, modals, or drag/drop
- Same visual layout

The component **automatically** shows/hides editing features based on the editor's `isEditable` property.

## Integrated Modal

The component includes a built-in modal (using HeadlessUI) for managing gallery images. When the edit button is clicked:

- Modal displays all images in a grid
- Each image can be edited:
  - Caption
  - Alt text
  - Copyright
- Images can be removed
- Custom modal content via `modal-content` slot

## Customization Slots

### `empty-state`

Customize the empty gallery state when no images are present.

```vue
<template #empty-state="{ onSelect }">
  <button @click="onSelect">Add Images</button>
</template>
```

### `modal-content`

Completely customize the modal content.

```vue
<template #modal-content="{ images, updateImage, removeImage }">
  <!-- Your custom modal content -->
</template>
```

## Commands

```ts
// Insert a new gallery
editor.commands.setGallery([{ id: 1, url: "https://...", caption: "Image 1" }]);

// Update existing gallery
editor.commands.updateGallery([
  { id: 1, url: "https://...", caption: "Updated" },
]);
```

## Image Interface

```ts
interface GalleryImage {
  id: number;
  url: string;
  altText?: string;
  caption?: string;
  copyRight?: string;
}
```

## HTML Parsing

Supports parsing from:

1. `div[data-gallery]` with `data-images` attribute
2. Text format: `##gallery: [{"url": "...", "caption": "..."}]`

## Dependencies

Requires `@headlessui/vue` as a peer dependency (for the modal).

---

## Video Extension

A TipTap video node is also available and uses the same editable/read-only behavior split:

- `editor.isEditable = true`: shows edit controls and modal fields to update video settings.
- `editor.isEditable = false`: renders front-end display only (no edit affordances).

### Video Commands

```ts
editor.commands.setVideo({
  libraryId: "698074",
  videoId: "123456",
  autoplay: false,
  muted: true,
});

editor.commands.updateVideo({
  videoId: "654321",
});
```

### Video Attributes

```ts
interface VideoAttrs {
  libraryId?: string;
  videoId?: string;
  autoplay?: boolean;
  muted?: boolean;
  src?: string; // Optional direct embed URL fallback
}
```
