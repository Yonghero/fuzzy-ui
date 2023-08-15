import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-WLQVLJR5.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-ROME4SDB.js";

// node_modules/.pnpm/vue-demi@0.14.5_vue@3.3.4/node_modules/vue-demi/lib/index.cjs
var require_lib = __commonJS({
  "node_modules/.pnpm/vue-demi@0.14.5_vue@3.3.4/node_modules/vue-demi/lib/index.cjs"(exports) {
    var Vue = (init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports));
    Object.keys(Vue).forEach(function(key) {
      exports[key] = Vue[key];
    });
    exports.set = function(target, key, val) {
      if (Array.isArray(target)) {
        target.length = Math.max(target.length, key);
        target.splice(key, 1, val);
        return val;
      }
      target[key] = val;
      return val;
    };
    exports.del = function(target, key) {
      if (Array.isArray(target)) {
        target.splice(key, 1);
        return;
      }
      delete target[key];
    };
    exports.Vue = Vue;
    exports.Vue2 = void 0;
    exports.isVue2 = false;
    exports.isVue3 = true;
    exports.install = function() {
    };
  }
});

export {
  require_lib
};
//# sourceMappingURL=chunk-LRR3BTZH.js.map
