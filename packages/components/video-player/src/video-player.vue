<script setup lang="jsx">
import { generateUUID } from '@hitotek/fuzzy-ui-utils'
import {
  onMounted, watchEffect, ref, onBeforeUnmount,
} from 'vue'
import { useFlv } from './composable/useFlv'
import { useWebrtc } from './composable/useWebrtc'
import { useVideojs } from './composable/useVideojs'
import { useHls } from './composable/useHls'

defineOptions({
  name: 'FYVideoPlayer',
})

const props = defineProps({
  // 流格式类型
  streamType: {
    type: String,
    validator: (value) => ['flv', 'webrtc', 'h5', 'hls'].includes(value),
    default: 'h5',
  },
  url: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: () => `player${generateUUID()}`,
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
  config: {
    type: Object,
    default: () => ({}),
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['ready', 'play', 'pause', 'destory'])

// 播放 停止播放 播放器配置扩展
const player = ref()
const playerContainer = ref()

const playerHooks = {
  flv: useFlv,
  webrtc: useWebrtc,
  h5: useVideojs,
  hls: useHls,
}

// 初始化播放器
function initPlayer() {
  player.value = playerHooks[props.streamType]({
    url: props.url, id: props.id, emit, config: props.config,
  })

  if (player.value && props.autoplay) {
    player.value.play()
  }
}

// 销毁播放器
function destoryPlayer() {
  if (player.value) {
    player.value.destory()
    player.value = null
    playerContainer.value.innerHTML = ''
  }
}

function createVideoEle() {
  const video = document.createElement('video')
  video.id = props.id
  video.classList = props.streamType === 'h5' ? 'video-js' : ''
  video.autoplay = props.autoplay
  video.muted = true
  video.src = props.url

  playerContainer.value.appendChild(video)
}

onMounted(() => {
  watchEffect(() => {
    destoryPlayer()
    if (props.url) {
      createVideoEle()
      initPlayer()
    }
  })
})

onBeforeUnmount(() => {
  destoryPlayer()
})

defineExpose({
  player,
})

// init here
</script>

<template>
  <div
    class="fy-video-player-wrap"
    :width="width"
    :height="height"
  >
    <div
      id="player-container"
      ref="playerContainer"
      class="player-container h-full w-full object-fill"
    >
      <!-- <video
        :id="props.id"
        :class="[streamType === 'h5' ? 'video-js' : '']"
        :autoplay="props.autoplay"
        muted
        :src="props.url"
      /> -->
    </div>
  </div>
</template>

<style lang="scss">
@use "../../../theme-chalk/src/video-player/video-player.scss";
</style>
