import { defineComponent, mergeProps, useSSRContext, shallowRef, inject, computed, ref, onUnmounted, reactive, markRaw, readonly, nextTick, h, onMounted, unref, onUpdated, resolveComponent, createVNode, resolveDynamicComponent, withCtx, renderSlot, watchEffect, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, watch, Fragment, renderList, provide, toHandlers, withKeys, watchPostEffect, useSlots, resolveDirective, createSlots, withModifiers, isRef, isVNode, createApp as createApp$1, toRaw, withDirectives, vShow, onBeforeMount, Transition, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrGetDirectiveProps, ssrRenderStyle, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import { useMediaQuery, useWindowScroll, useClipboard, useToggle } from "@vueuse/core";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import dayjs, { ElButton, ElInput, ElIcon, ElCard, ElSwitch, ElPopover, ElSelect, ElOption, ElSelectV2, ElMessage, ElTree, ElDivider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { ArrowDown, Lock, User, Delete, Close, Plus, Search, Check, ArrowUp, Edit, ArrowRight, Paperclip, EditPen, Setting, Notification, Camera, MessageBox, ArrowLeft, Upload as Upload$1, UserFilled, WarnTriangleFilled, Position, Monitor, PictureRounded, Sort, MoreFilled, FullScreen } from "@element-plus/icons-vue";
import Sortable from "sortablejs";
const fonts = "";
const vars = "";
const base = "";
const utils = "";
const customBlock = "";
const vpCode = "";
const vpCodeGroup = "";
const vpDoc = "";
const vpSponsor = "";
const _sfc_main$2G = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: {},
    type: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", _ctx.type ?? "tip"]
      }, _attrs))} data-v-f527b058>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(_ctx.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const VPBadge_vue_vue_type_style_index_0_scoped_f527b058_lang = "";
const _sfc_setup$2G = _sfc_main$2G.setup;
_sfc_main$2G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$2G ? _sfc_setup$2G(props, ctx) : void 0;
};
const VPBadge = /* @__PURE__ */ _export_sfc(_sfc_main$2G, [["__scopeId", "data-v-f527b058"]]);
function deserializeFunctions(value) {
  if (Array.isArray(value)) {
    return value.map(deserializeFunctions);
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = deserializeFunctions(value[key]);
      return acc;
    }, {});
  } else if (typeof value === "string" && value.startsWith("_vp-fn_")) {
    return new Function(`return ${value.slice(7)}`)();
  } else {
    return value;
  }
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"en-US","dir":"ltr","title":"Fuzzy UI","description":"A VitePress site","base":"/fuzzy-ui/","head":[],"appearance":true,"themeConfig":{"logo":"/logo.png","nav":[{"text":"指南","link":"/guide/install"},{"text":"组件","link":"/components/button"}],"socialLinks":[{"icon":"github","link":"https://github.com/Yonghero/fuzzy-ui"}],"sidebar":{"/guide/":[{"text":"","collapsed":true,"items":[{"text":"安装","link":"/guide/install"},{"text":"快速开始","link":"/guide/starter"},{"text":"主题","link":"/guide/advance"}]}],"/components/":[{"text":"Basic 基础组件","collapsed":true,"items":[{"text":"Button 按钮","link":"/components/button"},{"text":"Cascader 级联选择器","link":"/components/cascader"},{"text":"DatePicker 日期选择器","link":"/components/date-picker"},{"text":"Empty 空状态","link":"/components/empty"},{"text":"Progress 进度条","link":"/components/progress"},{"text":"Input 输入框","link":"/components/input"},{"text":"Select 选择框","link":"/components/select"},{"text":"Switch 状态切换栏","link":"/components/switch"},{"text":"Loading 效果","link":"/components/loading"},{"text":"Skeleton 骨架屏","link":"/components/skeleton"}]},{"text":"Assembly 组合组件","collapsed":true,"items":[{"text":"FilterPanel 查询面板","link":"/components/filter-panel"},{"text":"FilterInline 内联表单查询","link":"/components/filter-inline"},{"text":"FilterDisplay 下拉标签式查询","link":"/components/filter-display"},{"text":"ActionPanel 动作面板","link":"/components/action-panel"},{"text":"Dialog 对话框","link":"/components/dialog"},{"text":"Form 表单","link":"/components/form"},{"text":"Tree 树级组件","link":"/components/tree"},{"text":"Upload 组件","link":"/components/upload"},{"text":"Table 表格","link":"/components/table"},{"text":"Pagination 分页","link":"/components/pagination"},{"text":"Menu & Tab","link":"/components/menu"},{"text":"TopNavigation 顶部导航栏","link":"/components/top-navigation"},{"text":"Navigation 侧边导航栏","link":"/components/navigation"},{"text":"MemberSelect 成员选择","link":"/components/member-select"}]},{"text":"Custom 定制化组件","collapsed":true,"items":[{"text":"MapCoordSelection 地图坐标选择","link":"/components/map-coordselection"},{"text":"VideoPlayer 视频播放器","link":"/components/video-player"},{"text":"FilePreview 文件预览","link":"/components/file-preview"}]}]}},"locales":{},"scrollOffset":90,"cleanUrls":false}'));
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const PATHNAME_PROTOCOL_RE = /^pathname:\/\//;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize$1(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize$1(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize$1(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    }),
    isDark: ref(false)
  };
}
function useData$1() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || path.startsWith(".") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base2 = "/fuzzy-ui/";
      pagePath = sanitizeFileName(pagePath.slice(base2.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base2}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const url = new URL(href, fakeHost);
    if (!siteDataRef.value.cleanUrls) {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    if (inBrowser && href !== location.href) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link2 = e.target.closest("a");
      if (link2 && !link2.closest(".vp-raw") && (link2 instanceof SVGElement || !link2.download)) {
        const { target } = link2;
        const { href, origin, pathname, hash, search } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !target && origin === currentUrl.origin && // don't intercept if non-html extension is present
        !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash) {
              if (hash !== currentUrl.hash) {
                history.pushState(null, "", hash);
                window.dispatchEvent(new Event("hashchange"));
              }
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
        window.scrollTo(0, targetTop);
      } else {
        window.scrollTo({
          left: 0,
          top: targetTop,
          behavior: "smooth"
        });
      }
    };
    const scrollOffset = siteDataRef.value.scrollOffset;
    let offset = 0;
    if (typeof scrollOffset === "number") {
      offset = scrollOffset;
    } else if (typeof scrollOffset === "string") {
      offset = tryOffsetSelector(scrollOffset);
    } else if (Array.isArray(scrollOffset)) {
      for (const selector of scrollOffset) {
        const res = tryOffsetSelector(selector);
        if (res) {
          offset = res;
          break;
        }
      }
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function tryOffsetSelector(selector) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + 24;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    return () => h(props.as, { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
const _sfc_main$2F = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-75ff8c45></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPBackdrop_vue_vue_type_style_index_0_scoped_75ff8c45_lang = "";
const _sfc_setup$2F = _sfc_main$2F.setup;
_sfc_main$2F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$2F ? _sfc_setup$2F(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$2F, [["__scopeId", "data-v-75ff8c45"]]);
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeoutId = setTimeout(fn, delay);
    }
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  if (isExternal(url)) {
    return url.replace(PATHNAME_PROTOCOL_RE, "");
  }
  const { site } = useData();
  const { pathname, search, hash } = new URL(url, "http://a.com");
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function useLangs({ removeCurrent = true, correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2 } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => removeCurrent && currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls)
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)?index.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const _sfc_main$2E = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    const { localeLinks } = useLangs({ removeCurrent: false });
    const root = ref("/");
    onMounted(() => {
      var _a;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      if (localeLinks.value.length) {
        root.value = ((_a = localeLinks.value.find(({ link: link2 }) => link2.startsWith(path))) == null ? void 0 : _a.link) || localeLinks.value[0].link;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-e9ba6864><p class="code" data-v-e9ba6864>404</p><h1 class="title" data-v-e9ba6864>PAGE NOT FOUND</h1><div class="divider" data-v-e9ba6864></div><blockquote class="quote" data-v-e9ba6864> But if you don&#39;t change your direction, and if you keep looking, you may end up where you are heading. </blockquote><div class="action" data-v-e9ba6864><a class="link"${ssrRenderAttr("href", unref(withBase)(root.value))} aria-label="go to home" data-v-e9ba6864> Take me home </a></div></div>`);
    };
  }
});
const NotFound_vue_vue_type_style_index_0_scoped_e9ba6864_lang = "";
const _sfc_setup$2E = _sfc_main$2E.setup;
_sfc_main$2E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$2E ? _sfc_setup$2E(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$2E, [["__scopeId", "data-v-e9ba6864"]]);
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const PAGE_OFFSET = 71;
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h2) => h2.level >= high && h2.level <= low);
  const ret = [];
  outer:
    for (let i = 0; i < headers.length; i++) {
      const cur = headers[i];
      if (i === 0) {
        ret.push(cur);
      } else {
        for (let j = i - 1; j >= 0; j--) {
          const prev = headers[j];
          if (prev.level < cur.level) {
            (prev.children || (prev.children = [])).push(cur);
            continue outer;
          }
        }
        ret.push(cur);
      }
    }
  return ret;
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => {
      return links.some((link2) => {
        return link2.hash === anchor.hash && anchor.offsetParent !== null;
      });
    });
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        activateLink(hash);
        return;
      }
    }
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash !== null) {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 33 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - PAGE_OFFSET;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
const _sfc_main$2D = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: _ctx.root ? "root" : "nested"
      }, _attrs))} data-v-2b828e5e><!--[-->`);
      ssrRenderList(_ctx.headers, ({ children, link: link2, title }) => {
        _push(`<li data-v-2b828e5e><a class="outline-link"${ssrRenderAttr("href", link2)}${ssrRenderAttr("title", title)} data-v-2b828e5e>${ssrInterpolate(title)}</a>`);
        if (children == null ? void 0 : children.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const VPDocOutlineItem_vue_vue_type_style_index_0_scoped_2b828e5e_lang = "";
const _sfc_setup$2D = _sfc_main$2D.setup;
_sfc_main$2D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$2D ? _sfc_setup$2D(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$2D, [["__scopeId", "data-v-2b828e5e"]]);
const _sfc_main$2C = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-71ed9c20><div class="content" data-v-71ed9c20><div class="outline-marker" data-v-71ed9c20></div><div class="outline-title" data-v-71ed9c20>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</div><nav aria-labelledby="doc-outline-aria-label" data-v-71ed9c20><span class="visually-hidden" id="doc-outline-aria-label" data-v-71ed9c20> Table of Contents for current page </span>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: headers.value,
        root: true
      }, null, _parent));
      _push(`</nav></div></div>`);
    };
  }
});
const VPDocAsideOutline_vue_vue_type_style_index_0_scoped_71ed9c20_lang = "";
const _sfc_setup$2C = _sfc_main$2C.setup;
_sfc_main$2C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$2C ? _sfc_setup$2C(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$2C, [["__scopeId", "data-v-71ed9c20"]]);
const _sfc_main$2B = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2B = _sfc_main$2B.setup;
_sfc_main$2B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$2B ? _sfc_setup$2B(props, ctx) : void 0;
};
const _sfc_main$2A = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-4b5b493a>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-4b5b493a></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$2B, {
          "carbon-ads": unref(theme2).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDocAside_vue_vue_type_style_index_0_scoped_4b5b493a_lang = "";
const _sfc_setup$2A = _sfc_main$2A.setup;
_sfc_main$2A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$2A ? _sfc_setup$2A(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$2A, [["__scopeId", "data-v-4b5b493a"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  if (sidebar == null) {
    return [];
  }
  path = ensureStartingSlash(path);
  const dir = Object.keys(sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  return dir ? sidebar[dir] : [];
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index2 in sidebar) {
    const item = sidebar[index2];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({ text: item.text, link: item.link });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e, _f;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index2 = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    const hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index2 - 1]) == null ? void 0 : _c.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_d = candidates[index2 - 1]) == null ? void 0 : _d.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_e = candidates[index2 + 1]) == null ? void 0 : _e.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_f = candidates[index2 + 1]) == null ? void 0 : _f.link)
      }
    };
  });
}
const _sfc_main$2z = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>`);
}
const _sfc_setup$2z = _sfc_main$2z.setup;
_sfc_main$2z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue");
  return _sfc_setup$2z ? _sfc_setup$2z(props, ctx) : void 0;
};
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$2z, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$2y = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? props.href ? "a" : "span");
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        class: ["VPLink", { link: _ctx.href, "vp-external-link-icon": isExternal2.value && !_ctx.noIcon }],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: _ctx.target || (isExternal2.value ? "_blank" : void 0),
        rel: _ctx.rel || (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$2y = _sfc_main$2y.setup;
_sfc_main$2y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$2y ? _sfc_setup$2y(props, ctx) : void 0;
};
const _sfc_main$2x = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page } = useData();
    const date = computed(() => new Date(page.value.lastUpdated));
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a;
        datetime.value = new Intl.DateTimeFormat(
          void 0,
          ((_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-33db2705>${ssrInterpolate(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", isoDatetime.value)} data-v-33db2705>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const VPDocFooterLastUpdated_vue_vue_type_style_index_0_scoped_33db2705_lang = "";
const _sfc_setup$2x = _sfc_main$2x.setup;
_sfc_main$2x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$2x ? _sfc_setup$2x(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$2x, [["__scopeId", "data-v-33db2705"]]);
const _sfc_main$2w = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(() => {
      return theme2.value.editLink && frontmatter.value.editLink !== false;
    });
    const hasLastUpdated = computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    const showFooter = computed(() => {
      return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (showFooter.value) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-c911532e>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (hasEditLink.value || hasLastUpdated.value) {
          _push(`<div class="edit-info" data-v-c911532e>`);
          if (hasEditLink.value) {
            _push(`<div class="edit-link" data-v-c911532e>`);
            _push(ssrRenderComponent(_sfc_main$2y, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VPIconEdit, {
                    class: "edit-link-icon",
                    "aria-label": "edit icon"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode(VPIconEdit, {
                      class: "edit-link-icon",
                      "aria-label": "edit icon"
                    }),
                    createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasLastUpdated.value) {
            _push(`<div class="last-updated" data-v-c911532e>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link)) {
          _push(`<div class="prev-next" data-v-c911532e><div class="pager" data-v-c911532e>`);
          if ((_c = unref(control).prev) == null ? void 0 : _c.link) {
            _push(`<a class="pager-link prev"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(control).prev.link))} data-v-c911532e><span class="desc" data-v-c911532e>${((_d = unref(theme2).docFooter) == null ? void 0 : _d.prev) || "Previous page"}</span><span class="title" data-v-c911532e>${unref(control).prev.text}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="${ssrRenderClass([{ "has-prev": (_e = unref(control).prev) == null ? void 0 : _e.link }, "pager"])}" data-v-c911532e>`);
          if ((_f = unref(control).next) == null ? void 0 : _f.link) {
            _push(`<a class="pager-link next"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(control).next.link))} data-v-c911532e><span class="desc" data-v-c911532e>${((_g = unref(theme2).docFooter) == null ? void 0 : _g.next) || "Next page"}</span><span class="title" data-v-c911532e>${unref(control).next.text}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocFooter_vue_vue_type_style_index_0_scoped_c911532e_lang = "";
const _sfc_setup$2w = _sfc_main$2w.setup;
_sfc_main$2w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$2w ? _sfc_setup$2w(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2w, [["__scopeId", "data-v-c911532e"]]);
const _sfc_main$2v = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>`);
}
const _sfc_setup$2v = _sfc_main$2v.setup;
_sfc_main$2v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronRight.vue");
  return _sfc_setup$2v ? _sfc_setup$2v(props, ctx) : void 0;
};
const VPIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$2v, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$2u = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const open = ref(false);
    onContentUpdated(() => {
      open.value = false;
    });
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(
        frontmatter.value.outline ?? theme2.value.outline
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (headers.value.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocOutlineDropdown" }, _attrs))} data-v-22a55c13><button class="${ssrRenderClass({ open: open.value })}" data-v-22a55c13>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
        if (open.value) {
          _push(`<div class="items" data-v-22a55c13>`);
          _push(ssrRenderComponent(VPDocOutlineItem, { headers: headers.value }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocOutlineDropdown_vue_vue_type_style_index_0_scoped_22a55c13_lang = "";
const _sfc_setup$2u = _sfc_main$2u.setup;
_sfc_main$2u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineDropdown.vue");
  return _sfc_setup$2u ? _sfc_setup$2u(props, ctx) : void 0;
};
const VPDocOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$2u, [["__scopeId", "data-v-22a55c13"]]);
const _sfc_main$2t = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-a56a7e2d>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-a56a7e2d>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{ "left-aside": unref(leftAside) }, "aside"])}" data-v-a56a7e2d><div class="aside-curtain" data-v-a56a7e2d></div><div class="aside-container" data-v-a56a7e2d><div class="aside-content" data-v-a56a7e2d>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-a56a7e2d><div class="content-container" data-v-a56a7e2d>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocOutlineDropdown, null, null, _parent));
      _push(`<main class="main" data-v-a56a7e2d>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", [
          pageName.value,
          unref(theme2).externalLinkIcon && "external-link-icon-enabled"
        ]]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDoc_vue_vue_type_style_index_0_scoped_a56a7e2d_lang = "";
const _sfc_setup$2t = _sfc_main$2t.setup;
_sfc_main$2t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$2t ? _sfc_setup$2t(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$2t, [["__scopeId", "data-v-a56a7e2d"]]);
const _sfc_main$2s = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: {},
    size: {},
    theme: {},
    text: {},
    href: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      props.size ?? "medium",
      props.theme ?? "brand"
    ]);
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    const component = computed(() => {
      if (props.tag) {
        return props.tag;
      }
      return props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
        class: ["VPButton", classes.value],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: isExternal2.value ? "_blank" : void 0,
        rel: isExternal2.value ? "noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPButton_vue_vue_type_style_index_0_scoped_ab2e5c8c_lang = "";
const _sfc_setup$2s = _sfc_main$2s.setup;
_sfc_main$2s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$2s ? _sfc_setup$2s(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$2s, [["__scopeId", "data-v-ab2e5c8c"]]);
const __default__$6 = {
  inheritAttrs: false
};
const _sfc_main$2r = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (_ctx.image) {
        _push(`<!--[-->`);
        if (typeof _ctx.image === "string" || "src" in _ctx.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof _ctx.image === "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
            alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
          }))} data-v-663cf647>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPImage_vue_vue_type_style_index_0_scoped_663cf647_lang = "";
const _sfc_setup$2r = _sfc_main$2r.setup;
_sfc_main$2r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$2r ? _sfc_setup$2r(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$2r, [["__scopeId", "data-v-663cf647"]]);
const _sfc_main$2q = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": _ctx.image || unref(heroImageSlotExists) }]
      }, _attrs))} data-v-38297145><div class="container" data-v-38297145><div class="main" data-v-38297145>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        if (_ctx.name) {
          _push(`<h1 class="name" data-v-38297145><span class="clip" data-v-38297145>${ssrInterpolate(_ctx.name)}</span></h1>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(`<p class="text" data-v-38297145>${ssrInterpolate(_ctx.text)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.tagline) {
          _push(`<p class="tagline" data-v-38297145>${ssrInterpolate(_ctx.tagline)}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      if (_ctx.actions) {
        _push(`<div class="actions" data-v-38297145><!--[-->`);
        ssrRenderList(_ctx.actions, (action) => {
          _push(`<div class="action" data-v-38297145>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-38297145><div class="image-container" data-v-38297145><div class="image-bg" data-v-38297145></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (_ctx.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: _ctx.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const VPHero_vue_vue_type_style_index_0_scoped_38297145_lang = "";
const _sfc_setup$2q = _sfc_main$2q.setup;
_sfc_main$2q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$2q ? _sfc_setup$2q(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$2q, [["__scopeId", "data-v-38297145"]]);
const _sfc_main$2p = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info")
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2p = _sfc_main$2p.setup;
_sfc_main$2p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$2p ? _sfc_setup$2p(props, ctx) : void 0;
};
const _sfc_main$2o = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"></path></svg>`);
}
const _sfc_setup$2o = _sfc_main$2o.setup;
_sfc_main$2o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconArrowRight.vue");
  return _sfc_setup$2o ? _sfc_setup$2o(props, ctx) : void 0;
};
const VPIconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$2o, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$2n = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2y, mergeProps({
        class: "VPFeature",
        href: _ctx.link,
        "no-icon": true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-5070e04f${_scopeId}>`);
            if (typeof _ctx.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height,
                width: _ctx.icon.width
              }, null, _parent2, _scopeId));
            } else if (_ctx.icon) {
              _push2(`<div class="icon" data-v-5070e04f${_scopeId}>${_ctx.icon}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-5070e04f${_scopeId}>${_ctx.title}</h2>`);
            if (_ctx.details) {
              _push2(`<p class="details" data-v-5070e04f${_scopeId}>${_ctx.details}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.linkText) {
              _push2(`<div class="link-text" data-v-5070e04f${_scopeId}><p class="link-text-value" data-v-5070e04f${_scopeId}>${ssrInterpolate(_ctx.linkText)} `);
              _push2(ssrRenderComponent(VPIconArrowRight, { class: "link-text-icon" }, null, _parent2, _scopeId));
              _push2(`</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", { class: "box" }, [
                typeof _ctx.icon === "object" ? (openBlock(), createBlock(VPImage, {
                  key: 0,
                  image: _ctx.icon,
                  alt: _ctx.icon.alt,
                  height: _ctx.icon.height,
                  width: _ctx.icon.width
                }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "icon",
                  innerHTML: _ctx.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("h2", {
                  class: "title",
                  innerHTML: _ctx.title
                }, null, 8, ["innerHTML"]),
                _ctx.details ? (openBlock(), createBlock("p", {
                  key: 2,
                  class: "details",
                  innerHTML: _ctx.details
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                _ctx.linkText ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "link-text"
                }, [
                  createVNode("p", { class: "link-text-value" }, [
                    createTextVNode(toDisplayString(_ctx.linkText) + " ", 1),
                    createVNode(VPIconArrowRight, { class: "link-text-icon" })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPFeature_vue_vue_type_style_index_0_scoped_5070e04f_lang = "";
const _sfc_setup$2n = _sfc_main$2n.setup;
_sfc_main$2n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$2n ? _sfc_setup$2n(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$2n, [["__scopeId", "data-v-5070e04f"]]);
const _sfc_main$2m = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-1c462e44><div class="container" data-v-1c462e44><div class="items" data-v-1c462e44><!--[-->`);
        ssrRenderList(_ctx.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[grid.value], "item"])}" data-v-1c462e44>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFeatures_vue_vue_type_style_index_0_scoped_1c462e44_lang = "";
const _sfc_setup$2m = _sfc_main$2m.setup;
_sfc_main$2m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$2m ? _sfc_setup$2m(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$2m, [["__scopeId", "data-v-1c462e44"]]);
const _sfc_main$2l = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2l = _sfc_main$2l.setup;
_sfc_main$2l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$2l ? _sfc_setup$2l(props, ctx) : void 0;
};
const _sfc_main$2k = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPHome" }, _attrs))} data-v-1c1ea379>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$2p, null, {
        "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$2l, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const VPHome_vue_vue_type_style_index_0_scoped_1c1ea379_lang = "";
const _sfc_setup$2k = _sfc_main$2k.setup;
_sfc_main$2k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$2k ? _sfc_setup$2k(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$2k, [["__scopeId", "data-v-1c1ea379"]]);
const _sfc_main$2j = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2j = _sfc_main$2j.setup;
_sfc_main$2j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$2j ? _sfc_setup$2j(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$2j, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$2i = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-92d79318>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const VPContent_vue_vue_type_style_index_0_scoped_92d79318_lang = "";
const _sfc_setup$2i = _sfc_main$2i.setup;
_sfc_main$2i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$2i ? _sfc_setup$2i(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$2i, [["__scopeId", "data-v-92d79318"]]);
const _sfc_main$2h = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-fd3f54df><div class="container" data-v-fd3f54df>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-fd3f54df>${unref(theme2).footer.message}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-fd3f54df>${unref(theme2).footer.copyright}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFooter_vue_vue_type_style_index_0_scoped_fd3f54df_lang = "";
const _sfc_setup$2h = _sfc_main$2h.setup;
_sfc_main$2h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$2h ? _sfc_setup$2h(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2h, [["__scopeId", "data-v-fd3f54df"]]);
const _sfc_main$2g = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  props: {
    headers: {}
  },
  setup(__props) {
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    ref();
    onContentUpdated(() => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: { "--vp-vh": vh.value + "px" }
      }, _attrs))} data-v-642b958c>`);
      if (_ctx.headers.length > 0) {
        _push(`<button class="${ssrRenderClass({ open: open.value })}" data-v-642b958c>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<button data-v-642b958c>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-642b958c><a class="top-link" href="#" data-v-642b958c>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</a>`);
        _push(ssrRenderComponent(VPDocOutlineItem, { headers: _ctx.headers }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const VPLocalNavOutlineDropdown_vue_vue_type_style_index_0_scoped_642b958c_lang = "";
const _sfc_setup$2g = _sfc_main$2g.setup;
_sfc_main$2g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$2g ? _sfc_setup$2g(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$2g, [["__scopeId", "data-v-642b958c"]]);
const _sfc_main$2f = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$2f = _sfc_main$2f.setup;
_sfc_main$2f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconAlignLeft.vue");
  return _sfc_setup$2f ? _sfc_setup$2f(props, ctx) : void 0;
};
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$2f, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$2e = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { y } = useWindowScroll();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0 && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        fixed: empty.value,
        "reached-top": y.value >= 64
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(frontmatter).layout !== "home" && (!empty.value || unref(y) >= 64)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: classes.value }, _attrs))} data-v-342865cb>`);
        if (unref(hasSidebar)) {
          _push(`<button class="menu"${ssrRenderAttr("aria-expanded", _ctx.open)} aria-controls="VPSidebarNav" data-v-342865cb>`);
          _push(ssrRenderComponent(VPIconAlignLeft, { class: "menu-icon" }, null, _parent));
          _push(`<span class="menu-text" data-v-342865cb>${ssrInterpolate(unref(theme2).sidebarMenuLabel || "Menu")}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, { headers: headers.value }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPLocalNav_vue_vue_type_style_index_0_scoped_342865cb_lang = "";
const _sfc_setup$2e = _sfc_main$2e.setup;
_sfc_main$2e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$2e ? _sfc_setup$2e(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$2e, [["__scopeId", "data-v-342865cb"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const VPSwitch_vue_vue_type_style_index_0_scoped_406df613_lang = "";
const _sfc_main$2d = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-406df613><span class="check" data-v-406df613>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-406df613>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$2d = _sfc_main$2d.setup;
_sfc_main$2d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$2d ? _sfc_setup$2d(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$2d, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-406df613"]]);
const _sfc_main$2c = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$2c = _sfc_main$2c.setup;
_sfc_main$2c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconSun.vue");
  return _sfc_setup$2c ? _sfc_setup$2c(props, ctx) : void 0;
};
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$2c, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$2b = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$2b = _sfc_main$2b.setup;
_sfc_main$2b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue");
  return _sfc_setup$2b ? _sfc_setup$2b(props, ctx) : void 0;
};
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$2b, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$2a = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, isDark } = useData();
    const checked = ref(false);
    const toggle = inBrowser ? useAppearance() : () => {
    };
    onMounted(() => {
      checked.value = document.documentElement.classList.contains("dark");
    });
    function useAppearance() {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      const classList = document.documentElement.classList;
      let userPreference = localStorage.getItem(APPEARANCE_KEY);
      let isDark2 = site.value.appearance === "dark" && userPreference == null || (userPreference === "auto" || userPreference == null ? query.matches : userPreference === "dark");
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark2 = e.matches);
        }
      };
      function toggle2() {
        setClass(isDark2 = !isDark2);
        userPreference = isDark2 ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto";
        localStorage.setItem(APPEARANCE_KEY, userPreference);
      }
      function setClass(dark) {
        const css = document.createElement("style");
        css.type = "text/css";
        css.appendChild(
          document.createTextNode(
            `:not(.VPSwitchAppearance):not(.VPSwitchAppearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`
          )
        );
        document.head.appendChild(css);
        checked.value = dark;
        classList[dark ? "add" : "remove"]("dark");
        window.getComputedStyle(css).opacity;
        document.head.removeChild(css);
      }
      return toggle2;
    }
    watch(checked, (newIsDark) => {
      isDark.value = newIsDark;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        title: "toggle dark mode",
        class: "VPSwitchAppearance",
        "aria-checked": checked.value,
        onClick: unref(toggle)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VPIconSun, { class: "sun" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VPIconMoon, { class: "moon" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VPIconSun, { class: "sun" }),
              createVNode(VPIconMoon, { class: "moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPSwitchAppearance_vue_vue_type_style_index_0_scoped_1542cc5b_lang = "";
const _sfc_setup$2a = _sfc_main$2a.setup;
_sfc_main$2a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$2a ? _sfc_setup$2a(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$2a, [["__scopeId", "data-v-1542cc5b"]]);
const _sfc_main$29 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-926f6908>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarAppearance_vue_vue_type_style_index_0_scoped_926f6908_lang = "";
const _sfc_setup$29 = _sfc_main$29.setup;
_sfc_main$29.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$29 ? _sfc_setup$29(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$29, [["__scopeId", "data-v-926f6908"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$28 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$28 = _sfc_main$28.setup;
_sfc_main$28.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue");
  return _sfc_setup$28 ? _sfc_setup$28(props, ctx) : void 0;
};
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$28, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$27 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$27 = _sfc_main$27.setup;
_sfc_main$27.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoreHorizontal.vue");
  return _sfc_setup$27 ? _sfc_setup$27(props, ctx) : void 0;
};
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$27, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$26 = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-709dea98>`);
      _push(ssrRenderComponent(_sfc_main$2y, {
        class: { active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch || _ctx.item.link, !!_ctx.item.activeMatch) },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const VPMenuLink_vue_vue_type_style_index_0_scoped_709dea98_lang = "";
const _sfc_setup$26 = _sfc_main$26.setup;
_sfc_main$26.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$26 ? _sfc_setup$26(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$26, [["__scopeId", "data-v-709dea98"]]);
const _sfc_main$25 = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-8e00ae4f>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-8e00ae4f>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPMenuGroup_vue_vue_type_style_index_0_scoped_8e00ae4f_lang = "";
const _sfc_setup$25 = _sfc_main$25.setup;
_sfc_main$25.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$25, [["__scopeId", "data-v-8e00ae4f"]]);
const _sfc_main$24 = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-c24a2ae7>`);
      if (_ctx.items) {
        _push(`<div class="items" data-v-c24a2ae7><!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPMenu_vue_vue_type_style_index_0_scoped_c24a2ae7_lang = "";
const _sfc_setup$24 = _sfc_main$24.setup;
_sfc_main$24.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$24, [["__scopeId", "data-v-c24a2ae7"]]);
const _sfc_main$23 = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-589c0bb3><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", _ctx.label)} data-v-589c0bb3>`);
      if (_ctx.button || _ctx.icon) {
        _push(`<span class="text" data-v-589c0bb3>`);
        if (_ctx.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.icon), { class: "option-icon" }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(_ctx.button)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(ssrRenderComponent(VPIconMoreHorizontal, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="menu" data-v-589c0bb3>`);
      _push(ssrRenderComponent(VPMenu, { items: _ctx.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const VPFlyout_vue_vue_type_style_index_0_scoped_589c0bb3_lang = "";
const _sfc_setup$23 = _sfc_main$23.setup;
_sfc_main$23.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$23, [["__scopeId", "data-v-589c0bb3"]]);
const icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mastodon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
};
const _sfc_main$22 = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return icons[props.icon];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "VPSocialLink",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-a767da16>${svg.value}</a>`);
    };
  }
});
const VPSocialLink_vue_vue_type_style_index_0_scoped_a767da16_lang = "";
const _sfc_setup$22 = _sfc_main$22.setup;
_sfc_main$22.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$22, [["__scopeId", "data-v-a767da16"]]);
const _sfc_main$21 = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-38d75d32><!--[-->`);
      ssrRenderList(_ctx.links, ({ link: link2, icon, ariaLabel }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2,
          ariaLabel
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPSocialLinks_vue_vue_type_style_index_0_scoped_38d75d32_lang = "";
const _sfc_setup$21 = _sfc_main$21.setup;
_sfc_main$21.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$21, [["__scopeId", "data-v-38d75d32"]]);
const _sfc_main$20 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (hasExtraContent.value) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-eed89f16${_scopeId}><p class="trans-title" data-v-eed89f16${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), (locale) => {
                  _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance) {
                _push2(`<div class="group" data-v-eed89f16${_scopeId}><div class="item appearance" data-v-eed89f16${_scopeId}><p class="label" data-v-eed89f16${_scopeId}>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-eed89f16${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-eed89f16${_scopeId}><div class="item social-links" data-v-eed89f16${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group translations"
                }, [
                  createVNode("p", { class: "trans-title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                unref(site).appearance ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  createVNode("div", { class: "item appearance" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
                    createVNode("div", { class: "appearance-action" }, [
                      createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  createVNode("div", { class: "item social-links" }, [
                    createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarExtra_vue_vue_type_style_index_0_scoped_eed89f16_lang = "";
const _sfc_setup$20 = _sfc_main$20.setup;
_sfc_main$20.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$20, [["__scopeId", "data-v-eed89f16"]]);
const _sfc_main$1$ = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: _ctx.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-c320dac0><span class="container" data-v-c320dac0><span class="top" data-v-c320dac0></span><span class="middle" data-v-c320dac0></span><span class="bottom" data-v-c320dac0></span></span></button>`);
    };
  }
});
const VPNavBarHamburger_vue_vue_type_style_index_0_scoped_c320dac0_lang = "";
const _sfc_setup$1$ = _sfc_main$1$.setup;
_sfc_main$1$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$1$ ? _sfc_setup$1$(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$1$, [["__scopeId", "data-v-c320dac0"]]);
const _sfc_main$1_ = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2y, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_5d698c3f_lang = "";
const _sfc_setup$1_ = _sfc_main$1_.setup;
_sfc_main$1_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$1_ ? _sfc_setup$1_(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1_, [["__scopeId", "data-v-5d698c3f"]]);
const _sfc_main$1Z = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch,
            !!_ctx.item.activeMatch
          )
        },
        button: _ctx.item.text,
        items: _ctx.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1Z = _sfc_main$1Z.setup;
_sfc_main$1Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$1Z ? _sfc_setup$1Z(props, ctx) : void 0;
};
const _sfc_main$1Y = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-b035bb98><span id="main-nav-aria-label" class="visually-hidden" data-v-b035bb98>Main Navigation</span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$1Z, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarMenu_vue_vue_type_style_index_0_scoped_b035bb98_lang = "";
const _sfc_setup$1Y = _sfc_main$1Y.setup;
_sfc_main$1Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$1Y ? _sfc_setup$1Y(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1Y, [["__scopeId", "data-v-b035bb98"]]);
const style = "";
const _sfc_main$1X = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  __ssrInlineRender: true,
  props: {
    placeholder: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": "Search"
      }, _attrs))}><span class="DocSearch-Button-Container"><svg class="DocSearch-Search-Icon" width="20" height="20" viewBox="0 0 20 20" aria-label="search icon"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${ssrInterpolate(_ctx.placeholder)}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`);
    };
  }
});
const VPNavBarSearchButton_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1X = _sfc_main$1X.setup;
_sfc_main$1X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue");
  return _sfc_setup$1X ? _sfc_setup$1X(props, ctx) : void 0;
};
const _sfc_main$1W = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPLocalSearchBox = () => null;
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2, localeIndex } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    const buttonText = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g;
      const options = ((_a = theme2.value.search) == null ? void 0 : _a.options) ?? theme2.value.algolia;
      return ((_e = (_d = (_c = (_b = options == null ? void 0 : options.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) == null ? void 0 : _d.button) == null ? void 0 : _e.buttonText) || ((_g = (_f = options == null ? void 0 : options.translations) == null ? void 0 : _f.button) == null ? void 0 : _g.buttonText) || "Search";
    });
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    const showSearch = ref(false);
    const metaKey = ref(`'Meta'`);
    onMounted(() => {
      metaKey.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? `'⌘'` : `'Ctrl'`;
    });
    const provider = "";
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPNavBarSearch",
        style: { "--vp-meta-key": metaKey.value }
      }, _attrs))}>`);
      if (unref(provider) === "local") {
        _push(`<!--[-->`);
        if (showSearch.value) {
          _push(ssrRenderComponent(unref(VPLocalSearchBox), {
            placeholder: buttonText.value,
            onClose: ($event) => showSearch.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="local-search">`);
        _push(ssrRenderComponent(_sfc_main$1X, {
          placeholder: buttonText.value,
          onClick: ($event) => showSearch.value = true
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else if (unref(provider) === "algolia") {
        _push(`<!--[-->`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: ((_a = unref(theme2).search) == null ? void 0 : _a.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: ($event) => actuallyLoaded.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!actuallyLoaded.value) {
          _push(`<div id="docsearch">`);
          _push(ssrRenderComponent(_sfc_main$1X, {
            placeholder: buttonText.value,
            onClick: load
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1W = _sfc_main$1W.setup;
_sfc_main$1W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$1W ? _sfc_setup$1W(props, ctx) : void 0;
};
const _sfc_main$1V = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_4efa63aa_lang = "";
const _sfc_setup$1V = _sfc_main$1V.setup;
_sfc_main$1V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$1V ? _sfc_setup$1V(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1V, [["__scopeId", "data-v-4efa63aa"]]);
const _sfc_main$1U = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-f9d55790><a class="title"${ssrRenderAttr("href", unref(normalizeLink$1)(unref(currentLang).link))} data-v-f9d55790>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme2).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme2).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme2).siteTitle) {
        _push(`<!--[-->${ssrInterpolate(unref(theme2).siteTitle)}<!--]-->`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<!--[-->${ssrInterpolate(unref(site).title)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const VPNavBarTitle_vue_vue_type_style_index_0_scoped_f9d55790_lang = "";
const _sfc_setup$1U = _sfc_main$1U.setup;
_sfc_main$1U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$1U ? _sfc_setup$1U(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$1U, [["__scopeId", "data-v-f9d55790"]]);
const _sfc_main$1T = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$1T = _sfc_main$1T.setup;
_sfc_main$1T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue");
  return _sfc_setup$1T ? _sfc_setup$1T(props, ctx) : void 0;
};
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$1T, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$1S = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: VPIconLanguages,
          label: unref(theme2).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-db829fb0${_scopeId}><p class="title" data-v-db829fb0${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarTranslations_vue_vue_type_style_index_0_scoped_db829fb0_lang = "";
const _sfc_setup$1S = _sfc_main$1S.setup;
_sfc_main$1S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$1S ? _sfc_setup$1S(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$1S, [["__scopeId", "data-v-db829fb0"]]);
const _sfc_main$1R = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const classes = computed(() => ({
      "has-sidebar": hasSidebar.value,
      fill: y.value > 0
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", classes.value]
      }, _attrs))} data-v-a09edd6e><div class="container" data-v-a09edd6e><div class="title" data-v-a09edd6e>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-a09edd6e><div class="curtain" data-v-a09edd6e></div><div class="content-body" data-v-a09edd6e>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1W, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: _ctx.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const VPNavBar_vue_vue_type_style_index_0_scoped_a09edd6e_lang = "";
const _sfc_setup$1R = _sfc_main$1R.setup;
_sfc_main$1R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$1R ? _sfc_setup$1R(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$1R, [["__scopeId", "data-v-a09edd6e"]]);
const _sfc_main$1Q = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2y, mergeProps({
        class: "VPNavScreenMenuLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_e4142beb_lang = "";
const _sfc_setup$1Q = _sfc_main$1Q.setup;
_sfc_main$1Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$1Q ? _sfc_setup$1Q(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$1Q, [["__scopeId", "data-v-e4142beb"]]);
const _sfc_main$1P = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$1P = _sfc_main$1P.setup;
_sfc_main$1P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlus.vue");
  return _sfc_setup$1P ? _sfc_setup$1P(props, ctx) : void 0;
};
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$1P, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1O = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2y, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_9e9d4b52_lang = "";
const _sfc_setup$1O = _sfc_main$1O.setup;
_sfc_main$1O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$1O ? _sfc_setup$1O(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$1O, [["__scopeId", "data-v-9e9d4b52"]]);
const _sfc_main$1N = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-c6154fb6>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-c6154fb6>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_c6154fb6_lang = "";
const _sfc_setup$1N = _sfc_main$1N.setup;
_sfc_main$1N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$1N ? _sfc_setup$1N(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$1N, [["__scopeId", "data-v-c6154fb6"]]);
const _sfc_main$1M = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-4560f6ea><button class="button"${ssrRenderAttr("aria-controls", groupId.value)}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-4560f6ea><span class="button-text" data-v-4560f6ea>${ssrInterpolate(_ctx.text)}</span>`);
      _push(ssrRenderComponent(VPIconPlus, { class: "button-icon" }, null, _parent));
      _push(`</button><div${ssrRenderAttr("id", groupId.value)} class="items" data-v-4560f6ea><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-4560f6ea>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, { item }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-4560f6ea>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_4560f6ea_lang = "";
const _sfc_setup$1M = _sfc_main$1M.setup;
_sfc_main$1M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$1M ? _sfc_setup$1M(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1M, [["__scopeId", "data-v-4560f6ea"]]);
const _sfc_main$1L = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1L = _sfc_main$1L.setup;
_sfc_main$1L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$1L ? _sfc_setup$1L(props, ctx) : void 0;
};
const _sfc_main$1K = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-d616b265><p class="text" data-v-d616b265>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_d616b265_lang = "";
const _sfc_setup$1K = _sfc_main$1K.setup;
_sfc_main$1K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$1K ? _sfc_setup$1K(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$1K, [["__scopeId", "data-v-d616b265"]]);
const _sfc_main$1J = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-f8d2c9ee><button class="title" data-v-f8d2c9ee>`);
        _push(ssrRenderComponent(VPIconLanguages, { class: "icon lang" }, null, _parent));
        _push(` ${ssrInterpolate(unref(currentLang).label)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "icon chevron" }, null, _parent));
        _push(`</button><ul class="list" data-v-f8d2c9ee><!--[-->`);
        ssrRenderList(unref(localeLinks), (locale) => {
          _push(`<li class="item" data-v-f8d2c9ee>`);
          _push(ssrRenderComponent(_sfc_main$2y, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(locale.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenTranslations_vue_vue_type_style_index_0_scoped_f8d2c9ee_lang = "";
const _sfc_setup$1J = _sfc_main$1J.setup;
_sfc_main$1J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$1J ? _sfc_setup$1J(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$1J, [["__scopeId", "data-v-f8d2c9ee"]]);
const _sfc_main$1I = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1I = _sfc_main$1I.setup;
_sfc_main$1I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$1I ? _sfc_setup$1I(props, ctx) : void 0;
};
const _sfc_main$1H = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen
        }, _attrs))} data-v-9289c74a><div class="container" data-v-9289c74a>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$1L, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1I, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreen_vue_vue_type_style_index_0_scoped_9289c74a_lang = "";
const _sfc_setup$1H = _sfc_main$1H.setup;
_sfc_main$1H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$1H ? _sfc_setup$1H(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$1H, [["__scopeId", "data-v-9289c74a"]]);
const _sfc_main$1G = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    provide("close-screen", closeScreen);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "VPNav" }, _attrs))} data-v-11386ff1>`);
      _push(ssrRenderComponent(VPNavBar, {
        "is-screen-open": unref(isScreenOpen),
        onToggleScreen: unref(toggleScreen)
      }, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
        "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</header>`);
    };
  }
});
const VPNav_vue_vue_type_style_index_0_scoped_11386ff1_lang = "";
const _sfc_setup$1G = _sfc_main$1G.setup;
_sfc_main$1G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$1G ? _sfc_setup$1G(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$1G, [["__scopeId", "data-v-11386ff1"]]);
function useSidebar() {
  const route = useRoute();
  const { theme: theme2, frontmatter } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = computed(() => {
    return isActive(page.value.relativePath, item.value.link);
  });
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
const _sfc_main$1F = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sectionTag.value), mergeProps({
        class: ["VPSidebarItem", classes.value]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", itemRole.value)}${ssrRenderAttr("tabindex", _ctx.item.items && 0)} data-v-d836cc62${_scopeId}><div class="indicator" data-v-d836cc62${_scopeId}></div>`);
              if (_ctx.item.link) {
                _push2(ssrRenderComponent(_sfc_main$2y, {
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                          class: "text",
                          innerHTML: _ctx.item.text
                        }, null, 8, ["innerHTML"]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent2, _scopeId);
              }
              if (_ctx.item.collapsed != null) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-d836cc62${_scopeId}>`);
                _push2(ssrRenderComponent(VPIconChevronRight, { class: "caret-icon" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.items && _ctx.item.items.length) {
              _push2(`<div class="items" data-v-d836cc62${_scopeId}>`);
              if (_ctx.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.item.items, (i) => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.item.text ? (openBlock(), createBlock("div", mergeProps({
                key: 0,
                class: "item",
                role: itemRole.value
              }, toHandlers(_ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {}, true), {
                tabindex: _ctx.item.items && 0
              }), [
                createVNode("div", { class: "indicator" }),
                _ctx.item.link ? (openBlock(), createBlock(_sfc_main$2y, {
                  key: 0,
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                      class: "text",
                      innerHTML: _ctx.item.text
                    }, null, 8, ["innerHTML"]))
                  ]),
                  _: 1
                }, 8, ["tag", "href"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  key: 1,
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"])),
                _ctx.item.collapsed != null ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "caret",
                  role: "button",
                  "aria-label": "toggle section",
                  onClick: onCaretClick,
                  onKeydown: withKeys(onCaretClick, ["enter"]),
                  tabindex: "0"
                }, [
                  createVNode(VPIconChevronRight, { class: "caret-icon" })
                ], 40, ["onKeydown"])) : createCommentVNode("", true)
              ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
              _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "items"
              }, [
                _ctx.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => {
                  return openBlock(), createBlock(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, 8, ["item", "depth"]);
                }), 128)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPSidebarItem_vue_vue_type_style_index_0_scoped_d836cc62_lang = "";
const _sfc_setup$1F = _sfc_main$1F.setup;
_sfc_main$1F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$1F ? _sfc_setup$1F(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$1F, [["__scopeId", "data-v-d836cc62"]]);
const _sfc_main$1E = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { sidebarGroups, hasSidebar } = useSidebar();
    let navEl = ref(null);
    function lockBodyScroll() {
      disableBodyScroll(navEl.value, { reserveScrollBarGap: true });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    watchPostEffect(async () => {
      var _a;
      if (props.open) {
        lockBodyScroll();
        (_a = navEl.value) == null ? void 0 : _a.focus();
      } else {
        unlockBodyScroll();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: _ctx.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-350d2dc3><div class="curtain" data-v-350d2dc3></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-350d2dc3><span class="visually-hidden" id="sidebar-aria-label" data-v-350d2dc3> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(`<!--[-->`);
        ssrRenderList(unref(sidebarGroups), (item) => {
          _push(`<div class="group" data-v-350d2dc3>`);
          _push(ssrRenderComponent(VPSidebarItem, {
            item,
            depth: 0
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPSidebar_vue_vue_type_style_index_0_scoped_350d2dc3_lang = "";
const _sfc_setup$1E = _sfc_main$1E.setup;
_sfc_main$1E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$1E ? _sfc_setup$1E(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1E, [["__scopeId", "data-v-350d2dc3"]]);
const _sfc_main$1D = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-705a304b></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-705a304b> Skip to content </a><!--]-->`);
    };
  }
});
const VPSkipLink_vue_vue_type_style_index_0_scoped_705a304b_lang = "";
const _sfc_setup$1D = _sfc_main$1D.setup;
_sfc_main$1D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$1D ? _sfc_setup$1D(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$1D, [["__scopeId", "data-v-705a304b"]]);
const _sfc_main$1C = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    provide("close-sidebar", closeSidebar);
    provide("is-sidebar-open", isSidebarOpen);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "Layout" }, _attrs))} data-v-18063253>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        if (unref(frontmatter).navbar !== false) {
          _push(ssrRenderComponent(VPNav, null, {
            "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
                ];
              }
            }),
            "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
                ];
              }
            }),
            "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
                ];
              }
            }),
            "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
                ];
              }
            }),
            "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
                ];
              }
            }),
            "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ];
            }
          }),
          "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
              ];
            }
          }),
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const Layout_vue_vue_type_style_index_0_scoped_18063253_lang = "";
const _sfc_setup$1C = _sfc_main$1C.setup;
_sfc_main$1C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$1C ? _sfc_setup$1C(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$1C, [["__scopeId", "data-v-18063253"]]);
const _sfc_main$1B = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path></svg>`);
}
const _sfc_setup$1B = _sfc_main$1B.setup;
_sfc_main$1B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconHeart.vue");
  return _sfc_setup$1B ? _sfc_setup$1B(props, ctx) : void 0;
};
const VPIconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$1B, [["ssrRender", _sfc_ssrRender$1]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$1A = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [props.size ?? "medium"]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1A = _sfc_main$1A.setup;
_sfc_main$1A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$1A ? _sfc_setup$1A(props, ctx) : void 0;
};
const _sfc_main$1z = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: {},
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [_ctx.mode ?? "normal"]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor, index2) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$1A, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1z = _sfc_main$1z.setup;
_sfc_main$1z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$1z ? _sfc_setup$1z(props, ctx) : void 0;
};
const _sfc_main$1y = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: {},
    actionText: {},
    actionLink: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-8ef5dc40><div class="container" data-v-8ef5dc40><div class="header" data-v-8ef5dc40><div class="love" data-v-8ef5dc40>`);
      _push(ssrRenderComponent(VPIconHeart, { class: "icon" }, null, _parent));
      _push(`</div>`);
      if (_ctx.message) {
        _push(`<h2 class="message" data-v-8ef5dc40>${ssrInterpolate(_ctx.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-8ef5dc40>`);
      _push(ssrRenderComponent(_sfc_main$1z, { data: _ctx.data }, null, _parent));
      _push(`</div>`);
      if (_ctx.actionLink) {
        _push(`<div class="action" data-v-8ef5dc40>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: _ctx.actionText ?? "Become a sponsor",
          href: _ctx.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const VPHomeSponsors_vue_vue_type_style_index_0_scoped_8ef5dc40_lang = "";
const _sfc_setup$1y = _sfc_main$1y.setup;
_sfc_main$1y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$1y ? _sfc_setup$1y(props, ctx) : void 0;
};
const _sfc_main$1x = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1z, {
        mode: "aside",
        tier: _ctx.tier,
        size: _ctx.size,
        data: _ctx.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1x = _sfc_main$1x.setup;
_sfc_main$1x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$1x ? _sfc_setup$1x(props, ctx) : void 0;
};
const VPTeamPage_vue_vue_type_style_index_0_scoped_7a225f17_lang = "";
const _sfc_main$1w = {};
const _sfc_setup$1w = _sfc_main$1w.setup;
_sfc_main$1w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$1w ? _sfc_setup$1w(props, ctx) : void 0;
};
const VPTeamPageTitle_vue_vue_type_style_index_0_scoped_c8c5e40d_lang = "";
const _sfc_main$1v = {};
const _sfc_setup$1v = _sfc_main$1v.setup;
_sfc_main$1v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$1v ? _sfc_setup$1v(props, ctx) : void 0;
};
const VPTeamPageSection_vue_vue_type_style_index_0_scoped_ce9022be_lang = "";
const _sfc_main$1u = {};
const _sfc_setup$1u = _sfc_main$1u.setup;
_sfc_main$1u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$1u ? _sfc_setup$1u(props, ctx) : void 0;
};
const _sfc_main$1t = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: {},
    member: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [_ctx.size ?? "medium"]]
      }, _attrs))} data-v-466ddc04><div class="profile" data-v-466ddc04><figure class="avatar" data-v-466ddc04><img class="avatar-img"${ssrRenderAttr("src", _ctx.member.avatar)}${ssrRenderAttr("alt", _ctx.member.name)} data-v-466ddc04></figure><div class="data" data-v-466ddc04><h1 class="name" data-v-466ddc04>${ssrInterpolate(_ctx.member.name)}</h1>`);
      if (_ctx.member.title || _ctx.member.org) {
        _push(`<p class="affiliation" data-v-466ddc04>`);
        if (_ctx.member.title) {
          _push(`<span class="title" data-v-466ddc04>${ssrInterpolate(_ctx.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.title && _ctx.member.org) {
          _push(`<span class="at" data-v-466ddc04> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.org) {
          _push(ssrRenderComponent(_sfc_main$2y, {
            class: ["org", { link: _ctx.member.orgLink }],
            href: _ctx.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.desc) {
        _push(`<p class="desc" data-v-466ddc04>${_ctx.member.desc}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.links) {
        _push(`<div class="links" data-v-466ddc04>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: _ctx.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.member.sponsor) {
        _push(`<div class="sp" data-v-466ddc04>`);
        _push(ssrRenderComponent(_sfc_main$2y, {
          class: "sp-link",
          href: _ctx.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPIconHeart, { class: "sp-icon" }, null, _parent2, _scopeId));
              _push2(` Sponsor `);
            } else {
              return [
                createVNode(VPIconHeart, { class: "sp-icon" }),
                createTextVNode(" Sponsor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const VPTeamMembersItem_vue_vue_type_style_index_0_scoped_466ddc04_lang = "";
const _sfc_setup$1t = _sfc_main$1t.setup;
_sfc_main$1t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$1t ? _sfc_setup$1t(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$1t, [["__scopeId", "data-v-466ddc04"]]);
const _sfc_main$1s = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: {},
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [
      props.size ?? "medium",
      `count-${props.members.length}`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", classes.value]
      }, _attrs))} data-v-0145bdda><div class="container" data-v-0145bdda><!--[-->`);
      ssrRenderList(_ctx.members, (member) => {
        _push(`<div class="item" data-v-0145bdda>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: _ctx.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPTeamMembers_vue_vue_type_style_index_0_scoped_0145bdda_lang = "";
const _sfc_setup$1s = _sfc_main$1s.setup;
_sfc_main$1s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.0.0-beta.5_sass@1.63.6+sortablejs@1.15.0/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$1s ? _sfc_setup$1s(props, ctx) : void 0;
};
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", VPBadge);
  }
};
const index$1 = "";
const custom = "";
const normalize = "";
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const tmplProps = {
  template: {
    type: Array,
    default: () => []
  }
};
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");
  return `#${hexR}${hexG}${hexB}`;
}
function isAsyncFunction(fn) {
  if (!fn || typeof fn !== "function")
    return false;
  return Object.prototype.toString.call(fn) === "[object AsyncFunction]" || fn.constructor.name === "AsyncFunction";
}
function mergeTemplate(...tmpls) {
  return tmpls;
}
function countNodesRecursive(root) {
  if (!root || !root.length) {
    return 0;
  }
  let count = 0;
  for (const child of root) {
    count++;
    if (child.children) {
      count += countNodesRecursive(child.children);
    }
  }
  return count;
}
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
const throttleDuration = 1e3;
const _sfc_main$1r = /* @__PURE__ */ Object.assign({
  name: "FYButton"
}, {
  __name: "button",
  __ssrInlineRender: true,
  props: {
    throttle: {
      // 是否开启节流
      type: Boolean,
      default: true
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const record = ref(0);
    const handleClick = () => {
      if (props.throttle) {
        const newTime = /* @__PURE__ */ new Date();
        if (newTime.getTime() - record.value > throttleDuration) {
          emits("click");
        }
        record.value = (/* @__PURE__ */ new Date()).getTime();
      } else {
        emits("click");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ElButton), mergeProps(_ctx.$attrs, { onClick: handleClick }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1r = _sfc_main$1r.setup;
_sfc_main$1r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/button/src/button.vue");
  return _sfc_setup$1r ? _sfc_setup$1r(props, ctx) : void 0;
};
const Button = _sfc_main$1r;
const FYButton = withInstall(Button);
const _sfc_main$1q = /* @__PURE__ */ Object.assign({
  name: "FYInput"
}, {
  __name: "input",
  __ssrInlineRender: true,
  props: {
    // 圆角
    round: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    limit: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: "text"
    },
    textarea: {
      type: [Array, String, Boolean],
      default: void 0
    },
    // 是否伸缩
    flex: {
      type: Boolean,
      default: false
    },
    // 是否有筛选看
    filterList: {
      type: Array,
      default: () => []
    },
    // 定义value,防止绑定value到原生标签上影响后续v-model的使用
    // eslint-disable-next-line
    value: {},
    // 辅助树状结构组件的自动focus功能
    autoFocus: {
      type: [Boolean, String],
      default: false
    }
  },
  emits: ["focus", "blur", "switchChange"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const slot = useSlots();
    const getClass = computed(() => ["fy-input", props.round ? "round" : ""].filter(Boolean));
    const getType = computed(() => {
      if (!props.textarea && props.textarea !== "") {
        return "text";
      }
      return "textarea";
    });
    const getAutosize = computed(() => {
      if (props.textarea && props.textarea.length) {
        return {
          minRows: props.textarea[0],
          maxRows: props.textarea[1]
        };
      }
      if (props.textarea === "" || props.textarea) {
        return {
          minRows: 2,
          maxRows: 4
        };
      }
      return false;
    });
    const handleFocus = (e) => {
      if (props.flex) {
        e.srcElement.style.width = `${e.srcElement.getBoundingClientRect().width + 100}px`;
      }
    };
    const handleBlur = (e) => {
      if (props.flex) {
        e.srcElement.style.width = `${e.srcElement.getBoundingClientRect().width - 100}px`;
      }
      emit("blur", e);
    };
    const isFilter = ref(false);
    const handleIconClick = () => {
      isFilter.value = !isFilter.value;
      return null;
    };
    const filterClose = () => {
      isFilter.value = false;
    };
    const switchGroupValue = ref([]);
    switchGroupValue.value = props.filterList.map((item) => ({
      id: item.id,
      value: item.value
    }));
    const switchChange = () => {
      emit("switchChange", switchGroupValue.value);
    };
    const myRef = ref(null);
    setTimeout(() => {
      if (props.autoFocus !== false) {
        myRef.value.focus();
      }
    }, 0);
    const handleEnter = () => {
      emit("enter", props.modelValue);
      myRef.value.blur();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_click_outside = resolveDirective("click-outside");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fy-input-wrap"
      }, _attrs))} data-v-c7632261>`);
      _push(ssrRenderComponent(unref(ElInput), mergeProps(_ctx.$attrs, {
        ref_key: "myRef",
        ref: myRef,
        class: getClass.value,
        placeholder: props.placeholder,
        "show-word-limit": !!props.limit,
        maxlength: props.limit ? props.limit : "",
        type: getType.value,
        autosize: getAutosize.value,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyup: handleEnter
      }), createSlots({
        _: 2
      }, [unref(slot) && unref(slot).prefix ? {
        name: "prefix",
        fn: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "prefix", {}, void 0, true)];
          }
        }),
        key: "0"
      } : void 0, unref(slot) && unref(slot).suffix || props.filterList && props.filterList.length ? {
        name: "suffix",
        fn: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.filterList && props.filterList.length) {
              _push2(ssrRenderComponent(unref(ElIcon), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ArrowDown), {
                      class: [{
                        "arrow-select": isFilter.value
                      }, "my-arrow-down"],
                      onClick: handleIconClick
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [createVNode(unref(ArrowDown), {
                      class: [{
                        "arrow-select": isFilter.value
                      }, "my-arrow-down"],
                      onClick: withModifiers(handleIconClick, ["stop"])
                    }, null, 8, ["class", "onClick"])];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              ssrRenderSlot(_ctx.$slots, "suffix", {}, null, _push2, _parent2, _scopeId);
            }
          } else {
            return [props.filterList && props.filterList.length ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0
            }, {
              default: withCtx(() => [createVNode(unref(ArrowDown), {
                class: [{
                  "arrow-select": isFilter.value
                }, "my-arrow-down"],
                onClick: withModifiers(handleIconClick, ["stop"])
              }, null, 8, ["class", "onClick"])]),
              _: 1
            })) : renderSlot(_ctx.$slots, "suffix", {
              key: 1
            }, void 0, true)];
          }
        }),
        key: "1"
      } : void 0]), _parent));
      if (props.filterList && props.filterList.length) {
        _push(`<!--[-->`);
        if (isFilter.value) {
          _push(ssrRenderComponent(unref(ElCard), mergeProps({
            class: "fy-input-card"
          }, ssrGetDirectiveProps(_ctx, _directive_click_outside, filterClose, "my-arrow-down")), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="card-title" data-v-c7632261${_scopeId}> 搜索范围 </div><!--[-->`);
                ssrRenderList(props.filterList, (item, index2) => {
                  _push2(`<div class="card-item" data-v-c7632261${_scopeId}><span class="card-item-name" data-v-c7632261${_scopeId}>${ssrInterpolate(item.name)}</span>`);
                  _push2(ssrRenderComponent(unref(ElSwitch), {
                    modelValue: switchGroupValue.value[index2].value,
                    "onUpdate:modelValue": ($event) => switchGroupValue.value[index2].value = $event,
                    name: item.name,
                    class: "card-item-value",
                    onChange: switchChange
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
              } else {
                return [createVNode("div", {
                  class: "card-title"
                }, " 搜索范围 "), (openBlock(true), createBlock(Fragment, null, renderList(props.filterList, (item, index2) => {
                  return openBlock(), createBlock("div", {
                    key: index2,
                    class: "card-item"
                  }, [createVNode("span", {
                    class: "card-item-name"
                  }, toDisplayString(item.name), 1), createVNode(unref(ElSwitch), {
                    modelValue: switchGroupValue.value[index2].value,
                    "onUpdate:modelValue": ($event) => switchGroupValue.value[index2].value = $event,
                    name: item.name,
                    class: "card-item-value",
                    onChange: switchChange
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "name"])]);
                }), 128))];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const input_vue_vue_type_style_index_0_scoped_c7632261_lang = "";
const _sfc_setup$1q = _sfc_main$1q.setup;
_sfc_main$1q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/input/src/input.vue");
  return _sfc_setup$1q ? _sfc_setup$1q(props, ctx) : void 0;
};
const Input$3 = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["__scopeId", "data-v-c7632261"]]);
const FYInput = withInstall(Input$3);
const _sfc_main$1p = /* @__PURE__ */ Object.assign({
  name: "FYCascader"
}, {
  __name: "cascader",
  __ssrInlineRender: true,
  props: {
    defaultIcon: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const hasDefaultSlot = computed(() => {
      const slots = useSlots();
      return slots.default;
    });
    const defaultIconStyle = computed(() => ({
      borderRadius: "50%",
      background: getRandomColor(),
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_cascader = resolveComponent("el-cascader");
      _push(ssrRenderComponent(_component_el_cascader, mergeProps(_ctx.$attrs, {
        style: {
          "width": "100%"
        }
      }, _attrs), {
        default: withCtx(({
          data,
          node
        }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (hasDefaultSlot.value) {
              ssrRenderSlot(_ctx.$slots, "default", {
                data,
                node
              }, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<div style="${ssrRenderStyle({
                "width": "100%",
                "display": "flex",
                "justify-items": "center",
                "align-items": "center",
                "column-gap": "0.5rem"
              })}" data-v-68855261${_scopeId}>`);
              if (data.icon) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(data.icon), null, null), _parent2, _scopeId);
              } else if (__props.defaultIcon) {
                _push2(`<div style="${ssrRenderStyle(defaultIconStyle.value)}" data-v-68855261${_scopeId}>${ssrInterpolate(data.label.slice(0, 1))}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span data-v-68855261${_scopeId}>${ssrInterpolate(data.label)}</span></div>`);
            }
          } else {
            return [hasDefaultSlot.value ? renderSlot(_ctx.$slots, "default", {
              key: 0,
              data,
              node
            }, void 0, true) : (openBlock(), createBlock("div", {
              key: 1,
              style: {
                "width": "100%",
                "display": "flex",
                "justify-items": "center",
                "align-items": "center",
                "column-gap": "0.5rem"
              }
            }, [data.icon ? (openBlock(), createBlock(resolveDynamicComponent(data.icon), {
              key: 0
            })) : __props.defaultIcon ? (openBlock(), createBlock("div", {
              key: 1,
              style: defaultIconStyle.value
            }, toDisplayString(data.label.slice(0, 1)), 5)) : createCommentVNode("", true), createVNode("span", null, toDisplayString(data.label), 1)]))];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const cascader_vue_vue_type_style_index_0_scoped_68855261_lang = "";
const _sfc_setup$1p = _sfc_main$1p.setup;
_sfc_main$1p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/cascader/src/cascader.vue");
  return _sfc_setup$1p ? _sfc_setup$1p(props, ctx) : void 0;
};
const Cascader$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1p, [["__scopeId", "data-v-68855261"]]);
const FYCascader = withInstall(Cascader$1);
function useDisabledDate(props) {
  const disabledDate = (time) => {
    if (props.disableLessThan)
      return disableLessThanCurDate(time);
    if (props.disableMoreThan)
      return disableGreaterThanCurDate(time);
    return false;
  };
  const disableLessThanCurDate = (time) => new Date(time).getTime() > (/* @__PURE__ */ new Date()).getTime();
  const disableGreaterThanCurDate = (time) => !disableLessThanCurDate(time);
  return disabledDate;
}
const datePicker_vue_vue_type_style_index_0_scoped_a9a5194f_lang = "";
const _sfc_main$1o = /* @__PURE__ */ Object.assign({
  name: "FYDatePicker"
}, {
  __name: "date-picker",
  __ssrInlineRender: true,
  props: {
    disableLessThan: {
      // 禁用小于当前时间的选择
      type: Boolean,
      default: false
    },
    disableMoreThan: {
      // 禁用大于当前时间的选择
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const disabledDate = useDisabledDate(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_date_picker = resolveComponent("el-date-picker");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fy-date-picker",
        style: { "width": "100%" }
      }, _attrs))} data-v-a9a5194f>`);
      _push(ssrRenderComponent(_component_el_date_picker, mergeProps({
        type: "monthrange",
        "range-separator": "To",
        placeholder: "请选择",
        "start-placeholder": "请选择",
        "end-placeholder": "请选择",
        "disabled-date": unref(disabledDate)
      }, _ctx.$attrs), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1o = _sfc_main$1o.setup;
_sfc_main$1o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/date-picker/src/date-picker.vue");
  return _sfc_setup$1o ? _sfc_setup$1o(props, ctx) : void 0;
};
const DatePicker$3 = /* @__PURE__ */ _export_sfc(_sfc_main$1o, [["__scopeId", "data-v-a9a5194f"]]);
function createRangeDatePicker() {
  const startValue = ref("");
  const endValue = ref("");
  const StartDatePicker = defineComponent({
    setup(_, {
      attrs
    }) {
      return () => createVNode(DatePicker$3, mergeProps({
        "type": "datetime",
        "modelValue": startValue.value,
        "onUpdate:modelValue": ($event) => startValue.value = $event,
        "disabledDate": (time) => new Date(time) > new Date(endValue.value)
      }, attrs), null);
    }
  });
  const EndDatePicker = defineComponent({
    setup() {
      return (_, {
        attrs
      }) => createVNode(DatePicker$3, mergeProps({
        "type": "datetime",
        "disabledDate": (time) => new Date(time) < new Date(startValue.value),
        "modelValue": endValue.value,
        "onUpdate:modelValue": ($event) => endValue.value = $event
      }, attrs), null);
    }
  });
  return {
    StartDatePicker,
    EndDatePicker,
    startValue,
    endValue
  };
}
const FYDatePicker = withInstall(DatePicker$3);
const _sfc_main$1n = /* @__PURE__ */ Object.assign({
  name: "FYEmpty"
}, {
  __name: "empty",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_empty = resolveComponent("el-empty");
      _push(ssrRenderComponent(_component_el_empty, mergeProps(_ctx.$attrs, _attrs), {
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="840" height="363" viewBox="0 0 840 363" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g clip-path="url(#clip0_1_446)"${_scopeId}><path d="M840 318.5L839.77 322.623L839.081 326.72L837.953 330.789L836.375 334.841L834.348 338.88L831.862 342.9L828.348 347.621L824.224 352.302L819.481 356.943L814.089 361.557L808.028 366.145L801.568 370.531L794.498 374.864L786.8 379.148L778.452 383.383L769.436 387.573L760.2 391.518L750.354 395.382L739.89 399.175L728.777 402.892L716.985 406.534L705.072 409.929L692.731 413.178L679.95 416.288L666.72 419.26L653.02 422.08L639.261 424.686L625.162 427.136L610.714 429.425L595.906 431.554L580.729 433.522L565.552 435.285L550.135 436.873L534.458 438.288L518.522 439.524L502.317 440.586L486.161 441.447L469.845 442.121L453.39 442.607L436.775 442.897L420 443L403.225 442.897L386.61 442.607L370.155 442.121L353.839 441.447L337.683 440.586L321.478 439.524L305.542 438.288L289.865 436.873L274.448 435.285L259.271 433.522L244.094 431.554L229.286 429.425L214.838 427.136L200.739 424.686L186.98 422.08L173.28 419.26L160.05 416.288L147.269 413.178L134.928 409.929L123.015 406.534L111.223 402.892L100.11 399.175L89.6455 395.382L79.8003 391.518L70.5642 387.573L61.5477 383.383L53.2002 379.148L45.5018 374.864L38.4324 370.531L31.972 366.145L25.9111 361.557L20.5192 356.943L15.7763 352.302L11.6525 347.621L8.13779 342.9L5.65153 338.88L3.62456 334.841L2.04693 330.789L0.91862 326.72L0.229659 322.623L0 318.5L0.229659 314.377L0.91862 310.28L2.04693 306.211L3.62456 302.159L5.65153 298.12L8.13779 294.1L11.6525 289.379L15.7763 284.698L20.5192 280.057L25.9111 275.443L31.972 270.855L38.4324 266.469L45.5018 262.136L53.2002 257.852L61.5477 253.617L70.5642 249.427L79.8003 245.482L89.6455 241.618L100.11 237.825L111.223 234.108L123.015 230.466L134.928 227.071L147.269 223.822L160.05 220.712L173.28 217.74L186.98 214.92L200.739 212.314L214.838 209.864L229.286 207.575L244.094 205.446L259.271 203.478L274.448 201.715L289.865 200.127L305.542 198.712L321.478 197.476L337.683 196.414L353.839 195.553L370.155 194.879L386.61 194.393L403.225 194.103L420 194L436.775 194.103L453.39 194.393L469.845 194.879L486.161 195.553L502.317 196.414L518.522 197.476L534.458 198.712L550.135 200.127L565.552 201.715L580.729 203.478L595.906 205.446L610.714 207.575L625.162 209.864L639.261 212.314L653.02 214.92L666.72 217.74L679.95 220.712L692.731 223.822L705.072 227.071L716.985 230.466L728.777 234.108L739.89 237.825L750.354 241.618L760.2 245.482L769.436 249.427L778.452 253.617L786.8 257.852L794.498 262.136L801.568 266.469L808.028 270.855L814.089 275.443L819.481 280.057L824.224 284.698L828.348 289.379L831.862 294.1L834.348 298.12L836.375 302.159L837.953 306.211L839.081 310.28L839.77 314.377L840 318.5Z" fill="url(#paint0_radial_1_446)"${_scopeId}></path><path d="M138.193 291H148.557V345.67L148.358 347.12L147.858 348.36L147.04 349.44L145.991 350.28L144.783 350.8L143.375 351L141.967 350.8L140.769 350.28L139.711 349.44L138.902 348.36L138.393 347.12L138.193 345.67V291Z" fill="#3F78D6"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M138.193 261L162.387 324.33L138.193 341V261Z" fill="url(#paint1_linear_1_446)"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M138.193 261L117.454 331L138.193 341V261Z" fill="url(#paint2_linear_1_446)"${_scopeId}></path><path d="M714.558 249H722.546V291.82L722.226 293.46L721.378 294.78L720.11 295.67L718.552 296L716.994 295.67L715.726 294.78L714.877 293.46L714.558 291.82V249Z" fill="#3F78D6"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M714.558 226L733.529 275.08L714.558 288V226Z" fill="url(#paint3_linear_1_446)"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M714.558 226L698.582 280.25L714.558 288V226Z" fill="url(#paint4_linear_1_446)"${_scopeId}></path><path d="M189.346 217H197.334V258L197.014 259.57L196.166 260.83L194.908 261.68L193.34 262L191.772 261.68L190.514 260.83L189.665 259.57L189.346 258V217Z" fill="#3F78D6"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M189.346 194L207.319 241.5L189.346 254V194Z" fill="url(#paint5_linear_1_446)"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M189.346 194L173.37 246.5L189.346 254V194Z" fill="url(#paint6_linear_1_446)"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M315.357 13.01H487.439L490.694 13.31L493.67 14.13L496.425 15.46L498.922 17.24L501.038 19.37L502.816 21.89L504.124 24.67L504.943 27.67L505.242 30.94V252.08L504.943 255.35L504.124 258.35L502.816 261.13L501.038 263.65L498.922 265.78L496.425 267.56L493.67 268.89L490.694 269.71L487.439 270.01H315.357L312.102 269.71L309.126 268.89L306.37 267.56L303.874 265.78L301.757 263.65L299.98 261.13L298.672 258.35L297.853 255.35L297.554 252.08V30.94L297.853 27.67L298.672 24.67L299.98 21.89L301.757 19.37L303.874 17.24L306.37 15.46L309.126 14.13L312.102 13.31L315.357 13.01Z" fill="#A2D2FE"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M315.357 13.01H487.439L490.694 13.31L493.67 14.13L496.425 15.46L498.922 17.24L501.038 19.37L502.816 21.89L504.124 24.67L504.943 27.67L505.242 30.94V252.08L504.943 255.35L504.124 258.35L502.816 261.13L501.038 263.65L498.922 265.78L496.425 267.56L493.67 268.89L490.694 269.71L487.439 270.01H315.357L312.102 269.71L309.126 268.89L306.37 267.56L303.874 265.78L301.757 263.65L299.98 261.13L298.672 258.35L297.853 255.35L297.554 252.08V30.94L297.853 27.67L298.672 24.67L299.98 21.89L301.757 19.37L303.874 17.24L306.37 15.46L309.126 14.13L312.102 13.31L315.357 13.01Z" fill="url(#paint7_linear_1_446)"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M461.358 75.92H372.172L370.554 75.69L369.166 75.11L367.968 74.17L367.029 72.97L366.45 71.58L366.221 69.96L366.45 68.35L367.029 66.96L367.968 65.75L369.166 64.82L370.554 64.24L372.172 64.01H461.358L462.965 64.24L464.353 64.82L465.562 65.75L466.49 66.96L467.069 68.35L467.299 69.96L467.069 71.58L466.49 72.97L465.562 74.17L464.353 75.11L462.965 75.69L461.358 75.92ZM372.172 141.41H395.956L397.564 141.63L398.951 142.21L400.16 143.15L401.088 144.36L401.667 145.74L401.897 147.36L401.667 148.98L401.088 150.36L400.16 151.57L398.951 152.51L397.564 153.08L395.956 153.31H372.172L370.554 153.08L369.166 152.5L367.968 151.57L367.029 150.36L366.45 148.98L366.221 147.36L366.45 145.74L367.029 144.36L367.968 143.15L369.166 142.21L370.554 141.63L372.172 141.41ZM351.363 192.01H342.436L340.829 191.78L339.441 191.2L338.233 190.27L337.304 189.06L336.725 187.67L336.495 186.06L336.725 184.44L337.304 183.05L338.233 181.85L339.441 180.91L340.829 180.33L342.436 180.1H351.363L352.97 180.33L354.358 180.91L355.567 181.85L356.495 183.05L357.074 184.44L357.304 186.06L357.074 187.67L356.495 189.06L355.567 190.27L354.358 191.2L352.97 191.78L351.363 192.01ZM351.363 153.31H342.436L340.829 153.08L339.441 152.5L338.233 151.57L337.304 150.36L336.725 148.98L336.495 147.36L336.725 145.74L337.304 144.36L338.233 143.15L339.441 142.21L340.829 141.63L342.436 141.41H351.363L352.97 141.63L354.358 142.21L355.567 143.15L356.495 144.36L357.074 145.74L357.304 147.36L357.074 148.98L356.495 150.36L355.567 151.57L354.358 152.51L352.97 153.08L351.363 153.31ZM351.363 114.61H342.436L340.829 114.39L339.441 113.81L338.233 112.87L337.304 111.66L336.725 110.28L336.495 108.66L336.725 107.04L337.304 105.66L338.233 104.45L339.441 103.52L340.829 102.94L342.436 102.71H351.363L352.97 102.94L354.358 103.51L355.567 104.45L356.495 105.66L357.074 107.04L357.304 108.66L357.074 110.28L356.495 111.66L355.567 112.87L354.358 113.81L352.97 114.39L351.363 114.61ZM351.363 75.92H342.436L340.829 75.69L339.441 75.11L338.233 74.17L337.304 72.97L336.725 71.58L336.495 69.96L336.725 68.35L337.304 66.96L338.233 65.75L339.441 64.82L340.829 64.24L342.436 64.01H351.363L352.97 64.24L354.358 64.82L355.567 65.75L356.495 66.96L357.074 68.35L357.304 69.96L357.074 71.58L356.495 72.97L355.567 74.17L354.358 75.11L352.97 75.69L351.363 75.92ZM372.172 180.1H395.956L397.564 180.33L398.951 180.91L400.16 181.85L401.088 183.05L401.667 184.44L401.897 186.06L401.667 187.67L401.088 189.06L400.16 190.27L398.951 191.2L397.564 191.78L395.956 192.01H372.172L370.554 191.78L369.166 191.2L367.968 190.27L367.029 189.06L366.45 187.67L366.221 186.06L366.45 184.44L367.029 183.05L367.968 181.85L369.166 180.91L370.554 180.33L372.172 180.1ZM366.221 108.66L366.45 107.04L367.029 105.66L367.968 104.45L369.166 103.52L370.554 102.94L372.172 102.71H458.382L460 102.94L461.378 103.52L462.586 104.45L463.525 105.66L464.094 107.04L464.323 108.66L464.094 110.28L463.525 111.66L462.586 112.87L461.378 113.81L460 114.39L458.382 114.61H372.172L370.554 114.39L369.166 113.81L367.968 112.87L367.029 111.66L366.45 110.28L366.221 108.66Z" fill="#F9FAFF"${_scopeId}></path><path d="M461.358 75.92H372.172L370.554 75.69L369.166 75.11L367.968 74.17L367.029 72.97L366.45 71.58L366.221 69.96L366.45 68.35L367.029 66.96L367.968 65.75L369.166 64.82L370.554 64.24L372.172 64.01H461.358L462.965 64.24L464.353 64.82L465.562 65.75L466.49 66.96L467.069 68.35L467.299 69.96L467.069 71.58L466.49 72.97L465.562 74.17L464.353 75.11L462.965 75.69L461.358 75.92ZM372.172 141.41H395.956L397.564 141.63L398.951 142.21L400.16 143.15L401.088 144.36L401.667 145.74L401.897 147.36L401.667 148.98L401.088 150.36L400.16 151.57L398.951 152.51L397.564 153.08L395.956 153.31H372.172L370.554 153.08L369.166 152.5L367.968 151.57L367.029 150.36L366.45 148.98L366.221 147.36L366.45 145.74L367.029 144.36L367.968 143.15L369.166 142.21L370.554 141.63L372.172 141.41ZM351.363 192.01H342.436L340.829 191.78L339.441 191.2L338.233 190.27L337.304 189.06L336.725 187.67L336.495 186.06L336.725 184.44L337.304 183.05L338.233 181.85L339.441 180.91L340.829 180.33L342.436 180.1H351.363L352.97 180.33L354.358 180.91L355.567 181.85L356.495 183.05L357.074 184.44L357.304 186.06L357.074 187.67L356.495 189.06L355.567 190.27L354.358 191.2L352.97 191.78L351.363 192.01ZM351.363 153.31H342.436L340.829 153.08L339.441 152.5L338.233 151.57L337.304 150.36L336.725 148.98L336.495 147.36L336.725 145.74L337.304 144.36L338.233 143.15L339.441 142.21L340.829 141.63L342.436 141.41H351.363L352.97 141.63L354.358 142.21L355.567 143.15L356.495 144.36L357.074 145.74L357.304 147.36L357.074 148.98L356.495 150.36L355.567 151.57L354.358 152.51L352.97 153.08L351.363 153.31ZM351.363 114.61H342.436L340.829 114.39L339.441 113.81L338.233 112.87L337.304 111.66L336.725 110.28L336.495 108.66L336.725 107.04L337.304 105.66L338.233 104.45L339.441 103.52L340.829 102.94L342.436 102.71H351.363L352.97 102.94L354.358 103.51L355.567 104.45L356.495 105.66L357.074 107.04L357.304 108.66L357.074 110.28L356.495 111.66L355.567 112.87L354.358 113.81L352.97 114.39L351.363 114.61ZM351.363 75.92H342.436L340.829 75.69L339.441 75.11L338.233 74.17L337.304 72.97L336.725 71.58L336.495 69.96L336.725 68.35L337.304 66.96L338.233 65.75L339.441 64.82L340.829 64.24L342.436 64.01H351.363L352.97 64.24L354.358 64.82L355.567 65.75L356.495 66.96L357.074 68.35L357.304 69.96L357.074 71.58L356.495 72.97L355.567 74.17L354.358 75.11L352.97 75.69L351.363 75.92ZM372.172 180.1H395.956L397.564 180.33L398.951 180.91L400.16 181.85L401.088 183.05L401.667 184.44L401.897 186.06L401.667 187.67L401.088 189.06L400.16 190.27L398.951 191.2L397.564 191.78L395.956 192.01H372.172L370.554 191.78L369.166 191.2L367.968 190.27L367.029 189.06L366.45 187.67L366.221 186.06L366.45 184.44L367.029 183.05L367.968 181.85L369.166 180.91L370.554 180.33L372.172 180.1ZM366.221 108.66L366.45 107.04L367.029 105.66L367.968 104.45L369.166 103.52L370.554 102.94L372.172 102.71H458.382L460 102.94L461.378 103.52L462.586 104.45L463.525 105.66L464.094 107.04L464.323 108.66L464.094 110.28L463.525 111.66L462.586 112.87L461.378 113.81L460 114.39L458.382 114.61H372.172L370.554 114.39L369.166 113.81L367.968 112.87L367.029 111.66L366.45 110.28L366.221 108.66Z" fill="white"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M518.222 204.69L530.594 192.01L561.158 223.33L548.787 236.01L518.222 204.69Z" fill="#6A9BED"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M536.645 221.55L547.718 210.46L549.516 209.09L551.503 208.28L553.62 208.01L555.736 208.28L557.733 209.09L559.531 210.46L598.652 245.21L600.02 247.01L600.829 249L601.098 251.12L600.829 253.24L600.02 255.24L598.652 257.04L583.145 272.56L581.358 273.93L579.361 274.74L577.244 275.01L575.127 274.74L573.14 273.93L571.343 272.56L536.645 233.38L535.277 231.58L534.468 229.59L534.199 227.46L534.468 225.34L535.277 223.35L536.645 221.55Z" fill="#999999"${_scopeId}></path><path d="M536.645 221.55L547.718 210.46L549.516 209.09L551.503 208.28L553.62 208.01L555.736 208.28L557.733 209.09L559.531 210.46L598.652 245.21L600.02 247.01L600.829 249L601.098 251.12L600.829 253.24L600.02 255.24L598.652 257.04L583.145 272.56L581.358 273.93L579.361 274.74L577.244 275.01L575.127 274.74L573.14 273.93L571.343 272.56L536.645 233.38L535.277 231.58L534.468 229.59L534.199 227.46L534.468 225.34L535.277 223.35L536.645 221.55Z" fill="url(#paint8_linear_1_446)"${_scopeId}></path><path d="M536.645 221.55L547.718 210.46L549.516 209.09L551.503 208.28L553.62 208.01L555.736 208.28L557.733 209.09L559.531 210.46L598.652 245.21L600.02 247.01L600.829 249L601.098 251.12L600.829 253.24L600.02 255.24L598.652 257.04L583.145 272.56L581.358 273.93L579.361 274.74L577.244 275.01L575.127 274.74L573.14 273.93L571.343 272.56L536.645 233.38L535.277 231.58L534.468 229.59L534.199 227.46L534.468 225.34L535.277 223.35L536.645 221.55Z" fill="url(#paint9_linear_1_446)"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M487.768 224.01L481.837 223.76L476.116 223.06L470.574 221.93L465.202 220.36L459.94 218.37L454.937 216.02L450.165 213.3L445.601 210.21L441.288 206.78L437.284 203.07L433.579 199.06L430.155 194.74L427.069 190.17L424.353 185.39L422.007 180.38L420.02 175.11L418.452 169.73L417.324 164.18L416.625 158.45L416.375 152.51L416.625 146.57L417.324 140.84L418.452 135.29L420.02 129.91L422.007 124.64L424.353 119.63L427.069 114.85L430.155 110.28L433.579 105.96L437.284 101.95L441.288 98.24L445.601 94.81L450.165 91.72L454.937 89L459.94 86.65L465.202 84.66L470.574 83.09L476.116 81.96L481.837 81.26L487.768 81.01L493.699 81.26L499.421 81.96L504.962 83.09L510.334 84.66L515.596 86.65L520.599 89L525.372 91.72L529.935 94.81L534.248 98.24L538.252 101.95L541.957 105.96L545.382 110.28L548.467 114.85L551.183 119.63L553.529 124.64L555.526 129.91L557.084 135.29L558.212 140.84L558.911 146.57L559.161 152.51L558.911 158.45L558.212 164.18L557.084 169.73L555.517 175.11L553.529 180.38L551.183 185.39L548.467 190.17L545.382 194.74L541.957 199.06L538.252 203.07L534.248 206.78L529.935 210.21L525.372 213.3L520.599 216.02L515.596 218.37L510.334 220.36L504.962 221.93L499.421 223.06L493.699 223.76L487.768 224.01ZM487.768 95.91L482.516 96.19L477.504 96.95L472.701 98.18L468.088 99.89L463.634 102.04L459.481 104.56L455.616 107.46L452.012 110.74L448.737 114.35L445.841 118.22L443.325 122.38L441.168 126.84L439.471 131.46L438.242 136.27L437.484 141.29L437.194 146.55L437.484 151.81L438.242 156.83L439.471 161.64L441.168 166.27L443.325 170.73L445.841 174.88L448.737 178.76L452.012 182.36L455.616 185.64L459.481 188.54L463.634 191.06L468.088 193.22L472.701 194.92L477.504 196.15L482.516 196.92L487.768 197.2L493.02 196.92L498.033 196.15L502.836 194.92L507.449 193.22L511.902 191.06L516.056 188.54L519.92 185.64L523.525 182.36L526.8 178.76L529.695 174.88L532.211 170.73L534.368 166.27L536.066 161.64L537.294 156.83L538.053 151.81L538.342 146.55L538.053 141.29L537.294 136.27L536.066 131.46L534.368 126.84L532.211 122.38L529.695 118.22L526.8 114.35L523.525 110.74L519.92 107.46L516.056 104.56L511.902 102.04L507.449 99.89L502.836 98.18L498.033 96.95L493.02 96.19L487.768 95.91Z" fill="#E5E5E5"${_scopeId}></path><path d="M487.768 224.01L481.837 223.76L476.116 223.06L470.574 221.93L465.202 220.36L459.94 218.37L454.937 216.02L450.165 213.3L445.601 210.21L441.288 206.78L437.284 203.07L433.579 199.06L430.155 194.74L427.069 190.17L424.353 185.39L422.007 180.38L420.02 175.11L418.452 169.73L417.324 164.18L416.625 158.45L416.375 152.51L416.625 146.57L417.324 140.84L418.452 135.29L420.02 129.91L422.007 124.64L424.353 119.63L427.069 114.85L430.155 110.28L433.579 105.96L437.284 101.95L441.288 98.24L445.601 94.81L450.165 91.72L454.937 89L459.94 86.65L465.202 84.66L470.574 83.09L476.116 81.96L481.837 81.26L487.768 81.01L493.699 81.26L499.421 81.96L504.962 83.09L510.334 84.66L515.596 86.65L520.599 89L525.372 91.72L529.935 94.81L534.248 98.24L538.252 101.95L541.957 105.96L545.382 110.28L548.467 114.85L551.183 119.63L553.529 124.64L555.526 129.91L557.084 135.29L558.212 140.84L558.911 146.57L559.161 152.51L558.911 158.45L558.212 164.18L557.084 169.73L555.517 175.11L553.529 180.38L551.183 185.39L548.467 190.17L545.382 194.74L541.957 199.06L538.252 203.07L534.248 206.78L529.935 210.21L525.372 213.3L520.599 216.02L515.596 218.37L510.334 220.36L504.962 221.93L499.421 223.06L493.699 223.76L487.768 224.01ZM487.768 95.91L482.516 96.19L477.504 96.95L472.701 98.18L468.088 99.89L463.634 102.04L459.481 104.56L455.616 107.46L452.012 110.74L448.737 114.35L445.841 118.22L443.325 122.38L441.168 126.84L439.471 131.46L438.242 136.27L437.484 141.29L437.194 146.55L437.484 151.81L438.242 156.83L439.471 161.64L441.168 166.27L443.325 170.73L445.841 174.88L448.737 178.76L452.012 182.36L455.616 185.64L459.481 188.54L463.634 191.06L468.088 193.22L472.701 194.92L477.504 196.15L482.516 196.92L487.768 197.2L493.02 196.92L498.033 196.15L502.836 194.92L507.449 193.22L511.902 191.06L516.056 188.54L519.92 185.64L523.525 182.36L526.8 178.76L529.695 174.88L532.211 170.73L534.368 166.27L536.066 161.64L537.294 156.83L538.053 151.81L538.342 146.55L538.053 141.29L537.294 136.27L536.066 131.46L534.368 126.84L532.211 122.38L529.695 118.22L526.8 114.35L523.525 110.74L519.92 107.46L516.056 104.56L511.902 102.04L507.449 99.89L502.836 98.18L498.033 96.95L493.02 96.19L487.768 95.91Z" fill="url(#paint10_linear_1_446)"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M487.768 219.01L481.837 218.76L476.116 218.06L470.574 216.93L465.202 215.36L459.94 213.37L454.937 211.02L450.165 208.3L445.601 205.21L441.288 201.78L437.284 198.07L433.579 194.06L430.155 189.74L427.069 185.17L424.353 180.39L422.007 175.38L420.02 170.11L418.452 164.73L417.324 159.18L416.625 153.45L416.375 147.51L416.625 141.57L417.324 135.84L418.452 130.29L420.02 124.91L422.007 119.64L424.353 114.63L427.069 109.85L430.155 105.28L433.579 100.96L437.284 96.95L441.288 93.24L445.601 89.81L450.165 86.72L454.937 84L459.94 81.65L465.202 79.66L470.574 78.09L476.116 76.96L481.837 76.26L487.768 76.01L493.699 76.26L499.421 76.96L504.962 78.09L510.334 79.66L515.596 81.65L520.599 84L525.372 86.72L529.935 89.81L534.248 93.24L538.252 96.95L541.957 100.96L545.382 105.28L548.467 109.85L551.183 114.63L553.529 119.64L555.526 124.91L557.084 130.29L558.212 135.84L558.911 141.57L559.161 147.51L558.911 153.45L558.212 159.18L557.084 164.73L555.517 170.11L553.529 175.38L551.183 180.39L548.467 185.17L545.382 189.74L541.957 194.06L538.252 198.07L534.248 201.78L529.935 205.21L525.372 208.3L520.599 211.02L515.596 213.37L510.334 215.36L504.962 216.93L499.421 218.06L493.699 218.76L487.768 219.01ZM487.768 96.86L482.516 97.15L477.504 97.91L472.701 99.14L468.088 100.84L463.634 103L459.481 105.52L455.616 108.42L452.012 111.7L448.737 115.31L445.841 119.18L443.325 123.34L441.168 127.8L439.471 132.42L438.242 137.23L437.484 142.25L437.194 147.51L437.484 152.77L438.242 157.79L439.471 162.6L441.168 167.22L443.325 171.68L445.841 175.84L448.737 179.71L452.012 183.32L455.616 186.6L459.481 189.5L463.634 192.02L468.088 194.18L472.701 195.88L477.504 197.11L482.516 197.87L487.768 198.16L493.02 197.87L498.033 197.11L502.836 195.88L507.449 194.18L511.902 192.02L516.056 189.5L519.92 186.6L523.525 183.32L526.8 179.71L529.695 175.84L532.211 171.68L534.368 167.22L536.066 162.6L537.294 157.79L538.053 152.77L538.342 147.51L538.053 142.25L537.294 137.23L536.066 132.42L534.368 127.8L532.211 123.34L529.695 119.18L526.8 115.31L523.525 111.7L519.92 108.42L516.056 105.52L511.902 103L507.449 100.84L502.836 99.14L498.033 97.91L493.02 97.15L487.768 96.86Z" fill="#E5E5E5"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M487.768 219.01L481.837 218.76L476.116 218.06L470.574 216.93L465.202 215.36L459.94 213.37L454.937 211.02L450.165 208.3L445.601 205.21L441.288 201.78L437.284 198.07L433.579 194.06L430.155 189.74L427.069 185.17L424.353 180.39L422.007 175.38L420.02 170.11L418.452 164.73L417.324 159.18L416.625 153.45L416.375 147.51L416.625 141.57L417.324 135.84L418.452 130.29L420.02 124.91L422.007 119.64L424.353 114.63L427.069 109.85L430.155 105.28L433.579 100.96L437.284 96.95L441.288 93.24L445.601 89.81L450.165 86.72L454.937 84L459.94 81.65L465.202 79.66L470.574 78.09L476.116 76.96L481.837 76.26L487.768 76.01L493.699 76.26L499.421 76.96L504.962 78.09L510.334 79.66L515.596 81.65L520.599 84L525.372 86.72L529.935 89.81L534.248 93.24L538.252 96.95L541.957 100.96L545.382 105.28L548.467 109.85L551.183 114.63L553.529 119.64L555.526 124.91L557.084 130.29L558.212 135.84L558.911 141.57L559.161 147.51L558.911 153.45L558.212 159.18L557.084 164.73L555.517 170.11L553.529 175.38L551.183 180.39L548.467 185.17L545.382 189.74L541.957 194.06L538.252 198.07L534.248 201.78L529.935 205.21L525.372 208.3L520.599 211.02L515.596 213.37L510.334 215.36L504.962 216.93L499.421 218.06L493.699 218.76L487.768 219.01ZM487.768 96.86L482.516 97.15L477.504 97.91L472.701 99.14L468.088 100.84L463.634 103L459.481 105.52L455.616 108.42L452.012 111.7L448.737 115.31L445.841 119.18L443.325 123.34L441.168 127.8L439.471 132.42L438.242 137.23L437.484 142.25L437.194 147.51L437.484 152.77L438.242 157.79L439.471 162.6L441.168 167.22L443.325 171.68L445.841 175.84L448.737 179.71L452.012 183.32L455.616 186.6L459.481 189.5L463.634 192.02L468.088 194.18L472.701 195.88L477.504 197.11L482.516 197.87L487.768 198.16L493.02 197.87L498.033 197.11L502.836 195.88L507.449 194.18L511.902 192.02L516.056 189.5L519.92 186.6L523.525 183.32L526.8 179.71L529.695 175.84L532.211 171.68L534.368 167.22L536.066 162.6L537.294 157.79L538.053 152.77L538.342 147.51L538.053 142.25L537.294 137.23L536.066 132.42L534.368 127.8L532.211 123.34L529.695 119.18L526.8 115.31L523.525 111.7L519.92 108.42L516.056 105.52L511.902 103L507.449 100.84L502.836 99.14L498.033 97.91L493.02 97.15L487.768 96.86Z" fill="url(#paint11_linear_1_446)"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M491.053 79L485.102 79.25L479.361 79.95L473.789 81.09L468.397 82.66L463.115 84.66L458.083 87.03L453.29 89.76L448.717 92.86L444.383 96.3L440.359 100.03L436.635 104.06L433.2 108.4L430.105 112.98L427.379 117.78L425.012 122.82L423.015 128.11L421.448 133.51L420.309 139.09L419.61 144.84L419.361 150.8L419.64 157.14L420.439 163.26L421.747 169.18L423.554 174.96L425.801 180.49L428.487 185.77L431.592 190.82L435.077 195.56L438.941 200.01L434.508 195.45L430.514 190.53L426.929 185.23L423.824 179.64L421.238 173.77L419.141 167.59L417.633 161.24L416.705 154.66L416.375 147.81L416.625 141.85L417.324 136.09L418.462 130.52L420.03 125.12L422.027 119.83L424.393 114.79L427.109 109.99L430.204 105.41L433.649 101.07L437.374 97.04L441.398 93.31L445.731 89.86L450.304 86.76L455.097 84.04L460.13 81.67L465.412 79.67L470.804 78.1L476.365 76.96L482.117 76.26L488.068 76.01L494.907 76.34L501.478 77.27L507.818 78.78L513.989 80.88L519.85 83.47L525.432 86.58L530.724 90.17L535.626 94.17L540.19 98.61L535.746 94.74L531.013 91.25L525.971 88.14L520.699 85.45L515.177 83.2L509.406 81.39L503.495 80.08L497.384 79.28L491.053 79Z" fill="#E6ECFF" fill-opacity="0.8"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M485.082 216.04L490.983 215.79L496.685 215.1L502.207 213.97L507.559 212.41L512.801 210.43L517.783 208.08L522.546 205.38L527.079 202.3L531.383 198.88L535.367 195.18L539.061 191.19L542.476 186.88L545.552 182.34L548.248 177.57L550.594 172.58L552.571 167.33L554.129 161.97L555.257 156.44L555.946 150.73L556.196 144.82L555.916 138.53L555.127 132.46L553.829 126.59L552.042 120.85L549.815 115.37L547.149 110.13L544.064 105.12L540.609 100.42L536.775 96.01L541.168 100.54L545.142 105.42L548.697 110.67L551.772 116.21L554.338 122.04L556.415 128.17L557.913 134.47L558.832 141L559.161 147.78L558.912 153.7L558.223 159.41L557.094 164.94L555.537 170.3L553.55 175.54L551.213 180.54L548.507 185.3L545.442 189.85L542.027 194.15L538.332 198.15L534.338 201.85L530.045 205.27L525.502 208.34L520.749 211.05L515.756 213.39L510.524 215.38L505.172 216.94L499.651 218.07L493.949 218.76L488.038 219.01L481.268 218.68L474.748 217.76L468.457 216.26L462.337 214.18L456.515 211.61L450.983 208.53L445.741 204.97L440.869 200.99L436.345 196.59L440.749 200.43L445.442 203.89L450.444 206.98L455.676 209.65L461.148 211.88L466.88 213.67L472.741 214.97L478.802 215.76L485.082 216.04Z" fill="#F6F8FF"${_scopeId}></path><path d="M487.768 97.01L493 97.29L498.003 98.05L502.786 99.28L507.399 100.98L511.832 103.13L515.976 105.64L519.83 108.53L523.425 111.8L526.69 115.4L529.576 119.26L532.082 123.41L534.229 127.85L535.926 132.47L537.154 137.26L537.913 142.27L538.193 147.51L537.913 152.75L537.154 157.76L535.926 162.55L534.229 167.17L532.082 171.61L529.576 175.76L526.69 179.62L523.425 183.22L519.83 186.49L515.976 189.38L511.832 191.89L507.399 194.04L502.786 195.74L498.003 196.97L493 197.73L487.768 198.01L482.536 197.73L477.534 196.97L472.751 195.74L468.138 194.04L463.704 191.89L459.561 189.38L455.706 186.49L452.112 183.22L448.847 179.62L445.961 175.76L443.455 171.61L441.308 167.17L439.611 162.55L438.382 157.76L437.624 152.75L437.344 147.51L437.624 142.27L438.382 137.26L439.611 132.47L441.308 127.85L443.455 123.41L445.961 119.26L448.847 115.4L452.112 111.8L455.706 108.53L459.561 105.64L463.704 103.13L468.138 100.98L472.751 99.28L477.534 98.05L482.536 97.29L487.768 97.01Z" fill="url(#paint12_linear_1_446)"${_scopeId}></path><path d="M615.706 35.5L615.367 40.38L614.438 44.97L612.921 49.32L610.854 53.44L608.327 57.19L605.322 60.6L601.917 63.61L598.173 66.14L594.059 68.21L589.715 69.73L585.132 70.66L580.26 71L575.387 70.66L570.804 69.73L566.46 68.21L562.346 66.14L558.602 63.61L555.197 60.6L552.192 57.19L549.665 53.44L547.599 49.32L546.081 44.97L545.152 40.38L544.813 35.5L545.152 30.62L546.081 26.03L547.599 21.68L549.665 17.56L552.192 13.81L555.197 10.4L558.602 7.39001L562.346 4.86002L566.46 2.79001L570.804 1.27002L575.387 0.339996L580.26 0L585.132 0.339996L589.715 1.27002L594.059 2.79001L598.173 4.86002L601.917 7.39001L605.322 10.4L608.327 13.81L610.854 17.56L612.921 21.68L614.438 26.03L615.367 30.62L615.706 35.5Z" fill="url(#paint13_radial_1_446)"${_scopeId}></path><path d="M274.218 174.5L273.889 178.06L273 181.32L271.562 184.34L269.625 187.08L267.309 189.4L264.573 191.34L261.557 192.78L258.302 193.67L254.748 194L251.193 193.67L247.938 192.78L244.922 191.34L242.186 189.4L239.87 187.08L237.933 184.34L236.495 181.32L235.606 178.06L235.277 174.5L235.606 170.94L236.495 167.68L237.933 164.66L239.87 161.92L242.186 159.6L244.922 157.66L247.938 156.22L251.193 155.33L254.748 155L258.302 155.33L261.557 156.22L264.573 157.66L267.309 159.6L269.625 161.92L271.562 164.66L273 167.68L273.889 170.94L274.218 174.5Z" fill="url(#paint14_radial_1_446)" fill-opacity="0.562533"${_scopeId}></path></g><defs${_scopeId}><radialGradient id="paint0_radial_1_446" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(420.369 202.929) rotate(90) scale(197.683 597.772)"${_scopeId}><stop stop-color="#0052D9" stop-opacity="0.151562"${_scopeId}></stop><stop offset="1" stop-color="#0052D9" stop-opacity="0"${_scopeId}></stop></radialGradient><linearGradient id="paint1_linear_1_446" x1="150.29" y1="261" x2="150.29" y2="341" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#72A0E8"${_scopeId}></stop><stop offset="0.993995" stop-color="#3981F7"${_scopeId}></stop></linearGradient><linearGradient id="paint2_linear_1_446" x1="127.823" y1="261" x2="127.823" y2="341" gradientUnits="userSpaceOnUse"${_scopeId}><stop offset="0.0127619" stop-color="#B7D2FF"${_scopeId}></stop><stop offset="1" stop-color="#93BBFF"${_scopeId}></stop></linearGradient><linearGradient id="paint3_linear_1_446" x1="724.044" y1="226" x2="724.044" y2="288" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#72A0E8"${_scopeId}></stop><stop offset="0.993995" stop-color="#3981F7"${_scopeId}></stop></linearGradient><linearGradient id="paint4_linear_1_446" x1="706.57" y1="226" x2="706.57" y2="288" gradientUnits="userSpaceOnUse"${_scopeId}><stop offset="0.0127619" stop-color="#B7D2FF"${_scopeId}></stop><stop offset="1" stop-color="#93BBFF"${_scopeId}></stop></linearGradient><linearGradient id="paint5_linear_1_446" x1="198.332" y1="194" x2="198.332" y2="254" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#72A0E8"${_scopeId}></stop><stop offset="0.993995" stop-color="#3981F7"${_scopeId}></stop></linearGradient><linearGradient id="paint6_linear_1_446" x1="181.358" y1="194" x2="181.358" y2="254" gradientUnits="userSpaceOnUse"${_scopeId}><stop offset="0.0127619" stop-color="#B7D2FF"${_scopeId}></stop><stop offset="1" stop-color="#93BBFF"${_scopeId}></stop></linearGradient><linearGradient id="paint7_linear_1_446" x1="458.179" y1="170.654" x2="311.495" y2="19.6947" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#5E9BFF"${_scopeId}></stop><stop offset="1" stop-color="#E2EDFF"${_scopeId}></stop></linearGradient><linearGradient id="paint8_linear_1_446" x1="576.376" y1="260.079" x2="533.83" y2="208.072" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#5B7FFF"${_scopeId}></stop><stop offset="0.99" stop-color="#92A9FD"${_scopeId}></stop></linearGradient><linearGradient id="paint9_linear_1_446" x1="534.199" y1="275.01" x2="534.199" y2="208.01" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#4D89EC"${_scopeId}></stop><stop offset="0.986673" stop-color="#B3D0FF"${_scopeId}></stop></linearGradient><linearGradient id="paint10_linear_1_446" x1="416.375" y1="224.01" x2="416.375" y2="81.01" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#4484EF"${_scopeId}></stop><stop offset="1" stop-color="#82B1FF"${_scopeId}></stop></linearGradient><linearGradient id="paint11_linear_1_446" x1="547.364" y1="163.727" x2="426.3" y2="62.8884" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#5E9BFF"${_scopeId}></stop><stop offset="1" stop-color="#E2EDFF"${_scopeId}></stop></linearGradient><linearGradient id="paint12_linear_1_446" x1="437.344" y1="198.01" x2="437.344" y2="97.01" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#B3C3FF" stop-opacity="0.50196"${_scopeId}></stop><stop offset="1" stop-color="#EDF1FF"${_scopeId}></stop></linearGradient><radialGradient id="paint13_radial_1_446" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(561.857 35.5) scale(46.9099 46.9803)"${_scopeId}><stop stop-color="#F2F7FF"${_scopeId}></stop><stop offset="1" stop-color="#99C0FF"${_scopeId}></stop></radialGradient><radialGradient id="paint14_radial_1_446" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(244.639 174.5) scale(25.7674 25.8061)"${_scopeId}><stop stop-color="#F2F7FF"${_scopeId}></stop><stop offset="1" stop-color="#99C0FF"${_scopeId}></stop></radialGradient><clipPath id="clip0_1_446"${_scopeId}><rect width="840" height="363" fill="white"${_scopeId}></rect></clipPath></defs></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "840",
                height: "363",
                viewBox: "0 0 840 363",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("g", { "clip-path": "url(#clip0_1_446)" }, [
                  createVNode("path", {
                    d: "M840 318.5L839.77 322.623L839.081 326.72L837.953 330.789L836.375 334.841L834.348 338.88L831.862 342.9L828.348 347.621L824.224 352.302L819.481 356.943L814.089 361.557L808.028 366.145L801.568 370.531L794.498 374.864L786.8 379.148L778.452 383.383L769.436 387.573L760.2 391.518L750.354 395.382L739.89 399.175L728.777 402.892L716.985 406.534L705.072 409.929L692.731 413.178L679.95 416.288L666.72 419.26L653.02 422.08L639.261 424.686L625.162 427.136L610.714 429.425L595.906 431.554L580.729 433.522L565.552 435.285L550.135 436.873L534.458 438.288L518.522 439.524L502.317 440.586L486.161 441.447L469.845 442.121L453.39 442.607L436.775 442.897L420 443L403.225 442.897L386.61 442.607L370.155 442.121L353.839 441.447L337.683 440.586L321.478 439.524L305.542 438.288L289.865 436.873L274.448 435.285L259.271 433.522L244.094 431.554L229.286 429.425L214.838 427.136L200.739 424.686L186.98 422.08L173.28 419.26L160.05 416.288L147.269 413.178L134.928 409.929L123.015 406.534L111.223 402.892L100.11 399.175L89.6455 395.382L79.8003 391.518L70.5642 387.573L61.5477 383.383L53.2002 379.148L45.5018 374.864L38.4324 370.531L31.972 366.145L25.9111 361.557L20.5192 356.943L15.7763 352.302L11.6525 347.621L8.13779 342.9L5.65153 338.88L3.62456 334.841L2.04693 330.789L0.91862 326.72L0.229659 322.623L0 318.5L0.229659 314.377L0.91862 310.28L2.04693 306.211L3.62456 302.159L5.65153 298.12L8.13779 294.1L11.6525 289.379L15.7763 284.698L20.5192 280.057L25.9111 275.443L31.972 270.855L38.4324 266.469L45.5018 262.136L53.2002 257.852L61.5477 253.617L70.5642 249.427L79.8003 245.482L89.6455 241.618L100.11 237.825L111.223 234.108L123.015 230.466L134.928 227.071L147.269 223.822L160.05 220.712L173.28 217.74L186.98 214.92L200.739 212.314L214.838 209.864L229.286 207.575L244.094 205.446L259.271 203.478L274.448 201.715L289.865 200.127L305.542 198.712L321.478 197.476L337.683 196.414L353.839 195.553L370.155 194.879L386.61 194.393L403.225 194.103L420 194L436.775 194.103L453.39 194.393L469.845 194.879L486.161 195.553L502.317 196.414L518.522 197.476L534.458 198.712L550.135 200.127L565.552 201.715L580.729 203.478L595.906 205.446L610.714 207.575L625.162 209.864L639.261 212.314L653.02 214.92L666.72 217.74L679.95 220.712L692.731 223.822L705.072 227.071L716.985 230.466L728.777 234.108L739.89 237.825L750.354 241.618L760.2 245.482L769.436 249.427L778.452 253.617L786.8 257.852L794.498 262.136L801.568 266.469L808.028 270.855L814.089 275.443L819.481 280.057L824.224 284.698L828.348 289.379L831.862 294.1L834.348 298.12L836.375 302.159L837.953 306.211L839.081 310.28L839.77 314.377L840 318.5Z",
                    fill: "url(#paint0_radial_1_446)"
                  }),
                  createVNode("path", {
                    d: "M138.193 291H148.557V345.67L148.358 347.12L147.858 348.36L147.04 349.44L145.991 350.28L144.783 350.8L143.375 351L141.967 350.8L140.769 350.28L139.711 349.44L138.902 348.36L138.393 347.12L138.193 345.67V291Z",
                    fill: "#3F78D6"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M138.193 261L162.387 324.33L138.193 341V261Z",
                    fill: "url(#paint1_linear_1_446)"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M138.193 261L117.454 331L138.193 341V261Z",
                    fill: "url(#paint2_linear_1_446)"
                  }),
                  createVNode("path", {
                    d: "M714.558 249H722.546V291.82L722.226 293.46L721.378 294.78L720.11 295.67L718.552 296L716.994 295.67L715.726 294.78L714.877 293.46L714.558 291.82V249Z",
                    fill: "#3F78D6"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M714.558 226L733.529 275.08L714.558 288V226Z",
                    fill: "url(#paint3_linear_1_446)"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M714.558 226L698.582 280.25L714.558 288V226Z",
                    fill: "url(#paint4_linear_1_446)"
                  }),
                  createVNode("path", {
                    d: "M189.346 217H197.334V258L197.014 259.57L196.166 260.83L194.908 261.68L193.34 262L191.772 261.68L190.514 260.83L189.665 259.57L189.346 258V217Z",
                    fill: "#3F78D6"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M189.346 194L207.319 241.5L189.346 254V194Z",
                    fill: "url(#paint5_linear_1_446)"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M189.346 194L173.37 246.5L189.346 254V194Z",
                    fill: "url(#paint6_linear_1_446)"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M315.357 13.01H487.439L490.694 13.31L493.67 14.13L496.425 15.46L498.922 17.24L501.038 19.37L502.816 21.89L504.124 24.67L504.943 27.67L505.242 30.94V252.08L504.943 255.35L504.124 258.35L502.816 261.13L501.038 263.65L498.922 265.78L496.425 267.56L493.67 268.89L490.694 269.71L487.439 270.01H315.357L312.102 269.71L309.126 268.89L306.37 267.56L303.874 265.78L301.757 263.65L299.98 261.13L298.672 258.35L297.853 255.35L297.554 252.08V30.94L297.853 27.67L298.672 24.67L299.98 21.89L301.757 19.37L303.874 17.24L306.37 15.46L309.126 14.13L312.102 13.31L315.357 13.01Z",
                    fill: "#A2D2FE"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M315.357 13.01H487.439L490.694 13.31L493.67 14.13L496.425 15.46L498.922 17.24L501.038 19.37L502.816 21.89L504.124 24.67L504.943 27.67L505.242 30.94V252.08L504.943 255.35L504.124 258.35L502.816 261.13L501.038 263.65L498.922 265.78L496.425 267.56L493.67 268.89L490.694 269.71L487.439 270.01H315.357L312.102 269.71L309.126 268.89L306.37 267.56L303.874 265.78L301.757 263.65L299.98 261.13L298.672 258.35L297.853 255.35L297.554 252.08V30.94L297.853 27.67L298.672 24.67L299.98 21.89L301.757 19.37L303.874 17.24L306.37 15.46L309.126 14.13L312.102 13.31L315.357 13.01Z",
                    fill: "url(#paint7_linear_1_446)"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M461.358 75.92H372.172L370.554 75.69L369.166 75.11L367.968 74.17L367.029 72.97L366.45 71.58L366.221 69.96L366.45 68.35L367.029 66.96L367.968 65.75L369.166 64.82L370.554 64.24L372.172 64.01H461.358L462.965 64.24L464.353 64.82L465.562 65.75L466.49 66.96L467.069 68.35L467.299 69.96L467.069 71.58L466.49 72.97L465.562 74.17L464.353 75.11L462.965 75.69L461.358 75.92ZM372.172 141.41H395.956L397.564 141.63L398.951 142.21L400.16 143.15L401.088 144.36L401.667 145.74L401.897 147.36L401.667 148.98L401.088 150.36L400.16 151.57L398.951 152.51L397.564 153.08L395.956 153.31H372.172L370.554 153.08L369.166 152.5L367.968 151.57L367.029 150.36L366.45 148.98L366.221 147.36L366.45 145.74L367.029 144.36L367.968 143.15L369.166 142.21L370.554 141.63L372.172 141.41ZM351.363 192.01H342.436L340.829 191.78L339.441 191.2L338.233 190.27L337.304 189.06L336.725 187.67L336.495 186.06L336.725 184.44L337.304 183.05L338.233 181.85L339.441 180.91L340.829 180.33L342.436 180.1H351.363L352.97 180.33L354.358 180.91L355.567 181.85L356.495 183.05L357.074 184.44L357.304 186.06L357.074 187.67L356.495 189.06L355.567 190.27L354.358 191.2L352.97 191.78L351.363 192.01ZM351.363 153.31H342.436L340.829 153.08L339.441 152.5L338.233 151.57L337.304 150.36L336.725 148.98L336.495 147.36L336.725 145.74L337.304 144.36L338.233 143.15L339.441 142.21L340.829 141.63L342.436 141.41H351.363L352.97 141.63L354.358 142.21L355.567 143.15L356.495 144.36L357.074 145.74L357.304 147.36L357.074 148.98L356.495 150.36L355.567 151.57L354.358 152.51L352.97 153.08L351.363 153.31ZM351.363 114.61H342.436L340.829 114.39L339.441 113.81L338.233 112.87L337.304 111.66L336.725 110.28L336.495 108.66L336.725 107.04L337.304 105.66L338.233 104.45L339.441 103.52L340.829 102.94L342.436 102.71H351.363L352.97 102.94L354.358 103.51L355.567 104.45L356.495 105.66L357.074 107.04L357.304 108.66L357.074 110.28L356.495 111.66L355.567 112.87L354.358 113.81L352.97 114.39L351.363 114.61ZM351.363 75.92H342.436L340.829 75.69L339.441 75.11L338.233 74.17L337.304 72.97L336.725 71.58L336.495 69.96L336.725 68.35L337.304 66.96L338.233 65.75L339.441 64.82L340.829 64.24L342.436 64.01H351.363L352.97 64.24L354.358 64.82L355.567 65.75L356.495 66.96L357.074 68.35L357.304 69.96L357.074 71.58L356.495 72.97L355.567 74.17L354.358 75.11L352.97 75.69L351.363 75.92ZM372.172 180.1H395.956L397.564 180.33L398.951 180.91L400.16 181.85L401.088 183.05L401.667 184.44L401.897 186.06L401.667 187.67L401.088 189.06L400.16 190.27L398.951 191.2L397.564 191.78L395.956 192.01H372.172L370.554 191.78L369.166 191.2L367.968 190.27L367.029 189.06L366.45 187.67L366.221 186.06L366.45 184.44L367.029 183.05L367.968 181.85L369.166 180.91L370.554 180.33L372.172 180.1ZM366.221 108.66L366.45 107.04L367.029 105.66L367.968 104.45L369.166 103.52L370.554 102.94L372.172 102.71H458.382L460 102.94L461.378 103.52L462.586 104.45L463.525 105.66L464.094 107.04L464.323 108.66L464.094 110.28L463.525 111.66L462.586 112.87L461.378 113.81L460 114.39L458.382 114.61H372.172L370.554 114.39L369.166 113.81L367.968 112.87L367.029 111.66L366.45 110.28L366.221 108.66Z",
                    fill: "#F9FAFF"
                  }),
                  createVNode("path", {
                    d: "M461.358 75.92H372.172L370.554 75.69L369.166 75.11L367.968 74.17L367.029 72.97L366.45 71.58L366.221 69.96L366.45 68.35L367.029 66.96L367.968 65.75L369.166 64.82L370.554 64.24L372.172 64.01H461.358L462.965 64.24L464.353 64.82L465.562 65.75L466.49 66.96L467.069 68.35L467.299 69.96L467.069 71.58L466.49 72.97L465.562 74.17L464.353 75.11L462.965 75.69L461.358 75.92ZM372.172 141.41H395.956L397.564 141.63L398.951 142.21L400.16 143.15L401.088 144.36L401.667 145.74L401.897 147.36L401.667 148.98L401.088 150.36L400.16 151.57L398.951 152.51L397.564 153.08L395.956 153.31H372.172L370.554 153.08L369.166 152.5L367.968 151.57L367.029 150.36L366.45 148.98L366.221 147.36L366.45 145.74L367.029 144.36L367.968 143.15L369.166 142.21L370.554 141.63L372.172 141.41ZM351.363 192.01H342.436L340.829 191.78L339.441 191.2L338.233 190.27L337.304 189.06L336.725 187.67L336.495 186.06L336.725 184.44L337.304 183.05L338.233 181.85L339.441 180.91L340.829 180.33L342.436 180.1H351.363L352.97 180.33L354.358 180.91L355.567 181.85L356.495 183.05L357.074 184.44L357.304 186.06L357.074 187.67L356.495 189.06L355.567 190.27L354.358 191.2L352.97 191.78L351.363 192.01ZM351.363 153.31H342.436L340.829 153.08L339.441 152.5L338.233 151.57L337.304 150.36L336.725 148.98L336.495 147.36L336.725 145.74L337.304 144.36L338.233 143.15L339.441 142.21L340.829 141.63L342.436 141.41H351.363L352.97 141.63L354.358 142.21L355.567 143.15L356.495 144.36L357.074 145.74L357.304 147.36L357.074 148.98L356.495 150.36L355.567 151.57L354.358 152.51L352.97 153.08L351.363 153.31ZM351.363 114.61H342.436L340.829 114.39L339.441 113.81L338.233 112.87L337.304 111.66L336.725 110.28L336.495 108.66L336.725 107.04L337.304 105.66L338.233 104.45L339.441 103.52L340.829 102.94L342.436 102.71H351.363L352.97 102.94L354.358 103.51L355.567 104.45L356.495 105.66L357.074 107.04L357.304 108.66L357.074 110.28L356.495 111.66L355.567 112.87L354.358 113.81L352.97 114.39L351.363 114.61ZM351.363 75.92H342.436L340.829 75.69L339.441 75.11L338.233 74.17L337.304 72.97L336.725 71.58L336.495 69.96L336.725 68.35L337.304 66.96L338.233 65.75L339.441 64.82L340.829 64.24L342.436 64.01H351.363L352.97 64.24L354.358 64.82L355.567 65.75L356.495 66.96L357.074 68.35L357.304 69.96L357.074 71.58L356.495 72.97L355.567 74.17L354.358 75.11L352.97 75.69L351.363 75.92ZM372.172 180.1H395.956L397.564 180.33L398.951 180.91L400.16 181.85L401.088 183.05L401.667 184.44L401.897 186.06L401.667 187.67L401.088 189.06L400.16 190.27L398.951 191.2L397.564 191.78L395.956 192.01H372.172L370.554 191.78L369.166 191.2L367.968 190.27L367.029 189.06L366.45 187.67L366.221 186.06L366.45 184.44L367.029 183.05L367.968 181.85L369.166 180.91L370.554 180.33L372.172 180.1ZM366.221 108.66L366.45 107.04L367.029 105.66L367.968 104.45L369.166 103.52L370.554 102.94L372.172 102.71H458.382L460 102.94L461.378 103.52L462.586 104.45L463.525 105.66L464.094 107.04L464.323 108.66L464.094 110.28L463.525 111.66L462.586 112.87L461.378 113.81L460 114.39L458.382 114.61H372.172L370.554 114.39L369.166 113.81L367.968 112.87L367.029 111.66L366.45 110.28L366.221 108.66Z",
                    fill: "white"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M518.222 204.69L530.594 192.01L561.158 223.33L548.787 236.01L518.222 204.69Z",
                    fill: "#6A9BED"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M536.645 221.55L547.718 210.46L549.516 209.09L551.503 208.28L553.62 208.01L555.736 208.28L557.733 209.09L559.531 210.46L598.652 245.21L600.02 247.01L600.829 249L601.098 251.12L600.829 253.24L600.02 255.24L598.652 257.04L583.145 272.56L581.358 273.93L579.361 274.74L577.244 275.01L575.127 274.74L573.14 273.93L571.343 272.56L536.645 233.38L535.277 231.58L534.468 229.59L534.199 227.46L534.468 225.34L535.277 223.35L536.645 221.55Z",
                    fill: "#999999"
                  }),
                  createVNode("path", {
                    d: "M536.645 221.55L547.718 210.46L549.516 209.09L551.503 208.28L553.62 208.01L555.736 208.28L557.733 209.09L559.531 210.46L598.652 245.21L600.02 247.01L600.829 249L601.098 251.12L600.829 253.24L600.02 255.24L598.652 257.04L583.145 272.56L581.358 273.93L579.361 274.74L577.244 275.01L575.127 274.74L573.14 273.93L571.343 272.56L536.645 233.38L535.277 231.58L534.468 229.59L534.199 227.46L534.468 225.34L535.277 223.35L536.645 221.55Z",
                    fill: "url(#paint8_linear_1_446)"
                  }),
                  createVNode("path", {
                    d: "M536.645 221.55L547.718 210.46L549.516 209.09L551.503 208.28L553.62 208.01L555.736 208.28L557.733 209.09L559.531 210.46L598.652 245.21L600.02 247.01L600.829 249L601.098 251.12L600.829 253.24L600.02 255.24L598.652 257.04L583.145 272.56L581.358 273.93L579.361 274.74L577.244 275.01L575.127 274.74L573.14 273.93L571.343 272.56L536.645 233.38L535.277 231.58L534.468 229.59L534.199 227.46L534.468 225.34L535.277 223.35L536.645 221.55Z",
                    fill: "url(#paint9_linear_1_446)"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M487.768 224.01L481.837 223.76L476.116 223.06L470.574 221.93L465.202 220.36L459.94 218.37L454.937 216.02L450.165 213.3L445.601 210.21L441.288 206.78L437.284 203.07L433.579 199.06L430.155 194.74L427.069 190.17L424.353 185.39L422.007 180.38L420.02 175.11L418.452 169.73L417.324 164.18L416.625 158.45L416.375 152.51L416.625 146.57L417.324 140.84L418.452 135.29L420.02 129.91L422.007 124.64L424.353 119.63L427.069 114.85L430.155 110.28L433.579 105.96L437.284 101.95L441.288 98.24L445.601 94.81L450.165 91.72L454.937 89L459.94 86.65L465.202 84.66L470.574 83.09L476.116 81.96L481.837 81.26L487.768 81.01L493.699 81.26L499.421 81.96L504.962 83.09L510.334 84.66L515.596 86.65L520.599 89L525.372 91.72L529.935 94.81L534.248 98.24L538.252 101.95L541.957 105.96L545.382 110.28L548.467 114.85L551.183 119.63L553.529 124.64L555.526 129.91L557.084 135.29L558.212 140.84L558.911 146.57L559.161 152.51L558.911 158.45L558.212 164.18L557.084 169.73L555.517 175.11L553.529 180.38L551.183 185.39L548.467 190.17L545.382 194.74L541.957 199.06L538.252 203.07L534.248 206.78L529.935 210.21L525.372 213.3L520.599 216.02L515.596 218.37L510.334 220.36L504.962 221.93L499.421 223.06L493.699 223.76L487.768 224.01ZM487.768 95.91L482.516 96.19L477.504 96.95L472.701 98.18L468.088 99.89L463.634 102.04L459.481 104.56L455.616 107.46L452.012 110.74L448.737 114.35L445.841 118.22L443.325 122.38L441.168 126.84L439.471 131.46L438.242 136.27L437.484 141.29L437.194 146.55L437.484 151.81L438.242 156.83L439.471 161.64L441.168 166.27L443.325 170.73L445.841 174.88L448.737 178.76L452.012 182.36L455.616 185.64L459.481 188.54L463.634 191.06L468.088 193.22L472.701 194.92L477.504 196.15L482.516 196.92L487.768 197.2L493.02 196.92L498.033 196.15L502.836 194.92L507.449 193.22L511.902 191.06L516.056 188.54L519.92 185.64L523.525 182.36L526.8 178.76L529.695 174.88L532.211 170.73L534.368 166.27L536.066 161.64L537.294 156.83L538.053 151.81L538.342 146.55L538.053 141.29L537.294 136.27L536.066 131.46L534.368 126.84L532.211 122.38L529.695 118.22L526.8 114.35L523.525 110.74L519.92 107.46L516.056 104.56L511.902 102.04L507.449 99.89L502.836 98.18L498.033 96.95L493.02 96.19L487.768 95.91Z",
                    fill: "#E5E5E5"
                  }),
                  createVNode("path", {
                    d: "M487.768 224.01L481.837 223.76L476.116 223.06L470.574 221.93L465.202 220.36L459.94 218.37L454.937 216.02L450.165 213.3L445.601 210.21L441.288 206.78L437.284 203.07L433.579 199.06L430.155 194.74L427.069 190.17L424.353 185.39L422.007 180.38L420.02 175.11L418.452 169.73L417.324 164.18L416.625 158.45L416.375 152.51L416.625 146.57L417.324 140.84L418.452 135.29L420.02 129.91L422.007 124.64L424.353 119.63L427.069 114.85L430.155 110.28L433.579 105.96L437.284 101.95L441.288 98.24L445.601 94.81L450.165 91.72L454.937 89L459.94 86.65L465.202 84.66L470.574 83.09L476.116 81.96L481.837 81.26L487.768 81.01L493.699 81.26L499.421 81.96L504.962 83.09L510.334 84.66L515.596 86.65L520.599 89L525.372 91.72L529.935 94.81L534.248 98.24L538.252 101.95L541.957 105.96L545.382 110.28L548.467 114.85L551.183 119.63L553.529 124.64L555.526 129.91L557.084 135.29L558.212 140.84L558.911 146.57L559.161 152.51L558.911 158.45L558.212 164.18L557.084 169.73L555.517 175.11L553.529 180.38L551.183 185.39L548.467 190.17L545.382 194.74L541.957 199.06L538.252 203.07L534.248 206.78L529.935 210.21L525.372 213.3L520.599 216.02L515.596 218.37L510.334 220.36L504.962 221.93L499.421 223.06L493.699 223.76L487.768 224.01ZM487.768 95.91L482.516 96.19L477.504 96.95L472.701 98.18L468.088 99.89L463.634 102.04L459.481 104.56L455.616 107.46L452.012 110.74L448.737 114.35L445.841 118.22L443.325 122.38L441.168 126.84L439.471 131.46L438.242 136.27L437.484 141.29L437.194 146.55L437.484 151.81L438.242 156.83L439.471 161.64L441.168 166.27L443.325 170.73L445.841 174.88L448.737 178.76L452.012 182.36L455.616 185.64L459.481 188.54L463.634 191.06L468.088 193.22L472.701 194.92L477.504 196.15L482.516 196.92L487.768 197.2L493.02 196.92L498.033 196.15L502.836 194.92L507.449 193.22L511.902 191.06L516.056 188.54L519.92 185.64L523.525 182.36L526.8 178.76L529.695 174.88L532.211 170.73L534.368 166.27L536.066 161.64L537.294 156.83L538.053 151.81L538.342 146.55L538.053 141.29L537.294 136.27L536.066 131.46L534.368 126.84L532.211 122.38L529.695 118.22L526.8 114.35L523.525 110.74L519.92 107.46L516.056 104.56L511.902 102.04L507.449 99.89L502.836 98.18L498.033 96.95L493.02 96.19L487.768 95.91Z",
                    fill: "url(#paint10_linear_1_446)"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M487.768 219.01L481.837 218.76L476.116 218.06L470.574 216.93L465.202 215.36L459.94 213.37L454.937 211.02L450.165 208.3L445.601 205.21L441.288 201.78L437.284 198.07L433.579 194.06L430.155 189.74L427.069 185.17L424.353 180.39L422.007 175.38L420.02 170.11L418.452 164.73L417.324 159.18L416.625 153.45L416.375 147.51L416.625 141.57L417.324 135.84L418.452 130.29L420.02 124.91L422.007 119.64L424.353 114.63L427.069 109.85L430.155 105.28L433.579 100.96L437.284 96.95L441.288 93.24L445.601 89.81L450.165 86.72L454.937 84L459.94 81.65L465.202 79.66L470.574 78.09L476.116 76.96L481.837 76.26L487.768 76.01L493.699 76.26L499.421 76.96L504.962 78.09L510.334 79.66L515.596 81.65L520.599 84L525.372 86.72L529.935 89.81L534.248 93.24L538.252 96.95L541.957 100.96L545.382 105.28L548.467 109.85L551.183 114.63L553.529 119.64L555.526 124.91L557.084 130.29L558.212 135.84L558.911 141.57L559.161 147.51L558.911 153.45L558.212 159.18L557.084 164.73L555.517 170.11L553.529 175.38L551.183 180.39L548.467 185.17L545.382 189.74L541.957 194.06L538.252 198.07L534.248 201.78L529.935 205.21L525.372 208.3L520.599 211.02L515.596 213.37L510.334 215.36L504.962 216.93L499.421 218.06L493.699 218.76L487.768 219.01ZM487.768 96.86L482.516 97.15L477.504 97.91L472.701 99.14L468.088 100.84L463.634 103L459.481 105.52L455.616 108.42L452.012 111.7L448.737 115.31L445.841 119.18L443.325 123.34L441.168 127.8L439.471 132.42L438.242 137.23L437.484 142.25L437.194 147.51L437.484 152.77L438.242 157.79L439.471 162.6L441.168 167.22L443.325 171.68L445.841 175.84L448.737 179.71L452.012 183.32L455.616 186.6L459.481 189.5L463.634 192.02L468.088 194.18L472.701 195.88L477.504 197.11L482.516 197.87L487.768 198.16L493.02 197.87L498.033 197.11L502.836 195.88L507.449 194.18L511.902 192.02L516.056 189.5L519.92 186.6L523.525 183.32L526.8 179.71L529.695 175.84L532.211 171.68L534.368 167.22L536.066 162.6L537.294 157.79L538.053 152.77L538.342 147.51L538.053 142.25L537.294 137.23L536.066 132.42L534.368 127.8L532.211 123.34L529.695 119.18L526.8 115.31L523.525 111.7L519.92 108.42L516.056 105.52L511.902 103L507.449 100.84L502.836 99.14L498.033 97.91L493.02 97.15L487.768 96.86Z",
                    fill: "#E5E5E5"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M487.768 219.01L481.837 218.76L476.116 218.06L470.574 216.93L465.202 215.36L459.94 213.37L454.937 211.02L450.165 208.3L445.601 205.21L441.288 201.78L437.284 198.07L433.579 194.06L430.155 189.74L427.069 185.17L424.353 180.39L422.007 175.38L420.02 170.11L418.452 164.73L417.324 159.18L416.625 153.45L416.375 147.51L416.625 141.57L417.324 135.84L418.452 130.29L420.02 124.91L422.007 119.64L424.353 114.63L427.069 109.85L430.155 105.28L433.579 100.96L437.284 96.95L441.288 93.24L445.601 89.81L450.165 86.72L454.937 84L459.94 81.65L465.202 79.66L470.574 78.09L476.116 76.96L481.837 76.26L487.768 76.01L493.699 76.26L499.421 76.96L504.962 78.09L510.334 79.66L515.596 81.65L520.599 84L525.372 86.72L529.935 89.81L534.248 93.24L538.252 96.95L541.957 100.96L545.382 105.28L548.467 109.85L551.183 114.63L553.529 119.64L555.526 124.91L557.084 130.29L558.212 135.84L558.911 141.57L559.161 147.51L558.911 153.45L558.212 159.18L557.084 164.73L555.517 170.11L553.529 175.38L551.183 180.39L548.467 185.17L545.382 189.74L541.957 194.06L538.252 198.07L534.248 201.78L529.935 205.21L525.372 208.3L520.599 211.02L515.596 213.37L510.334 215.36L504.962 216.93L499.421 218.06L493.699 218.76L487.768 219.01ZM487.768 96.86L482.516 97.15L477.504 97.91L472.701 99.14L468.088 100.84L463.634 103L459.481 105.52L455.616 108.42L452.012 111.7L448.737 115.31L445.841 119.18L443.325 123.34L441.168 127.8L439.471 132.42L438.242 137.23L437.484 142.25L437.194 147.51L437.484 152.77L438.242 157.79L439.471 162.6L441.168 167.22L443.325 171.68L445.841 175.84L448.737 179.71L452.012 183.32L455.616 186.6L459.481 189.5L463.634 192.02L468.088 194.18L472.701 195.88L477.504 197.11L482.516 197.87L487.768 198.16L493.02 197.87L498.033 197.11L502.836 195.88L507.449 194.18L511.902 192.02L516.056 189.5L519.92 186.6L523.525 183.32L526.8 179.71L529.695 175.84L532.211 171.68L534.368 167.22L536.066 162.6L537.294 157.79L538.053 152.77L538.342 147.51L538.053 142.25L537.294 137.23L536.066 132.42L534.368 127.8L532.211 123.34L529.695 119.18L526.8 115.31L523.525 111.7L519.92 108.42L516.056 105.52L511.902 103L507.449 100.84L502.836 99.14L498.033 97.91L493.02 97.15L487.768 96.86Z",
                    fill: "url(#paint11_linear_1_446)"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M491.053 79L485.102 79.25L479.361 79.95L473.789 81.09L468.397 82.66L463.115 84.66L458.083 87.03L453.29 89.76L448.717 92.86L444.383 96.3L440.359 100.03L436.635 104.06L433.2 108.4L430.105 112.98L427.379 117.78L425.012 122.82L423.015 128.11L421.448 133.51L420.309 139.09L419.61 144.84L419.361 150.8L419.64 157.14L420.439 163.26L421.747 169.18L423.554 174.96L425.801 180.49L428.487 185.77L431.592 190.82L435.077 195.56L438.941 200.01L434.508 195.45L430.514 190.53L426.929 185.23L423.824 179.64L421.238 173.77L419.141 167.59L417.633 161.24L416.705 154.66L416.375 147.81L416.625 141.85L417.324 136.09L418.462 130.52L420.03 125.12L422.027 119.83L424.393 114.79L427.109 109.99L430.204 105.41L433.649 101.07L437.374 97.04L441.398 93.31L445.731 89.86L450.304 86.76L455.097 84.04L460.13 81.67L465.412 79.67L470.804 78.1L476.365 76.96L482.117 76.26L488.068 76.01L494.907 76.34L501.478 77.27L507.818 78.78L513.989 80.88L519.85 83.47L525.432 86.58L530.724 90.17L535.626 94.17L540.19 98.61L535.746 94.74L531.013 91.25L525.971 88.14L520.699 85.45L515.177 83.2L509.406 81.39L503.495 80.08L497.384 79.28L491.053 79Z",
                    fill: "#E6ECFF",
                    "fill-opacity": "0.8"
                  }),
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M485.082 216.04L490.983 215.79L496.685 215.1L502.207 213.97L507.559 212.41L512.801 210.43L517.783 208.08L522.546 205.38L527.079 202.3L531.383 198.88L535.367 195.18L539.061 191.19L542.476 186.88L545.552 182.34L548.248 177.57L550.594 172.58L552.571 167.33L554.129 161.97L555.257 156.44L555.946 150.73L556.196 144.82L555.916 138.53L555.127 132.46L553.829 126.59L552.042 120.85L549.815 115.37L547.149 110.13L544.064 105.12L540.609 100.42L536.775 96.01L541.168 100.54L545.142 105.42L548.697 110.67L551.772 116.21L554.338 122.04L556.415 128.17L557.913 134.47L558.832 141L559.161 147.78L558.912 153.7L558.223 159.41L557.094 164.94L555.537 170.3L553.55 175.54L551.213 180.54L548.507 185.3L545.442 189.85L542.027 194.15L538.332 198.15L534.338 201.85L530.045 205.27L525.502 208.34L520.749 211.05L515.756 213.39L510.524 215.38L505.172 216.94L499.651 218.07L493.949 218.76L488.038 219.01L481.268 218.68L474.748 217.76L468.457 216.26L462.337 214.18L456.515 211.61L450.983 208.53L445.741 204.97L440.869 200.99L436.345 196.59L440.749 200.43L445.442 203.89L450.444 206.98L455.676 209.65L461.148 211.88L466.88 213.67L472.741 214.97L478.802 215.76L485.082 216.04Z",
                    fill: "#F6F8FF"
                  }),
                  createVNode("path", {
                    d: "M487.768 97.01L493 97.29L498.003 98.05L502.786 99.28L507.399 100.98L511.832 103.13L515.976 105.64L519.83 108.53L523.425 111.8L526.69 115.4L529.576 119.26L532.082 123.41L534.229 127.85L535.926 132.47L537.154 137.26L537.913 142.27L538.193 147.51L537.913 152.75L537.154 157.76L535.926 162.55L534.229 167.17L532.082 171.61L529.576 175.76L526.69 179.62L523.425 183.22L519.83 186.49L515.976 189.38L511.832 191.89L507.399 194.04L502.786 195.74L498.003 196.97L493 197.73L487.768 198.01L482.536 197.73L477.534 196.97L472.751 195.74L468.138 194.04L463.704 191.89L459.561 189.38L455.706 186.49L452.112 183.22L448.847 179.62L445.961 175.76L443.455 171.61L441.308 167.17L439.611 162.55L438.382 157.76L437.624 152.75L437.344 147.51L437.624 142.27L438.382 137.26L439.611 132.47L441.308 127.85L443.455 123.41L445.961 119.26L448.847 115.4L452.112 111.8L455.706 108.53L459.561 105.64L463.704 103.13L468.138 100.98L472.751 99.28L477.534 98.05L482.536 97.29L487.768 97.01Z",
                    fill: "url(#paint12_linear_1_446)"
                  }),
                  createVNode("path", {
                    d: "M615.706 35.5L615.367 40.38L614.438 44.97L612.921 49.32L610.854 53.44L608.327 57.19L605.322 60.6L601.917 63.61L598.173 66.14L594.059 68.21L589.715 69.73L585.132 70.66L580.26 71L575.387 70.66L570.804 69.73L566.46 68.21L562.346 66.14L558.602 63.61L555.197 60.6L552.192 57.19L549.665 53.44L547.599 49.32L546.081 44.97L545.152 40.38L544.813 35.5L545.152 30.62L546.081 26.03L547.599 21.68L549.665 17.56L552.192 13.81L555.197 10.4L558.602 7.39001L562.346 4.86002L566.46 2.79001L570.804 1.27002L575.387 0.339996L580.26 0L585.132 0.339996L589.715 1.27002L594.059 2.79001L598.173 4.86002L601.917 7.39001L605.322 10.4L608.327 13.81L610.854 17.56L612.921 21.68L614.438 26.03L615.367 30.62L615.706 35.5Z",
                    fill: "url(#paint13_radial_1_446)"
                  }),
                  createVNode("path", {
                    d: "M274.218 174.5L273.889 178.06L273 181.32L271.562 184.34L269.625 187.08L267.309 189.4L264.573 191.34L261.557 192.78L258.302 193.67L254.748 194L251.193 193.67L247.938 192.78L244.922 191.34L242.186 189.4L239.87 187.08L237.933 184.34L236.495 181.32L235.606 178.06L235.277 174.5L235.606 170.94L236.495 167.68L237.933 164.66L239.87 161.92L242.186 159.6L244.922 157.66L247.938 156.22L251.193 155.33L254.748 155L258.302 155.33L261.557 156.22L264.573 157.66L267.309 159.6L269.625 161.92L271.562 164.66L273 167.68L273.889 170.94L274.218 174.5Z",
                    fill: "url(#paint14_radial_1_446)",
                    "fill-opacity": "0.562533"
                  })
                ]),
                createVNode("defs", null, [
                  createVNode("radialGradient", {
                    id: "paint0_radial_1_446",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(420.369 202.929) rotate(90) scale(197.683 597.772)"
                  }, [
                    createVNode("stop", {
                      "stop-color": "#0052D9",
                      "stop-opacity": "0.151562"
                    }),
                    createVNode("stop", {
                      offset: "1",
                      "stop-color": "#0052D9",
                      "stop-opacity": "0"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint1_linear_1_446",
                    x1: "150.29",
                    y1: "261",
                    x2: "150.29",
                    y2: "341",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", { "stop-color": "#72A0E8" }),
                    createVNode("stop", {
                      offset: "0.993995",
                      "stop-color": "#3981F7"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint2_linear_1_446",
                    x1: "127.823",
                    y1: "261",
                    x2: "127.823",
                    y2: "341",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", {
                      offset: "0.0127619",
                      "stop-color": "#B7D2FF"
                    }),
                    createVNode("stop", {
                      offset: "1",
                      "stop-color": "#93BBFF"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint3_linear_1_446",
                    x1: "724.044",
                    y1: "226",
                    x2: "724.044",
                    y2: "288",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", { "stop-color": "#72A0E8" }),
                    createVNode("stop", {
                      offset: "0.993995",
                      "stop-color": "#3981F7"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint4_linear_1_446",
                    x1: "706.57",
                    y1: "226",
                    x2: "706.57",
                    y2: "288",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", {
                      offset: "0.0127619",
                      "stop-color": "#B7D2FF"
                    }),
                    createVNode("stop", {
                      offset: "1",
                      "stop-color": "#93BBFF"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint5_linear_1_446",
                    x1: "198.332",
                    y1: "194",
                    x2: "198.332",
                    y2: "254",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", { "stop-color": "#72A0E8" }),
                    createVNode("stop", {
                      offset: "0.993995",
                      "stop-color": "#3981F7"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint6_linear_1_446",
                    x1: "181.358",
                    y1: "194",
                    x2: "181.358",
                    y2: "254",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", {
                      offset: "0.0127619",
                      "stop-color": "#B7D2FF"
                    }),
                    createVNode("stop", {
                      offset: "1",
                      "stop-color": "#93BBFF"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint7_linear_1_446",
                    x1: "458.179",
                    y1: "170.654",
                    x2: "311.495",
                    y2: "19.6947",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", { "stop-color": "#5E9BFF" }),
                    createVNode("stop", {
                      offset: "1",
                      "stop-color": "#E2EDFF"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint8_linear_1_446",
                    x1: "576.376",
                    y1: "260.079",
                    x2: "533.83",
                    y2: "208.072",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", { "stop-color": "#5B7FFF" }),
                    createVNode("stop", {
                      offset: "0.99",
                      "stop-color": "#92A9FD"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint9_linear_1_446",
                    x1: "534.199",
                    y1: "275.01",
                    x2: "534.199",
                    y2: "208.01",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", { "stop-color": "#4D89EC" }),
                    createVNode("stop", {
                      offset: "0.986673",
                      "stop-color": "#B3D0FF"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint10_linear_1_446",
                    x1: "416.375",
                    y1: "224.01",
                    x2: "416.375",
                    y2: "81.01",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", { "stop-color": "#4484EF" }),
                    createVNode("stop", {
                      offset: "1",
                      "stop-color": "#82B1FF"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint11_linear_1_446",
                    x1: "547.364",
                    y1: "163.727",
                    x2: "426.3",
                    y2: "62.8884",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", { "stop-color": "#5E9BFF" }),
                    createVNode("stop", {
                      offset: "1",
                      "stop-color": "#E2EDFF"
                    })
                  ]),
                  createVNode("linearGradient", {
                    id: "paint12_linear_1_446",
                    x1: "437.344",
                    y1: "198.01",
                    x2: "437.344",
                    y2: "97.01",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", {
                      "stop-color": "#B3C3FF",
                      "stop-opacity": "0.50196"
                    }),
                    createVNode("stop", {
                      offset: "1",
                      "stop-color": "#EDF1FF"
                    })
                  ]),
                  createVNode("radialGradient", {
                    id: "paint13_radial_1_446",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(561.857 35.5) scale(46.9099 46.9803)"
                  }, [
                    createVNode("stop", { "stop-color": "#F2F7FF" }),
                    createVNode("stop", {
                      offset: "1",
                      "stop-color": "#99C0FF"
                    })
                  ]),
                  createVNode("radialGradient", {
                    id: "paint14_radial_1_446",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(244.639 174.5) scale(25.7674 25.8061)"
                  }, [
                    createVNode("stop", { "stop-color": "#F2F7FF" }),
                    createVNode("stop", {
                      offset: "1",
                      "stop-color": "#99C0FF"
                    })
                  ]),
                  createVNode("clipPath", { id: "clip0_1_446" }, [
                    createVNode("rect", {
                      width: "840",
                      height: "363",
                      fill: "white"
                    })
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1n = _sfc_main$1n.setup;
_sfc_main$1n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/empty/src/empty.vue");
  return _sfc_setup$1n ? _sfc_setup$1n(props, ctx) : void 0;
};
const Empty = _sfc_main$1n;
const FYEmpty = withInstall(Empty);
const progress_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1m = /* @__PURE__ */ Object.assign({
  name: "FYProgress"
}, {
  __name: "progress",
  __ssrInlineRender: true,
  props: {
    value: {
      type: Number,
      required: true,
      default: 0,
      validator: (value) => value >= 0 && value <= 100
    },
    bothway: {
      type: Boolean,
      // 是否开启双向进度条
      default: false
    },
    color: {
      type: String,
      default: "#409eff"
    },
    restColor: {
      type: String,
      default: "#dcdcdc"
    },
    showPercent: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "default"
    },
    tooltipProps: {
      type: Object,
      default: () => ({
        width: 30,
        trigger: "hover",
        placement: "top"
      })
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const progress = ref(props.value);
    watch(
      () => props.value,
      (newValue) => {
        progress.value = newValue;
      }
    );
    const progressStyle = computed(() => {
      const styleSize = {
        large: {
          width: "8rem",
          height: ".7rem",
          fontSize: "16px"
        },
        default: {
          width: "7rem",
          height: ".6rem",
          fontSize: "14px"
        },
        small: {
          width: "5rem",
          height: ".4rem",
          fontSize: "12px"
        }
      };
      return styleSize[props.size];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "progress-bar-wrap" }, _attrs))}><div class="progress-bar" style="${ssrRenderStyle(progressStyle.value)}">`);
      _push(ssrRenderComponent(unref(ElPopover), {
        placement: __props.tooltipProps.placement,
        width: __props.tooltipProps.width,
        trigger: __props.tooltipProps.trigger
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="progress-bar-inner-wrap"${_scopeId}><div class="progress-bar-inner" style="${ssrRenderStyle({ width: `${progress.value}%`, backgroundColor: __props.color })}"${_scopeId}></div><div class="progress-bar-inner-anchor" style="${ssrRenderStyle({ width: `${progress.value + 4}%` })}"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "progress-bar-inner-wrap" }, [
                createVNode("div", {
                  class: "progress-bar-inner",
                  style: { width: `${progress.value}%`, backgroundColor: __props.color }
                }, null, 4),
                createVNode("div", {
                  class: "progress-bar-inner-anchor",
                  style: { width: `${progress.value + 4}%` }
                }, null, 4)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "tooltip-right", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "tooltip-right")
            ];
          }
        }),
        _: 3
      }, _parent));
      if (__props.bothway) {
        _push(ssrRenderComponent(unref(ElPopover), {
          placement: __props.tooltipProps.placement,
          width: __props.tooltipProps.width,
          trigger: __props.tooltipProps.trigger
        }, {
          reference: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="progress-bar-inner-right" style="${ssrRenderStyle({ width: `${100 - progress.value}%`, backgroundColor: __props.restColor })}"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "progress-bar-inner-right",
                  style: { width: `${100 - progress.value}%`, backgroundColor: __props.restColor }
                }, null, 4)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "tooltip-left", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "tooltip-left")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div style="${ssrRenderStyle([
        __props.showPercent ? null : { display: "none" },
        {
          fontSize: progressStyle.value.fontSize
        }
      ])}">${ssrInterpolate(__props.value)}% </div></div>`);
    };
  }
});
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/progress/src/progress.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
const Progress = _sfc_main$1m;
const FYProgress = withInstall(Progress);
const _sfc_main$1l = /* @__PURE__ */ Object.assign({
  name: "FYSelect"
}, {
  __name: "select",
  __ssrInlineRender: true,
  props: {
    // 选项列表
    options: {
      type: Array,
      default: () => []
    },
    // 是否启用默认icon
    defaultIcon: {
      type: [Boolean, String],
      default: false
    },
    // 是否使用虚拟列表化
    virtual: {
      type: [Boolean, String],
      default: false
    },
    modelValue: {
      type: null,
      default: null
    },
    // 标签化的展示
    tag: {
      type: [Boolean, String],
      default: false
    },
    // 权限控制样式
    access: {
      type: [Boolean, String],
      default: false
    },
    // 折叠多选标签
    collapseTags: {
      type: [Boolean, String],
      default: true
    },
    // 是否清除
    clearable: {
      type: [Boolean, String],
      default: false
    },
    // 多选
    multiple: {
      type: [Boolean, String],
      default: false
    },
    teleported: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: "请选择"
    }
  },
  emits: ["change", "visible-change", "remove-tag", "clear", "blur", "focus"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const hasDefaultSlot = computed(() => {
      const slots = useSlots();
      return slots.default;
    });
    const defaultIconStyle = computed(() => ({
      borderRadius: "50%",
      background: getRandomColor(),
      width: "18px",
      height: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }));
    const getClass = ref(["fy-select"]);
    if (props.access) {
      getClass.value = ["fy-select", "fy-select-access-w"];
    }
    watch(() => props.modelValue, (newV) => {
      var _a;
      if (props.tag) {
        const options = props.options.map((item, index2) => ({
          ...item,
          index: index2
        }));
        let targetIndex = ((_a = options.find((item) => item.value === newV[0])) == null ? void 0 : _a.index) ?? "";
        targetIndex %= 4;
        getClass.value = ["fy-select", `fy-select-tag-${targetIndex}`];
      }
      if (props.access && props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "") {
        getClass.value = ["fy-select", "fy-select-access-w", "fy-select-access-wrap"];
      }
    });
    const ifCollapse = computed(() => {
      if (props.collapseTags === false) {
        return false;
      }
      return true;
    });
    const getOptionClass = computed(() => [{
      "fy-select-option-tag": props.tag || props.tag === ""
    }, {
      "fy-select-option-access": props.access
    }]);
    const ifAccessModelValue = computed(() => {
      if (props.access && props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "") {
        return true;
      }
      return false;
    });
    const getAccessIcon = computed(() => {
      if (props.modelValue === props.options[0].value) {
        return true;
      }
      return false;
    });
    const getAccessDesc = computed(() => {
      if (props.modelValue === props.options[0].value) {
        return props.options[0].desc;
      }
      return props.options[1].desc;
    });
    const getAccessLabel = computed(() => {
      if (props.modelValue === props.options[0].value) {
        return props.options[0].label;
      }
      return props.options[1].label;
    });
    const ifClearable = computed(() => {
      if (props.tag || props.tag === "" || props.clearable === true) {
        return true;
      }
      return false;
    });
    const ifMultiple = computed(() => {
      if (props.multiple || props.multiple === "" || props.tag) {
        return true;
      }
      return false;
    });
    const getMultipleLimit = computed(() => {
      if (props.tag) {
        return 1;
      }
      if (props.multipleLimit) {
        return props.multipleLimit;
      }
      return 0;
    });
    const emitChange = (val) => {
      emit("change", val);
    };
    const emitVisibleChange = (val) => {
      emit("visible-change", val);
    };
    const emitRemoveTag = (val) => {
      emit("remove-tag", val);
    };
    const emitClear = () => {
      emit("clear");
    };
    const emitBlur = (val) => {
      emit("blur", val);
    };
    const emitFocus = (val) => {
      emit("focus", val);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYEmpty = resolveComponent("FYEmpty");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fy-select-wrap"
      }, _attrs))} data-v-52f53583>`);
      if (!props.virtual && props.virtual !== "") {
        _push(ssrRenderComponent(unref(ElSelect), mergeProps(_ctx.$attrs, {
          "model-value": props.modelValue,
          class: getClass.value,
          "collapse-tags": ifCollapse.value,
          clearable: ifClearable.value,
          multiple: ifMultiple.value,
          "multiple-limit": getMultipleLimit.value,
          teleported: __props.teleported,
          placeholder: props.placeholder,
          onChange: emitChange,
          onVisibleChange: emitVisibleChange,
          onRemoveTag: emitRemoveTag,
          onClear: emitClear,
          onBlur: emitBlur,
          onFocus: emitFocus
        }), createSlots({
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_FYEmpty, null, null, _parent2, _scopeId));
            } else {
              return [createVNode(_component_FYEmpty)];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(props.options, (item, index2) => {
                _push2(ssrRenderComponent(unref(ElOption), {
                  key: item.value,
                  label: item.label,
                  value: item.value,
                  class: getOptionClass.value
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (props.access || props.access === "") {
                        _push3(`<div class="fy-select-access" data-v-52f53583${_scopeId2}><div class="fy-select-access-title" data-v-52f53583${_scopeId2}>`);
                        if (index2 % 2 !== 0) {
                          _push3(ssrRenderComponent(unref(ElIcon), null, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(unref(Lock), null, null, _parent4, _scopeId3));
                              } else {
                                return [createVNode(unref(Lock))];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        } else {
                          _push3(ssrRenderComponent(unref(ElIcon), null, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(ssrRenderComponent(unref(User), null, null, _parent4, _scopeId3));
                              } else {
                                return [createVNode(unref(User))];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        }
                        _push3(`<span data-v-52f53583${_scopeId2}>${ssrInterpolate(item.label)}</span></div><div class="fy-select-access-desc" data-v-52f53583${_scopeId2}><span data-v-52f53583${_scopeId2}>${ssrInterpolate(item.desc)}</span></div></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (props.defaultIcon || props.defaultIcon === "" || item.icon) {
                        _push3(`<div style="${ssrRenderStyle({
                          "width": "100%",
                          "display": "flex",
                          "justify-items": "center",
                          "align-items": "center",
                          "column-gap": "0.5rem"
                        })}" data-v-52f53583${_scopeId2}>`);
                        if (item.icon) {
                          ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.icon), null, null), _parent3, _scopeId2);
                        } else if (props.defaultIcon) {
                          _push3(`<div style="${ssrRenderStyle(defaultIconStyle.value)}" data-v-52f53583${_scopeId2}>${ssrInterpolate(item.label.slice(0, 1))}</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<span data-v-52f53583${_scopeId2}>${ssrInterpolate(item.label)}</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (hasDefaultSlot.value) {
                        ssrRenderSlot(_ctx.$slots, "default", {
                          data: item
                        }, null, _push3, _parent3, _scopeId2);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [props.access || props.access === "" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "fy-select-access"
                      }, [createVNode("div", {
                        class: "fy-select-access-title"
                      }, [index2 % 2 !== 0 ? (openBlock(), createBlock(unref(ElIcon), {
                        key: 0
                      }, {
                        default: withCtx(() => [createVNode(unref(Lock))]),
                        _: 1
                      })) : (openBlock(), createBlock(unref(ElIcon), {
                        key: 1
                      }, {
                        default: withCtx(() => [createVNode(unref(User))]),
                        _: 1
                      })), createVNode("span", null, toDisplayString(item.label), 1)]), createVNode("div", {
                        class: "fy-select-access-desc"
                      }, [createVNode("span", null, toDisplayString(item.desc), 1)])])) : createCommentVNode("", true), props.defaultIcon || props.defaultIcon === "" || item.icon ? (openBlock(), createBlock("div", {
                        key: 1,
                        style: {
                          "width": "100%",
                          "display": "flex",
                          "justify-items": "center",
                          "align-items": "center",
                          "column-gap": "0.5rem"
                        }
                      }, [item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                        key: 0
                      })) : props.defaultIcon ? (openBlock(), createBlock("div", {
                        key: 1,
                        style: defaultIconStyle.value
                      }, toDisplayString(item.label.slice(0, 1)), 5)) : createCommentVNode("", true), createVNode("span", null, toDisplayString(item.label), 1)])) : createCommentVNode("", true), hasDefaultSlot.value ? renderSlot(_ctx.$slots, "default", {
                        key: 2,
                        data: item
                      }, void 0, true) : createCommentVNode("", true)];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [(openBlock(true), createBlock(Fragment, null, renderList(props.options, (item, index2) => {
                return openBlock(), createBlock(unref(ElOption), {
                  key: item.value,
                  label: item.label,
                  value: item.value,
                  class: getOptionClass.value
                }, {
                  default: withCtx(() => [props.access || props.access === "" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fy-select-access"
                  }, [createVNode("div", {
                    class: "fy-select-access-title"
                  }, [index2 % 2 !== 0 ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0
                  }, {
                    default: withCtx(() => [createVNode(unref(Lock))]),
                    _: 1
                  })) : (openBlock(), createBlock(unref(ElIcon), {
                    key: 1
                  }, {
                    default: withCtx(() => [createVNode(unref(User))]),
                    _: 1
                  })), createVNode("span", null, toDisplayString(item.label), 1)]), createVNode("div", {
                    class: "fy-select-access-desc"
                  }, [createVNode("span", null, toDisplayString(item.desc), 1)])])) : createCommentVNode("", true), props.defaultIcon || props.defaultIcon === "" || item.icon ? (openBlock(), createBlock("div", {
                    key: 1,
                    style: {
                      "width": "100%",
                      "display": "flex",
                      "justify-items": "center",
                      "align-items": "center",
                      "column-gap": "0.5rem"
                    }
                  }, [item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                    key: 0
                  })) : props.defaultIcon ? (openBlock(), createBlock("div", {
                    key: 1,
                    style: defaultIconStyle.value
                  }, toDisplayString(item.label.slice(0, 1)), 5)) : createCommentVNode("", true), createVNode("span", null, toDisplayString(item.label), 1)])) : createCommentVNode("", true), hasDefaultSlot.value ? renderSlot(_ctx.$slots, "default", {
                    key: 2,
                    data: item
                  }, void 0, true) : createCommentVNode("", true)]),
                  _: 2
                }, 1032, ["label", "value", "class"]);
              }), 128))];
            }
          }),
          _: 2
        }, [ifAccessModelValue.value ? {
          name: "prefix",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="fy-select-access-prefix" data-v-52f53583${_scopeId}><div class="fy-select-access-title" data-v-52f53583${_scopeId}>`);
              if (!getAccessIcon.value) {
                _push2(ssrRenderComponent(unref(ElIcon), null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(Lock), null, null, _parent3, _scopeId2));
                    } else {
                      return [createVNode(unref(Lock))];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(unref(ElIcon), null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(User), null, null, _parent3, _scopeId2));
                    } else {
                      return [createVNode(unref(User))];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`<span data-v-52f53583${_scopeId}>${ssrInterpolate(getAccessLabel.value)}</span></div><div class="fy-select-access-desc" data-v-52f53583${_scopeId}><span data-v-52f53583${_scopeId}>${ssrInterpolate(getAccessDesc.value)}</span></div></div>`);
            } else {
              return [createVNode("div", {
                class: "fy-select-access-prefix"
              }, [createVNode("div", {
                class: "fy-select-access-title"
              }, [!getAccessIcon.value ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0
              }, {
                default: withCtx(() => [createVNode(unref(Lock))]),
                _: 1
              })) : (openBlock(), createBlock(unref(ElIcon), {
                key: 1
              }, {
                default: withCtx(() => [createVNode(unref(User))]),
                _: 1
              })), createVNode("span", null, toDisplayString(getAccessLabel.value), 1)]), createVNode("div", {
                class: "fy-select-access-desc"
              }, [createVNode("span", null, toDisplayString(getAccessDesc.value), 1)])])];
            }
          }),
          key: "0"
        } : void 0]), _parent));
      } else {
        _push(ssrRenderComponent(unref(ElSelectV2), mergeProps(_ctx.$attrs, {
          options: props.options,
          "model-value": props.modelValue,
          class: "fy-select",
          multiple: ifMultiple.value,
          "collapse-tags": ifCollapse.value,
          "popper-class": "fy-select-popper",
          onChange: emitChange,
          onVisibleChange: emitVisibleChange,
          onRemoveTag: emitRemoveTag,
          onClear: emitClear,
          onBlur: emitBlur,
          onFocus: emitFocus
        }), {
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="fy-select-empty" data-v-52f53583${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FYEmpty, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [createVNode("div", {
                class: "fy-select-empty"
              }, [createVNode(_component_FYEmpty)])];
            }
          }),
          default: withCtx(({
            item
          }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (props.defaultIcon || props.defaultIcon === "" || item.icon) {
                _push2(`<div style="${ssrRenderStyle({
                  "width": "100%",
                  "display": "flex",
                  "justify-items": "center",
                  "align-items": "center",
                  "column-gap": "0.5rem"
                })}" data-v-52f53583${_scopeId}>`);
                if (item.icon) {
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), null, null), _parent2, _scopeId);
                } else if (props.defaultIcon) {
                  _push2(`<div style="${ssrRenderStyle(defaultIconStyle.value)}" data-v-52f53583${_scopeId}>${ssrInterpolate(item.label.slice(0, 1))}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span data-v-52f53583${_scopeId}>${ssrInterpolate(item.label)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (hasDefaultSlot.value) {
                ssrRenderSlot(_ctx.$slots, "default", {
                  data: item
                }, null, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [props.defaultIcon || props.defaultIcon === "" || item.icon ? (openBlock(), createBlock("div", {
                key: 0,
                style: {
                  "width": "100%",
                  "display": "flex",
                  "justify-items": "center",
                  "align-items": "center",
                  "column-gap": "0.5rem"
                }
              }, [item.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                key: 0
              })) : props.defaultIcon ? (openBlock(), createBlock("div", {
                key: 1,
                style: defaultIconStyle.value
              }, toDisplayString(item.label.slice(0, 1)), 5)) : createCommentVNode("", true), createVNode("span", null, toDisplayString(item.label), 1)])) : createCommentVNode("", true), hasDefaultSlot.value ? renderSlot(_ctx.$slots, "default", {
                key: 1,
                data: item
              }, void 0, true) : createCommentVNode("", true)];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const select_vue_vue_type_style_index_0_scoped_52f53583_lang = "";
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/select/src/select.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
const Select$5 = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["__scopeId", "data-v-52f53583"]]);
const FYSelect = withInstall(Select$5);
const _sfc_main$1k = /* @__PURE__ */ Object.assign({
  name: "FYSwitch"
}, {
  __name: "switch",
  __ssrInlineRender: true,
  props: {
    value: {},
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    // 打开时的值
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    // 关闭时的值
    inActiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    // 打开状态下的消息提示
    activeMessage: {
      type: String,
      default: "开启成功"
    },
    // 关闭状态下的消息提示
    inActiveMessage: {
      type: String,
      default: "关闭成功"
    },
    // 状态改变失败时的消息提示
    changeFailMessage: {
      type: String,
      default: "切换状态失败"
    },
    // 打开关闭的回调事件
    cb: {
      validator(value) {
        if (isAsyncFunction(value) || typeof value === "function") {
          return true;
        }
        return false;
      },
      default: () => {
      }
    }
  },
  emits: ["change", "update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const getDefaultMsg = computed(() => {
      if (props.modelValue === getActiveValue.value) {
        return {
          message: props.activeMessage || "开启成功",
          type: "success"
        };
      }
      return {
        message: props.inActiveMessage || "关闭成功",
        type: "error"
      };
    });
    const getActiveValue = computed(() => {
      if (["boolean", "string", "number"].includes(typeof props.activeValue)) {
        return props.activeValue;
      }
      return true;
    });
    const getInActiveValue = computed(() => {
      if (["boolean", "string", "number"].includes(typeof props.inActiveValue)) {
        return props.inActiveValue;
      }
      return false;
    });
    const emitChange = async (e) => {
      if (isAsyncFunction(props.cb)) {
        try {
          await props.cb();
          emit("update:modelValue", e === props.activeValue ? props.activeValue : props.inActiveValue);
          nextTick(() => {
            ElMessage(getDefaultMsg.value);
          });
        } catch (error) {
          emit("update:modelValue", e === props.activeValue ? props.activeValue : props.inActiveValue);
          ElMessage({
            message: props.changeFailMessage,
            type: "error"
          });
        } finally {
          emit("change", e);
        }
      } else if (typeof props.cb === "function") {
        try {
          props.cb();
          emit("update:modelValue", e === props.activeValue ? props.activeValue : props.inActiveValue);
          nextTick(() => {
            ElMessage(getDefaultMsg.value);
          });
        } catch (error) {
          emit("update:modelValue", e === props.activeValue ? props.activeValue : props.inActiveValue);
          ElMessage({
            message: props.changeFailMessage,
            type: "error"
          });
        } finally {
          emit("change", e);
        }
      } else {
        emit("update:modelValue", e === props.activeValue ? props.activeValue : props.inActiveValue);
        nextTick(() => {
          ElMessage(getDefaultMsg.value);
          emit("change", e, e === props.activeValue ? props.inActiveValue : props.activeValue);
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fy-switch-wrap" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(ElSwitch), mergeProps(_ctx.$attrs, {
        "model-value": props.modelValue,
        "active-value": getActiveValue.value,
        "inactive-value": getInActiveValue.value,
        onChange: emitChange
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/switch/src/switch.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const Switch$1 = _sfc_main$1k;
const FYSwitch = withInstall(Switch$1);
const LOGICAL_MAPPER = {
  且: "&",
  或: "||"
};
const RELATION_DIGIT_MAPPER = {
  等于: "=",
  大于: ">",
  小于: "<",
  介于: "><",
  为空: "null",
  非空: " "
};
const RELATION_MAPPER = {
  属于: "is",
  不属于: "not",
  为空: "null",
  非空: " "
};
function mapperToOptions(mapper) {
  return Object.entries(mapper).map(([label, value]) => ({ label, value }));
}
const Select$4 = {
  type: "select",
  renderer(props) {
    return createVNode(FYSelect, mergeProps({
      "placeholder": `请选择${props.label}`
    }, props, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event,
      "placement": "bottom-start"
    }), null);
  }
};
const DatePicker$2 = {
  type: "datePicker",
  renderer(props) {
    const checkValue = ref(1);
    const weekStart = () => {
      const now = /* @__PURE__ */ new Date();
      const firstDayOfWeek = new Date(now - (now.getDay() - 1) * 864e5);
      firstDayOfWeek.setHours(0, 0, 0, 0);
      return firstDayOfWeek;
    };
    return createVNode("div", {
      "style": "width: 100%; display: flex; column-gap: 0.5rem;"
    }, [createVNode(FYSelect, {
      "modelValue": checkValue.value,
      "onUpdate:modelValue": ($event) => checkValue.value = $event,
      "style": "width: 120px",
      "onChange": (v) => {
        props.model[props.value] = v === 2 ? /* @__PURE__ */ new Date() : v === 3 ? weekStart() : "";
      },
      "options": [{
        label: "自定义时间",
        value: 1
      }, {
        label: "今天",
        value: 2
      }, {
        label: "本周",
        value: 3
      }]
    }, null), createVNode(FYDatePicker, mergeProps({
      "style": "width: 180px",
      "placeholder": "请选择"
    }, props, {
      "type": "date",
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event
    }), null)]);
  }
};
const builtInFormItems$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DatePicker: DatePicker$2,
  Select: Select$4
}, Symbol.toStringTag, { value: "Module" }));
const filterPanelItemMap = /* @__PURE__ */ new Map();
function installFilterPanelItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      filterPanelItemMap.set(nape.type, nape.renderer);
    }
  } else {
    filterPanelItemMap.set(item.type, item.renderer);
  }
}
installFilterPanelItem(Object.entries(builtInFormItems$4).map(([, value]) => value));
function useFormItem(filterItem) {
  return computed(() => filterItem.value.render && typeof filterItem.value.render === "function" ? filterItem.value.render : filterPanelItemMap.get(filterItem.value.type));
}
function useForm(filterItem) {
  const model = ref({});
  const rules = computed(() => {
    if (filterItem.value.validate) {
      return {
        [filterItem.value.value]: filterItem.value.validate
      };
    }
    return {
      [filterItem.value.value]: [{ required: true, trigger: "change", message: "" }]
    };
  });
  const formEl = ref();
  const FormItem2 = useFormItem(filterItem);
  const formItemProps = computed(() => filterItem.value);
  watch(
    filterItem,
    (value, oldValue) => {
      if (value === oldValue)
        return;
      model.value = { [filterItem.value.value]: filterItem.value.defaultValue || "" };
    },
    { immediate: true }
  );
  const validateFailedValue = Promise.resolve({});
  async function validate() {
    if (formEl.value) {
      await formEl.value.validate();
      return model.value;
    }
    return validateFailedValue;
  }
  return {
    model,
    rules,
    FormItem: FormItem2,
    formItemProps,
    formEl,
    validate
  };
}
function useRelation(filterValue, filterItem) {
  const relationValue = ref(RELATION_MAPPER["属于"]);
  const relationOptions = ref(mapperToOptions(RELATION_MAPPER));
  watchEffect(() => {
    if (!(filterItem == null ? void 0 : filterItem.value))
      return;
    relationOptions.value = filterItem.value.digit ? mapperToOptions(RELATION_DIGIT_MAPPER) : mapperToOptions(RELATION_MAPPER);
    relationValue.value = filterItem.value.digit ? RELATION_DIGIT_MAPPER["等于"] : RELATION_MAPPER["属于"];
  });
  return {
    relationOptions,
    relationValue
  };
}
function useFilter(props) {
  const filterValue = ref();
  const filterItem = ref();
  const filterOptions = computed(() => props.template.map((tmpl) => ({ label: tmpl.label, value: tmpl })));
  watch(
    () => props.template,
    () => {
      var _a;
      if (!((_a = props.template) == null ? void 0 : _a.length))
        return;
      const [defaultItem] = props.template;
      filterItem.value = defaultItem;
      filterValue.value = filterOptions.value[0].value;
    },
    { immediate: true }
  );
  watch(filterValue, (value, oldValue) => {
    if (value === oldValue)
      return;
    filterItem.value = value;
  });
  return {
    filterValue,
    filterOptions,
    filterItem
  };
}
const formGroup = "";
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
}
const __default__$5 = defineComponent({
  props: {
    index: {
      type: Number,
      required: true
    },
    template: {
      type: Array,
      default: () => []
    },
    logical: {
      type: String,
      default: "&"
    }
  },
  emits: ["remove", "update:logical"],
  setup(props, ctx) {
    const isWhen = computed(() => props.index === 0);
    const shouldChangeLogical = computed(() => props.index === 1);
    const logicalSelf = computed({
      get() {
        return props.logical;
      },
      set(value) {
        ctx.emit("update:logical", value);
      }
    });
    const {
      filterValue,
      filterItem,
      filterOptions
    } = useFilter(props);
    const {
      relationValue,
      relationOptions
    } = useRelation(filterValue, filterItem);
    const {
      model,
      rules,
      formEl,
      validate,
      formItemProps,
      FormItem: FormItem2
    } = useForm(filterItem);
    async function wrappedValidate() {
      await validate();
      const field = filterItem.value.value;
      return {
        [field]: {
          value: model.value[field],
          // 字段值
          relation: relationValue.value,
          // 关系运算值
          logical: isWhen.value ? "when" : logicalSelf.value
          // 逻辑运算值
        }
      };
    }
    ctx.expose({
      validate: wrappedValidate
    });
    return () => createVNode("div", {
      "class": "conditions-group-content form-group"
    }, [createVNode("div", {
      "class": "conditions-item"
    }, [createVNode("div", {
      "class": "logical-item"
    }, [isWhen.value ? createVNode("div", {
      "class": "when"
    }, [createTextVNode("当")]) : createVNode(FYSelect, {
      "modelValue": logicalSelf.value,
      "onUpdate:modelValue": ($event) => logicalSelf.value = $event,
      "class": "logical-select",
      "disabled": !shouldChangeLogical.value,
      "options": mapperToOptions(LOGICAL_MAPPER),
      "placeholder": "请选择"
    }, null)]), createVNode("div", {
      "class": "form-container"
    }, [createVNode("div", {
      "class": "form-content"
    }, [createVNode(FYSelect, {
      "modelValue": filterValue.value,
      "onUpdate:modelValue": ($event) => filterValue.value = $event,
      "options": filterOptions.value,
      "class": "shorted-select",
      "placeholder": "请选择"
    }, null), createVNode(FYSelect, {
      "modelValue": relationValue.value,
      "onUpdate:modelValue": ($event) => relationValue.value = $event,
      "options": relationOptions.value,
      "class": "shorted-select",
      "placeholder": "请选择"
    }, null), createVNode("div", {
      "class": "form-dynamic"
    }, [createVNode(resolveComponent("el-form"), {
      "ref": formEl,
      "model": model.value,
      "rules": rules.value,
      "inline": true
    }, {
      default: () => [createVNode(resolveComponent("el-form-item"), {
        "prop": filterItem.value.value
      }, {
        default: () => [createVNode("div", {
          "style": "width: 300px"
        }, [createVNode(FormItem2.value, mergeProps(formItemProps.value, {
          "model": model.value
        }), null)])]
      })]
    })])])]), createVNode("div", {
      "class": "delete-icon",
      "onClick": () => ctx.emit("remove")
    }, [createVNode(resolveComponent("el-icon"), {
      "size": "20",
      "color": "#999"
    }, {
      default: () => [createVNode(Delete, null, null)]
    })])])]);
  }
});
const FormGroup = __default__$5;
const __moduleId$a = "../packages/components/filter-panel/src/FormGroup.jsx";
ssrRegisterHelper(__default__$5, __moduleId$a);
function useFormGroups() {
  const rendererSet = ref([]);
  const logical = ref(LOGICAL_MAPPER.且);
  return {
    create() {
      const FormGroupRenderer = createVNode(FormGroup, null, null);
      rendererSet.value.push(FormGroupRenderer);
      return FormGroupRenderer;
    },
    remove(index2) {
      if (index2) {
        rendererSet.value.splice(index2, 1);
      } else {
        rendererSet.value.splice(rendererSet.value.length - 1, 1);
      }
    },
    reset() {
      rendererSet.value = [];
    },
    renderer() {
      return rendererSet.value;
    },
    logical
  };
}
const FilterPanel_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1j = /* @__PURE__ */ Object.assign({
  name: "FYFilterPanel"
}, {
  __name: "FilterPanel",
  __ssrInlineRender: true,
  props: {
    template: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit", "reset", "cancel", "update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const {
      create,
      remove,
      renderer: renderer2,
      reset,
      logical
    } = useFormGroups();
    const formEl = ref();
    const popoverVisible = computed({
      get() {
        return props.visible;
      },
      set(value) {
        emits("update:visible", value);
      }
    });
    function cancel() {
      emits("cancel");
      popoverVisible.value = false;
    }
    async function submit() {
      const result = [];
      for await (const El of formEl.value) {
        const data = await El.validate();
        result.push(data);
      }
      console.log("🚀 ~ file: filter-panel.vue:43 ~ submit ~ result:", result);
      emits("submit", result);
      cancel();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = resolveComponent("el-popover");
      const _component_el_icon = resolveComponent("el-icon");
      _push(ssrRenderComponent(_component_el_popover, mergeProps({
        visible: popoverVisible.value,
        width: 800,
        "show-arrow": false,
        trigger: "click",
        placement: "bottom-end",
        "popper-class": "filter-panel-popover",
        "popper-style": "box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
      }, _attrs), {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fy-filter-panel-container"${_scopeId}><header${_scopeId}><h3${_scopeId}>筛选</h3><div class="close-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, {
              size: "20",
              color: "#999"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Close), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Close))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></header><div class="panel-body"${_scopeId}><!--[-->`);
            ssrRenderList(unref(renderer2)(), (FormGroup2, i) => {
              _push2(`<div${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(FormGroup2), {
                ref_for: true,
                ref_key: "formEl",
                ref: formEl,
                logical: unref(logical),
                "onUpdate:logical": ($event) => isRef(logical) ? logical.value = $event : null,
                index: i,
                template: __props.template,
                onRemove: ($event) => unref(remove)(i)
              }, null), _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--><div class="add-group"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, {
              color: "var(--el-color-primary)",
              onClick: unref(create)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Plus), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Plus))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>新增筛选条件</span></div></div><div class="panel-footer"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FYButton), {
              type: "primary",
              text: "",
              link: "",
              size: "large",
              style: { "font-size": "1rem" },
              onClick: unref(reset)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 重置 `);
                } else {
                  return [
                    createTextVNode(" 重置 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="button-group"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FYButton), {
              type: "info",
              text: "",
              size: "large",
              link: "",
              style: { "font-size": "1rem" },
              onClick: cancel
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 取消 `);
                } else {
                  return [
                    createTextVNode(" 取消 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FYButton), {
              type: "primary",
              size: "large",
              style: { "font-size": "1rem" },
              onClick: submit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 确定 `);
                } else {
                  return [
                    createTextVNode(" 确定 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "fy-filter-panel-container" }, [
                createVNode("header", null, [
                  createVNode("h3", null, "筛选"),
                  createVNode("div", {
                    class: "close-icon",
                    onClick: cancel
                  }, [
                    createVNode(_component_el_icon, {
                      size: "20",
                      color: "#999"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Close))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "panel-body" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(renderer2)(), (FormGroup2, i) => {
                    return openBlock(), createBlock("div", { key: FormGroup2 }, [
                      (openBlock(), createBlock(resolveDynamicComponent(FormGroup2), {
                        ref_for: true,
                        ref_key: "formEl",
                        ref: formEl,
                        logical: unref(logical),
                        "onUpdate:logical": ($event) => isRef(logical) ? logical.value = $event : null,
                        index: i,
                        template: __props.template,
                        onRemove: ($event) => unref(remove)(i)
                      }, null, 40, ["logical", "onUpdate:logical", "index", "template", "onRemove"]))
                    ]);
                  }), 128)),
                  createVNode("div", { class: "add-group" }, [
                    createVNode(_component_el_icon, {
                      color: "var(--el-color-primary)",
                      onClick: unref(create)
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Plus))
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode("span", { onClick: unref(create) }, "新增筛选条件", 8, ["onClick"])
                  ])
                ]),
                createVNode("div", { class: "panel-footer" }, [
                  createVNode(unref(FYButton), {
                    type: "primary",
                    text: "",
                    link: "",
                    size: "large",
                    style: { "font-size": "1rem" },
                    onClick: unref(reset)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 重置 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode("div", { class: "button-group" }, [
                    createVNode(unref(FYButton), {
                      type: "info",
                      text: "",
                      size: "large",
                      link: "",
                      style: { "font-size": "1rem" },
                      onClick: cancel
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 取消 ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(FYButton), {
                      type: "primary",
                      size: "large",
                      style: { "font-size": "1rem" },
                      onClick: submit
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 确定 ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/filter-panel/src/FilterPanel.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const FilterPanel = _sfc_main$1j;
const FYFilterPanel = withInstall(FilterPanel);
const excel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB7ZoxS8NAFMf/qbaDVlsQBKlIlULBSZ0EHeIgCK4O4qKOgoMfwM1PYJeO1qkuOkon7epWQQVBqGBFSwVFW8GGJCZ1UNrTXJpLcpb7QTh49yD5wbt3FxIJBOJZOd4lYU8HZLhMT18vhhMja7lkeh8OCBCDEk69kPi+n5RZuN5YhQNaRBJZWTaGODzGqUwAHOFEhisRk3ZluBMxaUeGSxETuzLcipjYkeFaxIRWxncR5aNumUMj47uIpmqNyworGd9FVFVF+e6RKvcvGak5YO7smnFEgccEQ0FEBqJUufVqbbKweFz4GesGJyh1BU8PFapcLSBFmmPcdy1ahAhvCBHe6BgRpu23PxRGembHMu+sco7URQYsYSsSDGN6cMIy775Gt5PbQZQWDSsnW40y8gLRtXjD1dIajyaM83XLARtXzzd4U6pgiasi21ObxLgba0eUFg2HxRxKhD2j9F4Ga1wXEe3XJmKN0DAfm0UsPEScOzLKjiWuiqwnl36dYy0iSovEq7Fb7zJ+z6CFrUi9itSlo2+abSPaL28IEd4QIrwhRHijc0WkLrzgHyKRgmMHchE+/CFEgw7cFpfzo81xYmlpOuaMIQPOMCTy+teztfAJFNWHJTDVU+oAAAAASUVORK5CYII=";
const file = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7ZpPSBRRHMd/b3ZJS0Lp4AZC/jlEBxWC/pwMNaSLmocuQlAH6RJk5zxGdrVzSQYFXrpoHaLQKA/ZdqiMIAm2OqkQaLGsrrvzet8ZnzPszu6O83ZmJ9kPLKu/fYffZ+f93vu9xzJy4O5QqkXn0YfEeTf5zJEmRqeH2NVTF6KPSAHNKcj1yHwQErtJcDb14UXmCimQJ3J7aLubE7VQwKjKaBQiVGRCJQK8yoROBHiRCaUI2KtMaEXAXmRCLQLcylRcJPWHlxzjRqbiIpm0eG2VHldKpuIi20Li64LuamwxGZYbwM6u6XyeAubgYaKmE8zV2I3f/OS1iQMf7bEohYTUX6Lv8dL1Ahhn9bmx0K9abqmKhI19IxJYsdfUMTozqFFnL6P6RkYba0Q/l3R6O62Lv90VeTECEUHil+9Exbs9RtR5XqPmDo0ej2WUZXyfWnaJdZEskh6/uE2TNzO0muBGvH9UPQ1fRXIlngiJX1/Mbx4S+H8rSdTcrlFjq7vNsBC+iThJbCaZUSuSTSHx7Z3ZnhxtJSV8EXGSQDc0MhGl6/ejQsYa2xAzxVJJUqLsIoUkZGwzyY3pBGJiOh1rN0XWEiEq9kLT6dKtXDFzLOLg/YxuLMcqlE2kkARisVYrhoTtYz/N6fRqMkuqlEVEReL5vawRG7gRMd4rJuIkgYQHxN5QTGJ50ZJArENsjsfPkmeURLCUOkn0j0ZEUlpBiRVR2LM2CRn7POe94JVE+kY0R4nOXs1YnZ6OO0tgbG1dfmxLYQn2LILkkDCQEl3DlgRiq4lgJJRE5E6MDlYunVIM0yZICVIRkb2R7J1A7c6OHdR0suO5jZcJ2HsnbGxdw5rRikiCkACen8jKTksRa7Ni8dmsWHmsOypMuyAkgOcngt5ItuAdvZyWhAC62WeiPl4+MHdqfO40xcotATw/EST9ZtpMuG8kslvoAImaksFIAKWjblzURM0hRudEXWD/wPK7e75oszpbvyWA8pl9QTyVjTXdkGhoNC8YJNhPsADEZ3VfJUBZLh+W5lAjGdGWMOOMAbDbLy9y3wUkZb1FQeJ4VYLqTWPYqIqEjf0rohFfp/8Qx9P++GA6UYlfCLmD/xibqcm7l3ScWiyd7SFOUxQyOKfX6bTe4/TZPw3lIilQj/F8AAAAAElFTkSuQmCC";
const pdf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALySURBVHgB7Zk/T9tAGIffO0ftAKgTLCzJxgBDJxgpDExEHmFqJdjhSwArHwDUdoI5TAzQDgwglkowQ2ckpAqEKkLs4/0dcRQSizhOXvuQ8kiR7dNF8nPvH18cRTH89/1iwZjvxphZEkaNj5Py/W+FhYWf1AM6btALw19ZSEQoY37UDg+/Ug+0iTz5/iwfipQxvcpocoheZJwSAWllnBMBaWScFAHdyjgrArqRcVoEJJXJXcTc3XWck0Qm/4hUq0SPjx2ndZLJX4QlwpOTRFPfklGtA3iyG96iUNaMjJCamEg01dzefv6wvf2neaxArnB/T+b8PNFUjsyn1jHnu1ZSBiJJUGNjlBViNVLY2CA1OUl0c0O1zU0y19ckiUhE9NyclTAsQRwVvbpK0sikVj2lgr09K6MRGWFkRB4e7EENDVFWiIhE9aBmZqxMeHVF0ogUu7m8tFFppBRqRRix9htWKo1zKyaMmEhwcNA4f9cizYWuuB1LIyfS1HK9cvnVtQRiInp+/tV1YW2NSLAdi4hgjxVFANsTC49h2yIlI9J+9fKyPYZHR2TOzijY3SVvZYVUqUQeRyY8PSXN51ZqeNjONfysMcfHL9uaFPRdBNHQ9eIO9vftEa1YjY6S5lrR09P20wbGOB2f1tcbO4Nu6LtIczQU35BaXCSNJzwiwBiM1dMLq4/9GK49fA8pyfPStOu+ijRHAzePgseNG5ayG0hsXfjaW1qywphvm0AdOzfP1EJhY0WjAo9uPuT6iFtdpFzA9YD5jVrh72CM8hBBSmBlNadPBFa0liTPeR6KO6D+kFpERe205edssLOTqlh7Jd1zhCMRSaAjReljzzmd8iBVROxLBf7YX39TU0ToNFzIeF7kRSoRCOATvSUJLy4o2NqiPElXI1wDKGjbpdChMtimdyJ914JATvUQx+BNo2sMRFxjIOIabSKG6B+9Q1TcYLVcxjvPIjkIL/Tfj5VKqXU8NrWCavUL8T+o5BrG/A5xbzE8A3u7ULi/ah73AAAAAElFTkSuQmCC";
const pic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKdSURBVHgB7ZjNaxNBGMafjaZRQ+NHTSuaSjQHUewhILQilATtrZCDnuJBL/WsFy96F/TQP8CD9ZJ7zgoRTwaRFoqCHqKHojRNpQRjTfMx7hsopMkku9l9O52W/cFAMjMs+9t5ZudNDEhILM5HjUb9FX3ELhMJjuBO7Mb91NCl13CBT9ZpNOs5KJDYRojmQnbr6z24oEsk8fFFAgJRKMatjA8a4UZGKxHCqYx2IoQTGS1FiEFltBUhBpHRWoSwK7PnIuXapuUcOzJ7LlJt1MxWt5xnJaOFyPtfn23N7SdjdHbQyW4YyEExIf9RXD45bmvuevlP/OXVu0vtfYehCbRX8sVv9ib7xPGuLhwQPBHdODAibJs96AvgeiiGUf8wKs0qCpslLP9dgSpYRMb8ITyL3jYlQjv6M8U8MqUPUAFLtB6em+mSINKjk5g4FoEKWEQuBsK9x46chgpYRIKHAo7GOGERKdbKPccK/9agAhaR7PqStH91q2yKlKAClrdW9veiGaEhTA3HzD0RRqVRba3E/M83fVeLE7ZzJLOWbzUr0uEpvN34wi6o9GSnFUuHJ/Ho7Ay4USZCh+aDM9OtzxPBCFKn4uBEmQitRPuh2fndLWwi9JTnxqalY7dOXMFNs7VD5wtnxFhEKDZ0U6mReFdkaIyevgzOiLHXWnTT7SWLVYS4IuZahF6n7YUhRebJ+dlWWS+LVCdcEXMlQtGQxYbi9HR8tmekZNdxGzHHItv7ohd0c4NEZs58Nferoq1wLNLrN4gb6JpOcVSi0GosV1ZajRtalUJ18IrZkciqWSfZqatU4v0dpBueiG54IrrhiehGt4gQG9iHGLLO5Kfn3yGMKLRE/Mhde3yhs1caLeFrJIUhFqAZAngnao2kbOw/kPvmAvW2oi8AAAAASUVORK5CYII=";
const rar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKySURBVHgB7Zg/b9NAFMCf/zRJVUelVSRohYQRFSwMrciCGEgHNvoBmGCCnfIB+AJlh4WydEaC3R0YOlBRIQZASBQJkaKiytA0jVLHxz07tlLXSe9ix75K95OS6C435Jd37947KxBD3Zo3QdFeAiE1GDGF0nmYnr3zQLn0+BUkQI+fVi0qYUZntdIsVKproOhlb3y48wb+fn4KiXHJKvnxDJLIqNGJulWt0Q8zbrFWmgklEN24Cqnhy9yHIdF5FrftTfj9rgaqbnjjTqsOqZIgMirneiDOvieQukTAkJHhigjmSHlumUbE314Yocb2c0idISLDFZExmhOlSg0K5254r2LlNowMzshwRaT1Zx3sT8thwrft9zBSOCLDJYKgTKYwynCLTFy8F0YEpZzGV0hCxzk4fRGDDJcI5kd57kk4Hr+wBLsbS5AE4ra9l6IWBi88RYa7jhz8XAvrCI6T4lKJf3ubMFm5ybC4v4wSnfAru2tBxmj6BIwbV5jWOk17YerW663eOe4cwfwY67YmaUQkAHOlYX9kW6yRyegUl0iR5sjU9ZVwfEQTfW/roVft84arIJbNR8fGfoEcYVHkgFkE25O4blc3roEIMItgSxIHHskikFgEI4X3lLzhEKn2/a4oQFSYRDCpB/3rgySzgun4DbZVp/UL9r+tgNs9bnHeoCdZv22XJUwiQZOIdaO3+8X6gSJqzz0+L5hEggqOJ9T0/AsvMsEYOWp8gbxhFsE7OuaJv42Ob6UmbSTzhvnUwlYk7oED3tkPd95C3jD3WriddjfuetsJKzzmR5MKiNBnIcNddbO+7jLA/VxLVKSIaEgR0ZAioiFFREOKiIYUEQ0pIhpSRDSkiGicEOmAY8MZRImbrFsL3+lXJggJ2Z5Z/HA5Ottna5FF+rYKwkHWu7/tBP8BebYGukorC6kAAAAASUVORK5CYII=";
const word = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL2SURBVHgB7ZkxbxMxFIDfJRFFQgkMaYqUJdeJSqmgA2rHlg5sUUYQA/yCip0/UcHASJnohlQmFsrAAGWhykkMSEmXLG2QUKqKJlzO3Evqnu24vYt9TdzqvqVXn3Px9+z37CQWSKi+/lsibuYNAbIMF0zxlgXVBevZw3LmLWiQkjV6bnp7HBIUAtbGR8d9ChoMiVRf/Vv2/5RgzOjKpMAgdGSMEkFUZYwTQVRkjBRBRpUxVgQZRcZoESSqzMRF2scktE8UmYmLdF2AjhveL0xm4iIo8eWXF6nveTKW2IA7uwdkG8ZM9jrAndtWpL6/22Rh/cm1H2xbBgzh8Bjg+154viCEWDfFNuOrVlQSEdNIREzjyogol9/F2RRU7gZ1/8X7HqiwtpqGmdzg+mudwIfdaJujiLLIUYdAuZg+/d/Oe9Bo8ftAIctvcPuH/P0bUwCrc8Gi2NqNcFY5A2URcdB2Htv4PuuPMv3BUp5vutzr7Dwv2jiItiHKUM6Row4vY0/zjyoXLU6CtrGwIvWW588YKKOV7LVmIFIu8vfEaMva5ovB2zcOQAstkUYrSMyZLP+opdnhR88LM1LIBddOUy3JKVoiTjO4xmXERpxe1/wBOiczV8hZpwVA7C/m16hoiey3ST9XKJjwCJsf3/ySWm8NL0FWQsw3FbQ3RKc5nPB8pIkv453bp97SW1aItkiNWds02jQ/MNIoykZ7yR4IsImOs6aLtgg7SJrwNNo00lQIwTzp58e0JX2GKrGK4AAfzPH5QWHzZNHGpA+ewS5PVbRFMNrs0ePx/eCwwA6QLa+Ve8HRptbUzw8kltMvuzHSvUGsRFxRiLHsUmIRkW1mYqTPKrGOSTMiO17I1n1N0qZzUGSJ5esgjPS7Hf7zCLt3UD799PrHf8ogvyAWYvtea3MnfImgcBylVkbymd00EhHTSERMIxExjSsskiJ/4BIi/dGu8rLb8O+UwEQI2dtam7LFZunS6vZ6K4TABhiGf0r73O15K7J7/wFhBER9s94x2wAAAABJRU5ErkJggg==";
const UploadItem_vue_vue_type_style_index_0_scoped_bb9d8726_lang = "";
const _sfc_main$1i = /* @__PURE__ */ Object.assign({
  name: "UploadItem"
}, {
  __name: "UploadItem",
  __ssrInlineRender: true,
  emits: ["type-check", "file-change"],
  setup(__props, { emit }) {
    const currentFile = ref(null);
    const currentFileName = ref("");
    const noEvent = (e) => {
      e.stopPropagation();
    };
    const config = inject("config");
    const dialogVisible = inject("dialogVisible");
    watch(dialogVisible, (newV) => {
      if (!newV.value) {
        myRef.value.clearFiles();
        currentFile.value = null;
      }
    });
    const onChange = (file2, files) => {
      const typeList = file2.name.split(".");
      const type = typeList[typeList.length - 1];
      currentFileName.value = file2.name;
      if (["pdf"].includes(type)) {
        currentFile.value = "pdf";
      } else if (["doc", "docx"].includes(type)) {
        currentFile.value = "doc";
      } else if (["jpg", "jpeg", "gif", "png"].includes(type)) {
        currentFile.value = "jpg";
      } else if (["xlsx", "xls", "csv"].includes(type)) {
        currentFile.value = "excel";
      } else if (["rar", "zip"].includes(type)) {
        currentFile.value = "zip";
      } else {
        currentFile.value = "file";
      }
      if (config.allow && config.allow.length) {
        if (config.allow.includes(type)) {
          emit("type-check", true);
        } else {
          emit("type-check", false);
        }
      }
      emit("file-change", file2, files);
    };
    const myRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_link = resolveComponent("el-link");
      _push(ssrRenderComponent(_component_el_upload, mergeProps({
        ref_key: "myRef",
        ref: myRef,
        class: "fy-upload-item",
        drag: unref(config).drag,
        multiple: unref(config).multiple,
        "auto-upload": false,
        "on-change": onChange,
        "show-file-list": false
      }, _attrs), createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-bb9d8726${_scopeId}>`);
            if (!currentFile.value) {
              _push2(`<span class="upload-icon" data-v-bb9d8726${_scopeId}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false" data-v-bb9d8726${_scopeId}><g id="agufile/cloud-upload-fill" stroke-width="1" fill-rule="evenodd" data-v-bb9d8726${_scopeId}><path id="agu路径" d="M10.422 2.133C7.42 1.332 5.975 4.789 5.946 4.888c-.03.098-.177.054-.177.054-.24-.249-1.297-.82-2.408-.088-1.11.732-.709 2.122-.709 2.122S.52 6.961.086 9.712c-.435 2.75 2.19 3.466 2.19 3.466H7.24V10.22H6.092v-.005c-.057 0-.102-.05-.102-.114 0-.037.017-.07.045-.091L8.07 7.67a.149.149 0 0 1 .115-.058.15.15 0 0 1 .12.065l2.018 2.32.03.033c.004.018.01.04.01.061 0 .07-.052.128-.116.128-.003 0-.003-.003-.005-.003v.005H9.147v2.96h4.505s2.148-.59 2.338-3.015c.192-2.426-2.456-3.205-2.456-3.205s-.112-4.028-3.112-4.828z" data-v-bb9d8726${_scopeId}></path></g></svg></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="el-upload__text" data-v-bb9d8726${_scopeId}>`);
            if (!currentFile.value) {
              _push2(`<span class="upload-tip" data-v-bb9d8726${_scopeId}> 点击此处 `);
              _push2(ssrRenderComponent(_component_el_link, {
                type: "primary",
                class: "upload-linktext"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`上传文件`);
                  } else {
                    return [
                      createTextVNode("上传文件")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</span>`);
            } else if (currentFile.value === "excel") {
              _push2(`<img class="upload-type-icon"${ssrRenderAttr("src", unref(excel))} alt="" data-v-bb9d8726${_scopeId}>`);
            } else if (currentFile.value === "pdf") {
              _push2(`<img class="upload-type-icon"${ssrRenderAttr("src", unref(pdf))} alt="" data-v-bb9d8726${_scopeId}>`);
            } else if (currentFile.value === "doc") {
              _push2(`<img class="upload-type-icon"${ssrRenderAttr("src", unref(word))} alt="" data-v-bb9d8726${_scopeId}>`);
            } else if (currentFile.value === "zip") {
              _push2(`<img class="upload-type-icon"${ssrRenderAttr("src", unref(rar))} alt="" data-v-bb9d8726${_scopeId}>`);
            } else if (currentFile.value === "jpg") {
              _push2(`<img class="upload-type-icon"${ssrRenderAttr("src", unref(pic))} alt="" data-v-bb9d8726${_scopeId}>`);
            } else if (currentFile.value === "file") {
              _push2(`<img class="upload-type-icon"${ssrRenderAttr("src", unref(file))} alt="" data-v-bb9d8726${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                !currentFile.value ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "upload-icon"
                }, [
                  (openBlock(), createBlock("svg", {
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    fit: "",
                    height: "1em",
                    width: "1em",
                    preserveAspectRatio: "xMidYMid meet",
                    focusable: "false"
                  }, [
                    createVNode("g", {
                      id: "agufile/cloud-upload-fill",
                      "stroke-width": "1",
                      "fill-rule": "evenodd"
                    }, [
                      createVNode("path", {
                        id: "agu路径",
                        d: "M10.422 2.133C7.42 1.332 5.975 4.789 5.946 4.888c-.03.098-.177.054-.177.054-.24-.249-1.297-.82-2.408-.088-1.11.732-.709 2.122-.709 2.122S.52 6.961.086 9.712c-.435 2.75 2.19 3.466 2.19 3.466H7.24V10.22H6.092v-.005c-.057 0-.102-.05-.102-.114 0-.037.017-.07.045-.091L8.07 7.67a.149.149 0 0 1 .115-.058.15.15 0 0 1 .12.065l2.018 2.32.03.033c.004.018.01.04.01.061 0 .07-.052.128-.116.128-.003 0-.003-.003-.005-.003v.005H9.147v2.96h4.505s2.148-.59 2.338-3.015c.192-2.426-2.456-3.205-2.456-3.205s-.112-4.028-3.112-4.828z"
                      })
                    ])
                  ]))
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "el-upload__text" }, [
                  !currentFile.value ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "upload-tip"
                  }, [
                    createTextVNode(" 点击此处 "),
                    createVNode(_component_el_link, {
                      type: "primary",
                      class: "upload-linktext"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("上传文件")
                      ]),
                      _: 1
                    })
                  ])) : currentFile.value === "excel" ? (openBlock(), createBlock("img", {
                    key: 1,
                    class: "upload-type-icon",
                    src: unref(excel),
                    alt: ""
                  }, null, 8, ["src"])) : currentFile.value === "pdf" ? (openBlock(), createBlock("img", {
                    key: 2,
                    class: "upload-type-icon",
                    src: unref(pdf),
                    alt: ""
                  }, null, 8, ["src"])) : currentFile.value === "doc" ? (openBlock(), createBlock("img", {
                    key: 3,
                    class: "upload-type-icon",
                    src: unref(word),
                    alt: ""
                  }, null, 8, ["src"])) : currentFile.value === "zip" ? (openBlock(), createBlock("img", {
                    key: 4,
                    class: "upload-type-icon",
                    src: unref(rar),
                    alt: ""
                  }, null, 8, ["src"])) : currentFile.value === "jpg" ? (openBlock(), createBlock("img", {
                    key: 5,
                    class: "upload-type-icon",
                    src: unref(pic),
                    alt: ""
                  }, null, 8, ["src"])) : currentFile.value === "file" ? (openBlock(), createBlock("img", {
                    key: 6,
                    class: "upload-type-icon",
                    src: unref(file),
                    alt: ""
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 2
      }, [
        currentFile.value ? {
          name: "trigger",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="upload-file-info" data-v-bb9d8726${_scopeId}>${ssrInterpolate(currentFileName.value)}</span>`);
              _push2(ssrRenderComponent(_component_el_link, {
                type: "primary",
                class: "upload-rebtn upload-linktext"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 重新上传 `);
                  } else {
                    return [
                      createTextVNode(" 重新上传 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", {
                  class: "upload-file-info",
                  onClick: noEvent
                }, toDisplayString(currentFileName.value), 1),
                createVNode(_component_el_link, {
                  type: "primary",
                  class: "upload-rebtn upload-linktext"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 重新上传 ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/upload/src/components/UploadItem.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const UploadItem = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["__scopeId", "data-v-bb9d8726"]]);
function useFormModel(props) {
  const model = ref({});
  watch(
    () => props.template,
    (template) => {
      if (!template)
        return;
      template.forEach((item) => {
        if (item.value) {
          model.value[item.value] = unref(item.defaultValue) !== void 0 ? unref(item.defaultVale) : "";
        }
      });
    },
    { immediate: true }
  );
  return model;
}
const Select$3 = {
  type: "select",
  renderer(props) {
    return createVNode(FYSelect, mergeProps({
      "placeholder": `请选择${props.label}`
    }, props, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event
    }), null);
  }
};
const Input$2 = {
  type: "input",
  renderer(props) {
    return createVNode(FYInput, mergeProps(props, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event
    }), null);
  }
};
const DatePicker$1 = {
  type: "datePicker",
  renderer(props) {
    return createVNode(FYDatePicker, mergeProps(props, {
      "placeholder": `请选择${props.label}`,
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event,
      "type": "date"
    }), null);
  }
};
const builtInFormItems$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DatePicker: DatePicker$1,
  Input: Input$2,
  Select: Select$3
}, Symbol.toStringTag, { value: "Module" }));
const filterInlineItemMap = /* @__PURE__ */ new Map();
function installFilterInlineItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      filterInlineItemMap.set(nape.type, nape.renderer);
    }
  } else {
    filterInlineItemMap.set(item.type, item.renderer);
  }
}
installFilterInlineItem(Object.entries(builtInFormItems$3).map(([, value]) => value));
function useFormItems(props, model) {
  const FormItems = computed(() => props.template.filter((item) => !unref(item == null ? void 0 : item.visible)).map((item) => {
    const FormItemComp = filterInlineItemMap.get(item.type);
    return unref(item.show) === false ? null : createVNode(resolveComponent("ElFormItem"), {
      "label": item.label,
      "key": item.value,
      "prop": item.value
    }, {
      default: () => [item.render ? createVNode(item.render, {
        "model": unref(model),
        "value": item.value
      }, null) : createVNode(FormItemComp, mergeProps(item, {
        "model": unref(model)
      }), null)]
    });
  }));
  return FormItems;
}
const __default__$4 = defineComponent({
  props: {
    template: {
      type: Array,
      default: () => []
    },
    labelConfig: {
      type: Object,
      default: () => ({
        position: "right",
        width: 70
      })
    },
    lang: {
      type: String,
      default: "查询"
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit"],
  setup(props, ctx) {
    const formEl = ref();
    const model = useFormModel(props);
    const FormItems = useFormItems(props, model);
    function submit() {
      ctx.emit("submit", model.value);
    }
    return () => createVNode("div", {
      "class": "fy-filter-inline-wrap"
    }, [createVNode(resolveComponent("el-form"), mergeProps({
      "class": "custom-el-form flex w-full flex-wrap"
    }, props, {
      "model": unref(model),
      "ref": formEl,
      "disabled": props.disabled ?? false,
      "label-position": props.labelConfig.position,
      "inline": true
    }), {
      default: () => [FormItems.value, createVNode(resolveComponent("el-form-item"), null, {
        default: () => [createVNode(FYButton, {
          "type": "primary",
          "loading": props.loading,
          "onClick": submit
        }, {
          default: () => [props.lang]
        })]
      })]
    })]);
  }
});
const FilterInline = __default__$4;
const __moduleId$9 = "../packages/components/filter-inline/src/FilterInline.jsx";
ssrRegisterHelper(__default__$4, __moduleId$9);
const FYFilterInline = withInstall(FilterInline);
function useUnfold() {
  const unfold = ref(false);
  return {
    unfold,
    // eslint-disable-next-line no-return-assign
    toggle: () => unfold.value = !unfold.value
  };
}
const _sfc_main$1h = {
  __name: "TheHeader",
  __ssrInlineRender: true,
  props: {
    ...tmplProps,
    activeIdx: {
      type: Number,
      default: 0
    },
    searchVal: {
      type: String,
      default: ""
    }
  },
  emits: ["update:activeIdx", "update:searchVal"],
  setup(__props, { emit: emits }) {
    const props = __props;
    computed({
      get() {
        return props.activeIdx;
      },
      set(val) {
        emits("update:activeIdx", val);
      }
    });
    const inputVal = computed({
      get() {
        return props.searchVal;
      },
      set(val) {
        emits("update:searchVal", val);
      }
    });
    const translateX = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_divider = resolveComponent("el-divider");
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "member-select-header" }, _attrs))}><div class="input-search">`);
      _push(ssrRenderComponent(unref(FYInput), {
        modelValue: inputVal.value,
        "onUpdate:modelValue": ($event) => inputVal.value = $event,
        placeholder: "搜索"
      }, {
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_divider, { direction: "vertical" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_icon, { size: "18" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Search), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Search))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_divider, { direction: "vertical" }),
              createVNode(_component_el_icon, { size: "18" }, {
                default: withCtx(() => [
                  createVNode(unref(Search))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="header-content"><div class="segment"><!--[-->`);
      ssrRenderList(_ctx.template, (item, idx) => {
        _push(`<div class="${ssrRenderClass([{ active: idx === __props.activeIdx }, "segment-item"])}"><span>${ssrInterpolate(item.label)}</span></div>`);
      });
      _push(`<!--]--><div class="animate-motion" style="${ssrRenderStyle({
        "--x": translateX.value,
        "--item-width": `calc(100% / ${_ctx.template.length})`
      })}"></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/member-select/src/TheHeader.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const TheHeader = _sfc_main$1h;
const avatar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1g = /* @__PURE__ */ Object.assign({
  name: "FYAvatar"
}, {
  __name: "avatar",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: "hh"
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const defaultIconStyle = computed(() => ({
      borderRadius: "50%",
      background: getRandomColor(),
      padding: "5px 8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fy-avatar-wrap" }, _attrs))}><div style="${ssrRenderStyle(defaultIconStyle.value)}">${ssrInterpolate(!__props.full ? __props.name.slice(0, 1) : __props.name)}</div></div>`);
    };
  }
});
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/avatar/src/avatar.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const Avatar = _sfc_main$1g;
const FYAvatar = withInstall(Avatar);
function useMemberCheck(props, emit) {
  const checkedValues = ref([]);
  function onToggle(item) {
    const index2 = checkedValues.value.findIndex((value) => value === item.value);
    if (index2 !== -1) {
      checkedValues.value.splice(index2, 1);
    } else {
      checkedValues.value.push(item.value);
    }
    emit("check", checkedValues.value);
  }
  watchEffect(() => {
    checkedValues.value = props.values;
  });
  return {
    checkedValues,
    onToggle
  };
}
const Select$2 = defineComponent({
  name: "MemberSelect",
  props: {
    tmplItem: {
      type: Object,
      default: () => ({
        options: []
      })
    },
    values: {
      type: Array,
      default: () => []
    },
    searchVal: {
      type: String,
      default: ""
    }
  },
  emits: ["check"],
  setup(props, {
    emit
  }) {
    const {
      checkedValues,
      onToggle
    } = useMemberCheck(props, emit);
    const allOptions = computed(() => props.tmplItem.options);
    const displayOptions = computed(() => allOptions.value.filter((item) => item.label.includes(props.searchVal)));
    return () => createVNode("div", {
      "class": "fy-body-select"
    }, [displayOptions.value.map((item, idx) => createVNode("div", {
      "class": "select-item",
      "key": idx,
      "onClick": () => onToggle(item)
    }, [createVNode("div", {
      "class": "member"
    }, [createVNode(FYAvatar, {
      "name": item.label
    }, null), createVNode("span", null, [item.label])]), checkedValues.value.includes(item.value) ? createVNode("div", {
      "class": "item-icon"
    }, [createVNode(resolveComponent("el-icon"), {
      "size": 20,
      "color": "#6698ff"
    }, {
      default: () => [createVNode(Check, null, null)]
    })]) : null]))]);
  }
});
const TreeSelect = defineComponent({
  name: "MemberTree",
  props: {
    tmplItem: {
      type: Object,
      default: () => ({
        options: []
      })
    },
    values: {
      type: Array,
      default: () => []
    },
    searchVal: {
      type: String,
      default: ""
    }
  },
  emits: ["check"],
  setup(props, {
    emit
  }) {
    const treeEle = ref();
    watch(() => props.searchVal, (val) => {
      treeEle.value.filter(val);
    });
    const {
      checkedValues,
      onToggle
    } = useMemberCheck(props, emit);
    const data = computed(() => props.tmplItem.options);
    function renderContent(h2, {
      data: data2
    }) {
      if (data2.member) {
        return createVNode("div", {
          "class": "select-item",
          "onClick": () => onToggle(data2)
        }, [createVNode("div", {
          "class": "member"
        }, [createVNode(FYAvatar, {
          "name": data2.label
        }, null), createVNode("span", null, [data2.label])]), checkedValues.value.includes(data2.value) ? createVNode("div", {
          "class": "item-icon"
        }, [createVNode(resolveComponent("el-icon"), {
          "size": 20,
          "color": "#6698ff"
        }, {
          default: () => [createVNode(Check, null, null)]
        })]) : null]);
      }
      return createVNode("div", {
        "class": "not-member"
      }, [createVNode("svg", {
        "viewBox": "0 0 16 16",
        "xmlns": "http://www.w3.org/2000/svg",
        "fit": "",
        "height": "1em",
        "width": "1em",
        "preserveAspectRatio": "xMidYMid meet",
        "focusable": "false"
      }, [createVNode("g", {
        "id": "apx1.Base基础/1.icon图标/2.normal/部门",
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [createVNode("path", {
        "d": "M9 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.39l-.016 2.138H11.5a2.1 2.1 0 0 1 2.095 1.95l.005.15V11h.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a.9.9 0 0 0-.787-.893l-.113-.007h-7a.9.9 0 0 0-.893.787l-.007.113V11H4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a2.1 2.1 0 0 1 1.95-2.094l.15-.006h2.894L7.41 5H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm4.8 11.2h-1.6v1.6h1.6v-1.6zm-10 0H2.2v1.6h1.6v-1.6zm5-10H7.2v1.6h1.6V2.2z",
        "id": "apx形状结合"
      }, null)])]), createVNode("span", null, [data2.label])]);
    }
    function filterNode(value, data2) {
      if (!value)
        return true;
      return data2.label.includes(value);
    }
    return () => createVNode("div", {
      "class": "fy-body-tree-select"
    }, [createVNode(resolveComponent("el-tree"), {
      "data": data.value,
      "renderContent": renderContent,
      "ref": treeEle,
      "filterNodeMethod": filterNode
    }, null)]);
  }
});
const __moduleId$8 = "../packages/components/member-select/src/BuiltInSelect.jsx";
ssrRegisterHelper(Select$2, __moduleId$8);
ssrRegisterHelper(TreeSelect, __moduleId$8);
const BuiltInAllSelect = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Select: Select$2,
  TreeSelect,
  useMemberCheck
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1f = {
  __name: "TheBody",
  __ssrInlineRender: true,
  props: {
    ...tmplProps,
    activeIdx: {
      type: Number,
      default: 0
    },
    checkedValues: {
      type: Array,
      default: () => []
    },
    searchVal: {
      type: String,
      default: ""
    }
  },
  emits: ["update:checkedValues"],
  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const activeTmplItem = computed(() => props.template[props.activeIdx]);
    const SelectRenderer = computed(() => {
      const {
        type
      } = activeTmplItem.value;
      const RendererKey = Object.keys(BuiltInAllSelect).find((key) => BuiltInAllSelect[key].name.split("Member")[1].toLocaleLowerCase() === type);
      if (RendererKey) {
        return BuiltInAllSelect[RendererKey];
      }
      return Select$2;
    });
    const values = computed({
      get() {
        return props.checkedValues;
      },
      set(val) {
        emits("update:checkedValues", val);
      }
    });
    const onCheck = (v) => {
      values.value = v;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "member-select-body"
      }, _attrs))}>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(SelectRenderer.value), {
        tmplItem: activeTmplItem.value,
        values: values.value,
        searchVal: __props.searchVal,
        onCheck
      }, null), _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/member-select/src/TheBody.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const _sfc_main$1e = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  props: {
    checkedValues: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fy-member-footer" }, _attrs))}> 已选<span style="${ssrRenderStyle({ "color": "var(--el-color-primary)" })}">${ssrInterpolate(__props.checkedValues.length)}</span>项 </div>`);
    };
  }
};
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/member-select/src/TheFooter.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const TheFooter = _sfc_main$1e;
const MemberSelect_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1d = /* @__PURE__ */ Object.assign({
  name: "FYMemberSelect"
}, {
  __name: "MemberSelect",
  __ssrInlineRender: true,
  props: {
    ...tmplProps,
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible", "checked"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const popoverVisible = computed({
      get() {
        return props.visible;
      },
      set(value) {
        emits("update:visible", value);
      }
    });
    const activeIdx = ref(0);
    const searchVal = ref("");
    const checkedValues = ref([]);
    watchEffect(() => {
      checkedValues.value = Array.from(
        props.template.reduce((pre, cur) => {
          const defaultValue = (cur == null ? void 0 : cur.defaultValue) ?? [];
          while (defaultValue.length) {
            pre.add(defaultValue.shift());
          }
          return pre;
        }, /* @__PURE__ */ new Set())
      );
    });
    watch(checkedValues.value, (val) => emits("checked", val));
    __expose({
      checkedValues: computed(() => checkedValues.value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = resolveComponent("el-popover");
      _push(ssrRenderComponent(_component_el_popover, mergeProps({
        visible: popoverVisible.value,
        "onUpdate:visible": ($event) => popoverVisible.value = $event,
        width: 260,
        "show-arrow": false,
        trigger: "click",
        placement: "bottom-start",
        "popper-class": "fy-member-select-popover",
        "popper-style": "box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
      }, _attrs), {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fy-member-select-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(TheHeader, {
              searchVal: searchVal.value,
              "onUpdate:searchVal": ($event) => searchVal.value = $event,
              activeIdx: activeIdx.value,
              "onUpdate:activeIdx": ($event) => activeIdx.value = $event,
              template: _ctx.template
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1f, {
              checkedValues: checkedValues.value,
              "onUpdate:checkedValues": ($event) => checkedValues.value = $event,
              searchVal: searchVal.value,
              activeIdx: activeIdx.value,
              template: _ctx.template
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(TheFooter, { checkedValues: checkedValues.value }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "fy-member-select-wrap" }, [
                createVNode(TheHeader, {
                  searchVal: searchVal.value,
                  "onUpdate:searchVal": ($event) => searchVal.value = $event,
                  activeIdx: activeIdx.value,
                  "onUpdate:activeIdx": ($event) => activeIdx.value = $event,
                  template: _ctx.template
                }, null, 8, ["searchVal", "onUpdate:searchVal", "activeIdx", "onUpdate:activeIdx", "template"]),
                createVNode(_sfc_main$1f, {
                  checkedValues: checkedValues.value,
                  "onUpdate:checkedValues": ($event) => checkedValues.value = $event,
                  searchVal: searchVal.value,
                  activeIdx: activeIdx.value,
                  template: _ctx.template
                }, null, 8, ["checkedValues", "onUpdate:checkedValues", "searchVal", "activeIdx", "template"]),
                createVNode(TheFooter, { checkedValues: checkedValues.value }, null, 8, ["checkedValues"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/member-select/src/MemberSelect.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const MemberSelect = _sfc_main$1d;
const FYMemberSelect = withInstall(MemberSelect);
const Select$1 = {
  type: "select",
  renderer(props) {
    return createVNode(FYSelect, mergeProps({
      "teleported": false,
      "placeholder": `请选择${props.label}`,
      "multiple": true
    }, props, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event,
      "onChange": () => {
        props.onWithChange({
          field: props.value,
          value: props.model[props.value]
        });
      }
    }), null);
  }
};
const MultipleSelect = {
  type: "multipleSelect",
  renderer: defineComponent({
    props: {
      model: {
        type: Object
      }
    },
    setup(props, {
      attrs
    }) {
      const inpVal = ref("");
      const displayOptions = computed(() => attrs.options.filter(({
        label
      }) => label.includes(inpVal.value)));
      const {
        checkedValues,
        onToggle
      } = useMemberCheck({
        values: (attrs == null ? void 0 : attrs.defaultValue) ?? []
      }, () => {
        props.model[attrs.value] = checkedValues.value;
      });
      return () => createVNode("div", {
        "class": "fy-filter-display-multipleSelect"
      }, [createVNode(FYInput, {
        "modelValue": inpVal.value,
        "onUpdate:modelValue": ($event) => inpVal.value = $event
      }, null), createVNode("div", {
        "class": "scroll-content"
      }, [displayOptions.value.map((item) => createVNode("div", {
        "key": item.value,
        "class": "check-item"
      }, [createVNode(resolveComponent("el-checkbox"), {
        "checked": checkedValues.value.includes(item.value),
        "onChange": () => {
          onToggle(item);
        }
      }, null), createVNode("div", {
        "class": "shape",
        "style": {
          background: getRandomColor()
        }
      }, [item.label])]))])]);
    }
  })
};
const builtInFormItems$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MultipleSelect,
  Select: Select$1
}, Symbol.toStringTag, { value: "Module" }));
const filterDisplayItemMap = /* @__PURE__ */ new Map();
function installFilterDisplayItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      filterDisplayItemMap.set(nape.type, nape.renderer);
    }
  } else {
    filterDisplayItemMap.set(item.type, item.renderer);
  }
}
installFilterDisplayItem(Object.entries(builtInFormItems$2).map(([, value]) => value));
const DisplayItem = defineComponent({
  props: {
    tmplItem: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["click", "change"],
  setup(props, {
    emit
  }) {
    const {
      unfold,
      toggle
    } = useUnfold();
    const onClick = () => {
      toggle();
      emit("click", unfold.value);
    };
    const withOnChangeProps = {
      ...props.tmplItem,
      onWithChange({
        field,
        value: value2
      }) {
        var _a;
        emit("change", {
          field,
          value: value2
        });
        (_a = props == null ? void 0 : props.tmplItem) == null ? void 0 : _a.onChange({
          field,
          value: value2
        });
      }
    };
    const FormItem2 = computed(() => {
      if (props.tmplItem.render)
        return props.tmplItem.render;
      const renderer2 = filterDisplayItemMap.get(props.tmplItem.type);
      return renderer2 || createVNode("div", null, null);
    });
    const value = computed(() => props.tmplItem.value);
    const popoverVisible = ref(false);
    const model = ref({
      [value.value]: props.tmplItem.defaultValue || ""
    });
    const checkedLength = computed(() => {
      const modelValue = model.value[value.value];
      if (Array.isArray(modelValue)) {
        return modelValue.length;
      }
      if (modelValue) {
        return 1;
      }
      return 0;
    });
    const VSlots = {
      reference: () => createVNode("div", {
        "class": popoverVisible.value ? "display-item active" : "display-item",
        "onClick": onClick
      }, [createVNode("span", null, [props.tmplItem.label]), checkedLength.value > 0 ? createVNode("div", {
        "class": "badge"
      }, [checkedLength.value]) : null, createVNode(resolveComponent("el-icon"), null, {
        default: () => [unfold.value ? createVNode(ArrowDown, null, null) : createVNode(ArrowUp, null, null)]
      })]),
      default: () => createVNode("div", {
        "class": "popover-content"
      }, [createVNode(FormItem2.value, mergeProps({
        "model": model.value
      }, withOnChangeProps), null), createVNode("div", {
        "class": "checked"
      }, [createTextVNode("已选"), createVNode("span", {
        "style": "color: var(--el-color-primary)"
      }, [checkedLength.value]), createTextVNode("项")])])
    };
    return () => createVNode(resolveComponent("el-popover"), {
      "visible": popoverVisible.value,
      "onUpdate:visible": ($event) => popoverVisible.value = $event,
      "width": "200",
      "show-arrow": false,
      "trigger": "click",
      "placement": "bottom-start",
      "popper-class": "filter-display-item-popover",
      "teleported": false
    }, VSlots);
  }
});
const __moduleId$7 = "../packages/components/filter-display/src/DisplayItem.jsx";
ssrRegisterHelper(DisplayItem, __moduleId$7);
const filterDisplay = "";
const __default__$3 = defineComponent({
  name: "FYFilterDisplay",
  components: {
    DisplayItem
  },
  props: {
    ...tmplProps
  },
  emits: ["change"],
  setup(props, {
    emit
  }) {
    const emitMap = {};
    function emitChange({
      field,
      value
    }) {
      emitMap[field] = value;
      emit("change", emitMap);
    }
    return () => createVNode("div", {
      "class": "fy-filter-display-wrap"
    }, [props.template.map((tmpl) => createVNode(DisplayItem, {
      "tmplItem": tmpl,
      "key": tmpl.value,
      "onChange": emitChange
    }, null))]);
  }
});
const FilterDisplay = __default__$3;
const __moduleId$6 = "../packages/components/filter-display/src/FilterDisplay.jsx";
ssrRegisterHelper(__default__$3, __moduleId$6);
const FYFilterDisplay = withInstall(FilterDisplay);
const _sfc_main$1c = {
  __name: "ActionMenuItem",
  __ssrInlineRender: true,
  props: {
    tmplItem: {
      type: Object,
      default: () => ({ label: "-" })
    },
    itemModel: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["fy-action-menu-item", {
          "action-menu-item--disabled": __props.tmplItem.disabled
        }]
      }, _attrs))}><div class="item-left">`);
      if (!__props.tmplItem.render) {
        _push(`<!--[-->`);
        if (__props.tmplItem.icon) {
          _push(`<div class="menuitemicon">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tmplItem.icon), null, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="menuitemname">${ssrInterpolate(__props.tmplItem.label)}</span><!--]-->`);
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tmplItem.render), null, null), _parent);
      }
      _push(`</div><div class="item-left">`);
      ssrRenderSlot(_ctx.$slots, "sideRender", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/action-panel/src/ActionMenuItem.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const ActionMenuItem = _sfc_main$1c;
const _sfc_main$1b = {
  __name: "ActionMenuContent",
  __ssrInlineRender: true,
  props: {
    divider: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_divider = resolveComponent("el-divider");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fy-action-menu-content" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_el_divider, {
        style: __props.divider ? null : { display: "none" }
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/action-panel/src/ActionMenuContent.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const ActionMenuContent = _sfc_main$1b;
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const _sfc_main$1a = /* @__PURE__ */ Object.assign({
  name: "FYActionPanel"
}, {
  __name: "ActionPanel",
  __ssrInlineRender: true,
  props: {
    ...tmplProps,
    visible: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "bottom-start"
    },
    trigger: {
      type: String,
      default: "click"
    },
    panelModel: {
      type: Object
    }
  },
  emits: ["update:visible"],
  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const popoverVisible = computed({
      get() {
        return props.visible;
      },
      set(value) {
        emits("update:visible", value);
      }
    });
    const genTmpl = (tmpl, divider = false) => {
      const MenuItem2 = tmpl.map((item, idx) => {
        const slots = {};
        if (item.sideRender) {
          slots.sideRender = () => createVNode(item.sideRender, null, null);
        }
        return createVNode(ActionMenuItem, {
          "key": idx,
          "tmplItem": item,
          "itemModel": props.panelModel
        }, slots);
      });
      return createVNode(ActionMenuContent, {
        "divider": divider
      }, _isSlot(MenuItem2) ? MenuItem2 : {
        default: () => [MenuItem2]
      });
    };
    const ActionMenuRenderer = computed(() => {
      if (props.template[0] && Array.isArray(props.template[0])) {
        return createVNode(Fragment, null, [props.template.map((tmpl, index2) => genTmpl(tmpl, index2 !== props.template.length - 1))]);
      }
      return genTmpl(props.template);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = resolveComponent("el-popover");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fy-action-panel-wrap"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_popover, {
        visible: popoverVisible.value,
        "onUpdate:visible": ($event) => popoverVisible.value = $event,
        width: "240",
        "show-arrow": false,
        trigger: __props.trigger,
        placement: __props.placement,
        "popper-class": "fy-action-panel-popover",
        teleported: true
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "default")];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fy-action-panel"${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(ActionMenuRenderer.value), null, null), _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [createVNode("div", {
              class: "fy-action-panel"
            }, [(openBlock(), createBlock(resolveDynamicComponent(ActionMenuRenderer.value)))])];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const ActionPanel_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/action-panel/src/ActionPanel.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const FYActionPanel = withInstall(_sfc_main$1a);
const _sfc_main$19 = /* @__PURE__ */ Object.assign({
  name: "FYTree"
}, {
  __name: "tree",
  __ssrInlineRender: true,
  props: {
    config: {
      type: Object,
      default: () => ({
        expandOnClickNode: false,
        tooltipText: "更多",
        editable: false,
        // 是否使用表单进行树的编辑
        ifDialog: false,
        draggable: false,
        deleteDesc: "模块删除后不可恢复，删除模块会一起删除子模块。",
        dialogTmpl: [{
          type: "input",
          label: "模板名称",
          value: "label",
          limit: 10,
          require: true,
          rules: [{
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }]
        }, {
          type: "select",
          label: "负责人",
          value: "person",
          options: [{
            value: "value1",
            label: "李恩伟"
          }, {
            value: "value2",
            label: "藏炼鑫"
          }]
        }, {
          type: "cascader",
          label: "组织",
          value: "organization",
          options: [{
            value: "guide",
            label: "研发部",
            children: [{
              value: "disciplines",
              label: "前端",
              children: [{
                value: "consistency",
                label: "架构组"
              }, {
                value: "feedback",
                label: "业务组"
              }]
            }, {
              value: "navigation",
              label: "后端组",
              children: [{
                value: "side nav",
                label: "AI组"
              }, {
                value: "top nav",
                label: "Java组"
              }]
            }]
          }]
        }],
        dataSource: [{
          id: 1,
          label: "Level one 1",
          allowDrag: false,
          children: [{
            label: "Level two 1-1",
            id: 2,
            children: [{
              id: 3,
              label: "Level three 1-1-1",
              notLevelOne: true
            }]
          }]
        }, {
          label: "Level one 2",
          id: 4,
          levelOne: true,
          children: [{
            id: 5,
            label: "Level two 2-1",
            children: [{
              id: 6,
              label: "Level three 2-1-1",
              children: [{
                id: 14,
                label: "Level three 2-1-1-1"
              }, {
                id: 15,
                label: "Level three 2-1-1-2"
              }]
            }]
          }, {
            id: 7,
            label: "Level two 2-2",
            children: [{
              id: 8,
              label: "Level three 2-2-1"
            }]
          }]
        }, {
          label: "Level one 3",
          id: 9,
          children: [{
            forbid: [1, 4],
            label: "Level two 3-1",
            id: 10,
            children: [{
              id: 11,
              label: "Level three 3-1-1"
            }]
          }, {
            id: 12,
            label: "Level two 3-2",
            children: [{
              id: 13,
              label: "Level three 3-2-1"
            }]
          }]
        }]
      })
    }
  },
  emits: ["node-click"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const myRef = ref(null);
    const formModel = ref({});
    const dialogVisible = ref(false);
    const createSubTree = ({
      node,
      data: target
    }) => {
      var _a;
      dialogConfig.value.type = "create";
      dialogConfig.value.title = "新增";
      if (props.config.ifDialog === true) {
        dialogConfig.value.title = "新增";
        (_a = props.config.dialogTmpl) == null ? void 0 : _a.forEach((item) => {
          formModel.value[item.value] = "";
        });
        dialogVisible.value = true;
        currentTarget.value = {
          node,
          data: target
        };
        setTimeout(() => {
          target.panelVisible = false;
        }, 0);
      } else {
        const newChild = {
          id: countNodesRecursive(props.config.dataSource) + 1,
          label: "新模块",
          children: [],
          type: "input"
        };
        myRef.value.append(newChild, target.id);
        setTimeout(() => {
          node.expand();
          target.panelVisible = false;
        }, 0);
      }
    };
    const handleSubmit = () => {
      if (dialogConfig.value.type === "create") {
        const newChild = {
          id: countNodesRecursive(props.config.dataSource) + 1,
          children: [],
          type: "text",
          ...formModel.value
        };
        myRef.value.append(newChild, currentTarget.value.data.id);
        dialogVisible.value = false;
        setTimeout(() => {
          currentTarget.value.node.expand();
        }, 0);
      } else {
        const {
          parent
        } = currentTarget.value.node;
        const target = {
          ...currentTarget.value.data,
          ...formModel.value,
          type: "text"
        };
        let targetSon;
        if (parent.parent === null) {
          targetSon = parent.data.findIndex((item) => item.id === currentTarget.value.data.id);
          parent.data.splice(targetSon, 1, target);
        } else {
          targetSon = parent.data.children.findIndex((item) => item.id === currentTarget.value.data.id);
          parent.data.children.splice(targetSon, 1, target);
        }
        dialogVisible.value = false;
      }
    };
    const handleCancel = () => {
      dialogVisible.value = false;
    };
    const editTree = ({
      node,
      data: target
    }) => {
      var _a;
      dialogConfig.value.type = "update";
      dialogConfig.value.title = "编辑";
      if (props.config.ifDialog === true) {
        dialogConfig.value.title = "编辑";
        (_a = props.config.dialogTmpl) == null ? void 0 : _a.forEach((item) => {
          formModel.value[item.value] = target[item.value];
        });
        dialogVisible.value = true;
        currentTarget.value = {
          node,
          data: target
        };
        setTimeout(() => {
          target.panelVisible = false;
        }, 0);
      } else {
        target.type = "input";
        setTimeout(() => {
          target.panelVisible = false;
        }, 0);
      }
    };
    const currentTarget = ref(null);
    const deleteTree = ({
      node,
      data: target
    }) => {
      dialogDeleteConfig.value.businessType = "模块";
      dialogDeleteConfig.value.tagText = target.label;
      deleteDialogVisible.value = true;
      currentTarget.value = {
        node,
        data: target
      };
      setTimeout(() => {
        target.panelVisible = false;
      }, 0);
    };
    const handleDeleteConfirm = () => {
      var _a;
      (_a = myRef.value) == null ? void 0 : _a.remove(currentTarget.value.node);
      deleteDialogVisible.value = false;
    };
    const handleDeleteCancel = () => {
      deleteDialogVisible.value = false;
    };
    const itemNodeClick = (obj, node, treeNode, event) => {
      emit("node-click", obj, node, treeNode, event);
    };
    const tmpl = mergeTemplate([{
      label: "新建子模块",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(Plus, null, null)]
      }),
      onClick: (e) => {
        createSubTree(e);
      }
    }], [{
      label: "编辑",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(Edit, null, null)]
      }),
      onClick: (e) => {
        editTree(e);
      }
    }, {
      label: "删除",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(Delete, null, null)]
      }),
      onClick: (e) => {
        deleteTree(e);
      }
    }]);
    const defaultProps = {
      children: "children",
      label: "label"
    };
    const togglePanel = (e) => {
      if (e.panelVisible) {
        e.panelVisible = false;
      }
    };
    const nodeExpand = (obj, node) => {
      node.isExpand = true;
    };
    const nodeCollapse = (obj, node) => {
      node.isExpand = false;
    };
    const nodeClick = (node) => {
      if (node.expanded) {
        node.collapse();
      } else {
        node.expand();
      }
    };
    const allowDrag = (draggingNode) => draggingNode.data.allowDrag !== false;
    const allowDrop = (draggingNode, dropNode, type) => {
      if (draggingNode.data.levelOne === true) {
        return dropNode.level === 1 && type !== "inner";
      }
      if (draggingNode.data.notLevelOne === true) {
        return dropNode.level === 1 && type !== "prev" && type !== "next" || dropNode.level !== 1;
      }
      if (draggingNode.data.forbid && draggingNode.data.forbid.length) {
        return !draggingNode.data.forbid.includes(dropNode.data.id);
      }
      return true;
    };
    const handleEnter = (e, target) => {
      target.type = "text";
    };
    const deleteDialogVisible = ref(false);
    const dialogDeleteConfig = ref({
      title: "确认删除",
      type: "delete",
      businessType: "",
      tagText: "",
      customDesc: props.config.deleteDesc || "请注意，删除后无法恢复"
    });
    const dialogConfig = ref({
      title: "新增",
      template: props.config.dialogTmpl
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_tooltip = resolveComponent("el-tooltip");
      const _component_FYInput = resolveComponent("FYInput");
      const _component_FYActionPanel = resolveComponent("FYActionPanel");
      const _component_FYDialog = resolveComponent("FYDialog");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fy-tree-wrap"
      }, _attrs))} data-v-64546dc8>`);
      _push(ssrRenderComponent(unref(ElTree), {
        ref_key: "myRef",
        ref: myRef,
        data: props.config.dataSource,
        props: defaultProps,
        "expand-on-click-node": !!props.config.expandOnClickNode,
        draggable: !!props.config.draggable,
        "node-key": "id",
        "allow-drag": allowDrag,
        "allow-drop": allowDrop,
        onNodeExpand: nodeExpand,
        onNodeCollapse: nodeCollapse,
        onNodeClick: itemNodeClick
      }, {
        default: withCtx(({
          node,
          data
        }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="custom-tree-node" data-v-64546dc8${_scopeId}><span class="${ssrRenderClass(["node-left-icon", props.config.draggable ? "visibility" : "visibility-hidden"])}" data-v-64546dc8${_scopeId}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false" data-v-64546dc8${_scopeId}><g id="ailaction/drag--" stroke-width="1" fill-rule="evenodd" data-v-64546dc8${_scopeId}><g id="ail拖动" transform="translate(5 1)" fill-rule="nonzero" data-v-64546dc8${_scopeId}><path id="ail形状结合" d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" data-v-64546dc8${_scopeId}></path></g></g></svg></span>`);
            if (node.data.children && node.data.children.length && !node.expanded) {
              _push2(ssrRenderComponent(_component_el_icon, {
                class: "expand-icon",
                onClick: ($event) => nodeClick(node)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ArrowRight), null, null, _parent3, _scopeId2));
                  } else {
                    return [createVNode(unref(ArrowRight))];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (node.data.children && node.data.children.length && node.expanded) {
              _push2(ssrRenderComponent(_component_el_icon, {
                class: "expand-icon",
                onClick: ($event) => nodeClick(node)
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ArrowDown), null, null, _parent3, _scopeId2));
                  } else {
                    return [createVNode(unref(ArrowDown))];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else if (!node.data.children || !node.data.children.length) {
              _push2(ssrRenderComponent(_component_el_icon, {
                class: "expand-icon",
                style: {
                  "visibility": "hidden"
                }
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ArrowDown), null, null, _parent3, _scopeId2));
                  } else {
                    return [createVNode(unref(ArrowDown))];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!data.render) {
              ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                _push2(`<span class="icon-svg" data-v-64546dc8${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "custom-icon", {}, () => {
                  _push2(`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false" data-v-64546dc8${_scopeId}><g id="axlrd/test-case-type-bold" stroke-width="1" fill-rule="evenodd" data-v-64546dc8${_scopeId}><path id="axl形状结合" d="M7.283 9.453a1.453 1.453 0 0 1-.013-.008L4.41 7.794l-.002-.002a.047.047 0 0 0-.041.003l-2.86 1.652a.047.047 0 0 0-.024.04v3.303c0 .017.009.033.024.041l2.86 1.652a.047.047 0 0 0 .047 0l2.86-1.652a.047.047 0 0 0 .01-.007l-.001-.034V9.488v-.035zm.707 4.581l-.016.01-2.86 1.651c-.448.259-1 .259-1.447 0l-2.86-1.651a1.447 1.447 0 0 1-.724-1.254V9.488c0-.518.276-.995.724-1.254l2.86-1.651.02-.012V3.238c0-.518.276-.995.723-1.254L7.27.333c.448-.259 1-.259 1.448 0l2.86 1.651c.448.259.724.736.724 1.254v3.338l.012.007 2.86 1.651c.448.259.724.736.724 1.254v3.302c0 .517-.276.995-.724 1.254l-2.86 1.651c-.448.259-1 .259-1.447 0l-2.86-1.651a1.454 1.454 0 0 1-.017-.01zM5.105 6.578l.01.005 2.86 1.651.001.001A.047.047 0 0 0 8 8.24l.008-.005 2.86-1.651.026-.015a.047.047 0 0 0 .009-.028V3.238a.047.047 0 0 0-.024-.041l-2.86-1.652a.047.047 0 0 0-.047 0L5.11 3.197a.047.047 0 0 0-.024.04V6.54c0 .015.007.029.018.038zm3.593 6.246a.047.047 0 0 0 .009.007l2.86 1.652a.047.047 0 0 0 .047 0l2.86-1.652a.047.047 0 0 0 .024-.04V9.487a.047.047 0 0 0-.024-.041l-2.86-1.652a.047.047 0 0 0-.028-.006 1.454 1.454 0 0 1-.008.005l-2.86 1.65a1.453 1.453 0 0 1-.02.012v3.368z" data-v-64546dc8${_scopeId}></path></g></svg>`);
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              }, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
            if (data.render) {
              _push2(`<span data-v-64546dc8${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(data.render), null, null), _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<span data-v-64546dc8${_scopeId}>`);
              if (data.type !== "input") {
                _push2(`<span class="fy-tree-node-content" data-v-64546dc8${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_tooltip, {
                  class: "box-item",
                  effect: "dark",
                  content: data.label,
                  placement: "top",
                  "show-after": "1000"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(data.label)}`);
                    } else {
                      return [createTextVNode(toDisplayString(data.label), 1)];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</span>`);
              } else {
                _push2(`<span class="fy-tree-node-content fy-tree-content-input" data-v-64546dc8${_scopeId}>`);
                _push2(ssrRenderComponent(_component_FYInput, {
                  modelValue: data.label,
                  "onUpdate:modelValue": ($event) => data.label = $event,
                  autoFocus: "",
                  onEnter: (e) => handleEnter(e, data),
                  onBlur: (e) => handleEnter(e, data)
                }, null, _parent2, _scopeId));
                _push2(`</span>`);
              }
              _push2(ssrRenderComponent(_component_FYActionPanel, {
                visible: data.panelVisible,
                "onUpdate:visible": ($event) => data.panelVisible = $event,
                template: unref(tmpl),
                panelModel: {
                  node,
                  data
                }
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (props.config.editable) {
                      _push3(`<span class="node-right-icon" data-v-64546dc8${_scopeId2}><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false" data-v-64546dc8${_scopeId2}><g id="apb1.Base基础/1.icon图标/2.normal/more-vertical" stroke-width="1" fill-rule="evenodd" data-v-64546dc8${_scopeId2}><path id="apb形状结合" d="M8 4.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" data-v-64546dc8${_scopeId2}></path></g></svg></span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [props.config.editable ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "node-right-icon",
                      onClick: ($event) => togglePanel(data)
                    }, [(openBlock(), createBlock("svg", {
                      viewBox: "0 0 16 16",
                      xmlns: "http://www.w3.org/2000/svg",
                      fit: "",
                      height: "1em",
                      width: "1em",
                      preserveAspectRatio: "xMidYMid meet",
                      focusable: "false"
                    }, [createVNode("g", {
                      id: "apb1.Base基础/1.icon图标/2.normal/more-vertical",
                      "stroke-width": "1",
                      "fill-rule": "evenodd"
                    }, [createVNode("path", {
                      id: "apb形状结合",
                      d: "M8 4.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
                    })])]))], 8, ["onClick"])) : createCommentVNode("", true)];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</span>`);
            }
            _push2(`</span>`);
          } else {
            return [createVNode("span", {
              class: "custom-tree-node"
            }, [createVNode("span", {
              class: ["node-left-icon", props.config.draggable ? "visibility" : "visibility-hidden"]
            }, [(openBlock(), createBlock("svg", {
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              fit: "",
              height: "1em",
              width: "1em",
              preserveAspectRatio: "xMidYMid meet",
              focusable: "false"
            }, [createVNode("g", {
              id: "ailaction/drag--",
              "stroke-width": "1",
              "fill-rule": "evenodd"
            }, [createVNode("g", {
              id: "ail拖动",
              transform: "translate(5 1)",
              "fill-rule": "nonzero"
            }, [createVNode("path", {
              id: "ail形状结合",
              d: "M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            })])])]))], 2), node.data.children && node.data.children.length && !node.expanded ? (openBlock(), createBlock(_component_el_icon, {
              key: 0,
              class: "expand-icon",
              onClick: ($event) => nodeClick(node)
            }, {
              default: withCtx(() => [createVNode(unref(ArrowRight))]),
              _: 2
            }, 1032, ["onClick"])) : node.data.children && node.data.children.length && node.expanded ? (openBlock(), createBlock(_component_el_icon, {
              key: 1,
              class: "expand-icon",
              onClick: ($event) => nodeClick(node)
            }, {
              default: withCtx(() => [createVNode(unref(ArrowDown))]),
              _: 2
            }, 1032, ["onClick"])) : !node.data.children || !node.data.children.length ? (openBlock(), createBlock(_component_el_icon, {
              key: 2,
              class: "expand-icon",
              style: {
                "visibility": "hidden"
              }
            }, {
              default: withCtx(() => [createVNode(unref(ArrowDown))]),
              _: 1
            })) : createCommentVNode("", true), !data.render ? renderSlot(_ctx.$slots, "icon", {
              key: 3
            }, () => [createVNode("span", {
              class: "icon-svg"
            }, [renderSlot(_ctx.$slots, "custom-icon", {}, () => [(openBlock(), createBlock("svg", {
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
              fit: "",
              height: "1em",
              width: "1em",
              preserveAspectRatio: "xMidYMid meet",
              focusable: "false"
            }, [createVNode("g", {
              id: "axlrd/test-case-type-bold",
              "stroke-width": "1",
              "fill-rule": "evenodd"
            }, [createVNode("path", {
              id: "axl形状结合",
              d: "M7.283 9.453a1.453 1.453 0 0 1-.013-.008L4.41 7.794l-.002-.002a.047.047 0 0 0-.041.003l-2.86 1.652a.047.047 0 0 0-.024.04v3.303c0 .017.009.033.024.041l2.86 1.652a.047.047 0 0 0 .047 0l2.86-1.652a.047.047 0 0 0 .01-.007l-.001-.034V9.488v-.035zm.707 4.581l-.016.01-2.86 1.651c-.448.259-1 .259-1.447 0l-2.86-1.651a1.447 1.447 0 0 1-.724-1.254V9.488c0-.518.276-.995.724-1.254l2.86-1.651.02-.012V3.238c0-.518.276-.995.723-1.254L7.27.333c.448-.259 1-.259 1.448 0l2.86 1.651c.448.259.724.736.724 1.254v3.338l.012.007 2.86 1.651c.448.259.724.736.724 1.254v3.302c0 .517-.276.995-.724 1.254l-2.86 1.651c-.448.259-1 .259-1.447 0l-2.86-1.651a1.454 1.454 0 0 1-.017-.01zM5.105 6.578l.01.005 2.86 1.651.001.001A.047.047 0 0 0 8 8.24l.008-.005 2.86-1.651.026-.015a.047.047 0 0 0 .009-.028V3.238a.047.047 0 0 0-.024-.041l-2.86-1.652a.047.047 0 0 0-.047 0L5.11 3.197a.047.047 0 0 0-.024.04V6.54c0 .015.007.029.018.038zm3.593 6.246a.047.047 0 0 0 .009.007l2.86 1.652a.047.047 0 0 0 .047 0l2.86-1.652a.047.047 0 0 0 .024-.04V9.487a.047.047 0 0 0-.024-.041l-2.86-1.652a.047.047 0 0 0-.028-.006 1.454 1.454 0 0 1-.008.005l-2.86 1.65a1.453 1.453 0 0 1-.02.012v3.368z"
            })])]))], true)])], true) : createCommentVNode("", true), data.render ? (openBlock(), createBlock("span", {
              key: 4
            }, [(openBlock(), createBlock(resolveDynamicComponent(data.render)))])) : (openBlock(), createBlock("span", {
              key: 5
            }, [data.type !== "input" ? (openBlock(), createBlock("span", {
              key: 0,
              class: "fy-tree-node-content"
            }, [createVNode(_component_el_tooltip, {
              class: "box-item",
              effect: "dark",
              content: data.label,
              placement: "top",
              "show-after": "1000"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(data.label), 1)]),
              _: 2
            }, 1032, ["content"])])) : (openBlock(), createBlock("span", {
              key: 1,
              class: "fy-tree-node-content fy-tree-content-input"
            }, [createVNode(_component_FYInput, {
              modelValue: data.label,
              "onUpdate:modelValue": ($event) => data.label = $event,
              autoFocus: "",
              onEnter: (e) => handleEnter(e, data),
              onBlur: (e) => handleEnter(e, data)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "onEnter", "onBlur"])])), createVNode(_component_FYActionPanel, {
              visible: data.panelVisible,
              "onUpdate:visible": ($event) => data.panelVisible = $event,
              template: unref(tmpl),
              panelModel: {
                node,
                data
              }
            }, {
              default: withCtx(() => [props.config.editable ? (openBlock(), createBlock("span", {
                key: 0,
                class: "node-right-icon",
                onClick: ($event) => togglePanel(data)
              }, [(openBlock(), createBlock("svg", {
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg",
                fit: "",
                height: "1em",
                width: "1em",
                preserveAspectRatio: "xMidYMid meet",
                focusable: "false"
              }, [createVNode("g", {
                id: "apb1.Base基础/1.icon图标/2.normal/more-vertical",
                "stroke-width": "1",
                "fill-rule": "evenodd"
              }, [createVNode("path", {
                id: "apb形状结合",
                d: "M8 4.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
              })])]))], 8, ["onClick"])) : createCommentVNode("", true)]),
              _: 2
            }, 1032, ["visible", "onUpdate:visible", "template", "panelModel"])]))])];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_component_FYDialog, {
        modelValue: deleteDialogVisible.value,
        "onUpdate:modelValue": ($event) => deleteDialogVisible.value = $event,
        dialogConfig: dialogDeleteConfig.value,
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel
      }, null, _parent));
      _push(ssrRenderComponent(_component_FYDialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
        dialogConfig: dialogConfig.value,
        formModel: formModel.value,
        onSubmit: handleSubmit,
        onCancel: handleCancel
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const tree_vue_vue_type_style_index_0_scoped_64546dc8_lang = "";
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/tree/src/tree.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const Tree = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-64546dc8"]]);
const FYTree = withInstall(Tree);
const Select = {
  type: "select",
  renderer(props) {
    return createVNode(FYSelect, mergeProps(props, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event
    }), null);
  }
};
const Input$1 = {
  type: "input",
  renderer(props) {
    return createVNode(FYInput, mergeProps(props, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event
    }), null);
  }
};
const Switch = {
  type: "switch",
  renderer(props) {
    return createVNode(FYSwitch, mergeProps(props, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event
    }), null);
  }
};
const DatePicker = {
  type: "datePicker",
  renderer(props) {
    return createVNode(FYDatePicker, mergeProps(props, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event
    }), null);
  }
};
const Cascader = {
  type: "cascader",
  renderer(props) {
    return createVNode(FYCascader, mergeProps(props, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event
    }), null);
  }
};
const builtInFormItems$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Cascader,
  DatePicker,
  Input: Input$1,
  Select,
  Switch
}, Symbol.toStringTag, { value: "Module" }));
const formItemMap = /* @__PURE__ */ new Map();
function installFormItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      formItemMap.set(nape.type, nape.renderer);
    }
  } else {
    formItemMap.set(item.type, item.renderer);
  }
}
installFormItem(Object.entries(builtInFormItems$1).map(([, value]) => value));
const FormItem = defineComponent({
  props: {
    tmplItem: {
      type: Object,
      default: () => ({})
    },
    // 表示采用系统配置的表单样式
    config: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const FormItemCom = computed(() => {
      if (props.tmplItem.render)
        return props.tmplItem.render;
      const renderer2 = formItemMap.get(props.tmplItem.type);
      return renderer2 || createVNode("div", null, null);
    });
    const getFromStyle = (item) => {
      if (item.full) {
        return {
          flex: "0 0 100%"
        };
      }
      if (item.half) {
        return {
          flex: "0 0 45%"
        };
      }
      if (item.oneOfFour) {
        return {
          flex: "0 0 24.5%"
        };
      }
      return {
        flex: "0 0 100%"
      };
    };
    const getClass = computed(() => {
      const target = [];
      if (props.config) {
        target.push("form-item-config-wrap");
      }
      return target.join(" ");
    });
    return () => createVNode(resolveComponent("ElFormItem"), {
      "label": props.tmplItem.label,
      "key": props.tmplItem.value,
      "prop": props.tmplItem.value,
      "style": getFromStyle(props.tmplItem),
      "class": getClass.value,
      "disabled": !!props.tmplItem.disabled
    }, {
      default: () => [createVNode(FormItemCom.value, mergeProps({
        "model": props.tmplItem.model
      }, props.tmplItem), null), props.config ? createVNode("div", {
        "class": "fy-form-config-info",
        "style": {
          marginLeft: "20px",
          width: "16px",
          height: "16px"
        }
      }, null) : null, props.config ? createVNode("slot", null, null) : null, props.config ? createVNode("div", {
        "class": "fy-form-config-desc",
        "style": {
          marginLeft: "4px",
          fontSize: "12px"
        }
      }, [props.tmplItem.desc]) : null]
    });
  }
});
const __moduleId$5 = "../packages/components/form/src/FormItem.jsx";
ssrRegisterHelper(FormItem, __moduleId$5);
const FormItemDetail = defineComponent({
  props: {
    tmplItem: {
      type: Object,
      default: () => ({})
    },
    // 表示采用系统配置的表单样式
    config: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const FormItemCom = computed(() => createVNode("div", {
      "class": "form-item-detail"
    }, [props.tmplItem.model[props.tmplItem.value]]));
    const getFromStyle = (item) => {
      if (item.full) {
        return {
          flex: "0 0 100%"
        };
      }
      if (item.half) {
        return {
          flex: "0 0 45%"
        };
      }
      if (item.oneOfFour) {
        return {
          flex: "0 0 24.5%"
        };
      }
      return {
        flex: "0 0 100%"
      };
    };
    const getClass = computed(() => {
      const target = [];
      target.push("form-item-detail-wrap");
      if (props.config) {
        target.push("form-item-config-wrap");
      }
      return target.join(" ");
    });
    return () => createVNode(resolveComponent("ElFormItem"), {
      "label": props.tmplItem.label,
      "key": props.tmplItem.value,
      "prop": props.tmplItem.value,
      "style": getFromStyle(props.tmplItem),
      "class": getClass.value
    }, {
      default: () => [createVNode(FormItemCom.value, null, null), props.config ? createVNode("div", {
        "class": "fy-form-config-info",
        "style": {
          marginLeft: "20px",
          width: "16px",
          height: "16px"
        }
      }, null) : null, props.config ? createVNode("slot", null, null) : null, props.config ? createVNode("div", {
        "class": "fy-form-config-desc",
        "style": {
          marginLeft: "4px",
          fontSize: "12px"
        }
      }, [props.tmplItem.desc]) : null]
    });
  }
});
const __moduleId$4 = "../packages/components/form/src/FormItemDetail.jsx";
ssrRegisterHelper(FormItemDetail, __moduleId$4);
const form = "";
const __default__$2 = defineComponent({
  name: "FYForm",
  props: {
    template: {
      type: Array,
      default: () => []
    },
    labelPosition: {
      type: String,
      default: "top"
    },
    labelWidth: {
      type: String,
      default: "auto"
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    shouldValidate: {
      type: Boolean,
      default: true
    },
    // 分为write类型（即新增和编辑），以及read（详情）
    businessType: {
      type: String,
      default: "write"
    },
    // form组件和formItem组件的配置
    config: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit", "fail", "update:modelValue"],
  setup(props, {
    attrs,
    emit,
    expose
  }) {
    const rules = ref(null);
    const realFormRef = ref(null);
    watch(rules, () => {
      setTimeout(() => {
        var _a;
        (_a = realFormRef.value) == null ? void 0 : _a.clearValidate();
      }, 100);
    });
    const resetFields = () => {
      var _a;
      (_a = realFormRef.value) == null ? void 0 : _a.resetFields();
    };
    const validate = () => {
      var _a;
      (_a = realFormRef.value) == null ? void 0 : _a.validate((valid, object) => {
        if (valid) {
          emit("submit");
        } else {
          emit("fail", object);
          return false;
        }
        return null;
      });
    };
    const validateField = (props2, cb) => {
      var _a;
      (_a = realFormRef.value) == null ? void 0 : _a.validateField(props2, cb);
    };
    const clearValidate = (props2) => {
      var _a, _b;
      if (props2) {
        (_a = realFormRef.value) == null ? void 0 : _a.clearValidate(props2);
      } else {
        (_b = realFormRef.value) == null ? void 0 : _b.clearValidate();
      }
    };
    const getRules = (list) => {
      const targetRules = list.reduce((rules2, item) => {
        rules2[item.value] = [];
        if (item.require) {
          rules2[item.value].push({
            required: true,
            trigger: ["blur", "change"],
            message: `${item.label}为必填项`
          });
        }
        if (item.rules) {
          rules2[item.value].push(...item.rules);
        }
        return rules2;
      }, {});
      return targetRules;
    };
    rules.value = props.shouldValidate ? getRules(props.template) : [];
    let initFormItems = props.template.filter((item) => !item.filterUnShow && item.show !== false).map((sec) => ({
      ...sec,
      model: props.modelValue
    }));
    const styleObj = {
      full: !(initFormItems.length > 4) || props.config,
      half: initFormItems.length > 4 && !props.config,
      oneOfFour: false
    };
    initFormItems = initFormItems.map((item) => ({
      ...item,
      ...styleObj
    }));
    expose({
      resetFields,
      validate,
      validateField,
      clearValidate
    });
    return () => createVNode(resolveComponent("el-form"), mergeProps({
      "label-position": props.labelPosition,
      "model": props.modelValue,
      "labelWidth": props.labelWidth,
      "rules": rules,
      "ref": realFormRef
    }, attrs), {
      default: () => [props.businessType !== "read" ? initFormItems.map(
        (item) => createVNode(FormItem, {
          "tmplItem": item,
          "key": item.value,
          "config": props.config
        }, null)
        // eslint-disable-next-line
      ) : initFormItems.map(
        (item) => createVNode(FormItemDetail, {
          "tmplItem": item,
          "key": item.value,
          "config": props.config
        }, null)
        // eslint-disable-next-line
      )]
    });
  }
});
const Form = __default__$2;
const __moduleId$3 = "../packages/components/form/src/Form.jsx";
ssrRegisterHelper(__default__$2, __moduleId$3);
const FYForm = withInstall(Form);
const _sfc_main$18 = /* @__PURE__ */ Object.assign({
  name: "ButtonUpload"
}, {
  __name: "ButtonUpload",
  __ssrInlineRender: true,
  emits: ["type-check", "file-change"],
  setup(__props, {
    emit
  }) {
    const config = inject("config");
    const buttonVisible = ref(false);
    const tmpl = [{
      label: "从文件导入",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(Edit, null, null)]
      }),
      onClick: () => {
        openDialog();
      }
    }];
    const visible = ref(false);
    ref(false);
    const openDialog = () => {
      if (config.buttonConfig.type === "dialog") {
        visible.value = true;
      } else {
        directUpload();
      }
    };
    const handleSubmit = () => {
    };
    const handleFail = () => {
    };
    const handleCancel = () => {
    };
    provide("dialogVisible", visible);
    const currentFile = ref(null);
    const currentFileName = ref("");
    const onChange = (file2, files) => {
      const typeList = file2.name.split(".");
      const type = typeList[typeList.length - 1];
      currentFileName.value = file2.name;
      if (["pdf"].includes(type)) {
        currentFile.value = "pdf";
      } else if (["doc", "docx"].includes(type)) {
        currentFile.value = "doc";
      } else if (["jpg", "jpeg", "gif", "png"].includes(type)) {
        currentFile.value = "jpg";
      } else if (["xlsx", "xls", "csv"].includes(type)) {
        currentFile.value = "excel";
      } else if (["rar", "zip"].includes(type)) {
        currentFile.value = "zip";
      } else {
        currentFile.value = "file";
      }
      if (config.allow && config.allow.length) {
        if (config.allow.includes(type)) {
          emit("type-check", true);
        } else {
          emit("type-check", false);
        }
      }
      emit("file-change", file2, files);
    };
    const myRef = ref(null);
    const directUpload = () => {
      myRef.value.click();
    };
    const fileChange = (file2, files) => {
      console.log(file2, files);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYActionPanel = resolveComponent("FYActionPanel");
      const _component_FYButton = resolveComponent("FYButton");
      const _component_FYDialog = resolveComponent("FYDialog");
      const _component_el_upload = resolveComponent("el-upload");
      if (unref(config).buttonConfig.type === "dialog") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_FYActionPanel, {
          visible: buttonVisible.value,
          "onUpdate:visible": ($event) => buttonVisible.value = $event,
          template: tmpl
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_FYButton, {
                type: "primary",
                class: "upload-btn"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g id="å¯¼å…¥ 1"${_scopeId2}><path id="Vector" d="M20.7127 10.3808C20.7127 11.2224 20.5619 12.0378 20.2878 12.7874C19.2874 9.98626 16.6288 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.2164 10.052 12.8053 10.2624C12.6409 10.3413 12.449 10.3939 12.2709 10.3939C12.0105 10.3939 11.7638 10.315 11.5445 10.1572L6.72063 6.55394C6.41911 6.33038 6.24097 5.9753 6.24097 5.59395C6.24097 5.21259 6.41913 4.85751 6.72063 4.63393L11.5445 1.0175C11.7501 0.8597 12.0105 0.780792 12.2709 0.780792C12.449 0.780792 12.6409 0.820238 12.8053 0.912294C13.2164 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C17.4648 3.17421 20.7127 6.40927 20.7127 10.3808Z" fill="white"${_scopeId2}></path><path id="Vector_2" d="M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z" fill="white"${_scopeId2}></path></g></svg></span> 导入 `);
                  } else {
                    return [createVNode("span", null, [(openBlock(), createBlock("svg", {
                      width: "22",
                      height: "18",
                      viewBox: "0 0 22 18",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [createVNode("g", {
                      id: "å¯¼å…¥ 1"
                    }, [createVNode("path", {
                      id: "Vector",
                      d: "M20.7127 10.3808C20.7127 11.2224 20.5619 12.0378 20.2878 12.7874C19.2874 9.98626 16.6288 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.2164 10.052 12.8053 10.2624C12.6409 10.3413 12.449 10.3939 12.2709 10.3939C12.0105 10.3939 11.7638 10.315 11.5445 10.1572L6.72063 6.55394C6.41911 6.33038 6.24097 5.9753 6.24097 5.59395C6.24097 5.21259 6.41913 4.85751 6.72063 4.63393L11.5445 1.0175C11.7501 0.8597 12.0105 0.780792 12.2709 0.780792C12.449 0.780792 12.6409 0.820238 12.8053 0.912294C13.2164 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C17.4648 3.17421 20.7127 6.40927 20.7127 10.3808Z",
                      fill: "white"
                    }), createVNode("path", {
                      id: "Vector_2",
                      d: "M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z",
                      fill: "white"
                    })])]))]), createTextVNode(" 导入 ")];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [createVNode(_component_FYButton, {
                type: "primary",
                class: "upload-btn"
              }, {
                default: withCtx(() => [createVNode("span", null, [(openBlock(), createBlock("svg", {
                  width: "22",
                  height: "18",
                  viewBox: "0 0 22 18",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [createVNode("g", {
                  id: "å¯¼å…¥ 1"
                }, [createVNode("path", {
                  id: "Vector",
                  d: "M20.7127 10.3808C20.7127 11.2224 20.5619 12.0378 20.2878 12.7874C19.2874 9.98626 16.6288 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.2164 10.052 12.8053 10.2624C12.6409 10.3413 12.449 10.3939 12.2709 10.3939C12.0105 10.3939 11.7638 10.315 11.5445 10.1572L6.72063 6.55394C6.41911 6.33038 6.24097 5.9753 6.24097 5.59395C6.24097 5.21259 6.41913 4.85751 6.72063 4.63393L11.5445 1.0175C11.7501 0.8597 12.0105 0.780792 12.2709 0.780792C12.449 0.780792 12.6409 0.820238 12.8053 0.912294C13.2164 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C17.4648 3.17421 20.7127 6.40927 20.7127 10.3808Z",
                  fill: "white"
                }), createVNode("path", {
                  id: "Vector_2",
                  d: "M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z",
                  fill: "white"
                })])]))]), createTextVNode(" 导入 ")]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_FYDialog, {
          modelValue: visible.value,
          "onUpdate:modelValue": ($event) => visible.value = $event,
          dialogConfig: unref(config).buttonConfig.dialogConfig,
          formModel: unref(config).buttonConfig.formModel,
          onSubmit: handleSubmit,
          onFail: handleFail,
          onCancel: handleCancel,
          onFileChange: fileChange
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_FYActionPanel, {
          visible: buttonVisible.value,
          "onUpdate:visible": ($event) => buttonVisible.value = $event,
          template: tmpl
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_FYButton, {
                type: "primary",
                class: "upload-btn"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g id="å¯¼å…¥ 1"${_scopeId2}><path id="Vector" d="M20.7127 10.3808C20.7127 11.2224 20.5619 12.0378 20.2878 12.7874C19.2874 9.98626 16.6288 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.2164 10.052 12.8053 10.2624C12.6409 10.3413 12.449 10.3939 12.2709 10.3939C12.0105 10.3939 11.7638 10.315 11.5445 10.1572L6.72063 6.55394C6.41911 6.33038 6.24097 5.9753 6.24097 5.59395C6.24097 5.21259 6.41913 4.85751 6.72063 4.63393L11.5445 1.0175C11.7501 0.8597 12.0105 0.780792 12.2709 0.780792C12.449 0.780792 12.6409 0.820238 12.8053 0.912294C13.2164 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C17.4648 3.17421 20.7127 6.40927 20.7127 10.3808Z" fill="white"${_scopeId2}></path><path id="Vector_2" d="M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z" fill="white"${_scopeId2}></path></g></svg></span> 导入 `);
                  } else {
                    return [createVNode("span", null, [(openBlock(), createBlock("svg", {
                      width: "22",
                      height: "18",
                      viewBox: "0 0 22 18",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [createVNode("g", {
                      id: "å¯¼å…¥ 1"
                    }, [createVNode("path", {
                      id: "Vector",
                      d: "M20.7127 10.3808C20.7127 11.2224 20.5619 12.0378 20.2878 12.7874C19.2874 9.98626 16.6288 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.2164 10.052 12.8053 10.2624C12.6409 10.3413 12.449 10.3939 12.2709 10.3939C12.0105 10.3939 11.7638 10.315 11.5445 10.1572L6.72063 6.55394C6.41911 6.33038 6.24097 5.9753 6.24097 5.59395C6.24097 5.21259 6.41913 4.85751 6.72063 4.63393L11.5445 1.0175C11.7501 0.8597 12.0105 0.780792 12.2709 0.780792C12.449 0.780792 12.6409 0.820238 12.8053 0.912294C13.2164 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C17.4648 3.17421 20.7127 6.40927 20.7127 10.3808Z",
                      fill: "white"
                    }), createVNode("path", {
                      id: "Vector_2",
                      d: "M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z",
                      fill: "white"
                    })])]))]), createTextVNode(" 导入 ")];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [createVNode(_component_FYButton, {
                type: "primary",
                class: "upload-btn"
              }, {
                default: withCtx(() => [createVNode("span", null, [(openBlock(), createBlock("svg", {
                  width: "22",
                  height: "18",
                  viewBox: "0 0 22 18",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [createVNode("g", {
                  id: "å¯¼å…¥ 1"
                }, [createVNode("path", {
                  id: "Vector",
                  d: "M20.7127 10.3808C20.7127 11.2224 20.5619 12.0378 20.2878 12.7874C19.2874 9.98626 16.6288 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.2164 10.052 12.8053 10.2624C12.6409 10.3413 12.449 10.3939 12.2709 10.3939C12.0105 10.3939 11.7638 10.315 11.5445 10.1572L6.72063 6.55394C6.41911 6.33038 6.24097 5.9753 6.24097 5.59395C6.24097 5.21259 6.41913 4.85751 6.72063 4.63393L11.5445 1.0175C11.7501 0.8597 12.0105 0.780792 12.2709 0.780792C12.449 0.780792 12.6409 0.820238 12.8053 0.912294C13.2164 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C17.4648 3.17421 20.7127 6.40927 20.7127 10.3808Z",
                  fill: "white"
                }), createVNode("path", {
                  id: "Vector_2",
                  d: "M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z",
                  fill: "white"
                })])]))]), createTextVNode(" 导入 ")]),
                _: 1
              })];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_el_upload, {
          class: "fy-upload-button",
          drag: unref(config).drag,
          multiple: unref(config).multiple,
          "auto-upload": false,
          "on-change": onChange,
          "show-file-list": false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button style="${ssrRenderStyle({
                "visibility": "hidden"
              })}"${_scopeId}> 隐藏按钮 </button>`);
            } else {
              return [createVNode("button", {
                ref_key: "myRef",
                ref: myRef,
                style: {
                  "visibility": "hidden"
                }
              }, " 隐藏按钮 ", 512)];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
    };
  }
});
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/upload/src/components/ButtonUpload.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const _sfc_main$17 = /* @__PURE__ */ Object.assign({
  name: "ButtonUpload"
}, {
  __name: "PlainButtonUpload",
  __ssrInlineRender: true,
  emits: ["type-check", "file-change"],
  setup(__props, {
    emit
  }) {
    const config = inject("config");
    const buttonVisible = ref(false);
    const tmpl = [{
      label: "本地文件",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(Paperclip, null, null)]
      }),
      onClick: () => {
        openDialog();
      }
    }];
    const openDialog = () => {
      directUpload();
    };
    const currentFile = ref(null);
    const currentFileName = ref("");
    const onChange = (file2, files) => {
      const typeList = file2.name.split(".");
      const type = typeList[typeList.length - 1];
      currentFileName.value = file2.name;
      if (["pdf"].includes(type)) {
        currentFile.value = "pdf";
      } else if (["doc", "docx"].includes(type)) {
        currentFile.value = "doc";
      } else if (["jpg", "jpeg", "gif", "png"].includes(type)) {
        currentFile.value = "jpg";
      } else if (["xlsx", "xls", "csv"].includes(type)) {
        currentFile.value = "excel";
      } else if (["rar", "zip"].includes(type)) {
        currentFile.value = "zip";
      } else {
        currentFile.value = "file";
      }
      if (config.allow && config.allow.length) {
        if (config.allow.includes(type)) {
          emit("type-check", true);
        } else {
          emit("type-check", false);
        }
      }
      emit("file-change", file2, files);
    };
    const myRef = ref(null);
    const directUpload = () => {
      myRef.value.click();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYActionPanel = resolveComponent("FYActionPanel");
      const _component_FYButton = resolveComponent("FYButton");
      const _component_el_upload = resolveComponent("el-upload");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_FYActionPanel, {
        visible: buttonVisible.value,
        "onUpdate:visible": ($event) => buttonVisible.value = $event,
        template: tmpl
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FYButton, {
              plain: "",
              icon: unref(Paperclip)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 附件 `);
                } else {
                  return [createTextVNode(" 附件 ")];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_FYButton, {
              plain: "",
              icon: unref(Paperclip)
            }, {
              default: withCtx(() => [createTextVNode(" 附件 ")]),
              _: 1
            }, 8, ["icon"])];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_upload, {
        class: "fy-upload-button",
        drag: unref(config).drag,
        multiple: unref(config).multiple,
        "auto-upload": false,
        "on-change": onChange,
        "show-file-list": false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button style="${ssrRenderStyle({
              "visibility": "hidden"
            })}"${_scopeId}> 隐藏按钮 </button>`);
          } else {
            return [createVNode("button", {
              ref_key: "myRef",
              ref: myRef,
              style: {
                "visibility": "hidden"
              }
            }, " 隐藏按钮 ", 512)];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/upload/src/components/PlainButtonUpload.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const _sfc_main$16 = {
  __name: "ExportButton",
  __ssrInlineRender: true,
  setup(__props) {
    const config = inject("config");
    const handleExport = (url, fileName) => {
      try {
        const element = document.createElement("a");
        element.href = url;
        element.download = fileName;
        const a = document.body.appendChild(element);
        a.click();
        document.body.removeChild(element);
      } catch (e) {
        console.log(e, "下载失败");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYButton = resolveComponent("FYButton");
      _push(ssrRenderComponent(_component_FYButton, mergeProps({
        type: "primary",
        class: "upload-btn",
        onClick: ($event) => handleExport(unref(config).url, unref(config).fileName)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g id="å¯¼å…¥ 1"${_scopeId}><path id="Vector" d="M6.24095 10.3808C6.24095 11.2224 6.39171 12.0378 6.66578 12.7874C7.66619 9.98626 10.3248 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.7372 10.052 14.1483 10.2624C14.3128 10.3413 14.5046 10.3939 14.6828 10.3939C14.9432 10.3939 15.1898 10.315 15.4091 10.1572L20.233 6.55394C20.5345 6.33038 20.7126 5.9753 20.7126 5.59395C20.7126 5.21259 20.5345 4.85751 20.233 4.63393L15.4091 1.0175C15.2035 0.8597 14.9432 0.780792 14.6828 0.780792C14.5046 0.780792 14.3128 0.820238 14.1483 0.912294C13.7372 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C9.48885 3.17421 6.24095 6.40927 6.24095 10.3808Z" fill="white"${_scopeId}></path><path id="Vector_2" d="M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z" fill="white"${_scopeId}></path></g></svg></span> 导出 `);
          } else {
            return [
              createVNode("span", null, [
                (openBlock(), createBlock("svg", {
                  width: "22",
                  height: "18",
                  viewBox: "0 0 22 18",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("g", { id: "å¯¼å…¥ 1" }, [
                    createVNode("path", {
                      id: "Vector",
                      d: "M6.24095 10.3808C6.24095 11.2224 6.39171 12.0378 6.66578 12.7874C7.66619 9.98626 10.3248 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.7372 10.052 14.1483 10.2624C14.3128 10.3413 14.5046 10.3939 14.6828 10.3939C14.9432 10.3939 15.1898 10.315 15.4091 10.1572L20.233 6.55394C20.5345 6.33038 20.7126 5.9753 20.7126 5.59395C20.7126 5.21259 20.5345 4.85751 20.233 4.63393L15.4091 1.0175C15.2035 0.8597 14.9432 0.780792 14.6828 0.780792C14.5046 0.780792 14.3128 0.820238 14.1483 0.912294C13.7372 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C9.48885 3.17421 6.24095 6.40927 6.24095 10.3808Z",
                      fill: "white"
                    }),
                    createVNode("path", {
                      id: "Vector_2",
                      d: "M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z",
                      fill: "white"
                    })
                  ])
                ]))
              ]),
              createTextVNode(" 导出 ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/upload/src/components/ExportButton.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const ExportButton = _sfc_main$16;
const _sfc_main$15 = /* @__PURE__ */ Object.assign({
  name: "FYUpload"
}, {
  __name: "upload",
  __ssrInlineRender: true,
  props: {
    config: {
      type: Object,
      default: () => ({
        // formItem, button, plain
        type: "button",
        buttonConfig: {
          // direct dialog
          type: "dialog",
          dialogConfig: {
            title: "导入规则",
            template: [{
              type: "input",
              label: "规则名称",
              value: "name",
              placeholder: "输入规则名称",
              limit: 32,
              require: true
            }, {
              type: "upload",
              label: "文件",
              value: "file"
            }]
          },
          formModel: {
            name: "",
            file: null
          }
        }
      })
    }
  },
  emits: ["type-check"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    provide("config", props.config);
    const typeCheck = (e) => {
      emit("type-check", e);
    };
    const fileChange = (file2, files) => {
      console.log(file2, files);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fy-upload-wrap"
      }, _attrs))} data-v-721d6ad6>`);
      if (props.config.type === "formItem") {
        _push(ssrRenderComponent(UploadItem, {
          onTypeCheck: typeCheck,
          onFileChange: fileChange
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.config.type === "button") {
        _push(ssrRenderComponent(_sfc_main$18, {
          onTypeCheck: typeCheck,
          onFileChange: fileChange
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.config.type === "plain") {
        _push(ssrRenderComponent(_sfc_main$17, {
          onTypeCheck: typeCheck,
          onFileChange: fileChange
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.config.export === true) {
        _push(ssrRenderComponent(ExportButton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const upload_vue_vue_type_style_index_0_scoped_721d6ad6_lang = "";
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/upload/src/upload.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const Upload = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-721d6ad6"]]);
const FYUpload = withInstall(Upload);
const SelectionIndex = defineComponent({
  props: {
    scope: {
      type: Object,
      default: () => ({
        row: {}
      })
    },
    prop: {
      type: String,
      default: "index"
    },
    columnProps: {
      type: Object,
      default: () => ({})
    },
    checked: {
      type: Boolean,
      default: () => false
    },
    onChecked: {
      type: Function
    }
  },
  setup(props) {
    const isIndex = ref(true);
    watch(() => props.checked, (bool) => {
      isIndex.value = !bool;
    });
    const checked = computed({
      get() {
        return props.checked;
      },
      set(v) {
        props.onChecked(v);
      }
    });
    const handleMouseenter = () => {
      isIndex.value = false;
    };
    const handleMouseleave = () => {
      if (!checked.value) {
        isIndex.value = true;
      }
    };
    const rowValue = computed(() => props.scope.$index + 1);
    const RendererItem = computed(() => {
      if (unref(props.columnProps.index) && unref(props.columnProps.selection)) {
        return isIndex.value ? createVNode(Fragment, null, [unref(rowValue)]) : createVNode(resolveComponent("el-checkbox"), {
          "modelValue": checked.value,
          "onUpdate:modelValue": ($event) => checked.value = $event
        }, null);
      }
      if (unref(props.columnProps.selection)) {
        return createVNode(resolveComponent("el-checkbox"), {
          "modelValue": checked.value,
          "onUpdate:modelValue": ($event) => checked.value = $event
        }, null);
      }
      return createVNode(Fragment, null, [unref(rowValue)]);
    });
    return () => createVNode("div", {
      "style": "display:flex; justify-content:center; align-items: center; width: 30px; height: 30px;",
      "onMouseenter": handleMouseenter,
      "onMouseleave": handleMouseleave
    }, [createVNode(RendererItem.value, null, null)]);
  }
});
const __moduleId$2 = "../packages/components/table/src/SelectionIndex.jsx";
ssrRegisterHelper(SelectionIndex, __moduleId$2);
function useHeadVNode(HeaderRenderer, valuesMap2Data) {
  let headerVNode = "";
  let ele = "";
  const createHeaderVNode = () => {
    if (headerVNode && ele)
      return;
    const trWrapper = document.querySelector(".fy-table-header-row");
    const thWidth = trWrapper.firstChild.getBoundingClientRect().width;
    const theadWrapper = trWrapper.parentNode;
    const wrapper = document.createElement("div");
    theadWrapper.appendChild(wrapper);
    ele = wrapper;
    headerVNode = createApp$1({
      setup() {
        return () => createVNode("div", {
          "style": {
            width: `calc(100% - ${thWidth}px)`,
            display: "flex",
            height: `${trWrapper.getBoundingClientRect().height}px`,
            position: "absolute",
            zIndex: 999,
            right: 0,
            top: 0
          }
        }, [createVNode(HeaderRenderer, {
          "values": valuesMap2Data.value
        }, null)]);
      }
    });
    headerVNode.mount(wrapper);
  };
  const removeHeaderVNode = () => {
    if (headerVNode) {
      headerVNode.unmount();
    }
    if (ele) {
      ele.remove();
    }
    headerVNode = "";
    ele = "";
  };
  watch(() => valuesMap2Data.value, (data) => {
    if (data.length) {
      createHeaderVNode();
    } else {
      removeHeaderVNode();
    }
  });
  return {
    createHeaderVNode,
    removeHeaderVNode
  };
}
function useFirstColumn(columnProps) {
  const values = ref(unref(columnProps.data).map(() => false));
  const valuesMap2Data = computed(() => values.value.map((item, idx) => item ? unref(columnProps.data)[idx] : false).filter(Boolean));
  const checkedAll = ref(false);
  const emitSelection = () => {
    columnProps.emit("selection", values.value.map((item, idx) => item ? unref(columnProps.data)[idx] : false).filter(Boolean).map((item) => toRaw(item)));
  };
  useHeadVNode(columnProps.renderer.header, valuesMap2Data);
  const slots = {
    default: (scope) => createVNode(SelectionIndex, {
      "scope": scope,
      "columnProps": columnProps,
      "checked": values.value[scope.$index],
      "onChecked": (v) => {
        values.value[scope.$index] = v;
        emitSelection();
      }
    }, null),
    header: () => unref(columnProps.selection) ? createVNode(resolveComponent("el-checkbox"), {
      "modelValue": checkedAll.value,
      "onUpdate:modelValue": ($event) => checkedAll.value = $event,
      "onChange": (bool) => {
        values.value = unref(columnProps.data).map(() => bool);
        emitSelection();
      }
    }, null) : createVNode("span", null, [createTextVNode("序号")])
  };
  watch(valuesMap2Data, (data) => {
    if (data.length !== unref(columnProps.data).length) {
      checkedAll.value = false;
    } else {
      checkedAll.value = true;
    }
  });
  return {
    selectionValues: values,
    FirstColumn: defineComponent({
      setup(props, {
        attrs
      }) {
        if (!unref(columnProps.selection) && !unref(columnProps.index)) {
          return null;
        }
        return () => createVNode(resolveComponent("el-table-column"), mergeProps({
          "fixed": unref(columnProps.template).some((item) => item.fixed),
          "width": "55",
          "align": "center",
          "prop": "index"
        }, attrs), slots);
      }
    })
  };
}
const Input = {
  type: "input",
  renderer: defineComponent({
    setup(props, {
      attrs
    }) {
      const Ele = ref();
      const value = ref(attrs.scope.row[attrs.value]);
      const editing = ref(false);
      function emitValue() {
        if (attrs.validateEditValue) {
          if (!attrs.validateEditValue(unref(value)))
            return;
        }
        attrs.onChange({
          value: unref(value)
        });
        editing.value = false;
      }
      return () => createVNode("div", {
        "class": "fy-table-edit-wrap"
      }, [!editing.value ? createVNode("div", {
        "class": "fy-table-edit-item",
        "onClick": () => {
          editing.value = true;
          nextTick(() => {
            Ele.value.focus();
          });
        }
      }, [unref(value), createVNode("div", {
        "class": "table-edit-item-icon"
      }, [createVNode(resolveComponent("el-icon"), {
        "size": "20",
        "color": "#aaa"
      }, {
        default: () => [createVNode(EditPen, null, null)]
      })])]) : createVNode(resolveComponent("el-input"), {
        "modelValue": value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        "ref": Ele,
        "onKeyup": (e) => {
          if (e.code === "Enter") {
            emitValue();
          }
        },
        "onBlur": () => {
          emitValue();
        }
      }, null)]);
    }
  })
};
const Limit = {
  type: "limit",
  renderer(props) {
    return createVNode(Fragment, null, [(() => {
      const value = ref(props.scope.row[props.value]);
      if (value.value) {
        if (Number.isInteger(+value.value)) {
          return value;
        }
        return value.value.toFixed(props.type.split("limit")[1]);
      }
      return value.value === 0 ? value : "-";
    })()]);
  }
};
const ImagePreview = {
  type: "imagePreview",
  renderer(props) {
    const value = props.scope.row[props.value];
    let url = "";
    let srcList = [];
    if (Array.isArray(value)) {
      srcList = value;
      url = value[0];
    } else {
      srcList[0] = value;
      url = value;
    }
    return createVNode(resolveComponent("el-image"), mergeProps({
      "src": url,
      "preview-src-list": srcList,
      "preview-teleported": true,
      "initial-index": 0,
      "fit": "cover"
    }, props), null);
  }
};
const __format = {
  minute: "YYYY年M月DD日 HH:mm",
  second: "YYYY年M月DD日 HH:mm:ss",
  day: "YYYY年M月DD日"
};
const TimeDisplay = {
  type: "timeDisplay",
  renderer(props) {
    const value = props.scope.row[props.value];
    const formatKey = props.type.split("timeDisplay")[1].toLowerCase();
    const formatVal = __format[formatKey];
    let str = dayjs(value).format(formatVal);
    if (dayjs().year() === dayjs(value).year()) {
      str = str.replace(/\d{4}年/, "");
    }
    if (dayjs().date() === dayjs(value).date()) {
      str = str.replace(/.*日\s*/, "今天 ");
    }
    return str;
  }
};
const builtInFormItems = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ImagePreview,
  Input,
  Limit,
  TimeDisplay
}, Symbol.toStringTag, { value: "Module" }));
const tableEditItem = /* @__PURE__ */ new Map();
function installTableEditItem(item) {
  if (Array.isArray(item)) {
    for (const nape of item) {
      tableEditItem.set(nape.type, nape.renderer);
    }
  } else {
    tableEditItem.set(item.type, item.renderer);
  }
}
installTableEditItem(Object.entries(builtInFormItems).map(([, value]) => value));
function getColumns(template) {
  const _getColumn = (scope, tmpl) => {
    if (tmpl.render) {
      return tmpl.render({
        scope,
        key: tmpl.value,
        value: scope.row[tmpl.value]
      });
    }
    if (tmpl.type) {
      const __innterTypes = ["limit", "timeDisplay"];
      const type = (() => {
        const innerType = __innterTypes.find((type2) => tmpl.type.includes(type2));
        if (innerType) {
          return innerType;
        }
        return tmpl.type;
      })();
      const EditRenderer = tableEditItem.get(type);
      if (EditRenderer) {
        return createVNode(EditRenderer, mergeProps(tmpl, {
          "scope": scope
        }), null);
      }
    }
    return scope.row[tmpl == null ? void 0 : tmpl.value] || scope.row[tmpl == null ? void 0 : tmpl.value] === 0 ? scope.row[tmpl == null ? void 0 : tmpl.value] : "-";
  };
  return computed(() => unref(template).map((tmpl) => {
    const slots = {
      default: (scope) => _getColumn(scope, tmpl)
    };
    return createVNode(resolveComponent("el-table-column"), mergeProps({
      "key": tmpl.value,
      "label": tmpl.label,
      "prop": tmpl.value,
      "header-align": "center"
    }, tmpl), slots);
  }));
}
function getHeadSettingColumn({
  onClick
}) {
  const slots = {
    header: () => createVNode("div", {
      "style": "display: flex; aligin-items: center; justify-content: center; width: 100%; height: 100%; cursor: pointer;",
      "onClick": onClick
    }, [createVNode(resolveComponent("el-icon"), {
      "size": "20"
    }, {
      default: () => [createVNode(Setting, null, null)]
    })])
  };
  return defineComponent({
    setup(_, {
      attrs
    }) {
      return () => createVNode(resolveComponent("el-table-column"), mergeProps({
        "width": "55",
        "align": "center",
        "prop": "fy-setting"
      }, attrs, {
        "fixed": "right"
      }), slots);
    }
  });
}
function useTableAttrs(attrs, template) {
  const spanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex
  }) => {
    const visibleTmpl = unref(template).filter((item) => item.visible);
    if (columnIndex === visibleTmpl.length + 1) {
      return {
        rowspan: 0,
        colspan: 0
      };
    }
    if (columnIndex === visibleTmpl.length) {
      return {
        rowspan: 1,
        colspan: 2
      };
    }
    if (attrs.spanMethod) {
      return attrs.spanMethod({
        row,
        column,
        rowIndex,
        columnIndex
      });
    }
    return {
      rowspan: 1,
      colspan: 1
    };
  };
  return {
    ...attrs,
    spanMethod,
    "header-row-class-name": attrs.headerRowClassName ? `${attrs.headerRowClassName} fy-table-header-row` : "fy-table-header-row"
  };
}
const transfer_vue_vue_type_style_index_0_scoped_9372cbd3_lang = "";
const _sfc_main$14 = {
  __name: "transfer",
  __ssrInlineRender: true,
  props: {
    ...tmplProps,
    visibleTemplate: {
      type: Array,
      default: () => []
    }
  },
  emits: ["updateTmpl", "updateVisibleTmpl"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const allTmpl = computed({
      get() {
        return props.template;
      },
      set(v) {
        emits("updateTmpl", v);
      }
    });
    const visibleTmpl = computed({
      get() {
        return props.visibleTemplate;
      },
      set(v) {
        emits("updateVisibleTmpl", v);
      }
    });
    const leftInputVal = ref("");
    const filterLeftTmpl = ref([]);
    watch(
      leftInputVal,
      (val) => {
        filterLeftTmpl.value = allTmpl.value.filter((tmpl) => tmpl.label.includes(val));
      },
      { immediate: true }
    );
    const rightInputVal = ref("");
    const filterRightTmpl = ref([]);
    watch(
      [rightInputVal, visibleTmpl],
      () => {
        filterRightTmpl.value = visibleTmpl.value.filter((tmpl) => tmpl.label.includes(rightInputVal.value));
      },
      { immediate: true }
    );
    const dragEle = ref();
    onMounted(() => {
      Sortable.create(dragEle.value, {
        animation: 100,
        onEnd({ newIndex, oldIndex }) {
          const currRow = filterRightTmpl.value.splice(oldIndex, 1)[0];
          filterRightTmpl.value.splice(newIndex, 0, { ...currRow, order: newIndex + 1 });
          const currRow1 = visibleTmpl.value.splice(oldIndex, 1)[0];
          visibleTmpl.value.splice(newIndex, 0, currRow1);
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fy-transfer-wrap" }, _attrs))} data-v-9372cbd3><div class="transfer-container" data-v-9372cbd3><div class="selection-title" data-v-9372cbd3> 可选择属性 · ${ssrInterpolate(allTmpl.value.length)}</div><div class="selection-section" data-v-9372cbd3>`);
      _push(ssrRenderComponent(unref(FYInput), {
        modelValue: leftInputVal.value,
        "onUpdate:modelValue": ($event) => leftInputVal.value = $event,
        class: "transparent-input",
        placeholder: "搜索"
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, { size: "18" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Search), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Search))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_icon, { size: "18" }, {
                default: withCtx(() => [
                  createVNode(unref(Search))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="selection-section-body" data-v-9372cbd3><div class="list" data-v-9372cbd3><!--[-->`);
      ssrRenderList(filterLeftTmpl.value, (tmpl) => {
        _push(`<div class="list-item" data-v-9372cbd3><div class="item-awesome-text" data-v-9372cbd3><span class="item-title" data-v-9372cbd3>${ssrInterpolate(tmpl.label)}</span></div><div style="${ssrRenderStyle(tmpl.visible ? null : { display: "none" })}" class="item-icon" data-v-9372cbd3>`);
        _push(ssrRenderComponent(_component_el_icon, {
          size: 20,
          color: "#6698ff"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Check), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Check))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="transfer-container" data-v-9372cbd3><div class="selection-title" data-v-9372cbd3> 已选择属性 · ${ssrInterpolate(visibleTmpl.value.length)}</div><div class="selection-section" data-v-9372cbd3>`);
      _push(ssrRenderComponent(unref(FYInput), {
        modelValue: rightInputVal.value,
        "onUpdate:modelValue": ($event) => rightInputVal.value = $event,
        class: "transparent-input",
        placeholder: "搜索"
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, { size: "18" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Search), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Search))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_icon, { size: "18" }, {
                default: withCtx(() => [
                  createVNode(unref(Search))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="selection-section-body" data-v-9372cbd3><div class="list" data-v-9372cbd3><!--[-->`);
      ssrRenderList(filterRightTmpl.value, (tmpl) => {
        _push(`<div class="list-item" data-v-9372cbd3><div class="item-awesome-text" data-v-9372cbd3><svg color="#999" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false" data-v-9372cbd3><g id="ailaction/drag--" stroke-width="1" fill-rule="evenodd" data-v-9372cbd3><g id="ail拖动" transform="translate(5 1)" fill-rule="nonzero" data-v-9372cbd3><path id="ail形状结合" d="M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" data-v-9372cbd3></path></g></g></svg><span class="item-title" data-v-9372cbd3>${ssrInterpolate(tmpl.label)}</span></div><div style="${ssrRenderStyle(tmpl.visible ? null : { display: "none" })}" class="item-icon" data-v-9372cbd3>`);
        _push(ssrRenderComponent(_component_el_icon, {
          size: 20,
          color: "#6698ff"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Close), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Close))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/table/src/transfer.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const Transfer = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-9372cbd3"]]);
const __default__$1 = defineComponent({
  name: "TableSetting",
  props: {
    ...tmplProps,
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["updateVisible", "submit"],
  setup(props, {
    emit
  }) {
    const visible = computed({
      get() {
        return props.visible;
      },
      set(v) {
        emit("updateVisible", v);
      }
    });
    const tmpl = ref([]);
    const visibleTmpl = ref([]);
    watch(() => props.template, (template) => {
      tmpl.value = template;
    }, {
      immediate: true
    });
    watch(tmpl, () => {
      visibleTmpl.value = tmpl.value.filter((item) => item.visible);
    }, {
      immediate: true
    });
    const slots = {
      footer: () => createVNode(Fragment, null, [createVNode(resolveComponent("FYButton"), {
        "type": "info",
        "text": true,
        "size": "large",
        "link": true,
        "style": "font-size: 1rem;",
        "onClick": () => {
          emit("updateVisible", false);
        }
      }, {
        default: () => [createTextVNode("取消")]
      }), createVNode(resolveComponent("FYButton"), {
        "type": "primary",
        "size": "large",
        "style": "font-size: 1rem;",
        "onClick": () => {
          visibleTmpl.value.forEach((visibleItem, orderIdx) => {
            tmpl.value.forEach((item) => {
              if (visibleItem.value === item.value) {
                item.order = orderIdx;
              }
            });
          });
          emit("submit", toRaw(tmpl.value.map((item) => toRaw(item))));
          nextTick(() => {
            emit("updateVisible", false);
          });
        }
      }, {
        default: () => [createTextVNode("确定")]
      })])
    };
    return () => createVNode(resolveComponent("el-dialog"), {
      "modelValue": visible.value,
      "onUpdate:modelValue": ($event) => visible.value = $event,
      "title": "表头显示属性",
      "width": "70%",
      "top": "5vh",
      "destroy-on-close": true
    }, {
      default: () => [createVNode(Transfer, {
        "template": tmpl.value,
        "visibleTemplate": visibleTmpl.value,
        "onUpdateTmpl": (e) => {
          tmpl.value = e;
        },
        "onUpdateVisibleTmpl": (e) => {
          visibleTmpl.value = e;
        }
      }, null)],
      ...slots
    });
  }
});
const TableSetting = __default__$1;
const __moduleId$1 = "../packages/components/table/src/TableSetting.jsx";
ssrRegisterHelper(__default__$1, __moduleId$1);
const table = "";
const __default__ = defineComponent({
  name: "FYTable",
  props: {
    ...tmplProps,
    columnIndex: {
      type: Boolean,
      default: true
    },
    columnSelection: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    renderer: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["selection", "headerSelection"],
  setup(props, {
    attrs,
    expose,
    emit
  }) {
    const Ele = ref();
    const tableSettingVisible = ref(false);
    const sortedTmpl = computed(() => {
      const tmpl = props.template;
      return tmpl.map((item) => ({
        order: item.order ? item.order : 0,
        ...item
      })).sort((a, b) => a.order - b.order);
    });
    const tableAttrs = useTableAttrs(attrs, computed(() => props.template));
    const {
      FirstColumn,
      selectionValues
    } = useFirstColumn({
      selection: computed(() => props.columnSelection),
      // 是否开启多选
      index: computed(() => props.columnIndex),
      // 是否开启序号
      data: computed(() => props.data),
      // 表格数据
      renderer: props.renderer,
      // 表头覆盖层
      template: sortedTmpl,
      emit
    });
    const Columns = getColumns(computed(() => sortedTmpl.value.filter((item) => item.visible)));
    const SettingColumn = getHeadSettingColumn({
      onClick: () => tableSettingVisible.value = true
    });
    expose({
      selectionValues,
      sort: computed(() => Ele.value.sort)
    });
    return () => createVNode("div", {
      "class": "fy-table-wrap"
    }, [createVNode(resolveComponent("el-table"), mergeProps({
      "border": true,
      "table-layout": "auto"
    }, tableAttrs, {
      "data": props.data,
      "ref": Ele
    }), {
      default: () => [createVNode(FirstColumn, null, null), Columns.value, createVNode(SettingColumn, null, null)],
      empty: () => createVNode(FYEmpty, null, null)
    }), createVNode(TableSetting, {
      "visible": tableSettingVisible.value,
      "onUpdateVisible": (e) => tableSettingVisible.value = e,
      "template": sortedTmpl.value,
      "onSubmit": (tmpl) => emit("headerSelection", tmpl)
    }, null)]);
  }
});
const Table = __default__;
const __moduleId = "../packages/components/table/src/table.jsx";
ssrRegisterHelper(__default__, __moduleId);
const FYTable = withInstall(Table);
const pagination_vue_vue_type_style_index_0_lang = "";
const _sfc_main$13 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_pagination = resolveComponent("el-pagination");
  _push(ssrRenderComponent(_component_el_pagination, mergeProps(_ctx.$attrs, { class: "fy-pagination" }, _attrs), null, _parent));
}
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/pagination/src/pagination.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["ssrRender", _sfc_ssrRender]]);
const FYPagination = withInstall(Pagination);
const _sfc_main$12 = {
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: {
    tmplItem: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["select"],
  setup(__props, { emit: emits }) {
    function onClick(item) {
      emits("select", item);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_el_sub_menu = resolveComponent("el-sub-menu");
      const _component_MenuItem = resolveComponent("MenuItem", true);
      const _component_el_menu_item = resolveComponent("el-menu-item");
      if ((_b = (_a = __props.tmplItem) == null ? void 0 : _a.children) == null ? void 0 : _b.length) {
        _push(ssrRenderComponent(_component_el_sub_menu, mergeProps({
          teleported: false,
          onClick: ($event) => onClick(__props.tmplItem)
        }, _attrs), {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!__props.tmplItem.render) {
                _push2(`<div class="fy-menu-item-1"${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.tmplItem.icon), { class: "h-5 w-5" }, null), _parent2, _scopeId);
                _push2(` ${ssrInterpolate(__props.tmplItem.label)}</div>`);
              } else {
                _push2(`<div class="fy-menu-item-1"${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.tmpl.render), { tmplItem: _ctx.tmpl }, null), _parent2, _scopeId);
                _push2(`</div>`);
              }
            } else {
              return [
                !__props.tmplItem.render ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "fy-menu-item-1"
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(__props.tmplItem.icon), { class: "h-5 w-5" })),
                  createTextVNode(" " + toDisplayString(__props.tmplItem.label), 1)
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "fy-menu-item-1"
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.tmpl.render), { tmplItem: _ctx.tmpl }, null, 8, ["tmplItem"]))
                ]))
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.tmplItem.children, (item) => {
                _push2(ssrRenderComponent(_component_MenuItem, {
                  key: item.value,
                  tmplItem: item,
                  index: item.value
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.tmplItem.children, (item) => {
                  return openBlock(), createBlock(_component_MenuItem, {
                    key: item.value,
                    tmplItem: item,
                    index: item.value
                  }, null, 8, ["tmplItem", "index"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_el_menu_item, mergeProps({
          teleported: false,
          index: __props.tmplItem.value,
          class: "fy-menu-item-2",
          onClick: ($event) => onClick(__props.tmplItem)
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.tmplItem.render) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.tmplItem.render), { tmplItem: __props.tmplItem }, null), _parent2, _scopeId);
              } else {
                _push2(`<!--[-->`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.tmplItem.icon), { class: "h-5 w-5" }, null), _parent2, _scopeId);
                _push2(` ${ssrInterpolate(__props.tmplItem.label)}<!--]-->`);
              }
            } else {
              return [
                __props.tmplItem.render ? (openBlock(), createBlock(resolveDynamicComponent(__props.tmplItem.render), {
                  key: 0,
                  tmplItem: __props.tmplItem
                }, null, 8, ["tmplItem"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  (openBlock(), createBlock(resolveDynamicComponent(__props.tmplItem.icon), { class: "h-5 w-5" })),
                  createTextVNode(" " + toDisplayString(__props.tmplItem.label), 1)
                ], 64))
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
};
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/menu/src/MenuItem.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const MenuItem$1 = _sfc_main$12;
const _sfc_main$11 = /* @__PURE__ */ Object.assign({
  name: "FYMenu"
}, {
  __name: "menu",
  __ssrInlineRender: true,
  props: {
    ...tmplProps
  },
  emits: ["select", "itemClick"],
  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const activeIndex = computed(() => props.template[0].value);
    const handleSelect = (key, keyPath, item) => {
      emits("select", {
        key,
        keyPath,
        item
      });
    };
    const onTmplItemSelect = (item) => {
      emits("itemClick", item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_menu = resolveComponent("el-menu");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fy-menu-wrap"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_menu, mergeProps({
        "default-active": activeIndex.value,
        class: "fy-menu-el",
        mode: "horizontal"
      }, _ctx.$attrs, {
        onSelect: handleSelect
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.template, (tmpl) => {
              _push2(ssrRenderComponent(MenuItem$1, {
                key: tmpl.value,
                tmplItem: tmpl,
                onSelect: onTmplItemSelect
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.template, (tmpl) => {
              return openBlock(), createBlock(MenuItem$1, {
                key: tmpl.value,
                tmplItem: tmpl,
                onSelect: onTmplItemSelect
              }, null, 8, ["tmplItem"]);
            }), 128))];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const menu_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/menu/src/menu.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const FYMenu = withInstall(_sfc_main$11);
const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAACgBJREFUeF7tnTHIZNUVx/+nEVFWbNInkEbRhdhkbZQI0UYrsy4kpkoXkya6kgiSFIYYiaZZO6ugLGysBAsXLLTI2gQRZSFFSB8IhFViwOKGG0ZYhv1mvnfeu+/cd89v6jn33v/vnB9vZ+bt+0y8IACBEwkYbCAAgZMJIAjTAYEDBBCE8YAAgjADEPAR4Ari40ZVEgIIkqTRxPQRQBAfN6qSEECQJI0mpo8Agvi4UZWEAIIkaTQxfQQQxMeNqiQEECRJo4npI4AgPm5UJSGAIEkaTUwfAQTxcaMqCQEESdJoYvoIIIiPG1VJCCBIkkYT00cAQXzcqEpCAEGSNJqYPgII4uNGVRICCJKk0cT0EUAQHzeqkhBAkCSNJqaPAIL4uFGVhACCJGk0MX0EEMTHjaokBBAkSaOJ6SOAID5uVCUhgCBJGk1MHwEE8XGjKgkBBEnSaGL6CCCIjxtVSQggSJJGE9NHAEF83KhKQgBBkjSamD4CCOLjRlUSAgiSpNHE9BFAEB83qpIQQJAkjSamjwCC+LhRlYQAgiRpNDF9BLoTpJRyRtL9km7zRaJqowS+kvSpmd3o6fxdCFJKuUPSc5IuSLq3J0CcZXUC1yVdlvSqmX25+u57G4YLUkq5W9IHks5Gw2D/rgh8LOlhM/s88lQ9CPKOpCciIbB3twTeMrOnI08XKkgp5RFJ70cCYO/uCTxgZvVqEvKKFuSSpGdCkrPpVgi8ZGYvRh02WpD3JD0aFZ59N0HgXTN7POqk0YLw+SOq89vZ96qZPRZ13GhBXpF0MSo8+26CwGtm9mzUSaMFOSfpWlR49t0EgQfN7KOok4YKUkOXUt6W9GQUAPbtmsAVM6s/Hoe9ehCk/lD44e72kjAQbNwdgfrV7kNm9kXkycIF2V1F7pT0vKTzku6JBMLe4QQ+k1R/IHw5/CSSuhDkZhCllLsk3cfNij2Mx6pnqDcrfhJ9xdhP3J0gq7aEzSBwhACCMCIQOEAAQRgPCCAIMwABHwGuID5uVCUhgCBJGk1MHwEE8XGjKgkBBEnSaGL6CCCIjxtVSQggSJJGE9NHAEF83KhKQgBBkjR6TsxSyu1m9t85a2y1FkG22rkVz11Kqc8NqE8X6eIO2xWj93c375rh2et0BHaC1Ads/NLMfn+6qjHexRVkjD42TXGTIHWfVJIgSNPRGmPxPUFSSYIgY8xw0xS3ECSNJAjSdLTGWPwEQVJIgiBjzHDTFAcEGV4SBGk6WmMsfkSQoSVBkDFmuGmKUwgyrCQI0nS0xlj8lIIMKQmCjDHDTVNMEGQ4SRCk6WiNsfhEQYaSBEHGmOGmKRyCDCMJgjQdrTEWdwoyhCQIMsYMN00xQ5DNS4IgTUdrjMVnCrJpSRBkjBlummIBQTYrCYI0Ha0xFl9IkE1KgiBjzHDTFAsKsjlJEKTpaI2x+MKCbEoSBBljhpumaCDIZiRBkKajNcbijQTZhCQIMsYMN03RUJDuJUGQpqM1xuKNBelakq4EKaV8Q9J3JZ3lj3hOlqs+2K3+6eRrZnZjcvWBglLK9yVdXXLNW6z1qx6fu9WFIKWU+qefX5f0vcZNyLL8FUk/NbN/LRF4hSvI18d8wcx+t8SZl1ojXJBSSv2Tz3+RdGapUKzzfwL/2D0N8d9zeax0BelSkh4EuS6pXkF4LU/gspn9cO6yKwtSj9vNlSRUkFLKjyS9ObeB1B8k8G0z+/scRgGCdCNJtCB/kvTjOc2j9iiBn5vZpaPvOvwhvT68uj6bd+1X+JUkWpD6zUj9hoRXOwKvm9nP5iwfdAXp4jNJtCB/lvSDOc2j9iiBP5jZxaPv6vMKUk8V+rDsaEFekPTbOc2j9iiBC2ZWv/Z1v1b8mnf/jKFy1MNEC/LN3deR7uZReJDAPyV9y8z+M4dT0D+xuvjhMFSQ2rRSym8k/XpOA6k9kcBTZlb/GTvrFSBIF3KEX0G+7lop5Q1JP5nVRYr3CfzCzP64BJaVBelGjm4E2V1J6m0m5yWdk/SdJRqbbI16L9Zf671Ykt4ws78tlX9FQcK/1t1nFv5PrKWayDrtCKz0IT38A/mtCCJIu7kaZuUVBOlSjq7+iTXMNA0YpLEg3cqBIAMOc4tIDQXpWg4EaTFNA67ZSJDu5UCQAYe5RaQGgmxCDgRpMU0DrrmwIJuRA0EGHOYWkRYUZFNyIEiLaRpwzYUE2ZwcCDLgMLeItIAgm5QDQVpM04BrzhRks3IgyIDD3CLSDEE2LQeCtJimAdd0CrJ5ORBkwGFuEckhyBByIEiLaRpwzYmCDCMHggw4zC0iTRBkKDkQpMU0DbjmKQUZTg4EGXCYW0Q6hSBDyoEgLaZpwDWPCDKsHAgy4DC3iHRAkKHlQJAW0zTgmicIMrwcCDLgMLeIdAtBUsiBIC2macA19wRJIweCDDjMLSLdJEgqORCkxTQNuOZOkAd6/CObrXHzXKzWhAdYv5Ryu5nVJzemeyFIupYTeAoBBJlCi/emI4Ag6VpO4CkEEGQKLd6bjgCCpGs5gacQQJAptHhvOgIIkq7lBJ5CAEGm0OK96QggSLqWE3gKAQSZQov3piOAIOlaTuApBLoTpJRyRtL9km6bEoT3bp7AV5I+NbMbPSXpQpBSyh2SnpN0QdK9PQHiLKsTuC7psqRXzezL1Xff2zBckFLK3ZI+kHQ2Ggb7d0XgY0kPm9nnkafqQZB3JD0RCYG9uyXwlpk9HXm6UEFKKY9Iej8SAHt3T6D+R616NQl5RQtySdIzIcnZdCsEXjKzF6MOGy3Ie5IejQrPvpsg8K6ZPR510mhB+PwR1fnt7HvVzB6LOm60IK9IuhgVnn03QeA1M3s26qTRgpyTdC0qPPtugsCDZvZR1ElDBamhSylvS3oyCgD7dk3gipnVH4/DXj0IUn8o/HB3e0kYCDbujkD9avchM/si8mThguyuIndKel7SeUn3RAJh73ACn0mqPxC+HH4SSV0IcjOIUspdku7jZsUexmPVM9SbFT+JvmLsJ+5OkFVbwmYQOEIAQRgRCBwggCCMBwQQhBmAgI8AVxAfN6qSEECQJI0mpo8Agvi4UZWEAIIkaTQxfQQQxMeNqiQEECRJo4npI4AgPm5UJSGAIEkaTUwfAQTxcaMqCQEESdJoYvoIIIiPG1VJCCBIkkYT00cAQXzcqEpCAEGSNJqYPgII4uNGVRICCJKk0cT0EUAQHzeqkhBAkCSNJqaPAIL4uFGVhACCJGk0MX0EEMTHjaokBBAkSaOJ6SOAID5uVCUhgCBJGk1MHwEE8XGjKgkBBEnSaGL6CCCIjxtVSQggSJJGE9NHAEF83KhKQgBBkjSamD4CCOLjRlUSAgiSpNHE9BFAEB83qpIQQJAkjSamjwCC+LhRlYQAgiRpNDF9BBDEx42qJAQQJEmjiekjgCA+blQlIfA/rqof55rl1rIAAAAASUVORK5CYII=";
const _sfc_main$10 = {
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: {
    // 导航栏表单项
    tmplItem: {
      type: Object,
      default: () => {
      }
    },
    // 是否折叠
    collapse: {
      type: Boolean,
      default: false
    }
  },
  emits: ["select"],
  setup(__props, { emit: emits }) {
    function onClick(item) {
      emits("select", item);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_el_sub_menu = resolveComponent("el-sub-menu");
      const _component_MenuItem = resolveComponent("MenuItem", true);
      const _component_el_menu_item = resolveComponent("el-menu-item");
      if ((_b = (_a = __props.tmplItem) == null ? void 0 : _a.children) == null ? void 0 : _b.length) {
        _push(ssrRenderComponent(_component_el_sub_menu, mergeProps({
          teleported: false,
          onClick: ($event) => onClick(__props.tmplItem)
        }, _attrs), {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!__props.tmplItem.render) {
                _push2(`<div class="fy-menu-item-1"${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.tmplItem.icon), { class: "h-5 w-5" }, null), _parent2, _scopeId);
                if (!__props.collapse) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(__props.tmplItem.label)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<div class="fy-menu-item-1"${_scopeId}>`);
                if (!__props.collapse) {
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.tmpl.render), { tmplItem: _ctx.tmpl }, null), _parent2, _scopeId);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              }
            } else {
              return [
                !__props.tmplItem.render ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "fy-menu-item-1"
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(__props.tmplItem.icon), { class: "h-5 w-5" })),
                  !__props.collapse ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(__props.tmplItem.label), 1)) : createCommentVNode("", true)
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "fy-menu-item-1"
                }, [
                  !__props.collapse ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.tmpl.render), {
                    key: 0,
                    tmplItem: _ctx.tmpl
                  }, null, 8, ["tmplItem"])) : createCommentVNode("", true)
                ]))
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.tmplItem.children, (item) => {
                _push2(ssrRenderComponent(_component_MenuItem, {
                  key: item.value,
                  tmplItem: item,
                  index: item.value
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.tmplItem.children, (item) => {
                  return openBlock(), createBlock(_component_MenuItem, {
                    key: item.value,
                    tmplItem: item,
                    index: item.value
                  }, null, 8, ["tmplItem", "index"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_el_menu_item, mergeProps({
          teleported: false,
          index: __props.tmplItem.value,
          class: "fy-menu-item-2",
          onClick: ($event) => onClick(__props.tmplItem)
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.tmplItem.render && !__props.collapse) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.tmplItem.render), { tmplItem: __props.tmplItem }, null), _parent2, _scopeId);
              } else {
                _push2(`<!--[-->`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(__props.tmplItem.icon), { class: "h-5 w-5" }, null), _parent2, _scopeId);
                if (!__props.collapse) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(__props.tmplItem.label)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              }
            } else {
              return [
                __props.tmplItem.render && !__props.collapse ? (openBlock(), createBlock(resolveDynamicComponent(__props.tmplItem.render), {
                  key: 0,
                  tmplItem: __props.tmplItem
                }, null, 8, ["tmplItem"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  (openBlock(), createBlock(resolveDynamicComponent(__props.tmplItem.icon), { class: "h-5 w-5" })),
                  !__props.collapse ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(__props.tmplItem.label), 1)) : createCommentVNode("", true)
                ], 64))
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
};
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/navigation/src/MenuItem.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const MenuItem = _sfc_main$10;
const _sfc_main$$ = /* @__PURE__ */ Object.assign({
  name: "FYNavigation"
}, {
  __name: "navigation",
  __ssrInlineRender: true,
  props: {
    ...tmplProps
  },
  emits: ["select", "itemClick"],
  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const activeIndex = computed(() => props.template[0].value);
    const handleSelect = (key, keyPath, item) => {
      emits("select", {
        key,
        keyPath,
        item
      });
    };
    const onTmplItemSelect = (item) => {
      emits("itemClick", item);
    };
    const isCollapse = ref(false);
    const toggleCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_menu = resolveComponent("el-menu");
      const _component_el_menu_item = resolveComponent("el-menu-item");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [isCollapse.value ? "collapse-wrap" : "no-collapse-wrap", "fy-navigation-wrap"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_menu, mergeProps({
        "background-color": "#48525c",
        "default-active": activeIndex.value,
        class: "fy-menu-el"
      }, _ctx.$attrs, {
        "text-color": "#ddd",
        "active-text-color": "#ddd",
        collapse: isCollapse.value,
        onSelect: handleSelect
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_menu_item, {
              class: "fy-navigation-item-logo"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="logo"${_scopeId2}><img src="https://cdn-aliyun.pingcode.com/static/portal/assets/images/logos/transparent.svg?v=4.158.0" class="img" alt=""${_scopeId2}>`);
                  if (!isCollapse.value) {
                    _push3(`<span class="title"${_scopeId2}>联图科技</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [createVNode("div", {
                    class: "logo"
                  }, [createVNode("img", {
                    src: "https://cdn-aliyun.pingcode.com/static/portal/assets/images/logos/transparent.svg?v=4.158.0",
                    class: "img",
                    alt: ""
                  }), !isCollapse.value ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "title"
                  }, "联图科技")) : createCommentVNode("", true)])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.template, (tmpl) => {
              _push2(ssrRenderComponent(MenuItem, {
                key: tmpl.value,
                collapse: isCollapse.value,
                tmplItem: tmpl,
                onSelect: onTmplItemSelect
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_el_menu_item, {
              class: "fy-navigation-item-footer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="footer"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="${ssrRenderClass(["footer-collapse", {
                    "footer-collapse-reversal": isCollapse.value
                  }])}"${_scopeId2}></div>`);
                } else {
                  return [createVNode("div", {
                    class: "footer"
                  }, [createVNode("img", {
                    src: _imports_0$1,
                    alt: "",
                    class: ["footer-collapse", {
                      "footer-collapse-reversal": isCollapse.value
                    }],
                    onClick: toggleCollapse
                  }, null, 2)])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_el_menu_item, {
              class: "fy-navigation-item-logo"
            }, {
              default: withCtx(() => [createVNode("div", {
                class: "logo"
              }, [createVNode("img", {
                src: "https://cdn-aliyun.pingcode.com/static/portal/assets/images/logos/transparent.svg?v=4.158.0",
                class: "img",
                alt: ""
              }), !isCollapse.value ? (openBlock(), createBlock("span", {
                key: 0,
                class: "title"
              }, "联图科技")) : createCommentVNode("", true)])]),
              _: 1
            }), (openBlock(true), createBlock(Fragment, null, renderList(_ctx.template, (tmpl) => {
              return openBlock(), createBlock(MenuItem, {
                key: tmpl.value,
                collapse: isCollapse.value,
                tmplItem: tmpl,
                onSelect: onTmplItemSelect
              }, null, 8, ["collapse", "tmplItem"]);
            }), 128)), createVNode(_component_el_menu_item, {
              class: "fy-navigation-item-footer"
            }, {
              default: withCtx(() => [createVNode("div", {
                class: "footer"
              }, [createVNode("img", {
                src: _imports_0$1,
                alt: "",
                class: ["footer-collapse", {
                  "footer-collapse-reversal": isCollapse.value
                }],
                onClick: toggleCollapse
              }, null, 2)])]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const navigation_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/navigation/src/navigation.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const FYNavigation = withInstall(_sfc_main$$);
const _sfc_main$_ = /* @__PURE__ */ Object.assign({
  name: "FYTopNavigation"
}, {
  __name: "top-navigation",
  __ssrInlineRender: true,
  props: {
    config: {
      type: Object,
      default: () => ({
        icon: createVNode(resolveComponent("el-icon"), null, {
          default: () => [createVNode(Notification, null, null)]
        }),
        title: "产品管理",
        menu: [{
          label: "更多",
          value: "/page2",
          icon: createVNode(resolveComponent("el-icon"), null, {
            default: () => [createVNode(Camera, null, null)]
          }),
          children: [{
            label: "信息管理",
            value: "/page2/1"
          }, {
            label: "人员管理",
            value: "/page2/2"
          }, {
            label: "布控管理",
            value: "/page2/2-3-3",
            children: [{
              label: "车牌布防",
              value: "/page2/2-3-3-1"
            }, {
              label: "路线布防",
              value: "/page2/2-3-3-2"
            }]
          }]
        }]
      })
    }
  },
  emits: ["select", "itemClick"],
  setup(__props, {
    emit: emits
  }) {
    function onSelect({
      key,
      keyPath,
      item
    }) {
      emits("select", {
        key,
        keyPath,
        item
      });
    }
    function onTmplItemClick(item) {
      emits("itemClick", item);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYMenu = resolveComponent("FYMenu");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fy-top-navigation"
      }, _attrs))}><div class="left-one">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.config.icon), null, null), _parent);
      _push(`<span class="title">${ssrInterpolate(__props.config.title)}</span>`);
      if (__props.config.menu && __props.config.menu.length) {
        _push(`<div class="divider"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.config.menu && __props.config.menu.length) {
        _push(ssrRenderComponent(_component_FYMenu, {
          template: __props.config.menu,
          class: "top-nav-menu",
          onSelect,
          onItemClick: onTmplItemClick
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="right">`);
      ssrRenderSlot(_ctx.$slots, "operation", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const topNavigation_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/top-navigation/src/top-navigation.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const FYTopNavigation = withInstall(_sfc_main$_);
function insertScript$2() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = false;
    script.src = "http://www.bigemap.com:9000/bigemap.js/v2.1.0/bigemap.js";
    document.head.appendChild(script);
    const link2 = document.createElement("link");
    link2.href = "http://www.bigemap.com:9000/bigemap.js/v2.1.0/bigemap.css";
    link2.rel = "stylesheet";
    document.head.appendChild(link2);
    script.onload = () => {
      resolve();
    };
  });
}
async function BigMapRenderer$1(domId, defaultLatlng, updateLatlngCall) {
  await insertScript$2();
  const { BM } = window;
  BM.Config.HTTP_URL = "http://www.bigemap.com:9000";
  const map = BM.map(domId, "bigemap.zhongkexingtu", {
    center: [0, 0],
    zoom: 10,
    zoomControl: false
  });
  let marker = null;
  const latlng = ref(defaultLatlng);
  if (defaultLatlng) {
    marker = BM.marker(defaultLatlng).addTo(map);
  }
  map.on("click", (e) => {
    if (marker) {
      marker.remove();
    }
    marker = BM.marker(e.latlng).addTo(map);
    latlng.value = e.latlng;
    updateLatlngCall(e.latlng);
  });
}
const mapCoordselection_vue_vue_type_style_index_0_lang = "";
const _sfc_main$Z = /* @__PURE__ */ Object.assign({
  name: "FYMapCoordselection"
}, {
  __name: "map-coordselection",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      default: () => ({ lat: null, lng: null })
    },
    visible: {
      type: Boolean,
      default: false
    },
    renderer: {
      type: Object,
      default: null
    }
  },
  emits: ["update:modelValue", "update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const dialogVisible = computed({
      get() {
        return props.visible;
      },
      set(value) {
        emits("update:visible", value);
      }
    });
    const randomId = `fy_map_coord_${(/* @__PURE__ */ new Date()).getTime()}`;
    const Renderer = props.renderer ? props.renderer : BigMapRenderer$1;
    async function open() {
      await Renderer(
        randomId,
        props.modelValue,
        (latlng) => {
          emits("update:modelValue", latlng);
        }
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fy-map-coordselection-wrap" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
        "destroy-on-close": "",
        onOpen: open
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 点位选取 `);
          } else {
            return [
              createTextVNode(" 点位选取 ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="dialog-footer"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FYButton), {
              onClick: ($event) => dialogVisible.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`取消`);
                } else {
                  return [
                    createTextVNode("取消")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FYButton), {
              type: "primary",
              onClick: ($event) => dialogVisible.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 确定 `);
                } else {
                  return [
                    createTextVNode(" 确定 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "dialog-footer" }, [
                createVNode(unref(FYButton), {
                  onClick: ($event) => dialogVisible.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("取消")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(unref(FYButton), {
                  type: "primary",
                  onClick: ($event) => dialogVisible.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 确定 ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttr("id", randomId)} class="map-container"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", {
                id: randomId,
                class: "map-container"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="slot-wrap">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/map-coordselection/src/map-coordselection.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const MapCoordselection = _sfc_main$Z;
const FYMapCoordselection = withInstall(MapCoordselection);
const _sfc_main$Y = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    const tmpl = [{
      label: "我的需求",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(MessageBox, null, null)]
      }),
      sideRender: () => createVNode("span", null, [createTextVNode("...")]),
      onClick: () => {
        alert("click");
      }
    }, {
      label: "向左移动",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(ArrowLeft, null, null)]
      }),
      sideRender: () => createVNode("span", null, [createTextVNode("...")]),
      onClick: () => {
        alert("click");
      }
    }, {
      label: "向右边移动",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(ArrowRight, null, null)]
      }),
      sideRender: () => createVNode("span", null, [createTextVNode("...")]),
      onClick: () => {
        alert("click");
      }
    }];
    const visible1 = ref(false);
    const visible2 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem",
          "display": "flex",
          "column-gap": "1rem"
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYActionPanel), {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        template: tmpl
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({
              "cursor": "pointer"
            })}" class="trigger-target"${_scopeId}> 点我 ⇢ 打开动作面板 </div>`);
          } else {
            return [createVNode("div", {
              style: {
                "cursor": "pointer"
              },
              class: "trigger-target"
            }, " 点我 ⇢ 打开动作面板 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(FYActionPanel), {
        visible: visible1.value,
        "onUpdate:visible": ($event) => visible1.value = $event,
        template: tmpl,
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({
              "cursor": "pointer"
            })}" class="trigger-target"${_scopeId}> 点我 ⇢ 我会出现会在你的👉 </div>`);
          } else {
            return [createVNode("div", {
              style: {
                "cursor": "pointer"
              },
              class: "trigger-target"
            }, " 点我 ⇢ 我会出现会在你的👉 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(FYActionPanel), {
        visible: visible2.value,
        "onUpdate:visible": ($event) => visible2.value = $event,
        template: tmpl,
        placement: "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({
              "cursor": "pointer"
            })}" class="trigger-target"${_scopeId}> 点我 ⇢ 我会出现会在你的👈 </div>`);
          } else {
            return [createVNode("div", {
              style: {
                "cursor": "pointer"
              },
              class: "trigger-target"
            }, " 点我 ⇢ 我会出现会在你的👈 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const basic_vue_vue_type_style_index_0_lang$a = "";
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/action-panel/basic.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$Y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$X = {
  __name: "overlay",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    const tmpl1 = [{
      label: "面板一禁用状态",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(MessageBox, null, null)]
      }),
      disabled: true,
      onClick: () => {
        alert("click");
      }
    }, {
      label: "自定义Render",
      render: () => createVNode("span", null, [createTextVNode("自定义render")]),
      sideRender: () => createVNode("span", null, [createTextVNode("side ...")]),
      onClick: () => {
        alert("click");
      }
    }, {
      label: "不传递icon",
      // icon: (<el-icon><MessageBox /></el-icon>),
      sideRender: () => createVNode("span", null, [createTextVNode("side ...")]),
      onClick: () => {
        alert("click");
      }
    }, {
      label: "传递icon",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(MessageBox, null, null)]
      }),
      sideRender: () => createVNode("span", null, [createTextVNode("side ...")]),
      onClick: () => {
        alert("click");
      }
    }];
    const tmpl2 = [{
      label: "面板二",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(MessageBox, null, null)]
      }),
      sideRender: () => createVNode("span", null, [createTextVNode("side ...")]),
      onClick: () => {
        alert("click");
      }
    }, {
      label: "面板二",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(MessageBox, null, null)]
      }),
      sideRender: () => createVNode("span", null, [createTextVNode("side ...")]),
      onClick: () => {
        alert("click");
      }
    }, {
      label: "面板二",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(MessageBox, null, null)]
      }),
      sideRender: () => createVNode("span", null, [createTextVNode("side ...")]),
      onClick: () => {
        alert("click");
      }
    }];
    const tmpl = mergeTemplate(tmpl1, tmpl2);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem"
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYActionPanel), {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        template: unref(tmpl)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({
              "cursor": "pointer"
            })}" class="trigger-target"${_scopeId}> 点我看看 面板分层术🌲 </div>`);
          } else {
            return [createVNode("div", {
              style: {
                "cursor": "pointer"
              },
              class: "trigger-target"
            }, " 点我看看 面板分层术🌲 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/action-panel/overlay.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$X
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$W = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYAvatar), null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/avatar/basic.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$W
}, Symbol.toStringTag, { value: "Module" }));
const basic_vue_vue_type_style_index_0_lang$9 = "";
const _sfc_main$V = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYButton = resolveComponent("FYButton");
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4">`);
      _push(ssrRenderComponent(_component_FYButton, {
        type: "primary",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Primary `);
          } else {
            return [
              createTextVNode(" Primary ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "success",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Success `);
          } else {
            return [
              createTextVNode(" Success ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "info",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Info `);
          } else {
            return [
              createTextVNode(" Info ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "warning",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Warning `);
          } else {
            return [
              createTextVNode(" Warning ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "danger",
        loading: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Danger `);
          } else {
            return [
              createTextVNode(" Danger ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(_component_FYButton, {
        type: "primary",
        round: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Primary `);
          } else {
            return [
              createTextVNode(" Primary ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "success",
        round: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Success `);
          } else {
            return [
              createTextVNode(" Success ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "info",
        round: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Info `);
          } else {
            return [
              createTextVNode(" Info ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "warning",
        round: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Warning `);
          } else {
            return [
              createTextVNode(" Warning ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "danger",
        round: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Danger `);
          } else {
            return [
              createTextVNode(" Danger ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(_component_FYButton, {
        type: "info",
        text: "",
        link: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 无背景颜色文字 `);
          } else {
            return [
              createTextVNode(" 无背景颜色文字 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "primary",
        text: "",
        link: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 无背景颜色文字 `);
          } else {
            return [
              createTextVNode(" 无背景颜色文字 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "warning",
        text: "",
        link: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 无背景颜色文字 `);
          } else {
            return [
              createTextVNode(" 无背景颜色文字 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4">`);
      _push(ssrRenderComponent(_component_FYButton, {
        type: "primary",
        icon: unref(Edit)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 支持图标 `);
          } else {
            return [
              createTextVNode(" 支持图标 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, { type: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 插槽图标 `);
            _push2(ssrRenderComponent(_component_el_icon, { class: "el-icon--right" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Upload$1), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Upload$1))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" 插槽图标 "),
              createVNode(_component_el_icon, { class: "el-icon--right" }, {
                default: withCtx(() => [
                  createVNode(unref(Upload$1))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, {
        type: "primary",
        icon: unref(Edit),
        round: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 支持图标和圆角 `);
          } else {
            return [
              createTextVNode(" 支持图标和圆角 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/button/basic.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$V
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$U = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [{
      value: "guide",
      label: "Guide",
      children: [{
        value: "disciplines",
        label: "Disciplines",
        children: [{
          value: "consistency",
          label: "Consistency"
        }, {
          value: "feedback",
          label: "Feedback"
        }, {
          value: "efficiency",
          label: "Efficiency"
        }, {
          value: "controllability",
          label: "Controllability"
        }]
      }, {
        value: "navigation",
        label: "Navigation",
        children: [{
          value: "side nav",
          label: "Side Navigation"
        }, {
          value: "top nav",
          label: "Top Navigation"
        }]
      }]
    }];
    const value = ref();
    const props = {
      expandTrigger: "hover"
    };
    const handleChange = (v) => {
      console.log(v);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="m-4"><p>单击时子选项展开 (default)</p>`);
      _push(ssrRenderComponent(unref(FYCascader), {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options,
        "default-icon": true,
        onChange: handleChange
      }, null, _parent));
      _push(`</div><div class="m-4"><p>子选项在悬停时展开</p>`);
      _push(ssrRenderComponent(unref(FYCascader), {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options,
        props,
        onChange: handleChange
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const basic_vue_vue_type_style_index_0_lang$8 = "";
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/cascader/basic.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$U
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$T = {
  __name: "clearable",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [{
      value: "guide",
      label: "Guide",
      children: [{
        value: "disciplines",
        label: "Disciplines",
        children: [{
          value: "consistency",
          label: "Consistency"
        }, {
          value: "feedback",
          label: "Feedback"
        }, {
          value: "efficiency",
          label: "Efficiency"
        }, {
          value: "controllability",
          label: "Controllability"
        }]
      }, {
        value: "navigation",
        label: "Navigation",
        children: [{
          value: "side nav",
          label: "Side Navigation"
        }, {
          value: "top nav",
          label: "Top Navigation"
        }]
      }]
    }, {
      value: "guide2",
      label: "Guide2"
    }];
    const value = ref(["guide"]);
    const props = {
      expandTrigger: "hover"
    };
    const handleChange = (v) => {
      console.log(v);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "m-4"
      }, _attrs))}><p>clearable 可清空当前选择的数据</p>`);
      _push(ssrRenderComponent(unref(FYCascader), {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options,
        "default-icon": true,
        props,
        clearable: "",
        onChange: handleChange
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const clearable_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/cascader/clearable.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$T
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$S = {
  __name: "icon",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [{
      value: "guide",
      label: "Guide",
      children: [{
        value: "disciplines",
        label: "Disciplines",
        children: [{
          value: "consistency",
          label: "Consistency"
        }, {
          value: "feedback",
          label: "Feedback"
        }, {
          value: "efficiency",
          label: "Efficiency"
        }, {
          value: "controllability",
          label: "Controllability"
        }]
      }, {
        value: "navigation",
        label: "Navigation",
        children: [{
          value: "side nav",
          label: "Side Navigation"
        }, {
          value: "top nav",
          label: "Top Navigation"
        }]
      }]
    }];
    const options1 = [{
      value: "guide",
      label: "Guide",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(UserFilled, null, null)]
      }),
      // 自定义图标 传入jsx 无传递则展示默认图标
      children: [{
        value: "disciplines",
        label: "Disciplines",
        icon: createVNode(resolveComponent("el-icon"), null, {
          default: () => [createVNode(UserFilled, null, null)]
        }),
        // 自定义图标 传入jsx 无传递则展示默认图标
        children: [{
          value: "consistency",
          label: "Consistency",
          icon: createVNode(resolveComponent("el-icon"), null, {
            default: () => [createVNode(UserFilled, null, null)]
          })
          // 自定义图标 传入jsx 无传递则展示默认图标
        }, {
          value: "feedback",
          label: "Feedback",
          icon: createVNode(resolveComponent("el-icon"), null, {
            default: () => [createVNode(UserFilled, null, null)]
          })
          // 自定义图标 传入jsx 无传递则展示默认图标
        }, {
          value: "efficiency",
          label: "Efficiency",
          icon: createVNode(resolveComponent("el-icon"), null, {
            default: () => [createVNode(UserFilled, null, null)]
          })
          // 自定义图标 传入jsx 无传递则展示默认图标
        }, {
          value: "controllability",
          label: "Controllability"
        }]
      }]
    }];
    const value = ref();
    const handleChange = (v) => {
      console.log(v);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="m-4"><p>默认图标展示,默认文本的第一个字</p>`);
      _push(ssrRenderComponent(unref(FYCascader), {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options,
        "default-icon": true,
        onChange: handleChange
      }, null, _parent));
      _push(`</div><div class="m-4"><p>自定义图标展示</p>`);
      _push(ssrRenderComponent(unref(FYCascader), {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options: options1,
        "default-icon": true,
        onChange: handleChange
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const icon_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/cascader/icon.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$S
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$R = {
  __name: "multiple",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [{
      value: "guide",
      label: "Guide",
      children: [{
        value: "disciplines",
        label: "Disciplines",
        children: [{
          value: "consistency",
          label: "Consistency"
        }, {
          value: "feedback",
          label: "Feedback"
        }, {
          value: "efficiency",
          label: "Efficiency"
        }, {
          value: "controllability",
          label: "Controllability"
        }]
      }, {
        value: "navigation",
        label: "Navigation",
        children: [{
          value: "side nav",
          label: "Side Navigation"
        }, {
          value: "top nav",
          label: "Top Navigation"
        }]
      }]
    }, {
      value: "guide2",
      label: "Guide2"
    }];
    const value = ref(["guide"]);
    const props = {
      multiple: true
      // 开始多选
    };
    const handleChange = (v) => {
      console.log(v);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="m-4"><p>正确用法</p>`);
      _push(ssrRenderComponent(unref(FYCascader), {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options,
        "default-icon": true,
        props,
        clearable: "",
        onChange: handleChange
      }, null, _parent));
      _push(`</div><div class="m-4"><p>设置 collapse = true 将选中的标签折叠</p>`);
      _push(ssrRenderComponent(unref(FYCascader), {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options,
        "default-icon": true,
        props,
        "collapse-tags": "",
        clearable: "",
        onChange: handleChange
      }, null, _parent));
      _push(`</div><div class="m-4"><p>使用 collapse-tags-tooltip 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。</p>`);
      _push(ssrRenderComponent(unref(FYCascader), {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options,
        "default-icon": true,
        props,
        "collapse-tags": "",
        "collapse-tags-tooltip": "",
        clearable: "",
        onChange: handleChange
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const multiple_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/cascader/multiple.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$R
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Q = {
  __name: "slot",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [{
      value: "guide",
      label: "Guide",
      children: [{
        value: "disciplines",
        label: "Disciplines",
        children: [{
          value: "consistency",
          label: "Consistency"
        }, {
          value: "feedback",
          label: "Feedback"
        }, {
          value: "efficiency",
          label: "Efficiency"
        }, {
          value: "controllability",
          label: "Controllability"
        }]
      }, {
        value: "navigation",
        label: "Navigation",
        children: [{
          value: "side nav",
          label: "Side Navigation"
        }, {
          value: "top nav",
          label: "Top Navigation"
        }]
      }]
    }, {
      value: "guide2",
      label: "Guide2"
    }];
    const value = ref(["guide"]);
    const props = {
      expandTrigger: "hover"
    };
    const handleChange = (v) => {
      console.log(v);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "m-4"
      }, _attrs))}><p>自定义节点内容</p>`);
      _push(ssrRenderComponent(unref(FYCascader), {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options,
        "default-icon": true,
        props,
        clearable: "",
        onChange: handleChange
      }, {
        default: withCtx(({
          data,
          node
        }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({
              "display": "flex",
              "align-items": "center",
              "column-gap": "0.5rem"
            })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(WarnTriangleFilled), null, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(unref(WarnTriangleFilled))];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(data.label)}</span></div>`);
          } else {
            return [createVNode("div", {
              style: {
                "display": "flex",
                "align-items": "center",
                "column-gap": "0.5rem"
              }
            }, [createVNode(_component_el_icon, null, {
              default: withCtx(() => [createVNode(unref(WarnTriangleFilled))]),
              _: 1
            }), createVNode("span", null, toDisplayString(data.label), 1)])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const slot_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/cascader/slot.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$Q
}, Symbol.toStringTag, { value: "Module" }));
const basic_vue_vue_type_style_index_0_scoped_f5fc0fd0_lang = "";
const _sfc_main$P = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const shortcuts = [
      {
        text: "今天",
        value: /* @__PURE__ */ new Date()
      },
      {
        text: "明天",
        value: () => {
          const date = /* @__PURE__ */ new Date();
          date.setTime(date.getTime() - 3600 * 1e3 * 24);
          return date;
        }
      },
      {
        text: "下周",
        value: () => {
          const date = /* @__PURE__ */ new Date();
          date.setTime(date.getTime() + 3600 * 1e3 * 24 * 7);
          return date;
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo-date-picker" }, _attrs))} data-v-f5fc0fd0><div class="block" data-v-f5fc0fd0><span class="demonstration" data-v-f5fc0fd0>默认</span>`);
      _push(ssrRenderComponent(unref(FYDatePicker), {
        modelValue: value1.value,
        "onUpdate:modelValue": ($event) => value1.value = $event,
        type: "date"
      }, null, _parent));
      _push(`</div><div class="block" data-v-f5fc0fd0><span class="demonstration" data-v-f5fc0fd0>具有快速选项的选取器</span>`);
      _push(ssrRenderComponent(unref(FYDatePicker), {
        modelValue: value2.value,
        "onUpdate:modelValue": ($event) => value2.value = $event,
        type: "date",
        placeholder: "Pick a day",
        shortcuts
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/date-picker/basic.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const basic$3 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-f5fc0fd0"]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: basic$3
}, Symbol.toStringTag, { value: "Module" }));
const disabled_vue_vue_type_style_index_0_scoped_616cf0a1_lang = "";
const _sfc_main$O = {
  __name: "disabled",
  __ssrInlineRender: true,
  setup(__props) {
    const { StartDatePicker, EndDatePicker } = createRangeDatePicker();
    const db = (time) => !!time;
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="demo-date-picker" data-v-616cf0a1><div class="block" data-v-616cf0a1><span class="demonstration" data-v-616cf0a1>禁用小于当前时间的选择</span>`);
      _push(ssrRenderComponent(unref(FYDatePicker), {
        modelValue: value1.value,
        "onUpdate:modelValue": ($event) => value1.value = $event,
        disableLessThan: true
      }, null, _parent));
      _push(`</div></div><div class="demo-date-picker" data-v-616cf0a1><div class="block" data-v-616cf0a1><span class="demonstration" data-v-616cf0a1>禁用大于当前时间的选择</span>`);
      _push(ssrRenderComponent(unref(FYDatePicker), {
        modelValue: value2.value,
        "onUpdate:modelValue": ($event) => value2.value = $event,
        disableMoreThan: true
      }, null, _parent));
      _push(`</div></div><div class="demo-date-picker" data-v-616cf0a1><div class="block" data-v-616cf0a1><span class="demonstration" data-v-616cf0a1>传递自定义函数自主判断是否禁用</span>`);
      _push(ssrRenderComponent(unref(FYDatePicker), {
        modelValue: value3.value,
        "onUpdate:modelValue": ($event) => value3.value = $event,
        "disabled-date": db
      }, null, _parent));
      _push(`</div></div><div class="demo-date-picker" data-v-616cf0a1><div class="block" data-v-616cf0a1><span class="demonstration" data-v-616cf0a1>截止时间基于开始时间限制</span><span class="demonstration" data-v-616cf0a1>除了双向绑定的值内置，其余属性依旧可以传递</span><div style="${ssrRenderStyle({ "width": "100%", "display": "flex", "align-items": "center", "justify-content": "center", "column-gap": "10px" })}" data-v-616cf0a1> 开始时间：`);
      _push(ssrRenderComponent(unref(StartDatePicker), { placeholder: "选择开始时间" }, null, _parent));
      _push(` <div style="${ssrRenderStyle({ "margin": "10px" })}" data-v-616cf0a1></div> 截止时间：`);
      _push(ssrRenderComponent(unref(EndDatePicker), null, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/date-picker/disabled.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const disabled = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-616cf0a1"]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: disabled
}, Symbol.toStringTag, { value: "Module" }));
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_main$N = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(false);
    const handleOpen = () => {
    };
    const dialogConfigDefault = {
      title: "测试计划",
      template: [
        {
          type: "input",
          label: "长输入",
          value: "input",
          limit: 10,
          require: true,
          rules: [{
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }]
        },
        {
          type: "select",
          label: "选择",
          value: "select",
          options: [
            {
              value: "value1",
              label: "label1"
            },
            {
              value: "value2",
              label: "label2"
            }
          ],
          half: true
        },
        {
          type: "datePicker",
          label: "时间选择",
          value: "datePicker",
          half: true
        },
        {
          type: "cascader",
          label: "选择",
          value: "cascader",
          options: [
            {
              value: "guide",
              label: "Guide",
              children: [
                {
                  value: "disciplines",
                  label: "Disciplines",
                  children: [
                    {
                      value: "consistency",
                      label: "Consistency"
                    },
                    {
                      value: "feedback",
                      label: "Feedback"
                    },
                    {
                      value: "efficiency",
                      label: "Efficiency"
                    },
                    {
                      value: "controllability",
                      label: "Controllability"
                    }
                  ]
                },
                {
                  value: "navigation",
                  label: "Navigation",
                  children: [
                    {
                      value: "side nav",
                      label: "Side Navigation"
                    },
                    {
                      value: "top nav",
                      label: "Top Navigation"
                    }
                  ]
                }
              ]
            }
          ],
          half: true
        },
        {
          type: "cascader",
          label: "选择",
          value: "cascader2",
          options: [
            {
              value: "guide",
              label: "Guide",
              children: [
                {
                  value: "disciplines",
                  label: "Disciplines",
                  children: [
                    {
                      value: "consistency",
                      label: "Consistency"
                    },
                    {
                      value: "feedback",
                      label: "Feedback"
                    },
                    {
                      value: "efficiency",
                      label: "Efficiency"
                    },
                    {
                      value: "controllability",
                      label: "Controllability"
                    }
                  ]
                },
                {
                  value: "navigation",
                  label: "Navigation",
                  children: [
                    {
                      value: "side nav",
                      label: "Side Navigation"
                    },
                    {
                      value: "top nav",
                      label: "Top Navigation"
                    }
                  ]
                }
              ]
            }
          ],
          half: true
        },
        {
          type: "select",
          label: "选择",
          value: "select2",
          options: [
            {
              value: "value1",
              label: "label1"
            },
            {
              value: "value2",
              label: "label2"
            }
          ],
          half: true
        },
        {
          type: "select",
          label: "选择",
          value: "select3",
          options: [
            {
              value: "value1",
              label: "label1"
            },
            {
              value: "value2",
              label: "label2"
            }
          ],
          half: true
        },
        {
          type: "switch",
          label: "选择",
          value: "switch",
          oneOfFour: true
        },
        {
          type: "switch",
          label: "选择",
          value: "switch2",
          cb: () => {
            console.log("我是回调函数");
          },
          oneOfFour: true
        },
        {
          type: "input",
          label: "长文本",
          value: "input2",
          textarea: true,
          half: true
        }
      ]
    };
    const formModel = ref({
      input: "",
      select: "",
      select2: "",
      select3: "",
      switch: true,
      switch2: true,
      datePicker: "",
      cascader: [],
      cascader2: [],
      input2: ""
    });
    const handleSubmit = () => {
      value.value = false;
    };
    const handleFail = () => {
    };
    const handleCancel = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYDialog = resolveComponent("FYDialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4"><button> 打开对话框 </button>`);
      _push(ssrRenderComponent(_component_FYDialog, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        dialogConfig: dialogConfigDefault,
        formModel: formModel.value,
        onSubmit: handleSubmit,
        onFail: handleFail,
        onCancel: handleCancel,
        onOpen: handleOpen
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/dialog/default.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$N
}, Symbol.toStringTag, { value: "Module" }));
const delete_vue_vue_type_style_index_0_lang = "";
const _sfc_main$M = {
  __name: "delete",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(false);
    const dialogConfig = {
      // 标题
      title: "确认删除",
      // 业务类型
      type: "delete",
      // 删除对象字段名
      businessType: "字段",
      // tag文字
      tagText: "需求",
      // 自定义删除描述
      customDesc: "删除测试用例会一起删除未完成测试计划内的执行用例，删除后如果想找回测试用例，可以通过测试库设置内的回收站进行恢复。"
    };
    const handleConfirm = () => {
      value.value = false;
    };
    const handleCancel = () => {
      value.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYDialog = resolveComponent("FYDialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4"><button> 打开对话框 </button>`);
      _push(ssrRenderComponent(_component_FYDialog, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        dialogConfig,
        onConfirm: handleConfirm,
        onCancel: handleCancel
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/dialog/delete.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$M
}, Symbol.toStringTag, { value: "Module" }));
const edit_vue_vue_type_style_index_0_lang = "";
const _sfc_main$L = {
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(false);
    const handleOpen = () => {
      console.log("🚀 ~ file: edit.vue:27 ~ handleOpen ~ formModel.value:", formModel.value);
    };
    const dialogConfigDefault = {
      title: "测试计划",
      type: "update",
      template: [
        {
          type: "input",
          label: "长输入",
          value: "input",
          placeholder: "请输入搜索文字",
          limit: 10,
          require: true,
          rules: [{
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }]
        },
        {
          type: "select",
          label: "选择",
          value: "select",
          placeholder: "请输入搜索文字",
          options: [
            {
              value: "value1",
              label: "label1"
            },
            {
              value: "value2",
              label: "label2"
            }
          ],
          half: true
        },
        {
          type: "datePicker",
          label: "时间选择",
          value: "datePicker",
          half: true
        },
        {
          type: "cascader",
          label: "选择",
          value: "cascader",
          options: [
            {
              value: "guide",
              label: "Guide",
              children: [
                {
                  value: "disciplines",
                  label: "Disciplines",
                  children: [
                    {
                      value: "consistency",
                      label: "Consistency"
                    },
                    {
                      value: "feedback",
                      label: "Feedback"
                    },
                    {
                      value: "efficiency",
                      label: "Efficiency"
                    },
                    {
                      value: "controllability",
                      label: "Controllability"
                    }
                  ]
                },
                {
                  value: "navigation",
                  label: "Navigation",
                  children: [
                    {
                      value: "side nav",
                      label: "Side Navigation"
                    },
                    {
                      value: "top nav",
                      label: "Top Navigation"
                    }
                  ]
                }
              ]
            }
          ],
          half: true
        },
        {
          type: "cascader",
          label: "选择",
          value: "cascader2",
          options: [
            {
              value: "guide",
              label: "Guide",
              children: [
                {
                  value: "disciplines",
                  label: "Disciplines",
                  children: [
                    {
                      value: "consistency",
                      label: "Consistency"
                    },
                    {
                      value: "feedback",
                      label: "Feedback"
                    },
                    {
                      value: "efficiency",
                      label: "Efficiency"
                    },
                    {
                      value: "controllability",
                      label: "Controllability"
                    }
                  ]
                },
                {
                  value: "navigation",
                  label: "Navigation",
                  children: [
                    {
                      value: "side nav",
                      label: "Side Navigation"
                    },
                    {
                      value: "top nav",
                      label: "Top Navigation"
                    }
                  ]
                }
              ]
            }
          ],
          half: true
        },
        {
          type: "select",
          label: "选择",
          value: "select2",
          placeholder: "请输入搜索文字",
          options: [
            {
              value: "value1",
              label: "label1"
            },
            {
              value: "value2",
              label: "label2"
            }
          ],
          half: true
        },
        {
          type: "select",
          label: "选择",
          value: "select3",
          placeholder: "请输入搜索文字",
          options: [
            {
              value: "value1",
              label: "label1"
            },
            {
              value: "value2",
              label: "label2"
            }
          ],
          half: true
        },
        {
          type: "switch",
          label: "选择",
          value: "switch",
          cb: () => {
            console.log("我是回调函数");
          },
          oneOfFour: true
        },
        {
          type: "switch",
          label: "选择",
          value: "switch2",
          cb: () => {
            console.log("我是回调函数");
          },
          oneOfFour: true
        },
        {
          type: "input",
          label: "长文本",
          value: "input2",
          placeholder: "请输入搜索文字",
          textarea: true,
          half: true
        }
      ]
    };
    const formModel = ref({
      input: "123",
      select: "value1",
      select2: "value2",
      select3: "",
      switch: false,
      switch2: false,
      datePicker: "",
      cascader: [],
      cascader2: [],
      input2: ""
    });
    const handleSubmit = (v) => {
      formModel.value = v;
      console.log("🚀 ~ file: edit.vue:244 ~ handleSubmit ~ v:", v);
      value.value = false;
    };
    const handleFail = () => {
    };
    const handleCancel = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYDialog = resolveComponent("FYDialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4"><button> 打开对话框 ${ssrInterpolate(value.value)}</button>`);
      _push(ssrRenderComponent(_component_FYDialog, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        dialogConfig: dialogConfigDefault,
        formModel: formModel.value,
        onSubmit: handleSubmit,
        onFail: handleFail,
        onCancel: handleCancel,
        onOpen: handleOpen
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/dialog/edit.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$L
}, Symbol.toStringTag, { value: "Module" }));
const longList_vue_vue_type_style_index_0_lang = "";
const _sfc_main$K = {
  __name: "longList",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(false);
    const handleOpen = () => {
    };
    const dialogConfigDefault = {
      title: "测试计划",
      template: [
        {
          type: "input",
          label: "长输入",
          value: "input",
          placeholder: "请输入搜索文字",
          limit: 10,
          require: true,
          rules: [{
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }]
        },
        {
          type: "select",
          label: "选择",
          value: "select",
          placeholder: "请输入搜索文字",
          options: [
            {
              value: "value1",
              label: "label1"
            },
            {
              value: "value2",
              label: "label2"
            }
          ],
          half: true
        },
        {
          type: "datePicker",
          label: "时间选择",
          value: "datePicker",
          half: true
        },
        {
          type: "cascader",
          label: "选择",
          value: "cascader",
          options: [
            {
              value: "guide",
              label: "Guide",
              children: [
                {
                  value: "disciplines",
                  label: "Disciplines",
                  children: [
                    {
                      value: "consistency",
                      label: "Consistency"
                    },
                    {
                      value: "feedback",
                      label: "Feedback"
                    },
                    {
                      value: "efficiency",
                      label: "Efficiency"
                    },
                    {
                      value: "controllability",
                      label: "Controllability"
                    }
                  ]
                },
                {
                  value: "navigation",
                  label: "Navigation",
                  children: [
                    {
                      value: "side nav",
                      label: "Side Navigation"
                    },
                    {
                      value: "top nav",
                      label: "Top Navigation"
                    }
                  ]
                }
              ]
            }
          ],
          half: true
        },
        {
          type: "cascader",
          label: "选择",
          value: "cascader2",
          options: [
            {
              value: "guide",
              label: "Guide",
              children: [
                {
                  value: "disciplines",
                  label: "Disciplines",
                  children: [
                    {
                      value: "consistency",
                      label: "Consistency"
                    },
                    {
                      value: "feedback",
                      label: "Feedback"
                    },
                    {
                      value: "efficiency",
                      label: "Efficiency"
                    },
                    {
                      value: "controllability",
                      label: "Controllability"
                    }
                  ]
                },
                {
                  value: "navigation",
                  label: "Navigation",
                  children: [
                    {
                      value: "side nav",
                      label: "Side Navigation"
                    },
                    {
                      value: "top nav",
                      label: "Top Navigation"
                    }
                  ]
                }
              ]
            }
          ],
          half: true
        },
        {
          type: "select",
          label: "选择",
          value: "select2",
          placeholder: "请输入搜索文字",
          options: [
            {
              value: "value1",
              label: "label1"
            },
            {
              value: "value2",
              label: "label2"
            }
          ],
          half: true
        },
        {
          type: "select",
          label: "选择",
          value: "select3",
          placeholder: "请输入搜索文字",
          options: [
            {
              value: "value1",
              label: "label1"
            },
            {
              value: "value2",
              label: "label2"
            }
          ],
          half: true
        },
        {
          type: "switch",
          label: "选择",
          value: "switch",
          cb: () => {
          },
          oneOfFour: true
        },
        {
          type: "switch",
          label: "选择",
          value: "switch2",
          cb: () => {
            console.log("我是回调函数");
          },
          oneOfFour: true
        },
        {
          type: "input",
          label: "长文本",
          value: "input2",
          placeholder: "请输入搜索文字",
          textarea: true,
          half: true
        },
        {
          type: "input",
          label: "input",
          value: "input3",
          placeholder: "请输入搜索文字"
        },
        {
          type: "input",
          label: "input",
          value: "input5",
          placeholder: "请输入搜索文字"
        },
        {
          type: "input",
          label: "input",
          value: "input6",
          placeholder: "请输入搜索文字"
        },
        {
          type: "input",
          label: "input",
          value: "input6",
          placeholder: "请输入搜索文字"
        }
      ]
    };
    const formModel = ref({
      input: "",
      select: "",
      select2: "",
      select3: "",
      switch: false,
      switch2: false,
      datePicker: "",
      cascader: [],
      cascader2: [],
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: ""
    });
    const handleSubmit = () => {
      value.value = false;
    };
    const handleFail = () => {
    };
    const handleCancel = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYDialog = resolveComponent("FYDialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4"><button> 打开对话框 </button>`);
      _push(ssrRenderComponent(_component_FYDialog, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        dialogConfig: dialogConfigDefault,
        formModel: formModel.value,
        onSubmit: handleSubmit,
        onFail: handleFail,
        onCancel: handleCancel,
        onOpen: handleOpen
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/dialog/longList.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$K
}, Symbol.toStringTag, { value: "Module" }));
const mini_vue_vue_type_style_index_0_lang = "";
const _sfc_main$J = {
  __name: "mini",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(false);
    const handleOpen = () => {
    };
    const dialogConfig = {
      title: "测试计划",
      template: [
        {
          type: "input",
          label: "input",
          value: "input",
          placeholder: "请输入搜索文字",
          limit: 10,
          require: true,
          rules: [{
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }]
        },
        {
          type: "select",
          label: "select",
          value: "select",
          placeholder: "请输入搜索文字",
          options: [
            {
              value: "value1",
              label: "label1"
            },
            {
              value: "value2",
              label: "label2"
            }
          ]
        },
        {
          type: "input",
          label: "input",
          value: "input2",
          placeholder: "请输入搜索文字",
          textarea: true
        },
        {
          type: "switch",
          label: "switch",
          value: "switch",
          cb: () => {
            console.log("我是回调函数");
          }
        }
        // {
        //   type: 'datePicker',
        //   label: 'datePicker',
        //   value: 'datePicker',
        // },
      ]
    };
    const handleOpend = () => {
    };
    const formModel = ref({
      input: "",
      select: "",
      select2: "",
      select3: "",
      switch: false,
      switch2: false,
      datePicker: "",
      cascader: [],
      cascader2: [],
      input2: ""
    });
    const handleSubmit = () => {
      value.value = false;
    };
    const handleFail = () => {
    };
    const handleCancel = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYDialog = resolveComponent("FYDialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4"><button> 打开对话框 </button>`);
      _push(ssrRenderComponent(_component_FYDialog, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        dialogConfig,
        formModel: formModel.value,
        onSubmit: handleSubmit,
        onFail: handleFail,
        onCancel: handleCancel,
        onOpen: handleOpen,
        onOpened: handleOpend
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/dialog/mini.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$J
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$I = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "padding": "10px" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYEmpty), null, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "margin": "20px 0", "border-bottom": "1px solid gainsboro" })}"></div>`);
      _push(ssrRenderComponent(unref(FYEmpty), { description: "description" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/empty/basic.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$I
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$H = {
  __name: "size",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "padding": "10px" } }, _attrs))}><div>size 50</div>`);
      _push(ssrRenderComponent(unref(FYEmpty), { "image-size": 50 }, null, _parent));
      _push(`<div style="${ssrRenderStyle({ "margin": "20px 0", "border-bottom": "1px solid gainsboro" })}"></div><div>size 500</div>`);
      _push(ssrRenderComponent(unref(FYEmpty), { "image-size": 500 }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/empty/size.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$H
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    const visible1 = ref(false);
    const visible2 = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYFilePreview = resolveComponent("FYFilePreview");
      const _component_FYButton = resolveComponent("FYButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem", "display": "flex", "column-gap": "2rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(_component_FYFilePreview, {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        src: "https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FYButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`点我预览word`);
                } else {
                  return [
                    createTextVNode("点我预览word")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FYButton, null, {
                default: withCtx(() => [
                  createTextVNode("点我预览word")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYFilePreview, {
        visible: visible1.value,
        "onUpdate:visible": ($event) => visible1.value = $event,
        src: "https://501351981.github.io/vue-office/examples/dist/static/test-files/test.xlsx"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FYButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`点我预览excel`);
                } else {
                  return [
                    createTextVNode("点我预览excel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FYButton, null, {
                default: withCtx(() => [
                  createTextVNode("点我预览excel")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYFilePreview, {
        visible: visible2.value,
        "onUpdate:visible": ($event) => visible2.value = $event,
        src: "https://501351981.github.io/vue-office/examples/dist/static/test-files/test.pdf"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FYButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`点我预览pdf`);
                } else {
                  return [
                    createTextVNode("点我预览pdf")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FYButton, null, {
                default: withCtx(() => [
                  createTextVNode("点我预览pdf")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/file-preview/basic.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$G
}, Symbol.toStringTag, { value: "Module" }));
const basic_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main$F = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const tmpl = [
      {
        label: "负责人",
        type: "multipleSelect",
        value: "fzr",
        options: [{ label: "李校长", value: 1 }, { label: "王美丽", value: 2 }],
        defaultValue: [1],
        onChange({ value }) {
        }
      },
      {
        label: "创建人",
        type: "select",
        value: "createperson",
        defaultValue: [2],
        options: [{ label: "李校长", value: 1 }, { label: "王美丽", value: 2 }],
        onChange({ value }) {
        }
      }
    ];
    function onChange(parmas) {
      console.log("🚀 ~ file: basic.vue:27 ~ onChange ~ parmas:", parmas);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}><div class="demo">`);
      _push(ssrRenderComponent(unref(FYFilterDisplay), {
        template: tmpl,
        onChange
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/filter-display/basic.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$F
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {
  __name: "renderer",
  __ssrInlineRender: true,
  setup(__props) {
    installFilterDisplayItem({
      type: "diySelect",
      renderer(props) {
        return createVNode(resolveComponent("FYSelect"), mergeProps({
          "placeholder": `请选择${props.label}`
        }, props, {
          "modelValue": props.model[props.value],
          "onUpdate:modelValue": ($event) => props.model[props.value] = $event,
          "placement": "bottom-start",
          "onChange": () => props.onChange ? props.onChange({
            value: props.model[props.value]
          }) : ""
        }), null);
      }
    });
    const tmpl = [{
      label: "负责人",
      type: "input",
      value: "lew",
      defaultValue: "李恩伟",
      onChange({
        value
      }) {
        console.log("🚀 ~ file: basic.vue:11 ~ onChange ~ e:", value);
      },
      render(props) {
        return createVNode(resolveComponent("FYInput"), {
          "modelValue": props.model[props.value],
          "onUpdate:modelValue": ($event) => props.model[props.value] = $event,
          "onChange": () => props.onChange ? props.onChange({
            value: props.model[props.value]
          }) : ""
        }, null);
      }
    }, {
      label: "创建人",
      type: "diySelect",
      // 此类型为自定义扩展的组件
      value: "createperson",
      defaultValue: 2,
      options: [{
        label: "李校长",
        value: 1
      }, {
        label: "王美丽",
        value: 2
      }]
    }];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem"
        }
      }, _attrs))}><div class="demo">`);
      _push(ssrRenderComponent(unref(FYFilterDisplay), {
        template: tmpl
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const renderer_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/filter-display/renderer.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$E
}, Symbol.toStringTag, { value: "Module" }));
const basic_vue_vue_type_style_index_0_lang$7 = "";
const _sfc_main$D = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const tmpl = [
      {
        label: "负责人",
        type: "input",
        value: "",
        defaultValue: 1
      },
      {
        label: "创建人",
        type: "select",
        value: "createperson",
        defaultValue: 2,
        options: [{ label: "李校长", value: 1 }, { label: "王美丽", value: 2 }]
      },
      {
        label: "开始时间",
        type: "datePicker",
        value: "startTime"
      }
    ];
    function submit(model) {
      loading.value = true;
      console.log("🚀 ~ file: basic.vue:6 ~ submit ~ model:", model);
      setTimeout(() => {
        loading.value = false;
      }, 1e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "margin": "1rem" },
        class: "demo"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYFilterInline), {
        loading: loading.value,
        template: tmpl,
        onSubmit: submit
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/filter-inline/basic.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$D
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {
  __name: "renderer",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    installFilterInlineItem({
      type: "diySelect",
      renderer(props) {
        return createVNode(resolveComponent("FYSelect"), mergeProps({
          "placeholder": `请选择${props.label}`
        }, props, {
          "modelValue": props.model[props.value],
          "onUpdate:modelValue": ($event) => props.model[props.value] = $event,
          "placement": "bottom-start"
        }), null);
      }
    });
    const tmpl = [{
      label: "负责人",
      type: "input",
      value: "lew",
      defaultValue: "李恩伟",
      render(props) {
        return createVNode(resolveComponent("FYInput"), {
          "modelValue": props.model[props.value],
          "onUpdate:modelValue": ($event) => props.model[props.value] = $event
        }, null);
      }
    }, {
      label: "创建人",
      type: "diySelect",
      value: "createperson",
      defaultValue: 2,
      options: [{
        label: "李校长",
        value: 1
      }, {
        label: "王美丽",
        value: 2
      }]
    }, {
      label: "开始时间",
      type: "datePicker",
      value: "startTime"
    }];
    function submit(model) {
      loading.value = true;
      console.log("🚀 ~ file: basic.vue:6 ~ submit ~ model:", model);
      setTimeout(() => {
        loading.value = false;
      }, 1e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem"
        },
        class: "demo"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYFilterInline), {
        loading: loading.value,
        template: tmpl,
        onSubmit: submit
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const renderer_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/filter-inline/renderer.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$C
}, Symbol.toStringTag, { value: "Module" }));
const basic_vue_vue_type_style_index_0_scoped_9c528cb6_lang = "";
const _sfc_main$B = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const tmpl = [
      {
        label: "负责人",
        type: "select",
        // 负责人对应的组件类型
        value: "person",
        defaultValue: 1,
        options: [{ label: "王小谟", value: 1 }, { label: "张大哥", value: 2 }]
      },
      {
        label: "创建人",
        type: "select",
        value: "createperson",
        defaultValue: 2,
        options: [{ label: "李校长", value: 1 }, { label: "王美丽", value: 2 }]
      },
      {
        label: "开始时间",
        type: "datePicker",
        value: "startTime",
        digit: true
        // 代表需要数字关系运算符
      }
    ];
    const visible = ref(false);
    const result = ref([]);
    function submit(values) {
      result.value = values;
      console.log("🚀 ~ file: basic.vue:35 ~ submit ~ result.value :", result.value);
    }
    function cancel() {
    }
    function reset() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      const _component_Expand = resolveComponent("Expand");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))} data-v-9c528cb6>`);
      _push(ssrRenderComponent(unref(FYFilterPanel), {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        template: tmpl,
        onSubmit: submit,
        onCancel: cancel,
        onReset: reset
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trigger-target" data-v-9c528cb6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Expand, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Expand)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span data-v-9c528cb6${_scopeId}>筛选</span><div style="${ssrRenderStyle(result.value.length ? null : { display: "none" })}" class="badge" data-v-9c528cb6${_scopeId}>${ssrInterpolate(result.value.length)}</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "trigger-target",
                onClick: ($event) => visible.value = true
              }, [
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_Expand)
                  ]),
                  _: 1
                }),
                createVNode("span", null, "筛选"),
                withDirectives(createVNode("div", { class: "badge" }, toDisplayString(result.value.length), 513), [
                  [vShow, result.value.length]
                ])
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/filter-panel/basic.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const basic$2 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-9c528cb6"]]);
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: basic$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {
  __name: "renderer",
  __ssrInlineRender: true,
  setup(__props) {
    installFilterPanelItem({
      type: "diySelect",
      render(props) {
        return createVNode(resolveComponent("FYSelect"), mergeProps({
          "style": "width: 300px",
          "placeholder": `请选择${props.label}`
        }, props, {
          "modelValue": props.model[props.value],
          "onUpdate:modelValue": ($event) => props.model[props.value] = $event,
          "placement": "bottom-start"
        }), null);
      }
    });
    const diyInput = {
      label: "负责人",
      type: "input",
      // 负责人对应的组件类型
      value: "person",
      defaultValue: "李恩伟",
      // 传递render属性 自定义组件
      render(props) {
        return createVNode(FYInput, {
          "style": "width: 300px",
          "modelValue": props.model[props.value],
          "onUpdate:modelValue": ($event) => props.model[props.value] = $event
        }, null);
      }
    };
    const tmpl = [diyInput, {
      label: "创建人",
      type: "diySelect",
      value: "createperson",
      defaultValue: 2,
      options: [{
        label: "李俊",
        value: 1
      }, {
        label: "林志超",
        value: 2
      }]
    }, {
      label: "开始时间",
      type: "datePicker",
      value: "startTime",
      digit: true
      // 代表需要数字关系运算符
    }];
    const visible = ref(false);
    const result = ref([]);
    function submit(values) {
      result.value = values;
      console.log("🚀 ~ file: basic.vue:35 ~ submit ~ result.value :", result.value);
    }
    function cancel() {
    }
    function reset() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      const _component_Expand = resolveComponent("Expand");
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem"
        }
      }, _attrs))} data-v-d66a475a>`);
      _push(ssrRenderComponent(unref(FYFilterPanel), {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        template: tmpl,
        onSubmit: submit,
        onCancel: cancel,
        onReset: reset
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trigger-target" data-v-d66a475a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Expand, null, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_Expand)];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span data-v-d66a475a${_scopeId}>筛选</span><div style="${ssrRenderStyle(result.value.length ? null : {
              display: "none"
            })}" class="badge" data-v-d66a475a${_scopeId}>${ssrInterpolate(result.value.length)}</div></div>`);
          } else {
            return [createVNode("div", {
              class: "trigger-target",
              onClick: ($event) => visible.value = true
            }, [createVNode(_component_el_icon, null, {
              default: withCtx(() => [createVNode(_component_Expand)]),
              _: 1
            }), createVNode("span", null, "筛选"), withDirectives(createVNode("div", {
              class: "badge"
            }, toDisplayString(result.value.length), 513), [[vShow, result.value.length]])], 8, ["onClick"])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const renderer_vue_vue_type_style_index_0_scoped_d66a475a_lang = "";
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/filter-panel/renderer.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const renderer = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-d66a475a"]]);
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: renderer
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const template = ref([
      {
        type: "input",
        label: "姓名",
        value: "input",
        placeholder: "请输入搜索文字",
        limit: 10,
        require: true,
        rules: [{
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur"
        }],
        desc: "123"
      },
      {
        type: "select",
        label: "地点",
        value: "select",
        placeholder: "请输入搜索文字",
        options: [
          {
            value: "value1",
            label: "杭州"
          },
          {
            value: "value2",
            label: "上海"
          }
        ],
        half: true,
        desc: "123"
      },
      {
        type: "datePicker",
        label: "生日",
        value: "datePicker",
        half: true,
        desc: "123"
      },
      {
        type: "cascader",
        label: "组织",
        value: "cascader",
        options: [
          {
            value: "guide",
            label: "财务部",
            children: [
              {
                value: "disciplines",
                label: "财务一组",
                children: [
                  {
                    value: "consistency",
                    label: "会计组"
                  },
                  {
                    value: "feedback",
                    label: "出纳组"
                  }
                ]
              },
              {
                value: "navigation",
                label: "开发组",
                children: [
                  {
                    value: "side nav",
                    label: "前端组"
                  },
                  {
                    value: "top nav",
                    label: "后端组"
                  }
                ]
              }
            ]
          }
        ],
        half: true,
        desc: "123"
      },
      {
        type: "cascader",
        label: "祖籍",
        value: "cascader2",
        options: [
          {
            value: "guide",
            label: "中国",
            children: [
              {
                value: "disciplines",
                label: "浙江",
                children: [
                  {
                    value: "consistency",
                    label: "杭州"
                  },
                  {
                    value: "feedback",
                    label: "温州"
                  }
                ]
              },
              {
                value: "navigation",
                label: "安徽",
                children: [
                  {
                    value: "side nav",
                    label: "蚌埠"
                  },
                  {
                    value: "top nav",
                    label: "兖州"
                  }
                ]
              }
            ]
          }
        ],
        half: true
      },
      {
        type: "select",
        label: "性别",
        value: "select2",
        placeholder: "请输入搜索文字",
        options: [
          {
            value: "value1",
            label: "男"
          },
          {
            value: "value2",
            label: "女"
          }
        ],
        half: true
      },
      {
        type: "select",
        label: "爱好",
        value: "select3",
        placeholder: "请输入搜索文字",
        options: [
          {
            value: "value1",
            label: "打游戏"
          },
          {
            value: "value2",
            label: "吃饭"
          }
        ],
        half: true
      },
      {
        type: "switch",
        label: "应聘与否",
        value: "switch",
        cb: () => {
        },
        oneOfFour: true
      },
      {
        type: "switch",
        label: "接受加班",
        value: "switch2",
        cb: () => {
        },
        oneOfFour: true
      },
      {
        type: "input",
        label: "个人介绍",
        value: "input2",
        placeholder: "请输入搜索文字",
        textarea: true,
        half: true
      }
    ]);
    const template2 = ref([
      {
        type: "input",
        label: "姓名",
        value: "input",
        placeholder: "请输入搜索文字",
        limit: 10,
        require: true,
        rules: [{
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur"
        }],
        desc: "123"
      },
      {
        type: "select",
        label: "性别",
        value: "select",
        placeholder: "请输入搜索文字",
        options: [
          {
            value: "value1",
            label: "男"
          },
          {
            value: "value2",
            label: "女"
          }
        ],
        half: true,
        desc: "123"
      },
      {
        type: "datePicker",
        label: "生日",
        value: "datePicker",
        half: true,
        desc: "123"
      },
      {
        type: "cascader",
        label: "祖籍",
        value: "cascader",
        options: [
          {
            value: "guide",
            label: "浙江",
            children: [
              {
                value: "disciplines",
                label: "杭州",
                children: [
                  {
                    value: "consistency",
                    label: "拱墅区"
                  },
                  {
                    value: "feedback",
                    label: "萧山区"
                  }
                ]
              },
              {
                value: "navigation",
                label: "安徽省",
                children: [
                  {
                    value: "side nav",
                    label: "黄山市"
                  },
                  {
                    value: "top nav",
                    label: "严州"
                  }
                ]
              }
            ]
          }
        ],
        half: true,
        desc: "123"
      }
    ]);
    ref({
      input: "字段字段字段字段",
      input2: "字段字段字段字段",
      input3: "字段字段字段字段",
      textarea: "字段字段字段字段字段字段字段字段字段字段字段字段字段字段字段字段",
      textarea2: "xxx1",
      textarea3: "x3432",
      textarea4: "2132adsa",
      textarea5: "gdsah325"
    });
    const modelValue2 = ref({
      input: "",
      select: "",
      datePicker: "",
      cascader: "",
      cascader2: "",
      select2: "",
      select3: "",
      switch: "",
      switch2: "",
      input2: ""
    });
    const modelValue3 = ref({
      input: "",
      select: "",
      datePicker: "",
      cascader: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}><p>配置项较少时</p>`);
      _push(ssrRenderComponent(unref(FYForm), {
        ref: "myForm",
        template: template2.value,
        modelValue: modelValue3.value
      }, null, _parent));
      _push(`<br><p>配置项较多时</p>`);
      _push(ssrRenderComponent(unref(FYForm), {
        ref: "myForm",
        template: template.value,
        modelValue: modelValue2.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/form/basic.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  __name: "config",
  __ssrInlineRender: true,
  setup(__props) {
    const template = ref([
      {
        type: "input",
        label: "姓名",
        value: "input",
        placeholder: "请输入搜索文字",
        limit: 10,
        require: true,
        rules: [{
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur"
        }],
        desc: "请输入您合法身法的完整姓名"
      },
      {
        type: "select",
        label: "性别",
        value: "select",
        placeholder: "请输入搜索文字",
        options: [
          {
            value: "value1",
            label: "男"
          },
          {
            value: "value2",
            label: "女"
          }
        ],
        half: true,
        desc: "暂不支持第三种性别"
      },
      {
        type: "datePicker",
        label: "生日",
        value: "datePicker",
        half: true,
        desc: "请如实填写您的公历生日"
      },
      {
        type: "cascader",
        label: "祖籍",
        value: "cascader",
        options: [
          {
            value: "guide",
            label: "浙江",
            children: [
              {
                value: "disciplines",
                label: "杭州",
                children: [
                  {
                    value: "consistency",
                    label: "拱墅"
                  },
                  {
                    value: "feedback",
                    label: "下沙"
                  }
                ]
              },
              {
                value: "navigation",
                label: "温州",
                children: [
                  {
                    value: "side nav",
                    label: "江南皮革厂"
                  },
                  {
                    value: "top nav",
                    label: "百丈及"
                  }
                ]
              }
            ]
          }
        ],
        half: true,
        desc: "请填写您的出生所在地"
      }
    ]);
    const templateRead = ref([
      {
        label: "姓名",
        value: "input",
        desc: "请输入您合法身法的完整姓名"
      },
      {
        label: "性别",
        value: "input2",
        desc: "暂不支持第三种性别"
      },
      {
        label: "生日",
        value: "input3",
        desc: "请如实填写您的公历生日"
      },
      {
        label: "祖籍",
        value: "textarea",
        desc: "请填写您的出生所在地"
      }
    ]);
    const modelValue = ref({
      input: "李恩伟",
      input2: "男",
      input3: "2000-1-1 18：18：18",
      textarea: "浙江"
    });
    const modelValue2 = ref({
      input: "李恩伟",
      select: "男",
      datePicker: "2000-1-1 18：18：18",
      cascader: "浙江"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}><p>查看</p>`);
      _push(ssrRenderComponent(unref(FYForm), {
        ref: "myForm",
        template: templateRead.value,
        modelValue: modelValue.value,
        labelPosition: "left",
        config: true,
        businessType: "read"
      }, null, _parent));
      _push(`<p>编辑</p>`);
      _push(ssrRenderComponent(unref(FYForm), {
        ref: "myForm",
        template: template.value,
        modelValue: modelValue2.value,
        labelPosition: "top",
        config: true,
        businessType: "write"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/form/config.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    const template = ref([
      {
        label: "姓名",
        value: "input",
        desc: "描述1"
      },
      {
        label: "性别",
        value: "input2",
        desc: "描述2"
      },
      {
        label: "年龄",
        value: "input3",
        desc: "描述3"
      },
      {
        label: "祖籍",
        value: "textarea",
        desc: "描述4"
      }
    ]);
    const templateRead = ref([
      {
        label: "姓名",
        value: "input",
        desc: "描述1"
      },
      {
        label: "性别",
        value: "input2",
        desc: "描述2"
      },
      {
        label: "年龄",
        value: "input3",
        desc: "描述3"
      },
      {
        label: "个人介绍",
        value: "textarea",
        desc: "描述4"
      },
      {
        label: "工作技能",
        value: "textarea2",
        desc: "描述5"
      },
      {
        label: "工作经历",
        value: "textarea3",
        desc: "描述6"
      },
      {
        label: "期望待遇",
        value: "textarea4",
        desc: "描述7"
      },
      {
        label: "工作规划",
        value: "textarea5",
        desc: "描述8"
      }
    ]);
    const modelValue = ref({
      input: "李恩伟",
      input2: "男",
      input3: "18",
      textarea: "李恩伟，日本漫画《咒术回战》及其衍生作品中的主要角色。现代最强的咒术师，东京都立咒术高等专门学校的一年级班主任。特级咒术师，出生于御三家的李家，为李家的实质的代行。",
      textarea2: `李家祖传的特殊性状，几百年一例，是拥有特殊能力的眼睛。
    360度远距离视觉,背后也能看到,隔着很远也能看到。
    直接分辨对方是否为术师。
    看穿对方的术式。
    可以对咒力轨迹进行直接追踪/预测。
    可以让持有者进行精细的咒力操作。（使用无下限术式的前置要求）
    阻挡视线也不会妨碍视觉。`,
      textarea3: "1989年12月7日，天生拥有六眼，不可比拟的力量足以颠覆整个日本咒术界的【最强】李恩伟诞生。他的出生改变了世界平衡，导致现代诅咒随之增强。",
      textarea4: "朝九晚五，离家近，钱多事少",
      textarea5: "打完这仗，回家结婚"
    });
    const modelValue2 = ref({
      input: "李恩伟",
      input2: "男",
      input3: "18",
      textarea: "浙江"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}><p>配置项较多时</p>`);
      _push(ssrRenderComponent(unref(FYForm), {
        ref: "myForm",
        template: templateRead.value,
        modelValue: modelValue.value,
        businessType: "read"
      }, null, _parent));
      _push(`<br><p>配置项较少时</p>`);
      _push(ssrRenderComponent(unref(FYForm), {
        ref: "myForm",
        template: template.value,
        modelValue: modelValue2.value,
        businessType: "read"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/form/detail.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$x
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAD1dJREFUeF7tnc923LYVxsFESjMP4Lq7yusu+giVju00e9s5WbSNtW2XadeS122X7dZq0kVOJO+TWj5SHqGLrq3s+ucB1Fojs+dyhmPODEjeC1wQIPHxnMT2DAgC372/ubggCBYmgeP604/3zHy+Z4piz5Tlj6smlWX978WfOKanQFlemaK4MvQnHfT3ovi+/vfs7PwydqeLWA1YQvGZMeY4Vhtw3cQVWIBzaYriL7FgGQyQCojb2/1lhAAUiftmcs2rYXnvve9mpy9PhmpfcEAqMG5ujkxRPB2qU7jOxBUYMLIEAwRDqIk7aQrdq0HZ3X02++qbRR6jfKgDAjCULYTq+hVYJPsns7PzZ/2FZSVUAbl+/OAISbfMACitqEAAUFQAWeYZF5iOVTQ2qnJXgEDZ3T3QGHZ5A3L9+MG+MebCvTc4EwoEUEApmngBgiFVAMOiSj0FFCBxBuT60f3nmLrVsyVqCqrAsWsCLwZkOUv13BhDQyscUGAcCjjmJSJAkIyPwxfQyhYFHCCRAfL4ASXjiBzwwPEqUJZXsxev7nE7wAbkGnBwNUW51BUoy5PZi1eHnGayAMFsFUdKlBmZAqzEvRcQ3OcYmdnRXJ4Ciyngw75l9J2ALGesXvOuiFJQYGQKMJL2bkCQd4zM4miuWIGepL0VkOsnD5+asqT7HTigwNQVaM1H2gF5/KCcuiroHxSoFOiIIlZAMGsFx8lOgZap3y1AkJhn5xro8DKK2JbIbwOCRYhwmFwVsESRNUBwzyNXz0C/61xk897IOiCIHvAUKHA5Ozs/qGXYjCCYuYKD5K3AxozWChDc98jbL9D7NQUO6iUo7wDB8Ao+AgVqBVbDrHeA4MYg3AMKLBRoDLMqQDC8gmdAgS0FqmHWAhAMr+AfUGBdgeU9kRqQ19j0DR4CBRoKLIdZBZaWwC2gQKsCBwXyD7gHFAAg8AEoIFegKA4LLG2X64YzslHguMAMVjxj7zz5pXnvJz+1NmB++qV5+4+/x2scrkwKAJCYfrD7m9+Z9/c/sjbhzfFvAUhM4yyufUlDLOyWGMkQACSS8PzLXtIQC/dA+IKplgQgqnLqV1aWVxRBsMRdX1pWjQCEJVPUQgAkovwAJKL4zEsDEKZQIYoBkBCq6tYJQHT1FNUGQERyRSkMQKLIvrgoAIkoPvPSAIQpVIhiACSEqrp1Th6Q4s5db8WKH/7Iq462NtBNwtY76V9/Ycr//It13RT6SA2VtoNuhqZ+JA8Iif6DP/81dR3RPqECBP//fv0L4VnDFwcgw2uOK9Jj3wBExw8QQXR0TK0WAKJkEQCiJGRi1QAQJYMAECUhE6sGgCgZBIAoCZlYNQBEySAAREnIBKv575OHCbZqvUmYxUreRNNtIABRsC0iiIKIiVYBQBQMA0AUREy0CgCiYBgAoiBiolUAEAXDABAFEROtAoAoGAaAKIiYaBUARMEwAERBxESrACBKhvnw9KVSTagmJQUAiJI1AIiSkIlVA0CUDAJAlIRMrBoAomSQMQDCffpPIkn5739KiveWDdXGnU9+Zb02Xe/24tvWdtH+w6kfyS81IQHb9q+lZ7rbjq6n1UI4SuqGDtk+euLT9rgtbb49hsdqu7QZBSBtHWiLLGNZKRrSaYesuw2QKdgBgAzpSRO9FgBJ1LCIIGkYBoCkYYetVgCQNAwDQNKwAwBJ1A4AJFHDIIKkYRgAkoYdEEEStQMASdQwiCBpGAaApGGH5CII3Rxr7ttLd75zvAkJQABIpQABQXf13z/4eetGzQQI3UGu/8sBmA+O/2DdhBs3CiOD07VGS3MhHL3PvAuKNhnqtUi3l3+bdGQBIJFBkC41ofIagFDEoPVeba8o4MpSg5La4ry+1xVwox8A4XrCwOVCRhCCggyveYRYvNf1Eh6ftkuGRwDER+mA54YChPKMrpXCPl0ix3tz9LnakAuA+Fij/9xJLlb0GWKFhKM2h+TXuc+EAKRPIb/vAUhDvxDDqjbzUOJ+86ff+1mv50WgPpVLIMYQy0fpgOdqD7HaDB2qCwQIgeJzIIL4qNd/LiLIUqNQjtZlAsmvdFs9odotaRsiSD9oUUpoRpBYz737DrUASFjXQwQxxtCNwLaNB8LK7/8yS617GT79RATxUS/guVoRpG0tUcCmr1WtkYsM1VbbdQBITPU7rq0ByBDTun3yhbiB2HdNze+7Jjc0VjRotlVaV/ZDrJjDq9pYkoRYauAhygOQIVR2uIZGBAmV5Eq7Q/tHUSQZ4wFAErWaBiCx849a2jHnIQBkwoDEmt7dlHT+9RfGZbVvvRSf6uub0ZKYUTLsAyASZQcsqxFBNAHZXB7e3Fu3+Z3t8/pBK6l8oYaIAGRhieyTdA1AYuYPAET6kyIrnzUgWm+vAiD2R27JFTHNKwNStXRXgs01jEaSHjPBRgRRdamtykYdQTQA0VjBC0AQQcJi6li7BiAav8C2Gah6Rqm5LdDqszt3Vz2uv2/OQNWfUTLf934Njfbb5EeSPoEkXQMQjYekbIBoOC5npa/G1C53c4a23zFM8zr+woc+TQMQjUTdBojGEhYOIKE15tQPQDgqRSijAQg12zcPsTkyAFk4BHeyJIL7sC6ZfZJOKvkOs0IBEjP5Z3nPshAiiEStActqRRDfKGJbrq6xjJ5eROqbHwxhDgAyhMoO19AExCcXCQXIWIYnAMTBeYc4pQsQl19f17zBBkiIYZtN02oz7f2PnORuTkHbKuh6lXazfNeM3VggbxNwsjmICyAkkgskIQDhLl9xaS+XJq5zAxCuogOX044g1HyXDattN9V8IohkeheAhHU6RBCLvvV7QLg7ndgA8clpuNHDNeJxXUojgrhGcm4bQ5cDIB0Kc3+dNQGRRA8AEhqPkT8PEmKItSk5RQKKJH2J8OavrUsEkax/qtvJhdjFlRBBAAjbb/pA0QBEMrQCIGzTeRXEEMtBPoKFkvDmSzxpPdbmTT3u04p0Ht01d9nVpG5HWzd8bjRy29M1i4UcxMHBtE4ZYojl01YOID5w+LRN81wAoqmmYl2pA9L3tKI0IVeUTrUqAKIqp15lYwVkClGjaUUAoufTqjWlDkhzjdKUXwkNQFTdWq+y1AGhqWHX/a70VApfEwAJr7HTFVIHxKlTIzwJgCRqNACShmEASBp22GoFAEnDMAAkDTsAkETtAEASNQwiSBqGASBp2AERJFE7AJBEDYMIkoZhAEgadkAESdQOACRRwyCCpGEYAJKGHbZa0bXdzNiXWScq+apZzT2Bux4oG7sdRv08SBcgtFK2+aqz2rJ9W91IHVNj8+jNa46hjVydAAhXqQDlfPfUDdAkVLmhgMtTkimJONkIkpLIObcFgES0PiJIRPGZlwYgTKFCFAMgIVTVrROA6Oopqg2AiOSKUhiARJF9cVEAElF85qUBCFOoEMXoBhVte0OHbUrX9Zo+W+U0r0ltoinbvk3n6nPqqWnulqe0VZC0rVo6Sa/raovY5416Fiu2eH3Xl2xgXb/nULIv8NQ2f+jTM8b3ACSQ6hI4bMMQ7pai9WYQ89MvA/Uk72oBSAD7S5y7a0dFCWS2N+0G6Fp2VQIQZZNz34/OHR7RkOuDZ3+stjntOwBJn0Ly7wGIXLPWM7izarY3UnU1QwIJgffm6HNx8q4ow6SqAiAK5pS8lUoKR908afIOSBQMS28cu378oNSpKs9aJL/uGnvxSvIbGnLRNXG4KwBA3LWr7sHQsIpzaOYHEkhuL741mOHiWMheBoA4aieBI8TdZEnk0oTTUa7RngZAHExHd8Zptqrv4M5U9dXT9r0EEtfcx7VtUzkPgAgtqT2NK7z8VnHJBAFmuORqAxCBZqGmcQVNsBbFDJevgu3nAxCGtpJf6ZhDGSTvDGMKiwCQHsEkcGhM4wrtt1Wcmx/RiUje+9UGIB0aSWaqaE1VKvccJMk7IOmGBIC06COBI8Q0bv9vW49hBWu4kLwjBxH5G3eYEnoaV9RoS2GKJF2bujVPASR2tRFBNnSRJLpjWO8kneHC8pR1hwAgDT1Sncb1jSR0vgR8LE95pzgAoRWbd+5Wd8br59u7HDLmNK4vKNyhI2a4AMhKAQkcKUzj+kIimeGaQn+99cp9ufuHpy9ZGqY0jctqcEchLiRjjpa+GtXnZz/E4gw7UpzG9XUATvI+9p3ZfTWi84vrR/dfm6LY06hsrHW0JbCpT+P66t0FyRR/FMR6leUVRZALY8y++OQJnWDLQ3K6L7D5A4G76yvnvgQgSy2a4/Icx971yoEc+976W1+WJwTIkTHmeEIBwbkrdSSh4UWOB/U/ly1FWfYFICyZUChfBY6L6ycPn5qyfJ6vBug5FGhRoCgOaYhFCTol6jigABRYV+CguP704z0zn7+GMlAACmwosLNzr6CPMNUL14AC2wrMzs6LGhDMZMFDoEBTgbI8mb14dVgDgjwE7gEFNvKP2dn55QIQ5CFwDiiwpgANr+iD6n/IQ+AdUKChwHJ4tQkIhlnwEihQUVEczk5fnqwDgmEWnAMKVArUw6s1QDDMgndAAXqf+GL2qtZilYMgWYd7QIFKgQOavbICUkHy6P5zUxRPIRYUyE6BjeixNcRCFMnOJdDhpgI7O/dmX31z1fxobYhVf4FnROA3GSpwPDs7f7bZbzsgmNHK0D/y7nJz5qo3glRDLTwnkrfH5NT7xn0PVgRZ5SI3Nxe573iSk59k2deyvJq9eHWvre/WIdYqF8FQK0ufyazTa9O67AjSSNixBCUzj8mou51wWKd5beJgVisjl8mnq9ZZK3EEwdRvPh6TUU8vZ2fnB5z+duYgzQqWz4zQ7idZ78LIERVlklaADQd7iLWWtGNmK2nro3EdCvTMWNnOZEcQQALXG7kCoshR91UMCJ24HG59hi1LR+4yuTTfsgiR23UnQJC4c+VFuQQUYM1WtbXTC5AqmmBnxgR8AE1oUaD3Pkefct6ArIZcSN77tMb3QylQllfVc+WNB59cL60CCPISV/lxnqoCCzBObMvWXa+jBsjaLNd8jgTe1SI4z1UBr1wjWA7SVjFmulztjPOECgQBo26DegTZ7FwFys3NEZ5zF5odxbsVKMsTs7v7bPMRWW3ZggOyNvS6vd03b9/+DLBomzGD+pb5BfVUM8foU24wQJoNWQ6/9kxZUq6yj4ey+syU6ffvoPhOY0bKRcUogFiHYfP53goUijJ00Pvby/Ld5y49xDnpKrAA4MrUfy5s/n3170WkWO1PFasT/wfzyUIdg89DFwAAAABJRU5ErkJggg==";
const basic_vue_vue_type_style_index_0_lang$6 = "";
const _sfc_main$w = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    const value4 = ref("");
    const value5 = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYInput = resolveComponent("FYInput");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4"><p>圆角</p>`);
      _push(ssrRenderComponent(_component_FYInput, {
        modelValue: value1.value,
        "onUpdate:modelValue": ($event) => value1.value = $event,
        round: ""
      }, null, _parent));
      _push(`<p>前后图标</p>`);
      _push(ssrRenderComponent(_component_FYInput, {
        modelValue: value2.value,
        "onUpdate:modelValue": ($event) => value2.value = $event
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="prefix-img"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                class: "prefix-img"
              })
            ];
          }
        }),
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" class="prefix-img"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "",
                class: "prefix-img"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p>支持字数限制</p>`);
      _push(ssrRenderComponent(_component_FYInput, {
        modelValue: value3.value,
        "onUpdate:modelValue": ($event) => value3.value = $event,
        limit: "10"
      }, null, _parent));
      _push(`<p>支持长文本</p>`);
      _push(ssrRenderComponent(_component_FYInput, {
        modelValue: value4.value,
        "onUpdate:modelValue": ($event) => value4.value = $event,
        textarea: [3, 6]
      }, null, _parent));
      _push(`<p>支持伸缩</p>`);
      _push(ssrRenderComponent(_component_FYInput, {
        modelValue: value5.value,
        "onUpdate:modelValue": ($event) => value5.value = $event,
        flex: ""
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/input/basic.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$w
}, Symbol.toStringTag, { value: "Module" }));
const filterList_vue_vue_type_style_index_0_lang = "";
const _sfc_main$v = {
  __name: "filter-list",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref("");
    const filterList = ref([
      {
        name: "编号",
        id: "no",
        value: true
      },
      {
        name: "标题",
        id: "title",
        value: true
      },
      {
        name: "标题2",
        id: "title2",
        value: true
      }
    ]);
    const switchChange = () => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYInput = resolveComponent("FYInput");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4">`);
      _push(ssrRenderComponent(_component_FYInput, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        "filter-list": filterList.value,
        onSwitchChange: switchChange
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/input/filter-list.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$v
}, Symbol.toStringTag, { value: "Module" }));
const basic_vue_vue_type_style_index_0_lang$5 = "";
const _sfc_main$u = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const isShow1 = ref(false);
    const isShow2 = ref(false);
    const isShow3 = ref(false);
    const handleClick = () => {
      isShow1.value = true;
      setTimeout(() => {
        isShow1.value = false;
      }, 5e3);
    };
    const handleClick2 = () => {
      isShow2.value = true;
      setTimeout(() => {
        isShow2.value = false;
      }, 5e3);
    };
    const handleClick3 = () => {
      isShow3.value = true;
      setTimeout(() => {
        isShow3.value = false;
      }, 5e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYLoading = resolveComponent("FYLoading");
      const _component_el_button = resolveComponent("el-button");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4"><p>整个页面loading</p>`);
      _push(ssrRenderComponent(_component_FYLoading, {
        modelValue: isShow1.value,
        "onUpdate:modelValue": ($event) => isShow1.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_button, { onClick: handleClick }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 打开loading效果，5000ms后关闭 `);
          } else {
            return [
              createTextVNode(" 打开loading效果，5000ms后关闭 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p>切换颜色</p>`);
      _push(ssrRenderComponent(_component_FYLoading, {
        modelValue: _ctx.isShow4,
        "onUpdate:modelValue": ($event) => _ctx.isShow4 = $event,
        background: {
          light: "red",
          dark: "green"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_button, { onClick: handleClick }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 打开loading效果，5000ms后关闭 `);
          } else {
            return [
              createTextVNode(" 打开loading效果，5000ms后关闭 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p>小模块loading</p>`);
      _push(ssrRenderComponent(_component_FYLoading, {
        modelValue: isShow2.value,
        "onUpdate:modelValue": ($event) => isShow2.value = $event,
        type: "module"
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_button, { onClick: handleClick2 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 打开loading效果，5000ms后关闭 `);
          } else {
            return [
              createTextVNode(" 打开loading效果，5000ms后关闭 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p>切换背景色</p>`);
      _push(ssrRenderComponent(_component_FYLoading, {
        modelValue: isShow3.value,
        "onUpdate:modelValue": ($event) => isShow3.value = $event,
        type: "module"
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_button, { onClick: handleClick3 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 打开loading效果，5000ms后关闭 `);
          } else {
            return [
              createTextVNode(" 打开loading效果，5000ms后关闭 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/loading/basic.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$u
}, Symbol.toStringTag, { value: "Module" }));
function insertScript$1() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = false;
    script.src = "http://www.bigemap.com:9000/bigemap.js/v2.1.0/bigemap.js";
    document.head.appendChild(script);
    const link2 = document.createElement("link");
    link2.href = "http://www.bigemap.com:9000/bigemap.js/v2.1.0/bigemap.css";
    link2.rel = "stylesheet";
    document.head.appendChild(link2);
    script.onload = () => {
      resolve();
    };
  });
}
async function BigMapRenderer(domId, defaultLatlng, updateLatlngCall) {
  await insertScript$1();
  const { BM } = window;
  BM.Config.HTTP_URL = "http://www.bigemap.com:9000";
  const map = BM.map(domId, "bigemap.zhongkexingtu", {
    center: [0, 0],
    zoom: 10,
    zoomControl: false
  });
  let marker = null;
  if (defaultLatlng) {
    marker = BM.marker(defaultLatlng).addTo(map);
  }
  map.on("click", (e) => {
    if (marker) {
      marker.remove();
    }
    marker = BM.marker(e.latlng).addTo(map);
    updateLatlngCall(e.latlng);
  });
}
const _sfc_main$t = {
  __name: "BigMap",
  __ssrInlineRender: true,
  setup(__props) {
    const coord = ref({ lat: 39.99668, lng: 116.49662 });
    const visible = ref(false);
    const value = computed(() => `${coord.value.lat},${coord.value.lng}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYMapCoordselection), {
        modelValue: coord.value,
        "onUpdate:modelValue": ($event) => coord.value = $event,
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        renderer: unref(BigMapRenderer)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FYInput), {
              modelValue: value.value,
              "onUpdate:modelValue": ($event) => value.value = $event,
              disabled: "",
              style: { "width": "70%" }
            }, {
              suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_icon, {
                    size: "20",
                    style: { "cursor": "pointer" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Position), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Position))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_icon, {
                      size: "20",
                      style: { "cursor": "pointer" }
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Position))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FYInput), {
                modelValue: value.value,
                "onUpdate:modelValue": ($event) => value.value = $event,
                disabled: "",
                style: { "width": "70%" }
              }, {
                suffix: withCtx(() => [
                  createVNode(_component_el_icon, {
                    size: "20",
                    style: { "cursor": "pointer" }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Position))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/map-coordselection/BigMap.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$t
}, Symbol.toStringTag, { value: "Module" }));
function insertScript() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = false;
    script.src = "http://api.tianditu.gov.cn/api?v=4.0&tk=137143013bf23432a01c74db2c7741c1";
    document.head.appendChild(script);
    script.onload = () => {
      resolve();
    };
  });
}
async function TMapRenderer(domId, defaultLatlng, updateLatlngCall) {
  await insertScript();
  const { T } = window;
  let marker;
  const map = new T.Map(domId, {
    projection: "EPSG:4326"
  });
  map.centerAndZoom(new T.LngLat(116.40769, 39.89945), 10);
  if (defaultLatlng) {
    marker = new T.Marker(new T.LngLat(defaultLatlng.lng, defaultLatlng.lat));
    map.addOverLay(marker);
  }
  map.addEventListener("click", (e) => {
    if (marker) {
      map.removeOverLay(marker);
    }
    setTimeout(() => {
      marker = new T.Marker(new T.LngLat(e.lnglat.getLng(), e.lnglat.getLat()));
      map.addOverLay(marker);
      updateLatlngCall({ lat: e.lnglat.getLat(), lng: e.lnglat.getLng() });
    });
  });
}
const _sfc_main$s = {
  __name: "TMap",
  __ssrInlineRender: true,
  setup(__props) {
    const coord = ref({ lat: 39.99668, lng: 116.49662 });
    const visible = ref(false);
    const value = computed(() => `${coord.value.lat},${coord.value.lng}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYMapCoordselection), {
        modelValue: coord.value,
        "onUpdate:modelValue": ($event) => coord.value = $event,
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        renderer: unref(TMapRenderer)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FYInput), {
              modelValue: value.value,
              "onUpdate:modelValue": ($event) => value.value = $event,
              disabled: "",
              style: { "width": "70%" }
            }, {
              suffix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_icon, {
                    size: "20",
                    style: { "cursor": "pointer" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Position), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Position))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_icon, {
                      size: "20",
                      style: { "cursor": "pointer" }
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Position))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FYInput), {
                modelValue: value.value,
                "onUpdate:modelValue": ($event) => value.value = $event,
                disabled: "",
                style: { "width": "70%" }
              }, {
                suffix: withCtx(() => [
                  createVNode(_component_el_icon, {
                    size: "20",
                    style: { "cursor": "pointer" }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Position))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/map-coordselection/TMap.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    const tmpl = [
      {
        label: "成员",
        value: "member",
        type: "select",
        defaultValue: ["lew"],
        options: [
          { label: "李恩伟", value: "lew" },
          { label: "王大美", value: "wdm1" },
          { label: "王大美", value: "wdm2" },
          { label: "王大美", value: "wdm3" },
          { label: "王大美", value: "wdm4" },
          { label: "王大美", value: "wdm5" },
          { label: "王大美", value: "wdm6" },
          { label: "王大美", value: "wdm7" }
        ]
      },
      {
        label: "部门",
        value: "member1",
        type: "tree",
        defaultValue: ["lew", "xxb"],
        options: [
          {
            label: "前端",
            value: "qd",
            id: "qd",
            children: [{ label: "李恩伟", value: "lew", member: true }]
          },
          {
            label: "后端",
            value: "hd",
            id: "hd",
            children: [{ label: "徐小包", value: "xxb", member: true }]
          }
        ]
      }
    ];
    function onChecked(values) {
      console.log("🚀 ~ file: basic.vue:47 ~ onChecked ~ values:", values);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYMemberSelect), {
        ref: "memberEle",
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        template: tmpl,
        onChecked
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FYButton), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` open me `);
                } else {
                  return [
                    createTextVNode(" open me ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FYButton), null, {
                default: withCtx(() => [
                  createTextVNode(" open me ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/member-select/basic.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const tmpl = [{
      label: "页面一",
      value: "/page1",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(Monitor, null, null)]
      })
    }, {
      label: "页面二",
      value: "/page2",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(Camera, null, null)]
      }),
      children: [{
        label: "Page2-1",
        value: "/page2/1"
      }, {
        label: "Page2-2",
        value: "/page2/2"
      }, {
        label: "Page2-2-3-3-3",
        value: "/page2/2-3-3"
      }]
    }, {
      label: "页面三",
      value: "/page3",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(PictureRounded, null, null)]
      })
    }, {
      label: "也可以是一个Tab",
      value: "d",
      render({
        tmplItem
      }) {
        console.log("🚀 ~ file: basic.vue:35 ~ render ~ tmplItem:", tmplItem);
        return createVNode("div", null, [tmplItem.label]);
      }
    }];
    function onSelect({
      key,
      keyPath,
      item
    }) {
      console.log(key, keyPath, item);
    }
    function onTmplItemClick(item) {
      console.log("🚀 ~ file: basic.vue:48 ~ onTmplItemSelect ~ item:", item);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem"
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYMenu), {
        template: tmpl,
        router: "",
        onSelect,
        onItemClick: onTmplItemClick
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/menu/basic.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const tmpl = [{
      label: "页面一",
      value: "/page1",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(Monitor, null, null)]
      })
    }, {
      label: "页面二",
      value: "/page2",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(Camera, null, null)]
      }),
      children: [{
        label: "Page2-1",
        value: "/page2/1"
      }, {
        label: "Page2-2",
        value: "/page2/2"
      }, {
        label: "Page2-2-3-3-3",
        value: "/page2/2-3-3"
      }]
    }, {
      label: "页面三",
      value: "/page3",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(PictureRounded, null, null)]
      })
    }, {
      label: "也可以是一个Tab",
      value: "d",
      render({
        tmplItem
      }) {
        console.log("🚀 ~ file: basic.vue:35 ~ render ~ tmplItem:", tmplItem);
        return createVNode("div", null, [tmplItem.label]);
      }
    }];
    function onSelect({
      key,
      keyPath,
      item
    }) {
      console.log(key, keyPath, item);
    }
    function onTmplItemClick(item) {
      console.log("🚀 ~ file: basic.vue:48 ~ onTmplItemSelect ~ item:", item);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "height": "800px"
        }
      }, _attrs))} data-v-e53f77a7>`);
      _push(ssrRenderComponent(unref(FYNavigation), {
        template: tmpl,
        router: "",
        onSelect,
        onItemClick: onTmplItemClick
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const basic_vue_vue_type_style_index_0_scoped_e53f77a7_lang = "";
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/nav/basic.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const basic$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-e53f77a7"]]);
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: basic$1
}, Symbol.toStringTag, { value: "Module" }));
const basic_vue_vue_type_style_index_0_lang$4 = "";
const _sfc_main$o = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage1 = ref(5);
    const currentPage2 = ref(5);
    const currentPage3 = ref(5);
    const currentPage4 = ref(4);
    const pageSize2 = ref(100);
    const pageSize3 = ref(100);
    const pageSize4 = ref(100);
    const small = ref(false);
    const background = ref(true);
    const disabled2 = ref(false);
    const handleSizeChange = (val) => {
      console.log(`${val} items per page`);
    };
    const handleCurrentChange = (val) => {
      console.log(`current page: ${val}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_radio_button = resolveComponent("el-radio-button");
      const _component_el_switch = resolveComponent("el-switch");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}><div style="${ssrRenderStyle({ "margin-bottom": "20px" })}">`);
      _push(ssrRenderComponent(_component_el_radio_group, {
        modelValue: small.value,
        "onUpdate:modelValue": ($event) => small.value = $event,
        class: "mr-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_radio_button, { label: false }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` default `);
                } else {
                  return [
                    createTextVNode(" default ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_radio_button, { label: true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` small `);
                } else {
                  return [
                    createTextVNode(" small ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_radio_button, { label: false }, {
                default: withCtx(() => [
                  createTextVNode(" default ")
                ]),
                _: 1
              }),
              createVNode(_component_el_radio_button, { label: true }, {
                default: withCtx(() => [
                  createTextVNode(" small ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div style="${ssrRenderStyle({ "margin": "20px 0" })}"> background (是否有背景色): `);
      _push(ssrRenderComponent(_component_el_switch, {
        modelValue: background.value,
        "onUpdate:modelValue": ($event) => background.value = $event,
        style: { "margin-right": "20px" }
      }, null, _parent));
      _push(`</div><div class="ml-4"> disabled (禁用): `);
      _push(ssrRenderComponent(_component_el_switch, {
        modelValue: disabled2.value,
        "onUpdate:modelValue": ($event) => disabled2.value = $event,
        class: "ml-2"
      }, null, _parent));
      _push(`</div></div><hr style="${ssrRenderStyle({ "margin": "10px" })}"><div class="demo-pagination-block"><div class="demonstration"> Total item count </div>`);
      _push(ssrRenderComponent(unref(FYPagination), {
        "current-page": currentPage1.value,
        "onUpdate:currentPage": ($event) => currentPage1.value = $event,
        "page-size": 100,
        small: small.value,
        disabled: disabled2.value,
        background: background.value,
        layout: "total, prev, pager, next",
        total: 1e3,
        onSizeChange: handleSizeChange,
        onCurrentChange: handleCurrentChange
      }, null, _parent));
      _push(`</div><div class="demo-pagination-block"><div class="demonstration"> Change page size </div>`);
      _push(ssrRenderComponent(unref(FYPagination), {
        "current-page": currentPage2.value,
        "onUpdate:currentPage": ($event) => currentPage2.value = $event,
        "page-size": pageSize2.value,
        "onUpdate:pageSize": ($event) => pageSize2.value = $event,
        "page-sizes": [100, 200, 300, 400],
        small: small.value,
        disabled: disabled2.value,
        background: background.value,
        layout: "sizes, prev, pager, next",
        total: 1e3,
        onSizeChange: handleSizeChange,
        onCurrentChange: handleCurrentChange
      }, null, _parent));
      _push(`</div><div class="demo-pagination-block"><div class="demonstration"> Jump to </div>`);
      _push(ssrRenderComponent(unref(FYPagination), {
        "current-page": currentPage3.value,
        "onUpdate:currentPage": ($event) => currentPage3.value = $event,
        "page-size": pageSize3.value,
        "onUpdate:pageSize": ($event) => pageSize3.value = $event,
        small: small.value,
        disabled: disabled2.value,
        background: background.value,
        layout: "prev, pager, next, jumper",
        total: 1e3,
        onSizeChange: handleSizeChange,
        onCurrentChange: handleCurrentChange
      }, null, _parent));
      _push(`</div><div class="demo-pagination-block"><div class="demonstration"> All combined </div>`);
      _push(ssrRenderComponent(unref(FYPagination), {
        "current-page": currentPage4.value,
        "onUpdate:currentPage": ($event) => currentPage4.value = $event,
        "page-size": pageSize4.value,
        "onUpdate:pageSize": ($event) => pageSize4.value = $event,
        "page-sizes": [100, 200, 300, 400],
        small: small.value,
        disabled: disabled2.value,
        background: background.value,
        layout: "total, sizes, prev, pager, next, jumper",
        total: 400,
        onSizeChange: handleSizeChange,
        onCurrentChange: handleCurrentChange
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/pagination/basic.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$o
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    function handleClick(progress) {
      alert(`进度值 ->>>> ${progress}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "width": "100%",
          "height": "300px",
          "display": "flex",
          "align-items": "center",
          "justify-content": "space-around"
        }
      }, _attrs))} data-v-2e1dc828>`);
      _push(ssrRenderComponent(unref(FYProgress), {
        value: 70,
        size: "small",
        color: "var(--el-color-warning)",
        onClick: handleClick
      }, {
        "tooltip-right": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tooltip-container" data-v-2e1dc828${_scopeId}><div class="block" data-v-2e1dc828${_scopeId}></div><div class="tooltip-content" data-v-2e1dc828${_scopeId}><div class="row" data-v-2e1dc828${_scopeId}> 50% 未评审 </div><div class="row" data-v-2e1dc828${_scopeId}> 1/2 用例 </div></div></div>`);
          } else {
            return [createVNode("div", {
              class: "tooltip-container"
            }, [createVNode("div", {
              class: "block"
            }), createVNode("div", {
              class: "tooltip-content"
            }, [createVNode("div", {
              class: "row"
            }, " 50% 未评审 "), createVNode("div", {
              class: "row"
            }, " 1/2 用例 ")])])];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(FYProgress), {
        value: 65,
        color: "var(--el-color-primary)",
        size: "default",
        onClick: handleClick
      }, {
        "tooltip-right": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` default size `);
          } else {
            return [createTextVNode(" default size ")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(FYProgress), {
        value: 80,
        color: "var(--el-color-danger)",
        tooltipProps: {
          placement: "bottom"
        },
        size: "large",
        onClick: handleClick
      }, {
        "tooltip-right": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` large size `);
          } else {
            return [createTextVNode(" large size ")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const basic_vue_vue_type_style_index_0_scoped_2e1dc828_lang = "";
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/progress/basic.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const basic = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-2e1dc828"]]);
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: basic
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
  __name: "bothway",
  __ssrInlineRender: true,
  setup(__props) {
    function handleClick(progress) {
      alert(`进度值 ->>>> ${progress}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "width": "100%",
          "height": "300px",
          "display": "flex",
          "align-items": "center",
          "justify-content": "space-around"
        }
      }, _attrs))} data-v-eae2d091>`);
      _push(ssrRenderComponent(unref(FYProgress), {
        value: 70,
        size: "small",
        bothway: "",
        restColor: "red",
        color: "var(--el-color-warning)",
        onClick: handleClick
      }, {
        "tooltip-right": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tooltip-container" data-v-eae2d091${_scopeId}><div class="block" style="${ssrRenderStyle({
              "background-color": "var(--el-color-warning)"
            })}" data-v-eae2d091${_scopeId}></div><div class="tooltip-content" data-v-eae2d091${_scopeId}><div class="row" data-v-eae2d091${_scopeId}> 70% 已评审 </div><div class="row" data-v-eae2d091${_scopeId}> 7/10 用例 </div></div></div>`);
          } else {
            return [createVNode("div", {
              class: "tooltip-container"
            }, [createVNode("div", {
              class: "block",
              style: {
                "background-color": "var(--el-color-warning)"
              }
            }), createVNode("div", {
              class: "tooltip-content"
            }, [createVNode("div", {
              class: "row"
            }, " 70% 已评审 "), createVNode("div", {
              class: "row"
            }, " 7/10 用例 ")])])];
          }
        }),
        "tooltip-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tooltip-container" data-v-eae2d091${_scopeId}><div class="block" style="${ssrRenderStyle({
              "background-color": "red"
            })}" data-v-eae2d091${_scopeId}></div><div class="tooltip-content" data-v-eae2d091${_scopeId}><div class="row" data-v-eae2d091${_scopeId}> 30% 未评审 </div><div class="row" data-v-eae2d091${_scopeId}> 3/10 用例 </div></div></div>`);
          } else {
            return [createVNode("div", {
              class: "tooltip-container"
            }, [createVNode("div", {
              class: "block",
              style: {
                "background-color": "red"
              }
            }), createVNode("div", {
              class: "tooltip-content"
            }, [createVNode("div", {
              class: "row"
            }, " 30% 未评审 "), createVNode("div", {
              class: "row"
            }, " 3/10 用例 ")])])];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(FYProgress), {
        value: 65,
        bothway: "",
        color: "var(--el-color-primary)",
        size: "default",
        restColor: "pink",
        onClick: handleClick
      }, {
        "tooltip-right": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 右边 `);
          } else {
            return [createTextVNode(" 右边 ")];
          }
        }),
        "tooltip-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 左边 `);
          } else {
            return [createTextVNode(" 左边 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(FYProgress), {
        value: 80,
        bothway: "",
        color: "var(--el-color-danger)",
        restColor: "blue",
        tooltipProps: {
          placement: "bottom"
        },
        size: "large",
        onClick: handleClick
      }, {
        "tooltip-right": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 右边 `);
          } else {
            return [createTextVNode(" 右边 ")];
          }
        }),
        "tooltip-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 左边 `);
          } else {
            return [createTextVNode(" 左边 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const bothway_vue_vue_type_style_index_0_scoped_eae2d091_lang = "";
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/progress/bothway.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const bothway = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-eae2d091"]]);
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bothway
}, Symbol.toStringTag, { value: "Module" }));
const basic_vue_vue_type_style_index_0_lang$3 = "";
const _sfc_main$l = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    const value4 = ref("");
    const value5 = ref("");
    const value6 = ref("");
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const options4 = Array.from({ length: 1e4 }).map((_, idx) => ({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`
    }));
    const options1 = [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      }
    ];
    const options3 = [];
    const options6 = [
      {
        label: "公开",
        desc: "组织全部成员可见，仅测试库成员可编辑",
        value: true
      },
      {
        label: "私有",
        desc: "仅测试库成员可见及编辑",
        value: false
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYSelect = resolveComponent("FYSelect");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4"><p>单选</p>`);
      _push(ssrRenderComponent(_component_FYSelect, {
        modelValue: value1.value,
        "onUpdate:modelValue": ($event) => value1.value = $event,
        options: options1
      }, null, _parent));
      _push(`<p>多选（清空）</p>`);
      _push(ssrRenderComponent(_component_FYSelect, {
        modelValue: value2.value,
        "onUpdate:modelValue": ($event) => value2.value = $event,
        options: options1,
        "default-icon": "",
        multiple: "",
        clearable: ""
      }, null, _parent));
      _push(`<p>空数据效果</p>`);
      _push(ssrRenderComponent(_component_FYSelect, {
        modelValue: value3.value,
        "onUpdate:modelValue": ($event) => value3.value = $event,
        options: options3
      }, null, _parent));
      _push(`<p>虚拟化列表</p>`);
      _push(ssrRenderComponent(_component_FYSelect, {
        modelValue: value4.value,
        "onUpdate:modelValue": ($event) => value4.value = $event,
        options: unref(options4),
        virtual: ""
      }, null, _parent));
      _push(`<p>标签化展示</p>`);
      _push(ssrRenderComponent(_component_FYSelect, {
        modelValue: value5.value,
        "onUpdate:modelValue": ($event) => value5.value = $event,
        options: options1,
        tag: "",
        multiple: "",
        "multiple-limit": 1
      }, null, _parent));
      _push(`<p>权限控制快捷样式</p>`);
      _push(ssrRenderComponent(_component_FYSelect, {
        modelValue: value6.value,
        "onUpdate:modelValue": ($event) => value6.value = $event,
        options: options6,
        access: ""
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/select/basic.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  __name: "icon",
  __ssrInlineRender: true,
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    const options2 = [{
      value: "Option1",
      label: "Option1",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(UserFilled, null, null)]
      })
    }, {
      value: "Option2",
      label: "Option2",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(UserFilled, null, null)]
      })
    }, {
      value: "Option3",
      label: "Option3",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(UserFilled, null, null)]
      })
    }, {
      value: "Option4",
      label: "Option4",
      icon: createVNode(resolveComponent("el-icon"), null, {
        default: () => [createVNode(UserFilled, null, null)]
      })
    }];
    const options3 = [{
      value: "Option1",
      label: "Option1"
    }, {
      value: "Option2",
      label: "Option2"
    }, {
      value: "Option3",
      label: "Option3"
    }, {
      value: "Option4",
      label: "Option4"
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYSelect = resolveComponent("FYSelect");
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "20px"
        }
      }, _attrs))}><div class="mb-4"><p>使用默认图标</p>`);
      _push(ssrRenderComponent(_component_FYSelect, {
        modelValue: value1.value,
        "onUpdate:modelValue": ($event) => value1.value = $event,
        options: options3,
        "default-icon": ""
      }, null, _parent));
      _push(`<p>使用jsx, options内带element icon图标</p>`);
      _push(ssrRenderComponent(_component_FYSelect, {
        modelValue: value2.value,
        "onUpdate:modelValue": ($event) => value2.value = $event,
        options: options2
      }, null, _parent));
      _push(`<p>自定义节点内容</p>`);
      _push(ssrRenderComponent(_component_FYSelect, {
        modelValue: value3.value,
        "onUpdate:modelValue": ($event) => value3.value = $event,
        options: options3,
        multiple: ""
      }, {
        default: withCtx(({
          data
        }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({
              "display": "flex",
              "align-items": "center",
              "column-gap": "0.5rem"
            })}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ElIcon), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(UserFilled), null, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(unref(UserFilled))];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(data.label)}</span></div>`);
          } else {
            return [createVNode("div", {
              style: {
                "display": "flex",
                "align-items": "center",
                "column-gap": "0.5rem"
              }
            }, [createVNode(unref(ElIcon), null, {
              default: withCtx(() => [createVNode(unref(UserFilled))]),
              _: 1
            }), createVNode("span", null, toDisplayString(data.label), 1)])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const icon_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/select/icon.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
const basic_vue_vue_type_style_index_0_lang$2 = "";
const _sfc_main$j = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const loading2 = ref(false);
    const changeShow = () => {
      loading.value = !loading.value;
    };
    const changeShow2 = () => {
      loading2.value = !loading2.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYSkeleton = resolveComponent("FYSkeleton");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_skeleton_item = resolveComponent("el-skeleton-item");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4"><p>模板 type === 1 || type === &#39;1&#39;</p>`);
      _push(ssrRenderComponent(_component_FYSkeleton, { type: "1" }, null, _parent));
      _push(`<p>模板 type === 2 || type === &#39;2&#39;</p>`);
      _push(ssrRenderComponent(_component_FYSkeleton, { type: "2" }, null, _parent));
      _push(`<p>模板 type === 3 || type === &#39;3&#39;</p>`);
      _push(ssrRenderComponent(_component_FYSkeleton, { type: "3" }, null, _parent));
      _push(`<p>控制骨架屏显示与否</p>`);
      _push(ssrRenderComponent(_component_FYSkeleton, {
        loading: loading.value,
        type: "1",
        animated: "",
        throttle: 500
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>我是真正的内容</div>`);
          } else {
            return [
              createVNode("div", null, "我是真正的内容")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, { onClick: changeShow }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 切换显示 `);
          } else {
            return [
              createTextVNode(" 切换显示 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p>原生el-skeleton用法</p>`);
      _push(ssrRenderComponent(_component_FYSkeleton, { loading: loading2.value }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>我是真正的内容</div>`);
          } else {
            return [
              createVNode("div", null, "我是真正的内容")
            ];
          }
        }),
        template: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_skeleton_item, {
              variant: "image",
              style: { "width": "240px", "height": "240px" }
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "padding": "14px" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_skeleton_item, {
              variant: "h3",
              style: { "width": "50%" }
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "justify-items": "space-between", "margin-top": "16px", "height": "16px" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_skeleton_item, {
              variant: "text",
              style: { "margin-right": "16px" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_skeleton_item, {
              variant: "text",
              style: { "width": "30%" }
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_el_skeleton_item, {
                variant: "image",
                style: { "width": "240px", "height": "240px" }
              }),
              createVNode("div", { style: { "padding": "14px" } }, [
                createVNode(_component_el_skeleton_item, {
                  variant: "h3",
                  style: { "width": "50%" }
                }),
                createVNode("div", { style: { "display": "flex", "align-items": "center", "justify-items": "space-between", "margin-top": "16px", "height": "16px" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "margin-right": "16px" }
                  }),
                  createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "30%" }
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_button, { onClick: changeShow2 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 切换显示 `);
          } else {
            return [
              createTextVNode(" 切换显示 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/skeleton/basic.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const basic_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$i = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(true);
    const value1 = ref(true);
    const value2 = ref(true);
    const value3 = ref(1);
    const value4 = ref(true);
    const value5 = ref(true);
    const change = (e, h2) => {
    };
    const asyncFn = () => {
    };
    const asyncFn2 = async () => new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("错误"));
      }, 3e3);
    });
    const asyncFn4 = async () => new Promise((resolve) => {
      setTimeout(() => {
        resolve("success");
      }, 3e3);
    });
    const asyncFn3 = () => {
      const a = 1;
      a.b = 22;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYSwitch = resolveComponent("FYSwitch");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "20px" } }, _attrs))}><div class="mb-4"><p>切换状态消息提示</p>`);
      _push(ssrRenderComponent(_component_FYSwitch, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        cb: asyncFn,
        onChange: change
      }, null, _parent));
      _push(`<p>自定义消息提示</p>`);
      _push(ssrRenderComponent(_component_FYSwitch, {
        modelValue: value1.value,
        "onUpdate:modelValue": ($event) => value1.value = $event,
        cb: asyncFn,
        activeMessage: "XXX任务已开启",
        inActiveMessage: "XXX任务已关闭",
        onChange: change
      }, null, _parent));
      _push(`<p>状态改变前插入事件（包裹async 成功事件）</p>`);
      _push(ssrRenderComponent(_component_FYSwitch, {
        modelValue: value2.value,
        "onUpdate:modelValue": ($event) => value2.value = $event,
        cb: asyncFn4,
        onChange: change
      }, null, _parent));
      _push(`<p>状态改变前插入事件 （包裹async 失败事件）</p>`);
      _push(ssrRenderComponent(_component_FYSwitch, {
        modelValue: value5.value,
        "onUpdate:modelValue": ($event) => value5.value = $event,
        cb: asyncFn2,
        onChange: change
      }, null, _parent));
      _push(`<p>自定义状态值</p>`);
      _push(ssrRenderComponent(_component_FYSwitch, {
        modelValue: value3.value,
        "onUpdate:modelValue": ($event) => value3.value = $event,
        activeValue: 1,
        inActiveValue: 2,
        onChange: change
      }, null, _parent));
      _push(`<p>状态改变失败</p>`);
      _push(ssrRenderComponent(_component_FYSwitch, {
        modelValue: value4.value,
        "onUpdate:modelValue": ($event) => value4.value = $event,
        cb: asyncFn3,
        onChange: change
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/switch/basic.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  __name: "FixedSort",
  __ssrInlineRender: true,
  setup(__props) {
    const tmpl = shallowRef([{
      label: "年龄",
      value: "date",
      type: "input",
      fixed: true,
      visible: true,
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "年份",
      value: "date1",
      type: "input",
      visible: true,
      width: 130,
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "日期",
      value: "date2",
      type: "input",
      width: 180,
      visible: true,
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "姓名",
      value: "name",
      width: 130,
      sortable: true,
      visible: true
    }, {
      label: "身高",
      value: "name1",
      width: 130,
      sortable: true,
      visible: true
    }, {
      label: "地址",
      value: "address",
      width: 300,
      "show-overflow-tooltip": true,
      visible: true
    }]);
    const tableData = ref();
    setTimeout(() => {
      tableData.value = Array.from({
        length: 5
      }, (_, idx) => ({
        date: idx,
        date2: "2016/10/5",
        date1: "2016",
        index: idx + 1,
        name: `${idx}Tom`,
        address: "CNo. 189, Grove St, Los Angeles"
      })).reverse();
    }, 1e3);
    const renderer2 = {
      header({
        values
      }) {
        return createVNode("div", {
          "class": "header"
        }, [createTextVNode("已选中 "), createVNode("span", {
          "style": "color: var(--el-color-primary)"
        }, [values.length]), createTextVNode(" 项"), createVNode(ElDivider, {
          "direction": "vertical"
        }, null), createVNode(ElIcon, null, {
          default: () => [createVNode(MoreFilled, null, null)]
        }), createVNode("span", {
          "style": "cursor: pointer"
        }, [createTextVNode("更多")])]);
      }
    };
    const onSelection = (v) => {
      console.log("🚀 ~ file: table.vue:62 ~ onSelection ~ v:", v);
    };
    const Ele = ref();
    const selectSortPropVisible = ref(false);
    const sortTmpl = [{
      label: "date"
    }, {
      label: "name"
    }, {
      label: "address"
    }].map((tm) => ({
      ...tm,
      sideRender: () => createVNode(resolveComponent("el-icon"), {
        "size": "15"
      }, {
        default: () => [createVNode(Sort, null, null)]
      }),
      onClick() {
        Ele.value.sort(tm.label);
        selectSortPropVisible.value = false;
      }
    }));
    const onHeaderSelection = (template) => {
      console.log("🚀 ~ file: table.vue:118 ~ onHeaderSelection ~ template:", template);
      tmpl.value = template;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem"
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYActionPanel), {
        visible: selectSortPropVisible.value,
        "onUpdate:visible": ($event) => selectSortPropVisible.value = $event,
        template: unref(sortTmpl),
        style: {
          "margin": "1rem"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({
              "cursor": "pointer"
            })}" class="trigger-target"${_scopeId}> 按照字段排序吧🤟🏻 </div>`);
          } else {
            return [createVNode("div", {
              style: {
                "cursor": "pointer"
              },
              class: "trigger-target"
            }, " 按照字段排序吧🤟🏻 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(FYTable), {
        ref_key: "Ele",
        ref: Ele,
        template: tmpl.value,
        data: tableData.value,
        renderer: renderer2,
        columnSelection: true,
        onSelection,
        onHeaderSelection
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const FixedSort_vue_vue_type_style_index_0_lang = "";
const FixedSort_vue_vue_type_style_index_1_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/table/FixedSort.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __vite_glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "TableSetting",
  __ssrInlineRender: true,
  setup(__props) {
    const tmpl = shallowRef([{
      label: "年龄",
      value: "date",
      type: "input",
      fixed: true,
      visible: true,
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "年份",
      value: "date1",
      type: "input",
      visible: true,
      width: 130,
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "日期",
      value: "date2",
      type: "input",
      width: 180,
      visible: true,
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "姓名",
      value: "name",
      width: 130,
      sortable: true,
      visible: true
    }, {
      label: "身高",
      value: "name1",
      width: 130,
      sortable: true,
      visible: true
    }, {
      label: "地址",
      value: "address",
      width: 300,
      "show-overflow-tooltip": true,
      visible: true
    }]);
    const tableData = ref();
    setTimeout(() => {
      tableData.value = Array.from({
        length: 5
      }, (_, idx) => ({
        date: idx,
        date2: "2016/10/5",
        date1: "2016",
        index: idx + 1,
        name: `${idx}Tom`,
        address: "CNo. 189, Grove St, Los Angeles"
      })).reverse();
    }, 1e3);
    const renderer2 = {
      header({
        values
      }) {
        return createVNode("div", {
          "class": "header"
        }, [createTextVNode("已选中 "), createVNode("span", {
          "style": "color: var(--el-color-primary)"
        }, [values.length]), createTextVNode(" 项"), createVNode(ElDivider, {
          "direction": "vertical"
        }, null), createVNode(ElIcon, null, {
          default: () => [createVNode(MoreFilled, null, null)]
        }), createVNode("span", {
          "style": "cursor: pointer"
        }, [createTextVNode("更多")])]);
      }
    };
    const onSelection = (v) => {
      console.log("🚀 ~ file: table.vue:62 ~ onSelection ~ v:", v);
    };
    const onHeaderSelection = (template) => {
      console.log("🚀 ~ file: table.vue:118 ~ onHeaderSelection ~ template:", template);
      tmpl.value = template;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem"
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYTable), {
        ref: "Ele",
        template: tmpl.value,
        data: tableData.value,
        renderer: renderer2,
        columnSelection: true,
        onSelection,
        onHeaderSelection
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const TableSetting_vue_vue_type_style_index_0_lang = "";
const TableSetting_vue_vue_type_style_index_1_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/table/TableSetting.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __vite_glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const tmpl = shallowRef([{
      label: "日期",
      value: "date",
      type: "input",
      width: 140,
      visible: true,
      "show-overflow-tooltip": true,
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "姓名",
      value: "name",
      visible: true,
      width: 140,
      render({
        value
      }) {
        return createVNode("div", {
          "class": "custom-render",
          "onClick": () => {
            alert("展开详情！！");
          }
        }, [createVNode("span", null, [value]), createVNode(resolveComponent("el-tooltip"), {
          "effect": "dark",
          "content": "展开",
          "placement": "top"
        }, {
          default: () => [createVNode("div", {
            "class": "extra"
          }, [createVNode(resolveComponent("el-icon"), null, {
            default: () => [createVNode(FullScreen, null, null)]
          })])]
        })]);
      }
    }, {
      label: "保留位",
      type: "limit3",
      value: "date1",
      visible: true,
      width: 80,
      // limit: 3, // 保留 limit 位小数
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "地址",
      value: "address",
      visible: true,
      "show-overflow-tooltip": true
    }]);
    const tableData = ref();
    setTimeout(() => {
      tableData.value = Array.from({
        length: 5
      }, (_, idx) => ({
        date: "2016-05-03",
        index: idx + 1,
        name: `${idx}Tom`,
        date1: 2.23,
        address: "浙江高山CNo. 189, Grove St, Los Angeles"
      }));
    }, 1e3);
    const renderer2 = {
      // values -> selection Values
      header({
        values
      }) {
        return createVNode("div", {
          "class": "header"
        }, [createTextVNode("已选中 "), createVNode("span", {
          "style": "color: var(--el-color-primary)"
        }, [values.length]), createTextVNode(" 项"), createVNode(ElDivider, {
          "direction": "vertical"
        }, null), createVNode(ElIcon, null, {
          default: () => [createVNode(MoreFilled, null, null)]
        }), createVNode("span", {
          "style": "cursor: pointer"
        }, [createTextVNode("更多")])]);
      }
    };
    const onSelection = (v) => {
      console.log("🚀 ~ file: table.vue:62 ~ onSelection ~ v:", v);
    };
    const onHeaderSelection = (template) => {
      console.log("🚀 ~ file: table.vue:118 ~ onHeaderSelection ~ template:", template);
      tmpl.value = template;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem"
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYTable), {
        ref: "Ele",
        template: tmpl.value,
        data: tableData.value,
        renderer: renderer2,
        columnSelection: "",
        columnIndex: "",
        onSelection,
        onHeaderSelection
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const basic_vue_vue_type_style_index_0_lang = "";
const basic_vue_vue_type_style_index_1_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/table/basic.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __vite_glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "update",
  __ssrInlineRender: true,
  setup(__props) {
    const tmpl = shallowRef([{
      label: "现在",
      value: "date",
      type: "timeDisplayMinute",
      visible: true,
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "今年",
      value: "date2",
      type: "timeDisplayDay",
      visible: true,
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "去年",
      value: "date3",
      type: "timeDisplayDay",
      visible: true,
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "图片",
      type: "imagePreview",
      value: "imagePreview",
      visible: true,
      width: 140
    }, {
      label: "保留位",
      type: "limit3",
      value: "date1",
      visible: true,
      width: 80,
      // limit: 3, // 保留 limit 位小数
      onChange({
        value
      }) {
        console.log("🚀 ~ file: table.vue:13 ~ onChange ~ value:", value);
      }
    }, {
      label: "地址",
      value: "address",
      visible: true,
      "show-overflow-tooltip": true
    }]);
    const tableData = ref();
    setTimeout(() => {
      tableData.value = Array.from({
        length: 5
      }, (_, idx) => ({
        date: /* @__PURE__ */ new Date(),
        index: idx + 1,
        date2: /* @__PURE__ */ new Date("2023 10/20"),
        date3: /* @__PURE__ */ new Date("2022 10/20"),
        imagePreview: idx === 0 ? "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" : ["https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg", "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg", "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg", "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg", "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg", "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg", "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"],
        date1: 2.23,
        address: "浙江高山CNo. 189, Grove St, Los Angeles"
      }));
    }, 1e3);
    const renderer2 = {
      // values -> selection Values
      header({
        values
      }) {
        return createVNode("div", {
          "class": "header"
        }, [createTextVNode("已选中 "), createVNode("span", {
          "style": "color: var(--el-color-primary)"
        }, [values.length]), createTextVNode(" 项"), createVNode(ElDivider, {
          "direction": "vertical"
        }, null), createVNode(ElIcon, null, {
          default: () => [createVNode(MoreFilled, null, null)]
        }), createVNode("span", {
          "style": "cursor: pointer"
        }, [createTextVNode("更多")])]);
      }
    };
    const onSelection = (v) => {
      console.log("🚀 ~ file: table.vue:62 ~ onSelection ~ v:", v);
    };
    const onHeaderSelection = (template) => {
      console.log("🚀 ~ file: table.vue:118 ~ onHeaderSelection ~ template:", template);
      tmpl.value = template;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem"
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYTable), {
        ref: "Ele",
        template: tmpl.value,
        data: tableData.value,
        renderer: renderer2,
        columnSelection: "",
        columnIndex: "",
        onSelection,
        onHeaderSelection
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const update_vue_vue_type_style_index_0_lang = "";
const update_vue_vue_type_style_index_1_lang = "";
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/table/update.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const tmpl = [
      {
        label: "页面一",
        value: 0
      },
      {
        label: "页面二",
        value: 1
      },
      {
        label: "页面三",
        value: 2
      }
    ];
    const config = {
      title: "test",
      menu: tmpl
    };
    function onSelect({ key, keyPath, item }) {
      console.log(key, keyPath, item);
    }
    function onTmplItemClick(item) {
      console.log("🚀 ~ file: basic.vue:48 ~ onTmplItemSelect ~ item:", item);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYInput = resolveComponent("FYInput");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYTopNavigation), {
        config,
        onSelect,
        onItemClick: onTmplItemClick
      }, {
        operation: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FYInput, { style: { "width": "200px", "margin-right": "10px" } }, null, _parent2, _scopeId));
            _push2(`<span class="avatar-default"${_scopeId}>李俊</span>`);
          } else {
            return [
              createVNode(_component_FYInput, { style: { "width": "200px", "margin-right": "10px" } }),
              createVNode("span", { class: "avatar-default" }, "李俊")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/top-navigation/basic.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const config = {
      // 点击此项是否展开关闭
      expandOnClickNode: false,
      // 暂时弃用
      tooltipText: "更多",
      // 是否启用可编辑
      editable: false,
      // 是否使用表单进行树的编辑
      ifDialog: false,
      // 是否可拖拽
      draggable: false,
      // 删除描述
      deleteDesc: "模块删除后不可恢复，删除模块会一起删除子模块。",
      // 启用表单编辑时的绑定对象
      dialogTmpl: [{
        type: "input",
        label: "模板名称",
        value: "label",
        limit: 10,
        require: true,
        rules: [{
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur"
        }]
      }, {
        type: "select",
        label: "负责人",
        value: "person",
        options: [{
          value: "value1",
          label: "李恩伟"
        }, {
          value: "value2",
          label: "藏炼鑫"
        }]
      }, {
        type: "cascader",
        label: "组织",
        value: "organization",
        options: [{
          value: "guide",
          label: "研发部",
          children: [{
            value: "disciplines",
            label: "前端",
            children: [{
              value: "consistency",
              label: "架构组"
            }, {
              value: "feedback",
              label: "业务组"
            }]
          }, {
            value: "navigation",
            label: "后端组",
            children: [{
              value: "side nav",
              label: "AI组"
            }, {
              value: "top nav",
              label: "Java组"
            }]
          }]
        }]
      }],
      // 树级对象的列表
      dataSource: [{
        id: 1,
        label: "Level one 1",
        allowDrag: false,
        children: [{
          label: "Level two 1-1",
          id: 2,
          children: [{
            id: 3,
            label: "Level three 1-1-1",
            notLevelOne: true
          }]
        }],
        render: () => createVNode("div", null, [createTextVNode("123")])
      }, {
        label: "Level one 2",
        id: 4,
        levelOne: true,
        children: [{
          id: 5,
          label: "Level two 2-1",
          children: [{
            id: 6,
            label: "Level three 2-1-1",
            children: [{
              id: 14,
              label: "Level three 2-1-1-1"
            }, {
              id: 15,
              label: "Level three 2-1-1-2"
            }]
          }]
        }, {
          id: 7,
          label: "Level two 2-2",
          children: [{
            id: 8,
            label: "Level three 2-2-1"
          }]
        }]
      }, {
        label: "Level one 3",
        id: 9,
        children: [{
          forbid: [1, 4],
          label: "Level two 3-1",
          id: 10,
          children: [{
            id: 11,
            label: "Level three 3-1-1"
          }]
        }, {
          id: 12,
          label: "Level two 3-2",
          children: [{
            id: 13,
            label: "Level three 3-2-1"
          }]
        }]
      }]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_icon = resolveComponent("el-icon");
      const _component_Pear = resolveComponent("Pear");
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: {
          "margin": "1rem"
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYTree), {
        config
      }, {
        "custom-icon": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Pear, null, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_Pear)];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_el_icon, null, {
              default: withCtx(() => [createVNode(_component_Pear)]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/basic.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "drag",
  __ssrInlineRender: true,
  setup(__props) {
    const config = {
      // 开启拖拽
      draggable: true,
      // 树级列表
      dataSource: [
        {
          id: 1,
          label: "Level one 1",
          allowDrag: false,
          children: [
            {
              label: "Level two 1-1",
              id: 2,
              children: [
                {
                  id: 3,
                  label: "Level three 1-1-1",
                  notLevelOne: true
                }
              ]
            }
          ]
        },
        {
          label: "Level one 2",
          id: 4,
          levelOne: true,
          children: [
            {
              id: 5,
              label: "Level two 2-1",
              children: [
                {
                  id: 6,
                  label: "Level three 2-1-1",
                  children: [
                    {
                      id: 14,
                      label: "Level three 2-1-1-1"
                    },
                    {
                      id: 15,
                      label: "Level three 2-1-1-2"
                    }
                  ]
                }
              ]
            },
            {
              id: 7,
              label: "Level two 2-2",
              children: [
                {
                  id: 8,
                  label: "Level three 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "Level one 3",
          id: 9,
          children: [
            {
              forbid: [1, 4],
              label: "Level two 3-1",
              id: 10,
              children: [
                {
                  id: 11,
                  label: "Level three 3-1-1"
                }
              ]
            },
            {
              id: 12,
              label: "Level two 3-2",
              children: [
                {
                  id: 13,
                  label: "Level three 3-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYTree), { config }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/drag.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "form",
  __ssrInlineRender: true,
  setup(__props) {
    const config = ref({
      // 树级列表
      dataSource: [
        {
          id: 1,
          label: "Level one 1",
          allowDrag: false,
          children: [
            {
              label: "Level two 1-1",
              id: 2,
              children: [
                {
                  id: 3,
                  label: "Level three 1-1-1",
                  notLevelOne: true
                }
              ]
            }
          ]
        },
        {
          label: "Level one 2",
          id: 4,
          levelOne: true,
          children: [
            {
              id: 5,
              label: "Level two 2-1",
              children: [
                {
                  id: 6,
                  label: "Level three 2-1-1",
                  children: [
                    {
                      id: 14,
                      label: "Level three 2-1-1-1"
                    },
                    {
                      id: 15,
                      label: "Level three 2-1-1-2"
                    }
                  ]
                }
              ]
            },
            {
              id: 7,
              label: "Level two 2-2",
              children: [
                {
                  id: 8,
                  label: "Level three 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "Level one 3",
          id: 9,
          children: [
            {
              forbid: [1, 4],
              label: "Level two 3-1",
              id: 10,
              children: [
                {
                  id: 11,
                  label: "Level three 3-1-1"
                }
              ]
            },
            {
              id: 12,
              label: "Level two 3-2",
              children: [
                {
                  id: 13,
                  label: "Level three 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      // 是否启用编辑
      editable: true,
      // 是否使用对话框
      ifDialog: true,
      // 启用表单编辑时的绑定对象
      dialogTmpl: [
        {
          type: "input",
          label: "模板名称",
          value: "label",
          limit: 10,
          require: true,
          rules: [{
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur"
          }]
        },
        {
          type: "select",
          label: "负责人",
          value: "person",
          options: [
            {
              value: "value1",
              label: "李恩伟"
            },
            {
              value: "value2",
              label: "藏炼鑫"
            }
          ]
        },
        {
          type: "cascader",
          label: "组织",
          value: "organization",
          options: [
            {
              value: "guide",
              label: "研发部",
              children: [
                {
                  value: "disciplines",
                  label: "前端",
                  children: [
                    {
                      value: "consistency",
                      label: "架构组"
                    },
                    {
                      value: "feedback",
                      label: "业务组"
                    }
                  ]
                },
                {
                  value: "navigation",
                  label: "后端组",
                  children: [
                    {
                      value: "side nav",
                      label: "AI组"
                    },
                    {
                      value: "top nav",
                      label: "Java组"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYTree), { config: config.value }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/form.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "not-form",
  __ssrInlineRender: true,
  setup(__props) {
    const config = {
      // 树级列表
      dataSource: [
        {
          id: 1,
          label: "Level one 1",
          allowDrag: false,
          children: [
            {
              label: "Level two 1-1",
              id: 2,
              children: [
                {
                  id: 3,
                  label: "Level three 1-1-1",
                  notLevelOne: true
                }
              ]
            }
          ]
        },
        {
          label: "Level one 2",
          id: 4,
          levelOne: true,
          children: [
            {
              id: 5,
              label: "Level two 2-1",
              children: [
                {
                  id: 6,
                  label: "Level three 2-1-1",
                  children: [
                    {
                      id: 14,
                      label: "Level three 2-1-1-1"
                    },
                    {
                      id: 15,
                      label: "Level three 2-1-1-2"
                    }
                  ]
                }
              ]
            },
            {
              id: 7,
              label: "Level two 2-2",
              children: [
                {
                  id: 8,
                  label: "Level three 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "Level one 3",
          id: 9,
          children: [
            {
              forbid: [1, 4],
              label: "Level two 3-1",
              id: 10,
              children: [
                {
                  id: 11,
                  label: "Level three 3-1-1"
                }
              ]
            },
            {
              id: 12,
              label: "Level two 3-2",
              children: [
                {
                  id: 13,
                  label: "Level three 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      // 是否可编辑
      editable: true
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYTree), { config }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/not-form.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_51 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const config = ref({
      // formItem, button, plain
      type: "button",
      buttonConfig: {
        // direct dialog
        type: "dialog",
        dialogConfig: {
          title: "导入规则",
          template: [
            {
              type: "input",
              label: "规则名称",
              value: "name",
              placeholder: "输入规则名称",
              limit: 32,
              require: true
            },
            {
              type: "upload",
              label: "文件",
              value: "file"
            }
          ]
        },
        formModel: {
          name: "",
          file: null
        }
      }
    });
    const typeCheck = (e) => {
      console.log(e, "校验结果");
    };
    const fileChange = (file2, files) => {
      console.log(file2, files, "files");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYUpload), {
        config: config.value,
        onTypeCheck: typeCheck,
        onFileChange: fileChange
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/basic.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_52 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "button-direct",
  __ssrInlineRender: true,
  setup(__props) {
    const config = ref({
      // formItem, button, plain
      type: "button",
      buttonConfig: {
        // direct dialog
        type: "direct"
      }
    });
    const typeCheck = (e) => {
      console.log(e, "校验结果");
    };
    const fileChange = (file2, files) => {
      console.log(file2, files, "files");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYUpload), {
        config: config.value,
        onTypeCheck: typeCheck,
        onFileChange: fileChange
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/button-direct.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "export-button",
  __ssrInlineRender: true,
  setup(__props) {
    const config = ref({
      export: true,
      url: "https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-assets/extension/0.3.9/package.crx~tplv-t2oaga2asx-image.image",
      name: "test"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYUpload), { config: config.value }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/export-button.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_54 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "upload-button",
  __ssrInlineRender: true,
  setup(__props) {
    const config = ref({
      // formItem, button, plain
      type: "plain"
    });
    const typeCheck = (e) => {
      console.log(e, "校验结果");
    };
    const fileChange = (file2, files) => {
      console.log(file2, files, "files");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYUpload), {
        config: config.value,
        onTypeCheck: typeCheck,
        onFileChange: fileChange
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/upload-button.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_55 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "upload-item",
  __ssrInlineRender: true,
  setup(__props) {
    const config = ref({
      // formItem, button, plain
      type: "formItem"
    });
    const typeCheck = (e) => {
      console.log(e, "校验结果");
    };
    const fileChange = (file2, files) => {
      console.log(file2, files, "files");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FYUpload), {
        config: config.value,
        onTypeCheck: typeCheck,
        onFileChange: fileChange
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/upload-item.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_56 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const player = ref();
    function play() {
      player.value.player.play();
    }
    function pause() {
      player.value.player.pause();
    }
    const idx = ref(0);
    function next() {
      idx.value = idx.value === 0 ? 1 : 0;
    }
    const videoList = [
      // 'http://localhost:5178/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
      // 'http://localhost:5178/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
      "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
      "https://www.w3school.com.cn/example/html5/mov_bbb.mp4"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FYButton = resolveComponent("FYButton");
      const _component_FYVideoPlayer = resolveComponent("FYVideoPlayer");
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "margin": "1rem" } }, _attrs))}>`);
      _push(ssrRenderComponent(_component_FYButton, { onClick: play }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` start `);
          } else {
            return [
              createTextVNode(" start ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, { onClick: pause }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` pause `);
          } else {
            return [
              createTextVNode(" pause ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYButton, { onClick: next }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` next video `);
          } else {
            return [
              createTextVNode(" next video ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FYVideoPlayer, {
        id: idx.value,
        ref_key: "player",
        ref: player,
        autoplay: "",
        style: { "width": "400px", "height": "235px", "margin-top": "10px" },
        streamType: "h5",
        config: {},
        url: videoList[idx.value]
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/video-player/basic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_57 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const vpExample_vue_vue_type_style_index_0_scoped_7a215772_lang = "";
const _sfc_main$2 = {
  __name: "vp-example",
  __ssrInlineRender: true,
  props: {
    path: String
  },
  setup(__props) {
    const props = __props;
    let dynamicComponent = shallowRef(null);
    onBeforeMount(() => {
      const modules = /* @__PURE__ */ Object.assign({
        "../../../../examples/action-panel/basic.vue": __vite_glob_0_0,
        "../../../../examples/action-panel/overlay.vue": __vite_glob_0_1,
        "../../../../examples/avatar/basic.vue": __vite_glob_0_2,
        "../../../../examples/button/basic.vue": __vite_glob_0_3,
        "../../../../examples/cascader/basic.vue": __vite_glob_0_4,
        "../../../../examples/cascader/clearable.vue": __vite_glob_0_5,
        "../../../../examples/cascader/icon.vue": __vite_glob_0_6,
        "../../../../examples/cascader/multiple.vue": __vite_glob_0_7,
        "../../../../examples/cascader/slot.vue": __vite_glob_0_8,
        "../../../../examples/date-picker/basic.vue": __vite_glob_0_9,
        "../../../../examples/date-picker/disabled.vue": __vite_glob_0_10,
        "../../../../examples/dialog/default.vue": __vite_glob_0_11,
        "../../../../examples/dialog/delete.vue": __vite_glob_0_12,
        "../../../../examples/dialog/edit.vue": __vite_glob_0_13,
        "../../../../examples/dialog/longList.vue": __vite_glob_0_14,
        "../../../../examples/dialog/mini.vue": __vite_glob_0_15,
        "../../../../examples/empty/basic.vue": __vite_glob_0_16,
        "../../../../examples/empty/size.vue": __vite_glob_0_17,
        "../../../../examples/file-preview/basic.vue": __vite_glob_0_18,
        "../../../../examples/filter-display/basic.vue": __vite_glob_0_19,
        "../../../../examples/filter-display/renderer.vue": __vite_glob_0_20,
        "../../../../examples/filter-inline/basic.vue": __vite_glob_0_21,
        "../../../../examples/filter-inline/renderer.vue": __vite_glob_0_22,
        "../../../../examples/filter-panel/basic.vue": __vite_glob_0_23,
        "../../../../examples/filter-panel/renderer.vue": __vite_glob_0_24,
        "../../../../examples/form/basic.vue": __vite_glob_0_25,
        "../../../../examples/form/config.vue": __vite_glob_0_26,
        "../../../../examples/form/detail.vue": __vite_glob_0_27,
        "../../../../examples/input/basic.vue": __vite_glob_0_28,
        "../../../../examples/input/filter-list.vue": __vite_glob_0_29,
        "../../../../examples/loading/basic.vue": __vite_glob_0_30,
        "../../../../examples/map-coordselection/BigMap.vue": __vite_glob_0_31,
        "../../../../examples/map-coordselection/TMap.vue": __vite_glob_0_32,
        "../../../../examples/member-select/basic.vue": __vite_glob_0_33,
        "../../../../examples/menu/basic.vue": __vite_glob_0_34,
        "../../../../examples/nav/basic.vue": __vite_glob_0_35,
        "../../../../examples/pagination/basic.vue": __vite_glob_0_36,
        "../../../../examples/progress/basic.vue": __vite_glob_0_37,
        "../../../../examples/progress/bothway.vue": __vite_glob_0_38,
        "../../../../examples/select/basic.vue": __vite_glob_0_39,
        "../../../../examples/select/icon.vue": __vite_glob_0_40,
        "../../../../examples/skeleton/basic.vue": __vite_glob_0_41,
        "../../../../examples/switch/basic.vue": __vite_glob_0_42,
        "../../../../examples/table/FixedSort.vue": __vite_glob_0_43,
        "../../../../examples/table/TableSetting.vue": __vite_glob_0_44,
        "../../../../examples/table/basic.vue": __vite_glob_0_45,
        "../../../../examples/table/update.vue": __vite_glob_0_46,
        "../../../../examples/top-navigation/basic.vue": __vite_glob_0_47,
        "../../../../examples/tree/basic.vue": __vite_glob_0_48,
        "../../../../examples/tree/drag.vue": __vite_glob_0_49,
        "../../../../examples/tree/form.vue": __vite_glob_0_50,
        "../../../../examples/tree/not-form.vue": __vite_glob_0_51,
        "../../../../examples/upload/basic.vue": __vite_glob_0_52,
        "../../../../examples/upload/button-direct.vue": __vite_glob_0_53,
        "../../../../examples/upload/export-button.vue": __vite_glob_0_54,
        "../../../../examples/upload/upload-button.vue": __vite_glob_0_55,
        "../../../../examples/upload/upload-item.vue": __vite_glob_0_56,
        "../../../../examples/video-player/basic.vue": __vite_glob_0_57
      });
      for (const modulesKey in modules) {
        const module = modules[modulesKey];
        if (modulesKey.split(".vue")[0].endsWith(props.path)) {
          dynamicComponent.value = module.default;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="example-component" data-v-7a215772${_scopeId}>`);
            if (unref(dynamicComponent)) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(dynamicComponent)), _ctx.$attrs, null), _parent2, _scopeId);
            } else {
              _push2(`<div class="example-component--spin" data-v-7a215772${_scopeId}><div data-v-7a215772${_scopeId}></div><div data-v-7a215772${_scopeId}></div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "example-component" }, [
                unref(dynamicComponent) ? (openBlock(), createBlock(resolveDynamicComponent(unref(dynamicComponent)), mergeProps({ key: 0 }, _ctx.$attrs), null, 16)) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "example-component--spin"
                }, [
                  createVNode("div"),
                  createVNode("div")
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/vitepress/components/vp-demo/vp-example.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Example = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7a215772"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "vp-source-code",
  __ssrInlineRender: true,
  props: {
    source: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const decoded = computed(() => {
      return decodeURIComponent(props.source);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "example-source-wrapper" }, _attrs))} data-v-198e5765><div class="example-source language-vue" data-v-198e5765>${decoded.value}</div></div>`);
    };
  }
});
const vpSourceCode_vue_vue_type_style_index_0_scoped_198e5765_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/vitepress/components/vp-demo/vp-source-code.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SourceCode = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-198e5765"]]);
const index_vue_vue_type_style_index_0_scoped_172a30e1_lang = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    rawSource: String,
    // 源码
    source: String,
    path: String,
    description: String
  },
  setup(__props) {
    const props = __props;
    const { copy, isSupported } = useClipboard({
      source: decodeURIComponent(props.rawSource),
      read: false
    });
    const [sourceVisible, toggleSourceVisible] = useToggle(false);
    const decodedDescription = computed(
      () => decodeURIComponent(props.description)
    );
    const copyCode = async () => {
      if (!isSupported) {
        ElMessage.error("复制失败");
      }
      try {
        await copy();
        ElMessage.success("已复制");
      } catch (e) {
        ElMessage.error(e.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_ElDivider = resolveComponent("ElDivider");
      const _component_ElTooltip = resolveComponent("ElTooltip");
      const _component_ElIcon = resolveComponent("ElIcon");
      const _component_CopyDocument = resolveComponent("CopyDocument");
      const _component_View = resolveComponent("View");
      const _component_ElCollapseTransition = resolveComponent("ElCollapseTransition");
      const _component_CaretTop = resolveComponent("CaretTop");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p text="sm" data-v-172a30e1${_scopeId}>${decodedDescription.value}</p><div class="example" data-v-172a30e1${_scopeId}>`);
            _push2(ssrRenderComponent(Example, { path: __props.path }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElDivider, { class: "m-0" }, null, _parent2, _scopeId));
            _push2(`<div class="op-btns" data-v-172a30e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElTooltip, {
              content: "复制代码",
              "show-arrow": false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElIcon, {
                    size: 16,
                    class: "op-btn",
                    onClick: copyCode
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CopyDocument, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CopyDocument)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElIcon, {
                      size: 16,
                      class: "op-btn",
                      onClick: copyCode
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_CopyDocument)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElTooltip, {
              content: "查看源代码",
              "show-arrow": false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElIcon, {
                    size: 16,
                    class: "op-btn",
                    onClick: ($event) => unref(toggleSourceVisible)()
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_View, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_View)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElIcon, {
                      size: 16,
                      class: "op-btn",
                      onClick: ($event) => unref(toggleSourceVisible)()
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_View)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ElCollapseTransition, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(SourceCode, {
                    style: unref(sourceVisible) ? null : { display: "none" },
                    source: __props.source
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    withDirectives(createVNode(SourceCode, { source: __props.source }, null, 8, ["source"]), [
                      [vShow, unref(sourceVisible)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle(unref(sourceVisible) ? null : { display: "none" })}" class="example-float-control" data-v-172a30e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElIcon, { size: 16 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CaretTop, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CaretTop)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span data-v-172a30e1${_scopeId}>隐藏源代码</span></div></div>`);
          } else {
            return [
              createVNode("p", {
                text: "sm",
                innerHTML: decodedDescription.value
              }, null, 8, ["innerHTML"]),
              createVNode("div", { class: "example" }, [
                createVNode(Example, { path: __props.path }, null, 8, ["path"]),
                createVNode(_component_ElDivider, { class: "m-0" }),
                createVNode("div", { class: "op-btns" }, [
                  createVNode(_component_ElTooltip, {
                    content: "复制代码",
                    "show-arrow": false
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, {
                        size: 16,
                        class: "op-btn",
                        onClick: copyCode
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_CopyDocument)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ElTooltip, {
                    content: "查看源代码",
                    "show-arrow": false
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ElIcon, {
                        size: 16,
                        class: "op-btn",
                        onClick: ($event) => unref(toggleSourceVisible)()
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_View)
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_ElCollapseTransition, null, {
                  default: withCtx(() => [
                    withDirectives(createVNode(SourceCode, { source: __props.source }, null, 8, ["source"]), [
                      [vShow, unref(sourceVisible)]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(Transition, { name: "el-fade-in-linear" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("div", {
                      class: "example-float-control",
                      onClick: ($event) => unref(toggleSourceVisible)(false)
                    }, [
                      createVNode(_component_ElIcon, { size: 16 }, {
                        default: withCtx(() => [
                          createVNode(_component_CaretTop)
                        ]),
                        _: 1
                      }),
                      createVNode("span", null, "隐藏源代码")
                    ], 8, ["onClick"]), [
                      [vShow, unref(sourceVisible)]
                    ])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/vitepress/components/vp-demo/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VPDemo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-172a30e1"]]);
const cssVars = "";
const index = "";
const RawTheme = {
  ...theme,
  enhanceApp(ctx) {
    theme.enhanceApp(ctx);
    ctx.app.use(dayjs, {
      locale: zhCn
      // 语言设置
    });
    ctx.app.mixin({
      async mounted() {
        import("./index.25a973a1.js").then((module) => {
          ctx.app.use(module.default);
        });
      }
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component);
    }
    ctx.app.component("Demo", VPDemo);
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a, _b;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        const i = Array.from((group == null ? void 0 : group.querySelectorAll("input")) || []).indexOf(el);
        const current = group == null ? void 0 : group.querySelector('div[class*="language-"].active');
        const next = (_b = group == null ? void 0 : group.querySelectorAll('div[class*="language-"]:not(.language-id)')) == null ? void 0 : _b[i];
        if (current && next && current !== next) {
          current.classList.remove("active");
          next.classList.add("active");
        }
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        let text = "";
        sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + "\n");
        text = text.slice(0, -1);
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    managedHeadTags.forEach((el) => document.head.removeChild(el));
    managedHeadTags = [];
    newTags.forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      managedHeadTags.push(el);
    });
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    document.title = createTitle(siteData2, pageData);
    document.querySelector(`meta[name=description]`).setAttribute("content", pageDescription || siteData2.description);
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base2 = resolveThemeExtends(theme2.extends);
    return {
      ...base2,
      ...theme2,
      async enhanceApp(ctx) {
        if (base2.enhanceApp)
          await base2.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (!pageFilePath)
      return null;
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return import(
      /*@vite-ignore*/
      pageFilePath
    );
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  RELATION_MAPPER as A,
  createRangeDatePicker as B,
  filterDisplayItemMap as C,
  filterInlineItemMap as D,
  filterPanelItemMap as E,
  FYSelect as F,
  formItemMap as G,
  installFilterDisplayItem as H,
  installFilterInlineItem as I,
  installFilterPanelItem as J,
  installFormItem as K,
  LOGICAL_MAPPER as L,
  mapperToOptions as M,
  useFilter as N,
  useForm as O,
  useFormItems as P,
  useFormModel as Q,
  RELATION_DIGIT_MAPPER as R,
  useMemberCheck as S,
  useRelation as T,
  UploadItem as U,
  useUnfold as V,
  FYInput as a,
  FYSwitch as b,
  FYDatePicker as c,
  FYCascader as d,
  FYButton as e,
  FYActionPanel as f,
  generateUUID as g,
  FYAvatar as h,
  FYEmpty as i,
  FYFilterDisplay as j,
  FYFilterInline as k,
  FYFilterPanel as l,
  FYForm as m,
  FYMapCoordselection as n,
  FYMemberSelect as o,
  FYMenu as p,
  FYNavigation as q,
  FYPagination as r,
  render,
  ssrRegisterHelper as s,
  FYProgress as t,
  FYTable as u,
  FYTopNavigation as v,
  withInstall as w,
  FYTree as x,
  FYUpload as y,
  FilterInline as z
};
