import {
  defineComponent, ref, computed, unref, watch,
} from 'vue'

export const SelectionIndex = defineComponent({
  props: {
    scope: {
      type: Object,
      default: () => ({ row: {} }),
    },
    prop: {
      type: String,
      default: 'index',
    },
    columnProps: {
      type: Object,
      default: () => ({ }),
    },
    checked: {
      type: Boolean,
      default: () => (false),
    },
    onChecked: {
      type: Function,
    },
  },
  setup(props) {
    const isIndex = ref(true)

    // 是否点击的全选按钮
    // 点击全选 序号将要变为checkbox
    watch(() => props.checked, (bool) => {
      isIndex.value = !bool
    })

    const checked = computed({
      get() {
        return props.checked
      },
      set(v) {
        props.onChecked(v)
      },
    })

    const handleMouseenter = () => {
      isIndex.value = false
    }

    const handleMouseleave = () => {
      if (!checked.value) {
        isIndex.value = true
      }
    }

    const rowValue = computed(() => props.scope.row[props.prop])

    const RendererItem = computed(() => {
      // 序号和多选同时满足
      if (unref(props.columnProps.index) && unref(props.columnProps.selection)) {
        return (
          isIndex.value
            ? <div style="width:100%;height:100%">{unref(rowValue)}</div>
            : <el-checkbox v-model={checked.value} />
        )
      }
      // 只满足多选
      if (unref(props.columnProps.selection)) {
        return (<el-checkbox v-model={checked.value}/>)
      }

      // 只满足序号
      return (<div style="width:100%;height:100%">{unref(rowValue)}</div>)
    })

    return () => (
      <div
        style="
          display:flex;
          justify-content:center;
          items-center: center;
          width: 30px;
          height: 30px;
      "
        onMouseenter={handleMouseenter}
        onMouseleave={handleMouseleave}
      >
        <RendererItem.value/>
     </div>
    )
  },
})
