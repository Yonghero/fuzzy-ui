import { ElButton } from 'element-plus';
import { resolveComponent, openBlock, createBlock, mergeProps, withCtx, renderSlot, createElementBlock, createTextVNode, createVNode, unref } from 'vue';
import { withInstall } from '../utils/index.mjs';

var script$1 = {
  name: 'YHButton',
  components: {
    ElButton
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  return openBlock(), createBlock(_component_el_button, mergeProps(_ctx.$attrs, {
    onClick: _ctx.handleClick
  }), {
    default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3 /* FORWARDED */
  }, 16 /* FULL_PROPS */, ["onClick"]);
}

script$1.render = render;
script$1.__file = "packages/components/button/src/button.vue";

const YHButton = withInstall(script$1);

var script = /*#__PURE__*/Object.assign({
  name: 'YHButtonGroup'
}, {
  __name: 'button-group',
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [createTextVNode(" 这是组 "), createVNode(unref(YHButton))]);
    };
  }
});

script.__file = "packages/components/button-group/src/button-group.vue";

const YHButtonGroup = withInstall(script);

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

export { index as default };
