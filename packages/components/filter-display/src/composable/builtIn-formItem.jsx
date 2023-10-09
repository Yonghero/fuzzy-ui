import { computed, defineComponent, ref } from 'vue'
import { getRandomColor } from '@hitotek/fuzzy-ui-utils'
import { FYSelect } from '../../../select'
import { FYInput } from '../../../input'
import { useMemberCheck } from '../../../member-select'

export const Select = {
  type: 'select',
  renderer(props) {
    return (
      <FYSelect
        teleported={false}
        placeholder={`请选择${props.label}`}
        multiple={true}
        {...props}
        v-model={props.model[props.value]}
        onChange={
          () => {
            props.onWithChange({ field: props.value, value: props.model[props.value] })
          }
        }
      />
    )
  },
}

export const MultipleSelect = {
  type: 'multipleSelect',
  renderer: defineComponent({
    props: {
      model: {
        type: Object,
      },
    },
    setup(props, { attrs }) {
      const inpVal = ref('')
      const displayOptions = computed(() => attrs.options.filter(({ label }) => label.includes(inpVal.value)))
      const { checkedValues, onToggle } = useMemberCheck(
        { values: attrs?.defaultValue ?? [] },
        () => {
          // eslint-disable-next-line vue/no-mutating-props
          props.model[attrs.value] = checkedValues.value
        },
      )
      return () => (
        <div class="fy-filter-display-multipleSelect">
          <FYInput v-model={inpVal.value}></FYInput>
          <div class="scroll-content">
            {displayOptions.value.map((item) => (
            <div
              key={item.value}
              class="check-item"
            >
                <el-checkbox
                  checked={checkedValues.value.includes(item.value)}
                  onChange={() => {
                    onToggle(item)
                  }}
                />
                <div class="shape" style={{ background: getRandomColor() }}>
                  {item.label}
                </div>
              </div>))}
          </div>
        </div>
      )
    },
  }),
}
