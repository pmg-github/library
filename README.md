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
