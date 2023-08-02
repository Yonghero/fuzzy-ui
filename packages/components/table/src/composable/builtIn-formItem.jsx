import {
  defineComponent, nextTick, ref, unref,
} from 'vue'
import { EditPen } from '@element-plus/icons-vue'
import dayjs from 'dayjs'

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
                    <div class="table-edit-item-icon">
                      <el-icon size="20" color="#aaa"><EditPen /></el-icon>
                    </div>
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

/**
 * 小数位数限制
 */
export const Limit = {
  type: 'limit',

  renderer(props) {
    return <>
      {
        (() => {
          const value = ref(props.scope.row[props.value])

          if (value.value) {
            if (Number.isInteger(+value.value)) { return value }
            return value.value.toFixed(props.type.split('limit')[1])
          }
          return value.value === 0 ? value : '-'
        })()
      }
    </>
  },
}

/**
 * 图片预览
 */
export const ImagePreview = {
  type: 'imagePreview',

  renderer(props) {
    const value = props.scope.row[props.value]
    let url = ''
    let srcList = []
    if (Array.isArray(value)) {
      srcList = value
      // eslint-disable-next-line prefer-destructuring
      url = value[0]
    } else {
      srcList[0] = value
      url = value
    }
    return (
      <el-image
        src={url}
        preview-src-list={srcList}
        preview-teleported={true}
        initial-index={0}
        fit="cover"
        {...props}
      />
    )
  },
}

/**
 * 日期时间展示规则
 */
// eslint-disable-next-line no-underscore-dangle
const __format = {
  minute: 'YYYY年M月DD日 HH:mm',
  second: 'YYYY年M月DD日 HH:mm:ss',
  day: 'YYYY年M月DD日',
}
export const TimeDisplay = {
  type: 'timeDisplay',

  renderer(props) {
    const value = props.scope.row[props.value]

    const formatKey = props.type.split('timeDisplay')[1].toLowerCase()

    const formatVal = __format[formatKey]

    let str = dayjs(value).format(formatVal)

    // 今年 不展示年份
    if (dayjs().year() === dayjs(value).year()) {
      str = str.replace(/\d{4}年/, '')
    }

    // 今天 年月日替换为今天
    if (dayjs().date() === dayjs(value).date()) {
      str = str.replace(/.*日\s*/, '今天 ')
    }

    return str
  },
}
