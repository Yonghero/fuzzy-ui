---
layout: doc
---

# VideoPlayer

## 基本使用

通过`streamType`属性告知组件需要播放哪种类型的视频
有以下几种类型
- `flv` 前置安装mpegts.js
- `webrtc` 前置安装jswebrtc.js
- `hls` 前置安装hls.js
- `h5` 支持html5原生video标签支持的格式包括mp4等, 前置安装video.js

该组件只做了视频播放的基础封装
组件实例暴露以下功能及方法

- 视频播放 play()
- 视频暂停 pause()
- 视频销毁 destory()

可通过传递`config`扩展播放器的配置, 不同类型的播放器可传递的配置请自行翻阅官方文档
如: flv 格式的视频打开mpegts.js的官方文档进行查阅

::: tip 建议
项目都有特殊定制的视频需求, 该组件仅满足最基础的播放、暂停、销毁功能, 如有更加强大和更可控制的功能时，建议自行封装，部分源码可参考此播放器的实现。

如需要弹窗等功能,请自行实现, 这部分是基础且简单的。
:::

:::demo
video-player/basic
:::

