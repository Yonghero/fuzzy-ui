import { defineComponent, computed } from 'vue'
import { formItemMap } from './composable/install'
import UploadItem from '../../upload/src/components/UploadItem.vue'

export const FormItem = defineComponent({
  props: {
    // 每一个表单项对象
    tmplItem: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    // 文件类型校验的回调
    const typeCheck = (e) => {
      emit('type-check', e)
    }
    // 表单项组件
    const FormItemCom = computed(() => {
      if (props.tmplItem.render) return props.tmplItem.render
      const renderer = formItemMap.get(props.tmplItem.type)
      return renderer || <div />
    })
    // 分别对应 宽度拉满 宽度占一半 宽度占四分之一 默认占满
    const getFromStyle = (item) => {
      if (item.full) {
        return { flex: '0 0 100%' }
      }
      if (item.half) {
        return { flex: '0 0 45%' }
      }
      if (item.oneOfFour) {
        return { flex: '0 0 24.5%' }
      }
      return { flex: '0 0 100%' }
    }
    // 上传文件改变的回调
    const fileChange = (file, files) => {
      emit('file-change', file, files)
    }

    return () => (
      <ElFormItem
        label={props.tmplItem.label}
        key={props.tmplItem.value}
        prop={props.tmplItem.value}
        style={getFromStyle(props.tmplItem)}
      >
        {props.tmplItem.type === 'upload' ? (
          <UploadItem onTypeCheck={typeCheck} onFileChange={fileChange} />
        ) : (
          <FormItemCom.value model={props.tmplItem.model} {...props.tmplItem} />
        )}
      </ElFormItem>
    )
  },
})
