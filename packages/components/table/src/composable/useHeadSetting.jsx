import { defineComponent } from 'vue'
import { Setting } from '@element-plus/icons-vue'

export function useHeadSetting() {
  const slots = {
    header: () => (
      <div style="
        display: flex;
        aligin-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
      ">
         <el-icon size="20"><Setting /></el-icon>
      </div>
    ),
  }
  return {
    SettingColumn: defineComponent(({
      setup(_, { attrs }) {
        return () => (
          <el-table-column
            v-slots={slots}
            width="5"
            align="center"
            prop="fy-setting"
            {...attrs}
        />
        )
      },
    })),
  }
}
