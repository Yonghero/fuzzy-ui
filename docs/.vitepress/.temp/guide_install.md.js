import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"安装","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guide/install.md","filePath":"guide/install.md"}');
const _sfc_main = { name: "guide/install.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>Fuzzy UI 基于 Vue3、 Element Plus 再次封装的组件库</p></div><h2 id="环境支持" tabindex="-1">环境支持 <a class="header-anchor" href="#环境支持" aria-label="Permalink to &quot;环境支持&quot;">​</a></h2><p>Fuzzy UI 可以在支持 ES2018 和 ResizeObserver 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill</p><h3 id="版本" tabindex="-1">版本 <a class="header-anchor" href="#版本" aria-label="Permalink to &quot;版本&quot;">​</a></h3><p>Fuzzy UI 目前还处于快速开发迭代中</p><h3 id="使用包管理器" tabindex="-1">使用包管理器 <a class="header-anchor" href="#使用包管理器" aria-label="Permalink to &quot;使用包管理器&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}"># pnpm</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B392F0" })}">$</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">install</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">@hitotek/fuzzy-ui</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> </span><span style="${ssrRenderStyle({ "color": "#9ECBFF" })}">element-plus</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}"># pnpm</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">$</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">pnpm</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">install</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">@hitotek/fuzzy-ui</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> </span><span style="${ssrRenderStyle({ "color": "#032F62" })}">element-plus</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/install.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const install = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  install as default
};
