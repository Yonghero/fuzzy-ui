import { ref, openBlock, createBlock, unref, mergeProps, withCtx, renderSlot, createElementBlock, createTextVNode, createVNode } from 'vue';
import { ElButton } from 'element-plus';
import { withInstall } from '../utils/index.mjs';

const throttleDuration = 1000;
var script$1 = /*#__PURE__*/Object.assign({
  name: 'YHButton'
}, {
  __name: 'button',
  props: {
    throttle: {
      // 是否开启节流
      type: Boolean,
      default: true
    }
  },
  emits: ['click'],
  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const record = ref(0);
    const handleClick = () => {
      if (props.throttle) {
        const newTime = new Date();
        if (newTime.getTime() - record.value > throttleDuration) {
          emits('click');
        }
        record.value = new Date().getTime();
      }
      emits('click');
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElButton), mergeProps(_ctx.$attrs, {
        onClick: handleClick
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */);
    };
  }
});

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

export { YHButton, YHButtonGroup, index as default };
