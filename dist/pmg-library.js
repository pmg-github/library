import { defineComponent as i, createElementBlock as a, openBlock as l, normalizeClass as o, renderSlot as r, createTextVNode as d, toDisplayString as s } from "vue";
const g = ["disabled"], b = /* @__PURE__ */ i({
  __name: "PMGButton",
  props: {
    text: { type: String, required: !1 },
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
    return i({
      name: "PMGButton"
    }), (t, n) => (l(), a("button", {
      disabled: e.disabled,
      class: o([
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
      onClick: n[0] || (n[0] = (m) => t.$emit("click"))
    }, [
      r(t.$slots, "default", {}, () => [
        d(s(e.text), 1)
      ])
    ], 10, g));
  }
});
export {
  b as PMGButton
};
