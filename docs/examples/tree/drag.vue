<script setup>
import { FYTree } from '@hitotek/fuzzy-ui-components'

const config = {
  // 开启拖拽
  draggable: true,
  // 树级列表
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
}
</script>

<template>
  <div style="margin: 1rem;">
    <FYTree :config="config" />
  </div>
</template>
