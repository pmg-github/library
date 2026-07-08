import * as Ne from "vue";
import { defineComponent as q, createElementBlock as T, openBlock as S, normalizeClass as j, renderSlot as I, useAttrs as yt, computed as O, ref as E, withDirectives as ht, createCommentVNode as W, createElementVNode as P, mergeProps as se, unref as g, isRef as rn, vModelDynamic as Gn, createTextVNode as De, toDisplayString as te, inject as Be, provide as bt, Fragment as Re, effectScope as sn, getCurrentScope as an, onScopeDispose as ln, onBeforeUnmount as wt, customRef as Un, toValue as X, shallowRef as un, watchEffect as ae, readonly as Kn, getCurrentInstance as ye, watch as K, nextTick as J, toHandlerKey as Yn, camelize as cn, toRef as Xn, onUnmounted as xt, onMounted as Ie, toRefs as Fe, h as Ae, Comment as Jn, cloneVNode as Zn, reactive as dn, createBlock as L, normalizeStyle as Ct, withCtx as $, markRaw as Qn, createVNode as U, watchPostEffect as fn, shallowReadonly as _e, mergeDefaults as pn, normalizeProps as He, guardReactiveProps as mn, withModifiers as Ee, withKeys as _t, resolveDynamicComponent as eo, renderList as gn, vModelText as to, vShow as no } from "vue";
import { useField as vn } from "vee-validate";
import { TransitionRoot as oo, Dialog as ro, TransitionChild as Lt, DialogOverlay as io, DialogPanel as so, DialogTitle as ao } from "@headlessui/vue";
import { Node as lo } from "@tiptap/core";
import { NodeViewWrapper as uo, VueNodeViewRenderer as co } from "@tiptap/vue-3";
const fo = ["disabled"], po = /* @__PURE__ */ q({
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
    return q({
      name: "PMGButton"
    }), (t, n) => (S(), T("button", {
      disabled: e.disabled,
      class: j([
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
      onClick: n[0] || (n[0] = (o) => t.$emit("click"))
    }, [
      I(t.$slots, "default")
    ], 10, fo));
  }
}), mo = { class: "relative" }, go = ["type"], vo = { key: 0 }, yo = {
  key: 1,
  class: "mb-2 mt-1 text-xs text-red-600"
}, ho = /* @__PURE__ */ q({
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
    const t = e, n = yt(), o = O(() => "required" in n), r = E(null), { value: i, handleBlur: s, meta: a, errorMessage: l } = vn(
      () => t.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !0
      }
    );
    return (d, c) => (S(), T("div", mo, [
      ht(P("input", se({
        ref_key: "inputRef",
        ref: r,
        onBlur: c[0] || (c[0] = //@ts-ignore
        (...u) => g(s) && g(s)(...u)),
        "onUpdate:modelValue": c[1] || (c[1] = (u) => rn(i) ? i.value = u : null),
        type: e.type
      }, g(n), {
        class: ["peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all focus:border-2 focus:outline-0 disabled:opacity-50", [
          g(n).placeholder ? "" : "placeholder-shown:border",
          g(a).valid === !1 && g(a).touched ? g(n).placeholder ? "border-red-500 border-t-transparent text-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : g(n).placeholder ? "border-gray-700 border-t-transparent text-gray-700 focus:border-gray-700 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent"
        ]]
      }), null, 16, go), [
        [Gn, g(i)]
      ]),
      e.label ? (S(), T("label", {
        key: 0,
        class: j(["before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:opacity-50", [
          g(n).placeholder ? "text-[11px] leading-tight" : "peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]",
          g(a).valid === !1 && g(a).touched ? g(n).placeholder ? "text-red-500 before:border-red-500 after:border-red-500 peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-red-500 before:border-red-500 after:border-red-500 peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : g(n).placeholder ? "text-gray-700 before:border-gray-700 after:border-gray-700 peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700" : "text-gray-700 before:border-gray-700 after:border-gray-700 peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
        ]])
      }, [
        De(te(e.label) + " ", 1),
        o.value ? (S(), T("span", vo, "  *")) : W("", !0)
      ], 2)) : W("", !0),
      g(a).touched && g(a).valid === !1 && g(l) ? (S(), T("div", yo, te(g(l)), 1)) : W("", !0)
    ]));
  }
});
function he(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(n);
  return [(s) => {
    const a = Be(o, s);
    if (a || a === null) return a;
    throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (s) => (bt(o, s), s)];
}
function Q() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function yn(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
function St(e) {
  return e ? e.flatMap((t) => t.type === Re ? St(t.children) : [t]) : [];
}
const bo = ["INPUT", "TEXTAREA"];
function wo(e, t, n, o = {}) {
  if (!t || o.enableIgnoredElement && bo.includes(t.nodeName)) return null;
  const { arrowKeyOptions: r = "both", attributeName: i = "[data-reka-collection-item]", itemsArray: s = [], loop: a = !0, dir: l = "ltr", preventScroll: d = !0, focus: c = !1 } = o, [u, f, p, m, v, b] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], y = p || m, x = u || f;
  if (!v && !b && (!y && !x || r === "vertical" && x || r === "horizontal" && y)) return null;
  const w = n ? Array.from(n.querySelectorAll(i)) : s;
  if (!w.length) return null;
  d && e.preventDefault();
  let h = null;
  return x || y ? h = hn(w, t, {
    goForward: y ? m : l === "ltr" ? u : f,
    loop: a
  }) : v ? h = w.at(0) || null : b && (h = w.at(-1) || null), c && (h == null || h.focus()), h;
}
function hn(e, t, n, o = e.length) {
  if (--o === 0) return null;
  const r = e.indexOf(t), i = n.goForward ? r + 1 : r - 1;
  if (!n.loop && (i < 0 || i >= e.length)) return null;
  const s = (i + e.length) % e.length, a = e[s];
  return a ? a.hasAttribute("disabled") && a.getAttribute("disabled") !== "false" ? hn(e, a, n, o) : a : null;
}
const [Ot, Aa] = he("ConfigProvider");
function xo(e, t) {
  var n;
  const o = un();
  return ae(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Kn(o);
}
function At(e) {
  return an() ? (ln(e), !0) : !1;
}
function Co(e) {
  let t = !1, n;
  const o = sn(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function bn(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...i) => (t += 1, o || (o = sn(!0), n = o.run(() => e(...i))), At(r), n);
}
const be = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _o = (e) => typeof e < "u", So = Object.prototype.toString, Oo = (e) => So.call(e) === "[object Object]", Nt = /* @__PURE__ */ Ao();
function Ao() {
  var e, t;
  return be && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Po(e) {
  return ye();
}
function tt(e) {
  return Array.isArray(e) ? e : [e];
}
function Eo(e, t = 1e4) {
  return Un((n, o) => {
    let r = X(e), i;
    const s = () => setTimeout(() => {
      r = X(e), o();
    }, X(t));
    return At(() => {
      clearTimeout(i);
    }), {
      get() {
        return n(), r;
      },
      set(a) {
        r = a, o(), clearTimeout(i), i = s();
      }
    };
  });
}
function ko(e, t) {
  Po() && wt(e, t);
}
function Mo(e, t, n) {
  return K(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Pt = be ? window : void 0;
function Me(e) {
  var t;
  const n = X(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Ge(...e) {
  const t = [], n = () => {
    t.forEach((a) => a()), t.length = 0;
  }, o = (a, l, d, c) => (a.addEventListener(l, d, c), () => a.removeEventListener(l, d, c)), r = O(() => {
    const a = tt(X(e[0])).filter((l) => l != null);
    return a.every((l) => typeof l != "string") ? a : void 0;
  }), i = Mo(
    () => {
      var a, l;
      return [
        (l = (a = r.value) == null ? void 0 : a.map((d) => Me(d))) != null ? l : [Pt].filter((d) => d != null),
        tt(X(r.value ? e[1] : e[0])),
        tt(g(r.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        X(r.value ? e[3] : e[2])
      ];
    },
    ([a, l, d, c]) => {
      if (n(), !(a != null && a.length) || !(l != null && l.length) || !(d != null && d.length))
        return;
      const u = Oo(c) ? { ...c } : c;
      t.push(
        ...a.flatMap(
          (f) => l.flatMap(
            (p) => d.map((m) => o(f, p, m, u))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    i(), n();
  };
  return At(n), s;
}
function To(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Do(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = Pt,
    eventName: i = "keydown",
    passive: s = !1,
    dedupe: a = !1
  } = o, l = To(t);
  return Ge(r, i, (c) => {
    c.repeat && X(a) || l(c) && n(c);
  }, s);
}
function Ro(e) {
  return JSON.parse(JSON.stringify(e));
}
function Et(e, t, n, o = {}) {
  var r, i, s;
  const {
    clone: a = !1,
    passive: l = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: u,
    shouldEmit: f
  } = o, p = ye(), m = n || (p == null ? void 0 : p.emit) || ((r = p == null ? void 0 : p.$emit) == null ? void 0 : r.bind(p)) || ((s = (i = p == null ? void 0 : p.proxy) == null ? void 0 : i.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let v = d;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const b = (w) => a ? typeof a == "function" ? a(w) : Ro(w) : w, y = () => _o(e[t]) ? b(e[t]) : u, x = (w) => {
    f ? f(w) && m(v, w) : m(v, w);
  };
  if (l) {
    const w = y(), h = E(w);
    let _ = !1;
    return K(
      () => e[t],
      (A) => {
        _ || (_ = !0, h.value = b(A), J(() => _ = !1));
      }
    ), K(
      h,
      (A) => {
        !_ && (A !== e[t] || c) && x(A);
      },
      { deep: c }
    ), h;
  } else
    return O({
      get() {
        return y();
      },
      set(w) {
        x(w);
      }
    });
}
function nt(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function lt(e, t, n = ".", o) {
  if (!nt(t))
    return lt(e, {}, n, o);
  const r = Object.assign({}, t);
  for (const i in e) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const s = e[i];
    s != null && (o && o(r, i, s, n) || (Array.isArray(s) && Array.isArray(r[i]) ? r[i] = [...s, ...r[i]] : nt(s) && nt(r[i]) ? r[i] = lt(
      s,
      r[i],
      (n ? `${n}.` : "") + i.toString(),
      o
    ) : r[i] = s));
  }
  return r;
}
function $o(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => lt(n, o, "", e), {})
  );
}
const qo = $o(), Bo = bn(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), n = O(() => {
    for (const s of e.value.values()) if (s) return !0;
    return !1;
  }), o = Ot({ scrollBody: E(!0) });
  let r = null;
  const i = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Nt && (r == null || r()), t.value = void 0;
  };
  return K(n, (s, a) => {
    var u;
    if (!be) return;
    if (!s) {
      a && i();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: l,
      margin: 0
    }, c = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? qo({
      padding: o.scrollBody.value.padding === !0 ? l : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? l : o.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    l > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), Nt && (r = Ge(document, "touchmove", (f) => Fo(f), { passive: !1 })), J(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function Io(e) {
  const t = Math.random().toString(36).substring(2, 7), n = Bo();
  n.value.set(t, e ?? !1);
  const o = O({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return ko(() => {
    n.value.delete(t);
  }), o;
}
function wn(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : wn(n);
  }
}
function Fo(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && wn(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function kt(e) {
  const t = Ot({ dir: E("ltr") });
  return O(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function xn(e) {
  const t = ye(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null || n.forEach((r) => {
    o[Yn(cn(r))] = (...i) => e(r, ...i);
  }), o;
}
let ot = 0;
function Lo() {
  ae((e) => {
    if (!be) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? jt()), document.body.insertAdjacentElement("beforeend", t[1] ?? jt()), ot++, e(() => {
      ot === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), ot--;
    });
  });
}
function jt() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function ee() {
  const e = ye(), t = E(), n = O(() => {
    var s, a;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (a = t.value) == null ? void 0 : a.$el.nextElementSibling : Me(t);
  }), o = Object.assign({}, e.exposed), r = {};
  for (const s in e.props) Object.defineProperty(r, s, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[s]
  });
  if (Object.keys(o).length > 0) for (const s in o) Object.defineProperty(r, s, {
    enumerable: !0,
    configurable: !0,
    get: () => o[s]
  });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function i(s) {
    t.value = s, s && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = r);
  }
  return {
    forwardRef: i,
    currentRef: t,
    currentElement: n
  };
}
function No(e) {
  const t = ye(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, i) => {
    const s = (t == null ? void 0 : t.type.props[i]).default;
    return s !== void 0 && (r[i] = s), r;
  }, {}), o = Xn(e);
  return O(() => {
    const r = {}, i = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(i).forEach((s) => {
      r[cn(s)] = i[s];
    }), Object.keys({
      ...n,
      ...r
    }).reduce((s, a) => (o.value[a] !== void 0 && (s[a] = o.value[a]), s), {});
  });
}
function Xe(e, t) {
  const n = No(e), o = t ? xn(t) : {};
  return O(() => ({
    ...n.value,
    ...o
  }));
}
var jo = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Se = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), ze = {}, rt = 0, Cn = function(e) {
  return e && (e.host || Cn(e.parentNode));
}, zo = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Cn(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Vo = function(e, t, n, o) {
  var r = zo(t, Array.isArray(e) ? e : [e]);
  ze[n] || (ze[n] = /* @__PURE__ */ new WeakMap());
  var i = ze[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(r), d = function(u) {
    !u || a.has(u) || (a.add(u), d(u.parentNode));
  };
  r.forEach(d);
  var c = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (a.has(f))
        c(f);
      else
        try {
          var p = f.getAttribute(o), m = p !== null && p !== "false", v = (Se.get(f) || 0) + 1, b = (i.get(f) || 0) + 1;
          Se.set(f, v), i.set(f, b), s.push(f), v === 1 && m && je.set(f, !0), b === 1 && f.setAttribute(n, "true"), m || f.setAttribute(o, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", f, y);
        }
    });
  };
  return c(t), a.clear(), rt++, function() {
    s.forEach(function(u) {
      var f = Se.get(u) - 1, p = i.get(u) - 1;
      Se.set(u, f), i.set(u, p), f || (je.has(u) || u.removeAttribute(o), je.delete(u)), p || u.removeAttribute(n);
    }), rt--, rt || (Se = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), je = /* @__PURE__ */ new WeakMap(), ze = {});
  };
}, Wo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = jo(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Vo(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function Ho(e) {
  let t;
  K(() => Me(e), (n) => {
    n ? t = Wo(n) : t && t();
  }), xt(() => {
    t && t();
  });
}
let Go = 0;
function _n(e, t = "reka") {
  var o;
  if ("useId" in Ne) return `${t}-${(o = Ne.useId) == null ? void 0 : o.call(Ne)}`;
  const n = Ot({ useId: void 0 });
  return n.useId ? `${t}-${n.useId()}` : `${t}-${++Go}`;
}
function Uo(e) {
  const t = E(), n = O(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.width) ?? 0;
  }), o = O(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.height) ?? 0;
  });
  return Ie(() => {
    const r = Me(e);
    if (r) {
      t.value = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      const i = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length) return;
        const a = s[0];
        let l, d;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, u = Array.isArray(c) ? c[0] : c;
          l = u.inlineSize, d = u.blockSize;
        } else
          l = r.offsetWidth, d = r.offsetHeight;
        t.value = {
          width: l,
          height: d
        };
      });
      return i.observe(r, { box: "border-box" }), () => i.unobserve(r);
    } else t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
function Ko(e, t) {
  const n = E(e);
  function o(i) {
    return t[n.value][i] ?? n.value;
  }
  return {
    state: n,
    dispatch: (i) => {
      n.value = o(i);
    }
  };
}
function Yo(e) {
  const t = Eo("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (r, i) => {
      t.value = t.value + r;
      {
        const s = Q(), a = i.map((f) => {
          var p, m;
          return {
            ...f,
            textValue: ((p = f.value) == null ? void 0 : p.textValue) ?? ((m = f.ref.textContent) == null ? void 0 : m.trim()) ?? ""
          };
        }), l = a.find((f) => f.ref === s), d = a.map((f) => f.textValue), c = Jo(d, t.value, l == null ? void 0 : l.textValue), u = a.find((f) => f.textValue === c);
        return u && u.ref.focus(), u == null ? void 0 : u.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Xo(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Jo(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = Xo(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find((d) => d.toLowerCase().startsWith(r.toLowerCase()));
  return l !== n ? l : void 0;
}
function Zo(e, t) {
  var b;
  const n = E({}), o = E("none"), r = E(e), i = e.value ? "mounted" : "unmounted";
  let s;
  const a = ((b = t.value) == null ? void 0 : b.ownerDocument.defaultView) ?? Pt, { state: l, dispatch: d } = Ko(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (y) => {
    var x;
    if (be) {
      const w = new CustomEvent(y, {
        bubbles: !1,
        cancelable: !1
      });
      (x = t.value) == null || x.dispatchEvent(w);
    }
  };
  K(e, async (y, x) => {
    var h;
    const w = x !== y;
    if (await J(), w) {
      const _ = o.value, A = Ve(t.value);
      y ? (d("MOUNT"), c("enter"), A === "none" && c("after-enter")) : A === "none" || A === "undefined" || ((h = n.value) == null ? void 0 : h.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : x && _ !== A ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const u = (y) => {
    const x = Ve(t.value), w = x.includes(y.animationName), h = l.value === "mounted" ? "enter" : "leave";
    if (y.target === t.value && w && (c(`after-${h}`), d("ANIMATION_END"), !r.value)) {
      const _ = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = a == null ? void 0 : a.setTimeout(() => {
        var A;
        ((A = t.value) == null ? void 0 : A.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = _);
      });
    }
    y.target === t.value && x === "none" && d("ANIMATION_END");
  }, f = (y) => {
    y.target === t.value && (o.value = Ve(t.value));
  }, p = K(t, (y, x) => {
    y ? (n.value = getComputedStyle(y), y.addEventListener("animationstart", f), y.addEventListener("animationcancel", u), y.addEventListener("animationend", u)) : (d("ANIMATION_END"), s !== void 0 && (a == null || a.clearTimeout(s)), x == null || x.removeEventListener("animationstart", f), x == null || x.removeEventListener("animationcancel", u), x == null || x.removeEventListener("animationend", u));
  }, { immediate: !0 }), m = K(l, () => {
    const y = Ve(t.value);
    o.value = l.value === "mounted" ? y : "none";
  });
  return xt(() => {
    p(), m();
  }), { isPresent: O(() => ["mounted", "unmountSuspended"].includes(l.value)) };
}
function Ve(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var Qo = q({
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
    const { present: o, forceMount: r } = Fe(e), i = E(), { isPresent: s } = Zo(o, i);
    n({ present: s });
    let a = t.default({ present: s.value });
    a = St(a || []);
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
    return () => r.value || o.value || s.value ? Ae(t.default({ present: s.value })[0], { ref: (c) => {
      const u = Me(c);
      return typeof (u == null ? void 0 : u.hasAttribute) > "u" || (u != null && u.hasAttribute("data-reka-popper-content-wrapper") ? i.value = u.firstElementChild : i.value = u), u;
    } }) : null;
  }
});
const ut = q({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var l;
      if (!n.default) return null;
      const o = St(n.default()), r = o.findIndex((d) => d.type !== Jn);
      if (r === -1) return o;
      const i = o[r];
      (l = i.props) == null || delete l.ref;
      const s = i.props ? se(t, i.props) : t, a = Zn({
        ...i,
        props: {}
      }, s);
      return o.length === 1 ? a : (o[r] = a, o);
    };
  }
}), er = [
  "area",
  "img",
  "input"
], xe = q({
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
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && er.includes(o) ? () => Ae(o, t) : o !== "template" ? () => Ae(e.as, t, { default: n.default }) : () => Ae(ut, t, { default: n.default });
  }
});
function zt() {
  const e = E(), t = O(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : Me(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const tr = "dismissableLayer.pointerDownOutside", nr = "dismissableLayer.focusOutside";
function Sn(e, t) {
  const n = t.closest("[data-dismissable-layer]"), o = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), r = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(n && (o === n || r.indexOf(o) < r.indexOf(n)));
}
function or(e, t, n = !0) {
  var s;
  const o = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = E(!1), i = E(() => {
  });
  return ae((a) => {
    if (!be || !X(n)) return;
    const l = async (c) => {
      const u = c.target;
      if (!(!(t != null && t.value) || !u)) {
        if (Sn(t.value, u)) {
          r.value = !1;
          return;
        }
        if (c.target && !r.value) {
          let p = function() {
            yn(tr, e, f);
          };
          const f = { originalEvent: c };
          c.pointerType === "touch" ? (o.removeEventListener("click", i.value), i.value = p, o.addEventListener("click", i.value, { once: !0 })) : p();
        } else o.removeEventListener("click", i.value);
        r.value = !1;
      }
    }, d = window.setTimeout(() => {
      o.addEventListener("pointerdown", l);
    }, 0);
    a(() => {
      window.clearTimeout(d), o.removeEventListener("pointerdown", l), o.removeEventListener("click", i.value);
    });
  }), { onPointerDownCapture: () => {
    X(n) && (r.value = !0);
  } };
}
function rr(e, t, n = !0) {
  var i;
  const o = ((i = t == null ? void 0 : t.value) == null ? void 0 : i.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = E(!1);
  return ae((s) => {
    if (!be || !X(n)) return;
    const a = async (l) => {
      if (!(t != null && t.value)) return;
      await J(), await J();
      const d = l.target;
      !t.value || !d || Sn(t.value, d) || l.target && !r.value && yn(nr, e, { originalEvent: l });
    };
    o.addEventListener("focusin", a), s(() => o.removeEventListener("focusin", a));
  }), {
    onFocusCapture: () => {
      X(n) && (r.value = !0);
    },
    onBlurCapture: () => {
      X(n) && (r.value = !1);
    }
  };
}
const ce = dn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var ir = /* @__PURE__ */ q({
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
    const n = e, o = t, { forwardRef: r, currentElement: i } = ee(), s = O(() => {
      var m;
      return ((m = i.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
    }), a = O(() => ce.layersRoot), l = O(() => i.value ? Array.from(a.value).indexOf(i.value) : -1), d = O(() => ce.layersWithOutsidePointerEventsDisabled.size > 0), c = O(() => {
      const m = Array.from(a.value), [v] = [...ce.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(v);
      return l.value >= b;
    }), u = or(async (m) => {
      const v = [...ce.branches].some((b) => b == null ? void 0 : b.contains(m.target));
      !c.value || v || (o("pointerDownOutside", m), o("interactOutside", m), await J(), m.defaultPrevented || o("dismiss"));
    }, i), f = rr((m) => {
      [...ce.branches].some((b) => b == null ? void 0 : b.contains(m.target)) || (o("focusOutside", m), o("interactOutside", m), m.defaultPrevented || o("dismiss"));
    }, i);
    Do("Escape", (m) => {
      l.value === a.value.size - 1 && (o("escapeKeyDown", m), m.defaultPrevented || o("dismiss"));
    });
    let p;
    return ae((m) => {
      i.value && (n.disableOutsidePointerEvents && (ce.layersWithOutsidePointerEventsDisabled.size === 0 && (p = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), ce.layersWithOutsidePointerEventsDisabled.add(i.value)), a.value.add(i.value), m(() => {
        n.disableOutsidePointerEvents && ce.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = p);
      }));
    }), ae((m) => {
      m(() => {
        i.value && (a.value.delete(i.value), ce.layersWithOutsidePointerEventsDisabled.delete(i.value));
      });
    }), (m, v) => (S(), L(g(xe), {
      ref: g(r),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: Ct({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: g(f).onFocusCapture,
      onBlurCapture: g(f).onBlurCapture,
      onPointerdownCapture: g(u).onPointerDownCapture
    }, {
      default: $(() => [I(m.$slots, "default")]),
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
}), sr = ir;
const ar = Co(() => E([]));
function lr() {
  const e = ar();
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
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function ur(e) {
  return e.filter((t) => t.tagName !== "A");
}
const it = "focusScope.autoFocusOnMount", st = "focusScope.autoFocusOnUnmount", Wt = {
  bubbles: !1,
  cancelable: !0
};
function cr(e, { select: t = !1 } = {}) {
  const n = Q();
  for (const o of e)
    if (me(o, { select: t }), Q() !== n) return !0;
}
function dr(e) {
  const t = On(e), n = Ht(t, e), o = Ht(t.reverse(), e);
  return [n, o];
}
function On(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const r = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ht(e, t) {
  for (const n of e) if (!fr(n, { upTo: t })) return n;
}
function fr(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function pr(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function me(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Q();
    e.focus({ preventScroll: !0 }), e !== n && pr(e) && t && e.select();
  }
}
var mr = /* @__PURE__ */ q({
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
    const n = e, o = t, { currentRef: r, currentElement: i } = ee(), s = E(null), a = lr(), l = dn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ae((c) => {
      if (!be) return;
      const u = i.value;
      if (!n.trapped) return;
      function f(b) {
        if (l.paused || !u) return;
        const y = b.target;
        u.contains(y) ? s.value = y : me(s.value, { select: !0 });
      }
      function p(b) {
        if (l.paused || !u) return;
        const y = b.relatedTarget;
        y !== null && (u.contains(y) || me(s.value, { select: !0 }));
      }
      function m(b) {
        u.contains(s.value) || me(u);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", p);
      const v = new MutationObserver(m);
      u && v.observe(u, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", p), v.disconnect();
      });
    }), ae(async (c) => {
      const u = i.value;
      if (await J(), !u) return;
      a.add(l);
      const f = Q();
      if (!u.contains(f)) {
        const m = new CustomEvent(it, Wt);
        u.addEventListener(it, (v) => o("mountAutoFocus", v)), u.dispatchEvent(m), m.defaultPrevented || (cr(ur(On(u)), { select: !0 }), Q() === f && me(u));
      }
      c(() => {
        u.removeEventListener(it, (b) => o("mountAutoFocus", b));
        const m = new CustomEvent(st, Wt), v = (b) => {
          o("unmountAutoFocus", b);
        };
        u.addEventListener(st, v), u.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || me(f ?? document.body, { select: !0 }), u.removeEventListener(st, v), a.remove(l);
        }, 0);
      });
    });
    function d(c) {
      if (!n.loop && !n.trapped || l.paused) return;
      const u = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = Q();
      if (u && f) {
        const p = c.currentTarget, [m, v] = dr(p);
        m && v ? !c.shiftKey && f === v ? (c.preventDefault(), n.loop && me(m, { select: !0 })) : c.shiftKey && f === m && (c.preventDefault(), n.loop && me(v, { select: !0 })) : f === p && c.preventDefault();
      }
    }
    return (c, u) => (S(), L(g(xe), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: $(() => [I(c.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), gr = mr;
const vr = "menu.itemSelect", ct = ["Enter", " "], yr = [
  "ArrowDown",
  "PageUp",
  "Home"
], An = [
  "ArrowUp",
  "PageDown",
  "End"
], hr = [...yr, ...An];
[...ct], [...ct];
function br(e) {
  return e ? "open" : "closed";
}
function wr(e) {
  const t = Q();
  for (const n of e)
    if (n === t || (n.focus(), Q() !== t)) return;
}
function xr(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, l = t[i].y, d = t[s].x, c = t[s].y;
    l > o != c > o && n < (d - a) * (o - l) / (c - l) + a && (r = !r);
  }
  return r;
}
function Cr(e, t) {
  if (!t) return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return xr(n, t);
}
function dt(e) {
  return e.pointerType === "mouse";
}
const Gt = "data-reka-collection-item";
function Pn(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let r;
  if (n) {
    const c = E(/* @__PURE__ */ new Map());
    r = {
      collectionRef: E(),
      itemMap: c
    }, bt(o, r);
  } else r = Be(o);
  const i = (c = !1) => {
    const u = r.collectionRef.value;
    if (!u) return [];
    const f = Array.from(u.querySelectorAll(`[${Gt}]`)), m = Array.from(r.itemMap.value.values()).sort((v, b) => f.indexOf(v.ref) - f.indexOf(b.ref));
    return c ? m : m.filter((v) => v.ref.dataset.disabled !== "");
  }, s = q({
    name: "CollectionSlot",
    setup(c, { slots: u }) {
      const { primitiveElement: f, currentElement: p } = zt();
      return K(p, () => {
        r.collectionRef.value = p.value;
      }), () => Ae(ut, { ref: f }, u);
    }
  }), a = q({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: u, attrs: f }) {
      const { primitiveElement: p, currentElement: m } = zt();
      return ae((v) => {
        if (m.value) {
          const b = Qn(m.value);
          r.itemMap.value.set(b, {
            ref: m.value,
            value: c.value
          }), v(() => r.itemMap.value.delete(b));
        }
      }), () => Ae(ut, {
        ...f,
        [Gt]: "",
        ref: p
      }, u);
    }
  }), l = O(() => Array.from(r.itemMap.value.values())), d = O(() => r.itemMap.value.size);
  return {
    getItems: i,
    reactiveItems: l,
    itemMapSize: d,
    CollectionSlot: s,
    CollectionItem: a
  };
}
const _r = "rovingFocusGroup.onEntryFocus", Sr = {
  bubbles: !1,
  cancelable: !0
};
function Or(e, t = !1) {
  const n = Q();
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), Q() !== n)) return;
}
const [Pa, Ar] = he("RovingFocusGroup");
var Pr = /* @__PURE__ */ q({
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
    const o = e, r = n, { loop: i, orientation: s, dir: a } = Fe(o), l = kt(a), d = Et(o, "currentTabStopId", r, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), c = E(!1), u = E(!1), f = E(0), { getItems: p, CollectionSlot: m } = Pn({ isProvider: !0 });
    function v(y) {
      const x = !u.value;
      if (y.currentTarget && y.target === y.currentTarget && x && !c.value) {
        const w = new CustomEvent(_r, Sr);
        if (y.currentTarget.dispatchEvent(w), r("entryFocus", w), !w.defaultPrevented) {
          const h = p().map((B) => B.ref).filter((B) => B.dataset.disabled !== ""), _ = h.find((B) => B.getAttribute("data-active") === ""), A = h.find((B) => B.id === d.value), k = [
            _,
            A,
            ...h
          ].filter(Boolean);
          Or(k, o.preventScrollOnEntryFocus);
        }
      }
      u.value = !1;
    }
    function b() {
      setTimeout(() => {
        u.value = !1;
      }, 1);
    }
    return t({ getItems: p }), Ar({
      loop: i,
      dir: l,
      orientation: s,
      currentTabStopId: d,
      onItemFocus: (y) => {
        d.value = y;
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
    }), (y, x) => (S(), L(g(m), null, {
      default: $(() => [U(g(xe), {
        tabindex: c.value || f.value === 0 ? -1 : 0,
        "data-orientation": g(s),
        as: y.as,
        "as-child": y.asChild,
        dir: g(l),
        style: { outline: "none" },
        onMousedown: x[0] || (x[0] = (w) => u.value = !0),
        onMouseup: b,
        onFocus: v,
        onBlur: x[1] || (x[1] = (w) => c.value = !1)
      }, {
        default: $(() => [I(y.$slots, "default")]),
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
}), Er = Pr;
const [En, kr] = he("PopperRoot");
var Mr = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return kr({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => I(n.$slots, "default");
  }
}), Tr = Mr, Dr = /* @__PURE__ */ q({
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
    const t = e, { forwardRef: n, currentElement: o } = ee(), r = En();
    return fn(() => {
      r.onAnchorChange(t.reference ?? o.value);
    }), (i, s) => (S(), L(g(xe), {
      ref: g(n),
      as: i.as,
      "as-child": i.asChild
    }, {
      default: $(() => [I(i.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Rr = Dr;
function $r(e) {
  return e !== null;
}
function qr(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var b, y, x;
      const { placement: n, rects: o, middlewareData: r } = t, s = ((b = r.arrow) == null ? void 0 : b.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, c] = ft(n), u = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], f = (((y = r.arrow) == null ? void 0 : y.x) ?? 0) + a / 2, p = (((x = r.arrow) == null ? void 0 : x.y) ?? 0) + l / 2;
      let m = "", v = "";
      return d === "bottom" ? (m = s ? u : `${f}px`, v = `${-l}px`) : d === "top" ? (m = s ? u : `${f}px`, v = `${o.floating.height + l}px`) : d === "right" ? (m = `${-l}px`, v = s ? u : `${p}px`) : d === "left" && (m = `${o.floating.width + l}px`, v = s ? u : `${p}px`), { data: {
        x: m,
        y: v
      } };
    }
  };
}
function ft(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Br = ["top", "right", "bottom", "left"], ge = Math.min, Y = Math.max, Ue = Math.round, We = Math.floor, ie = (e) => ({
  x: e,
  y: e
}), Ir = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Fr = {
  start: "end",
  end: "start"
};
function pt(e, t, n) {
  return Y(e, ge(t, n));
}
function de(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fe(e) {
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
const Lr = /* @__PURE__ */ new Set(["top", "bottom"]);
function re(e) {
  return Lr.has(fe(e)) ? "y" : "x";
}
function Dt(e) {
  return Mt(re(e));
}
function Nr(e, t, n) {
  n === void 0 && (n = !1);
  const o = Te(e), r = Dt(e), i = Tt(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ke(s)), [s, Ke(s)];
}
function jr(e) {
  const t = Ke(e);
  return [mt(e), t, mt(t)];
}
function mt(e) {
  return e.replace(/start|end/g, (t) => Fr[t]);
}
const Ut = ["left", "right"], Kt = ["right", "left"], zr = ["top", "bottom"], Vr = ["bottom", "top"];
function Wr(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Kt : Ut : t ? Ut : Kt;
    case "left":
    case "right":
      return t ? zr : Vr;
    default:
      return [];
  }
}
function Hr(e, t, n, o) {
  const r = Te(e);
  let i = Wr(fe(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(mt)))), i;
}
function Ke(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ir[t]);
}
function Gr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function kn(e) {
  return typeof e != "number" ? Gr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ye(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Yt(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = re(t), s = Dt(t), a = Tt(s), l = fe(t), d = i === "y", c = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, f = o[a] / 2 - r[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: c,
        y: o.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: o.x - r.width,
        y: u
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
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
const Ur = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: c,
    y: u
  } = Yt(d, o, l), f = o, p = {}, m = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: b,
      fn: y
    } = a[v], {
      x,
      y: w,
      data: h,
      reset: _
    } = await y({
      x: c,
      y: u,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: p,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = x ?? c, u = w ?? u, p = {
      ...p,
      [b]: {
        ...p[b],
        ...h
      }
    }, _ && m <= 50 && (m++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (d = _.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : _.rects), {
      x: c,
      y: u
    } = Yt(d, f, l)), v = -1);
  }
  return {
    x: c,
    y: u,
    placement: f,
    strategy: r,
    middlewareData: p
  };
};
async function $e(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
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
  } = de(t, e), m = kn(p), b = a[f ? u === "floating" ? "reference" : "floating" : u], y = Ye(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: l
  })), x = u === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), h = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = Ye(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: w,
    strategy: l
  }) : x);
  return {
    top: (y.top - _.top + m.top) / h.y,
    bottom: (_.bottom - y.bottom + m.bottom) / h.y,
    left: (y.left - _.left + m.left) / h.x,
    right: (_.right - y.right + m.right) / h.x
  };
}
const Kr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: d,
      padding: c = 0
    } = de(e, t) || {};
    if (d == null)
      return {};
    const u = kn(c), f = {
      x: n,
      y: o
    }, p = Dt(r), m = Tt(p), v = await s.getDimensions(d), b = p === "y", y = b ? "top" : "left", x = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", h = i.reference[m] + i.reference[p] - f[p] - i.floating[m], _ = f[p] - i.reference[p], A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let k = A ? A[w] : 0;
    (!k || !await (s.isElement == null ? void 0 : s.isElement(A))) && (k = a.floating[w] || i.floating[m]);
    const B = h / 2 - _ / 2, C = k / 2 - v[m] / 2 - 1, M = ge(u[y], C), R = ge(u[x], C), D = M, H = k - v[m] - R, F = k / 2 - v[m] / 2 + B, N = pt(D, F, H), z = !l.arrow && Te(r) != null && F !== N && i.reference[m] / 2 - (F < D ? M : R) - v[m] / 2 < 0, V = z ? F < D ? F - D : F - H : 0;
    return {
      [p]: f[p] + V,
      data: {
        [p]: N,
        centerOffset: F - N - V,
        ...z && {
          alignmentOffset: V
        }
      },
      reset: z
    };
  }
}), Yr = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
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
        flipAlignment: v = !0,
        ...b
      } = de(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const y = fe(r), x = re(a), w = fe(a) === a, h = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), _ = f || (w || !v ? [Ke(a)] : jr(a)), A = m !== "none";
      !f && A && _.push(...Hr(a, v, m, h));
      const k = [a, ..._], B = await $e(t, b), C = [];
      let M = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (c && C.push(B[y]), u) {
        const F = Nr(r, s, h);
        C.push(B[F[0]], B[F[1]]);
      }
      if (M = [...M, {
        placement: r,
        overflows: C
      }], !C.every((F) => F <= 0)) {
        var R, D;
        const F = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, N = k[F];
        if (N && (!(u === "alignment" ? x !== re(N) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        M.every((G) => re(G.placement) === x ? G.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: M
            },
            reset: {
              placement: N
            }
          };
        let z = (D = M.filter((V) => V.overflows[0] <= 0).sort((V, G) => V.overflows[1] - G.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!z)
          switch (p) {
            case "bestFit": {
              var H;
              const V = (H = M.filter((G) => {
                if (A) {
                  const pe = re(G.placement);
                  return pe === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((pe) => pe > 0).reduce((pe, Hn) => pe + Hn, 0)]).sort((G, pe) => G[1] - pe[1])[0]) == null ? void 0 : H[0];
              V && (z = V);
              break;
            }
            case "initialPlacement":
              z = a;
              break;
          }
        if (r !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
function Xt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Jt(e) {
  return Br.some((t) => e[t] >= 0);
}
const Xr = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = de(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await $e(t, {
            ...r,
            elementContext: "reference"
          }), s = Xt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Jt(s)
            }
          };
        }
        case "escaped": {
          const i = await $e(t, {
            ...r,
            altBoundary: !0
          }), s = Xt(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Jt(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Mn = /* @__PURE__ */ new Set(["left", "top"]);
async function Jr(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = fe(n), a = Te(n), l = re(n) === "y", d = Mn.has(s) ? -1 : 1, c = i && l ? -1 : 1, u = de(t, e);
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
const Zr = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await Jr(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Qr = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: y,
              y: x
            } = b;
            return {
              x: y,
              y: x
            };
          }
        },
        ...l
      } = de(e, t), d = {
        x: n,
        y: o
      }, c = await $e(t, l), u = re(fe(r)), f = Mt(u);
      let p = d[f], m = d[u];
      if (i) {
        const b = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", x = p + c[b], w = p - c[y];
        p = pt(x, p, w);
      }
      if (s) {
        const b = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", x = m + c[b], w = m - c[y];
        m = pt(x, m, w);
      }
      const v = a.fn({
        ...t,
        [f]: p,
        [u]: m
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - o,
          enabled: {
            [f]: i,
            [u]: s
          }
        }
      };
    }
  };
}, ei = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: d = !0
      } = de(e, t), c = {
        x: n,
        y: o
      }, u = re(r), f = Mt(u);
      let p = c[f], m = c[u];
      const v = de(a, t), b = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const w = f === "y" ? "height" : "width", h = i.reference[f] - i.floating[w] + b.mainAxis, _ = i.reference[f] + i.reference[w] - b.mainAxis;
        p < h ? p = h : p > _ && (p = _);
      }
      if (d) {
        var y, x;
        const w = f === "y" ? "width" : "height", h = Mn.has(fe(r)), _ = i.reference[u] - i.floating[w] + (h && ((y = s.offset) == null ? void 0 : y[u]) || 0) + (h ? 0 : b.crossAxis), A = i.reference[u] + i.reference[w] + (h ? 0 : ((x = s.offset) == null ? void 0 : x[u]) || 0) - (h ? b.crossAxis : 0);
        m < _ ? m = _ : m > A && (m = A);
      }
      return {
        [f]: p,
        [u]: m
      };
    }
  };
}, ti = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: i,
        platform: s,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...d
      } = de(e, t), c = await $e(t, d), u = fe(r), f = Te(r), p = re(r) === "y", {
        width: m,
        height: v
      } = i.floating;
      let b, y;
      u === "top" || u === "bottom" ? (b = u, y = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = u, b = f === "end" ? "top" : "bottom");
      const x = v - c.top - c.bottom, w = m - c.left - c.right, h = ge(v - c[b], x), _ = ge(m - c[y], w), A = !t.middlewareData.shift;
      let k = h, B = _;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (B = w), (o = t.middlewareData.shift) != null && o.enabled.y && (k = x), A && !f) {
        const M = Y(c.left, 0), R = Y(c.right, 0), D = Y(c.top, 0), H = Y(c.bottom, 0);
        p ? B = m - 2 * (M !== 0 || R !== 0 ? M + R : Y(c.left, c.right)) : k = v - 2 * (D !== 0 || H !== 0 ? D + H : Y(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: B,
        availableHeight: k
      });
      const C = await s.getDimensions(a.floating);
      return m !== C.width || v !== C.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Je() {
  return typeof window < "u";
}
function Ce(e) {
  return Rt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ue(e) {
  var t;
  return (t = (Rt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Rt(e) {
  return Je() ? e instanceof Node || e instanceof Z(e).Node : !1;
}
function ne(e) {
  return Je() ? e instanceof Element || e instanceof Z(e).Element : !1;
}
function le(e) {
  return Je() ? e instanceof HTMLElement || e instanceof Z(e).HTMLElement : !1;
}
function Zt(e) {
  return !Je() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Z(e).ShadowRoot;
}
const ni = /* @__PURE__ */ new Set(["inline", "contents"]);
function Le(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !ni.has(r);
}
const oi = /* @__PURE__ */ new Set(["table", "td", "th"]);
function ri(e) {
  return oi.has(Ce(e));
}
const ii = [":popover-open", ":modal"];
function Ze(e) {
  return ii.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const si = ["transform", "translate", "scale", "rotate", "perspective"], ai = ["transform", "translate", "scale", "rotate", "perspective", "filter"], li = ["paint", "layout", "strict", "content"];
function $t(e) {
  const t = qt(), n = ne(e) ? oe(e) : e;
  return si.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ai.some((o) => (n.willChange || "").includes(o)) || li.some((o) => (n.contain || "").includes(o));
}
function ui(e) {
  let t = ve(e);
  for (; le(t) && !ke(t); ) {
    if ($t(t))
      return t;
    if (Ze(t))
      return null;
    t = ve(t);
  }
  return null;
}
function qt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ci = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ke(e) {
  return ci.has(Ce(e));
}
function oe(e) {
  return Z(e).getComputedStyle(e);
}
function Qe(e) {
  return ne(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ve(e) {
  if (Ce(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Zt(e) && e.host || // Fallback.
    ue(e)
  );
  return Zt(t) ? t.host : t;
}
function Tn(e) {
  const t = ve(e);
  return ke(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : le(t) && Le(t) ? t : Tn(t);
}
function qe(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Tn(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = Z(r);
  if (i) {
    const a = gt(s);
    return t.concat(s, s.visualViewport || [], Le(r) ? r : [], a && n ? qe(a) : []);
  }
  return t.concat(r, qe(r, [], n));
}
function gt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Dn(e) {
  const t = oe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = le(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, a = Ue(n) !== i || Ue(o) !== s;
  return a && (n = i, o = s), {
    width: n,
    height: o,
    $: a
  };
}
function Bt(e) {
  return ne(e) ? e : e.contextElement;
}
function Pe(e) {
  const t = Bt(e);
  if (!le(t))
    return ie(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Dn(t);
  let s = (i ? Ue(n.width) : n.width) / o, a = (i ? Ue(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const di = /* @__PURE__ */ ie(0);
function Rn(e) {
  const t = Z(e);
  return !qt() || !t.visualViewport ? di : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fi(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Z(e) ? !1 : t;
}
function we(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = Bt(e);
  let s = ie(1);
  t && (o ? ne(o) && (s = Pe(o)) : s = Pe(e));
  const a = fi(i, n, o) ? Rn(i) : ie(0);
  let l = (r.left + a.x) / s.x, d = (r.top + a.y) / s.y, c = r.width / s.x, u = r.height / s.y;
  if (i) {
    const f = Z(i), p = o && ne(o) ? Z(o) : o;
    let m = f, v = gt(m);
    for (; v && o && p !== m; ) {
      const b = Pe(v), y = v.getBoundingClientRect(), x = oe(v), w = y.left + (v.clientLeft + parseFloat(x.paddingLeft)) * b.x, h = y.top + (v.clientTop + parseFloat(x.paddingTop)) * b.y;
      l *= b.x, d *= b.y, c *= b.x, u *= b.y, l += w, d += h, m = Z(v), v = gt(m);
    }
  }
  return Ye({
    width: c,
    height: u,
    x: l,
    y: d
  });
}
function It(e, t) {
  const n = Qe(e).scrollLeft;
  return t ? t.left + n : we(ue(e)).left + n;
}
function $n(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    It(e, o)
  )), i = o.top + t.scrollTop;
  return {
    x: r,
    y: i
  };
}
function pi(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", s = ue(o), a = t ? Ze(t.floating) : !1;
  if (o === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ie(1);
  const c = ie(0), u = le(o);
  if ((u || !u && !i) && ((Ce(o) !== "body" || Le(s)) && (l = Qe(o)), le(o))) {
    const p = we(o);
    d = Pe(o), c.x = p.x + o.clientLeft, c.y = p.y + o.clientTop;
  }
  const f = s && !u && !i ? $n(s, l, !0) : ie(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + c.x + f.x,
    y: n.y * d.y - l.scrollTop * d.y + c.y + f.y
  };
}
function mi(e) {
  return Array.from(e.getClientRects());
}
function gi(e) {
  const t = ue(e), n = Qe(e), o = e.ownerDocument.body, r = Y(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = Y(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + It(e);
  const a = -n.scrollTop;
  return oe(o).direction === "rtl" && (s += Y(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: a
  };
}
function vi(e, t) {
  const n = Z(e), o = ue(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, a = 0, l = 0;
  if (r) {
    i = r.width, s = r.height;
    const d = qt();
    (!d || d && t === "fixed") && (a = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const yi = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function hi(e, t) {
  const n = we(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = le(e) ? Pe(e) : ie(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = r * i.x, d = o * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: d
  };
}
function Qt(e, t, n) {
  let o;
  if (t === "viewport")
    o = vi(e, n);
  else if (t === "document")
    o = gi(ue(e));
  else if (ne(t))
    o = hi(t, n);
  else {
    const r = Rn(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Ye(o);
}
function qn(e, t) {
  const n = ve(e);
  return n === t || !ne(n) || ke(n) ? !1 : oe(n).position === "fixed" || qn(n, t);
}
function bi(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = qe(e, [], !1).filter((a) => ne(a) && Ce(a) !== "body"), r = null;
  const i = oe(e).position === "fixed";
  let s = i ? ve(e) : e;
  for (; ne(s) && !ke(s); ) {
    const a = oe(s), l = $t(s);
    !l && a.position === "fixed" && (r = null), (i ? !l && !r : !l && a.position === "static" && !!r && yi.has(r.position) || Le(s) && !l && qn(e, s)) ? o = o.filter((c) => c !== s) : r = a, s = ve(s);
  }
  return t.set(e, o), o;
}
function wi(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? Ze(t) ? [] : bi(t, this._c) : [].concat(n), o], a = s[0], l = s.reduce((d, c) => {
    const u = Qt(t, c, r);
    return d.top = Y(u.top, d.top), d.right = ge(u.right, d.right), d.bottom = ge(u.bottom, d.bottom), d.left = Y(u.left, d.left), d;
  }, Qt(t, a, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function xi(e) {
  const {
    width: t,
    height: n
  } = Dn(e);
  return {
    width: t,
    height: n
  };
}
function Ci(e, t, n) {
  const o = le(t), r = ue(t), i = n === "fixed", s = we(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ie(0);
  function d() {
    l.x = It(r);
  }
  if (o || !o && !i)
    if ((Ce(t) !== "body" || Le(r)) && (a = Qe(t)), o) {
      const p = we(t, !0, i, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else r && d();
  i && !o && r && d();
  const c = r && !o && !i ? $n(r, a) : ie(0), u = s.left + a.scrollLeft - l.x - c.x, f = s.top + a.scrollTop - l.y - c.y;
  return {
    x: u,
    y: f,
    width: s.width,
    height: s.height
  };
}
function at(e) {
  return oe(e).position === "static";
}
function en(e, t) {
  if (!le(e) || oe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ue(e) === n && (n = n.ownerDocument.body), n;
}
function Bn(e, t) {
  const n = Z(e);
  if (Ze(e))
    return n;
  if (!le(e)) {
    let r = ve(e);
    for (; r && !ke(r); ) {
      if (ne(r) && !at(r))
        return r;
      r = ve(r);
    }
    return n;
  }
  let o = en(e, t);
  for (; o && ri(o) && at(o); )
    o = en(o, t);
  return o && ke(o) && at(o) && !$t(o) ? n : o || ui(e) || n;
}
const _i = async function(e) {
  const t = this.getOffsetParent || Bn, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Ci(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Si(e) {
  return oe(e).direction === "rtl";
}
const Oi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pi,
  getDocumentElement: ue,
  getClippingRect: wi,
  getOffsetParent: Bn,
  getElementRects: _i,
  getClientRects: mi,
  getDimensions: xi,
  getScale: Pe,
  isElement: ne,
  isRTL: Si
};
function In(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ai(e, t) {
  let n = null, o;
  const r = ue(e);
  function i() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
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
    const m = We(u), v = We(r.clientWidth - (c + f)), b = We(r.clientHeight - (u + p)), y = We(c), w = {
      rootMargin: -m + "px " + -v + "px " + -b + "px " + -y + "px",
      threshold: Y(0, ge(1, l)) || 1
    };
    let h = !0;
    function _(A) {
      const k = A[0].intersectionRatio;
      if (k !== l) {
        if (!h)
          return s();
        k ? s(!1, k) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !In(d, e.getBoundingClientRect()) && s(), h = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...w,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, w);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Pi(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, d = Bt(e), c = r || i ? [...d ? qe(d) : [], ...qe(t)] : [];
  c.forEach((y) => {
    r && y.addEventListener("scroll", n, {
      passive: !0
    }), i && y.addEventListener("resize", n);
  });
  const u = d && a ? Ai(d, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === d && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var w;
      (w = p) == null || w.observe(t);
    })), n();
  }), d && !l && p.observe(d), p.observe(t));
  let m, v = l ? we(e) : null;
  l && b();
  function b() {
    const y = we(e);
    v && !In(v, y) && n(), v = y, m = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    c.forEach((x) => {
      r && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), u == null || u(), (y = p) == null || y.disconnect(), p = null, l && cancelAnimationFrame(m);
  };
}
const Ei = Zr, ki = Qr, tn = Yr, Mi = ti, Ti = Xr, Di = Kr, Ri = ei, $i = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Oi,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return Ur(e, t, {
    ...r,
    platform: i
  });
};
function qi(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function vt(e) {
  if (qi(e)) {
    const t = e.$el;
    return Rt(t) && Ce(t) === "#comment" ? null : t;
  }
  return e;
}
function Oe(e) {
  return typeof e == "function" ? e() : g(e);
}
function Bi(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = vt(Oe(e.element));
      return n == null ? {} : Di({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Fn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function nn(e, t) {
  const n = Fn(e);
  return Math.round(t * n) / n;
}
function Ii(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, r = O(() => {
    var k;
    return (k = Oe(n.open)) != null ? k : !0;
  }), i = O(() => Oe(n.middleware)), s = O(() => {
    var k;
    return (k = Oe(n.placement)) != null ? k : "bottom";
  }), a = O(() => {
    var k;
    return (k = Oe(n.strategy)) != null ? k : "absolute";
  }), l = O(() => {
    var k;
    return (k = Oe(n.transform)) != null ? k : !0;
  }), d = O(() => vt(e.value)), c = O(() => vt(t.value)), u = E(0), f = E(0), p = E(a.value), m = E(s.value), v = un({}), b = E(!1), y = O(() => {
    const k = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return k;
    const B = nn(c.value, u.value), C = nn(c.value, f.value);
    return l.value ? {
      ...k,
      transform: "translate(" + B + "px, " + C + "px)",
      ...Fn(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: B + "px",
      top: C + "px"
    };
  });
  let x;
  function w() {
    if (d.value == null || c.value == null)
      return;
    const k = r.value;
    $i(d.value, c.value, {
      middleware: i.value,
      placement: s.value,
      strategy: a.value
    }).then((B) => {
      u.value = B.x, f.value = B.y, p.value = B.strategy, m.value = B.placement, v.value = B.middlewareData, b.value = k !== !1;
    });
  }
  function h() {
    typeof x == "function" && (x(), x = void 0);
  }
  function _() {
    if (h(), o === void 0) {
      w();
      return;
    }
    if (d.value != null && c.value != null) {
      x = o(d.value, c.value, w);
      return;
    }
  }
  function A() {
    r.value || (b.value = !1);
  }
  return K([i, s, a, r], w, {
    flush: "sync"
  }), K([d, c], _, {
    flush: "sync"
  }), K(r, A, {
    flush: "sync"
  }), an() && ln(h), {
    x: _e(u),
    y: _e(f),
    strategy: _e(p),
    placement: _e(m),
    middlewareData: _e(v),
    isPositioned: _e(b),
    floatingStyles: y,
    update: w
  };
}
const Ln = {
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
}, [Ea, Fi] = he("PopperContent");
var Li = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ pn({
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
  }, { ...Ln }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = En(), { forwardRef: i, currentElement: s } = ee(), a = E(), l = E(), { width: d, height: c } = Uo(l), u = O(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), f = O(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...n.collisionPadding
    }), p = O(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = O(() => ({
      padding: f.value,
      boundary: p.value.filter($r),
      altBoundary: p.value.length > 0
    })), v = O(() => ({
      mainAxis: n.sideFlip,
      crossAxis: n.alignFlip
    })), b = xo(() => [
      Ei({
        mainAxis: n.sideOffset + c.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && tn({
        ...m.value,
        ...v.value
      }),
      n.avoidCollisions && ki({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? Ri() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && tn({
        ...m.value,
        ...v.value
      }),
      Mi({
        ...m.value,
        apply: ({ elements: D, rects: H, availableWidth: F, availableHeight: N }) => {
          const { width: z, height: V } = H.reference, G = D.floating.style;
          G.setProperty("--reka-popper-available-width", `${F}px`), G.setProperty("--reka-popper-available-height", `${N}px`), G.setProperty("--reka-popper-anchor-width", `${z}px`), G.setProperty("--reka-popper-anchor-height", `${V}px`);
        }
      }),
      l.value && Bi({
        element: l.value,
        padding: n.arrowPadding
      }),
      qr({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      n.hideWhenDetached && Ti({
        strategy: "referenceHidden",
        ...m.value
      })
    ]), y = O(() => n.reference ?? r.anchor.value), { floatingStyles: x, placement: w, isPositioned: h, middlewareData: _ } = Ii(y, a, {
      strategy: n.positionStrategy,
      placement: u,
      whileElementsMounted: (...D) => Pi(...D, {
        layoutShift: !n.disableUpdateOnLayoutShift,
        animationFrame: n.updatePositionStrategy === "always"
      }),
      middleware: b
    }), A = O(() => ft(w.value)[0]), k = O(() => ft(w.value)[1]);
    fn(() => {
      h.value && o("placed");
    });
    const B = O(() => {
      var D;
      return ((D = _.value.arrow) == null ? void 0 : D.centerOffset) !== 0;
    }), C = E("");
    ae(() => {
      s.value && (C.value = window.getComputedStyle(s.value).zIndex);
    });
    const M = O(() => {
      var D;
      return ((D = _.value.arrow) == null ? void 0 : D.x) ?? 0;
    }), R = O(() => {
      var D;
      return ((D = _.value.arrow) == null ? void 0 : D.y) ?? 0;
    });
    return Fi({
      placedSide: A,
      onArrowChange: (D) => l.value = D,
      arrowX: M,
      arrowY: R,
      shouldHideArrow: B
    }), (D, H) => {
      var F, N, z;
      return S(), T("div", {
        ref_key: "floatingRef",
        ref: a,
        "data-reka-popper-content-wrapper": "",
        style: Ct({
          ...g(x),
          transform: g(h) ? g(x).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: C.value,
          "--reka-popper-transform-origin": [(F = g(_).transformOrigin) == null ? void 0 : F.x, (N = g(_).transformOrigin) == null ? void 0 : N.y].join(" "),
          ...((z = g(_).hide) == null ? void 0 : z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [U(g(xe), se({ ref: g(i) }, D.$attrs, {
        "as-child": n.asChild,
        as: D.as,
        "data-side": A.value,
        "data-align": k.value,
        style: { animation: g(h) ? void 0 : "none" }
      }), {
        default: $(() => [I(D.$slots, "default")]),
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
}), Ni = Li, ji = /* @__PURE__ */ q({
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
    return (n, o) => (S(), L(g(Rr), He(mn(t)), {
      default: $(() => [I(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), zi = ji;
function Vi() {
  const e = E(!1);
  return Ie(() => {
    Ge("keydown", () => {
      e.value = !0;
    }, {
      capture: !0,
      passive: !0
    }), Ge(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, {
      capture: !0,
      passive: !0
    });
  }), e;
}
const Wi = bn(Vi), [et, Hi] = he(["MenuRoot", "MenuSub"], "MenuContext"), [Ft, Gi] = he("MenuRoot");
var Ui = /* @__PURE__ */ q({
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
    const n = e, o = t, { modal: r, dir: i } = Fe(n), s = kt(i), a = Et(n, "open", o), l = E(), d = Wi();
    return Hi({
      open: a,
      onOpenChange: (c) => {
        a.value = c;
      },
      content: l,
      onContentChange: (c) => {
        l.value = c;
      }
    }), Gi({
      onClose: () => {
        a.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: s,
      modal: r
    }), (c, u) => (S(), L(g(Tr), null, {
      default: $(() => [I(c.$slots, "default")]),
      _: 3
    }));
  }
}), Ki = Ui;
const [Nn, Yi] = he("MenuContent");
var Xi = /* @__PURE__ */ q({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ pn({
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
  }, { ...Ln }),
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
    const n = e, o = t, r = et(), i = Ft(), { trapFocus: s, disableOutsidePointerEvents: a, loop: l } = Fe(n);
    Lo(), Io(a.value);
    const d = E(""), c = E(0), u = E(0), f = E(null), p = E("right"), m = E(0), v = E(null), b = E(), { forwardRef: y, currentElement: x } = ee(), { handleTypeaheadSearch: w } = Yo();
    K(x, (C) => {
      r.onContentChange(C);
    }), xt(() => {
      window.clearTimeout(c.value);
    });
    function h(C) {
      var R, D;
      return p.value === ((R = f.value) == null ? void 0 : R.side) && Cr(C, (D = f.value) == null ? void 0 : D.area);
    }
    async function _(C) {
      var M;
      o("openAutoFocus", C), !C.defaultPrevented && (C.preventDefault(), (M = x.value) == null || M.focus({ preventScroll: !0 }));
    }
    function A(C) {
      var V;
      if (C.defaultPrevented) return;
      const R = C.target.closest("[data-reka-menu-content]") === C.currentTarget, D = C.ctrlKey || C.altKey || C.metaKey, H = C.key.length === 1, F = wo(C, Q(), x.value, {
        loop: l.value,
        arrowKeyOptions: "vertical",
        dir: i == null ? void 0 : i.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (F) return F == null ? void 0 : F.focus();
      if (C.code === "Space") return;
      const N = ((V = b.value) == null ? void 0 : V.getItems()) ?? [];
      if (R && (C.key === "Tab" && C.preventDefault(), !D && H && w(C.key, N)), C.target !== x.value || !hr.includes(C.key)) return;
      C.preventDefault();
      const z = [...N.map((G) => G.ref)];
      An.includes(C.key) && z.reverse(), wr(z);
    }
    function k(C) {
      var M, R;
      (R = (M = C == null ? void 0 : C.currentTarget) == null ? void 0 : M.contains) != null && R.call(M, C.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function B(C) {
      var D;
      if (!dt(C)) return;
      const M = C.target, R = m.value !== C.clientX;
      if ((D = C == null ? void 0 : C.currentTarget) != null && D.contains(M) && R) {
        const H = C.clientX > m.value ? "right" : "left";
        p.value = H, m.value = C.clientX;
      }
    }
    return Yi({
      onItemEnter: (C) => !!h(C),
      onItemLeave: (C) => {
        var M;
        h(C) || ((M = x.value) == null || M.focus(), v.value = null);
      },
      onTriggerLeave: (C) => !!h(C),
      searchRef: d,
      pointerGraceTimerRef: u,
      onPointerGraceIntentChange: (C) => {
        f.value = C;
      }
    }), (C, M) => (S(), L(g(gr), {
      "as-child": "",
      trapped: g(s),
      onMountAutoFocus: _,
      onUnmountAutoFocus: M[7] || (M[7] = (R) => o("closeAutoFocus", R))
    }, {
      default: $(() => [U(g(sr), {
        "as-child": "",
        "disable-outside-pointer-events": g(a),
        onEscapeKeyDown: M[2] || (M[2] = (R) => o("escapeKeyDown", R)),
        onPointerDownOutside: M[3] || (M[3] = (R) => o("pointerDownOutside", R)),
        onFocusOutside: M[4] || (M[4] = (R) => o("focusOutside", R)),
        onInteractOutside: M[5] || (M[5] = (R) => o("interactOutside", R)),
        onDismiss: M[6] || (M[6] = (R) => o("dismiss"))
      }, {
        default: $(() => [U(g(Er), {
          ref_key: "rovingFocusGroupRef",
          ref: b,
          "current-tab-stop-id": v.value,
          "onUpdate:currentTabStopId": M[0] || (M[0] = (R) => v.value = R),
          "as-child": "",
          orientation: "vertical",
          dir: g(i).dir.value,
          loop: g(l),
          onEntryFocus: M[1] || (M[1] = (R) => {
            o("entryFocus", R), g(i).isUsingKeyboardRef.value || R.preventDefault();
          })
        }, {
          default: $(() => [U(g(Ni), {
            ref: g(y),
            role: "menu",
            as: C.as,
            "as-child": C.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": g(br)(g(r).open.value),
            dir: g(i).dir.value,
            side: C.side,
            "side-offset": C.sideOffset,
            align: C.align,
            "align-offset": C.alignOffset,
            "avoid-collisions": C.avoidCollisions,
            "collision-boundary": C.collisionBoundary,
            "collision-padding": C.collisionPadding,
            "arrow-padding": C.arrowPadding,
            "prioritize-position": C.prioritizePosition,
            "position-strategy": C.positionStrategy,
            "update-position-strategy": C.updatePositionStrategy,
            sticky: C.sticky,
            "hide-when-detached": C.hideWhenDetached,
            reference: C.reference,
            onKeydown: A,
            onBlur: k,
            onPointermove: B
          }, {
            default: $(() => [I(C.$slots, "default")]),
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
}), jn = Xi, Ji = /* @__PURE__ */ q({
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
    const t = e, n = Nn(), { forwardRef: o } = ee(), { CollectionItem: r } = Pn(), i = E(!1);
    async function s(l) {
      if (!l.defaultPrevented && dt(l)) {
        if (t.disabled) n.onItemLeave(l);
        else if (!n.onItemEnter(l)) {
          const c = l.currentTarget;
          c == null || c.focus({ preventScroll: !0 });
        }
      }
    }
    async function a(l) {
      await J(), !l.defaultPrevented && dt(l) && n.onItemLeave(l);
    }
    return (l, d) => (S(), L(g(r), { value: { textValue: l.textValue } }, {
      default: $(() => [U(g(xe), se({
        ref: g(o),
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
          await J(), !(c.defaultPrevented || l.disabled) && (i.value = !0);
        }),
        onBlur: d[1] || (d[1] = async (c) => {
          await J(), !c.defaultPrevented && (i.value = !1);
        })
      }), {
        default: $(() => [I(l.$slots, "default")]),
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
}), Zi = Ji, Qi = /* @__PURE__ */ q({
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
    const n = e, o = t, { forwardRef: r, currentElement: i } = ee(), s = Ft(), a = Nn(), l = E(!1);
    async function d() {
      const c = i.value;
      if (!n.disabled && c) {
        const u = new CustomEvent(vr, {
          bubbles: !0,
          cancelable: !0
        });
        o("select", u), await J(), u.defaultPrevented ? l.value = !1 : s.onClose();
      }
    }
    return (c, u) => (S(), L(Zi, se(n, {
      ref: g(r),
      onClick: d,
      onPointerdown: u[0] || (u[0] = () => {
        l.value = !0;
      }),
      onPointerup: u[1] || (u[1] = async (f) => {
        var p;
        await J(), !f.defaultPrevented && (l.value || (p = f.currentTarget) == null || p.click());
      }),
      onKeydown: u[2] || (u[2] = async (f) => {
        const p = g(a).searchRef.value !== "";
        c.disabled || p && f.key === " " || g(ct).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: $(() => [I(c.$slots, "default")]),
      _: 3
    }, 16));
  }
}), es = Qi, ts = /* @__PURE__ */ q({
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
    const n = e, o = t, r = Xe(n, o), i = et(), { forwardRef: s, currentElement: a } = ee();
    return Ho(a), (l, d) => (S(), L(jn, se(g(r), {
      ref: g(s),
      "trap-focus": g(i).open.value,
      "disable-outside-pointer-events": g(i).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => g(i).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ee((c) => o("focusOutside", c), ["prevent"]))
    }), {
      default: $(() => [I(l.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), ns = ts, os = /* @__PURE__ */ q({
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
    const r = Xe(e, t), i = et();
    return (s, a) => (S(), L(jn, se(g(r), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: a[0] || (a[0] = (l) => g(i).onOpenChange(!1))
    }), {
      default: $(() => [I(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), rs = os, is = /* @__PURE__ */ q({
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
    const r = Xe(e, t), i = et(), s = Ft();
    return (a, l) => (S(), L(g(Qo), { present: a.forceMount || g(i).open.value }, {
      default: $(() => [g(s).modal.value ? (S(), L(ns, He(se({ key: 0 }, {
        ...a.$attrs,
        ...g(r)
      })), {
        default: $(() => [I(a.$slots, "default")]),
        _: 3
      }, 16)) : (S(), L(rs, He(se({ key: 1 }, {
        ...a.$attrs,
        ...g(r)
      })), {
        default: $(() => [I(a.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), ss = is;
const [zn, as] = he("DropdownMenuRoot");
var ls = /* @__PURE__ */ q({
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
    const n = e, o = t;
    ee();
    const r = Et(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = E(), { modal: s, dir: a } = Fe(n), l = kt(a);
    return as({
      open: r,
      onOpenChange: (d) => {
        r.value = d;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerId: "",
      triggerElement: i,
      contentId: "",
      modal: s,
      dir: l
    }), (d, c) => (S(), L(g(Ki), {
      open: g(r),
      "onUpdate:open": c[0] || (c[0] = (u) => rn(r) ? r.value = u : null),
      dir: g(l),
      modal: g(s)
    }, {
      default: $(() => [I(d.$slots, "default", { open: g(r) })]),
      _: 3
    }, 8, [
      "open",
      "dir",
      "modal"
    ]));
  }
}), us = ls, cs = /* @__PURE__ */ q({
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
    const r = Xe(e, t);
    ee();
    const i = zn(), s = E(!1);
    function a(l) {
      l.defaultPrevented || (s.value || setTimeout(() => {
        var d;
        (d = i.triggerElement.value) == null || d.focus();
      }, 0), s.value = !1, l.preventDefault());
    }
    return i.contentId || (i.contentId = _n(void 0, "reka-dropdown-menu-content")), (l, d) => {
      var c;
      return S(), L(g(ss), se(g(r), {
        id: g(i).contentId,
        "aria-labelledby": (c = g(i)) == null ? void 0 : c.triggerId,
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
          const f = u.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0, m = f.button === 2 || p;
          (!g(i).modal.value || m) && (s.value = !0), (v = g(i).triggerElement.value) != null && v.contains(u.target) && u.preventDefault();
        })
      }), {
        default: $(() => [I(l.$slots, "default")]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), ds = cs, fs = /* @__PURE__ */ q({
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
    const n = e, r = xn(t);
    return ee(), (i, s) => (S(), L(g(es), He(mn({
      ...n,
      ...g(r)
    })), {
      default: $(() => [I(i.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ps = fs, ms = /* @__PURE__ */ q({
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
    const t = e, n = zn(), { forwardRef: o, currentElement: r } = ee();
    return Ie(() => {
      n.triggerElement = r;
    }), n.triggerId || (n.triggerId = _n(void 0, "reka-dropdown-menu-trigger")), (i, s) => (S(), L(g(zi), { "as-child": "" }, {
      default: $(() => [U(g(xe), {
        id: g(n).triggerId,
        ref: g(o),
        type: i.as === "button" ? "button" : void 0,
        "as-child": t.asChild,
        as: i.as,
        "aria-haspopup": "menu",
        "aria-expanded": g(n).open.value,
        "aria-controls": g(n).open.value ? g(n).contentId : void 0,
        "data-disabled": i.disabled ? "" : void 0,
        disabled: i.disabled,
        "data-state": g(n).open.value ? "open" : "closed",
        onClick: s[0] || (s[0] = async (a) => {
          var l;
          !i.disabled && a.button === 0 && a.ctrlKey === !1 && ((l = g(n)) == null || l.onOpenToggle(), await J(), g(n).open.value && a.preventDefault());
        }),
        onKeydown: s[1] || (s[1] = _t((a) => {
          i.disabled || (["Enter", " "].includes(a.key) && g(n).onOpenToggle(), a.key === "ArrowDown" && g(n).onOpenChange(!0), [
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
        default: $(() => [I(i.$slots, "default")]),
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
}), gs = ms;
const vs = { class: "relative" }, ys = { class: "flex items-center" }, hs = ["src", "alt"], bs = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  class: "h-5 w-5 text-current"
}, ws = { class: "divide-y divide-gray-300" }, xs = ["src", "alt"], Cs = { class: "relative flex-1" }, _s = ["maxlength"], Ss = { key: 0 }, Os = {
  key: 0,
  class: "mb-2 mt-1 text-xs text-red-600"
}, As = /* @__PURE__ */ q({
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
    ], o = e, { value: r, errorMessage: i, handleBlur: s, meta: a } = vn(
      o.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !1
      }
    ), l = E(n[0]), d = yt(), c = O(() => "required" in d), u = E(""), f = O(() => l.value.maxLength + 1), p = t;
    function m(h) {
      const _ = h.replace(/[^0-9]/gi, "").slice(0, l.value.maxLength), A = _.startsWith("0") ? _.slice(1) : _;
      u.value = A.slice(0, l.value.maxLength), r.value = b.value, p("update:modelValue", b.value);
    }
    const v = O({
      get() {
        return u.value ? u.value.startsWith("0") ? u.value : `0${u.value}` : "";
      },
      set(h) {
        m(h);
      }
    }), b = O(() => u.value ? `${l.value.prefix}${u.value}` : ""), y = E(null), x = ye(), w = O(() => {
      var h, _;
      return ((_ = (h = x == null ? void 0 : x.appContext) == null ? void 0 : h.components) == null ? void 0 : _.Icon) ?? null;
    });
    return K(
      () => r.value,
      (h) => {
        if (!h || typeof h != "string") return;
        const _ = n.find((k) => h.startsWith(k.prefix));
        _ && (l.value = _);
        const A = l.value.prefix;
        u.value = h.startsWith(A) ? h.slice(A.length).replace(/\D/g, "") : h.replace(/\D/g, ""), r.value = b.value;
      },
      { immediate: !0 }
    ), K(
      () => l.value,
      () => {
        u.value.length > l.value.maxLength && (u.value = u.value.slice(
          0,
          l.value.maxLength
        ), r.value = u.value), p("update:modelValue", b.value);
      }
    ), (h, _) => (S(), T("div", vs, [
      P("div", ys, [
        U(g(us), null, {
          default: $(() => [
            U(g(gs), { "as-child": "" }, {
              default: $(() => [
                P("button", {
                  type: "button",
                  class: j([
                    "flex h-10 w-28 items-center gap-1 rounded-l-md border border-r-0 px-4 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none",
                    g(a).valid === !1 && g(a).touched ? "border-red-500 text-red-500" : "border-gray-700 text-gray-900"
                  ])
                }, [
                  P("img", {
                    class: "h-5",
                    src: `https://flagsapi.com/${l.value.code}/flat/64.png`,
                    alt: l.value.code,
                    loading: "lazy"
                  }, null, 8, hs),
                  De(" " + te(l.value.prefix) + " ", 1),
                  w.value ? (S(), L(eo(w.value), {
                    key: 0,
                    name: "mdi:chevron-down",
                    class: "h-5 w-5 text-current"
                  })) : (S(), T("svg", bs, _[2] || (_[2] = [
                    P("path", {
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
            U(g(ds), {
              align: "start",
              side: "bottom",
              class: "z-10 mt-1 h-56 w-64 overflow-auto rounded border border-gray-300 bg-white shadow-lg outline-none"
            }, {
              default: $(() => [
                P("div", ws, [
                  (S(), T(Re, null, gn(n, (A) => U(g(ps), {
                    key: A.code,
                    class: "flex cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 outline-none data-[highlighted]:bg-gray-100",
                    onSelect: (k) => l.value = A
                  }, {
                    default: $(() => [
                      P("img", {
                        class: "h-5",
                        src: `https://flagsapi.com/${A.code}/flat/64.png`,
                        alt: A.country,
                        loading: "lazy"
                      }, null, 8, xs),
                      P("span", null, te(A.country) + " (" + te(A.prefix) + ")", 1)
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
        P("div", Cs, [
          ht(P("input", {
            type: "tel",
            onBlur: _[0] || (_[0] = (A) => g(s)(A, !0)),
            "onUpdate:modelValue": _[1] || (_[1] = (A) => v.value = A),
            ref_key: "inputRef",
            ref: y,
            maxlength: f.value,
            class: j([
              "peer h-10 w-full rounded-r-md border bg-transparent px-3 py-2.5 font-sans text-sm font-normal transition-all placeholder-shown:border focus:border-2 focus:outline-0",
              g(a).valid === !1 && g(a).touched ? "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent "
            ]),
            placeholder: " "
          }, null, 42, _s), [
            [to, v.value]
          ]),
          e.label ? (S(), T("label", {
            key: 0,
            class: j([
              "before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight",
              g(a).valid === !1 && g(a).touched ? "text-red-500 before:border-red-500 after:border-red-500  peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-gray-700 before:border-gray-700 after:border-gray-700  peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
            ])
          }, [
            De(te(e.label) + " ", 1),
            c.value ? (S(), T("span", Ss, "  *")) : W("", !0)
          ], 2)) : W("", !0)
        ])
      ]),
      g(a).touched && g(i) ? (S(), T("div", Os, te(g(i)), 1)) : W("", !0)
    ]));
  }
}), Ps = ["onKeydown", "aria-sort"], Es = {
  key: 0,
  class: "inline-block mr-1 h-3 w-3 border-2 border-t-transparent border-gray-400 rounded-full animate-spin",
  "aria-hidden": "true"
}, ks = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": ""
}, Vn = /* @__PURE__ */ q({
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
    const n = e, o = ye(), r = t, i = O(() => n.align === "center" ? "justify-center" : n.align === "right" ? "justify-end" : "justify-start"), s = O(() => {
      var u;
      const c = (u = o == null ? void 0 : o.vnode) == null ? void 0 : u.props;
      return !!(c && (c.onSort || c["on-sort"]));
    }), a = O(() => n.ariaSort === "ascending"), l = O(() => n.ariaSort === "descending");
    function d() {
      s.value && r("sort", n.columnKey || void 0);
    }
    return (c, u) => (S(), T("th", {
      class: j([
        "px-4 py-2 text-sm font-semibold select-none",
        e.className,
        {
          "text-blue-600": a.value || l.value,
          "text-gray-500": !(a.value || l.value),
          "opacity-60 pointer-events-none": n.loading,
          "cursor-pointer select-none": s.value
        }
      ]),
      style: Ct(e.width ? { width: e.width } : void 0),
      onClick: d,
      onKeydown: _t(Ee(d, ["prevent"]), ["enter"]),
      role: "columnheader",
      "aria-sort": e.ariaSort || "none",
      tabindex: "0"
    }, [
      P("div", {
        class: j(["flex items-center gap-2", i.value])
      }, [
        I(c.$slots, "default"),
        s.value || n.loading ? (S(), T(Re, { key: 0 }, [
          n.loading ? (S(), T("span", Es)) : (S(), T("svg", ks, [
            P("path", {
              class: j(a.value ? "text-blue-600" : "text-gray-500"),
              d: "M7 10l5-5 5 5",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 2),
            P("path", {
              class: j(l.value ? "text-blue-600" : "text-gray-500"),
              d: "M7 14l5 5 5-5",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 2)
          ]))
        ], 64)) : W("", !0)
      ], 2)
    ], 46, Ps));
  }
}), Ms = { key: 0 }, Ts = ["checked"], Ds = /* @__PURE__ */ q({
  __name: "PMGTableHeaderSelect",
  setup(e) {
    const t = Be("pmgTable", null);
    function n(o) {
      const r = o.target.checked;
      t != null && t.selectAll && t.selectAll(r);
    }
    return (o, r) => {
      var i, s;
      return (i = g(t)) != null && i.selectable ? (S(), T("div", Ms, [
        P("input", {
          type: "checkbox",
          checked: (s = g(t)) == null ? void 0 : s.allSelected,
          onChange: n,
          "aria-label": "Select all rows"
        }, null, 40, Ts)
      ])) : W("", !0);
    };
  }
}), Rs = /* @__PURE__ */ q({
  name: "PMGTableHeader",
  __name: "PMGTableHeader",
  setup(e) {
    const t = Be("pmgTable", null), n = yt(), o = O(() => {
      const r = [
        "border-b border-pmg-100",
        n.class ? n.class : "bg-gray-50"
      ];
      return t && t.sticky && r.push("sticky w-full top-0 z-[2] shadow-sm"), r;
    });
    return (r, i) => {
      var s;
      return S(), T("thead", {
        class: j(o.value)
      }, [
        P("tr", null, [
          (s = g(t)) != null && s.selectable ? (S(), L(Vn, {
            key: 0,
            class: "w-16"
          }, {
            default: $(() => [
              U(Ds)
            ]),
            _: 1
          })) : W("", !0),
          I(r.$slots, "default")
        ])
      ], 2);
    };
  }
}), $s = ["onKeydown"], qs = {
  key: 0,
  class: "px-4 py-2"
}, Bs = ["checked", "aria-label"], Is = /* @__PURE__ */ q({
  __name: "PMGTableRow",
  props: {
    className: { type: String, default: "" },
    item: { type: Object, default: null },
    rowKey: { type: String, default: "id" }
  },
  emits: ["row-click"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Be("pmgTable", null), i = O(
      () => n.item ? n.item[n.rowKey] : void 0
    );
    Ie(() => {
      r && r.registerRow && i.value != null && r.registerRow(i.value);
    }), wt(() => {
      r && r.unregisterRow && i.value != null && r.unregisterRow(i.value);
    });
    const s = O(() => r && r.isRowSelected ? r.isRowSelected(i.value) : !1);
    function a() {
      !r || !i.value || r.toggleRowSelection && r.toggleRowSelection(i.value);
    }
    function l() {
      o("row-click", n.item);
    }
    return (d, c) => {
      var u;
      return S(), T("tr", {
        class: j(["border-b border-pmg-100", e.className]),
        onClick: l,
        role: "row",
        tabindex: "0",
        onKeydown: _t(Ee(l, ["prevent"]), ["enter"])
      }, [
        (u = g(r)) != null && u.selectable ? (S(), T("td", qs, [
          P("input", {
            type: "checkbox",
            checked: s.value,
            onChange: Ee(a, ["stop", "prevent"]),
            "aria-label": `Select row ${i.value}`
          }, null, 40, Bs)
        ])) : W("", !0),
        I(d.$slots, "default")
      ], 42, $s);
    };
  }
}), Fs = ["colspan"], Ls = /* @__PURE__ */ q({
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
    return (o, r) => (S(), T("td", {
      class: j(["p-4 text-sm text-gray-700", e.className]),
      colspan: e.colspan
    }, [
      P("div", {
        class: j(["flex items-center", n.value])
      }, [
        I(o.$slots, "default")
      ], 2)
    ], 10, Fs));
  }
}), Ns = /* @__PURE__ */ q({
  __name: "PMGTableInfinite",
  props: {
    rootSelector: { type: String, default: "" },
    rootMargin: { type: String, default: "0px" },
    threshold: { type: [Number, Array], default: 0.1 },
    visible: { type: Boolean, default: !1 }
  },
  emits: ["in-view"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = E(null);
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
      !l && r.value && (l = s(r.value) || null), i = new IntersectionObserver(
        (d) => {
          for (const c of d)
            c.isIntersecting && o("in-view");
        },
        {
          root: l || null,
          rootMargin: n.rootMargin,
          threshold: n.threshold
        }
      ), r.value && i.observe(r.value);
    }
    return Ie(() => a()), wt(() => {
      i && (i.disconnect(), i = null);
    }), (l, d) => ht((S(), T("div", null, [
      P("div", {
        ref_key: "sentinel",
        ref: r,
        class: "pmg-table-skeleton mt-3 px-2"
      }, d[0] || (d[0] = [
        P("div", { class: "animate-pulse space-y-2" }, [
          P("div", { class: "h-6 bg-pmg-50/50 rounded" })
        ], -1)
      ]), 512)
    ], 512)), [
      [no, e.visible]
    ]);
  }
}), js = {
  key: 1,
  class: "pmg-table-empty p-4 text-center text-gray-500"
}, zs = /* @__PURE__ */ q({
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
    const t = e, n = E(/* @__PURE__ */ new Set()), o = E(/* @__PURE__ */ new Set());
    function r(f) {
      f != null && n.value.add(f);
    }
    function i(f) {
      f != null && (n.value.delete(f), o.value.delete(f));
    }
    function s(f) {
      o.value.has(f) ? o.value.delete(f) : o.value.add(f);
    }
    function a(f) {
      return o.value.has(f);
    }
    const l = O(() => {
      const f = Array.from(n.value);
      return f.length > 0 && f.every((p) => o.value.has(p));
    }), d = O(() => n.value.size === 0);
    function c(f) {
      if (f)
        for (const p of n.value) o.value.add(p);
      else
        for (const p of Array.from(n.value))
          o.value.delete(p);
    }
    bt("pmgTable", {
      selectable: t.selectable,
      sticky: t.sticky,
      registerRow: r,
      unregisterRow: i,
      toggleRowSelection: s,
      isRowSelected: a,
      selectAll: c,
      allSelected: l
    });
    function u() {
      try {
        if (!t.infinite) return;
        t.infinite();
      } catch {
      }
    }
    return (f, p) => (S(), T("div", {
      class: j(["w-full", e.wrapperClass, { "overflow-auto": !t.sticky }])
    }, [
      P("table", {
        class: j(["min-w-full border-collapse bg-white", [e.tableClass, { striped: e.striped }]])
      }, [
        I(f.$slots, "default", {}, void 0, !0)
      ], 2),
      t.infinite && t.loading ? (S(), L(Ns, {
        key: 0,
        visible: t.loading,
        onInView: u
      }, null, 8, ["visible"])) : W("", !0),
      d.value && !t.loading ? (S(), T("div", js, [
        I(f.$slots, "empty", {}, () => [
          p[0] || (p[0] = De("No items"))
        ], !0)
      ])) : W("", !0)
    ], 2));
  }
}), Vs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Ws = /* @__PURE__ */ Vs(zs, [["__scopeId", "data-v-11e12522"]]), Hs = /* @__PURE__ */ q({
  __name: "PMGTableBody",
  setup(e) {
    return (t, n) => (S(), T("tbody", null, [
      I(t.$slots, "default")
    ]));
  }
}), Gs = { class: "fixed inset-0 overflow-y-auto" }, Us = { class: "flex min-h-full items-center justify-center p-4" }, Ks = {
  key: 0,
  class: "flex flex-shrink-0 items-center justify-between p-6 pb-0"
}, Ys = { key: 1 }, Xs = {
  key: 1,
  class: "flex-shrink-0 border-t border-gray-200 p-6"
}, Wn = /* @__PURE__ */ q({
  __name: "PMGModal",
  props: {
    open: { type: Boolean },
    title: {},
    size: { default: "md" },
    closable: { type: Boolean, default: !0 },
    overlay: { type: Boolean, default: !0 },
    backdrop: { default: "dark" },
    showCloseButton: { type: Boolean, default: !0 },
    persistent: { type: Boolean, default: !1 }
  },
  emits: ["close", "update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = O(() => ({
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      full: "max-w-full mx-4"
    })[n.size]), i = O(() => ({
      light: "bg-white/80",
      dark: "bg-black/40",
      blur: "bg-black/40 backdrop-blur-sm"
    })[n.backdrop]), s = () => {
      !n.closable && !n.showCloseButton || (o("close"), o("update:open", !1));
    };
    return (a, l) => (S(), L(g(oo), {
      appear: "",
      show: a.open,
      as: "template"
    }, {
      default: $(() => [
        U(g(ro), {
          as: "div",
          class: "relative z-50",
          onClose: l[0] || (l[0] = (d) => a.persistent ? () => {
          } : s)
        }, {
          default: $(() => [
            a.overlay ? (S(), L(g(Lt), {
              key: 0,
              as: "template",
              enter: "ease-out duration-300",
              "enter-from": "opacity-0",
              "enter-to": "opacity-100",
              leave: "ease-in duration-200",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0"
            }, {
              default: $(() => [
                U(g(io), {
                  class: j(["fixed inset-0 transition-opacity", i.value])
                }, null, 8, ["class"])
              ]),
              _: 1
            })) : W("", !0),
            P("div", Gs, [
              P("div", Us, [
                U(g(Lt), {
                  as: "template",
                  enter: "ease-out duration-300",
                  "enter-from": "opacity-0 scale-95",
                  "enter-to": "opacity-100 scale-100",
                  leave: "ease-in duration-200",
                  "leave-from": "opacity-100 scale-100",
                  "leave-to": "opacity-0 scale-95"
                }, {
                  default: $(() => [
                    U(g(so), {
                      class: j([
                        "flex max-h-[90vh] w-full transform flex-col rounded-xl bg-white shadow-xl transition-all",
                        r.value
                      ])
                    }, {
                      default: $(() => [
                        a.title || a.showCloseButton || a.$slots.header ? (S(), T("div", Ks, [
                          I(a.$slots, "header", {}, () => [
                            a.title ? (S(), L(g(ao), {
                              key: 0,
                              as: "h3",
                              class: "text-sm font-medium leading-6 text-gray-500"
                            }, {
                              default: $(() => [
                                De(te(a.title), 1)
                              ]),
                              _: 1
                            })) : (S(), T("div", Ys))
                          ]),
                          a.showCloseButton && a.closable ? (S(), T("button", {
                            key: 0,
                            onClick: s,
                            class: "flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500",
                            "aria-label": "Close modal"
                          }, l[1] || (l[1] = [
                            P("svg", {
                              class: "h-5 w-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              P("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            ], -1)
                          ]))) : W("", !0)
                        ])) : W("", !0),
                        P("div", {
                          class: j(["flex-1 overflow-y-auto p-6", {
                            "pt-6": !a.title && !a.showCloseButton && !a.$slots.header,
                            "pt-4": a.title || a.showCloseButton || a.$slots.header
                          }])
                        }, [
                          I(a.$slots, "default")
                        ], 2),
                        a.$slots.footer ? (S(), T("div", Xs, [
                          I(a.$slots, "footer")
                        ])) : W("", !0)
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                })
              ])
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["show"]));
  }
}), Js = { key: 1 }, Zs = {
  key: 1,
  class: "relative aspect-video w-full overflow-hidden rounded-lg"
}, Qs = { class: "h-full w-full" }, ea = ["src", "alt"], ta = {
  key: 1,
  class: "flex h-full min-h-0 w-full flex-col gap-1"
}, na = {
  key: 0,
  class: "relative h-full w-full overflow-hidden rounded-lg"
}, oa = { class: "h-full w-full" }, ra = ["src", "alt"], ia = { class: "relative min-h-0 w-full flex-1 overflow-hidden rounded-lg" }, sa = ["src", "alt"], aa = { class: "relative min-h-0 w-full flex-1 overflow-hidden rounded-lg" }, la = ["src", "alt"], ua = {
  key: 2,
  class: "absolute right-2 top-2 z-[1] flex gap-2"
}, ca = { key: 2 }, da = {
  key: 0,
  class: "py-12 text-center text-gray-500"
}, fa = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
}, pa = { class: "relative aspect-video overflow-hidden rounded-lg bg-gray-100" }, ma = ["src", "alt"], ga = ["onClick"], va = { class: "mt-2 space-y-2" }, ya = ["value", "onInput"], ha = ["value", "onInput"], ba = ["value", "onInput"], on = "application/x-tile-image", wa = /* @__PURE__ */ q({
  __name: "Gallery",
  props: {
    node: {},
    editor: {},
    updateAttributes: { type: Function },
    selected: { type: Boolean },
    decorations: {},
    extension: {},
    getPos: { type: Function },
    deleteNode: { type: Function },
    view: {},
    innerDecorations: {},
    HTMLAttributes: {}
  },
  emits: ["openManageModal", "imagesChanged"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = E(!1), i = E(!1), s = O(() => n.node.attrs.images ?? []), a = O(() => {
      var w;
      return ((w = n.editor) == null ? void 0 : w.isEditable) ?? !1;
    }), l = O(() => s.value.length > 0), d = O(() => s.value.length > 3), c = O(() => s.value.length - 3), u = O(() => {
      const w = s.value.length;
      return w === 1 ? "grid-cols-1" : w === 2 ? "grid-cols-2" : "grid grid-cols-[2fr_1fr]";
    }), f = () => {
      a.value && (i.value = !0, o("openManageModal", s.value));
    }, p = () => {
      a.value && o("imagesChanged", s.value);
    }, m = (w, h, _) => {
      n.updateAttributes && n.updateAttributes({
        images: s.value.map(
          (A, k) => k === w ? { ...A, [h]: _ } : A
        )
      });
    }, v = (w) => {
      n.updateAttributes && n.updateAttributes({
        images: s.value.filter((h, _) => _ !== w)
      });
    }, b = (w) => {
      var h;
      a.value && (h = w.dataTransfer) != null && h.types.includes(on) && (w.preventDefault(), w.stopPropagation(), r.value = !0);
    }, y = () => {
      r.value = !1;
    }, x = async (w) => {
      var B;
      if (!a.value) return;
      r.value = !1;
      const h = (B = w.dataTransfer) == null ? void 0 : B.getData(on);
      if (!h) return;
      w.preventDefault(), w.stopPropagation();
      const { id: _, url: A } = JSON.parse(h), k = {
        id: _,
        url: A,
        altText: "",
        caption: "",
        copyRight: ""
      };
      n.updateAttributes && (n.updateAttributes({
        images: [...s.value, k]
      }), o("imagesChanged", [...s.value, k]));
    };
    return (w, h) => (S(), L(g(uo), {
      class: j(["mt-4 box-border w-full max-w-full", {
        "rounded-lg ring-2 ring-blue-400 ring-offset-2": r.value && a.value
      }]),
      onDragover: b,
      onDragleave: y,
      onDrop: x
    }, {
      default: $(() => {
        var _, A, k, B, C, M, R, D, H, F;
        return [
          l.value ? (S(), T("div", Zs, [
            P("div", {
              class: j(["grid h-full w-full gap-1", u.value])
            }, [
              s.value.length >= 1 ? (S(), T("div", {
                key: 0,
                class: j(["relative h-full w-full overflow-hidden rounded-lg", { "cursor-pointer": a.value }])
              }, [
                P("div", Qs, [
                  P("img", {
                    src: (_ = s.value[0]) == null ? void 0 : _.url,
                    alt: ((A = s.value[0]) == null ? void 0 : A.altText) || "Image 1",
                    class: j(["h-full w-full bg-slate-100 transition-transform duration-300", s.value.length === 1 ? "object-contain" : "object-cover"])
                  }, null, 10, ea)
                ])
              ], 2)) : W("", !0),
              s.value.length >= 2 ? (S(), T("div", ta, [
                s.value.length === 2 ? (S(), T("div", na, [
                  P("div", oa, [
                    P("img", {
                      src: (k = s.value[1]) == null ? void 0 : k.url,
                      alt: ((B = s.value[1]) == null ? void 0 : B.altText) || "Image 2",
                      class: "h-full w-full object-cover transition-transform duration-300"
                    }, null, 8, ra)
                  ])
                ])) : (S(), T(Re, { key: 1 }, [
                  P("div", ia, [
                    P("img", {
                      src: (C = s.value[1]) == null ? void 0 : C.url,
                      alt: ((M = s.value[1]) == null ? void 0 : M.altText) || "Image 2",
                      class: "h-full w-full object-cover transition-transform duration-300"
                    }, null, 8, sa)
                  ]),
                  P("div", aa, [
                    P("img", {
                      src: (R = s.value[2]) == null ? void 0 : R.url,
                      alt: ((D = s.value[2]) == null ? void 0 : D.altText) || "Image 3",
                      class: "h-full w-full object-cover transition-transform duration-300"
                    }, null, 8, la),
                    d.value ? (S(), T("div", {
                      key: 0,
                      class: j(["absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-2xl font-bold text-white", {
                        "cursor-pointer transition-opacity duration-300 hover:bg-opacity-50": a.value
                      }]),
                      onClick: h[0] || (h[0] = Ee((N) => a.value && f(), ["stop"]))
                    }, " +" + te(c.value), 3)) : W("", !0)
                  ])
                ], 64))
              ])) : W("", !0),
              a.value ? (S(), T("div", ua, [
                P("button", {
                  onClick: Ee(f, ["stop"]),
                  class: "flex items-center justify-center rounded-full bg-gray-800 bg-opacity-70 p-2 text-sm text-white transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2",
                  title: "Manage images"
                }, h[6] || (h[6] = [
                  P("svg", {
                    class: "size-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    P("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    })
                  ], -1)
                ]))
              ])) : W("", !0)
            ], 2)
          ])) : (S(), T("div", {
            key: 0,
            class: j(["relative flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition-all", { "hover:border-blue-400 hover:bg-blue-50": a.value }])
          }, [
            h[5] || (h[5] = P("div", { class: "absolute left-3 top-3" }, [
              P("span", { class: "inline-block rounded-full bg-gray-800 px-2 py-1 text-xs font-semibold text-white" }, " Fotogallerij ")
            ], -1)),
            P("div", {
              class: j(["flex flex-col items-center justify-center", { "cursor-pointer": a.value }])
            }, [
              a.value ? I(w.$slots, "empty-state", {
                key: 0,
                onSelect: p
              }, () => [
                h[2] || (h[2] = P("svg", {
                  class: "mb-4 size-12 text-gray-400",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  P("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  })
                ], -1)),
                h[3] || (h[3] = P("h3", { class: "mb-2 text-lg font-medium text-gray-700" }, " Nog geen foto's toegevoegd ", -1)),
                P("button", {
                  type: "button",
                  class: "rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  onClick: p
                }, " Selecteer foto's ")
              ]) : (S(), T("div", Js, h[4] || (h[4] = [
                P("svg", {
                  class: "mb-4 size-12 text-gray-400",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  P("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  })
                ], -1),
                P("h3", { class: "mb-2 text-lg font-medium text-gray-700" }, " Nog geen foto's toegevoegd ", -1)
              ])))
            ], 2)
          ], 2)),
          s.value.length === 1 ? (S(), T("small", ca, te(((H = s.value[0]) == null ? void 0 : H.caption) || " ") + " " + te((F = s.value[0]) != null && F.copyRight ? `© ${s.value[0].copyRight}` : ""), 1)) : W("", !0),
          a.value ? (S(), L(Wn, {
            key: 3,
            open: i.value,
            "onUpdate:open": h[1] || (h[1] = (N) => i.value = N),
            size: "4xl",
            title: `Fotogallerij (${s.value.length})`
          }, {
            default: $(() => [
              I(w.$slots, "modal-content", {
                images: s.value,
                updateImage: m,
                removeImage: v
              }, () => [
                s.value.length === 0 ? (S(), T("div", da, " Geen foto's toegevoegd ")) : (S(), T("div", fa, [
                  (S(!0), T(Re, null, gn(s.value, (N, z) => (S(), T("div", {
                    key: N.id,
                    class: "group relative"
                  }, [
                    P("div", pa, [
                      P("img", {
                        src: N.url,
                        alt: N.altText || `Image ${z + 1}`,
                        class: "h-full w-full object-contain"
                      }, null, 8, ma),
                      P("button", {
                        onClick: (V) => v(z),
                        class: "absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white opacity-0 transition-opacity hover:bg-red-700 group-hover:opacity-100",
                        title: "Remove image"
                      }, h[7] || (h[7] = [
                        P("svg", {
                          class: "h-4 w-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          P("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ], -1)
                      ]), 8, ga)
                    ]),
                    P("div", va, [
                      P("input", {
                        value: N.caption,
                        onInput: (V) => m(
                          z,
                          "caption",
                          V.target.value
                        ),
                        placeholder: "Caption (optioneel)",
                        class: "w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      }, null, 40, ya),
                      P("input", {
                        value: N.altText,
                        onInput: (V) => m(
                          z,
                          "altText",
                          V.target.value
                        ),
                        placeholder: "Alt text (optioneel)",
                        class: "w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      }, null, 40, ha),
                      P("input", {
                        value: N.copyRight,
                        onInput: (V) => m(
                          z,
                          "copyRight",
                          V.target.value
                        ),
                        placeholder: "Copyright (optioneel)",
                        class: "w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      }, null, 40, ba)
                    ])
                  ]))), 128))
                ]))
              ])
            ]),
            _: 3
          }, 8, ["open", "title"])) : W("", !0)
        ];
      }),
      _: 3
    }, 8, ["class"]));
  }
}), ka = lo.create({
  name: "gallery",
  group: "block",
  atom: !0,
  selectable: !0,
  draggable: !0,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return {
      images: {
        default: [],
        parseHTML: (e) => {
          const t = e.getAttribute("data-images");
          if (!t) return [];
          try {
            const n = JSON.parse(t);
            return Array.isArray(n) ? n : [];
          } catch {
            return [];
          }
        },
        renderHTML: (e) => e.images ? {
          "data-images": JSON.stringify(e.images)
        } : {}
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-gallery]"
      },
      {
        tag: "div",
        priority: 100,
        getAttrs: (e) => {
          var r;
          if (typeof e == "string") return !1;
          const o = (((r = e.textContent) == null ? void 0 : r.trim()) || "").match(/^##gallery:\s*(\[.*\])$/s);
          if (!o)
            return !1;
          try {
            const i = JSON.parse(o[1]);
            return Array.isArray(i) ? { images: i.map((a) => {
              var c;
              const l = a.image || a.src || a.fileUrl || a.url || "";
              return {
                id: parseInt(
                  ((c = l.match(/\/(\d+)\.[^/]+$/)) == null ? void 0 : c[1]) || "0",
                  10
                ),
                url: l,
                altText: a.alt || "",
                caption: a.caption || "",
                copyRight: a.copyRight || ""
              };
            }) } : !1;
          } catch {
            return !1;
          }
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [
      "div",
      {
        "data-gallery": "true",
        ...this.options.HTMLAttributes,
        ...e
      }
    ];
  },
  addCommands() {
    return {
      setGallery: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: { images: e }
      }),
      updateGallery: (e) => ({ commands: t }) => t.updateAttributes(this.name, { images: e })
    };
  },
  addNodeView() {
    return co(wa);
  }
}), Ma = {
  install(e) {
    e.component("PMGButton", po), e.component("PMGInput", ho), e.component("PMGPhoneInput", As), e.component("PMGTableHeader", Rs), e.component("PMGTableHeaderCell", Vn), e.component("PMGTableRow", Is), e.component("PMGTableCell", Ls), e.component("PMGTable", Ws), e.component("PMGTableBody", Hs), e.component("PMGModal", Wn);
  }
};
export {
  ka as Gallery,
  po as PMGButton,
  ho as PMGInput,
  Wn as PMGModal,
  As as PMGPhoneInput,
  Ws as PMGTable,
  Hs as PMGTableBody,
  Ls as PMGTableCell,
  Rs as PMGTableHeader,
  Vn as PMGTableHeaderCell,
  Is as PMGTableRow,
  Ma as default
};
