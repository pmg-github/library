# PMG Vue Component Library

A reusable Vue 3 component library built with TypeScript and Vite.  
This library provides a set of pre-styled, accessible UI components for use in Vue 3 projects.

---

## Features

- **Vue 3** with `<script setup>` SFCs
- **TypeScript** types included
- **Tailwind CSS** utility classes for styling
- **Storybook** for interactive component documentation
- **Ready for Nuxt 3 and Vite projects**

---

## Installation

```sh
npm install https://github.com/pmg-github/library.git
```

### For Nuxt 3 Projects (Auto-import)

To enable auto-importing of components in Nuxt 3, add the module to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ["pmg-library/nuxt"],
});
```

After adding the module, all PMG components will be auto-imported and available globally in your Nuxt project without explicit imports.

📖 **For detailed Nuxt setup instructions, see [NUXT_SETUP.md](./NUXT_SETUP.md)**

**Example usage in Nuxt:**

```vue
<template>
  <div>
    <!-- Components are auto-imported, no import statements needed -->
    <PMGButton theme="primary" @click="handleClick"> Click me </PMGButton>

    <PMGInput
      v-model="formData.username"
      name="username"
      label="Username"
      placeholder="Enter your username"
    />
  </div>
</template>

<script setup>
const formData = ref({ username: "" });

const handleClick = () => {
  console.log("Button clicked!");
};
</script>
```

### For Vue 3 Projects

You can either install the plugin globally or import components individually.

**Global Plugin Installation:**

```typescript
// main.ts
import { createApp } from "vue";
import PMGLibrary from "pmg-library";
import App from "./App.vue";

const app = createApp(App);
app.use(PMGLibrary);
app.mount("#app");
```

**Individual Component Import:**

```vue
<script setup>
import { PMGButton, PMGInput } from "pmg-library";
</script>
```

---

## Usage

### PMGButton

A customizable button component.

**Props:**

- `text` (string, optional): Button label (or use slot)
- `disabled` (boolean, default: `false`)
- `size` (`'sm' | 'md' | 'lg'`, default: `'md'`)
- `theme` (`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default'`, default: `'default'`)

**Events:**

- `@click`: Emitted when the button is clicked

**Example:**

```vue
<PMGButton text="Save" theme="primary" @click="saveData" />
```

---

## Storybook

Run Storybook locally to explore and test components:

```sh
npm run storybook
```

Build a static Storybook for deployment:

```sh
npm run build-storybook
```

---

## TypeScript Support

Type definitions are included.  
You get full IntelliSense and type checking when using the components.

---

## Contributing

1. Clone the repo
2. Install dependencies
3. Run `npm run dev` to develop components
4. Run `npm run storybook` to view components in Storybook

---

**For backend developers:**  
This library is intended for frontend integration in Vue/Nuxt apps.  
See the [Storybook](#storybook) or the `src/components` directory for available UI components and their props/events.
