import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import PMGTable from "./PMGTable.vue";

const meta: Meta<typeof PMGTable> = {
  title: "PMG/Table",
  component: PMGTable,
  tags: ["autodocs"],
  argTypes: {
    hover: { control: "boolean" },
    bordered: { control: "boolean" },
    responsive: { control: "boolean" },
    stickyHeader: { control: "boolean" },
    stickyFirstColumn: { control: "boolean" },
    stickyLastColumn: { control: "boolean" },
    selectable: { control: "boolean" },
    multiple: { control: "boolean" },
    sortable: { control: "boolean" },
    maxHeight: { control: "text" },
  },
  args: {
    hover: true,
    bordered: true,
    responsive: true,
    stickyHeader: false,
    stickyFirstColumn: false,
    stickyLastColumn: false,
    selectable: false,
    multiple: false,
    sortable: false,
    maxHeight: "",
  },
};

export default meta;
export type Story = StoryObj<typeof PMGTable>;

const demoColumns = [
  { key: "id", label: "ID", width: "80px", align: "left", sortable: true },
  { key: "name", label: "Name", minWidth: "160px", sortable: true },
  { key: "email", label: "Email", minWidth: "220px" },
  {
    key: "joinedAt",
    label: "Joined",
    width: "140px",
    type: "date",
    align: "center",
    sortable: true,
  },
  {
    key: "active",
    label: "Active",
    width: "100px",
    type: "boolean",
    align: "center",
  },
  { key: "status", label: "Status", width: "120px", sortable: true },
] as const;

const demoRows = [
  {
    _selectionKey: "u-1001",
    id: 1001,
    name: "Ada Lovelace",
    email: "ada@domain.com",
    joinedAt: "2024-03-12",
    active: true,
    status: "Active",
  },
  {
    _selectionKey: "u-1002",
    id: 1002,
    name: "Grace Hopper",
    email: "grace@domain.com",
    joinedAt: "2024-07-01",
    active: true,
    status: "Invited",
  },
  {
    _selectionKey: "u-1003",
    id: 1003,
    name: "Linus Torvalds",
    email: "linus@domain.com",
    joinedAt: "2023-11-20",
    active: false,
    status: "Suspended",
  },
];

export const Basic: Story = {
  render: (args) => ({
    components: { PMGTable },
    setup() {
      const columns = demoColumns as any;
      const rows = demoRows as any;
      return { args, columns, rows };
    },
    template: `
      <div style="padding:16px">
        <PMGTable v-bind="args" :columns="columns" :data="rows">
          <template #cell-status="{ value }">
            <span
              class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
              :class="{
                'bg-green-50 text-green-700 ring-1 ring-green-200': value === 'Active',
                'bg-yellow-50 text-yellow-700 ring-1 ring-yellow-200': value === 'Invited',
                'bg-red-50 text-red-700 ring-1 ring-red-200': value === 'Suspended',
              }"
            >{{ value }}</span>
          </template>
        </PMGTable>
      </div>
    `,
  }),
};

export const SelectableMultiple: Story = {
  args: {
    selectable: true,
    multiple: true,
    stickyHeader: true,
    stickyFirstColumn: true,
    maxHeight: "320px",
  },
  render: (args) => ({
    components: { PMGTable },
    setup() {
      const columns = demoColumns as any;
      const rows = demoRows as any;
      const selected = ref<string[]>([]);
      return { args, columns, rows, selected };
    },
    template: `
      <div style="padding:16px">
        <PMGTable
          v-bind="args"
          :columns="columns"
          :data="rows"
          v-model:selected="selected"
        />
        <div class="mt-3 text-pmg-600 text-sm">Selected: {{ selected }}</div>
      </div>
    `,
  }),
};

export const Sortable: Story = {
  args: { sortable: true, sortKey: "name", sortDirection: "asc" },
  render: (args) => ({
    components: { PMGTable },
    setup() {
      const columns = demoColumns as any;
      const rows = demoRows as any;
      const sortKey = ref<string>(args.sortKey as string);
      const sortDirection = ref<"asc" | "desc">(
        args.sortDirection as "asc" | "desc"
      );
      function onSort(column: string, direction: "asc" | "desc") {
        // Keep in sync if you want to show current sort externally
        sortKey.value = column;
        sortDirection.value = direction;
        console.log("sort", { column, direction });
      }
      return { args, columns, rows, sortKey, sortDirection, onSort };
    },
    template: `
      <div style="padding:16px">
        <PMGTable
          v-bind="args"
          :columns="columns"
          :data="rows"
          v-model:sortKey="sortKey"
          v-model:sortDirection="sortDirection"
          @sort="onSort"
        />
      </div>
    `,
  }),
};
