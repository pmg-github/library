import { defineComponent as M, createElementBlock as i, openBlock as d, normalizeClass as y, renderSlot as S, useAttrs as U, computed as m, ref as P, withDirectives as Y, createCommentVNode as C, createElementVNode as f, mergeProps as J, unref as p, isRef as Q, vModelDynamic as X, createTextVNode as Z, toDisplayString as z, useSlots as I, watch as V, provide as _, normalizeStyle as F, Fragment as D, renderList as R, createStaticVNode as ee, withModifiers as te, inject as G } from "vue";
import { useField as re } from "vee-validate";
const se = ["disabled"], le = /* @__PURE__ */ M({
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
    }), (l, e) => (d(), i("button", {
      disabled: t.disabled,
      class: y([
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
      onClick: e[0] || (e[0] = (u) => l.$emit("click"))
    }, [
      S(l.$slots, "default")
    ], 10, se));
  }
}), oe = { class: "relative" }, ae = ["type"], ne = { key: 0 }, ie = {
  key: 1,
  class: "mb-2 mt-1 text-xs text-red-600"
}, de = /* @__PURE__ */ M({
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
    const l = t, e = U(), u = m(() => "required" in e), h = P(null), { value: a, handleBlur: b, meta: n, errorMessage: v } = re(
      () => l.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !0
      }
    );
    return (B, w) => (d(), i("div", oe, [
      Y(f("input", J({
        ref_key: "inputRef",
        ref: h,
        onBlur: w[0] || (w[0] = //@ts-ignore
        (...k) => p(b) && p(b)(...k)),
        "onUpdate:modelValue": w[1] || (w[1] = (k) => Q(a) ? a.value = k : null),
        type: t.type
      }, p(e), {
        class: ["peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all focus:border-2 focus:outline-0 disabled:opacity-50", [
          p(e).placeholder ? "" : "placeholder-shown:border",
          p(n).valid === !1 && p(n).touched ? p(e).placeholder ? "border-red-500 border-t-transparent text-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : p(e).placeholder ? "border-gray-700 border-t-transparent text-gray-700 focus:border-gray-700 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent"
        ]]
      }), null, 16, ae), [
        [X, p(a)]
      ]),
      t.label ? (d(), i("label", {
        key: 0,
        class: y(["before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:opacity-50", [
          p(e).placeholder ? "text-[11px] leading-tight" : "peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]",
          p(n).valid === !1 && p(n).touched ? p(e).placeholder ? "text-red-500 before:border-red-500 after:border-red-500 peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-red-500 before:border-red-500 after:border-red-500 peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : p(e).placeholder ? "text-gray-700 before:border-gray-700 after:border-gray-700 peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700" : "text-gray-700 before:border-gray-700 after:border-gray-700 peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
        ]])
      }, [
        Z(z(t.label) + " ", 1),
        u.value ? (d(), i("span", ne, "  *")) : C("", !0)
      ], 2)) : C("", !0),
      p(n).touched && p(n).valid === !1 && p(v) ? (d(), i("div", ie, z(p(v)), 1)) : C("", !0)
    ]));
  }
}), ce = ["checked", "indeterminate"], ue = ["onClick"], be = { class: "flex items-center justify-between" }, ge = { class: "font-medium" }, pe = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-400"
}, fe = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-600"
}, he = {
  key: 2,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-600"
}, me = { key: 2 }, ye = { key: 0 }, ve = ["colspan"], ke = { key: 1 }, xe = ["colspan"], we = { class: "py-16" }, Ce = { class: "text-base text-pmg-500 text-center" }, Se = ["onClick"], Me = ["checked", "disabled", "onChange"], Be = {
  key: 1,
  class: "font-medium"
}, H = "px-6 py-4", $e = /* @__PURE__ */ M({
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
  setup(t, { emit: l }) {
    const e = t, u = l, h = I(), a = P([...e.selected]), b = P(e.sortKey), n = P(e.sortDirection);
    V(
      () => e.selected,
      (s) => {
        a.value = [...s];
      }
    ), V(
      () => e.sortKey,
      (s) => {
        b.value = s;
      }
    ), V(
      () => e.sortDirection,
      (s) => {
        n.value = s;
      }
    );
    const v = m(() => [
      "w-full border-collapse text-sm",
      e.bordered ? " overflow-hidden shadow" : "border-b border-pmg-200"
    ]), B = m(() => [
      e.responsive ? "overflow-x-auto" : "",
      e.maxHeight ? "overflow-y-auto" : "",
      "relative",
      e.bordered ? " border border-pmg-200 bg-white shadow" : ""
    ]), w = m(() => [
      "bg-pmg-50 border-b border-pmg-200",
      e.stickyHeader ? "sticky top-0 z-10 shadow-sm" : ""
    ]), k = (s, o) => {
      var r;
      return s._selectionKey || ((r = s.id) == null ? void 0 : r.toString()) || o.toString();
    }, x = (s, o) => {
      const r = k(s, o);
      return a.value.includes(r);
    }, $ = (s, o) => {
      if (!e.selectable || s._disabled) return;
      const r = k(s, o), c = a.value.includes(r);
      e.multiple ? c ? a.value = a.value.filter((g) => g !== r) : a.value = [...a.value, r] : a.value = c ? [] : [r], u("update:selected", a.value), u("pmg-row-select", a.value);
    }, K = () => {
      if (!e.selectable || !e.multiple) return;
      const s = e.data.filter((r) => !r._disabled).map((r, c) => k(r, c));
      s.every(
        (r) => a.value.includes(r)
      ) ? a.value = [] : a.value = s, u("update:selected", a.value), u("pmg-row-select", a.value);
    }, W = (s) => {
      if (!s.sortable && !e.sortable) return;
      const o = b.value === s.key && n.value === "asc" ? "desc" : "asc";
      b.value = s.key, n.value = o, u("update:sortKey", s.key), u("update:sortDirection", o), u("sort", s.key, o), u("pmg-sort", [s.key]);
    }, T = (s) => !s.sortable && !e.sortable ? null : b.value !== s.key ? "unsorted" : n.value === "asc" ? "asc" : "desc", j = (s) => {
      if (!e.sortable || !s) return;
      const o = b.value === s && n.value === "asc" ? "desc" : "asc";
      b.value = s, n.value = o, u("update:sortKey", s), u("update:sortDirection", o), u("sort", s, o), u("pmg-sort", [s]);
    }, q = (s, o) => {
      if (!e.selectable || !s || o) return;
      const r = a.value.includes(s);
      e.multiple ? a.value = r ? a.value.filter((c) => c !== s) : [...a.value, s] : a.value = r ? [] : [s], u("update:selected", a.value), u("pmg-row-select", a.value);
    }, E = (s, o) => {
      const r = [
        H,
        "font-semibold text-pmg-800 border-r border-pmg-200 last:border-r-0 bg-pmg-50",
        A(s.align),
        s.sortable || e.sortable ? "cursor-pointer hover:bg-pmg-100 select-none transition-all duration-200 hover:shadow-sm" : ""
      ];
      return e.stickyFirstColumn && o === 0 && r.push("sticky left-0 z-20 bg-pmg-50 shadow-lg"), e.stickyLastColumn && o === e.columns.length - 1 && r.push("sticky right-0 z-20 bg-pmg-50 shadow-lg"), r;
    }, L = (s, o, r, c) => {
      const g = [
        H,
        "border-r border-pmg-200 last:border-r-0 text-pmg-700",
        A(s.align)
      ];
      return e.stickyFirstColumn && o === 0 && (g.push("sticky left-0 z-10 shadow-lg"), x(r, c) ? g.push("bg-pmg-100") : e.striped && c % 2 === 1 ? g.push("bg-pmg-25") : g.push("bg-white")), e.stickyLastColumn && o === e.columns.length - 1 && (g.push("sticky right-0 z-10 shadow-lg"), x(r, c) ? g.push("bg-pmg-100") : e.striped && c % 2 === 1 ? g.push("bg-pmg-25") : g.push("bg-white")), s.disabled && g.push("opacity-50 cursor-not-allowed"), g;
    }, O = (s, o = "text") => {
      if (s == null) return "";
      switch (o) {
        case "date":
          return new Date(s).toLocaleDateString();
        case "boolean":
          return s ? "Yes" : "No";
        case "number":
          return typeof s == "number" ? s.toLocaleString() : s;
        default:
          return s;
      }
    }, A = (s = "left") => {
      switch (s) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    };
    return _("pmgTable", {
      internalSelected: a,
      internalSortKey: b,
      internalSortDirection: n,
      selectable: m(() => e.selectable),
      multiple: m(() => e.multiple),
      sortable: m(() => e.sortable),
      striped: m(() => e.striped),
      hover: m(() => e.hover),
      stickyFirstColumn: m(() => e.stickyFirstColumn),
      stickyLastColumn: m(() => e.stickyLastColumn),
      toggleRowSelectionByKey: q,
      setSortByKey: j
    }), (s, o) => (d(), i("div", {
      class: y(B.value),
      style: F({ maxHeight: t.maxHeight })
    }, [
      f("table", {
        class: y(v.value)
      }, [
        p(h).default ? S(s.$slots, "default", { key: 0 }) : (d(), i("thead", {
          key: 1,
          class: y(w.value)
        }, [
          f("tr", null, [
            t.selectable && t.multiple ? (d(), i("th", {
              key: 0,
              class: y([
                H,
                "font-semibold text-pmg-800 border-r border-pmg-200 w-12 bg-pmg-50",
                t.stickyFirstColumn ? "sticky left-0 z-20 bg-pmg-50 shadow-lg" : ""
              ])
            }, [
              f("input", {
                type: "checkbox",
                checked: t.data.length > 0 && t.data.every((r, c) => x(r, c)),
                indeterminate: t.data.some((r, c) => x(r, c)) && !t.data.every((r, c) => x(r, c)),
                onChange: K,
                class: "size-4 text-pmg-600 bg-white border-2 border-pmg-300 focus:ring-pmg-500 focus:ring-2 transition-all duration-200 hover:border-pmg-400"
              }, null, 40, ce)
            ], 2)) : C("", !0),
            (d(!0), i(D, null, R(t.columns, (r, c) => (d(), i("th", {
              key: r.key,
              class: y(
                E(
                  r,
                  t.selectable && t.multiple ? c + 1 : c
                )
              ),
              style: F({
                width: r.width,
                minWidth: r.minWidth,
                "--pmg-table-header-cell-width": r.width,
                "--pmg-table-header-cell-min-width": r.minWidth
              }),
              onClick: (g) => W(r)
            }, [
              f("div", be, [
                f("span", ge, z(r.label), 1),
                r.sortable || t.sortable ? (d(), i("span", {
                  key: 0,
                  class: y(["ml-3 flex-shrink-0 transition-colors duration-200", { "text-pmg-600": b.value === r.key }])
                }, [
                  T(r) === "unsorted" ? (d(), i("svg", pe, o[1] || (o[1] = [
                    f("path", { d: "M8 1l3 3H9v4H7V4H5l3-3zM8 15l-3-3h2V8h2v4h2l-3 3z" }, null, -1)
                  ]))) : T(r) === "asc" ? (d(), i("svg", fe, o[2] || (o[2] = [
                    f("path", { d: "M8 1l3 3H9v8H7V4H5l3-3z" }, null, -1)
                  ]))) : T(r) === "desc" ? (d(), i("svg", he, o[3] || (o[3] = [
                    f("path", { d: "M8 15l-3-3h2V4h2v8h2l-3 3z" }, null, -1)
                  ]))) : C("", !0)
                ], 2)) : C("", !0)
              ])
            ], 14, ue))), 128))
          ])
        ], 2)),
        p(h).default ? C("", !0) : (d(), i("tbody", me, [
          t.loading ? (d(), i("tr", ye, [
            f("td", {
              colspan: t.columns.length + (t.selectable && t.multiple ? 1 : 0),
              class: y([H, "text-center text-pmg-500"])
            }, o[4] || (o[4] = [
              ee('<div class="flex items-center justify-center space-x-4 py-16"><svg class="animate-spin h-6 w-6 text-pmg-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><span class="text-base font-medium text-pmg-700">Loading data...</span></div>', 1)
            ]), 10, ve)
          ])) : t.data.length === 0 ? (d(), i("tr", ke, [
            f("td", {
              colspan: t.columns.length + (t.selectable && t.multiple ? 1 : 0),
              class: y([H, "text-center text-pmg-500"])
            }, [
              f("div", we, [
                o[6] || (o[6] = f("svg", {
                  class: "mx-auto h-16 w-16 text-pmg-300 mb-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "aria-hidden": "true"
                }, [
                  f("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "1.5",
                    d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4m-4 0H9m11 0a2 2 0 01-2 2m-4 0H9m0 0H7m2 0v4m6-4v4m2-4v4"
                  })
                ], -1)),
                S(s.$slots, "empty", {}, () => [
                  o[5] || (o[5] = f("h3", { class: "text-lg font-semibold text-pmg-800 mb-2 text-center" }, " No data available ", -1)),
                  f("p", Ce, z(t.emptyMessage), 1)
                ])
              ])
            ], 10, xe)
          ])) : (d(!0), i(D, { key: 2 }, R(t.data, (r, c) => (d(), i("tr", {
            key: k(r, c),
            class: y([
              "border-b border-pmg-100 last:border-b-0 transition-all duration-200",
              t.striped && c % 2 === 1 ? "bg-pmg-25" : "bg-white",
              t.hover && !r._disabled ? "hover:bg-pmg-50 hover:shadow-sm transition-all duration-200" : "",
              t.selectable && !r._disabled ? "cursor-pointer" : "",
              x(r, c) ? "bg-pmg-100 border-pmg-300 shadow-sm ring-1 ring-pmg-200" : "",
              r._disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : ""
            ]),
            onClick: (g) => !r._disabled && t.selectable ? $(r, c) : r._disabled ? void 0 : u("rowClick", r, c)
          }, [
            t.selectable && t.multiple ? (d(), i("td", {
              key: 0,
              class: y(
                L(
                  { align: "center" },
                  0,
                  r,
                  c
                )
              )
            }, [
              f("input", {
                type: "checkbox",
                checked: x(r, c),
                disabled: r._disabled,
                onClick: o[0] || (o[0] = te(() => {
                }, ["stop"])),
                onChange: (g) => $(r, c),
                class: "size-4 text-pmg-600 bg-white border-2 border-pmg-300 focus:ring-pmg-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:border-pmg-400"
              }, null, 40, Me)
            ], 2)) : C("", !0),
            (d(!0), i(D, null, R(t.columns, (g, N) => (d(), i("td", {
              key: g.key,
              class: y(
                L(
                  g,
                  t.selectable && t.multiple ? N + 1 : N,
                  r,
                  c
                )
              )
            }, [
              p(h)[`cell-${g.key}`] ? S(s.$slots, `cell-${g.key}`, {
                key: 0,
                value: r[g.key],
                row: r,
                index: c,
                column: g
              }) : (d(), i("span", Be, z(O(r[g.key], g.type)), 1))
            ], 2))), 128))
          ], 10, Se))), 128))
        ]))
      ], 2)
    ], 6));
  }
}), He = /* @__PURE__ */ M({
  __name: "PMGTableHeader",
  props: {
    sticky: { type: Boolean }
  },
  setup(t) {
    const l = G("pmgTable"), e = t, u = m(() => {
      var h;
      return [
        "bg-pmg-50 border-b border-pmg-200",
        e.sticky ?? ((h = l == null ? void 0 : l.stickyHeader) == null ? void 0 : h.value) ? "sticky top-0 z-10 shadow-sm" : ""
      ];
    });
    return (h, a) => (d(), i("thead", {
      class: y(u.value)
    }, [
      S(h.$slots, "default")
    ], 2));
  }
}), ze = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [u, h] of l)
    e[u] = h;
  return e;
}, Ke = {};
function Pe(t, l) {
  return d(), i("tbody", null, [
    S(t.$slots, "default")
  ]);
}
const Ge = /* @__PURE__ */ ze(Ke, [["render", Pe]]), Te = /* @__PURE__ */ M({
  __name: "PMGTableRow",
  props: {
    selectionKey: {},
    disabled: { type: Boolean }
  },
  setup(t) {
    const l = G("pmgTable"), e = t, u = m(() => {
      var b, n;
      return !!e.selectionKey && ((n = (b = l == null ? void 0 : l.internalSelected) == null ? void 0 : b.value) == null ? void 0 : n.includes(e.selectionKey));
    }), h = m(() => {
      var b, n, v;
      return [
        "border-b border-pmg-100 last:border-b-0 transition-all duration-200",
        (b = l == null ? void 0 : l.striped) != null && b.value ? "odd:bg-white even:bg-pmg-25" : "bg-white",
        (n = l == null ? void 0 : l.hover) != null && n.value && !e.disabled ? "hover:bg-pmg-50 hover:shadow-sm" : "",
        e.disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : "",
        u.value ? "bg-pmg-100 border-pmg-300 shadow-sm ring-1 ring-pmg-200" : "",
        (v = l == null ? void 0 : l.selectable) != null && v.value && !e.disabled ? "cursor-pointer" : ""
      ];
    });
    function a() {
      var b, n;
      e.disabled || (b = l == null ? void 0 : l.selectable) != null && b.value && e.selectionKey && ((n = l.toggleRowSelectionByKey) == null || n.call(l, e.selectionKey, e.disabled));
    }
    return (b, n) => (d(), i("tr", {
      class: y(h.value),
      onClick: a
    }, [
      S(b.$slots, "default")
    ], 2));
  }
}), Ve = { class: "flex items-center justify-between" }, De = { class: "font-medium" }, Re = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-400"
}, Fe = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-600"
}, Le = {
  key: 2,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  class: "text-pmg-600"
}, Ae = "px-6 py-4 font-semibold text-pmg-800 border-r border-pmg-200 last:border-r-0 bg-pmg-50", Ne = /* @__PURE__ */ M({
  __name: "PMGTableHeaderCell",
  props: {
    sortKey: {},
    width: {},
    minWidth: {},
    align: {},
    sticky: { type: Boolean }
  },
  setup(t) {
    const l = G("pmgTable"), e = t, u = m(() => {
      switch (e.align) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    }), h = m(() => {
      var n;
      return !!(e.sortKey && ((n = l == null ? void 0 : l.sortable) != null && n.value));
    }), a = m(() => {
      var n;
      return [
        Ae,
        u.value,
        h.value ? "cursor-pointer hover:bg-pmg-100 select-none transition-all duration-200 hover:shadow-sm" : "",
        e.sticky || (n = l == null ? void 0 : l.stickyFirstColumn) != null && n.value ? "sticky left-0 z-20 bg-pmg-50 shadow-lg" : ""
      ];
    });
    function b() {
      var n;
      h.value && ((n = l == null ? void 0 : l.setSortByKey) == null || n.call(l, e.sortKey));
    }
    return (n, v) => {
      var B, w, k, x, $, K;
      return d(), i("th", {
        class: y(a.value),
        style: F({
          width: e.width,
          minWidth: e.minWidth,
          "--pmg-table-header-cell-width": e.width,
          "--pmg-table-header-cell-min-width": e.minWidth
        }),
        onClick: b
      }, [
        f("div", Ve, [
          f("span", De, [
            S(n.$slots, "default")
          ]),
          h.value ? (d(), i("span", {
            key: 0,
            class: y(["ml-3 flex-shrink-0 transition-colors duration-200", {
              "text-pmg-600": ((w = (B = p(l)) == null ? void 0 : B.internalSortKey) == null ? void 0 : w.value) === e.sortKey
            }])
          }, [
            ((x = (k = p(l)) == null ? void 0 : k.internalSortKey) == null ? void 0 : x.value) !== e.sortKey ? (d(), i("svg", Re, v[0] || (v[0] = [
              f("path", { d: "M8 1l3 3H9v4H7V4H5l3-3zM8 15l-3-3h2V8h2v4h2l-3 3z" }, null, -1)
            ]))) : ((K = ($ = p(l)) == null ? void 0 : $.internalSortDirection) == null ? void 0 : K.value) === "asc" ? (d(), i("svg", Fe, v[1] || (v[1] = [
              f("path", { d: "M8 1l3 3H9v8H7V4H5l3-3z" }, null, -1)
            ]))) : (d(), i("svg", Le, v[2] || (v[2] = [
              f("path", { d: "M8 15l-3-3h2V4h2v8h2l-3 3z" }, null, -1)
            ])))
          ], 2)) : C("", !0)
        ])
      ], 6);
    };
  }
}), We = "px-6 py-4 border-r border-pmg-200 last:border-r-0 text-pmg-700", je = /* @__PURE__ */ M({
  __name: "PMGTableCell",
  props: {
    align: {},
    sticky: { type: [String, Boolean] }
  },
  setup(t) {
    const l = G("pmgTable"), e = t, u = m(() => {
      switch (e.align) {
        case "center":
          return "text-center";
        case "right":
          return "text-right";
        default:
          return "text-left";
      }
    }), h = m(() => {
      var a, b;
      return e.sticky === "left" || e.sticky === !0 && ((a = l == null ? void 0 : l.stickyFirstColumn) != null && a.value) ? "sticky left-0 z-10 shadow-lg bg-white" : e.sticky === "right" || e.sticky === !0 && ((b = l == null ? void 0 : l.stickyLastColumn) != null && b.value) ? "sticky right-0 z-10 shadow-lg bg-white" : "";
    });
    return (a, b) => (d(), i("td", {
      class: y([We, u.value, h.value])
    }, [
      S(a.$slots, "default")
    ], 2));
  }
}), Oe = {
  install(t) {
    t.component("PMGButton", le), t.component("PMGInput", de), t.component("PMGTable", $e), t.component("PMGTableHeader", He), t.component("PMGTableBody", Ge), t.component("PMGTableRow", Te), t.component("PMGTableHeaderCell", Ne), t.component("PMGTableCell", je);
  }
};
export {
  le as PMGButton,
  de as PMGInput,
  $e as PMGTable,
  Ge as PMGTableBody,
  je as PMGTableCell,
  He as PMGTableHeader,
  Ne as PMGTableHeaderCell,
  Te as PMGTableRow,
  Oe as default
};
