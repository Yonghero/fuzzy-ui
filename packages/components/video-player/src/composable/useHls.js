import Hls from 'hls.js'

export function useHls({
  url, id, emit, config = {},
}) {
  if (Hls.isSupported()) {
    let video = document.getElementById(id)
    const hls = new Hls({ autoStartLoad: true, ...config })

    hls.attachMedia(video)
    hls.loadSource(url)

    return {
      pause() {
        emit('pause', video)
        video.pause()
      },
      destory() {
        emit('destory', video)
        video.pause()
        video.destroy()
        video = null
      },
      play() {
        emit('play', video)
        video.play()
      },
    }
  }

  return null
}
