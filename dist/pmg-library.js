import { defineComponent as M, createElementBlock as n, openBlock as d, normalizeClass as b, renderSlot as P, useAttrs as W, computed as S, ref as B, withDirectives as E, createCommentVNode as h, createElementVNode as c, mergeProps as U, unref as u, isRef as O, vModelDynamic as Y, createTextVNode as J, toDisplayString as w, useSlots as Q, watch as $, normalizeStyle as N, Fragment as V, renderList as D, createStaticVNode as X, withModifiers as Z } from "vue";
import { useField as I } from "vee-validate";
const _ = ["disabled"], ee = /* @__PURE__ */ M({
  __name: "PMGButton",
  props: {
    disabled: { type: Boolean, default: !1 },
    size: {
      type: String,
      default: "md"
    },
    theme: {
      type: String,
      default: "default"
    }
  },
  emits: ["click"],
  setup(t) {
    return M({
      name: "PMGButton"
    }), (y, o) => (d(), n("button", {
      disabled: t.disabled,
      class: b([
        "px-4 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        t.size === "sm" ? "text-sm" : t.size === "md" ? "text-base" : t.size === "lg" ? "text-lg" : "",
        t.theme === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "",
        t.theme === "secondary" ? "bg-gray-500 text-white hover:bg-gray-600" : "",
        t.theme === "success" ? "bg-green-500 text-white hover:bg-green-600" : "",
        t.theme === "warning" ? "bg-yellow-500 text-white hover:bg-yellow-600" : "",
        t.theme === "danger" ? "bg-red-500 text-white hover:bg-red-600" : "",
        t.theme === "default" ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "",
        t.disabled ? "opacity-50 cursor-not-allowed" : ""
      ]),
      onClick: o[0] || (o[0] = (g) => y.$emit("click"))
    }, [
      P(y.$slots, "default")
    ], 10, _));
  }
}), te = { class: "relative" }, re = ["type"], oe = { key: 0 }, le = {
  key: 1,
  class: "mb-2 mt-1 text-xs text-red-600"
}, se = /* @__PURE__ */ M({
  __name: "PMGInput",
  props: {
    name: {
      type: String,
      required: !0
      // Ensure name is always provided
    },
    label: {
      type: String,
      required: !0
    },
    modelValue: {
      type: String,
      required: !1
    },
    type: String
  },
  setup(t) {
    const y = t, o = W(), g = S(() => "required" in o), z = B(null), { value: i, handleBlur: p, meta: f, errorMessage: C } = I(
      () => y.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !0
      }
    );
    return (G, v) => (d(), n("div", te, [
      E(c("input", U({
        ref_key: "inputRef",
        ref: z,
        onBlur: v[0] || (v[0] = //@ts-ignore
        (...m) => u(p) && u(p)(...m)),
        "onUpdate:modelValue": v[1] || (v[1] = (m) => O(i) ? i.value = m : null),
        type: t.type
      }, u(o), {
        class: ["peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all focus:border-2 focus:outline-0 disabled:opacity-50", [
          u(o).placeholder ? "" : "placeholder-shown:border",
          u(f).valid === !1 && u(f).touched ? u(o).placeholder ? "border-red-500 border-t-transparent text-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : u(o).placeholder ? "border-gray-700 border-t-transparent text-gray-700 focus:border-gray-700 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent"
        ]]
      }), null, 16, re), [
        [Y, u(i)]
      ]),
      t.label ? (d(), n("label", {
        key: 0,
        class: b(["before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:opacity-50", [
          u(o).placeholder ? "text-[11px] leading-tight" : "peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]",
          u(f).valid === !1 && u(f).touched ? u(o).placeholder ? "text-red-500 before:border-red-500 after:border-red-500 peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-red-500 before:border-red-500 after:border-red-500 peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : u(o).placeholder ? "text-gray-700 before:border-gray-700 after:border-gray-700 peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700" : "text-gray-700 before:border-gray-700 after:border-gray-700 peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
        ]])
      }, [
        J(w(t.label) + " ", 1),
        g.value ? (d(), n("span", oe, "  *")) : h("", !0)
      ], 2)) : h("", !0),
      u(f).touched && u(f).valid === !1 && u(C) ? (d(), n("div", le, w(u(C)), 1)) : h("", !0)
    ]));
  }
}), ae = ["checked", "indeterminate"], ne = ["onClick"], de = { class: "flex items-center justify-between" }, ie = { class: "font-medium" }, ce = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-400"
}, ue = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-600"
}, be = {
  key: 2,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-600"
}, ge = { key: 0 }, fe = ["colspan"], pe = { key: 1 }, me = ["colspan"], he = { class: "py-16" }, ye = { class: "text-base text-pmg-500 text-center" }, ve = ["onClick"], xe = ["checked", "disabled", "onChange"], ke = {
  key: 1,
  class: "font-medium"
}, k = "px-6 py-4", we = /* @__PURE__ */ M({
  __name: "PMGTable",
  props: {
    columns: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      default: () => []
    },
    // Selection props
    selected: {
      type: Array,
      default: () => []
    },
    selectable: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    // Sorting props
    sortable: {
      type: Boolean,
      default: !1
    },
    sortKey: {
      type: String,
      default: ""
    },
    sortDirection: {
      type: String,
      default: "asc"
    },
    // Sticky props
    stickyFirstColumn: {
      type: Boolean,
      default: !1
    },
    stickyLastColumn: {
      type: Boolean,
      default: !1
    },
    stickyHeader: {
      type: Boolean,
      default: !1
    },
    // Layout props
    loading: {
      type: Boolean,
      default: !1
    },
    striped: {
      type: Boolean,
      default: !1
    },
    bordered: {
      type: Boolean,
      default: !1
    },
    hover: {
      type: Boolean,
      default: !0
    },
    responsive: {
      type: Boolean,
      default: !0
    },
    emptyMessage: {
      type: String,
      default: "No data available"
    },
    maxHeight: {
      type: String,
      default: ""
    }
  },
  emits: ["pmg-sort", "pmg-row-select", "sort", "rowClick", "update:selected", "update:sortKey", "update:sortDirection"],
  setup(t, { emit: y }) {
    const o = t, g = y, z = Q(), i = B([...o.selected]), p = B(o.sortKey), f = B(o.sortDirection);
    $(
      () => o.selected,
      (r) => {
        i.value = [...r];
      }
    ), $(
      () => o.sortKey,
      (r) => {
        p.value = r;
      }
    ), $(
      () => o.sortDirection,
      (r) => {
        f.value = r;
      }
    );
    const C = S(() => [
      "w-full border-collapse text-sm",
      o.bordered ? "border border-pmg-200 rounded-xl overflow-hidden shadow-lg" : "border-b border-pmg-200"
    ]), G = S(() => [
      o.responsive ? "overflow-x-auto" : "",
      o.maxHeight ? "overflow-y-auto" : "",
      "relative",
      o.bordered ? "rounded-xl border border-pmg-200 bg-white shadow-lg" : ""
    ]), v = S(() => [
      "bg-gradient-to-r from-pmg-50 to-pmg-100 border-b border-pmg-200",
      o.stickyHeader ? "sticky top-0 z-10" : ""
    ]), m = (r, l) => {
      var e;
      return r._selectionKey || ((e = r.id) == null ? void 0 : e.toString()) || l.toString();
    }, x = (r, l) => {
      const e = m(r, l);
      return i.value.includes(e);
    }, K = (r, l) => {
      if (!o.selectable || r._disabled) return;
      const e = m(r, l), s = i.value.includes(e);
      o.multiple ? s ? i.value = i.value.filter((a) => a !== e) : i.value = [...i.value, e] : i.value = s ? [] : [e], g("update:selected", i.value), g("pmg-row-select", i.value);
    }, q = () => {
      if (!o.selectable || !o.multiple) return;
      const r = o.data.filter((e) => !e._disabled).map((e, s) => m(e, s));
      r.every(
        (e) => i.value.includes(e)
      ) ? i.value = [] : i.value = r, g("update:selected", i.value), g("pmg-row-select", i.value);
    }, F = (r) => {
      if (!r.sortable && !o.sortable) return;
      const l = p.value === r.key && f.value === "asc" ? "desc" : "asc";
      p.value = r.key, f.value = l, g("update:sortKey", r.key), g("update:sortDirection", l), g("sort", r.key, l), g("pmg-sort", [r.key]);
    }, H = (r) => !r.sortable && !o.sortable ? null : p.value !== r.key ? "unsorted" : f.value === "asc" ? "asc" : "desc", T = (r, l) => {
      const e = [
        k,
        "font-semibold text-pmg-800 border-r border-pmg-200 last:border-r-0 bg-gradient-to-r from-pmg-50 to-pmg-100",
        R(r.align),
        r.sortable || o.sortable ? "cursor-pointer hover:from-pmg-100 hover:to-pmg-200 select-none transition-all duration-200 hover:shadow-sm" : ""
      ];
      return o.stickyFirstColumn && l === 0 && e.push(
        "sticky left-0 z-20 bg-gradient-to-r from-pmg-50 to-pmg-100 shadow-lg"
      ), o.stickyLastColumn && l === o.columns.length - 1 && e.push(
        "sticky right-0 z-20 bg-gradient-to-r from-pmg-50 to-pmg-100 shadow-lg"
      ), e;
    }, A = (r, l, e, s) => {
      const a = [
        k,
        "border-r border-pmg-200 last:border-r-0 text-pmg-700",
        R(r.align)
      ];
      return o.stickyFirstColumn && l === 0 && (a.push("sticky left-0 z-10 shadow-lg"), o.striped && s % 2 === 1 ? a.push("bg-pmg-25") : a.push("bg-white")), o.stickyLastColumn && l === o.columns.length - 1 && (a.push("sticky right-0 z-10 shadow-lg"), o.striped && s % 2 === 1 ? a.push("bg-pmg-25") : a.push("bg-white")), r.disabled && a.push("opacity-50 cursor-not-allowed"), a;
    }, j = (r, l = "text") => {
      if (r == null) return "";
      switch (l) {
        case "date":
          return new Date(r).toLocaleDateString();
        case "boolean":
          return r ? "Yes" : "No";
        case "number":
          return typeof r == "number" ? r.toLocaleString() : r;
        default:
          return r;
      }
    }, R = (r = "left") => {
      switch (r) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    };
    return (r, l) => (d(), n("div", {
      class: b(G.value),
      style: N({ maxHeight: t.maxHeight })
    }, [
      c("table", {
        class: b(C.value)
      }, [
        c("thead", {
          class: b(v.value)
        }, [
          c("tr", null, [
            t.selectable && t.multiple ? (d(), n("th", {
              key: 0,
              class: b([
                k,
                "font-semibold text-pmg-800 border-r border-pmg-200 w-12 bg-gradient-to-r from-pmg-50 to-pmg-100",
                t.stickyFirstColumn ? "sticky left-0 z-20 bg-gradient-to-r from-pmg-50 to-pmg-100 shadow-lg" : ""
              ])
            }, [
              c("input", {
                type: "checkbox",
                checked: t.data.length > 0 && t.data.every((e, s) => x(e, s)),
                indeterminate: t.data.some((e, s) => x(e, s)) && !t.data.every((e, s) => x(e, s)),
                onChange: q,
                class: "size-4 text-pmg-600 bg-white border-2 border-pmg-300 rounded-md focus:ring-pmg-500 focus:ring-2 transition-all duration-200 hover:border-pmg-400"
              }, null, 40, ae)
            ], 2)) : h("", !0),
            (d(!0), n(V, null, D(t.columns, (e, s) => (d(), n("th", {
              key: e.key,
              class: b(
                T(
                  e,
                  t.selectable && t.multiple ? s + 1 : s
                )
              ),
              style: N({
                width: e.width,
                minWidth: e.minWidth,
                "--pmg-table-header-cell-width": e.width,
                "--pmg-table-header-cell-min-width": e.minWidth
              }),
              onClick: (a) => F(e)
            }, [
              c("div", de, [
                c("span", ie, w(e.label), 1),
                e.sortable || t.sortable ? (d(), n("span", {
                  key: 0,
                  class: b(["ml-3 flex-shrink-0 transition-colors duration-200", { "text-pmg-600": p.value === e.key }])
                }, [
                  H(e) === "unsorted" ? (d(), n("svg", ce, l[1] || (l[1] = [
                    c("path", { d: "M8 1l3 3H9v4H7V4H5l3-3zM8 15l-3-3h2V8h2v4h2l-3 3z" }, null, -1)
                  ]))) : H(e) === "asc" ? (d(), n("svg", ue, l[2] || (l[2] = [
                    c("path", { d: "M8 1l3 3H9v8H7V4H5l3-3z" }, null, -1)
                  ]))) : H(e) === "desc" ? (d(), n("svg", be, l[3] || (l[3] = [
                    c("path", { d: "M8 15l-3-3h2V4h2v8h2l-3 3z" }, null, -1)
                  ]))) : h("", !0)
                ], 2)) : h("", !0)
              ])
            ], 14, ne))), 128))
          ])
        ], 2),
        c("tbody", null, [
          t.loading ? (d(), n("tr", ge, [
            c("td", {
              colspan: t.columns.length + (t.selectable && t.multiple ? 1 : 0),
              class: b([k, "text-center text-pmg-500"])
            }, l[4] || (l[4] = [
              X('<div class="flex items-center justify-center space-x-4 py-16"><svg class="animate-spin h-6 w-6 text-pmg-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><span class="text-base font-medium text-pmg-700">Loading data...</span></div>', 1)
            ]), 10, fe)
          ])) : t.data.length === 0 ? (d(), n("tr", pe, [
            c("td", {
              colspan: t.columns.length + (t.selectable && t.multiple ? 1 : 0),
              class: b([k, "text-center text-pmg-500"])
            }, [
              c("div", he, [
                l[6] || (l[6] = c("svg", {
                  class: "mx-auto h-16 w-16 text-pmg-300 mb-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "aria-hidden": "true"
                }, [
                  c("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4m-4 0H9m11 0a2 2 0 01-2 2m-4 0H9m0 0H7m2 0v4m6-4v4m2-4v4"
                  })
                ], -1)),
                P(r.$slots, "empty", {}, () => [
                  l[5] || (l[5] = c("h3", { class: "text-lg font-semibold text-pmg-800 mb-2 text-center" }, " No data available ", -1)),
                  c("p", ye, w(t.emptyMessage), 1)
                ])
              ])
            ], 10, me)
          ])) : (d(!0), n(V, { key: 2 }, D(t.data, (e, s) => (d(), n("tr", {
            key: m(e, s),
            class: b([
              "border-b border-pmg-100 last:border-b-0 transition-all duration-200",
              t.striped && s % 2 === 1 ? "bg-pmg-25" : "bg-white",
              t.hover && !e._disabled ? "hover:bg-pmg-50 hover:shadow-sm transition-all duration-200" : "",
              t.selectable && !e._disabled ? "cursor-pointer" : "",
              x(e, s) ? "bg-pmg-100 border-pmg-300 shadow-sm ring-1 ring-pmg-200" : "",
              e._disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : ""
            ]),
            onClick: (a) => !e._disabled && t.selectable ? K(e, s) : e._disabled ? void 0 : g("rowClick", e, s)
          }, [
            t.selectable && t.multiple ? (d(), n("td", {
              key: 0,
              class: b(
                A(
                  { align: "center" },
                  0,
                  e,
                  s
                )
              )
            }, [
              c("input", {
                type: "checkbox",
                checked: x(e, s),
                disabled: e._disabled,
                onClick: l[0] || (l[0] = Z(() => {
                }, ["stop"])),
                onChange: (a) => K(e, s),
                class: "size-4 text-pmg-600 bg-white border-2 border-pmg-300 rounded-md focus:ring-pmg-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:border-pmg-400"
              }, null, 40, xe)
            ], 2)) : h("", !0),
            (d(!0), n(V, null, D(t.columns, (a, L) => (d(), n("td", {
              key: a.key,
              class: b(
                A(
                  a,
                  t.selectable && t.multiple ? L + 1 : L,
                  e,
                  s
                )
              )
            }, [
              u(z)[`cell-${a.key}`] ? P(r.$slots, `cell-${a.key}`, {
                key: 0,
                value: e[a.key],
                row: e,
                index: s,
                column: a
              }) : (d(), n("span", ke, w(j(e[a.key], a.type)), 1))
            ], 2))), 128))
          ], 10, ve))), 128))
        ])
      ], 2)
    ], 6));
  }
}), Be = {
  install(t) {
    t.component("PMGButton", ee), t.component("PMGInput", se), t.component("PMGTable", we);
  }
};
export {
  ee as PMGButton,
  se as PMGInput,
  we as PMGTable,
  Be as default
};
