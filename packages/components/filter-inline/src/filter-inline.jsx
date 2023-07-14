import { defineComponent, unref, ref } from 'vue'
import { useFormModel, useFormItems } from './composable'
import { FYButton } from '../../button'
/**
 * @author younghero
 * @Date 2023-7-13 10:54
 * @description 内联表单查询面板
 */

export default defineComponent({
  props: {
    template: {
      type: Array,
      default: () => ([]),
    },
    labelConfig: {
      type: Object,
      default: () => ({
        position: 'right',
        width: 70,
      }),
    },
    lang: {
      type: String,
      default: '查询',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['submit'],
  setup(props, ctx) {
    const formEl = ref()

    const model = useFormModel(props)
    const FormItems = useFormItems(props, model)

    function submit() {
      ctx.emit('submit', model.value)
    }

    return () => (
      <div class="fy-filter-inline-wrap">
       <el-form
          class="custom-el-form flex w-full flex-wrap"
          {...props }
          model={unref(model)}
          ref={formEl}
          disabled={props.disabled ?? false}
          label-position={props.labelConfig.position}
          inline
        >
          { FormItems.value }
          <el-form-item>
            <FYButton
              type="primary"
              loading={props.loading}
              onClick={submit}
            >
                {props.lang}
            </FYButton>
          </el-form-item>
       </el-form>
      </div>
    )
  },
})
