import {
  require_lib
} from "./chunk-LRR3BTZH.js";
import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-WLQVLJR5.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-ROME4SDB.js";

// node_modules/.pnpm/@vue-office+pdf@1.4.2_vue@3.3.4/node_modules/@vue-office/pdf/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/@vue-office+pdf@1.4.2_vue@3.3.4/node_modules/@vue-office/pdf/lib/index.js"(exports, module) {
    (function(p, l) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = l(require_lib(), (init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : typeof define == "function" && define.amd ? define(["vue-demi", "vue"], l) : (p = typeof globalThis != "undefined" ? globalThis : p || self, p["vue-office-pdf"] = l(p.VueDemi, p.Vue));
    })(exports, function(p, l) {
      "use strict";
      var kh = Object.defineProperty;
      var Ct = Object.getOwnPropertySymbols;
      var Eh = Object.prototype.hasOwnProperty, jh = Object.prototype.propertyIsEnumerable;
      var Tt = (p2, l2, _2) => l2 in p2 ? kh(p2, l2, { enumerable: true, configurable: true, writable: true, value: _2 }) : p2[l2] = _2, It = (p2, l2) => {
        for (var _2 in l2 || (l2 = {}))
          Eh.call(l2, _2) && Tt(p2, _2, l2[_2]);
        if (Ct)
          for (var _2 of Ct(l2))
            jh.call(l2, _2) && Tt(p2, _2, l2[_2]);
        return p2;
      };
      var Rt = (p2, l2, _2) => new Promise((ee2, H2) => {
        var te2 = (w2) => {
          try {
            L2(_2.next(w2));
          } catch (m2) {
            H2(m2);
          }
        }, ne2 = (w2) => {
          try {
            L2(_2.throw(w2));
          } catch (m2) {
            H2(m2);
          }
        }, L2 = (w2) => w2.done ? ee2(w2.value) : Promise.resolve(w2.value).then(te2, ne2);
        L2((_2 = _2.apply(p2, l2)).next());
      });
      function H(e) {
        return typeof e == "string" ? e : e instanceof Blob ? URL.createObjectURL(e) : e instanceof ArrayBuffer ? URL.createObjectURL(new Blob([e])) : e instanceof Response ? URL.createObjectURL(e.blob()) : e;
      }
      function te(e) {
        return new Promise((t, n) => {
          let r = document.createElement("script");
          r.src = e, r.onload = function() {
            t();
          }, r.onerror = function() {
            n();
          }, document.body.append(r);
        });
      }
      function ne(e, t) {
        return Rt(this, null, function* () {
          t && (t instanceof ArrayBuffer && (t = new Blob([t])), L(e, URL.createObjectURL(t)));
        });
      }
      function L(e, t) {
        let n = document.createElement("a");
        n.download = e, n.style.display = "none", n.href = t, document.body.appendChild(n), n.click(), document.body.removeChild(n);
      }
      function w(e) {
        var t, n, r, a, s;
        for (t = "", r = e.length, n = 0; n < r; n++)
          a = e.charCodeAt(n), a >= 1 && a <= 127 ? t += e.charAt(n) : a > 2047 ? (s = 224 | a >> 12 & 15, t += String.fromCharCode(s), s = 128 | a >> 6 & 63, t += String.fromCharCode(s), s = 128 | a >> 0 & 63, t += String.fromCharCode(s)) : (s = 192 | a >> 6 & 31, t += String.fromCharCode(s), s = 128 | a >> 0 & 63, t += String.fromCharCode(s));
        return t;
      }
      var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      function Ft(e) {
        var t, n, r, a, s, i;
        for (r = e.length, n = 0, t = ""; n < r; ) {
          if (a = e.charCodeAt(n++) & 255, n == r) {
            t += m.charAt(a >> 2), t += m.charAt((a & 3) << 4), t += "==";
            break;
          }
          if (s = e.charCodeAt(n++), n == r) {
            t += m.charAt(a >> 2), t += m.charAt((a & 3) << 4 | (s & 240) >> 4), t += m.charAt((s & 15) << 2), t += "=";
            break;
          }
          i = e.charCodeAt(n++), t += m.charAt(a >> 2), t += m.charAt((a & 3) << 4 | (s & 240) >> 4), t += m.charAt((s & 15) << 2 | (i & 192) >> 6), t += m.charAt(i & 63);
        }
        return t;
      }
      function Se(e) {
        return Ft(w(e));
      }
      var X = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
      function Mt(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
          a[n] = t(e[n], n, e);
        return a;
      }
      var xe = Mt;
      function Dt() {
        this.__data__ = [], this.size = 0;
      }
      var Lt = Dt;
      function Nt(e, t) {
        return e === t || e !== e && t !== t;
      }
      var Ae = Nt, Ut = Ae;
      function Bt(e, t) {
        for (var n = e.length; n--; )
          if (Ut(e[n][0], t))
            return n;
        return -1;
      }
      var z = Bt, qt = z, $t = Array.prototype, Gt = $t.splice;
      function Wt(e) {
        var t = this.__data__, n = qt(t, e);
        if (n < 0)
          return false;
        var r = t.length - 1;
        return n == r ? t.pop() : Gt.call(t, n, 1), --this.size, true;
      }
      var Ht = Wt, Xt = z;
      function zt(e) {
        var t = this.__data__, n = Xt(t, e);
        return n < 0 ? void 0 : t[n][1];
      }
      var Vt = zt, Kt = z;
      function Yt(e) {
        return Kt(this.__data__, e) > -1;
      }
      var Jt = Yt, Zt = z;
      function Qt(e, t) {
        var n = this.__data__, r = Zt(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
      }
      var en = Qt, tn = Lt, nn = Ht, rn = Vt, an = Jt, sn = en;
      function O(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      O.prototype.clear = tn, O.prototype.delete = nn, O.prototype.get = rn, O.prototype.has = an, O.prototype.set = sn;
      var V = O, on = V;
      function ln() {
        this.__data__ = new on(), this.size = 0;
      }
      var cn = ln;
      function un(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
      }
      var dn = un;
      function hn(e) {
        return this.__data__.get(e);
      }
      var pn = hn;
      function fn(e) {
        return this.__data__.has(e);
      }
      var _n = fn, gn = typeof X == "object" && X && X.Object === Object && X, ke = gn, mn = ke, bn = typeof self == "object" && self && self.Object === Object && self, vn = mn || bn || Function("return this")(), v = vn, yn = v, wn = yn.Symbol, N = wn, Ee = N, je = Object.prototype, Sn = je.hasOwnProperty, xn = je.toString, U = Ee ? Ee.toStringTag : void 0;
      function An(e) {
        var t = Sn.call(e, U), n = e[U];
        try {
          e[U] = void 0;
          var r = true;
        } catch (s) {
        }
        var a = xn.call(e);
        return r && (t ? e[U] = n : delete e[U]), a;
      }
      var kn = An, En = Object.prototype, jn = En.toString;
      function Pn(e) {
        return jn.call(e);
      }
      var On = Pn, Pe = N, Cn = kn, Tn = On, In = "[object Null]", Rn = "[object Undefined]", Oe = Pe ? Pe.toStringTag : void 0;
      function Fn(e) {
        return e == null ? e === void 0 ? Rn : In : Oe && Oe in Object(e) ? Cn(e) : Tn(e);
      }
      var C = Fn;
      function Mn(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      var B = Mn, Dn = C, Ln = B, Nn = "[object AsyncFunction]", Un = "[object Function]", Bn = "[object GeneratorFunction]", qn = "[object Proxy]";
      function $n(e) {
        if (!Ln(e))
          return false;
        var t = Dn(e);
        return t == Un || t == Bn || t == Nn || t == qn;
      }
      var Ce = $n, Gn = v, Wn = Gn["__core-js_shared__"], Hn = Wn, re = Hn, Te = function() {
        var e = /[^.]+$/.exec(re && re.keys && re.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }();
      function Xn(e) {
        return !!Te && Te in e;
      }
      var zn = Xn, Vn = Function.prototype, Kn = Vn.toString;
      function Yn(e) {
        if (e != null) {
          try {
            return Kn.call(e);
          } catch (t) {
          }
          try {
            return e + "";
          } catch (t) {
          }
        }
        return "";
      }
      var Ie = Yn, Jn = Ce, Zn = zn, Qn = B, er = Ie, tr = /[\\^$.*+?()[\]{}|]/g, nr = /^\[object .+?Constructor\]$/, rr = Function.prototype, ar = Object.prototype, sr = rr.toString, ir = ar.hasOwnProperty, or = RegExp("^" + sr.call(ir).replace(tr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function lr(e) {
        if (!Qn(e) || Zn(e))
          return false;
        var t = Jn(e) ? or : nr;
        return t.test(er(e));
      }
      var cr = lr;
      function ur(e, t) {
        return e == null ? void 0 : e[t];
      }
      var dr = ur, hr = cr, pr = dr;
      function fr(e, t) {
        var n = pr(e, t);
        return hr(n) ? n : void 0;
      }
      var A = fr, _r = A, gr = v, mr = _r(gr, "Map"), ae = mr, br = A, vr = br(Object, "create"), K = vr, Re = K;
      function yr() {
        this.__data__ = Re ? Re(null) : {}, this.size = 0;
      }
      var wr = yr;
      function Sr(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      var xr = Sr, Ar = K, kr = "__lodash_hash_undefined__", Er = Object.prototype, jr = Er.hasOwnProperty;
      function Pr(e) {
        var t = this.__data__;
        if (Ar) {
          var n = t[e];
          return n === kr ? void 0 : n;
        }
        return jr.call(t, e) ? t[e] : void 0;
      }
      var Or = Pr, Cr = K, Tr = Object.prototype, Ir = Tr.hasOwnProperty;
      function Rr(e) {
        var t = this.__data__;
        return Cr ? t[e] !== void 0 : Ir.call(t, e);
      }
      var Fr = Rr, Mr = K, Dr = "__lodash_hash_undefined__";
      function Lr(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = Mr && t === void 0 ? Dr : t, this;
      }
      var Nr = Lr, Ur = wr, Br = xr, qr = Or, $r = Fr, Gr = Nr;
      function T(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      T.prototype.clear = Ur, T.prototype.delete = Br, T.prototype.get = qr, T.prototype.has = $r, T.prototype.set = Gr;
      var Wr = T, Fe = Wr, Hr = V, Xr = ae;
      function zr() {
        this.size = 0, this.__data__ = { hash: new Fe(), map: new (Xr || Hr)(), string: new Fe() };
      }
      var Vr = zr;
      function Kr(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      var Yr = Kr, Jr = Yr;
      function Zr(e, t) {
        var n = e.__data__;
        return Jr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
      }
      var Y = Zr, Qr = Y;
      function ea(e) {
        var t = Qr(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      var ta = ea, na = Y;
      function ra(e) {
        return na(this, e).get(e);
      }
      var aa = ra, sa = Y;
      function ia(e) {
        return sa(this, e).has(e);
      }
      var oa = ia, la = Y;
      function ca(e, t) {
        var n = la(this, e), r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
      }
      var ua = ca, da = Vr, ha = ta, pa = aa, fa = oa, _a = ua;
      function I(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      I.prototype.clear = da, I.prototype.delete = ha, I.prototype.get = pa, I.prototype.has = fa, I.prototype.set = _a;
      var Me = I, ga = V, ma = ae, ba = Me, va = 200;
      function ya(e, t) {
        var n = this.__data__;
        if (n instanceof ga) {
          var r = n.__data__;
          if (!ma || r.length < va - 1)
            return r.push([e, t]), this.size = ++n.size, this;
          n = this.__data__ = new ba(r);
        }
        return n.set(e, t), this.size = n.size, this;
      }
      var wa = ya, Sa = V, xa = cn, Aa = dn, ka = pn, Ea = _n, ja = wa;
      function R(e) {
        var t = this.__data__ = new Sa(e);
        this.size = t.size;
      }
      R.prototype.clear = xa, R.prototype.delete = Aa, R.prototype.get = ka, R.prototype.has = Ea, R.prototype.set = ja;
      var Pa = R;
      function Oa(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== false; )
          ;
        return e;
      }
      var Ca = Oa, Ta = A, Ia = function() {
        try {
          var e = Ta(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (t) {
        }
      }(), De = Ia, Le = De;
      function Ra(e, t, n) {
        t == "__proto__" && Le ? Le(e, t, { configurable: true, enumerable: true, value: n, writable: true }) : e[t] = n;
      }
      var Ne = Ra, Fa = Ne, Ma = Ae, Da = Object.prototype, La = Da.hasOwnProperty;
      function Na(e, t, n) {
        var r = e[t];
        (!(La.call(e, t) && Ma(r, n)) || n === void 0 && !(t in e)) && Fa(e, t, n);
      }
      var Ue = Na, Ua = Ue, Ba = Ne;
      function qa(e, t, n, r) {
        var a = !n;
        n || (n = {});
        for (var s = -1, i = t.length; ++s < i; ) {
          var o = t[s], f = r ? r(n[o], e[o], o, n, e) : void 0;
          f === void 0 && (f = e[o]), a ? Ba(n, o, f) : Ua(n, o, f);
        }
        return n;
      }
      var q = qa;
      function $a(e, t) {
        for (var n = -1, r = Array(e); ++n < e; )
          r[n] = t(n);
        return r;
      }
      var Ga = $a;
      function Wa(e) {
        return e != null && typeof e == "object";
      }
      var k = Wa, Ha = C, Xa = k, za = "[object Arguments]";
      function Va(e) {
        return Xa(e) && Ha(e) == za;
      }
      var Ka = Va, Be = Ka, Ya = k, qe = Object.prototype, Ja = qe.hasOwnProperty, Za = qe.propertyIsEnumerable, Qa = Be(function() {
        return arguments;
      }()) ? Be : function(e) {
        return Ya(e) && Ja.call(e, "callee") && !Za.call(e, "callee");
      }, $e = Qa, es = Array.isArray, E = es, $ = {}, ts = { get exports() {
        return $;
      }, set exports(e) {
        $ = e;
      } };
      function ns() {
        return false;
      }
      var rs = ns;
      (function(e, t) {
        var n = v, r = rs, a = t && !t.nodeType && t, s = a && true && e && !e.nodeType && e, i = s && s.exports === a, o = i ? n.Buffer : void 0, f = o ? o.isBuffer : void 0, h = f || r;
        e.exports = h;
      })(ts, $);
      var as = 9007199254740991, ss = /^(?:0|[1-9]\d*)$/;
      function is(e, t) {
        var n = typeof e;
        return t = t == null ? as : t, !!t && (n == "number" || n != "symbol" && ss.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      var os = is, ls = 9007199254740991;
      function cs(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ls;
      }
      var Ge = cs, us = C, ds = Ge, hs = k, ps = "[object Arguments]", fs = "[object Array]", _s = "[object Boolean]", gs = "[object Date]", ms = "[object Error]", bs = "[object Function]", vs = "[object Map]", ys = "[object Number]", ws = "[object Object]", Ss = "[object RegExp]", xs = "[object Set]", As = "[object String]", ks = "[object WeakMap]", Es = "[object ArrayBuffer]", js = "[object DataView]", Ps = "[object Float32Array]", Os = "[object Float64Array]", Cs = "[object Int8Array]", Ts = "[object Int16Array]", Is = "[object Int32Array]", Rs = "[object Uint8Array]", Fs = "[object Uint8ClampedArray]", Ms = "[object Uint16Array]", Ds = "[object Uint32Array]", u = {};
      u[Ps] = u[Os] = u[Cs] = u[Ts] = u[Is] = u[Rs] = u[Fs] = u[Ms] = u[Ds] = true, u[ps] = u[fs] = u[Es] = u[_s] = u[js] = u[gs] = u[ms] = u[bs] = u[vs] = u[ys] = u[ws] = u[Ss] = u[xs] = u[As] = u[ks] = false;
      function Ls(e) {
        return hs(e) && ds(e.length) && !!u[us(e)];
      }
      var Ns = Ls;
      function Us(e) {
        return function(t) {
          return e(t);
        };
      }
      var se = Us, F = {}, Bs = { get exports() {
        return F;
      }, set exports(e) {
        F = e;
      } };
      (function(e, t) {
        var n = ke, r = t && !t.nodeType && t, a = r && true && e && !e.nodeType && e, s = a && a.exports === r, i = s && n.process, o = function() {
          try {
            var f = a && a.require && a.require("util").types;
            return f || i && i.binding && i.binding("util");
          } catch (h) {
          }
        }();
        e.exports = o;
      })(Bs, F);
      var qs = Ns, $s = se, We = F, He = We && We.isTypedArray, Gs = He ? $s(He) : qs, Ws = Gs, Hs = Ga, Xs = $e, zs = E, Vs = $, Ks = os, Ys = Ws, Js = Object.prototype, Zs = Js.hasOwnProperty;
      function Qs(e, t) {
        var n = zs(e), r = !n && Xs(e), a = !n && !r && Vs(e), s = !n && !r && !a && Ys(e), i = n || r || a || s, o = i ? Hs(e.length, String) : [], f = o.length;
        for (var h in e)
          (t || Zs.call(e, h)) && !(i && (h == "length" || a && (h == "offset" || h == "parent") || s && (h == "buffer" || h == "byteLength" || h == "byteOffset") || Ks(h, f))) && o.push(h);
        return o;
      }
      var Xe = Qs, ei = Object.prototype;
      function ti(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || ei;
        return e === n;
      }
      var ie = ti;
      function ni(e, t) {
        return function(n) {
          return e(t(n));
        };
      }
      var ze = ni, ri = ze, ai = ri(Object.keys, Object), si = ai, ii = ie, oi = si, li = Object.prototype, ci = li.hasOwnProperty;
      function ui(e) {
        if (!ii(e))
          return oi(e);
        var t = [];
        for (var n in Object(e))
          ci.call(e, n) && n != "constructor" && t.push(n);
        return t;
      }
      var di = ui, hi = Ce, pi = Ge;
      function fi(e) {
        return e != null && pi(e.length) && !hi(e);
      }
      var Ve = fi, _i = Xe, gi = di, mi = Ve;
      function bi(e) {
        return mi(e) ? _i(e) : gi(e);
      }
      var oe = bi, vi = q, yi = oe;
      function wi(e, t) {
        return e && vi(t, yi(t), e);
      }
      var Si = wi;
      function xi(e) {
        var t = [];
        if (e != null)
          for (var n in Object(e))
            t.push(n);
        return t;
      }
      var Ai = xi, ki = B, Ei = ie, ji = Ai, Pi = Object.prototype, Oi = Pi.hasOwnProperty;
      function Ci(e) {
        if (!ki(e))
          return ji(e);
        var t = Ei(e), n = [];
        for (var r in e)
          r == "constructor" && (t || !Oi.call(e, r)) || n.push(r);
        return n;
      }
      var Ti = Ci, Ii = Xe, Ri = Ti, Fi = Ve;
      function Mi(e) {
        return Fi(e) ? Ii(e, true) : Ri(e);
      }
      var le = Mi, Di = q, Li = le;
      function Ni(e, t) {
        return e && Di(t, Li(t), e);
      }
      var Ui = Ni, J = {}, Bi = { get exports() {
        return J;
      }, set exports(e) {
        J = e;
      } };
      (function(e, t) {
        var n = v, r = t && !t.nodeType && t, a = r && true && e && !e.nodeType && e, s = a && a.exports === r, i = s ? n.Buffer : void 0, o = i ? i.allocUnsafe : void 0;
        function f(h, D) {
          if (D)
            return h.slice();
          var d = h.length, b = o ? o(d) : new h.constructor(d);
          return h.copy(b), b;
        }
        e.exports = f;
      })(Bi, J);
      function qi(e, t) {
        var n = -1, r = e.length;
        for (t || (t = Array(r)); ++n < r; )
          t[n] = e[n];
        return t;
      }
      var $i = qi;
      function Gi(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, a = 0, s = []; ++n < r; ) {
          var i = e[n];
          t(i, n, e) && (s[a++] = i);
        }
        return s;
      }
      var Wi = Gi;
      function Hi() {
        return [];
      }
      var Ke = Hi, Xi = Wi, zi = Ke, Vi = Object.prototype, Ki = Vi.propertyIsEnumerable, Ye = Object.getOwnPropertySymbols, Yi = Ye ? function(e) {
        return e == null ? [] : (e = Object(e), Xi(Ye(e), function(t) {
          return Ki.call(e, t);
        }));
      } : zi, ce = Yi, Ji = q, Zi = ce;
      function Qi(e, t) {
        return Ji(e, Zi(e), t);
      }
      var eo = Qi;
      function to(e, t) {
        for (var n = -1, r = t.length, a = e.length; ++n < r; )
          e[a + n] = t[n];
        return e;
      }
      var ue = to, no = ze, ro = no(Object.getPrototypeOf, Object), de = ro, ao = ue, so = de, io = ce, oo = Ke, lo = Object.getOwnPropertySymbols, co = lo ? function(e) {
        for (var t = []; e; )
          ao(t, io(e)), e = so(e);
        return t;
      } : oo, Je = co, uo = q, ho = Je;
      function po(e, t) {
        return uo(e, ho(e), t);
      }
      var fo = po, _o = ue, go = E;
      function mo(e, t, n) {
        var r = t(e);
        return go(e) ? r : _o(r, n(e));
      }
      var Ze = mo, bo = Ze, vo = ce, yo = oe;
      function wo(e) {
        return bo(e, yo, vo);
      }
      var So = wo, xo = Ze, Ao = Je, ko = le;
      function Eo(e) {
        return xo(e, ko, Ao);
      }
      var Qe = Eo, jo = A, Po = v, Oo = jo(Po, "DataView"), Co = Oo, To = A, Io = v, Ro = To(Io, "Promise"), Fo = Ro, Mo = A, Do = v, Lo = Mo(Do, "Set"), No = Lo, Uo = A, Bo = v, qo = Uo(Bo, "WeakMap"), $o = qo, he = Co, pe = ae, fe = Fo, _e = No, ge = $o, et = C, M = Ie, tt = "[object Map]", Go = "[object Object]", nt = "[object Promise]", rt = "[object Set]", at = "[object WeakMap]", st = "[object DataView]", Wo = M(he), Ho = M(pe), Xo = M(fe), zo = M(_e), Vo = M(ge), j = et;
      (he && j(new he(new ArrayBuffer(1))) != st || pe && j(new pe()) != tt || fe && j(fe.resolve()) != nt || _e && j(new _e()) != rt || ge && j(new ge()) != at) && (j = function(e) {
        var t = et(e), n = t == Go ? e.constructor : void 0, r = n ? M(n) : "";
        if (r)
          switch (r) {
            case Wo:
              return st;
            case Ho:
              return tt;
            case Xo:
              return nt;
            case zo:
              return rt;
            case Vo:
              return at;
          }
        return t;
      });
      var me = j, Ko = Object.prototype, Yo = Ko.hasOwnProperty;
      function Jo(e) {
        var t = e.length, n = new e.constructor(t);
        return t && typeof e[0] == "string" && Yo.call(e, "index") && (n.index = e.index, n.input = e.input), n;
      }
      var Zo = Jo, Qo = v, el = Qo.Uint8Array, tl = el, it = tl;
      function nl(e) {
        var t = new e.constructor(e.byteLength);
        return new it(t).set(new it(e)), t;
      }
      var be = nl, rl = be;
      function al(e, t) {
        var n = t ? rl(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      var sl = al, il = /\w*$/;
      function ol(e) {
        var t = new e.constructor(e.source, il.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      var ll = ol, ot = N, lt = ot ? ot.prototype : void 0, ct = lt ? lt.valueOf : void 0;
      function cl(e) {
        return ct ? Object(ct.call(e)) : {};
      }
      var ul = cl, dl = be;
      function hl(e, t) {
        var n = t ? dl(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      var pl = hl, fl = be, _l = sl, gl = ll, ml = ul, bl = pl, vl = "[object Boolean]", yl = "[object Date]", wl = "[object Map]", Sl = "[object Number]", xl = "[object RegExp]", Al = "[object Set]", kl = "[object String]", El = "[object Symbol]", jl = "[object ArrayBuffer]", Pl = "[object DataView]", Ol = "[object Float32Array]", Cl = "[object Float64Array]", Tl = "[object Int8Array]", Il = "[object Int16Array]", Rl = "[object Int32Array]", Fl = "[object Uint8Array]", Ml = "[object Uint8ClampedArray]", Dl = "[object Uint16Array]", Ll = "[object Uint32Array]";
      function Nl(e, t, n) {
        var r = e.constructor;
        switch (t) {
          case jl:
            return fl(e);
          case vl:
          case yl:
            return new r(+e);
          case Pl:
            return _l(e, n);
          case Ol:
          case Cl:
          case Tl:
          case Il:
          case Rl:
          case Fl:
          case Ml:
          case Dl:
          case Ll:
            return bl(e, n);
          case wl:
            return new r();
          case Sl:
          case kl:
            return new r(e);
          case xl:
            return gl(e);
          case Al:
            return new r();
          case El:
            return ml(e);
        }
      }
      var Ul = Nl, Bl = B, ut = Object.create, ql = function() {
        function e() {
        }
        return function(t) {
          if (!Bl(t))
            return {};
          if (ut)
            return ut(t);
          e.prototype = t;
          var n = new e();
          return e.prototype = void 0, n;
        };
      }(), $l = ql, Gl = $l, Wl = de, Hl = ie;
      function Xl(e) {
        return typeof e.constructor == "function" && !Hl(e) ? Gl(Wl(e)) : {};
      }
      var zl = Xl, Vl = me, Kl = k, Yl = "[object Map]";
      function Jl(e) {
        return Kl(e) && Vl(e) == Yl;
      }
      var Zl = Jl, Ql = Zl, ec = se, dt = F, ht = dt && dt.isMap, tc = ht ? ec(ht) : Ql, nc = tc, rc = me, ac = k, sc = "[object Set]";
      function ic(e) {
        return ac(e) && rc(e) == sc;
      }
      var oc = ic, lc = oc, cc = se, pt = F, ft = pt && pt.isSet, uc = ft ? cc(ft) : lc, dc = uc, hc = Pa, pc = Ca, fc = Ue, _c = Si, gc = Ui, mc = J, bc = $i, vc = eo, yc = fo, wc = So, Sc = Qe, xc = me, Ac = Zo, kc = Ul, Ec = zl, jc = E, Pc = $, Oc = nc, Cc = B, Tc = dc, Ic = oe, Rc = le, Fc = 1, Mc = 2, Dc = 4, _t = "[object Arguments]", Lc = "[object Array]", Nc = "[object Boolean]", Uc = "[object Date]", Bc = "[object Error]", gt = "[object Function]", qc = "[object GeneratorFunction]", $c = "[object Map]", Gc = "[object Number]", mt = "[object Object]", Wc = "[object RegExp]", Hc = "[object Set]", Xc = "[object String]", zc = "[object Symbol]", Vc = "[object WeakMap]", Kc = "[object ArrayBuffer]", Yc = "[object DataView]", Jc = "[object Float32Array]", Zc = "[object Float64Array]", Qc = "[object Int8Array]", eu = "[object Int16Array]", tu = "[object Int32Array]", nu = "[object Uint8Array]", ru = "[object Uint8ClampedArray]", au = "[object Uint16Array]", su = "[object Uint32Array]", c = {};
      c[_t] = c[Lc] = c[Kc] = c[Yc] = c[Nc] = c[Uc] = c[Jc] = c[Zc] = c[Qc] = c[eu] = c[tu] = c[$c] = c[Gc] = c[mt] = c[Wc] = c[Hc] = c[Xc] = c[zc] = c[nu] = c[ru] = c[au] = c[su] = true, c[Bc] = c[gt] = c[Vc] = false;
      function Z(e, t, n, r, a, s) {
        var i, o = t & Fc, f = t & Mc, h = t & Dc;
        if (n && (i = a ? n(e, r, a, s) : n(e)), i !== void 0)
          return i;
        if (!Cc(e))
          return e;
        var D = jc(e);
        if (D) {
          if (i = Ac(e), !o)
            return bc(e, i);
        } else {
          var d = xc(e), b = d == gt || d == qc;
          if (Pc(e))
            return mc(e, o);
          if (d == mt || d == _t || b && !a) {
            if (i = f || b ? {} : Ec(e), !o)
              return f ? yc(e, gc(i, e)) : vc(e, _c(i, e));
          } else {
            if (!c[d])
              return a ? e : {};
            i = kc(e, d, o);
          }
        }
        s || (s = new hc());
        var S = s.get(e);
        if (S)
          return S;
        s.set(e, i), Tc(e) ? e.forEach(function(y) {
          i.add(Z(y, t, n, y, e, s));
        }) : Oc(e) && e.forEach(function(y, g) {
          i.set(g, Z(y, t, n, g, e, s));
        });
        var P = h ? f ? Sc : wc : f ? Rc : Ic, x = D ? void 0 : P(e);
        return pc(x || e, function(y, g) {
          x && (g = y, y = e[g]), fc(i, g, Z(y, t, n, g, e, s));
        }), i;
      }
      var iu = Z, ou = C, lu = k, cu = "[object Symbol]";
      function uu(e) {
        return typeof e == "symbol" || lu(e) && ou(e) == cu;
      }
      var ve = uu, du = E, hu = ve, pu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fu = /^\w*$/;
      function _u(e, t) {
        if (du(e))
          return false;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || hu(e) ? true : fu.test(e) || !pu.test(e) || t != null && e in Object(t);
      }
      var gu = _u, bt = Me, mu = "Expected a function";
      function ye(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new TypeError(mu);
        var n = function() {
          var r = arguments, a = t ? t.apply(this, r) : r[0], s = n.cache;
          if (s.has(a))
            return s.get(a);
          var i = e.apply(this, r);
          return n.cache = s.set(a, i) || s, i;
        };
        return n.cache = new (ye.Cache || bt)(), n;
      }
      ye.Cache = bt;
      var bu = ye, vu = bu, yu = 500;
      function wu(e) {
        var t = vu(e, function(r) {
          return n.size === yu && n.clear(), r;
        }), n = t.cache;
        return t;
      }
      var Su = wu, xu = Su, Au = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ku = /\\(\\)?/g, Eu = xu(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Au, function(n, r, a, s) {
          t.push(a ? s.replace(ku, "$1") : r || n);
        }), t;
      }), ju = Eu, vt = N, Pu = xe, Ou = E, Cu = ve, Tu = 1 / 0, yt = vt ? vt.prototype : void 0, wt = yt ? yt.toString : void 0;
      function St(e) {
        if (typeof e == "string")
          return e;
        if (Ou(e))
          return Pu(e, St) + "";
        if (Cu(e))
          return wt ? wt.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -Tu ? "-0" : t;
      }
      var Iu = St, Ru = Iu;
      function Fu(e) {
        return e == null ? "" : Ru(e);
      }
      var Mu = Fu, Du = E, Lu = gu, Nu = ju, Uu = Mu;
      function Bu(e, t) {
        return Du(e) ? e : Lu(e, t) ? [e] : Nu(Uu(e));
      }
      var we = Bu;
      function qu(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      }
      var $u = qu, Gu = ve, Wu = 1 / 0;
      function Hu(e) {
        if (typeof e == "string" || Gu(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -Wu ? "-0" : t;
      }
      var xt = Hu, Xu = we, zu = xt;
      function Vu(e, t) {
        t = Xu(t, e);
        for (var n = 0, r = t.length; e != null && n < r; )
          e = e[zu(t[n++])];
        return n && n == r ? e : void 0;
      }
      var Ku = Vu;
      function Yu(e, t, n) {
        var r = -1, a = e.length;
        t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var s = Array(a); ++r < a; )
          s[r] = e[r + t];
        return s;
      }
      var Ju = Yu, Zu = Ku, Qu = Ju;
      function ed(e, t) {
        return t.length < 2 ? e : Zu(e, Qu(t, 0, -1));
      }
      var td = ed, nd = we, rd = $u, ad = td, sd = xt;
      function id(e, t) {
        return t = nd(t, e), e = ad(e, t), e == null || delete e[sd(rd(t))];
      }
      var od = id, ld = C, cd = de, ud = k, dd = "[object Object]", hd = Function.prototype, pd = Object.prototype, At = hd.toString, fd = pd.hasOwnProperty, _d = At.call(Object);
      function gd(e) {
        if (!ud(e) || ld(e) != dd)
          return false;
        var t = cd(e);
        if (t === null)
          return true;
        var n = fd.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && At.call(n) == _d;
      }
      var md = gd, bd = md;
      function vd(e) {
        return bd(e) ? void 0 : e;
      }
      var yd = vd, kt = N, wd = $e, Sd = E, Et = kt ? kt.isConcatSpreadable : void 0;
      function xd(e) {
        return Sd(e) || wd(e) || !!(Et && e && e[Et]);
      }
      var Ad = xd, kd = ue, Ed = Ad;
      function jt(e, t, n, r, a) {
        var s = -1, i = e.length;
        for (n || (n = Ed), a || (a = []); ++s < i; ) {
          var o = e[s];
          t > 0 && n(o) ? t > 1 ? jt(o, t - 1, n, r, a) : kd(a, o) : r || (a[a.length] = o);
        }
        return a;
      }
      var jd = jt, Pd = jd;
      function Od(e) {
        var t = e == null ? 0 : e.length;
        return t ? Pd(e, 1) : [];
      }
      var Cd = Od;
      function Td(e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      }
      var Id = Td, Rd = Id, Pt = Math.max;
      function Fd(e, t, n) {
        return t = Pt(t === void 0 ? e.length - 1 : t, 0), function() {
          for (var r = arguments, a = -1, s = Pt(r.length - t, 0), i = Array(s); ++a < s; )
            i[a] = r[t + a];
          a = -1;
          for (var o = Array(t + 1); ++a < t; )
            o[a] = r[a];
          return o[t] = n(i), Rd(e, this, o);
        };
      }
      var Md = Fd;
      function Dd(e) {
        return function() {
          return e;
        };
      }
      var Ld = Dd;
      function Nd(e) {
        return e;
      }
      var Ud = Nd, Bd = Ld, Ot = De, qd = Ud, $d = Ot ? function(e, t) {
        return Ot(e, "toString", { configurable: true, enumerable: false, value: Bd(t), writable: true });
      } : qd, Gd = $d, Wd = 800, Hd = 16, Xd = Date.now;
      function zd(e) {
        var t = 0, n = 0;
        return function() {
          var r = Xd(), a = Hd - (r - n);
          if (n = r, a > 0) {
            if (++t >= Wd)
              return arguments[0];
          } else
            t = 0;
          return e.apply(void 0, arguments);
        };
      }
      var Vd = zd, Kd = Gd, Yd = Vd, Jd = Yd(Kd), Zd = Jd, Qd = Cd, eh = Md, th = Zd;
      function nh(e) {
        return th(eh(e, void 0, Qd), e + "");
      }
      var rh = nh, ah = xe, sh = iu, ih = od, oh = we, lh = q, ch = yd, uh = rh, dh = Qe, hh = 1, ph = 2, fh = 4, _h = uh(function(e, t) {
        var n = {};
        if (e == null)
          return n;
        var r = false;
        t = ah(t, function(s) {
          return s = oh(s, e), r || (r = s.length > 1), s;
        }), lh(e, dh(e), n), r && (n = sh(n, hh | ph | fh, ch));
        for (var a = t.length; a--; )
          ih(n, t[a]);
        return n;
      }), gh = _h;
      const mh = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, a] of t)
          n[r] = a;
        return n;
      }, bh = `data:text/javascript;base64,${Se(ee)}`, vh = `data:text/javascript;base64,${Se(_)}`, yh = p.defineComponent({ name: "VueOfficePdf", props: { src: [String, ArrayBuffer, Blob], requestOptions: { type: Object, default: () => ({}) }, staticFileUrl: { type: String, default: "https://unpkg.com/pdfjs-dist@3.1.81/" }, options: { type: Object, default: () => ({}) } }, emits: ["rendered", "error"], setup(e, { emit: t }) {
        let n = null, r = null;
        const a = p.ref([]), s = p.ref(0);
        function i() {
          return te(bh).then(() => {
            if (window.pdfjsLib)
              window.pdfjsLib.GlobalWorkerOptions.workerSrc = vh;
            else
              return Promise.reject("window.pdfjsLib未找到");
          });
        }
        function o() {
          return window.pdfjsLib ? Promise.resolve() : i();
        }
        function f() {
          if (!e.src) {
            s.value = 0;
            return;
          }
          r = window.pdfjsLib.getDocument(It({ url: H(e.src), cMapUrl: `${e.staticFileUrl.endsWith("/") ? e.staticFileUrl : e.staticFileUrl + "/"}cmaps/`, cMapPacked: true, enableXfa: true }, gh(e.options, ["width"]))), r.promise.then((d) => {
            n = d, s.value = n.numPages, h(1);
          }).catch((d) => {
            t("error", d);
          });
        }
        function h(d) {
          n.getPage(d).then((b) => {
            const S = b.getViewport({ scale: 2 }), P = window.devicePixelRatio || 1, x = a.value[d - 1], y = x.getContext("2d");
            x.width = Math.floor(S.width * P), x.height = Math.floor(S.height * P);
            let g = Math.floor(S.width), G = Math.floor(S.height);
            if (e.options.width) {
              let W = e.options.width / g;
              g = Math.floor(e.options.width), G = Math.floor(G * W);
            }
            if (g > document.documentElement.clientWidth) {
              let W = document.documentElement.clientWidth / g;
              g = Math.floor(document.documentElement.clientWidth), G = Math.floor(G * W);
            }
            x.style.width = g + "px", x.style.height = G + "px";
            const Ah = P !== 1 ? [P, 0, 0, P, 0, 0] : null;
            b.render({ canvasContext: y, transform: Ah, viewport: S }).promise.then(() => {
              s.value > d ? h(d + 1) : t("rendered");
            }).catch((W) => {
              t("error", W);
            });
          }).catch((b) => {
            t("error", b);
          });
        }
        p.onMounted(() => {
          e.src && o().then(f).catch((d) => {
            console.warn(d);
          });
        }), p.watch(() => e.src, () => {
          o().then(f).catch((d) => {
            console.warn(d);
          });
        });
        function D(d) {
          n && n._transport && n._transport.getData().then((b) => {
            ne(d || `vue-office-pdf-${(/* @__PURE__ */ new Date()).getTime()}.pdf`, b.buffer);
          });
        }
        return { rootRef: a, numPages: s, save: D };
      } }), wh = { class: "vue-office-pdf", ref: "vue-office-pdf", style: { "text-align": "center", "overflow-y": "auto" } }, Sh = { key: 0, class: "vue-office-pdf-wrapper", style: { background: "gray", padding: "30px 0", position: "relative" } };
      function xh(e, t, n, r, a, s) {
        return l.openBlock(), l.createElementBlock("div", wh, [e.numPages ? (l.openBlock(), l.createElementBlock("div", Sh, [(l.openBlock(true), l.createElementBlock(l.Fragment, null, l.renderList(e.numPages, (i) => (l.openBlock(), l.createElementBlock("canvas", { ref_for: true, ref: "rootRef", key: i, style: { width: "100%" } }))), 128))])) : l.createCommentVNode("", true)], 512);
      }
      const Q = mh(yh, [["render", xh]]);
      return Q.install = function(e) {
        e.component(Q.name, Q);
      }, Q;
    });
  }
});
export default require_lib2();
//# sourceMappingURL=@vue-office_pdf.js.map