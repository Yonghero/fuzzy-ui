<script setup>
import { onMounted, ref } from 'vue'

defineOptions({
  name: 'FYSkeleton',
})

const props = defineProps({
  type: {
    type: [Number, String],
    default: '',
  },
})

const circleWrap = ref(null)
const computeRadius = ref('')
const computeFourRadius = ref('')
onMounted(() => {
  // 对圆形骨架进行长宽修正
  const target = document.querySelector('.circle-wrap')
  const { width, height } = target.getBoundingClientRect()
  computeRadius.value = `${width < height ? width : height}px`
  const targetFour = document.querySelector('.circle-four-wrap')
  const { width: width2, height: height2 } = targetFour.getBoundingClientRect()
  computeFourRadius.value = `${width2 < height2 ? width2 : height2}px`
})
// init here
</script>

<template>
  <div class="fy-skeleton-wrap">
    <div v-if="parseInt(props.type) === 1">
      <el-skeleton
        style="width: 100%;text-align: left;"
        v-bind="$attrs"
      >
        <template #template>
          <el-skeleton-item
            variant="p"
            style="width: 20%;height: 20px;"
          />
          <div style="padding: 10px 0 5px 0px;">
            <el-skeleton-item
              variant="p"
              style="width: 16%;height: 18px;"
            />
          </div>
          <div style="padding: 0px 0px 10px 0;">
            <el-skeleton-item
              variant="p"
              style="width: 100%;height: 30px;"
            />
          </div>
          <div class="fy-skeleton-section">
            <div class="fy-skeleton-section-item">
              <el-skeleton-item
                variant="p"
                style="width:32%;height: 18px;"
              />
              <div style="padding: 0px 0px 10px 0;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
            <div class="fy-skeleton-section-item">
              <el-skeleton-item
                variant="p"
                style="width:32%;height: 18px;"
              />
              <div style="padding: 0px 0px 10px 0;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
          </div>
          <div class="fy-skeleton-section">
            <div class="fy-skeleton-section-item">
              <el-skeleton-item
                variant="p"
                style="width:32%;height: 18px;"
              />
              <div style="padding: 0px 0px 10px 0;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
            <div class="fy-skeleton-section-item">
              <el-skeleton-item
                variant="p"
                style="width:32%;height: 18px;"
              />
              <div style="padding: 0px 0px 10px 0;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
          </div>
          <div class="fy-skeleton-section">
            <div class="fy-skeleton-section-item">
              <el-skeleton-item
                variant="p"
                style="width: 32%;height: 18px;"
              />
              <div style="padding: 0px 0px 10px 0;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
            <div class="fy-skeleton-section-item">
              <el-skeleton-item
                variant="p"
                style="width: 32%;height: 18px;"
              />
              <div style="padding: 0px 0px 10px 0;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
          </div>
          <div class="fy-skeleton-section">
            <div class="fy-skeleton-section-item">
              <el-skeleton-item
                variant="p"
                style="width: 32%;height: 18px;"
              />
              <div style="padding: 0px 0px 10px 0;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
            <div class="fy-skeleton-section-item">
              <el-skeleton-item
                variant="p"
                style="width: 32%;height: 18px;"
              />
              <div style="padding: 0px 0px 10px 0;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
          </div>
          <el-skeleton-item
            variant="p"
            style="width: 16%;height: 18px;"
          />
          <div style="padding: 0px 0px 10px 0;">
            <el-skeleton-item
              variant="p"
              style="width: 100%;height: 80px;"
            />
          </div>
        </template>
        <template #default>
          <slot name="default" />
        </template>
      </el-skeleton>
    </div>
    <div v-else-if="parseInt(props.type) === 2">
      <el-skeleton
        style="width: 100%;text-align: left;"
        v-bind="$attrs"
      >
        <template #template>
          <el-skeleton-item
            variant="p"
            style="width: 16%;height: 18px;"
          />
          <div style="padding: 0px 0px 10px 0;">
            <el-skeleton-item
              variant="p"
              style="width: 100%;height: 30px;"
            />
          </div>
          <el-skeleton-item
            variant="p"
            style="width: 16%;height: 18px;"
          />
          <div style="padding: 0px 0px 10px 0;">
            <el-skeleton-item
              variant="p"
              style="width: 100%;height: 30px;"
            />
          </div>
          <el-skeleton-item
            variant="p"
            style="width: 16%;height: 18px;"
          />
          <div style="padding: 0px 0px 10px 0;">
            <el-skeleton-item
              variant="p"
              style="width: 100%;height: 30px;"
            />
          </div>
          <el-skeleton-item
            variant="p"
            style="width: 16%;height: 18px;"
          />
          <div style="padding: 0px 0px 10px 0;">
            <el-skeleton-item
              variant="p"
              style="width: 100%;height: 30px;"
            />
          </div>
          <el-skeleton-item
            variant="p"
            style="width: 16%;height: 18px;"
          />
          <div style="padding: 0px 0px 10px 0;">
            <el-skeleton-item
              variant="p"
              style="width: 100%;height: 30px;"
            />
          </div>
        </template>
        <template #default>
          <slot name="default" />
        </template>
      </el-skeleton>
    </div>
    <div v-else-if="parseInt(props.type) === 3">
      <el-skeleton
        style="width: 100%;text-align: left;"
        v-bind="$attrs"
      >
        <template #template>
          <el-skeleton-item
            variant="p"
            style="width: 20%;height: 20px;"
          />
          <div style="padding: 10px 0 5px 0px;">
            <el-skeleton-item
              variant="p"
              style="width: 100%;height: 40px;"
            />
          </div>
          <div class="fy-skeleton-four-wrap">
            <div class="fy-skeleton-four-first">
              <el-skeleton-item
                variant="p"
                style="width: 33%;height: 25px;"
              />
              <div style="padding: 10px 0 5px 0px;display: flex;">
                <div class="circle-four-wrap">
                  <el-skeleton-item
                    variant="circle"
                    :style="{marginRight: '10px', width: computeFourRadius,height:computeFourRadius}"
                  />
                </div>

                <el-skeleton-item
                  variant="p"
                  style="flex:4;height: 30px;"
                />
              </div>
            </div>
            <div class="fy-skeleton-four">
              <el-skeleton-item
                variant="p"
                style="width: 33%;height: 25px;"
              />
              <div style="padding: 10px 0 5px 0px;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
            <div class="fy-skeleton-four">
              <el-skeleton-item
                variant="p"
                style="width: 33%;height: 25px;"
              />
              <div style="padding: 10px 0 5px 0px;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
            <div class="fy-skeleton-four">
              <el-skeleton-item
                variant="p"
                style="width: 33%;height: 25px;"
              />
              <div style="padding: 10px 0 5px 0px;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
          </div>
          <div class="fy-skeleton-four-vertical">
            <div class="fy-skeleton-four-item">
              <el-skeleton-item
                variant="p"
                style="width: 20%;height: 25px;"
              />
              <div style="padding: 10px 0 5px 0px;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
            <div class="fy-skeleton-four-item">
              <el-skeleton-item
                variant="p"
                style="width: 20%;height: 25px;"
              />
              <div style="padding: 10px 0 5px 0px;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
            <div class="fy-skeleton-four-item">
              <el-skeleton-item
                variant="p"
                style="width: 20%;height: 25px;"
              />
              <div style="padding: 10px 0 5px 0px;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
            <div class="fy-skeleton-four-item">
              <el-skeleton-item
                variant="p"
                style="width: 20%;height: 25px;"
              />
              <div style="padding: 10px 0 5px 0px;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 30px;"
                />
              </div>
            </div>
          </div>
          <el-skeleton-item
            variant="p"
            style="width: 33%;height: 25px;"
          />
          <div style="padding: 10px 0 5px 0px;">
            <el-skeleton-item
              variant="p"
              style="width: 100%;height: 100px;"
            />
          </div>
          <div class="fy-skeleton-circle-left">
            <div
              ref="circleWrap"
              class="circle-wrap"
            >
              <el-skeleton-item
                variant="circle"
                :style="{width: computeRadius,marginRight: '10px',height: computeRadius}"
              />
            </div>
            <div class="fy-skeleton-circle-item">
              <el-skeleton-item
                variant="p"
                :style="{width: '33%',height: computeRadius}"
              />
              <div style="padding: 10px 0 5px 0px;">
                <el-skeleton-item
                  variant="p"
                  style="width: 100%;height: 60px;"
                />
              </div>
            </div>
          </div>
          <el-skeleton-item
            variant="circle"
            :style="{width: computeRadius,height: computeRadius}"
          />
          <div style="padding: 10px 0 5px 0px;">
            <el-skeleton-item
              variant="p"
              style="width: 100%;height: 30px;"
            />
          </div>
        </template>
        <template #default>
          <slot name="default" />
        </template>
      </el-skeleton>
    </div>
    <div v-else>
      <el-skeleton
        style="width: 100%;text-align: left;"
        v-bind="$attrs"
      >
        <template #template>
          <slot name="template" />
        </template>
        <template #default>
          <slot name="default" />
        </template>
      </el-skeleton>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../../../theme-chalk/src/skeleton/skeleton.scss';

</style>
