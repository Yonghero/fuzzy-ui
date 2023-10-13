'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tool = require('../tool-abc222dc.js');
var ElementPlus = require('element-plus');
var vue = require('vue');
var dayjs = require('dayjs');
var VueOfficeExcel = require('@vue-office/excel');
var VueOfficeDocx = require('@vue-office/docx');
var VueOfficePdf = require('@vue-office/pdf');

/*! Element Plus v2.3.8 */

var zhCn = {
  name: "zh-cn",
  el: {
    colorpicker: {
      confirm: "\u786E\u5B9A",
      clear: "\u6E05\u7A7A"
    },
    datepicker: {
      now: "\u6B64\u523B",
      today: "\u4ECA\u5929",
      cancel: "\u53D6\u6D88",
      clear: "\u6E05\u7A7A",
      confirm: "\u786E\u5B9A",
      selectDate: "\u9009\u62E9\u65E5\u671F",
      selectTime: "\u9009\u62E9\u65F6\u95F4",
      startDate: "\u5F00\u59CB\u65E5\u671F",
      startTime: "\u5F00\u59CB\u65F6\u95F4",
      endDate: "\u7ED3\u675F\u65E5\u671F",
      endTime: "\u7ED3\u675F\u65F6\u95F4",
      prevYear: "\u524D\u4E00\u5E74",
      nextYear: "\u540E\u4E00\u5E74",
      prevMonth: "\u4E0A\u4E2A\u6708",
      nextMonth: "\u4E0B\u4E2A\u6708",
      year: "\u5E74",
      month1: "1 \u6708",
      month2: "2 \u6708",
      month3: "3 \u6708",
      month4: "4 \u6708",
      month5: "5 \u6708",
      month6: "6 \u6708",
      month7: "7 \u6708",
      month8: "8 \u6708",
      month9: "9 \u6708",
      month10: "10 \u6708",
      month11: "11 \u6708",
      month12: "12 \u6708",
      weeks: {
        sun: "\u65E5",
        mon: "\u4E00",
        tue: "\u4E8C",
        wed: "\u4E09",
        thu: "\u56DB",
        fri: "\u4E94",
        sat: "\u516D"
      },
      months: {
        jan: "\u4E00\u6708",
        feb: "\u4E8C\u6708",
        mar: "\u4E09\u6708",
        apr: "\u56DB\u6708",
        may: "\u4E94\u6708",
        jun: "\u516D\u6708",
        jul: "\u4E03\u6708",
        aug: "\u516B\u6708",
        sep: "\u4E5D\u6708",
        oct: "\u5341\u6708",
        nov: "\u5341\u4E00\u6708",
        dec: "\u5341\u4E8C\u6708"
      }
    },
    select: {
      loading: "\u52A0\u8F7D\u4E2D",
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      noData: "\u65E0\u6570\u636E",
      placeholder: "\u8BF7\u9009\u62E9"
    },
    cascader: {
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      loading: "\u52A0\u8F7D\u4E2D",
      placeholder: "\u8BF7\u9009\u62E9",
      noData: "\u6682\u65E0\u6570\u636E"
    },
    pagination: {
      goto: "\u524D\u5F80",
      pagesize: "\u6761/\u9875",
      total: "\u5171 {total} \u6761",
      pageClassifier: "\u9875",
      page: "\u9875",
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875",
      currentPage: "\u7B2C {pager} \u9875",
      prevPages: "\u5411\u524D {pager} \u9875",
      nextPages: "\u5411\u540E {pager} \u9875",
      deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"
    },
    messagebox: {
      title: "\u63D0\u793A",
      confirm: "\u786E\u5B9A",
      cancel: "\u53D6\u6D88",
      error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"
    },
    upload: {
      deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
      delete: "\u5220\u9664",
      preview: "\u67E5\u770B\u56FE\u7247",
      continue: "\u7EE7\u7EED\u4E0A\u4F20"
    },
    table: {
      emptyText: "\u6682\u65E0\u6570\u636E",
      confirmFilter: "\u7B5B\u9009",
      resetFilter: "\u91CD\u7F6E",
      clearFilter: "\u5168\u90E8",
      sumText: "\u5408\u8BA1"
    },
    tree: {
      emptyText: "\u6682\u65E0\u6570\u636E"
    },
    transfer: {
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      noData: "\u65E0\u6570\u636E",
      titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
      filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
      noCheckedFormat: "\u5171 {total} \u9879",
      hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
    },
    image: {
      error: "\u52A0\u8F7D\u5931\u8D25"
    },
    pageHeader: {
      title: "\u8FD4\u56DE"
    },
    popconfirm: {
      confirmButtonText: "\u786E\u5B9A",
      cancelButtonText: "\u53D6\u6D88"
    }
  }
};

var throttleDuration = 300;
var script$B = /*#__PURE__*/Object.assign({
  name: 'FYButton'
}, {
  __name: 'button',
  props: {
    throttle: {
      // 是否开启节流
      type: Boolean,
      "default": true
    }
  },
  emits: ['click'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    var props = __props;
    var record = vue.ref(0);
    var handleClick = function handleClick() {
      if (props.throttle) {
        var newTime = new Date();
        if (newTime.getTime() - record.value > throttleDuration) {
          emits('click');
        }
        record.value = new Date().getTime();
      } else {
        emits('click');
      }
    };
    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElButton), vue.mergeProps(_ctx.$attrs, {
        onClick: handleClick
      }), {
        "default": vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "default")];
        }),
        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */);
    };
  }
});

script$B.__file = "packages/components/button/src/button.vue";

var FYButton = tool.withInstall(script$B);

/*! Element Plus Icons Vue v2.1.0 */


// unplugin-vue:/plugin-vue/export-helper
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/arrow-down.vue?vue&type=script&lang.ts
var arrow_down_vue_vue_type_script_lang_default = {
  name: "ArrowDown"
};
var _hoisted_16$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_26$1 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_36$1 = [
  _hoisted_26$1
];
function _sfc_render6(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_16$2, _hoisted_36$1);
}
var arrow_down_default = /* @__PURE__ */ export_helper_default(arrow_down_vue_vue_type_script_lang_default, [["render", _sfc_render6], ["__file", "arrow-down.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/arrow-right.vue?vue&type=script&lang.ts
var arrow_right_vue_vue_type_script_lang_default = {
  name: "ArrowRight"
};
var _hoisted_110 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_210 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_310 = [
  _hoisted_210
];
function _sfc_render10(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_110, _hoisted_310);
}
var arrow_right_default = /* @__PURE__ */ export_helper_default(arrow_right_vue_vue_type_script_lang_default, [["render", _sfc_render10], ["__file", "arrow-right.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/arrow-up.vue?vue&type=script&lang.ts
var arrow_up_vue_vue_type_script_lang_default = {
  name: "ArrowUp"
};
var _hoisted_112 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_212 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_312 = [
  _hoisted_212
];
function _sfc_render12(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_112, _hoisted_312);
}
var arrow_up_default = /* @__PURE__ */ export_helper_default(arrow_up_vue_vue_type_script_lang_default, [["render", _sfc_render12], ["__file", "arrow-up.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/camera.vue?vue&type=script&lang.ts
var camera_vue_vue_type_script_lang_default = {
  name: "Camera"
};
var _hoisted_131 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_231 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_330 = [
  _hoisted_231
];
function _sfc_render31(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_131, _hoisted_330);
}
var camera_default = /* @__PURE__ */ export_helper_default(camera_vue_vue_type_script_lang_default, [["render", _sfc_render31], ["__file", "camera.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/check.vue?vue&type=script&lang.ts
var check_vue_vue_type_script_lang_default = {
  name: "Check"
};
var _hoisted_143 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_243 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_342 = [
  _hoisted_243
];
function _sfc_render43(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_143, _hoisted_342);
}
var check_default = /* @__PURE__ */ export_helper_default(check_vue_vue_type_script_lang_default, [["render", _sfc_render43], ["__file", "check.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/close.vue?vue&type=script&lang.ts
var close_vue_vue_type_script_lang_default = {
  name: "Close"
};
var _hoisted_156 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_256 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_355 = [
  _hoisted_256
];
function _sfc_render56(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_156, _hoisted_355);
}
var close_default = /* @__PURE__ */ export_helper_default(close_vue_vue_type_script_lang_default, [["render", _sfc_render56], ["__file", "close.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/delete.vue?vue&type=script&lang.ts
var delete_vue_vue_type_script_lang_default = {
  name: "Delete"
};
var _hoisted_180 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_280 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_379 = [
  _hoisted_280
];
function _sfc_render80(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_180, _hoisted_379);
}
var delete_default = /* @__PURE__ */ export_helper_default(delete_vue_vue_type_script_lang_default, [["render", _sfc_render80], ["__file", "delete.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/edit-pen.vue?vue&type=script&lang.ts
var edit_pen_vue_vue_type_script_lang_default = {
  name: "EditPen"
};
var _hoisted_193 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_293 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_392 = [
  _hoisted_293
];
function _sfc_render93(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_193, _hoisted_392);
}
var edit_pen_default = /* @__PURE__ */ export_helper_default(edit_pen_vue_vue_type_script_lang_default, [["render", _sfc_render93], ["__file", "edit-pen.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/edit.vue?vue&type=script&lang.ts
var edit_vue_vue_type_script_lang_default = {
  name: "Edit"
};
var _hoisted_194 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_294 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_393 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_431 = [
  _hoisted_294,
  _hoisted_393
];
function _sfc_render94(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_194, _hoisted_431);
}
var edit_default = /* @__PURE__ */ export_helper_default(edit_vue_vue_type_script_lang_default, [["render", _sfc_render94], ["__file", "edit.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/lock.vue?vue&type=script&lang.ts
var lock_vue_vue_type_script_lang_default = {
  name: "Lock"
};
var _hoisted_1154 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2154 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3153 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_442 = [
  _hoisted_2154,
  _hoisted_3153
];
function _sfc_render154(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1154, _hoisted_442);
}
var lock_default = /* @__PURE__ */ export_helper_default(lock_vue_vue_type_script_lang_default, [["render", _sfc_render154], ["__file", "lock.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/notification.vue?vue&type=script&lang.ts
var notification_vue_vue_type_script_lang_default = {
  name: "Notification"
};
var _hoisted_1183 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2183 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3182 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_454 = [
  _hoisted_2183,
  _hoisted_3182
];
function _sfc_render183(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1183, _hoisted_454);
}
var notification_default = /* @__PURE__ */ export_helper_default(notification_vue_vue_type_script_lang_default, [["render", _sfc_render183], ["__file", "notification.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/paperclip.vue?vue&type=script&lang.ts
var paperclip_vue_vue_type_script_lang_default = {
  name: "Paperclip"
};
var _hoisted_1190 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2190 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3189 = [
  _hoisted_2190
];
function _sfc_render190(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1190, _hoisted_3189);
}
var paperclip_default = /* @__PURE__ */ export_helper_default(paperclip_vue_vue_type_script_lang_default, [["render", _sfc_render190], ["__file", "paperclip.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/plus.vue?vue&type=script&lang.ts
var plus_vue_vue_type_script_lang_default = {
  name: "Plus"
};
var _hoisted_1201 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2201 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3200 = [
  _hoisted_2201
];
function _sfc_render201(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1201, _hoisted_3200);
}
var plus_default = /* @__PURE__ */ export_helper_default(plus_vue_vue_type_script_lang_default, [["render", _sfc_render201], ["__file", "plus.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/search.vue?vue&type=script&lang.ts
var search_vue_vue_type_script_lang_default = {
  name: "Search"
};
var _hoisted_1225 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2225 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3224 = [
  _hoisted_2225
];
function _sfc_render225(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1225, _hoisted_3224);
}
var search_default = /* @__PURE__ */ export_helper_default(search_vue_vue_type_script_lang_default, [["render", _sfc_render225], ["__file", "search.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/setting.vue?vue&type=script&lang.ts
var setting_vue_vue_type_script_lang_default = {
  name: "Setting"
};
var _hoisted_1231 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2231 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3230 = [
  _hoisted_2231
];
function _sfc_render231(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1231, _hoisted_3230);
}
var setting_default = /* @__PURE__ */ export_helper_default(setting_vue_vue_type_script_lang_default, [["render", _sfc_render231], ["__file", "setting.vue"]]);

// unplugin-vue:/home/runner/work/element-plus-icons/element-plus-icons/packages/vue/src/components/user.vue?vue&type=script&lang.ts
var user_vue_vue_type_script_lang_default = {
  name: "User"
};
var _hoisted_1277 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _hoisted_2277 = /* @__PURE__ */ vue.createElementVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
  },
  null,
  -1
  /* HOISTED */
), _hoisted_3276 = [
  _hoisted_2277
];
function _sfc_render277(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1277, _hoisted_3276);
}
var user_default = /* @__PURE__ */ export_helper_default(user_vue_vue_type_script_lang_default, [["render", _sfc_render277], ["__file", "user.vue"]]);

var _withScopeId$5 = function _withScopeId(n) {
  return vue.pushScopeId("data-v-3290dcb6"), n = n(), vue.popScopeId(), n;
};
var _hoisted_1$x = {
  "class": "fy-input-wrap"
};
var _hoisted_2$l = /*#__PURE__*/_withScopeId$5(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    "class": "card-title"
  }, " 搜索范围 ", -1 /* HOISTED */);
});
var _hoisted_3$e = {
  "class": "card-item-name"
};
var script$A = /*#__PURE__*/Object.assign({
  name: 'FYInput'
}, {
  __name: 'input',
  props: {
    // 圆角
    round: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": '请输入'
    },
    limit: {
      type: [Number, String],
      "default": 0
    },
    type: {
      type: String,
      "default": 'text'
    },
    textarea: {
      type: [Array, String, Boolean],
      "default": undefined
    },
    // 是否伸缩
    flex: {
      type: Boolean,
      "default": false
    },
    // 是否有筛选看
    filterList: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // 是否可筛选多个
    filterMultiple: {
      type: Boolean,
      "default": false
    },
    // 定义value,防止绑定value到原生标签上影响后续v-model的使用
    // eslint-disable-next-line
    value: {},
    // 辅助树状结构组件的自动focus功能
    autoFocus: {
      type: [Boolean, String],
      "default": false
    }
  },
  emits: ['focus', 'blur', 'switchChange'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var props = __props;
    var slot = vue.useSlots();
    var getClass = vue.computed(function () {
      return ['fy-input', props.round ? 'round' : ''].filter(Boolean);
    });
    var getType = vue.computed(function () {
      if (props.type !== 'text' && props.type) {
        return props.type;
      }
      if (!props.textarea && props.textarea !== '') {
        return 'text';
      }
      return 'textarea';
    });
    var getAutosize = vue.computed(function () {
      if (props.textarea && props.textarea.length) {
        return {
          minRows: props.textarea[0],
          maxRows: props.textarea[1]
        };
      }
      if (props.textarea === '' || props.textarea) {
        return {
          minRows: 2,
          maxRows: 4
        };
      }
      return false;
    });
    var handleFocus = function handleFocus(e) {
      if (props.flex) {
        // 伸缩
        e.srcElement.style.width = "".concat(e.srcElement.getBoundingClientRect().width + 100, "px");
      }
    };
    var handleBlur = function handleBlur(e) {
      if (props.flex) {
        e.srcElement.style.width = "".concat(e.srcElement.getBoundingClientRect().width - 100, "px");
      }
      emit('blur', e);
    };
    var isFilter = vue.ref(false);
    var handleIconClick = function handleIconClick() {
      isFilter.value = !isFilter.value;
      return null;
    };
    var filterClose = function filterClose() {
      isFilter.value = false;
    };
    var switchGroupValue = vue.ref([]);
    switchGroupValue.value = props.filterMultiple ? props.filterList.map(function (item) {
      return {
        id: item.id,
        value: item.value
      };
    }) : props.filterList.map(function (item, idx) {
      return {
        id: item.id,
        value: idx === 0
      };
    });

    // 主动触发对外暴露
    emit('switchChange', switchGroupValue.value);
    var switchChange = function switchChange(val, index) {
      if (!props.filterMultiple) {
        switchGroupValue.value.forEach(function (s, switchIdx) {
          if (!(switchIdx === index && val === true)) {
            s.value = false;
          }
        });
      }
      emit('switchChange', switchGroupValue.value);
    };
    var myRef = vue.ref(null);
    // 树状结构中的input自动focus
    setTimeout(function () {
      if (props.autoFocus !== false) {
        myRef.value.focus();
      }
    }, 0);
    // 树状结构回车后的blur效果
    var handleEnter = function handleEnter() {
      emit('enter', props.modelValue);
      myRef.value.blur();
    };
    return function (_ctx, _cache) {
      var _directive_click_outside = vue.resolveDirective("click-outside");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$x, [vue.createVNode(vue.unref(ElementPlus.ElInput), vue.mergeProps(_ctx.$attrs, {
        ref_key: "myRef",
        ref: myRef,
        "class": getClass.value,
        placeholder: props.placeholder,
        "show-word-limit": !!props.limit,
        maxlength: props.limit ? props.limit : '',
        type: getType.value,
        autosize: getAutosize.value,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyup: vue.withKeys(handleEnter, ["enter"])
      }), vue.createSlots({
        _: 2 /* DYNAMIC */
      }, [vue.unref(slot) && vue.unref(slot).prefix ? {
        name: "prefix",
        fn: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "prefix")];
        }),
        key: "0"
      } : undefined, vue.unref(slot) && vue.unref(slot).suffix || props.filterList && props.filterList.length ? {
        name: "suffix",
        fn: vue.withCtx(function () {
          return [props.filterList && props.filterList.length ? (vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElIcon), {
            key: 0
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(arrow_down_default), {
                "class": vue.normalizeClass([{
                  'arrow-select': isFilter.value
                }, 'my-arrow-down']),
                onClick: vue.withModifiers(handleIconClick, ["stop"])
              }, null, 8 /* PROPS */, ["class", "onClick"])];
            }),
            _: 1 /* STABLE */
          })) : vue.renderSlot(_ctx.$slots, "suffix", {
            key: 1
          })];
        }),
        key: "1"
      } : undefined]), 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["class", "placeholder", "show-word-limit", "maxlength", "type", "autosize", "onKeyup"]), props.filterList && props.filterList.length ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: 0
      }, [isFilter.value ? vue.withDirectives((vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElCard), {
        key: 0,
        "class": "fy-input-card"
      }, {
        "default": vue.withCtx(function () {
          return [_hoisted_2$l, (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.filterList, function (item, index) {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: index,
              "class": "card-item"
            }, [vue.createElementVNode("span", _hoisted_3$e, vue.toDisplayString(item.name), 1 /* TEXT */), vue.createVNode(vue.unref(ElementPlus.ElSwitch), {
              modelValue: switchGroupValue.value[index].value,
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return switchGroupValue.value[index].value = $event;
              },
              name: item.name,
              "class": "card-item-value",
              onChange: function onChange(val) {
                switchChange(val, index);
              }
            }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "name", "onChange"])]);
          }), 128 /* KEYED_FRAGMENT */))];
        }),

        _: 1 /* STABLE */
      })), [[_directive_click_outside, filterClose, "my-arrow-down"]]) : vue.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */)) : vue.createCommentVNode("v-if", true)]);
    };
  }
});

script$A.__scopeId = "data-v-3290dcb6";
script$A.__file = "packages/components/input/src/input.vue";

var FYInput = tool.withInstall(script$A);

var _hoisted_1$w = {
  style: {
    "width": "100%",
    "display": "flex",
    "justify-items": "center",
    "align-items": "center",
    "column-gap": "0.5rem"
  }
};
var script$z = /*#__PURE__*/Object.assign({
  name: 'FYCascader'
}, {
  __name: 'cascader',
  props: {
    defaultIcon: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(__props) {
    var hasDefaultSlot = vue.computed(function () {
      var slots = vue.useSlots();
      return slots["default"];
    });
    var defaultIconStyle = vue.computed(function () {
      return {
        borderRadius: '50%',
        background: tool.getRandomColor(),
        width: '18px',
        height: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      };
    });
    return function (_ctx, _cache) {
      var _component_el_cascader = vue.resolveComponent("el-cascader");
      return vue.openBlock(), vue.createBlock(_component_el_cascader, vue.mergeProps(_ctx.$attrs, {
        style: {
          "width": "100%"
        }
      }), {
        "default": vue.withCtx(function (_ref) {
          var data = _ref.data,
            node = _ref.node;
          return [vue.createCommentVNode("   外部插槽传入    "), hasDefaultSlot.value ? vue.renderSlot(_ctx.$slots, "default", {
            key: 0,
            data: data,
            node: node
          }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, [vue.createCommentVNode("   外部插槽不传入    "), vue.createElementVNode("div", _hoisted_1$w, [vue.createCommentVNode("   data item 是否传入icon    "), data.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(data.icon), {
            key: 0
          })) : __props.defaultIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, [vue.createCommentVNode("  data item 没有传入icon默认展示第一个字作为图标   "), vue.createElementVNode("div", {
            style: vue.normalizeStyle(defaultIconStyle.value)
          }, vue.toDisplayString(data.label.slice(0, 1)), 5 /* TEXT, STYLE */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : vue.createCommentVNode("v-if", true), vue.createElementVNode("span", null, vue.toDisplayString(data.label), 1 /* TEXT */)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))];
        }),

        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */);
    };
  }
});

script$z.__scopeId = "data-v-d04c1c76";
script$z.__file = "packages/components/cascader/src/cascader.vue";

var FYCascader = tool.withInstall(script$z);

function useDisabledDate(props) {
  var disabledDate = function disabledDate(time) {
    if (props.disableLessThan) return disableLessThanCurDate(time);
    if (props.disableMoreThan) return disableGreaterThanCurDate(time);
    return false;
  };

  // 禁用大于当前时间的选择
  var disableLessThanCurDate = function disableLessThanCurDate(time) {
    return new Date(time).getTime() > new Date().getTime();
  };

  // 禁用小于当前时间的选择
  var disableGreaterThanCurDate = function disableGreaterThanCurDate(time) {
    return !disableLessThanCurDate(time);
  };
  return disabledDate;
}

var _hoisted_1$v = {
  "class": "fy-date-picker",
  style: {
    "width": "100%"
  }
};
var script$y = /*#__PURE__*/Object.assign({
  name: 'FYDatePicker'
}, {
  __name: 'date-picker',
  props: {
    disableLessThan: {
      // 禁用小于当前时间的选择
      type: Boolean,
      "default": false
    },
    disableMoreThan: {
      // 禁用大于当前时间的选择
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(__props) {
    var props = __props;

    // 时间禁用函数
    var disabledDate = useDisabledDate(props);
    return function (_ctx, _cache) {
      var _component_el_date_picker = vue.resolveComponent("el-date-picker");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$v, [vue.createVNode(_component_el_date_picker, vue.mergeProps({
        type: "monthrange",
        "range-separator": "To",
        placeholder: "请选择",
        "start-placeholder": "请选择",
        "end-placeholder": "请选择",
        "disabled-date": vue.unref(disabledDate)
      }, _ctx.$attrs), null, 16 /* FULL_PROPS */, ["disabled-date"])]);
    };
  }
});

script$y.__scopeId = "data-v-1f7de0aa";
script$y.__file = "packages/components/date-picker/src/date-picker.vue";

function createRangeDatePicker() {
  var startValue = vue.ref('');
  var endValue = vue.ref('');

  // 开始日期
  var StartDatePicker = vue.defineComponent({
    setup: function setup(_, _ref) {
      var attrs = _ref.attrs;
      return function () {
        return vue.createVNode(script$y, tool._objectSpread2({
          "type": "datetime",
          "modelValue": startValue.value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return startValue.value = $event;
          },
          "disabledDate": function disabledDate(time) {
            return new Date(time) > new Date(endValue.value);
          }
        }, attrs), null);
      };
    }
  });

  // 截止日期
  var EndDatePicker = vue.defineComponent({
    setup: function setup() {
      return function (_, _ref2) {
        var attrs = _ref2.attrs;
        return vue.createVNode(script$y, tool._objectSpread2({
          "type": "datetime",
          "disabledDate": function disabledDate(time) {
            return new Date(time) < new Date(startValue.value);
          },
          "modelValue": endValue.value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return endValue.value = $event;
          }
        }, attrs), null);
      };
    }
  });
  return {
    StartDatePicker: StartDatePicker,
    EndDatePicker: EndDatePicker,
    startValue: startValue,
    endValue: endValue
  };
}

var FYDatePicker = tool.withInstall(script$y);

var _hoisted_1$u = /*#__PURE__*/vue.createElementVNode("svg", {
  width: "840",
  height: "363",
  viewBox: "0 0 840 363",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/vue.createElementVNode("g", {
  "clip-path": "url(#clip0_1_446)"
}, [/*#__PURE__*/vue.createElementVNode("path", {
  d: "M840 318.5L839.77 322.623L839.081 326.72L837.953 330.789L836.375 334.841L834.348 338.88L831.862 342.9L828.348 347.621L824.224 352.302L819.481 356.943L814.089 361.557L808.028 366.145L801.568 370.531L794.498 374.864L786.8 379.148L778.452 383.383L769.436 387.573L760.2 391.518L750.354 395.382L739.89 399.175L728.777 402.892L716.985 406.534L705.072 409.929L692.731 413.178L679.95 416.288L666.72 419.26L653.02 422.08L639.261 424.686L625.162 427.136L610.714 429.425L595.906 431.554L580.729 433.522L565.552 435.285L550.135 436.873L534.458 438.288L518.522 439.524L502.317 440.586L486.161 441.447L469.845 442.121L453.39 442.607L436.775 442.897L420 443L403.225 442.897L386.61 442.607L370.155 442.121L353.839 441.447L337.683 440.586L321.478 439.524L305.542 438.288L289.865 436.873L274.448 435.285L259.271 433.522L244.094 431.554L229.286 429.425L214.838 427.136L200.739 424.686L186.98 422.08L173.28 419.26L160.05 416.288L147.269 413.178L134.928 409.929L123.015 406.534L111.223 402.892L100.11 399.175L89.6455 395.382L79.8003 391.518L70.5642 387.573L61.5477 383.383L53.2002 379.148L45.5018 374.864L38.4324 370.531L31.972 366.145L25.9111 361.557L20.5192 356.943L15.7763 352.302L11.6525 347.621L8.13779 342.9L5.65153 338.88L3.62456 334.841L2.04693 330.789L0.91862 326.72L0.229659 322.623L0 318.5L0.229659 314.377L0.91862 310.28L2.04693 306.211L3.62456 302.159L5.65153 298.12L8.13779 294.1L11.6525 289.379L15.7763 284.698L20.5192 280.057L25.9111 275.443L31.972 270.855L38.4324 266.469L45.5018 262.136L53.2002 257.852L61.5477 253.617L70.5642 249.427L79.8003 245.482L89.6455 241.618L100.11 237.825L111.223 234.108L123.015 230.466L134.928 227.071L147.269 223.822L160.05 220.712L173.28 217.74L186.98 214.92L200.739 212.314L214.838 209.864L229.286 207.575L244.094 205.446L259.271 203.478L274.448 201.715L289.865 200.127L305.542 198.712L321.478 197.476L337.683 196.414L353.839 195.553L370.155 194.879L386.61 194.393L403.225 194.103L420 194L436.775 194.103L453.39 194.393L469.845 194.879L486.161 195.553L502.317 196.414L518.522 197.476L534.458 198.712L550.135 200.127L565.552 201.715L580.729 203.478L595.906 205.446L610.714 207.575L625.162 209.864L639.261 212.314L653.02 214.92L666.72 217.74L679.95 220.712L692.731 223.822L705.072 227.071L716.985 230.466L728.777 234.108L739.89 237.825L750.354 241.618L760.2 245.482L769.436 249.427L778.452 253.617L786.8 257.852L794.498 262.136L801.568 266.469L808.028 270.855L814.089 275.443L819.481 280.057L824.224 284.698L828.348 289.379L831.862 294.1L834.348 298.12L836.375 302.159L837.953 306.211L839.081 310.28L839.77 314.377L840 318.5Z",
  fill: "url(#paint0_radial_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  d: "M138.193 291H148.557V345.67L148.358 347.12L147.858 348.36L147.04 349.44L145.991 350.28L144.783 350.8L143.375 351L141.967 350.8L140.769 350.28L139.711 349.44L138.902 348.36L138.393 347.12L138.193 345.67V291Z",
  fill: "#3F78D6"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M138.193 261L162.387 324.33L138.193 341V261Z",
  fill: "url(#paint1_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M138.193 261L117.454 331L138.193 341V261Z",
  fill: "url(#paint2_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  d: "M714.558 249H722.546V291.82L722.226 293.46L721.378 294.78L720.11 295.67L718.552 296L716.994 295.67L715.726 294.78L714.877 293.46L714.558 291.82V249Z",
  fill: "#3F78D6"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M714.558 226L733.529 275.08L714.558 288V226Z",
  fill: "url(#paint3_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M714.558 226L698.582 280.25L714.558 288V226Z",
  fill: "url(#paint4_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  d: "M189.346 217H197.334V258L197.014 259.57L196.166 260.83L194.908 261.68L193.34 262L191.772 261.68L190.514 260.83L189.665 259.57L189.346 258V217Z",
  fill: "#3F78D6"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M189.346 194L207.319 241.5L189.346 254V194Z",
  fill: "url(#paint5_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M189.346 194L173.37 246.5L189.346 254V194Z",
  fill: "url(#paint6_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M315.357 13.01H487.439L490.694 13.31L493.67 14.13L496.425 15.46L498.922 17.24L501.038 19.37L502.816 21.89L504.124 24.67L504.943 27.67L505.242 30.94V252.08L504.943 255.35L504.124 258.35L502.816 261.13L501.038 263.65L498.922 265.78L496.425 267.56L493.67 268.89L490.694 269.71L487.439 270.01H315.357L312.102 269.71L309.126 268.89L306.37 267.56L303.874 265.78L301.757 263.65L299.98 261.13L298.672 258.35L297.853 255.35L297.554 252.08V30.94L297.853 27.67L298.672 24.67L299.98 21.89L301.757 19.37L303.874 17.24L306.37 15.46L309.126 14.13L312.102 13.31L315.357 13.01Z",
  fill: "#A2D2FE"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M315.357 13.01H487.439L490.694 13.31L493.67 14.13L496.425 15.46L498.922 17.24L501.038 19.37L502.816 21.89L504.124 24.67L504.943 27.67L505.242 30.94V252.08L504.943 255.35L504.124 258.35L502.816 261.13L501.038 263.65L498.922 265.78L496.425 267.56L493.67 268.89L490.694 269.71L487.439 270.01H315.357L312.102 269.71L309.126 268.89L306.37 267.56L303.874 265.78L301.757 263.65L299.98 261.13L298.672 258.35L297.853 255.35L297.554 252.08V30.94L297.853 27.67L298.672 24.67L299.98 21.89L301.757 19.37L303.874 17.24L306.37 15.46L309.126 14.13L312.102 13.31L315.357 13.01Z",
  fill: "url(#paint7_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M461.358 75.92H372.172L370.554 75.69L369.166 75.11L367.968 74.17L367.029 72.97L366.45 71.58L366.221 69.96L366.45 68.35L367.029 66.96L367.968 65.75L369.166 64.82L370.554 64.24L372.172 64.01H461.358L462.965 64.24L464.353 64.82L465.562 65.75L466.49 66.96L467.069 68.35L467.299 69.96L467.069 71.58L466.49 72.97L465.562 74.17L464.353 75.11L462.965 75.69L461.358 75.92ZM372.172 141.41H395.956L397.564 141.63L398.951 142.21L400.16 143.15L401.088 144.36L401.667 145.74L401.897 147.36L401.667 148.98L401.088 150.36L400.16 151.57L398.951 152.51L397.564 153.08L395.956 153.31H372.172L370.554 153.08L369.166 152.5L367.968 151.57L367.029 150.36L366.45 148.98L366.221 147.36L366.45 145.74L367.029 144.36L367.968 143.15L369.166 142.21L370.554 141.63L372.172 141.41ZM351.363 192.01H342.436L340.829 191.78L339.441 191.2L338.233 190.27L337.304 189.06L336.725 187.67L336.495 186.06L336.725 184.44L337.304 183.05L338.233 181.85L339.441 180.91L340.829 180.33L342.436 180.1H351.363L352.97 180.33L354.358 180.91L355.567 181.85L356.495 183.05L357.074 184.44L357.304 186.06L357.074 187.67L356.495 189.06L355.567 190.27L354.358 191.2L352.97 191.78L351.363 192.01ZM351.363 153.31H342.436L340.829 153.08L339.441 152.5L338.233 151.57L337.304 150.36L336.725 148.98L336.495 147.36L336.725 145.74L337.304 144.36L338.233 143.15L339.441 142.21L340.829 141.63L342.436 141.41H351.363L352.97 141.63L354.358 142.21L355.567 143.15L356.495 144.36L357.074 145.74L357.304 147.36L357.074 148.98L356.495 150.36L355.567 151.57L354.358 152.51L352.97 153.08L351.363 153.31ZM351.363 114.61H342.436L340.829 114.39L339.441 113.81L338.233 112.87L337.304 111.66L336.725 110.28L336.495 108.66L336.725 107.04L337.304 105.66L338.233 104.45L339.441 103.52L340.829 102.94L342.436 102.71H351.363L352.97 102.94L354.358 103.51L355.567 104.45L356.495 105.66L357.074 107.04L357.304 108.66L357.074 110.28L356.495 111.66L355.567 112.87L354.358 113.81L352.97 114.39L351.363 114.61ZM351.363 75.92H342.436L340.829 75.69L339.441 75.11L338.233 74.17L337.304 72.97L336.725 71.58L336.495 69.96L336.725 68.35L337.304 66.96L338.233 65.75L339.441 64.82L340.829 64.24L342.436 64.01H351.363L352.97 64.24L354.358 64.82L355.567 65.75L356.495 66.96L357.074 68.35L357.304 69.96L357.074 71.58L356.495 72.97L355.567 74.17L354.358 75.11L352.97 75.69L351.363 75.92ZM372.172 180.1H395.956L397.564 180.33L398.951 180.91L400.16 181.85L401.088 183.05L401.667 184.44L401.897 186.06L401.667 187.67L401.088 189.06L400.16 190.27L398.951 191.2L397.564 191.78L395.956 192.01H372.172L370.554 191.78L369.166 191.2L367.968 190.27L367.029 189.06L366.45 187.67L366.221 186.06L366.45 184.44L367.029 183.05L367.968 181.85L369.166 180.91L370.554 180.33L372.172 180.1ZM366.221 108.66L366.45 107.04L367.029 105.66L367.968 104.45L369.166 103.52L370.554 102.94L372.172 102.71H458.382L460 102.94L461.378 103.52L462.586 104.45L463.525 105.66L464.094 107.04L464.323 108.66L464.094 110.28L463.525 111.66L462.586 112.87L461.378 113.81L460 114.39L458.382 114.61H372.172L370.554 114.39L369.166 113.81L367.968 112.87L367.029 111.66L366.45 110.28L366.221 108.66Z",
  fill: "#F9FAFF"
}), /*#__PURE__*/vue.createElementVNode("path", {
  d: "M461.358 75.92H372.172L370.554 75.69L369.166 75.11L367.968 74.17L367.029 72.97L366.45 71.58L366.221 69.96L366.45 68.35L367.029 66.96L367.968 65.75L369.166 64.82L370.554 64.24L372.172 64.01H461.358L462.965 64.24L464.353 64.82L465.562 65.75L466.49 66.96L467.069 68.35L467.299 69.96L467.069 71.58L466.49 72.97L465.562 74.17L464.353 75.11L462.965 75.69L461.358 75.92ZM372.172 141.41H395.956L397.564 141.63L398.951 142.21L400.16 143.15L401.088 144.36L401.667 145.74L401.897 147.36L401.667 148.98L401.088 150.36L400.16 151.57L398.951 152.51L397.564 153.08L395.956 153.31H372.172L370.554 153.08L369.166 152.5L367.968 151.57L367.029 150.36L366.45 148.98L366.221 147.36L366.45 145.74L367.029 144.36L367.968 143.15L369.166 142.21L370.554 141.63L372.172 141.41ZM351.363 192.01H342.436L340.829 191.78L339.441 191.2L338.233 190.27L337.304 189.06L336.725 187.67L336.495 186.06L336.725 184.44L337.304 183.05L338.233 181.85L339.441 180.91L340.829 180.33L342.436 180.1H351.363L352.97 180.33L354.358 180.91L355.567 181.85L356.495 183.05L357.074 184.44L357.304 186.06L357.074 187.67L356.495 189.06L355.567 190.27L354.358 191.2L352.97 191.78L351.363 192.01ZM351.363 153.31H342.436L340.829 153.08L339.441 152.5L338.233 151.57L337.304 150.36L336.725 148.98L336.495 147.36L336.725 145.74L337.304 144.36L338.233 143.15L339.441 142.21L340.829 141.63L342.436 141.41H351.363L352.97 141.63L354.358 142.21L355.567 143.15L356.495 144.36L357.074 145.74L357.304 147.36L357.074 148.98L356.495 150.36L355.567 151.57L354.358 152.51L352.97 153.08L351.363 153.31ZM351.363 114.61H342.436L340.829 114.39L339.441 113.81L338.233 112.87L337.304 111.66L336.725 110.28L336.495 108.66L336.725 107.04L337.304 105.66L338.233 104.45L339.441 103.52L340.829 102.94L342.436 102.71H351.363L352.97 102.94L354.358 103.51L355.567 104.45L356.495 105.66L357.074 107.04L357.304 108.66L357.074 110.28L356.495 111.66L355.567 112.87L354.358 113.81L352.97 114.39L351.363 114.61ZM351.363 75.92H342.436L340.829 75.69L339.441 75.11L338.233 74.17L337.304 72.97L336.725 71.58L336.495 69.96L336.725 68.35L337.304 66.96L338.233 65.75L339.441 64.82L340.829 64.24L342.436 64.01H351.363L352.97 64.24L354.358 64.82L355.567 65.75L356.495 66.96L357.074 68.35L357.304 69.96L357.074 71.58L356.495 72.97L355.567 74.17L354.358 75.11L352.97 75.69L351.363 75.92ZM372.172 180.1H395.956L397.564 180.33L398.951 180.91L400.16 181.85L401.088 183.05L401.667 184.44L401.897 186.06L401.667 187.67L401.088 189.06L400.16 190.27L398.951 191.2L397.564 191.78L395.956 192.01H372.172L370.554 191.78L369.166 191.2L367.968 190.27L367.029 189.06L366.45 187.67L366.221 186.06L366.45 184.44L367.029 183.05L367.968 181.85L369.166 180.91L370.554 180.33L372.172 180.1ZM366.221 108.66L366.45 107.04L367.029 105.66L367.968 104.45L369.166 103.52L370.554 102.94L372.172 102.71H458.382L460 102.94L461.378 103.52L462.586 104.45L463.525 105.66L464.094 107.04L464.323 108.66L464.094 110.28L463.525 111.66L462.586 112.87L461.378 113.81L460 114.39L458.382 114.61H372.172L370.554 114.39L369.166 113.81L367.968 112.87L367.029 111.66L366.45 110.28L366.221 108.66Z",
  fill: "white"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M518.222 204.69L530.594 192.01L561.158 223.33L548.787 236.01L518.222 204.69Z",
  fill: "#6A9BED"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M536.645 221.55L547.718 210.46L549.516 209.09L551.503 208.28L553.62 208.01L555.736 208.28L557.733 209.09L559.531 210.46L598.652 245.21L600.02 247.01L600.829 249L601.098 251.12L600.829 253.24L600.02 255.24L598.652 257.04L583.145 272.56L581.358 273.93L579.361 274.74L577.244 275.01L575.127 274.74L573.14 273.93L571.343 272.56L536.645 233.38L535.277 231.58L534.468 229.59L534.199 227.46L534.468 225.34L535.277 223.35L536.645 221.55Z",
  fill: "#999999"
}), /*#__PURE__*/vue.createElementVNode("path", {
  d: "M536.645 221.55L547.718 210.46L549.516 209.09L551.503 208.28L553.62 208.01L555.736 208.28L557.733 209.09L559.531 210.46L598.652 245.21L600.02 247.01L600.829 249L601.098 251.12L600.829 253.24L600.02 255.24L598.652 257.04L583.145 272.56L581.358 273.93L579.361 274.74L577.244 275.01L575.127 274.74L573.14 273.93L571.343 272.56L536.645 233.38L535.277 231.58L534.468 229.59L534.199 227.46L534.468 225.34L535.277 223.35L536.645 221.55Z",
  fill: "url(#paint8_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  d: "M536.645 221.55L547.718 210.46L549.516 209.09L551.503 208.28L553.62 208.01L555.736 208.28L557.733 209.09L559.531 210.46L598.652 245.21L600.02 247.01L600.829 249L601.098 251.12L600.829 253.24L600.02 255.24L598.652 257.04L583.145 272.56L581.358 273.93L579.361 274.74L577.244 275.01L575.127 274.74L573.14 273.93L571.343 272.56L536.645 233.38L535.277 231.58L534.468 229.59L534.199 227.46L534.468 225.34L535.277 223.35L536.645 221.55Z",
  fill: "url(#paint9_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M487.768 224.01L481.837 223.76L476.116 223.06L470.574 221.93L465.202 220.36L459.94 218.37L454.937 216.02L450.165 213.3L445.601 210.21L441.288 206.78L437.284 203.07L433.579 199.06L430.155 194.74L427.069 190.17L424.353 185.39L422.007 180.38L420.02 175.11L418.452 169.73L417.324 164.18L416.625 158.45L416.375 152.51L416.625 146.57L417.324 140.84L418.452 135.29L420.02 129.91L422.007 124.64L424.353 119.63L427.069 114.85L430.155 110.28L433.579 105.96L437.284 101.95L441.288 98.24L445.601 94.81L450.165 91.72L454.937 89L459.94 86.65L465.202 84.66L470.574 83.09L476.116 81.96L481.837 81.26L487.768 81.01L493.699 81.26L499.421 81.96L504.962 83.09L510.334 84.66L515.596 86.65L520.599 89L525.372 91.72L529.935 94.81L534.248 98.24L538.252 101.95L541.957 105.96L545.382 110.28L548.467 114.85L551.183 119.63L553.529 124.64L555.526 129.91L557.084 135.29L558.212 140.84L558.911 146.57L559.161 152.51L558.911 158.45L558.212 164.18L557.084 169.73L555.517 175.11L553.529 180.38L551.183 185.39L548.467 190.17L545.382 194.74L541.957 199.06L538.252 203.07L534.248 206.78L529.935 210.21L525.372 213.3L520.599 216.02L515.596 218.37L510.334 220.36L504.962 221.93L499.421 223.06L493.699 223.76L487.768 224.01ZM487.768 95.91L482.516 96.19L477.504 96.95L472.701 98.18L468.088 99.89L463.634 102.04L459.481 104.56L455.616 107.46L452.012 110.74L448.737 114.35L445.841 118.22L443.325 122.38L441.168 126.84L439.471 131.46L438.242 136.27L437.484 141.29L437.194 146.55L437.484 151.81L438.242 156.83L439.471 161.64L441.168 166.27L443.325 170.73L445.841 174.88L448.737 178.76L452.012 182.36L455.616 185.64L459.481 188.54L463.634 191.06L468.088 193.22L472.701 194.92L477.504 196.15L482.516 196.92L487.768 197.2L493.02 196.92L498.033 196.15L502.836 194.92L507.449 193.22L511.902 191.06L516.056 188.54L519.92 185.64L523.525 182.36L526.8 178.76L529.695 174.88L532.211 170.73L534.368 166.27L536.066 161.64L537.294 156.83L538.053 151.81L538.342 146.55L538.053 141.29L537.294 136.27L536.066 131.46L534.368 126.84L532.211 122.38L529.695 118.22L526.8 114.35L523.525 110.74L519.92 107.46L516.056 104.56L511.902 102.04L507.449 99.89L502.836 98.18L498.033 96.95L493.02 96.19L487.768 95.91Z",
  fill: "#E5E5E5"
}), /*#__PURE__*/vue.createElementVNode("path", {
  d: "M487.768 224.01L481.837 223.76L476.116 223.06L470.574 221.93L465.202 220.36L459.94 218.37L454.937 216.02L450.165 213.3L445.601 210.21L441.288 206.78L437.284 203.07L433.579 199.06L430.155 194.74L427.069 190.17L424.353 185.39L422.007 180.38L420.02 175.11L418.452 169.73L417.324 164.18L416.625 158.45L416.375 152.51L416.625 146.57L417.324 140.84L418.452 135.29L420.02 129.91L422.007 124.64L424.353 119.63L427.069 114.85L430.155 110.28L433.579 105.96L437.284 101.95L441.288 98.24L445.601 94.81L450.165 91.72L454.937 89L459.94 86.65L465.202 84.66L470.574 83.09L476.116 81.96L481.837 81.26L487.768 81.01L493.699 81.26L499.421 81.96L504.962 83.09L510.334 84.66L515.596 86.65L520.599 89L525.372 91.72L529.935 94.81L534.248 98.24L538.252 101.95L541.957 105.96L545.382 110.28L548.467 114.85L551.183 119.63L553.529 124.64L555.526 129.91L557.084 135.29L558.212 140.84L558.911 146.57L559.161 152.51L558.911 158.45L558.212 164.18L557.084 169.73L555.517 175.11L553.529 180.38L551.183 185.39L548.467 190.17L545.382 194.74L541.957 199.06L538.252 203.07L534.248 206.78L529.935 210.21L525.372 213.3L520.599 216.02L515.596 218.37L510.334 220.36L504.962 221.93L499.421 223.06L493.699 223.76L487.768 224.01ZM487.768 95.91L482.516 96.19L477.504 96.95L472.701 98.18L468.088 99.89L463.634 102.04L459.481 104.56L455.616 107.46L452.012 110.74L448.737 114.35L445.841 118.22L443.325 122.38L441.168 126.84L439.471 131.46L438.242 136.27L437.484 141.29L437.194 146.55L437.484 151.81L438.242 156.83L439.471 161.64L441.168 166.27L443.325 170.73L445.841 174.88L448.737 178.76L452.012 182.36L455.616 185.64L459.481 188.54L463.634 191.06L468.088 193.22L472.701 194.92L477.504 196.15L482.516 196.92L487.768 197.2L493.02 196.92L498.033 196.15L502.836 194.92L507.449 193.22L511.902 191.06L516.056 188.54L519.92 185.64L523.525 182.36L526.8 178.76L529.695 174.88L532.211 170.73L534.368 166.27L536.066 161.64L537.294 156.83L538.053 151.81L538.342 146.55L538.053 141.29L537.294 136.27L536.066 131.46L534.368 126.84L532.211 122.38L529.695 118.22L526.8 114.35L523.525 110.74L519.92 107.46L516.056 104.56L511.902 102.04L507.449 99.89L502.836 98.18L498.033 96.95L493.02 96.19L487.768 95.91Z",
  fill: "url(#paint10_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M487.768 219.01L481.837 218.76L476.116 218.06L470.574 216.93L465.202 215.36L459.94 213.37L454.937 211.02L450.165 208.3L445.601 205.21L441.288 201.78L437.284 198.07L433.579 194.06L430.155 189.74L427.069 185.17L424.353 180.39L422.007 175.38L420.02 170.11L418.452 164.73L417.324 159.18L416.625 153.45L416.375 147.51L416.625 141.57L417.324 135.84L418.452 130.29L420.02 124.91L422.007 119.64L424.353 114.63L427.069 109.85L430.155 105.28L433.579 100.96L437.284 96.95L441.288 93.24L445.601 89.81L450.165 86.72L454.937 84L459.94 81.65L465.202 79.66L470.574 78.09L476.116 76.96L481.837 76.26L487.768 76.01L493.699 76.26L499.421 76.96L504.962 78.09L510.334 79.66L515.596 81.65L520.599 84L525.372 86.72L529.935 89.81L534.248 93.24L538.252 96.95L541.957 100.96L545.382 105.28L548.467 109.85L551.183 114.63L553.529 119.64L555.526 124.91L557.084 130.29L558.212 135.84L558.911 141.57L559.161 147.51L558.911 153.45L558.212 159.18L557.084 164.73L555.517 170.11L553.529 175.38L551.183 180.39L548.467 185.17L545.382 189.74L541.957 194.06L538.252 198.07L534.248 201.78L529.935 205.21L525.372 208.3L520.599 211.02L515.596 213.37L510.334 215.36L504.962 216.93L499.421 218.06L493.699 218.76L487.768 219.01ZM487.768 96.86L482.516 97.15L477.504 97.91L472.701 99.14L468.088 100.84L463.634 103L459.481 105.52L455.616 108.42L452.012 111.7L448.737 115.31L445.841 119.18L443.325 123.34L441.168 127.8L439.471 132.42L438.242 137.23L437.484 142.25L437.194 147.51L437.484 152.77L438.242 157.79L439.471 162.6L441.168 167.22L443.325 171.68L445.841 175.84L448.737 179.71L452.012 183.32L455.616 186.6L459.481 189.5L463.634 192.02L468.088 194.18L472.701 195.88L477.504 197.11L482.516 197.87L487.768 198.16L493.02 197.87L498.033 197.11L502.836 195.88L507.449 194.18L511.902 192.02L516.056 189.5L519.92 186.6L523.525 183.32L526.8 179.71L529.695 175.84L532.211 171.68L534.368 167.22L536.066 162.6L537.294 157.79L538.053 152.77L538.342 147.51L538.053 142.25L537.294 137.23L536.066 132.42L534.368 127.8L532.211 123.34L529.695 119.18L526.8 115.31L523.525 111.7L519.92 108.42L516.056 105.52L511.902 103L507.449 100.84L502.836 99.14L498.033 97.91L493.02 97.15L487.768 96.86Z",
  fill: "#E5E5E5"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M487.768 219.01L481.837 218.76L476.116 218.06L470.574 216.93L465.202 215.36L459.94 213.37L454.937 211.02L450.165 208.3L445.601 205.21L441.288 201.78L437.284 198.07L433.579 194.06L430.155 189.74L427.069 185.17L424.353 180.39L422.007 175.38L420.02 170.11L418.452 164.73L417.324 159.18L416.625 153.45L416.375 147.51L416.625 141.57L417.324 135.84L418.452 130.29L420.02 124.91L422.007 119.64L424.353 114.63L427.069 109.85L430.155 105.28L433.579 100.96L437.284 96.95L441.288 93.24L445.601 89.81L450.165 86.72L454.937 84L459.94 81.65L465.202 79.66L470.574 78.09L476.116 76.96L481.837 76.26L487.768 76.01L493.699 76.26L499.421 76.96L504.962 78.09L510.334 79.66L515.596 81.65L520.599 84L525.372 86.72L529.935 89.81L534.248 93.24L538.252 96.95L541.957 100.96L545.382 105.28L548.467 109.85L551.183 114.63L553.529 119.64L555.526 124.91L557.084 130.29L558.212 135.84L558.911 141.57L559.161 147.51L558.911 153.45L558.212 159.18L557.084 164.73L555.517 170.11L553.529 175.38L551.183 180.39L548.467 185.17L545.382 189.74L541.957 194.06L538.252 198.07L534.248 201.78L529.935 205.21L525.372 208.3L520.599 211.02L515.596 213.37L510.334 215.36L504.962 216.93L499.421 218.06L493.699 218.76L487.768 219.01ZM487.768 96.86L482.516 97.15L477.504 97.91L472.701 99.14L468.088 100.84L463.634 103L459.481 105.52L455.616 108.42L452.012 111.7L448.737 115.31L445.841 119.18L443.325 123.34L441.168 127.8L439.471 132.42L438.242 137.23L437.484 142.25L437.194 147.51L437.484 152.77L438.242 157.79L439.471 162.6L441.168 167.22L443.325 171.68L445.841 175.84L448.737 179.71L452.012 183.32L455.616 186.6L459.481 189.5L463.634 192.02L468.088 194.18L472.701 195.88L477.504 197.11L482.516 197.87L487.768 198.16L493.02 197.87L498.033 197.11L502.836 195.88L507.449 194.18L511.902 192.02L516.056 189.5L519.92 186.6L523.525 183.32L526.8 179.71L529.695 175.84L532.211 171.68L534.368 167.22L536.066 162.6L537.294 157.79L538.053 152.77L538.342 147.51L538.053 142.25L537.294 137.23L536.066 132.42L534.368 127.8L532.211 123.34L529.695 119.18L526.8 115.31L523.525 111.7L519.92 108.42L516.056 105.52L511.902 103L507.449 100.84L502.836 99.14L498.033 97.91L493.02 97.15L487.768 96.86Z",
  fill: "url(#paint11_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M491.053 79L485.102 79.25L479.361 79.95L473.789 81.09L468.397 82.66L463.115 84.66L458.083 87.03L453.29 89.76L448.717 92.86L444.383 96.3L440.359 100.03L436.635 104.06L433.2 108.4L430.105 112.98L427.379 117.78L425.012 122.82L423.015 128.11L421.448 133.51L420.309 139.09L419.61 144.84L419.361 150.8L419.64 157.14L420.439 163.26L421.747 169.18L423.554 174.96L425.801 180.49L428.487 185.77L431.592 190.82L435.077 195.56L438.941 200.01L434.508 195.45L430.514 190.53L426.929 185.23L423.824 179.64L421.238 173.77L419.141 167.59L417.633 161.24L416.705 154.66L416.375 147.81L416.625 141.85L417.324 136.09L418.462 130.52L420.03 125.12L422.027 119.83L424.393 114.79L427.109 109.99L430.204 105.41L433.649 101.07L437.374 97.04L441.398 93.31L445.731 89.86L450.304 86.76L455.097 84.04L460.13 81.67L465.412 79.67L470.804 78.1L476.365 76.96L482.117 76.26L488.068 76.01L494.907 76.34L501.478 77.27L507.818 78.78L513.989 80.88L519.85 83.47L525.432 86.58L530.724 90.17L535.626 94.17L540.19 98.61L535.746 94.74L531.013 91.25L525.971 88.14L520.699 85.45L515.177 83.2L509.406 81.39L503.495 80.08L497.384 79.28L491.053 79Z",
  fill: "#E6ECFF",
  "fill-opacity": "0.8"
}), /*#__PURE__*/vue.createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M485.082 216.04L490.983 215.79L496.685 215.1L502.207 213.97L507.559 212.41L512.801 210.43L517.783 208.08L522.546 205.38L527.079 202.3L531.383 198.88L535.367 195.18L539.061 191.19L542.476 186.88L545.552 182.34L548.248 177.57L550.594 172.58L552.571 167.33L554.129 161.97L555.257 156.44L555.946 150.73L556.196 144.82L555.916 138.53L555.127 132.46L553.829 126.59L552.042 120.85L549.815 115.37L547.149 110.13L544.064 105.12L540.609 100.42L536.775 96.01L541.168 100.54L545.142 105.42L548.697 110.67L551.772 116.21L554.338 122.04L556.415 128.17L557.913 134.47L558.832 141L559.161 147.78L558.912 153.7L558.223 159.41L557.094 164.94L555.537 170.3L553.55 175.54L551.213 180.54L548.507 185.3L545.442 189.85L542.027 194.15L538.332 198.15L534.338 201.85L530.045 205.27L525.502 208.34L520.749 211.05L515.756 213.39L510.524 215.38L505.172 216.94L499.651 218.07L493.949 218.76L488.038 219.01L481.268 218.68L474.748 217.76L468.457 216.26L462.337 214.18L456.515 211.61L450.983 208.53L445.741 204.97L440.869 200.99L436.345 196.59L440.749 200.43L445.442 203.89L450.444 206.98L455.676 209.65L461.148 211.88L466.88 213.67L472.741 214.97L478.802 215.76L485.082 216.04Z",
  fill: "#F6F8FF"
}), /*#__PURE__*/vue.createElementVNode("path", {
  d: "M487.768 97.01L493 97.29L498.003 98.05L502.786 99.28L507.399 100.98L511.832 103.13L515.976 105.64L519.83 108.53L523.425 111.8L526.69 115.4L529.576 119.26L532.082 123.41L534.229 127.85L535.926 132.47L537.154 137.26L537.913 142.27L538.193 147.51L537.913 152.75L537.154 157.76L535.926 162.55L534.229 167.17L532.082 171.61L529.576 175.76L526.69 179.62L523.425 183.22L519.83 186.49L515.976 189.38L511.832 191.89L507.399 194.04L502.786 195.74L498.003 196.97L493 197.73L487.768 198.01L482.536 197.73L477.534 196.97L472.751 195.74L468.138 194.04L463.704 191.89L459.561 189.38L455.706 186.49L452.112 183.22L448.847 179.62L445.961 175.76L443.455 171.61L441.308 167.17L439.611 162.55L438.382 157.76L437.624 152.75L437.344 147.51L437.624 142.27L438.382 137.26L439.611 132.47L441.308 127.85L443.455 123.41L445.961 119.26L448.847 115.4L452.112 111.8L455.706 108.53L459.561 105.64L463.704 103.13L468.138 100.98L472.751 99.28L477.534 98.05L482.536 97.29L487.768 97.01Z",
  fill: "url(#paint12_linear_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  d: "M615.706 35.5L615.367 40.38L614.438 44.97L612.921 49.32L610.854 53.44L608.327 57.19L605.322 60.6L601.917 63.61L598.173 66.14L594.059 68.21L589.715 69.73L585.132 70.66L580.26 71L575.387 70.66L570.804 69.73L566.46 68.21L562.346 66.14L558.602 63.61L555.197 60.6L552.192 57.19L549.665 53.44L547.599 49.32L546.081 44.97L545.152 40.38L544.813 35.5L545.152 30.62L546.081 26.03L547.599 21.68L549.665 17.56L552.192 13.81L555.197 10.4L558.602 7.39001L562.346 4.86002L566.46 2.79001L570.804 1.27002L575.387 0.339996L580.26 0L585.132 0.339996L589.715 1.27002L594.059 2.79001L598.173 4.86002L601.917 7.39001L605.322 10.4L608.327 13.81L610.854 17.56L612.921 21.68L614.438 26.03L615.367 30.62L615.706 35.5Z",
  fill: "url(#paint13_radial_1_446)"
}), /*#__PURE__*/vue.createElementVNode("path", {
  d: "M274.218 174.5L273.889 178.06L273 181.32L271.562 184.34L269.625 187.08L267.309 189.4L264.573 191.34L261.557 192.78L258.302 193.67L254.748 194L251.193 193.67L247.938 192.78L244.922 191.34L242.186 189.4L239.87 187.08L237.933 184.34L236.495 181.32L235.606 178.06L235.277 174.5L235.606 170.94L236.495 167.68L237.933 164.66L239.87 161.92L242.186 159.6L244.922 157.66L247.938 156.22L251.193 155.33L254.748 155L258.302 155.33L261.557 156.22L264.573 157.66L267.309 159.6L269.625 161.92L271.562 164.66L273 167.68L273.889 170.94L274.218 174.5Z",
  fill: "url(#paint14_radial_1_446)",
  "fill-opacity": "0.562533"
})]), /*#__PURE__*/vue.createElementVNode("defs", null, [/*#__PURE__*/vue.createElementVNode("radialGradient", {
  id: "paint0_radial_1_446",
  cx: "0",
  cy: "0",
  r: "1",
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(420.369 202.929) rotate(90) scale(197.683 597.772)"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#0052D9",
  "stop-opacity": "0.151562"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "1",
  "stop-color": "#0052D9",
  "stop-opacity": "0"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint1_linear_1_446",
  x1: "150.29",
  y1: "261",
  x2: "150.29",
  y2: "341",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#72A0E8"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "0.993995",
  "stop-color": "#3981F7"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint2_linear_1_446",
  x1: "127.823",
  y1: "261",
  x2: "127.823",
  y2: "341",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  offset: "0.0127619",
  "stop-color": "#B7D2FF"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "1",
  "stop-color": "#93BBFF"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint3_linear_1_446",
  x1: "724.044",
  y1: "226",
  x2: "724.044",
  y2: "288",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#72A0E8"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "0.993995",
  "stop-color": "#3981F7"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint4_linear_1_446",
  x1: "706.57",
  y1: "226",
  x2: "706.57",
  y2: "288",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  offset: "0.0127619",
  "stop-color": "#B7D2FF"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "1",
  "stop-color": "#93BBFF"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint5_linear_1_446",
  x1: "198.332",
  y1: "194",
  x2: "198.332",
  y2: "254",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#72A0E8"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "0.993995",
  "stop-color": "#3981F7"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint6_linear_1_446",
  x1: "181.358",
  y1: "194",
  x2: "181.358",
  y2: "254",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  offset: "0.0127619",
  "stop-color": "#B7D2FF"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "1",
  "stop-color": "#93BBFF"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint7_linear_1_446",
  x1: "458.179",
  y1: "170.654",
  x2: "311.495",
  y2: "19.6947",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#5E9BFF"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "1",
  "stop-color": "#E2EDFF"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint8_linear_1_446",
  x1: "576.376",
  y1: "260.079",
  x2: "533.83",
  y2: "208.072",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#5B7FFF"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "0.99",
  "stop-color": "#92A9FD"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint9_linear_1_446",
  x1: "534.199",
  y1: "275.01",
  x2: "534.199",
  y2: "208.01",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#4D89EC"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "0.986673",
  "stop-color": "#B3D0FF"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint10_linear_1_446",
  x1: "416.375",
  y1: "224.01",
  x2: "416.375",
  y2: "81.01",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#4484EF"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "1",
  "stop-color": "#82B1FF"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint11_linear_1_446",
  x1: "547.364",
  y1: "163.727",
  x2: "426.3",
  y2: "62.8884",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#5E9BFF"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "1",
  "stop-color": "#E2EDFF"
})]), /*#__PURE__*/vue.createElementVNode("linearGradient", {
  id: "paint12_linear_1_446",
  x1: "437.344",
  y1: "198.01",
  x2: "437.344",
  y2: "97.01",
  gradientUnits: "userSpaceOnUse"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#B3C3FF",
  "stop-opacity": "0.50196"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "1",
  "stop-color": "#EDF1FF"
})]), /*#__PURE__*/vue.createElementVNode("radialGradient", {
  id: "paint13_radial_1_446",
  cx: "0",
  cy: "0",
  r: "1",
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(561.857 35.5) scale(46.9099 46.9803)"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#F2F7FF"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "1",
  "stop-color": "#99C0FF"
})]), /*#__PURE__*/vue.createElementVNode("radialGradient", {
  id: "paint14_radial_1_446",
  cx: "0",
  cy: "0",
  r: "1",
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "translate(244.639 174.5) scale(25.7674 25.8061)"
}, [/*#__PURE__*/vue.createElementVNode("stop", {
  "stop-color": "#F2F7FF"
}), /*#__PURE__*/vue.createElementVNode("stop", {
  offset: "1",
  "stop-color": "#99C0FF"
})]), /*#__PURE__*/vue.createElementVNode("clipPath", {
  id: "clip0_1_446"
}, [/*#__PURE__*/vue.createElementVNode("rect", {
  width: "840",
  height: "363",
  fill: "white"
})])])], -1 /* HOISTED */);

var script$x = /*#__PURE__*/Object.assign({
  name: 'FYEmpty'
}, {
  __name: 'empty',
  setup: function setup(__props) {
    return function (_ctx, _cache) {
      var _component_el_empty = vue.resolveComponent("el-empty");
      return vue.openBlock(), vue.createBlock(_component_el_empty, vue.normalizeProps(vue.guardReactiveProps(_ctx.$attrs)), {
        image: vue.withCtx(function () {
          return [_hoisted_1$u];
        }),
        _: 1 /* STABLE */
      }, 16 /* FULL_PROPS */);
    };
  }
});

script$x.__file = "packages/components/empty/src/empty.vue";

var FYEmpty = tool.withInstall(script$x);

var _withScopeId$4 = function _withScopeId(n) {
  return vue.pushScopeId("data-v-23758979"), n = n(), vue.popScopeId(), n;
};
var _hoisted_1$t = {
  "class": "timeline-wrap"
};
var _hoisted_2$k = /*#__PURE__*/_withScopeId$4(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    "class": "item"
  }, " 时间点2021 ", -1 /* HOISTED */);
});
var _hoisted_3$d = /*#__PURE__*/_withScopeId$4(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    "class": "item"
  }, " 时间点2022 ", -1 /* HOISTED */);
});
var _hoisted_4$c = /*#__PURE__*/_withScopeId$4(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    "class": "item"
  }, " 时间点2023 ", -1 /* HOISTED */);
});
var _hoisted_5$8 = /*#__PURE__*/_withScopeId$4(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    "class": "item"
  }, " 时间点2024 ", -1 /* HOISTED */);
});
var _hoisted_6$6 = [_hoisted_2$k, _hoisted_3$d, _hoisted_4$c, _hoisted_5$8];
var script$w = /*#__PURE__*/Object.assign({
  name: 'FYTimeLine'
}, {
  __name: 'time-line',
  setup: function setup(__props) {
    // init here

    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$t, _hoisted_6$6);
    };
  }
});

script$w.__scopeId = "data-v-23758979";
script$w.__file = "packages/components/time-line/src/time-line.vue";

var FYTimeLine = tool.withInstall(script$w);

var _hoisted_1$s = {
  "class": "progress-bar-wrap"
};
var _hoisted_2$j = {
  "class": "progress-bar-inner-wrap"
};
var script$v = /*#__PURE__*/Object.assign({
  name: 'FYProgress'
}, {
  __name: 'progress',
  props: {
    value: {
      type: Number,
      required: true,
      "default": 0,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    bothway: {
      type: Boolean,
      // 是否开启双向进度条
      "default": false
    },
    color: {
      type: String,
      "default": '#409eff'
    },
    restColor: {
      type: String,
      "default": '#dcdcdc'
    },
    showPercent: {
      type: Boolean,
      "default": true
    },
    size: {
      type: String,
      "default": 'default'
    },
    tooltipProps: {
      type: Object,
      "default": function _default() {
        return {
          width: 30,
          trigger: 'hover',
          placement: 'top'
        };
      }
    }
  },
  emits: ['click'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var props = __props;
    var progress = vue.ref(props.value);
    vue.watch(function () {
      return props.value;
    }, function (newValue) {
      progress.value = newValue;
    });
    var progressStyle = vue.computed(function () {
      var styleSize = {
        large: {
          width: '8rem',
          height: '.7rem',
          fontSize: '16px'
        },
        "default": {
          width: '7rem',
          height: '.6rem',
          fontSize: '14px'
        },
        small: {
          width: '5rem',
          height: '.4rem',
          fontSize: '12px'
        }
      };
      return styleSize[props.size];
    });
    var handleClick = function handleClick() {
      emit('click', progress.value);
    };
    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$s, [vue.createElementVNode("div", {
        "class": "progress-bar",
        style: vue.normalizeStyle(progressStyle.value),
        onClick: handleClick
      }, [vue.createVNode(vue.unref(ElementPlus.ElPopover), {
        placement: __props.tooltipProps.placement,
        width: __props.tooltipProps.width,
        trigger: __props.tooltipProps.trigger
      }, {
        reference: vue.withCtx(function () {
          return [vue.createElementVNode("div", _hoisted_2$j, [vue.createElementVNode("div", {
            "class": "progress-bar-inner",
            style: vue.normalizeStyle({
              width: "".concat(progress.value, "%"),
              backgroundColor: __props.color
            })
          }, null, 4 /* STYLE */), vue.createElementVNode("div", {
            "class": "progress-bar-inner-anchor",
            style: vue.normalizeStyle({
              width: "".concat(progress.value + 4, "%")
            })
          }, null, 4 /* STYLE */)])];
        }),

        "default": vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "tooltip-right")];
        }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["placement", "width", "trigger"]), __props.bothway ? (vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElPopover), {
        key: 0,
        placement: __props.tooltipProps.placement,
        width: __props.tooltipProps.width,
        trigger: __props.tooltipProps.trigger
      }, {
        reference: vue.withCtx(function () {
          return [vue.createElementVNode("div", {
            "class": "progress-bar-inner-right",
            style: vue.normalizeStyle({
              width: "".concat(100 - progress.value, "%"),
              backgroundColor: __props.restColor
            })
          }, null, 4 /* STYLE */)];
        }),

        "default": vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "tooltip-left")];
        }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["placement", "width", "trigger"])) : vue.createCommentVNode("v-if", true)], 4 /* STYLE */), vue.withDirectives(vue.createElementVNode("div", {
        style: vue.normalizeStyle({
          fontSize: progressStyle.value.fontSize
        })
      }, vue.toDisplayString(__props.value) + "% ", 5 /* TEXT, STYLE */), [[vue.vShow, __props.showPercent]])]);
    };
  }
});

script$v.__file = "packages/components/progress/src/progress.vue";

var FYProgress = tool.withInstall(script$v);

var _hoisted_1$r = {
  "class": "fy-select-wrap"
};
var _hoisted_2$i = {
  "class": "fy-select-access-prefix"
};
var _hoisted_3$c = {
  "class": "fy-select-access-title"
};
var _hoisted_4$b = {
  "class": "fy-select-access-desc"
};
var _hoisted_5$7 = {
  key: 0,
  "class": "fy-select-access"
};
var _hoisted_6$5 = {
  "class": "fy-select-access-title"
};
var _hoisted_7$4 = {
  "class": "fy-select-access-desc"
};
var _hoisted_8$4 = {
  key: 1,
  style: {
    "width": "100%",
    "display": "flex",
    "justify-items": "center",
    "align-items": "center",
    "column-gap": "0.5rem"
  }
};
var _hoisted_9$4 = {
  "class": "fy-select-empty"
};
var _hoisted_10$4 = {
  key: 0,
  style: {
    "width": "100%",
    "display": "flex",
    "justify-items": "center",
    "align-items": "center",
    "column-gap": "0.5rem"
  }
};
var script$u = /*#__PURE__*/Object.assign({
  name: 'FYSelect'
}, {
  __name: 'select',
  props: {
    // 选项列表
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // 是否启用默认icon
    defaultIcon: {
      type: [Boolean, String],
      "default": false
    },
    // 是否使用虚拟列表化
    virtual: {
      type: [Boolean, String],
      "default": false
    },
    modelValue: {
      type: null,
      "default": null
    },
    // 标签化的展示
    tag: {
      type: [Boolean, String],
      "default": false
    },
    // 权限控制样式
    access: {
      type: [Boolean, String],
      "default": false
    },
    // 折叠多选标签
    collapseTags: {
      type: [Boolean, String],
      "default": true
    },
    // 是否清除
    clearable: {
      type: [Boolean, String],
      "default": false
    },
    // 多选
    multiple: {
      type: [Boolean, String],
      "default": false
    },
    teleported: {
      type: Boolean,
      "default": true
    },
    placeholder: {
      type: String,
      "default": '请选择'
    }
  },
  emits: ['change', 'visible-change', 'remove-tag', 'clear', 'blur', 'focus'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var props = __props;
    var hasDefaultSlot = vue.computed(function () {
      var slots = vue.useSlots();
      return slots["default"];
    });
    var defaultIconStyle = vue.computed(function () {
      return {
        borderRadius: '50%',
        background: tool.getRandomColor(),
        width: '18px',
        height: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
      };
    });
    var getClass = vue.ref(['fy-select']);
    if (props.access) {
      getClass.value = ['fy-select', 'fy-select-access-w'];
    }
    vue.watch(function () {
      return props.modelValue;
    }, function (newV) {
      if (props.tag) {
        var _options$find$index, _options$find;
        var options = props.options.map(function (item, index) {
          return tool._objectSpread2(tool._objectSpread2({}, item), {}, {
            index: index
          });
        });
        var targetIndex = (_options$find$index = (_options$find = options.find(function (item) {
          return item.value === newV[0];
        })) === null || _options$find === void 0 ? void 0 : _options$find.index) !== null && _options$find$index !== void 0 ? _options$find$index : '';
        targetIndex %= 4;
        getClass.value = ['fy-select', "fy-select-tag-".concat(targetIndex)];
      }
      if (props.access && props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== '') {
        getClass.value = ['fy-select', 'fy-select-access-w', 'fy-select-access-wrap'];
      }
    });
    var ifCollapse = vue.computed(function () {
      if (props.collapseTags === false) {
        return false;
      }
      return true;
    });
    var getOptionClass = vue.computed(function () {
      return [{
        'fy-select-option-tag': props.tag || props.tag === ''
      }, {
        'fy-select-option-access': props.access
      }];
    });
    var ifAccessModelValue = vue.computed(function () {
      if (props.access && props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== '') {
        return true;
      }
      return false;
    });
    var getAccessIcon = vue.computed(function () {
      if (props.modelValue === props.options[0].value) {
        return true;
      }
      return false;
    });
    var getAccessDesc = vue.computed(function () {
      if (props.modelValue === props.options[0].value) {
        return props.options[0].desc;
      }
      return props.options[1].desc;
    });
    var getAccessLabel = vue.computed(function () {
      if (props.modelValue === props.options[0].value) {
        return props.options[0].label;
      }
      return props.options[1].label;
    });
    var ifClearable = vue.computed(function () {
      if (props.tag || props.tag === '' || props.clearable === true) {
        return true;
      }
      return false;
    });
    var ifMultiple = vue.computed(function () {
      if (props.multiple || props.multiple === '' || props.tag) {
        return true;
      }
      return false;
    });
    var getMultipleLimit = vue.computed(function () {
      if (props.tag) {
        return 1;
      }
      if (props.multipleLimit) {
        return props.multipleLimit;
      }
      return 0;
    });
    var emitChange = function emitChange(val) {
      emit('change', val);
    };
    var emitVisibleChange = function emitVisibleChange(val) {
      emit('visible-change', val);
    };
    var emitRemoveTag = function emitRemoveTag(val) {
      emit('remove-tag', val);
    };
    var emitClear = function emitClear() {
      emit('clear');
    };
    var emitBlur = function emitBlur(val) {
      emit('blur', val);
    };
    var emitFocus = function emitFocus(val) {
      emit('focus', val);
    };
    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$r, [!props.virtual && props.virtual !== '' ? (vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElSelect), vue.mergeProps({
        key: 0
      }, _ctx.$attrs, {
        "model-value": props.modelValue,
        "class": getClass.value,
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
      }), vue.createSlots({
        empty: vue.withCtx(function () {
          return [vue.createVNode(vue.unref(FYEmpty))];
        }),
        "default": vue.withCtx(function () {
          return [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.options, function (item, index) {
            return vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElOption), {
              key: item.value,
              label: item.label,
              value: item.value,
              "class": vue.normalizeClass(getOptionClass.value)
            }, {
              "default": vue.withCtx(function () {
                return [props.access || props.access === '' ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_5$7, [vue.createElementVNode("div", _hoisted_6$5, [index % 2 !== 0 ? (vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElIcon), {
                  key: 0
                }, {
                  "default": vue.withCtx(function () {
                    return [vue.createVNode(vue.unref(lock_default))];
                  }),
                  _: 1 /* STABLE */
                })) : (vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElIcon), {
                  key: 1
                }, {
                  "default": vue.withCtx(function () {
                    return [vue.createVNode(vue.unref(user_default))];
                  }),
                  _: 1 /* STABLE */
                })), vue.createElementVNode("span", null, vue.toDisplayString(item.label), 1 /* TEXT */)]), vue.createElementVNode("div", _hoisted_7$4, [vue.createElementVNode("span", null, vue.toDisplayString(item.desc), 1 /* TEXT */)])])) : vue.createCommentVNode("v-if", true), props.defaultIcon || props.defaultIcon === '' || item.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$4, [vue.createCommentVNode("   data item 是否传入icon    "), item.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.icon), {
                  key: 0
                })) : props.defaultIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                  key: 1
                }, [vue.createCommentVNode("  data item 没有传入icon默认展示第一个字作为图标   "), vue.createElementVNode("div", {
                  style: vue.normalizeStyle(defaultIconStyle.value)
                }, vue.toDisplayString(item.label.slice(0, 1)), 5 /* TEXT, STYLE */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : vue.createCommentVNode("v-if", true), vue.createElementVNode("span", null, vue.toDisplayString(item.label), 1 /* TEXT */)])) : vue.createCommentVNode("v-if", true), hasDefaultSlot.value ? vue.renderSlot(_ctx.$slots, "default", {
                  key: 2,
                  data: item
                }) : vue.createCommentVNode("v-if", true)];
              }),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label", "value", "class"]);
          }), 128 /* KEYED_FRAGMENT */))];
        }),

        _: 2 /* DYNAMIC */
      }, [ifAccessModelValue.value ? {
        name: "prefix",
        fn: vue.withCtx(function () {
          return [vue.createElementVNode("div", _hoisted_2$i, [vue.createElementVNode("div", _hoisted_3$c, [!getAccessIcon.value ? (vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElIcon), {
            key: 0
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(lock_default))];
            }),
            _: 1 /* STABLE */
          })) : (vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElIcon), {
            key: 1
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(user_default))];
            }),
            _: 1 /* STABLE */
          })), vue.createElementVNode("span", null, vue.toDisplayString(getAccessLabel.value), 1 /* TEXT */)]), vue.createElementVNode("div", _hoisted_4$b, [vue.createElementVNode("span", null, vue.toDisplayString(getAccessDesc.value), 1 /* TEXT */)])])];
        }),

        key: "0"
      } : undefined]), 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["model-value", "class", "collapse-tags", "clearable", "multiple", "multiple-limit", "teleported", "placeholder"])) : (vue.openBlock(), vue.createBlock(vue.unref(ElementPlus.ElSelectV2), vue.mergeProps({
        key: 1
      }, _ctx.$attrs, {
        options: props.options,
        "model-value": props.modelValue,
        "class": "fy-select",
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
        empty: vue.withCtx(function () {
          return [vue.createElementVNode("div", _hoisted_9$4, [vue.createVNode(vue.unref(FYEmpty))])];
        }),
        "default": vue.withCtx(function (_ref2) {
          var item = _ref2.item;
          return [props.defaultIcon || props.defaultIcon === '' || item.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10$4, [vue.createCommentVNode("   data item 是否传入icon    "), item.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.icon), {
            key: 0
          })) : props.defaultIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, [vue.createCommentVNode("  data item 没有传入icon默认展示第一个字作为图标   "), vue.createElementVNode("div", {
            style: vue.normalizeStyle(defaultIconStyle.value)
          }, vue.toDisplayString(item.label.slice(0, 1)), 5 /* TEXT, STYLE */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)) : vue.createCommentVNode("v-if", true), vue.createElementVNode("span", null, vue.toDisplayString(item.label), 1 /* TEXT */)])) : vue.createCommentVNode("v-if", true), hasDefaultSlot.value ? vue.renderSlot(_ctx.$slots, "default", {
            key: 1,
            data: item
          }) : vue.createCommentVNode("v-if", true)];
        }),
        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */, ["options", "model-value", "multiple", "collapse-tags"]))]);
    };
  }
});

script$u.__scopeId = "data-v-33774f85";
script$u.__file = "packages/components/select/src/select.vue";

var FYSelect = tool.withInstall(script$u);

var _hoisted_1$q = {
  "class": "fy-switch-wrap"
};
var script$t = /*#__PURE__*/Object.assign({
  name: 'FYSwitch'
}, {
  __name: 'switch',
  props: {
    value: {},
    modelValue: {
      type: [Boolean, String, Number],
      "default": false
    },
    // 打开时的值
    activeValue: {
      type: [Boolean, String, Number],
      "default": true
    },
    // 关闭时的值
    inActiveValue: {
      type: [Boolean, String, Number],
      "default": false
    },
    // 打开状态下的消息提示
    activeMessage: {
      type: String,
      "default": '开启成功'
    },
    // 关闭状态下的消息提示
    inActiveMessage: {
      type: String,
      "default": '关闭成功'
    },
    // 状态改变失败时的消息提示
    changeFailMessage: {
      type: String,
      "default": '切换状态失败'
    },
    // 打开关闭的回调事件
    cb: {
      validator: function validator(value) {
        if (tool.isAsyncFunction(value) || typeof value === 'function') {
          return true;
        }
        return false;
      },
      "default": function _default() {}
    }
  },
  emits: ['change', 'update:modelValue'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var props = __props;
    var getDefaultMsg = vue.computed(function () {
      if (props.modelValue === getActiveValue.value) {
        return {
          message: props.activeMessage || '开启成功',
          type: 'success'
        };
      }
      return {
        message: props.inActiveMessage || '关闭成功',
        type: 'error'
      };
    });
    var getActiveValue = vue.computed(function () {
      if (['boolean', 'string', 'number'].includes(tool._typeof(props.activeValue))) {
        return props.activeValue;
      }
      return true;
    });
    var getInActiveValue = vue.computed(function () {
      if (['boolean', 'string', 'number'].includes(tool._typeof(props.inActiveValue))) {
        return props.inActiveValue;
      }
      return false;
    });
    var emitChange = /*#__PURE__*/function () {
      var _ref2 = tool._asyncToGenerator( /*#__PURE__*/tool._regeneratorRuntime().mark(function _callee(e) {
        return tool._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!tool.isAsyncFunction(props.cb)) {
                _context.next = 17;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return props.cb();
            case 4:
              emit('update:modelValue', e === props.activeValue ? props.activeValue : props.inActiveValue);
              vue.nextTick(function () {
                ElementPlus.ElMessage(getDefaultMsg.value);
              });
              _context.next = 12;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              emit('update:modelValue', e === props.activeValue ? props.activeValue : props.inActiveValue);
              // nextTick(() => {
              //   emit('update:modelValue', e === props.activeValue ? props.inActiveValue : props.activeValue)
              // })
              ElementPlus.ElMessage({
                message: props.changeFailMessage,
                type: 'error'
              });
            case 12:
              _context.prev = 12;
              emit('change', e);
              return _context.finish(12);
            case 15:
              _context.next = 18;
              break;
            case 17:
              if (typeof props.cb === 'function') {
                try {
                  props.cb();
                  emit('update:modelValue', e === props.activeValue ? props.activeValue : props.inActiveValue);
                  vue.nextTick(function () {
                    ElementPlus.ElMessage(getDefaultMsg.value);
                  });
                } catch (error) {
                  emit('update:modelValue', e === props.activeValue ? props.activeValue : props.inActiveValue);
                  // nextTick(() => {
                  //   emit('update:modelValue', e === props.activeValue ? props.inActiveValue : props.activeValue)
                  // })
                  ElementPlus.ElMessage({
                    message: props.changeFailMessage,
                    type: 'error'
                  });
                } finally {
                  emit('change', e);
                }
              } else {
                emit('update:modelValue', e === props.activeValue ? props.activeValue : props.inActiveValue);
                vue.nextTick(function () {
                  ElementPlus.ElMessage(getDefaultMsg.value);
                  emit('change', e, e === props.activeValue ? props.inActiveValue : props.activeValue);
                });
              }
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8, 12, 15]]);
      }));
      return function emitChange(_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    // init here

    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$q, [vue.createVNode(vue.unref(ElementPlus.ElSwitch), vue.mergeProps(_ctx.$attrs, {
        "model-value": props.modelValue,
        "active-value": getActiveValue.value,
        "inactive-value": getInActiveValue.value,
        onChange: emitChange
      }), null, 16 /* FULL_PROPS */, ["model-value", "active-value", "inactive-value"])]);
    };
  }
});

script$t.__file = "packages/components/switch/src/switch.vue";

var FYSwitch = tool.withInstall(script$t);

// 逻辑运算符
var LOGICAL_MAPPER = {
  且: '&',
  或: '||'
};

// 数字关系运算符
var RELATION_DIGIT_MAPPER = {
  等于: '=',
  大于: '>',
  小于: '<',
  介于: '><',
  为空: 'null',
  非空: ' '
};

// 条件关系运算符
var RELATION_MAPPER = {
  属于: 'is',
  不属于: 'not',
  为空: 'null',
  非空: ' '
};
function mapperToOptions(mapper) {
  return Object.entries(mapper).map(function (_ref) {
    var _ref2 = tool._slicedToArray(_ref, 2),
      label = _ref2[0],
      value = _ref2[1];
    return {
      label: label,
      value: value
    };
  });
}

var Select$5 = {
  type: 'select',
  renderer: function renderer(props) {
    return vue.createVNode(FYSelect, tool._objectSpread2(tool._objectSpread2({
      "placeholder": "\u8BF7\u9009\u62E9".concat(props.label)
    }, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      },
      "placement": "bottom-start"
    }), null);
  }
};
var DatePicker$3 = {
  type: 'datePicker',
  renderer: function renderer(props) {
    var checkValue = vue.ref(1);
    var weekStart = function weekStart() {
      var now = new Date();
      var firstDayOfWeek = new Date(now - (now.getDay() - 1) * 86400000); // 一天的毫秒数为 24*60*60*1000 = 86400000

      firstDayOfWeek.setHours(0, 0, 0, 0); // 设置时间为当天的 00:00:00:000

      return firstDayOfWeek;
    };
    return vue.createVNode("div", {
      "style": "width: 100%; display: flex; column-gap: 0.5rem;"
    }, [vue.createVNode(FYSelect, {
      "modelValue": checkValue.value,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return checkValue.value = $event;
      },
      "style": "width: 120px",
      "onChange": function onChange(v) {
        // eslint-disable-next-line no-nested-ternary
        props.model[props.value] = v === 2 ? new Date() : v === 3 ? weekStart() : '';
      },
      "options": [{
        label: '自定义时间',
        value: 1
      }, {
        label: '今天',
        value: 2
      }, {
        label: '本周',
        value: 3
      }]
    }, null), vue.createVNode(FYDatePicker, tool._objectSpread2(tool._objectSpread2({
      "style": "width: 180px",
      "placeholder": "\u8BF7\u9009\u62E9"
    }, props), {}, {
      "type": "date",
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null)]);
  }
};

var builtInFormItems$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DatePicker: DatePicker$3,
  Select: Select$5
});

var filterPanelItemMap = new Map();
function installFilterPanelItem(item) {
  if (Array.isArray(item)) {
    var _iterator = tool._createForOfIteratorHelper(item),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var nape = _step.value;
        filterPanelItemMap.set(nape.type, nape.renderer);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    filterPanelItemMap.set(item.type, item.renderer);
  }
}

// 安装内置组件
installFilterPanelItem(Object.entries(builtInFormItems$5).map(function (_ref) {
  var _ref2 = tool._slicedToArray(_ref, 2),
    value = _ref2[1];
  return value;
}));

function useFormItem(filterItem) {
  return vue.computed(function () {
    return filterItem.value.render && typeof filterItem.value.render === 'function' ? filterItem.value.render : filterPanelItemMap.get(filterItem.value.type);
  });
}

function useForm(filterItem) {
  var model = vue.ref({});
  var rules = vue.computed(function () {
    if (filterItem.value.validate) {
      return tool._defineProperty({}, filterItem.value.value, filterItem.value.validate);
    }
    return tool._defineProperty({}, filterItem.value.value, [{
      required: true,
      trigger: 'change',
      message: ''
    }]);
  });

  // 表单Ref组件
  var formEl = vue.ref();

  // 动态组件
  var FormItem = useFormItem(filterItem);
  var formItemProps = vue.computed(function () {
    return filterItem.value;
  });

  // 监听当前查询字段 动态修改表单绑定数据
  vue.watch(filterItem, function (value, oldValue) {
    if (value === oldValue) return;
    // model.value = { [filterItem.value.value]: '' }
    model.value = tool._defineProperty({}, filterItem.value.value, filterItem.value.defaultValue || '');
  }, {
    immediate: true
  });
  var validateFailedValue = Promise.resolve({});
  function validate() {
    return _validate.apply(this, arguments);
  }
  function _validate() {
    _validate = tool._asyncToGenerator( /*#__PURE__*/tool._regeneratorRuntime().mark(function _callee() {
      return tool._regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!formEl.value) {
              _context.next = 4;
              break;
            }
            _context.next = 3;
            return formEl.value.validate();
          case 3:
            return _context.abrupt("return", model.value);
          case 4:
            return _context.abrupt("return", validateFailedValue);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _validate.apply(this, arguments);
  }
  return {
    model: model,
    rules: rules,
    FormItem: FormItem,
    formItemProps: formItemProps,
    formEl: formEl,
    validate: validate
  };
}

// 关系运算选择框数据
function useRelation(filterValue, filterItem) {
  var relationValue = vue.ref(RELATION_MAPPER['属于']);
  var relationOptions = vue.ref(mapperToOptions(RELATION_MAPPER));

  // 监听被查询字段的tmpl，更新该字段的关系运算符
  vue.watchEffect(function () {
    if (!(filterItem !== null && filterItem !== void 0 && filterItem.value)) return;

    // 关系运行符是否和数字相关
    relationOptions.value = filterItem.value.digit ? mapperToOptions(RELATION_DIGIT_MAPPER) // 数字关系运算
    : mapperToOptions(RELATION_MAPPER); // 条件关系运算

    relationValue.value = filterItem.value.digit ? RELATION_DIGIT_MAPPER['等于'] : RELATION_MAPPER['属于'];
  });
  return {
    relationOptions: relationOptions,
    relationValue: relationValue
  };
}

// 查询字段配置
function useFilter(props) {
  var filterValue = vue.ref();
  var filterItem = vue.ref();
  var filterOptions = vue.computed(function () {
    return props.template.map(function (tmpl) {
      return {
        label: tmpl.label,
        value: tmpl
      };
    });
  });

  // 根据 templates 更新默认值
  vue.watch(function () {
    return props.template;
  }, function () {
    var _props$template;
    if (!((_props$template = props.template) !== null && _props$template !== void 0 && _props$template.length)) return;
    var _props$template2 = tool._slicedToArray(props.template, 1),
      defaultItem = _props$template2[0];
    filterItem.value = defaultItem;
    filterValue.value = filterOptions.value[0].value;
  }, {
    immediate: true
  });

  // 查询字段变更后, 该字段对应的tmpl更新
  vue.watch(filterValue, function (value, oldValue) {
    if (value === oldValue) return;
    filterItem.value = value;
  });
  return {
    filterValue: filterValue,
    filterOptions: filterOptions,
    filterItem: filterItem
  };
}

var FormGroup = vue.defineComponent({
  props: {
    index: {
      type: Number,
      required: true
    },
    template: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    logical: {
      type: String,
      "default": '&'
    }
  },
  emits: ['remove', 'update:logical'],
  setup: function setup(props, ctx) {
    // 首行表单逻辑运算符为当
    var isWhen = vue.computed(function () {
      return props.index === 0;
    });

    // 仅第二行表单可以修改逻辑值 剩余行表单与第二行表单逻辑值保持一致
    var shouldChangeLogical = vue.computed(function () {
      return props.index === 1;
    });

    // 逻辑运算值
    var logicalSelf = vue.computed({
      get: function get() {
        return props.logical;
      },
      set: function set(value) {
        ctx.emit('update:logical', value);
      }
    });

    // 可查询字段options
    var _useFilter = useFilter(props),
      filterValue = _useFilter.filterValue,
      filterItem = _useFilter.filterItem,
      filterOptions = _useFilter.filterOptions;

    // 关系运算符options
    var _useRelation = useRelation(filterValue, filterItem),
      relationValue = _useRelation.relationValue,
      relationOptions = _useRelation.relationOptions;

    // 查询字段对应的组件
    var _useForm = useForm(filterItem),
      model = _useForm.model,
      rules = _useForm.rules,
      formEl = _useForm.formEl,
      validate = _useForm.validate,
      formItemProps = _useForm.formItemProps,
      FormItem = _useForm.FormItem;

    // 数据结构调整
    function wrappedValidate() {
      return _wrappedValidate.apply(this, arguments);
    } // 向外提供表单组校验
    function _wrappedValidate() {
      _wrappedValidate = tool._asyncToGenerator( /*#__PURE__*/tool._regeneratorRuntime().mark(function _callee() {
        var field;
        return tool._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return validate();
            case 2:
              field = filterItem.value.value;
              /**
               * @example
               * {
               *    person: {
               *      value: 'younghero',
               *      relation: 'is',
               *      logical: '&'
               *    }
               * }
               */
              return _context.abrupt("return", tool._defineProperty({}, field, {
                value: model.value[field],
                // 字段值
                relation: relationValue.value,
                // 关系运算值
                logical: isWhen.value ? 'when' : logicalSelf.value // 逻辑运算值
              }));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _wrappedValidate.apply(this, arguments);
    }
    ctx.expose({
      validate: wrappedValidate
    });
    return function () {
      return vue.createVNode("div", {
        "class": "conditions-group-content form-group"
      }, [vue.createVNode("div", {
        "class": "conditions-item"
      }, [vue.createVNode("div", {
        "class": "logical-item"
      }, [isWhen.value ? vue.createVNode("div", {
        "class": "when"
      }, [vue.createTextVNode("\u5F53")]) : vue.createVNode(FYSelect, {
        "modelValue": logicalSelf.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return logicalSelf.value = $event;
        },
        "class": "logical-select",
        "disabled": !shouldChangeLogical.value,
        "options": mapperToOptions(LOGICAL_MAPPER),
        "placeholder": "\u8BF7\u9009\u62E9"
      }, null)]), vue.createVNode("div", {
        "class": "form-container"
      }, [vue.createVNode("div", {
        "class": "form-content"
      }, [vue.createVNode(FYSelect, {
        "modelValue": filterValue.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return filterValue.value = $event;
        },
        "options": filterOptions.value,
        "class": "shorted-select",
        "placeholder": "\u8BF7\u9009\u62E9"
      }, null), vue.createVNode(FYSelect, {
        "modelValue": relationValue.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return relationValue.value = $event;
        },
        "options": relationOptions.value,
        "class": "shorted-select",
        "placeholder": "\u8BF7\u9009\u62E9"
      }, null), vue.createVNode("div", {
        "class": "form-dynamic"
      }, [vue.createVNode(vue.resolveComponent("el-form"), {
        "ref": formEl,
        "model": model.value,
        "rules": rules.value,
        "inline": true
      }, {
        "default": function _default() {
          return [vue.createVNode(vue.resolveComponent("el-form-item"), {
            "prop": filterItem.value.value
          }, {
            "default": function _default() {
              return [vue.createVNode("div", {
                "style": "width: 300px"
              }, [vue.createVNode(FormItem.value, tool._objectSpread2(tool._objectSpread2({}, formItemProps.value), {}, {
                "model": model.value
              }), null)])];
            }
          })];
        }
      })])])]), vue.createVNode("div", {
        "class": "delete-icon",
        "onClick": function onClick() {
          return ctx.emit('remove');
        }
      }, [vue.createVNode(vue.resolveComponent("el-icon"), {
        "size": "20",
        "color": "#999"
      }, {
        "default": function _default() {
          return [vue.createVNode(delete_default, null, null)];
        }
      })])])]);
    };
  }
});

function useFormGroups() {
  // 表单组渲染集合
  var rendererSet = vue.ref([]);

  // 逻辑运算符
  var logical = vue.ref(LOGICAL_MAPPER.且);
  return {
    create: function create() {
      // 新增一行表单组
      var FormGroupRenderer = vue.createVNode(FormGroup, null, null);
      rendererSet.value.push(FormGroupRenderer);
      return FormGroupRenderer;
    },
    remove: function remove(index) {
      // 删除一行表单组
      if (index) {
        rendererSet.value.splice(index, 1);
      } else {
        rendererSet.value.splice(rendererSet.value.length - 1, 1);
      }
    },
    reset: function reset() {
      rendererSet.value = [];
    },
    renderer: function renderer() {
      return rendererSet.value;
    },
    logical: logical
  };
}

var _hoisted_1$p = {
  "class": "fy-filter-panel-container"
};
var _hoisted_2$h = /*#__PURE__*/vue.createElementVNode("h3", null, "筛选", -1 /* HOISTED */);
var _hoisted_3$b = {
  "class": "panel-body"
};
var _hoisted_4$a = {
  "class": "add-group"
};
var _hoisted_5$6 = {
  "class": "panel-footer"
};
var _hoisted_6$4 = {
  "class": "button-group"
};
var script$s = /*#__PURE__*/Object.assign({
  name: 'FYFilterPanel'
}, {
  __name: 'FilterPanel',
  props: {
    template: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    visible: {
      type: Boolean,
      "default": false
    }
  },
  emits: ['submit', 'reset', 'cancel', 'update:visible'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    var props = __props;

    /**
     * @author younghero
     * @Date 2023-7-13 10:52
     * @description pingcode 同款查询面板
     */

    /**
     * 第一项筛选必为 当
     * 第二项筛选只能为 且 ｜ 或
     * 第三、第四..第N项都与第二项的筛选保持一致
     *
     *
     * 新增一项筛选
     * 删除一项筛选
     * 重置
     */

    var _useFormGroups = useFormGroups(),
      create = _useFormGroups.create,
      remove = _useFormGroups.remove,
      renderer = _useFormGroups.renderer,
      reset = _useFormGroups.reset,
      logical = _useFormGroups.logical;

    // 表单组组件实例Ref
    var formEl = vue.ref();

    // popover 受控模式
    var popoverVisible = vue.computed({
      get: function get() {
        return props.visible;
      },
      set: function set(value) {
        emits('update:visible', value);
      }
    });
    function cancel() {
      emits('cancel');
      popoverVisible.value = false;
    }
    function submit() {
      return _submit.apply(this, arguments);
    }
    function _submit() {
      _submit = tool._asyncToGenerator( /*#__PURE__*/tool._regeneratorRuntime().mark(function _callee() {
        var result, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, El, data;
        return tool._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              result = [];
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context.prev = 3;
              _iterator = tool._asyncIterator(formEl.value);
            case 5:
              _context.next = 7;
              return _iterator.next();
            case 7:
              if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                _context.next = 16;
                break;
              }
              El = _step.value;
              _context.next = 11;
              return El.validate();
            case 11:
              data = _context.sent;
              result.push(data);
            case 13:
              _iteratorAbruptCompletion = false;
              _context.next = 5;
              break;
            case 16:
              _context.next = 22;
              break;
            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](3);
              _didIteratorError = true;
              _iteratorError = _context.t0;
            case 22:
              _context.prev = 22;
              _context.prev = 23;
              if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                _context.next = 27;
                break;
              }
              _context.next = 27;
              return _iterator["return"]();
            case 27:
              _context.prev = 27;
              if (!_didIteratorError) {
                _context.next = 30;
                break;
              }
              throw _iteratorError;
            case 30:
              return _context.finish(27);
            case 31:
              return _context.finish(22);
            case 32:
              console.log('🚀 ~ file: filter-panel.vue:43 ~ submit ~ result:', result);
              emits('submit', result);
              cancel();
            case 35:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 18, 22, 32], [23,, 27, 31]]);
      }));
      return _submit.apply(this, arguments);
    }
    return function (_ctx, _cache) {
      var _component_el_icon = vue.resolveComponent("el-icon");
      var _component_el_popover = vue.resolveComponent("el-popover");
      return vue.openBlock(), vue.createBlock(_component_el_popover, {
        visible: popoverVisible.value,
        width: 800,
        "show-arrow": false,
        trigger: "click",
        placement: "bottom-end",
        "popper-class": "filter-panel-popover",
        "popper-style": "box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
      }, {
        reference: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "default")];
        }),
        "default": vue.withCtx(function () {
          return [vue.createElementVNode("div", _hoisted_1$p, [vue.createElementVNode("header", null, [_hoisted_2$h, vue.createElementVNode("div", {
            "class": "close-icon",
            onClick: cancel
          }, [vue.createVNode(_component_el_icon, {
            size: "20",
            color: "#999"
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(close_default))];
            }),
            _: 1 /* STABLE */
          })])]), vue.createElementVNode("div", _hoisted_3$b, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(renderer)(), function (FormGroup, i) {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: FormGroup
            }, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(FormGroup), {
              ref_for: true,
              ref_key: "formEl",
              ref: formEl,
              logical: vue.unref(logical),
              "onUpdate:logical": _cache[0] || (_cache[0] = function ($event) {
                return vue.isRef(logical) ? logical.value = $event : null;
              }),
              index: i,
              template: __props.template,
              onRemove: function onRemove($event) {
                return vue.unref(remove)(i);
              }
            }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["logical", "index", "template", "onRemove"]))]);
          }), 128 /* KEYED_FRAGMENT */)), vue.createElementVNode("div", _hoisted_4$a, [vue.createVNode(_component_el_icon, {
            color: "var(--el-color-primary)",
            onClick: vue.unref(create)
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(plus_default))];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"]), vue.createElementVNode("span", {
            onClick: _cache[1] || (_cache[1] = function () {
              return vue.unref(create) && vue.unref(create).apply(void 0, arguments);
            })
          }, "新增筛选条件")])]), vue.createElementVNode("div", _hoisted_5$6, [vue.createVNode(vue.unref(FYButton), {
            type: "primary",
            text: "",
            link: "",
            size: "large",
            style: {
              "font-size": "1rem"
            },
            onClick: vue.unref(reset)
          }, {
            "default": vue.withCtx(function () {
              return [vue.createTextVNode(" 重置 ")];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onClick"]), vue.createElementVNode("div", _hoisted_6$4, [vue.createVNode(vue.unref(FYButton), {
            type: "info",
            text: "",
            size: "large",
            link: "",
            style: {
              "font-size": "1rem"
            },
            onClick: cancel
          }, {
            "default": vue.withCtx(function () {
              return [vue.createTextVNode(" 取消 ")];
            }),
            _: 1 /* STABLE */
          }), vue.createVNode(vue.unref(FYButton), {
            type: "primary",
            size: "large",
            style: {
              "font-size": "1rem"
            },
            onClick: submit
          }, {
            "default": vue.withCtx(function () {
              return [vue.createTextVNode(" 确定 ")];
            }),
            _: 1 /* STABLE */
          })])])])];
        }),

        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["visible"]);
    };
  }
});

script$s.__file = "packages/components/filter-panel/src/FilterPanel.vue";

var FYFilterPanel = tool.withInstall(script$s);

var _withScopeId$3 = function _withScopeId(n) {
  return vue.pushScopeId("data-v-151a6209"), n = n(), vue.popScopeId(), n;
};
var _hoisted_1$o = /*#__PURE__*/_withScopeId$3(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    "class": "loading-wrapper"
  }, [/*#__PURE__*/vue.createElementVNode("div", {
    "class": "loading"
  }, [/*#__PURE__*/vue.createElementVNode("div", null, [/*#__PURE__*/vue.createElementVNode("span"), /*#__PURE__*/vue.createElementVNode("span"), /*#__PURE__*/vue.createElementVNode("span")])])], -1 /* HOISTED */);
});
var _hoisted_2$g = [_hoisted_1$o];
var _hoisted_3$a = /*#__PURE__*/_withScopeId$3(function () {
  return /*#__PURE__*/vue.createElementVNode("div", {
    "class": "loading-module-wrapper"
  }, [/*#__PURE__*/vue.createElementVNode("h4", null, [/*#__PURE__*/vue.createElementVNode("span", {
    style: {
      "display": "none"
    }
  }), /*#__PURE__*/vue.createElementVNode("div", {
    "class": "loading-ellipsis"
  }, [/*#__PURE__*/vue.createElementVNode("span", {
    "class": "spot"
  })])])], -1 /* HOISTED */);
});
var _hoisted_4$9 = [_hoisted_3$a];
var script$r = /*#__PURE__*/Object.assign({
  name: 'FYLoading'
}, {
  __name: 'loading',
  props: {
    // 控制显示与否
    modelValue: {
      type: Boolean,
      "default": false
    },
    // loading 全屏模式或部分模块模式
    type: {
      type: String,
      "default": 'page'
    },
    // 改变loading背景颜色
    background: {
      type: Object,
      "default": function _default() {
        return {
          light: 'rgba(255, 255, 255, .9)',
          dark: 'rgba(0, 0, 0, .8)'
        };
      }
    }
  },
  setup: function setup(__props) {
    var props = __props;
    vue.onMounted(function () {});
    // init here

    return function (_ctx, _cache) {
      return props.type === 'page' ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        "class": "fy-loading-wrap",
        style: vue.normalizeStyle({
          '--light-loading-color': props.background.light,
          '--dark-loading-color': props.background.dark
        })
      }, _hoisted_2$g, 4 /* STYLE */)), [[vue.vShow, props.modelValue]]) : props.type === 'module' ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        key: 1,
        "class": "fy-loading-wrap-module",
        style: vue.normalizeStyle({
          '--light-loading-color': props.background.light,
          '--dark-loading-color': props.background.dark
        })
      }, _hoisted_4$9, 4 /* STYLE */)), [[vue.vShow, props.modelValue]]) : vue.createCommentVNode("v-if", true);
    };
  }
});

script$r.__scopeId = "data-v-151a6209";
script$r.__file = "packages/components/loading/src/loading.vue";

var FYLoading = tool.withInstall(script$r);

var _hoisted_1$n = {
  "class": "fy-skeleton-wrap"
};
var _hoisted_2$f = {
  key: 0
};
var _hoisted_3$9 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_4$8 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_5$5 = {
  "class": "fy-skeleton-section"
};
var _hoisted_6$3 = {
  "class": "fy-skeleton-section-item"
};
var _hoisted_7$3 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_8$3 = {
  "class": "fy-skeleton-section-item"
};
var _hoisted_9$3 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_10$3 = {
  "class": "fy-skeleton-section"
};
var _hoisted_11$3 = {
  "class": "fy-skeleton-section-item"
};
var _hoisted_12$2 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_13$1 = {
  "class": "fy-skeleton-section-item"
};
var _hoisted_14$1 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_15$1 = {
  "class": "fy-skeleton-section"
};
var _hoisted_16$1 = {
  "class": "fy-skeleton-section-item"
};
var _hoisted_17$1 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_18$1 = {
  "class": "fy-skeleton-section-item"
};
var _hoisted_19$1 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_20 = {
  "class": "fy-skeleton-section"
};
var _hoisted_21 = {
  "class": "fy-skeleton-section-item"
};
var _hoisted_22 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_23 = {
  "class": "fy-skeleton-section-item"
};
var _hoisted_24 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_25 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_26 = {
  key: 1
};
var _hoisted_27 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_28 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_29 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_30 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_31 = {
  style: {
    "padding": "0px 0px 10px 0"
  }
};
var _hoisted_32 = {
  key: 2
};
var _hoisted_33 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_34 = {
  "class": "fy-skeleton-four-wrap"
};
var _hoisted_35 = {
  "class": "fy-skeleton-four-first"
};
var _hoisted_36 = {
  style: {
    "padding": "10px 0 5px 0px",
    "display": "flex"
  }
};
var _hoisted_37 = {
  "class": "circle-four-wrap"
};
var _hoisted_38 = {
  "class": "fy-skeleton-four"
};
var _hoisted_39 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_40 = {
  "class": "fy-skeleton-four"
};
var _hoisted_41 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_42 = {
  "class": "fy-skeleton-four"
};
var _hoisted_43 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_44 = {
  "class": "fy-skeleton-four-vertical"
};
var _hoisted_45 = {
  "class": "fy-skeleton-four-item"
};
var _hoisted_46 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_47 = {
  "class": "fy-skeleton-four-item"
};
var _hoisted_48 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_49 = {
  "class": "fy-skeleton-four-item"
};
var _hoisted_50 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_51 = {
  "class": "fy-skeleton-four-item"
};
var _hoisted_52 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_53 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_54 = {
  "class": "fy-skeleton-circle-left"
};
var _hoisted_55 = {
  "class": "fy-skeleton-circle-item"
};
var _hoisted_56 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_57 = {
  style: {
    "padding": "10px 0 5px 0px"
  }
};
var _hoisted_58 = {
  key: 3
};
var script$q = /*#__PURE__*/Object.assign({
  name: 'FYSkeleton'
}, {
  __name: 'skeleton',
  props: {
    type: {
      type: [Number, String],
      "default": ''
    }
  },
  setup: function setup(__props) {
    var props = __props;
    var circleWrap = vue.ref(null);
    var computeRadius = vue.ref('');
    var computeFourRadius = vue.ref('');
    vue.onMounted(function () {
      // 对圆形骨架进行长宽修正
      var target = document.querySelector('.circle-wrap');
      var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;
      computeRadius.value = "".concat(width < height ? width : height, "px");
      var targetFour = document.querySelector('.circle-four-wrap');
      var _targetFour$getBoundi = targetFour.getBoundingClientRect(),
        width2 = _targetFour$getBoundi.width,
        height2 = _targetFour$getBoundi.height;
      computeFourRadius.value = "".concat(width2 < height2 ? width2 : height2, "px");
    });
    // init here

    return function (_ctx, _cache) {
      var _component_el_skeleton_item = vue.resolveComponent("el-skeleton-item");
      var _component_el_skeleton = vue.resolveComponent("el-skeleton");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$n, [parseInt(props.type) === 1 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$f, [vue.createVNode(_component_el_skeleton, vue.mergeProps({
        style: {
          "width": "100%",
          "text-align": "left"
        }
      }, _ctx.$attrs), {
        template: vue.withCtx(function () {
          return [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "20%",
              "height": "20px"
            }
          }), vue.createElementVNode("div", _hoisted_3$9, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "16%",
              "height": "18px"
            }
          })]), vue.createElementVNode("div", _hoisted_4$8, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })]), vue.createElementVNode("div", _hoisted_5$5, [vue.createElementVNode("div", _hoisted_6$3, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "32%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_7$3, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])]), vue.createElementVNode("div", _hoisted_8$3, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "32%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_9$3, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])])]), vue.createElementVNode("div", _hoisted_10$3, [vue.createElementVNode("div", _hoisted_11$3, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "32%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_12$2, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])]), vue.createElementVNode("div", _hoisted_13$1, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "32%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_14$1, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])])]), vue.createElementVNode("div", _hoisted_15$1, [vue.createElementVNode("div", _hoisted_16$1, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "32%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_17$1, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])]), vue.createElementVNode("div", _hoisted_18$1, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "32%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_19$1, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])])]), vue.createElementVNode("div", _hoisted_20, [vue.createElementVNode("div", _hoisted_21, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "32%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_22, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])]), vue.createElementVNode("div", _hoisted_23, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "32%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_24, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])])]), vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "16%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_25, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "80px"
            }
          })])];
        }),
        "default": vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "default")];
        }),
        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */)])) : parseInt(props.type) === 2 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_26, [vue.createVNode(_component_el_skeleton, vue.mergeProps({
        style: {
          "width": "100%",
          "text-align": "left"
        }
      }, _ctx.$attrs), {
        template: vue.withCtx(function () {
          return [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "16%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_27, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })]), vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "16%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_28, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })]), vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "16%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_29, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })]), vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "16%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_30, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })]), vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "16%",
              "height": "18px"
            }
          }), vue.createElementVNode("div", _hoisted_31, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])];
        }),
        "default": vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "default")];
        }),
        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */)])) : parseInt(props.type) === 3 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_32, [vue.createVNode(_component_el_skeleton, vue.mergeProps({
        style: {
          "width": "100%",
          "text-align": "left"
        }
      }, _ctx.$attrs), {
        template: vue.withCtx(function () {
          return [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "20%",
              "height": "20px"
            }
          }), vue.createElementVNode("div", _hoisted_33, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "40px"
            }
          })]), vue.createElementVNode("div", _hoisted_34, [vue.createElementVNode("div", _hoisted_35, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "33%",
              "height": "25px"
            }
          }), vue.createElementVNode("div", _hoisted_36, [vue.createElementVNode("div", _hoisted_37, [vue.createVNode(_component_el_skeleton_item, {
            variant: "circle",
            style: vue.normalizeStyle({
              marginRight: '10px',
              width: computeFourRadius.value,
              height: computeFourRadius.value
            })
          }, null, 8 /* PROPS */, ["style"])]), vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "flex": "4",
              "height": "30px"
            }
          })])]), vue.createElementVNode("div", _hoisted_38, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "33%",
              "height": "25px"
            }
          }), vue.createElementVNode("div", _hoisted_39, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])]), vue.createElementVNode("div", _hoisted_40, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "33%",
              "height": "25px"
            }
          }), vue.createElementVNode("div", _hoisted_41, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])]), vue.createElementVNode("div", _hoisted_42, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "33%",
              "height": "25px"
            }
          }), vue.createElementVNode("div", _hoisted_43, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])])]), vue.createElementVNode("div", _hoisted_44, [vue.createElementVNode("div", _hoisted_45, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "20%",
              "height": "25px"
            }
          }), vue.createElementVNode("div", _hoisted_46, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])]), vue.createElementVNode("div", _hoisted_47, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "20%",
              "height": "25px"
            }
          }), vue.createElementVNode("div", _hoisted_48, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])]), vue.createElementVNode("div", _hoisted_49, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "20%",
              "height": "25px"
            }
          }), vue.createElementVNode("div", _hoisted_50, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])]), vue.createElementVNode("div", _hoisted_51, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "20%",
              "height": "25px"
            }
          }), vue.createElementVNode("div", _hoisted_52, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])])]), vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "33%",
              "height": "25px"
            }
          }), vue.createElementVNode("div", _hoisted_53, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "100px"
            }
          })]), vue.createElementVNode("div", _hoisted_54, [vue.createElementVNode("div", {
            ref_key: "circleWrap",
            ref: circleWrap,
            "class": "circle-wrap"
          }, [vue.createVNode(_component_el_skeleton_item, {
            variant: "circle",
            style: vue.normalizeStyle({
              width: computeRadius.value,
              marginRight: '10px',
              height: computeRadius.value
            })
          }, null, 8 /* PROPS */, ["style"])], 512 /* NEED_PATCH */), vue.createElementVNode("div", _hoisted_55, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: vue.normalizeStyle({
              width: '33%',
              height: computeRadius.value
            })
          }, null, 8 /* PROPS */, ["style"]), vue.createElementVNode("div", _hoisted_56, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "60px"
            }
          })])])]), vue.createVNode(_component_el_skeleton_item, {
            variant: "circle",
            style: vue.normalizeStyle({
              width: computeRadius.value,
              height: computeRadius.value
            })
          }, null, 8 /* PROPS */, ["style"]), vue.createElementVNode("div", _hoisted_57, [vue.createVNode(_component_el_skeleton_item, {
            variant: "p",
            style: {
              "width": "100%",
              "height": "30px"
            }
          })])];
        }),
        "default": vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "default")];
        }),
        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */)])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_58, [vue.createVNode(_component_el_skeleton, vue.mergeProps({
        style: {
          "width": "100%",
          "text-align": "left"
        }
      }, _ctx.$attrs), {
        template: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "template")];
        }),
        "default": vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "default")];
        }),
        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */)]))]);
    };
  }
});

script$q.__scopeId = "data-v-26fa9225";
script$q.__file = "packages/components/skeleton/src/skeleton.vue";

var FYSkeleton = tool.withInstall(script$q);

var Select$4 = {
  type: 'select',
  renderer: function renderer(props) {
    return vue.createVNode(FYSelect, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var Input$3 = {
  type: 'input',
  renderer: function renderer(props) {
    return vue.createVNode(FYInput, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var Textarea = {
  type: 'textarea',
  renderer: function renderer(props) {
    return vue.createVNode(FYInput, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "textarea": true,
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var PasswordInput = {
  type: 'password',
  renderer: function renderer(props) {
    return vue.createVNode(FYInput, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "type": "password",
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var Switch$1 = {
  type: 'switch',
  renderer: function renderer(props) {
    return vue.createVNode(FYSwitch, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var DatePicker$2 = {
  type: 'datePicker',
  renderer: function renderer(props) {
    return vue.createVNode(FYDatePicker, {
      "type": "date",
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }, null);
  }
};
var Cascader$1 = {
  type: 'cascader',
  renderer: function renderer(props) {
    return vue.createVNode(FYCascader, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};

var builtInFormItems$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Cascader: Cascader$1,
  DatePicker: DatePicker$2,
  Input: Input$3,
  PasswordInput: PasswordInput,
  Select: Select$4,
  Switch: Switch$1,
  Textarea: Textarea
});

var formItemMap$1 = new Map();
function installFormItem$1(item) {
  if (Array.isArray(item)) {
    var _iterator = tool._createForOfIteratorHelper(item),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var nape = _step.value;
        formItemMap$1.set(nape.type, nape.renderer);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    formItemMap$1.set(item.type, item.renderer);
  }
}

// 安装内置组件
installFormItem$1(Object.entries(builtInFormItems$4).map(function (_ref) {
  var _ref2 = tool._slicedToArray(_ref, 2),
    value = _ref2[1];
  return value;
}));

var img$6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB7ZoxS8NAFMf/qbaDVlsQBKlIlULBSZ0EHeIgCK4O4qKOgoMfwM1PYJeO1qkuOkon7epWQQVBqGBFSwVFW8GGJCZ1UNrTXJpLcpb7QTh49yD5wbt3FxIJBOJZOd4lYU8HZLhMT18vhhMja7lkeh8OCBCDEk69kPi+n5RZuN5YhQNaRBJZWTaGODzGqUwAHOFEhisRk3ZluBMxaUeGSxETuzLcipjYkeFaxIRWxncR5aNumUMj47uIpmqNyworGd9FVFVF+e6RKvcvGak5YO7smnFEgccEQ0FEBqJUufVqbbKweFz4GesGJyh1BU8PFapcLSBFmmPcdy1ahAhvCBHe6BgRpu23PxRGembHMu+sco7URQYsYSsSDGN6cMIy775Gt5PbQZQWDSsnW40y8gLRtXjD1dIajyaM83XLARtXzzd4U6pgiasi21ObxLgba0eUFg2HxRxKhD2j9F4Ga1wXEe3XJmKN0DAfm0UsPEScOzLKjiWuiqwnl36dYy0iSovEq7Fb7zJ+z6CFrUi9itSlo2+abSPaL28IEd4QIrwhRHijc0WkLrzgHyKRgmMHchE+/CFEgw7cFpfzo81xYmlpOuaMIQPOMCTy+teztfAJFNWHJTDVU+oAAAAASUVORK5CYII=";
  var excel = img$6;

var img$5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7ZpPSBRRHMd/b3ZJS0Lp4AZC/jlEBxWC/pwMNaSLmocuQlAH6RJk5zxGdrVzSQYFXrpoHaLQKA/ZdqiMIAm2OqkQaLGsrrvzet8ZnzPszu6O83ZmJ9kPLKu/fYffZ+f93vu9xzJy4O5QqkXn0YfEeTf5zJEmRqeH2NVTF6KPSAHNKcj1yHwQErtJcDb14UXmCimQJ3J7aLubE7VQwKjKaBQiVGRCJQK8yoROBHiRCaUI2KtMaEXAXmRCLQLcylRcJPWHlxzjRqbiIpm0eG2VHldKpuIi20Li64LuamwxGZYbwM6u6XyeAubgYaKmE8zV2I3f/OS1iQMf7bEohYTUX6Lv8dL1Ahhn9bmx0K9abqmKhI19IxJYsdfUMTozqFFnL6P6RkYba0Q/l3R6O62Lv90VeTECEUHil+9Exbs9RtR5XqPmDo0ej2WUZXyfWnaJdZEskh6/uE2TNzO0muBGvH9UPQ1fRXIlngiJX1/Mbx4S+H8rSdTcrlFjq7vNsBC+iThJbCaZUSuSTSHx7Z3ZnhxtJSV8EXGSQDc0MhGl6/ejQsYa2xAzxVJJUqLsIoUkZGwzyY3pBGJiOh1rN0XWEiEq9kLT6dKtXDFzLOLg/YxuLMcqlE2kkARisVYrhoTtYz/N6fRqMkuqlEVEReL5vawRG7gRMd4rJuIkgYQHxN5QTGJ50ZJArENsjsfPkmeURLCUOkn0j0ZEUlpBiRVR2LM2CRn7POe94JVE+kY0R4nOXs1YnZ6OO0tgbG1dfmxLYQn2LILkkDCQEl3DlgRiq4lgJJRE5E6MDlYunVIM0yZICVIRkb2R7J1A7c6OHdR0suO5jZcJ2HsnbGxdw5rRikiCkACen8jKTksRa7Ni8dmsWHmsOypMuyAkgOcngt5ItuAdvZyWhAC62WeiPl4+MHdqfO40xcotATw/EST9ZtpMuG8kslvoAImaksFIAKWjblzURM0hRudEXWD/wPK7e75oszpbvyWA8pl9QTyVjTXdkGhoNC8YJNhPsADEZ3VfJUBZLh+W5lAjGdGWMOOMAbDbLy9y3wUkZb1FQeJ4VYLqTWPYqIqEjf0rohFfp/8Qx9P++GA6UYlfCLmD/xibqcm7l3ScWiyd7SFOUxQyOKfX6bTe4/TZPw3lIilQj/F8AAAAAElFTkSuQmCC";
  var file = img$5;

var img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALySURBVHgB7Zk/T9tAGIffO0ftAKgTLCzJxgBDJxgpDExEHmFqJdjhSwArHwDUdoI5TAzQDgwglkowQ2ckpAqEKkLs4/0dcRQSizhOXvuQ8kiR7dNF8nPvH18cRTH89/1iwZjvxphZEkaNj5Py/W+FhYWf1AM6btALw19ZSEQoY37UDg+/Ug+0iTz5/iwfipQxvcpocoheZJwSAWllnBMBaWScFAHdyjgrArqRcVoEJJXJXcTc3XWck0Qm/4hUq0SPjx2ndZLJX4QlwpOTRFPfklGtA3iyG96iUNaMjJCamEg01dzefv6wvf2neaxArnB/T+b8PNFUjsyn1jHnu1ZSBiJJUGNjlBViNVLY2CA1OUl0c0O1zU0y19ckiUhE9NyclTAsQRwVvbpK0sikVj2lgr09K6MRGWFkRB4e7EENDVFWiIhE9aBmZqxMeHVF0ogUu7m8tFFppBRqRRix9htWKo1zKyaMmEhwcNA4f9cizYWuuB1LIyfS1HK9cvnVtQRiInp+/tV1YW2NSLAdi4hgjxVFANsTC49h2yIlI9J+9fKyPYZHR2TOzijY3SVvZYVUqUQeRyY8PSXN51ZqeNjONfysMcfHL9uaFPRdBNHQ9eIO9vftEa1YjY6S5lrR09P20wbGOB2f1tcbO4Nu6LtIczQU35BaXCSNJzwiwBiM1dMLq4/9GK49fA8pyfPStOu+ijRHAzePgseNG5ayG0hsXfjaW1qywphvm0AdOzfP1EJhY0WjAo9uPuT6iFtdpFzA9YD5jVrh72CM8hBBSmBlNadPBFa0liTPeR6KO6D+kFpERe205edssLOTqlh7Jd1zhCMRSaAjReljzzmd8iBVROxLBf7YX39TU0ToNFzIeF7kRSoRCOATvSUJLy4o2NqiPElXI1wDKGjbpdChMtimdyJ914JATvUQx+BNo2sMRFxjIOIabSKG6B+9Q1TcYLVcxjvPIjkIL/Tfj5VKqXU8NrWCavUL8T+o5BrG/A5xbzE8A3u7ULi/ah73AAAAAElFTkSuQmCC";
  var pdf = img$4;

var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKdSURBVHgB7ZjNaxNBGMafjaZRQ+NHTSuaSjQHUewhILQilATtrZCDnuJBL/WsFy96F/TQP8CD9ZJ7zgoRTwaRFoqCHqKHojRNpQRjTfMx7hsopMkku9l9O52W/cFAMjMs+9t5ZudNDEhILM5HjUb9FX3ELhMJjuBO7Mb91NCl13CBT9ZpNOs5KJDYRojmQnbr6z24oEsk8fFFAgJRKMatjA8a4UZGKxHCqYx2IoQTGS1FiEFltBUhBpHRWoSwK7PnIuXapuUcOzJ7LlJt1MxWt5xnJaOFyPtfn23N7SdjdHbQyW4YyEExIf9RXD45bmvuevlP/OXVu0vtfYehCbRX8sVv9ib7xPGuLhwQPBHdODAibJs96AvgeiiGUf8wKs0qCpslLP9dgSpYRMb8ITyL3jYlQjv6M8U8MqUPUAFLtB6em+mSINKjk5g4FoEKWEQuBsK9x46chgpYRIKHAo7GOGERKdbKPccK/9agAhaR7PqStH91q2yKlKAClrdW9veiGaEhTA3HzD0RRqVRba3E/M83fVeLE7ZzJLOWbzUr0uEpvN34wi6o9GSnFUuHJ/Ho7Ay4USZCh+aDM9OtzxPBCFKn4uBEmQitRPuh2fndLWwi9JTnxqalY7dOXMFNs7VD5wtnxFhEKDZ0U6mReFdkaIyevgzOiLHXWnTT7SWLVYS4IuZahF6n7YUhRebJ+dlWWS+LVCdcEXMlQtGQxYbi9HR8tmekZNdxGzHHItv7ohd0c4NEZs58Nferoq1wLNLrN4gb6JpOcVSi0GosV1ZajRtalUJ18IrZkciqWSfZqatU4v0dpBueiG54IrrhiehGt4gQG9iHGLLO5Kfn3yGMKLRE/Mhde3yhs1caLeFrJIUhFqAZAngnao2kbOw/kPvmAvW2oi8AAAAASUVORK5CYII=";
  var pic = img$3;

var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKySURBVHgB7Zg/b9NAFMCf/zRJVUelVSRohYQRFSwMrciCGEgHNvoBmGCCnfIB+AJlh4WydEaC3R0YOlBRIQZASBQJkaKiytA0jVLHxz07tlLXSe9ix75K95OS6C435Jd37947KxBD3Zo3QdFeAiE1GDGF0nmYnr3zQLn0+BUkQI+fVi0qYUZntdIsVKproOhlb3y48wb+fn4KiXHJKvnxDJLIqNGJulWt0Q8zbrFWmgklEN24Cqnhy9yHIdF5FrftTfj9rgaqbnjjTqsOqZIgMirneiDOvieQukTAkJHhigjmSHlumUbE314Yocb2c0idISLDFZExmhOlSg0K5254r2LlNowMzshwRaT1Zx3sT8thwrft9zBSOCLDJYKgTKYwynCLTFy8F0YEpZzGV0hCxzk4fRGDDJcI5kd57kk4Hr+wBLsbS5AE4ra9l6IWBi88RYa7jhz8XAvrCI6T4lKJf3ubMFm5ybC4v4wSnfAru2tBxmj6BIwbV5jWOk17YerW663eOe4cwfwY67YmaUQkAHOlYX9kW6yRyegUl0iR5sjU9ZVwfEQTfW/roVft84arIJbNR8fGfoEcYVHkgFkE25O4blc3roEIMItgSxIHHskikFgEI4X3lLzhEKn2/a4oQFSYRDCpB/3rgySzgun4DbZVp/UL9r+tgNs9bnHeoCdZv22XJUwiQZOIdaO3+8X6gSJqzz0+L5hEggqOJ9T0/AsvMsEYOWp8gbxhFsE7OuaJv42Ob6UmbSTzhvnUwlYk7oED3tkPd95C3jD3WriddjfuetsJKzzmR5MKiNBnIcNddbO+7jLA/VxLVKSIaEgR0ZAioiFFREOKiIYUEQ0pIhpSRDSkiGicEOmAY8MZRImbrFsL3+lXJggJ2Z5Z/HA5Ottna5FF+rYKwkHWu7/tBP8BebYGukorC6kAAAAASUVORK5CYII=";
  var rar = img$2;

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL2SURBVHgB7ZkxbxMxFIDfJRFFQgkMaYqUJdeJSqmgA2rHlg5sUUYQA/yCip0/UcHASJnohlQmFsrAAGWhykkMSEmXLG2QUKqKJlzO3Evqnu24vYt9TdzqvqVXn3Px9+z37CQWSKi+/lsibuYNAbIMF0zxlgXVBevZw3LmLWiQkjV6bnp7HBIUAtbGR8d9ChoMiVRf/Vv2/5RgzOjKpMAgdGSMEkFUZYwTQVRkjBRBRpUxVgQZRcZoESSqzMRF2scktE8UmYmLdF2AjhveL0xm4iIo8eWXF6nveTKW2IA7uwdkG8ZM9jrAndtWpL6/22Rh/cm1H2xbBgzh8Bjg+154viCEWDfFNuOrVlQSEdNIREzjyogol9/F2RRU7gZ1/8X7HqiwtpqGmdzg+mudwIfdaJujiLLIUYdAuZg+/d/Oe9Bo8ftAIctvcPuH/P0bUwCrc8Gi2NqNcFY5A2URcdB2Htv4PuuPMv3BUp5vutzr7Dwv2jiItiHKUM6Row4vY0/zjyoXLU6CtrGwIvWW588YKKOV7LVmIFIu8vfEaMva5ovB2zcOQAstkUYrSMyZLP+opdnhR88LM1LIBddOUy3JKVoiTjO4xmXERpxe1/wBOiczV8hZpwVA7C/m16hoiey3ST9XKJjwCJsf3/ySWm8NL0FWQsw3FbQ3RKc5nPB8pIkv453bp97SW1aItkiNWds02jQ/MNIoykZ7yR4IsImOs6aLtgg7SJrwNNo00lQIwTzp58e0JX2GKrGK4AAfzPH5QWHzZNHGpA+ewS5PVbRFMNrs0ePx/eCwwA6QLa+Ve8HRptbUzw8kltMvuzHSvUGsRFxRiLHsUmIRkW1mYqTPKrGOSTMiO17I1n1N0qZzUGSJ5esgjPS7Hf7zCLt3UD799PrHf8ogvyAWYvtea3MnfImgcBylVkbymd00EhHTSERMIxExjSsskiJ/4BIi/dGu8rLb8O+UwEQI2dtam7LFZunS6vZ6K4TABhiGf0r73O15K7J7/wFhBER9s94x2wAAAABJRU5ErkJggg==";
  var word = img$1;

var _withScopeId$2 = function _withScopeId(n) {
  return vue.pushScopeId("data-v-245a748e"), n = n(), vue.popScopeId(), n;
};
var _hoisted_1$m = {
  key: 0,
  "class": "upload-icon"
};
var _hoisted_2$e = /*#__PURE__*/_withScopeId$2(function () {
  return /*#__PURE__*/vue.createElementVNode("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fit: "",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false"
  }, [/*#__PURE__*/vue.createElementVNode("g", {
    id: "agufile/cloud-upload-fill",
    "stroke-width": "1",
    "fill-rule": "evenodd"
  }, [/*#__PURE__*/vue.createElementVNode("path", {
    id: "agu路径",
    d: "M10.422 2.133C7.42 1.332 5.975 4.789 5.946 4.888c-.03.098-.177.054-.177.054-.24-.249-1.297-.82-2.408-.088-1.11.732-.709 2.122-.709 2.122S.52 6.961.086 9.712c-.435 2.75 2.19 3.466 2.19 3.466H7.24V10.22H6.092v-.005c-.057 0-.102-.05-.102-.114 0-.037.017-.07.045-.091L8.07 7.67a.149.149 0 0 1 .115-.058.15.15 0 0 1 .12.065l2.018 2.32.03.033c.004.018.01.04.01.061 0 .07-.052.128-.116.128-.003 0-.003-.003-.005-.003v.005H9.147v2.96h4.505s2.148-.59 2.338-3.015c.192-2.426-2.456-3.205-2.456-3.205s-.112-4.028-3.112-4.828z"
  })])], -1 /* HOISTED */);
});
var _hoisted_3$8 = [_hoisted_2$e];
var _hoisted_4$7 = {
  "class": "el-upload__text"
};
var _hoisted_5$4 = {
  key: 0,
  "class": "upload-tip"
};
var _hoisted_6$2 = ["src"];
var _hoisted_7$2 = ["src"];
var _hoisted_8$2 = ["src"];
var _hoisted_9$2 = ["src"];
var _hoisted_10$2 = ["src"];
var _hoisted_11$2 = ["src"];
var script$p = /*#__PURE__*/Object.assign({
  name: 'UploadItem'
}, {
  __name: 'UploadItem',
  emits: ['type-check', 'file-change'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var currentFile = vue.ref(null);
    var currentFileName = vue.ref('');
    var noEvent = function noEvent(e) {
      e.stopPropagation();
    };
    var config = vue.inject('config');
    var dialogVisible = vue.inject('dialogVisible');
    vue.watch(dialogVisible, function (newV) {
      // 对话框关闭，清空上传文件
      if (!newV.value) {
        myRef.value.clearFiles();
        currentFile.value = null;
      }
    });
    var onChange = function onChange(file, files) {
      var typeList = file.name.split('.');
      var type = typeList[typeList.length - 1];
      currentFileName.value = file.name;
      if (['pdf'].includes(type)) {
        currentFile.value = 'pdf';
      } else if (['doc', 'docx'].includes(type)) {
        currentFile.value = 'doc';
      } else if (['jpg', 'jpeg', 'gif', 'png'].includes(type)) {
        currentFile.value = 'jpg';
      } else if (['xlsx', 'xls', 'csv'].includes(type)) {
        currentFile.value = 'excel';
      } else if (['rar', 'zip'].includes(type)) {
        currentFile.value = 'zip';
      } else {
        currentFile.value = 'file';
      }
      // 限制文件类型
      if (config.allow && config.allow.length) {
        if (config.allow.includes(type)) {
          emit('type-check', true);
        } else {
          emit('type-check', false);
        }
      }
      emit('file-change', file, files);
    };
    var myRef = vue.ref(null);
    return function (_ctx, _cache) {
      var _component_el_link = vue.resolveComponent("el-link");
      var _component_el_upload = vue.resolveComponent("el-upload");
      return vue.openBlock(), vue.createBlock(_component_el_upload, {
        ref_key: "myRef",
        ref: myRef,
        "class": "fy-upload-item",
        drag: vue.unref(config).drag,
        multiple: vue.unref(config).multiple,
        "auto-upload": false,
        "on-change": onChange,
        "show-file-list": false
      }, vue.createSlots({
        "default": vue.withCtx(function () {
          return [vue.createElementVNode("div", null, [!currentFile.value ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$m, _hoisted_3$8)) : vue.createCommentVNode("v-if", true), vue.createElementVNode("div", _hoisted_4$7, [!currentFile.value ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$4, [vue.createTextVNode(" 点击此处 "), vue.createVNode(_component_el_link, {
            type: "primary",
            "class": "upload-linktext"
          }, {
            "default": vue.withCtx(function () {
              return [vue.createTextVNode("上传文件")];
            }),
            _: 1 /* STABLE */
          })])) : currentFile.value === 'excel' ? (vue.openBlock(), vue.createElementBlock("img", {
            key: 1,
            "class": "upload-type-icon",
            src: vue.unref(excel),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_6$2)) : currentFile.value === 'pdf' ? (vue.openBlock(), vue.createElementBlock("img", {
            key: 2,
            "class": "upload-type-icon",
            src: vue.unref(pdf),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_7$2)) : currentFile.value === 'doc' ? (vue.openBlock(), vue.createElementBlock("img", {
            key: 3,
            "class": "upload-type-icon",
            src: vue.unref(word),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_8$2)) : currentFile.value === 'zip' ? (vue.openBlock(), vue.createElementBlock("img", {
            key: 4,
            "class": "upload-type-icon",
            src: vue.unref(rar),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_9$2)) : currentFile.value === 'jpg' ? (vue.openBlock(), vue.createElementBlock("img", {
            key: 5,
            "class": "upload-type-icon",
            src: vue.unref(pic),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_10$2)) : currentFile.value === 'file' ? (vue.openBlock(), vue.createElementBlock("img", {
            key: 6,
            "class": "upload-type-icon",
            src: vue.unref(file),
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_11$2)) : vue.createCommentVNode("v-if", true)])])];
        }),
        _: 2 /* DYNAMIC */
      }, [currentFile.value ? {
        name: "trigger",
        fn: vue.withCtx(function () {
          return [vue.createElementVNode("span", {
            "class": "upload-file-info",
            onClick: noEvent
          }, vue.toDisplayString(currentFileName.value), 1 /* TEXT */), vue.createVNode(_component_el_link, {
            type: "primary",
            "class": "upload-rebtn upload-linktext"
          }, {
            "default": vue.withCtx(function () {
              return [vue.createTextVNode(" 重新上传 ")];
            }),
            _: 1 /* STABLE */
          })];
        }),

        key: "0"
      } : undefined]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["drag", "multiple"]);
    };
  }
});

script$p.__scopeId = "data-v-245a748e";
script$p.__file = "packages/components/upload/src/components/UploadItem.vue";

var FormItem$1 = vue.defineComponent({
  props: {
    // 每一个表单项对象
    tmplItem: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    // 文件类型校验的回调
    var typeCheck = function typeCheck(e) {
      emit('type-check', e);
    };
    // 表单项组件
    var FormItemCom = vue.computed(function () {
      if (props.tmplItem.render) return props.tmplItem.render;
      var renderer = formItemMap$1.get(props.tmplItem.type);
      return renderer || vue.createVNode("div", null, null);
    });
    // 分别对应 宽度拉满 宽度占一半 宽度占四分之一 默认占满
    var getFromStyle = function getFromStyle(item) {
      if (item.full) {
        return {
          flex: '0 0 100%'
        };
      }
      if (item.half) {
        return {
          flex: '0 0 45%'
        };
      }
      if (item.oneOfFour) {
        return {
          flex: '0 0 24.5%'
        };
      }
      return {
        flex: '0 0 100%'
      };
    };
    // 上传文件改变的回调
    var fileChange = function fileChange(file, files) {
      emit('file-change', file, files);
    };
    return function () {
      return vue.createVNode(vue.resolveComponent("ElFormItem"), {
        "label": props.tmplItem.label,
        "key": props.tmplItem.value,
        "prop": props.tmplItem.value,
        "style": getFromStyle(props.tmplItem)
      }, {
        "default": function _default() {
          return [props.tmplItem.type === 'upload' ? vue.createVNode(script$p, {
            "onTypeCheck": typeCheck,
            "onFileChange": fileChange
          }, null) : vue.createVNode(FormItemCom.value, tool._objectSpread2({
            "model": props.tmplItem.model
          }, props.tmplItem), null)];
        }
      });
    };
  }
});

function _isSlot$1(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !vue.isVNode(s);
}
var Form$1 = vue.defineComponent({
  props: {
    // 表单项列表
    template: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    // 表单域位置
    labelPosition: {
      type: String,
      "default": 'top'
    },
    // 表单域宽度
    labelWidth: {
      type: String,
      "default": 'auto'
    },
    // 组件绑定对象
    modelValue: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    // 是否校验
    shouldValidate: {
      type: Boolean,
      "default": true
    },
    // 业务类型
    businessType: {
      type: String,
      "default": 'create'
    }
  },
  emits: ['submit', 'fail', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      emit = _ref.emit,
      expose = _ref.expose;
    var rules = vue.ref(null);
    var realFormRef = vue.ref(null);
    vue.watch(rules, function () {
      setTimeout(function () {
        var _realFormRef$value;
        (_realFormRef$value = realFormRef.value) === null || _realFormRef$value === void 0 ? void 0 : _realFormRef$value.clearValidate();
      }, 100);
    });
    // 对外部暴露出el-form的重置表单方法
    var resetFields = function resetFields() {
      var _realFormRef$value2;
      (_realFormRef$value2 = realFormRef.value) === null || _realFormRef$value2 === void 0 ? void 0 : _realFormRef$value2.resetFields();
    };
    // 对外暴露出el-form的校验方法
    var validate = function validate() {
      var _realFormRef$value3;
      (_realFormRef$value3 = realFormRef.value) === null || _realFormRef$value3 === void 0 ? void 0 : _realFormRef$value3.validate(function (valid, object) {
        if (valid) {
          emit('submit');
        } else {
          emit('fail', object);
          return false;
        }
        return null;
      });
    };
    // 对外暴露出校验某一个字段的方法
    // eslint-disable-next-line
    var validateField = function validateField(props, cb) {
      var _realFormRef$value4;
      (_realFormRef$value4 = realFormRef.value) === null || _realFormRef$value4 === void 0 ? void 0 : _realFormRef$value4.validateField(props, cb);
    };
    // 对外暴露出清除校验的方法
    // eslint-disable-next-line
    var clearValidate = function clearValidate(props) {
      if (props) {
        var _realFormRef$value5;
        (_realFormRef$value5 = realFormRef.value) === null || _realFormRef$value5 === void 0 ? void 0 : _realFormRef$value5.clearValidate(props);
      } else {
        var _realFormRef$value6;
        (_realFormRef$value6 = realFormRef.value) === null || _realFormRef$value6 === void 0 ? void 0 : _realFormRef$value6.clearValidate();
      }
    };
    var getRules = function getRules(list) {
      // eslint-disable-next-line
      var targetRules = list.reduce(function (rules, item) {
        rules[item.value] = [];
        // 必填
        if (item.require) {
          rules[item.value].push({
            required: true,
            trigger: ['blur', 'change'],
            message: "".concat(item.label, "\u4E3A\u5FC5\u586B\u9879")
          });
        }
        // 其他规则
        if (item.rules) {
          var _rules$item$value;
          (_rules$item$value = rules[item.value]).push.apply(_rules$item$value, tool._toConsumableArray(item.rules));
        }
        return rules;
      }, {});
      return targetRules;
    };
    rules.value = props.shouldValidate ? getRules(props.template) : [];
    var initFormItems = props.template.filter(function (item) {
      return !item.filterUnShow && item.show !== false;
    }).map(function (sec) {
      return tool._objectSpread2(tool._objectSpread2({}, sec), {}, {
        model: props.modelValue
      });
    });
    // 文件类型校验的回到
    var typeCheck = function typeCheck(e) {
      emit('type-check', e);
    };
    // 上传文件改变的回调
    var fileChange = function fileChange(file, files) {
      emit('file-change', file, files);
    };
    expose({
      resetFields: resetFields,
      validate: validate,
      validateField: validateField,
      clearValidate: clearValidate
    });
    return function () {
      var _slot;
      return vue.createVNode(vue.resolveComponent("el-form"), tool._objectSpread2({
        "label-position": props.labelPosition,
        "model": props.modelValue,
        "labelWidth": props.labelWidth,
        "rules": rules,
        "ref": realFormRef
      }, attrs), _isSlot$1(_slot = initFormItems.map(function (item) {
        return vue.createVNode(FormItem$1, {
          "tmplItem": item,
          "key": item.value,
          "onTypeCheck": typeCheck,
          "onFileChange": fileChange
        }, null);
      })) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      });
    };
  }
});

var DeletePanel = vue.defineComponent({
  props: {
    dialogConfig: {
      type: Object,
      "default": function _default() {
        return {
          // 删除的对象名称
          businessType: '字段',
          // 控制删除对象的类名
          typeClass: '',
          // 控制tag文字的类名
          tagClass: '',
          // tag文字
          tagText: 'XX',
          // 自定义删除描述
          customDesc: ''
        };
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var getTagClass = vue.computed(function () {
      var target = ['delete-tag'];
      if (props.dialogConfig.tagClass) {
        target.push(props.dialogConfig.tagClass);
      }
      return target.join(' ');
    });
    return function () {
      return vue.createVNode("div", {
        "class": "fy-dialog-delete"
      }, [vue.createVNode("div", null, [vue.createTextVNode("\u786E\u8BA4\u5220\u9664"), vue.createVNode("span", {
        "class": props.dialogConfig.typeClass
      }, [props.dialogConfig.businessType ? props.dialogConfig.businessType : '', slots["default"] && slots["default"]()]), vue.createVNode(vue.resolveComponent("el-tag"), {
        "class": getTagClass.value,
        "type": "danger"
      }, {
        "default": function _default() {
          return [props.dialogConfig.tagText];
        }
      }), vue.createTextVNode("\u5417\uFF1F")]), vue.createVNode("div", {
        "class": "delete-warn"
      }, [props.dialogConfig.customDesc ? vue.createVNode("span", null, [props.dialogConfig.customDesc]) : vue.createVNode("span", null, [vue.createVNode("span", null, [props.dialogConfig.businessType]), vue.createTextVNode("\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\u3002")])])]);
    };
  }
});

var _hoisted_1$l = {
  "class": "fy-dialog-wrap"
};
var _hoisted_2$d = {
  key: 2
};
var script$o = /*#__PURE__*/Object.assign({
  name: 'FYDialog'
}, {
  __name: 'dialog',
  props: {
    // 控制表单显示与否
    modelValue: {
      type: Boolean,
      "default": false
    },
    // 绑定的表单对象
    formModel: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    dialogConfig: {
      type: Object,
      "default": function _default() {
        return {
          // 配合表单类型的title
          title: '',
          // 完全按照传进来的title显示
          fullTitle: '',
          // 控制对话框的class
          modalClass: '',
          // 控制点击空白处关闭对话框与否
          closeOnClickModal: false,
          // 控制表单域标签的位置
          labelPosition: 'top',
          // 表单项列表
          template: [],
          // 控制对话框样式
          dialogType: '',
          // 对话框业务类型
          type: 'create',
          // 表单域标签的宽度
          labelWidth: ''
        };
      }
    }
  },
  emits: ['update:modelValue', 'submit', 'fail', 'cancel', 'confirm', 'type-check'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var props = __props;
    var model = vue.ref({});
    vue.watchEffect(function () {
      model.value = props.formModel;
    });

    // 适时清理校验结果
    vue.watch(function () {
      return props.modelValue;
    }, function (newV) {
      var _formRef$value;
      (_formRef$value = formRef.value) === null || _formRef$value === void 0 ? void 0 : _formRef$value.clearValidate();
      if (!newV) {
        var _formRef$value2;
        // 每次关闭将绑定对象还原初始状态
        (_formRef$value2 = formRef.value) === null || _formRef$value2 === void 0 ? void 0 : _formRef$value2.resetFields();
      }
    });
    var getModalClass = vue.computed(function () {
      var _props$dialogConfig$t;
      var target = [];
      // 为未来对话框扩展样式
      if (props.dialogConfig.dialogType === 'super') {
        target.push('fy-dialog-super');
      }
      // 上同
      if (props.dialogConfig.dialogType === 'max') {
        target.push('fy-dialog-max');
      }
      if (props.dialogConfig.modalClass) {
        target.push(props.modalClass);
      }
      // 统一为表单条目大于5条时，使用双列对话框，否则使用单列对话框
      if (((_props$dialogConfig$t = props.dialogConfig.template) === null || _props$dialogConfig$t === void 0 ? void 0 : _props$dialogConfig$t.length) >= 5) {
        target.push('fy-dialog-default');
      } else if (props.dialogConfig.template) {
        target.push('fy-dialog-small');
      } else if (props.dialogConfig.type === 'delete') {
        target.push('fy-dialog-delete-type');
      }
      return target.join(' ');
    });
    var getTitle = vue.computed(function () {
      // 完全按照传进来的title显示
      if (props.dialogConfig.fullTitle) {
        return props.dialogConfig.fullTitle;
      }
      if (props.dialogConfig.title) {
        var type;
        switch (props.dialogConfig.type) {
          case 'create':
            type = '新建';
            break;
          case 'update':
            type = '修改';
            break;
          case 'delete':
            type = '';
            break;
          default:
            type = '';
            break;
        }
        return "".concat(type).concat(props.dialogConfig.title);
      }
      return '';
    });
    var formRef = vue.ref(null);
    var submit = function submit() {
      if (props.dialogConfig.type !== 'delete') {
        var _formRef$value3;
        (_formRef$value3 = formRef.value) === null || _formRef$value3 === void 0 ? void 0 : _formRef$value3.validate();
      } else {
        emit('confirm');
      }
    };
    var handleSubmit = function handleSubmit() {
      emit('submit', tool._objectSpread2({}, model.value));
    };

    // form组件校验失败时的回调
    var handleSubmitFail = function handleSubmitFail(e) {
      emit('fail', {
        target: e,
        formModel: props.formModel
      });
    };
    var cancel = function cancel() {
      var _formRef$value4;
      (_formRef$value4 = formRef.value) === null || _formRef$value4 === void 0 ? void 0 : _formRef$value4.resetFields();
      emit('update:modelValue', false);
      if (props.dialogConfig.type !== 'delete') {
        emit('cancel', props.formModel);
      } else {
        emit('cancel');
      }
    };
    var closedFn = function closedFn() {
      emit('update:modelValue', false);
    };
    var getComfirmButtonType = vue.computed(function () {
      if (['create', 'update'].includes(props.dialogConfig.type) || !props.dialogConfig.type) {
        return 'primary';
      }
      if (['delete'].includes(props.dialogConfig.type)) {
        return 'danger';
      }
      return 'primary';
    });
    // 文件上传类型校验结果
    var typeCheck = function typeCheck(e) {
      emit('type-check', e);
    };
    // 上传文件改变的回调
    var fileChange = function fileChange(file, files) {
      emit('file-change', file, files);
    };
    return function (_ctx, _cache) {
      var _component_FYButton = vue.resolveComponent("FYButton");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$l, [vue.createVNode(vue.unref(ElementPlus.ElDialog), vue.mergeProps(_ctx.$attrs, {
        "model-value": props.modelValue,
        title: getTitle.value,
        "modal-class": getModalClass.value,
        "close-on-click-modal": props.dialogConfig.closeOnClickModal || false,
        "destroy-on-close": "",
        onClosed: closedFn
      }), {
        header: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "header")];
        }),
        footer: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "footer", {}, function () {
            return [vue.createVNode(_component_FYButton, {
              type: getComfirmButtonType.value,
              style: {
                "display": "flex",
                "padding": "10px 32px",
                "width": "22px",
                "height": "16px",
                "margin-left": "16px",
                "box-sizing": "content-box",
                "color": "#FFF",
                "font-family": "'PingFang SC'",
                "font-size": "16px",
                "font-style": "normal",
                "font-weight": "400",
                "line-height": "22px"
              },
              onClick: submit
            }, {
              "default": vue.withCtx(function () {
                return [vue.createTextVNode(" 确定 ")];
              }),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["type"]), vue.createVNode(_component_FYButton, {
              type: "info",
              text: "",
              link: "",
              style: {
                "padding": "0",
                "color": "#AAA",
                "font-family": "'PingFang SC'",
                "font-size": "16px",
                "font-style": "normal",
                "font-weight": "400",
                "line-height": "22px"
              },
              onClick: cancel
            }, {
              "default": vue.withCtx(function () {
                return [vue.createTextVNode(" 取消 ")];
              }),
              _: 1 /* STABLE */
            })];
          })];
        }),

        "default": vue.withCtx(function () {
          return [props.dialogConfig.type === 'create' || props.dialogConfig.type === 'update' || !props.dialogConfig.type ? (vue.openBlock(), vue.createBlock(vue.unref(Form$1), {
            key: 0,
            ref_key: "formRef",
            ref: formRef,
            modelValue: model.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return model.value = $event;
            }),
            labelPosition: props.dialogConfig.labelPosition,
            labelWidth: props.dialogConfig.labelWidth,
            template: props.dialogConfig.template,
            businessType: props.dialogConfig.type,
            onSubmit: handleSubmit,
            onFail: handleSubmitFail,
            onTypeCheck: typeCheck,
            onFileChange: fileChange
          }, null, 8 /* PROPS */, ["modelValue", "labelPosition", "labelWidth", "template", "businessType"])) : props.dialogConfig.type === 'delete' ? (vue.openBlock(), vue.createBlock(vue.unref(DeletePanel), {
            key: 1,
            dialogConfig: props.dialogConfig
          }, null, 8 /* PROPS */, ["dialogConfig"])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$d, [vue.renderSlot(_ctx.$slots, "default")]))];
        }),
        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */, ["model-value", "title", "modal-class", "close-on-click-modal"])]);
    };
  }
});

script$o.__file = "packages/components/dialog/src/dialog.vue";

var FYDialog = tool.withInstall(script$o);

function useFormModel(props) {
  var model = vue.ref({});
  vue.watch(function () {
    return props.template;
  }, function (template) {
    if (!template) return;
    template.forEach(function (item) {
      if (item.value) {
        model.value[item.value] = vue.unref(item.defaultValue) !== undefined ? vue.unref(item.defaultVale) : '';
      }
    });
  }, {
    immediate: true
  });
  return model;
}

var Select$3 = {
  type: 'select',
  renderer: function renderer(props) {
    return vue.createVNode(FYSelect, tool._objectSpread2(tool._objectSpread2({
      "placeholder": "\u8BF7\u9009\u62E9".concat(props.label)
    }, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var Input$2 = {
  type: 'input',
  renderer: function renderer(props) {
    return vue.createVNode(FYInput, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var DatePicker$1 = {
  type: 'datePicker',
  renderer: function renderer(props) {
    return vue.createVNode(FYDatePicker, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "placeholder": "\u8BF7\u9009\u62E9".concat(props.label),
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      },
      "type": "date"
    }), null);
  }
};

var builtInFormItems$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DatePicker: DatePicker$1,
  Input: Input$2,
  Select: Select$3
});

var filterInlineItemMap = new Map();
function installFilterInlineItem(item) {
  if (Array.isArray(item)) {
    var _iterator = tool._createForOfIteratorHelper(item),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var nape = _step.value;
        filterInlineItemMap.set(nape.type, nape.renderer);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    filterInlineItemMap.set(item.type, item.renderer);
  }
}

// 安装内置组件
installFilterInlineItem(Object.entries(builtInFormItems$3).map(function (_ref) {
  var _ref2 = tool._slicedToArray(_ref, 2),
    value = _ref2[1];
  return value;
}));

function useFormItems(props, model) {
  var FormItems = vue.computed(function () {
    return props.template.filter(function (item) {
      return !vue.unref(item === null || item === void 0 ? void 0 : item.visible);
    }).map(function (item) {
      var FormItemComp = filterInlineItemMap.get(item.type);
      return vue.unref(item.show) === false ? null : vue.createVNode(vue.resolveComponent("ElFormItem"), {
        "label": item.label,
        "key": item.value,
        "prop": item.value
      }, {
        "default": function _default() {
          return [item.render ? vue.createVNode(item.render, {
            "model": vue.unref(model),
            "value": item.value
          }, null) : vue.createVNode(FormItemComp, tool._objectSpread2(tool._objectSpread2({}, item), {}, {
            "model": vue.unref(model)
          }), null)];
        }
      });
    });
  });
  return FormItems;
}

/**
 * @author younghero
 * @Date 2023-7-13 10:54
 * @description 内联表单查询面板
 */

var FilterInline = vue.defineComponent({
  props: {
    template: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    labelConfig: {
      type: Object,
      "default": function _default() {
        return {
          position: 'right',
          width: 70
        };
      }
    },
    lang: {
      type: String,
      "default": '查询'
    },
    loading: {
      type: Boolean,
      "default": false
    }
  },
  emits: ['submit'],
  setup: function setup(props, ctx) {
    var formEl = vue.ref();
    var model = useFormModel(props);
    var FormItems = useFormItems(props, model);
    function submit() {
      ctx.emit('submit', model.value);
    }
    return function () {
      var _props$disabled;
      return vue.createVNode("div", {
        "class": "fy-filter-inline-wrap"
      }, [vue.createVNode(vue.resolveComponent("el-form"), tool._objectSpread2(tool._objectSpread2({
        "class": "custom-el-form flex w-full flex-wrap"
      }, props), {}, {
        "model": vue.unref(model),
        "ref": formEl,
        "disabled": (_props$disabled = props.disabled) !== null && _props$disabled !== void 0 ? _props$disabled : false,
        "label-position": props.labelConfig.position,
        "inline": true
      }), {
        "default": function _default() {
          return [FormItems.value, vue.createVNode(vue.resolveComponent("el-form-item"), null, {
            "default": function _default() {
              return [vue.createVNode(FYButton, {
                "type": "primary",
                "loading": props.loading,
                "onClick": submit
              }, {
                "default": function _default() {
                  return [props.lang];
                }
              })];
            }
          })];
        }
      })]);
    };
  }
});

var FYFilterInline = tool.withInstall(FilterInline);

function useUnfold() {
  var unfold = vue.ref(false);
  return {
    unfold: unfold,
    // eslint-disable-next-line no-return-assign
    toggle: function toggle() {
      return unfold.value = !unfold.value;
    }
  };
}

var _hoisted_1$k = {
  "class": "member-select-header"
};
var _hoisted_2$c = {
  "class": "input-search"
};
var _hoisted_3$7 = {
  "class": "header-content"
};
var _hoisted_4$6 = {
  "class": "segment"
};
var _hoisted_5$3 = ["onClick"];
var script$n = {
  __name: 'TheHeader',
  props: tool._objectSpread2(tool._objectSpread2({}, tool.tmplProps), {}, {
    activeIdx: {
      type: Number,
      "default": 0
    },
    searchVal: {
      type: String,
      "default": ''
    }
  }),
  emits: ['update:activeIdx', 'update:searchVal'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    var props = __props;
    var currentIdx = vue.computed({
      get: function get() {
        return props.activeIdx;
      },
      set: function set(val) {
        emits('update:activeIdx', val);
      }
    });
    var inputVal = vue.computed({
      get: function get() {
        return props.searchVal;
      },
      set: function set(val) {
        emits('update:searchVal', val);
      }
    });
    var translateX = vue.ref();
    var changeActiveTab = function changeActiveTab(item, idx) {
      currentIdx.value = idx;
      translateX.value = "".concat(idx * 100, "%");
    };
    return function (_ctx, _cache) {
      var _component_el_divider = vue.resolveComponent("el-divider");
      var _component_el_icon = vue.resolveComponent("el-icon");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$k, [vue.createElementVNode("div", _hoisted_2$c, [vue.createVNode(vue.unref(FYInput), {
        modelValue: inputVal.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return inputVal.value = $event;
        }),
        placeholder: "搜索"
      }, {
        suffix: vue.withCtx(function () {
          return [vue.createVNode(_component_el_divider, {
            direction: "vertical"
          }), vue.createVNode(_component_el_icon, {
            size: "18"
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(search_default))];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"])]), vue.createElementVNode("div", _hoisted_3$7, [vue.createElementVNode("div", _hoisted_4$6, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.template, function (item, idx) {
        return vue.openBlock(), vue.createElementBlock("div", {
          key: idx,
          "class": vue.normalizeClass(["segment-item", {
            active: idx === __props.activeIdx
          }]),
          onClick: function onClick($event) {
            return changeActiveTab(item, idx);
          }
        }, [vue.createElementVNode("span", null, vue.toDisplayString(item.label), 1 /* TEXT */)], 10 /* CLASS, PROPS */, _hoisted_5$3);
      }), 128 /* KEYED_FRAGMENT */)), vue.createElementVNode("div", {
        "class": "animate-motion",
        style: vue.normalizeStyle({
          '--x': translateX.value,
          '--item-width': "calc(100% / ".concat(_ctx.template.length, ")")
        })
      }, null, 4 /* STYLE */)])])]);
    };
  }
};

script$n.__file = "packages/components/member-select/src/TheHeader.vue";

var _hoisted_1$j = {
  "class": "fy-avatar-wrap"
};
var script$m = /*#__PURE__*/Object.assign({
  name: 'FYAvatar'
}, {
  __name: 'avatar',
  props: {
    name: {
      type: String,
      "default": 'hh'
    },
    full: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(__props) {
    var defaultIconStyle = vue.computed(function () {
      return {
        borderRadius: '50%',
        background: tool.getRandomColor(),
        padding: '5px 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        height: '100%'
      };
    });
    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$j, [vue.createElementVNode("div", {
        style: vue.normalizeStyle(defaultIconStyle.value)
      }, vue.toDisplayString(!__props.full ? __props.name.slice(0, 1) : __props.name), 5 /* TEXT, STYLE */)]);
    };
  }
});

script$m.__file = "packages/components/avatar/src/avatar.vue";

var FYAvatar = tool.withInstall(script$m);

function useMemberCheck(props, emit) {
  var checkedValues = vue.ref([]);
  function onToggle(item) {
    var index = checkedValues.value.findIndex(function (value) {
      return value === item.value;
    });
    if (index !== -1) {
      checkedValues.value.splice(index, 1);
    } else {
      checkedValues.value.push(item.value);
    }
    emit('check', checkedValues.value);
  }

  // 已选中的值重新赋值
  vue.watchEffect(function () {
    checkedValues.value = props.values;
  });
  return {
    checkedValues: checkedValues,
    onToggle: onToggle
  };
}
var Select$2 = vue.defineComponent({
  name: 'MemberSelect',
  props: {
    tmplItem: {
      type: Object,
      "default": function _default() {
        return {
          options: []
        };
      }
    },
    values: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    searchVal: {
      type: String,
      "default": ''
    }
  },
  emits: ['check'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var _useMemberCheck = useMemberCheck(props, emit),
      checkedValues = _useMemberCheck.checkedValues,
      onToggle = _useMemberCheck.onToggle;
    var allOptions = vue.computed(function () {
      return props.tmplItem.options;
    });
    var displayOptions = vue.computed(function () {
      return allOptions.value.filter(function (item) {
        return item.label.includes(props.searchVal);
      });
    });
    return function () {
      return vue.createVNode("div", {
        "class": "fy-body-select"
      }, [displayOptions.value.map(function (item, idx) {
        return vue.createVNode("div", {
          "class": "select-item",
          "key": idx,
          "onClick": function onClick() {
            return onToggle(item);
          }
        }, [vue.createVNode("div", {
          "class": "member"
        }, [vue.createVNode(FYAvatar, {
          "name": item.label
        }, null), vue.createVNode("span", null, [item.label])]), checkedValues.value.includes(item.value) ? vue.createVNode("div", {
          "class": "item-icon"
        }, [vue.createVNode(vue.resolveComponent("el-icon"), {
          "size": 20,
          "color": "#6698ff"
        }, {
          "default": function _default() {
            return [vue.createVNode(check_default, null, null)];
          }
        })]) : null]);
      })]);
    };
  }
});
var TreeSelect = vue.defineComponent({
  name: 'MemberTree',
  props: {
    tmplItem: {
      type: Object,
      "default": function _default() {
        return {
          options: []
        };
      }
    },
    values: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    searchVal: {
      type: String,
      "default": ''
    }
  },
  emits: ['check'],
  setup: function setup(props, _ref2) {
    var emit = _ref2.emit;
    var treeEle = vue.ref();

    // 树过滤
    vue.watch(function () {
      return props.searchVal;
    }, function (val) {
      treeEle.value.filter(val);
    });
    var _useMemberCheck2 = useMemberCheck(props, emit),
      checkedValues = _useMemberCheck2.checkedValues,
      onToggle = _useMemberCheck2.onToggle;
    var data = vue.computed(function () {
      return props.tmplItem.options;
    });
    function renderContent(h, _ref3) {
      var data = _ref3.data;
      // 是成员
      if (data.member) {
        return vue.createVNode("div", {
          "class": "select-item",
          "onClick": function onClick() {
            return onToggle(data);
          }
        }, [vue.createVNode("div", {
          "class": "member"
        }, [vue.createVNode(FYAvatar, {
          "name": data.label
        }, null), vue.createVNode("span", null, [data.label])]), checkedValues.value.includes(data.value) ? vue.createVNode("div", {
          "class": "item-icon"
        }, [vue.createVNode(vue.resolveComponent("el-icon"), {
          "size": 20,
          "color": "#6698ff"
        }, {
          "default": function _default() {
            return [vue.createVNode(check_default, null, null)];
          }
        })]) : null]);
      }
      return vue.createVNode("div", {
        "class": "not-member"
      }, [vue.createVNode("svg", {
        "viewBox": "0 0 16 16",
        "xmlns": "http://www.w3.org/2000/svg",
        "fit": "",
        "height": "1em",
        "width": "1em",
        "preserveAspectRatio": "xMidYMid meet",
        "focusable": "false"
      }, [vue.createVNode("g", {
        "id": "apx1.Base\u57FA\u7840/1.icon\u56FE\u6807/2.normal/\u90E8\u95E8",
        "stroke-width": "1",
        "fill-rule": "evenodd"
      }, [vue.createVNode("path", {
        "d": "M9 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.39l-.016 2.138H11.5a2.1 2.1 0 0 1 2.095 1.95l.005.15V11h.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a.9.9 0 0 0-.787-.893l-.113-.007h-7a.9.9 0 0 0-.893.787l-.007.113V11H4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a2.1 2.1 0 0 1 1.95-2.094l.15-.006h2.894L7.41 5H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm4.8 11.2h-1.6v1.6h1.6v-1.6zm-10 0H2.2v1.6h1.6v-1.6zm5-10H7.2v1.6h1.6V2.2z",
        "id": "apx\u5F62\u72B6\u7ED3\u5408"
      }, null)])]), vue.createVNode("span", null, [data.label])]);
    }
    function filterNode(value, data) {
      if (!value) return true;
      return data.label.includes(value);
    }
    return function () {
      return vue.createVNode("div", {
        "class": "fy-body-tree-select"
      }, [vue.createVNode(vue.resolveComponent("el-tree"), {
        "data": data.value,
        "renderContent": renderContent,
        "ref": treeEle,
        "filterNodeMethod": filterNode
      }, null)]);
    };
  }
});

var BuiltInAllSelect = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Select: Select$2,
  TreeSelect: TreeSelect,
  useMemberCheck: useMemberCheck
});

var _hoisted_1$i = {
  "class": "member-select-body"
};
var script$l = {
  __name: 'TheBody',
  props: tool._objectSpread2(tool._objectSpread2({}, tool.tmplProps), {}, {
    activeIdx: {
      type: Number,
      "default": 0
    },
    checkedValues: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    searchVal: {
      type: String,
      "default": ''
    }
  }),
  emits: ['update:checkedValues'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    var props = __props;
    var activeTmplItem = vue.computed(function () {
      return props.template[props.activeIdx];
    });

    // 选择框渲染器
    var SelectRenderer = vue.computed(function () {
      // 当前选中的tab类型

      // 渲染器组件类型
      var type = activeTmplItem.value.type;

      // 查找是否已经有实现的渲染器组件
      var RendererKey = Object.keys(BuiltInAllSelect).find(function (key) {
        return BuiltInAllSelect[key].name.split('Member')[1].toLocaleLowerCase() === type;
      });
      if (RendererKey) {
        return BuiltInAllSelect[RendererKey];
      }

      // 默认返回最基础的适配组件
      return Select$2;
    });
    var values = vue.computed({
      get: function get() {
        return props.checkedValues;
      },
      set: function set(val) {
        emits('update:checkedValues', val);
      }
    });
    var onCheck = function onCheck(v) {
      values.value = v;
    };
    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$i, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(SelectRenderer.value), {
        tmplItem: activeTmplItem.value,
        values: values.value,
        searchVal: __props.searchVal,
        onCheck: onCheck
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["tmplItem", "values", "searchVal"]))]);
    };
  }
};

script$l.__file = "packages/components/member-select/src/TheBody.vue";

var _hoisted_1$h = {
  "class": "fy-member-footer"
};
var _hoisted_2$b = {
  style: {
    "color": "var(--el-color-primary)"
  }
};
var script$k = {
  __name: 'TheFooter',
  props: {
    checkedValues: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  setup: function setup(__props) {
    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$h, [vue.createTextVNode(" 已选"), vue.createElementVNode("span", _hoisted_2$b, vue.toDisplayString(__props.checkedValues.length), 1 /* TEXT */), vue.createTextVNode("项 ")]);
    };
  }
};

script$k.__file = "packages/components/member-select/src/TheFooter.vue";

var _hoisted_1$g = {
  "class": "fy-member-select-wrap"
};
var script$j = /*#__PURE__*/Object.assign({
  name: 'FYMemberSelect'
}, {
  __name: 'MemberSelect',
  props: tool._objectSpread2(tool._objectSpread2({}, tool.tmplProps), {}, {
    visible: {
      type: Boolean,
      "default": false
    }
  }),
  emits: ['update:visible', 'checked'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      emits = _ref.emit;
    var props = __props;

    /**
     * @author younghero
     * @Date 2023-8-2
     * @description 人员选择
     */

    // popover 受控模式
    var popoverVisible = vue.computed({
      get: function get() {
        return props.visible;
      },
      set: function set(value) {
        emits('update:visible', value);
      }
    });

    // 默认tab下标
    var activeIdx = vue.ref(0);

    // 输入框值
    var searchVal = vue.ref('');

    // 选中的人员信息
    var checkedValues = vue.ref([]);

    // 选中人员的默认值
    vue.watchEffect(function () {
      checkedValues.value = Array.from(props.template.reduce(function (pre, cur) {
        var _cur$defaultValue;
        var defaultValue = (_cur$defaultValue = cur === null || cur === void 0 ? void 0 : cur.defaultValue) !== null && _cur$defaultValue !== void 0 ? _cur$defaultValue : [];
        while (defaultValue.length) {
          pre.add(defaultValue.shift());
        }
        return pre;
      }, new Set()));
    });
    vue.watch(checkedValues.value, function (val) {
      return emits('checked', val);
    });
    __expose({
      checkedValues: vue.computed(function () {
        return checkedValues.value;
      })
    });
    return function (_ctx, _cache) {
      var _component_el_popover = vue.resolveComponent("el-popover");
      return vue.openBlock(), vue.createBlock(_component_el_popover, {
        visible: popoverVisible.value,
        "onUpdate:visible": _cache[3] || (_cache[3] = function ($event) {
          return popoverVisible.value = $event;
        }),
        width: 260,
        "show-arrow": false,
        trigger: "click",
        placement: "bottom-start",
        "popper-class": "fy-member-select-popover",
        "popper-style": "box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
      }, {
        reference: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "default")];
        }),
        "default": vue.withCtx(function () {
          return [vue.createElementVNode("div", _hoisted_1$g, [vue.createVNode(script$n, {
            searchVal: searchVal.value,
            "onUpdate:searchVal": _cache[0] || (_cache[0] = function ($event) {
              return searchVal.value = $event;
            }),
            activeIdx: activeIdx.value,
            "onUpdate:activeIdx": _cache[1] || (_cache[1] = function ($event) {
              return activeIdx.value = $event;
            }),
            template: _ctx.template
          }, null, 8 /* PROPS */, ["searchVal", "activeIdx", "template"]), vue.createVNode(script$l, {
            checkedValues: checkedValues.value,
            "onUpdate:checkedValues": _cache[2] || (_cache[2] = function ($event) {
              return checkedValues.value = $event;
            }),
            searchVal: searchVal.value,
            activeIdx: activeIdx.value,
            template: _ctx.template
          }, null, 8 /* PROPS */, ["checkedValues", "searchVal", "activeIdx", "template"]), vue.createVNode(script$k, {
            checkedValues: checkedValues.value
          }, null, 8 /* PROPS */, ["checkedValues"])])];
        }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["visible"]);
    };
  }
});

script$j.__file = "packages/components/member-select/src/MemberSelect.vue";

var FYMemberSelect = tool.withInstall(script$j);

var Select$1 = {
  type: 'select',
  renderer: function renderer(props) {
    return vue.createVNode(FYSelect, tool._objectSpread2(tool._objectSpread2({
      "teleported": false,
      "placeholder": "\u8BF7\u9009\u62E9".concat(props.label),
      "multiple": true
    }, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      },
      "onChange": function onChange() {
        props.onWithChange({
          field: props.value,
          value: props.model[props.value]
        });
      }
    }), null);
  }
};
var MultipleSelect = {
  type: 'multipleSelect',
  renderer: vue.defineComponent({
    props: {
      model: {
        type: Object
      }
    },
    setup: function setup(props, _ref) {
      var _attrs$defaultValue;
      var attrs = _ref.attrs;
      var inpVal = vue.ref('');
      var displayOptions = vue.computed(function () {
        return attrs.options.filter(function (_ref2) {
          var label = _ref2.label;
          return label.includes(inpVal.value);
        });
      });
      var _useMemberCheck = useMemberCheck({
          values: (_attrs$defaultValue = attrs === null || attrs === void 0 ? void 0 : attrs.defaultValue) !== null && _attrs$defaultValue !== void 0 ? _attrs$defaultValue : []
        }, function () {
          // eslint-disable-next-line vue/no-mutating-props
          props.model[attrs.value] = checkedValues.value;
        }),
        checkedValues = _useMemberCheck.checkedValues,
        onToggle = _useMemberCheck.onToggle;
      return function () {
        return vue.createVNode("div", {
          "class": "fy-filter-display-multipleSelect"
        }, [vue.createVNode(FYInput, {
          "modelValue": inpVal.value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return inpVal.value = $event;
          }
        }, null), vue.createVNode("div", {
          "class": "scroll-content"
        }, [displayOptions.value.map(function (item) {
          return vue.createVNode("div", {
            "key": item.value,
            "class": "check-item"
          }, [vue.createVNode(vue.resolveComponent("el-checkbox"), {
            "checked": checkedValues.value.includes(item.value),
            "onChange": function onChange() {
              onToggle(item);
            }
          }, null), vue.createVNode("div", {
            "class": "shape",
            "style": {
              background: tool.getRandomColor()
            }
          }, [item.label])]);
        })])]);
      };
    }
  })
};

var builtInFormItems$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MultipleSelect: MultipleSelect,
  Select: Select$1
});

var filterDisplayItemMap = new Map();
function installFilterDisplayItem(item) {
  if (Array.isArray(item)) {
    var _iterator = tool._createForOfIteratorHelper(item),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var nape = _step.value;
        filterDisplayItemMap.set(nape.type, nape.renderer);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    filterDisplayItemMap.set(item.type, item.renderer);
  }
}

// 安装内置组件
installFilterDisplayItem(Object.entries(builtInFormItems$2).map(function (_ref) {
  var _ref2 = tool._slicedToArray(_ref, 2),
    value = _ref2[1];
  return value;
}));

var DisplayItem = vue.defineComponent({
  props: {
    tmplItem: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  emits: ['click', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    // 是否展开
    var _useUnfold = useUnfold(),
      unfold = _useUnfold.unfold,
      toggle = _useUnfold.toggle;
    var onClick = function onClick() {
      toggle();
      emit('click', unfold.value);
    };
    var withOnChangeProps = tool._objectSpread2(tool._objectSpread2({}, props.tmplItem), {}, {
      onWithChange: function onWithChange(_ref2) {
        var field = _ref2.field,
          value = _ref2.value;
        emit('change', {
          field: field,
          value: value
        });
        if (props.tmplItem && props.tmplItem.onChange && typeof props.tmplItem.onChange === 'function') {
          props.tmplItem.onChange({
            field: field,
            value: value
          });
        }
      }
    });

    // 表单项组件
    var FormItem = vue.computed(function () {
      if (props.tmplItem.render) return props.tmplItem.render;
      var renderer = filterDisplayItemMap.get(props.tmplItem.type);
      return renderer || vue.createVNode("div", null, null);
    });
    var value = vue.computed(function () {
      return props.tmplItem.value;
    });

    // 下拉弹出框
    var popoverVisible = vue.ref(false);
    var model = vue.ref(tool._defineProperty({}, value.value, props.tmplItem.defaultValue || ''));

    // 已选择的值
    var checkedLength = vue.computed(function () {
      var modelValue = model.value[value.value];
      if (Array.isArray(modelValue)) {
        return modelValue.length;
      }
      if (modelValue) {
        return 1;
      }
      return 0;
    });
    var VSlots = {
      reference: function reference() {
        return vue.createVNode("div", {
          "class": popoverVisible.value ? 'display-item active' : 'display-item',
          "onClick": onClick
        }, [vue.createVNode("span", null, [props.tmplItem.label]), checkedLength.value > 0 ? vue.createVNode("div", {
          "class": "badge"
        }, [checkedLength.value]) : null, vue.createVNode(vue.resolveComponent("el-icon"), null, {
          "default": function _default() {
            return [unfold.value ? vue.createVNode(arrow_down_default, null, null) : vue.createVNode(arrow_up_default, null, null)];
          }
        })]);
      },
      "default": function _default() {
        return vue.createVNode("div", {
          "class": "popover-content"
        }, [vue.createVNode(FormItem.value, tool._objectSpread2({
          "model": model.value
        }, withOnChangeProps), null), vue.createVNode("div", {
          "class": "checked"
        }, [vue.createTextVNode("\u5DF2\u9009"), vue.createVNode("span", {
          "style": "color: var(--el-color-primary)"
        }, [checkedLength.value]), vue.createTextVNode("\u9879")])]);
      }
    };
    return function () {
      return vue.createVNode(vue.resolveComponent("el-popover"), {
        "visible": popoverVisible.value,
        "onUpdate:visible": function onUpdateVisible($event) {
          return popoverVisible.value = $event;
        },
        "width": "200",
        "show-arrow": false,
        "trigger": "click",
        "placement": "bottom-start",
        "popper-class": "filter-display-item-popover",
        "teleported": false
      }, VSlots);
    };
  }
});

/**
 * @author younghero
 * @Date 2023-7-10
 * @description 下拉标签式查询面板
 */

var FilterDisplay = vue.defineComponent({
  name: 'FYFilterDisplay',
  components: {
    DisplayItem: DisplayItem
  },
  props: tool._objectSpread2({}, tool.tmplProps),
  emits: ['change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var emitMap = {};
    function emitChange(_ref2) {
      var field = _ref2.field,
        value = _ref2.value;
      emitMap[field] = value;
      emit('change', emitMap);
    }
    return function () {
      return vue.createVNode("div", {
        "class": "fy-filter-display-wrap"
      }, [props.template.map(function (tmpl) {
        return vue.createVNode(DisplayItem, {
          "tmplItem": tmpl,
          "key": tmpl.value,
          "onChange": emitChange
        }, null);
      })]);
    };
  }
});

var FYFilterDisplay = tool.withInstall(FilterDisplay);

var _hoisted_1$f = {
  "class": "item-left"
};
var _hoisted_2$a = {
  key: 0,
  "class": "menuitemicon"
};
var _hoisted_3$6 = {
  "class": "menuitemname"
};
var _hoisted_4$5 = {
  "class": "item-left"
};
var script$i = {
  __name: 'ActionMenuItem',
  props: {
    tmplItem: {
      type: Object,
      "default": function _default() {
        return {
          label: '-'
        };
      }
    },
    itemModel: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(__props) {
    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock("div", {
        "class": vue.normalizeClass(["fy-action-menu-item", {
          'action-menu-item--disabled': __props.tmplItem.disabled
        }]),
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return __props.tmplItem.onClick(__props.itemModel);
        })
      }, [vue.createElementVNode("div", _hoisted_1$f, [!__props.tmplItem.render ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: 0
      }, [__props.tmplItem.icon ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$a, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tmplItem.icon)))])) : vue.createCommentVNode("v-if", true), vue.createElementVNode("span", _hoisted_3$6, vue.toDisplayString(__props.tmplItem.label), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tmplItem.render), {
        key: 1
      }))]), vue.createElementVNode("div", _hoisted_4$5, [vue.renderSlot(_ctx.$slots, "sideRender")])], 2 /* CLASS */);
    };
  }
};

script$i.__file = "packages/components/action-panel/src/ActionMenuItem.vue";

var _hoisted_1$e = {
  "class": "fy-action-menu-content"
};
var script$h = {
  __name: 'ActionMenuContent',
  props: {
    divider: {
      type: Boolean,
      "default": true
    }
  },
  setup: function setup(__props) {
    return function (_ctx, _cache) {
      var _component_el_divider = vue.resolveComponent("el-divider");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$e, [vue.renderSlot(_ctx.$slots, "default"), vue.withDirectives(vue.createVNode(_component_el_divider, null, null, 512 /* NEED_PATCH */), [[vue.vShow, __props.divider]])]);
    };
  }
};

script$h.__file = "packages/components/action-panel/src/ActionMenuContent.vue";

var _hoisted_1$d = {
  "class": "fy-action-panel-wrap"
};
var _hoisted_2$9 = {
  "class": "fy-action-panel"
};
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !vue.isVNode(s);
}
var script$g = /*#__PURE__*/Object.assign({
  name: 'FYActionPanel'
}, {
  __name: 'ActionPanel',
  props: tool._objectSpread2(tool._objectSpread2({}, tool.tmplProps), {}, {
    visible: {
      type: Boolean,
      "default": false
    },
    placement: {
      type: String,
      "default": 'bottom-start'
    },
    trigger: {
      type: String,
      "default": 'click'
    },
    panelModel: {
      type: Object
    }
  }),
  emits: ['update:visible'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    var props = __props;

    /**
     * @author younghero
     * @Date 2023-7-19
     * @description 动作面板
     */

    // popover 受控模式
    var popoverVisible = vue.computed({
      get: function get() {
        return props.visible;
      },
      set: function set(value) {
        emits('update:visible', value);
      }
    });

    // 根据tmpl生成 menuContent
    var genTmpl = function genTmpl(tmpl) {
      var divider = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var MenuItem = tmpl.map(function (item, idx) {
        var slots = {};
        if (item.sideRender) {
          slots.sideRender = function () {
            return vue.createVNode(item.sideRender, null, null);
          };
        }
        return vue.createVNode(script$i, {
          "key": idx,
          "tmplItem": item,
          "itemModel": props.panelModel
        }, slots);
      });
      return vue.createVNode(script$h, {
        "divider": divider
      }, _isSlot(MenuItem) ? MenuItem : {
        "default": function _default() {
          return [MenuItem];
        }
      });
    };
    var ActionMenuRenderer = vue.computed(function () {
      if (props.template[0] && Array.isArray(props.template[0])) {
        return vue.createVNode(vue.Fragment, null, [props.template.map(function (tmpl, index) {
          return genTmpl(tmpl, index !== props.template.length - 1);
        })]);
      }
      return genTmpl(props.template);
    });
    return function (_ctx, _cache) {
      var _component_el_popover = vue.resolveComponent("el-popover");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$d, [vue.createVNode(_component_el_popover, {
        visible: popoverVisible.value,
        "onUpdate:visible": _cache[0] || (_cache[0] = function ($event) {
          return popoverVisible.value = $event;
        }),
        width: "240",
        "show-arrow": false,
        trigger: __props.trigger,
        placement: __props.placement,
        "popper-class": "fy-action-panel-popover",
        teleported: true
      }, {
        reference: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "default")];
        }),
        "default": vue.withCtx(function () {
          return [vue.createElementVNode("div", _hoisted_2$9, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(ActionMenuRenderer.value)))])];
        }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["visible", "trigger", "placement"])]);
    };
  }
});

script$g.__file = "packages/components/action-panel/src/ActionPanel.vue";

var FYActionPanel = tool.withInstall(script$g);

var _withScopeId$1 = function _withScopeId(n) {
  return vue.pushScopeId("data-v-7539bec5"), n = n(), vue.popScopeId(), n;
};
var _hoisted_1$c = {
  "class": "fy-tree-wrap"
};
var _hoisted_2$8 = {
  "class": "custom-tree-node"
};
var _hoisted_3$5 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fit: "",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false"
  }, [/*#__PURE__*/vue.createElementVNode("g", {
    id: "ailaction/drag--",
    "stroke-width": "1",
    "fill-rule": "evenodd"
  }, [/*#__PURE__*/vue.createElementVNode("g", {
    id: "ail拖动",
    transform: "translate(5 1)",
    "fill-rule": "nonzero"
  }, [/*#__PURE__*/vue.createElementVNode("path", {
    id: "ail形状结合",
    d: "M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  })])])], -1 /* HOISTED */);
});
var _hoisted_4$4 = [_hoisted_3$5];
var _hoisted_5$2 = {
  "class": "icon-svg"
};
var _hoisted_6$1 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fit: "",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false"
  }, [/*#__PURE__*/vue.createElementVNode("g", {
    id: "axlrd/test-case-type-bold",
    "stroke-width": "1",
    "fill-rule": "evenodd"
  }, [/*#__PURE__*/vue.createElementVNode("path", {
    id: "axl形状结合",
    d: "M7.283 9.453a1.453 1.453 0 0 1-.013-.008L4.41 7.794l-.002-.002a.047.047 0 0 0-.041.003l-2.86 1.652a.047.047 0 0 0-.024.04v3.303c0 .017.009.033.024.041l2.86 1.652a.047.047 0 0 0 .047 0l2.86-1.652a.047.047 0 0 0 .01-.007l-.001-.034V9.488v-.035zm.707 4.581l-.016.01-2.86 1.651c-.448.259-1 .259-1.447 0l-2.86-1.651a1.447 1.447 0 0 1-.724-1.254V9.488c0-.518.276-.995.724-1.254l2.86-1.651.02-.012V3.238c0-.518.276-.995.723-1.254L7.27.333c.448-.259 1-.259 1.448 0l2.86 1.651c.448.259.724.736.724 1.254v3.338l.012.007 2.86 1.651c.448.259.724.736.724 1.254v3.302c0 .517-.276.995-.724 1.254l-2.86 1.651c-.448.259-1 .259-1.447 0l-2.86-1.651a1.454 1.454 0 0 1-.017-.01zM5.105 6.578l.01.005 2.86 1.651.001.001A.047.047 0 0 0 8 8.24l.008-.005 2.86-1.651.026-.015a.047.047 0 0 0 .009-.028V3.238a.047.047 0 0 0-.024-.041l-2.86-1.652a.047.047 0 0 0-.047 0L5.11 3.197a.047.047 0 0 0-.024.04V6.54c0 .015.007.029.018.038zm3.593 6.246a.047.047 0 0 0 .009.007l2.86 1.652a.047.047 0 0 0 .047 0l2.86-1.652a.047.047 0 0 0 .024-.04V9.487a.047.047 0 0 0-.024-.041l-2.86-1.652a.047.047 0 0 0-.028-.006 1.454 1.454 0 0 1-.008.005l-2.86 1.65a1.453 1.453 0 0 1-.02.012v3.368z"
  })])], -1 /* HOISTED */);
});
var _hoisted_7$1 = {
  key: 4
};
var _hoisted_8$1 = {
  key: 5
};
var _hoisted_9$1 = {
  key: 0,
  "class": "fy-tree-node-content"
};
var _hoisted_10$1 = {
  key: 1,
  "class": "fy-tree-node-content fy-tree-content-input"
};
var _hoisted_11$1 = ["onClick"];
var _hoisted_12$1 = /*#__PURE__*/_withScopeId$1(function () {
  return /*#__PURE__*/vue.createElementVNode("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fit: "",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false"
  }, [/*#__PURE__*/vue.createElementVNode("g", {
    id: "apb1.Base基础/1.icon图标/2.normal/more-vertical",
    "stroke-width": "1",
    "fill-rule": "evenodd"
  }, [/*#__PURE__*/vue.createElementVNode("path", {
    id: "apb形状结合",
    d: "M8 4.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
  })])], -1 /* HOISTED */);
});
var script$f = /*#__PURE__*/Object.assign({
  name: 'FYTree'
}, {
  __name: 'tree',
  props: {
    config: {
      type: Object,
      "default": function _default() {
        return {
          expandOnClickNode: false,
          tooltipText: '更多',
          editable: false,
          // 是否使用表单进行树的编辑
          ifDialog: false,
          draggable: false,
          deleteDesc: '模块删除后不可恢复，删除模块会一起删除子模块。',
          dialogTmpl: [{
            type: 'input',
            label: '模板名称',
            value: 'label',
            limit: 10,
            require: true,
            rules: [{
              min: 3,
              max: 5,
              message: 'Length should be 3 to 5',
              trigger: 'blur'
            }]
          }, {
            type: 'select',
            label: '负责人',
            value: 'person',
            options: [{
              value: 'value1',
              label: '李恩伟'
            }, {
              value: 'value2',
              label: '藏炼鑫'
            }]
          }, {
            type: 'cascader',
            label: '组织',
            value: 'organization',
            options: [{
              value: 'guide',
              label: '研发部',
              children: [{
                value: 'disciplines',
                label: '前端',
                children: [{
                  value: 'consistency',
                  label: '架构组'
                }, {
                  value: 'feedback',
                  label: '业务组'
                }]
              }, {
                value: 'navigation',
                label: '后端组',
                children: [{
                  value: 'side nav',
                  label: 'AI组'
                }, {
                  value: 'top nav',
                  label: 'Java组'
                }]
              }]
            }]
          }],
          dataSource: [{
            id: 1,
            label: 'Level one 1',
            allowDrag: false,
            children: [{
              label: 'Level two 1-1',
              id: 2,
              children: [{
                id: 3,
                label: 'Level three 1-1-1',
                notLevelOne: true
              }]
            }]
          }, {
            label: 'Level one 2',
            id: 4,
            levelOne: true,
            children: [{
              id: 5,
              label: 'Level two 2-1',
              children: [{
                id: 6,
                label: 'Level three 2-1-1',
                children: [{
                  id: 14,
                  label: 'Level three 2-1-1-1'
                }, {
                  id: 15,
                  label: 'Level three 2-1-1-2'
                }]
              }]
            }, {
              id: 7,
              label: 'Level two 2-2',
              children: [{
                id: 8,
                label: 'Level three 2-2-1'
              }]
            }]
          }, {
            label: 'Level one 3',
            id: 9,
            children: [{
              forbid: [1, 4],
              label: 'Level two 3-1',
              id: 10,
              children: [{
                id: 11,
                label: 'Level three 3-1-1'
              }]
            }, {
              id: 12,
              label: 'Level two 3-2',
              children: [{
                id: 13,
                label: 'Level three 3-2-1'
              }]
            }]
          }]
        };
      }
    }
  },
  emits: ['node-click'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var props = __props;
    var myRef = vue.ref(null);
    var formModel = vue.ref({});
    var dialogVisible = vue.ref(false);
    var createSubTree = function createSubTree(_ref2) {
      var node = _ref2.node,
        target = _ref2.data;
      dialogConfig.value.type = 'create';
      dialogConfig.value.title = '新增';
      if (props.config.ifDialog === true) {
        var _props$config$dialogT;
        // 构建表单所需要的数据
        dialogConfig.value.title = '新增';
        (_props$config$dialogT = props.config.dialogTmpl) === null || _props$config$dialogT === void 0 ? void 0 : _props$config$dialogT.forEach(function (item) {
          formModel.value[item.value] = '';
        });
        dialogVisible.value = true;
        currentTarget.value = {
          node: node,
          data: target
        };
        setTimeout(function () {
          target.panelVisible = false;
        }, 0);
      } else {
        // 构建子项，id为当前所有项数+1
        var newChild = {
          id: tool.countNodesRecursive(props.config.dataSource) + 1,
          label: '新模块',
          children: [],
          type: 'input'
        };
        myRef.value.append(newChild, target.id);
        setTimeout(function () {
          node.expand();
          target.panelVisible = false;
        }, 0);
      }
    };
    var handleSubmit = function handleSubmit() {
      if (dialogConfig.value.type === 'create') {
        var newChild = tool._objectSpread2({
          id: tool.countNodesRecursive(props.config.dataSource) + 1,
          children: [],
          type: 'text'
        }, formModel.value);
        myRef.value.append(newChild, currentTarget.value.data.id);
        dialogVisible.value = false;
        setTimeout(function () {
          currentTarget.value.node.expand();
        }, 0);
      } else {
        var parent = currentTarget.value.node.parent;
        var target = tool._objectSpread2(tool._objectSpread2(tool._objectSpread2({}, currentTarget.value.data), formModel.value), {}, {
          type: 'text'
        });
        var targetSon;
        // 采用删去旧项加入新项的方式进行树节点更新
        if (parent.parent === null) {
          targetSon = parent.data.findIndex(function (item) {
            return item.id === currentTarget.value.data.id;
          });
          parent.data.splice(targetSon, 1, target);
        } else {
          targetSon = parent.data.children.findIndex(function (item) {
            return item.id === currentTarget.value.data.id;
          });
          parent.data.children.splice(targetSon, 1, target);
        }
        dialogVisible.value = false;
      }
    };
    var handleCancel = function handleCancel() {
      dialogVisible.value = false;
    };
    var editTree = function editTree(_ref3) {
      var node = _ref3.node,
        target = _ref3.data;
      dialogConfig.value.type = 'update';
      dialogConfig.value.title = '编辑';
      if (props.config.ifDialog === true) {
        var _props$config$dialogT2;
        dialogConfig.value.title = '编辑';
        (_props$config$dialogT2 = props.config.dialogTmpl) === null || _props$config$dialogT2 === void 0 ? void 0 : _props$config$dialogT2.forEach(function (item) {
          formModel.value[item.value] = target[item.value];
        });
        dialogVisible.value = true;
        currentTarget.value = {
          node: node,
          data: target
        };
        setTimeout(function () {
          target.panelVisible = false;
        }, 0);
      } else {
        target.type = 'input';
        setTimeout(function () {
          target.panelVisible = false;
        }, 0);
      }
    };
    var currentTarget = vue.ref(null);
    var deleteTree = function deleteTree(_ref4) {
      var node = _ref4.node,
        target = _ref4.data;
      dialogDeleteConfig.value.businessType = '模块';
      dialogDeleteConfig.value.tagText = target.label;
      deleteDialogVisible.value = true;
      currentTarget.value = {
        node: node,
        data: target
      };
      setTimeout(function () {
        target.panelVisible = false;
      }, 0);
    };
    var handleDeleteConfirm = function handleDeleteConfirm() {
      var _myRef$value;
      (_myRef$value = myRef.value) === null || _myRef$value === void 0 ? void 0 : _myRef$value.remove(currentTarget.value.node);
      deleteDialogVisible.value = false;
    };
    var handleDeleteCancel = function handleDeleteCancel() {
      deleteDialogVisible.value = false;
    };
    var itemNodeClick = function itemNodeClick(obj, node, treeNode, event) {
      emit('node-click', obj, node, treeNode, event);
    };
    var tmpl = tool.mergeTemplate([{
      label: '新建子模块',
      icon: vue.createVNode(vue.resolveComponent("el-icon"), null, {
        "default": function _default() {
          return [vue.createVNode(plus_default, null, null)];
        }
      }),
      onClick: function onClick(e) {
        createSubTree(e);
      }
    }], [{
      label: '编辑',
      icon: vue.createVNode(vue.resolveComponent("el-icon"), null, {
        "default": function _default() {
          return [vue.createVNode(edit_default, null, null)];
        }
      }),
      onClick: function onClick(e) {
        editTree(e);
      }
    }, {
      label: '删除',
      icon: vue.createVNode(vue.resolveComponent("el-icon"), null, {
        "default": function _default() {
          return [vue.createVNode(delete_default, null, null)];
        }
      }),
      onClick: function onClick(e) {
        deleteTree(e);
      }
    }]);
    var defaultProps = {
      children: 'children',
      label: 'label'
    };
    var togglePanel = function togglePanel(e) {
      if (e.panelVisible) {
        e.panelVisible = false;
      }
    };
    var nodeExpand = function nodeExpand(obj, node) {
      node.isExpand = true;
    };
    var nodeCollapse = function nodeCollapse(obj, node) {
      node.isExpand = false;
    };
    var nodeClick = function nodeClick(node) {
      if (node.expanded) {
        node.collapse();
      } else {
        node.expand();
      }
    };
    var allowDrag = function allowDrag(draggingNode) {
      return draggingNode.data.allowDrag !== false;
    };
    var allowDrop = function allowDrop(draggingNode, dropNode, type) {
      // 某项只能被拖至最外层
      if (draggingNode.data.levelOne === true) {
        return dropNode.level === 1 && type !== 'inner';
      }
      // 某项不能被拖至最外层
      if (draggingNode.data.notLevelOne === true) {
        return dropNode.level === 1 && type !== 'prev' && type !== 'next' || dropNode.level !== 1;
      }
      // 某些项不能被拖至某些项内
      if (draggingNode.data.forbid && draggingNode.data.forbid.length) {
        return !draggingNode.data.forbid.includes(dropNode.data.id);
      }
      return true;
    };
    var handleEnter = function handleEnter(e, target) {
      target.type = 'text';
    };
    var deleteDialogVisible = vue.ref(false);
    var dialogDeleteConfig = vue.ref({
      title: '确认删除',
      type: 'delete',
      businessType: '',
      tagText: '',
      customDesc: props.config.deleteDesc || '请注意，删除后无法恢复'
    });
    var dialogConfig = vue.ref({
      title: '新增',
      template: props.config.dialogTmpl
    });
    return function (_ctx, _cache) {
      var _component_el_icon = vue.resolveComponent("el-icon");
      var _component_el_tooltip = vue.resolveComponent("el-tooltip");
      var _component_FYInput = vue.resolveComponent("FYInput");
      var _component_FYActionPanel = vue.resolveComponent("FYActionPanel");
      var _component_FYDialog = vue.resolveComponent("FYDialog");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$c, [vue.createVNode(vue.unref(ElementPlus.ElTree), {
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
        "default": vue.withCtx(function (_ref5) {
          var node = _ref5.node,
            data = _ref5.data;
          return [vue.createElementVNode("span", _hoisted_2$8, [vue.createElementVNode("span", {
            "class": vue.normalizeClass(['node-left-icon', props.config.draggable ? 'visibility' : 'visibility-hidden'])
          }, _hoisted_4$4, 2 /* CLASS */), node.data.children && node.data.children.length && !node.expanded ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 0,
            "class": "expand-icon",
            onClick: function onClick($event) {
              return nodeClick(node);
            }
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(arrow_right_default))];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])) : node.data.children && node.data.children.length && node.expanded ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 1,
            "class": "expand-icon",
            onClick: function onClick($event) {
              return nodeClick(node);
            }
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(arrow_down_default))];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])) : !node.data.children || !node.data.children.length ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 2,
            "class": "expand-icon",
            style: {
              "visibility": "hidden"
            }
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(arrow_down_default))];
            }),
            _: 1 /* STABLE */
          })) : vue.createCommentVNode("v-if", true), !data.render ? vue.renderSlot(_ctx.$slots, "icon", {
            key: 3
          }, function () {
            return [vue.createElementVNode("span", _hoisted_5$2, [vue.renderSlot(_ctx.$slots, "custom-icon", {}, function () {
              return [_hoisted_6$1];
            })])];
          }) : vue.createCommentVNode("v-if", true), data.render ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7$1, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(data.render)))])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_8$1, [data.type !== 'input' ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_9$1, [vue.createVNode(_component_el_tooltip, {
            "class": "box-item",
            effect: "dark",
            content: data.label,
            placement: "top",
            "show-after": "1000"
          }, {
            "default": vue.withCtx(function () {
              return [vue.createTextVNode(vue.toDisplayString(data.label), 1 /* TEXT */)];
            }),

            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["content"])])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_10$1, [vue.createVNode(_component_FYInput, {
            modelValue: data.label,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return data.label = $event;
            },
            autoFocus: "",
            onEnter: function onEnter(e) {
              return handleEnter(e, data);
            },
            onBlur: function onBlur(e) {
              return handleEnter(e, data);
            }
          }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "onEnter", "onBlur"])])), vue.createVNode(_component_FYActionPanel, {
            visible: data.panelVisible,
            "onUpdate:visible": function onUpdateVisible($event) {
              return data.panelVisible = $event;
            },
            template: vue.unref(tmpl),
            panelModel: {
              node: node,
              data: data
            }
          }, {
            "default": vue.withCtx(function () {
              return [props.config.editable ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                "class": "node-right-icon",
                onClick: function onClick($event) {
                  return togglePanel(data);
                }
              }, [_hoisted_12$1, vue.createCommentVNode(" <el-tooltip\n                class=\"box-item\"\n                effect=\"dark\"\n                :content=\"props.config.tooltipText || '更多'\"\n                placement=\"top\"\n              /> ")], 8 /* PROPS */, _hoisted_11$1)) : vue.createCommentVNode("v-if", true)];
            }),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["visible", "onUpdate:visible", "template", "panelModel"])]))])];
        }),
        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["data", "expand-on-click-node", "draggable"]), vue.createCommentVNode(" 删除对话框 "), vue.createVNode(_component_FYDialog, {
        modelValue: deleteDialogVisible.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return deleteDialogVisible.value = $event;
        }),
        dialogConfig: dialogDeleteConfig.value,
        onConfirm: handleDeleteConfirm,
        onCancel: handleDeleteCancel
      }, null, 8 /* PROPS */, ["modelValue", "dialogConfig"]), vue.createCommentVNode(" 新增和编辑对话框 "), vue.createVNode(_component_FYDialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return dialogVisible.value = $event;
        }),
        dialogConfig: dialogConfig.value,
        formModel: formModel.value,
        onSubmit: handleSubmit,
        onCancel: handleCancel
      }, null, 8 /* PROPS */, ["modelValue", "dialogConfig", "formModel"])]);
    };
  }
});

script$f.__scopeId = "data-v-7539bec5";
script$f.__file = "packages/components/tree/src/tree.vue";

var FYTree = tool.withInstall(script$f);

var Select = {
  type: 'select',
  renderer: function renderer(props) {
    return vue.createVNode(FYSelect, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var Input$1 = {
  type: 'input',
  renderer: function renderer(props) {
    return vue.createVNode(FYInput, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var Switch = {
  type: 'switch',
  renderer: function renderer(props) {
    return vue.createVNode(FYSwitch, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var DatePicker = {
  type: 'datePicker',
  renderer: function renderer(props) {
    return vue.createVNode(FYDatePicker, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "type": "date",
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};
var Cascader = {
  type: 'cascader',
  renderer: function renderer(props) {
    return vue.createVNode(FYCascader, tool._objectSpread2(tool._objectSpread2({}, props), {}, {
      "modelValue": props.model[props.value],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return props.model[props.value] = $event;
      }
    }), null);
  }
};

var builtInFormItems$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Cascader: Cascader,
  DatePicker: DatePicker,
  Input: Input$1,
  Select: Select,
  Switch: Switch
});

var formItemMap = new Map();
function installFormItem(item) {
  if (Array.isArray(item)) {
    var _iterator = tool._createForOfIteratorHelper(item),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var nape = _step.value;
        formItemMap.set(nape.type, nape.renderer);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    formItemMap.set(item.type, item.renderer);
  }
}

// 安装内置组件
installFormItem(Object.entries(builtInFormItems$1).map(function (_ref) {
  var _ref2 = tool._slicedToArray(_ref, 2),
    value = _ref2[1];
  return value;
}));

var FormItem = vue.defineComponent({
  props: {
    tmplItem: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    // 表示采用系统配置的表单样式
    config: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    // 表单项组件
    var FormItemCom = vue.computed(function () {
      if (props.tmplItem.render) return props.tmplItem.render;
      var renderer = formItemMap.get(props.tmplItem.type);
      return renderer || vue.createVNode("div", null, null);
    });
    var getFromStyle = function getFromStyle(item) {
      if (item.full) {
        return {
          flex: '0 0 100%'
        };
      }
      if (item.half) {
        return {
          flex: '0 0 45%'
        };
      }
      if (item.oneOfFour) {
        return {
          flex: '0 0 24.5%'
        };
      }
      return {
        flex: '0 0 100%'
      };
    };
    var getClass = vue.computed(function () {
      var target = [];
      if (props.config) {
        target.push('form-item-config-wrap');
      }
      return target.join(' ');
    });
    return function () {
      return vue.createVNode(vue.resolveComponent("ElFormItem"), {
        "label": props.tmplItem.label,
        "key": props.tmplItem.value,
        "prop": props.tmplItem.value,
        "style": getFromStyle(props.tmplItem),
        "class": getClass.value,
        "disabled": !!props.tmplItem.disabled
      }, {
        "default": function _default() {
          return [vue.createVNode(FormItemCom.value, tool._objectSpread2({
            "model": props.tmplItem.model
          }, props.tmplItem), null), props.config ? vue.createVNode("div", {
            "class": "fy-form-config-info",
            "style": {
              marginLeft: '20px',
              width: '16px',
              height: '16px'
            }
          }, null) : null, props.config ? vue.createVNode("slot", null, null) : null, props.config ? vue.createVNode("div", {
            "class": "fy-form-config-desc",
            "style": {
              marginLeft: '4px',
              fontSize: '12px'
            }
          }, [props.tmplItem.desc]) : null];
        }
      });
    };
  }
});

var FormItemDetail = vue.defineComponent({
  props: {
    tmplItem: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    // 表示采用系统配置的表单样式
    config: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props) {
    // 表单项组件
    var FormItemCom = vue.computed(function () {
      return vue.createVNode("div", {
        "class": "form-item-detail"
      }, [props.tmplItem.model[props.tmplItem.value]]);
    });
    // 采用不同的表单样式
    var getFromStyle = function getFromStyle(item) {
      if (item.full) {
        return {
          flex: '0 0 100%'
        };
      }
      if (item.half) {
        return {
          flex: '0 0 45%'
        };
      }
      if (item.oneOfFour) {
        return {
          flex: '0 0 24.5%'
        };
      }
      return {
        flex: '0 0 100%'
      };
    };
    // 采用详情样式或者系统配置样式
    var getClass = vue.computed(function () {
      var target = [];
      target.push('form-item-detail-wrap');
      if (props.config) {
        target.push('form-item-config-wrap');
      }
      return target.join(' ');
    });
    return function () {
      return vue.createVNode(vue.resolveComponent("ElFormItem"), {
        "label": props.tmplItem.label,
        "key": props.tmplItem.value,
        "prop": props.tmplItem.value,
        "style": getFromStyle(props.tmplItem),
        "class": getClass.value
      }, {
        "default": function _default() {
          return [vue.createVNode(FormItemCom.value, null, null), props.config ? vue.createVNode("div", {
            "class": "fy-form-config-info",
            "style": {
              marginLeft: '20px',
              width: '16px',
              height: '16px'
            }
          }, null) : null, props.config ? vue.createVNode("slot", null, null) : null, props.config ? vue.createVNode("div", {
            "class": "fy-form-config-desc",
            "style": {
              marginLeft: '4px',
              fontSize: '12px'
            }
          }, [props.tmplItem.desc]) : null];
        }
      });
    };
  }
});

var Form = vue.defineComponent({
  name: 'FYForm',
  props: {
    template: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    labelPosition: {
      type: String,
      "default": 'top'
    },
    labelWidth: {
      type: String,
      "default": 'auto'
    },
    modelValue: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    shouldValidate: {
      type: Boolean,
      "default": true
    },
    // 分为write类型（即新增和编辑），以及read（详情）
    businessType: {
      type: String,
      "default": 'write'
    },
    // form组件和formItem组件的配置
    config: {
      type: Boolean,
      "default": false
    }
  },
  emits: ['submit', 'fail', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      emit = _ref.emit,
      expose = _ref.expose;
    var rules = vue.ref(null);
    var realFormRef = vue.ref(null);
    vue.watch(rules, function () {
      setTimeout(function () {
        var _realFormRef$value;
        (_realFormRef$value = realFormRef.value) === null || _realFormRef$value === void 0 ? void 0 : _realFormRef$value.clearValidate();
      }, 100);
    });
    // 对外暴露出el-form的resetFields
    var resetFields = function resetFields() {
      var _realFormRef$value2;
      (_realFormRef$value2 = realFormRef.value) === null || _realFormRef$value2 === void 0 ? void 0 : _realFormRef$value2.resetFields();
    };
    // 对外暴露出el-form的validate
    var validate = function validate() {
      var _realFormRef$value3;
      (_realFormRef$value3 = realFormRef.value) === null || _realFormRef$value3 === void 0 ? void 0 : _realFormRef$value3.validate(function (valid, object) {
        if (valid) {
          emit('submit');
        } else {
          emit('fail', object);
          return false;
        }
        return null;
      });
    };
    // 对外暴露出el-form的validateField
    // eslint-disable-next-line
    var validateField = function validateField(props, cb) {
      var _realFormRef$value4;
      (_realFormRef$value4 = realFormRef.value) === null || _realFormRef$value4 === void 0 ? void 0 : _realFormRef$value4.validateField(props, cb);
    };
    // 对外暴露出el-form的clearValidate
    // eslint-disable-next-line
    var clearValidate = function clearValidate(props) {
      if (props) {
        var _realFormRef$value5;
        (_realFormRef$value5 = realFormRef.value) === null || _realFormRef$value5 === void 0 ? void 0 : _realFormRef$value5.clearValidate(props);
      } else {
        var _realFormRef$value6;
        (_realFormRef$value6 = realFormRef.value) === null || _realFormRef$value6 === void 0 ? void 0 : _realFormRef$value6.clearValidate();
      }
    };
    var getRules = function getRules(list) {
      // eslint-disable-next-line
      var targetRules = list.reduce(function (rules, item) {
        rules[item.value] = [];
        // 必填
        if (item.require) {
          rules[item.value].push({
            required: true,
            trigger: ['blur', 'change'],
            message: "".concat(item.label, "\u4E3A\u5FC5\u586B\u9879")
          });
        }
        // 其他规则
        if (item.rules) {
          var _rules$item$value;
          (_rules$item$value = rules[item.value]).push.apply(_rules$item$value, tool._toConsumableArray(item.rules));
        }
        return rules;
      }, {});
      return targetRules;
    };
    rules.value = props.shouldValidate ? getRules(props.template) : [];
    var initFormItems = props.template.filter(function (item) {
      return !item.filterUnShow && item.show !== false;
    }).map(function (sec) {
      return tool._objectSpread2(tool._objectSpread2({}, sec), {}, {
        model: props.modelValue
      });
    });
    // 控制表单项的样式
    var styleObj = {
      full: !(initFormItems.length > 4) || props.config,
      half: initFormItems.length > 4 && !props.config,
      oneOfFour: false
    };
    initFormItems = initFormItems.map(function (item) {
      return tool._objectSpread2(tool._objectSpread2({}, item), styleObj);
    });
    expose({
      resetFields: resetFields,
      validate: validate,
      validateField: validateField,
      clearValidate: clearValidate
    });
    return function () {
      return vue.createVNode(vue.resolveComponent("el-form"), tool._objectSpread2({
        "label-position": props.labelPosition,
        "model": props.modelValue,
        "labelWidth": props.labelWidth,
        "rules": rules,
        "ref": realFormRef
      }, attrs), {
        "default": function _default() {
          return [props.businessType !== 'read' ? initFormItems.map(function (item) {
            return vue.createVNode(FormItem, {
              "tmplItem": item,
              "key": item.value,
              "config": props.config
            }, null) // eslint-disable-next-line
            ;
          }) : initFormItems.map(function (item) {
            return vue.createVNode(FormItemDetail, {
              "tmplItem": item,
              "key": item.value,
              "config": props.config
            }, null) // eslint-disable-next-line
            ;
          })];
        }
      });
    };
  }
});

var FYForm = tool.withInstall(Form);

var _hoisted_1$b = /*#__PURE__*/vue.createElementVNode("span", null, [/*#__PURE__*/vue.createElementVNode("svg", {
  width: "22",
  height: "18",
  viewBox: "0 0 22 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/vue.createCommentVNode(" eslint-disable-next-line "), /*#__PURE__*/vue.createElementVNode("g", {
  id: "å¯¼å…¥ 1"
}, [/*#__PURE__*/vue.createElementVNode("path", {
  id: "Vector",
  d: "M20.7127 10.3808C20.7127 11.2224 20.5619 12.0378 20.2878 12.7874C19.2874 9.98626 16.6288 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.2164 10.052 12.8053 10.2624C12.6409 10.3413 12.449 10.3939 12.2709 10.3939C12.0105 10.3939 11.7638 10.315 11.5445 10.1572L6.72063 6.55394C6.41911 6.33038 6.24097 5.9753 6.24097 5.59395C6.24097 5.21259 6.41913 4.85751 6.72063 4.63393L11.5445 1.0175C11.7501 0.8597 12.0105 0.780792 12.2709 0.780792C12.449 0.780792 12.6409 0.820238 12.8053 0.912294C13.2164 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C17.4648 3.17421 20.7127 6.40927 20.7127 10.3808Z",
  fill: "white"
}), /*#__PURE__*/vue.createElementVNode("path", {
  id: "Vector_2",
  d: "M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z",
  fill: "white"
})])])], -1 /* HOISTED */);
var _hoisted_2$7 = /*#__PURE__*/vue.createElementVNode("span", null, [/*#__PURE__*/vue.createElementVNode("svg", {
  width: "22",
  height: "18",
  viewBox: "0 0 22 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/vue.createCommentVNode(" eslint-disable-next-line "), /*#__PURE__*/vue.createElementVNode("g", {
  id: "å¯¼å…¥ 1"
}, [/*#__PURE__*/vue.createElementVNode("path", {
  id: "Vector",
  d: "M20.7127 10.3808C20.7127 11.2224 20.5619 12.0378 20.2878 12.7874C19.2874 9.98626 16.6288 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.2164 10.052 12.8053 10.2624C12.6409 10.3413 12.449 10.3939 12.2709 10.3939C12.0105 10.3939 11.7638 10.315 11.5445 10.1572L6.72063 6.55394C6.41911 6.33038 6.24097 5.9753 6.24097 5.59395C6.24097 5.21259 6.41913 4.85751 6.72063 4.63393L11.5445 1.0175C11.7501 0.8597 12.0105 0.780792 12.2709 0.780792C12.449 0.780792 12.6409 0.820238 12.8053 0.912294C13.2164 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C17.4648 3.17421 20.7127 6.40927 20.7127 10.3808Z",
  fill: "white"
}), /*#__PURE__*/vue.createElementVNode("path", {
  id: "Vector_2",
  d: "M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z",
  fill: "white"
})])])], -1 /* HOISTED */);
var script$e = /*#__PURE__*/Object.assign({
  name: 'ButtonUpload'
}, {
  __name: 'ButtonUpload',
  emits: ['type-check', 'file-change'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var config = vue.inject('config');
    var buttonVisible = vue.ref(false);
    var tmpl = [{
      label: '从文件导入',
      icon: vue.createVNode(vue.resolveComponent("el-icon"), null, {
        "default": function _default() {
          return [vue.createVNode(edit_default, null, null)];
        }
      }),
      onClick: function onClick() {
        openDialog();
      }
    }];
    var visible = vue.ref(false);
    // eslint-disable-next-line
    vue.ref(false);
    var openDialog = function openDialog() {
      // 通过表单选取文件进行上传
      if (config.buttonConfig.type === 'dialog') {
        visible.value = true;
      } else {
        // 直接选取文件上传
        directUpload();
      }
    };
    var handleSubmit = function handleSubmit() {};
    var handleFail = function handleFail() {};
    var handleCancel = function handleCancel() {};
    vue.provide('dialogVisible', visible);
    var currentFile = vue.ref(null);
    var currentFileName = vue.ref('');
    var onChange = function onChange(file, files) {
      var typeList = file.name.split('.');
      var type = typeList[typeList.length - 1];
      currentFileName.value = file.name;
      if (['pdf'].includes(type)) {
        currentFile.value = 'pdf';
      } else if (['doc', 'docx'].includes(type)) {
        currentFile.value = 'doc';
      } else if (['jpg', 'jpeg', 'gif', 'png'].includes(type)) {
        currentFile.value = 'jpg';
      } else if (['xlsx', 'xls', 'csv'].includes(type)) {
        currentFile.value = 'excel';
      } else if (['rar', 'zip'].includes(type)) {
        currentFile.value = 'zip';
      } else {
        currentFile.value = 'file';
      }
      // 限制文件类型
      if (config.allow && config.allow.length) {
        if (config.allow.includes(type)) {
          emit('type-check', true);
        } else {
          emit('type-check', false);
        }
      }
      emit('file-change', file, files);
    };
    var myRef = vue.ref(null);
    var directUpload = function directUpload() {
      myRef.value.click();
    };
    var fileChange = function fileChange(file, files) {
      console.log(file, files);
    };
    return function (_ctx, _cache) {
      var _component_FYButton = vue.resolveComponent("FYButton");
      var _component_FYActionPanel = vue.resolveComponent("FYActionPanel");
      var _component_FYDialog = vue.resolveComponent("FYDialog");
      var _component_el_upload = vue.resolveComponent("el-upload");
      return vue.unref(config).buttonConfig.type === 'dialog' ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: 0
      }, [vue.createVNode(_component_FYActionPanel, {
        visible: buttonVisible.value,
        "onUpdate:visible": _cache[0] || (_cache[0] = function ($event) {
          return buttonVisible.value = $event;
        }),
        template: tmpl
      }, {
        "default": vue.withCtx(function () {
          return [vue.createVNode(_component_FYButton, {
            type: "primary",
            "class": "upload-btn"
          }, {
            "default": vue.withCtx(function () {
              return [_hoisted_1$b, vue.createTextVNode(" 导入 ")];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["visible"]), vue.createVNode(_component_FYDialog, {
        modelValue: visible.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return visible.value = $event;
        }),
        dialogConfig: vue.unref(config).buttonConfig.dialogConfig,
        formModel: vue.unref(config).buttonConfig.formModel,
        onSubmit: handleSubmit,
        onFail: handleFail,
        onCancel: handleCancel,
        onFileChange: fileChange
      }, null, 8 /* PROPS */, ["modelValue", "dialogConfig", "formModel"])], 64 /* STABLE_FRAGMENT */)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: 1
      }, [vue.createVNode(_component_FYActionPanel, {
        visible: buttonVisible.value,
        "onUpdate:visible": _cache[2] || (_cache[2] = function ($event) {
          return buttonVisible.value = $event;
        }),
        template: tmpl
      }, {
        "default": vue.withCtx(function () {
          return [vue.createVNode(_component_FYButton, {
            type: "primary",
            "class": "upload-btn"
          }, {
            "default": vue.withCtx(function () {
              return [_hoisted_2$7, vue.createTextVNode(" 导入 ")];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["visible"]), vue.createVNode(_component_el_upload, {
        "class": "fy-upload-button",
        drag: vue.unref(config).drag,
        multiple: vue.unref(config).multiple,
        "auto-upload": false,
        "on-change": onChange,
        "show-file-list": false
      }, {
        "default": vue.withCtx(function () {
          return [vue.createElementVNode("button", {
            ref_key: "myRef",
            ref: myRef,
            style: {
              "visibility": "hidden"
            }
          }, " 隐藏按钮 ", 512 /* NEED_PATCH */)];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["drag", "multiple"])], 64 /* STABLE_FRAGMENT */));
    };
  }
});

script$e.__file = "packages/components/upload/src/components/ButtonUpload.vue";

var script$d = /*#__PURE__*/Object.assign({
  name: 'ButtonUpload'
}, {
  __name: 'PlainButtonUpload',
  emits: ['type-check', 'file-change'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var config = vue.inject('config');
    var buttonVisible = vue.ref(false);
    var tmpl = [{
      label: '本地文件',
      icon: vue.createVNode(vue.resolveComponent("el-icon"), null, {
        "default": function _default() {
          return [vue.createVNode(paperclip_default, null, null)];
        }
      }),
      onClick: function onClick() {
        openDialog();
      }
    }];
    var openDialog = function openDialog() {
      directUpload();
    };
    var currentFile = vue.ref(null);
    var currentFileName = vue.ref('');
    var onChange = function onChange(file, files) {
      var typeList = file.name.split('.');
      var type = typeList[typeList.length - 1];
      currentFileName.value = file.name;
      if (['pdf'].includes(type)) {
        currentFile.value = 'pdf';
      } else if (['doc', 'docx'].includes(type)) {
        currentFile.value = 'doc';
      } else if (['jpg', 'jpeg', 'gif', 'png'].includes(type)) {
        currentFile.value = 'jpg';
      } else if (['xlsx', 'xls', 'csv'].includes(type)) {
        currentFile.value = 'excel';
      } else if (['rar', 'zip'].includes(type)) {
        currentFile.value = 'zip';
      } else {
        currentFile.value = 'file';
      }
      // 限制文件类型
      if (config.allow && config.allow.length) {
        if (config.allow.includes(type)) {
          emit('type-check', true);
        } else {
          emit('type-check', false);
        }
      }
      emit('file-change', file, files);
    };
    var myRef = vue.ref(null);
    var directUpload = function directUpload() {
      myRef.value.click();
    };
    return function (_ctx, _cache) {
      var _component_FYButton = vue.resolveComponent("FYButton");
      var _component_FYActionPanel = vue.resolveComponent("FYActionPanel");
      var _component_el_upload = vue.resolveComponent("el-upload");
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createVNode(_component_FYActionPanel, {
        visible: buttonVisible.value,
        "onUpdate:visible": _cache[0] || (_cache[0] = function ($event) {
          return buttonVisible.value = $event;
        }),
        template: tmpl
      }, {
        "default": vue.withCtx(function () {
          return [vue.createVNode(_component_FYButton, {
            plain: "",
            icon: vue.unref(paperclip_default)
          }, {
            "default": vue.withCtx(function () {
              return [vue.createTextVNode(" 附件 ")];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["icon"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["visible"]), vue.createVNode(_component_el_upload, {
        "class": "fy-upload-button",
        drag: vue.unref(config).drag,
        multiple: vue.unref(config).multiple,
        "auto-upload": false,
        "on-change": onChange,
        "show-file-list": false
      }, {
        "default": vue.withCtx(function () {
          return [vue.createElementVNode("button", {
            ref_key: "myRef",
            ref: myRef,
            style: {
              "visibility": "hidden"
            }
          }, " 隐藏按钮 ", 512 /* NEED_PATCH */)];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["drag", "multiple"])], 64 /* STABLE_FRAGMENT */);
    };
  }
});

script$d.__file = "packages/components/upload/src/components/PlainButtonUpload.vue";

var _hoisted_1$a = /*#__PURE__*/vue.createElementVNode("span", null, [/*#__PURE__*/vue.createElementVNode("svg", {
  width: "22",
  height: "18",
  viewBox: "0 0 22 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/vue.createCommentVNode(" eslint-disable-next-line "), /*#__PURE__*/vue.createElementVNode("g", {
  id: "å¯¼å…¥ 1"
}, [/*#__PURE__*/vue.createElementVNode("path", {
  id: "Vector",
  d: "M6.24095 10.3808C6.24095 11.2224 6.39171 12.0378 6.66578 12.7874C7.66619 9.98626 10.3248 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.7372 10.052 14.1483 10.2624C14.3128 10.3413 14.5046 10.3939 14.6828 10.3939C14.9432 10.3939 15.1898 10.315 15.4091 10.1572L20.233 6.55394C20.5345 6.33038 20.7126 5.9753 20.7126 5.59395C20.7126 5.21259 20.5345 4.85751 20.233 4.63393L15.4091 1.0175C15.2035 0.8597 14.9432 0.780792 14.6828 0.780792C14.5046 0.780792 14.3128 0.820238 14.1483 0.912294C13.7372 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C9.48885 3.17421 6.24095 6.40927 6.24095 10.3808Z",
  fill: "white"
}), /*#__PURE__*/vue.createElementVNode("path", {
  id: "Vector_2",
  d: "M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z",
  fill: "white"
})])])], -1 /* HOISTED */);
var script$c = {
  __name: 'ExportButton',
  setup: function setup(__props) {
    var config = vue.inject('config');
    var handleExport = function handleExport(url, fileName) {
      try {
        var element = document.createElement('a');
        element.href = url;
        element.download = fileName;
        var a = document.body.appendChild(element);
        a.click();
        document.body.removeChild(element);
      } catch (e) {
        console.log(e, '下载失败');
      }
    };
    return function (_ctx, _cache) {
      var _component_FYButton = vue.resolveComponent("FYButton");
      return vue.openBlock(), vue.createBlock(_component_FYButton, {
        type: "primary",
        "class": "upload-btn",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return handleExport(vue.unref(config).url, vue.unref(config).fileName);
        })
      }, {
        "default": vue.withCtx(function () {
          return [_hoisted_1$a, vue.createTextVNode(" 导出 ")];
        }),
        _: 1 /* STABLE */
      });
    };
  }
};

script$c.__file = "packages/components/upload/src/components/ExportButton.vue";

var _hoisted_1$9 = {
  "class": "fy-upload-wrap"
};
var script$b = /*#__PURE__*/Object.assign({
  name: 'FYUpload'
}, {
  __name: 'upload',
  props: {
    config: {
      type: Object,
      "default": function _default() {
        return {
          // formItem, button, plain
          type: 'button',
          buttonConfig: {
            // direct dialog
            type: 'dialog',
            dialogConfig: {
              title: '导入规则',
              template: [{
                type: 'input',
                label: '规则名称',
                value: 'name',
                placeholder: '输入规则名称',
                limit: 32,
                require: true
              }, {
                type: 'upload',
                label: '文件',
                value: 'file'
              }]
            },
            formModel: {
              name: '',
              file: null
            }
          }
        };
      }
    }
  },
  emits: ['type-check'],
  setup: function setup(__props, _ref) {
    var emit = _ref.emit;
    var props = __props;
    vue.provide('config', props.config);
    var typeCheck = function typeCheck(e) {
      emit('type-check', e);
    };
    var fileChange = function fileChange(file, files) {
      console.log(file, files);
    };
    return function (_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [vue.createCommentVNode(" 表单项上传 "), props.config.type === 'formItem' ? (vue.openBlock(), vue.createBlock(script$p, {
        key: 0,
        onTypeCheck: typeCheck,
        onFileChange: fileChange
      })) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" 按钮对话框上传或者直接按钮上传 "), props.config.type === 'button' ? (vue.openBlock(), vue.createBlock(script$e, {
        key: 1,
        onTypeCheck: typeCheck,
        onFileChange: fileChange
      })) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" 另一种样式的按钮上传 "), props.config.type === 'plain' ? (vue.openBlock(), vue.createBlock(script$d, {
        key: 2,
        onTypeCheck: typeCheck,
        onFileChange: fileChange
      })) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" 导出 "), props.config["export"] === true ? (vue.openBlock(), vue.createBlock(script$c, {
        key: 3
      })) : vue.createCommentVNode("v-if", true)]);
    };
  }
});

script$b.__scopeId = "data-v-efd50b36";
script$b.__file = "packages/components/upload/src/upload.vue";

var FYUpload = tool.withInstall(script$b);

var SelectionIndex = vue.defineComponent({
  props: {
    scope: {
      type: Object,
      "default": function _default() {
        return {
          row: {}
        };
      }
    },
    prop: {
      type: String,
      "default": 'index'
    },
    columnProps: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    checked: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    },
    onChecked: {
      type: Function
    }
  },
  setup: function setup(props) {
    var isIndex = vue.ref(true);

    // 是否点击的全选按钮
    // 点击全选 序号将要变为checkbox
    vue.watch(function () {
      return props.checked;
    }, function (bool) {
      isIndex.value = !bool;
    });
    var checked = vue.computed({
      get: function get() {
        return props.checked;
      },
      set: function set(v) {
        props.onChecked(v);
      }
    });
    var handleMouseenter = function handleMouseenter() {
      isIndex.value = false;
    };
    var handleMouseleave = function handleMouseleave() {
      if (!checked.value) {
        isIndex.value = true;
      }
    };
    // scope.$index + 1 + (dataProvider.filterParams.value[paging.current] - 1) * dataProvider.filterParams.value[paging.size]
    var rowValue = vue.computed(function () {
      return props.scope.$index + 1 + (vue.unref(props.columnProps.pageCurrent) - 1) * vue.unref(props.columnProps.pageSize);
    });
    var RendererItem = vue.computed(function () {
      // 序号和多选同时满足
      if (vue.unref(props.columnProps.index) && vue.unref(props.columnProps.selection)) {
        return isIndex.value ? vue.createVNode(vue.Fragment, null, [vue.unref(rowValue)]) : vue.createVNode(vue.resolveComponent("el-checkbox"), {
          "modelValue": checked.value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return checked.value = $event;
          }
        }, null);
      }
      // 只满足多选
      if (vue.unref(props.columnProps.selection)) {
        return vue.createVNode(vue.resolveComponent("el-checkbox"), {
          "modelValue": checked.value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return checked.value = $event;
          }
        }, null);
      }

      // 只满足序号
      return vue.createVNode(vue.Fragment, null, [vue.unref(rowValue)]);
    });
    return function () {
      return vue.createVNode("div", {
        "data-test": "SelectionIndexWrap",
        "style": "display:flex; justify-content:center; align-items: center; width: 30px; height: 30px;",
        "onMouseenter": handleMouseenter,
        "onMouseleave": handleMouseleave
      }, [vue.createVNode(RendererItem.value, null, null)]);
    };
  }
});

/**
 * 注入表头覆盖层
 * @param {*} HeaderRenderer 覆盖层的组件
 * @param {*} valuesMap2Data checkbox 选中的数据
 * @returns
 */
function useHeadVNode(HeaderRenderer, valuesMap2Data, tableData) {
  var headerVNode = '';
  var ele = '';
  var createHeaderVNode = function createHeaderVNode() {
    if (headerVNode && ele) return;
    var trWrapper = document.querySelector('.fy-table-header-row');
    if (trWrapper) {
      var thWidth = trWrapper.firstChild.getBoundingClientRect().width;
      var theadWrapper = trWrapper.parentNode;
      var wrapper = document.createElement('div');
      theadWrapper.appendChild(wrapper);
      ele = wrapper;
      headerVNode = vue.createApp({
        setup: function setup() {
          return function () {
            return vue.createVNode("div", {
              "style": {
                width: "calc(100% - ".concat(thWidth, "px)"),
                display: 'flex',
                height: "".concat(trWrapper.getBoundingClientRect().height, "px"),
                position: 'absolute',
                zIndex: 999,
                right: 0,
                top: 0
              }
            }, [vue.createVNode(HeaderRenderer, {
              "values": valuesMap2Data.value
            }, null)]);
          };
        }
      });
      headerVNode.mount(wrapper);
    }
  };
  var removeHeaderVNode = function removeHeaderVNode() {
    if (headerVNode) {
      headerVNode.unmount();
    }
    if (ele) {
      ele.remove();
    }
    headerVNode = '';
    ele = '';
  };
  vue.watch(function () {
    return valuesMap2Data.value;
  }, function (data) {
    if (data.length) {
      createHeaderVNode();
    } else {
      removeHeaderVNode();
    }
  });

  // 表格数据数量有所更新时也移除
  vue.watch(function () {
    return tableData.value;
  }, function () {
    removeHeaderVNode();
  });
  return {
    createHeaderVNode: createHeaderVNode,
    removeHeaderVNode: removeHeaderVNode
  };
}

/**
 * 表格第一列的配置内容
 * @param {*} columnProps
 * @returns
 */
function useFirstColumn(columnProps) {
  // checkbox 绑定的数据
  var values = vue.ref(vue.unref(columnProps.data).map(function () {
    return false;
  }));

  // checkbox 数据值映射为对应的表格row值
  var valuesMap2Data = vue.computed(function () {
    return values.value.map(function (item, idx) {
      return item ? vue.unref(columnProps.data)[idx] : false;
    }).filter(Boolean);
  });

  // 全选
  var checkedAll = vue.ref(false);
  var emitSelection = function emitSelection() {
    columnProps.emit('selection', values.value.map(function (item, idx) {
      return item ? vue.unref(columnProps.data)[idx] : false;
    }).filter(Boolean).map(function (item) {
      return vue.toRaw(item);
    }));
  };

  // 该hook注入表头覆盖层组件
  useHeadVNode(columnProps.renderer.header, valuesMap2Data, columnProps.data);

  // 第一列的自定义插槽
  var slots = {
    "default": function _default(scope) {
      return vue.createVNode(SelectionIndex, {
        "scope": scope,
        "columnProps": columnProps,
        "checked": values.value[scope === null || scope === void 0 ? void 0 : scope.$index],
        "onChecked": function onChecked(v) {
          values.value[scope === null || scope === void 0 ? void 0 : scope.$index] = v;
          // 向上传递被选中的表格数据
          emitSelection();
        }
      }, null);
    },
    header: function header() {
      return vue.unref(columnProps.selection) ? vue.createVNode(vue.resolveComponent("el-checkbox"), {
        "data-test": "checkbox-all",
        "modelValue": checkedAll.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return checkedAll.value = $event;
        },
        "onChange": function onChange(bool) {
          values.value = vue.unref(columnProps.data).map(function () {
            return bool;
          });
          // 向上传递被选中的表格数据
          emitSelection();
        }
      }, null) : vue.createVNode("span", null, [vue.createTextVNode("\u5E8F\u53F7")]);
    }
  };

  // 全选的状态更新
  // 单个全部选中全选也将选中
  // 单个未选中全选也未选中
  vue.watch(valuesMap2Data, function (data) {
    if (data.length !== vue.unref(columnProps.data).length) {
      checkedAll.value = false;
    } else {
      checkedAll.value = true;
    }
  });
  return {
    selectionValues: values,
    FirstColumn: vue.defineComponent({
      props: {
        index: {
          type: Boolean
        },
        selection: {
          type: Boolean
        }
      },
      setup: function setup(props, _ref) {
        var attrs = _ref.attrs;
        return function () {
          // 序号和多选皆不满足
          if (!props.selection && !props.index) {
            return function () {};
          }
          return vue.createVNode(vue.resolveComponent("el-table-column"), tool._objectSpread2({
            "fixed": vue.unref(columnProps.template).some(function (item) {
              return item.fixed;
            }),
            "width": "55",
            "align": "center",
            "prop": "index"
          }, attrs), slots);
        };
      }
    })
  };
}

var Input = {
  type: 'input',
  renderer: vue.defineComponent({
    setup: function setup(props, _ref) {
      var attrs = _ref.attrs;
      var Ele = vue.ref();
      var value = vue.ref(attrs.scope.row[attrs.value]);
      var editing = vue.ref(false); // 当前是否为编辑状态

      function emitValue() {
        // 校验一下是否通过
        if (attrs.validateEditValue) {
          if (!attrs.validateEditValue(vue.unref(value))) return;
        }
        attrs.onChange({
          value: vue.unref(value)
        });
        editing.value = false; // 退出编辑模式
      }

      return function () {
        return vue.createVNode("div", {
          "class": "fy-table-edit-wrap"
        }, [!editing.value ? vue.createVNode("div", {
          "class": "fy-table-edit-item",
          "onClick": function onClick() {
            editing.value = true;
            vue.nextTick(function () {
              Ele.value.focus();
            });
          }
        }, [vue.unref(value), vue.createVNode("div", {
          "class": "table-edit-item-icon"
        }, [vue.createVNode(vue.resolveComponent("el-icon"), {
          "size": "20",
          "color": "#aaa"
        }, {
          "default": function _default() {
            return [vue.createVNode(edit_pen_default, null, null)];
          }
        })])]) : vue.createVNode(vue.resolveComponent("el-input"), {
          "modelValue": value.value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return value.value = $event;
          },
          "ref": Ele,
          "onKeyup": function onKeyup(e) {
            // 绑定回车事件
            if (e.code === 'Enter') {
              emitValue();
            }
          },
          "onBlur": function onBlur() {
            // 绑定失焦事件
            emitValue();
          }
        }, null)]);
      };
    }
  })
};

/**
 * 小数位数限制
 */
var Limit = {
  type: 'limit',
  renderer: function renderer(props) {
    return vue.createVNode(vue.Fragment, null, [function () {
      var value = vue.ref(props.scope.row[props.value]);
      if (value.value) {
        if (Number.isInteger(+value.value)) {
          return value;
        }
        return value.value.toFixed(props.type.split('limit')[1]);
      }
      return value.value === 0 ? value : '-';
    }()]);
  }
};

/**
 * 图片预览
 */
var ImagePreview = {
  type: 'imagePreview',
  renderer: function renderer(props) {
    var value = props.scope.row[props.value];
    var url = '';
    var srcList = [];
    if (Array.isArray(value)) {
      srcList = value;
      // eslint-disable-next-line prefer-destructuring
      url = value[0];
    } else {
      srcList[0] = value;
      url = value;
    }
    return vue.createVNode(vue.resolveComponent("el-image"), tool._objectSpread2({
      "src": url,
      "preview-src-list": srcList,
      "preview-teleported": true,
      "initial-index": 0,
      "fit": "cover"
    }, props), null);
  }
};

/**
 * 日期时间展示规则
 */
// eslint-disable-next-line no-underscore-dangle
var __format = {
  minute: 'YYYY年M月DD日 HH:mm',
  second: 'YYYY年M月DD日 HH:mm:ss',
  day: 'YYYY年M月DD日'
};
var TimeDisplay = {
  type: 'timeDisplay',
  renderer: function renderer(props) {
    var value = props.scope.row[props.value];
    var formatKey = props.type.split('timeDisplay')[1].toLowerCase();
    var formatVal = __format[formatKey];
    var str = dayjs(value).format(formatVal);

    // 今年 不展示年份
    if (dayjs().year() === dayjs(value).year()) {
      str = str.replace(/\d{4}年/, '');
    }

    // 今天 年月日替换为今天
    if (dayjs().date() === dayjs(value).date()) {
      str = str.replace(/.*日\s*/, '今天 ');
    }
    return str;
  }
};

var builtInFormItems = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ImagePreview: ImagePreview,
  Input: Input,
  Limit: Limit,
  TimeDisplay: TimeDisplay
});

var tableEditItem = new Map();
function installTableEditItem(item) {
  if (Array.isArray(item)) {
    var _iterator = tool._createForOfIteratorHelper(item),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var nape = _step.value;
        tableEditItem.set(nape.type, nape.renderer);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    tableEditItem.set(item.type, item.renderer);
  }
}

// 安装内置组件
installTableEditItem(Object.entries(builtInFormItems).map(function (_ref) {
  var _ref2 = tool._slicedToArray(_ref, 2),
    value = _ref2[1];
  return value;
}));

function getColumns(template) {
  var _getColumn = function _getColumn(scope, tmpl) {
    if (tmpl.render) {
      // render 如果是string 则代表type
      if (typeof tmpl.render === 'string') {
        if (tableEditItem.get(tmpl.render)) {
          return vue.createVNode(vue.resolveComponent("EditRenderer"), tool._objectSpread2(tool._objectSpread2({}, tmpl), {}, {
            "scope": scope,
            "template": tmpl
          }), null);
        }
      }
      var renderTmpl = tmpl.render({
        scope: scope,
        key: tmpl.value,
        value: scope.row[tmpl.value],
        template: tmpl
      });
      if (renderTmpl !== null && renderTmpl !== void 0 && renderTmpl.setup) return vue.createVNode(renderTmpl, {
        "template": tmpl,
        "scope": scope,
        "value": scope.row[tmpl.value]
      }, null);
      return renderTmpl;
    }
    if (tmpl.type) {
      // eslint-disable-next-line no-underscore-dangle
      var __innterTypes = ['limit', 'timeDisplay'];
      var type = function () {
        var innerType = __innterTypes.find(function (type) {
          return tmpl.type.includes(type);
        });
        if (innerType) {
          return innerType;
        }
        return tmpl.type;
      }();
      var _EditRenderer = tableEditItem.get(type);
      if (_EditRenderer) {
        return vue.createVNode(_EditRenderer, tool._objectSpread2(tool._objectSpread2({}, tmpl), {}, {
          "scope": scope,
          "template": tmpl
        }), null);
      }
    }
    return scope.row[tmpl === null || tmpl === void 0 ? void 0 : tmpl.value] || scope.row[tmpl === null || tmpl === void 0 ? void 0 : tmpl.value] === 0 ? scope.row[tmpl === null || tmpl === void 0 ? void 0 : tmpl.value] : '-';
  };
  return vue.computed(function () {
    return vue.unref(template).map(function (tmpl) {
      var slots = {
        "default": function _default(scope) {
          return _getColumn(scope, tmpl);
        }
      };
      return vue.createVNode(vue.resolveComponent("el-table-column"), tool._objectSpread2({
        "key": tmpl.value,
        "label": tmpl.label,
        "prop": tmpl.value,
        "header-align": 'center'
      }, tmpl), slots);
    });
  });
}

function getHeadSettingColumn(_ref) {
  var onClick = _ref.onClick;
  var slots = {
    header: function header() {
      return vue.createVNode("div", {
        "data-test": "head-setting",
        "style": "display: flex; aligin-items: center; justify-content: center; width: 100%; height: 100%; cursor: pointer;",
        "onClick": onClick
      }, [vue.createVNode(vue.resolveComponent("el-icon"), {
        "size": "20"
      }, {
        "default": function _default() {
          return [vue.createVNode(setting_default, null, null)];
        }
      })]);
    }
  };
  return vue.defineComponent({
    setup: function setup(_, _ref2) {
      var attrs = _ref2.attrs;
      return function () {
        return vue.createVNode(vue.resolveComponent("el-table-column"), tool._objectSpread2(tool._objectSpread2({
          "width": "55",
          "align": "center",
          "prop": "fy-setting"
        }, attrs), {}, {
          "fixed": "right"
        }), slots);
      };
    }
  });
}

/**
 * 封装表格组件的attrs
 * @param {*} attrs
 * @param {*} template
 * @returns
 */
function useTableAttrs(attrs, template, showSelectionIndex) {
  var spanMethod = function spanMethod(_ref) {
    var row = _ref.row,
      column = _ref.column,
      rowIndex = _ref.rowIndex,
      columnIndex = _ref.columnIndex;
    var visibleTmpl = vue.unref(template).filter(function (item) {
      return item.visible;
    });

    // 判定最后一列，有展示序号或者开启多选框功能的需要加一列， 否则就是visible为true的数量
    var lastIndex = vue.unref(showSelectionIndex) ? visibleTmpl.length + 1 : visibleTmpl.length;

    // 最后一列为自定义的设置 需要占0行0列
    if (columnIndex === lastIndex) {
      return {
        rowspan: 0,
        colspan: 0
      };
    }
    // 倒数第二列则要将最后一列合并成一列 所以需要占一行两列
    if (columnIndex === lastIndex - 1) {
      return {
        rowspan: 1,
        colspan: 2
      };
    }
    if (attrs.spanMethod) {
      return attrs.spanMethod({
        row: row,
        column: column,
        rowIndex: rowIndex,
        columnIndex: columnIndex
      });
    }
    return {
      rowspan: 1,
      colspan: 1
    };
  };
  return tool._objectSpread2(tool._objectSpread2({}, attrs), {}, {
    spanMethod: spanMethod,
    'header-row-class-name': attrs.headerRowClassName ? "".concat(attrs.headerRowClassName, " fy-table-header-row") : 'fy-table-header-row'
  });
}

/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var version = "1.15.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index$1(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index$1(target);
    oldDraggableIndex = index$1(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index$1(dragEl);
      newDraggableIndex = index$1(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();

          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }

          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index$1(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index$1(dragEl);
    newDraggableIndex = index$1(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index$1(dragEl);
    newDraggableIndex = index$1(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index$1(dragEl) < index$1(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index$1,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

var _withScopeId = function _withScopeId(n) {
  return vue.pushScopeId("data-v-4615cb48"), n = n(), vue.popScopeId(), n;
};
var _hoisted_1$8 = {
  "class": "fy-transfer-wrap"
};
var _hoisted_2$6 = {
  "class": "transfer-container"
};
var _hoisted_3$4 = {
  "class": "selection-title"
};
var _hoisted_4$3 = {
  "class": "selection-section"
};
var _hoisted_5$1 = {
  "class": "selection-section-body"
};
var _hoisted_6 = {
  "class": "list"
};
var _hoisted_7 = ["onClick"];
var _hoisted_8 = {
  "class": "item-awesome-text"
};
var _hoisted_9 = {
  "class": "item-title"
};
var _hoisted_10 = {
  "class": "item-icon"
};
var _hoisted_11 = {
  "class": "transfer-container"
};
var _hoisted_12 = {
  "class": "selection-title"
};
var _hoisted_13 = {
  "class": "selection-section"
};
var _hoisted_14 = {
  "class": "selection-section-body"
};
var _hoisted_15 = ["onClick"];
var _hoisted_16 = {
  "class": "item-awesome-text"
};
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/vue.createElementVNode("svg", {
    color: "#999",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    fit: "",
    height: "1em",
    width: "1em",
    preserveAspectRatio: "xMidYMid meet",
    focusable: "false"
  }, [/*#__PURE__*/vue.createElementVNode("g", {
    id: "ailaction/drag--",
    "stroke-width": "1",
    "fill-rule": "evenodd"
  }, [/*#__PURE__*/vue.createElementVNode("g", {
    id: "ail拖动",
    transform: "translate(5 1)",
    "fill-rule": "nonzero"
  }, [/*#__PURE__*/vue.createElementVNode("path", {
    id: "ail形状结合",
    d: "M1 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  })])])], -1 /* HOISTED */);
});
var _hoisted_18 = {
  "class": "item-title"
};
var _hoisted_19 = {
  "class": "item-icon"
};
var script$a = {
  __name: 'transfer',
  props: tool._objectSpread2(tool._objectSpread2({}, tool.tmplProps), {}, {
    visibleTemplate: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }),
  emits: ['updateTmpl', 'updateVisibleTmpl'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    var props = __props;
    var allTmpl = vue.computed({
      get: function get() {
        return props.template;
      },
      set: function set(v) {
        emits('updateTmpl', v);
      }
    });
    var visibleTmpl = vue.computed({
      get: function get() {
        return props.visibleTemplate;
      },
      set: function set(v) {
        emits('updateVisibleTmpl', v);
      }
    });

    /**
     * 左侧筛选面板
     */
    var leftInputVal = vue.ref('');
    var filterLeftTmpl = vue.ref([]);
    vue.watch(leftInputVal, function (val) {
      filterLeftTmpl.value = allTmpl.value.filter(function (tmpl) {
        return tmpl.label.includes(val);
      });
    }, {
      immediate: true
    });

    /**
     * 右侧筛选面板
     */
    var rightInputVal = vue.ref('');
    var filterRightTmpl = vue.ref([]);
    vue.watch([rightInputVal, visibleTmpl], function () {
      filterRightTmpl.value = visibleTmpl.value.filter(function (tmpl) {
        return tmpl.label.includes(rightInputVal.value);
      });
    }, {
      immediate: true
    });

    // 切换一项是否展示
    function toggleVisibleItem(item) {
      allTmpl.value.find(function (e) {
        return e.value === item.value;
      }).visible = !item.visible;
      allTmpl.value = tool._toConsumableArray(allTmpl.value);
    }

    // 移除一项展示
    function removeVisibleItem(item) {
      // 移除
      var idx = visibleTmpl.value.findIndex(function (e) {
        return e.value === item.value;
      });
      visibleTmpl.value.splice(idx, 1);
      visibleTmpl.value = tool._toConsumableArray(visibleTmpl.value);

      // 更改状态
      allTmpl.value.find(function (e) {
        return e.value === item.value;
      }).visible = false;
      allTmpl.value = tool._toConsumableArray(allTmpl.value);
    }

    /**
     * 右侧面板拖拽实现
     */
    var dragEle = vue.ref();
    vue.onMounted(function () {
      Sortable.create(dragEle.value, {
        animation: 100,
        onEnd: function onEnd(_ref2) {
          var newIndex = _ref2.newIndex,
            oldIndex = _ref2.oldIndex;
          var currRow = filterRightTmpl.value.splice(oldIndex, 1)[0];
          filterRightTmpl.value.splice(newIndex, 0, tool._objectSpread2(tool._objectSpread2({}, currRow), {}, {
            order: newIndex + 1
          }));
          var currRow1 = visibleTmpl.value.splice(oldIndex, 1)[0];
          visibleTmpl.value.splice(newIndex, 0, currRow1);
        }
      });
    });
    return function (_ctx, _cache) {
      var _component_el_icon = vue.resolveComponent("el-icon");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [vue.createElementVNode("div", _hoisted_2$6, [vue.createElementVNode("div", _hoisted_3$4, " 可选择属性 · " + vue.toDisplayString(allTmpl.value.length), 1 /* TEXT */), vue.createElementVNode("div", _hoisted_4$3, [vue.createVNode(vue.unref(FYInput), {
        modelValue: leftInputVal.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return leftInputVal.value = $event;
        }),
        "class": "transparent-input",
        placeholder: "搜索"
      }, {
        prefix: vue.withCtx(function () {
          return [vue.createVNode(_component_el_icon, {
            size: "18"
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(search_default))];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"]), vue.createElementVNode("div", _hoisted_5$1, [vue.createElementVNode("div", _hoisted_6, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(filterLeftTmpl.value, function (tmpl) {
        return vue.openBlock(), vue.createElementBlock("div", {
          key: tmpl.value,
          "class": "list-item",
          onClick: function onClick($event) {
            return toggleVisibleItem(tmpl);
          }
        }, [vue.createElementVNode("div", _hoisted_8, [vue.createElementVNode("span", _hoisted_9, vue.toDisplayString(tmpl.label), 1 /* TEXT */)]), vue.withDirectives(vue.createElementVNode("div", _hoisted_10, [vue.createVNode(_component_el_icon, {
          size: 20,
          color: "#6698ff"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createVNode(vue.unref(check_default))];
          }),
          _: 1 /* STABLE */
        })], 512 /* NEED_PATCH */), [[vue.vShow, tmpl.visible]])], 8 /* PROPS */, _hoisted_7);
      }), 128 /* KEYED_FRAGMENT */))])])])]), vue.createElementVNode("div", _hoisted_11, [vue.createElementVNode("div", _hoisted_12, " 已选择属性 · " + vue.toDisplayString(visibleTmpl.value.length), 1 /* TEXT */), vue.createElementVNode("div", _hoisted_13, [vue.createVNode(vue.unref(FYInput), {
        modelValue: rightInputVal.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return rightInputVal.value = $event;
        }),
        "class": "transparent-input",
        placeholder: "搜索"
      }, {
        prefix: vue.withCtx(function () {
          return [vue.createVNode(_component_el_icon, {
            size: "18"
          }, {
            "default": vue.withCtx(function () {
              return [vue.createVNode(vue.unref(search_default))];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"]), vue.createElementVNode("div", _hoisted_14, [vue.createElementVNode("div", {
        ref_key: "dragEle",
        ref: dragEle,
        "class": "list"
      }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(filterRightTmpl.value, function (tmpl) {
        return vue.openBlock(), vue.createElementBlock("div", {
          key: tmpl.value,
          "class": "list-item",
          onClick: function onClick($event) {
            return removeVisibleItem(tmpl);
          }
        }, [vue.createElementVNode("div", _hoisted_16, [_hoisted_17, vue.createElementVNode("span", _hoisted_18, vue.toDisplayString(tmpl.label), 1 /* TEXT */)]), vue.withDirectives(vue.createElementVNode("div", _hoisted_19, [vue.createVNode(_component_el_icon, {
          size: 20,
          color: "#6698ff"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createVNode(vue.unref(close_default))];
          }),
          _: 1 /* STABLE */
        })], 512 /* NEED_PATCH */), [[vue.vShow, tmpl.visible]])], 8 /* PROPS */, _hoisted_15);
      }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */)])])])]);
    };
  }
};

script$a.__scopeId = "data-v-4615cb48";
script$a.__file = "packages/components/table/src/transfer.vue";

var TableSetting = vue.defineComponent({
  name: 'TableSetting',
  props: tool._objectSpread2(tool._objectSpread2({}, tool.tmplProps), {}, {
    visible: {
      type: Boolean,
      "default": false
    }
  }),
  emits: ['updateVisible', 'submit'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var visible = vue.computed({
      get: function get() {
        return props.visible;
      },
      set: function set(v) {
        emit('updateVisible', v);
      }
    });
    var tmpl = vue.ref([]); // 全部表头
    var visibleTmpl = vue.ref([]); // 只展示的表头

    vue.watch(function () {
      return props.template;
    }, function (template) {
      tmpl.value = template;
    }, {
      immediate: true
    });
    vue.watch(tmpl, function () {
      visibleTmpl.value = tmpl.value.filter(function (item) {
        return item.visible;
      });
    }, {
      immediate: true
    });
    var slots = {
      footer: function footer() {
        return vue.createVNode(vue.Fragment, null, [vue.createVNode(vue.resolveComponent("FYButton"), {
          "type": "info",
          "text": true,
          "size": "large",
          "link": true,
          "style": "font-size: 1rem;",
          "onClick": function onClick() {
            emit('updateVisible', false);
          }
        }, {
          "default": function _default() {
            return [vue.createTextVNode("\u53D6\u6D88")];
          }
        }), vue.createVNode(vue.resolveComponent("FYButton"), {
          "type": "primary",
          "size": "large",
          "style": "font-size: 1rem;",
          "onClick": function onClick() {
            // 重新对展示的字段做排序
            visibleTmpl.value.forEach(function (visibleItem, orderIdx) {
              tmpl.value.forEach(function (item) {
                if (visibleItem.value === item.value) {
                  item.order = orderIdx;
                }
              });
            });
            emit('submit', vue.toRaw(tmpl.value.map(function (item) {
              return vue.toRaw(item);
            })));
            vue.nextTick(function () {
              emit('updateVisible', false);
            });
          }
        }, {
          "default": function _default() {
            return [vue.createTextVNode("\u786E\u5B9A")];
          }
        })]);
      }
    };
    return function () {
      return vue.createVNode(vue.resolveComponent("el-dialog"), {
        "modelValue": visible.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return visible.value = $event;
        },
        "title": "\u8868\u5934\u663E\u793A\u5C5E\u6027",
        "width": "60%",
        "top": "5vh",
        "destroy-on-close": true
      }, tool._objectSpread2({
        "default": function _default() {
          return [vue.createVNode(script$a, {
            "template": tmpl.value,
            "visibleTemplate": visibleTmpl.value,
            "onUpdateTmpl": function onUpdateTmpl(e) {
              tmpl.value = e;
            },
            "onUpdateVisibleTmpl": function onUpdateVisibleTmpl(e) {
              visibleTmpl.value = e;
            }
          }, null)];
        }
      }, slots));
    };
  }
});

/**
 * @author younghero
 * @Date 2023-7-20 11:16
 * @description 表格
 */

var Table = vue.defineComponent({
  name: 'FYTable',
  props: tool._objectSpread2(tool._objectSpread2({}, tool.tmplProps), {}, {
    columnIndex: {
      type: Boolean,
      "default": true
    },
    columnSelection: {
      type: Boolean,
      "default": false
    },
    pageSize: {
      type: Number,
      "default": 10
    },
    pageCurrent: {
      type: Number,
      "default": 1
    },
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    renderer: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  }),
  emits: ['selection', 'headerSelection'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose,
      emit = _ref.emit;
    // 表格组件实例
    var Ele = vue.ref();

    // 控制表头设置弹窗是否展示
    var tableSettingVisible = vue.ref(false);
    var effectTmpl = vue.ref();
    vue.watchEffect(function () {
      var tmpl = props.template;
      if (!tmpl) return;

      // 初始化字段排序
      effectTmpl.value = tmpl.map(function (item) {
        return tool._objectSpread2({
          order: item.order ? item.order : 0
        }, item);
      }) // order 初始化
      .sort(function (a, b) {
        return a.order - b.order;
      });
    });

    // 是否展示序号列
    var showSelectionIndex = vue.computed(function () {
      return props.columnIndex || props.columnSelection;
    });

    // 封装表格继承属性
    var tableAttrs = useTableAttrs(attrs, vue.computed(function () {
      return effectTmpl.value.filter(function (item) {
        return item.visible;
      });
    }), showSelectionIndex);

    // 第一列
    var _useFirstColumn = useFirstColumn({
        selection: vue.computed(function () {
          return props.columnSelection;
        }),
        // 是否开启多选
        index: vue.computed(function () {
          return props.columnIndex;
        }),
        // 是否开启序号
        data: vue.computed(function () {
          return props.data;
        }),
        // 表格数据
        renderer: props.renderer,
        // 表头覆盖层
        template: effectTmpl,
        pageSize: vue.computed(function () {
          return props.pageSize;
        }),
        pageCurrent: vue.computed(function () {
          return props.pageCurrent;
        }),
        emit: emit
      }),
      FirstColumn = _useFirstColumn.FirstColumn,
      selectionValues = _useFirstColumn.selectionValues;

    // 剩余列
    var Columns = getColumns(vue.computed(function () {
      return effectTmpl.value.filter(function (item) {
        return item.visible;
      });
    }));

    // 表头设置列
    var SettingColumn = getHeadSettingColumn({
      onClick: function onClick() {
        return tableSettingVisible.value = true;
      }
    });
    expose({
      selectionValues: selectionValues,
      sort: vue.computed(function () {
        return Ele.value.sort;
      })
    });
    return function () {
      return vue.createVNode("div", {
        "class": "fy-table-wrap"
      }, [vue.createVNode(vue.resolveComponent("el-table"), tool._objectSpread2(tool._objectSpread2({
        "border": true,
        "table-layout": "auto"
      }, tableAttrs), {}, {
        "data": props.data,
        "ref": Ele
      }), {
        "default": function _default() {
          return [Object.keys(FirstColumn).length ? vue.createVNode(FirstColumn, {
            "index": props.columnIndex,
            "selection": props.columnSelection
          }, null) : null, Columns.value, vue.createVNode(SettingColumn, null, null)];
        },
        empty: function empty() {
          return vue.createVNode(FYEmpty, null, null);
        }
      }), vue.createVNode(TableSetting, {
        "visible": tableSettingVisible.value,
        "onUpdateVisible": function onUpdateVisible(e) {
          return tableSettingVisible.value = e;
        },
        "template": effectTmpl.value,
        "onSubmit": function onSubmit(tmpl) {
          effectTmpl.value = tmpl.sort(function (a, b) {
            return a.order - b.order;
          });
          emit('headerSelection', tmpl);
        }
      }, null)]);
    };
  }
});

var FYTable = tool.withInstall(Table);

// export * from './src/composable'

function render$1(_ctx, _cache) {
  var _component_el_pagination = vue.resolveComponent("el-pagination");
  return vue.openBlock(), vue.createBlock(_component_el_pagination, vue.mergeProps(_ctx.$attrs, {
    "class": "fy-pagination"
  }), null, 16 /* FULL_PROPS */);
}

var script$9 = {};
script$9.render = render$1;
script$9.__file = "packages/components/pagination/src/pagination.vue";
var Pagination = script$9;

var FYPagination = tool.withInstall(Pagination);

var _hoisted_1$7 = {
  key: 0,
  "class": "fy-menu-item-1"
};
var _hoisted_2$5 = {
  key: 1,
  "class": "fy-menu-item-1"
};
var script$8 = {
  __name: 'MenuItem',
  props: {
    tmplItem: {
      type: Object,
      "default": function _default() {}
    }
  },
  emits: ['select'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    function onClick(item) {
      emits('select', item);
    }
    return function (_ctx, _cache) {
      var _props$tmplItem;
      var _component_MenuItem = vue.resolveComponent("MenuItem", true);
      var _component_el_sub_menu = vue.resolveComponent("el-sub-menu");
      var _component_el_menu_item = vue.resolveComponent("el-menu-item");
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createCommentVNode(" 有子菜单 "), (_props$tmplItem = __props.tmplItem) !== null && _props$tmplItem !== void 0 && (_props$tmplItem = _props$tmplItem.children) !== null && _props$tmplItem !== void 0 && _props$tmplItem.length ? (vue.openBlock(), vue.createBlock(_component_el_sub_menu, {
        key: 0,
        teleported: false,
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return onClick(__props.tmplItem);
        })
      }, {
        title: vue.withCtx(function () {
          return [!__props.tmplItem.render ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tmplItem.icon), {
            "class": "h-5 w-5"
          })), vue.createTextVNode(" " + vue.toDisplayString(__props.tmplItem.label), 1 /* TEXT */)])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$5, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tmpl.render), {
            tmplItem: _ctx.tmpl
          }, null, 8 /* PROPS */, ["tmplItem"]))]))];
        }),
        "default": vue.withCtx(function () {
          return [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.tmplItem.children, function (item) {
            return vue.openBlock(), vue.createBlock(_component_MenuItem, {
              key: item.value,
              tmplItem: item,
              index: item.value
            }, null, 8 /* PROPS */, ["tmplItem", "index"]);
          }), 128 /* KEYED_FRAGMENT */))];
        }),

        _: 1 /* STABLE */
      })) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: 1
      }, [vue.createCommentVNode(" 无子菜单 "), vue.createVNode(_component_el_menu_item, {
        teleported: false,
        index: __props.tmplItem.value,
        "class": "fy-menu-item-2",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return onClick(__props.tmplItem);
        })
      }, {
        "default": vue.withCtx(function () {
          return [__props.tmplItem.render ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tmplItem.render), {
            key: 0,
            tmplItem: __props.tmplItem
          }, null, 8 /* PROPS */, ["tmplItem"])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tmplItem.icon), {
            "class": "h-5 w-5"
          })), vue.createTextVNode(" " + vue.toDisplayString(__props.tmplItem.label), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */))];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["index"])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
    };
  }
};

script$8.__file = "packages/components/menu/src/MenuItem.vue";

var _hoisted_1$6 = {
  "class": "fy-menu-wrap"
};
var script$7 = /*#__PURE__*/Object.assign({
  name: 'FYMenu'
}, {
  __name: 'menu',
  props: tool._objectSpread2({}, tool.tmplProps),
  emits: ['select', 'itemClick'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    var props = __props;
    var activeIndex = vue.computed(function () {
      return props.template[0].value;
    });
    var handleSelect = function handleSelect(key, keyPath, item) {
      emits('select', {
        key: key,
        keyPath: keyPath,
        item: item
      });
    };
    var onTmplItemSelect = function onTmplItemSelect(item) {
      emits('itemClick', item);
    };

    // init here

    return function (_ctx, _cache) {
      var _component_el_menu = vue.resolveComponent("el-menu");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [vue.createVNode(_component_el_menu, vue.mergeProps({
        "default-active": activeIndex.value,
        "class": "fy-menu-el",
        mode: "horizontal"
      }, _ctx.$attrs, {
        onSelect: handleSelect
      }), {
        "default": vue.withCtx(function () {
          return [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.template, function (tmpl) {
            return vue.openBlock(), vue.createBlock(script$8, {
              key: tmpl.value,
              tmplItem: tmpl,
              onSelect: onTmplItemSelect
            }, null, 8 /* PROPS */, ["tmplItem"]);
          }), 128 /* KEYED_FRAGMENT */))];
        }),

        _: 1 /* STABLE */
      }, 16 /* FULL_PROPS */, ["default-active"])]);
    };
  }
});

script$7.__file = "packages/components/menu/src/menu.vue";

var FYMenu = tool.withInstall(script$7);

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAACgBJREFUeF7tnTHIZNUVx/+nEVFWbNInkEbRhdhkbZQI0UYrsy4kpkoXkya6kgiSFIYYiaZZO6ugLGysBAsXLLTI2gQRZSFFSB8IhFViwOKGG0ZYhv1mvnfeu+/cd89v6jn33v/vnB9vZ+bt+0y8IACBEwkYbCAAgZMJIAjTAYEDBBCE8YAAgjADEPAR4Ari40ZVEgIIkqTRxPQRQBAfN6qSEECQJI0mpo8Agvi4UZWEAIIkaTQxfQQQxMeNqiQEECRJo4npI4AgPm5UJSGAIEkaTUwfAQTxcaMqCQEESdJoYvoIIIiPG1VJCCBIkkYT00cAQXzcqEpCAEGSNJqYPgII4uNGVRICCJKk0cT0EUAQHzeqkhBAkCSNJqaPAIL4uFGVhACCJGk0MX0EEMTHjaokBBAkSaOJ6SOAID5uVCUhgCBJGk1MHwEE8XGjKgkBBEnSaGL6CCCIjxtVSQggSJJGE9NHAEF83KhKQgBBkjSamD4CCOLjRlUSAgiSpNHE9BFAEB83qpIQQJAkjSamjwCC+LhRlYQAgiRpNDF9BLoTpJRyRtL9km7zRaJqowS+kvSpmd3o6fxdCFJKuUPSc5IuSLq3J0CcZXUC1yVdlvSqmX25+u57G4YLUkq5W9IHks5Gw2D/rgh8LOlhM/s88lQ9CPKOpCciIbB3twTeMrOnI08XKkgp5RFJ70cCYO/uCTxgZvVqEvKKFuSSpGdCkrPpVgi8ZGYvRh02WpD3JD0aFZ59N0HgXTN7POqk0YLw+SOq89vZ96qZPRZ13GhBXpF0MSo8+26CwGtm9mzUSaMFOSfpWlR49t0EgQfN7KOok4YKUkOXUt6W9GQUAPbtmsAVM6s/Hoe9ehCk/lD44e72kjAQbNwdgfrV7kNm9kXkycIF2V1F7pT0vKTzku6JBMLe4QQ+k1R/IHw5/CSSuhDkZhCllLsk3cfNij2Mx6pnqDcrfhJ9xdhP3J0gq7aEzSBwhACCMCIQOEAAQRgPCCAIMwABHwGuID5uVCUhgCBJGk1MHwEE8XGjKgkBBEnSaGL6CCCIjxtVSQggSJJGE9NHAEF83KhKQgBBkjR6TsxSyu1m9t85a2y1FkG22rkVz11Kqc8NqE8X6eIO2xWj93c375rh2et0BHaC1Ads/NLMfn+6qjHexRVkjD42TXGTIHWfVJIgSNPRGmPxPUFSSYIgY8xw0xS3ECSNJAjSdLTGWPwEQVJIgiBjzHDTFAcEGV4SBGk6WmMsfkSQoSVBkDFmuGmKUwgyrCQI0nS0xlj8lIIMKQmCjDHDTVNMEGQ4SRCk6WiNsfhEQYaSBEHGmOGmKRyCDCMJgjQdrTEWdwoyhCQIMsYMN00xQ5DNS4IgTUdrjMVnCrJpSRBkjBlummIBQTYrCYI0Ha0xFl9IkE1KgiBjzHDTFAsKsjlJEKTpaI2x+MKCbEoSBBljhpumaCDIZiRBkKajNcbijQTZhCQIMsYMN03RUJDuJUGQpqM1xuKNBelakq4EKaV8Q9J3JZ3lj3hOlqs+2K3+6eRrZnZjcvWBglLK9yVdXXLNW6z1qx6fu9WFIKWU+qefX5f0vcZNyLL8FUk/NbN/LRF4hSvI18d8wcx+t8SZl1ojXJBSSv2Tz3+RdGapUKzzfwL/2D0N8d9zeax0BelSkh4EuS6pXkF4LU/gspn9cO6yKwtSj9vNlSRUkFLKjyS9ObeB1B8k8G0z+/scRgGCdCNJtCB/kvTjOc2j9iiBn5vZpaPvOvwhvT68uj6bd+1X+JUkWpD6zUj9hoRXOwKvm9nP5iwfdAXp4jNJtCB/lvSDOc2j9iiBP5jZxaPv6vMKUk8V+rDsaEFekPTbOc2j9iiBC2ZWv/Z1v1b8mnf/jKFy1MNEC/LN3deR7uZReJDAPyV9y8z+M4dT0D+xuvjhMFSQ2rRSym8k/XpOA6k9kcBTZlb/GTvrFSBIF3KEX0G+7lop5Q1JP5nVRYr3CfzCzP64BJaVBelGjm4E2V1J6m0m5yWdk/SdJRqbbI16L9Zf671Ykt4ws78tlX9FQcK/1t1nFv5PrKWayDrtCKz0IT38A/mtCCJIu7kaZuUVBOlSjq7+iTXMNA0YpLEg3cqBIAMOc4tIDQXpWg4EaTFNA67ZSJDu5UCQAYe5RaQGgmxCDgRpMU0DrrmwIJuRA0EGHOYWkRYUZFNyIEiLaRpwzYUE2ZwcCDLgMLeItIAgm5QDQVpM04BrzhRks3IgyIDD3CLSDEE2LQeCtJimAdd0CrJ5ORBkwGFuEckhyBByIEiLaRpwzYmCDCMHggw4zC0iTRBkKDkQpMU0DbjmKQUZTg4EGXCYW0Q6hSBDyoEgLaZpwDWPCDKsHAgy4DC3iHRAkKHlQJAW0zTgmicIMrwcCDLgMLeIdAtBUsiBIC2macA19wRJIweCDDjMLSLdJEgqORCkxTQNuOZOkAd6/CObrXHzXKzWhAdYv5Ryu5nVJzemeyFIupYTeAoBBJlCi/emI4Ag6VpO4CkEEGQKLd6bjgCCpGs5gacQQJAptHhvOgIIkq7lBJ5CAEGm0OK96QggSLqWE3gKAQSZQov3piOAIOlaTuApBLoTpJRyRtL9km6bEoT3bp7AV5I+NbMbPSXpQpBSyh2SnpN0QdK9PQHiLKsTuC7psqRXzezL1Xff2zBckFLK3ZI+kHQ2Ggb7d0XgY0kPm9nnkafqQZB3JD0RCYG9uyXwlpk9HXm6UEFKKY9Iej8SAHt3T6D+R616NQl5RQtySdIzIcnZdCsEXjKzF6MOGy3Ie5IejQrPvpsg8K6ZPR510mhB+PwR1fnt7HvVzB6LOm60IK9IuhgVnn03QeA1M3s26qTRgpyTdC0qPPtugsCDZvZR1ElDBamhSylvS3oyCgD7dk3gipnVH4/DXj0IUn8o/HB3e0kYCDbujkD9avchM/si8mThguyuIndKel7SeUn3RAJh73ACn0mqPxC+HH4SSV0IcjOIUspdku7jZsUexmPVM9SbFT+JvmLsJ+5OkFVbwmYQOEIAQRgRCBwggCCMBwQQhBmAgI8AVxAfN6qSEECQJI0mpo8Agvi4UZWEAIIkaTQxfQQQxMeNqiQEECRJo4npI4AgPm5UJSGAIEkaTUwfAQTxcaMqCQEESdJoYvoIIIiPG1VJCCBIkkYT00cAQXzcqEpCAEGSNJqYPgII4uNGVRICCJKk0cT0EUAQHzeqkhBAkCSNJqaPAIL4uFGVhACCJGk0MX0EEMTHjaokBBAkSaOJ6SOAID5uVCUhgCBJGk1MHwEE8XGjKgkBBEnSaGL6CCCIjxtVSQggSJJGE9NHAEF83KhKQgBBkjSamD4CCOLjRlUSAgiSpNHE9BFAEB83qpIQQJAkjSamjwCC+LhRlYQAgiRpNDF9BBDEx42qJAQQJEmjiekjgCA+blQlIfA/rqof55rl1rIAAAAASUVORK5CYII=";
  var _imports_0 = img;

var _hoisted_1$5 = {
  key: 0,
  "class": "fy-menu-item-1"
};
var _hoisted_2$4 = {
  key: 0
};
var _hoisted_3$3 = {
  key: 1,
  "class": "fy-menu-item-1"
};
var _hoisted_4$2 = {
  key: 0
};
var script$6 = {
  __name: 'MenuItem',
  props: {
    // 导航栏表单项
    tmplItem: {
      type: Object,
      "default": function _default() {}
    },
    // 是否折叠
    collapse: {
      type: Boolean,
      "default": false
    }
  },
  emits: ['select'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    function onClick(item) {
      emits('select', item);
    }
    return function (_ctx, _cache) {
      var _props$tmplItem;
      var _component_MenuItem = vue.resolveComponent("MenuItem", true);
      var _component_el_sub_menu = vue.resolveComponent("el-sub-menu");
      var _component_el_menu_item = vue.resolveComponent("el-menu-item");
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createCommentVNode(" 有子菜单 "), (_props$tmplItem = __props.tmplItem) !== null && _props$tmplItem !== void 0 && (_props$tmplItem = _props$tmplItem.children) !== null && _props$tmplItem !== void 0 && _props$tmplItem.length ? (vue.openBlock(), vue.createBlock(_component_el_sub_menu, {
        key: 0,
        teleported: false,
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return onClick(__props.tmplItem);
        })
      }, {
        title: vue.withCtx(function () {
          return [!__props.tmplItem.render ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tmplItem.icon), {
            "class": "h-5 w-5"
          })), !__props.collapse ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$4, vue.toDisplayString(__props.tmplItem.label), 1 /* TEXT */)) : vue.createCommentVNode("v-if", true)])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_3$3, [!__props.collapse ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tmpl.render), {
            key: 0,
            tmplItem: _ctx.tmpl
          }, null, 8 /* PROPS */, ["tmplItem"])) : vue.createCommentVNode("v-if", true)]))];
        }),
        "default": vue.withCtx(function () {
          return [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.tmplItem.children, function (item) {
            return vue.openBlock(), vue.createBlock(_component_MenuItem, {
              key: item.value,
              tmplItem: item,
              index: item.value
            }, null, 8 /* PROPS */, ["tmplItem", "index"]);
          }), 128 /* KEYED_FRAGMENT */))];
        }),

        _: 1 /* STABLE */
      })) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: 1
      }, [vue.createCommentVNode(" 无子菜单 "), vue.createVNode(_component_el_menu_item, {
        teleported: false,
        index: __props.tmplItem.value,
        "class": "fy-menu-item-2",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return onClick(__props.tmplItem);
        })
      }, {
        "default": vue.withCtx(function () {
          return [__props.tmplItem.render && !__props.collapse ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tmplItem.render), {
            key: 0,
            tmplItem: __props.tmplItem
          }, null, 8 /* PROPS */, ["tmplItem"])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
            key: 1
          }, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.tmplItem.icon), {
            "class": "h-5 w-5"
          })), !__props.collapse ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$2, vue.toDisplayString(__props.tmplItem.label), 1 /* TEXT */)) : vue.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */))];
        }),

        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["index"])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
    };
  }
};

script$6.__file = "packages/components/navigation/src/MenuItem.vue";

var _hoisted_1$4 = {
  "class": "logo"
};
var _hoisted_2$3 = /*#__PURE__*/vue.createElementVNode("img", {
  src: "https://cdn-aliyun.pingcode.com/static/portal/assets/images/logos/transparent.svg?v=4.158.0",
  "class": "img",
  alt: ""
}, null, -1 /* HOISTED */);
var _hoisted_3$2 = {
  key: 0,
  "class": "title"
};
var _hoisted_4$1 = {
  "class": "footer"
};
var script$5 = /*#__PURE__*/Object.assign({
  name: 'FYNavigation'
}, {
  __name: 'navigation',
  props: tool._objectSpread2({}, tool.tmplProps),
  emits: ['select', 'itemClick'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    var props = __props;
    var activeIndex = vue.computed(function () {
      return props.template[0].value;
    });
    var handleSelect = function handleSelect(key, keyPath, item) {
      emits('select', {
        key: key,
        keyPath: keyPath,
        item: item
      });
    };
    var onTmplItemSelect = function onTmplItemSelect(item) {
      emits('itemClick', item);
    };
    var isCollapse = vue.ref(false);
    var toggleCollapse = function toggleCollapse() {
      isCollapse.value = !isCollapse.value;
    };
    return function (_ctx, _cache) {
      var _component_el_menu_item = vue.resolveComponent("el-menu-item");
      var _component_el_menu = vue.resolveComponent("el-menu");
      return vue.openBlock(), vue.createElementBlock("div", {
        "class": vue.normalizeClass([isCollapse.value ? 'collapse-wrap' : 'no-collapse-wrap', 'fy-navigation-wrap'])
      }, [vue.createVNode(_component_el_menu, vue.mergeProps({
        "background-color": "#48525c",
        "default-active": activeIndex.value,
        "class": "fy-menu-el"
      }, _ctx.$attrs, {
        "text-color": "#ddd",
        "active-text-color": "#ddd",
        collapse: isCollapse.value,
        onSelect: handleSelect
      }), {
        "default": vue.withCtx(function () {
          return [vue.createVNode(_component_el_menu_item, {
            "class": "fy-navigation-item-logo"
          }, {
            "default": vue.withCtx(function () {
              return [vue.createElementVNode("div", _hoisted_1$4, [_hoisted_2$3, !isCollapse.value ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$2, "联图科技")) : vue.createCommentVNode("v-if", true)])];
            }),
            _: 1 /* STABLE */
          }), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.template, function (tmpl) {
            return vue.openBlock(), vue.createBlock(script$6, {
              key: tmpl.value,
              collapse: isCollapse.value,
              tmplItem: tmpl,
              onSelect: onTmplItemSelect
            }, null, 8 /* PROPS */, ["collapse", "tmplItem"]);
          }), 128 /* KEYED_FRAGMENT */)), vue.createVNode(_component_el_menu_item, {
            "class": "fy-navigation-item-footer"
          }, {
            "default": vue.withCtx(function () {
              return [vue.createElementVNode("div", _hoisted_4$1, [vue.createElementVNode("img", {
                src: _imports_0,
                alt: "",
                "class": vue.normalizeClass(['footer-collapse', {
                  'footer-collapse-reversal': isCollapse.value
                }]),
                onClick: toggleCollapse
              }, null, 2 /* CLASS */), vue.createCommentVNode(" <el-icon\n            v-if=\"!isCollapse\"\n            class=\"footer-no-collapse\"\n            @click=\"toggleCollapse\"\n          >\n            <Fold />\n          </el-icon>\n          <el-icon\n            v-else\n            class=\"footer-collapse\"\n            @click=\"toggleCollapse\"\n          >\n            <Expand />\n          </el-icon> ")])];
            }),
            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      }, 16 /* FULL_PROPS */, ["default-active", "collapse"])], 2 /* CLASS */);
    };
  }
});

script$5.__file = "packages/components/navigation/src/navigation.vue";

var FYNavigation = tool.withInstall(script$5);

var _hoisted_1$3 = {
  "class": "fy-top-navigation"
};
var _hoisted_2$2 = {
  "class": "left-one"
};
var _hoisted_3$1 = {
  "class": "title"
};
var _hoisted_4 = {
  key: 0,
  "class": "divider"
};
var _hoisted_5 = {
  "class": "right"
};
var script$4 = /*#__PURE__*/Object.assign({
  name: 'FYTopNavigation'
}, {
  __name: 'top-navigation',
  props: {
    config: {
      type: Object,
      "default": function _default() {
        return {
          icon: vue.createVNode(vue.resolveComponent("el-icon"), null, {
            "default": function _default() {
              return [vue.createVNode(notification_default, null, null)];
            }
          }),
          title: '产品管理',
          menu: [{
            label: '更多',
            value: '/page2',
            icon: vue.createVNode(vue.resolveComponent("el-icon"), null, {
              "default": function _default() {
                return [vue.createVNode(camera_default, null, null)];
              }
            }),
            children: [{
              label: '信息管理',
              value: '/page2/1'
            }, {
              label: '人员管理',
              value: '/page2/2'
            }, {
              label: '布控管理',
              value: '/page2/2-3-3',
              children: [{
                label: '车牌布防',
                value: '/page2/2-3-3-1'
              }, {
                label: '路线布防',
                value: '/page2/2-3-3-2'
              }]
            }]
          }]
        };
      }
    }
  },
  emits: ['select', 'itemClick'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;

    // eslint-disable-next-line

    function onSelect(_ref2) {
      var key = _ref2.key,
        keyPath = _ref2.keyPath,
        item = _ref2.item;
      emits('select', {
        key: key,
        keyPath: keyPath,
        item: item
      });
    }
    function onTmplItemClick(item) {
      emits('itemClick', item);
    }
    return function (_ctx, _cache) {
      var _component_FYMenu = vue.resolveComponent("FYMenu");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [vue.createElementVNode("div", _hoisted_2$2, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.config.icon))), vue.createElementVNode("span", _hoisted_3$1, vue.toDisplayString(__props.config.title), 1 /* TEXT */), __props.config.menu && __props.config.menu.length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4)) : vue.createCommentVNode("v-if", true), __props.config.menu && __props.config.menu.length ? (vue.openBlock(), vue.createBlock(_component_FYMenu, {
        key: 1,
        template: __props.config.menu,
        "class": "top-nav-menu",
        onSelect: onSelect,
        onItemClick: onTmplItemClick
      }, null, 8 /* PROPS */, ["template"])) : vue.createCommentVNode("v-if", true)]), vue.createElementVNode("div", _hoisted_5, [vue.renderSlot(_ctx.$slots, "operation")])]);
    };
  }
});

script$4.__file = "packages/components/top-navigation/src/top-navigation.vue";

var FYTopNavigation = tool.withInstall(script$4);

function insertScript() {
  return new Promise(function (resolve) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = false;
    script.src = 'http://www.bigemap.com:9000/bigemap.js/v2.1.0/bigemap.js';
    document.head.appendChild(script);
    var link = document.createElement('link');
    link.href = 'http://www.bigemap.com:9000/bigemap.js/v2.1.0/bigemap.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    script.onload = function () {
      resolve();
    };
  });
}

/**
 *
 * @param {string} domId 地图dom容器
 * @param {object} defaultLatlng 回显的经纬度
 * @param {function} updateLatlngCall 经纬度更新触发的事件
 * @returns
 */
function BigMapRenderer(_x, _x2, _x3) {
  return _BigMapRenderer.apply(this, arguments);
}
function _BigMapRenderer() {
  _BigMapRenderer = tool._asyncToGenerator( /*#__PURE__*/tool._regeneratorRuntime().mark(function _callee(domId, defaultLatlng, updateLatlngCall) {
    var _window, BM, map, marker, latlng;
    return tool._regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return insertScript();
        case 2:
          _window = window, BM = _window.BM;
          BM.Config.HTTP_URL = 'http://www.bigemap.com:9000';
          map = BM.map(domId, 'bigemap.zhongkexingtu', {
            center: [0, 0],
            zoom: 10,
            zoomControl: false
          });
          marker = null;
          latlng = vue.ref(defaultLatlng);
          if (defaultLatlng) {
            marker = BM.marker(defaultLatlng).addTo(map);
          }
          map.on('click', function (e) {
            if (marker) {
              marker.remove();
            }
            marker = BM.marker(e.latlng).addTo(map);
            latlng.value = e.latlng;
            updateLatlngCall(e.latlng);
          });
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _BigMapRenderer.apply(this, arguments);
}

var _hoisted_1$2 = {
  "class": "fy-map-coordselection-wrap"
};
var _hoisted_2$1 = {
  "class": "dialog-footer"
};
var script$3 = /*#__PURE__*/Object.assign({
  name: 'FYMapCoordselection'
}, {
  __name: 'map-coordselection',
  props: {
    modelValue: {
      type: Object,
      "default": function _default() {
        return {
          lat: null,
          lng: null
        };
      }
    },
    visible: {
      type: Boolean,
      "default": false
    },
    renderer: {
      type: Object,
      "default": null
    }
  },
  emits: ['update:modelValue', 'update:visible'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    var props = __props;

    /**
     * @author younghero
     * @Date 2023-8-4
     * @description 地图经纬度选择器
     */

    var dialogVisible = vue.computed({
      get: function get() {
        return props.visible;
      },
      set: function set(value) {
        emits('update:visible', value);
      }
    });
    var randomId = "fy_map_coord_".concat(new Date().getTime());
    var Renderer = props.renderer ? props.renderer : BigMapRenderer;
    function open() {
      return _open.apply(this, arguments);
    }
    function _open() {
      _open = tool._asyncToGenerator( /*#__PURE__*/tool._regeneratorRuntime().mark(function _callee() {
        return tool._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Renderer(randomId, props.modelValue, function (latlng) {
                emits('update:modelValue', latlng);
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _open.apply(this, arguments);
    }
    return function (_ctx, _cache) {
      var _component_el_dialog = vue.resolveComponent("el-dialog");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [vue.createVNode(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return dialogVisible.value = $event;
        }),
        "destroy-on-close": "",
        onOpen: open
      }, {
        header: vue.withCtx(function () {
          return [vue.createTextVNode(" 点位选取 ")];
        }),
        footer: vue.withCtx(function () {
          return [vue.createElementVNode("span", _hoisted_2$1, [vue.createVNode(vue.unref(FYButton), {
            onClick: _cache[0] || (_cache[0] = function ($event) {
              return dialogVisible.value = false;
            })
          }, {
            "default": vue.withCtx(function () {
              return [vue.createTextVNode("取消")];
            }),
            _: 1 /* STABLE */
          }), vue.createVNode(vue.unref(FYButton), {
            type: "primary",
            onClick: _cache[1] || (_cache[1] = function ($event) {
              return dialogVisible.value = false;
            })
          }, {
            "default": vue.withCtx(function () {
              return [vue.createTextVNode(" 确定 ")];
            }),
            _: 1 /* STABLE */
          })])];
        }),

        "default": vue.withCtx(function () {
          return [vue.createElementVNode("div", {
            id: randomId,
            "class": "map-container"
          })];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"]), vue.createElementVNode("div", {
        "class": "slot-wrap",
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return dialogVisible.value = true;
        })
      }, [vue.renderSlot(_ctx.$slots, "default")])]);
    };
  }
});

script$3.__file = "packages/components/map-coordselection/src/map-coordselection.vue";

var FYMapCoordselection = tool.withInstall(script$3);

function render(_ctx, _cache) {
  return "video-player";
}

var script$2 = {};
script$2.render = render;
script$2.__file = "packages/components/video-player/src/video-player.vue";
var VideoPlayer = script$2;

var FYVideoPlayer = tool.withInstall(VideoPlayer);

var _hoisted_1$1 = {
  "class": "fy-file-preview-wrap"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  "class": "dialog-footer"
};
var script$1 = /*#__PURE__*/Object.assign({
  name: 'FYFilePreview'
}, {
  __name: 'file-preview',
  props: {
    visible: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String
    },
    type: {
      type: String,
      validator: function validator(value) {
        return ['excel', 'word', 'pdf'].includes(value);
      }
    },
    height: {
      type: String,
      "default": '600px'
    },
    width: {
      type: String,
      "default": '70%'
    },
    src: {
      type: String,
      "default": 'https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx'
    }
  },
  emits: ['update:visible'],
  setup: function setup(__props, _ref) {
    var _useSlots;
    var emits = _ref.emit;
    var props = __props;

    /**
     * @author younghero
     * @Date 2023-8-15
     * @description 文件预览
     */

    var type2Renderer = {
      excel: VueOfficeExcel,
      word: VueOfficeDocx,
      pdf: VueOfficePdf
    };
    var dialogVisible = vue.computed({
      get: function get() {
        return props.visible;
      },
      set: function set(value) {
        emits('update:visible', value);
      }
    });
    var hasHeaderSlot = !!((_useSlots = vue.useSlots()) !== null && _useSlots !== void 0 && _useSlots.header);
    var fileType = vue.computed(function () {
      if (props.type) return props.type;
      if (props.src) {
        var suffix = props.src.match(/\.([^.]+)$/)[1];
        if (suffix === 'docx') return 'word';
        if (suffix === 'pdf') return 'pdf';
        return 'excel';
      }
      return 'word';
    });
    var title = vue.computed(function () {
      if (props.title) return props.title;
      if (fileType.value === 'excel') {
        return 'excel文件预览';
      }
      if (fileType.value === 'pdf') {
        return 'pdf文件预览';
      }
      return 'word文件预览';
    });
    var FileRenderer = vue.computed(function () {
      return type2Renderer[fileType.value];
    });
    return function (_ctx, _cache) {
      var _component_el_dialog = vue.resolveComponent("el-dialog");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [vue.createVNode(_component_el_dialog, {
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return dialogVisible.value = $event;
        }),
        "destroy-on-close": "",
        top: "5vh",
        width: "70%",
        style: {
          "{\n        width": "width"
        }
      }, {
        header: vue.withCtx(function () {
          return [vue.renderSlot(_ctx.$slots, "header"), !hasHeaderSlot ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString(title.value), 1 /* TEXT */)) : vue.createCommentVNode("v-if", true)];
        }),
        footer: vue.withCtx(function () {
          return [vue.createElementVNode("span", _hoisted_3, [vue.createVNode(vue.unref(FYButton), {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = function ($event) {
              return dialogVisible.value = false;
            })
          }, {
            "default": vue.withCtx(function () {
              return [vue.createTextVNode(" 确定 ")];
            }),
            _: 1 /* STABLE */
          })])];
        }),

        "default": vue.withCtx(function () {
          return [vue.createElementVNode("div", {
            "class": "fy-file-preview-content",
            style: vue.normalizeStyle({
              height: __props.height
            })
          }, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(FileRenderer.value), vue.mergeProps({
            src: __props.src,
            style: {
              "width": "100%",
              "height": "100%"
            }
          }, _ctx.$attrs), null, 16 /* FULL_PROPS */, ["src"]))], 4 /* STYLE */)];
        }),

        _: 3 /* FORWARDED */
      }, 8 /* PROPS */, ["modelValue"]), vue.createElementVNode("div", {
        "class": "slot-wrap",
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return dialogVisible.value = true;
        })
      }, [vue.renderSlot(_ctx.$slots, "default")])]);
    };
  }
});

script$1.__file = "packages/components/file-preview/src/file-preview.vue";

var FYFilePreview = tool.withInstall(script$1);

var _hoisted_1 = {
  key: 0,
  "class": "fy-image-preview-wrap"
};
var script = /*#__PURE__*/Object.assign({
  name: 'FYImagePreview'
}, {
  __name: 'image-preview',
  props: {
    visible: {
      type: Boolean,
      "default": false
    },
    teleported: {
      type: Boolean,
      "default": true
    }
  },
  emits: ['update:visible', 'close'],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    function onClose() {
      emits('update:visible', false);
      emits('close');
    }
    return function (_ctx, _cache) {
      var _component_el_image_viewer = vue.resolveComponent("el-image-viewer");
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [__props.visible ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createVNode(_component_el_image_viewer, vue.mergeProps(_ctx.$attrs, {
        teleported: __props.teleported,
        onClose: onClose
      }), null, 16 /* FULL_PROPS */, ["teleported"])])) : vue.createCommentVNode("v-if", true), vue.createElementVNode("div", {
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return emits('update:visible', true);
        })
      }, [vue.renderSlot(_ctx.$slots, "default")])], 64 /* STABLE_FRAGMENT */);
    };
  }
});

script.__file = "packages/components/image-preview/src/image-preview.vue";

var FYImagePreview = tool.withInstall(script);

var YHComponents = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FYActionPanel: FYActionPanel,
  FYAvatar: FYAvatar,
  FYButton: FYButton,
  FYCascader: FYCascader,
  FYDatePicker: FYDatePicker,
  FYDialog: FYDialog,
  FYEmpty: FYEmpty,
  FYFilePreview: FYFilePreview,
  FYFilterDisplay: FYFilterDisplay,
  FYFilterInline: FYFilterInline,
  FYFilterPanel: FYFilterPanel,
  FYForm: FYForm,
  FYImagePreview: FYImagePreview,
  FYInput: FYInput,
  FYLoading: FYLoading,
  FYMapCoordselection: FYMapCoordselection,
  FYMemberSelect: FYMemberSelect,
  FYMenu: FYMenu,
  FYNavigation: FYNavigation,
  FYPagination: FYPagination,
  FYProgress: FYProgress,
  FYSelect: FYSelect,
  FYSkeleton: FYSkeleton,
  FYSwitch: FYSwitch,
  FYTable: FYTable,
  FYTimeLine: FYTimeLine,
  FYTopNavigation: FYTopNavigation,
  FYTree: FYTree,
  FYUpload: FYUpload,
  FYVideoPlayer: FYVideoPlayer,
  FilterInline: FilterInline,
  LOGICAL_MAPPER: LOGICAL_MAPPER,
  RELATION_DIGIT_MAPPER: RELATION_DIGIT_MAPPER,
  RELATION_MAPPER: RELATION_MAPPER,
  createRangeDatePicker: createRangeDatePicker,
  filterDisplayItemMap: filterDisplayItemMap,
  filterInlineItemMap: filterInlineItemMap,
  filterPanelItemMap: filterPanelItemMap,
  formItemMap: formItemMap,
  installFilterDisplayItem: installFilterDisplayItem,
  installFilterInlineItem: installFilterInlineItem,
  installFilterPanelItem: installFilterPanelItem,
  installFormItem: installFormItem,
  mapperToOptions: mapperToOptions,
  useFilter: useFilter,
  useForm: useForm,
  useFormItems: useFormItems,
  useFormModel: useFormModel,
  useMemberCheck: useMemberCheck,
  useRelation: useRelation,
  useUnfold: useUnfold
});

var index = tool._objectSpread2(tool._objectSpread2({}, YHComponents), {}, {
  install: function install(app) {
    // 全局组件注册
    // 依赖于Element Plus 提前安装
    app.use(ElementPlus, {
      locale: zhCn
    });
    Object.keys(YHComponents).forEach(function (name) {
      app.use(YHComponents[name]);
    });
  }
});

exports.FYActionPanel = FYActionPanel;
exports.FYAvatar = FYAvatar;
exports.FYButton = FYButton;
exports.FYCascader = FYCascader;
exports.FYDatePicker = FYDatePicker;
exports.FYDialog = FYDialog;
exports.FYEmpty = FYEmpty;
exports.FYFilePreview = FYFilePreview;
exports.FYFilterDisplay = FYFilterDisplay;
exports.FYFilterInline = FYFilterInline;
exports.FYFilterPanel = FYFilterPanel;
exports.FYForm = FYForm;
exports.FYImagePreview = FYImagePreview;
exports.FYInput = FYInput;
exports.FYLoading = FYLoading;
exports.FYMapCoordselection = FYMapCoordselection;
exports.FYMemberSelect = FYMemberSelect;
exports.FYMenu = FYMenu;
exports.FYNavigation = FYNavigation;
exports.FYPagination = FYPagination;
exports.FYProgress = FYProgress;
exports.FYSelect = FYSelect;
exports.FYSkeleton = FYSkeleton;
exports.FYSwitch = FYSwitch;
exports.FYTable = FYTable;
exports.FYTimeLine = FYTimeLine;
exports.FYTopNavigation = FYTopNavigation;
exports.FYTree = FYTree;
exports.FYUpload = FYUpload;
exports.FYVideoPlayer = FYVideoPlayer;
exports.FilterInline = FilterInline;
exports.LOGICAL_MAPPER = LOGICAL_MAPPER;
exports.RELATION_DIGIT_MAPPER = RELATION_DIGIT_MAPPER;
exports.RELATION_MAPPER = RELATION_MAPPER;
exports.createRangeDatePicker = createRangeDatePicker;
exports.default = index;
exports.filterDisplayItemMap = filterDisplayItemMap;
exports.filterInlineItemMap = filterInlineItemMap;
exports.filterPanelItemMap = filterPanelItemMap;
exports.formItemMap = formItemMap;
exports.installFilterDisplayItem = installFilterDisplayItem;
exports.installFilterInlineItem = installFilterInlineItem;
exports.installFilterPanelItem = installFilterPanelItem;
exports.installFormItem = installFormItem;
exports.mapperToOptions = mapperToOptions;
exports.useFilter = useFilter;
exports.useForm = useForm;
exports.useFormItems = useFormItems;
exports.useFormModel = useFormModel;
exports.useMemberCheck = useMemberCheck;
exports.useRelation = useRelation;
exports.useUnfold = useUnfold;
