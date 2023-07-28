<script setup>
import { FYTopNavigation } from '@hitotek/fuzzy-ui-components'

</script>

<template>
  <div style="margin: 1rem">
    <FYTopNavigation>
      <template #operation>
        <FYInput style="width:200px;margin-right: 10px;" />
        <span class="avatar-default">李俊</span>
      </template>
    </FYTopNavigation>
  </div>
</template>
