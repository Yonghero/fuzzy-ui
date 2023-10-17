import {
  defineComponent, computed, ref, watch, nextTick, toRaw,
} from 'vue'
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
  emits: ['updateVisible', 'submit'],
  setup(props, { emit }) {
    const visible = computed({
      get() {
        return props.visible
      },
      set(v) {
        emit('updateVisible', v)
      },
    })

    const tmpl = ref([]) // 全部表头
    const visibleTmpl = ref([]) // 只展示的表头

    watch(
      () => props.template,
      (template) => {
        tmpl.value = [...template]
      },
      { immediate: true },
    )

    watch(
      tmpl,
      () => {
        visibleTmpl.value = tmpl.value.filter((item) => item.visible)
      },
      { immediate: true },
    )

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
            onClick={() => {
              // 重新对展示的字段做排序
              visibleTmpl.value.forEach((visibleItem, orderIdx) => {
                tmpl.value.forEach((item) => {
                  if (visibleItem.value === item.value) {
                    item.order = orderIdx
                  }
                })
              })

              emit('submit', toRaw(tmpl.value.map((item) => toRaw(item))))

              nextTick(() => {
                emit('updateVisible', false)
              })
            }}
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
        v-if={visible.value}
        title="表头显示属性"
        width="60%"
        top="5vh"
        destroy-on-close
      >
        <Transfer
          template={props.template}
          onUpdateTmpl={(e) => {
            tmpl.value = e
          }}
          onUpdateVisibleTmpl={(e) => {
            visibleTmpl.value = e
          }}
        />
      </el-dialog>
    )
  },
})
