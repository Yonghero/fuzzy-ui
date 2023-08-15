import dayjs, { ElDialog } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { w as withInstall, F as FYSelect, a as FYInput, b as FYSwitch, c as FYDatePicker, d as FYCascader, U as UploadItem, s as ssrRegisterHelper, g as generateUUID, e as FYButton, f as FYActionPanel, h as FYAvatar, i as FYEmpty, j as FYFilterDisplay, k as FYFilterInline, l as FYFilterPanel, m as FYForm, n as FYMapCoordselection, o as FYMemberSelect, p as FYMenu, q as FYNavigation, r as FYPagination, t as FYProgress, u as FYTable, v as FYTopNavigation, x as FYTree, y as FYUpload, z as FilterInline, L as LOGICAL_MAPPER, R as RELATION_DIGIT_MAPPER, A as RELATION_MAPPER, B as createRangeDatePicker, C as filterDisplayItemMap, D as filterInlineItemMap, E as filterPanelItemMap, G as formItemMap$1, H as installFilterDisplayItem, I as installFilterInlineItem, J as installFilterPanelItem, K as installFormItem$1, M as mapperToOptions, N as useFilter, O as useForm, P as useFormItems, Q as useFormModel, S as useMemberCheck, T as useRelation, V as useUnfold } from "./app.js";
import { mergeProps, useSSRContext, onMounted, ref, resolveComponent, withCtx, createVNode, renderSlot, defineComponent, computed, watch, isVNode, createTextVNode, watchEffect, unref, openBlock, createBlock, createCommentVNode, onBeforeUnmount, useSlots, toDisplayString, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
import mpegts from "mpegts.js";
import videojs from "video.js";
import Hls from "hls.js";
import VueOfficeExcel from "@vue-office/excel";
import VueOfficeDocx from "@vue-office/docx";
import VueOfficePdf from "@vue-office/pdf";
import "@vueuse/core";
import "body-scroll-lock";
import "@element-plus/icons-vue";
import "sortablejs";
const timeLine_vue_vue_type_style_index_0_scoped_6c54779c_lang = "";
const _sfc_main$5 = /* @__PURE__ */ Object.assign({
  name: "FYTimeLine"
}, {
  __name: "time-line",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "timeline-wrap" }, _attrs))} data-v-6c54779c><div class="item" data-v-6c54779c> 时间点2021 </div><div class="item" data-v-6c54779c> 时间点2022 </div><div class="item" data-v-6c54779c> 时间点2023 </div><div class="item" data-v-6c54779c> 时间点2024 </div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/time-line/src/time-line.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TimeLine = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6c54779c"]]);
const FYTimeLine = withInstall(TimeLine);
const loading_vue_vue_type_style_index_0_scoped_6107ffee_lang = "";
const _sfc_main$4 = /* @__PURE__ */ Object.assign({
  name: "FYLoading"
}, {
  __name: "loading",
  __ssrInlineRender: true,
  props: {
    // 控制显示与否
    modelValue: {
      type: Boolean,
      default: false
    },
    // loading 全屏模式或部分模块模式
    type: {
      type: String,
      default: "page"
    },
    // 改变loading背景颜色
    background: {
      type: Object,
      default: () => ({
        light: "rgba(255, 255, 255, .9)",
        dark: "rgba(0, 0, 0, .8)"
      })
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (props.type === "page") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          style: [
            props.modelValue ? null : { display: "none" },
            { "--light-loading-color": props.background.light, "--dark-loading-color": props.background.dark }
          ],
          class: "fy-loading-wrap"
        }, _attrs))} data-v-6107ffee><div class="loading-wrapper" data-v-6107ffee><div class="loading" data-v-6107ffee><div data-v-6107ffee><span data-v-6107ffee></span><span data-v-6107ffee></span><span data-v-6107ffee></span></div></div></div></div>`);
      } else if (props.type === "module") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          style: [
            props.modelValue ? null : { display: "none" },
            { "--light-loading-color": props.background.light, "--dark-loading-color": props.background.dark }
          ],
          class: "fy-loading-wrap-module"
        }, _attrs))} data-v-6107ffee><div class="loading-module-wrapper" data-v-6107ffee><h4 data-v-6107ffee><span style="${ssrRenderStyle({ "display": "none" })}" data-v-6107ffee></span><div class="loading-ellipsis" data-v-6107ffee><span class="spot" data-v-6107ffee></span></div></h4></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/loading/src/loading.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6107ffee"]]);
const FYLoading = withInstall(Loading);
const skeleton_vue_vue_type_style_index_0_scoped_c5decea7_lang = "";
const _sfc_main$3 = /* @__PURE__ */ Object.assign({
  name: "FYSkeleton"
}, {
  __name: "skeleton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: [Number, String],
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const circleWrap = ref(null);
    const computeRadius = ref("");
    const computeFourRadius = ref("");
    onMounted(() => {
      const target = document.querySelector(".circle-wrap");
      const { width, height } = target.getBoundingClientRect();
      computeRadius.value = `${width < height ? width : height}px`;
      const targetFour = document.querySelector(".circle-four-wrap");
      const { width: width2, height: height2 } = targetFour.getBoundingClientRect();
      computeFourRadius.value = `${width2 < height2 ? width2 : height2}px`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_skeleton = resolveComponent("el-skeleton");
      const _component_el_skeleton_item = resolveComponent("el-skeleton-item");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fy-skeleton-wrap" }, _attrs))} data-v-c5decea7>`);
      if (parseInt(props.type) === 1) {
        _push(`<div data-v-c5decea7>`);
        _push(ssrRenderComponent(_component_el_skeleton, mergeProps({ style: { "width": "100%", "text-align": "left" } }, _ctx.$attrs), {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "20%", "height": "20px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "16%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`</div><div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="fy-skeleton-section" data-v-c5decea7${_scopeId}><div class="fy-skeleton-section-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "32%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="fy-skeleton-section-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "32%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="fy-skeleton-section" data-v-c5decea7${_scopeId}><div class="fy-skeleton-section-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "32%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="fy-skeleton-section-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "32%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="fy-skeleton-section" data-v-c5decea7${_scopeId}><div class="fy-skeleton-section-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "32%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="fy-skeleton-section-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "32%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="fy-skeleton-section" data-v-c5decea7${_scopeId}><div class="fy-skeleton-section-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "32%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="fy-skeleton-section-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "32%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "16%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "80px" }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode(_component_el_skeleton_item, {
                  variant: "p",
                  style: { "width": "20%", "height": "20px" }
                }),
                createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "16%", "height": "18px" }
                  })
                ]),
                createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "100%", "height": "30px" }
                  })
                ]),
                createVNode("div", { class: "fy-skeleton-section" }, [
                  createVNode("div", { class: "fy-skeleton-section-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "32%", "height": "18px" }
                    }),
                    createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fy-skeleton-section-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "32%", "height": "18px" }
                    }),
                    createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "fy-skeleton-section" }, [
                  createVNode("div", { class: "fy-skeleton-section-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "32%", "height": "18px" }
                    }),
                    createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fy-skeleton-section-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "32%", "height": "18px" }
                    }),
                    createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "fy-skeleton-section" }, [
                  createVNode("div", { class: "fy-skeleton-section-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "32%", "height": "18px" }
                    }),
                    createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fy-skeleton-section-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "32%", "height": "18px" }
                    }),
                    createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "fy-skeleton-section" }, [
                  createVNode("div", { class: "fy-skeleton-section-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "32%", "height": "18px" }
                    }),
                    createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fy-skeleton-section-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "32%", "height": "18px" }
                    }),
                    createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ])
                ]),
                createVNode(_component_el_skeleton_item, {
                  variant: "p",
                  style: { "width": "16%", "height": "18px" }
                }),
                createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "100%", "height": "80px" }
                  })
                ])
              ];
            }
          }),
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
        _push(`</div>`);
      } else if (parseInt(props.type) === 2) {
        _push(`<div data-v-c5decea7>`);
        _push(ssrRenderComponent(_component_el_skeleton, mergeProps({ style: { "width": "100%", "text-align": "left" } }, _ctx.$attrs), {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "16%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "16%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "16%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "16%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "16%", "height": "18px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "0px 0px 10px 0" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode(_component_el_skeleton_item, {
                  variant: "p",
                  style: { "width": "16%", "height": "18px" }
                }),
                createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "100%", "height": "30px" }
                  })
                ]),
                createVNode(_component_el_skeleton_item, {
                  variant: "p",
                  style: { "width": "16%", "height": "18px" }
                }),
                createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "100%", "height": "30px" }
                  })
                ]),
                createVNode(_component_el_skeleton_item, {
                  variant: "p",
                  style: { "width": "16%", "height": "18px" }
                }),
                createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "100%", "height": "30px" }
                  })
                ]),
                createVNode(_component_el_skeleton_item, {
                  variant: "p",
                  style: { "width": "16%", "height": "18px" }
                }),
                createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "100%", "height": "30px" }
                  })
                ]),
                createVNode(_component_el_skeleton_item, {
                  variant: "p",
                  style: { "width": "16%", "height": "18px" }
                }),
                createVNode("div", { style: { "padding": "0px 0px 10px 0" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "100%", "height": "30px" }
                  })
                ])
              ];
            }
          }),
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
        _push(`</div>`);
      } else if (parseInt(props.type) === 3) {
        _push(`<div data-v-c5decea7>`);
        _push(ssrRenderComponent(_component_el_skeleton, mergeProps({ style: { "width": "100%", "text-align": "left" } }, _ctx.$attrs), {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "20%", "height": "20px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "40px" }
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="fy-skeleton-four-wrap" data-v-c5decea7${_scopeId}><div class="fy-skeleton-four-first" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "33%", "height": "25px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px", "display": "flex" })}" data-v-c5decea7${_scopeId}><div class="circle-four-wrap" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "circle",
                style: { marginRight: "10px", width: computeFourRadius.value, height: computeFourRadius.value }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "flex": "4", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="fy-skeleton-four" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "33%", "height": "25px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="fy-skeleton-four" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "33%", "height": "25px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="fy-skeleton-four" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "33%", "height": "25px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="fy-skeleton-four-vertical" data-v-c5decea7${_scopeId}><div class="fy-skeleton-four-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "20%", "height": "25px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="fy-skeleton-four-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "20%", "height": "25px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="fy-skeleton-four-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "20%", "height": "25px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="fy-skeleton-four-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "20%", "height": "25px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "33%", "height": "25px" }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "100px" }
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="fy-skeleton-circle-left" data-v-c5decea7${_scopeId}><div class="circle-wrap" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "circle",
                style: { width: computeRadius.value, marginRight: "10px", height: computeRadius.value }
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="fy-skeleton-circle-item" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { width: "33%", height: computeRadius.value }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "60px" }
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "circle",
                style: { width: computeRadius.value, height: computeRadius.value }
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle({ "padding": "10px 0 5px 0px" })}" data-v-c5decea7${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_skeleton_item, {
                variant: "p",
                style: { "width": "100%", "height": "30px" }
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode(_component_el_skeleton_item, {
                  variant: "p",
                  style: { "width": "20%", "height": "20px" }
                }),
                createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "100%", "height": "40px" }
                  })
                ]),
                createVNode("div", { class: "fy-skeleton-four-wrap" }, [
                  createVNode("div", { class: "fy-skeleton-four-first" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "33%", "height": "25px" }
                    }),
                    createVNode("div", { style: { "padding": "10px 0 5px 0px", "display": "flex" } }, [
                      createVNode("div", { class: "circle-four-wrap" }, [
                        createVNode(_component_el_skeleton_item, {
                          variant: "circle",
                          style: { marginRight: "10px", width: computeFourRadius.value, height: computeFourRadius.value }
                        }, null, 8, ["style"])
                      ]),
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "flex": "4", "height": "30px" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fy-skeleton-four" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "33%", "height": "25px" }
                    }),
                    createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fy-skeleton-four" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "33%", "height": "25px" }
                    }),
                    createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fy-skeleton-four" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "33%", "height": "25px" }
                    }),
                    createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "fy-skeleton-four-vertical" }, [
                  createVNode("div", { class: "fy-skeleton-four-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "20%", "height": "25px" }
                    }),
                    createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fy-skeleton-four-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "20%", "height": "25px" }
                    }),
                    createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fy-skeleton-four-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "20%", "height": "25px" }
                    }),
                    createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ]),
                  createVNode("div", { class: "fy-skeleton-four-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { "width": "20%", "height": "25px" }
                    }),
                    createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "30px" }
                      })
                    ])
                  ])
                ]),
                createVNode(_component_el_skeleton_item, {
                  variant: "p",
                  style: { "width": "33%", "height": "25px" }
                }),
                createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "100%", "height": "100px" }
                  })
                ]),
                createVNode("div", { class: "fy-skeleton-circle-left" }, [
                  createVNode("div", {
                    ref_key: "circleWrap",
                    ref: circleWrap,
                    class: "circle-wrap"
                  }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "circle",
                      style: { width: computeRadius.value, marginRight: "10px", height: computeRadius.value }
                    }, null, 8, ["style"])
                  ], 512),
                  createVNode("div", { class: "fy-skeleton-circle-item" }, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "p",
                      style: { width: "33%", height: computeRadius.value }
                    }, null, 8, ["style"]),
                    createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                      createVNode(_component_el_skeleton_item, {
                        variant: "p",
                        style: { "width": "100%", "height": "60px" }
                      })
                    ])
                  ])
                ]),
                createVNode(_component_el_skeleton_item, {
                  variant: "circle",
                  style: { width: computeRadius.value, height: computeRadius.value }
                }, null, 8, ["style"]),
                createVNode("div", { style: { "padding": "10px 0 5px 0px" } }, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "p",
                    style: { "width": "100%", "height": "30px" }
                  })
                ])
              ];
            }
          }),
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
        _push(`</div>`);
      } else {
        _push(`<div data-v-c5decea7>`);
        _push(ssrRenderComponent(_component_el_skeleton, mergeProps({ style: { "width": "100%", "text-align": "left" } }, _ctx.$attrs), {
          template: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "template", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "template", {}, void 0, true)
              ];
            }
          }),
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
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/skeleton/src/skeleton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Skeleton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c5decea7"]]);
const FYSkeleton = withInstall(Skeleton);
const Select = {
  type: "select",
  renderer(props) {
    return createVNode(FYSelect, mergeProps(props, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": ($event) => props.model[props.value] = $event
    }), null);
  }
};
const Input = {
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
const builtInFormItems = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Cascader,
  DatePicker,
  Input,
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
installFormItem(Object.entries(builtInFormItems).map(([, value]) => value));
const FormItem = defineComponent({
  props: {
    // 每一个表单项对象
    tmplItem: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {
    emit
  }) {
    const typeCheck = (e) => {
      emit("type-check", e);
    };
    const FormItemCom = computed(() => {
      if (props.tmplItem.render)
        return props.tmplItem.render;
      const renderer = formItemMap.get(props.tmplItem.type);
      return renderer || createVNode("div", null, null);
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
    const fileChange = (file, files) => {
      emit("file-change", file, files);
    };
    return () => createVNode(resolveComponent("ElFormItem"), {
      "label": props.tmplItem.label,
      "key": props.tmplItem.value,
      "prop": props.tmplItem.value,
      "style": getFromStyle(props.tmplItem)
    }, {
      default: () => [props.tmplItem.type === "upload" ? createVNode(UploadItem, {
        "onTypeCheck": typeCheck,
        "onFileChange": fileChange
      }, null) : createVNode(FormItemCom.value, mergeProps({
        "model": props.tmplItem.model
      }, props.tmplItem), null)]
    });
  }
});
const __moduleId$2 = "../packages/components/dialog/src/DialogFormItem.jsx";
ssrRegisterHelper(FormItem, __moduleId$2);
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const __default__$1 = defineComponent({
  props: {
    // 表单项列表
    template: {
      type: Array,
      default: () => []
    },
    // 表单域位置
    labelPosition: {
      type: String,
      default: "top"
    },
    // 表单域宽度
    labelWidth: {
      type: String,
      default: "auto"
    },
    // 组件绑定对象
    modelValue: {
      type: Object,
      default: () => ({})
    },
    // 是否校验
    shouldValidate: {
      type: Boolean,
      default: true
    },
    // 业务类型
    businessType: {
      type: String,
      default: "create"
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
    const initFormItems = props.template.filter((item) => !item.filterUnShow && item.show !== false).map((sec) => ({
      ...sec,
      model: props.modelValue
    }));
    const typeCheck = (e) => {
      emit("type-check", e);
    };
    const fileChange = (file, files) => {
      emit("file-change", file, files);
    };
    expose({
      resetFields,
      validate,
      validateField,
      clearValidate
    });
    return () => {
      let _slot;
      return createVNode(resolveComponent("el-form"), mergeProps({
        "label-position": props.labelPosition,
        "model": props.modelValue,
        "labelWidth": props.labelWidth,
        "rules": rules,
        "ref": realFormRef
      }, attrs), _isSlot(_slot = initFormItems.map((item) => createVNode(FormItem, {
        "tmplItem": item,
        "key": item.value,
        "onTypeCheck": typeCheck,
        "onFileChange": fileChange
      }, null))) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
const Form = __default__$1;
const __moduleId$1 = "../packages/components/dialog/src/DialogForm.jsx";
ssrRegisterHelper(__default__$1, __moduleId$1);
const __default__ = defineComponent({
  props: {
    dialogConfig: {
      type: Object,
      default: () => ({
        // 删除的对象名称
        businessType: "字段",
        // 控制删除对象的类名
        typeClass: "",
        // 控制tag文字的类名
        tagClass: "",
        // tag文字
        tagText: "XX",
        // 自定义删除描述
        customDesc: ""
      })
    }
  },
  setup(props, {
    slots
  }) {
    const getTagClass = computed(() => {
      const target = ["delete-tag"];
      if (props.dialogConfig.tagClass) {
        target.push(props.dialogConfig.tagClass);
      }
      return target.join(" ");
    });
    return () => createVNode("div", {
      "class": "fy-dialog-delete"
    }, [createVNode("div", null, [createTextVNode("确认删除"), createVNode("span", {
      "class": props.dialogConfig.typeClass
    }, [props.dialogConfig.businessType ? props.dialogConfig.businessType : "", slots.default && slots.default()]), createVNode(resolveComponent("el-tag"), {
      "class": getTagClass.value,
      "type": "danger"
    }, {
      default: () => [props.dialogConfig.tagText]
    }), createTextVNode("吗？")]), createVNode("div", {
      "class": "delete-warn"
    }, [props.dialogConfig.customDesc ? createVNode("span", null, [props.dialogConfig.customDesc]) : createVNode("span", null, [createVNode("span", null, [props.dialogConfig.businessType]), createTextVNode("删除后不可恢复。")])])]);
  }
});
const DeletePanel = __default__;
const __moduleId = "../packages/components/dialog/src/DialogDeletePanel.jsx";
ssrRegisterHelper(__default__, __moduleId);
const dialog_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = /* @__PURE__ */ Object.assign({
  name: "FYDialog"
}, {
  __name: "dialog",
  __ssrInlineRender: true,
  props: {
    // 控制表单显示与否
    modelValue: {
      type: Boolean,
      default: false
    },
    // 绑定的表单对象
    formModel: {
      type: Object,
      default: () => ({})
    },
    dialogConfig: {
      type: Object,
      default: () => ({
        // 配合表单类型的title
        title: "",
        // 完全按照传进来的title显示
        fullTitle: "",
        // 控制对话框的class
        modalClass: "",
        // 控制点击空白处关闭对话框与否
        closeOnClickModal: false,
        // 控制表单域标签的位置
        labelPosition: "top",
        // 表单项列表
        template: [],
        // 控制对话框样式
        dialogType: "",
        // 对话框业务类型
        type: "create",
        // 表单域标签的宽度
        labelWidth: ""
      })
    }
  },
  emits: ["update:modelValue", "submit", "fail", "cancel", "confirm", "type-check"],
  setup(__props, { emit }) {
    const props = __props;
    const model = ref({});
    watchEffect(() => {
      model.value = props.formModel;
    });
    watch(() => props.modelValue, (newV) => {
      var _a, _b;
      (_a = formRef.value) == null ? void 0 : _a.clearValidate();
      if (!newV) {
        (_b = formRef.value) == null ? void 0 : _b.resetFields();
      }
    });
    const getModalClass = computed(() => {
      var _a;
      const target = [];
      if (props.dialogConfig.dialogType === "super") {
        target.push("fy-dialog-super");
      }
      if (props.dialogConfig.dialogType === "max") {
        target.push("fy-dialog-max");
      }
      if (props.dialogConfig.modalClass) {
        target.push(props.modalClass);
      }
      if (((_a = props.dialogConfig.template) == null ? void 0 : _a.length) >= 5) {
        target.push("fy-dialog-default");
      } else if (props.dialogConfig.template) {
        target.push("fy-dialog-small");
      } else if (props.dialogConfig.type === "delete") {
        target.push("fy-dialog-delete-type");
      }
      return target.join(" ");
    });
    const getTitle = computed(() => {
      if (props.dialogConfig.fullTitle) {
        return props.dialogConfig.fullTitle;
      }
      if (props.dialogConfig.title) {
        let type;
        switch (props.dialogConfig.type) {
          case "create":
            type = "新建";
            break;
          case "update":
            type = "修改";
            break;
          case "delete":
            type = "";
            break;
          default:
            type = "新建";
            break;
        }
        return `${type}${props.dialogConfig.title}`;
      }
      return "";
    });
    const formRef = ref(null);
    const submit = () => {
      var _a;
      if (props.dialogConfig.type !== "delete") {
        (_a = formRef.value) == null ? void 0 : _a.validate();
      } else {
        emit("confirm");
      }
    };
    const handleSubmit = () => {
      emit("submit", { ...model.value });
    };
    const handleSubmitFail = (e) => {
      emit("fail", { target: e, formModel: props.formModel });
    };
    const cancel = () => {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.resetFields();
      emit("update:modelValue", false);
      if (props.dialogConfig.type !== "delete") {
        emit("cancel", props.formModel);
      } else {
        emit("cancel");
      }
    };
    const closedFn = () => {
      emit("update:modelValue", false);
    };
    const getComfirmButtonType = computed(() => {
      if (["create", "update"].includes(props.dialogConfig.type) || !props.dialogConfig.type) {
        return "primary";
      }
      if (["delete"].includes(props.dialogConfig.type)) {
        return "danger";
      }
      return "";
    });
    const typeCheck = (e) => {
      emit("type-check", e);
    };
    const fileChange = (file, files) => {
      emit("file-change", file, files);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DetailForm = resolveComponent("DetailForm");
      const _component_FYButton = resolveComponent("FYButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fy-dialog-wrap" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(ElDialog), mergeProps(_ctx.$attrs, {
        "model-value": props.modelValue,
        title: getTitle.value,
        "modal-class": getModalClass.value,
        "close-on-click-modal": props.dialogConfig.closeOnClickModal || false,
        "destroy-on-close": "",
        onClosed: closedFn
      }), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "header")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
              _push2(ssrRenderComponent(_component_FYButton, {
                type: getComfirmButtonType.value,
                style: { "display": "flex", "padding": "10px 32px", "width": "22px", "height": "16px", "margin-left": "16px", "box-sizing": "content-box", "color": "#FFF", "font-family": "'PingFang SC'", "font-size": "16px", "font-style": "normal", "font-weight": "400", "line-height": "22px" },
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
              _push2(ssrRenderComponent(_component_FYButton, {
                type: "info",
                text: "",
                link: "",
                style: { "padding": "0", "color": "#AAA", "font-family": "'PingFang SC'", "font-size": "16px", "font-style": "normal", "font-weight": "400", "line-height": "22px" },
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
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "footer", {}, () => [
                createVNode(_component_FYButton, {
                  type: getComfirmButtonType.value,
                  style: { "display": "flex", "padding": "10px 32px", "width": "22px", "height": "16px", "margin-left": "16px", "box-sizing": "content-box", "color": "#FFF", "font-family": "'PingFang SC'", "font-size": "16px", "font-style": "normal", "font-weight": "400", "line-height": "22px" },
                  onClick: submit
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 确定 ")
                  ]),
                  _: 1
                }, 8, ["type"]),
                createVNode(_component_FYButton, {
                  type: "info",
                  text: "",
                  link: "",
                  style: { "padding": "0", "color": "#AAA", "font-family": "'PingFang SC'", "font-size": "16px", "font-style": "normal", "font-weight": "400", "line-height": "22px" },
                  onClick: cancel
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 取消 ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.dialogConfig.type === "create" || props.dialogConfig.type === "update" || !props.dialogConfig.type) {
              _push2(ssrRenderComponent(unref(Form), {
                ref_key: "formRef",
                ref: formRef,
                modelValue: model.value,
                "onUpdate:modelValue": ($event) => model.value = $event,
                labelPosition: props.dialogConfig.labelPosition,
                labelWidth: props.dialogConfig.labelWidth,
                template: props.dialogConfig.template,
                businessType: props.dialogConfig.type,
                onSubmit: handleSubmit,
                onFail: handleSubmitFail,
                onTypeCheck: typeCheck,
                onFileChange: fileChange
              }, null, _parent2, _scopeId));
            } else if (props.dialogConfig.type === "delete") {
              _push2(ssrRenderComponent(unref(DeletePanel), {
                dialogConfig: props.dialogConfig
              }, null, _parent2, _scopeId));
            } else if (props.dialogConfig.type === "detail") {
              _push2(ssrRenderComponent(_component_DetailForm, { ref: "formDetailRef" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.dialogConfig.type === "create" || props.dialogConfig.type === "update" || !props.dialogConfig.type ? (openBlock(), createBlock(unref(Form), {
                key: 0,
                ref_key: "formRef",
                ref: formRef,
                modelValue: model.value,
                "onUpdate:modelValue": ($event) => model.value = $event,
                labelPosition: props.dialogConfig.labelPosition,
                labelWidth: props.dialogConfig.labelWidth,
                template: props.dialogConfig.template,
                businessType: props.dialogConfig.type,
                onSubmit: handleSubmit,
                onFail: handleSubmitFail,
                onTypeCheck: typeCheck,
                onFileChange: fileChange
              }, null, 8, ["modelValue", "onUpdate:modelValue", "labelPosition", "labelWidth", "template", "businessType"])) : props.dialogConfig.type === "delete" ? (openBlock(), createBlock(unref(DeletePanel), {
                key: 1,
                dialogConfig: props.dialogConfig
              }, null, 8, ["dialogConfig"])) : props.dialogConfig.type === "detail" ? (openBlock(), createBlock(_component_DetailForm, {
                key: 2,
                ref: "formDetailRef"
              }, null, 512)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/dialog/src/dialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Dialog = _sfc_main$2;
const FYDialog = withInstall(Dialog);
function useFlv({
  url,
  id,
  emit,
  config = {}
}) {
  if (mpegts.getFeatureList().mseLivePlayback) {
    const video = document.getElementById(id);
    let player = mpegts.createPlayer({
      type: "flv",
      url,
      isLive: true,
      cors: true,
      enableWorker: true,
      enableStashBuffer: false,
      autoCleanupSourceBuffer: true,
      ...config
    });
    player.attachMediaElement(video);
    player.load();
    return {
      pause() {
        emit("pause", player);
        player.pause();
      },
      destory() {
        emit("destory", player);
        player.pause();
        player.unload();
        player.detachMediaElement();
        player.destroy();
        player = null;
      },
      play() {
        emit("play", player);
        player.play();
      }
    };
  }
  return null;
}
function useWebrtc({
  url,
  id,
  emit,
  config = {}
}) {
  const video = document.getElementById(id);
  if (JSWebrtc) {
    let player = new JSWebrtc.Player(url, {
      video,
      autoplay: false,
      ...config
    });
    return {
      play() {
        emit("play", player);
        player.play();
      },
      pause() {
        emit("pause", player);
        player.pause();
      },
      destory() {
        emit("destory", player);
        player.pause();
        player.destroy();
        player = null;
      }
    };
  }
  return null;
}
const videoJs = "";
function useVideojs({
  url,
  id,
  emit,
  config = {}
}) {
  let player = videojs(document.getElementById(id), {
    language: "zh-CN",
    // 设置语言
    controls: false,
    // 是否显示控制条
    preload: "auto",
    // 预加载
    fluid: true,
    // 自适应宽高
    src: url,
    // 要嵌入的视频源的源 URL
    autoplay: false,
    control: true,
    bigPlayButton: false,
    textTrackDisplay: false,
    posterImage: false,
    errorDisplay: false,
    controlBar: true,
    ...config
  }, () => {
    emit("ready", this);
  });
  return {
    play() {
      emit("play", player);
      player.play();
    },
    pause() {
      emit("pause", player);
      player.pause();
    },
    destory() {
      emit("destory", player);
      player.dispose();
      player = null;
    }
  };
}
function useHls({
  url,
  id,
  emit,
  config = {}
}) {
  if (Hls.isSupported()) {
    let video = document.getElementById(id);
    const hls = new Hls({ autoStartLoad: true, ...config });
    hls.attachMedia(video);
    hls.loadSource(url);
    return {
      pause() {
        emit("pause", video);
        video.pause();
      },
      destory() {
        emit("destory", video);
        video.pause();
        video.destroy();
        video = null;
      },
      play() {
        emit("play", video);
        video.play();
      }
    };
  }
  return null;
}
const _sfc_main$1 = /* @__PURE__ */ Object.assign({
  name: "FYVideoPlayer"
}, {
  __name: "video-player",
  __ssrInlineRender: true,
  props: {
    // 流格式类型
    streamType: {
      type: String,
      validator: (value) => ["flv", "webrtc", "h5", "hls"].includes(value),
      default: "h5"
    },
    url: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: () => `player${generateUUID()}`
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    config: {
      type: Object,
      default: () => ({})
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  emits: ["ready", "play", "pause", "destory"],
  setup(__props, {
    expose: __expose,
    emit
  }) {
    const props = __props;
    const player = ref();
    const playerContainer = ref();
    const playerHooks = {
      flv: useFlv,
      webrtc: useWebrtc,
      h5: useVideojs,
      hls: useHls
    };
    function initPlayer() {
      player.value = playerHooks[props.streamType]({
        url: props.url,
        id: props.id,
        emit,
        config: props.config
      });
      if (player.value && props.autoplay) {
        player.value.play();
      }
    }
    function destoryPlayer() {
      if (player.value) {
        player.value.destory();
        player.value = null;
        playerContainer.value.innerHTML = "";
      }
    }
    function createVideoEle() {
      const video = document.createElement("video");
      video.id = props.id;
      video.classList = props.streamType === "h5" ? "video-js" : "";
      video.autoplay = props.autoplay;
      video.muted = true;
      video.src = props.url;
      playerContainer.value.appendChild(video);
    }
    onMounted(() => {
      watchEffect(() => {
        destoryPlayer();
        if (props.url) {
          createVideoEle();
          initPlayer();
        }
      });
    });
    onBeforeUnmount(() => {
      destoryPlayer();
    });
    __expose({
      player
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "fy-video-player-wrap",
        width: __props.width,
        height: __props.height
      }, _attrs))}><div id="player-container" class="player-container h-full w-full object-fill"></div></div>`);
    };
  }
});
const videoPlayer_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/video-player/src/video-player.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FYVideoPlayer = withInstall(_sfc_main$1);
const index$2 = "";
const index$1 = "";
const filePreview_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "FYFilePreview"
}, {
  __name: "file-preview",
  __ssrInlineRender: true,
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    type: {
      type: String,
      validator: (value) => ["excel", "word", "pdf"].includes(value)
    },
    height: {
      type: String,
      default: "600px"
    },
    width: {
      type: String,
      default: "70%"
    },
    src: {
      type: String,
      default: "https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx"
    }
  },
  emits: ["update:visible"],
  setup(__props, { emit: emits }) {
    var _a;
    const props = __props;
    const type2Renderer = {
      excel: VueOfficeExcel,
      word: VueOfficeDocx,
      pdf: VueOfficePdf
    };
    const dialogVisible = computed({
      get() {
        return props.visible;
      },
      set(value) {
        emits("update:visible", value);
      }
    });
    const hasHeaderSlot = !!((_a = useSlots()) == null ? void 0 : _a.header);
    const fileType = computed(() => {
      if (props.type)
        return props.type;
      if (props.src) {
        const suffix = props.src.match(/\.([^.]+)$/)[1];
        if (suffix === "docx")
          return "word";
        if (suffix === "pdf")
          return "pdf";
        return "excel";
      }
      return "word";
    });
    const title = computed(() => {
      if (props.title)
        return props.title;
      if (fileType.value === "excel") {
        return "excel文件预览";
      }
      if (fileType.value === "pdf") {
        return "pdf文件预览";
      }
      return "word文件预览";
    });
    const FileRenderer = computed(() => type2Renderer[fileType.value]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fy-file-preview-wrap" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": ($event) => dialogVisible.value = $event,
        "destroy-on-close": "",
        top: "5vh",
        width: "70%",
        style: { "{\n        width": "width" }
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
            if (!hasHeaderSlot) {
              _push2(`<span${_scopeId}>${ssrInterpolate(title.value)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "header"),
              !hasHeaderSlot ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(title.value), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="dialog-footer"${_scopeId}>`);
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
            _push2(`<div class="fy-file-preview-content" style="${ssrRenderStyle({
              height: __props.height
            })}"${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(FileRenderer.value), mergeProps({
              src: __props.src,
              style: { "width": "100%", "height": "100%" }
            }, _ctx.$attrs), null), _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "fy-file-preview-content",
                style: {
                  height: __props.height
                }
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(FileRenderer.value), mergeProps({
                  src: __props.src,
                  style: { "width": "100%", "height": "100%" }
                }, _ctx.$attrs), null, 16, ["src"]))
              ], 4)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="slot-wrap">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/file-preview/src/file-preview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FilePreview = _sfc_main;
const FYFilePreview = withInstall(FilePreview);
const YHComponents = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FYActionPanel,
  FYAvatar,
  FYButton,
  FYCascader,
  FYDatePicker,
  FYDialog,
  FYEmpty,
  FYFilePreview,
  FYFilterDisplay,
  FYFilterInline,
  FYFilterPanel,
  FYForm,
  FYInput,
  FYLoading,
  FYMapCoordselection,
  FYMemberSelect,
  FYMenu,
  FYNavigation,
  FYPagination,
  FYProgress,
  FYSelect,
  FYSkeleton,
  FYSwitch,
  FYTable,
  FYTimeLine,
  FYTopNavigation,
  FYTree,
  FYUpload,
  FYVideoPlayer,
  FilterInline,
  LOGICAL_MAPPER,
  RELATION_DIGIT_MAPPER,
  RELATION_MAPPER,
  createRangeDatePicker,
  filterDisplayItemMap,
  filterInlineItemMap,
  filterPanelItemMap,
  formItemMap: formItemMap$1,
  installFilterDisplayItem,
  installFilterInlineItem,
  installFilterPanelItem,
  installFormItem: installFormItem$1,
  mapperToOptions,
  useFilter,
  useForm,
  useFormItems,
  useFormModel,
  useMemberCheck,
  useRelation,
  useUnfold
}, Symbol.toStringTag, { value: "Module" }));
const index = {
  ...YHComponents,
  install: (app) => {
    app.use(dayjs, {
      locale: zhCn
    });
    Object.keys(YHComponents).forEach((name) => {
      app.use(YHComponents[name]);
    });
  }
};
export {
  FYActionPanel,
  FYAvatar,
  FYButton,
  FYCascader,
  FYDatePicker,
  FYDialog,
  FYEmpty,
  FYFilePreview,
  FYFilterDisplay,
  FYFilterInline,
  FYFilterPanel,
  FYForm,
  FYInput,
  FYLoading,
  FYMapCoordselection,
  FYMemberSelect,
  FYMenu,
  FYNavigation,
  FYPagination,
  FYProgress,
  FYSelect,
  FYSkeleton,
  FYSwitch,
  FYTable,
  FYTimeLine,
  FYTopNavigation,
  FYTree,
  FYUpload,
  FYVideoPlayer,
  FilterInline,
  LOGICAL_MAPPER,
  RELATION_DIGIT_MAPPER,
  RELATION_MAPPER,
  createRangeDatePicker,
  index as default,
  filterDisplayItemMap,
  filterInlineItemMap,
  filterPanelItemMap,
  formItemMap$1 as formItemMap,
  installFilterDisplayItem,
  installFilterInlineItem,
  installFilterPanelItem,
  installFormItem$1 as installFormItem,
  mapperToOptions,
  useFilter,
  useForm,
  useFormItems,
  useFormModel,
  useMemberCheck,
  useRelation,
  useUnfold
};
