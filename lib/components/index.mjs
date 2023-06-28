import { ElButton } from 'element-plus';
import { resolveComponent, openBlock, createBlock, withCtx, createTextVNode } from 'vue';
import { withInstall } from '../utils/index.mjs';

var script = {
  name: 'YHButton',
  components: {
    ElButton
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createBlock(_component_el_button, {
    type: "primary",
    class: "my-button"
  }, {
    default: withCtx(() => [createTextVNode("我是 yh-button")]),
    _: 1 /* STABLE */
  });
}

script.render = render;
script.__file = "packages/components/button/src/button.vue";

const YHButton = withInstall(script);

export { YHButton };
