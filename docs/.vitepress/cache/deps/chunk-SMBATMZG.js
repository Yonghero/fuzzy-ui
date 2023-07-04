// ../node_modules/.pnpm/registry.npmmirror.com+vue-demi@0.14.5_vue@3.3.4/node_modules/vue-demi/lib/index.mjs
var isVue2 = false;
var isVue3 = true;
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}

export {
  isVue2,
  isVue3,
  set
};
//# sourceMappingURL=chunk-SMBATMZG.js.map
