import { createApp } from 'vue'
import FuzzyUI from '@hitotek/fuzzy-ui-components'

import './tailwind.css'
import './style.scss'

import App from './App.vue'

createApp(App).use(FuzzyUI).mount('#app')
