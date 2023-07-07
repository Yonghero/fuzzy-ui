---
layout: doc
---

# 主题

## Light / Dark

直接采用`element plus`现有的主题更换方案
> https://element-plus.org/zh-CN/guide/theming.html

### 采用scss变量的方式

```scss

// 新建 light.scss

@forward "element-plus/theme-chalk/src/common/var.scss" with (
  $--colors: (
    'primary': (
      'base': #00599D,
    ),
  );
  $button-padding-vertical: (
    'large': 13px,
    'default': 9px,
    'small': 6px,
  ),
);

@use "dark.scss"

// 新建 dark.scss 

@forward "element-plus/theme-chalk/src/dark/var.scss" with (
  $colors: $--colors
);

// 新建 index.scss 

@use "element-plus/theme-chalk/src/dark/css-vars.scss" as *;
@use "element-plus/theme-chalk/src/index.scss";


```

```js

// 项目入口文件引入scss

import { createApp } from 'vue'
import FuzzyUI from '@hitotek/fuzzy-ui'
import '@hitotek/fuzzy-ui/style' // UI 样式
import App from './App.vue'
import "./index.scss" // 引入scss文件！！！

const app = createApp(App)

app.use(FuzzyUI)
app.mount('#app')

// 打包配置文件
// vite.config.js
export default defineConfig({
 css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/element.scss" as *;',
      },
    },
  },
})
```

### 通过 CSS 变量设置

就像这样

```css
:root {
  --el-color-primary: green;
}
```