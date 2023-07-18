<script setup lang="jsx">
import {
  FYFilterDisplay,
  installFilterDisplayItem,
} from '@hitotek/fuzzy-ui-components'

// 方式一, 导入安装组件工具函数, 传递如下组件配置
installFilterDisplayItem({
  type: 'diySelect',
  renderer(props) {
    return (
      <FYSelect
        placeholder={`请选择${props.label}`}
        {...props}
        v-model={props.model[props.value]}
        placement="bottom-start"
        onChange={
          () => (
            props.onChange
              ? props.onChange({ value: props.model[props.value] })
              : '')
          }
      />
    )
  },
})

// 方式二, 给定自定义类型和自定义render组件
const tmpl = [
  {
    label: '负责人',
    type: 'input',
    value: 'lew',
    defaultValue: '李恩伟',
    onChange({ value }) {
      console.log('🚀 ~ file: basic.vue:11 ~ onChange ~ e:', value)
    },
    render(props) { // 自定义render组件
      return (
        <FYInput
          v-model={props.model[props.value]}
          onChange={
            () => (
              props.onChange
                ? props.onChange({ value: props.model[props.value] })
                : '')
            }
        />
      )
    },
  },
  {
    label: '创建人',
    type: 'diySelect', // 此类型为自定义扩展的组件
    value: 'createperson',
    defaultValue: 2,
    options: [{ label: '李校长', value: 1 }, { label: '王美丽', value: 2 }],
  },
]

</script>

<template>
  <div style="margin: 1rem">
    <div class="demo">
      <FYFilterDisplay :template="tmpl" />
    </div>
  </div>
</template>

<style scope lang="sass">
html:not(.dark)
  --border-color:  #eee

html.dark
  --border-color:  rgb(45 42 42)
.demo
  width: 100%
  padding: 7px 5px
  border-top: 1px solid var(--border-color)
  border-bottom: 1px solid var(--border-color)
</style>
