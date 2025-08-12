export interface TableColumn {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
    minWidth?: string;
    align?: "left" | "center" | "right";
    type?: "text" | "number" | "date" | "boolean" | "custom";
    selectionKey?: string;
    sticky?: boolean;
    disabled?: boolean;
}
export interface TableRow {
    [key: string]: any;
    _selectionKey?: string;
    _disabled?: boolean;
}
export type SortDirection = "asc" | "desc";
declare function __VLS_template(): any;
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    columns: {
        type: () => TableColumn[];
        default: () => never[];
    };
    data: {
        type: () => TableRow[];
        default: () => never[];
    };
    selected: {
        type: () => string[];
        default: () => never[];
    };
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortKey: {
        type: StringConstructor;
        default: string;
    };
    sortDirection: {
        type: () => SortDirection;
        default: string;
    };
    stickyFirstColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyLastColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyMessage: {
        type: StringConstructor;
        default: string;
    };
    maxHeight: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    sort: (column: string, direction: SortDirection) => any;
    "pmg-sort": (sortKeys: string[]) => any;
    "pmg-row-select": (selectedKeys: string[]) => any;
    rowClick: (row: TableRow, index: number) => any;
    "update:selected": (selectedKeys: string[]) => any;
    "update:sortKey": (key: string) => any;
    "update:sortDirection": (direction: SortDirection) => any;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    columns: {
        type: () => TableColumn[];
        default: () => never[];
    };
    data: {
        type: () => TableRow[];
        default: () => never[];
    };
    selected: {
        type: () => string[];
        default: () => never[];
    };
    selectable: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortKey: {
        type: StringConstructor;
        default: string;
    };
    sortDirection: {
        type: () => SortDirection;
        default: string;
    };
    stickyFirstColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyLastColumn: {
        type: BooleanConstructor;
        default: boolean;
    };
    stickyHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyMessage: {
        type: StringConstructor;
        default: string;
    };
    maxHeight: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onSort?: ((column: string, direction: SortDirection) => any) | undefined;
    "onPmg-sort"?: ((sortKeys: string[]) => any) | undefined;
    "onPmg-row-select"?: ((selectedKeys: string[]) => any) | undefined;
    onRowClick?: ((row: TableRow, index: number) => any) | undefined;
    "onUpdate:selected"?: ((selectedKeys: string[]) => any) | undefined;
    "onUpdate:sortKey"?: ((key: string) => any) | undefined;
    "onUpdate:sortDirection"?: ((direction: SortDirection) => any) | undefined;
}>, {
    data: TableRow[];
    columns: TableColumn[];
    selected: string[];
    selectable: boolean;
    multiple: boolean;
    sortable: boolean;
    sortKey: string;
    sortDirection: SortDirection;
    stickyFirstColumn: boolean;
    stickyLastColumn: boolean;
    stickyHeader: boolean;
    loading: boolean;
    striped: boolean;
    bordered: boolean;
    hover: boolean;
    responsive: boolean;
    emptyMessage: string;
    maxHeight: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
