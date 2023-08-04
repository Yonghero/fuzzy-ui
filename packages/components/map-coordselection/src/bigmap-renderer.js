import { ref } from 'vue'

function insertScript() {
  return new Promise((resolve) => {
    const script = document.createElement('script')

    script.type = 'text/javascript'
    script.async = false
    script.src = 'http://www.bigemap.com:9000/bigemap.js/v2.1.0/bigemap.js'
    document.head.appendChild(script)

    const link = document.createElement('link')
    link.href = 'http://www.bigemap.com:9000/bigemap.js/v2.1.0/bigemap.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    script.onload = () => {
      resolve()
    }
  })
}

/**
 *
 * @param {string} domId 地图dom容器
 * @param {object} defaultLatlng 回显的经纬度
 * @param {function} updateLatlngCall 经纬度更新触发的事件
 * @returns
 */
export async function BigMapRenderer(domId, defaultLatlng, updateLatlngCall) {
  // 真实环境中提前加载 此步骤仅为测试提供
  await insertScript()

  const { BM } = window

  BM.Config.HTTP_URL = 'http://www.bigemap.com:9000'

  const map = BM.map(domId, 'bigemap.zhongkexingtu', {
    center: [0, 0],
    zoom: 10,
    zoomControl: false,
  })

  let marker = null
  const latlng = ref(defaultLatlng)

  if (defaultLatlng) {
    marker = BM.marker(defaultLatlng).addTo(map)
  }

  map.on('click', (e) => {
    if (marker) {
      marker.remove()
    }
    marker = BM.marker(e.latlng).addTo(map)
    latlng.value = e.latlng
    updateLatlngCall(e.latlng)
  })
}
