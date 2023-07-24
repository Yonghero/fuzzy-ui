import { defineComponent, computed } from 'vue'
import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import Transfer from './transfer.vue'

export default defineComponent({
  name: 'TableSetting',
  props: {
    ...tmplProps,
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['updateVisible'],
  setup(props, { emit }) {
    const visible = computed({
      get() {
        return props.visible
      },
      set(v) {
        emit('updateVisible', v)
      },
    })

    const slots = {
      footer: () => (
        <>
          <FYButton
            type="info"
            text
            size="large"
            link
            style="font-size: 1rem;"
            onClick={() => {
              emit('updateVisible', false)
            }}
          >
            取消
          </FYButton>
          <FYButton
            type="primary"
            size="large"
            style="font-size: 1rem;"
          >
            确定
          </FYButton>
        </>
      ),
    }

    return () => (
      <el-dialog
        v-slots={slots}
        v-model={visible.value}
        title="表头显示属性"
        width="70%"
        top="5vh"
        destroy-on-close
      >
        <Transfer template={props.template}></Transfer>
      </el-dialog>
    )
  },
})
