import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/.pnpm/mpegts.js@1.7.3/node_modules/mpegts.js/dist/mpegts.js
var require_mpegts = __commonJS({
  "node_modules/.pnpm/mpegts.js@1.7.3/node_modules/mpegts.js/dist/mpegts.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.mpegts = t() : e.mpegts = t();
    }(window, function() {
      return function(e) {
        var t = {};
        function i(n) {
          if (t[n])
            return t[n].exports;
          var a = t[n] = { i: n, l: false, exports: {} };
          return e[n].call(a.exports, a, a.exports, i), a.l = true, a.exports;
        }
        return i.m = e, i.c = t, i.d = function(e2, t2, n) {
          i.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: n });
        }, i.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, i.t = function(e2, t2) {
          if (1 & t2 && (e2 = i(e2)), 8 & t2)
            return e2;
          if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
            return e2;
          var n = /* @__PURE__ */ Object.create(null);
          if (i.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
            for (var a in e2)
              i.d(n, a, (function(t3) {
                return e2[t3];
              }).bind(null, a));
          return n;
        }, i.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return i.d(t2, "a", t2), t2;
        }, i.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, i.p = "", i(i.s = 14);
      }([function(e, t, i) {
        "use strict";
        var n = i(6), a = i.n(n), r = function() {
          function e2() {
          }
          return e2.e = function(t2, i2) {
            t2 && !e2.FORCE_GLOBAL_TAG || (t2 = e2.GLOBAL_TAG);
            var n2 = "[" + t2 + "] > " + i2;
            e2.ENABLE_CALLBACK && e2.emitter.emit("log", "error", n2), e2.ENABLE_ERROR && (console.error ? console.error(n2) : console.warn ? console.warn(n2) : console.log(n2));
          }, e2.i = function(t2, i2) {
            t2 && !e2.FORCE_GLOBAL_TAG || (t2 = e2.GLOBAL_TAG);
            var n2 = "[" + t2 + "] > " + i2;
            e2.ENABLE_CALLBACK && e2.emitter.emit("log", "info", n2), e2.ENABLE_INFO && (console.info ? console.info(n2) : console.log(n2));
          }, e2.w = function(t2, i2) {
            t2 && !e2.FORCE_GLOBAL_TAG || (t2 = e2.GLOBAL_TAG);
            var n2 = "[" + t2 + "] > " + i2;
            e2.ENABLE_CALLBACK && e2.emitter.emit("log", "warn", n2), e2.ENABLE_WARN && (console.warn ? console.warn(n2) : console.log(n2));
          }, e2.d = function(t2, i2) {
            t2 && !e2.FORCE_GLOBAL_TAG || (t2 = e2.GLOBAL_TAG);
            var n2 = "[" + t2 + "] > " + i2;
            e2.ENABLE_CALLBACK && e2.emitter.emit("log", "debug", n2), e2.ENABLE_DEBUG && (console.debug ? console.debug(n2) : console.log(n2));
          }, e2.v = function(t2, i2) {
            t2 && !e2.FORCE_GLOBAL_TAG || (t2 = e2.GLOBAL_TAG);
            var n2 = "[" + t2 + "] > " + i2;
            e2.ENABLE_CALLBACK && e2.emitter.emit("log", "verbose", n2), e2.ENABLE_VERBOSE && console.log(n2);
          }, e2;
        }();
        r.GLOBAL_TAG = "mpegts.js", r.FORCE_GLOBAL_TAG = false, r.ENABLE_ERROR = true, r.ENABLE_INFO = true, r.ENABLE_WARN = true, r.ENABLE_DEBUG = true, r.ENABLE_VERBOSE = true, r.ENABLE_CALLBACK = false, r.emitter = new a.a(), t.a = r;
      }, function(e, t, i) {
        "use strict";
        t.a = { IO_ERROR: "io_error", DEMUX_ERROR: "demux_error", INIT_SEGMENT: "init_segment", MEDIA_SEGMENT: "media_segment", LOADING_COMPLETE: "loading_complete", RECOVERED_EARLY_EOF: "recovered_early_eof", MEDIA_INFO: "media_info", METADATA_ARRIVED: "metadata_arrived", SCRIPTDATA_ARRIVED: "scriptdata_arrived", TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived", SMPTE2038_METADATA_ARRIVED: "smpte2038_metadata_arrived", SCTE35_METADATA_ARRIVED: "scte35_metadata_arrived", PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor", PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived", STATISTICS_INFO: "statistics_info", RECOMMEND_SEEKPOINT: "recommend_seekpoint" };
      }, function(e, t, i) {
        "use strict";
        i.d(t, "c", function() {
          return a;
        }), i.d(t, "b", function() {
          return r;
        }), i.d(t, "a", function() {
          return s;
        });
        var n = i(3), a = { kIdle: 0, kConnecting: 1, kBuffering: 2, kError: 3, kComplete: 4 }, r = { OK: "OK", EXCEPTION: "Exception", HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid", CONNECTING_TIMEOUT: "ConnectingTimeout", EARLY_EOF: "EarlyEof", UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof" }, s = function() {
          function e2(e3) {
            this._type = e3 || "undefined", this._status = a.kIdle, this._needStash = false, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
          }
          return e2.prototype.destroy = function() {
            this._status = a.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null;
          }, e2.prototype.isWorking = function() {
            return this._status === a.kConnecting || this._status === a.kBuffering;
          }, Object.defineProperty(e2.prototype, "type", { get: function() {
            return this._type;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "status", { get: function() {
            return this._status;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "needStashBuffer", { get: function() {
            return this._needStash;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onContentLengthKnown", { get: function() {
            return this._onContentLengthKnown;
          }, set: function(e3) {
            this._onContentLengthKnown = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onURLRedirect", { get: function() {
            return this._onURLRedirect;
          }, set: function(e3) {
            this._onURLRedirect = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onDataArrival", { get: function() {
            return this._onDataArrival;
          }, set: function(e3) {
            this._onDataArrival = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onError", { get: function() {
            return this._onError;
          }, set: function(e3) {
            this._onError = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onComplete", { get: function() {
            return this._onComplete;
          }, set: function(e3) {
            this._onComplete = e3;
          }, enumerable: false, configurable: true }), e2.prototype.open = function(e3, t2) {
            throw new n.c("Unimplemented abstract function!");
          }, e2.prototype.abort = function() {
            throw new n.c("Unimplemented abstract function!");
          }, e2;
        }();
      }, function(e, t, i) {
        "use strict";
        i.d(t, "d", function() {
          return r;
        }), i.d(t, "a", function() {
          return s;
        }), i.d(t, "b", function() {
          return o;
        }), i.d(t, "c", function() {
          return d;
        });
        var n, a = (n = function(e2, t2) {
          return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
            e3.__proto__ = t3;
          } || function(e3, t3) {
            for (var i2 in t3)
              t3.hasOwnProperty(i2) && (e3[i2] = t3[i2]);
          })(e2, t2);
        }, function(e2, t2) {
          function i2() {
            this.constructor = e2;
          }
          n(e2, t2), e2.prototype = null === t2 ? Object.create(t2) : (i2.prototype = t2.prototype, new i2());
        }), r = function() {
          function e2(e3) {
            this._message = e3;
          }
          return Object.defineProperty(e2.prototype, "name", { get: function() {
            return "RuntimeException";
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "message", { get: function() {
            return this._message;
          }, enumerable: false, configurable: true }), e2.prototype.toString = function() {
            return this.name + ": " + this.message;
          }, e2;
        }(), s = function(e2) {
          function t2(t3) {
            return e2.call(this, t3) || this;
          }
          return a(t2, e2), Object.defineProperty(t2.prototype, "name", { get: function() {
            return "IllegalStateException";
          }, enumerable: false, configurable: true }), t2;
        }(r), o = function(e2) {
          function t2(t3) {
            return e2.call(this, t3) || this;
          }
          return a(t2, e2), Object.defineProperty(t2.prototype, "name", { get: function() {
            return "InvalidArgumentException";
          }, enumerable: false, configurable: true }), t2;
        }(r), d = function(e2) {
          function t2(t3) {
            return e2.call(this, t3) || this;
          }
          return a(t2, e2), Object.defineProperty(t2.prototype, "name", { get: function() {
            return "NotImplementedException";
          }, enumerable: false, configurable: true }), t2;
        }(r);
      }, function(e, t, i) {
        "use strict";
        var n = {};
        !function() {
          var e2 = self.navigator.userAgent.toLowerCase(), t2 = /(edge)\/([\w.]+)/.exec(e2) || /(opr)[\/]([\w.]+)/.exec(e2) || /(chrome)[ \/]([\w.]+)/.exec(e2) || /(iemobile)[\/]([\w.]+)/.exec(e2) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e2) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e2) || /(webkit)[ \/]([\w.]+)/.exec(e2) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e2) || /(msie) ([\w.]+)/.exec(e2) || e2.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e2) || e2.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(e2) || [], i2 = /(ipad)/.exec(e2) || /(ipod)/.exec(e2) || /(windows phone)/.exec(e2) || /(iphone)/.exec(e2) || /(kindle)/.exec(e2) || /(android)/.exec(e2) || /(windows)/.exec(e2) || /(mac)/.exec(e2) || /(linux)/.exec(e2) || /(cros)/.exec(e2) || [], a = { browser: t2[5] || t2[3] || t2[1] || "", version: t2[2] || t2[4] || "0", majorVersion: t2[4] || t2[2] || "0", platform: i2[0] || "" }, r = {};
          if (a.browser) {
            r[a.browser] = true;
            var s = a.majorVersion.split(".");
            r.version = { major: parseInt(a.majorVersion, 10), string: a.version }, s.length > 1 && (r.version.minor = parseInt(s[1], 10)), s.length > 2 && (r.version.build = parseInt(s[2], 10));
          }
          if (a.platform && (r[a.platform] = true), (r.chrome || r.opr || r.safari) && (r.webkit = true), r.rv || r.iemobile) {
            r.rv && delete r.rv;
            a.browser = "msie", r.msie = true;
          }
          if (r.edge) {
            delete r.edge;
            a.browser = "msedge", r.msedge = true;
          }
          if (r.opr) {
            a.browser = "opera", r.opera = true;
          }
          if (r.safari && r.android) {
            a.browser = "android", r.android = true;
          }
          for (var o in r.name = a.browser, r.platform = a.platform, n)
            n.hasOwnProperty(o) && delete n[o];
          Object.assign(n, r);
        }(), t.a = n;
      }, function(e, t, i) {
        "use strict";
        t.a = { OK: "OK", FORMAT_ERROR: "FormatError", FORMAT_UNSUPPORTED: "FormatUnsupported", CODEC_UNSUPPORTED: "CodecUnsupported" };
      }, function(e, t, i) {
        "use strict";
        var n, a = "object" == typeof Reflect ? Reflect : null, r = a && "function" == typeof a.apply ? a.apply : function(e2, t2, i2) {
          return Function.prototype.apply.call(e2, t2, i2);
        };
        n = a && "function" == typeof a.ownKeys ? a.ownKeys : Object.getOwnPropertySymbols ? function(e2) {
          return Object.getOwnPropertyNames(e2).concat(Object.getOwnPropertySymbols(e2));
        } : function(e2) {
          return Object.getOwnPropertyNames(e2);
        };
        var s = Number.isNaN || function(e2) {
          return e2 != e2;
        };
        function o() {
          o.init.call(this);
        }
        e.exports = o, e.exports.once = function(e2, t2) {
          return new Promise(function(i2, n2) {
            function a2(i3) {
              e2.removeListener(t2, r2), n2(i3);
            }
            function r2() {
              "function" == typeof e2.removeListener && e2.removeListener("error", a2), i2([].slice.call(arguments));
            }
            g(e2, t2, r2, { once: true }), "error" !== t2 && function(e3, t3, i3) {
              "function" == typeof e3.on && g(e3, "error", t3, i3);
            }(e2, a2, { once: true });
          });
        }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
        var d = 10;
        function _(e2) {
          if ("function" != typeof e2)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e2);
        }
        function h(e2) {
          return void 0 === e2._maxListeners ? o.defaultMaxListeners : e2._maxListeners;
        }
        function c(e2, t2, i2, n2) {
          var a2, r2, s2, o2;
          if (_(i2), void 0 === (r2 = e2._events) ? (r2 = e2._events = /* @__PURE__ */ Object.create(null), e2._eventsCount = 0) : (void 0 !== r2.newListener && (e2.emit("newListener", t2, i2.listener ? i2.listener : i2), r2 = e2._events), s2 = r2[t2]), void 0 === s2)
            s2 = r2[t2] = i2, ++e2._eventsCount;
          else if ("function" == typeof s2 ? s2 = r2[t2] = n2 ? [i2, s2] : [s2, i2] : n2 ? s2.unshift(i2) : s2.push(i2), (a2 = h(e2)) > 0 && s2.length > a2 && !s2.warned) {
            s2.warned = true;
            var d2 = new Error("Possible EventEmitter memory leak detected. " + s2.length + " " + String(t2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            d2.name = "MaxListenersExceededWarning", d2.emitter = e2, d2.type = t2, d2.count = s2.length, o2 = d2, console && console.warn && console.warn(o2);
          }
          return e2;
        }
        function u() {
          if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function l(e2, t2, i2) {
          var n2 = { fired: false, wrapFn: void 0, target: e2, type: t2, listener: i2 }, a2 = u.bind(n2);
          return a2.listener = i2, n2.wrapFn = a2, a2;
        }
        function f(e2, t2, i2) {
          var n2 = e2._events;
          if (void 0 === n2)
            return [];
          var a2 = n2[t2];
          return void 0 === a2 ? [] : "function" == typeof a2 ? i2 ? [a2.listener || a2] : [a2] : i2 ? function(e3) {
            for (var t3 = new Array(e3.length), i3 = 0; i3 < t3.length; ++i3)
              t3[i3] = e3[i3].listener || e3[i3];
            return t3;
          }(a2) : m(a2, a2.length);
        }
        function p(e2) {
          var t2 = this._events;
          if (void 0 !== t2) {
            var i2 = t2[e2];
            if ("function" == typeof i2)
              return 1;
            if (void 0 !== i2)
              return i2.length;
          }
          return 0;
        }
        function m(e2, t2) {
          for (var i2 = new Array(t2), n2 = 0; n2 < t2; ++n2)
            i2[n2] = e2[n2];
          return i2;
        }
        function g(e2, t2, i2, n2) {
          if ("function" == typeof e2.on)
            n2.once ? e2.once(t2, i2) : e2.on(t2, i2);
          else {
            if ("function" != typeof e2.addEventListener)
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e2);
            e2.addEventListener(t2, function a2(r2) {
              n2.once && e2.removeEventListener(t2, a2), i2(r2);
            });
          }
        }
        Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
          return d;
        }, set: function(e2) {
          if ("number" != typeof e2 || e2 < 0 || s(e2))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e2 + ".");
          d = e2;
        } }), o.init = function() {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, o.prototype.setMaxListeners = function(e2) {
          if ("number" != typeof e2 || e2 < 0 || s(e2))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e2 + ".");
          return this._maxListeners = e2, this;
        }, o.prototype.getMaxListeners = function() {
          return h(this);
        }, o.prototype.emit = function(e2) {
          for (var t2 = [], i2 = 1; i2 < arguments.length; i2++)
            t2.push(arguments[i2]);
          var n2 = "error" === e2, a2 = this._events;
          if (void 0 !== a2)
            n2 = n2 && void 0 === a2.error;
          else if (!n2)
            return false;
          if (n2) {
            var s2;
            if (t2.length > 0 && (s2 = t2[0]), s2 instanceof Error)
              throw s2;
            var o2 = new Error("Unhandled error." + (s2 ? " (" + s2.message + ")" : ""));
            throw o2.context = s2, o2;
          }
          var d2 = a2[e2];
          if (void 0 === d2)
            return false;
          if ("function" == typeof d2)
            r(d2, this, t2);
          else {
            var _2 = d2.length, h2 = m(d2, _2);
            for (i2 = 0; i2 < _2; ++i2)
              r(h2[i2], this, t2);
          }
          return true;
        }, o.prototype.addListener = function(e2, t2) {
          return c(this, e2, t2, false);
        }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e2, t2) {
          return c(this, e2, t2, true);
        }, o.prototype.once = function(e2, t2) {
          return _(t2), this.on(e2, l(this, e2, t2)), this;
        }, o.prototype.prependOnceListener = function(e2, t2) {
          return _(t2), this.prependListener(e2, l(this, e2, t2)), this;
        }, o.prototype.removeListener = function(e2, t2) {
          var i2, n2, a2, r2, s2;
          if (_(t2), void 0 === (n2 = this._events))
            return this;
          if (void 0 === (i2 = n2[e2]))
            return this;
          if (i2 === t2 || i2.listener === t2)
            0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete n2[e2], n2.removeListener && this.emit("removeListener", e2, i2.listener || t2));
          else if ("function" != typeof i2) {
            for (a2 = -1, r2 = i2.length - 1; r2 >= 0; r2--)
              if (i2[r2] === t2 || i2[r2].listener === t2) {
                s2 = i2[r2].listener, a2 = r2;
                break;
              }
            if (a2 < 0)
              return this;
            0 === a2 ? i2.shift() : function(e3, t3) {
              for (; t3 + 1 < e3.length; t3++)
                e3[t3] = e3[t3 + 1];
              e3.pop();
            }(i2, a2), 1 === i2.length && (n2[e2] = i2[0]), void 0 !== n2.removeListener && this.emit("removeListener", e2, s2 || t2);
          }
          return this;
        }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e2) {
          var t2, i2, n2;
          if (void 0 === (i2 = this._events))
            return this;
          if (void 0 === i2.removeListener)
            return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== i2[e2] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete i2[e2]), this;
          if (0 === arguments.length) {
            var a2, r2 = Object.keys(i2);
            for (n2 = 0; n2 < r2.length; ++n2)
              "removeListener" !== (a2 = r2[n2]) && this.removeAllListeners(a2);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if ("function" == typeof (t2 = i2[e2]))
            this.removeListener(e2, t2);
          else if (void 0 !== t2)
            for (n2 = t2.length - 1; n2 >= 0; n2--)
              this.removeListener(e2, t2[n2]);
          return this;
        }, o.prototype.listeners = function(e2) {
          return f(this, e2, true);
        }, o.prototype.rawListeners = function(e2) {
          return f(this, e2, false);
        }, o.listenerCount = function(e2, t2) {
          return "function" == typeof e2.listenerCount ? e2.listenerCount(t2) : p.call(e2, t2);
        }, o.prototype.listenerCount = p, o.prototype.eventNames = function() {
          return this._eventsCount > 0 ? n(this._events) : [];
        };
      }, function(e, t, i) {
        "use strict";
        i.d(t, "d", function() {
          return n;
        }), i.d(t, "b", function() {
          return a;
        }), i.d(t, "a", function() {
          return r;
        }), i.d(t, "c", function() {
          return s;
        });
        var n = function(e2, t2, i2, n2, a2) {
          this.dts = e2, this.pts = t2, this.duration = i2, this.originalDts = n2, this.isSyncPoint = a2, this.fileposition = null;
        }, a = function() {
          function e2() {
            this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null;
          }
          return e2.prototype.appendSyncPoint = function(e3) {
            e3.isSyncPoint = true, this.syncPoints.push(e3);
          }, e2;
        }(), r = function() {
          function e2() {
            this._list = [];
          }
          return e2.prototype.clear = function() {
            this._list = [];
          }, e2.prototype.appendArray = function(e3) {
            var t2 = this._list;
            0 !== e3.length && (t2.length > 0 && e3[0].originalDts < t2[t2.length - 1].originalDts && this.clear(), Array.prototype.push.apply(t2, e3));
          }, e2.prototype.getLastSyncPointBeforeDts = function(e3) {
            if (0 == this._list.length)
              return null;
            var t2 = this._list, i2 = 0, n2 = t2.length - 1, a2 = 0, r2 = 0, s2 = n2;
            for (e3 < t2[0].dts && (i2 = 0, r2 = s2 + 1); r2 <= s2; ) {
              if ((a2 = r2 + Math.floor((s2 - r2) / 2)) === n2 || e3 >= t2[a2].dts && e3 < t2[a2 + 1].dts) {
                i2 = a2;
                break;
              }
              t2[a2].dts < e3 ? r2 = a2 + 1 : s2 = a2 - 1;
            }
            return this._list[i2];
          }, e2;
        }(), s = function() {
          function e2(e3) {
            this._type = e3, this._list = [], this._lastAppendLocation = -1;
          }
          return Object.defineProperty(e2.prototype, "type", { get: function() {
            return this._type;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "length", { get: function() {
            return this._list.length;
          }, enumerable: false, configurable: true }), e2.prototype.isEmpty = function() {
            return 0 === this._list.length;
          }, e2.prototype.clear = function() {
            this._list = [], this._lastAppendLocation = -1;
          }, e2.prototype._searchNearestSegmentBefore = function(e3) {
            var t2 = this._list;
            if (0 === t2.length)
              return -2;
            var i2 = t2.length - 1, n2 = 0, a2 = 0, r2 = i2, s2 = 0;
            if (e3 < t2[0].originalBeginDts)
              return s2 = -1;
            for (; a2 <= r2; ) {
              if ((n2 = a2 + Math.floor((r2 - a2) / 2)) === i2 || e3 > t2[n2].lastSample.originalDts && e3 < t2[n2 + 1].originalBeginDts) {
                s2 = n2;
                break;
              }
              t2[n2].originalBeginDts < e3 ? a2 = n2 + 1 : r2 = n2 - 1;
            }
            return s2;
          }, e2.prototype._searchNearestSegmentAfter = function(e3) {
            return this._searchNearestSegmentBefore(e3) + 1;
          }, e2.prototype.append = function(e3) {
            var t2 = this._list, i2 = e3, n2 = this._lastAppendLocation, a2 = 0;
            -1 !== n2 && n2 < t2.length && i2.originalBeginDts >= t2[n2].lastSample.originalDts && (n2 === t2.length - 1 || n2 < t2.length - 1 && i2.originalBeginDts < t2[n2 + 1].originalBeginDts) ? a2 = n2 + 1 : t2.length > 0 && (a2 = this._searchNearestSegmentBefore(i2.originalBeginDts) + 1), this._lastAppendLocation = a2, this._list.splice(a2, 0, i2);
          }, e2.prototype.getLastSegmentBefore = function(e3) {
            var t2 = this._searchNearestSegmentBefore(e3);
            return t2 >= 0 ? this._list[t2] : null;
          }, e2.prototype.getLastSampleBefore = function(e3) {
            var t2 = this.getLastSegmentBefore(e3);
            return null != t2 ? t2.lastSample : null;
          }, e2.prototype.getLastSyncPointBefore = function(e3) {
            for (var t2 = this._searchNearestSegmentBefore(e3), i2 = this._list[t2].syncPoints; 0 === i2.length && t2 > 0; )
              t2--, i2 = this._list[t2].syncPoints;
            return i2.length > 0 ? i2[i2.length - 1] : null;
          }, e2;
        }();
      }, function(e, t, i) {
        "use strict";
        var n = function() {
          function e2() {
            this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null;
          }
          return e2.prototype.isComplete = function() {
            var e3 = false === this.hasAudio || true === this.hasAudio && null != this.audioCodec && null != this.audioSampleRate && null != this.audioChannelCount, t2 = false === this.hasVideo || true === this.hasVideo && null != this.videoCodec && null != this.width && null != this.height && null != this.fps && null != this.profile && null != this.level && null != this.refFrames && null != this.chromaFormat && null != this.sarNum && null != this.sarDen;
            return null != this.mimeType && e3 && t2;
          }, e2.prototype.isSeekable = function() {
            return true === this.hasKeyframesIndex;
          }, e2.prototype.getNearestKeyframe = function(e3) {
            if (null == this.keyframesIndex)
              return null;
            var t2 = this.keyframesIndex, i2 = this._search(t2.times, e3);
            return { index: i2, milliseconds: t2.times[i2], fileposition: t2.filepositions[i2] };
          }, e2.prototype._search = function(e3, t2) {
            var i2 = 0, n2 = e3.length - 1, a = 0, r = 0, s = n2;
            for (t2 < e3[0] && (i2 = 0, r = s + 1); r <= s; ) {
              if ((a = r + Math.floor((s - r) / 2)) === n2 || t2 >= e3[a] && t2 < e3[a + 1]) {
                i2 = a;
                break;
              }
              e3[a] < t2 ? r = a + 1 : s = a - 1;
            }
            return i2;
          }, e2;
        }();
        t.a = n;
      }, function(e, t, i) {
        "use strict";
        var n = i(6), a = i.n(n), r = i(0), s = function() {
          function e2() {
          }
          return Object.defineProperty(e2, "forceGlobalTag", { get: function() {
            return r.a.FORCE_GLOBAL_TAG;
          }, set: function(t2) {
            r.a.FORCE_GLOBAL_TAG = t2, e2._notifyChange();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2, "globalTag", { get: function() {
            return r.a.GLOBAL_TAG;
          }, set: function(t2) {
            r.a.GLOBAL_TAG = t2, e2._notifyChange();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2, "enableAll", { get: function() {
            return r.a.ENABLE_VERBOSE && r.a.ENABLE_DEBUG && r.a.ENABLE_INFO && r.a.ENABLE_WARN && r.a.ENABLE_ERROR;
          }, set: function(t2) {
            r.a.ENABLE_VERBOSE = t2, r.a.ENABLE_DEBUG = t2, r.a.ENABLE_INFO = t2, r.a.ENABLE_WARN = t2, r.a.ENABLE_ERROR = t2, e2._notifyChange();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2, "enableDebug", { get: function() {
            return r.a.ENABLE_DEBUG;
          }, set: function(t2) {
            r.a.ENABLE_DEBUG = t2, e2._notifyChange();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2, "enableVerbose", { get: function() {
            return r.a.ENABLE_VERBOSE;
          }, set: function(t2) {
            r.a.ENABLE_VERBOSE = t2, e2._notifyChange();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2, "enableInfo", { get: function() {
            return r.a.ENABLE_INFO;
          }, set: function(t2) {
            r.a.ENABLE_INFO = t2, e2._notifyChange();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2, "enableWarn", { get: function() {
            return r.a.ENABLE_WARN;
          }, set: function(t2) {
            r.a.ENABLE_WARN = t2, e2._notifyChange();
          }, enumerable: false, configurable: true }), Object.defineProperty(e2, "enableError", { get: function() {
            return r.a.ENABLE_ERROR;
          }, set: function(t2) {
            r.a.ENABLE_ERROR = t2, e2._notifyChange();
          }, enumerable: false, configurable: true }), e2.getConfig = function() {
            return { globalTag: r.a.GLOBAL_TAG, forceGlobalTag: r.a.FORCE_GLOBAL_TAG, enableVerbose: r.a.ENABLE_VERBOSE, enableDebug: r.a.ENABLE_DEBUG, enableInfo: r.a.ENABLE_INFO, enableWarn: r.a.ENABLE_WARN, enableError: r.a.ENABLE_ERROR, enableCallback: r.a.ENABLE_CALLBACK };
          }, e2.applyConfig = function(e3) {
            r.a.GLOBAL_TAG = e3.globalTag, r.a.FORCE_GLOBAL_TAG = e3.forceGlobalTag, r.a.ENABLE_VERBOSE = e3.enableVerbose, r.a.ENABLE_DEBUG = e3.enableDebug, r.a.ENABLE_INFO = e3.enableInfo, r.a.ENABLE_WARN = e3.enableWarn, r.a.ENABLE_ERROR = e3.enableError, r.a.ENABLE_CALLBACK = e3.enableCallback;
          }, e2._notifyChange = function() {
            var t2 = e2.emitter;
            if (t2.listenerCount("change") > 0) {
              var i2 = e2.getConfig();
              t2.emit("change", i2);
            }
          }, e2.registerListener = function(t2) {
            e2.emitter.addListener("change", t2);
          }, e2.removeListener = function(t2) {
            e2.emitter.removeListener("change", t2);
          }, e2.addLogListener = function(t2) {
            r.a.emitter.addListener("log", t2), r.a.emitter.listenerCount("log") > 0 && (r.a.ENABLE_CALLBACK = true, e2._notifyChange());
          }, e2.removeLogListener = function(t2) {
            r.a.emitter.removeListener("log", t2), 0 === r.a.emitter.listenerCount("log") && (r.a.ENABLE_CALLBACK = false, e2._notifyChange());
          }, e2;
        }();
        s.emitter = new a.a(), t.a = s;
      }, function(e, t, i) {
        "use strict";
        var n = i(6), a = i.n(n), r = i(0), s = i(4), o = i(8);
        function d(e2, t2, i2) {
          var n2 = e2;
          if (t2 + i2 < n2.length) {
            for (; i2--; )
              if (128 != (192 & n2[++t2]))
                return false;
            return true;
          }
          return false;
        }
        var _, h = function(e2) {
          for (var t2 = [], i2 = e2, n2 = 0, a2 = e2.length; n2 < a2; )
            if (i2[n2] < 128)
              t2.push(String.fromCharCode(i2[n2])), ++n2;
            else {
              if (i2[n2] < 192)
                ;
              else if (i2[n2] < 224) {
                if (d(i2, n2, 1)) {
                  if ((r2 = (31 & i2[n2]) << 6 | 63 & i2[n2 + 1]) >= 128) {
                    t2.push(String.fromCharCode(65535 & r2)), n2 += 2;
                    continue;
                  }
                }
              } else if (i2[n2] < 240) {
                if (d(i2, n2, 2)) {
                  if ((r2 = (15 & i2[n2]) << 12 | (63 & i2[n2 + 1]) << 6 | 63 & i2[n2 + 2]) >= 2048 && 55296 != (63488 & r2)) {
                    t2.push(String.fromCharCode(65535 & r2)), n2 += 3;
                    continue;
                  }
                }
              } else if (i2[n2] < 248) {
                var r2;
                if (d(i2, n2, 3)) {
                  if ((r2 = (7 & i2[n2]) << 18 | (63 & i2[n2 + 1]) << 12 | (63 & i2[n2 + 2]) << 6 | 63 & i2[n2 + 3]) > 65536 && r2 < 1114112) {
                    r2 -= 65536, t2.push(String.fromCharCode(r2 >>> 10 | 55296)), t2.push(String.fromCharCode(1023 & r2 | 56320)), n2 += 4;
                    continue;
                  }
                }
              }
              t2.push(String.fromCharCode(65533)), ++n2;
            }
          return t2.join("");
        }, c = i(3), u = (_ = new ArrayBuffer(2), new DataView(_).setInt16(0, 256, true), 256 === new Int16Array(_)[0]), l = function() {
          function e2() {
          }
          return e2.parseScriptData = function(t2, i2, n2) {
            var a2 = {};
            try {
              var s2 = e2.parseValue(t2, i2, n2), o2 = e2.parseValue(t2, i2 + s2.size, n2 - s2.size);
              a2[s2.data] = o2.data;
            } catch (e3) {
              r.a.e("AMF", e3.toString());
            }
            return a2;
          }, e2.parseObject = function(t2, i2, n2) {
            if (n2 < 3)
              throw new c.a("Data not enough when parse ScriptDataObject");
            var a2 = e2.parseString(t2, i2, n2), r2 = e2.parseValue(t2, i2 + a2.size, n2 - a2.size), s2 = r2.objectEnd;
            return { data: { name: a2.data, value: r2.data }, size: a2.size + r2.size, objectEnd: s2 };
          }, e2.parseVariable = function(t2, i2, n2) {
            return e2.parseObject(t2, i2, n2);
          }, e2.parseString = function(e3, t2, i2) {
            if (i2 < 2)
              throw new c.a("Data not enough when parse String");
            var n2 = new DataView(e3, t2, i2).getUint16(0, !u);
            return { data: n2 > 0 ? h(new Uint8Array(e3, t2 + 2, n2)) : "", size: 2 + n2 };
          }, e2.parseLongString = function(e3, t2, i2) {
            if (i2 < 4)
              throw new c.a("Data not enough when parse LongString");
            var n2 = new DataView(e3, t2, i2).getUint32(0, !u);
            return { data: n2 > 0 ? h(new Uint8Array(e3, t2 + 4, n2)) : "", size: 4 + n2 };
          }, e2.parseDate = function(e3, t2, i2) {
            if (i2 < 10)
              throw new c.a("Data size invalid when parse Date");
            var n2 = new DataView(e3, t2, i2), a2 = n2.getFloat64(0, !u), r2 = n2.getInt16(8, !u);
            return { data: new Date(a2 += 60 * r2 * 1e3), size: 10 };
          }, e2.parseValue = function(t2, i2, n2) {
            if (n2 < 1)
              throw new c.a("Data not enough when parse Value");
            var a2, s2 = new DataView(t2, i2, n2), o2 = 1, d2 = s2.getUint8(0), _2 = false;
            try {
              switch (d2) {
                case 0:
                  a2 = s2.getFloat64(1, !u), o2 += 8;
                  break;
                case 1:
                  a2 = !!s2.getUint8(1), o2 += 1;
                  break;
                case 2:
                  var h2 = e2.parseString(t2, i2 + 1, n2 - 1);
                  a2 = h2.data, o2 += h2.size;
                  break;
                case 3:
                  a2 = {};
                  var l2 = 0;
                  for (9 == (16777215 & s2.getUint32(n2 - 4, !u)) && (l2 = 3); o2 < n2 - 4; ) {
                    var f2 = e2.parseObject(t2, i2 + o2, n2 - o2 - l2);
                    if (f2.objectEnd)
                      break;
                    a2[f2.data.name] = f2.data.value, o2 += f2.size;
                  }
                  if (o2 <= n2 - 3)
                    9 === (16777215 & s2.getUint32(o2 - 1, !u)) && (o2 += 3);
                  break;
                case 8:
                  a2 = {}, o2 += 4;
                  l2 = 0;
                  for (9 == (16777215 & s2.getUint32(n2 - 4, !u)) && (l2 = 3); o2 < n2 - 8; ) {
                    var p2 = e2.parseVariable(t2, i2 + o2, n2 - o2 - l2);
                    if (p2.objectEnd)
                      break;
                    a2[p2.data.name] = p2.data.value, o2 += p2.size;
                  }
                  if (o2 <= n2 - 3)
                    9 === (16777215 & s2.getUint32(o2 - 1, !u)) && (o2 += 3);
                  break;
                case 9:
                  a2 = void 0, o2 = 1, _2 = true;
                  break;
                case 10:
                  a2 = [];
                  var m2 = s2.getUint32(1, !u);
                  o2 += 4;
                  for (var g2 = 0; g2 < m2; g2++) {
                    var v2 = e2.parseValue(t2, i2 + o2, n2 - o2);
                    a2.push(v2.data), o2 += v2.size;
                  }
                  break;
                case 11:
                  var y2 = e2.parseDate(t2, i2 + 1, n2 - 1);
                  a2 = y2.data, o2 += y2.size;
                  break;
                case 12:
                  var b2 = e2.parseString(t2, i2 + 1, n2 - 1);
                  a2 = b2.data, o2 += b2.size;
                  break;
                default:
                  o2 = n2, r.a.w("AMF", "Unsupported AMF value type " + d2);
              }
            } catch (e3) {
              r.a.e("AMF", e3.toString());
            }
            return { data: a2, size: o2, objectEnd: _2 };
          }, e2;
        }(), f = function() {
          function e2(e3) {
            this.TAG = "ExpGolomb", this._buffer = e3, this._buffer_index = 0, this._total_bytes = e3.byteLength, this._total_bits = 8 * e3.byteLength, this._current_word = 0, this._current_word_bits_left = 0;
          }
          return e2.prototype.destroy = function() {
            this._buffer = null;
          }, e2.prototype._fillCurrentWord = function() {
            var e3 = this._total_bytes - this._buffer_index;
            if (e3 <= 0)
              throw new c.a("ExpGolomb: _fillCurrentWord() but no bytes available");
            var t2 = Math.min(4, e3), i2 = new Uint8Array(4);
            i2.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t2)), this._current_word = new DataView(i2.buffer).getUint32(0, false), this._buffer_index += t2, this._current_word_bits_left = 8 * t2;
          }, e2.prototype.readBits = function(e3) {
            if (e3 > 32)
              throw new c.b("ExpGolomb: readBits() bits exceeded max 32bits!");
            if (e3 <= this._current_word_bits_left) {
              var t2 = this._current_word >>> 32 - e3;
              return this._current_word <<= e3, this._current_word_bits_left -= e3, t2;
            }
            var i2 = this._current_word_bits_left ? this._current_word : 0;
            i2 >>>= 32 - this._current_word_bits_left;
            var n2 = e3 - this._current_word_bits_left;
            this._fillCurrentWord();
            var a2 = Math.min(n2, this._current_word_bits_left), r2 = this._current_word >>> 32 - a2;
            return this._current_word <<= a2, this._current_word_bits_left -= a2, i2 = i2 << a2 | r2;
          }, e2.prototype.readBool = function() {
            return 1 === this.readBits(1);
          }, e2.prototype.readByte = function() {
            return this.readBits(8);
          }, e2.prototype._skipLeadingZero = function() {
            var e3;
            for (e3 = 0; e3 < this._current_word_bits_left; e3++)
              if (0 != (this._current_word & 2147483648 >>> e3))
                return this._current_word <<= e3, this._current_word_bits_left -= e3, e3;
            return this._fillCurrentWord(), e3 + this._skipLeadingZero();
          }, e2.prototype.readUEG = function() {
            var e3 = this._skipLeadingZero();
            return this.readBits(e3 + 1) - 1;
          }, e2.prototype.readSEG = function() {
            var e3 = this.readUEG();
            return 1 & e3 ? e3 + 1 >>> 1 : -1 * (e3 >>> 1);
          }, e2;
        }(), p = function() {
          function e2() {
          }
          return e2._ebsp2rbsp = function(e3) {
            for (var t2 = e3, i2 = t2.byteLength, n2 = new Uint8Array(i2), a2 = 0, r2 = 0; r2 < i2; r2++)
              r2 >= 2 && 3 === t2[r2] && 0 === t2[r2 - 1] && 0 === t2[r2 - 2] || (n2[a2] = t2[r2], a2++);
            return new Uint8Array(n2.buffer, 0, a2);
          }, e2.parseSPS = function(t2) {
            for (var i2 = t2.subarray(1, 4), n2 = "avc1.", a2 = 0; a2 < 3; a2++) {
              var r2 = i2[a2].toString(16);
              r2.length < 2 && (r2 = "0" + r2), n2 += r2;
            }
            var s2 = e2._ebsp2rbsp(t2), o2 = new f(s2);
            o2.readByte();
            var d2 = o2.readByte();
            o2.readByte();
            var _2 = o2.readByte();
            o2.readUEG();
            var h2 = e2.getProfileString(d2), c2 = e2.getLevelString(_2), u2 = 1, l2 = 420, p2 = 8, m2 = 8;
            if ((100 === d2 || 110 === d2 || 122 === d2 || 244 === d2 || 44 === d2 || 83 === d2 || 86 === d2 || 118 === d2 || 128 === d2 || 138 === d2 || 144 === d2) && (3 === (u2 = o2.readUEG()) && o2.readBits(1), u2 <= 3 && (l2 = [0, 420, 422, 444][u2]), p2 = o2.readUEG() + 8, m2 = o2.readUEG() + 8, o2.readBits(1), o2.readBool()))
              for (var g2 = 3 !== u2 ? 8 : 12, v2 = 0; v2 < g2; v2++)
                o2.readBool() && (v2 < 6 ? e2._skipScalingList(o2, 16) : e2._skipScalingList(o2, 64));
            o2.readUEG();
            var y2 = o2.readUEG();
            if (0 === y2)
              o2.readUEG();
            else if (1 === y2) {
              o2.readBits(1), o2.readSEG(), o2.readSEG();
              var b2 = o2.readUEG();
              for (v2 = 0; v2 < b2; v2++)
                o2.readSEG();
            }
            var S2 = o2.readUEG();
            o2.readBits(1);
            var E2 = o2.readUEG(), A2 = o2.readUEG(), R2 = o2.readBits(1);
            0 === R2 && o2.readBits(1), o2.readBits(1);
            var T2 = 0, L2 = 0, w2 = 0, k2 = 0;
            o2.readBool() && (T2 = o2.readUEG(), L2 = o2.readUEG(), w2 = o2.readUEG(), k2 = o2.readUEG());
            var D2 = 1, C2 = 1, B2 = 0, I2 = true, O2 = 0, P2 = 0;
            if (o2.readBool()) {
              if (o2.readBool()) {
                var M2 = o2.readByte();
                M2 > 0 && M2 < 16 ? (D2 = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][M2 - 1], C2 = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][M2 - 1]) : 255 === M2 && (D2 = o2.readByte() << 8 | o2.readByte(), C2 = o2.readByte() << 8 | o2.readByte());
              }
              if (o2.readBool() && o2.readBool(), o2.readBool() && (o2.readBits(4), o2.readBool() && o2.readBits(24)), o2.readBool() && (o2.readUEG(), o2.readUEG()), o2.readBool()) {
                var x2 = o2.readBits(32), U2 = o2.readBits(32);
                I2 = o2.readBool(), B2 = (O2 = U2) / (P2 = 2 * x2);
              }
            }
            var N2 = 1;
            1 === D2 && 1 === C2 || (N2 = D2 / C2);
            var G2 = 0, V2 = 0;
            0 === u2 ? (G2 = 1, V2 = 2 - R2) : (G2 = 3 === u2 ? 1 : 2, V2 = (1 === u2 ? 2 : 1) * (2 - R2));
            var F2 = 16 * (E2 + 1), j2 = 16 * (A2 + 1) * (2 - R2);
            F2 -= (T2 + L2) * G2, j2 -= (w2 + k2) * V2;
            var z2 = Math.ceil(F2 * N2);
            return o2.destroy(), o2 = null, { codec_mimetype: n2, profile_idc: d2, level_idc: _2, profile_string: h2, level_string: c2, chroma_format_idc: u2, bit_depth: p2, bit_depth_luma: p2, bit_depth_chroma: m2, ref_frames: S2, chroma_format: l2, chroma_format_string: e2.getChromaFormatString(l2), frame_rate: { fixed: I2, fps: B2, fps_den: P2, fps_num: O2 }, sar_ratio: { width: D2, height: C2 }, codec_size: { width: F2, height: j2 }, present_size: { width: z2, height: j2 } };
          }, e2._skipScalingList = function(e3, t2) {
            for (var i2 = 8, n2 = 8, a2 = 0; a2 < t2; a2++)
              0 !== n2 && (n2 = (i2 + e3.readSEG() + 256) % 256), i2 = 0 === n2 ? i2 : n2;
          }, e2.getProfileString = function(e3) {
            switch (e3) {
              case 66:
                return "Baseline";
              case 77:
                return "Main";
              case 88:
                return "Extended";
              case 100:
                return "High";
              case 110:
                return "High10";
              case 122:
                return "High422";
              case 244:
                return "High444";
              default:
                return "Unknown";
            }
          }, e2.getLevelString = function(e3) {
            return (e3 / 10).toFixed(1);
          }, e2.getChromaFormatString = function(e3) {
            switch (e3) {
              case 420:
                return "4:2:0";
              case 422:
                return "4:2:2";
              case 444:
                return "4:4:4";
              default:
                return "Unknown";
            }
          }, e2;
        }(), m = i(5), g = function() {
          function e2() {
          }
          return e2._ebsp2rbsp = function(e3) {
            for (var t2 = e3, i2 = t2.byteLength, n2 = new Uint8Array(i2), a2 = 0, r2 = 0; r2 < i2; r2++)
              r2 >= 2 && 3 === t2[r2] && 0 === t2[r2 - 1] && 0 === t2[r2 - 2] || (n2[a2] = t2[r2], a2++);
            return new Uint8Array(n2.buffer, 0, a2);
          }, e2.parseVPS = function(t2) {
            var i2 = e2._ebsp2rbsp(t2), n2 = new f(i2);
            n2.readByte(), n2.readByte();
            n2.readBits(4);
            n2.readBits(2);
            n2.readBits(6);
            return { num_temporal_layers: n2.readBits(3) + 1, temporal_id_nested: n2.readBool() };
          }, e2.parseSPS = function(t2) {
            var i2 = e2._ebsp2rbsp(t2), n2 = new f(i2);
            n2.readByte(), n2.readByte();
            for (var a2 = 0, r2 = 0, s2 = 0, o2 = 0, d2 = (n2.readBits(4), n2.readBits(3)), _2 = (n2.readBool(), n2.readBits(2)), h2 = n2.readBool(), c2 = n2.readBits(5), u2 = n2.readByte(), l2 = n2.readByte(), p2 = n2.readByte(), m2 = n2.readByte(), g2 = n2.readByte(), v2 = n2.readByte(), y2 = n2.readByte(), b2 = n2.readByte(), S2 = n2.readByte(), E2 = n2.readByte(), A2 = n2.readByte(), R2 = [], T2 = [], L2 = 0; L2 < d2; L2++)
              R2.push(n2.readBool()), T2.push(n2.readBool());
            if (d2 > 0)
              for (L2 = d2; L2 < 8; L2++)
                n2.readBits(2);
            for (L2 = 0; L2 < d2; L2++)
              R2[L2] && (n2.readByte(), n2.readByte(), n2.readByte(), n2.readByte(), n2.readByte(), n2.readByte(), n2.readByte(), n2.readByte(), n2.readByte(), n2.readByte(), n2.readByte()), T2[L2] && n2.readByte();
            n2.readUEG();
            var w2 = n2.readUEG();
            3 == w2 && n2.readBits(1);
            var k2 = n2.readUEG(), D2 = n2.readUEG();
            n2.readBool() && (a2 += n2.readUEG(), r2 += n2.readUEG(), s2 += n2.readUEG(), o2 += n2.readUEG());
            var C2 = n2.readUEG(), B2 = n2.readUEG(), I2 = n2.readUEG();
            for (L2 = n2.readBool() ? 0 : d2; L2 <= d2; L2++)
              n2.readUEG(), n2.readUEG(), n2.readUEG();
            n2.readUEG(), n2.readUEG(), n2.readUEG(), n2.readUEG(), n2.readUEG(), n2.readUEG();
            if (n2.readBool() && n2.readBool())
              for (var O2 = 0; O2 < 4; O2++)
                for (var P2 = 0; P2 < (3 === O2 ? 2 : 6); P2++) {
                  if (n2.readBool()) {
                    var M2 = Math.min(64, 1 << 4 + (O2 << 1));
                    O2 > 1 && n2.readSEG();
                    for (L2 = 0; L2 < M2; L2++)
                      n2.readSEG();
                  } else
                    n2.readUEG();
                }
            n2.readBool(), n2.readBool();
            n2.readBool() && (n2.readByte(), n2.readUEG(), n2.readUEG(), n2.readBool());
            var x2 = n2.readUEG(), U2 = 0;
            for (L2 = 0; L2 < x2; L2++) {
              var N2 = false;
              if (0 !== L2 && (N2 = n2.readBool()), N2) {
                L2 === x2 && n2.readUEG(), n2.readBool(), n2.readUEG();
                for (var G2 = 0, V2 = 0; V2 <= U2; V2++) {
                  var F2 = n2.readBool(), j2 = false;
                  F2 || (j2 = n2.readBool()), (F2 || j2) && G2++;
                }
                U2 = G2;
              } else {
                var z2 = n2.readUEG(), H2 = n2.readUEG();
                U2 = z2 + H2;
                for (V2 = 0; V2 < z2; V2++)
                  n2.readUEG(), n2.readBool();
                for (V2 = 0; V2 < H2; V2++)
                  n2.readUEG(), n2.readBool();
              }
            }
            if (n2.readBool()) {
              var q2 = n2.readUEG();
              for (L2 = 0; L2 < q2; L2++) {
                for (V2 = 0; V2 < I2 + 4; V2++)
                  n2.readBits(1);
                n2.readBits(1);
              }
            }
            var K2 = 0, W2 = 1, X2 = 1, Y2 = false, J2 = 1, Z2 = 1;
            n2.readBool(), n2.readBool();
            if (n2.readBool()) {
              if (n2.readBool()) {
                var Q2 = n2.readByte();
                Q2 > 0 && Q2 <= 16 ? (W2 = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][Q2 - 1], X2 = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][Q2 - 1]) : 255 === Q2 && (W2 = n2.readBits(16), X2 = n2.readBits(16));
              }
              if (n2.readBool() && n2.readBool(), n2.readBool())
                n2.readBits(3), n2.readBool(), n2.readBool() && (n2.readByte(), n2.readByte(), n2.readByte());
              n2.readBool() && (n2.readUEG(), n2.readUEG());
              n2.readBool(), n2.readBool(), n2.readBool();
              if (n2.readBool() && (n2.readUEG(), n2.readUEG(), n2.readUEG(), n2.readUEG()), n2.readBool()) {
                if (J2 = n2.readBits(32), Z2 = n2.readBits(32), n2.readBool()) {
                  if (n2.readUEG(), n2.readBool()) {
                    var $2 = false, ee2 = false, te2 = false;
                    if ($2 = n2.readBool(), ee2 = n2.readBool(), $2 || ee2) {
                      (te2 = n2.readBool()) && (n2.readByte(), n2.readBits(5), n2.readBool(), n2.readBits(5));
                      n2.readBits(4), n2.readBits(4);
                      te2 && n2.readBits(4), n2.readBits(5), n2.readBits(5), n2.readBits(5);
                    }
                    for (L2 = 0; L2 <= d2; L2++) {
                      var ie2 = n2.readBool();
                      Y2 = ie2;
                      var ne2 = false, ae2 = 1;
                      ie2 || (ne2 = n2.readBool());
                      var re2 = false;
                      if (ne2 ? n2.readSEG() : re2 = n2.readBool(), re2 || (ae2 = n2.readUEG() + 1), $2)
                        for (V2 = 0; V2 < ae2; V2++)
                          n2.readUEG(), n2.readUEG(), te2 && (n2.readUEG(), n2.readUEG());
                      if (ee2)
                        for (V2 = 0; V2 < ae2; V2++)
                          n2.readUEG(), n2.readUEG(), te2 && (n2.readUEG(), n2.readUEG());
                    }
                  }
                }
              }
              if (n2.readBool()) {
                n2.readBool(), n2.readBool(), n2.readBool();
                K2 = n2.readUEG();
                n2.readUEG(), n2.readUEG(), n2.readUEG(), n2.readUEG();
              }
            }
            n2.readBool();
            var se2 = "hvc1." + c2 + ".1.L" + A2 + ".B0", oe2 = k2 - (a2 + r2) * (1 === w2 || 2 === w2 ? 2 : 1), de2 = D2 - (s2 + o2) * (1 === w2 ? 2 : 1), _e2 = 1;
            return 1 !== W2 && 1 !== X2 && (_e2 = W2 / X2), n2.destroy(), n2 = null, { codec_mimetype: se2, level_string: e2.getLevelString(A2), profile_idc: c2, bit_depth: C2 + 8, ref_frames: 1, chroma_format: w2, chroma_format_string: e2.getChromaFormatString(w2), general_level_idc: A2, general_profile_space: _2, general_tier_flag: h2, general_profile_idc: c2, general_profile_compatibility_flags_1: u2, general_profile_compatibility_flags_2: l2, general_profile_compatibility_flags_3: p2, general_profile_compatibility_flags_4: m2, general_constraint_indicator_flags_1: g2, general_constraint_indicator_flags_2: v2, general_constraint_indicator_flags_3: y2, general_constraint_indicator_flags_4: b2, general_constraint_indicator_flags_5: S2, general_constraint_indicator_flags_6: E2, min_spatial_segmentation_idc: K2, constant_frame_rate: 0, chroma_format_idc: w2, bit_depth_luma_minus8: C2, bit_depth_chroma_minus8: B2, frame_rate: { fixed: Y2, fps: Z2 / J2, fps_den: J2, fps_num: Z2 }, sar_ratio: { width: W2, height: X2 }, codec_size: { width: oe2, height: de2 }, present_size: { width: oe2 * _e2, height: de2 } };
          }, e2.parsePPS = function(t2) {
            var i2 = e2._ebsp2rbsp(t2), n2 = new f(i2);
            n2.readByte(), n2.readByte();
            n2.readUEG(), n2.readUEG(), n2.readBool(), n2.readBool(), n2.readBits(3), n2.readBool(), n2.readBool(), n2.readUEG(), n2.readUEG(), n2.readSEG(), n2.readBool(), n2.readBool();
            if (n2.readBool())
              n2.readUEG();
            n2.readSEG(), n2.readSEG(), n2.readBool(), n2.readBool(), n2.readBool(), n2.readBool();
            var a2 = n2.readBool(), r2 = n2.readBool(), s2 = 1;
            return r2 && a2 ? s2 = 0 : r2 ? s2 = 3 : a2 && (s2 = 2), { parallelismType: s2 };
          }, e2.getChromaFormatString = function(e3) {
            switch (e3) {
              case 0:
                return "4:0:0";
              case 1:
                return "4:2:0";
              case 2:
                return "4:2:2";
              case 3:
                return "4:4:4";
              default:
                return "Unknown";
            }
          }, e2.getProfileString = function(e3) {
            switch (e3) {
              case 1:
                return "Main";
              case 2:
                return "Main10";
              case 3:
                return "MainSP";
              case 4:
                return "Rext";
              case 9:
                return "SCC";
              default:
                return "Unknown";
            }
          }, e2.getLevelString = function(e3) {
            return (e3 / 30).toFixed(1);
          }, e2;
        }();
        function v(e2) {
          return e2.byteOffset % 2 == 0 && e2.byteLength % 2 == 0;
        }
        function y(e2) {
          return e2.byteOffset % 4 == 0 && e2.byteLength % 4 == 0;
        }
        function b(e2, t2) {
          for (var i2 = 0; i2 < e2.length; i2++)
            if (e2[i2] !== t2[i2])
              return false;
          return true;
        }
        var S = function(e2, t2) {
          return e2.byteLength === t2.byteLength && (y(e2) && y(t2) ? function(e3, t3) {
            return b(new Uint32Array(e3.buffer, e3.byteOffset, e3.byteLength / 4), new Uint32Array(t3.buffer, t3.byteOffset, t3.byteLength / 4));
          }(e2, t2) : v(e2) && v(t2) ? function(e3, t3) {
            return b(new Uint16Array(e3.buffer, e3.byteOffset, e3.byteLength / 2), new Uint16Array(t3.buffer, t3.byteOffset, t3.byteLength / 2));
          }(e2, t2) : function(e3, t3) {
            return b(e3, t3);
          }(e2, t2));
        };
        var E, A = function() {
          function e2(e3, t2) {
            this.TAG = "FLVDemuxer", this._config = t2, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = e3.dataOffset, this._firstParse = true, this._dispatch = false, this._hasAudio = e3.hasAudioTrack, this._hasVideo = e3.hasVideoTrack, this._hasAudioFlagOverrided = false, this._hasVideoFlagOverrided = false, this._audioInitialMetadataDispatched = false, this._videoInitialMetadataDispatched = false, this._mediaInfo = new o.a(), this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = false, this._referenceFrameRate = { fixed: true, fps: 23.976, fps_num: 23976, fps_den: 1e3 }, this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3], this._mpegSamplingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0], this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0], this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0], this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], this._videoTrack = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 }, this._audioTrack = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 }, this._littleEndian = function() {
              var e4 = new ArrayBuffer(2);
              return new DataView(e4).setInt16(0, 256, true), 256 === new Int16Array(e4)[0];
            }();
          }
          return e2.prototype.destroy = function() {
            this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null;
          }, e2.probe = function(e3) {
            var t2 = new Uint8Array(e3);
            if (t2.byteLength < 9)
              return { needMoreData: true };
            var i2 = { match: false };
            if (70 !== t2[0] || 76 !== t2[1] || 86 !== t2[2] || 1 !== t2[3])
              return i2;
            var n2, a2, r2 = (4 & t2[4]) >>> 2 != 0, s2 = 0 != (1 & t2[4]), o2 = (n2 = t2)[a2 = 5] << 24 | n2[a2 + 1] << 16 | n2[a2 + 2] << 8 | n2[a2 + 3];
            return o2 < 9 ? i2 : { match: true, consumed: o2, dataOffset: o2, hasAudioTrack: r2, hasVideoTrack: s2 };
          }, e2.prototype.bindDataSource = function(e3) {
            return e3.onDataArrival = this.parseChunks.bind(this), this;
          }, Object.defineProperty(e2.prototype, "onTrackMetadata", { get: function() {
            return this._onTrackMetadata;
          }, set: function(e3) {
            this._onTrackMetadata = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onMediaInfo", { get: function() {
            return this._onMediaInfo;
          }, set: function(e3) {
            this._onMediaInfo = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onMetaDataArrived", { get: function() {
            return this._onMetaDataArrived;
          }, set: function(e3) {
            this._onMetaDataArrived = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onScriptDataArrived", { get: function() {
            return this._onScriptDataArrived;
          }, set: function(e3) {
            this._onScriptDataArrived = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onError", { get: function() {
            return this._onError;
          }, set: function(e3) {
            this._onError = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onDataAvailable", { get: function() {
            return this._onDataAvailable;
          }, set: function(e3) {
            this._onDataAvailable = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "timestampBase", { get: function() {
            return this._timestampBase;
          }, set: function(e3) {
            this._timestampBase = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "overridedDuration", { get: function() {
            return this._duration;
          }, set: function(e3) {
            this._durationOverrided = true, this._duration = e3, this._mediaInfo.duration = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "overridedHasAudio", { set: function(e3) {
            this._hasAudioFlagOverrided = true, this._hasAudio = e3, this._mediaInfo.hasAudio = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "overridedHasVideo", { set: function(e3) {
            this._hasVideoFlagOverrided = true, this._hasVideo = e3, this._mediaInfo.hasVideo = e3;
          }, enumerable: false, configurable: true }), e2.prototype.resetMediaInfo = function() {
            this._mediaInfo = new o.a();
          }, e2.prototype._isInitialMetadataDispatched = function() {
            return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !(this._hasAudio || !this._hasVideo) && this._videoInitialMetadataDispatched;
          }, e2.prototype.parseChunks = function(t2, i2) {
            if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this._onDataAvailable))
              throw new c.a("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
            var n2 = 0, a2 = this._littleEndian;
            if (0 === i2) {
              if (!(t2.byteLength > 13))
                return 0;
              n2 = e2.probe(t2).dataOffset;
            }
            this._firstParse && (this._firstParse = false, i2 + n2 !== this._dataOffset && r.a.w(this.TAG, "First time parsing but chunk byteStart invalid!"), 0 !== (s2 = new DataView(t2, n2)).getUint32(0, !a2) && r.a.w(this.TAG, "PrevTagSize0 !== 0 !!!"), n2 += 4);
            for (; n2 < t2.byteLength; ) {
              this._dispatch = true;
              var s2 = new DataView(t2, n2);
              if (n2 + 11 + 4 > t2.byteLength)
                break;
              var o2 = s2.getUint8(0), d2 = 16777215 & s2.getUint32(0, !a2);
              if (n2 + 11 + d2 + 4 > t2.byteLength)
                break;
              if (8 === o2 || 9 === o2 || 18 === o2) {
                var _2 = s2.getUint8(4), h2 = s2.getUint8(5), u2 = s2.getUint8(6) | h2 << 8 | _2 << 16 | s2.getUint8(7) << 24;
                0 !== (16777215 & s2.getUint32(7, !a2)) && r.a.w(this.TAG, "Meet tag which has StreamID != 0!");
                var l2 = n2 + 11;
                switch (o2) {
                  case 8:
                    this._parseAudioData(t2, l2, d2, u2);
                    break;
                  case 9:
                    this._parseVideoData(t2, l2, d2, u2, i2 + n2);
                    break;
                  case 18:
                    this._parseScriptData(t2, l2, d2);
                }
                var f2 = s2.getUint32(11 + d2, !a2);
                f2 !== 11 + d2 && r.a.w(this.TAG, "Invalid PrevTagSize " + f2), n2 += 11 + d2 + 4;
              } else
                r.a.w(this.TAG, "Unsupported tag type " + o2 + ", skipped"), n2 += 11 + d2 + 4;
            }
            return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack), n2;
          }, e2.prototype._parseScriptData = function(e3, t2, i2) {
            var n2 = l.parseScriptData(e3, t2, i2);
            if (n2.hasOwnProperty("onMetaData")) {
              if (null == n2.onMetaData || "object" != typeof n2.onMetaData)
                return void r.a.w(this.TAG, "Invalid onMetaData structure!");
              this._metadata && r.a.w(this.TAG, "Found another onMetaData tag!"), this._metadata = n2;
              var a2 = this._metadata.onMetaData;
              if (this._onMetaDataArrived && this._onMetaDataArrived(Object.assign({}, a2)), "boolean" == typeof a2.hasAudio && false === this._hasAudioFlagOverrided && (this._hasAudio = a2.hasAudio, this._mediaInfo.hasAudio = this._hasAudio), "boolean" == typeof a2.hasVideo && false === this._hasVideoFlagOverrided && (this._hasVideo = a2.hasVideo, this._mediaInfo.hasVideo = this._hasVideo), "number" == typeof a2.audiodatarate && (this._mediaInfo.audioDataRate = a2.audiodatarate), "number" == typeof a2.videodatarate && (this._mediaInfo.videoDataRate = a2.videodatarate), "number" == typeof a2.width && (this._mediaInfo.width = a2.width), "number" == typeof a2.height && (this._mediaInfo.height = a2.height), "number" == typeof a2.duration) {
                if (!this._durationOverrided) {
                  var s2 = Math.floor(a2.duration * this._timescale);
                  this._duration = s2, this._mediaInfo.duration = s2;
                }
              } else
                this._mediaInfo.duration = 0;
              if ("number" == typeof a2.framerate) {
                var o2 = Math.floor(1e3 * a2.framerate);
                if (o2 > 0) {
                  var d2 = o2 / 1e3;
                  this._referenceFrameRate.fixed = true, this._referenceFrameRate.fps = d2, this._referenceFrameRate.fps_num = o2, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo.fps = d2;
                }
              }
              if ("object" == typeof a2.keyframes) {
                this._mediaInfo.hasKeyframesIndex = true;
                var _2 = a2.keyframes;
                this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(_2), a2.keyframes = null;
              } else
                this._mediaInfo.hasKeyframesIndex = false;
              this._dispatch = false, this._mediaInfo.metadata = a2, r.a.v(this.TAG, "Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo);
            }
            Object.keys(n2).length > 0 && this._onScriptDataArrived && this._onScriptDataArrived(Object.assign({}, n2));
          }, e2.prototype._parseKeyframesIndex = function(e3) {
            for (var t2 = [], i2 = [], n2 = 1; n2 < e3.times.length; n2++) {
              var a2 = this._timestampBase + Math.floor(1e3 * e3.times[n2]);
              t2.push(a2), i2.push(e3.filepositions[n2]);
            }
            return { times: t2, filepositions: i2 };
          }, e2.prototype._parseAudioData = function(e3, t2, i2, n2) {
            if (i2 <= 1)
              r.a.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
            else if (true !== this._hasAudioFlagOverrided || false !== this._hasAudio) {
              this._littleEndian;
              var a2 = new DataView(e3, t2, i2).getUint8(0), s2 = a2 >>> 4;
              if (2 === s2 || 10 === s2) {
                var o2 = 0, d2 = (12 & a2) >>> 2;
                if (d2 >= 0 && d2 <= 4) {
                  o2 = this._flvSoundRateTable[d2];
                  var _2 = 1 & a2, h2 = this._audioMetadata, c2 = this._audioTrack;
                  if (h2 || (false === this._hasAudio && false === this._hasAudioFlagOverrided && (this._hasAudio = true, this._mediaInfo.hasAudio = true), (h2 = this._audioMetadata = {}).type = "audio", h2.id = c2.id, h2.timescale = this._timescale, h2.duration = this._duration, h2.audioSampleRate = o2, h2.channelCount = 0 === _2 ? 1 : 2), 10 === s2) {
                    var u2 = this._parseAACAudioData(e3, t2 + 1, i2 - 1);
                    if (null == u2)
                      return;
                    if (0 === u2.packetType) {
                      if (h2.config) {
                        if (S(u2.data.config, h2.config))
                          return;
                        r.a.w(this.TAG, "AudioSpecificConfig has been changed, re-generate initialization segment");
                      }
                      var l2 = u2.data;
                      h2.audioSampleRate = l2.samplingRate, h2.channelCount = l2.channelCount, h2.codec = l2.codec, h2.originalCodec = l2.originalCodec, h2.config = l2.config, h2.refSampleDuration = 1024 / h2.audioSampleRate * h2.timescale, r.a.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._audioInitialMetadataDispatched = true, this._dispatch = false, this._onTrackMetadata("audio", h2), (g2 = this._mediaInfo).audioCodec = h2.originalCodec, g2.audioSampleRate = h2.audioSampleRate, g2.audioChannelCount = h2.channelCount, g2.hasVideo ? null != g2.videoCodec && (g2.mimeType = 'video/x-flv; codecs="' + g2.videoCodec + "," + g2.audioCodec + '"') : g2.mimeType = 'video/x-flv; codecs="' + g2.audioCodec + '"', g2.isComplete() && this._onMediaInfo(g2);
                    } else if (1 === u2.packetType) {
                      var f2 = this._timestampBase + n2, p2 = { unit: u2.data, length: u2.data.byteLength, dts: f2, pts: f2 };
                      c2.samples.push(p2), c2.length += u2.data.length;
                    } else
                      r.a.e(this.TAG, "Flv: Unsupported AAC data type " + u2.packetType);
                  } else if (2 === s2) {
                    if (!h2.codec) {
                      var g2;
                      if (null == (l2 = this._parseMP3AudioData(e3, t2 + 1, i2 - 1, true)))
                        return;
                      h2.audioSampleRate = l2.samplingRate, h2.channelCount = l2.channelCount, h2.codec = l2.codec, h2.originalCodec = l2.originalCodec, h2.refSampleDuration = 1152 / h2.audioSampleRate * h2.timescale, r.a.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = true, this._onTrackMetadata("audio", h2), (g2 = this._mediaInfo).audioCodec = h2.codec, g2.audioSampleRate = h2.audioSampleRate, g2.audioChannelCount = h2.channelCount, g2.audioDataRate = l2.bitRate, g2.hasVideo ? null != g2.videoCodec && (g2.mimeType = 'video/x-flv; codecs="' + g2.videoCodec + "," + g2.audioCodec + '"') : g2.mimeType = 'video/x-flv; codecs="' + g2.audioCodec + '"', g2.isComplete() && this._onMediaInfo(g2);
                    }
                    var v2 = this._parseMP3AudioData(e3, t2 + 1, i2 - 1, false);
                    if (null == v2)
                      return;
                    f2 = this._timestampBase + n2;
                    var y2 = { unit: v2, length: v2.byteLength, dts: f2, pts: f2 };
                    c2.samples.push(y2), c2.length += v2.length;
                  }
                } else
                  this._onError(m.a.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + d2);
              } else
                this._onError(m.a.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + s2);
            }
          }, e2.prototype._parseAACAudioData = function(e3, t2, i2) {
            if (!(i2 <= 1)) {
              var n2 = {}, a2 = new Uint8Array(e3, t2, i2);
              return n2.packetType = a2[0], 0 === a2[0] ? n2.data = this._parseAACAudioSpecificConfig(e3, t2 + 1, i2 - 1) : n2.data = a2.subarray(1), n2;
            }
            r.a.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
          }, e2.prototype._parseAACAudioSpecificConfig = function(e3, t2, i2) {
            var n2, a2, r2 = new Uint8Array(e3, t2, i2), s2 = null, o2 = 0, d2 = null;
            if (o2 = n2 = r2[0] >>> 3, (a2 = (7 & r2[0]) << 1 | r2[1] >>> 7) < 0 || a2 >= this._mpegSamplingRates.length)
              this._onError(m.a.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");
            else {
              var _2 = this._mpegSamplingRates[a2], h2 = (120 & r2[1]) >>> 3;
              if (!(h2 < 0 || h2 >= 8)) {
                5 === o2 && (d2 = (7 & r2[1]) << 1 | r2[2] >>> 7, (124 & r2[2]) >>> 2);
                var c2 = self.navigator.userAgent.toLowerCase();
                return -1 !== c2.indexOf("firefox") ? a2 >= 6 ? (o2 = 5, s2 = new Array(4), d2 = a2 - 3) : (o2 = 2, s2 = new Array(2), d2 = a2) : -1 !== c2.indexOf("android") ? (o2 = 2, s2 = new Array(2), d2 = a2) : (o2 = 5, d2 = a2, s2 = new Array(4), a2 >= 6 ? d2 = a2 - 3 : 1 === h2 && (o2 = 2, s2 = new Array(2), d2 = a2)), s2[0] = o2 << 3, s2[0] |= (15 & a2) >>> 1, s2[1] = (15 & a2) << 7, s2[1] |= (15 & h2) << 3, 5 === o2 && (s2[1] |= (15 & d2) >>> 1, s2[2] = (1 & d2) << 7, s2[2] |= 8, s2[3] = 0), { config: s2, samplingRate: _2, channelCount: h2, codec: "mp4a.40." + o2, originalCodec: "mp4a.40." + n2 };
              }
              this._onError(m.a.FORMAT_ERROR, "Flv: AAC invalid channel configuration");
            }
          }, e2.prototype._parseMP3AudioData = function(e3, t2, i2, n2) {
            if (!(i2 < 4)) {
              this._littleEndian;
              var a2 = new Uint8Array(e3, t2, i2), s2 = null;
              if (n2) {
                if (255 !== a2[0])
                  return;
                var o2 = a2[1] >>> 3 & 3, d2 = (6 & a2[1]) >> 1, _2 = (240 & a2[2]) >>> 4, h2 = (12 & a2[2]) >>> 2, c2 = 3 !== (a2[3] >>> 6 & 3) ? 2 : 1, u2 = 0, l2 = 0;
                switch (o2) {
                  case 0:
                    u2 = this._mpegAudioV25SampleRateTable[h2];
                    break;
                  case 2:
                    u2 = this._mpegAudioV20SampleRateTable[h2];
                    break;
                  case 3:
                    u2 = this._mpegAudioV10SampleRateTable[h2];
                }
                switch (d2) {
                  case 1:
                    34, _2 < this._mpegAudioL3BitRateTable.length && (l2 = this._mpegAudioL3BitRateTable[_2]);
                    break;
                  case 2:
                    33, _2 < this._mpegAudioL2BitRateTable.length && (l2 = this._mpegAudioL2BitRateTable[_2]);
                    break;
                  case 3:
                    32, _2 < this._mpegAudioL1BitRateTable.length && (l2 = this._mpegAudioL1BitRateTable[_2]);
                }
                s2 = { bitRate: l2, samplingRate: u2, channelCount: c2, codec: "mp3", originalCodec: "mp3" };
              } else
                s2 = a2;
              return s2;
            }
            r.a.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
          }, e2.prototype._parseVideoData = function(e3, t2, i2, n2, a2) {
            if (i2 <= 1)
              r.a.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");
            else if (true !== this._hasVideoFlagOverrided || false !== this._hasVideo) {
              var s2 = new Uint8Array(e3, t2, i2)[0], o2 = (112 & s2) >>> 4;
              if (0 != (128 & s2)) {
                var d2 = 15 & s2, _2 = String.fromCharCode.apply(String, new Uint8Array(e3, t2, i2).slice(1, 5));
                if ("hvc1" !== _2)
                  return void this._onError(m.a.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + _2);
                this._parseEnhancedHEVCVideoPacket(e3, t2 + 5, i2 - 5, n2, a2, o2, d2);
              } else {
                var h2 = 15 & s2;
                if (7 === h2)
                  this._parseAVCVideoPacket(e3, t2 + 1, i2 - 1, n2, a2, o2);
                else {
                  if (12 !== h2)
                    return void this._onError(m.a.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + h2);
                  this._parseHEVCVideoPacket(e3, t2 + 1, i2 - 1, n2, a2, o2);
                }
              }
            }
          }, e2.prototype._parseAVCVideoPacket = function(e3, t2, i2, n2, a2, s2) {
            if (i2 < 4)
              r.a.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
            else {
              var o2 = this._littleEndian, d2 = new DataView(e3, t2, i2), _2 = d2.getUint8(0), h2 = (16777215 & d2.getUint32(0, !o2)) << 8 >> 8;
              if (0 === _2)
                this._parseAVCDecoderConfigurationRecord(e3, t2 + 4, i2 - 4);
              else if (1 === _2)
                this._parseAVCVideoData(e3, t2 + 4, i2 - 4, n2, a2, s2, h2);
              else if (2 !== _2)
                return void this._onError(m.a.FORMAT_ERROR, "Flv: Invalid video packet type " + _2);
            }
          }, e2.prototype._parseHEVCVideoPacket = function(e3, t2, i2, n2, a2, s2) {
            if (i2 < 4)
              r.a.w(this.TAG, "Flv: Invalid HEVC packet, missing HEVCPacketType or/and CompositionTime");
            else {
              var o2 = this._littleEndian, d2 = new DataView(e3, t2, i2), _2 = d2.getUint8(0), h2 = (16777215 & d2.getUint32(0, !o2)) << 8 >> 8;
              if (0 === _2)
                this._parseHEVCDecoderConfigurationRecord(e3, t2 + 4, i2 - 4);
              else if (1 === _2)
                this._parseHEVCVideoData(e3, t2 + 4, i2 - 4, n2, a2, s2, h2);
              else if (2 !== _2)
                return void this._onError(m.a.FORMAT_ERROR, "Flv: Invalid video packet type " + _2);
            }
          }, e2.prototype._parseEnhancedHEVCVideoPacket = function(e3, t2, i2, n2, a2, s2, o2) {
            if (i2 < 4)
              r.a.w(this.TAG, "Flv: Invalid HEVC packet, missing HEVCPacketType or/and CompositionTime");
            else {
              var d2 = this._littleEndian, _2 = new DataView(e3, t2, i2);
              if (0 === o2)
                this._parseHEVCDecoderConfigurationRecord(e3, t2, i2);
              else if (1 === o2) {
                var h2 = (4294967040 & _2.getUint32(0, !d2)) >> 8;
                this._parseHEVCVideoData(e3, t2 + 3, i2 - 3, n2, a2, s2, h2);
              } else if (3 === o2)
                this._parseHEVCVideoData(e3, t2, i2, n2, a2, s2, 0);
              else if (2 !== o2)
                return void this._onError(m.a.FORMAT_ERROR, "Flv: Invalid video packet type " + o2);
            }
          }, e2.prototype._parseAVCDecoderConfigurationRecord = function(e3, t2, i2) {
            if (i2 < 7)
              r.a.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
            else {
              var n2 = this._videoMetadata, a2 = this._videoTrack, s2 = this._littleEndian, o2 = new DataView(e3, t2, i2);
              if (n2) {
                if (void 0 !== n2.avcc) {
                  var d2 = new Uint8Array(e3, t2, i2);
                  if (S(d2, n2.avcc))
                    return;
                  r.a.w(this.TAG, "AVCDecoderConfigurationRecord has been changed, re-generate initialization segment");
                }
              } else
                false === this._hasVideo && false === this._hasVideoFlagOverrided && (this._hasVideo = true, this._mediaInfo.hasVideo = true), (n2 = this._videoMetadata = {}).type = "video", n2.id = a2.id, n2.timescale = this._timescale, n2.duration = this._duration;
              var _2 = o2.getUint8(0), h2 = o2.getUint8(1);
              o2.getUint8(2), o2.getUint8(3);
              if (1 === _2 && 0 !== h2)
                if (this._naluLengthSize = 1 + (3 & o2.getUint8(4)), 3 === this._naluLengthSize || 4 === this._naluLengthSize) {
                  var c2 = 31 & o2.getUint8(5);
                  if (0 !== c2) {
                    c2 > 1 && r.a.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + c2);
                    for (var u2 = 6, l2 = 0; l2 < c2; l2++) {
                      var f2 = o2.getUint16(u2, !s2);
                      if (u2 += 2, 0 !== f2) {
                        var g2 = new Uint8Array(e3, t2 + u2, f2);
                        u2 += f2;
                        var v2 = p.parseSPS(g2);
                        if (0 === l2) {
                          n2.codecWidth = v2.codec_size.width, n2.codecHeight = v2.codec_size.height, n2.presentWidth = v2.present_size.width, n2.presentHeight = v2.present_size.height, n2.profile = v2.profile_string, n2.level = v2.level_string, n2.bitDepth = v2.bit_depth, n2.chromaFormat = v2.chroma_format, n2.sarRatio = v2.sar_ratio, n2.frameRate = v2.frame_rate, false !== v2.frame_rate.fixed && 0 !== v2.frame_rate.fps_num && 0 !== v2.frame_rate.fps_den || (n2.frameRate = this._referenceFrameRate);
                          var y2 = n2.frameRate.fps_den, b2 = n2.frameRate.fps_num;
                          n2.refSampleDuration = n2.timescale * (y2 / b2);
                          for (var E2 = g2.subarray(1, 4), A2 = "avc1.", R2 = 0; R2 < 3; R2++) {
                            var T2 = E2[R2].toString(16);
                            T2.length < 2 && (T2 = "0" + T2), A2 += T2;
                          }
                          n2.codec = A2;
                          var L2 = this._mediaInfo;
                          L2.width = n2.codecWidth, L2.height = n2.codecHeight, L2.fps = n2.frameRate.fps, L2.profile = n2.profile, L2.level = n2.level, L2.refFrames = v2.ref_frames, L2.chromaFormat = v2.chroma_format_string, L2.sarNum = n2.sarRatio.width, L2.sarDen = n2.sarRatio.height, L2.videoCodec = A2, L2.hasAudio ? null != L2.audioCodec && (L2.mimeType = 'video/x-flv; codecs="' + L2.videoCodec + "," + L2.audioCodec + '"') : L2.mimeType = 'video/x-flv; codecs="' + L2.videoCodec + '"', L2.isComplete() && this._onMediaInfo(L2);
                        }
                      }
                    }
                    var w2 = o2.getUint8(u2);
                    if (0 !== w2) {
                      w2 > 1 && r.a.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + w2), u2++;
                      for (l2 = 0; l2 < w2; l2++) {
                        f2 = o2.getUint16(u2, !s2);
                        u2 += 2, 0 !== f2 && (u2 += f2);
                      }
                      n2.avcc = new Uint8Array(i2), n2.avcc.set(new Uint8Array(e3, t2, i2), 0), r.a.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = true, this._dispatch = false, this._onTrackMetadata("video", n2);
                    } else
                      this._onError(m.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
                  } else
                    this._onError(m.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
                } else
                  this._onError(m.a.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
              else
                this._onError(m.a.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord");
            }
          }, e2.prototype._parseHEVCDecoderConfigurationRecord = function(e3, t2, i2) {
            if (i2 < 22)
              r.a.w(this.TAG, "Flv: Invalid HEVCDecoderConfigurationRecord, lack of data!");
            else {
              var n2 = this._videoMetadata, a2 = this._videoTrack, s2 = this._littleEndian, o2 = new DataView(e3, t2, i2);
              if (n2) {
                if (void 0 !== n2.hvcc) {
                  var d2 = new Uint8Array(e3, t2, i2);
                  if (S(d2, n2.hvcc))
                    return;
                  r.a.w(this.TAG, "HEVCDecoderConfigurationRecord has been changed, re-generate initialization segment");
                }
              } else
                false === this._hasVideo && false === this._hasVideoFlagOverrided && (this._hasVideo = true, this._mediaInfo.hasVideo = true), (n2 = this._videoMetadata = {}).type = "video", n2.id = a2.id, n2.timescale = this._timescale, n2.duration = this._duration;
              var _2 = o2.getUint8(0), h2 = 31 & o2.getUint8(1);
              if (1 === _2 && 0 !== h2)
                if (this._naluLengthSize = 1 + (3 & o2.getUint8(21)), 3 === this._naluLengthSize || 4 === this._naluLengthSize) {
                  for (var c2 = o2.getUint8(22), u2 = 0, l2 = 23; u2 < c2; u2++) {
                    var f2 = 63 & o2.getUint8(l2 + 0), p2 = o2.getUint16(l2 + 1, !s2);
                    l2 += 3;
                    for (var v2 = 0; v2 < p2; v2++) {
                      var y2 = o2.getUint16(l2 + 0, !s2);
                      if (0 === v2)
                        if (33 === f2) {
                          l2 += 2;
                          var b2 = new Uint8Array(e3, t2 + l2, y2), E2 = g.parseSPS(b2);
                          n2.codecWidth = E2.codec_size.width, n2.codecHeight = E2.codec_size.height, n2.presentWidth = E2.present_size.width, n2.presentHeight = E2.present_size.height, n2.profile = E2.profile_string, n2.level = E2.level_string, n2.bitDepth = E2.bit_depth, n2.chromaFormat = E2.chroma_format, n2.sarRatio = E2.sar_ratio, n2.frameRate = E2.frame_rate, false !== E2.frame_rate.fixed && 0 !== E2.frame_rate.fps_num && 0 !== E2.frame_rate.fps_den || (n2.frameRate = this._referenceFrameRate);
                          var A2 = n2.frameRate.fps_den, R2 = n2.frameRate.fps_num;
                          n2.refSampleDuration = n2.timescale * (A2 / R2), n2.codec = E2.codec_mimetype;
                          var T2 = this._mediaInfo;
                          T2.width = n2.codecWidth, T2.height = n2.codecHeight, T2.fps = n2.frameRate.fps, T2.profile = n2.profile, T2.level = n2.level, T2.refFrames = E2.ref_frames, T2.chromaFormat = E2.chroma_format_string, T2.sarNum = n2.sarRatio.width, T2.sarDen = n2.sarRatio.height, T2.videoCodec = E2.codec_mimetype, T2.hasAudio ? null != T2.audioCodec && (T2.mimeType = 'video/x-flv; codecs="' + T2.videoCodec + "," + T2.audioCodec + '"') : T2.mimeType = 'video/x-flv; codecs="' + T2.videoCodec + '"', T2.isComplete() && this._onMediaInfo(T2), l2 += y2;
                        } else
                          l2 += 2 + y2;
                      else
                        l2 += 2 + y2;
                    }
                  }
                  n2.hvcc = new Uint8Array(i2), n2.hvcc.set(new Uint8Array(e3, t2, i2), 0), r.a.v(this.TAG, "Parsed HEVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = true, this._dispatch = false, this._onTrackMetadata("video", n2);
                } else
                  this._onError(m.a.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
              else
                this._onError(m.a.FORMAT_ERROR, "Flv: Invalid HEVCDecoderConfigurationRecord");
            }
          }, e2.prototype._parseAVCVideoData = function(e3, t2, i2, n2, a2, s2, o2) {
            for (var d2 = this._littleEndian, _2 = new DataView(e3, t2, i2), h2 = [], c2 = 0, u2 = 0, l2 = this._naluLengthSize, f2 = this._timestampBase + n2, p2 = 1 === s2; u2 < i2; ) {
              if (u2 + 4 >= i2) {
                r.a.w(this.TAG, "Malformed Nalu near timestamp " + f2 + ", offset = " + u2 + ", dataSize = " + i2);
                break;
              }
              var m2 = _2.getUint32(u2, !d2);
              if (3 === l2 && (m2 >>>= 8), m2 > i2 - l2)
                return void r.a.w(this.TAG, "Malformed Nalus near timestamp " + f2 + ", NaluSize > DataSize!");
              var g2 = 31 & _2.getUint8(u2 + l2);
              5 === g2 && (p2 = true);
              var v2 = new Uint8Array(e3, t2 + u2, l2 + m2), y2 = { type: g2, data: v2 };
              h2.push(y2), c2 += v2.byteLength, u2 += l2 + m2;
            }
            if (h2.length) {
              var b2 = this._videoTrack, S2 = { units: h2, length: c2, isKeyframe: p2, dts: f2, cts: o2, pts: f2 + o2 };
              p2 && (S2.fileposition = a2), b2.samples.push(S2), b2.length += c2;
            }
          }, e2.prototype._parseHEVCVideoData = function(e3, t2, i2, n2, a2, s2, o2) {
            for (var d2 = this._littleEndian, _2 = new DataView(e3, t2, i2), h2 = [], c2 = 0, u2 = 0, l2 = this._naluLengthSize, f2 = this._timestampBase + n2, p2 = 1 === s2; u2 < i2; ) {
              if (u2 + 4 >= i2) {
                r.a.w(this.TAG, "Malformed Nalu near timestamp " + f2 + ", offset = " + u2 + ", dataSize = " + i2);
                break;
              }
              var m2 = _2.getUint32(u2, !d2);
              if (3 === l2 && (m2 >>>= 8), m2 > i2 - l2)
                return void r.a.w(this.TAG, "Malformed Nalus near timestamp " + f2 + ", NaluSize > DataSize!");
              var g2 = 31 & _2.getUint8(u2 + l2);
              19 !== g2 && 20 !== g2 || (p2 = true);
              var v2 = new Uint8Array(e3, t2 + u2, l2 + m2), y2 = { type: g2, data: v2 };
              h2.push(y2), c2 += v2.byteLength, u2 += l2 + m2;
            }
            if (h2.length) {
              var b2 = this._videoTrack, S2 = { units: h2, length: c2, isKeyframe: p2, dts: f2, cts: o2, pts: f2 + o2 };
              p2 && (S2.fileposition = a2), b2.samples.push(S2), b2.length += c2;
            }
          }, e2;
        }(), R = function() {
          function e2() {
          }
          return e2.prototype.destroy = function() {
            this.onError = null, this.onMediaInfo = null, this.onMetaDataArrived = null, this.onTrackMetadata = null, this.onDataAvailable = null, this.onTimedID3Metadata = null, this.onSMPTE2038Metadata = null, this.onSCTE35Metadata = null, this.onPESPrivateData = null, this.onPESPrivateDataDescriptor = null;
          }, e2;
        }(), T = function() {
          this.program_pmt_pid = {};
        };
        !function(e2) {
          e2[e2.kMPEG1Audio = 3] = "kMPEG1Audio", e2[e2.kMPEG2Audio = 4] = "kMPEG2Audio", e2[e2.kPESPrivateData = 6] = "kPESPrivateData", e2[e2.kADTSAAC = 15] = "kADTSAAC", e2[e2.kLOASAAC = 17] = "kLOASAAC", e2[e2.kAC3 = 129] = "kAC3", e2[e2.kID3 = 21] = "kID3", e2[e2.kSCTE35 = 134] = "kSCTE35", e2[e2.kH264 = 27] = "kH264", e2[e2.kH265 = 36] = "kH265";
        }(E || (E = {}));
        var L, w = function() {
          this.pid_stream_type = {}, this.common_pids = { h264: void 0, h265: void 0, adts_aac: void 0, loas_aac: void 0, opus: void 0, ac3: void 0, mp3: void 0 }, this.pes_private_data_pids = {}, this.timed_id3_pids = {}, this.scte_35_pids = {}, this.smpte2038_pids = {};
        }, k = function() {
        }, D = function() {
        }, C = function() {
          this.slices = [], this.total_length = 0, this.expected_length = 0, this.file_position = 0;
        };
        !function(e2) {
          e2[e2.kUnspecified = 0] = "kUnspecified", e2[e2.kSliceNonIDR = 1] = "kSliceNonIDR", e2[e2.kSliceDPA = 2] = "kSliceDPA", e2[e2.kSliceDPB = 3] = "kSliceDPB", e2[e2.kSliceDPC = 4] = "kSliceDPC", e2[e2.kSliceIDR = 5] = "kSliceIDR", e2[e2.kSliceSEI = 6] = "kSliceSEI", e2[e2.kSliceSPS = 7] = "kSliceSPS", e2[e2.kSlicePPS = 8] = "kSlicePPS", e2[e2.kSliceAUD = 9] = "kSliceAUD", e2[e2.kEndOfSequence = 10] = "kEndOfSequence", e2[e2.kEndOfStream = 11] = "kEndOfStream", e2[e2.kFiller = 12] = "kFiller", e2[e2.kSPSExt = 13] = "kSPSExt", e2[e2.kReserved0 = 14] = "kReserved0";
        }(L || (L = {}));
        var B, I, O = function() {
        }, P = function(e2) {
          var t2 = e2.data.byteLength;
          this.type = e2.type, this.data = new Uint8Array(4 + t2), new DataView(this.data.buffer).setUint32(0, t2), this.data.set(e2.data, 4);
        }, M = function() {
          function e2(e3) {
            this.TAG = "H264AnnexBParser", this.current_startcode_offset_ = 0, this.eof_flag_ = false, this.data_ = e3, this.current_startcode_offset_ = this.findNextStartCodeOffset(0), this.eof_flag_ && r.a.e(this.TAG, "Could not find H264 startcode until payload end!");
          }
          return e2.prototype.findNextStartCodeOffset = function(e3) {
            for (var t2 = e3, i2 = this.data_; ; ) {
              if (t2 + 3 >= i2.byteLength)
                return this.eof_flag_ = true, i2.byteLength;
              var n2 = i2[t2 + 0] << 24 | i2[t2 + 1] << 16 | i2[t2 + 2] << 8 | i2[t2 + 3], a2 = i2[t2 + 0] << 16 | i2[t2 + 1] << 8 | i2[t2 + 2];
              if (1 === n2 || 1 === a2)
                return t2;
              t2++;
            }
          }, e2.prototype.readNextNaluPayload = function() {
            for (var e3 = this.data_, t2 = null; null == t2 && !this.eof_flag_; ) {
              var i2 = this.current_startcode_offset_, n2 = 31 & e3[i2 += 1 === (e3[i2] << 24 | e3[i2 + 1] << 16 | e3[i2 + 2] << 8 | e3[i2 + 3]) ? 4 : 3], a2 = (128 & e3[i2]) >>> 7, r2 = this.findNextStartCodeOffset(i2);
              if (this.current_startcode_offset_ = r2, !(n2 >= L.kReserved0) && 0 === a2) {
                var s2 = e3.subarray(i2, r2);
                (t2 = new O()).type = n2, t2.data = s2;
              }
            }
            return t2;
          }, e2;
        }(), x = function() {
          function e2(e3, t2, i2) {
            var n2 = 8 + e3.byteLength + 1 + 2 + t2.byteLength, a2 = false;
            66 !== e3[3] && 77 !== e3[3] && 88 !== e3[3] && (a2 = true, n2 += 4);
            var r2 = this.data = new Uint8Array(n2);
            r2[0] = 1, r2[1] = e3[1], r2[2] = e3[2], r2[3] = e3[3], r2[4] = 255, r2[5] = 225;
            var s2 = e3.byteLength;
            r2[6] = s2 >>> 8, r2[7] = 255 & s2;
            var o2 = 8;
            r2.set(e3, 8), r2[o2 += s2] = 1;
            var d2 = t2.byteLength;
            r2[o2 + 1] = d2 >>> 8, r2[o2 + 2] = 255 & d2, r2.set(t2, o2 + 3), o2 += 3 + d2, a2 && (r2[o2] = 252 | i2.chroma_format_idc, r2[o2 + 1] = 248 | i2.bit_depth_luma - 8, r2[o2 + 2] = 248 | i2.bit_depth_chroma - 8, r2[o2 + 3] = 0, o2 += 4);
          }
          return e2.prototype.getData = function() {
            return this.data;
          }, e2;
        }();
        !function(e2) {
          e2[e2.kNull = 0] = "kNull", e2[e2.kAACMain = 1] = "kAACMain", e2[e2.kAAC_LC = 2] = "kAAC_LC", e2[e2.kAAC_SSR = 3] = "kAAC_SSR", e2[e2.kAAC_LTP = 4] = "kAAC_LTP", e2[e2.kAAC_SBR = 5] = "kAAC_SBR", e2[e2.kAAC_Scalable = 6] = "kAAC_Scalable", e2[e2.kLayer1 = 32] = "kLayer1", e2[e2.kLayer2 = 33] = "kLayer2", e2[e2.kLayer3 = 34] = "kLayer3";
        }(B || (B = {})), function(e2) {
          e2[e2.k96000Hz = 0] = "k96000Hz", e2[e2.k88200Hz = 1] = "k88200Hz", e2[e2.k64000Hz = 2] = "k64000Hz", e2[e2.k48000Hz = 3] = "k48000Hz", e2[e2.k44100Hz = 4] = "k44100Hz", e2[e2.k32000Hz = 5] = "k32000Hz", e2[e2.k24000Hz = 6] = "k24000Hz", e2[e2.k22050Hz = 7] = "k22050Hz", e2[e2.k16000Hz = 8] = "k16000Hz", e2[e2.k12000Hz = 9] = "k12000Hz", e2[e2.k11025Hz = 10] = "k11025Hz", e2[e2.k8000Hz = 11] = "k8000Hz", e2[e2.k7350Hz = 12] = "k7350Hz";
        }(I || (I = {}));
        var U, N, G = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], V = (U = function(e2, t2) {
          return (U = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
            e3.__proto__ = t3;
          } || function(e3, t3) {
            for (var i2 in t3)
              t3.hasOwnProperty(i2) && (e3[i2] = t3[i2]);
          })(e2, t2);
        }, function(e2, t2) {
          function i2() {
            this.constructor = e2;
          }
          U(e2, t2), e2.prototype = null === t2 ? Object.create(t2) : (i2.prototype = t2.prototype, new i2());
        }), F = function() {
        }, j = function(e2) {
          function t2() {
            return null !== e2 && e2.apply(this, arguments) || this;
          }
          return V(t2, e2), t2;
        }(F), z = function() {
          function e2(e3) {
            this.TAG = "AACADTSParser", this.data_ = e3, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && r.a.e(this.TAG, "Could not found ADTS syncword until payload end");
          }
          return e2.prototype.findNextSyncwordOffset = function(e3) {
            for (var t2 = e3, i2 = this.data_; ; ) {
              if (t2 + 7 >= i2.byteLength)
                return this.eof_flag_ = true, i2.byteLength;
              if (4095 === (i2[t2 + 0] << 8 | i2[t2 + 1]) >>> 4)
                return t2;
              t2++;
            }
          }, e2.prototype.readNextAACFrame = function() {
            for (var e3 = this.data_, t2 = null; null == t2 && !this.eof_flag_; ) {
              var i2 = this.current_syncword_offset_, n2 = (8 & e3[i2 + 1]) >>> 3, a2 = (6 & e3[i2 + 1]) >>> 1, r2 = 1 & e3[i2 + 1], s2 = (192 & e3[i2 + 2]) >>> 6, o2 = (60 & e3[i2 + 2]) >>> 2, d2 = (1 & e3[i2 + 2]) << 2 | (192 & e3[i2 + 3]) >>> 6, _2 = (3 & e3[i2 + 3]) << 11 | e3[i2 + 4] << 3 | (224 & e3[i2 + 5]) >>> 5;
              e3[i2 + 6];
              if (i2 + _2 > this.data_.byteLength) {
                this.eof_flag_ = true, this.has_last_incomplete_data = true;
                break;
              }
              var h2 = 1 === r2 ? 7 : 9, c2 = _2 - h2;
              i2 += h2;
              var u2 = this.findNextSyncwordOffset(i2 + c2);
              if (this.current_syncword_offset_ = u2, (0 === n2 || 1 === n2) && 0 === a2) {
                var l2 = e3.subarray(i2, i2 + c2);
                (t2 = new F()).audio_object_type = s2 + 1, t2.sampling_freq_index = o2, t2.sampling_frequency = G[o2], t2.channel_config = d2, t2.data = l2;
              }
            }
            return t2;
          }, e2.prototype.hasIncompleteData = function() {
            return this.has_last_incomplete_data;
          }, e2.prototype.getIncompleteData = function() {
            return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null;
          }, e2;
        }(), H = function() {
          function e2(e3) {
            this.TAG = "AACLOASParser", this.data_ = e3, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && r.a.e(this.TAG, "Could not found LOAS syncword until payload end");
          }
          return e2.prototype.findNextSyncwordOffset = function(e3) {
            for (var t2 = e3, i2 = this.data_; ; ) {
              if (t2 + 1 >= i2.byteLength)
                return this.eof_flag_ = true, i2.byteLength;
              if (695 === (i2[t2 + 0] << 3 | i2[t2 + 1] >>> 5))
                return t2;
              t2++;
            }
          }, e2.prototype.getLATMValue = function(e3) {
            for (var t2 = e3.readBits(2), i2 = 0, n2 = 0; n2 <= t2; n2++)
              i2 <<= 8, i2 |= e3.readByte();
            return i2;
          }, e2.prototype.readNextAACFrame = function(e3) {
            for (var t2 = this.data_, i2 = null; null == i2 && !this.eof_flag_; ) {
              var n2 = this.current_syncword_offset_, a2 = (31 & t2[n2 + 1]) << 8 | t2[n2 + 2];
              if (n2 + 3 + a2 >= this.data_.byteLength) {
                this.eof_flag_ = true, this.has_last_incomplete_data = true;
                break;
              }
              var s2 = new f(t2.subarray(n2 + 3, n2 + 3 + a2)), o2 = null;
              if (s2.readBool()) {
                if (null == e3) {
                  r.a.w(this.TAG, "StreamMuxConfig Missing"), this.current_syncword_offset_ = this.findNextSyncwordOffset(n2 + 3 + a2), s2.destroy();
                  continue;
                }
                o2 = e3;
              } else {
                var d2 = s2.readBool();
                if (d2 && s2.readBool()) {
                  r.a.e(this.TAG, "audioMuxVersionA is Not Supported"), s2.destroy();
                  break;
                }
                if (d2 && this.getLATMValue(s2), !s2.readBool()) {
                  r.a.e(this.TAG, "allStreamsSameTimeFraming zero is Not Supported"), s2.destroy();
                  break;
                }
                if (0 !== s2.readBits(6)) {
                  r.a.e(this.TAG, "more than 2 numSubFrames Not Supported"), s2.destroy();
                  break;
                }
                if (0 !== s2.readBits(4)) {
                  r.a.e(this.TAG, "more than 2 numProgram Not Supported"), s2.destroy();
                  break;
                }
                if (0 !== s2.readBits(3)) {
                  r.a.e(this.TAG, "more than 2 numLayer Not Supported"), s2.destroy();
                  break;
                }
                var _2 = d2 ? this.getLATMValue(s2) : 0, h2 = s2.readBits(5);
                _2 -= 5;
                var c2 = s2.readBits(4);
                _2 -= 4;
                var u2 = s2.readBits(4);
                _2 -= 4, s2.readBits(3), (_2 -= 3) > 0 && s2.readBits(_2);
                var l2 = s2.readBits(3);
                if (0 !== l2) {
                  r.a.e(this.TAG, "frameLengthType = " + l2 + ". Only frameLengthType = 0 Supported"), s2.destroy();
                  break;
                }
                s2.readByte();
                var p2 = s2.readBool();
                if (p2)
                  if (d2)
                    this.getLATMValue(s2);
                  else {
                    for (var m2 = 0; ; ) {
                      m2 <<= 8;
                      var g2 = s2.readBool();
                      if (m2 += s2.readByte(), !g2)
                        break;
                    }
                    console.log(m2);
                  }
                s2.readBool() && s2.readByte(), (o2 = new j()).audio_object_type = h2, o2.sampling_freq_index = c2, o2.sampling_frequency = G[o2.sampling_freq_index], o2.channel_config = u2, o2.other_data_present = p2;
              }
              for (var v2 = 0; ; ) {
                var y2 = s2.readByte();
                if (v2 += y2, 255 !== y2)
                  break;
              }
              for (var b2 = new Uint8Array(v2), S2 = 0; S2 < v2; S2++)
                b2[S2] = s2.readByte();
              (i2 = new j()).audio_object_type = o2.audio_object_type, i2.sampling_freq_index = o2.sampling_freq_index, i2.sampling_frequency = G[o2.sampling_freq_index], i2.channel_config = o2.channel_config, i2.other_data_present = o2.other_data_present, i2.data = b2, this.current_syncword_offset_ = this.findNextSyncwordOffset(n2 + 3 + a2);
            }
            return i2;
          }, e2.prototype.hasIncompleteData = function() {
            return this.has_last_incomplete_data;
          }, e2.prototype.getIncompleteData = function() {
            return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null;
          }, e2;
        }(), q = function(e2) {
          var t2 = null, i2 = e2.audio_object_type, n2 = e2.audio_object_type, a2 = e2.sampling_freq_index, r2 = e2.channel_config, s2 = 0, o2 = navigator.userAgent.toLowerCase();
          -1 !== o2.indexOf("firefox") ? a2 >= 6 ? (n2 = 5, t2 = new Array(4), s2 = a2 - 3) : (n2 = 2, t2 = new Array(2), s2 = a2) : -1 !== o2.indexOf("android") ? (n2 = 2, t2 = new Array(2), s2 = a2) : (n2 = 5, s2 = a2, t2 = new Array(4), a2 >= 6 ? s2 = a2 - 3 : 1 === r2 && (n2 = 2, t2 = new Array(2), s2 = a2)), t2[0] = n2 << 3, t2[0] |= (15 & a2) >>> 1, t2[1] = (15 & a2) << 7, t2[1] |= (15 & r2) << 3, 5 === n2 && (t2[1] |= (15 & s2) >>> 1, t2[2] = (1 & s2) << 7, t2[2] |= 8, t2[3] = 0), this.config = t2, this.sampling_rate = G[a2], this.channel_count = r2, this.codec_mimetype = "mp4a.40." + n2, this.original_codec_mimetype = "mp4a.40." + i2;
        }, K = function() {
        }, W = function() {
        };
        !function(e2) {
          e2[e2.kSpliceNull = 0] = "kSpliceNull", e2[e2.kSpliceSchedule = 4] = "kSpliceSchedule", e2[e2.kSpliceInsert = 5] = "kSpliceInsert", e2[e2.kTimeSignal = 6] = "kTimeSignal", e2[e2.kBandwidthReservation = 7] = "kBandwidthReservation", e2[e2.kPrivateCommand = 255] = "kPrivateCommand";
        }(N || (N = {}));
        var X, Y = function(e2) {
          var t2 = e2.readBool();
          return t2 ? (e2.readBits(6), { time_specified_flag: t2, pts_time: 4 * e2.readBits(31) + e2.readBits(2) }) : (e2.readBits(7), { time_specified_flag: t2 });
        }, J = function(e2) {
          var t2 = e2.readBool();
          return e2.readBits(6), { auto_return: t2, duration: 4 * e2.readBits(31) + e2.readBits(2) };
        }, Z = function(e2, t2) {
          var i2 = t2.readBits(8);
          return e2 ? { component_tag: i2 } : { component_tag: i2, splice_time: Y(t2) };
        }, Q = function(e2) {
          return { component_tag: e2.readBits(8), utc_splice_time: e2.readBits(32) };
        }, $ = function(e2) {
          var t2 = e2.readBits(32), i2 = e2.readBool();
          e2.readBits(7);
          var n2 = { splice_event_id: t2, splice_event_cancel_indicator: i2 };
          if (i2)
            return n2;
          if (n2.out_of_network_indicator = e2.readBool(), n2.program_splice_flag = e2.readBool(), n2.duration_flag = e2.readBool(), e2.readBits(5), n2.program_splice_flag)
            n2.utc_splice_time = e2.readBits(32);
          else {
            n2.component_count = e2.readBits(8), n2.components = [];
            for (var a2 = 0; a2 < n2.component_count; a2++)
              n2.components.push(Q(e2));
          }
          return n2.duration_flag && (n2.break_duration = J(e2)), n2.unique_program_id = e2.readBits(16), n2.avail_num = e2.readBits(8), n2.avails_expected = e2.readBits(8), n2;
        }, ee = function(e2, t2, i2, n2) {
          return { descriptor_tag: e2, descriptor_length: t2, identifier: i2, provider_avail_id: n2.readBits(32) };
        }, te = function(e2, t2, i2, n2) {
          var a2 = n2.readBits(8), r2 = n2.readBits(3);
          n2.readBits(5);
          for (var s2 = "", o2 = 0; o2 < r2; o2++)
            s2 += String.fromCharCode(n2.readBits(8));
          return { descriptor_tag: e2, descriptor_length: t2, identifier: i2, preroll: a2, dtmf_count: r2, DTMF_char: s2 };
        }, ie = function(e2) {
          var t2 = e2.readBits(8);
          return e2.readBits(7), { component_tag: t2, pts_offset: 4 * e2.readBits(31) + e2.readBits(2) };
        }, ne = function(e2, t2, i2, n2) {
          var a2 = n2.readBits(32), r2 = n2.readBool();
          n2.readBits(7);
          var s2 = { descriptor_tag: e2, descriptor_length: t2, identifier: i2, segmentation_event_id: a2, segmentation_event_cancel_indicator: r2 };
          if (r2)
            return s2;
          if (s2.program_segmentation_flag = n2.readBool(), s2.segmentation_duration_flag = n2.readBool(), s2.delivery_not_restricted_flag = n2.readBool(), s2.delivery_not_restricted_flag ? n2.readBits(5) : (s2.web_delivery_allowed_flag = n2.readBool(), s2.no_regional_blackout_flag = n2.readBool(), s2.archive_allowed_flag = n2.readBool(), s2.device_restrictions = n2.readBits(2)), !s2.program_segmentation_flag) {
            s2.component_count = n2.readBits(8), s2.components = [];
            for (var o2 = 0; o2 < s2.component_count; o2++)
              s2.components.push(ie(n2));
          }
          s2.segmentation_duration_flag && (s2.segmentation_duration = n2.readBits(40)), s2.segmentation_upid_type = n2.readBits(8), s2.segmentation_upid_length = n2.readBits(8);
          var d2 = new Uint8Array(s2.segmentation_upid_length);
          for (o2 = 0; o2 < s2.segmentation_upid_length; o2++)
            d2[o2] = n2.readBits(8);
          return s2.segmentation_upid = d2.buffer, s2.segmentation_type_id = n2.readBits(8), s2.segment_num = n2.readBits(8), s2.segments_expected = n2.readBits(8), 52 !== s2.segmentation_type_id && 54 !== s2.segmentation_type_id && 56 !== s2.segmentation_type_id && 58 !== s2.segmentation_type_id || (s2.sub_segment_num = n2.readBits(8), s2.sub_segments_expected = n2.readBits(8)), s2;
        }, ae = function(e2, t2, i2, n2) {
          return { descriptor_tag: e2, descriptor_length: t2, identifier: i2, TAI_seconds: n2.readBits(48), TAI_ns: n2.readBits(32), UTC_offset: n2.readBits(16) };
        }, re = function(e2) {
          return { component_tag: e2.readBits(8), ISO_code: String.fromCharCode(e2.readBits(8), e2.readBits(8), e2.readBits(8)), Bit_Stream_Mode: e2.readBits(3), Num_Channels: e2.readBits(4), Full_Srvc_Audio: e2.readBool() };
        }, se = function(e2, t2, i2, n2) {
          for (var a2 = n2.readBits(4), r2 = [], s2 = 0; s2 < a2; s2++)
            r2.push(re(n2));
          return { descriptor_tag: e2, descriptor_length: t2, identifier: i2, audio_count: a2, components: r2 };
        }, oe = function(e2) {
          var t2 = new f(e2), i2 = t2.readBits(8), n2 = t2.readBool(), a2 = t2.readBool();
          t2.readBits(2);
          var r2 = t2.readBits(12), s2 = t2.readBits(8), o2 = t2.readBool(), d2 = t2.readBits(6), _2 = 4 * t2.readBits(31) + t2.readBits(2), h2 = t2.readBits(8), c2 = t2.readBits(12), u2 = t2.readBits(12), l2 = t2.readBits(8), p2 = null;
          l2 === N.kSpliceNull ? p2 = {} : l2 === N.kSpliceSchedule ? p2 = function(e3) {
            for (var t3 = e3.readBits(8), i3 = [], n3 = 0; n3 < t3; n3++)
              i3.push($(e3));
            return { splice_count: t3, events: i3 };
          }(t2) : l2 === N.kSpliceInsert ? p2 = function(e3) {
            var t3 = e3.readBits(32), i3 = e3.readBool();
            e3.readBits(7);
            var n3 = { splice_event_id: t3, splice_event_cancel_indicator: i3 };
            if (i3)
              return n3;
            if (n3.out_of_network_indicator = e3.readBool(), n3.program_splice_flag = e3.readBool(), n3.duration_flag = e3.readBool(), n3.splice_immediate_flag = e3.readBool(), e3.readBits(4), n3.program_splice_flag && !n3.splice_immediate_flag && (n3.splice_time = Y(e3)), !n3.program_splice_flag) {
              n3.component_count = e3.readBits(8), n3.components = [];
              for (var a3 = 0; a3 < n3.component_count; a3++)
                n3.components.push(Z(n3.splice_immediate_flag, e3));
            }
            return n3.duration_flag && (n3.break_duration = J(e3)), n3.unique_program_id = e3.readBits(16), n3.avail_num = e3.readBits(8), n3.avails_expected = e3.readBits(8), n3;
          }(t2) : l2 === N.kTimeSignal ? p2 = function(e3) {
            return { splice_time: Y(e3) };
          }(t2) : l2 === N.kBandwidthReservation ? p2 = {} : l2 === N.kPrivateCommand ? p2 = function(e3, t3) {
            for (var i3 = String.fromCharCode(t3.readBits(8), t3.readBits(8), t3.readBits(8), t3.readBits(8)), n3 = new Uint8Array(e3 - 4), a3 = 0; a3 < e3 - 4; a3++)
              n3[a3] = t3.readBits(8);
            return { identifier: i3, private_data: n3.buffer };
          }(u2, t2) : t2.readBits(8 * u2);
          for (var m2 = [], g2 = t2.readBits(16), v2 = 0; v2 < g2; ) {
            var y2 = t2.readBits(8), b2 = t2.readBits(8), S2 = String.fromCharCode(t2.readBits(8), t2.readBits(8), t2.readBits(8), t2.readBits(8));
            0 === y2 ? m2.push(ee(y2, b2, S2, t2)) : 1 === y2 ? m2.push(te(y2, b2, S2, t2)) : 2 === y2 ? m2.push(ne(y2, b2, S2, t2)) : 3 === y2 ? m2.push(ae(y2, b2, S2, t2)) : 4 === y2 ? m2.push(se(y2, b2, S2, t2)) : t2.readBits(8 * (b2 - 4)), v2 += 2 + b2;
          }
          var E2 = { table_id: i2, section_syntax_indicator: n2, private_indicator: a2, section_length: r2, protocol_version: s2, encrypted_packet: o2, encryption_algorithm: d2, pts_adjustment: _2, cw_index: h2, tier: c2, splice_command_length: u2, splice_command_type: l2, splice_command: p2, descriptor_loop_length: g2, splice_descriptors: m2, E_CRC32: o2 ? t2.readBits(32) : void 0, CRC32: t2.readBits(32) };
          if (l2 === N.kSpliceInsert) {
            var A2 = p2;
            if (A2.splice_event_cancel_indicator)
              return { splice_command_type: l2, detail: E2, data: e2 };
            if (A2.program_splice_flag && !A2.splice_immediate_flag) {
              var R2 = A2.duration_flag ? A2.break_duration.auto_return : void 0, T2 = A2.duration_flag ? A2.break_duration.duration / 90 : void 0;
              return A2.splice_time.time_specified_flag ? { splice_command_type: l2, pts: (_2 + A2.splice_time.pts_time) % Math.pow(2, 33), auto_return: R2, duraiton: T2, detail: E2, data: e2 } : { splice_command_type: l2, auto_return: R2, duraiton: T2, detail: E2, data: e2 };
            }
            return { splice_command_type: l2, auto_return: R2 = A2.duration_flag ? A2.break_duration.auto_return : void 0, duraiton: T2 = A2.duration_flag ? A2.break_duration.duration / 90 : void 0, detail: E2, data: e2 };
          }
          if (l2 === N.kTimeSignal) {
            var L2 = p2;
            return L2.splice_time.time_specified_flag ? { splice_command_type: l2, pts: (_2 + L2.splice_time.pts_time) % Math.pow(2, 33), detail: E2, data: e2 } : { splice_command_type: l2, detail: E2, data: e2 };
          }
          return { splice_command_type: l2, detail: E2, data: e2 };
        };
        !function(e2) {
          e2[e2.kSliceIDR_W_RADL = 19] = "kSliceIDR_W_RADL", e2[e2.kSliceIDR_N_LP = 20] = "kSliceIDR_N_LP", e2[e2.kSliceCRA_NUT = 21] = "kSliceCRA_NUT", e2[e2.kSliceVPS = 32] = "kSliceVPS", e2[e2.kSliceSPS = 33] = "kSliceSPS", e2[e2.kSlicePPS = 34] = "kSlicePPS", e2[e2.kSliceAUD = 35] = "kSliceAUD";
        }(X || (X = {}));
        var de = function() {
        }, _e = function(e2) {
          var t2 = e2.data.byteLength;
          this.type = e2.type, this.data = new Uint8Array(4 + t2), new DataView(this.data.buffer).setUint32(0, t2), this.data.set(e2.data, 4);
        }, he = function() {
          function e2(e3) {
            this.TAG = "H265AnnexBParser", this.current_startcode_offset_ = 0, this.eof_flag_ = false, this.data_ = e3, this.current_startcode_offset_ = this.findNextStartCodeOffset(0), this.eof_flag_ && r.a.e(this.TAG, "Could not find H265 startcode until payload end!");
          }
          return e2.prototype.findNextStartCodeOffset = function(e3) {
            for (var t2 = e3, i2 = this.data_; ; ) {
              if (t2 + 3 >= i2.byteLength)
                return this.eof_flag_ = true, i2.byteLength;
              var n2 = i2[t2 + 0] << 24 | i2[t2 + 1] << 16 | i2[t2 + 2] << 8 | i2[t2 + 3], a2 = i2[t2 + 0] << 16 | i2[t2 + 1] << 8 | i2[t2 + 2];
              if (1 === n2 || 1 === a2)
                return t2;
              t2++;
            }
          }, e2.prototype.readNextNaluPayload = function() {
            for (var e3 = this.data_, t2 = null; null == t2 && !this.eof_flag_; ) {
              var i2 = this.current_startcode_offset_, n2 = e3[i2 += 1 === (e3[i2] << 24 | e3[i2 + 1] << 16 | e3[i2 + 2] << 8 | e3[i2 + 3]) ? 4 : 3] >> 1 & 63, a2 = (128 & e3[i2]) >>> 7, r2 = this.findNextStartCodeOffset(i2);
              if (this.current_startcode_offset_ = r2, 0 === a2) {
                var s2 = e3.subarray(i2, r2);
                (t2 = new de()).type = n2, t2.data = s2;
              }
            }
            return t2;
          }, e2;
        }(), ce = function() {
          function e2(e3, t2, i2, n2) {
            var a2 = 23 + (5 + e3.byteLength) + (5 + t2.byteLength) + (5 + i2.byteLength), r2 = this.data = new Uint8Array(a2);
            r2[0] = 1, r2[1] = (3 & n2.general_profile_space) << 6 | (n2.general_tier_flag ? 1 : 0) << 5 | 31 & n2.general_profile_idc, r2[2] = n2.general_profile_compatibility_flags_1, r2[3] = n2.general_profile_compatibility_flags_2, r2[4] = n2.general_profile_compatibility_flags_3, r2[5] = n2.general_profile_compatibility_flags_4, r2[6] = n2.general_constraint_indicator_flags_1, r2[7] = n2.general_constraint_indicator_flags_2, r2[8] = n2.general_constraint_indicator_flags_3, r2[9] = n2.general_constraint_indicator_flags_4, r2[10] = n2.general_constraint_indicator_flags_5, r2[11] = n2.general_constraint_indicator_flags_6, r2[12] = n2.general_level_idc, r2[13] = 240 | (3840 & n2.min_spatial_segmentation_idc) >> 8, r2[14] = 255 & n2.min_spatial_segmentation_idc, r2[15] = 252 | 3 & n2.parallelismType, r2[16] = 252 | 3 & n2.chroma_format_idc, r2[17] = 248 | 7 & n2.bit_depth_luma_minus8, r2[18] = 248 | 7 & n2.bit_depth_chroma_minus8, r2[19] = 0, r2[20] = 0, r2[21] = (3 & n2.constant_frame_rate) << 6 | (7 & n2.num_temporal_layers) << 3 | (n2.temporal_id_nested ? 1 : 0) << 2 | 3, r2[22] = 3, r2[23] = 128 | X.kSliceVPS, r2[24] = 0, r2[25] = 1, r2[26] = (65280 & e3.byteLength) >> 8, r2[27] = (255 & e3.byteLength) >> 0, r2.set(e3, 28), r2[23 + (5 + e3.byteLength) + 0] = 128 | X.kSliceSPS, r2[23 + (5 + e3.byteLength) + 1] = 0, r2[23 + (5 + e3.byteLength) + 2] = 1, r2[23 + (5 + e3.byteLength) + 3] = (65280 & t2.byteLength) >> 8, r2[23 + (5 + e3.byteLength) + 4] = (255 & t2.byteLength) >> 0, r2.set(t2, 23 + (5 + e3.byteLength) + 5), r2[23 + (5 + e3.byteLength + 5 + t2.byteLength) + 0] = 128 | X.kSlicePPS, r2[23 + (5 + e3.byteLength + 5 + t2.byteLength) + 1] = 0, r2[23 + (5 + e3.byteLength + 5 + t2.byteLength) + 2] = 1, r2[23 + (5 + e3.byteLength + 5 + t2.byteLength) + 3] = (65280 & i2.byteLength) >> 8, r2[23 + (5 + e3.byteLength + 5 + t2.byteLength) + 4] = (255 & i2.byteLength) >> 0, r2.set(i2, 23 + (5 + e3.byteLength + 5 + t2.byteLength) + 5);
          }
          return e2.prototype.getData = function() {
            return this.data;
          }, e2;
        }(), ue = function() {
        }, le = function() {
        }, fe = function() {
        }, pe = [[64, 64, 80, 80, 96, 96, 112, 112, 128, 128, 160, 160, 192, 192, 224, 224, 256, 256, 320, 320, 384, 384, 448, 448, 512, 512, 640, 640, 768, 768, 896, 896, 1024, 1024, 1152, 1152, 1280, 1280], [69, 70, 87, 88, 104, 105, 121, 122, 139, 140, 174, 175, 208, 209, 243, 244, 278, 279, 348, 349, 417, 418, 487, 488, 557, 558, 696, 697, 835, 836, 975, 976, 1114, 1115, 1253, 1254, 1393, 1394], [96, 96, 120, 120, 144, 144, 168, 168, 192, 192, 240, 240, 288, 288, 336, 336, 384, 384, 480, 480, 576, 576, 672, 672, 768, 768, 960, 960, 1152, 1152, 1344, 1344, 1536, 1536, 1728, 1728, 1920, 1920]], me = function() {
          function e2(e3) {
            this.TAG = "AC3Parser", this.data_ = e3, this.current_syncword_offset_ = this.findNextSyncwordOffset(0), this.eof_flag_ && r.a.e(this.TAG, "Could not found AC3 syncword until payload end");
          }
          return e2.prototype.findNextSyncwordOffset = function(e3) {
            for (var t2 = e3, i2 = this.data_; ; ) {
              if (t2 + 7 >= i2.byteLength)
                return this.eof_flag_ = true, i2.byteLength;
              if (2935 === (i2[t2 + 0] << 8 | i2[t2 + 1] << 0))
                return t2;
              t2++;
            }
          }, e2.prototype.readNextAC3Frame = function() {
            for (var e3 = this.data_, t2 = null; null == t2 && !this.eof_flag_; ) {
              var i2 = this.current_syncword_offset_, n2 = e3[i2 + 4] >> 6, a2 = [48e3, 44200, 33e3][n2], r2 = 63 & e3[i2 + 4], s2 = 2 * pe[n2][r2];
              if (i2 + s2 > this.data_.byteLength) {
                this.eof_flag_ = true, this.has_last_incomplete_data = true;
                break;
              }
              var o2 = this.findNextSyncwordOffset(i2 + s2);
              this.current_syncword_offset_ = o2;
              var d2 = e3[i2 + 5] >> 3, _2 = 7 & e3[i2 + 5], h2 = e3[i2 + 6] >> 5, c2 = 0;
              0 != (1 & h2) && 1 !== h2 && (c2 += 2), 0 != (4 & h2) && (c2 += 2), 2 === h2 && (c2 += 2);
              var u2 = (e3[i2 + 6] << 8 | e3[i2 + 7] << 0) >> 12 - c2 & 1, l2 = [2, 1, 2, 3, 3, 4, 4, 5][h2] + u2;
              (t2 = new fe()).sampling_frequency = a2, t2.channel_count = l2, t2.channel_mode = h2, t2.bit_stream_identification = d2, t2.low_frequency_effects_channel_on = u2, t2.bit_stream_mode = _2, t2.frame_size_code = r2, t2.data = e3.subarray(i2, i2 + s2);
            }
            return t2;
          }, e2.prototype.hasIncompleteData = function() {
            return this.has_last_incomplete_data;
          }, e2.prototype.getIncompleteData = function() {
            return this.has_last_incomplete_data ? this.data_.subarray(this.current_syncword_offset_) : null;
          }, e2;
        }(), ge = function(e2) {
          var t2;
          t2 = [e2.sampling_rate_code << 6 | e2.bit_stream_identification << 1 | e2.bit_stream_mode >> 2, (3 & e2.bit_stream_mode) << 6 | e2.channel_mode << 3 | e2.low_frequency_effects_channel_on << 2 | e2.frame_size_code >> 4, e2.frame_size_code << 4 & 224], this.config = t2, this.sampling_rate = e2.sampling_frequency, this.bit_stream_identification = e2.bit_stream_identification, this.bit_stream_mode = e2.bit_stream_mode, this.low_frequency_effects_channel_on = e2.low_frequency_effects_channel_on, this.channel_count = e2.channel_count, this.channel_mode = e2.channel_mode, this.codec_mimetype = "ac-3", this.original_codec_mimetype = "ac-3";
        }, ve = function() {
          var e2 = function(t2, i2) {
            return (e2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var i3 in t3)
                t3.hasOwnProperty(i3) && (e3[i3] = t3[i3]);
            })(t2, i2);
          };
          return function(t2, i2) {
            function n2() {
              this.constructor = t2;
            }
            e2(t2, i2), t2.prototype = null === i2 ? Object.create(i2) : (n2.prototype = i2.prototype, new n2());
          };
        }(), ye = function() {
          return (ye = Object.assign || function(e2) {
            for (var t2, i2 = 1, n2 = arguments.length; i2 < n2; i2++)
              for (var a2 in t2 = arguments[i2])
                Object.prototype.hasOwnProperty.call(t2, a2) && (e2[a2] = t2[a2]);
            return e2;
          }).apply(this, arguments);
        }, be = function(e2) {
          function t2(t3, i2) {
            var n2 = e2.call(this) || this;
            return n2.TAG = "TSDemuxer", n2.first_parse_ = true, n2.media_info_ = new o.a(), n2.timescale_ = 90, n2.duration_ = 0, n2.current_pmt_pid_ = -1, n2.program_pmt_map_ = {}, n2.pes_slice_queues_ = {}, n2.section_slice_queues_ = {}, n2.video_metadata_ = { vps: void 0, sps: void 0, pps: void 0, details: void 0 }, n2.audio_metadata_ = { codec: void 0, audio_object_type: void 0, sampling_freq_index: void 0, sampling_frequency: void 0, channel_config: void 0 }, n2.aac_last_sample_pts_ = void 0, n2.aac_last_incomplete_data_ = null, n2.has_video_ = false, n2.has_audio_ = false, n2.video_init_segment_dispatched_ = false, n2.audio_init_segment_dispatched_ = false, n2.video_metadata_changed_ = false, n2.audio_metadata_changed_ = false, n2.loas_previous_frame = null, n2.video_track_ = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 }, n2.audio_track_ = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 }, n2.ts_packet_size_ = t3.ts_packet_size, n2.sync_offset_ = t3.sync_offset, n2.config_ = i2, n2;
          }
          return ve(t2, e2), t2.prototype.destroy = function() {
            this.media_info_ = null, this.pes_slice_queues_ = null, this.section_slice_queues_ = null, this.video_metadata_ = null, this.audio_metadata_ = null, this.aac_last_incomplete_data_ = null, this.video_track_ = null, this.audio_track_ = null, e2.prototype.destroy.call(this);
          }, t2.probe = function(e3) {
            var t3 = new Uint8Array(e3), i2 = -1, n2 = 188;
            if (t3.byteLength <= 3 * n2)
              return { needMoreData: true };
            for (; -1 === i2; ) {
              for (var a2 = Math.min(1e3, t3.byteLength - 3 * n2), s2 = 0; s2 < a2; ) {
                if (71 === t3[s2] && 71 === t3[s2 + n2] && 71 === t3[s2 + 2 * n2]) {
                  i2 = s2;
                  break;
                }
                s2++;
              }
              if (-1 === i2)
                if (188 === n2)
                  n2 = 192;
                else {
                  if (192 !== n2)
                    break;
                  n2 = 204;
                }
            }
            return -1 === i2 ? { match: false } : (192 === n2 && i2 >= 4 ? (r.a.v("TSDemuxer", "ts_packet_size = 192, m2ts mode"), i2 -= 4) : 204 === n2 && r.a.v("TSDemuxer", "ts_packet_size = 204, RS encoded MPEG2-TS stream"), { match: true, consumed: 0, ts_packet_size: n2, sync_offset: i2 });
          }, t2.prototype.bindDataSource = function(e3) {
            return e3.onDataArrival = this.parseChunks.bind(this), this;
          }, t2.prototype.resetMediaInfo = function() {
            this.media_info_ = new o.a();
          }, t2.prototype.parseChunks = function(e3, t3) {
            if (!(this.onError && this.onMediaInfo && this.onTrackMetadata && this.onDataAvailable))
              throw new c.a("onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
            var i2 = 0;
            for (this.first_parse_ && (this.first_parse_ = false, i2 = this.sync_offset_); i2 + this.ts_packet_size_ <= e3.byteLength; ) {
              var n2 = t3 + i2;
              192 === this.ts_packet_size_ && (i2 += 4);
              var a2 = new Uint8Array(e3, i2, 188), s2 = a2[0];
              if (71 !== s2) {
                r.a.e(this.TAG, "sync_byte = " + s2 + ", not 0x47");
                break;
              }
              var o2 = (64 & a2[1]) >>> 6, d2 = (a2[1], (31 & a2[1]) << 8 | a2[2]), _2 = (48 & a2[3]) >>> 4, h2 = 15 & a2[3], u2 = {}, l2 = 4;
              if (2 == _2 || 3 == _2) {
                var f2 = a2[4];
                if (5 + f2 === 188) {
                  i2 += 188, 204 === this.ts_packet_size_ && (i2 += 16);
                  continue;
                }
                f2 > 0 && (u2 = this.parseAdaptationField(e3, i2 + 4, 1 + f2)), l2 = 5 + f2;
              }
              if (1 == _2 || 3 == _2) {
                if (0 === d2 || d2 === this.current_pmt_pid_ || null != this.pmt_ && this.pmt_.pid_stream_type[d2] === E.kSCTE35) {
                  var p2 = 188 - l2;
                  this.handleSectionSlice(e3, i2 + l2, p2, { pid: d2, file_position: n2, payload_unit_start_indicator: o2, continuity_conunter: h2, random_access_indicator: u2.random_access_indicator });
                } else if (null != this.pmt_ && null != this.pmt_.pid_stream_type[d2]) {
                  p2 = 188 - l2;
                  var m2 = this.pmt_.pid_stream_type[d2];
                  d2 !== this.pmt_.common_pids.h264 && d2 !== this.pmt_.common_pids.h265 && d2 !== this.pmt_.common_pids.adts_aac && d2 !== this.pmt_.common_pids.loas_aac && d2 !== this.pmt_.common_pids.ac3 && d2 !== this.pmt_.common_pids.opus && d2 !== this.pmt_.common_pids.mp3 && true !== this.pmt_.pes_private_data_pids[d2] && true !== this.pmt_.timed_id3_pids[d2] || this.handlePESSlice(e3, i2 + l2, p2, { pid: d2, stream_type: m2, file_position: n2, payload_unit_start_indicator: o2, continuity_conunter: h2, random_access_indicator: u2.random_access_indicator });
                }
              }
              i2 += 188, 204 === this.ts_packet_size_ && (i2 += 16);
            }
            return this.dispatchAudioVideoMediaSegment(), i2;
          }, t2.prototype.parseAdaptationField = function(e3, t3, i2) {
            var n2 = new Uint8Array(e3, t3, i2), a2 = n2[0];
            return a2 > 0 ? a2 > 183 ? (r.a.w(this.TAG, "Illegal adaptation_field_length: " + a2), {}) : { discontinuity_indicator: (128 & n2[1]) >>> 7, random_access_indicator: (64 & n2[1]) >>> 6, elementary_stream_priority_indicator: (32 & n2[1]) >>> 5 } : {};
          }, t2.prototype.handleSectionSlice = function(e3, t3, i2, n2) {
            var a2 = new Uint8Array(e3, t3, i2), r2 = this.section_slice_queues_[n2.pid];
            if (n2.payload_unit_start_indicator) {
              var s2 = a2[0];
              if (null != r2 && 0 !== r2.total_length) {
                var o2 = new Uint8Array(e3, t3 + 1, Math.min(i2, s2));
                r2.slices.push(o2), r2.total_length += o2.byteLength, r2.total_length === r2.expected_length ? this.emitSectionSlices(r2, n2) : this.clearSlices(r2, n2);
              }
              for (var d2 = 1 + s2; d2 < a2.byteLength; ) {
                if (255 === a2[d2 + 0])
                  break;
                var _2 = (15 & a2[d2 + 1]) << 8 | a2[d2 + 2];
                this.section_slice_queues_[n2.pid] = new C(), (r2 = this.section_slice_queues_[n2.pid]).expected_length = _2 + 3, r2.file_position = n2.file_position, r2.random_access_indicator = n2.random_access_indicator;
                o2 = new Uint8Array(e3, t3 + d2, Math.min(i2 - d2, r2.expected_length - r2.total_length));
                r2.slices.push(o2), r2.total_length += o2.byteLength, r2.total_length === r2.expected_length ? this.emitSectionSlices(r2, n2) : r2.total_length >= r2.expected_length && this.clearSlices(r2, n2), d2 += o2.byteLength;
              }
            } else if (null != r2 && 0 !== r2.total_length) {
              o2 = new Uint8Array(e3, t3, Math.min(i2, r2.expected_length - r2.total_length));
              r2.slices.push(o2), r2.total_length += o2.byteLength, r2.total_length === r2.expected_length ? this.emitSectionSlices(r2, n2) : r2.total_length >= r2.expected_length && this.clearSlices(r2, n2);
            }
          }, t2.prototype.handlePESSlice = function(e3, t3, i2, n2) {
            var a2 = new Uint8Array(e3, t3, i2), s2 = a2[0] << 16 | a2[1] << 8 | a2[2], o2 = (a2[3], a2[4] << 8 | a2[5]);
            if (n2.payload_unit_start_indicator) {
              if (1 !== s2)
                return void r.a.e(this.TAG, "handlePESSlice: packet_start_code_prefix should be 1 but with value " + s2);
              var d2 = this.pes_slice_queues_[n2.pid];
              d2 && (0 === d2.expected_length || d2.expected_length === d2.total_length ? this.emitPESSlices(d2, n2) : this.clearSlices(d2, n2)), this.pes_slice_queues_[n2.pid] = new C(), this.pes_slice_queues_[n2.pid].file_position = n2.file_position, this.pes_slice_queues_[n2.pid].random_access_indicator = n2.random_access_indicator;
            }
            if (null != this.pes_slice_queues_[n2.pid]) {
              var _2 = this.pes_slice_queues_[n2.pid];
              _2.slices.push(a2), n2.payload_unit_start_indicator && (_2.expected_length = 0 === o2 ? 0 : o2 + 6), _2.total_length += a2.byteLength, _2.expected_length > 0 && _2.expected_length === _2.total_length ? this.emitPESSlices(_2, n2) : _2.expected_length > 0 && _2.expected_length < _2.total_length && this.clearSlices(_2, n2);
            }
          }, t2.prototype.emitSectionSlices = function(e3, t3) {
            for (var i2 = new Uint8Array(e3.total_length), n2 = 0, a2 = 0; n2 < e3.slices.length; n2++) {
              var r2 = e3.slices[n2];
              i2.set(r2, a2), a2 += r2.byteLength;
            }
            e3.slices = [], e3.expected_length = -1, e3.total_length = 0;
            var s2 = new D();
            s2.pid = t3.pid, s2.data = i2, s2.file_position = e3.file_position, s2.random_access_indicator = e3.random_access_indicator, this.parseSection(s2);
          }, t2.prototype.emitPESSlices = function(e3, t3) {
            for (var i2 = new Uint8Array(e3.total_length), n2 = 0, a2 = 0; n2 < e3.slices.length; n2++) {
              var r2 = e3.slices[n2];
              i2.set(r2, a2), a2 += r2.byteLength;
            }
            e3.slices = [], e3.expected_length = -1, e3.total_length = 0;
            var s2 = new k();
            s2.pid = t3.pid, s2.data = i2, s2.stream_type = t3.stream_type, s2.file_position = e3.file_position, s2.random_access_indicator = e3.random_access_indicator, this.parsePES(s2);
          }, t2.prototype.clearSlices = function(e3, t3) {
            e3.slices = [], e3.expected_length = -1, e3.total_length = 0;
          }, t2.prototype.parseSection = function(e3) {
            var t3 = e3.data, i2 = e3.pid;
            0 === i2 ? this.parsePAT(t3) : i2 === this.current_pmt_pid_ ? this.parsePMT(t3) : null != this.pmt_ && this.pmt_.scte_35_pids[i2] && this.parseSCTE35(t3);
          }, t2.prototype.parsePES = function(e3) {
            var t3 = e3.data, i2 = t3[0] << 16 | t3[1] << 8 | t3[2], n2 = t3[3], a2 = t3[4] << 8 | t3[5];
            if (1 === i2) {
              if (188 !== n2 && 190 !== n2 && 191 !== n2 && 240 !== n2 && 241 !== n2 && 255 !== n2 && 242 !== n2 && 248 !== n2) {
                t3[6];
                var s2 = (192 & t3[7]) >>> 6, o2 = t3[8], d2 = void 0, _2 = void 0;
                2 !== s2 && 3 !== s2 || (d2 = 536870912 * (14 & t3[9]) + 4194304 * (255 & t3[10]) + 16384 * (254 & t3[11]) + 128 * (255 & t3[12]) + (254 & t3[13]) / 2, _2 = 3 === s2 ? 536870912 * (14 & t3[14]) + 4194304 * (255 & t3[15]) + 16384 * (254 & t3[16]) + 128 * (255 & t3[17]) + (254 & t3[18]) / 2 : d2);
                var h2 = 9 + o2, c2 = void 0;
                if (0 !== a2) {
                  if (a2 < 3 + o2)
                    return void r.a.v(this.TAG, "Malformed PES: PES_packet_length < 3 + PES_header_data_length");
                  c2 = a2 - 3 - o2;
                } else
                  c2 = t3.byteLength - h2;
                var u2 = t3.subarray(h2, h2 + c2);
                switch (e3.stream_type) {
                  case E.kMPEG1Audio:
                  case E.kMPEG2Audio:
                    this.parseMP3Payload(u2, d2);
                    break;
                  case E.kPESPrivateData:
                    this.pmt_.common_pids.opus === e3.pid ? this.parseOpusPayload(u2, d2) : this.pmt_.common_pids.ac3 === e3.pid ? this.parseAC3Payload(u2, d2) : this.pmt_.smpte2038_pids[e3.pid] ? this.parseSMPTE2038MetadataPayload(u2, d2, _2, e3.pid, n2) : this.parsePESPrivateDataPayload(u2, d2, _2, e3.pid, n2);
                    break;
                  case E.kADTSAAC:
                    this.parseADTSAACPayload(u2, d2);
                    break;
                  case E.kLOASAAC:
                    this.parseLOASAACPayload(u2, d2);
                    break;
                  case E.kAC3:
                    this.parseAC3Payload(u2, d2);
                    break;
                  case E.kID3:
                    this.parseTimedID3MetadataPayload(u2, d2, _2, e3.pid, n2);
                    break;
                  case E.kH264:
                    this.parseH264Payload(u2, d2, _2, e3.file_position, e3.random_access_indicator);
                    break;
                  case E.kH265:
                    this.parseH265Payload(u2, d2, _2, e3.file_position, e3.random_access_indicator);
                }
              } else if ((188 === n2 || 191 === n2 || 240 === n2 || 241 === n2 || 255 === n2 || 242 === n2 || 248 === n2) && e3.stream_type === E.kPESPrivateData) {
                h2 = 6, c2 = void 0;
                c2 = 0 !== a2 ? a2 : t3.byteLength - h2;
                u2 = t3.subarray(h2, h2 + c2);
                this.parsePESPrivateDataPayload(u2, void 0, void 0, e3.pid, n2);
              }
            } else
              r.a.e(this.TAG, "parsePES: packet_start_code_prefix should be 1 but with value " + i2);
          }, t2.prototype.parsePAT = function(e3) {
            var t3 = e3[0];
            if (0 === t3) {
              var i2 = (15 & e3[1]) << 8 | e3[2], n2 = (e3[3], e3[4], (62 & e3[5]) >>> 1), a2 = 1 & e3[5], s2 = e3[6], o2 = (e3[7], null);
              if (1 === a2 && 0 === s2)
                (o2 = new T()).version_number = n2;
              else if (null == (o2 = this.pat_))
                return;
              for (var d2 = i2 - 5 - 4, _2 = -1, h2 = -1, c2 = 8; c2 < 8 + d2; c2 += 4) {
                var u2 = e3[c2] << 8 | e3[c2 + 1], l2 = (31 & e3[c2 + 2]) << 8 | e3[c2 + 3];
                0 === u2 ? o2.network_pid = l2 : (o2.program_pmt_pid[u2] = l2, -1 === _2 && (_2 = u2), -1 === h2 && (h2 = l2));
              }
              1 === a2 && 0 === s2 && (null == this.pat_ && r.a.v(this.TAG, "Parsed first PAT: " + JSON.stringify(o2)), this.pat_ = o2, this.current_program_ = _2, this.current_pmt_pid_ = h2);
            } else
              r.a.e(this.TAG, "parsePAT: table_id " + t3 + " is not corresponded to PAT!");
          }, t2.prototype.parsePMT = function(e3) {
            var t3 = e3[0];
            if (2 === t3) {
              var i2 = (15 & e3[1]) << 8 | e3[2], n2 = e3[3] << 8 | e3[4], a2 = (62 & e3[5]) >>> 1, s2 = 1 & e3[5], o2 = e3[6], d2 = (e3[7], null);
              if (1 === s2 && 0 === o2)
                (d2 = new w()).program_number = n2, d2.version_number = a2, this.program_pmt_map_[n2] = d2;
              else if (null == (d2 = this.program_pmt_map_[n2]))
                return;
              e3[8], e3[9];
              for (var _2 = (15 & e3[10]) << 8 | e3[11], h2 = 12 + _2, c2 = i2 - 9 - _2 - 4, u2 = h2; u2 < h2 + c2; ) {
                var l2 = e3[u2], f2 = (31 & e3[u2 + 1]) << 8 | e3[u2 + 2], p2 = (15 & e3[u2 + 3]) << 8 | e3[u2 + 4];
                d2.pid_stream_type[f2] = l2;
                var m2 = d2.common_pids.h264 || d2.common_pids.h265, g2 = d2.common_pids.adts_aac || d2.common_pids.loas_aac || d2.common_pids.ac3 || d2.common_pids.opus || d2.common_pids.mp3;
                if (l2 !== E.kH264 || m2)
                  if (l2 !== E.kH265 || m2)
                    if (l2 !== E.kADTSAAC || g2)
                      if (l2 !== E.kLOASAAC || g2)
                        if (l2 !== E.kAC3 || g2)
                          if (l2 !== E.kMPEG1Audio && l2 !== E.kMPEG2Audio || g2)
                            if (l2 === E.kPESPrivateData) {
                              if (d2.pes_private_data_pids[f2] = true, p2 > 0) {
                                for (var v2 = u2 + 5; v2 < u2 + 5 + p2; ) {
                                  var y2 = e3[v2 + 0], b2 = e3[v2 + 1];
                                  if (5 === y2) {
                                    var S2 = String.fromCharCode.apply(String, Array.from(e3.subarray(v2 + 2, v2 + 2 + b2)));
                                    "VANC" === S2 ? d2.smpte2038_pids[f2] = true : "Opus" === S2 && (d2.common_pids.opus = f2);
                                  } else if (127 === y2 && f2 === d2.common_pids.opus) {
                                    var A2 = null;
                                    if (128 === e3[v2 + 2] && (A2 = e3[v2 + 3]), null == A2) {
                                      r.a.e(this.TAG, "Not Supported Opus channel count.");
                                      continue;
                                    }
                                    var R2 = { codec: "opus", channel_count: 0 == (15 & A2) ? 2 : 15 & A2, channel_config_code: A2, sample_rate: 48e3 }, T2 = { codec: "opus", meta: R2 };
                                    0 == this.audio_init_segment_dispatched_ ? (this.audio_metadata_ = R2, this.dispatchAudioInitSegment(T2)) : this.detectAudioMetadataChange(T2) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(T2));
                                  }
                                  v2 += 2 + b2;
                                }
                                var L2 = e3.subarray(u2 + 5, u2 + 5 + p2);
                                this.dispatchPESPrivateDataDescriptor(f2, l2, L2);
                              }
                            } else
                              l2 === E.kID3 ? d2.timed_id3_pids[f2] = true : l2 === E.kSCTE35 && (d2.scte_35_pids[f2] = true);
                          else
                            d2.common_pids.mp3 = f2;
                        else
                          d2.common_pids.ac3 = f2;
                      else
                        d2.common_pids.loas_aac = f2;
                    else
                      d2.common_pids.adts_aac = f2;
                  else
                    d2.common_pids.h265 = f2;
                else
                  d2.common_pids.h264 = f2;
                u2 += 5 + p2;
              }
              n2 === this.current_program_ && (null == this.pmt_ && r.a.v(this.TAG, "Parsed first PMT: " + JSON.stringify(d2)), this.pmt_ = d2, (d2.common_pids.h264 || d2.common_pids.h265) && (this.has_video_ = true), (d2.common_pids.adts_aac || d2.common_pids.loas_aac || d2.common_pids.ac3 || d2.common_pids.opus || d2.common_pids.mp3) && (this.has_audio_ = true));
            } else
              r.a.e(this.TAG, "parsePMT: table_id " + t3 + " is not corresponded to PMT!");
          }, t2.prototype.parseSCTE35 = function(e3) {
            var t3 = oe(e3);
            if (null != t3.pts) {
              var i2 = Math.floor(t3.pts / this.timescale_);
              t3.pts = i2;
            } else
              t3.nearest_pts = this.aac_last_sample_pts_;
            this.onSCTE35Metadata && this.onSCTE35Metadata(t3);
          }, t2.prototype.parseH264Payload = function(e3, t3, i2, n2, a2) {
            for (var s2 = new M(e3), o2 = null, d2 = [], _2 = 0, h2 = false; null != (o2 = s2.readNextNaluPayload()); ) {
              var c2 = new P(o2);
              if (c2.type === L.kSliceSPS) {
                var u2 = p.parseSPS(o2.data);
                this.video_init_segment_dispatched_ ? true === this.detectVideoMetadataChange(c2, u2) && (r.a.v(this.TAG, "H264: Critical h264 metadata has been changed, attempt to re-generate InitSegment"), this.video_metadata_changed_ = true, this.video_metadata_ = { vps: void 0, sps: c2, pps: void 0, details: u2 }) : (this.video_metadata_.sps = c2, this.video_metadata_.details = u2);
              } else
                c2.type === L.kSlicePPS ? this.video_init_segment_dispatched_ && !this.video_metadata_changed_ || (this.video_metadata_.pps = c2, this.video_metadata_.sps && this.video_metadata_.pps && (this.video_metadata_changed_ && this.dispatchVideoMediaSegment(), this.dispatchVideoInitSegment())) : (c2.type === L.kSliceIDR || c2.type === L.kSliceNonIDR && 1 === a2) && (h2 = true);
              this.video_init_segment_dispatched_ && (d2.push(c2), _2 += c2.data.byteLength);
            }
            var l2 = Math.floor(t3 / this.timescale_), f2 = Math.floor(i2 / this.timescale_);
            if (d2.length) {
              var m2 = this.video_track_, g2 = { units: d2, length: _2, isKeyframe: h2, dts: f2, pts: l2, cts: l2 - f2, file_position: n2 };
              m2.samples.push(g2), m2.length += _2;
            }
          }, t2.prototype.parseH265Payload = function(e3, t3, i2, n2, a2) {
            for (var s2 = new he(e3), o2 = null, d2 = [], _2 = 0, h2 = false; null != (o2 = s2.readNextNaluPayload()); ) {
              var c2 = new _e(o2);
              if (c2.type === X.kSliceVPS) {
                if (!this.video_init_segment_dispatched_) {
                  var u2 = g.parseVPS(o2.data);
                  this.video_metadata_.vps = c2, this.video_metadata_.details = ye(ye({}, this.video_metadata_.details), u2);
                }
              } else if (c2.type === X.kSliceSPS) {
                u2 = g.parseSPS(o2.data);
                this.video_init_segment_dispatched_ ? true === this.detectVideoMetadataChange(c2, u2) && (r.a.v(this.TAG, "H265: Critical h265 metadata has been changed, attempt to re-generate InitSegment"), this.video_metadata_changed_ = true, this.video_metadata_ = { vps: void 0, sps: c2, pps: void 0, details: u2 }) : (this.video_metadata_.sps = c2, this.video_metadata_.details = ye(ye({}, this.video_metadata_.details), u2));
              } else if (c2.type === X.kSlicePPS) {
                if (!this.video_init_segment_dispatched_ || this.video_metadata_changed_) {
                  u2 = g.parsePPS(o2.data);
                  this.video_metadata_.pps = c2, this.video_metadata_.details = ye(ye({}, this.video_metadata_.details), u2), this.video_metadata_.vps && this.video_metadata_.sps && this.video_metadata_.pps && (this.video_metadata_changed_ && this.dispatchVideoMediaSegment(), this.dispatchVideoInitSegment());
                }
              } else
                c2.type !== X.kSliceIDR_W_RADL && c2.type !== X.kSliceIDR_N_LP && c2.type !== X.kSliceCRA_NUT || (h2 = true);
              this.video_init_segment_dispatched_ && (d2.push(c2), _2 += c2.data.byteLength);
            }
            var l2 = Math.floor(t3 / this.timescale_), f2 = Math.floor(i2 / this.timescale_);
            if (d2.length) {
              var p2 = this.video_track_, m2 = { units: d2, length: _2, isKeyframe: h2, dts: f2, pts: l2, cts: l2 - f2, file_position: n2 };
              p2.samples.push(m2), p2.length += _2;
            }
          }, t2.prototype.detectVideoMetadataChange = function(e3, t3) {
            if (t3.codec_mimetype !== this.video_metadata_.details.codec_mimetype)
              return r.a.v(this.TAG, "Video: Codec mimeType changed from " + this.video_metadata_.details.codec_mimetype + " to " + t3.codec_mimetype), true;
            if (t3.codec_size.width !== this.video_metadata_.details.codec_size.width || t3.codec_size.height !== this.video_metadata_.details.codec_size.height) {
              var i2 = this.video_metadata_.details.codec_size, n2 = t3.codec_size;
              return r.a.v(this.TAG, "Video: Coded Resolution changed from " + i2.width + "x" + i2.height + " to " + n2.width + "x" + n2.height), true;
            }
            return t3.present_size.width !== this.video_metadata_.details.present_size.width && (r.a.v(this.TAG, "Video: Present resolution width changed from " + this.video_metadata_.details.present_size.width + " to " + t3.present_size.width), true);
          }, t2.prototype.isInitSegmentDispatched = function() {
            return this.has_video_ && this.has_audio_ ? this.video_init_segment_dispatched_ && this.audio_init_segment_dispatched_ : this.has_video_ && !this.has_audio_ ? this.video_init_segment_dispatched_ : !(this.has_video_ || !this.has_audio_) && this.audio_init_segment_dispatched_;
          }, t2.prototype.dispatchVideoInitSegment = function() {
            var e3 = this.video_metadata_.details, t3 = { type: "video" };
            t3.id = this.video_track_.id, t3.timescale = 1e3, t3.duration = this.duration_, t3.codecWidth = e3.codec_size.width, t3.codecHeight = e3.codec_size.height, t3.presentWidth = e3.present_size.width, t3.presentHeight = e3.present_size.height, t3.profile = e3.profile_string, t3.level = e3.level_string, t3.bitDepth = e3.bit_depth, t3.chromaFormat = e3.chroma_format, t3.sarRatio = e3.sar_ratio, t3.frameRate = e3.frame_rate;
            var i2 = t3.frameRate.fps_den, n2 = t3.frameRate.fps_num;
            if (t3.refSampleDuration = i2 / n2 * 1e3, t3.codec = e3.codec_mimetype, this.video_metadata_.vps) {
              var a2 = this.video_metadata_.vps.data.subarray(4), s2 = this.video_metadata_.sps.data.subarray(4), o2 = this.video_metadata_.pps.data.subarray(4), d2 = new ce(a2, s2, o2, e3);
              t3.hvcc = d2.getData(), 0 == this.video_init_segment_dispatched_ && r.a.v(this.TAG, "Generated first HEVCDecoderConfigurationRecord for mimeType: " + t3.codec);
            } else {
              s2 = this.video_metadata_.sps.data.subarray(4), o2 = this.video_metadata_.pps.data.subarray(4);
              var _2 = new x(s2, o2, e3);
              t3.avcc = _2.getData(), 0 == this.video_init_segment_dispatched_ && r.a.v(this.TAG, "Generated first AVCDecoderConfigurationRecord for mimeType: " + t3.codec);
            }
            this.onTrackMetadata("video", t3), this.video_init_segment_dispatched_ = true, this.video_metadata_changed_ = false;
            var h2 = this.media_info_;
            h2.hasVideo = true, h2.width = t3.codecWidth, h2.height = t3.codecHeight, h2.fps = t3.frameRate.fps, h2.profile = t3.profile, h2.level = t3.level, h2.refFrames = e3.ref_frames, h2.chromaFormat = e3.chroma_format_string, h2.sarNum = t3.sarRatio.width, h2.sarDen = t3.sarRatio.height, h2.videoCodec = t3.codec, h2.hasAudio && h2.audioCodec ? h2.mimeType = 'video/mp2t; codecs="' + h2.videoCodec + "," + h2.audioCodec + '"' : h2.mimeType = 'video/mp2t; codecs="' + h2.videoCodec + '"', h2.isComplete() && this.onMediaInfo(h2);
          }, t2.prototype.dispatchVideoMediaSegment = function() {
            this.isInitSegmentDispatched() && this.video_track_.length && this.onDataAvailable(null, this.video_track_);
          }, t2.prototype.dispatchAudioMediaSegment = function() {
            this.isInitSegmentDispatched() && this.audio_track_.length && this.onDataAvailable(this.audio_track_, null);
          }, t2.prototype.dispatchAudioVideoMediaSegment = function() {
            this.isInitSegmentDispatched() && (this.audio_track_.length || this.video_track_.length) && this.onDataAvailable(this.audio_track_, this.video_track_);
          }, t2.prototype.parseADTSAACPayload = function(e3, t3) {
            if (!this.has_video_ || this.video_init_segment_dispatched_) {
              if (this.aac_last_incomplete_data_) {
                var i2 = new Uint8Array(e3.byteLength + this.aac_last_incomplete_data_.byteLength);
                i2.set(this.aac_last_incomplete_data_, 0), i2.set(e3, this.aac_last_incomplete_data_.byteLength), e3 = i2;
              }
              var n2, a2;
              if (null != t3 && (a2 = t3 / this.timescale_), "aac" === this.audio_metadata_.codec) {
                if (null == t3 && null != this.aac_last_sample_pts_)
                  n2 = 1024 / this.audio_metadata_.sampling_frequency * 1e3, a2 = this.aac_last_sample_pts_ + n2;
                else if (null == t3)
                  return void r.a.w(this.TAG, "AAC: Unknown pts");
                if (this.aac_last_incomplete_data_ && this.aac_last_sample_pts_) {
                  n2 = 1024 / this.audio_metadata_.sampling_frequency * 1e3;
                  var s2 = this.aac_last_sample_pts_ + n2;
                  Math.abs(s2 - a2) > 1 && (r.a.w(this.TAG, "AAC: Detected pts overlapped, expected: " + s2 + "ms, PES pts: " + a2 + "ms"), a2 = s2);
                }
              }
              for (var o2, d2 = new z(e3), _2 = null, h2 = a2; null != (_2 = d2.readNextAACFrame()); ) {
                n2 = 1024 / _2.sampling_frequency * 1e3;
                var c2 = { codec: "aac", data: _2 };
                0 == this.audio_init_segment_dispatched_ ? (this.audio_metadata_ = { codec: "aac", audio_object_type: _2.audio_object_type, sampling_freq_index: _2.sampling_freq_index, sampling_frequency: _2.sampling_frequency, channel_config: _2.channel_config }, this.dispatchAudioInitSegment(c2)) : this.detectAudioMetadataChange(c2) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(c2)), o2 = h2;
                var u2 = Math.floor(h2), l2 = { unit: _2.data, length: _2.data.byteLength, pts: u2, dts: u2 };
                this.audio_track_.samples.push(l2), this.audio_track_.length += _2.data.byteLength, h2 += n2;
              }
              d2.hasIncompleteData() && (this.aac_last_incomplete_data_ = d2.getIncompleteData()), o2 && (this.aac_last_sample_pts_ = o2);
            }
          }, t2.prototype.parseLOASAACPayload = function(e3, t3) {
            var i2;
            if (!this.has_video_ || this.video_init_segment_dispatched_) {
              if (this.aac_last_incomplete_data_) {
                var n2 = new Uint8Array(e3.byteLength + this.aac_last_incomplete_data_.byteLength);
                n2.set(this.aac_last_incomplete_data_, 0), n2.set(e3, this.aac_last_incomplete_data_.byteLength), e3 = n2;
              }
              var a2, s2;
              if (null != t3 && (s2 = t3 / this.timescale_), "aac" === this.audio_metadata_.codec) {
                if (null == t3 && null != this.aac_last_sample_pts_)
                  a2 = 1024 / this.audio_metadata_.sampling_frequency * 1e3, s2 = this.aac_last_sample_pts_ + a2;
                else if (null == t3)
                  return void r.a.w(this.TAG, "AAC: Unknown pts");
                if (this.aac_last_incomplete_data_ && this.aac_last_sample_pts_) {
                  a2 = 1024 / this.audio_metadata_.sampling_frequency * 1e3;
                  var o2 = this.aac_last_sample_pts_ + a2;
                  Math.abs(o2 - s2) > 1 && (r.a.w(this.TAG, "AAC: Detected pts overlapped, expected: " + o2 + "ms, PES pts: " + s2 + "ms"), s2 = o2);
                }
              }
              for (var d2, _2 = new H(e3), h2 = null, c2 = s2; null != (h2 = _2.readNextAACFrame(null !== (i2 = this.loas_previous_frame) && void 0 !== i2 ? i2 : void 0)); ) {
                this.loas_previous_frame = h2, a2 = 1024 / h2.sampling_frequency * 1e3;
                var u2 = { codec: "aac", data: h2 };
                0 == this.audio_init_segment_dispatched_ ? (this.audio_metadata_ = { codec: "aac", audio_object_type: h2.audio_object_type, sampling_freq_index: h2.sampling_freq_index, sampling_frequency: h2.sampling_frequency, channel_config: h2.channel_config }, this.dispatchAudioInitSegment(u2)) : this.detectAudioMetadataChange(u2) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(u2)), d2 = c2;
                var l2 = Math.floor(c2), f2 = { unit: h2.data, length: h2.data.byteLength, pts: l2, dts: l2 };
                this.audio_track_.samples.push(f2), this.audio_track_.length += h2.data.byteLength, c2 += a2;
              }
              _2.hasIncompleteData() && (this.aac_last_incomplete_data_ = _2.getIncompleteData()), d2 && (this.aac_last_sample_pts_ = d2);
            }
          }, t2.prototype.parseAC3Payload = function(e3, t3) {
            if (!this.has_video_ || this.video_init_segment_dispatched_) {
              var i2, n2;
              if (null != t3 && (n2 = t3 / this.timescale_), "ac-3" === this.audio_metadata_.codec) {
                if (null == t3 && null != this.aac_last_sample_pts_)
                  i2 = 1536 / this.audio_metadata_.sampling_frequency * 1e3, n2 = this.aac_last_sample_pts_ + i2;
                else if (null == t3)
                  return void r.a.w(this.TAG, "Opus: Unknown pts");
              }
              for (var a2, s2 = new me(e3), o2 = null, d2 = n2; null != (o2 = s2.readNextAC3Frame()); ) {
                i2 = 1536 / o2.sampling_frequency * 1e3;
                var _2 = { codec: "ac-3", data: o2 };
                0 == this.audio_init_segment_dispatched_ ? (this.audio_metadata_ = { codec: "ac-3", sampling_frequency: o2.sampling_frequency, bit_stream_identification: o2.bit_stream_identification, bit_stream_mode: o2.bit_stream_mode, low_frequency_effects_channel_on: o2.low_frequency_effects_channel_on, channel_mode: o2.channel_mode }, console.log(JSON.stringify(this.audio_metadata_)), this.dispatchAudioInitSegment(_2)) : this.detectAudioMetadataChange(_2) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(_2)), a2 = d2;
                var h2 = Math.floor(d2), c2 = { unit: o2.data, length: o2.data.byteLength, pts: h2, dts: h2 };
                this.audio_track_.samples.push(c2), this.audio_track_.length += o2.data.byteLength, d2 += i2;
              }
              a2 && (this.aac_last_sample_pts_ = a2);
            }
          }, t2.prototype.parseOpusPayload = function(e3, t3) {
            if (!this.has_video_ || this.video_init_segment_dispatched_) {
              var i2, n2;
              if (null != t3 && (n2 = t3 / this.timescale_), "opus" === this.audio_metadata_.codec) {
                if (null == t3 && null != this.aac_last_sample_pts_)
                  i2 = 20, n2 = this.aac_last_sample_pts_ + i2;
                else if (null == t3)
                  return void r.a.w(this.TAG, "Opus: Unknown pts");
              }
              for (var a2, s2 = n2, o2 = 0; o2 < e3.length; ) {
                i2 = 20;
                for (var d2 = 0 != (16 & e3[o2 + 1]), _2 = 0 != (8 & e3[o2 + 1]), h2 = o2 + 2, c2 = 0; 255 === e3[h2]; )
                  c2 += 255, h2 += 1;
                c2 += e3[h2], h2 += 1, h2 += d2 ? 2 : 0, h2 += _2 ? 2 : 0, a2 = s2;
                var u2 = Math.floor(s2), l2 = e3.slice(h2, h2 + c2), f2 = { unit: l2, length: l2.byteLength, pts: u2, dts: u2 };
                this.audio_track_.samples.push(f2), this.audio_track_.length += l2.byteLength, s2 += i2, o2 = h2 + c2;
              }
              a2 && (this.aac_last_sample_pts_ = a2);
            }
          }, t2.prototype.parseMP3Payload = function(e3, t3) {
            if (!this.has_video_ || this.video_init_segment_dispatched_) {
              var i2 = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], n2 = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], a2 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], r2 = e3[1] >>> 3 & 3, s2 = (6 & e3[1]) >> 1, o2 = (240 & e3[2]) >>> 4, d2 = (12 & e3[2]) >>> 2, _2 = 3 !== (e3[3] >>> 6 & 3) ? 2 : 1, h2 = 0, c2 = 34;
              switch (r2) {
                case 0:
                  h2 = [11025, 12e3, 8e3, 0][d2];
                  break;
                case 2:
                  h2 = [22050, 24e3, 16e3, 0][d2];
                  break;
                case 3:
                  h2 = [44100, 48e3, 32e3, 0][d2];
              }
              switch (s2) {
                case 1:
                  c2 = 34, o2 < a2.length && a2[o2];
                  break;
                case 2:
                  c2 = 33, o2 < n2.length && n2[o2];
                  break;
                case 3:
                  c2 = 32, o2 < i2.length && i2[o2];
              }
              var u2 = new le();
              u2.object_type = c2, u2.sample_rate = h2, u2.channel_count = _2, u2.data = e3;
              var l2 = { codec: "mp3", data: u2 };
              0 == this.audio_init_segment_dispatched_ ? (this.audio_metadata_ = { codec: "mp3", object_type: c2, sample_rate: h2, channel_count: _2 }, this.dispatchAudioInitSegment(l2)) : this.detectAudioMetadataChange(l2) && (this.dispatchAudioMediaSegment(), this.dispatchAudioInitSegment(l2));
              var f2 = { unit: e3, length: e3.byteLength, pts: t3 / this.timescale_, dts: t3 / this.timescale_ };
              this.audio_track_.samples.push(f2), this.audio_track_.length += e3.byteLength;
            }
          }, t2.prototype.detectAudioMetadataChange = function(e3) {
            if (e3.codec !== this.audio_metadata_.codec)
              return r.a.v(this.TAG, "Audio: Audio Codecs changed from " + this.audio_metadata_.codec + " to " + e3.codec), true;
            if ("aac" === e3.codec && "aac" === this.audio_metadata_.codec) {
              if ((t3 = e3.data).audio_object_type !== this.audio_metadata_.audio_object_type)
                return r.a.v(this.TAG, "AAC: AudioObjectType changed from " + this.audio_metadata_.audio_object_type + " to " + t3.audio_object_type), true;
              if (t3.sampling_freq_index !== this.audio_metadata_.sampling_freq_index)
                return r.a.v(this.TAG, "AAC: SamplingFrequencyIndex changed from " + this.audio_metadata_.sampling_freq_index + " to " + t3.sampling_freq_index), true;
              if (t3.channel_config !== this.audio_metadata_.channel_config)
                return r.a.v(this.TAG, "AAC: Channel configuration changed from " + this.audio_metadata_.channel_config + " to " + t3.channel_config), true;
            } else if ("ac-3" === e3.codec && "ac-3" === this.audio_metadata_.codec) {
              var t3;
              if ((t3 = e3.data).sampling_frequency !== this.audio_metadata_.sampling_frequency)
                return r.a.v(this.TAG, "AC3: Sampling Frequency changed from " + this.audio_metadata_.sampling_frequency + " to " + t3.sampling_frequency), true;
              if (t3.bit_stream_identification !== this.audio_metadata_.bit_stream_identification)
                return r.a.v(this.TAG, "AC3: Bit Stream Identification changed from " + this.audio_metadata_.bit_stream_identification + " to " + t3.bit_stream_identification), true;
              if (t3.bit_stream_mode !== this.audio_metadata_.bit_stream_mode)
                return r.a.v(this.TAG, "AC3: BitStream Mode changed from " + this.audio_metadata_.bit_stream_mode + " to " + t3.bit_stream_mode), true;
              if (t3.channel_mode !== this.audio_metadata_.channel_mode)
                return r.a.v(this.TAG, "AC3: Channel Mode changed from " + this.audio_metadata_.channel_mode + " to " + t3.channel_mode), true;
              if (t3.low_frequency_effects_channel_on !== this.audio_metadata_.low_frequency_effects_channel_on)
                return r.a.v(this.TAG, "AC3: Low Frequency Effects Channel On changed from " + this.audio_metadata_.low_frequency_effects_channel_on + " to " + t3.low_frequency_effects_channel_on), true;
            } else if ("opus" === e3.codec && "opus" === this.audio_metadata_.codec) {
              if ((i2 = e3.meta).sample_rate !== this.audio_metadata_.sample_rate)
                return r.a.v(this.TAG, "Opus: SamplingFrequencyIndex changed from " + this.audio_metadata_.sample_rate + " to " + i2.sample_rate), true;
              if (i2.channel_count !== this.audio_metadata_.channel_count)
                return r.a.v(this.TAG, "Opus: Channel count changed from " + this.audio_metadata_.channel_count + " to " + i2.channel_count), true;
            } else if ("mp3" === e3.codec && "mp3" === this.audio_metadata_.codec) {
              var i2;
              if ((i2 = e3.data).object_type !== this.audio_metadata_.object_type)
                return r.a.v(this.TAG, "MP3: AudioObjectType changed from " + this.audio_metadata_.object_type + " to " + i2.object_type), true;
              if (i2.sample_rate !== this.audio_metadata_.sample_rate)
                return r.a.v(this.TAG, "MP3: SamplingFrequencyIndex changed from " + this.audio_metadata_.sample_rate + " to " + i2.sample_rate), true;
              if (i2.channel_count !== this.audio_metadata_.channel_count)
                return r.a.v(this.TAG, "MP3: Channel count changed from " + this.audio_metadata_.channel_count + " to " + i2.channel_count), true;
            }
            return false;
          }, t2.prototype.dispatchAudioInitSegment = function(e3) {
            var t3 = { type: "audio" };
            if (t3.id = this.audio_track_.id, t3.timescale = 1e3, t3.duration = this.duration_, "aac" === this.audio_metadata_.codec) {
              var i2 = "aac" === e3.codec ? e3.data : null, n2 = new q(i2);
              t3.audioSampleRate = n2.sampling_rate, t3.channelCount = n2.channel_count, t3.codec = n2.codec_mimetype, t3.originalCodec = n2.original_codec_mimetype, t3.config = n2.config, t3.refSampleDuration = 1024 / t3.audioSampleRate * t3.timescale;
            } else if ("ac-3" === this.audio_metadata_.codec) {
              var a2 = "ac-3" === e3.codec ? e3.data : null, s2 = new ge(a2);
              t3.audioSampleRate = s2.sampling_rate, t3.channelCount = s2.channel_count, t3.codec = s2.codec_mimetype, t3.originalCodec = s2.original_codec_mimetype, t3.config = s2.config, t3.refSampleDuration = 1536 / t3.audioSampleRate * t3.timescale;
            } else
              "opus" === this.audio_metadata_.codec ? (t3.audioSampleRate = this.audio_metadata_.sample_rate, t3.channelCount = this.audio_metadata_.channel_count, t3.channelConfigCode = this.audio_metadata_.channel_config_code, t3.codec = "opus", t3.originalCodec = "opus", t3.config = void 0, t3.refSampleDuration = 20) : "mp3" === this.audio_metadata_.codec && (t3.audioSampleRate = this.audio_metadata_.sample_rate, t3.channelCount = this.audio_metadata_.channel_count, t3.codec = "mp3", t3.originalCodec = "mp3", t3.config = void 0);
            0 == this.audio_init_segment_dispatched_ && r.a.v(this.TAG, "Generated first AudioSpecificConfig for mimeType: " + t3.codec), this.onTrackMetadata("audio", t3), this.audio_init_segment_dispatched_ = true, this.video_metadata_changed_ = false;
            var o2 = this.media_info_;
            o2.hasAudio = true, o2.audioCodec = t3.originalCodec, o2.audioSampleRate = t3.audioSampleRate, o2.audioChannelCount = t3.channelCount, o2.hasVideo && o2.videoCodec ? o2.mimeType = 'video/mp2t; codecs="' + o2.videoCodec + "," + o2.audioCodec + '"' : o2.mimeType = 'video/mp2t; codecs="' + o2.audioCodec + '"', o2.isComplete() && this.onMediaInfo(o2);
          }, t2.prototype.dispatchPESPrivateDataDescriptor = function(e3, t3, i2) {
            var n2 = new W();
            n2.pid = e3, n2.stream_type = t3, n2.descriptor = i2, this.onPESPrivateDataDescriptor && this.onPESPrivateDataDescriptor(n2);
          }, t2.prototype.parsePESPrivateDataPayload = function(e3, t3, i2, n2, a2) {
            var r2 = new K();
            if (r2.pid = n2, r2.stream_id = a2, r2.len = e3.byteLength, r2.data = e3, null != t3) {
              var s2 = Math.floor(t3 / this.timescale_);
              r2.pts = s2;
            } else
              r2.nearest_pts = this.aac_last_sample_pts_;
            if (null != i2) {
              var o2 = Math.floor(i2 / this.timescale_);
              r2.dts = o2;
            }
            this.onPESPrivateData && this.onPESPrivateData(r2);
          }, t2.prototype.parseTimedID3MetadataPayload = function(e3, t3, i2, n2, a2) {
            var r2 = new K();
            if (r2.pid = n2, r2.stream_id = a2, r2.len = e3.byteLength, r2.data = e3, null != t3) {
              var s2 = Math.floor(t3 / this.timescale_);
              r2.pts = s2;
            }
            if (null != i2) {
              var o2 = Math.floor(i2 / this.timescale_);
              r2.dts = o2;
            }
            this.onTimedID3Metadata && this.onTimedID3Metadata(r2);
          }, t2.prototype.parseSMPTE2038MetadataPayload = function(e3, t3, i2, n2, a2) {
            var r2 = new ue();
            if (r2.pid = n2, r2.stream_id = a2, r2.len = e3.byteLength, r2.data = e3, null != t3) {
              var s2 = Math.floor(t3 / this.timescale_);
              r2.pts = s2;
            }
            if (r2.nearest_pts = this.aac_last_sample_pts_, null != i2) {
              var o2 = Math.floor(i2 / this.timescale_);
              r2.dts = o2;
            }
            r2.ancillaries = function(e4) {
              for (var t4 = new f(e4), i3 = 0, n3 = []; ; ) {
                if (i3 += 6, 0 !== t4.readBits(6))
                  break;
                var a3 = t4.readBool();
                i3 += 1;
                var r3 = t4.readBits(11);
                i3 += 11;
                var s3 = t4.readBits(12);
                i3 += 12;
                var o3 = 255 & t4.readBits(10);
                i3 += 10;
                var d2 = 255 & t4.readBits(10);
                i3 += 10;
                var _2 = 255 & t4.readBits(10);
                i3 += 10;
                for (var h2 = new Uint8Array(_2), c2 = 0; c2 < _2; c2++) {
                  var u2 = 255 & t4.readBits(10);
                  i3 += 10, h2[c2] = u2;
                }
                t4.readBits(10);
                i3 += 10;
                var l2 = "User Defined";
                65 === o3 ? 7 === d2 && (l2 = "SCTE-104") : 95 === o3 ? 220 === d2 ? l2 = "ARIB STD-B37 (1SEG)" : 221 === d2 ? l2 = "ARIB STD-B37 (ANALOG)" : 222 === d2 ? l2 = "ARIB STD-B37 (SD)" : 223 === d2 && (l2 = "ARIB STD-B37 (HD)") : 97 === o3 && (1 === d2 ? l2 = "EIA-708" : 2 === d2 && (l2 = "EIA-608")), n3.push({ yc_indicator: a3, line_number: r3, horizontal_offset: s3, did: o3, sdid: d2, user_data: h2, description: l2, information: {} }), t4.readBits(8 - (i3 - Math.floor(i3 / 8)) % 8), i3 += (8 - (i3 - Math.floor(i3 / 8))) % 8;
              }
              return t4.destroy(), t4 = null, n3;
            }(e3), this.onSMPTE2038Metadata && this.onSMPTE2038Metadata(r2);
          }, t2;
        }(R), Se = function() {
          for (var e2 = 0, t2 = 0, i2 = arguments.length; t2 < i2; t2++)
            e2 += arguments[t2].length;
          var n2 = Array(e2), a2 = 0;
          for (t2 = 0; t2 < i2; t2++)
            for (var r2 = arguments[t2], s2 = 0, o2 = r2.length; s2 < o2; s2++, a2++)
              n2[a2] = r2[s2];
          return n2;
        }, Ee = function() {
          function e2() {
          }
          return e2.init = function() {
            for (var t2 in e2.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], hvc1: [], hvcC: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], mvex: [], mvhd: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [], ".mp3": [], Opus: [], dOps: [], "ac-3": [], dac3: [] }, e2.types)
              e2.types.hasOwnProperty(t2) && (e2.types[t2] = [t2.charCodeAt(0), t2.charCodeAt(1), t2.charCodeAt(2), t2.charCodeAt(3)]);
            var i2 = e2.constants = {};
            i2.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]), i2.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), i2.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), i2.STSC = i2.STCO = i2.STTS, i2.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), i2.HDLR_VIDEO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), i2.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), i2.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), i2.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), i2.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
          }, e2.box = function(e3) {
            for (var t2 = 8, i2 = null, n2 = Array.prototype.slice.call(arguments, 1), a2 = n2.length, r2 = 0; r2 < a2; r2++)
              t2 += n2[r2].byteLength;
            (i2 = new Uint8Array(t2))[0] = t2 >>> 24 & 255, i2[1] = t2 >>> 16 & 255, i2[2] = t2 >>> 8 & 255, i2[3] = 255 & t2, i2.set(e3, 4);
            var s2 = 8;
            for (r2 = 0; r2 < a2; r2++)
              i2.set(n2[r2], s2), s2 += n2[r2].byteLength;
            return i2;
          }, e2.generateInitSegment = function(t2) {
            var i2 = e2.box(e2.types.ftyp, e2.constants.FTYP), n2 = e2.moov(t2), a2 = new Uint8Array(i2.byteLength + n2.byteLength);
            return a2.set(i2, 0), a2.set(n2, i2.byteLength), a2;
          }, e2.moov = function(t2) {
            var i2 = e2.mvhd(t2.timescale, t2.duration), n2 = e2.trak(t2), a2 = e2.mvex(t2);
            return e2.box(e2.types.moov, i2, n2, a2);
          }, e2.mvhd = function(t2, i2) {
            return e2.box(e2.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t2 >>> 24 & 255, t2 >>> 16 & 255, t2 >>> 8 & 255, 255 & t2, i2 >>> 24 & 255, i2 >>> 16 & 255, i2 >>> 8 & 255, 255 & i2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]));
          }, e2.trak = function(t2) {
            return e2.box(e2.types.trak, e2.tkhd(t2), e2.mdia(t2));
          }, e2.tkhd = function(t2) {
            var i2 = t2.id, n2 = t2.duration, a2 = t2.presentWidth, r2 = t2.presentHeight;
            return e2.box(e2.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, i2 >>> 24 & 255, i2 >>> 16 & 255, i2 >>> 8 & 255, 255 & i2, 0, 0, 0, 0, n2 >>> 24 & 255, n2 >>> 16 & 255, n2 >>> 8 & 255, 255 & n2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a2 >>> 8 & 255, 255 & a2, 0, 0, r2 >>> 8 & 255, 255 & r2, 0, 0]));
          }, e2.mdia = function(t2) {
            return e2.box(e2.types.mdia, e2.mdhd(t2), e2.hdlr(t2), e2.minf(t2));
          }, e2.mdhd = function(t2) {
            var i2 = t2.timescale, n2 = t2.duration;
            return e2.box(e2.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i2 >>> 24 & 255, i2 >>> 16 & 255, i2 >>> 8 & 255, 255 & i2, n2 >>> 24 & 255, n2 >>> 16 & 255, n2 >>> 8 & 255, 255 & n2, 85, 196, 0, 0]));
          }, e2.hdlr = function(t2) {
            var i2 = null;
            return i2 = "audio" === t2.type ? e2.constants.HDLR_AUDIO : e2.constants.HDLR_VIDEO, e2.box(e2.types.hdlr, i2);
          }, e2.minf = function(t2) {
            var i2 = null;
            return i2 = "audio" === t2.type ? e2.box(e2.types.smhd, e2.constants.SMHD) : e2.box(e2.types.vmhd, e2.constants.VMHD), e2.box(e2.types.minf, i2, e2.dinf(), e2.stbl(t2));
          }, e2.dinf = function() {
            return e2.box(e2.types.dinf, e2.box(e2.types.dref, e2.constants.DREF));
          }, e2.stbl = function(t2) {
            return e2.box(e2.types.stbl, e2.stsd(t2), e2.box(e2.types.stts, e2.constants.STTS), e2.box(e2.types.stsc, e2.constants.STSC), e2.box(e2.types.stsz, e2.constants.STSZ), e2.box(e2.types.stco, e2.constants.STCO));
          }, e2.stsd = function(t2) {
            return "audio" === t2.type ? "mp3" === t2.codec ? e2.box(e2.types.stsd, e2.constants.STSD_PREFIX, e2.mp3(t2)) : "ac-3" === t2.codec ? e2.box(e2.types.stsd, e2.constants.STSD_PREFIX, e2.ac3(t2)) : "opus" === t2.codec ? e2.box(e2.types.stsd, e2.constants.STSD_PREFIX, e2.Opus(t2)) : e2.box(e2.types.stsd, e2.constants.STSD_PREFIX, e2.mp4a(t2)) : "video" === t2.type && t2.codec.startsWith("hvc1") ? e2.box(e2.types.stsd, e2.constants.STSD_PREFIX, e2.hvc1(t2)) : e2.box(e2.types.stsd, e2.constants.STSD_PREFIX, e2.avc1(t2));
          }, e2.mp3 = function(t2) {
            var i2 = t2.channelCount, n2 = t2.audioSampleRate, a2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i2, 0, 16, 0, 0, 0, 0, n2 >>> 8 & 255, 255 & n2, 0, 0]);
            return e2.box(e2.types[".mp3"], a2);
          }, e2.mp4a = function(t2) {
            var i2 = t2.channelCount, n2 = t2.audioSampleRate, a2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i2, 0, 16, 0, 0, 0, 0, n2 >>> 8 & 255, 255 & n2, 0, 0]);
            return e2.box(e2.types.mp4a, a2, e2.esds(t2));
          }, e2.ac3 = function(t2) {
            var i2 = t2.channelCount, n2 = t2.audioSampleRate, a2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i2, 0, 16, 0, 0, 0, 0, n2 >>> 8 & 255, 255 & n2, 0, 0]);
            return e2.box(e2.types["ac-3"], a2, e2.box(e2.types.dac3, new Uint8Array(t2.config)));
          }, e2.esds = function(t2) {
            var i2 = t2.config || [], n2 = i2.length, a2 = new Uint8Array([0, 0, 0, 0, 3, 23 + n2, 0, 1, 0, 4, 15 + n2, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([n2]).concat(i2).concat([6, 1, 2]));
            return e2.box(e2.types.esds, a2);
          }, e2.Opus = function(t2) {
            var i2 = t2.channelCount, n2 = t2.audioSampleRate, a2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, i2, 0, 16, 0, 0, 0, 0, n2 >>> 8 & 255, 255 & n2, 0, 0]);
            return e2.box(e2.types.Opus, a2, e2.dOps(t2));
          }, e2.dOps = function(t2) {
            var i2 = t2.channelCount, n2 = t2.channelConfigCode, a2 = t2.audioSampleRate;
            if (t2.config)
              return e2.box(e2.types.dOps, s2);
            var r2 = [];
            switch (n2) {
              case 1:
              case 2:
                r2 = [0];
                break;
              case 0:
                r2 = [255, 1, 1, 0, 1];
                break;
              case 128:
                r2 = [255, 2, 0, 0, 1];
                break;
              case 3:
                r2 = [1, 2, 1, 0, 2, 1];
                break;
              case 4:
                r2 = [1, 2, 2, 0, 1, 2, 3];
                break;
              case 5:
                r2 = [1, 3, 2, 0, 4, 1, 2, 3];
                break;
              case 6:
                r2 = [1, 4, 2, 0, 4, 1, 2, 3, 5];
                break;
              case 7:
                r2 = [1, 4, 2, 0, 4, 1, 2, 3, 5, 6];
                break;
              case 8:
                r2 = [1, 5, 3, 0, 6, 1, 2, 3, 4, 5, 7];
                break;
              case 130:
                r2 = [1, 1, 2, 0, 1];
                break;
              case 131:
                r2 = [1, 1, 3, 0, 1, 2];
                break;
              case 132:
                r2 = [1, 1, 4, 0, 1, 2, 3];
                break;
              case 133:
                r2 = [1, 1, 5, 0, 1, 2, 3, 4];
                break;
              case 134:
                r2 = [1, 1, 6, 0, 1, 2, 3, 4, 5];
                break;
              case 135:
                r2 = [1, 1, 7, 0, 1, 2, 3, 4, 5, 6];
                break;
              case 136:
                r2 = [1, 1, 8, 0, 1, 2, 3, 4, 5, 6, 7];
            }
            var s2 = new Uint8Array(Se([0, i2, 0, 0, a2 >>> 24 & 255, a2 >>> 17 & 255, a2 >>> 8 & 255, a2 >>> 0 & 255, 0, 0], r2));
            return e2.box(e2.types.dOps, s2);
          }, e2.avc1 = function(t2) {
            var i2 = t2.avcc, n2 = t2.codecWidth, a2 = t2.codecHeight, r2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, n2 >>> 8 & 255, 255 & n2, a2 >>> 8 & 255, 255 & a2, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
            return e2.box(e2.types.avc1, r2, e2.box(e2.types.avcC, i2));
          }, e2.hvc1 = function(t2) {
            var i2 = t2.hvcc, n2 = t2.codecWidth, a2 = t2.codecHeight, r2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, n2 >>> 8 & 255, 255 & n2, a2 >>> 8 & 255, 255 & a2, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
            return e2.box(e2.types.hvc1, r2, e2.box(e2.types.hvcC, i2));
          }, e2.mvex = function(t2) {
            return e2.box(e2.types.mvex, e2.trex(t2));
          }, e2.trex = function(t2) {
            var i2 = t2.id, n2 = new Uint8Array([0, 0, 0, 0, i2 >>> 24 & 255, i2 >>> 16 & 255, i2 >>> 8 & 255, 255 & i2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
            return e2.box(e2.types.trex, n2);
          }, e2.moof = function(t2, i2) {
            return e2.box(e2.types.moof, e2.mfhd(t2.sequenceNumber), e2.traf(t2, i2));
          }, e2.mfhd = function(t2) {
            var i2 = new Uint8Array([0, 0, 0, 0, t2 >>> 24 & 255, t2 >>> 16 & 255, t2 >>> 8 & 255, 255 & t2]);
            return e2.box(e2.types.mfhd, i2);
          }, e2.traf = function(t2, i2) {
            var n2 = t2.id, a2 = e2.box(e2.types.tfhd, new Uint8Array([0, 0, 0, 0, n2 >>> 24 & 255, n2 >>> 16 & 255, n2 >>> 8 & 255, 255 & n2])), r2 = e2.box(e2.types.tfdt, new Uint8Array([0, 0, 0, 0, i2 >>> 24 & 255, i2 >>> 16 & 255, i2 >>> 8 & 255, 255 & i2])), s2 = e2.sdtp(t2), o2 = e2.trun(t2, s2.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
            return e2.box(e2.types.traf, a2, r2, o2, s2);
          }, e2.sdtp = function(t2) {
            for (var i2 = t2.samples || [], n2 = i2.length, a2 = new Uint8Array(4 + n2), r2 = 0; r2 < n2; r2++) {
              var s2 = i2[r2].flags;
              a2[r2 + 4] = s2.isLeading << 6 | s2.dependsOn << 4 | s2.isDependedOn << 2 | s2.hasRedundancy;
            }
            return e2.box(e2.types.sdtp, a2);
          }, e2.trun = function(t2, i2) {
            var n2 = t2.samples || [], a2 = n2.length, r2 = 12 + 16 * a2, s2 = new Uint8Array(r2);
            i2 += 8 + r2, s2.set([0, 0, 15, 1, a2 >>> 24 & 255, a2 >>> 16 & 255, a2 >>> 8 & 255, 255 & a2, i2 >>> 24 & 255, i2 >>> 16 & 255, i2 >>> 8 & 255, 255 & i2], 0);
            for (var o2 = 0; o2 < a2; o2++) {
              var d2 = n2[o2].duration, _2 = n2[o2].size, h2 = n2[o2].flags, c2 = n2[o2].cts;
              s2.set([d2 >>> 24 & 255, d2 >>> 16 & 255, d2 >>> 8 & 255, 255 & d2, _2 >>> 24 & 255, _2 >>> 16 & 255, _2 >>> 8 & 255, 255 & _2, h2.isLeading << 2 | h2.dependsOn, h2.isDependedOn << 6 | h2.hasRedundancy << 4 | h2.isNonSync, 0, 0, c2 >>> 24 & 255, c2 >>> 16 & 255, c2 >>> 8 & 255, 255 & c2], 12 + 16 * o2);
            }
            return e2.box(e2.types.trun, s2);
          }, e2.mdat = function(t2) {
            return e2.box(e2.types.mdat, t2);
          }, e2;
        }();
        Ee.init();
        var Ae = Ee, Re = function() {
          function e2() {
          }
          return e2.getSilentFrame = function(e3, t2) {
            if ("mp4a.40.2" === e3) {
              if (1 === t2)
                return new Uint8Array([0, 200, 0, 128, 35, 128]);
              if (2 === t2)
                return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
              if (3 === t2)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
              if (4 === t2)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
              if (5 === t2)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
              if (6 === t2)
                return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
            } else {
              if (1 === t2)
                return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
              if (2 === t2)
                return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
              if (3 === t2)
                return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
            }
            return null;
          }, e2;
        }(), Te = i(7), Le = function() {
          function e2(e3) {
            this.TAG = "MP4Remuxer", this._config = e3, this._isLive = true === e3.isLive, this._dtsBase = -1, this._dtsBaseInited = false, this._audioDtsBase = 1 / 0, this._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new Te.c("audio"), this._videoSegmentInfoList = new Te.c("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !(!s.a.chrome || !(s.a.version.major < 50 || 50 === s.a.version.major && s.a.version.build < 2661)), this._fillSilentAfterSeek = s.a.msedge || s.a.msie, this._mp3UseMpegAudio = !s.a.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap;
          }
          return e2.prototype.destroy = function() {
            this._dtsBase = -1, this._dtsBaseInited = false, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null;
          }, e2.prototype.bindDataSource = function(e3) {
            return e3.onDataAvailable = this.remux.bind(this), e3.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this;
          }, Object.defineProperty(e2.prototype, "onInitSegment", { get: function() {
            return this._onInitSegment;
          }, set: function(e3) {
            this._onInitSegment = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onMediaSegment", { get: function() {
            return this._onMediaSegment;
          }, set: function(e3) {
            this._onMediaSegment = e3;
          }, enumerable: false, configurable: true }), e2.prototype.insertDiscontinuity = function() {
            this._audioNextDts = this._videoNextDts = void 0;
          }, e2.prototype.seek = function(e3) {
            this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear();
          }, e2.prototype.remux = function(e3, t2) {
            if (!this._onMediaSegment)
              throw new c.a("MP4Remuxer: onMediaSegment callback must be specificed!");
            this._dtsBaseInited || this._calculateDtsBase(e3, t2), t2 && this._remuxVideo(t2), e3 && this._remuxAudio(e3);
          }, e2.prototype._onTrackMetadataReceived = function(e3, t2) {
            var i2 = null, n2 = "mp4", a2 = t2.codec;
            if ("audio" === e3)
              this._audioMeta = t2, "mp3" === t2.codec && this._mp3UseMpegAudio ? (n2 = "mpeg", a2 = "", i2 = new Uint8Array()) : i2 = Ae.generateInitSegment(t2);
            else {
              if ("video" !== e3)
                return;
              this._videoMeta = t2, i2 = Ae.generateInitSegment(t2);
            }
            if (!this._onInitSegment)
              throw new c.a("MP4Remuxer: onInitSegment callback must be specified!");
            this._onInitSegment(e3, { type: e3, data: i2.buffer, codec: a2, container: e3 + "/" + n2, mediaDuration: t2.duration });
          }, e2.prototype._calculateDtsBase = function(e3, t2) {
            this._dtsBaseInited || (e3 && e3.samples && e3.samples.length && (this._audioDtsBase = e3.samples[0].dts), t2 && t2.samples && t2.samples.length && (this._videoDtsBase = t2.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), this._dtsBaseInited = true);
          }, e2.prototype.getTimestampBase = function() {
            if (this._dtsBaseInited)
              return this._dtsBase;
          }, e2.prototype.flushStashedSamples = function() {
            var e3 = this._videoStashedLastSample, t2 = this._audioStashedLastSample, i2 = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 };
            null != e3 && (i2.samples.push(e3), i2.length = e3.length);
            var n2 = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 };
            null != t2 && (n2.samples.push(t2), n2.length = t2.length), this._videoStashedLastSample = null, this._audioStashedLastSample = null, this._remuxVideo(i2, true), this._remuxAudio(n2, true);
          }, e2.prototype._remuxAudio = function(e3, t2) {
            if (null != this._audioMeta) {
              var i2, n2 = e3, a2 = n2.samples, o2 = void 0, d2 = -1, _2 = this._audioMeta.refSampleDuration, h2 = "mp3" === this._audioMeta.codec && this._mp3UseMpegAudio, c2 = this._dtsBaseInited && void 0 === this._audioNextDts, u2 = false;
              if (a2 && 0 !== a2.length && (1 !== a2.length || t2)) {
                var l2 = 0, f2 = null, p2 = 0;
                h2 ? (l2 = 0, p2 = n2.length) : (l2 = 8, p2 = 8 + n2.length);
                var m2 = null;
                if (a2.length > 1 && (p2 -= (m2 = a2.pop()).length), null != this._audioStashedLastSample) {
                  var g2 = this._audioStashedLastSample;
                  this._audioStashedLastSample = null, a2.unshift(g2), p2 += g2.length;
                }
                null != m2 && (this._audioStashedLastSample = m2);
                var v2 = a2[0].dts - this._dtsBase;
                if (this._audioNextDts)
                  o2 = v2 - this._audioNextDts;
                else if (this._audioSegmentInfoList.isEmpty())
                  o2 = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && "mp3" !== this._audioMeta.originalCodec && (u2 = true);
                else {
                  var y2 = this._audioSegmentInfoList.getLastSampleBefore(v2);
                  if (null != y2) {
                    var b2 = v2 - (y2.originalDts + y2.duration);
                    b2 <= 3 && (b2 = 0), o2 = v2 - (y2.dts + y2.duration + b2);
                  } else
                    o2 = 0;
                }
                if (u2) {
                  var S2 = v2 - o2, E2 = this._videoSegmentInfoList.getLastSegmentBefore(v2);
                  if (null != E2 && E2.beginDts < S2) {
                    if (O2 = Re.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount)) {
                      var A2 = E2.beginDts, R2 = S2 - E2.beginDts;
                      r.a.v(this.TAG, "InsertPrefixSilentAudio: dts: " + A2 + ", duration: " + R2), a2.unshift({ unit: O2, dts: A2, pts: A2 }), p2 += O2.byteLength;
                    }
                  } else
                    u2 = false;
                }
                for (var T2 = [], L2 = 0; L2 < a2.length; L2++) {
                  var w2 = (g2 = a2[L2]).unit, k2 = g2.dts - this._dtsBase, D2 = (A2 = k2, false), C2 = null, B2 = 0;
                  if (!(k2 < -1e-3)) {
                    if ("mp3" !== this._audioMeta.codec) {
                      var I2 = k2;
                      if (this._audioNextDts && (I2 = this._audioNextDts), (o2 = k2 - I2) <= -3 * _2) {
                        r.a.w(this.TAG, "Dropping 1 audio frame (originalDts: " + k2 + " ms ,curRefDts: " + I2 + " ms)  due to dtsCorrection: " + o2 + " ms overlap.");
                        continue;
                      }
                      if (o2 >= 3 * _2 && this._fillAudioTimestampGap && !s.a.safari) {
                        D2 = true;
                        var O2, P2 = Math.floor(o2 / _2);
                        r.a.w(this.TAG, "Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\noriginalDts: " + k2 + " ms, curRefDts: " + I2 + " ms, dtsCorrection: " + Math.round(o2) + " ms, generate: " + P2 + " frames"), A2 = Math.floor(I2), B2 = Math.floor(I2 + _2) - A2, null == (O2 = Re.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount)) && (r.a.w(this.TAG, "Unable to generate silent frame for " + this._audioMeta.originalCodec + " with " + this._audioMeta.channelCount + " channels, repeat last frame"), O2 = w2), C2 = [];
                        for (var M2 = 0; M2 < P2; M2++) {
                          I2 += _2;
                          var x2 = Math.floor(I2), U2 = Math.floor(I2 + _2) - x2, N2 = { dts: x2, pts: x2, cts: 0, unit: O2, size: O2.byteLength, duration: U2, originalDts: k2, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 } };
                          C2.push(N2), p2 += N2.size;
                        }
                        this._audioNextDts = I2 + _2;
                      } else
                        A2 = Math.floor(I2), B2 = Math.floor(I2 + _2) - A2, this._audioNextDts = I2 + _2;
                    } else {
                      if (A2 = k2 - o2, L2 !== a2.length - 1)
                        B2 = a2[L2 + 1].dts - this._dtsBase - o2 - A2;
                      else if (null != m2)
                        B2 = m2.dts - this._dtsBase - o2 - A2;
                      else
                        B2 = T2.length >= 1 ? T2[T2.length - 1].duration : Math.floor(_2);
                      this._audioNextDts = A2 + B2;
                    }
                    -1 === d2 && (d2 = A2), T2.push({ dts: A2, pts: A2, cts: 0, unit: g2.unit, size: g2.unit.byteLength, duration: B2, originalDts: k2, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 } }), D2 && T2.push.apply(T2, C2);
                  }
                }
                if (0 === T2.length)
                  return n2.samples = [], void (n2.length = 0);
                h2 ? f2 = new Uint8Array(p2) : ((f2 = new Uint8Array(p2))[0] = p2 >>> 24 & 255, f2[1] = p2 >>> 16 & 255, f2[2] = p2 >>> 8 & 255, f2[3] = 255 & p2, f2.set(Ae.types.mdat, 4));
                for (L2 = 0; L2 < T2.length; L2++) {
                  w2 = T2[L2].unit;
                  f2.set(w2, l2), l2 += w2.byteLength;
                }
                var G2 = T2[T2.length - 1];
                i2 = G2.dts + G2.duration;
                var V2 = new Te.b();
                V2.beginDts = d2, V2.endDts = i2, V2.beginPts = d2, V2.endPts = i2, V2.originalBeginDts = T2[0].originalDts, V2.originalEndDts = G2.originalDts + G2.duration, V2.firstSample = new Te.d(T2[0].dts, T2[0].pts, T2[0].duration, T2[0].originalDts, false), V2.lastSample = new Te.d(G2.dts, G2.pts, G2.duration, G2.originalDts, false), this._isLive || this._audioSegmentInfoList.append(V2), n2.samples = T2, n2.sequenceNumber++;
                var F2 = null;
                F2 = h2 ? new Uint8Array() : Ae.moof(n2, d2), n2.samples = [], n2.length = 0;
                var j2 = { type: "audio", data: this._mergeBoxes(F2, f2).buffer, sampleCount: T2.length, info: V2 };
                h2 && c2 && (j2.timestampOffset = d2), this._onMediaSegment("audio", j2);
              }
            }
          }, e2.prototype._remuxVideo = function(e3, t2) {
            if (null != this._videoMeta) {
              var i2, n2, a2 = e3, r2 = a2.samples, s2 = void 0, o2 = -1, d2 = -1;
              if (r2 && 0 !== r2.length && (1 !== r2.length || t2)) {
                var _2 = 8, h2 = null, c2 = 8 + e3.length, u2 = null;
                if (r2.length > 1 && (c2 -= (u2 = r2.pop()).length), null != this._videoStashedLastSample) {
                  var l2 = this._videoStashedLastSample;
                  this._videoStashedLastSample = null, r2.unshift(l2), c2 += l2.length;
                }
                null != u2 && (this._videoStashedLastSample = u2);
                var f2 = r2[0].dts - this._dtsBase;
                if (this._videoNextDts)
                  s2 = f2 - this._videoNextDts;
                else if (this._videoSegmentInfoList.isEmpty())
                  s2 = 0;
                else {
                  var p2 = this._videoSegmentInfoList.getLastSampleBefore(f2);
                  if (null != p2) {
                    var m2 = f2 - (p2.originalDts + p2.duration);
                    m2 <= 3 && (m2 = 0), s2 = f2 - (p2.dts + p2.duration + m2);
                  } else
                    s2 = 0;
                }
                for (var g2 = new Te.b(), v2 = [], y2 = 0; y2 < r2.length; y2++) {
                  var b2 = (l2 = r2[y2]).dts - this._dtsBase, S2 = l2.isKeyframe, E2 = b2 - s2, A2 = l2.cts, R2 = E2 + A2;
                  -1 === o2 && (o2 = E2, d2 = R2);
                  var T2 = 0;
                  if (y2 !== r2.length - 1)
                    T2 = r2[y2 + 1].dts - this._dtsBase - s2 - E2;
                  else if (null != u2)
                    T2 = u2.dts - this._dtsBase - s2 - E2;
                  else
                    T2 = v2.length >= 1 ? v2[v2.length - 1].duration : Math.floor(this._videoMeta.refSampleDuration);
                  if (S2) {
                    var L2 = new Te.d(E2, R2, T2, l2.dts, true);
                    L2.fileposition = l2.fileposition, g2.appendSyncPoint(L2);
                  }
                  v2.push({ dts: E2, pts: R2, cts: A2, units: l2.units, size: l2.length, isKeyframe: S2, duration: T2, originalDts: b2, flags: { isLeading: 0, dependsOn: S2 ? 2 : 1, isDependedOn: S2 ? 1 : 0, hasRedundancy: 0, isNonSync: S2 ? 0 : 1 } });
                }
                (h2 = new Uint8Array(c2))[0] = c2 >>> 24 & 255, h2[1] = c2 >>> 16 & 255, h2[2] = c2 >>> 8 & 255, h2[3] = 255 & c2, h2.set(Ae.types.mdat, 4);
                for (y2 = 0; y2 < v2.length; y2++)
                  for (var w2 = v2[y2].units; w2.length; ) {
                    var k2 = w2.shift().data;
                    h2.set(k2, _2), _2 += k2.byteLength;
                  }
                var D2 = v2[v2.length - 1];
                if (i2 = D2.dts + D2.duration, n2 = D2.pts + D2.duration, this._videoNextDts = i2, g2.beginDts = o2, g2.endDts = i2, g2.beginPts = d2, g2.endPts = n2, g2.originalBeginDts = v2[0].originalDts, g2.originalEndDts = D2.originalDts + D2.duration, g2.firstSample = new Te.d(v2[0].dts, v2[0].pts, v2[0].duration, v2[0].originalDts, v2[0].isKeyframe), g2.lastSample = new Te.d(D2.dts, D2.pts, D2.duration, D2.originalDts, D2.isKeyframe), this._isLive || this._videoSegmentInfoList.append(g2), a2.samples = v2, a2.sequenceNumber++, this._forceFirstIDR) {
                  var C2 = v2[0].flags;
                  C2.dependsOn = 2, C2.isNonSync = 0;
                }
                var B2 = Ae.moof(a2, o2);
                a2.samples = [], a2.length = 0, this._onMediaSegment("video", { type: "video", data: this._mergeBoxes(B2, h2).buffer, sampleCount: v2.length, info: g2 });
              }
            }
          }, e2.prototype._mergeBoxes = function(e3, t2) {
            var i2 = new Uint8Array(e3.byteLength + t2.byteLength);
            return i2.set(e3, 0), i2.set(t2, e3.byteLength), i2;
          }, e2;
        }(), we = i(11), ke = i(1), De = function() {
          function e2(e3, t2) {
            this.TAG = "TransmuxingController", this._emitter = new a.a(), this._config = t2, e3.segments || (e3.segments = [{ duration: e3.duration, filesize: e3.filesize, url: e3.url }]), "boolean" != typeof e3.cors && (e3.cors = true), "boolean" != typeof e3.withCredentials && (e3.withCredentials = false), this._mediaDataSource = e3, this._currentSegmentIndex = 0;
            var i2 = 0;
            this._mediaDataSource.segments.forEach(function(n2) {
              n2.timestampBase = i2, i2 += n2.duration, n2.cors = e3.cors, n2.withCredentials = e3.withCredentials, t2.referrerPolicy && (n2.referrerPolicy = t2.referrerPolicy);
            }), isNaN(i2) || this._mediaDataSource.duration === i2 || (this._mediaDataSource.duration = i2), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null;
          }
          return e2.prototype.destroy = function() {
            this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl && (this._ioctl.destroy(), this._ioctl = null), this._demuxer && (this._demuxer.destroy(), this._demuxer = null), this._remuxer && (this._remuxer.destroy(), this._remuxer = null), this._emitter.removeAllListeners(), this._emitter = null;
          }, e2.prototype.on = function(e3, t2) {
            this._emitter.addListener(e3, t2);
          }, e2.prototype.off = function(e3, t2) {
            this._emitter.removeListener(e3, t2);
          }, e2.prototype.start = function() {
            this._loadSegment(0), this._enableStatisticsReporter();
          }, e2.prototype._loadSegment = function(e3, t2) {
            this._currentSegmentIndex = e3;
            var i2 = this._mediaDataSource.segments[e3], n2 = this._ioctl = new we.a(i2, this._config, e3);
            n2.onError = this._onIOException.bind(this), n2.onSeeked = this._onIOSeeked.bind(this), n2.onComplete = this._onIOComplete.bind(this), n2.onRedirect = this._onIORedirect.bind(this), n2.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), t2 ? this._demuxer.bindDataSource(this._ioctl) : n2.onDataArrival = this._onInitChunkArrival.bind(this), n2.open(t2);
          }, e2.prototype.stop = function() {
            this._internalAbort(), this._disableStatisticsReporter();
          }, e2.prototype._internalAbort = function() {
            this._ioctl && (this._ioctl.destroy(), this._ioctl = null);
          }, e2.prototype.pause = function() {
            this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter());
          }, e2.prototype.resume = function() {
            this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter());
          }, e2.prototype.seek = function(e3) {
            if (null != this._mediaInfo && this._mediaInfo.isSeekable()) {
              var t2 = this._searchSegmentIndexContains(e3);
              if (t2 === this._currentSegmentIndex) {
                var i2 = this._mediaInfo.segments[t2];
                if (null == i2)
                  this._pendingSeekTime = e3;
                else {
                  var n2 = i2.getNearestKeyframe(e3);
                  this._remuxer.seek(n2.milliseconds), this._ioctl.seek(n2.fileposition), this._pendingResolveSeekPoint = n2.milliseconds;
                }
              } else {
                var a2 = this._mediaInfo.segments[t2];
                if (null == a2)
                  this._pendingSeekTime = e3, this._internalAbort(), this._remuxer.seek(), this._remuxer.insertDiscontinuity(), this._loadSegment(t2);
                else {
                  n2 = a2.getNearestKeyframe(e3);
                  this._internalAbort(), this._remuxer.seek(e3), this._remuxer.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this._demuxer.timestampBase = this._mediaDataSource.segments[t2].timestampBase, this._loadSegment(t2, n2.fileposition), this._pendingResolveSeekPoint = n2.milliseconds, this._reportSegmentMediaInfo(t2);
                }
              }
              this._enableStatisticsReporter();
            }
          }, e2.prototype._searchSegmentIndexContains = function(e3) {
            for (var t2 = this._mediaDataSource.segments, i2 = t2.length - 1, n2 = 0; n2 < t2.length; n2++)
              if (e3 < t2[n2].timestampBase) {
                i2 = n2 - 1;
                break;
              }
            return i2;
          }, e2.prototype._onInitChunkArrival = function(e3, t2) {
            var i2 = this, n2 = 0;
            if (t2 > 0)
              this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, n2 = this._demuxer.parseChunks(e3, t2);
            else {
              var a2 = null;
              (a2 = A.probe(e3)).match && (this._setupFLVDemuxerRemuxer(a2), n2 = this._demuxer.parseChunks(e3, t2)), a2.match || a2.needMoreData || (a2 = be.probe(e3)).match && (this._setupTSDemuxerRemuxer(a2), n2 = this._demuxer.parseChunks(e3, t2)), a2.match || a2.needMoreData || (a2 = null, r.a.e(this.TAG, "Non MPEG-TS/FLV, Unsupported media type!"), Promise.resolve().then(function() {
                i2._internalAbort();
              }), this._emitter.emit(ke.a.DEMUX_ERROR, m.a.FORMAT_UNSUPPORTED, "Non MPEG-TS/FLV, Unsupported media type!"));
            }
            return n2;
          }, e2.prototype._setupFLVDemuxerRemuxer = function(e3) {
            this._demuxer = new A(e3, this._config), this._remuxer || (this._remuxer = new Le(this._config));
            var t2 = this._mediaDataSource;
            null == t2.duration || isNaN(t2.duration) || (this._demuxer.overridedDuration = t2.duration), "boolean" == typeof t2.hasAudio && (this._demuxer.overridedHasAudio = t2.hasAudio), "boolean" == typeof t2.hasVideo && (this._demuxer.overridedHasVideo = t2.hasVideo), this._demuxer.timestampBase = t2.segments[this._currentSegmentIndex].timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer.onMetaDataArrived = this._onMetaDataArrived.bind(this), this._demuxer.onScriptDataArrived = this._onScriptDataArrived.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this);
          }, e2.prototype._setupTSDemuxerRemuxer = function(e3) {
            var t2 = this._demuxer = new be(e3, this._config);
            this._remuxer || (this._remuxer = new Le(this._config)), t2.onError = this._onDemuxException.bind(this), t2.onMediaInfo = this._onMediaInfo.bind(this), t2.onMetaDataArrived = this._onMetaDataArrived.bind(this), t2.onTimedID3Metadata = this._onTimedID3Metadata.bind(this), t2.onSMPTE2038Metadata = this._onSMPTE2038Metadata.bind(this), t2.onSCTE35Metadata = this._onSCTE35Metadata.bind(this), t2.onPESPrivateDataDescriptor = this._onPESPrivateDataDescriptor.bind(this), t2.onPESPrivateData = this._onPESPrivateData.bind(this), this._remuxer.bindDataSource(this._demuxer), this._demuxer.bindDataSource(this._ioctl), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this);
          }, e2.prototype._onMediaInfo = function(e3) {
            var t2 = this;
            null == this._mediaInfo && (this._mediaInfo = Object.assign({}, e3), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = this._mediaDataSource.segments.length, Object.setPrototypeOf(this._mediaInfo, o.a.prototype));
            var i2 = Object.assign({}, e3);
            Object.setPrototypeOf(i2, o.a.prototype), this._mediaInfo.segments[this._currentSegmentIndex] = i2, this._reportSegmentMediaInfo(this._currentSegmentIndex), null != this._pendingSeekTime && Promise.resolve().then(function() {
              var e4 = t2._pendingSeekTime;
              t2._pendingSeekTime = null, t2.seek(e4);
            });
          }, e2.prototype._onMetaDataArrived = function(e3) {
            this._emitter.emit(ke.a.METADATA_ARRIVED, e3);
          }, e2.prototype._onScriptDataArrived = function(e3) {
            this._emitter.emit(ke.a.SCRIPTDATA_ARRIVED, e3);
          }, e2.prototype._onTimedID3Metadata = function(e3) {
            var t2 = this._remuxer.getTimestampBase();
            null != t2 && (null != e3.pts && (e3.pts -= t2), null != e3.dts && (e3.dts -= t2), this._emitter.emit(ke.a.TIMED_ID3_METADATA_ARRIVED, e3));
          }, e2.prototype._onSMPTE2038Metadata = function(e3) {
            var t2 = this._remuxer.getTimestampBase();
            null != t2 && (null != e3.pts && (e3.pts -= t2), null != e3.dts && (e3.dts -= t2), null != e3.nearest_pts && (e3.nearest_pts -= t2), this._emitter.emit(ke.a.SMPTE2038_METADATA_ARRIVED, e3));
          }, e2.prototype._onSCTE35Metadata = function(e3) {
            var t2 = this._remuxer.getTimestampBase();
            null != t2 && (null != e3.pts && (e3.pts -= t2), null != e3.nearest_pts && (e3.nearest_pts -= t2), this._emitter.emit(ke.a.SCTE35_METADATA_ARRIVED, e3));
          }, e2.prototype._onPESPrivateDataDescriptor = function(e3) {
            this._emitter.emit(ke.a.PES_PRIVATE_DATA_DESCRIPTOR, e3);
          }, e2.prototype._onPESPrivateData = function(e3) {
            var t2 = this._remuxer.getTimestampBase();
            null != t2 && (null != e3.pts && (e3.pts -= t2), null != e3.nearest_pts && (e3.nearest_pts -= t2), null != e3.dts && (e3.dts -= t2), this._emitter.emit(ke.a.PES_PRIVATE_DATA_ARRIVED, e3));
          }, e2.prototype._onIOSeeked = function() {
            this._remuxer.insertDiscontinuity();
          }, e2.prototype._onIOComplete = function(e3) {
            var t2 = e3 + 1;
            t2 < this._mediaDataSource.segments.length ? (this._internalAbort(), this._remuxer && this._remuxer.flushStashedSamples(), this._loadSegment(t2)) : (this._remuxer && this._remuxer.flushStashedSamples(), this._emitter.emit(ke.a.LOADING_COMPLETE), this._disableStatisticsReporter());
          }, e2.prototype._onIORedirect = function(e3) {
            var t2 = this._ioctl.extraData;
            this._mediaDataSource.segments[t2].redirectedURL = e3;
          }, e2.prototype._onIORecoveredEarlyEof = function() {
            this._emitter.emit(ke.a.RECOVERED_EARLY_EOF);
          }, e2.prototype._onIOException = function(e3, t2) {
            r.a.e(this.TAG, "IOException: type = " + e3 + ", code = " + t2.code + ", msg = " + t2.msg), this._emitter.emit(ke.a.IO_ERROR, e3, t2), this._disableStatisticsReporter();
          }, e2.prototype._onDemuxException = function(e3, t2) {
            r.a.e(this.TAG, "DemuxException: type = " + e3 + ", info = " + t2), this._emitter.emit(ke.a.DEMUX_ERROR, e3, t2);
          }, e2.prototype._onRemuxerInitSegmentArrival = function(e3, t2) {
            this._emitter.emit(ke.a.INIT_SEGMENT, e3, t2);
          }, e2.prototype._onRemuxerMediaSegmentArrival = function(e3, t2) {
            if (null == this._pendingSeekTime && (this._emitter.emit(ke.a.MEDIA_SEGMENT, e3, t2), null != this._pendingResolveSeekPoint && "video" === e3)) {
              var i2 = t2.info.syncPoints, n2 = this._pendingResolveSeekPoint;
              this._pendingResolveSeekPoint = null, s.a.safari && i2.length > 0 && i2[0].originalDts === n2 && (n2 = i2[0].pts), this._emitter.emit(ke.a.RECOMMEND_SEEKPOINT, n2);
            }
          }, e2.prototype._enableStatisticsReporter = function() {
            null == this._statisticsReporter && (this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval));
          }, e2.prototype._disableStatisticsReporter = function() {
            this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
          }, e2.prototype._reportSegmentMediaInfo = function(e3) {
            var t2 = this._mediaInfo.segments[e3], i2 = Object.assign({}, t2);
            i2.duration = this._mediaInfo.duration, i2.segmentCount = this._mediaInfo.segmentCount, delete i2.segments, delete i2.keyframesIndex, this._emitter.emit(ke.a.MEDIA_INFO, i2);
          }, e2.prototype._reportStatisticsInfo = function() {
            var e3 = {};
            e3.url = this._ioctl.currentURL, e3.hasRedirect = this._ioctl.hasRedirect, e3.hasRedirect && (e3.redirectedURL = this._ioctl.currentRedirectedURL), e3.speed = this._ioctl.currentSpeed, e3.loaderType = this._ioctl.loaderType, e3.currentSegmentIndex = this._currentSegmentIndex, e3.totalSegmentCount = this._mediaDataSource.segments.length, this._emitter.emit(ke.a.STATISTICS_INFO, e3);
          }, e2;
        }();
        t.a = De;
      }, function(e, t, i) {
        "use strict";
        var n, a = i(0), r = function() {
          function e2() {
            this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now;
          }
          return e2.prototype.reset = function() {
            this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0;
          }, e2.prototype.addBytes = function(e3) {
            0 === this._firstCheckpoint ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += e3, this._totalBytes += e3) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += e3, this._totalBytes += e3) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = e3, this._totalBytes += e3, this._lastCheckpoint = this._now());
          }, Object.defineProperty(e2.prototype, "currentKBps", { get: function() {
            this.addBytes(0);
            var e3 = (this._now() - this._lastCheckpoint) / 1e3;
            return 0 == e3 && (e3 = 1), this._intervalBytes / e3 / 1024;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "lastSecondKBps", { get: function() {
            return this.addBytes(0), 0 !== this._lastSecondBytes ? this._lastSecondBytes / 1024 : this._now() - this._lastCheckpoint >= 500 ? this.currentKBps : 0;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "averageKBps", { get: function() {
            var e3 = (this._now() - this._firstCheckpoint) / 1e3;
            return this._totalBytes / e3 / 1024;
          }, enumerable: false, configurable: true }), e2;
        }(), s = i(2), o = i(4), d = i(3), _ = (n = function(e2, t2) {
          return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
            e3.__proto__ = t3;
          } || function(e3, t3) {
            for (var i2 in t3)
              t3.hasOwnProperty(i2) && (e3[i2] = t3[i2]);
          })(e2, t2);
        }, function(e2, t2) {
          function i2() {
            this.constructor = e2;
          }
          n(e2, t2), e2.prototype = null === t2 ? Object.create(t2) : (i2.prototype = t2.prototype, new i2());
        }), h = function(e2) {
          function t2(t3, i2) {
            var n2 = e2.call(this, "fetch-stream-loader") || this;
            return n2.TAG = "FetchStreamLoader", n2._seekHandler = t3, n2._config = i2, n2._needStash = true, n2._requestAbort = false, n2._abortController = null, n2._contentLength = null, n2._receivedLength = 0, n2;
          }
          return _(t2, e2), t2.isSupported = function() {
            try {
              var e3 = o.a.msedge && o.a.version.minor >= 15048, t3 = !o.a.msedge || e3;
              return self.fetch && self.ReadableStream && t3;
            } catch (e4) {
              return false;
            }
          }, t2.prototype.destroy = function() {
            this.isWorking() && this.abort(), e2.prototype.destroy.call(this);
          }, t2.prototype.open = function(e3, t3) {
            var i2 = this;
            this._dataSource = e3, this._range = t3;
            var n2 = e3.url;
            this._config.reuseRedirectedURL && null != e3.redirectedURL && (n2 = e3.redirectedURL);
            var a2 = this._seekHandler.getConfig(n2, t3), r2 = new self.Headers();
            if ("object" == typeof a2.headers) {
              var o2 = a2.headers;
              for (var _2 in o2)
                o2.hasOwnProperty(_2) && r2.append(_2, o2[_2]);
            }
            var h2 = { method: "GET", headers: r2, mode: "cors", cache: "default", referrerPolicy: "no-referrer-when-downgrade" };
            if ("object" == typeof this._config.headers)
              for (var _2 in this._config.headers)
                r2.append(_2, this._config.headers[_2]);
            false === e3.cors && (h2.mode = "same-origin"), e3.withCredentials && (h2.credentials = "include"), e3.referrerPolicy && (h2.referrerPolicy = e3.referrerPolicy), self.AbortController && (this._abortController = new self.AbortController(), h2.signal = this._abortController.signal), this._status = s.c.kConnecting, self.fetch(a2.url, h2).then(function(e4) {
              if (i2._requestAbort)
                return i2._status = s.c.kIdle, void e4.body.cancel();
              if (e4.ok && e4.status >= 200 && e4.status <= 299) {
                if (e4.url !== a2.url && i2._onURLRedirect) {
                  var t4 = i2._seekHandler.removeURLParameters(e4.url);
                  i2._onURLRedirect(t4);
                }
                var n3 = e4.headers.get("Content-Length");
                return null != n3 && (i2._contentLength = parseInt(n3), 0 !== i2._contentLength && i2._onContentLengthKnown && i2._onContentLengthKnown(i2._contentLength)), i2._pump.call(i2, e4.body.getReader());
              }
              if (i2._status = s.c.kError, !i2._onError)
                throw new d.d("FetchStreamLoader: Http code invalid, " + e4.status + " " + e4.statusText);
              i2._onError(s.b.HTTP_STATUS_CODE_INVALID, { code: e4.status, msg: e4.statusText });
            }).catch(function(e4) {
              if (!i2._abortController || !i2._abortController.signal.aborted) {
                if (i2._status = s.c.kError, !i2._onError)
                  throw e4;
                i2._onError(s.b.EXCEPTION, { code: -1, msg: e4.message });
              }
            });
          }, t2.prototype.abort = function() {
            if (this._requestAbort = true, (this._status !== s.c.kBuffering || !o.a.chrome) && this._abortController)
              try {
                this._abortController.abort();
              } catch (e3) {
              }
          }, t2.prototype._pump = function(e3) {
            var t3 = this;
            return e3.read().then(function(i2) {
              if (i2.done)
                if (null !== t3._contentLength && t3._receivedLength < t3._contentLength) {
                  t3._status = s.c.kError;
                  var n2 = s.b.EARLY_EOF, a2 = { code: -1, msg: "Fetch stream meet Early-EOF" };
                  if (!t3._onError)
                    throw new d.d(a2.msg);
                  t3._onError(n2, a2);
                } else
                  t3._status = s.c.kComplete, t3._onComplete && t3._onComplete(t3._range.from, t3._range.from + t3._receivedLength - 1);
              else {
                if (t3._abortController && t3._abortController.signal.aborted)
                  return void (t3._status = s.c.kComplete);
                if (true === t3._requestAbort)
                  return t3._status = s.c.kComplete, e3.cancel();
                t3._status = s.c.kBuffering;
                var r2 = i2.value.buffer, o2 = t3._range.from + t3._receivedLength;
                t3._receivedLength += r2.byteLength, t3._onDataArrival && t3._onDataArrival(r2, o2, t3._receivedLength), t3._pump(e3);
              }
            }).catch(function(e4) {
              if (t3._abortController && t3._abortController.signal.aborted)
                t3._status = s.c.kComplete;
              else if (11 !== e4.code || !o.a.msedge) {
                t3._status = s.c.kError;
                var i2 = 0, n2 = null;
                if (19 !== e4.code && "network error" !== e4.message || !(null === t3._contentLength || null !== t3._contentLength && t3._receivedLength < t3._contentLength) ? (i2 = s.b.EXCEPTION, n2 = { code: e4.code, msg: e4.message }) : (i2 = s.b.EARLY_EOF, n2 = { code: e4.code, msg: "Fetch stream meet Early-EOF" }), !t3._onError)
                  throw new d.d(n2.msg);
                t3._onError(i2, n2);
              }
            });
          }, t2;
        }(s.a), c = function() {
          var e2 = function(t2, i2) {
            return (e2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var i3 in t3)
                t3.hasOwnProperty(i3) && (e3[i3] = t3[i3]);
            })(t2, i2);
          };
          return function(t2, i2) {
            function n2() {
              this.constructor = t2;
            }
            e2(t2, i2), t2.prototype = null === i2 ? Object.create(i2) : (n2.prototype = i2.prototype, new n2());
          };
        }(), u = function(e2) {
          function t2(t3, i2) {
            var n2 = e2.call(this, "xhr-moz-chunked-loader") || this;
            return n2.TAG = "MozChunkedLoader", n2._seekHandler = t3, n2._config = i2, n2._needStash = true, n2._xhr = null, n2._requestAbort = false, n2._contentLength = null, n2._receivedLength = 0, n2;
          }
          return c(t2, e2), t2.isSupported = function() {
            try {
              var e3 = new XMLHttpRequest();
              return e3.open("GET", "https://example.com", true), e3.responseType = "moz-chunked-arraybuffer", "moz-chunked-arraybuffer" === e3.responseType;
            } catch (e4) {
              return a.a.w("MozChunkedLoader", e4.message), false;
            }
          }, t2.prototype.destroy = function() {
            this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, this._xhr = null), e2.prototype.destroy.call(this);
          }, t2.prototype.open = function(e3, t3) {
            this._dataSource = e3, this._range = t3;
            var i2 = e3.url;
            this._config.reuseRedirectedURL && null != e3.redirectedURL && (i2 = e3.redirectedURL);
            var n2 = this._seekHandler.getConfig(i2, t3);
            this._requestURL = n2.url;
            var a2 = this._xhr = new XMLHttpRequest();
            if (a2.open("GET", n2.url, true), a2.responseType = "moz-chunked-arraybuffer", a2.onreadystatechange = this._onReadyStateChange.bind(this), a2.onprogress = this._onProgress.bind(this), a2.onloadend = this._onLoadEnd.bind(this), a2.onerror = this._onXhrError.bind(this), e3.withCredentials && (a2.withCredentials = true), "object" == typeof n2.headers) {
              var r2 = n2.headers;
              for (var o2 in r2)
                r2.hasOwnProperty(o2) && a2.setRequestHeader(o2, r2[o2]);
            }
            if ("object" == typeof this._config.headers) {
              r2 = this._config.headers;
              for (var o2 in r2)
                r2.hasOwnProperty(o2) && a2.setRequestHeader(o2, r2[o2]);
            }
            this._status = s.c.kConnecting, a2.send();
          }, t2.prototype.abort = function() {
            this._requestAbort = true, this._xhr && this._xhr.abort(), this._status = s.c.kComplete;
          }, t2.prototype._onReadyStateChange = function(e3) {
            var t3 = e3.target;
            if (2 === t3.readyState) {
              if (null != t3.responseURL && t3.responseURL !== this._requestURL && this._onURLRedirect) {
                var i2 = this._seekHandler.removeURLParameters(t3.responseURL);
                this._onURLRedirect(i2);
              }
              if (0 !== t3.status && (t3.status < 200 || t3.status > 299)) {
                if (this._status = s.c.kError, !this._onError)
                  throw new d.d("MozChunkedLoader: Http code invalid, " + t3.status + " " + t3.statusText);
                this._onError(s.b.HTTP_STATUS_CODE_INVALID, { code: t3.status, msg: t3.statusText });
              } else
                this._status = s.c.kBuffering;
            }
          }, t2.prototype._onProgress = function(e3) {
            if (this._status !== s.c.kError) {
              null === this._contentLength && null !== e3.total && 0 !== e3.total && (this._contentLength = e3.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
              var t3 = e3.target.response, i2 = this._range.from + this._receivedLength;
              this._receivedLength += t3.byteLength, this._onDataArrival && this._onDataArrival(t3, i2, this._receivedLength);
            }
          }, t2.prototype._onLoadEnd = function(e3) {
            true !== this._requestAbort ? this._status !== s.c.kError && (this._status = s.c.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1)) : this._requestAbort = false;
          }, t2.prototype._onXhrError = function(e3) {
            this._status = s.c.kError;
            var t3 = 0, i2 = null;
            if (this._contentLength && e3.loaded < this._contentLength ? (t3 = s.b.EARLY_EOF, i2 = { code: -1, msg: "Moz-Chunked stream meet Early-Eof" }) : (t3 = s.b.EXCEPTION, i2 = { code: -1, msg: e3.constructor.name + " " + e3.type }), !this._onError)
              throw new d.d(i2.msg);
            this._onError(t3, i2);
          }, t2;
        }(s.a), l = function() {
          var e2 = function(t2, i2) {
            return (e2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var i3 in t3)
                t3.hasOwnProperty(i3) && (e3[i3] = t3[i3]);
            })(t2, i2);
          };
          return function(t2, i2) {
            function n2() {
              this.constructor = t2;
            }
            e2(t2, i2), t2.prototype = null === i2 ? Object.create(i2) : (n2.prototype = i2.prototype, new n2());
          };
        }(), f = function(e2) {
          function t2(t3, i2) {
            var n2 = e2.call(this, "xhr-range-loader") || this;
            return n2.TAG = "RangeLoader", n2._seekHandler = t3, n2._config = i2, n2._needStash = false, n2._chunkSizeKBList = [128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192], n2._currentChunkSizeKB = 384, n2._currentSpeedNormalized = 0, n2._zeroSpeedChunkCount = 0, n2._xhr = null, n2._speedSampler = new r(), n2._requestAbort = false, n2._waitForTotalLength = false, n2._totalLengthReceived = false, n2._currentRequestURL = null, n2._currentRedirectedURL = null, n2._currentRequestRange = null, n2._totalLength = null, n2._contentLength = null, n2._receivedLength = 0, n2._lastTimeLoaded = 0, n2;
          }
          return l(t2, e2), t2.isSupported = function() {
            try {
              var e3 = new XMLHttpRequest();
              return e3.open("GET", "https://example.com", true), e3.responseType = "arraybuffer", "arraybuffer" === e3.responseType;
            } catch (e4) {
              return a.a.w("RangeLoader", e4.message), false;
            }
          }, t2.prototype.destroy = function() {
            this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr = null), e2.prototype.destroy.call(this);
          }, Object.defineProperty(t2.prototype, "currentSpeed", { get: function() {
            return this._speedSampler.lastSecondKBps;
          }, enumerable: false, configurable: true }), t2.prototype.open = function(e3, t3) {
            this._dataSource = e3, this._range = t3, this._status = s.c.kConnecting;
            var i2 = false;
            null != this._dataSource.filesize && 0 !== this._dataSource.filesize && (i2 = true, this._totalLength = this._dataSource.filesize), this._totalLengthReceived || i2 ? this._openSubRange() : (this._waitForTotalLength = true, this._internalOpen(this._dataSource, { from: 0, to: -1 }));
          }, t2.prototype._openSubRange = function() {
            var e3 = 1024 * this._currentChunkSizeKB, t3 = this._range.from + this._receivedLength, i2 = t3 + e3;
            null != this._contentLength && i2 - this._range.from >= this._contentLength && (i2 = this._range.from + this._contentLength - 1), this._currentRequestRange = { from: t3, to: i2 }, this._internalOpen(this._dataSource, this._currentRequestRange);
          }, t2.prototype._internalOpen = function(e3, t3) {
            this._lastTimeLoaded = 0;
            var i2 = e3.url;
            this._config.reuseRedirectedURL && (null != this._currentRedirectedURL ? i2 = this._currentRedirectedURL : null != e3.redirectedURL && (i2 = e3.redirectedURL));
            var n2 = this._seekHandler.getConfig(i2, t3);
            this._currentRequestURL = n2.url;
            var a2 = this._xhr = new XMLHttpRequest();
            if (a2.open("GET", n2.url, true), a2.responseType = "arraybuffer", a2.onreadystatechange = this._onReadyStateChange.bind(this), a2.onprogress = this._onProgress.bind(this), a2.onload = this._onLoad.bind(this), a2.onerror = this._onXhrError.bind(this), e3.withCredentials && (a2.withCredentials = true), "object" == typeof n2.headers) {
              var r2 = n2.headers;
              for (var s2 in r2)
                r2.hasOwnProperty(s2) && a2.setRequestHeader(s2, r2[s2]);
            }
            if ("object" == typeof this._config.headers) {
              r2 = this._config.headers;
              for (var s2 in r2)
                r2.hasOwnProperty(s2) && a2.setRequestHeader(s2, r2[s2]);
            }
            a2.send();
          }, t2.prototype.abort = function() {
            this._requestAbort = true, this._internalAbort(), this._status = s.c.kComplete;
          }, t2.prototype._internalAbort = function() {
            this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr = null);
          }, t2.prototype._onReadyStateChange = function(e3) {
            var t3 = e3.target;
            if (2 === t3.readyState) {
              if (null != t3.responseURL) {
                var i2 = this._seekHandler.removeURLParameters(t3.responseURL);
                t3.responseURL !== this._currentRequestURL && i2 !== this._currentRedirectedURL && (this._currentRedirectedURL = i2, this._onURLRedirect && this._onURLRedirect(i2));
              }
              if (t3.status >= 200 && t3.status <= 299) {
                if (this._waitForTotalLength)
                  return;
                this._status = s.c.kBuffering;
              } else {
                if (this._status = s.c.kError, !this._onError)
                  throw new d.d("RangeLoader: Http code invalid, " + t3.status + " " + t3.statusText);
                this._onError(s.b.HTTP_STATUS_CODE_INVALID, { code: t3.status, msg: t3.statusText });
              }
            }
          }, t2.prototype._onProgress = function(e3) {
            if (this._status !== s.c.kError) {
              if (null === this._contentLength) {
                var t3 = false;
                if (this._waitForTotalLength) {
                  this._waitForTotalLength = false, this._totalLengthReceived = true, t3 = true;
                  var i2 = e3.total;
                  this._internalAbort(), null != i2 & 0 !== i2 && (this._totalLength = i2);
                }
                if (-1 === this._range.to ? this._contentLength = this._totalLength - this._range.from : this._contentLength = this._range.to - this._range.from + 1, t3)
                  return void this._openSubRange();
                this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength);
              }
              var n2 = e3.loaded - this._lastTimeLoaded;
              this._lastTimeLoaded = e3.loaded, this._speedSampler.addBytes(n2);
            }
          }, t2.prototype._normalizeSpeed = function(e3) {
            var t3 = this._chunkSizeKBList, i2 = t3.length - 1, n2 = 0, a2 = 0, r2 = i2;
            if (e3 < t3[0])
              return t3[0];
            for (; a2 <= r2; ) {
              if ((n2 = a2 + Math.floor((r2 - a2) / 2)) === i2 || e3 >= t3[n2] && e3 < t3[n2 + 1])
                return t3[n2];
              t3[n2] < e3 ? a2 = n2 + 1 : r2 = n2 - 1;
            }
          }, t2.prototype._onLoad = function(e3) {
            if (this._status !== s.c.kError)
              if (this._waitForTotalLength)
                this._waitForTotalLength = false;
              else {
                this._lastTimeLoaded = 0;
                var t3 = this._speedSampler.lastSecondKBps;
                if (0 === t3 && (this._zeroSpeedChunkCount++, this._zeroSpeedChunkCount >= 3 && (t3 = this._speedSampler.currentKBps)), 0 !== t3) {
                  var i2 = this._normalizeSpeed(t3);
                  this._currentSpeedNormalized !== i2 && (this._currentSpeedNormalized = i2, this._currentChunkSizeKB = i2);
                }
                var n2 = e3.target.response, a2 = this._range.from + this._receivedLength;
                this._receivedLength += n2.byteLength;
                var r2 = false;
                null != this._contentLength && this._receivedLength < this._contentLength ? this._openSubRange() : r2 = true, this._onDataArrival && this._onDataArrival(n2, a2, this._receivedLength), r2 && (this._status = s.c.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1));
              }
          }, t2.prototype._onXhrError = function(e3) {
            this._status = s.c.kError;
            var t3 = 0, i2 = null;
            if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength ? (t3 = s.b.EARLY_EOF, i2 = { code: -1, msg: "RangeLoader meet Early-Eof" }) : (t3 = s.b.EXCEPTION, i2 = { code: -1, msg: e3.constructor.name + " " + e3.type }), !this._onError)
              throw new d.d(i2.msg);
            this._onError(t3, i2);
          }, t2;
        }(s.a), p = function() {
          var e2 = function(t2, i2) {
            return (e2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var i3 in t3)
                t3.hasOwnProperty(i3) && (e3[i3] = t3[i3]);
            })(t2, i2);
          };
          return function(t2, i2) {
            function n2() {
              this.constructor = t2;
            }
            e2(t2, i2), t2.prototype = null === i2 ? Object.create(i2) : (n2.prototype = i2.prototype, new n2());
          };
        }(), m = function(e2) {
          function t2() {
            var t3 = e2.call(this, "websocket-loader") || this;
            return t3.TAG = "WebSocketLoader", t3._needStash = true, t3._ws = null, t3._requestAbort = false, t3._receivedLength = 0, t3;
          }
          return p(t2, e2), t2.isSupported = function() {
            try {
              return void 0 !== self.WebSocket;
            } catch (e3) {
              return false;
            }
          }, t2.prototype.destroy = function() {
            this._ws && this.abort(), e2.prototype.destroy.call(this);
          }, t2.prototype.open = function(e3) {
            try {
              var t3 = this._ws = new self.WebSocket(e3.url);
              t3.binaryType = "arraybuffer", t3.onopen = this._onWebSocketOpen.bind(this), t3.onclose = this._onWebSocketClose.bind(this), t3.onmessage = this._onWebSocketMessage.bind(this), t3.onerror = this._onWebSocketError.bind(this), this._status = s.c.kConnecting;
            } catch (e4) {
              this._status = s.c.kError;
              var i2 = { code: e4.code, msg: e4.message };
              if (!this._onError)
                throw new d.d(i2.msg);
              this._onError(s.b.EXCEPTION, i2);
            }
          }, t2.prototype.abort = function() {
            var e3 = this._ws;
            !e3 || 0 !== e3.readyState && 1 !== e3.readyState || (this._requestAbort = true, e3.close()), this._ws = null, this._status = s.c.kComplete;
          }, t2.prototype._onWebSocketOpen = function(e3) {
            this._status = s.c.kBuffering;
          }, t2.prototype._onWebSocketClose = function(e3) {
            true !== this._requestAbort ? (this._status = s.c.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1)) : this._requestAbort = false;
          }, t2.prototype._onWebSocketMessage = function(e3) {
            var t3 = this;
            if (e3.data instanceof ArrayBuffer)
              this._dispatchArrayBuffer(e3.data);
            else if (e3.data instanceof Blob) {
              var i2 = new FileReader();
              i2.onload = function() {
                t3._dispatchArrayBuffer(i2.result);
              }, i2.readAsArrayBuffer(e3.data);
            } else {
              this._status = s.c.kError;
              var n2 = { code: -1, msg: "Unsupported WebSocket message type: " + e3.data.constructor.name };
              if (!this._onError)
                throw new d.d(n2.msg);
              this._onError(s.b.EXCEPTION, n2);
            }
          }, t2.prototype._dispatchArrayBuffer = function(e3) {
            var t3 = e3, i2 = this._receivedLength;
            this._receivedLength += t3.byteLength, this._onDataArrival && this._onDataArrival(t3, i2, this._receivedLength);
          }, t2.prototype._onWebSocketError = function(e3) {
            this._status = s.c.kError;
            var t3 = { code: e3.code, msg: e3.message };
            if (!this._onError)
              throw new d.d(t3.msg);
            this._onError(s.b.EXCEPTION, t3);
          }, t2;
        }(s.a), g = function() {
          function e2(e3) {
            this._zeroStart = e3 || false;
          }
          return e2.prototype.getConfig = function(e3, t2) {
            var i2 = {};
            if (0 !== t2.from || -1 !== t2.to) {
              var n2 = void 0;
              n2 = -1 !== t2.to ? "bytes=" + t2.from.toString() + "-" + t2.to.toString() : "bytes=" + t2.from.toString() + "-", i2.Range = n2;
            } else
              this._zeroStart && (i2.Range = "bytes=0-");
            return { url: e3, headers: i2 };
          }, e2.prototype.removeURLParameters = function(e3) {
            return e3;
          }, e2;
        }(), v = function() {
          function e2(e3, t2) {
            this._startName = e3, this._endName = t2;
          }
          return e2.prototype.getConfig = function(e3, t2) {
            var i2 = e3;
            if (0 !== t2.from || -1 !== t2.to) {
              var n2 = true;
              -1 === i2.indexOf("?") && (i2 += "?", n2 = false), n2 && (i2 += "&"), i2 += this._startName + "=" + t2.from.toString(), -1 !== t2.to && (i2 += "&" + this._endName + "=" + t2.to.toString());
            }
            return { url: i2, headers: {} };
          }, e2.prototype.removeURLParameters = function(e3) {
            var t2 = e3.split("?")[0], i2 = void 0, n2 = e3.indexOf("?");
            -1 !== n2 && (i2 = e3.substring(n2 + 1));
            var a2 = "";
            if (null != i2 && i2.length > 0)
              for (var r2 = i2.split("&"), s2 = 0; s2 < r2.length; s2++) {
                var o2 = r2[s2].split("="), d2 = s2 > 0;
                o2[0] !== this._startName && o2[0] !== this._endName && (d2 && (a2 += "&"), a2 += r2[s2]);
              }
            return 0 === a2.length ? t2 : t2 + "?" + a2;
          }, e2;
        }(), y = function() {
          function e2(e3, t2, i2) {
            this.TAG = "IOController", this._config = t2, this._extraData = i2, this._stashInitialSize = 65536, null != t2.stashInitialSize && t2.stashInitialSize > 0 && (this._stashInitialSize = t2.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 3145728, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, this._enableStash = true, false === t2.enableStashBuffer && (this._enableStash = false), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = e3, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(e3.url), this._refTotalLength = e3.filesize ? e3.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = false, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new r(), this._speedNormalizeList = [32, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096], this._isEarlyEofReconnecting = false, this._paused = false, this._resumeFrom = 0, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader();
          }
          return e2.prototype.destroy = function() {
            this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = false, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null;
          }, e2.prototype.isWorking = function() {
            return this._loader && this._loader.isWorking() && !this._paused;
          }, e2.prototype.isPaused = function() {
            return this._paused;
          }, Object.defineProperty(e2.prototype, "status", { get: function() {
            return this._loader.status;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "extraData", { get: function() {
            return this._extraData;
          }, set: function(e3) {
            this._extraData = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onDataArrival", { get: function() {
            return this._onDataArrival;
          }, set: function(e3) {
            this._onDataArrival = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onSeeked", { get: function() {
            return this._onSeeked;
          }, set: function(e3) {
            this._onSeeked = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onError", { get: function() {
            return this._onError;
          }, set: function(e3) {
            this._onError = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onComplete", { get: function() {
            return this._onComplete;
          }, set: function(e3) {
            this._onComplete = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onRedirect", { get: function() {
            return this._onRedirect;
          }, set: function(e3) {
            this._onRedirect = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "onRecoveredEarlyEof", { get: function() {
            return this._onRecoveredEarlyEof;
          }, set: function(e3) {
            this._onRecoveredEarlyEof = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "currentURL", { get: function() {
            return this._dataSource.url;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "hasRedirect", { get: function() {
            return null != this._redirectedURL || null != this._dataSource.redirectedURL;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "currentRedirectedURL", { get: function() {
            return this._redirectedURL || this._dataSource.redirectedURL;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "currentSpeed", { get: function() {
            return this._loaderClass === f ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "loaderType", { get: function() {
            return this._loader.type;
          }, enumerable: false, configurable: true }), e2.prototype._selectSeekHandler = function() {
            var e3 = this._config;
            if ("range" === e3.seekType)
              this._seekHandler = new g(this._config.rangeLoadZeroStart);
            else if ("param" === e3.seekType) {
              var t2 = e3.seekParamStart || "bstart", i2 = e3.seekParamEnd || "bend";
              this._seekHandler = new v(t2, i2);
            } else {
              if ("custom" !== e3.seekType)
                throw new d.b("Invalid seekType in config: " + e3.seekType);
              if ("function" != typeof e3.customSeekHandler)
                throw new d.b("Custom seekType specified in config but invalid customSeekHandler!");
              this._seekHandler = new e3.customSeekHandler();
            }
          }, e2.prototype._selectLoader = function() {
            if (null != this._config.customLoader)
              this._loaderClass = this._config.customLoader;
            else if (this._isWebSocketURL)
              this._loaderClass = m;
            else if (h.isSupported())
              this._loaderClass = h;
            else if (u.isSupported())
              this._loaderClass = u;
            else {
              if (!f.isSupported())
                throw new d.d("Your browser doesn't support xhr with arraybuffer responseType!");
              this._loaderClass = f;
            }
          }, e2.prototype._createLoader = function() {
            this._loader = new this._loaderClass(this._seekHandler, this._config), false === this._loader.needStashBuffer && (this._enableStash = false), this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this);
          }, e2.prototype.open = function(e3) {
            this._currentRange = { from: 0, to: -1 }, e3 && (this._currentRange.from = e3), this._speedSampler.reset(), e3 || (this._fullRequestFlag = true), this._loader.open(this._dataSource, Object.assign({}, this._currentRange));
          }, e2.prototype.abort = function() {
            this._loader.abort(), this._paused && (this._paused = false, this._resumeFrom = 0);
          }, e2.prototype.pause = function() {
            this.isWorking() && (this._loader.abort(), 0 !== this._stashUsed ? (this._resumeFrom = this._stashByteStart, this._currentRange.to = this._stashByteStart - 1) : this._resumeFrom = this._currentRange.to + 1, this._stashUsed = 0, this._stashByteStart = 0, this._paused = true);
          }, e2.prototype.resume = function() {
            if (this._paused) {
              this._paused = false;
              var e3 = this._resumeFrom;
              this._resumeFrom = 0, this._internalSeek(e3, true);
            }
          }, e2.prototype.seek = function(e3) {
            this._paused = false, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(e3, true);
          }, e2.prototype._internalSeek = function(e3, t2) {
            this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(t2), this._loader.destroy(), this._loader = null;
            var i2 = { from: e3, to: -1 };
            this._currentRange = { from: i2.from, to: -1 }, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, i2), this._onSeeked && this._onSeeked();
          }, e2.prototype.updateUrl = function(e3) {
            if (!e3 || "string" != typeof e3 || 0 === e3.length)
              throw new d.b("Url must be a non-empty string!");
            this._dataSource.url = e3;
          }, e2.prototype._expandBuffer = function(e3) {
            for (var t2 = this._stashSize; t2 + 1048576 < e3; )
              t2 *= 2;
            if ((t2 += 1048576) !== this._bufferSize) {
              var i2 = new ArrayBuffer(t2);
              if (this._stashUsed > 0) {
                var n2 = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
                new Uint8Array(i2, 0, t2).set(n2, 0);
              }
              this._stashBuffer = i2, this._bufferSize = t2;
            }
          }, e2.prototype._normalizeSpeed = function(e3) {
            var t2 = this._speedNormalizeList, i2 = t2.length - 1, n2 = 0, a2 = 0, r2 = i2;
            if (e3 < t2[0])
              return t2[0];
            for (; a2 <= r2; ) {
              if ((n2 = a2 + Math.floor((r2 - a2) / 2)) === i2 || e3 >= t2[n2] && e3 < t2[n2 + 1])
                return t2[n2];
              t2[n2] < e3 ? a2 = n2 + 1 : r2 = n2 - 1;
            }
          }, e2.prototype._adjustStashSize = function(e3) {
            var t2 = 0;
            (t2 = this._config.isLive ? e3 / 8 : e3 < 512 ? e3 : e3 >= 512 && e3 <= 1024 ? Math.floor(1.5 * e3) : 2 * e3) > 8192 && (t2 = 8192);
            var i2 = 1024 * t2 + 1048576;
            this._bufferSize < i2 && this._expandBuffer(i2), this._stashSize = 1024 * t2;
          }, e2.prototype._dispatchChunks = function(e3, t2) {
            return this._currentRange.to = t2 + e3.byteLength - 1, this._onDataArrival(e3, t2);
          }, e2.prototype._onURLRedirect = function(e3) {
            this._redirectedURL = e3, this._onRedirect && this._onRedirect(e3);
          }, e2.prototype._onContentLengthKnown = function(e3) {
            e3 && this._fullRequestFlag && (this._totalLength = e3, this._fullRequestFlag = false);
          }, e2.prototype._onLoaderChunkArrival = function(e3, t2, i2) {
            if (!this._onDataArrival)
              throw new d.a("IOController: No existing consumer (onDataArrival) callback!");
            if (!this._paused) {
              this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = false, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler.addBytes(e3.byteLength);
              var n2 = this._speedSampler.lastSecondKBps;
              if (0 !== n2) {
                var a2 = this._normalizeSpeed(n2);
                this._speedNormalized !== a2 && (this._speedNormalized = a2, this._adjustStashSize(a2));
              }
              if (this._enableStash)
                if (0 === this._stashUsed && 0 === this._stashByteStart && (this._stashByteStart = t2), this._stashUsed + e3.byteLength <= this._stashSize) {
                  (o2 = new Uint8Array(this._stashBuffer, 0, this._stashSize)).set(new Uint8Array(e3), this._stashUsed), this._stashUsed += e3.byteLength;
                } else {
                  o2 = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                  if (this._stashUsed > 0) {
                    var r2 = this._stashBuffer.slice(0, this._stashUsed);
                    if ((_2 = this._dispatchChunks(r2, this._stashByteStart)) < r2.byteLength) {
                      if (_2 > 0) {
                        h2 = new Uint8Array(r2, _2);
                        o2.set(h2, 0), this._stashUsed = h2.byteLength, this._stashByteStart += _2;
                      }
                    } else
                      this._stashUsed = 0, this._stashByteStart += _2;
                    this._stashUsed + e3.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + e3.byteLength), o2 = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), o2.set(new Uint8Array(e3), this._stashUsed), this._stashUsed += e3.byteLength;
                  } else {
                    if ((_2 = this._dispatchChunks(e3, t2)) < e3.byteLength)
                      (s2 = e3.byteLength - _2) > this._bufferSize && (this._expandBuffer(s2), o2 = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), o2.set(new Uint8Array(e3, _2), 0), this._stashUsed += s2, this._stashByteStart = t2 + _2;
                  }
                }
              else if (0 === this._stashUsed) {
                var s2;
                if ((_2 = this._dispatchChunks(e3, t2)) < e3.byteLength)
                  (s2 = e3.byteLength - _2) > this._bufferSize && this._expandBuffer(s2), (o2 = new Uint8Array(this._stashBuffer, 0, this._bufferSize)).set(new Uint8Array(e3, _2), 0), this._stashUsed += s2, this._stashByteStart = t2 + _2;
              } else {
                var o2, _2;
                if (this._stashUsed + e3.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + e3.byteLength), (o2 = new Uint8Array(this._stashBuffer, 0, this._bufferSize)).set(new Uint8Array(e3), this._stashUsed), this._stashUsed += e3.byteLength, (_2 = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart)) < this._stashUsed && _2 > 0) {
                  var h2 = new Uint8Array(this._stashBuffer, _2);
                  o2.set(h2, 0);
                }
                this._stashUsed -= _2, this._stashByteStart += _2;
              }
            }
          }, e2.prototype._flushStashBuffer = function(e3) {
            if (this._stashUsed > 0) {
              var t2 = this._stashBuffer.slice(0, this._stashUsed), i2 = this._dispatchChunks(t2, this._stashByteStart), n2 = t2.byteLength - i2;
              if (i2 < t2.byteLength) {
                if (!e3) {
                  if (i2 > 0) {
                    var r2 = new Uint8Array(this._stashBuffer, 0, this._bufferSize), s2 = new Uint8Array(t2, i2);
                    r2.set(s2, 0), this._stashUsed = s2.byteLength, this._stashByteStart += i2;
                  }
                  return 0;
                }
                a.a.w(this.TAG, n2 + " bytes unconsumed data remain when flush buffer, dropped");
              }
              return this._stashUsed = 0, this._stashByteStart = 0, n2;
            }
            return 0;
          }, e2.prototype._onLoaderComplete = function(e3, t2) {
            this._flushStashBuffer(true), this._onComplete && this._onComplete(this._extraData);
          }, e2.prototype._onLoaderError = function(e3, t2) {
            switch (a.a.e(this.TAG, "Loader error, code = " + t2.code + ", msg = " + t2.msg), this._flushStashBuffer(false), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = false, e3 = s.b.UNRECOVERABLE_EARLY_EOF), e3) {
              case s.b.EARLY_EOF:
                if (!this._config.isLive && this._totalLength) {
                  var i2 = this._currentRange.to + 1;
                  return void (i2 < this._totalLength && (a.a.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = true, this._internalSeek(i2, false)));
                }
                e3 = s.b.UNRECOVERABLE_EARLY_EOF;
                break;
              case s.b.UNRECOVERABLE_EARLY_EOF:
              case s.b.CONNECTING_TIMEOUT:
              case s.b.HTTP_STATUS_CODE_INVALID:
              case s.b.EXCEPTION:
            }
            if (!this._onError)
              throw new d.d("IOException: " + t2.msg);
            this._onError(e3, t2);
          }, e2;
        }();
        t.a = y;
      }, function(e, t, i) {
        "use strict";
        var n = function() {
          function e2() {
          }
          return e2.install = function() {
            Object.setPrototypeOf = Object.setPrototypeOf || function(e3, t2) {
              return e3.__proto__ = t2, e3;
            }, Object.assign = Object.assign || function(e3) {
              if (null == e3)
                throw new TypeError("Cannot convert undefined or null to object");
              for (var t2 = Object(e3), i2 = 1; i2 < arguments.length; i2++) {
                var n2 = arguments[i2];
                if (null != n2)
                  for (var a in n2)
                    n2.hasOwnProperty(a) && (t2[a] = n2[a]);
              }
              return t2;
            }, "function" != typeof self.Promise && i(15).polyfill();
          }, e2;
        }();
        n.install(), t.a = n;
      }, function(e, t, i) {
        function n(e2) {
          var t2 = {};
          function i2(n3) {
            if (t2[n3])
              return t2[n3].exports;
            var a2 = t2[n3] = { i: n3, l: false, exports: {} };
            return e2[n3].call(a2.exports, a2, a2.exports, i2), a2.l = true, a2.exports;
          }
          i2.m = e2, i2.c = t2, i2.i = function(e3) {
            return e3;
          }, i2.d = function(e3, t3, n3) {
            i2.o(e3, t3) || Object.defineProperty(e3, t3, { configurable: false, enumerable: true, get: n3 });
          }, i2.r = function(e3) {
            Object.defineProperty(e3, "__esModule", { value: true });
          }, i2.n = function(e3) {
            var t3 = e3 && e3.__esModule ? function() {
              return e3.default;
            } : function() {
              return e3;
            };
            return i2.d(t3, "a", t3), t3;
          }, i2.o = function(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }, i2.p = "/", i2.oe = function(e3) {
            throw console.error(e3), e3;
          };
          var n2 = i2(i2.s = ENTRY_MODULE);
          return n2.default || n2;
        }
        function a(e2) {
          return (e2 + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        function r(e2, t2, n2) {
          var r2 = {};
          r2[n2] = [];
          var s2 = t2.toString(), o = s2.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
          if (!o)
            return r2;
          for (var d, _ = o[1], h = new RegExp("(\\\\n|\\W)" + a(_) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); d = h.exec(s2); )
            "dll-reference" !== d[3] && r2[n2].push(d[3]);
          for (h = new RegExp("\\(" + a(_) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)', "g"); d = h.exec(s2); )
            e2[d[2]] || (r2[n2].push(d[1]), e2[d[2]] = i(d[1]).m), r2[d[2]] = r2[d[2]] || [], r2[d[2]].push(d[4]);
          for (var c, u = Object.keys(r2), l = 0; l < u.length; l++)
            for (var f = 0; f < r2[u[l]].length; f++)
              c = r2[u[l]][f], isNaN(1 * c) || (r2[u[l]][f] = 1 * r2[u[l]][f]);
          return r2;
        }
        function s(e2) {
          return Object.keys(e2).reduce(function(t2, i2) {
            return t2 || e2[i2].length > 0;
          }, false);
        }
        e.exports = function(e2, t2) {
          t2 = t2 || {};
          var a2 = { main: i.m }, o = t2.all ? { main: Object.keys(a2.main) } : function(e3, t3) {
            for (var i2 = { main: [t3] }, n2 = { main: [] }, a3 = { main: {} }; s(i2); )
              for (var o2 = Object.keys(i2), d2 = 0; d2 < o2.length; d2++) {
                var _2 = o2[d2], h2 = i2[_2].pop();
                if (a3[_2] = a3[_2] || {}, !a3[_2][h2] && e3[_2][h2]) {
                  a3[_2][h2] = true, n2[_2] = n2[_2] || [], n2[_2].push(h2);
                  for (var c2 = r(e3, e3[_2][h2], _2), u = Object.keys(c2), l = 0; l < u.length; l++)
                    i2[u[l]] = i2[u[l]] || [], i2[u[l]] = i2[u[l]].concat(c2[u[l]]);
                }
              }
            return n2;
          }(a2, e2), d = "";
          Object.keys(o).filter(function(e3) {
            return "main" !== e3;
          }).forEach(function(e3) {
            for (var t3 = 0; o[e3][t3]; )
              t3++;
            o[e3].push(t3), a2[e3][t3] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", d = d + "var " + e3 + " = (" + n.toString().replace("ENTRY_MODULE", JSON.stringify(t3)) + ")({" + o[e3].map(function(t4) {
              return JSON.stringify(t4) + ": " + a2[e3][t4].toString();
            }).join(",") + "});\n";
          }), d = d + "new ((" + n.toString().replace("ENTRY_MODULE", JSON.stringify(e2)) + ")({" + o.main.map(function(e3) {
            return JSON.stringify(e3) + ": " + a2.main[e3].toString();
          }).join(",") + "}))(self);";
          var _ = new window.Blob([d], { type: "text/javascript" });
          if (t2.bare)
            return _;
          var h = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(_), c = new window.Worker(h);
          return c.objectURL = h, c;
        };
      }, function(e, t, i) {
        e.exports = i(19).default;
      }, function(e, t, i) {
        (function(t2, i2) {
          var n;
          n = function() {
            "use strict";
            function e2(e3) {
              return "function" == typeof e3;
            }
            var n2 = Array.isArray ? Array.isArray : function(e3) {
              return "[object Array]" === Object.prototype.toString.call(e3);
            }, a = 0, r = void 0, s = void 0, o = function(e3, t3) {
              f[a] = e3, f[a + 1] = t3, 2 === (a += 2) && (s ? s(p) : b());
            }, d = "undefined" != typeof window ? window : void 0, _ = d || {}, h = _.MutationObserver || _.WebKitMutationObserver, c = "undefined" == typeof self && void 0 !== t2 && "[object process]" === {}.toString.call(t2), u = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
            function l() {
              var e3 = setTimeout;
              return function() {
                return e3(p, 1);
              };
            }
            var f = new Array(1e3);
            function p() {
              for (var e3 = 0; e3 < a; e3 += 2)
                (0, f[e3])(f[e3 + 1]), f[e3] = void 0, f[e3 + 1] = void 0;
              a = 0;
            }
            var m, g, v, y, b = void 0;
            function S(e3, t3) {
              var i3 = this, n3 = new this.constructor(R);
              void 0 === n3[A] && P(n3);
              var a2 = i3._state;
              if (a2) {
                var r2 = arguments[a2 - 1];
                o(function() {
                  return I(a2, n3, r2, i3._result);
                });
              } else
                C(i3, n3, e3, t3);
              return n3;
            }
            function E(e3) {
              if (e3 && "object" == typeof e3 && e3.constructor === this)
                return e3;
              var t3 = new this(R);
              return L(t3, e3), t3;
            }
            c ? b = function() {
              return t2.nextTick(p);
            } : h ? (g = 0, v = new h(p), y = document.createTextNode(""), v.observe(y, { characterData: true }), b = function() {
              y.data = g = ++g % 2;
            }) : u ? ((m = new MessageChannel()).port1.onmessage = p, b = function() {
              return m.port2.postMessage(0);
            }) : b = void 0 === d ? function() {
              try {
                var e3 = Function("return this")().require("vertx");
                return void 0 !== (r = e3.runOnLoop || e3.runOnContext) ? function() {
                  r(p);
                } : l();
              } catch (e4) {
                return l();
              }
            }() : l();
            var A = Math.random().toString(36).substring(2);
            function R() {
            }
            function T(t3, i3, n3) {
              i3.constructor === t3.constructor && n3 === S && i3.constructor.resolve === E ? function(e3, t4) {
                1 === t4._state ? k(e3, t4._result) : 2 === t4._state ? D(e3, t4._result) : C(t4, void 0, function(t5) {
                  return L(e3, t5);
                }, function(t5) {
                  return D(e3, t5);
                });
              }(t3, i3) : void 0 === n3 ? k(t3, i3) : e2(n3) ? function(e3, t4, i4) {
                o(function(e4) {
                  var n4 = false, a2 = function(e5, t5, i5, n5) {
                    try {
                      e5.call(t5, i5, n5);
                    } catch (e6) {
                      return e6;
                    }
                  }(i4, t4, function(i5) {
                    n4 || (n4 = true, t4 !== i5 ? L(e4, i5) : k(e4, i5));
                  }, function(t5) {
                    n4 || (n4 = true, D(e4, t5));
                  }, e4._label);
                  !n4 && a2 && (n4 = true, D(e4, a2));
                }, e3);
              }(t3, i3, n3) : k(t3, i3);
            }
            function L(e3, t3) {
              if (e3 === t3)
                D(e3, new TypeError("You cannot resolve a promise with itself"));
              else if (a2 = typeof (n3 = t3), null === n3 || "object" !== a2 && "function" !== a2)
                k(e3, t3);
              else {
                var i3 = void 0;
                try {
                  i3 = t3.then;
                } catch (t4) {
                  return void D(e3, t4);
                }
                T(e3, t3, i3);
              }
              var n3, a2;
            }
            function w(e3) {
              e3._onerror && e3._onerror(e3._result), B(e3);
            }
            function k(e3, t3) {
              void 0 === e3._state && (e3._result = t3, e3._state = 1, 0 !== e3._subscribers.length && o(B, e3));
            }
            function D(e3, t3) {
              void 0 === e3._state && (e3._state = 2, e3._result = t3, o(w, e3));
            }
            function C(e3, t3, i3, n3) {
              var a2 = e3._subscribers, r2 = a2.length;
              e3._onerror = null, a2[r2] = t3, a2[r2 + 1] = i3, a2[r2 + 2] = n3, 0 === r2 && e3._state && o(B, e3);
            }
            function B(e3) {
              var t3 = e3._subscribers, i3 = e3._state;
              if (0 !== t3.length) {
                for (var n3 = void 0, a2 = void 0, r2 = e3._result, s2 = 0; s2 < t3.length; s2 += 3)
                  n3 = t3[s2], a2 = t3[s2 + i3], n3 ? I(i3, n3, a2, r2) : a2(r2);
                e3._subscribers.length = 0;
              }
            }
            function I(t3, i3, n3, a2) {
              var r2 = e2(n3), s2 = void 0, o2 = void 0, d2 = true;
              if (r2) {
                try {
                  s2 = n3(a2);
                } catch (e3) {
                  d2 = false, o2 = e3;
                }
                if (i3 === s2)
                  return void D(i3, new TypeError("A promises callback cannot return that same promise."));
              } else
                s2 = a2;
              void 0 !== i3._state || (r2 && d2 ? L(i3, s2) : false === d2 ? D(i3, o2) : 1 === t3 ? k(i3, s2) : 2 === t3 && D(i3, s2));
            }
            var O = 0;
            function P(e3) {
              e3[A] = O++, e3._state = void 0, e3._result = void 0, e3._subscribers = [];
            }
            var M = function() {
              function e3(e4, t3) {
                this._instanceConstructor = e4, this.promise = new e4(R), this.promise[A] || P(this.promise), n2(t3) ? (this.length = t3.length, this._remaining = t3.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t3), 0 === this._remaining && k(this.promise, this._result))) : D(this.promise, new Error("Array Methods must be provided an Array"));
              }
              return e3.prototype._enumerate = function(e4) {
                for (var t3 = 0; void 0 === this._state && t3 < e4.length; t3++)
                  this._eachEntry(e4[t3], t3);
              }, e3.prototype._eachEntry = function(e4, t3) {
                var i3 = this._instanceConstructor, n3 = i3.resolve;
                if (n3 === E) {
                  var a2 = void 0, r2 = void 0, s2 = false;
                  try {
                    a2 = e4.then;
                  } catch (e5) {
                    s2 = true, r2 = e5;
                  }
                  if (a2 === S && void 0 !== e4._state)
                    this._settledAt(e4._state, t3, e4._result);
                  else if ("function" != typeof a2)
                    this._remaining--, this._result[t3] = e4;
                  else if (i3 === x) {
                    var o2 = new i3(R);
                    s2 ? D(o2, r2) : T(o2, e4, a2), this._willSettleAt(o2, t3);
                  } else
                    this._willSettleAt(new i3(function(t4) {
                      return t4(e4);
                    }), t3);
                } else
                  this._willSettleAt(n3(e4), t3);
              }, e3.prototype._settledAt = function(e4, t3, i3) {
                var n3 = this.promise;
                void 0 === n3._state && (this._remaining--, 2 === e4 ? D(n3, i3) : this._result[t3] = i3), 0 === this._remaining && k(n3, this._result);
              }, e3.prototype._willSettleAt = function(e4, t3) {
                var i3 = this;
                C(e4, void 0, function(e5) {
                  return i3._settledAt(1, t3, e5);
                }, function(e5) {
                  return i3._settledAt(2, t3, e5);
                });
              }, e3;
            }(), x = function() {
              function t3(e3) {
                this[A] = O++, this._result = this._state = void 0, this._subscribers = [], R !== e3 && ("function" != typeof e3 && function() {
                  throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }(), this instanceof t3 ? function(e4, t4) {
                  try {
                    t4(function(t5) {
                      L(e4, t5);
                    }, function(t5) {
                      D(e4, t5);
                    });
                  } catch (t5) {
                    D(e4, t5);
                  }
                }(this, e3) : function() {
                  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }());
              }
              return t3.prototype.catch = function(e3) {
                return this.then(null, e3);
              }, t3.prototype.finally = function(t4) {
                var i3 = this.constructor;
                return e2(t4) ? this.then(function(e3) {
                  return i3.resolve(t4()).then(function() {
                    return e3;
                  });
                }, function(e3) {
                  return i3.resolve(t4()).then(function() {
                    throw e3;
                  });
                }) : this.then(t4, t4);
              }, t3;
            }();
            return x.prototype.then = S, x.all = function(e3) {
              return new M(this, e3).promise;
            }, x.race = function(e3) {
              var t3 = this;
              return n2(e3) ? new t3(function(i3, n3) {
                for (var a2 = e3.length, r2 = 0; r2 < a2; r2++)
                  t3.resolve(e3[r2]).then(i3, n3);
              }) : new t3(function(e4, t4) {
                return t4(new TypeError("You must pass an array to race."));
              });
            }, x.resolve = E, x.reject = function(e3) {
              var t3 = new this(R);
              return D(t3, e3), t3;
            }, x._setScheduler = function(e3) {
              s = e3;
            }, x._setAsap = function(e3) {
              o = e3;
            }, x._asap = o, x.polyfill = function() {
              var e3 = void 0;
              if (void 0 !== i2)
                e3 = i2;
              else if ("undefined" != typeof self)
                e3 = self;
              else
                try {
                  e3 = Function("return this")();
                } catch (e4) {
                  throw new Error("polyfill failed because global object is unavailable in this environment");
                }
              var t3 = e3.Promise;
              if (t3) {
                var n3 = null;
                try {
                  n3 = Object.prototype.toString.call(t3.resolve());
                } catch (e4) {
                }
                if ("[object Promise]" === n3 && !t3.cast)
                  return;
              }
              e3.Promise = x;
            }, x.Promise = x, x;
          }, e.exports = n();
        }).call(this, i(16), i(17));
      }, function(e, t) {
        var i, n, a = e.exports = {};
        function r() {
          throw new Error("setTimeout has not been defined");
        }
        function s() {
          throw new Error("clearTimeout has not been defined");
        }
        function o(e2) {
          if (i === setTimeout)
            return setTimeout(e2, 0);
          if ((i === r || !i) && setTimeout)
            return i = setTimeout, setTimeout(e2, 0);
          try {
            return i(e2, 0);
          } catch (t2) {
            try {
              return i.call(null, e2, 0);
            } catch (t3) {
              return i.call(this, e2, 0);
            }
          }
        }
        !function() {
          try {
            i = "function" == typeof setTimeout ? setTimeout : r;
          } catch (e2) {
            i = r;
          }
          try {
            n = "function" == typeof clearTimeout ? clearTimeout : s;
          } catch (e2) {
            n = s;
          }
        }();
        var d, _ = [], h = false, c = -1;
        function u() {
          h && d && (h = false, d.length ? _ = d.concat(_) : c = -1, _.length && l());
        }
        function l() {
          if (!h) {
            var e2 = o(u);
            h = true;
            for (var t2 = _.length; t2; ) {
              for (d = _, _ = []; ++c < t2; )
                d && d[c].run();
              c = -1, t2 = _.length;
            }
            d = null, h = false, function(e3) {
              if (n === clearTimeout)
                return clearTimeout(e3);
              if ((n === s || !n) && clearTimeout)
                return n = clearTimeout, clearTimeout(e3);
              try {
                n(e3);
              } catch (t3) {
                try {
                  return n.call(null, e3);
                } catch (t4) {
                  return n.call(this, e3);
                }
              }
            }(e2);
          }
        }
        function f(e2, t2) {
          this.fun = e2, this.array = t2;
        }
        function p() {
        }
        a.nextTick = function(e2) {
          var t2 = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var i2 = 1; i2 < arguments.length; i2++)
              t2[i2 - 1] = arguments[i2];
          _.push(new f(e2, t2)), 1 !== _.length || h || o(l);
        }, f.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, a.title = "browser", a.browser = true, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = p, a.addListener = p, a.once = p, a.off = p, a.removeListener = p, a.removeAllListeners = p, a.emit = p, a.prependListener = p, a.prependOnceListener = p, a.listeners = function(e2) {
          return [];
        }, a.binding = function(e2) {
          throw new Error("process.binding is not supported");
        }, a.cwd = function() {
          return "/";
        }, a.chdir = function(e2) {
          throw new Error("process.chdir is not supported");
        }, a.umask = function() {
          return 0;
        };
      }, function(e, t) {
        var i;
        i = function() {
          return this;
        }();
        try {
          i = i || new Function("return this")();
        } catch (e2) {
          "object" == typeof window && (i = window);
        }
        e.exports = i;
      }, function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i(9), a = i(12), r = i(10), s = i(1);
        t.default = function(e2) {
          var t2 = null, i2 = (function(t3, i3) {
            e2.postMessage({ msg: "logcat_callback", data: { type: t3, logcat: i3 } });
          }).bind(this);
          function o(t3, i3) {
            var n2 = { msg: s.a.INIT_SEGMENT, data: { type: t3, data: i3 } };
            e2.postMessage(n2, [i3.data]);
          }
          function d(t3, i3) {
            var n2 = { msg: s.a.MEDIA_SEGMENT, data: { type: t3, data: i3 } };
            e2.postMessage(n2, [i3.data]);
          }
          function _() {
            var t3 = { msg: s.a.LOADING_COMPLETE };
            e2.postMessage(t3);
          }
          function h() {
            var t3 = { msg: s.a.RECOVERED_EARLY_EOF };
            e2.postMessage(t3);
          }
          function c(t3) {
            var i3 = { msg: s.a.MEDIA_INFO, data: t3 };
            e2.postMessage(i3);
          }
          function u(t3) {
            var i3 = { msg: s.a.METADATA_ARRIVED, data: t3 };
            e2.postMessage(i3);
          }
          function l(t3) {
            var i3 = { msg: s.a.SCRIPTDATA_ARRIVED, data: t3 };
            e2.postMessage(i3);
          }
          function f(t3) {
            var i3 = { msg: s.a.TIMED_ID3_METADATA_ARRIVED, data: t3 };
            e2.postMessage(i3);
          }
          function p(t3) {
            var i3 = { msg: s.a.SMPTE2038_METADATA_ARRIVED, data: t3 };
            e2.postMessage(i3);
          }
          function m(t3) {
            var i3 = { msg: s.a.SCTE35_METADATA_ARRIVED, data: t3 };
            e2.postMessage(i3);
          }
          function g(t3) {
            var i3 = { msg: s.a.PES_PRIVATE_DATA_DESCRIPTOR, data: t3 };
            e2.postMessage(i3);
          }
          function v(t3) {
            var i3 = { msg: s.a.PES_PRIVATE_DATA_ARRIVED, data: t3 };
            e2.postMessage(i3);
          }
          function y(t3) {
            var i3 = { msg: s.a.STATISTICS_INFO, data: t3 };
            e2.postMessage(i3);
          }
          function b(t3, i3) {
            e2.postMessage({ msg: s.a.IO_ERROR, data: { type: t3, info: i3 } });
          }
          function S(t3, i3) {
            e2.postMessage({ msg: s.a.DEMUX_ERROR, data: { type: t3, info: i3 } });
          }
          function E(t3) {
            e2.postMessage({ msg: s.a.RECOMMEND_SEEKPOINT, data: t3 });
          }
          a.a.install(), e2.addEventListener("message", function(a2) {
            switch (a2.data.cmd) {
              case "init":
                (t2 = new r.a(a2.data.param[0], a2.data.param[1])).on(s.a.IO_ERROR, b.bind(this)), t2.on(s.a.DEMUX_ERROR, S.bind(this)), t2.on(s.a.INIT_SEGMENT, o.bind(this)), t2.on(s.a.MEDIA_SEGMENT, d.bind(this)), t2.on(s.a.LOADING_COMPLETE, _.bind(this)), t2.on(s.a.RECOVERED_EARLY_EOF, h.bind(this)), t2.on(s.a.MEDIA_INFO, c.bind(this)), t2.on(s.a.METADATA_ARRIVED, u.bind(this)), t2.on(s.a.SCRIPTDATA_ARRIVED, l.bind(this)), t2.on(s.a.TIMED_ID3_METADATA_ARRIVED, f.bind(this)), t2.on(s.a.SMPTE2038_METADATA_ARRIVED, p.bind(this)), t2.on(s.a.SCTE35_METADATA_ARRIVED, m.bind(this)), t2.on(s.a.PES_PRIVATE_DATA_DESCRIPTOR, g.bind(this)), t2.on(s.a.PES_PRIVATE_DATA_ARRIVED, v.bind(this)), t2.on(s.a.STATISTICS_INFO, y.bind(this)), t2.on(s.a.RECOMMEND_SEEKPOINT, E.bind(this));
                break;
              case "destroy":
                t2 && (t2.destroy(), t2 = null), e2.postMessage({ msg: "destroyed" });
                break;
              case "start":
                t2.start();
                break;
              case "stop":
                t2.stop();
                break;
              case "seek":
                t2.seek(a2.data.param);
                break;
              case "pause":
                t2.pause();
                break;
              case "resume":
                t2.resume();
                break;
              case "logging_config":
                var A = a2.data.param;
                n.a.applyConfig(A), true === A.enableCallback ? n.a.addLogListener(i2) : n.a.removeLogListener(i2);
            }
          });
        };
      }, function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i(12), a = i(11), r = { enableWorker: false, enableStashBuffer: true, stashInitialSize: void 0, isLive: false, liveBufferLatencyChasing: false, liveBufferLatencyMaxLatency: 1.5, liveBufferLatencyMinRemain: 0.5, lazyLoad: true, lazyLoadMaxDuration: 180, lazyLoadRecoverDuration: 30, deferLoadAfterSourceOpen: true, autoCleanupMaxBackwardDuration: 180, autoCleanupMinBackwardDuration: 120, statisticsInfoReportInterval: 600, fixAudioTimestampGap: true, accurateSeek: false, seekType: "range", seekParamStart: "bstart", seekParamEnd: "bend", rangeLoadZeroStart: false, customSeekHandler: void 0, reuseRedirectedURL: false, headers: void 0, customLoader: void 0 };
        function s() {
          return Object.assign({}, r);
        }
        var o = function() {
          function e2() {
          }
          return e2.supportMSEH264Playback = function() {
            return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
          }, e2.supportMSEH265Playback = function() {
            return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="hvc1.1.6.L93.B0"');
          }, e2.supportNetworkStreamIO = function() {
            var e3 = new a.a({}, s()), t2 = e3.loaderType;
            return e3.destroy(), "fetch-stream-loader" == t2 || "xhr-moz-chunked-loader" == t2;
          }, e2.getNetworkLoaderTypeName = function() {
            var e3 = new a.a({}, s()), t2 = e3.loaderType;
            return e3.destroy(), t2;
          }, e2.supportNativeMediaPlayback = function(t2) {
            null == e2.videoElement && (e2.videoElement = window.document.createElement("video"));
            var i2 = e2.videoElement.canPlayType(t2);
            return "probably" === i2 || "maybe" == i2;
          }, e2.getFeatureList = function() {
            var t2 = { msePlayback: false, mseLivePlayback: false, mseH265Playback: false, networkStreamIO: false, networkLoaderName: "", nativeMP4H264Playback: false, nativeMP4H265Playback: false, nativeWebmVP8Playback: false, nativeWebmVP9Playback: false };
            return t2.msePlayback = e2.supportMSEH264Playback(), t2.networkStreamIO = e2.supportNetworkStreamIO(), t2.networkLoaderName = e2.getNetworkLoaderTypeName(), t2.mseLivePlayback = t2.msePlayback && t2.networkStreamIO, t2.mseH265Playback = e2.supportMSEH265Playback(), t2.nativeMP4H264Playback = e2.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'), t2.nativeMP4H265Playback = e2.supportNativeMediaPlayback('video/mp4; codecs="hvc1.1.6.L93.B0"'), t2.nativeWebmVP8Playback = e2.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), t2.nativeWebmVP9Playback = e2.supportNativeMediaPlayback('video/webm; codecs="vp9"'), t2;
          }, e2;
        }(), d = i(2), _ = i(6), h = i.n(_), c = i(0), u = i(4), l = { ERROR: "error", LOADING_COMPLETE: "loading_complete", RECOVERED_EARLY_EOF: "recovered_early_eof", MEDIA_INFO: "media_info", METADATA_ARRIVED: "metadata_arrived", SCRIPTDATA_ARRIVED: "scriptdata_arrived", TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived", SMPTE2038_METADATA_ARRIVED: "smpte2038_metadata_arrived", SCTE35_METADATA_ARRIVED: "scte35_metadata_arrived", PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor", PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived", STATISTICS_INFO: "statistics_info" }, f = i(13), p = i.n(f), m = i(9), g = i(10), v = i(1), y = i(8), b = function() {
          function e2(e3, t2) {
            if (this.TAG = "Transmuxer", this._emitter = new h.a(), t2.enableWorker && "undefined" != typeof Worker)
              try {
                this._worker = p()(18), this._workerDestroying = false, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({ cmd: "init", param: [e3, t2] }), this.e = { onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this) }, m.a.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({ cmd: "logging_config", param: m.a.getConfig() });
              } catch (i3) {
                c.a.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new g.a(e3, t2);
              }
            else
              this._controller = new g.a(e3, t2);
            if (this._controller) {
              var i2 = this._controller;
              i2.on(v.a.IO_ERROR, this._onIOError.bind(this)), i2.on(v.a.DEMUX_ERROR, this._onDemuxError.bind(this)), i2.on(v.a.INIT_SEGMENT, this._onInitSegment.bind(this)), i2.on(v.a.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), i2.on(v.a.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), i2.on(v.a.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), i2.on(v.a.MEDIA_INFO, this._onMediaInfo.bind(this)), i2.on(v.a.METADATA_ARRIVED, this._onMetaDataArrived.bind(this)), i2.on(v.a.SCRIPTDATA_ARRIVED, this._onScriptDataArrived.bind(this)), i2.on(v.a.TIMED_ID3_METADATA_ARRIVED, this._onTimedID3MetadataArrived.bind(this)), i2.on(v.a.SMPTE2038_METADATA_ARRIVED, this._onSMPTE2038MetadataArrived.bind(this)), i2.on(v.a.SCTE35_METADATA_ARRIVED, this._onSCTE35MetadataArrived.bind(this)), i2.on(v.a.PES_PRIVATE_DATA_DESCRIPTOR, this._onPESPrivateDataDescriptor.bind(this)), i2.on(v.a.PES_PRIVATE_DATA_ARRIVED, this._onPESPrivateDataArrived.bind(this)), i2.on(v.a.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), i2.on(v.a.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this));
            }
          }
          return e2.prototype.destroy = function() {
            this._worker ? this._workerDestroying || (this._workerDestroying = true, this._worker.postMessage({ cmd: "destroy" }), m.a.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (this._controller.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null;
          }, e2.prototype.on = function(e3, t2) {
            this._emitter.addListener(e3, t2);
          }, e2.prototype.off = function(e3, t2) {
            this._emitter.removeListener(e3, t2);
          }, e2.prototype.hasWorker = function() {
            return null != this._worker;
          }, e2.prototype.open = function() {
            this._worker ? this._worker.postMessage({ cmd: "start" }) : this._controller.start();
          }, e2.prototype.close = function() {
            this._worker ? this._worker.postMessage({ cmd: "stop" }) : this._controller.stop();
          }, e2.prototype.seek = function(e3) {
            this._worker ? this._worker.postMessage({ cmd: "seek", param: e3 }) : this._controller.seek(e3);
          }, e2.prototype.pause = function() {
            this._worker ? this._worker.postMessage({ cmd: "pause" }) : this._controller.pause();
          }, e2.prototype.resume = function() {
            this._worker ? this._worker.postMessage({ cmd: "resume" }) : this._controller.resume();
          }, e2.prototype._onInitSegment = function(e3, t2) {
            var i2 = this;
            Promise.resolve().then(function() {
              i2._emitter.emit(v.a.INIT_SEGMENT, e3, t2);
            });
          }, e2.prototype._onMediaSegment = function(e3, t2) {
            var i2 = this;
            Promise.resolve().then(function() {
              i2._emitter.emit(v.a.MEDIA_SEGMENT, e3, t2);
            });
          }, e2.prototype._onLoadingComplete = function() {
            var e3 = this;
            Promise.resolve().then(function() {
              e3._emitter.emit(v.a.LOADING_COMPLETE);
            });
          }, e2.prototype._onRecoveredEarlyEof = function() {
            var e3 = this;
            Promise.resolve().then(function() {
              e3._emitter.emit(v.a.RECOVERED_EARLY_EOF);
            });
          }, e2.prototype._onMediaInfo = function(e3) {
            var t2 = this;
            Promise.resolve().then(function() {
              t2._emitter.emit(v.a.MEDIA_INFO, e3);
            });
          }, e2.prototype._onMetaDataArrived = function(e3) {
            var t2 = this;
            Promise.resolve().then(function() {
              t2._emitter.emit(v.a.METADATA_ARRIVED, e3);
            });
          }, e2.prototype._onScriptDataArrived = function(e3) {
            var t2 = this;
            Promise.resolve().then(function() {
              t2._emitter.emit(v.a.SCRIPTDATA_ARRIVED, e3);
            });
          }, e2.prototype._onTimedID3MetadataArrived = function(e3) {
            var t2 = this;
            Promise.resolve().then(function() {
              t2._emitter.emit(v.a.TIMED_ID3_METADATA_ARRIVED, e3);
            });
          }, e2.prototype._onSMPTE2038MetadataArrived = function(e3) {
            var t2 = this;
            Promise.resolve().then(function() {
              t2._emitter.emit(v.a.SMPTE2038_METADATA_ARRIVED, e3);
            });
          }, e2.prototype._onSCTE35MetadataArrived = function(e3) {
            var t2 = this;
            Promise.resolve().then(function() {
              t2._emitter.emit(v.a.SCTE35_METADATA_ARRIVED, e3);
            });
          }, e2.prototype._onPESPrivateDataDescriptor = function(e3) {
            var t2 = this;
            Promise.resolve().then(function() {
              t2._emitter.emit(v.a.PES_PRIVATE_DATA_DESCRIPTOR, e3);
            });
          }, e2.prototype._onPESPrivateDataArrived = function(e3) {
            var t2 = this;
            Promise.resolve().then(function() {
              t2._emitter.emit(v.a.PES_PRIVATE_DATA_ARRIVED, e3);
            });
          }, e2.prototype._onStatisticsInfo = function(e3) {
            var t2 = this;
            Promise.resolve().then(function() {
              t2._emitter.emit(v.a.STATISTICS_INFO, e3);
            });
          }, e2.prototype._onIOError = function(e3, t2) {
            var i2 = this;
            Promise.resolve().then(function() {
              i2._emitter.emit(v.a.IO_ERROR, e3, t2);
            });
          }, e2.prototype._onDemuxError = function(e3, t2) {
            var i2 = this;
            Promise.resolve().then(function() {
              i2._emitter.emit(v.a.DEMUX_ERROR, e3, t2);
            });
          }, e2.prototype._onRecommendSeekpoint = function(e3) {
            var t2 = this;
            Promise.resolve().then(function() {
              t2._emitter.emit(v.a.RECOMMEND_SEEKPOINT, e3);
            });
          }, e2.prototype._onLoggingConfigChanged = function(e3) {
            this._worker && this._worker.postMessage({ cmd: "logging_config", param: e3 });
          }, e2.prototype._onWorkerMessage = function(e3) {
            var t2 = e3.data, i2 = t2.data;
            if ("destroyed" === t2.msg || this._workerDestroying)
              return this._workerDestroying = false, this._worker.terminate(), void (this._worker = null);
            switch (t2.msg) {
              case v.a.INIT_SEGMENT:
              case v.a.MEDIA_SEGMENT:
                this._emitter.emit(t2.msg, i2.type, i2.data);
                break;
              case v.a.LOADING_COMPLETE:
              case v.a.RECOVERED_EARLY_EOF:
                this._emitter.emit(t2.msg);
                break;
              case v.a.MEDIA_INFO:
                Object.setPrototypeOf(i2, y.a.prototype), this._emitter.emit(t2.msg, i2);
                break;
              case v.a.METADATA_ARRIVED:
              case v.a.SCRIPTDATA_ARRIVED:
              case v.a.TIMED_ID3_METADATA_ARRIVED:
              case v.a.SMPTE2038_METADATA_ARRIVED:
              case v.a.SCTE35_METADATA_ARRIVED:
              case v.a.PES_PRIVATE_DATA_DESCRIPTOR:
              case v.a.PES_PRIVATE_DATA_ARRIVED:
              case v.a.STATISTICS_INFO:
                this._emitter.emit(t2.msg, i2);
                break;
              case v.a.IO_ERROR:
              case v.a.DEMUX_ERROR:
                this._emitter.emit(t2.msg, i2.type, i2.info);
                break;
              case v.a.RECOMMEND_SEEKPOINT:
                this._emitter.emit(t2.msg, i2);
                break;
              case "logcat_callback":
                c.a.emitter.emit("log", i2.type, i2.logcat);
            }
          }, e2;
        }(), S = { ERROR: "error", SOURCE_OPEN: "source_open", UPDATE_END: "update_end", BUFFER_FULL: "buffer_full" }, E = i(7), A = i(3), R = function() {
          function e2(e3) {
            this.TAG = "MSEController", this._config = e3, this._emitter = new h.a(), this._config.isLive && null == this._config.autoCleanupSourceBuffer && (this._config.autoCleanupSourceBuffer = true), this.e = { onSourceOpen: this._onSourceOpen.bind(this), onSourceEnded: this._onSourceEnded.bind(this), onSourceClose: this._onSourceClose.bind(this), onSourceBufferError: this._onSourceBufferError.bind(this), onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this) }, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement = null, this._isBufferFull = false, this._hasPendingEos = false, this._requireSetMediaDuration = false, this._pendingMediaDuration = 0, this._pendingSourceBufferInit = [], this._mimeTypes = { video: null, audio: null }, this._sourceBuffers = { video: null, audio: null }, this._lastInitSegments = { video: null, audio: null }, this._pendingSegments = { video: [], audio: [] }, this._pendingRemoveRanges = { video: [], audio: [] }, this._idrList = new E.a();
          }
          return e2.prototype.destroy = function() {
            (this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null;
          }, e2.prototype.on = function(e3, t2) {
            this._emitter.addListener(e3, t2);
          }, e2.prototype.off = function(e3, t2) {
            this._emitter.removeListener(e3, t2);
          }, e2.prototype.attachMediaElement = function(e3) {
            if (this._mediaSource)
              throw new A.a("MediaSource has been attached to an HTMLMediaElement!");
            var t2 = this._mediaSource = new window.MediaSource();
            t2.addEventListener("sourceopen", this.e.onSourceOpen), t2.addEventListener("sourceended", this.e.onSourceEnded), t2.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = e3, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), e3.src = this._mediaSourceObjectURL;
          }, e2.prototype.detachMediaElement = function() {
            if (this._mediaSource) {
              var e3 = this._mediaSource;
              for (var t2 in this._sourceBuffers) {
                var i2 = this._pendingSegments[t2];
                i2.splice(0, i2.length), this._pendingSegments[t2] = null, this._pendingRemoveRanges[t2] = null, this._lastInitSegments[t2] = null;
                var n2 = this._sourceBuffers[t2];
                if (n2) {
                  if ("closed" !== e3.readyState) {
                    try {
                      e3.removeSourceBuffer(n2);
                    } catch (e4) {
                      c.a.e(this.TAG, e4.message);
                    }
                    n2.removeEventListener("error", this.e.onSourceBufferError), n2.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                  }
                  this._mimeTypes[t2] = null, this._sourceBuffers[t2] = null;
                }
              }
              if ("open" === e3.readyState)
                try {
                  e3.endOfStream();
                } catch (e4) {
                  c.a.e(this.TAG, e4.message);
                }
              e3.removeEventListener("sourceopen", this.e.onSourceOpen), e3.removeEventListener("sourceended", this.e.onSourceEnded), e3.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = false, this._idrList.clear(), this._mediaSource = null;
            }
            this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null);
          }, e2.prototype.appendInitSegment = function(e3, t2) {
            if (!this._mediaSource || "open" !== this._mediaSource.readyState)
              return this._pendingSourceBufferInit.push(e3), void this._pendingSegments[e3.type].push(e3);
            var i2 = e3, n2 = "" + i2.container;
            i2.codec && i2.codec.length > 0 && (n2 += ";codecs=" + i2.codec);
            var a2 = false;
            if (c.a.v(this.TAG, "Received Initialization Segment, mimeType: " + n2), this._lastInitSegments[i2.type] = i2, n2 !== this._mimeTypes[i2.type]) {
              if (this._mimeTypes[i2.type])
                c.a.v(this.TAG, "Notice: " + i2.type + " mimeType changed, origin: " + this._mimeTypes[i2.type] + ", target: " + n2);
              else {
                a2 = true;
                try {
                  var r2 = this._sourceBuffers[i2.type] = this._mediaSource.addSourceBuffer(n2);
                  r2.addEventListener("error", this.e.onSourceBufferError), r2.addEventListener("updateend", this.e.onSourceBufferUpdateEnd);
                } catch (e4) {
                  return c.a.e(this.TAG, e4.message), void this._emitter.emit(S.ERROR, { code: e4.code, msg: e4.message });
                }
              }
              this._mimeTypes[i2.type] = n2;
            }
            t2 || this._pendingSegments[i2.type].push(i2), a2 || this._sourceBuffers[i2.type] && !this._sourceBuffers[i2.type].updating && this._doAppendSegments(), u.a.safari && "audio/mpeg" === i2.container && i2.mediaDuration > 0 && (this._requireSetMediaDuration = true, this._pendingMediaDuration = i2.mediaDuration / 1e3, this._updateMediaSourceDuration());
          }, e2.prototype.appendMediaSegment = function(e3) {
            var t2 = e3;
            this._pendingSegments[t2.type].push(t2), this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();
            var i2 = this._sourceBuffers[t2.type];
            !i2 || i2.updating || this._hasPendingRemoveRanges() || this._doAppendSegments();
          }, e2.prototype.seek = function(e3) {
            for (var t2 in this._sourceBuffers)
              if (this._sourceBuffers[t2]) {
                var i2 = this._sourceBuffers[t2];
                if ("open" === this._mediaSource.readyState)
                  try {
                    i2.abort();
                  } catch (e4) {
                    c.a.e(this.TAG, e4.message);
                  }
                this._idrList.clear();
                var n2 = this._pendingSegments[t2];
                if (n2.splice(0, n2.length), "closed" !== this._mediaSource.readyState) {
                  for (var a2 = 0; a2 < i2.buffered.length; a2++) {
                    var r2 = i2.buffered.start(a2), s2 = i2.buffered.end(a2);
                    this._pendingRemoveRanges[t2].push({ start: r2, end: s2 });
                  }
                  if (i2.updating || this._doRemoveRanges(), u.a.safari) {
                    var o2 = this._lastInitSegments[t2];
                    o2 && (this._pendingSegments[t2].push(o2), i2.updating || this._doAppendSegments());
                  }
                }
              }
          }, e2.prototype.endOfStream = function() {
            var e3 = this._mediaSource, t2 = this._sourceBuffers;
            e3 && "open" === e3.readyState ? t2.video && t2.video.updating || t2.audio && t2.audio.updating ? this._hasPendingEos = true : (this._hasPendingEos = false, e3.endOfStream()) : e3 && "closed" === e3.readyState && this._hasPendingSegments() && (this._hasPendingEos = true);
          }, e2.prototype.getNearestKeyframe = function(e3) {
            return this._idrList.getLastSyncPointBeforeDts(e3);
          }, e2.prototype._needCleanupSourceBuffer = function() {
            if (!this._config.autoCleanupSourceBuffer)
              return false;
            var e3 = this._mediaElement.currentTime;
            for (var t2 in this._sourceBuffers) {
              var i2 = this._sourceBuffers[t2];
              if (i2) {
                var n2 = i2.buffered;
                if (n2.length >= 1 && e3 - n2.start(0) >= this._config.autoCleanupMaxBackwardDuration)
                  return true;
              }
            }
            return false;
          }, e2.prototype._doCleanupSourceBuffer = function() {
            var e3 = this._mediaElement.currentTime;
            for (var t2 in this._sourceBuffers) {
              var i2 = this._sourceBuffers[t2];
              if (i2) {
                for (var n2 = i2.buffered, a2 = false, r2 = 0; r2 < n2.length; r2++) {
                  var s2 = n2.start(r2), o2 = n2.end(r2);
                  if (s2 <= e3 && e3 < o2 + 3) {
                    if (e3 - s2 >= this._config.autoCleanupMaxBackwardDuration) {
                      a2 = true;
                      var d2 = e3 - this._config.autoCleanupMinBackwardDuration;
                      this._pendingRemoveRanges[t2].push({ start: s2, end: d2 });
                    }
                  } else
                    o2 < e3 && (a2 = true, this._pendingRemoveRanges[t2].push({ start: s2, end: o2 }));
                }
                a2 && !i2.updating && this._doRemoveRanges();
              }
            }
          }, e2.prototype._updateMediaSourceDuration = function() {
            var e3 = this._sourceBuffers;
            if (0 !== this._mediaElement.readyState && "open" === this._mediaSource.readyState && !(e3.video && e3.video.updating || e3.audio && e3.audio.updating)) {
              var t2 = this._mediaSource.duration, i2 = this._pendingMediaDuration;
              i2 > 0 && (isNaN(t2) || i2 > t2) && (c.a.v(this.TAG, "Update MediaSource duration from " + t2 + " to " + i2), this._mediaSource.duration = i2), this._requireSetMediaDuration = false, this._pendingMediaDuration = 0;
            }
          }, e2.prototype._doRemoveRanges = function() {
            for (var e3 in this._pendingRemoveRanges)
              if (this._sourceBuffers[e3] && !this._sourceBuffers[e3].updating)
                for (var t2 = this._sourceBuffers[e3], i2 = this._pendingRemoveRanges[e3]; i2.length && !t2.updating; ) {
                  var n2 = i2.shift();
                  t2.remove(n2.start, n2.end);
                }
          }, e2.prototype._doAppendSegments = function() {
            var e3 = this._pendingSegments;
            for (var t2 in e3)
              if (this._sourceBuffers[t2] && !this._sourceBuffers[t2].updating && e3[t2].length > 0) {
                var i2 = e3[t2].shift();
                if (i2.timestampOffset) {
                  var n2 = this._sourceBuffers[t2].timestampOffset, a2 = i2.timestampOffset / 1e3;
                  Math.abs(n2 - a2) > 0.1 && (c.a.v(this.TAG, "Update MPEG audio timestampOffset from " + n2 + " to " + a2), this._sourceBuffers[t2].timestampOffset = a2), delete i2.timestampOffset;
                }
                if (!i2.data || 0 === i2.data.byteLength)
                  continue;
                try {
                  this._sourceBuffers[t2].appendBuffer(i2.data), this._isBufferFull = false, "video" === t2 && i2.hasOwnProperty("info") && this._idrList.appendArray(i2.info.syncPoints);
                } catch (e4) {
                  this._pendingSegments[t2].unshift(i2), 22 === e4.code ? (this._isBufferFull || this._emitter.emit(S.BUFFER_FULL), this._isBufferFull = true) : (c.a.e(this.TAG, e4.message), this._emitter.emit(S.ERROR, { code: e4.code, msg: e4.message }));
                }
              }
          }, e2.prototype._onSourceOpen = function() {
            if (c.a.v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._pendingSourceBufferInit.length > 0)
              for (var e3 = this._pendingSourceBufferInit; e3.length; ) {
                var t2 = e3.shift();
                this.appendInitSegment(t2, true);
              }
            this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(S.SOURCE_OPEN);
          }, e2.prototype._onSourceEnded = function() {
            c.a.v(this.TAG, "MediaSource onSourceEnded");
          }, e2.prototype._onSourceClose = function() {
            c.a.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && null != this.e && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose));
          }, e2.prototype._hasPendingSegments = function() {
            var e3 = this._pendingSegments;
            return e3.video.length > 0 || e3.audio.length > 0;
          }, e2.prototype._hasPendingRemoveRanges = function() {
            var e3 = this._pendingRemoveRanges;
            return e3.video.length > 0 || e3.audio.length > 0;
          }, e2.prototype._onSourceBufferUpdateEnd = function() {
            this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter.emit(S.UPDATE_END);
          }, e2.prototype._onSourceBufferError = function(e3) {
            c.a.e(this.TAG, "SourceBuffer Error: " + e3);
          }, e2;
        }(), T = i(5), L = { NETWORK_ERROR: "NetworkError", MEDIA_ERROR: "MediaError", OTHER_ERROR: "OtherError" }, w = { NETWORK_EXCEPTION: d.b.EXCEPTION, NETWORK_STATUS_CODE_INVALID: d.b.HTTP_STATUS_CODE_INVALID, NETWORK_TIMEOUT: d.b.CONNECTING_TIMEOUT, NETWORK_UNRECOVERABLE_EARLY_EOF: d.b.UNRECOVERABLE_EARLY_EOF, MEDIA_MSE_ERROR: "MediaMSEError", MEDIA_FORMAT_ERROR: T.a.FORMAT_ERROR, MEDIA_FORMAT_UNSUPPORTED: T.a.FORMAT_UNSUPPORTED, MEDIA_CODEC_UNSUPPORTED: T.a.CODEC_UNSUPPORTED }, k = function() {
          function e2(e3, t2) {
            this.TAG = "MSEPlayer", this._type = "MSEPlayer", this._emitter = new h.a(), this._config = s(), "object" == typeof t2 && Object.assign(this._config, t2);
            var i2 = e3.type.toLowerCase();
            if ("mse" !== i2 && "mpegts" !== i2 && "m2ts" !== i2 && "flv" !== i2)
              throw new A.b("MSEPlayer requires an mpegts/m2ts/flv MediaDataSource input!");
            true === e3.isLive && (this._config.isLive = true), this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this), onvSeeking: this._onvSeeking.bind(this), onvCanPlay: this._onvCanPlay.bind(this), onvStalled: this._onvStalled.bind(this), onvProgress: this._onvProgress.bind(this) }, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = false, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = e3, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = false, this._hasPendingLoad = false, this._receivedCanPlay = false, this._mediaInfo = null, this._statisticsInfo = null;
            var n2 = u.a.chrome && (u.a.version.major < 50 || 50 === u.a.version.major && u.a.version.build < 2661);
            this._alwaysSeekKeyframe = !!(n2 || u.a.msedge || u.a.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = false);
          }
          return e2.prototype.destroy = function() {
            null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
          }, e2.prototype.on = function(e3, t2) {
            var i2 = this;
            e3 === l.MEDIA_INFO ? null != this._mediaInfo && Promise.resolve().then(function() {
              i2._emitter.emit(l.MEDIA_INFO, i2.mediaInfo);
            }) : e3 === l.STATISTICS_INFO && null != this._statisticsInfo && Promise.resolve().then(function() {
              i2._emitter.emit(l.STATISTICS_INFO, i2.statisticsInfo);
            }), this._emitter.addListener(e3, t2);
          }, e2.prototype.off = function(e3, t2) {
            this._emitter.removeListener(e3, t2);
          }, e2.prototype.attachMediaElement = function(e3) {
            var t2 = this;
            if (this._mediaElement = e3, e3.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), e3.addEventListener("seeking", this.e.onvSeeking), e3.addEventListener("canplay", this.e.onvCanPlay), e3.addEventListener("stalled", this.e.onvStalled), e3.addEventListener("progress", this.e.onvProgress), this._msectl = new R(this._config), this._msectl.on(S.UPDATE_END, this._onmseUpdateEnd.bind(this)), this._msectl.on(S.BUFFER_FULL, this._onmseBufferFull.bind(this)), this._msectl.on(S.SOURCE_OPEN, function() {
              t2._mseSourceOpened = true, t2._hasPendingLoad && (t2._hasPendingLoad = false, t2.load());
            }), this._msectl.on(S.ERROR, function(e4) {
              t2._emitter.emit(l.ERROR, L.MEDIA_ERROR, w.MEDIA_MSE_ERROR, e4);
            }), this._msectl.attachMediaElement(e3), null != this._pendingSeekTime)
              try {
                e3.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
              } catch (e4) {
              }
          }, e2.prototype.detachMediaElement = function() {
            this._mediaElement && (this._msectl.detachMediaElement(), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("stalled", this.e.onvStalled), this._mediaElement.removeEventListener("progress", this.e.onvProgress), this._mediaElement = null), this._msectl && (this._msectl.destroy(), this._msectl = null);
          }, e2.prototype.load = function() {
            var e3 = this;
            if (!this._mediaElement)
              throw new A.a("HTMLMediaElement must be attached before load()!");
            if (this._transmuxer)
              throw new A.a("MSEPlayer.load() has been called, please call unload() first!");
            this._hasPendingLoad || (this._config.deferLoadAfterSourceOpen && false === this._mseSourceOpened ? this._hasPendingLoad = true : (this._mediaElement.readyState > 0 && (this._requestSetTime = true, this._mediaElement.currentTime = 0), this._transmuxer = new b(this._mediaDataSource, this._config), this._transmuxer.on(v.a.INIT_SEGMENT, function(t2, i2) {
              e3._msectl.appendInitSegment(i2);
            }), this._transmuxer.on(v.a.MEDIA_SEGMENT, function(t2, i2) {
              if (e3._msectl.appendMediaSegment(i2), e3._config.lazyLoad && !e3._config.isLive) {
                var n2 = e3._mediaElement.currentTime;
                i2.info.endDts >= 1e3 * (n2 + e3._config.lazyLoadMaxDuration) && null == e3._progressChecker && (c.a.v(e3.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), e3._suspendTransmuxer());
              }
            }), this._transmuxer.on(v.a.LOADING_COMPLETE, function() {
              e3._msectl.endOfStream(), e3._emitter.emit(l.LOADING_COMPLETE);
            }), this._transmuxer.on(v.a.RECOVERED_EARLY_EOF, function() {
              e3._emitter.emit(l.RECOVERED_EARLY_EOF);
            }), this._transmuxer.on(v.a.IO_ERROR, function(t2, i2) {
              e3._emitter.emit(l.ERROR, L.NETWORK_ERROR, t2, i2);
            }), this._transmuxer.on(v.a.DEMUX_ERROR, function(t2, i2) {
              e3._emitter.emit(l.ERROR, L.MEDIA_ERROR, t2, { code: -1, msg: i2 });
            }), this._transmuxer.on(v.a.MEDIA_INFO, function(t2) {
              e3._mediaInfo = t2, e3._emitter.emit(l.MEDIA_INFO, Object.assign({}, t2));
            }), this._transmuxer.on(v.a.METADATA_ARRIVED, function(t2) {
              e3._emitter.emit(l.METADATA_ARRIVED, t2);
            }), this._transmuxer.on(v.a.SCRIPTDATA_ARRIVED, function(t2) {
              e3._emitter.emit(l.SCRIPTDATA_ARRIVED, t2);
            }), this._transmuxer.on(v.a.TIMED_ID3_METADATA_ARRIVED, function(t2) {
              e3._emitter.emit(l.TIMED_ID3_METADATA_ARRIVED, t2);
            }), this._transmuxer.on(v.a.SMPTE2038_METADATA_ARRIVED, function(t2) {
              e3._emitter.emit(l.SMPTE2038_METADATA_ARRIVED, t2);
            }), this._transmuxer.on(v.a.SCTE35_METADATA_ARRIVED, function(t2) {
              e3._emitter.emit(l.SCTE35_METADATA_ARRIVED, t2);
            }), this._transmuxer.on(v.a.PES_PRIVATE_DATA_DESCRIPTOR, function(t2) {
              e3._emitter.emit(l.PES_PRIVATE_DATA_DESCRIPTOR, t2);
            }), this._transmuxer.on(v.a.PES_PRIVATE_DATA_ARRIVED, function(t2) {
              e3._emitter.emit(l.PES_PRIVATE_DATA_ARRIVED, t2);
            }), this._transmuxer.on(v.a.STATISTICS_INFO, function(t2) {
              e3._statisticsInfo = e3._fillStatisticsInfo(t2), e3._emitter.emit(l.STATISTICS_INFO, Object.assign({}, e3._statisticsInfo));
            }), this._transmuxer.on(v.a.RECOMMEND_SEEKPOINT, function(t2) {
              e3._mediaElement && !e3._config.accurateSeek && (e3._requestSetTime = true, e3._mediaElement.currentTime = t2 / 1e3);
            }), this._transmuxer.open()));
          }, e2.prototype.unload = function() {
            this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this._transmuxer = null);
          }, e2.prototype.play = function() {
            return this._mediaElement.play();
          }, e2.prototype.pause = function() {
            this._mediaElement.pause();
          }, Object.defineProperty(e2.prototype, "type", { get: function() {
            return this._type;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "buffered", { get: function() {
            return this._mediaElement.buffered;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "duration", { get: function() {
            return this._mediaElement.duration;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "volume", { get: function() {
            return this._mediaElement.volume;
          }, set: function(e3) {
            this._mediaElement.volume = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "muted", { get: function() {
            return this._mediaElement.muted;
          }, set: function(e3) {
            this._mediaElement.muted = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "currentTime", { get: function() {
            return this._mediaElement ? this._mediaElement.currentTime : 0;
          }, set: function(e3) {
            this._mediaElement ? this._internalSeek(e3) : this._pendingSeekTime = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "mediaInfo", { get: function() {
            return Object.assign({}, this._mediaInfo);
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "statisticsInfo", { get: function() {
            return null == this._statisticsInfo && (this._statisticsInfo = {}), this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo);
          }, enumerable: false, configurable: true }), e2.prototype._fillStatisticsInfo = function(e3) {
            if (e3.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement))
              return e3;
            var t2 = true, i2 = 0, n2 = 0;
            if (this._mediaElement.getVideoPlaybackQuality) {
              var a2 = this._mediaElement.getVideoPlaybackQuality();
              i2 = a2.totalVideoFrames, n2 = a2.droppedVideoFrames;
            } else
              null != this._mediaElement.webkitDecodedFrameCount ? (i2 = this._mediaElement.webkitDecodedFrameCount, n2 = this._mediaElement.webkitDroppedFrameCount) : t2 = false;
            return t2 && (e3.decodedFrames = i2, e3.droppedFrames = n2), e3;
          }, e2.prototype._onmseUpdateEnd = function() {
            var e3 = this._mediaElement.buffered, t2 = this._mediaElement.currentTime;
            if (this._config.isLive && this._config.liveBufferLatencyChasing && e3.length > 0 && !this._mediaElement.paused) {
              var i2 = e3.end(e3.length - 1);
              if (i2 > this._config.liveBufferLatencyMaxLatency && i2 - t2 > this._config.liveBufferLatencyMaxLatency) {
                var n2 = i2 - this._config.liveBufferLatencyMinRemain;
                this.currentTime = n2;
              }
            }
            if (this._config.lazyLoad && !this._config.isLive) {
              for (var a2 = 0, r2 = 0; r2 < e3.length; r2++) {
                var s2 = e3.start(r2), o2 = e3.end(r2);
                if (s2 <= t2 && t2 < o2) {
                  s2, a2 = o2;
                  break;
                }
              }
              a2 >= t2 + this._config.lazyLoadMaxDuration && null == this._progressChecker && (c.a.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer());
            }
          }, e2.prototype._onmseBufferFull = function() {
            c.a.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), null == this._progressChecker && this._suspendTransmuxer();
          }, e2.prototype._suspendTransmuxer = function() {
            this._transmuxer && (this._transmuxer.pause(), null == this._progressChecker && (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3)));
          }, e2.prototype._checkProgressAndResume = function() {
            for (var e3 = this._mediaElement.currentTime, t2 = this._mediaElement.buffered, i2 = false, n2 = 0; n2 < t2.length; n2++) {
              var a2 = t2.start(n2), r2 = t2.end(n2);
              if (e3 >= a2 && e3 < r2) {
                e3 >= r2 - this._config.lazyLoadRecoverDuration && (i2 = true);
                break;
              }
            }
            i2 && (window.clearInterval(this._progressChecker), this._progressChecker = null, i2 && (c.a.v(this.TAG, "Continue loading from paused position"), this._transmuxer.resume()));
          }, e2.prototype._isTimepointBuffered = function(e3) {
            for (var t2 = this._mediaElement.buffered, i2 = 0; i2 < t2.length; i2++) {
              var n2 = t2.start(i2), a2 = t2.end(i2);
              if (e3 >= n2 && e3 < a2)
                return true;
            }
            return false;
          }, e2.prototype._internalSeek = function(e3) {
            var t2 = this._isTimepointBuffered(e3), i2 = false, n2 = 0;
            if (e3 < 1 && this._mediaElement.buffered.length > 0) {
              var a2 = this._mediaElement.buffered.start(0);
              (a2 < 1 && e3 < a2 || u.a.safari) && (i2 = true, n2 = u.a.safari ? 0.1 : a2);
            }
            if (i2)
              this._requestSetTime = true, this._mediaElement.currentTime = n2;
            else if (t2) {
              if (this._alwaysSeekKeyframe) {
                var r2 = this._msectl.getNearestKeyframe(Math.floor(1e3 * e3));
                this._requestSetTime = true, this._mediaElement.currentTime = null != r2 ? r2.dts / 1e3 : e3;
              } else
                this._requestSetTime = true, this._mediaElement.currentTime = e3;
              null != this._progressChecker && this._checkProgressAndResume();
            } else
              null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._msectl.seek(e3), this._transmuxer.seek(Math.floor(1e3 * e3)), this._config.accurateSeek && (this._requestSetTime = true, this._mediaElement.currentTime = e3);
          }, e2.prototype._checkAndApplyUnbufferedSeekpoint = function() {
            if (this._seekpointRecord)
              if (this._seekpointRecord.recordTime <= this._now() - 100) {
                var e3 = this._mediaElement.currentTime;
                this._seekpointRecord = null, this._isTimepointBuffered(e3) || (null != this._progressChecker && (window.clearTimeout(this._progressChecker), this._progressChecker = null), this._msectl.seek(e3), this._transmuxer.seek(Math.floor(1e3 * e3)), this._config.accurateSeek && (this._requestSetTime = true, this._mediaElement.currentTime = e3));
              } else
                window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
          }, e2.prototype._checkAndResumeStuckPlayback = function(e3) {
            var t2 = this._mediaElement;
            if (e3 || !this._receivedCanPlay || t2.readyState < 2) {
              var i2 = t2.buffered;
              i2.length > 0 && t2.currentTime < i2.start(0) && (c.a.w(this.TAG, "Playback seems stuck at " + t2.currentTime + ", seek to " + i2.start(0)), this._requestSetTime = true, this._mediaElement.currentTime = i2.start(0), this._mediaElement.removeEventListener("progress", this.e.onvProgress));
            } else
              this._mediaElement.removeEventListener("progress", this.e.onvProgress);
          }, e2.prototype._onvLoadedMetadata = function(e3) {
            null != this._pendingSeekTime && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null);
          }, e2.prototype._onvSeeking = function(e3) {
            var t2 = this._mediaElement.currentTime, i2 = this._mediaElement.buffered;
            if (this._requestSetTime)
              this._requestSetTime = false;
            else {
              if (t2 < 1 && i2.length > 0) {
                var n2 = i2.start(0);
                if (n2 < 1 && t2 < n2 || u.a.safari)
                  return this._requestSetTime = true, void (this._mediaElement.currentTime = u.a.safari ? 0.1 : n2);
              }
              if (this._isTimepointBuffered(t2)) {
                if (this._alwaysSeekKeyframe) {
                  var a2 = this._msectl.getNearestKeyframe(Math.floor(1e3 * t2));
                  null != a2 && (this._requestSetTime = true, this._mediaElement.currentTime = a2.dts / 1e3);
                }
                null != this._progressChecker && this._checkProgressAndResume();
              } else
                this._seekpointRecord = { seekPoint: t2, recordTime: this._now() }, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
            }
          }, e2.prototype._onvCanPlay = function(e3) {
            this._receivedCanPlay = true, this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay);
          }, e2.prototype._onvStalled = function(e3) {
            this._checkAndResumeStuckPlayback(true);
          }, e2.prototype._onvProgress = function(e3) {
            this._checkAndResumeStuckPlayback();
          }, e2;
        }(), D = function() {
          function e2(e3, t2) {
            this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new h.a(), this._config = s(), "object" == typeof t2 && Object.assign(this._config, t2);
            var i2 = e3.type.toLowerCase();
            if ("mse" === i2 || "mpegts" === i2 || "m2ts" === i2 || "flv" === i2)
              throw new A.b("NativePlayer does't support mse/mpegts/m2ts/flv MediaDataSource input!");
            if (e3.hasOwnProperty("segments"))
              throw new A.b("NativePlayer(" + e3.type + ") doesn't support multipart playback!");
            this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this) }, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = e3, this._mediaElement = null;
          }
          return e2.prototype.destroy = function() {
            this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null;
          }, e2.prototype.on = function(e3, t2) {
            var i2 = this;
            e3 === l.MEDIA_INFO ? null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve().then(function() {
              i2._emitter.emit(l.MEDIA_INFO, i2.mediaInfo);
            }) : e3 === l.STATISTICS_INFO && null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve().then(function() {
              i2._emitter.emit(l.STATISTICS_INFO, i2.statisticsInfo);
            }), this._emitter.addListener(e3, t2);
          }, e2.prototype.off = function(e3, t2) {
            this._emitter.removeListener(e3, t2);
          }, e2.prototype.attachMediaElement = function(e3) {
            if (this._mediaElement = e3, e3.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), null != this._pendingSeekTime)
              try {
                e3.currentTime = this._pendingSeekTime, this._pendingSeekTime = null;
              } catch (e4) {
              }
          }, e2.prototype.detachMediaElement = function() {
            this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement = null), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
          }, e2.prototype.load = function() {
            if (!this._mediaElement)
              throw new A.a("HTMLMediaElement must be attached before load()!");
            this._mediaElement.src = this._mediaDataSource.url, this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval);
          }, e2.prototype.unload = function() {
            this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null);
          }, e2.prototype.play = function() {
            return this._mediaElement.play();
          }, e2.prototype.pause = function() {
            this._mediaElement.pause();
          }, Object.defineProperty(e2.prototype, "type", { get: function() {
            return this._type;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "buffered", { get: function() {
            return this._mediaElement.buffered;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "duration", { get: function() {
            return this._mediaElement.duration;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "volume", { get: function() {
            return this._mediaElement.volume;
          }, set: function(e3) {
            this._mediaElement.volume = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "muted", { get: function() {
            return this._mediaElement.muted;
          }, set: function(e3) {
            this._mediaElement.muted = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "currentTime", { get: function() {
            return this._mediaElement ? this._mediaElement.currentTime : 0;
          }, set: function(e3) {
            this._mediaElement ? this._mediaElement.currentTime = e3 : this._pendingSeekTime = e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "mediaInfo", { get: function() {
            var e3 = { mimeType: (this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/") + this._mediaDataSource.type };
            return this._mediaElement && (e3.duration = Math.floor(1e3 * this._mediaElement.duration), this._mediaElement instanceof HTMLVideoElement && (e3.width = this._mediaElement.videoWidth, e3.height = this._mediaElement.videoHeight)), e3;
          }, enumerable: false, configurable: true }), Object.defineProperty(e2.prototype, "statisticsInfo", { get: function() {
            var e3 = { playerType: this._type, url: this._mediaDataSource.url };
            if (!(this._mediaElement instanceof HTMLVideoElement))
              return e3;
            var t2 = true, i2 = 0, n2 = 0;
            if (this._mediaElement.getVideoPlaybackQuality) {
              var a2 = this._mediaElement.getVideoPlaybackQuality();
              i2 = a2.totalVideoFrames, n2 = a2.droppedVideoFrames;
            } else
              null != this._mediaElement.webkitDecodedFrameCount ? (i2 = this._mediaElement.webkitDecodedFrameCount, n2 = this._mediaElement.webkitDroppedFrameCount) : t2 = false;
            return t2 && (e3.decodedFrames = i2, e3.droppedFrames = n2), e3;
          }, enumerable: false, configurable: true }), e2.prototype._onvLoadedMetadata = function(e3) {
            null != this._pendingSeekTime && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null), this._emitter.emit(l.MEDIA_INFO, this.mediaInfo);
          }, e2.prototype._reportStatisticsInfo = function() {
            this._emitter.emit(l.STATISTICS_INFO, this.statisticsInfo);
          }, e2;
        }();
        n.a.install();
        var C = { createPlayer: function(e2, t2) {
          var i2 = e2;
          if (null == i2 || "object" != typeof i2)
            throw new A.b("MediaDataSource must be an javascript object!");
          if (!i2.hasOwnProperty("type"))
            throw new A.b("MediaDataSource must has type field to indicate video file type!");
          switch (i2.type) {
            case "mse":
            case "mpegts":
            case "m2ts":
            case "flv":
              return new k(i2, t2);
            default:
              return new D(i2, t2);
          }
        }, isSupported: function() {
          return o.supportMSEH264Playback();
        }, getFeatureList: function() {
          return o.getFeatureList();
        } };
        C.BaseLoader = d.a, C.LoaderStatus = d.c, C.LoaderErrors = d.b, C.Events = l, C.ErrorTypes = L, C.ErrorDetails = w, C.MSEPlayer = k, C.NativePlayer = D, C.LoggingControl = m.a, Object.defineProperty(C, "version", { enumerable: true, get: function() {
          return "1.7.3";
        } });
        t.default = C;
      }]);
    });
  }
});
export default require_mpegts();
/*! Bundled license information:

mpegts.js/dist/mpegts.js:
  (*!
   * @overview es6-promise - a tiny implementation of Promises/A+.
   * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
   * @license   Licensed under MIT license
   *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
   * @version   v4.2.8+1e68dce6
   *)
*/
//# sourceMappingURL=mpegts__js.js.map
