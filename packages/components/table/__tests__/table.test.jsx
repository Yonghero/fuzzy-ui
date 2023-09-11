import { flushPromises, mount } from '@vue/test-utils'
import {
  describe, it, expect,
} from 'vitest'
import {
  ElCheckbox, ElDialog, ElEmpty, ElIcon, ElTable, ElTableColumn,
} from 'element-plus'
import { FYButton } from '@hitotek/fuzzy-ui-components'
import { ClickOutside } from '@hitotek/fuzzy-ui-utils'
import Table from '../src/table.jsx'
import { SelectionIndex } from '../src/SelectionIndex'

describe('FYTable', () => {
  const template = [
    {
      label: '日期',
      value: 'date',
      visible: true,
    },
    {
      label: '姓名',
      value: 'name',
      visible: true,

    },
    {
      label: '保留位',
      type: 'limit3',
      value: 'date1',
      visible: true,
    },
    {
      label: '地址',
      value: 'address',
      visible: true,
    },
  ]

  const data = Array.from({ length: 5 }, (_, idx) => ({
    date: '2016-05-03',
    index: idx + 1,
    name: `${idx}Tom`,
    date1: 2.23,
    address: '浙江高山CNo. 189, Grove St, Los Angeles',
  }))

  const stubs = {
    'el-table': ElTable,
    'el-table-column': ElTableColumn,
    'el-checkbox': ElCheckbox,
    'el-empty': ElEmpty,
    'el-dialog': ElDialog,
    'el-icon': ElIcon,
    SelectionIndex,
    FYButton,
  }

  it('selection', async () => {
    const wrapper = mount(Table, {
      global: {
        stubs,
      },
      props: {
        columnSelection: false,
        template,
        data,
      },
    })

    expect(wrapper).toBeTruthy()

    await flushPromises()

    expect(wrapper.findAll('[data-test="checkbox-all"]')).toHaveLength(0)

    await wrapper.setProps({ columnSelection: true })

    expect(wrapper.findAll('[data-test="checkbox-all"]')).toHaveLength(1)
    expect(wrapper.findAll('[data-test="SelectionIndexWrap"]')).toHaveLength(data.length)

    const checkboxWrap = wrapper.find('[data-test="SelectionIndexWrap"]')
    await checkboxWrap.trigger('mouseenter')

    const checkbox = checkboxWrap.find('input[type="checkbox"]')
    expect(checkbox).toBeTruthy()

    await checkbox.setValue(true)

    expect(checkboxWrap.find('label').classes()).toContain('is-checked')
  })

  it('table index', async () => {
    const wrapper = mount(Table, {
      global: {
        stubs,
      },
      props: {
        columnIndex: true,
        template,
        data,
      },
    })

    await flushPromises()

    expect(wrapper.find('[data-test="SelectionIndexWrap"]').exists()).toBeTruthy()

    await wrapper.setProps({ columnIndex: false })

    expect(wrapper.find('[data-test="SelectionIndexWrap"]').exists()).toBeFalsy()
  })

  it('head setting', async () => {
    const wrapper = mount(Table, {
      global: {
        stubs,
        directives: {
          'click-outside': ClickOutside,
        },
      },
      props: {
        template,
        data,
      },
    })

    await flushPromises()
    // 点击表头设置
    await wrapper.find('[data-test="head-setting"]').trigger('click')

    // 设置对话框弹出
    expect(wrapper.find('.fy-transfer-wrap')).toBeTruthy()
  })

  it('renderer header', async () => {
    let clickCount = 0

    const wrapper = mount(Table, {
      global: {
        stubs,
      },
      props: {
        columnSelection: true,
        template,
        data,
        renderer: {
          header({ values }) {
            expect(values.length).toEqual(clickCount)
            return (
              <div class="renderer-header-wrap">
                已选中 <span style="color: var(--el-color-primary)">{values.length}</span> 项
              </div>
            )
          },
        },
      },
    })

    await flushPromises()

    const checkbox = wrapper.find('.el-checkbox__input')
    await checkbox.trigger('click')
    clickCount++

    expect(wrapper.find('.renderer-header-wrap')).toBeTruthy()
  })

  describe('rendering data is correct', async () => {
    const wrapper = mount(Table, {
      global: {
        stubs,
      },
      props: {
        template,
        data,
      },
    })

    it('table head', async () => {
      await flushPromises()
      const ths = wrapper.findAll('thead th')

      expect(ths.map((node) => node.text()).filter((o) => o)).toEqual([
        '序号',
        '日期',
        '姓名',
        '保留位',
        '地址',
      ])
    })

    it('row length', async () => {
      expect(
        wrapper.findAll('.el-table__body-wrapper tbody tr').length,
      ).toEqual(data.length)
    })
  })
})
