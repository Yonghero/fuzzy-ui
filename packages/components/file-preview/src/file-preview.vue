<script setup>

defineOptions({
  name: 'FYFilePreview',
})

const props = defineProps({})

function preview() {
  fetch('./test.docx', {
    method: 'GET',
  })
    .then((response) => response.blob())
    .then((blob) => {
      console.log('blob: ', blob)
      // let fileType = ''

      // if (item.fileType === '.jpg' || item.fileType === '.png' || item.fileType === '.png') {
      //   fileType = `image/${item.fileType.replace('.', '')}`
      // } else if (item.fileType === '.pdf') {
      //   fileType = 'application/pdf'
      // } else if (item.fileType === '.docx' || item.fileType === '.doc') {
      //   fileType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      // } else if (item.fileType === '.xlsx' || item.fileType === '.xls') {
      //   fileType = 'application/vnd.ms-excel'
      // } else {
      //   fileType = 'application/pdf'
      // }

      // const fileType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

      const href = URL.createObjectURL(blob)
      const downloadLink = document.createElement('a')
      downloadLink.href = href
      downloadLink.download = 'file.docx'
      downloadLink.click()
    })
    .catch((error) => {
      console.error(error)
    })
}

// init here
</script>

<template>
  <div class="fy-file-preview-wrap">
    <FYButton @click="preview">
      click
    </FYButton>
  </div>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/file-preview/file-preview.scss";
</style>
