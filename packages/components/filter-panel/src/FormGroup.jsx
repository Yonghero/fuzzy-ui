import {
  defineComponent, computed,
} from 'vue'
import { Delete } from '@element-plus/icons-vue'
import { FYSelect } from '../../select'
import {
  LOGICAL_MAPPER, mapperToOptions,
  useFilter, useRelation, useForm,
} from './composable'
import '@hitotek/fuzzy-ui-theme-chalk/src/filter-panel/form-group.scss'

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

    // 可查询字段options
    const {
      filterValue,
      filterItem,
      filterOptions,
    } = useFilter(props)

    // 关系运算符options
    const {
      relationValue,
      relationOptions,
    } = useRelation(filterValue, filterItem)

    // 查询字段对应的组件
    const {
      model,
      rules,
      formEl,
      validate,
      formItemProps,
      FormItem,
    } = useForm(filterItem)

    // 数据结构调整
    async function wrappedValidate() {
      await validate()

      const field = filterItem.value.value

      /**
       * @example
       * {
       *    person: {
       *      value: 'younghero',
       *      relation: 'is',
       *      logical: '&'
       *    }
       * }
       */

      return {
        [field]: {
          value: model.value[field], // 字段值
          relation: relationValue.value, // 关系运算值
          logical: isWhen.value ? 'when' : logicalSelf.value, // 逻辑运算值
        },
      }
    }

    // 向外提供表单组校验
    ctx.expose({ validate: wrappedValidate })

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
                options={filterOptions.value}
                class="shorted-select"
                placeholder="请选择"
              />
              {/* <!-- 关系运算符 --> */}
              <FYSelect
                v-model={relationValue.value}
                options={relationOptions.value}
                class="shorted-select"
                placeholder="请选择"
              />
              <div class="form-dynamic">
                <el-form
                  ref={formEl}
                  model={model.value}
                  rules={rules.value}
                  inline
                >
                  <el-form-item prop={filterItem.value.value}>
                    <FormItem.value {...formItemProps.value} model={model.value} />
                  </el-form-item>
                </el-form>
              </div>

            </div>
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
    )
  },
})
