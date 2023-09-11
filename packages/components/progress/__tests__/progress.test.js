import { mount } from '@vue/test-utils'
import { it, expect, describe } from 'vitest'
import Progress from '../src/progress.vue'

describe('进度条组件测试', () => {
  const value = 60

  it('测试进度条的点击事件', () => {
    const wrapper = mount(Progress, {
      props: {
        value,
      },
    })

    // 触发第一次点击事件
    wrapper.find('.progress-bar').trigger('click')

    // 断言点击事件被触发一次
    expect(wrapper.emitted('click')).toHaveLength(1)
    // 并且断言触发事件抛出的值
    expect(wrapper.emitted('click')[0][0]).toEqual(value)

    // 触发第二次点击事件
    wrapper.find('.progress-bar').trigger('click')

    // 断言事件被触发两次
    expect(wrapper.emitted('click')).toHaveLength(2)
  })

  it('bothway属性测试', async () => {
    const wrapper = mount(Progress, {
      props: {
        value,
      },
    })

    // 未开启bothway属性 以下dom不存在
    expect(wrapper.find('.progress-bar-inner-right').exists()).toBe(false)

    // 开启bothway属性
    await wrapper.setProps({ bothway: true })

    // 以下dom存在
    expect(wrapper.find('.progress-bar-inner-right').exists()).toBe(true)
  })

  it('传入进度条的数据,检测进度条dom的css宽度值', async () => {
    const wrapper = mount(Progress, {
      props: {
        value,
      },
    })

    const barWidth = await wrapper.find('.progress-bar-inner').element.style._values.width
    expect(barWidth).toBe(`${value}%`)

    const anchorWidth = await wrapper.find('.progress-bar-inner-anchor').element.style._values.width
    expect(anchorWidth).toBe(`${value + 4}%`)
  })
})
