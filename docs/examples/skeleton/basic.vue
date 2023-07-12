<template>
  <div style="margin: 20px">
    <div class="mb-4">
      <p>模板 type === 1 || type === '1'</p>
      <FYSkeleton type="1" />
      <p>模板 type === 2 || type === '2'</p>
      <FYSkeleton type="2" />
      <p>模板 type === 3 || type === '3'</p>
      <FYSkeleton type="3" />
      <p>控制骨架屏显示与否</p>
      <FYSkeleton
        :loading="loading"
        type="1"
        animated
        :throttle="500"
      >
        <div>我是真正的内容</div>
      </FYSkeleton>
      <el-button @click="changeShow">
        切换显示
      </el-button>
      <p>原生el-skeleton用法</p>
      <FYSkeleton
        :loading="loading2"
      >
        <template #default>
          <div>我是真正的内容</div>
        </template>
        <template #template>
          <el-skeleton-item
            variant="image"
            style="width: 240px; height: 240px"
          />
          <div style="padding: 14px">
            <el-skeleton-item
              variant="h3"
              style="width: 50%"
            />
            <div
              style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
            >
              <el-skeleton-item
                variant="text"
                style="margin-right: 16px"
              />
              <el-skeleton-item
                variant="text"
                style="width: 30%"
              />
            </div>
          </div>
        </template>
      </FYSkeleton>
      <el-button @click="changeShow2">
        切换显示
      </el-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const loading = ref(false)
const loading2 = ref(false)
const changeShow = () => {
  loading.value = !loading.value
}
const changeShow2 = () => {
  loading2.value = !loading2.value
}

</script>
<style>
.mb-4 {
  margin-bottom: 20px;
}

</style>
