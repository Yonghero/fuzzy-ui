export const blur = {
  mounted(el) {
    console.log('el: ', el)
    el.addEventListener('focus', () => {
      el.blur()
    })
  },
}
