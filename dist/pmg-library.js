import { defineComponent as S, createElementBlock as i, openBlock as d, normalizeClass as y, renderSlot as C, useAttrs as Y, computed as f, ref as P, withDirectives as J, createCommentVNode as x, createElementVNode as p, mergeProps as Q, unref as b, isRef as X, vModelDynamic as Z, createTextVNode as I, toDisplayString as z, useSlots as ee, watch as D, provide as te, normalizeStyle as L, Fragment as R, renderList as F, createStaticVNode as re, withModifiers as se, inject as G } from "vue";
import { useField as le } from "vee-validate";
const oe = ["disabled"], ae = /* @__PURE__ */ S({
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
  setup(r) {
    return S({
      name: "PMGButton"
    }), (l, e) => (d(), i("button", {
      disabled: r.disabled,
      class: y([
        "px-4 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        r.size === "sm" ? "text-sm" : r.size === "md" ? "text-base" : r.size === "lg" ? "text-lg" : "",
        r.theme === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "",
        r.theme === "secondary" ? "bg-gray-500 text-white hover:bg-gray-600" : "",
        r.theme === "success" ? "bg-green-500 text-white hover:bg-green-600" : "",
        r.theme === "warning" ? "bg-yellow-500 text-white hover:bg-yellow-600" : "",
        r.theme === "danger" ? "bg-red-500 text-white hover:bg-red-600" : "",
        r.theme === "default" ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "",
        r.disabled ? "opacity-50 cursor-not-allowed" : ""
      ]),
      onClick: e[0] || (e[0] = (c) => l.$emit("click"))
    }, [
      C(l.$slots, "default")
    ], 10, oe));
  }
}), ne = { class: "relative" }, ie = ["type"], de = { key: 0 }, ce = {
  key: 1,
  class: "mb-2 mt-1 text-xs text-red-600"
}, ue = /* @__PURE__ */ S({
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
  setup(r) {
    const l = r, e = Y(), c = f(() => "required" in e), h = P(null), { value: a, handleBlur: u, meta: n, errorMessage: v } = le(
      () => l.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !0
      }
    );
    return (B, w) => (d(), i("div", ne, [
      J(p("input", Q({
        ref_key: "inputRef",
        ref: h,
        onBlur: w[0] || (w[0] = //@ts-ignore
        (...k) => b(u) && b(u)(...k)),
        "onUpdate:modelValue": w[1] || (w[1] = (k) => X(a) ? a.value = k : null),
        type: r.type
      }, b(e), {
        class: ["peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all focus:border-2 focus:outline-0 disabled:opacity-50", [
          b(e).placeholder ? "" : "placeholder-shown:border",
          b(n).valid === !1 && b(n).touched ? b(e).placeholder ? "border-red-500 border-t-transparent text-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : b(e).placeholder ? "border-gray-700 border-t-transparent text-gray-700 focus:border-gray-700 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent"
        ]]
      }), null, 16, ie), [
        [Z, b(a)]
      ]),
      r.label ? (d(), i("label", {
        key: 0,
        class: y(["before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:opacity-50", [
          b(e).placeholder ? "text-[11px] leading-tight" : "peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]",
          b(n).valid === !1 && b(n).touched ? b(e).placeholder ? "text-red-500 before:border-red-500 after:border-red-500 peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-red-500 before:border-red-500 after:border-red-500 peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : b(e).placeholder ? "text-gray-700 before:border-gray-700 after:border-gray-700 peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700" : "text-gray-700 before:border-gray-700 after:border-gray-700 peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
        ]])
      }, [
        I(z(r.label) + " ", 1),
        c.value ? (d(), i("span", de, "  *")) : x("", !0)
      ], 2)) : x("", !0),
      b(n).touched && b(n).valid === !1 && b(v) ? (d(), i("div", ce, z(b(v)), 1)) : x("", !0)
    ]));
  }
}), be = ["checked", "indeterminate"], ge = ["onClick"], pe = { class: "flex items-center justify-between" }, fe = { class: "font-medium" }, he = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-400"
}, me = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-600"
}, ye = {
  key: 2,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-600"
}, ve = { key: 2 }, ke = { key: 0 }, xe = ["colspan"], we = { key: 1 }, Ce = ["colspan"], Se = { class: "py-16" }, Me = { class: "text-base text-pmg-500 text-center" }, Be = ["onClick"], $e = ["checked", "disabled", "onChange"], He = {
  key: 1,
  class: "font-medium"
}, H = "px-6 py-4", ze = /* @__PURE__ */ S({
  __name: "PMGTable",
  props: {
    columns: {
      type: Array,
      default: () => []
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
    bordered: {
      type: Boolean,
      default: !1
    },
    hover: {
      type: Boolean,
      default: !0
    },
    // Control whether clicking a row toggles selection
    clickToSelect: {
      type: Boolean,
      default: !1
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
  setup(r, { emit: l }) {
    const e = r, c = l, h = ee(), a = P([...e.selected]), u = P(e.sortKey), n = P(e.sortDirection);
    D(
      () => e.selected,
      (t) => {
        a.value = [...t];
      }
    ), D(
      () => e.sortKey,
      (t) => {
        u.value = t;
      }
    ), D(
      () => e.sortDirection,
      (t) => {
        n.value = t;
      }
    );
    const v = f(() => [
      // Use border-separate for reliable sticky behavior on table cells
      "w-full border-separate border-spacing-0 text-sm",
      e.bordered ? " overflow-hidden " : "border-b border-pmg-200"
    ]), B = f(() => [
      e.responsive ? "overflow-x-auto" : "",
      e.maxHeight ? "overflow-y-auto" : "",
      "relative",
      e.bordered ? "border border-pmg-200 bg-white " : ""
    ]), w = f(() => [
      // Header background; borders are handled on individual TH cells
      "bg-pmg-50"
    ]), k = (t, o) => {
      var s;
      return t._selectionKey || ((s = t.id) == null ? void 0 : s.toString()) || o.toString();
    }, M = (t, o) => {
      const s = k(t, o);
      return a.value.includes(s);
    }, K = (t, o) => {
      if (!e.selectable || t._disabled) return;
      const s = k(t, o), g = a.value.includes(s);
      e.multiple ? g ? a.value = a.value.filter((m) => m !== s) : a.value = [...a.value, s] : a.value = g ? [] : [s], c("update:selected", a.value), c("pmg-row-select", a.value);
    }, $ = () => {
      if (!e.selectable || !e.multiple) return;
      const t = e.data.filter((s) => !s._disabled).map((s, g) => k(s, g));
      t.every(
        (s) => a.value.includes(s)
      ) ? a.value = [] : a.value = t, c("update:selected", a.value), c("pmg-row-select", a.value);
    }, V = f(() => {
      const t = e.data.filter((o) => !o._disabled).map((o, s) => k(o, s));
      return t.length > 0 && t.every((o) => a.value.includes(o));
    }), A = f(() => e.data.filter((o) => !o._disabled).map((o, s) => k(o, s)).some((o) => a.value.includes(o)) && !V.value), j = (t) => {
      if (!t.sortable && !e.sortable) return;
      const o = u.value === t.key && n.value === "asc" ? "desc" : "asc";
      u.value = t.key, n.value = o, c("update:sortKey", t.key), c("update:sortDirection", o), c("sort", t.key, o), c("pmg-sort", [t.key]);
    }, _ = (t) => !t.sortable && !e.sortable ? null : u.value !== t.key ? "unsorted" : n.value === "asc" ? "asc" : "desc", q = (t) => {
      if (!e.sortable || !t) return;
      const o = u.value === t && n.value === "asc" ? "desc" : "asc";
      u.value = t, n.value = o, c("update:sortKey", t), c("update:sortDirection", o), c("sort", t, o), c("pmg-sort", [t]);
    }, E = (t, o) => {
      if (!e.selectable || !t || o) return;
      const s = a.value.includes(t);
      e.multiple ? a.value = s ? a.value.filter((g) => g !== t) : [...a.value, t] : a.value = s ? [] : [t], c("update:selected", a.value), c("pmg-row-select", a.value);
    }, O = (t, o) => {
      const s = [
        H,
        "font-semibold text-pmg-800 border-r border-b border-pmg-200 last:border-r-0 bg-pmg-50",
        W(t.align),
        t.sortable || e.sortable ? "cursor-pointer hover:bg-pmg-100 select-none transition-all duration-200 " : ""
      ];
      e.stickyFirstColumn && o === 0 && s.push("sticky left-0 z-20 bg-pmg-50 ");
      const g = e.selectable ? e.columns.length : e.columns.length - 1;
      return e.stickyLastColumn && o === g && s.push("sticky right-0 z-20 bg-pmg-50 "), e.stickyHeader && s.push("sticky top-0 z-30 bg-pmg-50"), s;
    }, N = (t, o, s, g) => {
      const m = [
        H,
        // vertical and horizontal borders per cell for border-separate layout
        "border-r border-b border-pmg-200 last:border-r-0 text-pmg-700",
        W(t.align)
      ];
      M(s, g) ? m.push("bg-pmg-50") : m.push("bg-white"), e.stickyFirstColumn && o === 0 && m.push("sticky left-0 z-10 ");
      const T = e.selectable ? e.columns.length : e.columns.length - 1;
      return e.stickyLastColumn && o === T && m.push("sticky right-0 z-10 "), t.disabled && m.push("opacity-50 cursor-not-allowed"), m;
    }, U = (t, o = "text") => {
      if (t == null) return "";
      switch (o) {
        case "date":
          return new Date(t).toLocaleDateString();
        case "boolean":
          return t ? "Yes" : "No";
        case "number":
          return typeof t == "number" ? t.toLocaleString() : t;
        default:
          return t;
      }
    }, W = (t = "left") => {
      switch (t) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    };
    return te("pmgTable", {
      internalSelected: a,
      internalSortKey: u,
      internalSortDirection: n,
      selectable: f(() => e.selectable),
      multiple: f(() => e.multiple),
      sortable: f(() => e.sortable),
      hover: f(() => e.hover),
      clickToSelect: f(() => e.clickToSelect),
      stickyFirstColumn: f(() => e.stickyFirstColumn),
      stickyLastColumn: f(() => e.stickyLastColumn),
      areAllRowsSelected: V,
      areSomeRowsSelected: A,
      selectAllRows: $,
      toggleRowSelectionByKey: E,
      setSortByKey: q
    }), (t, o) => (d(), i("div", {
      class: y(B.value),
      style: L({ maxHeight: r.maxHeight })
    }, [
      p("table", {
        class: y(v.value)
      }, [
        b(h).default ? C(t.$slots, "default", { key: 0 }) : (d(), i("thead", {
          key: 1,
          class: y(w.value)
        }, [
          p("tr", null, [
            r.selectable ? (d(), i("th", {
              key: 0,
              class: y([
                H,
                "font-semibold text-pmg-800 border-r border-b border-pmg-200 w-12 bg-pmg-50",
                r.stickyFirstColumn ? "sticky left-0 z-20 bg-pmg-50 " : ""
              ])
            }, [
              r.multiple ? (d(), i("input", {
                key: 0,
                type: "checkbox",
                checked: V.value,
                indeterminate: A.value,
                onChange: $,
                class: "size-4 text-pmg-600 bg-white border-2 border-pmg-300 focus:ring-pmg-500 focus:ring-2 transition-all duration-200 hover:border-pmg-400"
              }, null, 40, be)) : x("", !0)
            ], 2)) : x("", !0),
            (d(!0), i(R, null, F(r.columns, (s, g) => (d(), i("th", {
              key: s.key,
              class: y(O(s, r.selectable ? g + 1 : g)),
              style: L({
                width: s.width,
                minWidth: s.minWidth,
                "--pmg-table-header-cell-width": s.width,
                "--pmg-table-header-cell-min-width": s.minWidth
              }),
              onClick: (m) => j(s)
            }, [
              p("div", pe, [
                p("span", fe, z(s.label), 1),
                s.sortable || r.sortable ? (d(), i("span", {
                  key: 0,
                  class: y(["ml-3 flex-shrink-0 transition-colors duration-200", { "text-pmg-600": u.value === s.key }])
                }, [
                  _(s) === "unsorted" ? (d(), i("svg", he, o[1] || (o[1] = [
                    p("path", { d: "M8 1l3 3H9v4H7V4H5l3-3zM8 15l-3-3h2V8h2v4h2l-3 3z" }, null, -1)
                  ]))) : _(s) === "asc" ? (d(), i("svg", me, o[2] || (o[2] = [
                    p("path", { d: "M8 1l3 3H9v8H7V4H5l3-3z" }, null, -1)
                  ]))) : _(s) === "desc" ? (d(), i("svg", ye, o[3] || (o[3] = [
                    p("path", { d: "M8 15l-3-3h2V4h2v8h2l-3 3z" }, null, -1)
                  ]))) : x("", !0)
                ], 2)) : x("", !0)
              ])
            ], 14, ge))), 128))
          ])
        ], 2)),
        b(h).default ? x("", !0) : (d(), i("tbody", ve, [
          r.loading ? (d(), i("tr", ke, [
            p("td", {
              colspan: r.columns.length + (r.selectable ? 1 : 0),
              class: y([H, "text-center text-pmg-500"])
            }, o[4] || (o[4] = [
              re('<div class="flex items-center justify-center space-x-4 py-16"><svg class="animate-spin h-6 w-6 text-pmg-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><span class="text-base font-medium text-pmg-700">Loading data...</span></div>', 1)
            ]), 10, xe)
          ])) : r.data.length === 0 ? (d(), i("tr", we, [
            p("td", {
              colspan: r.columns.length + (r.selectable ? 1 : 0),
              class: y([H, "text-center text-pmg-500"])
            }, [
              p("div", Se, [
                o[6] || (o[6] = p("svg", {
                  class: "mx-auto h-16 w-16 text-pmg-300 mb-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "aria-hidden": "true"
                }, [
                  p("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4m-4 0H9m11 0a2 2 0 01-2 2m-4 0H9m0 0H7m2 0v4m6-4v4m2-4v4"
                  })
                ], -1)),
                C(t.$slots, "empty", {}, () => [
                  o[5] || (o[5] = p("h3", { class: "text-lg font-semibold text-pmg-800 mb-2 text-center" }, " No data available ", -1)),
                  p("p", Me, z(r.emptyMessage), 1)
                ])
              ])
            ], 10, Ce)
          ])) : (d(!0), i(R, { key: 2 }, F(r.data, (s, g) => (d(), i("tr", {
            key: k(s, g),
            class: y([
              "transition-all duration-200",
              "bg-white",
              r.hover && !s._disabled ? "hover:bg-pmg-50  transition-all duration-200" : "",
              // no row click-to-select when selectable; keep cursor default
              M(s, g) ? "bg-pmg-100 border-pmg-300  ring-1 ring-pmg-200" : "",
              s._disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : ""
            ]),
            onClick: (m) => s._disabled ? void 0 : c("rowClick", s, g)
          }, [
            r.selectable ? (d(), i("td", {
              key: 0,
              class: y(
                N(
                  { align: "center" },
                  0,
                  s,
                  g
                )
              )
            }, [
              p("input", {
                type: "checkbox",
                checked: M(s, g),
                disabled: s._disabled,
                onClick: o[0] || (o[0] = se(() => {
                }, ["stop"])),
                onChange: (m) => K(s, g),
                class: "size-4 text-pmg-600 bg-white border-2 border-pmg-300 focus:ring-pmg-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:border-pmg-400"
              }, null, 40, $e)
            ], 2)) : x("", !0),
            (d(!0), i(R, null, F(r.columns, (m, T) => (d(), i("td", {
              key: m.key,
              class: y(
                N(
                  m,
                  r.selectable ? T + 1 : T,
                  s,
                  g
                )
              )
            }, [
              b(h)[`cell-${m.key}`] ? C(t.$slots, `cell-${m.key}`, {
                key: 0,
                value: s[m.key],
                row: s,
                index: g,
                column: m
              }) : (d(), i("span", He, z(U(s[m.key], m.type)), 1))
            ], 2))), 128))
          ], 10, Be))), 128))
        ]))
      ], 2)
    ], 6));
  }
}), Ke = /* @__PURE__ */ S({
  __name: "PMGTableHeader",
  props: {
    sticky: { type: Boolean }
  },
  setup(r) {
    const l = G("pmgTable"), e = r, c = f(() => {
      var h;
      return [
        "bg-pmg-50 border-b border-pmg-200",
        e.sticky ?? ((h = l == null ? void 0 : l.stickyHeader) == null ? void 0 : h.value) ? "sticky top-0 z-10 shadow-sm" : ""
      ];
    });
    return (h, a) => (d(), i("thead", {
      class: y(c.value)
    }, [
      C(h.$slots, "default")
    ], 2));
  }
}), Te = (r, l) => {
  const e = r.__vccOpts || r;
  for (const [c, h] of l)
    e[c] = h;
  return e;
}, Pe = {};
function Ge(r, l) {
  return d(), i("tbody", null, [
    C(r.$slots, "default")
  ]);
}
const Ve = /* @__PURE__ */ Te(Pe, [["render", Ge]]), _e = /* @__PURE__ */ S({
  __name: "PMGTableRow",
  props: {
    selectionKey: {},
    disabled: { type: Boolean }
  },
  setup(r) {
    const l = G("pmgTable"), e = r, c = f(() => {
      var u, n;
      return !!e.selectionKey && ((n = (u = l == null ? void 0 : l.internalSelected) == null ? void 0 : u.value) == null ? void 0 : n.includes(e.selectionKey));
    }), h = f(() => {
      var u, n;
      return [
        "border-b border-pmg-100 last:border-b-0 transition-all duration-200",
        "bg-white",
        (u = l == null ? void 0 : l.hover) != null && u.value && !e.disabled ? "hover:bg-pmg-50 hover:shadow-sm" : "",
        e.disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : "",
        c.value ? "bg-pmg-100 border-pmg-300 shadow-sm ring-1 ring-pmg-200" : "",
        (n = l == null ? void 0 : l.selectable) != null && n.value && !e.disabled ? "cursor-pointer" : ""
      ];
    });
    function a() {
      var u, n, v;
      e.disabled || (u = l == null ? void 0 : l.selectable) != null && u.value && ((n = l == null ? void 0 : l.clickToSelect) != null && n.value) && e.selectionKey && ((v = l.toggleRowSelectionByKey) == null || v.call(l, e.selectionKey, e.disabled));
    }
    return (u, n) => (d(), i("tr", {
      class: y(h.value),
      onClick: a
    }, [
      C(u.$slots, "default")
    ], 2));
  }
}), De = { class: "flex items-center justify-between" }, Re = { class: "font-medium" }, Fe = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-400"
}, Le = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-600"
}, Ae = {
  key: 2,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-600"
}, Ne = "px-6 py-4 font-semibold text-pmg-800 border-r border-pmg-200 last:border-r-0 bg-pmg-50", We = /* @__PURE__ */ S({
  __name: "PMGTableHeaderCell",
  props: {
    sortKey: {},
    width: {},
    minWidth: {},
    align: {},
    sticky: { type: [Boolean, String] }
  },
  setup(r) {
    const l = G("pmgTable"), e = r, c = f(() => {
      switch (e.align) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    }), h = f(() => {
      var n;
      return !!(e.sortKey && ((n = l == null ? void 0 : l.sortable) != null && n.value));
    }), a = f(() => {
      var n;
      return [
        Ne,
        c.value,
        h.value ? "cursor-pointer hover:bg-pmg-100 select-none transition-all duration-200 hover:shadow-sm" : "",
        e.sticky === "right" ? "sticky right-0 z-20 bg-pmg-50 shadow-lg" : e.sticky || (n = l == null ? void 0 : l.stickyFirstColumn) != null && n.value ? "sticky left-0 z-20 bg-pmg-50 shadow-lg" : ""
      ];
    });
    function u() {
      var n;
      h.value && ((n = l == null ? void 0 : l.setSortByKey) == null || n.call(l, e.sortKey));
    }
    return (n, v) => {
      var B, w, k, M, K, $;
      return d(), i("th", {
        class: y(a.value),
        style: L({
          width: e.width,
          minWidth: e.minWidth,
          "--pmg-table-header-cell-width": e.width,
          "--pmg-table-header-cell-min-width": e.minWidth
        }),
        onClick: u
      }, [
        p("div", De, [
          p("span", Re, [
            C(n.$slots, "default")
          ]),
          h.value ? (d(), i("span", {
            key: 0,
            class: y(["ml-3 flex-shrink-0 transition-colors duration-200", {
              "text-pmg-600": ((w = (B = b(l)) == null ? void 0 : B.internalSortKey) == null ? void 0 : w.value) === e.sortKey
            }])
          }, [
            ((M = (k = b(l)) == null ? void 0 : k.internalSortKey) == null ? void 0 : M.value) !== e.sortKey ? (d(), i("svg", Fe, v[0] || (v[0] = [
              p("path", { d: "M8 1l3 3H9v4H7V4H5l3-3zM8 15l-3-3h2V8h2v4h2l-3 3z" }, null, -1)
            ]))) : (($ = (K = b(l)) == null ? void 0 : K.internalSortDirection) == null ? void 0 : $.value) === "asc" ? (d(), i("svg", Le, v[1] || (v[1] = [
              p("path", { d: "M8 1l3 3H9v8H7V4H5l3-3z" }, null, -1)
            ]))) : (d(), i("svg", Ae, v[2] || (v[2] = [
              p("path", { d: "M8 15l-3-3h2V4h2v8h2l-3 3z" }, null, -1)
            ])))
          ], 2)) : x("", !0)
        ])
      ], 6);
    };
  }
}), je = "px-6 py-4 border-r border-pmg-200 last:border-r-0 text-pmg-700", qe = /* @__PURE__ */ S({
  __name: "PMGTableCell",
  props: {
    align: {},
    sticky: { type: [String, Boolean] }
  },
  setup(r) {
    const l = G("pmgTable"), e = r, c = f(() => {
      switch (e.align) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    }), h = f(() => {
      var a, u;
      return e.sticky === "left" || e.sticky === !0 && ((a = l == null ? void 0 : l.stickyFirstColumn) != null && a.value) ? "sticky left-0 z-10 shadow-lg bg-white" : e.sticky === "right" || e.sticky === !0 && ((u = l == null ? void 0 : l.stickyLastColumn) != null && u.value) ? "sticky right-0 z-10 shadow-lg bg-white" : "";
    });
    return (a, u) => (d(), i("td", {
      class: y([je, c.value, h.value])
    }, [
      C(a.$slots, "default")
    ], 2));
  }
}), Ue = {
  install(r) {
    r.component("PMGButton", ae), r.component("PMGInput", ue), r.component("PMGTable", ze), r.component("PMGTableHeader", Ke), r.component("PMGTableBody", Ve), r.component("PMGTableRow", _e), r.component("PMGTableHeaderCell", We), r.component("PMGTableCell", qe);
  }
};
export {
  ae as PMGButton,
  ue as PMGInput,
  ze as PMGTable,
  Ve as PMGTableBody,
  qe as PMGTableCell,
  Ke as PMGTableHeader,
  We as PMGTableHeaderCell,
  _e as PMGTableRow,
  Ue as default
};
