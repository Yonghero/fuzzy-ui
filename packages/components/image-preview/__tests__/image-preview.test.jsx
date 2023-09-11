import { mount } from '@vue/test-utils'
import { it, expect, describe } from 'vitest'
import { ElImageViewer } from 'element-plus'
import { nextTick } from 'vue'
import FYImagePreview from '../src/image-preview.vue'

describe('FYImagePreview', async () => {
  it('open close', async () => {
    const wrapper = mount({
      components: {
        FYImagePreview,
      },
      data: () => ({
        list: [
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        ],
        visible: false,
      }),
      template: `
      <FYImagePreview
        v-model:visible="visible"
        :url-list="list"
        :teleported="false"
      >
        <button data-test="button" @click="open">点击我预览</button>
      </FYImagePreview>
    `,
      methods: {
        open() {
          this.visible = true
        },
      },
    }, {
      global: {
        stubs: {
          ElImageViewer,
        },
      },
    })

    await nextTick()
    await nextTick()
    const button = wrapper.find('[data-test="button"]')
    await button.trigger('click')
    await nextTick()
    await nextTick()

    const viewer = wrapper.find('.el-image-viewer__wrapper')
    expect(viewer.exists()).toBe(true)
    expect(wrapper.emitted('close')).toBeUndefined()
  })
})
