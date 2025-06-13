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
  setup(t) {
    return o({
      name: "JetButton"
    }), (e, n) => (l(), i("button", {
      onClick: n[0] || (n[0] = (c) => e.$emit("click")),
      disabled: t.disabled,
      class: s(["jet-btn font-black bg-red-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out", `jet-btn-${t.theme}`])
    }, [
      a(e.$slots, "default", {}, () => [
        d(r(t.text), 1)
      ])
    ], 10, u));
  }
}), b = {
  install: (t) => {
    t.component("PMGButton", f);
  }
};
export {
  f as PMGButton,
  b as default
};
