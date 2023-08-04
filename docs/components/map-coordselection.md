---
layout: doc
---

# MapCoordselection

## 基本使用

`v-model` 绑定值为坐标的经纬度类型为Object **{lat: string, lng: string }**

`v-model:visible` 绑定值为控制标选地图点位弹窗显示的Boolean值

传递一个默认插槽 点击插槽内组件自动打开地图弹窗

核心为传递不同地图的 `renderer` 来做适配

内置实现 `bigemap renderer` `天地图renderer`
注意的是内置实现的并不能完全复制粘贴使用 内部服务地址等实例化的内容需要开发者自行替换

## bigemap的示例

:::demo
map-coordselection/BigMap
:::


bigemap renderer实现
```js
/**
 *
 * @param {string} domId 地图dom容器
 * @param {object} defaultLatlng 回显的经纬度
 * @param {function} updateLatlngCall 经纬度更新触发的事件
 * @returns
 */
export async function BigMapRenderer(domId, defaultLatlng, updateLatlngCall) {

  // 确保你的项目内已经加载bigemap.js
  const { BM } = window

  BM.Config.HTTP_URL = 'http://www.bigemap.com:9000'

  const map = BM.map(domId, 'bigemap.zhongkexingtu', {
    center: [0, 0],
    zoom: 10,
    zoomControl: false,
  })

  let marker = null

  if (defaultLatlng) {
    marker = BM.marker(defaultLatlng).addTo(map)
  }

  map.on('click', (e) => {
    if (marker) {
      marker.remove()
    }
    marker = BM.marker(e.latlng).addTo(map)

    updateLatlngCall(e.latlng)
  })
}
```

## 天地图的示例

:::demo
map-coordselection/TMap
:::


天地图renderer实现
```js
/**
 *
 * @param {string} domId 地图dom容器
 * @param {object} defaultLatlng 回显的经纬度
 * @param {function} updateLatlngCall 经纬度更新触发的事件
 * @returns
 */
export async function TMapRenderer(domId, defaultLatlng, updateLatlngCall) {

  // 确保已提前加载天地图
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

```