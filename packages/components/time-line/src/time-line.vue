<script setup>

defineOptions({
  name: 'FYTimeLine',
})

// init here
</script>

<template>
  <div class="timeline-wrap">
    <div class="item">
      时间点2021
    </div>
    <div class="item">
      时间点2022
    </div>
    <div class="item">
      时间点2023
    </div>
    <div class="item">
      时间点2024
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timeline-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  height: 300px;
  position: relative;

  &::before{
    content: '';
    width: 2px;
    background: #ccc;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
  }

  .item {
    width: 50%;
    height: 50px;
    text-align: right;
    position: relative;
    &:nth-of-type(even) {
      align-self: flex-end;
      text-align: left;
      padding-left: 1rem;
      &::before{
        content: '';
        position: absolute;
        left: -2%;
        top: 8%;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: #ccc;
      }
    }
    &:nth-of-type(odd) {
      padding-right: 1rem;
    }
  }
}
</style>
