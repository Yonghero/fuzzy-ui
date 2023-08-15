export function useWebrtc({
  url, id, emit, config = {},
}) {
  const video = document.getElementById(id)

  // eslint-disable-next-line no-undef
  if (JSWebrtc) {
    // eslint-disable-next-line no-undef
    let player = new JSWebrtc.Player(url, {
      video,
      autoplay: false,
      ...config,
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
        player.pause()
        player.destroy()
        player = null
      },
    }
  }
  return null
}
