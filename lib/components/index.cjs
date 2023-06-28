'use strict';

var elementPlus = require('element-plus');
var vue = require('vue');
var utils_index = require('../utils/index.cjs');

var script = {
  name: 'YHButton',
  components: {
    ElButton: elementPlus.ElButton
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = vue.resolveComponent("el-button");
  return vue.openBlock(), vue.createBlock(_component_el_button, {
    type: "primary",
    class: "my-button"
  }, {
    default: vue.withCtx(() => [vue.createTextVNode("我是 yh-button")]),
    _: 1 /* STABLE */
  });
}

script.render = render;
script.__file = "packages/components/button/src/button.vue";

const YHButton = utils_index.withInstall(script);

exports.YHButton = YHButton;
