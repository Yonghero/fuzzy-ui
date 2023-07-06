import { createApp } from 'vue'
import FuzzyUI from '@hitotek/fuzzy-ui-components'
import './tailwind.css'
import './style.scss'
import '@hitotek/fuzzy-ui-theme-chalk'
import { ClickOutside } from '@hitotek/fuzzy-ui-utils'
import App from './App.vue'

const app = createApp(App)
app.directive('click-outside', ClickOutside)
app.use(FuzzyUI).mount('#app')
