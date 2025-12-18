import * as Ie from "vue";
import { defineComponent as D, createElementBlock as I, openBlock as A, normalizeClass as K, renderSlot as B, useAttrs as vt, computed as O, ref as _, withDirectives as gt, createCommentVNode as ee, createElementVNode as $, mergeProps as ie, unref as y, isRef as nn, vModelDynamic as Vn, createTextVNode as Ve, toDisplayString as be, inject as Re, provide as ht, Fragment as bt, effectScope as rn, getCurrentScope as on, onScopeDispose as sn, onBeforeUnmount as wt, customRef as Wn, toValue as Y, shallowRef as an, watchEffect as se, readonly as zn, getCurrentInstance as ve, watch as U, nextTick as X, toHandlerKey as Kn, camelize as ln, toRef as Un, onUnmounted as xt, onMounted as qe, toRefs as Be, h as Pe, Comment as Hn, cloneVNode as Gn, reactive as un, createBlock as L, normalizeStyle as St, withCtx as q, markRaw as Yn, createVNode as G, watchPostEffect as cn, shallowReadonly as Ce, mergeDefaults as dn, normalizeProps as We, guardReactiveProps as fn, withModifiers as ze, withKeys as Ct, resolveDynamicComponent as Xn, renderList as Jn, vModelText as Zn, vShow as Qn, useSlots as er } from "vue";
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
      class: K([
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
    const t = e, n = vt(), r = O(() => "required" in n), o = _(null), { value: i, handleBlur: s, meta: a, errorMessage: l } = pn(
      () => t.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !0
      }
    );
    return (d, c) => (A(), I("div", rr, [
      gt($("input", ie({
        ref_key: "inputRef",
        ref: o,
        onBlur: c[0] || (c[0] = //@ts-ignore
        (...u) => y(s) && y(s)(...u)),
        "onUpdate:modelValue": c[1] || (c[1] = (u) => nn(i) ? i.value = u : null),
        type: e.type
      }, y(n), {
        class: ["peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all focus:border-2 focus:outline-0 disabled:opacity-50", [
          y(n).placeholder ? "" : "placeholder-shown:border",
          y(a).valid === !1 && y(a).touched ? y(n).placeholder ? "border-red-500 border-t-transparent text-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : y(n).placeholder ? "border-gray-700 border-t-transparent text-gray-700 focus:border-gray-700 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent"
        ]]
      }), null, 16, or), [
        [Vn, y(i)]
      ]),
      e.label ? (A(), I("label", {
        key: 0,
        class: K(["before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:opacity-50", [
          y(n).placeholder ? "text-[11px] leading-tight" : "peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]",
          y(a).valid === !1 && y(a).touched ? y(n).placeholder ? "text-red-500 before:border-red-500 after:border-red-500 peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-red-500 before:border-red-500 after:border-red-500 peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : y(n).placeholder ? "text-gray-700 before:border-gray-700 after:border-gray-700 peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700" : "text-gray-700 before:border-gray-700 after:border-gray-700 peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
        ]])
      }, [
        Ve(be(e.label) + " ", 1),
        r.value ? (A(), I("span", ir, "  *")) : ee("", !0)
      ], 2)) : ee("", !0),
      y(a).touched && y(a).valid === !1 && y(l) ? (A(), I("div", sr, be(y(l)), 1)) : ee("", !0)
    ]));
  }
});
function ge(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(s) => {
    const a = Re(r, s);
    if (a || a === null) return a;
    throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (s) => (ht(r, s), s)];
}
function Z() {
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
function Ot(e) {
  return e ? e.flatMap((t) => t.type === bt ? Ot(t.children) : [t]) : [];
}
const lr = ["INPUT", "TEXTAREA"];
function ur(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && lr.includes(t.nodeName)) return null;
  const { arrowKeyOptions: o = "both", attributeName: i = "[data-reka-collection-item]", itemsArray: s = [], loop: a = !0, dir: l = "ltr", preventScroll: d = !0, focus: c = !1 } = r, [u, m, f, p, v, h] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], g = f || p, b = u || m;
  if (!v && !h && (!g && !b || o === "vertical" && b || o === "horizontal" && g)) return null;
  const x = n ? Array.from(n.querySelectorAll(i)) : s;
  if (!x.length) return null;
  d && e.preventDefault();
  let S = null;
  return b || g ? S = yn(x, t, {
    goForward: g ? p : l === "ltr" ? u : m,
    loop: a
  }) : v ? S = x.at(0) || null : h && (S = x.at(-1) || null), c && (S == null || S.focus()), S;
}
function yn(e, t, n, r = e.length) {
  if (--r === 0) return null;
  const o = e.indexOf(t), i = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (i < 0 || i >= e.length)) return null;
  const s = (i + e.length) % e.length, a = e[s];
  return a ? a.hasAttribute("disabled") && a.getAttribute("disabled") !== "false" ? yn(e, a, n, r) : a : null;
}
const [_t, $s] = ge("ConfigProvider");
function cr(e, t) {
  var n;
  const r = an();
  return se(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), zn(r);
}
function Pt(e) {
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
  return (...i) => (t += 1, r || (r = rn(!0), n = r.run(() => e(...i))), Pt(o), n);
}
const he = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fr = (e) => typeof e < "u", pr = Object.prototype.toString, mr = (e) => pr.call(e) === "[object Object]", Lt = /* @__PURE__ */ yr();
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
  return Wn((n, r) => {
    let o = Y(e), i;
    const s = () => setTimeout(() => {
      o = Y(e), r();
    }, Y(t));
    return Pt(() => {
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
  vr() && wt(e, t);
}
function br(e, t, n) {
  return U(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Et = he ? window : void 0;
function Me(e) {
  var t;
  const n = Y(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Ke(...e) {
  const t = [], n = () => {
    t.forEach((a) => a()), t.length = 0;
  }, r = (a, l, d, c) => (a.addEventListener(l, d, c), () => a.removeEventListener(l, d, c)), o = O(() => {
    const a = et(Y(e[0])).filter((l) => l != null);
    return a.every((l) => typeof l != "string") ? a : void 0;
  }), i = br(
    () => {
      var a, l;
      return [
        (l = (a = o.value) == null ? void 0 : a.map((d) => Me(d))) != null ? l : [Et].filter((d) => d != null),
        et(Y(o.value ? e[1] : e[0])),
        et(y(o.value ? e[2] : e[1])),
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
          (m) => l.flatMap(
            (f) => d.map((p) => r(m, f, p, u))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    i(), n();
  };
  return Pt(n), s;
}
function wr(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function xr(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Et,
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
function At(e, t, n, r = {}) {
  var o, i, s;
  const {
    clone: a = !1,
    passive: l = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: u,
    shouldEmit: m
  } = r, f = ve(), p = n || (f == null ? void 0 : f.emit) || ((o = f == null ? void 0 : f.$emit) == null ? void 0 : o.bind(f)) || ((s = (i = f == null ? void 0 : f.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(f == null ? void 0 : f.proxy));
  let v = d;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const h = (x) => a ? typeof a == "function" ? a(x) : Sr(x) : x, g = () => fr(e[t]) ? h(e[t]) : u, b = (x) => {
    m ? m(x) && p(v, x) : p(v, x);
  };
  if (l) {
    const x = g(), S = _(x);
    let C = !1;
    return U(
      () => e[t],
      (P) => {
        C || (C = !0, S.value = h(P), X(() => C = !1));
      }
    ), U(
      S,
      (P) => {
        !C && (P !== e[t] || c) && b(P);
      },
      { deep: c }
    ), S;
  } else
    return O({
      get() {
        return g();
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
const Or = Cr(), _r = vn(() => {
  const e = _(/* @__PURE__ */ new Map()), t = _(), n = O(() => {
    for (const s of e.value.values()) if (s) return !0;
    return !1;
  }), r = _t({ scrollBody: _(!0) });
  let o = null;
  const i = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Lt && (o == null || o()), t.value = void 0;
  };
  return U(n, (s, a) => {
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
    }, c = (u = r.scrollBody) != null && u.value ? typeof r.scrollBody.value == "object" ? Or({
      padding: r.scrollBody.value.padding === !0 ? l : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? l : r.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    l > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), Lt && (o = Ke(document, "touchmove", (m) => Er(m), { passive: !1 })), X(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function Pr(e) {
  const t = Math.random().toString(36).substring(2, 7), n = _r();
  n.value.set(t, e ?? !1);
  const r = O({
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
function Mt(e) {
  const t = _t({ dir: _("ltr") });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function hn(e) {
  const t = ve(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((o) => {
    r[Kn(ln(o))] = (...i) => e(o, ...i);
  }), r;
}
let nt = 0;
function Ar() {
  se((e) => {
    if (!he) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? Nt()), document.body.insertAdjacentElement("beforeend", t[1] ?? Nt()), nt++, e(() => {
      nt === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), nt--;
    });
  });
}
function Nt() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Q() {
  const e = ve(), t = _(), n = O(() => {
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
  }, {}), r = Un(e);
  return O(() => {
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
  return O(() => ({
    ...n.value,
    ...r
  }));
}
var Tr = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Le = {}, rt = 0, bn = function(e) {
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
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(m) {
      if (a.has(m))
        c(m);
      else
        try {
          var f = m.getAttribute(r), p = f !== null && f !== "false", v = (Oe.get(m) || 0) + 1, h = (i.get(m) || 0) + 1;
          Oe.set(m, v), i.set(m, h), s.push(m), v === 1 && p && $e.set(m, !0), h === 1 && m.setAttribute(n, "true"), p || m.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", m, g);
        }
    });
  };
  return c(t), a.clear(), rt++, function() {
    s.forEach(function(u) {
      var m = Oe.get(u) - 1, f = i.get(u) - 1;
      Oe.set(u, m), i.set(u, f), m || ($e.has(u) || u.removeAttribute(r), $e.delete(u)), f || u.removeAttribute(n);
    }), rt--, rt || (Oe = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Le = {});
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
  U(() => Me(e), (n) => {
    n ? t = Rr(n) : t && t();
  }), xt(() => {
    t && t();
  });
}
let Br = 0;
function wn(e, t = "reka") {
  var r;
  if ("useId" in Ie) return `${t}-${(r = Ie.useId) == null ? void 0 : r.call(Ie)}`;
  const n = _t({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++Br}`;
}
function Fr(e) {
  const t = _(), n = O(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = O(() => {
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
function Ir(e, t) {
  const n = _(e);
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
        const s = Z(), a = i.map((m) => {
          var f, p;
          return {
            ...m,
            textValue: ((f = m.value) == null ? void 0 : f.textValue) ?? ((p = m.ref.textContent) == null ? void 0 : p.trim()) ?? ""
          };
        }), l = a.find((m) => m.ref === s), d = a.map((m) => m.textValue), c = Nr(d, t.value, l == null ? void 0 : l.textValue), u = a.find((m) => m.textValue === c);
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
  var h;
  const n = _({}), r = _("none"), o = _(e), i = e.value ? "mounted" : "unmounted";
  let s;
  const a = ((h = t.value) == null ? void 0 : h.ownerDocument.defaultView) ?? Et, { state: l, dispatch: d } = Ir(i, {
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
  U(e, async (g, b) => {
    var S;
    const x = b !== g;
    if (await X(), x) {
      const C = r.value, P = Ne(t.value);
      g ? (d("MOUNT"), c("enter"), P === "none" && c("after-enter")) : P === "none" || P === "undefined" || ((S = n.value) == null ? void 0 : S.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : b && C !== P ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const u = (g) => {
    const b = Ne(t.value), x = b.includes(g.animationName), S = l.value === "mounted" ? "enter" : "leave";
    if (g.target === t.value && x && (c(`after-${S}`), d("ANIMATION_END"), !o.value)) {
      const C = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = a == null ? void 0 : a.setTimeout(() => {
        var P;
        ((P = t.value) == null ? void 0 : P.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = C);
      });
    }
    g.target === t.value && b === "none" && d("ANIMATION_END");
  }, m = (g) => {
    g.target === t.value && (r.value = Ne(t.value));
  }, f = U(t, (g, b) => {
    g ? (n.value = getComputedStyle(g), g.addEventListener("animationstart", m), g.addEventListener("animationcancel", u), g.addEventListener("animationend", u)) : (d("ANIMATION_END"), s !== void 0 && (a == null || a.clearTimeout(s)), b == null || b.removeEventListener("animationstart", m), b == null || b.removeEventListener("animationcancel", u), b == null || b.removeEventListener("animationend", u));
  }, { immediate: !0 }), p = U(l, () => {
    const g = Ne(t.value);
    r.value = l.value === "mounted" ? g : "none";
  });
  return xt(() => {
    f(), p();
  }), { isPresent: O(() => ["mounted", "unmountSuspended"].includes(l.value)) };
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
    const { present: r, forceMount: o } = Be(e), i = _(), { isPresent: s } = jr(r, i);
    n({ present: s });
    let a = t.default({ present: s.value });
    a = Ot(a || []);
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
      const r = Ot(n.default()), o = r.findIndex((d) => d.type !== Hn);
      if (o === -1) return r;
      const i = r[o];
      (l = i.props) == null || delete l.ref;
      const s = i.props ? ie(t, i.props) : t, a = Gn({
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
function jt() {
  const e = _(), t = O(() => {
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
  const r = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = _(!1), i = _(() => {
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
          let f = function() {
            mn(zr, e, m);
          };
          const m = { originalEvent: c };
          c.pointerType === "touch" ? (r.removeEventListener("click", i.value), i.value = f, r.addEventListener("click", i.value, { once: !0 })) : f();
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
  const r = ((i = t == null ? void 0 : t.value) == null ? void 0 : i.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = _(!1);
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
    const n = e, r = t, { forwardRef: o, currentElement: i } = Q(), s = O(() => {
      var p;
      return ((p = i.value) == null ? void 0 : p.ownerDocument) ?? globalThis.document;
    }), a = O(() => ue.layersRoot), l = O(() => i.value ? Array.from(a.value).indexOf(i.value) : -1), d = O(() => ue.layersWithOutsidePointerEventsDisabled.size > 0), c = O(() => {
      const p = Array.from(a.value), [v] = [...ue.layersWithOutsidePointerEventsDisabled].slice(-1), h = p.indexOf(v);
      return l.value >= h;
    }), u = Ur(async (p) => {
      const v = [...ue.branches].some((h) => h == null ? void 0 : h.contains(p.target));
      !c.value || v || (r("pointerDownOutside", p), r("interactOutside", p), await X(), p.defaultPrevented || r("dismiss"));
    }, i), m = Hr((p) => {
      [...ue.branches].some((h) => h == null ? void 0 : h.contains(p.target)) || (r("focusOutside", p), r("interactOutside", p), p.defaultPrevented || r("dismiss"));
    }, i);
    xr("Escape", (p) => {
      l.value === a.value.size - 1 && (r("escapeKeyDown", p), p.defaultPrevented || r("dismiss"));
    });
    let f;
    return se((p) => {
      i.value && (n.disableOutsidePointerEvents && (ue.layersWithOutsidePointerEventsDisabled.size === 0 && (f = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), ue.layersWithOutsidePointerEventsDisabled.add(i.value)), a.value.add(i.value), p(() => {
        n.disableOutsidePointerEvents && ue.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = f);
      }));
    }), se((p) => {
      p(() => {
        i.value && (a.value.delete(i.value), ue.layersWithOutsidePointerEventsDisabled.delete(i.value));
      });
    }), (p, v) => (A(), L(y(xe), {
      ref: y(o),
      "as-child": p.asChild,
      as: p.as,
      "data-dismissable-layer": "",
      style: St({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: y(m).onFocusCapture,
      onBlurCapture: y(m).onBlurCapture,
      onPointerdownCapture: y(u).onPointerDownCapture
    }, {
      default: q(() => [B(p.$slots, "default")]),
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
const Xr = dr(() => _([]));
function Jr() {
  const e = Xr();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Vt(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Vt(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Vt(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Zr(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ot = "focusScope.autoFocusOnMount", it = "focusScope.autoFocusOnUnmount", Wt = {
  bubbles: !1,
  cancelable: !0
};
function Qr(e, { select: t = !1 } = {}) {
  const n = Z();
  for (const r of e)
    if (pe(r, { select: t }), Z() !== n) return !0;
}
function eo(e) {
  const t = Sn(e), n = zt(t, e), r = zt(t.reverse(), e);
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
function zt(e, t) {
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
    const n = Z();
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
    const n = e, r = t, { currentRef: o, currentElement: i } = Q(), s = _(null), a = Jr(), l = un({
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
      function m(h) {
        if (l.paused || !u) return;
        const g = h.target;
        u.contains(g) ? s.value = g : pe(s.value, { select: !0 });
      }
      function f(h) {
        if (l.paused || !u) return;
        const g = h.relatedTarget;
        g !== null && (u.contains(g) || pe(s.value, { select: !0 }));
      }
      function p(h) {
        u.contains(s.value) || pe(u);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", f);
      const v = new MutationObserver(p);
      u && v.observe(u, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", f), v.disconnect();
      });
    }), se(async (c) => {
      const u = i.value;
      if (await X(), !u) return;
      a.add(l);
      const m = Z();
      if (!u.contains(m)) {
        const p = new CustomEvent(ot, Wt);
        u.addEventListener(ot, (v) => r("mountAutoFocus", v)), u.dispatchEvent(p), p.defaultPrevented || (Qr(Zr(Sn(u)), { select: !0 }), Z() === m && pe(u));
      }
      c(() => {
        u.removeEventListener(ot, (h) => r("mountAutoFocus", h));
        const p = new CustomEvent(it, Wt), v = (h) => {
          r("unmountAutoFocus", h);
        };
        u.addEventListener(it, v), u.dispatchEvent(p), setTimeout(() => {
          p.defaultPrevented || pe(m ?? document.body, { select: !0 }), u.removeEventListener(it, v), a.remove(l);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || l.paused) return;
      const u = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = Z();
      if (u && m) {
        const f = c.currentTarget, [p, v] = eo(f);
        p && v ? !c.shiftKey && m === v ? (c.preventDefault(), n.loop && pe(p, { select: !0 })) : c.shiftKey && m === p && (c.preventDefault(), n.loop && pe(v, { select: !0 })) : m === f && c.preventDefault();
      }
    }
    return (c, u) => (A(), L(y(xe), {
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
  const t = Z();
  for (const n of e)
    if (n === t || (n.focus(), Z() !== t)) return;
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
const Kt = "data-reka-collection-item";
function On(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const c = _(/* @__PURE__ */ new Map());
    o = {
      collectionRef: _(),
      itemMap: c
    }, ht(r, o);
  } else o = Re(r);
  const i = (c = !1) => {
    const u = o.collectionRef.value;
    if (!u) return [];
    const m = Array.from(u.querySelectorAll(`[${Kt}]`)), p = Array.from(o.itemMap.value.values()).sort((v, h) => m.indexOf(v.ref) - m.indexOf(h.ref));
    return c ? p : p.filter((v) => v.ref.dataset.disabled !== "");
  }, s = D({
    name: "CollectionSlot",
    setup(c, { slots: u }) {
      const { primitiveElement: m, currentElement: f } = jt();
      return U(f, () => {
        o.collectionRef.value = f.value;
      }), () => Pe(lt, { ref: m }, u);
    }
  }), a = D({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: u, attrs: m }) {
      const { primitiveElement: f, currentElement: p } = jt();
      return se((v) => {
        if (p.value) {
          const h = Yn(p.value);
          o.itemMap.value.set(h, {
            ref: p.value,
            value: c.value
          }), v(() => o.itemMap.value.delete(h));
        }
      }), () => Pe(lt, {
        ...m,
        [Kt]: "",
        ref: f
      }, u);
    }
  }), l = O(() => Array.from(o.itemMap.value.values())), d = O(() => o.itemMap.value.size);
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
  const n = Z();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), Z() !== n)) return;
}
const [Ls, vo] = ge("RovingFocusGroup");
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
    const r = e, o = n, { loop: i, orientation: s, dir: a } = Be(r), l = Mt(a), d = At(r, "currentTabStopId", o, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), c = _(!1), u = _(!1), m = _(0), { getItems: f, CollectionSlot: p } = On({ isProvider: !0 });
    function v(g) {
      const b = !u.value;
      if (g.currentTarget && g.target === g.currentTarget && b && !c.value) {
        const x = new CustomEvent(po, mo);
        if (g.currentTarget.dispatchEvent(x), o("entryFocus", x), !x.defaultPrevented) {
          const S = f().map((R) => R.ref).filter((R) => R.dataset.disabled !== ""), C = S.find((R) => R.getAttribute("data-active") === ""), P = S.find((R) => R.id === d.value), M = [
            C,
            P,
            ...S
          ].filter(Boolean);
          yo(M, r.preventScrollOnEntryFocus);
        }
      }
      u.value = !1;
    }
    function h() {
      setTimeout(() => {
        u.value = !1;
      }, 1);
    }
    return t({ getItems: f }), vo({
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
        m.value++;
      },
      onFocusableItemRemove: () => {
        m.value--;
      }
    }), (g, b) => (A(), L(y(p), null, {
      default: q(() => [G(y(xe), {
        tabindex: c.value || m.value === 0 ? -1 : 0,
        "data-orientation": y(s),
        as: g.as,
        "as-child": g.asChild,
        dir: y(l),
        style: { outline: "none" },
        onMousedown: b[0] || (b[0] = (x) => u.value = !0),
        onMouseup: h,
        onFocus: v,
        onBlur: b[1] || (b[1] = (x) => c.value = !1)
      }, {
        default: q(() => [B(g.$slots, "default")]),
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
const [_n, bo] = ge("PopperRoot");
var wo = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = _();
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
    const t = e, { forwardRef: n, currentElement: r } = Q(), o = _n();
    return cn(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (i, s) => (A(), L(y(xe), {
      ref: y(n),
      as: i.as,
      "as-child": i.asChild
    }, {
      default: q(() => [B(i.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Co = So;
function Oo(e) {
  return e !== null;
}
function _o(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var h, g, b;
      const { placement: n, rects: r, middlewareData: o } = t, s = ((h = o.arrow) == null ? void 0 : h.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, c] = dt(n), u = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], m = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + a / 2, f = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
      let p = "", v = "";
      return d === "bottom" ? (p = s ? u : `${m}px`, v = `${-l}px`) : d === "top" ? (p = s ? u : `${m}px`, v = `${r.floating.height + l}px`) : d === "right" ? (p = `${-l}px`, v = s ? u : `${f}px`) : d === "left" && (p = `${r.floating.width + l}px`, v = s ? u : `${f}px`), { data: {
        x: p,
        y: v
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
function Tt(e) {
  return e === "x" ? "y" : "x";
}
function kt(e) {
  return e === "y" ? "height" : "width";
}
const Mo = /* @__PURE__ */ new Set(["top", "bottom"]);
function re(e) {
  return Mo.has(de(e)) ? "y" : "x";
}
function Dt(e) {
  return Tt(re(e));
}
function To(e, t, n) {
  n === void 0 && (n = !1);
  const r = Te(e), o = Dt(e), i = kt(o);
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
const Ut = ["left", "right"], Ht = ["right", "left"], Do = ["top", "bottom"], Ro = ["bottom", "top"];
function qo(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ht : Ut : t ? Ut : Ht;
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
function Fo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pn(e) {
  return typeof e != "number" ? Fo(e) : {
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
function Gt(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = re(t), s = Dt(t), a = kt(s), l = de(t), d = i === "y", c = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, m = r[a] / 2 - o[a] / 2;
  let f;
  switch (l) {
    case "top":
      f = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      f = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (Te(t)) {
    case "start":
      f[s] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      f[s] += m * (n && d ? -1 : 1);
      break;
  }
  return f;
}
const Io = async (e, t, n) => {
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
  } = Gt(d, r, l), m = r, f = {}, p = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: h,
      fn: g
    } = a[v], {
      x: b,
      y: x,
      data: S,
      reset: C
    } = await g({
      x: c,
      y: u,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: f,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = b ?? c, u = x ?? u, f = {
      ...f,
      [h]: {
        ...f[h],
        ...S
      }
    }, C && p <= 50 && (p++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: u
    } = Gt(d, m, l)), v = -1);
  }
  return {
    x: c,
    y: u,
    placement: m,
    strategy: o,
    middlewareData: f
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
    altBoundary: m = !1,
    padding: f = 0
  } = ce(t, e), p = Pn(f), h = a[m ? u === "floating" ? "reference" : "floating" : u], g = Ge(await i.getClippingRect({
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
  }, C = Ge(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (g.top - C.top + p.top) / S.y,
    bottom: (C.bottom - g.bottom + p.bottom) / S.y,
    left: (g.left - C.left + p.left) / S.x,
    right: (C.right - g.right + p.right) / S.x
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
    const u = Pn(c), m = {
      x: n,
      y: r
    }, f = Dt(o), p = kt(f), v = await s.getDimensions(d), h = f === "y", g = h ? "top" : "left", b = h ? "bottom" : "right", x = h ? "clientHeight" : "clientWidth", S = i.reference[p] + i.reference[f] - m[f] - i.floating[p], C = m[f] - i.reference[f], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let M = P ? P[x] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(P))) && (M = a.floating[x] || i.floating[p]);
    const R = S / 2 - C / 2, w = M / 2 - v[p] / 2 - 1, E = me(u[g], w), k = me(u[b], w), T = E, V = M - v[p] - k, F = M / 2 - v[p] / 2 + R, z = ft(T, F, V), j = !l.arrow && Te(o) != null && F !== z && i.reference[p] / 2 - (F < T ? E : k) - v[p] / 2 < 0, W = j ? F < T ? F - T : F - V : 0;
    return {
      [f]: m[f] + W,
      data: {
        [f]: z,
        centerOffset: F - z - W,
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
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: v = !0,
        ...h
      } = ce(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = de(o), b = re(a), x = de(a) === a, S = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = m || (x || !v ? [He(a)] : ko(a)), P = p !== "none";
      !m && P && C.push(...Bo(a, v, p, S));
      const M = [a, ...C], R = await ke(t, h), w = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && w.push(R[g]), u) {
        const F = To(o, s, S);
        w.push(R[F[0]], R[F[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: w
      }], !w.every((F) => F <= 0)) {
        var k, T;
        const F = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1, z = M[F];
        if (z && (!(u === "alignment" ? b !== re(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        E.every((N) => re(N.placement) === b ? N.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: E
            },
            reset: {
              placement: z
            }
          };
        let j = (T = E.filter((W) => W.overflows[0] <= 0).sort((W, N) => W.overflows[1] - N.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!j)
          switch (f) {
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
              }).map((N) => [N.placement, N.overflows.filter((fe) => fe > 0).reduce((fe, jn) => fe + jn, 0)]).sort((N, fe) => N[1] - fe[1])[0]) == null ? void 0 : V[0];
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
function Yt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Xt(e) {
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
          }), s = Yt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Xt(s)
            }
          };
        }
        case "escaped": {
          const i = await ke(t, {
            ...o,
            altBoundary: !0
          }), s = Yt(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Xt(s)
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
    mainAxis: m,
    crossAxis: f,
    alignmentAxis: p
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return a && typeof p == "number" && (f = a === "end" ? p * -1 : p), l ? {
    x: f * c,
    y: m * d
  } : {
    x: m * d,
    y: f * c
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
      } = ce(e, t), d = {
        x: n,
        y: r
      }, c = await ke(t, l), u = re(de(o)), m = Tt(u);
      let f = d[m], p = d[u];
      if (i) {
        const h = m === "y" ? "top" : "left", g = m === "y" ? "bottom" : "right", b = f + c[h], x = f - c[g];
        f = ft(b, f, x);
      }
      if (s) {
        const h = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", b = p + c[h], x = p - c[g];
        p = ft(b, p, x);
      }
      const v = a.fn({
        ...t,
        [m]: f,
        [u]: p
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [m]: i,
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
      }, u = re(o), m = Tt(u);
      let f = c[m], p = c[u];
      const v = ce(a, t), h = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const x = m === "y" ? "height" : "width", S = i.reference[m] - i.floating[x] + h.mainAxis, C = i.reference[m] + i.reference[x] - h.mainAxis;
        f < S ? f = S : f > C && (f = C);
      }
      if (d) {
        var g, b;
        const x = m === "y" ? "width" : "height", S = En.has(de(o)), C = i.reference[u] - i.floating[x] + (S && ((g = s.offset) == null ? void 0 : g[u]) || 0) + (S ? 0 : h.crossAxis), P = i.reference[u] + i.reference[x] + (S ? 0 : ((b = s.offset) == null ? void 0 : b[u]) || 0) - (S ? h.crossAxis : 0);
        p < C ? p = C : p > P && (p = P);
      }
      return {
        [m]: f,
        [u]: p
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
      } = ce(e, t), c = await ke(t, d), u = de(o), m = Te(o), f = re(o) === "y", {
        width: p,
        height: v
      } = i.floating;
      let h, g;
      u === "top" || u === "bottom" ? (h = u, g = m === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = u, h = m === "end" ? "top" : "bottom");
      const b = v - c.top - c.bottom, x = p - c.left - c.right, S = me(v - c[h], b), C = me(p - c[g], x), P = !t.middlewareData.shift;
      let M = S, R = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = x), (r = t.middlewareData.shift) != null && r.enabled.y && (M = b), P && !m) {
        const E = H(c.left, 0), k = H(c.right, 0), T = H(c.top, 0), V = H(c.bottom, 0);
        f ? R = p - 2 * (E !== 0 || k !== 0 ? E + k : H(c.left, c.right)) : M = v - 2 * (T !== 0 || V !== 0 ? T + V : H(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: R,
        availableHeight: M
      });
      const w = await s.getDimensions(a.floating);
      return p !== w.width || v !== w.height ? {
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
  return Rt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function J(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function le(e) {
  var t;
  return (t = (Rt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Rt(e) {
  return Xe() ? e instanceof Node || e instanceof J(e).Node : !1;
}
function te(e) {
  return Xe() ? e instanceof Element || e instanceof J(e).Element : !1;
}
function ae(e) {
  return Xe() ? e instanceof HTMLElement || e instanceof J(e).HTMLElement : !1;
}
function Jt(e) {
  return !Xe() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof J(e).ShadowRoot;
}
const Uo = /* @__PURE__ */ new Set(["inline", "contents"]);
function Fe(e) {
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
function qt(e) {
  const t = Bt(), n = te(e) ? ne(e) : e;
  return Xo.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Jo.some((r) => (n.willChange || "").includes(r)) || Zo.some((r) => (n.contain || "").includes(r));
}
function Qo(e) {
  let t = ye(e);
  for (; ae(t) && !Ae(t); ) {
    if (qt(t))
      return t;
    if (Je(t))
      return null;
    t = ye(t);
  }
  return null;
}
function Bt() {
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
    Jt(e) && e.host || // Fallback.
    le(e)
  );
  return Jt(t) ? t.host : t;
}
function An(e) {
  const t = ye(e);
  return Ae(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ae(t) && Fe(t) ? t : An(t);
}
function De(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = An(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = J(o);
  if (i) {
    const a = mt(s);
    return t.concat(s, s.visualViewport || [], Fe(o) ? o : [], a && n ? De(a) : []);
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
function Ft(e) {
  return te(e) ? e : e.contextElement;
}
function Ee(e) {
  const t = Ft(e);
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
  return !Bt() || !t.visualViewport ? ti : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ni(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== J(e) ? !1 : t;
}
function we(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ft(e);
  let s = oe(1);
  t && (r ? te(r) && (s = Ee(r)) : s = Ee(e));
  const a = ni(i, n, r) ? Tn(i) : oe(0);
  let l = (o.left + a.x) / s.x, d = (o.top + a.y) / s.y, c = o.width / s.x, u = o.height / s.y;
  if (i) {
    const m = J(i), f = r && te(r) ? J(r) : r;
    let p = m, v = mt(p);
    for (; v && r && f !== p; ) {
      const h = Ee(v), g = v.getBoundingClientRect(), b = ne(v), x = g.left + (v.clientLeft + parseFloat(b.paddingLeft)) * h.x, S = g.top + (v.clientTop + parseFloat(b.paddingTop)) * h.y;
      l *= h.x, d *= h.y, c *= h.x, u *= h.y, l += x, d += S, p = J(v), v = mt(p);
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
  if ((u || !u && !i) && ((Se(r) !== "body" || Fe(s)) && (l = Ze(r)), ae(r))) {
    const f = we(r);
    d = Ee(r), c.x = f.x + r.clientLeft, c.y = f.y + r.clientTop;
  }
  const m = s && !u && !i ? kn(s, l, !0) : oe(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + c.x + m.x,
    y: n.y * d.y - l.scrollTop * d.y + c.y + m.y
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
    const d = Bt();
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
function Zt(e, t, n) {
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
    const a = ne(s), l = qt(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ai.has(o.position) || Fe(s) && !l && Dn(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = ye(s);
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
    const u = Zt(t, c, o);
    return d.top = H(u.top, d.top), d.right = me(u.right, d.right), d.bottom = me(u.bottom, d.bottom), d.left = H(u.left, d.left), d;
  }, Zt(t, a, o));
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
    if ((Se(t) !== "body" || Fe(o)) && (a = Ze(t)), r) {
      const f = we(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && d();
  i && !r && o && d();
  const c = o && !r && !i ? kn(o, a) : oe(0), u = s.left + a.scrollLeft - l.x - c.x, m = s.top + a.scrollTop - l.y - c.y;
  return {
    x: u,
    y: m,
    width: s.width,
    height: s.height
  };
}
function st(e) {
  return ne(e).position === "static";
}
function Qt(e, t) {
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
  let r = Qt(e, t);
  for (; r && Go(r) && st(r); )
    r = Qt(r, t);
  return r && Ae(r) && st(r) && !qt(r) ? n : r || Qo(e) || n;
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
      width: m,
      height: f
    } = d;
    if (a || t(), !m || !f)
      return;
    const p = je(u), v = je(o.clientWidth - (c + m)), h = je(o.clientHeight - (u + f)), g = je(c), x = {
      rootMargin: -p + "px " + -v + "px " + -h + "px " + -g + "px",
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
  } = r, d = Ft(e), c = o || i ? [...d ? De(d) : [], ...De(t)] : [];
  c.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  const u = d && a ? vi(d, n) : null;
  let m = -1, f = null;
  s && (f = new ResizeObserver((g) => {
    let [b] = g;
    b && b.target === d && f && (f.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = f) == null || x.observe(t);
    })), n();
  }), d && !l && f.observe(d), f.observe(t));
  let p, v = l ? we(e) : null;
  l && h();
  function h() {
    const g = we(e);
    v && !qn(v, g) && n(), v = g, p = requestAnimationFrame(h);
  }
  return n(), () => {
    var g;
    c.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), u == null || u(), (g = f) == null || g.disconnect(), f = null, l && cancelAnimationFrame(p);
  };
}
const hi = Vo, bi = Wo, en = Lo, wi = Ko, xi = No, Si = $o, Ci = zo, Oi = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: yi,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Io(e, t, {
    ...o,
    platform: i
  });
};
function _i(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function yt(e) {
  if (_i(e)) {
    const t = e.$el;
    return Rt(t) && Se(t) === "#comment" ? null : t;
  }
  return e;
}
function _e(e) {
  return typeof e == "function" ? e() : y(e);
}
function Pi(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = yt(_e(e.element));
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
function tn(e, t) {
  const n = Bn(e);
  return Math.round(t * n) / n;
}
function Ei(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = O(() => {
    var M;
    return (M = _e(n.open)) != null ? M : !0;
  }), i = O(() => _e(n.middleware)), s = O(() => {
    var M;
    return (M = _e(n.placement)) != null ? M : "bottom";
  }), a = O(() => {
    var M;
    return (M = _e(n.strategy)) != null ? M : "absolute";
  }), l = O(() => {
    var M;
    return (M = _e(n.transform)) != null ? M : !0;
  }), d = O(() => yt(e.value)), c = O(() => yt(t.value)), u = _(0), m = _(0), f = _(a.value), p = _(s.value), v = an({}), h = _(!1), g = O(() => {
    const M = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return M;
    const R = tn(c.value, u.value), w = tn(c.value, m.value);
    return l.value ? {
      ...M,
      transform: "translate(" + R + "px, " + w + "px)",
      ...Bn(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: R + "px",
      top: w + "px"
    };
  });
  let b;
  function x() {
    if (d.value == null || c.value == null)
      return;
    const M = o.value;
    Oi(d.value, c.value, {
      middleware: i.value,
      placement: s.value,
      strategy: a.value
    }).then((R) => {
      u.value = R.x, m.value = R.y, f.value = R.strategy, p.value = R.placement, v.value = R.middlewareData, h.value = M !== !1;
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
    o.value || (h.value = !1);
  }
  return U([i, s, a, o], x, {
    flush: "sync"
  }), U([d, c], C, {
    flush: "sync"
  }), U(o, P, {
    flush: "sync"
  }), on() && sn(S), {
    x: Ce(u),
    y: Ce(m),
    strategy: Ce(f),
    placement: Ce(p),
    middlewareData: Ce(v),
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
}, [Ns, Ai] = ge("PopperContent");
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
  }, { ...Fn }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = _n(), { forwardRef: i, currentElement: s } = Q(), a = _(), l = _(), { width: d, height: c } = Fr(l), u = O(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), m = O(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), f = O(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), p = O(() => ({
      padding: m.value,
      boundary: f.value.filter(Oo),
      altBoundary: f.value.length > 0
    })), v = O(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), h = cr(() => [
      hi({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && en({
        ...p.value,
        ...v.value
      }),
      n.avoidCollisions && bi({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Ci() : void 0,
        ...p.value
      }),
      !n.prioritizePosition && n.avoidCollisions && en({
        ...p.value,
        ...v.value
      }),
      wi({
        ...p.value,
        apply: ({ elements: T, rects: V, availableWidth: F, availableHeight: z }) => {
          const { width: j, height: W } = V.reference, N = T.floating.style;
          N.setProperty("--reka-popper-available-width", `${F}px`), N.setProperty("--reka-popper-available-height", `${z}px`), N.setProperty("--reka-popper-anchor-width", `${j}px`), N.setProperty("--reka-popper-anchor-height", `${W}px`);
        }
      }),
      l.value && Pi({
        element: l.value,
        padding: n.arrowPadding
      }),
      _o({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && xi({
        strategy: "referenceHidden",
        ...p.value
      })
    ]), g = O(() => n.reference ?? o.anchor.value), { floatingStyles: b, placement: x, isPositioned: S, middlewareData: C } = Ei(g, a, {
      strategy: n.positionStrategy,
      placement: u,
      whileElementsMounted: (...T) => gi(...T, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: h
    }), P = O(() => dt(x.value)[0]), M = O(() => dt(x.value)[1]);
    cn(() => {
      S.value && r("placed");
    });
    const R = O(() => {
      var T;
      return ((T = C.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
    }), w = _("");
    se(() => {
      s.value && (w.value = window.getComputedStyle(s.value).zIndex);
    });
    const E = O(() => {
      var T;
      return ((T = C.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), k = O(() => {
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
      var F, z, j;
      return A(), I("div", {
        ref_key: "floatingRef",
        ref: a,
        "data-reka-popper-content-wrapper": "",
        style: St({
          ...y(b),
          transform: y(S) ? y(b).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: w.value,
          "--reka-popper-transform-origin": [(F = y(C).transformOrigin) == null ? void 0 : F.x, (z = y(C).transformOrigin) == null ? void 0 : z.y].join(" "),
          ...((j = y(C).hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [G(y(xe), ie({ ref: y(i) }, T.$attrs, {
        "as-child": n.asChild,
        as: T.as,
        "data-side": P.value,
        "data-align": M.value,
        style: { animation: y(S) ? void 0 : "none" }
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
    return (n, r) => (A(), L(y(Co), We(fn(t)), {
      default: q(() => [B(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Di = ki;
function Ri() {
  const e = _(!1);
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
const qi = vn(Ri), [Qe, Bi] = ge(["MenuRoot", "MenuSub"], "MenuContext"), [$t, Fi] = ge("MenuRoot");
var Ii = /* @__PURE__ */ D({
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
    const n = e, r = t, { modal: o, dir: i } = Be(n), s = Mt(i), a = At(n, "open", r), l = _(), d = qi();
    return Bi({
      open: a,
      onOpenChange: (c) => {
        a.value = c;
      },
      content: l,
      onContentChange: (c) => {
        l.value = c;
      }
    }), Fi({
      onClose: () => {
        a.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: s,
      modal: o
    }), (c, u) => (A(), L(y(xo), null, {
      default: q(() => [B(c.$slots, "default")]),
      _: 3
    }));
  }
}), $i = Ii;
const [In, Li] = ge("MenuContent");
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
    const n = e, r = t, o = Qe(), i = $t(), { trapFocus: s, disableOutsidePointerEvents: a, loop: l } = Be(n);
    Ar(), Pr(a.value);
    const d = _(""), c = _(0), u = _(0), m = _(null), f = _("right"), p = _(0), v = _(null), h = _(), { forwardRef: g, currentElement: b } = Q(), { handleTypeaheadSearch: x } = $r();
    U(b, (w) => {
      o.onContentChange(w);
    }), xt(() => {
      window.clearTimeout(c.value);
    });
    function S(w) {
      var k, T;
      return f.value === ((k = m.value) == null ? void 0 : k.side) && fo(w, (T = m.value) == null ? void 0 : T.area);
    }
    async function C(w) {
      var E;
      r("openAutoFocus", w), !w.defaultPrevented && (w.preventDefault(), (E = b.value) == null || E.focus({ preventScroll: !0 }));
    }
    function P(w) {
      var W;
      if (w.defaultPrevented) return;
      const k = w.target.closest("[data-reka-menu-content]") === w.currentTarget, T = w.ctrlKey || w.altKey || w.metaKey, V = w.key.length === 1, F = ur(w, Z(), b.value, {
        loop: l.value,
        arrowKeyOptions: "vertical",
        dir: i == null ? void 0 : i.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (F) return F == null ? void 0 : F.focus();
      if (w.code === "Space") return;
      const z = ((W = h.value) == null ? void 0 : W.getItems()) ?? [];
      if (k && (w.key === "Tab" && w.preventDefault(), !T && V && x(w.key, z)), w.target !== b.value || !ao.includes(w.key)) return;
      w.preventDefault();
      const j = [...z.map((N) => N.ref)];
      Cn.includes(w.key) && j.reverse(), uo(j);
    }
    function M(w) {
      var E, k;
      (k = (E = w == null ? void 0 : w.currentTarget) == null ? void 0 : E.contains) != null && k.call(E, w.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function R(w) {
      var T;
      if (!ct(w)) return;
      const E = w.target, k = p.value !== w.clientX;
      if ((T = w == null ? void 0 : w.currentTarget) != null && T.contains(E) && k) {
        const V = w.clientX > p.value ? "right" : "left";
        f.value = V, p.value = w.clientX;
      }
    }
    return Li({
      onItemEnter: (w) => !!S(w),
      onItemLeave: (w) => {
        var E;
        S(w) || ((E = b.value) == null || E.focus(), v.value = null);
      },
      onTriggerLeave: (w) => !!S(w),
      searchRef: d,
      pointerGraceTimerRef: u,
      onPointerGraceIntentChange: (w) => {
        m.value = w;
      }
    }), (w, E) => (A(), L(y(oo), {
      "as-child": "",
      trapped: y(s),
      onMountAutoFocus: C,
      onUnmountAutoFocus: E[7] || (E[7] = (k) => r("closeAutoFocus", k))
    }, {
      default: q(() => [G(y(Yr), {
        "as-child": "",
        "disable-outside-pointer-events": y(a),
        onEscapeKeyDown: E[2] || (E[2] = (k) => r("escapeKeyDown", k)),
        onPointerDownOutside: E[3] || (E[3] = (k) => r("pointerDownOutside", k)),
        onFocusOutside: E[4] || (E[4] = (k) => r("focusOutside", k)),
        onInteractOutside: E[5] || (E[5] = (k) => r("interactOutside", k)),
        onDismiss: E[6] || (E[6] = (k) => r("dismiss"))
      }, {
        default: q(() => [G(y(ho), {
          ref_key: "rovingFocusGroupRef",
          ref: h,
          "current-tab-stop-id": v.value,
          "onUpdate:currentTabStopId": E[0] || (E[0] = (k) => v.value = k),
          "as-child": "",
          orientation: "vertical",
          dir: y(i).dir.value,
          loop: y(l),
          onEntryFocus: E[1] || (E[1] = (k) => {
            r("entryFocus", k), y(i).isUsingKeyboardRef.value || k.preventDefault();
          })
        }, {
          default: q(() => [G(y(Ti), {
            ref: y(g),
            role: "menu",
            as: w.as,
            "as-child": w.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": y(lo)(y(o).open.value),
            dir: y(i).dir.value,
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
    const t = e, n = In(), { forwardRef: r } = Q(), { CollectionItem: o } = On(), i = _(!1);
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
    return (l, d) => (A(), L(y(o), { value: { textValue: l.textValue } }, {
      default: q(() => [G(y(xe), ie({
        ref: y(r),
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
    const n = e, r = t, { forwardRef: o, currentElement: i } = Q(), s = $t(), a = In(), l = _(!1);
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
      ref: y(o),
      onClick: d,
      onPointerdown: u[0] || (u[0] = () => {
        l.value = !0;
      }),
      onPointerup: u[1] || (u[1] = async (m) => {
        var f;
        await X(), !m.defaultPrevented && (l.value || (f = m.currentTarget) == null || f.click());
      }),
      onKeydown: u[2] || (u[2] = async (m) => {
        const f = y(a).searchRef.value !== "";
        c.disabled || f && m.key === " " || y(ut).includes(m.key) && (m.currentTarget.click(), m.preventDefault());
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
    const n = e, r = t, o = Ye(n, r), i = Qe(), { forwardRef: s, currentElement: a } = Q();
    return qr(a), (l, d) => (A(), L($n, ie(y(o), {
      ref: y(s),
      "trap-focus": y(i).open.value,
      "disable-outside-pointer-events": y(i).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => y(i).onOpenChange(!1)),
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
    return (s, a) => (A(), L($n, ie(y(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: a[0] || (a[0] = (l) => y(i).onOpenChange(!1))
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
    const o = Ye(e, t), i = Qe(), s = $t();
    return (a, l) => (A(), L(y(Vr), { present: a.forceMount || y(i).open.value }, {
      default: q(() => [y(s).modal.value ? (A(), L(Ui, We(ie({ key: 0 }, {
        ...a.$attrs,
        ...y(o)
      })), {
        default: q(() => [B(a.$slots, "default")]),
        _: 3
      }, 16)) : (A(), L(Gi, We(ie({ key: 1 }, {
        ...a.$attrs,
        ...y(o)
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
    Q();
    const o = At(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = _(), { modal: s, dir: a } = Be(n), l = Mt(a);
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
    }), (d, c) => (A(), L(y($i), {
      open: y(o),
      "onUpdate:open": c[0] || (c[0] = (u) => nn(o) ? o.value = u : null),
      dir: y(l),
      modal: y(s)
    }, {
      default: q(() => [B(d.$slots, "default", { open: y(o) })]),
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
    Q();
    const i = Ln(), s = _(!1);
    function a(l) {
      l.defaultPrevented || (s.value || setTimeout(() => {
        var d;
        (d = i.triggerElement.value) == null || d.focus();
      }, 0), s.value = !1, l.preventDefault());
    }
    return i.contentId || (i.contentId = wn(void 0, "reka-dropdown-menu-content")), (l, d) => {
      var c;
      return A(), L(y(Xi), ie(y(o), {
        id: y(i).contentId,
        "aria-labelledby": (c = y(i)) == null ? void 0 : c.triggerId,
        style: {
          "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
          "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
          "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
        },
        onCloseAutoFocus: a,
        onInteractOutside: d[0] || (d[0] = (u) => {
          var v;
          if (u.defaultPrevented) return;
          const m = u.detail.originalEvent, f = m.button === 0 && m.ctrlKey === !0, p = m.button === 2 || f;
          (!y(i).modal.value || p) && (s.value = !0), (v = y(i).triggerElement.value) != null && v.contains(u.target) && u.preventDefault();
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
    return Q(), (i, s) => (A(), L(y(zi), We(fn({
      ...n,
      ...y(o)
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
    const t = e, n = Ln(), { forwardRef: r, currentElement: o } = Q();
    return qe(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = wn(void 0, "reka-dropdown-menu-trigger")), (i, s) => (A(), L(y(Di), { "as-child": "" }, {
      default: q(() => [G(y(xe), {
        id: y(n).triggerId,
        ref: y(r),
        type: i.as === "button" ? "button" : void 0,
        "as-child": t.asChild,
        as: i.as,
        "aria-haspopup": "menu",
        "aria-expanded": y(n).open.value,
        "aria-controls": y(n).open.value ? y(n).contentId : void 0,
        "data-disabled": i.disabled ? "" : void 0,
        disabled: i.disabled,
        "data-state": y(n).open.value ? "open" : "closed",
        onClick: s[0] || (s[0] = async (a) => {
          var l;
          !i.disabled && a.button === 0 && a.ctrlKey === !1 && ((l = y(n)) == null || l.onOpenToggle(), await X(), y(n).open.value && a.preventDefault());
        }),
        onKeydown: s[1] || (s[1] = Ct((a) => {
          i.disabled || (["Enter", " "].includes(a.key) && y(n).onOpenToggle(), a.key === "ArrowDown" && y(n).onOpenChange(!0), [
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
    ), l = _(n[0]), d = vt(), c = O(() => "required" in d), u = _(""), m = O(() => l.value.maxLength + 1), f = t;
    function p(S) {
      const C = S.replace(/[^0-9]/gi, "").slice(0, l.value.maxLength), P = C.startsWith("0") ? C.slice(1) : C;
      u.value = P.slice(0, l.value.maxLength), o.value = h.value, f("update:modelValue", h.value);
    }
    const v = O({
      get() {
        return u.value ? u.value.startsWith("0") ? u.value : `0${u.value}` : "";
      },
      set(S) {
        p(S);
      }
    }), h = O(() => u.value ? `${l.value.prefix}${u.value}` : ""), g = _(null), b = ve(), x = O(() => {
      var S, C;
      return ((C = (S = b == null ? void 0 : b.appContext) == null ? void 0 : S.components) == null ? void 0 : C.Icon) ?? null;
    });
    return U(
      () => o.value,
      (S) => {
        if (!S || typeof S != "string") return;
        const C = n.find((M) => S.startsWith(M.prefix));
        C && (l.value = C);
        const P = l.value.prefix;
        u.value = S.startsWith(P) ? S.slice(P.length).replace(/\D/g, "") : S.replace(/\D/g, ""), o.value = h.value;
      },
      { immediate: !0 }
    ), U(
      () => l.value,
      () => {
        u.value.length > l.value.maxLength && (u.value = u.value.slice(
          0,
          l.value.maxLength
        ), o.value = u.value), f("update:modelValue", h.value);
      }
    ), (S, C) => (A(), I("div", ss, [
      $("div", as, [
        G(y(Qi), null, {
          default: q(() => [
            G(y(is), { "as-child": "" }, {
              default: q(() => [
                $("button", {
                  type: "button",
                  class: K([
                    "flex h-10 w-28 items-center gap-1 rounded-l-md border border-r-0 px-4 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none",
                    y(a).valid === !1 && y(a).touched ? "border-red-500 text-red-500" : "border-gray-700 text-gray-900"
                  ])
                }, [
                  $("img", {
                    class: "h-5",
                    src: `https://flagsapi.com/${l.value.code}/flat/64.png`,
                    alt: l.value.code,
                    loading: "lazy"
                  }, null, 8, ls),
                  Ve(" " + be(l.value.prefix) + " ", 1),
                  x.value ? (A(), L(Xn(x.value), {
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
            G(y(ts), {
              align: "start",
              side: "bottom",
              class: "z-10 mt-1 h-56 w-64 overflow-auto rounded border border-gray-300 bg-white shadow-lg outline-none"
            }, {
              default: q(() => [
                $("div", cs, [
                  (A(), I(bt, null, Jn(n, (P) => G(y(rs), {
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
          gt($("input", {
            type: "tel",
            onBlur: C[0] || (C[0] = (P) => y(s)(P, !0)),
            "onUpdate:modelValue": C[1] || (C[1] = (P) => v.value = P),
            ref_key: "inputRef",
            ref: g,
            maxlength: m.value,
            class: K([
              "peer h-10 w-full rounded-r-md border bg-transparent px-3 py-2.5 font-sans text-sm font-normal transition-all placeholder-shown:border focus:border-2 focus:outline-0",
              y(a).valid === !1 && y(a).touched ? "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent "
            ]),
            placeholder: " "
          }, null, 42, ps), [
            [Zn, v.value]
          ]),
          e.label ? (A(), I("label", {
            key: 0,
            class: K([
              "before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight",
              y(a).valid === !1 && y(a).touched ? "text-red-500 before:border-red-500 after:border-red-500  peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-gray-700 before:border-gray-700 after:border-gray-700  peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
            ])
          }, [
            Ve(be(e.label) + " ", 1),
            c.value ? (A(), I("span", ms, "  *")) : ee("", !0)
          ], 2)) : ee("", !0)
        ])
      ]),
      y(a).touched && y(i) ? (A(), I("div", ys, be(y(i)), 1)) : ee("", !0)
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
    const n = e, r = ve(), o = t, i = O(() => n.align === "center" ? "justify-center" : n.align === "right" ? "justify-end" : "justify-start"), s = O(() => {
      var u;
      const c = (u = r == null ? void 0 : r.vnode) == null ? void 0 : u.props;
      return !!(c && (c.onSort || c["on-sort"]));
    }), a = O(() => n.ariaSort === "ascending"), l = O(() => n.ariaSort === "descending");
    function d() {
      s.value && o("sort", n.columnKey || void 0);
    }
    return (c, u) => (A(), I("th", {
      class: K([
        "px-4 py-2 text-sm font-medium",
        e.className,
        {
          "text-blue-600": a.value || l.value,
          "text-gray-500": !(a.value || l.value),
          "opacity-60 pointer-events-none": n.loading,
          "cursor-pointer select-none": s.value
        }
      ]),
      style: St(e.width ? { width: e.width } : void 0),
      onClick: d,
      onKeydown: Ct(ze(d, ["prevent"]), ["enter"]),
      role: "columnheader",
      "aria-sort": e.ariaSort || "none",
      tabindex: "0"
    }, [
      $("div", {
        class: K(["flex items-center gap-2", i.value])
      }, [
        B(c.$slots, "default"),
        s.value || n.loading ? (A(), I(bt, { key: 0 }, [
          n.loading ? (A(), I("span", hs)) : (A(), I("svg", bs, [
            $("path", {
              class: K(a.value ? "text-blue-600" : "text-gray-500"),
              d: "M7 10l5-5 5 5",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 2),
            $("path", {
              class: K(l.value ? "text-blue-600" : "text-gray-500"),
              d: "M7 14l5 5 5-5",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 2)
          ]))
        ], 64)) : ee("", !0)
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
      return (i = y(t)) != null && i.selectable ? (A(), I("div", ws, [
        $("input", {
          type: "checkbox",
          checked: (s = y(t)) == null ? void 0 : s.allSelected,
          onChange: n,
          "aria-label": "Select all rows"
        }, null, 40, xs)
      ])) : ee("", !0);
    };
  }
}), Cs = /* @__PURE__ */ D({
  name: "PMGTableHeader",
  __name: "PMGTableHeader",
  setup(e) {
    const t = Re("pmgTable", null), n = vt(), r = O(() => {
      const o = [
        "border-b border-pmg-100",
        n.class ? n.class : "bg-pmg-50"
      ];
      return t && t.sticky && o.push("sticky w-full top-0 z-[1]"), o;
    });
    return (o, i) => {
      var s;
      return A(), I("thead", {
        class: K(r.value)
      }, [
        $("tr", null, [
          (s = y(t)) != null && s.selectable ? (A(), L(Nn, {
            key: 0,
            class: "w-16"
          }, {
            default: q(() => [
              G(Ss)
            ]),
            _: 1
          })) : ee("", !0),
          B(o.$slots, "default")
        ])
      ], 2);
    };
  }
}), Os = ["onKeydown"], _s = {
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
    const n = e, r = t, o = Re("pmgTable", null), i = O(
      () => n.item ? n.item[n.rowKey] : void 0
    );
    qe(() => {
      o && o.registerRow && i.value != null && o.registerRow(i.value);
    }), wt(() => {
      o && o.unregisterRow && i.value != null && o.unregisterRow(i.value);
    });
    const s = O(() => o && o.isRowSelected ? o.isRowSelected(i.value) : !1);
    function a() {
      !o || !i.value || o.toggleRowSelection && o.toggleRowSelection(i.value);
    }
    function l() {
      r("row-click", n.item);
    }
    return (d, c) => {
      var u;
      return A(), I("tr", {
        class: K(["border-b border-pmg-100", e.className]),
        onClick: l,
        role: "row",
        tabindex: "0",
        onKeydown: Ct(ze(l, ["prevent"]), ["enter"])
      }, [
        (u = y(o)) != null && u.selectable ? (A(), I("td", _s, [
          $("input", {
            type: "checkbox",
            checked: s.value,
            onChange: ze(a, ["stop", "prevent"]),
            "aria-label": `Select row ${i.value}`
          }, null, 40, Ps)
        ])) : ee("", !0),
        B(d.$slots, "default")
      ], 42, Os);
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
    const t = e, n = O(() => t.align === "center" ? "justify-center" : t.align === "right" ? "justify-end" : "justify-start");
    return (r, o) => (A(), I("td", {
      class: K(["p-4 text-sm text-gray-700", e.className]),
      colspan: e.colspan
    }, [
      $("div", {
        class: K(["flex items-center", n.value])
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
    visible: { type: Boolean, default: !1 }
  },
  emits: ["in-view"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = _(null);
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
      if (i && i.disconnect(), typeof window > "u" || typeof IntersectionObserver > "u")
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
    return qe(() => a()), wt(() => {
      i && (i.disconnect(), i = null);
    }), (l, d) => gt((A(), I("div", null, [
      $("div", {
        ref_key: "sentinel",
        ref: o,
        class: "pmg-table-skeleton mt-3 px-2"
      }, d[0] || (d[0] = [
        $("div", { class: "animate-pulse space-y-2" }, [
          $("div", { class: "h-6 bg-pmg-50/50 rounded" })
        ], -1)
      ]), 512)
    ], 512)), [
      [Qn, e.visible]
    ]);
  }
}), ks = {
  key: 0,
  class: "pmg-table-empty p-4 text-center text-gray-500"
}, Ds = /* @__PURE__ */ D({
  __name: "PMGTable",
  props: {
    striped: { type: Boolean, default: !1 },
    sticky: { type: Boolean, default: !1 },
    wrapperClass: { type: String, default: "" },
    tableClass: { type: String, default: "" },
    selectable: { type: Boolean, default: !1 },
    // keep props minimal
    rowKey: { type: String, default: "id" },
    infinite: { type: Function, default: void 0 },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = _(/* @__PURE__ */ new Set()), r = _(/* @__PURE__ */ new Set());
    function o(f) {
      f != null && n.value.add(f);
    }
    function i(f) {
      f != null && (n.value.delete(f), r.value.delete(f));
    }
    function s(f) {
      r.value.has(f) ? r.value.delete(f) : r.value.add(f);
    }
    function a(f) {
      return r.value.has(f);
    }
    const l = O(() => {
      const f = Array.from(n.value);
      return f.length > 0 && f.every((p) => r.value.has(p));
    }), d = er(), c = O(() => n.value.size > 0 ? !1 : (d.default ? d.default() : []).filter(
      (p) => p.type !== Comment && !(typeof p.children == "string" && p.children.trim() === "")
    ).length === 0);
    function u(f) {
      if (f)
        for (const p of n.value) r.value.add(p);
      else
        for (const p of Array.from(n.value))
          r.value.delete(p);
    }
    ht("pmgTable", {
      selectable: t.selectable,
      sticky: t.sticky,
      registerRow: o,
      unregisterRow: i,
      toggleRowSelection: s,
      isRowSelected: a,
      selectAll: u,
      allSelected: l
    });
    function m() {
      try {
        if (!t.infinite) return;
        t.infinite();
      } catch {
      }
    }
    return (f, p) => (A(), I("div", {
      class: K(["w-full", e.wrapperClass, { "overflow-auto": !t.sticky }])
    }, [
      $("table", {
        class: K(["min-w-full border-collapse bg-white", [e.tableClass, { striped: e.striped }]])
      }, [
        B(f.$slots, "default", {}, void 0, !0)
      ], 2),
      G(Ts, {
        disabled: t.loading,
        visible: t.loading,
        onInView: m
      }, null, 8, ["disabled", "visible"]),
      c.value ? (A(), I("div", ks, [
        B(f.$slots, "empty", {}, () => [
          p[0] || (p[0] = Ve("No items"))
        ], !0)
      ])) : ee("", !0)
    ], 2));
  }
}), Rs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, qs = /* @__PURE__ */ Rs(Ds, [["__scopeId", "data-v-d7a4c658"]]), Bs = /* @__PURE__ */ D({
  __name: "PMGTableBody",
  setup(e) {
    return (t, n) => (A(), I("tbody", null, [
      B(t.$slots, "default")
    ]));
  }
}), js = {
  install(e) {
    e.component("PMGButton", nr), e.component("PMGInput", ar), e.component("PMGPhoneInput", vs), e.component("PMGTableHeader", Cs), e.component("PMGTableHeaderCell", Nn), e.component("PMGTableRow", Es), e.component("PMGTableCell", Ms), e.component("PMGTable", qs), e.component("PMGTableBody", Bs);
  }
};
export {
  nr as PMGButton,
  ar as PMGInput,
  vs as PMGPhoneInput,
  qs as PMGTable,
  Bs as PMGTableBody,
  Ms as PMGTableCell,
  Cs as PMGTableHeader,
  Nn as PMGTableHeaderCell,
  Es as PMGTableRow,
  js as default
};
