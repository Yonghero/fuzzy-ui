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

// node_modules/.pnpm/@vue-office+docx@1.3.0_vue@3.3.4/node_modules/@vue-office/docx/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/@vue-office+docx@1.3.0_vue@3.3.4/node_modules/@vue-office/docx/lib/index.js"(exports, module) {
    (function(le, ce) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = ce(require_lib(), (init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : typeof define == "function" && define.amd ? define(["vue-demi", "vue"], ce) : (le = typeof globalThis != "undefined" ? globalThis : le || self, le["vue-office-docx"] = ce(le.VueDemi, le.Vue));
    })(exports, function(le, ce) {
      "use strict";
      var et = Object.defineProperty;
      var Fe = Object.getOwnPropertySymbols;
      var tt = Object.prototype.hasOwnProperty, rt = Object.prototype.propertyIsEnumerable;
      var Me = (le2, ce2, ue2) => ce2 in le2 ? et(le2, ce2, { enumerable: true, configurable: true, writable: true, value: ue2 }) : le2[ce2] = ue2, Re = (le2, ce2) => {
        for (var ue2 in ce2 || (ce2 = {}))
          tt.call(ce2, ue2) && Me(le2, ue2, ce2[ue2]);
        if (Fe)
          for (var ue2 of Fe(ce2))
            rt.call(ce2, ue2) && Me(le2, ue2, ce2[ue2]);
        return le2;
      };
      var fe = (le2, ce2, ue2) => new Promise((xe2, Ee2) => {
        var _e2 = (ge2) => {
          try {
            Ae2(ue2.next(ge2));
          } catch (Se2) {
            Ee2(Se2);
          }
        }, ke2 = (ge2) => {
          try {
            Ae2(ue2.throw(ge2));
          } catch (Se2) {
            Ee2(Se2);
          }
        }, Ae2 = (ge2) => ge2.done ? xe2(ge2.value) : Promise.resolve(ge2.value).then(_e2, ke2);
        Ae2((ue2 = ue2.apply(le2, ce2)).next());
      });
      var ue = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, xe = {}, Ee = { get exports() {
        return xe;
      }, set exports(Y) {
        xe = Y;
      } };
      function _e(Y) {
        throw new Error('Could not dynamically require "' + Y + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
      }
      var ke = {}, Ae = { get exports() {
        return ke;
      }, set exports(Y) {
        ke = Y;
      } };
      var ge;
      function Se() {
        return ge || (ge = 1, function(Y, re) {
          (function(P) {
            Y.exports = P();
          })(function() {
            return function P(M, E, x) {
              function v(r, m) {
                if (!E[r]) {
                  if (!M[r]) {
                    var p = typeof _e == "function" && _e;
                    if (!m && p)
                      return p(r, true);
                    if (e)
                      return e(r, true);
                    var n = new Error("Cannot find module '" + r + "'");
                    throw n.code = "MODULE_NOT_FOUND", n;
                  }
                  var i = E[r] = { exports: {} };
                  M[r][0].call(i.exports, function(y) {
                    var d = M[r][1][y];
                    return v(d || y);
                  }, i, i.exports, P, M, E, x);
                }
                return E[r].exports;
              }
              for (var e = typeof _e == "function" && _e, u = 0; u < x.length; u++)
                v(x[u]);
              return v;
            }({ 1: [function(P, M, E) {
              var x = P("./utils"), v = P("./support"), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              E.encode = function(u) {
                for (var r, m, p, n, i, y, d, h = [], f = 0, g = u.length, A = g, C = x.getTypeOf(u) !== "string"; f < u.length; )
                  A = g - f, p = C ? (r = u[f++], m = f < g ? u[f++] : 0, f < g ? u[f++] : 0) : (r = u.charCodeAt(f++), m = f < g ? u.charCodeAt(f++) : 0, f < g ? u.charCodeAt(f++) : 0), n = r >> 2, i = (3 & r) << 4 | m >> 4, y = 1 < A ? (15 & m) << 2 | p >> 6 : 64, d = 2 < A ? 63 & p : 64, h.push(e.charAt(n) + e.charAt(i) + e.charAt(y) + e.charAt(d));
                return h.join("");
              }, E.decode = function(u) {
                var r, m, p, n, i, y, d = 0, h = 0, f = "data:";
                if (u.substr(0, f.length) === f)
                  throw new Error("Invalid base64 input, it looks like a data url.");
                var g, A = 3 * (u = u.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                if (u.charAt(u.length - 1) === e.charAt(64) && A--, u.charAt(u.length - 2) === e.charAt(64) && A--, A % 1 != 0)
                  throw new Error("Invalid base64 input, bad content length.");
                for (g = v.uint8array ? new Uint8Array(0 | A) : new Array(0 | A); d < u.length; )
                  r = e.indexOf(u.charAt(d++)) << 2 | (n = e.indexOf(u.charAt(d++))) >> 4, m = (15 & n) << 4 | (i = e.indexOf(u.charAt(d++))) >> 2, p = (3 & i) << 6 | (y = e.indexOf(u.charAt(d++))), g[h++] = r, i !== 64 && (g[h++] = m), y !== 64 && (g[h++] = p);
                return g;
              };
            }, { "./support": 30, "./utils": 32 }], 2: [function(P, M, E) {
              var x = P("./external"), v = P("./stream/DataWorker"), e = P("./stream/Crc32Probe"), u = P("./stream/DataLengthProbe");
              function r(m, p, n, i, y) {
                this.compressedSize = m, this.uncompressedSize = p, this.crc32 = n, this.compression = i, this.compressedContent = y;
              }
              r.prototype = { getContentWorker: function() {
                var m = new v(x.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")), p = this;
                return m.on("end", function() {
                  if (this.streamInfo.data_length !== p.uncompressedSize)
                    throw new Error("Bug : uncompressed data size mismatch");
                }), m;
              }, getCompressedWorker: function() {
                return new v(x.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
              } }, r.createWorkerFrom = function(m, p, n) {
                return m.pipe(new e()).pipe(new u("uncompressedSize")).pipe(p.compressWorker(n)).pipe(new u("compressedSize")).withStreamInfo("compression", p);
              }, M.exports = r;
            }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(P, M, E) {
              var x = P("./stream/GenericWorker");
              E.STORE = { magic: "\0\0", compressWorker: function() {
                return new x("STORE compression");
              }, uncompressWorker: function() {
                return new x("STORE decompression");
              } }, E.DEFLATE = P("./flate");
            }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(P, M, E) {
              var x = P("./utils"), v = function() {
                for (var e, u = [], r = 0; r < 256; r++) {
                  e = r;
                  for (var m = 0; m < 8; m++)
                    e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                  u[r] = e;
                }
                return u;
              }();
              M.exports = function(e, u) {
                return e !== void 0 && e.length ? x.getTypeOf(e) !== "string" ? function(r, m, p, n) {
                  var i = v, y = n + p;
                  r ^= -1;
                  for (var d = n; d < y; d++)
                    r = r >>> 8 ^ i[255 & (r ^ m[d])];
                  return -1 ^ r;
                }(0 | u, e, e.length, 0) : function(r, m, p, n) {
                  var i = v, y = n + p;
                  r ^= -1;
                  for (var d = n; d < y; d++)
                    r = r >>> 8 ^ i[255 & (r ^ m.charCodeAt(d))];
                  return -1 ^ r;
                }(0 | u, e, e.length, 0) : 0;
              };
            }, { "./utils": 32 }], 5: [function(P, M, E) {
              E.base64 = false, E.binary = false, E.dir = false, E.createFolders = true, E.date = null, E.compression = null, E.compressionOptions = null, E.comment = null, E.unixPermissions = null, E.dosPermissions = null;
            }, {}], 6: [function(P, M, E) {
              var x = null;
              x = typeof Promise != "undefined" ? Promise : P("lie"), M.exports = { Promise: x };
            }, { lie: 37 }], 7: [function(P, M, E) {
              var x = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Uint32Array != "undefined", v = P("pako"), e = P("./utils"), u = P("./stream/GenericWorker"), r = x ? "uint8array" : "array";
              function m(p, n) {
                u.call(this, "FlateWorker/" + p), this._pako = null, this._pakoAction = p, this._pakoOptions = n, this.meta = {};
              }
              E.magic = "\b\0", e.inherits(m, u), m.prototype.processChunk = function(p) {
                this.meta = p.meta, this._pako === null && this._createPako(), this._pako.push(e.transformTo(r, p.data), false);
              }, m.prototype.flush = function() {
                u.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], true);
              }, m.prototype.cleanUp = function() {
                u.prototype.cleanUp.call(this), this._pako = null;
              }, m.prototype._createPako = function() {
                this._pako = new v[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
                var p = this;
                this._pako.onData = function(n) {
                  p.push({ data: n, meta: p.meta });
                };
              }, E.compressWorker = function(p) {
                return new m("Deflate", p);
              }, E.uncompressWorker = function() {
                return new m("Inflate", {});
              };
            }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(P, M, E) {
              function x(i, y) {
                var d, h = "";
                for (d = 0; d < y; d++)
                  h += String.fromCharCode(255 & i), i >>>= 8;
                return h;
              }
              function v(i, y, d, h, f, g) {
                var A, C, a = i.file, o = i.compression, t = g !== r.utf8encode, l = e.transformTo("string", g(a.name)), b = e.transformTo("string", r.utf8encode(a.name)), k = a.comment, D = e.transformTo("string", g(k)), _ = e.transformTo("string", r.utf8encode(k)), T = b.length !== a.name.length, s = _.length !== k.length, R = "", V = "", j = "", q = a.dir, W = a.date, Q = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
                y && !d || (Q.crc32 = i.crc32, Q.compressedSize = i.compressedSize, Q.uncompressedSize = i.uncompressedSize);
                var z = 0;
                y && (z |= 8), t || !T && !s || (z |= 2048);
                var O = 0, J = 0;
                q && (O |= 16), f === "UNIX" ? (J = 798, O |= function(Z, se) {
                  var he = Z;
                  return Z || (he = se ? 16893 : 33204), (65535 & he) << 16;
                }(a.unixPermissions, q)) : (J = 20, O |= function(Z) {
                  return 63 & (Z || 0);
                }(a.dosPermissions)), A = W.getUTCHours(), A <<= 6, A |= W.getUTCMinutes(), A <<= 5, A |= W.getUTCSeconds() / 2, C = W.getUTCFullYear() - 1980, C <<= 4, C |= W.getUTCMonth() + 1, C <<= 5, C |= W.getUTCDate(), T && (V = x(1, 1) + x(m(l), 4) + b, R += "up" + x(V.length, 2) + V), s && (j = x(1, 1) + x(m(D), 4) + _, R += "uc" + x(j.length, 2) + j);
                var X = "";
                return X += `
\0`, X += x(z, 2), X += o.magic, X += x(A, 2), X += x(C, 2), X += x(Q.crc32, 4), X += x(Q.compressedSize, 4), X += x(Q.uncompressedSize, 4), X += x(l.length, 2), X += x(R.length, 2), { fileRecord: p.LOCAL_FILE_HEADER + X + l + R, dirRecord: p.CENTRAL_FILE_HEADER + x(J, 2) + X + x(D.length, 2) + "\0\0\0\0" + x(O, 4) + x(h, 4) + l + R + D };
              }
              var e = P("../utils"), u = P("../stream/GenericWorker"), r = P("../utf8"), m = P("../crc32"), p = P("../signature");
              function n(i, y, d, h) {
                u.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = d, this.encodeFileName = h, this.streamFiles = i, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
              }
              e.inherits(n, u), n.prototype.push = function(i) {
                var y = i.meta.percent || 0, d = this.entriesCount, h = this._sources.length;
                this.accumulate ? this.contentBuffer.push(i) : (this.bytesWritten += i.data.length, u.prototype.push.call(this, { data: i.data, meta: { currentFile: this.currentFile, percent: d ? (y + 100 * (d - h - 1)) / d : 100 } }));
              }, n.prototype.openedSource = function(i) {
                this.currentSourceOffset = this.bytesWritten, this.currentFile = i.file.name;
                var y = this.streamFiles && !i.file.dir;
                if (y) {
                  var d = v(i, y, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                  this.push({ data: d.fileRecord, meta: { percent: 0 } });
                } else
                  this.accumulate = true;
              }, n.prototype.closedSource = function(i) {
                this.accumulate = false;
                var y = this.streamFiles && !i.file.dir, d = v(i, y, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                if (this.dirRecords.push(d.dirRecord), y)
                  this.push({ data: function(h) {
                    return p.DATA_DESCRIPTOR + x(h.crc32, 4) + x(h.compressedSize, 4) + x(h.uncompressedSize, 4);
                  }(i), meta: { percent: 100 } });
                else
                  for (this.push({ data: d.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
                    this.push(this.contentBuffer.shift());
                this.currentFile = null;
              }, n.prototype.flush = function() {
                for (var i = this.bytesWritten, y = 0; y < this.dirRecords.length; y++)
                  this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
                var d = this.bytesWritten - i, h = function(f, g, A, C, a) {
                  var o = e.transformTo("string", a(C));
                  return p.CENTRAL_DIRECTORY_END + "\0\0\0\0" + x(f, 2) + x(f, 2) + x(g, 4) + x(A, 4) + x(o.length, 2) + o;
                }(this.dirRecords.length, d, i, this.zipComment, this.encodeFileName);
                this.push({ data: h, meta: { percent: 100 } });
              }, n.prototype.prepareNextSource = function() {
                this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
              }, n.prototype.registerPrevious = function(i) {
                this._sources.push(i);
                var y = this;
                return i.on("data", function(d) {
                  y.processChunk(d);
                }), i.on("end", function() {
                  y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
                }), i.on("error", function(d) {
                  y.error(d);
                }), this;
              }, n.prototype.resume = function() {
                return !!u.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
              }, n.prototype.error = function(i) {
                var y = this._sources;
                if (!u.prototype.error.call(this, i))
                  return false;
                for (var d = 0; d < y.length; d++)
                  try {
                    y[d].error(i);
                  } catch (h) {
                  }
                return true;
              }, n.prototype.lock = function() {
                u.prototype.lock.call(this);
                for (var i = this._sources, y = 0; y < i.length; y++)
                  i[y].lock();
              }, M.exports = n;
            }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(P, M, E) {
              var x = P("../compressions"), v = P("./ZipFileWorker");
              E.generateWorker = function(e, u, r) {
                var m = new v(u.streamFiles, r, u.platform, u.encodeFileName), p = 0;
                try {
                  e.forEach(function(n, i) {
                    p++;
                    var y = function(g, A) {
                      var C = g || A, a = x[C];
                      if (!a)
                        throw new Error(C + " is not a valid compression method !");
                      return a;
                    }(i.options.compression, u.compression), d = i.options.compressionOptions || u.compressionOptions || {}, h = i.dir, f = i.date;
                    i._compressWorker(y, d).withStreamInfo("file", { name: n, dir: h, date: f, comment: i.comment || "", unixPermissions: i.unixPermissions, dosPermissions: i.dosPermissions }).pipe(m);
                  }), m.entriesCount = p;
                } catch (n) {
                  m.error(n);
                }
                return m;
              };
            }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(P, M, E) {
              function x() {
                if (!(this instanceof x))
                  return new x();
                if (arguments.length)
                  throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
                  var v = new x();
                  for (var e in this)
                    typeof this[e] != "function" && (v[e] = this[e]);
                  return v;
                };
              }
              (x.prototype = P("./object")).loadAsync = P("./load"), x.support = P("./support"), x.defaults = P("./defaults"), x.version = "3.10.1", x.loadAsync = function(v, e) {
                return new x().loadAsync(v, e);
              }, x.external = P("./external"), M.exports = x;
            }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(P, M, E) {
              var x = P("./utils"), v = P("./external"), e = P("./utf8"), u = P("./zipEntries"), r = P("./stream/Crc32Probe"), m = P("./nodejsUtils");
              function p(n) {
                return new v.Promise(function(i, y) {
                  var d = n.decompressed.getContentWorker().pipe(new r());
                  d.on("error", function(h) {
                    y(h);
                  }).on("end", function() {
                    d.streamInfo.crc32 !== n.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : i();
                  }).resume();
                });
              }
              M.exports = function(n, i) {
                var y = this;
                return i = x.extend(i || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: e.utf8decode }), m.isNode && m.isStream(n) ? v.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : x.prepareContent("the loaded zip file", n, true, i.optimizedBinaryString, i.base64).then(function(d) {
                  var h = new u(i);
                  return h.load(d), h;
                }).then(function(d) {
                  var h = [v.Promise.resolve(d)], f = d.files;
                  if (i.checkCRC32)
                    for (var g = 0; g < f.length; g++)
                      h.push(p(f[g]));
                  return v.Promise.all(h);
                }).then(function(d) {
                  for (var h = d.shift(), f = h.files, g = 0; g < f.length; g++) {
                    var A = f[g], C = A.fileNameStr, a = x.resolve(A.fileNameStr);
                    y.file(a, A.decompressed, { binary: true, optimizedBinaryString: true, date: A.date, dir: A.dir, comment: A.fileCommentStr.length ? A.fileCommentStr : null, unixPermissions: A.unixPermissions, dosPermissions: A.dosPermissions, createFolders: i.createFolders }), A.dir || (y.file(a).unsafeOriginalName = C);
                  }
                  return h.zipComment.length && (y.comment = h.zipComment), y;
                });
              };
            }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(P, M, E) {
              var x = P("../utils"), v = P("../stream/GenericWorker");
              function e(u, r) {
                v.call(this, "Nodejs stream input adapter for " + u), this._upstreamEnded = false, this._bindStream(r);
              }
              x.inherits(e, v), e.prototype._bindStream = function(u) {
                var r = this;
                (this._stream = u).pause(), u.on("data", function(m) {
                  r.push({ data: m, meta: { percent: 0 } });
                }).on("error", function(m) {
                  r.isPaused ? this.generatedError = m : r.error(m);
                }).on("end", function() {
                  r.isPaused ? r._upstreamEnded = true : r.end();
                });
              }, e.prototype.pause = function() {
                return !!v.prototype.pause.call(this) && (this._stream.pause(), true);
              }, e.prototype.resume = function() {
                return !!v.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
              }, M.exports = e;
            }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(P, M, E) {
              var x = P("readable-stream").Readable;
              function v(e, u, r) {
                x.call(this, u), this._helper = e;
                var m = this;
                e.on("data", function(p, n) {
                  m.push(p) || m._helper.pause(), r && r(n);
                }).on("error", function(p) {
                  m.emit("error", p);
                }).on("end", function() {
                  m.push(null);
                });
              }
              P("../utils").inherits(v, x), v.prototype._read = function() {
                this._helper.resume();
              }, M.exports = v;
            }, { "../utils": 32, "readable-stream": 16 }], 14: [function(P, M, E) {
              M.exports = { isNode: typeof Buffer != "undefined", newBufferFrom: function(x, v) {
                if (Buffer.from && Buffer.from !== Uint8Array.from)
                  return Buffer.from(x, v);
                if (typeof x == "number")
                  throw new Error('The "data" argument must not be a number');
                return new Buffer(x, v);
              }, allocBuffer: function(x) {
                if (Buffer.alloc)
                  return Buffer.alloc(x);
                var v = new Buffer(x);
                return v.fill(0), v;
              }, isBuffer: function(x) {
                return Buffer.isBuffer(x);
              }, isStream: function(x) {
                return x && typeof x.on == "function" && typeof x.pause == "function" && typeof x.resume == "function";
              } };
            }, {}], 15: [function(P, M, E) {
              function x(a, o, t) {
                var l, b = e.getTypeOf(o), k = e.extend(t || {}, m);
                k.date = k.date || /* @__PURE__ */ new Date(), k.compression !== null && (k.compression = k.compression.toUpperCase()), typeof k.unixPermissions == "string" && (k.unixPermissions = parseInt(k.unixPermissions, 8)), k.unixPermissions && 16384 & k.unixPermissions && (k.dir = true), k.dosPermissions && 16 & k.dosPermissions && (k.dir = true), k.dir && (a = f(a)), k.createFolders && (l = h(a)) && g.call(this, l, true);
                var D = b === "string" && k.binary === false && k.base64 === false;
                t && t.binary !== void 0 || (k.binary = !D), (o instanceof p && o.uncompressedSize === 0 || k.dir || !o || o.length === 0) && (k.base64 = false, k.binary = true, o = "", k.compression = "STORE", b = "string");
                var _ = null;
                _ = o instanceof p || o instanceof u ? o : y.isNode && y.isStream(o) ? new d(a, o) : e.prepareContent(a, o, k.binary, k.optimizedBinaryString, k.base64);
                var T = new n(a, _, k);
                this.files[a] = T;
              }
              var v = P("./utf8"), e = P("./utils"), u = P("./stream/GenericWorker"), r = P("./stream/StreamHelper"), m = P("./defaults"), p = P("./compressedObject"), n = P("./zipObject"), i = P("./generate"), y = P("./nodejsUtils"), d = P("./nodejs/NodejsStreamInputAdapter"), h = function(a) {
                a.slice(-1) === "/" && (a = a.substring(0, a.length - 1));
                var o = a.lastIndexOf("/");
                return 0 < o ? a.substring(0, o) : "";
              }, f = function(a) {
                return a.slice(-1) !== "/" && (a += "/"), a;
              }, g = function(a, o) {
                return o = o !== void 0 ? o : m.createFolders, a = f(a), this.files[a] || x.call(this, a, null, { dir: true, createFolders: o }), this.files[a];
              };
              function A(a) {
                return Object.prototype.toString.call(a) === "[object RegExp]";
              }
              var C = { load: function() {
                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
              }, forEach: function(a) {
                var o, t, l;
                for (o in this.files)
                  l = this.files[o], (t = o.slice(this.root.length, o.length)) && o.slice(0, this.root.length) === this.root && a(t, l);
              }, filter: function(a) {
                var o = [];
                return this.forEach(function(t, l) {
                  a(t, l) && o.push(l);
                }), o;
              }, file: function(a, o, t) {
                if (arguments.length !== 1)
                  return a = this.root + a, x.call(this, a, o, t), this;
                if (A(a)) {
                  var l = a;
                  return this.filter(function(k, D) {
                    return !D.dir && l.test(k);
                  });
                }
                var b = this.files[this.root + a];
                return b && !b.dir ? b : null;
              }, folder: function(a) {
                if (!a)
                  return this;
                if (A(a))
                  return this.filter(function(b, k) {
                    return k.dir && a.test(b);
                  });
                var o = this.root + a, t = g.call(this, o), l = this.clone();
                return l.root = t.name, l;
              }, remove: function(a) {
                a = this.root + a;
                var o = this.files[a];
                if (o || (a.slice(-1) !== "/" && (a += "/"), o = this.files[a]), o && !o.dir)
                  delete this.files[a];
                else
                  for (var t = this.filter(function(b, k) {
                    return k.name.slice(0, a.length) === a;
                  }), l = 0; l < t.length; l++)
                    delete this.files[t[l].name];
                return this;
              }, generate: function() {
                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
              }, generateInternalStream: function(a) {
                var o, t = {};
                try {
                  if ((t = e.extend(a || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: v.utf8encode })).type = t.type.toLowerCase(), t.compression = t.compression.toUpperCase(), t.type === "binarystring" && (t.type = "string"), !t.type)
                    throw new Error("No output type specified.");
                  e.checkSupport(t.type), t.platform !== "darwin" && t.platform !== "freebsd" && t.platform !== "linux" && t.platform !== "sunos" || (t.platform = "UNIX"), t.platform === "win32" && (t.platform = "DOS");
                  var l = t.comment || this.comment || "";
                  o = i.generateWorker(this, t, l);
                } catch (b) {
                  (o = new u("error")).error(b);
                }
                return new r(o, t.type || "string", t.mimeType);
              }, generateAsync: function(a, o) {
                return this.generateInternalStream(a).accumulate(o);
              }, generateNodeStream: function(a, o) {
                return (a = a || {}).type || (a.type = "nodebuffer"), this.generateInternalStream(a).toNodejsStream(o);
              } };
              M.exports = C;
            }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(P, M, E) {
              M.exports = P("stream");
            }, { stream: void 0 }], 17: [function(P, M, E) {
              var x = P("./DataReader");
              function v(e) {
                x.call(this, e);
                for (var u = 0; u < this.data.length; u++)
                  e[u] = 255 & e[u];
              }
              P("../utils").inherits(v, x), v.prototype.byteAt = function(e) {
                return this.data[this.zero + e];
              }, v.prototype.lastIndexOfSignature = function(e) {
                for (var u = e.charCodeAt(0), r = e.charCodeAt(1), m = e.charCodeAt(2), p = e.charCodeAt(3), n = this.length - 4; 0 <= n; --n)
                  if (this.data[n] === u && this.data[n + 1] === r && this.data[n + 2] === m && this.data[n + 3] === p)
                    return n - this.zero;
                return -1;
              }, v.prototype.readAndCheckSignature = function(e) {
                var u = e.charCodeAt(0), r = e.charCodeAt(1), m = e.charCodeAt(2), p = e.charCodeAt(3), n = this.readData(4);
                return u === n[0] && r === n[1] && m === n[2] && p === n[3];
              }, v.prototype.readData = function(e) {
                if (this.checkOffset(e), e === 0)
                  return [];
                var u = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                return this.index += e, u;
              }, M.exports = v;
            }, { "../utils": 32, "./DataReader": 18 }], 18: [function(P, M, E) {
              var x = P("../utils");
              function v(e) {
                this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
              }
              v.prototype = { checkOffset: function(e) {
                this.checkIndex(this.index + e);
              }, checkIndex: function(e) {
                if (this.length < this.zero + e || e < 0)
                  throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
              }, setIndex: function(e) {
                this.checkIndex(e), this.index = e;
              }, skip: function(e) {
                this.setIndex(this.index + e);
              }, byteAt: function() {
              }, readInt: function(e) {
                var u, r = 0;
                for (this.checkOffset(e), u = this.index + e - 1; u >= this.index; u--)
                  r = (r << 8) + this.byteAt(u);
                return this.index += e, r;
              }, readString: function(e) {
                return x.transformTo("string", this.readData(e));
              }, readData: function() {
              }, lastIndexOfSignature: function() {
              }, readAndCheckSignature: function() {
              }, readDate: function() {
                var e = this.readInt(4);
                return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
              } }, M.exports = v;
            }, { "../utils": 32 }], 19: [function(P, M, E) {
              var x = P("./Uint8ArrayReader");
              function v(e) {
                x.call(this, e);
              }
              P("../utils").inherits(v, x), v.prototype.readData = function(e) {
                this.checkOffset(e);
                var u = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                return this.index += e, u;
              }, M.exports = v;
            }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(P, M, E) {
              var x = P("./DataReader");
              function v(e) {
                x.call(this, e);
              }
              P("../utils").inherits(v, x), v.prototype.byteAt = function(e) {
                return this.data.charCodeAt(this.zero + e);
              }, v.prototype.lastIndexOfSignature = function(e) {
                return this.data.lastIndexOf(e) - this.zero;
              }, v.prototype.readAndCheckSignature = function(e) {
                return e === this.readData(4);
              }, v.prototype.readData = function(e) {
                this.checkOffset(e);
                var u = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                return this.index += e, u;
              }, M.exports = v;
            }, { "../utils": 32, "./DataReader": 18 }], 21: [function(P, M, E) {
              var x = P("./ArrayReader");
              function v(e) {
                x.call(this, e);
              }
              P("../utils").inherits(v, x), v.prototype.readData = function(e) {
                if (this.checkOffset(e), e === 0)
                  return new Uint8Array(0);
                var u = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
                return this.index += e, u;
              }, M.exports = v;
            }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(P, M, E) {
              var x = P("../utils"), v = P("../support"), e = P("./ArrayReader"), u = P("./StringReader"), r = P("./NodeBufferReader"), m = P("./Uint8ArrayReader");
              M.exports = function(p) {
                var n = x.getTypeOf(p);
                return x.checkSupport(n), n !== "string" || v.uint8array ? n === "nodebuffer" ? new r(p) : v.uint8array ? new m(x.transformTo("uint8array", p)) : new e(x.transformTo("array", p)) : new u(p);
              };
            }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(P, M, E) {
              E.LOCAL_FILE_HEADER = "PK", E.CENTRAL_FILE_HEADER = "PK", E.CENTRAL_DIRECTORY_END = "PK", E.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", E.ZIP64_CENTRAL_DIRECTORY_END = "PK", E.DATA_DESCRIPTOR = "PK\x07\b";
            }, {}], 24: [function(P, M, E) {
              var x = P("./GenericWorker"), v = P("../utils");
              function e(u) {
                x.call(this, "ConvertWorker to " + u), this.destType = u;
              }
              v.inherits(e, x), e.prototype.processChunk = function(u) {
                this.push({ data: v.transformTo(this.destType, u.data), meta: u.meta });
              }, M.exports = e;
            }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(P, M, E) {
              var x = P("./GenericWorker"), v = P("../crc32");
              function e() {
                x.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
              }
              P("../utils").inherits(e, x), e.prototype.processChunk = function(u) {
                this.streamInfo.crc32 = v(u.data, this.streamInfo.crc32 || 0), this.push(u);
              }, M.exports = e;
            }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(P, M, E) {
              var x = P("../utils"), v = P("./GenericWorker");
              function e(u) {
                v.call(this, "DataLengthProbe for " + u), this.propName = u, this.withStreamInfo(u, 0);
              }
              x.inherits(e, v), e.prototype.processChunk = function(u) {
                if (u) {
                  var r = this.streamInfo[this.propName] || 0;
                  this.streamInfo[this.propName] = r + u.data.length;
                }
                v.prototype.processChunk.call(this, u);
              }, M.exports = e;
            }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(P, M, E) {
              var x = P("../utils"), v = P("./GenericWorker");
              function e(u) {
                v.call(this, "DataWorker");
                var r = this;
                this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, u.then(function(m) {
                  r.dataIsReady = true, r.data = m, r.max = m && m.length || 0, r.type = x.getTypeOf(m), r.isPaused || r._tickAndRepeat();
                }, function(m) {
                  r.error(m);
                });
              }
              x.inherits(e, v), e.prototype.cleanUp = function() {
                v.prototype.cleanUp.call(this), this.data = null;
              }, e.prototype.resume = function() {
                return !!v.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, x.delay(this._tickAndRepeat, [], this)), true);
              }, e.prototype._tickAndRepeat = function() {
                this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (x.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
              }, e.prototype._tick = function() {
                if (this.isPaused || this.isFinished)
                  return false;
                var u = null, r = Math.min(this.max, this.index + 16384);
                if (this.index >= this.max)
                  return this.end();
                switch (this.type) {
                  case "string":
                    u = this.data.substring(this.index, r);
                    break;
                  case "uint8array":
                    u = this.data.subarray(this.index, r);
                    break;
                  case "array":
                  case "nodebuffer":
                    u = this.data.slice(this.index, r);
                }
                return this.index = r, this.push({ data: u, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
              }, M.exports = e;
            }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(P, M, E) {
              function x(v) {
                this.name = v || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
              }
              x.prototype = { push: function(v) {
                this.emit("data", v);
              }, end: function() {
                if (this.isFinished)
                  return false;
                this.flush();
                try {
                  this.emit("end"), this.cleanUp(), this.isFinished = true;
                } catch (v) {
                  this.emit("error", v);
                }
                return true;
              }, error: function(v) {
                return !this.isFinished && (this.isPaused ? this.generatedError = v : (this.isFinished = true, this.emit("error", v), this.previous && this.previous.error(v), this.cleanUp()), true);
              }, on: function(v, e) {
                return this._listeners[v].push(e), this;
              }, cleanUp: function() {
                this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
              }, emit: function(v, e) {
                if (this._listeners[v])
                  for (var u = 0; u < this._listeners[v].length; u++)
                    this._listeners[v][u].call(this, e);
              }, pipe: function(v) {
                return v.registerPrevious(this);
              }, registerPrevious: function(v) {
                if (this.isLocked)
                  throw new Error("The stream '" + this + "' has already been used.");
                this.streamInfo = v.streamInfo, this.mergeStreamInfo(), this.previous = v;
                var e = this;
                return v.on("data", function(u) {
                  e.processChunk(u);
                }), v.on("end", function() {
                  e.end();
                }), v.on("error", function(u) {
                  e.error(u);
                }), this;
              }, pause: function() {
                return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
              }, resume: function() {
                if (!this.isPaused || this.isFinished)
                  return false;
                var v = this.isPaused = false;
                return this.generatedError && (this.error(this.generatedError), v = true), this.previous && this.previous.resume(), !v;
              }, flush: function() {
              }, processChunk: function(v) {
                this.push(v);
              }, withStreamInfo: function(v, e) {
                return this.extraStreamInfo[v] = e, this.mergeStreamInfo(), this;
              }, mergeStreamInfo: function() {
                for (var v in this.extraStreamInfo)
                  Object.prototype.hasOwnProperty.call(this.extraStreamInfo, v) && (this.streamInfo[v] = this.extraStreamInfo[v]);
              }, lock: function() {
                if (this.isLocked)
                  throw new Error("The stream '" + this + "' has already been used.");
                this.isLocked = true, this.previous && this.previous.lock();
              }, toString: function() {
                var v = "Worker " + this.name;
                return this.previous ? this.previous + " -> " + v : v;
              } }, M.exports = x;
            }, {}], 29: [function(P, M, E) {
              var x = P("../utils"), v = P("./ConvertWorker"), e = P("./GenericWorker"), u = P("../base64"), r = P("../support"), m = P("../external"), p = null;
              if (r.nodestream)
                try {
                  p = P("../nodejs/NodejsStreamOutputAdapter");
                } catch (y) {
                }
              function n(y, d) {
                return new m.Promise(function(h, f) {
                  var g = [], A = y._internalType, C = y._outputType, a = y._mimeType;
                  y.on("data", function(o, t) {
                    g.push(o), d && d(t);
                  }).on("error", function(o) {
                    g = [], f(o);
                  }).on("end", function() {
                    try {
                      var o = function(t, l, b) {
                        switch (t) {
                          case "blob":
                            return x.newBlob(x.transformTo("arraybuffer", l), b);
                          case "base64":
                            return u.encode(l);
                          default:
                            return x.transformTo(t, l);
                        }
                      }(C, function(t, l) {
                        var b, k = 0, D = null, _ = 0;
                        for (b = 0; b < l.length; b++)
                          _ += l[b].length;
                        switch (t) {
                          case "string":
                            return l.join("");
                          case "array":
                            return Array.prototype.concat.apply([], l);
                          case "uint8array":
                            for (D = new Uint8Array(_), b = 0; b < l.length; b++)
                              D.set(l[b], k), k += l[b].length;
                            return D;
                          case "nodebuffer":
                            return Buffer.concat(l);
                          default:
                            throw new Error("concat : unsupported type '" + t + "'");
                        }
                      }(A, g), a);
                      h(o);
                    } catch (t) {
                      f(t);
                    }
                    g = [];
                  }).resume();
                });
              }
              function i(y, d, h) {
                var f = d;
                switch (d) {
                  case "blob":
                  case "arraybuffer":
                    f = "uint8array";
                    break;
                  case "base64":
                    f = "string";
                }
                try {
                  this._internalType = f, this._outputType = d, this._mimeType = h, x.checkSupport(f), this._worker = y.pipe(new v(f)), y.lock();
                } catch (g) {
                  this._worker = new e("error"), this._worker.error(g);
                }
              }
              i.prototype = { accumulate: function(y) {
                return n(this, y);
              }, on: function(y, d) {
                var h = this;
                return y === "data" ? this._worker.on(y, function(f) {
                  d.call(h, f.data, f.meta);
                }) : this._worker.on(y, function() {
                  x.delay(d, arguments, h);
                }), this;
              }, resume: function() {
                return x.delay(this._worker.resume, [], this._worker), this;
              }, pause: function() {
                return this._worker.pause(), this;
              }, toNodejsStream: function(y) {
                if (x.checkSupport("nodestream"), this._outputType !== "nodebuffer")
                  throw new Error(this._outputType + " is not supported by this method");
                return new p(this, { objectMode: this._outputType !== "nodebuffer" }, y);
              } }, M.exports = i;
            }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(P, M, E) {
              if (E.base64 = true, E.array = true, E.string = true, E.arraybuffer = typeof ArrayBuffer != "undefined" && typeof Uint8Array != "undefined", E.nodebuffer = typeof Buffer != "undefined", E.uint8array = typeof Uint8Array != "undefined", typeof ArrayBuffer == "undefined")
                E.blob = false;
              else {
                var x = new ArrayBuffer(0);
                try {
                  E.blob = new Blob([x], { type: "application/zip" }).size === 0;
                } catch (e) {
                  try {
                    var v = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                    v.append(x), E.blob = v.getBlob("application/zip").size === 0;
                  } catch (u) {
                    E.blob = false;
                  }
                }
              }
              try {
                E.nodestream = !!P("readable-stream").Readable;
              } catch (e) {
                E.nodestream = false;
              }
            }, { "readable-stream": 16 }], 31: [function(P, M, E) {
              for (var x = P("./utils"), v = P("./support"), e = P("./nodejsUtils"), u = P("./stream/GenericWorker"), r = new Array(256), m = 0; m < 256; m++)
                r[m] = 252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
              r[254] = r[254] = 1;
              function p() {
                u.call(this, "utf-8 decode"), this.leftOver = null;
              }
              function n() {
                u.call(this, "utf-8 encode");
              }
              E.utf8encode = function(i) {
                return v.nodebuffer ? e.newBufferFrom(i, "utf-8") : function(y) {
                  var d, h, f, g, A, C = y.length, a = 0;
                  for (g = 0; g < C; g++)
                    (64512 & (h = y.charCodeAt(g))) == 55296 && g + 1 < C && (64512 & (f = y.charCodeAt(g + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (f - 56320), g++), a += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
                  for (d = v.uint8array ? new Uint8Array(a) : new Array(a), g = A = 0; A < a; g++)
                    (64512 & (h = y.charCodeAt(g))) == 55296 && g + 1 < C && (64512 & (f = y.charCodeAt(g + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (f - 56320), g++), h < 128 ? d[A++] = h : (h < 2048 ? d[A++] = 192 | h >>> 6 : (h < 65536 ? d[A++] = 224 | h >>> 12 : (d[A++] = 240 | h >>> 18, d[A++] = 128 | h >>> 12 & 63), d[A++] = 128 | h >>> 6 & 63), d[A++] = 128 | 63 & h);
                  return d;
                }(i);
              }, E.utf8decode = function(i) {
                return v.nodebuffer ? x.transformTo("nodebuffer", i).toString("utf-8") : function(y) {
                  var d, h, f, g, A = y.length, C = new Array(2 * A);
                  for (d = h = 0; d < A; )
                    if ((f = y[d++]) < 128)
                      C[h++] = f;
                    else if (4 < (g = r[f]))
                      C[h++] = 65533, d += g - 1;
                    else {
                      for (f &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && d < A; )
                        f = f << 6 | 63 & y[d++], g--;
                      1 < g ? C[h++] = 65533 : f < 65536 ? C[h++] = f : (f -= 65536, C[h++] = 55296 | f >> 10 & 1023, C[h++] = 56320 | 1023 & f);
                    }
                  return C.length !== h && (C.subarray ? C = C.subarray(0, h) : C.length = h), x.applyFromCharCode(C);
                }(i = x.transformTo(v.uint8array ? "uint8array" : "array", i));
              }, x.inherits(p, u), p.prototype.processChunk = function(i) {
                var y = x.transformTo(v.uint8array ? "uint8array" : "array", i.data);
                if (this.leftOver && this.leftOver.length) {
                  if (v.uint8array) {
                    var d = y;
                    (y = new Uint8Array(d.length + this.leftOver.length)).set(this.leftOver, 0), y.set(d, this.leftOver.length);
                  } else
                    y = this.leftOver.concat(y);
                  this.leftOver = null;
                }
                var h = function(g, A) {
                  var C;
                  for ((A = A || g.length) > g.length && (A = g.length), C = A - 1; 0 <= C && (192 & g[C]) == 128; )
                    C--;
                  return C < 0 || C === 0 ? A : C + r[g[C]] > A ? C : A;
                }(y), f = y;
                h !== y.length && (v.uint8array ? (f = y.subarray(0, h), this.leftOver = y.subarray(h, y.length)) : (f = y.slice(0, h), this.leftOver = y.slice(h, y.length))), this.push({ data: E.utf8decode(f), meta: i.meta });
              }, p.prototype.flush = function() {
                this.leftOver && this.leftOver.length && (this.push({ data: E.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
              }, E.Utf8DecodeWorker = p, x.inherits(n, u), n.prototype.processChunk = function(i) {
                this.push({ data: E.utf8encode(i.data), meta: i.meta });
              }, E.Utf8EncodeWorker = n;
            }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(P, M, E) {
              var x = P("./support"), v = P("./base64"), e = P("./nodejsUtils"), u = P("./external");
              function r(d) {
                return d;
              }
              function m(d, h) {
                for (var f = 0; f < d.length; ++f)
                  h[f] = 255 & d.charCodeAt(f);
                return h;
              }
              P("setimmediate"), E.newBlob = function(d, h) {
                E.checkSupport("blob");
                try {
                  return new Blob([d], { type: h });
                } catch (g) {
                  try {
                    var f = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                    return f.append(d), f.getBlob(h);
                  } catch (A) {
                    throw new Error("Bug : can't construct the Blob.");
                  }
                }
              };
              var p = { stringifyByChunk: function(d, h, f) {
                var g = [], A = 0, C = d.length;
                if (C <= f)
                  return String.fromCharCode.apply(null, d);
                for (; A < C; )
                  h === "array" || h === "nodebuffer" ? g.push(String.fromCharCode.apply(null, d.slice(A, Math.min(A + f, C)))) : g.push(String.fromCharCode.apply(null, d.subarray(A, Math.min(A + f, C)))), A += f;
                return g.join("");
              }, stringifyByChar: function(d) {
                for (var h = "", f = 0; f < d.length; f++)
                  h += String.fromCharCode(d[f]);
                return h;
              }, applyCanBeUsed: { uint8array: function() {
                try {
                  return x.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
                } catch (d) {
                  return false;
                }
              }(), nodebuffer: function() {
                try {
                  return x.nodebuffer && String.fromCharCode.apply(null, e.allocBuffer(1)).length === 1;
                } catch (d) {
                  return false;
                }
              }() } };
              function n(d) {
                var h = 65536, f = E.getTypeOf(d), g = true;
                if (f === "uint8array" ? g = p.applyCanBeUsed.uint8array : f === "nodebuffer" && (g = p.applyCanBeUsed.nodebuffer), g)
                  for (; 1 < h; )
                    try {
                      return p.stringifyByChunk(d, f, h);
                    } catch (A) {
                      h = Math.floor(h / 2);
                    }
                return p.stringifyByChar(d);
              }
              function i(d, h) {
                for (var f = 0; f < d.length; f++)
                  h[f] = d[f];
                return h;
              }
              E.applyFromCharCode = n;
              var y = {};
              y.string = { string: r, array: function(d) {
                return m(d, new Array(d.length));
              }, arraybuffer: function(d) {
                return y.string.uint8array(d).buffer;
              }, uint8array: function(d) {
                return m(d, new Uint8Array(d.length));
              }, nodebuffer: function(d) {
                return m(d, e.allocBuffer(d.length));
              } }, y.array = { string: n, array: r, arraybuffer: function(d) {
                return new Uint8Array(d).buffer;
              }, uint8array: function(d) {
                return new Uint8Array(d);
              }, nodebuffer: function(d) {
                return e.newBufferFrom(d);
              } }, y.arraybuffer = { string: function(d) {
                return n(new Uint8Array(d));
              }, array: function(d) {
                return i(new Uint8Array(d), new Array(d.byteLength));
              }, arraybuffer: r, uint8array: function(d) {
                return new Uint8Array(d);
              }, nodebuffer: function(d) {
                return e.newBufferFrom(new Uint8Array(d));
              } }, y.uint8array = { string: n, array: function(d) {
                return i(d, new Array(d.length));
              }, arraybuffer: function(d) {
                return d.buffer;
              }, uint8array: r, nodebuffer: function(d) {
                return e.newBufferFrom(d);
              } }, y.nodebuffer = { string: n, array: function(d) {
                return i(d, new Array(d.length));
              }, arraybuffer: function(d) {
                return y.nodebuffer.uint8array(d).buffer;
              }, uint8array: function(d) {
                return i(d, new Uint8Array(d.length));
              }, nodebuffer: r }, E.transformTo = function(d, h) {
                if (h = h || "", !d)
                  return h;
                E.checkSupport(d);
                var f = E.getTypeOf(h);
                return y[f][d](h);
              }, E.resolve = function(d) {
                for (var h = d.split("/"), f = [], g = 0; g < h.length; g++) {
                  var A = h[g];
                  A === "." || A === "" && g !== 0 && g !== h.length - 1 || (A === ".." ? f.pop() : f.push(A));
                }
                return f.join("/");
              }, E.getTypeOf = function(d) {
                return typeof d == "string" ? "string" : Object.prototype.toString.call(d) === "[object Array]" ? "array" : x.nodebuffer && e.isBuffer(d) ? "nodebuffer" : x.uint8array && d instanceof Uint8Array ? "uint8array" : x.arraybuffer && d instanceof ArrayBuffer ? "arraybuffer" : void 0;
              }, E.checkSupport = function(d) {
                if (!x[d.toLowerCase()])
                  throw new Error(d + " is not supported by this platform");
              }, E.MAX_VALUE_16BITS = 65535, E.MAX_VALUE_32BITS = -1, E.pretty = function(d) {
                var h, f, g = "";
                for (f = 0; f < (d || "").length; f++)
                  g += "\\x" + ((h = d.charCodeAt(f)) < 16 ? "0" : "") + h.toString(16).toUpperCase();
                return g;
              }, E.delay = function(d, h, f) {
                setImmediate(function() {
                  d.apply(f || null, h || []);
                });
              }, E.inherits = function(d, h) {
                function f() {
                }
                f.prototype = h.prototype, d.prototype = new f();
              }, E.extend = function() {
                var d, h, f = {};
                for (d = 0; d < arguments.length; d++)
                  for (h in arguments[d])
                    Object.prototype.hasOwnProperty.call(arguments[d], h) && f[h] === void 0 && (f[h] = arguments[d][h]);
                return f;
              }, E.prepareContent = function(d, h, f, g, A) {
                return u.Promise.resolve(h).then(function(C) {
                  return x.blob && (C instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(C)) !== -1) && typeof FileReader != "undefined" ? new u.Promise(function(a, o) {
                    var t = new FileReader();
                    t.onload = function(l) {
                      a(l.target.result);
                    }, t.onerror = function(l) {
                      o(l.target.error);
                    }, t.readAsArrayBuffer(C);
                  }) : C;
                }).then(function(C) {
                  var a = E.getTypeOf(C);
                  return a ? (a === "arraybuffer" ? C = E.transformTo("uint8array", C) : a === "string" && (A ? C = v.decode(C) : f && g !== true && (C = function(o) {
                    return m(o, x.uint8array ? new Uint8Array(o.length) : new Array(o.length));
                  }(C))), C) : u.Promise.reject(new Error("Can't read the data of '" + d + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
                });
              };
            }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(P, M, E) {
              var x = P("./reader/readerFor"), v = P("./utils"), e = P("./signature"), u = P("./zipEntry"), r = P("./support");
              function m(p) {
                this.files = [], this.loadOptions = p;
              }
              m.prototype = { checkSignature: function(p) {
                if (!this.reader.readAndCheckSignature(p)) {
                  this.reader.index -= 4;
                  var n = this.reader.readString(4);
                  throw new Error("Corrupted zip or bug: unexpected signature (" + v.pretty(n) + ", expected " + v.pretty(p) + ")");
                }
              }, isSignature: function(p, n) {
                var i = this.reader.index;
                this.reader.setIndex(p);
                var y = this.reader.readString(4) === n;
                return this.reader.setIndex(i), y;
              }, readBlockEndOfCentral: function() {
                this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                var p = this.reader.readData(this.zipCommentLength), n = r.uint8array ? "uint8array" : "array", i = v.transformTo(n, p);
                this.zipComment = this.loadOptions.decodeFileName(i);
              }, readBlockZip64EndOfCentral: function() {
                this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                for (var p, n, i, y = this.zip64EndOfCentralSize - 44; 0 < y; )
                  p = this.reader.readInt(2), n = this.reader.readInt(4), i = this.reader.readData(n), this.zip64ExtensibleData[p] = { id: p, length: n, value: i };
              }, readBlockZip64EndOfCentralLocator: function() {
                if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
                  throw new Error("Multi-volumes zip are not supported");
              }, readLocalFiles: function() {
                var p, n;
                for (p = 0; p < this.files.length; p++)
                  n = this.files[p], this.reader.setIndex(n.localHeaderOffset), this.checkSignature(e.LOCAL_FILE_HEADER), n.readLocalPart(this.reader), n.handleUTF8(), n.processAttributes();
              }, readCentralDir: function() {
                var p;
                for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(e.CENTRAL_FILE_HEADER); )
                  (p = new u({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(p);
                if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
                  throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
              }, readEndOfCentral: function() {
                var p = this.reader.lastIndexOfSignature(e.CENTRAL_DIRECTORY_END);
                if (p < 0)
                  throw this.isSignature(0, e.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                this.reader.setIndex(p);
                var n = p;
                if (this.checkSignature(e.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === v.MAX_VALUE_16BITS || this.diskWithCentralDirStart === v.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === v.MAX_VALUE_16BITS || this.centralDirRecords === v.MAX_VALUE_16BITS || this.centralDirSize === v.MAX_VALUE_32BITS || this.centralDirOffset === v.MAX_VALUE_32BITS) {
                  if (this.zip64 = true, (p = this.reader.lastIndexOfSignature(e.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
                    throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                  if (this.reader.setIndex(p), this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, e.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(e.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
                    throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                  this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
                }
                var i = this.centralDirOffset + this.centralDirSize;
                this.zip64 && (i += 20, i += 12 + this.zip64EndOfCentralSize);
                var y = n - i;
                if (0 < y)
                  this.isSignature(n, e.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
                else if (y < 0)
                  throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
              }, prepareReader: function(p) {
                this.reader = x(p);
              }, load: function(p) {
                this.prepareReader(p), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
              } }, M.exports = m;
            }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(P, M, E) {
              var x = P("./reader/readerFor"), v = P("./utils"), e = P("./compressedObject"), u = P("./crc32"), r = P("./utf8"), m = P("./compressions"), p = P("./support");
              function n(i, y) {
                this.options = i, this.loadOptions = y;
              }
              n.prototype = { isEncrypted: function() {
                return (1 & this.bitFlag) == 1;
              }, useUTF8: function() {
                return (2048 & this.bitFlag) == 2048;
              }, readLocalPart: function(i) {
                var y, d;
                if (i.skip(22), this.fileNameLength = i.readInt(2), d = i.readInt(2), this.fileName = i.readData(this.fileNameLength), i.skip(d), this.compressedSize === -1 || this.uncompressedSize === -1)
                  throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                if ((y = function(h) {
                  for (var f in m)
                    if (Object.prototype.hasOwnProperty.call(m, f) && m[f].magic === h)
                      return m[f];
                  return null;
                }(this.compressionMethod)) === null)
                  throw new Error("Corrupted zip : compression " + v.pretty(this.compressionMethod) + " unknown (inner file : " + v.transformTo("string", this.fileName) + ")");
                this.decompressed = new e(this.compressedSize, this.uncompressedSize, this.crc32, y, i.readData(this.compressedSize));
              }, readCentralPart: function(i) {
                this.versionMadeBy = i.readInt(2), i.skip(2), this.bitFlag = i.readInt(2), this.compressionMethod = i.readString(2), this.date = i.readDate(), this.crc32 = i.readInt(4), this.compressedSize = i.readInt(4), this.uncompressedSize = i.readInt(4);
                var y = i.readInt(2);
                if (this.extraFieldsLength = i.readInt(2), this.fileCommentLength = i.readInt(2), this.diskNumberStart = i.readInt(2), this.internalFileAttributes = i.readInt(2), this.externalFileAttributes = i.readInt(4), this.localHeaderOffset = i.readInt(4), this.isEncrypted())
                  throw new Error("Encrypted zip are not supported");
                i.skip(y), this.readExtraFields(i), this.parseZIP64ExtraField(i), this.fileComment = i.readData(this.fileCommentLength);
              }, processAttributes: function() {
                this.unixPermissions = null, this.dosPermissions = null;
                var i = this.versionMadeBy >> 8;
                this.dir = !!(16 & this.externalFileAttributes), i == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), i == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = true);
              }, parseZIP64ExtraField: function() {
                if (this.extraFields[1]) {
                  var i = x(this.extraFields[1].value);
                  this.uncompressedSize === v.MAX_VALUE_32BITS && (this.uncompressedSize = i.readInt(8)), this.compressedSize === v.MAX_VALUE_32BITS && (this.compressedSize = i.readInt(8)), this.localHeaderOffset === v.MAX_VALUE_32BITS && (this.localHeaderOffset = i.readInt(8)), this.diskNumberStart === v.MAX_VALUE_32BITS && (this.diskNumberStart = i.readInt(4));
                }
              }, readExtraFields: function(i) {
                var y, d, h, f = i.index + this.extraFieldsLength;
                for (this.extraFields || (this.extraFields = {}); i.index + 4 < f; )
                  y = i.readInt(2), d = i.readInt(2), h = i.readData(d), this.extraFields[y] = { id: y, length: d, value: h };
                i.setIndex(f);
              }, handleUTF8: function() {
                var i = p.uint8array ? "uint8array" : "array";
                if (this.useUTF8())
                  this.fileNameStr = r.utf8decode(this.fileName), this.fileCommentStr = r.utf8decode(this.fileComment);
                else {
                  var y = this.findExtraFieldUnicodePath();
                  if (y !== null)
                    this.fileNameStr = y;
                  else {
                    var d = v.transformTo(i, this.fileName);
                    this.fileNameStr = this.loadOptions.decodeFileName(d);
                  }
                  var h = this.findExtraFieldUnicodeComment();
                  if (h !== null)
                    this.fileCommentStr = h;
                  else {
                    var f = v.transformTo(i, this.fileComment);
                    this.fileCommentStr = this.loadOptions.decodeFileName(f);
                  }
                }
              }, findExtraFieldUnicodePath: function() {
                var i = this.extraFields[28789];
                if (i) {
                  var y = x(i.value);
                  return y.readInt(1) !== 1 || u(this.fileName) !== y.readInt(4) ? null : r.utf8decode(y.readData(i.length - 5));
                }
                return null;
              }, findExtraFieldUnicodeComment: function() {
                var i = this.extraFields[25461];
                if (i) {
                  var y = x(i.value);
                  return y.readInt(1) !== 1 || u(this.fileComment) !== y.readInt(4) ? null : r.utf8decode(y.readData(i.length - 5));
                }
                return null;
              } }, M.exports = n;
            }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(P, M, E) {
              function x(y, d, h) {
                this.name = y, this.dir = h.dir, this.date = h.date, this.comment = h.comment, this.unixPermissions = h.unixPermissions, this.dosPermissions = h.dosPermissions, this._data = d, this._dataBinary = h.binary, this.options = { compression: h.compression, compressionOptions: h.compressionOptions };
              }
              var v = P("./stream/StreamHelper"), e = P("./stream/DataWorker"), u = P("./utf8"), r = P("./compressedObject"), m = P("./stream/GenericWorker");
              x.prototype = { internalStream: function(y) {
                var d = null, h = "string";
                try {
                  if (!y)
                    throw new Error("No output type specified.");
                  var f = (h = y.toLowerCase()) === "string" || h === "text";
                  h !== "binarystring" && h !== "text" || (h = "string"), d = this._decompressWorker();
                  var g = !this._dataBinary;
                  g && !f && (d = d.pipe(new u.Utf8EncodeWorker())), !g && f && (d = d.pipe(new u.Utf8DecodeWorker()));
                } catch (A) {
                  (d = new m("error")).error(A);
                }
                return new v(d, h, "");
              }, async: function(y, d) {
                return this.internalStream(y).accumulate(d);
              }, nodeStream: function(y, d) {
                return this.internalStream(y || "nodebuffer").toNodejsStream(d);
              }, _compressWorker: function(y, d) {
                if (this._data instanceof r && this._data.compression.magic === y.magic)
                  return this._data.getCompressedWorker();
                var h = this._decompressWorker();
                return this._dataBinary || (h = h.pipe(new u.Utf8EncodeWorker())), r.createWorkerFrom(h, y, d);
              }, _decompressWorker: function() {
                return this._data instanceof r ? this._data.getContentWorker() : this._data instanceof m ? this._data : new e(this._data);
              } };
              for (var p = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], n = function() {
                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
              }, i = 0; i < p.length; i++)
                x.prototype[p[i]] = n;
              M.exports = x;
            }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(P, M, E) {
              (function(x) {
                var v, e, u = x.MutationObserver || x.WebKitMutationObserver;
                if (u) {
                  var r = 0, m = new u(y), p = x.document.createTextNode("");
                  m.observe(p, { characterData: true }), v = function() {
                    p.data = r = ++r % 2;
                  };
                } else if (x.setImmediate || x.MessageChannel === void 0)
                  v = "document" in x && "onreadystatechange" in x.document.createElement("script") ? function() {
                    var d = x.document.createElement("script");
                    d.onreadystatechange = function() {
                      y(), d.onreadystatechange = null, d.parentNode.removeChild(d), d = null;
                    }, x.document.documentElement.appendChild(d);
                  } : function() {
                    setTimeout(y, 0);
                  };
                else {
                  var n = new x.MessageChannel();
                  n.port1.onmessage = y, v = function() {
                    n.port2.postMessage(0);
                  };
                }
                var i = [];
                function y() {
                  var d, h;
                  e = true;
                  for (var f = i.length; f; ) {
                    for (h = i, i = [], d = -1; ++d < f; )
                      h[d]();
                    f = i.length;
                  }
                  e = false;
                }
                M.exports = function(d) {
                  i.push(d) !== 1 || e || v();
                };
              }).call(this, typeof ue != "undefined" ? ue : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
            }, {}], 37: [function(P, M, E) {
              var x = P("immediate");
              function v() {
              }
              var e = {}, u = ["REJECTED"], r = ["FULFILLED"], m = ["PENDING"];
              function p(f) {
                if (typeof f != "function")
                  throw new TypeError("resolver must be a function");
                this.state = m, this.queue = [], this.outcome = void 0, f !== v && d(this, f);
              }
              function n(f, g, A) {
                this.promise = f, typeof g == "function" && (this.onFulfilled = g, this.callFulfilled = this.otherCallFulfilled), typeof A == "function" && (this.onRejected = A, this.callRejected = this.otherCallRejected);
              }
              function i(f, g, A) {
                x(function() {
                  var C;
                  try {
                    C = g(A);
                  } catch (a) {
                    return e.reject(f, a);
                  }
                  C === f ? e.reject(f, new TypeError("Cannot resolve promise with itself")) : e.resolve(f, C);
                });
              }
              function y(f) {
                var g = f && f.then;
                if (f && (typeof f == "object" || typeof f == "function") && typeof g == "function")
                  return function() {
                    g.apply(f, arguments);
                  };
              }
              function d(f, g) {
                var A = false;
                function C(t) {
                  A || (A = true, e.reject(f, t));
                }
                function a(t) {
                  A || (A = true, e.resolve(f, t));
                }
                var o = h(function() {
                  g(a, C);
                });
                o.status === "error" && C(o.value);
              }
              function h(f, g) {
                var A = {};
                try {
                  A.value = f(g), A.status = "success";
                } catch (C) {
                  A.status = "error", A.value = C;
                }
                return A;
              }
              (M.exports = p).prototype.finally = function(f) {
                if (typeof f != "function")
                  return this;
                var g = this.constructor;
                return this.then(function(A) {
                  return g.resolve(f()).then(function() {
                    return A;
                  });
                }, function(A) {
                  return g.resolve(f()).then(function() {
                    throw A;
                  });
                });
              }, p.prototype.catch = function(f) {
                return this.then(null, f);
              }, p.prototype.then = function(f, g) {
                if (typeof f != "function" && this.state === r || typeof g != "function" && this.state === u)
                  return this;
                var A = new this.constructor(v);
                return this.state !== m ? i(A, this.state === r ? f : g, this.outcome) : this.queue.push(new n(A, f, g)), A;
              }, n.prototype.callFulfilled = function(f) {
                e.resolve(this.promise, f);
              }, n.prototype.otherCallFulfilled = function(f) {
                i(this.promise, this.onFulfilled, f);
              }, n.prototype.callRejected = function(f) {
                e.reject(this.promise, f);
              }, n.prototype.otherCallRejected = function(f) {
                i(this.promise, this.onRejected, f);
              }, e.resolve = function(f, g) {
                var A = h(y, g);
                if (A.status === "error")
                  return e.reject(f, A.value);
                var C = A.value;
                if (C)
                  d(f, C);
                else {
                  f.state = r, f.outcome = g;
                  for (var a = -1, o = f.queue.length; ++a < o; )
                    f.queue[a].callFulfilled(g);
                }
                return f;
              }, e.reject = function(f, g) {
                f.state = u, f.outcome = g;
                for (var A = -1, C = f.queue.length; ++A < C; )
                  f.queue[A].callRejected(g);
                return f;
              }, p.resolve = function(f) {
                return f instanceof this ? f : e.resolve(new this(v), f);
              }, p.reject = function(f) {
                var g = new this(v);
                return e.reject(g, f);
              }, p.all = function(f) {
                var g = this;
                if (Object.prototype.toString.call(f) !== "[object Array]")
                  return this.reject(new TypeError("must be an array"));
                var A = f.length, C = false;
                if (!A)
                  return this.resolve([]);
                for (var a = new Array(A), o = 0, t = -1, l = new this(v); ++t < A; )
                  b(f[t], t);
                return l;
                function b(k, D) {
                  g.resolve(k).then(function(_) {
                    a[D] = _, ++o !== A || C || (C = true, e.resolve(l, a));
                  }, function(_) {
                    C || (C = true, e.reject(l, _));
                  });
                }
              }, p.race = function(f) {
                var g = this;
                if (Object.prototype.toString.call(f) !== "[object Array]")
                  return this.reject(new TypeError("must be an array"));
                var A = f.length, C = false;
                if (!A)
                  return this.resolve([]);
                for (var a = -1, o = new this(v); ++a < A; )
                  t = f[a], g.resolve(t).then(function(l) {
                    C || (C = true, e.resolve(o, l));
                  }, function(l) {
                    C || (C = true, e.reject(o, l));
                  });
                var t;
                return o;
              };
            }, { immediate: 36 }], 38: [function(P, M, E) {
              var x = {};
              (0, P("./lib/utils/common").assign)(x, P("./lib/deflate"), P("./lib/inflate"), P("./lib/zlib/constants")), M.exports = x;
            }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(P, M, E) {
              var x = P("./zlib/deflate"), v = P("./utils/common"), e = P("./utils/strings"), u = P("./zlib/messages"), r = P("./zlib/zstream"), m = Object.prototype.toString, p = 0, n = -1, i = 0, y = 8;
              function d(f) {
                if (!(this instanceof d))
                  return new d(f);
                this.options = v.assign({ level: n, method: y, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: i, to: "" }, f || {});
                var g = this.options;
                g.raw && 0 < g.windowBits ? g.windowBits = -g.windowBits : g.gzip && 0 < g.windowBits && g.windowBits < 16 && (g.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new r(), this.strm.avail_out = 0;
                var A = x.deflateInit2(this.strm, g.level, g.method, g.windowBits, g.memLevel, g.strategy);
                if (A !== p)
                  throw new Error(u[A]);
                if (g.header && x.deflateSetHeader(this.strm, g.header), g.dictionary) {
                  var C;
                  if (C = typeof g.dictionary == "string" ? e.string2buf(g.dictionary) : m.call(g.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(g.dictionary) : g.dictionary, (A = x.deflateSetDictionary(this.strm, C)) !== p)
                    throw new Error(u[A]);
                  this._dict_set = true;
                }
              }
              function h(f, g) {
                var A = new d(g);
                if (A.push(f, true), A.err)
                  throw A.msg || u[A.err];
                return A.result;
              }
              d.prototype.push = function(f, g) {
                var A, C, a = this.strm, o = this.options.chunkSize;
                if (this.ended)
                  return false;
                C = g === ~~g ? g : g === true ? 4 : 0, typeof f == "string" ? a.input = e.string2buf(f) : m.call(f) === "[object ArrayBuffer]" ? a.input = new Uint8Array(f) : a.input = f, a.next_in = 0, a.avail_in = a.input.length;
                do {
                  if (a.avail_out === 0 && (a.output = new v.Buf8(o), a.next_out = 0, a.avail_out = o), (A = x.deflate(a, C)) !== 1 && A !== p)
                    return this.onEnd(A), !(this.ended = true);
                  a.avail_out !== 0 && (a.avail_in !== 0 || C !== 4 && C !== 2) || (this.options.to === "string" ? this.onData(e.buf2binstring(v.shrinkBuf(a.output, a.next_out))) : this.onData(v.shrinkBuf(a.output, a.next_out)));
                } while ((0 < a.avail_in || a.avail_out === 0) && A !== 1);
                return C === 4 ? (A = x.deflateEnd(this.strm), this.onEnd(A), this.ended = true, A === p) : C !== 2 || (this.onEnd(p), !(a.avail_out = 0));
              }, d.prototype.onData = function(f) {
                this.chunks.push(f);
              }, d.prototype.onEnd = function(f) {
                f === p && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = v.flattenChunks(this.chunks)), this.chunks = [], this.err = f, this.msg = this.strm.msg;
              }, E.Deflate = d, E.deflate = h, E.deflateRaw = function(f, g) {
                return (g = g || {}).raw = true, h(f, g);
              }, E.gzip = function(f, g) {
                return (g = g || {}).gzip = true, h(f, g);
              };
            }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(P, M, E) {
              var x = P("./zlib/inflate"), v = P("./utils/common"), e = P("./utils/strings"), u = P("./zlib/constants"), r = P("./zlib/messages"), m = P("./zlib/zstream"), p = P("./zlib/gzheader"), n = Object.prototype.toString;
              function i(d) {
                if (!(this instanceof i))
                  return new i(d);
                this.options = v.assign({ chunkSize: 16384, windowBits: 0, to: "" }, d || {});
                var h = this.options;
                h.raw && 0 <= h.windowBits && h.windowBits < 16 && (h.windowBits = -h.windowBits, h.windowBits === 0 && (h.windowBits = -15)), !(0 <= h.windowBits && h.windowBits < 16) || d && d.windowBits || (h.windowBits += 32), 15 < h.windowBits && h.windowBits < 48 && !(15 & h.windowBits) && (h.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
                var f = x.inflateInit2(this.strm, h.windowBits);
                if (f !== u.Z_OK)
                  throw new Error(r[f]);
                this.header = new p(), x.inflateGetHeader(this.strm, this.header);
              }
              function y(d, h) {
                var f = new i(h);
                if (f.push(d, true), f.err)
                  throw f.msg || r[f.err];
                return f.result;
              }
              i.prototype.push = function(d, h) {
                var f, g, A, C, a, o, t = this.strm, l = this.options.chunkSize, b = this.options.dictionary, k = false;
                if (this.ended)
                  return false;
                g = h === ~~h ? h : h === true ? u.Z_FINISH : u.Z_NO_FLUSH, typeof d == "string" ? t.input = e.binstring2buf(d) : n.call(d) === "[object ArrayBuffer]" ? t.input = new Uint8Array(d) : t.input = d, t.next_in = 0, t.avail_in = t.input.length;
                do {
                  if (t.avail_out === 0 && (t.output = new v.Buf8(l), t.next_out = 0, t.avail_out = l), (f = x.inflate(t, u.Z_NO_FLUSH)) === u.Z_NEED_DICT && b && (o = typeof b == "string" ? e.string2buf(b) : n.call(b) === "[object ArrayBuffer]" ? new Uint8Array(b) : b, f = x.inflateSetDictionary(this.strm, o)), f === u.Z_BUF_ERROR && k === true && (f = u.Z_OK, k = false), f !== u.Z_STREAM_END && f !== u.Z_OK)
                    return this.onEnd(f), !(this.ended = true);
                  t.next_out && (t.avail_out !== 0 && f !== u.Z_STREAM_END && (t.avail_in !== 0 || g !== u.Z_FINISH && g !== u.Z_SYNC_FLUSH) || (this.options.to === "string" ? (A = e.utf8border(t.output, t.next_out), C = t.next_out - A, a = e.buf2string(t.output, A), t.next_out = C, t.avail_out = l - C, C && v.arraySet(t.output, t.output, A, C, 0), this.onData(a)) : this.onData(v.shrinkBuf(t.output, t.next_out)))), t.avail_in === 0 && t.avail_out === 0 && (k = true);
                } while ((0 < t.avail_in || t.avail_out === 0) && f !== u.Z_STREAM_END);
                return f === u.Z_STREAM_END && (g = u.Z_FINISH), g === u.Z_FINISH ? (f = x.inflateEnd(this.strm), this.onEnd(f), this.ended = true, f === u.Z_OK) : g !== u.Z_SYNC_FLUSH || (this.onEnd(u.Z_OK), !(t.avail_out = 0));
              }, i.prototype.onData = function(d) {
                this.chunks.push(d);
              }, i.prototype.onEnd = function(d) {
                d === u.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = v.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
              }, E.Inflate = i, E.inflate = y, E.inflateRaw = function(d, h) {
                return (h = h || {}).raw = true, y(d, h);
              }, E.ungzip = y;
            }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(P, M, E) {
              var x = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Int32Array != "undefined";
              E.assign = function(u) {
                for (var r = Array.prototype.slice.call(arguments, 1); r.length; ) {
                  var m = r.shift();
                  if (m) {
                    if (typeof m != "object")
                      throw new TypeError(m + "must be non-object");
                    for (var p in m)
                      m.hasOwnProperty(p) && (u[p] = m[p]);
                  }
                }
                return u;
              }, E.shrinkBuf = function(u, r) {
                return u.length === r ? u : u.subarray ? u.subarray(0, r) : (u.length = r, u);
              };
              var v = { arraySet: function(u, r, m, p, n) {
                if (r.subarray && u.subarray)
                  u.set(r.subarray(m, m + p), n);
                else
                  for (var i = 0; i < p; i++)
                    u[n + i] = r[m + i];
              }, flattenChunks: function(u) {
                var r, m, p, n, i, y;
                for (r = p = 0, m = u.length; r < m; r++)
                  p += u[r].length;
                for (y = new Uint8Array(p), r = n = 0, m = u.length; r < m; r++)
                  i = u[r], y.set(i, n), n += i.length;
                return y;
              } }, e = { arraySet: function(u, r, m, p, n) {
                for (var i = 0; i < p; i++)
                  u[n + i] = r[m + i];
              }, flattenChunks: function(u) {
                return [].concat.apply([], u);
              } };
              E.setTyped = function(u) {
                u ? (E.Buf8 = Uint8Array, E.Buf16 = Uint16Array, E.Buf32 = Int32Array, E.assign(E, v)) : (E.Buf8 = Array, E.Buf16 = Array, E.Buf32 = Array, E.assign(E, e));
              }, E.setTyped(x);
            }, {}], 42: [function(P, M, E) {
              var x = P("./common"), v = true, e = true;
              try {
                String.fromCharCode.apply(null, [0]);
              } catch (p) {
                v = false;
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1));
              } catch (p) {
                e = false;
              }
              for (var u = new x.Buf8(256), r = 0; r < 256; r++)
                u[r] = 252 <= r ? 6 : 248 <= r ? 5 : 240 <= r ? 4 : 224 <= r ? 3 : 192 <= r ? 2 : 1;
              function m(p, n) {
                if (n < 65537 && (p.subarray && e || !p.subarray && v))
                  return String.fromCharCode.apply(null, x.shrinkBuf(p, n));
                for (var i = "", y = 0; y < n; y++)
                  i += String.fromCharCode(p[y]);
                return i;
              }
              u[254] = u[254] = 1, E.string2buf = function(p) {
                var n, i, y, d, h, f = p.length, g = 0;
                for (d = 0; d < f; d++)
                  (64512 & (i = p.charCodeAt(d))) == 55296 && d + 1 < f && (64512 & (y = p.charCodeAt(d + 1))) == 56320 && (i = 65536 + (i - 55296 << 10) + (y - 56320), d++), g += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
                for (n = new x.Buf8(g), d = h = 0; h < g; d++)
                  (64512 & (i = p.charCodeAt(d))) == 55296 && d + 1 < f && (64512 & (y = p.charCodeAt(d + 1))) == 56320 && (i = 65536 + (i - 55296 << 10) + (y - 56320), d++), i < 128 ? n[h++] = i : (i < 2048 ? n[h++] = 192 | i >>> 6 : (i < 65536 ? n[h++] = 224 | i >>> 12 : (n[h++] = 240 | i >>> 18, n[h++] = 128 | i >>> 12 & 63), n[h++] = 128 | i >>> 6 & 63), n[h++] = 128 | 63 & i);
                return n;
              }, E.buf2binstring = function(p) {
                return m(p, p.length);
              }, E.binstring2buf = function(p) {
                for (var n = new x.Buf8(p.length), i = 0, y = n.length; i < y; i++)
                  n[i] = p.charCodeAt(i);
                return n;
              }, E.buf2string = function(p, n) {
                var i, y, d, h, f = n || p.length, g = new Array(2 * f);
                for (i = y = 0; i < f; )
                  if ((d = p[i++]) < 128)
                    g[y++] = d;
                  else if (4 < (h = u[d]))
                    g[y++] = 65533, i += h - 1;
                  else {
                    for (d &= h === 2 ? 31 : h === 3 ? 15 : 7; 1 < h && i < f; )
                      d = d << 6 | 63 & p[i++], h--;
                    1 < h ? g[y++] = 65533 : d < 65536 ? g[y++] = d : (d -= 65536, g[y++] = 55296 | d >> 10 & 1023, g[y++] = 56320 | 1023 & d);
                  }
                return m(g, y);
              }, E.utf8border = function(p, n) {
                var i;
                for ((n = n || p.length) > p.length && (n = p.length), i = n - 1; 0 <= i && (192 & p[i]) == 128; )
                  i--;
                return i < 0 || i === 0 ? n : i + u[p[i]] > n ? i : n;
              };
            }, { "./common": 41 }], 43: [function(P, M, E) {
              M.exports = function(x, v, e, u) {
                for (var r = 65535 & x | 0, m = x >>> 16 & 65535 | 0, p = 0; e !== 0; ) {
                  for (e -= p = 2e3 < e ? 2e3 : e; m = m + (r = r + v[u++] | 0) | 0, --p; )
                    ;
                  r %= 65521, m %= 65521;
                }
                return r | m << 16 | 0;
              };
            }, {}], 44: [function(P, M, E) {
              M.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
            }, {}], 45: [function(P, M, E) {
              var x = function() {
                for (var v, e = [], u = 0; u < 256; u++) {
                  v = u;
                  for (var r = 0; r < 8; r++)
                    v = 1 & v ? 3988292384 ^ v >>> 1 : v >>> 1;
                  e[u] = v;
                }
                return e;
              }();
              M.exports = function(v, e, u, r) {
                var m = x, p = r + u;
                v ^= -1;
                for (var n = r; n < p; n++)
                  v = v >>> 8 ^ m[255 & (v ^ e[n])];
                return -1 ^ v;
              };
            }, {}], 46: [function(P, M, E) {
              var x, v = P("../utils/common"), e = P("./trees"), u = P("./adler32"), r = P("./crc32"), m = P("./messages"), p = 0, n = 4, i = 0, y = -2, d = -1, h = 4, f = 2, g = 8, A = 9, C = 286, a = 30, o = 19, t = 2 * C + 1, l = 15, b = 3, k = 258, D = k + b + 1, _ = 42, T = 113, s = 1, R = 2, V = 3, j = 4;
              function q(c, F) {
                return c.msg = m[F], F;
              }
              function W(c) {
                return (c << 1) - (4 < c ? 9 : 0);
              }
              function Q(c) {
                for (var F = c.length; 0 <= --F; )
                  c[F] = 0;
              }
              function z(c) {
                var F = c.state, I = F.pending;
                I > c.avail_out && (I = c.avail_out), I !== 0 && (v.arraySet(c.output, F.pending_buf, F.pending_out, I, c.next_out), c.next_out += I, F.pending_out += I, c.total_out += I, c.avail_out -= I, F.pending -= I, F.pending === 0 && (F.pending_out = 0));
              }
              function O(c, F) {
                e._tr_flush_block(c, 0 <= c.block_start ? c.block_start : -1, c.strstart - c.block_start, F), c.block_start = c.strstart, z(c.strm);
              }
              function J(c, F) {
                c.pending_buf[c.pending++] = F;
              }
              function X(c, F) {
                c.pending_buf[c.pending++] = F >>> 8 & 255, c.pending_buf[c.pending++] = 255 & F;
              }
              function Z(c, F) {
                var I, S, w = c.max_chain_length, N = c.strstart, L = c.prev_length, U = c.nice_match, B = c.strstart > c.w_size - D ? c.strstart - (c.w_size - D) : 0, H = c.window, G = c.w_mask, $ = c.prev, K = c.strstart + k, ae = H[N + L - 1], te = H[N + L];
                c.prev_length >= c.good_match && (w >>= 2), U > c.lookahead && (U = c.lookahead);
                do
                  if (H[(I = F) + L] === te && H[I + L - 1] === ae && H[I] === H[N] && H[++I] === H[N + 1]) {
                    N += 2, I++;
                    do
                      ;
                    while (H[++N] === H[++I] && H[++N] === H[++I] && H[++N] === H[++I] && H[++N] === H[++I] && H[++N] === H[++I] && H[++N] === H[++I] && H[++N] === H[++I] && H[++N] === H[++I] && N < K);
                    if (S = k - (K - N), N = K - k, L < S) {
                      if (c.match_start = F, U <= (L = S))
                        break;
                      ae = H[N + L - 1], te = H[N + L];
                    }
                  }
                while ((F = $[F & G]) > B && --w != 0);
                return L <= c.lookahead ? L : c.lookahead;
              }
              function se(c) {
                var F, I, S, w, N, L, U, B, H, G, $ = c.w_size;
                do {
                  if (w = c.window_size - c.lookahead - c.strstart, c.strstart >= $ + ($ - D)) {
                    for (v.arraySet(c.window, c.window, $, $, 0), c.match_start -= $, c.strstart -= $, c.block_start -= $, F = I = c.hash_size; S = c.head[--F], c.head[F] = $ <= S ? S - $ : 0, --I; )
                      ;
                    for (F = I = $; S = c.prev[--F], c.prev[F] = $ <= S ? S - $ : 0, --I; )
                      ;
                    w += $;
                  }
                  if (c.strm.avail_in === 0)
                    break;
                  if (L = c.strm, U = c.window, B = c.strstart + c.lookahead, H = w, G = void 0, G = L.avail_in, H < G && (G = H), I = G === 0 ? 0 : (L.avail_in -= G, v.arraySet(U, L.input, L.next_in, G, B), L.state.wrap === 1 ? L.adler = u(L.adler, U, G, B) : L.state.wrap === 2 && (L.adler = r(L.adler, U, G, B)), L.next_in += G, L.total_in += G, G), c.lookahead += I, c.lookahead + c.insert >= b)
                    for (N = c.strstart - c.insert, c.ins_h = c.window[N], c.ins_h = (c.ins_h << c.hash_shift ^ c.window[N + 1]) & c.hash_mask; c.insert && (c.ins_h = (c.ins_h << c.hash_shift ^ c.window[N + b - 1]) & c.hash_mask, c.prev[N & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = N, N++, c.insert--, !(c.lookahead + c.insert < b)); )
                      ;
                } while (c.lookahead < D && c.strm.avail_in !== 0);
              }
              function he(c, F) {
                for (var I, S; ; ) {
                  if (c.lookahead < D) {
                    if (se(c), c.lookahead < D && F === p)
                      return s;
                    if (c.lookahead === 0)
                      break;
                  }
                  if (I = 0, c.lookahead >= b && (c.ins_h = (c.ins_h << c.hash_shift ^ c.window[c.strstart + b - 1]) & c.hash_mask, I = c.prev[c.strstart & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = c.strstart), I !== 0 && c.strstart - I <= c.w_size - D && (c.match_length = Z(c, I)), c.match_length >= b)
                    if (S = e._tr_tally(c, c.strstart - c.match_start, c.match_length - b), c.lookahead -= c.match_length, c.match_length <= c.max_lazy_match && c.lookahead >= b) {
                      for (c.match_length--; c.strstart++, c.ins_h = (c.ins_h << c.hash_shift ^ c.window[c.strstart + b - 1]) & c.hash_mask, I = c.prev[c.strstart & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = c.strstart, --c.match_length != 0; )
                        ;
                      c.strstart++;
                    } else
                      c.strstart += c.match_length, c.match_length = 0, c.ins_h = c.window[c.strstart], c.ins_h = (c.ins_h << c.hash_shift ^ c.window[c.strstart + 1]) & c.hash_mask;
                  else
                    S = e._tr_tally(c, 0, c.window[c.strstart]), c.lookahead--, c.strstart++;
                  if (S && (O(c, false), c.strm.avail_out === 0))
                    return s;
                }
                return c.insert = c.strstart < b - 1 ? c.strstart : b - 1, F === n ? (O(c, true), c.strm.avail_out === 0 ? V : j) : c.last_lit && (O(c, false), c.strm.avail_out === 0) ? s : R;
              }
              function ee(c, F) {
                for (var I, S, w; ; ) {
                  if (c.lookahead < D) {
                    if (se(c), c.lookahead < D && F === p)
                      return s;
                    if (c.lookahead === 0)
                      break;
                  }
                  if (I = 0, c.lookahead >= b && (c.ins_h = (c.ins_h << c.hash_shift ^ c.window[c.strstart + b - 1]) & c.hash_mask, I = c.prev[c.strstart & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = c.strstart), c.prev_length = c.match_length, c.prev_match = c.match_start, c.match_length = b - 1, I !== 0 && c.prev_length < c.max_lazy_match && c.strstart - I <= c.w_size - D && (c.match_length = Z(c, I), c.match_length <= 5 && (c.strategy === 1 || c.match_length === b && 4096 < c.strstart - c.match_start) && (c.match_length = b - 1)), c.prev_length >= b && c.match_length <= c.prev_length) {
                    for (w = c.strstart + c.lookahead - b, S = e._tr_tally(c, c.strstart - 1 - c.prev_match, c.prev_length - b), c.lookahead -= c.prev_length - 1, c.prev_length -= 2; ++c.strstart <= w && (c.ins_h = (c.ins_h << c.hash_shift ^ c.window[c.strstart + b - 1]) & c.hash_mask, I = c.prev[c.strstart & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = c.strstart), --c.prev_length != 0; )
                      ;
                    if (c.match_available = 0, c.match_length = b - 1, c.strstart++, S && (O(c, false), c.strm.avail_out === 0))
                      return s;
                  } else if (c.match_available) {
                    if ((S = e._tr_tally(c, 0, c.window[c.strstart - 1])) && O(c, false), c.strstart++, c.lookahead--, c.strm.avail_out === 0)
                      return s;
                  } else
                    c.match_available = 1, c.strstart++, c.lookahead--;
                }
                return c.match_available && (S = e._tr_tally(c, 0, c.window[c.strstart - 1]), c.match_available = 0), c.insert = c.strstart < b - 1 ? c.strstart : b - 1, F === n ? (O(c, true), c.strm.avail_out === 0 ? V : j) : c.last_lit && (O(c, false), c.strm.avail_out === 0) ? s : R;
              }
              function ne(c, F, I, S, w) {
                this.good_length = c, this.max_lazy = F, this.nice_length = I, this.max_chain = S, this.func = w;
              }
              function de() {
                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = g, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new v.Buf16(2 * t), this.dyn_dtree = new v.Buf16(2 * (2 * a + 1)), this.bl_tree = new v.Buf16(2 * (2 * o + 1)), Q(this.dyn_ltree), Q(this.dyn_dtree), Q(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new v.Buf16(l + 1), this.heap = new v.Buf16(2 * C + 1), Q(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new v.Buf16(2 * C + 1), Q(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
              }
              function ie(c) {
                var F;
                return c && c.state ? (c.total_in = c.total_out = 0, c.data_type = f, (F = c.state).pending = 0, F.pending_out = 0, F.wrap < 0 && (F.wrap = -F.wrap), F.status = F.wrap ? _ : T, c.adler = F.wrap === 2 ? 0 : 1, F.last_flush = p, e._tr_init(F), i) : q(c, y);
              }
              function be(c) {
                var F = ie(c);
                return F === i && function(I) {
                  I.window_size = 2 * I.w_size, Q(I.head), I.max_lazy_match = x[I.level].max_lazy, I.good_match = x[I.level].good_length, I.nice_match = x[I.level].nice_length, I.max_chain_length = x[I.level].max_chain, I.strstart = 0, I.block_start = 0, I.lookahead = 0, I.insert = 0, I.match_length = I.prev_length = b - 1, I.match_available = 0, I.ins_h = 0;
                }(c.state), F;
              }
              function me(c, F, I, S, w, N) {
                if (!c)
                  return y;
                var L = 1;
                if (F === d && (F = 6), S < 0 ? (L = 0, S = -S) : 15 < S && (L = 2, S -= 16), w < 1 || A < w || I !== g || S < 8 || 15 < S || F < 0 || 9 < F || N < 0 || h < N)
                  return q(c, y);
                S === 8 && (S = 9);
                var U = new de();
                return (c.state = U).strm = c, U.wrap = L, U.gzhead = null, U.w_bits = S, U.w_size = 1 << U.w_bits, U.w_mask = U.w_size - 1, U.hash_bits = w + 7, U.hash_size = 1 << U.hash_bits, U.hash_mask = U.hash_size - 1, U.hash_shift = ~~((U.hash_bits + b - 1) / b), U.window = new v.Buf8(2 * U.w_size), U.head = new v.Buf16(U.hash_size), U.prev = new v.Buf16(U.w_size), U.lit_bufsize = 1 << w + 6, U.pending_buf_size = 4 * U.lit_bufsize, U.pending_buf = new v.Buf8(U.pending_buf_size), U.d_buf = 1 * U.lit_bufsize, U.l_buf = 3 * U.lit_bufsize, U.level = F, U.strategy = N, U.method = I, be(c);
              }
              x = [new ne(0, 0, 0, 0, function(c, F) {
                var I = 65535;
                for (I > c.pending_buf_size - 5 && (I = c.pending_buf_size - 5); ; ) {
                  if (c.lookahead <= 1) {
                    if (se(c), c.lookahead === 0 && F === p)
                      return s;
                    if (c.lookahead === 0)
                      break;
                  }
                  c.strstart += c.lookahead, c.lookahead = 0;
                  var S = c.block_start + I;
                  if ((c.strstart === 0 || c.strstart >= S) && (c.lookahead = c.strstart - S, c.strstart = S, O(c, false), c.strm.avail_out === 0) || c.strstart - c.block_start >= c.w_size - D && (O(c, false), c.strm.avail_out === 0))
                    return s;
                }
                return c.insert = 0, F === n ? (O(c, true), c.strm.avail_out === 0 ? V : j) : (c.strstart > c.block_start && (O(c, false), c.strm.avail_out), s);
              }), new ne(4, 4, 8, 4, he), new ne(4, 5, 16, 8, he), new ne(4, 6, 32, 32, he), new ne(4, 4, 16, 16, ee), new ne(8, 16, 32, 32, ee), new ne(8, 16, 128, 128, ee), new ne(8, 32, 128, 256, ee), new ne(32, 128, 258, 1024, ee), new ne(32, 258, 258, 4096, ee)], E.deflateInit = function(c, F) {
                return me(c, F, g, 15, 8, 0);
              }, E.deflateInit2 = me, E.deflateReset = be, E.deflateResetKeep = ie, E.deflateSetHeader = function(c, F) {
                return c && c.state ? c.state.wrap !== 2 ? y : (c.state.gzhead = F, i) : y;
              }, E.deflate = function(c, F) {
                var I, S, w, N;
                if (!c || !c.state || 5 < F || F < 0)
                  return c ? q(c, y) : y;
                if (S = c.state, !c.output || !c.input && c.avail_in !== 0 || S.status === 666 && F !== n)
                  return q(c, c.avail_out === 0 ? -5 : y);
                if (S.strm = c, I = S.last_flush, S.last_flush = F, S.status === _)
                  if (S.wrap === 2)
                    c.adler = 0, J(S, 31), J(S, 139), J(S, 8), S.gzhead ? (J(S, (S.gzhead.text ? 1 : 0) + (S.gzhead.hcrc ? 2 : 0) + (S.gzhead.extra ? 4 : 0) + (S.gzhead.name ? 8 : 0) + (S.gzhead.comment ? 16 : 0)), J(S, 255 & S.gzhead.time), J(S, S.gzhead.time >> 8 & 255), J(S, S.gzhead.time >> 16 & 255), J(S, S.gzhead.time >> 24 & 255), J(S, S.level === 9 ? 2 : 2 <= S.strategy || S.level < 2 ? 4 : 0), J(S, 255 & S.gzhead.os), S.gzhead.extra && S.gzhead.extra.length && (J(S, 255 & S.gzhead.extra.length), J(S, S.gzhead.extra.length >> 8 & 255)), S.gzhead.hcrc && (c.adler = r(c.adler, S.pending_buf, S.pending, 0)), S.gzindex = 0, S.status = 69) : (J(S, 0), J(S, 0), J(S, 0), J(S, 0), J(S, 0), J(S, S.level === 9 ? 2 : 2 <= S.strategy || S.level < 2 ? 4 : 0), J(S, 3), S.status = T);
                  else {
                    var L = g + (S.w_bits - 8 << 4) << 8;
                    L |= (2 <= S.strategy || S.level < 2 ? 0 : S.level < 6 ? 1 : S.level === 6 ? 2 : 3) << 6, S.strstart !== 0 && (L |= 32), L += 31 - L % 31, S.status = T, X(S, L), S.strstart !== 0 && (X(S, c.adler >>> 16), X(S, 65535 & c.adler)), c.adler = 1;
                  }
                if (S.status === 69)
                  if (S.gzhead.extra) {
                    for (w = S.pending; S.gzindex < (65535 & S.gzhead.extra.length) && (S.pending !== S.pending_buf_size || (S.gzhead.hcrc && S.pending > w && (c.adler = r(c.adler, S.pending_buf, S.pending - w, w)), z(c), w = S.pending, S.pending !== S.pending_buf_size)); )
                      J(S, 255 & S.gzhead.extra[S.gzindex]), S.gzindex++;
                    S.gzhead.hcrc && S.pending > w && (c.adler = r(c.adler, S.pending_buf, S.pending - w, w)), S.gzindex === S.gzhead.extra.length && (S.gzindex = 0, S.status = 73);
                  } else
                    S.status = 73;
                if (S.status === 73)
                  if (S.gzhead.name) {
                    w = S.pending;
                    do {
                      if (S.pending === S.pending_buf_size && (S.gzhead.hcrc && S.pending > w && (c.adler = r(c.adler, S.pending_buf, S.pending - w, w)), z(c), w = S.pending, S.pending === S.pending_buf_size)) {
                        N = 1;
                        break;
                      }
                      N = S.gzindex < S.gzhead.name.length ? 255 & S.gzhead.name.charCodeAt(S.gzindex++) : 0, J(S, N);
                    } while (N !== 0);
                    S.gzhead.hcrc && S.pending > w && (c.adler = r(c.adler, S.pending_buf, S.pending - w, w)), N === 0 && (S.gzindex = 0, S.status = 91);
                  } else
                    S.status = 91;
                if (S.status === 91)
                  if (S.gzhead.comment) {
                    w = S.pending;
                    do {
                      if (S.pending === S.pending_buf_size && (S.gzhead.hcrc && S.pending > w && (c.adler = r(c.adler, S.pending_buf, S.pending - w, w)), z(c), w = S.pending, S.pending === S.pending_buf_size)) {
                        N = 1;
                        break;
                      }
                      N = S.gzindex < S.gzhead.comment.length ? 255 & S.gzhead.comment.charCodeAt(S.gzindex++) : 0, J(S, N);
                    } while (N !== 0);
                    S.gzhead.hcrc && S.pending > w && (c.adler = r(c.adler, S.pending_buf, S.pending - w, w)), N === 0 && (S.status = 103);
                  } else
                    S.status = 103;
                if (S.status === 103 && (S.gzhead.hcrc ? (S.pending + 2 > S.pending_buf_size && z(c), S.pending + 2 <= S.pending_buf_size && (J(S, 255 & c.adler), J(S, c.adler >> 8 & 255), c.adler = 0, S.status = T)) : S.status = T), S.pending !== 0) {
                  if (z(c), c.avail_out === 0)
                    return S.last_flush = -1, i;
                } else if (c.avail_in === 0 && W(F) <= W(I) && F !== n)
                  return q(c, -5);
                if (S.status === 666 && c.avail_in !== 0)
                  return q(c, -5);
                if (c.avail_in !== 0 || S.lookahead !== 0 || F !== p && S.status !== 666) {
                  var U = S.strategy === 2 ? function(B, H) {
                    for (var G; ; ) {
                      if (B.lookahead === 0 && (se(B), B.lookahead === 0)) {
                        if (H === p)
                          return s;
                        break;
                      }
                      if (B.match_length = 0, G = e._tr_tally(B, 0, B.window[B.strstart]), B.lookahead--, B.strstart++, G && (O(B, false), B.strm.avail_out === 0))
                        return s;
                    }
                    return B.insert = 0, H === n ? (O(B, true), B.strm.avail_out === 0 ? V : j) : B.last_lit && (O(B, false), B.strm.avail_out === 0) ? s : R;
                  }(S, F) : S.strategy === 3 ? function(B, H) {
                    for (var G, $, K, ae, te = B.window; ; ) {
                      if (B.lookahead <= k) {
                        if (se(B), B.lookahead <= k && H === p)
                          return s;
                        if (B.lookahead === 0)
                          break;
                      }
                      if (B.match_length = 0, B.lookahead >= b && 0 < B.strstart && ($ = te[K = B.strstart - 1]) === te[++K] && $ === te[++K] && $ === te[++K]) {
                        ae = B.strstart + k;
                        do
                          ;
                        while ($ === te[++K] && $ === te[++K] && $ === te[++K] && $ === te[++K] && $ === te[++K] && $ === te[++K] && $ === te[++K] && $ === te[++K] && K < ae);
                        B.match_length = k - (ae - K), B.match_length > B.lookahead && (B.match_length = B.lookahead);
                      }
                      if (B.match_length >= b ? (G = e._tr_tally(B, 1, B.match_length - b), B.lookahead -= B.match_length, B.strstart += B.match_length, B.match_length = 0) : (G = e._tr_tally(B, 0, B.window[B.strstart]), B.lookahead--, B.strstart++), G && (O(B, false), B.strm.avail_out === 0))
                        return s;
                    }
                    return B.insert = 0, H === n ? (O(B, true), B.strm.avail_out === 0 ? V : j) : B.last_lit && (O(B, false), B.strm.avail_out === 0) ? s : R;
                  }(S, F) : x[S.level].func(S, F);
                  if (U !== V && U !== j || (S.status = 666), U === s || U === V)
                    return c.avail_out === 0 && (S.last_flush = -1), i;
                  if (U === R && (F === 1 ? e._tr_align(S) : F !== 5 && (e._tr_stored_block(S, 0, 0, false), F === 3 && (Q(S.head), S.lookahead === 0 && (S.strstart = 0, S.block_start = 0, S.insert = 0))), z(c), c.avail_out === 0))
                    return S.last_flush = -1, i;
                }
                return F !== n ? i : S.wrap <= 0 ? 1 : (S.wrap === 2 ? (J(S, 255 & c.adler), J(S, c.adler >> 8 & 255), J(S, c.adler >> 16 & 255), J(S, c.adler >> 24 & 255), J(S, 255 & c.total_in), J(S, c.total_in >> 8 & 255), J(S, c.total_in >> 16 & 255), J(S, c.total_in >> 24 & 255)) : (X(S, c.adler >>> 16), X(S, 65535 & c.adler)), z(c), 0 < S.wrap && (S.wrap = -S.wrap), S.pending !== 0 ? i : 1);
              }, E.deflateEnd = function(c) {
                var F;
                return c && c.state ? (F = c.state.status) !== _ && F !== 69 && F !== 73 && F !== 91 && F !== 103 && F !== T && F !== 666 ? q(c, y) : (c.state = null, F === T ? q(c, -3) : i) : y;
              }, E.deflateSetDictionary = function(c, F) {
                var I, S, w, N, L, U, B, H, G = F.length;
                if (!c || !c.state || (N = (I = c.state).wrap) === 2 || N === 1 && I.status !== _ || I.lookahead)
                  return y;
                for (N === 1 && (c.adler = u(c.adler, F, G, 0)), I.wrap = 0, G >= I.w_size && (N === 0 && (Q(I.head), I.strstart = 0, I.block_start = 0, I.insert = 0), H = new v.Buf8(I.w_size), v.arraySet(H, F, G - I.w_size, I.w_size, 0), F = H, G = I.w_size), L = c.avail_in, U = c.next_in, B = c.input, c.avail_in = G, c.next_in = 0, c.input = F, se(I); I.lookahead >= b; ) {
                  for (S = I.strstart, w = I.lookahead - (b - 1); I.ins_h = (I.ins_h << I.hash_shift ^ I.window[S + b - 1]) & I.hash_mask, I.prev[S & I.w_mask] = I.head[I.ins_h], I.head[I.ins_h] = S, S++, --w; )
                    ;
                  I.strstart = S, I.lookahead = b - 1, se(I);
                }
                return I.strstart += I.lookahead, I.block_start = I.strstart, I.insert = I.lookahead, I.lookahead = 0, I.match_length = I.prev_length = b - 1, I.match_available = 0, c.next_in = U, c.input = B, c.avail_in = L, I.wrap = N, i;
              }, E.deflateInfo = "pako deflate (from Nodeca project)";
            }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(P, M, E) {
              M.exports = function() {
                this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
              };
            }, {}], 48: [function(P, M, E) {
              M.exports = function(x, v) {
                var e, u, r, m, p, n, i, y, d, h, f, g, A, C, a, o, t, l, b, k, D, _, T, s, R;
                e = x.state, u = x.next_in, s = x.input, r = u + (x.avail_in - 5), m = x.next_out, R = x.output, p = m - (v - x.avail_out), n = m + (x.avail_out - 257), i = e.dmax, y = e.wsize, d = e.whave, h = e.wnext, f = e.window, g = e.hold, A = e.bits, C = e.lencode, a = e.distcode, o = (1 << e.lenbits) - 1, t = (1 << e.distbits) - 1;
                e:
                  do {
                    A < 15 && (g += s[u++] << A, A += 8, g += s[u++] << A, A += 8), l = C[g & o];
                    t:
                      for (; ; ) {
                        if (g >>>= b = l >>> 24, A -= b, (b = l >>> 16 & 255) === 0)
                          R[m++] = 65535 & l;
                        else {
                          if (!(16 & b)) {
                            if (!(64 & b)) {
                              l = C[(65535 & l) + (g & (1 << b) - 1)];
                              continue t;
                            }
                            if (32 & b) {
                              e.mode = 12;
                              break e;
                            }
                            x.msg = "invalid literal/length code", e.mode = 30;
                            break e;
                          }
                          k = 65535 & l, (b &= 15) && (A < b && (g += s[u++] << A, A += 8), k += g & (1 << b) - 1, g >>>= b, A -= b), A < 15 && (g += s[u++] << A, A += 8, g += s[u++] << A, A += 8), l = a[g & t];
                          r:
                            for (; ; ) {
                              if (g >>>= b = l >>> 24, A -= b, !(16 & (b = l >>> 16 & 255))) {
                                if (!(64 & b)) {
                                  l = a[(65535 & l) + (g & (1 << b) - 1)];
                                  continue r;
                                }
                                x.msg = "invalid distance code", e.mode = 30;
                                break e;
                              }
                              if (D = 65535 & l, A < (b &= 15) && (g += s[u++] << A, (A += 8) < b && (g += s[u++] << A, A += 8)), i < (D += g & (1 << b) - 1)) {
                                x.msg = "invalid distance too far back", e.mode = 30;
                                break e;
                              }
                              if (g >>>= b, A -= b, (b = m - p) < D) {
                                if (d < (b = D - b) && e.sane) {
                                  x.msg = "invalid distance too far back", e.mode = 30;
                                  break e;
                                }
                                if (T = f, (_ = 0) === h) {
                                  if (_ += y - b, b < k) {
                                    for (k -= b; R[m++] = f[_++], --b; )
                                      ;
                                    _ = m - D, T = R;
                                  }
                                } else if (h < b) {
                                  if (_ += y + h - b, (b -= h) < k) {
                                    for (k -= b; R[m++] = f[_++], --b; )
                                      ;
                                    if (_ = 0, h < k) {
                                      for (k -= b = h; R[m++] = f[_++], --b; )
                                        ;
                                      _ = m - D, T = R;
                                    }
                                  }
                                } else if (_ += h - b, b < k) {
                                  for (k -= b; R[m++] = f[_++], --b; )
                                    ;
                                  _ = m - D, T = R;
                                }
                                for (; 2 < k; )
                                  R[m++] = T[_++], R[m++] = T[_++], R[m++] = T[_++], k -= 3;
                                k && (R[m++] = T[_++], 1 < k && (R[m++] = T[_++]));
                              } else {
                                for (_ = m - D; R[m++] = R[_++], R[m++] = R[_++], R[m++] = R[_++], 2 < (k -= 3); )
                                  ;
                                k && (R[m++] = R[_++], 1 < k && (R[m++] = R[_++]));
                              }
                              break;
                            }
                        }
                        break;
                      }
                  } while (u < r && m < n);
                u -= k = A >> 3, g &= (1 << (A -= k << 3)) - 1, x.next_in = u, x.next_out = m, x.avail_in = u < r ? r - u + 5 : 5 - (u - r), x.avail_out = m < n ? n - m + 257 : 257 - (m - n), e.hold = g, e.bits = A;
              };
            }, {}], 49: [function(P, M, E) {
              var x = P("../utils/common"), v = P("./adler32"), e = P("./crc32"), u = P("./inffast"), r = P("./inftrees"), m = 1, p = 2, n = 0, i = -2, y = 1, d = 852, h = 592;
              function f(_) {
                return (_ >>> 24 & 255) + (_ >>> 8 & 65280) + ((65280 & _) << 8) + ((255 & _) << 24);
              }
              function g() {
                this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new x.Buf16(320), this.work = new x.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
              }
              function A(_) {
                var T;
                return _ && _.state ? (T = _.state, _.total_in = _.total_out = T.total = 0, _.msg = "", T.wrap && (_.adler = 1 & T.wrap), T.mode = y, T.last = 0, T.havedict = 0, T.dmax = 32768, T.head = null, T.hold = 0, T.bits = 0, T.lencode = T.lendyn = new x.Buf32(d), T.distcode = T.distdyn = new x.Buf32(h), T.sane = 1, T.back = -1, n) : i;
              }
              function C(_) {
                var T;
                return _ && _.state ? ((T = _.state).wsize = 0, T.whave = 0, T.wnext = 0, A(_)) : i;
              }
              function a(_, T) {
                var s, R;
                return _ && _.state ? (R = _.state, T < 0 ? (s = 0, T = -T) : (s = 1 + (T >> 4), T < 48 && (T &= 15)), T && (T < 8 || 15 < T) ? i : (R.window !== null && R.wbits !== T && (R.window = null), R.wrap = s, R.wbits = T, C(_))) : i;
              }
              function o(_, T) {
                var s, R;
                return _ ? (R = new g(), (_.state = R).window = null, (s = a(_, T)) !== n && (_.state = null), s) : i;
              }
              var t, l, b = true;
              function k(_) {
                if (b) {
                  var T;
                  for (t = new x.Buf32(512), l = new x.Buf32(32), T = 0; T < 144; )
                    _.lens[T++] = 8;
                  for (; T < 256; )
                    _.lens[T++] = 9;
                  for (; T < 280; )
                    _.lens[T++] = 7;
                  for (; T < 288; )
                    _.lens[T++] = 8;
                  for (r(m, _.lens, 0, 288, t, 0, _.work, { bits: 9 }), T = 0; T < 32; )
                    _.lens[T++] = 5;
                  r(p, _.lens, 0, 32, l, 0, _.work, { bits: 5 }), b = false;
                }
                _.lencode = t, _.lenbits = 9, _.distcode = l, _.distbits = 5;
              }
              function D(_, T, s, R) {
                var V, j = _.state;
                return j.window === null && (j.wsize = 1 << j.wbits, j.wnext = 0, j.whave = 0, j.window = new x.Buf8(j.wsize)), R >= j.wsize ? (x.arraySet(j.window, T, s - j.wsize, j.wsize, 0), j.wnext = 0, j.whave = j.wsize) : (R < (V = j.wsize - j.wnext) && (V = R), x.arraySet(j.window, T, s - R, V, j.wnext), (R -= V) ? (x.arraySet(j.window, T, s - R, R, 0), j.wnext = R, j.whave = j.wsize) : (j.wnext += V, j.wnext === j.wsize && (j.wnext = 0), j.whave < j.wsize && (j.whave += V))), 0;
              }
              E.inflateReset = C, E.inflateReset2 = a, E.inflateResetKeep = A, E.inflateInit = function(_) {
                return o(_, 15);
              }, E.inflateInit2 = o, E.inflate = function(_, T) {
                var s, R, V, j, q, W, Q, z, O, J, X, Z, se, he, ee, ne, de, ie, be, me, c, F, I, S, w = 0, N = new x.Buf8(4), L = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!_ || !_.state || !_.output || !_.input && _.avail_in !== 0)
                  return i;
                (s = _.state).mode === 12 && (s.mode = 13), q = _.next_out, V = _.output, Q = _.avail_out, j = _.next_in, R = _.input, W = _.avail_in, z = s.hold, O = s.bits, J = W, X = Q, F = n;
                e:
                  for (; ; )
                    switch (s.mode) {
                      case y:
                        if (s.wrap === 0) {
                          s.mode = 13;
                          break;
                        }
                        for (; O < 16; ) {
                          if (W === 0)
                            break e;
                          W--, z += R[j++] << O, O += 8;
                        }
                        if (2 & s.wrap && z === 35615) {
                          N[s.check = 0] = 255 & z, N[1] = z >>> 8 & 255, s.check = e(s.check, N, 2, 0), O = z = 0, s.mode = 2;
                          break;
                        }
                        if (s.flags = 0, s.head && (s.head.done = false), !(1 & s.wrap) || (((255 & z) << 8) + (z >> 8)) % 31) {
                          _.msg = "incorrect header check", s.mode = 30;
                          break;
                        }
                        if ((15 & z) != 8) {
                          _.msg = "unknown compression method", s.mode = 30;
                          break;
                        }
                        if (O -= 4, c = 8 + (15 & (z >>>= 4)), s.wbits === 0)
                          s.wbits = c;
                        else if (c > s.wbits) {
                          _.msg = "invalid window size", s.mode = 30;
                          break;
                        }
                        s.dmax = 1 << c, _.adler = s.check = 1, s.mode = 512 & z ? 10 : 12, O = z = 0;
                        break;
                      case 2:
                        for (; O < 16; ) {
                          if (W === 0)
                            break e;
                          W--, z += R[j++] << O, O += 8;
                        }
                        if (s.flags = z, (255 & s.flags) != 8) {
                          _.msg = "unknown compression method", s.mode = 30;
                          break;
                        }
                        if (57344 & s.flags) {
                          _.msg = "unknown header flags set", s.mode = 30;
                          break;
                        }
                        s.head && (s.head.text = z >> 8 & 1), 512 & s.flags && (N[0] = 255 & z, N[1] = z >>> 8 & 255, s.check = e(s.check, N, 2, 0)), O = z = 0, s.mode = 3;
                      case 3:
                        for (; O < 32; ) {
                          if (W === 0)
                            break e;
                          W--, z += R[j++] << O, O += 8;
                        }
                        s.head && (s.head.time = z), 512 & s.flags && (N[0] = 255 & z, N[1] = z >>> 8 & 255, N[2] = z >>> 16 & 255, N[3] = z >>> 24 & 255, s.check = e(s.check, N, 4, 0)), O = z = 0, s.mode = 4;
                      case 4:
                        for (; O < 16; ) {
                          if (W === 0)
                            break e;
                          W--, z += R[j++] << O, O += 8;
                        }
                        s.head && (s.head.xflags = 255 & z, s.head.os = z >> 8), 512 & s.flags && (N[0] = 255 & z, N[1] = z >>> 8 & 255, s.check = e(s.check, N, 2, 0)), O = z = 0, s.mode = 5;
                      case 5:
                        if (1024 & s.flags) {
                          for (; O < 16; ) {
                            if (W === 0)
                              break e;
                            W--, z += R[j++] << O, O += 8;
                          }
                          s.length = z, s.head && (s.head.extra_len = z), 512 & s.flags && (N[0] = 255 & z, N[1] = z >>> 8 & 255, s.check = e(s.check, N, 2, 0)), O = z = 0;
                        } else
                          s.head && (s.head.extra = null);
                        s.mode = 6;
                      case 6:
                        if (1024 & s.flags && (W < (Z = s.length) && (Z = W), Z && (s.head && (c = s.head.extra_len - s.length, s.head.extra || (s.head.extra = new Array(s.head.extra_len)), x.arraySet(s.head.extra, R, j, Z, c)), 512 & s.flags && (s.check = e(s.check, R, Z, j)), W -= Z, j += Z, s.length -= Z), s.length))
                          break e;
                        s.length = 0, s.mode = 7;
                      case 7:
                        if (2048 & s.flags) {
                          if (W === 0)
                            break e;
                          for (Z = 0; c = R[j + Z++], s.head && c && s.length < 65536 && (s.head.name += String.fromCharCode(c)), c && Z < W; )
                            ;
                          if (512 & s.flags && (s.check = e(s.check, R, Z, j)), W -= Z, j += Z, c)
                            break e;
                        } else
                          s.head && (s.head.name = null);
                        s.length = 0, s.mode = 8;
                      case 8:
                        if (4096 & s.flags) {
                          if (W === 0)
                            break e;
                          for (Z = 0; c = R[j + Z++], s.head && c && s.length < 65536 && (s.head.comment += String.fromCharCode(c)), c && Z < W; )
                            ;
                          if (512 & s.flags && (s.check = e(s.check, R, Z, j)), W -= Z, j += Z, c)
                            break e;
                        } else
                          s.head && (s.head.comment = null);
                        s.mode = 9;
                      case 9:
                        if (512 & s.flags) {
                          for (; O < 16; ) {
                            if (W === 0)
                              break e;
                            W--, z += R[j++] << O, O += 8;
                          }
                          if (z !== (65535 & s.check)) {
                            _.msg = "header crc mismatch", s.mode = 30;
                            break;
                          }
                          O = z = 0;
                        }
                        s.head && (s.head.hcrc = s.flags >> 9 & 1, s.head.done = true), _.adler = s.check = 0, s.mode = 12;
                        break;
                      case 10:
                        for (; O < 32; ) {
                          if (W === 0)
                            break e;
                          W--, z += R[j++] << O, O += 8;
                        }
                        _.adler = s.check = f(z), O = z = 0, s.mode = 11;
                      case 11:
                        if (s.havedict === 0)
                          return _.next_out = q, _.avail_out = Q, _.next_in = j, _.avail_in = W, s.hold = z, s.bits = O, 2;
                        _.adler = s.check = 1, s.mode = 12;
                      case 12:
                        if (T === 5 || T === 6)
                          break e;
                      case 13:
                        if (s.last) {
                          z >>>= 7 & O, O -= 7 & O, s.mode = 27;
                          break;
                        }
                        for (; O < 3; ) {
                          if (W === 0)
                            break e;
                          W--, z += R[j++] << O, O += 8;
                        }
                        switch (s.last = 1 & z, O -= 1, 3 & (z >>>= 1)) {
                          case 0:
                            s.mode = 14;
                            break;
                          case 1:
                            if (k(s), s.mode = 20, T !== 6)
                              break;
                            z >>>= 2, O -= 2;
                            break e;
                          case 2:
                            s.mode = 17;
                            break;
                          case 3:
                            _.msg = "invalid block type", s.mode = 30;
                        }
                        z >>>= 2, O -= 2;
                        break;
                      case 14:
                        for (z >>>= 7 & O, O -= 7 & O; O < 32; ) {
                          if (W === 0)
                            break e;
                          W--, z += R[j++] << O, O += 8;
                        }
                        if ((65535 & z) != (z >>> 16 ^ 65535)) {
                          _.msg = "invalid stored block lengths", s.mode = 30;
                          break;
                        }
                        if (s.length = 65535 & z, O = z = 0, s.mode = 15, T === 6)
                          break e;
                      case 15:
                        s.mode = 16;
                      case 16:
                        if (Z = s.length) {
                          if (W < Z && (Z = W), Q < Z && (Z = Q), Z === 0)
                            break e;
                          x.arraySet(V, R, j, Z, q), W -= Z, j += Z, Q -= Z, q += Z, s.length -= Z;
                          break;
                        }
                        s.mode = 12;
                        break;
                      case 17:
                        for (; O < 14; ) {
                          if (W === 0)
                            break e;
                          W--, z += R[j++] << O, O += 8;
                        }
                        if (s.nlen = 257 + (31 & z), z >>>= 5, O -= 5, s.ndist = 1 + (31 & z), z >>>= 5, O -= 5, s.ncode = 4 + (15 & z), z >>>= 4, O -= 4, 286 < s.nlen || 30 < s.ndist) {
                          _.msg = "too many length or distance symbols", s.mode = 30;
                          break;
                        }
                        s.have = 0, s.mode = 18;
                      case 18:
                        for (; s.have < s.ncode; ) {
                          for (; O < 3; ) {
                            if (W === 0)
                              break e;
                            W--, z += R[j++] << O, O += 8;
                          }
                          s.lens[L[s.have++]] = 7 & z, z >>>= 3, O -= 3;
                        }
                        for (; s.have < 19; )
                          s.lens[L[s.have++]] = 0;
                        if (s.lencode = s.lendyn, s.lenbits = 7, I = { bits: s.lenbits }, F = r(0, s.lens, 0, 19, s.lencode, 0, s.work, I), s.lenbits = I.bits, F) {
                          _.msg = "invalid code lengths set", s.mode = 30;
                          break;
                        }
                        s.have = 0, s.mode = 19;
                      case 19:
                        for (; s.have < s.nlen + s.ndist; ) {
                          for (; ne = (w = s.lencode[z & (1 << s.lenbits) - 1]) >>> 16 & 255, de = 65535 & w, !((ee = w >>> 24) <= O); ) {
                            if (W === 0)
                              break e;
                            W--, z += R[j++] << O, O += 8;
                          }
                          if (de < 16)
                            z >>>= ee, O -= ee, s.lens[s.have++] = de;
                          else {
                            if (de === 16) {
                              for (S = ee + 2; O < S; ) {
                                if (W === 0)
                                  break e;
                                W--, z += R[j++] << O, O += 8;
                              }
                              if (z >>>= ee, O -= ee, s.have === 0) {
                                _.msg = "invalid bit length repeat", s.mode = 30;
                                break;
                              }
                              c = s.lens[s.have - 1], Z = 3 + (3 & z), z >>>= 2, O -= 2;
                            } else if (de === 17) {
                              for (S = ee + 3; O < S; ) {
                                if (W === 0)
                                  break e;
                                W--, z += R[j++] << O, O += 8;
                              }
                              O -= ee, c = 0, Z = 3 + (7 & (z >>>= ee)), z >>>= 3, O -= 3;
                            } else {
                              for (S = ee + 7; O < S; ) {
                                if (W === 0)
                                  break e;
                                W--, z += R[j++] << O, O += 8;
                              }
                              O -= ee, c = 0, Z = 11 + (127 & (z >>>= ee)), z >>>= 7, O -= 7;
                            }
                            if (s.have + Z > s.nlen + s.ndist) {
                              _.msg = "invalid bit length repeat", s.mode = 30;
                              break;
                            }
                            for (; Z--; )
                              s.lens[s.have++] = c;
                          }
                        }
                        if (s.mode === 30)
                          break;
                        if (s.lens[256] === 0) {
                          _.msg = "invalid code -- missing end-of-block", s.mode = 30;
                          break;
                        }
                        if (s.lenbits = 9, I = { bits: s.lenbits }, F = r(m, s.lens, 0, s.nlen, s.lencode, 0, s.work, I), s.lenbits = I.bits, F) {
                          _.msg = "invalid literal/lengths set", s.mode = 30;
                          break;
                        }
                        if (s.distbits = 6, s.distcode = s.distdyn, I = { bits: s.distbits }, F = r(p, s.lens, s.nlen, s.ndist, s.distcode, 0, s.work, I), s.distbits = I.bits, F) {
                          _.msg = "invalid distances set", s.mode = 30;
                          break;
                        }
                        if (s.mode = 20, T === 6)
                          break e;
                      case 20:
                        s.mode = 21;
                      case 21:
                        if (6 <= W && 258 <= Q) {
                          _.next_out = q, _.avail_out = Q, _.next_in = j, _.avail_in = W, s.hold = z, s.bits = O, u(_, X), q = _.next_out, V = _.output, Q = _.avail_out, j = _.next_in, R = _.input, W = _.avail_in, z = s.hold, O = s.bits, s.mode === 12 && (s.back = -1);
                          break;
                        }
                        for (s.back = 0; ne = (w = s.lencode[z & (1 << s.lenbits) - 1]) >>> 16 & 255, de = 65535 & w, !((ee = w >>> 24) <= O); ) {
                          if (W === 0)
                            break e;
                          W--, z += R[j++] << O, O += 8;
                        }
                        if (ne && !(240 & ne)) {
                          for (ie = ee, be = ne, me = de; ne = (w = s.lencode[me + ((z & (1 << ie + be) - 1) >> ie)]) >>> 16 & 255, de = 65535 & w, !(ie + (ee = w >>> 24) <= O); ) {
                            if (W === 0)
                              break e;
                            W--, z += R[j++] << O, O += 8;
                          }
                          z >>>= ie, O -= ie, s.back += ie;
                        }
                        if (z >>>= ee, O -= ee, s.back += ee, s.length = de, ne === 0) {
                          s.mode = 26;
                          break;
                        }
                        if (32 & ne) {
                          s.back = -1, s.mode = 12;
                          break;
                        }
                        if (64 & ne) {
                          _.msg = "invalid literal/length code", s.mode = 30;
                          break;
                        }
                        s.extra = 15 & ne, s.mode = 22;
                      case 22:
                        if (s.extra) {
                          for (S = s.extra; O < S; ) {
                            if (W === 0)
                              break e;
                            W--, z += R[j++] << O, O += 8;
                          }
                          s.length += z & (1 << s.extra) - 1, z >>>= s.extra, O -= s.extra, s.back += s.extra;
                        }
                        s.was = s.length, s.mode = 23;
                      case 23:
                        for (; ne = (w = s.distcode[z & (1 << s.distbits) - 1]) >>> 16 & 255, de = 65535 & w, !((ee = w >>> 24) <= O); ) {
                          if (W === 0)
                            break e;
                          W--, z += R[j++] << O, O += 8;
                        }
                        if (!(240 & ne)) {
                          for (ie = ee, be = ne, me = de; ne = (w = s.distcode[me + ((z & (1 << ie + be) - 1) >> ie)]) >>> 16 & 255, de = 65535 & w, !(ie + (ee = w >>> 24) <= O); ) {
                            if (W === 0)
                              break e;
                            W--, z += R[j++] << O, O += 8;
                          }
                          z >>>= ie, O -= ie, s.back += ie;
                        }
                        if (z >>>= ee, O -= ee, s.back += ee, 64 & ne) {
                          _.msg = "invalid distance code", s.mode = 30;
                          break;
                        }
                        s.offset = de, s.extra = 15 & ne, s.mode = 24;
                      case 24:
                        if (s.extra) {
                          for (S = s.extra; O < S; ) {
                            if (W === 0)
                              break e;
                            W--, z += R[j++] << O, O += 8;
                          }
                          s.offset += z & (1 << s.extra) - 1, z >>>= s.extra, O -= s.extra, s.back += s.extra;
                        }
                        if (s.offset > s.dmax) {
                          _.msg = "invalid distance too far back", s.mode = 30;
                          break;
                        }
                        s.mode = 25;
                      case 25:
                        if (Q === 0)
                          break e;
                        if (Z = X - Q, s.offset > Z) {
                          if ((Z = s.offset - Z) > s.whave && s.sane) {
                            _.msg = "invalid distance too far back", s.mode = 30;
                            break;
                          }
                          se = Z > s.wnext ? (Z -= s.wnext, s.wsize - Z) : s.wnext - Z, Z > s.length && (Z = s.length), he = s.window;
                        } else
                          he = V, se = q - s.offset, Z = s.length;
                        for (Q < Z && (Z = Q), Q -= Z, s.length -= Z; V[q++] = he[se++], --Z; )
                          ;
                        s.length === 0 && (s.mode = 21);
                        break;
                      case 26:
                        if (Q === 0)
                          break e;
                        V[q++] = s.length, Q--, s.mode = 21;
                        break;
                      case 27:
                        if (s.wrap) {
                          for (; O < 32; ) {
                            if (W === 0)
                              break e;
                            W--, z |= R[j++] << O, O += 8;
                          }
                          if (X -= Q, _.total_out += X, s.total += X, X && (_.adler = s.check = s.flags ? e(s.check, V, X, q - X) : v(s.check, V, X, q - X)), X = Q, (s.flags ? z : f(z)) !== s.check) {
                            _.msg = "incorrect data check", s.mode = 30;
                            break;
                          }
                          O = z = 0;
                        }
                        s.mode = 28;
                      case 28:
                        if (s.wrap && s.flags) {
                          for (; O < 32; ) {
                            if (W === 0)
                              break e;
                            W--, z += R[j++] << O, O += 8;
                          }
                          if (z !== (4294967295 & s.total)) {
                            _.msg = "incorrect length check", s.mode = 30;
                            break;
                          }
                          O = z = 0;
                        }
                        s.mode = 29;
                      case 29:
                        F = 1;
                        break e;
                      case 30:
                        F = -3;
                        break e;
                      case 31:
                        return -4;
                      case 32:
                      default:
                        return i;
                    }
                return _.next_out = q, _.avail_out = Q, _.next_in = j, _.avail_in = W, s.hold = z, s.bits = O, (s.wsize || X !== _.avail_out && s.mode < 30 && (s.mode < 27 || T !== 4)) && D(_, _.output, _.next_out, X - _.avail_out) ? (s.mode = 31, -4) : (J -= _.avail_in, X -= _.avail_out, _.total_in += J, _.total_out += X, s.total += X, s.wrap && X && (_.adler = s.check = s.flags ? e(s.check, V, X, _.next_out - X) : v(s.check, V, X, _.next_out - X)), _.data_type = s.bits + (s.last ? 64 : 0) + (s.mode === 12 ? 128 : 0) + (s.mode === 20 || s.mode === 15 ? 256 : 0), (J == 0 && X === 0 || T === 4) && F === n && (F = -5), F);
              }, E.inflateEnd = function(_) {
                if (!_ || !_.state)
                  return i;
                var T = _.state;
                return T.window && (T.window = null), _.state = null, n;
              }, E.inflateGetHeader = function(_, T) {
                var s;
                return _ && _.state && 2 & (s = _.state).wrap ? ((s.head = T).done = false, n) : i;
              }, E.inflateSetDictionary = function(_, T) {
                var s, R = T.length;
                return _ && _.state ? (s = _.state).wrap !== 0 && s.mode !== 11 ? i : s.mode === 11 && v(1, T, R, 0) !== s.check ? -3 : D(_, T, R, R) ? (s.mode = 31, -4) : (s.havedict = 1, n) : i;
              }, E.inflateInfo = "pako inflate (from Nodeca project)";
            }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(P, M, E) {
              var x = P("../utils/common"), v = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], e = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], r = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
              M.exports = function(m, p, n, i, y, d, h, f) {
                var g, A, C, a, o, t, l, b, k, D = f.bits, _ = 0, T = 0, s = 0, R = 0, V = 0, j = 0, q = 0, W = 0, Q = 0, z = 0, O = null, J = 0, X = new x.Buf16(16), Z = new x.Buf16(16), se = null, he = 0;
                for (_ = 0; _ <= 15; _++)
                  X[_] = 0;
                for (T = 0; T < i; T++)
                  X[p[n + T]]++;
                for (V = D, R = 15; 1 <= R && X[R] === 0; R--)
                  ;
                if (R < V && (V = R), R === 0)
                  return y[d++] = 20971520, y[d++] = 20971520, f.bits = 1, 0;
                for (s = 1; s < R && X[s] === 0; s++)
                  ;
                for (V < s && (V = s), _ = W = 1; _ <= 15; _++)
                  if (W <<= 1, (W -= X[_]) < 0)
                    return -1;
                if (0 < W && (m === 0 || R !== 1))
                  return -1;
                for (Z[1] = 0, _ = 1; _ < 15; _++)
                  Z[_ + 1] = Z[_] + X[_];
                for (T = 0; T < i; T++)
                  p[n + T] !== 0 && (h[Z[p[n + T]]++] = T);
                if (t = m === 0 ? (O = se = h, 19) : m === 1 ? (O = v, J -= 257, se = e, he -= 257, 256) : (O = u, se = r, -1), _ = s, o = d, q = T = z = 0, C = -1, a = (Q = 1 << (j = V)) - 1, m === 1 && 852 < Q || m === 2 && 592 < Q)
                  return 1;
                for (; ; ) {
                  for (l = _ - q, k = h[T] < t ? (b = 0, h[T]) : h[T] > t ? (b = se[he + h[T]], O[J + h[T]]) : (b = 96, 0), g = 1 << _ - q, s = A = 1 << j; y[o + (z >> q) + (A -= g)] = l << 24 | b << 16 | k | 0, A !== 0; )
                    ;
                  for (g = 1 << _ - 1; z & g; )
                    g >>= 1;
                  if (g !== 0 ? (z &= g - 1, z += g) : z = 0, T++, --X[_] == 0) {
                    if (_ === R)
                      break;
                    _ = p[n + h[T]];
                  }
                  if (V < _ && (z & a) !== C) {
                    for (q === 0 && (q = V), o += s, W = 1 << (j = _ - q); j + q < R && !((W -= X[j + q]) <= 0); )
                      j++, W <<= 1;
                    if (Q += 1 << j, m === 1 && 852 < Q || m === 2 && 592 < Q)
                      return 1;
                    y[C = z & a] = V << 24 | j << 16 | o - d | 0;
                  }
                }
                return z !== 0 && (y[o + z] = _ - q << 24 | 64 << 16 | 0), f.bits = V, 0;
              };
            }, { "../utils/common": 41 }], 51: [function(P, M, E) {
              M.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
            }, {}], 52: [function(P, M, E) {
              var x = P("../utils/common"), v = 0, e = 1;
              function u(w) {
                for (var N = w.length; 0 <= --N; )
                  w[N] = 0;
              }
              var r = 0, m = 29, p = 256, n = p + 1 + m, i = 30, y = 19, d = 2 * n + 1, h = 15, f = 16, g = 7, A = 256, C = 16, a = 17, o = 18, t = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], l = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], k = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], D = new Array(2 * (n + 2));
              u(D);
              var _ = new Array(2 * i);
              u(_);
              var T = new Array(512);
              u(T);
              var s = new Array(256);
              u(s);
              var R = new Array(m);
              u(R);
              var V, j, q, W = new Array(i);
              function Q(w, N, L, U, B) {
                this.static_tree = w, this.extra_bits = N, this.extra_base = L, this.elems = U, this.max_length = B, this.has_stree = w && w.length;
              }
              function z(w, N) {
                this.dyn_tree = w, this.max_code = 0, this.stat_desc = N;
              }
              function O(w) {
                return w < 256 ? T[w] : T[256 + (w >>> 7)];
              }
              function J(w, N) {
                w.pending_buf[w.pending++] = 255 & N, w.pending_buf[w.pending++] = N >>> 8 & 255;
              }
              function X(w, N, L) {
                w.bi_valid > f - L ? (w.bi_buf |= N << w.bi_valid & 65535, J(w, w.bi_buf), w.bi_buf = N >> f - w.bi_valid, w.bi_valid += L - f) : (w.bi_buf |= N << w.bi_valid & 65535, w.bi_valid += L);
              }
              function Z(w, N, L) {
                X(w, L[2 * N], L[2 * N + 1]);
              }
              function se(w, N) {
                for (var L = 0; L |= 1 & w, w >>>= 1, L <<= 1, 0 < --N; )
                  ;
                return L >>> 1;
              }
              function he(w, N, L) {
                var U, B, H = new Array(h + 1), G = 0;
                for (U = 1; U <= h; U++)
                  H[U] = G = G + L[U - 1] << 1;
                for (B = 0; B <= N; B++) {
                  var $ = w[2 * B + 1];
                  $ !== 0 && (w[2 * B] = se(H[$]++, $));
                }
              }
              function ee(w) {
                var N;
                for (N = 0; N < n; N++)
                  w.dyn_ltree[2 * N] = 0;
                for (N = 0; N < i; N++)
                  w.dyn_dtree[2 * N] = 0;
                for (N = 0; N < y; N++)
                  w.bl_tree[2 * N] = 0;
                w.dyn_ltree[2 * A] = 1, w.opt_len = w.static_len = 0, w.last_lit = w.matches = 0;
              }
              function ne(w) {
                8 < w.bi_valid ? J(w, w.bi_buf) : 0 < w.bi_valid && (w.pending_buf[w.pending++] = w.bi_buf), w.bi_buf = 0, w.bi_valid = 0;
              }
              function de(w, N, L, U) {
                var B = 2 * N, H = 2 * L;
                return w[B] < w[H] || w[B] === w[H] && U[N] <= U[L];
              }
              function ie(w, N, L) {
                for (var U = w.heap[L], B = L << 1; B <= w.heap_len && (B < w.heap_len && de(N, w.heap[B + 1], w.heap[B], w.depth) && B++, !de(N, U, w.heap[B], w.depth)); )
                  w.heap[L] = w.heap[B], L = B, B <<= 1;
                w.heap[L] = U;
              }
              function be(w, N, L) {
                var U, B, H, G, $ = 0;
                if (w.last_lit !== 0)
                  for (; U = w.pending_buf[w.d_buf + 2 * $] << 8 | w.pending_buf[w.d_buf + 2 * $ + 1], B = w.pending_buf[w.l_buf + $], $++, U === 0 ? Z(w, B, N) : (Z(w, (H = s[B]) + p + 1, N), (G = t[H]) !== 0 && X(w, B -= R[H], G), Z(w, H = O(--U), L), (G = l[H]) !== 0 && X(w, U -= W[H], G)), $ < w.last_lit; )
                    ;
                Z(w, A, N);
              }
              function me(w, N) {
                var L, U, B, H = N.dyn_tree, G = N.stat_desc.static_tree, $ = N.stat_desc.has_stree, K = N.stat_desc.elems, ae = -1;
                for (w.heap_len = 0, w.heap_max = d, L = 0; L < K; L++)
                  H[2 * L] !== 0 ? (w.heap[++w.heap_len] = ae = L, w.depth[L] = 0) : H[2 * L + 1] = 0;
                for (; w.heap_len < 2; )
                  H[2 * (B = w.heap[++w.heap_len] = ae < 2 ? ++ae : 0)] = 1, w.depth[B] = 0, w.opt_len--, $ && (w.static_len -= G[2 * B + 1]);
                for (N.max_code = ae, L = w.heap_len >> 1; 1 <= L; L--)
                  ie(w, H, L);
                for (B = K; L = w.heap[1], w.heap[1] = w.heap[w.heap_len--], ie(w, H, 1), U = w.heap[1], w.heap[--w.heap_max] = L, w.heap[--w.heap_max] = U, H[2 * B] = H[2 * L] + H[2 * U], w.depth[B] = (w.depth[L] >= w.depth[U] ? w.depth[L] : w.depth[U]) + 1, H[2 * L + 1] = H[2 * U + 1] = B, w.heap[1] = B++, ie(w, H, 1), 2 <= w.heap_len; )
                  ;
                w.heap[--w.heap_max] = w.heap[1], function(te, pe) {
                  var Pe, ye, Ce, oe, Ne, Oe, ve = pe.dyn_tree, ze = pe.max_code, Ye = pe.stat_desc.static_tree, Je = pe.stat_desc.has_stree, Qe = pe.stat_desc.extra_bits, Ie = pe.stat_desc.extra_base, Te = pe.stat_desc.max_length, Be = 0;
                  for (oe = 0; oe <= h; oe++)
                    te.bl_count[oe] = 0;
                  for (ve[2 * te.heap[te.heap_max] + 1] = 0, Pe = te.heap_max + 1; Pe < d; Pe++)
                    Te < (oe = ve[2 * ve[2 * (ye = te.heap[Pe]) + 1] + 1] + 1) && (oe = Te, Be++), ve[2 * ye + 1] = oe, ze < ye || (te.bl_count[oe]++, Ne = 0, Ie <= ye && (Ne = Qe[ye - Ie]), Oe = ve[2 * ye], te.opt_len += Oe * (oe + Ne), Je && (te.static_len += Oe * (Ye[2 * ye + 1] + Ne)));
                  if (Be !== 0) {
                    do {
                      for (oe = Te - 1; te.bl_count[oe] === 0; )
                        oe--;
                      te.bl_count[oe]--, te.bl_count[oe + 1] += 2, te.bl_count[Te]--, Be -= 2;
                    } while (0 < Be);
                    for (oe = Te; oe !== 0; oe--)
                      for (ye = te.bl_count[oe]; ye !== 0; )
                        ze < (Ce = te.heap[--Pe]) || (ve[2 * Ce + 1] !== oe && (te.opt_len += (oe - ve[2 * Ce + 1]) * ve[2 * Ce], ve[2 * Ce + 1] = oe), ye--);
                  }
                }(w, N), he(H, ae, w.bl_count);
              }
              function c(w, N, L) {
                var U, B, H = -1, G = N[1], $ = 0, K = 7, ae = 4;
                for (G === 0 && (K = 138, ae = 3), N[2 * (L + 1) + 1] = 65535, U = 0; U <= L; U++)
                  B = G, G = N[2 * (U + 1) + 1], ++$ < K && B === G || ($ < ae ? w.bl_tree[2 * B] += $ : B !== 0 ? (B !== H && w.bl_tree[2 * B]++, w.bl_tree[2 * C]++) : $ <= 10 ? w.bl_tree[2 * a]++ : w.bl_tree[2 * o]++, H = B, ae = ($ = 0) === G ? (K = 138, 3) : B === G ? (K = 6, 3) : (K = 7, 4));
              }
              function F(w, N, L) {
                var U, B, H = -1, G = N[1], $ = 0, K = 7, ae = 4;
                for (G === 0 && (K = 138, ae = 3), U = 0; U <= L; U++)
                  if (B = G, G = N[2 * (U + 1) + 1], !(++$ < K && B === G)) {
                    if ($ < ae)
                      for (; Z(w, B, w.bl_tree), --$ != 0; )
                        ;
                    else
                      B !== 0 ? (B !== H && (Z(w, B, w.bl_tree), $--), Z(w, C, w.bl_tree), X(w, $ - 3, 2)) : $ <= 10 ? (Z(w, a, w.bl_tree), X(w, $ - 3, 3)) : (Z(w, o, w.bl_tree), X(w, $ - 11, 7));
                    H = B, ae = ($ = 0) === G ? (K = 138, 3) : B === G ? (K = 6, 3) : (K = 7, 4);
                  }
              }
              u(W);
              var I = false;
              function S(w, N, L, U) {
                X(w, (r << 1) + (U ? 1 : 0), 3), function(B, H, G, $) {
                  ne(B), $ && (J(B, G), J(B, ~G)), x.arraySet(B.pending_buf, B.window, H, G, B.pending), B.pending += G;
                }(w, N, L, true);
              }
              E._tr_init = function(w) {
                I || (function() {
                  var N, L, U, B, H, G = new Array(h + 1);
                  for (B = U = 0; B < m - 1; B++)
                    for (R[B] = U, N = 0; N < 1 << t[B]; N++)
                      s[U++] = B;
                  for (s[U - 1] = B, B = H = 0; B < 16; B++)
                    for (W[B] = H, N = 0; N < 1 << l[B]; N++)
                      T[H++] = B;
                  for (H >>= 7; B < i; B++)
                    for (W[B] = H << 7, N = 0; N < 1 << l[B] - 7; N++)
                      T[256 + H++] = B;
                  for (L = 0; L <= h; L++)
                    G[L] = 0;
                  for (N = 0; N <= 143; )
                    D[2 * N + 1] = 8, N++, G[8]++;
                  for (; N <= 255; )
                    D[2 * N + 1] = 9, N++, G[9]++;
                  for (; N <= 279; )
                    D[2 * N + 1] = 7, N++, G[7]++;
                  for (; N <= 287; )
                    D[2 * N + 1] = 8, N++, G[8]++;
                  for (he(D, n + 1, G), N = 0; N < i; N++)
                    _[2 * N + 1] = 5, _[2 * N] = se(N, 5);
                  V = new Q(D, t, p + 1, n, h), j = new Q(_, l, 0, i, h), q = new Q(new Array(0), b, 0, y, g);
                }(), I = true), w.l_desc = new z(w.dyn_ltree, V), w.d_desc = new z(w.dyn_dtree, j), w.bl_desc = new z(w.bl_tree, q), w.bi_buf = 0, w.bi_valid = 0, ee(w);
              }, E._tr_stored_block = S, E._tr_flush_block = function(w, N, L, U) {
                var B, H, G = 0;
                0 < w.level ? (w.strm.data_type === 2 && (w.strm.data_type = function($) {
                  var K, ae = 4093624447;
                  for (K = 0; K <= 31; K++, ae >>>= 1)
                    if (1 & ae && $.dyn_ltree[2 * K] !== 0)
                      return v;
                  if ($.dyn_ltree[18] !== 0 || $.dyn_ltree[20] !== 0 || $.dyn_ltree[26] !== 0)
                    return e;
                  for (K = 32; K < p; K++)
                    if ($.dyn_ltree[2 * K] !== 0)
                      return e;
                  return v;
                }(w)), me(w, w.l_desc), me(w, w.d_desc), G = function($) {
                  var K;
                  for (c($, $.dyn_ltree, $.l_desc.max_code), c($, $.dyn_dtree, $.d_desc.max_code), me($, $.bl_desc), K = y - 1; 3 <= K && $.bl_tree[2 * k[K] + 1] === 0; K--)
                    ;
                  return $.opt_len += 3 * (K + 1) + 5 + 5 + 4, K;
                }(w), B = w.opt_len + 3 + 7 >>> 3, (H = w.static_len + 3 + 7 >>> 3) <= B && (B = H)) : B = H = L + 5, L + 4 <= B && N !== -1 ? S(w, N, L, U) : w.strategy === 4 || H === B ? (X(w, 2 + (U ? 1 : 0), 3), be(w, D, _)) : (X(w, 4 + (U ? 1 : 0), 3), function($, K, ae, te) {
                  var pe;
                  for (X($, K - 257, 5), X($, ae - 1, 5), X($, te - 4, 4), pe = 0; pe < te; pe++)
                    X($, $.bl_tree[2 * k[pe] + 1], 3);
                  F($, $.dyn_ltree, K - 1), F($, $.dyn_dtree, ae - 1);
                }(w, w.l_desc.max_code + 1, w.d_desc.max_code + 1, G + 1), be(w, w.dyn_ltree, w.dyn_dtree)), ee(w), U && ne(w);
              }, E._tr_tally = function(w, N, L) {
                return w.pending_buf[w.d_buf + 2 * w.last_lit] = N >>> 8 & 255, w.pending_buf[w.d_buf + 2 * w.last_lit + 1] = 255 & N, w.pending_buf[w.l_buf + w.last_lit] = 255 & L, w.last_lit++, N === 0 ? w.dyn_ltree[2 * L]++ : (w.matches++, N--, w.dyn_ltree[2 * (s[L] + p + 1)]++, w.dyn_dtree[2 * O(N)]++), w.last_lit === w.lit_bufsize - 1;
              }, E._tr_align = function(w) {
                X(w, 2, 3), Z(w, A, D), function(N) {
                  N.bi_valid === 16 ? (J(N, N.bi_buf), N.bi_buf = 0, N.bi_valid = 0) : 8 <= N.bi_valid && (N.pending_buf[N.pending++] = 255 & N.bi_buf, N.bi_buf >>= 8, N.bi_valid -= 8);
                }(w);
              };
            }, { "../utils/common": 41 }], 53: [function(P, M, E) {
              M.exports = function() {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
              };
            }, {}], 54: [function(P, M, E) {
              (function(x) {
                (function(v, e) {
                  if (!v.setImmediate) {
                    var u, r, m, p, n = 1, i = {}, y = false, d = v.document, h = Object.getPrototypeOf && Object.getPrototypeOf(v);
                    h = h && h.setTimeout ? h : v, u = {}.toString.call(v.process) === "[object process]" ? function(C) {
                      process.nextTick(function() {
                        g(C);
                      });
                    } : function() {
                      if (v.postMessage && !v.importScripts) {
                        var C = true, a = v.onmessage;
                        return v.onmessage = function() {
                          C = false;
                        }, v.postMessage("", "*"), v.onmessage = a, C;
                      }
                    }() ? (p = "setImmediate$" + Math.random() + "$", v.addEventListener ? v.addEventListener("message", A, false) : v.attachEvent("onmessage", A), function(C) {
                      v.postMessage(p + C, "*");
                    }) : v.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(C) {
                      g(C.data);
                    }, function(C) {
                      m.port2.postMessage(C);
                    }) : d && "onreadystatechange" in d.createElement("script") ? (r = d.documentElement, function(C) {
                      var a = d.createElement("script");
                      a.onreadystatechange = function() {
                        g(C), a.onreadystatechange = null, r.removeChild(a), a = null;
                      }, r.appendChild(a);
                    }) : function(C) {
                      setTimeout(g, 0, C);
                    }, h.setImmediate = function(C) {
                      typeof C != "function" && (C = new Function("" + C));
                      for (var a = new Array(arguments.length - 1), o = 0; o < a.length; o++)
                        a[o] = arguments[o + 1];
                      var t = { callback: C, args: a };
                      return i[n] = t, u(n), n++;
                    }, h.clearImmediate = f;
                  }
                  function f(C) {
                    delete i[C];
                  }
                  function g(C) {
                    if (y)
                      setTimeout(g, 0, C);
                    else {
                      var a = i[C];
                      if (a) {
                        y = true;
                        try {
                          (function(o) {
                            var t = o.callback, l = o.args;
                            switch (l.length) {
                              case 0:
                                t();
                                break;
                              case 1:
                                t(l[0]);
                                break;
                              case 2:
                                t(l[0], l[1]);
                                break;
                              case 3:
                                t(l[0], l[1], l[2]);
                                break;
                              default:
                                t.apply(e, l);
                            }
                          })(a);
                        } finally {
                          f(C), y = false;
                        }
                      }
                    }
                  }
                  function A(C) {
                    C.source === v && typeof C.data == "string" && C.data.indexOf(p) === 0 && g(+C.data.slice(p.length));
                  }
                })(typeof self == "undefined" ? x === void 0 ? this : x : self);
              }).call(this, typeof ue != "undefined" ? ue : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
            }, {}] }, {}, [10])(10);
          });
        }(Ae)), ke;
      }
      (function(Y, re) {
        (function(P, M) {
          Y.exports = M(Se());
        })(globalThis, (P) => (() => {
          var M = { 438: (v, e, u) => {
            u.r(e), u.d(e, { default: () => g });
            var r = u(537), m = u.n(r), p = u(645), n = u.n(p), i = u(806), y = u.n(i), d = new URL(u(583), u.b), h = n()(m()), f = y()(d);
            h.push([v.id, `@namespace "http://www.w3.org/1998/Math/MathML";math{display:inline-block;line-height:initial}mfrac{display:inline-block;vertical-align:-50%;text-align:center}mfrac>:first-child{border-bottom:solid thin currentColor}mfrac>*{display:block}msub>:nth-child(2){font-size:smaller;vertical-align:sub}msup>:nth-child(2){font-size:smaller;vertical-align:super}munder,mover,munderover{display:inline-flex;flex-flow:column nowrap;vertical-align:middle;text-align:center}munder>:not(:first-child),mover>:not(:first-child),munderover>:not(:first-child){font-size:smaller}munderover>:last-child{order:-1}mroot,msqrt{position:relative;display:inline-block;border-top:solid thin currentColor;margin-top:.5px;vertical-align:middle;margin-left:1ch}mroot:before,msqrt:before{content:"";display:inline-block;position:absolute;width:1ch;left:-1ch;top:-1px;bottom:0;background-image:url(${f})}`, "", { version: 3, sources: ["webpack://./src/mathml.scss"], names: [], mappings: "AAAA,+CAAA,CAEA,KACI,oBAAA,CACA,mBAAA,CAGJ,MACI,oBAAA,CACA,mBAAA,CACA,iBAAA,CAEA,mBACI,qCAAA,CAGJ,QACI,aAAA,CAKJ,mBACI,iBAAA,CACA,kBAAA,CAKJ,mBACI,iBAAA,CACA,oBAAA,CAIR,wBACI,mBAAA,CACA,uBAAA,CACA,qBAAA,CACA,iBAAA,CAEA,iFACI,iBAAA,CAKJ,uBAAA,QAAA,CAGJ,YACI,iBAAA,CACA,oBAAA,CACA,kCAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA,CAEA,0BACI,UAAA,CACA,oBAAA,CACA,iBAAA,CACA,SAAA,CACA,SAAA,CACA,QAAA,CACA,QAAA,CACA,wDAAA", sourcesContent: [`@namespace "http://www.w3.org/1998/Math/MathML";\r
\r
math {\r
    display: inline-block;\r
    line-height: initial;\r
}\r
\r
mfrac {\r
    display: inline-block;\r
    vertical-align: -50%;\r
    text-align: center;\r
\r
    &>:first-child {\r
        border-bottom: solid thin currentColor;\r
    }\r
\r
    &>* {\r
        display: block;\r
    }\r
}\r
\r
msub {\r
    &>:nth-child(2) {\r
        font-size: smaller;\r
        vertical-align: sub;\r
    }\r
}\r
\r
msup {\r
    &>:nth-child(2) {\r
        font-size: smaller;\r
        vertical-align: super;\r
    }\r
}\r
\r
munder, mover, munderover {\r
    display: inline-flex;\r
    flex-flow: column nowrap;\r
    vertical-align: middle;\r
    text-align: center;\r
\r
    &>:not(:first-child) {\r
        font-size: smaller;\r
    }\r
}\r
\r
munderover {\r
    &>:last-child { order: -1; }\r
}\r
\r
mroot, msqrt {\r
    position: relative;\r
    display: inline-block;\r
    border-top: solid thin currentColor;  \r
    margin-top: 0.5px;\r
    vertical-align: middle;  \r
    margin-left: 1ch; \r
\r
    &:before {\r
        content: "";\r
        display: inline-block;\r
        position: absolute;\r
        width: 1ch;\r
        left: -1ch;\r
        top: -1px;\r
        bottom: 0;\r
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 100' preserveAspectRatio='none'%3E%3Cpath d='m0,75 l5,0 l5,25 l10,-100' stroke='black' fill='none' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E");\r
    }\r
}`], sourceRoot: "" }]);
            const g = h.toString();
          }, 645: (v) => {
            v.exports = function(e) {
              var u = [];
              return u.toString = function() {
                return this.map(function(r) {
                  var m = "", p = r[5] !== void 0;
                  return r[4] && (m += "@supports (".concat(r[4], ") {")), r[2] && (m += "@media ".concat(r[2], " {")), p && (m += "@layer".concat(r[5].length > 0 ? " ".concat(r[5]) : "", " {")), m += e(r), p && (m += "}"), r[2] && (m += "}"), r[4] && (m += "}"), m;
                }).join("");
              }, u.i = function(r, m, p, n, i) {
                typeof r == "string" && (r = [[null, r, void 0]]);
                var y = {};
                if (p)
                  for (var d = 0; d < this.length; d++) {
                    var h = this[d][0];
                    h != null && (y[h] = true);
                  }
                for (var f = 0; f < r.length; f++) {
                  var g = [].concat(r[f]);
                  p && y[g[0]] || (i !== void 0 && (g[5] === void 0 || (g[1] = "@layer".concat(g[5].length > 0 ? " ".concat(g[5]) : "", " {").concat(g[1], "}")), g[5] = i), m && (g[2] && (g[1] = "@media ".concat(g[2], " {").concat(g[1], "}")), g[2] = m), n && (g[4] ? (g[1] = "@supports (".concat(g[4], ") {").concat(g[1], "}"), g[4] = n) : g[4] = "".concat(n)), u.push(g));
                }
              }, u;
            };
          }, 806: (v) => {
            v.exports = function(e, u) {
              return u || (u = {}), e && (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), u.hash && (e += u.hash), /["'() \t\n]|(%20)/.test(e) || u.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e);
            };
          }, 537: (v) => {
            v.exports = function(e) {
              var u = e[1], r = e[3];
              if (!r)
                return u;
              if (typeof btoa == "function") {
                var m = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), p = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(m), n = "/*# ".concat(p, " */");
                return [u].concat([n]).join(`
`);
              }
              return [u].join(`
`);
            };
          }, 522: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.OpenXmlPackage = void 0;
            const r = u(626), m = u(472), p = u(593), n = u(461);
            class i {
              constructor(d, h) {
                this._zip = d, this.options = h, this.xmlParser = new m.XmlParser();
              }
              get(d) {
                return this._zip.files[function(h) {
                  return h.startsWith("/") ? h.substr(1) : h;
                }(d)];
              }
              update(d, h) {
                this._zip.file(d, h);
              }
              static load(d, h) {
                return fe(this, null, function* () {
                  const f = yield r.loadAsync(d);
                  return new i(f, h);
                });
              }
              save(d = "blob") {
                return this._zip.generateAsync({ type: d });
              }
              load(d, h = "string") {
                var f, g;
                return (g = (f = this.get(d)) === null || f === void 0 ? void 0 : f.async(h)) !== null && g !== void 0 ? g : Promise.resolve(null);
              }
              loadRelationships(d = null) {
                return fe(this, null, function* () {
                  let h = "_rels/.rels";
                  if (d != null) {
                    const [g, A] = (0, p.splitPath)(d);
                    h = `${g}_rels/${A}.rels`;
                  }
                  const f = yield this.load(h);
                  return f ? (0, n.parseRelationships)(this.parseXmlDocument(f).firstElementChild, this.xmlParser) : null;
                });
              }
              parseXmlDocument(d) {
                return (0, m.parseXmlString)(d, this.options.trimXmlDeclaration);
              }
            }
            e.OpenXmlPackage = i;
          }, 530: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.Part = void 0;
            const r = u(472);
            e.Part = class {
              constructor(m, p) {
                this._package = m, this.path = p;
              }
              load() {
                return fe(this, null, function* () {
                  this.rels = yield this._package.loadRelationships(this.path);
                  const m = yield this._package.load(this.path), p = this._package.parseXmlDocument(m);
                  this._package.options.keepOrigin && (this._xmlDocument = p), this.parseXml(p.firstElementChild);
                });
              }
              save() {
                this._package.update(this.path, (0, r.serializeXmlString)(this._xmlDocument));
              }
              parseXml(m) {
              }
            };
          }, 461: (v, e) => {
            var u;
            Object.defineProperty(e, "__esModule", { value: true }), e.parseRelationships = e.RelationshipTypes = void 0, function(r) {
              r.OfficeDocument = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", r.FontTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable", r.Image = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", r.Numbering = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", r.Styles = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", r.StylesWithEffects = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects", r.Theme = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", r.Settings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", r.WebSettings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings", r.Hyperlink = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", r.Footnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", r.Endnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes", r.Footer = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", r.Header = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", r.ExtendedProperties = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", r.CoreProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", r.CustomProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties";
            }(u || (e.RelationshipTypes = u = {})), e.parseRelationships = function(r, m) {
              return m.elements(r).map((p) => ({ id: m.attr(p, "Id"), type: m.attr(p, "Type"), target: m.attr(p, "Target"), targetMode: m.attr(p, "TargetMode") }));
            };
          }, 168: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.DocumentParser = e.autos = void 0;
            const r = u(120), m = u(109), p = u(59), n = u(472), i = u(488), y = u(172), d = u(149), h = u(320);
            e.autos = { shd: "inherit", color: "black", borderColor: "black", highlight: "transparent" };
            const f = [], g = { oMath: r.DomType.MmlMath, oMathPara: r.DomType.MmlMathParagraph, f: r.DomType.MmlFraction, num: r.DomType.MmlNumerator, den: r.DomType.MmlDenominator, rad: r.DomType.MmlRadical, deg: r.DomType.MmlDegree, e: r.DomType.MmlBase, sSup: r.DomType.MmlSuperscript, sSub: r.DomType.MmlSubscript, sup: r.DomType.MmlSuperArgument, sub: r.DomType.MmlSubArgument, d: r.DomType.MmlDelimiter, nary: r.DomType.MmlNary };
            e.DocumentParser = class {
              constructor(o) {
                this.options = Object.assign({ ignoreWidth: false, debug: false }, o);
              }
              parseNotes(o, t, l) {
                var b = [];
                for (let k of n.default.elements(o, t)) {
                  const D = new l();
                  D.id = n.default.attr(k, "id"), D.noteType = n.default.attr(k, "type"), D.children = this.parseBodyElements(k), b.push(D);
                }
                return b;
              }
              parseDocumentFile(o) {
                var t = n.default.element(o, "body"), l = n.default.element(o, "background"), b = n.default.element(t, "sectPr");
                return { type: r.DomType.Document, children: this.parseBodyElements(t), props: b ? (0, p.parseSectionProperties)(b, n.default) : {}, cssStyle: l ? this.parseBackground(l) : {} };
              }
              parseBackground(o) {
                var t = {}, l = C.colorAttr(o, "color");
                return l && (t["background-color"] = l), t;
              }
              parseBodyElements(o) {
                var t = [];
                for (let l of n.default.elements(o))
                  switch (l.localName) {
                    case "p":
                      t.push(this.parseParagraph(l));
                      break;
                    case "tbl":
                      t.push(this.parseTable(l));
                      break;
                    case "sdt":
                      t.push(...this.parseSdt(l, (b) => this.parseBodyElements(b)));
                  }
                return t;
              }
              parseStylesFile(o) {
                var t = [];
                return C.foreach(o, (l) => {
                  switch (l.localName) {
                    case "style":
                      t.push(this.parseStyle(l));
                      break;
                    case "docDefaults":
                      t.push(this.parseDefaultStyles(l));
                  }
                }), t;
              }
              parseDefaultStyles(o) {
                var t = { id: null, name: null, target: null, basedOn: null, styles: [] };
                return C.foreach(o, (l) => {
                  switch (l.localName) {
                    case "rPrDefault":
                      var b = n.default.element(l, "rPr");
                      b && t.styles.push({ target: "span", values: this.parseDefaultProperties(b, {}) });
                      break;
                    case "pPrDefault":
                      var k = n.default.element(l, "pPr");
                      k && t.styles.push({ target: "p", values: this.parseDefaultProperties(k, {}) });
                  }
                }), t;
              }
              parseStyle(o) {
                var t = { id: n.default.attr(o, "styleId"), isDefault: n.default.boolAttr(o, "default"), name: null, target: null, basedOn: null, styles: [], linked: null };
                switch (n.default.attr(o, "type")) {
                  case "paragraph":
                    t.target = "p";
                    break;
                  case "table":
                    t.target = "table";
                    break;
                  case "character":
                    t.target = "span";
                }
                return C.foreach(o, (l) => {
                  switch (l.localName) {
                    case "basedOn":
                      t.basedOn = n.default.attr(l, "val");
                      break;
                    case "name":
                      t.name = n.default.attr(l, "val");
                      break;
                    case "link":
                      t.linked = n.default.attr(l, "val");
                      break;
                    case "next":
                      t.next = n.default.attr(l, "val");
                      break;
                    case "aliases":
                      t.aliases = n.default.attr(l, "val").split(",");
                      break;
                    case "pPr":
                      t.styles.push({ target: "p", values: this.parseDefaultProperties(l, {}) }), t.paragraphProps = (0, m.parseParagraphProperties)(l, n.default);
                      break;
                    case "rPr":
                      t.styles.push({ target: "span", values: this.parseDefaultProperties(l, {}) }), t.runProps = (0, i.parseRunProperties)(l, n.default);
                      break;
                    case "tblPr":
                    case "tcPr":
                      t.styles.push({ target: "td", values: this.parseDefaultProperties(l, {}) });
                      break;
                    case "tblStylePr":
                      for (let b of this.parseTableStyle(l))
                        t.styles.push(b);
                      break;
                    case "rsid":
                    case "qFormat":
                    case "hidden":
                    case "semiHidden":
                    case "unhideWhenUsed":
                    case "autoRedefine":
                    case "uiPriority":
                      break;
                    default:
                      this.options.debug && console.warn(`DOCX: Unknown style element: ${l.localName}`);
                  }
                }), t;
              }
              parseTableStyle(o) {
                var t = [], l = n.default.attr(o, "type"), b = "", k = "";
                switch (l) {
                  case "firstRow":
                    k = ".first-row", b = "tr.first-row td";
                    break;
                  case "lastRow":
                    k = ".last-row", b = "tr.last-row td";
                    break;
                  case "firstCol":
                    k = ".first-col", b = "td.first-col";
                    break;
                  case "lastCol":
                    k = ".last-col", b = "td.last-col";
                    break;
                  case "band1Vert":
                    k = ":not(.no-vband)", b = "td.odd-col";
                    break;
                  case "band2Vert":
                    k = ":not(.no-vband)", b = "td.even-col";
                    break;
                  case "band1Horz":
                    k = ":not(.no-hband)", b = "tr.odd-row";
                    break;
                  case "band2Horz":
                    k = ":not(.no-hband)", b = "tr.even-row";
                    break;
                  default:
                    return [];
                }
                return C.foreach(o, (D) => {
                  switch (D.localName) {
                    case "pPr":
                      t.push({ target: `${b} p`, mod: k, values: this.parseDefaultProperties(D, {}) });
                      break;
                    case "rPr":
                      t.push({ target: `${b} span`, mod: k, values: this.parseDefaultProperties(D, {}) });
                      break;
                    case "tblPr":
                    case "tcPr":
                      t.push({ target: b, mod: k, values: this.parseDefaultProperties(D, {}) });
                  }
                }), t;
              }
              parseNumberingFile(o) {
                var t = [], l = {}, b = [];
                return C.foreach(o, (k) => {
                  switch (k.localName) {
                    case "abstractNum":
                      this.parseAbstractNumbering(k, b).forEach((T) => t.push(T));
                      break;
                    case "numPicBullet":
                      b.push(this.parseNumberingPicBullet(k));
                      break;
                    case "num":
                      var D = n.default.attr(k, "numId"), _ = n.default.elementAttr(k, "abstractNumId", "val");
                      l[_] = D;
                  }
                }), t.forEach((k) => k.id = l[k.id]), t;
              }
              parseNumberingPicBullet(o) {
                var t = n.default.element(o, "pict"), l = t && n.default.element(t, "shape"), b = l && n.default.element(l, "imagedata");
                return b ? { id: n.default.intAttr(o, "numPicBulletId"), src: n.default.attr(b, "id"), style: n.default.attr(l, "style") } : null;
              }
              parseAbstractNumbering(o, t) {
                var l = [], b = n.default.attr(o, "abstractNumId");
                return C.foreach(o, (k) => {
                  k.localName === "lvl" && l.push(this.parseNumberingLevel(b, k, t));
                }), l;
              }
              parseNumberingLevel(o, t, l) {
                var b = { id: o, level: n.default.intAttr(t, "ilvl"), pStyleName: void 0, pStyle: {}, rStyle: {}, suff: "tab" };
                return C.foreach(t, (k) => {
                  switch (k.localName) {
                    case "pPr":
                      this.parseDefaultProperties(k, b.pStyle);
                      break;
                    case "rPr":
                      this.parseDefaultProperties(k, b.rStyle);
                      break;
                    case "lvlPicBulletId":
                      var D = n.default.intAttr(k, "val");
                      b.bullet = l.find((_) => _.id == D);
                      break;
                    case "lvlText":
                      b.levelText = n.default.attr(k, "val");
                      break;
                    case "pStyle":
                      b.pStyleName = n.default.attr(k, "val");
                      break;
                    case "numFmt":
                      b.format = n.default.attr(k, "val");
                      break;
                    case "suff":
                      b.suff = n.default.attr(k, "val");
                  }
                }), b;
              }
              parseSdt(o, t) {
                const l = n.default.element(o, "sdtContent");
                return l ? t(l) : [];
              }
              parseInserted(o, t) {
                var l, b;
                return { type: r.DomType.Inserted, children: (b = (l = t(o)) === null || l === void 0 ? void 0 : l.children) !== null && b !== void 0 ? b : [] };
              }
              parseDeleted(o, t) {
                var l, b;
                return { type: r.DomType.Deleted, children: (b = (l = t(o)) === null || l === void 0 ? void 0 : l.children) !== null && b !== void 0 ? b : [] };
              }
              parseParagraph(o) {
                var t = { type: r.DomType.Paragraph, children: [] };
                for (let l of n.default.elements(o))
                  switch (l.localName) {
                    case "pPr":
                      this.parseParagraphProperties(l, t);
                      break;
                    case "r":
                      t.children.push(this.parseRun(l, t));
                      break;
                    case "hyperlink":
                      t.children.push(this.parseHyperlink(l, t));
                      break;
                    case "bookmarkStart":
                      t.children.push((0, y.parseBookmarkStart)(l, n.default));
                      break;
                    case "bookmarkEnd":
                      t.children.push((0, y.parseBookmarkEnd)(l, n.default));
                      break;
                    case "oMath":
                    case "oMathPara":
                      t.children.push(this.parseMathElement(l));
                      break;
                    case "sdt":
                      t.children.push(...this.parseSdt(l, (b) => this.parseParagraph(b).children));
                      break;
                    case "ins":
                      t.children.push(this.parseInserted(l, (b) => this.parseParagraph(b)));
                      break;
                    case "del":
                      t.children.push(this.parseDeleted(l, (b) => this.parseParagraph(b)));
                  }
                return t;
              }
              parseParagraphProperties(o, t) {
                this.parseDefaultProperties(o, t.cssStyle = {}, null, (l) => {
                  if ((0, m.parseParagraphProperty)(l, t, n.default))
                    return true;
                  switch (l.localName) {
                    case "pStyle":
                      t.styleName = n.default.attr(l, "val");
                      break;
                    case "cnfStyle":
                      t.className = a.classNameOfCnfStyle(l);
                      break;
                    case "framePr":
                      this.parseFrame(l, t);
                      break;
                    case "rPr":
                      break;
                    default:
                      return false;
                  }
                  return true;
                });
              }
              parseFrame(o, t) {
                n.default.attr(o, "dropCap") == "drop" && (t.cssStyle.float = "left");
              }
              parseHyperlink(o, t) {
                var l = { type: r.DomType.Hyperlink, parent: t, children: [] }, b = n.default.attr(o, "anchor"), k = n.default.attr(o, "id");
                return b && (l.href = "#" + b), k && (l.id = k), C.foreach(o, (D) => {
                  D.localName === "r" && l.children.push(this.parseRun(D, l));
                }), l;
              }
              parseRun(o, t) {
                var l = { type: r.DomType.Run, parent: t, children: [] };
                return C.foreach(o, (b) => {
                  switch ((b = this.checkAlternateContent(b)).localName) {
                    case "t":
                      l.children.push({ type: r.DomType.Text, text: b.textContent });
                      break;
                    case "delText":
                      l.children.push({ type: r.DomType.DeletedText, text: b.textContent });
                      break;
                    case "fldSimple":
                      l.children.push({ type: r.DomType.SimpleField, instruction: n.default.attr(b, "instr"), lock: n.default.boolAttr(b, "lock", false), dirty: n.default.boolAttr(b, "dirty", false) });
                      break;
                    case "instrText":
                      l.fieldRun = true, l.children.push({ type: r.DomType.Instruction, text: b.textContent });
                      break;
                    case "fldChar":
                      l.fieldRun = true, l.children.push({ type: r.DomType.ComplexField, charType: n.default.attr(b, "fldCharType"), lock: n.default.boolAttr(b, "lock", false), dirty: n.default.boolAttr(b, "dirty", false) });
                      break;
                    case "noBreakHyphen":
                      l.children.push({ type: r.DomType.NoBreakHyphen });
                      break;
                    case "br":
                      l.children.push({ type: r.DomType.Break, break: n.default.attr(b, "type") || "textWrapping" });
                      break;
                    case "lastRenderedPageBreak":
                      l.children.push({ type: r.DomType.Break, break: "lastRenderedPageBreak" });
                      break;
                    case "sym":
                      l.children.push({ type: r.DomType.Symbol, font: n.default.attr(b, "font"), char: n.default.attr(b, "char") });
                      break;
                    case "tab":
                      l.children.push({ type: r.DomType.Tab });
                      break;
                    case "footnoteReference":
                      l.children.push({ type: r.DomType.FootnoteReference, id: n.default.attr(b, "id") });
                      break;
                    case "endnoteReference":
                      l.children.push({ type: r.DomType.EndnoteReference, id: n.default.attr(b, "id") });
                      break;
                    case "drawing":
                      let k = this.parseDrawing(b);
                      k && (l.children = [k]);
                      break;
                    case "pict":
                      l.children.push(this.parseVmlPicture(b));
                      break;
                    case "rPr":
                      this.parseRunProperties(b, l);
                  }
                }), l;
              }
              parseMathElement(o) {
                const t = `${o.localName}Pr`, l = { type: g[o.localName], children: [] };
                for (const k of n.default.elements(o))
                  if (g[k.localName])
                    l.children.push(this.parseMathElement(k));
                  else if (k.localName == "r") {
                    var b = this.parseRun(k);
                    b.type = r.DomType.MmlRun, l.children.push(b);
                  } else
                    k.localName == t && (l.props = this.parseMathProperies(k));
                return l;
              }
              parseMathProperies(o) {
                const t = {};
                for (const l of n.default.elements(o))
                  switch (l.localName) {
                    case "chr":
                      t.char = n.default.attr(l, "val");
                      break;
                    case "degHide":
                      t.hideDegree = n.default.boolAttr(l, "val");
                      break;
                    case "begChr":
                      t.beginChar = n.default.attr(l, "val");
                      break;
                    case "endChr":
                      t.endChar = n.default.attr(l, "val");
                  }
                return t;
              }
              parseRunProperties(o, t) {
                this.parseDefaultProperties(o, t.cssStyle = {}, null, (l) => {
                  switch (l.localName) {
                    case "rStyle":
                      t.styleName = n.default.attr(l, "val");
                      break;
                    case "vertAlign":
                      t.verticalAlign = a.valueOfVertAlign(l, true);
                      break;
                    default:
                      return false;
                  }
                  return true;
                });
              }
              parseVmlPicture(o) {
                const t = { type: r.DomType.VmlPicture, children: [] };
                for (const l of n.default.elements(o)) {
                  const b = (0, h.parseVmlElement)(l);
                  b && t.children.push(b);
                }
                return t;
              }
              checkAlternateContent(o) {
                var t;
                if (o.localName != "AlternateContent")
                  return o;
                var l = n.default.element(o, "Choice");
                if (l) {
                  var b = n.default.attr(l, "Requires"), k = o.lookupNamespaceURI(b);
                  if (f.includes(k))
                    return l.firstElementChild;
                }
                return (t = n.default.element(o, "Fallback")) === null || t === void 0 ? void 0 : t.firstElementChild;
              }
              parseDrawing(o) {
                for (var t of n.default.elements(o))
                  switch (t.localName) {
                    case "inline":
                    case "anchor":
                      return this.parseDrawingWrapper(t);
                  }
              }
              parseDrawingWrapper(o) {
                var t, l = { type: r.DomType.Drawing, children: [], cssStyle: {} }, b = o.localName == "anchor";
                let k = null, D = n.default.boolAttr(o, "simplePos"), _ = { relative: "page", align: "left", offset: "0" }, T = { relative: "page", align: "top", offset: "0" };
                for (var s of n.default.elements(o))
                  switch (s.localName) {
                    case "simplePos":
                      D && (_.offset = n.default.lengthAttr(s, "x", d.LengthUsage.Emu), T.offset = n.default.lengthAttr(s, "y", d.LengthUsage.Emu));
                      break;
                    case "extent":
                      l.cssStyle.width = n.default.lengthAttr(s, "cx", d.LengthUsage.Emu), l.cssStyle.height = n.default.lengthAttr(s, "cy", d.LengthUsage.Emu);
                      break;
                    case "positionH":
                    case "positionV":
                      if (!D) {
                        let q = s.localName == "positionH" ? _ : T;
                        var R = n.default.element(s, "align"), V = n.default.element(s, "posOffset");
                        q.relative = (t = n.default.attr(s, "relativeFrom")) !== null && t !== void 0 ? t : q.relative, R && (q.align = R.textContent), V && (q.offset = C.sizeValue(V, d.LengthUsage.Emu));
                      }
                      break;
                    case "wrapTopAndBottom":
                      k = "wrapTopAndBottom";
                      break;
                    case "wrapNone":
                      k = "wrapNone";
                      break;
                    case "graphic":
                      var j = this.parseGraphic(s);
                      j && l.children.push(j);
                  }
                return k == "wrapTopAndBottom" ? (l.cssStyle.display = "block", _.align && (l.cssStyle["text-align"] = _.align, l.cssStyle.width = "100%")) : k == "wrapNone" ? (l.cssStyle.display = "block", l.cssStyle.position = "relative", l.cssStyle.width = "0px", l.cssStyle.height = "0px", _.offset && (l.cssStyle.left = _.offset), T.offset && (l.cssStyle.top = T.offset)) : !b || _.align != "left" && _.align != "right" || (l.cssStyle.float = _.align), l;
              }
              parseGraphic(o) {
                var t = n.default.element(o, "graphicData");
                for (let l of n.default.elements(t))
                  if (l.localName === "pic")
                    return this.parsePicture(l);
                return null;
              }
              parsePicture(o) {
                var t = { type: r.DomType.Image, src: "", cssStyle: {} }, l = n.default.element(o, "blipFill"), b = n.default.element(l, "blip");
                t.src = n.default.attr(b, "embed");
                var k = n.default.element(o, "spPr"), D = n.default.element(k, "xfrm");
                for (var _ of (t.cssStyle.position = "relative", n.default.elements(D)))
                  switch (_.localName) {
                    case "ext":
                      t.cssStyle.width = n.default.lengthAttr(_, "cx", d.LengthUsage.Emu), t.cssStyle.height = n.default.lengthAttr(_, "cy", d.LengthUsage.Emu);
                      break;
                    case "off":
                      t.cssStyle.left = n.default.lengthAttr(_, "x", d.LengthUsage.Emu), t.cssStyle.top = n.default.lengthAttr(_, "y", d.LengthUsage.Emu);
                  }
                return t;
              }
              parseTable(o) {
                var t = { type: r.DomType.Table, children: [] };
                return C.foreach(o, (l) => {
                  switch (l.localName) {
                    case "tr":
                      t.children.push(this.parseTableRow(l));
                      break;
                    case "tblGrid":
                      t.columns = this.parseTableColumns(l);
                      break;
                    case "tblPr":
                      this.parseTableProperties(l, t);
                  }
                }), t;
              }
              parseTableColumns(o) {
                var t = [];
                return C.foreach(o, (l) => {
                  l.localName === "gridCol" && t.push({ width: n.default.lengthAttr(l, "w") });
                }), t;
              }
              parseTableProperties(o, t) {
                switch (t.cssStyle = {}, t.cellStyle = {}, this.parseDefaultProperties(o, t.cssStyle, t.cellStyle, (l) => {
                  switch (l.localName) {
                    case "tblStyle":
                      t.styleName = n.default.attr(l, "val");
                      break;
                    case "tblLook":
                      t.className = a.classNameOftblLook(l);
                      break;
                    case "tblpPr":
                      this.parseTablePosition(l, t);
                      break;
                    case "tblStyleColBandSize":
                      t.colBandSize = n.default.intAttr(l, "val");
                      break;
                    case "tblStyleRowBandSize":
                      t.rowBandSize = n.default.intAttr(l, "val");
                      break;
                    default:
                      return false;
                  }
                  return true;
                }), t.cssStyle["text-align"]) {
                  case "center":
                    delete t.cssStyle["text-align"], t.cssStyle["margin-left"] = "auto", t.cssStyle["margin-right"] = "auto";
                    break;
                  case "right":
                    delete t.cssStyle["text-align"], t.cssStyle["margin-left"] = "auto";
                }
              }
              parseTablePosition(o, t) {
                var l = n.default.lengthAttr(o, "topFromText"), b = n.default.lengthAttr(o, "bottomFromText"), k = n.default.lengthAttr(o, "rightFromText"), D = n.default.lengthAttr(o, "leftFromText");
                t.cssStyle.float = "left", t.cssStyle["margin-bottom"] = a.addSize(t.cssStyle["margin-bottom"], b), t.cssStyle["margin-left"] = a.addSize(t.cssStyle["margin-left"], D), t.cssStyle["margin-right"] = a.addSize(t.cssStyle["margin-right"], k), t.cssStyle["margin-top"] = a.addSize(t.cssStyle["margin-top"], l);
              }
              parseTableRow(o) {
                var t = { type: r.DomType.Row, children: [] };
                return C.foreach(o, (l) => {
                  switch (l.localName) {
                    case "tc":
                      t.children.push(this.parseTableCell(l));
                      break;
                    case "trPr":
                      this.parseTableRowProperties(l, t);
                  }
                }), t;
              }
              parseTableRowProperties(o, t) {
                t.cssStyle = this.parseDefaultProperties(o, {}, null, (l) => {
                  switch (l.localName) {
                    case "cnfStyle":
                      t.className = a.classNameOfCnfStyle(l);
                      break;
                    case "tblHeader":
                      t.isHeader = n.default.boolAttr(l, "val");
                      break;
                    default:
                      return false;
                  }
                  return true;
                });
              }
              parseTableCell(o) {
                var t = { type: r.DomType.Cell, children: [] };
                return C.foreach(o, (l) => {
                  switch (l.localName) {
                    case "tbl":
                      t.children.push(this.parseTable(l));
                      break;
                    case "p":
                      t.children.push(this.parseParagraph(l));
                      break;
                    case "tcPr":
                      this.parseTableCellProperties(l, t);
                  }
                }), t;
              }
              parseTableCellProperties(o, t) {
                t.cssStyle = this.parseDefaultProperties(o, {}, null, (l) => {
                  var b;
                  switch (l.localName) {
                    case "gridSpan":
                      t.span = n.default.intAttr(l, "val", null);
                      break;
                    case "vMerge":
                      t.verticalMerge = (b = n.default.attr(l, "val")) !== null && b !== void 0 ? b : "continue";
                      break;
                    case "cnfStyle":
                      t.className = a.classNameOfCnfStyle(l);
                      break;
                    default:
                      return false;
                  }
                  return true;
                });
              }
              parseDefaultProperties(o, t = null, l = null, b = null) {
                return t = t || {}, C.foreach(o, (k) => {
                  if (!(b != null && b(k)))
                    switch (k.localName) {
                      case "jc":
                        t["text-align"] = a.valueOfJc(k);
                        break;
                      case "textAlignment":
                        t["vertical-align"] = a.valueOfTextAlignment(k);
                        break;
                      case "color":
                        t.color = C.colorAttr(k, "val", null, e.autos.color);
                        break;
                      case "sz":
                        t["font-size"] = t["min-height"] = n.default.lengthAttr(k, "val", d.LengthUsage.FontSize);
                        break;
                      case "shd":
                        t["background-color"] = C.colorAttr(k, "fill", null, e.autos.shd);
                        break;
                      case "highlight":
                        t["background-color"] = C.colorAttr(k, "val", null, e.autos.highlight);
                        break;
                      case "vertAlign":
                        break;
                      case "position":
                        t.verticalAlign = n.default.lengthAttr(k, "val", d.LengthUsage.FontSize);
                        break;
                      case "tcW":
                        if (this.options.ignoreWidth)
                          break;
                      case "tblW":
                        t.width = a.valueOfSize(k, "w");
                        break;
                      case "trHeight":
                        this.parseTrHeight(k, t);
                        break;
                      case "strike":
                        t["text-decoration"] = n.default.boolAttr(k, "val", true) ? "line-through" : "none";
                        break;
                      case "b":
                        t["font-weight"] = n.default.boolAttr(k, "val", true) ? "bold" : "normal";
                        break;
                      case "i":
                        t["font-style"] = n.default.boolAttr(k, "val", true) ? "italic" : "normal";
                        break;
                      case "caps":
                        t["text-transform"] = n.default.boolAttr(k, "val", true) ? "uppercase" : "none";
                        break;
                      case "smallCaps":
                        t["text-transform"] = n.default.boolAttr(k, "val", true) ? "lowercase" : "none";
                        break;
                      case "u":
                        this.parseUnderline(k, t);
                        break;
                      case "ind":
                      case "tblInd":
                        this.parseIndentation(k, t);
                        break;
                      case "rFonts":
                        this.parseFont(k, t);
                        break;
                      case "tblBorders":
                        this.parseBorderProperties(k, l || t);
                        break;
                      case "tblCellSpacing":
                        t["border-spacing"] = a.valueOfMargin(k), t["border-collapse"] = "separate";
                        break;
                      case "pBdr":
                        this.parseBorderProperties(k, t);
                        break;
                      case "bdr":
                        t.border = a.valueOfBorder(k);
                        break;
                      case "tcBorders":
                        this.parseBorderProperties(k, t);
                        break;
                      case "vanish":
                        n.default.boolAttr(k, "val", true) && (t.display = "none");
                        break;
                      case "kern":
                      case "noWrap":
                        break;
                      case "tblCellMar":
                      case "tcMar":
                        this.parseMarginProperties(k, l || t);
                        break;
                      case "tblLayout":
                        t["table-layout"] = a.valueOfTblLayout(k);
                        break;
                      case "vAlign":
                        t["vertical-align"] = a.valueOfTextAlignment(k);
                        break;
                      case "spacing":
                        o.localName == "pPr" && this.parseSpacing(k, t);
                        break;
                      case "wordWrap":
                        n.default.boolAttr(k, "val") && (t["overflow-wrap"] = "break-word");
                        break;
                      case "bCs":
                      case "iCs":
                      case "szCs":
                      case "tabs":
                      case "outlineLvl":
                      case "contextualSpacing":
                      case "tblStyleColBandSize":
                      case "tblStyleRowBandSize":
                      case "webHidden":
                      case "pageBreakBefore":
                      case "suppressLineNumbers":
                      case "keepLines":
                      case "keepNext":
                      case "lang":
                      case "widowControl":
                      case "bidi":
                      case "rtl":
                      case "noProof":
                        break;
                      default:
                        this.options.debug && console.warn(`DOCX: Unknown document element: ${o.localName}.${k.localName}`);
                    }
                }), t;
              }
              parseUnderline(o, t) {
                var l = n.default.attr(o, "val");
                if (l != null) {
                  switch (l) {
                    case "dash":
                    case "dashDotDotHeavy":
                    case "dashDotHeavy":
                    case "dashedHeavy":
                    case "dashLong":
                    case "dashLongHeavy":
                    case "dotDash":
                    case "dotDotDash":
                      t["text-decoration-style"] = "dashed";
                      break;
                    case "dotted":
                    case "dottedHeavy":
                      t["text-decoration-style"] = "dotted";
                      break;
                    case "double":
                      t["text-decoration-style"] = "double";
                      break;
                    case "single":
                    case "thick":
                    case "words":
                      t["text-decoration"] = "underline";
                      break;
                    case "wave":
                    case "wavyDouble":
                    case "wavyHeavy":
                      t["text-decoration-style"] = "wavy";
                      break;
                    case "none":
                      t["text-decoration"] = "none";
                  }
                  var b = C.colorAttr(o, "color");
                  b && (t["text-decoration-color"] = b);
                }
              }
              parseFont(o, t) {
                var l = [n.default.attr(o, "ascii"), a.themeValue(o, "asciiTheme")].filter((b) => b).join(", ");
                l.length > 0 && (t["font-family"] = l);
              }
              parseIndentation(o, t) {
                var l = n.default.lengthAttr(o, "firstLine"), b = n.default.lengthAttr(o, "hanging"), k = n.default.lengthAttr(o, "left"), D = n.default.lengthAttr(o, "start"), _ = n.default.lengthAttr(o, "right"), T = n.default.lengthAttr(o, "end");
                l && (t["text-indent"] = l), b && (t["text-indent"] = `-${b}`), (k || D) && (t["margin-left"] = k || D), (_ || T) && (t["margin-right"] = _ || T);
              }
              parseSpacing(o, t) {
                var l = n.default.lengthAttr(o, "before"), b = n.default.lengthAttr(o, "after"), k = n.default.intAttr(o, "line", null), D = n.default.attr(o, "lineRule");
                if (l && (t["margin-top"] = l), b && (t["margin-bottom"] = b), k !== null)
                  switch (D) {
                    case "auto":
                      t["line-height"] = `${(k / 240).toFixed(2)}`;
                      break;
                    case "atLeast":
                      t["line-height"] = `calc(100% + ${k / 20}pt)`;
                      break;
                    default:
                      t["line-height"] = t["min-height"] = k / 20 + "pt";
                  }
              }
              parseMarginProperties(o, t) {
                C.foreach(o, (l) => {
                  switch (l.localName) {
                    case "left":
                      t["padding-left"] = a.valueOfMargin(l);
                      break;
                    case "right":
                      t["padding-right"] = a.valueOfMargin(l);
                      break;
                    case "top":
                      t["padding-top"] = a.valueOfMargin(l);
                      break;
                    case "bottom":
                      t["padding-bottom"] = a.valueOfMargin(l);
                  }
                });
              }
              parseTrHeight(o, t) {
                n.default.attr(o, "hRule"), t.height = n.default.lengthAttr(o, "val");
              }
              parseBorderProperties(o, t) {
                C.foreach(o, (l) => {
                  switch (l.localName) {
                    case "start":
                    case "left":
                      t["border-left"] = a.valueOfBorder(l);
                      break;
                    case "end":
                    case "right":
                      t["border-right"] = a.valueOfBorder(l);
                      break;
                    case "top":
                      t["border-top"] = a.valueOfBorder(l);
                      break;
                    case "bottom":
                      t["border-bottom"] = a.valueOfBorder(l);
                  }
                });
              }
            };
            const A = ["black", "blue", "cyan", "darkBlue", "darkCyan", "darkGray", "darkGreen", "darkMagenta", "darkRed", "darkYellow", "green", "lightGray", "magenta", "none", "red", "white", "yellow"];
            class C {
              static foreach(t, l) {
                for (var b = 0; b < t.childNodes.length; b++) {
                  let k = t.childNodes[b];
                  k.nodeType == Node.ELEMENT_NODE && l(k);
                }
              }
              static colorAttr(t, l, b = null, k = "black") {
                var D = n.default.attr(t, l);
                if (D)
                  return D == "auto" ? k : A.includes(D) ? D : `#${D}`;
                var _ = n.default.attr(t, "themeColor");
                return _ ? `var(--docx-${_}-color)` : b;
              }
              static sizeValue(t, l = d.LengthUsage.Dxa) {
                return (0, d.convertLength)(t.textContent, l);
              }
            }
            class a {
              static themeValue(t, l) {
                var b = n.default.attr(t, l);
                return b ? `var(--docx-${b}-font)` : null;
              }
              static valueOfSize(t, l) {
                var b = d.LengthUsage.Dxa;
                switch (n.default.attr(t, "type")) {
                  case "dxa":
                    break;
                  case "pct":
                    b = d.LengthUsage.Percent;
                    break;
                  case "auto":
                    return "auto";
                }
                return n.default.lengthAttr(t, l, b);
              }
              static valueOfMargin(t) {
                return n.default.lengthAttr(t, "w");
              }
              static valueOfBorder(t) {
                if (n.default.attr(t, "val") == "nil")
                  return "none";
                var l = C.colorAttr(t, "color");
                return `${n.default.lengthAttr(t, "sz", d.LengthUsage.Border)} solid ${l == "auto" ? e.autos.borderColor : l}`;
              }
              static valueOfTblLayout(t) {
                return n.default.attr(t, "val") == "fixed" ? "fixed" : "auto";
              }
              static classNameOfCnfStyle(t) {
                const l = n.default.attr(t, "val");
                return ["first-row", "last-row", "first-col", "last-col", "odd-col", "even-col", "odd-row", "even-row", "ne-cell", "nw-cell", "se-cell", "sw-cell"].filter((b, k) => l[k] == "1").join(" ");
              }
              static valueOfJc(t) {
                var l = n.default.attr(t, "val");
                switch (l) {
                  case "start":
                  case "left":
                    return "left";
                  case "center":
                    return "center";
                  case "end":
                  case "right":
                    return "right";
                  case "both":
                    return "justify";
                }
                return l;
              }
              static valueOfVertAlign(t, l = false) {
                var b = n.default.attr(t, "val");
                switch (b) {
                  case "subscript":
                    return "sub";
                  case "superscript":
                    return l ? "sup" : "super";
                }
                return l ? null : b;
              }
              static valueOfTextAlignment(t) {
                var l = n.default.attr(t, "val");
                switch (l) {
                  case "auto":
                  case "baseline":
                    return "baseline";
                  case "top":
                    return "top";
                  case "center":
                    return "middle";
                  case "bottom":
                    return "bottom";
                }
                return l;
              }
              static addSize(t, l) {
                return t == null ? l : l == null ? t : `calc(${t} + ${l})`;
              }
              static classNameOftblLook(t) {
                const l = n.default.hexAttr(t, "val", 0);
                let b = "";
                return (n.default.boolAttr(t, "firstRow") || 32 & l) && (b += " first-row"), (n.default.boolAttr(t, "lastRow") || 64 & l) && (b += " last-row"), (n.default.boolAttr(t, "firstColumn") || 128 & l) && (b += " first-col"), (n.default.boolAttr(t, "lastColumn") || 256 & l) && (b += " last-col"), (n.default.boolAttr(t, "noHBand") || 512 & l) && (b += " no-hband"), (n.default.boolAttr(t, "noVBand") || 1024 & l) && (b += " no-vband"), b.trim();
              }
            }
          }, 162: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.CorePropsPart = void 0;
            const r = u(530), m = u(614);
            class p extends r.Part {
              parseXml(i) {
                this.props = (0, m.parseCoreProps)(i, this._package.xmlParser);
              }
            }
            e.CorePropsPart = p;
          }, 614: (v, e) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseCoreProps = void 0, e.parseCoreProps = function(u, r) {
              const m = {};
              for (let p of r.elements(u))
                switch (p.localName) {
                  case "title":
                    m.title = p.textContent;
                    break;
                  case "description":
                    m.description = p.textContent;
                    break;
                  case "subject":
                    m.subject = p.textContent;
                    break;
                  case "creator":
                    m.creator = p.textContent;
                    break;
                  case "keywords":
                    m.keywords = p.textContent;
                    break;
                  case "language":
                    m.language = p.textContent;
                    break;
                  case "lastModifiedBy":
                    m.lastModifiedBy = p.textContent;
                    break;
                  case "revision":
                    p.textContent && (m.revision = parseInt(p.textContent));
                }
              return m;
            };
          }, 177: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.CustomPropsPart = void 0;
            const r = u(530), m = u(821);
            class p extends r.Part {
              parseXml(i) {
                this.props = (0, m.parseCustomProps)(i, this._package.xmlParser);
              }
            }
            e.CustomPropsPart = p;
          }, 821: (v, e) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseCustomProps = void 0, e.parseCustomProps = function(u, r) {
              return r.elements(u, "property").map((m) => {
                const p = m.firstChild;
                return { formatId: r.attr(m, "fmtid"), name: r.attr(m, "name"), type: p.nodeName, value: p.textContent };
              });
            };
          }, 665: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.ExtendedPropsPart = void 0;
            const r = u(530), m = u(668);
            class p extends r.Part {
              parseXml(i) {
                this.props = (0, m.parseExtendedProps)(i, this._package.xmlParser);
              }
            }
            e.ExtendedPropsPart = p;
          }, 668: (v, e) => {
            function u(r) {
              if (r !== void 0)
                return parseInt(r);
            }
            Object.defineProperty(e, "__esModule", { value: true }), e.parseExtendedProps = void 0, e.parseExtendedProps = function(r, m) {
              const p = {};
              for (let n of m.elements(r))
                switch (n.localName) {
                  case "Template":
                    p.template = n.textContent;
                    break;
                  case "Pages":
                    p.pages = u(n.textContent);
                    break;
                  case "Words":
                    p.words = u(n.textContent);
                    break;
                  case "Characters":
                    p.characters = u(n.textContent);
                    break;
                  case "Application":
                    p.application = n.textContent;
                    break;
                  case "Lines":
                    p.lines = u(n.textContent);
                    break;
                  case "Paragraphs":
                    p.paragraphs = u(n.textContent);
                    break;
                  case "Company":
                    p.company = n.textContent;
                    break;
                  case "AppVersion":
                    p.appVersion = n.textContent;
                }
              return p;
            };
          }, 172: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseBookmarkEnd = e.parseBookmarkStart = void 0;
            const r = u(120);
            e.parseBookmarkStart = function(m, p) {
              return { type: r.DomType.BookmarkStart, id: p.attr(m, "id"), name: p.attr(m, "name"), colFirst: p.intAttr(m, "colFirst"), colLast: p.intAttr(m, "colLast") };
            }, e.parseBookmarkEnd = function(m, p) {
              return { type: r.DomType.BookmarkEnd, id: p.attr(m, "id") };
            };
          }, 191: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseBorders = e.parseBorder = void 0;
            const r = u(149);
            function m(p, n) {
              return { type: n.attr(p, "val"), color: n.attr(p, "color"), size: n.lengthAttr(p, "sz", r.LengthUsage.Border), offset: n.lengthAttr(p, "space", r.LengthUsage.Point), frame: n.boolAttr(p, "frame"), shadow: n.boolAttr(p, "shadow") };
            }
            e.parseBorder = m, e.parseBorders = function(p, n) {
              var i = {};
              for (let y of n.elements(p))
                switch (y.localName) {
                  case "left":
                    i.left = m(y, n);
                    break;
                  case "top":
                    i.top = m(y, n);
                    break;
                  case "right":
                    i.right = m(y, n);
                    break;
                  case "bottom":
                    i.bottom = m(y, n);
                }
              return i;
            };
          }, 149: (v, e) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseCommonProperty = e.convertPercentage = e.convertBoolean = e.convertLength = e.LengthUsage = e.ns = void 0, e.ns = { wordml: "http://schemas.openxmlformats.org/wordprocessingml/2006/main", drawingml: "http://schemas.openxmlformats.org/drawingml/2006/main", picture: "http://schemas.openxmlformats.org/drawingml/2006/picture", compatibility: "http://schemas.openxmlformats.org/markup-compatibility/2006", math: "http://schemas.openxmlformats.org/officeDocument/2006/math" }, e.LengthUsage = { Dxa: { mul: 0.05, unit: "pt" }, Emu: { mul: 7874015748031496e-20, unit: "pt" }, FontSize: { mul: 0.5, unit: "pt" }, Border: { mul: 0.125, unit: "pt" }, Point: { mul: 1, unit: "pt" }, Percent: { mul: 0.02, unit: "%" }, LineHeight: { mul: 0.004166666666666667, unit: "" }, VmlEmu: { mul: 7874015748031496e-20, unit: "" } }, e.convertLength = function(u, r = e.LengthUsage.Dxa) {
              return u == null || /.+(p[xt]|[%])$/.test(u) ? u : `${(parseInt(u) * r.mul).toFixed(2)}${r.unit}`;
            }, e.convertBoolean = function(u, r = false) {
              switch (u) {
                case "1":
                case "on":
                case "true":
                  return true;
                case "0":
                case "off":
                case "false":
                  return false;
                default:
                  return r;
              }
            }, e.convertPercentage = function(u) {
              return u ? parseInt(u) / 100 : null;
            }, e.parseCommonProperty = function(u, r, m) {
              if (u.namespaceURI != e.ns.wordml)
                return false;
              switch (u.localName) {
                case "color":
                  r.color = m.attr(u, "val");
                  break;
                case "sz":
                  r.fontSize = m.lengthAttr(u, "val", e.LengthUsage.FontSize);
                  break;
                default:
                  return false;
              }
              return true;
            };
          }, 448: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.DocumentPart = void 0;
            const r = u(530);
            class m extends r.Part {
              constructor(n, i, y) {
                super(n, i), this._documentParser = y;
              }
              parseXml(n) {
                this.body = this._documentParser.parseDocumentFile(n);
              }
            }
            e.DocumentPart = m;
          }, 120: (v, e) => {
            var u;
            Object.defineProperty(e, "__esModule", { value: true }), e.DomType = void 0, function(r) {
              r.Document = "document", r.Paragraph = "paragraph", r.Run = "run", r.Break = "break", r.NoBreakHyphen = "noBreakHyphen", r.Table = "table", r.Row = "row", r.Cell = "cell", r.Hyperlink = "hyperlink", r.Drawing = "drawing", r.Image = "image", r.Text = "text", r.Tab = "tab", r.Symbol = "symbol", r.BookmarkStart = "bookmarkStart", r.BookmarkEnd = "bookmarkEnd", r.Footer = "footer", r.Header = "header", r.FootnoteReference = "footnoteReference", r.EndnoteReference = "endnoteReference", r.Footnote = "footnote", r.Endnote = "endnote", r.SimpleField = "simpleField", r.ComplexField = "complexField", r.Instruction = "instruction", r.VmlPicture = "vmlPicture", r.MmlMath = "mmlMath", r.MmlMathParagraph = "mmlMathParagraph", r.MmlFraction = "mmlFraction", r.MmlNumerator = "mmlNumerator", r.MmlDenominator = "mmlDenominator", r.MmlRadical = "mmlRadical", r.MmlBase = "mmlBase", r.MmlDegree = "mmlDegree", r.MmlSuperscript = "mmlSuperscript", r.MmlSubscript = "mmlSubscript", r.MmlSubArgument = "mmlSubArgument", r.MmlSuperArgument = "mmlSuperArgument", r.MmlNary = "mmlNary", r.MmlDelimiter = "mmlDelimiter", r.MmlRun = "mmlRun", r.VmlElement = "vmlElement", r.Inserted = "inserted", r.Deleted = "deleted", r.DeletedText = "deletedText";
            }(u || (e.DomType = u = {}));
          }, 931: (v, e) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseLineSpacing = void 0, e.parseLineSpacing = function(u, r) {
              return { before: r.lengthAttr(u, "before"), after: r.lengthAttr(u, "after"), line: r.intAttr(u, "line"), lineRule: r.attr(u, "lineRule") };
            };
          }, 109: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseNumbering = e.parseTabs = e.parseParagraphProperty = e.parseParagraphProperties = void 0;
            const r = u(149), m = u(59), p = u(931), n = u(488);
            function i(h, f, g) {
              if (h.namespaceURI != r.ns.wordml)
                return false;
              if ((0, r.parseCommonProperty)(h, f, g))
                return true;
              switch (h.localName) {
                case "tabs":
                  f.tabs = y(h, g);
                  break;
                case "sectPr":
                  f.sectionProps = (0, m.parseSectionProperties)(h, g);
                  break;
                case "numPr":
                  f.numbering = d(h, g);
                  break;
                case "spacing":
                  return f.lineSpacing = (0, p.parseLineSpacing)(h, g), false;
                case "textAlignment":
                  return f.textAlignment = g.attr(h, "val"), false;
                case "keepNext":
                  f.keepLines = g.boolAttr(h, "val", true);
                  break;
                case "keepNext":
                  f.keepNext = g.boolAttr(h, "val", true);
                  break;
                case "pageBreakBefore":
                  f.pageBreakBefore = g.boolAttr(h, "val", true);
                  break;
                case "outlineLvl":
                  f.outlineLevel = g.intAttr(h, "val");
                  break;
                case "pStyle":
                  f.styleName = g.attr(h, "val");
                  break;
                case "rPr":
                  f.runProps = (0, n.parseRunProperties)(h, g);
                  break;
                default:
                  return false;
              }
              return true;
            }
            function y(h, f) {
              return f.elements(h, "tab").map((g) => ({ position: f.lengthAttr(g, "pos"), leader: f.attr(g, "leader"), style: f.attr(g, "val") }));
            }
            function d(h, f) {
              var g = {};
              for (let A of f.elements(h))
                switch (A.localName) {
                  case "numId":
                    g.id = f.attr(A, "val");
                    break;
                  case "ilvl":
                    g.level = f.intAttr(A, "val");
                }
              return g;
            }
            e.parseParagraphProperties = function(h, f) {
              let g = {};
              for (let A of f.elements(h))
                i(A, g, f);
              return g;
            }, e.parseParagraphProperty = i, e.parseTabs = y, e.parseNumbering = d;
          }, 488: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseRunProperty = e.parseRunProperties = void 0;
            const r = u(149);
            function m(p, n, i) {
              return !!(0, r.parseCommonProperty)(p, n, i);
            }
            e.parseRunProperties = function(p, n) {
              let i = {};
              for (let y of n.elements(p))
                m(y, i, n);
              return i;
            }, e.parseRunProperty = m;
          }, 59: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseSectionProperties = e.SectionType = void 0;
            const r = u(472), m = u(191);
            var p;
            function n(d, h) {
              return { numberOfColumns: h.intAttr(d, "num"), space: h.lengthAttr(d, "space"), separator: h.boolAttr(d, "sep"), equalWidth: h.boolAttr(d, "equalWidth", true), columns: h.elements(d, "col").map((f) => ({ width: h.lengthAttr(f, "w"), space: h.lengthAttr(f, "space") })) };
            }
            function i(d, h) {
              return { chapSep: h.attr(d, "chapSep"), chapStyle: h.attr(d, "chapStyle"), format: h.attr(d, "fmt"), start: h.intAttr(d, "start") };
            }
            function y(d, h) {
              return { id: h.attr(d, "id"), type: h.attr(d, "type") };
            }
            (function(d) {
              d.Continuous = "continuous", d.NextPage = "nextPage", d.NextColumn = "nextColumn", d.EvenPage = "evenPage", d.OddPage = "oddPage";
            })(p || (e.SectionType = p = {})), e.parseSectionProperties = function(d, h = r.default) {
              var f, g, A = {};
              for (let C of h.elements(d))
                switch (C.localName) {
                  case "pgSz":
                    A.pageSize = { width: h.lengthAttr(C, "w"), height: h.lengthAttr(C, "h"), orientation: h.attr(C, "orient") };
                    break;
                  case "type":
                    A.type = h.attr(C, "val");
                    break;
                  case "pgMar":
                    A.pageMargins = { left: h.lengthAttr(C, "left"), right: h.lengthAttr(C, "right"), top: h.lengthAttr(C, "top"), bottom: h.lengthAttr(C, "bottom"), header: h.lengthAttr(C, "header"), footer: h.lengthAttr(C, "footer"), gutter: h.lengthAttr(C, "gutter") };
                    break;
                  case "cols":
                    A.columns = n(C, h);
                    break;
                  case "headerReference":
                    ((f = A.headerRefs) !== null && f !== void 0 ? f : A.headerRefs = []).push(y(C, h));
                    break;
                  case "footerReference":
                    ((g = A.footerRefs) !== null && g !== void 0 ? g : A.footerRefs = []).push(y(C, h));
                    break;
                  case "titlePg":
                    A.titlePage = h.boolAttr(C, "val", true);
                    break;
                  case "pgBorders":
                    A.pageBorders = (0, m.parseBorders)(C, h);
                    break;
                  case "pgNumType":
                    A.pageNumber = i(C, h);
                }
              return A;
            };
          }, 667: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.renderAsync = e.praseAsync = e.defaultOptions = void 0;
            const r = u(213), m = u(168), p = u(932);
            e.defaultOptions = { ignoreHeight: false, ignoreWidth: false, ignoreFonts: false, breakPages: true, debug: false, experimental: false, className: "docx", inWrapper: true, trimXmlDeclaration: true, ignoreLastRenderedPageBreak: true, renderHeaders: true, renderFooters: true, renderFootnotes: true, renderEndnotes: true, useBase64URL: false, useMathMLPolyfill: false, renderChanges: false }, e.praseAsync = function(n, i = null) {
              const y = Object.assign(Object.assign({}, e.defaultOptions), i);
              return r.WordDocument.load(n, new m.DocumentParser(y), y);
            }, e.renderAsync = function(n, i, y = null, d = null) {
              return fe(this, null, function* () {
                const h = Object.assign(Object.assign({}, e.defaultOptions), d), f = new p.HtmlRenderer(window.document), g = yield r.WordDocument.load(n, new m.DocumentParser(h), h);
                return f.render(g, i, y, h), g;
              });
            };
          }, 380: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.FontTablePart = void 0;
            const r = u(530), m = u(512);
            class p extends r.Part {
              parseXml(i) {
                this.fonts = (0, m.parseFonts)(i, this._package.xmlParser);
              }
            }
            e.FontTablePart = p;
          }, 512: (v, e) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseEmbedFontRef = e.parseFont = e.parseFonts = void 0;
            const u = { embedRegular: "regular", embedBold: "bold", embedItalic: "italic", embedBoldItalic: "boldItalic" };
            function r(p, n) {
              let i = { name: n.attr(p, "name"), embedFontRefs: [] };
              for (let y of n.elements(p))
                switch (y.localName) {
                  case "family":
                    i.family = n.attr(y, "val");
                    break;
                  case "altName":
                    i.altName = n.attr(y, "val");
                    break;
                  case "embedRegular":
                  case "embedBold":
                  case "embedItalic":
                  case "embedBoldItalic":
                    i.embedFontRefs.push(m(y, n));
                }
              return i;
            }
            function m(p, n) {
              return { id: n.attr(p, "id"), key: n.attr(p, "fontKey"), type: u[p.localName] };
            }
            e.parseFonts = function(p, n) {
              return n.elements(p).map((i) => r(i, n));
            }, e.parseFont = r, e.parseEmbedFontRef = m;
          }, 984: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.WmlFooter = e.WmlHeader = void 0;
            const r = u(120);
            e.WmlHeader = class {
              constructor() {
                this.type = r.DomType.Header, this.children = [], this.cssStyle = {};
              }
            }, e.WmlFooter = class {
              constructor() {
                this.type = r.DomType.Footer, this.children = [], this.cssStyle = {};
              }
            };
          }, 985: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.FooterPart = e.HeaderPart = e.BaseHeaderFooterPart = void 0;
            const r = u(530), m = u(984);
            class p extends r.Part {
              constructor(i, y, d) {
                super(i, y), this._documentParser = d;
              }
              parseXml(i) {
                this.rootElement = this.createRootElement(), this.rootElement.children = this._documentParser.parseBodyElements(i);
              }
            }
            e.BaseHeaderFooterPart = p, e.HeaderPart = class extends p {
              createRootElement() {
                return new m.WmlHeader();
              }
            }, e.FooterPart = class extends p {
              createRootElement() {
                return new m.WmlFooter();
              }
            };
          }, 932: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.HtmlRenderer = void 0;
            const r = u(120), m = u(593), p = u(630), n = u(438), i = "http://www.w3.org/1998/Math/MathML";
            function y(a, o, t) {
              return h(void 0, a, o, t);
            }
            function d(a, o, t) {
              return h("http://www.w3.org/2000/svg", a, o, t);
            }
            function h(a, o, t, l) {
              var b = a ? document.createElementNS(a, o) : document.createElement(o);
              return Object.assign(b, t), l && g(b, l), b;
            }
            function f(a) {
              a.innerHTML = "";
            }
            function g(a, o) {
              o.forEach((t) => a.appendChild((0, m.isString)(t) ? document.createTextNode(t) : t));
            }
            function A(a) {
              return y("style", { innerHTML: a });
            }
            function C(a, o) {
              a.appendChild(document.createComment(o));
            }
            e.HtmlRenderer = class {
              constructor(a) {
                this.htmlDocument = a, this.className = "docx", this.styleMap = {}, this.currentPart = null, this.tableVerticalMerges = [], this.currentVerticalMerge = null, this.tableCellPositions = [], this.currentCellPosition = null, this.footnoteMap = {}, this.endnoteMap = {}, this.currentEndnoteIds = [], this.usedHederFooterParts = [], this.currentTabs = [], this.tabsTimeout = 0, this.createElement = y;
              }
              render(a, o, t = null, l) {
                var b;
                this.document = a, this.options = l, this.className = l.className, this.rootSelector = l.inWrapper ? `.${this.className}-wrapper` : ":root", this.styleMap = null, f(t = t || o), f(o), C(t, "docxjs library predefined styles"), t.appendChild(this.renderDefaultStyle()), !window.MathMLElement && l.useMathMLPolyfill && (C(t, "docxjs mathml polyfill styles"), t.appendChild(A(n.default))), a.themePart && (C(t, "docxjs document theme values"), this.renderTheme(a.themePart, t)), a.stylesPart != null && (this.styleMap = this.processStyles(a.stylesPart.styles), C(t, "docxjs document styles"), t.appendChild(this.renderStyles(a.stylesPart.styles))), a.numberingPart && (this.prodessNumberings(a.numberingPart.domNumberings), C(t, "docxjs document numbering styles"), t.appendChild(this.renderNumbering(a.numberingPart.domNumberings, t))), a.footnotesPart && (this.footnoteMap = (0, m.keyBy)(a.footnotesPart.notes, (D) => D.id)), a.endnotesPart && (this.endnoteMap = (0, m.keyBy)(a.endnotesPart.notes, (D) => D.id)), a.settingsPart && (this.defaultTabSize = (b = a.settingsPart.settings) === null || b === void 0 ? void 0 : b.defaultTabStop), !l.ignoreFonts && a.fontTablePart && this.renderFontTable(a.fontTablePart, t);
                var k = this.renderSections(a.documentPart.body);
                this.options.inWrapper ? o.appendChild(this.renderWrapper(k)) : g(o, k), this.refreshTabStops();
              }
              renderTheme(a, o) {
                var t, l;
                const b = {}, k = (t = a.theme) === null || t === void 0 ? void 0 : t.fontScheme;
                k && (k.majorFont && (b["--docx-majorHAnsi-font"] = k.majorFont.latinTypeface), k.minorFont && (b["--docx-minorHAnsi-font"] = k.minorFont.latinTypeface));
                const D = (l = a.theme) === null || l === void 0 ? void 0 : l.colorScheme;
                if (D)
                  for (let [T, s] of Object.entries(D.colors))
                    b[`--docx-${T}-color`] = `#${s}`;
                const _ = this.styleToString(`.${this.className}`, b);
                o.appendChild(A(_));
              }
              renderFontTable(a, o) {
                for (let t of a.fonts)
                  for (let l of t.embedFontRefs)
                    this.document.loadFont(l.id, l.key).then((b) => {
                      const k = { "font-family": t.name, src: `url(${b})` };
                      l.type != "bold" && l.type != "boldItalic" || (k["font-weight"] = "bold"), l.type != "italic" && l.type != "boldItalic" || (k["font-style"] = "italic"), C(o, `docxjs ${t.name} font`);
                      const D = this.styleToString("@font-face", k);
                      o.appendChild(A(D)), this.refreshTabStops();
                    });
              }
              processStyleName(a) {
                return a ? `${this.className}_${(0, m.escapeClassName)(a)}` : this.className;
              }
              processStyles(a) {
                const o = (0, m.keyBy)(a.filter((l) => l.id != null), (l) => l.id);
                for (const l of a.filter((b) => b.basedOn)) {
                  var t = o[l.basedOn];
                  if (t) {
                    l.paragraphProps = (0, m.mergeDeep)(l.paragraphProps, t.paragraphProps), l.runProps = (0, m.mergeDeep)(l.runProps, t.runProps);
                    for (const b of t.styles) {
                      const k = l.styles.find((D) => D.target == b.target);
                      k ? this.copyStyleProperties(b.values, k.values) : l.styles.push(Object.assign(Object.assign({}, b), { values: Object.assign({}, b.values) }));
                    }
                  } else
                    this.options.debug && console.warn(`Can't find base style ${l.basedOn}`);
                }
                for (let l of a)
                  l.cssName = this.processStyleName(l.id);
                return o;
              }
              prodessNumberings(a) {
                var o;
                for (let t of a.filter((l) => l.pStyleName)) {
                  const l = this.findStyle(t.pStyleName);
                  !((o = l == null ? void 0 : l.paragraphProps) === null || o === void 0) && o.numbering && (l.paragraphProps.numbering.level = t.level);
                }
              }
              processElement(a) {
                if (a.children)
                  for (var o of a.children)
                    o.parent = a, o.type == r.DomType.Table ? this.processTable(o) : this.processElement(o);
              }
              processTable(a) {
                for (var o of a.children)
                  for (var t of o.children)
                    t.cssStyle = this.copyStyleProperties(a.cellStyle, t.cssStyle, ["border-left", "border-right", "border-top", "border-bottom", "padding-left", "padding-right", "padding-top", "padding-bottom"]), this.processElement(t);
              }
              copyStyleProperties(a, o, t = null) {
                if (!a)
                  return o;
                for (var l of (o == null && (o = {}), t == null && (t = Object.getOwnPropertyNames(a)), t))
                  a.hasOwnProperty(l) && !o.hasOwnProperty(l) && (o[l] = a[l]);
                return o;
              }
              createSection(a, o) {
                var t = this.createElement("section", { className: a });
                return o && (o.pageMargins && (t.style.paddingLeft = o.pageMargins.left, t.style.paddingRight = o.pageMargins.right, t.style.paddingTop = o.pageMargins.top, t.style.paddingBottom = o.pageMargins.bottom), o.pageSize && (this.options.ignoreWidth || (t.style.width = o.pageSize.width), this.options.ignoreHeight || (t.style.minHeight = o.pageSize.height)), o.columns && o.columns.numberOfColumns && (t.style.columnCount = `${o.columns.numberOfColumns}`, t.style.columnGap = o.columns.space, o.columns.separator && (t.style.columnRule = "1px solid black"))), t;
              }
              renderSections(a) {
                const o = [];
                this.processElement(a);
                const t = this.splitBySection(a.children);
                let l = null;
                for (let k = 0, D = t.length; k < D; k++) {
                  this.currentFootnoteIds = [];
                  const _ = t[k], T = _.sectProps || a.props, s = this.createSection(this.className, T);
                  this.renderStyleValues(a.cssStyle, s), this.options.renderHeaders && this.renderHeaderFooter(T.headerRefs, T, o.length, l != T, s);
                  var b = this.createElement("article");
                  this.renderElements(_.elements, b), s.appendChild(b), this.options.renderFootnotes && this.renderNotes(this.currentFootnoteIds, this.footnoteMap, s), this.options.renderEndnotes && k == D - 1 && this.renderNotes(this.currentEndnoteIds, this.endnoteMap, s), this.options.renderFooters && this.renderHeaderFooter(T.footerRefs, T, o.length, l != T, s), o.push(s), l = T;
                }
                return o;
              }
              renderHeaderFooter(a, o, t, l, b) {
                var k, D;
                if (a) {
                  var _ = (D = (k = o.titlePage && l ? a.find((s) => s.type == "first") : null) !== null && k !== void 0 ? k : t % 2 == 1 ? a.find((s) => s.type == "even") : null) !== null && D !== void 0 ? D : a.find((s) => s.type == "default"), T = _ && this.document.findPartByRelId(_.id, this.document.documentPart);
                  T && (this.currentPart = T, this.usedHederFooterParts.includes(T.path) || (this.processElement(T.rootElement), this.usedHederFooterParts.push(T.path)), this.renderElements([T.rootElement], b), this.currentPart = null);
                }
              }
              isPageBreakElement(a) {
                return a.type == r.DomType.Break && (a.break == "lastRenderedPageBreak" ? !this.options.ignoreLastRenderedPageBreak : a.break == "page");
              }
              splitBySection(a) {
                var o, t = { sectProps: null, elements: [] }, l = [t];
                for (let R of a) {
                  if (R.type == r.DomType.Paragraph) {
                    const V = this.findStyle(R.styleName);
                    !((o = V == null ? void 0 : V.paragraphProps) === null || o === void 0) && o.pageBreakBefore && (t.sectProps = b, t = { sectProps: null, elements: [] }, l.push(t));
                  }
                  if (t.elements.push(R), R.type == r.DomType.Paragraph) {
                    const V = R;
                    var b = V.sectionProps, k = -1, D = -1;
                    if (this.options.breakPages && V.children && (k = V.children.findIndex((j) => {
                      var q, W;
                      return (D = (W = (q = j.children) === null || q === void 0 ? void 0 : q.findIndex(this.isPageBreakElement.bind(this))) !== null && W !== void 0 ? W : -1) != -1;
                    })), (b || k != -1) && (t.sectProps = b, t = { sectProps: null, elements: [] }, l.push(t)), k != -1) {
                      let j = V.children[k], q = D < j.children.length - 1;
                      if (k < V.children.length - 1 || q) {
                        var _ = R.children, T = Object.assign(Object.assign({}, R), { children: _.slice(k) });
                        if (R.children = _.slice(0, k), t.elements.push(T), q) {
                          let W = j.children, Q = Object.assign(Object.assign({}, j), { children: W.slice(0, D) });
                          R.children.push(Q), j.children = W.slice(D);
                        }
                      }
                    }
                  }
                }
                let s = null;
                for (let R = l.length - 1; R >= 0; R--)
                  l[R].sectProps == null ? l[R].sectProps = s : s = l[R].sectProps;
                return l;
              }
              renderWrapper(a) {
                return this.createElement("div", { className: `${this.className}-wrapper` }, a);
              }
              renderDefaultStyle() {
                var a = this.className;
                return A(`
.${a}-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } 
.${a}-wrapper>section.${a} { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }
.${a} { color: black; }
section.${a} { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }
section.${a}>article { margin-bottom: auto; }
.${a} table { border-collapse: collapse; }
.${a} table td, .${a} table th { vertical-align: top; }
.${a} p { margin: 0pt; min-height: 1em; }
.${a} span { white-space: pre-wrap; overflow-wrap: break-word; }
.${a} a { color: inherit; text-decoration: inherit; }
`);
              }
              renderNumbering(a, o) {
                var t = "", l = [];
                for (var b of a) {
                  var k = `p.${this.numberingClass(b.id, b.level)}`, D = "none";
                  if (b.bullet) {
                    let _ = `--${this.className}-${b.bullet.src}`.toLowerCase();
                    t += this.styleToString(`${k}:before`, { content: "' '", display: "inline-block", background: `var(${_})` }, b.bullet.style), this.document.loadNumberingImage(b.bullet.src).then((T) => {
                      var s = `${this.rootSelector} { ${_}: url(${T}) }`;
                      o.appendChild(A(s));
                    });
                  } else if (b.levelText) {
                    let _ = this.numberingCounter(b.id, b.level);
                    b.level > 0 ? t += this.styleToString(`p.${this.numberingClass(b.id, b.level - 1)}`, { "counter-reset": _ }) : l.push(_), t += this.styleToString(`${k}:before`, Object.assign({ content: this.levelTextToContent(b.levelText, b.suff, b.id, this.numFormatToCssValue(b.format)), "counter-increment": _ }, b.rStyle));
                  } else
                    D = this.numFormatToCssValue(b.format);
                  t += this.styleToString(k, Object.assign({ display: "list-item", "list-style-position": "inside", "list-style-type": D }, b.pStyle));
                }
                return l.length > 0 && (t += this.styleToString(this.rootSelector, { "counter-reset": l.join(" ") })), A(t);
              }
              renderStyles(a) {
                var o, t = "";
                const l = this.styleMap, b = (0, m.keyBy)(a.filter((T) => T.isDefault), (T) => T.target);
                for (const T of a) {
                  var k = T.styles;
                  if (T.linked) {
                    var D = T.linked && l[T.linked];
                    D ? k = k.concat(D.styles) : this.options.debug && console.warn(`Can't find linked style ${T.linked}`);
                  }
                  for (const s of k) {
                    var _ = `${(o = T.target) !== null && o !== void 0 ? o : ""}.${T.cssName}`;
                    T.target != s.target && (_ += ` ${s.target}`), b[T.target] == T && (_ = `.${this.className} ${T.target}, ` + _), t += this.styleToString(_, s.values);
                  }
                }
                return A(t);
              }
              renderNotes(a, o, t) {
                var l = a.map((k) => o[k]).filter((k) => k);
                if (l.length > 0) {
                  var b = this.createElement("ol", null, this.renderElements(l));
                  t.appendChild(b);
                }
              }
              renderElement(a) {
                switch (a.type) {
                  case r.DomType.Paragraph:
                    return this.renderParagraph(a);
                  case r.DomType.BookmarkStart:
                    return this.renderBookmarkStart(a);
                  case r.DomType.BookmarkEnd:
                    return null;
                  case r.DomType.Run:
                    return this.renderRun(a);
                  case r.DomType.Table:
                    return this.renderTable(a);
                  case r.DomType.Row:
                    return this.renderTableRow(a);
                  case r.DomType.Cell:
                    return this.renderTableCell(a);
                  case r.DomType.Hyperlink:
                    return this.renderHyperlink(a);
                  case r.DomType.Drawing:
                    return this.renderDrawing(a);
                  case r.DomType.Image:
                    return this.renderImage(a);
                  case r.DomType.Text:
                  case r.DomType.Text:
                    return this.renderText(a);
                  case r.DomType.DeletedText:
                    return this.renderDeletedText(a);
                  case r.DomType.Tab:
                    return this.renderTab(a);
                  case r.DomType.Symbol:
                    return this.renderSymbol(a);
                  case r.DomType.Break:
                    return this.renderBreak(a);
                  case r.DomType.Footer:
                    return this.renderContainer(a, "footer");
                  case r.DomType.Header:
                    return this.renderContainer(a, "header");
                  case r.DomType.Footnote:
                  case r.DomType.Endnote:
                    return this.renderContainer(a, "li");
                  case r.DomType.FootnoteReference:
                    return this.renderFootnoteReference(a);
                  case r.DomType.EndnoteReference:
                    return this.renderEndnoteReference(a);
                  case r.DomType.NoBreakHyphen:
                    return this.createElement("wbr");
                  case r.DomType.VmlPicture:
                    return this.renderVmlPicture(a);
                  case r.DomType.VmlElement:
                    return this.renderVmlElement(a);
                  case r.DomType.MmlMath:
                    return this.renderContainerNS(a, i, "math", { xmlns: i });
                  case r.DomType.MmlMathParagraph:
                    return this.renderContainer(a, "span");
                  case r.DomType.MmlFraction:
                    return this.renderContainerNS(a, i, "mfrac");
                  case r.DomType.MmlNumerator:
                  case r.DomType.MmlDenominator:
                    return this.renderContainerNS(a, i, "mrow");
                  case r.DomType.MmlRadical:
                    return this.renderMmlRadical(a);
                  case r.DomType.MmlDegree:
                    return this.renderContainerNS(a, i, "mn");
                  case r.DomType.MmlSuperscript:
                    return this.renderContainerNS(a, i, "msup");
                  case r.DomType.MmlSubscript:
                    return this.renderContainerNS(a, i, "msub");
                  case r.DomType.MmlBase:
                    return this.renderContainerNS(a, i, "mrow");
                  case r.DomType.MmlSuperArgument:
                  case r.DomType.MmlSubArgument:
                    return this.renderContainerNS(a, i, "mn");
                  case r.DomType.MmlDelimiter:
                    return this.renderMmlDelimiter(a);
                  case r.DomType.MmlRun:
                    return this.renderMmlRun(a);
                  case r.DomType.MmlNary:
                    return this.renderMmlNary(a);
                  case r.DomType.Inserted:
                    return this.renderInserted(a);
                  case r.DomType.Deleted:
                    return this.renderDeleted(a);
                }
                return null;
              }
              renderChildren(a, o) {
                return this.renderElements(a.children, o);
              }
              renderElements(a, o) {
                if (a == null)
                  return null;
                var t = a.flatMap((l) => this.renderElement(l)).filter((l) => l != null);
                return o && g(o, t), t;
              }
              renderContainer(a, o, t) {
                return this.createElement(o, t, this.renderChildren(a));
              }
              renderContainerNS(a, o, t, l) {
                return h(o, t, l, this.renderChildren(a));
              }
              renderParagraph(a) {
                var o, t, l, b, k = this.createElement("p");
                const D = this.findStyle(a.styleName);
                (o = a.tabs) !== null && o !== void 0 || (a.tabs = (t = D == null ? void 0 : D.paragraphProps) === null || t === void 0 ? void 0 : t.tabs), this.renderClass(a, k), this.renderChildren(a, k), this.renderStyleValues(a.cssStyle, k), this.renderCommonProperties(k.style, a);
                const _ = (l = a.numbering) !== null && l !== void 0 ? l : (b = D == null ? void 0 : D.paragraphProps) === null || b === void 0 ? void 0 : b.numbering;
                return _ && k.classList.add(this.numberingClass(_.id, _.level)), k;
              }
              renderRunProperties(a, o) {
                this.renderCommonProperties(a, o);
              }
              renderCommonProperties(a, o) {
                o != null && (o.color && (a.color = o.color), o.fontSize && (a["font-size"] = o.fontSize));
              }
              renderHyperlink(a) {
                var o = this.createElement("a");
                if (this.renderChildren(a, o), this.renderStyleValues(a.cssStyle, o), a.href)
                  o.href = a.href;
                else if (a.id) {
                  const t = this.document.documentPart.rels.find((l) => l.id == a.id && l.targetMode === "External");
                  o.href = t == null ? void 0 : t.target;
                }
                return o;
              }
              renderDrawing(a) {
                var o = this.createElement("div");
                return o.style.display = "inline-block", o.style.position = "relative", o.style.textIndent = "0px", this.renderChildren(a, o), this.renderStyleValues(a.cssStyle, o), o;
              }
              renderImage(a) {
                let o = this.createElement("img");
                return this.renderStyleValues(a.cssStyle, o), this.document && this.document.loadDocumentImage(a.src, this.currentPart).then((t) => {
                  o.src = t;
                }), o;
              }
              renderText(a) {
                return this.htmlDocument.createTextNode(a.text);
              }
              renderDeletedText(a) {
                return this.options.renderEndnotes ? this.htmlDocument.createTextNode(a.text) : null;
              }
              renderBreak(a) {
                return a.break == "textWrapping" ? this.createElement("br") : null;
              }
              renderInserted(a) {
                return this.options.renderChanges ? this.renderContainer(a, "ins") : this.renderChildren(a);
              }
              renderDeleted(a) {
                return this.options.renderChanges ? this.renderContainer(a, "del") : null;
              }
              renderSymbol(a) {
                var o = this.createElement("span");
                return o.style.fontFamily = a.font, o.innerHTML = `&#x${a.char};`, o;
              }
              renderFootnoteReference(a) {
                var o = this.createElement("sup");
                return this.currentFootnoteIds.push(a.id), o.textContent = `${this.currentFootnoteIds.length}`, o;
              }
              renderEndnoteReference(a) {
                var o = this.createElement("sup");
                return this.currentEndnoteIds.push(a.id), o.textContent = `${this.currentEndnoteIds.length}`, o;
              }
              renderTab(a) {
                var o, t = this.createElement("span");
                if (t.innerHTML = "&emsp;", this.options.experimental) {
                  t.className = this.tabStopClass();
                  var l = (o = function(b, k) {
                    for (var D = b.parent; D != null && D.type != k; )
                      D = D.parent;
                    return D;
                  }(a, r.DomType.Paragraph)) === null || o === void 0 ? void 0 : o.tabs;
                  this.currentTabs.push({ stops: l, span: t });
                }
                return t;
              }
              renderBookmarkStart(a) {
                var o = this.createElement("span");
                return o.id = a.name, o;
              }
              renderRun(a) {
                if (a.fieldRun)
                  return null;
                const o = this.createElement("span");
                if (a.id && (o.id = a.id), this.renderClass(a, o), this.renderStyleValues(a.cssStyle, o), a.verticalAlign) {
                  const t = this.createElement(a.verticalAlign);
                  this.renderChildren(a, t), o.appendChild(t);
                } else
                  this.renderChildren(a, o);
                return o;
              }
              renderTable(a) {
                let o = this.createElement("table");
                return this.tableCellPositions.push(this.currentCellPosition), this.tableVerticalMerges.push(this.currentVerticalMerge), this.currentVerticalMerge = {}, this.currentCellPosition = { col: 0, row: 0 }, a.columns && o.appendChild(this.renderTableColumns(a.columns)), this.renderClass(a, o), this.renderChildren(a, o), this.renderStyleValues(a.cssStyle, o), this.currentVerticalMerge = this.tableVerticalMerges.pop(), this.currentCellPosition = this.tableCellPositions.pop(), o;
              }
              renderTableColumns(a) {
                let o = this.createElement("colgroup");
                for (let t of a) {
                  let l = this.createElement("col");
                  t.width && (l.style.width = t.width), o.appendChild(l);
                }
                return o;
              }
              renderTableRow(a) {
                let o = this.createElement("tr");
                return this.currentCellPosition.col = 0, this.renderClass(a, o), this.renderChildren(a, o), this.renderStyleValues(a.cssStyle, o), this.currentCellPosition.row++, o;
              }
              renderTableCell(a) {
                let o = this.createElement("td");
                const t = this.currentCellPosition.col;
                return a.verticalMerge ? a.verticalMerge == "restart" ? (this.currentVerticalMerge[t] = o, o.rowSpan = 1) : this.currentVerticalMerge[t] && (this.currentVerticalMerge[t].rowSpan += 1, o.style.display = "none") : this.currentVerticalMerge[t] = null, this.renderClass(a, o), this.renderChildren(a, o), this.renderStyleValues(a.cssStyle, o), a.span && (o.colSpan = a.span), this.currentCellPosition.col += o.colSpan, o;
              }
              renderVmlPicture(a) {
                var o = y("div");
                return this.renderChildren(a, o), o;
              }
              renderVmlElement(a) {
                var o, t, l = d("svg");
                l.setAttribute("style", a.cssStyleText);
                const b = d(a.tagName);
                return Object.entries(a.attrs).forEach(([k, D]) => b.setAttribute(k, D)), !((o = a.imageHref) === null || o === void 0) && o.id && ((t = this.document) === null || t === void 0 || t.loadDocumentImage(a.imageHref.id, this.currentPart).then((k) => b.setAttribute("href", k))), l.appendChild(b), requestAnimationFrame(() => {
                  const k = l.firstElementChild.getBBox();
                  l.setAttribute("width", `${Math.ceil(k.x + k.width)}`), l.setAttribute("height", `${Math.ceil(k.y + k.height)}`);
                }), l;
              }
              renderMmlRadical(a) {
                var o;
                const t = a.children.find((b) => b.type == r.DomType.MmlBase);
                if (!((o = a.props) === null || o === void 0) && o.hideDegree)
                  return h(i, "msqrt", null, this.renderElements([t]));
                const l = a.children.find((b) => b.type == r.DomType.MmlDegree);
                return h(i, "mroot", null, this.renderElements([t, l]));
              }
              renderMmlDelimiter(a) {
                var o, t;
                const l = [];
                return l.push(h(i, "mo", null, [(o = a.props.beginChar) !== null && o !== void 0 ? o : "("])), l.push(...this.renderElements(a.children)), l.push(h(i, "mo", null, [(t = a.props.endChar) !== null && t !== void 0 ? t : ")"])), h(i, "mrow", null, l);
              }
              renderMmlNary(a) {
                var o;
                const t = [], l = (0, m.keyBy)(a.children, (T) => T.type), b = l[r.DomType.MmlSuperArgument], k = l[r.DomType.MmlSubArgument], D = b ? h(i, "mo", null, (0, m.asArray)(this.renderElement(b))) : null, _ = k ? h(i, "mo", null, (0, m.asArray)(this.renderElement(k))) : null;
                if (!((o = a.props) === null || o === void 0) && o.char) {
                  const T = h(i, "mo", null, [a.props.char]);
                  D || _ ? t.push(h(i, "munderover", null, [T, _, D])) : D ? t.push(h(i, "mover", null, [T, D])) : _ ? t.push(h(i, "munder", null, [T, _])) : t.push(T);
                }
                return t.push(...this.renderElements(l[r.DomType.MmlBase].children)), h(i, "mrow", null, t);
              }
              renderMmlRun(a) {
                const o = h(i, "ms");
                return this.renderClass(a, o), this.renderStyleValues(a.cssStyle, o), this.renderChildren(a, o), o;
              }
              renderStyleValues(a, o) {
                Object.assign(o.style, a);
              }
              renderClass(a, o) {
                a.className && (o.className = a.className), a.styleName && o.classList.add(this.processStyleName(a.styleName));
              }
              findStyle(a) {
                var o;
                return a && ((o = this.styleMap) === null || o === void 0 ? void 0 : o[a]);
              }
              numberingClass(a, o) {
                return `${this.className}-num-${a}-${o}`;
              }
              tabStopClass() {
                return `${this.className}-tab-stop`;
              }
              styleToString(a, o, t = null) {
                let l = `${a} {\r
`;
                for (const b in o)
                  l += `  ${b}: ${o[b]};\r
`;
                return t && (l += t), l + `}\r
`;
              }
              numberingCounter(a, o) {
                return `${this.className}-num-${a}-${o}`;
              }
              levelTextToContent(a, o, t, l) {
                var b;
                return `"${a.replace(/%\d*/g, (k) => {
                  let D = parseInt(k.substring(1), 10) - 1;
                  return `"counter(${this.numberingCounter(t, D)}, ${l})"`;
                })}${(b = { tab: "\\9", space: "\\a0" }[o]) !== null && b !== void 0 ? b : ""}"`;
              }
              numFormatToCssValue(a) {
                var o;
                return (o = { none: "none", bullet: "disc", decimal: "decimal", lowerLetter: "lower-alpha", upperLetter: "upper-alpha", lowerRoman: "lower-roman", upperRoman: "upper-roman", decimalZero: "decimal-leading-zero", aiueo: "katakana", aiueoFullWidth: "katakana", chineseCounting: "simp-chinese-informal", chineseCountingThousand: "simp-chinese-informal", chineseLegalSimplified: "simp-chinese-formal", chosung: "hangul-consonant", ideographDigital: "cjk-ideographic", ideographTraditional: "cjk-heavenly-stem", ideographLegalTraditional: "trad-chinese-formal", ideographZodiac: "cjk-earthly-branch", iroha: "katakana-iroha", irohaFullWidth: "katakana-iroha", japaneseCounting: "japanese-informal", japaneseDigitalTenThousand: "cjk-decimal", japaneseLegal: "japanese-formal", thaiNumbers: "thai", koreanCounting: "korean-hangul-formal", koreanDigital: "korean-hangul-formal", koreanDigital2: "korean-hanja-informal", hebrew1: "hebrew", hebrew2: "hebrew", hindiNumbers: "devanagari", ganada: "hangul", taiwaneseCounting: "cjk-ideographic", taiwaneseCountingThousand: "cjk-ideographic", taiwaneseDigital: "cjk-decimal" }[a]) !== null && o !== void 0 ? o : a;
              }
              refreshTabStops() {
                this.options.experimental && (clearTimeout(this.tabsTimeout), this.tabsTimeout = setTimeout(() => {
                  const a = (0, p.computePixelToPoint)();
                  for (let o of this.currentTabs)
                    (0, p.updateTabStop)(o.span, o.stops, this.defaultTabSize, a);
                }, 500));
              }
            };
          }, 630: (v, e) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.updateTabStop = e.computePixelToPoint = void 0;
            const u = { pos: 0, leader: "none", style: "left" };
            function r(m) {
              return parseFloat(m);
            }
            e.computePixelToPoint = function(m = document.body) {
              const p = document.createElement("div");
              p.style.width = "100pt", m.appendChild(p);
              const n = 100 / p.offsetWidth;
              return m.removeChild(p), n;
            }, e.updateTabStop = function(m, p, n, i = 0.75) {
              const y = m.closest("p"), d = m.getBoundingClientRect(), h = y.getBoundingClientRect(), f = getComputedStyle(y), g = (p == null ? void 0 : p.length) > 0 ? p.map((_) => ({ pos: r(_.position), leader: _.leader, style: _.style })).sort((_, T) => _.pos - T.pos) : [u], A = g[g.length - 1], C = h.width * i, a = r(n);
              let o = A.pos + a;
              if (o < C)
                for (; o < C && g.length < 50; o += a)
                  g.push(Object.assign(Object.assign({}, u), { pos: o }));
              const t = parseFloat(f.marginLeft), l = h.left + t, b = (d.left - l) * i, k = g.find((_) => _.style != "clear" && _.pos > b);
              if (k == null)
                return;
              let D = 1;
              if (k.style == "right" || k.style == "center") {
                const _ = Array.from(y.querySelectorAll(`.${m.className}`)), T = _.indexOf(m) + 1, s = document.createRange();
                s.setStart(m, 1), T < _.length ? s.setEndBefore(_[T]) : s.setEndAfter(y);
                const R = k.style == "center" ? 0.5 : 1, V = s.getBoundingClientRect(), j = V.left + R * V.width - (h.left - t);
                D = k.pos - j * i;
              } else
                D = k.pos - b;
              switch (m.innerHTML = "&nbsp;", m.style.textDecoration = "inherit", m.style.wordSpacing = `${D.toFixed(0)}pt`, k.leader) {
                case "dot":
                case "middleDot":
                  m.style.textDecoration = "underline", m.style.textDecorationStyle = "dotted";
                  break;
                case "hyphen":
                case "heavy":
                case "underscore":
                  m.style.textDecoration = "underline";
              }
            };
          }, 881: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.WmlEndnote = e.WmlFootnote = e.WmlBaseNote = void 0;
            const r = u(120);
            class m {
              constructor() {
                this.children = [], this.cssStyle = {};
              }
            }
            e.WmlBaseNote = m, e.WmlFootnote = class extends m {
              constructor() {
                super(...arguments), this.type = r.DomType.Footnote;
              }
            }, e.WmlEndnote = class extends m {
              constructor() {
                super(...arguments), this.type = r.DomType.Endnote;
              }
            };
          }, 735: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.EndnotesPart = e.FootnotesPart = e.BaseNotePart = void 0;
            const r = u(530), m = u(881);
            class p extends r.Part {
              constructor(i, y, d) {
                super(i, y), this._documentParser = d;
              }
            }
            e.BaseNotePart = p, e.FootnotesPart = class extends p {
              constructor(n, i, y) {
                super(n, i, y);
              }
              parseXml(n) {
                this.notes = this._documentParser.parseNotes(n, "footnote", m.WmlFootnote);
              }
            }, e.EndnotesPart = class extends p {
              constructor(n, i, y) {
                super(n, i, y);
              }
              parseXml(n) {
                this.notes = this._documentParser.parseNotes(n, "endnote", m.WmlEndnote);
              }
            };
          }, 527: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.NumberingPart = void 0;
            const r = u(530), m = u(682);
            class p extends r.Part {
              constructor(i, y, d) {
                super(i, y), this._documentParser = d;
              }
              parseXml(i) {
                Object.assign(this, (0, m.parseNumberingPart)(i, this._package.xmlParser)), this.domNumberings = this._documentParser.parseNumberingFile(i);
              }
            }
            e.NumberingPart = p;
          }, 682: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseNumberingBulletPicture = e.parseNumberingLevelOverrride = e.parseNumberingLevel = e.parseAbstractNumbering = e.parseNumbering = e.parseNumberingPart = void 0;
            const r = u(109), m = u(488);
            function p(h, f) {
              let g = { id: f.attr(h, "numId"), overrides: [] };
              for (let A of f.elements(h))
                switch (A.localName) {
                  case "abstractNumId":
                    g.abstractId = f.attr(A, "val");
                    break;
                  case "lvlOverride":
                    g.overrides.push(y(A, f));
                }
              return g;
            }
            function n(h, f) {
              let g = { id: f.attr(h, "abstractNumId"), levels: [] };
              for (let A of f.elements(h))
                switch (A.localName) {
                  case "name":
                    g.name = f.attr(A, "val");
                    break;
                  case "multiLevelType":
                    g.multiLevelType = f.attr(A, "val");
                    break;
                  case "numStyleLink":
                    g.numberingStyleLink = f.attr(A, "val");
                    break;
                  case "styleLink":
                    g.styleLink = f.attr(A, "val");
                    break;
                  case "lvl":
                    g.levels.push(i(A, f));
                }
              return g;
            }
            function i(h, f) {
              let g = { level: f.intAttr(h, "ilvl") };
              for (let A of f.elements(h))
                switch (A.localName) {
                  case "start":
                    g.start = f.attr(A, "val");
                    break;
                  case "lvlRestart":
                    g.restart = f.intAttr(A, "val");
                    break;
                  case "numFmt":
                    g.format = f.attr(A, "val");
                    break;
                  case "lvlText":
                    g.text = f.attr(A, "val");
                    break;
                  case "lvlJc":
                    g.justification = f.attr(A, "val");
                    break;
                  case "lvlPicBulletId":
                    g.bulletPictureId = f.attr(A, "val");
                    break;
                  case "pStyle":
                    g.paragraphStyle = f.attr(A, "val");
                    break;
                  case "pPr":
                    g.paragraphProps = (0, r.parseParagraphProperties)(A, f);
                    break;
                  case "rPr":
                    g.runProps = (0, m.parseRunProperties)(A, f);
                }
              return g;
            }
            function y(h, f) {
              let g = { level: f.intAttr(h, "ilvl") };
              for (let A of f.elements(h))
                switch (A.localName) {
                  case "startOverride":
                    g.start = f.intAttr(A, "val");
                    break;
                  case "lvl":
                    g.numberingLevel = i(A, f);
                }
              return g;
            }
            function d(h, f) {
              var g = f.element(h, "pict"), A = g && f.element(g, "shape"), C = A && f.element(A, "imagedata");
              return C ? { id: f.attr(h, "numPicBulletId"), referenceId: f.attr(C, "id"), style: f.attr(A, "style") } : null;
            }
            e.parseNumberingPart = function(h, f) {
              let g = { numberings: [], abstractNumberings: [], bulletPictures: [] };
              for (let A of f.elements(h))
                switch (A.localName) {
                  case "num":
                    g.numberings.push(p(A, f));
                    break;
                  case "abstractNum":
                    g.abstractNumberings.push(n(A, f));
                    break;
                  case "numPicBullet":
                    g.bulletPictures.push(d(A, f));
                }
              return g;
            }, e.parseNumbering = p, e.parseAbstractNumbering = n, e.parseNumberingLevel = i, e.parseNumberingLevelOverrride = y, e.parseNumberingBulletPicture = d;
          }, 472: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.XmlParser = e.serializeXmlString = e.parseXmlString = void 0;
            const r = u(149);
            e.parseXmlString = function(n, i = false) {
              var y;
              i && (n = n.replace(/<[?].*[?]>/, "")), n = (y = n).charCodeAt(0) === 65279 ? y.substring(1) : y;
              const d = new DOMParser().parseFromString(n, "application/xml"), h = (f = d.getElementsByTagName("parsererror")[0]) === null || f === void 0 ? void 0 : f.textContent;
              var f;
              if (h)
                throw new Error(h);
              return d;
            }, e.serializeXmlString = function(n) {
              return new XMLSerializer().serializeToString(n);
            };
            class m {
              elements(i, y = null) {
                const d = [];
                for (let h = 0, f = i.childNodes.length; h < f; h++) {
                  let g = i.childNodes.item(h);
                  g.nodeType != 1 || y != null && g.localName != y || d.push(g);
                }
                return d;
              }
              element(i, y) {
                for (let d = 0, h = i.childNodes.length; d < h; d++) {
                  let f = i.childNodes.item(d);
                  if (f.nodeType == 1 && f.localName == y)
                    return f;
                }
                return null;
              }
              elementAttr(i, y, d) {
                var h = this.element(i, y);
                return h ? this.attr(h, d) : void 0;
              }
              attrs(i) {
                return Array.from(i.attributes);
              }
              attr(i, y) {
                for (let d = 0, h = i.attributes.length; d < h; d++) {
                  let f = i.attributes.item(d);
                  if (f.localName == y)
                    return f.value;
                }
                return null;
              }
              intAttr(i, y, d = null) {
                var h = this.attr(i, y);
                return h ? parseInt(h) : d;
              }
              hexAttr(i, y, d = null) {
                var h = this.attr(i, y);
                return h ? parseInt(h, 16) : d;
              }
              floatAttr(i, y, d = null) {
                var h = this.attr(i, y);
                return h ? parseFloat(h) : d;
              }
              boolAttr(i, y, d = null) {
                return (0, r.convertBoolean)(this.attr(i, y), d);
              }
              lengthAttr(i, y, d = r.LengthUsage.Dxa) {
                return (0, r.convertLength)(this.attr(i, y), d);
              }
            }
            e.XmlParser = m;
            const p = new m();
            e.default = p;
          }, 287: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.SettingsPart = void 0;
            const r = u(530), m = u(846);
            class p extends r.Part {
              constructor(i, y) {
                super(i, y);
              }
              parseXml(i) {
                this.settings = (0, m.parseSettings)(i, this._package.xmlParser);
              }
            }
            e.SettingsPart = p;
          }, 846: (v, e) => {
            function u(r, m) {
              var p = { defaultNoteIds: [] };
              for (let n of m.elements(r))
                switch (n.localName) {
                  case "numFmt":
                    p.nummeringFormat = m.attr(n, "val");
                    break;
                  case "footnote":
                  case "endnote":
                    p.defaultNoteIds.push(m.attr(n, "id"));
                }
              return p;
            }
            Object.defineProperty(e, "__esModule", { value: true }), e.parseNoteProperties = e.parseSettings = void 0, e.parseSettings = function(r, m) {
              var p = {};
              for (let n of m.elements(r))
                switch (n.localName) {
                  case "defaultTabStop":
                    p.defaultTabStop = m.lengthAttr(n, "val");
                    break;
                  case "footnotePr":
                    p.footnoteProps = u(n, m);
                    break;
                  case "endnotePr":
                    p.endnoteProps = u(n, m);
                    break;
                  case "autoHyphenation":
                    p.autoHyphenation = m.boolAttr(n, "val");
                }
              return p;
            }, e.parseNoteProperties = u;
          }, 240: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.StylesPart = void 0;
            const r = u(530);
            class m extends r.Part {
              constructor(n, i, y) {
                super(n, i), this._documentParser = y;
              }
              parseXml(n) {
                this.styles = this._documentParser.parseStylesFile(n);
              }
            }
            e.StylesPart = m;
          }, 893: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.ThemePart = void 0;
            const r = u(530), m = u(55);
            class p extends r.Part {
              constructor(i, y) {
                super(i, y);
              }
              parseXml(i) {
                this.theme = (0, m.parseTheme)(i, this._package.xmlParser);
              }
            }
            e.ThemePart = p;
          }, 55: (v, e) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseFontInfo = e.parseFontScheme = e.parseColorScheme = e.parseTheme = e.DmlTheme = void 0;
            class u {
            }
            function r(n, i) {
              var y = { name: i.attr(n, "name"), colors: {} };
              for (let f of i.elements(n)) {
                var d = i.element(f, "srgbClr"), h = i.element(f, "sysClr");
                d ? y.colors[f.localName] = i.attr(d, "val") : h && (y.colors[f.localName] = i.attr(h, "lastClr"));
              }
              return y;
            }
            function m(n, i) {
              var y = { name: i.attr(n, "name") };
              for (let d of i.elements(n))
                switch (d.localName) {
                  case "majorFont":
                    y.majorFont = p(d, i);
                    break;
                  case "minorFont":
                    y.minorFont = p(d, i);
                }
              return y;
            }
            function p(n, i) {
              return { latinTypeface: i.elementAttr(n, "latin", "typeface"), eaTypeface: i.elementAttr(n, "ea", "typeface"), csTypeface: i.elementAttr(n, "cs", "typeface") };
            }
            e.DmlTheme = u, e.parseTheme = function(n, i) {
              var y = new u(), d = i.element(n, "themeElements");
              for (let h of i.elements(d))
                switch (h.localName) {
                  case "clrScheme":
                    y.colorScheme = r(h, i);
                    break;
                  case "fontScheme":
                    y.fontScheme = m(h, i);
                }
              return y;
            }, e.parseColorScheme = r, e.parseFontScheme = m, e.parseFontInfo = p;
          }, 593: (v, e) => {
            function u(r) {
              return r && typeof r == "object" && !Array.isArray(r);
            }
            Object.defineProperty(e, "__esModule", { value: true }), e.asArray = e.formatCssRules = e.parseCssRules = e.mergeDeep = e.isString = e.isObject = e.blobToBase64 = e.keyBy = e.resolvePath = e.splitPath = e.escapeClassName = void 0, e.escapeClassName = function(r) {
              return r == null ? void 0 : r.replace(/[ .]+/g, "-").replace(/[&]+/g, "and").toLowerCase();
            }, e.splitPath = function(r) {
              let m = r.lastIndexOf("/") + 1;
              return [m == 0 ? "" : r.substring(0, m), m == 0 ? r : r.substring(m)];
            }, e.resolvePath = function(r, m) {
              try {
                const p = "http://docx/";
                return new URL(r, p + m).toString().substring(p.length);
              } catch (p) {
                return `${m}${r}`;
              }
            }, e.keyBy = function(r, m) {
              return r.reduce((p, n) => (p[m(n)] = n, p), {});
            }, e.blobToBase64 = function(r) {
              return new Promise((m, p) => {
                const n = new FileReader();
                n.onloadend = () => m(n.result), n.onerror = () => p(), n.readAsDataURL(r);
              });
            }, e.isObject = u, e.isString = function(r) {
              return r && typeof r == "string" || r instanceof String;
            }, e.mergeDeep = function r(m, ...p) {
              var n;
              if (!p.length)
                return m;
              const i = p.shift();
              if (u(m) && u(i))
                for (const y in i)
                  u(i[y]) ? r((n = m[y]) !== null && n !== void 0 ? n : m[y] = {}, i[y]) : m[y] = i[y];
              return r(m, ...p);
            }, e.parseCssRules = function(r) {
              const m = {};
              for (const p of r.split(";")) {
                const [n, i] = p.split(":");
                m[n] = i;
              }
              return m;
            }, e.formatCssRules = function(r) {
              return Object.entries(r).map((m, p) => `${m}: ${p}`).join(";");
            }, e.asArray = function(r) {
              return Array.isArray(r) ? r : [r];
            };
          }, 320: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.parseVmlElement = e.VmlElement = void 0;
            const r = u(149), m = u(120), p = u(472);
            class n {
              constructor() {
                this.type = m.DomType.VmlElement, this.attrs = {}, this.chidren = [];
              }
            }
            function i(d) {
              var h;
              return { stroke: p.default.attr(d, "color"), "stroke-width": (h = p.default.lengthAttr(d, "weight", r.LengthUsage.Emu)) !== null && h !== void 0 ? h : "1px" };
            }
            function y(d) {
              return d.split(",");
            }
            e.VmlElement = n, e.parseVmlElement = function d(h) {
              var f = new n();
              switch (h.localName) {
                case "rect":
                  f.tagName = "rect", Object.assign(f.attrs, { width: "100%", height: "100%" });
                  break;
                case "oval":
                  f.tagName = "ellipse", Object.assign(f.attrs, { cx: "50%", cy: "50%", rx: "50%", ry: "50%" });
                  break;
                case "line":
                  f.tagName = "line";
                  break;
                case "shape":
                  f.tagName = "g";
                  break;
                default:
                  return null;
              }
              for (const g of p.default.attrs(h))
                switch (g.localName) {
                  case "style":
                    f.cssStyleText = g.value;
                    break;
                  case "fillcolor":
                    f.attrs.fill = g.value;
                    break;
                  case "from":
                    const [A, C] = y(g.value);
                    Object.assign(f.attrs, { x1: A, y1: C });
                    break;
                  case "to":
                    const [a, o] = y(g.value);
                    Object.assign(f.attrs, { x2: a, y2: o });
                }
              for (const g of p.default.elements(h))
                switch (g.localName) {
                  case "stroke":
                    Object.assign(f.attrs, i(g));
                    break;
                  case "fill":
                    Object.assign(f.attrs, {});
                    break;
                  case "imagedata":
                    f.tagName = "image", Object.assign(f.attrs, { width: "100%", height: "100%" }), f.imageHref = { id: p.default.attr(g, "id"), title: p.default.attr(g, "title") };
                    break;
                  default:
                    const A = d(g);
                    A && f.chidren.push(A);
                }
              return f;
            };
          }, 213: (v, e, u) => {
            Object.defineProperty(e, "__esModule", { value: true }), e.deobfuscate = e.WordDocument = void 0;
            const r = u(461), m = u(380), p = u(522), n = u(448), i = u(593), y = u(527), d = u(240), h = u(985), f = u(665), g = u(162), A = u(893), C = u(735), a = u(287), o = u(177), t = [{ type: r.RelationshipTypes.OfficeDocument, target: "word/document.xml" }, { type: r.RelationshipTypes.ExtendedProperties, target: "docProps/app.xml" }, { type: r.RelationshipTypes.CoreProperties, target: "docProps/core.xml" }, { type: r.RelationshipTypes.CustomProperties, target: "docProps/custom.xml" }];
            class l {
              constructor() {
                this.parts = [], this.partsMap = {};
              }
              static load(D, _, T) {
                return fe(this, null, function* () {
                  var s = new l();
                  return s._options = T, s._parser = _, s._package = yield p.OpenXmlPackage.load(D, T), s.rels = yield s._package.loadRelationships(), yield Promise.all(t.map((R) => {
                    var V;
                    const j = (V = s.rels.find((q) => q.type === R.type)) !== null && V !== void 0 ? V : R;
                    return s.loadRelationshipPart(j.target, j.type);
                  })), s;
                });
              }
              save(D = "blob") {
                return this._package.save(D);
              }
              loadRelationshipPart(D, _) {
                return fe(this, null, function* () {
                  var T;
                  if (this.partsMap[D])
                    return this.partsMap[D];
                  if (!this._package.get(D))
                    return null;
                  let s = null;
                  switch (_) {
                    case r.RelationshipTypes.OfficeDocument:
                      this.documentPart = s = new n.DocumentPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.FontTable:
                      this.fontTablePart = s = new m.FontTablePart(this._package, D);
                      break;
                    case r.RelationshipTypes.Numbering:
                      this.numberingPart = s = new y.NumberingPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.Styles:
                      this.stylesPart = s = new d.StylesPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.Theme:
                      this.themePart = s = new A.ThemePart(this._package, D);
                      break;
                    case r.RelationshipTypes.Footnotes:
                      this.footnotesPart = s = new C.FootnotesPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.Endnotes:
                      this.endnotesPart = s = new C.EndnotesPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.Footer:
                      s = new h.FooterPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.Header:
                      s = new h.HeaderPart(this._package, D, this._parser);
                      break;
                    case r.RelationshipTypes.CoreProperties:
                      this.corePropsPart = s = new g.CorePropsPart(this._package, D);
                      break;
                    case r.RelationshipTypes.ExtendedProperties:
                      this.extendedPropsPart = s = new f.ExtendedPropsPart(this._package, D);
                      break;
                    case r.RelationshipTypes.CustomProperties:
                      s = new o.CustomPropsPart(this._package, D);
                      break;
                    case r.RelationshipTypes.Settings:
                      this.settingsPart = s = new a.SettingsPart(this._package, D);
                  }
                  if (s == null)
                    return Promise.resolve(null);
                  if (this.partsMap[D] = s, this.parts.push(s), yield s.load(), ((T = s.rels) === null || T === void 0 ? void 0 : T.length) > 0) {
                    const [R] = (0, i.splitPath)(s.path);
                    yield Promise.all(s.rels.map((V) => this.loadRelationshipPart((0, i.resolvePath)(V.target, R), V.type)));
                  }
                  return s;
                });
              }
              loadDocumentImage(D, _) {
                return fe(this, null, function* () {
                  const T = yield this.loadResource(_ != null ? _ : this.documentPart, D, "blob");
                  return this.blobToURL(T);
                });
              }
              loadNumberingImage(D) {
                return fe(this, null, function* () {
                  const _ = yield this.loadResource(this.numberingPart, D, "blob");
                  return this.blobToURL(_);
                });
              }
              loadFont(D, _) {
                return fe(this, null, function* () {
                  const T = yield this.loadResource(this.fontTablePart, D, "uint8array");
                  return T && this.blobToURL(new Blob([b(T, _)]));
                });
              }
              blobToURL(D) {
                return D ? this._options.useBase64URL ? (0, i.blobToBase64)(D) : URL.createObjectURL(D) : null;
              }
              findPartByRelId(D, _ = null) {
                var T, s = ((T = _.rels) !== null && T !== void 0 ? T : this.rels).find((V) => V.id == D);
                const R = _ ? (0, i.splitPath)(_.path)[0] : "";
                return s ? this.partsMap[(0, i.resolvePath)(s.target, R)] : null;
              }
              getPathById(D, _) {
                const T = D.rels.find((R) => R.id == _), [s] = (0, i.splitPath)(D.path);
                return T ? (0, i.resolvePath)(T.target, s) : null;
              }
              loadResource(D, _, T) {
                const s = this.getPathById(D, _);
                return s ? this._package.load(s, T) : Promise.resolve(null);
              }
            }
            function b(k, D) {
              const _ = D.replace(/{|}|-/g, ""), T = new Array(16);
              for (let s = 0; s < 16; s++)
                T[16 - s - 1] = parseInt(_.substr(2 * s, 2), 16);
              for (let s = 0; s < 32; s++)
                k[s] = k[s] ^ T[s % 16];
              return k;
            }
            e.WordDocument = l, e.deobfuscate = b;
          }, 583: (v) => {
            v.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E";
          }, 626: (v) => {
            v.exports = P;
          } }, E = {};
          function x(v) {
            var e = E[v];
            if (e !== void 0)
              return e.exports;
            var u = E[v] = { id: v, exports: {} };
            return M[v](u, u.exports, x), u.exports;
          }
          return x.m = M, x.n = (v) => {
            var e = v && v.__esModule ? () => v.default : () => v;
            return x.d(e, { a: e }), e;
          }, x.d = (v, e) => {
            for (var u in e)
              x.o(e, u) && !x.o(v, u) && Object.defineProperty(v, u, { enumerable: true, get: e[u] });
          }, x.o = (v, e) => Object.prototype.hasOwnProperty.call(v, e), x.r = (v) => {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(v, "__esModule", { value: true });
          }, x.b = document.baseURI || self.location.href, x(667);
        })());
      })(Ee);
      const je = { ignoreLastRenderedPageBreak: false };
      function Le(Y, re = {}) {
        return typeof Y == "string" ? Ue(Y, re) : Promise.resolve(Y);
      }
      function Ue(Y, re) {
        return fetch(Y, re).then((P) => P.status !== 200 ? Promise.reject(P) : P);
      }
      function We(Y) {
        return fe(this, null, function* () {
          let re;
          return Y instanceof Blob ? re = Y : Y instanceof Response ? re = yield Y.blob() : Y instanceof ArrayBuffer && (re = new Blob([Y])), re;
        });
      }
      function He(Y, re, P = {}) {
        if (!Y)
          return re.innerHTML = "", Promise.resolve();
        let M;
        return Y instanceof Blob ? M = Y : Y instanceof Response ? M = Y.blob() : Y instanceof ArrayBuffer && (M = new Blob([Y])), xe.renderAsync(M, re, re, Re(Re({}, je), P));
      }
      const we = { getData: Le, render: He, getBlob: We };
      function $e(Y, re) {
        return fe(this, null, function* () {
          re && (re instanceof ArrayBuffer && (re = new Blob([re])), Ze(Y, URL.createObjectURL(re)));
        });
      }
      function Ze(Y, re) {
        let P = document.createElement("a");
        P.download = Y, P.style.display = "none", P.href = re, document.body.appendChild(P), P.click(), document.body.removeChild(P);
      }
      const nt = "", Ve = (Y, re) => {
        const P = Y.__vccOpts || Y;
        for (const [M, E] of re)
          P[M] = E;
        return P;
      }, Xe = le.defineComponent({ name: "VueOfficeDocx", props: { src: [String, ArrayBuffer, Blob], requestOptions: { type: Object, default: () => ({}) }, options: { type: Object, default: () => ({}) } }, emits: ["rendered", "error"], setup(Y, { emit: re }) {
        const P = le.ref(null);
        let M = null;
        function E() {
          let v = P.value;
          we.getData(Y.src, Y.requestOptions).then((e) => fe(this, null, function* () {
            M = yield we.getBlob(e), we.render(M, v, Y.options).then(() => {
              re("rendered");
            }).catch((u) => {
              we.render("", v, Y.options), re("error", u);
            });
          })).catch((e) => {
            we.render("", v, Y.options), re("error", e);
          });
        }
        le.onMounted(() => {
          Y.src && E();
        }), le.watch(() => Y.src, () => {
          Y.src ? E() : we.render("", P.value, Y.options).then(() => {
            re("rendered");
          });
        });
        function x(v) {
          $e(v || `vue-office-docx-${(/* @__PURE__ */ new Date()).getTime()}.docx`, M);
        }
        return { rootRef: P, save: x };
      } }), Ge = { class: "vue-office-docx" }, qe = { class: "vue-office-docx-main", ref: "rootRef" };
      function Ke(Y, re, P, M, E, x) {
        return ce.openBlock(), ce.createElementBlock("div", Ge, [ce.createElementVNode("div", qe, null, 512)]);
      }
      const De = Ve(Xe, [["render", Ke]]);
      return De.install = function(Y) {
        Y.component(De.name, De);
      }, De;
    });
  }
});
export default require_lib2();
/*! Bundled license information:

@vue-office/docx/lib/index.js:
  (*!
  
  	JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  	<http://stuartk.com/jszip>
  
  	(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  	Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  	JSZip uses the library pako released under the MIT license :
  	https://github.com/nodeca/pako/blob/main/LICENSE
  	*)
*/
//# sourceMappingURL=@vue-office_docx.js.map
