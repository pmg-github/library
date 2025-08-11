import PMGTable from "./PMGTable.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import type { TableColumn, TableRow, SortDirection } from "./PMGTable.vue";
import { ref } from "vue";

const meta: Meta<typeof PMGTable> = {
  title: "PMG/Table",
  component: PMGTable,
  tags: ["autodocs"],
  argTypes: {
    sortDirection: {
      control: "select",
      options: ["asc", "desc"],
    },
    selectable: {
      control: "boolean",
    },
    multiple: {
      control: "boolean",
    },
    sortable: {
      control: "boolean",
    },
    stickyFirstColumn: {
      control: "boolean",
    },
    stickyLastColumn: {
      control: "boolean",
    },
    stickyHeader: {
      control: "boolean",
    },
    striped: {
      control: "boolean",
    },
    bordered: {
      control: "boolean",
    },
    hover: {
      control: "boolean",
    },
    responsive: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PMGTable>;

const sampleColumns: TableColumn[] = [
  { key: "id", label: "ID", sortable: false, width: "80px", type: "number" },
  { key: "firstName", label: "First Name", sortable: false },
  { key: "lastName", label: "Last Name", sortable: false },
  { key: "email", label: "Email", sortable: false },
  { key: "gender", label: "Gender", sortable: false, align: "center" },
  { key: "ipAddress", label: "IP Address", sortable: false, align: "right" },
];

const sampleData: TableRow[] = [
  {
    id: 1,
    _selectionKey: "1",
    firstName: "Antonella",
    lastName: "Bellefonte",
    email: "abellefonte0@nba.com",
    gender: "Female",
    ipAddress: "193.108.174.118",
  },
  {
    id: 2,
    _selectionKey: "2",
    firstName: "Wash",
    lastName: "Carnson",
    email: "wcarnson1@jalbum.net",
    gender: "Male",
    ipAddress: "255.169.128.60",
    _disabled: true, // This row is disabled
  },
  {
    id: 3,
    _selectionKey: "3",
    firstName: "Betteanne",
    lastName: "Cowgill",
    email: "bcowgill2@timesonline.co.uk",
    gender: "Female",
    ipAddress: "235.237.3.233",
  },
  {
    id: 4,
    _selectionKey: "4",
    firstName: "Lilith",
    lastName: "Astbury",
    email: "lastbury3@shinystat.com",
    gender: "Female",
    ipAddress: "46.41.60.65",
  },
  {
    id: 5,
    _selectionKey: "5",
    firstName: "Nikos",
    lastName: "Vasenkov",
    email: "nvasenkov4@slate.com",
    gender: "Male",
    ipAddress: "13.95.130.24",
    _disabled: true, // This row is also disabled
  },
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    bordered: true,
    hover: true,
  },
};

export const Striped: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    striped: true,
    bordered: true,
    hover: true,
  },
};

export const Bordered: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    bordered: true,
    hover: true,
  },
};

export const RowSelection: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    selectable: true,
    multiple: false,
    bordered: true,
    hover: true,
  },
  render: (args) => ({
    components: { PMGTable },
    setup() {
      const selected = ref<string[]>([]);

      const handleRowSelect = (selectedKeys: string[]) => {
        selected.value = selectedKeys;
        console.log("Selected rows:", selectedKeys);
      };

      return { args, selected, handleRowSelect };
    },
    template: `
      <div>
        <p class="mb-4 text-sm text-gray-600">Selected: {{ selected.join(", ") || "None" }}</p>
        <PMGTable 
          v-bind="args" 
          :selected="selected"
          @pmg-row-select="handleRowSelect"
        />
      </div>
    `,
  }),
};

export const MultipleRowSelection: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    selectable: true,
    multiple: true,
    bordered: true,
    hover: true,
  },
  render: (args) => ({
    components: { PMGTable },
    setup() {
      const selected = ref<string[]>([]);

      const handleRowSelect = (selectedKeys: string[]) => {
        selected.value = selectedKeys;
        console.log("Selected rows:", selectedKeys);
      };

      return { args, selected, handleRowSelect };
    },
    template: `
      <div>
        <p class="mb-4 text-sm text-gray-600">Selected ({{ selected.length }}): {{ selected.join(", ") || "None" }}</p>
        <PMGTable 
          v-bind="args" 
          :selected="selected"
          @pmg-row-select="handleRowSelect"
        />
      </div>
    `,
  }),
};

export const Sortable: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    sortable: true,
    bordered: true,
    hover: true,
  },
  render: (args) => ({
    components: { PMGTable },
    setup() {
      const sortKey = ref("");
      const sortDirection = ref<SortDirection>("asc");

      const handleSort = (key: string, direction: SortDirection) => {
        sortKey.value = key;
        sortDirection.value = direction;
        console.log(`Sorted by ${key} in ${direction} order`);
      };

      return { args, sortKey, sortDirection, handleSort };
    },
    template: `
      <div>
        <p class="mb-4 text-sm text-gray-600">
          Current sort: {{ sortKey || 'None' }} ({{ sortDirection }})
        </p>
        <PMGTable 
          v-bind="args" 
          :sort-key="sortKey"
          :sort-direction="sortDirection"
          @sort="handleSort"
        />
      </div>
    `,
  }),
};

export const StickyHeader: Story = {
  args: {
    columns: sampleColumns,
    data: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      _selectionKey: `${i + 1}`,
      firstName: `User ${i + 1}`,
      lastName: `Surname ${i + 1}`,
      email: `user${i + 1}@example.com`,
      gender: ["Male", "Female"][i % 2],
      ipAddress: `192.168.1.${i + 1}`,
    })),
    stickyHeader: true,
    maxHeight: "400px",
    bordered: true,
    hover: true,
  },
};

export const StickyFirstColumn: Story = {
  args: {
    columns: [
      { key: "id", label: "ID", width: "80px", type: "number" },
      { key: "firstName", label: "First Name", width: "150px" },
      { key: "lastName", label: "Last Name", width: "150px" },
      { key: "email", label: "Email", width: "250px" },
      { key: "gender", label: "Gender", width: "100px" },
      { key: "ipAddress", label: "IP Address", width: "150px" },
      { key: "department", label: "Department", width: "150px" },
      { key: "position", label: "Position", width: "150px" },
    ],
    data: sampleData.map((item) => ({
      ...item,
      department: "Engineering",
      position: "Developer",
    })),
    stickyFirstColumn: true,
    responsive: true,
  },
  render: (args) => ({
    components: { PMGTable },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 600px;">
        <p class="mb-4 text-sm text-gray-600">Scroll horizontally to see the sticky first column</p>
        <PMGTable v-bind="args" />
      </div>
    `,
  }),
};

export const Loading: Story = {
  args: {
    columns: sampleColumns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns: sampleColumns,
    data: [],
    emptyMessage: "No users found",
    bordered: true,
  },
};

export const ActionsExample: Story = {
  args: {
    columns: [
      { key: "id", label: "ID", width: "80px", type: "number" },
      { key: "firstName", label: "First Name" },
      { key: "lastName", label: "Last Name" },
      { key: "email", label: "Email" },
      { key: "status", label: "Status", align: "center" },
      { key: "actions", label: "Actions", align: "center", width: "120px" },
    ],
    data: sampleData.map((item) => ({
      ...item,
      status: ["Active", "Inactive", "Pending"][item.id % 3],
    })),
    bordered: true,
    hover: true,
  },
  render: (args) => ({
    components: { PMGTable },
    setup() {
      const handleEdit = (row: any) => {
        console.log("Edit user:", row);
      };

      const handleView = (row: any) => {
        console.log("View user:", row);
      };

      const handleDelete = (row: any) => {
        console.log("Delete user:", row);
      };

      const getStatusColor = (status: string) => {
        switch (status) {
          case "Active":
            return "bg-green-100 text-green-800";
          case "Inactive":
            return "bg-red-100 text-red-800";
          case "Pending":
            return "bg-yellow-100 text-yellow-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      };

      return { args, handleEdit, handleView, handleDelete, getStatusColor };
    },
    template: `
      <div>
        <PMGTable v-bind="args">
          <template #cell-status="{ value }">
            <span 
              :class="['px-2 py-1 rounded-full text-xs font-semibold', getStatusColor(value)]"
            >
              {{ value }}
            </span>
          </template>
          
          <template #cell-actions="{ row }">
            <div class="flex space-x-1 justify-center">
              <button 
                @click="handleEdit(row)"
                class="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200 border border-transparent hover:border-blue-200"
                title="Edit user"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button 
                @click="handleView(row)"
                class="p-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors duration-200 border border-transparent hover:border-gray-200"
                title="View details"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              <button 
                @click="handleDelete(row)"
                class="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors duration-200 border border-transparent hover:border-red-200"
                title="Delete user"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </template>
        </PMGTable>
      </div>
    `,
  }),
};

export const AllFeatures: Story = {
  args: {
    columns: [
      { key: "id", label: "ID", width: "80px", type: "number", sortable: true },
      { key: "firstName", label: "First Name", sortable: true },
      { key: "lastName", label: "Last Name", sortable: true },
      { key: "email", label: "Email", sortable: true },
      { key: "gender", label: "Gender", align: "center", sortable: true },
      { key: "status", label: "Status", align: "center" },
      { key: "actions", label: "Actions", align: "center", width: "150px" },
    ],
    data: sampleData.map((item) => ({
      ...item,
      status: ["Active", "Inactive", "Pending"][item.id % 3],
    })),
    selectable: true,
    multiple: true,
    sortable: true,
    striped: true,
    bordered: true,
    hover: true,
  },
  render: (args) => ({
    components: { PMGTable },
    setup() {
      const selected = ref<string[]>([]);
      const sortKey = ref("");
      const sortDirection = ref<SortDirection>("asc");

      const handleRowSelect = (selectedKeys: string[]) => {
        selected.value = selectedKeys;
      };

      const handleSort = (key: string, direction: SortDirection) => {
        sortKey.value = key;
        sortDirection.value = direction;
      };

      const getStatusColor = (status: string) => {
        switch (status) {
          case "Active":
            return "bg-green-100 text-green-800";
          case "Inactive":
            return "bg-red-100 text-red-800";
          case "Pending":
            return "bg-yellow-100 text-yellow-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      };

      return {
        args,
        selected,
        sortKey,
        sortDirection,
        handleRowSelect,
        handleSort,
        getStatusColor,
      };
    },
    template: `
      <div>
        <div class="mb-4 p-4 bg-gray-50 rounded">
          <p class="text-sm text-gray-600">
            Selected: {{ selected.length }} rows | 
            Sorted by: {{ sortKey || 'None' }} ({{ sortDirection }})
          </p>
        </div>
        
        <PMGTable 
          v-bind="args" 
          :selected="selected"
          :sort-key="sortKey"
          :sort-direction="sortDirection"
          @pmg-row-select="handleRowSelect"
          @sort="handleSort"
        >
          <template #cell-status="{ value }">
            <span 
              :class="['px-2 py-1 rounded-full text-xs font-medium', getStatusColor(value)]"
            >
              {{ value }}
            </span>
          </template>
          
          <template #cell-actions="{ row }">
            <div class="flex space-x-1 justify-center">
              <button 
                class="p-1.5 text-pmg-600 hover:text-pmg-800 hover:bg-blue-50 rounded-md transition-colors duration-200"
                title="Edit"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button 
                class="p-1.5 text-pmg-600 hover:text-pmg-800 hover:bg-green-50 rounded-md transition-colors duration-200"
                title="View"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              <button 
                class="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors duration-200"
                title="Delete"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </template>
        </PMGTable>
      </div>
    `,
  }),
};
