function insertScript() {
  return new Promise((resolve) => {
    const script = document.createElement('script')

    script.type = 'text/javascript'
    script.async = false
    script.src = 'http://api.tianditu.gov.cn/api?v=4.0&tk=137143013bf23432a01c74db2c7741c1'
    document.head.appendChild(script)

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
export async function TMapRenderer(domId, defaultLatlng, updateLatlngCall) {
  // 真实环境中提前加载 此步骤仅为测试提供
  await insertScript()

  const { T } = window

  let marker

  const map = new T.Map(domId, {
    projection: 'EPSG:4326',
  })

  map.centerAndZoom(new T.LngLat(116.40769, 39.89945), 10)

  if (defaultLatlng) {
    marker = new T.Marker(new T.LngLat(defaultLatlng.lng, defaultLatlng.lat))
    map.addOverLay(marker)
  }

  map.addEventListener('click', (e) => {
    if (marker) {
      map.removeOverLay(marker)
    }
    setTimeout(() => {
      marker = new T.Marker(new T.LngLat(e.lnglat.getLng(), e.lnglat.getLat()))
      map.addOverLay(marker)
      updateLatlngCall({ lat: e.lnglat.getLat(), lng: e.lnglat.getLng() })
    })
  })
}
