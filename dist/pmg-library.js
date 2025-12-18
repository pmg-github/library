import * as Be from "vue";
import { defineComponent as T, createElementBlock as I, openBlock as M, normalizeClass as H, renderSlot as F, useAttrs as vt, computed as E, ref as P, withDirectives as Qt, createCommentVNode as pe, createElementVNode as V, mergeProps as oe, unref as v, isRef as en, vModelDynamic as jn, createTextVNode as it, toDisplayString as be, inject as yt, provide as tn, Fragment as gt, effectScope as nn, getCurrentScope as rn, onScopeDispose as on, onBeforeUnmount as sn, customRef as Wn, toValue as G, shallowRef as an, watchEffect as ie, readonly as Vn, getCurrentInstance as ye, watch as K, nextTick as Y, toHandlerKey as zn, camelize as ln, toRef as Kn, onUnmounted as ht, onMounted as Ue, toRefs as qe, h as Pe, Comment as Un, cloneVNode as Hn, reactive as un, createBlock as L, normalizeStyle as bt, withCtx as k, markRaw as Gn, createVNode as Q, watchPostEffect as cn, shallowReadonly as Ce, mergeDefaults as dn, normalizeProps as Ne, guardReactiveProps as fn, withModifiers as je, withKeys as wt, resolveDynamicComponent as Yn, renderList as Xn, vModelText as Jn } from "vue";
import { useField as pn } from "vee-validate";
const Zn = ["disabled"], Qn = /* @__PURE__ */ T({
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
    return T({
      name: "PMGButton"
    }), (t, n) => (M(), I("button", {
      disabled: e.disabled,
      class: H([
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
      onClick: n[0] || (n[0] = (r) => t.$emit("click"))
    }, [
      F(t.$slots, "default")
    ], 10, Zn));
  }
}), er = { class: "relative" }, tr = ["type"], nr = { key: 0 }, rr = {
  key: 1,
  class: "mb-2 mt-1 text-xs text-red-600"
}, or = /* @__PURE__ */ T({
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
  setup(e) {
    const t = e, n = vt(), r = E(() => "required" in n), o = P(null), { value: i, handleBlur: s, meta: a, errorMessage: l } = pn(
      () => t.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !0
      }
    );
    return (d, c) => (M(), I("div", er, [
      Qt(V("input", oe({
        ref_key: "inputRef",
        ref: o,
        onBlur: c[0] || (c[0] = //@ts-ignore
        (...u) => v(s) && v(s)(...u)),
        "onUpdate:modelValue": c[1] || (c[1] = (u) => en(i) ? i.value = u : null),
        type: e.type
      }, v(n), {
        class: ["peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all focus:border-2 focus:outline-0 disabled:opacity-50", [
          v(n).placeholder ? "" : "placeholder-shown:border",
          v(a).valid === !1 && v(a).touched ? v(n).placeholder ? "border-red-500 border-t-transparent text-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : v(n).placeholder ? "border-gray-700 border-t-transparent text-gray-700 focus:border-gray-700 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent"
        ]]
      }), null, 16, tr), [
        [jn, v(i)]
      ]),
      e.label ? (M(), I("label", {
        key: 0,
        class: H(["before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:opacity-50", [
          v(n).placeholder ? "text-[11px] leading-tight" : "peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]",
          v(a).valid === !1 && v(a).touched ? v(n).placeholder ? "text-red-500 before:border-red-500 after:border-red-500 peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-red-500 before:border-red-500 after:border-red-500 peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : v(n).placeholder ? "text-gray-700 before:border-gray-700 after:border-gray-700 peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700" : "text-gray-700 before:border-gray-700 after:border-gray-700 peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
        ]])
      }, [
        it(be(e.label) + " ", 1),
        r.value ? (M(), I("span", nr, "  *")) : pe("", !0)
      ], 2)) : pe("", !0),
      v(a).touched && v(a).valid === !1 && v(l) ? (M(), I("div", rr, be(v(l)), 1)) : pe("", !0)
    ]));
  }
});
function ge(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(s) => {
    const a = yt(r, s);
    if (a || a === null) return a;
    throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (s) => (tn(r, s), s)];
}
function J() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function mn(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
function xt(e) {
  return e ? e.flatMap((t) => t.type === gt ? xt(t.children) : [t]) : [];
}
const ir = ["INPUT", "TEXTAREA"];
function sr(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && ir.includes(t.nodeName)) return null;
  const { arrowKeyOptions: o = "both", attributeName: i = "[data-reka-collection-item]", itemsArray: s = [], loop: a = !0, dir: l = "ltr", preventScroll: d = !0, focus: c = !1 } = r, [u, f, p, m, y, h] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], g = p || m, b = u || f;
  if (!y && !h && (!g && !b || o === "vertical" && b || o === "horizontal" && g)) return null;
  const x = n ? Array.from(n.querySelectorAll(i)) : s;
  if (!x.length) return null;
  d && e.preventDefault();
  let S = null;
  return b || g ? S = vn(x, t, {
    goForward: g ? m : l === "ltr" ? u : f,
    loop: a
  }) : y ? S = x.at(0) || null : h && (S = x.at(-1) || null), c && (S == null || S.focus()), S;
}
function vn(e, t, n, r = e.length) {
  if (--r === 0) return null;
  const o = e.indexOf(t), i = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (i < 0 || i >= e.length)) return null;
  const s = (i + e.length) % e.length, a = e[s];
  return a ? a.hasAttribute("disabled") && a.getAttribute("disabled") !== "false" ? vn(e, a, n, r) : a : null;
}
const [St, Ms] = ge("ConfigProvider");
function ar(e, t) {
  var n;
  const r = an();
  return ie(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Vn(r);
}
function Ct(e) {
  return rn() ? (on(e), !0) : !1;
}
function lr(e) {
  let t = !1, n;
  const r = nn(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function yn(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...i) => (t += 1, r || (r = nn(!0), n = r.run(() => e(...i))), Ct(o), n);
}
const he = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ur = (e) => typeof e < "u", cr = Object.prototype.toString, dr = (e) => cr.call(e) === "[object Object]", Ft = /* @__PURE__ */ fr();
function fr() {
  var e, t;
  return he && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function pr(e) {
  return ye();
}
function Ze(e) {
  return Array.isArray(e) ? e : [e];
}
function mr(e, t = 1e4) {
  return Wn((n, r) => {
    let o = G(e), i;
    const s = () => setTimeout(() => {
      o = G(e), r();
    }, G(t));
    return Ct(() => {
      clearTimeout(i);
    }), {
      get() {
        return n(), o;
      },
      set(a) {
        o = a, r(), clearTimeout(i), i = s();
      }
    };
  });
}
function vr(e, t) {
  pr() && sn(e, t);
}
function yr(e, t, n) {
  return K(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Ot = he ? window : void 0;
function Me(e) {
  var t;
  const n = G(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function We(...e) {
  const t = [], n = () => {
    t.forEach((a) => a()), t.length = 0;
  }, r = (a, l, d, c) => (a.addEventListener(l, d, c), () => a.removeEventListener(l, d, c)), o = E(() => {
    const a = Ze(G(e[0])).filter((l) => l != null);
    return a.every((l) => typeof l != "string") ? a : void 0;
  }), i = yr(
    () => {
      var a, l;
      return [
        (l = (a = o.value) == null ? void 0 : a.map((d) => Me(d))) != null ? l : [Ot].filter((d) => d != null),
        Ze(G(o.value ? e[1] : e[0])),
        Ze(v(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        G(o.value ? e[3] : e[2])
      ];
    },
    ([a, l, d, c]) => {
      if (n(), !(a != null && a.length) || !(l != null && l.length) || !(d != null && d.length))
        return;
      const u = dr(c) ? { ...c } : c;
      t.push(
        ...a.flatMap(
          (f) => l.flatMap(
            (p) => d.map((m) => r(f, p, m, u))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    i(), n();
  };
  return Ct(n), s;
}
function gr(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function hr(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Ot,
    eventName: i = "keydown",
    passive: s = !1,
    dedupe: a = !1
  } = r, l = gr(t);
  return We(o, i, (c) => {
    c.repeat && G(a) || l(c) && n(c);
  }, s);
}
function br(e) {
  return JSON.parse(JSON.stringify(e));
}
function Et(e, t, n, r = {}) {
  var o, i, s;
  const {
    clone: a = !1,
    passive: l = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: u,
    shouldEmit: f
  } = r, p = ye(), m = n || (p == null ? void 0 : p.emit) || ((o = p == null ? void 0 : p.$emit) == null ? void 0 : o.bind(p)) || ((s = (i = p == null ? void 0 : p.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let y = d;
  t || (t = "modelValue"), y = y || `update:${t.toString()}`;
  const h = (x) => a ? typeof a == "function" ? a(x) : br(x) : x, g = () => ur(e[t]) ? h(e[t]) : u, b = (x) => {
    f ? f(x) && m(y, x) : m(y, x);
  };
  if (l) {
    const x = g(), S = P(x);
    let C = !1;
    return K(
      () => e[t],
      (O) => {
        C || (C = !0, S.value = h(O), Y(() => C = !1));
      }
    ), K(
      S,
      (O) => {
        !C && (O !== e[t] || c) && b(O);
      },
      { deep: c }
    ), S;
  } else
    return E({
      get() {
        return g();
      },
      set(x) {
        b(x);
      }
    });
}
function Qe(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function st(e, t, n = ".", r) {
  if (!Qe(t))
    return st(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const s = e[i];
    s != null && (r && r(o, i, s, n) || (Array.isArray(s) && Array.isArray(o[i]) ? o[i] = [...s, ...o[i]] : Qe(s) && Qe(o[i]) ? o[i] = st(
      s,
      o[i],
      (n ? `${n}.` : "") + i.toString(),
      r
    ) : o[i] = s));
  }
  return o;
}
function wr(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => st(n, r, "", e), {})
  );
}
const xr = wr(), Sr = yn(() => {
  const e = P(/* @__PURE__ */ new Map()), t = P(), n = E(() => {
    for (const s of e.value.values()) if (s) return !0;
    return !1;
  }), r = St({ scrollBody: P(!0) });
  let o = null;
  const i = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ft && (o == null || o()), t.value = void 0;
  };
  return K(n, (s, a) => {
    var u;
    if (!he) return;
    if (!s) {
      a && i();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: l,
      margin: 0
    }, c = (u = r.scrollBody) != null && u.value ? typeof r.scrollBody.value == "object" ? xr({
      padding: r.scrollBody.value.padding === !0 ? l : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? l : r.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    l > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), Ft && (o = We(document, "touchmove", (f) => Or(f), { passive: !1 })), Y(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function Cr(e) {
  const t = Math.random().toString(36).substring(2, 7), n = Sr();
  n.value.set(t, e ?? !1);
  const r = E({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return vr(() => {
    n.value.delete(t);
  }), r;
}
function gn(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : gn(n);
  }
}
function Or(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && gn(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function Pt(e) {
  const t = St({ dir: P("ltr") });
  return E(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function hn(e) {
  const t = ye(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((o) => {
    r[zn(ln(o))] = (...i) => e(o, ...i);
  }), r;
}
let et = 0;
function Er() {
  ie((e) => {
    if (!he) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? It()), document.body.insertAdjacentElement("beforeend", t[1] ?? It()), et++, e(() => {
      et === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), et--;
    });
  });
}
function It() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Z() {
  const e = ye(), t = P(), n = E(() => {
    var s, a;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (a = t.value) == null ? void 0 : a.$el.nextElementSibling : Me(t);
  }), r = Object.assign({}, e.exposed), o = {};
  for (const s in e.props) Object.defineProperty(o, s, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[s]
  });
  if (Object.keys(r).length > 0) for (const s in r) Object.defineProperty(o, s, {
    enumerable: !0,
    configurable: !0,
    get: () => r[s]
  });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function i(s) {
    t.value = s, s && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = o);
  }
  return {
    forwardRef: i,
    currentRef: t,
    currentElement: n
  };
}
function Pr(e) {
  const t = ye(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, i) => {
    const s = (t == null ? void 0 : t.type.props[i]).default;
    return s !== void 0 && (o[i] = s), o;
  }, {}), r = Kn(e);
  return E(() => {
    const o = {}, i = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(i).forEach((s) => {
      o[ln(s)] = i[s];
    }), Object.keys({
      ...n,
      ...o
    }).reduce((s, a) => (r.value[a] !== void 0 && (s[a] = r.value[a]), s), {});
  });
}
function He(e, t) {
  const n = Pr(e), r = t ? hn(t) : {};
  return E(() => ({
    ...n.value,
    ...r
  }));
}
var _r = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oe = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), Ie = {}, tt = 0, bn = function(e) {
  return e && (e.host || bn(e.parentNode));
}, Ar = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = bn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Mr = function(e, t, n, r) {
  var o = Ar(t, Array.isArray(e) ? e : [e]);
  Ie[n] || (Ie[n] = /* @__PURE__ */ new WeakMap());
  var i = Ie[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), d = function(u) {
    !u || a.has(u) || (a.add(u), d(u.parentNode));
  };
  o.forEach(d);
  var c = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (a.has(f))
        c(f);
      else
        try {
          var p = f.getAttribute(r), m = p !== null && p !== "false", y = (Oe.get(f) || 0) + 1, h = (i.get(f) || 0) + 1;
          Oe.set(f, y), i.set(f, h), s.push(f), y === 1 && m && Fe.set(f, !0), h === 1 && f.setAttribute(n, "true"), m || f.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", f, g);
        }
    });
  };
  return c(t), a.clear(), tt++, function() {
    s.forEach(function(u) {
      var f = Oe.get(u) - 1, p = i.get(u) - 1;
      Oe.set(u, f), i.set(u, p), f || (Fe.has(u) || u.removeAttribute(r), Fe.delete(u)), p || u.removeAttribute(n);
    }), tt--, tt || (Oe = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), Ie = {});
  };
}, Dr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = _r(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Mr(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function Rr(e) {
  let t;
  K(() => Me(e), (n) => {
    n ? t = Dr(n) : t && t();
  }), ht(() => {
    t && t();
  });
}
let Tr = 0;
function wn(e, t = "reka") {
  var r;
  if ("useId" in Be) return `${t}-${(r = Be.useId) == null ? void 0 : r.call(Be)}`;
  const n = St({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++Tr}`;
}
function qr(e) {
  const t = P(), n = E(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = E(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return Ue(() => {
    const o = Me(e);
    if (o) {
      t.value = {
        width: o.offsetWidth,
        height: o.offsetHeight
      };
      const i = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length) return;
        const a = s[0];
        let l, d;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          l = u.inlineSize, d = u.blockSize;
        } else
          l = o.offsetWidth, d = o.offsetHeight;
        t.value = {
          width: l,
          height: d
        };
      });
      return i.observe(o, { box: "border-box" }), () => i.unobserve(o);
    } else t.value = void 0;
  }), {
    width: n,
    height: r
  };
}
function kr(e, t) {
  const n = P(e);
  function r(i) {
    return t[n.value][i] ?? n.value;
  }
  return {
    state: n,
    dispatch: (i) => {
      n.value = r(i);
    }
  };
}
function Br(e) {
  const t = mr("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, i) => {
      t.value = t.value + o;
      {
        const s = J(), a = i.map((f) => {
          var p, m;
          return {
            ...f,
            textValue: ((p = f.value) == null ? void 0 : p.textValue) ?? ((m = f.ref.textContent) == null ? void 0 : m.trim()) ?? ""
          };
        }), l = a.find((f) => f.ref === s), d = a.map((f) => f.textValue), c = Ir(d, t.value, l == null ? void 0 : l.textValue), u = a.find((f) => f.textValue === c);
        return u && u.ref.focus(), u == null ? void 0 : u.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Fr(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Ir(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Fr(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find((d) => d.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function Lr(e, t) {
  var h;
  const n = P({}), r = P("none"), o = P(e), i = e.value ? "mounted" : "unmounted";
  let s;
  const a = ((h = t.value) == null ? void 0 : h.ownerDocument.defaultView) ?? Ot, { state: l, dispatch: d } = kr(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (g) => {
    var b;
    if (he) {
      const x = new CustomEvent(g, {
        bubbles: !1,
        cancelable: !1
      });
      (b = t.value) == null || b.dispatchEvent(x);
    }
  };
  K(e, async (g, b) => {
    var S;
    const x = b !== g;
    if (await Y(), x) {
      const C = r.value, O = Le(t.value);
      g ? (d("MOUNT"), c("enter"), O === "none" && c("after-enter")) : O === "none" || O === "undefined" || ((S = n.value) == null ? void 0 : S.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : b && C !== O ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const u = (g) => {
    const b = Le(t.value), x = b.includes(g.animationName), S = l.value === "mounted" ? "enter" : "leave";
    if (g.target === t.value && x && (c(`after-${S}`), d("ANIMATION_END"), !o.value)) {
      const C = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = a == null ? void 0 : a.setTimeout(() => {
        var O;
        ((O = t.value) == null ? void 0 : O.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = C);
      });
    }
    g.target === t.value && b === "none" && d("ANIMATION_END");
  }, f = (g) => {
    g.target === t.value && (r.value = Le(t.value));
  }, p = K(t, (g, b) => {
    g ? (n.value = getComputedStyle(g), g.addEventListener("animationstart", f), g.addEventListener("animationcancel", u), g.addEventListener("animationend", u)) : (d("ANIMATION_END"), s !== void 0 && (a == null || a.clearTimeout(s)), b == null || b.removeEventListener("animationstart", f), b == null || b.removeEventListener("animationcancel", u), b == null || b.removeEventListener("animationend", u));
  }, { immediate: !0 }), m = K(l, () => {
    const g = Le(t.value);
    r.value = l.value === "mounted" ? g : "none";
  });
  return ht(() => {
    p(), m();
  }), { isPresent: E(() => ["mounted", "unmountSuspended"].includes(l.value)) };
}
function Le(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var $r = T({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var d;
    const { present: r, forceMount: o } = qe(e), i = P(), { isPresent: s } = Lr(r, i);
    n({ present: s });
    let a = t.default({ present: s.value });
    a = xt(a || []);
    const l = ye();
    if (a && (a == null ? void 0 : a.length) > 1) {
      const c = (d = l == null ? void 0 : l.parent) != null && d.type.name ? `<${l.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((u) => `  - ${u}`).join(`
`)
      ].join(`
`));
    }
    return () => o.value || r.value || s.value ? Pe(t.default({ present: s.value })[0], { ref: (c) => {
      const u = Me(c);
      return typeof (u == null ? void 0 : u.hasAttribute) > "u" || (u != null && u.hasAttribute("data-reka-popper-content-wrapper") ? i.value = u.firstElementChild : i.value = u), u;
    } }) : null;
  }
});
const at = T({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var l;
      if (!n.default) return null;
      const r = xt(n.default()), o = r.findIndex((d) => d.type !== Un);
      if (o === -1) return r;
      const i = r[o];
      (l = i.props) == null || delete l.ref;
      const s = i.props ? oe(t, i.props) : t, a = Hn({
        ...i,
        props: {}
      }, s);
      return r.length === 1 ? a : (r[o] = a, r);
    };
  }
}), Nr = [
  "area",
  "img",
  "input"
], xe = T({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const r = e.asChild ? "template" : e.as;
    return typeof r == "string" && Nr.includes(r) ? () => Pe(r, t) : r !== "template" ? () => Pe(e.as, t, { default: n.default }) : () => Pe(at, t, { default: n.default });
  }
});
function Lt() {
  const e = P(), t = E(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : Me(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const jr = "dismissableLayer.pointerDownOutside", Wr = "dismissableLayer.focusOutside";
function xn(e, t) {
  const n = t.closest("[data-dismissable-layer]"), r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), o = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
}
function Vr(e, t, n = !0) {
  var s;
  const r = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = P(!1), i = P(() => {
  });
  return ie((a) => {
    if (!he || !G(n)) return;
    const l = async (c) => {
      const u = c.target;
      if (!(!(t != null && t.value) || !u)) {
        if (xn(t.value, u)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            mn(jr, e, f);
          };
          const f = { originalEvent: c };
          c.pointerType === "touch" ? (r.removeEventListener("click", i.value), i.value = p, r.addEventListener("click", i.value, { once: !0 })) : p();
        } else r.removeEventListener("click", i.value);
        o.value = !1;
      }
    }, d = window.setTimeout(() => {
      r.addEventListener("pointerdown", l);
    }, 0);
    a(() => {
      window.clearTimeout(d), r.removeEventListener("pointerdown", l), r.removeEventListener("click", i.value);
    });
  }), { onPointerDownCapture: () => {
    G(n) && (o.value = !0);
  } };
}
function zr(e, t, n = !0) {
  var i;
  const r = ((i = t == null ? void 0 : t.value) == null ? void 0 : i.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = P(!1);
  return ie((s) => {
    if (!he || !G(n)) return;
    const a = async (l) => {
      if (!(t != null && t.value)) return;
      await Y(), await Y();
      const d = l.target;
      !t.value || !d || xn(t.value, d) || l.target && !o.value && mn(Wr, e, { originalEvent: l });
    };
    r.addEventListener("focusin", a), s(() => r.removeEventListener("focusin", a));
  }), {
    onFocusCapture: () => {
      G(n) && (o.value = !0);
    },
    onBlurCapture: () => {
      G(n) && (o.value = !1);
    }
  };
}
const le = un({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var Kr = /* @__PURE__ */ T({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: i } = Z(), s = E(() => {
      var m;
      return ((m = i.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
    }), a = E(() => le.layersRoot), l = E(() => i.value ? Array.from(a.value).indexOf(i.value) : -1), d = E(() => le.layersWithOutsidePointerEventsDisabled.size > 0), c = E(() => {
      const m = Array.from(a.value), [y] = [...le.layersWithOutsidePointerEventsDisabled].slice(-1), h = m.indexOf(y);
      return l.value >= h;
    }), u = Vr(async (m) => {
      const y = [...le.branches].some((h) => h == null ? void 0 : h.contains(m.target));
      !c.value || y || (r("pointerDownOutside", m), r("interactOutside", m), await Y(), m.defaultPrevented || r("dismiss"));
    }, i), f = zr((m) => {
      [...le.branches].some((h) => h == null ? void 0 : h.contains(m.target)) || (r("focusOutside", m), r("interactOutside", m), m.defaultPrevented || r("dismiss"));
    }, i);
    hr("Escape", (m) => {
      l.value === a.value.size - 1 && (r("escapeKeyDown", m), m.defaultPrevented || r("dismiss"));
    });
    let p;
    return ie((m) => {
      i.value && (n.disableOutsidePointerEvents && (le.layersWithOutsidePointerEventsDisabled.size === 0 && (p = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), le.layersWithOutsidePointerEventsDisabled.add(i.value)), a.value.add(i.value), m(() => {
        n.disableOutsidePointerEvents && le.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = p);
      }));
    }), ie((m) => {
      m(() => {
        i.value && (a.value.delete(i.value), le.layersWithOutsidePointerEventsDisabled.delete(i.value));
      });
    }), (m, y) => (M(), L(v(xe), {
      ref: v(o),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: bt({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: v(f).onFocusCapture,
      onBlurCapture: v(f).onBlurCapture,
      onPointerdownCapture: v(u).onPointerDownCapture
    }, {
      default: k(() => [F(m.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "style",
      "onFocusCapture",
      "onBlurCapture",
      "onPointerdownCapture"
    ]));
  }
}), Ur = Kr;
const Hr = lr(() => P([]));
function Gr() {
  const e = Hr();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = $t(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = $t(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function $t(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Yr(e) {
  return e.filter((t) => t.tagName !== "A");
}
const nt = "focusScope.autoFocusOnMount", rt = "focusScope.autoFocusOnUnmount", Nt = {
  bubbles: !1,
  cancelable: !0
};
function Xr(e, { select: t = !1 } = {}) {
  const n = J();
  for (const r of e)
    if (fe(r, { select: t }), J() !== n) return !0;
}
function Jr(e) {
  const t = Sn(e), n = jt(t, e), r = jt(t.reverse(), e);
  return [n, r];
}
function Sn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (r) => {
    const o = r.tagName === "INPUT" && r.type === "hidden";
    return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function jt(e, t) {
  for (const n of e) if (!Zr(n, { upTo: t })) return n;
}
function Zr(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Qr(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function fe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = J();
    e.focus({ preventScroll: !0 }), e !== n && Qr(e) && t && e.select();
  }
}
var eo = /* @__PURE__ */ T({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    trapped: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: i } = Z(), s = P(null), a = Gr(), l = un({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ie((c) => {
      if (!he) return;
      const u = i.value;
      if (!n.trapped) return;
      function f(h) {
        if (l.paused || !u) return;
        const g = h.target;
        u.contains(g) ? s.value = g : fe(s.value, { select: !0 });
      }
      function p(h) {
        if (l.paused || !u) return;
        const g = h.relatedTarget;
        g !== null && (u.contains(g) || fe(s.value, { select: !0 }));
      }
      function m(h) {
        u.contains(s.value) || fe(u);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", p);
      const y = new MutationObserver(m);
      u && y.observe(u, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", p), y.disconnect();
      });
    }), ie(async (c) => {
      const u = i.value;
      if (await Y(), !u) return;
      a.add(l);
      const f = J();
      if (!u.contains(f)) {
        const m = new CustomEvent(nt, Nt);
        u.addEventListener(nt, (y) => r("mountAutoFocus", y)), u.dispatchEvent(m), m.defaultPrevented || (Xr(Yr(Sn(u)), { select: !0 }), J() === f && fe(u));
      }
      c(() => {
        u.removeEventListener(nt, (h) => r("mountAutoFocus", h));
        const m = new CustomEvent(rt, Nt), y = (h) => {
          r("unmountAutoFocus", h);
        };
        u.addEventListener(rt, y), u.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || fe(f ?? document.body, { select: !0 }), u.removeEventListener(rt, y), a.remove(l);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || l.paused) return;
      const u = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = J();
      if (u && f) {
        const p = c.currentTarget, [m, y] = Jr(p);
        m && y ? !c.shiftKey && f === y ? (c.preventDefault(), n.loop && fe(m, { select: !0 })) : c.shiftKey && f === m && (c.preventDefault(), n.loop && fe(y, { select: !0 })) : f === p && c.preventDefault();
      }
    }
    return (c, u) => (M(), L(v(xe), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: k(() => [F(c.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), to = eo;
const no = "menu.itemSelect", lt = ["Enter", " "], ro = [
  "ArrowDown",
  "PageUp",
  "Home"
], Cn = [
  "ArrowUp",
  "PageDown",
  "End"
], oo = [...ro, ...Cn];
[...lt], [...lt];
function io(e) {
  return e ? "open" : "closed";
}
function so(e) {
  const t = J();
  for (const n of e)
    if (n === t || (n.focus(), J() !== t)) return;
}
function ao(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, d = t[s].x, c = t[s].y;
    l > r != c > r && n < (d - a) * (r - l) / (c - l) + a && (o = !o);
  }
  return o;
}
function lo(e, t) {
  if (!t) return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return ao(n, t);
}
function ut(e) {
  return e.pointerType === "mouse";
}
const Wt = "data-reka-collection-item";
function On(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const c = P(/* @__PURE__ */ new Map());
    o = {
      collectionRef: P(),
      itemMap: c
    }, tn(r, o);
  } else o = yt(r);
  const i = (c = !1) => {
    const u = o.collectionRef.value;
    if (!u) return [];
    const f = Array.from(u.querySelectorAll(`[${Wt}]`)), m = Array.from(o.itemMap.value.values()).sort((y, h) => f.indexOf(y.ref) - f.indexOf(h.ref));
    return c ? m : m.filter((y) => y.ref.dataset.disabled !== "");
  }, s = T({
    name: "CollectionSlot",
    setup(c, { slots: u }) {
      const { primitiveElement: f, currentElement: p } = Lt();
      return K(p, () => {
        o.collectionRef.value = p.value;
      }), () => Pe(at, { ref: f }, u);
    }
  }), a = T({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: u, attrs: f }) {
      const { primitiveElement: p, currentElement: m } = Lt();
      return ie((y) => {
        if (m.value) {
          const h = Gn(m.value);
          o.itemMap.value.set(h, {
            ref: m.value,
            value: c.value
          }), y(() => o.itemMap.value.delete(h));
        }
      }), () => Pe(at, {
        ...f,
        [Wt]: "",
        ref: p
      }, u);
    }
  }), l = E(() => Array.from(o.itemMap.value.values())), d = E(() => o.itemMap.value.size);
  return {
    getItems: i,
    reactiveItems: l,
    itemMapSize: d,
    CollectionSlot: s,
    CollectionItem: a
  };
}
const uo = "rovingFocusGroup.onEntryFocus", co = {
  bubbles: !1,
  cancelable: !0
};
function fo(e, t = !1) {
  const n = J();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), J() !== n)) return;
}
const [Ds, po] = ge("RovingFocusGroup");
var mo = /* @__PURE__ */ T({
  __name: "RovingFocusGroup",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    currentTabStopId: {
      type: [String, null],
      required: !1
    },
    defaultCurrentTabStopId: {
      type: String,
      required: !1
    },
    preventScrollOnEntryFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, { loop: i, orientation: s, dir: a } = qe(r), l = Pt(a), d = Et(r, "currentTabStopId", o, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), c = P(!1), u = P(!1), f = P(0), { getItems: p, CollectionSlot: m } = On({ isProvider: !0 });
    function y(g) {
      const b = !u.value;
      if (g.currentTarget && g.target === g.currentTarget && b && !c.value) {
        const x = new CustomEvent(uo, co);
        if (g.currentTarget.dispatchEvent(x), o("entryFocus", x), !x.defaultPrevented) {
          const S = p().map((q) => q.ref).filter((q) => q.dataset.disabled !== ""), C = S.find((q) => q.getAttribute("data-active") === ""), O = S.find((q) => q.id === d.value), A = [
            C,
            O,
            ...S
          ].filter(Boolean);
          fo(A, r.preventScrollOnEntryFocus);
        }
      }
      u.value = !1;
    }
    function h() {
      setTimeout(() => {
        u.value = !1;
      }, 1);
    }
    return t({ getItems: p }), po({
      loop: i,
      dir: l,
      orientation: s,
      currentTabStopId: d,
      onItemFocus: (g) => {
        d.value = g;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (g, b) => (M(), L(v(m), null, {
      default: k(() => [Q(v(xe), {
        tabindex: c.value || f.value === 0 ? -1 : 0,
        "data-orientation": v(s),
        as: g.as,
        "as-child": g.asChild,
        dir: v(l),
        style: { outline: "none" },
        onMousedown: b[0] || (b[0] = (x) => u.value = !0),
        onMouseup: h,
        onFocus: y,
        onBlur: b[1] || (b[1] = (x) => c.value = !1)
      }, {
        default: k(() => [F(g.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "as",
        "as-child",
        "dir"
      ])]),
      _: 3
    }));
  }
}), vo = mo;
const [En, yo] = ge("PopperRoot");
var go = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = P();
    return yo({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => F(n.$slots, "default");
  }
}), ho = go, bo = /* @__PURE__ */ T({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = Z(), o = En();
    return cn(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (i, s) => (M(), L(v(xe), {
      ref: v(n),
      as: i.as,
      "as-child": i.asChild
    }, {
      default: k(() => [F(i.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), wo = bo;
function xo(e) {
  return e !== null;
}
function So(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var h, g, b;
      const { placement: n, rects: r, middlewareData: o } = t, s = ((h = o.arrow) == null ? void 0 : h.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, c] = ct(n), u = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], f = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2, p = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
      let m = "", y = "";
      return d === "bottom" ? (m = s ? u : `${f}px`, y = `${-l}px`) : d === "top" ? (m = s ? u : `${f}px`, y = `${r.floating.height + l}px`) : d === "right" ? (m = `${-l}px`, y = s ? u : `${p}px`) : d === "left" && (m = `${r.floating.width + l}px`, y = s ? u : `${p}px`), { data: {
        x: m,
        y
      } };
    }
  };
}
function ct(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Co = ["top", "right", "bottom", "left"], me = Math.min, U = Math.max, Ve = Math.round, $e = Math.floor, re = (e) => ({
  x: e,
  y: e
}), Oo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Eo = {
  start: "end",
  end: "start"
};
function dt(e, t, n) {
  return U(e, me(t, n));
}
function ue(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ce(e) {
  return e.split("-")[0];
}
function De(e) {
  return e.split("-")[1];
}
function _t(e) {
  return e === "x" ? "y" : "x";
}
function At(e) {
  return e === "y" ? "height" : "width";
}
const Po = /* @__PURE__ */ new Set(["top", "bottom"]);
function ne(e) {
  return Po.has(ce(e)) ? "y" : "x";
}
function Mt(e) {
  return _t(ne(e));
}
function _o(e, t, n) {
  n === void 0 && (n = !1);
  const r = De(e), o = Mt(e), i = At(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = ze(s)), [s, ze(s)];
}
function Ao(e) {
  const t = ze(e);
  return [ft(e), t, ft(t)];
}
function ft(e) {
  return e.replace(/start|end/g, (t) => Eo[t]);
}
const Vt = ["left", "right"], zt = ["right", "left"], Mo = ["top", "bottom"], Do = ["bottom", "top"];
function Ro(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? zt : Vt : t ? Vt : zt;
    case "left":
    case "right":
      return t ? Mo : Do;
    default:
      return [];
  }
}
function To(e, t, n, r) {
  const o = De(e);
  let i = Ro(ce(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ft)))), i;
}
function ze(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Oo[t]);
}
function qo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pn(e) {
  return typeof e != "number" ? qo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ke(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Kt(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ne(t), s = Mt(t), a = At(s), l = ce(t), d = i === "y", c = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (De(t)) {
    case "start":
      p[s] -= f * (n && d ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && d ? -1 : 1);
      break;
  }
  return p;
}
const ko = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: u
  } = Kt(d, r, l), f = r, p = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: h,
      fn: g
    } = a[y], {
      x: b,
      y: x,
      data: S,
      reset: C
    } = await g({
      x: c,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: p,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = b ?? c, u = x ?? u, p = {
      ...p,
      [h]: {
        ...p[h],
        ...S
      }
    }, C && m <= 50 && (m++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: u
    } = Kt(d, f, l)), y = -1);
  }
  return {
    x: c,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function Re(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = ue(t, e), m = Pn(p), h = a[f ? u === "floating" ? "reference" : "floating" : u], g = Ke(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: l
  })), b = u === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ke(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (g.top - C.top + m.top) / S.y,
    bottom: (C.bottom - g.bottom + m.bottom) / S.y,
    left: (g.left - C.left + m.left) / S.x,
    right: (C.right - g.right + m.right) / S.x
  };
}
const Bo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: d,
      padding: c = 0
    } = ue(e, t) || {};
    if (d == null)
      return {};
    const u = Pn(c), f = {
      x: n,
      y: r
    }, p = Mt(o), m = At(p), y = await s.getDimensions(d), h = p === "y", g = h ? "top" : "left", b = h ? "bottom" : "right", x = h ? "clientHeight" : "clientWidth", S = i.reference[m] + i.reference[p] - f[p] - i.floating[m], C = f[p] - i.reference[p], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let A = O ? O[x] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(O))) && (A = a.floating[x] || i.floating[m]);
    const q = S / 2 - C / 2, w = A / 2 - y[m] / 2 - 1, _ = me(u[g], w), R = me(u[b], w), D = _, j = A - y[m] - R, B = A / 2 - y[m] / 2 + q, z = dt(D, B, j), N = !l.arrow && De(o) != null && B !== z && i.reference[m] / 2 - (B < D ? _ : R) - y[m] / 2 < 0, W = N ? B < D ? B - D : B - j : 0;
    return {
      [p]: f[p] + W,
      data: {
        [p]: z,
        centerOffset: B - z - W,
        ...N && {
          alignmentOffset: W
        }
      },
      reset: N
    };
  }
}), Fo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...h
      } = ue(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = ce(o), b = ne(a), x = ce(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = f || (x || !y ? [ze(a)] : Ao(a)), O = m !== "none";
      !f && O && C.push(...To(a, y, m, S));
      const A = [a, ...C], q = await Re(t, h), w = [];
      let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && w.push(q[g]), u) {
        const B = _o(o, s, S);
        w.push(q[B[0]], q[B[1]]);
      }
      if (_ = [..._, {
        placement: o,
        overflows: w
      }], !w.every((B) => B <= 0)) {
        var R, D;
        const B = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, z = A[B];
        if (z && (!(u === "alignment" ? b !== ne(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        _.every(($) => ne($.placement) === b ? $.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: _
            },
            reset: {
              placement: z
            }
          };
        let N = (D = _.filter((W) => W.overflows[0] <= 0).sort((W, $) => W.overflows[1] - $.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!N)
          switch (p) {
            case "bestFit": {
              var j;
              const W = (j = _.filter(($) => {
                if (O) {
                  const de = ne($.placement);
                  return de === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  de === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((de) => de > 0).reduce((de, Nn) => de + Nn, 0)]).sort(($, de) => $[1] - de[1])[0]) == null ? void 0 : j[0];
              W && (N = W);
              break;
            }
            case "initialPlacement":
              N = a;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
function Ut(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ht(e) {
  return Co.some((t) => e[t] >= 0);
}
const Io = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = ue(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Re(t, {
            ...o,
            elementContext: "reference"
          }), s = Ut(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Ht(s)
            }
          };
        }
        case "escaped": {
          const i = await Re(t, {
            ...o,
            altBoundary: !0
          }), s = Ut(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Ht(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, _n = /* @__PURE__ */ new Set(["left", "top"]);
async function Lo(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ce(n), a = De(n), l = ne(n) === "y", d = _n.has(s) ? -1 : 1, c = i && l ? -1 : 1, u = ue(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof m == "number" && (p = a === "end" ? m * -1 : m), l ? {
    x: p * c,
    y: f * d
  } : {
    x: f * d,
    y: p * c
  };
}
const $o = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await Lo(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, No = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (h) => {
            let {
              x: g,
              y: b
            } = h;
            return {
              x: g,
              y: b
            };
          }
        },
        ...l
      } = ue(e, t), d = {
        x: n,
        y: r
      }, c = await Re(t, l), u = ne(ce(o)), f = _t(u);
      let p = d[f], m = d[u];
      if (i) {
        const h = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", b = p + c[h], x = p - c[g];
        p = dt(b, p, x);
      }
      if (s) {
        const h = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", b = m + c[h], x = m - c[g];
        m = dt(b, m, x);
      }
      const y = a.fn({
        ...t,
        [f]: p,
        [u]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [f]: i,
            [u]: s
          }
        }
      };
    }
  };
}, jo = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: d = !0
      } = ue(e, t), c = {
        x: n,
        y: r
      }, u = ne(o), f = _t(u);
      let p = c[f], m = c[u];
      const y = ue(a, t), h = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const x = f === "y" ? "height" : "width", S = i.reference[f] - i.floating[x] + h.mainAxis, C = i.reference[f] + i.reference[x] - h.mainAxis;
        p < S ? p = S : p > C && (p = C);
      }
      if (d) {
        var g, b;
        const x = f === "y" ? "width" : "height", S = _n.has(ce(o)), C = i.reference[u] - i.floating[x] + (S && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (S ? 0 : h.crossAxis), O = i.reference[u] + i.reference[x] + (S ? 0 : ((b = s.offset) == null ? void 0 : b[u]) || 0) - (S ? h.crossAxis : 0);
        m < C ? m = C : m > O && (m = O);
      }
      return {
        [f]: p,
        [u]: m
      };
    }
  };
}, Wo = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...d
      } = ue(e, t), c = await Re(t, d), u = ce(o), f = De(o), p = ne(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let h, g;
      u === "top" || u === "bottom" ? (h = u, g = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = u, h = f === "end" ? "top" : "bottom");
      const b = y - c.top - c.bottom, x = m - c.left - c.right, S = me(y - c[h], b), C = me(m - c[g], x), O = !t.middlewareData.shift;
      let A = S, q = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (q = x), (r = t.middlewareData.shift) != null && r.enabled.y && (A = b), O && !f) {
        const _ = U(c.left, 0), R = U(c.right, 0), D = U(c.top, 0), j = U(c.bottom, 0);
        p ? q = m - 2 * (_ !== 0 || R !== 0 ? _ + R : U(c.left, c.right)) : A = y - 2 * (D !== 0 || j !== 0 ? D + j : U(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: q,
        availableHeight: A
      });
      const w = await s.getDimensions(a.floating);
      return m !== w.width || y !== w.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ge() {
  return typeof window < "u";
}
function Se(e) {
  return Dt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function X(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  var t;
  return (t = (Dt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Dt(e) {
  return Ge() ? e instanceof Node || e instanceof X(e).Node : !1;
}
function ee(e) {
  return Ge() ? e instanceof Element || e instanceof X(e).Element : !1;
}
function se(e) {
  return Ge() ? e instanceof HTMLElement || e instanceof X(e).HTMLElement : !1;
}
function Gt(e) {
  return !Ge() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof X(e).ShadowRoot;
}
const Vo = /* @__PURE__ */ new Set(["inline", "contents"]);
function ke(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = te(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Vo.has(o);
}
const zo = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Ko(e) {
  return zo.has(Se(e));
}
const Uo = [":popover-open", ":modal"];
function Ye(e) {
  return Uo.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Ho = ["transform", "translate", "scale", "rotate", "perspective"], Go = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Yo = ["paint", "layout", "strict", "content"];
function Rt(e) {
  const t = Tt(), n = ee(e) ? te(e) : e;
  return Ho.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Go.some((r) => (n.willChange || "").includes(r)) || Yo.some((r) => (n.contain || "").includes(r));
}
function Xo(e) {
  let t = ve(e);
  for (; se(t) && !Ae(t); ) {
    if (Rt(t))
      return t;
    if (Ye(t))
      return null;
    t = ve(t);
  }
  return null;
}
function Tt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Jo = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ae(e) {
  return Jo.has(Se(e));
}
function te(e) {
  return X(e).getComputedStyle(e);
}
function Xe(e) {
  return ee(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ve(e) {
  if (Se(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Gt(e) && e.host || // Fallback.
    ae(e)
  );
  return Gt(t) ? t.host : t;
}
function An(e) {
  const t = ve(e);
  return Ae(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : se(t) && ke(t) ? t : An(t);
}
function Te(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = An(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = X(o);
  if (i) {
    const a = pt(s);
    return t.concat(s, s.visualViewport || [], ke(o) ? o : [], a && n ? Te(a) : []);
  }
  return t.concat(o, Te(o, [], n));
}
function pt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Mn(e) {
  const t = te(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = se(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Ve(n) !== i || Ve(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function qt(e) {
  return ee(e) ? e : e.contextElement;
}
function _e(e) {
  const t = qt(e);
  if (!se(t))
    return re(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Mn(t);
  let s = (i ? Ve(n.width) : n.width) / r, a = (i ? Ve(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Zo = /* @__PURE__ */ re(0);
function Dn(e) {
  const t = X(e);
  return !Tt() || !t.visualViewport ? Zo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Qo(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== X(e) ? !1 : t;
}
function we(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = qt(e);
  let s = re(1);
  t && (r ? ee(r) && (s = _e(r)) : s = _e(e));
  const a = Qo(i, n, r) ? Dn(i) : re(0);
  let l = (o.left + a.x) / s.x, d = (o.top + a.y) / s.y, c = o.width / s.x, u = o.height / s.y;
  if (i) {
    const f = X(i), p = r && ee(r) ? X(r) : r;
    let m = f, y = pt(m);
    for (; y && r && p !== m; ) {
      const h = _e(y), g = y.getBoundingClientRect(), b = te(y), x = g.left + (y.clientLeft + parseFloat(b.paddingLeft)) * h.x, S = g.top + (y.clientTop + parseFloat(b.paddingTop)) * h.y;
      l *= h.x, d *= h.y, c *= h.x, u *= h.y, l += x, d += S, m = X(y), y = pt(m);
    }
  }
  return Ke({
    width: c,
    height: u,
    x: l,
    y: d
  });
}
function kt(e, t) {
  const n = Xe(e).scrollLeft;
  return t ? t.left + n : we(ae(e)).left + n;
}
function Rn(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    kt(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function ei(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = ae(r), a = t ? Ye(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = re(1);
  const c = re(0), u = se(r);
  if ((u || !u && !i) && ((Se(r) !== "body" || ke(s)) && (l = Xe(r)), se(r))) {
    const p = we(r);
    d = _e(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  const f = s && !u && !i ? Rn(s, l, !0) : re(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + c.x + f.x,
    y: n.y * d.y - l.scrollTop * d.y + c.y + f.y
  };
}
function ti(e) {
  return Array.from(e.getClientRects());
}
function ni(e) {
  const t = ae(e), n = Xe(e), r = e.ownerDocument.body, o = U(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = U(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + kt(e);
  const a = -n.scrollTop;
  return te(r).direction === "rtl" && (s += U(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function ri(e, t) {
  const n = X(e), r = ae(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = Tt();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const oi = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ii(e, t) {
  const n = we(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = se(e) ? _e(e) : re(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, d = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: d
  };
}
function Yt(e, t, n) {
  let r;
  if (t === "viewport")
    r = ri(e, n);
  else if (t === "document")
    r = ni(ae(e));
  else if (ee(t))
    r = ii(t, n);
  else {
    const o = Dn(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ke(r);
}
function Tn(e, t) {
  const n = ve(e);
  return n === t || !ee(n) || Ae(n) ? !1 : te(n).position === "fixed" || Tn(n, t);
}
function si(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Te(e, [], !1).filter((a) => ee(a) && Se(a) !== "body"), o = null;
  const i = te(e).position === "fixed";
  let s = i ? ve(e) : e;
  for (; ee(s) && !Ae(s); ) {
    const a = te(s), l = Rt(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && oi.has(o.position) || ke(s) && !l && Tn(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = ve(s);
  }
  return t.set(e, r), r;
}
function ai(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Ye(t) ? [] : si(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((d, c) => {
    const u = Yt(t, c, o);
    return d.top = U(u.top, d.top), d.right = me(u.right, d.right), d.bottom = me(u.bottom, d.bottom), d.left = U(u.left, d.left), d;
  }, Yt(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function li(e) {
  const {
    width: t,
    height: n
  } = Mn(e);
  return {
    width: t,
    height: n
  };
}
function ui(e, t, n) {
  const r = se(t), o = ae(t), i = n === "fixed", s = we(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = re(0);
  function d() {
    l.x = kt(o);
  }
  if (r || !r && !i)
    if ((Se(t) !== "body" || ke(o)) && (a = Xe(t)), r) {
      const p = we(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && d();
  i && !r && o && d();
  const c = o && !r && !i ? Rn(o, a) : re(0), u = s.left + a.scrollLeft - l.x - c.x, f = s.top + a.scrollTop - l.y - c.y;
  return {
    x: u,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ot(e) {
  return te(e).position === "static";
}
function Xt(e, t) {
  if (!se(e) || te(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ae(e) === n && (n = n.ownerDocument.body), n;
}
function qn(e, t) {
  const n = X(e);
  if (Ye(e))
    return n;
  if (!se(e)) {
    let o = ve(e);
    for (; o && !Ae(o); ) {
      if (ee(o) && !ot(o))
        return o;
      o = ve(o);
    }
    return n;
  }
  let r = Xt(e, t);
  for (; r && Ko(r) && ot(r); )
    r = Xt(r, t);
  return r && Ae(r) && ot(r) && !Rt(r) ? n : r || Xo(e) || n;
}
const ci = async function(e) {
  const t = this.getOffsetParent || qn, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ui(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function di(e) {
  return te(e).direction === "rtl";
}
const fi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ei,
  getDocumentElement: ae,
  getClippingRect: ai,
  getOffsetParent: qn,
  getElementRects: ci,
  getClientRects: ti,
  getDimensions: li,
  getScale: _e,
  isElement: ee,
  isRTL: di
};
function kn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function pi(e, t) {
  let n = null, r;
  const o = ae(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: u,
      width: f,
      height: p
    } = d;
    if (a || t(), !f || !p)
      return;
    const m = $e(u), y = $e(o.clientWidth - (c + f)), h = $e(o.clientHeight - (u + p)), g = $e(c), x = {
      rootMargin: -m + "px " + -y + "px " + -h + "px " + -g + "px",
      threshold: U(0, me(1, l)) || 1
    };
    let S = !0;
    function C(O) {
      const A = O[0].intersectionRatio;
      if (A !== l) {
        if (!S)
          return s();
        A ? s(!1, A) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !kn(d, e.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function mi(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = qt(e), c = o || i ? [...d ? Te(d) : [], ...Te(t)] : [];
  c.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  const u = d && a ? pi(d, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((g) => {
    let [b] = g;
    b && b.target === d && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(t);
    })), n();
  }), d && !l && p.observe(d), p.observe(t));
  let m, y = l ? we(e) : null;
  l && h();
  function h() {
    const g = we(e);
    y && !kn(y, g) && n(), y = g, m = requestAnimationFrame(h);
  }
  return n(), () => {
    var g;
    c.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), u == null || u(), (g = p) == null || g.disconnect(), p = null, l && cancelAnimationFrame(m);
  };
}
const vi = $o, yi = No, Jt = Fo, gi = Wo, hi = Io, bi = Bo, wi = jo, xi = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: fi,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return ko(e, t, {
    ...o,
    platform: i
  });
};
function Si(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function mt(e) {
  if (Si(e)) {
    const t = e.$el;
    return Dt(t) && Se(t) === "#comment" ? null : t;
  }
  return e;
}
function Ee(e) {
  return typeof e == "function" ? e() : v(e);
}
function Ci(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = mt(Ee(e.element));
      return n == null ? {} : bi({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Bn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zt(e, t) {
  const n = Bn(e);
  return Math.round(t * n) / n;
}
function Oi(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = E(() => {
    var A;
    return (A = Ee(n.open)) != null ? A : !0;
  }), i = E(() => Ee(n.middleware)), s = E(() => {
    var A;
    return (A = Ee(n.placement)) != null ? A : "bottom";
  }), a = E(() => {
    var A;
    return (A = Ee(n.strategy)) != null ? A : "absolute";
  }), l = E(() => {
    var A;
    return (A = Ee(n.transform)) != null ? A : !0;
  }), d = E(() => mt(e.value)), c = E(() => mt(t.value)), u = P(0), f = P(0), p = P(a.value), m = P(s.value), y = an({}), h = P(!1), g = E(() => {
    const A = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return A;
    const q = Zt(c.value, u.value), w = Zt(c.value, f.value);
    return l.value ? {
      ...A,
      transform: "translate(" + q + "px, " + w + "px)",
      ...Bn(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: q + "px",
      top: w + "px"
    };
  });
  let b;
  function x() {
    if (d.value == null || c.value == null)
      return;
    const A = o.value;
    xi(d.value, c.value, {
      middleware: i.value,
      placement: s.value,
      strategy: a.value
    }).then((q) => {
      u.value = q.x, f.value = q.y, p.value = q.strategy, m.value = q.placement, y.value = q.middlewareData, h.value = A !== !1;
    });
  }
  function S() {
    typeof b == "function" && (b(), b = void 0);
  }
  function C() {
    if (S(), r === void 0) {
      x();
      return;
    }
    if (d.value != null && c.value != null) {
      b = r(d.value, c.value, x);
      return;
    }
  }
  function O() {
    o.value || (h.value = !1);
  }
  return K([i, s, a, o], x, {
    flush: "sync"
  }), K([d, c], C, {
    flush: "sync"
  }), K(o, O, {
    flush: "sync"
  }), rn() && on(S), {
    x: Ce(u),
    y: Ce(f),
    strategy: Ce(p),
    placement: Ce(m),
    middlewareData: Ce(y),
    isPositioned: Ce(h),
    floatingStyles: g,
    update: x
  };
}
const Fn = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [Rs, Ei] = ge("PopperContent");
var Pi = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ dn({
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...Fn }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = En(), { forwardRef: i, currentElement: s } = Z(), a = P(), l = P(), { width: d, height: c } = qr(l), u = E(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), f = E(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), p = E(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = E(() => ({
      padding: f.value,
      boundary: p.value.filter(xo),
      altBoundary: p.value.length > 0
    })), y = E(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), h = ar(() => [
      vi({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Jt({
        ...m.value,
        ...y.value
      }),
      n.avoidCollisions && yi({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? wi() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Jt({
        ...m.value,
        ...y.value
      }),
      gi({
        ...m.value,
        apply: ({ elements: D, rects: j, availableWidth: B, availableHeight: z }) => {
          const { width: N, height: W } = j.reference, $ = D.floating.style;
          $.setProperty("--reka-popper-available-width", `${B}px`), $.setProperty("--reka-popper-available-height", `${z}px`), $.setProperty("--reka-popper-anchor-width", `${N}px`), $.setProperty("--reka-popper-anchor-height", `${W}px`);
        }
      }),
      l.value && Ci({
        element: l.value,
        padding: n.arrowPadding
      }),
      So({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && hi({
        strategy: "referenceHidden",
        ...m.value
      })
    ]), g = E(() => n.reference ?? o.anchor.value), { floatingStyles: b, placement: x, isPositioned: S, middlewareData: C } = Oi(g, a, {
      strategy: n.positionStrategy,
      placement: u,
      whileElementsMounted: (...D) => mi(...D, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: h
    }), O = E(() => ct(x.value)[0]), A = E(() => ct(x.value)[1]);
    cn(() => {
      S.value && r("placed");
    });
    const q = E(() => {
      var D;
      return ((D = C.value.arrow) == null ? void 0 : D.centerOffset) !== 0;
    }), w = P("");
    ie(() => {
      s.value && (w.value = window.getComputedStyle(s.value).zIndex);
    });
    const _ = E(() => {
      var D;
      return ((D = C.value.arrow) == null ? void 0 : D.x) ?? 0;
    }), R = E(() => {
      var D;
      return ((D = C.value.arrow) == null ? void 0 : D.y) ?? 0;
    });
    return Ei({
      placedSide: O,
      onArrowChange: (D) => l.value = D,
      arrowX: _,
      arrowY: R,
      shouldHideArrow: q
    }), (D, j) => {
      var B, z, N;
      return M(), I("div", {
        ref_key: "floatingRef",
        ref: a,
        "data-reka-popper-content-wrapper": "",
        style: bt({
          ...v(b),
          transform: v(S) ? v(b).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: w.value,
          "--reka-popper-transform-origin": [(B = v(C).transformOrigin) == null ? void 0 : B.x, (z = v(C).transformOrigin) == null ? void 0 : z.y].join(" "),
          ...((N = v(C).hide) == null ? void 0 : N.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [Q(v(xe), oe({ ref: v(i) }, D.$attrs, {
        "as-child": n.asChild,
        as: D.as,
        "data-side": O.value,
        "data-align": A.value,
        style: { animation: v(S) ? void 0 : "none" }
      }), {
        default: k(() => [F(D.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "style"
      ])], 4);
    };
  }
}), _i = Pi, Ai = /* @__PURE__ */ T({
  __name: "MenuAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (n, r) => (M(), L(v(wo), Ne(fn(t)), {
      default: k(() => [F(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Mi = Ai;
function Di() {
  const e = P(!1);
  return Ue(() => {
    We("keydown", () => {
      e.value = !0;
    }, {
      capture: !0,
      passive: !0
    }), We(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, {
      capture: !0,
      passive: !0
    });
  }), e;
}
const Ri = yn(Di), [Je, Ti] = ge(["MenuRoot", "MenuSub"], "MenuContext"), [Bt, qi] = ge("MenuRoot");
var ki = /* @__PURE__ */ T({
  __name: "MenuRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: o, dir: i } = qe(n), s = Pt(i), a = Et(n, "open", r), l = P(), d = Ri();
    return Ti({
      open: a,
      onOpenChange: (c) => {
        a.value = c;
      },
      content: l,
      onContentChange: (c) => {
        l.value = c;
      }
    }), qi({
      onClose: () => {
        a.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: s,
      modal: o
    }), (c, u) => (M(), L(v(ho), null, {
      default: k(() => [F(c.$slots, "default")]),
      _: 3
    }));
  }
}), Bi = ki;
const [In, Fi] = ge("MenuContent");
var Ii = /* @__PURE__ */ T({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ dn({
    loop: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    disableOutsideScroll: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...Fn }),
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Je(), i = Bt(), { trapFocus: s, disableOutsidePointerEvents: a, loop: l } = qe(n);
    Er(), Cr(a.value);
    const d = P(""), c = P(0), u = P(0), f = P(null), p = P("right"), m = P(0), y = P(null), h = P(), { forwardRef: g, currentElement: b } = Z(), { handleTypeaheadSearch: x } = Br();
    K(b, (w) => {
      o.onContentChange(w);
    }), ht(() => {
      window.clearTimeout(c.value);
    });
    function S(w) {
      var R, D;
      return p.value === ((R = f.value) == null ? void 0 : R.side) && lo(w, (D = f.value) == null ? void 0 : D.area);
    }
    async function C(w) {
      var _;
      r("openAutoFocus", w), !w.defaultPrevented && (w.preventDefault(), (_ = b.value) == null || _.focus({ preventScroll: !0 }));
    }
    function O(w) {
      var W;
      if (w.defaultPrevented) return;
      const R = w.target.closest("[data-reka-menu-content]") === w.currentTarget, D = w.ctrlKey || w.altKey || w.metaKey, j = w.key.length === 1, B = sr(w, J(), b.value, {
        loop: l.value,
        arrowKeyOptions: "vertical",
        dir: i == null ? void 0 : i.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (B) return B == null ? void 0 : B.focus();
      if (w.code === "Space") return;
      const z = ((W = h.value) == null ? void 0 : W.getItems()) ?? [];
      if (R && (w.key === "Tab" && w.preventDefault(), !D && j && x(w.key, z)), w.target !== b.value || !oo.includes(w.key)) return;
      w.preventDefault();
      const N = [...z.map(($) => $.ref)];
      Cn.includes(w.key) && N.reverse(), so(N);
    }
    function A(w) {
      var _, R;
      (R = (_ = w == null ? void 0 : w.currentTarget) == null ? void 0 : _.contains) != null && R.call(_, w.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function q(w) {
      var D;
      if (!ut(w)) return;
      const _ = w.target, R = m.value !== w.clientX;
      if ((D = w == null ? void 0 : w.currentTarget) != null && D.contains(_) && R) {
        const j = w.clientX > m.value ? "right" : "left";
        p.value = j, m.value = w.clientX;
      }
    }
    return Fi({
      onItemEnter: (w) => !!S(w),
      onItemLeave: (w) => {
        var _;
        S(w) || ((_ = b.value) == null || _.focus(), y.value = null);
      },
      onTriggerLeave: (w) => !!S(w),
      searchRef: d,
      pointerGraceTimerRef: u,
      onPointerGraceIntentChange: (w) => {
        f.value = w;
      }
    }), (w, _) => (M(), L(v(to), {
      "as-child": "",
      trapped: v(s),
      onMountAutoFocus: C,
      onUnmountAutoFocus: _[7] || (_[7] = (R) => r("closeAutoFocus", R))
    }, {
      default: k(() => [Q(v(Ur), {
        "as-child": "",
        "disable-outside-pointer-events": v(a),
        onEscapeKeyDown: _[2] || (_[2] = (R) => r("escapeKeyDown", R)),
        onPointerDownOutside: _[3] || (_[3] = (R) => r("pointerDownOutside", R)),
        onFocusOutside: _[4] || (_[4] = (R) => r("focusOutside", R)),
        onInteractOutside: _[5] || (_[5] = (R) => r("interactOutside", R)),
        onDismiss: _[6] || (_[6] = (R) => r("dismiss"))
      }, {
        default: k(() => [Q(v(vo), {
          ref_key: "rovingFocusGroupRef",
          ref: h,
          "current-tab-stop-id": y.value,
          "onUpdate:currentTabStopId": _[0] || (_[0] = (R) => y.value = R),
          "as-child": "",
          orientation: "vertical",
          dir: v(i).dir.value,
          loop: v(l),
          onEntryFocus: _[1] || (_[1] = (R) => {
            r("entryFocus", R), v(i).isUsingKeyboardRef.value || R.preventDefault();
          })
        }, {
          default: k(() => [Q(v(_i), {
            ref: v(g),
            role: "menu",
            as: w.as,
            "as-child": w.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": v(io)(v(o).open.value),
            dir: v(i).dir.value,
            side: w.side,
            "side-offset": w.sideOffset,
            align: w.align,
            "align-offset": w.alignOffset,
            "avoid-collisions": w.avoidCollisions,
            "collision-boundary": w.collisionBoundary,
            "collision-padding": w.collisionPadding,
            "arrow-padding": w.arrowPadding,
            "prioritize-position": w.prioritizePosition,
            "position-strategy": w.positionStrategy,
            "update-position-strategy": w.updatePositionStrategy,
            sticky: w.sticky,
            "hide-when-detached": w.hideWhenDetached,
            reference: w.reference,
            onKeydown: O,
            onBlur: A,
            onPointermove: q
          }, {
            default: k(() => [F(w.$slots, "default")]),
            _: 3
          }, 8, [
            "as",
            "as-child",
            "data-state",
            "dir",
            "side",
            "side-offset",
            "align",
            "align-offset",
            "avoid-collisions",
            "collision-boundary",
            "collision-padding",
            "arrow-padding",
            "prioritize-position",
            "position-strategy",
            "update-position-strategy",
            "sticky",
            "hide-when-detached",
            "reference"
          ])]),
          _: 3
        }, 8, [
          "current-tab-stop-id",
          "dir",
          "loop"
        ])]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Ln = Ii, Li = /* @__PURE__ */ T({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, n = In(), { forwardRef: r } = Z(), { CollectionItem: o } = On(), i = P(!1);
    async function s(l) {
      if (!l.defaultPrevented && ut(l)) {
        if (t.disabled) n.onItemLeave(l);
        else if (!n.onItemEnter(l)) {
          const c = l.currentTarget;
          c == null || c.focus({ preventScroll: !0 });
        }
      }
    }
    async function a(l) {
      await Y(), !l.defaultPrevented && ut(l) && n.onItemLeave(l);
    }
    return (l, d) => (M(), L(v(o), { value: { textValue: l.textValue } }, {
      default: k(() => [Q(v(xe), oe({
        ref: v(r),
        role: "menuitem",
        tabindex: "-1"
      }, l.$attrs, {
        as: l.as,
        "as-child": l.asChild,
        "aria-disabled": l.disabled || void 0,
        "data-disabled": l.disabled ? "" : void 0,
        "data-highlighted": i.value ? "" : void 0,
        onPointermove: s,
        onPointerleave: a,
        onFocus: d[0] || (d[0] = async (c) => {
          await Y(), !(c.defaultPrevented || l.disabled) && (i.value = !0);
        }),
        onBlur: d[1] || (d[1] = async (c) => {
          await Y(), !c.defaultPrevented && (i.value = !1);
        })
      }), {
        default: k(() => [F(l.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "aria-disabled",
        "data-disabled",
        "data-highlighted"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), $i = Li, Ni = /* @__PURE__ */ T({
  __name: "MenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: i } = Z(), s = Bt(), a = In(), l = P(!1);
    async function d() {
      const c = i.value;
      if (!n.disabled && c) {
        const u = new CustomEvent(no, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", u), await Y(), u.defaultPrevented ? l.value = !1 : s.onClose();
      }
    }
    return (c, u) => (M(), L($i, oe(n, {
      ref: v(o),
      onClick: d,
      onPointerdown: u[0] || (u[0] = () => {
        l.value = !0;
      }),
      onPointerup: u[1] || (u[1] = async (f) => {
        var p;
        await Y(), !f.defaultPrevented && (l.value || (p = f.currentTarget) == null || p.click());
      }),
      onKeydown: u[2] || (u[2] = async (f) => {
        const p = v(a).searchRef.value !== "";
        c.disabled || p && f.key === " " || v(lt).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: k(() => [F(c.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ji = Ni, Wi = /* @__PURE__ */ T({
  __name: "MenuRootContentModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const n = e, r = t, o = He(n, r), i = Je(), { forwardRef: s, currentElement: a } = Z();
    return Rr(a), (l, d) => (M(), L(Ln, oe(v(o), {
      ref: v(s),
      "trap-focus": v(i).open.value,
      "disable-outside-pointer-events": v(i).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => v(i).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = je((c) => r("focusOutside", c), ["prevent"]))
    }), {
      default: k(() => [F(l.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Vi = Wi, zi = /* @__PURE__ */ T({
  __name: "MenuRootContentNonModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const o = He(e, t), i = Je();
    return (s, a) => (M(), L(Ln, oe(v(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: a[0] || (a[0] = (l) => v(i).onOpenChange(!1))
    }), {
      default: k(() => [F(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Ki = zi, Ui = /* @__PURE__ */ T({
  __name: "MenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const o = He(e, t), i = Je(), s = Bt();
    return (a, l) => (M(), L(v($r), { present: a.forceMount || v(i).open.value }, {
      default: k(() => [v(s).modal.value ? (M(), L(Vi, Ne(oe({ key: 0 }, {
        ...a.$attrs,
        ...v(o)
      })), {
        default: k(() => [F(a.$slots, "default")]),
        _: 3
      }, 16)) : (M(), L(Ki, Ne(oe({ key: 1 }, {
        ...a.$attrs,
        ...v(o)
      })), {
        default: k(() => [F(a.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), Hi = Ui;
const [$n, Gi] = ge("DropdownMenuRoot");
var Yi = /* @__PURE__ */ T({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t;
    Z();
    const o = Et(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = P(), { modal: s, dir: a } = qe(n), l = Pt(a);
    return Gi({
      open: o,
      onOpenChange: (d) => {
        o.value = d;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: "",
      triggerElement: i,
      contentId: "",
      modal: s,
      dir: l
    }), (d, c) => (M(), L(v(Bi), {
      open: v(o),
      "onUpdate:open": c[0] || (c[0] = (u) => en(o) ? o.value = u : null),
      dir: v(l),
      modal: v(s)
    }, {
      default: k(() => [F(d.$slots, "default", { open: v(o) })]),
      _: 3
    }, 8, [
      "open",
      "dir",
      "modal"
    ]));
  }
}), Xi = Yi, Ji = /* @__PURE__ */ T({
  __name: "DropdownMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const o = He(e, t);
    Z();
    const i = $n(), s = P(!1);
    function a(l) {
      l.defaultPrevented || (s.value || setTimeout(() => {
        var d;
        (d = i.triggerElement.value) == null || d.focus();
      }, 0), s.value = !1, l.preventDefault());
    }
    return i.contentId || (i.contentId = wn(void 0, "reka-dropdown-menu-content")), (l, d) => {
      var c;
      return M(), L(v(Hi), oe(v(o), {
        id: v(i).contentId,
        "aria-labelledby": (c = v(i)) == null ? void 0 : c.triggerId,
        style: {
          "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
          "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
          "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
        },
        onCloseAutoFocus: a,
        onInteractOutside: d[0] || (d[0] = (u) => {
          var y;
          if (u.defaultPrevented) return;
          const f = u.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0, m = f.button === 2 || p;
          (!v(i).modal.value || m) && (s.value = !0), (y = v(i).triggerElement.value) != null && y.contains(u.target) && u.preventDefault();
        })
      }), {
        default: k(() => [F(l.$slots, "default")]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Zi = Ji, Qi = /* @__PURE__ */ T({
  __name: "DropdownMenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = hn(t);
    return Z(), (i, s) => (M(), L(v(ji), Ne(fn({
      ...n,
      ...v(o)
    })), {
      default: k(() => [F(i.$slots, "default")]),
      _: 3
    }, 16));
  }
}), es = Qi, ts = /* @__PURE__ */ T({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, n = $n(), { forwardRef: r, currentElement: o } = Z();
    return Ue(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = wn(void 0, "reka-dropdown-menu-trigger")), (i, s) => (M(), L(v(Mi), { "as-child": "" }, {
      default: k(() => [Q(v(xe), {
        id: v(n).triggerId,
        ref: v(r),
        type: i.as === "button" ? "button" : void 0,
        "as-child": t.asChild,
        as: i.as,
        "aria-haspopup": "menu",
        "aria-expanded": v(n).open.value,
        "aria-controls": v(n).open.value ? v(n).contentId : void 0,
        "data-disabled": i.disabled ? "" : void 0,
        disabled: i.disabled,
        "data-state": v(n).open.value ? "open" : "closed",
        onClick: s[0] || (s[0] = async (a) => {
          var l;
          !i.disabled && a.button === 0 && a.ctrlKey === !1 && ((l = v(n)) == null || l.onOpenToggle(), await Y(), v(n).open.value && a.preventDefault());
        }),
        onKeydown: s[1] || (s[1] = wt((a) => {
          i.disabled || (["Enter", " "].includes(a.key) && v(n).onOpenToggle(), a.key === "ArrowDown" && v(n).onOpenChange(!0), [
            "Enter",
            " ",
            "ArrowDown"
          ].includes(a.key) && a.preventDefault());
        }, [
          "enter",
          "space",
          "arrow-down"
        ]))
      }, {
        default: k(() => [F(i.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "type",
        "as-child",
        "as",
        "aria-expanded",
        "aria-controls",
        "data-disabled",
        "disabled",
        "data-state"
      ])]),
      _: 3
    }));
  }
}), ns = ts;
const rs = { class: "relative" }, os = { class: "flex items-center" }, is = ["src", "alt"], ss = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  class: "h-5 w-5 text-current"
}, as = { class: "divide-y divide-gray-300" }, ls = ["src", "alt"], us = { class: "relative flex-1" }, cs = ["maxlength"], ds = { key: 0 }, fs = {
  key: 0,
  class: "mb-2 mt-1 text-xs text-red-600"
}, ps = /* @__PURE__ */ T({
  __name: "PMGPhoneInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: "Telefoonnummer"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = [
      {
        code: "BE",
        country: "België",
        format: "0999 99 99 99",
        maxLength: 10,
        regex: /^\d{10}$/,
        prefix: "+32"
      },
      {
        code: "NL",
        country: "Nederland",
        format: "999 999 9999",
        maxLength: 10,
        regex: /^\d{10}$/,
        prefix: "+31"
      },
      {
        code: "FR",
        country: "Frankrijk",
        format: "99 99 99 99 99",
        maxLength: 10,
        regex: /^\d{10}$/,
        prefix: "+33"
      },
      {
        code: "DE",
        country: "Duitsland",
        format: "999 99999999",
        maxLength: 11,
        regex: /^\d{11}$/,
        prefix: "+49"
      },
      {
        code: "LU",
        country: "Luxemburg",
        format: "999 999 999",
        maxLength: 9,
        regex: /^\d{9}$/,
        prefix: "+352"
      },
      {
        code: "GB",
        country: "Verenigd Koninkrijk",
        format: "99999 999999",
        maxLength: 11,
        regex: /^\d{11}$/,
        prefix: "+44"
      },
      {
        code: "CH",
        country: "Zwitserland",
        format: "99 999 99 99",
        maxLength: 10,
        regex: /^\d{10}$/,
        prefix: "+41"
      },
      {
        code: "ES",
        country: "Spanje",
        format: "999 99 99 99",
        maxLength: 9,
        regex: /^\d{9}$/,
        prefix: "+34"
      }
    ], r = e, { value: o, errorMessage: i, handleBlur: s, meta: a } = pn(
      r.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !1
      }
    ), l = P(n[0]), d = vt(), c = E(() => "required" in d), u = P(""), f = E(() => l.value.maxLength + 1), p = t;
    function m(S) {
      const C = S.replace(/[^0-9]/gi, "").slice(0, l.value.maxLength), O = C.startsWith("0") ? C.slice(1) : C;
      u.value = O.slice(0, l.value.maxLength), o.value = h.value, p("update:modelValue", h.value);
    }
    const y = E({
      get() {
        return u.value ? u.value.startsWith("0") ? u.value : `0${u.value}` : "";
      },
      set(S) {
        m(S);
      }
    }), h = E(() => u.value ? `${l.value.prefix}${u.value}` : ""), g = P(null), b = ye(), x = E(() => {
      var S, C;
      return ((C = (S = b == null ? void 0 : b.appContext) == null ? void 0 : S.components) == null ? void 0 : C.Icon) ?? null;
    });
    return K(
      () => o.value,
      (S) => {
        if (!S || typeof S != "string") return;
        const C = n.find((A) => S.startsWith(A.prefix));
        C && (l.value = C);
        const O = l.value.prefix;
        u.value = S.startsWith(O) ? S.slice(O.length).replace(/\D/g, "") : S.replace(/\D/g, ""), o.value = h.value;
      },
      { immediate: !0 }
    ), K(
      () => l.value,
      () => {
        u.value.length > l.value.maxLength && (u.value = u.value.slice(
          0,
          l.value.maxLength
        ), o.value = u.value), p("update:modelValue", h.value);
      }
    ), (S, C) => (M(), I("div", rs, [
      V("div", os, [
        Q(v(Xi), null, {
          default: k(() => [
            Q(v(ns), { "as-child": "" }, {
              default: k(() => [
                V("button", {
                  type: "button",
                  class: H([
                    "flex h-10 w-28 items-center gap-1 rounded-l-md border border-r-0 px-4 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none",
                    v(a).valid === !1 && v(a).touched ? "border-red-500 text-red-500" : "border-gray-700 text-gray-900"
                  ])
                }, [
                  V("img", {
                    class: "h-5",
                    src: `https://flagsapi.com/${l.value.code}/flat/64.png`,
                    alt: l.value.code,
                    loading: "lazy"
                  }, null, 8, is),
                  it(" " + be(l.value.prefix) + " ", 1),
                  x.value ? (M(), L(Yn(x.value), {
                    key: 0,
                    name: "mdi:chevron-down",
                    class: "h-5 w-5 text-current"
                  })) : (M(), I("svg", ss, C[2] || (C[2] = [
                    V("path", {
                      d: "M7 10l5 5 5-5",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, null, -1)
                  ])))
                ], 2)
              ]),
              _: 1
            }),
            Q(v(Zi), {
              align: "start",
              side: "bottom",
              class: "z-10 mt-1 h-56 w-64 overflow-auto rounded border border-gray-300 bg-white shadow-lg outline-none"
            }, {
              default: k(() => [
                V("div", as, [
                  (M(), I(gt, null, Xn(n, (O) => Q(v(es), {
                    key: O.code,
                    class: "flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 outline-none data-[highlighted]:bg-gray-100",
                    onSelect: (A) => l.value = O
                  }, {
                    default: k(() => [
                      V("img", {
                        class: "h-5",
                        src: `https://flagsapi.com/${O.code}/flat/64.png`,
                        alt: O.country,
                        loading: "lazy"
                      }, null, 8, ls),
                      V("span", null, be(O.country) + " (" + be(O.prefix) + ")", 1)
                    ]),
                    _: 2
                  }, 1032, ["onSelect"])), 64))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        V("div", us, [
          Qt(V("input", {
            type: "tel",
            onBlur: C[0] || (C[0] = (O) => v(s)(O, !0)),
            "onUpdate:modelValue": C[1] || (C[1] = (O) => y.value = O),
            ref_key: "inputRef",
            ref: g,
            maxlength: f.value,
            class: H([
              "peer h-10 w-full rounded-r-md border bg-transparent px-3 py-2.5 font-sans text-sm font-normal transition-all placeholder-shown:border focus:border-2 focus:outline-0",
              v(a).valid === !1 && v(a).touched ? "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent "
            ]),
            placeholder: " "
          }, null, 42, cs), [
            [Jn, y.value]
          ]),
          e.label ? (M(), I("label", {
            key: 0,
            class: H([
              "before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight",
              v(a).valid === !1 && v(a).touched ? "text-red-500 before:border-red-500 after:border-red-500  peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-gray-700 before:border-gray-700 after:border-gray-700  peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
            ])
          }, [
            it(be(e.label) + " ", 1),
            c.value ? (M(), I("span", ds, "  *")) : pe("", !0)
          ], 2)) : pe("", !0)
        ])
      ]),
      v(a).touched && v(i) ? (M(), I("div", fs, be(v(i)), 1)) : pe("", !0)
    ]));
  }
}), ms = /* @__PURE__ */ T({
  __name: "PMGTableHeader",
  setup(e) {
    const t = vt(), n = E(() => [
      "border-b border-pmg-100",
      t.class ? t.class : "bg-pmg-50/50"
    ]);
    return (r, o) => (M(), I("thead", {
      class: H(n.value)
    }, [
      V("tr", null, [
        F(r.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), vs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ys = /* @__PURE__ */ vs(ms, [["__scopeId", "data-v-dc7c3d09"]]), gs = ["onKeydown", "aria-sort"], hs = {
  key: 0,
  class: "inline-block mr-1 h-3 w-3 border-2 border-t-transparent border-gray-400 rounded-full animate-spin",
  "aria-hidden": "true"
}, bs = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": ""
}, ws = /* @__PURE__ */ T({
  __name: "PMGTableHeaderCell",
  props: {
    align: { type: String, default: "left" },
    width: { type: String, default: "" },
    className: { type: String, default: "" },
    columnKey: { type: String, default: "" },
    ariaSort: {
      type: String,
      default: "none"
    },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["sort"],
  setup(e, { emit: t }) {
    const n = e, r = ye(), o = t, i = E(() => n.align === "center" ? "justify-center" : n.align === "right" ? "justify-end" : "justify-start"), s = E(() => {
      var u;
      const c = (u = r == null ? void 0 : r.vnode) == null ? void 0 : u.props;
      return !!(c && (c.onSort || c["on-sort"]));
    }), a = E(() => n.ariaSort === "ascending"), l = E(() => n.ariaSort === "descending");
    function d() {
      s.value && o("sort", n.columnKey || void 0);
    }
    return (c, u) => (M(), I("th", {
      class: H([
        "p-4 text-sm font-medium",
        e.className,
        {
          "text-blue-600": a.value || l.value,
          "text-gray-500": !(a.value || l.value),
          "opacity-60 pointer-events-none": n.loading,
          "cursor-pointer select-none": s.value
        }
      ]),
      style: bt(e.width ? { width: e.width } : void 0),
      onClick: d,
      onKeydown: wt(je(d, ["prevent"]), ["enter"]),
      role: "columnheader",
      "aria-sort": e.ariaSort || "none",
      tabindex: "0"
    }, [
      V("div", {
        class: H(["flex items-center gap-2", i.value])
      }, [
        F(c.$slots, "default"),
        s.value || n.loading ? (M(), I(gt, { key: 0 }, [
          n.loading ? (M(), I("span", hs)) : (M(), I("svg", bs, [
            V("path", {
              class: H(a.value ? "text-blue-600" : "text-gray-500"),
              d: "M7 10l5-5 5 5",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 2),
            V("path", {
              class: H(l.value ? "text-blue-600" : "text-gray-500"),
              d: "M7 14l5 5 5-5",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 2)
          ]))
        ], 64)) : pe("", !0)
      ], 2)
    ], 46, gs));
  }
}), xs = ["onKeydown"], Ss = {
  key: 0,
  class: "px-4 py-2"
}, Cs = ["checked", "aria-label"], Os = /* @__PURE__ */ T({
  __name: "PMGTableRow",
  props: {
    className: { type: String, default: "" },
    item: { type: Object, default: null },
    rowKey: { type: String, default: "id" }
  },
  emits: ["row-click"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = yt("pmgTable", null), i = E(
      () => n.item ? n.item[n.rowKey] : void 0
    );
    Ue(() => {
      o && o.registerRow && i.value != null && o.registerRow(i.value);
    }), sn(() => {
      o && o.unregisterRow && i.value != null && o.unregisterRow(i.value);
    });
    const s = E(() => o && o.isRowSelected ? o.isRowSelected(i.value) : !1);
    function a() {
      !o || !i.value || o.toggleRowSelection && o.toggleRowSelection(i.value);
    }
    function l() {
      r("row-click", n.item);
    }
    return (d, c) => {
      var u;
      return M(), I("tr", {
        class: H(["border-b border-pmg-100", e.className]),
        onClick: l,
        role: "row",
        tabindex: "0",
        onKeydown: wt(je(l, ["prevent"]), ["enter"])
      }, [
        (u = v(o)) != null && u.selectable ? (M(), I("td", Ss, [
          V("input", {
            type: "checkbox",
            checked: s.value,
            onChange: je(a, ["stop", "prevent"]),
            "aria-label": `Select row ${i.value}`
          }, null, 40, Cs)
        ])) : pe("", !0),
        F(d.$slots, "default")
      ], 42, xs);
    };
  }
}), Es = ["colspan"], Ps = /* @__PURE__ */ T({
  __name: "PMGTableCell",
  props: {
    align: {
      type: String,
      default: "left"
    },
    colspan: { type: [Number, String], default: 1 },
    className: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = E(() => t.align === "center" ? "justify-center" : t.align === "right" ? "justify-end" : "justify-start");
    return (r, o) => (M(), I("td", {
      class: H(["p-4 text-sm text-gray-700", e.className]),
      colspan: e.colspan
    }, [
      V("div", {
        class: H(["flex items-center", n.value])
      }, [
        F(r.$slots, "default")
      ], 2)
    ], 10, Es));
  }
}), Ts = {
  install(e) {
    e.component("PMGButton", Qn), e.component("PMGInput", or), e.component("PMGPhoneInput", ps), e.component("PMGTableHeader", ys), e.component("PMGTableHeaderCell", ws), e.component("PMGTableRow", Os), e.component("PMGTableCell", Ps);
  }
};
export {
  Qn as PMGButton,
  or as PMGInput,
  ps as PMGPhoneInput,
  Ps as PMGTableCell,
  ys as PMGTableHeader,
  ws as PMGTableHeaderCell,
  Os as PMGTableRow,
  Ts as default
};
