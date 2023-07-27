<script setup>
import { FYForm } from '@hitotek/fuzzy-ui-components'
import {
  ref, onMounted,
} from 'vue'

const template = ref([
  {
    label: '姓名',
    value: 'input',
    desc: '描述1',
  },
  {
    label: '性别',
    value: 'input2',
    desc: '描述2',
  },
  {
    label: '年龄',
    value: 'input3',
    desc: '描述3',
  },
  {
    label: '祖籍',
    value: 'textarea',
    desc: '描述4',
  },
])
const templateRead = ref([
  {
    label: '姓名',
    value: 'input',
    desc: '描述1',
  },
  {
    label: '性别',
    value: 'input2',
    desc: '描述2',
  },
  {
    label: '年龄',
    value: 'input3',
    desc: '描述3',
  },
  {
    label: '个人介绍',
    value: 'textarea',
    desc: '描述4',
  },
  {
    label: '工作技能',
    value: 'textarea2',
    desc: '描述5',
  },
  {
    label: '工作经历',
    value: 'textarea3',
    desc: '描述6',
  },
  {
    label: '期望待遇',
    value: 'textarea4',
    desc: '描述7',
  },
  {
    label: '工作规划',
    value: 'textarea5',
    desc: '描述8',
  },
])
const modelValue = ref({
  input: '李恩伟',
  input2: '男',
  input3: '18',
  textarea: '李恩伟，日本漫画《咒术回战》及其衍生作品中的主要角色。现代最强的咒术师，东京都立咒术高等专门学校的一年级班主任。特级咒术师，出生于御三家的李家，为李家的实质的代行。',
  textarea2: `李家祖传的特殊性状，几百年一例，是拥有特殊能力的眼睛。
    360度远距离视觉,背后也能看到,隔着很远也能看到。
    直接分辨对方是否为术师。
    看穿对方的术式。
    可以对咒力轨迹进行直接追踪/预测。
    可以让持有者进行精细的咒力操作。（使用无下限术式的前置要求）
    阻挡视线也不会妨碍视觉。`,
  textarea3: '1989年12月7日，天生拥有六眼，不可比拟的力量足以颠覆整个日本咒术界的【最强】李恩伟诞生。他的出生改变了世界平衡，导致现代诅咒随之增强。',
  textarea4: '朝九晚五，离家近，钱多事少',
  textarea5: '打完这仗，回家结婚',
})
const modelValue2 = ref({
  input: '李恩伟',
  input2: '男',
  input3: '18',
  textarea: '浙江',
})
</script>

<template>
  <div style="margin: 1rem">
    <p>配置项较多时</p>
    <FYForm
      ref="myForm"
      :template="templateRead"
      :modelValue="modelValue"
      businessType="read"
    />
    <br>
    <p>配置项较少时</p>
    <FYForm
      ref="myForm"
      :template="template"
      :modelValue="modelValue2"
      businessType="read"
    />
  </div>
</template>
