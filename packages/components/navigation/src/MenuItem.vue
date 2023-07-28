<script setup>

defineProps({
  tmplItem: {
    type: Object,
    default: () => {},
  },
  collapse: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['select'])

function onClick(item) {
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
        <span v-if="!collapse">{{ tmplItem.label }}</span>
      </div>
      <div
        v-else
        class="fy-menu-item-1"
      >
        <component
          :is="tmpl.render"
          v-if="!collapse"
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
      v-if="tmplItem.render && !collapse"
      :tmplItem="tmplItem"
    />

    <template v-else>
      <component
        :is="tmplItem.icon"
        class="h-5 w-5"
      />
      <span v-if="!collapse">{{ tmplItem.label }}</span>
    </template>
  </el-menu-item>
</template>
