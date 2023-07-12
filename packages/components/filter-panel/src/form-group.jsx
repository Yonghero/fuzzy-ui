import {
  defineComponent, computed, ref,
} from 'vue'
import { Delete } from '@element-plus/icons-vue'
import { FYSelect } from '../../select'
import {
  LOGICAL_MAPPER, RELATION_MAPPER, RELATION_DIGIT_MAPPER, mapperToOptions,
} from './composable/constant'
import { formItemMap } from './composable/install'
import './form-group.scss'

export default defineComponent({
  props: {
    index: {
      type: Number,
      required: true,
    },
    template: {
      type: Array,
      default: () => ([]),
    },
    logical: {
      type: String,
      default: '&',
    },
  },
  emits: ['remove', 'update:logical'],
  setup(props, ctx) {
    // 首行表单逻辑运算符为当
    const isWhen = computed(() => props.index === 0)

    // 仅第二行表单可以修改逻辑值 剩余行表单与第二行表单逻辑值保持一致
    const shouldChangeLogical = computed(() => props.index === 1)

    // 逻辑运算值
    const logicalSelf = computed({
      get() {
        return props.logical
      },
      set(value) {
        ctx.emit('update:logical', value)
      },
    })

    const relationValue = ref()
    const relationOptions = computed(() => mapperToOptions(RELATION_MAPPER))

    const tmplValMap = computed(() => props.template.reduce((mapper, item) => {
      mapper[item.value] = item
      return mapper
    }, {}))

    const filterValue = ref()

    const FormItemRenderer = ref()
    const FormItemProps = ref()

    function setFilterFormItem(item) {
      relationValue.value = item.digit ? RELATION_DIGIT_MAPPER.等于 : RELATION_MAPPER.属于
      relationOptions.value = item.digit ? mapperToOptions(RELATION_DIGIT_MAPPER) : mapperToOptions(RELATION_MAPPER)
      FormItemRenderer.value = formItemMap.get(item.type)
    }

    function onFilterChange(value) {
      const item = tmplValMap.value[value]
      FormItemProps.value = { ...item, model: formModel.value, value }
      setFilterFormItem(item)
    }

    const formModel = ref({})
    const rules = ref([])

    return () => (
      <div class="conditions-group-content form-group">
        <div class="conditions-item">
          <div class="logical-item">
            {
              isWhen.value
                ? (<div class="when">当</div>)
                : (
                    <FYSelect
                      v-model={logicalSelf.value}
                      class="logical-select"
                      disabled={!shouldChangeLogical.value}
                      options={mapperToOptions(LOGICAL_MAPPER)}
                      placeholder="请选择"
                  />
                )
            }
          </div>
          <div class="form-container">
            <div class="form-content">
              <FYSelect
                v-model={filterValue.value}
                options={props.template}
                onChange={onFilterChange}
                class="shorted-select"
              />
              {/* <!-- 关系运算符 --> */}
              <FYSelect
                v-model={relationValue.value}
                options={relationOptions.value}
                class="shorted-select"
              />
              <ElForm
                model={formModel}
                rules={rules}
                inline={true}
              >
                <ElFormItem prop={filterValue.value} required>
                  <FormItemRenderer.value {...FormItemProps.value}/>
                </ElFormItem>
              </ElForm>
            </div>

            <div
              class="delete-icon"
              onClick={() => (ctx.emit('remove'))}
            >
              <el-icon
                size="20"
                color="#999"
              >
                <Delete />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
    )
  },
})
