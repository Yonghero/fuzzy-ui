import {
  require_lib
} from "./chunk-B2QV5IVB.js";
import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-WLQVLJR5.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-ROME4SDB.js";

// node_modules/.pnpm/@vue-office+pdf@1.5.3_vue@3.3.4/node_modules/@vue-office/pdf/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/@vue-office+pdf@1.5.3_vue@3.3.4/node_modules/@vue-office/pdf/lib/index.js"(exports, module) {
    (function(d, l) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = l(require_lib(), (init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : typeof define == "function" && define.amd ? define(["vue-demi", "vue"], l) : (d = typeof globalThis != "undefined" ? globalThis : d || self, d["vue-office-pdf"] = l(d.VueDemi, d.Vue));
    })(exports, function(d, l) {
      "use strict";
      var Oh = Object.defineProperty;
      var Ft = Object.getOwnPropertySymbols;
      var Ch = Object.prototype.hasOwnProperty, Th = Object.prototype.propertyIsEnumerable;
      var Mt = (d2, l2, _2) => l2 in d2 ? Oh(d2, l2, { enumerable: true, configurable: true, writable: true, value: _2 }) : d2[l2] = _2, Dt = (d2, l2) => {
        for (var _2 in l2 || (l2 = {}))
          Ch.call(l2, _2) && Mt(d2, _2, l2[_2]);
        if (Ft)
          for (var _2 of Ft(l2))
            Th.call(l2, _2) && Mt(d2, _2, l2[_2]);
        return d2;
      };
      var Lt = (d2, l2, _2) => new Promise((ne2, X2) => {
        var re2 = (S2) => {
          try {
            N2(_2.next(S2));
          } catch (b2) {
            X2(b2);
          }
        }, ae2 = (S2) => {
          try {
            N2(_2.throw(S2));
          } catch (b2) {
            X2(b2);
          }
        }, N2 = (S2) => S2.done ? ne2(S2.value) : Promise.resolve(S2.value).then(re2, ae2);
        N2((_2 = _2.apply(d2, l2)).next());
      });
      function X(e) {
        return typeof e == "string" ? e : e instanceof Blob ? URL.createObjectURL(e) : e instanceof ArrayBuffer ? URL.createObjectURL(new Blob([e])) : e instanceof Response ? URL.createObjectURL(e.blob()) : e;
      }
      function re(e) {
        return new Promise((t, n) => {
          let r = document.createElement("script");
          r.src = e, r.onload = function() {
            t();
          }, r.onerror = function() {
            n();
          }, document.body.append(r);
        });
      }
      function ae(e, t) {
        return Lt(this, null, function* () {
          t && (t instanceof ArrayBuffer && (t = new Blob([t])), N(e, URL.createObjectURL(t)));
        });
      }
      function N(e, t) {
        let n = document.createElement("a");
        n.download = e, n.style.display = "none", n.href = t, document.body.appendChild(n), n.click(), document.body.removeChild(n);
      }
      function S(e) {
        var t, n, r, a, s;
        for (t = "", r = e.length, n = 0; n < r; n++)
          a = e.charCodeAt(n), a >= 1 && a <= 127 ? t += e.charAt(n) : a > 2047 ? (s = 224 | a >> 12 & 15, t += String.fromCharCode(s), s = 128 | a >> 6 & 63, t += String.fromCharCode(s), s = 128 | a >> 0 & 63, t += String.fromCharCode(s)) : (s = 192 | a >> 6 & 31, t += String.fromCharCode(s), s = 128 | a >> 0 & 63, t += String.fromCharCode(s));
        return t;
      }
      var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      function Nt(e) {
        var t, n, r, a, s, i;
        for (r = e.length, n = 0, t = ""; n < r; ) {
          if (a = e.charCodeAt(n++) & 255, n == r) {
            t += b.charAt(a >> 2), t += b.charAt((a & 3) << 4), t += "==";
            break;
          }
          if (s = e.charCodeAt(n++), n == r) {
            t += b.charAt(a >> 2), t += b.charAt((a & 3) << 4 | (s & 240) >> 4), t += b.charAt((s & 15) << 2), t += "=";
            break;
          }
          i = e.charCodeAt(n++), t += b.charAt(a >> 2), t += b.charAt((a & 3) << 4 | (s & 240) >> 4), t += b.charAt((s & 15) << 2 | (i & 192) >> 6), t += b.charAt(i & 63);
        }
        return t;
      }
      function Ee(e) {
        return Nt(S(e));
      }
      var z = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
      function Ut(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
          a[n] = t(e[n], n, e);
        return a;
      }
      var je = Ut;
      function Bt() {
        this.__data__ = [], this.size = 0;
      }
      var qt = Bt;
      function $t(e, t) {
        return e === t || e !== e && t !== t;
      }
      var Pe = $t, Gt = Pe;
      function Wt(e, t) {
        for (var n = e.length; n--; )
          if (Gt(e[n][0], t))
            return n;
        return -1;
      }
      var V = Wt, Ht = V, Xt = Array.prototype, zt = Xt.splice;
      function Vt(e) {
        var t = this.__data__, n = Ht(t, e);
        if (n < 0)
          return false;
        var r = t.length - 1;
        return n == r ? t.pop() : zt.call(t, n, 1), --this.size, true;
      }
      var Kt = Vt, Yt = V;
      function Jt(e) {
        var t = this.__data__, n = Yt(t, e);
        return n < 0 ? void 0 : t[n][1];
      }
      var Zt = Jt, Qt = V;
      function en(e) {
        return Qt(this.__data__, e) > -1;
      }
      var tn = en, nn = V;
      function rn(e, t) {
        var n = this.__data__, r = nn(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
      }
      var an = rn, sn = qt, on = Kt, ln = Zt, cn = tn, un = an;
      function C(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      C.prototype.clear = sn, C.prototype.delete = on, C.prototype.get = ln, C.prototype.has = cn, C.prototype.set = un;
      var K = C, dn = K;
      function hn() {
        this.__data__ = new dn(), this.size = 0;
      }
      var pn = hn;
      function fn(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n;
      }
      var _n = fn;
      function gn(e) {
        return this.__data__.get(e);
      }
      var mn = gn;
      function bn(e) {
        return this.__data__.has(e);
      }
      var vn = bn, yn = typeof z == "object" && z && z.Object === Object && z, Oe = yn, wn = Oe, Sn = typeof self == "object" && self && self.Object === Object && self, xn = wn || Sn || Function("return this")(), y = xn, An = y, kn = An.Symbol, U = kn, Ce = U, Te = Object.prototype, En = Te.hasOwnProperty, jn = Te.toString, B = Ce ? Ce.toStringTag : void 0;
      function Pn(e) {
        var t = En.call(e, B), n = e[B];
        try {
          e[B] = void 0;
          var r = true;
        } catch (s) {
        }
        var a = jn.call(e);
        return r && (t ? e[B] = n : delete e[B]), a;
      }
      var On = Pn, Cn = Object.prototype, Tn = Cn.toString;
      function In(e) {
        return Tn.call(e);
      }
      var Rn = In, Ie = U, Fn = On, Mn = Rn, Dn = "[object Null]", Ln = "[object Undefined]", Re = Ie ? Ie.toStringTag : void 0;
      function Nn(e) {
        return e == null ? e === void 0 ? Ln : Dn : Re && Re in Object(e) ? Fn(e) : Mn(e);
      }
      var T = Nn;
      function Un(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      var q = Un, Bn = T, qn = q, $n = "[object AsyncFunction]", Gn = "[object Function]", Wn = "[object GeneratorFunction]", Hn = "[object Proxy]";
      function Xn(e) {
        if (!qn(e))
          return false;
        var t = Bn(e);
        return t == Gn || t == Wn || t == $n || t == Hn;
      }
      var Fe = Xn, zn = y, Vn = zn["__core-js_shared__"], Kn = Vn, se = Kn, Me = function() {
        var e = /[^.]+$/.exec(se && se.keys && se.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }();
      function Yn(e) {
        return !!Me && Me in e;
      }
      var Jn = Yn, Zn = Function.prototype, Qn = Zn.toString;
      function er(e) {
        if (e != null) {
          try {
            return Qn.call(e);
          } catch (t) {
          }
          try {
            return e + "";
          } catch (t) {
          }
        }
        return "";
      }
      var De = er, tr = Fe, nr = Jn, rr = q, ar = De, sr = /[\\^$.*+?()[\]{}|]/g, ir = /^\[object .+?Constructor\]$/, or = Function.prototype, lr = Object.prototype, cr = or.toString, ur = lr.hasOwnProperty, dr = RegExp("^" + cr.call(ur).replace(sr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function hr(e) {
        if (!rr(e) || nr(e))
          return false;
        var t = tr(e) ? dr : ir;
        return t.test(ar(e));
      }
      var pr = hr;
      function fr(e, t) {
        return e == null ? void 0 : e[t];
      }
      var _r = fr, gr = pr, mr = _r;
      function br(e, t) {
        var n = mr(e, t);
        return gr(n) ? n : void 0;
      }
      var A = br, vr = A, yr = y, wr = vr(yr, "Map"), ie = wr, Sr = A, xr = Sr(Object, "create"), Y = xr, Le = Y;
      function Ar() {
        this.__data__ = Le ? Le(null) : {}, this.size = 0;
      }
      var kr = Ar;
      function Er(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      var jr = Er, Pr = Y, Or = "__lodash_hash_undefined__", Cr = Object.prototype, Tr = Cr.hasOwnProperty;
      function Ir(e) {
        var t = this.__data__;
        if (Pr) {
          var n = t[e];
          return n === Or ? void 0 : n;
        }
        return Tr.call(t, e) ? t[e] : void 0;
      }
      var Rr = Ir, Fr = Y, Mr = Object.prototype, Dr = Mr.hasOwnProperty;
      function Lr(e) {
        var t = this.__data__;
        return Fr ? t[e] !== void 0 : Dr.call(t, e);
      }
      var Nr = Lr, Ur = Y, Br = "__lodash_hash_undefined__";
      function qr(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = Ur && t === void 0 ? Br : t, this;
      }
      var $r = qr, Gr = kr, Wr = jr, Hr = Rr, Xr = Nr, zr = $r;
      function I(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      I.prototype.clear = Gr, I.prototype.delete = Wr, I.prototype.get = Hr, I.prototype.has = Xr, I.prototype.set = zr;
      var Vr = I, Ne = Vr, Kr = K, Yr = ie;
      function Jr() {
        this.size = 0, this.__data__ = { hash: new Ne(), map: new (Yr || Kr)(), string: new Ne() };
      }
      var Zr = Jr;
      function Qr(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      var ea = Qr, ta = ea;
      function na(e, t) {
        var n = e.__data__;
        return ta(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
      }
      var J = na, ra = J;
      function aa(e) {
        var t = ra(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      var sa = aa, ia = J;
      function oa(e) {
        return ia(this, e).get(e);
      }
      var la = oa, ca = J;
      function ua(e) {
        return ca(this, e).has(e);
      }
      var da = ua, ha = J;
      function pa(e, t) {
        var n = ha(this, e), r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
      }
      var fa = pa, _a = Zr, ga = sa, ma = la, ba = da, va = fa;
      function R(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      R.prototype.clear = _a, R.prototype.delete = ga, R.prototype.get = ma, R.prototype.has = ba, R.prototype.set = va;
      var Ue = R, ya = K, wa = ie, Sa = Ue, xa = 200;
      function Aa(e, t) {
        var n = this.__data__;
        if (n instanceof ya) {
          var r = n.__data__;
          if (!wa || r.length < xa - 1)
            return r.push([e, t]), this.size = ++n.size, this;
          n = this.__data__ = new Sa(r);
        }
        return n.set(e, t), this.size = n.size, this;
      }
      var ka = Aa, Ea = K, ja = pn, Pa = _n, Oa = mn, Ca = vn, Ta = ka;
      function F(e) {
        var t = this.__data__ = new Ea(e);
        this.size = t.size;
      }
      F.prototype.clear = ja, F.prototype.delete = Pa, F.prototype.get = Oa, F.prototype.has = Ca, F.prototype.set = Ta;
      var Ia = F;
      function Ra(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== false; )
          ;
        return e;
      }
      var Fa = Ra, Ma = A, Da = function() {
        try {
          var e = Ma(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (t) {
        }
      }(), Be = Da, qe = Be;
      function La(e, t, n) {
        t == "__proto__" && qe ? qe(e, t, { configurable: true, enumerable: true, value: n, writable: true }) : e[t] = n;
      }
      var $e = La, Na = $e, Ua = Pe, Ba = Object.prototype, qa = Ba.hasOwnProperty;
      function $a(e, t, n) {
        var r = e[t];
        (!(qa.call(e, t) && Ua(r, n)) || n === void 0 && !(t in e)) && Na(e, t, n);
      }
      var Ge = $a, Ga = Ge, Wa = $e;
      function Ha(e, t, n, r) {
        var a = !n;
        n || (n = {});
        for (var s = -1, i = t.length; ++s < i; ) {
          var o = t[s], p = r ? r(n[o], e[o], o, n, e) : void 0;
          p === void 0 && (p = e[o]), a ? Wa(n, o, p) : Ga(n, o, p);
        }
        return n;
      }
      var $ = Ha;
      function Xa(e, t) {
        for (var n = -1, r = Array(e); ++n < e; )
          r[n] = t(n);
        return r;
      }
      var za = Xa;
      function Va(e) {
        return e != null && typeof e == "object";
      }
      var k = Va, Ka = T, Ya = k, Ja = "[object Arguments]";
      function Za(e) {
        return Ya(e) && Ka(e) == Ja;
      }
      var Qa = Za, We = Qa, es = k, He = Object.prototype, ts = He.hasOwnProperty, ns = He.propertyIsEnumerable, rs = We(function() {
        return arguments;
      }()) ? We : function(e) {
        return es(e) && ts.call(e, "callee") && !ns.call(e, "callee");
      }, Xe = rs, as = Array.isArray, E = as, G = {}, ss = { get exports() {
        return G;
      }, set exports(e) {
        G = e;
      } };
      function is() {
        return false;
      }
      var os = is;
      (function(e, t) {
        var n = y, r = os, a = t && !t.nodeType && t, s = a && true && e && !e.nodeType && e, i = s && s.exports === a, o = i ? n.Buffer : void 0, p = o ? o.isBuffer : void 0, h = p || r;
        e.exports = h;
      })(ss, G);
      var ls = 9007199254740991, cs = /^(?:0|[1-9]\d*)$/;
      function us(e, t) {
        var n = typeof e;
        return t = t == null ? ls : t, !!t && (n == "number" || n != "symbol" && cs.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      var ds = us, hs = 9007199254740991;
      function ps(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= hs;
      }
      var ze = ps, fs = T, _s = ze, gs = k, ms = "[object Arguments]", bs = "[object Array]", vs = "[object Boolean]", ys = "[object Date]", ws = "[object Error]", Ss = "[object Function]", xs = "[object Map]", As = "[object Number]", ks = "[object Object]", Es = "[object RegExp]", js = "[object Set]", Ps = "[object String]", Os = "[object WeakMap]", Cs = "[object ArrayBuffer]", Ts = "[object DataView]", Is = "[object Float32Array]", Rs = "[object Float64Array]", Fs = "[object Int8Array]", Ms = "[object Int16Array]", Ds = "[object Int32Array]", Ls = "[object Uint8Array]", Ns = "[object Uint8ClampedArray]", Us = "[object Uint16Array]", Bs = "[object Uint32Array]", u = {};
      u[Is] = u[Rs] = u[Fs] = u[Ms] = u[Ds] = u[Ls] = u[Ns] = u[Us] = u[Bs] = true, u[ms] = u[bs] = u[Cs] = u[vs] = u[Ts] = u[ys] = u[ws] = u[Ss] = u[xs] = u[As] = u[ks] = u[Es] = u[js] = u[Ps] = u[Os] = false;
      function qs(e) {
        return gs(e) && _s(e.length) && !!u[fs(e)];
      }
      var $s = qs;
      function Gs(e) {
        return function(t) {
          return e(t);
        };
      }
      var oe = Gs, M = {}, Ws = { get exports() {
        return M;
      }, set exports(e) {
        M = e;
      } };
      (function(e, t) {
        var n = Oe, r = t && !t.nodeType && t, a = r && true && e && !e.nodeType && e, s = a && a.exports === r, i = s && n.process, o = function() {
          try {
            var p = a && a.require && a.require("util").types;
            return p || i && i.binding && i.binding("util");
          } catch (h) {
          }
        }();
        e.exports = o;
      })(Ws, M);
      var Hs = $s, Xs = oe, Ve = M, Ke = Ve && Ve.isTypedArray, zs = Ke ? Xs(Ke) : Hs, Vs = zs, Ks = za, Ys = Xe, Js = E, Zs = G, Qs = ds, ei = Vs, ti = Object.prototype, ni = ti.hasOwnProperty;
      function ri(e, t) {
        var n = Js(e), r = !n && Ys(e), a = !n && !r && Zs(e), s = !n && !r && !a && ei(e), i = n || r || a || s, o = i ? Ks(e.length, String) : [], p = o.length;
        for (var h in e)
          (t || ni.call(e, h)) && !(i && (h == "length" || a && (h == "offset" || h == "parent") || s && (h == "buffer" || h == "byteLength" || h == "byteOffset") || Qs(h, p))) && o.push(h);
        return o;
      }
      var Ye = ri, ai = Object.prototype;
      function si(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || ai;
        return e === n;
      }
      var le = si;
      function ii(e, t) {
        return function(n) {
          return e(t(n));
        };
      }
      var Je = ii, oi = Je, li = oi(Object.keys, Object), ci = li, ui = le, di = ci, hi = Object.prototype, pi = hi.hasOwnProperty;
      function fi(e) {
        if (!ui(e))
          return di(e);
        var t = [];
        for (var n in Object(e))
          pi.call(e, n) && n != "constructor" && t.push(n);
        return t;
      }
      var _i = fi, gi = Fe, mi = ze;
      function bi(e) {
        return e != null && mi(e.length) && !gi(e);
      }
      var Ze = bi, vi = Ye, yi = _i, wi = Ze;
      function Si(e) {
        return wi(e) ? vi(e) : yi(e);
      }
      var ce = Si, xi = $, Ai = ce;
      function ki(e, t) {
        return e && xi(t, Ai(t), e);
      }
      var Ei = ki;
      function ji(e) {
        var t = [];
        if (e != null)
          for (var n in Object(e))
            t.push(n);
        return t;
      }
      var Pi = ji, Oi = q, Ci = le, Ti = Pi, Ii = Object.prototype, Ri = Ii.hasOwnProperty;
      function Fi(e) {
        if (!Oi(e))
          return Ti(e);
        var t = Ci(e), n = [];
        for (var r in e)
          r == "constructor" && (t || !Ri.call(e, r)) || n.push(r);
        return n;
      }
      var Mi = Fi, Di = Ye, Li = Mi, Ni = Ze;
      function Ui(e) {
        return Ni(e) ? Di(e, true) : Li(e);
      }
      var ue = Ui, Bi = $, qi = ue;
      function $i(e, t) {
        return e && Bi(t, qi(t), e);
      }
      var Gi = $i, Z = {}, Wi = { get exports() {
        return Z;
      }, set exports(e) {
        Z = e;
      } };
      (function(e, t) {
        var n = y, r = t && !t.nodeType && t, a = r && true && e && !e.nodeType && e, s = a && a.exports === r, i = s ? n.Buffer : void 0, o = i ? i.allocUnsafe : void 0;
        function p(h, P) {
          if (P)
            return h.slice();
          var v = h.length, w = o ? o(v) : new h.constructor(v);
          return h.copy(w), w;
        }
        e.exports = p;
      })(Wi, Z);
      function Hi(e, t) {
        var n = -1, r = e.length;
        for (t || (t = Array(r)); ++n < r; )
          t[n] = e[n];
        return t;
      }
      var Xi = Hi;
      function zi(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length, a = 0, s = []; ++n < r; ) {
          var i = e[n];
          t(i, n, e) && (s[a++] = i);
        }
        return s;
      }
      var Vi = zi;
      function Ki() {
        return [];
      }
      var Qe = Ki, Yi = Vi, Ji = Qe, Zi = Object.prototype, Qi = Zi.propertyIsEnumerable, et = Object.getOwnPropertySymbols, eo = et ? function(e) {
        return e == null ? [] : (e = Object(e), Yi(et(e), function(t) {
          return Qi.call(e, t);
        }));
      } : Ji, de = eo, to = $, no = de;
      function ro(e, t) {
        return to(e, no(e), t);
      }
      var ao = ro;
      function so(e, t) {
        for (var n = -1, r = t.length, a = e.length; ++n < r; )
          e[a + n] = t[n];
        return e;
      }
      var he = so, io = Je, oo = io(Object.getPrototypeOf, Object), pe = oo, lo = he, co = pe, uo = de, ho = Qe, po = Object.getOwnPropertySymbols, fo = po ? function(e) {
        for (var t = []; e; )
          lo(t, uo(e)), e = co(e);
        return t;
      } : ho, tt = fo, _o = $, go = tt;
      function mo(e, t) {
        return _o(e, go(e), t);
      }
      var bo = mo, vo = he, yo = E;
      function wo(e, t, n) {
        var r = t(e);
        return yo(e) ? r : vo(r, n(e));
      }
      var nt = wo, So = nt, xo = de, Ao = ce;
      function ko(e) {
        return So(e, Ao, xo);
      }
      var Eo = ko, jo = nt, Po = tt, Oo = ue;
      function Co(e) {
        return jo(e, Oo, Po);
      }
      var rt = Co, To = A, Io = y, Ro = To(Io, "DataView"), Fo = Ro, Mo = A, Do = y, Lo = Mo(Do, "Promise"), No = Lo, Uo = A, Bo = y, qo = Uo(Bo, "Set"), $o = qo, Go = A, Wo = y, Ho = Go(Wo, "WeakMap"), Xo = Ho, fe = Fo, _e = ie, ge = No, me = $o, be = Xo, at = T, D = De, st = "[object Map]", zo = "[object Object]", it = "[object Promise]", ot = "[object Set]", lt = "[object WeakMap]", ct = "[object DataView]", Vo = D(fe), Ko = D(_e), Yo = D(ge), Jo = D(me), Zo = D(be), j = at;
      (fe && j(new fe(new ArrayBuffer(1))) != ct || _e && j(new _e()) != st || ge && j(ge.resolve()) != it || me && j(new me()) != ot || be && j(new be()) != lt) && (j = function(e) {
        var t = at(e), n = t == zo ? e.constructor : void 0, r = n ? D(n) : "";
        if (r)
          switch (r) {
            case Vo:
              return ct;
            case Ko:
              return st;
            case Yo:
              return it;
            case Jo:
              return ot;
            case Zo:
              return lt;
          }
        return t;
      });
      var ve = j, Qo = Object.prototype, el = Qo.hasOwnProperty;
      function tl(e) {
        var t = e.length, n = new e.constructor(t);
        return t && typeof e[0] == "string" && el.call(e, "index") && (n.index = e.index, n.input = e.input), n;
      }
      var nl = tl, rl = y, al = rl.Uint8Array, sl = al, ut = sl;
      function il(e) {
        var t = new e.constructor(e.byteLength);
        return new ut(t).set(new ut(e)), t;
      }
      var ye = il, ol = ye;
      function ll(e, t) {
        var n = t ? ol(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      }
      var cl = ll, ul = /\w*$/;
      function dl(e) {
        var t = new e.constructor(e.source, ul.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      var hl = dl, dt = U, ht = dt ? dt.prototype : void 0, pt = ht ? ht.valueOf : void 0;
      function pl(e) {
        return pt ? Object(pt.call(e)) : {};
      }
      var fl = pl, _l = ye;
      function gl(e, t) {
        var n = t ? _l(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      }
      var ml = gl, bl = ye, vl = cl, yl = hl, wl = fl, Sl = ml, xl = "[object Boolean]", Al = "[object Date]", kl = "[object Map]", El = "[object Number]", jl = "[object RegExp]", Pl = "[object Set]", Ol = "[object String]", Cl = "[object Symbol]", Tl = "[object ArrayBuffer]", Il = "[object DataView]", Rl = "[object Float32Array]", Fl = "[object Float64Array]", Ml = "[object Int8Array]", Dl = "[object Int16Array]", Ll = "[object Int32Array]", Nl = "[object Uint8Array]", Ul = "[object Uint8ClampedArray]", Bl = "[object Uint16Array]", ql = "[object Uint32Array]";
      function $l(e, t, n) {
        var r = e.constructor;
        switch (t) {
          case Tl:
            return bl(e);
          case xl:
          case Al:
            return new r(+e);
          case Il:
            return vl(e, n);
          case Rl:
          case Fl:
          case Ml:
          case Dl:
          case Ll:
          case Nl:
          case Ul:
          case Bl:
          case ql:
            return Sl(e, n);
          case kl:
            return new r();
          case El:
          case Ol:
            return new r(e);
          case jl:
            return yl(e);
          case Pl:
            return new r();
          case Cl:
            return wl(e);
        }
      }
      var Gl = $l, Wl = q, ft = Object.create, Hl = function() {
        function e() {
        }
        return function(t) {
          if (!Wl(t))
            return {};
          if (ft)
            return ft(t);
          e.prototype = t;
          var n = new e();
          return e.prototype = void 0, n;
        };
      }(), Xl = Hl, zl = Xl, Vl = pe, Kl = le;
      function Yl(e) {
        return typeof e.constructor == "function" && !Kl(e) ? zl(Vl(e)) : {};
      }
      var Jl = Yl, Zl = ve, Ql = k, ec = "[object Map]";
      function tc(e) {
        return Ql(e) && Zl(e) == ec;
      }
      var nc = tc, rc = nc, ac = oe, _t = M, gt = _t && _t.isMap, sc = gt ? ac(gt) : rc, ic = sc, oc = ve, lc = k, cc = "[object Set]";
      function uc(e) {
        return lc(e) && oc(e) == cc;
      }
      var dc = uc, hc = dc, pc = oe, mt = M, bt = mt && mt.isSet, fc = bt ? pc(bt) : hc, _c = fc, gc = Ia, mc = Fa, bc = Ge, vc = Ei, yc = Gi, wc = Z, Sc = Xi, xc = ao, Ac = bo, kc = Eo, Ec = rt, jc = ve, Pc = nl, Oc = Gl, Cc = Jl, Tc = E, Ic = G, Rc = ic, Fc = q, Mc = _c, Dc = ce, Lc = ue, Nc = 1, Uc = 2, Bc = 4, vt = "[object Arguments]", qc = "[object Array]", $c = "[object Boolean]", Gc = "[object Date]", Wc = "[object Error]", yt = "[object Function]", Hc = "[object GeneratorFunction]", Xc = "[object Map]", zc = "[object Number]", wt = "[object Object]", Vc = "[object RegExp]", Kc = "[object Set]", Yc = "[object String]", Jc = "[object Symbol]", Zc = "[object WeakMap]", Qc = "[object ArrayBuffer]", eu = "[object DataView]", tu = "[object Float32Array]", nu = "[object Float64Array]", ru = "[object Int8Array]", au = "[object Int16Array]", su = "[object Int32Array]", iu = "[object Uint8Array]", ou = "[object Uint8ClampedArray]", lu = "[object Uint16Array]", cu = "[object Uint32Array]", c = {};
      c[vt] = c[qc] = c[Qc] = c[eu] = c[$c] = c[Gc] = c[tu] = c[nu] = c[ru] = c[au] = c[su] = c[Xc] = c[zc] = c[wt] = c[Vc] = c[Kc] = c[Yc] = c[Jc] = c[iu] = c[ou] = c[lu] = c[cu] = true, c[Wc] = c[yt] = c[Zc] = false;
      function Q(e, t, n, r, a, s) {
        var i, o = t & Nc, p = t & Uc, h = t & Bc;
        if (n && (i = a ? n(e, r, a, s) : n(e)), i !== void 0)
          return i;
        if (!Fc(e))
          return e;
        var P = Tc(e);
        if (P) {
          if (i = Pc(e), !o)
            return Sc(e, i);
        } else {
          var v = jc(e), w = v == yt || v == Hc;
          if (Ic(e))
            return wc(e, o);
          if (v == wt || v == vt || w && !a) {
            if (i = p || w ? {} : Cc(e), !o)
              return p ? Ac(e, yc(i, e)) : xc(e, vc(i, e));
          } else {
            if (!c[v])
              return a ? e : {};
            i = Oc(e, v, o);
          }
        }
        s || (s = new gc());
        var te = s.get(e);
        if (te)
          return te;
        s.set(e, i), Mc(e) ? e.forEach(function(g) {
          i.add(Q(g, t, n, g, e, s));
        }) : Rc(e) && e.forEach(function(g, m) {
          i.set(m, Q(g, t, n, m, e, s));
        });
        var Ae = h ? p ? Ec : kc : p ? Lc : Dc, f = P ? void 0 : Ae(e);
        return mc(f || e, function(g, m) {
          f && (m = g, g = e[m]), bc(i, m, Q(g, t, n, m, e, s));
        }), i;
      }
      var uu = Q, du = T, hu = k, pu = "[object Symbol]";
      function fu(e) {
        return typeof e == "symbol" || hu(e) && du(e) == pu;
      }
      var we = fu, _u = E, gu = we, mu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, bu = /^\w*$/;
      function vu(e, t) {
        if (_u(e))
          return false;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || gu(e) ? true : bu.test(e) || !mu.test(e) || t != null && e in Object(t);
      }
      var yu = vu, St = Ue, wu = "Expected a function";
      function Se(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new TypeError(wu);
        var n = function() {
          var r = arguments, a = t ? t.apply(this, r) : r[0], s = n.cache;
          if (s.has(a))
            return s.get(a);
          var i = e.apply(this, r);
          return n.cache = s.set(a, i) || s, i;
        };
        return n.cache = new (Se.Cache || St)(), n;
      }
      Se.Cache = St;
      var Su = Se, xu = Su, Au = 500;
      function ku(e) {
        var t = xu(e, function(r) {
          return n.size === Au && n.clear(), r;
        }), n = t.cache;
        return t;
      }
      var Eu = ku, ju = Eu, Pu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ou = /\\(\\)?/g, Cu = ju(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Pu, function(n, r, a, s) {
          t.push(a ? s.replace(Ou, "$1") : r || n);
        }), t;
      }), Tu = Cu, xt = U, Iu = je, Ru = E, Fu = we, Mu = 1 / 0, At = xt ? xt.prototype : void 0, kt = At ? At.toString : void 0;
      function Et(e) {
        if (typeof e == "string")
          return e;
        if (Ru(e))
          return Iu(e, Et) + "";
        if (Fu(e))
          return kt ? kt.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -Mu ? "-0" : t;
      }
      var Du = Et, Lu = Du;
      function Nu(e) {
        return e == null ? "" : Lu(e);
      }
      var Uu = Nu, Bu = E, qu = yu, $u = Tu, Gu = Uu;
      function Wu(e, t) {
        return Bu(e) ? e : qu(e, t) ? [e] : $u(Gu(e));
      }
      var xe = Wu;
      function Hu(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      }
      var Xu = Hu, zu = we, Vu = 1 / 0;
      function Ku(e) {
        if (typeof e == "string" || zu(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -Vu ? "-0" : t;
      }
      var jt = Ku, Yu = xe, Ju = jt;
      function Zu(e, t) {
        t = Yu(t, e);
        for (var n = 0, r = t.length; e != null && n < r; )
          e = e[Ju(t[n++])];
        return n && n == r ? e : void 0;
      }
      var Qu = Zu;
      function ed(e, t, n) {
        var r = -1, a = e.length;
        t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var s = Array(a); ++r < a; )
          s[r] = e[r + t];
        return s;
      }
      var td = ed, nd = Qu, rd = td;
      function ad(e, t) {
        return t.length < 2 ? e : nd(e, rd(t, 0, -1));
      }
      var sd = ad, id = xe, od = Xu, ld = sd, cd = jt;
      function ud(e, t) {
        return t = id(t, e), e = ld(e, t), e == null || delete e[cd(od(t))];
      }
      var dd = ud, hd = T, pd = pe, fd = k, _d = "[object Object]", gd = Function.prototype, md = Object.prototype, Pt = gd.toString, bd = md.hasOwnProperty, vd = Pt.call(Object);
      function yd(e) {
        if (!fd(e) || hd(e) != _d)
          return false;
        var t = pd(e);
        if (t === null)
          return true;
        var n = bd.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && Pt.call(n) == vd;
      }
      var wd = yd, Sd = wd;
      function xd(e) {
        return Sd(e) ? void 0 : e;
      }
      var Ad = xd, Ot = U, kd = Xe, Ed = E, Ct = Ot ? Ot.isConcatSpreadable : void 0;
      function jd(e) {
        return Ed(e) || kd(e) || !!(Ct && e && e[Ct]);
      }
      var Pd = jd, Od = he, Cd = Pd;
      function Tt(e, t, n, r, a) {
        var s = -1, i = e.length;
        for (n || (n = Cd), a || (a = []); ++s < i; ) {
          var o = e[s];
          t > 0 && n(o) ? t > 1 ? Tt(o, t - 1, n, r, a) : Od(a, o) : r || (a[a.length] = o);
        }
        return a;
      }
      var Td = Tt, Id = Td;
      function Rd(e) {
        var t = e == null ? 0 : e.length;
        return t ? Id(e, 1) : [];
      }
      var Fd = Rd;
      function Md(e, t, n) {
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
      var Dd = Md, Ld = Dd, It = Math.max;
      function Nd(e, t, n) {
        return t = It(t === void 0 ? e.length - 1 : t, 0), function() {
          for (var r = arguments, a = -1, s = It(r.length - t, 0), i = Array(s); ++a < s; )
            i[a] = r[t + a];
          a = -1;
          for (var o = Array(t + 1); ++a < t; )
            o[a] = r[a];
          return o[t] = n(i), Ld(e, this, o);
        };
      }
      var Ud = Nd;
      function Bd(e) {
        return function() {
          return e;
        };
      }
      var qd = Bd;
      function $d(e) {
        return e;
      }
      var Gd = $d, Wd = qd, Rt = Be, Hd = Gd, Xd = Rt ? function(e, t) {
        return Rt(e, "toString", { configurable: true, enumerable: false, value: Wd(t), writable: true });
      } : Hd, zd = Xd, Vd = 800, Kd = 16, Yd = Date.now;
      function Jd(e) {
        var t = 0, n = 0;
        return function() {
          var r = Yd(), a = Kd - (r - n);
          if (n = r, a > 0) {
            if (++t >= Vd)
              return arguments[0];
          } else
            t = 0;
          return e.apply(void 0, arguments);
        };
      }
      var Zd = Jd, Qd = zd, eh = Zd, th = eh(Qd), nh = th, rh = Fd, ah = Ud, sh = nh;
      function ih(e) {
        return sh(ah(e, void 0, rh), e + "");
      }
      var oh = ih, lh = je, ch = uu, uh = dd, dh = xe, hh = $, ph = Ad, fh = oh, _h = rt, gh = 1, mh = 2, bh = 4, vh = fh(function(e, t) {
        var n = {};
        if (e == null)
          return n;
        var r = false;
        t = lh(t, function(s) {
          return s = dh(s, e), r || (r = s.length > 1), s;
        }), hh(e, _h(e), n), r && (n = ch(n, gh | mh | bh, ph));
        for (var a = t.length; a--; )
          uh(n, t[a]);
        return n;
      }), yh = vh;
      const wh = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, a] of t)
          n[r] = a;
        return n;
      }, Sh = `data:text/javascript;base64,${Ee(ne)}`, xh = `data:text/javascript;base64,${Ee(_)}`, Ah = d.defineComponent({ name: "VueOfficePdf", props: { src: [String, ArrayBuffer, Blob], requestOptions: { type: Object, default: () => ({}) }, staticFileUrl: { type: String, default: "https://unpkg.com/pdfjs-dist@3.1.81/" }, options: { type: Object, default: () => ({}) } }, emits: ["rendered", "error"], setup(e, { emit: t }) {
        let n = null, r = null;
        const a = d.ref(null), s = d.ref([]), i = d.ref(0), o = 5;
        function p() {
          return re(Sh).then(() => {
            if (window.pdfjsLib)
              window.pdfjsLib.GlobalWorkerOptions.workerSrc = xh;
            else
              return Promise.reject("window.pdfjsLib未找到");
          });
        }
        function h() {
          return window.pdfjsLib ? Promise.resolve() : p();
        }
        function P() {
          if (!e.src) {
            i.value = 0;
            return;
          }
          r = window.pdfjsLib.getDocument(Dt({ url: X(e.src), cMapUrl: `${e.staticFileUrl.endsWith("/") ? e.staticFileUrl : e.staticFileUrl + "/"}cmaps/`, cMapPacked: true, enableXfa: true }, yh(e.options, ["width"]))), r.promise.then((f) => {
            n = f, i.value = e.options.lazy ? Math.min(n.numPages, o) : n.numPages, setTimeout(() => {
              w(1);
            });
          }).catch((f) => {
            t("error", f);
          });
        }
        function v(f) {
          if (!e.options.lazy)
            return;
          const { scrollTop: g, scrollHeight: m, clientHeight: O } = f.target;
          if (g + O >= m) {
            if (i.value >= n.numPages)
              return;
            let x = i.value;
            i.value = Math.min(n.numPages, x + o), i.value > x && w(x + 1);
          }
        }
        function w(f) {
          n.getPage(f).then((g) => {
            const m = g.getViewport({ scale: 2 }), O = window.devicePixelRatio || 1, x = s.value[f - 1], jh = x.getContext("2d");
            x.width = Math.floor(m.width * O), x.height = Math.floor(m.height * O);
            let L = Math.floor(m.width), W = Math.floor(m.height);
            if (e.options.width) {
              let H = e.options.width / L;
              L = Math.floor(e.options.width), W = Math.floor(W * H);
            }
            let ke = a.value.getBoundingClientRect().width - 20;
            if (L > ke) {
              let H = ke / L;
              L = Math.floor(ke), W = Math.floor(W * H);
            }
            x.style.width = L + "px", x.style.height = W + "px";
            const Ph = O !== 1 ? [O, 0, 0, O, 0, 0] : null;
            g.render({ canvasContext: jh, transform: Ph, viewport: m }).promise.then(() => {
              i.value > f ? w(f + 1) : t("rendered");
            }).catch((H) => {
              t("error", H);
            });
          }).catch((g) => {
            t("error", g);
          });
        }
        function te() {
          w(1);
        }
        d.onMounted(() => {
          e.src && h().then(P).catch((f) => {
            console.warn(f);
          });
        }), d.watch(() => e.src, () => {
          h().then(P).catch((f) => {
            console.warn(f);
          });
        });
        function Ae(f) {
          n && n._transport && n._transport.getData().then((g) => {
            ae(f || `vue-office-pdf-${(/* @__PURE__ */ new Date()).getTime()}.pdf`, g.buffer);
          });
        }
        return { wrapperRef: a, rootRef: s, numPages: i, save: Ae, onScrollPdf: v, rerender: te };
      } }), kh = { key: 0, ref: "wrapperRef", class: "vue-office-pdf-wrapper", style: { background: "gray", padding: "30px 0", position: "relative" } };
      function Eh(e, t, n, r, a, s) {
        return l.openBlock(), l.createElementBlock("div", { class: "vue-office-pdf", ref: "vue-office-pdf", style: { "text-align": "center", "overflow-y": "auto" }, onScroll: t[0] || (t[0] = (...i) => e.onScrollPdf && e.onScrollPdf(...i)) }, [e.numPages ? (l.openBlock(), l.createElementBlock("div", kh, [(l.openBlock(true), l.createElementBlock(l.Fragment, null, l.renderList(e.numPages, (i) => (l.openBlock(), l.createElementBlock("canvas", { ref_for: true, ref: "rootRef", key: i, style: { width: "100%" } }))), 128)), l.renderSlot(e.$slots, "default")], 512)) : l.createCommentVNode("", true)], 544);
      }
      const ee = wh(Ah, [["render", Eh]]);
      return ee.install = function(e) {
        e.component(ee.name, ee);
      }, ee;
    });
  }
});
export default require_lib2();
//# sourceMappingURL=@vue-office_pdf.js.map