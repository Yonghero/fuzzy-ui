<script setup>
import { FYTree } from '@hitotek/fuzzy-ui-components'

const config = {
  dataSource: [
    {
      id: 1,
      label: 'Level one 1',
      allowDrag: false,
      children: [
        {
          label: 'Level two 1-1',
          id: 2,
          children: [
            {
              id: 3,
              label: 'Level three 1-1-1',
              notLevelOne: true,
            },
          ],
        },
      ],
    },
    {
      label: 'Level one 2',
      id: 4,
      levelOne: true,
      children: [
        {
          id: 5,
          label: 'Level two 2-1',
          children: [
            {
              id: 6,
              label: 'Level three 2-1-1',
              children: [
                {
                  id: 14,
                  label: 'Level three 2-1-1-1',
                },
                {
                  id: 15,
                  label: 'Level three 2-1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 7,
          label: 'Level two 2-2',
          children: [
            {
              id: 8,
              label: 'Level three 2-2-1',
            },
          ],
        },
      ],
    },
    {
      label: 'Level one 3',
      id: 9,
      children: [
        {
          forbid: [1, 4],
          label: 'Level two 3-1',
          id: 10,
          children: [
            {
              id: 11,
              label: 'Level three 3-1-1',
            },
          ],
        },
        {
          id: 12,
          label: 'Level two 3-2',
          children: [
            {
              id: 13,
              label: 'Level three 3-2-1',
            },
          ],
        },
      ],
    },
  ],
  editable: true,
  ifDialog: true,
  dialogTmpl: [
    {
      type: 'input',
      label: '模板名称',
      value: 'label',
      limit: 10,
      require: true,
      rules: [{
        min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur',
      }],
    },
    {
      type: 'select',
      label: '负责人',
      value: 'person',
      options: [
        {
          value: 'value1',
          label: '李恩伟',
        },
        {
          value: 'value2',
          label: '藏炼鑫',
        },
      ],
    },
    {
      type: 'cascader',
      label: '组织',
      value: 'organization',
      options: [
        {
          value: 'guide',
          label: '研发部',
          children: [
            {
              value: 'disciplines',
              label: '前端',
              children: [
                {
                  value: 'consistency',
                  label: '架构组',
                },
                {
                  value: 'feedback',
                  label: '业务组',
                },
              ],
            },
            {
              value: 'navigation',
              label: '后端组',
              children: [
                {
                  value: 'side nav',
                  label: 'AI组',
                },
                {
                  value: 'top nav',
                  label: 'Java组',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
</script>

<template>
  <div style="margin: 1rem;">
    <FYTree :config="config" />
  </div>
</template>
