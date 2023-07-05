'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var utils_index = require('../utils/index.cjs');

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
    const record = vue.ref(0);
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
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps(_ctx.$attrs, {
        onClick: handleClick
      }), {
        default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default")]),
        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */);
    };
  }
});

script$1.__file = "packages/components/button/src/button.vue";

const FYButton = utils_index.withInstall(script$1);

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
    const hasDefaultSlot = vue.computed(() => {
      const slots = vue.useSlots();
      return slots.default;
    });
    const defaultIconStyle = vue.computed(() => ({
      borderRadius: '50%',
      background: utils_index.getRandomColor(),
      width: '18px',
      height: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }));
    return (_ctx, _cache) => {
      const _component_el_cascader = vue.resolveComponent("el-cascader");
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createVNode(_component_el_cascader, vue.mergeProps(_ctx.$attrs, {
        options: options
      }), {
        default: vue.withCtx(({
          data,
          node
        }) => [vue.createCommentVNode("   外部插槽传入    "), hasDefaultSlot.value ? vue.renderSlot(_ctx.$slots, "default", {
          key: 0,
          data: data,
          node: node
        }) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
          key: 1
        }, [vue.createCommentVNode("   外部插槽不传入    "), vue.createElementVNode("div", _hoisted_2, [vue.createCommentVNode("   data item 是否传入icon    "), data.icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(data.icon), {
          key: 0
        })) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
          key: 1
        }, [vue.createCommentVNode("  data item 没有传入icon默认展示第一个字作为图标   "), vue.createElementVNode("div", {
          style: vue.normalizeStyle(defaultIconStyle.value)
        }, vue.toDisplayString(data.label.slice(0, 1)), 5 /* TEXT, STYLE */)], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */)), vue.createElementVNode("span", null, vue.toDisplayString(data.label), 1 /* TEXT */)])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))]),

        _: 3 /* FORWARDED */
      }, 16 /* FULL_PROPS */)]);
    };
  }
});

script.__file = "packages/components/cascader/src/cascader.vue";

const FYCascader = utils_index.withInstall(script);

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

exports.FYButton = FYButton;
exports.FYCascader = FYCascader;
exports.default = index;
