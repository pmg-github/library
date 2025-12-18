import * as Fe from "vue";
import { defineComponent as D, createElementBlock as I, openBlock as A, normalizeClass as U, renderSlot as B, useAttrs as vt, computed as _, ref as O, withDirectives as tn, createCommentVNode as Z, createElementVNode as $, mergeProps as ie, unref as v, isRef as nn, vModelDynamic as Wn, createTextVNode as Ve, toDisplayString as be, inject as Re, provide as gt, Fragment as ht, effectScope as rn, getCurrentScope as on, onScopeDispose as sn, onBeforeUnmount as bt, customRef as zn, toValue as Y, shallowRef as an, watchEffect as se, readonly as Kn, getCurrentInstance as ve, watch as z, nextTick as X, toHandlerKey as Un, camelize as ln, toRef as Hn, onUnmounted as wt, onMounted as qe, toRefs as Be, h as Pe, Comment as Gn, cloneVNode as Yn, reactive as un, createBlock as L, normalizeStyle as xt, withCtx as q, markRaw as Xn, createVNode as G, watchPostEffect as cn, shallowReadonly as Ce, mergeDefaults as dn, normalizeProps as We, guardReactiveProps as fn, withModifiers as ze, withKeys as St, resolveDynamicComponent as Jn, renderList as Zn, vModelText as Qn, useSlots as er } from "vue";
import { useField as pn } from "vee-validate";
const tr = ["disabled"], nr = /* @__PURE__ */ D({
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
    return D({
      name: "PMGButton"
    }), (t, n) => (A(), I("button", {
      disabled: e.disabled,
      class: U([
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
      B(t.$slots, "default")
    ], 10, tr));
  }
}), rr = { class: "relative" }, or = ["type"], ir = { key: 0 }, sr = {
  key: 1,
  class: "mb-2 mt-1 text-xs text-red-600"
}, ar = /* @__PURE__ */ D({
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
    const t = e, n = vt(), r = _(() => "required" in n), o = O(null), { value: i, handleBlur: s, meta: a, errorMessage: l } = pn(
      () => t.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !0
      }
    );
    return (d, c) => (A(), I("div", rr, [
      tn($("input", ie({
        ref_key: "inputRef",
        ref: o,
        onBlur: c[0] || (c[0] = //@ts-ignore
        (...u) => v(s) && v(s)(...u)),
        "onUpdate:modelValue": c[1] || (c[1] = (u) => nn(i) ? i.value = u : null),
        type: e.type
      }, v(n), {
        class: ["peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all focus:border-2 focus:outline-0 disabled:opacity-50", [
          v(n).placeholder ? "" : "placeholder-shown:border",
          v(a).valid === !1 && v(a).touched ? v(n).placeholder ? "border-red-500 border-t-transparent text-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : v(n).placeholder ? "border-gray-700 border-t-transparent text-gray-700 focus:border-gray-700 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent"
        ]]
      }), null, 16, or), [
        [Wn, v(i)]
      ]),
      e.label ? (A(), I("label", {
        key: 0,
        class: U(["before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:opacity-50", [
          v(n).placeholder ? "text-[11px] leading-tight" : "peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]",
          v(a).valid === !1 && v(a).touched ? v(n).placeholder ? "text-red-500 before:border-red-500 after:border-red-500 peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-red-500 before:border-red-500 after:border-red-500 peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : v(n).placeholder ? "text-gray-700 before:border-gray-700 after:border-gray-700 peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700" : "text-gray-700 before:border-gray-700 after:border-gray-700 peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
        ]])
      }, [
        Ve(be(e.label) + " ", 1),
        r.value ? (A(), I("span", ir, "  *")) : Z("", !0)
      ], 2)) : Z("", !0),
      v(a).touched && v(a).valid === !1 && v(l) ? (A(), I("div", sr, be(v(l)), 1)) : Z("", !0)
    ]));
  }
});
function ge(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(s) => {
    const a = Re(r, s);
    if (a || a === null) return a;
    throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (s) => (gt(r, s), s)];
}
function Q() {
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
function Ct(e) {
  return e ? e.flatMap((t) => t.type === ht ? Ct(t.children) : [t]) : [];
}
const lr = ["INPUT", "TEXTAREA"];
function ur(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && lr.includes(t.nodeName)) return null;
  const { arrowKeyOptions: o = "both", attributeName: i = "[data-reka-collection-item]", itemsArray: s = [], loop: a = !0, dir: l = "ltr", preventScroll: d = !0, focus: c = !1 } = r, [u, f, p, m, y, g] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], h = p || m, b = u || f;
  if (!y && !g && (!h && !b || o === "vertical" && b || o === "horizontal" && h)) return null;
  const x = n ? Array.from(n.querySelectorAll(i)) : s;
  if (!x.length) return null;
  d && e.preventDefault();
  let S = null;
  return b || h ? S = yn(x, t, {
    goForward: h ? m : l === "ltr" ? u : f,
    loop: a
  }) : y ? S = x.at(0) || null : g && (S = x.at(-1) || null), c && (S == null || S.focus()), S;
}
function yn(e, t, n, r = e.length) {
  if (--r === 0) return null;
  const o = e.indexOf(t), i = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (i < 0 || i >= e.length)) return null;
  const s = (i + e.length) % e.length, a = e[s];
  return a ? a.hasAttribute("disabled") && a.getAttribute("disabled") !== "false" ? yn(e, a, n, r) : a : null;
}
const [_t, Ls] = ge("ConfigProvider");
function cr(e, t) {
  var n;
  const r = an();
  return se(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Kn(r);
}
function Ot(e) {
  return on() ? (sn(e), !0) : !1;
}
function dr(e) {
  let t = !1, n;
  const r = rn(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function vn(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...i) => (t += 1, r || (r = rn(!0), n = r.run(() => e(...i))), Ot(o), n);
}
const he = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fr = (e) => typeof e < "u", pr = Object.prototype.toString, mr = (e) => pr.call(e) === "[object Object]", $t = /* @__PURE__ */ yr();
function yr() {
  var e, t;
  return he && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function vr(e) {
  return ve();
}
function et(e) {
  return Array.isArray(e) ? e : [e];
}
function gr(e, t = 1e4) {
  return zn((n, r) => {
    let o = Y(e), i;
    const s = () => setTimeout(() => {
      o = Y(e), r();
    }, Y(t));
    return Ot(() => {
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
function hr(e, t) {
  vr() && bt(e, t);
}
function br(e, t, n) {
  return z(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Pt = he ? window : void 0;
function Me(e) {
  var t;
  const n = Y(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Ke(...e) {
  const t = [], n = () => {
    t.forEach((a) => a()), t.length = 0;
  }, r = (a, l, d, c) => (a.addEventListener(l, d, c), () => a.removeEventListener(l, d, c)), o = _(() => {
    const a = et(Y(e[0])).filter((l) => l != null);
    return a.every((l) => typeof l != "string") ? a : void 0;
  }), i = br(
    () => {
      var a, l;
      return [
        (l = (a = o.value) == null ? void 0 : a.map((d) => Me(d))) != null ? l : [Pt].filter((d) => d != null),
        et(Y(o.value ? e[1] : e[0])),
        et(v(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Y(o.value ? e[3] : e[2])
      ];
    },
    ([a, l, d, c]) => {
      if (n(), !(a != null && a.length) || !(l != null && l.length) || !(d != null && d.length))
        return;
      const u = mr(c) ? { ...c } : c;
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
  return Ot(n), s;
}
function wr(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function xr(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Pt,
    eventName: i = "keydown",
    passive: s = !1,
    dedupe: a = !1
  } = r, l = wr(t);
  return Ke(o, i, (c) => {
    c.repeat && Y(a) || l(c) && n(c);
  }, s);
}
function Sr(e) {
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
  } = r, p = ve(), m = n || (p == null ? void 0 : p.emit) || ((o = p == null ? void 0 : p.$emit) == null ? void 0 : o.bind(p)) || ((s = (i = p == null ? void 0 : p.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let y = d;
  t || (t = "modelValue"), y = y || `update:${t.toString()}`;
  const g = (x) => a ? typeof a == "function" ? a(x) : Sr(x) : x, h = () => fr(e[t]) ? g(e[t]) : u, b = (x) => {
    f ? f(x) && m(y, x) : m(y, x);
  };
  if (l) {
    const x = h(), S = O(x);
    let C = !1;
    return z(
      () => e[t],
      (P) => {
        C || (C = !0, S.value = g(P), X(() => C = !1));
      }
    ), z(
      S,
      (P) => {
        !C && (P !== e[t] || c) && b(P);
      },
      { deep: c }
    ), S;
  } else
    return _({
      get() {
        return h();
      },
      set(x) {
        b(x);
      }
    });
}
function tt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function at(e, t, n = ".", r) {
  if (!tt(t))
    return at(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const s = e[i];
    s != null && (r && r(o, i, s, n) || (Array.isArray(s) && Array.isArray(o[i]) ? o[i] = [...s, ...o[i]] : tt(s) && tt(o[i]) ? o[i] = at(
      s,
      o[i],
      (n ? `${n}.` : "") + i.toString(),
      r
    ) : o[i] = s));
  }
  return o;
}
function Cr(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => at(n, r, "", e), {})
  );
}
const _r = Cr(), Or = vn(() => {
  const e = O(/* @__PURE__ */ new Map()), t = O(), n = _(() => {
    for (const s of e.value.values()) if (s) return !0;
    return !1;
  }), r = _t({ scrollBody: O(!0) });
  let o = null;
  const i = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", $t && (o == null || o()), t.value = void 0;
  };
  return z(n, (s, a) => {
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
    }, c = (u = r.scrollBody) != null && u.value ? typeof r.scrollBody.value == "object" ? _r({
      padding: r.scrollBody.value.padding === !0 ? l : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? l : r.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    l > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), $t && (o = Ke(document, "touchmove", (f) => Er(f), { passive: !1 })), X(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function Pr(e) {
  const t = Math.random().toString(36).substring(2, 7), n = Or();
  n.value.set(t, e ?? !1);
  const r = _({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return hr(() => {
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
function Er(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && gn(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function At(e) {
  const t = _t({ dir: O("ltr") });
  return _(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function hn(e) {
  const t = ve(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((o) => {
    r[Un(ln(o))] = (...i) => e(o, ...i);
  }), r;
}
let nt = 0;
function Ar() {
  se((e) => {
    if (!he) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? Lt()), document.body.insertAdjacentElement("beforeend", t[1] ?? Lt()), nt++, e(() => {
      nt === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), nt--;
    });
  });
}
function Lt() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function ee() {
  const e = ve(), t = O(), n = _(() => {
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
function Mr(e) {
  const t = ve(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, i) => {
    const s = (t == null ? void 0 : t.type.props[i]).default;
    return s !== void 0 && (o[i] = s), o;
  }, {}), r = Hn(e);
  return _(() => {
    const o = {}, i = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(i).forEach((s) => {
      o[ln(s)] = i[s];
    }), Object.keys({
      ...n,
      ...o
    }).reduce((s, a) => (r.value[a] !== void 0 && (s[a] = r.value[a]), s), {});
  });
}
function Ye(e, t) {
  const n = Mr(e), r = t ? hn(t) : {};
  return _(() => ({
    ...n.value,
    ...r
  }));
}
var Tr = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _e = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Le = {}, rt = 0, bn = function(e) {
  return e && (e.host || bn(e.parentNode));
}, kr = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = bn(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Dr = function(e, t, n, r) {
  var o = kr(t, Array.isArray(e) ? e : [e]);
  Le[n] || (Le[n] = /* @__PURE__ */ new WeakMap());
  var i = Le[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), d = function(u) {
    !u || a.has(u) || (a.add(u), d(u.parentNode));
  };
  o.forEach(d);
  var c = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (a.has(f))
        c(f);
      else
        try {
          var p = f.getAttribute(r), m = p !== null && p !== "false", y = (_e.get(f) || 0) + 1, g = (i.get(f) || 0) + 1;
          _e.set(f, y), i.set(f, g), s.push(f), y === 1 && m && $e.set(f, !0), g === 1 && f.setAttribute(n, "true"), m || f.setAttribute(r, "true");
        } catch (h) {
          console.error("aria-hidden: cannot operate on ", f, h);
        }
    });
  };
  return c(t), a.clear(), rt++, function() {
    s.forEach(function(u) {
      var f = _e.get(u) - 1, p = i.get(u) - 1;
      _e.set(u, f), i.set(u, p), f || ($e.has(u) || u.removeAttribute(r), $e.delete(u)), p || u.removeAttribute(n);
    }), rt--, rt || (_e = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Le = {});
  };
}, Rr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Tr(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Dr(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function qr(e) {
  let t;
  z(() => Me(e), (n) => {
    n ? t = Rr(n) : t && t();
  }), wt(() => {
    t && t();
  });
}
let Br = 0;
function wn(e, t = "reka") {
  var r;
  if ("useId" in Fe) return `${t}-${(r = Fe.useId) == null ? void 0 : r.call(Fe)}`;
  const n = _t({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++Br}`;
}
function Ir(e) {
  const t = O(), n = _(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = _(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return qe(() => {
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
function Fr(e, t) {
  const n = O(e);
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
function $r(e) {
  const t = gr("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, i) => {
      t.value = t.value + o;
      {
        const s = Q(), a = i.map((f) => {
          var p, m;
          return {
            ...f,
            textValue: ((p = f.value) == null ? void 0 : p.textValue) ?? ((m = f.ref.textContent) == null ? void 0 : m.trim()) ?? ""
          };
        }), l = a.find((f) => f.ref === s), d = a.map((f) => f.textValue), c = Nr(d, t.value, l == null ? void 0 : l.textValue), u = a.find((f) => f.textValue === c);
        return u && u.ref.focus(), u == null ? void 0 : u.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Lr(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Nr(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Lr(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find((d) => d.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function jr(e, t) {
  var g;
  const n = O({}), r = O("none"), o = O(e), i = e.value ? "mounted" : "unmounted";
  let s;
  const a = ((g = t.value) == null ? void 0 : g.ownerDocument.defaultView) ?? Pt, { state: l, dispatch: d } = Fr(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (h) => {
    var b;
    if (he) {
      const x = new CustomEvent(h, {
        bubbles: !1,
        cancelable: !1
      });
      (b = t.value) == null || b.dispatchEvent(x);
    }
  };
  z(e, async (h, b) => {
    var S;
    const x = b !== h;
    if (await X(), x) {
      const C = r.value, P = Ne(t.value);
      h ? (d("MOUNT"), c("enter"), P === "none" && c("after-enter")) : P === "none" || P === "undefined" || ((S = n.value) == null ? void 0 : S.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : b && C !== P ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const u = (h) => {
    const b = Ne(t.value), x = b.includes(h.animationName), S = l.value === "mounted" ? "enter" : "leave";
    if (h.target === t.value && x && (c(`after-${S}`), d("ANIMATION_END"), !o.value)) {
      const C = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = a == null ? void 0 : a.setTimeout(() => {
        var P;
        ((P = t.value) == null ? void 0 : P.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = C);
      });
    }
    h.target === t.value && b === "none" && d("ANIMATION_END");
  }, f = (h) => {
    h.target === t.value && (r.value = Ne(t.value));
  }, p = z(t, (h, b) => {
    h ? (n.value = getComputedStyle(h), h.addEventListener("animationstart", f), h.addEventListener("animationcancel", u), h.addEventListener("animationend", u)) : (d("ANIMATION_END"), s !== void 0 && (a == null || a.clearTimeout(s)), b == null || b.removeEventListener("animationstart", f), b == null || b.removeEventListener("animationcancel", u), b == null || b.removeEventListener("animationend", u));
  }, { immediate: !0 }), m = z(l, () => {
    const h = Ne(t.value);
    r.value = l.value === "mounted" ? h : "none";
  });
  return wt(() => {
    p(), m();
  }), { isPresent: _(() => ["mounted", "unmountSuspended"].includes(l.value)) };
}
function Ne(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var Vr = D({
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
    const { present: r, forceMount: o } = Be(e), i = O(), { isPresent: s } = jr(r, i);
    n({ present: s });
    let a = t.default({ present: s.value });
    a = Ct(a || []);
    const l = ve();
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
const lt = D({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var l;
      if (!n.default) return null;
      const r = Ct(n.default()), o = r.findIndex((d) => d.type !== Gn);
      if (o === -1) return r;
      const i = r[o];
      (l = i.props) == null || delete l.ref;
      const s = i.props ? ie(t, i.props) : t, a = Yn({
        ...i,
        props: {}
      }, s);
      return r.length === 1 ? a : (r[o] = a, r);
    };
  }
}), Wr = [
  "area",
  "img",
  "input"
], xe = D({
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
    return typeof r == "string" && Wr.includes(r) ? () => Pe(r, t) : r !== "template" ? () => Pe(e.as, t, { default: n.default }) : () => Pe(lt, t, { default: n.default });
  }
});
function Nt() {
  const e = O(), t = _(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : Me(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const zr = "dismissableLayer.pointerDownOutside", Kr = "dismissableLayer.focusOutside";
function xn(e, t) {
  const n = t.closest("[data-dismissable-layer]"), r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), o = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
}
function Ur(e, t, n = !0) {
  var s;
  const r = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1), i = O(() => {
  });
  return se((a) => {
    if (!he || !Y(n)) return;
    const l = async (c) => {
      const u = c.target;
      if (!(!(t != null && t.value) || !u)) {
        if (xn(t.value, u)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let p = function() {
            mn(zr, e, f);
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
    Y(n) && (o.value = !0);
  } };
}
function Hr(e, t, n = !0) {
  var i;
  const r = ((i = t == null ? void 0 : t.value) == null ? void 0 : i.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = O(!1);
  return se((s) => {
    if (!he || !Y(n)) return;
    const a = async (l) => {
      if (!(t != null && t.value)) return;
      await X(), await X();
      const d = l.target;
      !t.value || !d || xn(t.value, d) || l.target && !o.value && mn(Kr, e, { originalEvent: l });
    };
    r.addEventListener("focusin", a), s(() => r.removeEventListener("focusin", a));
  }), {
    onFocusCapture: () => {
      Y(n) && (o.value = !0);
    },
    onBlurCapture: () => {
      Y(n) && (o.value = !1);
    }
  };
}
const ue = un({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var Gr = /* @__PURE__ */ D({
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
    const n = e, r = t, { forwardRef: o, currentElement: i } = ee(), s = _(() => {
      var m;
      return ((m = i.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
    }), a = _(() => ue.layersRoot), l = _(() => i.value ? Array.from(a.value).indexOf(i.value) : -1), d = _(() => ue.layersWithOutsidePointerEventsDisabled.size > 0), c = _(() => {
      const m = Array.from(a.value), [y] = [...ue.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(y);
      return l.value >= g;
    }), u = Ur(async (m) => {
      const y = [...ue.branches].some((g) => g == null ? void 0 : g.contains(m.target));
      !c.value || y || (r("pointerDownOutside", m), r("interactOutside", m), await X(), m.defaultPrevented || r("dismiss"));
    }, i), f = Hr((m) => {
      [...ue.branches].some((g) => g == null ? void 0 : g.contains(m.target)) || (r("focusOutside", m), r("interactOutside", m), m.defaultPrevented || r("dismiss"));
    }, i);
    xr("Escape", (m) => {
      l.value === a.value.size - 1 && (r("escapeKeyDown", m), m.defaultPrevented || r("dismiss"));
    });
    let p;
    return se((m) => {
      i.value && (n.disableOutsidePointerEvents && (ue.layersWithOutsidePointerEventsDisabled.size === 0 && (p = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), ue.layersWithOutsidePointerEventsDisabled.add(i.value)), a.value.add(i.value), m(() => {
        n.disableOutsidePointerEvents && ue.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = p);
      }));
    }), se((m) => {
      m(() => {
        i.value && (a.value.delete(i.value), ue.layersWithOutsidePointerEventsDisabled.delete(i.value));
      });
    }), (m, y) => (A(), L(v(xe), {
      ref: v(o),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: xt({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: v(f).onFocusCapture,
      onBlurCapture: v(f).onBlurCapture,
      onPointerdownCapture: v(u).onPointerDownCapture
    }, {
      default: q(() => [B(m.$slots, "default")]),
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
}), Yr = Gr;
const Xr = dr(() => O([]));
function Jr() {
  const e = Xr();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = jt(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = jt(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function jt(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Zr(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ot = "focusScope.autoFocusOnMount", it = "focusScope.autoFocusOnUnmount", Vt = {
  bubbles: !1,
  cancelable: !0
};
function Qr(e, { select: t = !1 } = {}) {
  const n = Q();
  for (const r of e)
    if (pe(r, { select: t }), Q() !== n) return !0;
}
function eo(e) {
  const t = Sn(e), n = Wt(t, e), r = Wt(t.reverse(), e);
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
function Wt(e, t) {
  for (const n of e) if (!to(n, { upTo: t })) return n;
}
function to(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function no(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function pe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Q();
    e.focus({ preventScroll: !0 }), e !== n && no(e) && t && e.select();
  }
}
var ro = /* @__PURE__ */ D({
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
    const n = e, r = t, { currentRef: o, currentElement: i } = ee(), s = O(null), a = Jr(), l = un({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    se((c) => {
      if (!he) return;
      const u = i.value;
      if (!n.trapped) return;
      function f(g) {
        if (l.paused || !u) return;
        const h = g.target;
        u.contains(h) ? s.value = h : pe(s.value, { select: !0 });
      }
      function p(g) {
        if (l.paused || !u) return;
        const h = g.relatedTarget;
        h !== null && (u.contains(h) || pe(s.value, { select: !0 }));
      }
      function m(g) {
        u.contains(s.value) || pe(u);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", p);
      const y = new MutationObserver(m);
      u && y.observe(u, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", p), y.disconnect();
      });
    }), se(async (c) => {
      const u = i.value;
      if (await X(), !u) return;
      a.add(l);
      const f = Q();
      if (!u.contains(f)) {
        const m = new CustomEvent(ot, Vt);
        u.addEventListener(ot, (y) => r("mountAutoFocus", y)), u.dispatchEvent(m), m.defaultPrevented || (Qr(Zr(Sn(u)), { select: !0 }), Q() === f && pe(u));
      }
      c(() => {
        u.removeEventListener(ot, (g) => r("mountAutoFocus", g));
        const m = new CustomEvent(it, Vt), y = (g) => {
          r("unmountAutoFocus", g);
        };
        u.addEventListener(it, y), u.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || pe(f ?? document.body, { select: !0 }), u.removeEventListener(it, y), a.remove(l);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || l.paused) return;
      const u = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = Q();
      if (u && f) {
        const p = c.currentTarget, [m, y] = eo(p);
        m && y ? !c.shiftKey && f === y ? (c.preventDefault(), n.loop && pe(m, { select: !0 })) : c.shiftKey && f === m && (c.preventDefault(), n.loop && pe(y, { select: !0 })) : f === p && c.preventDefault();
      }
    }
    return (c, u) => (A(), L(v(xe), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: q(() => [B(c.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), oo = ro;
const io = "menu.itemSelect", ut = ["Enter", " "], so = [
  "ArrowDown",
  "PageUp",
  "Home"
], Cn = [
  "ArrowUp",
  "PageDown",
  "End"
], ao = [...so, ...Cn];
[...ut], [...ut];
function lo(e) {
  return e ? "open" : "closed";
}
function uo(e) {
  const t = Q();
  for (const n of e)
    if (n === t || (n.focus(), Q() !== t)) return;
}
function co(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, d = t[s].x, c = t[s].y;
    l > r != c > r && n < (d - a) * (r - l) / (c - l) + a && (o = !o);
  }
  return o;
}
function fo(e, t) {
  if (!t) return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return co(n, t);
}
function ct(e) {
  return e.pointerType === "mouse";
}
const zt = "data-reka-collection-item";
function _n(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const c = O(/* @__PURE__ */ new Map());
    o = {
      collectionRef: O(),
      itemMap: c
    }, gt(r, o);
  } else o = Re(r);
  const i = (c = !1) => {
    const u = o.collectionRef.value;
    if (!u) return [];
    const f = Array.from(u.querySelectorAll(`[${zt}]`)), m = Array.from(o.itemMap.value.values()).sort((y, g) => f.indexOf(y.ref) - f.indexOf(g.ref));
    return c ? m : m.filter((y) => y.ref.dataset.disabled !== "");
  }, s = D({
    name: "CollectionSlot",
    setup(c, { slots: u }) {
      const { primitiveElement: f, currentElement: p } = Nt();
      return z(p, () => {
        o.collectionRef.value = p.value;
      }), () => Pe(lt, { ref: f }, u);
    }
  }), a = D({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: u, attrs: f }) {
      const { primitiveElement: p, currentElement: m } = Nt();
      return se((y) => {
        if (m.value) {
          const g = Xn(m.value);
          o.itemMap.value.set(g, {
            ref: m.value,
            value: c.value
          }), y(() => o.itemMap.value.delete(g));
        }
      }), () => Pe(lt, {
        ...f,
        [zt]: "",
        ref: p
      }, u);
    }
  }), l = _(() => Array.from(o.itemMap.value.values())), d = _(() => o.itemMap.value.size);
  return {
    getItems: i,
    reactiveItems: l,
    itemMapSize: d,
    CollectionSlot: s,
    CollectionItem: a
  };
}
const po = "rovingFocusGroup.onEntryFocus", mo = {
  bubbles: !1,
  cancelable: !0
};
function yo(e, t = !1) {
  const n = Q();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), Q() !== n)) return;
}
const [Ns, vo] = ge("RovingFocusGroup");
var go = /* @__PURE__ */ D({
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
    const r = e, o = n, { loop: i, orientation: s, dir: a } = Be(r), l = At(a), d = Et(r, "currentTabStopId", o, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), c = O(!1), u = O(!1), f = O(0), { getItems: p, CollectionSlot: m } = _n({ isProvider: !0 });
    function y(h) {
      const b = !u.value;
      if (h.currentTarget && h.target === h.currentTarget && b && !c.value) {
        const x = new CustomEvent(po, mo);
        if (h.currentTarget.dispatchEvent(x), o("entryFocus", x), !x.defaultPrevented) {
          const S = p().map((R) => R.ref).filter((R) => R.dataset.disabled !== ""), C = S.find((R) => R.getAttribute("data-active") === ""), P = S.find((R) => R.id === d.value), M = [
            C,
            P,
            ...S
          ].filter(Boolean);
          yo(M, r.preventScrollOnEntryFocus);
        }
      }
      u.value = !1;
    }
    function g() {
      setTimeout(() => {
        u.value = !1;
      }, 1);
    }
    return t({ getItems: p }), vo({
      loop: i,
      dir: l,
      orientation: s,
      currentTabStopId: d,
      onItemFocus: (h) => {
        d.value = h;
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
    }), (h, b) => (A(), L(v(m), null, {
      default: q(() => [G(v(xe), {
        tabindex: c.value || f.value === 0 ? -1 : 0,
        "data-orientation": v(s),
        as: h.as,
        "as-child": h.asChild,
        dir: v(l),
        style: { outline: "none" },
        onMousedown: b[0] || (b[0] = (x) => u.value = !0),
        onMouseup: g,
        onFocus: y,
        onBlur: b[1] || (b[1] = (x) => c.value = !1)
      }, {
        default: q(() => [B(h.$slots, "default")]),
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
}), ho = go;
const [On, bo] = ge("PopperRoot");
var wo = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = O();
    return bo({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => B(n.$slots, "default");
  }
}), xo = wo, So = /* @__PURE__ */ D({
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
    const t = e, { forwardRef: n, currentElement: r } = ee(), o = On();
    return cn(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (i, s) => (A(), L(v(xe), {
      ref: v(n),
      as: i.as,
      "as-child": i.asChild
    }, {
      default: q(() => [B(i.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Co = So;
function _o(e) {
  return e !== null;
}
function Oo(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var g, h, b;
      const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, c] = dt(n), u = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], f = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + a / 2, p = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
      let m = "", y = "";
      return d === "bottom" ? (m = s ? u : `${f}px`, y = `${-l}px`) : d === "top" ? (m = s ? u : `${f}px`, y = `${r.floating.height + l}px`) : d === "right" ? (m = `${-l}px`, y = s ? u : `${p}px`) : d === "left" && (m = `${r.floating.width + l}px`, y = s ? u : `${p}px`), { data: {
        x: m,
        y
      } };
    }
  };
}
function dt(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Po = ["top", "right", "bottom", "left"], me = Math.min, H = Math.max, Ue = Math.round, je = Math.floor, oe = (e) => ({
  x: e,
  y: e
}), Eo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ao = {
  start: "end",
  end: "start"
};
function ft(e, t, n) {
  return H(e, me(t, n));
}
function ce(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function de(e) {
  return e.split("-")[0];
}
function Te(e) {
  return e.split("-")[1];
}
function Mt(e) {
  return e === "x" ? "y" : "x";
}
function Tt(e) {
  return e === "y" ? "height" : "width";
}
const Mo = /* @__PURE__ */ new Set(["top", "bottom"]);
function re(e) {
  return Mo.has(de(e)) ? "y" : "x";
}
function kt(e) {
  return Mt(re(e));
}
function To(e, t, n) {
  n === void 0 && (n = !1);
  const r = Te(e), o = kt(e), i = Tt(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = He(s)), [s, He(s)];
}
function ko(e) {
  const t = He(e);
  return [pt(e), t, pt(t)];
}
function pt(e) {
  return e.replace(/start|end/g, (t) => Ao[t]);
}
const Kt = ["left", "right"], Ut = ["right", "left"], Do = ["top", "bottom"], Ro = ["bottom", "top"];
function qo(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ut : Kt : t ? Kt : Ut;
    case "left":
    case "right":
      return t ? Do : Ro;
    default:
      return [];
  }
}
function Bo(e, t, n, r) {
  const o = Te(e);
  let i = qo(de(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(pt)))), i;
}
function He(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Eo[t]);
}
function Io(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pn(e) {
  return typeof e != "number" ? Io(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ge(e) {
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
function Ht(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = re(t), s = kt(t), a = Tt(s), l = de(t), d = i === "y", c = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Te(t)) {
    case "start":
      p[s] -= f * (n && d ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && d ? -1 : 1);
      break;
  }
  return p;
}
const Fo = async (e, t, n) => {
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
  } = Ht(d, r, l), f = r, p = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: g,
      fn: h
    } = a[y], {
      x: b,
      y: x,
      data: S,
      reset: C
    } = await h({
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
      [g]: {
        ...p[g],
        ...S
      }
    }, C && m <= 50 && (m++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: u
    } = Ht(d, f, l)), y = -1);
  }
  return {
    x: c,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function ke(e, t) {
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
  } = ce(t, e), m = Pn(p), g = a[f ? u === "floating" ? "reference" : "floating" : u], h = Ge(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
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
  }, C = Ge(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (h.top - C.top + m.top) / S.y,
    bottom: (C.bottom - h.bottom + m.bottom) / S.y,
    left: (h.left - C.left + m.left) / S.x,
    right: (C.right - h.right + m.right) / S.x
  };
}
const $o = (e) => ({
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
    } = ce(e, t) || {};
    if (d == null)
      return {};
    const u = Pn(c), f = {
      x: n,
      y: r
    }, p = kt(o), m = Tt(p), y = await s.getDimensions(d), g = p === "y", h = g ? "top" : "left", b = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", S = i.reference[m] + i.reference[p] - f[p] - i.floating[m], C = f[p] - i.reference[p], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let M = P ? P[x] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(P))) && (M = a.floating[x] || i.floating[m]);
    const R = S / 2 - C / 2, w = M / 2 - y[m] / 2 - 1, E = me(u[h], w), k = me(u[b], w), T = E, V = M - y[m] - k, F = M / 2 - y[m] / 2 + R, K = ft(T, F, V), j = !l.arrow && Te(o) != null && F !== K && i.reference[m] / 2 - (F < T ? E : k) - y[m] / 2 < 0, W = j ? F < T ? F - T : F - V : 0;
    return {
      [p]: f[p] + W,
      data: {
        [p]: K,
        centerOffset: F - K - W,
        ...j && {
          alignmentOffset: W
        }
      },
      reset: j
    };
  }
}), Lo = function(e) {
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
        ...g
      } = ce(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const h = de(o), b = re(a), x = de(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = f || (x || !y ? [He(a)] : ko(a)), P = m !== "none";
      !f && P && C.push(...Bo(a, y, m, S));
      const M = [a, ...C], R = await ke(t, g), w = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && w.push(R[h]), u) {
        const F = To(o, s, S);
        w.push(R[F[0]], R[F[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: w
      }], !w.every((F) => F <= 0)) {
        var k, T;
        const F = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1, K = M[F];
        if (K && (!(u === "alignment" ? b !== re(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        E.every((N) => re(N.placement) === b ? N.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: E
            },
            reset: {
              placement: K
            }
          };
        let j = (T = E.filter((W) => W.overflows[0] <= 0).sort((W, N) => W.overflows[1] - N.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!j)
          switch (p) {
            case "bestFit": {
              var V;
              const W = (V = E.filter((N) => {
                if (P) {
                  const fe = re(N.placement);
                  return fe === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  fe === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((fe) => fe > 0).reduce((fe, Vn) => fe + Vn, 0)]).sort((N, fe) => N[1] - fe[1])[0]) == null ? void 0 : V[0];
              W && (j = W);
              break;
            }
            case "initialPlacement":
              j = a;
              break;
          }
        if (o !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function Gt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Yt(e) {
  return Po.some((t) => e[t] >= 0);
}
const No = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = ce(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await ke(t, {
            ...o,
            elementContext: "reference"
          }), s = Gt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Yt(s)
            }
          };
        }
        case "escaped": {
          const i = await ke(t, {
            ...o,
            altBoundary: !0
          }), s = Gt(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Yt(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, En = /* @__PURE__ */ new Set(["left", "top"]);
async function jo(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = de(n), a = Te(n), l = re(n) === "y", d = En.has(s) ? -1 : 1, c = i && l ? -1 : 1, u = ce(t, e);
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
const Vo = function(e) {
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
      } = t, l = await jo(t, e);
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
}, Wo = function(e) {
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
          fn: (g) => {
            let {
              x: h,
              y: b
            } = g;
            return {
              x: h,
              y: b
            };
          }
        },
        ...l
      } = ce(e, t), d = {
        x: n,
        y: r
      }, c = await ke(t, l), u = re(de(o)), f = Mt(u);
      let p = d[f], m = d[u];
      if (i) {
        const g = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", b = p + c[g], x = p - c[h];
        p = ft(b, p, x);
      }
      if (s) {
        const g = u === "y" ? "top" : "left", h = u === "y" ? "bottom" : "right", b = m + c[g], x = m - c[h];
        m = ft(b, m, x);
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
}, zo = function(e) {
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
      } = ce(e, t), c = {
        x: n,
        y: r
      }, u = re(o), f = Mt(u);
      let p = c[f], m = c[u];
      const y = ce(a, t), g = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const x = f === "y" ? "height" : "width", S = i.reference[f] - i.floating[x] + g.mainAxis, C = i.reference[f] + i.reference[x] - g.mainAxis;
        p < S ? p = S : p > C && (p = C);
      }
      if (d) {
        var h, b;
        const x = f === "y" ? "width" : "height", S = En.has(de(o)), C = i.reference[u] - i.floating[x] + (S && ((h = s.offset) == null ? void 0 : h[u]) || 0) + (S ? 0 : g.crossAxis), P = i.reference[u] + i.reference[x] + (S ? 0 : ((b = s.offset) == null ? void 0 : b[u]) || 0) - (S ? g.crossAxis : 0);
        m < C ? m = C : m > P && (m = P);
      }
      return {
        [f]: p,
        [u]: m
      };
    }
  };
}, Ko = function(e) {
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
      } = ce(e, t), c = await ke(t, d), u = de(o), f = Te(o), p = re(o) === "y", {
        width: m,
        height: y
      } = i.floating;
      let g, h;
      u === "top" || u === "bottom" ? (g = u, h = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = u, g = f === "end" ? "top" : "bottom");
      const b = y - c.top - c.bottom, x = m - c.left - c.right, S = me(y - c[g], b), C = me(m - c[h], x), P = !t.middlewareData.shift;
      let M = S, R = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = x), (r = t.middlewareData.shift) != null && r.enabled.y && (M = b), P && !f) {
        const E = H(c.left, 0), k = H(c.right, 0), T = H(c.top, 0), V = H(c.bottom, 0);
        p ? R = m - 2 * (E !== 0 || k !== 0 ? E + k : H(c.left, c.right)) : M = y - 2 * (T !== 0 || V !== 0 ? T + V : H(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: R,
        availableHeight: M
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
function Xe() {
  return typeof window < "u";
}
function Se(e) {
  return Dt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function J(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function le(e) {
  var t;
  return (t = (Dt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Dt(e) {
  return Xe() ? e instanceof Node || e instanceof J(e).Node : !1;
}
function te(e) {
  return Xe() ? e instanceof Element || e instanceof J(e).Element : !1;
}
function ae(e) {
  return Xe() ? e instanceof HTMLElement || e instanceof J(e).HTMLElement : !1;
}
function Xt(e) {
  return !Xe() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof J(e).ShadowRoot;
}
const Uo = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ie(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ne(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Uo.has(o);
}
const Ho = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Go(e) {
  return Ho.has(Se(e));
}
const Yo = [":popover-open", ":modal"];
function Je(e) {
  return Yo.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Xo = ["transform", "translate", "scale", "rotate", "perspective"], Jo = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Zo = ["paint", "layout", "strict", "content"];
function Rt(e) {
  const t = qt(), n = te(e) ? ne(e) : e;
  return Xo.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Jo.some((r) => (n.willChange || "").includes(r)) || Zo.some((r) => (n.contain || "").includes(r));
}
function Qo(e) {
  let t = ye(e);
  for (; ae(t) && !Ae(t); ) {
    if (Rt(t))
      return t;
    if (Je(t))
      return null;
    t = ye(t);
  }
  return null;
}
function qt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ei = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ae(e) {
  return ei.has(Se(e));
}
function ne(e) {
  return J(e).getComputedStyle(e);
}
function Ze(e) {
  return te(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ye(e) {
  if (Se(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Xt(e) && e.host || // Fallback.
    le(e)
  );
  return Xt(t) ? t.host : t;
}
function An(e) {
  const t = ye(e);
  return Ae(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ae(t) && Ie(t) ? t : An(t);
}
function De(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = An(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = J(o);
  if (i) {
    const a = mt(s);
    return t.concat(s, s.visualViewport || [], Ie(o) ? o : [], a && n ? De(a) : []);
  }
  return t.concat(o, De(o, [], n));
}
function mt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Mn(e) {
  const t = ne(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ae(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Ue(n) !== i || Ue(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Bt(e) {
  return te(e) ? e : e.contextElement;
}
function Ee(e) {
  const t = Bt(e);
  if (!ae(t))
    return oe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Mn(t);
  let s = (i ? Ue(n.width) : n.width) / r, a = (i ? Ue(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const ti = /* @__PURE__ */ oe(0);
function Tn(e) {
  const t = J(e);
  return !qt() || !t.visualViewport ? ti : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ni(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== J(e) ? !1 : t;
}
function we(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Bt(e);
  let s = oe(1);
  t && (r ? te(r) && (s = Ee(r)) : s = Ee(e));
  const a = ni(i, n, r) ? Tn(i) : oe(0);
  let l = (o.left + a.x) / s.x, d = (o.top + a.y) / s.y, c = o.width / s.x, u = o.height / s.y;
  if (i) {
    const f = J(i), p = r && te(r) ? J(r) : r;
    let m = f, y = mt(m);
    for (; y && r && p !== m; ) {
      const g = Ee(y), h = y.getBoundingClientRect(), b = ne(y), x = h.left + (y.clientLeft + parseFloat(b.paddingLeft)) * g.x, S = h.top + (y.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, c *= g.x, u *= g.y, l += x, d += S, m = J(y), y = mt(m);
    }
  }
  return Ge({
    width: c,
    height: u,
    x: l,
    y: d
  });
}
function It(e, t) {
  const n = Ze(e).scrollLeft;
  return t ? t.left + n : we(le(e)).left + n;
}
function kn(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    It(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function ri(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = le(r), a = t ? Je(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = oe(1);
  const c = oe(0), u = ae(r);
  if ((u || !u && !i) && ((Se(r) !== "body" || Ie(s)) && (l = Ze(r)), ae(r))) {
    const p = we(r);
    d = Ee(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  const f = s && !u && !i ? kn(s, l, !0) : oe(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + c.x + f.x,
    y: n.y * d.y - l.scrollTop * d.y + c.y + f.y
  };
}
function oi(e) {
  return Array.from(e.getClientRects());
}
function ii(e) {
  const t = le(e), n = Ze(e), r = e.ownerDocument.body, o = H(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = H(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + It(e);
  const a = -n.scrollTop;
  return ne(r).direction === "rtl" && (s += H(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function si(e, t) {
  const n = J(e), r = le(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = qt();
    (!d || d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const ai = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function li(e, t) {
  const n = we(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ae(e) ? Ee(e) : oe(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, d = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: d
  };
}
function Jt(e, t, n) {
  let r;
  if (t === "viewport")
    r = si(e, n);
  else if (t === "document")
    r = ii(le(e));
  else if (te(t))
    r = li(t, n);
  else {
    const o = Tn(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ge(r);
}
function Dn(e, t) {
  const n = ye(e);
  return n === t || !te(n) || Ae(n) ? !1 : ne(n).position === "fixed" || Dn(n, t);
}
function ui(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = De(e, [], !1).filter((a) => te(a) && Se(a) !== "body"), o = null;
  const i = ne(e).position === "fixed";
  let s = i ? ye(e) : e;
  for (; te(s) && !Ae(s); ) {
    const a = ne(s), l = Rt(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ai.has(o.position) || Ie(s) && !l && Dn(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = ye(s);
  }
  return t.set(e, r), r;
}
function ci(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Je(t) ? [] : ui(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((d, c) => {
    const u = Jt(t, c, o);
    return d.top = H(u.top, d.top), d.right = me(u.right, d.right), d.bottom = me(u.bottom, d.bottom), d.left = H(u.left, d.left), d;
  }, Jt(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function di(e) {
  const {
    width: t,
    height: n
  } = Mn(e);
  return {
    width: t,
    height: n
  };
}
function fi(e, t, n) {
  const r = ae(t), o = le(t), i = n === "fixed", s = we(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = oe(0);
  function d() {
    l.x = It(o);
  }
  if (r || !r && !i)
    if ((Se(t) !== "body" || Ie(o)) && (a = Ze(t)), r) {
      const p = we(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else o && d();
  i && !r && o && d();
  const c = o && !r && !i ? kn(o, a) : oe(0), u = s.left + a.scrollLeft - l.x - c.x, f = s.top + a.scrollTop - l.y - c.y;
  return {
    x: u,
    y: f,
    width: s.width,
    height: s.height
  };
}
function st(e) {
  return ne(e).position === "static";
}
function Zt(e, t) {
  if (!ae(e) || ne(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return le(e) === n && (n = n.ownerDocument.body), n;
}
function Rn(e, t) {
  const n = J(e);
  if (Je(e))
    return n;
  if (!ae(e)) {
    let o = ye(e);
    for (; o && !Ae(o); ) {
      if (te(o) && !st(o))
        return o;
      o = ye(o);
    }
    return n;
  }
  let r = Zt(e, t);
  for (; r && Go(r) && st(r); )
    r = Zt(r, t);
  return r && Ae(r) && st(r) && !Rt(r) ? n : r || Qo(e) || n;
}
const pi = async function(e) {
  const t = this.getOffsetParent || Rn, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: fi(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function mi(e) {
  return ne(e).direction === "rtl";
}
const yi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ri,
  getDocumentElement: le,
  getClippingRect: ci,
  getOffsetParent: Rn,
  getElementRects: pi,
  getClientRects: oi,
  getDimensions: di,
  getScale: Ee,
  isElement: te,
  isRTL: mi
};
function qn(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function vi(e, t) {
  let n = null, r;
  const o = le(e);
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
    const m = je(u), y = je(o.clientWidth - (c + f)), g = je(o.clientHeight - (u + p)), h = je(c), x = {
      rootMargin: -m + "px " + -y + "px " + -g + "px " + -h + "px",
      threshold: H(0, me(1, l)) || 1
    };
    let S = !0;
    function C(P) {
      const M = P[0].intersectionRatio;
      if (M !== l) {
        if (!S)
          return s();
        M ? s(!1, M) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !qn(d, e.getBoundingClientRect()) && s(), S = !1;
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
function gi(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = Bt(e), c = o || i ? [...d ? De(d) : [], ...De(t)] : [];
  c.forEach((h) => {
    o && h.addEventListener("scroll", n, {
      passive: !0
    }), i && h.addEventListener("resize", n);
  });
  const u = d && a ? vi(d, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((h) => {
    let [b] = h;
    b && b.target === d && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(t);
    })), n();
  }), d && !l && p.observe(d), p.observe(t));
  let m, y = l ? we(e) : null;
  l && g();
  function g() {
    const h = we(e);
    y && !qn(y, h) && n(), y = h, m = requestAnimationFrame(g);
  }
  return n(), () => {
    var h;
    c.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), u == null || u(), (h = p) == null || h.disconnect(), p = null, l && cancelAnimationFrame(m);
  };
}
const hi = Vo, bi = Wo, Qt = Lo, wi = Ko, xi = No, Si = $o, Ci = zo, _i = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: yi,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Fo(e, t, {
    ...o,
    platform: i
  });
};
function Oi(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function yt(e) {
  if (Oi(e)) {
    const t = e.$el;
    return Dt(t) && Se(t) === "#comment" ? null : t;
  }
  return e;
}
function Oe(e) {
  return typeof e == "function" ? e() : v(e);
}
function Pi(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = yt(Oe(e.element));
      return n == null ? {} : Si({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Bn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function en(e, t) {
  const n = Bn(e);
  return Math.round(t * n) / n;
}
function Ei(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = _(() => {
    var M;
    return (M = Oe(n.open)) != null ? M : !0;
  }), i = _(() => Oe(n.middleware)), s = _(() => {
    var M;
    return (M = Oe(n.placement)) != null ? M : "bottom";
  }), a = _(() => {
    var M;
    return (M = Oe(n.strategy)) != null ? M : "absolute";
  }), l = _(() => {
    var M;
    return (M = Oe(n.transform)) != null ? M : !0;
  }), d = _(() => yt(e.value)), c = _(() => yt(t.value)), u = O(0), f = O(0), p = O(a.value), m = O(s.value), y = an({}), g = O(!1), h = _(() => {
    const M = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return M;
    const R = en(c.value, u.value), w = en(c.value, f.value);
    return l.value ? {
      ...M,
      transform: "translate(" + R + "px, " + w + "px)",
      ...Bn(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: R + "px",
      top: w + "px"
    };
  });
  let b;
  function x() {
    if (d.value == null || c.value == null)
      return;
    const M = o.value;
    _i(d.value, c.value, {
      middleware: i.value,
      placement: s.value,
      strategy: a.value
    }).then((R) => {
      u.value = R.x, f.value = R.y, p.value = R.strategy, m.value = R.placement, y.value = R.middlewareData, g.value = M !== !1;
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
  function P() {
    o.value || (g.value = !1);
  }
  return z([i, s, a, o], x, {
    flush: "sync"
  }), z([d, c], C, {
    flush: "sync"
  }), z(o, P, {
    flush: "sync"
  }), on() && sn(S), {
    x: Ce(u),
    y: Ce(f),
    strategy: Ce(p),
    placement: Ce(m),
    middlewareData: Ce(y),
    isPositioned: Ce(g),
    floatingStyles: h,
    update: x
  };
}
const In = {
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
}, [js, Ai] = ge("PopperContent");
var Mi = /* @__PURE__ */ D({
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
  }, { ...In }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = On(), { forwardRef: i, currentElement: s } = ee(), a = O(), l = O(), { width: d, height: c } = Ir(l), u = _(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), f = _(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), p = _(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = _(() => ({
      padding: f.value,
      boundary: p.value.filter(_o),
      altBoundary: p.value.length > 0
    })), y = _(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), g = cr(() => [
      hi({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Qt({
        ...m.value,
        ...y.value
      }),
      n.avoidCollisions && bi({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Ci() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Qt({
        ...m.value,
        ...y.value
      }),
      wi({
        ...m.value,
        apply: ({ elements: T, rects: V, availableWidth: F, availableHeight: K }) => {
          const { width: j, height: W } = V.reference, N = T.floating.style;
          N.setProperty("--reka-popper-available-width", `${F}px`), N.setProperty("--reka-popper-available-height", `${K}px`), N.setProperty("--reka-popper-anchor-width", `${j}px`), N.setProperty("--reka-popper-anchor-height", `${W}px`);
        }
      }),
      l.value && Pi({
        element: l.value,
        padding: n.arrowPadding
      }),
      Oo({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && xi({
        strategy: "referenceHidden",
        ...m.value
      })
    ]), h = _(() => n.reference ?? o.anchor.value), { floatingStyles: b, placement: x, isPositioned: S, middlewareData: C } = Ei(h, a, {
      strategy: n.positionStrategy,
      placement: u,
      whileElementsMounted: (...T) => gi(...T, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: g
    }), P = _(() => dt(x.value)[0]), M = _(() => dt(x.value)[1]);
    cn(() => {
      S.value && r("placed");
    });
    const R = _(() => {
      var T;
      return ((T = C.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
    }), w = O("");
    se(() => {
      s.value && (w.value = window.getComputedStyle(s.value).zIndex);
    });
    const E = _(() => {
      var T;
      return ((T = C.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), k = _(() => {
      var T;
      return ((T = C.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return Ai({
      placedSide: P,
      onArrowChange: (T) => l.value = T,
      arrowX: E,
      arrowY: k,
      shouldHideArrow: R
    }), (T, V) => {
      var F, K, j;
      return A(), I("div", {
        ref_key: "floatingRef",
        ref: a,
        "data-reka-popper-content-wrapper": "",
        style: xt({
          ...v(b),
          transform: v(S) ? v(b).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: w.value,
          "--reka-popper-transform-origin": [(F = v(C).transformOrigin) == null ? void 0 : F.x, (K = v(C).transformOrigin) == null ? void 0 : K.y].join(" "),
          ...((j = v(C).hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [G(v(xe), ie({ ref: v(i) }, T.$attrs, {
        "as-child": n.asChild,
        as: T.as,
        "data-side": P.value,
        "data-align": M.value,
        style: { animation: v(S) ? void 0 : "none" }
      }), {
        default: q(() => [B(T.$slots, "default")]),
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
}), Ti = Mi, ki = /* @__PURE__ */ D({
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
    return (n, r) => (A(), L(v(Co), We(fn(t)), {
      default: q(() => [B(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Di = ki;
function Ri() {
  const e = O(!1);
  return qe(() => {
    Ke("keydown", () => {
      e.value = !0;
    }, {
      capture: !0,
      passive: !0
    }), Ke(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, {
      capture: !0,
      passive: !0
    });
  }), e;
}
const qi = vn(Ri), [Qe, Bi] = ge(["MenuRoot", "MenuSub"], "MenuContext"), [Ft, Ii] = ge("MenuRoot");
var Fi = /* @__PURE__ */ D({
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
    const n = e, r = t, { modal: o, dir: i } = Be(n), s = At(i), a = Et(n, "open", r), l = O(), d = qi();
    return Bi({
      open: a,
      onOpenChange: (c) => {
        a.value = c;
      },
      content: l,
      onContentChange: (c) => {
        l.value = c;
      }
    }), Ii({
      onClose: () => {
        a.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: s,
      modal: o
    }), (c, u) => (A(), L(v(xo), null, {
      default: q(() => [B(c.$slots, "default")]),
      _: 3
    }));
  }
}), $i = Fi;
const [Fn, Li] = ge("MenuContent");
var Ni = /* @__PURE__ */ D({
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
  }, { ...In }),
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
    const n = e, r = t, o = Qe(), i = Ft(), { trapFocus: s, disableOutsidePointerEvents: a, loop: l } = Be(n);
    Ar(), Pr(a.value);
    const d = O(""), c = O(0), u = O(0), f = O(null), p = O("right"), m = O(0), y = O(null), g = O(), { forwardRef: h, currentElement: b } = ee(), { handleTypeaheadSearch: x } = $r();
    z(b, (w) => {
      o.onContentChange(w);
    }), wt(() => {
      window.clearTimeout(c.value);
    });
    function S(w) {
      var k, T;
      return p.value === ((k = f.value) == null ? void 0 : k.side) && fo(w, (T = f.value) == null ? void 0 : T.area);
    }
    async function C(w) {
      var E;
      r("openAutoFocus", w), !w.defaultPrevented && (w.preventDefault(), (E = b.value) == null || E.focus({ preventScroll: !0 }));
    }
    function P(w) {
      var W;
      if (w.defaultPrevented) return;
      const k = w.target.closest("[data-reka-menu-content]") === w.currentTarget, T = w.ctrlKey || w.altKey || w.metaKey, V = w.key.length === 1, F = ur(w, Q(), b.value, {
        loop: l.value,
        arrowKeyOptions: "vertical",
        dir: i == null ? void 0 : i.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (F) return F == null ? void 0 : F.focus();
      if (w.code === "Space") return;
      const K = ((W = g.value) == null ? void 0 : W.getItems()) ?? [];
      if (k && (w.key === "Tab" && w.preventDefault(), !T && V && x(w.key, K)), w.target !== b.value || !ao.includes(w.key)) return;
      w.preventDefault();
      const j = [...K.map((N) => N.ref)];
      Cn.includes(w.key) && j.reverse(), uo(j);
    }
    function M(w) {
      var E, k;
      (k = (E = w == null ? void 0 : w.currentTarget) == null ? void 0 : E.contains) != null && k.call(E, w.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function R(w) {
      var T;
      if (!ct(w)) return;
      const E = w.target, k = m.value !== w.clientX;
      if ((T = w == null ? void 0 : w.currentTarget) != null && T.contains(E) && k) {
        const V = w.clientX > m.value ? "right" : "left";
        p.value = V, m.value = w.clientX;
      }
    }
    return Li({
      onItemEnter: (w) => !!S(w),
      onItemLeave: (w) => {
        var E;
        S(w) || ((E = b.value) == null || E.focus(), y.value = null);
      },
      onTriggerLeave: (w) => !!S(w),
      searchRef: d,
      pointerGraceTimerRef: u,
      onPointerGraceIntentChange: (w) => {
        f.value = w;
      }
    }), (w, E) => (A(), L(v(oo), {
      "as-child": "",
      trapped: v(s),
      onMountAutoFocus: C,
      onUnmountAutoFocus: E[7] || (E[7] = (k) => r("closeAutoFocus", k))
    }, {
      default: q(() => [G(v(Yr), {
        "as-child": "",
        "disable-outside-pointer-events": v(a),
        onEscapeKeyDown: E[2] || (E[2] = (k) => r("escapeKeyDown", k)),
        onPointerDownOutside: E[3] || (E[3] = (k) => r("pointerDownOutside", k)),
        onFocusOutside: E[4] || (E[4] = (k) => r("focusOutside", k)),
        onInteractOutside: E[5] || (E[5] = (k) => r("interactOutside", k)),
        onDismiss: E[6] || (E[6] = (k) => r("dismiss"))
      }, {
        default: q(() => [G(v(ho), {
          ref_key: "rovingFocusGroupRef",
          ref: g,
          "current-tab-stop-id": y.value,
          "onUpdate:currentTabStopId": E[0] || (E[0] = (k) => y.value = k),
          "as-child": "",
          orientation: "vertical",
          dir: v(i).dir.value,
          loop: v(l),
          onEntryFocus: E[1] || (E[1] = (k) => {
            r("entryFocus", k), v(i).isUsingKeyboardRef.value || k.preventDefault();
          })
        }, {
          default: q(() => [G(v(Ti), {
            ref: v(h),
            role: "menu",
            as: w.as,
            "as-child": w.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": v(lo)(v(o).open.value),
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
            onKeydown: P,
            onBlur: M,
            onPointermove: R
          }, {
            default: q(() => [B(w.$slots, "default")]),
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
}), $n = Ni, ji = /* @__PURE__ */ D({
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
    const t = e, n = Fn(), { forwardRef: r } = ee(), { CollectionItem: o } = _n(), i = O(!1);
    async function s(l) {
      if (!l.defaultPrevented && ct(l)) {
        if (t.disabled) n.onItemLeave(l);
        else if (!n.onItemEnter(l)) {
          const c = l.currentTarget;
          c == null || c.focus({ preventScroll: !0 });
        }
      }
    }
    async function a(l) {
      await X(), !l.defaultPrevented && ct(l) && n.onItemLeave(l);
    }
    return (l, d) => (A(), L(v(o), { value: { textValue: l.textValue } }, {
      default: q(() => [G(v(xe), ie({
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
          await X(), !(c.defaultPrevented || l.disabled) && (i.value = !0);
        }),
        onBlur: d[1] || (d[1] = async (c) => {
          await X(), !c.defaultPrevented && (i.value = !1);
        })
      }), {
        default: q(() => [B(l.$slots, "default")]),
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
}), Vi = ji, Wi = /* @__PURE__ */ D({
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
    const n = e, r = t, { forwardRef: o, currentElement: i } = ee(), s = Ft(), a = Fn(), l = O(!1);
    async function d() {
      const c = i.value;
      if (!n.disabled && c) {
        const u = new CustomEvent(io, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", u), await X(), u.defaultPrevented ? l.value = !1 : s.onClose();
      }
    }
    return (c, u) => (A(), L(Vi, ie(n, {
      ref: v(o),
      onClick: d,
      onPointerdown: u[0] || (u[0] = () => {
        l.value = !0;
      }),
      onPointerup: u[1] || (u[1] = async (f) => {
        var p;
        await X(), !f.defaultPrevented && (l.value || (p = f.currentTarget) == null || p.click());
      }),
      onKeydown: u[2] || (u[2] = async (f) => {
        const p = v(a).searchRef.value !== "";
        c.disabled || p && f.key === " " || v(ut).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: q(() => [B(c.$slots, "default")]),
      _: 3
    }, 16));
  }
}), zi = Wi, Ki = /* @__PURE__ */ D({
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
    const n = e, r = t, o = Ye(n, r), i = Qe(), { forwardRef: s, currentElement: a } = ee();
    return qr(a), (l, d) => (A(), L($n, ie(v(o), {
      ref: v(s),
      "trap-focus": v(i).open.value,
      "disable-outside-pointer-events": v(i).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => v(i).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = ze((c) => r("focusOutside", c), ["prevent"]))
    }), {
      default: q(() => [B(l.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Ui = Ki, Hi = /* @__PURE__ */ D({
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
    const o = Ye(e, t), i = Qe();
    return (s, a) => (A(), L($n, ie(v(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: a[0] || (a[0] = (l) => v(i).onOpenChange(!1))
    }), {
      default: q(() => [B(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Gi = Hi, Yi = /* @__PURE__ */ D({
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
    const o = Ye(e, t), i = Qe(), s = Ft();
    return (a, l) => (A(), L(v(Vr), { present: a.forceMount || v(i).open.value }, {
      default: q(() => [v(s).modal.value ? (A(), L(Ui, We(ie({ key: 0 }, {
        ...a.$attrs,
        ...v(o)
      })), {
        default: q(() => [B(a.$slots, "default")]),
        _: 3
      }, 16)) : (A(), L(Gi, We(ie({ key: 1 }, {
        ...a.$attrs,
        ...v(o)
      })), {
        default: q(() => [B(a.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), Xi = Yi;
const [Ln, Ji] = ge("DropdownMenuRoot");
var Zi = /* @__PURE__ */ D({
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
    ee();
    const o = Et(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = O(), { modal: s, dir: a } = Be(n), l = At(a);
    return Ji({
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
    }), (d, c) => (A(), L(v($i), {
      open: v(o),
      "onUpdate:open": c[0] || (c[0] = (u) => nn(o) ? o.value = u : null),
      dir: v(l),
      modal: v(s)
    }, {
      default: q(() => [B(d.$slots, "default", { open: v(o) })]),
      _: 3
    }, 8, [
      "open",
      "dir",
      "modal"
    ]));
  }
}), Qi = Zi, es = /* @__PURE__ */ D({
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
    const o = Ye(e, t);
    ee();
    const i = Ln(), s = O(!1);
    function a(l) {
      l.defaultPrevented || (s.value || setTimeout(() => {
        var d;
        (d = i.triggerElement.value) == null || d.focus();
      }, 0), s.value = !1, l.preventDefault());
    }
    return i.contentId || (i.contentId = wn(void 0, "reka-dropdown-menu-content")), (l, d) => {
      var c;
      return A(), L(v(Xi), ie(v(o), {
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
        default: q(() => [B(l.$slots, "default")]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), ts = es, ns = /* @__PURE__ */ D({
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
    return ee(), (i, s) => (A(), L(v(zi), We(fn({
      ...n,
      ...v(o)
    })), {
      default: q(() => [B(i.$slots, "default")]),
      _: 3
    }, 16));
  }
}), rs = ns, os = /* @__PURE__ */ D({
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
    const t = e, n = Ln(), { forwardRef: r, currentElement: o } = ee();
    return qe(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = wn(void 0, "reka-dropdown-menu-trigger")), (i, s) => (A(), L(v(Di), { "as-child": "" }, {
      default: q(() => [G(v(xe), {
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
          !i.disabled && a.button === 0 && a.ctrlKey === !1 && ((l = v(n)) == null || l.onOpenToggle(), await X(), v(n).open.value && a.preventDefault());
        }),
        onKeydown: s[1] || (s[1] = St((a) => {
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
        default: q(() => [B(i.$slots, "default")]),
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
}), is = os;
const ss = { class: "relative" }, as = { class: "flex items-center" }, ls = ["src", "alt"], us = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  class: "h-5 w-5 text-current"
}, cs = { class: "divide-y divide-gray-300" }, ds = ["src", "alt"], fs = { class: "relative flex-1" }, ps = ["maxlength"], ms = { key: 0 }, ys = {
  key: 0,
  class: "mb-2 mt-1 text-xs text-red-600"
}, vs = /* @__PURE__ */ D({
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
    ), l = O(n[0]), d = vt(), c = _(() => "required" in d), u = O(""), f = _(() => l.value.maxLength + 1), p = t;
    function m(S) {
      const C = S.replace(/[^0-9]/gi, "").slice(0, l.value.maxLength), P = C.startsWith("0") ? C.slice(1) : C;
      u.value = P.slice(0, l.value.maxLength), o.value = g.value, p("update:modelValue", g.value);
    }
    const y = _({
      get() {
        return u.value ? u.value.startsWith("0") ? u.value : `0${u.value}` : "";
      },
      set(S) {
        m(S);
      }
    }), g = _(() => u.value ? `${l.value.prefix}${u.value}` : ""), h = O(null), b = ve(), x = _(() => {
      var S, C;
      return ((C = (S = b == null ? void 0 : b.appContext) == null ? void 0 : S.components) == null ? void 0 : C.Icon) ?? null;
    });
    return z(
      () => o.value,
      (S) => {
        if (!S || typeof S != "string") return;
        const C = n.find((M) => S.startsWith(M.prefix));
        C && (l.value = C);
        const P = l.value.prefix;
        u.value = S.startsWith(P) ? S.slice(P.length).replace(/\D/g, "") : S.replace(/\D/g, ""), o.value = g.value;
      },
      { immediate: !0 }
    ), z(
      () => l.value,
      () => {
        u.value.length > l.value.maxLength && (u.value = u.value.slice(
          0,
          l.value.maxLength
        ), o.value = u.value), p("update:modelValue", g.value);
      }
    ), (S, C) => (A(), I("div", ss, [
      $("div", as, [
        G(v(Qi), null, {
          default: q(() => [
            G(v(is), { "as-child": "" }, {
              default: q(() => [
                $("button", {
                  type: "button",
                  class: U([
                    "flex h-10 w-28 items-center gap-1 rounded-l-md border border-r-0 px-4 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none",
                    v(a).valid === !1 && v(a).touched ? "border-red-500 text-red-500" : "border-gray-700 text-gray-900"
                  ])
                }, [
                  $("img", {
                    class: "h-5",
                    src: `https://flagsapi.com/${l.value.code}/flat/64.png`,
                    alt: l.value.code,
                    loading: "lazy"
                  }, null, 8, ls),
                  Ve(" " + be(l.value.prefix) + " ", 1),
                  x.value ? (A(), L(Jn(x.value), {
                    key: 0,
                    name: "mdi:chevron-down",
                    class: "h-5 w-5 text-current"
                  })) : (A(), I("svg", us, C[2] || (C[2] = [
                    $("path", {
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
            G(v(ts), {
              align: "start",
              side: "bottom",
              class: "z-10 mt-1 h-56 w-64 overflow-auto rounded border border-gray-300 bg-white shadow-lg outline-none"
            }, {
              default: q(() => [
                $("div", cs, [
                  (A(), I(ht, null, Zn(n, (P) => G(v(rs), {
                    key: P.code,
                    class: "flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 outline-none data-[highlighted]:bg-gray-100",
                    onSelect: (M) => l.value = P
                  }, {
                    default: q(() => [
                      $("img", {
                        class: "h-5",
                        src: `https://flagsapi.com/${P.code}/flat/64.png`,
                        alt: P.country,
                        loading: "lazy"
                      }, null, 8, ds),
                      $("span", null, be(P.country) + " (" + be(P.prefix) + ")", 1)
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
        $("div", fs, [
          tn($("input", {
            type: "tel",
            onBlur: C[0] || (C[0] = (P) => v(s)(P, !0)),
            "onUpdate:modelValue": C[1] || (C[1] = (P) => y.value = P),
            ref_key: "inputRef",
            ref: h,
            maxlength: f.value,
            class: U([
              "peer h-10 w-full rounded-r-md border bg-transparent px-3 py-2.5 font-sans text-sm font-normal transition-all placeholder-shown:border focus:border-2 focus:outline-0",
              v(a).valid === !1 && v(a).touched ? "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent "
            ]),
            placeholder: " "
          }, null, 42, ps), [
            [Qn, y.value]
          ]),
          e.label ? (A(), I("label", {
            key: 0,
            class: U([
              "before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight",
              v(a).valid === !1 && v(a).touched ? "text-red-500 before:border-red-500 after:border-red-500  peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-gray-700 before:border-gray-700 after:border-gray-700  peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
            ])
          }, [
            Ve(be(e.label) + " ", 1),
            c.value ? (A(), I("span", ms, "  *")) : Z("", !0)
          ], 2)) : Z("", !0)
        ])
      ]),
      v(a).touched && v(i) ? (A(), I("div", ys, be(v(i)), 1)) : Z("", !0)
    ]));
  }
}), gs = ["onKeydown", "aria-sort"], hs = {
  key: 0,
  class: "inline-block mr-1 h-3 w-3 border-2 border-t-transparent border-gray-400 rounded-full animate-spin",
  "aria-hidden": "true"
}, bs = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": ""
}, Nn = /* @__PURE__ */ D({
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
    const n = e, r = ve(), o = t, i = _(() => n.align === "center" ? "justify-center" : n.align === "right" ? "justify-end" : "justify-start"), s = _(() => {
      var u;
      const c = (u = r == null ? void 0 : r.vnode) == null ? void 0 : u.props;
      return !!(c && (c.onSort || c["on-sort"]));
    }), a = _(() => n.ariaSort === "ascending"), l = _(() => n.ariaSort === "descending");
    function d() {
      s.value && o("sort", n.columnKey || void 0);
    }
    return (c, u) => (A(), I("th", {
      class: U([
        "px-4 py-2 text-sm font-medium",
        e.className,
        {
          "text-blue-600": a.value || l.value,
          "text-gray-500": !(a.value || l.value),
          "opacity-60 pointer-events-none": n.loading,
          "cursor-pointer select-none": s.value
        }
      ]),
      style: xt(e.width ? { width: e.width } : void 0),
      onClick: d,
      onKeydown: St(ze(d, ["prevent"]), ["enter"]),
      role: "columnheader",
      "aria-sort": e.ariaSort || "none",
      tabindex: "0"
    }, [
      $("div", {
        class: U(["flex items-center gap-2", i.value])
      }, [
        B(c.$slots, "default"),
        s.value || n.loading ? (A(), I(ht, { key: 0 }, [
          n.loading ? (A(), I("span", hs)) : (A(), I("svg", bs, [
            $("path", {
              class: U(a.value ? "text-blue-600" : "text-gray-500"),
              d: "M7 10l5-5 5 5",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 2),
            $("path", {
              class: U(l.value ? "text-blue-600" : "text-gray-500"),
              d: "M7 14l5 5 5-5",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 2)
          ]))
        ], 64)) : Z("", !0)
      ], 2)
    ], 46, gs));
  }
}), ws = { key: 0 }, xs = ["checked"], Ss = /* @__PURE__ */ D({
  __name: "PMGTableHeaderSelect",
  setup(e) {
    const t = Re("pmgTable", null);
    function n(r) {
      const o = r.target.checked;
      t != null && t.selectAll && t.selectAll(o);
    }
    return (r, o) => {
      var i, s;
      return (i = v(t)) != null && i.selectable ? (A(), I("div", ws, [
        $("input", {
          type: "checkbox",
          checked: (s = v(t)) == null ? void 0 : s.allSelected,
          onChange: n,
          "aria-label": "Select all rows"
        }, null, 40, xs)
      ])) : Z("", !0);
    };
  }
}), Cs = /* @__PURE__ */ D({
  name: "PMGTableHeader",
  __name: "PMGTableHeader",
  setup(e) {
    const t = Re("pmgTable", null), n = vt(), r = _(() => {
      const o = [
        "border-b border-pmg-100",
        n.class ? n.class : "bg-pmg-50"
      ];
      return t && t.sticky && o.push("sticky w-full top-0"), o;
    });
    return (o, i) => {
      var s;
      return A(), I("thead", {
        class: U(r.value)
      }, [
        $("tr", null, [
          (s = v(t)) != null && s.selectable ? (A(), L(Nn, {
            key: 0,
            class: "w-16"
          }, {
            default: q(() => [
              G(Ss)
            ]),
            _: 1
          })) : Z("", !0),
          B(o.$slots, "default")
        ])
      ], 2);
    };
  }
}), _s = ["onKeydown"], Os = {
  key: 0,
  class: "px-4 py-2"
}, Ps = ["checked", "aria-label"], Es = /* @__PURE__ */ D({
  __name: "PMGTableRow",
  props: {
    className: { type: String, default: "" },
    item: { type: Object, default: null },
    rowKey: { type: String, default: "id" }
  },
  emits: ["row-click"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Re("pmgTable", null), i = _(
      () => n.item ? n.item[n.rowKey] : void 0
    );
    qe(() => {
      o && o.registerRow && i.value != null && o.registerRow(i.value);
    }), bt(() => {
      o && o.unregisterRow && i.value != null && o.unregisterRow(i.value);
    });
    const s = _(() => o && o.isRowSelected ? o.isRowSelected(i.value) : !1);
    function a() {
      !o || !i.value || o.toggleRowSelection && o.toggleRowSelection(i.value);
    }
    function l() {
      r("row-click", n.item);
    }
    return (d, c) => {
      var u;
      return A(), I("tr", {
        class: U(["border-b border-pmg-100", e.className]),
        onClick: l,
        role: "row",
        tabindex: "0",
        onKeydown: St(ze(l, ["prevent"]), ["enter"])
      }, [
        (u = v(o)) != null && u.selectable ? (A(), I("td", Os, [
          $("input", {
            type: "checkbox",
            checked: s.value,
            onChange: ze(a, ["stop", "prevent"]),
            "aria-label": `Select row ${i.value}`
          }, null, 40, Ps)
        ])) : Z("", !0),
        B(d.$slots, "default")
      ], 42, _s);
    };
  }
}), As = ["colspan"], Ms = /* @__PURE__ */ D({
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
    const t = e, n = _(() => t.align === "center" ? "justify-center" : t.align === "right" ? "justify-end" : "justify-start");
    return (r, o) => (A(), I("td", {
      class: U(["p-4 text-sm text-gray-700", e.className]),
      colspan: e.colspan
    }, [
      $("div", {
        class: U(["flex items-center", n.value])
      }, [
        B(r.$slots, "default")
      ], 2)
    ], 10, As));
  }
}), Ts = /* @__PURE__ */ D({
  __name: "PMGTableInfinite",
  props: {
    rootSelector: { type: String, default: "" },
    rootMargin: { type: String, default: "0px" },
    threshold: { type: [Number, Array], default: 0.1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["in-view"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = O(null);
    let i = null;
    function s(l) {
      let d = (l == null ? void 0 : l.parentElement) || null;
      for (; d && d !== document.documentElement; ) {
        const c = getComputedStyle(d), u = `${c.overflow}${c.overflowY}${c.overflowX}`;
        if (/auto|scroll/.test(u)) return d;
        d = d.parentElement;
      }
      return null;
    }
    function a() {
      if (i && i.disconnect(), n.disabled || typeof window > "u" || typeof IntersectionObserver > "u")
        return;
      let l = null;
      if (n.rootSelector)
        try {
          l = document.querySelector(n.rootSelector);
        } catch {
          l = null;
        }
      !l && o.value && (l = s(o.value) || null), i = new IntersectionObserver(
        (d) => {
          for (const c of d)
            c.isIntersecting && r("in-view");
        },
        {
          root: l || null,
          rootMargin: n.rootMargin,
          threshold: n.threshold
        }
      ), o.value && i.observe(o.value);
    }
    return qe(() => a()), bt(() => {
      i && (i.disconnect(), i = null);
    }), z(
      () => n.disabled,
      (l) => {
        l ? i && i.disconnect() : a();
      }
    ), (l, d) => (A(), I("div", null, [
      $("div", {
        ref_key: "sentinel",
        ref: o,
        class: "pmg-table-infinite-sentinel",
        "aria-hidden": "true"
      }, null, 512)
    ]));
  }
}), jn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ks = /* @__PURE__ */ jn(Ts, [["__scopeId", "data-v-6c984292"]]), Ds = {
  key: 0,
  class: "pmg-table-skeleton mt-3 px-2"
}, Rs = {
  key: 1,
  class: "pmg-table-empty p-4 text-center text-gray-500"
}, qs = /* @__PURE__ */ D({
  __name: "PMGTable",
  props: {
    striped: { type: Boolean, default: !1 },
    sticky: { type: Boolean, default: !1 },
    wrapperClass: { type: String, default: "" },
    tableClass: { type: String, default: "" },
    selectable: { type: Boolean, default: !1 },
    autoSelectColumn: { type: Boolean, default: !0 },
    rowKey: { type: String, default: "id" },
    infinite: {
      type: [Function, Object],
      default: void 0
    },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = er();
    _(() => (n.default ? n.default() : []).some((g) => {
      if (!g) return !1;
      const h = g.type;
      return typeof h == "string" ? h === "thead" : !!(h && (h.name === "PMGTableHeader" || h.__name === "PMGTableHeader"));
    }));
    const r = O(/* @__PURE__ */ new Set()), o = O(/* @__PURE__ */ new Set());
    function i(y) {
      y != null && r.value.add(y);
    }
    function s(y) {
      y != null && (r.value.delete(y), o.value.delete(y));
    }
    function a(y) {
      o.value.has(y) ? o.value.delete(y) : o.value.add(y);
    }
    function l(y) {
      return o.value.has(y);
    }
    const d = _(() => {
      const y = Array.from(r.value);
      return y.length > 0 && y.every((g) => o.value.has(g));
    }), c = _(() => r.value.size === 0);
    function u(y) {
      if (y)
        for (const g of r.value) o.value.add(g);
      else
        for (const g of Array.from(r.value))
          o.value.delete(g);
    }
    gt("pmgTable", {
      selectable: t.selectable,
      autoSelectColumn: t.autoSelectColumn,
      sticky: t.sticky,
      registerRow: i,
      unregisterRow: s,
      toggleRowSelection: a,
      isRowSelected: l,
      selectAll: u,
      allSelected: d
    });
    const f = O(!1);
    async function p() {
      try {
        if (!t.infinite) return;
        let y;
        if (typeof t.infinite == "function" ? y = t.infinite : typeof t.infinite == "object" && typeof t.infinite.handler == "function" && (y = t.infinite.handler), !y) return;
        const g = y();
        if (g && typeof g.then == "function") {
          f.value = !0;
          try {
            await g;
          } catch {
          } finally {
            f.value = !1;
          }
        }
      } catch {
      }
    }
    const m = _(() => t.loading || f.value ? !0 : t.infinite && typeof t.infinite == "object" ? !!t.infinite.loading : !1);
    return (y, g) => (A(), I("div", {
      class: U(["w-full", e.wrapperClass, { "overflow-auto": !t.sticky }])
    }, [
      $("table", {
        class: U(["min-w-full border-collapse bg-white", [e.tableClass, { striped: e.striped }]])
      }, [
        B(y.$slots, "default", {}, void 0, !0)
      ], 2),
      m.value ? (A(), I("div", Ds, g[0] || (g[0] = [
        $("div", { class: "animate-pulse space-y-2" }, [
          $("div", { class: "h-6 bg-pmg-50/50 rounded" })
        ], -1)
      ]))) : Z("", !0),
      c.value ? (A(), I("div", Rs, [
        B(y.$slots, "empty", {}, () => [
          g[1] || (g[1] = Ve("No items"))
        ], !0)
      ])) : Z("", !0),
      G(ks, { onInView: p })
    ], 2));
  }
}), Bs = /* @__PURE__ */ jn(qs, [["__scopeId", "data-v-cb8fb9a1"]]), Is = /* @__PURE__ */ D({
  __name: "PMGTableBody",
  setup(e) {
    return (t, n) => (A(), I("tbody", null, [
      B(t.$slots, "default")
    ]));
  }
}), Vs = {
  install(e) {
    e.component("PMGButton", nr), e.component("PMGInput", ar), e.component("PMGPhoneInput", vs), e.component("PMGTableHeader", Cs), e.component("PMGTableHeaderCell", Nn), e.component("PMGTableRow", Es), e.component("PMGTableCell", Ms), e.component("PMGTable", Bs), e.component("PMGTableBody", Is);
  }
};
export {
  nr as PMGButton,
  ar as PMGInput,
  vs as PMGPhoneInput,
  Bs as PMGTable,
  Is as PMGTableBody,
  Ms as PMGTableCell,
  Cs as PMGTableHeader,
  Nn as PMGTableHeaderCell,
  Es as PMGTableRow,
  Vs as default
};
