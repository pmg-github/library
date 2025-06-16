import { defineComponent as ne, createElementBlock as q, openBlock as G, normalizeClass as je, renderSlot as Qe, createTextVNode as xe, toDisplayString as ie, computed as k, toValue as g, unref as v, onMounted as Ze, getCurrentInstance as B, provide as et, isRef as se, watch as R, onBeforeUnmount as tt, inject as rt, onUnmounted as nt, ref as H, reactive as it, nextTick as ot, useAttrs as lt, withDirectives as at, createCommentVNode as te, createElementVNode as ut, mergeProps as st, vModelDynamic as dt } from "vue";
const ct = ["disabled"], ar = /* @__PURE__ */ ne({
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
        xe(ie(e.text), 1)
      ])
    ], 10, ct));
  }
});
/**
  * vee-validate v4.15.1
  * (c) 2025 Abdelrahman Awad
  * @license MIT
  */
function _(e) {
  return typeof e == "function";
}
function ft(e) {
  return e == null;
}
const z = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function Ce(e) {
  return Number(e) >= 0;
}
function vt(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function mt(e) {
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
const bt = {};
function ht(e) {
  return bt[e];
}
function ye(e, t, r) {
  typeof r.value == "object" && (r.value = P(r.value)), !r.enumerable || r.get || r.set || !r.configurable || !r.writable || t === "__proto__" ? Object.defineProperty(e, t, r) : e[t] = r.value;
}
function P(e) {
  if (typeof e != "object") return e;
  var t = 0, r, n, i, o = Object.prototype.toString.call(e);
  if (o === "[object Object]" ? i = Object.create(e.__proto__ || null) : o === "[object Array]" ? i = Array(e.length) : o === "[object Set]" ? (i = /* @__PURE__ */ new Set(), e.forEach(function(l) {
    i.add(P(l));
  })) : o === "[object Map]" ? (i = /* @__PURE__ */ new Map(), e.forEach(function(l, a) {
    i.set(P(a), P(l));
  })) : o === "[object Date]" ? i = /* @__PURE__ */ new Date(+e) : o === "[object RegExp]" ? i = new RegExp(e.source, e.flags) : o === "[object DataView]" ? i = new e.constructor(P(e.buffer)) : o === "[object ArrayBuffer]" ? i = e.slice(0) : o.slice(-6) === "Array]" && (i = new e.constructor(e)), i) {
    for (n = Object.getOwnPropertySymbols(e); t < n.length; t++)
      ye(i, n[t], Object.getOwnPropertyDescriptor(e, n[t]));
    for (t = 0, n = Object.getOwnPropertyNames(e); t < n.length; t++)
      Object.hasOwnProperty.call(i, r = n[t]) && i[r] === e[r] || ye(i, r, Object.getOwnPropertyDescriptor(e, r));
  }
  return i || e;
}
const Ee = Symbol("vee-validate-form"), yt = Symbol("vee-validate-field-instance"), ge = Symbol("Default empty value"), Ne = typeof window < "u";
function oe(e) {
  return _(e) && !!e.__locatorRef;
}
function W(e) {
  return !!e && _(e.parse) && e.__type === "VVTypedSchema";
}
function le(e) {
  return !!e && _(e.validate);
}
function _e(e) {
  return e === "checkbox" || e === "radio";
}
function gt(e) {
  return z(e) || Array.isArray(e);
}
function de(e) {
  return /^\[.+\]$/i.test(e);
}
function pt(e) {
  return Ie(e) && e.multiple;
}
function Ie(e) {
  return e.tagName === "SELECT";
}
function Vt(e) {
  return e ? !!(typeof Event < "u" && _(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function A(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, i;
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
    if (e = pe(e), t = pe(t), i = Object.keys(e), r = i.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      var o = i[n];
      if (!A(e[o], t[o]))
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
  return e ? de(t) ? e[Pe(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i, o) => gt(i) && o in i ? i[o] : r, e) : r;
}
function Ot(e, t, r) {
  if (de(t)) {
    e[Pe(t)] = r;
    return;
  }
  const n = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let i = e;
  for (let o = 0; o < n.length; o++) {
    if (o === n.length - 1) {
      i[n[o]] = r;
      return;
    }
    (!(n[o] in i) || ft(i[n[o]])) && (i[n[o]] = Ce(n[o + 1]) ? [] : {}), i = i[n[o]];
  }
}
function Me(e) {
  return Object.keys(e);
}
function Fe(e, t = void 0) {
  const r = B();
  return (r == null ? void 0 : r.provides[e]) || rt(e, t);
}
function Oe(e, t, r) {
  if (Array.isArray(e)) {
    const n = [...e], i = n.findIndex((o) => A(o, t));
    return i >= 0 ? n.splice(i, 1) : n.push(t), n;
  }
  return A(e, t) ? r : t;
}
function St(e, t) {
  let r, n;
  return function(...i) {
    const o = this;
    return r || (r = !0, setTimeout(() => r = !1, t), n = e.apply(o, i)), n;
  };
}
function wt(e, t) {
  return z(t) && t.number ? vt(e) : e;
}
function Se(e, t) {
  let r;
  return async function(...i) {
    const o = e(...i);
    r = o;
    const l = await o;
    return o !== r ? l : (r = void 0, t(l, i));
  };
}
function kt(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function re(e) {
  if (De(e))
    return e._value;
}
function De(e) {
  return "_value" in e;
}
function At(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function Te(e) {
  if (!Vt(e))
    return e;
  const t = e.target;
  if (_e(t.type) && De(t))
    return re(t);
  if (t.type === "file" && t.files) {
    const r = Array.from(t.files);
    return t.multiple ? r : r[0];
  }
  if (pt(t))
    return Array.from(t.options).filter((r) => r.selected && !r.disabled).map(re);
  if (Ie(t)) {
    const r = Array.from(t.options).find((n) => n.selected);
    return r ? re(r) : t.value;
  }
  return At(t);
}
function Re(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? z(e) && e._$$isNormalized ? e : z(e) ? Object.keys(e).reduce((r, n) => {
    const i = jt(e[n]);
    return e[n] !== !1 && (r[n] = we(i)), r;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((r, n) => {
    const i = xt(n);
    return i.name && (r[i.name] = we(i.params)), r;
  }, t) : t;
}
function jt(e) {
  return e === !0 ? [] : Array.isArray(e) || z(e) ? e : [e];
}
function we(e) {
  const t = (r) => typeof r == "string" && r[0] === "@" ? Ct(r.slice(1)) : r;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {});
}
const xt = (e) => {
  let t = [];
  const r = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: r, params: t };
};
function Ct(e) {
  const t = (r) => {
    var n;
    return (n = U(r, e)) !== null && n !== void 0 ? n : r[e];
  };
  return t.__locatorRef = e, t;
}
function Et(e) {
  return Array.isArray(e) ? e.filter(oe) : Me(e).filter((t) => oe(e[t])).map((t) => e[t]);
}
const Nt = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let _t = Object.assign({}, Nt);
const It = () => _t;
async function Pt(e, t, r = {}) {
  const n = r == null ? void 0 : r.bails, i = {
    name: (r == null ? void 0 : r.name) || "{field}",
    rules: t,
    label: r == null ? void 0 : r.label,
    bails: n ?? !0,
    formData: (r == null ? void 0 : r.values) || {}
  }, o = await Mt(i, e);
  return Object.assign(Object.assign({}, o), { valid: !o.errors.length });
}
async function Mt(e, t) {
  const r = e.rules;
  if (W(r) || le(r))
    return Tt(t, Object.assign(Object.assign({}, e), { rules: r }));
  if (_(r) || Array.isArray(r)) {
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
          const M = typeof b == "string" ? b : Be(a);
          h.push(M);
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
  const n = Object.assign(Object.assign({}, e), { rules: Re(r) }), i = [], o = Object.keys(n.rules), l = o.length;
  for (let a = 0; a < l; a++) {
    const s = o[a], d = await Rt(n, t, {
      name: s,
      params: n.rules[s]
    });
    if (d.error && (i.push(d.error), e.bails))
      return {
        errors: i
      };
  }
  return {
    errors: i
  };
}
function Ft(e) {
  return !!e && e.name === "ValidationError";
}
function Dt(e) {
  return {
    __type: "VVTypedSchema",
    async parse(r, n) {
      var i;
      try {
        return {
          output: await e.validate(r, { abortEarly: !1, context: (n == null ? void 0 : n.formData) || {} }),
          errors: []
        };
      } catch (o) {
        if (!Ft(o))
          throw o;
        if (!(!((i = o.inner) === null || i === void 0) && i.length) && o.errors.length)
          return { errors: [{ path: o.path, errors: o.errors }] };
        const l = o.inner.reduce((a, s) => {
          const d = s.path || "";
          return a[d] || (a[d] = { errors: [], path: d }), a[d].errors.push(...s.errors), a;
        }, {});
        return { errors: Object.values(l) };
      }
    }
  };
}
async function Tt(e, t) {
  const n = await (W(t.rules) ? t.rules : Dt(t.rules)).parse(e, { formData: t.formData }), i = [];
  for (const o of n.errors)
    o.errors.length && i.push(...o.errors);
  return {
    value: n.value,
    errors: i
  };
}
async function Rt(e, t, r) {
  const n = ht(r.name);
  if (!n)
    throw new Error(`No such validator '${r.name}' exists.`);
  const i = Bt(r.params, e.formData), o = {
    field: e.label || e.name,
    name: e.name,
    label: e.label,
    value: t,
    form: e.formData,
    rule: Object.assign(Object.assign({}, r), { params: i })
  }, l = await n(t, i, o);
  return typeof l == "string" ? {
    error: l
  } : {
    error: l ? void 0 : Be(o)
  };
}
function Be(e) {
  const t = It().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function Bt(e, t) {
  const r = (n) => oe(n) ? n(t) : n;
  return Array.isArray(e) ? e.map(r) : Object.keys(e).reduce((n, i) => (n[i] = r(e[i]), n), {});
}
let ke = 0;
function zt(e, t) {
  const { value: r, initialValue: n, setInitialValue: i } = Ut(e, t.modelValue, t.form);
  if (!t.form) {
    let j = function(b) {
      var C;
      "value" in b && (r.value = b.value), "errors" in b && d(b.errors), "touched" in b && (m.touched = (C = b.touched) !== null && C !== void 0 ? C : m.touched), "initialValue" in b && i(b.initialValue);
    };
    const { errors: s, setErrors: d } = qt(), h = ke >= Number.MAX_SAFE_INTEGER ? 0 : ++ke, m = Lt(r, n, s, t.schema);
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
  const o = t.form.createPathState(e, {
    bails: t.bails,
    label: t.label,
    type: t.type,
    validate: t.validate,
    schema: t.schema
  }), l = k(() => o.errors);
  function a(s) {
    var d, h, m;
    "value" in s && (r.value = s.value), "errors" in s && ((d = t.form) === null || d === void 0 || d.setFieldError(v(e), s.errors)), "touched" in s && ((h = t.form) === null || h === void 0 || h.setFieldTouched(v(e), (m = s.touched) !== null && m !== void 0 ? m : !1)), "initialValue" in s && i(s.initialValue);
  }
  return {
    id: Array.isArray(o.id) ? o.id[o.id.length - 1] : o.id,
    path: e,
    value: r,
    errors: l,
    meta: o,
    initialValue: n,
    flags: o.__flags,
    setState: a
  };
}
function Ut(e, t, r) {
  const n = H(v(t));
  function i() {
    return r ? U(r.initialValues.value, v(e), v(n)) : v(n);
  }
  function o(d) {
    if (!r) {
      n.value = d;
      return;
    }
    r.setFieldInitialValue(v(e), d, !0);
  }
  const l = k(i);
  if (!r)
    return {
      value: H(i()),
      initialValue: l,
      setInitialValue: o
    };
  const a = $t(t, r, l, e);
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
    setInitialValue: o
  };
}
function $t(e, t, r, n) {
  return se(e) ? v(e) : e !== void 0 ? e : U(t.values, v(n), v(r));
}
function Lt(e, t, r, n) {
  const i = k(() => {
    var l, a, s;
    return (s = (a = (l = g(n)) === null || l === void 0 ? void 0 : l.describe) === null || a === void 0 ? void 0 : a.call(l).required) !== null && s !== void 0 ? s : !1;
  }), o = it({
    touched: !1,
    pending: !1,
    valid: !0,
    required: i,
    validated: !!v(r).length,
    initialValue: k(() => v(t)),
    dirty: k(() => !A(v(e), v(t)))
  });
  return R(r, (l) => {
    o.valid = !l.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), o;
}
function qt() {
  const e = H([]);
  return {
    errors: e,
    setErrors: (t) => {
      e.value = kt(t);
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
async function Gt(e) {
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
        const i = Object.values(ze), o = Object.values(K);
        n.rootNodes = [
          ...i.map(Kt),
          ...o.map((l) => Yt(l))
        ];
      }), r.on.getInspectorState((n) => {
        if (n.inspectorId !== J)
          return;
        const { form: i, field: o, state: l, type: a } = Xt(n.nodeId);
        if (r.unhighlightElement(), i && a === "form") {
          n.state = Ht(i), p = { type: "form", form: i }, r.highlightElement(i._vm);
          return;
        }
        if (l && a === "pathState" && i) {
          n.state = Ae(l), p = { type: "pathState", state: l, form: i };
          return;
        }
        if (o && a === "field") {
          n.state = Ae({
            errors: o.errors.value,
            dirty: o.meta.dirty,
            valid: o.meta.valid,
            touched: o.meta.touched,
            value: o.value.value,
            initialValue: o.meta.initialValue
          }), p = { field: o, type: "field" }, r.highlightElement(o._vm);
          return;
        }
        p = null, r.unhighlightElement();
      });
    });
  }
}
const ae = St(() => {
  setTimeout(async () => {
    await ot(), N == null || N.sendInspectorState(J), N == null || N.sendInspectorTree(J);
  }, 100);
}, 100);
function Wt(e) {
  const t = B();
  if (!N) {
    const r = t == null ? void 0 : t.appContext.app;
    if (!r)
      return;
    Gt(r);
  }
  K[e.id] = Object.assign({}, e), K[e.id]._vm = t, nt(() => {
    delete K[e.id], ae();
  }), ae();
}
function Kt(e) {
  const { textColor: t, bgColor: r } = $e(e.meta.value.valid), n = {};
  Object.values(e.getAllPathStates()).forEach((l) => {
    Ot(n, g(l.path), Jt(l, e));
  });
  function i(l, a = []) {
    const s = [...a].pop();
    return "id" in l ? Object.assign(Object.assign({}, l), { label: s || l.label }) : z(l) ? {
      id: `${a.join(".")}`,
      label: s || "",
      children: Object.keys(l).map((d) => i(l[d], [...a, d]))
    } : Array.isArray(l) ? {
      id: `${a.join(".")}`,
      label: `${s}[]`,
      children: l.map((d, h) => i(d, [...a, String(h)]))
    } : { id: "", label: "", children: [] };
  }
  const { children: o } = i(n);
  return {
    id: ce(e),
    label: e.name,
    children: o,
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
function Jt(e, t) {
  return {
    id: ce(t, e),
    label: g(e.path),
    tags: Ue(e.multiple, e.fieldsCount, e.type, e.valid, t)
  };
}
function Yt(e, t) {
  return {
    id: ce(t, e),
    label: v(e.name),
    tags: Ue(!1, 1, e.type, e.meta.valid, t)
  };
}
function Ue(e, t, r, n, i) {
  const { textColor: o, bgColor: l } = $e(n);
  return [
    e ? void 0 : {
      label: "Field",
      textColor: o,
      backgroundColor: l
    },
    i ? void 0 : {
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
  const r = t ? "path" in t ? "pathState" : "field" : "form", n = t ? "path" in t ? t == null ? void 0 : t.path : g(t == null ? void 0 : t.name) : "", i = { f: e == null ? void 0 : e.formId, ff: (t == null ? void 0 : t.id) || n, type: r };
  return btoa(encodeURIComponent(JSON.stringify(i)));
}
function Xt(e) {
  try {
    const t = JSON.parse(decodeURIComponent(atob(e))), r = ze[t.f];
    if (!r && t.ff) {
      const i = K[t.ff];
      return i ? {
        type: t.type,
        field: i
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
function Ht(e) {
  const { errorBag: t, meta: r, values: n, isSubmitting: i, isValidating: o, submitCount: l } = e;
  return {
    "Form state": [
      {
        key: "submitCount",
        value: l.value
      },
      {
        key: "isSubmitting",
        value: i.value
      },
      {
        key: "isValidating",
        value: o.value
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
        value: Me(t.value).reduce((a, s) => {
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
function Qt(e, t, r) {
  return _e(r == null ? void 0 : r.type) ? er(e, t, r) : Le(e, t, r);
}
function Le(e, t, r) {
  const { initialValue: n, validateOnMount: i, bails: o, type: l, checkedValue: a, label: s, validateOnValueUpdate: d, uncheckedValue: h, controlled: m, keepValueOnUnmount: j, syncVModel: b, form: C } = Zt(r), M = m ? Fe(Ee) : void 0, c = C || M, E = k(() => mt(g(e))), x = k(() => {
    if (g(c == null ? void 0 : c.schema))
      return;
    const f = v(t);
    return le(f) || W(f) || _(f) || Array.isArray(f) ? f : Re(f);
  }), qe = !_(x.value) && W(g(t)), { id: Q, value: $, initialValue: Ge, meta: S, setState: Y, errors: Z, flags: X } = zt(E, {
    modelValue: n,
    form: c,
    bails: o,
    label: s,
    type: l,
    validate: x.value ? ve : void 0,
    schema: qe ? t : void 0
  }), We = k(() => Z.value[0]);
  b && tr({
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
    return x.value ? Pt($.value, x.value, {
      name: g(E),
      label: g(s),
      values: (V = c == null ? void 0 : c.values) !== null && V !== void 0 ? V : {},
      bails: o
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
    if (i)
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
    $.value = he && b ? wt(u, he.props.modelModifiers) : u, (f ? F : D)();
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
    bails: o,
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
  if (et(yt, w), se(t) && typeof v(t) != "function" && R(t, (u, f) => {
    A(u, f) || (S.validated ? F() : D());
  }, {
    deep: !0
  }), process.env.NODE_ENV !== "production" && (w._vm = B(), R(() => Object.assign(Object.assign({ errors: Z.value }, S), { value: $.value }), ae, {
    deep: !0
  }), c || Wt(w)), !c)
    return w;
  const He = k(() => {
    const u = x.value;
    return !u || _(u) || le(u) || W(u) || Array.isArray(u) ? {} : Object.keys(u).reduce((f, V) => {
      const y = Et(u[V]).map((L) => L.__locatorRef).reduce((L, T) => {
        const I = U(c.values, T) || c.values[T];
        return I !== void 0 && (L[T] = I), L;
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
        const T = y.value.findIndex((I) => A(I, g(w.checkedValue)));
        if (T > -1) {
          const I = [...y.value];
          I.splice(T, 1), c.setFieldValue(V, I);
        }
        Array.isArray(y.id) && y.id.splice(y.id.indexOf(w.id), 1);
      } else
        c.unsetPathValue(g(E));
      c.removePathState(V, Q);
    }
  }), w;
}
function Zt(e) {
  const t = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: void 0,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    syncVModel: !1,
    controlled: !0
  }), r = !!(e != null && e.syncVModel), n = typeof (e == null ? void 0 : e.syncVModel) == "string" ? e.syncVModel : (e == null ? void 0 : e.modelPropName) || "modelValue", i = r && !("initialValue" in (e || {})) ? ue(B(), n) : e == null ? void 0 : e.initialValue;
  if (!e)
    return Object.assign(Object.assign({}, t()), { initialValue: i });
  const o = "valueProp" in e ? e.valueProp : e.checkedValue, l = "standalone" in e ? !e.standalone : e.controlled, a = (e == null ? void 0 : e.modelPropName) || (e == null ? void 0 : e.syncVModel) || !1;
  return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
    initialValue: i,
    controlled: l ?? !0,
    checkedValue: o,
    syncVModel: a
  });
}
function er(e, t, r) {
  const n = r != null && r.standalone ? void 0 : Fe(Ee), i = r == null ? void 0 : r.checkedValue, o = r == null ? void 0 : r.uncheckedValue;
  function l(a) {
    const s = a.handleChange, d = k(() => {
      const m = g(a.value), j = g(i);
      return Array.isArray(m) ? m.findIndex((b) => A(b, j)) >= 0 : A(j, m);
    });
    function h(m, j = !0) {
      var b, C;
      if (d.value === ((b = m == null ? void 0 : m.target) === null || b === void 0 ? void 0 : b.checked)) {
        j && a.validate();
        return;
      }
      const M = g(e), c = n == null ? void 0 : n.getPathState(M), E = Te(m);
      let x = (C = g(i)) !== null && C !== void 0 ? C : E;
      n && (c != null && c.multiple) && c.type === "checkbox" ? x = Oe(U(n.values, M) || [], x, void 0) : (r == null ? void 0 : r.type) === "checkbox" && (x = Oe(g(a.value), x, g(o))), s(x, j);
    }
    return Object.assign(Object.assign({}, a), {
      checked: d,
      checkedValue: i,
      uncheckedValue: o,
      handleChange: h
    });
  }
  return l(Le(e, t, r));
}
function tr({ prop: e, value: t, handleChange: r, shouldValidate: n }) {
  const i = B();
  if (!i || !e) {
    process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
    return;
  }
  const o = typeof e == "string" ? e : "modelValue", l = `update:${o}`;
  o in i.props && (R(t, (a) => {
    A(a, ue(i, o)) || i.emit(l, a);
  }), R(() => ue(i, o), (a) => {
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
const rr = { class: "relative" }, nr = ["type", "disabled", "placeholder"], ir = { key: 0 }, or = {
  key: 1,
  class: "mt-1 text-xs text-red-500"
}, ur = /* @__PURE__ */ ne({
  __name: "PMGInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !1
    },
    modelValue: {
      type: [String, Number],
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
  },
  setup(e) {
    const t = e, r = lt(), n = k(() => "required" in r), i = H(null), { value: o, handleBlur: l, meta: a, errorMessage: s } = Qt(
      t.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !1
      }
    );
    return (d, h) => (G(), q("div", rr, [
      at(ut("input", st({
        ref_key: "inputRef",
        ref: i,
        onBlur: h[0] || (h[0] = (m) => v(l)(m, !0)),
        "onUpdate:modelValue": h[1] || (h[1] = (m) => se(o) ? o.value = m : null),
        type: e.type,
        disabled: e.disabled,
        placeholder: e.placeholder || " ",
        class: [
          "peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all placeholder-shown:border focus:border-2 focus:outline-0",
          v(a).valid === !1 && v(a).touched ? "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-gray-500 border-gray-500 border-t-transparent text-gray-500 placeholder-shown:border-t-gray-500 focus:border-gray-500 focus:border-t-transparent "
        ]
      }, v(r)), null, 16, nr), [
        [dt, v(o)]
      ]),
      e.label ? (G(), q("label", {
        key: 0,
        class: je([
          "before:content[' '] after:content[' '] pointer-events-none absolute -top-[6.5px] left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight",
          v(a).valid === !1 && v(a).touched ? "text-red-500 before:border-red-500 after:border-red-500  peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-gray-500 before:border-gray-500 after:border-gray-500  peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:!border-gray-500 peer-focus:after:border-t-2 peer-focus:after:!border-gray-500"
        ])
      }, [
        xe(ie(e.label) + " ", 1),
        n.value ? (G(), q("span", ir, "  *")) : te("", !0)
      ], 2)) : te("", !0),
      v(s) ? (G(), q("p", or, ie(v(s)), 1)) : te("", !0)
    ]));
  }
});
export {
  ar as PMGButton,
  ur as PMGInput
};
