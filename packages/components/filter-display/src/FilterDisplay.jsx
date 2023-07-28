import { tmplProps } from '@hitotek/fuzzy-ui-utils'
import { defineComponent } from 'vue'
import { DisplayItem } from './DisplayItem.jsx'
import '@hitotek/fuzzy-ui-theme-chalk/src/filter-display/filter-display.sass'

/**
 * @author younghero
 * @Date 2023-7-10
 * @description 下拉标签式查询面板
 */

export default defineComponent({
  name: 'FYFilterDisplay',
  components: { DisplayItem },
  props: {
    ...tmplProps,
  },
  setup(props) {
    return () => (
      <div class="fy-filter-display-wrap">
        {
          props.template
            .map((tmpl) => (
              <DisplayItem tmplItem={tmpl} key={tmpl.value}/>
            ))
        }
      </div>
    )
  },
})
