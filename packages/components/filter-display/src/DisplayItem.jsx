import { ArrowUp, ArrowDown } from '@element-plus/icons-vue'
import { defineComponent, ref, computed } from 'vue'
import { useUnfold } from './composable'
import { filterDisplayItemMap } from './composable/install.jsx'

export const DisplayItem = defineComponent({
  props: {
    tmplItem: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['click', 'change'],
  setup(props, { emit }) {
    // 是否展开
    const { unfold, toggle } = useUnfold()
    const onClick = () => {
      toggle()
      emit('click', unfold.value)
    }

    const withOnChangeProps = {
      ...props.tmplItem,
      onWithChange({ field, value }) {
        emit('change', { field, value })
        if (props.tmplItem && props.tmplItem.onChange && typeof props.tmplItem.onChange === 'function') {
          props.tmplItem.onChange({ field, value })
        }
      },
    }

    // 表单项组件
    const FormItem = computed(() => {
      if (props.tmplItem.render) return props.tmplItem.render
      const renderer = filterDisplayItemMap.get(props.tmplItem.type)
      return renderer || <div/>
    })

    const value = computed(() => props.tmplItem.value)

    // 下拉弹出框
    const popoverVisible = ref(false)
    const model = ref({ [value.value]: props.tmplItem.defaultValue || '' })

    // 已选择的值
    const checkedLength = computed(() => {
      const modelValue = model.value[value.value]
      if (Array.isArray(modelValue)) {
        return modelValue.length
      }
      if (modelValue) {
        return 1
      }
      return 0
    })

    const VSlots = {
      reference: () => (
        <div
          class={popoverVisible.value ? 'display-item active' : 'display-item'}
          onClick={onClick}
        >
          <span>{props.tmplItem.label}</span>
          {
            checkedLength.value > 0
              ? <div class="badge">{checkedLength.value}</div>
              : null
          }
          <el-icon>
            { unfold.value ? <ArrowDown /> : <ArrowUp/> }
          </el-icon>
        </div>
      ),
      default: () => (
        <div class="popover-content">
          <FormItem.value model={model.value} {...withOnChangeProps}/>
          <div class="checked">
            已选<span style="color: var(--el-color-primary)">{checkedLength.value}</span>项
          </div>
        </div>
      ),
    }

    return () => (
      <el-popover
        v-model:visible={popoverVisible.value}
        width="200"
        show-arrow={false}
        trigger="click"
        placement="bottom-start"
        popper-class="filter-display-item-popover"
        teleported={false}
        v-slots={VSlots}
      />
    )
  },
})
