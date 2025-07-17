import { defineComponent as ne, createElementBlock as G, openBlock as q, normalizeClass as Ae, renderSlot as He, computed as S, toValue as y, unref as c, onMounted as Qe, getCurrentInstance as B, provide as Ze, isRef as ue, watch as R, onBeforeUnmount as et, inject as tt, onUnmounted as rt, ref as H, reactive as nt, nextTick as ot, useAttrs as it, withDirectives as lt, createCommentVNode as te, createElementVNode as at, mergeProps as ut, vModelDynamic as st, createTextVNode as dt, toDisplayString as he } from "vue";
const ct = ["disabled"], ft = /* @__PURE__ */ ne({
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
    return ne({
      name: "PMGButton"
    }), (t, r) => (q(), G("button", {
      disabled: e.disabled,
      class: Ae([
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
      He(t.$slots, "default")
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
function vt(e) {
  return e == null;
}
const z = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function je(e) {
  return Number(e) >= 0;
}
function mt(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function bt(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let n = 1; n < t.length; n++) {
    if (je(t[n])) {
      r += `[${t[n]}]`;
      continue;
    }
    r += `.${t[n]}`;
  }
  return r;
}
const ht = {};
function pt(e) {
  return ht[e];
}
function pe(e, t, r) {
  typeof r.value == "object" && (r.value = I(r.value)), !r.enumerable || r.get || r.set || !r.configurable || !r.writable || t === "__proto__" ? Object.defineProperty(e, t, r) : e[t] = r.value;
}
function I(e) {
  if (typeof e != "object") return e;
  var t = 0, r, n, o, i = Object.prototype.toString.call(e);
  if (i === "[object Object]" ? o = Object.create(e.__proto__ || null) : i === "[object Array]" ? o = Array(e.length) : i === "[object Set]" ? (o = /* @__PURE__ */ new Set(), e.forEach(function(l) {
    o.add(I(l));
  })) : i === "[object Map]" ? (o = /* @__PURE__ */ new Map(), e.forEach(function(l, u) {
    o.set(I(u), I(l));
  })) : i === "[object Date]" ? o = /* @__PURE__ */ new Date(+e) : i === "[object RegExp]" ? o = new RegExp(e.source, e.flags) : i === "[object DataView]" ? o = new e.constructor(I(e.buffer)) : i === "[object ArrayBuffer]" ? o = e.slice(0) : i.slice(-6) === "Array]" && (o = new e.constructor(e)), o) {
    for (n = Object.getOwnPropertySymbols(e); t < n.length; t++)
      pe(o, n[t], Object.getOwnPropertyDescriptor(e, n[t]));
    for (t = 0, n = Object.getOwnPropertyNames(e); t < n.length; t++)
      Object.hasOwnProperty.call(o, r = n[t]) && o[r] === e[r] || pe(o, r, Object.getOwnPropertyDescriptor(e, r));
  }
  return o || e;
}
const Ce = Symbol("vee-validate-form"), yt = Symbol("vee-validate-field-instance"), ye = Symbol("Default empty value"), Ee = typeof window < "u";
function oe(e) {
  return _(e) && !!e.__locatorRef;
}
function W(e) {
  return !!e && _(e.parse) && e.__type === "VVTypedSchema";
}
function ie(e) {
  return !!e && _(e.validate);
}
function Ne(e) {
  return e === "checkbox" || e === "radio";
}
function gt(e) {
  return z(e) || Array.isArray(e);
}
function se(e) {
  return /^\[.+\]$/i.test(e);
}
function Vt(e) {
  return _e(e) && e.multiple;
}
function _e(e) {
  return e.tagName === "SELECT";
}
function Ot(e) {
  return e ? !!(typeof Event < "u" && _(Event) && e instanceof Event || e && e.srcElement) : !1;
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
    if (e = ge(e), t = ge(t), o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
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
function ge(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Ve(e) {
  return Ee ? e instanceof File : !1;
}
function Pe(e) {
  return se(e) ? e.replace(/\[|\]/gi, "") : e;
}
function U(e, t, r) {
  return e ? se(t) ? e[Pe(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((o, i) => gt(o) && i in o ? o[i] : r, e) : r;
}
function wt(e, t, r) {
  if (se(t)) {
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
    (!(n[i] in o) || vt(o[n[i]])) && (o[n[i]] = je(n[i + 1]) ? [] : {}), o = o[n[i]];
  }
}
function Ie(e) {
  return Object.keys(e);
}
function Me(e, t = void 0) {
  const r = B();
  return (r == null ? void 0 : r.provides[e]) || tt(e, t);
}
function Oe(e, t, r) {
  if (Array.isArray(e)) {
    const n = [...e], o = n.findIndex((i) => A(i, t));
    return o >= 0 ? n.splice(o, 1) : n.push(t), n;
  }
  return A(e, t) ? r : t;
}
function St(e, t) {
  let r, n;
  return function(...o) {
    const i = this;
    return r || (r = !0, setTimeout(() => r = !1, t), n = e.apply(i, o)), n;
  };
}
function kt(e, t) {
  return z(t) && t.number ? mt(e) : e;
}
function we(e, t) {
  let r;
  return async function(...o) {
    const i = e(...o);
    r = i;
    const l = await i;
    return i !== r ? l : (r = void 0, t(l, o));
  };
}
function xt(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function re(e) {
  if (Fe(e))
    return e._value;
}
function Fe(e) {
  return "_value" in e;
}
function At(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function De(e) {
  if (!Ot(e))
    return e;
  const t = e.target;
  if (Ne(t.type) && Fe(t))
    return re(t);
  if (t.type === "file" && t.files) {
    const r = Array.from(t.files);
    return t.multiple ? r : r[0];
  }
  if (Vt(t))
    return Array.from(t.options).filter((r) => r.selected && !r.disabled).map(re);
  if (_e(t)) {
    const r = Array.from(t.options).find((n) => n.selected);
    return r ? re(r) : t.value;
  }
  return At(t);
}
function Te(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? z(e) && e._$$isNormalized ? e : z(e) ? Object.keys(e).reduce((r, n) => {
    const o = jt(e[n]);
    return e[n] !== !1 && (r[n] = Se(o)), r;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((r, n) => {
    const o = Ct(n);
    return o.name && (r[o.name] = Se(o.params)), r;
  }, t) : t;
}
function jt(e) {
  return e === !0 ? [] : Array.isArray(e) || z(e) ? e : [e];
}
function Se(e) {
  const t = (r) => typeof r == "string" && r[0] === "@" ? Et(r.slice(1)) : r;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {});
}
const Ct = (e) => {
  let t = [];
  const r = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: r, params: t };
};
function Et(e) {
  const t = (r) => {
    var n;
    return (n = U(r, e)) !== null && n !== void 0 ? n : r[e];
  };
  return t.__locatorRef = e, t;
}
function Nt(e) {
  return Array.isArray(e) ? e.filter(oe) : Ie(e).filter((t) => oe(e[t])).map((t) => e[t]);
}
const _t = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let Pt = Object.assign({}, _t);
const It = () => Pt;
async function Mt(e, t, r = {}) {
  const n = r == null ? void 0 : r.bails, o = {
    name: (r == null ? void 0 : r.name) || "{field}",
    rules: t,
    label: r == null ? void 0 : r.label,
    bails: n ?? !0,
    formData: (r == null ? void 0 : r.values) || {}
  }, i = await Ft(o, e);
  return Object.assign(Object.assign({}, i), { valid: !i.errors.length });
}
async function Ft(e, t) {
  const r = e.rules;
  if (W(r) || ie(r))
    return Rt(t, Object.assign(Object.assign({}, e), { rules: r }));
  if (_(r) || Array.isArray(r)) {
    const u = {
      field: e.label || e.name,
      name: e.name,
      label: e.label,
      form: e.formData,
      value: t
    }, s = Array.isArray(r) ? r : [r], d = s.length, b = [];
    for (let m = 0; m < d; m++) {
      const O = s[m], h = await O(t, u);
      if (!(typeof h != "string" && !Array.isArray(h) && h)) {
        if (Array.isArray(h))
          b.push(...h);
        else {
          const M = typeof h == "string" ? h : Re(u);
          b.push(M);
        }
        if (e.bails)
          return {
            errors: b
          };
      }
    }
    return {
      errors: b
    };
  }
  const n = Object.assign(Object.assign({}, e), { rules: Te(r) }), o = [], i = Object.keys(n.rules), l = i.length;
  for (let u = 0; u < l; u++) {
    const s = i[u], d = await Bt(n, t, {
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
function Dt(e) {
  return !!e && e.name === "ValidationError";
}
function Tt(e) {
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
        if (!Dt(i))
          throw i;
        if (!(!((o = i.inner) === null || o === void 0) && o.length) && i.errors.length)
          return { errors: [{ path: i.path, errors: i.errors }] };
        const l = i.inner.reduce((u, s) => {
          const d = s.path || "";
          return u[d] || (u[d] = { errors: [], path: d }), u[d].errors.push(...s.errors), u;
        }, {});
        return { errors: Object.values(l) };
      }
    }
  };
}
async function Rt(e, t) {
  const n = await (W(t.rules) ? t.rules : Tt(t.rules)).parse(e, { formData: t.formData }), o = [];
  for (const i of n.errors)
    i.errors.length && o.push(...i.errors);
  return {
    value: n.value,
    errors: o
  };
}
async function Bt(e, t, r) {
  const n = pt(r.name);
  if (!n)
    throw new Error(`No such validator '${r.name}' exists.`);
  const o = zt(r.params, e.formData), i = {
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
    error: l ? void 0 : Re(i)
  };
}
function Re(e) {
  const t = It().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function zt(e, t) {
  const r = (n) => oe(n) ? n(t) : n;
  return Array.isArray(e) ? e.map(r) : Object.keys(e).reduce((n, o) => (n[o] = r(e[o]), n), {});
}
let ke = 0;
function Ut(e, t) {
  const { value: r, initialValue: n, setInitialValue: o } = $t(e, t.modelValue, t.form);
  if (!t.form) {
    let O = function(h) {
      var C;
      "value" in h && (r.value = h.value), "errors" in h && d(h.errors), "touched" in h && (m.touched = (C = h.touched) !== null && C !== void 0 ? C : m.touched), "initialValue" in h && o(h.initialValue);
    };
    const { errors: s, setErrors: d } = qt(), b = ke >= Number.MAX_SAFE_INTEGER ? 0 : ++ke, m = Gt(r, n, s, t.schema);
    return {
      id: b,
      path: e,
      value: r,
      initialValue: n,
      meta: m,
      flags: { pendingUnmount: { [b]: !1 }, pendingReset: !1 },
      errors: s,
      setState: O
    };
  }
  const i = t.form.createPathState(e, {
    bails: t.bails,
    label: t.label,
    type: t.type,
    validate: t.validate,
    schema: t.schema
  }), l = S(() => i.errors);
  function u(s) {
    var d, b, m;
    "value" in s && (r.value = s.value), "errors" in s && ((d = t.form) === null || d === void 0 || d.setFieldError(c(e), s.errors)), "touched" in s && ((b = t.form) === null || b === void 0 || b.setFieldTouched(c(e), (m = s.touched) !== null && m !== void 0 ? m : !1)), "initialValue" in s && o(s.initialValue);
  }
  return {
    id: Array.isArray(i.id) ? i.id[i.id.length - 1] : i.id,
    path: e,
    value: r,
    errors: l,
    meta: i,
    initialValue: n,
    flags: i.__flags,
    setState: u
  };
}
function $t(e, t, r) {
  const n = H(c(t));
  function o() {
    return r ? U(r.initialValues.value, c(e), c(n)) : c(n);
  }
  function i(d) {
    if (!r) {
      n.value = d;
      return;
    }
    r.setFieldInitialValue(c(e), d, !0);
  }
  const l = S(o);
  if (!r)
    return {
      value: H(o()),
      initialValue: l,
      setInitialValue: i
    };
  const u = Lt(t, r, l, e);
  return r.stageInitialValue(c(e), u, !0), {
    value: S({
      get() {
        return U(r.values, c(e));
      },
      set(d) {
        r.setFieldValue(c(e), d, !1);
      }
    }),
    initialValue: l,
    setInitialValue: i
  };
}
function Lt(e, t, r, n) {
  return ue(e) ? c(e) : e !== void 0 ? e : U(t.values, c(n), c(r));
}
function Gt(e, t, r, n) {
  const o = S(() => {
    var l, u, s;
    return (s = (u = (l = y(n)) === null || l === void 0 ? void 0 : l.describe) === null || u === void 0 ? void 0 : u.call(l).required) !== null && s !== void 0 ? s : !1;
  }), i = nt({
    touched: !1,
    pending: !1,
    valid: !0,
    required: o,
    validated: !!c(r).length,
    initialValue: S(() => c(t)),
    dirty: S(() => !A(c(e), c(t)))
  });
  return R(r, (l) => {
    i.valid = !l.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), i;
}
function qt() {
  const e = H([]);
  return {
    errors: e,
    setErrors: (t) => {
      e.value = xt(t);
    }
  };
}
const Be = {}, K = {}, J = "vee-validate-inspector", w = {
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
let g = null, N;
async function Wt(e) {
  if (process.env.NODE_ENV !== "production") {
    if (!Ee)
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
              if (!g) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (g.type === "field") {
                await g.field.validate();
                return;
              }
              if (g.type === "form") {
                await g.form.validate();
                return;
              }
              g.type === "pathState" && await g.form.validateField(g.state.path);
            }
          },
          {
            icon: "delete_sweep",
            tooltip: "Clear validation state of the selected item",
            action: () => {
              if (!g) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (g.type === "field") {
                g.field.resetField();
                return;
              }
              g.type === "form" && g.form.resetForm(), g.type === "pathState" && g.form.resetField(g.state.path);
            }
          }
        ]
      }), r.on.getInspectorTree((n) => {
        if (n.inspectorId !== J)
          return;
        const o = Object.values(Be), i = Object.values(K);
        n.rootNodes = [
          ...o.map(Jt),
          ...i.map((l) => Xt(l))
        ];
      }), r.on.getInspectorState((n) => {
        if (n.inspectorId !== J)
          return;
        const { form: o, field: i, state: l, type: u } = Ht(n.nodeId);
        if (r.unhighlightElement(), o && u === "form") {
          n.state = Qt(o), g = { type: "form", form: o }, r.highlightElement(o._vm);
          return;
        }
        if (l && u === "pathState" && o) {
          n.state = xe(l), g = { type: "pathState", state: l, form: o };
          return;
        }
        if (i && u === "field") {
          n.state = xe({
            errors: i.errors.value,
            dirty: i.meta.dirty,
            valid: i.meta.valid,
            touched: i.meta.touched,
            value: i.value.value,
            initialValue: i.meta.initialValue
          }), g = { field: i, type: "field" }, r.highlightElement(i._vm);
          return;
        }
        g = null, r.unhighlightElement();
      });
    });
  }
}
const le = St(() => {
  setTimeout(async () => {
    await ot(), N == null || N.sendInspectorState(J), N == null || N.sendInspectorTree(J);
  }, 100);
}, 100);
function Kt(e) {
  const t = B();
  if (!N) {
    const r = t == null ? void 0 : t.appContext.app;
    if (!r)
      return;
    Wt(r);
  }
  K[e.id] = Object.assign({}, e), K[e.id]._vm = t, rt(() => {
    delete K[e.id], le();
  }), le();
}
function Jt(e) {
  const { textColor: t, bgColor: r } = Ue(e.meta.value.valid), n = {};
  Object.values(e.getAllPathStates()).forEach((l) => {
    wt(n, y(l.path), Yt(l, e));
  });
  function o(l, u = []) {
    const s = [...u].pop();
    return "id" in l ? Object.assign(Object.assign({}, l), { label: s || l.label }) : z(l) ? {
      id: `${u.join(".")}`,
      label: s || "",
      children: Object.keys(l).map((d) => o(l[d], [...u, d]))
    } : Array.isArray(l) ? {
      id: `${u.join(".")}`,
      label: `${s}[]`,
      children: l.map((d, b) => o(d, [...u, String(b)]))
    } : { id: "", label: "", children: [] };
  }
  const { children: i } = o(n);
  return {
    id: de(e),
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
        textColor: w.white,
        backgroundColor: w.unknown
      }
    ]
  };
}
function Yt(e, t) {
  return {
    id: de(t, e),
    label: y(e.path),
    tags: ze(e.multiple, e.fieldsCount, e.type, e.valid, t)
  };
}
function Xt(e, t) {
  return {
    id: de(t, e),
    label: c(e.name),
    tags: ze(!1, 1, e.type, e.meta.valid, t)
  };
}
function ze(e, t, r, n, o) {
  const { textColor: i, bgColor: l } = Ue(n);
  return [
    e ? void 0 : {
      label: "Field",
      textColor: i,
      backgroundColor: l
    },
    o ? void 0 : {
      label: "Standalone",
      textColor: w.black,
      backgroundColor: w.gray
    },
    r === "checkbox" ? {
      label: "Checkbox",
      textColor: w.white,
      backgroundColor: w.blue
    } : void 0,
    r === "radio" ? {
      label: "Radio",
      textColor: w.white,
      backgroundColor: w.purple
    } : void 0,
    e ? {
      label: "Multiple",
      textColor: w.black,
      backgroundColor: w.orange
    } : void 0
  ].filter(Boolean);
}
function de(e, t) {
  const r = t ? "path" in t ? "pathState" : "field" : "form", n = t ? "path" in t ? t == null ? void 0 : t.path : y(t == null ? void 0 : t.name) : "", o = { f: e == null ? void 0 : e.formId, ff: (t == null ? void 0 : t.id) || n, type: r };
  return btoa(encodeURIComponent(JSON.stringify(o)));
}
function Ht(e) {
  try {
    const t = JSON.parse(decodeURIComponent(atob(e))), r = Be[t.f];
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
function xe(e) {
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
function Qt(e) {
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
        value: Ie(t.value).reduce((u, s) => {
          var d;
          const b = (d = t.value[s]) === null || d === void 0 ? void 0 : d[0];
          return b && (u[s] = b), u;
        }, {})
      }
    ]
  };
}
function Ue(e) {
  return {
    bgColor: e ? w.success : w.error,
    textColor: e ? w.black : w.white
  };
}
function Zt(e, t, r) {
  return Ne(r == null ? void 0 : r.type) ? tr(e, t, r) : $e(e, t, r);
}
function $e(e, t, r) {
  const { initialValue: n, validateOnMount: o, bails: i, type: l, checkedValue: u, label: s, validateOnValueUpdate: d, uncheckedValue: b, controlled: m, keepValueOnUnmount: O, syncVModel: h, form: C } = er(r), M = m ? Me(Ce) : void 0, f = C || M, E = S(() => bt(y(e))), j = S(() => {
    if (y(f == null ? void 0 : f.schema))
      return;
    const v = c(t);
    return ie(v) || W(v) || _(v) || Array.isArray(v) ? v : Te(v);
  }), Le = !_(j.value) && W(y(t)), { id: Q, value: $, initialValue: Ge, meta: k, setState: Y, errors: Z, flags: X } = Ut(E, {
    modelValue: n,
    form: f,
    bails: i,
    label: s,
    type: l,
    validate: j.value ? fe : void 0,
    schema: Le ? t : void 0
  }), qe = S(() => Z.value[0]);
  h && rr({
    value: $,
    prop: h,
    handleChange: ve,
    shouldValidate: () => d && !X.pendingReset
  });
  const We = (a, v = !1) => {
    k.touched = !0, v && F();
  };
  async function ce(a) {
    var v, V;
    if (f != null && f.validateSchema) {
      const { results: p } = await f.validateSchema(a);
      return (v = p[y(E)]) !== null && v !== void 0 ? v : { valid: !0, errors: [] };
    }
    return j.value ? Mt($.value, j.value, {
      name: y(E),
      label: y(s),
      values: (V = f == null ? void 0 : f.values) !== null && V !== void 0 ? V : {},
      bails: i
    }) : { valid: !0, errors: [] };
  }
  const F = we(async () => (k.pending = !0, k.validated = !0, ce("validated-only")), (a) => (X.pendingUnmount[x.id] || (Y({ errors: a.errors }), k.pending = !1, k.valid = a.valid), a)), D = we(async () => ce("silent"), (a) => (k.valid = a.valid, a));
  function fe(a) {
    return (a == null ? void 0 : a.mode) === "silent" ? D() : F();
  }
  function ve(a, v = !0) {
    const V = De(a);
    ee(V, v);
  }
  Qe(() => {
    if (o)
      return F();
    (!f || !f.validateSchema) && D();
  });
  function Ke(a) {
    k.touched = a;
  }
  function me(a) {
    var v;
    const V = a && "value" in a ? a.value : Ge.value;
    Y({
      value: I(V),
      initialValue: I(V),
      touched: (v = a == null ? void 0 : a.touched) !== null && v !== void 0 ? v : !1,
      errors: (a == null ? void 0 : a.errors) || []
    }), k.pending = !1, k.validated = !1, D();
  }
  const be = B();
  function ee(a, v = !0) {
    $.value = be && h ? kt(a, be.props.modelModifiers) : a, (v ? F : D)();
  }
  function Je(a) {
    Y({ errors: Array.isArray(a) ? a : [a] });
  }
  const Ye = S({
    get() {
      return $.value;
    },
    set(a) {
      ee(a, d);
    }
  }), x = {
    id: Q,
    name: E,
    label: s,
    value: Ye,
    meta: k,
    errors: Z,
    errorMessage: qe,
    type: l,
    checkedValue: u,
    uncheckedValue: b,
    bails: i,
    keepValueOnUnmount: O,
    resetField: me,
    handleReset: () => me(),
    validate: fe,
    handleChange: ve,
    handleBlur: We,
    setState: Y,
    setTouched: Ke,
    setErrors: Je,
    setValue: ee
  };
  if (Ze(yt, x), ue(t) && typeof c(t) != "function" && R(t, (a, v) => {
    A(a, v) || (k.validated ? F() : D());
  }, {
    deep: !0
  }), process.env.NODE_ENV !== "production" && (x._vm = B(), R(() => Object.assign(Object.assign({ errors: Z.value }, k), { value: $.value }), le, {
    deep: !0
  }), f || Kt(x)), !f)
    return x;
  const Xe = S(() => {
    const a = j.value;
    return !a || _(a) || ie(a) || W(a) || Array.isArray(a) ? {} : Object.keys(a).reduce((v, V) => {
      const p = Nt(a[V]).map((L) => L.__locatorRef).reduce((L, T) => {
        const P = U(f.values, T) || f.values[T];
        return P !== void 0 && (L[T] = P), L;
      }, {});
      return Object.assign(v, p), v;
    }, {});
  });
  return R(Xe, (a, v) => {
    if (!Object.keys(a).length)
      return;
    !A(a, v) && (k.validated ? F() : D());
  }), et(() => {
    var a;
    const v = (a = y(x.keepValueOnUnmount)) !== null && a !== void 0 ? a : y(f.keepValuesOnUnmount), V = y(E);
    if (v || !f || X.pendingUnmount[x.id]) {
      f == null || f.removePathState(V, Q);
      return;
    }
    X.pendingUnmount[x.id] = !0;
    const p = f.getPathState(V);
    if (Array.isArray(p == null ? void 0 : p.id) && (p != null && p.multiple) ? p != null && p.id.includes(x.id) : (p == null ? void 0 : p.id) === x.id) {
      if (p != null && p.multiple && Array.isArray(p.value)) {
        const T = p.value.findIndex((P) => A(P, y(x.checkedValue)));
        if (T > -1) {
          const P = [...p.value];
          P.splice(T, 1), f.setFieldValue(V, P);
        }
        Array.isArray(p.id) && p.id.splice(p.id.indexOf(x.id), 1);
      } else
        f.unsetPathValue(y(E));
      f.removePathState(V, Q);
    }
  }), x;
}
function er(e) {
  const t = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: void 0,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    syncVModel: !1,
    controlled: !0
  }), r = !!(e != null && e.syncVModel), n = typeof (e == null ? void 0 : e.syncVModel) == "string" ? e.syncVModel : (e == null ? void 0 : e.modelPropName) || "modelValue", o = r && !("initialValue" in (e || {})) ? ae(B(), n) : e == null ? void 0 : e.initialValue;
  if (!e)
    return Object.assign(Object.assign({}, t()), { initialValue: o });
  const i = "valueProp" in e ? e.valueProp : e.checkedValue, l = "standalone" in e ? !e.standalone : e.controlled, u = (e == null ? void 0 : e.modelPropName) || (e == null ? void 0 : e.syncVModel) || !1;
  return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
    initialValue: o,
    controlled: l ?? !0,
    checkedValue: i,
    syncVModel: u
  });
}
function tr(e, t, r) {
  const n = r != null && r.standalone ? void 0 : Me(Ce), o = r == null ? void 0 : r.checkedValue, i = r == null ? void 0 : r.uncheckedValue;
  function l(u) {
    const s = u.handleChange, d = S(() => {
      const m = y(u.value), O = y(o);
      return Array.isArray(m) ? m.findIndex((h) => A(h, O)) >= 0 : A(O, m);
    });
    function b(m, O = !0) {
      var h, C;
      if (d.value === ((h = m == null ? void 0 : m.target) === null || h === void 0 ? void 0 : h.checked)) {
        O && u.validate();
        return;
      }
      const M = y(e), f = n == null ? void 0 : n.getPathState(M), E = De(m);
      let j = (C = y(o)) !== null && C !== void 0 ? C : E;
      n && (f != null && f.multiple) && f.type === "checkbox" ? j = Oe(U(n.values, M) || [], j, void 0) : (r == null ? void 0 : r.type) === "checkbox" && (j = Oe(y(u.value), j, y(i))), s(j, O);
    }
    return Object.assign(Object.assign({}, u), {
      checked: d,
      checkedValue: o,
      uncheckedValue: i,
      handleChange: b
    });
  }
  return l($e(e, t, r));
}
function rr({ prop: e, value: t, handleChange: r, shouldValidate: n }) {
  const o = B();
  if (!o || !e) {
    process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
    return;
  }
  const i = typeof e == "string" ? e : "modelValue", l = `update:${i}`;
  i in o.props && (R(t, (u) => {
    A(u, ae(o, i)) || o.emit(l, u);
  }), R(() => ae(o, i), (u) => {
    if (u === ye && t.value === void 0)
      return;
    const s = u === ye ? void 0 : u;
    A(s, t.value) || r(s, n());
  }));
}
function ae(e, t) {
  if (e)
    return e.props[t];
}
const nr = { class: "relative" }, or = ["type", "disabled", "placeholder"], ir = { key: 0 }, lr = {
  key: 1,
  class: "mb-2 mt-1 text-xs text-red-600"
}, ar = /* @__PURE__ */ ne({
  __name: "PMGInput",
  props: {
    name: {},
    label: {},
    modelValue: {},
    type: { default: "text" },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: " " }
  },
  setup(e) {
    const t = e, r = it(), n = S(() => "required" in r), o = H(null), i = S(
      () => t.placeholder && t.placeholder.trim() !== ""
    ), { value: l, handleBlur: u, meta: s, errorMessage: d } = Zt(
      t.name,
      void 0,
      {
        syncVModel: !0,
        validateOnValueUpdate: !1
      }
    );
    return (b, m) => (q(), G("div", nr, [
      lt(at("input", ut({
        ref_key: "inputRef",
        ref: o,
        onBlur: m[0] || (m[0] = (O) => c(u)(O, !0)),
        "onUpdate:modelValue": m[1] || (m[1] = (O) => ue(l) ? l.value = O : null),
        type: b.type,
        disabled: b.disabled,
        placeholder: i.value ? b.placeholder : " "
      }, c(r), {
        class: [
          "peer h-10 w-full rounded-[6px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-0 transition-all placeholder-shown:border focus:border-2 focus:outline-0 disabled:opacity-50",
          c(s).valid === !1 && c(s).touched ? "!placeholder-shown:border-red-500 border-red-500 border-t-transparent text-red-500 placeholder-shown:border-t-red-500 focus:border-red-500 focus:border-t-transparent" : "!placeholder-shown:border-gray-700 border-gray-700 border-t-transparent text-gray-700 placeholder-shown:border-t-gray-700 focus:border-gray-700 focus:border-t-transparent"
        ]
      }), null, 16, or), [
        [st, c(l)]
      ]),
      b.label ? (q(), G("label", {
        key: 0,
        class: Ae(["before:content[' '] after:content[' '] pointer-events-none absolute left-0 flex h-full w-full select-none !overflow-visible truncate font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-disabled:opacity-50", [
          // Position and size based on placeholder or focus state
          i.value || c(l) ? "-top-[6.5px] text-[11px] before:mt-[6.5px] after:mt-[6.5px]" : "peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:-top-[6.5px] peer-focus:before:mt-[6.5px] peer-focus:after:mt-[6.5px] -top-[6.5px] text-[11px] before:mt-[6.5px] after:mt-[6.5px]",
          // Colors based on validation state
          c(s).valid === !1 && c(s).touched ? "text-red-500 before:border-red-500 after:border-red-500 peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:!border-red-500" : "text-gray-700 before:border-gray-700 after:border-gray-700 peer-placeholder-shown:text-gray-700 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-gray-700 peer-focus:before:border-t-2 peer-focus:before:!border-gray-700 peer-focus:after:border-t-2 peer-focus:after:!border-gray-700"
        ]])
      }, [
        dt(he(b.label) + " ", 1),
        n.value ? (q(), G("span", ir, "  *")) : te("", !0)
      ], 2)) : te("", !0),
      c(s).touched && c(s).valid === !1 && c(d) ? (q(), G("div", lr, he(c(d)), 1)) : te("", !0)
    ]));
  }
}), sr = {
  install(e) {
    e.component("PMGButton", ft), e.component("PMGInput", ar);
  }
};
export {
  ft as PMGButton,
  ar as PMGInput,
  sr as default
};
