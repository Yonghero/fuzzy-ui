import {flushPromises, mount} from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import {
  ElCheckbox, ElDialog, ElEmpty, ElIcon, ElTable, ElTableColumn,
} from 'element-plus'
import Table from '../src/table.jsx'
import {ref, shallowRef} from "vue";
import {SelectionIndex} from "../src/SelectionIndex";

describe('表格组件测试', () => {
  const template = [
    {
      label: '日期',
      value: 'date',
    },
    {
      label: '姓名',
      value: 'name',
    },
    {
      label: '保留位',
      type: 'limit3',
      value: 'date1',
    },
    {
      label: '地址',
      value: 'address',
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
    'SelectionIndex': SelectionIndex
  }

  it('开启行checkbox选择', async () => {

    const wrapper = mount(Table, {
      global: {
        stubs,
      },
      props: {
        columnSelection: false,
        template,
        data
      },
    })

    expect(wrapper).toBeTruthy()

    await flushPromises()

    // 未开启多选 数量为0
    expect(wrapper.findAll('[data-test="checkbox-all"]')).toHaveLength(0)

    // 开启多选
    await wrapper.setProps({ columnSelection: true })

    // 全选框数量1
    expect(wrapper.findAll('[data-test="checkbox-all"]')).toHaveLength(1)
    // checkbox数量为数据的长度
    expect(wrapper.findAll('[data-test="checkbox-wrap"]')).toHaveLength(data.length)

    // 移入多选框的父级
    const checkboxWrap = wrapper.find('[data-test="checkbox-wrap"]')
    await checkboxWrap.trigger('mouseenter')

    // 找到多选框
    const checkbox = checkboxWrap.find('input[type="checkbox"]')
    expect(checkbox).toBeTruthy()

    // 设置选中状态
    await checkbox.setValue(true)

    // 验证是否选中
    expect(checkboxWrap.find('label').classes()).toContain('is-checked')

  })
})
