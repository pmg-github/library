import { defineComponent as o, createElementBlock as i, openBlock as l, normalizeClass as s, renderSlot as a, createTextVNode as d, toDisplayString as r } from "vue";
const u = ["disabled"], f = /* @__PURE__ */ o({
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
    return o({
      name: "JetButton"
    }), (t, n) => (l(), i("button", {
      onClick: n[0] || (n[0] = (c) => t.$emit("click")),
      disabled: e.disabled,
      class: s(["jet-btn font-black bg-red-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out", `jet-btn-${e.theme}`])
    }, [
      a(t.$slots, "default", {}, () => [
        d(r(e.text), 1)
      ])
    ], 10, u));
  }
}), b = { PMGButton: f };
export {
  b as default
};
