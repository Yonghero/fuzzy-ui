import { defineComponent } from 'vue'
import { Check } from '@element-plus/icons-vue'
import { FYAvatar } from '../../avatar'
import { FYTree } from '../../tree'

export const Select = defineComponent({
  name: 'MemberSelect',
  props: {
    tmplItem: {
      type: Object,
      default: () => ({ options: [] }),
    },
  },
  setup() {
    return () => (
      <div class="fy-body-select">
        <div class="select-item">
          <div class="member">
            <FYAvatar name="轩轩"/>
            <span>xxxxx</span>
          </div>
          <div class="item-icon">
            <el-icon
              size={20}
              color="#6698ff"
            >
              <Check />
            </el-icon>
          </div>
        </div>
      </div>
    )
  },
})

export const TreeSelect = defineComponent({
  name: 'MemberTree',
  setup() {
    return () => (
      <div class="fy-body-tree-select">
        <FYTree></FYTree>
      </div>
    )
  },
})
