<script setup>

/**
 * @author younghero
 * @Date 2023-8-15
 * @description 文件预览
 */

import VueOfficeExcel from '@vue-office/excel'
import '@vue-office/excel/lib/index.css'

import VueOfficeDocx from '@vue-office/docx'
import '@vue-office/docx/lib/index.css'

import VueOfficePdf from '@vue-office/pdf'
import { computed, useSlots } from 'vue'

import { FYButton } from '../../button'

defineOptions({
  name: 'FYFilePreview',
})

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
    validator: (value) => ['excel', 'word', 'pdf'].includes(value),
  },
  height: {
    type: String,
    default: '600px',
  },
  width: {
    type: String,
    default: '70%',
  },
  src: {
    type: String,
    default: 'https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx',
  },
})

const emits = defineEmits(['update:visible'])

const type2Renderer = {
  excel: VueOfficeExcel,
  word: VueOfficeDocx,
  pdf: VueOfficePdf,
}

const dialogVisible = computed({
  get() {
    return props.visible
  },
  set(value) {
    emits('update:visible', value)
  },
})

const hasHeaderSlot = useSlots()?.header

const fileType = computed(() => {
  if (props.type) return props.type
  if (props.src) {
    const suffix = props.src.match(/\.([^.]+)$/)[1]

    if (suffix === 'docx') return 'word'
    if (suffix === 'pdf') return 'pdf'
    return 'excel'
  }
  return 'word'
})

const title = computed(() => {
  if (props.title) return props.title
  if (fileType.value === 'excel') {
    return 'excel文件预览'
  }
  if (fileType.value === 'pdf') {
    return 'pdf文件预览'
  }

  return 'word文件预览'
})

const FileRenderer = computed(() => type2Renderer[fileType.value])

</script>

<template>
  <div class="fy-file-preview-wrap">
    <el-dialog
      v-model="dialogVisible"
      destroy-on-close
      top="5vh"
      width="70%"
      style="{
        width: width;
      }"
    >
      <template #header>
        <slot name="header" />
        <span
          v-if="hasHeaderSlot"
        > {{ title }}</span>
      </template>
      <div
        class="fy-file-preview-content"
        :style="{
          height: height
        }"
      >
        <component
          :is="FileRenderer"
          :src="src"
          style="width: 100%; height: 100%;"
          v-bind="$attrs"
        />
      </div>
      <template #footer>
        <span class="dialog-footer">
          <FYButton
            type="primary"
            @click="dialogVisible = false"
          >
            确定
          </FYButton>
        </span>
      </template>
    </el-dialog>
    <div
      class="slot-wrap"
      @click="dialogVisible = true"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/file-preview/file-preview.scss";
</style>
