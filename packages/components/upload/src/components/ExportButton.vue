<script setup>
import { inject } from 'vue'

const config = inject('config')

const handleExport = (url, fileName) => {
  try {
    const element = document.createElement('a')
    element.href = url
    element.download = fileName
    const a = document.body.appendChild(element)
    a.click()
    document.body.removeChild(element)
  } catch (e) {
    console.log(e, '下载失败')
  }
}

</script>

<template>
  <FYButton
    type="primary"
    class="upload-btn"
    @click="handleExport(config.url, config.fileName)"
  >
    <span>
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- eslint-disable-next-line -->
        <g id="&#229;&#175;&#188;&#229;&#133;&#165; 1">
          <path
            id="Vector"
            d="M6.24095 10.3808C6.24095 11.2224 6.39171 12.0378 6.66578 12.7874C7.66619 9.98626 10.3248 7.98737 13.4768 7.98737V9.18409C13.4768 9.64435 13.7372 10.052 14.1483 10.2624C14.3128 10.3413 14.5046 10.3939 14.6828 10.3939C14.9432 10.3939 15.1898 10.315 15.4091 10.1572L20.233 6.55394C20.5345 6.33038 20.7126 5.9753 20.7126 5.59395C20.7126 5.21259 20.5345 4.85751 20.233 4.63393L15.4091 1.0175C15.2035 0.8597 14.9432 0.780792 14.6828 0.780792C14.5046 0.780792 14.3128 0.820238 14.1483 0.912294C13.7372 1.10956 13.4768 1.53038 13.4768 1.99066V3.18738C9.48885 3.17421 6.24095 6.40927 6.24095 10.3808Z"
            fill="white"
          />
          <path
            id="Vector_2"
            d="M17.992 10.2107C17.5124 10.2107 17.115 10.5921 17.115 11.0523V12.0649C17.115 13.8403 17.0464 15.2606 13.6067 15.2606H6.59007C3.04067 15.2606 3.08179 13.7482 3.08179 11.894V7.68576C2.8351 5.04246 4.13701 4.46384 5.713 4.34547H5.76781C6.24747 4.34547 6.64488 3.96412 6.64488 3.50383C6.64488 3.04357 6.24747 2.64904 5.76781 2.64904H5.713V2.63589H4.83593C2.90363 2.63589 1.32764 4.14823 1.32764 6.00246V13.5773C1.32764 15.4315 2.90363 16.9438 4.83591 16.9438H15.3471C17.2794 16.9438 18.8554 15.4315 18.8554 13.5773V11.0523C18.8691 10.592 18.4717 10.2107 17.992 10.2107Z"
            fill="white"
          />
        </g>
      </svg>

    </span>
    导出
  </FYButton>
</template>

<style scoped></style>
