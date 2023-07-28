<script setup>

defineProps({
  tmplItem: {
    type: Object,
    default: () => ({ label: '-' }),
  },
  itemModel: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div
    class="fy-action-menu-item"
    :class="{
      'action-menu-item--disabled': tmplItem.disabled
    }"
    @click="tmplItem.onClick(itemModel)"
  >
    <div
      class="item-left"
    >
      <template v-if="!tmplItem.render">
        <div
          v-if="tmplItem.icon"
          class="menuitemicon"
        >
          <component
            :is="tmplItem.icon"
          />
        </div>
        <span class="menuitemname">{{ tmplItem.label }}</span>
      </template>

      <component
        :is="tmplItem.render"
        v-else
      />
    </div>

    <div class="item-left">
      <slot name="sideRender" />
    </div>
  </div>
</template>
