import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Fuzzy UI","text":"面向设计师和开发者的组件库","tagline":"基于Vue3 Element-Plus","image":{"src":"/logo.png","alt":"VitePress"},"actions":[{"theme":"brand","text":"使用指南","link":"/guide/install.html"},{"theme":"alt","text":"源码贡献","link":"https://github.com/Yonghero/fuzzy-ui"}]},"features":[{"icon":"☕️","title":"模块化","details":"针对单个组件进行二次封装，支持组件单独发布版本"},{"icon":"🤝","title":"组合式","details":"配合FuzzyNext渐进式框架进行开发，更快，更有效的搭建传统后台管理页面"},{"icon":"🌈","title":"主题配置","details":"现代浏览器运行时css变量联合编译时scss变量，更加灵活，更colorful"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
