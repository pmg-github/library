import { defineComponent as d, createElementBlock as r, openBlock as t, normalizeClass as u, renderSlot as h, useAttrs as g, computed as p, ref as y, createElementVNode as x, createCommentVNode as l, mergeProps as w, unref as v, createTextVNode as k, toDisplayString as b } from "vue";
const M = ["disabled"], S = /* @__PURE__ */ d({
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
  setup(e) {
    return d({
      name: "PMGButton"
    }), (o, a) => (t(), r("button", {
      disabled: e.disabled,
      class: u([
        "px-4 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        e.size === "sm" ? "text-sm" : e.size === "md" ? "text-base" : e.size === "lg" ? "text-lg" : "",
        e.theme === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "",
        e.theme === "secondary" ? "bg-gray-500 text-white hover:bg-gray-600" : "",
        e.theme === "success" ? "bg-green-500 text-white hover:bg-green-600" : "",
        e.theme === "warning" ? "bg-yellow-500 text-white hover:bg-yellow-600" : "",
        e.theme === "danger" ? "bg-red-500 text-white hover:bg-red-600" : "",
        e.theme === "default" ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "",
        e.disabled ? "opacity-50 cursor-not-allowed" : ""
      ]),
      onClick: a[0] || (a[0] = (n) => o.$emit("click"))
    }, [
      h(o.$slots, "default")
    ], 10, M));
  }
}), B = { class: "relative" }, P = ["name", "type", "disabled", "placeholder", "value"], q = { key: 0 }, G = {
  key: 1,
  class: "mt-1 text-xs text-red-500"
}, V = /* @__PURE__ */ d({
  __name: "PMGInput",
  props: {
    modelValue: [String, Number],
    name: { type: String, required: !0 },
    label: { type: String, required: !1 },
    type: { type: String, default: "text" },
    disabled: { type: Boolean, default: !1 },
    placeholder: { type: String, required: !1 },
    errorMessage: { type: String, required: !1 },
    meta: { type: Object, required: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const a = o, n = g(), i = p(() => "required" in n), c = y(null);
    return (z, s) => (t(), r("div", B, [
      x("input", w({
        ref_key: "inputRef",
        ref: c,
        name: e.name,
        type: e.type,
        disabled: e.disabled,
        placeholder: e.placeholder && e.placeholder !== " " ? e.placeholder : " ",
        value: e.modelValue,
        onInput: s[0] || (s[0] = (m) => {
          var f;
          return a("update:modelValue", (f = m.target) == null ? void 0 : f.value);
        }),
        class: ["peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all placeholder-shown:border focus:border-2 focus:outline-0", [
          e.meta && e.meta.valid === !1 && e.meta.touched ? "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-gray-500 border-gray-500 border-t-transparent text-gray-500 placeholder-shown:border-t-gray-500 focus:border-gray-500 focus:border-t-transparent "
        ]]
      }, v(n)), null, 16, P),
      e.label ? (t(), r("label", {
        key: 0,
        class: u([
          "before:content-[''] after:content-[''] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight",
          e.meta && e.meta.valid === !1 && e.meta.touched ? "text-red-500 before:border-red-500 after:border-red-500  peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-gray-500 before:border-gray-500 after:border-gray-500  peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:!border-gray-500 peer-focus:after:border-t-2 peer-focus:after:!border-gray-500"
        ])
      }, [
        k(b(e.label) + " ", 1),
        i.value ? (t(), r("span", q, "  *")) : l("", !0)
      ], 2)) : l("", !0),
      e.errorMessage ? (t(), r("p", G, b(e.errorMessage), 1)) : l("", !0)
    ]));
  }
}), C = {
  install(e) {
    e.component("PMGButton", S), e.component("PMGInput", V);
  }
};
export {
  S as PMGButton,
  V as PMGInput,
  C as default
};
