import {
  defineComponent, nextTick, ref, unref,
} from 'vue'
import { EditPen } from '@element-plus/icons-vue'

export const Input = {
  type: 'input',

  renderer: defineComponent({
    setup(props, { attrs }) {
      const Ele = ref()
      const value = ref(attrs.scope.row[attrs.value])

      const editing = ref(false) // 当前是否为编辑状态

      function emitValue() {
        // 校验一下是否通过
        if (attrs.validateEditValue) {
          if (!attrs.validateEditValue(unref(value))) return
        }

        attrs.onChange({ value: unref(value) })
        editing.value = false // 退出编辑模式
      }

      return () => (
        <div class="fy-table-edit-wrap">
          {
            !editing.value
              ? (
                  <div class="fy-table-edit-item" onClick={() => {
                    editing.value = true
                    nextTick(() => {
                      Ele.value.focus()
                    })
                  }}>
                    { unref(value) }
                    <el-icon size="20" color="#aaa"><EditPen /></el-icon>
                  </div>
              )
              : (
                  <el-input
                    v-model={value.value}
                    ref={Ele}
                    onKeyup={(e) => { // 绑定回车事件
                      if (e.code === 'Enter') {
                        emitValue()
                      }
                    }}
                    onBlur={() => { // 绑定失焦事件
                      emitValue()
                    }}
                  />
              )
          }
        </div>
      )
    },
  }),
}
