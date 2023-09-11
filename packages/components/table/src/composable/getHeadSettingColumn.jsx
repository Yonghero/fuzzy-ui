import { defineComponent } from 'vue'
import { Setting } from '@element-plus/icons-vue'

export function getHeadSettingColumn({ onClick }) {
  const slots = {
    header: () => (
      <div
        data-test="head-setting"
        style="
          display: flex;
          aligin-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          cursor: pointer;
          "
        onClick={onClick}
      >
         <el-icon size="20"><Setting /></el-icon>
      </div>
    ),
  }
  return defineComponent(({
    setup(_, { attrs }) {
      return () => (
        <el-table-column
          v-slots={slots}
          width="55"
          align="center"
          prop="fy-setting"
          {...attrs}
          fixed="right"
      />
      )
    },
  }))
}
