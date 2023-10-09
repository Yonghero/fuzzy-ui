import { createApp, watch } from 'vue'

/**
 * 注入表头覆盖层
 * @param {*} HeaderRenderer 覆盖层的组件
 * @param {*} valuesMap2Data checkbox 选中的数据
 * @returns
 */
export function useHeadVNode(HeaderRenderer, valuesMap2Data, tableData) {
  let headerVNode = ''
  let ele = ''

  const createHeaderVNode = () => {
    if (headerVNode && ele) return

    const trWrapper = document.querySelector('.fy-table-header-row')
    if (trWrapper) {
      const thWidth = trWrapper.firstChild.getBoundingClientRect().width
      const theadWrapper = trWrapper.parentNode
      const wrapper = document.createElement('div')
      theadWrapper.appendChild(wrapper)
      ele = wrapper
      headerVNode = createApp({
        setup() {
          return () => (
            <div style={
              {
                width: `calc(100% - ${thWidth}px)`,
                display: 'flex',
                height: `${trWrapper.getBoundingClientRect().height}px`,
                position: 'absolute',
                zIndex: 999,
                right: 0,
                top: 0,
              }
            }>
              <HeaderRenderer values={valuesMap2Data.value}/>
            </div>
          )
        },
      })
      headerVNode.mount(wrapper)
    }
  }

  const removeHeaderVNode = () => {
    if (headerVNode) {
      headerVNode.unmount()
    }
    if (ele) {
      ele.remove()
    }

    headerVNode = ''
    ele = ''
  }

  watch(() => valuesMap2Data.value, (data) => {
    if (data.length) {
      createHeaderVNode()
    } else {
      removeHeaderVNode()
    }
  })

  // 表格数据数量有所更新时也移除
  watch(() => tableData.value, () => {
    removeHeaderVNode()
  })

  return {
    createHeaderVNode,
    removeHeaderVNode,
  }
}
