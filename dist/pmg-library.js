import { defineComponent as ne, createElementBlock as q, openBlock as G, normalizeClass as je, renderSlot as Qe, createTextVNode as xe, toDisplayString as oe, computed as k, toValue as g, unref as v, onMounted as Ze, getCurrentInstance as B, provide as et, isRef as se, watch as R, onBeforeUnmount as tt, inject as rt, onUnmounted as nt, ref as H, reactive as ot, nextTick as it, mergeModels as lt, useModel as at, useAttrs as ut, withDirectives as st, createCommentVNode as te, createElementVNode as dt, mergeProps as ct, vModelDynamic as ft } from "vue";
const vt = ["disabled"], sr = /* @__PURE__ */ ne({
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
    return ne({
      name: "PMGButton"
    }), (t, r) => (G(), q("button", {
      disabled: e.disabled,
      class: je([
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
      onClick: r[0] || (r[0] = (n) => t.$emit("click"))
    }, [
      Qe(t.$slots, "default", {}, () => [
        xe(oe(e.text), 1)
      ])
    ], 10, vt));
  }
});
/**
  * vee-validate v4.15.1
  * (c) 2025 Abdelrahman Awad
  * @license MIT
  */
function I(e) {
  return typeof e == "function";
}
function mt(e) {
  return e == null;
}
const z = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function Ce(e) {
  return Number(e) >= 0;
}
function bt(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function ht(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let n = 1; n < t.length; n++) {
    if (Ce(t[n])) {
      r += `[${t[n]}]`;
      continue;
    }
    r += `.${t[n]}`;
  }
  return r;
}
const yt = {};
function gt(e) {
  return yt[e];
}
function ye(e, t, r) {
  typeof r.value == "object" && (r.value = P(r.value)), !r.enumerable || r.get || r.set || !r.configurable || !r.writable || t === "__proto__" ? Object.defineProperty(e, t, r) : e[t] = r.value;
}
function P(e) {
  if (typeof e != "object") return e;
  var t = 0, r, n, o, i = Object.prototype.toString.call(e);
  if (i === "[object Object]" ? o = Object.create(e.__proto__ || null) : i === "[object Array]" ? o = Array(e.length) : i === "[object Set]" ? (o = /* @__PURE__ */ new Set(), e.forEach(function(l) {
    o.add(P(l));
  })) : i === "[object Map]" ? (o = /* @__PURE__ */ new Map(), e.forEach(function(l, a) {
    o.set(P(a), P(l));
  })) : i === "[object Date]" ? o = /* @__PURE__ */ new Date(+e) : i === "[object RegExp]" ? o = new RegExp(e.source, e.flags) : i === "[object DataView]" ? o = new e.constructor(P(e.buffer)) : i === "[object ArrayBuffer]" ? o = e.slice(0) : i.slice(-6) === "Array]" && (o = new e.constructor(e)), o) {
    for (n = Object.getOwnPropertySymbols(e); t < n.length; t++)
      ye(o, n[t], Object.getOwnPropertyDescriptor(e, n[t]));
    for (t = 0, n = Object.getOwnPropertyNames(e); t < n.length; t++)
      Object.hasOwnProperty.call(o, r = n[t]) && o[r] === e[r] || ye(o, r, Object.getOwnPropertyDescriptor(e, r));
  }
  return o || e;
}
const Ee = Symbol("vee-validate-form"), pt = Symbol("vee-validate-field-instance"), ge = Symbol("Default empty value"), Ne = typeof window < "u";
function ie(e) {
  return I(e) && !!e.__locatorRef;
}
function W(e) {
  return !!e && I(e.parse) && e.__type === "VVTypedSchema";
}
function le(e) {
  return !!e && I(e.validate);
}
function Ie(e) {
  return e === "checkbox" || e === "radio";
}
function Vt(e) {
  return z(e) || Array.isArray(e);
}
function de(e) {
  return /^\[.+\]$/i.test(e);
}
function Ot(e) {
  return Me(e) && e.multiple;
}
function Me(e) {
  return e.tagName === "SELECT";
}
function St(e) {
  return e ? !!(typeof Event < "u" && I(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function A(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!A(e[n], t[n]))
          return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (n of e.entries())
        if (!t.has(n[0]))
          return !1;
      for (n of e.entries())
        if (!A(n[1], t.get(n[0])))
          return !1;
      return !0;
    }
    if (Ve(e) && Ve(t))
      return !(e.size !== t.size || e.name !== t.name || e.lastModified !== t.lastModified || e.type !== t.type);
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (n of e.entries())
        if (!t.has(n[0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (e = pe(e), t = pe(t), o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      var i = o[n];
      if (!A(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function pe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Ve(e) {
  return Ne ? e instanceof File : !1;
}
function Pe(e) {
  return de(e) ? e.replace(/\[|\]/gi, "") : e;
}
function U(e, t, r) {
  return e ? de(t) ? e[Pe(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((o, i) => Vt(o) && i in o ? o[i] : r, e) : r;
}
function wt(e, t, r) {
  if (de(t)) {
    e[Pe(t)] = r;
    return;
  }
  const n = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let o = e;
  for (let i = 0; i < n.length; i++) {
    if (i === n.length - 1) {
      o[n[i]] = r;
      return;
    }
    (!(n[i] in o) || mt(o[n[i]])) && (o[n[i]] = Ce(n[i + 1]) ? [] : {}), o = o[n[i]];
  }
}
function _e(e) {
  return Object.keys(e);
}
function Fe(e, t = void 0) {
  const r = B();
  return (r == null ? void 0 : r.provides[e]) || rt(e, t);
}
function Oe(e, t, r) {
  if (Array.isArray(e)) {
    const n = [...e], o = n.findIndex((i) => A(i, t));
    return o >= 0 ? n.splice(o, 1) : n.push(t), n;
  }
  return A(e, t) ? r : t;
}
function kt(e, t) {
  let r, n;
  return function(...o) {
    const i = this;
    return r || (r = !0, setTimeout(() => r = !1, t), n = e.apply(i, o)), n;
  };
}
function At(e, t) {
  return z(t) && t.number ? bt(e) : e;
}
function Se(e, t) {
  let r;
  return async function(...o) {
    const i = e(...o);
    r = i;
    const l = await i;
    return i !== r ? l : (r = void 0, t(l, o));
  };
}
function jt(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function re(e) {
  if (De(e))
    return e._value;
}
function De(e) {
  return "_value" in e;
}
function xt(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function Te(e) {
  if (!St(e))
    return e;
  const t = e.target;
  if (Ie(t.type) && De(t))
    return re(t);
  if (t.type === "file" && t.files) {
    const r = Array.from(t.files);
    return t.multiple ? r : r[0];
  }
  if (Ot(t))
    return Array.from(t.options).filter((r) => r.selected && !r.disabled).map(re);
  if (Me(t)) {
    const r = Array.from(t.options).find((n) => n.selected);
    return r ? re(r) : t.value;
  }
  return xt(t);
}
function Re(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? z(e) && e._$$isNormalized ? e : z(e) ? Object.keys(e).reduce((r, n) => {
    const o = Ct(e[n]);
    return e[n] !== !1 && (r[n] = we(o)), r;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((r, n) => {
    const o = Et(n);
    return o.name && (r[o.name] = we(o.params)), r;
  }, t) : t;
}
function Ct(e) {
  return e === !0 ? [] : Array.isArray(e) || z(e) ? e : [e];
}
function we(e) {
  const t = (r) => typeof r == "string" && r[0] === "@" ? Nt(r.slice(1)) : r;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {});
}
const Et = (e) => {
  let t = [];
  const r = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: r, params: t };
};
function Nt(e) {
  const t = (r) => {
    var n;
    return (n = U(r, e)) !== null && n !== void 0 ? n : r[e];
  };
  return t.__locatorRef = e, t;
}
function It(e) {
  return Array.isArray(e) ? e.filter(ie) : _e(e).filter((t) => ie(e[t])).map((t) => e[t]);
}
const Mt = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let Pt = Object.assign({}, Mt);
const _t = () => Pt;
async function Ft(e, t, r = {}) {
  const n = r == null ? void 0 : r.bails, o = {
    name: (r == null ? void 0 : r.name) || "{field}",
    rules: t,
    label: r == null ? void 0 : r.label,
    bails: n ?? !0,
    formData: (r == null ? void 0 : r.values) || {}
  }, i = await Dt(o, e);
  return Object.assign(Object.assign({}, i), { valid: !i.errors.length });
}
async function Dt(e, t) {
  const r = e.rules;
  if (W(r) || le(r))
    return Bt(t, Object.assign(Object.assign({}, e), { rules: r }));
  if (I(r) || Array.isArray(r)) {
    const a = {
      field: e.label || e.name,
      name: e.name,
      label: e.label,
      form: e.formData,
      value: t
    }, s = Array.isArray(r) ? r : [r], d = s.length, h = [];
    for (let m = 0; m < d; m++) {
      const j = s[m], b = await j(t, a);
      if (!(typeof b != "string" && !Array.isArray(b) && b)) {
        if (Array.isArray(b))
          h.push(...b);
        else {
          const _ = typeof b == "string" ? b : Be(a);
          h.push(_);
        }
        if (e.bails)
          return {
            errors: h
          };
      }
    }
    return {
      errors: h
    };
  }
  const n = Object.assign(Object.assign({}, e), { rules: Re(r) }), o = [], i = Object.keys(n.rules), l = i.length;
  for (let a = 0; a < l; a++) {
    const s = i[a], d = await zt(n, t, {
      name: s,
      params: n.rules[s]
    });
    if (d.error && (o.push(d.error), e.bails))
      return {
        errors: o
      };
  }
  return {
    errors: o
  };
}
function Tt(e) {
  return !!e && e.name === "ValidationError";
}
function Rt(e) {
  return {
    __type: "VVTypedSchema",
    async parse(r, n) {
      var o;
      try {
        return {
          output: await e.validate(r, { abortEarly: !1, context: (n == null ? void 0 : n.formData) || {} }),
          errors: []
        };
      } catch (i) {
        if (!Tt(i))
          throw i;
        if (!(!((o = i.inner) === null || o === void 0) && o.length) && i.errors.length)
          return { errors: [{ path: i.path, errors: i.errors }] };
        const l = i.inner.reduce((a, s) => {
          const d = s.path || "";
          return a[d] || (a[d] = { errors: [], path: d }), a[d].errors.push(...s.errors), a;
        }, {});
        return { errors: Object.values(l) };
      }
    }
  };
}
async function Bt(e, t) {
  const n = await (W(t.rules) ? t.rules : Rt(t.rules)).parse(e, { formData: t.formData }), o = [];
  for (const i of n.errors)
    i.errors.length && o.push(...i.errors);
  return {
    value: n.value,
    errors: o
  };
}
async function zt(e, t, r) {
  const n = gt(r.name);
  if (!n)
    throw new Error(`No such validator '${r.name}' exists.`);
  const o = Ut(r.params, e.formData), i = {
    field: e.label || e.name,
    name: e.name,
    label: e.label,
    value: t,
    form: e.formData,
    rule: Object.assign(Object.assign({}, r), { params: o })
  }, l = await n(t, o, i);
  return typeof l == "string" ? {
    error: l
  } : {
    error: l ? void 0 : Be(i)
  };
}
function Be(e) {
  const t = _t().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function Ut(e, t) {
  const r = (n) => ie(n) ? n(t) : n;
  return Array.isArray(e) ? e.map(r) : Object.keys(e).reduce((n, o) => (n[o] = r(e[o]), n), {});
}
let ke = 0;
function $t(e, t) {
  const { value: r, initialValue: n, setInitialValue: o } = Lt(e, t.modelValue, t.form);
  if (!t.form) {
    let j = function(b) {
      var C;
      "value" in b && (r.value = b.value), "errors" in b && d(b.errors), "touched" in b && (m.touched = (C = b.touched) !== null && C !== void 0 ? C : m.touched), "initialValue" in b && o(b.initialValue);
    };
    const { errors: s, setErrors: d } = Wt(), h = ke >= Number.MAX_SAFE_INTEGER ? 0 : ++ke, m = Gt(r, n, s, t.schema);
    return {
      id: h,
      path: e,
      value: r,
      initialValue: n,
      meta: m,
      flags: { pendingUnmount: { [h]: !1 }, pendingReset: !1 },
      errors: s,
      setState: j
    };
  }
  const i = t.form.createPathState(e, {
    bails: t.bails,
    label: t.label,
    type: t.type,
    validate: t.validate,
    schema: t.schema
  }), l = k(() => i.errors);
  function a(s) {
    var d, h, m;
    "value" in s && (r.value = s.value), "errors" in s && ((d = t.form) === null || d === void 0 || d.setFieldError(v(e), s.errors)), "touched" in s && ((h = t.form) === null || h === void 0 || h.setFieldTouched(v(e), (m = s.touched) !== null && m !== void 0 ? m : !1)), "initialValue" in s && o(s.initialValue);
  }
  return {
    id: Array.isArray(i.id) ? i.id[i.id.length - 1] : i.id,
    path: e,
    value: r,
    errors: l,
    meta: i,
    initialValue: n,
    flags: i.__flags,
    setState: a
  };
}
function Lt(e, t, r) {
  const n = H(v(t));
  function o() {
    return r ? U(r.initialValues.value, v(e), v(n)) : v(n);
  }
  function i(d) {
    if (!r) {
      n.value = d;
      return;
    }
    r.setFieldInitialValue(v(e), d, !0);
  }
  const l = k(o);
  if (!r)
    return {
      value: H(o()),
      initialValue: l,
      setInitialValue: i
    };
  const a = qt(t, r, l, e);
  return r.stageInitialValue(v(e), a, !0), {
    value: k({
      get() {
        return U(r.values, v(e));
      },
      set(d) {
        r.setFieldValue(v(e), d, !1);
      }
    }),
    initialValue: l,
    setInitialValue: i
  };
}
function qt(e, t, r, n) {
  return se(e) ? v(e) : e !== void 0 ? e : U(t.values, v(n), v(r));
}
function Gt(e, t, r, n) {
  const o = k(() => {
    var l, a, s;
    return (s = (a = (l = g(n)) === null || l === void 0 ? void 0 : l.describe) === null || a === void 0 ? void 0 : a.call(l).required) !== null && s !== void 0 ? s : !1;
  }), i = ot({
    touched: !1,
    pending: !1,
    valid: !0,
    required: o,
    validated: !!v(r).length,
    initialValue: k(() => v(t)),
    dirty: k(() => !A(v(e), v(t)))
  });
  return R(r, (l) => {
    i.valid = !l.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), i;
}
function Wt() {
  const e = H([]);
  return {
    errors: e,
    setErrors: (t) => {
      e.value = jt(t);
    }
  };
}
const ze = {}, K = {}, J = "vee-validate-inspector", O = {
  error: 12405579,
  success: 448379,
  unknown: 5522283,
  white: 16777215,
  black: 0,
  blue: 218007,
  purple: 12157168,
  orange: 16099682,
  gray: 12304330
};
let p = null, N;
async function Kt(e) {
  if (process.env.NODE_ENV !== "production") {
    if (!Ne)
      return;
    (await import("./index-T3jqfug4.js")).setupDevtoolsPlugin({
      id: "vee-validate-devtools-plugin",
      label: "VeeValidate Plugin",
      packageName: "vee-validate",
      homepage: "https://vee-validate.logaretm.com/v4",
      app: e,
      logo: "https://vee-validate.logaretm.com/v4/logo.png"
    }, (r) => {
      N = r, r.addInspector({
        id: J,
        icon: "rule",
        label: "vee-validate",
        noSelectionText: "Select a vee-validate node to inspect",
        actions: [
          {
            icon: "done_outline",
            tooltip: "Validate selected item",
            action: async () => {
              if (!p) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (p.type === "field") {
                await p.field.validate();
                return;
              }
              if (p.type === "form") {
                await p.form.validate();
                return;
              }
              p.type === "pathState" && await p.form.validateField(p.state.path);
            }
          },
          {
            icon: "delete_sweep",
            tooltip: "Clear validation state of the selected item",
            action: () => {
              if (!p) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (p.type === "field") {
                p.field.resetField();
                return;
              }
              p.type === "form" && p.form.resetForm(), p.type === "pathState" && p.form.resetField(p.state.path);
            }
          }
        ]
      }), r.on.getInspectorTree((n) => {
        if (n.inspectorId !== J)
          return;
        const o = Object.values(ze), i = Object.values(K);
        n.rootNodes = [
          ...o.map(Yt),
          ...i.map((l) => Ht(l))
        ];
      }), r.on.getInspectorState((n) => {
        if (n.inspectorId !== J)
          return;
        const { form: o, field: i, state: l, type: a } = Qt(n.nodeId);
        if (r.unhighlightElement(), o && a === "form") {
          n.state = Zt(o), p = { type: "form", form: o }, r.highlightElement(o._vm);
          return;
        }
        if (l && a === "pathState" && o) {
          n.state = Ae(l), p = { type: "pathState", state: l, form: o };
          return;
        }
        if (i && a === "field") {
          n.state = Ae({
            errors: i.errors.value,
            dirty: i.meta.dirty,
            valid: i.meta.valid,
            touched: i.meta.touched,
            value: i.value.value,
            initialValue: i.meta.initialValue
          }), p = { field: i, type: "field" }, r.highlightElement(i._vm);
          return;
        }
        p = null, r.unhighlightElement();
      });
    });
  }
}
const ae = kt(() => {
  setTimeout(async () => {
    await it(), N == null || N.sendInspectorState(J), N == null || N.sendInspectorTree(J);
  }, 100);
}, 100);
function Jt(e) {
  const t = B();
  if (!N) {
    const r = t == null ? void 0 : t.appContext.app;
    if (!r)
      return;
    Kt(r);
  }
  K[e.id] = Object.assign({}, e), K[e.id]._vm = t, nt(() => {
    delete K[e.id], ae();
  }), ae();
}
function Yt(e) {
  const { textColor: t, bgColor: r } = $e(e.meta.value.valid), n = {};
  Object.values(e.getAllPathStates()).forEach((l) => {
    wt(n, g(l.path), Xt(l, e));
  });
  function o(l, a = []) {
    const s = [...a].pop();
    return "id" in l ? Object.assign(Object.assign({}, l), { label: s || l.label }) : z(l) ? {
      id: `${a.join(".")}`,
      label: s || "",
      children: Object.keys(l).map((d) => o(l[d], [...a, d]))
    } : Array.isArray(l) ? {
      id: `${a.join(".")}`,
      label: `${s}[]`,
      children: l.map((d, h) => o(d, [...a, String(h)]))
    } : { id: "", label: "", children: [] };
  }
  const { children: i } = o(n);
  return {
    id: ce(e),
    label: e.name,
    children: i,
    tags: [
      {
        label: "Form",
        textColor: t,
        backgroundColor: r
      },
      {
        label: `${e.getAllPathStates().length} fields`,
        textColor: O.white,
        backgroundColor: O.unknown
      }
    ]
  };
}
function Xt(e, t) {
  return {
    id: ce(t, e),
    label: g(e.path),
    tags: Ue(e.multiple, e.fieldsCount, e.type, e.valid, t)
  };
}
function Ht(e, t) {
  return {
    id: ce(t, e),
    label: v(e.name),
    tags: Ue(!1, 1, e.type, e.meta.valid, t)
  };
}
function Ue(e, t, r, n, o) {
  const { textColor: i, bgColor: l } = $e(n);
  return [
    e ? void 0 : {
      label: "Field",
      textColor: i,
      backgroundColor: l
    },
    o ? void 0 : {
      label: "Standalone",
      textColor: O.black,
      backgroundColor: O.gray
    },
    r === "checkbox" ? {
      label: "Checkbox",
      textColor: O.white,
      backgroundColor: O.blue
    } : void 0,
    r === "radio" ? {
      label: "Radio",
      textColor: O.white,
      backgroundColor: O.purple
    } : void 0,
    e ? {
      label: "Multiple",
      textColor: O.black,
      backgroundColor: O.orange
    } : void 0
  ].filter(Boolean);
}
function ce(e, t) {
  const r = t ? "path" in t ? "pathState" : "field" : "form", n = t ? "path" in t ? t == null ? void 0 : t.path : g(t == null ? void 0 : t.name) : "", o = { f: e == null ? void 0 : e.formId, ff: (t == null ? void 0 : t.id) || n, type: r };
  return btoa(encodeURIComponent(JSON.stringify(o)));
}
function Qt(e) {
  try {
    const t = JSON.parse(decodeURIComponent(atob(e))), r = ze[t.f];
    if (!r && t.ff) {
      const o = K[t.ff];
      return o ? {
        type: t.type,
        field: o
      } : {};
    }
    if (!r)
      return {};
    const n = r.getPathState(t.ff);
    return {
      type: t.type,
      form: r,
      state: n
    };
  } catch {
  }
  return {};
}
function Ae(e) {
  return {
    "Field state": [
      { key: "errors", value: e.errors },
      {
        key: "initialValue",
        value: e.initialValue
      },
      {
        key: "currentValue",
        value: e.value
      },
      {
        key: "touched",
        value: e.touched
      },
      {
        key: "dirty",
        value: e.dirty
      },
      {
        key: "valid",
        value: e.valid
      }
    ]
  };
}
function Zt(e) {
  const { errorBag: t, meta: r, values: n, isSubmitting: o, isValidating: i, submitCount: l } = e;
  return {
    "Form state": [
      {
        key: "submitCount",
        value: l.value
      },
      {
        key: "isSubmitting",
        value: o.value
      },
      {
        key: "isValidating",
        value: i.value
      },
      {
        key: "touched",
        value: r.value.touched
      },
      {
        key: "dirty",
        value: r.value.dirty
      },
      {
        key: "valid",
        value: r.value.valid
      },
      {
        key: "initialValues",
        value: r.value.initialValues
      },
      {
        key: "currentValues",
        value: n
      },
      {
        key: "errors",
        value: _e(t.value).reduce((a, s) => {
          var d;
          const h = (d = t.value[s]) === null || d === void 0 ? void 0 : d[0];
          return h && (a[s] = h), a;
        }, {})
      }
    ]
  };
}
function $e(e) {
  return {
    bgColor: e ? O.success : O.error,
    textColor: e ? O.black : O.white
  };
}
function er(e, t, r) {
  return Ie(r == null ? void 0 : r.type) ? rr(e, t, r) : Le(e, t, r);
}
function Le(e, t, r) {
  const { initialValue: n, validateOnMount: o, bails: i, type: l, checkedValue: a, label: s, validateOnValueUpdate: d, uncheckedValue: h, controlled: m, keepValueOnUnmount: j, syncVModel: b, form: C } = tr(r), _ = m ? Fe(Ee) : void 0, c = C || _, E = k(() => ht(g(e))), x = k(() => {
    if (g(c == null ? void 0 : c.schema))
      return;
    const f = v(t);
    return le(f) || W(f) || I(f) || Array.isArray(f) ? f : Re(f);
  }), qe = !I(x.value) && W(g(t)), { id: Q, value: $, initialValue: Ge, meta: S, setState: Y, errors: Z, flags: X } = $t(E, {
    modelValue: n,
    form: c,
    bails: i,
    label: s,
    type: l,
    validate: x.value ? ve : void 0,
    schema: qe ? t : void 0
  }), We = k(() => Z.value[0]);
  b && nr({
    value: $,
    prop: b,
    handleChange: me,
    shouldValidate: () => d && !X.pendingReset
  });
  const Ke = (u, f = !1) => {
    S.touched = !0, f && F();
  };
  async function fe(u) {
    var f, V;
    if (c != null && c.validateSchema) {
      const { results: y } = await c.validateSchema(u);
      return (f = y[g(E)]) !== null && f !== void 0 ? f : { valid: !0, errors: [] };
    }
    return x.value ? Ft($.value, x.value, {
      name: g(E),
      label: g(s),
      values: (V = c == null ? void 0 : c.values) !== null && V !== void 0 ? V : {},
      bails: i
    }) : { valid: !0, errors: [] };
  }
  const F = Se(async () => (S.pending = !0, S.validated = !0, fe("validated-only")), (u) => (X.pendingUnmount[w.id] || (Y({ errors: u.errors }), S.pending = !1, S.valid = u.valid), u)), D = Se(async () => fe("silent"), (u) => (S.valid = u.valid, u));
  function ve(u) {
    return (u == null ? void 0 : u.mode) === "silent" ? D() : F();
  }
  function me(u, f = !0) {
    const V = Te(u);
    ee(V, f);
  }
  Ze(() => {
    if (o)
      return F();
    (!c || !c.validateSchema) && D();
  });
  function Je(u) {
    S.touched = u;
  }
  function be(u) {
    var f;
    const V = u && "value" in u ? u.value : Ge.value;
    Y({
      value: P(V),
      initialValue: P(V),
      touched: (f = u == null ? void 0 : u.touched) !== null && f !== void 0 ? f : !1,
      errors: (u == null ? void 0 : u.errors) || []
    }), S.pending = !1, S.validated = !1, D();
  }
  const he = B();
  function ee(u, f = !0) {
    $.value = he && b ? At(u, he.props.modelModifiers) : u, (f ? F : D)();
  }
  function Ye(u) {
    Y({ errors: Array.isArray(u) ? u : [u] });
  }
  const Xe = k({
    get() {
      return $.value;
    },
    set(u) {
      ee(u, d);
    }
  }), w = {
    id: Q,
    name: E,
    label: s,
    value: Xe,
    meta: S,
    errors: Z,
    errorMessage: We,
    type: l,
    checkedValue: a,
    uncheckedValue: h,
    bails: i,
    keepValueOnUnmount: j,
    resetField: be,
    handleReset: () => be(),
    validate: ve,
    handleChange: me,
    handleBlur: Ke,
    setState: Y,
    setTouched: Je,
    setErrors: Ye,
    setValue: ee
  };
  if (et(pt, w), se(t) && typeof v(t) != "function" && R(t, (u, f) => {
    A(u, f) || (S.validated ? F() : D());
  }, {
    deep: !0
  }), process.env.NODE_ENV !== "production" && (w._vm = B(), R(() => Object.assign(Object.assign({ errors: Z.value }, S), { value: $.value }), ae, {
    deep: !0
  }), c || Jt(w)), !c)
    return w;
  const He = k(() => {
    const u = x.value;
    return !u || I(u) || le(u) || W(u) || Array.isArray(u) ? {} : Object.keys(u).reduce((f, V) => {
      const y = It(u[V]).map((L) => L.__locatorRef).reduce((L, T) => {
        const M = U(c.values, T) || c.values[T];
        return M !== void 0 && (L[T] = M), L;
      }, {});
      return Object.assign(f, y), f;
    }, {});
  });
  return R(He, (u, f) => {
    if (!Object.keys(u).length)
      return;
    !A(u, f) && (S.validated ? F() : D());
  }), tt(() => {
    var u;
    const f = (u = g(w.keepValueOnUnmount)) !== null && u !== void 0 ? u : g(c.keepValuesOnUnmount), V = g(E);
    if (f || !c || X.pendingUnmount[w.id]) {
      c == null || c.removePathState(V, Q);
      return;
    }
    X.pendingUnmount[w.id] = !0;
    const y = c.getPathState(V);
    if (Array.isArray(y == null ? void 0 : y.id) && (y != null && y.multiple) ? y != null && y.id.includes(w.id) : (y == null ? void 0 : y.id) === w.id) {
      if (y != null && y.multiple && Array.isArray(y.value)) {
        const T = y.value.findIndex((M) => A(M, g(w.checkedValue)));
        if (T > -1) {
          const M = [...y.value];
          M.splice(T, 1), c.setFieldValue(V, M);
        }
        Array.isArray(y.id) && y.id.splice(y.id.indexOf(w.id), 1);
      } else
        c.unsetPathValue(g(E));
      c.removePathState(V, Q);
    }
  }), w;
}
function tr(e) {
  const t = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: void 0,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    syncVModel: !1,
    controlled: !0
  }), r = !!(e != null && e.syncVModel), n = typeof (e == null ? void 0 : e.syncVModel) == "string" ? e.syncVModel : (e == null ? void 0 : e.modelPropName) || "modelValue", o = r && !("initialValue" in (e || {})) ? ue(B(), n) : e == null ? void 0 : e.initialValue;
  if (!e)
    return Object.assign(Object.assign({}, t()), { initialValue: o });
  const i = "valueProp" in e ? e.valueProp : e.checkedValue, l = "standalone" in e ? !e.standalone : e.controlled, a = (e == null ? void 0 : e.modelPropName) || (e == null ? void 0 : e.syncVModel) || !1;
  return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
    initialValue: o,
    controlled: l ?? !0,
    checkedValue: i,
    syncVModel: a
  });
}
function rr(e, t, r) {
  const n = r != null && r.standalone ? void 0 : Fe(Ee), o = r == null ? void 0 : r.checkedValue, i = r == null ? void 0 : r.uncheckedValue;
  function l(a) {
    const s = a.handleChange, d = k(() => {
      const m = g(a.value), j = g(o);
      return Array.isArray(m) ? m.findIndex((b) => A(b, j)) >= 0 : A(j, m);
    });
    function h(m, j = !0) {
      var b, C;
      if (d.value === ((b = m == null ? void 0 : m.target) === null || b === void 0 ? void 0 : b.checked)) {
        j && a.validate();
        return;
      }
      const _ = g(e), c = n == null ? void 0 : n.getPathState(_), E = Te(m);
      let x = (C = g(o)) !== null && C !== void 0 ? C : E;
      n && (c != null && c.multiple) && c.type === "checkbox" ? x = Oe(U(n.values, _) || [], x, void 0) : (r == null ? void 0 : r.type) === "checkbox" && (x = Oe(g(a.value), x, g(i))), s(x, j);
    }
    return Object.assign(Object.assign({}, a), {
      checked: d,
      checkedValue: o,
      uncheckedValue: i,
      handleChange: h
    });
  }
  return l(Le(e, t, r));
}
function nr({ prop: e, value: t, handleChange: r, shouldValidate: n }) {
  const o = B();
  if (!o || !e) {
    process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
    return;
  }
  const i = typeof e == "string" ? e : "modelValue", l = `update:${i}`;
  i in o.props && (R(t, (a) => {
    A(a, ue(o, i)) || o.emit(l, a);
  }), R(() => ue(o, i), (a) => {
    if (a === ge && t.value === void 0)
      return;
    const s = a === ge ? void 0 : a;
    A(s, t.value) || r(s, n());
  }));
}
function ue(e, t) {
  if (e)
    return e.props[t];
}
const or = { class: "relative" }, ir = ["type", "disabled", "placeholder"], lr = { key: 0 }, ar = {
  key: 1,
  class: "mt-1 text-xs text-red-500"
}, dr = /* @__PURE__ */ ne({
  __name: "PMGInput",
  props: /* @__PURE__ */ lt({
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !1
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      required: !1
    }
  }, {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    at(e, "modelValue");
    const r = ut(), n = k(() => "required" in r), o = H(null), { value: i, handleBlur: l, meta: a, errorMessage: s } = er(
      t.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !1
      }
    );
    return (d, h) => (G(), q("div", or, [
      st(dt("input", ct({
        ref_key: "inputRef",
        ref: o,
        onBlur: h[0] || (h[0] = (m) => v(l)(m, !0)),
        "onUpdate:modelValue": h[1] || (h[1] = (m) => se(i) ? i.value = m : null),
        type: e.type,
        disabled: e.disabled,
        placeholder: e.placeholder || " ",
        class: [
          "peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all placeholder-shown:border focus:border-2 focus:outline-0",
          v(a).valid === !1 && v(a).touched ? "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-gray-500 border-gray-500 border-t-transparent text-gray-500 placeholder-shown:border-t-gray-500 focus:border-gray-500 focus:border-t-transparent "
        ]
      }, v(r)), null, 16, ir), [
        [ft, v(i)]
      ]),
      e.label ? (G(), q("label", {
        key: 0,
        class: je([
          "before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight",
          v(a).valid === !1 && v(a).touched ? "text-red-500 before:border-red-500 after:border-red-500  peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-gray-500 before:border-gray-500 after:border-gray-500  peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:!border-gray-500 peer-focus:after:border-t-2 peer-focus:after:!border-gray-500"
        ])
      }, [
        xe(oe(e.label) + " ", 1),
        n.value ? (G(), q("span", lr, "  *")) : te("", !0)
      ], 2)) : te("", !0),
      v(s) ? (G(), q("p", ar, oe(v(s)), 1)) : te("", !0)
    ]));
  }
});
export {
  sr as PMGButton,
  dr as PMGInput
};
