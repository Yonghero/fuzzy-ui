'use strict';

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
  return vue.openBlock(), vue.createBlock(_component_el_button, {
    type: "primary",
    class: "my-button"
  }, {
    default: vue.withCtx(() => [vue.createTextVNode("我是 yh-button")]),
    _: 1 /* STABLE */
  });
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

exports.YHButton = YHButton;
exports.YHButtonGroup = YHButtonGroup;
