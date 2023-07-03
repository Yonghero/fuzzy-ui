import { ref, openBlock, createBlock, unref, mergeProps, withCtx, renderSlot, computed, useSlots, resolveComponent, createElementBlock, createVNode, createCommentVNode, Fragment, createElementVNode, resolveDynamicComponent, normalizeStyle, toDisplayString } from 'vue';
import { ElButton } from 'element-plus';
import { withInstall, getRandomColor } from '../utils/index.mjs';

const throttleDuration = 1000;
var script$1 = /*#__PURE__*/Object.assign({
  name: 'FYButton'
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

const FYButton = withInstall(script$1);

const _hoisted_1 = {
  style: {
    "margin": "10px"
  }
};
const _hoisted_2 = {
  style: {
    "width": "100%",
    "display": "flex",
    "justify-items": "center",
    "align-items": "center",
    "column-gap": "0.5rem"
  }
};
var script = /*#__PURE__*/Object.assign({
  name: 'FYCascader'
}, {
  __name: 'cascader',
  props: {
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const options = [{
      value: 'guide',
      label: 'Guide',
      // icon: <el-icon><UserFilled /></el-icon>,
      children: [{
        value: 'disciplines',
        label: 'Disciplines',
        children: [{
          value: 'consistency',
          label: 'Consistency'
        }, {
          value: 'feedback',
          label: 'Feedback'
        }, {
          value: 'efficiency',
          label: 'Efficiency'
        }, {
          value: 'controllability',
          label: 'Controllability'
        }]
      }, {
        value: 'navigation',
        label: 'Navigation',
        children: [{
          value: 'side nav',
          label: 'Side Navigation'
        }, {
          value: 'top nav',
          label: 'Top Navigation'
        }]
      }]
    }];
    const hasDefaultSlot = computed(() => {
      const slots = useSlots();
      return slots.default;
    });
    const defaultIconStyle = computed(() => ({
      borderRadius: '50%',
      background: getRandomColor(),
      width: '18px',
      height: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }));
    return (_ctx, _cache) => {
      const _component_el_cascader = resolveComponent("el-cascader");
      return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_el_cascader, mergeProps(_ctx.$attrs, {
        options: options
      }), {
        default: withCtx(({
          data,
          node
        }) => [createCommentVNode("   外部插槽传入    "), hasDefaultSlot.value ? renderSlot(_ctx.$slots, "default", {
          key: 0,
          data: data,
          node: node
        }) : (openBlock(), createElementBlock(Fragment, {
          key: 1
        }, [createCommentVNode("   外部插槽不传入    "), createElementVNode("div", _hoisted_2, [createCommentVNode("   data item 是否传入icon    "), data.icon ? (openBlock(), createBlock(resolveDynamicComponent(data.icon), {
          key: 0
        })) : (openBlock(), createElementBlock(Fragment, {
          key: 1
        }, [createCommentVNode("  data item 没有传入icon默认展示第一个字作为图标   "), createElementVNode("div", {
          style: normalizeStyle(defaultIconStyle.value)
        }, toDisplayString(data.label.slice(0, 1)), 5 /* TEXT, STYLE */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)), createElementVNode("span", null, toDisplayString(data.label), 1 /* TEXT */)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))]),

        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */)]);
    };
  }
});

script.__file = "packages/components/cascader/src/cascader.vue";

const FYCascader = withInstall(script);

var YHComponents = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FYButton: FYButton,
  FYCascader: FYCascader
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

export { FYButton, FYCascader, index as default };
