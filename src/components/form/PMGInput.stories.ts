import PMGInput from "./PMGInput.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { Form } from "vee-validate";
import { object, string } from "yup";

const meta: Meta<typeof PMGInput> = {
  title: "PMG/Input",
  component: PMGInput,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    label: { control: "text" },
    modelValue: { control: "text" },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url"],
    },
  },
  args: {
    name: "username",
    label: "Username",
    type: "text",
  },
};

export default meta;
type Story = StoryObj<typeof PMGInput>;

export const Default: Story = {
  args: {
    name: "username",
    label: "Username",
    type: "text",
  },
  render: (args) => ({
    components: { PMGInput, Form },
    setup() {
      const schema = object({
        email: string()
          .email("Invalid email format")
          .required("Email is required"),
      });

      const onSubmit = (values: any) => {
        console.log("Form submitted:", values);
      };

      return { args, schema, onSubmit };
    },
    template: `
      <Form :validation-schema="schema" @submit="onSubmit">
        <PMGInput v-bind="args" required />
        <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </Form>
    `,
  }),
};

export const Password: Story = {
  args: {
    name: "password",
    label: "Password",
    type: "password",
  },
  render: (args) => ({
    components: { PMGInput, Form },
    setup() {
      const schema = object({
        password: string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      });

      const onSubmit = (values: any) => {
        console.log("Form submitted:", values);
      };

      return { args, schema, onSubmit };
    },
    template: `
      <Form :validation-schema="schema" @submit="onSubmit">
        <PMGInput v-bind="args" required />
        <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </Form>
    `,
  }),
};

export const FormExample: Story = {
  render: () => ({
    components: { PMGInput, Form },
    setup() {
      const schema = object({
        firstName: string().required("First name is required"),
        lastName: string().required("Last name is required"),
        email: string()
          .email("Invalid email format")
          .required("Email is required"),
        phone: string()
          .matches(/^\d{10}$/, "Phone must be 10 digits")
          .required("Phone is required"),
        password: string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
      });

      const onSubmit = (values: any) => {
        console.log("Form submitted:", values);
      };

      return { schema, onSubmit };
    },
    template: `
      <Form :validation-schema="schema" @submit="onSubmit" class="space-y-4 max-w-md">
        <PMGInput 
          name="firstName" 
          label="First Name" 
          type="text" 
          placeholder="Enter your first name"
          required
        />
        <PMGInput 
          name="lastName" 
          label="Last Name" 
          type="text" 
          placeholder="Enter your last name"
          required
        />
        <PMGInput 
          name="email" 
          label="Email Address" 
          type="email" 
          placeholder="Enter your email"
          required
        />
        <PMGInput 
          name="phone" 
          label="Phone Number" 
          type="tel" 
          placeholder="Enter your phone number"
          modelValue="050417558"
          disabled
          required
        />
        <PMGInput 
          name="password" 
          label="Password" 
          type="password" 
          placeholder="Enter your password"
          required
        />
        <button 
          type="submit" 
          class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Submit Form
        </button>
      </Form>
    `,
  }),
};
