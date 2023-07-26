<script setup>

defineProps({
  tmplItem: {
    type: Object,
    default: () => {},
  },
})

const emits = defineEmits(['select'])

function onClick(item) {
  console.log('click', item)
  emits('select', item)
}
</script>

<template>
  <!-- 有子菜单 -->
  <el-sub-menu
    v-if="tmplItem?.children?.length"
    :teleported="false"
    @click="onClick(tmplItem)"
  >
    <template #title>
      <div
        v-if="!tmplItem.render"
        class="fy-menu-item-1"
      >
        <component
          :is="tmplItem.icon"
          class="h-5 w-5"
        />
        {{ tmplItem.label }}
      </div>
      <div
        v-else
        class="fy-menu-item-1"
      >
        <component
          :is="tmpl.render"
          :tmplItem="tmpl"
        />
      </div>
    </template>
    <MenuItem
      v-for="item in tmplItem.children"
      :key="item.value"
      :tmplItem="item"
      :index="item.value"
    />
  </el-sub-menu>
  <!-- 无子菜单 -->
  <el-menu-item
    v-else
    :teleported="false"
    :index="tmplItem.value"
    class="fy-menu-item-2"
    @click="onClick(tmplItem)"
  >
    <component
      :is="tmplItem.render"
      v-if="tmplItem.render"
      :tmplItem="tmplItem"
    />

    <template v-else>
      <component
        :is="tmplItem.icon"
        class="h-5 w-5"
      />

      {{ tmplItem.label }}
    </template>
  </el-menu-item>
</template>
