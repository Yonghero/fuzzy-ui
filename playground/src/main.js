import { createApp } from 'vue'
import { YHButton, YHButtonGroup } from '@hitotek/fuzzy-ui/components'

import './tailwind.css'
import './style.scss'

import App from './App.vue'

createApp(App).use(YHButton).use(YHButtonGroup).mount('#app')
