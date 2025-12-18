import PMGTable from "./PMGTable.vue";
import PMGTableHeader from "./PMGTableHeader.vue";
import PMGTableHeaderCell from "./PMGTableHeaderCell.vue";
import PMGTableRow from "./PMGTableRow.vue";
import PMGTableCell from "./PMGTableCell.vue";
import PMGTableBody from "./PMGTableBody.vue";
import PMGTableHeaderSelect from "./PMGTableHeaderSelect.vue";
import { ref, computed, defineComponent, inject, onMounted, watch } from "vue";

export default {
  title: "Components/PMGTable",
  component: PMGTable,
};

const Template = (args: any) => ({
  components: {
    PMGTable,
    PMGTableBody,
    PMGTableHeader,
    PMGTableHeaderCell,
    PMGTableRow,
    PMGTableCell,
  },
  setup() {
    return { args };
  },
  template: `
		<PMGTable :items="args.items" :columns="args.columns" selectable />
	`,
});

export const Basic = (args: any) => ({
  components: {
    PMGTable,
    PMGTableHeader,
    PMGTableHeaderCell,
    PMGTableBody,
    PMGTableRow,
    PMGTableCell,
    PMGTableHeaderSelect,
  },
  setup() {
    const items = ref([
      { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
      { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
      { id: 3, name: "Carol", email: "carol@example.com", role: "Viewer" },
      { id: 4, name: "Dan", email: "dan@example.com", role: "Editor" },
      { id: 5, name: "Eve", email: "eve@example.com", role: "Admin" },
      { id: 6, name: "Frank", email: "frank@example.com", role: "Viewer" },
      { id: 7, name: "Grace", email: "grace@example.com", role: "Editor" },
      { id: 8, name: "Heidi", email: "heidi@example.com", role: "Viewer" },
      { id: 9, name: "Ivan", email: "ivan@example.com", role: "Admin" },
      { id: 10, name: "Judy", email: "judy@example.com", role: "Editor" },
      { id: 11, name: "Karl", email: "karl@example.com", role: "Viewer" },
      { id: 12, name: "Laura", email: "laura@example.com", role: "Admin" },
    ]);

    const original = items.value.slice();
    const sortBy = ref<string | null>(null);
    const sortDir = ref<"asc" | "desc" | null>(null);
    const loading = ref(false);
    function onRowClick(item: any) {
      // eslint-disable-next-line no-console
      console.log("row-click", item);
    }

    function onHeaderSort(key: string) {
      // toggle sort state
      if (sortBy.value !== key) {
        sortBy.value = key;
        sortDir.value = "asc";
      } else if (sortDir.value === "asc") {
        sortDir.value = "desc";
      } else {
        sortBy.value = null;
        sortDir.value = null;
      }

      // simulate remote fetch with a short delay and show loading indicator
      loading.value = true;
      setTimeout(() => {
        if (!sortBy.value) {
          items.value = original.slice();
          loading.value = false;
          return;
        }

        const dir = sortDir.value === "desc" ? -1 : 1;
        items.value = original.slice().sort((a, b) => {
          const A = a[sortBy.value!];
          const B = b[sortBy.value!];
          if (A == null && B == null) return 0;
          if (A == null) return -1 * dir;
          if (B == null) return 1 * dir;
          if (typeof A === "number" && typeof B === "number")
            return (A - B) * dir;
          return String(A).localeCompare(String(B)) * dir;
        });
        loading.value = false;
      }, 450);
    }

    return { items, onRowClick, onHeaderSort, sortBy, sortDir, loading };
  },
  template: `
    <section>
      <h3>Manual composition (all subcomponents)</h3>
      <PMGTable selectable sticky striped class="min-w-full border-collapse">
        <PMGTableHeader>
            <PMGTableHeaderCell ><PMGTableHeaderSelect /></PMGTableHeaderCell>
            <PMGTableHeaderCell
              @sort="() => onHeaderSort('id')"
              :ariaSort="sortBy==='id' ? (sortDir==='asc' ? 'ascending' : 'descending') : 'none'"
              :loading="loading && sortBy==='id'"
            >
              <span class="flex items-center gap-2">ID</span>
            </PMGTableHeaderCell>
            <PMGTableHeaderCell
              @sort="() => onHeaderSort('name')"
              :ariaSort="sortBy==='name' ? (sortDir==='asc' ? 'ascending' : 'descending') : 'none'"
              :loading="loading && sortBy==='name'"
            >
              <span class="flex items-center gap-2">Name</span>
            </PMGTableHeaderCell>
            <PMGTableHeaderCell>Email</PMGTableHeaderCell>
            <PMGTableHeaderCell
              @sort="() => onHeaderSort('role')"
              :ariaSort="sortBy==='role' ? (sortDir==='asc' ? 'ascending' : 'descending') : 'none'"
              :loading="loading && sortBy==='role'"
            >
              <span class="flex items-center gap-2">Role</span>
            </PMGTableHeaderCell>
            <PMGTableHeaderCell align="right">Actions</PMGTableHeaderCell>
        </PMGTableHeader>
        <PMGTableBody>
          <PMGTableRow v-for="item in items" :key="item.id" :item="item" @click="onRowClick(item)">
            <PMGTableCell><div class="flex flex-col gap-2 justify-end">{{ item.id }} <span>test</span></div></PMGTableCell>
            <PMGTableCell><a :href="'/user/' + item.id">{{ item.name }}</a></PMGTableCell>
            <PMGTableCell>{{ item.email }}</PMGTableCell>
            <PMGTableCell>{{ item.role }}</PMGTableCell>
            <PMGTableCell align="right"><button class="px-2 py-1 bg-blue-500 text-white rounded">Action</button></PMGTableCell>
          </PMGTableRow>
        </PMGTableBody>
      </PMGTable>
    </section>
  `,
});

export const InfiniteScroll = (args: any) => ({
  components: {
    PMGTable,
    PMGTableHeader,
    PMGTableHeaderCell,
    PMGTableBody,
    PMGTableRow,
    PMGTableCell,
    PMGTableHeaderSelect,
  },
  setup() {
    const items = ref(
      Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        email: `${i + 1}@example.com`,
        role: "User",
      }))
    );
    const loading = ref(false);

    // async loadMore returns a Promise so PMGTable can auto-detect loading
    async function loadMore() {
      if (loading.value) return;
      loading.value = true;
      await new Promise((r) => setTimeout(r, 600));
      const next = items.value.length;
      items.value.push(
        ...Array.from({ length: 40 }, (_, i) => ({
          id: next + i + 1,
          name: `Item ${next + i + 1}`,
          email: `${next + i + 1}@example.com`,
          role: "User",
        }))
      );
      loading.value = false;
    }

    return { items, loading, loadMore };
  },
  template: `
    <section>
      <!-- simple usage: pass async handler only; sentinel will show loader -->
      <PMGTable :infinite="loadMore" sticky selectable>
        <PMGTableHeader>
          <PMGTableHeaderCell>ID</PMGTableHeaderCell>
          <PMGTableHeaderCell>Name</PMGTableHeaderCell>
          <PMGTableHeaderCell>Email</PMGTableHeaderCell>
          <PMGTableHeaderCell>Role</PMGTableHeaderCell>
        </PMGTableHeader>
        <PMGTableBody>
          <PMGTableRow v-for="item in items" :key="item.id" :item="item">
            <PMGTableCell>{{ item.id }}</PMGTableCell>
            <PMGTableCell>{{ item.name }}</PMGTableCell>
            <PMGTableCell>{{ item.email }}</PMGTableCell>
            <PMGTableCell>{{ item.role }}</PMGTableCell>
          </PMGTableRow>
        </PMGTableBody>
      </PMGTable>
      
    </section>
  `,
});
