import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export function useVideojs({
  url, id, emit, config = {},
}) {
  let player = videojs(document.getElementById(id), {
    language: 'zh-CN', // 设置语言
    controls: false, // 是否显示控制条
    preload: 'auto', // 预加载
    fluid: true, // 自适应宽高
    src: url, // 要嵌入的视频源的源 URL
    autoplay: false,
    control: true,
    bigPlayButton: false,
    textTrackDisplay: false,
    posterImage: false,
    errorDisplay: false,
    controlBar: true,
    ...config,
  }, () => {
    emit('ready', this)
  })

  return {
    play() {
      emit('play', player)
      player.play()
    },
    pause() {
      emit('pause', player)
      player.pause()
    },
    destory() {
      emit('destory', player)
      player.dispose()
      player = null
    },
  }
}
