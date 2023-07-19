<script setup>

defineProps({
  tmplItem: {
    type: Object,
    default: () => ({ label: '-' }),
  },
})
</script>

<template>
  <div
    class="fy-action-menu-item"
    :class="{
      'action-menu-item--disabled': tmplItem.disabled
    }"
  >
    <div
      class="item-left"
      @click="tmplItem.onClick"
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
