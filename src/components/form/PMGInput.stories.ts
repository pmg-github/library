import PMGInput from "./PMGInput.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof PMGInput> = {
  title: "PMG/Input",
  component: PMGInput,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    label: { control: "text" },
    modelValue: { control: "text" },
    type: { control: "text" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
  args: {
    name: "username",
    label: "Username",
    modelValue: "",
    type: "text",
    disabled: false,
    placeholder: "Enter your username",
  },
};

export default meta;
type Story = StoryObj<typeof PMGInput>;

export const Default: Story = {
  args: {
    name: "username",
    label: "Username",
    modelValue: "",
    type: "text",
    disabled: false,
    placeholder: "Enter your username",
  },
};

export const Password: Story = {
  args: {
    name: "password",
    label: "Password",
    modelValue: "",
    type: "password",
    disabled: false,
    placeholder: "Enter your password",
  },
};

export const Disabled: Story = {
  args: {
    name: "email",
    label: "Email",
    modelValue: "user@example.com",
    type: "email",
    disabled: true,
    placeholder: "Email is disabled",
  },
};
