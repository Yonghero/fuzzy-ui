import mpegts from 'mpegts.js'

export function useFlv({
  url, id, emit, config = {},
}) {
  if (mpegts.getFeatureList().mseLivePlayback) {
    const video = document.getElementById(id)

    let player = mpegts.createPlayer({
      type: 'flv',
      url,
      isLive: true,
      cors: true,
      enableWorker: true,
      enableStashBuffer: false,
      autoCleanupSourceBuffer: true,
      ...config,
    })

    player.attachMediaElement(video)
    player.load()

    return {
      pause() {
        emit('pause', player)
        player.pause()
      },
      destory() {
        emit('destory', player)
        player.pause()
        player.unload()
        player.detachMediaElement()
        player.destroy()
        player = null
      },
      play() {
        emit('play', player)
        player.play()
      },
    }
  }

  return null
}
