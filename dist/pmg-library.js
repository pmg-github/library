import { defineComponent as b, createElementBlock as a, openBlock as n, normalizeClass as m, renderSlot as y, useAttrs as x, computed as w, ref as v, withDirectives as k, createCommentVNode as i, createElementVNode as M, mergeProps as B, unref as r, isRef as P, vModelDynamic as S, createTextVNode as G, toDisplayString as h } from "vue";
import { useField as V } from "vee-validate";
const q = ["disabled"], z = /* @__PURE__ */ b({
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
    return b({
      name: "PMGButton"
    }), (l, o) => (n(), a("button", {
      disabled: e.disabled,
      class: m([
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
      onClick: o[0] || (o[0] = (u) => l.$emit("click"))
    }, [
      y(l.$slots, "default")
    ], 10, q));
  }
}), $ = { class: "relative" }, C = ["type"], R = { key: 0 }, D = {
  key: 1,
  class: "mb-2 mt-1 text-xs text-red-600"
}, I = /* @__PURE__ */ b({
  __name: "PMGInput",
  props: {
    name: {
      type: String,
      required: !0
      // Ensure name is always provided
    },
    label: {
      type: String,
      required: !1
    },
    modelValue: {
      type: String,
      required: !1
    },
    type: String
  },
  setup(e) {
    const l = e, o = x(), u = w(() => "required" in o), g = v(null), { value: s, handleBlur: c, meta: t, errorMessage: p } = V(
      () => l.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !1
      }
    );
    return (N, d) => (n(), a("div", $, [
      k(M("input", B({
        ref_key: "inputRef",
        ref: g,
        onBlur: d[0] || (d[0] = //@ts-ignore
        (...f) => r(c) && r(c)(...f)),
        "onUpdate:modelValue": d[1] || (d[1] = (f) => P(s) ? s.value = f : null),
        type: e.type
      }, r(o), {
        class: [
          "peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all placeholder-shown:border focus:border-2 focus:outline-0 disabled:opacity-50",
          r(t).valid === !1 && r(t).touched ? "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent"
        ]
      }), null, 16, C), [
        [S, r(s)]
      ]),
      e.label ? (n(), a("label", {
        key: 0,
        class: m([
          "before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:opacity-50",
          r(t).valid === !1 && r(t).touched ? "text-red-500 before:border-red-500 after:border-red-500  peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-gray-700 before:border-gray-700 after:border-gray-700  peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
        ])
      }, [
        G(h(e.label) + " ", 1),
        u.value ? (n(), a("span", R, "  *")) : i("", !0)
      ], 2)) : i("", !0),
      r(t).touched && r(t).valid === !1 && r(p) ? (n(), a("div", D, h(r(p)), 1)) : i("", !0)
    ]));
  }
}), U = {
  install(e) {
    e.component("PMGButton", z), e.component("PMGInput", I);
  }
};
export {
  z as PMGButton,
  I as PMGInput,
  U as default
};
