'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var elementPlus = require('element-plus');
var vue = require('vue');
var utils_index = require('../utils/index.cjs');

var script$1 = {
  name: 'YHButton',
  components: {
    ElButton: elementPlus.ElButton
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = vue.resolveComponent("el-button");
  return vue.openBlock(), vue.createBlock(_component_el_button, vue.mergeProps(_ctx.$attrs, {
    onClick: _ctx.handleClick
  }), {
    default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default")]),
    _: 3 /* FORWARDED */
  }, 16 /* FULL_PROPS */, ["onClick"]);
}

script$1.render = render;
script$1.__file = "packages/components/button/src/button.vue";

const YHButton = utils_index.withInstall(script$1);

var script = /*#__PURE__*/Object.assign({
  name: 'YHButtonGroup'
}, {
  __name: 'button-group',
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [vue.createTextVNode(" 这是组 "), vue.createVNode(vue.unref(YHButton))]);
    };
  }
});

script.__file = "packages/components/button-group/src/button-group.vue";

const YHButtonGroup = utils_index.withInstall(script);

var YHComponents = /*#__PURE__*/Object.freeze({
  __proto__: null,
  YHButton: YHButton,
  YHButtonGroup: YHButtonGroup
});

var index = {
  ...YHComponents,
  install: app => {
    // 全局组件注册
    Object.keys(YHComponents).forEach(name => {
      app.use(YHComponents[name]);
    });
  }
};

exports.default = index;
