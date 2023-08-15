<script setup>
import { FYVideoPlayer } from '@hitotek/fuzzy-ui-components'
import { ref } from 'vue'

const player = ref()

function play() {
  player.value.player.play()
}

function pause() {
  player.value.player.pause()
}

const idx = ref(0)

function next() {
  idx.value = idx.value === 0 ? 1 : 0
}

const videoList = [
  // 'http://localhost:5178/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
  // 'http://localhost:5178/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
  'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4']
</script>

<template>
  <div style="margin: 1rem">
    <FYButton @click="play">
      start
    </FYButton>
    <FYButton @click="pause">
      pause
    </FYButton>

    <FYButton @click="next">
      next video
    </FYButton>

    <FYVideoPlayer
      :id="idx"
      ref="player"
      autoplay
      style="width: 400px;height: 235px;margin-top: 10px;"
      streamType="h5"
      :config="{}"
      :url="videoList[idx]"
    />
  </div>
</template>
