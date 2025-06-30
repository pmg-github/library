import type { Meta, StoryObj } from "@storybook/vue3";
import PMGButton from "./PMGButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "PMG/Button",
  component: PMGButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    theme: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "default",
      ],
    },
  },
  args: {
    size: "md",
    theme: "primary",
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  },
} satisfies Meta<typeof PMGButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    size: "md",
    theme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    size: "md",
    theme: "secondary",
  },
};

export const Success: Story = {
  args: {
    size: "md",
    theme: "success",
  },
};

export const Warning: Story = {
  args: {
    size: "md",
    theme: "warning",
  },
};
export const Danger: Story = {
  args: {
    size: "md",
    theme: "danger",
  },
};
export const Default: Story = {
  args: {
    size: "md",
    theme: "default",
  },
};
