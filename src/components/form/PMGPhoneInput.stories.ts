import type { Meta, StoryObj } from "@storybook/vue3";
import { Form } from "vee-validate";
import { object, string } from "yup";
import PMGPhoneInput from "./PMGPhoneInput.vue";

const meta: Meta<typeof PMGPhoneInput> = {
  title: "PMG/PhoneInput",
  component: PMGPhoneInput,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    label: { control: "text" },
  },
  args: {
    name: "contact.phone",
    label: "Telefoonnummer",
  },
};

export default meta;
export type Story = StoryObj<typeof PMGPhoneInput>;

export const Basic: Story = {
  render: (args) => ({
    components: { PMGPhoneInput, Form },
    setup() {
      const schema = object({});
      const onSubmit = (values: any) => {
        console.log("Submitted:", values);
      };
      return { args, schema, onSubmit };
    },
    template: `
      <Form :validation-schema="schema" @submit="onSubmit" class="max-w-md space-y-4">
        <PMGPhoneInput v-bind="args" />
        <button type="submit" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </Form>
    `,
  }),
};

export const WithValidation: Story = {
  args: {
    name: "contact.phone",
    label: "Telefoonnummer",
  },
  render: (args) => ({
    components: { PMGPhoneInput, Form },
    setup() {
      const schema = object({
        contact: object({
          phone: string().required("Telefoonnummer is verplicht"),
        }),
      });
      const onSubmit = (values: any) => {
        console.log("Submitted:", values);
      };
      return { args, schema, onSubmit };
    },
    template: `
      <Form :validation-schema="schema" @submit="onSubmit" class="max-w-md space-y-4">
        <PMGPhoneInput v-bind="args" required />
        <button type="submit" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </Form>
    `,
  }),
};

export const Prefilled: Story = {
  args: {
    name: "contact.phone",
    label: "Telefoonnummer",
  },
  render: (args) => ({
    components: { PMGPhoneInput, Form },
    setup() {
      const schema = object({});
      const initialValues = { contact: { phone: "+3212345678" } };
      const onSubmit = (values: any) => {
        console.log("Submitted:", values);
      };
      return { args, schema, onSubmit, initialValues };
    },
    template: `
      <Form :validation-schema="schema" :initial-values="initialValues" @submit="onSubmit" class="max-w-md space-y-4">
        <PMGPhoneInput v-bind="args" />
        <button type="submit" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </Form>
    `,
  }),
};
