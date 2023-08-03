import {
  computed, defineComponent, ref, watch, watchEffect,
} from 'vue'
import { Check } from '@element-plus/icons-vue'
import { FYAvatar } from '../../avatar'

function useMemberCheck(props, emit) {
  const checkedValues = ref([])

  function onToggle(item) {
    const index = checkedValues.value.findIndex((value) => value === item.value)

    if (index !== -1) {
      checkedValues.value.splice(index, 1)
    } else {
      checkedValues.value.push(item.value)
    }

    emit('check', checkedValues.value)
  }

  // 已选中的值重新赋值
  watchEffect(() => {
    checkedValues.value = props.values
  })

  return {
    checkedValues,
    onToggle,
  }
}

export const Select = defineComponent({
  name: 'MemberSelect',
  props: {
    tmplItem: {
      type: Object,
      default: () => ({ options: [] }),
    },
    values: {
      type: Array,
      default: () => ([]),
    },
    searchVal: {
      type: String,
      default: '',
    },
  },
  emits: ['check'],
  setup(props, { emit }) {
    const { checkedValues, onToggle } = useMemberCheck(props, emit)

    const allOptions = computed(() => props.tmplItem.options)
    const displayOptions = computed(() => allOptions.value.filter((item) => item.label.includes(props.searchVal)))

    return () => (
      <div class="fy-body-select">
        {
          displayOptions.value.map((item, idx) => (
            <div
              class="select-item"
              key={idx}
              onClick={() => onToggle(item)}
            >
              <div class="member" >
                <FYAvatar name={item.label}/>
                <span>{item.label}</span>
              </div>
              {
                checkedValues.value.includes(item.value)
                  ? <div class="item-icon">
                      <el-icon
                        size={20}
                        color="#6698ff"
                      >
                        <Check />
                      </el-icon>
                      </div>
                  : null
              }
            </div>
          ))
        }

      </div>
    )
  },
})

export const TreeSelect = defineComponent({
  name: 'MemberTree',
  props: {
    tmplItem: {
      type: Object,
      default: () => ({ options: [] }),
    },
    values: {
      type: Array,
      default: () => ([]),
    },
    searchVal: {
      type: String,
      default: '',
    },
  },
  emits: ['check'],
  setup(props, { emit }) {
    const treeEle = ref()

    // 树过滤
    watch(() => props.searchVal, (val) => {
      treeEle.value.filter(val)
    })

    const { checkedValues, onToggle } = useMemberCheck(props, emit)

    const data = computed(() => props.tmplItem.options)

    function renderContent(h, { data }) {
      // 是成员
      if (data.member) {
        return (
          <div class="select-item" onClick={() => onToggle(data)}>
            <div class="member" >
              <FYAvatar name={data.label}/>
              <span>{data.label}</span>
            </div>
            {
              checkedValues.value.includes(data.value)
                ? <div class="item-icon">
                  <el-icon
                    size={20}
                    color="#6698ff"
                  >
                    <Check />
                  </el-icon>
                  </div>
                : null
            }
          </div>
        )
      }
      return (
        <div class="not-member">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false"><g id="apx1.Base基础/1.icon图标/2.normal/部门" stroke-width="1" fill-rule="evenodd"><path d="M9 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.39l-.016 2.138H11.5a2.1 2.1 0 0 1 2.095 1.95l.005.15V11h.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a.9.9 0 0 0-.787-.893l-.113-.007h-7a.9.9 0 0 0-.893.787l-.007.113V11H4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a2.1 2.1 0 0 1 1.95-2.094l.15-.006h2.894L7.41 5H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm4.8 11.2h-1.6v1.6h1.6v-1.6zm-10 0H2.2v1.6h1.6v-1.6zm5-10H7.2v1.6h1.6V2.2z" id="apx形状结合"></path></g></svg>
          <span>{data.label}</span>
        </div>
      )
    }

    function filterNode(value, data) {
      if (!value) return true
      return data.label.includes(value)
    }

    return () => (
      <div class="fy-body-tree-select">
       <el-tree
        data={data.value}
        renderContent={renderContent}
        ref={treeEle}
        filterNodeMethod={filterNode}
      />
      </div>
    )
  },
})
