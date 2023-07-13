import { ref } from 'vue'
import FormGroup from '../form-group'
import { LOGICAL_MAPPER } from './constant'

export function useFormGroups() {
  // 表单组渲染集合
  const rendererSet = ref([])

  // 逻辑运算符
  const logical = ref(LOGICAL_MAPPER.且)

  return {
    create() { // 新增一行表单组
      const FormGroupRenderer = (<FormGroup></FormGroup>)
      rendererSet.value.push(FormGroupRenderer)

      return FormGroupRenderer
    },
    remove(index) { // 删除一行表单组
      if (index) {
        rendererSet.value.splice(index, 1)
      } else {
        rendererSet.value.splice(rendererSet.value.length - 1, 1)
      }
    },
    reset() {
      rendererSet.value = []
    },
    renderer() {
      return rendererSet.value
    },
    logical,
  }
}
