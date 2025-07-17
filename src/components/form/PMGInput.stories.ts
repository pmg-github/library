import PMGInput from "./PMGInput.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { Form, useForm } from "vee-validate";
import * as yup from "yup";

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
    modelValue: "",
    type: "text",
  },
};

export default meta;
type Story = StoryObj<typeof PMGInput>;

export const WithValidation: Story = {
  args: {
    name: "email",
    label: "Email Address",
    type: "email",
  },
  render: (args) => ({
    components: { PMGInput, Form },
    setup() {
      const schema = yup.object({
        email: yup
          .string()
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
      const schema = yup.object({
        password: yup
          .string()
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

export const Disabled: Story = {
  args: {
    name: "email",
    label: "Email",
    modelValue: "user@example.com",
    type: "email",
  },
  render: (args) => ({
    components: { PMGInput },
    template: `
      <PMGInput v-bind="args" disabled />
    `,
  }),
};

export const FormExample: Story = {
  render: () => ({
    components: { PMGInput, Form },
    setup() {
      const schema = yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup
          .string()
          .email("Invalid email format")
          .required("Email is required"),
        phone: yup
          .string()
          .matches(/^\d{10}$/, "Phone must be 10 digits")
          .required("Phone is required"),
        password: yup
          .string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
      });

      const { handleSubmit, values } = useForm({
        validationSchema: schema,
      });

      const onSubmit = handleSubmit((values) => {
        console.log("Form submitted:", values);
      });

      return { onSubmit, values };
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
        <div class="mt-4 p-4 bg-gray-100 rounded">
          <h3 class="font-semibold mb-2">Form Values:</h3>
          <pre class="text-sm">{{ JSON.stringify(values, null, 2) }}</pre>
        </div>
      </Form>
    `,
  }),
};

export const WithPlaceholder: Story = {
  args: {
    name: "email",
    label: "Email Address",
    type: "email",
  },
  render: (args) => ({
    components: { PMGInput, Form },
    setup() {
      const schema = yup.object({
        email: yup.string().email("Invalid email format"),
      });

      const onSubmit = (values: any) => {
        console.log("Form submitted:", values);
      };

      return { args, schema, onSubmit };
    },
    template: `
      <Form :validation-schema="schema" @submit="onSubmit">
        <PMGInput v-bind="args" placeholder="Enter your email address" />
        <p class="mt-2 text-sm text-gray-600">
          Notice how the label stays at the top when there's a meaningful placeholder
        </p>
      </Form>
    `,
  }),
};

export const WithoutPlaceholder: Story = {
  args: {
    name: "username",
    label: "Username",
    type: "text",
  },
  render: (args) => ({
    components: { PMGInput, Form },
    setup() {
      const schema = yup.object({
        username: yup.string(),
      });

      const onSubmit = (values: any) => {
        console.log("Form submitted:", values);
      };

      return { args, schema, onSubmit };
    },
    template: `
      <Form :validation-schema="schema" @submit="onSubmit">
        <PMGInput v-bind="args" />
        <p class="mt-2 text-sm text-gray-600">
          Without a placeholder, the label animates from the center
        </p>
      </Form>
    `,
  }),
};
