<template>
  <div style="margin: 1rem">
    <div style="margin-bottom: 20px;">
      <el-radio-group
        v-model="small"
        class="mr-4"
      >
        <el-radio-button :label="false">
          default
        </el-radio-button>
        <el-radio-button :label="true">
          small
        </el-radio-button>
      </el-radio-group>
      <div style="margin: 20px 0;">
        background (是否有背景色):
        <el-switch
          v-model="background"
          style="margin-right: 20px;"
        />
      </div>
      <div class="ml-4">
        disabled (禁用): <el-switch
          v-model="disabled"
          class="ml-2"
        />
      </div>
    </div>

    <hr style="margin: 10px">

    <div class="demo-pagination-block">
      <div class="demonstration">
        Total item count
      </div>
      <FYPagination
        v-model:current-page="currentPage1"
        :page-size="100"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div class="demo-pagination-block">
      <div class="demonstration">
        Change page size
      </div>
      <FYPagination
        v-model:current-page="currentPage2"
        v-model:page-size="pageSize2"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="sizes, prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div class="demo-pagination-block">
      <div class="demonstration">
        Jump to
      </div>
      <FYPagination
        v-model:current-page="currentPage3"
        v-model:page-size="pageSize3"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div class="demo-pagination-block">
      <div class="demonstration">
        All combined
      </div>
      <FYPagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script  setup>
import { ref } from 'vue'
import { FYPagination } from '@hitotek/fuzzy-ui-components'

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<style>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

.vp-doc li + li {
  margin-top: 0!important;
}
</style>
