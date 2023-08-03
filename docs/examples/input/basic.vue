<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <p>圆角</p>
      <FYInput
        v-model="value1"
        round
      />
      <p>前后图标</p>
      <FYInput v-model="value2">
        <template #prefix>
          <img
            src="./icon.png"
            alt=""
            class="prefix-img"
          >
        </template>
        <template #suffix>
          <img
            src="./icon.png"
            alt=""
            class="prefix-img"
          >
        </template>
      </FYInput>
      <p>支持字数限制</p>
      <FYInput
        v-model="value3"
        limit="10"
      />
      <p>支持长文本</p>
      <FYInput
        v-model="value4"
        :textarea="[3,6]"
      />
      <p>支持伸缩</p>
      <FYInput
        v-model="value5"
        flex
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const props = {
  // 圆角
  round: {
    type: Boolean,
    default: false,
  },
  // 占位文字
  placeholder: {
    type: String,
    default: '请输入',
  },
  // 输入限制
  limit: {
    type: [Number, String],
    default: 0,
  },
  type: {
    type: String,
    default: 'text',
  },
  textarea: {
    type: [Array, String, Boolean],
    default: undefined,
  },
  // 是否伸缩
  flex: {
    type: Boolean,
    default: false,
  },
  // 是否有筛选看
  filterList: {
    type: Array,
    default: () => [],
  },
  // 定义value,防止绑定value到原生标签上影响后续v-model的使用
  // eslint-disable-next-line
  value: {
  },
  // 辅助树状结构组件的自动focus功能
  autoFocus: {
    type: [Boolean, String],
    default: false,
  },
}
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')

</script>
<style>
.mb-4 {
  margin-bottom: 20px;
}
.prefix-img {
  width: 20px;
  height: 20px;
}
</style>
